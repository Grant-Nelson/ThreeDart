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
b6.$isb=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ist)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dQ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dS=function(){}
var dart=[["","",,H,{"^":"",os:{"^":"b;a"}}],["","",,J,{"^":"",
O:function(a){return void 0},
dW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dU==null){H.nC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ch("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$de()]
if(v!=null)return v
v=H.nH(a)
if(v!=null)return v
if(typeof a=="function")return C.W
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$de(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
v:function(a,b){return a===b},
gV:function(a){return H.bQ(a)},
i:["eS",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iI:{"^":"t;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isU:1},
eD:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isM:1},
df:{"^":"t;",
gV:function(a){return 0},
i:["eU",function(a){return String(a)}]},
jr:{"^":"df;"},
ci:{"^":"df;"},
cd:{"^":"df;",
i:function(a){var z=a[$.$get$em()]
if(z==null)return this.eU(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isca:1},
bh:{"^":"t;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.r(P.E("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aO(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
im:function(a){return this.n(a,"")},
ib:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aO(a))}return y},
i9:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.U,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aO(a))}throw H.a(H.dc())},
i8:function(a,b){return this.i9(a,b,null)},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bU:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gaB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.dc())},
aK:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.E("fill range"))
P.aT(b,c,a.length,null,null,null)
for(z=b;z.S(0,c);z=z.E(0,1))a[z]=d},
dE:function(a,b){var z,y
H.l(b,{func:1,ret:P.U,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aO(a))}return!1},
X:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.db(a,"[","]")},
gZ:function(a){return new J.ax(a,a.length,0,[H.y(a,0)])},
gV:function(a){return H.bQ(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cr(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iH:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a4(a,0,4294967295,"length",null))
return J.eB(new Array(a),b)},
eB:function(a,b){return J.bK(H.c(a,[b]))},
bK:function(a){H.c5(a)
a.fixed$length=Array
return a}}},
or:{"^":"bh;$ti"},
ax:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cb:{"^":"t;",
gil:function(a){return a===0?1/a<0:a<0},
e7:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eA:function(a,b){var z
if(b>20)throw H.a(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gil(a))return"-"+z
return z},
bj:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.E("Unexpected toString result: "+z))
x=J.aM(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.al(b))
return a*b},
bm:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aU:function(a,b){var z
if(a>0)z=this.ds(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hj:function(a,b){if(b<0)throw H.a(H.al(b))
return this.ds(a,b)},
ds:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.al(b))
return a<b},
$isp:1,
$isa5:1},
eC:{"^":"cb;",$isn:1},
iJ:{"^":"cb;"},
cc:{"^":"t;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.r(H.aL(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.cr(b,null,null))
return a+b},
b0:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.al(b))
c=P.aT(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.al(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.al(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.al(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.a(P.cH(b,null,null))
if(b>c)throw H.a(P.cH(b,null,null))
if(c>a.length)throw H.a(P.cH(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.u(a,b,null)},
j0:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iB:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ad:function(a,b){return this.iB(a,b," ")},
ef:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ee:function(a,b){return this.ef(a,b,0)},
hY:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.hC(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseU:1,
$ish:1}}],["","",,H,{"^":"",
cW:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dc:function(){return new P.du("No element")},
iG:function(){return new P.du("Too many elements")},
w:{"^":"kB;a",
gm:function(a){return this.a.length},
k:function(a,b){return C.b.Y(this.a,b)},
$ascM:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
et:{"^":"i;"},
cB:{"^":"et;$ti",
gZ:function(a){return new H.dj(this,this.gm(this),0,[H.am(this,"cB",0)])},
cV:function(a,b){return this.eT(0,H.l(b,{func:1,ret:P.U,args:[H.am(this,"cB",0)]}))}},
dj:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aO(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
j3:{"^":"i;a,b,$ti",
gZ:function(a){return new H.j4(J.b2(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cp(this.a,b))},
$asi:function(a,b){return[b]}},
j4:{"^":"dd;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asdd:function(a,b){return[b]}},
j5:{"^":"cB;a,b,$ti",
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cp(this.a,b))},
$ascB:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dE:{"^":"i;a,b,$ti",
gZ:function(a){return new H.l7(J.b2(this.a),this.b,this.$ti)}},
l7:{"^":"dd;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cw:{"^":"b;$ti"},
cM:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.am(this,"cM",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aK:function(a,b,c,d){H.A(d,H.am(this,"cM",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kB:{"^":"cA+cM;"}}],["","",,H,{"^":"",
i6:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nv:function(a){return init.types[H.F(a)]},
hu:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isI},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.al(a))
return z},
bQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jB:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.O(a).$isci){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.au(w,1)
r=H.dV(H.c5(H.b9(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jt:function(){if(!!self.location)return self.location.href
return},
eW:function(a){var z,y,x,w,v
H.c5(a)
z=J.ao(a)
if(typeof z!=="number")return z.eN()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jC:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.al(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aU(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.al(w))}return H.eW(z)},
eX:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.al(x))
if(x<0)throw H.a(H.al(x))
if(x>65535)return H.jC(a)}return H.eW(a)},
jD:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eN()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bR:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aU(z,10))>>>0,56320|z&1023)}}throw H.a(P.a4(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jA:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
jy:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
ju:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
jv:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
jx:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
jz:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
jw:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
q:function(a){throw H.a(H.al(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cH(b,"index",null)},
np:function(a,b,c){if(a>c)return new P.cG(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cG(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
al:function(a){return new P.aE(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.eT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hD})
z.name=""}else z.toString=H.hD
return z},
hD:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aO(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.o0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aU(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dg(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eS(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fk()
u=$.$get$fl()
t=$.$get$fm()
s=$.$get$fn()
r=$.$get$fr()
q=$.$get$fs()
p=$.$get$fp()
$.$get$fo()
o=$.$get$fu()
n=$.$get$ft()
m=v.ac(y)
if(m!=null)return z.$1(H.dg(H.H(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.dg(H.H(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eS(H.H(y),m))}}return z.$1(new H.kA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f4()
return a},
bD:function(a){var z
if(a==null)return new H.h_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h_(a)},
ns:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nE:function(a,b,c,d,e,f){H.e(a,"$isca")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nE)
a.$identity=z
return z},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.O(d).$isd){z.$reflectionInfo=d
x=H.jJ(z).r}else x=d
w=e?Object.create(new H.k6().constructor.prototype):Object.create(new H.d3(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.E()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ei(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nv,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.eb:H.d4
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ei(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i_:function(a,b,c,d){var z=H.d4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ei:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i_(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.E()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.ct("self")
$.bG=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.E()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.ct("self")
$.bG=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i0:function(a,b,c,d){var z,y
z=H.d4
y=H.eb
switch(b?-1:a){case 0:throw H.a(H.jT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i1:function(a,b){var z,y,x,w,v,u,t,s
z=$.bG
if(z==null){z=H.ct("self")
$.bG=z}y=$.ea
if(y==null){y=H.ct("receiver")
$.ea=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aF
if(typeof y!=="number")return y.E()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.E()
$.aF=y+1
return new Function(z+y+"}")()},
dQ:function(a,b,c,d,e,f,g){var z,y
z=J.bK(H.c5(b))
H.F(c)
y=!!J.O(d).$isd?J.bK(d):d
return H.i2(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aC(a,"String"))},
nq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aC(a,"double"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aC(a,"num"))},
dO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aC(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aC(a,"int"))},
hz:function(a,b){throw H.a(H.aC(a,H.H(b).substring(3)))},
nT:function(a,b){var z=J.aM(b)
throw H.a(H.hZ(a,z.u(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.hz(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.nT(a,b)},
c5:function(a){if(a==null)return a
if(!!J.O(a).$isd)return a
throw H.a(H.aC(a,"List"))},
hw:function(a,b){if(a==null)return a
if(!!J.O(a).$isd)return a
if(J.O(a)[b])return a
H.hz(a,b)},
hq:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cm:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hq(J.O(a))
if(z==null)return!1
y=H.ht(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dK)return a
$.dK=!0
try{if(H.cm(a,b))return a
z=H.co(b)
y=H.aC(a,z)
throw H.a(y)}finally{$.dK=!1}},
dT:function(a,b){if(a!=null&&!H.dP(a,b))H.r(H.aC(a,H.co(b)))
return a},
hi:function(a){var z
if(a instanceof H.m){z=H.hq(J.O(a))
if(z!=null)return H.co(z)
return"Closure"}return H.bl(a)},
nZ:function(a){throw H.a(new P.ia(H.H(a)))},
hr:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
pw:function(a,b,c){return H.bE(a["$as"+H.j(c)],H.b9(b))},
b8:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bE(a["$as"+H.j(c)],H.b9(b))
return z==null?null:z[d]},
am:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bE(a["$as"+H.j(b)],H.b9(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.b9(a)
return z==null?null:z[b]},
co:function(a){var z=H.ba(a,null)
return z},
ba:function(a,b){var z,y
H.u(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dV(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.n7(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.u(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ba(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ba(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ba(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dV:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ba(u,c)}v="<"+z.i(0)+">"
return v},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c2:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b9(a)
y=J.O(a)
if(y[b]==null)return!1
return H.hl(H.bE(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.H(b)
H.c5(c)
H.H(d)
if(a==null)return a
z=H.c2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dV(c,0,null)
throw H.a(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
pu:function(a,b,c){return a.apply(b,H.bE(J.O(b)["$as"+H.j(c)],H.b9(b)))},
hv:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="M"||a===-1||a===-2||H.hv(z)}return!1},
dP:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="M"||b===-1||b===-2||H.hv(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cm(a,b)}y=J.O(a).constructor
x=H.b9(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dP(a,b))throw H.a(H.aC(a,H.co(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="M")return!0
if('func' in c)return H.ht(a,b,c,d)
if('func' in a)return c.builtin$cls==="ca"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,x,d)
else if(H.aw(a,b,x,d))return!0
else{if(!('$is'+"bJ" in y.prototype))return!1
w=y.prototype["$as"+"bJ"]
v=H.bE(w,z?a.slice(1):null)
return H.aw(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.co(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hl(H.bE(r,z),b,u,d)},
ht:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aw(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aw(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aw(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nQ(m,b,l,d)},
nQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
pv:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nH:function(a){var z,y,x,w,v,u
z=H.H($.hs.$1(a))
y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cX[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hk.$2(a,z))
if(z!=null){y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cX[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cY(x)
$.cU[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cX[z]=x
return x}if(v==="-"){u=H.cY(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hy(a,x)
if(v==="*")throw H.a(P.ch(z))
if(init.leafTags[z]===true){u=H.cY(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hy(a,x)},
hy:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cY:function(a){return J.dW(a,!1,null,!!a.$isI)},
nP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cY(z)
else return J.dW(z,c,null,null)},
nC:function(){if(!0===$.dU)return
$.dU=!0
H.nD()},
nD:function(){var z,y,x,w,v,u,t,s
$.cU=Object.create(null)
$.cX=Object.create(null)
H.ny()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hA.$1(v)
if(u!=null){t=H.nP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ny:function(){var z,y,x,w,v,u,t
z=C.T()
z=H.bA(C.Q,H.bA(C.V,H.bA(C.x,H.bA(C.x,H.bA(C.U,H.bA(C.R,H.bA(C.S(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hs=new H.nz(v)
$.hk=new H.nA(u)
$.hA=new H.nB(t)},
bA:function(a,b){return a(b)||b},
hC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i5:{"^":"b;$ti",
i:function(a){return P.dk(this)},
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.i6()},
$isL:1},
i7:{"^":"i5;a,b,c,$ti",
gm:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bw(0,b))return
return this.dh(b)},
dh:function(a){return this.b[H.H(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dh(v),z))}}},
jI:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jJ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bK(z)
y=z[0]
x=z[1]
return new H.jI(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kn:{"^":"b;a,b,c,d,e,f",
ac:function(a){var z,y,x
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
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jo:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eS:function(a,b){return new H.jo(a,b==null?null:b.method)}}},
iM:{"^":"a9;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
dg:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iM(a,y,z?null:b.receiver)}}},
kA:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
o0:{"^":"m:19;a",
$1:function(a){if(!!J.O(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h_:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaB:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bl(this).trim()+"'"},
geK:function(){return this},
$isca:1,
geK:function(){return this}},
fa:{"^":"m;"},
k6:{"^":"fa;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d3:{"^":"fa;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bQ(this.a)
else y=typeof z!=="object"?J.c6(z):H.bQ(z)
return(y^H.bQ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
t:{
d4:function(a){return a.a},
eb:function(a){return a.c},
ct:function(a){var z,y,x,w,v
z=new H.d3("self","target","receiver","name")
y=J.bK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ko:{"^":"a9;a",
i:function(a){return this.a},
t:{
aC:function(a,b){return new H.ko("TypeError: "+H.j(P.cv(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"a9;a",
i:function(a){return this.a},
t:{
hZ:function(a,b){return new H.hY("CastError: "+H.j(P.cv(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
jS:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jT:function(a){return new H.jS(a)}}},
b6:{"^":"eJ;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gik:function(a){return this.a===0},
ga6:function(a){return new H.iS(this,[H.y(this,0)])},
bw:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dd(y,b)}else return this.ih(b)},
ih:function(a){var z=this.d
if(z==null)return!1
return this.cF(this.c4(z,this.cE(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bp(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bp(w,b)
x=y==null?null:y.b
return x}else return this.ii(b)},
ii:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c4(z,this.cE(a))
x=this.cF(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c9()
this.b=z}this.d4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c9()
this.c=y}this.d4(y,b,c)}else this.ij(b,c)},
ij:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.c9()
this.d=z}y=this.cE(a)
x=this.c4(z,y)
if(x==null)this.cg(z,y,[this.ca(a,b)])
else{w=this.cF(x,a)
if(w>=0)x[w].b=b
else x.push(this.ca(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aO(this))
z=z.c}},
d4:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bp(a,b)
if(z==null)this.cg(a,b,this.ca(b,c))
else z.b=c},
fz:function(){this.r=this.r+1&67108863},
ca:function(a,b){var z,y
z=new H.iR(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fz()
return z},
cE:function(a){return J.c6(a)&0x3ffffff},
cF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dk(this)},
bp:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fq:function(a,b){delete a[b]},
dd:function(a,b){return this.bp(a,b)!=null},
c9:function(){var z=Object.create(null)
this.cg(z,"<non-identifier-key>",z)
this.fq(z,"<non-identifier-key>")
return z},
$iseG:1},
iR:{"^":"b;a,b,0c,0d"},
iS:{"^":"et;a,$ti",
gm:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.iT(z,z.r,this.$ti)
y.c=z.e
return y}},
iT:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nz:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nA:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nB:{"^":"m:55;a",
$1:function(a){return this.a(H.H(a))}},
iK:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseU:1,
$isjK:1,
t:{
iL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nr:function(a){return J.eB(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
ji:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
n1:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.np(a,b,c))
return b},
eQ:{"^":"t;",$iseQ:1,"%":"ArrayBuffer"},
dq:{"^":"t;",$isdq:1,"%":"DataView;ArrayBufferView;dp|fU|fV|jj|fW|fX|b7"},
dp:{"^":"dq;",
gm:function(a){return a.length},
$isI:1,
$asI:I.dS},
jj:{"^":"fV;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nq(c)
H.aK(b,a,a.length)
a[b]=c},
$ascw:function(){return[P.p]},
$asz:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$isd:1,
$asd:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
b7:{"^":"fX;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aK(b,a,a.length)
a[b]=c},
$ascw:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oB:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oC:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oD:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oE:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oF:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oG:{"^":"b7;",
gm:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dr:{"^":"b7;",
gm:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
bU:function(a,b,c){return new Uint8Array(a.subarray(b,H.n1(b,c,a.length)))},
$isdr:1,
$isT:1,
"%":";Uint8Array"},
fU:{"^":"dp+z;"},
fV:{"^":"fU+cw;"},
fW:{"^":"dp+z;"},
fX:{"^":"fW+cw;"}}],["","",,P,{"^":"",
l9:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bB(new P.lb(z),1)).observe(y,{childList:true})
return new P.la(z,y,x)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
ph:[function(a){self.scheduleImmediate(H.bB(new P.lc(H.l(a,{func:1,ret:-1})),0))},"$1","ne",4,0,12],
pi:[function(a){self.setImmediate(H.bB(new P.ld(H.l(a,{func:1,ret:-1})),0))},"$1","nf",4,0,12],
pj:[function(a){P.dx(C.q,H.l(a,{func:1,ret:-1}))},"$1","ng",4,0,12],
dx:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a5(a.a,1000)
return P.mk(z<0?0:z,b)},
ff:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bs]})
z=C.e.a5(a.a,1000)
return P.ml(z<0?0:z,b)},
na:function(a,b){if(H.cm(a,{func:1,args:[P.b,P.aB]}))return b.iL(a,null,P.b,P.aB)
if(H.cm(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cr(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n9:function(){var z,y
for(;z=$.bz,z!=null;){$.c0=null
y=z.b
$.bz=y
if(y==null)$.c_=null
z.a.$0()}},
pt:[function(){$.dL=!0
try{P.n9()}finally{$.c0=null
$.dL=!1
if($.bz!=null)$.$get$dF().$1(P.hm())}},"$0","hm",0,0,3],
hh:function(a){var z=new P.fL(H.l(a,{func:1,ret:-1}))
if($.bz==null){$.c_=z
$.bz=z
if(!$.dL)$.$get$dF().$1(P.hm())}else{$.c_.b=z
$.c_=z}},
nd:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bz
if(z==null){P.hh(a)
$.c0=$.c_
return}y=new P.fL(a)
x=$.c0
if(x==null){y.b=z
$.c0=y
$.bz=y}else{y.b=x.b
x.b=y
$.c0=y
if(y.b==null)$.c_=y}},
nU:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cT(null,null,C.j,a)
return}y.toString
P.cT(null,null,y,H.l(y.cm(a),z))},
fe:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dx(a,b)}return P.dx(a,H.l(y.cm(b),z))},
kk:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.ff(a,b)}x=y.dJ(b,P.bs)
$.Y.toString
return P.ff(a,H.l(x,z))},
cS:function(a,b,c,d,e){var z={}
z.a=d
P.nd(new P.nb(z,e))},
hd:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
he:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
nc:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cT:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cm(d):c.hU(d,-1)
P.hh(d)},
lb:{"^":"m:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
la:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lc:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ld:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h3:{"^":"b;a,0b,c",
fc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.mn(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.mm(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbs:1,
t:{
mk:function(a,b){var z=new P.h3(!0,0)
z.fc(a,b)
return z},
ml:function(a,b){var z=new P.h3(!1,0)
z.fd(a,b)
return z}}},
mn:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mm:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eY(w,x)}z.c=y
this.d.$1(z)}},
bx:{"^":"b;0a,b,c,d,e,$ti",
ir:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.l(this.d,{func:1,ret:P.U,args:[P.b]}),a.a,P.U,P.b)},
ig:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cm(z,{func:1,args:[P.b,P.aB]}))return H.dT(w.iU(z,a.a,a.b,null,y,P.aB),x)
else return H.dT(w.cT(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b0:{"^":"b;dt:a<,b,0hb:c<,$ti",
ez:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.na(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b0(0,$.Y,[c])
w=b==null?1:3
this.d5(new P.bx(x,w,a,b,[z,c]))
return x},
iY:function(a,b){return this.ez(a,null,b)},
d5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbx")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb0")
z=y.a
if(z<4){y.d5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cT(null,null,z,H.l(new P.lt(this,a),{func:1,ret:-1}))}},
dm:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbx")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb0")
y=u.a
if(y<4){u.dm(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cT(null,null,y,H.l(new P.ly(z,this),{func:1,ret:-1}))}},
cc:function(){var z=H.e(this.c,"$isbx")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d9:function(a){var z,y,x,w
z=H.y(this,0)
H.dT(a,{futureOr:1,type:z})
y=this.$ti
x=H.c2(a,"$isbJ",y,"$asbJ")
if(x){z=H.c2(a,"$isb0",y,null)
if(z)P.fP(a,this)
else P.lu(a,this)}else{w=this.cc()
H.A(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
c_:[function(a,b){var z
H.e(b,"$isaB")
z=this.cc()
this.a=8
this.c=new P.ap(a,b)
P.bW(this,z)},function(a){return this.c_(a,null)},"j7","$2","$1","gfl",4,2,51],
$isbJ:1,
t:{
lu:function(a,b){var z,y,x
b.a=1
try{a.ez(new P.lv(b),new P.lw(b),null)}catch(x){z=H.ab(x)
y=H.bD(x)
P.nU(new P.lx(b,z,y))}},
fP:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb0")
if(z>=4){y=b.cc()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.e(b.c,"$isbx")
b.a=2
b.c=a
a.dm(y)}},
bW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bW(z.a,b)}y=z.a
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
if(p){H.e(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cS(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lA(x,b,r).$0()}else if((y&2)!==0)new P.lz(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.O(y).$isbJ){if(y.a>=4){n=H.e(t.c,"$isbx")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fP(y,t)
return}}m=b.b
n=H.e(m.c,"$isbx")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
lt:{"^":"m:0;a,b",
$0:function(){P.bW(this.a,this.b)}},
ly:{"^":"m:0;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
lv:{"^":"m:25;a",
$1:function(a){var z=this.a
z.a=0
z.d9(a)}},
lw:{"^":"m:50;a",
$2:function(a,b){this.a.c_(a,H.e(b,"$isaB"))},
$1:function(a){return this.$2(a,null)}},
lx:{"^":"m:0;a,b,c",
$0:function(){this.a.c_(this.b,this.c)}},
lB:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ex(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bD(v)
if(this.d){w=H.e(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.O(z).$isbJ){if(z instanceof P.b0&&z.gdt()>=4){if(z.gdt()===8){w=this.b
w.b=H.e(z.ghb(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iY(new P.lC(t),null)
w.a=!1}}},
lC:{"^":"m:48;a",
$1:function(a){return this.a}},
lA:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cT(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bD(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lz:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isap")
w=this.c
if(w.ir(z)&&w.e!=null){v=this.b
v.b=w.ig(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bD(u)
w=H.e(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fL:{"^":"b;a,0b"},
dv:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b0(0,$.Y,[P.n])
z.a=0
this.iq(new P.k9(z,this),!0,new P.ka(z,y),y.gfl())
return y}},
k9:{"^":"m;a,b",
$1:function(a){H.A(a,H.am(this.b,"dv",0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.am(this.b,"dv",0)]}}},
ka:{"^":"m:0;a,b",
$0:function(){this.b.d9(this.a.a)}},
f7:{"^":"b;$ti"},
k8:{"^":"b;"},
bs:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa9:1},
mQ:{"^":"b;",$ispg:1},
nb:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lW:{"^":"mQ;",
iV:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hd(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cS(null,null,this,z,H.e(y,"$isaB"))}},
iW:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.he(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cS(null,null,this,z,H.e(y,"$isaB"))}},
hU:function(a,b){return new P.lY(this,H.l(a,{func:1,ret:b}),b)},
cm:function(a){return new P.lX(this,H.l(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.lZ(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ex:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hd(null,null,this,a,b)},
cT:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.he(null,null,this,a,b,c,d)},
iU:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.nc(null,null,this,a,b,c,d,e,f)},
iL:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lY:{"^":"m;a,b,c",
$0:function(){return this.a.ex(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lX:{"^":"m:3;a,b",
$0:function(){return this.a.iV(this.b)}},
lZ:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iW(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iU:function(a,b,c,d,e){return new H.b6(0,0,[d,e])},
iV:function(a,b,c){H.c5(a)
return H.u(H.ns(a,new H.b6(0,0,[b,c])),"$iseG",[b,c],"$aseG")},
di:function(a,b){return new H.b6(0,0,[a,b])},
ce:function(a,b,c,d){return new P.lJ(0,0,[d])},
iF:function(a,b,c){var z,y
if(P.dM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c1()
C.a.h(y,a)
try{P.n8(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f8(b,H.hw(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
db:function(a,b,c){var z,y,x
if(P.dM(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c1()
C.a.h(y,a)
try{x=z
x.a=P.f8(x.gaQ(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaQ()+c
y=z.gaQ()
return y.charCodeAt(0)==0?y:y},
dM:function(a){var z,y
for(z=0;y=$.$get$c1(),z<y.length;++z)if(a===y[z])return!0
return!1},
n8:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.D();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iW:function(a,b,c){var z=P.iU(null,null,null,b,c)
a.K(0,new P.iX(z,b,c))
return z},
eH:function(a,b){var z,y
z=P.ce(null,null,null,b)
for(y=J.b2(a);y.D();)z.h(0,H.A(y.gO(y),b))
return z},
dk:function(a){var z,y,x
z={}
if(P.dM(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c1(),a)
x=y
x.a=x.gaQ()+"{"
z.a=!0
J.e1(a,new P.j1(z,y))
z=y
z.a=z.gaQ()+"}"}finally{z=$.$get$c1()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaQ()
return z.charCodeAt(0)==0?z:z},
lJ:{"^":"lD;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){var z=new P.fT(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
X:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscP")!=null}else{y=this.fm(b)
return y}},
fm:function(a){var z=this.d
if(z==null)return!1
return this.c2(this.di(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dH()
this.b=z}return this.d7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dH()
this.c=y}return this.d7(y,b)}else return this.fe(0,b)},
fe:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dH()
this.d=z}y=this.da(b)
x=z[y]
if(x==null)z[y]=[this.bZ(b)]
else{if(this.c2(x,b)>=0)return!1
x.push(this.bZ(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dn(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dn(this.c,b)
else return this.h4(0,b)},
h4:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.di(z,b)
x=this.c2(y,b)
if(x<0)return!1
this.dv(y.splice(x,1)[0])
return!0},
d7:function(a,b){H.A(b,H.y(this,0))
if(H.e(a[b],"$iscP")!=null)return!1
a[b]=this.bZ(b)
return!0},
dn:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscP")
if(z==null)return!1
this.dv(z)
delete a[b]
return!0},
d8:function(){this.r=this.r+1&67108863},
bZ:function(a){var z,y
z=new P.cP(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d8()
return z},
dv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d8()},
da:function(a){return J.c6(a)&0x3ffffff},
di:function(a,b){return a[this.da(b)]},
c2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
t:{
dH:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cP:{"^":"b;a,0b,0c"},
fT:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lD:{"^":"jU;"},
iX:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cA:{"^":"lK;",$isi:1,$isd:1},
z:{"^":"b;$ti",
gZ:function(a){return new H.dj(a,this.gm(a),0,[H.b8(this,a,"z",0)])},
I:function(a,b){return this.k(a,b)},
j_:function(a,b){var z,y,x
z=H.c([],[H.b8(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.p(z,y,this.k(a,y));++y}return z},
iZ:function(a){return this.j_(a,!0)},
aK:function(a,b,c,d){var z
H.A(d,H.b8(this,a,"z",0))
P.aT(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.db(a,"[","]")}},
eJ:{"^":"ai;"},
j1:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b8(this,a,"ai",0),H.b8(this,a,"ai",1)]})
for(z=J.b2(this.ga6(a));z.D();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gm:function(a){return J.ao(this.ga6(a))},
i:function(a){return P.dk(a)},
$isL:1},
ms:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
j2:{"^":"b;$ti",
k:function(a,b){return J.e0(this.a,b)},
p:function(a,b,c){J.d_(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
K:function(a,b){J.e1(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isL:1},
fB:{"^":"mt;a,$ti"},
jW:{"^":"b;$ti",
ax:function(a,b){var z
for(z=J.b2(H.u(b,"$isi",this.$ti,"$asi"));z.D();)this.h(0,z.gO(z))},
i:function(a){return P.db(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e5("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=new P.fT(this,this.r,this.$ti),z.c=this.e,y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jU:{"^":"jW;"},
lK:{"^":"b+z;"},
mt:{"^":"j2+ms;$ti"}}],["","",,P,{"^":"",hV:{"^":"c7;a",
iu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aT(c,d,b.length,null,null,null)
z=$.$get$fN()
if(typeof d!=="number")return H.q(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cW(C.b.H(b,s))
o=H.cW(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.u(b,x,y)
w.a+=H.bR(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.e8(b,u,d,v,t,k)
else{j=C.e.bm(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b0(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e8(b,u,d,v,t,i)
else{j=C.e.bm(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b0(b,d,d,j===2?"==":"=")}return b},
$asc7:function(){return[[P.d,P.n],P.h]},
t:{
e8:function(a,b,c,d,e,f){if(C.e.bm(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},hW:{"^":"b4;a",
$asb4:function(){return[[P.d,P.n],P.h]}},c7:{"^":"b;$ti"},b4:{"^":"k8;$ti"},io:{"^":"c7;",
$asc7:function(){return[P.h,[P.d,P.n]]}},iC:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iB:{"^":"b4;a",
fn:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.an("")
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hQ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb4:function(){return[P.h,P.h]}},kO:{"^":"io;a",
gi6:function(){return C.L}},kV:{"^":"b4;",
b7:function(a,b,c){var z,y,x,w
z=a.length
P.aT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mO(0,0,x)
if(w.ft(a,b,z)!==z)w.dz(J.hJ(a,z-1),0)
return C.a1.bU(x,0,w.b)},
cs:function(a){return this.b7(a,0,null)},
$asb4:function(){return[P.h,[P.d,P.n]]}},mO:{"^":"b;a,b,c",
dz:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
ft:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dz(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}},kP:{"^":"b4;a",
b7:function(a,b,c){var z,y,x,w,v
H.u(a,"$isd",[P.n],"$asd")
z=P.kQ(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aT(b,c,y,null,null,null)
x=new P.an("")
w=new P.mL(!1,x,!0,0,0,0)
w.b7(a,b,y)
w.ia(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cs:function(a){return this.b7(a,0,null)},
$asb4:function(){return[[P.d,P.n],P.h]},
t:{
kQ:function(a,b,c,d){H.u(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.kR(!1,b,c,d)
return},
kR:function(a,b,c,d){var z,y,x
z=$.$get$fG()
if(z==null)return
y=0===c
if(y&&!0)return P.dC(z,b)
x=b.length
d=P.aT(c,d,x,null,null,null)
if(y&&d===x)return P.dC(z,b)
return P.dC(z,b.subarray(c,d))},
dC:function(a,b){if(P.kT(b))return
return P.kU(a,b)},
kU:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kT:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kS:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mL:{"^":"b;a,b,c,d,e,f",
ia:function(a,b,c){var z
H.u(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mN(c)
v=new P.mM(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bS()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.e.bj(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a1("Overlong encoding of 0x"+C.e.bj(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.e.bj(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bR(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cY()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.e.bj(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.e.bj(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mN:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bS()
if((w&127)!==w)return x-b}return z-b}},mM:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cg(this.d,a,b)}}}],["","",,P,{"^":"",
cn:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jB(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
iq:function(a){var z=J.O(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bl(a)+"'"},
iY:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iH(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.u(z,"$isd",[d],"$asd")},
iZ:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.D();)C.a.h(y,H.A(x.gO(x),c))
if(b)return y
return H.u(J.bK(y),"$isd",z,"$asd")},
cg:function(a,b,c){var z,y
z=P.n
H.u(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aT(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.eX(z?C.a.bU(a,b,c):a)}if(!!J.O(a).$isdr)return H.jD(a,b,P.aT(b,c,a.length,null,null,null))
return P.kb(a,b,c)},
kb:function(a,b,c){var z,y,x,w
H.u(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a4(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a4(c,b,J.ao(a),null,null))
y=J.b2(a)
for(x=0;x<b;++x)if(!y.D())throw H.a(P.a4(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.D())throw H.a(P.a4(c,b,x,null,null))
w.push(y.gO(y))}return H.eX(w)},
jL:function(a,b,c){return new H.iK(a,H.iL(a,!1,!0,!1))},
fD:function(){var z=H.jt()
if(z!=null)return P.kG(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iq(a)},
v:function(a){return new P.fO(a)},
j_:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dX:function(a){H.nS(a)},
kG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fC(b>0||c<c?C.b.u(a,b,c):a,5,null).geE()
else if(y===32)return P.fC(C.b.u(a,z,c),0,null).geE()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hf(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.j1()
if(v>=b)if(P.hf(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.S()
if(typeof r!=="number")return H.q(r)
if(q<r)r=q
if(typeof s!=="number")return s.S()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.S()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.S()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.b0(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.b0(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.b0(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
v-=b
u-=b
t-=b
z=4+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="https"}else o=null
p=!0}}}else o=null
if(p){if(b>0||c<a.length){a=C.b.u(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.m4(a,v,u,t,s,r,q,o)}return P.mu(a,b,c,v,u,t,s,r,q,o)},
fF:function(a,b){var z=P.h
return C.a.ib(H.c(a.split("&"),[z]),P.di(z,z),new P.kJ(b),[P.L,P.h,P.h])},
kE:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kF(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cn(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.cY()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cn(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.cY()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kH(a)
y=new P.kI(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaB(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kE(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.e.aU(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n2:function(){var z,y,x,w,v
z=P.j_(22,new P.n4(),!0,P.T)
y=new P.n3(z)
x=new P.n5()
w=new P.n6()
v=H.e(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isT"),"]",5)
v=H.e(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isT"),"az",21)
v=H.e(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hf:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isd",[P.n],"$asd")
z=$.$get$hg()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
U:{"^":"b;"},
"+bool":0,
aq:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.e.aU(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ic(H.jA(this))
y=P.c9(H.jy(this))
x=P.c9(H.ju(this))
w=P.c9(H.jv(this))
v=P.c9(H.jx(this))
u=P.c9(H.jz(this))
t=P.id(H.jw(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
ic:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
id:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c9:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a5;"},
"+double":0,
be:{"^":"b;a",
j:function(a,b){return new P.be(C.e.af(this.a*b))},
S:function(a,b){return C.e.S(this.a,H.e(b,"$isbe").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ij()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.e.a5(y,6e7)%60)
w=z.$1(C.e.a5(y,1e6)%60)
v=new P.ii().$1(y%1e6)
return""+C.e.a5(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
es:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ii:{"^":"m:31;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ij:{"^":"m:31;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
eT:{"^":"a9;",
i:function(a){return"Throw of null."}},
aE:{"^":"a9;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.cv(this.b)
return w+v+": "+H.j(u)},
t:{
cq:function(a){return new P.aE(!1,null,null,a)},
cr:function(a,b,c){return new P.aE(!0,a,b,c)},
e5:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
cG:{"^":"aE;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cH:function(a,b,c){return new P.cG(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.a4(b,a,c,"end",f))
return b}return c}}},
iD:{"^":"aE;e,m:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.hF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.iD(b,z,!0,a,c,"Index out of range")}}},
kC:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kC(a)}}},
kz:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ch:function(a){return new P.kz(a)}}},
du:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
t:{
f6:function(a){return new P.du(a)}}},
i4:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cv(z))+"."},
t:{
aO:function(a){return new P.i4(a)}}},
jp:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
f4:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
ia:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fO:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
ix:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Y(w,s)
if(r===10||r===13){q=s
break}}if(q-u>78)if(x-u<75){p=u+75
o=u
n=""
m="..."}else{if(q-x<75){o=q-75
p=q
m=""}else{o=x-36
p=x+36
m="..."}n="..."}else{p=q
o=u
n=""
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
t:{
a1:function(a,b,c){return new P.ix(a,b,c)}}},
ca:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
cV:["eT",function(a,b){var z=H.am(this,"i",0)
return new H.dE(this,H.l(b,{func:1,ret:P.U,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gZ(this)
for(y=0;z.D();)++y
return y},
gaN:function(a){var z,y
z=this.gZ(this)
if(!z.D())throw H.a(H.dc())
y=z.gO(z)
if(z.D())throw H.a(H.iG())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e5("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.D();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iF(this,"(",")")}},
dd:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
L:{"^":"b;$ti"},
M:{"^":"b;",
gV:function(a){return P.b.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gV:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.i(this)}},
aB:{"^":"b;"},
h:{"^":"b;",$iseU:1},
"+String":0,
an:{"^":"b;aQ:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isp0:1,
t:{
f8:function(a,b,c){var z=J.b2(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.D())}else{a+=H.j(z.gO(z))
for(;z.D();)a=a+c+H.j(z.gO(z))}return a}}},
kJ:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.u(a,"$isL",[z,z],"$asL")
H.H(b)
y=J.aM(b).ee(b,"=")
if(y===-1){if(b!=="")J.d_(a,P.dJ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.au(b,y+1)
z=this.a
J.d_(a,P.dJ(x,0,x.length,z,!0),P.dJ(w,0,w.length,z,!0))}return a}},
kF:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
kH:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kI:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cn(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.S()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cQ:{"^":"b;bT:a<,b,c,d,ep:e>,f,r,0x,0y,0z,0Q,0ch",
geF:function(){return this.b},
gcD:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbO:function(a){var z=this.d
if(z==null)return P.h4(this.a)
return z},
gcO:function(a){var z=this.f
return z==null?"":z},
ge9:function(){var z=this.r
return z==null?"":z},
cS:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isL",[P.h,null],"$asL")
i=this.a
z=i==="file"
j=this.b
f=this.d
y=this.c
if(y!=null)c=y
else if(j.length!==0||f!=null||z)c=""
d=this.e
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dI(g,0,0,h)
return new P.cQ(i,j,c,f,d,g,this.r)},
ev:function(a,b){return this.cS(a,null,null,null,null,null,null,b,null,null)},
gcP:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fB(P.fF(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gea:function(){return this.c!=null},
ged:function(){return this.f!=null},
geb:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdB){y=this.a
x=b.gbT()
if(y==null?x==null:y===x)if(this.c!=null===b.gea()){y=this.b
x=b.geF()
if(y==null?x==null:y===x){y=this.gcD(this)
x=z.gcD(b)
if(y==null?x==null:y===x){y=this.gbO(this)
x=z.gbO(b)
if(y==null?x==null:y===x)if(this.e===z.gep(b)){y=this.f
x=y==null
if(!x===b.ged()){if(x)y=""
if(y===z.gcO(b)){z=this.r
y=z==null
if(!y===b.geb()){if(y)z=""
z=z===b.ge9()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.b.gV(this.i(0))
this.z=z}return z},
$isdB:1,
t:{
cl:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$h9().b
if(typeof b!=="string")H.r(H.al(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.am(c,"c7",0))
y=c.gi6().cs(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bR(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mF(a,b,d)
else{if(d===b)P.bX(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mG(a,z,e-1):""
x=P.mz(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.mC(P.cn(C.b.u(a,w,g),new P.mv(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mA(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.S()
t=h<i?P.dI(a,h+1,i,null):null
return new P.cQ(j,y,x,v,u,t,i<c?P.my(a,i+1,c):null)},
h4:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bX:function(a,b,c){throw H.a(P.a1(c,a,b))},
mC:function(a,b){if(a!=null&&a===P.h4(b))return
return a},
mz:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.Y(a,z)!==93)P.bX(a,b,"Missing end `]` to match `[` in host")
P.fE(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fE(a,b,c)
return"["+a+"]"}return P.mI(a,b,c)},
mI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.hb(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bX(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h5(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mF:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h7(C.b.H(a,b)))P.bX(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bX(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mw(y?a.toLowerCase():a)},
mw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mG:function(a,b,c){return P.bY(a,b,c,C.Z)},
mA:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bY(a,b,c,C.D):C.w.jG(d,new P.mB(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.mH(w,e,f)},
mH:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.mJ(a,!z||c)
return P.mK(a)},
dI:function(a,b,c,d){var z,y
z={}
H.u(d,"$isL",[P.h,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.cq("Both query and queryParameters specified"))
return P.bY(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.mD(new P.mE(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
my:function(a,b,c){return P.bY(a,b,c,C.n)},
hb:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cW(y)
v=H.cW(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aU(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bR(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
h5:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.hj(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cg(y,0,null)},
bY:function(a,b,c,d){var z=P.ha(a,b,c,H.u(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.u(a,b,c):z},
ha:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.S()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hb(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bX(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h5(v)}}if(w==null)w=new P.an("")
w.a+=C.b.u(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.S()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h8:function(a){if(C.b.a3(a,"."))return!0
return C.b.ee(a,"/.")!==-1},
mK:function(a){var z,y,x,w,v,u,t
if(!P.h8(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.S(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mJ:function(a,b){var z,y,x,w,v,u
if(!P.h8(a))return!b?P.h6(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaB(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaB(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h6(z[0]))}return C.a.n(z,"/")},
h6:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h7(J.hG(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.au(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mx:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cq("Invalid URL encoding"))}}return z},
dJ:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c4(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.w(y.u(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.cq("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cq("Truncated URI"))
C.a.h(u,P.mx(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isd",[P.n],"$asd")
return new P.kP(!1).cs(u)},
h7:function(a){var z=a|32
return 97<=z&&z<=122}}},
mv:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
mB:{"^":"m:28;",
$1:function(a){return P.cl(C.a_,a,C.k,!1)}},
mE:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cl(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cl(C.p,b,C.k,!0))}}},
mD:{"^":"m:40;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b2(H.hw(b,"$isi")),y=this.a;z.D();)y.$2(a,H.H(z.gO(z)))}},
kD:{"^":"b;a,b,c",
geE:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.ef(y,"?",z)
w=y.length
if(x>=0){v=P.bY(y,x+1,w,C.n)
w=x}else v=null
z=new P.li(this,"data",null,null,null,P.bY(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaB(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iu(0,a,s,y)
else{r=P.ha(a,s,y,C.n,!0)
if(r!=null)a=C.b.b0(a,s,y,r)}return new P.kD(a,z,c)}}},
n4:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
n3:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hK(z,0,96,b)
return z}},
n5:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
n6:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m4:{"^":"b;a,b,c,d,e,f,r,x,0y",
gea:function(){return this.c>0},
gec:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
ged:function(){var z=this.f
if(typeof z!=="number")return z.S()
return z<this.r},
geb:function(){return this.r<this.a.length},
gdj:function(){return this.b===4&&C.b.a3(this.a,"http")},
gdk:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbT:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdj()){this.x="http"
z="http"}else if(this.gdk()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
geF:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcD:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbO:function(a){var z
if(this.gec()){z=this.d
if(typeof z!=="number")return z.E()
return P.cn(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdj())return 80
if(this.gdk())return 443
return 0},
gep:function(a){return C.b.u(this.a,this.e,this.f)},
gcO:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.S()
return z<y?C.b.u(this.a,z+1,y):""},
ge9:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.au(y,z+1):""},
gcP:function(){var z=this.f
if(typeof z!=="number")return z.S()
if(z>=this.r)return C.a0
z=P.h
return new P.fB(P.fF(this.gcO(this),C.k),[z,z])},
cS:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isL",[P.h,null],"$asL")
i=this.gbT()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.gec()?this.gbO(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dI(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.au(y,x+1)
return new P.cQ(i,j,c,f,d,g,b)},
ev:function(a,b){return this.cS(a,null,null,null,null,null,null,b,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.b.gV(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdB)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdB:1},
li:{"^":"cQ;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e4:function(a){var z=document.createElement("a")
return z},
eg:function(a,b){var z=document.createElement("canvas")
return z},
ik:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).am(z,a,b,c)
y.toString
z=W.G
z=new H.dE(new W.av(y),H.l(new W.il(),{func:1,ret:P.U,args:[z]}),[z])
return H.e(z.gaN(z),"$isV")},
im:function(a){H.e(a,"$isaf")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iE:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseA")
try{J.hP(z,a)}catch(x){H.ab(x)}return z},
cN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fS:function(a,b,c,d){var z,y
z=W.cN(W.cN(W.cN(W.cN(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hj:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dJ(a,b)},
a0:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
o1:{"^":"t;0m:length=","%":"AccessibleNodeList"},
o2:{"^":"a0;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o3:{"^":"a0;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e9:{"^":"a0;",$ise9:1,"%":"HTMLBaseElement"},
d2:{"^":"t;",$isd2:1,"%":";Blob"},
cs:{"^":"a0;",$iscs:1,"%":"HTMLBodyElement"},
o9:{"^":"a0;0a2:type}","%":"HTMLButtonElement"},
d5:{"^":"a0;",
cX:function(a,b,c){var z=a.getContext(b,P.nh(c,null))
return z},
$isd5:1,
"%":"HTMLCanvasElement"},
ob:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
od:{"^":"i9;0m:length=","%":"CSSPerspective"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oe:{"^":"lh;0m:length=",
eM:function(a,b){var z=a.getPropertyValue(this.fi(a,b))
return z==null?"":z},
fi:function(a,b){var z,y
z=$.$get$ek()
y=z[b]
if(typeof y==="string")return y
y=this.hk(a,b)
z[b]=y
return y},
hk:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ie()+b
if(z in a)return z
return b},
gcn:function(a){return a.bottom},
gaA:function(a){return a.height},
gaY:function(a){return a.left},
gbg:function(a){return a.right},
gbk:function(a){return a.top},
gaC:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i8:{"^":"b;",
gaY:function(a){return this.eM(a,"left")}},
el:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i9:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
of:{"^":"el;0m:length=","%":"CSSTransformValue"},
og:{"^":"el;0m:length=","%":"CSSUnparsedValue"},
oh:{"^":"t;0m:length=","%":"DataTransferItemList"},
bd:{"^":"a0;",$isbd:1,"%":"HTMLDivElement"},
oi:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
oj:{"^":"lk;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.u(c,"$isae",[P.a5],"$asae")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[[P.ae,P.a5]]},
$asz:function(){return[[P.ae,P.a5]]},
$isi:1,
$asi:function(){return[[P.ae,P.a5]]},
$isd:1,
$asd:function(){return[[P.ae,P.a5]]},
$asD:function(){return[[P.ae,P.a5]]},
"%":"ClientRectList|DOMRectList"},
ih:{"^":"t;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaC(a))+" x "+H.j(this.gaA(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c2(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=J.aD(b)
return a.left===z.gaY(b)&&a.top===z.gbk(b)&&this.gaC(a)===z.gaC(b)&&this.gaA(a)===z.gaA(b)},
gV:function(a){return W.fS(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaC(a)&0x1FFFFFFF,this.gaA(a)&0x1FFFFFFF)},
gcn:function(a){return a.bottom},
gaA:function(a){return a.height},
gaY:function(a){return a.left},
gbg:function(a){return a.right},
gbk:function(a){return a.top},
gaC:function(a){return a.width},
$isae:1,
$asae:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
ok:{"^":"lm;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[P.h]},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asD:function(){return[P.h]},
"%":"DOMStringList"},
ol:{"^":"t;0m:length=","%":"DOMTokenList"},
lg:{"^":"cA;dg:a<,b",
gm:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isV")},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.iZ(this)
return new J.ax(z,z.length,0,[H.y(z,0)])},
aK:function(a,b,c,d){throw H.a(P.ch(null))},
$asz:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"G;0iX:tagName=",
ghT:function(a){return new W.ln(a)},
gcr:function(a){return new W.lg(a,a.children)},
gdK:function(a){return P.jH(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
am:["bV",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ev
if(z==null){z=H.c([],[W.aI])
y=new W.eR(z)
C.a.h(z,W.fQ(null))
C.a.h(z,W.h0())
$.ev=y
d=y}else d=z
z=$.eu
if(z==null){z=new W.hc(d)
$.eu=z
c=z}else{z.a=d
c=z}}if($.aP==null){z=document
y=z.implementation.createHTMLDocument("")
$.aP=y
$.d8=y.createRange()
y=$.aP
y.toString
y=y.createElement("base")
H.e(y,"$ise9")
y.href=z.baseURI
$.aP.head.appendChild(y)}z=$.aP
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscs")}z=$.aP
if(!!this.$iscs)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aP.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Y,a.tagName)){$.d8.selectNodeContents(x)
w=$.d8.createContextualFragment(b)}else{x.innerHTML=b
w=$.aP.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aP.body
if(x==null?z!=null:x!==z)J.e3(x)
c.cZ(w)
document.adoptNode(w)
return w},function(a,b,c){return this.am(a,b,c,null)},"i0",null,null,"gjE",5,5,null],
eQ:function(a,b,c,d){a.textContent=null
a.appendChild(this.am(a,b,c,d))},
eP:function(a,b){return this.eQ(a,b,null,null)},
$isV:1,
"%":";Element"},
il:{"^":"m:24;",
$1:function(a){return!!J.O(H.e(a,"$isG")).$isV}},
om:{"^":"a0;0a2:type}","%":"HTMLEmbedElement"},
ah:{"^":"t;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"t;",
dC:["eR",function(a,b,c,d){H.l(c,{func:1,args:[W.ah]})
if(c!=null)this.ff(a,b,c,!1)}],
ff:function(a,b,c,d){return a.addEventListener(b,H.bB(H.l(c,{func:1,args:[W.ah]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fY|fZ|h1|h2"},
b5:{"^":"d2;",$isb5:1,"%":"File"},
ew:{"^":"ls;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isb5")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.b5]},
$asz:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$isew:1,
$asD:function(){return[W.b5]},
"%":"FileList"},
on:{"^":"af;0m:length=","%":"FileWriter"},
oo:{"^":"a0;0m:length=","%":"HTMLFormElement"},
bg:{"^":"t;",$isbg:1,"%":"Gamepad"},
op:{"^":"t;0m:length=","%":"History"},
oq:{"^":"lF;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ez:{"^":"t;",$isez:1,"%":"ImageData"},
eA:{"^":"a0;0a2:type}",$iseA:1,"%":"HTMLInputElement"},
bL:{"^":"dy;",$isbL:1,"%":"KeyboardEvent"},
ou:{"^":"a0;0a2:type}","%":"HTMLLinkElement"},
ov:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
ow:{"^":"t;0m:length=","%":"MediaList"},
ox:{"^":"af;",
dC:function(a,b,c,d){H.l(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.eR(a,b,c,!1)},
"%":"MessagePort"},
oy:{"^":"lL;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jf(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"MIDIInputMap"},
jf:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oz:{"^":"lM;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jg(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jg:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
oA:{"^":"lO;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbj")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"MimeTypeArray"},
az:{"^":"dy;",$isaz:1,"%":"PointerEvent;DragEvent|MouseEvent"},
av:{"^":"cA;a",
gaN:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f6("No elements"))
if(y>1)throw H.a(P.f6("More than one element"))
return z.firstChild},
ax:function(a,b){var z,y,x,w
H.u(b,"$isi",[W.G],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.e(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.ex(z,z.length,-1,[H.b8(C.a2,z,"D",0)])},
aK:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.G]},
$asi:function(){return[W.G]},
$asd:function(){return[W.G]}},
G:{"^":"af;0cN:previousSibling=",
iM:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iQ:function(a,b){var z,y
try{z=a.parentNode
J.hH(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eS(a):z},
h7:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oH:{"^":"t;",
iJ:[function(a){return a.previousNode()},"$0","gcN",1,0,26],
"%":"NodeIterator"},
jk:{"^":"lQ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
oK:{"^":"a0;0a2:type}","%":"HTMLOListElement"},
oL:{"^":"a0;0a2:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oO:{"^":"lU;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbk")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"PluginArray"},
oQ:{"^":"t;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oR:{"^":"m_;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jR(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jR:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oT:{"^":"a0;0a2:type}","%":"HTMLScriptElement"},
oU:{"^":"a0;0m:length=","%":"HTMLSelectElement"},
bm:{"^":"af;",$isbm:1,"%":"SourceBuffer"},
oV:{"^":"fZ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbm")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"SourceBufferList"},
oW:{"^":"a0;0a2:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
oX:{"^":"m6;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asD:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
oZ:{"^":"m9;",
k:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.k7(z))
return z},
gm:function(a){return a.length},
$asai:function(){return[P.h,P.h]},
$isL:1,
$asL:function(){return[P.h,P.h]},
"%":"Storage"},
k7:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p1:{"^":"a0;0a2:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
dw:{"^":"a0;",$isdw:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kc:{"^":"a0;",
am:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
z=W.ik("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.av(y).ax(0,new W.av(z))
return y},
"%":"HTMLTableElement"},
p3:{"^":"a0;",
am:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.am(z.createElement("table"),b,c,d)
z.toString
z=new W.av(z)
x=z.gaN(z)
x.toString
z=new W.av(x)
w=z.gaN(z)
y.toString
w.toString
new W.av(y).ax(0,new W.av(w))
return y},
"%":"HTMLTableRowElement"},
p4:{"^":"a0;",
am:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.am(z.createElement("table"),b,c,d)
z.toString
z=new W.av(z)
x=z.gaN(z)
y.toString
x.toString
new W.av(y).ax(0,new W.av(x))
return y},
"%":"HTMLTableSectionElement"},
fb:{"^":"a0;",$isfb:1,"%":"HTMLTemplateElement"},
bq:{"^":"af;",$isbq:1,"%":"TextTrack"},
br:{"^":"af;",$isbr:1,"%":"TextTrackCue|VTTCue"},
p6:{"^":"mj;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asD:function(){return[W.br]},
"%":"TextTrackCueList"},
p7:{"^":"h2;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asD:function(){return[W.bq]},
"%":"TextTrackList"},
p8:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"dy;",$isbu:1,"%":"TouchEvent"},
p9:{"^":"mp;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asD:function(){return[W.bt]},
"%":"TouchList"},
pa:{"^":"t;0m:length=","%":"TrackDefaultList"},
pc:{"^":"t;",
iJ:[function(a){return a.previousNode()},"$0","gcN",1,0,26],
"%":"TreeWalker"},
dy:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pe:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
pf:{"^":"af;0m:length=","%":"VideoTrackList"},
bV:{"^":"az;",
gi3:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gi2:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
l8:{"^":"af;",
h8:function(a,b){return a.requestAnimationFrame(H.bB(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fs:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fM:{"^":"G;",$isfM:1,"%":"Attr"},
pk:{"^":"mS;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbc")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bc]},
$asz:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"CSSRuleList"},
pl:{"^":"ih;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c2(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=J.aD(b)
return a.left===z.gaY(b)&&a.top===z.gbk(b)&&a.width===z.gaC(b)&&a.height===z.gaA(b)},
gV:function(a){return W.fS(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaA:function(a){return a.height},
gaC:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pn:{"^":"mU;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbg")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bg]},
$asz:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"GamepadList"},
pq:{"^":"mW;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pr:{"^":"mY;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbo")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
ps:{"^":"n_;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isI:1,
$asI:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asD:function(){return[W.bp]},
"%":"StyleSheetList"},
le:{"^":"eJ;dg:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga6(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga6:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfM")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asai:function(){return[P.h,P.h]},
$asL:function(){return[P.h,P.h]}},
ln:{"^":"le;a",
k:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.ga6(this).length}},
lo:{"^":"dv;a,b,c,$ti",
iq:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a7(this.a,this.b,a,!1,z)}},
pm:{"^":"lo;a,b,c,$ti"},
lp:{"^":"f7;a,b,c,d,e,$ti",
ho:function(){var z=this.d
if(z!=null&&this.a<=0)J.hI(this.b,this.c,z,!1)},
t:{
a7:function(a,b,c,d,e){var z=c==null?null:W.hj(new W.lq(c),W.ah)
z=new W.lp(0,a,b,z,!1,[e])
z.ho()
return z}}},
lq:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.e(a,"$isah"))}},
ck:{"^":"b;a",
f6:function(a){var z,y
z=$.$get$dG()
if(z.gik(z)){for(y=0;y<262;++y)z.p(0,C.X[y],W.nw())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nx())}},
aV:function(a){return $.$get$fR().X(0,W.bH(a))},
aH:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dG()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dO(x.$4(a,b,c,this))},
$isaI:1,
t:{
fQ:function(a){var z,y
z=W.e4(null)
y=window.location
z=new W.ck(new W.m0(z,y))
z.f6(a)
return z},
po:[function(a,b,c,d){H.e(a,"$isV")
H.H(b)
H.H(c)
H.e(d,"$isck")
return!0},"$4","nw",16,0,21],
pp:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isV")
H.H(b)
H.H(c)
z=H.e(d,"$isck").a
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
return z},"$4","nx",16,0,21]}},
D:{"^":"b;$ti",
gZ:function(a){return new W.ex(a,this.gm(a),-1,[H.b8(this,a,"D",0)])},
aK:function(a,b,c,d){H.A(d,H.b8(this,a,"D",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eR:{"^":"b;a",
aV:function(a){return C.a.dE(this.a,new W.jm(a))},
aH:function(a,b,c){return C.a.dE(this.a,new W.jl(a,b,c))},
$isaI:1},
jm:{"^":"m:14;a",
$1:function(a){return H.e(a,"$isaI").aV(this.a)}},
jl:{"^":"m:14;a,b,c",
$1:function(a){return H.e(a,"$isaI").aH(this.a,this.b,this.c)}},
m1:{"^":"b;",
fa:function(a,b,c,d){var z,y,x
this.a.ax(0,c)
z=b.cV(0,new W.m2())
y=b.cV(0,new W.m3())
this.b.ax(0,z)
x=this.c
x.ax(0,C.A)
x.ax(0,y)},
aV:function(a){return this.a.X(0,W.bH(a))},
aH:["eX",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.X(0,H.j(z)+"::"+b))return this.d.hR(c)
else if(y.X(0,"*::"+b))return this.d.hR(c)
else{y=this.b
if(y.X(0,H.j(z)+"::"+b))return!0
else if(y.X(0,"*::"+b))return!0
else if(y.X(0,H.j(z)+"::*"))return!0
else if(y.X(0,"*::*"))return!0}return!1}],
$isaI:1},
m2:{"^":"m:29;",
$1:function(a){return!C.a.X(C.t,H.H(a))}},
m3:{"^":"m:29;",
$1:function(a){return C.a.X(C.t,H.H(a))}},
mg:{"^":"m1;e,a,b,c,d",
aH:function(a,b,c){if(this.eX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1},
t:{
h0:function(){var z,y,x,w,v
z=P.h
y=P.eH(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mh(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mg(y,P.ce(null,null,null,z),P.ce(null,null,null,z),P.ce(null,null,null,z),null)
y.fa(null,new H.j5(C.r,w,[x,z]),v,null)
return y}}},
mh:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.H(a))}},
mf:{"^":"b;",
aV:function(a){var z=J.O(a)
if(!!z.$isf1)return!1
z=!!z.$iscI
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aH:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aV(a)},
$isaI:1},
ex:{"^":"b;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e0(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
aI:{"^":"b;"},
m0:{"^":"b;a,b",$ispd:1},
hc:{"^":"b;a",
cZ:function(a){new W.mP(this).$2(a,null)},
b4:function(a,b){if(b==null)J.e3(a)
else b.removeChild(a)},
hd:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hL(a)
x=y.gdg().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.ab(t)}try{u=W.bH(a)
this.hc(H.e(a,"$isV"),b,z,v,u,H.e(y,"$isL"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aE)throw t
else{this.b4(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hc:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aV(a)){this.b4(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aH(a,"is",g)){this.b4(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga6(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga6(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aH(a,J.hR(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.O(a).$isfb)this.cZ(a.content)},
$isoI:1},
mP:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hd(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hM(z)}catch(w){H.ab(w)
v=H.e(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isG")}}},
lh:{"^":"t+i8;"},
lj:{"^":"t+z;"},
lk:{"^":"lj+D;"},
ll:{"^":"t+z;"},
lm:{"^":"ll+D;"},
lr:{"^":"t+z;"},
ls:{"^":"lr+D;"},
lE:{"^":"t+z;"},
lF:{"^":"lE+D;"},
lL:{"^":"t+ai;"},
lM:{"^":"t+ai;"},
lN:{"^":"t+z;"},
lO:{"^":"lN+D;"},
lP:{"^":"t+z;"},
lQ:{"^":"lP+D;"},
lT:{"^":"t+z;"},
lU:{"^":"lT+D;"},
m_:{"^":"t+ai;"},
fY:{"^":"af+z;"},
fZ:{"^":"fY+D;"},
m5:{"^":"t+z;"},
m6:{"^":"m5+D;"},
m9:{"^":"t+ai;"},
mi:{"^":"t+z;"},
mj:{"^":"mi+D;"},
h1:{"^":"af+z;"},
h2:{"^":"h1+D;"},
mo:{"^":"t+z;"},
mp:{"^":"mo+D;"},
mR:{"^":"t+z;"},
mS:{"^":"mR+D;"},
mT:{"^":"t+z;"},
mU:{"^":"mT+D;"},
mV:{"^":"t+z;"},
mW:{"^":"mV+D;"},
mX:{"^":"t+z;"},
mY:{"^":"mX+D;"},
mZ:{"^":"t+z;"},
n_:{"^":"mZ+D;"}}],["","",,P,{"^":"",
b1:function(a){var z,y,x,w,v
if(a==null)return
z=P.di(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
nh:function(a,b){var z={}
a.K(0,new P.ni(z))
return z},
er:function(){var z=$.eq
if(z==null){z=J.d0(window.navigator.userAgent,"Opera",0)
$.eq=z}return z},
ie:function(){var z,y
z=$.en
if(z!=null)return z
y=$.eo
if(y==null){y=J.d0(window.navigator.userAgent,"Firefox",0)
$.eo=y}if(y)z="-moz-"
else{y=$.ep
if(y==null){y=!P.er()&&J.d0(window.navigator.userAgent,"Trident/",0)
$.ep=y}if(y)z="-ms-"
else z=P.er()?"-o-":"-webkit-"}$.en=z
return z},
mc:{"^":"b;",
e6:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cU:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isaq)return new Date(a.a)
if(!!y.$isjK)throw H.a(P.ch("structured clone of RegExp"))
if(!!y.$isb5)return a
if(!!y.$isd2)return a
if(!!y.$isew)return a
if(!!y.$isez)return a
if(!!y.$iseQ||!!y.$isdq)return a
if(!!y.$isL){x=this.e6(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.K(a,new P.me(z,this))
return z.a}if(!!y.$isd){x=this.e6(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.i_(a,x)}throw H.a(P.ch("structured clone of other type"))},
i_:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.cU(z.k(a,w)))
return x}},
me:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cU(b)}},
ni:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
md:{"^":"mc;a,b"},
iu:{"^":"cA;a,b",
gbq:function(){var z,y,x
z=this.b
y=H.am(z,"z",0)
x=W.V
return new H.j3(new H.dE(z,H.l(new P.iv(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.iw(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.gbq()
J.hO(z.b.$1(J.cp(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aK:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbq().a)},
k:function(a,b){var z=this.gbq()
return z.b.$1(J.cp(z.a,b))},
gZ:function(a){var z=P.iZ(this.gbq(),!1,W.V)
return new J.ax(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
iv:{"^":"m:24;",
$1:function(a){return!!J.O(H.e(a,"$isG")).$isV}},
iw:{"^":"m:57;",
$1:function(a){return H.k(H.e(a,"$isG"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lV:{"^":"b;$ti",
gbg:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.y(this,0))},
gcn:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c2(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=this.a
y=J.aD(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbk(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbg(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gcn(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.c6(z)
x=this.b
w=J.c6(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.lG(P.cO(P.cO(P.cO(P.cO(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"lV;aY:a>,bk:b>,aC:c>,aA:d>,$ti",t:{
jH:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"t;",$isbM:1,"%":"SVGLength"},ot:{"^":"lI;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbM")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asD:function(){return[P.bM]},
"%":"SVGLengthList"},bO:{"^":"t;",$isbO:1,"%":"SVGNumber"},oJ:{"^":"lS;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbO")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bO]},
$isi:1,
$asi:function(){return[P.bO]},
$isd:1,
$asd:function(){return[P.bO]},
$asD:function(){return[P.bO]},
"%":"SVGNumberList"},oP:{"^":"t;0m:length=","%":"SVGPointList"},f1:{"^":"cI;0a2:type}",$isf1:1,"%":"SVGScriptElement"},p_:{"^":"mb;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asD:function(){return[P.h]},
"%":"SVGStringList"},p2:{"^":"cI;0a2:type}","%":"SVGStyleElement"},cI:{"^":"V;",
gcr:function(a){return new P.iu(a,new W.av(a))},
am:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aI])
C.a.h(z,W.fQ(null))
C.a.h(z,W.h0())
C.a.h(z,new W.mf())
c=new W.hc(new W.eR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).i0(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.av(w)
u=z.gaN(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscI:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bS:{"^":"t;",$isbS:1,"%":"SVGTransform"},pb:{"^":"mr;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbS")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bS]},
$isi:1,
$asi:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asD:function(){return[P.bS]},
"%":"SVGTransformList"},lH:{"^":"t+z;"},lI:{"^":"lH+D;"},lR:{"^":"t+z;"},lS:{"^":"lR+D;"},ma:{"^":"t+z;"},mb:{"^":"ma+D;"},mq:{"^":"t+z;"},mr:{"^":"mq+D;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}}}],["","",,P,{"^":"",o4:{"^":"t;0m:length=","%":"AudioBuffer"},e7:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},o5:{"^":"lf;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new P.hT(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"AudioParamMap"},hT:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hU:{"^":"e7;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},o6:{"^":"af;0m:length=","%":"AudioTrackList"},hX:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},o7:{"^":"e7;0a2:type}","%":"BiquadFilterNode"},oM:{"^":"hX;0m:length=","%":"OfflineAudioContext"},oN:{"^":"hU;0a2:type}","%":"Oscillator|OscillatorNode"},lf:{"^":"t+ai;"}}],["","",,P,{"^":"",f_:{"^":"t;",$isf_:1,"%":"WebGLRenderingContext"},kx:{"^":"t;",$iskx:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oY:{"^":"m8;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b1(a.item(b))},
p:function(a,b,c){H.F(b)
H.e(c,"$isL")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asz:function(){return[[P.L,,,]]},
$isi:1,
$asi:function(){return[[P.L,,,]]},
$isd:1,
$asd:function(){return[[P.L,,,]]},
$asD:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},m7:{"^":"t+z;"},m8:{"^":"m7+D;"}}],["","",,O,{"^":"",aN:{"^":"b;0a,0b,0c,0d,$ti",
bX:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
d_:function(a,b,c){var z=H.am(this,"aN",0)
H.l(b,{func:1,ret:P.U,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bn:function(a,b){return this.d_(a,null,b)},
fY:function(a){var z
H.u(a,"$isi",[H.am(this,"aN",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fE:function(a,b){var z
H.u(b,"$isi",[H.am(this,"aN",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.ax(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.am(this,"aN",0)
H.A(b,z)
z=[z]
if(this.fY(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fE(x,H.c([b],z))}},
$isi:1,
t:{
d6:function(a){var z=new O.aN([a])
z.bX(a)
return z}}},dm:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
f3:function(a){var z=this.b
if(!(z==null))z.G(a)},
aO:function(){return this.f3(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gaB(z)
else return V.cf()},
es:function(a){var z=this.a
if(a==null)C.a.h(z,V.cf())
else C.a.h(z,a)
this.aO()},
cL:function(){var z=this.a
if(z.length>0){z.pop()
this.aO()}}}}],["","",,E,{"^":"",d1:{"^":"b;"},aQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d6:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
if(y.f==null)y.d6()}},
sa9:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().M(0,this.gem())
y=this.c
if(y!=null)y.gB().h(0,this.gem())
x=new D.J("shape",z,this.c,this,[F.f3])
x.b=!0
this.a8(x)}},
sbh:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gB().M(0,this.gen())
y=this.f
this.f=a
if(a!=null)a.gB().h(0,this.gen())
this.d6()
x=new D.J("technique",y,this.f,this,[O.cJ])
x.b=!0
this.a8(x)}},
saL:function(a){var z,y
if(!J.S(this.r,a)){z=this.r
if(z!=null)z.gB().M(0,this.gel())
if(a!=null)a.gB().h(0,this.gel())
this.r=a
y=new D.J("mover",z,a,this,[U.ad])
y.b=!0
this.a8(y)}},
ar:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.as(0,b,this):null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.J("matrix",x,y,this,[V.ay])
w.b=!0
this.a8(w)}z=this.f
if(z!=null)z.ar(0,b)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.D();)z.d.ar(0,b)},
b_:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0(z))
else C.a.h(z.a,y.j(0,z.ga0(z)))
z.aO()
a.eu(this.f)
z=a.dy
x=(z&&C.a).gaB(z)
if(x!=null&&this.d!=null)x.iP(a,this)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.D();)z.d.b_(a)
a.er()
a.dx.cL()},
gB:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
a8:function(a){var z=this.z
if(!(z==null))z.G(a)},
a_:function(){return this.a8(null)},
iz:[function(a){H.e(a,"$isB")
this.e=null
this.a8(a)},function(){return this.iz(null)},"jM","$1","$0","gem",0,2,1],
iA:[function(a){this.a8(H.e(a,"$isB"))},function(){return this.iA(null)},"jN","$1","$0","gen",0,2,1],
iy:[function(a){this.a8(H.e(a,"$isB"))},function(){return this.iy(null)},"jL","$1","$0","gel",0,2,1],
iw:[function(a){this.a8(H.e(a,"$isB"))},function(){return this.iw(null)},"jJ","$1","$0","gek",0,2,1],
jI:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.gek(),x={func:1,ret:-1,args:[D.B]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bf()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a_()},"$2","giv",8,0,11],
jK:[function(a,b){var z,y,x,w,v
H.u(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.gek(),x=0;x<b.length;b.length===z||(0,H.C)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bf()
v.d=0
w.sa4(v)}w.ga4().M(0,y)}}this.a_()},"$2","gix",8,0,11],
$isaS:1,
t:{
d9:function(a,b,c,d,e,f){var z,y
z=new E.aQ()
z.a=d
z.b=!0
y=O.d6(E.aQ)
z.y=y
y.bn(z.giv(),z.gix())
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
z.sa9(0,e)
z.sbh(f)
z.saL(c)
return z}}},jM:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f_:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aq(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dm()
y=[V.ay]
z.a=H.c([],y)
z.gB().h(0,new E.jO(this))
this.cy=z
z=new O.dm()
z.a=H.c([],y)
z.gB().h(0,new E.jP(this))
this.db=z
z=new O.dm()
z.a=H.c([],y)
z.gB().h(0,new E.jQ(this))
this.dx=z
z=H.c([],[O.cJ])
this.dy=z
C.a.h(z,null)
this.fr=new H.b6(0,0,[P.h,A.f2])},
giK:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.j(0,y.ga0(y))
this.z=y
z=y}return z},
eu:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaB(z):a;(z&&C.a).h(z,y)},
er:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jN:function(a,b){var z=new E.jM(a,b)
z.f_(a,b)
return z}}},jO:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.z=null
z.ch=null}},jP:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jQ:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.ch=null
z.cx=null}},kh:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
f5:[function(a){var z
H.e(a,"$isB")
z=this.x
if(!(z==null))z.G(a)
this.iS()},function(){return this.f5(null)},"f4","$1","$0","gd2",0,2,1],
gie:function(){var z,y,x
z=Date.now()
y=C.e.a5(P.es(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aq(z,!1)
return x/y},
dq:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.q(z)
x=C.d.e7(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.e7(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fe(C.q,this.giR())},
iS:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kj(this),{func:1,ret:-1,args:[P.a5]})
C.H.fs(z)
C.H.h8(z,W.hj(y,P.a5))}},"$0","giR",0,0,3],
iO:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dq()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.es(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aO()
w=x.db
C.a.sm(w.a,0)
w.aO()
w=x.dx
C.a.sm(w.a,0)
w.aO()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b_(this.e)}x=this.z
if(!(x==null))x.G(null)}catch(v){z=H.ab(v)
y=H.bD(v)
P.dX("Error: "+H.j(z))
P.dX("Stack: "+H.j(y))
throw H.a(z)}},
t:{
ki:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$isd5)return E.fd(a,!0,!0,!0,!1)
y=W.eg(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcr(a).h(0,y)
w=E.fd(y,!0,!0,!0,!1)
w.a=a
return w},
fd:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kh()
y=P.iV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.cX(a,"webgl",y)
x=H.e(x==null?C.l.cX(a,"experimental-webgl",y):x,"$isf_")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jN(x,a)
w=new T.kd(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kK(a)
v=new X.iN()
v.c=new X.aH(!1,!1,!1)
v.d=P.ce(null,null,null,P.n)
w.b=v
v=new X.jh(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j0(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.km(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.f7,P.b]])
w.z=v
u=document
t=W.az
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a7(u,"contextmenu",H.l(w.gfL(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a7(a,"focus",H.l(w.gfO(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a7(a,"blur",H.l(w.gfI(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a7(u,"keyup",H.l(w.gfQ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a7(u,"keydown",H.l(w.gfP(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousedown",H.l(w.gfT(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mouseup",H.l(w.gfV(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousemove",H.l(w.gfU(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a7(a,H.H(W.im(a)),H.l(w.gfW(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a7(u,"mousemove",H.l(w.gfM(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a7(u,"mouseup",H.l(w.gfN(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a7(u,"pointerlockchange",H.l(w.gfX(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a7(a,"touchstart",H.l(w.gh3(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchend",H.l(w.gh1(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchmove",H.l(w.gh2(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aq(Date.now(),!1)
z.cy=0
z.dq()
return z}}},kj:{"^":"m:35;a",
$1:function(a){var z
H.nR(a)
z=this.a
if(z.ch){z.ch=!1
z.iO()}}}}],["","",,Z,{"^":"",fK:{"^":"b;a,b",t:{
dD:function(a,b,c){var z
H.u(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.fK(b,z)}}},ec:{"^":"d1;a,b,c,d,e",
bu:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},l6:{"^":"b;a",$iso8:1},ed:{"^":"b;a,0b,c,d",
aX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bu:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bu(a)},
eD:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b_:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$isp5:1},cx:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bv:{"^":"b;a",
gd0:function(a){var z,y
z=this.a
y=(z&$.$get$aY().a)!==0?3:0
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aZ().a)!==0)y+=2
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$bw().a)!==0)++y
return(z&$.$get$aV().a)!==0?y+4:y},
hS:function(a){var z,y,x
z=$.$get$aY()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fJ()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aY().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b_().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
au:function(a){return new Z.bv(a)}}}}],["","",,D,{"^":"",eh:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.B]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.B]})
z=this.a
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).M(z,b)||y}return y},
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.B(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.ir(z))
y=this.b
if(!(y==null))C.a.K(y,new D.is(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
iT:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.G(y)}}},
ae:function(a){return this.iT(a,!0,!1)},
t:{
Q:function(){var z=new D.bf()
z.d=0
return z}}},ir:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},is:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},B:{"^":"b;a,0b"},cy:{"^":"B;c,d,a,0b,$ti"},cz:{"^":"B;c,d,a,0b,$ti"},J:{"^":"B;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ee:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"oa<"}},eE:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eE))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eF:{"^":"B;c,a,0b"},iN:{"^":"b;0a,0b,0c,0d",
iG:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eF(a,this)
y.b=!0
return z.G(y)},
iC:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eF(a,this)
y.b=!0
return z.G(y)}},eI:{"^":"cF;x,y,c,d,e,a,0b"},j0:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaW()
s=new X.bN(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cK:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.aF(a,b))
return!0},
bf:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eO()
if(typeof z!=="number")return z.bS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aF(a,b))
return!0},
be:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.aF(a,b))
return!0},
iH:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaW()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.dn(new V.a_(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.G(w)
return!0},
fS:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.eI(c,a,this.a.gaW(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.Z(0,0)}},aH:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
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
return z+(this.c?"Shift+":"")}},bN:{"^":"cF;x,y,z,Q,ch,c,d,e,a,0b"},jh:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gaW()
x=new X.bN(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cK:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.c3(a,b,!0))
return!0},
bf:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eO()
if(typeof z!=="number")return z.bS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.c3(a,b,!0))
return!0},
be:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.c3(a,b,!1))
return!0},
iI:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaW()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.dn(new V.a_(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.G(x)
return!0},
gdL:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbR:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gei:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},dn:{"^":"cF;x,c,d,e,a,0b"},cF:{"^":"B;"},fi:{"^":"cF;x,y,z,Q,ch,c,d,e,a,0b"},km:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.u(a,"$isd",[V.Z],"$asd")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gaW()
w=new X.fi(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iF:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.b
if(z==null)return!1
z.G(this.aF(a,!0))
return!0},
iD:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.c
if(z==null)return!1
z.G(this.aF(a,!0))
return!0},
iE:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.d
if(z==null)return!1
z.G(this.aF(a,!1))
return!0}},kK:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaW:function(){var z=this.a
return V.eZ(0,0,(z&&C.l).gdK(z).c,C.l.gdK(z).d)},
de:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eE(z,new X.aH(y,a.altKey,a.shiftKey))},
aT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
ci:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.Z(y-w,x-v)},
b3:function(a){return new V.a_(a.movementX,a.movementY)},
cb:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.d.af(u.pageX)
C.d.af(u.pageY)
s=z.left
C.d.af(u.pageX)
C.a.h(y,new V.Z(t-s,C.d.af(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aH(y,a.altKey,a.shiftKey))},
c5:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jk:[function(a){this.f=!0},"$1","gfO",4,0,9],
je:[function(a){this.f=!1},"$1","gfI",4,0,9],
jh:[function(a){H.e(a,"$isaz")
if(this.f&&this.c5(a))a.preventDefault()},"$1","gfL",4,0,4],
jm:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.de(a)
if(this.b.iG(z))a.preventDefault()},"$1","gfQ",4,0,22],
jl:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.de(a)
if(this.b.iC(z))a.preventDefault()},"$1","gfP",4,0,22],
jo:[function(a){var z,y,x,w
H.e(a,"$isaz")
z=this.a
z.focus()
this.f=!0
this.aT(a)
if(this.x){y=this.aD(a)
x=this.b3(a)
if(this.d.cK(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aG(a)
if(this.c.cK(y,w))a.preventDefault()},"$1","gfT",4,0,4],
jq:[function(a){var z,y,x
H.e(a,"$isaz")
this.aT(a)
z=this.aD(a)
if(this.x){y=this.b3(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","gfV",4,0,4],
jj:[function(a){var z,y,x
H.e(a,"$isaz")
if(!this.c5(a)){this.aT(a)
z=this.aD(a)
if(this.x){y=this.b3(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gfN",4,0,4],
jp:[function(a){var z,y,x
H.e(a,"$isaz")
this.aT(a)
z=this.aD(a)
if(this.x){y=this.b3(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfU",4,0,4],
ji:[function(a){var z,y,x
H.e(a,"$isaz")
if(!this.c5(a)){this.aT(a)
z=this.aD(a)
if(this.x){y=this.b3(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfM",4,0,4],
jr:[function(a){var z,y
H.e(a,"$isbV")
this.aT(a)
z=new V.a_((a&&C.G).gi2(a),C.G.gi3(a)).w(0,180)
if(this.x){if(this.d.iH(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.iI(z,y))a.preventDefault()},"$1","gfW",4,0,39],
js:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aD(this.y)
v=this.aG(this.y)
this.d.fS(w,v,x)}},"$1","gfX",4,0,9],
jy:[function(a){var z
H.e(a,"$isbu")
this.a.focus()
this.f=!0
this.ci(a)
z=this.cb(a)
if(this.e.iF(z))a.preventDefault()},"$1","gh3",4,0,13],
jw:[function(a){var z
H.e(a,"$isbu")
this.ci(a)
z=this.cb(a)
if(this.e.iD(z))a.preventDefault()},"$1","gh1",4,0,13],
jx:[function(a){var z
H.e(a,"$isbu")
this.ci(a)
z=this.cb(a)
if(this.e.iE(z))a.preventDefault()},"$1","gh2",4,0,13]}}],["","",,D,{"^":"",ig:{"^":"b;",$isa6:1,$isaS:1},a6:{"^":"b;",$isaS:1},iO:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
ah:function(a){var z=this.Q
if(!(z==null))z.G(a)},
fR:[function(a){var z
H.e(a,"$isB")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.fR(null)},"jn","$1","$0","gdl",0,2,1],
jt:[function(a){var z,y,x
H.u(a,"$isi",[D.a6],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.f7(x))return!1}return!0},"$1","gfZ",4,0,41],
jb:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a6
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdl(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa6")
if(t instanceof D.cE)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.bf()
s.d=0
t.r=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cy(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","gfF",8,0,18],
jv:[function(a,b){var z,y,x,w,v,u
z=D.a6
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdl(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=H.e(b[w],"$isa6")
if(v instanceof D.cE)C.a.M(this.f,v)
u=v.r
if(u==null){u=new D.bf()
u.d=0
v.r=u}u.M(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","gh0",8,0,18],
f7:function(a){var z=C.a.X(this.f,a)
return z},
$asi:function(){return[D.a6]},
$asaN:function(){return[D.a6]}},cE:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
ah:[function(a){var z
H.e(a,"$isB")
z=this.r
if(!(z==null))z.G(a)},function(){return this.ah(null)},"j2","$1","$0","gf8",0,2,1],
$isa6:1,
$isaS:1},k5:{"^":"b;",$isa6:1,$isaS:1},ke:{"^":"b;",$isa6:1,$isaS:1},kf:{"^":"b;",$isa6:1,$isaS:1},kg:{"^":"b;",$isa6:1,$isaS:1}}],["","",,V,{"^":"",
oc:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","je",8,0,37],
cZ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bm(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.d.eA($.o.$2(a,0)?0:a,b),c+b+1)},
bC:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isd",[P.p],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.ad(z[u],x))}return z},
a8:{"^":"b;a,b,c",
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
return new V.a8(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bb:{"^":"b;a,b,c,d",
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
return new V.bb(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bb))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
cC:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscC")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.d.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.d.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.d.j(t,s)
q=a5.b
p=C.d.j(z,q)
o=a5.e
n=C.d.j(w,o)
m=a5.x
l=C.d.j(t,m)
k=a5.c
z=C.d.j(z,k)
j=a5.f
w=C.d.j(w,j)
i=a5.y
t=C.d.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.d.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.d.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.d.j(d,s)
b=C.d.j(h,q)
a=C.d.j(f,o)
a0=C.d.j(d,m)
h=C.d.j(h,k)
f=C.d.j(f,j)
d=C.d.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.d.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.d.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cC(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cC))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.p]
y=V.bC(H.c([this.a,this.d,this.r],z),3,0)
x=V.bC(H.c([this.b,this.e,this.x],z),3,0)
w=V.bC(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.f(y,1)
s=" "+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.f(y,2)
z=" "+y[2]+", "
if(2>=u)return H.f(x,2)
z=z+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(z+w[2]+"]")}},
ay:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
eg:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.cf()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isay")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.q(s)
r=a7.b
if(typeof r!=="number")return H.q(r)
q=a7.f
if(typeof q!=="number")return H.q(q)
p=a7.z
if(typeof p!=="number")return H.q(p)
o=a7.cy
if(typeof o!=="number")return H.q(o)
n=a7.c
if(typeof n!=="number")return H.q(n)
m=a7.r
if(typeof m!=="number")return H.q(m)
l=a7.Q
if(typeof l!=="number")return H.q(l)
k=a7.db
if(typeof k!=="number")return H.q(k)
j=a7.d
if(typeof j!=="number")return H.q(j)
i=a7.x
if(typeof i!=="number")return H.q(i)
h=a7.ch
if(typeof h!=="number")return H.q(h)
g=a7.dx
if(typeof g!=="number")return H.q(g)
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
eC:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gan(a)
if(typeof z!=="number")return z.j()
y=C.d.j(z,y)
z=this.b
x=a.gao(a)
if(typeof z!=="number")return z.j()
x=C.d.j(z,x)
z=this.c
w=a.gap()
if(typeof z!=="number")return z.j()
w=C.d.j(z,w)
z=this.e
v=a.gan(a)
if(typeof z!=="number")return z.j()
v=C.d.j(z,v)
z=this.f
u=a.gao(a)
if(typeof z!=="number")return z.j()
u=C.d.j(z,u)
z=this.r
t=a.gap()
if(typeof z!=="number")return z.j()
t=C.d.j(z,t)
z=this.y
s=a.gan(a)
if(typeof z!=="number")return z.j()
s=C.d.j(z,s)
z=this.z
r=a.gao(a)
if(typeof z!=="number")return z.j()
r=C.d.j(z,r)
z=this.Q
q=a.gap()
if(typeof z!=="number")return z.j()
return new V.K(y+x+w,v+u+t,s+r+C.d.j(z,q))},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.a2(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
z=b.z
if(!$.o.$2(z,this.z))return!1
z=b.Q
if(!$.o.$2(z,this.Q))return!1
z=b.ch
if(!$.o.$2(z,this.ch))return!1
z=b.cx
if(!$.o.$2(z,this.cx))return!1
z=b.cy
if(!$.o.$2(z,this.cy))return!1
z=b.db
if(!$.o.$2(z,this.db))return!1
z=b.dx
if(!$.o.$2(z,this.dx))return!1
return!0},
i:function(a){return this.P()},
e8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bC(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bC(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bC(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bC(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.f(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.f(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.f(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.f(y,1)
q=q+y[1]+", "
if(1>=t)return H.f(x,1)
q=q+x[1]+", "
if(1>=s)return H.f(w,1)
q=q+w[1]+", "
if(1>=r)return H.f(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.f(y,2)
u=u+y[2]+", "
if(2>=t)return H.f(x,2)
u=u+x[2]+", "
if(2>=s)return H.f(w,2)
u=u+w[2]+", "
if(2>=r)return H.f(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.f(y,3)
q=q+y[3]+", "
if(3>=t)return H.f(x,3)
q=q+x[3]+", "
if(3>=s)return H.f(w,3)
q=q+w[3]+", "
if(3>=r)return H.f(v,3)
return u+(q+v[3]+"]")},
P:function(){return this.e8("",3,0)},
C:function(a){return this.e8(a,3,0)},
t:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cf:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eP:function(a,b,c){return V.aG(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
cD:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eM:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eN:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eO:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
Z:{"^":"b;a,b",
L:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.Z(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
a2:{"^":"b;a,b,c",
E:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bP:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bP(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bP))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
eY:{"^":"b;a,b,c,d",
ga7:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eY))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
t:{
eZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eY(a,b,c,d)}}},
a_:{"^":"b;a,b",
io:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,17],
F:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a_(z*b,y*b)},
w:function(a,b){var z,y
if($.o.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a_(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
K:{"^":"b;a,b,c",
io:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,17],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cG:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aI:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.K(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.o.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
eh:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i3:{"^":"eh;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bY:function(a){var z=V.cZ(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.G(a)},
scW:function(a,b){},
scH:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bY(z)}z=new D.J("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.J(z)}},
scJ:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bY(z)}z=new D.J("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.J(z)}},
sa1:function(a,b){var z,y
b=this.bY(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.p])
z.b=!0
this.J(z)}},
scI:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.J(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.p])
z.b=!0
this.J(z)}},
scu:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.p])
z.b=!0
this.J(z)}},
ar:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
t:{
d7:function(){var z=new U.i3()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ej:{"^":"ad;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
as:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ej))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
t:{
c8:function(a){var z=new U.ej()
z.a=a
return z}}},ey:{"^":"aN;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
J:[function(a){var z
H.e(a,"$isB")
z=this.e
if(!(z==null))z.G(a)},function(){return this.J(null)},"aj","$1","$0","gaS",0,2,1],
j3:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ad
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cy(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gf9",8,0,16],
ju:[function(a,b){var z,y,x,w,v
z=U.ad
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gB().M(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gh_",8,0,16],
as:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ax(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.as(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.cf():x
z=this.e
if(!(z==null))z.ae(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ey))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ad]},
$asaN:function(){return[U.ad]},
$isad:1,
t:{
da:function(a){var z=new U.ey()
z.bX(U.ad)
z.bn(z.gf9(),z.gh_())
z.e=null
z.f=V.cf()
z.r=0
return z}}},ad:{"^":"eh;"},f0:{"^":"ad;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.G(a)},
seI:function(a){var z,y
a=V.cZ(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.J("yaw",y,a,this,[P.p])
z.b=!0
this.J(z)}},
seq:function(a,b){var z,y
b=V.cZ(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.J("pitch",y,b,this,[P.p])
z.b=!0
this.J(z)}},
sew:function(a){var z,y
a=V.cZ(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.J("roll",y,a,this,[P.p])
z.b=!0
this.J(z)}},
as:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seI(this.a+this.d*b.y)
this.seq(0,this.b+this.e*b.y)
this.sew(this.c+this.f*b.y)
this.x=V.eO(this.c).j(0,V.eN(this.b)).j(0,V.eM(this.a))
z=this.y
if(!(z==null))z.ae(0)}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.f0))return!1
z=this.a
y=b.a
if(!$.o.$2(z,y))return!1
z=this.b
y=b.b
if(!$.o.$2(z,y))return!1
z=this.c
y=b.c
if(!$.o.$2(z,y))return!1
z=this.d
y=b.d
if(!$.o.$2(z,y))return!1
z=this.e
y=b.e
if(!$.o.$2(z,y))return!1
z=this.f
y=b.f
if(!$.o.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"], ["+V.N(this.d,3,0)+", "+V.N(this.e,3,0)+", "+V.N(this.f,3,0)+"]"}},kL:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
J:[function(a){var z
H.e(a,"$isB")
z=this.cy
if(!(z==null))z.G(a)},function(){return this.J(null)},"aj","$1","$0","gaS",0,2,1],
b6:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdL().h(0,this.gc6())
this.a.c.gei().h(0,this.gc7())
this.a.c.gbR().h(0,this.gc8())
return!0},
fA:[function(a){H.e(a,"$isB")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc6",4,0,2],
fB:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isB"),"$isbN")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.a_(y.a,y.b).j(0,2).w(0,z.ga7())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.a_(x.a,x.b).j(0,2).w(0,z.ga7())
x=this.b
v=w.a
if(typeof v!=="number")return v.T()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
this.b.sU(0)
y=y.L(0,a.z)
this.Q=new V.a_(y.a,y.b).j(0,2).w(0,z.ga7())}this.aj()},"$1","gc7",4,0,2],
fC:[function(a){var z,y,x
H.e(a,"$isB")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sU(y*10*x)
this.aj()}},"$1","gc8",4,0,2],
as:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.ch=y
x=b.y
this.b.ar(0,x)
this.cx=V.eO(this.b.d)}return this.cx},
$isad:1},kM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
J:[function(a){var z
H.e(a,"$isB")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.J(null)},"aj","$1","$0","gaS",0,2,1],
b6:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdL().h(0,this.gc6())
this.a.c.gei().h(0,this.gc7())
this.a.c.gbR().h(0,this.gc8())
z=this.a.d
y=z.f
if(y==null){y=D.Q()
z.f=y
z=y}else z=y
z.h(0,this.gfv())
z=this.a.d
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.gfw())
z=this.a.e
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.ghn())
z=this.a.e
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.ghm())
z=this.a.e
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.ghl())
return!0},
aw:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.T()
z=-z}if(this.r){if(typeof y!=="number")return y.T()
y=-y}return new V.a_(z,y)},
fA:[function(a){a=H.k(H.e(a,"$isB"),"$isbN")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc6",4,0,2],
fB:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isB"),"$isbN")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aw(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aw(new V.a_(x.a,x.b).j(0,2).w(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.L(0,a.z)
this.dx=this.aw(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))}this.aj()},"$1","gc7",4,0,2],
fC:[function(a){var z,y,x
H.e(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sU(-y*10*z)
this.aj()}},"$1","gc8",4,0,2],
j8:[function(a){if(H.k(H.e(a,"$isB"),"$iseI").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfv",4,0,2],
j9:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isB"),"$isbN")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aw(new V.a_(x.a,x.b).j(0,2).w(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.L(0,a.z)
this.dx=this.aw(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))
this.aj()},"$1","gfw",4,0,2],
jC:[function(a){H.e(a,"$isB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghn",4,0,2],
jB:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isB"),"$isfi")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aw(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aw(new V.a_(x.a,x.b).j(0,2).w(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.L(0,a.z)
this.dx=this.aw(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))}this.aj()},"$1","ghm",4,0,2],
jA:[function(a){var z,y,x
H.e(a,"$isB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sU(-y*10*z)
this.aj()}},"$1","ghl",4,0,2],
as:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.ar(0,x)
this.b.ar(0,x)
this.fr=V.eM(this.b.d).j(0,V.eN(this.c.d))}return this.fr},
$isad:1},kN:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.G(a)},
b6:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=this.gfD()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ja:[function(a){var z,y,x,w
H.e(a,"$isB")
if(!J.S(this.b,this.a.b.c))return
H.k(a,"$isdn")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.p])
z.b=!0
this.J(z)}},"$1","gfD",4,0,2],
as:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.cD(x,x,x,1)}return this.f},
$isad:1}}],["","",,M,{"^":"",ip:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aP:[function(a){var z
H.e(a,"$isB")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aP(null)},"j4","$1","$0","gav",0,2,1],
jf:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aQ
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bf()
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cy(a,b,this,[z])
z.b=!0
this.aP(z)},"$2","gfJ",8,0,11],
jg:[function(a,b){var z,y,x,w,v,u
z=E.aQ
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gav(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bf()
u.d=0
v.sa4(u)}v.ga4().M(0,x)}}z=new D.cz(a,b,this,[z])
z.b=!0
this.aP(z)},"$2","gfK",8,0,11],
sbh:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().M(0,this.gav())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gav())
z=new D.J("technique",y,this.c,this,[O.cJ])
z.b=!0
this.aP(z)}},
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.eu(this.c)
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
if(typeof x!=="number")return H.q(x)
u=C.d.af(v.a*x)
if(typeof w!=="number")return H.q(w)
t=C.d.af(v.b*w)
s=C.d.af(v.c*x)
a.c=s
v=C.d.af(v.d*w)
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
n=V.aG(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.es(n)
y=$.eV
if(y==null){y=new V.K(0,0,-1)
m=y.w(0,Math.sqrt(y.F(y)))
y=new V.K(0,1,0).aI(m)
l=y.w(0,Math.sqrt(y.F(y)))
k=m.aI(l)
j=new V.K(0,0,0)
y=V.aG(l.a,k.a,m.a,l.T(0).F(j),l.b,k.b,m.b,k.T(0).F(j),l.c,k.c,m.c,m.T(0).F(j),0,0,0,1)
$.eV=y
i=y}else i=y
y=z.b
if(y!=null){h=y.as(0,a,z)
if(h!=null)i=h.j(0,i)}a.db.es(i)
z=this.c
if(z!=null)z.ar(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.D();)z.d.ar(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.D();)z.d.b_(a)
this.a.toString
a.cy.cL()
a.db.cL()
this.b.toString
a.er()},
$isoS:1}}],["","",,A,{"^":"",e6:{"^":"b;a,b,c"},hS:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i5:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
i4:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j6:{"^":"f2;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0az,0aq,0bz,0dM,0bA,0bB,0dN,0dO,0bC,0bD,0dP,0dQ,0bE,0bF,0dR,0dS,0bG,0dT,0dU,0bH,0dV,0dW,0bI,0bJ,0bK,0dX,0dY,0bL,0bM,0dZ,0e_,0bN,0e0,0cv,0e1,0cw,0e2,0cz,0e3,0cA,0e4,0cB,0e5,0cC,a,b,0c,0d,0e,0f,0r,0x,0y",
eZ:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.an("")
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
a2.hq(z)
a2.hx(z)
a2.hr(z)
a2.hF(z)
a2.hG(z)
a2.hz(z)
a2.hK(z)
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
z=new P.an("")
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
x.hu(z)
x.hp(z)
x.hs(z)
x.hv(z)
x.hD(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hB(z)
x.hC(z)}x.hy(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.i:r+="   return alpha;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.h])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.ht(z)
x.hA(z)
x.hE(z)
x.hH(z)
x.hI(z)
x.hJ(z)
x.hw(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.n(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.df(s,35633)
this.f=this.df(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dO(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.v("Failed to link shader: "+H.j(m)))}this.hg()
this.hi()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaU")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaU")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaU")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaU")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdA")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaU")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaU")
this.r1=H.c([],[A.aU])
y=a2.az
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isR")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaU"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isas")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isat")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isas")
this.az=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isat")
this.az=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a2.c
if(y!==C.c){this.aq=H.k(this.y.q(0,"diffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.bz=H.k(this.y.q(0,"diffuseTxt"),"$isas")
this.bA=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.dM=H.k(this.y.q(0,"diffuseTxt"),"$isat")
this.bA=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a2.d
if(y!==C.c){this.bB=H.k(this.y.q(0,"invDiffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dN=H.k(this.y.q(0,"invDiffuseTxt"),"$isas")
this.bC=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.dO=H.k(this.y.q(0,"invDiffuseTxt"),"$isat")
this.bC=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a2.e
if(y!==C.c){this.bF=H.k(this.y.q(0,"shininess"),"$isa3")
this.bD=H.k(this.y.q(0,"specularClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dP=H.k(this.y.q(0,"specularTxt"),"$isas")
this.bE=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.dQ=H.k(this.y.q(0,"specularTxt"),"$isat")
this.bE=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dR=H.k(this.y.q(0,"bumpTxt"),"$isas")
this.bG=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.h:this.dS=H.k(this.y.q(0,"bumpTxt"),"$isat")
this.bG=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a2.dy){this.dT=H.k(this.y.q(0,"envSampler"),"$isat")
this.dU=H.k(this.y.q(0,"nullEnvTxt"),"$isR")
y=a2.r
if(y!==C.c){this.bH=H.k(this.y.q(0,"reflectClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dV=H.k(this.y.q(0,"reflectTxt"),"$isas")
this.bI=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.h:this.dW=H.k(this.y.q(0,"reflectTxt"),"$isat")
this.bI=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a2.x
if(y!==C.c){this.bJ=H.k(this.y.q(0,"refraction"),"$isa3")
this.bK=H.k(this.y.q(0,"refractClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dX=H.k(this.y.q(0,"refractTxt"),"$isas")
this.bL=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.h:this.dY=H.k(this.y.q(0,"refractTxt"),"$isat")
this.bL=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a2.y
if(y!==C.c){this.bM=H.k(this.y.q(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.i:break
case C.f:this.dZ=H.k(this.y.q(0,"alphaTxt"),"$isas")
this.bN=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.e_=H.k(this.y.q(0,"alphaTxt"),"$isat")
this.bN=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.cv=H.c([],[A.fv])
this.cw=H.c([],[A.fw])
this.cz=H.c([],[A.fx])
this.cA=H.c([],[A.fy])
this.cB=H.c([],[A.fz])
this.cC=H.c([],[A.fA])
if(a2.k2){y=a2.z
if(y>0){this.e0=H.e(this.y.q(0,"dirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.cv;(x&&C.a).h(x,new A.fv(l,k,j))}}y=a2.Q
if(y>0){this.e1=H.e(this.y.q(0,"pntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa3")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.cw;(x&&C.a).h(x,new A.fw(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e2=H.e(this.y.q(0,"spotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa3")
x=this.cz;(x&&C.a).h(x,new A.fx(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e3=H.e(this.y.q(0,"txtDirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isas")
x=this.cA;(x&&C.a).h(x,new A.fy(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e4=H.e(this.y.q(0,"txtPntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdA")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isat")
x=this.cB;(x&&C.a).h(x,new A.fz(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e5=H.e(this.y.q(0,"txtSpotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isP")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isas")
x=this.cC;(x&&C.a).h(x,new A.fA(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){b.a.uniform1i(b.d,1)},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j7:function(a,b){var z,y
z=a.aq
y=new A.j6(b,z)
y.f1(b,z)
y.eZ(a,b)
return y}}},jb:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,az,aq,bz",
hq:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.az+"];\n"
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
hx:function(a){var z
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
hr:function(a){var z
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
hF:function(a){var z,y
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
hG:function(a){var z,y
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
hz:function(a){var z
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
hK:function(a){var z
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
aE:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.au(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hu:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   return emissionClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hp:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   return ambientClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hs:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hv:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hD:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aE(a,z,"specular")
y=a.a+="uniform float shininess;\n"
y+="vec3 specularColor;\n"
a.a=y
y+="\n"
a.a=y
y+="void setSpecularColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hy:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.f:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.h:z+="uniform samplerCube bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break}z+="vec3 normal()\n"
a.a=z
z+="{\n"
a.a=z
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.i:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hB:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aE(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hC:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aE(a,z,"refract")
y=a.a+="uniform float refraction;\n"
y+="\n"
a.a=y
y+="vec3 refract(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.i:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
ht:function(a){var z,y
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
hA:function(a){var z,y
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
hE:function(a){var z,y
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
hH:function(a){var z,y,x
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
hI:function(a){var z,y,x
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
hJ:function(a){var z,y,x
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
hw:function(a){var z
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
i:function(a){return this.aq}},fv:{"^":"b;a,b,c"},fy:{"^":"b;a,b,c,d,e,f,r,x"},fw:{"^":"b;a,b,c,d,e,f,r"},fz:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fx:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fA:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f2:{"^":"d1;",
f1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
df:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hg:function(){var z,y,x,w,v,u
z=H.c([],[A.e6])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e6(y,v.name,u))}this.x=new A.hS(z)},
hi:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i1(v.type,v.size,v.name,u))}this.y=new A.kw(z)},
aR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dz(z,y,b,a,c)},
fo:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dz(z,y,b,a,c)},
fp:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.at(z,y,b,c)
else return A.dz(z,y,b,a,c)},
bt:function(a,b){return new P.fO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
i1:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.kr(this.a,this.r,c,d)
case 35665:return new A.P(this.a,this.r,c,d)
case 35666:return new A.ku(this.a,this.r,c,d)
case 35667:return new A.ks(this.a,this.r,c,d)
case 35668:return new A.kt(this.a,this.r,c,d)
case 35669:return new A.kv(this.a,this.r,c,d)
case 35674:return new A.ky(this.a,this.r,c,d)
case 35675:return new A.dA(this.a,this.r,c,d)
case 35676:return new A.aU(this.a,this.r,c,d)
case 35678:return this.fo(b,c,d)
case 35680:return this.fp(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cu:{"^":"b;a,b",
i:function(a){return this.b}},ag:{"^":"b;"},kw:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
ic:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.ic("\n")}},R:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},ks:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kt:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kv:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kq:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dz:function(a,b,c,d,e){var z=new A.kq(a,b,c,e)
z.f=d
z.e=P.iY(d,0,!1,P.n)
return z}}},a3:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kr:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},P:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ku:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},ky:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dA:{"^":"ag;a,b,c,d",
at:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.p],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aU:{"^":"ag;a,b,c,d",
at:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.p],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},as:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},at:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dR:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ak,P.p,P.p]})
z=F.dt()
F.bZ(z,b,c,d,a,1,0,0,1)
F.bZ(z,b,c,d,a,0,1,0,3)
F.bZ(z,b,c,d,a,0,0,1,2)
F.bZ(z,b,c,d,a,-1,0,0,0)
F.bZ(z,b,c,d,a,0,-1,0,0)
F.bZ(z,b,c,d,a,0,0,-1,3)
z.ay()
return z},
cR:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bZ:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ak,P.p,P.p]})
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
z.d=y}l=F.cR(y)
k=F.cR(z.b)
j=F.dZ(d,e,new F.n0(z,F.cR(z.c),F.cR(z.d),k,l,c),b)
if(j!=null)a.bd(j)},
hp:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.dt()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ak])
v=z.a
u=new V.K(0,0,y)
u=u.w(0,Math.sqrt(u.F(u)))
C.a.h(w,v.hO(new V.bP(a,-1,-1,-1),new V.bb(1,1,1,1),new V.a2(0,0,d),new V.K(0,0,y),new V.Z(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.K(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cj(new V.bP(a,-1,-1,-1),null,new V.bb(n,l,m,1),new V.a2(r*p,q*p,d),new V.K(0,0,y),new V.Z(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hM(w)
return z},
hn:function(a,b,c,d,e,f){return F.nk(!0,c,d,new F.nj(a,f),e)},
nk:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.dZ(c,e,new F.nm(d),null)
if(z==null)return
z.ay()
z.cl()
if(b)z.bd(F.hp(3,!1,!1,1,new F.nn(d),e))
z.bd(F.hp(1,!0,!1,-1,new F.no(d),e))
return z},
hB:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nX()
y=F.dR(a,null,new F.nY(z,c),d)
y.cl()
return y},
hE:function(a,b,c,d){return F.ho(c,a,d,b,new F.o_())},
nF:function(a,b,c,d,e,f){return F.ho(d,a,e,b,new F.nG(f,c))},
ho:function(a,b,c,d,e){var z=F.dZ(a,b,new F.nl(H.l(e,{func:1,ret:V.a2,args:[P.p]}),d,b,c),null)
if(z==null)return
z.ay()
z.cl()
return z},
dZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ak,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.dt()
y=H.c([],[F.ak])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cj(null,null,new V.bb(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ct(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cj(null,null,new V.bb(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ct(d))}}z.d.hN(a+1,b+1,y)
return z},
n0:{"^":"m:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cG(z.b,b).cG(z.d.cG(z.c,b),c)
a.sa1(0,new V.a2(y.a,y.b,y.c))
a.sey(y.w(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sdI(new V.bP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nj:{"^":"m:30;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nm:{"^":"m:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa1(0,new V.a2(y,u,w))
u=new V.K(y,u,w)
a.sey(u.w(0,Math.sqrt(u.F(u))))
a.sdI(new V.bP(1-c,2+c,-1,-1))}},
nn:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
no:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
nX:{"^":"m:30;",
$2:function(a,b){return 0}},
nY:{"^":"m:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.K(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.F(x))).j(0,this.b+z)
a.sa1(0,new V.a2(z.a,z.b,z.c))}},
o_:{"^":"m:27;",
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)}},
nG:{"^":"m:27;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a2(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nl:{"^":"m:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e_(y.$1(z),x)
x=J.e_(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.K(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.F(x)))
u=new V.K(1,0,0)
y=v.aI(!v.v(0,u)?new V.K(0,0,1):u)
t=y.w(0,Math.sqrt(y.F(y)))
y=t.aI(v)
u=y.w(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sa1(0,w.E(0,new V.a2(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ar:{"^":"b;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gb8()){C.a.M(this.a.a.d.b,this)
this.a.a.a_()}this.cd()
this.ce()
this.h6()},
cj:function(a){this.a=a
C.a.h(a.d.b,this)},
ck:function(a){this.b=a
C.a.h(a.d.c,this)},
hf:function(a){this.c=a
C.a.h(a.d.d,this)},
cd:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
ce:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
h6:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fh:function(){var z,y,x,w,v
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
if(v.eh())return
return v.w(0,Math.sqrt(v.F(v)))},
fk:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.F(z)))
z=w.L(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aI(z.w(0,Math.sqrt(z.F(z))))
return z.w(0,Math.sqrt(z.F(z)))},
cq:function(){if(this.d!=null)return!0
var z=this.fh()
if(z==null){z=this.fk()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
fg:function(){var z,y,x,w,v
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
if(v.eh())return
return v.w(0,Math.sqrt(v.F(v)))},
fj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.L(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.T(0)}else{l=(z-q.b)/n
z=r.L(0,u).j(0,l).E(0,u).L(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.T(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.F(z)))
z=k.aI(m)
z=z.w(0,Math.sqrt(z.F(z))).aI(k)
m=z.w(0,Math.sqrt(z.F(z)))}return m},
co:function(){if(this.e!=null)return!0
var z=this.fg()
if(z==null){z=this.fj()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
b9:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.T(0)
y=this.e
if(y!=null)this.e=y.T(0)
this.a.a.a_()},
ghX:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y
if(this.gb8())return a+"disposed"
z=a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)+", "+C.b.ad(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.C("")},
t:{
bI:function(a,b,c){var z,y,x
z=new F.ar()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.cj(a)
z.ck(b)
z.hf(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
it:{"^":"b;"},
k4:{"^":"it;",
bc:function(a,b,c){var z,y
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
dh:{"^":"b;0a,0b",
aJ:function(){if(!this.gb8()){C.a.M(this.a.a.c.b,this)
this.a.a.a_()}this.cd()
this.ce()},
cj:function(a){this.a=a
C.a.h(a.c.b,this)},
ck:function(a){this.b=a
C.a.h(a.c.c,this)},
cd:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
ce:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){if(this.gb8())return a+"disposed"
return a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)},
P:function(){return this.C("")},
t:{
iP:function(a,b){var z,y,x
z=new F.dh()
y=a.a
if(y==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.v("May not create a line with vertices attached to different shapes."))
z.cj(a)
z.ck(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a_()
return z}}},
iQ:{"^":"b;"},
kp:{"^":"iQ;",
bc:function(a,b,c){var z,y
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
ds:{"^":"b;0a",
aJ:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.a_()}this.h5()},
h5:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ac(z.e),0)},
P:function(){return this.C("")}},
f3:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
bd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.hZ())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.ds()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iP(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bI(p,o,m)}z=this.e
if(!(z==null))z.ae(0)},
ay:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ay()||!1
if(!this.a.ay())y=!1
z=this.e
if(!(z==null))z.ae(0)
return y},
fu:function(a,b,c,d,e){var z,y,x
H.u(d,"$isd",[F.ak],"$asd")
H.u(e,"$isd",[P.n],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.bc(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
is:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ak],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fu(a,v,y,u,t))b.bd(u)}this.a.A()
this.c.cQ()
this.d.cQ()
this.b.iN()
this.c.cR(new F.kp())
this.d.cR(new F.k4())
z=this.e
if(!(z==null))z.ae(0)},
hQ:function(a){this.is(new F.l0(),new F.jn())},
cl:function(){return this.hQ(null)},
b9:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.b9()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.sej(new V.K(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.K(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.S(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.G(null)}}}}z=this.e
if(!(z==null))z.ae(0)},
hV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aY()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
v=b.gd0(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ec])
for(r=0,q=0;q<w;++q){p=b.hS(q)
o=p.gd0(p)
C.a.p(s,q,new Z.ec(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].ip(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.u(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ed(new Z.fK(34962,j),s,b)
i.b=H.c([],[Z.cx])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.n(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.G(a)},
a_:function(){return this.a8(null)},
t:{
dt:function(){var z,y
z=new F.f3()
y=new F.kW(z)
y.b=!1
y.c=H.c([],[F.ak])
z.a=y
y=new F.jZ(z)
y.b=H.c([],[F.ds])
z.b=y
y=new F.jY(z)
y.b=H.c([],[F.dh])
z.c=y
y=new F.jX(z)
y.b=H.c([],[F.ar])
z.d=y
z.e=null
return z}}},
jX:{"^":"b;a,0b",
hM:function(a){var z,y,x,w,v,u
H.u(a,"$isd",[F.ak],"$asd")
z=H.c([],[F.ar])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bI(x,v,u))}}return z},
hN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isd",[F.ak],"$asd")
z=H.c([],[F.ar])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.f(c,x)
r=c[x];++x
if(x>=s)return H.f(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.f(c,p)
o=c[p]
if(y<0||y>=s)return H.f(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bI(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bI(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cR:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.bc(0,v,t)){v.aJ()
break}}}}},
cQ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.ghX(x)
if(y)x.aJ()}},
ay:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cq())x=!1
return x},
cp:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].co())x=!1
return x},
b9:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].b9()},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
jY:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cR:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.bc(0,v,t)){v.aJ()
break}}}}},
cQ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.S(x.a,x.b)
if(y)x.aJ()}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.n(z,"\n")},
P:function(){return this.C("")}},
jZ:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iN:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
ak:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ct:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cj(this.cx,x,u,z,y,w,v,a,t)},
hZ:function(){return this.ct(null)},
sa1:function(a,b){var z
if(!J.S(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a_()}},
sej:function(a){var z
a=a.w(0,Math.sqrt(a.F(a)))
if(!J.S(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a_()}},
sey:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
sdI:function(a){var z
if(!J.S(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a_()}},
ip:function(a){var z,y
z=J.O(a)
if(z.v(a,$.$get$aY())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aX())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aZ())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$b_())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bw()))return H.c([this.ch],[P.p])
else if(z.v(a,$.$get$aV())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cq:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.K(0,new F.l5(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
co:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.K(0,new F.l4(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ad(J.ac(this.e),0))
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
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
P:function(){return this.C("")},
t:{
cj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ak()
y=new F.l3(z)
y.b=H.c([],[F.ds])
z.b=y
y=new F.l_(z)
x=[F.dh]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kX(z)
x=[F.ar]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fH()
z.e=0
y=$.$get$aY()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aX().a)!==0?e:null
z.x=(x&$.$get$aW().a)!==0?b:null
z.y=(x&$.$get$aZ().a)!==0?f:null
z.z=(x&$.$get$b_().a)!==0?g:null
z.Q=(x&$.$get$fI().a)!==0?c:null
z.ch=(x&$.$get$bw().a)!==0?i:0
z.cx=(x&$.$get$aV().a)!==0?a:null
return z}}},
l5:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isar")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
l4:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isar")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kW:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
hP:function(a,b,c,d,e,f,g,h,i){var z=F.cj(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hO:function(a,b,c,d,e,f){return this.hP(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ay:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cq()
return!0},
cp:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].co()
return!0},
hW:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
kX:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.f(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.f(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ar]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kY(this,b))
C.a.K(this.d,new F.kZ(this,b))},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
kY:{"^":"m:5;a,b",
$1:function(a){H.e(a,"$isar")
if(!J.S(a.a,this.a))this.b.$1(a)}},
kZ:{"^":"m:5;a,b",
$1:function(a){var z
H.e(a,"$isar")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
l_:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
l1:{"^":"b;"},
l0:{"^":"l1;",
bc:function(a,b,c){return J.S(b.f,c.f)}},
l2:{"^":"b;"},
jn:{"^":"l2;",
bd:function(a){var z,y,x,w
H.u(a,"$isd",[F.ak],"$asd")
z=new V.K(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.K(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)a[x].sej(z)
return}},
l3:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}}}],["","",,O,{"^":"",j8:{"^":"cJ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
ai:[function(a){var z
H.e(a,"$isB")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.ai(null)},"j5","$1","$0","gfb",0,2,1],
ha:[function(a){H.e(a,"$isB")
this.a=null
this.ai(a)},function(){return this.ha(null)},"jz","$1","$0","gh9",0,2,1],
jc:[function(a,b){var z=V.ay
z=new D.cy(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ai(z)},"$2","gfG",8,0,32],
jd:[function(a,b){var z=V.ay
z=new D.cz(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ai(z)},"$2","gfH",8,0,32],
dc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a5(z.e.length+3,4)*4
x=C.e.a5(z.f.length+3,4)*4
w=C.e.a5(z.r.length+3,4)*4
v=C.e.a5(z.x.length+3,4)*4
u=C.e.a5(z.y.length+3,4)*4
t=C.e.a5(z.z.length+3,4)*4
s=C.e.a5(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+"_"
h+=z?"1":"0"
h+=r?"1":"0"
h+"0"
h=h+"0_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aY()
if(c){z=$.$get$aX()
a6=new Z.bv(a6.a|z.a)}if(b){z=$.$get$aW()
a6=new Z.bv(a6.a|z.a)}if(a){z=$.$get$aZ()
a6=new Z.bv(a6.a|z.a)}if(a0){z=$.$get$b_()
a6=new Z.bv(a6.a|z.a)}if(a2){z=$.$get$aV()
a6=new Z.bv(a6.a|z.a)}return new A.jb(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.u(a,"$isd",[T.fc],"$asd")},
ar:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.a=new V.a2(0,0,0)
x=y.b
if(x!=null){w=x.as(0,b,y)
if(w!=null)y.a=w.b1(y.a)}}},
iP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dc()
y=a.fr.k(0,z.aq)
if(y==null){y=A.j7(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bw(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bz
z=b.e
if(!(z instanceof Z.ed)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ay()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cp()
t.a.cp()
t=t.e
if(!(t==null))t.ae(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hW()
s=s.e
if(!(s==null))s.ae(0)}q=b.d.hV(new Z.l6(a.a),v)
q.aX($.$get$aY()).e=this.a.Q.c
if(z)q.aX($.$get$aX()).e=this.a.cx.c
if(u)q.aX($.$get$aW()).e=this.a.ch.c
if(w.rx)q.aX($.$get$aZ()).e=this.a.cy.c
if(t)q.aX($.$get$b_()).e=this.a.db.c
if(w.x1)q.aX($.$get$aV()).e=this.a.dx.c
b.e=q}z=T.fc
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.i5()
if(w.fx){u=this.a
t=a.dx
t=t.ga0(t)
u=u.dy
u.toString
u.at(t.ag(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga0(t)
s=a.dx
s=t.j(0,s.ga0(s))
a.cx=s
t=s}u=u.fr
u.toString
u.at(t.ag(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giK()
s=a.dx
s=t.j(0,s.ga0(s))
a.ch=s
t=s}u=u.fy
u.toString
u.at(t.ag(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.at(t.ag(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.at(t.ag(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.at(C.w.ag(t,!0))}if(w.az>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isay")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.by(H.u(s.ag(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.f.d)
u=this.a
t=this.f.d
u.ak(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.f.e)
u=this.a
t=this.f.e
u.ab(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.r.d)
u=this.a
t=this.r.d
u.ak(u.y1,u.az,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.r.e)
u=this.a
t=this.r.e
u.ab(u.y2,u.az,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.aq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.x.d)
u=this.a
t=this.x.d
u.ak(u.bz,u.bA,t)
t=this.a
u=this.x.f
t=t.aq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.dM,u.bA,t)
t=this.a
u=this.x.f
t=t.aq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bB
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.y.d)
u=this.a
t=this.y.d
u.ak(u.dN,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.y.e)
u=this.a
t=this.y.e
u.ab(u.dO,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bD
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bF
t.a.uniform1f(t.d,r)
break
case C.f:this.W(p,this.z.d)
u=this.a
t=this.z.d
u.ak(u.dP,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bF
u.a.uniform1f(u.d,r)
break
case C.h:this.W(p,this.z.e)
u=this.a
t=this.z.e
u.ab(u.dQ,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bF
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.e0
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cv
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.eC(i.gby(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gal(i)
g=h.c
r=f.gbQ()
s=f.gbl()
f=f.gbv()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.e1
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cw
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=l.b1(i.a)
r=h.c
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.c
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.d
r=h.e
r.a.uniform1f(r.d,s)
s=i.e
r=h.f
r.a.uniform1f(r.d,s)
s=i.f
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.e2
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cz
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gcM(i)
r=h.b
g=s.geG(s)
f=s.geH(s)
s=s.geJ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gby(i).jH()
f=h.c
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=l.b1(i.gcM(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gal(i)
r=h.e
g=s.gbQ()
f=s.gbl()
s=s.gbv()
r.a.uniform3f(r.d,g,f,s)
s=i.gjF()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjD()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gdF()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gdG()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gdH()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.e3
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cA
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbi()
H.u(p,"$isd",s,"$asd")
if(!C.a.X(p,r)){r.sba(0,p.length)
C.a.h(p,r)}r=i.gby(i)
g=h.d
f=r.gan(r)
e=r.gao(r)
r=r.gap()
g.a.uniform3f(g.d,f,e,r)
r=i.gbR()
e=h.b
f=r.gan(r)
g=r.gao(r)
r=r.gap()
e.a.uniform3f(e.d,f,g,r)
r=i.gbg(i)
g=h.c
f=r.gan(r)
e=r.gao(r)
r=r.gap()
g.a.uniform3f(g.d,f,e,r)
r=l.eC(i.gby(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gal(i)
f=h.f
e=g.gbQ()
r=g.gbl()
g=g.gbv()
f.a.uniform3f(f.d,e,r,g)
g=i.gbi()
r=g.gbb(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gbb(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gba(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.e4
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.cB
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbi()
H.u(p,"$isd",r,"$asd")
if(!C.a.X(p,g)){g.sba(0,p.length)
C.a.h(p,g)}d=l.j(0,i.ga0(i))
g=i.ga0(i).b1(new V.a2(0,0,0))
f=h.b
e=g.geG(g)
c=g.geH(g)
g=g.geJ(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b1(new V.a2(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.eg(0)
c=h.d
m=new Float32Array(H.by(H.u(new V.cC(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ag(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gal(i)
g=h.e
e=c.gbQ()
f=c.gbl()
c=c.gbv()
g.a.uniform3f(g.d,e,f,c)
c=i.gbi()
g=c.gbb(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gbb(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gba(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gdF()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gdG()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gdH()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.e5
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cC
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbi()
H.u(p,"$isd",z,"$asd")
if(!C.a.X(p,s)){s.sba(0,p.length)
C.a.h(p,s)}s=i.gcM(i)
r=h.b
g=s.geG(s)
f=s.geH(s)
s=s.geJ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gby(i)
f=h.c
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=i.gbR()
r=h.d
g=s.gan(s)
f=s.gao(s)
s=s.gap()
r.a.uniform3f(r.d,g,f,s)
s=i.gbg(i)
f=h.e
g=s.gan(s)
r=s.gao(s)
s=s.gap()
f.a.uniform3f(f.d,g,r,s)
s=l.b1(i.gcM(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbi()
r=s.gbb(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gbb(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gba(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gal(i)
r=h.y
g=s.gbQ()
f=s.gbl()
s=s.gbv()
r.a.uniform3f(r.d,g,f,s)
s=i.gjO()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjP()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gdF()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gdG()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gdH()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.W(p,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.dR,z.bG,u)
break
case C.h:this.W(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.dS,z.bG,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga0(u).eg(0)
a.Q=u}z=z.id
z.toString
z.at(u.ag(0,!0))}if(w.dy){this.W(p,this.ch)
z=this.a
u=this.ch
z.ab(z.dT,z.dU,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bH
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.W(p,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.dV,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.W(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.dW,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bK
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bJ
u.a.uniform1f(u.d,s)
break
case C.f:this.W(p,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.dX,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,s)
break
case C.h:this.W(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.dY,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bM
z.a.uniform1f(z.d,t)
break
case C.f:this.W(p,this.db.d)
z=this.a
t=this.db.d
z.ak(z.dZ,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break
case C.h:this.W(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.e_,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bu(a)
z=b.e
z.bu(a)
z.b_(a)
z.eD(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].eD(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.i4()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dc().aq},
t:{
eL:function(){var z,y,x
z=new O.j8()
y=O.d6(V.ay)
z.e=y
y.bn(z.gfG(),z.gfH())
y=new O.bi(z,"emission")
y.c=C.c
y.f=new V.a8(0,0,0)
z.f=y
y=new O.bi(z,"ambient")
y.c=C.c
y.f=new V.a8(0,0,0)
z.r=y
y=new O.bi(z,"diffuse")
y.c=C.c
y.f=new V.a8(0,0,0)
z.x=y
y=new O.bi(z,"invDiffuse")
y.c=C.c
y.f=new V.a8(0,0,0)
z.y=y
y=new O.jd(z,"specular")
y.c=C.c
y.f=new V.a8(0,0,0)
y.ch=100
z.z=y
y=new O.ja(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bi(z,"reflect")
y.c=C.c
y.f=new V.a8(0,0,0)
z.cx=y
y=new O.jc(z,"refract")
y.c=C.c
y.f=new V.a8(0,0,0)
y.ch=1
z.cy=y
y=new O.j9(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.iO()
y.bX(D.a6)
y.e=H.c([],[D.ig])
y.f=H.c([],[D.cE])
y.r=H.c([],[D.k5])
y.x=H.c([],[D.ke])
y.y=H.c([],[D.kf])
y.z=H.c([],[D.kg])
y.Q=null
y.ch=null
y.d_(y.gfF(),y.gfZ(),y.gh0())
z.dx=y
x=y.Q
if(x==null){x=D.Q()
y.Q=x
y=x}else y=x
y.h(0,z.gh9())
y=z.dx
x=y.ch
if(x==null){x=D.Q()
y.ch=x
y=x}else y=x
y.h(0,z.gfb())
z.dy=null
return z}}},j9:{"^":"dl;0f,a,b,0c,0d,0e"},dl:{"^":"b;",
br:["eW",function(){}]},ja:{"^":"dl;a,b,0c,0d,0e"},bi:{"^":"dl;0f,a,b,0c,0d,0e",
dr:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.a8])
y.b=!0
this.a.ai(y)}},
br:["bW",function(){this.eW()
this.dr(new V.a8(1,1,1))}],
sal:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.br()
z=this.a
z.a=null
z.ai(null)}this.dr(b)}},jc:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
he:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.ai(z)}},
br:function(){this.bW()
this.he(1)}},jd:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
cf:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.ai(z)}},
br:function(){this.bW()
this.cf(100)}},cJ:{"^":"b;"}}],["","",,T,{"^":"",fc:{"^":"d1;"},kd:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bF:{"^":"b;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isaR:1},aR:{"^":"b;"},eK:{"^":"b;",
aZ:["eV",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["d1",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaR:1},aA:{"^":"eK;0a",
aZ:function(a,b){return!this.eV(0,b)},
i:function(a){return"!["+this.d1(0)+"]"}},jG:{"^":"b;0a,0b",
aZ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bR(this.a)
y=H.bR(this.b)
return z+".."+y},
$isaR:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jG()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jV:{"^":"b;0a",
f0:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b6(0,0,[P.n,P.U])
for(y=new H.dj(a,a.gm(a),0,[H.am(a,"z",0)]);y.D();)z.p(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.bw(0,b)},
i:function(a){var z=this.a
return P.cg(z.ga6(z),0,null)},
$isaR:1,
t:{
x:function(a){var z=new V.jV()
z.f0(a)
return z}}},f5:{"^":"b;a,b,0c,0d",
git:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fj(this.a.l(0,b))
w.a=H.c([],[V.aR])
w.c=!1
C.a.h(this.c,w)
return w},
i7:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},fg:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dY(this.b,"\n","\\n")
y=H.dY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fh:{"^":"b;a,b,0c",
aM:function(a,b,c){var z,y,x
H.u(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kl:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f5(this,b)
z.c=H.c([],[V.fj])
this.a.p(0,b,z)}return z},
R:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.fh(this,a)
y=P.h
z.c=new H.b6(0,0,[y,y])
this.b.p(0,a,z)}return z},
eB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fg])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.i7(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cg(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.git(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cg(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fg(o==null?p.b:o,q,t)}++t}}},
t:{
cK:function(){var z,y
z=new V.kl()
y=P.h
z.a=new H.b6(0,0,[y,V.f5])
z.b=new H.b6(0,0,[y,V.fh])
return z}}},fj:{"^":"eK;b,0c,0a",
i:function(a){return this.b.b+": "+this.d1(0)}}}],["","",,X,{"^":"",ef:{"^":"b;",$isaS:1},iy:{"^":"f9;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},jq:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
b2:[function(a){var z
H.e(a,"$isB")
z=this.f
if(!(z==null))z.G(a)},function(){return this.b2(null)},"j6","$1","$0","gd3",0,2,1],
saL:function(a){var z,y
if(!J.S(this.b,a)){z=this.b
if(z!=null)z.gB().M(0,this.gd3())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd3())
z=new D.J("mover",y,this.b,this,[U.ad])
z.b=!0
this.b2(z)}},
$isaS:1,
$isef:1},f9:{"^":"b;"}}],["","",,V,{"^":"",
nV:function(a){P.kk(C.N,new V.nW(a))},
b3:{"^":"b;",
bo:function(a){this.b=new P.iB(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bd]])},
N:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bd]))
y=a.split("\n")
for(z=y.length,x=[W.bd],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fn(u,0,u.length)
r=s==null?u:s
C.M.eP(t,H.dY(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaB(this.d),t)}},
eo:function(a,b){var z,y,x,w
H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bx()
this.c=y}for(y=y.eB(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bP(y[w])}},
nW:{"^":"m:52;a",
$1:function(a){H.e(a,"$isbs")
P.dX(C.d.eA(this.a.gie(),2)+" fps")}},
ib:{"^":"b3;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bx:function(){var z,y,x,w
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bF())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bF())
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aA()
w=[V.aR]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.aA()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.R("Num")
x=z.l(0,"Float")
x.d=x.a.R("Num")
x=z.l(0,"Sym")
x.d=x.a.R("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.l(0,"EndComment")
x.d=x.a.R("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.l(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.h]
y.aM(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aM(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aM(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iz:{"^":"b3;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bx:function(){var z,y,x,w
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bF())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aA()
w=[V.aR]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aA()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.R("Num")
y=z.l(0,"Float")
y.d=y.a.R("Num")
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.R("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.h]
x.aM(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aM(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aM(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iA:{"^":"b3;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bx:function(){var z,y,x
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bF())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
y=z.l(0,"Other").n(0,"Other")
x=new V.aA()
x.a=H.c([],[V.aR])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.R("String")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
x.aM(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.R("Attr")
x=z.l(0,"Other")
x.d=x.a.R("Other")
return z}},
js:{"^":"b3;a,0b,0c,0d",
eo:function(a,b){H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
this.N(C.a.n(b,"\n"),"#111")},
bP:function(a){},
bx:function(){return}},
jE:{"^":"b;a,b,0c",
dA:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fD().gcP().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.dw(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e2(this.c).h(0,v)
t=W.iE("radio")
t.checked=x
t.name=z
z=W.ah
W.a7(t,"change",H.l(new V.jF(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e2(this.c).h(0,w.createElement("br"))},
b5:function(a,b,c){return this.dA(a,b,c,!1)},
dw:function(a){var z,y,x,w,v
z=P.fD()
y=P.h
x=P.iW(z.gcP(),y,y)
x.p(0,this.a,a)
w=z.ev(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.md([],[]).cU(""),"",v)}},
jF:{"^":"m:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dw(this.d)}}},
k_:{"^":"b;0a,0b",
f2:function(a,b){var z,y,x,w,v,u,t
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
t=W.ah
W.a7(z,"scroll",H.l(new V.k2(x),{func:1,ret:-1,args:[t]}),!1,t)},
dD:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isd",[P.h],"$asd")
this.hh()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eB(C.a.im(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.hC(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cl(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eL:function(a){var z,y,x,w
z=new V.ib("dart")
z.bo("dart")
y=new V.iz("glsl")
y.bo("glsl")
x=new V.iA("html")
x.bo("html")
w=C.a.i8(H.c([z,y,x],[V.b3]),new V.k3(a))
if(w!=null)return w
z=new V.js("plain")
z.bo("plain")
return z},
dB:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.u(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c4(w).a3(w,"+")){C.a.p(a2,x,C.b.au(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a3(w,"-")){C.a.p(a2,x,C.b.au(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eL(a0)
v.eo(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cl(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e4(null)
n.href="#"+H.j(r)
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
if(x>=z.length)return H.f(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.C)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.C)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gZ(w);b.D();)h.appendChild(b.gO(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hL:function(a){var z,y,x,w,v,u,t
H.u(a,"$isd",[P.h],"$asd")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
this.a.appendChild(y)
w=y.insertRow(-1)
x=H.e(w.insertCell(-1),"$isdw").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<1;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$isdw")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hh:function(){var z,y,x,w
if(this.b!=null)return
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aA()
w=[V.aR]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.aA()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.aA()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.aA()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aA()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
x=z.l(0,"Other").n(0,"Other")
y=new V.aA()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.R("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.l(0,"Other")
x.d=x.a.R("Other")
this.b=z},
t:{
k0:function(a,b){var z=new V.k_()
z.f2(a,!0)
return z}}},
k2:{"^":"m:15;a",
$1:function(a){P.fe(C.q,new V.k1(this.a))}},
k1:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.af(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k3:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb3").a===this.a}}}],["","",,U,{"^":"",
dN:function(a,b,c,d,e,f,g,h){var z,y,x,w,v,u,t,s
z=c>1?1:c
y=d>1?1:d
x=e>1?1:e
w=new V.a8(z,y,x)
v=U.da(null)
v.h(0,U.c8(V.eP(0,0,2)))
x=new U.f0()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.seI(0)
x.seq(0,0)
x.sew(0)
z=x.d
if(!$.o.$2(z,f)){u=x.d
x.d=f
z=new D.J("deltaYaw",u,f,x,[P.p])
z.b=!0
x.J(z)}z=x.e
if(!$.o.$2(z,g)){u=x.e
x.e=g
z=new D.J("deltaPitch",u,g,x,[P.p])
z.b=!0
x.J(z)}z=x.f
if(!$.o.$2(z,h)){u=x.f
x.f=h
z=new D.J("deltaRoll",u,h,x,[P.p])
z.b=!0
x.J(z)}v.h(0,x)
t=E.d9(null,!0,null,"",null,null)
z=U.da(null)
z.h(0,U.c8(V.cD(0.1,0.1,0.1,1)))
z.h(0,v)
t.saL(z)
t.sa9(0,F.hB(8,null,1,8))
z=O.eL()
z.f.sal(0,w)
t.sbh(z)
s=new D.cE()
s.c=new V.a8(1,1,1)
s.d=1
s.e=0
s.f=0
s.a=new V.a2(0,0,0)
u=s.b
s.b=v
v.gB().h(0,s.gf8())
z=new D.J("mover",u,s.b,s,[U.ad])
z.b=!0
s.ah(z)
s.c=w
if(!w.v(0,w)){u=s.c
s.c=w
z=new D.J("color",u,w,s,[V.a8])
z.b=!0
s.ah(z)}z=s.d
if(!$.o.$2(z,1)){u=s.d
s.d=1
z=new D.J("attenuation0",u,1,s,[P.p])
z.b=!0
s.ah(z)}z=s.e
if(!$.o.$2(z,0.5)){u=s.e
s.e=0.5
z=new D.J("attenuation1",u,0.5,s,[P.p])
z.b=!0
s.ah(z)}z=s.f
if(!$.o.$2(z,0.15)){u=s.f
s.f=0.15
z=new D.J("attenuation2",u,0.15,s,[P.p])
z.b=!0
s.ah(z)}a.dx.h(0,s)
b.d.h(0,t)},
hx:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.k0("Test 021",!0)
y=W.eg(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dD(H.c(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],x))
z.hL(H.c(["shapes"],x))
z.dD(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.ki(w,!0,!0,!0,!1)
u=E.d9(null,!0,null,"",null,null)
u.saL(U.c8(V.cD(1,1,1,1)))
u.sa9(0,F.hE(30,1,15,0.5))
t=E.d9(null,!0,null,"",null,null)
t.saL(U.c8(V.cD(3,3,3,1)))
s=F.dR(1,null,null,1)
s.b9()
t.sa9(0,s)
r=U.da(null)
s=v.r
q=new U.kM()
p=U.d7()
p.scW(0,!0)
p.scH(6.283185307179586)
p.scJ(0)
p.sa1(0,0)
p.scI(100)
p.sU(0)
p.scu(0.5)
q.b=p
o=q.gaS()
p.gB().h(0,o)
p=U.d7()
p.scW(0,!0)
p.scH(6.283185307179586)
p.scJ(0)
p.sa1(0,0)
p.scI(100)
p.sU(0)
p.scu(0.5)
q.c=p
p.gB().h(0,o)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
n=new X.aH(!1,!1,!1)
m=q.d
q.d=n
p=[X.aH]
o=new D.J("modifiers",m,n,q,p)
o.b=!0
q.J(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.J("invertX",o,!1,q,[P.U])
o.b=!0
q.J(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.J("invertY",o,!1,q,[P.U])
o.b=!0
q.J(o)}q.b6(s)
r.h(0,q)
s=v.r
q=new U.kL()
o=U.d7()
o.scW(0,!0)
o.scH(6.283185307179586)
o.scJ(0)
o.sa1(0,0)
o.scI(100)
o.sU(0)
o.scu(0.2)
q.b=o
o.gB().h(0,q.gaS())
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
n=new X.aH(!0,!1,!1)
m=q.c
q.c=n
o=new D.J("modifiers",m,n,q,p)
o.b=!0
q.J(o)
q.b6(s)
r.h(0,q)
s=v.r
q=new U.kN()
q.c=0.01
q.d=0
q.e=0
n=new X.aH(!1,!1,!1)
q.b=n
p=new D.J("modifiers",null,n,q,p)
p.b=!0
q.J(p)
q.b6(s)
r.h(0,q)
r.h(0,U.c8(V.eP(0,0,5)))
l=O.eL()
s=l.r
s.sal(0,new V.a8(0.4,0.4,0.4))
s=l.x
s.sal(0,new V.a8(0.4,0.4,0.4))
s=l.z
s.sal(0,new V.a8(0.3,0.3,0.3))
s=l.z
if(s.c===C.c){s.c=C.i
s.bW()
s.cf(100)
q=s.a
q.a=null
q.ai(null)}s.cf(100)
k=new M.ip()
s=O.d6(E.aQ)
k.d=s
s.bn(k.gfJ(),k.gfK())
k.e=null
k.f=null
k.r=null
k.x=null
j=new X.jq()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saL(null)
s=j.c
if(!$.o.$2(s,1.0471975511965976)){m=j.c
j.c=1.0471975511965976
s=new D.J("fov",m,1.0471975511965976,j,[P.p])
s.b=!0
j.b2(s)}s=j.d
if(!$.o.$2(s,0.1)){m=j.d
j.d=0.1
s=new D.J("near",m,0.1,j,[P.p])
s.b=!0
j.b2(s)}s=j.e
if(!$.o.$2(s,2000)){m=j.e
j.e=2000
s=new D.J("far",m,2000,j,[P.p])
s.b=!0
j.b2(s)}s=k.a
if(s!==j){if(s!=null)s.gB().M(0,k.gav())
m=k.a
k.a=j
j.gB().h(0,k.gav())
s=new D.J("camera",m,k.a,k,[X.ef])
s.b=!0
k.aP(s)}i=new X.iy()
s=new V.bb(0,0,0,1)
i.a=s
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
s=V.eZ(0,0,1,1)
i.r=s
s=k.b
if(s!==i){if(s!=null)s.gB().M(0,k.gav())
m=k.b
k.b=i
i.gB().h(0,k.gav())
s=new D.J("target",m,k.b,k,[X.f9])
s.b=!0
k.aP(s)}k.sbh(null)
k.sbh(l)
k.d.h(0,t)
k.d.h(0,u)
k.a.saL(r)
s=v.d
if(s!==k){if(s!=null)s.gB().M(0,v.gd2())
v.d=k
k.gB().h(0,v.gd2())
v.f4()}U.dN(l,k,1,0,0,0.3,0,0)
U.dN(l,k,0,1,0,0,0.4,0)
U.dN(l,k,0,0,1,0.5,0.5,0)
s=new V.jE("shapes",!0)
x=x.getElementById("shapes")
s.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
s.b5(0,"Cube",new U.nI(u))
s.b5(0,"Cylinder",new U.nJ(u))
s.b5(0,"Cone",new U.nK(u))
s.b5(0,"Sphere",new U.nL(u))
s.dA(0,"Toroid",new U.nM(u),!0)
s.b5(0,"Knot",new U.nN(u))
x=v.z
if(x==null){x=D.Q()
v.z=x}s={func:1,ret:-1,args:[D.B]}
q=H.l(new U.nO(z,l),s)
p=x.b
if(p==null){s=H.c([],[s])
x.b=s
x=s}else x=p
C.a.h(x,q)
V.nV(v)},
nI:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.dR(1,null,null,1))}},
nJ:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.hn(1,!0,!0,1,40,1))}},
nK:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.hn(1,!0,!1,1,40,0))}},
nL:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.hB(6,null,1,6))}},
nM:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.hE(30,1,15,0.5))}},
nN:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.nF(120,1,2,12,0.3,3))}},
nO:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isB")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dB("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dB("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eC.prototype
return J.iJ.prototype}if(typeof a=="string")return J.cc.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.iI.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.aM=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.c3=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.nt=function(a){if(typeof a=="number")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.nu=function(a){if(typeof a=="number")return J.cb.prototype
if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.c4=function(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.aD=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).v(a,b)}
J.hF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nt(a).S(a,b)}
J.e_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nu(a).j(a,b)}
J.e0=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hu(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).k(a,b)}
J.d_=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hu(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c3(a).p(a,b,c)}
J.hG=function(a,b){return J.c4(a).H(a,b)}
J.hH=function(a,b,c){return J.aD(a).h7(a,b,c)}
J.hI=function(a,b,c,d){return J.aD(a).dC(a,b,c,d)}
J.hJ=function(a,b){return J.c4(a).Y(a,b)}
J.d0=function(a,b,c){return J.aM(a).hY(a,b,c)}
J.cp=function(a,b){return J.c3(a).I(a,b)}
J.hK=function(a,b,c,d){return J.c3(a).aK(a,b,c,d)}
J.e1=function(a,b){return J.c3(a).K(a,b)}
J.hL=function(a){return J.aD(a).ghT(a)}
J.e2=function(a){return J.aD(a).gcr(a)}
J.c6=function(a){return J.O(a).gV(a)}
J.b2=function(a){return J.c3(a).gZ(a)}
J.ao=function(a){return J.aM(a).gm(a)}
J.hM=function(a){return J.aD(a).gcN(a)}
J.hN=function(a){return J.aD(a).giX(a)}
J.e3=function(a){return J.c3(a).iM(a)}
J.hO=function(a,b){return J.aD(a).iQ(a,b)}
J.hP=function(a,b){return J.aD(a).sa2(a,b)}
J.hQ=function(a,b,c){return J.c4(a).u(a,b,c)}
J.hR=function(a){return J.c4(a).j0(a)}
J.ac=function(a){return J.O(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cs.prototype
C.l=W.d5.prototype
C.M=W.bd.prototype
C.P=J.t.prototype
C.a=J.bh.prototype
C.e=J.eC.prototype
C.w=J.eD.prototype
C.d=J.cb.prototype
C.b=J.cc.prototype
C.W=J.cd.prototype
C.a1=H.dr.prototype
C.a2=W.jk.prototype
C.E=J.jr.prototype
C.F=W.kc.prototype
C.u=J.ci.prototype
C.G=W.bV.prototype
C.H=W.l8.prototype
C.J=new P.hW(!1)
C.I=new P.hV(C.J)
C.K=new P.jp()
C.L=new P.kV()
C.j=new P.lW()
C.c=new A.cu(0,"ColorSourceType.None")
C.i=new A.cu(1,"ColorSourceType.Solid")
C.f=new A.cu(2,"ColorSourceType.Texture2D")
C.h=new A.cu(3,"ColorSourceType.TextureCube")
C.q=new P.be(0)
C.N=new P.be(5e6)
C.O=new P.iC("element",!0,!1,!1,!1)
C.Q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.R=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.S=function(getTagFallback) {
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
C.T=function() {
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
C.U=function(hooks) {
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
C.V=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.aa([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.aa([0,0,32776,33792,1,10240,0,0]),[P.n])
C.X=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Y=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.aa([]),[P.h])
C.Z=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a_=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a0=new H.i7(0,{},C.A,[P.h,P.h])
C.k=new P.kO(!1)
$.aF=0
$.bG=null
$.ea=null
$.dK=!1
$.hs=null
$.hk=null
$.hA=null
$.cU=null
$.cX=null
$.dU=null
$.bz=null
$.c_=null
$.c0=null
$.dL=!1
$.Y=C.j
$.aP=null
$.d8=null
$.ev=null
$.eu=null
$.eq=null
$.ep=null
$.eo=null
$.en=null
$.o=V.je()
$.eV=null
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
I.$lazy(y,x,w)}})(["em","$get$em",function(){return H.hr("_$dart_dartClosure")},"de","$get$de",function(){return H.hr("_$dart_js")},"fk","$get$fk",function(){return H.aJ(H.cL({
toString:function(){return"$receiver$"}}))},"fl","$get$fl",function(){return H.aJ(H.cL({$method$:null,
toString:function(){return"$receiver$"}}))},"fm","$get$fm",function(){return H.aJ(H.cL(null))},"fn","$get$fn",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aJ(H.cL(void 0))},"fs","$get$fs",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fp","$get$fp",function(){return H.aJ(H.fq(null))},"fo","$get$fo",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aJ(H.fq(void 0))},"ft","$get$ft",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return P.l9()},"c1","$get$c1",function(){return[]},"fG","$get$fG",function(){return P.kS()},"fN","$get$fN",function(){return H.ji(H.by(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"h9","$get$h9",function(){return P.jL("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hg","$get$hg",function(){return P.n2()},"ek","$get$ek",function(){return{}},"fR","$get$fR",function(){return P.eH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dG","$get$dG",function(){return P.di(P.h,P.ca)},"fJ","$get$fJ",function(){return Z.au(0)},"fH","$get$fH",function(){return Z.au(511)},"aY","$get$aY",function(){return Z.au(1)},"aX","$get$aX",function(){return Z.au(2)},"aW","$get$aW",function(){return Z.au(4)},"aZ","$get$aZ",function(){return Z.au(8)},"b_","$get$b_",function(){return Z.au(16)},"bT","$get$bT",function(){return Z.au(32)},"bU","$get$bU",function(){return Z.au(64)},"fI","$get$fI",function(){return Z.au(96)},"bw","$get$bw",function(){return Z.au(128)},"aV","$get$aV",function(){return Z.au(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.M,args:[F.ar]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.ak,P.p,P.p]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.M,args:[D.B]},{func:1,ret:-1,args:[P.n,[P.i,E.aQ]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.U,args:[W.aI]},{func:1,ret:P.M,args:[W.ah]},{func:1,ret:-1,args:[P.n,[P.i,U.ad]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.n,[P.i,D.a6]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.U,args:[W.V,P.h,P.h,W.ck]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.U,args:[W.G]},{func:1,ret:P.M,args:[,]},{func:1,ret:W.G},{func:1,ret:V.a2,args:[P.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.U,args:[P.h]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:-1,args:[P.n,[P.i,V.ay]]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.M,args:[P.a5]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.U,args:[P.p,P.p]},{func:1,ret:P.T,args:[P.n]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.M,args:[P.h,,]},{func:1,ret:P.U,args:[[P.i,D.a6]]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.L,P.h,P.h],args:[[P.L,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b0,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.M,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aB]},{func:1,ret:P.M,args:[P.bs]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.U,args:[V.b3]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.V,args:[W.G]}]
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
if(x==y)H.nZ(d||a)
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
Isolate.aa=a.aa
Isolate.dS=a.dS
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
if(typeof dartMainRunner==="function")dartMainRunner(U.hx,[])
else U.hx([])})})()
//# sourceMappingURL=test.dart.js.map
