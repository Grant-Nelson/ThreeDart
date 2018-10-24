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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dr(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ds=function(){}
var dart=[["","",,H,{"^":"",mz:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cD:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dv==null){H.lQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.f7("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cW()]
if(v!=null)return v
v=H.lV(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cW(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
n:{"^":"a;",
v:function(a,b){return a===b},
gX:function(a){return H.bB(a)},
i:["eg",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hO:{"^":"n;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isO:1},
e8:{"^":"n;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isN:1},
cX:{"^":"n;",
gX:function(a){return 0},
i:["ei",function(a){return String(a)}]},
ir:{"^":"cX;"},
c6:{"^":"cX;"},
c0:{"^":"cX;",
i:function(a){var z=a[$.$get$dS()]
if(z==null)return this.ei(a)
return"JavaScript function for "+H.k(J.ai(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbW:1},
b7:{"^":"n;$ti",
h:function(a,b){H.E(b,H.A(a,0))
if(!!a.fixed$length)H.u(P.af("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.u(P.af("remove"))
for(z=0;z<a.length;++z)if(J.U(a[z],b)){a.splice(z,1)
return!0}return!1},
a2:function(a,b){var z,y
H.w(b,"$isd",[H.A(a,0)],"$asd")
if(!!a.fixed$length)H.u(P.af("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aV(a))}},
m:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.T(z,y,H.k(a[y]))
return z.join(b)},
hE:function(a){return this.m(a,"")},
hx:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.O,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aV(a))}throw H.e(H.cU())},
hw:function(a,b){return this.hx(a,b,null)},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bL:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.ad(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.e(P.ad(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.A(a,0)])
return H.b(a.slice(b,c),[H.A(a,0)])},
gbC:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cU())},
dj:function(a,b){var z,y
H.l(b,{func:1,ret:P.O,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aV(a))}return!1},
S:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
i:function(a){return P.cT(a,"[","]")},
gV:function(a){return new J.ar(a,a.length,0,[H.A(a,0)])},
gX:function(a){return H.bB(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.u(P.af("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.cc(b,"newLength",null))
if(b<0)throw H.e(P.ad(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.a4(b)
H.E(c,H.A(a,0))
if(!!a.immutable$list)H.u(P.af("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aY(a,b))
if(b>=a.length||b<0)throw H.e(H.aY(a,b))
a[b]=c},
$isd:1,
$isc:1,
q:{
hN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ad(a,0,4294967295,"length",null))
return J.e5(new Array(a),b)},
e5:function(a,b){return J.bv(H.b(a,[b]))},
bv:function(a){H.ca(a)
a.fixed$length=Array
return a}}},
my:{"^":"b7;$ti"},
ar:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bZ:{"^":"n;",
ghD:function(a){return a===0?1/a<0:a<0},
ie:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.af(""+a+".toInt()"))},
cq:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.af(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.af(""+a+".round()"))},
e2:function(a,b){var z
if(b>20)throw H.e(P.ad(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghD(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.e(H.aS(b))
return a*b},
e9:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dc(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dc(a,b)},
dc:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.af("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bh:function(a,b){var z
if(a>0)z=this.fM(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fM:function(a,b){return b>31?0:a>>>b},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.aS(b))
return a<b},
$isy:1,
$isa1:1},
e7:{"^":"bZ;",$isC:1},
e6:{"^":"bZ;"},
c_:{"^":"n;",
cg:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aY(a,b))
if(b<0)throw H.e(H.aY(a,b))
if(b>=a.length)H.u(H.aY(a,b))
return a.charCodeAt(b)},
aE:function(a,b){if(b>=a.length)throw H.e(H.aY(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.J(b)
if(typeof b!=="string")throw H.e(P.cc(b,null,null))
return a+b},
ee:function(a,b,c){var z
if(c>a.length)throw H.e(P.ad(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bK:function(a,b){return this.ee(a,b,0)},
aV:function(a,b,c){H.a4(c)
if(c==null)c=a.length
if(b<0)throw H.e(P.cs(b,null,null))
if(b>c)throw H.e(P.cs(b,null,null))
if(c>a.length)throw H.e(P.cs(c,null,null))
return a.substring(b,c)},
bb:function(a,b){return this.aV(a,b,null)},
ii:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hQ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ax:function(a,b){return this.hQ(a,b," ")},
hm:function(a,b,c){if(c>a.length)throw H.e(P.ad(c,0,a.length,null,null))
return H.fS(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isep:1,
$isj:1}}],["","",,H,{"^":"",
cU:function(){return new P.d6("No element")},
hM:function(){return new P.d6("Too many elements")},
q:{"^":"jB;a",
gn:function(a){return this.a.length},
k:function(a,b){return C.i.cg(this.a,b)},
$asf8:function(){return[P.C]},
$asv:function(){return[P.C]},
$asd:function(){return[P.C]},
$asc:function(){return[P.C]}},
dZ:{"^":"d;"},
co:{"^":"dZ;$ti",
gV:function(a){return new H.cZ(this,this.gn(this),0,[H.ag(this,"co",0)])},
cG:function(a,b){return this.eh(0,H.l(b,{func:1,ret:P.O,args:[H.ag(this,"co",0)]}))}},
cZ:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.c9(z)
x=y.gn(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.e(P.aV(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
i1:{"^":"d;a,b,$ti",
gV:function(a){return new H.i2(J.b2(this.a),this.b,this.$ti)},
gn:function(a){return J.b3(this.a)},
E:function(a,b){return this.b.$1(J.cH(this.a,b))},
$asd:function(a,b){return[b]}},
i2:{"^":"cV;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gJ(z))
return!0}this.a=null
return!1},
gJ:function(a){return this.a},
$ascV:function(a,b){return[b]}},
i3:{"^":"co;a,b,$ti",
gn:function(a){return J.b3(this.a)},
E:function(a,b){return this.b.$1(J.cH(this.a,b))},
$asco:function(a,b){return[b]},
$asd:function(a,b){return[b]}},
dh:{"^":"d;a,b,$ti",
gV:function(a){return new H.jU(J.b2(this.a),this.b,this.$ti)}},
jU:{"^":"cV;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gJ(z)))return!0
return!1},
gJ:function(a){var z=this.a
return z.gJ(z)}},
ck:{"^":"a;$ti"},
f8:{"^":"a;$ti"},
jB:{"^":"cn+f8;"}}],["","",,H,{"^":"",
lJ:function(a){return init.types[H.a4(a)]},
lT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isF},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ai(a)
if(typeof z!=="string")throw H.e(H.aS(a))
return z},
bB:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.L(a).$isc6){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aE(w,0)===36)w=C.i.bb(w,1)
r=H.dw(H.ca(H.aZ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
et:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iB:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.aS(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bh(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.aS(w))}return H.et(z)},
eu:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.aS(x))
if(x<0)throw H.e(H.aS(x))
if(x>65535)return H.iB(a)}return H.et(a)},
d3:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bh(z,10))>>>0,56320|z&1023)}throw H.e(P.ad(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iA:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
iy:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
iu:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
iv:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
ix:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
iz:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
iw:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
o:function(a){throw H.e(H.aS(a))},
i:function(a,b){if(a==null)J.b3(a)
throw H.e(H.aY(a,b))},
aY:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,"index",null)
z=H.a4(J.b3(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.Q(b,a,"index",null,z)
return P.cs(b,"index",null)},
lE:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.ax(!0,b,"end",null)},
aS:function(a){return new P.ax(!0,a,null,null)},
lx:function(a){if(typeof a!=="number")throw H.e(H.aS(a))
return a},
e:function(a){var z
if(a==null)a=new P.eo()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fT})
z.name=""}else z.toString=H.fT
return z},
fT:function(){return J.ai(this.dartException)},
u:function(a){throw H.e(a)},
z:function(a){throw H.e(P.aV(a))},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.m8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bh(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cY(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.en(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eR()
u=$.$get$eS()
t=$.$get$eT()
s=$.$get$eU()
r=$.$get$eY()
q=$.$get$eZ()
p=$.$get$eW()
$.$get$eV()
o=$.$get$f0()
n=$.$get$f_()
m=v.aa(y)
if(m!=null)return z.$1(H.cY(H.J(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cY(H.J(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.en(H.J(y),m))}}return z.$1(new H.jA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eC()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ax(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eC()
return a},
bm:function(a){var z
if(a==null)return new H.fs(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fs(a)},
lG:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.T(0,a[y],a[x])}return b},
lS:function(a,b,c,d,e,f){H.h(a,"$isbW")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.r("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var z
H.a4(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lS)
a.$identity=z
return z},
hc:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isc){z.$reflectionInfo=d
x=H.iF(z).r}else x=d
w=e?Object.create(new H.j4().constructor.prototype):Object.create(new H.cJ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ay
if(typeof u!=="number")return u.I()
$.ay=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dN(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lJ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dI:H.cK
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dN(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
h9:function(a,b,c,d){var z=H.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dN:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hb(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h9(y,!w,z,b)
if(y===0){w=$.ay
if(typeof w!=="number")return w.I()
$.ay=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bp
if(v==null){v=H.ce("self")
$.bp=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ay
if(typeof w!=="number")return w.I()
$.ay=w+1
t+=w
w="return function("+t+"){return this."
v=$.bp
if(v==null){v=H.ce("self")
$.bp=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
ha:function(a,b,c,d){var z,y
z=H.cK
y=H.dI
switch(b?-1:a){case 0:throw H.e(H.iO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hb:function(a,b){var z,y,x,w,v,u,t,s
z=$.bp
if(z==null){z=H.ce("self")
$.bp=z}y=$.dH
if(y==null){y=H.ce("receiver")
$.dH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ha(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.ay
if(typeof y!=="number")return y.I()
$.ay=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.ay
if(typeof y!=="number")return y.I()
$.ay=y+1
return new Function(z+y+"}")()},
dr:function(a,b,c,d,e,f,g){var z,y
z=J.bv(H.ca(b))
H.a4(c)
y=!!J.L(d).$isc?J.bv(d):d
return H.hc(a,z,c,y,!!e,f,g)},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aG(a,"String"))},
lZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aG(a,"num"))},
dp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aG(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aG(a,"int"))},
fQ:function(a,b){throw H.e(H.aG(a,H.J(b).substring(3)))},
m0:function(a,b){var z=J.c9(b)
throw H.e(H.h8(a,z.aV(b,3,z.gn(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fQ(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.m0(a,b)},
ca:function(a){if(a==null)return a
if(!!J.L(a).$isc)return a
throw H.e(H.aG(a,"List"))},
lU:function(a,b){if(a==null)return a
if(!!J.L(a).$isc)return a
if(J.L(a)[b])return a
H.fQ(a,b)},
fJ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a4(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fJ(J.L(a))
if(z==null)return!1
y=H.fM(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dl)return a
$.dl=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.aG(a,z)
throw H.e(y)}finally{$.dl=!1}},
dt:function(a,b){if(a!=null&&!H.dq(a,b))H.u(H.aG(a,H.cb(b)))
return a},
fE:function(a){var z
if(a instanceof H.p){z=H.fJ(J.L(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.bb(a)},
m5:function(a){throw H.e(new P.hj(H.J(a)))},
fK:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aZ:function(a){if(a==null)return
return a.$ti},
nt:function(a,b,c){return H.bn(a["$as"+H.k(c)],H.aZ(b))},
bT:function(a,b,c,d){var z
H.J(c)
H.a4(d)
z=H.bn(a["$as"+H.k(c)],H.aZ(b))
return z==null?null:z[d]},
ag:function(a,b,c){var z
H.J(b)
H.a4(c)
z=H.bn(a["$as"+H.k(b)],H.aZ(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.a4(b)
z=H.aZ(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.w(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dw(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.k(b[y])}if('func' in a)return H.ln(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ln:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
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
t=C.i.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b0(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b0(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b0(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b0(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lF(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.J(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dw:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.bF("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b0(u,c)}v="<"+z.i(0)+">"
return v},
bn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bS:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aZ(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fH(H.bn(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.J(b)
H.ca(c)
H.J(d)
if(a==null)return a
z=H.bS(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dw(c,0,null)
throw H.e(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fH:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
nr:function(a,b,c){return a.apply(b,H.bn(J.L(b)["$as"+H.k(c)],H.aZ(b)))},
fN:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="N"||a===-1||a===-2||H.fN(z)}return!1},
dq:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="N"||b===-1||b===-2||H.fN(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.L(a).constructor
x=H.aZ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dq(a,b))throw H.e(H.aG(a,H.cb(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.fM(a,b,c,d)
if('func' in a)return c.builtin$cls==="bW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bt" in y.prototype))return!1
w=y.prototype["$as"+"bt"]
v=H.bn(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fH(H.bn(r,z),b,u,d)},
fM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lY(m,b,l,d)},
lY:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
ns:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
lV:function(a){var z,y,x,w,v,u
z=H.J($.fL.$1(a))
y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.J($.fG.$2(a,z))
if(z!=null){y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cF(x)
$.cB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cE[z]=x
return x}if(v==="-"){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fP(a,x)
if(v==="*")throw H.e(P.f7(z))
if(init.leafTags[z]===true){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fP(a,x)},
fP:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dx(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cF:function(a){return J.dx(a,!1,null,!!a.$isF)},
lX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cF(z)
else return J.dx(z,c,null,null)},
lQ:function(){if(!0===$.dv)return
$.dv=!0
H.lR()},
lR:function(){var z,y,x,w,v,u,t,s
$.cB=Object.create(null)
$.cE=Object.create(null)
H.lM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fR.$1(v)
if(u!=null){t=H.lX(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lM:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.bi(C.H,H.bi(C.M,H.bi(C.r,H.bi(C.r,H.bi(C.L,H.bi(C.I,H.bi(C.J(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fL=new H.lN(v)
$.fG=new H.lO(u)
$.fR=new H.lP(t)},
bi:function(a,b){return a(b)||b},
fS:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dA:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iE:{"^":"a;a,b,c,d,e,f,r,0x",q:{
iF:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bv(z)
y=z[0]
x=z[1]
return new H.iE(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jn:{"^":"a;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
io:{"^":"a2;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
en:function(a,b){return new H.io(a,b==null?null:b.method)}}},
hR:{"^":"a2;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
q:{
cY:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hR(a,y,z?null:b.receiver)}}},
jA:{"^":"a2;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
m8:{"^":"p:15;a",
$1:function(a){if(!!J.L(a).$isa2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fs:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
ge5:function(){return this},
$isbW:1,
ge5:function(){return this}},
eH:{"^":"p;"},
j4:{"^":"eH;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cJ:{"^":"eH;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cJ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bB(this.a)
else y=typeof z!=="object"?J.b1(z):H.bB(z)
return(y^H.bB(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
q:{
cK:function(a){return a.a},
dI:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cJ("self","target","receiver","name")
y=J.bv(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jo:{"^":"a2;a",
i:function(a){return this.a},
q:{
aG:function(a,b){return new H.jo("TypeError: "+H.k(P.cj(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
h7:{"^":"a2;a",
i:function(a){return this.a},
q:{
h8:function(a,b){return new H.h7("CastError: "+H.k(P.cj(a))+": type '"+H.fE(a)+"' is not a subtype of type '"+b+"'")}}},
iN:{"^":"a2;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
q:{
iO:function(a){return new H.iN(a)}}},
b8:{"^":"eh;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
ga3:function(a){return new H.ed(this,[H.A(this,0)])},
dq:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d_(y,b)}else return this.hB(b)},
hB:function(a){var z=this.d
if(z==null)return!1
return this.cr(this.bW(z,J.b1(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.hC(b)},
hC:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bW(z,J.b1(a)&0x3ffffff)
x=this.cr(y,a)
if(x<0)return
return y[x].b},
T:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c1()
this.b=z}this.cT(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c1()
this.c=y}this.cT(y,b,c)}else{x=this.d
if(x==null){x=this.c1()
this.d=x}w=J.b1(b)&0x3ffffff
v=this.bW(x,w)
if(v==null)this.c6(x,w,[this.c2(b,c)])
else{u=this.cr(v,b)
if(u>=0)v[u].b=c
else v.push(this.c2(b,c))}}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aV(this))
z=z.c}},
cT:function(a,b,c){var z
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
z=this.be(a,b)
if(z==null)this.c6(a,b,this.c2(b,c))
else z.b=c},
eV:function(){this.r=this.r+1&67108863},
c2:function(a,b){var z,y
z=new H.hV(H.E(a,H.A(this,0)),H.E(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eV()
return z},
cr:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
i:function(a){return P.ei(this)},
be:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
eP:function(a,b){delete a[b]},
d_:function(a,b){return this.be(a,b)!=null},
c1:function(){var z=Object.create(null)
this.c6(z,"<non-identifier-key>",z)
this.eP(z,"<non-identifier-key>")
return z},
$isec:1},
hV:{"^":"a;a,b,0c,0d"},
ed:{"^":"dZ;a,$ti",
gn:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.hW(z,z.r,this.$ti)
y.c=z.e
return y}},
hW:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aV(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lN:{"^":"p:15;a",
$1:function(a){return this.a(a)}},
lO:{"^":"p:44;a",
$2:function(a,b){return this.a(a,b)}},
lP:{"^":"p:35;a",
$1:function(a){return this.a(H.J(a))}},
hP:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isep:1,
q:{
hQ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.hD("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lF:function(a){return J.e5(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
m_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bO:function(a){return a},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.aY(b,a))},
lm:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.lE(a,b,c))
return b},
ih:{"^":"n;",$isn9:1,"%":"DataView;ArrayBufferView;d2|fm|fn|ig|fo|fp|aW"},
d2:{"^":"ih;",
gn:function(a){return a.length},
$isF:1,
$asF:I.ds},
ig:{"^":"fn;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
$asck:function(){return[P.y]},
$asv:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
$isc:1,
$asc:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
aW:{"^":"fp;",
$asck:function(){return[P.C]},
$asv:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]}},
mH:{"^":"aW;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mI:{"^":"aW;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mJ:{"^":"aW;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mK:{"^":"aW;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mL:{"^":"aW;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mM:{"^":"aW;",
gn:function(a){return a.length},
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ii:{"^":"aW;",
gn:function(a){return a.length},
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
bL:function(a,b,c){return new Uint8Array(a.subarray(b,H.lm(b,c,a.length)))},
"%":";Uint8Array"},
fm:{"^":"d2+v;"},
fn:{"^":"fm+ck;"},
fo:{"^":"d2+v;"},
fp:{"^":"fo+ck;"}}],["","",,P,{"^":"",
jW:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lu()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bj(new P.jY(z),1)).observe(y,{childList:true})
return new P.jX(z,y,x)}else if(self.setImmediate!=null)return P.lv()
return P.lw()},
ne:[function(a){self.scheduleImmediate(H.bj(new P.jZ(H.l(a,{func:1,ret:-1})),0))},"$1","lu",4,0,10],
nf:[function(a){self.setImmediate(H.bj(new P.k_(H.l(a,{func:1,ret:-1})),0))},"$1","lv",4,0,10],
ng:[function(a){P.dc(C.l,H.l(a,{func:1,ret:-1}))},"$1","lw",4,0,10],
dc:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a1(a.a,1000)
return P.l1(z<0?0:z,b)},
eM:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bc]})
z=C.h.a1(a.a,1000)
return P.l2(z<0?0:z,b)},
lq:function(a,b){if(H.c8(a,{func:1,args:[P.a,P.av]}))return b.i_(a,null,P.a,P.av)
if(H.c8(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lp:function(){var z,y
for(;z=$.bh,z!=null;){$.bQ=null
y=z.b
$.bh=y
if(y==null)$.bP=null
z.a.$0()}},
nq:[function(){$.dm=!0
try{P.lp()}finally{$.bQ=null
$.dm=!1
if($.bh!=null)$.$get$di().$1(P.fI())}},"$0","fI",0,0,3],
fD:function(a){var z=new P.fe(H.l(a,{func:1,ret:-1}))
if($.bh==null){$.bP=z
$.bh=z
if(!$.dm)$.$get$di().$1(P.fI())}else{$.bP.b=z
$.bP=z}},
lt:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bh
if(z==null){P.fD(a)
$.bQ=$.bP
return}y=new P.fe(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.bh=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
m1:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.T
if(C.j===y){P.cA(null,null,C.j,a)
return}y.toString
P.cA(null,null,y,H.l(y.cb(a),z))},
eL:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.T
if(y===C.j){y.toString
return P.dc(a,b)}return P.dc(a,H.l(y.cb(b),z))},
jk:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bc]}
H.l(b,z)
y=$.T
if(y===C.j){y.toString
return P.eM(a,b)}x=y.dk(b,P.bc)
$.T.toString
return P.eM(a,H.l(x,z))},
cz:function(a,b,c,d,e){var z={}
z.a=d
P.lt(new P.lr(z,e))},
fB:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
ls:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cA:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cb(d):c.hj(d,-1)
P.fD(d)},
jY:{"^":"p:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jX:{"^":"p:41;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jZ:{"^":"p:2;a",
$0:function(){this.a.$0()}},
k_:{"^":"p:2;a",
$0:function(){this.a.$0()}},
fw:{"^":"a;a,0b,c",
eA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bj(new P.l4(this,b),0),a)
else throw H.e(P.af("`setTimeout()` not found."))},
eB:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bj(new P.l3(this,a,Date.now(),b),0),a)
else throw H.e(P.af("Periodic timer."))},
$isbc:1,
q:{
l1:function(a,b){var z=new P.fw(!0,0)
z.eA(a,b)
return z},
l2:function(a,b){var z=new P.fw(!1,0)
z.eB(a,b)
return z}}},
l4:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
l3:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.em(w,x)}z.c=y
this.d.$1(z)}},
bg:{"^":"a;0a,b,c,d,e,$ti",
hI:function(a){if(this.c!==6)return!0
return this.b.b.cE(H.l(this.d,{func:1,ret:P.O,args:[P.a]}),a.a,P.O,P.a)},
hA:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.a,P.av]}))return H.dt(w.i6(z,a.a,a.b,null,y,P.av),x)
else return H.dt(w.cE(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aR:{"^":"a;da:a<,b,0fC:c<,$ti",
e1:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lq(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aR(0,$.T,[c])
w=b==null?1:3
this.cU(new P.bg(x,w,a,b,[z,c]))
return x},
ic:function(a,b){return this.e1(a,null,b)},
cU:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbg")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaR")
z=y.a
if(z<4){y.cU(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cA(null,null,z,H.l(new P.ke(this,a),{func:1,ret:-1}))}},
d6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbg")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaR")
y=u.a
if(y<4){u.d6(a)
return}this.a=y
this.c=u.c}z.a=this.bg(a)
y=this.b
y.toString
P.cA(null,null,y,H.l(new P.kj(z,this),{func:1,ret:-1}))}},
c4:function(){var z=H.h(this.c,"$isbg")
this.c=null
return this.bg(z)},
bg:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cX:function(a){var z,y,x,w
z=H.A(this,0)
H.dt(a,{futureOr:1,type:z})
y=this.$ti
x=H.bS(a,"$isbt",y,"$asbt")
if(x){z=H.bS(a,"$isaR",y,null)
if(z)P.fh(a,this)
else P.kf(a,this)}else{w=this.c4()
H.E(a,z)
this.a=4
this.c=a
P.bN(this,w)}},
bR:[function(a,b){var z
H.h(b,"$isav")
z=this.c4()
this.a=8
this.c=new P.aj(a,b)
P.bN(this,z)},function(a){return this.bR(a,null)},"il","$2","$1","geK",4,2,39],
$isbt:1,
q:{
kf:function(a,b){var z,y,x
b.a=1
try{a.e1(new P.kg(b),new P.kh(b),null)}catch(x){z=H.ah(x)
y=H.bm(x)
P.m1(new P.ki(b,z,y))}},
fh:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaR")
if(z>=4){y=b.c4()
b.a=a.a
b.c=a.c
P.bN(b,y)}else{y=H.h(b.c,"$isbg")
b.a=2
b.c=a
a.d6(y)}},
bN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isaj")
y=y.b
u=v.a
t=v.b
y.toString
P.cz(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bN(z.a,b)}y=z.a
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
if(p){H.h(r,"$isaj")
y=y.b
u=r.a
t=r.b
y.toString
P.cz(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.km(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kl(x,b,r).$0()}else if((y&2)!==0)new P.kk(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.L(y).$isbt){if(y.a>=4){n=H.h(t.c,"$isbg")
t.c=null
b=t.bg(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fh(y,t)
return}}m=b.b
n=H.h(m.c,"$isbg")
m.c=null
b=m.bg(n)
y=x.a
u=x.b
if(!y){H.E(u,H.A(m,0))
m.a=4
m.c=u}else{H.h(u,"$isaj")
m.a=8
m.c=u}z.a=m
y=m}}}},
ke:{"^":"p:2;a,b",
$0:function(){P.bN(this.a,this.b)}},
kj:{"^":"p:2;a,b",
$0:function(){P.bN(this.b,this.a.a)}},
kg:{"^":"p:20;a",
$1:function(a){var z=this.a
z.a=0
z.cX(a)}},
kh:{"^":"p:32;a",
$2:function(a,b){this.a.bR(a,H.h(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
ki:{"^":"p:2;a,b,c",
$0:function(){this.a.bR(this.b,this.c)}},
km:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e0(H.l(w.d,{func:1}),null)}catch(v){y=H.ah(v)
x=H.bm(v)
if(this.d){w=H.h(this.a.a.c,"$isaj").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isaj")
else u.b=new P.aj(y,x)
u.a=!0
return}if(!!J.L(z).$isbt){if(z instanceof P.aR&&z.gda()>=4){if(z.gda()===8){w=this.b
w.b=H.h(z.gfC(),"$isaj")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ic(new P.kn(t),null)
w.a=!1}}},
kn:{"^":"p:33;a",
$1:function(a){return this.a}},
kl:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.E(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.cE(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ah(t)
y=H.bm(t)
x=this.a
x.b=new P.aj(z,y)
x.a=!0}}},
kk:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isaj")
w=this.c
if(w.hI(z)&&w.e!=null){v=this.b
v.b=w.hA(z)
v.a=!1}}catch(u){y=H.ah(u)
x=H.bm(u)
w=H.h(this.a.a.c,"$isaj")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aj(y,x)
s.a=!0}}},
fe:{"^":"a;a,0b"},
d7:{"^":"a;$ti",
gn:function(a){var z,y
z={}
y=new P.aR(0,$.T,[P.C])
z.a=0
this.hH(new P.j7(z,this),!0,new P.j8(z,y),y.geK())
return y}},
j7:{"^":"p;a,b",
$1:function(a){H.E(a,H.ag(this.b,"d7",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.ag(this.b,"d7",0)]}}},
j8:{"^":"p:2;a,b",
$0:function(){this.b.cX(this.a.a)}},
eF:{"^":"a;$ti"},
j6:{"^":"a;"},
bc:{"^":"a;"},
aj:{"^":"a;a,b",
i:function(a){return H.k(this.a)},
$isa2:1},
lb:{"^":"a;",$isnd:1},
lr:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eo()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
kH:{"^":"lb;",
i7:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.ah(x)
y=H.bm(x)
P.cz(null,null,this,z,H.h(y,"$isav"))}},
i8:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.ah(x)
y=H.bm(x)
P.cz(null,null,this,z,H.h(y,"$isav"))}},
hj:function(a,b){return new P.kJ(this,H.l(a,{func:1,ret:b}),b)},
cb:function(a){return new P.kI(this,H.l(a,{func:1,ret:-1}))},
dk:function(a,b){return new P.kK(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e0:function(a,b){H.l(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cE:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.T===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
i6:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.T===C.j)return a.$2(b,c)
return P.ls(null,null,this,a,b,c,d,e,f)},
i_:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
kJ:{"^":"p;a,b,c",
$0:function(){return this.a.e0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kI:{"^":"p:3;a,b",
$0:function(){return this.a.i7(this.b)}},
kK:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.i8(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hX:function(a,b,c){H.ca(a)
return H.w(H.lG(a,new H.b8(0,0,[b,c])),"$isec",[b,c],"$asec")},
ee:function(a,b){return new H.b8(0,0,[a,b])},
c2:function(a,b,c,d){return new P.ku(0,0,[d])},
hL:function(a,b,c){var z,y
if(P.dn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.lo(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.eG(b,H.lU(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cT:function(a,b,c){var z,y,x
if(P.dn(a))return b+"..."+c
z=new P.bF(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.eG(x.gaF(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dn:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
lo:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.k(z.gJ(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gJ(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ(z);++x
for(;z.A();t=s,s=r){r=z.gJ(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ef:function(a,b){var z,y
z=P.c2(null,null,null,b)
for(y=J.b2(a);y.A();)z.h(0,H.E(y.gJ(y),b))
return z},
ei:function(a){var z,y,x
z={}
if(P.dn(a))return"{...}"
y=new P.bF("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.fX(a,new P.i0(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
ku:{"^":"ko;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fl(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
S:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$iscy")!=null}else{y=this.eL(b)
return y}},
eL:function(a){var z=this.d
if(z==null)return!1
return this.bU(this.d3(z,a),a)>=0},
h:function(a,b){var z,y
H.E(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cV(y,b)}else return this.eD(0,b)},
eD:function(a,b){var z,y,x
H.E(b,H.A(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cY(b)
x=z[y]
if(x==null)z[y]=[this.bQ(b)]
else{if(this.bU(x,b)>=0)return!1
x.push(this.bQ(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d7(this.c,b)
else return this.fs(0,b)},
fs:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.d3(z,b)
x=this.bU(y,b)
if(x<0)return!1
this.dd(y.splice(x,1)[0])
return!0},
cV:function(a,b){H.E(b,H.A(this,0))
if(H.h(a[b],"$iscy")!=null)return!1
a[b]=this.bQ(b)
return!0},
d7:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iscy")
if(z==null)return!1
this.dd(z)
delete a[b]
return!0},
cW:function(){this.r=this.r+1&67108863},
bQ:function(a){var z,y
z=new P.cy(H.E(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cW()
return z},
dd:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cW()},
cY:function(a){return J.b1(a)&0x3ffffff},
d3:function(a,b){return a[this.cY(b)]},
bU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
q:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cy:{"^":"a;a,0b,0c"},
fl:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aV(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.A(this,0))
this.c=z.b
return!0}}}},
ko:{"^":"iP;"},
cn:{"^":"kv;",$isd:1,$isc:1},
v:{"^":"a;$ti",
gV:function(a){return new H.cZ(a,this.gn(a),0,[H.bT(this,a,"v",0)])},
E:function(a,b){return this.k(a,b)},
ih:function(a,b){var z,y,x
z=H.b([],[H.bT(this,a,"v",0)])
C.a.sn(z,this.gn(a))
y=0
while(!0){x=this.gn(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.T(z,y,this.k(a,y));++y}return z},
ig:function(a){return this.ih(a,!0)},
i:function(a){return P.cT(a,"[","]")}},
eh:{"^":"a8;"},
i0:{"^":"p:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
a8:{"^":"a;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bT(this,a,"a8",0),H.bT(this,a,"a8",1)]})
for(z=J.b2(this.ga3(a));z.A();){y=z.gJ(z)
b.$2(y,this.k(a,y))}},
gn:function(a){return J.b3(this.ga3(a))},
i:function(a){return P.ei(a)},
$isa3:1},
iR:{"^":"a;$ti",
a2:function(a,b){var z
for(z=J.b2(H.w(b,"$isd",this.$ti,"$asd"));z.A();)this.h(0,z.gJ(z))},
i:function(a){return P.cT(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.dE("index"))
if(b<0)H.u(P.ad(b,0,null,"index",null))
for(z=new P.fl(this,this.r,this.$ti),z.c=this.e,y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.e(P.Q(b,this,"index",null,y))},
$isd:1},
iP:{"^":"iR;"},
kv:{"^":"a+v;"}}],["","",,P,{"^":"",cO:{"^":"a;$ti"},ch:{"^":"j6;$ti"},hu:{"^":"cO;",
$ascO:function(){return[P.j,[P.c,P.C]]}},hI:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hH:{"^":"ch;a",
eM:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.bF("")
if(w>b)v.a+=C.i.aV(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.h0(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asch:function(){return[P.j,P.j]}},jH:{"^":"hu;a"},jI:{"^":"ch;",
ho:function(a,b,c){var z,y,x,w
z=a.length
P.ev(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.l9(0,0,x)
if(w.eR(a,b,z)!==z)w.de(C.i.cg(a,z-1),0)
return C.R.bL(x,0,w.b)},
hn:function(a){return this.ho(a,0,null)},
$asch:function(){return[P.j,[P.c,P.C]]}},l9:{"^":"a;a,b,c",
de:function(a,b){var z,y,x,w,v
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
eR:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cg(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aE(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.de(w,C.i.aE(a,u)))x=u}else if(w<=2047){v=this.b
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
hw:function(a){var z=J.L(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
hY:function(a,b,c,d){var z,y
H.E(b,d)
z=J.hN(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.T(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
hZ:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gV(a);x.A();)C.a.h(y,H.E(x.gJ(x),c))
if(b)return y
return H.w(J.bv(y),"$isc",z,"$asc")},
d8:function(a,b,c){var z,y
z=P.C
H.w(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.ev(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ac()
z=c<y}else z=!0
return H.eu(z?C.a.bL(a,b,c):a)}return P.j9(a,b,c)},
j9:function(a,b,c){var z,y,x
H.w(a,"$isd",[P.C],"$asd")
z=J.b2(a)
for(y=0;y<b;++y)if(!z.A())throw H.e(P.ad(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gJ(z))
return H.eu(x)},
iG:function(a,b,c){return new H.hP(a,H.hQ(a,!1,!0,!1))},
fz:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.C],"$asc")
if(c===C.p){z=$.$get$fy().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.hn(H.E(b,H.ag(c,"cO",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.d3(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hw(a)},
r:function(a){return new P.fg(a)},
dz:function(a){H.m_(a)},
O:{"^":"a;"},
"+bool":0,
as:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.h.bh(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hl(H.iA(this))
y=P.bU(H.iy(this))
x=P.bU(H.iu(this))
w=P.bU(H.iv(this))
v=P.bU(H.ix(this))
u=P.bU(H.iz(this))
t=P.hm(H.iw(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"a1;"},
"+double":0,
b5:{"^":"a;a",
j:function(a,b){return new P.b5(C.h.ab(this.a*b))},
ac:function(a,b){return C.h.ac(this.a,H.h(b,"$isb5").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.b5))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hq()
y=this.a
if(y<0)return"-"+new P.b5(0-y).i(0)
x=z.$1(C.h.a1(y,6e7)%60)
w=z.$1(C.h.a1(y,1e6)%60)
v=new P.hp().$1(y%1e6)
return""+C.h.a1(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
q:{
dY:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hp:{"^":"p:28;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hq:{"^":"p:28;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a2:{"^":"a;"},
eo:{"^":"a2;",
i:function(a){return"Throw of null."}},
ax:{"^":"a2;a,b,c,d",
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbT()+y+x
if(!this.a)return w
v=this.gbS()
u=P.cj(this.b)
return w+v+": "+H.k(u)},
q:{
h2:function(a){return new P.ax(!1,null,null,a)},
cc:function(a,b,c){return new P.ax(!0,a,b,c)},
dE:function(a){return new P.ax(!1,null,a,"Must not be null")}}},
cr:{"^":"ax;e,f,a,b,c,d",
gbT:function(){return"RangeError"},
gbS:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
q:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
ev:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.e(P.ad(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.e(P.ad(b,a,c,"end",f))
return b}return c}}},
hK:{"^":"ax;e,n:f>,a,b,c,d",
gbT:function(){return"RangeError"},
gbS:function(){if(J.fU(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
q:{
Q:function(a,b,c,d,e){var z=H.a4(e!=null?e:J.b3(b))
return new P.hK(b,z,!0,a,c,"Index out of range")}}},
jC:{"^":"a2;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
af:function(a){return new P.jC(a)}}},
jz:{"^":"a2;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
f7:function(a){return new P.jz(a)}}},
d6:{"^":"a2;a",
i:function(a){return"Bad state: "+this.a},
q:{
eE:function(a){return new P.d6(a)}}},
hf:{"^":"a2;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cj(z))+"."},
q:{
aV:function(a){return new P.hf(a)}}},
ip:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa2:1},
eC:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa2:1},
hj:{"^":"a2;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fg:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hD:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.aV(x,0,75)+"..."
return y+"\n"+x}},
bW:{"^":"a;"},
C:{"^":"a1;"},
"+int":0,
d:{"^":"a;$ti",
cG:["eh",function(a,b){var z=H.ag(this,"d",0)
return new H.dh(this,H.l(b,{func:1,ret:P.O,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gV(this)
for(y=0;z.A();)++y
return y},
gaB:function(a){var z,y
z=this.gV(this)
if(!z.A())throw H.e(H.cU())
y=z.gJ(z)
if(z.A())throw H.e(H.hM())
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.dE("index"))
if(b<0)H.u(P.ad(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.A();){x=z.gJ(z)
if(b===y)return x;++y}throw H.e(P.Q(b,this,"index",null,y))},
i:function(a){return P.hL(this,"(",")")}},
cV:{"^":"a;$ti"},
c:{"^":"a;$ti",$isd:1},
"+List":0,
a3:{"^":"a;$ti"},
N:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gX:function(a){return H.bB(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"a;"},
j:{"^":"a;",$isep:1},
"+String":0,
bF:{"^":"a;aF:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
eG:function(a,b,c){var z=J.b2(b)
if(!z.A())return a
if(c.length===0){do a+=H.k(z.gJ(z))
while(z.A())}else{a+=H.k(z.gJ(z))
for(;z.A();)a=a+c+H.k(z.gJ(z))}return a}}}}],["","",,W,{"^":"",
dD:function(a){var z=document.createElement("a")
return z},
cN:function(a,b){var z=document.createElement("canvas")
return z},
hr:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).ag(z,a,b,c)
y.toString
z=W.D
z=new H.dh(new W.ap(y),H.l(new W.hs(),{func:1,ret:P.O,args:[z]}),[z])
return H.h(z.gaB(z),"$isV")},
ht:function(a){H.h(a,"$isa7")
return"wheel"},
br:function(a){var z,y,x
z="element tag unavailable"
try{y=J.h_(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ah(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fk:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fF:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dk(a,b)},
ab:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ma:{"^":"n;0n:length=","%":"AccessibleNodeList"},
mb:{"^":"ab;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mc:{"^":"ab;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dG:{"^":"ab;",$isdG:1,"%":"HTMLBaseElement"},
h6:{"^":"n;","%":";Blob"},
cd:{"^":"ab;",$iscd:1,"%":"HTMLBodyElement"},
cM:{"^":"ab;",
bI:function(a,b,c){if(c!=null)return a.getContext(b,P.ly(c,null))
return a.getContext(b)},
e7:function(a,b){return this.bI(a,b,null)},
$iscM:1,
"%":"HTMLCanvasElement"},
dL:{"^":"n;",$isdL:1,"%":"CanvasRenderingContext2D"},
mi:{"^":"D;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mk:{"^":"hi;0n:length=","%":"CSSPerspective"},
bq:{"^":"n;",$isbq:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ml:{"^":"k3;0n:length=",
e8:function(a,b){var z=a.getPropertyValue(this.eH(a,b))
return z==null?"":z},
eH:function(a,b){var z,y
z=$.$get$dQ()
y=z[b]
if(typeof y==="string")return y
y=this.fN(a,b)
z[b]=y
return y},
fN:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hn()+b
if(z in a)return z
return b},
gcc:function(a){return a.bottom},
gam:function(a){return a.height},
gaP:function(a){return a.left},
gb4:function(a){return a.right},
gb8:function(a){return a.top},
gan:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hh:{"^":"a;",
gaP:function(a){return this.e8(a,"left")}},
dR:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hi:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mm:{"^":"dR;0n:length=","%":"CSSTransformValue"},
mn:{"^":"dR;0n:length=","%":"CSSUnparsedValue"},
mo:{"^":"n;0n:length=","%":"DataTransferItemList"},
b4:{"^":"ab;",$isb4:1,"%":"HTMLDivElement"},
mp:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
mq:{"^":"k5;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.aa,P.a1]]},
$asv:function(){return[[P.aa,P.a1]]},
$isd:1,
$asd:function(){return[[P.aa,P.a1]]},
$isc:1,
$asc:function(){return[[P.aa,P.a1]]},
$asB:function(){return[[P.aa,P.a1]]},
"%":"ClientRectList|DOMRectList"},
ho:{"^":"n;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gan(a))+" x "+H.k(this.gam(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isaa",[P.a1],"$asaa")
if(!z)return!1
z=J.bl(b)
return a.left===z.gaP(b)&&a.top===z.gb8(b)&&this.gan(a)===z.gan(b)&&this.gam(a)===z.gam(b)},
gX:function(a){return W.fk(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gcc:function(a){return a.bottom},
gam:function(a){return a.height},
gaP:function(a){return a.left},
gb4:function(a){return a.right},
gb8:function(a){return a.top},
gan:function(a){return a.width},
$isaa:1,
$asaa:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
mr:{"^":"k7;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.j]},
$asv:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"DOMStringList"},
ms:{"^":"n;0n:length=","%":"DOMTokenList"},
k2:{"^":"cn;d2:a<,b",
gn:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.h(z[b],"$isV")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.ig(this)
return new J.ar(z,z.length,0,[H.A(z,0)])},
$asv:function(){return[W.V]},
$asd:function(){return[W.V]},
$asc:function(){return[W.V]}},
V:{"^":"D;0i9:tagName=",
ghi:function(a){return new W.k8(a)},
gdm:function(a){return new W.k2(a,a.children)},
gdn:function(a){return P.iD(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
ag:["bM",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e0
if(z==null){z=H.b([],[W.aD])
y=new W.em(z)
C.a.h(z,W.fi(null))
C.a.h(z,W.ft())
$.e0=y
d=y}else d=z
z=$.e_
if(z==null){z=new W.fA(d)
$.e_=z
c=z}else{z.a=d
c=z}}if($.aJ==null){z=document
y=z.implementation.createHTMLDocument("")
$.aJ=y
$.cR=y.createRange()
y=$.aJ
y.toString
y=y.createElement("base")
H.h(y,"$isdG")
y.href=z.baseURI
$.aJ.head.appendChild(y)}z=$.aJ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$iscd")}z=$.aJ
if(!!this.$iscd)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aJ.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.P,a.tagName)){$.cR.selectNodeContents(x)
w=$.cR.createContextualFragment(b)}else{x.innerHTML=b
w=$.aJ.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aJ.body
if(x==null?z!=null:x!==z)J.dC(x)
c.cL(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ag(a,b,c,null)},"hp",null,null,"giY",5,5,null],
ec:function(a,b,c,d){a.textContent=null
a.appendChild(this.ag(a,b,c,d))},
eb:function(a,b){return this.ec(a,b,null,null)},
$isV:1,
"%":";Element"},
hs:{"^":"p:18;",
$1:function(a){return!!J.L(H.h(a,"$isD")).$isV}},
a6:{"^":"n;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"n;",
dg:["ef",function(a,b,c,d){H.l(c,{func:1,args:[W.a6]})
if(c!=null)this.eE(a,b,c,!1)}],
eE:function(a,b,c,d){return a.addEventListener(b,H.bj(H.l(c,{func:1,args:[W.a6]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fq|fr|fu|fv"},
bs:{"^":"h6;",$isbs:1,"%":"File"},
mt:{"^":"kd;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bs]},
$asv:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$asB:function(){return[W.bs]},
"%":"FileList"},
mu:{"^":"a7;0n:length=","%":"FileWriter"},
mv:{"^":"ab;0n:length=","%":"HTMLFormElement"},
bu:{"^":"n;",$isbu:1,"%":"Gamepad"},
mw:{"^":"n;0n:length=","%":"History"},
mx:{"^":"kq;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.D]},
$asv:function(){return[W.D]},
$isd:1,
$asd:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]},
$asB:function(){return[W.D]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cl:{"^":"n;0ds:data=",$iscl:1,"%":"ImageData"},
e4:{"^":"ab;",$ise4:1,"%":"HTMLImageElement"},
bw:{"^":"dd;",$isbw:1,"%":"KeyboardEvent"},
mB:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
mC:{"^":"n;0n:length=","%":"MediaList"},
mD:{"^":"a7;",
dg:function(a,b,c,d){H.l(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.ef(a,b,c,!1)},
"%":"MessagePort"},
mE:{"^":"kw;",
k:function(a,b){return P.aT(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
ga3:function(a){var z=H.b([],[P.j])
this.K(a,new W.ic(z))
return z},
gn:function(a){return a.size},
$asa8:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"MIDIInputMap"},
ic:{"^":"p:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mF:{"^":"kx;",
k:function(a,b){return P.aT(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
ga3:function(a){var z=H.b([],[P.j])
this.K(a,new W.id(z))
return z},
gn:function(a){return a.size},
$asa8:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
id:{"^":"p:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"n;",$isbx:1,"%":"MimeType"},
mG:{"^":"kz;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bx]},
$asv:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isc:1,
$asc:function(){return[W.bx]},
$asB:function(){return[W.bx]},
"%":"MimeTypeArray"},
at:{"^":"dd;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ap:{"^":"cn;a",
gaB:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.eE("No elements"))
if(y>1)throw H.e(P.eE("More than one element"))
return z.firstChild},
a2:function(a,b){var z,y,x,w
H.w(b,"$isd",[W.D],"$asd")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gV:function(a){var z=this.a.childNodes
return new W.e2(z,z.length,-1,[H.bT(C.S,z,"B",0)])},
gn:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asv:function(){return[W.D]},
$asd:function(){return[W.D]},
$asc:function(){return[W.D]}},
D:{"^":"a7;0cA:previousSibling=",
i0:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.eg(a):z},
$isD:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mN:{"^":"n;",
hY:[function(a){return a.previousNode()},"$0","gcA",1,0,14],
"%":"NodeIterator"},
ij:{"^":"kB;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.D]},
$asv:function(){return[W.D]},
$isd:1,
$asd:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]},
$asB:function(){return[W.D]},
"%":"NodeList|RadioNodeList"},
bz:{"^":"n;0n:length=",$isbz:1,"%":"Plugin"},
mR:{"^":"kF;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bz]},
$asv:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$isc:1,
$asc:function(){return[W.bz]},
$asB:function(){return[W.bz]},
"%":"PluginArray"},
mT:{"^":"kL;",
k:function(a,b){return P.aT(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
ga3:function(a){var z=H.b([],[P.j])
this.K(a,new W.iM(z))
return z},
gn:function(a){return a.size},
$asa8:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"RTCStatsReport"},
iM:{"^":"p:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mU:{"^":"ab;0n:length=","%":"HTMLSelectElement"},
bC:{"^":"a7;",$isbC:1,"%":"SourceBuffer"},
mV:{"^":"fr;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bC]},
$asv:function(){return[W.bC]},
$isd:1,
$asd:function(){return[W.bC]},
$isc:1,
$asc:function(){return[W.bC]},
$asB:function(){return[W.bC]},
"%":"SourceBufferList"},
bD:{"^":"n;",$isbD:1,"%":"SpeechGrammar"},
mW:{"^":"kR;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bD]},
$asv:function(){return[W.bD]},
$isd:1,
$asd:function(){return[W.bD]},
$isc:1,
$asc:function(){return[W.bD]},
$asB:function(){return[W.bD]},
"%":"SpeechGrammarList"},
bE:{"^":"n;0n:length=",$isbE:1,"%":"SpeechRecognitionResult"},
mY:{"^":"kU;",
k:function(a,b){return a.getItem(H.J(b))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga3:function(a){var z=H.b([],[P.j])
this.K(a,new W.j5(z))
return z},
gn:function(a){return a.length},
$asa8:function(){return[P.j,P.j]},
$isa3:1,
$asa3:function(){return[P.j,P.j]},
"%":"Storage"},
j5:{"^":"p:45;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bG:{"^":"n;",$isbG:1,"%":"CSSStyleSheet|StyleSheet"},
ja:{"^":"ab;",
ag:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
z=W.hr("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ap(y).a2(0,new W.ap(z))
return y},
"%":"HTMLTableElement"},
n_:{"^":"ab;",
ag:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.ag(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaB(z)
x.toString
z=new W.ap(x)
w=z.gaB(z)
y.toString
w.toString
new W.ap(y).a2(0,new W.ap(w))
return y},
"%":"HTMLTableRowElement"},
n0:{"^":"ab;",
ag:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.ag(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaB(z)
y.toString
x.toString
new W.ap(y).a2(0,new W.ap(x))
return y},
"%":"HTMLTableSectionElement"},
eI:{"^":"ab;",$iseI:1,"%":"HTMLTemplateElement"},
bH:{"^":"a7;",$isbH:1,"%":"TextTrack"},
bI:{"^":"a7;",$isbI:1,"%":"TextTrackCue|VTTCue"},
n2:{"^":"l0;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bI]},
$asv:function(){return[W.bI]},
$isd:1,
$asd:function(){return[W.bI]},
$isc:1,
$asc:function(){return[W.bI]},
$asB:function(){return[W.bI]},
"%":"TextTrackCueList"},
n3:{"^":"fv;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bH]},
$asv:function(){return[W.bH]},
$isd:1,
$asd:function(){return[W.bH]},
$isc:1,
$asc:function(){return[W.bH]},
$asB:function(){return[W.bH]},
"%":"TextTrackList"},
n4:{"^":"n;0n:length=","%":"TimeRanges"},
bJ:{"^":"n;",$isbJ:1,"%":"Touch"},
bd:{"^":"dd;",$isbd:1,"%":"TouchEvent"},
n5:{"^":"l6;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$isd:1,
$asd:function(){return[W.bJ]},
$isc:1,
$asc:function(){return[W.bJ]},
$asB:function(){return[W.bJ]},
"%":"TouchList"},
n6:{"^":"n;0n:length=","%":"TrackDefaultList"},
n8:{"^":"n;",
hY:[function(a){return a.previousNode()},"$0","gcA",1,0,14],
"%":"TreeWalker"},
dd:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nb:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
nc:{"^":"a7;0n:length=","%":"VideoTrackList"},
bM:{"^":"at;",
ghs:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.af("deltaY is not supported"))},
ghr:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.af("deltaX is not supported"))},
$isbM:1,
"%":"WheelEvent"},
jV:{"^":"a7;",
fw:function(a,b){return a.requestAnimationFrame(H.bj(H.l(b,{func:1,ret:-1,args:[P.a1]}),1))},
eQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ff:{"^":"D;",$isff:1,"%":"Attr"},
nh:{"^":"ld;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bq]},
$asv:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asB:function(){return[W.bq]},
"%":"CSSRuleList"},
ni:{"^":"ho;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isaa",[P.a1],"$asaa")
if(!z)return!1
z=J.bl(b)
return a.left===z.gaP(b)&&a.top===z.gb8(b)&&a.width===z.gan(b)&&a.height===z.gam(b)},
gX:function(a){return W.fk(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gan:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nk:{"^":"lf;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bu]},
$asv:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$asB:function(){return[W.bu]},
"%":"GamepadList"},
nn:{"^":"lh;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.D]},
$asv:function(){return[W.D]},
$isd:1,
$asd:function(){return[W.D]},
$isc:1,
$asc:function(){return[W.D]},
$asB:function(){return[W.D]},
"%":"MozNamedAttrMap|NamedNodeMap"},
no:{"^":"lj;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bE]},
$asv:function(){return[W.bE]},
$isd:1,
$asd:function(){return[W.bE]},
$isc:1,
$asc:function(){return[W.bE]},
$asB:function(){return[W.bE]},
"%":"SpeechRecognitionResultList"},
np:{"^":"ll;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bG]},
$asv:function(){return[W.bG]},
$isd:1,
$asd:function(){return[W.bG]},
$isc:1,
$asc:function(){return[W.bG]},
$asB:function(){return[W.bG]},
"%":"StyleSheetList"},
k0:{"^":"eh;d2:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=this.ga3(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga3:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.h(z[w],"$isff")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa8:function(){return[P.j,P.j]},
$asa3:function(){return[P.j,P.j]}},
k8:{"^":"k0;a",
k:function(a,b){return this.a.getAttribute(H.J(b))},
gn:function(a){return this.ga3(this).length}},
k9:{"^":"d7;a,b,c,$ti",
hH:function(a,b,c,d){var z=H.A(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
nj:{"^":"k9;a,b,c,$ti"},
ka:{"^":"eF;a,b,c,d,e,$ti",
fR:function(){var z=this.d
if(z!=null&&this.a<=0)J.fW(this.b,this.c,z,!1)},
q:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fF(new W.kb(c),W.a6)
z=new W.ka(0,a,b,z,!1,[e])
z.fR()
return z}}},
kb:{"^":"p:7;a",
$1:function(a){return this.a.$1(H.h(a,"$isa6"))}},
c7:{"^":"a;a",
ev:function(a){var z,y
z=$.$get$dj()
if(z.a===0){for(y=0;y<262;++y)z.T(0,C.O[y],W.lK())
for(y=0;y<12;++y)z.T(0,C.n[y],W.lL())}},
aK:function(a){return $.$get$fj().S(0,W.br(a))},
at:function(a,b,c){var z,y,x
z=W.br(a)
y=$.$get$dj()
x=y.k(0,H.k(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dp(x.$4(a,b,c,this))},
$isaD:1,
q:{
fi:function(a){var z,y
z=W.dD(null)
y=window.location
z=new W.c7(new W.kM(z,y))
z.ev(a)
return z},
nl:[function(a,b,c,d){H.h(a,"$isV")
H.J(b)
H.J(c)
H.h(d,"$isc7")
return!0},"$4","lK",16,0,24],
nm:[function(a,b,c,d){var z,y,x,w,v
H.h(a,"$isV")
H.J(b)
H.J(c)
z=H.h(d,"$isc7").a
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
return z},"$4","lL",16,0,24]}},
B:{"^":"a;$ti",
gV:function(a){return new W.e2(a,this.gn(a),-1,[H.bT(this,a,"B",0)])}},
em:{"^":"a;a",
aK:function(a){return C.a.dj(this.a,new W.il(a))},
at:function(a,b,c){return C.a.dj(this.a,new W.ik(a,b,c))},
$isaD:1},
il:{"^":"p:16;a",
$1:function(a){return H.h(a,"$isaD").aK(this.a)}},
ik:{"^":"p:16;a,b,c",
$1:function(a){return H.h(a,"$isaD").at(this.a,this.b,this.c)}},
kN:{"^":"a;",
ey:function(a,b,c,d){var z,y,x
this.a.a2(0,c)
z=b.cG(0,new W.kO())
y=b.cG(0,new W.kP())
this.b.a2(0,z)
x=this.c
x.a2(0,C.Q)
x.a2(0,y)},
aK:function(a){return this.a.S(0,W.br(a))},
at:["el",function(a,b,c){var z,y
z=W.br(a)
y=this.c
if(y.S(0,H.k(z)+"::"+b))return this.d.hg(c)
else if(y.S(0,"*::"+b))return this.d.hg(c)
else{y=this.b
if(y.S(0,H.k(z)+"::"+b))return!0
else if(y.S(0,"*::"+b))return!0
else if(y.S(0,H.k(z)+"::*"))return!0
else if(y.S(0,"*::*"))return!0}return!1}],
$isaD:1},
kO:{"^":"p:17;",
$1:function(a){return!C.a.S(C.n,H.J(a))}},
kP:{"^":"p:17;",
$1:function(a){return C.a.S(C.n,H.J(a))}},
kY:{"^":"kN;e,a,b,c,d",
at:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1},
q:{
ft:function(){var z,y,x,w,v
z=P.j
y=P.ef(C.m,z)
x=H.A(C.m,0)
w=H.l(new W.kZ(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kY(y,P.c2(null,null,null,z),P.c2(null,null,null,z),P.c2(null,null,null,z),null)
y.ey(null,new H.i3(C.m,w,[x,z]),v,null)
return y}}},
kZ:{"^":"p:40;",
$1:function(a){return"TEMPLATE::"+H.k(H.J(a))}},
kX:{"^":"a;",
aK:function(a){var z=J.L(a)
if(!!z.$isey)return!1
z=!!z.$isd9
if(z&&W.br(a)==="foreignObject")return!1
if(z)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.i.bK(b,"on"))return!1
return this.aK(a)},
$isaD:1},
e2:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fV(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gJ:function(a){return this.d}},
aD:{"^":"a;"},
kM:{"^":"a;a,b",$isna:1},
fA:{"^":"a;a",
cL:function(a){new W.la(this).$2(a,null)},
aX:function(a,b){if(b==null)J.dC(a)
else b.removeChild(a)},
fE:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fY(a)
x=y.gd2().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ah(t)}v="element unprintable"
try{v=J.ai(a)}catch(t){H.ah(t)}try{u=W.br(a)
this.fD(H.h(a,"$isV"),b,z,v,u,H.h(y,"$isa3"),H.J(x))}catch(t){if(H.ah(t) instanceof P.ax)throw t
else{this.aX(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fD:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aX(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aK(a)){this.aX(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.at(a,"is",g)){this.aX(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga3(f)
y=H.b(z.slice(0),[H.A(z,0)])
for(x=f.ga3(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.i(y,x)
w=y[x]
if(!this.a.at(a,J.h1(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$iseI)this.cL(a.content)},
$ismO:1},
la:{"^":"p:36;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fE(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aX(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fZ(z)}catch(w){H.ah(w)
v=H.h(z,"$isD")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isD")}}},
k3:{"^":"n+hh;"},
k4:{"^":"n+v;"},
k5:{"^":"k4+B;"},
k6:{"^":"n+v;"},
k7:{"^":"k6+B;"},
kc:{"^":"n+v;"},
kd:{"^":"kc+B;"},
kp:{"^":"n+v;"},
kq:{"^":"kp+B;"},
kw:{"^":"n+a8;"},
kx:{"^":"n+a8;"},
ky:{"^":"n+v;"},
kz:{"^":"ky+B;"},
kA:{"^":"n+v;"},
kB:{"^":"kA+B;"},
kE:{"^":"n+v;"},
kF:{"^":"kE+B;"},
kL:{"^":"n+a8;"},
fq:{"^":"a7+v;"},
fr:{"^":"fq+B;"},
kQ:{"^":"n+v;"},
kR:{"^":"kQ+B;"},
kU:{"^":"n+a8;"},
l_:{"^":"n+v;"},
l0:{"^":"l_+B;"},
fu:{"^":"a7+v;"},
fv:{"^":"fu+B;"},
l5:{"^":"n+v;"},
l6:{"^":"l5+B;"},
lc:{"^":"n+v;"},
ld:{"^":"lc+B;"},
le:{"^":"n+v;"},
lf:{"^":"le+B;"},
lg:{"^":"n+v;"},
lh:{"^":"lg+B;"},
li:{"^":"n+v;"},
lj:{"^":"li+B;"},
lk:{"^":"n+v;"},
ll:{"^":"lk+B;"}}],["","",,P,{"^":"",
lB:function(a){var z,y
z=J.L(a)
if(!!z.$iscl){y=z.gds(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fx(a.data,a.height,a.width)},
lA:function(a){if(a instanceof P.fx)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.ee(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.J(y[w])
z.T(0,v,a[v])}return z},
ly:function(a,b){var z={}
a.K(0,new P.lz(z))
return z},
dX:function(){var z=$.dW
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.dW=z}return z},
hn:function(){var z,y
z=$.dT
if(z!=null)return z
y=$.dU
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.dU=y}if(y)z="-moz-"
else{y=$.dV
if(y==null){y=!P.dX()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.dV=y}if(y)z="-ms-"
else z=P.dX()?"-o-":"-webkit-"}$.dT=z
return z},
fx:{"^":"a;ds:a>,b,c",$iscl:1},
lz:{"^":"p:13;a",
$2:function(a,b){this.a[a]=b}},
hA:{"^":"cn;a,b",
gbX:function(){var z,y,x
z=this.b
y=H.ag(z,"v",0)
x=W.V
return new H.i1(new H.dh(z,H.l(new P.hB(),{func:1,ret:P.O,args:[y]}),[y]),H.l(new P.hC(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.b3(this.gbX().a)},
k:function(a,b){var z=this.gbX()
return z.b.$1(J.cH(z.a,b))},
gV:function(a){var z=P.hZ(this.gbX(),!1,W.V)
return new J.ar(z,z.length,0,[H.A(z,0)])},
$asv:function(){return[W.V]},
$asd:function(){return[W.V]},
$asc:function(){return[W.V]}},
hB:{"^":"p:18;",
$1:function(a){return!!J.L(H.h(a,"$isD")).$isV}},
hC:{"^":"p:34;",
$1:function(a){return H.f(H.h(a,"$isD"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kr:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kG:{"^":"a;$ti",
gb4:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.E(z+this.c,H.A(this,0))},
gcc:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.E(z+this.d,H.A(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bS(b,"$isaa",[P.a1],"$asaa")
if(!z)return!1
z=this.a
y=J.bl(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.A(this,0)
if(H.E(z+this.c,w)===y.gb4(b)){if(typeof x!=="number")return x.I()
z=H.E(x+this.d,w)===y.gcc(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.b1(z)
x=this.b
w=J.b1(x)
if(typeof z!=="number")return z.I()
v=H.A(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.E(x+this.d,v)
return P.kr(P.cx(P.cx(P.cx(P.cx(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aa:{"^":"kG;aP:a>,b8:b>,an:c>,am:d>,$ti",q:{
iD:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ac()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.ac()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",c1:{"^":"n;",$isc1:1,"%":"SVGLength"},mA:{"^":"kt;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.c1]},
$isd:1,
$asd:function(){return[P.c1]},
$isc:1,
$asc:function(){return[P.c1]},
$asB:function(){return[P.c1]},
"%":"SVGLengthList"},c3:{"^":"n;",$isc3:1,"%":"SVGNumber"},mP:{"^":"kD;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.c3]},
$isd:1,
$asd:function(){return[P.c3]},
$isc:1,
$asc:function(){return[P.c3]},
$asB:function(){return[P.c3]},
"%":"SVGNumberList"},mS:{"^":"n;0n:length=","%":"SVGPointList"},ey:{"^":"d9;",$isey:1,"%":"SVGScriptElement"},mZ:{"^":"kW;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"SVGStringList"},d9:{"^":"V;",
gdm:function(a){return new P.hA(a,new W.ap(a))},
ag:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.aD])
C.a.h(z,W.fi(null))
C.a.h(z,W.ft())
C.a.h(z,new W.kX())
c=new W.fA(new W.em(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).hp(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ap(w)
u=z.gaB(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isd9:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},c5:{"^":"n;",$isc5:1,"%":"SVGTransform"},n7:{"^":"l8;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[P.c5]},
$isd:1,
$asd:function(){return[P.c5]},
$isc:1,
$asc:function(){return[P.c5]},
$asB:function(){return[P.c5]},
"%":"SVGTransformList"},ks:{"^":"n+v;"},kt:{"^":"ks+B;"},kC:{"^":"n+v;"},kD:{"^":"kC+B;"},kV:{"^":"n+v;"},kW:{"^":"kV+B;"},l7:{"^":"n+v;"},l8:{"^":"l7+B;"}}],["","",,P,{"^":"",md:{"^":"n;0n:length=","%":"AudioBuffer"},me:{"^":"k1;",
k:function(a,b){return P.aT(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
ga3:function(a){var z=H.b([],[P.j])
this.K(a,new P.h4(z))
return z},
gn:function(a){return a.size},
$asa8:function(){return[P.j,null]},
$isa3:1,
$asa3:function(){return[P.j,null]},
"%":"AudioParamMap"},h4:{"^":"p:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},mf:{"^":"a7;0n:length=","%":"AudioTrackList"},h5:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mQ:{"^":"h5;0n:length=","%":"OfflineAudioContext"},k1:{"^":"n+a8;"}}],["","",,P,{"^":"",d4:{"^":"n;",
ib:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscl)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lA(g))
return}if(!!z.$ise4)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.h2("Incorrect number or type of arguments"))},
ia:function(a,b,c,d,e,f,g){return this.ib(a,b,c,d,e,f,g,null,null,null)},
$isd4:1,
"%":"WebGLRenderingContext"},jb:{"^":"n;",$isjb:1,"%":"WebGLTexture"},jx:{"^":"n;",$isjx:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mX:{"^":"kT;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return P.aT(a.item(b))},
E:function(a,b){return this.k(a,b)},
$asv:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$isc:1,
$asc:function(){return[[P.a3,,,]]},
$asB:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},kS:{"^":"n+v;"},kT:{"^":"kS+B;"}}],["","",,O,{"^":"",ak:{"^":"a;0a,0b,0c,0d,$ti",
bd:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cM:function(a,b,c){var z=H.ag(this,"ak",0)
H.l(b,{func:1,ret:P.O,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.C,[P.d,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aU:function(a,b){return this.cM(a,null,b)},
d5:function(a){var z
H.w(a,"$isd",[H.ag(this,"ak",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cQ:function(a,b){var z
H.w(b,"$isd",[H.ag(this,"ak",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.ar(z,z.length,0,[H.A(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ag(this,"ak",0)
H.E(b,z)
z=[z]
if(this.d5(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cQ(x,H.b([b],z))}},
a2:function(a,b){var z,y
H.w(b,"$isd",[H.ag(this,"ak",0)],"$asd")
if(this.d5(b)){z=this.a
y=z.length
C.a.a2(z,b)
this.cQ(y,b)}},
$isd:1,
q:{
cP:function(a){var z=new O.ak([a])
z.bd(a)
return z}}},d0:{"^":"a;0a,0b",
gn:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
er:function(a){var z=this.b
if(!(z==null))z.w(a)},
aC:function(){return this.er(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gbC(z)
else return V.ba()},
bF:function(a){var z=this.a
if(a==null)C.a.h(z,V.ba())
else C.a.h(z,a)
this.aC()},
ay:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cI:{"^":"a;"},aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbJ:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().L(0,this.gdY())
y=this.c
if(y!=null)y.gt().h(0,this.gdY())
x=new D.K("shape",z,this.c,this,[F.ez])
x.b=!0
this.aR(x)}},
ai:function(a,b){var z
for(z=this.y.a,z=new J.ar(z,z.length,0,[H.A(z,0)]);z.A();)z.d.ai(0,b)},
a7:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gW(z))
z.aC()
a.cB(this.f)
z=a.dy
y=(z&&C.a).gbC(z)
if(y!=null&&this.d!=null)y.e_(a,this)
for(z=this.y.a,z=new J.ar(z,z.length,0,[H.A(z,0)]);z.A();)z.d.a7(a)
a.cz()
a.dx.ay()},
gt:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
aR:function(a){var z=this.z
if(!(z==null))z.w(a)},
a6:function(){return this.aR(null)},
hP:[function(a){H.h(a,"$isx")
this.e=null
this.aR(a)},function(){return this.hP(null)},"j3","$1","$0","gdY",0,2,0],
hN:[function(a){this.aR(H.h(a,"$isx"))},function(){return this.hN(null)},"j1","$1","$0","gdX",0,2,0],
j0:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isd",[E.aK],"$asd")
for(z=b.length,y=this.gdX(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b6()
t.d=0
u.sa0(t)}t=u.ga0()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a6()},"$2","ghM",8,0,5],
j2:[function(a,b){var z,y,x,w,v
H.w(b,"$isd",[E.aK],"$asd")
for(z=b.length,y=this.gdX(),x=0;x<b.length;b.length===z||(0,H.z)(b),++x){w=b[x]
if(w!=null){if(w.ga0()==null){v=new D.b6()
v.d=0
w.sa0(v)}w.ga0().L(0,y)}}this.a6()},"$2","ghO",8,0,5],
$isaC:1,
q:{
e1:function(a,b,c,d,e,f){var z,y
z=new E.aK()
z.a=d
z.b=!0
y=O.cP(E.aK)
z.y=y
y.aU(z.ghM(),z.ghO())
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
z.sbJ(0,e)
return z}}},iH:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eo:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.as(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d0()
y=[V.az]
z.a=H.b([],y)
z.gt().h(0,new E.iJ(this))
this.cy=z
z=new O.d0()
z.a=H.b([],y)
z.gt().h(0,new E.iK(this))
this.db=z
z=new O.d0()
z.a=H.b([],y)
z.gt().h(0,new E.iL(this))
this.dx=z
z=H.b([],[O.c4])
this.dy=z
C.a.h(z,null)
this.fr=new H.b8(0,0,[P.j,A.d5])},
ghZ:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.j(0,y.gW(y))
this.z=y
z=y}return z},
cB:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbC(z):a;(z&&C.a).h(z,y)},
cz:function(){var z=this.dy
if(z.length>1)z.pop()},
di:function(a){var z=a.b
if(z.length===0)throw H.e(P.r("May not cache a shader with no name."))
if(this.fr.dq(0,z))throw H.e(P.r('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.T(0,z,a)},
q:{
iI:function(a,b){var z=new E.iH(a,b)
z.eo(a,b)
return z}}},iJ:{"^":"p:6;a",
$1:function(a){var z
H.h(a,"$isx")
z=this.a
z.z=null
z.ch=null}},iK:{"^":"p:6;a",
$1:function(a){var z
H.h(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iL:{"^":"p:6;a",
$1:function(a){var z
H.h(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},jh:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
eu:[function(a){var z
H.h(a,"$isx")
z=this.x
if(!(z==null))z.w(a)
this.i4()},function(){return this.eu(null)},"es","$1","$0","gcR",0,2,0],
ghz:function(){var z,y,x
z=Date.now()
y=C.h.a1(P.dY(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.as(z,!1)
return x/y},
d8:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.o(z)
x=C.c.cq(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.c.cq(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eL(C.l,this.gi3())},
i4:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jj(this),{func:1,ret:-1,args:[P.a1]})
C.y.eQ(z)
C.y.fw(z,W.fF(y,P.a1))}},"$0","gi3",0,0,3],
i2:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.d8()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.as(w,!1)
x.y=P.dY(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aC()
w=x.db
C.a.sn(w.a,0)
w.aC()
w=x.dx
C.a.sn(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a7(this.e)}x=this.z
if(!(x==null))x.w(null)}catch(v){z=H.ah(v)
y=H.bm(v)
P.dz("Error: "+H.k(z))
P.dz("Stack: "+H.k(y))
throw H.e(z)}},
q:{
ji:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscM)return E.eK(a,!0,!0,!0,!1)
y=W.cN(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdm(a).h(0,y)
w=E.eK(y,!0,!0,!0,!1)
w.a=a
return w},
eK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jh()
y=P.hX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.k.bI(a,"webgl",y)
x=H.h(x==null?C.k.bI(a,"experimental-webgl",y):x,"$isd4")
if(x==null)H.u(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iI(x,a)
w=new T.jc(x)
w.b=H.a4(x.getParameter(3379))
w.c=H.a4(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jD(a)
v=new X.hS()
v.c=new X.aB(!1,!1,!1)
v.d=P.c2(null,null,null,P.C)
w.b=v
v=new X.ie(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i_(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jm(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.eF,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.l(w.gf6(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.l(w.gf9(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.l(w.gf3(),q),!1,r))
v=w.z
p=W.bw
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.l(w.gfb(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.l(w.gfa(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.l(w.gfe(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.l(w.gfg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.l(w.gff(),s),!1,t))
p=w.z
o=W.bM;(p&&C.a).h(p,W.a0(a,H.J(W.ht(a)),H.l(w.gfh(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.l(w.gf7(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.l(w.gf8(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.l(w.gfi(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.l(w.gfq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.l(w.gfo(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.l(w.gfp(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.as(Date.now(),!1)
z.cy=0
z.d8()
return z}}},jj:{"^":"p:29;a",
$1:function(a){var z
H.lZ(a)
z=this.a
if(z.ch){z.ch=!1
z.i2()}}}}],["","",,Z,{"^":"",fc:{"^":"a;a,b",q:{
dg:function(a,b,c){var z
H.w(c,"$isc",[P.C],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bO(c)),35044)
a.bindBuffer(b,null)
return new Z.fc(b,z)}}},dJ:{"^":"cI;a,b,c,d,e",
Z:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ah(y)
x=P.r('Failed to bind buffer attribute "'+J.ai(this.a)+'": '+H.k(z))
throw H.e(x)}},
i:function(a){return"["+J.ai(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},fd:{"^":"a;a",$ismg:1},cL:{"^":"a;a,0b,c,d",
aw:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Z:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Z(a)},
aS:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a7:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ai(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(y,", ")+"\nAttrs:   "+C.a.m(u,", ")},
$isn1:1},cm:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},be:{"^":"a;a",
gcN:function(a){var z,y
z=this.a
y=(z&$.$get$aw().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=2
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=4
if((z&$.$get$bf().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hh:function(a){var z,y,x
z=$.$get$aw()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fb()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.j])
y=this.a
if((y&$.$get$aw().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bf().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.m(z,"|")},
q:{
ao:function(a){return new Z.be(a)}}}}],["","",,D,{"^":"",dM:{"^":"a;"},b6:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).L(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).L(z,b)||y}return y},
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.x(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.hx(z))
y=this.b
if(!(y==null))C.a.K(y,new D.hy(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
ht:function(){return this.w(null)},
i5:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.w(y)}}},
aA:function(a){return this.i5(a,!0,!1)},
q:{
G:function(){var z=new D.b6()
z.d=0
return z}}},hx:{"^":"p:19;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},hy:{"^":"p:19;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},bX:{"^":"x;c,d,a,0b,$ti"},bY:{"^":"x;c,d,a,0b,$ti"},K:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dK:{"^":"a;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
q:{"^":"mh<"}},e9:{"^":"a;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e9))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},ea:{"^":"x;c,a,0b"},hS:{"^":"a;0a,0b,0c,0d",
hV:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ea(a,this)
y.b=!0
return z.w(y)},
hR:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ea(a,this)
y.b=!0
return z.w(y)}},eg:{"^":"cq;x,y,c,d,e,a,0b"},i_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.as(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.by(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cw:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.ar(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ea()
if(typeof z!=="number")return z.e4()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.ar(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.ar(a,b))
return!0},
hW:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d1(new V.W(v*u,t*s),y,x,new P.as(w,!1),this)
w.b=!0
z.w(w)
return!0},
fd:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.as(Date.now(),!1)
y=this.f
x=new X.eg(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.R(0,0)}},aB:{"^":"a;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
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
return z+(this.c?"Shift+":"")}},by:{"^":"cq;x,y,z,Q,ch,c,d,e,a,0b"},ie:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bV:function(a,b,c){var z,y,x
z=new P.as(Date.now(),!1)
y=this.a.gaL()
x=new X.by(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cw:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bV(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ea()
if(typeof z!=="number")return z.e4()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bV(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bV(a,b,!1))
return!0},
hX:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d1(new V.W(w*v,u*t),y,b,new P.as(x,!1),this)
x.b=!0
z.w(x)
return!0},
gdv:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbH:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
gdW:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},d1:{"^":"cq;x,c,d,e,a,0b"},cq:{"^":"x;"},eP:{"^":"cq;x,y,z,Q,ch,c,d,e,a,0b"},jm:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.as(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaL()
w=new X.eP(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hU:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.w(this.ar(a,!0))
return!0},
hS:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.w(this.ar(a,!0))
return!0},
hT:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.w(this.ar(a,!1))
return!0}},jD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.ex(0,0,(z&&C.k).gdn(z).c,C.k.gdn(z).d)},
d0:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e9(z,new X.aB(y,a.altKey,a.shiftKey))},
aJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
c7:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.R(y-w,x-v)},
aW:function(a){return new V.W(a.movementX,a.movementY)},
c3:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.c.ab(u.pageX)
C.c.ab(u.pageY)
s=z.left
C.c.ab(u.pageX)
C.a.h(y,new V.R(t-s,C.c.ab(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dK(z,new X.aB(y,a.altKey,a.shiftKey))},
bY:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.F()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iC:[function(a){this.f=!0},"$1","gf9",4,0,7],
iw:[function(a){this.f=!1},"$1","gf3",4,0,7],
iz:[function(a){H.h(a,"$isat")
if(this.f&&this.bY(a))a.preventDefault()},"$1","gf6",4,0,4],
iE:[function(a){var z
H.h(a,"$isbw")
if(!this.f)return
z=this.d0(a)
if(this.b.hV(z))a.preventDefault()},"$1","gfb",4,0,21],
iD:[function(a){var z
H.h(a,"$isbw")
if(!this.f)return
z=this.d0(a)
if(this.b.hR(z))a.preventDefault()},"$1","gfa",4,0,21],
iG:[function(a){var z,y,x,w
H.h(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aJ(a)
if(this.x){y=this.ap(a)
x=this.aW(a)
if(this.d.cw(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cw(y,w))a.preventDefault()},"$1","gfe",4,0,4],
iI:[function(a){var z,y,x
H.h(a,"$isat")
this.aJ(a)
z=this.ap(a)
if(this.x){y=this.aW(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gfg",4,0,4],
iB:[function(a){var z,y,x
H.h(a,"$isat")
if(!this.bY(a)){this.aJ(a)
z=this.ap(a)
if(this.x){y=this.aW(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gf8",4,0,4],
iH:[function(a){var z,y,x
H.h(a,"$isat")
this.aJ(a)
z=this.ap(a)
if(this.x){y=this.aW(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gff",4,0,4],
iA:[function(a){var z,y,x
H.h(a,"$isat")
if(!this.bY(a)){this.aJ(a)
z=this.ap(a)
if(this.x){y=this.aW(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()}},"$1","gf7",4,0,4],
iJ:[function(a){var z,y
H.h(a,"$isbM")
this.aJ(a)
z=new V.W((a&&C.x).ghr(a),C.x.ghs(a)).u(0,180)
if(this.x){if(this.d.hW(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hX(z,y))a.preventDefault()},"$1","gfh",4,0,46],
iK:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.fd(w,v,x)}},"$1","gfi",4,0,7],
iS:[function(a){var z
H.h(a,"$isbd")
this.a.focus()
this.f=!0
this.c7(a)
z=this.c3(a)
if(this.e.hU(z))a.preventDefault()},"$1","gfq",4,0,11],
iQ:[function(a){var z
H.h(a,"$isbd")
this.c7(a)
z=this.c3(a)
if(this.e.hS(z))a.preventDefault()},"$1","gfo",4,0,11],
iR:[function(a){var z
H.h(a,"$isbd")
this.c7(a)
z=this.c3(a)
if(this.e.hT(z))a.preventDefault()},"$1","gfp",4,0,11]}}],["","",,D,{"^":"",ci:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
aD:[function(a){var z
H.h(a,"$isx")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aD(null)},"ij","$1","$0","gex",0,2,0],
$isZ:1,
$isaC:1},Z:{"^":"a;",$isaC:1},hT:{"^":"ak;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.w(a)},
fc:[function(a){var z
H.h(a,"$isx")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.fc(null)},"iF","$1","$0","gd4",0,2,0],
iL:[function(a){var z,y,x
H.w(a,"$isd",[D.Z],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.ew(x))return!1}return!0},"$1","gfj",4,0,31],
it:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.Z
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gd4(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isZ")
if(t instanceof D.ci)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.bX(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf0",8,0,23],
iN:[function(a,b){var z,y,x,w,v,u
z=D.Z
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gd4(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=H.h(b[w],"$isZ")
if(v instanceof D.ci)C.a.L(this.e,v)
u=v.d
if(u==null){u=new D.b6()
u.d=0
v.d=u}u.L(0,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfl",8,0,23],
ew:function(a){var z=C.a.S(this.e,a)
return z},
$asd:function(){return[D.Z]},
$asak:function(){return[D.Z]}},it:{"^":"a;",$isZ:1,$isaC:1},j3:{"^":"a;",$isZ:1,$isaC:1},je:{"^":"a;",$isZ:1,$isaC:1},jf:{"^":"a;",$isZ:1,$isaC:1},jg:{"^":"a;",$isZ:1,$isaC:1}}],["","",,V,{"^":"",
mj:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","ib",8,0,30],
m9:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.e9(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.i.ax("null",c)
return C.i.ax(C.c.e2($.m.$2(a,0)?0:a,b),c+b+1)},
bk:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.y],"$asc")
z=H.b([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.T(z,u,C.i.ax(z[u],x))}return z},
dy:function(a,b){return C.c.ie(Math.pow(b,C.F.cq(Math.log(H.lx(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
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
return new V.Y(z,y,x)},
v:function(a,b){var z
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
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aI:{"^":"a;a,b,c,d",
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
return new V.aI(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
cp:{"^":"a;a,b,c,d,e,f,r,x,y",
a8:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscp")
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
return new V.cp(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.j(a3,s),C.c.j(a1,q)+C.c.j(a2,o)+C.c.j(a3,m),C.c.j(a1,k)+C.c.j(a2,j)+C.c.j(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cp))return!1
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
z=[P.y]
y=V.bk(H.b([this.a,this.d,this.r],z),3,0)
x=V.bk(H.b([this.b,this.e,this.x],z),3,0)
w=V.bk(H.b([this.c,this.f,this.y],z),3,0)
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
az:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a8:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
cs:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.ba()
a3=1/a2
a4=-w
a5=-i
return V.aA((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isaz")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.aA(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.I(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.a_(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
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
i:function(a){return this.O()},
dT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.bk(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bk(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bk(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bk(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
D:function(a){return this.dT(a,3,0)},
O:function(){return this.dT("",3,0)},
q:{
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ba:function(){return V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
el:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.C(c)))
y=b.av(z)
x=y.u(0,Math.sqrt(y.C(y)))
w=z.av(x)
v=new V.I(a.a,a.b,a.c)
return V.aA(x.a,w.a,z.a,x.M(0).C(v),x.b,w.b,z.b,w.M(0).C(v),x.c,w.c,z.c,z.M(0).C(v),0,0,0,1)}}},
R:{"^":"a;a,b",
F:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.R(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
a_:{"^":"a;a,b,c",
I:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bA:{"^":"a;a,b,c,d",
j:function(a,b){return new V.bA(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bA))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
ew:{"^":"a;a,b,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ew))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
q:{
ex:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ew(a,b,c,d)}}},
W:{"^":"a;a,b",
hF:[function(a){return Math.sqrt(this.C(this))},"$0","gn",1,0,22],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.W(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.W(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
I:{"^":"a;a,b,c",
hF:[function(a){return Math.sqrt(this.C(this))},"$0","gn",1,0,22],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.I(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.m.$2(b,0))return new V.I(0,0,0)
return new V.I(this.a/b,this.b/b,this.c/b)},
dV:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hd:{"^":"dM;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bP:function(a){var z=V.m9(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
N:function(a){var z=this.y
if(!(z==null))z.w(a)},
scH:function(a,b){},
sct:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bP(z)}z=new D.K("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.N(z)}},
scv:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bP(z)}z=new D.K("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.N(z)}},
sa4:function(a,b){var z,y
b=this.bP(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.K("location",y,b,this,[P.y])
z.b=!0
this.N(z)}},
scu:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.K("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.N(z)}},
sP:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.K("velocity",x,a,this,[P.y])
z.b=!0
this.N(z)}},
sci:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.K("dampening",y,a,this,[P.y])
z.b=!0
this.N(z)}},
ai:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa4(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sP(y)}},
q:{
cQ:function(){var z=new U.hd()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dO:{"^":"ac;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aT:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dO))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
q:{
dP:function(a){var z=new U.dO()
z.a=a
return z}}},e3:{"^":"ak;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
N:[function(a){var z
H.h(a,"$isx")
z=this.e
if(!(z==null))z.w(a)},function(){return this.N(null)},"ae","$1","$0","gaI",0,2,0],
is:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ac
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gf_",8,0,25],
iM:[function(a,b){var z,y,x,w,v
z=U.ac
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaI(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null)v.gt().L(0,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gfk",8,0,25],
aT:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ar(z,z.length,0,[H.A(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aT(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.ba():x
z=this.e
if(!(z==null))z.aA(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e3))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.U(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.ac]},
$asak:function(){return[U.ac]},
$isac:1},ac:{"^":"dM;"},jE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
N:[function(a){var z
H.h(a,"$isx")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.N(null)},"ae","$1","$0","gaI",0,2,0],
aY:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdv().h(0,this.gbZ())
this.a.c.gdW().h(0,this.gc_())
this.a.c.gbH().h(0,this.gc0())
return!0},
eW:[function(a){H.h(a,"$isx")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbZ",4,0,1],
eX:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isx"),"$isby")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.W(y.a,y.b).j(0,2).u(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sP(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.W(x.a,x.b).j(0,2).u(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa4(0,-v*u+t)
this.b.sP(0)
y=y.F(0,a.z)
this.Q=new V.W(y.a,y.b).j(0,2).u(0,z.ga5())}this.ae()},"$1","gc_",4,0,1],
eY:[function(a){var z,y,x
H.h(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sP(y*10*x)
this.ae()}},"$1","gc0",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.ch=y
x=b.y
this.b.ai(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aA(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},jF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
N:[function(a){var z
H.h(a,"$isx")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.N(null)},"ae","$1","$0","gaI",0,2,0],
aY:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdv().h(0,this.gbZ())
this.a.c.gdW().h(0,this.gc_())
this.a.c.gbH().h(0,this.gc0())
z=this.a.d
y=z.f
if(y==null){y=D.G()
z.f=y
z=y}else z=y
z.h(0,this.geT())
z=this.a.d
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.geU())
z=this.a.e
y=z.b
if(y==null){y=D.G()
z.b=y
z=y}else z=y
z.h(0,this.gfQ())
z=this.a.e
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.gfP())
z=this.a.e
y=z.c
if(y==null){y=D.G()
z.c=y
z=y}else z=y
z.h(0,this.gfO())
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.W(z,y)},
eW:[function(a){a=H.f(H.h(a,"$isx"),"$isby")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbZ",4,0,1],
eX:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isx"),"$isby")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.aj(new V.W(y.a,y.b).j(0,2).u(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.aj(new V.W(x.a,x.b).j(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa4(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.F(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).j(0,2).u(0,z.ga5()))}this.ae()},"$1","gc_",4,0,1],
eY:[function(a){var z,y,x
H.h(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sP(-y*10*z)
this.ae()}},"$1","gc0",4,0,1],
ip:[function(a){if(H.f(H.h(a,"$isx"),"$iseg").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geT",4,0,1],
iq:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isx"),"$isby")
if(!J.U(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.aj(new V.W(x.a,x.b).j(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa4(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.F(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).j(0,2).u(0,z.ga5()))
this.ae()},"$1","geU",4,0,1],
iW:[function(a){H.h(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfQ",4,0,1],
iV:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isx"),"$iseP")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.aj(new V.W(y.a,y.b).j(0,2).u(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.aj(new V.W(x.a,x.b).j(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa4(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.F(0,a.z)
this.dx=this.aj(new V.W(y.a,y.b).j(0,2).u(0,z.ga5()))}this.ae()},"$1","gfP",4,0,1],
iU:[function(a){var z,y,x
H.h(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sP(-y*10*z)
this.ae()}},"$1","gfO",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.dy=y
x=b.y
this.c.ai(0,x)
this.b.ai(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aA(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aA(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1},jG:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
N:function(a){var z=this.r
if(!(z==null))z.w(a)},
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=this.geZ()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ir:[function(a){var z,y,x,w
H.h(a,"$isx")
if(!J.U(this.b,this.a.b.c))return
H.f(a,"$isd1")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.K("zoom",z,w,this,[P.y])
z.b=!0
this.N(z)}},"$1","geZ",4,0,1],
aT:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aA(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",he:{"^":"ak;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
Y:[function(a){var z
H.h(a,"$isx")
z=this.f
if(!(z==null))z.w(a)},function(){return this.Y(null)},"cS","$1","$0","gU",0,2,0],
iO:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aE
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gfm",8,0,27],
iP:[function(a,b){var z,y,x,w,v
z=M.aE
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null)v.gt().L(0,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gfn",8,0,27],
a7:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ar(z,z.length,0,[H.A(z,0)]);z.A();){y=z.d
if(!(y==null))y.a7(a)}this.e=!1},
$asd:function(){return[M.aE]},
$asak:function(){return[M.aE]},
$isaE:1},hg:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
Y:[function(a){var z
H.h(a,"$isx")
z=this.f
if(!(z==null))z.w(a)},function(){return this.Y(null)},"cS","$1","$0","gU",0,2,0],
saZ:function(a){var z,y
if(a==null)a=new X.hJ()
z=this.a
if(z!==a){if(z!=null)z.gt().L(0,this.gU())
y=this.a
this.a=a
a.gt().h(0,this.gU())
z=new D.K("camera",y,this.a,this,[X.cf])
z.b=!0
this.Y(z)}},
sb5:function(a,b){var z,y
if(b==null)b=X.cS(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().L(0,this.gU())
y=this.b
this.b=b
b.gt().h(0,this.gU())
z=new D.K("target",y,this.b,this,[X.da])
z.b=!0
this.Y(z)}},
sb6:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().L(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.gU())
z=new D.K("technique",y,this.c,this,[O.c4])
z.b=!0
this.Y(z)}},
a7:function(a){a.cB(this.c)
this.b.Z(a)
this.a.Z(a)
this.d.ai(0,a)
this.d.a7(a)
this.a.aS(a)
this.b.toString
a.cz()},
$isaE:1},hv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Y:[function(a){var z
H.h(a,"$isx")
z=this.x
if(!(z==null))z.w(a)},function(){return this.Y(null)},"cS","$1","$0","gU",0,2,0],
ix:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aK
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b6()
s.d=0
t.sa0(s)}s=t.ga0()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gf4",8,0,5],
iy:[function(a,b){var z,y,x,w,v,u
z=E.aK
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null){if(v.ga0()==null){u=new D.b6()
u.d=0
v.sa0(u)}v.ga0().L(0,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gf5",8,0,5],
saZ:function(a){var z,y
if(a==null)a=X.eq(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().L(0,this.gU())
y=this.a
this.a=a
a.gt().h(0,this.gU())
z=new D.K("camera",y,this.a,this,[X.cf])
z.b=!0
this.Y(z)}},
sb5:function(a,b){var z,y
if(b==null)b=X.cS(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().L(0,this.gU())
y=this.b
this.b=b
b.gt().h(0,this.gU())
z=new D.K("target",y,this.b,this,[X.da])
z.b=!0
this.Y(z)}},
sb6:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().L(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.gU())
z=new D.K("technique",y,this.c,this,[O.c4])
z.b=!0
this.Y(z)}},
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
a7:function(a){var z
a.cB(this.c)
this.b.Z(a)
this.a.Z(a)
z=this.c
if(z!=null)z.ai(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.A(z,0)]);z.A();)z.d.ai(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.A(z,0)]);z.A();)z.d.a7(a)
this.a.toString
a.cy.ay()
a.db.ay()
this.b.toString
a.cz()},
$isaE:1},aE:{"^":"a;"}}],["","",,A,{"^":"",dF:{"^":"a;a,b,c"},h3:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dt:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ek:{"^":"d5;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0al,0ah,0bm,0dw,0bn,0bo,0dz,0dA,0bp,0bq,0dB,0dC,0br,0bs,0dD,0dE,0bt,0dF,0dG,0bu,0dH,0dI,0bv,0bw,0bx,0dJ,0dK,0by,0bz,0dL,0dM,0bA,0dN,0ck,0dO,0cl,0dP,0cm,0dQ,0cn,0dR,0co,0dS,0cp,a,b,0c,0d,0e,0f,0r,0x,0y",
en:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bF("")
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
a1.fT(z)
a1.h_(z)
a1.fU(z)
a1.h7(z)
a1.h8(z)
a1.h1(z)
a1.hc(z)
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
z=new P.bF("")
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
v.fX(z)
v.fS(z)
v.fV(z)
v.fY(z)
v.h5(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h3(z)
v.h4(z)}v.h0(z)
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
p=H.b([],[P.j])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.m(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fW(z)
v.h2(z)
v.h6(z)
v.h9(z)
v.ha(z)
v.hb(z)
v.fZ(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.j])
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
n="vec4("+C.a.m(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dU(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a1.fr)this.id=H.f(this.y.p(0,"invViewMat"),"$isaH")
if(y)this.dy=H.f(this.y.p(0,"objMat"),"$isaH")
if(w)this.fr=H.f(this.y.p(0,"viewObjMat"),"$isaH")
this.fy=H.f(this.y.p(0,"projViewObjMat"),"$isaH")
if(a1.x2)this.k1=H.f(this.y.p(0,"txt2DMat"),"$isdf")
if(a1.y1)this.k2=H.f(this.y.p(0,"txtCubeMat"),"$isaH")
if(a1.y2)this.k3=H.f(this.y.p(0,"colorMat"),"$isaH")
this.r1=H.b([],[A.aH])
y=a1.al
if(y>0){this.k4=H.h(this.y.p(0,"bendMatCount"),"$isM")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.u(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isaH"))}}y=a1.a
if(y!==C.b){this.r2=H.f(this.y.p(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.rx=H.f(this.y.p(0,"emissionTxt"),"$isam")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isM")
break
case C.e:this.ry=H.f(this.y.p(0,"emissionTxt"),"$isae")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isM")
break}}y=a1.b
if(y!==C.b){this.x2=H.f(this.y.p(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.y1=H.f(this.y.p(0,"ambientTxt"),"$isam")
this.al=H.f(this.y.p(0,"nullAmbientTxt"),"$isM")
break
case C.e:this.y2=H.f(this.y.p(0,"ambientTxt"),"$isae")
this.al=H.f(this.y.p(0,"nullAmbientTxt"),"$isM")
break}}y=a1.c
if(y!==C.b){this.ah=H.f(this.y.p(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.bm=H.f(this.y.p(0,"diffuseTxt"),"$isam")
this.bn=H.f(this.y.p(0,"nullDiffuseTxt"),"$isM")
break
case C.e:this.dw=H.f(this.y.p(0,"diffuseTxt"),"$isae")
this.bn=H.f(this.y.p(0,"nullDiffuseTxt"),"$isM")
break}}y=a1.d
if(y!==C.b){this.bo=H.f(this.y.p(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dz=H.f(this.y.p(0,"invDiffuseTxt"),"$isam")
this.bp=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isM")
break
case C.e:this.dA=H.f(this.y.p(0,"invDiffuseTxt"),"$isae")
this.bp=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a1.e
if(y!==C.b){this.bs=H.f(this.y.p(0,"shininess"),"$isX")
this.bq=H.f(this.y.p(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dB=H.f(this.y.p(0,"specularTxt"),"$isam")
this.br=H.f(this.y.p(0,"nullSpecularTxt"),"$isM")
break
case C.e:this.dC=H.f(this.y.p(0,"specularTxt"),"$isae")
this.br=H.f(this.y.p(0,"nullSpecularTxt"),"$isM")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.d:this.dD=H.f(this.y.p(0,"bumpTxt"),"$isam")
this.bt=H.f(this.y.p(0,"nullBumpTxt"),"$isM")
break
case C.e:this.dE=H.f(this.y.p(0,"bumpTxt"),"$isae")
this.bt=H.f(this.y.p(0,"nullBumpTxt"),"$isM")
break}if(a1.dy){this.dF=H.f(this.y.p(0,"envSampler"),"$isae")
this.dG=H.f(this.y.p(0,"nullEnvTxt"),"$isM")
y=a1.r
if(y!==C.b){this.bu=H.f(this.y.p(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dH=H.f(this.y.p(0,"reflectTxt"),"$isam")
this.bv=H.f(this.y.p(0,"nullReflectTxt"),"$isM")
break
case C.e:this.dI=H.f(this.y.p(0,"reflectTxt"),"$isae")
this.bv=H.f(this.y.p(0,"nullReflectTxt"),"$isM")
break}}y=a1.x
if(y!==C.b){this.bw=H.f(this.y.p(0,"refraction"),"$isX")
this.bx=H.f(this.y.p(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dJ=H.f(this.y.p(0,"refractTxt"),"$isam")
this.by=H.f(this.y.p(0,"nullRefractTxt"),"$isM")
break
case C.e:this.dK=H.f(this.y.p(0,"refractTxt"),"$isae")
this.by=H.f(this.y.p(0,"nullRefractTxt"),"$isM")
break}}}y=a1.y
if(y!==C.b){this.bz=H.f(this.y.p(0,"alpha"),"$isX")
switch(y){case C.b:break
case C.f:break
case C.d:this.dL=H.f(this.y.p(0,"alphaTxt"),"$isam")
this.bA=H.f(this.y.p(0,"nullAlphaTxt"),"$isM")
break
case C.e:this.dM=H.f(this.y.p(0,"alphaTxt"),"$isae")
this.bA=H.f(this.y.p(0,"nullAlphaTxt"),"$isM")
break}}this.ck=H.b([],[A.f1])
this.cl=H.b([],[A.f2])
this.cm=H.b([],[A.f3])
this.cn=H.b([],[A.f4])
this.co=H.b([],[A.f5])
this.cp=H.b([],[A.f6])
if(a1.k2){y=a1.z
if(y>0){this.dN=H.h(this.y.p(0,"dirLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.y
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.ck;(x&&C.a).h(x,new A.f1(m,l,k))}}y=a1.Q
if(y>0){this.dO=H.h(this.y.p(0,"pntLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isX")
x=this.y
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isX")
x=this.y
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.cl;(x&&C.a).h(x,new A.f2(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dP=H.h(this.y.p(0,"spotLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.y
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isX")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.y
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.y
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.cm;(x&&C.a).h(x,new A.f3(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dQ=H.h(this.y.p(0,"txtDirLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isM")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isam")
x=this.cn;(x&&C.a).h(x,new A.f4(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dR=H.h(this.y.p(0,"txtPntLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isdf")
x=this.y
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isM")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isX")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isX")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isae")
x=this.co;(x&&C.a).h(x,new A.f5(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dS=H.h(this.y.p(0,"txtSpotLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isM")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isH")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isX")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isX")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isX")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isX")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.u(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isam")
x=this.cp;(x&&C.a).h(x,new A.f6(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
i5:function(a,b){var z,y
z=a.ah
y=new A.ek(b,z)
y.cP(b,z)
y.en(a,b)
return y}}},i8:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,al,ah,bm",
fT:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.al+"];\n"
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
h_:function(a){var z
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
fU:function(a){var z
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
h7:function(a){var z,y
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
h8:function(a){var z,y
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
h1:function(a){var z
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
hc:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bb(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fX:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
fS:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
fV:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
fY:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
h5:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
h0:function(a){var z,y
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
h3:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
h4:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
fW:function(a){var z,y
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
h2:function(a){var z,y
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
h6:function(a){var z,y
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
h9:function(a){var z,y,x
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
ha:function(a){var z,y,x
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
hb:function(a){var z,y,x
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
fZ:function(a){var z
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
i:function(a){return this.ah}},f1:{"^":"a;a,b,c"},f4:{"^":"a;a,b,c,d,e,f,r,x"},f2:{"^":"a;a,b,c,d,e,f,r"},f5:{"^":"a;a,b,c,d,e,f,r,x,y,z"},f3:{"^":"a;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},d5:{"^":"cI;",
cP:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dU:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.d1(b,35633)
this.f=this.d1(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dp(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.u(P.r("Failed to link shader: "+H.k(x)))}this.fJ()
this.fL()},
Z:function(a){a.a.useProgram(this.r)
this.x.hu()},
d1:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dp(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.e(P.r("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fJ:function(){var z,y,x,w,v,u
z=H.b([],[A.dF])
y=this.a
x=H.a4(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dF(y,v.name,u))}this.x=new A.h3(z)},
fL:function(){var z,y,x,w,v,u
z=H.b([],[A.a5])
y=this.a
x=H.a4(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hq(v.type,v.size,v.name,u))}this.y=new A.jw(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.M(z,y,b,c)
else return A.de(z,y,b,a,c)},
eN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.de(z,y,b,a,c)},
eO:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ae(z,y,b,c)
else return A.de(z,y,b,a,c)},
bi:function(a,b){return new P.fg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hq:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.jr(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.ju(this.a,this.r,c,d)
case 35667:return new A.js(this.a,this.r,c,d)
case 35668:return new A.jt(this.a,this.r,c,d)
case 35669:return new A.jv(this.a,this.r,c,d)
case 35674:return new A.jy(this.a,this.r,c,d)
case 35675:return new A.df(this.a,this.r,c,d)
case 35676:return new A.aH(this.a,this.r,c,d)
case 35678:return this.eN(b,c,d)
case 35680:return this.eO(b,c,d)
case 35670:throw H.e(this.bi("BOOL",c))
case 35671:throw H.e(this.bi("BOOL_VEC2",c))
case 35672:throw H.e(this.bi("BOOL_VEC3",c))
case 35673:throw H.e(this.bi("BOOL_VEC4",c))
default:throw H.e(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cg:{"^":"a;a,b",
i:function(a){return this.b}},eB:{"^":"d5;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a5:{"^":"a;"},jw:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.e(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
hy:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.hy("\n")}},M:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},js:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},jt:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},jv:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jq:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
q:{
de:function(a,b,c,d,e){var z=new A.jq(a,b,c,e)
z.f=d
z.e=P.hY(d,0,!1,P.C)
return z}}},X:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},jr:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},H:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},ju:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},jy:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},df:{"^":"a5;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bO(H.w(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aH:{"^":"a5;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bO(H.w(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},am:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ae:{"^":"a5;a,b,c,d",
ed:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
m6:function(a,b,c,d){return F.lC(c,a,d,b,new F.m7())},
lC:function(a,b,c,d,e){var z=F.m4(a,b,new F.lD(H.l(e,{func:1,ret:V.a_,args:[P.y]}),d,b,c),null)
if(z==null)return
z.au()
z.hK(new F.jO(),new F.im())
return z},
m4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.an,P.y,P.y]})
if(a<1)return
if(b<1)return
z=F.eA()
y=H.b([],[F.an])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cv(null,null,new V.aI(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.dr(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cv(null,null,new V.aI(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.dr(d))}}z.d.he(a+1,b+1,y)
return z},
m7:{"^":"p:37;",
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)}},
lD:{"^":"p:38;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dB(y.$1(z),x)
x=J.dB(y.$1(z+3.141592653589793/this.c),x).F(0,w)
x=new V.I(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.C(x)))
u=new V.I(1,0,0)
y=v.av(!v.v(0,u)?new V.I(0,0,1):u)
t=y.u(0,Math.sqrt(y.C(y)))
y=t.av(v)
u=y.u(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.I(0,new V.a_(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.U(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a6()}}},
al:{"^":"a;0a,0b,0c,0d,0e",
b_:function(){if(!this.gdu()){C.a.L(this.a.a.d.b,this)
this.a.a.a6()}this.ft()
this.fu()
this.fv()},
fG:function(a){this.a=a
C.a.h(a.d.b,this)},
fH:function(a){this.b=a
C.a.h(a.d.c,this)},
fI:function(a){this.c=a
C.a.h(a.d.d,this)},
ft:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
fu:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fv:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gdu:function(){return this.a==null||this.b==null||this.c==null},
eG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.I(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.dV())return
return v.u(0,Math.sqrt(v.C(v)))},
eJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.C(z)))
z=w.F(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.av(z.u(0,Math.sqrt(z.C(z))))
return z.u(0,Math.sqrt(z.C(z)))},
cf:function(){if(this.d!=null)return!0
var z=this.eG()
if(z==null){z=this.eJ()
if(z==null)return!1}this.d=z
this.a.a.a6()
return!0},
eF:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.I(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.dV())return
return v.u(0,Math.sqrt(v.C(v)))},
eI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.F(0,u)
z=new V.I(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.F(0,u).j(0,l).I(0,u).F(0,x)
z=new V.I(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.C(z)))
z=k.av(m)
z=z.u(0,Math.sqrt(z.C(z))).av(k)
m=z.u(0,Math.sqrt(z.C(z)))}return m},
cd:function(){if(this.e!=null)return!0
var z=this.eF()
if(z==null){z=this.eI()
if(z==null)return!1}this.e=z
this.a.a.a6()
return!0},
ghl:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z,y
if(this.gdu())return a+"disposed"
z=a+C.i.ax(J.ai(this.a.e),0)+", "+C.i.ax(J.ai(this.b.e),0)+", "+C.i.ax(J.ai(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.D("")},
q:{
bV:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.r("May not create a face with vertices attached to different shapes."))
z.fG(a)
z.fH(b)
z.fI(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a6()
return z}}},
hz:{"^":"a;"},
j_:{"^":"hz;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
eb:{"^":"a;"},
hU:{"^":"a;"},
jp:{"^":"hU;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
return z==null?y==null:z===y}else return!1}}},
es:{"^":"a;"},
ez:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
au:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.au()||!1
if(!this.a.au())y=!1
z=this.e
if(!(z==null))z.aA(0)
return y},
eS:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.an],"$asc")
H.w(e,"$isc",[P.C],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.b0(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hK:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.an],x=[P.C];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.eS(a,v,y,u,t))b.hJ(u)}this.a.B()
this.c.cC()
this.d.cC()
this.b.i1()
this.c.cD(new F.jp())
this.d.cD(new F.j_())
z=this.e
if(!(z==null))z.aA(0)},
dl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aw()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bf().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcN(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.y
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dJ])
for(r=0,q=0;q<w;++q){p=b.hh(q)
o=p.gcN(p)
C.a.T(s,q,new Z.dJ(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].hG(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.T(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bO(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cL(new Z.fc(34962,j),s,b)
i.b=H.b([],[Z.cm])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.dg(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.dg(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.B()
C.a.h(h,g.e)}f=Z.dg(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cm(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.m(z,"\n")},
aR:function(a){var z=this.e
if(!(z==null))z.w(a)},
a6:function(){return this.aR(null)},
q:{
eA:function(){var z,y
z=new F.ez()
y=new F.jJ(z)
y.b=!1
y.c=H.b([],[F.an])
z.a=y
y=new F.iU(z)
y.b=H.b([],[F.es])
z.b=y
y=new F.iT(z)
y.b=H.b([],[F.eb])
z.c=y
y=new F.iS(z)
y.b=H.b([],[F.al])
z.d=y
z.e=null
return z}}},
iS:{"^":"a;a,0b",
hd:function(a){var z,y,x,w,v
H.w(a,"$isc",[F.an],"$asc")
z=H.b([],[F.al])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bV(y,w,v))}return z},
he:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.an],"$asc")
z=H.b([],[F.al])
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
C.a.h(z,F.bV(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bV(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bV(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bV(q,n,r))}u=!u}w=!w}return z},
gn:function(a){return this.b.length},
cD:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b0(0,v,t)){v.b_()
break}}}}},
cC:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.ghl(x)
if(y)x.b_()}},
au:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cf())x=!1
return x},
ce:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cd())x=!1
return x},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
O:function(){return this.D("")}},
iT:{"^":"a;a,0b",
gn:function(a){return this.b.length},
cD:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b0(0,v,t)){v.b_()
break}}}}},
cC:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.U(x.a,x.b)
if(y)x.b_()}},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.b([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.m(z,"\n")},
O:function(){return this.D("")}},
iU:{"^":"a;a,0b",
gn:function(a){return this.b.length},
i1:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.b_()}},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
O:function(){return this.D("")}},
an:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
dr:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cv(this.cx,x,u,z,y,w,v,a,t)},
hG:function(a){var z,y
z=J.L(a)
if(z.v(a,$.$get$aw())){z=this.f
y=[P.y]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aO())){z=this.r
y=[P.y]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aN())){z=this.x
y=[P.y]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aP())){z=this.y
y=[P.y]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.v(a,$.$get$aQ())){z=this.z
y=[P.y]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bK())){z=this.Q
y=[P.y]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bL())){z=this.Q
y=[P.y]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bf()))return H.b([this.ch],[P.y])
else if(z.v(a,$.$get$aM())){z=this.cx
y=[P.y]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.y])},
cf:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.K(0,new F.jT(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
cd:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.K(0,new F.jS(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z,y,x
z=H.b([],[P.j])
C.a.h(z,C.i.ax(J.ai(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.m(z,", ")
return a+"{"+x+"}"},
O:function(){return this.D("")},
q:{
cv:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.an()
y=new F.jR(z)
y.b=H.b([],[F.es])
z.b=y
y=new F.jN(z)
x=[F.eb]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.jK(z)
x=[F.al]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$f9()
z.e=0
y=$.$get$aw()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aP().a)!==0?f:null
z.z=(x&$.$get$aQ().a)!==0?g:null
z.Q=(x&$.$get$fa().a)!==0?c:null
z.ch=(x&$.$get$bf().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
jT:{"^":"p:8;a",
$1:function(a){var z,y
H.h(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
jS:{"^":"p:8;a",
$1:function(a){var z,y
H.h(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
jJ:{"^":"a;a,0b,0c",
B:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a6()
return!0},
hf:function(a,b,c,d,e,f,g,h,i){var z=F.cv(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bj:function(a,b,c,d,e,f){return this.hf(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
au:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cf()
return!0},
ce:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cd()
return!0},
hk:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.U(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
this.B()
z=H.b([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
O:function(){return this.D("")}},
jK:{"^":"a;a,0b,0c,0d",
gn:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.al]})
C.a.K(this.b,b)
C.a.K(this.c,new F.jL(this,b))
C.a.K(this.d,new F.jM(this,b))},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
O:function(){return this.D("")}},
jL:{"^":"p:8;a,b",
$1:function(a){H.h(a,"$isal")
if(!J.U(a.a,this.a))this.b.$1(a)}},
jM:{"^":"p:8;a,b",
$1:function(a){var z
H.h(a,"$isal")
z=this.a
if(!J.U(a.a,z)&&!J.U(a.b,z))this.b.$1(a)}},
jN:{"^":"a;a,0b,0c",
gn:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
O:function(){return this.D("")}},
jP:{"^":"a;"},
jO:{"^":"jP;",
b0:function(a,b,c){return J.U(b.f,c.f)}},
jQ:{"^":"a;"},
im:{"^":"jQ;",
hJ:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.an],"$asc")
z=new V.I(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.I(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.C(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.u(0,Math.sqrt(u))
if(!J.U(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.w(null)}}}return}},
jR:{"^":"a;a,0b",
gn:function(a){return this.b.length},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
O:function(){return this.D("")}}}],["","",,O,{"^":"",i4:{"^":"c4;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
a_:[function(a){var z
H.h(a,"$isx")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.a_(null)},"ez","$1","$0","gbO",0,2,0],
fA:[function(a){H.h(a,"$isx")
this.a=null
this.a_(a)},function(){return this.fA(null)},"iT","$1","$0","gfz",0,2,0],
iu:[function(a,b){var z=V.az
z=new D.bX(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.a_(z)},"$2","gf1",8,0,26],
iv:[function(a,b){var z=V.az
z=new D.bY(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.a_(z)},"$2","gf2",8,0,26],
cZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a1(z.e.length+3,4)*4
x=C.h.a1(z.f.length+3,4)*4
w=C.h.a1(z.r.length+3,4)*4
v=C.h.a1(z.x.length+3,4)*4
u=C.h.a1(z.y.length+3,4)*4
t=C.h.a1(z.z.length+3,4)*4
s=C.h.a1(this.e.a.length+3,4)*4
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
a6=$.$get$aw()
if(c){z=$.$get$aO()
a6=new Z.be(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.be(a6.a|z.a)}if(a){z=$.$get$aP()
a6=new Z.be(a6.a|z.a)}if(a0){z=$.$get$aQ()
a6=new Z.be(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.be(a6.a|z.a)}return new A.i8(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.w(a,"$isc",[T.db],"$asc")},
ai:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ar(z,z.length,0,[H.A(z,0)]);z.A();){y=z.d
x=new V.I(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cF(x)}}},
e_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cZ()
y=H.h(a.fr.k(0,z.ah),"$isek")
if(y==null){y=A.i5(z,a.a)
a.di(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bm
z=b.e
if(!(z instanceof Z.cL)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.au()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.ce()
u.a.ce()
u=u.e
if(!(u==null))u.aA(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.hk()
t=t.e
if(!(t==null))t.aA(0)}r=b.d.dl(new Z.fd(a.a),w)
r.aw($.$get$aw()).e=this.a.Q.c
if(z)r.aw($.$get$aO()).e=this.a.cx.c
if(v)r.aw($.$get$aN()).e=this.a.ch.c
if(x.rx)r.aw($.$get$aP()).e=this.a.cy.c
if(u)r.aw($.$get$aQ()).e=this.a.db.c
if(x.x1)r.aw($.$get$aM()).e=this.a.dx.c
b.e=r}z=T.db
q=H.b([],[z])
this.a.Z(a)
if(x.fx){v=this.a
u=a.dx
u=u.gW(u)
v=v.dy
v.toString
v.ad(u.a8(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gW(u)
t=a.dx
t=u.j(0,t.gW(t))
a.cx=t
u=t}v=v.fr
v.toString
v.ad(u.a8(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghZ()
t=a.dx
t=u.j(0,t.gW(t))
a.ch=t
u=t}v=v.fy
v.toString
v.ad(u.a8(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ad(u.a8(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ad(u.a8(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ad(C.G.a8(u,!0))}if(x.al>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.y],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.h(t,"$isaz")
u=u.r1
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bO(H.w(t.a8(0,!0),"$isc",v,"$asc")))
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
case C.d:this.R(q,this.f.d)
v=this.a
u=this.f.d
v.af(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.R(q,this.f.e)
v=this.a
u=this.f.e
v.a9(v.ry,v.x1,u)
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
case C.d:this.R(q,this.r.d)
v=this.a
u=this.r.d
v.af(v.y1,v.al,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.R(q,this.r.e)
v=this.a
u=this.r.e
v.a9(v.y2,v.al,u)
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
v=v.ah
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.R(q,this.x.d)
v=this.a
u=this.x.d
v.af(v.bm,v.bn,u)
u=this.a
v=this.x.f
u=u.ah
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.R(q,this.x.e)
v=this.a
u=this.x.e
v.a9(v.dw,v.bn,u)
u=this.a
v=this.x.f
u=u.ah
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bo
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.R(q,this.y.d)
v=this.a
u=this.y.d
v.af(v.dz,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.R(q,this.y.e)
v=this.a
u=this.y.e
v.a9(v.dA,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bq
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bs
u.a.uniform1f(u.d,s)
break
case C.d:this.R(q,this.z.d)
v=this.a
u=this.z.d
v.af(v.dB,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bs
v.a.uniform1f(v.d,s)
break
case C.e:this.R(q,this.z.e)
v=this.a
u=this.z.e
v.a9(v.dC,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bs
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dN
v.a.uniform1i(v.d,p)
v=a.db
m=v.gW(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.ck
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cF(j.a)
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dO
v.a.uniform1i(v.d,p)
v=a.db
m=v.gW(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cl
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb3(j)
s=i.b
h=t.gcI(t)
g=t.gcJ(t)
t=t.gcK(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b9(j.gb3(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gak(j)
g=i.d
h=t.gbG()
s=t.gba()
t=t.gbk()
g.a.uniform3f(g.d,h,s,t)
t=j.gc8()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gc9()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gca()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dP
v.a.uniform1i(v.d,p)
v=a.db
m=v.gW(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cm
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb3(j)
s=i.b
h=t.gcI(t)
g=t.gcJ(t)
t=t.gcK(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcj(j).j_()
g=i.c
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=m.b9(j.gb3(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gak(j)
s=i.e
h=t.gbG()
g=t.gba()
t=t.gbk()
s.a.uniform3f(s.d,h,g,t)
t=j.giZ()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giX()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gc8()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gca()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dQ
v.a.uniform1i(v.d,p)
v=a.db
m=v.gW(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.cn
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb7()
H.w(q,"$isc",t,"$asc")
if(!C.a.S(q,s)){s.sbB(0,q.length)
C.a.h(q,s)}s=j.gcj(j)
h=i.d
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
h.a.uniform3f(h.d,g,f,s)
s=j.gbH()
f=i.b
g=s.gaM(s)
h=s.gaN(s)
s=s.gaO()
f.a.uniform3f(f.d,g,h,s)
s=j.gb4(j)
h=i.c
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
h.a.uniform3f(h.d,g,f,s)
s=m.cF(j.gcj(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gak(j)
g=i.f
f=h.gbG()
s=h.gba()
h=h.gbk()
g.a.uniform3f(g.d,f,s,h)
h=j.gb7()
s=h.gbD(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbD(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gbB(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dR
v.a.uniform1i(v.d,p)
v=a.db
m=v.gW(v)
for(v=this.dx.y,u=v.length,t=[P.y],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.co
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb7()
H.w(q,"$isc",s,"$asc")
if(!C.a.S(q,h)){h.sbB(0,q.length)
C.a.h(q,h)}e=m.j(0,j.gW(j))
h=j.gW(j).b9(new V.a_(0,0,0))
g=i.b
f=h.gcI(h)
d=h.gcJ(h)
h=h.gcK(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b9(new V.a_(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cs(0)
d=i.d
n=new Float32Array(H.bO(H.w(new V.cp(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a8(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gak(j)
h=i.e
f=d.gbG()
g=d.gba()
d=d.gbk()
h.a.uniform3f(h.d,f,g,d)
d=j.gb7()
h=d.gbD(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gio()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gim())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc8()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc9()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gca()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dS
v.a.uniform1i(v.d,p)
v=a.db
m=v.gW(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cp
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb7()
H.w(q,"$isc",z,"$asc")
if(!C.a.S(q,t)){t.sbB(0,q.length)
C.a.h(q,t)}t=j.gb3(j)
s=i.b
h=t.gcI(t)
g=t.gcJ(t)
t=t.gcK(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcj(j)
g=i.c
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=j.gbH()
s=i.d
h=t.gaM(t)
g=t.gaN(t)
t=t.gaO()
s.a.uniform3f(s.d,h,g,t)
t=j.gb4(j)
g=i.e
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=m.b9(j.gb3(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb7()
s=t.gbD(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbD(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gbB(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gak(j)
s=i.y
h=t.gbG()
g=t.gba()
t=t.gbk()
s.a.uniform3f(s.d,h,g,t)
t=j.gj4()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gj5()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gc8()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gca()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.d:this.R(q,this.Q.d)
z=this.a
v=this.Q.d
z.af(z.dD,z.bt,v)
break
case C.e:this.R(q,this.Q.e)
z=this.a
v=this.Q.e
z.a9(z.dE,z.bt,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gW(v).cs(0)
a.Q=v}z=z.id
z.toString
z.ad(v.a8(0,!0))}if(x.dy){this.R(q,this.ch)
z=this.a
v=this.ch
z.a9(z.dF,z.dG,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bu
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.R(q,this.cx.d)
z=this.a
v=this.cx.d
z.af(z.dH,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.R(q,this.cx.e)
z=this.a
v=this.cx.e
z.a9(z.dI,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bx
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bw
v.a.uniform1f(v.d,t)
break
case C.d:this.R(q,this.cy.d)
z=this.a
v=this.cy.d
z.af(z.dJ,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,t)
break
case C.e:this.R(q,this.cy.e)
z=this.a
v=this.cy.e
z.a9(z.dK,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bz
z.a.uniform1f(z.d,u)
break
case C.d:this.R(q,this.db.d)
z=this.a
u=this.db.d
z.af(z.dL,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break
case C.e:this.R(q,this.db.e)
z=this.a
u=this.db.e
z.a9(z.dM,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].Z(a)
z=b.e
z.Z(a)
z.a7(a)
z.aS(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aS(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.dt()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cZ().ah}},i6:{"^":"d_;0f,a,b,0c,0d,0e"},d_:{"^":"a;",
bf:["ek",function(){}]},i7:{"^":"d_;a,b,0c,0d,0e"},b9:{"^":"d_;0f,a,b,0c,0d,0e",
d9:function(a){var z,y
if(!J.U(this.f,a)){z=this.f
this.f=a
y=new D.K(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.a_(y)}},
bf:["bN",function(){this.ek()
this.d9(new V.Y(1,1,1))}],
sak:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.bf()
z=this.a
z.a=null
z.a_(null)}this.d9(b)}},i9:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
fF:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.K(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.a_(z)}},
bf:function(){this.bN()
this.fF(1)}},ia:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
c5:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.K(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.a_(z)}},
bf:function(){this.bN()
this.c5(100)}},j0:{"^":"c4;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
a_:[function(a){var z
H.h(a,"$isx")
z=this.e
if(!(z==null))z.w(a)},function(){return this.a_(null)},"ez","$1","$0","gbO",0,2,0],
e_:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.k(0,"Skybox"),"$iseB")
if(z==null){y=a.a
z=new A.eB(y,"Skybox")
z.cP(y,"Skybox")
z.dU(0,$.j2,$.j1)
z.z=z.x.k(0,"posAttr")
z.Q=H.f(z.y.k(0,"fov"),"$isX")
z.ch=H.f(z.y.k(0,"ratio"),"$isX")
z.cx=H.f(z.y.k(0,"boxClr"),"$isH")
z.cy=H.f(z.y.k(0,"boxTxt"),"$isae")
z.db=H.f(z.y.k(0,"viewMat"),"$isaH")
a.di(z)}this.a=z}if(b.e==null){y=b.d.dl(new Z.fd(a.a),$.$get$aw())
y.aw($.$get$aw()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.Z(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.ed(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gW(x).cs(0)
w=w.db
w.toString
w.ad(x.a8(0,!0))
y=b.e
if(y instanceof Z.cL){y.Z(a)
y.a7(a)
y.aS(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.dt()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},c4:{"^":"a;"}}],["","",,T,{"^":"",db:{"^":"cI;"},eJ:{"^":"db;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z}},jc:{"^":"a;a,0b,0c,0d,0e",
aH:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a6
W.a0(z,"load",H.l(new T.jd(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fB:function(a,b,c){var z,y,x,w
b=V.dy(b,2)
z=V.dy(a.width,2)
y=V.dy(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cN(null,null)
x.width=z
x.height=y
w=H.h(C.k.e7(x,"2d"),"$isdL")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lB(w.getImageData(0,0,x.width,x.height))}}},jd:{"^":"p:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fB(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.T.ia(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.ht()}++z.e}}}],["","",,V,{"^":"",bo:{"^":"a;",
aQ:function(a,b){return!0},
i:function(a){return"all"},
$isaL:1},aL:{"^":"a;"},ej:{"^":"a;",
aQ:["ej",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aQ(0,b))return!0
return!1}],
i:["cO",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaL:1},au:{"^":"ej;0a",
aQ:function(a,b){return!this.ej(0,b)},
i:function(a){return"!["+this.cO(0)+"]"}},iC:{"^":"a;0a,0b",
aQ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.d3(this.a)
y=H.d3(this.b)
return z+".."+y},
$isaL:1,
q:{
S:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aE(a,0)
y=C.i.aE(b,0)
x=new V.iC()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iQ:{"^":"a;0a",
ep:function(a){var z,y
if(a.a.length<=0)throw H.e(P.r("May not create a SetMatcher with zero characters."))
z=new H.b8(0,0,[P.C,P.O])
for(y=new H.cZ(a,a.gn(a),0,[H.ag(a,"v",0)]);y.A();)z.T(0,y.d,!0)
this.a=z},
aQ:function(a,b){return this.a.dq(0,b)},
i:function(a){var z=this.a
return P.d8(new H.ed(z,[H.A(z,0)]),0,null)},
$isaL:1,
q:{
t:function(a){var z=new V.iQ()
z.ep(a)
return z}}},eD:{"^":"a;a,b,0c,0d",
ghL:function(a){return this.b},
m:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eQ(this.a.l(0,b))
w.a=H.b([],[V.aL])
w.c=!1
C.a.h(this.c,w)
return w},
hv:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aQ(0,a))return w}return},
i:function(a){return this.b}},eN:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dA(this.b,"\n","\\n")
y=H.dA(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eO:{"^":"a;a,b,0c",
az:function(a,b,c){var z,y,x
H.w(c,"$isc",[P.j],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.T(0,x,b)}},
i:function(a){return this.b}},jl:{"^":"a;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eD(this,b)
z.c=H.b([],[V.eQ])
this.a.T(0,b,z)}return z},
H:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eO(this,a)
y=P.j
z.c=new H.b8(0,0,[y,y])
this.b.T(0,a,z)}return z},
e3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eN])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aE(a,t)
r=y.hv(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d8(w,0,null)
throw H.e(P.r("Untokenizable string [state: "+y.ghL(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d8(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eN(o==null?p.b:o,q,t)}++t}}},
q:{
ct:function(){var z,y
z=new V.jl()
y=P.j
z.a=new H.b8(0,0,[y,V.eD])
z.b=new H.b8(0,0,[y,V.eO])
return z}}},eQ:{"^":"ej;b,0c,0a",
i:function(a){return this.b.b+": "+this.cO(0)}}}],["","",,X,{"^":"",cf:{"^":"a;",$isaC:1},hE:{"^":"da;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
ao:function(a){var z=this.x
if(!(z==null))z.w(a)},
Z:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.c.ab(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.c.ab(w.b*x)
t=C.c.ab(w.c*y)
a.c=t
w=C.c.ab(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cS:function(a,b,c,d,e,f,g){var z,y
z=new X.hE()
y=new V.aI(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.ex(0,0,1,1)
z.r=y
return z}}},hJ:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
Z:function(a){var z
a.cy.bF(V.ba())
z=V.ba()
a.db.bF(z)},
aS:function(a){a.cy.ay()
a.db.ay()},
$isaC:1,
$iscf:1},iq:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
ao:[function(a){var z
H.h(a,"$isx")
z=this.f
if(!(z==null))z.w(a)},function(){return this.ao(null)},"ik","$1","$0","geC",0,2,0],
Z:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aA(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bF(s)
z=$.er
if(z==null){z=V.el(new V.a_(0,0,0),new V.I(0,1,0),new V.I(0,0,-1))
$.er=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aT(0,a,this)
if(q!=null)r=q.j(0,r)}a.db.bF(r)},
aS:function(a){a.cy.ay()
a.db.ay()},
$isaC:1,
$iscf:1,
q:{
eq:function(a,b,c,d,e){var z,y,x
z=new X.iq()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gt().h(0,z.geC())
x=new D.K("mover",y,z.b,z,[U.ac])
x.b=!0
z.ao(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.K("fov",y,b,z,[P.y])
x.b=!0
z.ao(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.K("near",y,d,z,[P.y])
x.b=!0
z.ao(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.K("far",y,a,z,[P.y])
x.b=!0
z.ao(x)}return z}}},da:{"^":"a;"}}],["","",,V,{"^":"",
m2:function(a){P.jk(C.C,new V.m3(a))},
aU:{"^":"a;",
bc:function(a){this.b=new P.hH(C.D)
this.c=null
this.d=H.b([],[[P.c,W.b4]])},
G:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b4]))
y=a.split("\n")
for(z=y.length,x=[W.b4],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.J(u)
s=this.b.eM(u,0,u.length)
r=s==null?u:s
C.B.eb(t,H.dA(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbC(this.d),t)}},
dZ:function(a,b){var z,y,x,w
H.w(b,"$isc",[P.j],"$asc")
this.d=H.b([],[[P.c,W.b4]])
z=C.a.m(b,"\n")
y=this.c
if(y==null){y=this.bl()
this.c=y}for(y=y.e3(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bE(y[w])}},
m3:{"^":"p:42;a",
$1:function(a){H.h(a,"$isbc")
P.dz(C.c.e2(this.a.ghz(),2)+" fps")}},
hk:{"^":"aU;a,0b,0c,0d",
bE:function(a){switch(a.a){case"Class":this.G(a.b,"#551")
break
case"Comment":this.G(a.b,"#777")
break
case"Id":this.G(a.b,"#111")
break
case"Num":this.G(a.b,"#191")
break
case"Reserved":this.G(a.b,"#119")
break
case"String":this.G(a.b,"#171")
break
case"Symbol":this.G(a.b,"#616")
break
case"Type":this.G(a.b,"#B11")
break
case"Whitespace":this.G(a.b,"#111")
break}},
bl:function(){var z,y,x,w
z=V.ct()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Int")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").m(0,"Int")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").m(0,"FloatDot")
x=V.t(new H.q("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").m(0,"Float")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").m(0,"Float")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Sym")
y=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").m(0,"Sym")
x=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"OpenDoubleStr")
y=V.t(new H.q('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
x=V.t(new H.q('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").m(0,"EscDoubleStr")
y=V.t(new H.q("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").m(0,"OpenDoubleStr")
x=V.t(new H.q('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bo())
x=z.l(0,"Start").m(0,"OpenSingleStr")
y=V.t(new H.q("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").m(0,"CloseSingleStr")
x=V.t(new H.q("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").m(0,"EscSingleStr")
y=V.t(new H.q("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").m(0,"OpenSingleStr")
x=V.t(new H.q("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bo())
x=z.l(0,"Start").m(0,"Slash")
y=V.t(new H.q("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"Comment")
x=V.t(new H.q("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").m(0,"EndComment")
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").m(0,"Comment")
x=new V.au()
w=[V.aL]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"MLComment")
x=V.t(new H.q("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").m(0,"MLCStar")
y=V.t(new H.q("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").m(0,"MLComment")
x=new V.au()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").m(0,"EndComment")
x=V.t(new H.q("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Whitespace")
y=V.t(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").m(0,"Whitespace")
x=V.t(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.H("Num")
x=z.l(0,"Float")
x.d=x.a.H("Num")
x=z.l(0,"Sym")
x.d=x.a.H("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.H("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.H("String")
x=z.l(0,"EndComment")
x.d=x.a.H("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.H("Whitespace")
x=z.l(0,"Id")
y=x.a.H("Id")
x.d=y
x=[P.j]
y.az(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.az(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.az(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hF:{"^":"aU;a,0b,0c,0d",
bE:function(a){switch(a.a){case"Builtin":this.G(a.b,"#411")
break
case"Comment":this.G(a.b,"#777")
break
case"Id":this.G(a.b,"#111")
break
case"Num":this.G(a.b,"#191")
break
case"Preprocess":this.G(a.b,"#737")
break
case"Reserved":this.G(a.b,"#119")
break
case"Symbol":this.G(a.b,"#611")
break
case"Type":this.G(a.b,"#171")
break
case"Whitespace":this.G(a.b,"#111")
break}},
bl:function(){var z,y,x,w
z=V.ct()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Int")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").m(0,"Int")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").m(0,"FloatDot")
x=V.t(new H.q("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").m(0,"Float")
y=V.S("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").m(0,"Float")
x=V.S("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Sym")
y=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").m(0,"Sym")
x=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Slash")
y=V.t(new H.q("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"Comment")
x=V.t(new H.q("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").m(0,"Sym").a,new V.bo())
x=z.l(0,"Comment").m(0,"EndComment")
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").m(0,"Comment")
x=new V.au()
w=[V.aL]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Preprocess")
x=V.t(new H.q("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").m(0,"Preprocess")
y=new V.au()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").m(0,"EndPreprocess")
y=V.t(new H.q("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Whitespace")
x=V.t(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").m(0,"Whitespace")
y=V.t(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.H("Num")
y=z.l(0,"Float")
y.d=y.a.H("Num")
y=z.l(0,"Sym")
y.d=y.a.H("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.H("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.H("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.H("Whitespace")
y=z.l(0,"Id")
x=y.a.H("Id")
y.d=x
y=[P.j]
x.az(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.az(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.az(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hG:{"^":"aU;a,0b,0c,0d",
bE:function(a){switch(a.a){case"Attr":this.G(a.b,"#911")
this.G("=","#111")
break
case"Id":this.G(a.b,"#111")
break
case"Other":this.G(a.b,"#111")
break
case"Reserved":this.G(a.b,"#119")
break
case"String":this.G(a.b,"#171")
break
case"Symbol":this.G(a.b,"#616")
break}},
bl:function(){var z,y,x
z=V.ct()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
x=V.S("a","z")
C.a.h(y.a,x)
x=V.S("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=V.S("0","9")
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").m(0,"Attr")
x=V.t(new H.q("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Sym")
x=V.t(new H.q("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").m(0,"Sym")
y=V.t(new H.q("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"OpenStr")
x=V.t(new H.q('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").m(0,"CloseStr")
y=V.t(new H.q('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").m(0,"EscStr")
x=V.t(new H.q("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").m(0,"OpenStr")
y=V.t(new H.q('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").m(0,"OpenStr").a,new V.bo())
C.a.h(z.l(0,"Start").m(0,"Other").a,new V.bo())
y=z.l(0,"Other").m(0,"Other")
x=new V.au()
x.a=H.b([],[V.aL])
C.a.h(y.a,x)
y=V.t(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.S("a","z")
C.a.h(x.a,y)
y=V.S("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.H("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.H("String")
y=z.l(0,"Id")
x=y.a.H("Id")
y.d=x
x.az(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
x=z.l(0,"Attr")
x.d=x.a.H("Attr")
x=z.l(0,"Other")
x.d=x.a.H("Other")
return z}},
is:{"^":"aU;a,0b,0c,0d",
dZ:function(a,b){H.w(b,"$isc",[P.j],"$asc")
this.d=H.b([],[[P.c,W.b4]])
this.G(C.a.m(b,"\n"),"#111")},
bE:function(a){},
bl:function(){return}},
iV:{"^":"a;0a,0b",
eq:function(a,b){var z,y,x,w,v,u,t
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
W.a0(z,"scroll",H.l(new V.iY(x),{func:1,ret:-1,args:[t]}),!1,t)},
dh:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.j],"$asc")
this.fK()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.e3(C.a.hE(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.fS(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fz(C.u,s,C.p,!1)
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
e6:function(a){var z,y,x,w
z=new V.hk("dart")
z.bc("dart")
y=new V.hF("glsl")
y.bc("glsl")
x=new V.hG("html")
x.bc("html")
w=C.a.hw(H.b([z,y,x],[V.aU]),new V.iZ(a))
if(w!=null)return w
z=new V.is("plain")
z.bc("plain")
return z},
df:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a2,"$isc",[P.j],"$asc")
z=H.b([],[P.C])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.du(w).bK(w,"+")){C.a.T(a2,x,C.i.bb(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bK(w,"-")){C.a.T(a2,x,C.i.bb(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.e6(a0)
v.dZ(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.fz(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dD(null)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gV(w);b.A();)h.appendChild(b.gJ(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
fK:function(){var z,y,x,w
if(this.b!=null)return
z=V.ct()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Bold")
x=V.t(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").m(0,"Bold")
x=new V.au()
w=[V.aL]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").m(0,"BoldEnd")
x=V.t(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Italic")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").m(0,"Italic")
x=new V.au()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").m(0,"ItalicEnd")
x=V.t(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Code")
x=V.t(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").m(0,"Code")
x=new V.au()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.q("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").m(0,"CodeEnd")
x=V.t(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"LinkHead")
x=V.t(new H.q("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").m(0,"LinkTail")
x=V.t(new H.q("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").m(0,"LinkEnd")
y=V.t(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").m(0,"LinkHead")
y=new V.au()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").m(0,"LinkEnd")
y=V.t(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").m(0,"LinkTail")
y=new V.au()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").m(0,"Other").a,new V.bo())
x=z.l(0,"Other").m(0,"Other")
y=new V.au()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.q("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.H("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.H("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.H("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.H("Link")
x=z.l(0,"Other")
x.d=x.a.H("Other")
this.b=z},
q:{
iW:function(a,b){var z=new V.iV()
z.eq(a,!0)
return z}}},
iY:{"^":"p:12;a",
$1:function(a){P.eL(C.l,new V.iX(this.a))}},
iX:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.c.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
iZ:{"^":"p:43;a",
$1:function(a){return H.h(a,"$isaU").a===this.a}}}],["","",,B,{"^":"",
fO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.iW("Test 013",!0)
y=W.cN(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.dh(H.b(["Test of sky box and cover pass."],x))
z.dh(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.ji(w,!0,!0,!0,!1)
u=new U.e3()
x=U.ac
u.bd(x)
u.aU(u.gf_(),u.gfk())
u.e=null
u.f=V.ba()
u.r=0
t=v.r
s=new U.jF()
r=U.cQ()
r.scH(0,!0)
r.sct(6.283185307179586)
r.scv(0)
r.sa4(0,0)
r.scu(100)
r.sP(0)
r.sci(0.5)
s.b=r
q=s.gaI()
r.gt().h(0,q)
r=U.cQ()
r.scH(0,!0)
r.sct(6.283185307179586)
r.scv(0)
r.sa4(0,0)
r.scu(100)
r.sP(0)
r.sci(0.5)
s.c=r
r.gt().h(0,q)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
p=new X.aB(!1,!1,!1)
o=s.d
s.d=p
r=[X.aB]
q=new D.K("modifiers",o,p,s,r)
q.b=!0
s.N(q)
q=s.f
if(q!==!1){s.f=!1
q=new D.K("invertX",q,!1,s,[P.O])
q.b=!0
s.N(q)}q=s.r
if(q!==!1){s.r=!1
q=new D.K("invertY",q,!1,s,[P.O])
q.b=!0
s.N(q)}s.aY(t)
u.h(0,s)
t=v.r
s=new U.jE()
q=U.cQ()
q.scH(0,!0)
q.sct(6.283185307179586)
q.scv(0)
q.sa4(0,0)
q.scu(100)
q.sP(0)
q.sci(0.2)
s.b=q
q.gt().h(0,s.gaI())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
p=new X.aB(!0,!1,!1)
o=s.c
s.c=p
q=new D.K("modifiers",o,p,s,r)
q.b=!0
s.N(q)
s.aY(t)
u.h(0,s)
t=v.r
s=new U.jG()
s.c=0.01
s.d=0
s.e=0
p=new X.aB(!1,!1,!1)
s.b=p
r=new D.K("modifiers",null,p,s,r)
r.b=!0
s.N(r)
s.aY(t)
u.h(0,s)
u.h(0,U.dP(V.aA(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=X.eq(2000,1.0471975511965976,u,0.1,null)
m=X.cS(!0,!0,!1,null,2000,null,0)
if(m.b){m.b=!1
t=new D.K("clearColor",!0,!1,m,[P.O])
t.b=!0
m.ao(t)}l=E.e1(null,!0,null,"",null,null)
l.sbJ(0,F.m6(30,1,15,0.5))
k=new O.i4()
t=O.cP(V.az)
k.e=t
t.aU(k.gf1(),k.gf2())
t=new O.b9(k,"emission")
t.c=C.b
t.f=new V.Y(0,0,0)
k.f=t
t=new O.b9(k,"ambient")
t.c=C.b
t.f=new V.Y(0,0,0)
k.r=t
t=new O.b9(k,"diffuse")
t.c=C.b
t.f=new V.Y(0,0,0)
k.x=t
t=new O.b9(k,"invDiffuse")
t.c=C.b
t.f=new V.Y(0,0,0)
k.y=t
t=new O.ia(k,"specular")
t.c=C.b
t.f=new V.Y(0,0,0)
t.ch=100
k.z=t
t=new O.i7(k,"bump")
t.c=C.b
k.Q=t
k.ch=null
t=new O.b9(k,"reflect")
t.c=C.b
t.f=new V.Y(0,0,0)
k.cx=t
t=new O.i9(k,"refract")
t.c=C.b
t.f=new V.Y(0,0,0)
t.ch=1
k.cy=t
t=new O.i6(k,"alpha")
t.c=C.b
t.f=1
k.db=t
t=new D.hT()
t.bd(D.Z)
t.e=H.b([],[D.ci])
t.f=H.b([],[D.it])
t.r=H.b([],[D.j3])
t.x=H.b([],[D.je])
t.y=H.b([],[D.jf])
t.z=H.b([],[D.jg])
t.Q=null
t.ch=null
t.cM(t.gf0(),t.gfj(),t.gfl())
k.dx=t
s=t.Q
if(s==null){s=D.G()
t.Q=s
t=s}else t=s
t.h(0,k.gfz())
t=k.dx
s=t.ch
if(s==null){s=D.G()
t.ch=s
t=s}else t=s
t.h(0,k.gbO())
k.dy=null
t=k.dx
s=U.dP(V.el(new V.a_(0,0,0),new V.I(0,1,0),new V.I(0,-1,-1)))
j=new V.Y(1,1,1)
r=new D.ci()
r.c=new V.Y(1,1,1)
r.a=new V.I(0,0,1)
o=r.b
r.b=s
s.gt().h(0,r.gex())
x=new D.K("mover",o,r.b,r,[x])
x.b=!0
r.aD(x)
if(!r.c.v(0,j)){o=r.c
r.c=j
x=new D.K("color",o,j,r,[V.Y])
x.b=!0
r.aD(x)}t.h(0,r)
x=k.r
x.sak(0,new V.Y(0,0,1))
x=k.x
x.sak(0,new V.Y(0,1,0))
x=k.z
x.sak(0,new V.Y(1,0,0))
x=k.z
if(x.c===C.b){x.c=C.f
x.bN()
x.c5(100)
t=x.a
t.a=null
t.a_(null)}x.c5(10)
x=v.f
t=x.a
i=t.createTexture()
t.bindTexture(34067,i)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
h=new T.eJ()
h.a=0
h.b=i
h.c=!1
h.d=0
x.aH(h,i,"../resources/maskonaive/posx.jpg",34069,!1,!1)
x.aH(h,i,"../resources/maskonaive/negx.jpg",34070,!1,!1)
x.aH(h,i,"../resources/maskonaive/posy.jpg",34071,!1,!1)
x.aH(h,i,"../resources/maskonaive/negy.jpg",34072,!1,!1)
x.aH(h,i,"../resources/maskonaive/posz.jpg",34073,!1,!1)
x.aH(h,i,"../resources/maskonaive/negz.jpg",34074,!1,!1)
g=new M.hg()
g.saZ(null)
g.sb5(0,null)
g.sb6(null)
x=E.e1(null,!0,null,"",null,null)
f=F.eA()
t=f.a
s=new V.I(-1,-1,1)
s=s.u(0,Math.sqrt(s.C(s)))
e=t.bj(new V.bA(1,2,4,6),new V.aI(1,0,0,1),new V.a_(-1,-1,0),new V.R(0,1),s,null)
t=f.a
s=new V.I(1,-1,1)
s=s.u(0,Math.sqrt(s.C(s)))
d=t.bj(new V.bA(0,3,4,6),new V.aI(0,0,1,1),new V.a_(1,-1,0),new V.R(1,1),s,null)
t=f.a
s=new V.I(1,1,1)
s=s.u(0,Math.sqrt(s.C(s)))
c=t.bj(new V.bA(0,2,5,6),new V.aI(0,1,0,1),new V.a_(1,1,0),new V.R(1,0),s,null)
t=f.a
s=new V.I(-1,1,1)
s=s.u(0,Math.sqrt(s.C(s)))
b=t.bj(new V.bA(0,2,4,7),new V.aI(1,1,0,1),new V.a_(-1,1,0),new V.R(0,0),s,null)
f.d.hd(H.b([e,d,c,b],[F.an]))
f.au()
x.sbJ(0,f)
g.d=x
g.e=null
x=new O.j0()
x.b=1.0471975511965976
o=x.c
x.c=h
h.gt().h(0,x.gbO())
t=new D.K("boxTexture",o,x.c,x,[T.eJ])
t.b=!0
x.a_(t)
j=new V.Y(1,1,1)
if(!J.U(x.d,j)){o=x.d
x.d=j
t=new D.K("boxColor",o,j,x,[V.Y])
t.b=!0
x.a_(t)}x.e=null
g.sb6(x)
g.sb5(0,m)
g.saZ(n)
a=new M.hv()
x=O.cP(E.aK)
a.d=x
x.aU(a.gf4(),a.gf5())
a.e=null
a.f=null
a.r=null
a.x=null
a.saZ(null)
a.sb5(0,null)
a.sb6(null)
a.saZ(n)
a.sb6(k)
a.sb5(0,m)
a.d.h(0,l)
x=M.aE
t=H.b([g,a],[x])
s=new M.he()
s.bd(x)
s.e=!1
s.f=null
s.aU(s.gfm(),s.gfn())
s.a2(0,t)
x=v.d
if(x!==s){if(x!=null)x.gt().L(0,v.gcR())
v.d=s
s.gt().h(0,v.gcR())
v.es()}x=v.z
if(x==null){x=D.G()
v.z=x}t={func:1,ret:-1,args:[D.x]}
s=H.l(new B.lW(g,z),t)
r=x.b
if(r==null){t=H.b([],[t])
x.b=t
x=t}else x=r
C.a.h(x,s)
V.m2(v)},
lW:{"^":"p:6;a,b",
$1:function(a){var z,y,x,w
H.h(a,"$isx")
z=this.a.c
y=this.b
x=z.a
w=[P.j]
y.df("Vertex Shader for Skybox","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
x=z.a
y.df("Fragment Shader for Skybox","glsl",0,H.b((x==null?null:x.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e7.prototype
return J.e6.prototype}if(typeof a=="string")return J.c_.prototype
if(a==null)return J.e8.prototype
if(typeof a=="boolean")return J.hO.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.c9=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.cC=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.lH=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.lI=function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.du=function(a){if(typeof a=="string")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.bl=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).v(a,b)}
J.fU=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lH(a).ac(a,b)}
J.dB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lI(a).j(a,b)}
J.fV=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c9(a).k(a,b)}
J.fW=function(a,b,c,d){return J.bl(a).dg(a,b,c,d)}
J.cG=function(a,b,c){return J.c9(a).hm(a,b,c)}
J.cH=function(a,b){return J.cC(a).E(a,b)}
J.fX=function(a,b){return J.cC(a).K(a,b)}
J.fY=function(a){return J.bl(a).ghi(a)}
J.b1=function(a){return J.L(a).gX(a)}
J.b2=function(a){return J.cC(a).gV(a)}
J.b3=function(a){return J.c9(a).gn(a)}
J.fZ=function(a){return J.bl(a).gcA(a)}
J.h_=function(a){return J.bl(a).gi9(a)}
J.dC=function(a){return J.cC(a).i0(a)}
J.h0=function(a,b,c){return J.du(a).aV(a,b,c)}
J.h1=function(a){return J.du(a).ii(a)}
J.ai=function(a){return J.L(a).i(a)}
I.b_=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.cd.prototype
C.k=W.cM.prototype
C.B=W.b4.prototype
C.E=J.n.prototype
C.a=J.b7.prototype
C.F=J.e6.prototype
C.h=J.e7.prototype
C.G=J.e8.prototype
C.c=J.bZ.prototype
C.i=J.c_.prototype
C.N=J.c0.prototype
C.R=H.ii.prototype
C.S=W.ij.prototype
C.v=J.ir.prototype
C.T=P.d4.prototype
C.w=W.ja.prototype
C.o=J.c6.prototype
C.x=W.bM.prototype
C.y=W.jV.prototype
C.z=new P.ip()
C.A=new P.jI()
C.j=new P.kH()
C.b=new A.cg(0,"ColorSourceType.None")
C.f=new A.cg(1,"ColorSourceType.Solid")
C.d=new A.cg(2,"ColorSourceType.Texture2D")
C.e=new A.cg(3,"ColorSourceType.TextureCube")
C.l=new P.b5(0)
C.C=new P.b5(5e6)
C.D=new P.hI("element",!0,!1,!1,!1)
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
C.O=H.b(I.b_(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.P=H.b(I.b_(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.Q=H.b(I.b_([]),[P.j])
C.u=H.b(I.b_([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.m=H.b(I.b_(["bind","if","ref","repeat","syntax"]),[P.j])
C.n=H.b(I.b_(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.p=new P.jH(!1)
$.ay=0
$.bp=null
$.dH=null
$.dl=!1
$.fL=null
$.fG=null
$.fR=null
$.cB=null
$.cE=null
$.dv=null
$.bh=null
$.bP=null
$.bQ=null
$.dm=!1
$.T=C.j
$.aJ=null
$.cR=null
$.e0=null
$.e_=null
$.dW=null
$.dV=null
$.dU=null
$.dT=null
$.m=V.ib()
$.j2="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.j1="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.er=null
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
I.$lazy(y,x,w)}})(["dS","$get$dS",function(){return H.fK("_$dart_dartClosure")},"cW","$get$cW",function(){return H.fK("_$dart_js")},"eR","$get$eR",function(){return H.aF(H.cu({
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.aF(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aF(H.cu(null))},"eU","$get$eU",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aF(H.cu(void 0))},"eZ","$get$eZ",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aF(H.eX(null))},"eV","$get$eV",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aF(H.eX(void 0))},"f_","$get$f_",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.jW()},"bR","$get$bR",function(){return[]},"fy","$get$fy",function(){return P.iG("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dQ","$get$dQ",function(){return{}},"fj","$get$fj",function(){return P.ef(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)},"dj","$get$dj",function(){return P.ee(P.j,P.bW)},"fb","$get$fb",function(){return Z.ao(0)},"f9","$get$f9",function(){return Z.ao(511)},"aw","$get$aw",function(){return Z.ao(1)},"aO","$get$aO",function(){return Z.ao(2)},"aN","$get$aN",function(){return Z.ao(4)},"aP","$get$aP",function(){return Z.ao(8)},"aQ","$get$aQ",function(){return Z.ao(16)},"bK","$get$bK",function(){return Z.ao(32)},"bL","$get$bL",function(){return Z.ao(64)},"fa","$get$fa",function(){return Z.ao(96)},"bf","$get$bf",function(){return Z.ao(128)},"aM","$get$aM",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[P.C,[P.d,E.aK]]},{func:1,ret:P.N,args:[D.x]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.N,args:[F.al]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.N,args:[W.a6]},{func:1,ret:P.N,args:[,,]},{func:1,ret:W.D},{func:1,args:[,]},{func:1,ret:P.O,args:[W.aD]},{func:1,ret:P.O,args:[P.j]},{func:1,ret:P.O,args:[W.D]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.C,[P.d,D.Z]]},{func:1,ret:P.O,args:[W.V,P.j,P.j,W.c7]},{func:1,ret:-1,args:[P.C,[P.d,U.ac]]},{func:1,ret:-1,args:[P.C,[P.d,V.az]]},{func:1,ret:-1,args:[P.C,[P.d,M.aE]]},{func:1,ret:P.j,args:[P.C]},{func:1,ret:P.N,args:[P.a1]},{func:1,ret:P.O,args:[P.y,P.y]},{func:1,ret:P.O,args:[[P.d,D.Z]]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,ret:[P.aR,,],args:[,]},{func:1,ret:W.V,args:[W.D]},{func:1,args:[P.j]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:V.a_,args:[P.y]},{func:1,ret:P.N,args:[F.an,P.y,P.y]},{func:1,ret:-1,args:[P.a],opt:[P.av]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bc]},{func:1,ret:P.O,args:[V.aU]},{func:1,args:[,P.j]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bM]}]
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
if(x==y)H.m5(d||a)
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
Isolate.b_=a.b_
Isolate.ds=a.ds
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
if(typeof dartMainRunner==="function")dartMainRunner(B.fO,[])
else B.fO([])})})()
//# sourceMappingURL=test.dart.js.map
