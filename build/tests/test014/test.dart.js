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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isu)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dy(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dA=function(){}
var dart=[["","",,H,{"^":"",nY:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dD==null){H.mT()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c9("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cZ()]
if(v!=null)return v
v=H.mY(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cZ(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
w:function(a,b){return a===b},
gU:function(a){return H.bJ(a)},
i:["eI",function(a){return"Instance of '"+H.be(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i3:{"^":"u;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isaf:1},
eh:{"^":"u;",
w:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isI:1},
d_:{"^":"u;",
gU:function(a){return 0},
i:["eJ",function(a){return String(a)}]},
iM:{"^":"d_;"},
ca:{"^":"d_;"},
c5:{"^":"d_;",
i:function(a){var z=a[$.$get$e1()]
if(z==null)return this.eJ(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscW:1},
b9:{"^":"u;$ti",
h:function(a,b){H.A(b,H.z(a,0))
if(!!a.fixed$length)H.t(P.C("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.t(P.C("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
cj:function(a,b){var z,y
H.w(b,"$isi",[H.z(a,0)],"$asi")
if(!!a.fixed$length)H.t(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b4(a))}},
F:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
i_:function(a){return this.F(a,"")},
hR:function(a,b,c,d){var z,y,x
H.A(b,d)
H.h(c,{func:1,ret:d,args:[d,H.z(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b4(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bT:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a_(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.z(a,0)])
return H.d(a.slice(b,c),[H.z(a,0)])},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i1())},
aB:function(a,b,c,d){var z
H.A(d,H.z(a,0))
if(!!a.immutable$list)H.t(P.C("fill range"))
P.aQ(b,c,a.length,null,null,null)
for(z=b;z.N(0,c);z=z.D(0,1))a[z]=d},
b3:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
i:function(a){return P.cX(a,"[","]")},
ga4:function(a){return new J.aw(a,a.length,0,[H.z(a,0)])},
gU:function(a){return H.bJ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cg(b,"newLength",null))
if(b<0)throw H.a(P.a_(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
return a[b]},
m:function(a,b,c){H.E(b)
H.A(c,H.z(a,0))
if(!!a.immutable$list)H.t(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
a[b]=c},
$isi:1,
$isc:1,
p:{
i2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a_(a,0,4294967295,"length",null))
return J.ee(new Array(a),b)},
ee:function(a,b){return J.bD(H.d(a,[b]))},
bD:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
nX:{"^":"b9;$ti"},
aw:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c3:{"^":"u;",
ghZ:function(a){return a===0?1/a<0:a<0},
iA:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.C(""+a+".toInt()"))},
cG:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
ez:function(a,b){var z
if(b>20)throw H.a(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghZ(a))return"-"+z
return z},
bg:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.C("Unexpected toString result: "+z))
x=J.aN(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a*b},
bl:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dE(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dE(a,b)},
dE:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aO:function(a,b){var z
if(a>0)z=this.dC(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h5:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.dC(a,b)},
dC:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$isq:1,
$isa1:1},
eg:{"^":"c3;",$isn:1},
ef:{"^":"c3;"},
c4:{"^":"u;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b<0)throw H.a(H.aM(a,b))
if(b>=a.length)H.t(H.aM(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aM(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cg(b,null,null))
return a+b},
aX:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
c=P.aQ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ad:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
if(typeof c!=="number")return c.N()
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ac:function(a,b){return this.ad(a,b,0)},
v:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.a(P.ct(b,null,null))
if(b>c)throw H.a(P.ct(b,null,null))
if(c>a.length)throw H.a(P.ct(c,null,null))
return a.substring(b,c)},
aG:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ib:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ag:function(a,b){return this.ib(a,b," ")},
em:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
el:function(a,b){return this.em(a,b,0)},
hG:function(a,b,c){if(c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
return H.h7(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseu:1,
$isj:1}}],["","",,H,{"^":"",
cG:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i1:function(){return new P.js("No element")},
a4:{"^":"k_;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ascw:function(){return[P.n]},
$asy:function(){return[P.n]},
$asi:function(){return[P.n]},
$asc:function(){return[P.n]}},
hM:{"^":"i;"},
em:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aN(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b4(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
is:{"^":"i;a,b,$ti",
ga4:function(a){return new H.it(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.av(this.a)},
I:function(a,b){return this.b.$1(J.cL(this.a,b))},
$asi:function(a,b){return[b]}},
it:{"^":"cY;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascY:function(a,b){return[b]}},
kv:{"^":"i;a,b,$ti",
ga4:function(a){return new H.kw(J.by(this.a),this.b,this.$ti)}},
kw:{"^":"cY;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cm:{"^":"b;$ti"},
cw:{"^":"b;$ti",
m:function(a,b,c){H.E(b)
H.A(c,H.as(this,"cw",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
aB:function(a,b,c,d){H.A(d,H.as(this,"cw",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
k_:{"^":"co+cw;"}}],["","",,H,{"^":"",
hA:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
mO:function(a){return init.types[H.E(a)]},
h_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iW:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
be:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.M(a).$isca){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aG(w,1)
r=H.dE(H.bW(H.b2(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iO:function(){if(!!self.location)return self.location.href
return},
ex:function(a){var z,y,x,w,v
H.bW(a)
z=J.av(a)
if(typeof z!=="number")return z.eF()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iX:function(a){var z,y,x,w
z=H.d([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aO(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.ex(z)},
ey:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iX(a)}return H.ex(a)},
iY:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eF()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cr:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aO(z,10))>>>0,56320|z&1023)}}throw H.a(P.a_(a,0,1114111,null,null))},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iV:function(a){return a.b?H.ah(a).getUTCFullYear()+0:H.ah(a).getFullYear()+0},
iT:function(a){return a.b?H.ah(a).getUTCMonth()+1:H.ah(a).getMonth()+1},
iP:function(a){return a.b?H.ah(a).getUTCDate()+0:H.ah(a).getDate()+0},
iQ:function(a){return a.b?H.ah(a).getUTCHours()+0:H.ah(a).getHours()+0},
iS:function(a){return a.b?H.ah(a).getUTCMinutes()+0:H.ah(a).getMinutes()+0},
iU:function(a){return a.b?H.ah(a).getUTCSeconds()+0:H.ah(a).getSeconds()+0},
iR:function(a){return a.b?H.ah(a).getUTCMilliseconds()+0:H.ah(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ae(a))},
e:function(a,b){if(a==null)J.av(a)
throw H.a(H.aM(a,b))},
aM:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,"index",null)
z=H.E(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.ct(b,"index",null)},
mI:function(a,b,c){if(a>c)return new P.cs(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cs(a,c,!0,b,"end","Invalid value")
return new P.aO(!0,b,"end",null)},
ae:function(a){return new P.aO(!0,a,null,null)},
my:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.et()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h9})
z.name=""}else z.toString=H.h9
return z},
h9:function(){return J.a9(this.dartException)},
t:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b4(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aO(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d0(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.es(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eR()
u=$.$get$eS()
t=$.$get$eT()
s=$.$get$eU()
r=$.$get$eY()
q=$.$get$eZ()
p=$.$get$eW()
$.$get$eV()
o=$.$get$f0()
n=$.$get$f_()
m=v.af(y)
if(m!=null)return z.$1(H.d0(H.O(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.d0(H.O(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.es(H.O(y),m))}}return z.$1(new H.jZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aO(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eE()
return a},
bw:function(a){var z
if(a==null)return new H.fu(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fu(a)},
mL:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mV:function(a,b,c,d,e,f){H.f(a,"$iscW")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.x("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mV)
a.$identity=z
return z},
hv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isc){z.$reflectionInfo=d
x=H.j2(z).r}else x=d
w=e?Object.create(new H.jt().constructor.prototype):Object.create(new H.cO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.D()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dX(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mO,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dS:H.cP
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dX(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hs:function(a,b,c,d){var z=H.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hs(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.D()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.D()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ht:function(a,b,c,d){var z,y
z=H.cP
y=H.dS
switch(b?-1:a){case 0:throw H.a(H.jc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hu:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ch("self")
$.bz=z}y=$.dR
if(y==null){y=H.ch("receiver")
$.dR=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ht(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aC
if(typeof y!=="number")return y.D()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.D()
$.aC=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){var z,y
z=J.bD(H.bW(b))
H.E(c)
y=!!J.M(d).$isc?J.bD(d):d
return H.hv(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aA(a,"String"))},
mJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"double"))},
nl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"num"))},
fR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aA(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aA(a,"int"))},
h4:function(a,b){throw H.a(H.aA(a,H.O(b).substring(3)))},
nn:function(a,b){var z=J.aN(b)
throw H.a(H.hr(a,z.v(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.h4(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.nn(a,b)},
bW:function(a){if(a==null)return a
if(!!J.M(a).$isc)return a
throw H.a(H.aA(a,"List"))},
h1:function(a,b){if(a==null)return a
if(!!J.M(a).$isc)return a
if(J.M(a)[b])return a
H.h4(a,b)},
fW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
cc:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fW(J.M(a))
if(z==null)return!1
y=H.fZ(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.cc(a,b))return a
z=H.cf(b)
y=H.aA(a,z)
throw H.a(y)}finally{$.du=!1}},
dB:function(a,b){if(a!=null&&!H.dx(a,b))H.t(H.aA(a,H.cf(b)))
return a},
fM:function(a){var z
if(a instanceof H.m){z=H.fW(J.M(a))
if(z!=null)return H.cf(z)
return"Closure"}return H.be(a)},
nt:function(a){throw H.a(new P.hF(H.O(a)))},
fX:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
oU:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b2(b))},
b1:function(a,b,c,d){var z
H.O(c)
H.E(d)
z=H.bx(a["$as"+H.l(c)],H.b2(b))
return z==null?null:z[d]},
as:function(a,b,c){var z
H.O(b)
H.E(c)
z=H.bx(a["$as"+H.l(b)],H.b2(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.E(b)
z=H.b2(a)
return z==null?null:z[b]},
cf:function(a){var z=H.b3(a,null)
return z},
b3:function(a,b){var z,y
H.w(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dE(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.mo(a,b)
if('futureOr' in a)return"FutureOr<"+H.b3("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mo:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b3(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b3(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b3(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b3(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mK(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b3(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dE:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.ap("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b3(u,c)}v="<"+z.i(0)+">"
return v},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bV:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b2(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fP(H.bx(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.O(b)
H.bW(c)
H.O(d)
if(a==null)return a
z=H.bV(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dE(c,0,null)
throw H.a(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fP:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
oS:function(a,b,c){return a.apply(b,H.bx(J.M(b)["$as"+H.l(c)],H.b2(b)))},
h0:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="I"||a===-1||a===-2||H.h0(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="I"||b===-1||b===-2||H.h0(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cc(a,b)}y=J.M(a).constructor
x=H.b2(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.at(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.aA(a,H.cf(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bx(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cf(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fP(H.bx(r,z),b,u,d)},
fZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.at(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.at(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.at(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nk(m,b,l,d)},
nk:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
oT:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mY:function(a){var z,y,x,w,v,u
z=H.O($.fY.$1(a))
y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fO.$2(a,z))
if(z!=null){y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cI(x)
$.cE[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cH[z]=x
return x}if(v==="-"){u=H.cI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h3(a,x)
if(v==="*")throw H.a(P.c9(z))
if(init.leafTags[z]===true){u=H.cI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h3(a,x)},
h3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dF(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cI:function(a){return J.dF(a,!1,null,!!a.$isG)},
nj:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cI(z)
else return J.dF(z,c,null,null)},
mT:function(){if(!0===$.dD)return
$.dD=!0
H.mU()},
mU:function(){var z,y,x,w,v,u,t,s
$.cE=Object.create(null)
$.cH=Object.create(null)
H.mP()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h5.$1(v)
if(u!=null){t=H.nj(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mP:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bt(C.J,H.bt(C.O,H.bt(C.u,H.bt(C.u,H.bt(C.N,H.bt(C.K,H.bt(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fY=new H.mQ(v)
$.fO=new H.mR(u)
$.h5=new H.mS(t)},
bt:function(a,b){return a(b)||b},
h7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hz:{"^":"b;$ti",
i:function(a){return P.d2(this)},
m:function(a,b,c){H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
return H.hA()},
$isK:1},
hB:{"^":"hz;a,b,c,$ti",
gl:function(a){return this.a},
bx:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bx(0,b))return
return this.dr(b)},
dr:function(a){return this.b[H.O(a)]},
K:function(a,b){var z,y,x,w,v
z=H.z(this,1)
H.h(b,{func:1,ret:-1,args:[H.z(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dr(v),z))}}},
j1:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j2:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bD(z)
y=z[0]
x=z[1]
return new H.j1(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jL:{"^":"b;a,b,c,d,e,f",
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
p:{
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iJ:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
es:function(a,b){return new H.iJ(a,b==null?null:b.method)}}},
i6:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d0:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i6(a,y,z?null:b.receiver)}}},
jZ:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nv:{"^":"m:18;a",
$1:function(a){if(!!J.M(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fu:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaz:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.be(this).trim()+"'"},
geC:function(){return this},
$iscW:1,
geC:function(){return this}},
eJ:{"^":"m;"},
jt:{"^":"eJ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cO:{"^":"eJ;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bJ(this.a)
else y=typeof z!=="object"?J.bX(z):H.bJ(z)
return(y^H.bJ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.be(z)+"'")},
p:{
cP:function(a){return a.a},
dS:function(a){return a.c},
ch:function(a){var z,y,x,w,v
z=new H.cO("self","target","receiver","name")
y=J.bD(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jM:{"^":"a5;a",
i:function(a){return this.a},
p:{
aA:function(a,b){return new H.jM("TypeError: "+H.l(P.cl(a))+": type '"+H.fM(a)+"' is not a subtype of type '"+b+"'")}}},
hq:{"^":"a5;a",
i:function(a){return this.a},
p:{
hr:function(a,b){return new H.hq("CastError: "+H.l(P.cl(a))+": type '"+H.fM(a)+"' is not a subtype of type '"+b+"'")}}},
jb:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
jc:function(a){return new H.jb(a)}}},
aZ:{"^":"ip;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gap:function(a){return new H.ic(this,[H.z(this,0)])},
bx:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dm(y,b)}else return this.hW(b)},
hW:function(a){var z=this.d
if(z==null)return!1
return this.cJ(this.c_(z,this.cI(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bo(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bo(w,b)
x=y==null?null:y.b
return x}else return this.hX(b)},
hX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c_(z,this.cI(a))
x=this.cJ(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c5()
this.b=z}this.df(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c5()
this.c=y}this.df(y,b,c)}else this.hY(b,c)},
hY:function(a,b){var z,y,x,w
H.A(a,H.z(this,0))
H.A(b,H.z(this,1))
z=this.d
if(z==null){z=this.c5()
this.d=z}y=this.cI(a)
x=this.c_(z,y)
if(x==null)this.cd(z,y,[this.c6(a,b)])
else{w=this.cJ(x,a)
if(w>=0)x[w].b=b
else x.push(this.c6(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b4(this))
z=z.c}},
df:function(a,b,c){var z
H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
z=this.bo(a,b)
if(z==null)this.cd(a,b,this.c6(b,c))
else z.b=c},
ff:function(){this.r=this.r+1&67108863},
c6:function(a,b){var z,y
z=new H.ib(H.A(a,H.z(this,0)),H.A(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ff()
return z},
cI:function(a){return J.bX(a)&0x3ffffff},
cJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.d2(this)},
bo:function(a,b){return a[b]},
c_:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
f8:function(a,b){delete a[b]},
dm:function(a,b){return this.bo(a,b)!=null},
c5:function(){var z=Object.create(null)
this.cd(z,"<non-identifier-key>",z)
this.f8(z,"<non-identifier-key>")
return z},
$isek:1},
ib:{"^":"b;a,b,0c,0d"},
ic:{"^":"hM;a,$ti",
gl:function(a){return this.a.a},
ga4:function(a){var z,y
z=this.a
y=new H.id(z,z.r,this.$ti)
y.c=z.e
return y}},
id:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mQ:{"^":"m:18;a",
$1:function(a){return this.a(a)}},
mR:{"^":"m:42;a",
$2:function(a,b){return this.a(a,b)}},
mS:{"^":"m:40;a",
$1:function(a){return this.a(H.O(a))}},
i4:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseu:1,
$isj3:1,
p:{
i5:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Z("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mK:function(a){return J.ee(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
br:function(a){return a},
iF:function(a){return new Int8Array(a)},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aM(b,a))},
mi:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mI(a,b,c))
return b},
er:{"^":"u;",$iser:1,"%":"ArrayBuffer"},
d7:{"^":"u;",$isd7:1,$isjN:1,"%":"DataView;ArrayBufferView;d6|fo|fp|iG|fq|fr|b_"},
d6:{"^":"d7;",
gl:function(a){return a.length},
$isG:1,
$asG:I.dA},
iG:{"^":"fp;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
m:function(a,b,c){H.E(b)
H.mJ(c)
H.aL(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.q]},
$asy:function(){return[P.q]},
$isi:1,
$asi:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
b_:{"^":"fr;",
m:function(a,b,c){H.E(b)
H.E(c)
H.aL(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.n]},
$asy:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]}},
o6:{"^":"b_;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o7:{"^":"b_;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o8:{"^":"b_;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o9:{"^":"b_;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oa:{"^":"b_;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ob:{"^":"b_;",
gl:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"b_;",
gl:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
bT:function(a,b,c){return new Uint8Array(a.subarray(b,H.mi(b,c,a.length)))},
$isd8:1,
$isQ:1,
"%":";Uint8Array"},
fo:{"^":"d6+y;"},
fp:{"^":"fo+cm;"},
fq:{"^":"d6+y;"},
fr:{"^":"fq+cm;"}}],["","",,P,{"^":"",
ky:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.kA(z),1)).observe(y,{childList:true})
return new P.kz(z,y,x)}else if(self.setImmediate!=null)return P.mw()
return P.mx()},
oH:[function(a){self.scheduleImmediate(H.bu(new P.kB(H.h(a,{func:1,ret:-1})),0))},"$1","mv",4,0,12],
oI:[function(a){self.setImmediate(H.bu(new P.kC(H.h(a,{func:1,ret:-1})),0))},"$1","mw",4,0,12],
oJ:[function(a){P.dh(C.q,H.h(a,{func:1,ret:-1}))},"$1","mx",4,0,12],
dh:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.a7(a.a,1000)
return P.lC(z<0?0:z,b)},
eM:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bl]})
z=C.e.a7(a.a,1000)
return P.lD(z<0?0:z,b)},
mr:function(a,b){if(H.cc(a,{func:1,args:[P.b,P.az]}))return b.im(a,null,P.b,P.az)
if(H.cc(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mq:function(){var z,y
for(;z=$.bs,z!=null;){$.bT=null
y=z.b
$.bs=y
if(y==null)$.bS=null
z.a.$0()}},
oR:[function(){$.dv=!0
try{P.mq()}finally{$.bT=null
$.dv=!1
if($.bs!=null)$.$get$dp().$1(P.fQ())}},"$0","fQ",0,0,3],
fL:function(a){var z=new P.fi(H.h(a,{func:1,ret:-1}))
if($.bs==null){$.bS=z
$.bs=z
if(!$.dv)$.$get$dp().$1(P.fQ())}else{$.bS.b=z
$.bS=z}},
mu:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bs
if(z==null){P.fL(a)
$.bT=$.bS
return}y=new P.fi(a)
x=$.bT
if(x==null){y.b=z
$.bT=y
$.bs=y}else{y.b=x.b
x.b=y
$.bT=y
if(y.b==null)$.bS=y}},
no:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.W
if(C.j===y){P.cD(null,null,C.j,a)
return}y.toString
P.cD(null,null,y,H.h(y.co(a),z))},
eL:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.W
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.h(y.co(b),z))},
jI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bl]}
H.h(b,z)
y=$.W
if(y===C.j){y.toString
return P.eM(a,b)}x=y.dO(b,P.bl)
$.W.toString
return P.eM(a,H.h(x,z))},
cC:function(a,b,c,d,e){var z={}
z.a=d
P.mu(new P.ms(z,e))},
fH:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.W
if(y===c)return d.$0()
$.W=c
z=y
try{y=d.$0()
return y}finally{$.W=z}},
fI:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.W
if(y===c)return d.$1(e)
$.W=c
z=y
try{y=d.$1(e)
return y}finally{$.W=z}},
mt:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.W
if(y===c)return d.$2(e,f)
$.W=c
z=y
try{y=d.$2(e,f)
return y}finally{$.W=z}},
cD:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.hC(d,-1)
P.fL(d)},
kA:{"^":"m:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kz:{"^":"m:33;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kB:{"^":"m:0;a",
$0:function(){this.a.$0()}},
kC:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fx:{"^":"b;a,0b,c",
eV:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.lF(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
eW:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lE(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbl:1,
p:{
lC:function(a,b){var z=new P.fx(!0,0)
z.eV(a,b)
return z},
lD:function(a,b){var z=new P.fx(!1,0)
z.eW(a,b)
return z}}},
lF:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lE:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eM(w,x)}z.c=y
this.d.$1(z)}},
bq:{"^":"b;0a,b,c,d,e,$ti",
i3:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.h(this.d,{func:1,ret:P.af,args:[P.b]}),a.a,P.af,P.b)},
hU:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.cc(z,{func:1,args:[P.b,P.az]}))return H.dB(w.iu(z,a.a,a.b,null,y,P.az),x)
else return H.dB(w.cX(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aW:{"^":"b;dD:a<,b,0fY:c<,$ti",
ey:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.W
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mr(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aW(0,$.W,[c])
w=b==null?1:3
this.dg(new P.bq(x,w,a,b,[z,c]))
return x},
iz:function(a,b){return this.ey(a,null,b)},
dg:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbq")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaW")
z=y.a
if(z<4){y.dg(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cD(null,null,z,H.h(new P.kR(this,a),{func:1,ret:-1}))}},
dz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbq")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaW")
y=u.a
if(y<4){u.dz(a)
return}this.a=y
this.c=u.c}z.a=this.br(a)
y=this.b
y.toString
P.cD(null,null,y,H.h(new P.kW(z,this),{func:1,ret:-1}))}},
c9:function(){var z=H.f(this.c,"$isbq")
this.c=null
return this.br(z)},
br:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dj:function(a){var z,y,x,w
z=H.z(this,0)
H.dB(a,{futureOr:1,type:z})
y=this.$ti
x=H.bV(a,"$isbC",y,"$asbC")
if(x){z=H.bV(a,"$isaW",y,null)
if(z)P.fl(a,this)
else P.kS(a,this)}else{w=this.c9()
H.A(a,z)
this.a=4
this.c=a
P.bO(this,w)}},
bW:[function(a,b){var z
H.f(b,"$isaz")
z=this.c9()
this.a=8
this.c=new P.al(a,b)
P.bO(this,z)},function(a){return this.bW(a,null)},"iH","$2","$1","gf4",4,2,28],
$isbC:1,
p:{
kS:function(a,b){var z,y,x
b.a=1
try{a.ey(new P.kT(b),new P.kU(b),null)}catch(x){z=H.au(x)
y=H.bw(x)
P.no(new P.kV(b,z,y))}},
fl:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaW")
if(z>=4){y=b.c9()
b.a=a.a
b.c=a.c
P.bO(b,y)}else{y=H.f(b.c,"$isbq")
b.a=2
b.c=a
a.dz(y)}},
bO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cC(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cC(null,null,y,u,t)
return}o=$.W
if(o==null?q!=null:o!==q)$.W=q
else o=null
y=b.c
if(y===8)new P.kZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kY(x,b,r).$0()}else if((y&2)!==0)new P.kX(z,x,b).$0()
if(o!=null)$.W=o
y=x.b
if(!!J.M(y).$isbC){if(y.a>=4){n=H.f(t.c,"$isbq")
t.c=null
b=t.br(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fl(y,t)
return}}m=b.b
n=H.f(m.c,"$isbq")
m.c=null
b=m.br(n)
y=x.a
u=x.b
if(!y){H.A(u,H.z(m,0))
m.a=4
m.c=u}else{H.f(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kR:{"^":"m:0;a,b",
$0:function(){P.bO(this.a,this.b)}},
kW:{"^":"m:0;a,b",
$0:function(){P.bO(this.b,this.a.a)}},
kT:{"^":"m:20;a",
$1:function(a){var z=this.a
z.a=0
z.dj(a)}},
kU:{"^":"m:52;a",
$2:function(a,b){this.a.bW(a,H.f(b,"$isaz"))},
$1:function(a){return this.$2(a,null)}},
kV:{"^":"m:0;a,b,c",
$0:function(){this.a.bW(this.b,this.c)}},
kZ:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ew(H.h(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bw(v)
if(this.d){w=H.f(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.M(z).$isbC){if(z instanceof P.aW&&z.gdD()>=4){if(z.gdD()===8){w=this.b
w.b=H.f(z.gfY(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iz(new P.l_(t),null)
w.a=!1}}},
l_:{"^":"m:30;a",
$1:function(a){return this.a}},
kY:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.A(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cX(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bw(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kX:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isal")
w=this.c
if(w.i3(z)&&w.e!=null){v=this.b
v.b=w.hU(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bw(u)
w=H.f(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fi:{"^":"b;a,0b"},
dc:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aW(0,$.W,[P.n])
z.a=0
this.i2(new P.jw(z,this),!0,new P.jx(z,y),y.gf4())
return y}},
jw:{"^":"m;a,b",
$1:function(a){H.A(a,H.as(this.b,"dc",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.as(this.b,"dc",0)]}}},
jx:{"^":"m:0;a,b",
$0:function(){this.b.dj(this.a.a)}},
eG:{"^":"b;$ti"},
jv:{"^":"b;"},
bl:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
m6:{"^":"b;",$isoG:1},
ms:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.et()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lk:{"^":"m6;",
iv:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.W){a.$0()
return}P.fH(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bw(x)
P.cC(null,null,this,z,H.f(y,"$isaz"))}},
iw:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.W){a.$1(b)
return}P.fI(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bw(x)
P.cC(null,null,this,z,H.f(y,"$isaz"))}},
hC:function(a,b){return new P.lm(this,H.h(a,{func:1,ret:b}),b)},
co:function(a){return new P.ll(this,H.h(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.ln(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
ew:function(a,b){H.h(a,{func:1,ret:b})
if($.W===C.j)return a.$0()
return P.fH(null,null,this,a,b)},
cX:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.W===C.j)return a.$1(b)
return P.fI(null,null,this,a,b,c,d)},
iu:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.W===C.j)return a.$2(b,c)
return P.mt(null,null,this,a,b,c,d,e,f)},
im:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lm:{"^":"m;a,b,c",
$0:function(){return this.a.ew(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ll:{"^":"m:3;a,b",
$0:function(){return this.a.iv(this.b)}},
ln:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iw(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ie:function(a,b,c,d,e){return new H.aZ(0,0,[d,e])},
ig:function(a,b,c){H.bW(a)
return H.w(H.mL(a,new H.aZ(0,0,[b,c])),"$isek",[b,c],"$asek")},
el:function(a,b){return new H.aZ(0,0,[a,b])},
ij:function(a,b,c,d){return new P.l6(0,0,[d])},
i0:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bU()
C.a.h(y,a)
try{P.mp(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eH(b,H.h1(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cX:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$bU()
C.a.h(y,a)
try{x=z
x.a=P.eH(x.gaK(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaK()+c
y=z.gaK()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bU(),z<y.length;++z)if(a===y[z])return!0
return!1},
mp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga4(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ih:function(a,b,c){var z=P.ie(null,null,null,b,c)
a.K(0,new P.ii(z,b,c))
return z},
d2:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$bU(),a)
x=y
x.a=x.gaK()+"{"
z.a=!0
J.dL(a,new P.iq(z,y))
z=y
z.a=z.gaK()+"}"}finally{z=$.$get$bU()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaK()
return z.charCodeAt(0)==0?z:z},
l6:{"^":"l0;a,0b,0c,0d,0e,0f,r,$ti",
ga4:function(a){return P.fn(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.dh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.dh(y,b)}else return this.eY(0,b)},
eY:function(a,b){var z,y,x
H.A(b,H.z(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.dk(b)
x=z[y]
if(x==null)z[y]=[this.bV(b)]
else{if(this.ds(x,b)>=0)return!1
x.push(this.bV(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dA(this.c,b)
else return this.fQ(0,b)},
fQ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fc(z,b)
x=this.ds(y,b)
if(x<0)return!1
this.dF(y.splice(x,1)[0])
return!0},
dh:function(a,b){H.A(b,H.z(this,0))
if(H.f(a[b],"$isdq")!=null)return!1
a[b]=this.bV(b)
return!0},
dA:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdq")
if(z==null)return!1
this.dF(z)
delete a[b]
return!0},
di:function(){this.r=this.r+1&67108863},
bV:function(a){var z,y
z=new P.dq(H.A(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.di()
return z},
dF:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.di()},
dk:function(a){return J.bX(a)&0x3ffffff},
fc:function(a,b){return a[this.dk(b)]},
ds:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
p:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"b;a,0b,0c"},
l7:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.z(this,0))
this.c=z.b
return!0}}},
p:{
fn:function(a,b,c){var z=new P.l7(a,b,[c])
z.c=a.e
return z}}},
l0:{"^":"jd;"},
ii:{"^":"m:7;a,b,c",
$2:function(a,b){this.a.m(0,H.A(a,this.b),H.A(b,this.c))}},
co:{"^":"l8;",$isi:1,$isc:1},
y:{"^":"b;$ti",
ga4:function(a){return new H.em(a,this.gl(a),0,[H.b1(this,a,"y",0)])},
I:function(a,b){return this.j(a,b)},
iC:function(a,b){var z,y,x
z=H.d([],[H.b1(this,a,"y",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
iB:function(a){return this.iC(a,!0)},
aB:function(a,b,c,d){var z
H.A(d,H.b1(this,a,"y",0))
P.aQ(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cX(a,"[","]")}},
ip:{"^":"ai;"},
iq:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.b1(this,a,"ai",0),H.b1(this,a,"ai",1)]})
for(z=J.by(this.gap(a));z.G();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.av(this.gap(a))},
i:function(a){return P.d2(a)},
$isK:1},
lK:{"^":"b;$ti",
m:function(a,b,c){H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
ir:{"^":"b;$ti",
j:function(a,b){return J.dK(this.a,b)},
m:function(a,b,c){J.cJ(this.a,H.A(b,H.z(this,0)),H.A(c,H.z(this,1)))},
K:function(a,b){J.dL(this.a,H.h(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]}))},
gl:function(a){return J.av(this.a)},
i:function(a){return J.a9(this.a)},
$isK:1},
f7:{"^":"lL;a,$ti"},
jf:{"^":"b;$ti",
i:function(a){return P.cX(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dN("index"))
if(b<0)H.t(P.a_(b,0,null,"index",null))
for(z=P.fn(this,this.r,H.z(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isi:1},
jd:{"^":"jf;"},
l8:{"^":"b+y;"},
lL:{"^":"ir+lK;$ti"}}],["","",,P,{"^":"",hn:{"^":"bZ;a",
i6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aQ(c,d,b.length,null,null,null)
z=$.$get$fj()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cG(C.b.H(b,s))
o=H.cG(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
w.a+=C.b.v(b,x,y)
w.a+=H.cr(r)
x=s
continue}}throw H.a(P.Z("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dQ(b,u,d,v,t,k)
else{j=C.e.bl(k-1,4)+1
if(j===1)throw H.a(P.Z("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aX(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dQ(b,u,d,v,t,i)
else{j=C.e.bl(i,4)
if(j===1)throw H.a(P.Z("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aX(b,d,d,j===2?"==":"=")}return b},
$asbZ:function(){return[[P.c,P.n],P.j]},
p:{
dQ:function(a,b,c,d,e,f){if(C.e.bl(f,4)!==0)throw H.a(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Z("Invalid base64 padding, more than two '=' characters",a,b))}}},ho:{"^":"bA;a",
$asbA:function(){return[[P.c,P.n],P.j]}},bZ:{"^":"b;$ti"},bA:{"^":"jv;$ti"},hO:{"^":"bZ;",
$asbZ:function(){return[P.j,[P.c,P.n]]}},kc:{"^":"hO;a",
ghO:function(){return C.F}},kj:{"^":"bA;",
b4:function(a,b,c){var z,y,x,w
z=a.length
P.aQ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m5(0,0,x)
if(w.fa(a,b,z)!==z)w.dH(J.hf(a,z-1),0)
return C.V.bT(x,0,w.b)},
cu:function(a){return this.b4(a,0,null)},
$asbA:function(){return[P.j,[P.c,P.n]]}},m5:{"^":"b;a,b,c",
dH:function(a,b){var z,y,x,w,v
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
fa:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dH(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kd:{"^":"bA;a",
b4:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.n],"$asc")
z=P.ke(!1,a,b,c)
if(z!=null)return z
y=J.av(a)
P.aQ(b,c,y,null,null,null)
x=new P.ap("")
w=new P.m2(!1,x,!0,0,0,0)
w.b4(a,b,y)
w.hQ(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cu:function(a){return this.b4(a,0,null)},
$asbA:function(){return[[P.c,P.n],P.j]},
p:{
ke:function(a,b,c,d){H.w(b,"$isc",[P.n],"$asc")
if(b instanceof Uint8Array)return P.kf(!1,b,c,d)
return},
kf:function(a,b,c,d){var z,y,x
z=$.$get$fc()
if(z==null)return
y=0===c
if(y&&!0)return P.dm(z,b)
x=b.length
d=P.aQ(c,d,x,null,null,null)
if(y&&d===x)return P.dm(z,b)
return P.dm(z,b.subarray(c,d))},
dm:function(a,b){if(P.kh(b))return
return P.ki(a,b)},
ki:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
kh:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kg:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},m2:{"^":"b;a,b,c,d,e,f",
hQ:function(a,b,c){var z
H.w(b,"$isc",[P.n],"$asc")
if(this.e>0){z=P.Z("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.n],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m4(c)
v=new P.m3(this,b,c,a)
$label0$0:for(u=J.aN(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bQ()
if((r&192)!==128){q=P.Z("Bad UTF-8 encoding 0x"+C.e.bg(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.Z("Overlong encoding of 0x"+C.e.bg(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Z("Character outside valid Unicode range: 0x"+C.e.bg(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cr(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d3()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.N()
if(r<0){m=P.Z("Negative UTF-8 code unit: -0x"+C.e.bg(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Z("Bad UTF-8 encoding 0x"+C.e.bg(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m4:{"^":"m:36;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.n],"$asc")
z=this.a
for(y=J.aN(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bQ()
if((w&127)!==w)return x-b}return z-b}},m3:{"^":"m:41;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c7(this.d,a,b)}}}],["","",,P,{"^":"",
ce:function(a,b,c){var z
H.h(b,{func:1,ret:P.n,args:[P.j]})
z=H.iW(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Z(a,null,null))},
hQ:function(a){var z=J.M(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.be(a)+"'"},
ik:function(a,b,c,d){var z,y
H.A(b,d)
z=J.i2(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
il:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.ga4(a);x.G();)C.a.h(y,H.A(x.gR(x),c))
if(b)return y
return H.w(J.bD(y),"$isc",z,"$asc")},
c7:function(a,b,c){var z,y
z=P.n
H.w(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aQ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.N()
z=c<y}else z=!0
return H.ey(z?C.a.bT(a,b,c):a)}if(!!J.M(a).$isd8)return H.iY(a,b,P.aQ(b,c,a.length,null,null,null))
return P.jy(a,b,c)},
jy:function(a,b,c){var z,y,x,w
H.w(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a_(b,0,J.av(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a_(c,b,J.av(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a_(c,b,x,null,null))
w.push(y.gR(y))}return H.ey(w)},
j4:function(a,b,c){return new H.i4(a,H.i5(a,!1,!0,!1))},
f9:function(){var z=H.iO()
if(z!=null)return P.k4(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hQ(a)},
x:function(a){return new P.fk(a)},
im:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.n]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dH:function(a){H.nm(a)},
k4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f8(b>0||c<c?C.b.v(a,b,c):a,5,null).geA()
else if(y===32)return P.f8(C.b.v(a,z,c),0,null).geA()}x=new Array(8)
x.fixed$length=Array
w=H.d(x,[P.n])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fJ(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iE()
if(v>=b)if(P.fJ(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.N()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.N()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.N()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ad(a,"..",s)))n=r>s+2&&C.b.ad(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ad(a,"file",b)){if(u<=b){if(!C.b.ad(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aX(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ad(a,"http",b)){if(x&&t+3===s&&C.b.ad(a,"80",t+1))if(b===0&&!0){a=C.b.aX(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ad(a,"https",b)){if(x&&t+4===s&&C.b.ad(a,"443",t+1))if(b===0&&!0){a=C.b.aX(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lp(a,v,u,t,s,r,q,o)}return P.lM(a,b,c,v,u,t,s,r,q,o)},
fb:function(a,b){var z=P.j
return C.a.hR(H.d(a.split("&"),[z]),P.el(z,z),new P.k7(b),[P.K,P.j,P.j])},
k2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k3(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ce(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.d3()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ce(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.d3()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
fa:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k5(a)
y=new P.k6(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaD(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k2(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.e.aO(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mj:function(){var z,y,x,w,v
z=P.im(22,new P.ml(),!0,P.Q)
y=new P.mk(z)
x=new P.mm()
w=new P.mn()
v=H.f(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isQ"),"]",5)
v=H.f(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isQ"),"az",21)
v=H.f(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fJ:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.n],"$asc")
z=$.$get$fK()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
af:{"^":"b;"},
"+bool":0,
an:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.e.aO(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hG(H.iV(this))
y=P.c_(H.iT(this))
x=P.c_(H.iP(this))
w=P.c_(H.iQ(this))
v=P.c_(H.iS(this))
u=P.c_(H.iU(this))
t=P.hH(H.iR(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hG:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a1;"},
"+double":0,
b6:{"^":"b;a",
k:function(a,b){return new P.b6(C.e.ah(this.a*b))},
N:function(a,b){return C.e.N(this.a,H.f(b,"$isb6").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hL()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.e.a7(y,6e7)%60)
w=z.$1(C.e.a7(y,1e6)%60)
v=new P.hK().$1(y%1e6)
return""+C.e.a7(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e7:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hK:{"^":"m:23;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hL:{"^":"m:23;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
et:{"^":"a5;",
i:function(a){return"Throw of null."}},
aO:{"^":"a5;a,b,c,d",
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbY()+y+x
if(!this.a)return w
v=this.gbX()
u=P.cl(this.b)
return w+v+": "+H.l(u)},
p:{
bY:function(a){return new P.aO(!1,null,null,a)},
cg:function(a,b,c){return new P.aO(!0,a,b,c)},
dN:function(a){return new P.aO(!1,null,a,"Must not be null")}}},
cs:{"^":"aO;e,f,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
ct:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
aQ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a_(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a_(b,a,c,"end",f))
return b}return c}}},
hZ:{"^":"aO;e,l:f>,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
U:function(a,b,c,d,e){var z=H.E(e!=null?e:J.av(b))
return new P.hZ(b,z,!0,a,c,"Index out of range")}}},
k0:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.k0(a)}}},
jY:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c9:function(a){return new P.jY(a)}}},
js:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hy:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cl(z))+"."},
p:{
b4:function(a){return new P.hy(a)}}},
iK:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eE:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hF:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fk:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hW:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
Z:function(a,b,c){return new P.hW(a,b,c)}}},
n:{"^":"a1;"},
"+int":0,
i:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga4(this)
for(y=0;z.G();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dN("index"))
if(b<0)H.t(P.a_(b,0,null,"index",null))
for(z=this.ga4(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.i0(this,"(",")")}},
cY:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
I:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"b;"},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
gU:function(a){return H.bJ(this)},
i:function(a){return"Instance of '"+H.be(this)+"'"},
toString:function(){return this.i(this)}},
az:{"^":"b;"},
j:{"^":"b;",$iseu:1},
"+String":0,
ap:{"^":"b;aK:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isou:1,
p:{
eH:function(a,b,c){var z=J.by(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
k7:{"^":"m:47;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.w(a,"$isK",[z,z],"$asK")
H.O(b)
y=J.aN(b).el(b,"=")
if(y===-1){if(b!=="")J.cJ(a,P.dt(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aG(b,y+1)
z=this.a
J.cJ(a,P.dt(x,0,x.length,z,!0),P.dt(w,0,w.length,z,!0))}return a}},
k3:{"^":"m:49;a",
$2:function(a,b){throw H.a(P.Z("Illegal IPv4 address, "+a,this.a,b))}},
k5:{"^":"m:39;a",
$2:function(a,b){throw H.a(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k6:{"^":"m:29;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ce(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.N()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cz:{"^":"b;bS:a<,b,c,d,es:e>,f,r,0x,0y,0z,0Q,0ch",
geB:function(){return this.b},
gcH:function(a){var z=this.c
if(z==null)return""
if(C.b.ac(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbM:function(a){var z=this.d
if(z==null)return P.fz(this.a)
return z},
gcS:function(a){var z=this.f
return z==null?"":z},
geg:function(){var z=this.r
return z==null?"":z},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.j,null],"$asK")
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
if(x&&!C.b.ac(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
return new P.cz(i,j,c,f,d,g,this.r)},
ev:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gcT:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.f7(P.fb(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
geh:function(){return this.c!=null},
gek:function(){return this.f!=null},
gei:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.l(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.l(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.l(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
w:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdl){y=this.a
x=b.gbS()
if(y==null?x==null:y===x)if(this.c!=null===b.geh()){y=this.b
x=b.geB()
if(y==null?x==null:y===x){y=this.gcH(this)
x=z.gcH(b)
if(y==null?x==null:y===x){y=this.gbM(this)
x=z.gbM(b)
if(y==null?x==null:y===x)if(this.e===z.ges(b)){y=this.f
x=y==null
if(!x===b.gek()){if(x)y=""
if(y===z.gcS(b)){z=this.r
y=z==null
if(!y===b.gei()){if(y)z=""
z=z===b.geg()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdl:1,
p:{
cA:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.n],"$asc")
if(c===C.k){z=$.$get$fE().b
if(typeof b!=="string")H.t(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.as(c,"bZ",0))
y=c.ghO().cu(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cr(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lM:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lX(a,b,d)
else{if(d===b)P.bP(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lY(a,z,e-1):""
x=P.lR(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lU(P.ce(C.b.v(a,w,g),new P.lN(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lS(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.N()
t=h<i?P.ds(a,h+1,i,null):null
return new P.cz(j,y,x,v,u,t,i<c?P.lQ(a,i+1,c):null)},
fz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bP:function(a,b,c){throw H.a(P.Z(c,a,b))},
lU:function(a,b){if(a!=null&&a===P.fz(b))return
return a},
lR:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.Y(a,z)!==93)P.bP(a,b,"Missing end `]` to match `[` in host")
P.fa(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fa(a,b,c)
return"["+a+"]"}return P.m_(a,b,c)},
m_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.fG(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bP(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fA(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lX:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fC(C.b.H(a,b)))P.bP(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bP(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lO(y?a.toLowerCase():a)},
lO:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lY:function(a,b,c){return P.bQ(a,b,c,C.R)},
lS:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bQ(a,b,c,C.y):C.t.ji(d,new P.lT(),P.j).F(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ac(w,"/"))w="/"+w
return P.lZ(w,e,f)},
lZ:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ac(a,"/"))return P.m0(a,!z||c)
return P.m1(a)},
ds:function(a,b,c,d){var z,y
z={}
H.w(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.bY("Both query and queryParameters specified"))
return P.bQ(a,b,c,C.n)}if(d==null)return
y=new P.ap("")
z.a=""
d.K(0,new P.lV(new P.lW(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lQ:function(a,b,c){return P.bQ(a,b,c,C.n)},
fG:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cG(y)
v=H.cG(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aO(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cr(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fA:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.n])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.h5(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c7(y,0,null)},
bQ:function(a,b,c,d){var z=P.fF(a,b,c,H.w(d,"$isc",[P.n],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.n],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.N()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fG(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bP(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fA(v)}}if(w==null)w=new P.ap("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.N()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fD:function(a){if(C.b.ac(a,"."))return!0
return C.b.el(a,"/.")!==-1},
m1:function(a){var z,y,x,w,v,u,t
if(!P.fD(a))return a
z=H.d([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.T(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.F(z,"/")},
m0:function(a,b){var z,y,x,w,v,u
if(!P.fD(a))return!b?P.fB(a):a
z=H.d([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaD(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaD(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.fB(z[0]))}return C.a.F(z,"/")},
fB:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fC(J.hc(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aG(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lP:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bY("Invalid URL encoding"))}}return z},
dt:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dC(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.a4(y.v(a,b,c))}else{u=H.d([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.bY("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bY("Truncated URI"))
C.a.h(u,P.lP(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.n],"$asc")
return new P.kd(!1).cu(u)},
fC:function(a){var z=a|32
return 97<=z&&z<=122}}},
lN:{"^":"m:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.Z("Invalid port",this.a,z+1))}},
lT:{"^":"m:48;",
$1:function(a){return P.cA(C.T,a,C.k,!1)}},
lW:{"^":"m:19;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cA(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cA(C.p,b,C.k,!0))}}},
lV:{"^":"m:45;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.by(H.h1(b,"$isi")),y=this.a;z.G();)y.$2(a,H.O(z.gR(z)))}},
k1:{"^":"b;a,b,c",
geA:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.em(y,"?",z)
w=y.length
if(x>=0){v=P.bQ(y,x+1,w,C.n)
w=x}else v=null
z=new P.kH(this,"data",null,null,null,P.bQ(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Z("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Z("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaD(z)
if(v!==44||x!==t+7||!C.b.ad(a,"base64",t+1))throw H.a(P.Z("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.i6(0,a,s,y)
else{r=P.fF(a,s,y,C.n,!0)
if(r!=null)a=C.b.aX(a,s,y,r)}return new P.k1(a,z,c)}}},
ml:{"^":"m:46;",
$1:function(a){return new Uint8Array(96)}},
mk:{"^":"m:43;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hg(z,0,96,b)
return z}},
mm:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mn:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lp:{"^":"b;a,b,c,d,e,f,r,x,0y",
geh:function(){return this.c>0},
gej:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gek:function(){var z=this.f
if(typeof z!=="number")return z.N()
return z<this.r},
gei:function(){return this.r<this.a.length},
gdt:function(){return this.b===4&&C.b.ac(this.a,"http")},
gdu:function(){return this.b===5&&C.b.ac(this.a,"https")},
gbS:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdt()){this.x="http"
z="http"}else if(this.gdu()){this.x="https"
z="https"}else if(z===4&&C.b.ac(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ac(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geB:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcH:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbM:function(a){var z
if(this.gej()){z=this.d
if(typeof z!=="number")return z.D()
return P.ce(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdt())return 80
if(this.gdu())return 443
return 0},
ges:function(a){return C.b.v(this.a,this.e,this.f)},
gcS:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.N()
return z<y?C.b.v(this.a,z+1,y):""},
geg:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aG(y,z+1):""},
gcT:function(){var z=this.f
if(typeof z!=="number")return z.N()
if(z>=this.r)return C.U
z=P.j
return new P.f7(P.fb(this.gcS(this),C.k),[z,z])},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.j,null],"$asK")
i=this.gbS()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gej()?this.gbM(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ac(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aG(y,x+1)
return new P.cz(i,j,c,f,d,g,b)},
ev:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdl)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdl:1},
kH:{"^":"cz;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cS:function(a,b){var z=document.createElement("canvas")
return z},
hN:function(a){H.f(a,"$isab")
return"wheel"},
i_:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ised")
try{J.hi(z,a)}catch(x){H.au(x)}return z},
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fm:function(a,b,c,d){var z,y
z=W.cx(W.cx(W.cx(W.cx(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fN:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.W
if(z===C.j)return a
return z.dO(a,b)},
a6:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nx:{"^":"u;0l:length=","%":"AccessibleNodeList"},
ny:{"^":"a6;0a5:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nz:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"u;",$iscN:1,"%":";Blob"},
nF:{"^":"a6;0a5:type}","%":"HTMLButtonElement"},
cR:{"^":"a6;",
bR:function(a,b,c){if(c!=null)return a.getContext(b,P.mz(c,null))
return a.getContext(b)},
eD:function(a,b){return this.bR(a,b,null)},
$iscR:1,
"%":"HTMLCanvasElement"},
dV:{"^":"u;",$isdV:1,"%":"CanvasRenderingContext2D"},
nH:{"^":"N;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nJ:{"^":"hE;0l:length=","%":"CSSPerspective"},
b5:{"^":"u;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nK:{"^":"kG;0l:length=",
eE:function(a,b){var z=a.getPropertyValue(this.f1(a,b))
return z==null?"":z},
f1:function(a,b){var z,y
z=$.$get$e_()
y=z[b]
if(typeof y==="string")return y
y=this.h6(a,b)
z[b]=y
return y},
h6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hI()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gao:function(a){return a.height},
gaV:function(a){return a.left},
gbc:function(a){return a.right},
gbi:function(a){return a.top},
gar:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hD:{"^":"b;",
gaV:function(a){return this.eE(a,"left")}},
e0:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hE:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nL:{"^":"e0;0l:length=","%":"CSSTransformValue"},
nM:{"^":"e0;0l:length=","%":"CSSUnparsedValue"},
nN:{"^":"u;0l:length=","%":"DataTransferItemList"},
nO:{"^":"u;",
i:function(a){return String(a)},
"%":"DOMException"},
nP:{"^":"kJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.w(c,"$isa7",[P.a1],"$asa7")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a7,P.a1]]},
$asy:function(){return[[P.a7,P.a1]]},
$isi:1,
$asi:function(){return[[P.a7,P.a1]]},
$isc:1,
$asc:function(){return[[P.a7,P.a1]]},
$asD:function(){return[[P.a7,P.a1]]},
"%":"ClientRectList|DOMRectList"},
hJ:{"^":"u;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gar(a))+" x "+H.l(this.gao(a))},
w:function(a,b){var z
if(b==null)return!1
z=H.bV(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=J.b0(b)
return a.left===z.gaV(b)&&a.top===z.gbi(b)&&this.gar(a)===z.gar(b)&&this.gao(a)===z.gao(b)},
gU:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gao:function(a){return a.height},
gaV:function(a){return a.left},
gbc:function(a){return a.right},
gbi:function(a){return a.top},
gar:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
nQ:{"^":"kL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$asy:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
nR:{"^":"u;0l:length=","%":"DOMTokenList"},
kF:{"^":"co;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa2")},
m:function(a,b,c){var z
H.E(b)
H.f(c,"$isa2")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga4:function(a){var z=this.iB(this)
return new J.aw(z,z.length,0,[H.z(z,0)])},
aB:function(a,b,c,d){throw H.a(P.c9(null))},
$asy:function(){return[W.a2]},
$asi:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
a2:{"^":"N;",
gct:function(a){return new W.kF(a,a.children)},
gdR:function(a){return P.j0(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
$isa2:1,
"%":";Element"},
nS:{"^":"a6;0a5:type}","%":"HTMLEmbedElement"},
aa:{"^":"u;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"u;",
dI:["eH",function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(c!=null)this.eZ(a,b,c,!1)}],
eZ:function(a,b,c,d){return a.addEventListener(b,H.bu(H.h(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fs|ft|fv|fw"},
aY:{"^":"cN;",$isaY:1,"%":"File"},
e9:{"^":"kQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isaY")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aY]},
$asy:function(){return[W.aY]},
$isi:1,
$asi:function(){return[W.aY]},
$isc:1,
$asc:function(){return[W.aY]},
$ise9:1,
$asD:function(){return[W.aY]},
"%":"FileList"},
nT:{"^":"ab;0l:length=","%":"FileWriter"},
nU:{"^":"a6;0l:length=","%":"HTMLFormElement"},
b8:{"^":"u;",$isb8:1,"%":"Gamepad"},
nV:{"^":"u;0l:length=","%":"History"},
nW:{"^":"l2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asy:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c0:{"^":"u;0dS:data=",$isc0:1,"%":"ImageData"},
ec:{"^":"a6;",$isec:1,"%":"HTMLImageElement"},
ed:{"^":"a6;0a5:type}",$ised:1,"%":"HTMLInputElement"},
bE:{"^":"di;",$isbE:1,"%":"KeyboardEvent"},
o_:{"^":"a6;0a5:type}","%":"HTMLLinkElement"},
o0:{"^":"u;",
i:function(a){return String(a)},
"%":"Location"},
o1:{"^":"u;0l:length=","%":"MediaList"},
o2:{"^":"ab;",
dI:function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.eH(a,b,c,!1)},
"%":"MessagePort"},
o3:{"^":"l9;",
j:function(a,b){return P.aX(a.get(H.O(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gap:function(a){var z=H.d([],[P.j])
this.K(a,new W.iC(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iC:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o4:{"^":"la;",
j:function(a,b){return P.aX(a.get(H.O(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gap:function(a){var z=H.d([],[P.j])
this.K(a,new W.iD(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iD:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"u;",$isbc:1,"%":"MimeType"},
o5:{"^":"lc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"MimeTypeArray"},
ay:{"^":"di;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kE:{"^":"co;a",
m:function(a,b,c){var z,y
H.E(b)
H.f(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga4:function(a){var z=this.a.childNodes
return new W.ea(z,z.length,-1,[H.b1(C.W,z,"D",0)])},
aB:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asy:function(){return[W.N]},
$asi:function(){return[W.N]},
$asc:function(){return[W.N]}},
N:{"^":"ab;",
iq:function(a,b){var z,y
try{z=a.parentNode
J.hd(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eI(a):z},
fT:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iH:{"^":"le;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asy:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
od:{"^":"a6;0a5:type}","%":"HTMLOListElement"},
oe:{"^":"a6;0a5:type}","%":"HTMLObjectElement"},
bd:{"^":"u;0l:length=",$isbd:1,"%":"Plugin"},
oh:{"^":"li;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbd")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asD:function(){return[W.bd]},
"%":"PluginArray"},
oj:{"^":"u;0a5:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
ok:{"^":"lo;",
j:function(a,b){return P.aX(a.get(H.O(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gap:function(a){var z=H.d([],[P.j])
this.K(a,new W.ja(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
ja:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ol:{"^":"a6;0a5:type}","%":"HTMLScriptElement"},
on:{"^":"a6;0l:length=","%":"HTMLSelectElement"},
bf:{"^":"ab;",$isbf:1,"%":"SourceBuffer"},
oo:{"^":"ft;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bf]},
$asy:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"SourceBufferList"},
op:{"^":"a6;0a5:type}","%":"HTMLSourceElement"},
bg:{"^":"u;",$isbg:1,"%":"SpeechGrammar"},
oq:{"^":"lr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"SpeechGrammarList"},
bh:{"^":"u;0l:length=",$isbh:1,"%":"SpeechRecognitionResult"},
os:{"^":"lu;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.d([],[P.j])
this.K(a,new W.ju(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
ju:{"^":"m:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ov:{"^":"a6;0a5:type}","%":"HTMLStyleElement"},
bi:{"^":"u;",$isbi:1,"%":"CSSStyleSheet|StyleSheet"},
dd:{"^":"a6;",$isdd:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bj:{"^":"ab;",$isbj:1,"%":"TextTrack"},
bk:{"^":"ab;",$isbk:1,"%":"TextTrackCue|VTTCue"},
oy:{"^":"lB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbk")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"TextTrackCueList"},
oz:{"^":"fw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"TextTrackList"},
oA:{"^":"u;0l:length=","%":"TimeRanges"},
bm:{"^":"u;",$isbm:1,"%":"Touch"},
bn:{"^":"di;",$isbn:1,"%":"TouchEvent"},
oB:{"^":"lH;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbm")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"TouchList"},
oC:{"^":"u;0l:length=","%":"TrackDefaultList"},
di:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oE:{"^":"u;",
i:function(a){return String(a)},
"%":"URL"},
oF:{"^":"ab;0l:length=","%":"VideoTrackList"},
bN:{"^":"ay;",
ghL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghK:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbN:1,
"%":"WheelEvent"},
kx:{"^":"ab;",
fU:function(a,b){return a.requestAnimationFrame(H.bu(H.h(b,{func:1,ret:-1,args:[P.a1]}),1))},
f9:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oK:{"^":"m8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isb5")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b5]},
$asy:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asD:function(){return[W.b5]},
"%":"CSSRuleList"},
oL:{"^":"hJ;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
w:function(a,b){var z
if(b==null)return!1
z=H.bV(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=J.b0(b)
return a.left===z.gaV(b)&&a.top===z.gbi(b)&&a.width===z.gar(b)&&a.height===z.gao(b)},
gU:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gao:function(a){return a.height},
gar:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oN:{"^":"ma;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isb8")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b8]},
$asy:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asD:function(){return[W.b8]},
"%":"GamepadList"},
oO:{"^":"mc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asy:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oP:{"^":"me;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbh")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asy:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"SpeechRecognitionResultList"},
oQ:{"^":"mg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.f(c,"$isbi")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$asy:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asD:function(){return[W.bi]},
"%":"StyleSheetList"},
kM:{"^":"dc;a,b,c,$ti",
i2:function(a,b,c,d){var z=H.z(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
oM:{"^":"kM;a,b,c,$ti"},
kN:{"^":"eG;a,b,c,d,e,$ti",
ha:function(){var z=this.d
if(z!=null&&this.a<=0)J.he(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fN(new W.kO(c),W.aa)
z=new W.kN(0,a,b,z,!1,[e])
z.ha()
return z}}},
kO:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.f(a,"$isaa"))}},
D:{"^":"b;$ti",
ga4:function(a){return new W.ea(a,this.gl(a),-1,[H.b1(this,a,"D",0)])},
aB:function(a,b,c,d){H.A(d,H.b1(this,a,"D",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
ea:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kG:{"^":"u+hD;"},
kI:{"^":"u+y;"},
kJ:{"^":"kI+D;"},
kK:{"^":"u+y;"},
kL:{"^":"kK+D;"},
kP:{"^":"u+y;"},
kQ:{"^":"kP+D;"},
l1:{"^":"u+y;"},
l2:{"^":"l1+D;"},
l9:{"^":"u+ai;"},
la:{"^":"u+ai;"},
lb:{"^":"u+y;"},
lc:{"^":"lb+D;"},
ld:{"^":"u+y;"},
le:{"^":"ld+D;"},
lh:{"^":"u+y;"},
li:{"^":"lh+D;"},
lo:{"^":"u+ai;"},
fs:{"^":"ab+y;"},
ft:{"^":"fs+D;"},
lq:{"^":"u+y;"},
lr:{"^":"lq+D;"},
lu:{"^":"u+ai;"},
lA:{"^":"u+y;"},
lB:{"^":"lA+D;"},
fv:{"^":"ab+y;"},
fw:{"^":"fv+D;"},
lG:{"^":"u+y;"},
lH:{"^":"lG+D;"},
m7:{"^":"u+y;"},
m8:{"^":"m7+D;"},
m9:{"^":"u+y;"},
ma:{"^":"m9+D;"},
mb:{"^":"u+y;"},
mc:{"^":"mb+D;"},
md:{"^":"u+y;"},
me:{"^":"md+D;"},
mf:{"^":"u+y;"},
mg:{"^":"mf+D;"}}],["","",,P,{"^":"",
mC:function(a){var z,y
z=J.M(a)
if(!!z.$isc0){y=z.gdS(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fy(a.data,a.height,a.width)},
mB:function(a){if(a instanceof P.fy)return{data:a.a,height:a.b,width:a.c}
return a},
aX:function(a){var z,y,x,w,v
if(a==null)return
z=P.el(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mz:function(a,b){var z={}
a.K(0,new P.mA(z))
return z},
e6:function(){var z=$.e5
if(z==null){z=J.cK(window.navigator.userAgent,"Opera",0)
$.e5=z}return z},
hI:function(){var z,y
z=$.e2
if(z!=null)return z
y=$.e3
if(y==null){y=J.cK(window.navigator.userAgent,"Firefox",0)
$.e3=y}if(y)z="-moz-"
else{y=$.e4
if(y==null){y=!P.e6()&&J.cK(window.navigator.userAgent,"Trident/",0)
$.e4=y}if(y)z="-ms-"
else z=P.e6()?"-o-":"-webkit-"}$.e2=z
return z},
lx:{"^":"b;",
ee:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cZ:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isan)return new Date(a.a)
if(!!y.$isj3)throw H.a(P.c9("structured clone of RegExp"))
if(!!y.$isaY)return a
if(!!y.$iscN)return a
if(!!y.$ise9)return a
if(!!y.$isc0)return a
if(!!y.$iser||!!y.$isd7)return a
if(!!y.$isK){x=this.ee(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lz(z,this))
return z.a}if(!!y.$isc){x=this.ee(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hI(a,x)}throw H.a(P.c9("structured clone of other type"))},
hI:function(a,b){var z,y,x,w
z=J.aN(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cZ(z.j(a,w)))
return x}},
lz:{"^":"m:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.cZ(b)}},
fy:{"^":"b;dS:a>,b,c",$isc0:1},
mA:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}},
ly:{"^":"lx;a,b"},
hT:{"^":"co;a,b",
gbp:function(){var z,y,x
z=this.b
y=H.as(z,"y",0)
x=W.a2
return new H.is(new H.kv(z,H.h(new P.hU(),{func:1,ret:P.af,args:[y]}),[y]),H.h(new P.hV(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.E(b)
H.f(c,"$isa2")
z=this.gbp()
J.hh(z.b.$1(J.cL(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aB:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.av(this.gbp().a)},
j:function(a,b){var z=this.gbp()
return z.b.$1(J.cL(z.a,b))},
ga4:function(a){var z=P.il(this.gbp(),!1,W.a2)
return new J.aw(z,z.length,0,[H.z(z,0)])},
$asy:function(){return[W.a2]},
$asi:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
hU:{"^":"m:38;",
$1:function(a){return!!J.M(H.f(a,"$isN")).$isa2}},
hV:{"^":"m:34;",
$1:function(a){return H.k(H.f(a,"$isN"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lj:{"^":"b;$ti",
gbc:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.A(z+this.c,H.z(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.A(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bV(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=this.a
y=J.b0(b)
x=y.gaV(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbi(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.A(z+this.c,w)===y.gbc(b)){if(typeof x!=="number")return x.D()
z=H.A(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.bX(z)
x=this.b
w=J.bX(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.A(x+this.d,v)
return P.l3(P.cy(P.cy(P.cy(P.cy(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"lj;aV:a>,bi:b>,ar:c>,ao:d>,$ti",p:{
j0:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.N()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.N()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bF:{"^":"u;",$isbF:1,"%":"SVGLength"},nZ:{"^":"l5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.f(c,"$isbF")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bF]},
$isi:1,
$asi:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asD:function(){return[P.bF]},
"%":"SVGLengthList"},bI:{"^":"u;",$isbI:1,"%":"SVGNumber"},oc:{"^":"lg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.f(c,"$isbI")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asD:function(){return[P.bI]},
"%":"SVGNumberList"},oi:{"^":"u;0l:length=","%":"SVGPointList"},om:{"^":"eI;0a5:type}","%":"SVGScriptElement"},ot:{"^":"lw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},ow:{"^":"eI;0a5:type}","%":"SVGStyleElement"},eI:{"^":"a2;",
gct:function(a){return new P.hT(a,new W.kE(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bK:{"^":"u;",$isbK:1,"%":"SVGTransform"},oD:{"^":"lJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.f(c,"$isbK")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bK]},
$isi:1,
$asi:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asD:function(){return[P.bK]},
"%":"SVGTransformList"},l4:{"^":"u+y;"},l5:{"^":"l4+D;"},lf:{"^":"u+y;"},lg:{"^":"lf+D;"},lv:{"^":"u+y;"},lw:{"^":"lv+D;"},lI:{"^":"u+y;"},lJ:{"^":"lI+D;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$isjN:1}}],["","",,P,{"^":"",nA:{"^":"u;0l:length=","%":"AudioBuffer"},dP:{"^":"ab;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nB:{"^":"kD;",
j:function(a,b){return P.aX(a.get(H.O(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aX(y.value[1]))}},
gap:function(a){var z=H.d([],[P.j])
this.K(a,new P.hl(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},hl:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hm:{"^":"dP;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nC:{"^":"ab;0l:length=","%":"AudioTrackList"},hp:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nD:{"^":"dP;0a5:type}","%":"BiquadFilterNode"},of:{"^":"hp;0l:length=","%":"OfflineAudioContext"},og:{"^":"hm;0a5:type}","%":"Oscillator|OscillatorNode"},kD:{"^":"u+ai;"}}],["","",,P,{"^":"",da:{"^":"u;",
iy:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mB(g))
return}if(!!z.$isec)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bY("Incorrect number or type of arguments"))},
ix:function(a,b,c,d,e,f,g){return this.iy(a,b,c,d,e,f,g,null,null,null)},
$isda:1,
"%":"WebGLRenderingContext"},jz:{"^":"u;",$isjz:1,"%":"WebGLTexture"},jW:{"^":"u;",$isjW:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",or:{"^":"lt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aX(a.item(b))},
m:function(a,b,c){H.E(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isc:1,
$asc:function(){return[[P.K,,,]]},
$asD:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},ls:{"^":"u+y;"},lt:{"^":"ls+D;"}}],["","",,O,{"^":"",am:{"^":"b;0a,0b,0c,0d,$ti",
bn:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
d4:function(a,b,c){var z=H.as(this,"am",0)
H.h(b,{func:1,ret:P.af,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
aZ:function(a,b){return this.d4(a,null,b)},
dw:function(a){var z
H.w(a,"$isi",[H.as(this,"am",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dc:function(a,b){var z
H.w(b,"$isi",[H.as(this,"am",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga4:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.z(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.as(this,"am",0)
H.A(b,z)
z=[z]
if(this.dw(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dc(x,H.d([b],z))}},
cj:function(a,b){var z,y
H.w(b,"$isi",[H.as(this,"am",0)],"$asi")
if(this.dw(b)){z=this.a
y=z.length
C.a.cj(z,b)
this.dc(y,b)}},
$isi:1,
p:{
cT:function(a){var z=new O.am([a])
z.bn(a)
return z}}},d4:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eR:function(a){var z=this.b
if(!(z==null))z.C(a)},
aH:function(){return this.eR(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.bb()},
bN:function(a){var z=this.a
if(a==null)C.a.h(z,V.bb())
else C.a.h(z,a)
this.aH()},
aE:function(){var z=this.a
if(z.length>0){z.pop()
this.aH()}}}}],["","",,E,{"^":"",cM:{"^":"b;"},aP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a6:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa8:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.h(this.ger(),{func:1,ret:-1,args:[D.p]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.h(this.ger(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.J("shape",z,this.c,this,[F.eC])
w.b=!0
this.aW(w)}},
am:function(a,b){var z
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.G();)z.d.am(0,b)},
aa:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga0(z))
z.aH()
a.cR(this.f)
z=a.dy
y=(z&&C.a).gaD(z)
if(y!=null&&this.d!=null)y.eu(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.G();)z.d.aa(a)
a.cQ()
a.dx.aE()},
gt:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aW:function(a){var z=this.z
if(!(z==null))z.C(a)},
a2:function(){return this.aW(null)},
ia:[function(a){H.f(a,"$isp")
this.e=null
this.aW(a)},function(){return this.ia(null)},"jn","$1","$0","ger",0,2,1],
i8:[function(a){this.aW(H.f(a,"$isp"))},function(){return this.i8(null)},"jl","$1","$0","geq",0,2,1],
jk:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aP],"$asi")
for(z=b.length,y=this.geq(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.b7()
t.a=H.d([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.a2()},"$2","gi7",8,0,10],
jm:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aP],"$asi")
for(z=b.length,y=this.geq(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.b7()
t.a=H.d([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.h(y,x)
C.a.L(t.a,y)}}this.a2()},"$2","gi9",8,0,10],
$isaG:1,
p:{
e8:function(a,b,c,d,e,f){var z,y
z=new E.aP()
z.a=d
z.b=!0
y=O.cT(E.aP)
z.y=y
y.aZ(z.gi7(),z.gi9())
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
z.sa8(0,e)
return z}}},j5:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eO:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.an(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d4()
y=[V.aD]
z.a=H.d([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.h(new E.j7(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d4()
z.a=H.d([],y)
v=z.gt()
v.toString
x=H.h(new E.j8(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d4()
z.a=H.d([],y)
y=z.gt()
y.toString
w=H.h(new E.j9(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.c8])
this.dy=z
C.a.h(z,null)
this.fr=new H.aZ(0,0,[P.j,A.db])},
gil:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.k(0,y.ga0(y))
this.z=y
z=y}return z},
cR:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
cQ:function(){var z=this.dy
if(z.length>1)z.pop()},
dM:function(a){var z=a.b
if(z.length===0)throw H.a(P.x("May not cache a shader with no name."))
if(this.fr.bx(0,z))throw H.a(P.x('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
j6:function(a,b){var z=new E.j5(a,b)
z.eO(a,b)
return z}}},j7:{"^":"m:13;a",
$1:function(a){var z
H.f(a,"$isp")
z=this.a
z.z=null
z.ch=null}},j8:{"^":"m:13;a",
$1:function(a){var z
H.f(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j9:{"^":"m:13;a",
$1:function(a){var z
H.f(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},jF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a6:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
eT:[function(a){var z
H.f(a,"$isp")
z=this.x
if(!(z==null))z.C(a)
this.is()},function(){return this.eT(null)},"eS","$1","$0","gdd",0,2,1],
ghT:function(){var z,y,x
z=Date.now()
y=C.e.a7(P.e7(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
dB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.d.cG(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cG(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eL(C.q,this.gir())},
is:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jH(this),{func:1,ret:-1,args:[P.a1]})
C.B.f9(z)
C.B.fU(z,W.fN(y,P.a1))}},"$0","gir",0,0,3],
ip:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.e7(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aH()
w=x.db
C.a.sl(w.a,0)
w.aH()
w=x.dx
C.a.sl(w.a,0)
w.aH()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}}catch(v){z=H.au(v)
y=H.bw(v)
P.dH("Error: "+H.l(z))
P.dH("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jG:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscR)return E.eK(a,!0,!0,!0,!1)
y=W.cS(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gct(a).h(0,y)
w=E.eK(y,!0,!0,!0,!1)
w.a=a
return w},
eK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jF()
y=P.ig(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bR(a,"webgl",y)
x=H.f(x==null?C.l.bR(a,"experimental-webgl",y):x,"$isda")
if(x==null)H.t(P.x("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j6(x,a)
w=new T.jA(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k8(a)
v=new X.i7()
v.c=new X.aF(!1,!1,!1)
v.d=P.ij(null,null,null,P.n)
w.b=v
v=new X.iE(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.io(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jK(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eG,P.b]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.h(w.gft(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.h(w.gfw(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.h(w.gfo(),q),!1,r))
v=w.z
p=W.bE
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.h(w.gfA(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.h(w.gfz(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.h(w.gfD(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.h(w.gfF(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.h(w.gfE(),s),!1,t))
p=w.z
o=W.bN;(p&&C.a).h(p,W.a0(a,H.O(W.hN(a)),H.h(w.gfG(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.h(w.gfu(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.h(w.gfv(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.h(w.gfH(),q),!1,r))
r=w.z
q=W.bn
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.h(w.gfP(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.h(w.gfN(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.h(w.gfO(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.dB()
return z}}},jH:{"^":"m:31;a",
$1:function(a){var z
H.nl(a)
z=this.a
if(z.z){z.z=!1
z.ip()}}}}],["","",,Z,{"^":"",fg:{"^":"b;a,b",p:{
dn:function(a,b,c){var z
H.w(c,"$isc",[P.n],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.br(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,z)}}},dT:{"^":"cM;a,b,c,d,e",
Z:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.au(y)
x=P.x('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fh:{"^":"b;a",$isnE:1},cQ:{"^":"b;a,0b,c,d",
aC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Z:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Z(a)},
aF:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aa:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(y,", ")+"\nAttrs:   "+C.a.F(u,", ")},
$isox:1},cn:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.be(this.c)+"'")+"]"}},bo:{"^":"b;a",
gd6:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aU().a)!==0)y+=2
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=4
if((z&$.$get$bp().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+4:y},
hB:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ff()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bo))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.j])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aV().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.F(z,"|")},
p:{
ar:function(a){return new Z.bo(a)}}}}],["","",,D,{"^":"",dW:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hR(z))
return x!==0},
hM:function(){return this.C(null)},
it:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.C(y)}}},
aq:function(a){return this.it(a,!0,!1)},
p:{
H:function(){var z=new D.b7()
z.a=H.d([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},hR:{"^":"m:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"b;a,0b"},c1:{"^":"p;c,d,a,0b,$ti"},c2:{"^":"p;c,d,a,0b,$ti"},J:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dU:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nG<"}},ei:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ei))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ej:{"^":"p;c,a,0b"},i7:{"^":"b;0a,0b,0c,0d",
ii:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.C(y)},
ic:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.C(y)}},en:{"^":"cq;x,y,c,d,e,a,0b"},io:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
av:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gaP()
s=new X.bG(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cP:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.av(a,b))
return!0},
ba:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eG()
if(typeof z!=="number")return z.bQ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.av(a,b))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.av(a,b))
return!0},
ij:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaP()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.d5(new V.X(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.C(w)
return!0},
fC:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.en(c,a,this.a.gaP(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.R(0,0)}},aF:{"^":"b;a,b,c",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aF))return!1
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
return z+(this.c?"Shift+":"")}},bG:{"^":"cq;x,y,z,Q,ch,c,d,e,a,0b"},iE:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bZ:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaP()
x=new X.bG(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cP:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.bZ(a,b,!0))
return!0},
ba:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eG()
if(typeof z!=="number")return z.bQ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.bZ(a,b,!0))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.bZ(a,b,!1))
return!0},
ik:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaP()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.d5(new V.X(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.C(x)
return!0},
gdU:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbP:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gep:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},d5:{"^":"cq;x,c,d,e,a,0b"},cq:{"^":"p;"},eP:{"^":"cq;x,y,z,Q,ch,c,d,e,a,0b"},jK:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
av:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaP()
w=new X.eP(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ih:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.C(this.av(a,!0))
return!0},
ie:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.C(this.av(a,!0))
return!0},
ig:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.C(this.av(a,!1))
return!0}},k8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaP:function(){var z=this.a
return V.eB(0,0,(z&&C.l).gdR(z).c,C.l.gdR(z).d)},
dn:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ei(z,new X.aF(y,a.altKey,a.shiftKey))},
aN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
ce:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.R(y-w,x-v)},
b0:function(a){return new V.X(a.movementX,a.movementY)},
c8:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.ah(u.pageX)
C.d.ah(u.pageY)
s=z.left
C.d.ah(u.pageX)
C.a.h(y,new V.R(t-s,C.d.ah(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dU(z,new X.aF(y,a.altKey,a.shiftKey))},
c1:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.J()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iW:[function(a){this.f=!0},"$1","gfw",4,0,9],
iQ:[function(a){this.f=!1},"$1","gfo",4,0,9],
iT:[function(a){H.f(a,"$isay")
if(this.f&&this.c1(a))a.preventDefault()},"$1","gft",4,0,4],
iY:[function(a){var z
H.f(a,"$isbE")
if(!this.f)return
z=this.dn(a)
if(this.b.ii(z))a.preventDefault()},"$1","gfA",4,0,16],
iX:[function(a){var z
H.f(a,"$isbE")
if(!this.f)return
z=this.dn(a)
if(this.b.ic(z))a.preventDefault()},"$1","gfz",4,0,16],
j_:[function(a){var z,y,x,w
H.f(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aN(a)
if(this.x){y=this.at(a)
x=this.b0(a)
if(this.d.cP(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cP(y,w))a.preventDefault()},"$1","gfD",4,0,4],
j1:[function(a){var z,y,x
H.f(a,"$isay")
this.aN(a)
z=this.at(a)
if(this.x){y=this.b0(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gfF",4,0,4],
iV:[function(a){var z,y,x
H.f(a,"$isay")
if(!this.c1(a)){this.aN(a)
z=this.at(a)
if(this.x){y=this.b0(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","gfv",4,0,4],
j0:[function(a){var z,y,x
H.f(a,"$isay")
this.aN(a)
z=this.at(a)
if(this.x){y=this.b0(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gfE",4,0,4],
iU:[function(a){var z,y,x
H.f(a,"$isay")
if(!this.c1(a)){this.aN(a)
z=this.at(a)
if(this.x){y=this.b0(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b9(z,x))a.preventDefault()}},"$1","gfu",4,0,4],
j2:[function(a){var z,y
H.f(a,"$isbN")
this.aN(a)
z=new V.X((a&&C.A).ghK(a),C.A.ghL(a)).u(0,180)
if(this.x){if(this.d.ij(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.ik(z,y))a.preventDefault()},"$1","gfG",4,0,35],
j3:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.at(this.y)
v=this.aw(this.y)
this.d.fC(w,v,x)}},"$1","gfH",4,0,9],
jb:[function(a){var z
H.f(a,"$isbn")
this.a.focus()
this.f=!0
this.ce(a)
z=this.c8(a)
if(this.e.ih(z))a.preventDefault()},"$1","gfP",4,0,14],
j9:[function(a){var z
H.f(a,"$isbn")
this.ce(a)
z=this.c8(a)
if(this.e.ie(z))a.preventDefault()},"$1","gfN",4,0,14],
ja:[function(a){var z
H.f(a,"$isbn")
this.ce(a)
z=this.c8(a)
if(this.e.ig(z))a.preventDefault()},"$1","gfO",4,0,14]}}],["","",,D,{"^":"",ck:{"^":"b;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aI:[function(a){var z
H.f(a,"$isp")
z=this.d
if(!(z==null))z.C(a)},function(){return this.aI(null)},"iF","$1","$0","geU",0,2,1],
$isa3:1,
$isaG:1},a3:{"^":"b;",$isaG:1},i8:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aI:function(a){var z=this.Q
if(!(z==null))z.C(a)},
fB:[function(a){var z
H.f(a,"$isp")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.fB(null)},"iZ","$1","$0","gdv",0,2,1],
j4:[function(a){var z,y,x
H.w(a,"$isi",[D.a3],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f5(x))return!1}return!0},"$1","gfI",4,0,37],
iN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdv(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.ck)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.a=H.d([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.aI(z)},"$2","gfl",8,0,26],
j6:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdv(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.ck)C.a.L(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.a=H.d([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.L(s.a,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aI(z)},"$2","gfK",8,0,26],
f5:function(a){var z=C.a.b3(this.e,a)
return z},
$asi:function(){return[D.a3]},
$asam:function(){return[D.a3]}},iN:{"^":"b;",$isa3:1,$isaG:1},jr:{"^":"b;",$isa3:1,$isaG:1},jC:{"^":"b;",$isa3:1,$isaG:1},jD:{"^":"b;",$isa3:1,$isaG:1},jE:{"^":"b;",$isa3:1,$isaG:1}}],["","",,V,{"^":"",
nI:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iB",8,0,51],
nw:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bl(a-b,z)
return(a<0?a+z:a)+b},
S:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.d.ez($.r.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.d([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.S(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.ag(z[u],x))}return z},
dG:function(a,b){return C.d.iA(Math.pow(b,C.I.cG(Math.log(H.my(a))/Math.log(b))))},
v:{"^":"b;a,b,c",
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
return new V.v(z,y,x)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
ax:{"^":"b;a,b,c,d",
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
return new V.ax(z,y,x,w)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
cp:{"^":"b;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscp")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cp(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cp))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
y=V.bv(H.d([this.a,this.d,this.r],z),3,0)
x=V.bv(H.d([this.b,this.e,this.x],z),3,0)
w=V.bv(H.d([this.c,this.f,this.y],z),3,0)
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
aD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
cK:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.bb()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isaD")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aE(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.V(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
z=b.z
if(!$.r.$2(z,this.z))return!1
z=b.Q
if(!$.r.$2(z,this.Q))return!1
z=b.ch
if(!$.r.$2(z,this.ch))return!1
z=b.cx
if(!$.r.$2(z,this.cx))return!1
z=b.cy
if(!$.r.$2(z,this.cy))return!1
z=b.db
if(!$.r.$2(z,this.db))return!1
z=b.dx
if(!$.r.$2(z,this.dx))return!1
return!0},
i:function(a){return this.M()},
ef:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bv(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bv(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bv(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bv(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
M:function(){return this.ef("",3,0)},
E:function(a){return this.ef(a,3,0)},
p:{
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bb:function(){return V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eq:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.B(c)))
y=b.ax(z)
x=y.u(0,Math.sqrt(y.B(y)))
w=z.ax(x)
v=new V.F(a.a,a.b,a.c)
return V.aE(x.a,w.a,z.a,x.P(0).B(v),x.b,w.b,z.b,w.P(0).B(v),x.c,w.c,z.c,z.P(0).B(v),0,0,0,1)}}},
R:{"^":"b;a,b",
J:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.R(this.a*b,this.b*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
V:{"^":"b;a,b,c",
D:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
aH:{"^":"b;a,b,c,d",
k:function(a,b){return new V.aH(this.a*b,this.b*b,this.c*b,this.d*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aH))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
eA:{"^":"b;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eA))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"},
p:{
eB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eA(a,b,c,d)}}},
X:{"^":"b;a,b",
i0:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,27],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.X(z*b,y*b)},
u:function(a,b){var z,y
if($.r.$2(b,0))return new V.X(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.X(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
F:{"^":"b;a,b,c",
i0:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,27],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.F(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.F(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.r.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
eo:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hw:{"^":"dW;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bU:function(a){var z=V.nw(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.C(a)},
sd_:function(a,b){},
scM:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bU(z)}z=new D.J("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.S(z)}},
scO:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bU(z)}z=new D.J("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.S(z)}},
sa_:function(a,b){var z,y
b=this.bU(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.q])
z.b=!0
this.S(z)}},
scN:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.S(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.q])
z.b=!0
this.S(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.q])
z.b=!0
this.S(z)}},
am:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
p:{
cU:function(){var z=new U.hw()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dY:{"^":"ag;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aY:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dY))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")},
p:{
dZ:function(a){var z=new U.dY()
z.a=a
return z}}},eb:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
S:[function(a){var z
H.f(a,"$isp")
z=this.e
if(!(z==null))z.C(a)},function(){return this.S(null)},"aj","$1","$0","gaJ",0,2,1],
iM:[function(a,b){var z,y,x,w,v,u,t
z=U.ag
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfk",8,0,25],
j5:[function(a,b){var z,y,x,w,v,u,t
z=U.ag
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.h(x,w)
C.a.L(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfJ",8,0,25],
aY:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aw(z,z.length,0,[H.z(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aY(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bb():x
z=this.e
if(!(z==null))z.aq(0)}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eb))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.T(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ag]},
$asam:function(){return[U.ag]},
$isag:1},ag:{"^":"dW;"},k9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
S:[function(a){var z
H.f(a,"$isp")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.S(null)},"aj","$1","$0","gaJ",0,2,1],
b1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdU()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.h(this.gc2(),y)
C.a.h(z.a,x)
x=this.a.c.gep()
x.toString
z=H.h(this.gc3(),y)
C.a.h(x.a,z)
z=this.a.c.gbP()
z.toString
y=H.h(this.gc4(),y)
C.a.h(z.a,y)
return!0},
fg:[function(a){H.f(a,"$isp")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc2",4,0,2],
fh:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isp"),"$isbG")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.X(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.X(y.a,y.b).k(0,2).u(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.X(x.a,x.b).k(0,2).u(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
this.b.sT(0)
y=y.J(0,a.z)
this.Q=new V.X(y.a,y.b).k(0,2).u(0,z.ga9())}this.aj()},"$1","gc3",4,0,2],
fi:[function(a){var z,y,x
H.f(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sT(y*10*x)
this.aj()}},"$1","gc4",4,0,2],
aY:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.ch=y
x=b.y
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aE(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isag:1},ka:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
S:[function(a){var z
H.f(a,"$isp")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.S(null)},"aj","$1","$0","gaJ",0,2,1],
b1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdU()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.h(this.gc2(),y)
C.a.h(z.a,x)
x=this.a.c.gep()
x.toString
z=H.h(this.gc3(),y)
C.a.h(x.a,z)
z=this.a.c.gbP()
z.toString
x=H.h(this.gc4(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.h(this.gfd(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.h(this.gfe(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.h(this.gh9(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.h(this.gh8(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.h(this.gh7(),y)
C.a.h(z.a,y)
return!0},
an:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.X(z,y)},
fg:[function(a){a=H.k(H.f(a,"$isp"),"$isbG")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc2",4,0,2],
fh:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isp"),"$isbG")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.X(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.an(new V.X(y.a,y.b).k(0,2).u(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.an(new V.X(x.a,x.b).k(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.an(new V.X(y.a,y.b).k(0,2).u(0,z.ga9()))}this.aj()},"$1","gc3",4,0,2],
fi:[function(a){var z,y,x
H.f(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.aj()}},"$1","gc4",4,0,2],
iJ:[function(a){if(H.k(H.f(a,"$isp"),"$isen").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfd",4,0,2],
iK:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isp"),"$isbG")
if(!J.T(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.an(new V.X(x.a,x.b).k(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.an(new V.X(y.a,y.b).k(0,2).u(0,z.ga9()))
this.aj()},"$1","gfe",4,0,2],
jf:[function(a){H.f(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh9",4,0,2],
je:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isp"),"$iseP")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.X(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.an(new V.X(y.a,y.b).k(0,2).u(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.an(new V.X(x.a,x.b).k(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.an(new V.X(y.a,y.b).k(0,2).u(0,z.ga9()))}this.aj()},"$1","gh8",4,0,2],
jd:[function(a){var z,y,x
H.f(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.aj()}},"$1","gh7",4,0,2],
aY:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.dy=y
x=b.y
this.c.am(0,x)
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aE(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aE(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isag:1},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
S:function(a){var z=this.r
if(!(z==null))z.C(a)},
b1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.h(this.gfj(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iL:[function(a){var z,y,x,w
H.f(a,"$isp")
if(!J.T(this.b,this.a.b.c))return
H.k(a,"$isd5")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.q])
z.b=!0
this.S(z)}},"$1","gfj",4,0,2],
aY:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aE(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isag:1}}],["","",,M,{"^":"",hx:{"^":"am;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a3:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.C(a)},function(){return this.a3(null)},"de","$1","$0","gW",0,2,1],
j7:[function(a,b){var z,y,x,w,v,u,t
z=M.aI
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfL",8,0,24],
j8:[function(a,b){var z,y,x,w,v,u,t
z=M.aI
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.h(x,w)
C.a.L(t.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfM",8,0,24],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.G();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$asi:function(){return[M.aI]},
$asam:function(){return[M.aI]},
$isaI:1},hC:{"^":"b;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a3:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.C(a)},function(){return this.a3(null)},"de","$1","$0","gW",0,2,1],
sb2:function(a){var z,y,x
if(a==null)a=new X.hY()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.ci])
z.b=!0
this.a3(z)}},
sbd:function(a,b){var z,y,x
if(b==null)b=X.cV(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.de])
z.b=!0
this.a3(z)}},
sbe:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.c8])
z.b=!0
this.a3(z)}},
aa:function(a){a.cR(this.c)
this.b.Z(a)
this.a.Z(a)
this.d.am(0,a)
this.d.aa(a)
this.a.aF(a)
this.b.toString
a.cQ()},
$isaI:1},hP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a3:[function(a){var z
H.f(a,"$isp")
z=this.x
if(!(z==null))z.C(a)},function(){return this.a3(null)},"de","$1","$0","gW",0,2,1],
iR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.b7()
s.a=H.d([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfq",8,0,10],
iS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.b7()
s.a=H.d([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.h(x,w)
C.a.L(s.a,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfs",8,0,10],
sb2:function(a){var z,y,x
if(a==null)a=X.ev(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.ci])
z.b=!0
this.a3(z)}},
sbd:function(a,b){var z,y,x
if(b==null)b=X.cV(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.de])
z.b=!0
this.a3(z)}},
sbe:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.h(this.gW(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.c8])
z.b=!0
this.a3(z)}},
gt:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aa:function(a){var z
a.cR(this.c)
this.b.Z(a)
this.a.Z(a)
z=this.c
if(z!=null)z.am(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.G();)z.d.am(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.G();)z.d.aa(a)
this.a.toString
a.cy.aE()
a.db.aE()
this.b.toString
a.cQ()},
$isaI:1},aI:{"^":"b;"}}],["","",,A,{"^":"",dO:{"^":"b;a,b,c"},hk:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hN:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dT:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ep:{"^":"db;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aT,0aA,0aU,0by,0dV,0dW,0bz,0bA,0dX,0dY,0bB,0bC,0dZ,0e_,0bD,0e0,0e1,0bE,0e2,0e3,0bF,0bG,0bH,0e4,0e5,0bI,0bJ,0e6,0e7,0bK,0e8,0cA,0e9,0cB,0ea,0cC,0eb,0cD,0ec,0cE,0ed,0cF,a,b,0c,0d,0e,0f,0r",
eN:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.ap("")
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
a1.hc(z)
a1.hj(z)
a1.hd(z)
a1.hr(z)
a1.hs(z)
a1.hl(z)
a1.hw(z)
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
v=this.x
z=new P.ap("")
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
v.hg(z)
v.hb(z)
v.he(z)
v.hh(z)
v.hp(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hn(z)
v.ho(z)}v.hk(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.d([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.F(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hf(z)
v.hm(z)
v.hq(z)
v.ht(z)
v.hu(z)
v.hv(z)
v.hi(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.j])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.c)z.a+="   setDiffuseColor();\n"
if(v.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.c)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.c)C.a.h(o,"emission()")
if(v.r!==C.c)C.a.h(o,"reflect(refl)")
if(v.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.F(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.en(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaK")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaK")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaK")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaK")
if(a1.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdk")
if(a1.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaK")
if(a1.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaK")
this.k3=H.d([],[A.aK])
y=a1.aT
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.x("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaK"))}}y=a1.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.h:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isaj")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.h:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isaj")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.aT=H.k(this.r.n(0,"diffuseTxt"),"$isaq")
this.aU=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.h:this.aA=H.k(this.r.n(0,"diffuseTxt"),"$isaj")
this.aU=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.by=H.k(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dV=H.k(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.bz=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.h:this.dW=H.k(this.r.n(0,"invDiffuseTxt"),"$isaj")
this.bz=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bC=H.k(this.r.n(0,"shininess"),"$isY")
this.bA=H.k(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dX=H.k(this.r.n(0,"specularTxt"),"$isaq")
this.bB=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.h:this.dY=H.k(this.r.n(0,"specularTxt"),"$isaj")
this.bB=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.f:this.dZ=H.k(this.r.n(0,"bumpTxt"),"$isaq")
this.bD=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.h:this.e_=H.k(this.r.n(0,"bumpTxt"),"$isaj")
this.bD=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.e0=H.k(this.r.n(0,"envSampler"),"$isaj")
this.e1=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bE=H.k(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.e2=H.k(this.r.n(0,"reflectTxt"),"$isaq")
this.bF=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.h:this.e3=H.k(this.r.n(0,"reflectTxt"),"$isaj")
this.bF=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bG=H.k(this.r.n(0,"refraction"),"$isY")
this.bH=H.k(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.e4=H.k(this.r.n(0,"refractTxt"),"$isaq")
this.bI=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.h:this.e5=H.k(this.r.n(0,"refractTxt"),"$isaj")
this.bI=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bJ=H.k(this.r.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.i:break
case C.f:this.e6=H.k(this.r.n(0,"alphaTxt"),"$isaq")
this.bK=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.h:this.e7=H.k(this.r.n(0,"alphaTxt"),"$isaj")
this.bK=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cA=H.d([],[A.f1])
this.cB=H.d([],[A.f2])
this.cC=H.d([],[A.f3])
this.cD=H.d([],[A.f4])
this.cE=H.d([],[A.f5])
this.cF=H.d([],[A.f6])
if(a1.k2){y=a1.z
if(y>0){this.e8=H.f(this.r.n(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.cA;(x&&C.a).h(x,new A.f1(m,l,k))}}y=a1.Q
if(y>0){this.e9=H.f(this.r.n(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isY")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.cB;(x&&C.a).h(x,new A.f2(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ea=H.f(this.r.n(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.cC;(x&&C.a).h(x,new A.f3(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eb=H.f(this.r.n(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isaq")
x=this.cD;(x&&C.a).h(x,new A.f4(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ec=H.f(this.r.n(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdk")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isaj")
x=this.cE;(x&&C.a).h(x,new A.f5(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ed=H.f(this.r.n(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isY")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isY")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isaq")
x=this.cF;(x&&C.a).h(x,new A.f6(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ak:function(a,b,c){b.a.uniform1i(b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.d5(c)
b.a.uniform1i(b.d,0)}},
p:{
iv:function(a,b){var z,y
z=a.aA
y=new A.ep(b,z)
y.da(b,z)
y.eN(a,b)
return y}}},iy:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aT,aA,aU",
hc:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aT+"];\n"
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
hj:function(a){var z
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
hd:function(a){var z
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
hr:function(a){var z,y
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
hs:function(a){var z,y
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
hl:function(a){var z
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
hw:function(a){var z
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
au:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aG(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hg:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.au(a,z,"emission")
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
hb:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.au(a,z,"ambient")
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
he:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"diffuse")
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
hh:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"invDiffuse")
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
hp:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.au(a,z,"specular")
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
hk:function(a){var z,y
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
hn:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.au(a,z,"reflect")
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
ho:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.au(a,z,"refract")
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
hf:function(a){var z,y
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
hm:function(a){var z,y
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
hq:function(a){var z,y
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
ht:function(a){var z,y,x
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
hu:function(a){var z,y,x
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
hv:function(a){var z,y,x
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
hi:function(a){var z
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
i:function(a){return this.aA}},f1:{"^":"b;a,b,c"},f4:{"^":"b;a,b,c,d,e,f,r,x"},f2:{"^":"b;a,b,c,d,e,f,r"},f5:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f3:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},db:{"^":"cM;",
da:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
en:function(a,b,c){var z,y,x
this.c=this.dq(b,35633)
this.d=this.dq(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fR(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.t(P.x("Failed to link shader: "+H.l(x)))}this.h2()
this.h4()},
Z:function(a){a.a.useProgram(this.e)
this.f.hN()},
dq:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fR(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.x("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
h2:function(){var z,y,x,w,v,u
z=H.d([],[A.dO])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dO(y,v.name,u))}this.f=new A.hk(z)},
h4:function(){var z,y,x,w,v,u
z=H.d([],[A.ac])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hJ(v.type,v.size,v.name,u))}this.r=new A.jV(z)},
aL:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dj(z,y,b,a,c)},
f6:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dj(z,y,b,a,c)},
f7:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aj(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bu:function(a,b){return new P.fk(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hJ:function(a,b,c,d){switch(a){case 5120:return this.aL(b,c,d)
case 5121:return this.aL(b,c,d)
case 5122:return this.aL(b,c,d)
case 5123:return this.aL(b,c,d)
case 5124:return this.aL(b,c,d)
case 5125:return this.aL(b,c,d)
case 5126:return new A.Y(this.a,this.e,c,d)
case 35664:return new A.jQ(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jT(this.a,this.e,c,d)
case 35667:return new A.jR(this.a,this.e,c,d)
case 35668:return new A.jS(this.a,this.e,c,d)
case 35669:return new A.jU(this.a,this.e,c,d)
case 35674:return new A.jX(this.a,this.e,c,d)
case 35675:return new A.dk(this.a,this.e,c,d)
case 35676:return new A.aK(this.a,this.e,c,d)
case 35678:return this.f6(b,c,d)
case 35680:return this.f7(b,c,d)
case 35670:throw H.a(this.bu("BOOL",c))
case 35671:throw H.a(this.bu("BOOL_VEC2",c))
case 35672:throw H.a(this.bu("BOOL_VEC3",c))
case 35673:throw H.a(this.bu("BOOL_VEC4",c))
default:throw H.a(P.x("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cj:{"^":"b;a,b",
i:function(a){return this.b}},eD:{"^":"db;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ac:{"^":"b;"},jV:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
hS:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.hS("\n")}},P:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jR:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jS:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jU:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jP:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dj:function(a,b,c,d,e){var z=new A.jP(a,b,c,e)
z.f=d
z.e=P.ik(d,0,!1,P.n)
return z}}},Y:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jQ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jT:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jX:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dk:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.br(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aK:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.br(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aj:{"^":"ac;a,b,c,d",
d5:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dz:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
z=F.cu()
F.bR(z,b,c,d,a,1,0,0,1)
F.bR(z,b,c,d,a,0,1,0,3)
F.bR(z,b,c,d,a,0,0,1,2)
F.bR(z,b,c,d,a,-1,0,0,0)
F.bR(z,b,c,d,a,0,-1,0,0)
F.bR(z,b,c,d,a,0,0,-1,3)
z.al()
return z},
cB:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bR:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.F(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.F(t+h,s+f,r+g)
z.b=q
p=new V.F(t-h,s-f,r-g)
z.c=p
o=new V.F(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cB(y)
k=F.cB(z.b)
j=F.dI(d,e,new F.mh(z,F.cB(z.c),F.cB(z.d),k,l,c),b)
if(j!=null)a.b8(j)},
fV:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.cu()
y=b?-1:1
x=-6.283185307179586/f
w=H.d([],[F.ad])
v=z.a
u=new V.F(0,0,y)
u=u.u(0,Math.sqrt(u.B(u)))
C.a.h(w,v.hz(new V.aH(a,-1,-1,-1),new V.ax(1,1,1,1),new V.V(0,0,d),new V.F(0,0,y),new V.R(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.F(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cb(new V.aH(a,-1,-1,-1),null,new V.ax(n,l,m,1),new V.V(r*p,q*p,d),new V.F(0,0,y),new V.R(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dJ(w)
return z},
fS:function(a,b,c,d,e,f){return F.fT(!0,c,d,new F.mD(a,f),e)},
fT:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dI(c,e,new F.mF(d),null)
if(z==null)return
z.al()
z.ck()
if(b)z.b8(F.fV(3,!1,!1,1,new F.mG(d),e))
z.b8(F.fV(1,!0,!1,-1,new F.mH(d),e))
return z},
h6:function(a,b,c){var z,y
z={}
z.a=b
if(H.h(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)z.a=new F.nr()
y=F.dz(a,null,new F.ns(z),c)
y.ck()
return y},
ha:function(a,b,c,d){return F.fU(c,a,d,b,new F.nu())},
mW:function(a,b,c,d,e,f){return F.fU(d,a,e,b,new F.mX(f,c))},
fU:function(a,b,c,d,e){var z=F.dI(a,b,new F.mE(H.h(e,{func:1,ret:V.V,args:[P.q]}),d,b,c),null)
if(z==null)return
z.al()
z.ck()
return z},
dI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.cu()
y=H.d([],[F.ad])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cb(null,null,new V.ax(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cv(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cb(null,null,new V.ax(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cv(d))}}z.d.hy(a+1,b+1,y)
return z},
mh:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cL(z.b,b).cL(z.d.cL(z.c,b),c)
a.sa_(0,new V.V(y.a,y.b,y.c))
a.sex(y.u(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.sdN(new V.aH(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mD:{"^":"m:6;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mF:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa_(0,new V.V(y,u,w))
u=new V.F(y,u,w)
a.sex(u.u(0,Math.sqrt(u.B(u))))
a.sdN(new V.aH(1-c,2+c,-1,-1))}},
mG:{"^":"m:21;a",
$1:function(a){return this.a.$2(a,1)}},
mH:{"^":"m:21;a",
$1:function(a){return this.a.$2(1-a,0)}},
nr:{"^":"m:6;",
$2:function(a,b){return 0}},
ns:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.F(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.B(x))).k(0,1+z)
a.sa_(0,new V.V(z.a,z.b,z.c))}},
nu:{"^":"m:17;",
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}},
mX:{"^":"m:17;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.V(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mE:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dJ(y.$1(z),x)
x=J.dJ(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.B(x)))
u=new V.F(1,0,0)
y=v.ax(!v.w(0,u)?new V.F(0,0,1):u)
t=y.u(0,Math.sqrt(y.B(y)))
y=t.ax(v)
u=y.u(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa_(0,w.D(0,new V.V(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ao:{"^":"b;0a,0b,0c,0d,0e",
az:function(){if(!this.gb5()){C.a.L(this.a.a.d.b,this)
this.a.a.a2()}this.ca()
this.cb()
this.fS()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
h1:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
cb:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fS:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
f0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eo())return
return v.u(0,Math.sqrt(v.B(v)))},
f3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.B(z)))
z=w.J(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.ax(z.u(0,Math.sqrt(z.B(z))))
return z.u(0,Math.sqrt(z.B(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.f0()
if(z==null){z=this.f3()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
f_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eo())return
return v.u(0,Math.sqrt(v.B(v)))},
f2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.J(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.J(0,u).k(0,l).D(0,u).J(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.B(z)))
z=k.ax(m)
z=z.u(0,Math.sqrt(z.B(z))).ax(k)
m=z.u(0,Math.sqrt(z.B(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.f_()
if(z==null){z=this.f2()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
ghF:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var z,y
if(this.gb5())return a+"disposed"
z=a+C.b.ag(J.a9(this.a.e),0)+", "+C.b.ag(J.a9(this.b.e),0)+", "+C.b.ag(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.E("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.ao()
y=a.a
if(y==null)H.t(P.x("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.x("May not create a face with vertices attached to different shapes."))
z.cf(a)
z.cg(b)
z.h1(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
hS:{"^":"b;"},
jn:{"^":"hS;",
b7:function(a,b,c){var z,y
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
d1:{"^":"b;0a,0b",
az:function(){if(!this.gb5()){C.a.L(this.a.a.c.b,this)
this.a.a.a2()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
cb:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ag(J.a9(this.a.e),0)+", "+C.b.ag(J.a9(this.b.e),0)},
M:function(){return this.E("")},
p:{
i9:function(a,b){var z,y,x
z=new F.d1()
y=a.a
if(y==null)H.t(P.x("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.t(P.x("May not create a line with vertices attached to different shapes."))
z.cf(a)
z.cg(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
ia:{"^":"b;"},
jO:{"^":"ia;",
b7:function(a,b,c){var z,y
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
d9:{"^":"b;0a",
az:function(){var z=this.a
if(z!=null){C.a.L(z.a.b.b,this)
this.a.a.a2()}this.fR()},
fR:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ag(J.a9(z.e),0)},
M:function(){return this.E("")}},
eC:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hH())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d9()
if(r.a==null)H.t(P.x("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.C(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.i9(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bB(p,o,m)}z=this.e
if(!(z==null))z.aq(0)},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.aq(0)
return y},
fb:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ad],"$asc")
H.w(e,"$isc",[P.n],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b7(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
i4:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ad],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.fb(a,v,y,u,t))b.b8(u)}this.a.A()
this.c.cU()
this.d.cU()
this.b.io()
this.c.cV(new F.jO())
this.d.cV(new F.jn())
z=this.e
if(!(z==null))z.aq(0)},
hA:function(a){this.i4(new F.kp(),new F.iI())},
ck:function(){return this.hA(null)},
dP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
v=b.gd6(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dT])
for(r=0,q=0;q<w;++q){p=b.hB(q)
o=p.gd6(p)
C.a.m(s,q,new Z.dT(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].i1(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.br(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cQ(new Z.fg(34962,j),s,b)
i.b=H.d([],[Z.cn])
if(this.b.b.length!==0){x=P.n
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.F(z,"\n")},
aW:function(a){var z=this.e
if(!(z==null))z.C(a)},
a2:function(){return this.aW(null)},
p:{
cu:function(){var z,y
z=new F.eC()
y=new F.kk(z)
y.b=!1
y.c=H.d([],[F.ad])
z.a=y
y=new F.ji(z)
y.b=H.d([],[F.d9])
z.b=y
y=new F.jh(z)
y.b=H.d([],[F.d1])
z.c=y
y=new F.jg(z)
y.b=H.d([],[F.ao])
z.d=y
z.e=null
return z}}},
jg:{"^":"b;a,0b",
dJ:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ad],"$asc")
z=H.d([],[F.ao])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.e(a,v)
v=a[v]
if(w>=u)return H.e(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bB(x,v,u))}}return z},
hy:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ad],"$asc")
z=H.d([],[F.ao])
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
C.a.h(z,F.bB(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bB(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bB(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b7(0,v,t)){v.az()
break}}}}},
cU:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghF(x)
if(y)x.az()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cs())x=!1
return x},
cr:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cq())x=!1
return x},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.F(z,"\n")},
M:function(){return this.E("")}},
jh:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b7(0,v,t)){v.az()
break}}}}},
cU:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.T(x.a,x.b)
if(y)x.az()}},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.d([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.F(z,"\n")},
M:function(){return this.E("")}},
ji:{"^":"b;a,0b",
gl:function(a){return this.b.length},
io:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.az()}},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.F(z,"\n")},
M:function(){return this.E("")}},
ad:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cv:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cb(this.cx,x,u,z,y,w,v,a,t)},
hH:function(){return this.cv(null)},
sa_:function(a,b){var z
if(!J.T(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a2()}},
sex:function(a){var z
if(!J.T(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
sdN:function(a){var z
if(!J.T(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a2()}},
i1:function(a){var z,y
z=J.M(a)
if(z.w(a,$.$get$aB())){z=this.f
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aT())){z=this.r
y=[P.q]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aS())){z=this.x
y=[P.q]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aU())){z=this.y
y=[P.q]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.w(a,$.$get$aV())){z=this.z
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bL())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bM())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.w(a,$.$get$bp()))return H.d([this.ch],[P.q])
else if(z.w(a,$.$get$aR())){z=this.cx
y=[P.q]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.q])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.K(0,new F.ku(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.aq(0)}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.K(0,new F.kt(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.aq(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var z,y,x
z=H.d([],[P.j])
C.a.h(z,C.b.ag(J.a9(this.e),0))
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
C.a.h(z,V.S(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.F(z,", ")
return a+"{"+x+"}"},
M:function(){return this.E("")},
p:{
cb:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ad()
y=new F.ks(z)
y.b=H.d([],[F.d9])
z.b=y
y=new F.ko(z)
x=[F.d1]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.kl(z)
x=[F.ao]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$fd()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aT().a)!==0?e:null
z.x=(x&$.$get$aS().a)!==0?b:null
z.y=(x&$.$get$aU().a)!==0?f:null
z.z=(x&$.$get$aV().a)!==0?g:null
z.Q=(x&$.$get$fe().a)!==0?c:null
z.ch=(x&$.$get$bp().a)!==0?i:0
z.cx=(x&$.$get$aR().a)!==0?a:null
return z}}},
ku:{"^":"m:11;a",
$1:function(a){var z,y
H.f(a,"$isao")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kt:{"^":"m:11;a",
$1:function(a){var z,y
H.f(a,"$isao")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kk:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.x("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a2()
return!0},
dK:function(a,b,c,d,e,f,g,h,i){var z=F.cb(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bv:function(a,b,c,d,e,f){return this.dK(a,null,b,c,null,d,e,f,0)},
hz:function(a,b,c,d,e,f){return this.dK(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cs()
return!0},
cr:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cq()
return!0},
hD:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.T(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
this.A()
z=H.d([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.F(z,"\n")},
M:function(){return this.E("")}},
kl:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.ao]})
C.a.K(this.b,b)
C.a.K(this.c,new F.km(this,b))
C.a.K(this.d,new F.kn(this,b))},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.F(z,"\n")},
M:function(){return this.E("")}},
km:{"^":"m:11;a,b",
$1:function(a){H.f(a,"$isao")
if(!J.T(a.a,this.a))this.b.$1(a)}},
kn:{"^":"m:11;a,b",
$1:function(a){var z
H.f(a,"$isao")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
ko:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.F(z,"\n")},
M:function(){return this.E("")}},
kq:{"^":"b;"},
kp:{"^":"kq;",
b7:function(a,b,c){return J.T(b.f,c.f)}},
kr:{"^":"b;"},
iI:{"^":"kr;",
b8:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ad],"$asc")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.B(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){t=a[x]
s=z.u(0,Math.sqrt(u))
if(!J.T(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.C(null)}}}return}},
ks:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
E:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.F(z,"\n")},
M:function(){return this.E("")}}}],["","",,O,{"^":"",iu:{"^":"c8;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
X:[function(a){var z
H.f(a,"$isp")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.X(null)},"fp","$1","$0","gc7",0,2,1],
fW:[function(a){H.f(a,"$isp")
this.a=null
this.X(a)},function(){return this.fW(null)},"jc","$1","$0","gfV",0,2,1],
iO:[function(a,b){var z=V.aD
z=new D.c1(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.X(z)},"$2","gfm",8,0,22],
iP:[function(a,b){var z=V.aD
z=new D.c2(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.X(z)},"$2","gfn",8,0,22],
dl:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a7(z.e.length+3,4)*4
x=C.e.a7(z.f.length+3,4)*4
w=C.e.a7(z.r.length+3,4)*4
v=C.e.a7(z.x.length+3,4)*4
u=C.e.a7(z.y.length+3,4)*4
t=C.e.a7(z.z.length+3,4)*4
s=C.e.a7(this.e.a.length+3,4)*4
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
a6=$.$get$aB()
if(c){z=$.$get$aT()
a6=new Z.bo(a6.a|z.a)}if(b){z=$.$get$aS()
a6=new Z.bo(a6.a|z.a)}if(a){z=$.$get$aU()
a6=new Z.bo(a6.a|z.a)}if(a0){z=$.$get$aV()
a6=new Z.bo(a6.a|z.a)}if(a2){z=$.$get$aR()
a6=new Z.bo(a6.a|z.a)}return new A.iy(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
V:function(a,b){H.w(a,"$isc",[T.df],"$asc")
if(b!=null)if(!C.a.b3(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.G();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cY(x)}}},
eu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dl()
y=H.f(a.fr.j(0,z.aA),"$isep")
if(y==null){y=A.iv(z,a.a)
a.dM(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aU
z=b.e
if(!(z instanceof Z.cQ)){b.e=null
z=null}if(z==null||!z.d.w(0,w)){z=x.r1
if(z)b.d.al()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cr()
u.a.cr()
u=u.e
if(!(u==null))u.aq(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hD()
t=t.e
if(!(t==null))t.aq(0)}r=b.d.dP(new Z.fh(a.a),w)
r.aC($.$get$aB()).e=this.a.y.c
if(z)r.aC($.$get$aT()).e=this.a.Q.c
if(v)r.aC($.$get$aS()).e=this.a.z.c
if(x.rx)r.aC($.$get$aU()).e=this.a.ch.c
if(u)r.aC($.$get$aV()).e=this.a.cx.c
if(x.x1)r.aC($.$get$aR()).e=this.a.cy.c
b.e=r}z=T.df
q=H.d([],[z])
this.a.Z(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga0(u)
v=v.db
v.toString
v.ai(u.ab(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga0(u)
t=a.dx
t=u.k(0,t.ga0(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ai(u.ab(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gil()
t=a.dx
t=u.k(0,t.ga0(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ai(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ai(u.ab(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ai(u.ab(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ai(C.t.ab(u,!0))}if(x.aT>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.q],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.e(t,o)
t=t[o]
u.toString
H.f(t,"$isaD")
u=u.k3
if(o>=u.length)return H.e(u,o)
u=u[o]
n=new Float32Array(H.br(H.w(t.ab(0,!0),"$isc",v,"$asc")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.V(q,this.f.d)
v=this.a
u=this.f.d
v.ak(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.V(q,this.f.e)
v=this.a
u=this.f.e
v.ae(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.i:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.V(q,this.r.d)
v=this.a
u=this.r.d
v.ak(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.V(q,this.r.e)
v=this.a
u=this.r.e
v.ae(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.i:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.V(q,this.x.d)
v=this.a
u=this.x.d
v.ak(v.aT,v.aU,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.V(q,this.x.e)
v=this.a
u=this.x.e
v.ae(v.aA,v.aU,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.by
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.V(q,this.y.d)
v=this.a
u=this.y.d
v.ak(v.dV,v.bz,u)
u=this.a
v=this.y.f
u=u.by
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.V(q,this.y.e)
v=this.a
u=this.y.e
v.ae(v.dW,v.bz,u)
u=this.a
v=this.y.f
u=u.by
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bA
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bC
u.a.uniform1f(u.d,s)
break
case C.f:this.V(q,this.z.d)
v=this.a
u=this.z.d
v.ak(v.dX,v.bB,u)
u=this.a
v=this.z.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bC
v.a.uniform1f(v.d,s)
break
case C.h:this.V(q,this.z.e)
v=this.a
u=this.z.e
v.ae(v.dY,v.bB,u)
u=this.a
v=this.z.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bC
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e8
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.e(t,l)
i=t[l]
t=m.cY(j.a)
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e9
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cB
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbb(j)
s=i.b
h=t.gd0(t)
g=t.gd1(t)
t=t.gd2(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bj(j.gbb(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gq(j)
g=i.d
h=t.gbO()
s=t.gbk()
t=t.gbw()
g.a.uniform3f(g.d,h,s,t)
t=j.gcl()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcm()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcn()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ea
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbb(j)
s=i.b
h=t.gd0(t)
g=t.gd1(t)
t=t.gd2(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j).jj()
g=i.c
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
g.a.uniform3f(g.d,h,s,t)
t=m.bj(j.gbb(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gq(j)
s=i.e
h=t.gbO()
g=t.gbk()
t=t.gbw()
s.a.uniform3f(s.d,h,g,t)
t=j.gjh()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjg()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcm()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eb
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
s=this.a.cD
if(l>=s.length)return H.e(s,l)
i=s[l]
s=j.gbf()
H.w(q,"$isc",t,"$asc")
if(!C.a.b3(q,s)){s.sc0(q.length)
C.a.h(q,s)}s=j.gcz(j)
h=i.d
g=s.gaQ(s)
f=s.gaR(s)
s=s.gaS()
h.a.uniform3f(h.d,g,f,s)
s=j.gbP()
f=i.b
g=s.gaQ(s)
h=s.gaR(s)
s=s.gaS()
f.a.uniform3f(f.d,g,h,s)
s=j.gbc(j)
h=i.c
g=s.gaQ(s)
f=s.gaR(s)
s=s.gaS()
h.a.uniform3f(h.d,g,f,s)
s=m.cY(j.gcz(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gq(j)
g=i.f
f=h.gbO()
s=h.gbk()
h=h.gbw()
g.a.uniform3f(g.d,f,s,h)
h=j.gbf()
s=h.gbL(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbL(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.ghV(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ec
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.y,u=v.length,t=[P.q],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cE
if(l>=h.length)return H.e(h,l)
i=h[l]
h=j.gbf()
H.w(q,"$isc",s,"$asc")
if(!C.a.b3(q,h)){h.sc0(q.length)
C.a.h(q,h)}e=m.k(0,j.ga0(j))
h=j.ga0(j).bj(new V.V(0,0,0))
g=i.b
f=h.gd0(h)
d=h.gd1(h)
h=h.gd2(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bj(new V.V(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cK(0)
d=i.d
n=new Float32Array(H.br(H.w(new V.cp(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gq(j)
h=i.e
f=d.gbO()
g=d.gbk()
d=d.gbw()
h.a.uniform3f(h.d,f,g,d)
d=j.gbf()
h=d.gbL(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.giI()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gc0())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcl()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcm()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcn()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ed
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cF
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbf()
H.w(q,"$isc",z,"$asc")
if(!C.a.b3(q,t)){t.sc0(q.length)
C.a.h(q,t)}t=j.gbb(j)
s=i.b
h=t.gd0(t)
g=t.gd1(t)
t=t.gd2(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j)
g=i.c
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
g.a.uniform3f(g.d,h,s,t)
t=j.gbP()
s=i.d
h=t.gaQ(t)
g=t.gaR(t)
t=t.gaS()
s.a.uniform3f(s.d,h,g,t)
t=j.gbc(j)
g=i.e
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
g.a.uniform3f(g.d,h,s,t)
t=m.bj(j.gbb(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbf()
s=t.gbL(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbL(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.ghV(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gq(j)
s=i.y
h=t.gbO()
g=t.gbk()
t=t.gbw()
s.a.uniform3f(s.d,h,g,t)
t=j.gjo()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjp()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcm()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.f:this.V(q,this.Q.d)
z=this.a
v=this.Q.d
z.ak(z.dZ,z.bD,v)
break
case C.h:this.V(q,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.e_,z.bD,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga0(v).cK(0)
a.Q=v}z=z.fy
z.toString
z.ai(v.ab(0,!0))}if(x.dy){this.V(q,this.ch)
z=this.a
v=this.ch
z.ae(z.e0,z.e1,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bE
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.f:this.V(q,this.cx.d)
z=this.a
v=this.cx.d
z.ak(z.e2,z.bF,v)
v=this.a
z=this.cx.f
v=v.bE
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.h:this.V(q,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.e3,z.bF,v)
v=this.a
z=this.cx.f
v=v.bE
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bH
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bG
v.a.uniform1f(v.d,t)
break
case C.f:this.V(q,this.cy.d)
z=this.a
v=this.cy.d
z.ak(z.e4,z.bI,v)
v=this.a
z=this.cy.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bG
z.a.uniform1f(z.d,t)
break
case C.h:this.V(q,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.e5,z.bI,v)
v=this.a
z=this.cy.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bG
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bJ
z.a.uniform1f(z.d,u)
break
case C.f:this.V(q,this.db.d)
z=this.a
u=this.db.d
z.ak(z.e6,z.bK,u)
u=this.a
z=this.db.f
u=u.bJ
u.a.uniform1f(u.d,z)
break
case C.h:this.V(q,this.db.e)
z=this.a
u=this.db.e
z.ae(z.e7,z.bK,u)
u=this.a
z=this.db.f
u=u.bJ
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].Z(a)
z=b.e
z.Z(a)
z.aa(a)
z.aF(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dT()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dl().aA}},iw:{"^":"d3;0f,a,b,0c,0d,0e",
fZ:function(a){var z,y
z=this.f
if(!$.r.$2(z,a)){y=this.f
this.f=a
z=new D.J(this.b,y,a,this,[P.q])
z.b=!0
this.a.X(z)}},
b_:function(){this.d8()
this.fZ(1)}},d3:{"^":"b;",
b_:["d8",function(){}],
bq:["eL",function(){}],
h_:function(a){},
h0:function(a){},
hE:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.X(null)}this.b_()
this.h_(null)
this.h0(null)
this.a.X(null)}},ix:{"^":"d3;a,b,0c,0d,0e"},ba:{"^":"d3;0f,a,b,0c,0d,0e",
cc:function(a){var z,y
if(!J.T(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.v])
y.b=!0
this.a.X(y)}},
b_:["d9",function(){this.d8()
this.cc(new V.v(0,0,0))}],
bq:["bm",function(){this.eL()
this.cc(new V.v(1,1,1))}],
sq:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bq()
z=this.a
z.a=null
z.X(null)}this.cc(b)}},iz:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bs:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.X(z)}},
b_:function(){this.d9()
this.bs(1)},
bq:function(){this.bm()
this.bs(1)},
say:function(a){var z
if(a<=0)this.hE(0)
else if(this.c===C.c){this.c=C.i
this.bm()
this.bs(1)
z=this.a
z.a=null
z.X(null)}this.bs(a)}},iA:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bt:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.X(z)}},
b_:function(){this.d9()
this.bt(100)},
bq:function(){this.bm()
this.bt(100)}},jo:{"^":"c8;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
X:[function(a){var z
H.f(a,"$isp")
z=this.e
if(!(z==null))z.C(a)},function(){return this.X(null)},"fp","$1","$0","gc7",0,2,1],
eu:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.f(a.fr.j(0,"Skybox"),"$iseD")
if(z==null){y=a.a
z=new A.eD(y,"Skybox")
z.da(y,"Skybox")
z.en(0,$.jq,$.jp)
z.x=z.f.j(0,"posAttr")
z.y=H.k(z.r.j(0,"fov"),"$isY")
z.z=H.k(z.r.j(0,"ratio"),"$isY")
z.Q=H.k(z.r.j(0,"boxClr"),"$isL")
z.ch=H.k(z.r.j(0,"boxTxt"),"$isaj")
z.cx=H.k(z.r.j(0,"viewMat"),"$isaK")
a.dM(z)}this.a=z}if(b.e==null){y=b.d.dP(new Z.fh(a.a),$.$get$aB())
y.aC($.$get$aB()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.Z(a)}y=a.d
x=a.c
w=this.a
w.Z(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.d5(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga0(x).cK(0)
w=w.cx
w.toString
w.ai(x.ab(0,!0))
y=b.e
if(y instanceof Z.cQ){y.Z(a)
y.aa(a)
y.aF(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dT()
y=this.c
if(y!=null)y.aF(a)}},c8:{"^":"b;"}}],["","",,T,{"^":"",df:{"^":"cM;"},dg:{"^":"df;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
Z:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aF:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jA:{"^":"b;a,0b,0c,0d,0e",
aM:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.a0(z,"load",H.h(new T.jB(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fX:function(a,b,c){var z,y,x,w
b=V.dG(b,2)
z=V.dG(a.width,2)
y=V.dG(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cS(null,null)
x.width=z
x.height=y
w=H.f(C.l.eD(x,"2d"),"$isdV")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mC(w.getImageData(0,0,x.width,x.height))}}},jB:{"^":"m:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fX(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.X.ix(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.hM()}++z.e}}}],["","",,V,{"^":"",hj:{"^":"b;",
b6:function(a,b){return!0},
i:function(a){return"all"},
$isc6:1},c6:{"^":"b;"},eo:{"^":"b;",
b6:["eK",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b6(0,b))return!0
return!1}],
i:["d7",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc6:1},bH:{"^":"eo;0a",
b6:function(a,b){return!this.eK(0,b)},
i:function(a){return"!["+this.d7(0)+"]"}},je:{"^":"b;0a",
eP:function(a){var z,y
if(a.a.length<=0)throw H.a(P.x("May not create a SetMatcher with zero characters."))
z=new H.aZ(0,0,[P.n,P.af])
for(y=new H.em(a,a.gl(a),0,[H.as(a,"y",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
b6:function(a,b){return this.a.bx(0,b)},
i:function(a){var z=this.a
return P.c7(z.gap(z),0,null)},
$isc6:1,
p:{
a8:function(a){var z=new V.je()
z.eP(a)
return z}}},eF:{"^":"b;a,b,0c,0d",
gi5:function(a){return this.b},
F:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eQ(this.a.O(0,b))
w.a=H.d([],[V.c6])
w.c=!1
C.a.h(this.c,w)
return w},
hP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b6(0,a))return w}return},
i:function(a){return this.b}},eN:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h8(this.b,"\n","\\n")
y=H.h8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eO:{"^":"b;a,b,0c",
i:function(a){return this.b}},jJ:{"^":"b;0a,0b,0c",
O:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eF(this,b)
z.c=H.d([],[V.eQ])
this.a.m(0,b,z)}return z},
bh:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eO(this,a)
y=P.j
z.c=new H.aZ(0,0,[y,y])
this.b.m(0,a,z)}return z},
iD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eN])
y=this.c
x=[P.n]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hP(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c7(w,0,null)
throw H.a(P.x("Untokenizable string [state: "+y.gi5(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c7(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eN(o==null?p.b:o,q,t)}++t}}}},eQ:{"^":"eo;b,0c,0a",
i:function(a){return this.b.b+": "+this.d7(0)}}}],["","",,X,{"^":"",ci:{"^":"b;",$isaG:1},hX:{"^":"de;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
as:function(a){var z=this.x
if(!(z==null))z.C(a)},
sdQ:function(a,b){var z
if(this.b){this.b=!1
z=new D.J("clearColor",!0,!1,this,[P.af])
z.b=!0
this.as(z)}},
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
v=C.d.ah(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.ah(w.b*x)
t=C.d.ah(w.c*y)
a.c=t
w=C.d.ah(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
cV:function(a,b,c,d,e,f,g){var z,y
z=new X.hX()
y=new V.ax(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eB(0,0,1,1)
z.r=y
return z}}},hY:{"^":"b;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
Z:function(a){var z
a.cy.bN(V.bb())
z=V.bb()
a.db.bN(z)},
aF:function(a){a.cy.aE()
a.db.aE()},
$isaG:1,
$isci:1},iL:{"^":"b;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
as:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.C(a)},function(){return this.as(null)},"iG","$1","$0","geX",0,2,1],
Z:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aE(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bN(s)
z=$.ew
if(z==null){z=V.eq(new V.V(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.ew=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aY(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bN(r)},
aF:function(a){a.cy.aE()
a.db.aE()},
$isaG:1,
$isci:1,
p:{
ev:function(a,b,c,d,e){var z,y,x,w
z=new X.iL()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null){x=c.gt()
x.toString
w=H.h(z.geX(),{func:1,ret:-1,args:[D.p]})
C.a.h(x.a,w)}x=new D.J("mover",y,z.b,z,[U.ag])
x.b=!0
z.as(x)}x=z.c
if(!$.r.$2(x,b)){y=z.c
z.c=b
x=new D.J("fov",y,b,z,[P.q])
x.b=!0
z.as(x)}x=z.d
if(!$.r.$2(x,d)){y=z.d
z.d=d
x=new D.J("near",y,d,z,[P.q])
x.b=!0
z.as(x)}x=z.e
if(!$.r.$2(x,a)){y=z.e
z.e=a
x=new D.J("far",y,a,z,[P.q])
x.b=!0
z.as(x)}return z}}},de:{"^":"b;"}}],["","",,V,{"^":"",
np:function(a){P.jI(C.G,new V.nq(a))},
nq:{"^":"m:50;a",
$1:function(a){H.f(a,"$isbl")
P.dH(C.d.ez(this.a.ghT(),2)+" fps")}},
iZ:{"^":"b;a,b,0c",
ci:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f9().gcT().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.dG(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dM(this.c).h(0,v)
t=W.i_("radio")
t.checked=x
t.name=z
z=W.aa
W.a0(t,"change",H.h(new V.j_(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dM(this.c).h(0,w.createElement("br"))},
a1:function(a,b,c){return this.ci(a,b,c,!1)},
dG:function(a){var z,y,x,w,v
z=P.f9()
y=P.j
x=P.ih(z.gcT(),y,y)
x.m(0,this.a,a)
w=z.ev(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.ly([],[]).cZ(""),"",v)},
p:{
ez:function(a,b){var z,y
z=new V.iZ(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.t("Failed to find "+a+" for RadioGroup")
return z}}},
j_:{"^":"m:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dG(this.d)}}},
jj:{"^":"b;0a,0b",
eQ:function(a,b){var z,y,x,w,v,u,t
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
t=W.aa
W.a0(z,"scroll",H.h(new V.jm(x),{func:1,ret:-1,args:[t]}),!1,t)},
dL:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.j],"$asc")
this.h3()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iD(C.a.i_(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.h7(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cA(C.S,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.l(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
hx:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.j],"$asc")
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
x=H.f(w.insertCell(-1),"$isdd").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.f(w.insertCell(-1),"$isdd")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
h3:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jJ()
y=P.j
z.a=new H.aZ(0,0,[y,V.eF])
z.b=new H.aZ(0,0,[y,V.eO])
z.c=z.O(0,"Start")
y=z.O(0,"Start").F(0,"Bold")
x=V.a8(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").F(0,"Bold")
x=new V.bH()
w=[V.c6]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a4("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").F(0,"BoldEnd")
x=V.a8(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"Italic")
x=V.a8(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").F(0,"Italic")
x=new V.bH()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a4("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").F(0,"ItalicEnd")
x=V.a8(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"Code")
x=V.a8(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").F(0,"Code")
x=new V.bH()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a4("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").F(0,"CodeEnd")
x=V.a8(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").F(0,"LinkHead")
x=V.a8(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").F(0,"LinkTail")
x=V.a8(new H.a4("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").F(0,"LinkEnd")
y=V.a8(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").F(0,"LinkHead")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a4("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").F(0,"LinkEnd")
y=V.a8(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").F(0,"LinkTail")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").F(0,"Other").a,new V.hj())
x=z.O(0,"Other").F(0,"Other")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.bh("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.bh("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.bh("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.bh("Link")
x=z.O(0,"Other")
x.d=x.a.bh("Other")
this.b=z},
p:{
jk:function(a,b){var z=new V.jj()
z.eQ(a,!0)
return z}}},
jm:{"^":"m:15;a",
$1:function(a){P.eL(C.q,new V.jl(this.a))}},
jl:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,D,{"^":"",
h2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.jk("Test 014",!0)
y=W.cS(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.dL(H.d(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],x))
z.hx(H.d(["controls","shapes"],x))
z.dL(H.d(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.t(P.x("Failed to find an element with the identifier, testCanvas."))
v=E.jG(w,!0,!0,!0,!1)
u=X.cV(!0,!0,!1,null,2000,null,0)
u.sdQ(0,!1)
t=E.e8(null,!0,null,"",null,null)
t.sa8(0,F.ha(30,1,15,0.5))
z=v.f
x=z.a
s=x.createTexture()
x.bindTexture(34067,s)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
r=new T.dg()
r.a=0
r.b=s
r.c=!1
r.d=0
z.aM(r,s,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aM(r,s,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aM(r,s,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aM(r,s,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aM(r,s,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aM(r,s,"../resources/maskonaive/negz.jpg",34074,!1,!1)
q=new O.iu()
z=O.cT(V.aD)
q.e=z
z.aZ(q.gfm(),q.gfn())
z=new O.ba(q,"emission")
z.c=C.c
z.f=new V.v(0,0,0)
q.f=z
z=new O.ba(q,"ambient")
z.c=C.c
z.f=new V.v(0,0,0)
q.r=z
z=new O.ba(q,"diffuse")
z.c=C.c
z.f=new V.v(0,0,0)
q.x=z
z=new O.ba(q,"invDiffuse")
z.c=C.c
z.f=new V.v(0,0,0)
q.y=z
z=new O.iA(q,"specular")
z.c=C.c
z.f=new V.v(0,0,0)
z.ch=100
q.z=z
z=new O.ix(q,"bump")
z.c=C.c
q.Q=z
q.ch=null
z=new O.ba(q,"reflect")
z.c=C.c
z.f=new V.v(0,0,0)
q.cx=z
z=new O.iz(q,"refract")
z.c=C.c
z.f=new V.v(0,0,0)
z.ch=1
q.cy=z
z=new O.iw(q,"alpha")
z.c=C.c
z.f=1
q.db=z
z=new D.i8()
z.bn(D.a3)
z.e=H.d([],[D.ck])
z.f=H.d([],[D.iN])
z.r=H.d([],[D.jr])
z.x=H.d([],[D.jC])
z.y=H.d([],[D.jD])
z.z=H.d([],[D.jE])
z.Q=null
z.ch=null
z.d4(z.gfl(),z.gfI(),z.gfK())
q.dx=z
x=z.Q
if(x==null){x=D.H()
z.Q=x
z=x}else z=x
x={func:1,ret:-1,args:[D.p]}
p=H.h(q.gfV(),x)
C.a.h(z.a,p)
p=q.dx
z=p.ch
if(z==null){z=D.H()
p.ch=z}p=H.h(q.gc7(),x)
C.a.h(z.a,p)
q.dy=null
z=q.dx
o=U.dZ(V.eq(new V.V(0,0,0),new V.F(0,1,0),new V.F(-1,-1,-1)))
n=new V.v(1,1,1)
m=new D.ck()
m.c=new V.v(1,1,1)
m.a=new V.F(0,0,1)
l=m.b
m.b=o
o=o.gt()
o.toString
k=H.h(m.geU(),x)
C.a.h(o.a,k)
o=new D.J("mover",l,m.b,m,[U.ag])
o.b=!0
m.aI(o)
if(!m.c.w(0,n)){l=m.c
m.c=n
o=new D.J("color",l,n,m,[V.v])
o.b=!0
m.aI(o)}z.h(0,m)
z=q.r
z.sq(0,new V.v(0.1,0.1,0.1))
z=q.x
z.sq(0,new V.v(0.1,0.1,0.1))
z=q.z
z.sq(0,new V.v(1,1,1))
z=q.z
if(z.c===C.c){z.c=C.i
z.bm()
z.bt(100)
o=z.a
o.a=null
o.X(null)}z.bt(10)
z=q.ch
if(z!==r){if(z!=null)C.a.L(z.gt().a,p)
l=q.ch
q.ch=r
C.a.h(r.gt().a,p)
z=new D.J("environment",l,q.ch,q,[T.dg])
z.b=!0
q.X(z)}q.cy.say(0.6)
z=q.cy
z.sq(0,new V.v(0.2,0.3,1))
z=q.cx
z.sq(0,new V.v(0.6,0.6,0.6))
j=new U.eb()
j.bn(U.ag)
j.aZ(j.gfk(),j.gfJ())
j.e=null
j.f=V.bb()
j.r=0
z=v.r
p=new U.ka()
o=U.cU()
o.sd_(0,!0)
o.scM(6.283185307179586)
o.scO(0)
o.sa_(0,0)
o.scN(100)
o.sT(0)
o.scw(0.5)
p.b=o
o=o.gt()
o.toString
m=H.h(p.gaJ(),x)
C.a.h(o.a,m)
o=U.cU()
o.sd_(0,!0)
o.scM(6.283185307179586)
o.scO(0)
o.sa_(0,0)
o.scN(100)
o.sT(0)
o.scw(0.5)
p.c=o
C.a.h(o.gt().a,m)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
i=new X.aF(!1,!1,!1)
l=p.d
p.d=i
o=[X.aF]
m=new D.J("modifiers",l,i,p,o)
m.b=!0
p.S(m)
m=p.f
if(m!==!1){p.f=!1
m=new D.J("invertX",m,!1,p,[P.af])
m.b=!0
p.S(m)}m=p.r
if(m!==!1){p.r=!1
m=new D.J("invertY",m,!1,p,[P.af])
m.b=!0
p.S(m)}p.b1(z)
j.h(0,p)
z=v.r
p=new U.k9()
m=U.cU()
m.sd_(0,!0)
m.scM(6.283185307179586)
m.scO(0)
m.sa_(0,0)
m.scN(100)
m.sT(0)
m.scw(0.2)
p.b=m
m=m.gt()
m.toString
k=H.h(p.gaJ(),x)
C.a.h(m.a,k)
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
i=new X.aF(!0,!1,!1)
l=p.c
p.c=i
m=new D.J("modifiers",l,i,p,o)
m.b=!0
p.S(m)
p.b1(z)
j.h(0,p)
z=v.r
p=new U.kb()
p.c=0.01
p.d=0
p.e=0
i=new X.aF(!1,!1,!1)
p.b=i
o=new D.J("modifiers",null,i,p,o)
o.b=!0
p.S(o)
p.b1(z)
j.h(0,p)
j.h(0,U.dZ(V.aE(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=X.ev(2000,1.0471975511965976,j,0.1,null)
g=new M.hC()
g.sb2(null)
g.sbd(0,null)
g.sbe(null)
z=E.e8(null,!0,null,"",null,null)
f=F.cu()
p=f.a
o=new V.F(-1,-1,1)
o=o.u(0,Math.sqrt(o.B(o)))
e=p.bv(new V.aH(1,2,4,6),new V.ax(1,0,0,1),new V.V(-1,-1,0),new V.R(0,1),o,null)
p=f.a
o=new V.F(1,-1,1)
o=o.u(0,Math.sqrt(o.B(o)))
d=p.bv(new V.aH(0,3,4,6),new V.ax(0,0,1,1),new V.V(1,-1,0),new V.R(1,1),o,null)
p=f.a
o=new V.F(1,1,1)
o=o.u(0,Math.sqrt(o.B(o)))
c=p.bv(new V.aH(0,2,5,6),new V.ax(0,1,0,1),new V.V(1,1,0),new V.R(1,0),o,null)
p=f.a
o=new V.F(-1,1,1)
o=o.u(0,Math.sqrt(o.B(o)))
b=p.bv(new V.aH(0,2,4,7),new V.ax(1,1,0,1),new V.V(-1,1,0),new V.R(0,0),o,null)
f.d.dJ(H.d([e,d,c,b],[F.ad]))
f.al()
z.sa8(0,f)
g.d=z
g.e=null
z=new O.jo()
z.b=1.0471975511965976
l=z.c
z.c=r
p=r.gt()
p.toString
o=H.h(z.gc7(),x)
C.a.h(p.a,o)
p=new D.J("boxTexture",l,z.c,z,[T.dg])
p.b=!0
z.X(p)
n=new V.v(1,1,1)
if(!J.T(z.d,n)){l=z.d
z.d=n
p=new D.J("boxColor",l,n,z,[V.v])
p.b=!0
z.X(p)}z.e=null
g.sbe(z)
g.sbd(0,u)
g.sb2(h)
a=new M.hP()
z=O.cT(E.aP)
a.d=z
z.aZ(a.gfq(),a.gfs())
a.e=null
a.f=null
a.r=null
a.x=null
a.sb2(null)
a.sbd(0,null)
a.sbe(null)
a.sb2(h)
a.sbe(q)
a.sbd(0,u)
a.d.h(0,t)
a.b.sdQ(0,!1)
z=M.aI
p=H.d([g,a],[z])
o=new M.hx()
o.bn(z)
o.e=!1
o.f=null
o.aZ(o.gfL(),o.gfM())
o.cj(0,p)
z=v.d
if(z!==o){if(z!=null){z=z.gt()
z.toString
p=H.h(v.gdd(),x)
C.a.L(z.a,p)}v.d=o
z=o.gt()
z.toString
x=H.h(v.gdd(),x)
C.a.h(z.a,x)
v.eS()}z=V.ez("controls",!0)
z.ci(0,"Silver",new D.n1(q),!0)
z.a1(0,"Gold",new D.n2(q))
z.a1(0,"Glass",new D.n3(q))
z.a1(0,"Blue Glass",new D.nb(q))
z.a1(0,"Water Bubble",new D.nc(q))
z.a1(0,"No Reflection",new D.nd(q))
z.a1(0,"Pink Distort",new D.ne(q))
z.a1(0,"Cloak",new D.nf(q))
z.a1(0,"White and Shiny",new D.ng(q))
z=V.ez("shapes",!0)
z.a1(0,"Cube",new D.nh(t))
z.a1(0,"Cuboid",new D.ni(t))
z.a1(0,"Cylinder",new D.n4(t))
z.a1(0,"Cone",new D.n5(t))
z.a1(0,"Cylindrical",new D.n6(t))
z.a1(0,"Sphere",new D.n7(t))
z.a1(0,"Spherical",new D.n8(t))
z.ci(0,"Toroid",new D.n9(t),!0)
z.a1(0,"Knot",new D.na(t))
V.np(v)},
n1:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sq(0,new V.v(0.2,0.2,0.2))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.sq(0,new V.v(0,0,0))
z=z.cx
z.sq(0,new V.v(1,1,1))}},
n2:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.11,0.11,0.1))
y=z.x
y.sq(0,new V.v(0.21,0.21,0.2))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.sq(0,new V.v(0,0,0))
z=z.cx
z.sq(0,new V.v(1,0.9,0.5))}},
n3:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.say(0.4)
y=z.cy
y.sq(0,new V.v(0.6,0.6,0.6))
z=z.cx
z.sq(0,new V.v(0.4,0.4,0.4))}},
nb:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.say(0.4)
y=z.cy
y.sq(0,new V.v(0.2,0.3,1))
z=z.cx
z.sq(0,new V.v(0.3,0.3,0.3))}},
nc:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.say(0.6)
y=z.cy
y.sq(0,new V.v(0.8,0.8,0.8))
z=z.cx
z.sq(0,new V.v(0.2,0.2,0.2))}},
nd:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.say(0.6)
y=z.cy
y.sq(0,new V.v(1,1,1))
z.cx.sq(0,new V.v(0,0,0))}},
ne:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.say(0.9)
y=z.cy
y.sq(0,new V.v(1,0.8,0.8))
z.cx.sq(0,new V.v(0,0,0))}},
nf:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0,0,0))
y=z.x
y.sq(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sq(0,new V.v(0.1,0.1,0.1))
z.cy.say(0.99)
y=z.cy
y.sq(0,new V.v(0.95,0.95,0.95))
z.cx.sq(0,new V.v(0,0,0))}},
ng:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sq(0,new V.v(0.3,0.3,0.3))
y=z.x
y.sq(0,new V.v(0.5,0.5,0.5))
y=z.z
y.sq(0,new V.v(1,1,1))
z.cy.sq(0,new V.v(0,0,0))
z=z.cx
z.sq(0,new V.v(0.3,0.3,0.3))}},
nh:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dz(1,null,null,1))}},
ni:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dz(15,null,new D.n0(),15))}},
n0:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.F(x.a,x.b,x.c)
w=x.u(0,Math.sqrt(x.B(x)))
x=a.f
y=w.k(0,z*0.1+y*0.1)
a.sa_(0,x.D(0,new V.V(y.a,y.b,y.c)))}},
n4:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.fS(1,!0,!0,1,30,1))}},
n5:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.fS(1,!0,!1,1,30,0))}},
n6:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.fT(!0,!0,25,new D.n_(),50))}},
n_:{"^":"m:6;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
n7:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.h6(6,null,6))}},
n8:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.h6(10,new D.mZ(),10))}},
mZ:{"^":"m:6;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
n9:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.ha(30,1,15,0.5))}},
na:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.mW(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eg.prototype
return J.ef.prototype}if(typeof a=="string")return J.c4.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.i3.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.aN=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.cd=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.mM=function(a){if(typeof a=="number")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.mN=function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.dC=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.b0=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).w(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mM(a).N(a,b)}
J.dJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mN(a).k(a,b)}
J.dK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).j(a,b)}
J.cJ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h_(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cd(a).m(a,b,c)}
J.hc=function(a,b){return J.dC(a).H(a,b)}
J.hd=function(a,b,c){return J.b0(a).fT(a,b,c)}
J.he=function(a,b,c,d){return J.b0(a).dI(a,b,c,d)}
J.hf=function(a,b){return J.dC(a).Y(a,b)}
J.cK=function(a,b,c){return J.aN(a).hG(a,b,c)}
J.cL=function(a,b){return J.cd(a).I(a,b)}
J.hg=function(a,b,c,d){return J.cd(a).aB(a,b,c,d)}
J.dL=function(a,b){return J.cd(a).K(a,b)}
J.dM=function(a){return J.b0(a).gct(a)}
J.bX=function(a){return J.M(a).gU(a)}
J.by=function(a){return J.cd(a).ga4(a)}
J.av=function(a){return J.aN(a).gl(a)}
J.hh=function(a,b){return J.b0(a).iq(a,b)}
J.hi=function(a,b){return J.b0(a).sa5(a,b)}
J.a9=function(a){return J.M(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cR.prototype
C.H=J.u.prototype
C.a=J.b9.prototype
C.I=J.ef.prototype
C.e=J.eg.prototype
C.t=J.eh.prototype
C.d=J.c3.prototype
C.b=J.c4.prototype
C.P=J.c5.prototype
C.V=H.d8.prototype
C.W=W.iH.prototype
C.z=J.iM.prototype
C.X=P.da.prototype
C.r=J.ca.prototype
C.A=W.bN.prototype
C.B=W.kx.prototype
C.D=new P.ho(!1)
C.C=new P.hn(C.D)
C.E=new P.iK()
C.F=new P.kj()
C.j=new P.lk()
C.c=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.f=new A.cj(2,"ColorSourceType.Texture2D")
C.h=new A.cj(3,"ColorSourceType.TextureCube")
C.q=new P.b6(0)
C.G=new P.b6(5e6)
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=function(getTagFallback) {
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
C.M=function() {
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
C.N=function(hooks) {
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
C.O=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=H.d(I.ak([127,2047,65535,1114111]),[P.n])
C.m=H.d(I.ak([0,0,32776,33792,1,10240,0,0]),[P.n])
C.n=H.d(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.d(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.R=H.d(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.S=H.d(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.d(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.x=H.d(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.T=H.d(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.y=H.d(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.Q=H.d(I.ak([]),[P.j])
C.U=new H.hB(0,{},C.Q,[P.j,P.j])
C.k=new P.kc(!1)
$.aC=0
$.bz=null
$.dR=null
$.du=!1
$.fY=null
$.fO=null
$.h5=null
$.cE=null
$.cH=null
$.dD=null
$.bs=null
$.bS=null
$.bT=null
$.dv=!1
$.W=C.j
$.e5=null
$.e4=null
$.e3=null
$.e2=null
$.r=V.iB()
$.jq="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jp="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ew=null
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
I.$lazy(y,x,w)}})(["e1","$get$e1",function(){return H.fX("_$dart_dartClosure")},"cZ","$get$cZ",function(){return H.fX("_$dart_js")},"eR","$get$eR",function(){return H.aJ(H.cv({
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.aJ(H.cv({$method$:null,
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aJ(H.cv(null))},"eU","$get$eU",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aJ(H.cv(void 0))},"eZ","$get$eZ",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aJ(H.eX(null))},"eV","$get$eV",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aJ(H.eX(void 0))},"f_","$get$f_",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.ky()},"bU","$get$bU",function(){return[]},"fc","$get$fc",function(){return P.kg()},"fj","$get$fj",function(){return H.iF(H.br(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"fE","$get$fE",function(){return P.j4("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fK","$get$fK",function(){return P.mj()},"e_","$get$e_",function(){return{}},"ff","$get$ff",function(){return Z.ar(0)},"fd","$get$fd",function(){return Z.ar(511)},"aB","$get$aB",function(){return Z.ar(1)},"aT","$get$aT",function(){return Z.ar(2)},"aS","$get$aS",function(){return Z.ar(4)},"aU","$get$aU",function(){return Z.ar(8)},"aV","$get$aV",function(){return Z.ar(16)},"bL","$get$bL",function(){return Z.ar(32)},"bM","$get$bM",function(){return Z.ar(64)},"fe","$get$fe",function(){return Z.ar(96)},"bp","$get$bp",function(){return Z.ar(128)},"aR","$get$aR",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.I,args:[F.ad,P.q,P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.n,[P.i,E.aP]]},{func:1,ret:P.I,args:[F.ao]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[D.p]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.I,args:[W.aa]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:V.V,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.n,[P.i,V.aD]]},{func:1,ret:P.j,args:[P.n]},{func:1,ret:-1,args:[P.n,[P.i,M.aI]]},{func:1,ret:-1,args:[P.n,[P.i,U.ag]]},{func:1,ret:-1,args:[P.n,[P.i,D.a3]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.b],opt:[P.az]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:[P.aW,,],args:[,]},{func:1,ret:P.I,args:[P.a1]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:W.a2,args:[W.N]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.n,args:[[P.c,P.n],P.n]},{func:1,ret:P.af,args:[[P.i,D.a3]]},{func:1,ret:P.af,args:[W.N]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,args:[P.j]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[,P.j]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.I,args:[P.j]},{func:1,ret:P.I,args:[P.j,,]},{func:1,ret:P.Q,args:[P.n]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[P.j,P.n]},{func:1,ret:P.I,args:[P.bl]},{func:1,ret:P.af,args:[P.q,P.q]},{func:1,ret:P.I,args:[,],opt:[,]}]
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
if(x==y)H.nt(d||a)
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
Isolate.ak=a.ak
Isolate.dA=a.dA
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
if(typeof dartMainRunner==="function")dartMainRunner(D.h2,[])
else D.h2([])})})()
//# sourceMappingURL=test.dart.js.map
