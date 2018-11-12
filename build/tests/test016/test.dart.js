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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dw(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dx=function(){}
var dart=[["","",,H,{"^":"",mp:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dA==null){H.lI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.f8("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cY()]
if(v!=null)return v
v=H.lN(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cY(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
n:{"^":"a;",
u:function(a,b){return a===b},
gY:function(a){return H.bC(a)},
i:["ej",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hO:{"^":"n;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isO:1},
ec:{"^":"n;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isN:1},
cZ:{"^":"n;",
gY:function(a){return 0},
i:["el",function(a){return String(a)}]},
iq:{"^":"cZ;"},
cv:{"^":"cZ;"},
c_:{"^":"cZ;",
i:function(a){var z=a[$.$get$dW()]
if(z==null)return this.el(a)
return"JavaScript function for "+H.j(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbX:1},
b6:{"^":"n;$ti",
h:function(a,b){H.E(b,H.A(a,0))
if(!!a.fixed$length)H.r(P.ag("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.r(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.X(a[z],b)){a.splice(z,1)
return!0}return!1},
a3:function(a,b){var z,y
H.x(b,"$isd",[H.A(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ag("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aU(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.T(z,y,H.j(a[y]))
return z.join(b)},
hB:function(a){return this.l(a,"")},
hu:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.O,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aU(a))}throw H.e(H.cW())},
ht:function(a,b){return this.hu(a,b,null)},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
bK:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.ae(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.e(P.ae(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.A(a,0)])
return H.b(a.slice(b,c),[H.A(a,0)])},
gbB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cW())},
dn:function(a,b){var z,y
H.l(b,{func:1,ret:P.O,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aU(a))}return!1},
R:function(a,b){var z
for(z=0;z<a.length;++z)if(J.X(a[z],b))return!0
return!1},
i:function(a){return P.cV(a,"[","]")},
gV:function(a){return new J.aq(a,a.length,0,[H.A(a,0)])},
gY:function(a){return H.bC(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.ca(b,"newLength",null))
if(b<0)throw H.e(P.ae(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.a3(b)
H.E(c,H.A(a,0))
if(!!a.immutable$list)H.r(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aY(a,b))
if(b>=a.length||b<0)throw H.e(H.aY(a,b))
a[b]=c},
$isd:1,
$isc:1,
q:{
hN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ca(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ae(a,0,4294967295,"length",null))
return J.e9(new Array(a),b)},
e9:function(a,b){return J.bw(H.b(a,[b]))},
bw:function(a){H.c8(a)
a.fixed$length=Array
return a}}},
mo:{"^":"b6;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cl:{"^":"n;",
i9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.ag(""+a+".toInt()"))},
cr:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.ag(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ag(""+a+".round()"))},
e6:function(a,b){var z,y
if(b>20)throw H.e(P.ae(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
ed:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.ag("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
bh:function(a,b){var z
if(a>0)z=this.fJ(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fJ:function(a,b){return b>31?0:a>>>b},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.aX(b))
return a<b},
$isz:1,
$isa0:1},
eb:{"^":"cl;",$isD:1},
ea:{"^":"cl;"},
cm:{"^":"n;",
cf:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.aY(a,b))
if(b<0)throw H.e(H.aY(a,b))
if(b>=a.length)H.r(H.aY(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.e(H.aY(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.J(b)
if(typeof b!=="string")throw H.e(P.ca(b,null,null))
return a+b},
eh:function(a,b,c){var z
if(c>a.length)throw H.e(P.ae(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bJ:function(a,b){return this.eh(a,b,0)},
aX:function(a,b,c){H.a3(c)
if(c==null)c=a.length
if(b<0)throw H.e(P.cr(b,null,null))
if(b>c)throw H.e(P.cr(b,null,null))
if(c>a.length)throw H.e(P.cr(c,null,null))
return a.substring(b,c)},
bc:function(a,b){return this.aX(a,b,null)},
ic:function(a){return a.toLowerCase()},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hN:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
ab:function(a,b){return this.hN(a,b," ")},
hi:function(a,b,c){if(c>a.length)throw H.e(P.ae(c,0,a.length,null,null))
return H.fT(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iset:1,
$isi:1}}],["","",,H,{"^":"",
cW:function(){return new P.db("No element")},
hM:function(){return new P.db("Too many elements")},
t:{"^":"jy;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.h.cf(this.a,b)},
$asf9:function(){return[P.D]},
$asv:function(){return[P.D]},
$asd:function(){return[P.D]},
$asc:function(){return[P.D]}},
e2:{"^":"d;"},
co:{"^":"e2;$ti",
gV:function(a){return new H.d1(this,this.gm(this),0,[H.ah(this,"co",0)])},
cH:function(a,b){return this.ek(0,H.l(b,{func:1,ret:P.O,args:[H.ah(this,"co",0)]}))}},
d1:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.c7(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.e(P.aU(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
i1:{"^":"d;a,b,$ti",
gV:function(a){return new H.i2(J.b2(this.a),this.b,this.$ti)},
gm:function(a){return J.b3(this.a)},
D:function(a,b){return this.b.$1(J.cJ(this.a,b))},
$asd:function(a,b){return[b]}},
i2:{"^":"cX;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gJ(z))
return!0}this.a=null
return!1},
gJ:function(a){return this.a},
$ascX:function(a,b){return[b]}},
i3:{"^":"co;a,b,$ti",
gm:function(a){return J.b3(this.a)},
D:function(a,b){return this.b.$1(J.cJ(this.a,b))},
$asco:function(a,b){return[b]},
$asd:function(a,b){return[b]}},
dm:{"^":"d;a,b,$ti",
gV:function(a){return new H.jO(J.b2(this.a),this.b,this.$ti)}},
jO:{"^":"cX;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gJ(z)))return!0
return!1},
gJ:function(a){var z=this.a
return z.gJ(z)}},
ci:{"^":"a;$ti"},
f9:{"^":"a;$ti"},
jy:{"^":"cn+f9;"}}],["","",,H,{"^":"",
lB:function(a){return init.types[H.a3(a)]},
lL:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isF},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.e(H.aX(a))
return z},
bC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ba:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.L(a).$iscv){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aF(w,0)===36)w=C.h.bc(w,1)
r=H.dB(H.c8(H.aZ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ew:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iA:function(a){var z,y,x,w
z=H.b([],[P.D])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.aX(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bh(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.aX(w))}return H.ew(z)},
ex:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.aX(x))
if(x<0)throw H.e(H.aX(x))
if(x>65535)return H.iA(a)}return H.ew(a)},
d7:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bh(z,10))>>>0,56320|z&1023)}throw H.e(P.ae(a,0,1114111,null,null))},
aa:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iz:function(a){return a.b?H.aa(a).getUTCFullYear()+0:H.aa(a).getFullYear()+0},
ix:function(a){return a.b?H.aa(a).getUTCMonth()+1:H.aa(a).getMonth()+1},
it:function(a){return a.b?H.aa(a).getUTCDate()+0:H.aa(a).getDate()+0},
iu:function(a){return a.b?H.aa(a).getUTCHours()+0:H.aa(a).getHours()+0},
iw:function(a){return a.b?H.aa(a).getUTCMinutes()+0:H.aa(a).getMinutes()+0},
iy:function(a){return a.b?H.aa(a).getUTCSeconds()+0:H.aa(a).getSeconds()+0},
iv:function(a){return a.b?H.aa(a).getUTCMilliseconds()+0:H.aa(a).getMilliseconds()+0},
o:function(a){throw H.e(H.aX(a))},
k:function(a,b){if(a==null)J.b3(a)
throw H.e(H.aY(a,b))},
aY:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
z=H.a3(J.b3(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.Q(b,a,"index",null,z)
return P.cr(b,"index",null)},
lx:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aw(!0,b,"end",null)},
aX:function(a){return new P.aw(!0,a,null,null)},
ls:function(a){if(typeof a!=="number")throw H.e(H.aX(a))
return a},
e:function(a){var z
if(a==null)a=new P.es()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fU})
z.name=""}else z.toString=H.fU
return z},
fU:function(){return J.a4(this.dartException)},
r:function(a){throw H.e(a)},
y:function(a){throw H.e(P.aU(a))},
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bh(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d_(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.er(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eS()
u=$.$get$eT()
t=$.$get$eU()
s=$.$get$eV()
r=$.$get$eZ()
q=$.$get$f_()
p=$.$get$eX()
$.$get$eW()
o=$.$get$f1()
n=$.$get$f0()
m=v.aa(y)
if(m!=null)return z.$1(H.d_(H.J(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.d_(H.J(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.er(H.J(y),m))}}return z.$1(new H.jx(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aw(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eE()
return a},
bl:function(a){var z
if(a==null)return new H.ft(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ft(a)},
lz:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.T(0,a[y],a[x])}return b},
lK:function(a,b,c,d,e,f){H.h(a,"$isbX")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.p("Unsupported number of arguments for wrapped closure"))},
bi:function(a,b){var z
H.a3(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lK)
a.$identity=z
return z},
hd:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isc){z.$reflectionInfo=d
x=H.iE(z).r}else x=d
w=e?Object.create(new H.j2().constructor.prototype):Object.create(new H.cL(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ax
if(typeof u!=="number")return u.E()
$.ax=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dR(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dM:H.cM
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dR(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ha:function(a,b,c,d){var z=H.cM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dR:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hc(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ha(y,!w,z,b)
if(y===0){w=$.ax
if(typeof w!=="number")return w.E()
$.ax=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bo
if(v==null){v=H.cc("self")
$.bo=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ax
if(typeof w!=="number")return w.E()
$.ax=w+1
t+=w
w="return function("+t+"){return this."
v=$.bo
if(v==null){v=H.cc("self")
$.bo=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hb:function(a,b,c,d){var z,y
z=H.cM
y=H.dM
switch(b?-1:a){case 0:throw H.e(H.iN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hc:function(a,b){var z,y,x,w,v,u,t,s
z=$.bo
if(z==null){z=H.cc("self")
$.bo=z}y=$.dL
if(y==null){y=H.cc("receiver")
$.dL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hb(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ax
if(typeof y!=="number")return y.E()
$.ax=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ax
if(typeof y!=="number")return y.E()
$.ax=y+1
return new Function(z+y+"}")()},
dw:function(a,b,c,d,e,f,g){var z,y
z=J.bw(H.c8(b))
H.a3(c)
y=!!J.L(d).$isc?J.bw(d):d
return H.hd(a,z,c,y,!!e,f,g)},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aE(a,"String"))},
lR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aE(a,"num"))},
du:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aE(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aE(a,"int"))},
fR:function(a,b){throw H.e(H.aE(a,H.J(b).substring(3)))},
lT:function(a,b){var z=J.c7(b)
throw H.e(H.h9(a,z.aX(b,3,z.gm(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fR(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.lT(a,b)},
c8:function(a){if(a==null)return a
if(!!J.L(a).$isc)return a
throw H.e(H.aE(a,"List"))},
lM:function(a,b){if(a==null)return a
if(!!J.L(a).$isc)return a
if(J.L(a)[b])return a
H.fR(a,b)},
fK:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a3(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fK(J.L(a))
if(z==null)return!1
y=H.fN(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dr)return a
$.dr=!0
try{if(H.c6(a,b))return a
z=H.c9(b)
y=H.aE(a,z)
throw H.e(y)}finally{$.dr=!1}},
dy:function(a,b){if(a!=null&&!H.dv(a,b))H.r(H.aE(a,H.c9(b)))
return a},
fF:function(a){var z
if(a instanceof H.q){z=H.fK(J.L(a))
if(z!=null)return H.c9(z)
return"Closure"}return H.ba(a)},
lY:function(a){throw H.e(new P.hk(H.J(a)))},
fL:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aZ:function(a){if(a==null)return
return a.$ti},
nj:function(a,b,c){return H.bm(a["$as"+H.j(c)],H.aZ(b))},
bV:function(a,b,c,d){var z
H.J(c)
H.a3(d)
z=H.bm(a["$as"+H.j(c)],H.aZ(b))
return z==null?null:z[d]},
ah:function(a,b,c){var z
H.J(b)
H.a3(c)
z=H.bm(a["$as"+H.j(b)],H.aZ(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.a3(b)
z=H.aZ(a)
return z==null?null:z[b]},
c9:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.x(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dB(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.j(b[y])}if('func' in a)return H.li(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
li:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.x(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.h.E(t,b[r])
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
for(z=H.ly(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.J(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dB:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.bG("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b0(u,c)}v="<"+z.i(0)+">"
return v},
bm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bU:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aZ(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fI(H.bm(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.J(b)
H.c8(c)
H.J(d)
if(a==null)return a
z=H.bU(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dB(c,0,null)
throw H.e(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fI:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ap(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ap(a[y],b,c[y],d))return!1
return!0},
nh:function(a,b,c){return a.apply(b,H.bm(J.L(b)["$as"+H.j(c)],H.aZ(b)))},
fO:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="N"||a===-1||a===-2||H.fO(z)}return!1},
dv:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="N"||b===-1||b===-2||H.fO(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.L(a).constructor
x=H.aZ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ap(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dv(a,b))throw H.e(H.aE(a,H.c9(b)))
return a},
ap:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.fN(a,b,c,d)
if('func' in a)return c.builtin$cls==="bX"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,x,d)
else if(H.ap(a,b,x,d))return!0
else{if(!('$is'+"bu" in y.prototype))return!1
w=y.prototype["$as"+"bu"]
v=H.bm(w,z?a.slice(1):null)
return H.ap(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c9(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fI(H.bm(r,z),b,u,d)},
fN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ap(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ap(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ap(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lQ(m,b,l,d)},
lQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ap(c[w],d,a[w],b))return!1}return!0},
ni:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
lN:function(a){var z,y,x,w,v,u
z=H.J($.fM.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.J($.fH.$2(a,z))
if(z!=null){y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cH(x)
$.cD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cG[z]=x
return x}if(v==="-"){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fQ(a,x)
if(v==="*")throw H.e(P.f8(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fQ(a,x)},
fQ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dC(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dC(a,!1,null,!!a.$isF)},
lP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dC(z,c,null,null)},
lI:function(){if(!0===$.dA)return
$.dA=!0
H.lJ()},
lJ:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.lE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fS.$1(v)
if(u!=null){t=H.lP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lE:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.bh(C.H,H.bh(C.M,H.bh(C.r,H.bh(C.r,H.bh(C.L,H.bh(C.I,H.bh(C.J(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fM=new H.lF(v)
$.fH=new H.lG(u)
$.fS=new H.lH(t)},
bh:function(a,b){return a(b)||b},
fT:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dF:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iD:{"^":"a;a,b,c,d,e,f,r,0x",q:{
iE:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bw(z)
y=z[0]
x=z[1]
return new H.iD(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jl:{"^":"a;a,b,c,d,e,f",
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
aD:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jl(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
im:{"^":"a1;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
er:function(a,b){return new H.im(a,b==null?null:b.method)}}},
hR:{"^":"a1;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
d_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hR(a,y,z?null:b.receiver)}}},
jx:{"^":"a1;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lZ:{"^":"q:17;a",
$1:function(a){if(!!J.L(a).$isa1)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ft:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isau:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.ba(this).trim()+"'"},
ge9:function(){return this},
$isbX:1,
ge9:function(){return this}},
eJ:{"^":"q;"},
j2:{"^":"eJ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cL:{"^":"eJ;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bC(this.a)
else y=typeof z!=="object"?J.b1(z):H.bC(z)
return(y^H.bC(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
q:{
cM:function(a){return a.a},
dM:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cL("self","target","receiver","name")
y=J.bw(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jm:{"^":"a1;a",
i:function(a){return this.a},
q:{
aE:function(a,b){return new H.jm("TypeError: "+H.j(P.ch(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
h8:{"^":"a1;a",
i:function(a){return this.a},
q:{
h9:function(a,b){return new H.h8("CastError: "+H.j(P.ch(a))+": type '"+H.fF(a)+"' is not a subtype of type '"+b+"'")}}},
iM:{"^":"a1;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
iN:function(a){return new H.iM(a)}}},
b7:{"^":"ek;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
ga4:function(a){return new H.eg(this,[H.A(this,0)])},
dv:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d2(y,b)}else return this.hz(b)},
hz:function(a){var z=this.d
if(z==null)return!1
return this.cs(this.bU(z,J.b1(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bf(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bf(w,b)
x=y==null?null:y.b
return x}else return this.hA(b)},
hA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bU(z,J.b1(a)&0x3ffffff)
x=this.cs(y,a)
if(x<0)return
return y[x].b},
T:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c0()
this.b=z}this.cW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c0()
this.c=y}this.cW(y,b,c)}else{x=this.d
if(x==null){x=this.c0()
this.d=x}w=J.b1(b)&0x3ffffff
v=this.bU(x,w)
if(v==null)this.c5(x,w,[this.c1(b,c)])
else{u=this.cs(v,b)
if(u>=0)v[u].b=c
else v.push(this.c1(b,c))}}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aU(this))
z=z.c}},
cW:function(a,b,c){var z
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
z=this.bf(a,b)
if(z==null)this.c5(a,b,this.c1(b,c))
else z.b=c},
eV:function(){this.r=this.r+1&67108863},
c1:function(a,b){var z,y
z=new H.hV(H.E(a,H.A(this,0)),H.E(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eV()
return z},
cs:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.X(a[y].a,b))return y
return-1},
i:function(a){return P.el(this)},
bf:function(a,b){return a[b]},
bU:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eQ:function(a,b){delete a[b]},
d2:function(a,b){return this.bf(a,b)!=null},
c0:function(){var z=Object.create(null)
this.c5(z,"<non-identifier-key>",z)
this.eQ(z,"<non-identifier-key>")
return z},
$isef:1},
hV:{"^":"a;a,b,0c,0d"},
eg:{"^":"e2;a,$ti",
gm:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.hW(z,z.r,this.$ti)
y.c=z.e
return y}},
hW:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lF:{"^":"q:17;a",
$1:function(a){return this.a(a)}},
lG:{"^":"q:35;a",
$2:function(a,b){return this.a(a,b)}},
lH:{"^":"q:44;a",
$1:function(a){return this.a(H.J(a))}},
hP:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iset:1,
q:{
hQ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.hD("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ly:function(a){return J.e9(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bQ:function(a){return a},
aW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.aY(b,a))},
lh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.lx(a,b,c))
return b},
ih:{"^":"n;",$isn_:1,"%":"DataView;ArrayBufferView;d5|fn|fo|ig|fp|fq|aV"},
d5:{"^":"ih;",
gm:function(a){return a.length},
$isF:1,
$asF:I.dx},
ig:{"^":"fo;",
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
$asci:function(){return[P.z]},
$asv:function(){return[P.z]},
$isd:1,
$asd:function(){return[P.z]},
$isc:1,
$asc:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
aV:{"^":"fq;",
$asci:function(){return[P.D]},
$asv:function(){return[P.D]},
$isd:1,
$asd:function(){return[P.D]},
$isc:1,
$asc:function(){return[P.D]}},
mx:{"^":"aV;",
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int16Array"},
my:{"^":"aV;",
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mz:{"^":"aV;",
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mA:{"^":"aV;",
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mB:{"^":"aV;",
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mC:{"^":"aV;",
gm:function(a){return a.length},
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ii:{"^":"aV;",
gm:function(a){return a.length},
j:function(a,b){H.aW(b,a,a.length)
return a[b]},
bK:function(a,b,c){return new Uint8Array(a.subarray(b,H.lh(b,c,a.length)))},
"%":";Uint8Array"},
fn:{"^":"d5+v;"},
fo:{"^":"fn+ci;"},
fp:{"^":"d5+v;"},
fq:{"^":"fp+ci;"}}],["","",,P,{"^":"",
jQ:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bi(new P.jS(z),1)).observe(y,{childList:true})
return new P.jR(z,y,x)}else if(self.setImmediate!=null)return P.lq()
return P.lr()},
n4:[function(a){self.scheduleImmediate(H.bi(new P.jT(H.l(a,{func:1,ret:-1})),0))},"$1","lp",4,0,10],
n5:[function(a){self.setImmediate(H.bi(new P.jU(H.l(a,{func:1,ret:-1})),0))},"$1","lq",4,0,10],
n6:[function(a){P.dh(C.l,H.l(a,{func:1,ret:-1}))},"$1","lr",4,0,10],
dh:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a1(a.a,1000)
return P.kW(z<0?0:z,b)},
eN:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bb]})
z=C.f.a1(a.a,1000)
return P.kX(z<0?0:z,b)},
ll:function(a,b){if(H.c6(a,{func:1,args:[P.a,P.au]}))return b.hX(a,null,P.a,P.au)
if(H.c6(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.ca(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lk:function(){var z,y
for(;z=$.bg,z!=null;){$.bS=null
y=z.b
$.bg=y
if(y==null)$.bR=null
z.a.$0()}},
ng:[function(){$.ds=!0
try{P.lk()}finally{$.bS=null
$.ds=!1
if($.bg!=null)$.$get$dn().$1(P.fJ())}},"$0","fJ",0,0,3],
fE:function(a){var z=new P.ff(H.l(a,{func:1,ret:-1}))
if($.bg==null){$.bR=z
$.bg=z
if(!$.ds)$.$get$dn().$1(P.fJ())}else{$.bR.b=z
$.bR=z}},
lo:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bg
if(z==null){P.fE(a)
$.bS=$.bR
return}y=new P.ff(a)
x=$.bS
if(x==null){y.b=z
$.bS=y
$.bg=y}else{y.b=x.b
x.b=y
$.bS=y
if(y.b==null)$.bR=y}},
lU:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.j===y){P.cC(null,null,C.j,a)
return}y.toString
P.cC(null,null,y,H.l(y.ca(a),z))},
eM:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.l(y.ca(b),z))},
ji:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bb]}
H.l(b,z)
y=$.S
if(y===C.j){y.toString
return P.eN(a,b)}x=y.dq(b,P.bb)
$.S.toString
return P.eN(a,H.l(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.lo(new P.lm(z,e))},
fC:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
fD:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
ln:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cC:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ca(d):c.hg(d,-1)
P.fE(d)},
jS:{"^":"q:18;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jR:{"^":"q:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jT:{"^":"q:2;a",
$0:function(){this.a.$0()}},
jU:{"^":"q:2;a",
$0:function(){this.a.$0()}},
fx:{"^":"a;a,0b,c",
eB:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bi(new P.kZ(this,b),0),a)
else throw H.e(P.ag("`setTimeout()` not found."))},
eC:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bi(new P.kY(this,a,Date.now(),b),0),a)
else throw H.e(P.ag("Periodic timer."))},
$isbb:1,
q:{
kW:function(a,b){var z=new P.fx(!0,0)
z.eB(a,b)
return z},
kX:function(a,b){var z=new P.fx(!1,0)
z.eC(a,b)
return z}}},
kZ:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kY:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.eo(w,x)}z.c=y
this.d.$1(z)}},
bf:{"^":"a;0a,b,c,d,e,$ti",
hG:function(a){if(this.c!==6)return!0
return this.b.b.cF(H.l(this.d,{func:1,ret:P.O,args:[P.a]}),a.a,P.O,P.a)},
hx:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.a,P.au]}))return H.dy(w.i2(z,a.a,a.b,null,y,P.au),x)
else return H.dy(w.cF(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aQ:{"^":"a;df:a<,b,0fz:c<,$ti",
e5:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ll(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aQ(0,$.S,[c])
w=b==null?1:3
this.cX(new P.bf(x,w,a,b,[z,c]))
return x},
i8:function(a,b){return this.e5(a,null,b)},
cX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbf")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaQ")
z=y.a
if(z<4){y.cX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.l(new P.k8(this,a),{func:1,ret:-1}))}},
da:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbf")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaQ")
y=u.a
if(y<4){u.da(a)
return}this.a=y
this.c=u.c}z.a=this.bg(a)
y=this.b
y.toString
P.cC(null,null,y,H.l(new P.kd(z,this),{func:1,ret:-1}))}},
c3:function(){var z=H.h(this.c,"$isbf")
this.c=null
return this.bg(z)},
bg:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d_:function(a){var z,y,x,w
z=H.A(this,0)
H.dy(a,{futureOr:1,type:z})
y=this.$ti
x=H.bU(a,"$isbu",y,"$asbu")
if(x){z=H.bU(a,"$isaQ",y,null)
if(z)P.fi(a,this)
else P.k9(a,this)}else{w=this.c3()
H.E(a,z)
this.a=4
this.c=a
P.bO(this,w)}},
bP:[function(a,b){var z
H.h(b,"$isau")
z=this.c3()
this.a=8
this.c=new P.aj(a,b)
P.bO(this,z)},function(a){return this.bP(a,null)},"ih","$2","$1","geL",4,2,45],
$isbu:1,
q:{
k9:function(a,b){var z,y,x
b.a=1
try{a.e5(new P.ka(b),new P.kb(b),null)}catch(x){z=H.ai(x)
y=H.bl(x)
P.lU(new P.kc(b,z,y))}},
fi:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaQ")
if(z>=4){y=b.c3()
b.a=a.a
b.c=a.c
P.bO(b,y)}else{y=H.h(b.c,"$isbf")
b.a=2
b.c=a
a.da(y)}},
bO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isaj")
y=y.b
u=v.a
t=v.b
y.toString
P.cB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bO(z.a,b)}y=z.a
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
P.cB(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.kg(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kf(x,b,r).$0()}else if((y&2)!==0)new P.ke(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.L(y).$isbu){if(y.a>=4){n=H.h(t.c,"$isbf")
t.c=null
b=t.bg(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fi(y,t)
return}}m=b.b
n=H.h(m.c,"$isbf")
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
k8:{"^":"q:2;a,b",
$0:function(){P.bO(this.a,this.b)}},
kd:{"^":"q:2;a,b",
$0:function(){P.bO(this.b,this.a.a)}},
ka:{"^":"q:18;a",
$1:function(a){var z=this.a
z.a=0
z.d_(a)}},
kb:{"^":"q:43;a",
$2:function(a,b){this.a.bP(a,H.h(b,"$isau"))},
$1:function(a){return this.$2(a,null)}},
kc:{"^":"q:2;a,b,c",
$0:function(){this.a.bP(this.b,this.c)}},
kg:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e4(H.l(w.d,{func:1}),null)}catch(v){y=H.ai(v)
x=H.bl(v)
if(this.d){w=H.h(this.a.a.c,"$isaj").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isaj")
else u.b=new P.aj(y,x)
u.a=!0
return}if(!!J.L(z).$isbu){if(z instanceof P.aQ&&z.gdf()>=4){if(z.gdf()===8){w=this.b
w.b=H.h(z.gfz(),"$isaj")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i8(new P.kh(t),null)
w.a=!1}}},
kh:{"^":"q:40;a",
$1:function(a){return this.a}},
kf:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.E(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.cF(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ai(t)
y=H.bl(t)
x=this.a
x.b=new P.aj(z,y)
x.a=!0}}},
ke:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isaj")
w=this.c
if(w.hG(z)&&w.e!=null){v=this.b
v.b=w.hx(z)
v.a=!1}}catch(u){y=H.ai(u)
x=H.bl(u)
w=H.h(this.a.a.c,"$isaj")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aj(y,x)
s.a=!0}}},
ff:{"^":"a;a,0b"},
dc:{"^":"a;$ti",
gm:function(a){var z,y
z={}
y=new P.aQ(0,$.S,[P.D])
z.a=0
this.hE(new P.j5(z,this),!0,new P.j6(z,y),y.geL())
return y}},
j5:{"^":"q;a,b",
$1:function(a){H.E(a,H.ah(this.b,"dc",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.ah(this.b,"dc",0)]}}},
j6:{"^":"q:2;a,b",
$0:function(){this.b.d_(this.a.a)}},
eH:{"^":"a;$ti"},
j4:{"^":"a;"},
bb:{"^":"a;"},
aj:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa1:1},
l5:{"^":"a;",$isn3:1},
lm:{"^":"q:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.es()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
kB:{"^":"l5;",
i3:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.S){a.$0()
return}P.fC(null,null,this,a,-1)}catch(x){z=H.ai(x)
y=H.bl(x)
P.cB(null,null,this,z,H.h(y,"$isau"))}},
i4:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.S){a.$1(b)
return}P.fD(null,null,this,a,b,-1,c)}catch(x){z=H.ai(x)
y=H.bl(x)
P.cB(null,null,this,z,H.h(y,"$isau"))}},
hg:function(a,b){return new P.kD(this,H.l(a,{func:1,ret:b}),b)},
ca:function(a){return new P.kC(this,H.l(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.kE(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e4:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.j)return a.$0()
return P.fC(null,null,this,a,b)},
cF:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.S===C.j)return a.$1(b)
return P.fD(null,null,this,a,b,c,d)},
i2:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.S===C.j)return a.$2(b,c)
return P.ln(null,null,this,a,b,c,d,e,f)},
hX:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
kD:{"^":"q;a,b,c",
$0:function(){return this.a.e4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kC:{"^":"q:3;a,b",
$0:function(){return this.a.i3(this.b)}},
kE:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.i4(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hX:function(a,b,c){H.c8(a)
return H.x(H.lz(a,new H.b7(0,0,[b,c])),"$isef",[b,c],"$asef")},
eh:function(a,b){return new H.b7(0,0,[a,b])},
c1:function(a,b,c,d){return new P.ko(0,0,[d])},
hL:function(a,b,c){var z,y
if(P.dt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bT()
C.a.h(y,a)
try{P.lj(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.eI(b,H.lM(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cV:function(a,b,c){var z,y,x
if(P.dt(a))return b+"..."+c
z=new P.bG(b)
y=$.$get$bT()
C.a.h(y,a)
try{x=z
x.a=P.eI(x.gaG(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaG()+c
y=z.gaG()
return y.charCodeAt(0)==0?y:y},
dt:function(a){var z,y
for(z=0;y=$.$get$bT(),z<y.length;++z)if(a===y[z])return!0
return!1},
lj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gJ(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gJ(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ(z);++x
for(;z.B();t=s,s=r){r=z.gJ(z);++x
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
ei:function(a,b){var z,y
z=P.c1(null,null,null,b)
for(y=J.b2(a);y.B();)z.h(0,H.E(y.gJ(y),b))
return z},
el:function(a){var z,y,x
z={}
if(P.dt(a))return"{...}"
y=new P.bG("")
try{C.a.h($.$get$bT(),a)
x=y
x.a=x.gaG()+"{"
z.a=!0
J.fY(a,new P.i0(z,y))
z=y
z.a=z.gaG()+"}"}finally{z=$.$get$bT()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaG()
return z.charCodeAt(0)==0?z:z},
ko:{"^":"ki;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fm(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
R:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$iscz")!=null}else{y=this.eM(b)
return y}},
eM:function(a){var z=this.d
if(z==null)return!1
return this.bS(this.d6(z,a),a)>=0},
h:function(a,b){var z,y
H.E(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dq()
this.b=z}return this.cY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dq()
this.c=y}return this.cY(y,b)}else return this.eE(0,b)},
eE:function(a,b){var z,y,x
H.E(b,H.A(this,0))
z=this.d
if(z==null){z=P.dq()
this.d=z}y=this.d0(b)
x=z[y]
if(x==null)z[y]=[this.bO(b)]
else{if(this.bS(x,b)>=0)return!1
x.push(this.bO(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dc(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dc(this.c,b)
else return this.fs(0,b)},
fs:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.d6(z,b)
x=this.bS(y,b)
if(x<0)return!1
this.dh(y.splice(x,1)[0])
return!0},
cY:function(a,b){H.E(b,H.A(this,0))
if(H.h(a[b],"$iscz")!=null)return!1
a[b]=this.bO(b)
return!0},
dc:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iscz")
if(z==null)return!1
this.dh(z)
delete a[b]
return!0},
cZ:function(){this.r=this.r+1&67108863},
bO:function(a){var z,y
z=new P.cz(H.E(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cZ()
return z},
dh:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cZ()},
d0:function(a){return J.b1(a)&0x3ffffff},
d6:function(a,b){return a[this.d0(b)]},
bS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.X(a[y].a,b))return y
return-1},
q:{
dq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cz:{"^":"a;a,0b,0c"},
fm:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.A(this,0))
this.c=z.b
return!0}}}},
ki:{"^":"iO;"},
cn:{"^":"kp;",$isd:1,$isc:1},
v:{"^":"a;$ti",
gV:function(a){return new H.d1(a,this.gm(a),0,[H.bV(this,a,"v",0)])},
D:function(a,b){return this.j(a,b)},
ib:function(a,b){var z,y,x
z=H.b([],[H.bV(this,a,"v",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.T(z,y,this.j(a,y));++y}return z},
ia:function(a){return this.ib(a,!0)},
i:function(a){return P.cV(a,"[","]")}},
ek:{"^":"a8;"},
i0:{"^":"q:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a8:{"^":"a;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bV(this,a,"a8",0),H.bV(this,a,"a8",1)]})
for(z=J.b2(this.ga4(a));z.B();){y=z.gJ(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.b3(this.ga4(a))},
i:function(a){return P.el(a)},
$isa2:1},
iQ:{"^":"a;$ti",
a3:function(a,b){var z
for(z=J.b2(H.x(b,"$isd",this.$ti,"$asd"));z.B();)this.h(0,z.gJ(z))},
i:function(a){return P.cV(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.dI("index"))
if(b<0)H.r(P.ae(b,0,null,"index",null))
for(z=new P.fm(this,this.r,this.$ti),z.c=this.e,y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.e(P.Q(b,this,"index",null,y))},
$isd:1},
iO:{"^":"iQ;"},
kp:{"^":"a+v;"}}],["","",,P,{"^":"",cQ:{"^":"a;$ti"},cf:{"^":"j4;$ti"},hv:{"^":"cQ;",
$ascQ:function(){return[P.i,[P.c,P.D]]}},hI:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hH:{"^":"cf;a",
eN:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.k(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bG("")
if(w>b)v.a+=C.h.aX(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.h1(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$ascf:function(){return[P.i,P.i]}},jE:{"^":"hv;a"},jF:{"^":"cf;",
hk:function(a,b,c){var z,y,x,w
z=a.length
P.ey(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.l3(0,0,x)
if(w.eS(a,b,z)!==z)w.di(C.h.cf(a,z-1),0)
return C.R.bK(x,0,w.b)},
hj:function(a){return this.hk(a,0,null)},
$ascf:function(){return[P.i,[P.c,P.D]]}},l3:{"^":"a;a,b,c",
di:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.k(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.k(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.k(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.k(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.k(z,y)
z[y]=128|a&63
return!1}},
eS:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.cf(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aF(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.di(w,C.h.aF(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.k(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.k(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.k(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.k(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hx:function(a){var z=J.L(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.ba(a)+"'"},
hY:function(a,b,c,d){var z,y
H.E(b,d)
z=J.hN(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.T(z,y,b)
return H.x(z,"$isc",[d],"$asc")},
hZ:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gV(a);x.B();)C.a.h(y,H.E(x.gJ(x),c))
if(b)return y
return H.x(J.bw(y),"$isc",z,"$asc")},
dd:function(a,b,c){var z,y
z=P.D
H.x(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.x(a,"$isb6",[z],"$asb6")
y=a.length
c=P.ey(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ac()
z=c<y}else z=!0
return H.ex(z?C.a.bK(a,b,c):a)}return P.j7(a,b,c)},
j7:function(a,b,c){var z,y,x
H.x(a,"$isd",[P.D],"$asd")
z=J.b2(a)
for(y=0;y<b;++y)if(!z.B())throw H.e(P.ae(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gJ(z))
return H.ex(x)},
iF:function(a,b,c){return new H.hP(a,H.hQ(a,!1,!0,!1))},
fA:function(a,b,c,d){var z,y,x,w,v,u
H.x(a,"$isc",[P.D],"$asc")
if(c===C.p){z=$.$get$fz().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.hj(H.E(b,H.ah(c,"cQ",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.k(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.d7(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ch:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hx(a)},
p:function(a){return new P.fh(a)},
dE:function(a){H.lS(a)},
O:{"^":"a;"},
"+bool":0,
ar:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ar))return!1
return this.a===b.a&&this.b===b.b},
gY:function(a){var z=this.a
return(z^C.f.bh(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hm(H.iz(this))
y=P.bW(H.ix(this))
x=P.bW(H.it(this))
w=P.bW(H.iu(this))
v=P.bW(H.iw(this))
u=P.bW(H.iy(this))
t=P.hn(H.iv(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hm:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hn:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"a0;"},
"+double":0,
bq:{"^":"a;a",
ac:function(a,b){return C.f.ac(this.a,H.h(b,"$isbq").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bq))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hr()
y=this.a
if(y<0)return"-"+new P.bq(0-y).i(0)
x=z.$1(C.f.a1(y,6e7)%60)
w=z.$1(C.f.a1(y,1e6)%60)
v=new P.hq().$1(y%1e6)
return""+C.f.a1(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
e1:function(a,b,c,d,e,f){return new P.bq(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hq:{"^":"q:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hr:{"^":"q:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a1:{"^":"a;"},
es:{"^":"a1;",
i:function(a){return"Throw of null."}},
aw:{"^":"a1;a,b,c,d",
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbR()+y+x
if(!this.a)return w
v=this.gbQ()
u=P.ch(this.b)
return w+v+": "+H.j(u)},
q:{
h3:function(a){return new P.aw(!1,null,null,a)},
ca:function(a,b,c){return new P.aw(!0,a,b,c)},
dI:function(a){return new P.aw(!1,null,a,"Must not be null")}}},
cq:{"^":"aw;e,f,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
ey:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.e(P.ae(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.e(P.ae(b,a,c,"end",f))
return b}return c}}},
hK:{"^":"aw;e,m:f>,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){if(J.fV(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
Q:function(a,b,c,d,e){var z=H.a3(e!=null?e:J.b3(b))
return new P.hK(b,z,!0,a,c,"Index out of range")}}},
jz:{"^":"a1;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ag:function(a){return new P.jz(a)}}},
jw:{"^":"a1;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
f8:function(a){return new P.jw(a)}}},
db:{"^":"a1;a",
i:function(a){return"Bad state: "+this.a},
q:{
eG:function(a){return new P.db(a)}}},
hg:{"^":"a1;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.ch(z))+"."},
q:{
aU:function(a){return new P.hg(a)}}},
io:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa1:1},
eE:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa1:1},
hk:{"^":"a1;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fh:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hD:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.aX(x,0,75)+"..."
return y+"\n"+x}},
bX:{"^":"a;"},
D:{"^":"a0;"},
"+int":0,
d:{"^":"a;$ti",
cH:["ek",function(a,b){var z=H.ah(this,"d",0)
return new H.dm(this,H.l(b,{func:1,ret:P.O,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gV(this)
for(y=0;z.B();)++y
return y},
gaB:function(a){var z,y
z=this.gV(this)
if(!z.B())throw H.e(H.cW())
y=z.gJ(z)
if(z.B())throw H.e(H.hM())
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.dI("index"))
if(b<0)H.r(P.ae(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.B();){x=z.gJ(z)
if(b===y)return x;++y}throw H.e(P.Q(b,this,"index",null,y))},
i:function(a){return P.hL(this,"(",")")}},
cX:{"^":"a;$ti"},
c:{"^":"a;$ti",$isd:1},
"+List":0,
a2:{"^":"a;$ti"},
N:{"^":"a;",
gY:function(a){return P.a.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a0:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gY:function(a){return H.bC(this)},
i:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.i(this)}},
au:{"^":"a;"},
i:{"^":"a;",$iset:1},
"+String":0,
bG:{"^":"a;aG:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
eI:function(a,b,c){var z=J.b2(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gJ(z))
while(z.B())}else{a+=H.j(z.gJ(z))
for(;z.B();)a=a+c+H.j(z.gJ(z))}return a}}}}],["","",,W,{"^":"",
dH:function(a){var z=document.createElement("a")
return z},
cP:function(a,b){var z=document.createElement("canvas")
return z},
hs:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).ah(z,a,b,c)
y.toString
z=W.C
z=new H.dm(new W.ao(y),H.l(new W.ht(),{func:1,ret:P.O,args:[z]}),[z])
return H.h(z.gaB(z),"$isU")},
hu:function(a){H.h(a,"$isa7")
return"wheel"},
br:function(a){var z,y,x
z="element tag unavailable"
try{y=J.h0(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ai(x)}return z},
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fl:function(a,b,c,d){var z,y
z=W.cx(W.cx(W.cx(W.cx(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fG:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.j)return a
return z.dq(a,b)},
ac:{"^":"U;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
m0:{"^":"n;0m:length=","%":"AccessibleNodeList"},
m1:{"^":"ac;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
m2:{"^":"ac;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dK:{"^":"ac;",$isdK:1,"%":"HTMLBaseElement"},
h7:{"^":"n;","%":";Blob"},
cb:{"^":"ac;",$iscb:1,"%":"HTMLBodyElement"},
cO:{"^":"ac;",
bH:function(a,b,c){if(c!=null)return a.getContext(b,P.lt(c,null))
return a.getContext(b)},
eb:function(a,b){return this.bH(a,b,null)},
$iscO:1,
"%":"HTMLCanvasElement"},
dP:{"^":"n;",$isdP:1,"%":"CanvasRenderingContext2D"},
m8:{"^":"C;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ma:{"^":"hj;0m:length=","%":"CSSPerspective"},
bp:{"^":"n;",$isbp:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mb:{"^":"jY;0m:length=",
ec:function(a,b){var z=a.getPropertyValue(this.eI(a,b))
return z==null?"":z},
eI:function(a,b){var z,y
z=$.$get$dU()
y=z[b]
if(typeof y==="string")return y
y=this.fK(a,b)
z[b]=y
return y},
fK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ho()+b
if(z in a)return z
return b},
gcb:function(a){return a.bottom},
gan:function(a){return a.height},
gaR:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hi:{"^":"a;",
gaR:function(a){return this.ec(a,"left")}},
dV:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hj:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mc:{"^":"dV;0m:length=","%":"CSSTransformValue"},
md:{"^":"dV;0m:length=","%":"CSSUnparsedValue"},
me:{"^":"n;0m:length=","%":"DataTransferItemList"},
b4:{"^":"ac;",$isb4:1,"%":"HTMLDivElement"},
mf:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
mg:{"^":"k_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.ab,P.a0]]},
$asv:function(){return[[P.ab,P.a0]]},
$isd:1,
$asd:function(){return[[P.ab,P.a0]]},
$isc:1,
$asc:function(){return[[P.ab,P.a0]]},
$asB:function(){return[[P.ab,P.a0]]},
"%":"ClientRectList|DOMRectList"},
hp:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gao(a))+" x "+H.j(this.gan(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bU(b,"$isab",[P.a0],"$asab")
if(!z)return!1
z=J.bk(b)
return a.left===z.gaR(b)&&a.top===z.gb9(b)&&this.gao(a)===z.gao(b)&&this.gan(a)===z.gan(b)},
gY:function(a){return W.fl(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gcb:function(a){return a.bottom},
gan:function(a){return a.height},
gaR:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gao:function(a){return a.width},
$isab:1,
$asab:function(){return[P.a0]},
"%":";DOMRectReadOnly"},
mh:{"^":"k1;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asv:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
mi:{"^":"n;0m:length=","%":"DOMTokenList"},
jX:{"^":"cn;d5:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.h(z[b],"$isU")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.ia(this)
return new J.aq(z,z.length,0,[H.A(z,0)])},
$asv:function(){return[W.U]},
$asd:function(){return[W.U]},
$asc:function(){return[W.U]}},
U:{"^":"C;0i5:tagName=",
ghf:function(a){return new W.k2(a)},
gds:function(a){return new W.jX(a,a.children)},
gdu:function(a){return P.iC(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a0)},
i:function(a){return a.localName},
ah:["bL",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e4
if(z==null){z=H.b([],[W.aB])
y=new W.eq(z)
C.a.h(z,W.fj(null))
C.a.h(z,W.fu())
$.e4=y
d=y}else d=z
z=$.e3
if(z==null){z=new W.fB(d)
$.e3=z
c=z}else{z.a=d
c=z}}if($.aG==null){z=document
y=z.implementation.createHTMLDocument("")
$.aG=y
$.cT=y.createRange()
y=$.aG
y.toString
y=y.createElement("base")
H.h(y,"$isdK")
y.href=z.baseURI
$.aG.head.appendChild(y)}z=$.aG
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$iscb")}z=$.aG
if(!!this.$iscb)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aG.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.P,a.tagName)){$.cT.selectNodeContents(x)
w=$.cT.createContextualFragment(b)}else{x.innerHTML=b
w=$.aG.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aG.body
if(x==null?z!=null:x!==z)J.dG(x)
c.cM(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ah(a,b,c,null)},"hm",null,null,"giT",5,5,null],
eg:function(a,b,c,d){a.textContent=null
a.appendChild(this.ah(a,b,c,d))},
ef:function(a,b){return this.eg(a,b,null,null)},
$isU:1,
"%":";Element"},
ht:{"^":"q:14;",
$1:function(a){return!!J.L(H.h(a,"$isC")).$isU}},
a6:{"^":"n;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"n;",
dk:["ei",function(a,b,c,d){H.l(c,{func:1,args:[W.a6]})
if(c!=null)this.eF(a,b,c,!1)}],
eF:function(a,b,c,d){return a.addEventListener(b,H.bi(H.l(c,{func:1,args:[W.a6]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fr|fs|fv|fw"},
bt:{"^":"h7;",$isbt:1,"%":"File"},
mj:{"^":"k7;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bt]},
$asv:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asB:function(){return[W.bt]},
"%":"FileList"},
mk:{"^":"a7;0m:length=","%":"FileWriter"},
ml:{"^":"ac;0m:length=","%":"HTMLFormElement"},
bv:{"^":"n;",$isbv:1,"%":"Gamepad"},
mm:{"^":"n;0m:length=","%":"History"},
mn:{"^":"kk;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.C]},
$asv:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asB:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cj:{"^":"n;0dw:data=",$iscj:1,"%":"ImageData"},
e8:{"^":"ac;",$ise8:1,"%":"HTMLImageElement"},
bx:{"^":"di;",$isbx:1,"%":"KeyboardEvent"},
mr:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
ms:{"^":"n;0m:length=","%":"MediaList"},
mt:{"^":"a7;",
dk:function(a,b,c,d){H.l(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.ei(a,b,c,!1)},
"%":"MessagePort"},
mu:{"^":"kq;",
j:function(a,b){return P.aR(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
ga4:function(a){var z=H.b([],[P.i])
this.K(a,new W.ic(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.i,null]},
$isa2:1,
$asa2:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ic:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mv:{"^":"kr;",
j:function(a,b){return P.aR(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
ga4:function(a){var z=H.b([],[P.i])
this.K(a,new W.id(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.i,null]},
$isa2:1,
$asa2:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
id:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
by:{"^":"n;",$isby:1,"%":"MimeType"},
mw:{"^":"kt;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.by]},
$asv:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$isc:1,
$asc:function(){return[W.by]},
$asB:function(){return[W.by]},
"%":"MimeTypeArray"},
as:{"^":"di;",$isas:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ao:{"^":"cn;a",
gaB:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.eG("No elements"))
if(y>1)throw H.e(P.eG("More than one element"))
return z.firstChild},
a3:function(a,b){var z,y,x,w
H.x(b,"$isd",[W.C],"$asd")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gV:function(a){var z=this.a.childNodes
return new W.e6(z,z.length,-1,[H.bV(C.S,z,"B",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$asv:function(){return[W.C]},
$asd:function(){return[W.C]},
$asc:function(){return[W.C]}},
C:{"^":"a7;0cD:previousSibling=",
hY:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.ej(a):z},
$isC:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mD:{"^":"n;",
hV:[function(a){return a.previousNode()},"$0","gcD",1,0,16],
"%":"NodeIterator"},
ij:{"^":"kv;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.C]},
$asv:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asB:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
bA:{"^":"n;0m:length=",$isbA:1,"%":"Plugin"},
mH:{"^":"kz;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bA]},
$asv:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$isc:1,
$asc:function(){return[W.bA]},
$asB:function(){return[W.bA]},
"%":"PluginArray"},
mJ:{"^":"kF;",
j:function(a,b){return P.aR(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
ga4:function(a){var z=H.b([],[P.i])
this.K(a,new W.iL(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.i,null]},
$isa2:1,
$asa2:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iL:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mK:{"^":"ac;0m:length=","%":"HTMLSelectElement"},
bD:{"^":"a7;",$isbD:1,"%":"SourceBuffer"},
mL:{"^":"fs;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bD]},
$asv:function(){return[W.bD]},
$isd:1,
$asd:function(){return[W.bD]},
$isc:1,
$asc:function(){return[W.bD]},
$asB:function(){return[W.bD]},
"%":"SourceBufferList"},
bE:{"^":"n;",$isbE:1,"%":"SpeechGrammar"},
mM:{"^":"kL;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bE]},
$asv:function(){return[W.bE]},
$isd:1,
$asd:function(){return[W.bE]},
$isc:1,
$asc:function(){return[W.bE]},
$asB:function(){return[W.bE]},
"%":"SpeechGrammarList"},
bF:{"^":"n;0m:length=",$isbF:1,"%":"SpeechRecognitionResult"},
mO:{"^":"kO;",
j:function(a,b){return a.getItem(H.J(b))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga4:function(a){var z=H.b([],[P.i])
this.K(a,new W.j3(z))
return z},
gm:function(a){return a.length},
$asa8:function(){return[P.i,P.i]},
$isa2:1,
$asa2:function(){return[P.i,P.i]},
"%":"Storage"},
j3:{"^":"q:33;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bH:{"^":"n;",$isbH:1,"%":"CSSStyleSheet|StyleSheet"},
j8:{"^":"ac;",
ah:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
z=W.hs("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ao(y).a3(0,new W.ao(z))
return y},
"%":"HTMLTableElement"},
mQ:{"^":"ac;",
ah:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.ah(z.createElement("table"),b,c,d)
z.toString
z=new W.ao(z)
x=z.gaB(z)
x.toString
z=new W.ao(x)
w=z.gaB(z)
y.toString
w.toString
new W.ao(y).a3(0,new W.ao(w))
return y},
"%":"HTMLTableRowElement"},
mR:{"^":"ac;",
ah:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.ah(z.createElement("table"),b,c,d)
z.toString
z=new W.ao(z)
x=z.gaB(z)
y.toString
x.toString
new W.ao(y).a3(0,new W.ao(x))
return y},
"%":"HTMLTableSectionElement"},
eK:{"^":"ac;",$iseK:1,"%":"HTMLTemplateElement"},
bI:{"^":"a7;",$isbI:1,"%":"TextTrack"},
bJ:{"^":"a7;",$isbJ:1,"%":"TextTrackCue|VTTCue"},
mT:{"^":"kV;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bJ]},
$asv:function(){return[W.bJ]},
$isd:1,
$asd:function(){return[W.bJ]},
$isc:1,
$asc:function(){return[W.bJ]},
$asB:function(){return[W.bJ]},
"%":"TextTrackCueList"},
mU:{"^":"fw;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bI]},
$asv:function(){return[W.bI]},
$isd:1,
$asd:function(){return[W.bI]},
$isc:1,
$asc:function(){return[W.bI]},
$asB:function(){return[W.bI]},
"%":"TextTrackList"},
mV:{"^":"n;0m:length=","%":"TimeRanges"},
bK:{"^":"n;",$isbK:1,"%":"Touch"},
bc:{"^":"di;",$isbc:1,"%":"TouchEvent"},
mW:{"^":"l0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$isd:1,
$asd:function(){return[W.bK]},
$isc:1,
$asc:function(){return[W.bK]},
$asB:function(){return[W.bK]},
"%":"TouchList"},
mX:{"^":"n;0m:length=","%":"TrackDefaultList"},
mZ:{"^":"n;",
hV:[function(a){return a.previousNode()},"$0","gcD",1,0,16],
"%":"TreeWalker"},
di:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n1:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
n2:{"^":"a7;0m:length=","%":"VideoTrackList"},
bN:{"^":"as;",
ghp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ag("deltaY is not supported"))},
gho:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ag("deltaX is not supported"))},
$isbN:1,
"%":"WheelEvent"},
jP:{"^":"a7;",
ft:function(a,b){return a.requestAnimationFrame(H.bi(H.l(b,{func:1,ret:-1,args:[P.a0]}),1))},
eR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fg:{"^":"C;",$isfg:1,"%":"Attr"},
n7:{"^":"l7;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asB:function(){return[W.bp]},
"%":"CSSRuleList"},
n8:{"^":"hp;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bU(b,"$isab",[P.a0],"$asab")
if(!z)return!1
z=J.bk(b)
return a.left===z.gaR(b)&&a.top===z.gb9(b)&&a.width===z.gao(b)&&a.height===z.gan(b)},
gY:function(a){return W.fl(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
na:{"^":"l9;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bv]},
$asv:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$asB:function(){return[W.bv]},
"%":"GamepadList"},
nd:{"^":"lb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.C]},
$asv:function(){return[W.C]},
$isd:1,
$asd:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asB:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ne:{"^":"ld;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bF]},
$asv:function(){return[W.bF]},
$isd:1,
$asd:function(){return[W.bF]},
$isc:1,
$asc:function(){return[W.bF]},
$asB:function(){return[W.bF]},
"%":"SpeechRecognitionResultList"},
nf:{"^":"lf;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bH]},
$asv:function(){return[W.bH]},
$isd:1,
$asd:function(){return[W.bH]},
$isc:1,
$asc:function(){return[W.bH]},
$asB:function(){return[W.bH]},
"%":"StyleSheetList"},
jV:{"^":"ek;d5:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.ga4(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga4:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.h(z[w],"$isfg")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa8:function(){return[P.i,P.i]},
$asa2:function(){return[P.i,P.i]}},
k2:{"^":"jV;a",
j:function(a,b){return this.a.getAttribute(H.J(b))},
gm:function(a){return this.ga4(this).length}},
k3:{"^":"dc;a,b,c,$ti",
hE:function(a,b,c,d){var z=H.A(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
n9:{"^":"k3;a,b,c,$ti"},
k4:{"^":"eH;a,b,c,d,e,$ti",
fO:function(){var z=this.d
if(z!=null&&this.a<=0)J.fX(this.b,this.c,z,!1)},
q:{
a_:function(a,b,c,d,e){var z=c==null?null:W.fG(new W.k5(c),W.a6)
z=new W.k4(0,a,b,z,!1,[e])
z.fO()
return z}}},
k5:{"^":"q:7;a",
$1:function(a){return this.a.$1(H.h(a,"$isa6"))}},
c5:{"^":"a;a",
ex:function(a){var z,y
z=$.$get$dp()
if(z.a===0){for(y=0;y<262;++y)z.T(0,C.O[y],W.lC())
for(y=0;y<12;++y)z.T(0,C.n[y],W.lD())}},
aM:function(a){return $.$get$fk().R(0,W.br(a))},
au:function(a,b,c){var z,y,x
z=W.br(a)
y=$.$get$dp()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.du(x.$4(a,b,c,this))},
$isaB:1,
q:{
fj:function(a){var z,y
z=W.dH(null)
y=window.location
z=new W.c5(new W.kG(z,y))
z.ex(a)
return z},
nb:[function(a,b,c,d){H.h(a,"$isU")
H.J(b)
H.J(c)
H.h(d,"$isc5")
return!0},"$4","lC",16,0,15],
nc:[function(a,b,c,d){var z,y,x,w,v
H.h(a,"$isU")
H.J(b)
H.J(c)
z=H.h(d,"$isc5").a
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
return z},"$4","lD",16,0,15]}},
B:{"^":"a;$ti",
gV:function(a){return new W.e6(a,this.gm(a),-1,[H.bV(this,a,"B",0)])}},
eq:{"^":"a;a",
aM:function(a){return C.a.dn(this.a,new W.il(a))},
au:function(a,b,c){return C.a.dn(this.a,new W.ik(a,b,c))},
$isaB:1},
il:{"^":"q:19;a",
$1:function(a){return H.h(a,"$isaB").aM(this.a)}},
ik:{"^":"q:19;a,b,c",
$1:function(a){return H.h(a,"$isaB").au(this.a,this.b,this.c)}},
kH:{"^":"a;",
eA:function(a,b,c,d){var z,y,x
this.a.a3(0,c)
z=b.cH(0,new W.kI())
y=b.cH(0,new W.kJ())
this.b.a3(0,z)
x=this.c
x.a3(0,C.Q)
x.a3(0,y)},
aM:function(a){return this.a.R(0,W.br(a))},
au:["en",function(a,b,c){var z,y
z=W.br(a)
y=this.c
if(y.R(0,H.j(z)+"::"+b))return this.d.hd(c)
else if(y.R(0,"*::"+b))return this.d.hd(c)
else{y=this.b
if(y.R(0,H.j(z)+"::"+b))return!0
else if(y.R(0,"*::"+b))return!0
else if(y.R(0,H.j(z)+"::*"))return!0
else if(y.R(0,"*::*"))return!0}return!1}],
$isaB:1},
kI:{"^":"q:20;",
$1:function(a){return!C.a.R(C.n,H.J(a))}},
kJ:{"^":"q:20;",
$1:function(a){return C.a.R(C.n,H.J(a))}},
kS:{"^":"kH;e,a,b,c,d",
au:function(a,b,c){if(this.en(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1},
q:{
fu:function(){var z,y,x,w,v
z=P.i
y=P.ei(C.m,z)
x=H.A(C.m,0)
w=H.l(new W.kT(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kS(y,P.c1(null,null,null,z),P.c1(null,null,null,z),P.c1(null,null,null,z),null)
y.eA(null,new H.i3(C.m,w,[x,z]),v,null)
return y}}},
kT:{"^":"q:39;",
$1:function(a){return"TEMPLATE::"+H.j(H.J(a))}},
kR:{"^":"a;",
aM:function(a){var z=J.L(a)
if(!!z.$iseB)return!1
z=!!z.$isde
if(z&&W.br(a)==="foreignObject")return!1
if(z)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.h.bJ(b,"on"))return!1
return this.aM(a)},
$isaB:1},
e6:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fW(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gJ:function(a){return this.d}},
aB:{"^":"a;"},
kG:{"^":"a;a,b",$isn0:1},
fB:{"^":"a;a",
cM:function(a){new W.l4(this).$2(a,null)},
aZ:function(a,b){if(b==null)J.dG(a)
else b.removeChild(a)},
fB:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fZ(a)
x=y.gd5().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ai(t)}v="element unprintable"
try{v=J.a4(a)}catch(t){H.ai(t)}try{u=W.br(a)
this.fA(H.h(a,"$isU"),b,z,v,u,H.h(y,"$isa2"),H.J(x))}catch(t){if(H.ai(t) instanceof P.aw)throw t
else{this.aZ(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fA:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aZ(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aM(a)){this.aZ(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.aZ(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga4(f)
y=H.b(z.slice(0),[H.A(z,0)])
for(x=f.ga4(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.k(y,x)
w=y[x]
if(!this.a.au(a,J.h2(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$iseK)this.cM(a.content)},
$ismE:1},
l4:{"^":"q:36;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fB(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aZ(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.h_(z)}catch(w){H.ai(w)
v=H.h(z,"$isC")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$isC")}}},
jY:{"^":"n+hi;"},
jZ:{"^":"n+v;"},
k_:{"^":"jZ+B;"},
k0:{"^":"n+v;"},
k1:{"^":"k0+B;"},
k6:{"^":"n+v;"},
k7:{"^":"k6+B;"},
kj:{"^":"n+v;"},
kk:{"^":"kj+B;"},
kq:{"^":"n+a8;"},
kr:{"^":"n+a8;"},
ks:{"^":"n+v;"},
kt:{"^":"ks+B;"},
ku:{"^":"n+v;"},
kv:{"^":"ku+B;"},
ky:{"^":"n+v;"},
kz:{"^":"ky+B;"},
kF:{"^":"n+a8;"},
fr:{"^":"a7+v;"},
fs:{"^":"fr+B;"},
kK:{"^":"n+v;"},
kL:{"^":"kK+B;"},
kO:{"^":"n+a8;"},
kU:{"^":"n+v;"},
kV:{"^":"kU+B;"},
fv:{"^":"a7+v;"},
fw:{"^":"fv+B;"},
l_:{"^":"n+v;"},
l0:{"^":"l_+B;"},
l6:{"^":"n+v;"},
l7:{"^":"l6+B;"},
l8:{"^":"n+v;"},
l9:{"^":"l8+B;"},
la:{"^":"n+v;"},
lb:{"^":"la+B;"},
lc:{"^":"n+v;"},
ld:{"^":"lc+B;"},
le:{"^":"n+v;"},
lf:{"^":"le+B;"}}],["","",,P,{"^":"",
lw:function(a){var z,y
z=J.L(a)
if(!!z.$iscj){y=z.gdw(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fy(a.data,a.height,a.width)},
lv:function(a){if(a instanceof P.fy)return{data:a.a,height:a.b,width:a.c}
return a},
aR:function(a){var z,y,x,w,v
if(a==null)return
z=P.eh(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.J(y[w])
z.T(0,v,a[v])}return z},
lt:function(a,b){var z={}
a.K(0,new P.lu(z))
return z},
e0:function(){var z=$.e_
if(z==null){z=J.cI(window.navigator.userAgent,"Opera",0)
$.e_=z}return z},
ho:function(){var z,y
z=$.dX
if(z!=null)return z
y=$.dY
if(y==null){y=J.cI(window.navigator.userAgent,"Firefox",0)
$.dY=y}if(y)z="-moz-"
else{y=$.dZ
if(y==null){y=!P.e0()&&J.cI(window.navigator.userAgent,"Trident/",0)
$.dZ=y}if(y)z="-ms-"
else z=P.e0()?"-o-":"-webkit-"}$.dX=z
return z},
fy:{"^":"a;dw:a>,b,c",$iscj:1},
lu:{"^":"q:12;a",
$2:function(a,b){this.a[a]=b}},
hA:{"^":"cn;a,b",
gbW:function(){var z,y,x
z=this.b
y=H.ah(z,"v",0)
x=W.U
return new H.i1(new H.dm(z,H.l(new P.hB(),{func:1,ret:P.O,args:[y]}),[y]),H.l(new P.hC(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.b3(this.gbW().a)},
j:function(a,b){var z=this.gbW()
return z.b.$1(J.cJ(z.a,b))},
gV:function(a){var z=P.hZ(this.gbW(),!1,W.U)
return new J.aq(z,z.length,0,[H.A(z,0)])},
$asv:function(){return[W.U]},
$asd:function(){return[W.U]},
$asc:function(){return[W.U]}},
hB:{"^":"q:14;",
$1:function(a){return!!J.L(H.h(a,"$isC")).$isU}},
hC:{"^":"q:34;",
$1:function(a){return H.f(H.h(a,"$isC"),"$isU")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kA:{"^":"a;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.E(z+this.c,H.A(this,0))},
gcb:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.E(z+this.d,H.A(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bU(b,"$isab",[P.a0],"$asab")
if(!z)return!1
z=this.a
y=J.bk(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.A(this,0)
if(H.E(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.E()
z=H.E(x+this.d,w)===y.gcb(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.b1(z)
x=this.b
w=J.b1(x)
if(typeof z!=="number")return z.E()
v=H.A(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.E(x+this.d,v)
return P.kl(P.cy(P.cy(P.cy(P.cy(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ab:{"^":"kA;aR:a>,b9:b>,ao:c>,an:d>,$ti",q:{
iC:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ac()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.ac()
if(d<0)y=-d*0
else y=d
return new P.ab(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",c0:{"^":"n;",$isc0:1,"%":"SVGLength"},mq:{"^":"kn;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asv:function(){return[P.c0]},
$isd:1,
$asd:function(){return[P.c0]},
$isc:1,
$asc:function(){return[P.c0]},
$asB:function(){return[P.c0]},
"%":"SVGLengthList"},c2:{"^":"n;",$isc2:1,"%":"SVGNumber"},mF:{"^":"kx;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asv:function(){return[P.c2]},
$isd:1,
$asd:function(){return[P.c2]},
$isc:1,
$asc:function(){return[P.c2]},
$asB:function(){return[P.c2]},
"%":"SVGNumberList"},mI:{"^":"n;0m:length=","%":"SVGPointList"},eB:{"^":"de;",$iseB:1,"%":"SVGScriptElement"},mP:{"^":"kQ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asv:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},de:{"^":"U;",
gds:function(a){return new P.hA(a,new W.ao(a))},
ah:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.aB])
C.a.h(z,W.fj(null))
C.a.h(z,W.fu())
C.a.h(z,new W.kR())
c=new W.fB(new W.eq(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).hm(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ao(w)
u=z.gaB(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isde:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},c4:{"^":"n;",$isc4:1,"%":"SVGTransform"},mY:{"^":"l2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$asv:function(){return[P.c4]},
$isd:1,
$asd:function(){return[P.c4]},
$isc:1,
$asc:function(){return[P.c4]},
$asB:function(){return[P.c4]},
"%":"SVGTransformList"},km:{"^":"n+v;"},kn:{"^":"km+B;"},kw:{"^":"n+v;"},kx:{"^":"kw+B;"},kP:{"^":"n+v;"},kQ:{"^":"kP+B;"},l1:{"^":"n+v;"},l2:{"^":"l1+B;"}}],["","",,P,{"^":"",m3:{"^":"n;0m:length=","%":"AudioBuffer"},m4:{"^":"jW;",
j:function(a,b){return P.aR(a.get(H.J(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
ga4:function(a){var z=H.b([],[P.i])
this.K(a,new P.h5(z))
return z},
gm:function(a){return a.size},
$asa8:function(){return[P.i,null]},
$isa2:1,
$asa2:function(){return[P.i,null]},
"%":"AudioParamMap"},h5:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},m5:{"^":"a7;0m:length=","%":"AudioTrackList"},h6:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mG:{"^":"h6;0m:length=","%":"OfflineAudioContext"},jW:{"^":"n+a8;"}}],["","",,P,{"^":"",d8:{"^":"n;",
i7:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscj)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lv(g))
return}if(!!z.$ise8)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.h3("Incorrect number or type of arguments"))},
i6:function(a,b,c,d,e,f,g){return this.i7(a,b,c,d,e,f,g,null,null,null)},
$isd8:1,
"%":"WebGLRenderingContext"},j9:{"^":"n;",$isj9:1,"%":"WebGLTexture"},ju:{"^":"n;",$isju:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mN:{"^":"kN;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Q(b,a,null,null,null))
return P.aR(a.item(b))},
D:function(a,b){return this.j(a,b)},
$asv:function(){return[[P.a2,,,]]},
$isd:1,
$asd:function(){return[[P.a2,,,]]},
$isc:1,
$asc:function(){return[[P.a2,,,]]},
$asB:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},kM:{"^":"n+v;"},kN:{"^":"kM+B;"}}],["","",,O,{"^":"",ak:{"^":"a;0a,0b,0c,0d,$ti",
be:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cN:function(a,b,c){var z=H.ah(this,"ak",0)
H.l(b,{func:1,ret:P.O,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.D,[P.d,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aW:function(a,b){return this.cN(a,null,b)},
d9:function(a){var z
H.x(a,"$isd",[H.ah(this,"ak",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cT:function(a,b){var z
H.x(b,"$isd",[H.ah(this,"ak",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.A(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ah(this,"ak",0)
H.E(b,z)
z=[z]
if(this.d9(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cT(x,H.b([b],z))}},
a3:function(a,b){var z,y
H.x(b,"$isd",[H.ah(this,"ak",0)],"$asd")
if(this.d9(b)){z=this.a
y=z.length
C.a.a3(z,b)
this.cT(y,b)}},
$isd:1,
q:{
cR:function(a){var z=new O.ak([a])
z.be(a)
return z}}},d3:{"^":"a;0a,0b",
gm:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
eu:function(a){var z=this.b
if(!(z==null))z.v(a)},
aC:function(){return this.eu(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gbB(z)
else return V.b9()},
bE:function(a){var z=this.a
if(a==null)C.a.h(z,V.b9())
else C.a.h(z,a)
this.aC()},
ax:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cK:{"^":"a;"},aH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbI:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().N(0,this.ge1())
y=this.c
if(y!=null)y.gt().h(0,this.ge1())
x=new D.H("shape",z,this.c,this,[F.eC])
x.b=!0
this.aT(x)}},
ak:function(a,b){var z
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.A(z,0)]);z.B();)z.d.ak(0,b)},
a7:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gX(z))
z.aC()
a.cE(this.f)
z=a.dy
y=(z&&C.a).gbB(z)
if(y!=null&&this.d!=null)y.e3(a,this)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.A(z,0)]);z.B();)z.d.a7(a)
a.cC()
a.dx.ax()},
gt:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
aT:function(a){var z=this.z
if(!(z==null))z.v(a)},
a2:function(){return this.aT(null)},
hM:[function(a){H.h(a,"$isw")
this.e=null
this.aT(a)},function(){return this.hM(null)},"iZ","$1","$0","ge1",0,2,0],
hK:[function(a){this.aT(H.h(a,"$isw"))},function(){return this.hK(null)},"iX","$1","$0","ge0",0,2,0],
iW:[function(a,b){var z,y,x,w,v,u,t,s
H.x(b,"$isd",[E.aH],"$asd")
for(z=b.length,y=this.ge0(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.d=0
u.sa0(t)}t=u.ga0()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a2()},"$2","ghJ",8,0,8],
iY:[function(a,b){var z,y,x,w,v
H.x(b,"$isd",[E.aH],"$asd")
for(z=b.length,y=this.ge0(),x=0;x<b.length;b.length===z||(0,H.y)(b),++x){w=b[x]
if(w!=null){if(w.ga0()==null){v=new D.b5()
v.d=0
w.sa0(v)}w.ga0().N(0,y)}}this.a2()},"$2","ghL",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaA:1,
q:{
e5:function(a,b,c,d,e,f){var z,y
z=new E.aH()
z.a=d
z.b=!0
y=O.cR(E.aH)
z.y=y
y.aW(z.ghJ(),z.ghL())
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
z.sbI(0,e)
return z}}},iG:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eq:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ar(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d3()
y=[V.aJ]
z.a=H.b([],y)
z.gt().h(0,new E.iI(this))
this.cy=z
z=new O.d3()
z.a=H.b([],y)
z.gt().h(0,new E.iJ(this))
this.db=z
z=new O.d3()
z.a=H.b([],y)
z.gt().h(0,new E.iK(this))
this.dx=z
z=H.b([],[O.c3])
this.dy=z
C.a.h(z,null)
this.fr=new H.b7(0,0,[P.i,A.d9])},
ghW:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.n(0,y.gX(y))
this.z=y
z=y}return z},
cE:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbB(z):a;(z&&C.a).h(z,y)},
cC:function(){var z=this.dy
if(z.length>1)z.pop()},
dm:function(a){var z=a.b
if(z.length===0)throw H.e(P.p("May not cache a shader with no name."))
if(this.fr.dv(0,z))throw H.e(P.p('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.T(0,z,a)},
q:{
iH:function(a,b){var z=new E.iG(a,b)
z.eq(a,b)
return z}}},iI:{"^":"q:9;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.z=null
z.ch=null}},iJ:{"^":"q:9;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iK:{"^":"q:9;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},jf:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
ew:[function(a){var z
H.h(a,"$isw")
z=this.x
if(!(z==null))z.v(a)
this.i0()},function(){return this.ew(null)},"ev","$1","$0","gcU",0,2,0],
ghw:function(){var z,y,x
z=Date.now()
y=C.f.a1(P.e1(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ar(z,!1)
return x/y},
dd:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.o(z)
x=C.i.cr(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.i.cr(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eM(C.l,this.gi_())}},
i0:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jh(this),{func:1,ret:-1,args:[P.a0]})
C.y.eR(z)
C.y.ft(z,W.fG(y,P.a0))}},"$0","gi_",0,0,3],
hZ:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dd()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ar(w,!1)
x.y=P.e1(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aC()
w=x.db
C.a.sm(w.a,0)
w.aC()
w=x.dx
C.a.sm(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a7(this.e)}x=this.z
if(!(x==null))x.v(null)}catch(v){z=H.ai(v)
y=H.bl(v)
P.dE("Error: "+H.j(z))
P.dE("Stack: "+H.j(y))
throw H.e(z)}},
q:{
jg:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscO)return E.eL(a,!0,!0,!0,!1)
y=W.cP(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gds(a).h(0,y)
w=E.eL(y,!0,!0,!0,!1)
w.a=a
return w},
eL:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jf()
y=P.hX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.k.bH(a,"webgl",y)
x=H.h(x==null?C.k.bH(a,"experimental-webgl",y):x,"$isd8")
if(x==null)H.r(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iH(x,a)
w=new T.ja(x)
w.b=H.a3(x.getParameter(3379))
w.c=H.a3(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jA(a)
v=new X.hS()
v.c=new X.az(!1,!1,!1)
v.d=P.c1(null,null,null,P.D)
w.b=v
v=new X.ie(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i_(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jk(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.eH,P.a]])
w.z=v
u=document
t=W.as
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.l(w.gf6(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.l(w.gf9(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.l(w.gf3(),q),!1,r))
v=w.z
p=W.bx
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.l(w.gfb(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.l(w.gfa(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.l(w.gfe(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.l(w.gfg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.l(w.gff(),s),!1,t))
p=w.z
o=W.bN;(p&&C.a).h(p,W.a_(a,H.J(W.hu(a)),H.l(w.gfh(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.l(w.gf7(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.l(w.gf8(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.l(w.gfi(),q),!1,r))
r=w.z
q=W.bc
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.l(w.gfq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.l(w.gfo(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.l(w.gfp(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ar(Date.now(),!1)
z.cy=0
z.dd()
return z}}},jh:{"^":"q:32;a",
$1:function(a){var z
H.lR(a)
z=this.a
if(z.ch){z.ch=!1
z.hZ()}}}}],["","",,Z,{"^":"",fd:{"^":"a;a,b",q:{
dl:function(a,b,c){var z
H.x(c,"$isc",[P.D],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bQ(c)),35044)
a.bindBuffer(b,null)
return new Z.fd(b,z)}}},dN:{"^":"cK;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ai(y)
x=P.p('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.j(z))
throw H.e(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},fe:{"^":"a;a",$ism6:1},cN:{"^":"a;a,0b,c,d",
aw:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
aA:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a7:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$ismS:1},ck:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ba(this.c)+"'")+"]"}},bd:{"^":"a;a",
gcP:function(a){var z,y
z=this.a
y=(z&$.$get$av().a)!==0?3:0
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=2
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=4
if((z&$.$get$be().a)!==0)++y
return(z&$.$get$aL().a)!==0?y+4:y},
he:function(a){var z,y,x
z=$.$get$av()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fc()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.i])
y=this.a
if((y&$.$get$av().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aP().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$be().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
q:{
an:function(a){return new Z.bd(a)}}}}],["","",,D,{"^":"",dQ:{"^":"a;"},b5:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.w]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.R(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).N(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.R(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).N(z,b)||y}return y},
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.hy(z))
y=this.b
if(!(y==null))C.a.K(y,new D.hz(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
hq:function(){return this.v(null)},
i1:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.v(y)}}},
az:function(a){return this.i1(a,!0,!1)},
q:{
G:function(){var z=new D.b5()
z.d=0
return z}}},hy:{"^":"q:27;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},hz:{"^":"q:27;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},bY:{"^":"w;c,d,a,0b,$ti"},bZ:{"^":"w;c,d,a,0b,$ti"},H:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dO:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"m7<"}},ed:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ed))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},ee:{"^":"w;c,a,0b"},hS:{"^":"a;0a,0b,0c,0d",
hS:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ee(a,this)
y.b=!0
return z.v(y)},
hO:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ee(a,this)
y.b=!0
return z.v(y)}},ej:{"^":"cp;x,y,c,d,e,a,0b"},i_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
as:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ar(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.n()
v=b.b
u=this.ch
if(typeof v!=="number")return v.n()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gaN()
s=new X.bz(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cB:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.as(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ee()
if(typeof z!=="number")return z.e8()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.as(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.as(a,b))
return!0},
hT:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.n()
t=a.b
s=this.cy
if(typeof t!=="number")return t.n()
w=new X.d4(new V.V(v*u,t*s),y,x,new P.ar(w,!1),this)
w.b=!0
z.v(w)
return!0},
fd:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ar(Date.now(),!1)
y=this.f
x=new X.ej(c,a,this.a.gaN(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.T(0,0)}},az:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.az))return!1
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
return z+(this.c?"Shift+":"")}},bz:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},ie:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bT:function(a,b,c){var z,y,x
z=new P.ar(Date.now(),!1)
y=this.a.gaN()
x=new X.bz(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cB:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bT(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ee()
if(typeof z!=="number")return z.e8()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bT(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bT(a,b,!1))
return!0},
hU:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.n()
u=a.b
t=this.ch
if(typeof u!=="number")return u.n()
x=new X.d4(new V.V(w*v,u*t),y,b,new P.ar(x,!1),this)
x.b=!0
z.v(x)
return!0},
gdA:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbG:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
ge_:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},d4:{"^":"cp;x,c,d,e,a,0b"},cp:{"^":"w;"},eQ:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},jk:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
as:function(a,b){var z,y,x,w
H.x(a,"$isc",[V.T],"$asc")
z=new P.ar(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaN()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hR:function(a){var z
H.x(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.v(this.as(a,!0))
return!0},
hP:function(a){var z
H.x(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.v(this.as(a,!0))
return!0},
hQ:function(a){var z
H.x(a,"$isc",[V.T],"$asc")
z=this.d
if(z==null)return!1
z.v(this.as(a,!1))
return!0}},jA:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaN:function(){var z=this.a
return V.eA(0,0,(z&&C.k).gdu(z).c,C.k.gdu(z).d)},
d3:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ed(z,new X.az(y,a.altKey,a.shiftKey))},
aL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
c6:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.T(y-w,x-v)},
aY:function(a){return new V.V(a.movementX,a.movementY)},
c2:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.i.aj(u.pageX)
C.i.aj(u.pageY)
s=z.left
C.i.aj(u.pageX)
C.a.h(y,new V.T(t-s,C.i.aj(u.pageY)-z.top))}return y},
aq:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dO(z,new X.az(y,a.altKey,a.shiftKey))},
bX:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
ix:[function(a){this.f=!0},"$1","gf9",4,0,7],
ir:[function(a){this.f=!1},"$1","gf3",4,0,7],
iu:[function(a){H.h(a,"$isas")
if(this.f&&this.bX(a))a.preventDefault()},"$1","gf6",4,0,4],
iz:[function(a){var z
H.h(a,"$isbx")
if(!this.f)return
z=this.d3(a)
if(this.b.hS(z))a.preventDefault()},"$1","gfb",4,0,28],
iy:[function(a){var z
H.h(a,"$isbx")
if(!this.f)return
z=this.d3(a)
if(this.b.hO(z))a.preventDefault()},"$1","gfa",4,0,28],
iB:[function(a){var z,y,x,w
H.h(a,"$isas")
z=this.a
z.focus()
this.f=!0
this.aL(a)
if(this.x){y=this.aq(a)
x=this.aY(a)
if(this.d.cB(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aq(a)
w=this.at(a)
if(this.c.cB(y,w))a.preventDefault()},"$1","gfe",4,0,4],
iD:[function(a){var z,y,x
H.h(a,"$isas")
this.aL(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gfg",4,0,4],
iw:[function(a){var z,y,x
H.h(a,"$isas")
if(!this.bX(a)){this.aL(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b3(z,x))a.preventDefault()}},"$1","gf8",4,0,4],
iC:[function(a){var z,y,x
H.h(a,"$isas")
this.aL(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gff",4,0,4],
iv:[function(a){var z,y,x
H.h(a,"$isas")
if(!this.bX(a)){this.aL(a)
z=this.aq(a)
if(this.x){y=this.aY(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gf7",4,0,4],
iE:[function(a){var z,y
H.h(a,"$isbN")
this.aL(a)
z=new V.V((a&&C.x).gho(a),C.x.ghp(a)).w(0,180)
if(this.x){if(this.d.hT(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.hU(z,y))a.preventDefault()},"$1","gfh",4,0,38],
iF:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aq(this.y)
v=this.at(this.y)
this.d.fd(w,v,x)}},"$1","gfi",4,0,7],
iN:[function(a){var z
H.h(a,"$isbc")
this.a.focus()
this.f=!0
this.c6(a)
z=this.c2(a)
if(this.e.hR(z))a.preventDefault()},"$1","gfq",4,0,11],
iL:[function(a){var z
H.h(a,"$isbc")
this.c6(a)
z=this.c2(a)
if(this.e.hP(z))a.preventDefault()},"$1","gfo",4,0,11],
iM:[function(a){var z
H.h(a,"$isbc")
this.c6(a)
z=this.c2(a)
if(this.e.hQ(z))a.preventDefault()},"$1","gfp",4,0,11]}}],["","",,D,{"^":"",cg:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
aD:[function(a){var z
H.h(a,"$isw")
z=this.d
if(!(z==null))z.v(a)},function(){return this.aD(null)},"ie","$1","$0","gez",0,2,0],
$isZ:1,
$isaA:1},Z:{"^":"a;",$isaA:1},hT:{"^":"ak;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.v(a)},
fc:[function(a){var z
H.h(a,"$isw")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.fc(null)},"iA","$1","$0","gd8",0,2,0],
iG:[function(a){var z,y,x
H.x(a,"$isd",[D.Z],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.ey(x))return!1}return!0},"$1","gfj",4,0,31],
io:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.Z
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gd8(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.h(b[u],"$isZ")
if(t instanceof D.cg)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf0",8,0,26],
iI:[function(a,b){var z,y,x,w,v,u
z=D.Z
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gd8(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.h(b[w],"$isZ")
if(v instanceof D.cg)C.a.N(this.e,v)
u=v.d
if(u==null){u=new D.b5()
u.d=0
v.d=u}u.N(0,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfl",8,0,26],
ey:function(a){var z=C.a.R(this.e,a)
return z},
$asd:function(){return[D.Z]},
$asak:function(){return[D.Z]}},is:{"^":"a;",$isZ:1,$isaA:1},j1:{"^":"a;",$isZ:1,$isaA:1},jc:{"^":"a;",$isZ:1,$isaA:1},jd:{"^":"a;",$isZ:1,$isaA:1},je:{"^":"a;",$isZ:1,$isaA:1}}],["","",,V,{"^":"",
m9:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","ib",8,0,29],
m_:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.ed(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.h.ab("null",c)
return C.h.ab(C.i.e6($.m.$2(a,0)?0:a,b),c+b+1)},
bj:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isc",[P.z],"$asc")
z=H.b([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.T(z,u,C.h.ab(z[u],x))}return z},
dD:function(a,b){return C.i.i9(Math.pow(b,C.F.cr(Math.log(H.ls(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
u:function(a,b){var z
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
aT:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
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
eo:{"^":"a;a,b,c,d,e,f,r,x,y",
a8:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eo))return!1
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
z=[P.z]
y=V.bj(H.b([this.a,this.d,this.r],z),3,0)
x=V.bj(H.b([this.b,this.e,this.x],z),3,0)
w=V.bj(H.b([this.c,this.f,this.y],z),3,0)
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
aJ:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a8:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
ct:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.n()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.n()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.n()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.n()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.n()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.b9()
a3=1/a2
a4=-w
a5=-i
return V.ay((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.n()
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
if(typeof f!=="number")return f.n()
e=this.f
if(typeof e!=="number")return e.n()
d=this.r
if(typeof d!=="number")return d.n()
c=this.x
if(typeof c!=="number")return c.n()
b=this.y
if(typeof b!=="number")return b.n()
a=this.z
if(typeof a!=="number")return a.n()
a0=this.Q
if(typeof a0!=="number")return a0.n()
a1=this.ch
if(typeof a1!=="number")return a1.n()
a2=this.cx
if(typeof a2!=="number")return a2.n()
a3=this.cy
if(typeof a3!=="number")return a3.n()
a4=this.db
if(typeof a4!=="number")return a4.n()
a5=this.dx
if(typeof a5!=="number")return a5.n()
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
v=this.c
u=a.c
if(typeof v!=="number")return v.n()
t=this.e
if(typeof t!=="number")return t.n()
s=this.f
if(typeof s!=="number")return s.n()
r=this.r
if(typeof r!=="number")return r.n()
q=this.y
if(typeof q!=="number")return q.n()
p=this.z
if(typeof p!=="number")return p.n()
o=this.Q
if(typeof o!=="number")return o.n()
return new V.K(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
v=this.c
u=a.c
if(typeof v!=="number")return v.n()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.n()
r=this.f
if(typeof r!=="number")return r.n()
q=this.r
if(typeof q!=="number")return q.n()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.n()
n=this.z
if(typeof n!=="number")return n.n()
m=this.Q
if(typeof m!=="number")return m.n()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.ad(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
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
i:function(a){return this.H()},
dW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bj(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bj(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bj(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bj(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
H:function(){return this.dW("",3,0)},
A:function(a){return this.dW(a,3,0)},
q:{
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b9:function(){return V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ep:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.C(c)))
y=b.b1(z)
x=y.w(0,Math.sqrt(y.C(y)))
w=z.b1(x)
v=new V.K(a.a,a.b,a.c)
return V.ay(x.a,w.a,z.a,x.L(0).C(v),x.b,w.b,z.b,w.L(0).C(v),x.c,w.c,z.c,z.L(0).C(v),0,0,0,1)}}},
T:{"^":"a;a,b",
G:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
ad:{"^":"a;a,b,c",
G:function(a,b){return new V.ad(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bB:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bB))return!1
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
ez:{"^":"a;a,b,c,d",
ga6:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ez))return!1
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
eA:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ez(a,b,c,d)}}},
V:{"^":"a;a,b",
hC:[function(a){return Math.sqrt(this.C(this))},"$0","gm",1,0,24],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.V(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0))return new V.V(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.V(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
K:{"^":"a;a,b,c",
hC:[function(a){return Math.sqrt(this.C(this))},"$0","gm",1,0,24],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b1:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.K(-this.a,-this.b,-this.c)},
w:function(a,b){if($.m.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
dY:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",he:{"^":"dQ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bN:function(a){var z=V.m_(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.v(a)},
scI:function(a,b){},
scw:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bN(z)}z=new D.H("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.M(z)}},
scA:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bN(z)}z=new D.H("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.M(z)}},
sa5:function(a,b){var z,y
b=this.bN(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.z])
z.b=!0
this.M(z)}},
scz:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.M(z)}},
sO:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.z])
z.b=!0
this.M(z)}},
sci:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.z])
z.b=!0
this.M(z)}},
ak:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa5(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sO(y)}},
q:{
cS:function(){var z=new U.he()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dS:{"^":"a9;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aV:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dS))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
q:{
dT:function(a){var z=new U.dS()
z.a=a
return z}}},e7:{"^":"ak;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
M:[function(a){var z
H.h(a,"$isw")
z=this.e
if(!(z==null))z.v(a)},function(){return this.M(null)},"ae","$1","$0","gaE",0,2,0],
im:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a9
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gf_",8,0,23],
iH:[function(a,b){var z,y,x,w,v
z=U.a9
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaE(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gt().N(0,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gfk",8,0,23],
aV:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aq(z,z.length,0,[H.A(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aV(0,b,c)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.b9():x
z=this.e
if(!(z==null))z.az(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e7))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.X(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a9]},
$asak:function(){return[U.a9]},
$isa9:1},a9:{"^":"dQ;"},jB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
M:[function(a){var z
H.h(a,"$isw")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.M(null)},"ae","$1","$0","gaE",0,2,0],
b_:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdA().h(0,this.gbY())
this.a.c.ge_().h(0,this.gbZ())
this.a.c.gbG().h(0,this.gc_())
return!0},
eW:[function(a){H.h(a,"$isw")
if(!J.X(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbY",4,0,1],
eX:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isw"),"$isbz")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.V(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.V(y.a,y.b).n(0,2).w(0,z.ga6())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.n()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sO(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.V(x.a,x.b).n(0,2).w(0,z.ga6())
x=this.b
v=w.a
if(typeof v!=="number")return v.L()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa5(0,-v*u+t)
this.b.sO(0)
y=y.G(0,a.z)
this.Q=new V.V(y.a,y.b).n(0,2).w(0,z.ga6())}this.ae()},"$1","gbZ",4,0,1],
eY:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.n()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sO(y*10*x)
this.ae()}},"$1","gc_",4,0,1],
aV:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.ch=y
x=b.y
this.b.ak(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ay(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa9:1},jC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
M:[function(a){var z
H.h(a,"$isw")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.M(null)},"ae","$1","$0","gaE",0,2,0],
b_:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdA().h(0,this.gbY())
this.a.c.ge_().h(0,this.gbZ())
this.a.c.gbG().h(0,this.gc_())
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
z.h(0,this.gfN())
z=this.a.e
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.gfM())
z=this.a.e
y=z.c
if(y==null){y=D.G()
z.c=y
z=y}else z=y
z.h(0,this.gfL())
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.V(z,y)},
eW:[function(a){a=H.f(H.h(a,"$isw"),"$isbz")
if(!J.X(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbY",4,0,1],
eX:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isw"),"$isbz")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.V(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.al(new V.V(y.a,y.b).n(0,2).w(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.al(new V.V(x.a,x.b).n(0,2).w(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa5(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.al(new V.V(y.a,y.b).n(0,2).w(0,z.ga6()))}this.ae()},"$1","gbZ",4,0,1],
eY:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sO(-y*10*z)
this.ae()}},"$1","gc_",4,0,1],
ij:[function(a){if(H.f(H.h(a,"$isw"),"$isej").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geT",4,0,1],
ik:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isw"),"$isbz")
if(!J.X(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.al(new V.V(x.a,x.b).n(0,2).w(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa5(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.al(new V.V(y.a,y.b).n(0,2).w(0,z.ga6()))
this.ae()},"$1","geU",4,0,1],
iR:[function(a){H.h(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfN",4,0,1],
iQ:[function(a){var z,y,x,w,v,u,t
a=H.f(H.h(a,"$isw"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.V(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.al(new V.V(y.a,y.b).n(0,2).w(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.al(new V.V(x.a,x.b).n(0,2).w(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa5(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.al(new V.V(y.a,y.b).n(0,2).w(0,z.ga6()))}this.ae()},"$1","gfM",4,0,1],
iP:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sO(-y*10*z)
this.ae()}},"$1","gfL",4,0,1],
aV:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.dy=y
x=b.y
this.c.ak(0,x)
this.b.ak(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ay(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.n(0,V.ay(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa9:1},jD:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.v(a)},
b_:function(a){var z,y,x
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
il:[function(a){var z,y,x,w
H.h(a,"$isw")
if(!J.X(this.b,this.a.b.c))return
H.f(a,"$isd4")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.n()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.z])
z.b=!0
this.M(z)}},"$1","geZ",4,0,1],
aV:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ay(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa9:1}}],["","",,M,{"^":"",hf:{"^":"ak;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
Z:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.v(a)},function(){return this.Z(null)},"cV","$1","$0","gU",0,2,0],
iJ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aC
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gfm",8,0,22],
iK:[function(a,b){var z,y,x,w,v
z=M.aC
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gt().N(0,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gfn",8,0,22],
a7:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aq(z,z.length,0,[H.A(z,0)]);z.B();){y=z.d
if(!(y==null))y.a7(a)}this.e=!1},
$asd:function(){return[M.aC]},
$asak:function(){return[M.aC]},
$isaC:1},hh:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
Z:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.v(a)},function(){return this.Z(null)},"cV","$1","$0","gU",0,2,0],
sb0:function(a){var z,y
if(a==null)a=new X.hJ()
z=this.a
if(z!==a){if(z!=null)z.gt().N(0,this.gU())
y=this.a
this.a=a
a.gt().h(0,this.gU())
z=new D.H("camera",y,this.a,this,[X.cd])
z.b=!0
this.Z(z)}},
sb6:function(a,b){var z,y
if(b==null)b=X.cU(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().N(0,this.gU())
y=this.b
this.b=b
b.gt().h(0,this.gU())
z=new D.H("target",y,this.b,this,[X.df])
z.b=!0
this.Z(z)}},
sb7:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().N(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.gU())
z=new D.H("technique",y,this.c,this,[O.c3])
z.b=!0
this.Z(z)}},
a7:function(a){a.cE(this.c)
this.b.W(a)
this.a.W(a)
this.d.ak(0,a)
this.d.a7(a)
this.a.aA(a)
this.b.toString
a.cC()},
$isaC:1},hw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Z:[function(a){var z
H.h(a,"$isw")
z=this.x
if(!(z==null))z.v(a)},function(){return this.Z(null)},"cV","$1","$0","gU",0,2,0],
is:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aH
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.d=0
t.sa0(s)}s=t.ga0()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gf4",8,0,8],
it:[function(a,b){var z,y,x,w,v,u
z=E.aH
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gU(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null){if(v.ga0()==null){u=new D.b5()
u.d=0
v.sa0(u)}v.ga0().N(0,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gf5",8,0,8],
sb0:function(a){var z,y
if(a==null)a=X.eu(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().N(0,this.gU())
y=this.a
this.a=a
a.gt().h(0,this.gU())
z=new D.H("camera",y,this.a,this,[X.cd])
z.b=!0
this.Z(z)}},
sb6:function(a,b){var z,y
if(b==null)b=X.cU(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().N(0,this.gU())
y=this.b
this.b=b
b.gt().h(0,this.gU())
z=new D.H("target",y,this.b,this,[X.df])
z.b=!0
this.Z(z)}},
sb7:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().N(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.gU())
z=new D.H("technique",y,this.c,this,[O.c3])
z.b=!0
this.Z(z)}},
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
a7:function(a){var z
a.cE(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.ak(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.A(z,0)]);z.B();)z.d.ak(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.A(z,0)]);z.B();)z.d.a7(a)
this.a.toString
a.cy.ax()
a.db.ax()
this.b.toString
a.cC()},
$isaC:1},aC:{"^":"a;"}}],["","",,A,{"^":"",dJ:{"^":"a;a,b,c"},h4:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hr:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dz:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},en:{"^":"d9;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0am,0ai,0bm,0dB,0bn,0bo,0dC,0dD,0bp,0bq,0dE,0dF,0br,0bs,0dG,0dH,0bt,0dI,0dJ,0bu,0dK,0dL,0bv,0bw,0bx,0dM,0dN,0by,0bz,0dO,0dP,0bA,0dQ,0cl,0dR,0cm,0dS,0cn,0dT,0co,0dU,0cp,0dV,0cq,a,b,0c,0d,0e,0f,0r,0x,0y",
ep:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bG("")
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
a1.fQ(z)
a1.fX(z)
a1.fR(z)
a1.h4(z)
a1.h5(z)
a1.fZ(z)
a1.h9(z)
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
z=new P.bG("")
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
v.fU(z)
v.fP(z)
v.fS(z)
v.fV(z)
v.h2(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h0(z)
v.h1(z)}v.fY(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.c){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.i])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fT(z)
v.h_(z)
v.h3(z)
v.h6(z)
v.h7(z)
v.h8(z)
v.fW(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.i])
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
n="vec4("+C.a.l(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dX(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.f(this.y.p(0,"invViewMat"),"$isaF")
if(y)this.dy=H.f(this.y.p(0,"objMat"),"$isaF")
if(w)this.fr=H.f(this.y.p(0,"viewObjMat"),"$isaF")
this.fy=H.f(this.y.p(0,"projViewObjMat"),"$isaF")
if(a1.x2)this.k1=H.f(this.y.p(0,"txt2DMat"),"$isdk")
if(a1.y1)this.k2=H.f(this.y.p(0,"txtCubeMat"),"$isaF")
if(a1.y2)this.k3=H.f(this.y.p(0,"colorMat"),"$isaF")
this.r1=H.b([],[A.aF])
y=a1.am
if(y>0){this.k4=H.h(this.y.p(0,"bendMatCount"),"$isM")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isaF"))}}y=a1.a
if(y!==C.b){this.r2=H.f(this.y.p(0,"emissionClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.rx=H.f(this.y.p(0,"emissionTxt"),"$isam")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isM")
break
case C.c:this.ry=H.f(this.y.p(0,"emissionTxt"),"$isaf")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$isM")
break}}y=a1.b
if(y!==C.b){this.x2=H.f(this.y.p(0,"ambientClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.y1=H.f(this.y.p(0,"ambientTxt"),"$isam")
this.am=H.f(this.y.p(0,"nullAmbientTxt"),"$isM")
break
case C.c:this.y2=H.f(this.y.p(0,"ambientTxt"),"$isaf")
this.am=H.f(this.y.p(0,"nullAmbientTxt"),"$isM")
break}}y=a1.c
if(y!==C.b){this.ai=H.f(this.y.p(0,"diffuseClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.bm=H.f(this.y.p(0,"diffuseTxt"),"$isam")
this.bn=H.f(this.y.p(0,"nullDiffuseTxt"),"$isM")
break
case C.c:this.dB=H.f(this.y.p(0,"diffuseTxt"),"$isaf")
this.bn=H.f(this.y.p(0,"nullDiffuseTxt"),"$isM")
break}}y=a1.d
if(y!==C.b){this.bo=H.f(this.y.p(0,"invDiffuseClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.dC=H.f(this.y.p(0,"invDiffuseTxt"),"$isam")
this.bp=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isM")
break
case C.c:this.dD=H.f(this.y.p(0,"invDiffuseTxt"),"$isaf")
this.bp=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a1.e
if(y!==C.b){this.bs=H.f(this.y.p(0,"shininess"),"$isW")
this.bq=H.f(this.y.p(0,"specularClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.dE=H.f(this.y.p(0,"specularTxt"),"$isam")
this.br=H.f(this.y.p(0,"nullSpecularTxt"),"$isM")
break
case C.c:this.dF=H.f(this.y.p(0,"specularTxt"),"$isaf")
this.br=H.f(this.y.p(0,"nullSpecularTxt"),"$isM")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.dG=H.f(this.y.p(0,"bumpTxt"),"$isam")
this.bt=H.f(this.y.p(0,"nullBumpTxt"),"$isM")
break
case C.c:this.dH=H.f(this.y.p(0,"bumpTxt"),"$isaf")
this.bt=H.f(this.y.p(0,"nullBumpTxt"),"$isM")
break}if(a1.dy){this.dI=H.f(this.y.p(0,"envSampler"),"$isaf")
this.dJ=H.f(this.y.p(0,"nullEnvTxt"),"$isM")
y=a1.r
if(y!==C.b){this.bu=H.f(this.y.p(0,"reflectClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.dK=H.f(this.y.p(0,"reflectTxt"),"$isam")
this.bv=H.f(this.y.p(0,"nullReflectTxt"),"$isM")
break
case C.c:this.dL=H.f(this.y.p(0,"reflectTxt"),"$isaf")
this.bv=H.f(this.y.p(0,"nullReflectTxt"),"$isM")
break}}y=a1.x
if(y!==C.b){this.bw=H.f(this.y.p(0,"refraction"),"$isW")
this.bx=H.f(this.y.p(0,"refractClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.dM=H.f(this.y.p(0,"refractTxt"),"$isam")
this.by=H.f(this.y.p(0,"nullRefractTxt"),"$isM")
break
case C.c:this.dN=H.f(this.y.p(0,"refractTxt"),"$isaf")
this.by=H.f(this.y.p(0,"nullRefractTxt"),"$isM")
break}}}y=a1.y
if(y!==C.b){this.bz=H.f(this.y.p(0,"alpha"),"$isW")
switch(y){case C.b:break
case C.e:break
case C.d:this.dO=H.f(this.y.p(0,"alphaTxt"),"$isam")
this.bA=H.f(this.y.p(0,"nullAlphaTxt"),"$isM")
break
case C.c:this.dP=H.f(this.y.p(0,"alphaTxt"),"$isaf")
this.bA=H.f(this.y.p(0,"nullAlphaTxt"),"$isM")
break}}this.cl=H.b([],[A.f2])
this.cm=H.b([],[A.f3])
this.cn=H.b([],[A.f4])
this.co=H.b([],[A.f5])
this.cp=H.b([],[A.f6])
this.cq=H.b([],[A.f7])
if(a1.k2){y=a1.z
if(y>0){this.dQ=H.h(this.y.p(0,"dirLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isI")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isI")
x=this.cl;(x&&C.a).h(x,new A.f2(m,l,k))}}y=a1.Q
if(y>0){this.dR=H.h(this.y.p(0,"pntLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isI")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isI")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isI")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isW")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isW")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isW")
x=this.cm;(x&&C.a).h(x,new A.f3(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dS=H.h(this.y.p(0,"spotLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isI")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isI")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isI")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isI")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isW")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isW")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isW")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isW")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isW")
x=this.cn;(x&&C.a).h(x,new A.f4(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dT=H.h(this.y.p(0,"txtDirLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isI")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isI")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isI")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isI")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isI")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isM")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isam")
x=this.co;(x&&C.a).h(x,new A.f5(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dU=H.h(this.y.p(0,"txtPntLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isI")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isI")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isdk")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isI")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isM")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isW")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isW")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isW")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isaf")
x=this.cp;(x&&C.a).h(x,new A.f6(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dV=H.h(this.y.p(0,"txtSpotLightCount"),"$isM")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isI")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isI")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isI")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isI")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isI")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isM")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isI")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isW")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isW")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isW")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isW")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isW")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isam")
x=this.cq;(x&&C.a).h(x,new A.f7(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
a9:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cO(c)
b.a.uniform1i(b.d,0)}},
q:{
i5:function(a,b){var z,y
z=a.ai
y=new A.en(b,z)
y.cS(b,z)
y.ep(a,b)
return y}}},i8:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,am,ai,bm",
fQ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.am+"];\n"
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
fX:function(a){var z
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
fR:function(a){var z
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
h4:function(a){var z,y
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
h5:function(a){var z,y
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
fZ:function(a){var z
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
h9:function(a){var z
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
ar:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.bc(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fU:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ar(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fP:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ar(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fS:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"diffuse")
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
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fV:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"invDiffuse")
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
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
h2:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ar(a,z,"specular")
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
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fY:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.c:z+="uniform samplerCube bumpTxt;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
h0:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ar(a,z,"reflect")
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
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
h1:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ar(a,z,"refract")
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
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fT:function(a){var z,y
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
h_:function(a){var z,y
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
h3:function(a){var z,y
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
h6:function(a){var z,y,x
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
h7:function(a){var z,y,x
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
h8:function(a){var z,y,x
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
fW:function(a){var z
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
i:function(a){return this.ai}},f2:{"^":"a;a,b,c"},f5:{"^":"a;a,b,c,d,e,f,r,x"},f3:{"^":"a;a,b,c,d,e,f,r"},f6:{"^":"a;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"a;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},d9:{"^":"cK;",
cS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dX:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.d4(b,35633)
this.f=this.d4(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.du(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.r(P.p("Failed to link shader: "+H.j(x)))}this.fG()
this.fI()},
W:function(a){a.a.useProgram(this.r)
this.x.hr()},
d4:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.du(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.e(P.p("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fG:function(){var z,y,x,w,v,u
z=H.b([],[A.dJ])
y=this.a
x=H.a3(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dJ(y,v.name,u))}this.x=new A.h4(z)},
fI:function(){var z,y,x,w,v,u
z=H.b([],[A.a5])
y=this.a
x=H.a3(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hn(v.type,v.size,v.name,u))}this.y=new A.jt(z)},
aH:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.M(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eO:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bi:function(a,b){return new P.fh(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hn:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.jo(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.jr(this.a,this.r,c,d)
case 35667:return new A.jp(this.a,this.r,c,d)
case 35668:return new A.jq(this.a,this.r,c,d)
case 35669:return new A.js(this.a,this.r,c,d)
case 35674:return new A.jv(this.a,this.r,c,d)
case 35675:return new A.dk(this.a,this.r,c,d)
case 35676:return new A.aF(this.a,this.r,c,d)
case 35678:return this.eO(b,c,d)
case 35680:return this.eP(b,c,d)
case 35670:throw H.e(this.bi("BOOL",c))
case 35671:throw H.e(this.bi("BOOL_VEC2",c))
case 35672:throw H.e(this.bi("BOOL_VEC3",c))
case 35673:throw H.e(this.bi("BOOL_VEC4",c))
default:throw H.e(P.p("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},ce:{"^":"a;a,b",
i:function(a){return this.b}},eD:{"^":"d9;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a5:{"^":"a;"},jt:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.H()},
hv:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
H:function(){return this.hv("\n")}},M:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},jp:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},jq:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},js:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},jn:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
dj:function(a,b,c,d,e){var z=new A.jn(a,b,c,e)
z.f=d
z.e=P.hY(d,0,!1,P.D)
return z}}},W:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},jo:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},I:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},jr:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},jv:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dk:{"^":"a5;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bQ(H.x(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aF:{"^":"a5;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bQ(H.x(a,"$isc",[P.z],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},am:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},af:{"^":"a5;a,b,c,d",
cO:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cA:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.cA(y)
k=F.cA(z.b)
j=F.lX(d,e,new F.lg(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.hH(j)},
lX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aK,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.da()
y=H.b([],[F.aK])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cw(null,null,new V.aT(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cg(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cw(null,null,new V.aT(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cg(d))}}z.d.hb(a+1,b+1,y)
return z},
lg:{"^":"q:37;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cu(z.b,b).cu(z.d.cu(z.c,b),c)
z=new V.ad(y.a,y.b,y.c)
if(!J.X(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a2()}a.saU(y.w(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.bB(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.X(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a2()}}},
al:{"^":"a;0a,0b,0c,0d,0e",
gck:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dY())return
return v.w(0,Math.sqrt(v.C(v)))},
eK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.C(z)))
z=w.G(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.b1(z.w(0,Math.sqrt(z.C(z))))
return z.w(0,Math.sqrt(z.C(z)))},
ce:function(){if(this.d!=null)return!0
var z=this.eH()
if(z==null){z=this.eK()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
eG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.K(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dY())return
return v.w(0,Math.sqrt(v.C(v)))},
eJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.G(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.ad(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.C(z)))
z=k.b1(m)
z=z.w(0,Math.sqrt(z.C(z))).b1(k)
m=z.w(0,Math.sqrt(z.C(z)))}return m},
cc:function(){if(this.e!=null)return!0
var z=this.eG()
if(z==null){z=this.eJ()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var z,y
if(this.gck())return a+"disposed"
z=a+C.h.ab(J.a4(this.a.e),0)+", "+C.h.ab(J.a4(this.b.e),0)+", "+C.h.ab(J.a4(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
H:function(){return this.A("")},
q:{
bs:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.p("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
d0:{"^":"a;0a,0b",
gck:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){if(this.gck())return a+"disposed"
return a+C.h.ab(J.a4(this.a.e),0)+", "+C.h.ab(J.a4(this.b.e),0)},
H:function(){return this.A("")},
q:{
hU:function(a,b){var z,y,x
z=new F.d0()
y=a.a
if(y==null)H.r(P.p("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.p("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
d6:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.ab(J.a4(z.e),0)},
H:function(){return this.A("")}},
eC:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
hH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a_()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.hl())}this.a.a_()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a_()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d6()
if(r.a==null)H.r(P.p("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a_()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a_()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.hU(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a_()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a_()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a_()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bs(p,o,m)}z=this.e
if(!(z==null))z.az(0)},
av:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.az(0)
return y},
dr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$av()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$be().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
v=b.gcP(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dN])
for(r=0,q=0;q<w;++q){p=b.he(q)
o=p.gcP(p)
C.a.T(s,q,new Z.dN(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].hD(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.T(t,l,m[k]);++l}}r+=o}H.x(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bQ(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cN(new Z.fd(34962,j),s,b)
i.b=H.b([],[Z.ck])
if(this.b.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a_()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(0,h.length,f))}if(this.c.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a_()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.a_()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(1,h.length,f))}if(this.d.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a_()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.a_()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.a_()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ck(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.l(z,"\n")},
aT:function(a){var z=this.e
if(!(z==null))z.v(a)},
a2:function(){return this.aT(null)},
q:{
da:function(){var z,y
z=new F.eC()
y=new F.jG(z)
y.b=!1
y.c=H.b([],[F.aK])
z.a=y
y=new F.iT(z)
y.b=H.b([],[F.d6])
z.b=y
y=new F.iS(z)
y.b=H.b([],[F.d0])
z.c=y
y=new F.iR(z)
y.b=H.b([],[F.al])
z.d=y
z.e=null
return z}}},
iR:{"^":"a;a,0b",
ha:function(a){var z,y,x,w,v
H.x(a,"$isc",[F.aK],"$asc")
z=H.b([],[F.al])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bs(y,w,v))}return z},
hb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isc",[F.aK],"$asc")
z=H.b([],[F.al])
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
C.a.h(z,F.bs(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bs(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bs(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bs(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].ce())x=!1
return x},
cd:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cc())x=!1
return x},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
H:function(){return this.A("")}},
iS:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
z=H.b([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.l(z,"\n")},
H:function(){return this.A("")}},
iT:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
H:function(){return this.A("")}},
aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cg:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cw(this.cx,x,u,z,y,w,v,a,t)},
hl:function(){return this.cg(null)},
saU:function(a){var z
if(!J.X(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
hD:function(a){var z,y
z=J.L(a)
if(z.u(a,$.$get$av())){z=this.f
y=[P.z]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aN())){z=this.r
y=[P.z]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aM())){z=this.x
y=[P.z]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.y
y=[P.z]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.u(a,$.$get$aP())){z=this.z
y=[P.z]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bL())){z=this.Q
y=[P.z]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bM())){z=this.Q
y=[P.z]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$be()))return H.b([this.ch],[P.z])
else if(z.u(a,$.$get$aL())){z=this.cx
y=[P.z]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.z])},
ce:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.K(0,new F.jN(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
cc:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.K(0,new F.jM(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var z,y,x
z=H.b([],[P.i])
C.a.h(z,C.h.ab(J.a4(this.e),0))
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
x=C.a.l(z,", ")
return a+"{"+x+"}"},
H:function(){return this.A("")},
q:{
cw:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aK()
y=new F.jL(z)
y.b=H.b([],[F.d6])
z.b=y
y=new F.jK(z)
x=[F.d0]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.jH(z)
x=[F.al]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$fa()
z.e=0
y=$.$get$av()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aN().a)!==0?e:null
z.x=(x&$.$get$aM().a)!==0?b:null
z.y=(x&$.$get$aO().a)!==0?f:null
z.z=(x&$.$get$aP().a)!==0?g:null
z.Q=(x&$.$get$fb().a)!==0?c:null
z.ch=(x&$.$get$be().a)!==0?i:0
z.cx=(x&$.$get$aL().a)!==0?a:null
return z}}},
jN:{"^":"q:5;a",
$1:function(a){var z,y
H.h(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jM:{"^":"q:5;a",
$1:function(a){var z,y
H.h(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jG:{"^":"a;a,0b,0c",
a_:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a2()
return!0},
hc:function(a,b,c,d,e,f,g,h,i){var z=F.cw(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bj:function(a,b,c,d,e,f){return this.hc(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].ce()
return!0},
cd:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cc()
return!0},
hh:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.X(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
this.a_()
z=H.b([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
H:function(){return this.A("")}},
jH:{"^":"a;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.al]})
C.a.K(this.b,b)
C.a.K(this.c,new F.jI(this,b))
C.a.K(this.d,new F.jJ(this,b))},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
H:function(){return this.A("")}},
jI:{"^":"q:5;a,b",
$1:function(a){H.h(a,"$isal")
if(!J.X(a.a,this.a))this.b.$1(a)}},
jJ:{"^":"q:5;a,b",
$1:function(a){var z
H.h(a,"$isal")
z=this.a
if(!J.X(a.a,z)&&!J.X(a.b,z))this.b.$1(a)}},
jK:{"^":"a;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
H:function(){return this.A("")}},
jL:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.H()},
A:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.l(z,"\n")},
H:function(){return this.A("")}}}],["","",,O,{"^":"",i4:{"^":"c3;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
P:[function(a){var z
H.h(a,"$isw")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.P(null)},"d7","$1","$0","gaJ",0,2,0],
fv:[function(a){H.h(a,"$isw")
this.a=null
this.P(a)},function(){return this.fv(null)},"iO","$1","$0","gfu",0,2,0],
ip:[function(a,b){var z=V.aJ
z=new D.bY(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.P(z)},"$2","gf1",8,0,21],
iq:[function(a,b){var z=V.aJ
z=new D.bZ(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.P(z)},"$2","gf2",8,0,21],
d1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a1(z.e.length+3,4)*4
x=C.f.a1(z.f.length+3,4)*4
w=C.f.a1(z.r.length+3,4)*4
v=C.f.a1(z.x.length+3,4)*4
u=C.f.a1(z.y.length+3,4)*4
t=C.f.a1(z.z.length+3,4)*4
s=C.f.a1(this.e.a.length+3,4)*4
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$av()
if(c){z=$.$get$aN()
a6=new Z.bd(a6.a|z.a)}if(b){z=$.$get$aM()
a6=new Z.bd(a6.a|z.a)}if(a){z=$.$get$aO()
a6=new Z.bd(a6.a|z.a)}if(a0){z=$.$get$aP()
a6=new Z.bd(a6.a|z.a)}if(a2){z=$.$get$aL()
a6=new Z.bd(a6.a|z.a)}return new A.i8(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.x(a,"$isc",[T.dg],"$asc")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
ak:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aq(z,z.length,0,[H.A(z,0)]);z.B();){y=z.d
x=new V.K(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cG(x)}}},
e3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d1()
y=H.h(a.fr.j(0,z.ai),"$isen")
if(y==null){y=A.i5(z,a.a)
a.dm(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bm
z=b.e
if(!(z instanceof Z.cN)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.av()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cd()
u.a.cd()
u=u.e
if(!(u==null))u.az(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.hh()
t=t.e
if(!(t==null))t.az(0)}r=b.d.dr(new Z.fe(a.a),w)
r.aw($.$get$av()).e=this.a.Q.c
if(z)r.aw($.$get$aN()).e=this.a.cx.c
if(v)r.aw($.$get$aM()).e=this.a.ch.c
if(x.rx)r.aw($.$get$aO()).e=this.a.cy.c
if(u)r.aw($.$get$aP()).e=this.a.db.c
if(x.x1)r.aw($.$get$aL()).e=this.a.dx.c
b.e=r}z=T.dg
q=H.b([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gX(u)
v=v.dy
v.toString
v.ad(u.a8(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gX(u)
t=a.dx
t=u.n(0,t.gX(t))
a.cx=t
u=t}v=v.fr
v.toString
v.ad(u.a8(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghW()
t=a.dx
t=u.n(0,t.gX(t))
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
v.ad(C.G.a8(u,!0))}if(x.am>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.z],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.h(t,"$isaJ")
u=u.r1
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bQ(H.x(t.a8(0,!0),"$isc",v,"$asc")))
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
case C.d:this.S(q,this.f.d)
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
case C.c:this.S(q,this.f.e)
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
case C.e:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.S(q,this.r.d)
v=this.a
u=this.r.d
v.af(v.y1,v.am,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.S(q,this.r.e)
v=this.a
u=this.r.e
v.a9(v.y2,v.am,u)
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
v=v.ai
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.S(q,this.x.d)
v=this.a
u=this.x.d
v.af(v.bm,v.bn,u)
u=this.a
v=this.x.f
u=u.ai
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.S(q,this.x.e)
v=this.a
u=this.x.e
v.a9(v.dB,v.bn,u)
u=this.a
v=this.x.f
u=u.ai
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bo
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.S(q,this.y.d)
v=this.a
u=this.y.d
v.af(v.dC,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.S(q,this.y.e)
v=this.a
u=this.y.e
v.a9(v.dD,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
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
case C.d:this.S(q,this.z.d)
v=this.a
u=this.z.d
v.af(v.dE,v.br,u)
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
case C.c:this.S(q,this.z.e)
v=this.a
u=this.z.e
v.a9(v.dF,v.br,u)
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
v=this.a.dQ
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cl
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.cG(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dR
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cm
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb4(j)
s=i.b
h=t.gcJ(t)
g=t.gcK(t)
t=t.gcL(t)
s.a.uniform3f(s.d,h,g,t)
t=m.ba(j.gb4(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gag(j)
g=i.d
h=t.gbF()
s=t.gbb()
t=t.gbk()
g.a.uniform3f(g.d,h,s,t)
t=j.gc7()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gc8()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gc9()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dS
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cn
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb4(j)
s=i.b
h=t.gcJ(t)
g=t.gcK(t)
t=t.gcL(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcj(j).iV()
g=i.c
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=m.ba(j.gb4(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gag(j)
s=i.e
h=t.gbF()
g=t.gbb()
t=t.gbk()
s.a.uniform3f(s.d,h,g,t)
t=j.giU()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giS()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gc7()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gc8()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dT
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.co
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gb8()
H.x(q,"$isc",t,"$asc")
if(!C.a.R(q,s)){s.sbV(q.length)
C.a.h(q,s)}s=j.gcj(j)
h=i.d
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
h.a.uniform3f(h.d,g,f,s)
s=j.gbG()
f=i.b
g=s.gaO(s)
h=s.gaP(s)
s=s.gaQ()
f.a.uniform3f(f.d,g,h,s)
s=j.gb5(j)
h=i.c
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
h.a.uniform3f(h.d,g,f,s)
s=m.cG(j.gcj(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gag(j)
g=i.f
f=h.gbF()
s=h.gbb()
h=h.gbk()
g.a.uniform3f(g.d,f,s,h)
h=j.gb8()
s=h.gbC(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbC(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.ghy(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dU
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.y,u=v.length,t=[P.z],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.cp
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gb8()
H.x(q,"$isc",s,"$asc")
if(!C.a.R(q,h)){h.sbV(q.length)
C.a.h(q,h)}e=m.n(0,j.gX(j))
h=j.gX(j).ba(new V.ad(0,0,0))
g=i.b
f=h.gcJ(h)
d=h.gcK(h)
h=h.gcL(h)
g.a.uniform3f(g.d,f,d,h)
h=e.ba(new V.ad(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ct(0)
d=i.d
n=new Float32Array(H.bQ(H.x(new V.eo(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a8(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gag(j)
h=i.e
f=d.gbF()
g=d.gbb()
d=d.gbk()
h.a.uniform3f(h.d,f,g,d)
d=j.gb8()
h=d.gbC(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gii()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbV())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc7()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc8()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc9()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dV
v.a.uniform1i(v.d,p)
v=a.db
m=v.gX(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cq
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb8()
H.x(q,"$isc",z,"$asc")
if(!C.a.R(q,t)){t.sbV(q.length)
C.a.h(q,t)}t=j.gb4(j)
s=i.b
h=t.gcJ(t)
g=t.gcK(t)
t=t.gcL(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcj(j)
g=i.c
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=j.gbG()
s=i.d
h=t.gaO(t)
g=t.gaP(t)
t=t.gaQ()
s.a.uniform3f(s.d,h,g,t)
t=j.gb5(j)
g=i.e
h=t.gaO(t)
s=t.gaP(t)
t=t.gaQ()
g.a.uniform3f(g.d,h,s,t)
t=m.ba(j.gb4(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb8()
s=t.gbC(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbC(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.ghy(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gag(j)
s=i.y
h=t.gbF()
g=t.gbb()
t=t.gbk()
s.a.uniform3f(s.d,h,g,t)
t=j.gj_()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gj0()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gc7()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gc8()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gc9()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.S(q,this.Q.d)
z=this.a
v=this.Q.d
z.af(z.dG,z.bt,v)
break
case C.c:this.S(q,this.Q.e)
z=this.a
v=this.Q.e
z.a9(z.dH,z.bt,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gX(v).ct(0)
a.Q=v}z=z.id
z.toString
z.ad(v.a8(0,!0))}if(x.dy){this.S(q,this.ch)
z=this.a
v=this.ch
z.a9(z.dI,z.dJ,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bu
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.S(q,this.cx.d)
z=this.a
v=this.cx.d
z.af(z.dK,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.S(q,this.cx.e)
z=this.a
v=this.cx.e
z.a9(z.dL,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
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
case C.d:this.S(q,this.cy.d)
z=this.a
v=this.cy.d
z.af(z.dM,z.by,v)
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
case C.c:this.S(q,this.cy.e)
z=this.a
v=this.cy.e
z.a9(z.dN,z.by,v)
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
case C.e:z=this.a
u=this.db.f
z=z.bz
z.a.uniform1f(z.d,u)
break
case C.d:this.S(q,this.db.d)
z=this.a
u=this.db.d
z.af(z.dO,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break
case C.c:this.S(q,this.db.e)
z=this.a
u=this.db.e
z.a9(z.dP,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].W(a)
z=b.e
z.W(a)
z.a7(a)
z.aA(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.dz()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d1().ai}},i6:{"^":"d2;0f,a,b,0c,0d,0e",
fC:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.z])
z.b=!0
this.a.P(z)}},
aK:function(){this.cR()
this.fC(1)}},d2:{"^":"a;",
P:[function(a){this.a.P(H.h(a,"$isw"))},function(){return this.P(null)},"d7","$1","$0","gaJ",0,2,0],
aK:["cR",function(){}],
fE:function(a){},
fF:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gt().N(0,this.gaJ())
y=this.e
this.e=a
if(a!=null)a.gt().h(0,this.gaJ())
z=new D.H(this.b+".textureCube",y,this.e,this,[T.cs])
z.b=!0
this.a.P(z)}},
saU:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aK()
this.c=C.c
this.fE(null)
z=this.a
z.a=null
z.P(null)}this.fF(a)}},i7:{"^":"d2;a,b,0c,0d,0e"},b8:{"^":"d2;0f,a,b,0c,0d,0e",
de:function(a){var z,y
if(!J.X(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.P(y)}},
aK:["bM",function(){this.cR()
this.de(new V.Y(1,1,1))}],
sag:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aK()
z=this.a
z.a=null
z.P(null)}this.de(b)}},i9:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
fD:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.P(z)}},
aK:function(){this.bM()
this.fD(1)}},ia:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
c4:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.P(z)}},
aK:function(){this.bM()
this.c4(100)}},iZ:{"^":"c3;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
P:[function(a){var z
H.h(a,"$isw")
z=this.e
if(!(z==null))z.v(a)},function(){return this.P(null)},"d7","$1","$0","gaJ",0,2,0],
e3:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.j(0,"Skybox"),"$iseD")
if(z==null){y=a.a
z=new A.eD(y,"Skybox")
z.cS(y,"Skybox")
z.dX(0,$.j0,$.j_)
z.z=z.x.j(0,"posAttr")
z.Q=H.f(z.y.j(0,"fov"),"$isW")
z.ch=H.f(z.y.j(0,"ratio"),"$isW")
z.cx=H.f(z.y.j(0,"boxClr"),"$isI")
z.cy=H.f(z.y.j(0,"boxTxt"),"$isaf")
z.db=H.f(z.y.j(0,"viewMat"),"$isaF")
a.dm(z)}this.a=z}if(b.e==null){y=b.d.dr(new Z.fe(a.a),$.$get$av())
y.aw($.$get$av()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.W(a)}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.cO(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gX(x).ct(0)
w=w.db
w.toString
w.ad(x.a8(0,!0))
y=b.e
if(y instanceof Z.cN){y.W(a)
y.a7(a)
y.aA(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.dz()
y=this.c
if(y!=null)y.aA(a)}},c3:{"^":"a;"}}],["","",,T,{"^":"",dg:{"^":"cK;"},cs:{"^":"dg;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
W:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aA:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},ja:{"^":"a;a,0b,0c,0d,0e",
dZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.cs()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aI(r,s,z,34069,!1,!1)
this.aI(r,s,w,34070,!1,!1)
this.aI(r,s,y,34071,!1,!1)
this.aI(r,s,v,34072,!1,!1)
this.aI(r,s,x,34073,!1,!1)
this.aI(r,s,u,34074,!1,!1)
return r},
hF:function(a,b){return this.dZ(a,b,!1,"")},
cv:function(a){return this.dZ(a,".png",!1,"")},
aI:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a6
W.a_(z,"load",H.l(new T.jb(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fw:function(a,b,c){var z,y,x,w
b=V.dD(b,2)
z=V.dD(a.width,2)
y=V.dD(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cP(null,null)
x.width=z
x.height=y
w=H.h(C.k.eb(x,"2d"),"$isdP")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lw(w.getImageData(0,0,x.width,x.height))}}},jb:{"^":"q:25;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fw(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.T.i6(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.hq()}++z.e}}}],["","",,V,{"^":"",bn:{"^":"a;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isaI:1},aI:{"^":"a;"},em:{"^":"a;",
aS:["em",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cQ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaI:1},at:{"^":"em;0a",
aS:function(a,b){return!this.em(0,b)},
i:function(a){return"!["+this.cQ(0)+"]"}},iB:{"^":"a;0a,0b",
aS:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.d7(this.a)
y=H.d7(this.b)
return z+".."+y},
$isaI:1,
q:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.h.aF(a,0)
y=C.h.aF(b,0)
x=new V.iB()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iP:{"^":"a;0a",
er:function(a){var z,y
if(a.a.length<=0)throw H.e(P.p("May not create a SetMatcher with zero characters."))
z=new H.b7(0,0,[P.D,P.O])
for(y=new H.d1(a,a.gm(a),0,[H.ah(a,"v",0)]);y.B();)z.T(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.dv(0,b)},
i:function(a){var z=this.a
return P.dd(new H.eg(z,[H.A(z,0)]),0,null)},
$isaI:1,
q:{
u:function(a){var z=new V.iP()
z.er(a)
return z}}},eF:{"^":"a;a,b,0c,0d",
ghI:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eR(this.a.k(0,b))
w.a=H.b([],[V.aI])
w.c=!1
C.a.h(this.c,w)
return w},
hs:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},eO:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dF(this.b,"\n","\\n")
y=H.dF(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eP:{"^":"a;a,b,0c",
ay:function(a,b,c){var z,y,x
H.x(c,"$isc",[P.i],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.y)(c),++y){x=c[y]
this.c.T(0,x,b)}},
i:function(a){return this.b}},jj:{"^":"a;0a,0b,0c",
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eF(this,b)
z.c=H.b([],[V.eR])
this.a.T(0,b,z)}return z},
I:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eP(this,a)
y=P.i
z.c=new H.b7(0,0,[y,y])
this.b.T(0,a,z)}return z},
e7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eO])
y=this.c
x=[P.D]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aF(a,t)
r=y.hs(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dd(w,0,null)
throw H.e(P.p("Untokenizable string [state: "+y.ghI(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dd(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eO(o==null?p.b:o,q,t)}++t}}},
q:{
ct:function(){var z,y
z=new V.jj()
y=P.i
z.a=new H.b7(0,0,[y,V.eF])
z.b=new H.b7(0,0,[y,V.eP])
return z}}},eR:{"^":"em;b,0c,0a",
i:function(a){return this.b.b+": "+this.cQ(0)}}}],["","",,X,{"^":"",cd:{"^":"a;",$isaA:1},hE:{"^":"df;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
ap:function(a){var z=this.x
if(!(z==null))z.v(a)},
sdt:function(a,b){var z
if(this.b){this.b=!1
z=new D.H("clearColor",!0,!1,this,[P.O])
z.b=!0
this.ap(z)}},
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
v=C.i.aj(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.i.aj(w.b*x)
t=C.i.aj(w.c*y)
a.c=t
w=C.i.aj(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cU:function(a,b,c,d,e,f,g){var z,y
z=new X.hE()
y=new V.aT(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eA(0,0,1,1)
z.r=y
return z}}},hJ:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
W:function(a){var z
a.cy.bE(V.b9())
z=V.b9()
a.db.bE(z)},
aA:function(a){a.cy.ax()
a.db.ax()},
$isaA:1,
$iscd:1},ip:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
ap:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.v(a)},function(){return this.ap(null)},"ig","$1","$0","geD",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ay(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bE(s)
z=$.ev
if(z==null){z=V.ep(new V.ad(0,0,0),new V.K(0,1,0),new V.K(0,0,-1))
$.ev=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aV(0,a,this)
if(q!=null)r=q.n(0,r)}a.db.bE(r)},
aA:function(a){a.cy.ax()
a.db.ax()},
$isaA:1,
$iscd:1,
q:{
eu:function(a,b,c,d,e){var z,y,x
z=new X.ip()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gt().h(0,z.geD())
x=new D.H("mover",y,z.b,z,[U.a9])
x.b=!0
z.ap(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.H("fov",y,b,z,[P.z])
x.b=!0
z.ap(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.H("near",y,d,z,[P.z])
x.b=!0
z.ap(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.H("far",y,a,z,[P.z])
x.b=!0
z.ap(x)}return z}}},df:{"^":"a;"}}],["","",,V,{"^":"",
lV:function(a){P.ji(C.C,new V.lW(a))},
aS:{"^":"a;",
bd:function(a){this.b=new P.hH(C.D)
this.c=null
this.d=H.b([],[[P.c,W.b4]])},
F:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b4]))
y=a.split("\n")
for(z=y.length,x=[W.b4],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.J(u)
s=this.b.eN(u,0,u.length)
r=s==null?u:s
C.B.ef(t,H.dF(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbB(this.d),t)}},
e2:function(a,b){var z,y,x,w
H.x(b,"$isc",[P.i],"$asc")
this.d=H.b([],[[P.c,W.b4]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.bl()
this.c=y}for(y=y.e7(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)this.bD(y[w])}},
lW:{"^":"q:41;a",
$1:function(a){H.h(a,"$isbb")
P.dE(C.i.e6(this.a.ghw(),2)+" fps")}},
hl:{"^":"aS;a,0b,0c,0d",
bD:function(a){switch(a.a){case"Class":this.F(a.b,"#551")
break
case"Comment":this.F(a.b,"#777")
break
case"Id":this.F(a.b,"#111")
break
case"Num":this.F(a.b,"#191")
break
case"Reserved":this.F(a.b,"#119")
break
case"String":this.F(a.b,"#171")
break
case"Symbol":this.F(a.b,"#616")
break
case"Type":this.F(a.b,"#B11")
break
case"Whitespace":this.F(a.b,"#111")
break}},
bl:function(){var z,y,x,w
z=V.ct()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.u(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.u(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bn())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.u(new H.t("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.u(new H.t("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.u(new H.t("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.u(new H.t("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bn())
x=z.k(0,"Start").l(0,"Slash")
y=V.u(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.at()
w=[V.aI]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.at()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.u(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.u(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.I("Num")
x=z.k(0,"Float")
x.d=x.a.I("Num")
x=z.k(0,"Sym")
x.d=x.a.I("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.I("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.I("String")
x=z.k(0,"EndComment")
x.d=x.a.I("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.I("Whitespace")
x=z.k(0,"Id")
y=x.a.I("Id")
x.d=y
x=[P.i]
y.ay(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.ay(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.ay(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hF:{"^":"aS;a,0b,0c,0d",
bD:function(a){switch(a.a){case"Builtin":this.F(a.b,"#411")
break
case"Comment":this.F(a.b,"#777")
break
case"Id":this.F(a.b,"#111")
break
case"Num":this.F(a.b,"#191")
break
case"Preprocess":this.F(a.b,"#737")
break
case"Reserved":this.F(a.b,"#119")
break
case"Symbol":this.F(a.b,"#611")
break
case"Type":this.F(a.b,"#171")
break
case"Whitespace":this.F(a.b,"#111")
break}},
bl:function(){var z,y,x,w
z=V.ct()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.u(new H.t("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.u(new H.t("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.u(new H.t("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.bn())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.at()
w=[V.aI]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.u(new H.t("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.at()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.u(new H.t("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.u(new H.t(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.u(new H.t(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.I("Num")
y=z.k(0,"Float")
y.d=y.a.I("Num")
y=z.k(0,"Sym")
y.d=y.a.I("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.I("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.I("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.I("Whitespace")
y=z.k(0,"Id")
x=y.a.I("Id")
y.d=x
y=[P.i]
x.ay(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.ay(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.ay(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hG:{"^":"aS;a,0b,0c,0d",
bD:function(a){switch(a.a){case"Attr":this.F(a.b,"#911")
this.F("=","#111")
break
case"Id":this.F(a.b,"#111")
break
case"Other":this.F(a.b,"#111")
break
case"Reserved":this.F(a.b,"#119")
break
case"String":this.F(a.b,"#171")
break
case"Symbol":this.F(a.b,"#616")
break}},
bl:function(){var z,y,x
z=V.ct()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.u(new H.t("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.u(new H.t("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.u(new H.t("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.u(new H.t('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.u(new H.t("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.u(new H.t('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.bn())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bn())
y=z.k(0,"Other").l(0,"Other")
x=new V.at()
x.a=H.b([],[V.aI])
C.a.h(y.a,x)
y=V.u(new H.t('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.I("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.I("String")
y=z.k(0,"Id")
x=y.a.I("Id")
y.d=x
x.ay(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
x=z.k(0,"Attr")
x.d=x.a.I("Attr")
x=z.k(0,"Other")
x.d=x.a.I("Other")
return z}},
ir:{"^":"aS;a,0b,0c,0d",
e2:function(a,b){H.x(b,"$isc",[P.i],"$asc")
this.d=H.b([],[[P.c,W.b4]])
this.F(C.a.l(b,"\n"),"#111")},
bD:function(a){},
bl:function(){return}},
iU:{"^":"a;0a,0b",
es:function(a,b){var z,y,x,w,v,u,t
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
W.a_(z,"scroll",H.l(new V.iX(x),{func:1,ret:-1,args:[t]}),!1,t)},
dl:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.x(a,"$isc",[P.i],"$asc")
this.fH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.e7(C.a.hB(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fT(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.k(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fA(C.u,s,C.p,!1)
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
ea:function(a){var z,y,x,w
z=new V.hl("dart")
z.bd("dart")
y=new V.hF("glsl")
y.bd("glsl")
x=new V.hG("html")
x.bd("html")
w=C.a.ht(H.b([z,y,x],[V.aS]),new V.iY(a))
if(w!=null)return w
z=new V.ir("plain")
z.bd("plain")
return z},
dj:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.x(a2,"$isc",[P.i],"$asc")
z=H.b([],[P.D])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dz(w).bJ(w,"+")){C.a.T(a2,x,C.h.bc(w,1))
C.a.h(z,1)
y=!0}else if(C.h.bJ(w,"-")){C.a.T(a2,x,C.h.bc(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.ea(a0)
v.e2(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.fA(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dH(null)
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
if(x>=z.length)return H.k(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.y)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.y)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gV(w);b.B();)h.appendChild(b.gJ(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
fH:function(){var z,y,x,w
if(this.b!=null)return
z=V.ct()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.at()
w=[V.aI]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.u(new H.t("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.at()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.u(new H.t("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.u(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.at()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.u(new H.t("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.u(new H.t("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.u(new H.t("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.u(new H.t("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.u(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.at()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.u(new H.t("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.at()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bn())
x=z.k(0,"Other").l(0,"Other")
y=new V.at()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.u(new H.t("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.I("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.I("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.I("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.I("Link")
x=z.k(0,"Other")
x.d=x.a.I("Other")
this.b=z},
q:{
iV:function(a,b){var z=new V.iU()
z.es(a,!0)
return z}}},
iX:{"^":"q:25;a",
$1:function(a){P.eM(C.l,new V.iW(this.a))}},
iW:{"^":"q:2;a",
$0:function(){var z,y,x
z=C.i.aj(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
iY:{"^":"q:42;a",
$1:function(a){return H.h(a,"$isaS").a===this.a}}}],["","",,X,{"^":"",
fP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=V.iV("Test 016",!0)
y=W.cP(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.dl(H.b(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],x))
z.dl(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.r(P.p("Failed to find an element with the identifier, testCanvas."))
v=E.jg(w,!0,!0,!0,!1)
u=X.cU(!0,!0,!1,null,2000,null,0)
u.sdt(0,!1)
t=E.e5(null,!0,null,"",null,null)
s=F.da()
F.bP(s,null,null,1,1,1,0,0,1)
F.bP(s,null,null,1,1,0,1,0,3)
F.bP(s,null,null,1,1,0,0,1,2)
F.bP(s,null,null,1,1,-1,0,0,0)
F.bP(s,null,null,1,1,0,-1,0,0)
F.bP(s,null,null,1,1,0,0,-1,3)
s.av()
t.sbI(0,s)
r=v.f.hF("../resources/maskonaive",".jpg")
q=v.f.cv("../resources/diceColor")
p=new O.i4()
x=O.cR(V.aJ)
p.e=x
x.aW(p.gf1(),p.gf2())
x=new O.b8(p,"emission")
x.c=C.b
x.f=new V.Y(0,0,0)
p.f=x
x=new O.b8(p,"ambient")
x.c=C.b
x.f=new V.Y(0,0,0)
p.r=x
x=new O.b8(p,"diffuse")
x.c=C.b
x.f=new V.Y(0,0,0)
p.x=x
x=new O.b8(p,"invDiffuse")
x.c=C.b
x.f=new V.Y(0,0,0)
p.y=x
x=new O.ia(p,"specular")
x.c=C.b
x.f=new V.Y(0,0,0)
x.ch=100
p.z=x
x=new O.i7(p,"bump")
x.c=C.b
p.Q=x
p.ch=null
x=new O.b8(p,"reflect")
x.c=C.b
x.f=new V.Y(0,0,0)
p.cx=x
x=new O.i9(p,"refract")
x.c=C.b
x.f=new V.Y(0,0,0)
x.ch=1
p.cy=x
x=new O.i6(p,"alpha")
x.c=C.b
x.f=1
p.db=x
x=new D.hT()
x.be(D.Z)
x.e=H.b([],[D.cg])
x.f=H.b([],[D.is])
x.r=H.b([],[D.j1])
x.x=H.b([],[D.jc])
x.y=H.b([],[D.jd])
x.z=H.b([],[D.je])
x.Q=null
x.ch=null
x.cN(x.gf0(),x.gfj(),x.gfl())
p.dx=x
o=x.Q
if(o==null){o=D.G()
x.Q=o
x=o}else x=o
x.h(0,p.gfu())
x=p.dx
o=x.ch
if(o==null){o=D.G()
x.ch=o
x=o}else x=o
o=p.gaJ()
x.h(0,o)
p.dy=null
x=p.dx
n=U.dT(V.ep(new V.ad(0,0,0),new V.K(0,1,0),new V.K(1,-1,-3)))
m=new V.Y(1,1,1)
l=new D.cg()
l.c=new V.Y(1,1,1)
l.a=new V.K(0,0,1)
k=l.b
l.b=n
n.gt().h(0,l.gez())
n=new D.H("mover",k,l.b,l,[U.a9])
n.b=!0
l.aD(n)
if(!l.c.u(0,m)){k=l.c
l.c=m
n=new D.H("color",k,m,l,[V.Y])
n.b=!0
l.aD(n)}x.h(0,l)
x=p.r
x.sag(0,new V.Y(0.2,0.2,0.2))
x=p.x
x.sag(0,new V.Y(0.7,0.7,0.7))
x=p.z
x.sag(0,new V.Y(0.7,0.7,0.7))
p.r.saU(q)
p.x.saU(q)
p.z.saU(v.f.cv("../resources/diceSpecular"))
x=p.z
if(x.c===C.b){x.c=C.e
x.bM()
x.c4(100)
n=x.a
n.a=null
n.P(null)}x.c4(10)
p.Q.saU(v.f.cv("../resources/diceBumpMap"))
x=p.ch
if(x!==r){if(x!=null)x.gt().N(0,o)
k=p.ch
p.ch=r
r.gt().h(0,o)
x=new D.H("environment",k,p.ch,p,[T.cs])
x.b=!0
p.P(x)}x=p.cx
x.sag(0,new V.Y(0.3,0.3,0.3))
j=new U.e7()
j.be(U.a9)
j.aW(j.gf_(),j.gfk())
j.e=null
j.f=V.b9()
j.r=0
x=v.r
o=new U.jC()
n=U.cS()
n.scI(0,!0)
n.scw(6.283185307179586)
n.scA(0)
n.sa5(0,0)
n.scz(100)
n.sO(0)
n.sci(0.5)
o.b=n
l=o.gaE()
n.gt().h(0,l)
n=U.cS()
n.scI(0,!0)
n.scw(6.283185307179586)
n.scA(0)
n.sa5(0,0)
n.scz(100)
n.sO(0)
n.sci(0.5)
o.c=n
n.gt().h(0,l)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
i=new X.az(!1,!1,!1)
k=o.d
o.d=i
n=[X.az]
l=new D.H("modifiers",k,i,o,n)
l.b=!0
o.M(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.H("invertX",l,!1,o,[P.O])
l.b=!0
o.M(l)}l=o.r
if(l!==!1){o.r=!1
l=new D.H("invertY",l,!1,o,[P.O])
l.b=!0
o.M(l)}o.b_(x)
j.h(0,o)
x=v.r
o=new U.jB()
l=U.cS()
l.scI(0,!0)
l.scw(6.283185307179586)
l.scA(0)
l.sa5(0,0)
l.scz(100)
l.sO(0)
l.sci(0.2)
o.b=l
l.gt().h(0,o.gaE())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
i=new X.az(!0,!1,!1)
k=o.c
o.c=i
l=new D.H("modifiers",k,i,o,n)
l.b=!0
o.M(l)
o.b_(x)
j.h(0,o)
x=v.r
o=new U.jD()
o.c=0.01
o.d=0
o.e=0
i=new X.az(!1,!1,!1)
o.b=i
n=new D.H("modifiers",null,i,o,n)
n.b=!0
o.M(n)
o.b_(x)
j.h(0,o)
j.h(0,U.dT(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=X.eu(2000,1.0471975511965976,j,0.1,null)
g=new M.hh()
g.sb0(null)
g.sb6(0,null)
g.sb7(null)
x=E.e5(null,!0,null,"",null,null)
s=F.da()
o=s.a
n=new V.K(-1,-1,1)
n=n.w(0,Math.sqrt(n.C(n)))
f=o.bj(new V.bB(1,2,4,6),new V.aT(1,0,0,1),new V.ad(-1,-1,0),new V.T(0,1),n,null)
o=s.a
n=new V.K(1,-1,1)
n=n.w(0,Math.sqrt(n.C(n)))
e=o.bj(new V.bB(0,3,4,6),new V.aT(0,0,1,1),new V.ad(1,-1,0),new V.T(1,1),n,null)
o=s.a
n=new V.K(1,1,1)
n=n.w(0,Math.sqrt(n.C(n)))
d=o.bj(new V.bB(0,2,5,6),new V.aT(0,1,0,1),new V.ad(1,1,0),new V.T(1,0),n,null)
o=s.a
n=new V.K(-1,1,1)
n=n.w(0,Math.sqrt(n.C(n)))
c=o.bj(new V.bB(0,2,4,7),new V.aT(1,1,0,1),new V.ad(-1,1,0),new V.T(0,0),n,null)
s.d.ha(H.b([f,e,d,c],[F.aK]))
s.av()
x.sbI(0,s)
g.d=x
g.e=null
x=new O.iZ()
x.b=1.0471975511965976
k=x.c
x.c=r
r.gt().h(0,x.gaJ())
o=new D.H("boxTexture",k,x.c,x,[T.cs])
o.b=!0
x.P(o)
q=new V.Y(1,1,1)
if(!J.X(x.d,q)){k=x.d
x.d=q
o=new D.H("boxColor",k,q,x,[V.Y])
o.b=!0
x.P(o)}x.e=null
g.sb7(x)
g.sb6(0,u)
g.sb0(h)
b=new M.hw()
x=O.cR(E.aH)
b.d=x
x.aW(b.gf4(),b.gf5())
b.e=null
b.f=null
b.r=null
b.x=null
b.sb0(null)
b.sb6(0,null)
b.sb7(null)
b.sb0(h)
b.sb7(p)
b.sb6(0,u)
b.d.h(0,t)
b.b.sdt(0,!1)
x=M.aC
o=H.b([g,b],[x])
n=new M.hf()
n.be(x)
n.e=!1
n.f=null
n.aW(n.gfm(),n.gfn())
n.a3(0,o)
x=v.d
if(x!==n){if(x!=null)x.gt().N(0,v.gcU())
v.d=n
n.gt().h(0,v.gcU())
v.ev()}x=v.z
if(x==null){x=D.G()
v.z=x}o={func:1,ret:-1,args:[D.w]}
n=H.l(new X.lO(z,p),o)
l=x.b
if(l==null){o=H.b([],[o])
x.b=o
x=o}else x=l
C.a.h(x,n)
V.lV(v)},
lO:{"^":"q:9;a,b",
$1:function(a){var z,y,x,w
H.h(a,"$isw")
z=this.a
y=this.b
x=y.a
w=[P.i]
z.dj("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.dj("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eb.prototype
return J.ea.prototype}if(typeof a=="string")return J.cm.prototype
if(a==null)return J.ec.prototype
if(typeof a=="boolean")return J.hO.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cF(a)}
J.c7=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cF(a)}
J.cE=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cF(a)}
J.lA=function(a){if(typeof a=="number")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cv.prototype
return a}
J.dz=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cv.prototype
return a}
J.bk=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cF(a)}
J.X=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).u(a,b)}
J.fV=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lA(a).ac(a,b)}
J.fW=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lL(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c7(a).j(a,b)}
J.fX=function(a,b,c,d){return J.bk(a).dk(a,b,c,d)}
J.cI=function(a,b,c){return J.c7(a).hi(a,b,c)}
J.cJ=function(a,b){return J.cE(a).D(a,b)}
J.fY=function(a,b){return J.cE(a).K(a,b)}
J.fZ=function(a){return J.bk(a).ghf(a)}
J.b1=function(a){return J.L(a).gY(a)}
J.b2=function(a){return J.cE(a).gV(a)}
J.b3=function(a){return J.c7(a).gm(a)}
J.h_=function(a){return J.bk(a).gcD(a)}
J.h0=function(a){return J.bk(a).gi5(a)}
J.dG=function(a){return J.cE(a).hY(a)}
J.h1=function(a,b,c){return J.dz(a).aX(a,b,c)}
J.h2=function(a){return J.dz(a).ic(a)}
J.a4=function(a){return J.L(a).i(a)}
I.b_=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.cb.prototype
C.k=W.cO.prototype
C.B=W.b4.prototype
C.E=J.n.prototype
C.a=J.b6.prototype
C.F=J.ea.prototype
C.f=J.eb.prototype
C.G=J.ec.prototype
C.i=J.cl.prototype
C.h=J.cm.prototype
C.N=J.c_.prototype
C.R=H.ii.prototype
C.S=W.ij.prototype
C.v=J.iq.prototype
C.T=P.d8.prototype
C.w=W.j8.prototype
C.o=J.cv.prototype
C.x=W.bN.prototype
C.y=W.jP.prototype
C.z=new P.io()
C.A=new P.jF()
C.j=new P.kB()
C.b=new A.ce(0,"ColorSourceType.None")
C.e=new A.ce(1,"ColorSourceType.Solid")
C.d=new A.ce(2,"ColorSourceType.Texture2D")
C.c=new A.ce(3,"ColorSourceType.TextureCube")
C.l=new P.bq(0)
C.C=new P.bq(5e6)
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
C.O=H.b(I.b_(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.P=H.b(I.b_(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.Q=H.b(I.b_([]),[P.i])
C.u=H.b(I.b_([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.m=H.b(I.b_(["bind","if","ref","repeat","syntax"]),[P.i])
C.n=H.b(I.b_(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.p=new P.jE(!1)
$.ax=0
$.bo=null
$.dL=null
$.dr=!1
$.fM=null
$.fH=null
$.fS=null
$.cD=null
$.cG=null
$.dA=null
$.bg=null
$.bR=null
$.bS=null
$.ds=!1
$.S=C.j
$.aG=null
$.cT=null
$.e4=null
$.e3=null
$.e_=null
$.dZ=null
$.dY=null
$.dX=null
$.m=V.ib()
$.j0="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.j_="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ev=null
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
I.$lazy(y,x,w)}})(["dW","$get$dW",function(){return H.fL("_$dart_dartClosure")},"cY","$get$cY",function(){return H.fL("_$dart_js")},"eS","$get$eS",function(){return H.aD(H.cu({
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aD(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eU","$get$eU",function(){return H.aD(H.cu(null))},"eV","$get$eV",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aD(H.cu(void 0))},"f_","$get$f_",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aD(H.eY(null))},"eW","$get$eW",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aD(H.eY(void 0))},"f0","$get$f0",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dn","$get$dn",function(){return P.jQ()},"bT","$get$bT",function(){return[]},"fz","$get$fz",function(){return P.iF("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dU","$get$dU",function(){return{}},"fk","$get$fk",function(){return P.ei(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"dp","$get$dp",function(){return P.eh(P.i,P.bX)},"fc","$get$fc",function(){return Z.an(0)},"fa","$get$fa",function(){return Z.an(511)},"av","$get$av",function(){return Z.an(1)},"aN","$get$aN",function(){return Z.an(2)},"aM","$get$aM",function(){return Z.an(4)},"aO","$get$aO",function(){return Z.an(8)},"aP","$get$aP",function(){return Z.an(16)},"bL","$get$bL",function(){return Z.an(32)},"bM","$get$bM",function(){return Z.an(64)},"fb","$get$fb",function(){return Z.an(96)},"be","$get$be",function(){return Z.an(128)},"aL","$get$aL",function(){return Z.an(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.as]},{func:1,ret:P.N,args:[F.al]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.D,[P.d,E.aH]]},{func:1,ret:P.N,args:[D.w]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.i,args:[P.D]},{func:1,ret:P.O,args:[W.C]},{func:1,ret:P.O,args:[W.U,P.i,P.i,W.c5]},{func:1,ret:W.C},{func:1,args:[,]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.O,args:[W.aB]},{func:1,ret:P.O,args:[P.i]},{func:1,ret:-1,args:[P.D,[P.d,V.aJ]]},{func:1,ret:-1,args:[P.D,[P.d,M.aC]]},{func:1,ret:-1,args:[P.D,[P.d,U.a9]]},{func:1,ret:P.z},{func:1,ret:P.N,args:[W.a6]},{func:1,ret:-1,args:[P.D,[P.d,D.Z]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:P.O,args:[P.z,P.z]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[[P.d,D.Z]]},{func:1,ret:P.N,args:[P.a0]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:W.U,args:[W.C]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.N,args:[F.aK,P.z,P.z]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:[P.aQ,,],args:[,]},{func:1,ret:P.N,args:[P.bb]},{func:1,ret:P.O,args:[V.aS]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.a],opt:[P.au]}]
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
if(x==y)H.lY(d||a)
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
Isolate.dx=a.dx
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fP,[])
else X.fP([])})})()
//# sourceMappingURL=test.dart.js.map
