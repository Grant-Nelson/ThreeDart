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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isq)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dE(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dG=function(){}
var dart=[["","",,H,{"^":"",ov:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dJ==null){H.mY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cd("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d3()]
if(v!=null)return v
v=H.n2(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d3(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
A:function(a,b){return a===b},
gV:function(a){return H.bO(a)},
i:["eG",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i8:{"^":"q;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isag:1},
em:{"^":"q;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
d4:{"^":"q;",
gV:function(a){return 0},
i:["eH",function(a){return String(a)}]},
iQ:{"^":"d4;"},
ce:{"^":"d4;"},
c9:{"^":"d4;",
i:function(a){var z=a[$.$get$e6()]
if(z==null)return this.eH(a)
return"JavaScript function for "+H.l(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd0:1},
bb:{"^":"q;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.u(P.C("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.u(P.C("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
cj:function(a,b){var z,y
H.w(b,"$isi",[H.y(a,0)],"$asi")
if(!!a.fixed$length)H.u(P.C("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b6(a))}},
H:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
i0:function(a){return this.H(a,"")},
hS:function(a,b,c,d){var z,y,x
H.A(b,d)
H.f(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b6(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bW:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
gaF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i6())},
aD:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.u(P.C("fill range"))
P.aR(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.F(0,1))a[z]=d},
b5:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
i:function(a){return P.d1(a,"[","]")},
ga5:function(a){return new J.ax(a,a.length,0,[H.y(a,0)])},
gV:function(a){return H.bO(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ck(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aN(a,b))
if(b>=a.length||b<0)throw H.a(H.aN(a,b))
return a[b]},
m:function(a,b,c){H.E(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.u(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aN(a,b))
if(b>=a.length||b<0)throw H.a(H.aN(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
i7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ck(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.ej(new Array(a),b)},
ej:function(a,b){return J.bH(H.d(a,[b]))},
bH:function(a){H.c0(a)
a.fixed$length=Array
return a}}},
ou:{"^":"bb;$ti"},
ax:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c7:{"^":"q;",
gi_:function(a){return a===0?1/a<0:a<0},
iA:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.C(""+a+".toInt()"))},
cG:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
ex:function(a,b){var z
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gi_(a))return"-"+z
return z},
bi:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.u(P.C("Unexpected toString result: "+z))
x=J.aO(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a*b},
bn:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aQ:function(a,b){var z
if(a>0)z=this.dB(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h5:function(a,b){if(b<0)throw H.a(H.af(b))
return this.dB(a,b)},
dB:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a<b},
$isr:1,
$isZ:1},
el:{"^":"c7;",$isn:1},
ek:{"^":"c7;"},
c8:{"^":"q;",
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aN(a,b))
if(b<0)throw H.a(H.aN(a,b))
if(b>=a.length)H.u(H.aN(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.a(H.aN(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.ck(b,null,null))
return a+b},
aZ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.af(b))
c=P.aR(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.af(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
af:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.af(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ae:function(a,b){return this.af(a,b,0)},
B:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.cy(b,null,null))
if(b>c)throw H.a(P.cy(b,null,null))
if(c>a.length)throw H.a(P.cy(c,null,null))
return a.substring(b,c)},
aI:function(a,b){return this.B(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ic:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ai:function(a,b){return this.ic(a,b," ")},
ek:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ej:function(a,b){return this.ek(a,b,0)},
hH:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.hb(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isez:1,
$isj:1}}],["","",,H,{"^":"",
cK:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i6:function(){return new P.jw("No element")},
a5:{"^":"k5;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ascB:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asc:function(){return[P.n]}},
hQ:{"^":"i;"},
er:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.aO(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b6(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iw:{"^":"i;a,b,$ti",
ga5:function(a){return new H.ix(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.aw(this.a)},
K:function(a,b){return this.b.$1(J.cP(this.a,b))},
$asi:function(a,b){return[b]}},
ix:{"^":"d2;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$asd2:function(a,b){return[b]}},
kB:{"^":"i;a,b,$ti",
ga5:function(a){return new H.kC(J.bB(this.a),this.b,this.$ti)}},
kC:{"^":"d2;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cr:{"^":"b;$ti"},
cB:{"^":"b;$ti",
m:function(a,b,c){H.E(b)
H.A(c,H.at(this,"cB",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
aD:function(a,b,c,d){H.A(d,H.at(this,"cB",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
k5:{"^":"ct+cB;"}}],["","",,H,{"^":"",
hE:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
mT:function(a){return init.types[H.E(a)]},
h3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.af(a))
return z},
bO:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j_:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.J(w,u)|32)>x)return}return parseInt(a,b)},
bg:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.M(a).$isce){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.J(w,0)===36)w=C.b.aI(w,1)
r=H.dK(H.c0(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iS:function(){if(!!self.location)return self.location.href
return},
eC:function(a){var z,y,x,w,v
H.c0(a)
z=J.aw(a)
if(typeof z!=="number")return z.eD()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j0:function(a){var z,y,x,w
z=H.d([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.af(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aQ(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.af(w))}return H.eC(z)},
eD:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.af(x))
if(x<0)throw H.a(H.af(x))
if(x>65535)return H.j0(a)}return H.eC(a)},
j1:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eD()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cw:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aQ(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
ai:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iZ:function(a){return a.b?H.ai(a).getUTCFullYear()+0:H.ai(a).getFullYear()+0},
iX:function(a){return a.b?H.ai(a).getUTCMonth()+1:H.ai(a).getMonth()+1},
iT:function(a){return a.b?H.ai(a).getUTCDate()+0:H.ai(a).getDate()+0},
iU:function(a){return a.b?H.ai(a).getUTCHours()+0:H.ai(a).getHours()+0},
iW:function(a){return a.b?H.ai(a).getUTCMinutes()+0:H.ai(a).getMinutes()+0},
iY:function(a){return a.b?H.ai(a).getUTCSeconds()+0:H.ai(a).getSeconds()+0},
iV:function(a){return a.b?H.ai(a).getUTCMilliseconds()+0:H.ai(a).getMilliseconds()+0},
o:function(a){throw H.a(H.af(a))},
e:function(a,b){if(a==null)J.aw(a)
throw H.a(H.aN(a,b))},
aN:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
z=H.E(J.aw(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.cy(b,"index",null)},
mN:function(a,b,c){if(a>c)return new P.cx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cx(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
af:function(a){return new P.aP(!0,a,null,null)},
mD:function(a){if(typeof a!=="number")throw H.a(H.af(a))
return a},
a:function(a){var z
if(a==null)a=new P.ey()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hd})
z.name=""}else z.toString=H.hd
return z},
hd:function(){return J.ab(this.dartException)},
u:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b6(a))},
av:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nA(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aQ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d5(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ex(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eU()
u=$.$get$eV()
t=$.$get$eW()
s=$.$get$eX()
r=$.$get$f0()
q=$.$get$f1()
p=$.$get$eZ()
$.$get$eY()
o=$.$get$f3()
n=$.$get$f2()
m=v.ah(y)
if(m!=null)return z.$1(H.d5(H.O(y),m))
else{m=u.ah(y)
if(m!=null){m.method="call"
return z.$1(H.d5(H.O(y),m))}else{m=t.ah(y)
if(m==null){m=s.ah(y)
if(m==null){m=r.ah(y)
if(m==null){m=q.ah(y)
if(m==null){m=p.ah(y)
if(m==null){m=s.ah(y)
if(m==null){m=o.ah(y)
if(m==null){m=n.ah(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ex(H.O(y),m))}}return z.$1(new H.k4(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eJ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aP(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eJ()
return a},
bz:function(a){var z
if(a==null)return new H.fy(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fy(a)},
mQ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
n_:function(a,b,c,d,e,f){H.h(a,"$isd0")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.x("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n_)
a.$identity=z
return z},
hz:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isc){z.$reflectionInfo=d
x=H.j6(z).r}else x=d
w=e?Object.create(new H.jx().constructor.prototype):Object.create(new H.cS(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.F()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e2(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dY:H.cT
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e2(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hw:function(a,b,c,d){var z=H.cT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e2:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hy(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hw(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.F()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bC
if(v==null){v=H.cl("self")
$.bC=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.F()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bC
if(v==null){v=H.cl("self")
$.bC=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hx:function(a,b,c,d){var z,y
z=H.cT
y=H.dY
switch(b?-1:a){case 0:throw H.a(H.jg("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hy:function(a,b){var z,y,x,w,v,u,t,s
z=$.bC
if(z==null){z=H.cl("self")
$.bC=z}y=$.dX
if(y==null){y=H.cl("receiver")
$.dX=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hx(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aC
if(typeof y!=="number")return y.F()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.F()
$.aC=y+1
return new Function(z+y+"}")()},
dE:function(a,b,c,d,e,f,g){var z,y
z=J.bH(H.c0(b))
H.E(c)
y=!!J.M(d).$isc?J.bH(d):d
return H.hz(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aA(a,"String"))},
mO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"double"))},
nq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"num"))},
fV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aA(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aA(a,"int"))},
h8:function(a,b){throw H.a(H.aA(a,H.O(b).substring(3)))},
ns:function(a,b){var z=J.aO(b)
throw H.a(H.hv(a,z.B(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.h8(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.ns(a,b)},
c0:function(a){if(a==null)return a
if(!!J.M(a).$isc)return a
throw H.a(H.aA(a,"List"))},
h5:function(a,b){if(a==null)return a
if(!!J.M(a).$isc)return a
if(J.M(a)[b])return a
H.h8(a,b)},
h_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
cg:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h_(J.M(a))
if(z==null)return!1
y=H.h2(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dA)return a
$.dA=!0
try{if(H.cg(a,b))return a
z=H.cj(b)
y=H.aA(a,z)
throw H.a(y)}finally{$.dA=!1}},
dH:function(a,b){if(a!=null&&!H.dD(a,b))H.u(H.aA(a,H.cj(b)))
return a},
fQ:function(a){var z
if(a instanceof H.m){z=H.h_(J.M(a))
if(z!=null)return H.cj(z)
return"Closure"}return H.bg(a)},
ny:function(a){throw H.a(new P.hI(H.O(a)))},
h0:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
pB:function(a,b,c){return H.bA(a["$as"+H.l(c)],H.b3(b))},
b2:function(a,b,c,d){var z
H.O(c)
H.E(d)
z=H.bA(a["$as"+H.l(c)],H.b3(b))
return z==null?null:z[d]},
at:function(a,b,c){var z
H.O(b)
H.E(c)
z=H.bA(a["$as"+H.l(b)],H.b3(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.E(b)
z=H.b3(a)
return z==null?null:z[b]},
cj:function(a){var z=H.b4(a,null)
return z},
b4:function(a,b){var z,y
H.w(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dK(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.mt(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mP(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dK:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.aq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}v="<"+z.i(0)+">"
return v},
bA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bw:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fT(H.bA(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.O(b)
H.c0(c)
H.O(d)
if(a==null)return a
z=H.bw(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dK(c,0,null)
throw H.a(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fT:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.au(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.au(a[y],b,c[y],d))return!1
return!0},
pz:function(a,b,c){return a.apply(b,H.bA(J.M(b)["$as"+H.l(c)],H.b3(b)))},
h4:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="I"||a===-1||a===-2||H.h4(z)}return!1},
dD:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="I"||b===-1||b===-2||H.h4(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cg(a,b)}y=J.M(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.au(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dD(a,b))throw H.a(H.aA(a,H.cj(b)))
return a},
au:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.h2(a,b,c,d)
if('func' in a)return c.builtin$cls==="d0"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,x,d)
else if(H.au(a,b,x,d))return!0
else{if(!('$is'+"bF" in y.prototype))return!1
w=y.prototype["$as"+"bF"]
v=H.bA(w,z?a.slice(1):null)
return H.au(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cj(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fT(H.bA(r,z),b,u,d)},
h2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.au(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.au(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.au(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.np(m,b,l,d)},
np:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.au(c[w],d,a[w],b))return!1}return!0},
pA:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
n2:function(a){var z,y,x,w,v,u
z=H.O($.h1.$1(a))
y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fS.$2(a,z))
if(z!=null){y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cM(x)
$.cI[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cL[z]=x
return x}if(v==="-"){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h7(a,x)
if(v==="*")throw H.a(P.cd(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h7(a,x)},
h7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dL(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.dL(a,!1,null,!!a.$isG)},
no:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cM(z)
else return J.dL(z,c,null,null)},
mY:function(){if(!0===$.dJ)return
$.dJ=!0
H.mZ()},
mZ:function(){var z,y,x,w,v,u,t,s
$.cI=Object.create(null)
$.cL=Object.create(null)
H.mU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h9.$1(v)
if(u!=null){t=H.no(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mU:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bv(C.J,H.bv(C.O,H.bv(C.u,H.bv(C.u,H.bv(C.N,H.bv(C.K,H.bv(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h1=new H.mV(v)
$.fS=new H.mW(u)
$.h9=new H.mX(t)},
bv:function(a,b){return a(b)||b},
hb:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hc:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hD:{"^":"b;$ti",
i:function(a){return P.d7(this)},
m:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.hE()},
$isK:1},
hF:{"^":"hD;a,b,c,$ti",
gl:function(a){return this.a},
bA:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bA(0,b))return
return this.dq(b)},
dq:function(a){return this.b[H.O(a)]},
L:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.f(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dq(v),z))}}},
j5:{"^":"b;a,b,c,d,e,f,r,0x",q:{
j6:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bH(z)
y=z[0]
x=z[1]
return new H.j5(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jR:{"^":"b;a,b,c,d,e,f",
ah:function(a){var z,y,x
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
aK:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f_:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iN:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
ex:function(a,b){return new H.iN(a,b==null?null:b.method)}}},
ib:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
d5:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ib(a,y,z?null:b.receiver)}}},
k4:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nA:{"^":"m:20;a",
$1:function(a){if(!!J.M(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fy:{"^":"b;a,0b",
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
i:function(a){return"Closure '"+H.bg(this).trim()+"'"},
geA:function(){return this},
$isd0:1,
geA:function(){return this}},
eN:{"^":"m;"},
jx:{"^":"eN;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cS:{"^":"eN;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cS))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bO(this.a)
else y=typeof z!=="object"?J.b5(z):H.bO(z)
return(y^H.bO(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
q:{
cT:function(a){return a.a},
dY:function(a){return a.c},
cl:function(a){var z,y,x,w,v
z=new H.cS("self","target","receiver","name")
y=J.bH(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jS:{"^":"a6;a",
i:function(a){return this.a},
q:{
aA:function(a,b){return new H.jS("TypeError: "+H.l(P.cq(a))+": type '"+H.fQ(a)+"' is not a subtype of type '"+b+"'")}}},
hu:{"^":"a6;a",
i:function(a){return this.a},
q:{
hv:function(a,b){return new H.hu("CastError: "+H.l(P.cq(a))+": type '"+H.fQ(a)+"' is not a subtype of type '"+b+"'")}}},
jf:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
jg:function(a){return new H.jf(a)}}},
b0:{"^":"it;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gar:function(a){return new H.ih(this,[H.y(this,0)])},
bA:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dl(y,b)}else return this.hX(b)},
hX:function(a){var z=this.d
if(z==null)return!1
return this.cJ(this.c2(z,this.cI(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.hY(b)},
hY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c2(z,this.cI(a))
x=this.cJ(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c7()
this.b=z}this.de(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c7()
this.c=y}this.de(y,b,c)}else this.hZ(b,c)},
hZ:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.c7()
this.d=z}y=this.cI(a)
x=this.c2(z,y)
if(x==null)this.cf(z,y,[this.c8(a,b)])
else{w=this.cJ(x,a)
if(w>=0)x[w].b=b
else x.push(this.c8(a,b))}},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b6(this))
z=z.c}},
de:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bq(a,b)
if(z==null)this.cf(a,b,this.c8(b,c))
else z.b=c},
fd:function(){this.r=this.r+1&67108863},
c8:function(a,b){var z,y
z=new H.ig(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fd()
return z},
cI:function(a){return J.b5(a)&0x3ffffff},
cJ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.d7(this)},
bq:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
f6:function(a,b){delete a[b]},
dl:function(a,b){return this.bq(a,b)!=null},
c7:function(){var z=Object.create(null)
this.cf(z,"<non-identifier-key>",z)
this.f6(z,"<non-identifier-key>")
return z},
$isep:1},
ig:{"^":"b;a,b,0c,0d"},
ih:{"^":"hQ;a,$ti",
gl:function(a){return this.a.a},
ga5:function(a){var z,y
z=this.a
y=new H.ii(z,z.r,this.$ti)
y.c=z.e
return y}},
ii:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mV:{"^":"m:20;a",
$1:function(a){return this.a(a)}},
mW:{"^":"m:28;a",
$2:function(a,b){return this.a(a,b)}},
mX:{"^":"m:41;a",
$1:function(a){return this.a(H.O(a))}},
i9:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isez:1,
$isj7:1,
q:{
ia:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mP:function(a){return J.ej(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bt:function(a){return a},
iJ:function(a){return new Int8Array(a)},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aN(b,a))},
mn:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mN(a,b,c))
return b},
ew:{"^":"q;",$isew:1,"%":"ArrayBuffer"},
dc:{"^":"q;",$isdc:1,$isjT:1,"%":"DataView;ArrayBufferView;db|fs|ft|iK|fu|fv|b1"},
db:{"^":"dc;",
gl:function(a){return a.length},
$isG:1,
$asG:I.dG},
iK:{"^":"ft;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
m:function(a,b,c){H.E(b)
H.mO(c)
H.aM(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.r]},
$asz:function(){return[P.r]},
$isi:1,
$asi:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
b1:{"^":"fv;",
m:function(a,b,c){H.E(b)
H.E(c)
H.aM(b,a,a.length)
a[b]=c},
$ascr:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]}},
oG:{"^":"b1;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oH:{"^":"b1;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oI:{"^":"b1;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oJ:{"^":"b1;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oK:{"^":"b1;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oL:{"^":"b1;",
gl:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dd:{"^":"b1;",
gl:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
bW:function(a,b,c){return new Uint8Array(a.subarray(b,H.mn(b,c,a.length)))},
$isdd:1,
$isQ:1,
"%":";Uint8Array"},
fs:{"^":"db+z;"},
ft:{"^":"fs+cr;"},
fu:{"^":"db+z;"},
fv:{"^":"fu+cr;"}}],["","",,P,{"^":"",
kE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mA()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bx(new P.kG(z),1)).observe(y,{childList:true})
return new P.kF(z,y,x)}else if(self.setImmediate!=null)return P.mB()
return P.mC()},
po:[function(a){self.scheduleImmediate(H.bx(new P.kH(H.f(a,{func:1,ret:-1})),0))},"$1","mA",4,0,14],
pp:[function(a){self.setImmediate(H.bx(new P.kI(H.f(a,{func:1,ret:-1})),0))},"$1","mB",4,0,14],
pq:[function(a){P.dn(C.r,H.f(a,{func:1,ret:-1}))},"$1","mC",4,0,14],
dn:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a9(a.a,1000)
return P.lH(z<0?0:z,b)},
eP:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bn]})
z=C.d.a9(a.a,1000)
return P.lI(z<0?0:z,b)},
mw:function(a,b){if(H.cg(a,{func:1,args:[P.b,P.az]}))return b.io(a,null,P.b,P.az)
if(H.cg(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ck(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mv:function(){var z,y
for(;z=$.bu,z!=null;){$.bZ=null
y=z.b
$.bu=y
if(y==null)$.bY=null
z.a.$0()}},
py:[function(){$.dB=!0
try{P.mv()}finally{$.bZ=null
$.dB=!1
if($.bu!=null)$.$get$dv().$1(P.fU())}},"$0","fU",0,0,3],
fP:function(a){var z=new P.fl(H.f(a,{func:1,ret:-1}))
if($.bu==null){$.bY=z
$.bu=z
if(!$.dB)$.$get$dv().$1(P.fU())}else{$.bY.b=z
$.bY=z}},
mz:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bu
if(z==null){P.fP(a)
$.bZ=$.bY
return}y=new P.fl(a)
x=$.bZ
if(x==null){y.b=z
$.bZ=y
$.bu=y}else{y.b=x.b
x.b=y
$.bZ=y
if(y.b==null)$.bY=y}},
nt:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.W
if(C.j===y){P.cH(null,null,C.j,a)
return}y.toString
P.cH(null,null,y,H.f(y.co(a),z))},
jN:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.W
if(y===C.j){y.toString
return P.dn(a,b)}return P.dn(a,H.f(y.co(b),z))},
jO:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bn]}
H.f(b,z)
y=$.W
if(y===C.j){y.toString
return P.eP(a,b)}x=y.dM(b,P.bn)
$.W.toString
return P.eP(a,H.f(x,z))},
cG:function(a,b,c,d,e){var z={}
z.a=d
P.mz(new P.mx(z,e))},
fL:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.W
if(y===c)return d.$0()
$.W=c
z=y
try{y=d.$0()
return y}finally{$.W=z}},
fM:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.W
if(y===c)return d.$1(e)
$.W=c
z=y
try{y=d.$1(e)
return y}finally{$.W=z}},
my:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.W
if(y===c)return d.$2(e,f)
$.W=c
z=y
try{y=d.$2(e,f)
return y}finally{$.W=z}},
cH:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.hD(d,-1)
P.fP(d)},
kG:{"^":"m:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kF:{"^":"m:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kH:{"^":"m:0;a",
$0:function(){this.a.$0()}},
kI:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fB:{"^":"b;a,0b,c",
eT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bx(new P.lK(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
eU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bx(new P.lJ(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbn:1,
q:{
lH:function(a,b){var z=new P.fB(!0,0)
z.eT(a,b)
return z},
lI:function(a,b){var z=new P.fB(!1,0)
z.eU(a,b)
return z}}},
lK:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lJ:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eK(w,x)}z.c=y
this.d.$1(z)}},
bs:{"^":"b;0a,b,c,d,e,$ti",
i4:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.f(this.d,{func:1,ret:P.ag,args:[P.b]}),a.a,P.ag,P.b)},
hV:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cg(z,{func:1,args:[P.b,P.az]}))return H.dH(w.iu(z,a.a,a.b,null,y,P.az),x)
else return H.dH(w.cX(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aX:{"^":"b;dC:a<,b,0fW:c<,$ti",
ew:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.W
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mw(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aX(0,$.W,[c])
w=b==null?1:3
this.df(new P.bs(x,w,a,b,[z,c]))
return x},
iz:function(a,b){return this.ew(a,null,b)},
df:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbs")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaX")
z=y.a
if(z<4){y.df(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cH(null,null,z,H.f(new P.kX(this,a),{func:1,ret:-1}))}},
dw:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbs")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaX")
y=u.a
if(y<4){u.dw(a)
return}this.a=y
this.c=u.c}z.a=this.bt(a)
y=this.b
y.toString
P.cH(null,null,y,H.f(new P.l1(z,this),{func:1,ret:-1}))}},
cb:function(){var z=H.h(this.c,"$isbs")
this.c=null
return this.bt(z)},
bt:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
di:function(a){var z,y,x,w
z=H.y(this,0)
H.dH(a,{futureOr:1,type:z})
y=this.$ti
x=H.bw(a,"$isbF",y,"$asbF")
if(x){z=H.bw(a,"$isaX",y,null)
if(z)P.fo(a,this)
else P.kY(a,this)}else{w=this.cb()
H.A(a,z)
this.a=4
this.c=a
P.bT(this,w)}},
bZ:[function(a,b){var z
H.h(b,"$isaz")
z=this.cb()
this.a=8
this.c=new P.am(a,b)
P.bT(this,z)},function(a){return this.bZ(a,null)},"iG","$2","$1","gf2",4,2,43],
$isbF:1,
q:{
kY:function(a,b){var z,y,x
b.a=1
try{a.ew(new P.kZ(b),new P.l_(b),null)}catch(x){z=H.av(x)
y=H.bz(x)
P.nt(new P.l0(b,z,y))}},
fo:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaX")
if(z>=4){y=b.cb()
b.a=a.a
b.c=a.c
P.bT(b,y)}else{y=H.h(b.c,"$isbs")
b.a=2
b.c=a
a.dw(y)}},
bT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isam")
y=y.b
u=v.a
t=v.b
y.toString
P.cG(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bT(z.a,b)}y=z.a
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
if(p){H.h(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cG(null,null,y,u,t)
return}o=$.W
if(o==null?q!=null:o!==q)$.W=q
else o=null
y=b.c
if(y===8)new P.l4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l3(x,b,r).$0()}else if((y&2)!==0)new P.l2(z,x,b).$0()
if(o!=null)$.W=o
y=x.b
if(!!J.M(y).$isbF){if(y.a>=4){n=H.h(t.c,"$isbs")
t.c=null
b=t.bt(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fo(y,t)
return}}m=b.b
n=H.h(m.c,"$isbs")
m.c=null
b=m.bt(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kX:{"^":"m:0;a,b",
$0:function(){P.bT(this.a,this.b)}},
l1:{"^":"m:0;a,b",
$0:function(){P.bT(this.b,this.a.a)}},
kZ:{"^":"m:24;a",
$1:function(a){var z=this.a
z.a=0
z.di(a)}},
l_:{"^":"m:52;a",
$2:function(a,b){this.a.bZ(a,H.h(b,"$isaz"))},
$1:function(a){return this.$2(a,null)}},
l0:{"^":"m:0;a,b,c",
$0:function(){this.a.bZ(this.b,this.c)}},
l4:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eu(H.f(w.d,{func:1}),null)}catch(v){y=H.av(v)
x=H.bz(v)
if(this.d){w=H.h(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.M(z).$isbF){if(z instanceof P.aX&&z.gdC()>=4){if(z.gdC()===8){w=this.b
w.b=H.h(z.gfW(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iz(new P.l5(t),null)
w.a=!1}}},
l5:{"^":"m:48;a",
$1:function(a){return this.a}},
l3:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cX(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.av(t)
y=H.bz(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
l2:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isam")
w=this.c
if(w.i4(z)&&w.e!=null){v=this.b
v.b=w.hV(z)
v.a=!1}}catch(u){y=H.av(u)
x=H.bz(u)
w=H.h(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
fl:{"^":"b;a,0b"},
di:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aX(0,$.W,[P.n])
z.a=0
this.i3(new P.jA(z,this),!0,new P.jB(z,y),y.gf2())
return y}},
jA:{"^":"m;a,b",
$1:function(a){H.A(a,H.at(this.b,"di",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.at(this.b,"di",0)]}}},
jB:{"^":"m:0;a,b",
$0:function(){this.b.di(this.a.a)}},
eL:{"^":"b;$ti"},
jz:{"^":"b;"},
bn:{"^":"b;"},
am:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa6:1},
mb:{"^":"b;",$ispn:1},
mx:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ey()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lp:{"^":"mb;",
iv:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.W){a.$0()
return}P.fL(null,null,this,a,-1)}catch(x){z=H.av(x)
y=H.bz(x)
P.cG(null,null,this,z,H.h(y,"$isaz"))}},
iw:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.W){a.$1(b)
return}P.fM(null,null,this,a,b,-1,c)}catch(x){z=H.av(x)
y=H.bz(x)
P.cG(null,null,this,z,H.h(y,"$isaz"))}},
hD:function(a,b){return new P.lr(this,H.f(a,{func:1,ret:b}),b)},
co:function(a){return new P.lq(this,H.f(a,{func:1,ret:-1}))},
dM:function(a,b){return new P.ls(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eu:function(a,b){H.f(a,{func:1,ret:b})
if($.W===C.j)return a.$0()
return P.fL(null,null,this,a,b)},
cX:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.W===C.j)return a.$1(b)
return P.fM(null,null,this,a,b,c,d)},
iu:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.W===C.j)return a.$2(b,c)
return P.my(null,null,this,a,b,c,d,e,f)},
io:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lr:{"^":"m;a,b,c",
$0:function(){return this.a.eu(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lq:{"^":"m:3;a,b",
$0:function(){return this.a.iv(this.b)}},
ls:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iw(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ij:function(a,b,c,d,e){return new H.b0(0,0,[d,e])},
ik:function(a,b,c){H.c0(a)
return H.w(H.mQ(a,new H.b0(0,0,[b,c])),"$isep",[b,c],"$asep")},
eq:function(a,b){return new H.b0(0,0,[a,b])},
io:function(a,b,c,d){return new P.lb(0,0,[d])},
i5:function(a,b,c){var z,y
if(P.dC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c_()
C.a.h(y,a)
try{P.mu(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eM(b,H.h5(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d1:function(a,b,c){var z,y,x
if(P.dC(a))return b+"..."+c
z=new P.aq(b)
y=$.$get$c_()
C.a.h(y,a)
try{x=z
x.a=P.eM(x.gaM(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
dC:function(a){var z,y
for(z=0;y=$.$get$c_(),z<y.length;++z)if(a===y[z])return!0
return!1},
mu:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga5(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.l(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.I();t=s,s=r){r=z.gT(z);++x
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
il:function(a,b,c){var z=P.ij(null,null,null,b,c)
a.L(0,new P.im(z,b,c))
return z},
d7:function(a){var z,y,x
z={}
if(P.dC(a))return"{...}"
y=new P.aq("")
try{C.a.h($.$get$c_(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
J.dR(a,new P.iu(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$c_()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
lb:{"^":"l6;a,0b,0c,0d,0e,0f,r,$ti",
ga5:function(a){return P.fr(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dx()
this.b=z}return this.dg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dx()
this.c=y}return this.dg(y,b)}else return this.eW(0,b)},
eW:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dx()
this.d=z}y=this.dj(b)
x=z[y]
if(x==null)z[y]=[this.bY(b)]
else{if(this.dr(x,b)>=0)return!1
x.push(this.bY(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dz(this.c,b)
else return this.fO(0,b)},
fO:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fa(z,b)
x=this.dr(y,b)
if(x<0)return!1
this.dE(y.splice(x,1)[0])
return!0},
dg:function(a,b){H.A(b,H.y(this,0))
if(H.h(a[b],"$isdw")!=null)return!1
a[b]=this.bY(b)
return!0},
dz:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdw")
if(z==null)return!1
this.dE(z)
delete a[b]
return!0},
dh:function(){this.r=this.r+1&67108863},
bY:function(a){var z,y
z=new P.dw(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dh()
return z},
dE:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dh()},
dj:function(a){return J.b5(a)&0x3ffffff},
fa:function(a,b){return a[this.dj(b)]},
dr:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
q:{
dx:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dw:{"^":"b;a,0b,0c"},
lc:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
fr:function(a,b,c){var z=new P.lc(a,b,[c])
z.c=a.e
return z}}},
l6:{"^":"jh;"},
im:{"^":"m:9;a,b,c",
$2:function(a,b){this.a.m(0,H.A(a,this.b),H.A(b,this.c))}},
ct:{"^":"ld;",$isi:1,$isc:1},
z:{"^":"b;$ti",
ga5:function(a){return new H.er(a,this.gl(a),0,[H.b2(this,a,"z",0)])},
K:function(a,b){return this.j(a,b)},
iC:function(a,b){var z,y,x
z=H.d([],[H.b2(this,a,"z",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
iB:function(a){return this.iC(a,!0)},
aD:function(a,b,c,d){var z
H.A(d,H.b2(this,a,"z",0))
P.aR(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d1(a,"[","]")}},
it:{"^":"aj;"},
iu:{"^":"m:9;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
aj:{"^":"b;$ti",
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b2(this,a,"aj",0),H.b2(this,a,"aj",1)]})
for(z=J.bB(this.gar(a));z.I();){y=z.gT(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.aw(this.gar(a))},
i:function(a){return P.d7(a)},
$isK:1},
lP:{"^":"b;$ti",
m:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
iv:{"^":"b;$ti",
j:function(a,b){return J.dQ(this.a,b)},
m:function(a,b,c){J.cN(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
L:function(a,b){J.dR(this.a,H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.aw(this.a)},
i:function(a){return J.ab(this.a)},
$isK:1},
fa:{"^":"lQ;a,$ti"},
jj:{"^":"b;$ti",
i:function(a){return P.d1(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dT("index"))
if(b<0)H.u(P.a1(b,0,null,"index",null))
for(z=P.fr(this,this.r,H.y(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isi:1},
jh:{"^":"jj;"},
ld:{"^":"b+z;"},
lQ:{"^":"iv+lP;$ti"}}],["","",,P,{"^":"",hr:{"^":"c2;a",
i7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aR(c,d,b.length,null,null,null)
z=$.$get$fm()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.J(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cK(C.b.J(b,s))
o=H.cK(C.b.J(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aq("")
w.a+=C.b.B(b,x,y)
w.a+=H.cw(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.B(b,x,d)
k=l.length
if(v>=0)P.dW(b,u,d,v,t,k)
else{j=C.d.bn(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aZ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dW(b,u,d,v,t,i)
else{j=C.d.bn(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aZ(b,d,d,j===2?"==":"=")}return b},
$asc2:function(){return[[P.c,P.n],P.j]},
q:{
dW:function(a,b,c,d,e,f){if(C.d.bn(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},hs:{"^":"bD;a",
$asbD:function(){return[[P.c,P.n],P.j]}},c2:{"^":"b;$ti"},bD:{"^":"jz;$ti"},hS:{"^":"c2;",
$asc2:function(){return[P.j,[P.c,P.n]]}},ki:{"^":"hS;a",
ghP:function(){return C.F}},kp:{"^":"bD;",
b6:function(a,b,c){var z,y,x,w
z=a.length
P.aR(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ma(0,0,x)
if(w.f8(a,b,z)!==z)w.dG(J.hj(a,z-1),0)
return C.V.bW(x,0,w.b)},
cu:function(a){return this.b6(a,0,null)},
$asbD:function(){return[P.j,[P.c,P.n]]}},ma:{"^":"b;a,b,c",
dG:function(a,b){var z,y,x,w,v
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
f8:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dG(w,C.b.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kj:{"^":"bD;a",
b6:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.n],"$asc")
z=P.kk(!1,a,b,c)
if(z!=null)return z
y=J.aw(a)
P.aR(b,c,y,null,null,null)
x=new P.aq("")
w=new P.m7(!1,x,!0,0,0,0)
w.b6(a,b,y)
w.hR(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cu:function(a){return this.b6(a,0,null)},
$asbD:function(){return[[P.c,P.n],P.j]},
q:{
kk:function(a,b,c,d){H.w(b,"$isc",[P.n],"$asc")
if(b instanceof Uint8Array)return P.kl(!1,b,c,d)
return},
kl:function(a,b,c,d){var z,y,x
z=$.$get$ff()
if(z==null)return
y=0===c
if(y&&!0)return P.dt(z,b)
x=b.length
d=P.aR(c,d,x,null,null,null)
if(y&&d===x)return P.dt(z,b)
return P.dt(z,b.subarray(c,d))},
dt:function(a,b){if(P.kn(b))return
return P.ko(a,b)},
ko:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.av(y)}return},
kn:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
km:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.av(y)}return}}},m7:{"^":"b;a,b,c,d,e,f",
hR:function(a,b,c){var z
H.w(b,"$isc",[P.n],"$asc")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.n],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m9(c)
v=new P.m8(this,b,c,a)
$label0$0:for(u=J.aO(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bT()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.d.bi(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.a0("Overlong encoding of 0x"+C.d.bi(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.d.bi(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cw(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d2()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.d.bi(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.d.bi(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m9:{"^":"m:38;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.n],"$asc")
z=this.a
for(y=J.aO(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bT()
if((w&127)!==w)return x-b}return z-b}},m8:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cb(this.d,a,b)}}}],["","",,P,{"^":"",
ci:function(a,b,c){var z
H.f(b,{func:1,ret:P.n,args:[P.j]})
z=H.j_(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
hU:function(a){var z=J.M(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bg(a)+"'"},
ip:function(a,b,c,d){var z,y
H.A(b,d)
z=J.i7(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
iq:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.ga5(a);x.I();)C.a.h(y,H.A(x.gT(x),c))
if(b)return y
return H.w(J.bH(y),"$isc",z,"$asc")},
cb:function(a,b,c){var z,y
z=P.n
H.w(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isbb",[z],"$asbb")
y=a.length
c=P.aR(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.eD(z?C.a.bW(a,b,c):a)}if(!!J.M(a).$isdd)return H.j1(a,b,P.aR(b,c,a.length,null,null,null))
return P.jC(a,b,c)},
jC:function(a,b,c){var z,y,x,w
H.w(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a1(b,0,J.aw(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.aw(a),null,null))
y=J.bB(a)
for(x=0;x<b;++x)if(!y.I())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gT(y))
else for(x=b;x<c;++x){if(!y.I())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gT(y))}return H.eD(w)},
j8:function(a,b,c){return new H.i9(a,H.ia(a,!1,!0,!1))},
fc:function(){var z=H.iS()
if(z!=null)return P.ka(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hU(a)},
x:function(a){return new P.fn(a)},
ir:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.n]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dN:function(a){H.nr(a)},
ka:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.J(a,b+4)^58)*3|C.b.J(a,b)^100|C.b.J(a,b+1)^97|C.b.J(a,b+2)^116|C.b.J(a,b+3)^97)>>>0
if(y===0)return P.fb(b>0||c<c?C.b.B(a,b,c):a,5,null).gey()
else if(y===32)return P.fb(C.b.B(a,z,c),0,null).gey()}x=new Array(8)
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
if(P.fN(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.d1()
if(v>=b)if(P.fN(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.P()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.P()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.P()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.af(a,"..",s)))n=r>s+2&&C.b.af(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.af(a,"file",b)){if(u<=b){if(!C.b.af(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.B(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aZ(a,s,r,"/");++r;++q;++c}else{a=C.b.B(a,b,s)+"/"+C.b.B(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.af(a,"http",b)){if(x&&t+3===s&&C.b.af(a,"80",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.B(a,b,t)+C.b.B(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.af(a,"https",b)){if(x&&t+4===s&&C.b.af(a,"443",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.B(a,b,t)+C.b.B(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.B(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lu(a,v,u,t,s,r,q,o)}return P.lR(a,b,c,v,u,t,s,r,q,o)},
fe:function(a,b){var z=P.j
return C.a.hS(H.d(a.split("&"),[z]),P.eq(z,z),new P.kd(b),[P.K,P.j,P.j])},
k8:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k9(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ci(C.b.B(a,v,w),null,null)
if(typeof s!=="number")return s.d2()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ci(C.b.B(a,v,c),null,null)
if(typeof s!=="number")return s.d2()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
fd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kb(a)
y=new P.kc(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaF(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k8(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.d.aQ(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mo:function(){var z,y,x,w,v
z=P.ir(22,new P.mq(),!0,P.Q)
y=new P.mp(z)
x=new P.mr()
w=new P.ms()
v=H.h(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isQ"),"]",5)
v=H.h(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isQ"),"az",21)
v=H.h(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fN:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.n],"$asc")
z=$.$get$fO()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ag:{"^":"b;"},
"+bool":0,
ao:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.d.aQ(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hJ(H.iZ(this))
y=P.c3(H.iX(this))
x=P.c3(H.iT(this))
w=P.c3(H.iU(this))
v=P.c3(H.iW(this))
u=P.c3(H.iY(this))
t=P.hK(H.iV(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hJ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"Z;"},
"+double":0,
b8:{"^":"b;a",
k:function(a,b){return new P.b8(C.d.aj(this.a*b))},
P:function(a,b){return C.d.P(this.a,H.h(b,"$isb8").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hP()
y=this.a
if(y<0)return"-"+new P.b8(0-y).i(0)
x=z.$1(C.d.a9(y,6e7)%60)
w=z.$1(C.d.a9(y,1e6)%60)
v=new P.hO().$1(y%1e6)
return""+C.d.a9(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
q:{
ec:function(a,b,c,d,e,f){return new P.b8(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hO:{"^":"m:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hP:{"^":"m:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
ey:{"^":"a6;",
i:function(a){return"Throw of null."}},
aP:{"^":"a6;a,b,c,d",
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc0()+y+x
if(!this.a)return w
v=this.gc_()
u=P.cq(this.b)
return w+v+": "+H.l(u)},
q:{
c1:function(a){return new P.aP(!1,null,null,a)},
ck:function(a,b,c){return new P.aP(!0,a,b,c)},
dT:function(a){return new P.aP(!1,null,a,"Must not be null")}}},
cx:{"^":"aP;e,f,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cy:function(a,b,c){return new P.cx(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cx(b,c,!0,a,d,"Invalid value")},
aR:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
i3:{"^":"aP;e,l:f>,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){if(J.hf(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
U:function(a,b,c,d,e){var z=H.E(e!=null?e:J.aw(b))
return new P.i3(b,z,!0,a,c,"Index out of range")}}},
k6:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
C:function(a){return new P.k6(a)}}},
k3:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cd:function(a){return new P.k3(a)}}},
jw:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hC:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cq(z))+"."},
q:{
b6:function(a){return new P.hC(a)}}},
iO:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa6:1},
eJ:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hI:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fn:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
i_:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.B(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.J(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
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
m=""}l=C.b.B(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
q:{
a0:function(a,b,c){return new P.i_(a,b,c)}}},
n:{"^":"Z;"},
"+int":0,
i:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga5(this)
for(y=0;z.I();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dT("index"))
if(b<0)H.u(P.a1(b,0,null,"index",null))
for(z=this.ga5(this),y=0;z.I();){x=z.gT(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.i5(this,"(",")")}},
d2:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
I:{"^":"b;",
gV:function(a){return P.b.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Z:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gV:function(a){return H.bO(this)},
i:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.i(this)}},
az:{"^":"b;"},
j:{"^":"b;",$isez:1},
"+String":0,
aq:{"^":"b;aM:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isp7:1,
q:{
eM:function(a,b,c){var z=J.bB(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gT(z))
while(z.I())}else{a+=H.l(z.gT(z))
for(;z.I();)a=a+c+H.l(z.gT(z))}return a}}},
kd:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.w(a,"$isK",[z,z],"$asK")
H.O(b)
y=J.aO(b).ej(b,"=")
if(y===-1){if(b!=="")J.cN(a,P.dz(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.B(b,0,y)
w=C.b.aI(b,y+1)
z=this.a
J.cN(a,P.dz(x,0,x.length,z,!0),P.dz(w,0,w.length,z,!0))}return a}},
k9:{"^":"m:51;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
kb:{"^":"m:46;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kc:{"^":"m:45;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ci(C.b.B(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cD:{"^":"b;bV:a<,b,c,d,eq:e>,f,r,0x,0y,0z,0Q,0ch",
gez:function(){return this.b},
gcH:function(a){var z=this.c
if(z==null)return""
if(C.b.ae(z,"["))return C.b.B(z,1,z.length-1)
return z},
gbP:function(a){var z=this.d
if(z==null)return P.fD(this.a)
return z},
gcS:function(a){var z=this.f
return z==null?"":z},
gee:function(){var z=this.r
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
if(x&&!C.b.ae(d,"/"))d="/"+d
g=P.dy(g,0,0,h)
return new P.cD(i,j,c,f,d,g,this.r)},
es:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gcT:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fa(P.fe(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gef:function(){return this.c!=null},
gei:function(){return this.f!=null},
geg:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isds){y=this.a
x=b.gbV()
if(y==null?x==null:y===x)if(this.c!=null===b.gef()){y=this.b
x=b.gez()
if(y==null?x==null:y===x){y=this.gcH(this)
x=z.gcH(b)
if(y==null?x==null:y===x){y=this.gbP(this)
x=z.gbP(b)
if(y==null?x==null:y===x)if(this.e===z.geq(b)){y=this.f
x=y==null
if(!x===b.gei()){if(x)y=""
if(y===z.gcS(b)){z=this.r
y=z==null
if(!y===b.geg()){if(y)z=""
z=z===b.gee()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.b.gV(this.i(0))
this.z=z}return z},
$isds:1,
q:{
cE:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.n],"$asc")
if(c===C.k){z=$.$get$fI().b
if(typeof b!=="string")H.u(H.af(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.at(c,"c2",0))
y=c.ghP().cu(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cw(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m1(a,b,d)
else{if(d===b)P.bV(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m2(a,z,e-1):""
x=P.lW(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lZ(P.ci(C.b.B(a,w,g),new P.lS(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lX(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dy(a,h+1,i,null):null
return new P.cD(j,y,x,v,u,t,i<c?P.lV(a,i+1,c):null)},
fD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bV:function(a,b,c){throw H.a(P.a0(c,a,b))},
lZ:function(a,b){if(a!=null&&a===P.fD(b))return
return a},
lW:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.b.a_(a,z)!==93)P.bV(a,b,"Missing end `]` to match `[` in host")
P.fd(a,b+1,z)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fd(a,b,c)
return"["+a+"]"}return P.m4(a,b,c)},
m4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.fK(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aq("")
s=C.b.B(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.B(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aq("")
if(y<z){x.a+=C.b.B(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bV(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aq("")
s=C.b.B(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fE(v)
z+=q
y=z}}}}if(x==null)return C.b.B(a,b,c)
if(y<c){s=C.b.B(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m1:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fG(C.b.J(a,b)))P.bV(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bV(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.B(a,b,c)
return P.lT(y?a.toLowerCase():a)},
lT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m2:function(a,b,c){return P.bW(a,b,c,C.R)},
lX:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bW(a,b,c,C.y):C.t.jh(d,new P.lY(),P.j).H(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ae(w,"/"))w="/"+w
return P.m3(w,e,f)},
m3:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ae(a,"/"))return P.m5(a,!z||c)
return P.m6(a)},
dy:function(a,b,c,d){var z,y
z={}
H.w(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.c1("Both query and queryParameters specified"))
return P.bW(a,b,c,C.n)}if(d==null)return
y=new P.aq("")
z.a=""
d.L(0,new P.m_(new P.m0(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lV:function(a,b,c){return P.bW(a,b,c,C.n)},
fK:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.cK(y)
v=H.cK(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aQ(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cw(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
fE:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.n])
C.a.m(y,0,37)
C.a.m(y,1,C.b.J("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.d.h5(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.J("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.J("0123456789ABCDEF",u&15))
v+=3}}return P.cb(y,0,null)},
bW:function(a,b,c,d){var z=P.fJ(a,b,c,H.w(d,"$isc",[P.n],"$asc"),!1)
return z==null?C.b.B(a,b,c):z},
fJ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.n],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fK(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bV(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fE(v)}}if(w==null)w=new P.aq("")
w.a+=C.b.B(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.B(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fH:function(a){if(C.b.ae(a,"."))return!0
return C.b.ej(a,"/.")!==-1},
m6:function(a){var z,y,x,w,v,u,t
if(!P.fH(a))return a
z=H.d([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.T(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.H(z,"/")},
m5:function(a,b){var z,y,x,w,v,u
if(!P.fH(a))return!b?P.fF(a):a
z=H.d([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaF(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaF(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.fF(z[0]))}return C.a.H(z,"/")},
fF:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fG(J.hg(a,0)))for(y=1;y<z;++y){x=C.b.J(a,y)
if(x===58)return C.b.B(a,0,y)+"%3A"+C.b.aI(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lU:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c1("Invalid URL encoding"))}}return z},
dz:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dI(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.J(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.B(a,b,c)
else u=new H.a5(y.B(a,b,c))}else{u=H.d([],[P.n])
for(x=b;x<c;++x){w=y.J(a,x)
if(w>127)throw H.a(P.c1("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c1("Truncated URI"))
C.a.h(u,P.lU(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.n],"$asc")
return new P.kj(!1).cu(u)},
fG:function(a){var z=a|32
return 97<=z&&z<=122}}},
lS:{"^":"m:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
lY:{"^":"m:42;",
$1:function(a){return P.cE(C.T,a,C.k,!1)}},
m0:{"^":"m:22;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cE(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cE(C.p,b,C.k,!0))}}},
m_:{"^":"m:40;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bB(H.h5(b,"$isi")),y=this.a;z.I();)y.$2(a,H.O(z.gT(z)))}},
k7:{"^":"b;a,b,c",
gey:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.ek(y,"?",z)
w=y.length
if(x>=0){v=P.bW(y,x+1,w,C.n)
w=x}else v=null
z=new P.kN(this,"data",null,null,null,P.bW(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaF(z)
if(v!==44||x!==t+7||!C.b.af(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.i7(0,a,s,y)
else{r=P.fJ(a,s,y,C.n,!0)
if(r!=null)a=C.b.aZ(a,s,y,r)}return new P.k7(a,z,c)}}},
mq:{"^":"m:29;",
$1:function(a){return new Uint8Array(96)}},
mp:{"^":"m:39;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hk(z,0,96,b)
return z}},
mr:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.J(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
ms:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.J(b,0),y=C.b.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lu:{"^":"b;a,b,c,d,e,f,r,x,0y",
gef:function(){return this.c>0},
geh:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gei:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
geg:function(){return this.r<this.a.length},
gds:function(){return this.b===4&&C.b.ae(this.a,"http")},
gdt:function(){return this.b===5&&C.b.ae(this.a,"https")},
gbV:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gds()){this.x="http"
z="http"}else if(this.gdt()){this.x="https"
z="https"}else if(z===4&&C.b.ae(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ae(this.a,"package")){this.x="package"
z="package"}else{z=C.b.B(this.a,0,z)
this.x=z}return z},
gez:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.B(this.a,y,z-1):""},
gcH:function(a){var z=this.c
return z>0?C.b.B(this.a,z,this.d):""},
gbP:function(a){var z
if(this.geh()){z=this.d
if(typeof z!=="number")return z.F()
return P.ci(C.b.B(this.a,z+1,this.e),null,null)}if(this.gds())return 80
if(this.gdt())return 443
return 0},
geq:function(a){return C.b.B(this.a,this.e,this.f)},
gcS:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.B(this.a,z+1,y):""},
gee:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aI(y,z+1):""},
gcT:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.U
z=P.j
return new P.fa(P.fe(this.gcS(this),C.k),[z,z])},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.j,null],"$asK")
i=this.gbV()
z=i==="file"
y=this.c
j=y>0?C.b.B(this.a,this.b+3,y):""
f=this.geh()?this.gbP(this):null
y=this.c
if(y>0)c=C.b.B(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.B(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ae(d,"/"))d="/"+d
g=P.dy(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aI(y,x+1)
return new P.cD(i,j,c,f,d,g,b)},
es:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.b.gV(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isds)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isds:1},
kN:{"^":"cD;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cW:function(a,b){var z=document.createElement("canvas")
return z},
hR:function(a){H.h(a,"$isa7")
return"wheel"},
i4:function(a){var z,y,x
y=document.createElement("input")
z=H.h(y,"$isei")
try{J.hm(z,a)}catch(x){H.av(x)}return z},
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fq:function(a,b,c,d){var z,y
z=W.cC(W.cC(W.cC(W.cC(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fR:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.W
if(z===C.j)return a
return z.dM(a,b)},
a8:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nC:{"^":"dg;0t:x=,0u:y=","%":"Accelerometer|LinearAccelerationSensor"},
nD:{"^":"q;0l:length=","%":"AccessibleNodeList"},
nE:{"^":"a8;0a7:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nF:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cR:{"^":"q;",$iscR:1,"%":";Blob"},
nL:{"^":"a8;0a7:type}","%":"HTMLButtonElement"},
cV:{"^":"a8;",
bU:function(a,b,c){if(c!=null)return a.getContext(b,P.mE(c,null))
return a.getContext(b)},
eB:function(a,b){return this.bU(a,b,null)},
$iscV:1,
"%":"HTMLCanvasElement"},
e0:{"^":"q;",$ise0:1,"%":"CanvasRenderingContext2D"},
nN:{"^":"N;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nP:{"^":"co;0l:length=","%":"CSSPerspective"},
nQ:{"^":"cZ;0t:x=,0u:y=","%":"CSSPositionValue"},
nR:{"^":"co;0t:x=,0u:y=","%":"CSSRotation"},
b7:{"^":"q;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nS:{"^":"co;0t:x=,0u:y=","%":"CSSScale"},
nT:{"^":"kM;0l:length=",
eC:function(a,b){var z=a.getPropertyValue(this.f_(a,b))
return z==null?"":z},
f_:function(a,b){var z,y
z=$.$get$e5()
y=z[b]
if(typeof y==="string")return y
y=this.h6(a,b)
z[b]=y
return y},
h6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hL()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gaq:function(a){return a.height},
gaX:function(a){return a.left},
gbe:function(a){return a.right},
gbk:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hH:{"^":"b;",
gaX:function(a){return this.eC(a,"left")}},
cZ:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
co:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nU:{"^":"cZ;0l:length=","%":"CSSTransformValue"},
nV:{"^":"co;0t:x=,0u:y=","%":"CSSTranslation"},
nW:{"^":"cZ;0l:length=","%":"CSSUnparsedValue"},
nX:{"^":"q;0l:length=","%":"DataTransferItemList"},
nY:{"^":"q;0t:x=,0u:y=","%":"DeviceAcceleration"},
nZ:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
o_:{"^":"hM;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"DOMPoint"},
hM:{"^":"q;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":";DOMPointReadOnly"},
o0:{"^":"kP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.w(c,"$isa9",[P.Z],"$asa9")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a9,P.Z]]},
$asz:function(){return[[P.a9,P.Z]]},
$isi:1,
$asi:function(){return[[P.a9,P.Z]]},
$isc:1,
$asc:function(){return[[P.a9,P.Z]]},
$asD:function(){return[[P.a9,P.Z]]},
"%":"ClientRectList|DOMRectList"},
hN:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gaq(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.bw(b,"$isa9",[P.Z],"$asa9")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaX(b)&&a.top===z.gbk(b)&&this.gat(a)===z.gat(b)&&this.gaq(a)===z.gaq(b)},
gV:function(a){return W.fq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gaq:function(a){return a.height},
gaX:function(a){return a.left},
gbe:function(a){return a.right},
gbk:function(a){return a.top},
gat:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.Z]},
"%":";DOMRectReadOnly"},
o1:{"^":"kR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.j]},
$asz:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
o2:{"^":"q;0l:length=","%":"DOMTokenList"},
kL:{"^":"ct;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.h(z[b],"$isa3")},
m:function(a,b,c){var z
H.E(b)
H.h(c,"$isa3")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga5:function(a){var z=this.iB(this)
return new J.ax(z,z.length,0,[H.y(z,0)])},
aD:function(a,b,c,d){throw H.a(P.cd(null))},
$asz:function(){return[W.a3]},
$asi:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
a3:{"^":"N;",
gct:function(a){return new W.kL(a,a.children)},
gbz:function(a){return P.j4(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Z)},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
o3:{"^":"a8;0a7:type}","%":"HTMLEmbedElement"},
ac:{"^":"q;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"q;",
dH:["eF",function(a,b,c,d){H.f(c,{func:1,args:[W.ac]})
if(c!=null)this.eX(a,b,c,!1)}],
eX:function(a,b,c,d){return a.addEventListener(b,H.bx(H.f(c,{func:1,args:[W.ac]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fw|fx|fz|fA"},
b_:{"^":"cR;",$isb_:1,"%":"File"},
ee:{"^":"kW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isb_")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b_]},
$asz:function(){return[W.b_]},
$isi:1,
$asi:function(){return[W.b_]},
$isc:1,
$asc:function(){return[W.b_]},
$isee:1,
$asD:function(){return[W.b_]},
"%":"FileList"},
om:{"^":"a7;0l:length=","%":"FileWriter"},
op:{"^":"a8;0l:length=","%":"HTMLFormElement"},
ba:{"^":"q;",$isba:1,"%":"Gamepad"},
oq:{"^":"dg;0t:x=,0u:y=","%":"Gyroscope"},
or:{"^":"q;0l:length=","%":"History"},
os:{"^":"l8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asz:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"q;0dQ:data=",$isc4:1,"%":"ImageData"},
eh:{"^":"a8;",$iseh:1,"%":"HTMLImageElement"},
ei:{"^":"a8;0a7:type}",$isei:1,"%":"HTMLInputElement"},
bI:{"^":"dp;",$isbI:1,"%":"KeyboardEvent"},
ox:{"^":"a8;0a7:type}","%":"HTMLLinkElement"},
oy:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
oz:{"^":"dg;0t:x=,0u:y=","%":"Magnetometer"},
oB:{"^":"q;0l:length=","%":"MediaList"},
oC:{"^":"a7;",
dH:function(a,b,c,d){H.f(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.eF(a,b,c,!1)},
"%":"MessagePort"},
oD:{"^":"le;",
j:function(a,b){return P.aY(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gar:function(a){var z=H.d([],[P.j])
this.L(a,new W.iG(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iG:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oE:{"^":"lf;",
j:function(a,b){return P.aY(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gar:function(a){var z=H.d([],[P.j])
this.L(a,new W.iH(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iH:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
be:{"^":"q;",$isbe:1,"%":"MimeType"},
oF:{"^":"lh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbe")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.be]},
$asz:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asD:function(){return[W.be]},
"%":"MimeTypeArray"},
aG:{"^":"dp;",$isaG:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kK:{"^":"ct;a",
m:function(a,b,c){var z,y
H.E(b)
H.h(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga5:function(a){var z=this.a.childNodes
return new W.ef(z,z.length,-1,[H.b2(C.W,z,"D",0)])},
aD:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asz:function(){return[W.N]},
$asi:function(){return[W.N]},
$asc:function(){return[W.N]}},
N:{"^":"a7;",
ir:function(a,b){var z,y
try{z=a.parentNode
J.hh(z,b,a)}catch(y){H.av(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eG(a):z},
fR:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iL:{"^":"lj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asz:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
oN:{"^":"a8;0a7:type}","%":"HTMLOListElement"},
oO:{"^":"a8;0a7:type}","%":"HTMLObjectElement"},
bf:{"^":"q;0l:length=",$isbf:1,"%":"Plugin"},
oS:{"^":"ln;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bf]},
$asz:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"PluginArray"},
oX:{"^":"q;0a7:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oY:{"^":"lt;",
j:function(a,b){return P.aY(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gar:function(a){var z=H.d([],[P.j])
this.L(a,new W.je(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
je:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oZ:{"^":"a8;0a7:type}","%":"HTMLScriptElement"},
p0:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
dg:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bh:{"^":"a7;",$isbh:1,"%":"SourceBuffer"},
p1:{"^":"fx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbh")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asz:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"SourceBufferList"},
p2:{"^":"a8;0a7:type}","%":"HTMLSourceElement"},
bi:{"^":"q;",$isbi:1,"%":"SpeechGrammar"},
p3:{"^":"lw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbi")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bi]},
$asz:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asD:function(){return[W.bi]},
"%":"SpeechGrammarList"},
bj:{"^":"q;0l:length=",$isbj:1,"%":"SpeechRecognitionResult"},
p5:{"^":"lz;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.d([],[P.j])
this.L(a,new W.jy(z))
return z},
gl:function(a){return a.length},
$asaj:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
jy:{"^":"m:22;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p8:{"^":"a8;0a7:type}","%":"HTMLStyleElement"},
bk:{"^":"q;",$isbk:1,"%":"CSSStyleSheet|StyleSheet"},
dj:{"^":"a8;",$isdj:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bl:{"^":"a7;",$isbl:1,"%":"TextTrack"},
bm:{"^":"a7;",$isbm:1,"%":"TextTrackCue|VTTCue"},
pd:{"^":"lG;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbm")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"TextTrackCueList"},
pe:{"^":"fA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbl")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asz:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asD:function(){return[W.bl]},
"%":"TextTrackList"},
pf:{"^":"q;0l:length=","%":"TimeRanges"},
bo:{"^":"q;",$isbo:1,"%":"Touch"},
bp:{"^":"dp;",$isbp:1,"%":"TouchEvent"},
pg:{"^":"lM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbo")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"TouchList"},
ph:{"^":"q;0l:length=","%":"TrackDefaultList"},
dp:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pj:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
pl:{"^":"q;0t:x=","%":"VRStageBoundsPoint"},
pm:{"^":"a7;0l:length=","%":"VideoTrackList"},
bS:{"^":"aG;",
ghM:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghL:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbS:1,
"%":"WheelEvent"},
kD:{"^":"a7;",
fS:function(a,b){return a.requestAnimationFrame(H.bx(H.f(b,{func:1,ret:-1,args:[P.Z]}),1))},
f7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pr:{"^":"md;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isb7")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b7]},
$asz:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asD:function(){return[W.b7]},
"%":"CSSRuleList"},
ps:{"^":"hN;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.bw(b,"$isa9",[P.Z],"$asa9")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaX(b)&&a.top===z.gbk(b)&&a.width===z.gat(b)&&a.height===z.gaq(b)},
gV:function(a){return W.fq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaq:function(a){return a.height},
gat:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pu:{"^":"mf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isba")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$asz:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asD:function(){return[W.ba]},
"%":"GamepadList"},
pv:{"^":"mh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isN")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.N]},
$asz:function(){return[W.N]},
$isi:1,
$asi:function(){return[W.N]},
$isc:1,
$asc:function(){return[W.N]},
$asD:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pw:{"^":"mj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"SpeechRecognitionResultList"},
px:{"^":"ml;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.h(c,"$isbk")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"StyleSheetList"},
kS:{"^":"di;a,b,c,$ti",
i3:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
pt:{"^":"kS;a,b,c,$ti"},
kT:{"^":"eL;a,b,c,d,e,$ti",
ha:function(){var z=this.d
if(z!=null&&this.a<=0)J.hi(this.b,this.c,z,!1)},
q:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fR(new W.kU(c),W.ac)
z=new W.kT(0,a,b,z,!1,[e])
z.ha()
return z}}},
kU:{"^":"m:6;a",
$1:function(a){return this.a.$1(H.h(a,"$isac"))}},
D:{"^":"b;$ti",
ga5:function(a){return new W.ef(a,this.gl(a),-1,[H.b2(this,a,"D",0)])},
aD:function(a,b,c,d){H.A(d,H.b2(this,a,"D",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
ef:{"^":"b;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dQ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
kM:{"^":"q+hH;"},
kO:{"^":"q+z;"},
kP:{"^":"kO+D;"},
kQ:{"^":"q+z;"},
kR:{"^":"kQ+D;"},
kV:{"^":"q+z;"},
kW:{"^":"kV+D;"},
l7:{"^":"q+z;"},
l8:{"^":"l7+D;"},
le:{"^":"q+aj;"},
lf:{"^":"q+aj;"},
lg:{"^":"q+z;"},
lh:{"^":"lg+D;"},
li:{"^":"q+z;"},
lj:{"^":"li+D;"},
lm:{"^":"q+z;"},
ln:{"^":"lm+D;"},
lt:{"^":"q+aj;"},
fw:{"^":"a7+z;"},
fx:{"^":"fw+D;"},
lv:{"^":"q+z;"},
lw:{"^":"lv+D;"},
lz:{"^":"q+aj;"},
lF:{"^":"q+z;"},
lG:{"^":"lF+D;"},
fz:{"^":"a7+z;"},
fA:{"^":"fz+D;"},
lL:{"^":"q+z;"},
lM:{"^":"lL+D;"},
mc:{"^":"q+z;"},
md:{"^":"mc+D;"},
me:{"^":"q+z;"},
mf:{"^":"me+D;"},
mg:{"^":"q+z;"},
mh:{"^":"mg+D;"},
mi:{"^":"q+z;"},
mj:{"^":"mi+D;"},
mk:{"^":"q+z;"},
ml:{"^":"mk+D;"}}],["","",,P,{"^":"",
mH:function(a){var z,y
z=J.M(a)
if(!!z.$isc4){y=z.gdQ(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fC(a.data,a.height,a.width)},
mG:function(a){if(a instanceof P.fC)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var z,y,x,w,v
if(a==null)return
z=P.eq(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mE:function(a,b){var z={}
a.L(0,new P.mF(z))
return z},
eb:function(){var z=$.ea
if(z==null){z=J.cO(window.navigator.userAgent,"Opera",0)
$.ea=z}return z},
hL:function(){var z,y
z=$.e7
if(z!=null)return z
y=$.e8
if(y==null){y=J.cO(window.navigator.userAgent,"Firefox",0)
$.e8=y}if(y)z="-moz-"
else{y=$.e9
if(y==null){y=!P.eb()&&J.cO(window.navigator.userAgent,"Trident/",0)
$.e9=y}if(y)z="-ms-"
else z=P.eb()?"-o-":"-webkit-"}$.e7=z
return z},
lC:{"^":"b;",
ec:function(a){var z,y,x
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
if(!!y.$isao)return new Date(a.a)
if(!!y.$isj7)throw H.a(P.cd("structured clone of RegExp"))
if(!!y.$isb_)return a
if(!!y.$iscR)return a
if(!!y.$isee)return a
if(!!y.$isc4)return a
if(!!y.$isew||!!y.$isdc)return a
if(!!y.$isK){x=this.ec(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.L(a,new P.lE(z,this))
return z.a}if(!!y.$isc){x=this.ec(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hJ(a,x)}throw H.a(P.cd("structured clone of other type"))},
hJ:function(a,b){var z,y,x,w
z=J.aO(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cZ(z.j(a,w)))
return x}},
lE:{"^":"m:9;a,b",
$2:function(a,b){this.a.a[a]=this.b.cZ(b)}},
fC:{"^":"b;dQ:a>,b,c",$isc4:1},
mF:{"^":"m:9;a",
$2:function(a,b){this.a[a]=b}},
lD:{"^":"lC;a,b"},
hX:{"^":"ct;a,b",
gbr:function(){var z,y,x
z=this.b
y=H.at(z,"z",0)
x=W.a3
return new H.iw(new H.kB(z,H.f(new P.hY(),{func:1,ret:P.ag,args:[y]}),[y]),H.f(new P.hZ(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.E(b)
H.h(c,"$isa3")
z=this.gbr()
J.hl(z.b.$1(J.cP(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aD:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.aw(this.gbr().a)},
j:function(a,b){var z=this.gbr()
return z.b.$1(J.cP(z.a,b))},
ga5:function(a){var z=P.iq(this.gbr(),!1,W.a3)
return new J.ax(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.a3]},
$asi:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
hY:{"^":"m:33;",
$1:function(a){return!!J.M(H.h(a,"$isN")).$isa3}},
hZ:{"^":"m:30;",
$1:function(a){return H.k(H.h(a,"$isN"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bN:{"^":"b;t:a>,u:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
A:function(a,b){var z,y,x
if(b==null)return!1
z=H.bw(b,"$isbN",[P.Z],null)
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gt(b)
if(z==null?x==null:z===x){z=this.b
y=y.gu(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gV:function(a){var z,y
z=J.b5(this.a)
y=J.b5(this.b)
return P.fp(P.bU(P.bU(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.y(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bN(z,H.A(x*b,y),this.$ti)}},
lo:{"^":"b;$ti",
gbe:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.A(z+this.c,H.y(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bw(b,"$isa9",[P.Z],"$asa9")
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gaX(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbk(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbe(b)){if(typeof x!=="number")return x.F()
z=H.A(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.b5(z)
x=this.b
w=J.b5(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.A(x+this.d,v)
return P.fp(P.bU(P.bU(P.bU(P.bU(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dP:function(a,b){var z,y
H.w(b,"$isbN",[P.Z],"$asbN")
z=b.a
y=this.a
if(typeof z!=="number")return z.d1()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.d1()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"lo;aX:a>,bk:b>,at:c>,aq:d>,$ti",q:{
j4:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",o4:{"^":"X;0t:x=,0u:y=","%":"SVGFEBlendElement"},o5:{"^":"X;0t:x=,0u:y=","%":"SVGFEColorMatrixElement"},o6:{"^":"X;0t:x=,0u:y=","%":"SVGFEComponentTransferElement"},o7:{"^":"X;0t:x=,0u:y=","%":"SVGFECompositeElement"},o8:{"^":"X;0t:x=,0u:y=","%":"SVGFEConvolveMatrixElement"},o9:{"^":"X;0t:x=,0u:y=","%":"SVGFEDiffuseLightingElement"},oa:{"^":"X;0t:x=,0u:y=","%":"SVGFEDisplacementMapElement"},ob:{"^":"X;0t:x=,0u:y=","%":"SVGFEFloodElement"},oc:{"^":"X;0t:x=,0u:y=","%":"SVGFEGaussianBlurElement"},od:{"^":"X;0t:x=,0u:y=","%":"SVGFEImageElement"},oe:{"^":"X;0t:x=,0u:y=","%":"SVGFEMergeElement"},of:{"^":"X;0t:x=,0u:y=","%":"SVGFEMorphologyElement"},og:{"^":"X;0t:x=,0u:y=","%":"SVGFEOffsetElement"},oh:{"^":"X;0t:x=,0u:y=","%":"SVGFEPointLightElement"},oi:{"^":"X;0t:x=,0u:y=","%":"SVGFESpecularLightingElement"},oj:{"^":"X;0t:x=,0u:y=","%":"SVGFESpotLightElement"},ok:{"^":"X;0t:x=,0u:y=","%":"SVGFETileElement"},ol:{"^":"X;0t:x=,0u:y=","%":"SVGFETurbulenceElement"},on:{"^":"X;0t:x=,0u:y=","%":"SVGFilterElement"},oo:{"^":"bG;0t:x=,0u:y=","%":"SVGForeignObjectElement"},i1:{"^":"bG;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bG:{"^":"X;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ot:{"^":"bG;0t:x=,0u:y=","%":"SVGImageElement"},bJ:{"^":"q;",$isbJ:1,"%":"SVGLength"},ow:{"^":"la;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.h(c,"$isbJ")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bJ]},
$isi:1,
$asi:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asD:function(){return[P.bJ]},
"%":"SVGLengthList"},oA:{"^":"X;0t:x=,0u:y=","%":"SVGMaskElement"},bM:{"^":"q;",$isbM:1,"%":"SVGNumber"},oM:{"^":"ll;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.h(c,"$isbM")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asD:function(){return[P.bM]},
"%":"SVGNumberList"},oR:{"^":"X;0t:x=,0u:y=","%":"SVGPatternElement"},oT:{"^":"q;0t:x=,0u:y=","%":"SVGPoint"},oU:{"^":"q;0l:length=","%":"SVGPointList"},oV:{"^":"q;0t:x=,0u:y=","%":"SVGRect"},oW:{"^":"i1;0t:x=,0u:y=","%":"SVGRectElement"},p_:{"^":"X;0a7:type}","%":"SVGScriptElement"},p6:{"^":"lB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asz:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},p9:{"^":"X;0a7:type}","%":"SVGStyleElement"},X:{"^":"a3;",
gct:function(a){return new P.hX(a,new W.kK(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},pa:{"^":"bG;0t:x=,0u:y=","%":"SVGSVGElement"},jD:{"^":"bG;","%":"SVGTextPathElement;SVGTextContentElement"},pc:{"^":"jD;0t:x=,0u:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bP:{"^":"q;",$isbP:1,"%":"SVGTransform"},pi:{"^":"lO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.h(c,"$isbP")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asD:function(){return[P.bP]},
"%":"SVGTransformList"},pk:{"^":"bG;0t:x=,0u:y=","%":"SVGUseElement"},l9:{"^":"q+z;"},la:{"^":"l9+D;"},lk:{"^":"q+z;"},ll:{"^":"lk+D;"},lA:{"^":"q+z;"},lB:{"^":"lA+D;"},lN:{"^":"q+z;"},lO:{"^":"lN+D;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$isjT:1}}],["","",,P,{"^":"",nG:{"^":"q;0l:length=","%":"AudioBuffer"},dV:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nH:{"^":"kJ;",
j:function(a,b){return P.aY(a.get(H.O(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aY(y.value[1]))}},
gar:function(a){var z=H.d([],[P.j])
this.L(a,new P.hp(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},hp:{"^":"m:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},hq:{"^":"dV;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nI:{"^":"a7;0l:length=","%":"AudioTrackList"},ht:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nJ:{"^":"dV;0a7:type}","%":"BiquadFilterNode"},oP:{"^":"ht;0l:length=","%":"OfflineAudioContext"},oQ:{"^":"hq;0a7:type}","%":"Oscillator|OscillatorNode"},kJ:{"^":"q+aj;"}}],["","",,P,{"^":"",df:{"^":"q;",
iy:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mG(g))
return}if(!!z.$iseh)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c1("Incorrect number or type of arguments"))},
ix:function(a,b,c,d,e,f,g){return this.iy(a,b,c,d,e,f,g,null,null,null)},
$isdf:1,
"%":"WebGLRenderingContext"},jE:{"^":"q;",$isjE:1,"%":"WebGLTexture"},k1:{"^":"q;",$isk1:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p4:{"^":"ly;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aY(a.item(b))},
m:function(a,b,c){H.E(b)
H.h(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asz:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isc:1,
$asc:function(){return[[P.K,,,]]},
$asD:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},lx:{"^":"q+z;"},ly:{"^":"lx+D;"}}],["","",,O,{"^":"",an:{"^":"b;0a,0b,0c,0d,$ti",
bp:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
d3:function(a,b,c){var z=H.at(this,"an",0)
H.f(b,{func:1,ret:P.ag,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
b0:function(a,b){return this.d3(a,null,b)},
dv:function(a){var z
H.w(a,"$isi",[H.at(this,"an",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
da:function(a,b){var z
H.w(b,"$isi",[H.at(this,"an",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga5:function(a){var z=this.a
return new J.ax(z,z.length,0,[H.y(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.at(this,"an",0)
H.A(b,z)
z=[z]
if(this.dv(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.da(x,H.d([b],z))}},
cj:function(a,b){var z,y
H.w(b,"$isi",[H.at(this,"an",0)],"$asi")
if(this.dv(b)){z=this.a
y=z.length
C.a.cj(z,b)
this.da(y,b)}},
$isi:1,
q:{
cX:function(a){var z=new O.an([a])
z.bp(a)
return z}}},d9:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eP:function(a){var z=this.b
if(!(z==null))z.E(a)},
aJ:function(){return this.eP(null)},
ga2:function(a){var z=this.a
if(z.length>0)return C.a.gaF(z)
else return V.bd()},
bQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.bd())
else C.a.h(z,a)
this.aJ()},
aG:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cQ:{"^":"b;"},aQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a8:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
saa:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.f(this.gep(),{func:1,ret:-1,args:[D.p]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.f(this.gep(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.J("shape",z,this.c,this,[F.eH])
w.b=!0
this.aY(w)}},
ao:function(a,b){var z
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.I();)z.d.ao(0,b)},
ac:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga2(z))
z.aJ()
a.cR(this.f)
z=a.dy
y=(z&&C.a).gaF(z)
if(y!=null&&this.d!=null)y.er(a,this)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.I();)z.d.ac(a)
a.cQ()
a.dx.aG()},
gw:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aY:function(a){var z=this.z
if(!(z==null))z.E(a)},
a6:function(){return this.aY(null)},
ib:[function(a){H.h(a,"$isp")
this.e=null
this.aY(a)},function(){return this.ib(null)},"jm","$1","$0","gep",0,2,1],
i9:[function(a){this.aY(H.h(a,"$isp"))},function(){return this.i9(null)},"jk","$1","$0","geo",0,2,1],
jj:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.geo(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.b9()
t.a=H.d([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a6()},"$2","gi8",8,0,10],
jl:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.geo(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.b9()
t.a=H.d([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.f(y,x)
C.a.M(t.a,y)}}this.a6()},"$2","gia",8,0,10],
$isaH:1,
q:{
ed:function(a,b,c,d,e,f){var z,y
z=new E.aQ()
z.a=d
z.b=!0
y=O.cX(E.aQ)
z.y=y
y.b0(z.gi8(),z.gia())
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
z.saa(0,e)
return z}}},j9:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eM:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ao(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d9()
y=[V.aD]
z.a=H.d([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.f(new E.jb(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d9()
z.a=H.d([],y)
v=z.gw()
v.toString
x=H.f(new E.jc(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d9()
z.a=H.d([],y)
y=z.gw()
y.toString
w=H.f(new E.jd(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.cc])
this.dy=z
C.a.h(z,null)
this.fr=new H.b0(0,0,[P.j,A.dh])},
gim:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga2(z)
y=this.db
y=z.k(0,y.ga2(y))
this.z=y
z=y}return z},
cR:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaF(z):a;(z&&C.a).h(z,y)},
cQ:function(){var z=this.dy
if(z.length>1)z.pop()},
dK:function(a){var z=a.b
if(z.length===0)throw H.a(P.x("May not cache a shader with no name."))
if(this.fr.bA(0,z))throw H.a(P.x('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
q:{
ja:function(a,b){var z=new E.j9(a,b)
z.eM(a,b)
return z}}},jb:{"^":"m:15;a",
$1:function(a){var z
H.h(a,"$isp")
z=this.a
z.z=null
z.ch=null}},jc:{"^":"m:15;a",
$1:function(a){var z
H.h(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jd:{"^":"m:15;a",
$1:function(a){var z
H.h(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},jK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a8:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
eR:[function(a){var z
H.h(a,"$isp")
z=this.x
if(!(z==null))z.E(a)
this.is()},function(){return this.eR(null)},"eQ","$1","$0","gdc",0,2,1],
ghU:function(){var z,y,x
z=Date.now()
y=C.d.a9(P.ec(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
dA:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.cG(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cG(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
is:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jM(this),{func:1,ret:-1,args:[P.Z]})
C.B.f7(z)
C.B.fS(z,W.fR(y,P.Z))}},
iq:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dA()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.ec(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aJ()
w=x.db
C.a.sl(w.a,0)
w.aJ()
w=x.dx
C.a.sl(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ac(this.e)}}catch(v){z=H.av(v)
y=H.bz(v)
P.dN("Error: "+H.l(z))
P.dN("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jL:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscV)return E.eO(a,!0,!0,!0,!1)
y=W.cW(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gct(a).h(0,y)
w=E.eO(y,!0,!0,!0,!1)
w.a=a
return w},
eO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jK()
y=P.ik(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bU(a,"webgl",y)
x=H.h(x==null?C.l.bU(a,"experimental-webgl",y):x,"$isdf")
if(x==null)H.u(P.x("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ja(x,a)
w=new T.jF(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ke(a)
v=new X.ic()
v.c=new X.aF(!1,!1,!1)
v.d=P.io(null,null,null,P.n)
w.b=v
v=new X.iI(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.is(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jQ(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eL,P.b]])
w.z=v
u=document
t=W.aG
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.f(w.gfq(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.f(w.gfu(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.f(w.gfm(),q),!1,r))
v=w.z
p=W.bI
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.f(w.gfw(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.f(w.gfv(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.f(w.gfB(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.f(w.gfD(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.f(w.gfC(),s),!1,t))
p=w.z
o=W.bS;(p&&C.a).h(p,W.a2(a,H.O(W.hR(a)),H.f(w.gfE(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.f(w.gfs(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.f(w.gft(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.f(w.gfF(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.f(w.gfN(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.f(w.gfL(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.f(w.gfM(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.dA()
return z}}},jM:{"^":"m:31;a",
$1:function(a){var z
H.nq(a)
z=this.a
if(z.z){z.z=!1
z.iq()}}}}],["","",,Z,{"^":"",fj:{"^":"b;a,b",q:{
du:function(a,b,c){var z
H.w(c,"$isc",[P.n],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bt(c)),35044)
a.bindBuffer(b,null)
return new Z.fj(b,z)}}},dZ:{"^":"cQ;a,b,c,d,e",
a0:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.av(y)
x=P.x('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fk:{"^":"b;a",$isnK:1},cU:{"^":"b;a,0b,c,d",
aE:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a0:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a0(a)},
aH:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ac:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.H(y,", ")+"\nAttrs:   "+C.a.H(u,", ")},
$ispb:1},cs:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bg(this.c)+"'")+"]"}},bq:{"^":"b;a",
gd5:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=2
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$bQ().a)!==0)y+=3
if((z&$.$get$bR().a)!==0)y+=4
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
hC:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fi()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bq))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.j])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aW().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bQ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bR().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$br().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.H(z,"|")},
q:{
as:function(a){return new Z.bq(a)}}}}],["","",,D,{"^":"",e1:{"^":"b;"},b9:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.hV(z))
return x!==0},
hN:function(){return this.E(null)},
it:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
as:function(a){return this.it(a,!0,!1)},
q:{
H:function(){var z=new D.b9()
z.a=H.d([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},hV:{"^":"m:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"b;a,0b"},c5:{"^":"p;c,d,a,0b,$ti"},c6:{"^":"p;c,d,a,0b,$ti"},J:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e_:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
q:{"^":"nM<"}},en:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.en))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eo:{"^":"p;c,a,0b"},ic:{"^":"b;0a,0b,0c,0d",
ij:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eo(a,this)
y.b=!0
return z.E(y)},
ie:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eo(a,this)
y.b=!0
return z.E(y)}},es:{"^":"cv;x,y,c,d,e,a,0b"},is:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ax:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gaR()
s=new X.bK(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cP:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.ax(a,b))
return!0},
bc:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eE()
if(typeof z!=="number")return z.bT()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.ax(a,b))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.ax(a,b))
return!0},
ik:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.da(new V.Y(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.E(w)
return!0},
fA:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.es(c,a,this.a.gaR(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.R(0,0)}},aF:{"^":"b;a,b,c",
A:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bK:{"^":"cv;x,y,z,Q,ch,c,d,e,a,0b"},iI:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c1:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaR()
x=new X.bK(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cP:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.c1(a,b,!0))
return!0},
bc:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eE()
if(typeof z!=="number")return z.bT()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.c1(a,b,!0))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.c1(a,b,!1))
return!0},
il:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.da(new V.Y(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdS:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbS:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gen:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},da:{"^":"cv;x,c,d,e,a,0b"},cv:{"^":"p;"},eS:{"^":"cv;x,y,z,Q,ch,c,d,e,a,0b"},jQ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ax:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaR()
w=new X.eS(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ii:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.E(this.ax(a,!0))
return!0},
ig:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.E(this.ax(a,!0))
return!0},
ih:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.E(this.ax(a,!1))
return!0}},ke:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaR:function(){var z=this.a
return V.eG(0,0,(z&&C.l).gbz(z).c,C.l.gbz(z).d)},
dm:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.en(z,new X.aF(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
cg:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
ay:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.R(y-w,x-v)},
b2:function(a){return new V.Y(a.movementX,a.movementY)},
ca:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.aj(u.pageX)
C.h.aj(u.pageY)
s=z.left
C.h.aj(u.pageX)
C.a.h(y,new V.R(t-s,C.h.aj(u.pageY)-z.top))}return y},
av:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e_(z,new X.aF(y,a.altKey,a.shiftKey))},
iV:[function(a){this.f=!0},"$1","gfu",4,0,6],
iP:[function(a){this.f=!1},"$1","gfm",4,0,6],
iS:[function(a){if(this.f)a.preventDefault()},"$1","gfq",4,0,6],
iX:[function(a){var z
H.h(a,"$isbI")
if(!this.f)return
z=this.dm(a)
if(this.b.ij(z))a.preventDefault()},"$1","gfw",4,0,27],
iW:[function(a){var z
H.h(a,"$isbI")
if(!this.f)return
z=this.dm(a)
if(this.b.ie(z))a.preventDefault()},"$1","gfv",4,0,27],
iZ:[function(a){var z,y,x,w
H.h(a,"$isaG")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.av(a)
x=this.b2(a)
if(this.d.cP(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.av(a)
w=this.ay(a)
if(this.c.cP(y,w))a.preventDefault()},"$1","gfB",4,0,5],
j0:[function(a){var z,y,x
H.h(a,"$isaG")
this.aP(a)
z=this.av(a)
if(this.x){y=this.b2(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.bc(z,x))a.preventDefault()},"$1","gfD",4,0,5],
iU:[function(a){var z,y,x,w
H.h(a,"$isaG")
z=this.a
if(!(z&&C.l).gbz(z).dP(0,new P.bN(a.clientX,a.clientY,[P.Z]))){this.aP(a)
y=this.av(a)
if(this.x){x=this.b2(a)
if(this.d.bc(y,x))a.preventDefault()
return}if(this.r)return
w=this.ay(a)
if(this.c.bc(y,w))a.preventDefault()}},"$1","gft",4,0,5],
j_:[function(a){var z,y,x
H.h(a,"$isaG")
this.aP(a)
z=this.av(a)
if(this.x){y=this.b2(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","gfC",4,0,5],
iT:[function(a){var z,y,x,w
H.h(a,"$isaG")
z=this.a
if(!(z&&C.l).gbz(z).dP(0,new P.bN(a.clientX,a.clientY,[P.Z]))){this.aP(a)
y=this.av(a)
if(this.x){x=this.b2(a)
if(this.d.bb(y,x))a.preventDefault()
return}if(this.r)return
w=this.ay(a)
if(this.c.bb(y,w))a.preventDefault()}},"$1","gfs",4,0,5],
j1:[function(a){var z,y
H.h(a,"$isbS")
this.aP(a)
z=new V.Y((a&&C.A).ghL(a),C.A.ghM(a)).v(0,180)
if(this.x){if(this.d.ik(z))a.preventDefault()
return}if(this.r)return
y=this.ay(a)
if(this.c.il(z,y))a.preventDefault()},"$1","gfE",4,0,35],
j2:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.av(this.y)
v=this.ay(this.y)
this.d.fA(w,v,x)}},"$1","gfF",4,0,6],
ja:[function(a){var z
H.h(a,"$isbp")
this.a.focus()
this.f=!0
this.cg(a)
z=this.ca(a)
if(this.e.ii(z))a.preventDefault()},"$1","gfN",4,0,12],
j8:[function(a){var z
H.h(a,"$isbp")
this.cg(a)
z=this.ca(a)
if(this.e.ig(z))a.preventDefault()},"$1","gfL",4,0,12],
j9:[function(a){var z
H.h(a,"$isbp")
this.cg(a)
z=this.ca(a)
if(this.e.ih(z))a.preventDefault()},"$1","gfM",4,0,12]}}],["","",,D,{"^":"",cp:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aK:[function(a){var z
H.h(a,"$isp")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aK(null)},"iE","$1","$0","geS",0,2,1],
$isa4:1,
$isaH:1},a4:{"^":"b;",$isaH:1},id:{"^":"an;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fz:[function(a){var z
H.h(a,"$isp")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fz(null)},"iY","$1","$0","gdu",0,2,1],
j3:[function(a){var z,y,x
H.w(a,"$isi",[D.a4],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f3(x))return!1}return!0},"$1","gfG",4,0,37],
iM:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdu(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa4")
if(t instanceof D.cp)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfj",8,0,26],
j5:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdu(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa4")
if(t instanceof D.cp)C.a.M(this.e,t)
s=t.d
if(s==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.M(s.a,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfI",8,0,26],
f3:function(a){var z=C.a.b5(this.e,a)
return z},
$asi:function(){return[D.a4]},
$asan:function(){return[D.a4]}},iR:{"^":"b;",$isa4:1,$isaH:1},jv:{"^":"b;",$isa4:1,$isaH:1},jH:{"^":"b;",$isa4:1,$isaH:1},jI:{"^":"b;",$isa4:1,$isaH:1},jJ:{"^":"b;",$isa4:1,$isaH:1}}],["","",,V,{"^":"",
nO:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iF",8,0,34],
nB:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bn(a-b,z)
return(a<0?a+z:a)+b},
S:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.h.ex($.t.$2(a,0)?0:a,b),c+b+1)},
by:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.r],"$asc")
z=H.d([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.S(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.ai(z[u],x))}return z},
dM:function(a,b){return C.h.iA(Math.pow(b,C.I.cG(Math.log(H.mD(a))/Math.log(b))))},
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
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
ay:{"^":"b;a,b,c,d",
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
return new V.ay(z,y,x,w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
cu:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscu")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.h.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.h.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.h.k(t,s)
q=a5.b
p=C.h.k(z,q)
o=a5.e
n=C.h.k(w,o)
m=a5.x
l=C.h.k(t,m)
k=a5.c
z=C.h.k(z,k)
j=a5.f
w=C.h.k(w,j)
i=a5.y
t=C.h.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.h.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.h.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.h.k(d,s)
b=C.h.k(h,q)
a=C.h.k(f,o)
a0=C.h.k(d,m)
h=C.h.k(h,k)
f=C.h.k(f,j)
d=C.h.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.h.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.h.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cu(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cu))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.r]
y=V.by(H.d([this.a,this.d,this.r],z),3,0)
x=V.by(H.d([this.b,this.e,this.x],z),3,0)
w=V.by(H.d([this.c,this.f,this.y],z),3,0)
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
ad:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
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
if($.t.$2(a2,0))return V.bd()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isaD")
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
bl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
z=b.e
if(!$.t.$2(z,this.e))return!1
z=b.f
if(!$.t.$2(z,this.f))return!1
z=b.r
if(!$.t.$2(z,this.r))return!1
z=b.x
if(!$.t.$2(z,this.x))return!1
z=b.y
if(!$.t.$2(z,this.y))return!1
z=b.z
if(!$.t.$2(z,this.z))return!1
z=b.Q
if(!$.t.$2(z,this.Q))return!1
z=b.ch
if(!$.t.$2(z,this.ch))return!1
z=b.cx
if(!$.t.$2(z,this.cx))return!1
z=b.cy
if(!$.t.$2(z,this.cy))return!1
z=b.db
if(!$.t.$2(z,this.db))return!1
z=b.dx
if(!$.t.$2(z,this.dx))return!1
return!0},
i:function(a){return this.O()},
ed:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.by(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.by(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.by(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.by(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.ed("",3,0)},
G:function(a){return this.ed(a,3,0)},
q:{
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bd:function(){return V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ev:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.D(c)))
y=b.az(z)
x=y.v(0,Math.sqrt(y.D(y)))
w=z.az(x)
v=new V.F(a.a,a.b,a.c)
return V.aE(x.a,w.a,z.a,x.S(0).D(v),x.b,w.b,z.b,w.S(0).D(v),x.c,w.c,z.c,z.S(0).D(v),0,0,0,1)}}},
R:{"^":"b;t:a>,u:b>",
N:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.R(this.a*b,this.b*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
V:{"^":"b;t:a>,u:b>,c",
F:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
aI:{"^":"b;t:a>,u:b>,c,d",
k:function(a,b){return new V.aI(this.a*b,this.b*b,this.c*b,this.d*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
eF:{"^":"b;t:a>,u:b>,c,d",
gab:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
z=b.d
if(!$.t.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"},
q:{
eG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)}}},
Y:{"^":"b;a,b",
i1:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,25],
D:function(a){var z,y,x,w
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
return new V.Y(z*b,y*b)},
v:function(a,b){var z,y
if($.t.$2(b,0))return new V.Y(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Y(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
F:{"^":"b;a,b,c",
i1:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,25],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.F(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
az:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.F(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.t.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
em:function(){if(!$.t.$2(0,this.a))return!1
if(!$.t.$2(0,this.b))return!1
if(!$.t.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.t.$2(z,this.a))return!1
z=b.b
if(!$.t.$2(z,this.b))return!1
z=b.c
if(!$.t.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hA:{"^":"e1;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bX:function(a){var z=V.nB(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
U:function(a){var z=this.y
if(!(z==null))z.E(a)},
sd_:function(a,b){},
scM:function(a){var z,y
z=this.b
if(!$.t.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bX(z)}z=new D.J("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.U(z)}},
scO:function(a){var z,y
z=this.c
if(!$.t.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bX(z)}z=new D.J("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.U(z)}},
sa1:function(a,b){var z,y
b=this.bX(b)
z=this.d
if(!$.t.$2(z,b)){y=this.d
this.d=b
z=new D.J("location",y,b,this,[P.r])
z.b=!0
this.U(z)}},
scN:function(a){var z,y,x
z=this.e
if(!$.t.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.J("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.U(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.t.$2(z,a)){x=this.f
this.f=a
z=new D.J("velocity",x,a,this,[P.r])
z.b=!0
this.U(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.t.$2(z,a)){y=this.x
this.x=a
z=new D.J("dampening",y,a,this,[P.r])
z.b=!0
this.U(z)}},
ao:function(a,b){var z,y,x,w
z=this.f
if($.t.$2(z,0)){z=this.r
z=!$.t.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.t.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
q:{
cY:function(){var z=new U.hA()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e3:{"^":"ah;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
b_:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e3))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
q:{
e4:function(a){var z=new U.e3()
z.a=a
return z}}},eg:{"^":"an;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
U:[function(a){var z
H.h(a,"$isp")
z=this.e
if(!(z==null))z.E(a)},function(){return this.U(null)},"al","$1","$0","gaL",0,2,1],
iL:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gfi",8,0,23],
j4:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.M(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gfH",8,0,23],
b_:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ax(z,z.length,0,[H.y(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.b_(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bd():x
z=this.e
if(!(z==null))z.as(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eg))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.T(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ah]},
$asan:function(){return[U.ah]},
$isah:1},ah:{"^":"e1;"},kf:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
U:[function(a){var z
H.h(a,"$isp")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.U(null)},"al","$1","$0","gaL",0,2,1],
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdS()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.f(this.gc4(),y)
C.a.h(z.a,x)
x=this.a.c.gen()
x.toString
z=H.f(this.gc5(),y)
C.a.h(x.a,z)
z=this.a.c.gbS()
z.toString
y=H.f(this.gc6(),y)
C.a.h(z.a,y)
return!0},
fe:[function(a){H.h(a,"$isp")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc4",4,0,2],
ff:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isp"),"$isbK")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.Y(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.Y(y.a,y.b).k(0,2).v(0,z.gab())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sW(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.Y(x.a,x.b).k(0,2).v(0,z.gab())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
this.b.sW(0)
y=y.N(0,a.z)
this.Q=new V.Y(y.a,y.b).k(0,2).v(0,z.gab())}this.al()},"$1","gc5",4,0,2],
fg:[function(a){var z,y,x
H.h(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sW(y*10*x)
this.al()}},"$1","gc6",4,0,2],
b_:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.ch=y
x=b.y
this.b.ao(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aE(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isah:1},kg:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
U:[function(a){var z
H.h(a,"$isp")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.U(null)},"al","$1","$0","gaL",0,2,1],
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdS()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.f(this.gc4(),y)
C.a.h(z.a,x)
x=this.a.c.gen()
x.toString
z=H.f(this.gc5(),y)
C.a.h(x.a,z)
z=this.a.c.gbS()
z.toString
x=H.f(this.gc6(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.f(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gfc(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.f(this.gh9(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gh8(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.f(this.gh7(),y)
C.a.h(z.a,y)
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.Y(z,y)},
fe:[function(a){a=H.k(H.h(a,"$isp"),"$isbK")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc4",4,0,2],
ff:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isp"),"$isbK")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.Y(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.ap(new V.Y(y.a,y.b).k(0,2).v(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.ap(new V.Y(x.a,x.b).k(0,2).v(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.N(0,a.z)
this.dx=this.ap(new V.Y(y.a,y.b).k(0,2).v(0,z.gab()))}this.al()},"$1","gc5",4,0,2],
fg:[function(a){var z,y,x
H.h(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sW(-y*10*z)
this.al()}},"$1","gc6",4,0,2],
iI:[function(a){if(H.k(H.h(a,"$isp"),"$ises").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfb",4,0,2],
iJ:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isp"),"$isbK")
if(!J.T(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.ap(new V.Y(x.a,x.b).k(0,2).v(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.N(0,a.z)
this.dx=this.ap(new V.Y(y.a,y.b).k(0,2).v(0,z.gab()))
this.al()},"$1","gfc",4,0,2],
je:[function(a){H.h(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh9",4,0,2],
jd:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isp"),"$iseS")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.Y(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.ap(new V.Y(y.a,y.b).k(0,2).v(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.ap(new V.Y(x.a,x.b).k(0,2).v(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.N(0,a.z)
this.dx=this.ap(new V.Y(y.a,y.b).k(0,2).v(0,z.gab()))}this.al()},"$1","gh8",4,0,2],
jc:[function(a){var z,y,x
H.h(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sW(-y*10*z)
this.al()}},"$1","gh7",4,0,2],
b_:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.ao(0,x)
this.b.ao(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aE(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aE(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1},kh:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
U:function(a){var z=this.r
if(!(z==null))z.E(a)},
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.f(this.gfh(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iK:[function(a){var z,y,x,w
H.h(a,"$isp")
if(!J.T(this.b,this.a.b.c))return
H.k(a,"$isda")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.J("zoom",z,w,this,[P.r])
z.b=!0
this.U(z)}},"$1","gfh",4,0,2],
b_:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aE(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isah:1}}],["","",,M,{"^":"",hB:{"^":"an;0e,0f,0a,0b,0c,0d",
gw:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a4:[function(a){var z
H.h(a,"$isp")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a4(null)},"dd","$1","$0","gY",0,2,1],
j6:[function(a,b){var z,y,x,w,v,u,t
z=M.aJ
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gfJ",8,0,21],
j7:[function(a,b){var z,y,x,w,v,u,t
z=M.aJ
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.M(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gfK",8,0,21],
ac:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.I();){y=z.d
if(!(y==null))y.ac(a)}this.e=!1},
$asi:function(){return[M.aJ]},
$asan:function(){return[M.aJ]},
$isaJ:1},hG:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a4:[function(a){var z
H.h(a,"$isp")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a4(null)},"dd","$1","$0","gY",0,2,1],
sb4:function(a){var z,y,x
if(a==null)a=new X.i2()
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.M(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.cm])
z.b=!0
this.a4(z)}},
sbf:function(a,b){var z,y,x
if(b==null)b=X.d_(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.M(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.dk])
z.b=!0
this.a4(z)}},
sbg:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.cc])
z.b=!0
this.a4(z)}},
ac:function(a){a.cR(this.c)
this.b.a0(a)
this.a.a0(a)
this.d.ao(0,a)
this.d.ac(a)
this.a.aH(a)
this.b.toString
a.cQ()},
$isaJ:1},hT:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a4:[function(a){var z
H.h(a,"$isp")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a4(null)},"dd","$1","$0","gY",0,2,1],
iQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aQ
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.sa8(s)}s=t.ga8()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gfo",8,0,10],
iR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aQ
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.b9()
s.a=H.d([],v)
s.c=0
t.sa8(s)}s=t.ga8()
s.toString
H.f(x,w)
C.a.M(s.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gfp",8,0,10],
sb4:function(a){var z,y,x
if(a==null)a=X.eA(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.M(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("camera",x,this.a,this,[X.cm])
z.b=!0
this.a4(z)}},
sbf:function(a,b){var z,y,x
if(b==null)b=X.d_(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.M(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.J("target",x,this.b,this,[X.dk])
z.b=!0
this.a4(z)}},
sbg:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.J("technique",x,this.c,this,[O.cc])
z.b=!0
this.a4(z)}},
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
ac:function(a){var z
a.cR(this.c)
this.b.a0(a)
this.a.a0(a)
z=this.c
if(z!=null)z.ao(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.I();)z.d.ao(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.I();)z.d.ac(a)
this.a.toString
a.cy.aG()
a.db.aG()
this.b.toString
a.cQ()},
$isaJ:1},aJ:{"^":"b;"}}],["","",,A,{"^":"",dU:{"^":"b;a,b,c"},ho:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hO:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eu:{"^":"dh;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aV,0aC,0aW,0bB,0dT,0dU,0bC,0bD,0dV,0dW,0bE,0bF,0dX,0dY,0bG,0dZ,0e_,0bH,0e0,0e1,0bI,0bJ,0bK,0e2,0e3,0bL,0bM,0e4,0e5,0bN,0e6,0cA,0e7,0cB,0e8,0cC,0e9,0cD,0ea,0cE,0eb,0cF,a,b,0c,0d,0e,0f,0r",
eL:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.aq("")
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
z=new P.aq("")
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
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
r=z.a+="   return litClr*("+C.a.H(p," + ")+");\n"
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
n="vec4("+C.a.H(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.el(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaL")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaL")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaL")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaL")
if(a1.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdr")
if(a1.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaL")
if(a1.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.d([],[A.aL])
y=a1.aV
if(y>0){this.k2=H.h(this.r.n(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.u(P.x("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaL"))}}y=a1.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isar")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isak")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isar")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isak")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.aV=H.k(this.r.n(0,"diffuseTxt"),"$isar")
this.aW=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.aC=H.k(this.r.n(0,"diffuseTxt"),"$isak")
this.aW=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bB=H.k(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dT=H.k(this.r.n(0,"invDiffuseTxt"),"$isar")
this.bC=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dU=H.k(this.r.n(0,"invDiffuseTxt"),"$isak")
this.bC=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bF=H.k(this.r.n(0,"shininess"),"$isa_")
this.bD=H.k(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dV=H.k(this.r.n(0,"specularTxt"),"$isar")
this.bE=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dW=H.k(this.r.n(0,"specularTxt"),"$isak")
this.bE=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.e:this.dX=H.k(this.r.n(0,"bumpTxt"),"$isar")
this.bG=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dY=H.k(this.r.n(0,"bumpTxt"),"$isak")
this.bG=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.dZ=H.k(this.r.n(0,"envSampler"),"$isak")
this.e_=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bH=H.k(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.e0=H.k(this.r.n(0,"reflectTxt"),"$isar")
this.bI=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.e1=H.k(this.r.n(0,"reflectTxt"),"$isak")
this.bI=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bJ=H.k(this.r.n(0,"refraction"),"$isa_")
this.bK=H.k(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.e2=H.k(this.r.n(0,"refractTxt"),"$isar")
this.bL=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.e3=H.k(this.r.n(0,"refractTxt"),"$isak")
this.bL=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bM=H.k(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.i:break
case C.e:this.e4=H.k(this.r.n(0,"alphaTxt"),"$isar")
this.bN=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.e5=H.k(this.r.n(0,"alphaTxt"),"$isak")
this.bN=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cA=H.d([],[A.f4])
this.cB=H.d([],[A.f5])
this.cC=H.d([],[A.f6])
this.cD=H.d([],[A.f7])
this.cE=H.d([],[A.f8])
this.cF=H.d([],[A.f9])
if(a1.k2){y=a1.z
if(y>0){this.e6=H.h(this.r.n(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.cA;(x&&C.a).h(x,new A.f4(m,l,k))}}y=a1.Q
if(y>0){this.e7=H.h(this.r.n(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isa_")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa_")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.cB;(x&&C.a).h(x,new A.f5(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e8=H.h(this.r.n(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa_")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.cC;(x&&C.a).h(x,new A.f6(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e9=H.h(this.r.n(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isar")
x=this.cD;(x&&C.a).h(x,new A.f7(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ea=H.h(this.r.n(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdr")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isak")
x=this.cE;(x&&C.a).h(x,new A.f8(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eb=H.h(this.r.n(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.u(P.x("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isar")
x=this.cF;(x&&C.a).h(x,new A.f9(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
am:function(a,b,c){b.a.uniform1i(b.d,1)},
ag:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.d4(c)
b.a.uniform1i(b.d,0)}},
q:{
iz:function(a,b){var z,y
z=a.aC
y=new A.eu(b,z)
y.d9(b,z)
y.eL(a,b)
return y}}},iC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aV,aC,aW",
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
z=a.a+="uniform BendingValue bendValues["+this.aV+"];\n"
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
aw:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aI(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hg:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aw(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
this.aw(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
this.aw(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
this.aw(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
this.aw(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
case C.e:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.f:z+="uniform samplerCube bumpTxt;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
this.aw(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
this.aw(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i:function(a){return this.aC}},f4:{"^":"b;a,b,c"},f7:{"^":"b;a,b,c,d,e,f,r,x"},f5:{"^":"b;a,b,c,d,e,f,r"},f8:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dh:{"^":"cQ;",
d9:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
el:function(a,b,c){var z,y,x
this.c=this.dn(b,35633)
this.d=this.dn(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fV(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.u(P.x("Failed to link shader: "+H.l(x)))}this.h2()
this.h4()},
a0:function(a){a.a.useProgram(this.e)
this.f.hO()},
dn:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fV(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.x("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
h2:function(){var z,y,x,w,v,u
z=H.d([],[A.dU])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dU(y,v.name,u))}this.f=new A.ho(z)},
h4:function(){var z,y,x,w,v,u
z=H.d([],[A.ad])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hK(v.type,v.size,v.name,u))}this.r=new A.k0(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dq(z,y,b,a,c)},
f4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.dq(z,y,b,a,c)},
f5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ak(z,y,b,c)
else return A.dq(z,y,b,a,c)},
bw:function(a,b){return new P.fn(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hK:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.jW(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jZ(this.a,this.e,c,d)
case 35667:return new A.jX(this.a,this.e,c,d)
case 35668:return new A.jY(this.a,this.e,c,d)
case 35669:return new A.k_(this.a,this.e,c,d)
case 35674:return new A.k2(this.a,this.e,c,d)
case 35675:return new A.dr(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.f4(b,c,d)
case 35680:return this.f5(b,c,d)
case 35670:throw H.a(this.bw("BOOL",c))
case 35671:throw H.a(this.bw("BOOL_VEC2",c))
case 35672:throw H.a(this.bw("BOOL_VEC3",c))
case 35673:throw H.a(this.bw("BOOL_VEC4",c))
default:throw H.a(P.x("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cn:{"^":"b;a,b",
i:function(a){return this.b}},eI:{"^":"dh;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ad:{"^":"b;"},k0:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
hT:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.hT("\n")}},P:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jX:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jY:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},k_:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jV:{"^":"ad;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dq:function(a,b,c,d,e){var z=new A.jV(a,b,c,e)
z.f=d
z.e=P.ip(d,0,!1,P.n)
return z}}},a_:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jW:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jZ:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},k2:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dr:{"^":"ad;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bt(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ad;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bt(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ar:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ak:{"^":"ad;a,b,c,d",
d4:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dF:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ae,P.r,P.r]})
z=F.cz()
F.bX(z,b,c,d,a,1,0,0,1)
F.bX(z,b,c,d,a,0,1,0,3)
F.bX(z,b,c,d,a,0,0,1,2)
F.bX(z,b,c,d,a,-1,0,0,0)
F.bX(z,b,c,d,a,0,-1,0,0)
F.bX(z,b,c,d,a,0,0,-1,3)
z.an()
return z},
cF:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bX:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ae,P.r,P.r]})
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
z.d=y}l=F.cF(y)
k=F.cF(z.b)
j=F.dO(d,e,new F.mm(z,F.cF(z.c),F.cF(z.d),k,l,c),b)
if(j!=null)a.ba(j)},
fZ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
z=F.cz()
y=b?-1:1
x=-6.283185307179586/e
w=H.d([],[F.ae])
v=z.a
u=new V.F(0,0,y)
u=u.v(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hz(new V.aI(a,-1,-1,-1),new V.ay(1,1,1,1),new V.V(0,0,c),new V.F(0,0,y),new V.R(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.F(r,q,y).v(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cf(new V.aI(a,-1,-1,-1),null,new V.ay(n,l,m,1),new V.V(r*p,q*p,c),new V.F(0,0,y),new V.R(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dI(w)
return z},
fW:function(a,b,c,d,e,f){return F.fX(!0,c,d,new F.mI(a,f),e)},
fX:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.dO(c,e,new F.mK(d),null)
if(z==null)return
z.an()
z.ck()
if(b)z.ba(F.fZ(3,!1,1,new F.mL(d),e))
z.ba(F.fZ(1,!0,-1,new F.mM(d),e))
return z},
ha:function(a,b,c){var z,y
z={}
z.a=b
if(H.f(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)z.a=new F.nw()
y=F.dF(a,null,new F.nx(z),c)
y.ck()
return y},
he:function(a,b,c,d){return F.fY(c,a,d,b,new F.nz())},
n0:function(a,b,c,d,e,f){return F.fY(d,a,e,b,new F.n1(f,c))},
fY:function(a,b,c,d,e){var z=F.dO(a,b,new F.mJ(H.f(e,{func:1,ret:V.V,args:[P.r]}),d,b,c),null)
if(z==null)return
z.an()
z.ck()
return z},
dO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ae,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.cz()
y=H.d([],[F.ae])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cf(null,null,new V.ay(u,0,0,1),null,null,new V.R(w,1),null,null,0)
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
t=F.cf(null,null,new V.ay(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cv(d))}}z.d.hy(a+1,b+1,y)
return z},
mm:{"^":"m:4;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cL(z.b,b).cL(z.d.cL(z.c,b),c)
a.sa1(0,new V.V(y.a,y.b,y.c))
a.sev(y.v(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdL(new V.aI(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mI:{"^":"m:7;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mK:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa1(0,new V.V(y,u,w))
u=new V.F(y,u,w)
a.sev(u.v(0,Math.sqrt(u.D(u))))
a.sdL(new V.aI(1-c,2+c,-1,-1))}},
mL:{"^":"m:19;a",
$1:function(a){return this.a.$2(a,1)}},
mM:{"^":"m:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
nw:{"^":"m:7;",
$2:function(a,b){return 0}},
nx:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.F(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.D(x))).k(0,1+z)
a.sa1(0,new V.V(z.a,z.b,z.c))}},
nz:{"^":"m:18;",
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}},
n1:{"^":"m:18;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.V(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mJ:{"^":"m:4;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dP(y.$1(z),x)
x=J.dP(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.D(x)))
u=new V.F(1,0,0)
y=v.az(!v.A(0,u)?new V.F(0,0,1):u)
t=y.v(0,Math.sqrt(y.D(y)))
y=t.az(v)
u=y.v(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa1(0,w.F(0,new V.V(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ap:{"^":"b;0a,0b,0c,0d,0e",
aB:function(){if(!this.gb7()){C.a.M(this.a.a.d.b,this)
this.a.a.a6()}this.cc()
this.cd()
this.fQ()},
h_:function(a){this.a=a
C.a.h(a.d.b,this)},
h0:function(a){this.b=a
C.a.h(a.d.c,this)},
h1:function(a){this.c=a
C.a.h(a.d.d,this)},
cc:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
cd:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
fQ:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gb7:function(){return this.a==null||this.b==null||this.c==null},
eZ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.em())return
return v.v(0,Math.sqrt(v.D(v)))},
f1:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.D(z)))
z=w.N(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.az(z.v(0,Math.sqrt(z.D(z))))
return z.v(0,Math.sqrt(z.D(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.eZ()
if(z==null){z=this.f1()
if(z==null)return!1}this.d=z
this.a.a.a6()
return!0},
eY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.em())return
return v.v(0,Math.sqrt(v.D(v)))},
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.t.$2(n,0)){z=r.N(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.N(0,u).k(0,l).F(0,u).N(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.D(z)))
z=k.az(m)
z=z.v(0,Math.sqrt(z.D(z))).az(k)
m=z.v(0,Math.sqrt(z.D(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.eY()
if(z==null){z=this.f0()
if(z==null)return!1}this.e=z
this.a.a.a6()
return!0},
ghG:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var z,y
if(this.gb7())return a+"disposed"
z=a+C.b.ai(J.ab(this.a.e),0)+", "+C.b.ai(J.ab(this.b.e),0)+", "+C.b.ai(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.G("")},
q:{
bE:function(a,b,c){var z,y,x
z=new F.ap()
y=a.a
if(y==null)H.u(P.x("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.x("May not create a face with vertices attached to different shapes."))
z.h_(a)
z.h0(b)
z.h1(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a6()
return z}}},
hW:{"^":"b;"},
jr:{"^":"hW;",
b9:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d6:{"^":"b;0a,0b",
aB:function(){if(!this.gb7()){C.a.M(this.a.a.c.b,this)
this.a.a.a6()}this.cc()
this.cd()},
cc:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
cd:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gb7:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb7())return a+"disposed"
return a+C.b.ai(J.ab(this.a.e),0)+", "+C.b.ai(J.ab(this.b.e),0)},
O:function(){return this.G("")}},
ie:{"^":"b;"},
jU:{"^":"ie;",
b9:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else return!1}}},
de:{"^":"b;0a",
aB:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.a6()}this.fP()},
fP:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ai(J.ab(z.e),0)},
O:function(){return this.G("")}},
eH:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hI())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.de()
if(r.a==null)H.u(P.x("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d6()
s=p.a
if(s==null)H.u(P.x("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.u(P.x("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bE(p,o,l)}z=this.e
if(!(z==null))z.as(0)},
an:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.an()||!1
if(!this.a.an())y=!1
z=this.e
if(!(z==null))z.as(0)
return y},
f9:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ae],"$asc")
H.w(e,"$isc",[P.n],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b9(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
i5:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ae],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.f9(a,v,y,u,t))b.ba(u)}this.a.C()
this.c.cU()
this.d.cU()
this.b.ip()
this.c.cV(new F.jU())
this.d.cV(new F.jr())
z=this.e
if(!(z==null))z.as(0)},
hB:function(a){this.i5(new F.kv(),new F.iM())},
ck:function(){return this.hB(null)},
dN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$bQ().a)!==0)++w
if((x&$.$get$bR().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gd5(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dZ])
for(r=0,q=0;q<w;++q){p=b.hC(q)
o=p.gd5(p)
C.a.m(s,q,new Z.dZ(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].i2(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bt(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cU(new Z.fj(34962,j),s,b)
i.b=H.d([],[Z.cs])
if(this.b.b.length!==0){x=P.n
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.du(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cs(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.du(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cs(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.du(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cs(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.H(z,"\n")},
aY:function(a){var z=this.e
if(!(z==null))z.E(a)},
a6:function(){return this.aY(null)},
q:{
cz:function(){var z,y
z=new F.eH()
y=new F.kq(z)
y.b=!1
y.c=H.d([],[F.ae])
z.a=y
y=new F.jm(z)
y.b=H.d([],[F.de])
z.b=y
y=new F.jl(z)
y.b=H.d([],[F.d6])
z.c=y
y=new F.jk(z)
y.b=H.d([],[F.ap])
z.d=y
z.e=null
return z}}},
jk:{"^":"b;a,0b",
dI:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ae],"$asc")
z=H.d([],[F.ap])
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
C.a.h(z,F.bE(x,v,u))}}return z},
hy:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ae],"$asc")
z=H.d([],[F.ap])
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
gl:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b9(0,v,t)){v.aB()
break}}}}},
cU:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghG(x)
if(y)x.aB()}},
an:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cs())x=!1
return x},
cr:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cq())x=!1
return x},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.H(z,"\n")},
O:function(){return this.G("")}},
jl:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b9(0,v,t)){v.aB()
break}}}}},
cU:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.T(x.a,x.b)
if(y)x.aB()}},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.d([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.H(z,"\n")},
O:function(){return this.G("")}},
jm:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ip:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aB()}},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.H(z,"\n")},
O:function(){return this.G("")}},
ae:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cv:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cf(this.cx,x,u,z,y,w,v,a,t)},
hI:function(){return this.cv(null)},
sa1:function(a,b){var z
if(!J.T(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a6()}},
sev:function(a){var z
if(!J.T(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a6()}},
sdL:function(a){var z
if(!J.T(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a6()}},
i2:function(a){var z,y
z=J.M(a)
if(z.A(a,$.$get$aB())){z=this.f
y=[P.r]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aU())){z=this.r
y=[P.r]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aT())){z=this.x
y=[P.r]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aV())){z=this.y
y=[P.r]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.A(a,$.$get$aW())){z=this.z
y=[P.r]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bQ())){z=this.Q
y=[P.r]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bR())){z=this.Q
y=[P.r]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.A(a,$.$get$br()))return H.d([this.ch],[P.r])
else if(z.A(a,$.$get$aS())){z=this.cx
y=[P.r]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.r])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.L(0,new F.kA(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.L(0,new F.kz(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var z,y,x
z=H.d([],[P.j])
C.a.h(z,C.b.ai(J.ab(this.e),0))
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
x=C.a.H(z,", ")
return a+"{"+x+"}"},
O:function(){return this.G("")},
q:{
cf:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ae()
y=new F.ky(z)
y.b=H.d([],[F.de])
z.b=y
y=new F.ku(z)
x=[F.d6]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.kr(z)
x=[F.ap]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$fg()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aU().a)!==0?e:null
z.x=(x&$.$get$aT().a)!==0?b:null
z.y=(x&$.$get$aV().a)!==0?f:null
z.z=(x&$.$get$aW().a)!==0?g:null
z.Q=(x&$.$get$fh().a)!==0?c:null
z.ch=(x&$.$get$br().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
kA:{"^":"m:8;a",
$1:function(a){var z,y
H.h(a,"$isap")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
kz:{"^":"m:8;a",
$1:function(a){var z,y
H.h(a,"$isap")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
kq:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
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
this.a.a6()
return!0},
dJ:function(a,b,c,d,e,f,g,h,i){var z=F.cf(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bx:function(a,b,c,d,e,f){return this.dJ(a,null,b,c,null,d,e,f,0)},
hz:function(a,b,c,d,e,f){return this.dJ(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
an:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cs()
return!0},
cr:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cq()
return!0},
hE:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.T(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
this.C()
z=H.d([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.H(z,"\n")},
O:function(){return this.G("")}},
kr:{"^":"b;a,0b,0c,0d",
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
L:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ap]})
C.a.L(this.b,b)
C.a.L(this.c,new F.ks(this,b))
C.a.L(this.d,new F.kt(this,b))},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.H(z,"\n")},
O:function(){return this.G("")}},
ks:{"^":"m:8;a,b",
$1:function(a){H.h(a,"$isap")
if(!J.T(a.a,this.a))this.b.$1(a)}},
kt:{"^":"m:8;a,b",
$1:function(a){var z
H.h(a,"$isap")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
ku:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.H(z,"\n")},
O:function(){return this.G("")}},
kw:{"^":"b;"},
kv:{"^":"kw;",
b9:function(a,b,c){return J.T(b.f,c.f)}},
kx:{"^":"b;"},
iM:{"^":"kx;",
ba:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ae],"$asc")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.T(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.E(null)}}}return}},
ky:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.H(z,"\n")},
O:function(){return this.G("")}}}],["","",,O,{"^":"",iy:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
Z:[function(a){var z
H.h(a,"$isp")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.Z(null)},"fn","$1","$0","gc9",0,2,1],
fU:[function(a){H.h(a,"$isp")
this.a=null
this.Z(a)},function(){return this.fU(null)},"jb","$1","$0","gfT",0,2,1],
iN:[function(a,b){var z=V.aD
z=new D.c5(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.Z(z)},"$2","gfk",8,0,17],
iO:[function(a,b){var z=V.aD
z=new D.c6(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.Z(z)},"$2","gfl",8,0,17],
dk:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a9(z.e.length+3,4)*4
x=C.d.a9(z.f.length+3,4)*4
w=C.d.a9(z.r.length+3,4)*4
v=C.d.a9(z.x.length+3,4)*4
u=C.d.a9(z.y.length+3,4)*4
t=C.d.a9(z.z.length+3,4)*4
s=C.d.a9(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+"_"
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aB()
if(c){z=$.$get$aU()
a6=new Z.bq(a6.a|z.a)}if(b){z=$.$get$aT()
a6=new Z.bq(a6.a|z.a)}if(a){z=$.$get$aV()
a6=new Z.bq(a6.a|z.a)}if(a0){z=$.$get$aW()
a6=new Z.bq(a6.a|z.a)}if(a2){z=$.$get$aS()
a6=new Z.bq(a6.a|z.a)}return new A.iC(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
X:function(a,b){H.w(a,"$isc",[T.dl],"$asc")
if(b!=null)if(!C.a.b5(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ax(z,z.length,0,[H.y(z,0)]);z.I();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cY(x)}}},
er:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dk()
y=H.h(a.fr.j(0,z.aC),"$iseu")
if(y==null){y=A.iz(z,a.a)
a.dK(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aW
z=b.e
if(!(z instanceof Z.cU)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.an()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cr()
u.a.cr()
u=u.e
if(!(u==null))u.as(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hE()
t=t.e
if(!(t==null))t.as(0)}r=b.d.dN(new Z.fk(a.a),w)
r.aE($.$get$aB()).e=this.a.y.c
if(z)r.aE($.$get$aU()).e=this.a.Q.c
if(v)r.aE($.$get$aT()).e=this.a.z.c
if(x.rx)r.aE($.$get$aV()).e=this.a.ch.c
if(u)r.aE($.$get$aW()).e=this.a.cx.c
if(x.x1)r.aE($.$get$aS()).e=this.a.cy.c
b.e=r}z=T.dl
q=H.d([],[z])
this.a.a0(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga2(u)
v=v.db
v.toString
v.ak(u.ad(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga2(u)
t=a.dx
t=u.k(0,t.ga2(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ak(u.ad(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gim()
t=a.dx
t=u.k(0,t.ga2(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ak(u.ad(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ak(u.ad(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ak(u.ad(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ak(C.t.ad(u,!0))}if(x.aV>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.r],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.e(t,o)
t=t[o]
u.toString
H.h(t,"$isaD")
u=u.k3
if(o>=u.length)return H.e(u,o)
u=u[o]
n=new Float32Array(H.bt(H.w(t.ad(0,!0),"$isc",v,"$asc")))
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
case C.e:this.X(q,this.f.d)
v=this.a
u=this.f.d
v.am(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.X(q,this.f.e)
v=this.a
u=this.f.e
v.ag(v.r2,v.rx,u)
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
case C.e:this.X(q,this.r.d)
v=this.a
u=this.r.d
v.am(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.X(q,this.r.e)
v=this.a
u=this.r.e
v.ag(v.x2,v.y1,u)
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
case C.e:this.X(q,this.x.d)
v=this.a
u=this.x.d
v.am(v.aV,v.aW,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.X(q,this.x.e)
v=this.a
u=this.x.e
v.ag(v.aC,v.aW,u)
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
v=v.bB
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.X(q,this.y.d)
v=this.a
u=this.y.d
v.am(v.dT,v.bC,u)
u=this.a
v=this.y.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.X(q,this.y.e)
v=this.a
u=this.y.e
v.ag(v.dU,v.bC,u)
u=this.a
v=this.y.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bD
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bF
u.a.uniform1f(u.d,s)
break
case C.e:this.X(q,this.z.d)
v=this.a
u=this.z.d
v.am(v.dV,v.bE,u)
u=this.a
v=this.z.f
u=u.bD
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bF
v.a.uniform1f(v.d,s)
break
case C.f:this.X(q,this.z.e)
v=this.a
u=this.z.e
v.ag(v.dW,v.bE,u)
u=this.a
v=this.z.f
u=u.bD
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bF
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e6
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.e(t,l)
i=t[l]
t=m.cY(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e7
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cB
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gd0(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bl(j.gbd(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gp(j)
g=i.d
h=t.gbR()
s=t.gbm()
t=t.gby()
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
v=this.a.e8
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gd0(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j).ji()
g=i.c
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
g.a.uniform3f(g.d,h,s,t)
t=m.bl(j.gbd(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gp(j)
s=i.e
h=t.gbR()
g=t.gbm()
t=t.gby()
s.a.uniform3f(s.d,h,g,t)
t=j.gjg()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjf()
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
v=this.a.e9
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
s=this.a.cD
if(l>=s.length)return H.e(s,l)
i=s[l]
s=j.gbh()
H.w(q,"$isc",t,"$asc")
if(!C.a.b5(q,s)){s.sc3(q.length)
C.a.h(q,s)}s=j.gcz(j)
h=i.d
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
h.a.uniform3f(h.d,g,f,s)
s=j.gbS()
f=i.b
g=s.gaS(s)
h=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,h,s)
s=j.gbe(j)
h=i.c
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
h.a.uniform3f(h.d,g,f,s)
s=m.cY(j.gcz(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gp(j)
g=i.f
f=h.gbR()
s=h.gbm()
h=h.gby()
g.a.uniform3f(g.d,f,s,h)
h=j.gbh()
s=h.gbO(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbO(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.ghW(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ea
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.y,u=v.length,t=[P.r],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cE
if(l>=h.length)return H.e(h,l)
i=h[l]
h=j.gbh()
H.w(q,"$isc",s,"$asc")
if(!C.a.b5(q,h)){h.sc3(q.length)
C.a.h(q,h)}e=m.k(0,j.ga2(j))
h=j.ga2(j).bl(new V.V(0,0,0))
g=i.b
f=h.gt(h)
d=h.gu(h)
h=h.gd0(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bl(new V.V(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cK(0)
d=i.d
n=new Float32Array(H.bt(H.w(new V.cu(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ad(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gp(j)
h=i.e
f=d.gbR()
g=d.gbm()
d=d.gby()
h.a.uniform3f(h.d,f,g,d)
d=j.gbh()
h=d.gbO(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.giH()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gc3())
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
v=this.a.eb
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cF
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbh()
H.w(q,"$isc",z,"$asc")
if(!C.a.b5(q,t)){t.sc3(q.length)
C.a.h(q,t)}t=j.gbd(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gd0(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j)
g=i.c
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
g.a.uniform3f(g.d,h,s,t)
t=j.gbS()
s=i.d
h=t.gaS(t)
g=t.gaT(t)
t=t.gaU()
s.a.uniform3f(s.d,h,g,t)
t=j.gbe(j)
g=i.e
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
g.a.uniform3f(g.d,h,s,t)
t=m.bl(j.gbd(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbh()
s=t.gbO(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbO(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.ghW(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gp(j)
s=i.y
h=t.gbR()
g=t.gbm()
t=t.gby()
s.a.uniform3f(s.d,h,g,t)
t=j.gjn()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjo()
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
case C.e:this.X(q,this.Q.d)
z=this.a
v=this.Q.d
z.am(z.dX,z.bG,v)
break
case C.f:this.X(q,this.Q.e)
z=this.a
v=this.Q.e
z.ag(z.dY,z.bG,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga2(v).cK(0)
a.Q=v}z=z.fy
z.toString
z.ak(v.ad(0,!0))}if(x.dy){this.X(q,this.ch)
z=this.a
v=this.ch
z.ag(z.dZ,z.e_,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bH
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.X(q,this.cx.d)
z=this.a
v=this.cx.d
z.am(z.e0,z.bI,v)
v=this.a
z=this.cx.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.X(q,this.cx.e)
z=this.a
v=this.cx.e
z.ag(z.e1,z.bI,v)
v=this.a
z=this.cx.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bK
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bJ
v.a.uniform1f(v.d,t)
break
case C.e:this.X(q,this.cy.d)
z=this.a
v=this.cy.d
z.am(z.e2,z.bL,v)
v=this.a
z=this.cy.f
v=v.bK
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,t)
break
case C.f:this.X(q,this.cy.e)
z=this.a
v=this.cy.e
z.ag(z.e3,z.bL,v)
v=this.a
z=this.cy.f
v=v.bK
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bJ
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bM
z.a.uniform1f(z.d,u)
break
case C.e:this.X(q,this.db.d)
z=this.a
u=this.db.d
z.am(z.e4,z.bN,u)
u=this.a
z=this.db.f
u=u.bM
u.a.uniform1f(u.d,z)
break
case C.f:this.X(q,this.db.e)
z=this.a
u=this.db.e
z.ag(z.e5,z.bN,u)
u=this.a
z=this.db.f
u=u.bM
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a0(a)
z=b.e
z.a0(a)
z.ac(a)
z.aH(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dR()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dk().aC}},iA:{"^":"d8;0f,a,b,0c,0d,0e",
fX:function(a){var z,y
z=this.f
if(!$.t.$2(z,a)){y=this.f
this.f=a
z=new D.J(this.b,y,a,this,[P.r])
z.b=!0
this.a.Z(z)}},
b1:function(){this.d7()
this.fX(1)}},d8:{"^":"b;",
b1:["d7",function(){}],
bs:["eJ",function(){}],
fY:function(a){},
fZ:function(a){},
hF:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.Z(null)}this.b1()
this.fY(null)
this.fZ(null)
this.a.Z(null)}},iB:{"^":"d8;a,b,0c,0d,0e"},bc:{"^":"d8;0f,a,b,0c,0d,0e",
ce:function(a){var z,y
if(!J.T(this.f,a)){z=this.f
this.f=a
y=new D.J(this.b+".color",z,a,this,[V.v])
y.b=!0
this.a.Z(y)}},
b1:["d8",function(){this.d7()
this.ce(new V.v(0,0,0))}],
bs:["bo",function(){this.eJ()
this.ce(new V.v(1,1,1))}],
sp:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bs()
z=this.a
z.a=null
z.Z(null)}this.ce(b)}},iD:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
bu:function(a){var z,y
z=this.ch
if(!$.t.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.Z(z)}},
b1:function(){this.d8()
this.bu(1)},
bs:function(){this.bo()
this.bu(1)},
saA:function(a){var z
if(a<=0)this.hF(0)
else if(this.c===C.c){this.c=C.i
this.bo()
this.bu(1)
z=this.a
z.a=null
z.Z(null)}this.bu(a)}},iE:{"^":"bc;0ch,0f,a,b,0c,0d,0e",
bv:function(a){var z,y
z=this.ch
if(!$.t.$2(z,a)){y=this.ch
this.ch=a
z=new D.J(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.Z(z)}},
b1:function(){this.d8()
this.bv(100)},
bs:function(){this.bo()
this.bv(100)}},js:{"^":"cc;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
Z:[function(a){var z
H.h(a,"$isp")
z=this.e
if(!(z==null))z.E(a)},function(){return this.Z(null)},"fn","$1","$0","gc9",0,2,1],
er:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.j(0,"Skybox"),"$iseI")
if(z==null){y=a.a
z=new A.eI(y,"Skybox")
z.d9(y,"Skybox")
z.el(0,$.ju,$.jt)
z.x=z.f.j(0,"posAttr")
z.y=H.k(z.r.j(0,"fov"),"$isa_")
z.z=H.k(z.r.j(0,"ratio"),"$isa_")
z.Q=H.k(z.r.j(0,"boxClr"),"$isL")
z.ch=H.k(z.r.j(0,"boxTxt"),"$isak")
z.cx=H.k(z.r.j(0,"viewMat"),"$isaL")
a.dK(z)}this.a=z}if(b.e==null){y=b.d.dN(new Z.fk(a.a),$.$get$aB())
y.aE($.$get$aB()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a0(a)}y=a.d
x=a.c
w=this.a
w.a0(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.d4(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga2(x).cK(0)
w=w.cx
w.toString
w.ak(x.ad(0,!0))
y=b.e
if(y instanceof Z.cU){y.a0(a)
y.ac(a)
y.aH(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dR()
y=this.c
if(y!=null)y.aH(a)}},cc:{"^":"b;"}}],["","",,T,{"^":"",dl:{"^":"cQ;"},dm:{"^":"dl;0b,0c,0d,0e,a",
a0:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aH:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jF:{"^":"b;a,0b,0c,0d,0e",
aO:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ac
W.a2(z,"load",H.f(new T.jG(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fV:function(a,b,c){var z,y,x,w
b=V.dM(b,2)
z=V.dM(a.width,2)
y=V.dM(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cW(null,null)
x.width=z
x.height=y
w=H.h(C.l.eB(x,"2d"),"$ise0")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mH(w.getImageData(0,0,x.width,x.height))}}},jG:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fV(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.X.ix(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hN();++z.e}}}],["","",,V,{"^":"",hn:{"^":"b;",
b8:function(a,b){return!0},
i:function(a){return"all"},
$isca:1},ca:{"^":"b;"},et:{"^":"b;",
b8:["eI",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b8(0,b))return!0
return!1}],
i:["d6",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isca:1},bL:{"^":"et;0a",
b8:function(a,b){return!this.eI(0,b)},
i:function(a){return"!["+this.d6(0)+"]"}},ji:{"^":"b;0a",
eN:function(a){var z,y
if(a.a.length<=0)throw H.a(P.x("May not create a SetMatcher with zero characters."))
z=new H.b0(0,0,[P.n,P.ag])
for(y=new H.er(a,a.gl(a),0,[H.at(a,"z",0)]);y.I();)z.m(0,y.d,!0)
this.a=z},
b8:function(a,b){return this.a.bA(0,b)},
i:function(a){var z=this.a
return P.cb(z.gar(z),0,null)},
$isca:1,
q:{
aa:function(a){var z=new V.ji()
z.eN(a)
return z}}},eK:{"^":"b;a,b,0c,0d",
gi6:function(a){return this.b},
H:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eT(this.a.R(0,b))
w.a=H.d([],[V.ca])
w.c=!1
C.a.h(this.c,w)
return w},
hQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b8(0,a))return w}return},
i:function(a){return this.b}},eQ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.hc(this.b,"\n","\\n")
y=H.hc(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eR:{"^":"b;a,b,0c",
i:function(a){return this.b}},jP:{"^":"b;0a,0b,0c",
R:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eK(this,b)
z.c=H.d([],[V.eT])
this.a.m(0,b,z)}return z},
bj:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eR(this,a)
y=P.j
z.c=new H.b0(0,0,[y,y])
this.b.m(0,a,z)}return z},
iD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eQ])
y=this.c
x=[P.n]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.J(a,t)
r=y.hQ(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cb(w,0,null)
throw H.a(P.x("Untokenizable string [state: "+y.gi6(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cb(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eQ(o==null?p.b:o,q,t)}++t}}}},eT:{"^":"et;b,0c,0a",
i:function(a){return this.b.b+": "+this.d6(0)}}}],["","",,X,{"^":"",cm:{"^":"b;",$isaH:1},i0:{"^":"dk;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
au:function(a){var z=this.x
if(!(z==null))z.E(a)},
sdO:function(a,b){var z
if(this.b){this.b=!1
z=new D.J("clearColor",!0,!1,this,[P.ag])
z.b=!0
this.au(z)}},
a0:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.aj(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.aj(w.b*x)
t=C.d.aj(w.c*y)
a.c=t
w=C.d.aj(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
d_:function(a,b,c,d,e,f,g){var z,y
z=new X.i0()
y=new V.ay(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eG(0,0,1,1)
z.r=y
return z}}},i2:{"^":"b;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
a0:function(a){var z
a.cy.bQ(V.bd())
z=V.bd()
a.db.bQ(z)},
aH:function(a){a.cy.aG()
a.db.aG()},
$isaH:1,
$iscm:1},iP:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
au:[function(a){var z
H.h(a,"$isp")
z=this.e
if(!(z==null))z.E(a)},function(){return this.au(null)},"iF","$1","$0","geV",0,2,1],
a0:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bQ(V.aE(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eB
if(z==null){z=V.ev(new V.V(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.eB=z
r=z}else r=z
z=this.a
if(z!=null){q=z.b_(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bQ(r)},
aH:function(a){a.cy.aG()
a.db.aG()},
$isaH:1,
$iscm:1,
q:{
eA:function(a,b,c,d){var z,y,x,w
z=new X.iP()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gw()
x.toString
w=H.f(z.geV(),{func:1,ret:-1,args:[D.p]})
C.a.h(x.a,w)}x=new D.J("mover",y,z.a,z,[U.ah])
x.b=!0
z.au(x)}x=z.b
if(!$.t.$2(x,b)){y=z.b
z.b=b
x=new D.J("fov",y,b,z,[P.r])
x.b=!0
z.au(x)}x=z.c
if(!$.t.$2(x,d)){y=z.c
z.c=d
x=new D.J("near",y,d,z,[P.r])
x.b=!0
z.au(x)}x=z.d
if(!$.t.$2(x,a)){y=z.d
z.d=a
x=new D.J("far",y,a,z,[P.r])
x.b=!0
z.au(x)}return z}}},dk:{"^":"b;"}}],["","",,V,{"^":"",
nu:function(a){P.jO(C.G,new V.nv(a))},
nv:{"^":"m:50;a",
$1:function(a){H.h(a,"$isbn")
P.dN(C.h.ex(this.a.ghU(),2)+" fps")}},
j2:{"^":"b;a,b,0c",
ci:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fc().gcT().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.dF(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dS(this.c).h(0,v)
t=W.i4("radio")
t.checked=x
t.name=z
z=W.ac
W.a2(t,"change",H.f(new V.j3(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dS(this.c).h(0,w.createElement("br"))},
a3:function(a,b,c){return this.ci(a,b,c,!1)},
dF:function(a){var z,y,x,w,v
z=P.fc()
y=P.j
x=P.il(z.gcT(),y,y)
x.m(0,this.a,a)
w=z.es(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lD([],[]).cZ(""),"",v)},
q:{
eE:function(a,b){var z,y
z=new V.j2(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.u("Failed to find "+a+" for RadioGroup")
return z}}},
j3:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dF(this.d)}}},
jn:{"^":"b;0a,0b",
eO:function(a,b){var z,y,x,w,v,u,t
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
t=W.ac
W.a2(z,"scroll",H.f(new V.jq(x),{func:1,ret:-1,args:[t]}),!1,t)},
hA:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.j],"$asc")
this.h3()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iD(C.a.i0(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hb(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cE(C.S,s,C.k,!1)
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
x=H.h(w.insertCell(-1),"$isdj").style
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
t=H.h(w.insertCell(-1),"$isdj")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
h3:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jP()
y=P.j
z.a=new H.b0(0,0,[y,V.eK])
z.b=new H.b0(0,0,[y,V.eR])
z.c=z.R(0,"Start")
y=z.R(0,"Start").H(0,"Bold")
x=V.aa(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Bold").H(0,"Bold")
x=new V.bL()
w=[V.ca]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.aa(new H.a5("*"))
C.a.h(x.a,y)
y=z.R(0,"Bold").H(0,"BoldEnd")
x=V.aa(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").H(0,"Italic")
x=V.aa(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Italic").H(0,"Italic")
x=new V.bL()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.aa(new H.a5("_"))
C.a.h(x.a,y)
y=z.R(0,"Italic").H(0,"ItalicEnd")
x=V.aa(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").H(0,"Code")
x=V.aa(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Code").H(0,"Code")
x=new V.bL()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.aa(new H.a5("`"))
C.a.h(x.a,y)
y=z.R(0,"Code").H(0,"CodeEnd")
x=V.aa(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").H(0,"LinkHead")
x=V.aa(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"LinkHead").H(0,"LinkTail")
x=V.aa(new H.a5("|"))
C.a.h(y.a,x)
x=z.R(0,"LinkHead").H(0,"LinkEnd")
y=V.aa(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkHead").H(0,"LinkHead")
y=new V.bL()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.aa(new H.a5("|]"))
C.a.h(y.a,x)
x=z.R(0,"LinkTail").H(0,"LinkEnd")
y=V.aa(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkTail").H(0,"LinkTail")
y=new V.bL()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.aa(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.R(0,"Start").H(0,"Other").a,new V.hn())
x=z.R(0,"Other").H(0,"Other")
y=new V.bL()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.aa(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.R(0,"BoldEnd")
x.d=x.a.bj("Bold")
x=z.R(0,"ItalicEnd")
x.d=x.a.bj("Italic")
x=z.R(0,"CodeEnd")
x.d=x.a.bj("Code")
x=z.R(0,"LinkEnd")
x.d=x.a.bj("Link")
x=z.R(0,"Other")
x.d=x.a.bj("Other")
this.b=z},
q:{
jo:function(a,b){var z=new V.jn()
z.eO(a,!0)
return z}}},
jq:{"^":"m:13;a",
$1:function(a){P.jN(C.r,new V.jp(this.a))}},
jp:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.h.aj(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,D,{"^":"",
h6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.jo("Test 014",!0)
y=W.cW(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.hA(H.d(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],x))
z.hx(H.d(["controls","shapes"],x))
w=document.getElementById("testCanvas")
if(w==null)H.u(P.x("Failed to find an element with the identifier, testCanvas."))
v=E.jL(w,!0,!0,!0,!1)
u=X.d_(!0,!0,!1,null,2000,null,0)
u.sdO(0,!1)
t=E.ed(null,!0,null,"",null,null)
t.saa(0,F.he(30,1,15,0.5))
z=v.f
x=z.a
s=x.createTexture()
x.bindTexture(34067,s)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
r=new T.dm(0)
r.b=s
r.c=!1
r.d=0
r.e=D.H()
z.aO(r,s,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aO(r,s,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aO(r,s,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aO(r,s,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aO(r,s,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aO(r,s,"../resources/maskonaive/negz.jpg",34074,!1,!1)
q=new O.iy()
z=O.cX(V.aD)
q.e=z
z.b0(q.gfk(),q.gfl())
z=new O.bc(q,"emission")
z.c=C.c
z.f=new V.v(0,0,0)
q.f=z
z=new O.bc(q,"ambient")
z.c=C.c
z.f=new V.v(0,0,0)
q.r=z
z=new O.bc(q,"diffuse")
z.c=C.c
z.f=new V.v(0,0,0)
q.x=z
z=new O.bc(q,"invDiffuse")
z.c=C.c
z.f=new V.v(0,0,0)
q.y=z
z=new O.iE(q,"specular")
z.c=C.c
z.f=new V.v(0,0,0)
z.ch=100
q.z=z
z=new O.iB(q,"bump")
z.c=C.c
q.Q=z
q.ch=null
z=new O.bc(q,"reflect")
z.c=C.c
z.f=new V.v(0,0,0)
q.cx=z
z=new O.iD(q,"refract")
z.c=C.c
z.f=new V.v(0,0,0)
z.ch=1
q.cy=z
z=new O.iA(q,"alpha")
z.c=C.c
z.f=1
q.db=z
z=new D.id()
z.bp(D.a4)
z.e=H.d([],[D.cp])
z.f=H.d([],[D.iR])
z.r=H.d([],[D.jv])
z.x=H.d([],[D.jH])
z.y=H.d([],[D.jI])
z.z=H.d([],[D.jJ])
z.Q=null
z.ch=null
z.d3(z.gfj(),z.gfG(),z.gfI())
q.dx=z
x=z.Q
if(x==null){x=D.H()
z.Q=x
z=x}else z=x
x={func:1,ret:-1,args:[D.p]}
p=H.f(q.gfT(),x)
C.a.h(z.a,p)
p=q.dx
z=p.ch
if(z==null){z=D.H()
p.ch=z}p=H.f(q.gc9(),x)
C.a.h(z.a,p)
q.dy=null
z=q.dx
o=U.e4(V.ev(new V.V(0,0,0),new V.F(0,1,0),new V.F(-1,-1,-1)))
n=new V.v(1,1,1)
m=new D.cp()
m.c=new V.v(1,1,1)
m.a=new V.F(0,0,1)
l=m.b
m.b=o
o=o.gw()
o.toString
k=H.f(m.geS(),x)
C.a.h(o.a,k)
o=new D.J("mover",l,m.b,m,[U.ah])
o.b=!0
m.aK(o)
if(!m.c.A(0,n)){l=m.c
m.c=n
o=new D.J("color",l,n,m,[V.v])
o.b=!0
m.aK(o)}z.h(0,m)
z=q.r
z.sp(0,new V.v(0.1,0.1,0.1))
z=q.x
z.sp(0,new V.v(0.1,0.1,0.1))
z=q.z
z.sp(0,new V.v(1,1,1))
z=q.z
if(z.c===C.c){z.c=C.i
z.bo()
z.bv(100)
o=z.a
o.a=null
o.Z(null)}z.bv(10)
z=q.ch
if(z!==r){if(z!=null)C.a.M(z.e.a,p)
l=q.ch
q.ch=r
C.a.h(r.e.a,p)
z=new D.J("environment",l,q.ch,q,[T.dm])
z.b=!0
q.Z(z)}q.cy.saA(0.6)
z=q.cy
z.sp(0,new V.v(0.2,0.3,1))
z=q.cx
z.sp(0,new V.v(0.6,0.6,0.6))
j=new U.eg()
j.bp(U.ah)
j.b0(j.gfi(),j.gfH())
j.e=null
j.f=V.bd()
j.r=0
z=v.r
p=new U.kg()
o=U.cY()
o.sd_(0,!0)
o.scM(6.283185307179586)
o.scO(0)
o.sa1(0,0)
o.scN(100)
o.sW(0)
o.scw(0.5)
p.b=o
o=o.gw()
o.toString
m=H.f(p.gaL(),x)
C.a.h(o.a,m)
o=U.cY()
o.sd_(0,!0)
o.scM(6.283185307179586)
o.scO(0)
o.sa1(0,0)
o.scN(100)
o.sW(0)
o.scw(0.5)
p.c=o
C.a.h(o.gw().a,m)
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
p.U(m)
m=p.f
if(m!==!1){p.f=!1
m=new D.J("invertX",m,!1,p,[P.ag])
m.b=!0
p.U(m)}m=p.r
if(m!==!1){p.r=!1
m=new D.J("invertY",m,!1,p,[P.ag])
m.b=!0
p.U(m)}p.b3(z)
j.h(0,p)
z=v.r
p=new U.kf()
m=U.cY()
m.sd_(0,!0)
m.scM(6.283185307179586)
m.scO(0)
m.sa1(0,0)
m.scN(100)
m.sW(0)
m.scw(0.2)
p.b=m
m=m.gw()
m.toString
k=H.f(p.gaL(),x)
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
p.U(m)
p.b3(z)
j.h(0,p)
z=v.r
p=new U.kh()
p.c=0.01
p.d=0
p.e=0
i=new X.aF(!1,!1,!1)
p.b=i
o=new D.J("modifiers",null,i,p,o)
o.b=!0
p.U(o)
p.b3(z)
j.h(0,p)
j.h(0,U.e4(V.aE(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=X.eA(2000,1.0471975511965976,j,0.1)
g=new M.hG()
g.sb4(null)
g.sbf(0,null)
g.sbg(null)
z=E.ed(null,!0,null,"",null,null)
f=F.cz()
p=f.a
o=new V.F(-1,-1,1)
o=o.v(0,Math.sqrt(o.D(o)))
e=p.bx(new V.aI(1,2,4,6),new V.ay(1,0,0,1),new V.V(-1,-1,0),new V.R(0,1),o,null)
p=f.a
o=new V.F(1,-1,1)
o=o.v(0,Math.sqrt(o.D(o)))
d=p.bx(new V.aI(0,3,4,6),new V.ay(0,0,1,1),new V.V(1,-1,0),new V.R(1,1),o,null)
p=f.a
o=new V.F(1,1,1)
o=o.v(0,Math.sqrt(o.D(o)))
c=p.bx(new V.aI(0,2,5,6),new V.ay(0,1,0,1),new V.V(1,1,0),new V.R(1,0),o,null)
p=f.a
o=new V.F(-1,1,1)
o=o.v(0,Math.sqrt(o.D(o)))
b=p.bx(new V.aI(0,2,4,7),new V.ay(1,1,0,1),new V.V(-1,1,0),new V.R(0,0),o,null)
f.d.dI(H.d([e,d,c,b],[F.ae]))
f.an()
z.saa(0,f)
g.d=z
g.e=null
z=new O.js()
z.b=1.0471975511965976
l=z.c
z.c=r
p=r.e
o=H.f(z.gc9(),x)
C.a.h(p.a,o)
p=new D.J("boxTexture",l,z.c,z,[T.dm])
p.b=!0
z.Z(p)
n=new V.v(1,1,1)
if(!J.T(z.d,n)){l=z.d
z.d=n
p=new D.J("boxColor",l,n,z,[V.v])
p.b=!0
z.Z(p)}z.e=null
g.sbg(z)
g.sbf(0,u)
g.sb4(h)
a=new M.hT()
z=O.cX(E.aQ)
a.d=z
z.b0(a.gfo(),a.gfp())
a.e=null
a.f=null
a.r=null
a.x=null
a.sb4(null)
a.sbf(0,null)
a.sbg(null)
a.sb4(h)
a.sbg(q)
a.sbf(0,u)
a.d.h(0,t)
a.b.sdO(0,!1)
z=M.aJ
p=H.d([g,a],[z])
o=new M.hB()
o.bp(z)
o.e=!1
o.f=null
o.b0(o.gfJ(),o.gfK())
o.cj(0,p)
z=v.d
if(z!==o){if(z!=null){z=z.gw()
z.toString
p=H.f(v.gdc(),x)
C.a.M(z.a,p)}v.d=o
z=o.gw()
z.toString
x=H.f(v.gdc(),x)
C.a.h(z.a,x)
v.eQ()}z=V.eE("controls",!0)
z.ci(0,"Silver",new D.n6(q),!0)
z.a3(0,"Gold",new D.n7(q))
z.a3(0,"Glass",new D.n8(q))
z.a3(0,"Blue Glass",new D.ng(q))
z.a3(0,"Water Bubble",new D.nh(q))
z.a3(0,"No Reflection",new D.ni(q))
z.a3(0,"Pink Distort",new D.nj(q))
z.a3(0,"Cloak",new D.nk(q))
z.a3(0,"White and Shiny",new D.nl(q))
z=V.eE("shapes",!0)
z.a3(0,"Cube",new D.nm(t))
z.a3(0,"Cuboid",new D.nn(t))
z.a3(0,"Cylinder",new D.n9(t))
z.a3(0,"Cone",new D.na(t))
z.a3(0,"Cylindrical",new D.nb(t))
z.a3(0,"Sphere",new D.nc(t))
z.a3(0,"Spherical",new D.nd(t))
z.ci(0,"Toroid",new D.ne(t),!0)
z.a3(0,"Knot",new D.nf(t))
V.nu(v)},
n6:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.2,0.2,0.2))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.sp(0,new V.v(0,0,0))
z=z.cx
z.sp(0,new V.v(1,1,1))}},
n7:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.11,0.11,0.1))
y=z.x
y.sp(0,new V.v(0.21,0.21,0.2))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.sp(0,new V.v(0,0,0))
z=z.cx
z.sp(0,new V.v(1,0.9,0.5))}},
n8:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.saA(0.4)
y=z.cy
y.sp(0,new V.v(0.6,0.6,0.6))
z=z.cx
z.sp(0,new V.v(0.4,0.4,0.4))}},
ng:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.saA(0.4)
y=z.cy
y.sp(0,new V.v(0.2,0.3,1))
z=z.cx
z.sp(0,new V.v(0.3,0.3,0.3))}},
nh:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.saA(0.6)
y=z.cy
y.sp(0,new V.v(0.8,0.8,0.8))
z=z.cx
z.sp(0,new V.v(0.2,0.2,0.2))}},
ni:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.saA(0.6)
y=z.cy
y.sp(0,new V.v(1,1,1))
z.cx.sp(0,new V.v(0,0,0))}},
nj:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.saA(0.9)
y=z.cy
y.sp(0,new V.v(1,0.8,0.8))
z.cx.sp(0,new V.v(0,0,0))}},
nk:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0,0,0))
y=z.x
y.sp(0,new V.v(0.1,0.1,0.1))
y=z.z
y.sp(0,new V.v(0.1,0.1,0.1))
z.cy.saA(0.99)
y=z.cy
y.sp(0,new V.v(0.95,0.95,0.95))
z.cx.sp(0,new V.v(0,0,0))}},
nl:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sp(0,new V.v(0.3,0.3,0.3))
y=z.x
y.sp(0,new V.v(0.5,0.5,0.5))
y=z.z
y.sp(0,new V.v(1,1,1))
z.cy.sp(0,new V.v(0,0,0))
z=z.cx
z.sp(0,new V.v(0.3,0.3,0.3))}},
nm:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.dF(1,null,null,1))}},
nn:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.dF(15,null,new D.n5(),15))}},
n5:{"^":"m:4;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.F(x.a,x.b,x.c)
w=x.v(0,Math.sqrt(x.D(x)))
x=a.f
y=w.k(0,z*0.1+y*0.1)
a.sa1(0,x.F(0,new V.V(y.a,y.b,y.c)))}},
n9:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.fW(1,!0,!0,1,30,1))}},
na:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.fW(1,!0,!1,1,30,0))}},
nb:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.fX(!0,!0,25,new D.n4(),50))}},
n4:{"^":"m:7;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
nc:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.ha(6,null,6))}},
nd:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.ha(10,new D.n3(),10))}},
n3:{"^":"m:7;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
ne:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.he(30,1,15,0.5))}},
nf:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.n0(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.el.prototype
return J.ek.prototype}if(typeof a=="string")return J.c8.prototype
if(a==null)return J.em.prototype
if(typeof a=="boolean")return J.i8.prototype
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.aO=function(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.ch=function(a){if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.mR=function(a){if(typeof a=="number")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.mS=function(a){if(typeof a=="number")return J.c7.prototype
if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.dI=function(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ce.prototype
return a}
J.aZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).A(a,b)}
J.hf=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mR(a).P(a,b)}
J.dP=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mS(a).k(a,b)}
J.dQ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aO(a).j(a,b)}
J.cN=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h3(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ch(a).m(a,b,c)}
J.hg=function(a,b){return J.dI(a).J(a,b)}
J.hh=function(a,b,c){return J.aZ(a).fR(a,b,c)}
J.hi=function(a,b,c,d){return J.aZ(a).dH(a,b,c,d)}
J.hj=function(a,b){return J.dI(a).a_(a,b)}
J.cO=function(a,b,c){return J.aO(a).hH(a,b,c)}
J.cP=function(a,b){return J.ch(a).K(a,b)}
J.hk=function(a,b,c,d){return J.ch(a).aD(a,b,c,d)}
J.dR=function(a,b){return J.ch(a).L(a,b)}
J.dS=function(a){return J.aZ(a).gct(a)}
J.b5=function(a){return J.M(a).gV(a)}
J.bB=function(a){return J.ch(a).ga5(a)}
J.aw=function(a){return J.aO(a).gl(a)}
J.hl=function(a,b){return J.aZ(a).ir(a,b)}
J.hm=function(a,b){return J.aZ(a).sa7(a,b)}
J.ab=function(a){return J.M(a).i(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cV.prototype
C.H=J.q.prototype
C.a=J.bb.prototype
C.I=J.ek.prototype
C.d=J.el.prototype
C.t=J.em.prototype
C.h=J.c7.prototype
C.b=J.c8.prototype
C.P=J.c9.prototype
C.V=H.dd.prototype
C.W=W.iL.prototype
C.z=J.iQ.prototype
C.X=P.df.prototype
C.q=J.ce.prototype
C.A=W.bS.prototype
C.B=W.kD.prototype
C.D=new P.hs(!1)
C.C=new P.hr(C.D)
C.E=new P.iO()
C.F=new P.kp()
C.j=new P.lp()
C.c=new A.cn(0,"ColorSourceType.None")
C.i=new A.cn(1,"ColorSourceType.Solid")
C.e=new A.cn(2,"ColorSourceType.Texture2D")
C.f=new A.cn(3,"ColorSourceType.TextureCube")
C.r=new P.b8(0)
C.G=new P.b8(5e6)
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
C.w=H.d(I.al([127,2047,65535,1114111]),[P.n])
C.m=H.d(I.al([0,0,32776,33792,1,10240,0,0]),[P.n])
C.n=H.d(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.d(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.R=H.d(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.S=H.d(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.d(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.x=H.d(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.T=H.d(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.y=H.d(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.Q=H.d(I.al([]),[P.j])
C.U=new H.hF(0,{},C.Q,[P.j,P.j])
C.k=new P.ki(!1)
$.aC=0
$.bC=null
$.dX=null
$.dA=!1
$.h1=null
$.fS=null
$.h9=null
$.cI=null
$.cL=null
$.dJ=null
$.bu=null
$.bY=null
$.bZ=null
$.dB=!1
$.W=C.j
$.ea=null
$.e9=null
$.e8=null
$.e7=null
$.t=V.iF()
$.ju="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jt="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eB=null
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
I.$lazy(y,x,w)}})(["e6","$get$e6",function(){return H.h0("_$dart_dartClosure")},"d3","$get$d3",function(){return H.h0("_$dart_js")},"eU","$get$eU",function(){return H.aK(H.cA({
toString:function(){return"$receiver$"}}))},"eV","$get$eV",function(){return H.aK(H.cA({$method$:null,
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aK(H.cA(null))},"eX","$get$eX",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aK(H.cA(void 0))},"f1","$get$f1",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aK(H.f_(null))},"eY","$get$eY",function(){return H.aK(function(){try{null.$method$}catch(z){return z.message}}())},"f3","$get$f3",function(){return H.aK(H.f_(void 0))},"f2","$get$f2",function(){return H.aK(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dv","$get$dv",function(){return P.kE()},"c_","$get$c_",function(){return[]},"ff","$get$ff",function(){return P.km()},"fm","$get$fm",function(){return H.iJ(H.bt(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"fI","$get$fI",function(){return P.j8("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fO","$get$fO",function(){return P.mo()},"e5","$get$e5",function(){return{}},"fi","$get$fi",function(){return Z.as(0)},"fg","$get$fg",function(){return Z.as(511)},"aB","$get$aB",function(){return Z.as(1)},"aU","$get$aU",function(){return Z.as(2)},"aT","$get$aT",function(){return Z.as(4)},"aV","$get$aV",function(){return Z.as(8)},"aW","$get$aW",function(){return Z.as(16)},"bQ","$get$bQ",function(){return Z.as(32)},"bR","$get$bR",function(){return Z.as(64)},"fh","$get$fh",function(){return Z.as(96)},"br","$get$br",function(){return Z.as(128)},"aS","$get$aS",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.I},{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:-1},{func:1,ret:P.I,args:[F.ae,P.r,P.r]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.I,args:[F.ap]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.n,[P.i,E.aQ]]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.I,args:[W.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[D.p]},{func:1,ret:P.j,args:[P.n]},{func:1,ret:-1,args:[P.n,[P.i,V.aD]]},{func:1,ret:V.V,args:[P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,M.aJ]]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[P.n,[P.i,U.ah]]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.n,[P.i,D.a4]]},{func:1,ret:-1,args:[W.bI]},{func:1,args:[,P.j]},{func:1,ret:P.Q,args:[P.n]},{func:1,ret:W.a3,args:[W.N]},{func:1,ret:P.I,args:[P.Z]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.ag,args:[W.N]},{func:1,ret:P.ag,args:[P.r,P.r]},{func:1,ret:-1,args:[W.bS]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.ag,args:[[P.i,D.a4]]},{func:1,ret:P.n,args:[[P.c,P.n],P.n]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.I,args:[P.j,,]},{func:1,args:[P.j]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[P.b],opt:[P.az]},{func:1,ret:P.I,args:[P.j]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.aX,,],args:[,]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,ret:P.I,args:[P.bn]},{func:1,ret:-1,args:[P.j,P.n]},{func:1,ret:P.I,args:[,],opt:[,]}]
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
if(x==y)H.ny(d||a)
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
Isolate.al=a.al
Isolate.dG=a.dG
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
if(typeof dartMainRunner==="function")dartMainRunner(D.h6,[])
else D.h6([])})})()
//# sourceMappingURL=test.dart.js.map
