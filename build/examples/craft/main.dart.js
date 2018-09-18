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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isp)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dR(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.c2=function(){}
var dart=[["","",,H,{"^":"",mz:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cT:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dU==null){H.lV()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.ft("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dh()]
if(v!=null)return v
v=H.m_(a)
if(v!=null)return v
if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$dh(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
p:{"^":"b;",
t:function(a,b){return a===b},
gW:function(a){return H.bQ(a)},
i:["er",function(a){return"Instance of '"+H.bo(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i1:{"^":"p;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isa8:1},
ew:{"^":"p;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isR:1},
di:{"^":"p;",
gW:function(a){return 0},
i:["es",function(a){return String(a)}]},
iI:{"^":"di;"},
dI:{"^":"di;"},
cb:{"^":"di;",
i:function(a){var z=a[$.$get$ed()]
if(z==null)return this.es(a)
return"JavaScript function for "+H.l(J.as(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isda:1},
bl:{"^":"p;$ti",
h:function(a,b){H.E(b,H.A(a,0))
if(!!a.fixed$length)H.t(P.J("add"))
a.push(b)},
it:function(a,b){if(!!a.fixed$length)H.t(P.J("removeAt"))
if(b<0||b>=a.length)throw H.d(P.cf(b,null,null))
return a.splice(b,1)[0]},
X:function(a,b){var z
if(!!a.fixed$length)H.t(P.J("remove"))
for(z=0;z<a.length;++z)if(J.Y(a[z],b)){a.splice(z,1)
return!0}return!1},
aB:function(a,b){var z,y
H.q(b,"$ish",[H.A(a,0)],"$ash")
if(!!a.fixed$length)H.t(P.J("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.bC(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
i3:function(a){return this.B(a,"")},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
bT:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ao(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ao(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.A(a,0)])
return H.a(a.slice(b,c),[H.A(a,0)])},
gcF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.i_())},
ar:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Y(a[z],b))return!0
return!1},
i:function(a){return P.de(a,"[","]")},
ga_:function(a){return new J.at(a,a.length,0,[H.A(a,0)])},
gW:function(a){return H.bQ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.J("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.cw(b,"newLength",null))
if(b<0)throw H.d(P.ao(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
return a[b]},
m:function(a,b,c){H.z(b)
H.E(c,H.A(a,0))
if(!!a.immutable$list)H.t(P.J("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
a[b]=c},
$isF:1,
$asF:I.c2,
$ish:1,
$isc:1,
q:{
i0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ao(a,0,4294967295,"length",null))
return J.et(new Array(a),b)},
et:function(a,b){return J.bJ(H.a(a,[b]))},
bJ:function(a){H.ct(a)
a.fixed$length=Array
return a}}},
my:{"^":"bl;$ti"},
at:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cH:{"^":"p;",
cs:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gbO(b)
if(this.gbO(a)===z)return 0
if(this.gbO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbO:function(a){return a===0?1/a<0:a<0},
a7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.J(""+a+".toInt()"))},
b1:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.J(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
hM:function(a,b,c){if(C.e.cs(b,c)>0)throw H.d(H.aI(b))
if(this.cs(a,b)<0)return b
if(this.cs(a,c)>0)return c
return a},
ei:function(a,b){var z
if(b>20)throw H.d(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbO(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
cU:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ev:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.J("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
ep:function(a,b){if(b<0)throw H.d(H.aI(b))
return b>31?0:a<<b>>>0},
bu:function(a,b){var z
if(a>0)z=this.h8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h8:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.d(H.aI(b))
return a<b},
$isy:1,
$isX:1},
ev:{"^":"cH;",
cM:function(a,b){var z=this.ep(1,b-1)
return((a&z-1)>>>0)-((a&z)>>>0)},
$isx:1},
eu:{"^":"cH;"},
dg:{"^":"p;",
cr:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b<0)throw H.d(H.aJ(a,b))
if(b>=a.length)H.t(H.aJ(a,b))
return a.charCodeAt(b)},
bp:function(a,b){if(b>=a.length)throw H.d(H.aJ(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.U(b)
if(typeof b!=="string")throw H.d(P.cw(b,null,null))
return a+b},
bU:function(a,b,c){H.z(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cf(b,null,null))
if(b>c)throw H.d(P.cf(b,null,null))
if(c>a.length)throw H.d(P.cf(c,null,null))
return a.substring(b,c)},
cW:function(a,b){return this.bU(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.x)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ih:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aH:function(a,b){return this.ih(a,b," ")},
hN:function(a,b,c){if(c>a.length)throw H.d(P.ao(c,0,a.length,null,null))
return H.h8(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isF:1,
$asF:I.c2,
$iseM:1,
$iso:1}}],["","",,H,{"^":"",
i_:function(){return new P.jo("No element")},
a9:{"^":"jT;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.cr(this.a,b)},
$asdJ:function(){return[P.x]},
$asw:function(){return[P.x]},
$ash:function(){return[P.x]},
$asc:function(){return[P.x]}},
hI:{"^":"h;"},
eA:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.bd(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.bC(z))
w=this.c
if(typeof x!=="number")return H.e(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
ij:{"^":"h;a,b,$ti",
ga_:function(a){return new H.ik(J.c4(this.a),this.b,this.$ti)},
gl:function(a){return J.bA(this.a)},
H:function(a,b){return this.b.$1(J.cY(this.a,b))},
$ash:function(a,b){return[b]}},
ik:{"^":"df;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asdf:function(a,b){return[b]}},
k8:{"^":"h;a,b,$ti",
ga_:function(a){return new H.k9(J.c4(this.a),this.b,this.$ti)}},
k9:{"^":"df;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cD:{"^":"b;$ti"},
dJ:{"^":"b;$ti",
m:function(a,b,c){H.z(b)
H.E(c,H.az(this,"dJ",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}},
jT:{"^":"cI+dJ;"}}],["","",,H,{"^":"",
lQ:function(a){return init.types[H.z(a)]},
lY:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isI},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.as(a)
if(typeof z!=="string")throw H.d(H.aI(a))
return z},
bQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iU:function(a,b){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=H.U(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
bo:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.P(a).$isdI){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bp(w,0)===36)w=C.i.cW(w,1)
r=H.dV(H.ct(H.be(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eP:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iW:function(a){var z,y,x,w
z=H.a([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aI(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.bu(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aI(w))}return H.eP(z)},
eQ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aI(x))
if(x<0)throw H.d(H.aI(x))
if(x>65535)return H.iW(a)}return H.eP(a)},
iV:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.bu(z,10))>>>0,56320|z&1023)}throw H.d(P.ao(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iT:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
iR:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
iN:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
iO:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
iQ:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
iS:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
iP:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
e:function(a){throw H.d(H.aI(a))},
j:function(a,b){if(a==null)J.bA(a)
throw H.d(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
z=H.z(J.bA(a))
if(!(b<0)){if(typeof z!=="number")return H.e(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cf(b,"index",null)},
lM:function(a,b,c){if(a>c)return new P.cK(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cK(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
aI:function(a){return new P.aK(!0,a,null,null)},
lH:function(a){if(typeof a!=="number")throw H.d(H.aI(a))
return a},
d:function(a){var z
if(a==null)a=new P.eL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ha})
z.name=""}else z.toString=H.ha
return z},
ha:function(){return J.as(this.dartException)},
t:function(a){throw H.d(a)},
D:function(a){throw H.d(P.bC(a))},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.m9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bu(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dj(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eK(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fc()
u=$.$get$fd()
t=$.$get$fe()
s=$.$get$ff()
r=$.$get$fj()
q=$.$get$fk()
p=$.$get$fh()
$.$get$fg()
o=$.$get$fm()
n=$.$get$fl()
m=v.af(y)
if(m!=null)return z.$1(H.dj(H.U(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.dj(H.U(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eK(H.U(y),m))}}return z.$1(new H.jS(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eZ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aK(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eZ()
return a},
by:function(a){var z
if(a==null)return new H.fJ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fJ(a)},
lP:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
lX:function(a,b,c,d,e,f){H.i(a,"$isda")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var z
H.z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lX)
a.$identity=z
return z},
hw:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$isc){z.$reflectionInfo=d
x=H.iZ(z).r}else x=d
w=e?Object.create(new H.jq().constructor.prototype):Object.create(new H.d0(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.n()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e8(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lQ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e2:H.d1
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e8(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ht:function(a,b,c,d){var z=H.d1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e8:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hv(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ht(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.n()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bB
if(v==null){v=H.cy("self")
$.bB=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.n()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bB
if(v==null){v=H.cy("self")
$.bB=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hu:function(a,b,c,d){var z,y
z=H.d1
y=H.e2
switch(b?-1:a){case 0:throw H.d(H.j7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hv:function(a,b){var z,y,x,w,v,u,t,s
z=$.bB
if(z==null){z=H.cy("self")
$.bB=z}y=$.e1
if(y==null){y=H.cy("receiver")
$.e1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hu(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.n()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.n()
$.aA=y+1
return new Function(z+y+"}")()},
dR:function(a,b,c,d,e,f,g){var z,y
z=J.bJ(H.ct(b))
H.z(c)
y=!!J.P(d).$isc?J.bJ(d):d
return H.hw(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ax(a,"String"))},
lN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ax(a,"double"))},
m3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ax(a,"num"))},
fY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ax(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ax(a,"int"))},
h6:function(a,b){throw H.d(H.ax(a,H.U(b).substring(3)))},
m5:function(a,b){var z=J.bd(b)
throw H.d(H.hs(a,z.bU(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.h6(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.m5(a,b)},
ct:function(a){if(a==null)return a
if(!!J.P(a).$isc)return a
throw H.d(H.ax(a,"List"))},
lZ:function(a,b){if(a==null)return a
if(!!J.P(a).$isc)return a
if(J.P(a)[b])return a
H.h6(a,b)},
fZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.z(z)]
else return a.$S()}return},
cr:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fZ(J.P(a))
if(z==null)return!1
y=H.h2(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dN)return a
$.dN=!0
try{if(H.cr(a,b))return a
z=H.cu(b)
y=H.ax(a,z)
throw H.d(y)}finally{$.dN=!1}},
dS:function(a,b){if(a!=null&&!H.dQ(a,b))H.t(H.ax(a,H.cu(b)))
return a},
fT:function(a){var z
if(a instanceof H.v){z=H.fZ(J.P(a))
if(z!=null)return H.cu(z)
return"Closure"}return H.bo(a)},
m8:function(a){throw H.d(new P.hB(H.U(a)))},
h_:function(a){return init.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
be:function(a){if(a==null)return
return a.$ti},
nn:function(a,b,c){return H.bz(a["$as"+H.l(c)],H.be(b))},
bx:function(a,b,c,d){var z
H.U(c)
H.z(d)
z=H.bz(a["$as"+H.l(c)],H.be(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.U(b)
H.z(c)
z=H.bz(a["$as"+H.l(b)],H.be(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.z(b)
z=H.be(a)
return z==null?null:z[b]},
cu:function(a){var z=H.bf(a,null)
return z},
bf:function(a,b){var z,y
H.q(b,"$isc",[P.o],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dV(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.l(b[y])}if('func' in a)return H.lx(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.q(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.a([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.i.n(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bf(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bf(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bf(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bf(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lO(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.bf(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dV:function(a,b,c){var z,y,x,w,v,u
H.q(c,"$isc",[P.o],"$asc")
if(a==null)return""
z=new P.cq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bf(u,c)}v="<"+z.i(0)+">"
return v},
bz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.be(a)
y=J.P(a)
if(y[b]==null)return!1
return H.fW(H.bz(y[d],z),null,c,null)},
q:function(a,b,c,d){var z,y
H.U(b)
H.ct(c)
H.U(d)
if(a==null)return a
z=H.c1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dV(c,0,null)
throw H.d(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
nl:function(a,b,c){return a.apply(b,H.bz(J.P(b)["$as"+H.l(c)],H.be(b)))},
h3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="R"||a===-1||a===-2||H.h3(z)}return!1},
dQ:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="R"||b===-1||b===-2||H.h3(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dQ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cr(a,b)}y=J.P(a).constructor
x=H.be(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dQ(a,b))throw H.d(H.ax(a,H.cu(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="R")return!0
if('func' in c)return H.h2(a,b,c,d)
if('func' in a)return c.builtin$cls==="da"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bz(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cu(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fW(H.bz(r,z),b,u,d)},
h2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.m2(m,b,l,d)},
m2:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
nm:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
m_:function(a){var z,y,x,w,v,u
z=H.U($.h0.$1(a))
y=$.cS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.fV.$2(a,z))
if(z!=null){y=$.cS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cV(x)
$.cS[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cU[z]=x
return x}if(v==="-"){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h5(a,x)
if(v==="*")throw H.d(P.ft(z))
if(init.leafTags[z]===true){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h5(a,x)},
h5:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cV:function(a){return J.dX(a,!1,null,!!a.$isI)},
m1:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cV(z)
else return J.dX(z,c,null,null)},
lV:function(){if(!0===$.dU)return
$.dU=!0
H.lW()},
lW:function(){var z,y,x,w,v,u,t,s
$.cS=Object.create(null)
$.cU=Object.create(null)
H.lR()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h7.$1(v)
if(u!=null){t=H.m1(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lR:function(){var z,y,x,w,v,u,t
z=C.F()
z=H.bu(C.C,H.bu(C.H,H.bu(C.p,H.bu(C.p,H.bu(C.G,H.bu(C.D,H.bu(C.E(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h0=new H.lS(v)
$.fV=new H.lT(u)
$.h7=new H.lU(t)},
bu:function(a,b){return a(b)||b},
h8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h9:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iY:{"^":"b;a,b,c,d,e,f,r,0x",q:{
iZ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.iY(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jG:{"^":"b;a,b,c,d,e,f",
af:function(a){var z,y,x
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
aG:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.a([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fi:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iD:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eK:function(a,b){return new H.iD(a,b==null?null:b.method)}}},
i4:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
dj:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i4(a,y,z?null:b.receiver)}}},
jS:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
m9:{"^":"v:17;a",
$1:function(a){if(!!J.P(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fJ:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
v:{"^":"b;",
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
gek:function(){return this},
$isda:1,
gek:function(){return this}},
f3:{"^":"v;"},
jq:{"^":"f3;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d0:{"^":"f3;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bQ(this.a)
else y=typeof z!=="object"?J.bg(z):H.bQ(z)
return(y^H.bQ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bo(z)+"'")},
q:{
d1:function(a){return a.a},
e2:function(a){return a.c},
cy:function(a){var z,y,x,w,v
z=new H.d0("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jH:{"^":"a5;a",
i:function(a){return this.a},
q:{
ax:function(a,b){return new H.jH("TypeError: "+H.l(P.cC(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
hr:{"^":"a5;a",
i:function(a){return this.a},
q:{
hs:function(a,b){return new H.hr("CastError: "+H.l(P.cC(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
j6:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
j7:function(a){return new H.j6(a)}}},
aM:{"^":"ih;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaG:function(a){return new H.ez(this,[H.A(this,0)])},
dF:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.df(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.df(y,b)}else return this.i1(b)},
i1:function(a){var z=this.d
if(z==null)return!1
return this.cE(this.c3(z,J.bg(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.i2(b)},
i2:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c3(z,J.bg(a)&0x3ffffff)
x=this.cE(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c5()
this.b=z}this.d4(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c5()
this.c=y}this.d4(y,b,c)}else{x=this.d
if(x==null){x=this.c5()
this.d=x}w=J.bg(b)&0x3ffffff
v=this.c3(x,w)
if(v==null)this.cb(x,w,[this.c6(b,c)])
else{u=this.cE(v,b)
if(u>=0)v[u].b=c
else v.push(this.c6(b,c))}}},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.bC(this))
z=z.c}},
d4:function(a,b,c){var z
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
z=this.bq(a,b)
if(z==null)this.cb(a,b,this.c6(b,c))
else z.b=c},
fh:function(){this.r=this.r+1&67108863},
c6:function(a,b){var z,y
z=new H.i8(H.E(a,H.A(this,0)),H.E(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fh()
return z},
cE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].a,b))return y
return-1},
i:function(a){return P.eC(this)},
bq:function(a,b){return a[b]},
c3:function(a,b){return a[b]},
cb:function(a,b,c){a[b]=c},
f9:function(a,b){delete a[b]},
df:function(a,b){return this.bq(a,b)!=null},
c5:function(){var z=Object.create(null)
this.cb(z,"<non-identifier-key>",z)
this.f9(z,"<non-identifier-key>")
return z},
$isey:1},
i8:{"^":"b;a,b,0c,0d"},
ez:{"^":"hI;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.i9(z,z.r,this.$ti)
y.c=z.e
return y}},
i9:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bC(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lS:{"^":"v:17;a",
$1:function(a){return this.a(a)}},
lT:{"^":"v:30;a",
$2:function(a,b){return this.a(a,b)}},
lU:{"^":"v:28;a",
$1:function(a){return this.a(H.U(a))}},
i2:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseM:1,
q:{
i3:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.em("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lO:function(a){return J.et(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
m4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bY:function(a){var z,y,x,w
z=J.P(a)
if(!!z.$isF)return a
y=z.gl(a)
if(typeof y!=="number")return H.e(y)
x=new Array(y)
x.fixed$length=Array
w=0
while(!0){y=z.gl(a)
if(typeof y!=="number")return H.e(y)
if(!(w<y))break
C.a.m(x,w,z.k(a,w));++w}return x},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aJ(b,a))},
lw:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.lM(a,b,c))
return b},
iz:{"^":"p;",$isn6:1,"%":"DataView;ArrayBufferView;dn|fD|fE|iy|fF|fG|b2"},
dn:{"^":"iz;",
gl:function(a){return a.length},
$isF:1,
$asF:I.c2,
$isI:1,
$asI:I.c2},
iy:{"^":"fE;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.z(b)
H.lN(c)
H.aH(b,a,a.length)
a[b]=c},
$ascD:function(){return[P.y]},
$asw:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]},
$isc:1,
$asc:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
b2:{"^":"fG;",
m:function(a,b,c){H.z(b)
H.z(c)
H.aH(b,a,a.length)
a[b]=c},
$ascD:function(){return[P.x]},
$asw:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
mH:{"^":"b2;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mI:{"^":"b2;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mJ:{"^":"b2;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mK:{"^":"b2;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mL:{"^":"b2;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mM:{"^":"b2;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
iA:{"^":"b2;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
bT:function(a,b,c){return new Uint8Array(a.subarray(b,H.lw(b,c,a.length)))},
"%":";Uint8Array"},
fD:{"^":"dn+w;"},
fE:{"^":"fD+cD;"},
fF:{"^":"dn+w;"},
fG:{"^":"fF+cD;"}}],["","",,P,{"^":"",
kd:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lE()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bv(new P.kf(z),1)).observe(y,{childList:true})
return new P.ke(z,y,x)}else if(self.setImmediate!=null)return P.lF()
return P.lG()},
na:[function(a){self.scheduleImmediate(H.bv(new P.kg(H.f(a,{func:1,ret:-1})),0))},"$1","lE",4,0,11],
nb:[function(a){self.setImmediate(H.bv(new P.kh(H.f(a,{func:1,ret:-1})),0))},"$1","lF",4,0,11],
nc:[function(a){P.dE(C.m,H.f(a,{func:1,ret:-1}))},"$1","lG",4,0,11],
dE:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.e.Z(a.a,1000)
return P.lc(z<0?0:z,b)},
f7:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.aF]})
z=C.e.Z(a.a,1000)
return P.ld(z<0?0:z,b)},
lA:function(a,b){if(H.cr(a,{func:1,args:[P.b,P.aw]}))return b.is(a,null,P.b,P.aw)
if(H.cr(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lz:function(){var z,y
for(;z=$.bt,z!=null;){$.c_=null
y=z.b
$.bt=y
if(y==null)$.bZ=null
z.a.$0()}},
nk:[function(){$.dO=!0
try{P.lz()}finally{$.c_=null
$.dO=!1
if($.bt!=null)$.$get$dK().$1(P.fX())}},"$0","fX",0,0,3],
fS:function(a){var z=new P.fy(H.f(a,{func:1,ret:-1}))
if($.bt==null){$.bZ=z
$.bt=z
if(!$.dO)$.$get$dK().$1(P.fX())}else{$.bZ.b=z
$.bZ=z}},
lD:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bt
if(z==null){P.fS(a)
$.c_=$.bZ
return}y=new P.fy(a)
x=$.c_
if(x==null){y.b=z
$.c_=y
$.bt=y}else{y.b=x.b
x.b=y
$.c_=y
if(y.b==null)$.bZ=y}},
m6:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cR(null,null,C.j,a)
return}y.toString
P.cR(null,null,y,H.f(y.cn(a),z))},
dD:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dE(a,b)}return P.dE(a,H.f(y.cn(b),z))},
f6:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aF]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.f7(a,b)}x=y.dB(b,P.aF)
$.T.toString
return P.f7(a,H.f(x,z))},
cQ:function(a,b,c,d,e){var z={}
z.a=d
P.lD(new P.lB(z,e))},
fQ:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fR:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
lC:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cR:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cn(d):c.hK(d,-1)
P.fS(d)},
kf:{"^":"v:13;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ke:{"^":"v:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kg:{"^":"v:2;a",
$0:function(){this.a.$0()}},
kh:{"^":"v:2;a",
$0:function(){this.a.$0()}},
fM:{"^":"b;a,0b,c",
eN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.lf(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
eO:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.le(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
$isaF:1,
q:{
lc:function(a,b){var z=new P.fM(!0,0)
z.eN(a,b)
return z},
ld:function(a,b){var z=new P.fM(!1,0)
z.eO(a,b)
return z}}},
lf:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
le:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ev(w,x)}z.c=y
this.d.$1(z)}},
bs:{"^":"b;0a,b,c,d,e,$ti",
i7:function(a){if(this.c!==6)return!0
return this.b.b.cL(H.f(this.d,{func:1,ret:P.a8,args:[P.b]}),a.a,P.a8,P.b)},
i0:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.cr(z,{func:1,args:[P.b,P.aw]}))return H.dS(w.iA(z,a.a,a.b,null,y,P.aw),x)
else return H.dS(w.cL(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;dt:a<,b,0h0:c<,$ti",
eh:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lA(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.d5(new P.bs(x,w,a,b,[z,c]))
return x},
iF:function(a,b){return this.eh(a,null,b)},
d5:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isbs")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaT")
z=y.a
if(z<4){y.d5(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cR(null,null,z,H.f(new P.kv(this,a),{func:1,ret:-1}))}},
dn:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isbs")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaT")
y=u.a
if(y<4){u.dn(a)
return}this.a=y
this.c=u.c}z.a=this.bt(a)
y=this.b
y.toString
P.cR(null,null,y,H.f(new P.kA(z,this),{func:1,ret:-1}))}},
c9:function(){var z=H.i(this.c,"$isbs")
this.c=null
return this.bt(z)},
bt:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dc:function(a){var z,y,x,w
z=H.A(this,0)
H.dS(a,{futureOr:1,type:z})
y=this.$ti
x=H.c1(a,"$isbE",y,"$asbE")
if(x){z=H.c1(a,"$isaT",y,null)
if(z)P.fA(a,this)
else P.kw(a,this)}else{w=this.c9()
H.E(a,z)
this.a=4
this.c=a
P.bX(this,w)}},
bZ:[function(a,b){var z
H.i(b,"$isaw")
z=this.c9()
this.a=8
this.c=new P.al(a,b)
P.bX(this,z)},function(a){return this.bZ(a,null)},"iW","$2","$1","gf5",4,2,41],
$isbE:1,
q:{
kw:function(a,b){var z,y,x
b.a=1
try{a.eh(new P.kx(b),new P.ky(b),null)}catch(x){z=H.aV(x)
y=H.by(x)
P.m6(new P.kz(b,z,y))}},
fA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaT")
if(z>=4){y=b.c9()
b.a=a.a
b.c=a.c
P.bX(b,y)}else{y=H.i(b.c,"$isbs")
b.a=2
b.c=a
a.dn(y)}},
bX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cQ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bX(z.a,b)}y=z.a
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
if(p){H.i(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cQ(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kD(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kC(x,b,r).$0()}else if((y&2)!==0)new P.kB(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.P(y).$isbE){if(y.a>=4){n=H.i(t.c,"$isbs")
t.c=null
b=t.bt(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fA(y,t)
return}}m=b.b
n=H.i(m.c,"$isbs")
m.c=null
b=m.bt(n)
y=x.a
u=x.b
if(!y){H.E(u,H.A(m,0))
m.a=4
m.c=u}else{H.i(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kv:{"^":"v:2;a,b",
$0:function(){P.bX(this.a,this.b)}},
kA:{"^":"v:2;a,b",
$0:function(){P.bX(this.b,this.a.a)}},
kx:{"^":"v:13;a",
$1:function(a){var z=this.a
z.a=0
z.dc(a)}},
ky:{"^":"v:38;a",
$2:function(a,b){this.a.bZ(a,H.i(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kz:{"^":"v:2;a,b,c",
$0:function(){this.a.bZ(this.b,this.c)}},
kD:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eg(H.f(w.d,{func:1}),null)}catch(v){y=H.aV(v)
x=H.by(v)
if(this.d){w=H.i(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.P(z).$isbE){if(z instanceof P.aT&&z.gdt()>=4){if(z.gdt()===8){w=this.b
w.b=H.i(z.gh0(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iF(new P.kE(t),null)
w.a=!1}}},
kE:{"^":"v:40;a",
$1:function(a){return this.a}},
kC:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.E(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.cL(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aV(t)
y=H.by(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kB:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isal")
w=this.c
if(w.i7(z)&&w.e!=null){v=this.b
v.b=w.i0(z)
v.a=!1}}catch(u){y=H.aV(u)
x=H.by(u)
w=H.i(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fy:{"^":"b;a,0b"},
dz:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.x])
z.a=0
this.i5(new P.jt(z,this),!0,new P.ju(z,y),y.gf5())
return y}},
jt:{"^":"v;a,b",
$1:function(a){H.E(a,H.az(this.b,"dz",0));++this.a.a},
$S:function(){return{func:1,ret:P.R,args:[H.az(this.b,"dz",0)]}}},
ju:{"^":"v:2;a,b",
$0:function(){this.b.dc(this.a.a)}},
f0:{"^":"b;$ti"},
js:{"^":"b;"},
aF:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
ll:{"^":"b;",$isn9:1},
lB:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eL()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kZ:{"^":"ll;",
iB:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fQ(null,null,this,a,-1)}catch(x){z=H.aV(x)
y=H.by(x)
P.cQ(null,null,this,z,H.i(y,"$isaw"))}},
iC:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fR(null,null,this,a,b,-1,c)}catch(x){z=H.aV(x)
y=H.by(x)
P.cQ(null,null,this,z,H.i(y,"$isaw"))}},
hK:function(a,b){return new P.l0(this,H.f(a,{func:1,ret:b}),b)},
cn:function(a){return new P.l_(this,H.f(a,{func:1,ret:-1}))},
dB:function(a,b){return new P.l1(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eg:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fQ(null,null,this,a,b)},
cL:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.T===C.j)return a.$1(b)
return P.fR(null,null,this,a,b,c,d)},
iA:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.T===C.j)return a.$2(b,c)
return P.lC(null,null,this,a,b,c,d,e,f)},
is:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
l0:{"^":"v;a,b,c",
$0:function(){return this.a.eg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l_:{"^":"v:3;a,b",
$0:function(){return this.a.iB(this.b)}},
l1:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.iC(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ib:function(a,b,c){H.ct(a)
return H.q(H.lP(a,new H.aM(0,0,[b,c])),"$isey",[b,c],"$asey")},
ia:function(a,b){return new H.aM(0,0,[a,b])},
ic:function(a,b,c,d){return new P.kL(0,0,[d])},
hZ:function(a,b,c){var z,y
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c0()
C.a.h(y,a)
try{P.ly(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.f1(b,H.lZ(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
de:function(a,b,c){var z,y,x
if(P.dP(a))return b+"..."+c
z=new P.cq(b)
y=$.$get$c0()
C.a.h(y,a)
try{x=z
x.a=P.f1(x.gaP(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gaP()+c
y=z.gaP()
return y.charCodeAt(0)==0?y:y},
dP:function(a){var z,y
for(z=0;y=$.$get$c0(),z<y.length;++z)if(a===y[z])return!0
return!1},
ly:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.G();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eC:function(a){var z,y,x
z={}
if(P.dP(a))return"{...}"
y=new P.cq("")
try{C.a.h($.$get$c0(),a)
x=y
x.a=x.gaP()+"{"
z.a=!0
J.hf(a,new P.ii(z,y))
z=y
z.a=z.gaP()+"}"}finally{z=$.$get$c0()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gaP()
return z.charCodeAt(0)==0?z:z},
kL:{"^":"kF;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fC(this,this.r,H.A(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dM()
this.b=z}return this.d9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dM()
this.c=y}return this.d9(y,b)}else return this.eP(0,b)},
eP:function(a,b){var z,y,x
H.E(b,H.A(this,0))
z=this.d
if(z==null){z=P.dM()
this.d=z}y=this.dd(b)
x=z[y]
if(x==null)z[y]=[this.bY(b)]
else{if(this.di(x,b)>=0)return!1
x.push(this.bY(b))}return!0},
X:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dq(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fc(z,b)
x=this.di(y,b)
if(x<0)return!1
this.dv(y.splice(x,1)[0])
return!0},
d9:function(a,b){H.E(b,H.A(this,0))
if(H.i(a[b],"$isdL")!=null)return!1
a[b]=this.bY(b)
return!0},
dq:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isdL")
if(z==null)return!1
this.dv(z)
delete a[b]
return!0},
da:function(){this.r=this.r+1&67108863},
bY:function(a){var z,y
z=new P.dL(H.E(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.da()
return z},
dv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.da()},
dd:function(a){return J.bg(a)&0x3ffffff},
fc:function(a,b){return a[this.dd(b)]},
di:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].a,b))return y
return-1},
q:{
dM:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dL:{"^":"b;a,0b,0c"},
kM:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bC(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.A(this,0))
this.c=z.b
return!0}}},
q:{
fC:function(a,b,c){var z=new P.kM(a,b,[c])
z.c=a.e
return z}}},
kF:{"^":"j8;"},
cI:{"^":"kN;",$ish:1,$isc:1},
w:{"^":"b;$ti",
ga_:function(a){return new H.eA(a,this.gl(a),0,[H.bx(this,a,"w",0)])},
H:function(a,b){return this.k(a,b)},
iH:function(a,b){var z,y,x
z=H.a([],[H.bx(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.e(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
iG:function(a){return this.iH(a,!0)},
hX:function(a,b,c,d){var z
H.E(d,H.bx(this,a,"w",0))
P.dq(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.de(a,"[","]")}},
ih:{"^":"ak;"},
ii:{"^":"v:15;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ak:{"^":"b;$ti",
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.bx(this,a,"ak",0),H.bx(this,a,"ak",1)]})
for(z=J.c4(this.gaG(a));z.G();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bA(this.gaG(a))},
i:function(a){return P.eC(a)},
$isab:1},
ja:{"^":"b;$ti",
i:function(a){return P.de(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e_("index"))
if(b<0)H.t(P.ao(b,0,null,"index",null))
for(z=P.fC(this,this.r,H.A(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
$ish:1},
j8:{"^":"ja;"},
kN:{"^":"b+w;"}}],["","",,P,{"^":"",d6:{"^":"b;$ti"},ea:{"^":"js;$ti"},hK:{"^":"d6;",
$asd6:function(){return[P.o,[P.c,P.x]]}},jY:{"^":"hK;a"},jZ:{"^":"ea;",
hP:function(a,b,c){var z,y,x,w
z=a.length
P.dq(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lk(0,0,x)
if(w.fb(a,b,z)!==z)w.dz(C.i.cr(a,z-1),0)
return C.t.bT(x,0,w.b)},
hO:function(a){return this.hP(a,0,null)},
$asea:function(){return[P.o,[P.c,P.x]]}},lk:{"^":"b;a,b,c",
dz:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.j(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.j(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.j(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.j(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.j(z,y)
z[y]=128|a&63
return!1}},
fb:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cr(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bp(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dz(w,C.i.bp(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.j(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.j(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.j(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.j(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
h1:function(a,b,c){var z=H.iU(a,c)
if(z!=null)return z
throw H.d(P.em(a,null,null))},
hM:function(a){var z=J.P(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.bo(a)+"'"},
id:function(a,b,c,d){var z,y
H.E(b,d)
z=J.i0(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.q(z,"$isc",[d],"$asc")},
ie:function(a,b,c){var z,y,x
z=[c]
y=H.a([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.E(x.gO(x),c))
if(b)return y
return H.q(J.bJ(y),"$isc",z,"$asc")},
dA:function(a,b,c){var z,y
z=P.x
H.q(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.q(a,"$isbl",[z],"$asbl")
y=a.length
c=P.dq(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.eQ(z?C.a.bT(a,b,c):a)}return P.jv(a,b,c)},
jv:function(a,b,c){var z,y,x
H.q(a,"$ish",[P.x],"$ash")
z=J.c4(a)
for(y=0;y<b;++y)if(!z.G())throw H.d(P.ao(b,0,y,null,null))
x=[]
for(;z.G();)x.push(z.gO(z))
return H.eQ(x)},
j_:function(a,b,c){return new H.i2(a,H.i3(a,!1,!0,!1))},
fP:function(a,b,c,d){var z,y,x,w,v,u
H.q(a,"$isc",[P.x],"$asc")
if(c===C.o){z=$.$get$fO().b
z=z.test(b)}else z=!1
if(z)return b
y=C.y.hO(H.E(b,H.az(c,"d6",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.iV(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hM(a)},
u:function(a){return new P.fz(a)},
cJ:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.x]})
z=H.a([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dZ:function(a){H.m4(a)},
a8:{"^":"b;"},
"+bool":0,
aL:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aL))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.e.bu(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hC(H.iT(this))
y=P.c6(H.iR(this))
x=P.c6(H.iN(this))
w=P.c6(H.iO(this))
v=P.c6(H.iQ(this))
u=P.c6(H.iS(this))
t=P.hD(H.iP(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hC:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c6:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"X;"},
"+double":0,
bD:{"^":"b;a",
S:function(a,b){return C.e.S(this.a,H.i(b,"$isbD").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bD))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hH()
y=this.a
if(y<0)return"-"+new P.bD(0-y).i(0)
x=z.$1(C.e.Z(y,6e7)%60)
w=z.$1(C.e.Z(y,1e6)%60)
v=new P.hG().$1(y%1e6)
return""+C.e.Z(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
q:{
d8:function(a,b,c,d,e,f){return new P.bD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hG:{"^":"v:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hH:{"^":"v:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eL:{"^":"a5;",
i:function(a){return"Throw of null."}},
aK:{"^":"a5;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.cC(this.b)
return w+v+": "+H.l(u)},
q:{
hj:function(a){return new P.aK(!1,null,null,a)},
cw:function(a,b,c){return new P.aK(!0,a,b,c)},
e_:function(a){return new P.aK(!1,null,a,"Must not be null")}}},
cK:{"^":"aK;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cf:function(a,b,c){return new P.cK(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.cK(b,c,!0,a,d,"Invalid value")},
dq:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.e(a)
if(0<=a){if(typeof c!=="number")return H.e(c)
z=a>c}else z=!0
if(z)throw H.d(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
z=b>c}else z=!0
if(z)throw H.d(P.ao(b,a,c,"end",f))
return b}return c}}},
hY:{"^":"aK;e,l:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
S:function(a,b,c,d,e){var z=H.z(e!=null?e:J.bA(b))
return new P.hY(b,z,!0,a,c,"Index out of range")}}},
jU:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
J:function(a){return new P.jU(a)}}},
jR:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ft:function(a){return new P.jR(a)}}},
jo:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hy:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cC(z))+"."},
q:{
bC:function(a){return new P.hy(a)}}},
iG:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eZ:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hB:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fz:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hS:{"^":"b;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.bU(x,0,75)+"..."
return y+"\n"+x},
q:{
em:function(a,b,c){return new P.hS(a,b,c)}}},
x:{"^":"X;"},
"+int":0,
h:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e_("index"))
if(b<0)H.t(P.ao(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gO(z)
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
i:function(a){return P.hZ(this,"(",")")}},
df:{"^":"b;$ti"},
c:{"^":"b;$ti",$ish:1},
"+List":0,
ab:{"^":"b;$ti"},
R:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gW:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
o:{"^":"b;",$iseM:1},
"+String":0,
cq:{"^":"b;aP:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
f1:function(a,b,c){var z=J.c4(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gO(z))
while(z.G())}else{a+=H.l(z.gO(z))
for(;z.G();)a=a+c+H.l(z.gO(z))}return a}}}}],["","",,W,{"^":"",
hi:function(a){var z=document.createElement("a")
return z},
d4:function(a,b){var z=document.createElement("canvas")
return z},
hJ:function(a){H.i(a,"$isai")
return"wheel"},
cO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fB:function(a,b,c,d){var z,y
z=W.cO(W.cO(W.cO(W.cO(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fU:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dB(a,b)},
bH:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ma:{"^":"p;0l:length=","%":"AccessibleNodeList"},
mb:{"^":"bH;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mc:{"^":"bH;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
hn:{"^":"p;","%":";Blob"},
d3:{"^":"bH;",
bR:function(a,b,c){if(c!=null)return a.getContext(b,P.lI(c,null))
return a.getContext(b)},
el:function(a,b){return this.bR(a,b,null)},
$isd3:1,
"%":"HTMLCanvasElement"},
e5:{"^":"p;",$ise5:1,"%":"CanvasRenderingContext2D"},
mi:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mk:{"^":"hA;0l:length=","%":"CSSPerspective"},
aY:{"^":"p;",$isaY:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ml:{"^":"kl;0l:length=",
em:function(a,b){var z=a.getPropertyValue(this.f2(a,b))
return z==null?"":z},
f2:function(a,b){var z,y
z=$.$get$eb()
y=z[b]
if(typeof y==="string")return y
y=this.h9(a,b)
z[b]=y
return y},
h9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hE()+b
if(z in a)return z
return b},
gco:function(a){return a.bottom},
gas:function(a){return a.height},
gae:function(a){return a.left},
gai:function(a){return a.right},
gbj:function(a){return a.top},
gaw:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hz:{"^":"b;",
gae:function(a){return this.em(a,"left")}},
ec:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hA:{"^":"p;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mm:{"^":"ec;0l:length=","%":"CSSTransformValue"},
mn:{"^":"ec;0l:length=","%":"CSSUnparsedValue"},
mo:{"^":"p;0l:length=","%":"DataTransferItemList"},
mp:{"^":"p;",
i:function(a){return String(a)},
"%":"DOMException"},
mq:{"^":"kn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.q(c,"$isa7",[P.X],"$asa7")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.X]]},
$isI:1,
$asI:function(){return[[P.a7,P.X]]},
$asw:function(){return[[P.a7,P.X]]},
$ish:1,
$ash:function(){return[[P.a7,P.X]]},
$isc:1,
$asc:function(){return[[P.a7,P.X]]},
$asB:function(){return[[P.a7,P.X]]},
"%":"ClientRectList|DOMRectList"},
hF:{"^":"p;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaw(a))+" x "+H.l(this.gas(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.c1(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=J.c3(b)
return a.left===z.gae(b)&&a.top===z.gbj(b)&&this.gaw(a)===z.gaw(b)&&this.gas(a)===z.gas(b)},
gW:function(a){return W.fB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaw(a)&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF)},
gco:function(a){return a.bottom},
gas:function(a){return a.height},
gae:function(a){return a.left},
gai:function(a){return a.right},
gbj:function(a){return a.top},
gaw:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.X]},
"%":";DOMRectReadOnly"},
mr:{"^":"kp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.o]},
$isI:1,
$asI:function(){return[P.o]},
$asw:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asB:function(){return[P.o]},
"%":"DOMStringList"},
ms:{"^":"p;0l:length=","%":"DOMTokenList"},
kk:{"^":"cI;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.i(z[b],"$isa0")},
m:function(a,b,c){var z
H.z(b)
H.i(c,"$isa0")
z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.iG(this)
return new J.at(z,z.length,0,[H.A(z,0)])},
$asw:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"L;",
gdD:function(a){return new W.kk(a,a.children)},
gdE:function(a){return P.iX(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
ah:{"^":"p;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ai:{"^":"p;",
dA:["eq",function(a,b,c,d){H.f(c,{func:1,args:[W.ah]})
if(c!=null)this.eR(a,b,c,!1)}],
eR:function(a,b,c,d){return a.addEventListener(b,H.bv(H.f(c,{func:1,args:[W.ah]}),1),!1)},
$isai:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fH|fI|fK|fL"},
aZ:{"^":"hn;",$isaZ:1,"%":"File"},
mt:{"^":"ku;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isaZ")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aZ]},
$isI:1,
$asI:function(){return[W.aZ]},
$asw:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$asB:function(){return[W.aZ]},
"%":"FileList"},
mu:{"^":"ai;0l:length=","%":"FileWriter"},
mv:{"^":"bH;0l:length=","%":"HTMLFormElement"},
b_:{"^":"p;",$isb_:1,"%":"Gamepad"},
mw:{"^":"p;0l:length=","%":"History"},
mx:{"^":"kH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cF:{"^":"p;0dH:data=",$iscF:1,"%":"ImageData"},
er:{"^":"bH;",$iser:1,"%":"HTMLImageElement"},
bL:{"^":"dF;",$isbL:1,"%":"KeyboardEvent"},
mB:{"^":"p;",
i:function(a){return String(a)},
"%":"Location"},
mC:{"^":"p;0l:length=","%":"MediaList"},
mD:{"^":"ai;",
dA:function(a,b,c,d){H.f(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.eq(a,b,c,!1)},
"%":"MessagePort"},
mE:{"^":"kO;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaG:function(a){var z=H.a([],[P.o])
this.L(a,new W.iv(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"MIDIInputMap"},
iv:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mF:{"^":"kP;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaG:function(a){var z=H.a([],[P.o])
this.L(a,new W.iw(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
iw:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b1:{"^":"p;",$isb1:1,"%":"MimeType"},
mG:{"^":"kR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb1")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b1]},
$isI:1,
$asI:function(){return[W.b1]},
$asw:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$isc:1,
$asc:function(){return[W.b1]},
$asB:function(){return[W.b1]},
"%":"MimeTypeArray"},
av:{"^":"dF;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kj:{"^":"cI;a",
m:function(a,b,c){var z,y
H.z(b)
H.i(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.j(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.el(z,z.length,-1,[H.bx(C.J,z,"B",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asw:function(){return[W.L]},
$ash:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"ai;",
iw:function(a,b){var z,y
try{z=a.parentNode
J.hd(z,b,a)}catch(y){H.aV(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.er(a):z},
fW:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iC:{"^":"kT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
b3:{"^":"p;0l:length=",$isb3:1,"%":"Plugin"},
mP:{"^":"kX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb3")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$isI:1,
$asI:function(){return[W.b3]},
$asw:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asB:function(){return[W.b3]},
"%":"PluginArray"},
mR:{"^":"l2;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaG:function(a){var z=H.a([],[P.o])
this.L(a,new W.j5(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"RTCStatsReport"},
j5:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mT:{"^":"bH;0l:length=","%":"HTMLSelectElement"},
b6:{"^":"ai;",$isb6:1,"%":"SourceBuffer"},
mU:{"^":"fI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb6")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$isI:1,
$asI:function(){return[W.b6]},
$asw:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asB:function(){return[W.b6]},
"%":"SourceBufferList"},
b7:{"^":"p;",$isb7:1,"%":"SpeechGrammar"},
mV:{"^":"l4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb7")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b7]},
$isI:1,
$asI:function(){return[W.b7]},
$asw:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"SpeechGrammarList"},
b8:{"^":"p;0l:length=",$isb8:1,"%":"SpeechRecognitionResult"},
mX:{"^":"l7;",
k:function(a,b){return a.getItem(H.U(b))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaG:function(a){var z=H.a([],[P.o])
this.L(a,new W.jr(z))
return z},
gl:function(a){return a.length},
$asak:function(){return[P.o,P.o]},
$isab:1,
$asab:function(){return[P.o,P.o]},
"%":"Storage"},
jr:{"^":"v:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"p;",$isb9:1,"%":"CSSStyleSheet|StyleSheet"},
ba:{"^":"ai;",$isba:1,"%":"TextTrack"},
bb:{"^":"ai;",$isbb:1,"%":"TextTrackCue|VTTCue"},
n0:{"^":"lb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbb")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$isI:1,
$asI:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"TextTrackCueList"},
n1:{"^":"fL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isba")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$isI:1,
$asI:function(){return[W.ba]},
$asw:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"TextTrackList"},
n2:{"^":"p;0l:length=","%":"TimeRanges"},
bc:{"^":"p;",$isbc:1,"%":"Touch"},
bp:{"^":"dF;",$isbp:1,"%":"TouchEvent"},
n3:{"^":"lh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbc")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$isI:1,
$asI:function(){return[W.bc]},
$asw:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"TouchList"},
n4:{"^":"p;0l:length=","%":"TrackDefaultList"},
dF:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n7:{"^":"p;",
i:function(a){return String(a)},
"%":"URL"},
n8:{"^":"ai;0l:length=","%":"VideoTrackList"},
bW:{"^":"av;",
ghS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
ghR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$isbW:1,
"%":"WheelEvent"},
ka:{"^":"ai;",
fX:function(a,b){return a.requestAnimationFrame(H.bv(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
fa:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nd:{"^":"ln;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isaY")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aY]},
$isI:1,
$asI:function(){return[W.aY]},
$asw:function(){return[W.aY]},
$ish:1,
$ash:function(){return[W.aY]},
$isc:1,
$asc:function(){return[W.aY]},
$asB:function(){return[W.aY]},
"%":"CSSRuleList"},
ne:{"^":"hF;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.c1(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=J.c3(b)
return a.left===z.gae(b)&&a.top===z.gbj(b)&&a.width===z.gaw(b)&&a.height===z.gas(b)},
gW:function(a){return W.fB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gas:function(a){return a.height},
gaw:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ng:{"^":"lp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb_")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b_]},
$isI:1,
$asI:function(){return[W.b_]},
$asw:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$isc:1,
$asc:function(){return[W.b_]},
$asB:function(){return[W.b_]},
"%":"GamepadList"},
nh:{"^":"lr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ni:{"^":"lt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb8")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$isI:1,
$asI:function(){return[W.b8]},
$asw:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asB:function(){return[W.b8]},
"%":"SpeechRecognitionResultList"},
nj:{"^":"lv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb9")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$isI:1,
$asI:function(){return[W.b9]},
$asw:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asB:function(){return[W.b9]},
"%":"StyleSheetList"},
kq:{"^":"dz;a,b,c,$ti",
i5:function(a,b,c,d){var z=H.A(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
nf:{"^":"kq;a,b,c,$ti"},
kr:{"^":"f0;a,b,c,d,e,$ti",
hf:function(){var z=this.d
if(z!=null&&this.a<=0)J.he(this.b,this.c,z,!1)},
q:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fU(new W.ks(c),W.ah)
z=new W.kr(0,a,b,z,!1,[e])
z.hf()
return z}}},
ks:{"^":"v:6;a",
$1:function(a){return this.a.$1(H.i(a,"$isah"))}},
B:{"^":"b;$ti",
ga_:function(a){return new W.el(a,this.gl(a),-1,[H.bx(this,a,"B",0)])}},
el:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.hc(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
kl:{"^":"p+hz;"},
km:{"^":"p+w;"},
kn:{"^":"km+B;"},
ko:{"^":"p+w;"},
kp:{"^":"ko+B;"},
kt:{"^":"p+w;"},
ku:{"^":"kt+B;"},
kG:{"^":"p+w;"},
kH:{"^":"kG+B;"},
kO:{"^":"p+ak;"},
kP:{"^":"p+ak;"},
kQ:{"^":"p+w;"},
kR:{"^":"kQ+B;"},
kS:{"^":"p+w;"},
kT:{"^":"kS+B;"},
kW:{"^":"p+w;"},
kX:{"^":"kW+B;"},
l2:{"^":"p+ak;"},
fH:{"^":"ai+w;"},
fI:{"^":"fH+B;"},
l3:{"^":"p+w;"},
l4:{"^":"l3+B;"},
l7:{"^":"p+ak;"},
la:{"^":"p+w;"},
lb:{"^":"la+B;"},
fK:{"^":"ai+w;"},
fL:{"^":"fK+B;"},
lg:{"^":"p+w;"},
lh:{"^":"lg+B;"},
lm:{"^":"p+w;"},
ln:{"^":"lm+B;"},
lo:{"^":"p+w;"},
lp:{"^":"lo+B;"},
lq:{"^":"p+w;"},
lr:{"^":"lq+B;"},
ls:{"^":"p+w;"},
lt:{"^":"ls+B;"},
lu:{"^":"p+w;"},
lv:{"^":"lu+B;"}}],["","",,P,{"^":"",
lL:function(a){var z,y
z=J.P(a)
if(!!z.$iscF){y=z.gdH(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fN(a.data,a.height,a.width)},
lK:function(a){if(a instanceof P.fN)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ia(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.U(y[w])
z.m(0,v,a[v])}return z},
lI:function(a,b){var z={}
a.L(0,new P.lJ(z))
return z},
ei:function(){var z=$.eh
if(z==null){z=J.cX(window.navigator.userAgent,"Opera",0)
$.eh=z}return z},
hE:function(){var z,y
z=$.ee
if(z!=null)return z
y=$.ef
if(y==null){y=J.cX(window.navigator.userAgent,"Firefox",0)
$.ef=y}if(y)z="-moz-"
else{y=$.eg
if(y==null){y=!P.ei()&&J.cX(window.navigator.userAgent,"Trident/",0)
$.eg=y}if(y)z="-ms-"
else z=P.ei()?"-o-":"-webkit-"}$.ee=z
return z},
fN:{"^":"b;dH:a>,b,c",$iscF:1},
lJ:{"^":"v:15;a",
$2:function(a,b){this.a[a]=b}},
hP:{"^":"cI;a,b",
gbs:function(){var z,y,x
z=this.b
y=H.az(z,"w",0)
x=W.a0
return new H.ij(new H.k8(z,H.f(new P.hQ(),{func:1,ret:P.a8,args:[y]}),[y]),H.f(new P.hR(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.z(b)
H.i(c,"$isa0")
z=this.gbs()
J.hg(z.b.$1(J.cY(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bA(this.gbs().a)},
k:function(a,b){var z=this.gbs()
return z.b.$1(J.cY(z.a,b))},
ga_:function(a){var z=P.ie(this.gbs(),!1,W.a0)
return new J.at(z,z.length,0,[H.A(z,0)])},
$asw:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hQ:{"^":"v:25;",
$1:function(a){return!!J.P(H.i(a,"$isL")).$isa0}},
hR:{"^":"v:26;",
$1:function(a){return H.k(H.i(a,"$isL"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kY:{"^":"b;$ti",
gai:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.E(z+this.c,H.A(this,0))},
gco:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.E(z+this.d,H.A(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c1(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=this.a
y=J.c3(b)
x=y.gae(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.A(this,0)
if(H.E(z+this.c,w)===y.gai(b)){if(typeof x!=="number")return x.n()
z=H.E(x+this.d,w)===y.gco(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.bg(z)
x=this.b
w=J.bg(x)
if(typeof z!=="number")return z.n()
v=H.A(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.E(x+this.d,v)
return P.kI(P.cP(P.cP(P.cP(P.cP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"kY;ae:a>,bj:b>,aw:c>,as:d>,$ti",q:{
iX:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"p;",$isbM:1,"%":"SVGLength"},mA:{"^":"kK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbM")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asB:function(){return[P.bM]},
"%":"SVGLengthList"},bP:{"^":"p;",$isbP:1,"%":"SVGNumber"},mN:{"^":"kV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbP")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bP]},
$ish:1,
$ash:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asB:function(){return[P.bP]},
"%":"SVGNumberList"},mQ:{"^":"p;0l:length=","%":"SVGPointList"},mY:{"^":"l9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asw:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asB:function(){return[P.o]},
"%":"SVGStringList"},mZ:{"^":"a0;",
gdD:function(a){return new P.hP(a,new W.kj(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bR:{"^":"p;",$isbR:1,"%":"SVGTransform"},n5:{"^":"lj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbR")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bR]},
$ish:1,
$ash:function(){return[P.bR]},
$isc:1,
$asc:function(){return[P.bR]},
$asB:function(){return[P.bR]},
"%":"SVGTransformList"},kJ:{"^":"p+w;"},kK:{"^":"kJ+B;"},kU:{"^":"p+w;"},kV:{"^":"kU+B;"},l8:{"^":"p+w;"},l9:{"^":"l8+B;"},li:{"^":"p+w;"},lj:{"^":"li+B;"}}],["","",,P,{"^":"",md:{"^":"p;0l:length=","%":"AudioBuffer"},me:{"^":"ki;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaG:function(a){var z=H.a([],[P.o])
this.L(a,new P.hl(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"AudioParamMap"},hl:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},mf:{"^":"ai;0l:length=","%":"AudioTrackList"},hm:{"^":"ai;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mO:{"^":"hm;0l:length=","%":"OfflineAudioContext"},ki:{"^":"p+ak;"}}],["","",,P,{"^":"",dt:{"^":"p;",
iE:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.P(g)
if(!!z.$iscF)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lK(g))
return}if(!!z.$iser)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.hj("Incorrect number or type of arguments"))},
iD:function(a,b,c,d,e,f,g){return this.iE(a,b,c,d,e,f,g,null,null,null)},
$isdt:1,
"%":"WebGLRenderingContext"},jP:{"^":"p;",$isjP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mW:{"^":"l6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.z(b)
H.i(c,"$isab")
throw H.d(P.J("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asw:function(){return[[P.ab,,,]]},
$ish:1,
$ash:function(){return[[P.ab,,,]]},
$isc:1,
$asc:function(){return[[P.ab,,,]]},
$asB:function(){return[[P.ab,,,]]},
"%":"SQLResultSetRowList"},l5:{"^":"p+w;"},l6:{"^":"l5+B;"}}],["","",,L,{"^":"",iE:{"^":"b;a",q:{
iF:function(a){var z,y,x,w,v,u,t,s
z=new Array(256)
z.fixed$length=Array
y=[P.x]
x=H.a(z,y)
z=new Array(256)
z.fixed$length=Array
w=H.a(z,y)
for(v=0;v<256;++v)C.a.m(w,v,v)
u=P.h1("6364136223846793005",null,null)
t=P.h1("1442695040888963407",null,null)
if(typeof u!=="number")return H.e(u)
if(typeof t!=="number")return H.e(t)
a=C.e.cM(C.e.cM(C.e.cM(a*u+t,64)*u+t,64)*u+t,64)
for(v=255;v>=0;--v){z=a*u+t
a=((z&-1)>>>0)-(z&0)
s=C.e.cU(a+31,v+1)
if(s>=256)return H.j(w,s)
C.a.m(x,v,w[s])
w[s]=w[v]}return new L.iE(x)}}}}],["","",,B,{"^":"",hN:{"^":"b;a,b,c,d,0e",
a9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=new B.b4(a,b)
y=this.c.u(0,z).u(0,$.$get$d9().j(0,a+b))
x=y.a
w=y.b
v=2-x*x-w*w
if(v>0){u=v*v
t=this.e
s=this.b.n(0,z)
r=this.a
q=r[C.h.a7(s.a)&255]
s=C.h.a7(s.b)
if(typeof q!=="number")return q.n()
s=r[q+s&255]
if(typeof s!=="number")return s.cS()
p=(s&14)>>>1
s=$.$get$ej()
if(p>=8)return H.j(s,p)
o=s[p]
this.e=t+u*u*(o.a*x+o.b*w)}}},b4:{"^":"b;a,b",
n:function(a,b){return new B.b4(this.a+b.a,this.b+b.b)},
u:function(a,b){return new B.b4(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.b4(this.a*b,this.b*b)},
i:function(a){return H.l(this.a)+", "+H.l(this.b)},
q:{
aE:function(a,b){return new B.b4(a,b)}}}}],["","",,O,{"^":"",am:{"^":"b;0a,0b,0c,0d,$ti",
bm:function(a){this.a=H.a([],[a])
this.b=null
this.c=null
this.d=null},
bS:function(a,b,c){var z=H.az(this,"am",0)
H.f(b,{func:1,ret:P.a8,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.x,[P.h,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bl:function(a,b){return this.bS(a,null,b)},
b6:function(a){var z
H.q(a,"$ish",[H.az(this,"am",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dk:function(a,b){var z
H.q(b,"$ish",[H.az(this,"am",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.at(z,z.length,0,[H.A(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"am",0)
H.E(b,z)
z=[z]
if(this.b6(H.a([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dk(x,H.a([b],z))}},
aB:function(a,b){var z,y
H.q(b,"$ish",[H.az(this,"am",0)],"$ash")
if(this.b6(b)){z=this.a
y=z.length
C.a.aB(z,b)
this.dk(y,b)}},
$ish:1,
q:{
d7:function(a){var z=new O.am([a])
z.bm(a)
return z}}},dl:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
eE:function(a){var z=this.b
if(!(z==null))z.A(a)},
aK:function(){return this.eE(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gcF(z)
else return V.bn()},
ed:function(a){var z=this.a
if(a==null)C.a.h(z,V.bn())
else C.a.h(z,a)
this.aK()},
cK:function(){var z=this.a
if(z.length>0){z.pop()
this.aK()}}}}],["","",,E,{"^":"",d_:{"^":"b;"},ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d7:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.A(z,0)]);z.G();){y=z.d
if(y.f==null)y.d7()}},
scV:function(a){var z,y,x,w
z=this.d
if(z==null?a!=null:z!==a){this.c=null
this.d=a
this.e=null
if(z!=null){y=z.gv()
y.toString
x=H.f(this.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.X(y.a,x)}y=this.d
if(y!=null){y=y.gv()
y.toString
x=H.f(this.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.G("shapeBuilder",z,this.d,this,[F.du])
w.b=!0
this.a2(w)}},
a8:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.al(0,b,this):null
if(!J.Y(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.aC])
w.b=!0
this.a2(w)}z=this.f
if(z!=null)z.a8(0,b)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.A(z,0)]);z.G();)z.d.a8(0,b)},
b2:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gU(z))
else C.a.h(z.a,y.j(0,z.gU(z)))
z.aK()
a.ee(this.f)
z=a.dy
x=(z&&C.a).gcF(z)
if(x!=null&&this.d!=null)x.iv(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.A(z,0)]);z.G();)z.d.b2(a)
a.ec()
a.dx.cK()},
gv:function(){var z=this.z
if(z==null){z=D.K()
this.z=z}return z},
a2:function(a){var z=this.z
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
ie:[function(a){H.i(a,"$isn")
this.e=null
this.a2(a)},function(){return this.ie(null)},"jJ","$1","$0","gbP",0,2,1],
ig:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ig(null)},"jK","$1","$0","gea",0,2,1],
ic:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ic(null)},"jI","$1","$0","ge9",0,2,1],
ia:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ia(null)},"jG","$1","$0","ge8",0,2,1],
jF:[function(a,b){var z,y,x,w,v,u,t
H.q(b,"$ish",[E.ag],"$ash")
for(z=b.length,y=this.ge8(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.bi()
t.a=H.a([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a5()},"$2","gi9",8,0,7],
jH:[function(a,b){var z,y,x,w,v,u,t
H.q(b,"$ish",[E.ag],"$ash")
for(z=b.length,y=this.ge8(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.bi()
t.a=H.a([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.X(t.a,y)}}this.a5()},"$2","gib",8,0,7],
$isaO:1,
q:{
bh:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=new E.ag()
z.a=d
z.b=!0
y=O.d7(E.ag)
z.y=y
y.bl(z.gi9(),z.gib())
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
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null){x=y.gv()
x.toString
w=H.f(z.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.X(x.a,w)}x=z.c
if(x!=null){x=x.gv()
x.toString
w=H.f(z.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.h(x.a,w)}v=new D.G("shape",y,z.c,z,[F.eY])
v.b=!0
z.a2(v)}y=z.f
if(y==null?f!=null:y!==f){if(y!=null){y=y.gv()
y.toString
x=H.f(z.gea(),{func:1,ret:-1,args:[D.n]})
C.a.X(y.a,x)}u=z.f
z.f=f
if(f!=null){y=f.gv()
y.toString
x=H.f(z.gea(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}z.d7()
v=new D.G("technique",u,z.f,z,[O.dB])
v.b=!0
z.a2(v)}if(!J.Y(z.r,c)){t=z.r
if(t!=null){y=t.gv()
y.toString
x=H.f(z.ge9(),{func:1,ret:-1,args:[D.n]})
C.a.X(y.a,x)}if(c!=null){y=c.gv()
y.toString
x=H.f(z.ge9(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}z.r=c
v=new D.G("mover",t,c,z,[U.a6])
v.b=!0
z.a2(v)}if(a!=null)z.y.aB(0,a)
return z}}},j0:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ez:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aL(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dl()
y=[V.aC]
z.a=H.a([],y)
x=z.gv()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.f(new E.j2(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dl()
z.a=H.a([],y)
v=z.gv()
v.toString
x=H.f(new E.j3(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dl()
z.a=H.a([],y)
y=z.gv()
y.toString
w=H.f(new E.j4(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.a([],[O.dB])
this.dy=z
C.a.h(z,null)
this.fr=new H.aM(0,0,[P.o,A.eX])},
giq:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.j(0,y.gU(y))
this.z=y
z=y}return z},
ee:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcF(z):a;(z&&C.a).h(z,y)},
ec:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
j1:function(a,b){var z=new E.j0(a,b)
z.ez(a,b)
return z}}},j2:{"^":"v:8;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.ch=null}},j3:{"^":"v:8;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j4:{"^":"v:8;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},jp:{"^":"n;c,a,0b"},jB:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gv:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
eG:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.A(a)
this.iy()},function(){return this.eG(null)},"eF","$1","$0","gcZ",0,2,1],
gi_:function(){var z,y,x
z=Date.now()
y=C.e.Z(P.d8(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aL(z,!1)
return x/y},
dr:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.e(z)
x=C.h.b1(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.h.b1(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dD(C.m,this.gix())},
iy:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jD(this),{func:1,ret:-1,args:[P.X]})
C.w.fa(z)
C.w.fX(z,W.fU(y,P.X))}},"$0","gix",0,0,3],
iu:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dr()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aL(w,!1)
x.y=P.d8(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aK()
w=x.db
C.a.sl(w.a,0)
w.aK()
w=x.dx
C.a.sl(w.a,0)
w.aK()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b2(this.e)}}catch(v){z=H.aV(v)
y=H.by(v)
P.dZ("Error: "+H.l(z))
P.dZ("Stack: "+H.l(y))
throw H.d(z)}},
q:{
jC:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$isd3)return E.f5(a,!0,!0,!0,!1)
y=W.d4(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdD(a).h(0,y)
w=E.f5(y,!0,!0,!0,!1)
w.a=a
return w},
f5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jB()
y=P.ib(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bR(a,"webgl",y)
x=H.i(x==null?C.k.bR(a,"experimental-webgl",y):x,"$isdt")
if(x==null)H.t(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j1(x,a)
w=new T.jw(x)
w.b=H.z(x.getParameter(3379))
w.c=H.z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jV(a)
v=new X.i6()
v.c=new X.V(!1,!1,!1)
v.d=P.ic(null,null,null,P.x)
w.b=v
v=new X.ix(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ig(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jF(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.a([],[[P.f0,P.b]])
w.z=v
u=document
t=W.av
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.f(w.gfw(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.f(w.gfB(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.f(w.gfq(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.f(w.gc7(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.f(w.gbW(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.f(w.gfH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.f(w.gfJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.f(w.gfI(),s),!1,t))
p=w.z
o=W.bW;(p&&C.a).h(p,W.a3(a,H.U(W.hJ(a)),H.f(w.gfK(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.f(w.gfz(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.f(w.gfA(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.f(w.gfL(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.f(w.gfS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.f(w.gfQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.f(w.gfR(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aL(Date.now(),!1)
z.ch=0
z.dr()
return z}}},jD:{"^":"v:32;a",
$1:function(a){var z
H.m3(a)
z=this.a
if(z.z){z.z=!1
z.iu()}}}}],["","",,Z,{"^":"",fw:{"^":"b;a,b",q:{
fx:function(a,b,c){var z
H.q(c,"$isc",[P.y],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Float32Array(H.bY(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)},
cN:function(a,b,c){var z
H.q(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bY(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)}}},cz:{"^":"d_;a,b,c,d,e",
cm:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aV(y)
x=P.u('Failed to bind buffer attribute "'+J.as(this.a)+'": '+H.l(z))
throw H.d(x)}},
i:function(a){return"["+J.as(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},k7:{"^":"b;a",$ismg:1},d2:{"^":"b;a,0b,c,d",
b0:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cm:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cm(a)},
iK:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b2:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.j(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.a([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.a([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.as(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isn_:1},bI:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}},ad:{"^":"b;a",
gdG:function(a){var z,y
z=this.a
y=(z&$.$get$a_().a)!==0?1:0
if((z&$.$get$ae().a)!==0)++y
if((z&$.$get$aR().a)!==0)++y
if((z&$.$get$a2().a)!==0)++y
if((z&$.$get$aS().a)!==0)++y
if((z&$.$get$bU().a)!==0)++y
if((z&$.$get$bV().a)!==0)++y
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+1:y},
gb3:function(a){var z,y
z=this.a
y=(z&$.$get$a_().a)!==0?3:0
if((z&$.$get$ae().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$a2().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=3
if((z&$.$get$bV().a)!==0)y+=4
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
cg:function(a){var z,y,x
z=$.$get$a_()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fv()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ad))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.a([],[P.o])
y=this.a
if((y&$.$get$a_().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ae().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$a2().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bV().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$br().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
ay:function(a){return new Z.ad(a)}}}}],["","",,D,{"^":"",d5:{"^":"b;"},bi:{"^":"b;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.hO(z))
return x!==0},
hV:function(){return this.A(null)},
iz:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
av:function(a){return this.iz(a,!0,!1)},
q:{
K:function(){var z=new D.bi()
z.a=H.a([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},hO:{"^":"v:33;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"b;a,0b"},c9:{"^":"n;c,d,a,0b,$ti"},ca:{"^":"n;c,d,a,0b,$ti"},G:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e3:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e3))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
q:{"^":"mh<"}},Q:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Q))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},bK:{"^":"n;c,a,0b"},i5:{"^":"am;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
gad:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
d_:function(a){var z=this.e
if(!(z==null))z.A(a)},
iR:[function(a){var z,y,x
H.q(a,"$ish",[X.Q],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(C.a.ar(this.a,x))return!1}return!0},"$1","geJ",4,0,35],
iQ:[function(a,b){var z=X.Q
z=new D.c9(a,H.q(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.d_(z)},"$2","geH",8,0,18],
iS:[function(a,b){var z=X.Q
z=new D.ca(a,H.q(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.d_(z)},"$2","geK",8,0,18],
eI:[function(a){var z
H.i(a,"$isn")
if(!this.r&&a instanceof X.bK){z=a.c
if(C.a.ar(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.A(a)}}},"$1","gbW",4,0,0],
fE:[function(a){var z
H.i(a,"$isn")
if(this.r&&a instanceof X.bK){z=a.c
if(C.a.ar(this.a,z))this.r=!1}},"$1","gc7",4,0,0],
a4:function(a){var z,y,x,w
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.K()
z.b=y}x={func:1,ret:-1,args:[D.n]}
w=H.f(this.gbW(),x)
C.a.h(y.a,w)
y=z.a
if(y==null){y=D.K()
z.a=y
z=y}else z=y
x=H.f(this.gc7(),x)
C.a.h(z.a,x)
return!0},
$ash:function(){return[X.Q]},
$asam:function(){return[X.Q]},
q:{
aB:function(){var z=new X.i5()
z.bm(X.Q)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bS(z.geH(),z.geJ(),z.geK())
return z}}},i6:{"^":"b;0a,0b,0c,0d",
im:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.bK(a,this)
y.b=!0
return z.A(y)},
ii:function(a){var z,y
this.c=a.b
this.d.X(0,a.a)
z=this.b
if(z==null)return!1
y=new X.bK(a,this)
y.b=!0
return z.A(y)}},eB:{"^":"dp;x,y,c,d,e,a,0b"},ig:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
az:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aL(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=y.a
if(typeof t!=="number")return t.n()
y=y.b
if(typeof y!=="number")return y.n()
s=new V.M(t+x*w,y+v*u)
u=this.a.gbA()
r=new X.bN(a,new V.M(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
cJ:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.az(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.en()
if(typeof z!=="number")return z.cS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.az(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.az(a,b))
return!0},
io:function(a){return!1},
fG:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aL(Date.now(),!1)
y=this.f
x=new X.eB(c,a,this.a.gbA(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.M(0,0)}},V:{"^":"b;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.V))return!1
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
return z+(this.c?"Shift+":"")}},bN:{"^":"dp;x,y,z,Q,ch,c,d,e,a,0b"},ix:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c2:function(a,b,c){var z,y,x
z=new P.aL(Date.now(),!1)
y=this.a.gbA()
x=new X.bN(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cJ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.c2(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.en()
if(typeof z!=="number")return z.cS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.c2(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.c2(a,b,!1))
return!0},
ip:function(a,b){return!1}},dp:{"^":"n;"},fa:{"^":"dp;x,y,z,Q,ch,c,d,e,a,0b"},jF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
az:function(a,b){var z,y,x,w
H.q(a,"$isc",[V.M],"$asc")
z=new P.aL(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gbA()
w=new X.fa(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
il:function(a){var z
H.q(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.A(this.az(a,!0))
return!0},
ij:function(a){var z
H.q(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.A(this.az(a,!0))
return!0},
ik:function(a){var z
H.q(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.A(this.az(a,!1))
return!0}},jV:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbA:function(){var z=this.a
return V.dr(0,0,(z&&C.k).gdE(z).c,C.k.gdE(z).d)},
dg:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.Q(z,new X.V(y,a.altKey,a.shiftKey))},
aU:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
cc:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
aA:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.u()
v=z.top
if(typeof x!=="number")return x.u()
return new V.M(y-w,x-v)},
b7:function(a){return new V.Z(a.movementX,a.movementY)},
c8:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.a([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.h.aj(u.pageX)
C.h.aj(u.pageY)
s=z.left
C.h.aj(u.pageX)
C.a.h(y,new V.M(t-s,C.h.aj(u.pageY)-z.top))}return y},
ax:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e3(z,new X.V(y,a.altKey,a.shiftKey))},
c4:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.u()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.u()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jf:[function(a){this.f=!0},"$1","gfB",4,0,6],
j7:[function(a){this.f=!1},"$1","gfq",4,0,6],
jc:[function(a){H.i(a,"$isav")
if(this.f&&this.c4(a))a.preventDefault()},"$1","gfw",4,0,4],
fE:[function(a){var z
H.i(a,"$isbL")
if(!this.f)return
z=this.dg(a)
if(this.b.im(z))a.preventDefault()},"$1","gc7",4,0,19],
eI:[function(a){var z
H.i(a,"$isbL")
if(!this.f)return
z=this.dg(a)
if(this.b.ii(z))a.preventDefault()},"$1","gbW",4,0,19],
jj:[function(a){var z,y,x,w
H.i(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aU(a)
if(this.x){y=this.ax(a)
x=this.b7(a)
if(this.d.cJ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ax(a)
w=this.aA(a)
if(this.c.cJ(y,w))a.preventDefault()},"$1","gfH",4,0,4],
jl:[function(a){var z,y,x
H.i(a,"$isav")
this.aU(a)
z=this.ax(a)
if(this.x){y=this.b7(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfJ",4,0,4],
je:[function(a){var z,y,x
H.i(a,"$isav")
if(!this.c4(a)){this.aU(a)
z=this.ax(a)
if(this.x){y=this.b7(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfA",4,0,4],
jk:[function(a){var z,y,x
H.i(a,"$isav")
this.aU(a)
z=this.ax(a)
if(this.x){y=this.b7(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gfI",4,0,4],
jd:[function(a){var z,y,x
H.i(a,"$isav")
if(!this.c4(a)){this.aU(a)
z=this.ax(a)
if(this.x){y=this.b7(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","gfz",4,0,4],
jm:[function(a){var z,y
H.i(a,"$isbW")
this.aU(a)
z=new V.Z((a&&C.v).ghR(a),C.v.ghS(a)).w(0,180)
if(this.x){if(this.d.io(z))a.preventDefault()
return}if(this.r)return
y=this.aA(a)
if(this.c.ip(z,y))a.preventDefault()},"$1","gfK",4,0,34],
jn:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ax(this.y)
v=this.aA(this.y)
this.d.fG(w,v,x)}},"$1","gfL",4,0,6],
ju:[function(a){var z
H.i(a,"$isbp")
this.a.focus()
this.f=!0
this.cc(a)
z=this.c8(a)
if(this.e.il(z))a.preventDefault()},"$1","gfS",4,0,12],
js:[function(a){var z
H.i(a,"$isbp")
this.cc(a)
z=this.c8(a)
if(this.e.ij(z))a.preventDefault()},"$1","gfQ",4,0,12],
jt:[function(a){var z
H.i(a,"$isbp")
this.cc(a)
z=this.c8(a)
if(this.e.ik(z))a.preventDefault()},"$1","gfR",4,0,12]}}],["","",,D,{"^":"",cB:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z},
aS:[function(a){var z
H.i(a,"$isn")
z=this.d
if(!(z==null))z.A(a)},function(){return this.aS(null)},"j8","$1","$0","gfs",0,2,1],
$isa1:1,
$isaO:1},a1:{"^":"b;",$isaO:1},i7:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
aS:function(a){var z=this.Q
if(!(z==null))z.A(a)},
fF:[function(a){var z
H.i(a,"$isn")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.fF(null)},"ji","$1","$0","gdl",0,2,1],
jo:[function(a){var z,y,x
H.q(a,"$ish",[D.a1],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.f6(x))return!1}return!0},"$1","gfM",4,0,29],
j2:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.q(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gdl(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.i(b[u],"$isa1")
if(t instanceof D.cB)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bi()
s.a=H.a([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c9(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gfl",8,0,20],
jq:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.q(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gdl(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.i(b[u],"$isa1")
if(t instanceof D.cB)C.a.X(this.e,t)
s=t.d
if(s==null){s=new D.bi()
s.a=H.a([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.X(s.a,x)}z=new D.ca(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gfO",8,0,20],
f6:function(a){var z=C.a.ar(this.e,a)
return z},
$ash:function(){return[D.a1]},
$asam:function(){return[D.a1]}},iM:{"^":"b;",$isa1:1,$isaO:1},jn:{"^":"b;",$isa1:1,$isaO:1},jy:{"^":"b;",$isa1:1,$isaO:1},jz:{"^":"b;",$isa1:1,$isaO:1},jA:{"^":"b;",$isa1:1,$isaO:1}}],["","",,V,{"^":"",
mj:[function(a,b){if(typeof b!=="number")return b.u()
if(typeof a!=="number")return H.e(a)
return Math.abs(b-a)<=1e-9},"$2","iu",8,0,27],
cW:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.cU(a-b,z)
return(a<0?a+z:a)+b},
C:function(a,b,c){if(a==null)return C.i.aH("null",c)
return C.i.aH(C.h.ei($.m.$2(a,0)?0:a,b),c+b+1)},
bw:function(a,b,c){var z,y,x,w,v,u
H.q(a,"$isc",[P.y],"$asc")
z=H.a([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.C(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.j(z,u)
C.a.m(z,u,C.i.aH(z[u],x))}return z},
dY:function(a,b){return C.h.a7(Math.pow(b,C.l.b1(Math.log(H.lH(a))/Math.log(b))))},
aa:{"^":"b;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}},
aW:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aW))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
b0:{"^":"b;a",
t:function(a,b){if(b==null)return!1
if(!(b instanceof V.b0))return!1
return this.a===b.a},
i:function(a){var z,y,x
$.$get$eo()
$.$get$db()
z=H.a([],[P.o])
y=this.a
x=$.$get$bk().a
if((y&x)===x)C.a.h(z,"XPos")
x=$.$get$dc().a
if((y&x)===x)C.a.h(z,"XCenter")
x=$.$get$bj().a
if((y&x)===x)C.a.h(z,"XNeg")
x=$.$get$bG().a
if((y&x)===x)C.a.h(z,"YPos")
x=$.$get$dd().a
if((y&x)===x)C.a.h(z,"YCenter")
x=$.$get$bF().a
if((y&x)===x)C.a.h(z,"YNeg")
x=$.$get$c8().a
if((y&x)===x)C.a.h(z,"ZPos")
x=$.$get$eq().a
if((y&x)===x)C.a.h(z,"ZCenter")
x=$.$get$c7().a
if((y&x)===x)C.a.h(z,"ZNeg")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
an:function(a){return new V.b0(a)}}},
cG:{"^":"b;a,b,c,d",
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.l(this.c)+" "+H.l(this.d)}},
aN:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.a([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
bb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof y!=="number")return y.j()
if(typeof x!=="number")return H.e(x)
w=y*x
v=this.f
u=this.x
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
if(typeof z!=="number")return z.j()
t=this.d
s=this.b
if(typeof s!=="number")return s.j()
r=s*x
q=this.c
if(typeof q!=="number")return H.e(q)
p=u*q
if(typeof t!=="number")return t.j()
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.j()
m=z*(w-v*u)-t*(r-p)+o*n
if($.m.$2(m,0))return new V.aN(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.aN((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
if(typeof t!=="number")return t.j()
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return p.j()
o=this.y
if(typeof o!=="number")return o.j()
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
K:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
if(typeof t!=="number")return t.j()
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return p.j()
o=this.y
if(typeof o!=="number")return o.j()
return new V.r(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
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
y=V.bw(H.a([this.a,this.d,this.r],z),3,0)
x=V.bw(H.a([this.b,this.e,this.x],z),3,0)
w=V.bw(H.a([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.j(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.j(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.j(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.j(y,1)
s=" "+y[1]+", "
if(1>=u)return H.j(x,1)
s=s+x[1]+", "
if(1>=t)return H.j(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.j(y,2)
z=" "+y[2]+", "
if(2>=u)return H.j(x,2)
z=z+x[2]+", "
if(2>=t)return H.j(w,2)
return s+(z+w[2]+"]")},
q:{
eG:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.aN(z,0,-y,0,1,0,y,0,z)}}},
aC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
bb:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.e(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.e(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.e(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.e(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.e(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.e(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.bn()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.e(s)
r=a7.b
if(typeof r!=="number")return H.e(r)
q=a7.f
if(typeof q!=="number")return H.e(q)
p=a7.z
if(typeof p!=="number")return H.e(p)
o=a7.cy
if(typeof o!=="number")return H.e(o)
n=a7.c
if(typeof n!=="number")return H.e(n)
m=a7.r
if(typeof m!=="number")return H.e(m)
l=a7.Q
if(typeof l!=="number")return H.e(l)
k=a7.db
if(typeof k!=="number")return H.e(k)
j=a7.d
if(typeof j!=="number")return H.e(j)
i=a7.x
if(typeof i!=="number")return H.e(i)
h=a7.ch
if(typeof h!=="number")return H.e(h)
g=a7.dx
if(typeof g!=="number")return H.e(g)
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
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
K:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
if(typeof t!=="number")return H.e(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.e(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.e(l)
return new V.r(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
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
i:function(a){return this.M()},
e2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.bw(H.a([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bw(H.a([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bw(H.a([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bw(H.a([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.j(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.j(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.j(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.j(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.j(y,1)
q=q+y[1]+", "
if(1>=t)return H.j(x,1)
q=q+x[1]+", "
if(1>=s)return H.j(w,1)
q=q+w[1]+", "
if(1>=r)return H.j(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.j(y,2)
u=u+y[2]+", "
if(2>=t)return H.j(x,2)
u=u+x[2]+", "
if(2>=s)return H.j(w,2)
u=u+w[2]+", "
if(2>=r)return H.j(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.j(y,3)
q=q+y[3]+", "
if(3>=t)return H.j(x,3)
q=q+x[3]+", "
if(3>=s)return H.j(w,3)
q=q+w[3]+", "
if(3>=r)return H.j(v,3)
return u+(q+v[3]+"]")},
M:function(){return this.e2("",3,0)},
E:function(a){return this.e2(a,3,0)},
q:{
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bn:function(){return V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cd:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dm:function(a,b,c,d){return V.aD(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eI:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eJ:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eH:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.C(c)))
y=b.ba(z)
x=y.w(0,Math.sqrt(y.C(y)))
w=z.ba(x)
v=new V.H(a.a,a.b,a.c)
return V.aD(x.a,w.a,z.a,x.I(0).C(v),x.b,w.b,z.b,w.I(0).C(v),x.c,w.c,z.c,z.I(0).C(v),0,0,0,1)}}},
M:{"^":"b;a,b",
u:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.e(w)
return new V.M(z-y,x-w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
r:{"^":"b;a,b,c",
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.e(u)
return new V.r(z+y,x+w,v+u)},
u:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.u()
if(typeof u!=="number")return H.e(u)
return new V.r(z-y,x-w,v-u)},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
x=this.c
if(typeof x!=="number")return x.j()
return new V.r(z*b,y*b,x*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.r))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
q:{
b5:function(a,b,c){return new V.r(a,b,c)}}},
ce:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ce))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
eR:{"^":"b;a,b,c,d,e,f",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eR))return!1
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
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+", "+V.C(this.e,3,0)+", "+V.C(this.f,3,0)+"]"},
q:{
eS:function(a,b){return new V.eR(a.a,a.b,a.c,b.a,b.b,b.c)}}},
eU:{"^":"b;a,b,c,d",
gau:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
e7:function(a){var z,y,x,w,v,u,t
z=$.$get$ep()
y=a.a
x=this.a
if(typeof y!=="number")return y.S()
if(y<x){w=$.$get$bj()
z=new V.b0(z.a|w.a)}else if(y>=x+this.c){w=$.$get$bk()
z=new V.b0(z.a|w.a)}else{w=$.$get$dc()
z=new V.b0(z.a|w.a)}w=a.b
v=this.b
if(typeof w!=="number")return w.S()
if(w<v)z=new V.b0(z.a|$.$get$bF().a)
else{u=z.a
z=w>=v+this.d?new V.b0(u|$.$get$bG().a):new V.b0(u|$.$get$dd().a)}u=z.a
t=$.$get$bj().a
if(!((u&t)===t)){t=$.$get$bk().a
if((u&t)===t){y=x+this.c
x=y}else x=y}y=$.$get$bF().a
if(!((u&y)===y)){y=$.$get$bG().a
if((u&y)===y){y=v+this.d
v=y}else v=w}return new V.M(x,v)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eU))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"},
q:{
dr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eU(a,b,c,d)}}},
ds:{"^":"b;a,b,c,d,e,f",
ir:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.a
if(typeof z!=="number")return z.n()
y=z+this.d
x=this.b
if(typeof x!=="number")return x.n()
w=x+this.e
v=this.c
if(typeof v!=="number")return v.n()
u=v+this.f
t=a1.a
if(typeof t!=="number")return t.S()
if(t<z){s=z-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s>r)return
s/=r
q=$.$get$bj()
p=z
o=!1
n=-1}else if(t>y){s=y-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s<r)return
s/=r
q=$.$get$bk()
p=y
o=!1
n=1}else{o=!0
s=-1
n=null
p=null
q=null}r=a1.b
if(typeof r!=="number")return r.S()
if(r<x){m=x-r
l=a1.e
if(typeof l!=="number")return H.e(l)
if(m>l)return
m/=l
k=$.$get$bF()
j=x
o=!1
i=-1}else if(r>w){m=w-r
l=a1.e
if(typeof l!=="number")return H.e(l)
if(m<l)return
m/=l
k=$.$get$bG()
j=w
o=!1
i=1}else{m=-1
i=null
j=null
k=null}l=a1.c
if(typeof l!=="number")return l.S()
if(l<v){h=v-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h>g)return
h/=g
f=$.$get$c7()
e=v
o=!1
d=-1}else if(l>u){h=u-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h<g)return
h/=g
f=$.$get$c8()
e=u
o=!1
d=1}else{h=-1
d=null
e=null
f=null}if(o){z=new V.H(a1.d,a1.e,a1.f)
return new V.cG(new V.r(t,r,l),z.w(0,Math.sqrt(z.C(z))).I(0),0,$.$get$db())}if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*s
if(b<x||b>w)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*s
if(a<v||a>u)return
return new V.cG(new V.r(p,b,a),new V.H(n,0,0),s,q)
case 1:x=a1.d
if(typeof x!=="number")return x.j()
a0=t+x*m
if(a0<z||a0>y)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*m
if(a<v||a>u)return
return new V.cG(new V.r(a0,j,a),new V.H(0,i,0),m,k)
default:v=a1.d
if(typeof v!=="number")return v.j()
a0=t+v*h
if(a0<z||a0>y)return
z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*h
if(b<x||b>w)return
return new V.cG(new V.r(a0,b,e),new V.H(0,0,d),h,f)}},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ds))return!1
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
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+", "+V.C(this.e,3,0)+", "+V.C(this.f,3,0)+"]"},
q:{
eV:function(a,b,c,d,e,f){return new V.ds(a,b,c,d,e,f)}}},
Z:{"^":"b;a,b",
i4:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,21],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.Z(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.Z(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
H:{"^":"b;a,b,c",
i4:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,21],
C:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
return z*y+x*w+v*u},
ba:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=a.a
if(typeof v!=="number")return H.e(v)
u=this.a
if(typeof u!=="number")return u.j()
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.e(u)
return new V.H(z+y,x+w,v+u)},
I:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.I()
y=this.b
if(typeof y!=="number")return y.I()
x=this.c
if(typeof x!=="number")return x.I()
return new V.H(-z,-y,-x)},
w:function(a,b){var z,y,x
if($.m.$2(b,0))return new V.H(0,0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
x=this.c
if(typeof x!=="number")return x.w()
return new V.H(z/b,y/b,x/b)},
e3:function(){if(!$.m.$2(0,this.a))return!1
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
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
q:{
bS:function(a,b,c){return new V.H(a,b,c)}}}}],["","",,U,{"^":"",hx:{"^":"d5;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bX:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cW(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gv:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
D:function(a){var z=this.y
if(!(z==null))z.A(a)},
scO:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.G("warp",z,b,this,[P.a8])
z.b=!0
this.D(z)}},
scH:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bX(z)}z=new D.G("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.D(z)}},
scI:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bX(z)}z=new D.G("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.D(z)}},
sR:function(a,b){var z,y
b=this.bX(b==null?0:b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.y])
z.b=!0
this.D(z)}},
sat:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.D(z)}},
sF:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.y])
z.b=!0
this.D(z)}},
saD:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.y])
z.b=!0
this.D(z)}},
a8:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sR(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sF(y)}},
q:{
c5:function(){var z=new U.hx()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e9:{"^":"a6;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
al:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e9))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")},
q:{
aX:function(a){var z=new U.e9()
z.a=a
return z}}},en:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
D:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.A(a)},function(){return this.D(null)},"ao","$1","$0","gan",0,2,1],
iT:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.q(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gan(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.D(z)},"$2","geL",8,0,22],
jp:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.q(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gan(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.f(x,w)
C.a.X(t.a,x)}}z=new D.ca(a,b,this,[z])
z.b=!0
this.D(z)},"$2","gfN",8,0,22],
al:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.at(z,z.length,0,[H.A(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.al(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bn():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.en))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.Y(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a6]},
$asam:function(){return[U.a6]},
$isa6:1,
q:{
cE:function(a){var z=new U.en()
z.bm(U.a6)
z.bl(z.geL(),z.gfN())
z.aB(0,a)
z.e=null
z.f=V.bn()
z.r=0
return z}}},es:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
D:[function(a){var z
H.i(a,"$isn")
z=this.b
if(!(z==null))z.A(a)},function(){return this.D(null)},"ao","$1","$0","gan",0,2,1],
al:function(a,b,c){var z,y,x
z=this.d
y=b.e
if(z<y){this.d=y
z=this.b
if(!(z==null))++z.c
z=this.a
z=z==null?null:z.al(0,b,c)
x=z==null?null:z.bb(0)
this.c=x==null?V.bn():x
z=this.b
if(!(z==null))z.av(0)}return this.c},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.es))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){return"Invert"},
$isa6:1},a6:{"^":"d5;"},eW:{"^":"a6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gv:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
D:function(a){var z=this.y
if(!(z==null))z.A(a)},
sej:function(a){var z,y
a=V.cW(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.G("yaw",y,a,this,[P.y])
z.b=!0
this.D(z)}},
seb:function(a,b){var z,y
b=V.cW(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.G("pitch",y,b,this,[P.y])
z.b=!0
this.D(z)}},
sef:function(a){var z,y
a=V.cW(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.G("roll",y,a,this,[P.y])
z.b=!0
this.D(z)}},
al:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sej(this.a+this.d*b.y)
this.seb(0,this.b+this.e*b.y)
this.sef(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aD(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).j(0,V.eJ(this.b)).j(0,V.eI(this.a))
z=this.y
if(!(z==null))z.av(0)}return this.x},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eW))return!1
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
i:function(a){return"Rotater: ["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"], ["+V.C(this.d,3,0)+", "+V.C(this.e,3,0)+", "+V.C(this.f,3,0)+"]"}},jW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.K()
this.fx=z}return z},
D:[function(a){var z
H.i(a,"$isn")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.D(null)},"ao","$1","$0","gan",0,2,1],
a4:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.n]}
x=H.f(this.gfi(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.K()
x.d=z}x=H.f(this.gfj(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.K()
x.c=z}x=H.f(this.gfk(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.K()
x.f=z}x=H.f(this.gff(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.K()
x.d=z}x=H.f(this.gfg(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.K()
x.b=z}x=H.f(this.ghc(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.K()
x.d=z}x=H.f(this.ghb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.K()
x.c=z}y=H.f(this.gha(),y)
C.a.h(z.a,y)
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.I()
z=-z}if(this.r){if(typeof y!=="number")return y.I()
y=-y}return new V.Z(z,y)},
j_:[function(a){a=H.k(H.i(a,"$isn"),"$isbN")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfi",4,0,0],
j0:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isbN")
if(!this.cx)return
if(this.ch){z=a.d.u(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.u(0,a.y)
z=this.ap(new V.Z(y.a,y.b).j(0,2).w(0,z.gau()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sF(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sF(-z*10*y)}else{z=a.c
y=a.d
x=y.u(0,a.y)
w=this.ap(new V.Z(x.a,x.b).j(0,2).w(0,z.gau()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sR(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sR(0,-u*v+x)
this.b.sF(0)
this.c.sF(0)
y=y.u(0,a.z)
this.dx=this.ap(new V.Z(y.a,y.b).j(0,2).w(0,z.gau()))}this.ao()},"$1","gfj",4,0,0],
j1:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sF(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sF(-y*10*z)
this.ao()}},"$1","gfk",4,0,0],
iY:[function(a){if(H.k(H.i(a,"$isn"),"$iseB").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gff",4,0,0],
iZ:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isbN")
if(!J.Y(this.d,a.x.b))return
z=a.c
y=a.d
x=y.u(0,a.y)
w=this.ap(new V.Z(x.a,x.b).j(0,2).w(0,z.gau()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sR(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sR(0,-u*v+x)
this.b.sF(0)
this.c.sF(0)
y=y.u(0,a.z)
this.dx=this.ap(new V.Z(y.a,y.b).j(0,2).w(0,z.gau()))
this.ao()},"$1","gfg",4,0,0],
jy:[function(a){H.i(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghc",4,0,0],
jx:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isfa")
if(!this.cx)return
if(this.ch){z=a.d.u(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.u(0,a.y)
z=this.ap(new V.Z(y.a,y.b).j(0,2).w(0,z.gau()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sF(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sF(-z*10*y)}else{z=a.c
y=a.d
x=y.u(0,a.y)
w=this.ap(new V.Z(x.a,x.b).j(0,2).w(0,z.gau()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sR(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sR(0,-u*v+x)
this.b.sF(0)
this.c.sF(0)
y=y.u(0,a.z)
this.dx=this.ap(new V.Z(y.a,y.b).j(0,2).w(0,z.gau()))}this.ao()},"$1","ghb",4,0,0],
jw:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sF(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sF(-y*10*z)
this.ao()}},"$1","gha",4,0,0],
al:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.a8(0,x)
this.b.a8(0,x)
this.fr=V.eI(this.b.d).j(0,V.eJ(this.c.d))}return this.fr},
$isa6:1},jX:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dx
if(z==null){z=D.K()
this.dx=z}return z},
D:[function(a){var z
H.i(a,"$isn")
z=this.dx
if(!(z==null))z.A(a)},function(){return this.D(null)},"ao","$1","$0","gan",0,2,1],
sF:function(a){this.r.sF(a.a)
this.x.sF(a.b)
this.y.sF(a.c)},
gR:function(a){return new V.r(this.r.d,this.x.d,this.y.d)},
sR:function(a,b){H.i(b,"$isr")
this.r.sR(0,b.a)
this.x.sR(0,b.b)
this.y.sR(0,b.c)},
jh:[function(a){this.D(H.i(a,"$isn"))},"$1","gfD",4,0,0],
ce:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.n()
e+=d}else if(b.r){if(typeof e!=="number")return e.u()
e-=d}else{if(typeof e!=="number")return e.iP()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
al:function(a,b,c){var z,y,x,w,v,u,t
z=this.cy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.cy=y
x=this.gR(this)
w=b.y
if(w>0.1)w=0.1
z=this.ch
if(typeof z!=="number")return z.j()
v=z*w
z=this.cx
if(typeof z!=="number")return z.j()
u=z*w
t=new V.H(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)t=z.ak(t)
t=new V.H(this.ce(this.a,this.b,v,u,t.a),this.ce(this.c,this.d,v,u,t.b),this.ce(this.e,this.f,v,u,t.c))
z=this.z
this.sF(z!=null?z.ak(t):t)
this.r.a8(0,w)
this.x.a8(0,w)
this.y.a8(0,w)
if(this.dy!=null){z=this.gR(this)
this.sR(0,this.dy.$2(x,z))}this.db=V.cd(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa6:1}}],["","",,M,{"^":"",hL:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
b4:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.A(a)},function(){return this.b4(null)},"iU","$1","$0","gaL",0,2,1],
j9:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.q(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.bi()
s.a=H.a([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.b4(z)},"$2","gft",8,0,7],
ja:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.q(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.bi()
s.a=H.a([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.X(s.a,x)}}z=new D.ca(a,b,this,[z])
z.b=!0
this.b4(z)},"$2","gfu",8,0,7],
gv:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.jp(a,this)
z.b=!0
y=this.e
if(!(y==null))y.A(z)
a.ee(this.c)
y=this.b
y.toString
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
x=a.a
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
if(typeof w!=="number")return H.e(w)
t=C.h.aj(u.a*w)
if(typeof v!=="number")return H.e(v)
s=C.h.aj(u.b*v)
r=C.h.aj(u.c*w)
a.c=r
u=C.h.aj(u.d*v)
a.d=u
x.viewport(t,s,r,u)
a.a.clearDepth(y.c)
x=a.a
y=y.a
x.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)
y=this.a
x=a.c
u=a.d
r=a.cy
q=y.b
p=y.c
o=y.d
n=o-p
m=1/Math.tan(q*0.5)
r.ed(V.aD(-m/(x/u),0,0,0,0,m,0,0,0,0,o/n,-o*p/n,0,0,1,0))
x=$.eN
if(x==null){x=V.eH(new V.r(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.eN=x
l=x}else l=x
x=y.a
if(x!=null){k=x.al(0,a,y)
if(k!=null)l=k.j(0,l)}a.db.ed(l)
for(y=this.d.a,y=new J.at(y,y.length,0,[H.A(y,0)]);y.G();)y.d.a8(0,a)
for(y=this.d.a,y=new J.at(y,y.length,0,[H.A(y,0)]);y.G();)y.d.b2(a)
this.a.toString
a.cy.cK()
a.db.cK()
this.b.toString
a.ec()},
$ismS:1}}],["","",,A,{"^":"",e0:{"^":"b;a,b,c"},hk:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hT:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},im:{"^":"eX;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aZ,0aE,0b_,0bB,0dI,0dJ,0bC,0bD,0dK,0dL,0bE,0bF,0dM,0dN,0bG,0dO,0dP,0bH,0dQ,0dR,0bI,0bJ,0bK,0dS,0dT,0bL,0bM,0dU,0dV,0bN,0dW,0cu,0dX,0cv,0dY,0cw,0dZ,0cz,0e_,0cA,0e0,0cB,a,b,0c,0d,0e,0f,0r",
ex:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.cq("")
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
a2.hl(z)
a2.hs(z)
a2.hm(z)
a2.hA(z)
a2.hB(z)
a2.hu(z)
a2.hF(z)
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
z=new P.cq("")
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
v.hp(z)
v.hk(z)
v.hn(z)
v.hq(z)
v.hy(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hw(z)
v.hx(z)}v.ht(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
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
case C.f:r+="   return alpha;\n"
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
p=H.a([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.ho(z)
v.hv(z)
v.hz(z)
v.hC(z)
v.hD(z)
v.hE(z)
v.hr(z)}r=z.a+="// === Main ===\n"
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
o=H.a([],[P.o])
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.dh(x.charCodeAt(0)==0?x:x,35633)
this.d=this.dh(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fY(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.u("Failed to link shader: "+H.l(m)))}this.h5()
this.h7()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.p(0,"invViewMat"),"$isaP")
if(y)this.db=H.k(this.r.p(0,"objMat"),"$isaP")
if(w)this.dx=H.k(this.r.p(0,"viewObjMat"),"$isaP")
this.fr=H.k(this.r.p(0,"projViewObjMat"),"$isaP")
if(a2.x2)this.go=H.k(this.r.p(0,"txt2DMat"),"$isdH")
if(a2.y1)this.id=H.k(this.r.p(0,"txtCubeMat"),"$isaP")
if(a2.y2)this.k1=H.k(this.r.p(0,"colorMat"),"$isaP")
this.k3=H.a([],[A.aP])
y=a2.aZ
if(y>0){this.k2=H.i(this.r.p(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.t(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaP"))}}y=a2.a
if(y!==C.b){this.k4=H.k(this.r.p(0,"emissionClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.k(this.r.p(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.p(0,"nullEmissionTxt"),"$isO")
break
case C.d:this.r2=H.k(this.r.p(0,"emissionTxt"),"$isaq")
this.rx=H.k(this.r.p(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.b){this.ry=H.k(this.r.p(0,"ambientClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.k(this.r.p(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.p(0,"nullAmbientTxt"),"$isO")
break
case C.d:this.x2=H.k(this.r.p(0,"ambientTxt"),"$isaq")
this.y1=H.k(this.r.p(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.b){this.y2=H.k(this.r.p(0,"diffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.aZ=H.k(this.r.p(0,"diffuseTxt"),"$isap")
this.b_=H.k(this.r.p(0,"nullDiffuseTxt"),"$isO")
break
case C.d:this.aE=H.k(this.r.p(0,"diffuseTxt"),"$isaq")
this.b_=H.k(this.r.p(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.b){this.bB=H.k(this.r.p(0,"invDiffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dI=H.k(this.r.p(0,"invDiffuseTxt"),"$isap")
this.bC=H.k(this.r.p(0,"nullInvDiffuseTxt"),"$isO")
break
case C.d:this.dJ=H.k(this.r.p(0,"invDiffuseTxt"),"$isaq")
this.bC=H.k(this.r.p(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.b){this.bF=H.k(this.r.p(0,"shininess"),"$isW")
this.bD=H.k(this.r.p(0,"specularClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dK=H.k(this.r.p(0,"specularTxt"),"$isap")
this.bE=H.k(this.r.p(0,"nullSpecularTxt"),"$isO")
break
case C.d:this.dL=H.k(this.r.p(0,"specularTxt"),"$isaq")
this.bE=H.k(this.r.p(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.c:this.dM=H.k(this.r.p(0,"bumpTxt"),"$isap")
this.bG=H.k(this.r.p(0,"nullBumpTxt"),"$isO")
break
case C.d:this.dN=H.k(this.r.p(0,"bumpTxt"),"$isaq")
this.bG=H.k(this.r.p(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dO=H.k(this.r.p(0,"envSampler"),"$isaq")
this.dP=H.k(this.r.p(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.b){this.bH=H.k(this.r.p(0,"reflectClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dQ=H.k(this.r.p(0,"reflectTxt"),"$isap")
this.bI=H.k(this.r.p(0,"nullReflectTxt"),"$isO")
break
case C.d:this.dR=H.k(this.r.p(0,"reflectTxt"),"$isaq")
this.bI=H.k(this.r.p(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.b){this.bJ=H.k(this.r.p(0,"refraction"),"$isW")
this.bK=H.k(this.r.p(0,"refractClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dS=H.k(this.r.p(0,"refractTxt"),"$isap")
this.bL=H.k(this.r.p(0,"nullRefractTxt"),"$isO")
break
case C.d:this.dT=H.k(this.r.p(0,"refractTxt"),"$isaq")
this.bL=H.k(this.r.p(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.b){this.bM=H.k(this.r.p(0,"alpha"),"$isW")
switch(y){case C.b:break
case C.f:break
case C.c:this.dU=H.k(this.r.p(0,"alphaTxt"),"$isap")
this.bN=H.k(this.r.p(0,"nullAlphaTxt"),"$isO")
break
case C.d:this.dV=H.k(this.r.p(0,"alphaTxt"),"$isaq")
this.bN=H.k(this.r.p(0,"nullAlphaTxt"),"$isO")
break}}this.cu=H.a([],[A.fn])
this.cv=H.a([],[A.fo])
this.cw=H.a([],[A.fp])
this.cz=H.a([],[A.fq])
this.cA=H.a([],[A.fr])
this.cB=H.a([],[A.fs])
if(a2.k2){y=a2.z
if(y>0){this.dW=H.i(this.r.p(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.cu;(x&&C.a).h(x,new A.fn(l,k,j))}}y=a2.Q
if(y>0){this.dX=H.i(this.r.p(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isW")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.cv;(x&&C.a).h(x,new A.fo(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dY=H.i(this.r.p(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.cw;(x&&C.a).h(x,new A.fp(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dZ=H.i(this.r.p(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isap")
x=this.cz;(x&&C.a).h(x,new A.fq(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e_=H.i(this.r.p(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdH")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isaq")
x=this.cA;(x&&C.a).h(x,new A.fr(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e0=H.i(this.r.p(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isN")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isW")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isW")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isW")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isap")
x=this.cB;(x&&C.a).h(x,new A.fs(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ah:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eo(c)
b.a.uniform1i(b.d,0)}},
ac:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
il:function(a,b){var z,y
z=a.aE
y=new A.im(b,z)
y.eB(b,z)
y.ex(a,b)
return y}}},iq:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aZ,aE,b_",
hl:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aZ+"];\n"
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
hs:function(a){var z
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
hm:function(a){var z
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
hA:function(a){var z,y
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
hB:function(a){var z,y
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
hu:function(a){var z
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
hF:function(a){var z
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
ay:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.j(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cW(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hp:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ay(a,z,"emission")
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
hk:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ay(a,z,"ambient")
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
hn:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ay(a,z,"diffuse")
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
hq:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ay(a,z,"invDiffuse")
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
hy:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ay(a,z,"specular")
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
ht:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
case C.f:z+="   return normalize(normalVec);\n"
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
hw:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ay(a,z,"reflect")
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
hx:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ay(a,z,"refract")
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
ho:function(a){var z,y
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
hv:function(a){var z,y
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
hz:function(a){var z,y
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
hC:function(a){var z,y,x
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
hD:function(a){var z,y,x
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
hE:function(a){var z,y,x
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
hr:function(a){var z
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
i:function(a){return this.aE}},fn:{"^":"b;a,b,c"},fq:{"^":"b;a,b,c,d,e,f,r,x"},fo:{"^":"b;a,b,c,d,e,f,r"},fr:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fp:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fs:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eX:{"^":"d_;",
eB:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dh:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
h5:function(){var z,y,x,w,v,u
z=H.a([],[A.e0])
y=this.a
x=H.z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.e0(y,v.name,u))}this.f=new A.hk(z)},
h7:function(){var z,y,x,w,v,u
z=H.a([],[A.af])
y=this.a
x=H.z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hQ(v.type,v.size,v.name,u))}this.r=new A.jO(z)},
aQ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.dG(z,y,b,a,c)},
f7:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dG(z,y,b,a,c)},
f8:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dG(z,y,b,a,c)},
bv:function(a,b){return new P.fz(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hQ:function(a,b,c,d){switch(a){case 5120:return this.aQ(b,c,d)
case 5121:return this.aQ(b,c,d)
case 5122:return this.aQ(b,c,d)
case 5123:return this.aQ(b,c,d)
case 5124:return this.aQ(b,c,d)
case 5125:return this.aQ(b,c,d)
case 5126:return new A.W(this.a,this.e,c,d)
case 35664:return new A.jJ(this.a,this.e,c,d)
case 35665:return new A.N(this.a,this.e,c,d)
case 35666:return new A.jM(this.a,this.e,c,d)
case 35667:return new A.jK(this.a,this.e,c,d)
case 35668:return new A.jL(this.a,this.e,c,d)
case 35669:return new A.jN(this.a,this.e,c,d)
case 35674:return new A.jQ(this.a,this.e,c,d)
case 35675:return new A.dH(this.a,this.e,c,d)
case 35676:return new A.aP(this.a,this.e,c,d)
case 35678:return this.f7(b,c,d)
case 35680:return this.f8(b,c,d)
case 35670:throw H.d(this.bv("BOOL",c))
case 35671:throw H.d(this.bv("BOOL_VEC2",c))
case 35672:throw H.d(this.bv("BOOL_VEC3",c))
case 35673:throw H.d(this.bv("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cA:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},jO:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
hZ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.hZ("\n")}},O:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jK:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jL:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jN:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jI:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dG:function(a,b,c,d,e){var z=new A.jI(a,b,c,e)
z.f=d
z.e=P.id(d,0,!1,P.x)
return z}}},W:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jJ:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},N:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jM:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jQ:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dH:{"^":"af;a,b,c,d",
am:function(a){var z=new Float32Array(H.bY(H.q(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aP:{"^":"af;a,b,c,d",
am:function(a){var z=new Float32Array(H.bY(H.q(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ap:{"^":"af;a,b,c,d",
eo:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aq:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",au:{"^":"b;0a,0b,0c,0d,0e",
ghU:function(){return this.a==null||this.b==null||this.c==null},
f1:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.e3())return
return v.w(0,Math.sqrt(v.C(v)))},
f4:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.u(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.C(z)))
z=w.u(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.ba(z.w(0,Math.sqrt(z.C(z))))
return z.w(0,Math.sqrt(z.C(z)))},
cq:function(){if(this.d!=null)return!0
var z=this.f1()
if(z==null){z=this.f4()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
f0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.e3())return
return v.w(0,Math.sqrt(v.C(v)))},
f3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.e(y)
n=z-y
if($.m.$2(n,0)){z=r.u(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.u()
if(typeof p!=="number")return H.e(p)
if(z-p<0)m=m.I(0)}else{y=q.b
if(typeof y!=="number")return H.e(y)
l=(z-y)/n
y=r.u(0,u).j(0,l).n(0,u).u(0,x)
y=new V.H(y.a,y.b,y.c)
m=y.w(0,Math.sqrt(y.C(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.u()
if(typeof p!=="number")return H.e(p)
q=q.a
if(typeof q!=="number")return H.e(q)
if((o-p)*l+p-q<0)m=m.I(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.C(z)))
z=k.ba(m)
z=z.w(0,Math.sqrt(z.C(z))).ba(k)
m=z.w(0,Math.sqrt(z.C(z)))}return m},
cp:function(){if(this.e!=null)return!0
var z=this.f0()
if(z==null){z=this.f3()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var z,y
if(this.ghU())return a+"disposed"
z=a+C.i.aH(J.as(this.a.e),0)+", "+C.i.aH(J.as(this.b.e),0)+", "+C.i.aH(J.as(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.E("")}},ex:{"^":"b;"},eO:{"^":"b;"},eT:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
gv:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.q(a,"$isc",[F.bT],"$asc")
z=a.length
y=new Array(z*this.c)
y.fixed$length=Array
x=H.a(y,[P.y])
for(y=this.a,w=0,v=0;v<this.b;++v){u=y.cg(v)
for(t=0;t<z;++t){if(t>=a.length)return H.j(a,t)
s=a[t].e4(u)
r=w+t*this.c
for(q=0;q<s.length;++q){C.a.m(x,r,s[q]);++r}}w+=u.gb3(u)}p=$.$get$a_()
if((y.a&p.a)!==0){y=this.z
if(y==null){if(0>=a.length)return H.j(a,0)
y=a[0].f
y=V.eV(y.a,y.b,y.c,0,0,0)
this.z=y}for(v=z-1;v>=0;--v){if(v>=a.length)return H.j(a,v)
p=a[v].f
o=p.a
n=p.b
p=p.c
m=y.d
l=y.a
if(typeof o!=="number")return o.S()
if(typeof l!=="number")return H.e(l)
if(o<l){m+=l-o
k=o}else{if(o>l+m)m=o-l
k=l}j=y.e
o=y.b
if(typeof n!=="number")return n.S()
if(typeof o!=="number")return H.e(o)
if(n<o){j+=o-n
i=n}else{if(n>o+j)j=n-o
i=o}h=y.f
y=y.c
if(typeof p!=="number")return p.S()
if(typeof y!=="number")return H.e(y)
if(p<y){h+=y-p
g=p}else{if(p>y+h)h=p-y
g=y}y=new V.ds(k,i,g,m,j,h)
this.z=y}}r=this.d
this.d=r+z
C.a.aB(this.f,x)
this.a5()
return r},
b8:function(a){var z,y,x,w,v,u,t
z=P.x
H.q(a,"$isc",[z],"$asc")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.a(x,[z])
if(0>=a.length)return H.j(a,0)
v=a[0]
for(u=2,t=0;u<y;++u,t+=3){C.a.m(w,t,v)
z=u-1
if(z>=a.length)return H.j(a,z)
C.a.m(w,t+1,a[z])
if(u>=a.length)return H.j(a,u)
C.a.m(w,t+2,a[u])}C.a.aB(this.y,w)
this.a5()}},
hJ:function(a){var z,y,x,w,v,u,t,s,r,q
z=P.x
H.q(a,"$isc",[z],"$asc")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.a(x,[z])
for(v=!1,u=2,t=0;u<y;++u,t+=3){z=a.length
x=u-2
s=t+1
r=t+2
q=u-1
if(v){if(x>=z)return H.j(a,x)
C.a.m(w,t,a[x])
if(q>=a.length)return H.j(a,q)
C.a.m(w,s,a[q])
if(u>=a.length)return H.j(a,u)
C.a.m(w,r,a[u])
v=!1}else{if(q>=z)return H.j(a,q)
C.a.m(w,t,a[q])
if(x>=a.length)return H.j(a,x)
C.a.m(w,s,a[x])
if(u>=a.length)return H.j(a,u)
C.a.m(w,r,a[u])
v=!0}}C.a.aB(this.y,w)
this.a5()}},
a2:function(a){var z=this.Q
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
aC:function(){return!1},
aV:function(){return!1},
bz:function(){return!1},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=this.a
if(!J.Y(b,z))throw H.d(P.u("Shape was reduced to "+H.l(z)+" so can not build for "+H.l(b)+"."))
if(this.e==null){y=this.c*4
x=new Array(this.b)
x.fixed$length=Array
this.e=H.a(x,[Z.cz])
for(w=0,v=0;v<this.b;++v){u=z.cg(v)
t=u.gb3(u)
x=this.e;(x&&C.a).m(x,v,new Z.cz(u,t,w*4,y,0))
w+=t}}x=a.a
s=new Z.d2(Z.fx(x,34962,H.q(this.f,"$isc",[P.y],"$asc")),this.e,z)
z=H.a([],[Z.bI])
s.b=z
r=this.r
if(r.length!==0){q=Z.cN(x,34963,H.q(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bI(0,this.r.length,q))}r=this.x
if(r.length!==0){q=Z.cN(x,34963,H.q(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bI(1,this.x.length,q))}r=this.y
if(r.length!==0){q=Z.cN(x,34963,H.q(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bI(4,this.y.length,q))}return s},
$isdu:1},eY:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
aC:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aC()||!1
if(!this.a.aC())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
aV:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aV()||!1
if(!this.a.aV())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
bz:function(){var z=this.e
if(!(z==null))++z.c
this.a.bz()
z=this.e
if(!(z==null))z.av(0)
return!0},
dC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a.c.length
y=b.gdG(b)
x=b.gb3(b)
w=x*4
v=new Array(z*x)
v.fixed$length=Array
u=P.y
t=H.a(v,[u])
v=new Array(y)
v.fixed$length=Array
s=H.a(v,[Z.cz])
for(r=0,q=0;q<y;++q){p=b.cg(q)
o=p.gb3(p)
C.a.m(s,q,new Z.cz(p,o,r*4,w,0))
for(n=0;n<z;++n){v=this.a.c
if(n>=v.length)return H.j(v,n)
m=v[n].e4(p)
l=r+n*x
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}v=a.a
j=new Z.d2(Z.fx(v,34962,H.q(t,"$isc",[u],"$asc")),s,b)
j.b=H.a([],[Z.bI])
this.b.b
this.c.b
if(this.d.b.length!==0){u=P.x
i=H.a([],[u])
for(q=0;h=this.d.b,q<h.length;++q){h=h[q].a
h.a.a.bw()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.j(h,q)
h=h[q].b
h.a.a.bw()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.j(h,q)
h=h[q].c
h.a.a.bw()
C.a.h(i,h.e)}g=Z.cN(v,34963,H.q(i,"$isc",[u],"$asc"))
C.a.h(j.b,new Z.bI(4,i.length,g))}return j},
i:function(a){var z=H.a([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.B(z,"\n")},
a2:function(a){var z=this.e
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
$isdu:1},du:{"^":"d5;"},jb:{"^":"b;a,0b",
hG:function(a){var z,y,x,w,v,u,t,s
H.q(a,"$isc",[F.bT],"$asc")
z=H.a([],[F.au])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
u=new F.au()
t=y.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
s=w.a
if(t==null?s==null:t===s){s=v.a
s=t==null?s!=null:t!==s
t=s}else t=!0
if(t)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.a=y
C.a.h(y.d.b,u)
u.b=w
C.a.h(w.d.c,u)
u.c=v
C.a.h(v.d.d,u)
C.a.h(u.a.a.d.b,u)
w=u.a.a.e
if(!(w==null))w.A(null)
C.a.h(z,u)}return z},
gl:function(a){return this.b.length},
aC:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cq())x=!1
return x},
aV:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cp())x=!1
return x},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
M:function(){return this.E("")}},jc:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.M()},
E:function(a){var z,y,x
z=H.a([],[P.o])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.j(x,y)
C.a.h(z,x[y].E(a+(""+y+". ")))}return C.a.B(z,"\n")},
M:function(){return this.E("")}},jd:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.M()},
E:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
M:function(){return this.E("")}},bT:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
e4:function(a){var z,y
z=J.P(a)
if(z.t(a,$.$get$a_())){z=this.f
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ae())){z=this.r
y=[P.y]
if(z==null)return H.a([0,1,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aR())){z=this.x
y=[P.y]
if(z==null)return H.a([0,0,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$a2())){z=this.y
y=[P.y]
if(z==null)return H.a([0,0],y)
else return H.a([z.a,z.b],y)}else if(z.t(a,$.$get$aS())){z=this.z
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bU())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bV())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1,1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$br()))return H.a([this.ch],[P.y])
else if(z.t(a,$.$get$aQ())){z=this.cx
y=[P.y]
if(z==null)return H.a([-1,-1,-1,-1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else return H.a([],[P.y])},
cq:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.L(0,new F.k6(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
cp:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.L(0,new F.k5(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var z,y,x
z=H.a([],[P.o])
C.a.h(z,C.i.aH(J.as(this.e),0))
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
x=C.a.B(z,", ")
return a+"{"+x+"}"},
M:function(){return this.E("")},
q:{
bq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bT()
y=new F.k4(z)
y.b=H.a([],[F.eO])
z.b=y
y=new F.k3(z)
x=[F.ex]
y.b=H.a([],x)
y.c=H.a([],x)
z.c=y
y=new F.k0(z)
x=[F.au]
y.b=H.a([],x)
y.c=H.a([],x)
y.d=H.a([],x)
z.d=y
z.e=0
y=h.a
z.f=(y&$.$get$a_().a)!==0?d:null
z.r=(y&$.$get$ae().a)!==0?e:null
z.x=(y&$.$get$aR().a)!==0?b:null
z.y=(y&$.$get$a2().a)!==0?f:null
z.z=(y&$.$get$aS().a)!==0?g:null
z.Q=(y&$.$get$fu().a)!==0?c:null
z.ch=(y&$.$get$br().a)!==0?i:0
z.cx=(y&$.$get$aQ().a)!==0?a:null
return z}}},k6:{"^":"v:9;a",
$1:function(a){var z,y
H.i(a,"$isau")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},k5:{"^":"v:9;a",
$1:function(a){var z,y
H.i(a,"$isau")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},k_:{"^":"b;a,0b,0c",
bw:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a5()
return!0},
hI:function(a,b,c,d,e,f,g,h,i){var z=F.bq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bx:function(a,b,c,d,e,f){return this.hI(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aC:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cq()
return!0},
aV:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cp()
return!0},
bz:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.j()
t=v.b
if(typeof t!=="number")return t.j()
s=v.c
if(typeof s!=="number")return s.j()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Y(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
this.bw()
z=H.a([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
M:function(){return this.E("")}},k0:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){H.f(b,{func:1,ret:-1,args:[F.au]})
C.a.L(this.b,b)
C.a.L(this.c,new F.k1(this,b))
C.a.L(this.d,new F.k2(this,b))},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
M:function(){return this.E("")}},k1:{"^":"v:9;a,b",
$1:function(a){H.i(a,"$isau")
if(!J.Y(a.a,this.a))this.b.$1(a)}},k2:{"^":"v:9;a,b",
$1:function(a){var z
H.i(a,"$isau")
z=this.a
if(!J.Y(a.a,z)&&!J.Y(a.b,z))this.b.$1(a)}},k3:{"^":"b;a,0b,0c",
gl:function(a){return 0},
i:function(a){return this.M()},
E:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].E(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
M:function(){return this.E("")}},k4:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.M()},
E:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
M:function(){return this.E("")}}}],["","",,O,{"^":"",eE:{"^":"dB;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.K()
this.dy=z}return z},
Y:[function(a){var z
H.i(a,"$isn")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.Y(null)},"eM","$1","$0","gbn",0,2,1],
fZ:[function(a){H.i(a,"$isn")
this.a=null
this.Y(a)},function(){return this.fZ(null)},"jv","$1","$0","gfY",0,2,1],
j3:[function(a,b){var z=V.aC
z=new D.c9(a,H.q(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.Y(z)},"$2","gfm",8,0,14],
j4:[function(a,b){var z=V.aC
z=new D.ca(a,H.q(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.Y(z)},"$2","gfn",8,0,14],
de:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.Z(z.e.length+3,4)*4
x=C.e.Z(z.f.length+3,4)*4
w=C.e.Z(z.r.length+3,4)*4
v=C.e.Z(z.x.length+3,4)*4
u=C.e.Z(z.y.length+3,4)*4
t=C.e.Z(z.z.length+3,4)*4
s=C.e.Z(this.e.a.length+3,4)*4
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
a6=$.$get$a_()
if(c){z=$.$get$ae()
a6=new Z.ad(a6.a|z.a)}if(b){z=$.$get$aR()
a6=new Z.ad(a6.a|z.a)}if(a){z=$.$get$a2()
a6=new Z.ad(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.ad(a6.a|z.a)}if(a2){z=$.$get$aQ()
a6=new Z.ad(a6.a|z.a)}return new A.iq(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.q(a,"$isc",[T.dC],"$asc")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
a8:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.A(z,0)]);z.G();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ak(x)}}},
iv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.de()
y=a.fr.k(0,z.aE)
if(y==null){y=A.il(z,a.a)
x=y.b
if(x.length===0)H.t(P.u("May not cache a shader with no name."))
if(a.fr.dF(0,x))H.t(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.b_
z=b.e
if(!(z instanceof Z.d2)){b.e=null
z=null}if(z==null||!J.Y(z.d,v)){z=w.r1
if(z)b.d.aC()
u=w.r2
if(u)b.d.aV()
t=w.ry
if(t)b.d.bz()
s=b.d.dC(new Z.k7(a.a),v)
s.b0($.$get$a_()).e=this.a.y.c
if(z)s.b0($.$get$ae()).e=this.a.Q.c
if(u)s.b0($.$get$aR()).e=this.a.z.c
if(w.rx)s.b0($.$get$a2()).e=this.a.ch.c
if(t)s.b0($.$get$aS()).e=this.a.cx.c
if(w.x1)s.b0($.$get$aQ()).e=this.a.cy.c
b.e=s}z=T.dC
r=H.a([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hW()
if(w.fx){u=this.a
t=a.dx
t=t.gU(t)
u=u.db
u.toString
u.am(t.ag(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gU(t)
q=a.dx
q=t.j(0,q.gU(q))
a.cx=q
t=q}u=u.dx
u.toString
u.am(t.ag(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giq()
q=a.dx
q=t.j(0,q.gU(q))
a.ch=q
t=q}u=u.fr
u.toString
u.am(t.ag(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.am(t.ag(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.am(t.ag(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.am(C.B.ag(t,!0))}if(w.aZ>0){p=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,p)
for(u=[P.y],o=0;o<p;++o){t=this.a
q=this.e.a
if(o>=q.length)return H.j(q,o)
q=q[o]
t.toString
H.i(q,"$isaC")
t=t.k3
if(o>=t.length)return H.j(t,o)
t=t[o]
n=new Float32Array(H.bY(H.q(q.ag(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,n)}}switch(w.a){case C.b:break
case C.f:u=this.a
t=this.f.f
u=u.k4
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.P(r,this.f.d)
u=this.a
t=this.f.d
u.ah(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.P(r,this.f.e)
u=this.a
t=this.f.e
u.ac(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.f:u=this.a
t=this.r.f
u=u.ry
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.P(r,this.r.d)
u=this.a
t=this.r.d
u.ah(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.P(r,this.r.e)
u=this.a
t=this.r.e
u.ac(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.c){case C.b:break
case C.f:u=this.a
t=this.x.f
u=u.y2
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.P(r,this.x.d)
u=this.a
t=this.x.d
u.ah(u.aZ,u.b_,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.P(r,this.x.e)
u=this.a
t=this.x.e
u.ac(u.aE,u.b_,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.d){case C.b:break
case C.f:u=this.a
t=this.y.f
u=u.bB
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.P(r,this.y.d)
u=this.a
t=this.y.d
u.ah(u.dI,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.P(r,this.y.e)
u=this.a
t=this.y.e
u.ac(u.dJ,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.bD
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
t=this.a
m=this.z.ch
t=t.bF
t.a.uniform1f(t.d,m)
break
case C.c:this.P(r,this.z.d)
u=this.a
t=this.z.d
u.ah(u.dK,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bF
u.a.uniform1f(u.d,m)
break
case C.d:this.P(r,this.z.e)
u=this.a
t=this.z.e
u.ac(u.dL,u.bE,t)
t=this.a
u=this.z.f
t=t.bD
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bF
u.a.uniform1f(u.d,m)
break}if(w.z>0){p=this.dx.e.length
u=this.a.dW
u.a.uniform1i(u.d,p)
u=a.db
l=u.gU(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
q=this.a.cu
if(k>=q.length)return H.j(q,k)
h=q[k]
q=l.ak(i.a)
m=q.a
if(typeof m!=="number")return m.j()
g=q.b
if(typeof g!=="number")return g.j()
f=q.c
if(typeof f!=="number")return f.j()
f=q.w(0,Math.sqrt(m*m+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){p=this.dx.f.length
u=this.a.dX
u.a.uniform1i(u.d,p)
u=a.db
l=u.gU(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
q=this.a.cv
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbf(i)
m=h.b
g=q.gcP(q)
f=q.gcQ(q)
q=q.gcR(q)
m.a.uniform3f(m.d,g,f,q)
q=l.K(i.gbf(i))
f=h.c
f.a.uniform3f(f.d,q.a,q.b,q.c)
q=i.gaq(i)
f=h.d
g=q.gbQ()
m=q.gbk()
q=q.gby()
f.a.uniform3f(f.d,g,m,q)
q=i.gci()
m=h.e
m.a.uniform1f(m.d,q)
q=i.gcj()
m=h.f
m.a.uniform1f(m.d,q)
q=i.gck()
m=h.r
m.a.uniform1f(m.d,q);++k}}if(w.ch>0){p=this.dx.r.length
u=this.a.dY
u.a.uniform1i(u.d,p)
u=a.db
l=u.gU(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
q=this.a.cw
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbf(i)
m=h.b
g=q.gcP(q)
f=q.gcQ(q)
q=q.gcR(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gct(i).jE()
f=h.c
g=q.gaW(q)
m=q.gaX(q)
q=q.gaY()
f.a.uniform3f(f.d,g,m,q)
q=l.K(i.gbf(i))
m=h.d
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gaq(i)
m=h.e
g=q.gbQ()
f=q.gbk()
q=q.gby()
m.a.uniform3f(m.d,g,f,q)
q=i.gjC()
f=h.f
f.a.uniform1f(f.d,q)
q=i.gjB()
f=h.r
f.a.uniform1f(f.d,q)
q=i.gci()
f=h.x
f.a.uniform1f(f.d,q)
q=i.gcj()
f=h.y
f.a.uniform1f(f.d,q)
q=i.gck()
f=h.z
f.a.uniform1f(f.d,q);++k}}if(w.cx>0){p=this.dx.x.length
u=this.a.dZ
u.a.uniform1i(u.d,p)
u=a.db
l=u.gU(u)
for(u=this.dx.x,t=u.length,q=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
m=this.a.cz
if(k>=m.length)return H.j(m,k)
h=m[k]
m=i.gbg()
H.q(r,"$isc",q,"$asc")
if(!C.a.ar(r,m)){m.sbr(r.length)
C.a.h(r,m)}m=i.gct(i)
g=h.d
f=m.gaW(m)
e=m.gaX(m)
m=m.gaY()
g.a.uniform3f(g.d,f,e,m)
m=i.giL()
e=h.b
f=m.gaW(m)
g=m.gaX(m)
m=m.gaY()
e.a.uniform3f(e.d,f,g,m)
m=i.gai(i)
g=h.c
f=m.gaW(m)
e=m.gaX(m)
m=m.gaY()
g.a.uniform3f(g.d,f,e,m)
m=l.ak(i.gct(i))
e=m.a
if(typeof e!=="number")return e.j()
f=m.b
if(typeof f!=="number")return f.j()
g=m.c
if(typeof g!=="number")return g.j()
g=m.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaq(i)
f=h.f
e=g.gbQ()
m=g.gbk()
g=g.gby()
f.a.uniform3f(f.d,e,m,g)
g=i.gbg()
m=g.gcG(g)
if(!m){m=h.x
m.a.uniform1i(m.d,1)}else{m=h.r
f=g.gfe()
e=m.a
m=m.d
if(!f)e.uniform1i(m,0)
else e.uniform1i(m,g.gbr())
m=h.x
m.a.uniform1i(m.d,0)}++k}}if(w.cy>0){p=this.dx.y.length
u=this.a.e_
u.a.uniform1i(u.d,p)
u=a.db
l=u.gU(u)
for(u=this.dx.y,t=u.length,q=[P.y],m=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cA
if(k>=g.length)return H.j(g,k)
h=g[k]
g=i.gbg()
H.q(r,"$isc",m,"$asc")
if(!C.a.ar(r,g)){g.sbr(r.length)
C.a.h(r,g)}d=l.j(0,i.gU(i))
g=i.gU(i).K(new V.r(0,0,0))
f=h.b
e=g.gcP(g)
c=g.gcQ(g)
g=g.gcR(g)
f.a.uniform3f(f.d,e,c,g)
g=d.K(new V.r(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.bb(0)
c=h.d
n=new Float32Array(H.bY(H.q(new V.aN(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ag(0,!0),"$isc",q,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,n)
c=i.gaq(i)
g=h.e
e=c.gbQ()
f=c.gbk()
c=c.gby()
g.a.uniform3f(g.d,e,f,c)
c=i.gbg()
g=c.gcG(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcG(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjD(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gci()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcj()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gck()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){p=this.dx.z.length
u=this.a.e0
u.a.uniform1i(u.d,p)
u=a.db
l=u.gU(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
q=this.a.cB
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbg()
H.q(r,"$isc",z,"$asc")
if(!C.a.ar(r,q)){q.sbr(r.length)
C.a.h(r,q)}q=i.gbf(i)
m=h.b
g=q.gcP(q)
f=q.gcQ(q)
q=q.gcR(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gct(i)
f=h.c
g=q.gaW(q)
m=q.gaX(q)
q=q.gaY()
f.a.uniform3f(f.d,g,m,q)
q=i.giL()
m=h.d
g=q.gaW(q)
f=q.gaX(q)
q=q.gaY()
m.a.uniform3f(m.d,g,f,q)
q=i.gai(i)
f=h.e
g=q.gaW(q)
m=q.gaX(q)
q=q.gaY()
f.a.uniform3f(f.d,g,m,q)
q=l.K(i.gbf(i))
m=h.f
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gbg()
m=q.gcG(q)
if(!m){q=h.x
q.a.uniform1i(q.d,1)}else{m=h.r
g=q.gfe()
f=m.a
m=m.d
if(!g)f.uniform1i(m,0)
else f.uniform1i(m,q.gbr())
q=h.x
q.a.uniform1i(q.d,0)}q=i.gaq(i)
m=h.y
g=q.gbQ()
f=q.gbk()
q=q.gby()
m.a.uniform3f(m.d,g,f,q)
q=i.gjL()
f=h.z
f.a.uniform1f(f.d,q)
q=i.gjM()
f=h.Q
f.a.uniform1f(f.d,q)
q=i.gci()
f=h.ch
f.a.uniform1f(f.d,q)
q=i.gcj()
f=h.cx
f.a.uniform1f(f.d,q)
q=i.gck()
f=h.cy
f.a.uniform1f(f.d,q);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.c:this.P(r,this.Q.d)
z=this.a
u=this.Q.d
z.ah(z.dM,z.bG,u)
break
case C.d:this.P(r,this.Q.e)
z=this.a
u=this.Q.e
z.ac(z.dN,z.bG,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gU(u).bb(0)
a.Q=u}z=z.fy
z.toString
z.am(u.ag(0,!0))}if(w.dy){this.P(r,this.ch)
z=this.a
u=this.ch
z.ac(z.dO,z.dP,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.bH
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
break
case C.c:this.P(r,this.cx.d)
z=this.a
u=this.cx.d
z.ah(z.dQ,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break
case C.d:this.P(r,this.cx.e)
z=this.a
u=this.cx.e
z.ac(z.dR,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.bK
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
u=this.a
q=this.cy.ch
u=u.bJ
u.a.uniform1f(u.d,q)
break
case C.c:this.P(r,this.cy.d)
z=this.a
u=this.cy.d
z.ah(z.dS,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,q)
break
case C.d:this.P(r,this.cy.e)
z=this.a
u=this.cy.e
z.ac(z.dT,z.bL,u)
u=this.a
z=this.cy.f
u=u.bK
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,q)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.bM
z.a.uniform1f(z.d,t)
break
case C.c:this.P(r,this.db.d)
z=this.a
t=this.db.d
z.ah(z.dU,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break
case C.d:this.P(r,this.db.e)
z=this.a
t=this.db.e
z.ac(z.dV,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<r.length;++o){z=r[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.cm(a)
z.b2(a)
z.iK(a)
if(u)a.a.disable(3042)
for(o=0;o<r.length;++o){z=r[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hT()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.de().aE},
q:{
eF:function(){var z,y,x,w
z=new O.eE()
y=O.d7(V.aC)
z.e=y
y.bl(z.gfm(),z.gfn())
y=new O.bm(z,"emission")
y.c=C.b
y.f=new V.aa(0,0,0)
z.f=y
y=new O.bm(z,"ambient")
y.c=C.b
y.f=new V.aa(0,0,0)
z.r=y
y=new O.bm(z,"diffuse")
y.c=C.b
y.f=new V.aa(0,0,0)
z.x=y
y=new O.bm(z,"invDiffuse")
y.c=C.b
y.f=new V.aa(0,0,0)
z.y=y
y=new O.is(z,"specular")
y.c=C.b
y.f=new V.aa(0,0,0)
y.ch=100
z.z=y
y=new O.ip(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.bm(z,"reflect")
y.c=C.b
y.f=new V.aa(0,0,0)
z.cx=y
y=new O.ir(z,"refract")
y.c=C.b
y.f=new V.aa(0,0,0)
y.ch=1
z.cy=y
y=new O.io(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.i7()
y.bm(D.a1)
y.e=H.a([],[D.cB])
y.f=H.a([],[D.iM])
y.r=H.a([],[D.jn])
y.x=H.a([],[D.jy])
y.y=H.a([],[D.jz])
y.z=H.a([],[D.jA])
y.Q=null
y.ch=null
y.bS(y.gfl(),y.gfM(),y.gfO())
z.dx=y
x=y.Q
if(x==null){x=D.K()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.n]}
w=H.f(z.gfY(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.K()
w.ch=y}x=H.f(z.gbn(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},io:{"^":"dk;0f,a,b,0c,0d,0e",
h1:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.G(this.b,y,a,this,[P.y])
z.b=!0
this.a.Y(z)}},
aT:function(){this.cY()
this.h1(1)}},dk:{"^":"b;",
Y:[function(a){this.a.Y(H.i(a,"$isn"))},function(){return this.Y(null)},"eM","$1","$0","gbn",0,2,1],
aT:["cY",function(){}],
h3:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gbn(),{func:1,ret:-1,args:[D.n]})
C.a.X(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gbn(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G(this.b+".texture2D",x,this.d,this,[T.f4])
z.b=!0
this.a.Y(z)}},
h4:function(a){},
sbh:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aT()
this.c=C.c
this.h4(null)
z=this.a
z.a=null
z.Y(null)}this.h3(a)}},ip:{"^":"dk;a,b,0c,0d,0e"},bm:{"^":"dk;0f,a,b,0c,0d,0e",
ds:function(a){var z,y
if(!J.Y(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.aa])
y.b=!0
this.a.Y(y)}},
aT:["bV",function(){this.cY()
this.ds(new V.aa(1,1,1))}],
saq:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aT()
z=this.a
z.a=null
z.Y(null)}this.ds(b)}},ir:{"^":"bm;0ch,0f,a,b,0c,0d,0e",
h2:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.Y(z)}},
aT:function(){this.bV()
this.h2(1)}},is:{"^":"bm;0ch,0f,a,b,0c,0d,0e",
ca:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.Y(z)}},
aT:function(){this.bV()
this.ca(100)}},dB:{"^":"b;"}}],["","",,T,{"^":"",dC:{"^":"d_;"},f4:{"^":"dC;0b,0c,0d,0e,0f,0r,0x,0y,a"},jw:{"^":"b;a,0b,0c,0d,0e",
i6:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9987)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.f4(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.K()
z=W.ah
W.a3(x,"load",H.f(new T.jx(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
e5:function(a,b,c,d){return this.i6(a,!1,b,c,d)},
h_:function(a,b,c){var z,y,x,w
b=V.dY(b,2)
z=V.dY(a.width,2)
y=V.dY(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d4(null,null)
x.width=z
x.height=y
w=H.i(C.k.el(x,"2d"),"$ise5")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lL(w.getImageData(0,0,x.width,x.height))}}},jx:{"^":"v:23;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h_(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.K.iD(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hV()}++x.e}}}],["","",,V,{"^":"",hh:{"^":"b;",
bc:function(a,b){return!0},
i:function(a){return"all"},
$iscc:1},cc:{"^":"b;"},eD:{"^":"b;",
bc:["eu",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].bc(0,b))return!0
return!1}],
i:["cX",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$iscc:1},bO:{"^":"eD;0a",
bc:function(a,b){return!this.eu(0,b)},
i:function(a){return"!["+this.cX(0)+"]"}},j9:{"^":"b;0a",
eA:function(a){var z,y
if(a.a.length<=0)throw H.d(P.u("May not create a SetMatcher with zero characters."))
z=new H.aM(0,0,[P.x,P.a8])
for(y=new H.eA(a,a.gl(a),0,[H.az(a,"w",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
bc:function(a,b){return this.a.dF(0,b)},
i:function(a){var z=this.a
return P.dA(new H.ez(z,[H.A(z,0)]),0,null)},
$iscc:1,
q:{
ac:function(a){var z=new V.j9()
z.eA(a)
return z}}},f_:{"^":"b;a,b,0c,0d",
gi8:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fb(this.a.J(0,b))
w.a=H.a([],[V.cc])
w.c=!1
C.a.h(this.c,w)
return w},
hY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.bc(0,a))return w}return},
i:function(a){return this.b}},f8:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h9(this.b,"\n","\\n")
y=H.h9(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},f9:{"^":"b;a,b,0c",
i:function(a){return this.b}},jE:{"^":"b;0a,0b,0c",
J:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f_(this,b)
z.c=H.a([],[V.fb])
this.a.m(0,b,z)}return z},
bi:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.f9(this,a)
y=P.o
z.c=new H.aM(0,0,[y,y])
this.b.m(0,a,z)}return z},
iI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.a([],[V.f8])
y=this.c
x=[P.x]
w=H.a([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bp(a,t)
r=y.hY(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dA(w,0,null)
throw H.d(P.u("Untokenizable string [state: "+y.gi8(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.a([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dA(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.f8(o==null?p.b:o,q,t)}++t}}}},fb:{"^":"eD;b,0c,0a",
i:function(a){return this.b.b+": "+this.cX(0)}}}],["","",,X,{"^":"",e4:{"^":"b;",$isaO:1},hT:{"^":"f2;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z}},iH:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
b5:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.A(a)},function(){return this.b5(null)},"iV","$1","$0","gd0",0,2,1],
se6:function(a){var z,y,x
if(!J.Y(this.a,a)){z=this.a
if(z!=null){z=z.gv()
z.toString
y=H.f(this.gd0(),{func:1,ret:-1,args:[D.n]})
C.a.X(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gv()
z.toString
y=H.f(this.gd0(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("mover",x,this.a,this,[U.a6])
z.b=!0
this.b5(z)}},
$isaO:1,
$ise4:1},f2:{"^":"b;"}}],["","",,V,{"^":"",jj:{"^":"b;0a,0b",
eC:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.f(new V.jm(x),{func:1,ret:-1,args:[t]}),!1,t)},
hH:function(a,b,c){var z,y,x,w
a=H.z(C.e.hM(a,0,4))
if(c.length===0)c=P.fP(C.r,b,C.o,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.hi(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
cf:function(a,b){return this.hH(a,b,"")},
T:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.q(a,"$isc",[P.o],"$asc")
this.h6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iI(C.a.i3(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.h8(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fP(C.r,s,C.o,!1)
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
h6:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jE()
y=P.o
z.a=new H.aM(0,0,[y,V.f_])
z.b=new H.aM(0,0,[y,V.f9])
z.c=z.J(0,"Start")
y=z.J(0,"Start").B(0,"Bold")
x=V.ac(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").B(0,"Bold")
x=new V.bO()
w=[V.cc]
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").B(0,"BoldEnd")
x=V.ac(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").B(0,"Italic")
x=V.ac(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").B(0,"Italic")
x=new V.bO()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").B(0,"ItalicEnd")
x=V.ac(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").B(0,"Code")
x=V.ac(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").B(0,"Code")
x=new V.bO()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").B(0,"CodeEnd")
x=V.ac(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").B(0,"LinkHead")
x=V.ac(new H.a9("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").B(0,"LinkTail")
x=V.ac(new H.a9("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").B(0,"LinkEnd")
y=V.ac(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").B(0,"LinkHead")
y=new V.bO()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").B(0,"LinkEnd")
y=V.ac(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").B(0,"LinkTail")
y=new V.bO()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").B(0,"Other").a,new V.hh())
x=z.J(0,"Other").B(0,"Other")
y=new V.bO()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.bi("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.bi("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.bi("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.bi("Link")
x=z.J(0,"Other")
x.d=x.a.bi("Other")
this.b=z},
q:{
jk:function(a,b){var z=new V.jj()
z.eC(a,!0)
return z}}},jm:{"^":"v:23;a",
$1:function(a){P.dD(C.m,new V.jl(this.a))}},jl:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.h.aj(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
hq:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
hp:function(a,b){var z
if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(!(a>=200&&a<=205))if(b!==1)z=b>=200&&b<=205
else z=!0
else z=!1
return z},
h4:function(){var z,y,x
z=V.jk("3Dart Craft",!0)
y=[P.o]
z.T(H.a(["This example is in development and may still have a few issues and glitches."],y))
x=W.d4(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
z.a.appendChild(x)
z.cf(1,"About")
z.T(H.a(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],y))
z.T(H.a(["\xab[Back to Examples List|../../]"],y))
z.cf(1,"Controls")
z.T(H.a(["\u2022 _Currently there are no controls for mobile browsers_"],y))
z.T(H.a(["\u2022 *Esc* to release the mouse capture"],y))
z.T(H.a(["\u2022 *W* or *Up arrow* to move forward"],y))
z.T(H.a(["\u2022 *S* or *Down arrow* to move backward"],y))
z.T(H.a(["\u2022 *A* or *Left arrow* to strife left"],y))
z.T(H.a(["\u2022 *D* or *Right arror* to strife right"],y))
z.T(H.a(["\u2022 *Space bar* to jump"],y))
z.T(H.a(["\u2022 *Tab* cycles the block selected which can be placed"],y))
z.T(H.a(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],y))
z.T(H.a(["\u2022 *Left click* or *Q* removes the currently highlighted block"],y))
z.T(H.a(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],y))
z.T(H.a(["\u2022 *O* to return the starting location"],y))
z.cf(1,"Help wanted")
z.T(H.a(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],y))
z.T(H.a(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dD(C.m,B.m0())},
no:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
z=document.getElementById("targetCanvas")
if(z==null)H.t(P.u("Failed to find an element with the identifier, targetCanvas."))
y=E.jC(z,!0,!0,!0,!1)
x=new B.it(y)
w=P.x
x.b=new H.aM(0,0,[w,B.a4])
x.c=new H.aM(0,0,[w,[P.c,P.x]])
x.d=H.a([],[O.eE])
v=new V.aa(1,1,1)
u=new V.r(0,0,0)
t=new V.r(0.5,-1,0.2).u(0,u)
t=U.aX(V.eH(u,new V.H(0,0,1),new V.H(t.a,t.b,t.c)))
u=new D.cB()
u.c=new V.aa(1,1,1)
u.a=new V.H(0,0,1)
s=u.b
u.b=t
t=t.gv()
t.toString
r=H.f(u.gfs(),{func:1,ret:-1,args:[D.n]})
C.a.h(t.a,r)
t=new D.G("mover",s,u.b,u,[U.a6])
t.b=!0
u.aS(t)
if(!u.c.t(0,v)){s=u.c
u.c=v
t=new D.G("color",s,v,u,[V.aa])
t.b=!0
u.aS(t)}x.e=u
q=x.N("boundary")
p=x.N("brick")
o=x.N("dirt")
n=x.N("dryLeavesSide")
m=x.N("dryLeavesTop")
l=x.N("leaves")
k=x.N("rock")
j=x.N("sand")
i=x.N("trunkEnd")
h=x.N("trunkSide")
g=x.N("turfSide")
f=x.N("turfTop")
e=x.aN("blackShine",!0)
d=x.aN("redShine",!0)
c=x.aN("yellowShine",!0)
b=x.aN("whiteShine",!0)
a=x.N("mushroomBottom")
a0=x.N("mushroomSide")
a1=x.N("mushroomTop")
a2=x.N("grass")
a3=x.N("fern")
a4=x.N("blueFlowers")
a5=x.N("redFlowers")
a6=x.N("whiteFlowers")
a7=x.aN("water1",!0)
x.b.m(0,100,new B.a4(q,q,q,q,q,q))
x.b.m(0,101,new B.a4(o,o,o,o,o,o))
x.b.m(0,102,new B.a4(f,o,g,g,g,g))
x.b.m(0,103,new B.a4(k,k,k,k,k,k))
x.b.m(0,104,new B.a4(j,j,j,j,j,j))
x.b.m(0,105,new B.a4(m,o,n,n,n,n))
x.b.m(0,106,new B.a4(i,i,h,h,h,h))
x.b.m(0,107,new B.a4(h,h,h,h,i,i))
x.b.m(0,108,new B.a4(h,h,i,i,h,h))
x.b.m(0,109,new B.a4(p,p,p,p,p,p))
x.b.m(0,110,new B.a4(d,d,d,d,d,d))
x.b.m(0,111,new B.a4(b,b,b,b,b,b))
x.b.m(0,112,new B.a4(c,c,c,c,c,c))
x.b.m(0,113,new B.a4(e,e,e,e,e,e))
x.b.m(0,114,new B.a4(l,l,l,l,l,l))
x.b.m(0,1,new B.a4(a7,a7,a7,a7,a7,a7))
w=[w]
u=H.q(H.a([a2],w),"$isc",w,"$asc")
x.c.m(0,200,u)
u=H.q(H.a([a3],w),"$isc",w,"$asc")
x.c.m(0,201,u)
u=H.q(H.a([a6],w),"$isc",w,"$asc")
x.c.m(0,202,u)
u=H.q(H.a([a4],w),"$isc",w,"$asc")
x.c.m(0,203,u)
u=H.q(H.a([a5],w),"$isc",w,"$asc")
x.c.m(0,204,u)
w=H.q(H.a([a1,a,a0],w),"$isc",w,"$asc")
x.c.m(0,205,w)
x.f=x.d3("selection")
x.r=x.d3("crosshair")
a8=B.kc(x)
a9=B.iK(y,a8)
b0=new M.hL()
w=O.d7(E.ag)
b0.d=w
w.bl(b0.gft(),b0.gfu())
b0.e=null
b0.f=null
b0.r=null
b0.x=null
b1=new X.iH()
b1.b=1.0471975511965976
b1.c=0.1
b1.d=2000
b1.se6(null)
w=b1.b
if(!$.m.$2(w,1.0471975511965976)){s=b1.b
b1.b=1.0471975511965976
w=new D.G("fov",s,1.0471975511965976,b1,[P.y])
w.b=!0
b1.b5(w)}w=b1.c
if(!$.m.$2(w,0.1)){s=b1.c
b1.c=0.1
w=new D.G("near",s,0.1,b1,[P.y])
w.b=!0
b1.b5(w)}w=b1.d
if(!$.m.$2(w,2000)){s=b1.d
b1.d=2000
w=new D.G("far",s,2000,b1,[P.y])
w.b=!0
b1.b5(w)}w=b0.a
if(w!==b1){if(w!=null){w=w.gv()
w.toString
u=H.f(b0.gaL(),{func:1,ret:-1,args:[D.n]})
C.a.X(w.a,u)}s=b0.a
b0.a=b1
w=b1.gv()
w.toString
u=H.f(b0.gaL(),{func:1,ret:-1,args:[D.n]})
C.a.h(w.a,u)
w=new D.G("camera",s,b0.a,b0,[X.e4])
w.b=!0
b0.b4(w)}b2=new X.hT()
w=new V.aW(0,0,0,1)
b2.a=w
b2.b=!0
b2.c=2000
b2.d=!0
b2.e=0
b2.f=!1
w=V.dr(0,0,1,1)
b2.r=w
w=b0.b
if(w!==b2){if(w!=null){w=w.gv()
w.toString
u=H.f(b0.gaL(),{func:1,ret:-1,args:[D.n]})
C.a.X(w.a,u)}s=b0.b
b0.b=b2
w=b2.gv()
w.toString
u=H.f(b0.gaL(),{func:1,ret:-1,args:[D.n]})
C.a.h(w.a,u)
w=new D.G("target",s,b0.b,b0,[X.f2])
w.b=!0
b0.b4(w)}w=b0.e
if(w==null){w=D.K()
b0.e=w}u={func:1,ret:-1,args:[D.n]}
t=H.f(a8.giM(a8),u)
C.a.h(w.a,t)
b0.a.se6(a9.r)
for(w=a8.d,t=w.length,b3=0;b3<w.length;w.length===t||(0,H.D)(w),++b3){b4=w[b3]
r=b0.d
b5=H.A(r,0)
H.E(b4,b5)
b6=[b5]
if(r.b6(H.a([b4],b6))){b7=r.a
b8=b7.length
C.a.h(b7,b4)
b5=H.q(H.a([b4],b6),"$ish",[b5],"$ash")
r=r.c
if(r!=null)r.$2(b8,b5)}}b0.d.h(0,a9.cy)
a8.e=a9
w=y.d
if(w!==b0){if(w!=null){w=w.gv()
w.toString
t=H.f(y.gcZ(),u)
C.a.X(w.a,t)}y.d=b0
w=b0.gv()
w.toString
u=H.f(y.gcZ(),u)
C.a.h(w.a,u)
y.eF()}a9.cT()
w=b0.b
v=new V.aW(0.576,0.784,0.929,1)
if(!w.a.t(0,v)){s=w.a
w.a=v
u=new D.G("color",s,v,w,[V.aW])
u.b=!0
w=w.x
if(!(w==null))w.A(u)}P.f6(C.z,new B.m7(y))},"$0","m0",0,0,3],
ho:{"^":"b;a,b,c,d,e,f",
i:function(a){return H.l(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.hq(this.gaI(this))+")"},
gaI:function(a){var z=this.f
z=z==null?null:z.a0(this.a,this.b,this.c)
if(z==null)z=this.b<0?100:0
return z}},
iB:{"^":"b;a,b"},
e6:{"^":"b;a,b,c,0d,0e,0f,0r",
ew:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new Uint8Array(27648)
C.t.hX(z,0,27648,0)
this.d=z
this.e=H.a([],[E.ag])
for(z=this.c.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
v=E.bh(null,!0,null,"",null,null)
u=w.y
t=H.A(u,0)
H.E(v,t)
s=[t]
if(u.b6(H.a([v],s))){r=u.a
q=r.length
C.a.h(r,v)
t=H.q(H.a([v],s),"$ish",[t],"$ash")
u=u.c
if(u!=null)u.$2(q,t)}u=this.e;(u&&C.a).h(u,v)}this.f=!0
this.r=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
a0:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48||a<0||a>=24||c<0||c>=24)return 0
z=this.d
y=(a*48+b)*24+c
if(y<0||y>=27648)return H.j(z,y)
return z[y]},
aJ:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48)return 0
if(a<0){z=this.gae(this)
z=z==null?null:z.aJ(a+24,b,c)
return z==null?0:z}if(a>=24){z=this.gai(this)
z=z==null?null:z.aJ(a-24,b,c)
return z==null?0:z}if(c<0){z=this.gcl(this)
z=z==null?null:z.aJ(a,b,c+24)
return z==null?0:z}if(c>=24){z=this.gcD()
z=z==null?null:z.aJ(a,b,c-24)
return z==null?0:z}z=this.d
y=(a*48+b)*24+c
if(y<0||y>=27648)return H.j(z,y)
return z[y]},
a6:function(a,b,c,d){var z,y
H.z(a)
H.z(b)
if(b<0||b>=48||a<0||a>=24||c<0||c>=24)return!1
z=this.d
y=(a*48+b)*24+c
if(y<0||y>=27648)return H.j(z,y)
z[y]=d
return!0},
gae:function(a){return this.c.aF(this.a-24,this.b)},
gcD:function(){return this.c.aF(this.a,this.b+24)},
gai:function(a){return this.c.aF(this.a+24,this.b)},
gcl:function(a){return this.c.aF(this.a,this.b-24)},
cN:function(a,b,c){var z,y
for(z=47;z>=0;--z){y=this.a0(a,z,b)
if(y>=100&&y<=114)return z}return c},
iJ:function(a,b){return this.cN(a,b,48)},
iN:function(){if(!this.f)return
this.f=!1
var z=B.dv(this.c.a,null)
z.hL(this)
z.cC(0,this.e)},
sc_:function(a){var z,y,x
for(z=this.e,y=z.length,x=0;x<y;++x)z[x].b=a},
iO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=V.dr(this.a,this.b,24,24)
y=z.e7(a)
x=y.a
w=a.a
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.e(w)
v=x-w
x=y.b
u=a.b
if(typeof x!=="number")return x.u()
if(typeof u!=="number")return H.e(u)
t=x-u
if(v*v+t*t<100){this.sc_(!0)
return}s=z.e7(b)
x=b.a
if(typeof x!=="number")return x.u()
r=b.b
if(typeof r!=="number")return r.u()
r=new V.Z(x-w,r-u)
q=r.w(0,Math.sqrt(r.C(r)))
r=s.a
if(typeof r!=="number")return r.u()
x=s.b
if(typeof x!=="number")return x.u()
p=new V.Z(r-w,x-u)
o=p.C(p)
if(o>14400){this.sc_(!1)
return}this.sc_(q.C(p.w(0,o))>0)},
q:{
e7:function(a,b,c){var z=new B.e6(a,b,c)
z.ew(a,b,c)
return z}}},
hU:{"^":"b;0a,0b,0c",
e1:function(a){var z
this.c=a
this.fU()
this.eT()
this.hg()
this.eZ()
this.eX()
this.he()
this.fT()
this.eQ()
this.hd()
a.r=!1
a.f=!0
z=a.gae(a)
if(!(z==null))z.f=!0
z=a.gai(a)
if(!(z==null))z.f=!0
z=a.gcD()
if(!(z==null))z.f=!0
z=a.gcl(a)
if(!(z==null))z.f=!0},
ab:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=this.c
x=(a+y.a)*c
y=(b+y.b)*c
w=new B.b4(x,y)
v=w.n(0,$.$get$ek().j(0,x+y))
y=Math.floor(v.a)
x=Math.floor(v.b)
u=new B.b4(y,x)
t=u.n(0,$.$get$d9().j(0,y+x))
s=v.u(0,u)
w=new B.hN(z.a,u,w.u(0,t),s)
w.e=0
w.a9(1,0)
w.a9(0,1)
z=s.a
x=s.b
r=z+x
if(r<=1){q=1-r
if(q>z||q>x)if(z>x)w.a9(1,-1)
else w.a9(-1,1)
else w.a9(1,1)
w.a9(0,0)}else{q=2-r
if(q<z||q<x)if(z>x)w.a9(2,0)
else w.a9(0,2)
else w.a9(0,0)
w.a9(1,1)}return w.e/47*0.5+0.5},
cd:function(a,b){var z,y
z=this.b
y=(a+3)*30+(b+3)
if(y<0||y>=z.length)return H.j(z,y)
return z[y]},
fU:function(){var z,y,x,w,v
for(z=0,y=-3;y<27;++y)for(x=-3;x<27;++x){w=C.h.a7(Math.pow(0.6*this.ab(y,x,0.001)+0.3*this.ab(y,x,0.01)+0.1*this.ab(y,x,0.1),2)*48)
if(w>=48)w=47
v=this.b
if(z<0||z>=v.length)return H.j(v,z)
v[z]=w;++z}},
hg:function(){var z,y
for(z=0;z<24;++z)for(y=0;y<24;++y)this.hh(z,y)},
hh:function(a,b){var z,y,x,w
z=this.cd(a,b)
for(y=z-1,x=0;x<=z;++x)if(this.c.a0(a,x,b)===0){if(z===x)w=102
else w=y===x?101:103
this.c.a6(a,x,b,w)}},
eZ:function(){var z,y
for(z=0;z<24;++z)for(y=0;y<24;++y)this.f_(z,y)},
f_:function(a,b){var z,y
z=this.c.cN(a,b,0)
if(z<8)for(y=8;y>z;--y)this.c.a6(a,y,b,1)},
eX:function(){var z,y
for(z=-1;z<=24;++z)for(y=-1;y<=24;++y)this.eY(z,y)},
eY:function(a,b){var z,y,x,w,v,u
if(this.cd(a,b)<8)for(z=10;z>0;--z)for(y=-1;y<=1;++y)for(x=a+y,w=-1;w<=1;++w){v=b+w
u=this.c.a0(x,z,v)
if(u===102||u===105)this.c.a6(x,z,v,104)}},
he:function(){var z,y
for(z=-3;z<27;++z)for(y=-3;y<27;++y)if(this.ab(z,y,1.5)<0.1)this.eU(z,y)},
eU:function(a,b){var z,y,x,w
z=this.c
y=a+z.a
if(y>=-30)if(y<30){z=b+z.b
z=z>=-30&&z<30}else z=!1
else z=!1
if(z)return
x=this.cd(a,b)
if(x<10)return
for(w=1;w<8;++w)this.c.a6(a,x+w,b,106)
this.eV(a,b)
this.eW(a,x+8,b)},
eV:function(a,b){var z,y,x,w,v,u
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)if(y+w*w<=10)for(v=b+w,u=47;u>=0;--u)if(this.c.a0(x,u,v)===102){this.c.a6(x,u,v,105)
break}},
eW:function(a,b,c){var z,y,x,w,v,u,t,s
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)for(v=y+w*w,u=b+w,t=-3;t<=3;++t)if(v+t*t<=16){s=c+t
if(this.c.a0(x,u,s)===0)this.c.a6(x,u,s,114)}},
fT:function(){var z,y,x,w,v
for(z=0;z<24;++z)for(y=z-400,x=z+400,w=0;w<24;++w)if(this.ab(z,w,12.5)<0.1)this.aO(z,w,204)
else if(this.ab(x,w,12.5)<0.1)this.aO(z,w,203)
else{v=w+400
if(this.ab(z,v,12.5)<0.1)this.aO(z,w,202)
else if(this.ab(x,v,12.5)<0.15)this.aO(z,w,200)
else if(this.ab(y,w,12.5)<0.1)this.aO(z,w,201)
else if(this.ab(z,w-400,12.5)<0.08)this.aO(z,w,205)}},
aO:function(a,b,c){var z,y
z=this.c.cN(a,b,0)
y=this.c.a0(a,z,b)
if(y!==102&&y!==105)return
this.c.a6(a,z+1,b,c)},
eT:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.c
y=z.a
if(y+24>=-30)if(y<=30){z=z.b
z=z+24<-30||z>30}else z=!0
else z=!0
if(z)return
x=new B.hW(this)
for(w=30;w>=0;w-=2){v=30-w+3
for(u=-v,z=w-1,t=u;t<=v;++t)for(s=u;s<=v;++s){x.$4(t,w,s,111)
x.$4(t,z,s,111)}for(y=u-1,r=u-2,q=v+1,p=v+2,o=-2;o<=2;++o){x.$4(y,w,o,109)
x.$4(y,z,o,109)
x.$4(r,z,o,109)
x.$4(q,w,o,109)
x.$4(q,z,o,109)
x.$4(p,z,o,109)
x.$4(o,w,y,109)
x.$4(o,z,y,109)
x.$4(o,z,r,109)
x.$4(o,w,q,109)
x.$4(o,z,q,109)
x.$4(o,z,p,109)}z=w+1
x.$4(y,z,2,109)
x.$4(r,w,2,109)
x.$4(y,z,-2,109)
x.$4(r,w,-2,109)
x.$4(q,z,2,109)
x.$4(p,w,2,109)
x.$4(q,z,-2,109)
x.$4(p,w,-2,109)
x.$4(2,z,y,109)
x.$4(2,w,r,109)
x.$4(-2,z,y,109)
x.$4(-2,w,r,109)
x.$4(2,z,q,109)
x.$4(2,w,p,109)
x.$4(-2,z,q,109)
x.$4(-2,w,p,109)}},
eQ:function(){var z,y,x
z=this.c
y=z.a
if(y+24>=-36)if(y<=12){z=z.b
z=z+24<-28||z>-22}else z=!0
else z=!0
if(z)return
x=new B.hV(this,-12,40,-25)
z=[P.x]
x.$5(110,0,0,H.a([0,1,2,3,4,4,3,2,4,4,3,2,1,0],z),H.a([1,0,0,0,1,2,3,3,4,5,6,6,6,5],z))
x.$5(110,6,0,H.a([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],z),H.a([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],z))
x.$5(113,12,0,H.a([0,0,0,0,0,1,2,1,2,3,3,3,3,3],z),H.a([2,3,4,5,6,1,1,4,4,2,3,4,5,6],z))
x.$5(113,17,0,H.a([0,0,0,0,0,0,1,2,1,2,3,3,3,3],z),H.a([1,2,3,4,5,6,1,1,4,4,2,3,5,6],z))
x.$5(113,22,0,H.a([0,2,1,1,1,1,1,1],z),H.a([1,1,1,2,3,4,5,6],z))},
hd:function(){var z,y,x,w,v,u
z=this.c
y=z.a
if(y+24>=-3)if(y<=3){z=z.b
z=z+24<-3||z>3}else z=!0
else z=!0
if(z)return
x=new B.hX(this)
for(w=-3;w<=3;++w)for(v=0;v<=7;++v)for(z=2+v,u=-3;u<=3;++u)x.$4(w,z,u,0)
x.$4(0,2,0,113)
x.$4(0,3,0,112)
x.$4(0,4,0,112)
x.$4(0,5,0,112)
x.$4(0,6,0,112)}},
hW:{"^":"v;a",
$4:function(a,b,c,d){var z=this.a.c
z.a6(a-z.a,b,c-z.b,d)}},
hV:{"^":"v;a,b,c,d",
$5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
z=[P.x]
H.q(d,"$isc",z,"$asc")
H.q(e,"$isc",z,"$asc")
for(y=d.length-1,z=this.a,x=this.b+b,w=this.c+c,v=this.d;y>=0;--y){u=z.c
if(y>=d.length)return H.j(d,y)
t=d[y]
if(typeof t!=="number")return H.e(t)
s=u.a
if(y>=e.length)return H.j(e,y)
r=e[y]
if(typeof r!=="number")return H.e(r)
u.a6(x+t-s,w-r,v-u.b,a)}}},
hX:{"^":"v;a",
$4:function(a,b,c,d){var z=this.a.c
z.a6(a-z.a,b,c-z.b,d)}},
m7:{"^":"v:36;a",
$1:function(a){H.i(a,"$isaF")
P.dZ(C.h.ei(this.a.gi_(),2)+" fps")}},
a4:{"^":"b;a,b,c,d,e,f"},
it:{"^":"b;a,0b,0c,0d,0e,0f,0r",
aN:function(a,b){var z,y,x,w,v
z="./textures/"+a+".png"
y=this.a.f.e5(z,!0,!1,!1)
x=O.eF()
x.dx.h(0,this.e)
w=x.r
w.saq(0,new V.aa(0.8,0.8,0.8))
w=x.x
w.saq(0,new V.aa(0.4,0.4,0.4))
x.r.sbh(y)
x.x.sbh(y)
x.db.sbh(y)
if(b){w=x.z
w.saq(0,new V.aa(0.5,0.5,0.5))
if(w.c===C.b){w.c=C.f
w.bV()
w.ca(100)
v=w.a
v.a=null
v.Y(null)}w.ca(3)}C.a.h(this.d,x)
return this.d.length-1},
N:function(a){return this.aN(a,!1)},
d3:function(a){var z,y,x
z="./textures/"+a+".png"
y=this.a.f.e5(z,!0,!1,!1)
x=O.eF()
x.f.sbh(y)
x.db.sbh(y)
return x}},
iJ:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
ey:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.r
z.r=!0
y=z.d
y.Q=0.4
y.ch=0.4
y=new U.jX()
x=X.aB()
x.h(0,new X.Q(39,new X.V(!1,!1,!1)))
x.h(0,new X.Q(68,new X.V(!1,!1,!1)))
w=x.gad()
w.toString
v={func:1,ret:-1,args:[D.n]}
u=H.f(y.gfD(),v)
C.a.h(w.a,u)
y.a=x
x=X.aB()
x.h(0,new X.Q(37,new X.V(!1,!1,!1)))
x.h(0,new X.Q(65,new X.V(!1,!1,!1)))
C.a.h(x.gad().a,u)
y.b=x
x=X.aB()
x.h(0,new X.Q(81,new X.V(!1,!1,!1)))
C.a.h(x.gad().a,u)
y.c=x
x=X.aB()
x.h(0,new X.Q(69,new X.V(!1,!1,!1)))
C.a.h(x.gad().a,u)
y.d=x
x=X.aB()
x.h(0,new X.Q(40,new X.V(!1,!1,!1)))
x.h(0,new X.Q(83,new X.V(!1,!1,!1)))
C.a.h(x.gad().a,u)
y.e=x
x=X.aB()
x.h(0,new X.Q(38,new X.V(!1,!1,!1)))
x.h(0,new X.Q(87,new X.V(!1,!1,!1)))
C.a.h(x.gad().a,u)
y.f=x
x=U.c5()
x.sat(30)
x.saD(0)
u=x.gv()
u.toString
w=H.f(y.gan(),v)
C.a.h(u.a,w)
y.r=x
x=U.c5()
x.sat(30)
x.saD(0)
C.a.h(x.gv().a,w)
y.x=x
x=U.c5()
x.sat(30)
x.saD(0)
C.a.h(x.gv().a,w)
y.y=x
y.z=null
y.Q=null
y.ch=60
y.cx=15
y.cy=0
y.db=null
y.dx=null
y.dy=null
y.a.a4(z)
y.b.a4(z)
y.c.a4(z)
y.d.a4(z)
y.e.a4(z)
y.f.a4(z)
y.r.sat(6)
y.x.sat(60)
z=y.x
x=z.r
if(!$.m.$2(x,-100)){t=z.r
z.r=-100
x=new D.G("acceleration",t,-100,z,[P.y])
x.b=!0
z.D(x)}y.y.sat(6)
y.dy=H.f(this.gfd(),{func:1,ret:V.r,args:[V.r,V.r]})
this.a=y
z=a.r
y=new U.jW()
x=U.c5()
x.scO(0,!0)
x.scH(6.283185307179586)
x.scI(0)
x.sR(0,0)
x.sat(100)
x.sF(0)
x.saD(0.5)
y.b=x
x=x.gv()
x.toString
w=H.f(y.gan(),v)
C.a.h(x.a,w)
x=U.c5()
x.scO(0,!0)
x.scH(6.283185307179586)
x.scI(0)
x.sR(0,0)
x.sat(100)
x.sF(0)
x.saD(0.5)
y.c=x
C.a.h(x.gv().a,w)
y.d=null
y.e=!1
y.f=!1
y.r=!1
y.x=2.5
y.y=2.5
y.z=2
y.Q=4
y.cx=!1
y.ch=!1
y.cy=0
y.db=0
y.dx=null
y.dy=0
y.fr=null
y.fx=null
s=new X.V(!1,!1,!1)
t=y.d
y.d=s
x=new D.G("modifiers",t,s,y,[X.V])
x.b=!0
y.D(x)
x=y.f
if(x!==!1){y.f=!1
x=new D.G("invertX",x,!1,y,[P.a8])
x.b=!0
y.D(x)}x=y.r
if(x!==!1){y.r=!1
x=new D.G("invertY",x,!1,y,[P.a8])
x.b=!0
y.D(x)}y.a4(z)
y.b.scH(1.5707963267948966)
y.b.scI(-1.5707963267948966)
y.b.saD(1)
y.c.saD(1)
y.b.scO(0,!1)
this.b=y
z=y.gv()
z.toString
y=H.f(new B.iL(this),v)
C.a.h(z.a,y)
y=U.a6
z=[y]
x=U.cE(H.a([this.a,this.b],z))
w=x.gv()
w.toString
u=H.f(this.ghi(),v)
C.a.h(w.a,u)
this.r=x
x=this.b
u=new U.es()
u.c=V.bn()
u.d=0
if(null!=x){u.a=x
x=x.gv()
x.toString
w=H.f(u.gan(),v)
C.a.h(x.a,w)
y=new D.G("mover",null,u.a,u,[y])
y.b=!0
u.D(y)}this.x=U.cE(H.a([u,this.a,U.aX(V.dm(1,-1,1,1))],z))
y=U.aX(V.cd(-0.5,-0.5,-0.5))
x=new U.eW()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sej(-0.1)
x.seb(0,0)
x.sef(0)
w=x.d
if(!$.m.$2(w,0)){t=x.d
x.d=0
w=new D.G("deltaYaw",t,0,x,[P.y])
w.b=!0
x.D(w)}w=x.e
if(!$.m.$2(w,0.1)){t=x.e
x.e=0.1
w=new D.G("deltaPitch",t,0.1,x,[P.y])
w.b=!0
x.D(w)}w=x.f
if(!$.m.$2(w,0)){t=x.f
x.f=0
w=new D.G("deltaRoll",t,0,x,[P.y])
w.b=!0
x.D(w)}this.y=U.cE(H.a([y,x,U.aX(V.cd(0.5,0.5,0.5)),U.aX(V.dm(0.04,-0.04,0.04,1)),U.aX(V.cd(-0.15,0.06,-0.2)),this.x],z))
this.z=U.cE(H.a([U.aX(V.dm(0.005,-0.005,0.005,1)),U.aX(V.cd(0,0,-0.2)),this.x],z))
z=X.aB()
z.h(0,new X.Q(32,new X.V(!1,!1,!1)))
z.a4(a.r)
z=z.gad()
z.toString
y=H.f(this.gfC(),v)
C.a.h(z.a,y)
this.d=!0
y=X.aB()
y.h(0,new X.Q(9,new X.V(!1,!1,!1)))
y.h(0,new X.Q(9,new X.V(!1,!1,!0)))
y.a4(a.r)
y=y.gad()
y.toString
z=H.f(this.gfp(),v)
C.a.h(y.a,z)
z=X.aB()
z.h(0,new X.Q(69,new X.V(!1,!1,!1)))
z.h(0,new X.Q(81,new X.V(!1,!1,!1)))
z.a4(a.r)
z=z.gad()
z.toString
y=H.f(this.gfo(),v)
C.a.h(z.a,y)
y=a.r.d
z=y.b
if(z==null){z=D.K()
y.b=z}y=H.f(this.gfv(),v)
C.a.h(z.a,y)
y=X.aB()
y.h(0,new X.Q(79,new X.V(!1,!1,!1)))
y.a4(a.r)
y=y.gad()
y.toString
v=H.f(this.gfP(),v)
C.a.h(y.a,v)
v=this.z
y=$.$get$a_()
z=$.$get$a2()
z=new Z.ad(y.a|z.a)
r=new F.eY()
y=new F.k_(r)
y.b=!1
x=F.bT
y.c=H.a([],[x])
r.a=y
y=new F.jd(r)
y.b=H.a([],[F.eO])
r.b=y
y=new F.jc(r)
y.b=H.a([],[F.ex])
r.c=y
y=new F.jb(r)
y.b=H.a([],[F.au])
r.d=y
r.e=null
y=r.a
w=new V.H(-1,-1,1)
w=w.w(0,Math.sqrt(w.C(w)))
q=y.bx(new V.ce(1,2,4,6),new V.aW(1,0,0,1),new V.r(-1,-1,0),new V.M(0,1),w,z)
y=r.a
w=new V.H(1,-1,1)
w=w.w(0,Math.sqrt(w.C(w)))
p=y.bx(new V.ce(0,3,4,6),new V.aW(0,0,1,1),new V.r(1,-1,0),new V.M(1,1),w,z)
y=r.a
w=new V.H(1,1,1)
w=w.w(0,Math.sqrt(w.C(w)))
o=y.bx(new V.ce(0,2,5,6),new V.aW(0,1,0,1),new V.r(1,1,0),new V.M(1,0),w,z)
y=r.a
w=new V.H(-1,1,1)
w=w.w(0,Math.sqrt(w.C(w)))
n=y.bx(new V.ce(0,2,4,7),new V.aW(1,1,0,1),new V.r(-1,1,0),new V.M(0,0),w,z)
r.d.hG(H.a([q,p,o,n],[x]))
r.aC()
z=this.c
this.Q=E.bh(null,!0,v,"",r,z.a.r)
this.ch=E.bh(null,!0,this.y,"",null,null)
v=E.ag
this.db=H.a([],[v])
for(y=z.a.d,x=y.length,m=0;m<y.length;y.length===x||(0,H.D)(y),++m){l=E.bh(null,!0,null,"",null,y[m])
w=this.ch.y
u=H.A(w,0)
H.E(l,u)
k=[u]
if(w.b6(H.a([l],k))){j=w.a
i=j.length
C.a.h(j,l)
u=H.q(H.a([l],k),"$ish",[u],"$ash")
w=w.c
if(w!=null)w.$2(i,u)}w=this.db;(w&&C.a).h(w,l)}this.e=0
z=E.bh(null,!0,null,"",null,z.a.f)
this.cx=z
this.f=null
this.cy=E.bh(H.a([this.Q,this.ch,z],[v]),!0,null,"",null,null)
this.dw()},
cT:function(){var z,y
z=this.c.aF(C.l.a7(0.5),C.l.a7(0.5))
y=z==null?null:z.iJ(C.l.a7(0.5),C.l.a7(0.5))
if(y==null)y=0
this.a.sR(0,new V.r(0.5,y+60,0.5))
this.a.sF(new V.H(0,0,0))},
jr:[function(a){H.i(a,"$isn")
this.cT()},"$1","gfP",4,0,0],
aa:function(a,b,c){var z,y
z=this.c.a0(a,b,c)
y=z.gaI(z)
return y>=100&&y<=114},
jg:[function(a){H.i(a,"$isn")
if(this.d)this.a.x.sF(30)},"$1","gfC",4,0,0],
j6:[function(a){var z,y
a=H.k(H.i(a,"$isn"),"$isbK")
$.$get$cx()
z=a.c
y=this.e
if(z.b.c){if(typeof y!=="number")return y.u()
z=y-1
this.e=z
if(z<0)this.e=18}else{if(typeof y!=="number")return y.n()
z=y+1
this.e=z
if(z>=19)this.e=0}this.dw()},"$1","gfp",4,0,0],
j5:[function(a){this.d8(H.k(H.i(a,"$isn"),"$isbK").c.a===69)},"$1","gfo",4,0,0],
jb:[function(a){this.d8(H.k(H.i(a,"$isn"),"$isbN").x.a===2)},"$1","gfv",4,0,0],
d8:function(a){var z,y,x,w,v,u,t
z=this.f
if(z==null)return
if(a){y=this.dj(z,this.dm())
z=y.a
this.f=z
x=$.$get$cx()
w=this.e
if(w>>>0!==w||w>=19)return H.j(x,w)
v=x[w]
if(v===106){x=y.b
w=$.$get$bk()
u=$.$get$bj()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=108
else{w=$.$get$c8()
u=$.$get$c7()
if((x&(w.a|u.a))!==0)v=107}}}else v=0
t=z.f
if(t!=null){t.a6(z.a,z.b,z.c,v)
t.f=!0
if(this.f.a<=0){z=t.gae(t)
if(!(z==null))z.f=!0}if(this.f.c<=0){z=t.gcl(t)
if(!(z==null))z.f=!0}if(this.f.a>=23){z=t.gai(t)
if(!(z==null))z.f=!0}if(this.f.c>=23){z=t.gcD()
if(!(z==null))z.f=!0}}},
iX:[function(a,b){var z,y,x,w,v,u,t,s,r,q
z=b.a
y=b.b
x=b.c
w=J.cv(a.a)+0.5
v=J.cv(a.b)+0.5
u=J.cv(a.c)+0.5
this.d=!1
if(typeof y!=="number")return y.u()
if(this.aa(z,y-0.25,x)){y=v-0.25
this.a.x.sF(0)}if(this.aa(z,y-2+0.25,x)){y=v+0.25
this.a.x.sF(0)
this.d=!0}if(typeof z!=="number")return z.u()
t=z-0.25
s=y-0.5
if(this.aa(t,s,x)||this.aa(t,y-1.5,x)){z=w-0.25
this.a.r.sF(0)}else{t=z+0.25
if(this.aa(t,s,x)||this.aa(t,y-1.5,x)){z=w+0.25
this.a.r.sF(0)}}if(typeof x!=="number")return x.u()
t=x-0.25
if(this.aa(z,s,t)||this.aa(z,y-1.5,t)){x=u-0.25
this.a.y.sF(0)}else{t=x+0.25
if(this.aa(z,s,t)||this.aa(z,y-1.5,t)){x=u+0.25
this.a.y.sF(0)}}t=this.c
while(!0){r=t.a0(z,y-2+0.25,x)
s=r.gaI(r)
if(!(s>=100&&s<=114)){r=t.a0(z,y,x)
s=r.gaI(r)
q=s>=100&&s<=114
s=q}else s=!0
if(!s)break
y=v+0.25;++v
this.a.x.sF(0)
this.d=!0}return new V.r(z,y,x)},"$2","gfd",8,0,37],
dm:function(){var z=this.x.f
return V.eS(z.K(new V.r(0,0,0)),z.ak(new V.H(0,0,-6)))},
dj:function(a,b){var z,y,x,w,v,u
z=a.a+a.d
y=a.b
x=a.c+a.e
w=V.eV(z,y,x,1,1,1).ir(b)
if(w==null)return
else{v=w.d
u=J.P(v)
if(u.t(v,$.$get$bj()))z-=0.9
else if(u.t(v,$.$get$bk()))z+=1.1
else if(u.t(v,$.$get$bF()))y-=0.9
else if(u.t(v,$.$get$bG()))y+=1.1
else if(u.t(v,$.$get$c7()))x-=0.9
else if(u.t(v,$.$get$c8()))x+=1.1
else return}return new B.iB(this.c.a0(z,y,x),v)},
jz:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.i(a,"$isn")
z=this.dm()
y=z.a
x=z.d
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.e(x)
w=z.b
v=z.e
if(typeof w!=="number")return w.n()
if(typeof v!=="number")return H.e(v)
u=z.c
t=z.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=V.eS(new V.r(y+x,w+v,u+t),new V.H(x,v,t).I(0))
r=this.c.a0(y,w,u)
q=0
while(!0){y=r!=null
if(!(y&&r.gaI(r)===0))break
y=this.dj(r,s)
r=y==null?null:y.a;++q}if(y)y=q<1||r.gaI(r)===0||r.gaI(r)===100
else y=!1
if(y)r=null
this.f=r
if(r==null)this.cx.b=!1
else{y=$.$get$a_()
x=$.$get$a2()
p=B.dv(null,new Z.ad(y.a|x.a))
x=this.f
o=new V.r(x.d+x.a+0.5,x.b+0.5,x.e+x.c+0.5)
n=p.V(0)
x=$.$get$ci()
y=$.$get$cn()
w=$.$get$co()
v=$.$get$cj()
p.a1(n,o,x,y,w,v,$.$get$cp(),!0,1.1)
u=$.$get$cl()
t=$.$get$cg()
m=$.$get$ch()
l=$.$get$cm()
p.a1(n,o,u,t,m,l,$.$get$ck(),!0,1.1)
p.a1(n,o,x,t,u,y,$.$get$dx(),!0,1.1)
p.a1(n,o,w,l,m,v,$.$get$dy(),!0,1.1)
p.a1(n,o,y,u,l,w,$.$get$cL(),!0,1.1)
p.a1(n,o,v,m,t,x,$.$get$dw(),!0,1.1)
p.cC(0,H.a([this.cx],[E.ag]))
this.cx.b=!0}},"$1","ghi",4,0,0],
dw:function(){var z,y,x
z=B.dv(this.c.a,null)
y=$.$get$cx()
x=this.e
if(x>>>0!==x||x>=19)return H.j(y,x)
z.d1(null,0,0,0,y[x],!1,1)
z.cC(0,this.db)},
q:{
iK:function(a,b){var z=new B.iJ(b)
z.ey(a,b)
return z}}},
iL:{"^":"v:8;a",
$1:function(a){var z,y,x
H.i(a,"$isn")
z=this.a
y=z.a
z=V.eG(-z.b.c.d)
if(!J.Y(y.z,z)){x=y.z
y.z=z
y.Q=z.bb(0)
z=new D.G("velocityRotation",x,y.z,y,[V.aN])
z.b=!0
y.D(z)}}},
je:{"^":"b;a,b,0c",
hL:function(a){var z,y,x
for(z=23;z>=0;--z)for(y=47;y>=-1;--y)for(x=23;x>=0;--x)this.d1(a,z,y,x,a.aJ(z,y,x),!1,1)},
cC:function(a,b){var z,y,x,w
H.q(b,"$isc",[E.ag],"$asc")
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.j(b,z)
y=b[z]
x=this.c
if(z>=x.length)return H.j(x,z)
w=x[z]
if(w!=null){y.scV(w)
y.b=w.f.length!==0}else{y.scV(null)
y.b=!1}}this.c=null},
V:function(a){var z,y
H.z(a)
z=this.c
if(a>>>0!==a||a>=z.length)return H.j(z,a)
y=z[a]
if(y==null){z=this.b
y=new F.eT(z)
y.b=z.gdG(z)
y.c=z.gb3(z)
y.d=0
y.f=H.a([],[P.y])
z=[P.x]
y.r=H.a([],z)
y.x=H.a([],z)
y.y=H.a([],z)
z=this.c;(z&&C.a).m(z,a,y)}return y},
d1:function(a,b,c,d,e,f,g){var z,y,x,w
z=new V.r(b,c,d)
if(a!=null){b+=a.a
d+=a.b}y=new V.r(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.d2(a,y,z,e,!1,g)
else if(e>=200&&e<=205)if(e===201){x=this.a.c.k(0,201)
w=J.bd(x)
this.bo(this.V(w.k(x,0)),y,0.3141592653589793)
this.bo(this.V(w.k(x,0)),y,1.7278759594743864)
this.bo(this.V(w.k(x,0)),y,3.6128315516282616)
this.bo(this.V(w.k(x,0)),y,5.026548245743669)}else if(e===205)this.eS(y)
else{x=this.a.c.k(0,e)
w=J.bd(x)
this.d6(this.V(w.k(x,0)),y,0.39269908169872414,!0)
this.d6(this.V(w.k(x,0)),y,1.9634954084936207,!0)}else if(e>=100&&e<=114)this.d2(a,y,z,e,!1,g)},
aR:function(a,b,c,d){var z,y
z=$.$get$a_()
y=$.$get$a2()
return F.bq(null,null,null,a,b,new V.M(c,d),null,new Z.ad(z.a|y.a|$.$get$ae().a),0)},
a1:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=a.b9(H.a([this.aR(b.n(0,c.j(0,i)),g,0,0),this.aR(b.n(0,d.j(0,i)),g,0,1),this.aR(b.n(0,e.j(0,i)),g,1,1),this.aR(b.n(0,f.j(0,i)),g,1,0)],[F.bT]))
y=z+1
x=z+2
w=z+3
v=[P.x]
a.b8(H.a([z,y,x,w],v))
if(h)a.b8(H.a([x,y,z,w],v))},
d2:function(a,b,c,d,e,f){var z=this.a.b.k(0,d)
if(this.aM(a,d,c,0,1,0))this.a1(this.V(z.a),b,$.$get$ci(),$.$get$cn(),$.$get$co(),$.$get$cj(),$.$get$cp(),!1,f)
if(this.aM(a,d,c,0,-1,0))this.a1(this.V(z.b),b,$.$get$cl(),$.$get$cg(),$.$get$ch(),$.$get$cm(),$.$get$ck(),!1,f)
if(this.aM(a,d,c,-1,0,0))this.a1(this.V(z.c),b,$.$get$ci(),$.$get$cg(),$.$get$cl(),$.$get$cn(),$.$get$dx(),!1,f)
if(this.aM(a,d,c,1,0,0))this.a1(this.V(z.d),b,$.$get$co(),$.$get$cm(),$.$get$ch(),$.$get$cj(),$.$get$dy(),!1,f)
if(this.aM(a,d,c,0,0,1))this.a1(this.V(z.e),b,$.$get$cn(),$.$get$cl(),$.$get$cm(),$.$get$co(),$.$get$cL(),!1,f)
if(this.aM(a,d,c,0,0,-1))this.a1(this.V(z.f),b,$.$get$cj(),$.$get$ch(),$.$get$cg(),$.$get$ci(),$.$get$dw(),!1,f)},
aM:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.cZ(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.hp(b,a.aJ(d+J.cZ(c.a),e,f+J.cZ(c.c)))},
d6:function(a,b,c,d){var z,y,x,w
z=Math.cos(c)*0.5
y=Math.sin(c)*0.5
x=-y
w=-z
this.a1(a,b,new V.r(z,0,x),new V.r(z,-0.5,x),new V.r(w,-0.5,y),new V.r(w,0,y),new V.H(y,0,z),!0,1)},
bo:function(a,b,c){var z=V.eG(c)
this.a1(a,b,z.K(new V.r(0.4,-0.1,-0.4)),z.K(new V.r(0,-0.5,0)),z.K(new V.r(0.4,-0.1,0.4)),z.K(new V.r(0.8,0,0)),$.$get$cp(),!0,1)},
eS:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a.c.k(0,205)
y=J.bd(z)
x=this.V(y.k(z,0))
w=this.V(y.k(z,1))
v=this.V(y.k(z,2))
z=[F.bT]
u=H.a([],z)
t=H.a([],z)
for(y=a7.a,s=a7.b,r=a7.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aN(o,0,-n,0,1,0,n,0,o)
p=m.K(new V.r(0.07,-0.1,0))
l=p.a
if(typeof y!=="number")return y.n()
if(typeof l!=="number")return H.e(l)
k=p.b
if(typeof s!=="number")return s.n()
if(typeof k!=="number")return H.e(k)
p=p.c
if(typeof r!=="number")return r.n()
if(typeof p!=="number")return H.e(p)
j=$.$get$cL()
i=m.ak(j)
h=Math.abs(q-1)
g=$.$get$a_()
f=$.$get$a2()
C.a.h(u,F.bq(null,null,null,new V.r(y+l,s+k,r+p),i,new V.M(h,0),null,new Z.ad(g.a|f.a|$.$get$ae().a),0))
f=m.K(new V.r(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.e(g)
i=f.b
if(typeof i!=="number")return H.e(i)
f=f.c
if(typeof f!=="number")return H.e(f)
j=m.ak(j)
p=$.$get$a_()
k=$.$get$a2()
C.a.h(u,F.bq(null,null,null,new V.r(y+g,s+i,r+f),j,new V.M(h,1),null,new Z.ad(p.a|k.a|$.$get$ae().a),0))
e=m.K(new V.r(0.1,-0.5,0))
d=m.K(new V.r(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.e(k)
p=e.b
if(typeof p!=="number")return H.e(p)
h=e.c
if(typeof h!=="number")return H.e(h)
j=$.$get$ck()
f=d.a
if(typeof f!=="number")return f.n()
i=d.c
if(typeof i!=="number")return i.n()
g=$.$get$a_()
l=$.$get$a2()
C.a.h(t,F.bq(null,null,null,new V.r(y+k,s+p,r+h),j,new V.M(f+0.5,i+0.5),null,new Z.ad(g.a|l.a|$.$get$ae().a),0))}c=v.b9(u)
b=w.b9(t)
p=P.x
v.hJ(P.cJ(u.length,new B.jf(c),!0,p))
w.b8(P.cJ(t.length,new B.jg(b),!0,p))
a=H.a([],z)
a0=H.a([],z)
C.a.h(a,this.aR(a7.n(0,new V.r(0,0.05,0)),$.$get$cp(),0.5,0.5))
C.a.h(a0,this.aR(a7.n(0,new V.r(0,-0.1,0)),$.$get$ck(),0.5,0.5))
for(q=0;q<=1;q+=0.1){z=-6.283185307179586*q
o=Math.cos(z)
n=Math.sin(z)
a1=new V.aN(o,0,-n,0,1,0,n,0,o)
e=a1.K(new V.r(0.4,-0.15,0))
d=a1.K(new V.r(0.5,0,0))
z=e.a
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.e(z)
l=e.b
if(typeof s!=="number")return s.n()
if(typeof l!=="number")return H.e(l)
k=e.c
if(typeof r!=="number")return r.n()
if(typeof k!=="number")return H.e(k)
j=d.a
if(typeof j!=="number")return j.n()
i=d.c
if(typeof i!=="number")return i.n()
h=$.$get$a_()
g=$.$get$a2()
C.a.h(a,F.bq(null,null,null,new V.r(y+z,s+l,r+k),null,new V.M(j+0.5,i+0.5),null,new Z.ad(h.a|g.a|$.$get$ae().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aN(o,0,-n,0,1,0,n,0,o)
a3=a2.K(new V.r(0.4,-0.15,0))
a4=a2.K(new V.r(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.e(g)
h=a3.b
if(typeof h!=="number")return H.e(h)
i=a3.c
if(typeof i!=="number")return H.e(i)
j=a4.a
if(typeof j!=="number")return j.n()
k=a4.c
if(typeof k!=="number")return k.n()
l=$.$get$a_()
z=$.$get$a2()
C.a.h(a0,F.bq(null,null,null,new V.r(y+g,s+h,r+i),null,new V.M(j+0.5,k+0.5),null,new Z.ad(l.a|z.a|$.$get$ae().a),0))}a5=x.b9(a)
a6=w.b9(a0)
x.b8(P.cJ(a.length,new B.jh(a5),!0,p))
w.b8(P.cJ(a0.length,new B.ji(a6),!0,p))},
q:{
dv:function(a,b){var z,y,x
z=new B.je(a,b)
if(b==null){y=$.$get$a_()
x=$.$get$a2()
z.b=new Z.ad(y.a|x.a|$.$get$ae().a)}y=a==null?null:a.d
y=y==null?null:y.length
if(y==null)y=1
y=new Array(y)
y.fixed$length=Array
z.c=H.a(y,[F.eT])
return z}}},
jf:{"^":"v:10;a",
$1:function(a){return this.a+a}},
jg:{"^":"v:10;a",
$1:function(a){return this.a+a}},
jh:{"^":"v:10;a",
$1:function(a){return this.a+a}},
ji:{"^":"v:10;a",
$1:function(a){return this.a+a}},
kb:{"^":"b;a,0b,0c,0d,0e,0f",
eD:function(a){var z,y,x,w,v,u,t
z=new B.hU()
z.a=L.iF(0)
z.b=new Uint8Array(900)
this.b=z
this.c=H.a([],[B.e6])
this.d=H.a([],[E.ag])
this.f=null
for(z=this.a.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
C.a.h(this.d,E.bh(null,!0,null,"",null,w))}for(v=-48;v<48;v+=24)for(u=-48;u<48;u+=24){t=B.e7(v,u,this)
C.a.h(this.c,t)
this.b.e1(t)}P.f6(P.d8(0,0,0,50,0,0),this.ghj())},
aF:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.a===a&&w.b===b)return w}return},
a0:function(a,b,c){var z,y,x,w,v,u
z=C.e.Z(J.cs(a).a7(a),24)*24
y=C.e.Z(J.cs(c).a7(c),24)*24
if(a<0)z-=24
if(c<0)y-=24
x=this.aF(z,y)
w=C.h.b1(a)-z
v=J.cv(b)
u=C.h.b1(c)-y
if(w<0)w+=24
return new B.ho(w,v,u<0?u+24:u,z,y,x)},
jA:[function(a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.i(a2,"$isaF")
z=this.e.x.f.K(new V.r(0,0,0))
y=z.a
x=z.c
w=this.a0(y,z.b,x)
v=this.f
u=w.f
if(v==null?u!=null:v!==u){this.f=u
v=w.d
t=v-192
s=v+192
u=w.e
r=u-192
q=u+192
for(p=this.c.length-1;p>=0;--p){o=this.c
if(p>=o.length)return H.j(o,p)
n=o[p]
m=n.a
if(t<=m)if(s>m){m=n.b
m=r>m||q<=m}else m=!0
else m=!0
if(m)C.a.it(o,p)}l=v-96
k=v+96
j=u-96
i=u+96
for(h=l;h<k;h+=24)for(g=j;g<i;g+=24)if(this.aF(h,g)==null)C.a.h(this.c,B.e7(h,g,this))}if(typeof y!=="number")return y.u()
f=y-12
if(typeof x!=="number")return x.u()
e=x-12
for(y=this.c,x=y.length,d=null,c=1e6,b=0;b<x;++b){n=y[b]
if(n.r){a=n.a-f
a0=n.b-e
a1=a*a+a0*a0
if(d==null||c>a1){c=a1
d=n}}}if(d!=null)this.b.e1(d)},"$1","ghj",4,0,39],
a8:[function(a,b){var z,y,x,w,v,u,t,s,r
H.i(b,"$isn")
z=this.e.x.f
y=z.K(new V.r(0,0,0))
x=z.K(new V.r(0,0,-24))
w=new V.M(y.a,y.c)
v=new V.M(x.a,x.c)
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.iN()
r.iO(w,v)}},"$1","giM",5,0,0],
q:{
kc:function(a){var z=new B.kb(a)
z.eD(a)
return z}}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ev.prototype
return J.eu.prototype}if(typeof a=="string")return J.dg.prototype
if(a==null)return J.ew.prototype
if(typeof a=="boolean")return J.i1.prototype
if(a.constructor==Array)return J.bl.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.bd=function(a){if(typeof a=="string")return J.dg.prototype
if(a==null)return a
if(a.constructor==Array)return J.bl.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.dT=function(a){if(a==null)return a
if(a.constructor==Array)return J.bl.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.cs=function(a){if(typeof a=="number")return J.cH.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.dI.prototype
return a}
J.c3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.Y=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).t(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cs(a).S(a,b)}
J.hc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lY(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).k(a,b)}
J.hd=function(a,b,c){return J.c3(a).fW(a,b,c)}
J.he=function(a,b,c,d){return J.c3(a).dA(a,b,c,d)}
J.cX=function(a,b,c){return J.bd(a).hN(a,b,c)}
J.cY=function(a,b){return J.dT(a).H(a,b)}
J.cv=function(a){return J.cs(a).b1(a)}
J.hf=function(a,b){return J.dT(a).L(a,b)}
J.bg=function(a){return J.P(a).gW(a)}
J.c4=function(a){return J.dT(a).ga_(a)}
J.bA=function(a){return J.bd(a).gl(a)}
J.hg=function(a,b){return J.c3(a).iw(a,b)}
J.cZ=function(a){return J.cs(a).a7(a)}
J.as=function(a){return J.P(a).i(a)}
I.dW=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.d3.prototype
C.A=J.p.prototype
C.a=J.bl.prototype
C.l=J.eu.prototype
C.e=J.ev.prototype
C.B=J.ew.prototype
C.h=J.cH.prototype
C.i=J.dg.prototype
C.I=J.cb.prototype
C.t=H.iA.prototype
C.J=W.iC.prototype
C.u=J.iI.prototype
C.K=P.dt.prototype
C.n=J.dI.prototype
C.v=W.bW.prototype
C.w=W.ka.prototype
C.x=new P.iG()
C.y=new P.jZ()
C.j=new P.kZ()
C.b=new A.cA(0,"ColorSourceType.None")
C.f=new A.cA(1,"ColorSourceType.Solid")
C.c=new A.cA(2,"ColorSourceType.Texture2D")
C.d=new A.cA(3,"ColorSourceType.TextureCube")
C.m=new P.bD(0)
C.z=new P.bD(5e6)
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
C.r=H.a(I.dW([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.o=new P.jY(!1)
$.aA=0
$.bB=null
$.e1=null
$.dN=!1
$.h0=null
$.fV=null
$.h7=null
$.cS=null
$.cU=null
$.dU=null
$.bt=null
$.bZ=null
$.c_=null
$.dO=!1
$.T=C.j
$.eh=null
$.eg=null
$.ef=null
$.ee=null
$.m=V.iu()
$.eN=null
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
I.$lazy(y,x,w)}})(["ed","$get$ed",function(){return H.h_("_$dart_dartClosure")},"dh","$get$dh",function(){return H.h_("_$dart_js")},"fc","$get$fc",function(){return H.aG(H.cM({
toString:function(){return"$receiver$"}}))},"fd","$get$fd",function(){return H.aG(H.cM({$method$:null,
toString:function(){return"$receiver$"}}))},"fe","$get$fe",function(){return H.aG(H.cM(null))},"ff","$get$ff",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fj","$get$fj",function(){return H.aG(H.cM(void 0))},"fk","$get$fk",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fh","$get$fh",function(){return H.aG(H.fi(null))},"fg","$get$fg",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aG(H.fi(void 0))},"fl","$get$fl",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dK","$get$dK",function(){return P.kd()},"c0","$get$c0",function(){return[]},"fO","$get$fO",function(){return P.j_("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"eb","$get$eb",function(){return{}},"ej","$get$ej",function(){return H.a([B.aE(5,2),B.aE(2,5),B.aE(-5,2),B.aE(-2,5),B.aE(5,-2),B.aE(2,-5),B.aE(-5,-2),B.aE(-2,-5)],[B.b4])},"ek","$get$ek",function(){return B.aE(-0.211324865405187,-0.211324865405187)},"d9","$get$d9",function(){return B.aE(0.366025403784439,0.366025403784439)},"fv","$get$fv",function(){return Z.ay(0)},"a_","$get$a_",function(){return Z.ay(1)},"ae","$get$ae",function(){return Z.ay(2)},"aR","$get$aR",function(){return Z.ay(4)},"a2","$get$a2",function(){return Z.ay(8)},"aS","$get$aS",function(){return Z.ay(16)},"bU","$get$bU",function(){return Z.ay(32)},"bV","$get$bV",function(){return Z.ay(64)},"fu","$get$fu",function(){return Z.ay(96)},"br","$get$br",function(){return Z.ay(128)},"aQ","$get$aQ",function(){return Z.ay(256)},"ep","$get$ep",function(){return V.an(0)},"eo","$get$eo",function(){return V.an(511)},"bk","$get$bk",function(){return V.an(1)},"dc","$get$dc",function(){return V.an(2)},"bj","$get$bj",function(){return V.an(4)},"bG","$get$bG",function(){return V.an(8)},"dd","$get$dd",function(){return V.an(16)},"bF","$get$bF",function(){return V.an(32)},"c8","$get$c8",function(){return V.an(64)},"eq","$get$eq",function(){return V.an(128)},"c7","$get$c7",function(){return V.an(256)},"db","$get$db",function(){return V.an(146)},"cx","$get$cx",function(){return H.a([101,102,103,104,105,106,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.x])},"cp","$get$cp",function(){return V.bS(0,1,0)},"ck","$get$ck",function(){return V.bS(0,-1,0)},"dx","$get$dx",function(){return V.bS(1,0,0)},"dy","$get$dy",function(){return V.bS(-1,0,0)},"cL","$get$cL",function(){return V.bS(0,0,1)},"dw","$get$dw",function(){return V.bS(0,0,-1)},"cn","$get$cn",function(){return V.b5(-0.5,0.5,0.5)},"co","$get$co",function(){return V.b5(0.5,0.5,0.5)},"cl","$get$cl",function(){return V.b5(-0.5,-0.5,0.5)},"cm","$get$cm",function(){return V.b5(0.5,-0.5,0.5)},"ci","$get$ci",function(){return V.b5(-0.5,0.5,-0.5)},"cj","$get$cj",function(){return V.b5(0.5,0.5,-0.5)},"cg","$get$cg",function(){return V.b5(-0.5,-0.5,-0.5)},"ch","$get$ch",function(){return V.b5(0.5,-0.5,-0.5)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.n]},{func:1,ret:-1,opt:[D.n]},{func:1,ret:P.R},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.x,[P.h,E.ag]]},{func:1,ret:P.R,args:[D.n]},{func:1,ret:P.R,args:[F.au]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.R,args:[,]},{func:1,ret:-1,args:[P.x,[P.h,V.aC]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.o,args:[P.x]},{func:1,args:[,]},{func:1,ret:-1,args:[P.x,[P.h,X.Q]]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:-1,args:[P.x,[P.h,D.a1]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.x,[P.h,U.a6]]},{func:1,ret:P.R,args:[W.ah]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a8,args:[W.L]},{func:1,ret:W.a0,args:[W.L]},{func:1,ret:P.a8,args:[P.y,P.y]},{func:1,args:[P.o]},{func:1,ret:P.a8,args:[[P.h,D.a1]]},{func:1,args:[,P.o]},{func:1,ret:P.R,args:[{func:1,ret:-1}]},{func:1,ret:P.R,args:[P.X]},{func:1,ret:P.R,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,ret:-1,args:[W.bW]},{func:1,ret:P.a8,args:[[P.h,X.Q]]},{func:1,ret:P.R,args:[P.aF]},{func:1,ret:V.r,args:[V.r,V.r]},{func:1,ret:P.R,args:[,],opt:[,]},{func:1,ret:-1,args:[P.aF]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aw]}]
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
if(x==y)H.m8(d||a)
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
Isolate.dW=a.dW
Isolate.c2=a.c2
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
if(typeof dartMainRunner==="function")dartMainRunner(B.h4,[])
else B.h4([])})})()
//# sourceMappingURL=main.dart.js.map
