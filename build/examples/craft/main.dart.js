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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dC(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.c1=function(){}
var dart=[["","",,H,{"^":"",mj:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cI:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dF==null){H.lF()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.fd("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d5()]
if(v!=null)return v
v=H.lK(a)
if(v!=null)return v
if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.$get$d5(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
q:{"^":"b;",
u:function(a,b){return a===b},
gY:function(a){return H.bQ(a)},
i:["ew",function(a){return"Instance of '"+H.bn(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hL:{"^":"q;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isa7:1},
eh:{"^":"q;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isR:1},
d6:{"^":"q;",
gY:function(a){return 0},
i:["ex",function(a){return String(a)}]},
ir:{"^":"d6;"},
dt:{"^":"d6;"},
ca:{"^":"d6;",
i:function(a){var z=a[$.$get$dY()]
if(z==null)return this.ex(a)
return"JavaScript function for "+H.l(J.at(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscZ:1},
bk:{"^":"q;$ti",
h:function(a,b){H.F(b,H.B(a,0))
if(!!a.fixed$length)H.u(P.J("add"))
a.push(b)},
Z:function(a,b){var z
if(!!a.fixed$length)H.u(P.J("remove"))
for(z=0;z<a.length;++z)if(J.Y(a[z],b)){a.splice(z,1)
return!0}return!1},
aB:function(a,b){var z,y
H.r(b,"$ish",[H.B(a,0)],"$ash")
if(!!a.fixed$length)H.u(P.J("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.B(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.bC(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
i3:function(a){return this.D(a,"")},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
bU:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ap(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ap(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.B(a,0)])
return H.a(a.slice(b,c),[H.B(a,0)])},
gcG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.hJ())},
aq:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Y(a[z],b))return!0
return!1},
i:function(a){return P.d2(a,"[","]")},
ga1:function(a){return new J.au(a,a.length,0,[H.B(a,0)])},
gY:function(a){return H.bQ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.J("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.ck(b,"newLength",null))
if(b<0)throw H.d(P.ap(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b>=a.length||b<0)throw H.d(H.aI(a,b))
return a[b]},
m:function(a,b,c){H.z(b)
H.F(c,H.B(a,0))
if(!!a.immutable$list)H.u(P.J("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b>=a.length||b<0)throw H.d(H.aI(a,b))
a[b]=c},
$isG:1,
$asG:I.c1,
$ish:1,
$isc:1,
q:{
hK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.ck(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ap(a,0,4294967295,"length",null))
return J.ee(new Array(a),b)},
ee:function(a,b){return J.bJ(H.a(a,[b]))},
bJ:function(a){H.ch(a)
a.fixed$length=Array
return a}}},
mi:{"^":"bk;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cw:{"^":"q;",
ct:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gbO(b)
if(this.gbO(a)===z)return 0
if(this.gbO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbO:function(a){return a===0?1/a<0:a<0},
aH:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.J(""+a+".toInt()"))},
b0:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.J(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
hL:function(a,b,c){if(C.e.ct(b,c)>0)throw H.d(H.aH(b))
if(this.ct(a,b)<0)return b
if(this.ct(a,c)>0)return c
return a},
em:function(a,b){var z
if(b>20)throw H.d(P.ap(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbO(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
cT:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.J("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
eu:function(a,b){if(b<0)throw H.d(H.aH(b))
return b>31?0:a<<b>>>0},
bu:function(a,b){var z
if(a>0)z=this.h8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h8:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.d(H.aH(b))
return a<b},
$isy:1,
$isX:1},
eg:{"^":"cw;",
cN:function(a,b){var z=this.eu(1,b-1)
return((a&z-1)>>>0)-((a&z)>>>0)},
$isx:1},
ef:{"^":"cw;"},
d4:{"^":"q;",
cs:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aI(a,b))
if(b<0)throw H.d(H.aI(a,b))
if(b>=a.length)H.u(H.aI(a,b))
return a.charCodeAt(b)},
bp:function(a,b){if(b>=a.length)throw H.d(H.aI(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.U(b)
if(typeof b!=="string")throw H.d(P.ck(b,null,null))
return a+b},
bV:function(a,b,c){H.z(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cA(b,null,null))
if(b>c)throw H.d(P.cA(b,null,null))
if(c>a.length)throw H.d(P.cA(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.bV(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.w)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ih:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aG:function(a,b){return this.ih(a,b," ")},
hM:function(a,b,c){if(c>a.length)throw H.d(P.ap(c,0,a.length,null,null))
return H.fT(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isG:1,
$asG:I.c1,
$isex:1,
$iso:1}}],["","",,H,{"^":"",
hJ:function(){return new P.j7("No element")},
a8:{"^":"jD;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.cs(this.a,b)},
$asdu:function(){return[P.x]},
$asw:function(){return[P.x]},
$ash:function(){return[P.x]},
$asc:function(){return[P.x]}},
ht:{"^":"h;"},
el:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.bc(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.bC(z))
w=this.c
if(typeof x!=="number")return H.e(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
i1:{"^":"h;a,b,$ti",
ga1:function(a){return new H.i2(J.c3(this.a),this.b,this.$ti)},
gl:function(a){return J.bA(this.a)},
J:function(a,b){return this.b.$1(J.cN(this.a,b))},
$ash:function(a,b){return[b]}},
i2:{"^":"d3;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd3:function(a,b){return[b]}},
jT:{"^":"h;a,b,$ti",
ga1:function(a){return new H.jU(J.c3(this.a),this.b,this.$ti)}},
jU:{"^":"d3;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cs:{"^":"b;$ti"},
du:{"^":"b;$ti",
m:function(a,b,c){H.z(b)
H.F(c,H.aA(this,"du",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}},
jD:{"^":"cx+du;"}}],["","",,H,{"^":"",
lA:function(a){return init.types[H.z(a)]},
lI:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isI},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.d(H.aH(a))
return z},
bQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iD:function(a,b){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=H.U(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
bn:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.z||!!J.P(a).$isdt){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bp(w,0)===36)w=C.i.cV(w,1)
r=H.dG(H.ch(H.bd(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eA:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iF:function(a){var z,y,x,w
z=H.a([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aH(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.bu(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aH(w))}return H.eA(z)},
eB:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aH(x))
if(x<0)throw H.d(H.aH(x))
if(x>65535)return H.iF(a)}return H.eA(a)},
iE:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.bu(z,10))>>>0,56320|z&1023)}throw H.d(P.ap(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iC:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
iA:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
iw:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
ix:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
iz:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
iB:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
iy:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
e:function(a){throw H.d(H.aH(a))},
j:function(a,b){if(a==null)J.bA(a)
throw H.d(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.z(J.bA(a))
if(!(b<0)){if(typeof z!=="number")return H.e(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cA(b,"index",null)},
lw:function(a,b,c){if(a>c)return new P.cz(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cz(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
aH:function(a){return new P.aJ(!0,a,null,null)},
lr:function(a){if(typeof a!=="number")throw H.d(H.aH(a))
return a},
d:function(a){var z
if(a==null)a=new P.ew()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fV})
z.name=""}else z.toString=H.fV
return z},
fV:function(){return J.at(this.dartException)},
u:function(a){throw H.d(a)},
A:function(a){throw H.d(P.bC(a))},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bu(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d7(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ev(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eX()
u=$.$get$eY()
t=$.$get$eZ()
s=$.$get$f_()
r=$.$get$f3()
q=$.$get$f4()
p=$.$get$f1()
$.$get$f0()
o=$.$get$f6()
n=$.$get$f5()
m=v.ab(y)
if(m!=null)return z.$1(H.d7(H.U(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.d7(H.U(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ev(H.U(y),m))}}return z.$1(new H.jC(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eK()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eK()
return a},
by:function(a){var z
if(a==null)return new H.ft(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ft(a)},
lz:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
lH:function(a,b,c,d,e,f){H.i(a,"$iscZ")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.t("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var z
H.z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lH)
a.$identity=z
return z},
hh:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$isc){z.$reflectionInfo=d
x=H.iI(z).r}else x=d
w=e?Object.create(new H.j9().constructor.prototype):Object.create(new H.cQ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.n()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lA,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dO:H.cR
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dT(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
he:function(a,b,c,d){var z=H.cR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hg(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.he(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.n()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bB
if(v==null){v=H.cn("self")
$.bB=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.n()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bB
if(v==null){v=H.cn("self")
$.bB=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hf:function(a,b,c,d){var z,y
z=H.cR
y=H.dO
switch(b?-1:a){case 0:throw H.d(H.iR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hg:function(a,b){var z,y,x,w,v,u,t,s
z=$.bB
if(z==null){z=H.cn("self")
$.bB=z}y=$.dN
if(y==null){y=H.cn("receiver")
$.dN=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hf(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aB
if(typeof y!=="number")return y.n()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.n()
$.aB=y+1
return new Function(z+y+"}")()},
dC:function(a,b,c,d,e,f,g){var z,y
z=J.bJ(H.ch(b))
H.z(c)
y=!!J.P(d).$isc?J.bJ(d):d
return H.hh(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ay(a,"String"))},
lx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"double"))},
lO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"num"))},
fI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ay(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ay(a,"int"))},
fR:function(a,b){throw H.d(H.ay(a,H.U(b).substring(3)))},
lQ:function(a,b){var z=J.bc(b)
throw H.d(H.hc(a,z.bV(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.fR(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.lQ(a,b)},
ch:function(a){if(a==null)return a
if(!!J.P(a).$isc)return a
throw H.d(H.ay(a,"List"))},
lJ:function(a,b){if(a==null)return a
if(!!J.P(a).$isc)return a
if(J.P(a)[b])return a
H.fR(a,b)},
fJ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.z(z)]
else return a.$S()}return},
cf:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fJ(J.P(a))
if(z==null)return!1
y=H.fN(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dy)return a
$.dy=!0
try{if(H.cf(a,b))return a
z=H.ci(b)
y=H.ay(a,z)
throw H.d(y)}finally{$.dy=!1}},
dD:function(a,b){if(a!=null&&!H.dB(a,b))H.u(H.ay(a,H.ci(b)))
return a},
fD:function(a){var z
if(a instanceof H.v){z=H.fJ(J.P(a))
if(z!=null)return H.ci(z)
return"Closure"}return H.bn(a)},
lT:function(a){throw H.d(new P.hm(H.U(a)))},
fK:function(a){return init.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
bd:function(a){if(a==null)return
return a.$ti},
n7:function(a,b,c){return H.bz(a["$as"+H.l(c)],H.bd(b))},
bx:function(a,b,c,d){var z
H.U(c)
H.z(d)
z=H.bz(a["$as"+H.l(c)],H.bd(b))
return z==null?null:z[d]},
aA:function(a,b,c){var z
H.U(b)
H.z(c)
z=H.bz(a["$as"+H.l(b)],H.bd(a))
return z==null?null:z[c]},
B:function(a,b){var z
H.z(b)
z=H.bd(a)
return z==null?null:z[b]},
ci:function(a){var z=H.be(a,null)
return z},
be:function(a,b){var z,y
H.r(b,"$isc",[P.o],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dG(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.l(b[y])}if('func' in a)return H.lh(a,b)
if('futureOr' in a)return"FutureOr<"+H.be("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.r(b,"$isc",z,"$asc")
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
if(q!=null&&q!==P.b)t+=" extends "+H.be(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.be(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.be(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.be(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ly(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.be(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dG:function(a,b,c){var z,y,x,w,v,u
H.r(c,"$isc",[P.o],"$asc")
if(a==null)return""
z=new P.ce("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.be(u,c)}v="<"+z.i(0)+">"
return v},
bz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bd(a)
y=J.P(a)
if(y[b]==null)return!1
return H.fG(H.bz(y[d],z),null,c,null)},
r:function(a,b,c,d){var z,y
H.U(b)
H.ch(c)
H.U(d)
if(a==null)return a
z=H.c0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dG(c,0,null)
throw H.d(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fG:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
n5:function(a,b,c){return a.apply(b,H.bz(J.P(b)["$as"+H.l(c)],H.bd(b)))},
fO:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="R"||a===-1||a===-2||H.fO(z)}return!1},
dB:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="R"||b===-1||b===-2||H.fO(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dB(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cf(a,b)}y=J.P(a).constructor
x=H.bd(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
F:function(a,b){if(a!=null&&!H.dB(a,b))throw H.d(H.ay(a,H.ci(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="R")return!0
if('func' in c)return H.fN(a,b,c,d)
if('func' in a)return c.builtin$cls==="cZ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bE" in y.prototype))return!1
w=y.prototype["$as"+"bE"]
v=H.bz(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ci(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fG(H.bz(r,z),b,u,d)},
fN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.as(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.as(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.as(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.as(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lN(m,b,l,d)},
lN:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
n6:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
lK:function(a){var z,y,x,w,v,u
z=H.U($.fL.$1(a))
y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.fF.$2(a,z))
if(z!=null){y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cK(x)
$.cH[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cJ[z]=x
return x}if(v==="-"){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fQ(a,x)
if(v==="*")throw H.d(P.fd(z))
if(init.leafTags[z]===true){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fQ(a,x)},
fQ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dI(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cK:function(a){return J.dI(a,!1,null,!!a.$isI)},
lM:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cK(z)
else return J.dI(z,c,null,null)},
lF:function(){if(!0===$.dF)return
$.dF=!0
H.lG()},
lG:function(){var z,y,x,w,v,u,t,s
$.cH=Object.create(null)
$.cJ=Object.create(null)
H.lB()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fS.$1(v)
if(u!=null){t=H.lM(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lB:function(){var z,y,x,w,v,u,t
z=C.F()
z=H.bu(C.C,H.bu(C.H,H.bu(C.o,H.bu(C.o,H.bu(C.G,H.bu(C.D,H.bu(C.E(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fL=new H.lC(v)
$.fF=new H.lD(u)
$.fS=new H.lE(t)},
bu:function(a,b){return a(b)||b},
fT:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fU:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iH:{"^":"b;a,b,c,d,e,f,r,0x",q:{
iI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.iH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jq:{"^":"b;a,b,c,d,e,f",
ab:function(a){var z,y,x
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
if(z==null)z=H.a([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f2:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
il:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
ev:function(a,b){return new H.il(a,b==null?null:b.method)}}},
hO:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
d7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hO(a,y,z?null:b.receiver)}}},
jC:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lU:{"^":"v:18;a",
$1:function(a){if(!!J.P(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ft:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
v:{"^":"b;",
i:function(a){return"Closure '"+H.bn(this).trim()+"'"},
geo:function(){return this},
$iscZ:1,
geo:function(){return this}},
eP:{"^":"v;"},
j9:{"^":"eP;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cQ:{"^":"eP;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bQ(this.a)
else y=typeof z!=="object"?J.bf(z):H.bQ(z)
return(y^H.bQ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bn(z)+"'")},
q:{
cR:function(a){return a.a},
dO:function(a){return a.c},
cn:function(a){var z,y,x,w,v
z=new H.cQ("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jr:{"^":"a4;a",
i:function(a){return this.a},
q:{
ay:function(a,b){return new H.jr("TypeError: "+H.l(P.cr(a))+": type '"+H.fD(a)+"' is not a subtype of type '"+b+"'")}}},
hb:{"^":"a4;a",
i:function(a){return this.a},
q:{
hc:function(a,b){return new H.hb("CastError: "+H.l(P.cr(a))+": type '"+H.fD(a)+"' is not a subtype of type '"+b+"'")}}},
iQ:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
iR:function(a){return new H.iQ(a)}}},
aL:{"^":"i_;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaF:function(a){return new H.ek(this,[H.B(this,0)])},
dK:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dk(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dk(y,b)}else return this.i1(b)},
i1:function(a){var z=this.d
if(z==null)return!1
return this.cF(this.c4(z,J.bf(a)&0x3ffffff),a)>=0},
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
y=this.c4(z,J.bf(a)&0x3ffffff)
x=this.cF(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.F(b,H.B(this,0))
H.F(c,H.B(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c6()
this.b=z}this.d6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c6()
this.c=y}this.d6(y,b,c)}else{x=this.d
if(x==null){x=this.c6()
this.d=x}w=J.bf(b)&0x3ffffff
v=this.c4(x,w)
if(v==null)this.cd(x,w,[this.c7(b,c)])
else{u=this.cF(v,b)
if(u>=0)v[u].b=c
else v.push(this.c7(b,c))}}},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.B(this,0),H.B(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.bC(this))
z=z.c}},
d6:function(a,b,c){var z
H.F(b,H.B(this,0))
H.F(c,H.B(this,1))
z=this.bq(a,b)
if(z==null)this.cd(a,b,this.c7(b,c))
else z.b=c},
fj:function(){this.r=this.r+1&67108863},
c7:function(a,b){var z,y
z=new H.hS(H.F(a,H.B(this,0)),H.F(b,H.B(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fj()
return z},
cF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].a,b))return y
return-1},
i:function(a){return P.en(this)},
bq:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
fb:function(a,b){delete a[b]},
dk:function(a,b){return this.bq(a,b)!=null},
c6:function(){var z=Object.create(null)
this.cd(z,"<non-identifier-key>",z)
this.fb(z,"<non-identifier-key>")
return z},
$isej:1},
hS:{"^":"b;a,b,0c,0d"},
ek:{"^":"ht;a,$ti",
gl:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.hT(z,z.r,this.$ti)
y.c=z.e
return y}},
hT:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bC(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lC:{"^":"v:18;a",
$1:function(a){return this.a(a)}},
lD:{"^":"v:39;a",
$2:function(a,b){return this.a(a,b)}},
lE:{"^":"v:38;a",
$1:function(a){return this.a(H.U(a))}},
hM:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isex:1,
q:{
hN:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.e7("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ly:function(a){return J.ee(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bX:function(a){var z,y,x,w
z=J.P(a)
if(!!z.$isG)return a
y=z.gl(a)
if(typeof y!=="number")return H.e(y)
x=new Array(y)
x.fixed$length=Array
w=0
while(!0){y=z.gl(a)
if(typeof y!=="number")return H.e(y)
if(!(w<y))break
C.a.m(x,w,z.k(a,w));++w}return x},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aI(b,a))},
lg:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.lw(a,b,c))
return b},
ih:{"^":"q;",$ismR:1,"%":"DataView;ArrayBufferView;db|fn|fo|ig|fp|fq|b3"},
db:{"^":"ih;",
gl:function(a){return a.length},
$isG:1,
$asG:I.c1,
$isI:1,
$asI:I.c1},
ig:{"^":"fo;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
m:function(a,b,c){H.z(b)
H.lx(c)
H.aG(b,a,a.length)
a[b]=c},
$ascs:function(){return[P.y]},
$asw:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]},
$isc:1,
$asc:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
b3:{"^":"fq;",
m:function(a,b,c){H.z(b)
H.z(c)
H.aG(b,a,a.length)
a[b]=c},
$ascs:function(){return[P.x]},
$asw:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
mr:{"^":"b3;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ms:{"^":"b3;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mt:{"^":"b3;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mu:{"^":"b3;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mv:{"^":"b3;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mw:{"^":"b3;",
gl:function(a){return a.length},
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ii:{"^":"b3;",
gl:function(a){return a.length},
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
bU:function(a,b,c){return new Uint8Array(a.subarray(b,H.lg(b,c,a.length)))},
"%":";Uint8Array"},
fn:{"^":"db+w;"},
fo:{"^":"fn+cs;"},
fp:{"^":"db+w;"},
fq:{"^":"fp+cs;"}}],["","",,P,{"^":"",
jY:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lo()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bv(new P.k_(z),1)).observe(y,{childList:true})
return new P.jZ(z,y,x)}else if(self.setImmediate!=null)return P.lp()
return P.lq()},
mV:[function(a){self.scheduleImmediate(H.bv(new P.k0(H.f(a,{func:1,ret:-1})),0))},"$1","lo",4,0,12],
mW:[function(a){self.setImmediate(H.bv(new P.k1(H.f(a,{func:1,ret:-1})),0))},"$1","lp",4,0,12],
mX:[function(a){P.dp(C.l,H.f(a,{func:1,ret:-1}))},"$1","lq",4,0,12],
dp:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.e.a0(a.a,1000)
return P.kX(z<0?0:z,b)},
eS:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bo]})
z=C.e.a0(a.a,1000)
return P.kY(z<0?0:z,b)},
lk:function(a,b){if(H.cf(a,{func:1,args:[P.b,P.ax]}))return b.is(a,null,P.b,P.ax)
if(H.cf(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.ck(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lj:function(){var z,y
for(;z=$.bt,z!=null;){$.bZ=null
y=z.b
$.bt=y
if(y==null)$.bY=null
z.a.$0()}},
n4:[function(){$.dz=!0
try{P.lj()}finally{$.bZ=null
$.dz=!1
if($.bt!=null)$.$get$dv().$1(P.fH())}},"$0","fH",0,0,3],
fC:function(a){var z=new P.fi(H.f(a,{func:1,ret:-1}))
if($.bt==null){$.bY=z
$.bt=z
if(!$.dz)$.$get$dv().$1(P.fH())}else{$.bY.b=z
$.bY=z}},
ln:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bt
if(z==null){P.fC(a)
$.bZ=$.bY
return}y=new P.fi(a)
x=$.bZ
if(x==null){y.b=z
$.bZ=y
$.bt=y}else{y.b=x.b
x.b=y
$.bZ=y
if(y.b==null)$.bY=y}},
lR:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cG(null,null,C.j,a)
return}y.toString
P.cG(null,null,y,H.f(y.co(a),z))},
dn:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dp(a,b)}return P.dp(a,H.f(y.co(b),z))},
jn:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bo]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.eS(a,b)}x=y.dG(b,P.bo)
$.T.toString
return P.eS(a,H.f(x,z))},
cF:function(a,b,c,d,e){var z={}
z.a=d
P.ln(new P.ll(z,e))},
fA:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fB:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.F(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
lm:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cG:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.hJ(d,-1)
P.fC(d)},
k_:{"^":"v:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jZ:{"^":"v:35;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
k0:{"^":"v:2;a",
$0:function(){this.a.$0()}},
k1:{"^":"v:2;a",
$0:function(){this.a.$0()}},
fw:{"^":"b;a,0b,c",
eR:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.l_(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
eS:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.kZ(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
$isbo:1,
q:{
kX:function(a,b){var z=new P.fw(!0,0)
z.eR(a,b)
return z},
kY:function(a,b){var z=new P.fw(!1,0)
z.eS(a,b)
return z}}},
l_:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kZ:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ez(w,x)}z.c=y
this.d.$1(z)}},
bs:{"^":"b;0a,b,c,d,e,$ti",
i7:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.f(this.d,{func:1,ret:P.a7,args:[P.b]}),a.a,P.a7,P.b)},
i0:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.B(this,1)}
w=this.b.b
if(H.cf(z,{func:1,args:[P.b,P.ax]}))return H.dD(w.iz(z,a.a,a.b,null,y,P.ax),x)
else return H.dD(w.cM(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;dA:a<,b,0h0:c<,$ti",
el:function(a,b,c){var z,y,x,w
z=H.B(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lk(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.d8(new P.bs(x,w,a,b,[z,c]))
return x},
iE:function(a,b){return this.el(a,null,b)},
d8:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isbs")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaT")
z=y.a
if(z<4){y.d8(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cG(null,null,z,H.f(new P.kf(this,a),{func:1,ret:-1}))}},
du:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isbs")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaT")
y=u.a
if(y<4){u.du(a)
return}this.a=y
this.c=u.c}z.a=this.bt(a)
y=this.b
y.toString
P.cG(null,null,y,H.f(new P.kk(z,this),{func:1,ret:-1}))}},
cb:function(){var z=H.i(this.c,"$isbs")
this.c=null
return this.bt(z)},
bt:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dh:function(a){var z,y,x,w
z=H.B(this,0)
H.dD(a,{futureOr:1,type:z})
y=this.$ti
x=H.c0(a,"$isbE",y,"$asbE")
if(x){z=H.c0(a,"$isaT",y,null)
if(z)P.fk(a,this)
else P.kg(a,this)}else{w=this.cb()
H.F(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
c_:[function(a,b){var z
H.i(b,"$isax")
z=this.cb()
this.a=8
this.c=new P.am(a,b)
P.bW(this,z)},function(a){return this.c_(a,null)},"iV","$2","$1","gf7",4,2,33],
$isbE:1,
q:{
kg:function(a,b){var z,y,x
b.a=1
try{a.el(new P.kh(b),new P.ki(b),null)}catch(x){z=H.aV(x)
y=H.by(x)
P.lR(new P.kj(b,z,y))}},
fk:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaT")
if(z>=4){y=b.cb()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.i(b.c,"$isbs")
b.a=2
b.c=a
a.du(y)}},
bW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isam")
y=y.b
u=v.a
t=v.b
y.toString
P.cF(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.i(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cF(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kn(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.km(x,b,r).$0()}else if((y&2)!==0)new P.kl(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.P(y).$isbE){if(y.a>=4){n=H.i(t.c,"$isbs")
t.c=null
b=t.bt(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fk(y,t)
return}}m=b.b
n=H.i(m.c,"$isbs")
m.c=null
b=m.bt(n)
y=x.a
u=x.b
if(!y){H.F(u,H.B(m,0))
m.a=4
m.c=u}else{H.i(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kf:{"^":"v:2;a,b",
$0:function(){P.bW(this.a,this.b)}},
kk:{"^":"v:2;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
kh:{"^":"v:19;a",
$1:function(a){var z=this.a
z.a=0
z.dh(a)}},
ki:{"^":"v:32;a",
$2:function(a,b){this.a.c_(a,H.i(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kj:{"^":"v:2;a,b,c",
$0:function(){this.a.c_(this.b,this.c)}},
kn:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ek(H.f(w.d,{func:1}),null)}catch(v){y=H.aV(v)
x=H.by(v)
if(this.d){w=H.i(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.P(z).$isbE){if(z instanceof P.aT&&z.gdA()>=4){if(z.gdA()===8){w=this.b
w.b=H.i(z.gh0(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iE(new P.ko(t),null)
w.a=!1}}},
ko:{"^":"v:31;a",
$1:function(a){return this.a}},
km:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.B(x,0)
v=H.F(this.c,w)
u=H.B(x,1)
this.a.b=x.b.b.cM(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aV(t)
y=H.by(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
kl:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isam")
w=this.c
if(w.i7(z)&&w.e!=null){v=this.b
v.b=w.i0(z)
v.a=!1}}catch(u){y=H.aV(u)
x=H.by(u)
w=H.i(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
fi:{"^":"b;a,0b"},
dj:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.x])
z.a=0
this.i5(new P.jc(z,this),!0,new P.jd(z,y),y.gf7())
return y}},
jc:{"^":"v;a,b",
$1:function(a){H.F(a,H.aA(this.b,"dj",0));++this.a.a},
$S:function(){return{func:1,ret:P.R,args:[H.aA(this.b,"dj",0)]}}},
jd:{"^":"v:2;a,b",
$0:function(){this.b.dh(this.a.a)}},
eM:{"^":"b;$ti"},
jb:{"^":"b;"},
bo:{"^":"b;"},
am:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
l5:{"^":"b;",$ismU:1},
ll:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ew()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kJ:{"^":"l5;",
iA:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fA(null,null,this,a,-1)}catch(x){z=H.aV(x)
y=H.by(x)
P.cF(null,null,this,z,H.i(y,"$isax"))}},
iB:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fB(null,null,this,a,b,-1,c)}catch(x){z=H.aV(x)
y=H.by(x)
P.cF(null,null,this,z,H.i(y,"$isax"))}},
hJ:function(a,b){return new P.kL(this,H.f(a,{func:1,ret:b}),b)},
co:function(a){return new P.kK(this,H.f(a,{func:1,ret:-1}))},
dG:function(a,b){return new P.kM(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ek:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fA(null,null,this,a,b)},
cM:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.T===C.j)return a.$1(b)
return P.fB(null,null,this,a,b,c,d)},
iz:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.T===C.j)return a.$2(b,c)
return P.lm(null,null,this,a,b,c,d,e,f)},
is:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
kL:{"^":"v;a,b,c",
$0:function(){return this.a.ek(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kK:{"^":"v:3;a,b",
$0:function(){return this.a.iA(this.b)}},
kM:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.iB(this.b,H.F(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hV:function(a,b,c){H.ch(a)
return H.r(H.lz(a,new H.aL(0,0,[b,c])),"$isej",[b,c],"$asej")},
hU:function(a,b){return new H.aL(0,0,[a,b])},
hW:function(a,b,c,d){return new P.kv(0,0,[d])},
hI:function(a,b,c){var z,y
if(P.dA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c_()
C.a.h(y,a)
try{P.li(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.eN(b,H.lJ(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
d2:function(a,b,c){var z,y,x
if(P.dA(a))return b+"..."+c
z=new P.ce(b)
y=$.$get$c_()
C.a.h(y,a)
try{x=z
x.a=P.eN(x.gaN(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gaN()+c
y=z.gaN()
return y.charCodeAt(0)==0?y:y},
dA:function(a){var z,y
for(z=0;y=$.$get$c_(),z<y.length;++z)if(a===y[z])return!0
return!1},
li:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.I();t=s,s=r){r=z.gP(z);++x
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
en:function(a){var z,y,x
z={}
if(P.dA(a))return"{...}"
y=new P.ce("")
try{C.a.h($.$get$c_(),a)
x=y
x.a=x.gaN()+"{"
z.a=!0
J.h_(a,new P.i0(z,y))
z=y
z.a=z.gaN()+"}"}finally{z=$.$get$c_()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gaN()
return z.charCodeAt(0)==0?z:z},
kv:{"^":"kp;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){return P.fm(this,this.r,H.B(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.F(b,H.B(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dx()
this.b=z}return this.df(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dx()
this.c=y}return this.df(y,b)}else return this.eT(0,b)},
eT:function(a,b){var z,y,x
H.F(b,H.B(this,0))
z=this.d
if(z==null){z=P.dx()
this.d=z}y=this.di(b)
x=z[y]
if(x==null)z[y]=[this.bZ(b)]
else{if(this.dn(x,b)>=0)return!1
x.push(this.bZ(b))}return!0},
Z:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dv(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fe(z,b)
x=this.dn(y,b)
if(x<0)return!1
this.dC(y.splice(x,1)[0])
return!0},
df:function(a,b){H.F(b,H.B(this,0))
if(H.i(a[b],"$isdw")!=null)return!1
a[b]=this.bZ(b)
return!0},
dv:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isdw")
if(z==null)return!1
this.dC(z)
delete a[b]
return!0},
dg:function(){this.r=this.r+1&67108863},
bZ:function(a){var z,y
z=new P.dw(H.F(a,H.B(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dg()
return z},
dC:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dg()},
di:function(a){return J.bf(a)&0x3ffffff},
fe:function(a,b){return a[this.di(b)]},
dn:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Y(a[y].a,b))return y
return-1},
q:{
dx:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dw:{"^":"b;a,0b,0c"},
kw:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bC(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.F(z.a,H.B(this,0))
this.c=z.b
return!0}}},
q:{
fm:function(a,b,c){var z=new P.kw(a,b,[c])
z.c=a.e
return z}}},
kp:{"^":"iS;"},
cx:{"^":"kx;",$ish:1,$isc:1},
w:{"^":"b;$ti",
ga1:function(a){return new H.el(a,this.gl(a),0,[H.bx(this,a,"w",0)])},
J:function(a,b){return this.k(a,b)},
iG:function(a,b){var z,y,x
z=H.a([],[H.bx(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.e(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
iF:function(a){return this.iG(a,!0)},
hW:function(a,b,c,d){var z
H.F(d,H.bx(this,a,"w",0))
P.dd(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d2(a,"[","]")}},
i_:{"^":"al;"},
i0:{"^":"v:15;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
al:{"^":"b;$ti",
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.bx(this,a,"al",0),H.bx(this,a,"al",1)]})
for(z=J.c3(this.gaF(a));z.I();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bA(this.gaF(a))},
i:function(a){return P.en(a)},
$isab:1},
iU:{"^":"b;$ti",
i:function(a){return P.d2(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dL("index"))
if(b<0)H.u(P.ap(b,0,null,"index",null))
for(z=P.fm(this,this.r,H.B(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
$ish:1},
iS:{"^":"iU;"},
kx:{"^":"b+w;"}}],["","",,P,{"^":"",cW:{"^":"b;$ti"},dV:{"^":"jb;$ti"},hv:{"^":"cW;",
$ascW:function(){return[P.o,[P.c,P.x]]}},jI:{"^":"hv;a"},jJ:{"^":"dV;",
hO:function(a,b,c){var z,y,x,w
z=a.length
P.dd(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.l4(0,0,x)
if(w.fd(a,b,z)!==z)w.dE(C.i.cs(a,z-1),0)
return C.r.bU(x,0,w.b)},
hN:function(a){return this.hO(a,0,null)},
$asdV:function(){return[P.o,[P.c,P.x]]}},l4:{"^":"b;a,b,c",
dE:function(a,b){var z,y,x,w,v
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
fd:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cs(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bp(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dE(w,C.i.bp(a,u)))x=u}else if(w<=2047){v=this.b
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
fM:function(a,b,c){var z=H.iD(a,c)
if(z!=null)return z
throw H.d(P.e7(a,null,null))},
hx:function(a){var z=J.P(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.bn(a)+"'"},
hX:function(a,b,c,d){var z,y
H.F(b,d)
z=J.hK(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.r(z,"$isc",[d],"$asc")},
hY:function(a,b,c){var z,y,x
z=[c]
y=H.a([],z)
for(x=a.ga1(a);x.I();)C.a.h(y,H.F(x.gP(x),c))
if(b)return y
return H.r(J.bJ(y),"$isc",z,"$asc")},
dk:function(a,b,c){var z,y
z=P.x
H.r(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.r(a,"$isbk",[z],"$asbk")
y=a.length
c=P.dd(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.U()
z=c<y}else z=!0
return H.eB(z?C.a.bU(a,b,c):a)}return P.je(a,b,c)},
je:function(a,b,c){var z,y,x
H.r(a,"$ish",[P.x],"$ash")
z=J.c3(a)
for(y=0;y<b;++y)if(!z.I())throw H.d(P.ap(b,0,y,null,null))
x=[]
for(;z.I();)x.push(z.gP(z))
return H.eB(x)},
iJ:function(a,b,c){return new H.hM(a,H.hN(a,!1,!0,!1))},
fz:function(a,b,c,d){var z,y,x,w,v,u
H.r(a,"$isc",[P.x],"$asc")
if(c===C.n){z=$.$get$fy().b
z=z.test(b)}else z=!1
if(z)return b
y=C.x.hN(H.F(b,H.aA(c,"cW",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.iE(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cr:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hx(a)},
t:function(a){return new P.fj(a)},
cy:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.x]})
z=H.a([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dK:function(a){H.lP(a)},
a7:{"^":"b;"},
"+bool":0,
aK:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aK))return!1
return this.a===b.a&&this.b===b.b},
gY:function(a){var z=this.a
return(z^C.e.bu(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hn(H.iC(this))
y=P.c5(H.iA(this))
x=P.c5(H.iw(this))
w=P.c5(H.ix(this))
v=P.c5(H.iz(this))
u=P.c5(H.iB(this))
t=P.ho(H.iy(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hn:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ho:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c5:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"X;"},
"+double":0,
bD:{"^":"b;a",
U:function(a,b){return C.e.U(this.a,H.i(b,"$isbD").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bD))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hs()
y=this.a
if(y<0)return"-"+new P.bD(0-y).i(0)
x=z.$1(C.e.a0(y,6e7)%60)
w=z.$1(C.e.a0(y,1e6)%60)
v=new P.hr().$1(y%1e6)
return""+C.e.a0(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
q:{
e3:function(a,b,c,d,e,f){return new P.bD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hr:{"^":"v:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hs:{"^":"v:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
ew:{"^":"a4;",
i:function(a){return"Throw of null."}},
aJ:{"^":"a4;a,b,c,d",
gc2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc1:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc2()+y+x
if(!this.a)return w
v=this.gc1()
u=P.cr(this.b)
return w+v+": "+H.l(u)},
q:{
h3:function(a){return new P.aJ(!1,null,null,a)},
ck:function(a,b,c){return new P.aJ(!0,a,b,c)},
dL:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
cz:{"^":"aJ;e,f,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cA:function(a,b,c){return new P.cz(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.cz(b,c,!0,a,d,"Invalid value")},
dd:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.e(a)
if(0<=a){if(typeof c!=="number")return H.e(c)
z=a>c}else z=!0
if(z)throw H.d(P.ap(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
z=b>c}else z=!0
if(z)throw H.d(P.ap(b,a,c,"end",f))
return b}return c}}},
hH:{"^":"aJ;e,l:f>,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){if(J.fW(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
S:function(a,b,c,d,e){var z=H.z(e!=null?e:J.bA(b))
return new P.hH(b,z,!0,a,c,"Index out of range")}}},
jE:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
J:function(a){return new P.jE(a)}}},
jB:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
fd:function(a){return new P.jB(a)}}},
j7:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hj:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cr(z))+"."},
q:{
bC:function(a){return new P.hj(a)}}},
ip:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
eK:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hm:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fj:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hD:{"^":"b;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.bV(x,0,75)+"..."
return y+"\n"+x},
q:{
e7:function(a,b,c){return new P.hD(a,b,c)}}},
x:{"^":"X;"},
"+int":0,
h:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga1(this)
for(y=0;z.I();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dL("index"))
if(b<0)H.u(P.ap(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.I();){x=z.gP(z)
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
i:function(a){return P.hI(this,"(",")")}},
d3:{"^":"b;$ti"},
c:{"^":"b;$ti",$ish:1},
"+List":0,
ab:{"^":"b;$ti"},
R:{"^":"b;",
gY:function(a){return P.b.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gY:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.bn(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
o:{"^":"b;",$isex:1},
"+String":0,
ce:{"^":"b;aN:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
eN:function(a,b,c){var z=J.c3(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.I())}else{a+=H.l(z.gP(z))
for(;z.I();)a=a+c+H.l(z.gP(z))}return a}}}}],["","",,W,{"^":"",
h2:function(a){var z=document.createElement("a")
return z},
cU:function(a,b){var z=document.createElement("canvas")
return z},
hu:function(a){H.i(a,"$isaj")
return"wheel"},
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fl:function(a,b,c,d){var z,y
z=W.cD(W.cD(W.cD(W.cD(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fE:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dG(a,b)},
bH:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lV:{"^":"q;0l:length=","%":"AccessibleNodeList"},
lW:{"^":"bH;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lX:{"^":"bH;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
h7:{"^":"q;","%":";Blob"},
cT:{"^":"bH;",
bS:function(a,b,c){if(c!=null)return a.getContext(b,P.ls(c,null))
return a.getContext(b)},
ep:function(a,b){return this.bS(a,b,null)},
$iscT:1,
"%":"HTMLCanvasElement"},
dR:{"^":"q;",$isdR:1,"%":"CanvasRenderingContext2D"},
m2:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
m4:{"^":"hl;0l:length=","%":"CSSPerspective"},
aY:{"^":"q;",$isaY:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
m5:{"^":"k5;0l:length=",
eq:function(a,b){var z=a.getPropertyValue(this.f4(a,b))
return z==null?"":z},
f4:function(a,b){var z,y
z=$.$get$dW()
y=z[b]
if(typeof y==="string")return y
y=this.h9(a,b)
z[b]=y
return y},
h9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hp()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gas:function(a){return a.height},
gaa:function(a){return a.left},
gag:function(a){return a.right},
gbj:function(a){return a.top},
gaw:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hk:{"^":"b;",
gaa:function(a){return this.eq(a,"left")}},
dX:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hl:{"^":"q;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
m6:{"^":"dX;0l:length=","%":"CSSTransformValue"},
m7:{"^":"dX;0l:length=","%":"CSSUnparsedValue"},
m8:{"^":"q;0l:length=","%":"DataTransferItemList"},
m9:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
ma:{"^":"k7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.r(c,"$isa6",[P.X],"$asa6")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.a6,P.X]]},
$isI:1,
$asI:function(){return[[P.a6,P.X]]},
$asw:function(){return[[P.a6,P.X]]},
$ish:1,
$ash:function(){return[[P.a6,P.X]]},
$isc:1,
$asc:function(){return[[P.a6,P.X]]},
$asC:function(){return[[P.a6,P.X]]},
"%":"ClientRectList|DOMRectList"},
hq:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaw(a))+" x "+H.l(this.gas(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isa6",[P.X],"$asa6")
if(!z)return!1
z=J.c2(b)
return a.left===z.gaa(b)&&a.top===z.gbj(b)&&this.gaw(a)===z.gaw(b)&&this.gas(a)===z.gas(b)},
gY:function(a){return W.fl(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaw(a)&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gas:function(a){return a.height},
gaa:function(a){return a.left},
gag:function(a){return a.right},
gbj:function(a){return a.top},
gaw:function(a){return a.width},
$isa6:1,
$asa6:function(){return[P.X]},
"%":";DOMRectReadOnly"},
mb:{"^":"k9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.o]},
$isI:1,
$asI:function(){return[P.o]},
$asw:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asC:function(){return[P.o]},
"%":"DOMStringList"},
mc:{"^":"q;0l:length=","%":"DOMTokenList"},
k4:{"^":"cx;a,b",
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
ga1:function(a){var z=this.iF(this)
return new J.au(z,z.length,0,[H.B(z,0)])},
$asw:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"L;",
gdI:function(a){return new W.k4(a,a.children)},
gdJ:function(a){return P.iG(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
ai:{"^":"q;",$isai:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aj:{"^":"q;",
dF:["ev",function(a,b,c,d){H.f(c,{func:1,args:[W.ai]})
if(c!=null)this.eV(a,b,c,!1)}],
eV:function(a,b,c,d){return a.addEventListener(b,H.bv(H.f(c,{func:1,args:[W.ai]}),1),!1)},
$isaj:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fr|fs|fu|fv"},
b_:{"^":"h7;",$isb_:1,"%":"File"},
md:{"^":"ke;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb_")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b_]},
$isI:1,
$asI:function(){return[W.b_]},
$asw:function(){return[W.b_]},
$ish:1,
$ash:function(){return[W.b_]},
$isc:1,
$asc:function(){return[W.b_]},
$asC:function(){return[W.b_]},
"%":"FileList"},
me:{"^":"aj;0l:length=","%":"FileWriter"},
mf:{"^":"bH;0l:length=","%":"HTMLFormElement"},
b0:{"^":"q;",$isb0:1,"%":"Gamepad"},
mg:{"^":"q;0l:length=","%":"History"},
mh:{"^":"kr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cu:{"^":"q;0dM:data=",$iscu:1,"%":"ImageData"},
ec:{"^":"bH;",$isec:1,"%":"HTMLImageElement"},
bL:{"^":"dq;",$isbL:1,"%":"KeyboardEvent"},
ml:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
mm:{"^":"q;0l:length=","%":"MediaList"},
mn:{"^":"aj;",
dF:function(a,b,c,d){H.f(c,{func:1,args:[W.ai]})
if(b==="message")a.start()
this.ev(a,b,c,!1)},
"%":"MessagePort"},
mo:{"^":"ky;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaF:function(a){var z=H.a([],[P.o])
this.M(a,new W.ic(z))
return z},
gl:function(a){return a.size},
$asal:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"MIDIInputMap"},
ic:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mp:{"^":"kz;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaF:function(a){var z=H.a([],[P.o])
this.M(a,new W.id(z))
return z},
gl:function(a){return a.size},
$asal:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
id:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b2:{"^":"q;",$isb2:1,"%":"MimeType"},
mq:{"^":"kB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb2")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b2]},
$isI:1,
$asI:function(){return[W.b2]},
$asw:function(){return[W.b2]},
$ish:1,
$ash:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$asC:function(){return[W.b2]},
"%":"MimeTypeArray"},
aw:{"^":"dq;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
k3:{"^":"cx;a",
m:function(a,b,c){var z,y
H.z(b)
H.i(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.j(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.e6(z,z.length,-1,[H.bx(C.J,z,"C",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asw:function(){return[W.L]},
$ash:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"aj;",
iv:function(a,b){var z,y
try{z=a.parentNode
J.fY(z,b,a)}catch(y){H.aV(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ew(a):z},
fW:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ik:{"^":"kD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
b4:{"^":"q;0l:length=",$isb4:1,"%":"Plugin"},
mz:{"^":"kH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb4")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b4]},
$isI:1,
$asI:function(){return[W.b4]},
$asw:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asC:function(){return[W.b4]},
"%":"PluginArray"},
mB:{"^":"kN;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaF:function(a){var z=H.a([],[P.o])
this.M(a,new W.iP(z))
return z},
gl:function(a){return a.size},
$asal:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"RTCStatsReport"},
iP:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mD:{"^":"bH;0l:length=","%":"HTMLSelectElement"},
b5:{"^":"aj;",$isb5:1,"%":"SourceBuffer"},
mE:{"^":"fs;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb5")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b5]},
$isI:1,
$asI:function(){return[W.b5]},
$asw:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asC:function(){return[W.b5]},
"%":"SourceBufferList"},
b6:{"^":"q;",$isb6:1,"%":"SpeechGrammar"},
mF:{"^":"kP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb6")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b6]},
$isI:1,
$asI:function(){return[W.b6]},
$asw:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asC:function(){return[W.b6]},
"%":"SpeechGrammarList"},
b7:{"^":"q;0l:length=",$isb7:1,"%":"SpeechRecognitionResult"},
mH:{"^":"kS;",
k:function(a,b){return a.getItem(H.U(b))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaF:function(a){var z=H.a([],[P.o])
this.M(a,new W.ja(z))
return z},
gl:function(a){return a.length},
$asal:function(){return[P.o,P.o]},
$isab:1,
$asab:function(){return[P.o,P.o]},
"%":"Storage"},
ja:{"^":"v:30;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b8:{"^":"q;",$isb8:1,"%":"CSSStyleSheet|StyleSheet"},
b9:{"^":"aj;",$isb9:1,"%":"TextTrack"},
ba:{"^":"aj;",$isba:1,"%":"TextTrackCue|VTTCue"},
mL:{"^":"kW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isba")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$isI:1,
$asI:function(){return[W.ba]},
$asw:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"TextTrackCueList"},
mM:{"^":"fv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb9")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b9]},
$isI:1,
$asI:function(){return[W.b9]},
$asw:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"TextTrackList"},
mN:{"^":"q;0l:length=","%":"TimeRanges"},
bb:{"^":"q;",$isbb:1,"%":"Touch"},
bp:{"^":"dq;",$isbp:1,"%":"TouchEvent"},
mO:{"^":"l1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbb")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bb]},
$isI:1,
$asI:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"TouchList"},
mP:{"^":"q;0l:length=","%":"TrackDefaultList"},
dq:{"^":"ai;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mS:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
mT:{"^":"aj;0l:length=","%":"VideoTrackList"},
bV:{"^":"aw;",
ghR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
ghQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
jV:{"^":"aj;",
fX:function(a,b){return a.requestAnimationFrame(H.bv(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
fc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mY:{"^":"l7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isaY")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.aY]},
$isI:1,
$asI:function(){return[W.aY]},
$asw:function(){return[W.aY]},
$ish:1,
$ash:function(){return[W.aY]},
$isc:1,
$asc:function(){return[W.aY]},
$asC:function(){return[W.aY]},
"%":"CSSRuleList"},
mZ:{"^":"hq;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.c0(b,"$isa6",[P.X],"$asa6")
if(!z)return!1
z=J.c2(b)
return a.left===z.gaa(b)&&a.top===z.gbj(b)&&a.width===z.gaw(b)&&a.height===z.gas(b)},
gY:function(a){return W.fl(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gas:function(a){return a.height},
gaw:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n0:{"^":"l9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb0")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b0]},
$isI:1,
$asI:function(){return[W.b0]},
$asw:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$asC:function(){return[W.b0]},
"%":"GamepadList"},
n1:{"^":"lb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n2:{"^":"ld;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb7")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b7]},
$isI:1,
$asI:function(){return[W.b7]},
$asw:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asC:function(){return[W.b7]},
"%":"SpeechRecognitionResultList"},
n3:{"^":"lf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb8")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b8]},
$isI:1,
$asI:function(){return[W.b8]},
$asw:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asC:function(){return[W.b8]},
"%":"StyleSheetList"},
ka:{"^":"dj;a,b,c,$ti",
i5:function(a,b,c,d){var z=H.B(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
n_:{"^":"ka;a,b,c,$ti"},
kb:{"^":"eM;a,b,c,d,e,$ti",
hf:function(){var z=this.d
if(z!=null&&this.a<=0)J.fZ(this.b,this.c,z,!1)},
q:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fE(new W.kc(c),W.ai)
z=new W.kb(0,a,b,z,!1,[e])
z.hf()
return z}}},
kc:{"^":"v:5;a",
$1:function(a){return this.a.$1(H.i(a,"$isai"))}},
C:{"^":"b;$ti",
ga1:function(a){return new W.e6(a,this.gl(a),-1,[H.bx(this,a,"C",0)])}},
e6:{"^":"b;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fX(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
k5:{"^":"q+hk;"},
k6:{"^":"q+w;"},
k7:{"^":"k6+C;"},
k8:{"^":"q+w;"},
k9:{"^":"k8+C;"},
kd:{"^":"q+w;"},
ke:{"^":"kd+C;"},
kq:{"^":"q+w;"},
kr:{"^":"kq+C;"},
ky:{"^":"q+al;"},
kz:{"^":"q+al;"},
kA:{"^":"q+w;"},
kB:{"^":"kA+C;"},
kC:{"^":"q+w;"},
kD:{"^":"kC+C;"},
kG:{"^":"q+w;"},
kH:{"^":"kG+C;"},
kN:{"^":"q+al;"},
fr:{"^":"aj+w;"},
fs:{"^":"fr+C;"},
kO:{"^":"q+w;"},
kP:{"^":"kO+C;"},
kS:{"^":"q+al;"},
kV:{"^":"q+w;"},
kW:{"^":"kV+C;"},
fu:{"^":"aj+w;"},
fv:{"^":"fu+C;"},
l0:{"^":"q+w;"},
l1:{"^":"l0+C;"},
l6:{"^":"q+w;"},
l7:{"^":"l6+C;"},
l8:{"^":"q+w;"},
l9:{"^":"l8+C;"},
la:{"^":"q+w;"},
lb:{"^":"la+C;"},
lc:{"^":"q+w;"},
ld:{"^":"lc+C;"},
le:{"^":"q+w;"},
lf:{"^":"le+C;"}}],["","",,P,{"^":"",
lv:function(a){var z,y
z=J.P(a)
if(!!z.$iscu){y=z.gdM(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fx(a.data,a.height,a.width)},
lu:function(a){if(a instanceof P.fx)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.hU(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.U(y[w])
z.m(0,v,a[v])}return z},
ls:function(a,b){var z={}
a.M(0,new P.lt(z))
return z},
e2:function(){var z=$.e1
if(z==null){z=J.cM(window.navigator.userAgent,"Opera",0)
$.e1=z}return z},
hp:function(){var z,y
z=$.dZ
if(z!=null)return z
y=$.e_
if(y==null){y=J.cM(window.navigator.userAgent,"Firefox",0)
$.e_=y}if(y)z="-moz-"
else{y=$.e0
if(y==null){y=!P.e2()&&J.cM(window.navigator.userAgent,"Trident/",0)
$.e0=y}if(y)z="-ms-"
else z=P.e2()?"-o-":"-webkit-"}$.dZ=z
return z},
fx:{"^":"b;dM:a>,b,c",$iscu:1},
lt:{"^":"v:15;a",
$2:function(a,b){this.a[a]=b}},
hA:{"^":"cx;a,b",
gbs:function(){var z,y,x
z=this.b
y=H.aA(z,"w",0)
x=W.a0
return new H.i1(new H.jT(z,H.f(new P.hB(),{func:1,ret:P.a7,args:[y]}),[y]),H.f(new P.hC(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.z(b)
H.i(c,"$isa0")
z=this.gbs()
J.h0(z.b.$1(J.cN(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bA(this.gbs().a)},
k:function(a,b){var z=this.gbs()
return z.b.$1(J.cN(z.a,b))},
ga1:function(a){var z=P.hY(this.gbs(),!1,W.a0)
return new J.au(z,z.length,0,[H.B(z,0)])},
$asw:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hB:{"^":"v:28;",
$1:function(a){return!!J.P(H.i(a,"$isL")).$isa0}},
hC:{"^":"v:25;",
$1:function(a){return H.k(H.i(a,"$isL"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ks:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kI:{"^":"b;$ti",
gag:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.F(z+this.c,H.B(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.F(z+this.d,H.B(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c0(b,"$isa6",[P.X],"$asa6")
if(!z)return!1
z=this.a
y=J.c2(b)
x=y.gaa(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.B(this,0)
if(H.F(z+this.c,w)===y.gag(b)){if(typeof x!=="number")return x.n()
z=H.F(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.bf(z)
x=this.b
w=J.bf(x)
if(typeof z!=="number")return z.n()
v=H.B(this,0)
z=H.F(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.F(x+this.d,v)
return P.ks(P.cE(P.cE(P.cE(P.cE(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a6:{"^":"kI;aa:a>,bj:b>,aw:c>,as:d>,$ti",q:{
iG:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.U()
if(c<0)z=-c*0
else z=c
H.F(z,e)
if(typeof d!=="number")return d.U()
if(d<0)y=-d*0
else y=d
return new P.a6(a,b,z,H.F(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"q;",$isbM:1,"%":"SVGLength"},mk:{"^":"ku;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbM")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asC:function(){return[P.bM]},
"%":"SVGLengthList"},bP:{"^":"q;",$isbP:1,"%":"SVGNumber"},mx:{"^":"kF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbP")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bP]},
$ish:1,
$ash:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asC:function(){return[P.bP]},
"%":"SVGNumberList"},mA:{"^":"q;0l:length=","%":"SVGPointList"},mI:{"^":"kU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asC:function(){return[P.o]},
"%":"SVGStringList"},mJ:{"^":"a0;",
gdI:function(a){return new P.hA(a,new W.k3(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bR:{"^":"q;",$isbR:1,"%":"SVGTransform"},mQ:{"^":"l3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbR")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bR]},
$ish:1,
$ash:function(){return[P.bR]},
$isc:1,
$asc:function(){return[P.bR]},
$asC:function(){return[P.bR]},
"%":"SVGTransformList"},kt:{"^":"q+w;"},ku:{"^":"kt+C;"},kE:{"^":"q+w;"},kF:{"^":"kE+C;"},kT:{"^":"q+w;"},kU:{"^":"kT+C;"},l2:{"^":"q+w;"},l3:{"^":"l2+C;"}}],["","",,P,{"^":"",lY:{"^":"q;0l:length=","%":"AudioBuffer"},lZ:{"^":"k2;",
k:function(a,b){return P.aU(a.get(H.U(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gaF:function(a){var z=H.a([],[P.o])
this.M(a,new P.h5(z))
return z},
gl:function(a){return a.size},
$asal:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"AudioParamMap"},h5:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},m_:{"^":"aj;0l:length=","%":"AudioTrackList"},h6:{"^":"aj;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},my:{"^":"h6;0l:length=","%":"OfflineAudioContext"},k2:{"^":"q+al;"}}],["","",,P,{"^":"",dg:{"^":"q;",
iD:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.P(g)
if(!!z.$iscu)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lu(g))
return}if(!!z.$isec)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.h3("Incorrect number or type of arguments"))},
iC:function(a,b,c,d,e,f,g){return this.iD(a,b,c,d,e,f,g,null,null,null)},
$isdg:1,
"%":"WebGLRenderingContext"},jz:{"^":"q;",$isjz:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mG:{"^":"kR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.z(b)
H.i(c,"$isab")
throw H.d(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[[P.ab,,,]]},
$ish:1,
$ash:function(){return[[P.ab,,,]]},
$isc:1,
$asc:function(){return[[P.ab,,,]]},
$asC:function(){return[[P.ab,,,]]},
"%":"SQLResultSetRowList"},kQ:{"^":"q+w;"},kR:{"^":"kQ+C;"}}],["","",,L,{"^":"",im:{"^":"b;a",q:{
io:function(a){var z,y,x,w,v,u,t,s
z=new Array(256)
z.fixed$length=Array
y=[P.x]
x=H.a(z,y)
z=new Array(256)
z.fixed$length=Array
w=H.a(z,y)
for(v=0;v<256;++v)C.a.m(w,v,v)
u=P.fM("6364136223846793005",null,null)
t=P.fM("1442695040888963407",null,null)
if(typeof u!=="number")return H.e(u)
if(typeof t!=="number")return H.e(t)
a=C.e.cN(C.e.cN(C.e.cN(a*u+t,64)*u+t,64)*u+t,64)
for(v=255;v>=0;--v){z=a*u+t
a=((z&-1)>>>0)-(z&0)
s=C.e.cT(a+31,v+1)
if(s>=256)return H.j(w,s)
C.a.m(x,v,w[s])
w[s]=w[v]}return new L.im(x)}}}}],["","",,B,{"^":"",hy:{"^":"b;a,b,c,d,0e",
a7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=new B.af(a,b)
y=this.c.w(0,z).w(0,$.$get$cY().j(0,a+b))
x=y.a
w=y.b
v=2-x*x-w*w
if(v>0){u=v*v
t=this.e
s=this.b.n(0,z)
r=this.a
q=r[C.h.aH(s.a)&255]
s=C.h.aH(s.b)
if(typeof q!=="number")return q.n()
s=r[q+s&255]
if(typeof s!=="number")return s.cS()
p=(s&14)>>>1
s=$.$get$e4()
if(p>=8)return H.j(s,p)
o=s[p]
this.e=t+u*u*(o.a*x+o.b*w)}},
ar:function(){var z,y,x,w
this.a7(1,0)
this.a7(0,1)
z=this.d
y=z.a
z=z.b
x=y+z
if(x<=1){w=1-x
if(w>y||w>z)if(y>z)this.a7(1,-1)
else this.a7(-1,1)
else this.a7(1,1)
this.a7(0,0)}else{w=2-x
if(w<y||w<z)if(y>z)this.a7(2,0)
else this.a7(0,2)
else this.a7(0,0)
this.a7(1,1)}return this.e/47},
q:{
aZ:function(a,b){var z,y,x,w,v,u
H.r(a,"$isc",[P.x],"$asc")
z=b.n(0,$.$get$e5().j(0,b.a+b.b))
y=Math.floor(z.a)
x=Math.floor(z.b)
w=new B.af(y,x)
v=w.n(0,$.$get$cY().j(0,y+x))
u=z.w(0,w)
x=new B.hy(a,w,b.w(0,v),u)
x.e=0
return x}}},af:{"^":"b;a,b",
n:function(a,b){return new B.af(this.a+b.a,this.b+b.b)},
w:function(a,b){return new B.af(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.af(this.a*b,this.b*b)},
i:function(a){return H.l(this.a)+", "+H.l(this.b)},
q:{
aE:function(a,b){return new B.af(a,b)}}}}],["","",,O,{"^":"",an:{"^":"b;0a,0b,0c,0d,$ti",
bm:function(a){this.a=H.a([],[a])
this.b=null
this.c=null
this.d=null},
bT:function(a,b,c){var z=H.aA(this,"an",0)
H.f(b,{func:1,ret:P.a7,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.x,[P.h,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bl:function(a,b){return this.bT(a,null,b)},
b5:function(a){var z
H.r(a,"$ish",[H.aA(this,"an",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dr:function(a,b){var z
H.r(b,"$ish",[H.aA(this,"an",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.au(z,z.length,0,[H.B(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aA(this,"an",0)
H.F(b,z)
z=[z]
if(this.b5(H.a([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dr(x,H.a([b],z))}},
aB:function(a,b){var z,y
H.r(b,"$ish",[H.aA(this,"an",0)],"$ash")
if(this.b5(b)){z=this.a
y=z.length
C.a.aB(z,b)
this.dr(y,b)}},
$ish:1,
q:{
cX:function(a){var z=new O.an([a])
z.bm(a)
return z}}},d9:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
eI:function(a){var z=this.b
if(!(z==null))z.C(a)},
aI:function(){return this.eI(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gcG(z)
else return V.bm()},
eh:function(a){var z=this.a
if(a==null)C.a.h(z,V.bm())
else C.a.h(z,a)
this.aI()},
cL:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",cP:{"^":"b;"},ah:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
dd:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.B(z,0)]);z.I();){y=z.d
if(y.f==null)y.dd()}},
scU:function(a){var z,y,x,w
z=this.d
if(z==null?a!=null:z!==a){this.c=null
this.d=a
this.e=null
if(z!=null){y=z.gv()
y.toString
x=H.f(this.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.Z(y.a,x)}y=this.d
if(y!=null){y=y.gv()
y.toString
x=H.f(this.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.H("shapeBuilder",z,this.d,this,[F.dh])
w.b=!0
this.a2(w)}},
a6:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aj(0,b,this):null
if(!J.Y(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.aC])
w.b=!0
this.a2(w)}z=this.f
if(z!=null)z.a6(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.B(z,0)]);z.I();)z.d.a6(0,b)},
b1:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV(z))
else C.a.h(z.a,y.j(0,z.gV(z)))
z.aI()
a.ei(this.f)
z=a.dy
x=(z&&C.a).gcG(z)
if(x!=null&&this.d!=null)x.iu(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.B(z,0)]);z.I();)z.d.b1(a)
a.eg()
a.dx.cL()},
gv:function(){var z=this.z
if(z==null){z=D.K()
this.z=z}return z},
a2:function(a){var z=this.z
if(!(z==null))z.C(a)},
a4:function(){return this.a2(null)},
ie:[function(a){H.i(a,"$isn")
this.e=null
this.a2(a)},function(){return this.ie(null)},"jG","$1","$0","gbP",0,2,1],
ig:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ig(null)},"jH","$1","$0","gee",0,2,1],
ic:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ic(null)},"jF","$1","$0","ged",0,2,1],
ia:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ia(null)},"jD","$1","$0","gec",0,2,1],
jC:[function(a,b){var z,y,x,w,v,u,t
H.r(b,"$ish",[E.ah],"$ash")
for(z=b.length,y=this.gec(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.bh()
t.a=H.a([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a4()},"$2","gi9",8,0,9],
jE:[function(a,b){var z,y,x,w,v,u,t
H.r(b,"$ish",[E.ah],"$ash")
for(z=b.length,y=this.gec(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.bh()
t.a=H.a([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.Z(t.a,y)}}this.a4()},"$2","gib",8,0,9],
$isaO:1,
q:{
bg:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=new E.ah()
z.a=d
z.b=!0
y=O.cX(E.ah)
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
C.a.Z(x.a,w)}x=z.c
if(x!=null){x=x.gv()
x.toString
w=H.f(z.gbP(),{func:1,ret:-1,args:[D.n]})
C.a.h(x.a,w)}v=new D.H("shape",y,z.c,z,[F.eJ])
v.b=!0
z.a2(v)}y=z.f
if(y==null?f!=null:y!==f){if(y!=null){y=y.gv()
y.toString
x=H.f(z.gee(),{func:1,ret:-1,args:[D.n]})
C.a.Z(y.a,x)}u=z.f
z.f=f
if(f!=null){y=f.gv()
y.toString
x=H.f(z.gee(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}z.dd()
v=new D.H("technique",u,z.f,z,[O.dl])
v.b=!0
z.a2(v)}if(!J.Y(z.r,c)){t=z.r
if(t!=null){y=t.gv()
y.toString
x=H.f(z.ged(),{func:1,ret:-1,args:[D.n]})
C.a.Z(y.a,x)}if(c!=null){y=c.gv()
y.toString
x=H.f(z.ged(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}z.r=c
v=new D.H("mover",t,c,z,[U.a5])
v.b=!0
z.a2(v)}if(a!=null)z.y.aB(0,a)
return z}}},iK:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eD:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aK(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d9()
y=[V.aC]
z.a=H.a([],y)
x=z.gv()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.f(new E.iM(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d9()
z.a=H.a([],y)
v=z.gv()
v.toString
x=H.f(new E.iN(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d9()
z.a=H.a([],y)
y=z.gv()
y.toString
w=H.f(new E.iO(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.a([],[O.dl])
this.dy=z
C.a.h(z,null)
this.fr=new H.aL(0,0,[P.o,A.eI])},
giq:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.j(0,y.gV(y))
this.z=y
z=y}return z},
ei:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcG(z):a;(z&&C.a).h(z,y)},
eg:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
iL:function(a,b){var z=new E.iK(a,b)
z.eD(a,b)
return z}}},iM:{"^":"v:10;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.ch=null}},iN:{"^":"v:10;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iO:{"^":"v:10;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},j8:{"^":"n;c,a,0b"},jk:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gv:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
eK:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.C(a)
this.ix()},function(){return this.eK(null)},"eJ","$1","$0","gcY",0,2,1],
gi_:function(){var z,y,x
z=Date.now()
y=C.e.a0(P.e3(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aK(z,!1)
return x/y},
dw:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.e(z)
x=C.h.b0(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.h.b0(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dn(C.l,this.giw())},
ix:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jm(this),{func:1,ret:-1,args:[P.X]})
C.v.fc(z)
C.v.fX(z,W.fE(y,P.X))}},"$0","giw",0,0,3],
it:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dw()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aK(w,!1)
x.y=P.e3(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aI()
w=x.db
C.a.sl(w.a,0)
w.aI()
w=x.dx
C.a.sl(w.a,0)
w.aI()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b1(this.e)}}catch(v){z=H.aV(v)
y=H.by(v)
P.dK("Error: "+H.l(z))
P.dK("Stack: "+H.l(y))
throw H.d(z)}},
q:{
jl:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$iscT)return E.eR(a,!0,!0,!0,!1)
y=W.cU(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdI(a).h(0,y)
w=E.eR(y,!0,!0,!0,!1)
w.a=a
return w},
eR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jk()
y=P.hV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bS(a,"webgl",y)
x=H.i(x==null?C.k.bS(a,"experimental-webgl",y):x,"$isdg")
if(x==null)H.u(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iL(x,a)
w=new T.jf(x)
w.b=H.z(x.getParameter(3379))
w.c=H.z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jF(a)
v=new X.hQ()
v.c=new X.V(!1,!1,!1)
v.d=P.hW(null,null,null,P.x)
w.b=v
v=new X.ie(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hZ(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jp(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.a([],[[P.eM,P.b]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.f(w.gfA(),s),!1,t))
v=w.z
r=W.ai
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.f(w.gfD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.f(w.gft(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.f(w.gc9(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.f(w.gbX(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.f(w.gfJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.f(w.gfL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.f(w.gfK(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a3(a,H.U(W.hu(a)),H.f(w.gfM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.f(w.gfB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.f(w.gfC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.f(w.gfN(),q),!1,r))
r=w.z
q=W.bp
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.f(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.f(w.gfR(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.f(w.gfS(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aK(Date.now(),!1)
z.ch=0
z.dw()
return z}}},jm:{"^":"v:34;a",
$1:function(a){var z
H.lO(a)
z=this.a
if(z.z){z.z=!1
z.it()}}}}],["","",,Z,{"^":"",fg:{"^":"b;a,b",q:{
fh:function(a,b,c){var z
H.r(c,"$isc",[P.y],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Float32Array(H.bX(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,z)},
cC:function(a,b,c){var z
H.r(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bX(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,z)}}},co:{"^":"cP;a,b,c,d,e",
cn:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aV(y)
x=P.t('Failed to bind buffer attribute "'+J.at(this.a)+'": '+H.l(z))
throw H.d(x)}},
i:function(a){return"["+J.at(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},jS:{"^":"b;a",$ism0:1},cS:{"^":"b;a,0b,c,d",
aZ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cn:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cn(a)},
iJ:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b1:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.a([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.at(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$ismK:1},bI:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bn(this.c)+"'")+"]"}},ad:{"^":"b;a",
gdL:function(a){var z,y
z=this.a
y=(z&$.$get$a_().a)!==0?1:0
if((z&$.$get$ae().a)!==0)++y
if((z&$.$get$aR().a)!==0)++y
if((z&$.$get$a2().a)!==0)++y
if((z&$.$get$aS().a)!==0)++y
if((z&$.$get$bT().a)!==0)++y
if((z&$.$get$bU().a)!==0)++y
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+1:y},
gb2:function(a){var z,y
z=this.a
y=(z&$.$get$a_().a)!==0?3:0
if((z&$.$get$ae().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$a2().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$br().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
ci:function(a){var z,y,x
z=$.$get$a_()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ff()},
u:function(a,b){if(b==null)return!1
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
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$br().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
q:{
az:function(a){return new Z.ad(a)}}}}],["","",,D,{"^":"",cV:{"^":"b;"},bh:{"^":"b;0a,0b,0c",
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.M(y,new D.hz(z))
return x!==0},
hU:function(){return this.C(null)},
iy:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.C(y)}}},
av:function(a){return this.iy(a,!0,!1)},
q:{
K:function(){var z=new D.bh()
z.a=H.a([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},hz:{"^":"v:24;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"b;a,0b"},c8:{"^":"n;c,d,a,0b,$ti"},c9:{"^":"n;c,d,a,0b,$ti"},H:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dP:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
q:{"^":"m1<"}},Q:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Q))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},bK:{"^":"n;c,a,0b"},hP:{"^":"an;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
gaf:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
cZ:function(a){var z=this.e
if(!(z==null))z.C(a)},
iQ:[function(a){var z,y,x
H.r(a,"$ish",[X.Q],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(C.a.aq(this.a,x))return!1}return!0},"$1","geN",4,0,40],
iP:[function(a,b){var z=X.Q
z=new D.c8(a,H.r(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.cZ(z)},"$2","geL",8,0,22],
iR:[function(a,b){var z=X.Q
z=new D.c9(a,H.r(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.cZ(z)},"$2","geO",8,0,22],
eM:[function(a){var z
H.i(a,"$isn")
if(!this.r&&a instanceof X.bK){z=a.c
if(C.a.aq(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.C(a)}}},"$1","gbX",4,0,0],
fG:[function(a){var z
H.i(a,"$isn")
if(this.r&&a instanceof X.bK){z=a.c
if(C.a.aq(this.a,z))this.r=!1}},"$1","gc9",4,0,0],
a5:function(a){var z,y,x,w
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.K()
z.b=y}x={func:1,ret:-1,args:[D.n]}
w=H.f(this.gbX(),x)
C.a.h(y.a,w)
y=z.a
if(y==null){y=D.K()
z.a=y
z=y}else z=y
x=H.f(this.gc9(),x)
C.a.h(z.a,x)
return!0},
$ash:function(){return[X.Q]},
$asan:function(){return[X.Q]},
q:{
aM:function(){var z=new X.hP()
z.bm(X.Q)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bT(z.geL(),z.geN(),z.geO())
return z}}},hQ:{"^":"b;0a,0b,0c,0d",
im:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.bK(a,this)
y.b=!0
return z.C(y)},
ii:function(a){var z,y
this.c=a.b
this.d.Z(0,a.a)
z=this.b
if(z==null)return!1
y=new X.bK(a,this)
y.b=!0
return z.C(y)}},em:{"^":"dc;x,y,c,d,e,a,0b"},hZ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
az:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aK(Date.now(),!1)
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
cK:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.az(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.cS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.az(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.az(a,b))
return!0},
io:function(a){return!1},
fI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aK(Date.now(),!1)
y=this.f
x=new X.em(c,a,this.a.gbA(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.M(0,0)}},V:{"^":"b;a,b,c",
u:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bN:{"^":"dc;x,y,z,Q,ch,c,d,e,a,0b"},ie:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.aK(Date.now(),!1)
y=this.a.gbA()
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
z.C(this.c3(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.cS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.c3(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.c3(a,b,!1))
return!0},
ip:function(a,b){return!1}},dc:{"^":"n;"},eV:{"^":"dc;x,y,z,Q,ch,c,d,e,a,0b"},jp:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
az:function(a,b){var z,y,x,w
H.r(a,"$isc",[V.M],"$asc")
z=new P.aK(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gbA()
w=new X.eV(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
il:function(a){var z
H.r(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.C(this.az(a,!0))
return!0},
ij:function(a){var z
H.r(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.C(this.az(a,!0))
return!0},
ik:function(a){var z
H.r(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.C(this.az(a,!1))
return!0}},jF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbA:function(){var z=this.a
return V.de(0,0,(z&&C.k).gdJ(z).c,C.k.gdJ(z).d)},
dl:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.Q(z,new X.V(y,a.altKey,a.shiftKey))},
aS:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
ce:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
aA:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.w()
v=z.top
if(typeof x!=="number")return x.w()
return new V.M(y-w,x-v)},
b6:function(a){return new V.Z(a.movementX,a.movementY)},
ca:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.a([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.h.ah(u.pageX)
C.h.ah(u.pageY)
s=z.left
C.h.ah(u.pageX)
C.a.h(y,new V.M(t-s,C.h.ah(u.pageY)-z.top))}return y},
ax:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.V(y,a.altKey,a.shiftKey))},
c5:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.w()
v=H.z(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.w()
u=H.z(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
je:[function(a){this.f=!0},"$1","gfD",4,0,5],
j6:[function(a){this.f=!1},"$1","gft",4,0,5],
jb:[function(a){H.i(a,"$isaw")
if(this.f&&this.c5(a))a.preventDefault()},"$1","gfA",4,0,4],
fG:[function(a){var z
H.i(a,"$isbL")
if(!this.f)return
z=this.dl(a)
if(this.b.im(z))a.preventDefault()},"$1","gc9",4,0,21],
eM:[function(a){var z
H.i(a,"$isbL")
if(!this.f)return
z=this.dl(a)
if(this.b.ii(z))a.preventDefault()},"$1","gbX",4,0,21],
ji:[function(a){var z,y,x,w
H.i(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aS(a)
if(this.x){y=this.ax(a)
x=this.b6(a)
if(this.d.cK(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ax(a)
w=this.aA(a)
if(this.c.cK(y,w))a.preventDefault()},"$1","gfJ",4,0,4],
jk:[function(a){var z,y,x
H.i(a,"$isaw")
this.aS(a)
z=this.ax(a)
if(this.x){y=this.b6(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfL",4,0,4],
jd:[function(a){var z,y,x
H.i(a,"$isaw")
if(!this.c5(a)){this.aS(a)
z=this.ax(a)
if(this.x){y=this.b6(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfC",4,0,4],
jj:[function(a){var z,y,x
H.i(a,"$isaw")
this.aS(a)
z=this.ax(a)
if(this.x){y=this.b6(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gfK",4,0,4],
jc:[function(a){var z,y,x
H.i(a,"$isaw")
if(!this.c5(a)){this.aS(a)
z=this.ax(a)
if(this.x){y=this.b6(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aA(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","gfB",4,0,4],
jl:[function(a){var z,y
H.i(a,"$isbV")
this.aS(a)
z=new V.Z((a&&C.u).ghQ(a),C.u.ghR(a)).B(0,180)
if(this.x){if(this.d.io(z))a.preventDefault()
return}if(this.r)return
y=this.aA(a)
if(this.c.ip(z,y))a.preventDefault()},"$1","gfM",4,0,27],
jm:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ax(this.y)
v=this.aA(this.y)
this.d.fI(w,v,x)}},"$1","gfN",4,0,5],
js:[function(a){var z
H.i(a,"$isbp")
this.a.focus()
this.f=!0
this.ce(a)
z=this.ca(a)
if(this.e.il(z))a.preventDefault()},"$1","gfT",4,0,11],
jq:[function(a){var z
H.i(a,"$isbp")
this.ce(a)
z=this.ca(a)
if(this.e.ij(z))a.preventDefault()},"$1","gfR",4,0,11],
jr:[function(a){var z
H.i(a,"$isbp")
this.ce(a)
z=this.ca(a)
if(this.e.ik(z))a.preventDefault()},"$1","gfS",4,0,11]}}],["","",,D,{"^":"",cq:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z},
aQ:[function(a){var z
H.i(a,"$isn")
z=this.d
if(!(z==null))z.C(a)},function(){return this.aQ(null)},"j7","$1","$0","gfu",0,2,1],
$isa1:1,
$isaO:1},a1:{"^":"b;",$isaO:1},hR:{"^":"an;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
aQ:function(a){var z=this.Q
if(!(z==null))z.C(a)},
fH:[function(a){var z
H.i(a,"$isn")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.fH(null)},"jh","$1","$0","gds",0,2,1],
jn:[function(a){var z,y,x
H.r(a,"$ish",[D.a1],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.f8(x))return!1}return!0},"$1","gfO",4,0,29],
j1:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.r(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gds(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.i(b[u],"$isa1")
if(t instanceof D.cq)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bh()
s.a=H.a([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.aQ(z)},"$2","gfn",8,0,17],
jp:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.r(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gds(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.i(b[u],"$isa1")
if(t instanceof D.cq)C.a.Z(this.e,t)
s=t.d
if(s==null){s=new D.bh()
s.a=H.a([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.Z(s.a,x)}z=new D.c9(a,b,this,[z])
z.b=!0
this.aQ(z)},"$2","gfQ",8,0,17],
f8:function(a){var z=C.a.aq(this.e,a)
return z},
$ash:function(){return[D.a1]},
$asan:function(){return[D.a1]}},iv:{"^":"b;",$isa1:1,$isaO:1},j6:{"^":"b;",$isa1:1,$isaO:1},jh:{"^":"b;",$isa1:1,$isaO:1},ji:{"^":"b;",$isa1:1,$isaO:1},jj:{"^":"b;",$isa1:1,$isaO:1}}],["","",,V,{"^":"",
m3:[function(a,b){if(typeof b!=="number")return b.w()
if(typeof a!=="number")return H.e(a)
return Math.abs(b-a)<=1e-9},"$2","ib",8,0,26],
cL:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.cT(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.i.aG("null",c)
return C.i.aG(C.h.em($.m.$2(a,0)?0:a,b),c+b+1)},
bw:function(a,b,c){var z,y,x,w,v,u
H.r(a,"$isc",[P.y],"$asc")
z=H.a([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.j(z,u)
C.a.m(z,u,C.i.aG(z[u],x))}return z},
dJ:function(a,b){return C.h.aH(Math.pow(b,C.A.b0(Math.log(H.lr(a))/Math.log(b))))},
a9:{"^":"b;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
aW:{"^":"b;a,b,c,d",
u:function(a,b){var z
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
b1:{"^":"b;a",
u:function(a,b){if(b==null)return!1
if(!(b instanceof V.b1))return!1
return this.a===b.a},
i:function(a){var z,y,x
$.$get$e9()
$.$get$d_()
z=H.a([],[P.o])
y=this.a
x=$.$get$bj().a
if((y&x)===x)C.a.h(z,"XPos")
x=$.$get$d0().a
if((y&x)===x)C.a.h(z,"XCenter")
x=$.$get$bi().a
if((y&x)===x)C.a.h(z,"XNeg")
x=$.$get$bG().a
if((y&x)===x)C.a.h(z,"YPos")
x=$.$get$d1().a
if((y&x)===x)C.a.h(z,"YCenter")
x=$.$get$bF().a
if((y&x)===x)C.a.h(z,"YNeg")
x=$.$get$c7().a
if((y&x)===x)C.a.h(z,"ZPos")
x=$.$get$eb().a
if((y&x)===x)C.a.h(z,"ZCenter")
x=$.$get$c6().a
if((y&x)===x)C.a.h(z,"ZNeg")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
q:{
ao:function(a){return new V.b1(a)}}},
cv:{"^":"b;a,b,c,d",
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.l(this.c)+" "+H.l(this.d)}},
aN:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.a([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.p(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
u:function(a,b){var z
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
er:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.aN(z,0,-y,0,1,0,y,0,z)}}},
aC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
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
if($.m.$2(a2,0))return V.bm()
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
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
O:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.p(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
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
i:function(a){return this.N()},
e6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
N:function(){return this.e6("",3,0)},
G:function(a){return this.e6(a,3,0)},
q:{
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bm:function(){return V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cc:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
da:function(a,b,c,d){return V.aD(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
et:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eu:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
es:function(a,b,c){var z,y,x,w,v
z=c.B(0,Math.sqrt(c.E(c)))
y=b.ba(z)
x=y.B(0,Math.sqrt(y.E(y)))
w=z.ba(x)
v=new V.E(a.a,a.b,a.c)
return V.aD(x.a,w.a,z.a,x.K(0).E(v),x.b,w.b,z.b,w.K(0).E(v),x.c,w.c,z.c,z.K(0).E(v),0,0,0,1)}}},
M:{"^":"b;a,b",
w:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.e(w)
return new V.M(z-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
p:{"^":"b;a,b,c",
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
return new V.p(z+y,x+w,v+u)},
w:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.w()
if(typeof u!=="number")return H.e(u)
return new V.p(z-y,x-w,v-u)},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
x=this.c
if(typeof x!=="number")return x.j()
return new V.p(z*b,y*b,x*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.p))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
cd:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cd))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
eC:{"^":"b;a,b,c,d,e,f",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eC))return!1
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"},
q:{
eD:function(a,b){return new V.eC(a.a,a.b,a.c,b.a,b.b,b.c)}}},
eF:{"^":"b;a,b,c,d",
gau:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
eb:function(a){var z,y,x,w,v,u,t
z=$.$get$ea()
y=a.a
x=this.a
if(typeof y!=="number")return y.U()
if(y<x){w=$.$get$bi()
z=new V.b1(z.a|w.a)}else if(y>=x+this.c){w=$.$get$bj()
z=new V.b1(z.a|w.a)}else{w=$.$get$d0()
z=new V.b1(z.a|w.a)}w=a.b
v=this.b
if(typeof w!=="number")return w.U()
if(w<v)z=new V.b1(z.a|$.$get$bF().a)
else{u=z.a
z=w>=v+this.d?new V.b1(u|$.$get$bG().a):new V.b1(u|$.$get$d1().a)}u=z.a
t=$.$get$bi().a
if(!((u&t)===t)){t=$.$get$bj().a
if((u&t)===t){y=x+this.c
x=y}else x=y}y=$.$get$bF().a
if(!((u&y)===y)){y=$.$get$bG().a
if((u&y)===y){y=v+this.d
v=y}else v=w}return new V.M(x,v)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"},
q:{
de:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)}}},
df:{"^":"b;a,b,c,d,e,f",
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
if(typeof t!=="number")return t.U()
if(t<z){s=z-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s>r)return
s/=r
q=$.$get$bi()
p=z
o=!1
n=-1}else if(t>y){s=y-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s<r)return
s/=r
q=$.$get$bj()
p=y
o=!1
n=1}else{o=!0
s=-1
n=null
p=null
q=null}r=a1.b
if(typeof r!=="number")return r.U()
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
if(typeof l!=="number")return l.U()
if(l<v){h=v-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h>g)return
h/=g
f=$.$get$c6()
e=v
o=!1
d=-1}else if(l>u){h=u-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h<g)return
h/=g
f=$.$get$c7()
e=u
o=!1
d=1}else{h=-1
d=null
e=null
f=null}if(o){z=new V.E(a1.d,a1.e,a1.f)
return new V.cv(new V.p(t,r,l),z.B(0,Math.sqrt(z.E(z))).K(0),0,$.$get$d_())}if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*s
if(b<x||b>w)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*s
if(a<v||a>u)return
return new V.cv(new V.p(p,b,a),new V.E(n,0,0),s,q)
case 1:x=a1.d
if(typeof x!=="number")return x.j()
a0=t+x*m
if(a0<z||a0>y)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*m
if(a<v||a>u)return
return new V.cv(new V.p(a0,j,a),new V.E(0,i,0),m,k)
default:v=a1.d
if(typeof v!=="number")return v.j()
a0=t+v*h
if(a0<z||a0>y)return
z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*h
if(b<x||b>w)return
return new V.cv(new V.p(a0,b,e),new V.E(0,0,d),h,f)}},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.df))return!1
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"},
q:{
eG:function(a,b,c,d,e,f){return new V.df(a,b,c,d,e,f)}}},
Z:{"^":"b;a,b",
i4:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,14],
E:function(a){var z,y,x,w
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
B:function(a,b){var z,y
if($.m.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.Z(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
i4:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,14],
E:function(a){var z,y,x,w,v,u
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
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
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
return new V.E(z+y,x+w,v+u)},
K:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
x=this.c
if(typeof x!=="number")return x.K()
return new V.E(-z,-y,-x)},
B:function(a,b){var z,y,x
if($.m.$2(b,0))return new V.E(0,0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
x=this.c
if(typeof x!=="number")return x.B()
return new V.E(z/b,y/b,x/b)},
e7:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hi:{"^":"cV;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bY:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cL(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gv:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.C(a)},
scO:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.H("warp",z,b,this,[P.a7])
z.b=!0
this.F(z)}},
scI:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bY(z)}z=new D.H("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.F(z)}},
scJ:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bY(z)}z=new D.H("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.F(z)}},
sT:function(a,b){var z,y
b=this.bY(b==null?0:b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.y])
z.b=!0
this.F(z)}},
sat:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.F(z)}},
sH:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.y])
z.b=!0
this.F(z)}},
saD:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.y])
z.b=!0
this.F(z)}},
a6:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sT(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sH(y)}},
q:{
c4:function(){var z=new U.hi()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dU:{"^":"a5;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
aj:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dU))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
q:{
aX:function(a){var z=new U.dU()
z.a=a
return z}}},e8:{"^":"an;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.C(a)},function(){return this.F(null)},"am","$1","$0","gal",0,2,1],
iS:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.r(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gal(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.F(z)},"$2","geP",8,0,13],
jo:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.r(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gal(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.f(x,w)
C.a.Z(t.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.F(z)},"$2","gfP",8,0,13],
aj:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.U()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.B(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.aj(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bm():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e8))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.Y(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a5]},
$asan:function(){return[U.a5]},
$isa5:1,
q:{
ct:function(a){var z=new U.e8()
z.bm(U.a5)
z.bl(z.geP(),z.gfP())
z.aB(0,a)
z.e=null
z.f=V.bm()
z.r=0
return z}}},ed:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.b
if(!(z==null))z.C(a)},function(){return this.F(null)},"am","$1","$0","gal",0,2,1],
aj:function(a,b,c){var z,y,x
z=this.d
y=b.e
if(z<y){this.d=y
z=this.b
if(!(z==null))++z.c
z=this.a
z=z==null?null:z.aj(0,b,c)
x=z==null?null:z.bb(0)
this.c=x==null?V.bm():x
z=this.b
if(!(z==null))z.av(0)}return this.c},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ed))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){return"Invert"},
$isa5:1},a5:{"^":"cV;"},eH:{"^":"a5;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gv:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.C(a)},
sen:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.y])
z.b=!0
this.F(z)}},
sef:function(a,b){var z,y
b=V.cL(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.y])
z.b=!0
this.F(z)}},
sej:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.y])
z.b=!0
this.F(z)}},
aj:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sen(this.a+this.d*b.y)
this.sef(0,this.b+this.e*b.y)
this.sej(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aD(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).j(0,V.eu(this.b)).j(0,V.et(this.a))
z=this.y
if(!(z==null))z.av(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eH))return!1
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
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}},jG:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.K()
this.fx=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.F(null)},"am","$1","$0","gal",0,2,1],
a5:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.n]}
x=H.f(this.gfk(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.K()
x.d=z}x=H.f(this.gfl(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.K()
x.c=z}x=H.f(this.gfm(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.K()
x.f=z}x=H.f(this.gfh(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.K()
x.d=z}x=H.f(this.gfi(),y)
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
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.Z(z,y)},
iZ:[function(a){a=H.k(H.i(a,"$isn"),"$isbN")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfk",4,0,0],
j_:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isbN")
if(!this.cx)return
if(this.ch){z=a.d.w(0,a.y)
z=new V.Z(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.w(0,a.y)
z=this.ao(new V.Z(y.a,y.b).j(0,2).B(0,z.gau()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sH(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sH(-z*10*y)}else{z=a.c
y=a.d
x=y.w(0,a.y)
w=this.ao(new V.Z(x.a,x.b).j(0,2).B(0,z.gau()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sT(0,-u*v+x)
this.b.sH(0)
this.c.sH(0)
y=y.w(0,a.z)
this.dx=this.ao(new V.Z(y.a,y.b).j(0,2).B(0,z.gau()))}this.am()},"$1","gfl",4,0,0],
j0:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sH(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sH(-y*10*z)
this.am()}},"$1","gfm",4,0,0],
iX:[function(a){if(H.k(H.i(a,"$isn"),"$isem").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfh",4,0,0],
iY:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isbN")
if(!J.Y(this.d,a.x.b))return
z=a.c
y=a.d
x=y.w(0,a.y)
w=this.ao(new V.Z(x.a,x.b).j(0,2).B(0,z.gau()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sT(0,-u*v+x)
this.b.sH(0)
this.c.sH(0)
y=y.w(0,a.z)
this.dx=this.ao(new V.Z(y.a,y.b).j(0,2).B(0,z.gau()))
this.am()},"$1","gfi",4,0,0],
jw:[function(a){H.i(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghc",4,0,0],
jv:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$iseV")
if(!this.cx)return
if(this.ch){z=a.d.w(0,a.y)
z=new V.Z(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.w(0,a.y)
z=this.ao(new V.Z(y.a,y.b).j(0,2).B(0,z.gau()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sH(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sH(-z*10*y)}else{z=a.c
y=a.d
x=y.w(0,a.y)
w=this.ao(new V.Z(x.a,x.b).j(0,2).B(0,z.gau()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sT(0,-u*v+x)
this.b.sH(0)
this.c.sH(0)
y=y.w(0,a.z)
this.dx=this.ao(new V.Z(y.a,y.b).j(0,2).B(0,z.gau()))}this.am()},"$1","ghb",4,0,0],
ju:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sH(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sH(-y*10*z)
this.am()}},"$1","gha",4,0,0],
aj:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.U()
if(z<y){this.dy=y
x=b.y
this.c.a6(0,x)
this.b.a6(0,x)
this.fr=V.et(this.b.d).j(0,V.eu(this.c.d))}return this.fr},
$isa5:1},jH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dx
if(z==null){z=D.K()
this.dx=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.dx
if(!(z==null))z.C(a)},function(){return this.F(null)},"am","$1","$0","gal",0,2,1],
sH:function(a){this.r.sH(a.a)
this.x.sH(a.b)
this.y.sH(a.c)},
gT:function(a){return new V.p(this.r.d,this.x.d,this.y.d)},
sT:function(a,b){H.i(b,"$isp")
this.r.sT(0,b.a)
this.x.sT(0,b.b)
this.y.sT(0,b.c)},
jg:[function(a){this.F(H.i(a,"$isn"))},"$1","gfF",4,0,0],
cf:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.n()
e+=d}else if(b.r){if(typeof e!=="number")return e.w()
e-=d}else{if(typeof e!=="number")return e.iO()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aj:function(a,b,c){var z,y,x,w,v,u,t
z=this.cy
y=b.e
if(typeof z!=="number")return z.U()
if(z<y){this.cy=y
x=this.gT(this)
w=b.y
if(w>0.1)w=0.1
z=this.ch
if(typeof z!=="number")return z.j()
v=z*w
z=this.cx
if(typeof z!=="number")return z.j()
u=z*w
t=new V.E(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)t=z.ai(t)
t=new V.E(this.cf(this.a,this.b,v,u,t.a),this.cf(this.c,this.d,v,u,t.b),this.cf(this.e,this.f,v,u,t.c))
z=this.z
this.sH(z!=null?z.ai(t):t)
this.r.a6(0,w)
this.x.a6(0,w)
this.y.a6(0,w)
if(this.dy!=null){z=this.gT(this)
this.sT(0,this.dy.$2(x,z))}this.db=V.cc(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa5:1}}],["","",,M,{"^":"",hw:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
b3:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.C(a)},function(){return this.b3(null)},"iT","$1","$0","gaJ",0,2,1],
j8:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ah
H.r(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.bh()
s.a=H.a([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.b3(z)},"$2","gfv",8,0,9],
j9:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ah
H.r(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.bh()
s.a=H.a([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.Z(s.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.b3(z)},"$2","gfw",8,0,9],
gv:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.j8(a,this)
z.b=!0
y=this.e
if(!(y==null))y.C(z)
a.ei(this.c)
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
t=C.h.ah(u.a*w)
if(typeof v!=="number")return H.e(v)
s=C.h.ah(u.b*v)
r=C.h.ah(u.c*w)
a.c=r
u=C.h.ah(u.d*v)
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
r.eh(V.aD(-m/(x/u),0,0,0,0,m,0,0,0,0,o/n,-o*p/n,0,0,1,0))
x=$.ey
if(x==null){x=V.es(new V.p(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.ey=x
l=x}else l=x
x=y.a
if(x!=null){k=x.aj(0,a,y)
if(k!=null)l=k.j(0,l)}a.db.eh(l)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.B(y,0)]);y.I();)y.d.a6(0,a)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.B(y,0)]);y.I();)y.d.b1(a)
this.a.toString
a.cy.cL()
a.db.cL()
this.b.toString
a.eg()},
$ismC:1}}],["","",,A,{"^":"",dM:{"^":"b;a,b,c"},h4:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},i4:{"^":"eI;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aX,0aE,0aY,0bB,0dN,0dO,0bC,0bD,0dP,0dQ,0bE,0bF,0dR,0dS,0bG,0dT,0dU,0bH,0dV,0dW,0bI,0bJ,0bK,0dX,0dY,0bL,0bM,0dZ,0e_,0bN,0e0,0cv,0e1,0cw,0e2,0cz,0e3,0cA,0e4,0cB,0e5,0cC,a,b,0c,0d,0e,0f,0r",
eB:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.ce("")
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
a2.hk(z)
a2.hr(z)
a2.hl(z)
a2.hz(z)
a2.hA(z)
a2.ht(z)
a2.hE(z)
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
z=new P.ce("")
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
v.ho(z)
v.hj(z)
v.hm(z)
v.hp(z)
v.hx(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hv(z)
v.hw(z)}v.hs(z)
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
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hn(z)
v.hu(z)
v.hy(z)
v.hB(z)
v.hC(z)
v.hD(z)
v.hq(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.D(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.dm(x.charCodeAt(0)==0?x:x,35633)
this.d=this.dm(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fI(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.u(P.t("Failed to link shader: "+H.l(m)))}this.h5()
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
if(a2.x2)this.go=H.k(this.r.p(0,"txt2DMat"),"$isds")
if(a2.y1)this.id=H.k(this.r.p(0,"txtCubeMat"),"$isaP")
if(a2.y2)this.k1=H.k(this.r.p(0,"colorMat"),"$isaP")
this.k3=H.a([],[A.aP])
y=a2.aX
if(y>0){this.k2=H.i(this.r.p(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.u(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaP"))}}y=a2.a
if(y!==C.b){this.k4=H.k(this.r.p(0,"emissionClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.k(this.r.p(0,"emissionTxt"),"$isaq")
this.rx=H.k(this.r.p(0,"nullEmissionTxt"),"$isO")
break
case C.d:this.r2=H.k(this.r.p(0,"emissionTxt"),"$isar")
this.rx=H.k(this.r.p(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.b){this.ry=H.k(this.r.p(0,"ambientClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.k(this.r.p(0,"ambientTxt"),"$isaq")
this.y1=H.k(this.r.p(0,"nullAmbientTxt"),"$isO")
break
case C.d:this.x2=H.k(this.r.p(0,"ambientTxt"),"$isar")
this.y1=H.k(this.r.p(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.b){this.y2=H.k(this.r.p(0,"diffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.aX=H.k(this.r.p(0,"diffuseTxt"),"$isaq")
this.aY=H.k(this.r.p(0,"nullDiffuseTxt"),"$isO")
break
case C.d:this.aE=H.k(this.r.p(0,"diffuseTxt"),"$isar")
this.aY=H.k(this.r.p(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.b){this.bB=H.k(this.r.p(0,"invDiffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dN=H.k(this.r.p(0,"invDiffuseTxt"),"$isaq")
this.bC=H.k(this.r.p(0,"nullInvDiffuseTxt"),"$isO")
break
case C.d:this.dO=H.k(this.r.p(0,"invDiffuseTxt"),"$isar")
this.bC=H.k(this.r.p(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.b){this.bF=H.k(this.r.p(0,"shininess"),"$isW")
this.bD=H.k(this.r.p(0,"specularClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dP=H.k(this.r.p(0,"specularTxt"),"$isaq")
this.bE=H.k(this.r.p(0,"nullSpecularTxt"),"$isO")
break
case C.d:this.dQ=H.k(this.r.p(0,"specularTxt"),"$isar")
this.bE=H.k(this.r.p(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.c:this.dR=H.k(this.r.p(0,"bumpTxt"),"$isaq")
this.bG=H.k(this.r.p(0,"nullBumpTxt"),"$isO")
break
case C.d:this.dS=H.k(this.r.p(0,"bumpTxt"),"$isar")
this.bG=H.k(this.r.p(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dT=H.k(this.r.p(0,"envSampler"),"$isar")
this.dU=H.k(this.r.p(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.b){this.bH=H.k(this.r.p(0,"reflectClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dV=H.k(this.r.p(0,"reflectTxt"),"$isaq")
this.bI=H.k(this.r.p(0,"nullReflectTxt"),"$isO")
break
case C.d:this.dW=H.k(this.r.p(0,"reflectTxt"),"$isar")
this.bI=H.k(this.r.p(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.b){this.bJ=H.k(this.r.p(0,"refraction"),"$isW")
this.bK=H.k(this.r.p(0,"refractClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dX=H.k(this.r.p(0,"refractTxt"),"$isaq")
this.bL=H.k(this.r.p(0,"nullRefractTxt"),"$isO")
break
case C.d:this.dY=H.k(this.r.p(0,"refractTxt"),"$isar")
this.bL=H.k(this.r.p(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.b){this.bM=H.k(this.r.p(0,"alpha"),"$isW")
switch(y){case C.b:break
case C.f:break
case C.c:this.dZ=H.k(this.r.p(0,"alphaTxt"),"$isaq")
this.bN=H.k(this.r.p(0,"nullAlphaTxt"),"$isO")
break
case C.d:this.e_=H.k(this.r.p(0,"alphaTxt"),"$isar")
this.bN=H.k(this.r.p(0,"nullAlphaTxt"),"$isO")
break}}this.cv=H.a([],[A.f7])
this.cw=H.a([],[A.f8])
this.cz=H.a([],[A.f9])
this.cA=H.a([],[A.fa])
this.cB=H.a([],[A.fb])
this.cC=H.a([],[A.fc])
if(a2.k2){y=a2.z
if(y>0){this.e0=H.i(this.r.p(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.cv;(x&&C.a).h(x,new A.f7(l,k,j))}}y=a2.Q
if(y>0){this.e1=H.i(this.r.p(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isW")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.cw;(x&&C.a).h(x,new A.f8(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e2=H.i(this.r.p(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isW")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.cz;(x&&C.a).h(x,new A.f9(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e3=H.i(this.r.p(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isaq")
x=this.cA;(x&&C.a).h(x,new A.fa(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e4=H.i(this.r.p(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isds")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isW")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isW")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isar")
x=this.cB;(x&&C.a).h(x,new A.fb(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e5=H.i(this.r.p(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isN")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isW")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isW")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isW")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isW")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isW")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isaq")
x=this.cC;(x&&C.a).h(x,new A.fc(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ae:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.es(c)
b.a.uniform1i(b.d,0)}},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
i3:function(a,b){var z,y
z=a.aE
y=new A.i4(b,z)
y.eF(b,z)
y.eB(a,b)
return y}}},i7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aX,aE,aY",
hk:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aX+"];\n"
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
hr:function(a){var z
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
hl:function(a){var z
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
hz:function(a){var z,y
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
hA:function(a){var z,y
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
ht:function(a){var z
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
hE:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.i.cV(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ho:function(a){var z,y
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
hj:function(a){var z,y
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
hm:function(a){var z,y
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
hp:function(a){var z,y
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
hx:function(a){var z,y
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
hs:function(a){var z,y
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
hv:function(a){var z,y
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
hw:function(a){var z,y
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
hn:function(a){var z,y
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
hu:function(a){var z,y
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
hy:function(a){var z,y
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
hB:function(a){var z,y,x
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
hC:function(a){var z,y,x
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
hD:function(a){var z,y,x
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
hq:function(a){var z
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
i:function(a){return this.aE}},f7:{"^":"b;a,b,c"},fa:{"^":"b;a,b,c,d,e,f,r,x"},f8:{"^":"b;a,b,c,d,e,f,r"},fb:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fc:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eI:{"^":"cP;",
eF:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dm:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fI(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.t("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
h5:function(){var z,y,x,w,v,u
z=H.a([],[A.dM])
y=this.a
x=H.z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dM(y,v.name,u))}this.f=new A.h4(z)},
h7:function(){var z,y,x,w,v,u
z=H.a([],[A.ag])
y=this.a
x=H.z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hP(v.type,v.size,v.name,u))}this.r=new A.jy(z)},
aO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.dr(z,y,b,a,c)},
f9:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dr(z,y,b,a,c)},
fa:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.dr(z,y,b,a,c)},
bv:function(a,b){return new P.fj(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hP:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.W(this.a,this.e,c,d)
case 35664:return new A.jt(this.a,this.e,c,d)
case 35665:return new A.N(this.a,this.e,c,d)
case 35666:return new A.jw(this.a,this.e,c,d)
case 35667:return new A.ju(this.a,this.e,c,d)
case 35668:return new A.jv(this.a,this.e,c,d)
case 35669:return new A.jx(this.a,this.e,c,d)
case 35674:return new A.jA(this.a,this.e,c,d)
case 35675:return new A.ds(this.a,this.e,c,d)
case 35676:return new A.aP(this.a,this.e,c,d)
case 35678:return this.f9(b,c,d)
case 35680:return this.fa(b,c,d)
case 35670:throw H.d(this.bv("BOOL",c))
case 35671:throw H.d(this.bv("BOOL_VEC2",c))
case 35672:throw H.d(this.bv("BOOL_VEC3",c))
case 35673:throw H.d(this.bv("BOOL_VEC4",c))
default:throw H.d(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cp:{"^":"b;a,b",
i:function(a){return this.b}},ag:{"^":"b;"},jy:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
hZ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.hZ("\n")}},O:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},ju:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jv:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jx:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},js:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dr:function(a,b,c,d,e){var z=new A.js(a,b,c,e)
z.f=d
z.e=P.hX(d,0,!1,P.x)
return z}}},W:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jt:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},N:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jw:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jA:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},ds:{"^":"ag;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bX(H.r(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aP:{"^":"ag;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bX(H.r(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"ag;a,b,c,d",
es:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ar:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",av:{"^":"b;0a,0b,0c,0d,0e",
ghT:function(){return this.a==null||this.b==null||this.c==null},
f3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.e7())return
return v.B(0,Math.sqrt(v.E(v)))},
f6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.w(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.E(z)))
z=w.w(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.ba(z.B(0,Math.sqrt(z.E(z))))
return z.B(0,Math.sqrt(z.E(z)))},
cr:function(){if(this.d!=null)return!0
var z=this.f3()
if(z==null){z=this.f6()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
f2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.e7())return
return v.B(0,Math.sqrt(v.E(v)))},
f5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return H.e(y)
n=z-y
if($.m.$2(n,0)){z=r.w(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.E(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.w()
if(typeof p!=="number")return H.e(p)
if(z-p<0)m=m.K(0)}else{y=q.b
if(typeof y!=="number")return H.e(y)
l=(z-y)/n
y=r.w(0,u).j(0,l).n(0,u).w(0,x)
y=new V.E(y.a,y.b,y.c)
m=y.B(0,Math.sqrt(y.E(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.w()
if(typeof p!=="number")return H.e(p)
q=q.a
if(typeof q!=="number")return H.e(q)
if((o-p)*l+p-q<0)m=m.K(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.E(z)))
z=k.ba(m)
z=z.B(0,Math.sqrt(z.E(z))).ba(k)
m=z.B(0,Math.sqrt(z.E(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.f2()
if(z==null){z=this.f5()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var z,y
if(this.ghT())return a+"disposed"
z=a+C.i.aG(J.at(this.a.e),0)+", "+C.i.aG(J.at(this.b.e),0)+", "+C.i.aG(J.at(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.G("")}},ei:{"^":"b;"},ez:{"^":"b;"},eE:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
gv:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.r(a,"$isc",[F.bS],"$asc")
z=a.length
y=new Array(z*this.c)
y.fixed$length=Array
x=H.a(y,[P.y])
for(y=this.a,w=0,v=0;v<this.b;++v){u=y.ci(v)
for(t=0;t<z;++t){if(t>=a.length)return H.j(a,t)
s=a[t].e8(u)
r=w+t*this.c
for(q=0;q<s.length;++q){C.a.m(x,r,s[q]);++r}}w+=u.gb2(u)}p=$.$get$a_()
if((y.a&p.a)!==0){y=this.z
if(y==null){if(0>=a.length)return H.j(a,0)
y=a[0].f
y=V.eG(y.a,y.b,y.c,0,0,0)
this.z=y}for(v=z-1;v>=0;--v){if(v>=a.length)return H.j(a,v)
p=a[v].f
o=p.a
n=p.b
p=p.c
m=y.d
l=y.a
if(typeof o!=="number")return o.U()
if(typeof l!=="number")return H.e(l)
if(o<l){m+=l-o
k=o}else{if(o>l+m)m=o-l
k=l}j=y.e
o=y.b
if(typeof n!=="number")return n.U()
if(typeof o!=="number")return H.e(o)
if(n<o){j+=o-n
i=n}else{if(n>o+j)j=n-o
i=o}h=y.f
y=y.c
if(typeof p!=="number")return p.U()
if(typeof y!=="number")return H.e(y)
if(p<y){h+=y-p
g=p}else{if(p>y+h)h=p-y
g=y}y=new V.df(k,i,g,m,j,h)
this.z=y}}r=this.d
this.d=r+z
C.a.aB(this.f,x)
this.a4()
return r},
b8:function(a){var z,y,x,w,v,u,t
z=P.x
H.r(a,"$isc",[z],"$asc")
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
this.a4()}},
hI:function(a){var z,y,x,w,v,u,t,s,r,q
z=P.x
H.r(a,"$isc",[z],"$asc")
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
this.a4()}},
a2:function(a){var z=this.Q
if(!(z==null))z.C(a)},
a4:function(){return this.a2(null)},
aC:function(){return!1},
aT:function(){return!1},
bz:function(){return!1},
dH:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=this.a
if(!J.Y(b,z))throw H.d(P.t("Shape was reduced to "+H.l(z)+" so can not build for "+H.l(b)+"."))
if(this.e==null){y=this.c*4
x=new Array(this.b)
x.fixed$length=Array
this.e=H.a(x,[Z.co])
for(w=0,v=0;v<this.b;++v){u=z.ci(v)
t=u.gb2(u)
x=this.e;(x&&C.a).m(x,v,new Z.co(u,t,w*4,y,0))
w+=t}}x=a.a
s=new Z.cS(Z.fh(x,34962,H.r(this.f,"$isc",[P.y],"$asc")),this.e,z)
z=H.a([],[Z.bI])
s.b=z
r=this.r
if(r.length!==0){q=Z.cC(x,34963,H.r(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bI(0,this.r.length,q))}r=this.x
if(r.length!==0){q=Z.cC(x,34963,H.r(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bI(1,this.x.length,q))}r=this.y
if(r.length!==0){q=Z.cC(x,34963,H.r(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bI(4,this.y.length,q))}return s},
$isdh:1},eJ:{"^":"b;0a,0b,0c,0d,0e",
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
aT:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aT()||!1
if(!this.a.aT())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
bz:function(){var z=this.e
if(!(z==null))++z.c
this.a.bz()
z=this.e
if(!(z==null))z.av(0)
return!0},
dH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a.c.length
y=b.gdL(b)
x=b.gb2(b)
w=x*4
v=new Array(z*x)
v.fixed$length=Array
u=P.y
t=H.a(v,[u])
v=new Array(y)
v.fixed$length=Array
s=H.a(v,[Z.co])
for(r=0,q=0;q<y;++q){p=b.ci(q)
o=p.gb2(p)
C.a.m(s,q,new Z.co(p,o,r*4,w,0))
for(n=0;n<z;++n){v=this.a.c
if(n>=v.length)return H.j(v,n)
m=v[n].e8(p)
l=r+n*x
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}v=a.a
j=new Z.cS(Z.fh(v,34962,H.r(t,"$isc",[u],"$asc")),s,b)
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
C.a.h(i,h.e)}g=Z.cC(v,34963,H.r(i,"$isc",[u],"$asc"))
C.a.h(j.b,new Z.bI(4,i.length,g))}return j},
i:function(a){var z=H.a([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.D(z,"\n")},
a2:function(a){var z=this.e
if(!(z==null))z.C(a)},
a4:function(){return this.a2(null)},
$isdh:1},dh:{"^":"cV;"},iV:{"^":"b;a,0b",
hF:function(a){var z,y,x,w,v,u,t,s
H.r(a,"$isc",[F.bS],"$asc")
z=H.a([],[F.av])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
u=new F.av()
t=y.a
if(t==null)H.u(P.t("May not create a face with a first vertex which is not attached to a shape."))
s=w.a
if(t==null?s==null:t===s){s=v.a
s=t==null?s!=null:t!==s
t=s}else t=!0
if(t)H.u(P.t("May not create a face with vertices attached to different shapes."))
u.a=y
C.a.h(y.d.b,u)
u.b=w
C.a.h(w.d.c,u)
u.c=v
C.a.h(v.d.d,u)
C.a.h(u.a.a.d.b,u)
w=u.a.a.e
if(!(w==null))w.C(null)
C.a.h(z,u)}return z},
gl:function(a){return this.b.length},
aC:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cr())x=!1
return x},
aT:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cq())x=!1
return x},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].G(a))
return C.a.D(z,"\n")},
N:function(){return this.G("")}},iW:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.N()},
G:function(a){var z,y,x
z=H.a([],[P.o])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.j(x,y)
C.a.h(z,x[y].G(a+(""+y+". ")))}return C.a.D(z,"\n")},
N:function(){return this.G("")}},iX:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.N()},
G:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].G(a))}return C.a.D(z,"\n")},
N:function(){return this.G("")}},bS:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
e8:function(a){var z,y
z=J.P(a)
if(z.u(a,$.$get$a_())){z=this.f
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ae())){z=this.r
y=[P.y]
if(z==null)return H.a([0,1,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.x
y=[P.y]
if(z==null)return H.a([0,0,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$a2())){z=this.y
y=[P.y]
if(z==null)return H.a([0,0],y)
else return H.a([z.a,z.b],y)}else if(z.u(a,$.$get$aS())){z=this.z
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bT())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bU())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1,1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$br()))return H.a([this.ch],[P.y])
else if(z.u(a,$.$get$aQ())){z=this.cx
y=[P.y]
if(z==null)return H.a([-1,-1,-1,-1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else return H.a([],[P.y])},
cr:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.M(0,new F.jR(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.M(0,new F.jQ(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var z,y,x
z=H.a([],[P.o])
C.a.h(z,C.i.aG(J.at(this.e),0))
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
C.a.h(z,V.D(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
N:function(){return this.G("")},
q:{
bq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bS()
y=new F.jP(z)
y.b=H.a([],[F.ez])
z.b=y
y=new F.jO(z)
x=[F.ei]
y.b=H.a([],x)
y.c=H.a([],x)
z.c=y
y=new F.jL(z)
x=[F.av]
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
z.Q=(y&$.$get$fe().a)!==0?c:null
z.ch=(y&$.$get$br().a)!==0?i:0
z.cx=(y&$.$get$aQ().a)!==0?a:null
return z}}},jR:{"^":"v:7;a",
$1:function(a){var z,y
H.i(a,"$isav")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},jQ:{"^":"v:7;a",
$1:function(a){var z,y
H.i(a,"$isav")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},jK:{"^":"b;a,0b,0c",
bw:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a4()
return!0},
hH:function(a,b,c,d,e,f,g,h,i){var z=F.bq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bx:function(a,b,c,d,e,f){return this.hH(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aC:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cr()
return!0},
aT:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cq()
return!0},
bz:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.j()
t=v.b
if(typeof t!=="number")return t.j()
s=v.c
if(typeof s!=="number")return s.j()
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Y(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
this.bw()
z=H.a([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].G(a))
return C.a.D(z,"\n")},
N:function(){return this.G("")}},jL:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){H.f(b,{func:1,ret:-1,args:[F.av]})
C.a.M(this.b,b)
C.a.M(this.c,new F.jM(this,b))
C.a.M(this.d,new F.jN(this,b))},
i:function(a){return this.N()},
G:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].G(a))
return C.a.D(z,"\n")},
N:function(){return this.G("")}},jM:{"^":"v:7;a,b",
$1:function(a){H.i(a,"$isav")
if(!J.Y(a.a,this.a))this.b.$1(a)}},jN:{"^":"v:7;a,b",
$1:function(a){var z
H.i(a,"$isav")
z=this.a
if(!J.Y(a.a,z)&&!J.Y(a.b,z))this.b.$1(a)}},jO:{"^":"b;a,0b,0c",
gl:function(a){return 0},
i:function(a){return this.N()},
G:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].G(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].G(a))}return C.a.D(z,"\n")},
N:function(){return this.G("")}},jP:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.N()},
G:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].G(a))}return C.a.D(z,"\n")},
N:function(){return this.G("")}}}],["","",,O,{"^":"",ep:{"^":"dl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.K()
this.dy=z}return z},
a_:[function(a){var z
H.i(a,"$isn")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.a_(null)},"eQ","$1","$0","gbn",0,2,1],
fZ:[function(a){H.i(a,"$isn")
this.a=null
this.a_(a)},function(){return this.fZ(null)},"jt","$1","$0","gfY",0,2,1],
j2:[function(a,b){var z=V.aC
z=new D.c8(a,H.r(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.a_(z)},"$2","gfo",8,0,23],
j3:[function(a,b){var z=V.aC
z=new D.c9(a,H.r(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.a_(z)},"$2","gfp",8,0,23],
dj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a0(z.e.length+3,4)*4
x=C.e.a0(z.f.length+3,4)*4
w=C.e.a0(z.r.length+3,4)*4
v=C.e.a0(z.x.length+3,4)*4
u=C.e.a0(z.y.length+3,4)*4
t=C.e.a0(z.z.length+3,4)*4
s=C.e.a0(this.e.a.length+3,4)*4
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
a6=new Z.ad(a6.a|z.a)}return new A.i7(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.r(a,"$isc",[T.dm],"$asc")
if(b!=null)if(!C.a.aq(a,b)){b.a=a.length
C.a.h(a,b)}},
a6:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.B(z,0)]);z.I();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ai(x)}}},
iu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dj()
y=a.fr.k(0,z.aE)
if(y==null){y=A.i3(z,a.a)
x=y.b
if(x.length===0)H.u(P.t("May not cache a shader with no name."))
if(a.fr.dK(0,x))H.u(P.t('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aY
z=b.e
if(!(z instanceof Z.cS)){b.e=null
z=null}if(z==null||!J.Y(z.d,v)){z=w.r1
if(z)b.d.aC()
u=w.r2
if(u)b.d.aT()
t=w.ry
if(t)b.d.bz()
s=b.d.dH(new Z.jS(a.a),v)
s.aZ($.$get$a_()).e=this.a.y.c
if(z)s.aZ($.$get$ae()).e=this.a.Q.c
if(u)s.aZ($.$get$aR()).e=this.a.z.c
if(w.rx)s.aZ($.$get$a2()).e=this.a.ch.c
if(t)s.aZ($.$get$aS()).e=this.a.cx.c
if(w.x1)s.aZ($.$get$aQ()).e=this.a.cy.c
b.e=s}z=T.dm
r=H.a([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hV()
if(w.fx){u=this.a
t=a.dx
t=t.gV(t)
u=u.db
u.toString
u.ak(t.ac(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gV(t)
q=a.dx
q=t.j(0,q.gV(q))
a.cx=q
t=q}u=u.dx
u.toString
u.ak(t.ac(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giq()
q=a.dx
q=t.j(0,q.gV(q))
a.ch=q
t=q}u=u.fr
u.toString
u.ak(t.ac(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ak(t.ac(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ak(t.ac(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ak(C.B.ac(t,!0))}if(w.aX>0){p=this.e.a.length
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
n=new Float32Array(H.bX(H.r(q.ac(0,!0),"$isc",u,"$asc")))
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
case C.c:this.S(r,this.f.d)
u=this.a
t=this.f.d
u.ae(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.S(r,this.f.e)
u=this.a
t=this.f.e
u.a9(u.r2,u.rx,t)
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
case C.c:this.S(r,this.r.d)
u=this.a
t=this.r.d
u.ae(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.S(r,this.r.e)
u=this.a
t=this.r.e
u.a9(u.x2,u.y1,t)
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
case C.c:this.S(r,this.x.d)
u=this.a
t=this.x.d
u.ae(u.aX,u.aY,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.S(r,this.x.e)
u=this.a
t=this.x.e
u.a9(u.aE,u.aY,t)
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
case C.c:this.S(r,this.y.d)
u=this.a
t=this.y.d
u.ae(u.dN,u.bC,t)
t=this.a
u=this.y.f
t=t.bB
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.S(r,this.y.e)
u=this.a
t=this.y.e
u.a9(u.dO,u.bC,t)
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
case C.c:this.S(r,this.z.d)
u=this.a
t=this.z.d
u.ae(u.dP,u.bE,t)
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
case C.d:this.S(r,this.z.e)
u=this.a
t=this.z.e
u.a9(u.dQ,u.bE,t)
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
u=this.a.e0
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
q=this.a.cv
if(k>=q.length)return H.j(q,k)
h=q[k]
q=l.ai(i.a)
m=q.a
if(typeof m!=="number")return m.j()
g=q.b
if(typeof g!=="number")return g.j()
f=q.c
if(typeof f!=="number")return f.j()
f=q.B(0,Math.sqrt(m*m+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){p=this.dx.f.length
u=this.a.e1
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
q=this.a.cw
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbf(i)
m=h.b
g=q.gcP(q)
f=q.gcQ(q)
q=q.gcR(q)
m.a.uniform3f(m.d,g,f,q)
q=l.O(i.gbf(i))
f=h.c
f.a.uniform3f(f.d,q.a,q.b,q.c)
q=i.gap(i)
f=h.d
g=q.gbQ()
m=q.gbk()
q=q.gby()
f.a.uniform3f(f.d,g,m,q)
q=i.gcj()
m=h.e
m.a.uniform1f(m.d,q)
q=i.gck()
m=h.f
m.a.uniform1f(m.d,q)
q=i.gcl()
m=h.r
m.a.uniform1f(m.d,q);++k}}if(w.ch>0){p=this.dx.r.length
u=this.a.e2
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
q=this.a.cz
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbf(i)
m=h.b
g=q.gcP(q)
f=q.gcQ(q)
q=q.gcR(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcu(i).jB()
f=h.c
g=q.gaU(q)
m=q.gaV(q)
q=q.gaW()
f.a.uniform3f(f.d,g,m,q)
q=l.O(i.gbf(i))
m=h.d
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gap(i)
m=h.e
g=q.gbQ()
f=q.gbk()
q=q.gby()
m.a.uniform3f(m.d,g,f,q)
q=i.gjz()
f=h.f
f.a.uniform1f(f.d,q)
q=i.gjy()
f=h.r
f.a.uniform1f(f.d,q)
q=i.gcj()
f=h.x
f.a.uniform1f(f.d,q)
q=i.gck()
f=h.y
f.a.uniform1f(f.d,q)
q=i.gcl()
f=h.z
f.a.uniform1f(f.d,q);++k}}if(w.cx>0){p=this.dx.x.length
u=this.a.e3
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.x,t=u.length,q=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
m=this.a.cA
if(k>=m.length)return H.j(m,k)
h=m[k]
m=i.gbg()
H.r(r,"$isc",q,"$asc")
if(!C.a.aq(r,m)){m.sbr(r.length)
C.a.h(r,m)}m=i.gcu(i)
g=h.d
f=m.gaU(m)
e=m.gaV(m)
m=m.gaW()
g.a.uniform3f(g.d,f,e,m)
m=i.giK()
e=h.b
f=m.gaU(m)
g=m.gaV(m)
m=m.gaW()
e.a.uniform3f(e.d,f,g,m)
m=i.gag(i)
g=h.c
f=m.gaU(m)
e=m.gaV(m)
m=m.gaW()
g.a.uniform3f(g.d,f,e,m)
m=l.ai(i.gcu(i))
e=m.a
if(typeof e!=="number")return e.j()
f=m.b
if(typeof f!=="number")return f.j()
g=m.c
if(typeof g!=="number")return g.j()
g=m.B(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gap(i)
f=h.f
e=g.gbQ()
m=g.gbk()
g=g.gby()
f.a.uniform3f(f.d,e,m,g)
g=i.gbg()
m=g.gcH(g)
if(!m){m=h.x
m.a.uniform1i(m.d,1)}else{m=h.r
f=g.gfg()
e=m.a
m=m.d
if(!f)e.uniform1i(m,0)
else e.uniform1i(m,g.gbr())
m=h.x
m.a.uniform1i(m.d,0)}++k}}if(w.cy>0){p=this.dx.y.length
u=this.a.e4
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.y,t=u.length,q=[P.y],m=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
g=this.a.cB
if(k>=g.length)return H.j(g,k)
h=g[k]
g=i.gbg()
H.r(r,"$isc",m,"$asc")
if(!C.a.aq(r,g)){g.sbr(r.length)
C.a.h(r,g)}d=l.j(0,i.gV(i))
g=i.gV(i).O(new V.p(0,0,0))
f=h.b
e=g.gcP(g)
c=g.gcQ(g)
g=g.gcR(g)
f.a.uniform3f(f.d,e,c,g)
g=d.O(new V.p(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.bb(0)
c=h.d
n=new Float32Array(H.bX(H.r(new V.aN(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ac(0,!0),"$isc",q,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,n)
c=i.gap(i)
g=h.e
e=c.gbQ()
f=c.gbk()
c=c.gby()
g.a.uniform3f(g.d,e,f,c)
c=i.gbg()
g=c.gcH(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcH(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjA(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcj()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gck()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcl()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){p=this.dx.z.length
u=this.a.e5
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
q=this.a.cC
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbg()
H.r(r,"$isc",z,"$asc")
if(!C.a.aq(r,q)){q.sbr(r.length)
C.a.h(r,q)}q=i.gbf(i)
m=h.b
g=q.gcP(q)
f=q.gcQ(q)
q=q.gcR(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcu(i)
f=h.c
g=q.gaU(q)
m=q.gaV(q)
q=q.gaW()
f.a.uniform3f(f.d,g,m,q)
q=i.giK()
m=h.d
g=q.gaU(q)
f=q.gaV(q)
q=q.gaW()
m.a.uniform3f(m.d,g,f,q)
q=i.gag(i)
f=h.e
g=q.gaU(q)
m=q.gaV(q)
q=q.gaW()
f.a.uniform3f(f.d,g,m,q)
q=l.O(i.gbf(i))
m=h.f
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gbg()
m=q.gcH(q)
if(!m){q=h.x
q.a.uniform1i(q.d,1)}else{m=h.r
g=q.gfg()
f=m.a
m=m.d
if(!g)f.uniform1i(m,0)
else f.uniform1i(m,q.gbr())
q=h.x
q.a.uniform1i(q.d,0)}q=i.gap(i)
m=h.y
g=q.gbQ()
f=q.gbk()
q=q.gby()
m.a.uniform3f(m.d,g,f,q)
q=i.gjI()
f=h.z
f.a.uniform1f(f.d,q)
q=i.gjJ()
f=h.Q
f.a.uniform1f(f.d,q)
q=i.gcj()
f=h.ch
f.a.uniform1f(f.d,q)
q=i.gck()
f=h.cx
f.a.uniform1f(f.d,q)
q=i.gcl()
f=h.cy
f.a.uniform1f(f.d,q);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.c:this.S(r,this.Q.d)
z=this.a
u=this.Q.d
z.ae(z.dR,z.bG,u)
break
case C.d:this.S(r,this.Q.e)
z=this.a
u=this.Q.e
z.a9(z.dS,z.bG,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gV(u).bb(0)
a.Q=u}z=z.fy
z.toString
z.ak(u.ac(0,!0))}if(w.dy){this.S(r,this.ch)
z=this.a
u=this.ch
z.a9(z.dT,z.dU,u)
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
case C.c:this.S(r,this.cx.d)
z=this.a
u=this.cx.d
z.ae(z.dV,z.bI,u)
u=this.a
z=this.cx.f
u=u.bH
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break
case C.d:this.S(r,this.cx.e)
z=this.a
u=this.cx.e
z.a9(z.dW,z.bI,u)
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
case C.c:this.S(r,this.cy.d)
z=this.a
u=this.cy.d
z.ae(z.dX,z.bL,u)
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
case C.d:this.S(r,this.cy.e)
z=this.a
u=this.cy.e
z.a9(z.dY,z.bL,u)
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
case C.c:this.S(r,this.db.d)
z=this.a
t=this.db.d
z.ae(z.dZ,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break
case C.d:this.S(r,this.db.e)
z=this.a
t=this.db.e
z.a9(z.e_,z.bN,t)
t=this.a
z=this.db.f
t=t.bM
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<r.length;++o){z=r[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.cn(a)
z.b1(a)
z.iJ(a)
if(u)a.a.disable(3042)
for(o=0;o<r.length;++o){z=r[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hS()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dj().aE},
q:{
eq:function(){var z,y,x,w
z=new O.ep()
y=O.cX(V.aC)
z.e=y
y.bl(z.gfo(),z.gfp())
y=new O.bl(z,"emission")
y.c=C.b
y.f=new V.a9(0,0,0)
z.f=y
y=new O.bl(z,"ambient")
y.c=C.b
y.f=new V.a9(0,0,0)
z.r=y
y=new O.bl(z,"diffuse")
y.c=C.b
y.f=new V.a9(0,0,0)
z.x=y
y=new O.bl(z,"invDiffuse")
y.c=C.b
y.f=new V.a9(0,0,0)
z.y=y
y=new O.i9(z,"specular")
y.c=C.b
y.f=new V.a9(0,0,0)
y.ch=100
z.z=y
y=new O.i6(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.bl(z,"reflect")
y.c=C.b
y.f=new V.a9(0,0,0)
z.cx=y
y=new O.i8(z,"refract")
y.c=C.b
y.f=new V.a9(0,0,0)
y.ch=1
z.cy=y
y=new O.i5(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.hR()
y.bm(D.a1)
y.e=H.a([],[D.cq])
y.f=H.a([],[D.iv])
y.r=H.a([],[D.j6])
y.x=H.a([],[D.jh])
y.y=H.a([],[D.ji])
y.z=H.a([],[D.jj])
y.Q=null
y.ch=null
y.bT(y.gfn(),y.gfO(),y.gfQ())
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
return z}}},i5:{"^":"d8;0f,a,b,0c,0d,0e",
h1:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.y])
z.b=!0
this.a.a_(z)}},
aR:function(){this.cX()
this.h1(1)}},d8:{"^":"b;",
a_:[function(a){this.a.a_(H.i(a,"$isn"))},function(){return this.a_(null)},"eQ","$1","$0","gbn",0,2,1],
aR:["cX",function(){}],
h3:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gbn(),{func:1,ret:-1,args:[D.n]})
C.a.Z(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gbn(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.H(this.b+".texture2D",x,this.d,this,[T.eQ])
z.b=!0
this.a.a_(z)}},
h4:function(a){},
sbh:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aR()
this.c=C.c
this.h4(null)
z=this.a
z.a=null
z.a_(null)}this.h3(a)}},i6:{"^":"d8;a,b,0c,0d,0e"},bl:{"^":"d8;0f,a,b,0c,0d,0e",
dz:function(a){var z,y
if(!J.Y(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a9])
y.b=!0
this.a.a_(y)}},
aR:["bW",function(){this.cX()
this.dz(new V.a9(1,1,1))}],
sap:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aR()
z=this.a
z.a=null
z.a_(null)}this.dz(b)}},i8:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
h2:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.a_(z)}},
aR:function(){this.bW()
this.h2(1)}},i9:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
cc:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.a_(z)}},
aR:function(){this.bW()
this.cc(100)}},dl:{"^":"b;"}}],["","",,T,{"^":"",dm:{"^":"cP;"},eQ:{"^":"dm;0b,0c,0d,0e,0f,0r,0x,0y,a"},jf:{"^":"b;a,0b,0c,0d,0e",
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
w=new T.eQ(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.K()
z=W.ai
W.a3(x,"load",H.f(new T.jg(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
e9:function(a,b,c,d){return this.i6(a,!1,b,c,d)},
h_:function(a,b,c){var z,y,x,w
b=V.dJ(b,2)
z=V.dJ(a.width,2)
y=V.dJ(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cU(null,null)
x.width=z
x.height=y
w=H.i(C.k.ep(x,"2d"),"$isdR")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lv(w.getImageData(0,0,x.width,x.height))}}},jg:{"^":"v:20;a,b,c,d,e,f,r",
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
C.K.iC(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hU()}++x.e}}}],["","",,V,{"^":"",h1:{"^":"b;",
bc:function(a,b){return!0},
i:function(a){return"all"},
$iscb:1},cb:{"^":"b;"},eo:{"^":"b;",
bc:["ey",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].bc(0,b))return!0
return!1}],
i:["cW",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$iscb:1},bO:{"^":"eo;0a",
bc:function(a,b){return!this.ey(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}},iT:{"^":"b;0a",
eE:function(a){var z,y
if(a.a.length<=0)throw H.d(P.t("May not create a SetMatcher with zero characters."))
z=new H.aL(0,0,[P.x,P.a7])
for(y=new H.el(a,a.gl(a),0,[H.aA(a,"w",0)]);y.I();)z.m(0,y.d,!0)
this.a=z},
bc:function(a,b){return this.a.dK(0,b)},
i:function(a){var z=this.a
return P.dk(new H.ek(z,[H.B(z,0)]),0,null)},
$iscb:1,
q:{
ac:function(a){var z=new V.iT()
z.eE(a)
return z}}},eL:{"^":"b;a,b,0c,0d",
gi8:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eW(this.a.L(0,b))
w.a=H.a([],[V.cb])
w.c=!1
C.a.h(this.c,w)
return w},
hY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.bc(0,a))return w}return},
i:function(a){return this.b}},eT:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.fU(this.b,"\n","\\n")
y=H.fU(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eU:{"^":"b;a,b,0c",
i:function(a){return this.b}},jo:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eL(this,b)
z.c=H.a([],[V.eW])
this.a.m(0,b,z)}return z},
bi:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eU(this,a)
y=P.o
z.c=new H.aL(0,0,[y,y])
this.b.m(0,a,z)}return z},
iH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.a([],[V.eT])
y=this.c
x=[P.x]
w=H.a([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bp(a,t)
r=y.hY(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dk(w,0,null)
throw H.d(P.t("Untokenizable string [state: "+y.gi8(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.a([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dk(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eT(o==null?p.b:o,q,t)}++t}}}},eW:{"^":"eo;b,0c,0a",
i:function(a){return this.b.b+": "+this.cW(0)}}}],["","",,X,{"^":"",dQ:{"^":"b;",$isaO:1},hE:{"^":"eO;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z}},iq:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
b4:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.C(a)},function(){return this.b4(null)},"iU","$1","$0","gd_",0,2,1],
sea:function(a){var z,y,x
if(!J.Y(this.a,a)){z=this.a
if(z!=null){z=z.gv()
z.toString
y=H.f(this.gd_(),{func:1,ret:-1,args:[D.n]})
C.a.Z(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gv()
z.toString
y=H.f(this.gd_(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.a5])
z.b=!0
this.b4(z)}},
$isaO:1,
$isdQ:1},eO:{"^":"b;"}}],["","",,V,{"^":"",j2:{"^":"b;0a,0b",
eG:function(a,b){var z,y,x,w,v,u,t
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
t=W.ai
W.a3(z,"scroll",H.f(new V.j5(x),{func:1,ret:-1,args:[t]}),!1,t)},
hG:function(a,b,c){var z,y,x,w
a=H.z(C.e.hL(a,0,4))
if(c.length===0)c=P.fz(C.q,b,C.n,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.h2(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
cg:function(a,b){return this.hG(a,b,"")},
X:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.r(a,"$isc",[P.o],"$asc")
this.h6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iH(C.a.i3(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(1>=r.length)return H.j(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fz(C.q,s,C.n,!1)
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
z=new V.jo()
y=P.o
z.a=new H.aL(0,0,[y,V.eL])
z.b=new H.aL(0,0,[y,V.eU])
z.c=z.L(0,"Start")
y=z.L(0,"Start").D(0,"Bold")
x=V.ac(new H.a8("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").D(0,"Bold")
x=new V.bO()
w=[V.cb]
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a8("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").D(0,"BoldEnd")
x=V.ac(new H.a8("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").D(0,"Italic")
x=V.ac(new H.a8("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").D(0,"Italic")
x=new V.bO()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a8("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").D(0,"ItalicEnd")
x=V.ac(new H.a8("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").D(0,"Code")
x=V.ac(new H.a8("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").D(0,"Code")
x=new V.bO()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a8("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").D(0,"CodeEnd")
x=V.ac(new H.a8("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").D(0,"LinkHead")
x=V.ac(new H.a8("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").D(0,"LinkTail")
x=V.ac(new H.a8("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").D(0,"LinkEnd")
y=V.ac(new H.a8("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").D(0,"LinkHead")
y=new V.bO()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a8("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").D(0,"LinkEnd")
y=V.ac(new H.a8("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").D(0,"LinkTail")
y=new V.bO()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a8("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").D(0,"Other").a,new V.h1())
x=z.L(0,"Other").D(0,"Other")
y=new V.bO()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a8("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.bi("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.bi("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.bi("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.bi("Link")
x=z.L(0,"Other")
x.d=x.a.bi("Other")
this.b=z},
q:{
j3:function(a,b){var z=new V.j2()
z.eG(a,!0)
return z}}},j5:{"^":"v:20;a",
$1:function(a){P.dn(C.l,new V.j4(this.a))}},j4:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.h.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
ha:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 2:return"boundary"
case 100:return"dirt"
case 101:return"turf"
case 102:return"rock"
case 103:return"sand"
case 104:return"dryLeaves"
case 105:return"trunk-ud"
case 106:return"trunk-ns"
case 107:return"trunk-ew"
case 108:return"brick"
case 109:return"redShine"
case 110:return"whiteShine"
case 111:return"yellowShine"
case 112:return"blackShine"
case 113:return"leaves"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
cm:function(a){return a>=200&&a<=205||a===2},
h9:function(a,b){var z
if(a===b)return!1
if(b===0)return!0
if(a===1)return B.cm(b)
if(!B.cm(a))z=b===1||B.cm(b)
else z=!1
return z},
fP:function(){var z,y,x
z=V.j3("3Dart Craft",!0)
y=[P.o]
z.X(H.a(["Please wait, this example may take a while to load."],y))
x=W.cU(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
z.a.appendChild(x)
z.cg(1,"About")
z.X(H.a(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],y))
z.X(H.a(["\xab[Back to Examples List|../../]"],y))
z.cg(1,"Controls")
z.X(H.a(["\u2022 _Currently there are no controls for mobile browsers_"],y))
z.X(H.a(["\u2022 *Esc* to release the mouse capture"],y))
z.X(H.a(["\u2022 *W* or *Up arrow* to move forward"],y))
z.X(H.a(["\u2022 *S* or *Down arrow* to move backward"],y))
z.X(H.a(["\u2022 *A* or *Left arrow* to strife left"],y))
z.X(H.a(["\u2022 *D* or *Right arror* to strife right"],y))
z.X(H.a(["\u2022 *Space bar* to jump"],y))
z.X(H.a(["\u2022 *Tab* cycles the block selected which can be placed"],y))
z.X(H.a(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],y))
z.X(H.a(["\u2022 *Left click* or *Q* removes the currently highlighted block"],y))
z.X(H.a(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],y))
z.cg(1,"Help wanted")
z.X(H.a(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],y))
z.X(H.a(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dn(C.l,B.lL())},
n8:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
z=document.getElementById("targetCanvas")
if(z==null)H.u(P.t("Failed to find an element with the identifier, targetCanvas."))
y=E.jl(z,!0,!0,!0,!1)
x=new B.ia(y)
w=P.x
x.b=new H.aL(0,0,[w,B.aa])
x.c=new H.aL(0,0,[w,[P.c,P.x]])
x.d=H.a([],[O.ep])
v=new V.a9(1,1,1)
u=new V.p(0,0,0)
t=new V.p(0.5,-1,0.2).w(0,u)
t=U.aX(V.es(u,new V.E(0,0,1),new V.E(t.a,t.b,t.c)))
u=new D.cq()
u.c=new V.a9(1,1,1)
u.a=new V.E(0,0,1)
s=u.b
u.b=t
t=t.gv()
t.toString
r=H.f(u.gfu(),{func:1,ret:-1,args:[D.n]})
C.a.h(t.a,r)
t=new D.H("mover",s,u.b,u,[U.a5])
t.b=!0
u.aQ(t)
if(!u.c.u(0,v)){s=u.c
u.c=v
t=new D.H("color",s,v,u,[V.a9])
t.b=!0
u.aQ(t)}x.e=u
q=x.R("brick")
p=x.R("dirt")
o=x.R("dryLeavesSide")
n=x.R("dryLeavesTop")
m=x.R("leaves")
l=x.R("rock")
k=x.R("sand")
j=x.R("trunkEnd")
i=x.R("trunkSide")
h=x.R("turfSide")
g=x.R("turfTop")
f=x.aL("blackShine",!0)
e=x.aL("redShine",!0)
d=x.aL("yellowShine",!0)
c=x.aL("whiteShine",!0)
b=x.R("mushroomBottom")
a=x.R("mushroomSide")
a0=x.R("mushroomTop")
a1=x.R("grass")
a2=x.R("fern")
a3=x.R("blueFlowers")
a4=x.R("redFlowers")
a5=x.R("whiteFlowers")
a6=x.aL("water1",!0)
x.b.m(0,100,new B.aa(p,p,p,p,p,p))
x.b.m(0,101,new B.aa(g,p,h,h,h,h))
x.b.m(0,102,new B.aa(l,l,l,l,l,l))
x.b.m(0,103,new B.aa(k,k,k,k,k,k))
x.b.m(0,104,new B.aa(n,p,o,o,o,o))
x.b.m(0,105,new B.aa(j,j,i,i,i,i))
x.b.m(0,106,new B.aa(i,i,i,i,j,j))
x.b.m(0,107,new B.aa(i,i,j,j,i,i))
x.b.m(0,108,new B.aa(q,q,q,q,q,q))
x.b.m(0,109,new B.aa(e,e,e,e,e,e))
x.b.m(0,110,new B.aa(c,c,c,c,c,c))
x.b.m(0,111,new B.aa(d,d,d,d,d,d))
x.b.m(0,112,new B.aa(f,f,f,f,f,f))
x.b.m(0,113,new B.aa(m,m,m,m,m,m))
x.b.m(0,1,new B.aa(a6,a6,a6,a6,a6,a6))
w=[w]
u=H.r(H.a([a1],w),"$isc",w,"$asc")
x.c.m(0,200,u)
u=H.r(H.a([a2],w),"$isc",w,"$asc")
x.c.m(0,201,u)
u=H.r(H.a([a5],w),"$isc",w,"$asc")
x.c.m(0,202,u)
u=H.r(H.a([a3],w),"$isc",w,"$asc")
x.c.m(0,203,u)
u=H.r(H.a([a4],w),"$isc",w,"$asc")
x.c.m(0,204,u)
w=H.r(H.a([a0,b,a],w),"$isc",w,"$asc")
x.c.m(0,205,w)
x.f=x.d4("selection")
x.r=x.d4("crosshair")
a7=B.jX(x)
a8=B.it(y,a7)
a9=new M.hw()
w=O.cX(E.ah)
a9.d=w
w.bl(a9.gfv(),a9.gfw())
a9.e=null
a9.f=null
a9.r=null
a9.x=null
b0=new X.iq()
b0.b=1.0471975511965976
b0.c=0.1
b0.d=2000
b0.sea(null)
w=b0.b
if(!$.m.$2(w,1.0471975511965976)){s=b0.b
b0.b=1.0471975511965976
w=new D.H("fov",s,1.0471975511965976,b0,[P.y])
w.b=!0
b0.b4(w)}w=b0.c
if(!$.m.$2(w,0.1)){s=b0.c
b0.c=0.1
w=new D.H("near",s,0.1,b0,[P.y])
w.b=!0
b0.b4(w)}w=b0.d
if(!$.m.$2(w,2000)){s=b0.d
b0.d=2000
w=new D.H("far",s,2000,b0,[P.y])
w.b=!0
b0.b4(w)}w=a9.a
if(w!==b0){if(w!=null){w=w.gv()
w.toString
u=H.f(a9.gaJ(),{func:1,ret:-1,args:[D.n]})
C.a.Z(w.a,u)}s=a9.a
a9.a=b0
w=b0.gv()
w.toString
u=H.f(a9.gaJ(),{func:1,ret:-1,args:[D.n]})
C.a.h(w.a,u)
w=new D.H("camera",s,a9.a,a9,[X.dQ])
w.b=!0
a9.b3(w)}b1=new X.hE()
w=new V.aW(0,0,0,1)
b1.a=w
b1.b=!0
b1.c=2000
b1.d=!0
b1.e=0
b1.f=!1
w=V.de(0,0,1,1)
b1.r=w
w=a9.b
if(w!==b1){if(w!=null){w=w.gv()
w.toString
u=H.f(a9.gaJ(),{func:1,ret:-1,args:[D.n]})
C.a.Z(w.a,u)}s=a9.b
a9.b=b1
w=b1.gv()
w.toString
u=H.f(a9.gaJ(),{func:1,ret:-1,args:[D.n]})
C.a.h(w.a,u)
w=new D.H("target",s,a9.b,a9,[X.eO])
w.b=!0
a9.b3(w)}w=a9.e
if(w==null){w=D.K()
a9.e=w}u={func:1,ret:-1,args:[D.n]}
t=H.f(a7.giL(a7),u)
C.a.h(w.a,t)
a9.a.sea(a8.r)
for(w=a7.d,t=w.length,b2=0;b2<w.length;w.length===t||(0,H.A)(w),++b2){b3=w[b2]
r=a9.d
b4=H.B(r,0)
H.F(b3,b4)
b5=[b4]
if(r.b5(H.a([b3],b5))){b6=r.a
b7=b6.length
C.a.h(b6,b3)
b4=H.r(H.a([b3],b5),"$ish",[b4],"$ash")
r=r.c
if(r!=null)r.$2(b7,b4)}}a9.d.h(0,a8.cy)
a7.e=a8
w=y.d
if(w!==a9){if(w!=null){w=w.gv()
w.toString
t=H.f(y.gcY(),u)
C.a.Z(w.a,t)}y.d=a9
w=a9.gv()
w.toString
u=H.f(y.gcY(),u)
C.a.h(w.a,u)
y.eJ()}b8=a8.c.b_(0,0).iI(0,0)
a8.a.sT(0,new V.p(0,b8+60,0))
a8.a.sH(new V.E(0,0,0))
w=a9.b
v=new V.aW(0.576,0.784,0.929,1)
if(!w.a.u(0,v)){s=w.a
w.a=v
u=new D.H("color",s,v,w,[V.aW])
u.b=!0
w=w.x
if(!(w==null))w.C(u)}P.jn(C.y,new B.lS(y))},"$0","lL",0,0,3],
h8:{"^":"b;a,b,c,d,e,f",
i:function(a){return H.l(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.ha(this.gad(this))+")"},
gad:function(a){var z=this.f
z=z==null?null:z.t(this.a,this.b,this.c)
if(z==null)z=this.b<0?2:0
return z},
sad:function(a,b){var z=this.f
if(!(z==null))z.A(this.a,this.b,this.c,b)}},
ij:{"^":"b;a,b"},
dS:{"^":"b;a,b,c,0d,0e,0f",
eA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new Uint8Array(27648)
C.r.hW(z,0,27648,0)
this.d=z
this.e=H.a([],[E.ah])
for(z=this.c.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
v=E.bg(null,!0,null,"",null,null)
u=w.y
t=H.B(u,0)
H.F(v,t)
s=[t]
if(u.b5(H.a([v],s))){r=u.a
q=r.length
C.a.h(r,v)
t=H.r(H.a([v],s),"$ish",[t],"$ash")
u=u.c
if(u!=null)u.$2(q,t)}u=this.e;(u&&C.a).h(u,v)}this.f=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
t:function(a,b,c){var z,y
if(b<0)return 2
if(b>=48)return 0
if(a<0){z=this.gaa(this)
z=z==null?null:z.t(a+24,b,c)
return z==null?0:z}if(a>=24){z=this.gag(this)
z=z==null?null:z.t(a-24,b,c)
return z==null?0:z}if(c<0){z=this.gcm(this)
z=z==null?null:z.t(a,b,c+24)
return z==null?0:z}if(c>=24){z=this.gcE()
z=z==null?null:z.t(a,b,c-24)
return z==null?0:z}z=this.d
y=(a*48+b)*24+c
if(y<0||y>=27648)return H.j(z,y)
return z[y]},
A:function(a,b,c,d){var z,y
if(b<0||b>=48)return!1
if(a<0){z=this.gaa(this)
z=z==null?null:z.A(a+24,b,c,d)
return z==null?!1:z}if(a>=24){z=this.gag(this)
z=z==null?null:z.A(a-24,b,c,d)
return z==null?!1:z}if(c<0){z=this.gcm(this)
z=z==null?null:z.A(a,b,c+24,d)
return z==null?!1:z}if(c>=24){z=this.gcE()
z=z==null?null:z.A(a,b,c-24,d)
return z==null?!1:z}z=this.d
y=(a*48+b)*24+c
if(y<0||y>=27648)return H.j(z,y)
z[y]=d
return!0},
gaa:function(a){return this.c.b_(this.a-24,this.b)},
gcE:function(){return this.c.b_(this.a,this.b+24)},
gag:function(a){return this.c.b_(this.a+24,this.b)},
gcm:function(a){return this.c.b_(this.a,this.b-24)},
bR:function(a,b,c){var z,y
for(z=47;z>=0;--z){y=this.t(a,z,b)
if(y>=100&&y<=113)return z}return c},
iI:function(a,b){return this.bR(a,b,48)},
iM:function(){if(!this.f)return
this.f=!1
var z=B.di(this.c.a,null)
z.hK(this)
z.cD(0,this.e)},
sc0:function(a){var z,y,x
for(z=this.e,y=z.length,x=0;x<y;++x)z[x].b=a},
iN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=V.de(this.a,this.b,24,24)
y=z.eb(a)
x=y.a
w=a.a
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.e(w)
v=x-w
x=y.b
u=a.b
if(typeof x!=="number")return x.w()
if(typeof u!=="number")return H.e(u)
t=x-u
if(v*v+t*t<100){this.sc0(!0)
return}s=z.eb(b)
x=b.a
if(typeof x!=="number")return x.w()
r=b.b
if(typeof r!=="number")return r.w()
r=new V.Z(x-w,r-u)
q=r.B(0,Math.sqrt(r.E(r)))
r=s.a
if(typeof r!=="number")return r.w()
x=s.b
if(typeof x!=="number")return x.w()
p=new V.Z(r-w,x-u)
o=p.E(p)
if(o>14400){this.sc0(!1)
return}this.sc0(q.E(p.B(0,o))>0)},
q:{
hd:function(a,b,c){var z=new B.dS(a,b,c)
z.eA(a,b,c)
return z}}},
hF:{"^":"b;a,0b",
hX:function(){var z,y,x,w
this.eX()
for(z=this.a,y=z.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.hh(y[w])
for(y=z.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.f1(y[w])
for(y=z.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.he(y[w])
for(z=z.c,y=z.length,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)this.fU(z[w])
this.eU(-12,40,-15)
this.hd(0,2,0)},
b7:function(a,b,c,d){this.a.t(H.z(a),H.z(b),c).sad(0,d)},
c8:function(a,b,c,d){return B.aZ(this.b.a,new B.af((b+a.a)*d,(c+a.b)*d)).ar()*0.5+0.5},
hh:function(a){var z,y
for(z=0;z<24;++z)for(y=0;y<24;++y)this.hg(a,z,y)},
hg:function(a,b,c){var z,y,x,w
z=C.h.aH(Math.pow(0.6*this.c8(a,b,c,0.001)+0.3*this.c8(a,b,c,0.01)+0.1*this.c8(a,b,c,0.1),2)*48)
if(z>=48)z=47
for(y=z-1,x=0;x<=z;++x)if(a.t(b,x,c)===0){if(z===x)w=101
else w=y===x?100:102
a.A(b,x,c,w)}},
f1:function(a){var z,y
for(z=0;z<24;++z)for(y=0;y<24;++y)this.f0(a,z,y)},
f0:function(a,b,c){var z,y,x,w,v,u,t,s
z=a.bR(b,c,0)
if(z<8){for(y=8;y>z;--y)a.A(b,y,c,1)
for(x=z-2,y=10;y>x;--y)for(w=-1;w<=1;++w)for(v=b+w,u=-1;u<=1;++u){t=c+u
s=a.t(v,y,t)
if(s===101||s===104)a.A(v,y,t,103)}}},
he:function(a){var z,y
for(z=0;z<24;++z)for(y=0;y<24;++y)if(B.aZ(this.b.a,new B.af((z+a.a)*1.5,(y+a.b)*1.5)).ar()*0.5+0.5<0.1)this.eY(a,z,y)},
eY:function(a,b,c){var z,y,x
z=a.bR(b,c,0)
y=a.t(b,z,c)
if(y!==101&&y!==104)return
for(x=1;x<8;++x)a.A(b,z+x,c,105)
this.eZ(a,b,c)
this.f_(a,b,z+8,c)},
eZ:function(a,b,c){var z,y,x,w,v,u
for(z=-3;z<=3;++z)for(y=z*z,x=b+z,w=-3;w<=3;++w)if(y+w*w<=10)for(v=c+w,u=47;u>=0;--u)if(a.t(x,u,v)===101){a.A(x,u,v,104)
break}},
f_:function(a,b,c,d){var z,y,x,w,v,u,t,s
for(z=-3;z<=3;++z)for(y=z*z,x=b+z,w=-3;w<=3;++w)for(v=y+w*w,u=c+w,t=-3;t<=3;++t)if(v+t*t<=16){s=d+t
if(a.t(x,u,s)===0)a.A(x,u,s,113)}},
fU:function(a){var z,y,x,w,v,u,t,s,r,q
for(z=0;z<24;++z)for(y=z-400,x=z+400,w=0;w<24;++w){v=this.b
u=a.a
t=(z+u)*12.5
s=a.b
r=(w+s)*12.5
if(B.aZ(v.a,new B.af(t,r)).ar()*0.5+0.5<0.1)this.aM(a,z,w,204)
else{v=(x+u)*12.5
if(B.aZ(this.b.a,new B.af(v,r)).ar()*0.5+0.5<0.1)this.aM(a,z,w,203)
else{q=(w+400+s)*12.5
if(B.aZ(this.b.a,new B.af(t,q)).ar()*0.5+0.5<0.1)this.aM(a,z,w,202)
else if(B.aZ(this.b.a,new B.af(v,q)).ar()*0.5+0.5<0.15)this.aM(a,z,w,200)
else if(B.aZ(this.b.a,new B.af((y+u)*12.5,r)).ar()*0.5+0.5<0.1)this.aM(a,z,w,201)
else if(B.aZ(this.b.a,new B.af(t,(w-400+s)*12.5)).ar()*0.5+0.5<0.08)this.aM(a,z,w,205)}}}},
aM:function(a,b,c,d){var z,y
z=a.bR(b,c,0)
y=a.t(b,z,c)
if(y!==101&&y!==104)return
a.A(b,z+1,c,d)},
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
for(z=this.a,y=30;y>=0;y-=2){x=30-y+3
for(w=-x,v=y-1,u=w;u<=x;++u)for(t=w;t<=x;++t){s=z.t(u,y,t)
r=s.f
if(!(r==null))r.A(s.a,s.b,s.c,110)
s=z.t(u,v,t)
r=s.f
if(!(r==null))r.A(s.a,s.b,s.c,110)}for(s=x+2,r=x+1,q=w-2,p=w-1,o=-2;o<=2;++o){n=z.t(p,y,o)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(p,v,o)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(q,v,o)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(r,y,o)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(r,v,o)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(s,v,o)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(o,y,p)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(o,v,p)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(o,v,q)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(o,y,r)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(o,v,r)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(o,v,s)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)}v=y+1
n=z.t(p,v,2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(q,y,2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(p,v,-2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(q,y,-2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(r,v,2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(s,y,2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(r,v,-2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(s,y,-2)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(2,v,p)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
n=z.t(2,y,q)
m=n.f
if(!(m==null))m.A(n.a,n.b,n.c,108)
p=z.t(-2,v,p)
n=p.f
if(!(n==null))n.A(p.a,p.b,p.c,108)
q=z.t(-2,y,q)
p=q.f
if(!(p==null))p.A(q.a,q.b,q.c,108)
q=z.t(2,v,r)
p=q.f
if(!(p==null))p.A(q.a,q.b,q.c,108)
q=z.t(2,y,s)
p=q.f
if(!(p==null))p.A(q.a,q.b,q.c,108)
v=z.t(-2,v,r)
r=v.f
if(!(r==null))r.A(v.a,v.b,v.c,108)
v=z.t(-2,y,s)
s=v.f
if(!(s==null))s.A(v.a,v.b,v.c,108)}},
eU:function(a,b,c){var z,y
z=new B.hG(this,a,b,c)
y=[P.x]
z.$5(109,0,0,H.a([0,1,2,3,4,4,3,2,4,4,3,2,1,0],y),H.a([1,0,0,0,1,2,3,3,4,5,6,6,6,5],y))
z.$5(109,6,0,H.a([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],y),H.a([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],y))
z.$5(112,12,0,H.a([0,0,0,0,0,1,2,1,2,3,3,3,3,3],y),H.a([2,3,4,5,6,1,1,4,4,2,3,4,5,6],y))
z.$5(112,17,0,H.a([0,0,0,0,0,0,1,2,1,2,3,3,3,3],y),H.a([1,2,3,4,5,6,1,1,4,4,2,3,5,6],y))
z.$5(112,22,0,H.a([0,2,1,1,1,1,1,1],y),H.a([1,1,1,2,3,4,5,6],y))},
hd:function(a,b,c){var z,y,x,w,v,u,t,s
for(z=this.a,y=-3;y<=3;++y)for(x=a+y,w=0;w<=7;++w)for(v=b+w,u=-3;u<=3;++u){t=z.t(x,v,c+u)
s=t.f
if(!(s==null))s.A(t.a,t.b,t.c,0)}this.b7(a,b,c,112)
this.b7(a,b+1,c,111)
this.b7(a,b+2,c,111)
this.b7(a,b+3,c,111)
this.b7(a,b+4,c,111)}},
hG:{"^":"v;a,b,c,d",
$5:function(a,b,c,d,e){var z,y,x,w,v,u,t
z=[P.x]
H.r(d,"$isc",z,"$asc")
H.r(e,"$isc",z,"$asc")
for(y=d.length-1,z=this.b+b,x=this.c+c,w=this.d,v=this.a.a;y>=0;--y){if(y>=d.length)return H.j(d,y)
u=d[y]
if(typeof u!=="number")return H.e(u)
if(y>=e.length)return H.j(e,y)
t=e[y]
if(typeof t!=="number")return H.e(t)
t=v.t(H.z(z+u),H.z(x-t),w)
u=t.f
if(!(u==null))u.A(t.a,t.b,t.c,a)}}},
lS:{"^":"v:36;a",
$1:function(a){H.i(a,"$isbo")
P.dK(C.h.em(this.a.gi_(),2)+" fps")}},
aa:{"^":"b;a,b,c,d,e,f"},
ia:{"^":"b;a,0b,0c,0d,0e,0f,0r",
aL:function(a,b){var z,y,x,w,v
z="./textures/"+a+".png"
y=this.a.f.e9(z,!0,!1,!1)
x=O.eq()
x.dx.h(0,this.e)
w=x.r
w.sap(0,new V.a9(0.8,0.8,0.8))
w=x.x
w.sap(0,new V.a9(0.4,0.4,0.4))
x.r.sbh(y)
x.x.sbh(y)
x.db.sbh(y)
if(b){w=x.z
w.sap(0,new V.a9(0.5,0.5,0.5))
if(w.c===C.b){w.c=C.f
w.bW()
w.cc(100)
v=w.a
v.a=null
v.a_(null)}w.cc(3)}C.a.h(this.d,x)
return this.d.length-1},
R:function(a){return this.aL(a,!1)},
d4:function(a){var z,y,x
z="./textures/"+a+".png"
y=this.a.f.e9(z,!0,!1,!1)
x=O.eq()
x.f.sbh(y)
x.db.sbh(y)
return x}},
is:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
eC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.r
z.r=!0
y=z.d
y.Q=0.4
y.ch=0.4
y=new U.jH()
x=X.aM()
x.h(0,new X.Q(39,new X.V(!1,!1,!1)))
x.h(0,new X.Q(68,new X.V(!1,!1,!1)))
w=x.gaf()
w.toString
v={func:1,ret:-1,args:[D.n]}
u=H.f(y.gfF(),v)
C.a.h(w.a,u)
y.a=x
x=X.aM()
x.h(0,new X.Q(37,new X.V(!1,!1,!1)))
x.h(0,new X.Q(65,new X.V(!1,!1,!1)))
C.a.h(x.gaf().a,u)
y.b=x
x=X.aM()
x.h(0,new X.Q(81,new X.V(!1,!1,!1)))
C.a.h(x.gaf().a,u)
y.c=x
x=X.aM()
x.h(0,new X.Q(69,new X.V(!1,!1,!1)))
C.a.h(x.gaf().a,u)
y.d=x
x=X.aM()
x.h(0,new X.Q(40,new X.V(!1,!1,!1)))
x.h(0,new X.Q(83,new X.V(!1,!1,!1)))
C.a.h(x.gaf().a,u)
y.e=x
x=X.aM()
x.h(0,new X.Q(38,new X.V(!1,!1,!1)))
x.h(0,new X.Q(87,new X.V(!1,!1,!1)))
C.a.h(x.gaf().a,u)
y.f=x
x=U.c4()
x.sat(30)
x.saD(0)
u=x.gv()
u.toString
w=H.f(y.gal(),v)
C.a.h(u.a,w)
y.r=x
x=U.c4()
x.sat(30)
x.saD(0)
C.a.h(x.gv().a,w)
y.x=x
x=U.c4()
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
y.a.a5(z)
y.b.a5(z)
y.c.a5(z)
y.d.a5(z)
y.e.a5(z)
y.f.a5(z)
y.r.sat(6)
y.x.sat(60)
z=y.x
x=z.r
if(!$.m.$2(x,-100)){t=z.r
z.r=-100
x=new D.H("acceleration",t,-100,z,[P.y])
x.b=!0
z.F(x)}y.y.sat(6)
y.dy=H.f(this.gff(),{func:1,ret:V.p,args:[V.p,V.p]})
this.a=y
z=a.r
y=new U.jG()
x=U.c4()
x.scO(0,!0)
x.scI(6.283185307179586)
x.scJ(0)
x.sT(0,0)
x.sat(100)
x.sH(0)
x.saD(0.5)
y.b=x
x=x.gv()
x.toString
w=H.f(y.gal(),v)
C.a.h(x.a,w)
x=U.c4()
x.scO(0,!0)
x.scI(6.283185307179586)
x.scJ(0)
x.sT(0,0)
x.sat(100)
x.sH(0)
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
x=new D.H("modifiers",t,s,y,[X.V])
x.b=!0
y.F(x)
x=y.f
if(x!==!1){y.f=!1
x=new D.H("invertX",x,!1,y,[P.a7])
x.b=!0
y.F(x)}x=y.r
if(x!==!1){y.r=!1
x=new D.H("invertY",x,!1,y,[P.a7])
x.b=!0
y.F(x)}y.a5(z)
y.b.scI(1.5707963267948966)
y.b.scJ(-1.5707963267948966)
y.b.saD(1)
y.c.saD(1)
y.b.scO(0,!1)
this.b=y
z=y.gv()
z.toString
y=H.f(new B.iu(this),v)
C.a.h(z.a,y)
y=U.a5
z=[y]
x=U.ct(H.a([this.a,this.b],z))
w=x.gv()
w.toString
u=H.f(this.ghi(),v)
C.a.h(w.a,u)
this.r=x
x=this.b
u=new U.ed()
u.c=V.bm()
u.d=0
if(null!=x){u.a=x
x=x.gv()
x.toString
w=H.f(u.gal(),v)
C.a.h(x.a,w)
y=new D.H("mover",null,u.a,u,[y])
y.b=!0
u.F(y)}this.x=U.ct(H.a([u,this.a,U.aX(V.da(1,-1,1,1))],z))
y=U.aX(V.cc(-0.5,-0.5,-0.5))
x=new U.eH()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sen(-0.1)
x.sef(0,0)
x.sej(0)
w=x.d
if(!$.m.$2(w,0)){t=x.d
x.d=0
w=new D.H("deltaYaw",t,0,x,[P.y])
w.b=!0
x.F(w)}w=x.e
if(!$.m.$2(w,0.1)){t=x.e
x.e=0.1
w=new D.H("deltaPitch",t,0.1,x,[P.y])
w.b=!0
x.F(w)}w=x.f
if(!$.m.$2(w,0)){t=x.f
x.f=0
w=new D.H("deltaRoll",t,0,x,[P.y])
w.b=!0
x.F(w)}this.y=U.ct(H.a([y,x,U.aX(V.cc(0.5,0.5,0.5)),U.aX(V.da(0.04,-0.04,0.04,1)),U.aX(V.cc(-0.15,0.06,-0.2)),this.x],z))
this.z=U.ct(H.a([U.aX(V.da(0.005,-0.005,0.005,1)),U.aX(V.cc(0,0,-0.2)),this.x],z))
z=X.aM()
z.h(0,new X.Q(32,new X.V(!1,!1,!1)))
z.a5(a.r)
z=z.gaf()
z.toString
y=H.f(this.gfE(),v)
C.a.h(z.a,y)
this.d=!0
y=X.aM()
y.h(0,new X.Q(9,new X.V(!1,!1,!1)))
y.h(0,new X.Q(9,new X.V(!1,!1,!0)))
y.a5(a.r)
y=y.gaf()
y.toString
z=H.f(this.gfs(),v)
C.a.h(y.a,z)
z=X.aM()
z.h(0,new X.Q(69,new X.V(!1,!1,!1)))
z.h(0,new X.Q(81,new X.V(!1,!1,!1)))
z.a5(a.r)
z=z.gaf()
z.toString
y=H.f(this.gfq(),v)
C.a.h(z.a,y)
y=a.r.d
z=y.b
if(z==null){z=D.K()
y.b=z}v=H.f(this.gfz(),v)
C.a.h(z.a,v)
v=this.z
z=$.$get$a_()
y=$.$get$a2()
y=new Z.ad(z.a|y.a)
r=new F.eJ()
z=new F.jK(r)
z.b=!1
x=F.bS
z.c=H.a([],[x])
r.a=z
z=new F.iX(r)
z.b=H.a([],[F.ez])
r.b=z
z=new F.iW(r)
z.b=H.a([],[F.ei])
r.c=z
z=new F.iV(r)
z.b=H.a([],[F.av])
r.d=z
r.e=null
z=r.a
w=new V.E(-1,-1,1)
w=w.B(0,Math.sqrt(w.E(w)))
q=z.bx(new V.cd(1,2,4,6),new V.aW(1,0,0,1),new V.p(-1,-1,0),new V.M(0,1),w,y)
z=r.a
w=new V.E(1,-1,1)
w=w.B(0,Math.sqrt(w.E(w)))
p=z.bx(new V.cd(0,3,4,6),new V.aW(0,0,1,1),new V.p(1,-1,0),new V.M(1,1),w,y)
z=r.a
w=new V.E(1,1,1)
w=w.B(0,Math.sqrt(w.E(w)))
o=z.bx(new V.cd(0,2,5,6),new V.aW(0,1,0,1),new V.p(1,1,0),new V.M(1,0),w,y)
z=r.a
w=new V.E(-1,1,1)
w=w.B(0,Math.sqrt(w.E(w)))
n=z.bx(new V.cd(0,2,4,7),new V.aW(1,1,0,1),new V.p(-1,1,0),new V.M(0,0),w,y)
r.d.hF(H.a([q,p,o,n],[x]))
r.aC()
z=this.c
this.Q=E.bg(null,!0,v,"",r,z.a.r)
this.ch=E.bg(null,!0,this.y,"",null,null)
v=E.ah
this.db=H.a([],[v])
for(y=z.a.d,x=y.length,m=0;m<y.length;y.length===x||(0,H.A)(y),++m){l=E.bg(null,!0,null,"",null,y[m])
w=this.ch.y
u=H.B(w,0)
H.F(l,u)
k=[u]
if(w.b5(H.a([l],k))){j=w.a
i=j.length
C.a.h(j,l)
u=H.r(H.a([l],k),"$ish",[u],"$ash")
w=w.c
if(w!=null)w.$2(i,u)}w=this.db;(w&&C.a).h(w,l)}this.e=0
z=E.bg(null,!0,null,"",null,z.a.f)
this.cx=z
this.f=null
this.cy=E.bg(H.a([this.Q,this.ch,z],[v]),!0,null,"",null,null)
this.dD()},
a8:function(a,b,c){var z,y
z=this.c.t(a,b,c)
y=z.gad(z)
return y>=100&&y<=113||y===2},
jf:[function(a){H.i(a,"$isn")
if(this.d)this.a.x.sH(30)},"$1","gfE",4,0,0],
j5:[function(a){var z,y
a=H.k(H.i(a,"$isn"),"$isbK")
$.$get$cl()
z=a.c
y=this.e
if(z.b.c){if(typeof y!=="number")return y.w()
z=y-1
this.e=z
if(z<0)this.e=18}else{if(typeof y!=="number")return y.n()
z=y+1
this.e=z
if(z>=19)this.e=0}this.dD()},"$1","gfs",4,0,0],
j4:[function(a){this.de(H.k(H.i(a,"$isn"),"$isbK").c.a===69)},"$1","gfq",4,0,0],
ja:[function(a){this.de(H.k(H.i(a,"$isn"),"$isbN").x.a===2)},"$1","gfz",4,0,0],
de:function(a){var z,y,x,w,v,u,t
z=this.f
if(z==null)return
if(a){y=this.dq(z,this.dt())
z=y.a
this.f=z
x=$.$get$cl()
w=this.e
if(w>>>0!==w||w>=19)return H.j(x,w)
v=x[w]
if(v===105){x=y.b
w=$.$get$bj()
u=$.$get$bi()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=107
else{w=$.$get$c7()
u=$.$get$c6()
if((x&(w.a|u.a))!==0)v=106}}}else v=0
t=z.f
if(t!=null){z.sad(0,v)
t.f=!0
if(this.f.a<=0){z=t.gaa(t)
if(!(z==null))z.f=!0}if(this.f.c<=0){z=t.gcm(t)
if(!(z==null))z.f=!0}if(this.f.a>=23){z=t.gag(t)
if(!(z==null))z.f=!0}if(this.f.c>=23){z=t.gcE()
if(!(z==null))z.f=!0}}},
iW:[function(a,b){var z,y,x,w,v,u,t,s,r,q
z=b.a
y=b.b
x=b.c
w=J.cj(a.a)+0.5
v=J.cj(a.b)+0.5
u=J.cj(a.c)+0.5
this.d=!1
if(typeof y!=="number")return y.w()
if(this.a8(z,y-0.25,x)){y=v-0.25
this.a.x.sH(0)}if(this.a8(z,y-2+0.25,x)){y=v+0.25
this.a.x.sH(0)
this.d=!0}if(typeof z!=="number")return z.w()
t=z-0.25
s=y-0.5
if(this.a8(t,s,x)||this.a8(t,y-1.5,x)){z=w-0.25
this.a.r.sH(0)}else{t=z+0.25
if(this.a8(t,s,x)||this.a8(t,y-1.5,x)){z=w+0.25
this.a.r.sH(0)}}if(typeof x!=="number")return x.w()
t=x-0.25
if(this.a8(z,s,t)||this.a8(z,y-1.5,t)){x=u-0.25
this.a.y.sH(0)}else{t=x+0.25
if(this.a8(z,s,t)||this.a8(z,y-1.5,t)){x=u+0.25
this.a.y.sH(0)}}t=this.c
while(!0){r=t.t(z,y-2+0.25,x)
s=r.gad(r)
if(!(s>=100&&s<=113||s===2)){r=t.t(z,y,x)
s=r.gad(r)
q=s>=100&&s<=113||s===2
s=q}else s=!0
if(!s)break
y=v+0.25;++v
this.a.x.sH(0)
this.d=!0}return new V.p(z,y,x)},"$2","gff",8,0,37],
dt:function(){var z=this.x.f
return V.eD(z.O(new V.p(0,0,0)),z.ai(new V.E(0,0,-6)))},
dq:function(a,b){var z,y,x,w,v,u
z=a.a+a.d
y=a.b
x=a.c+a.e
w=V.eG(z,y,x,1,1,1).ir(b)
if(w==null)return
else{v=w.d
u=J.P(v)
if(u.u(v,$.$get$bi()))z-=0.9
else if(u.u(v,$.$get$bj()))z+=1.1
else if(u.u(v,$.$get$bF()))y-=0.9
else if(u.u(v,$.$get$bG()))y+=1.1
else if(u.u(v,$.$get$c6()))x-=0.9
else if(u.u(v,$.$get$c7()))x+=1.1
else return}return new B.ij(this.c.t(z,y,x),v)},
jx:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o
H.i(a,"$isn")
z=this.dt()
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
s=V.eD(new V.p(y+x,w+v,u+t),new V.E(x,v,t).K(0))
r=this.c.t(y,w,u)
while(!0){y=r!=null
if(!(y&&r.gad(r)===0))break
y=this.dq(r,s)
r=y==null?null:y.a}if(y)y=r.gad(r)===0||r.gad(r)===2
else y=!1
if(y)r=null
this.f=r
if(r==null)this.cx.b=!1
else{y=$.$get$a_()
x=$.$get$a2()
q=B.di(null,new Z.ad(y.a|x.a))
x=this.f
p=new V.p(x.d+x.a+0.5,x.b+0.5,x.e+x.c+0.5)
o=q.W(0)
q.dc(o,p,!0,1.1)
q.d2(o,p,!0,1.1)
q.d7(o,p,!0,1.1)
q.da(o,p,!0,1.1)
q.d5(o,p,!0,1.1)
q.d0(o,p,!0,1.1)
q.cD(0,H.a([this.cx],[E.ah]))
this.cx.b=!0}},"$1","ghi",4,0,0],
dD:function(){var z,y,x
z=B.di(this.c.a,null)
y=$.$get$cl()
x=this.e
if(x>>>0!==x||x>=19)return H.j(y,x)
z.d1(null,0,0,0,y[x],!1,1)
z.cD(0,this.db)},
q:{
it:function(a,b){var z=new B.is(b)
z.eC(a,b)
return z}}},
iu:{"^":"v:10;a",
$1:function(a){var z,y,x
H.i(a,"$isn")
z=this.a
y=z.a
z=V.er(-z.b.c.d)
if(!J.Y(y.z,z)){x=y.z
y.z=z
y.Q=z.bb(0)
z=new D.H("velocityRotation",x,y.z,y,[V.aN])
z.b=!0
y.F(z)}}},
iY:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,0dy",
hK:function(a){var z,y,x
for(z=23;z>=0;--z)for(y=47;y>=0;--y)for(x=23;x>=0;--x)this.d1(a,z,y,x,a.t(z,y,x),!1,1)},
cD:function(a,b){var z,y,x,w
H.r(b,"$isc",[E.ah],"$asc")
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.j(b,z)
y=b[z]
x=this.dy
if(z>=x.length)return H.j(x,z)
w=x[z]
if(w!=null){y.scU(w)
y.b=w.f.length!==0}else{y.scU(null)
y.b=!1}}this.dy=null},
W:function(a){var z,y
H.z(a)
z=this.dy
if(a>>>0!==a||a>=z.length)return H.j(z,a)
y=z[a]
if(y==null){z=this.dx
y=new F.eE(z)
y.b=z.gdL(z)
y.c=z.gb2(z)
y.d=0
y.f=H.a([],[P.y])
z=[P.x]
y.r=H.a([],z)
y.x=H.a([],z)
y.y=H.a([],z)
z=this.dy;(z&&C.a).m(z,a,y)}return y},
d1:function(a,b,c,d,e,f,g){var z,y,x,w
z=new V.p(b,c,d)
if(a!=null){b+=a.a
d+=a.b}y=new V.p(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.d3(a,y,z,e,!1,g)
else if(B.cm(e))if(e===201){x=this.db.c.k(0,201)
w=J.bc(x)
this.bo(this.W(w.k(x,0)),y,0.3141592653589793)
this.bo(this.W(w.k(x,0)),y,1.7278759594743864)
this.bo(this.W(w.k(x,0)),y,3.6128315516282616)
this.bo(this.W(w.k(x,0)),y,5.026548245743669)}else if(e===205)this.eW(y)
else{x=this.db.c.k(0,e)
w=J.bc(x)
this.d9(this.W(w.k(x,0)),y,0.39269908169872414,!0)
this.d9(this.W(w.k(x,0)),y,1.9634954084936207,!0)}else if(e>=100&&e<=113)this.d3(a,y,z,e,!1,g)},
aP:function(a,b,c,d){var z,y
z=$.$get$a_()
y=$.$get$a2()
return F.bq(null,null,null,a,b,new V.M(c,d),null,new Z.ad(z.a|y.a|$.$get$ae().a),0)},
an:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=a.b9(H.a([this.aP(b.n(0,c.j(0,i)),g,0,0),this.aP(b.n(0,d.j(0,i)),g,0,1),this.aP(b.n(0,e.j(0,i)),g,1,1),this.aP(b.n(0,f.j(0,i)),g,1,0)],[F.bS]))
y=z+1
x=z+2
w=z+3
v=[P.x]
a.b8(H.a([z,y,x,w],v))
if(h)a.b8(H.a([w,x,y,z],v))},
dc:function(a,b,c,d){return this.an(a,b,this.Q,this.r,this.x,this.ch,this.a,c,d)},
d2:function(a,b,c,d){return this.an(a,b,this.y,this.cx,this.cy,this.z,this.b,c,d)},
d7:function(a,b,c,d){return this.an(a,b,this.Q,this.cx,this.y,this.r,this.c,c,d)},
da:function(a,b,c,d){return this.an(a,b,this.x,this.z,this.cy,this.ch,this.d,c,d)},
d5:function(a,b,c,d){return this.an(a,b,this.r,this.y,this.z,this.x,this.e,c,d)},
d0:function(a,b,c,d){return this.an(a,b,this.ch,this.cy,this.cx,this.Q,this.f,c,d)},
d3:function(a,b,c,d,e,f){var z=this.db.b.k(0,d)
if(this.aK(a,d,c,0,1,0))this.dc(this.W(z.a),b,!1,f)
if(this.aK(a,d,c,0,-1,0))this.d2(this.W(z.b),b,!1,f)
if(this.aK(a,d,c,-1,0,0))this.d7(this.W(z.c),b,!1,f)
if(this.aK(a,d,c,1,0,0))this.da(this.W(z.d),b,!1,f)
if(this.aK(a,d,c,0,0,1))this.d5(this.W(z.e),b,!1,f)
if(this.aK(a,d,c,0,0,-1))this.d0(this.W(z.f),b,!1,f)},
aK:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.cO(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.h9(b,a.t(d+J.cO(c.a),e,f+J.cO(c.c)))},
d9:function(a,b,c,d){var z,y,x,w
z=Math.cos(c)*0.5
y=Math.sin(c)*0.5
x=-y
w=-z
this.an(a,b,new V.p(z,0,x),new V.p(z,-0.5,x),new V.p(w,-0.5,y),new V.p(w,0,y),new V.E(y,0,z),!0,1)},
bo:function(a,b,c){var z=V.er(c)
this.an(a,b,z.O(new V.p(0.4,-0.1,-0.4)),z.O(new V.p(0,-0.5,0)),z.O(new V.p(0.4,-0.1,0.4)),z.O(new V.p(0.8,0,0)),this.a,!0,1)},
eW:function(a8){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.db.c.k(0,205)
y=J.bc(z)
x=this.W(y.k(z,0))
w=this.W(y.k(z,1))
v=this.W(y.k(z,2))
z=[F.bS]
u=H.a([],z)
t=H.a([],z)
for(y=a8.a,s=a8.b,r=a8.c,q=this.e,p=this.b,o=0;o<=2;o+=0.25){n=3.141592653589793*o
m=Math.cos(n)
l=Math.sin(n)
k=new V.aN(m,0,-l,0,1,0,l,0,m)
n=k.O(new V.p(0.07,-0.1,0))
j=n.a
if(typeof y!=="number")return y.n()
if(typeof j!=="number")return H.e(j)
i=n.b
if(typeof s!=="number")return s.n()
if(typeof i!=="number")return H.e(i)
n=n.c
if(typeof r!=="number")return r.n()
if(typeof n!=="number")return H.e(n)
h=k.ai(q)
g=Math.abs(o-1)
f=$.$get$a_()
e=$.$get$a2()
C.a.h(u,F.bq(null,null,null,new V.p(y+j,s+i,r+n),h,new V.M(g,0),null,new Z.ad(f.a|e.a|$.$get$ae().a),0))
e=k.O(new V.p(0.1,-0.5,0))
f=e.a
if(typeof f!=="number")return H.e(f)
h=e.b
if(typeof h!=="number")return H.e(h)
e=e.c
if(typeof e!=="number")return H.e(e)
n=k.ai(q)
i=$.$get$a_()
j=$.$get$a2()
C.a.h(u,F.bq(null,null,null,new V.p(y+f,s+h,r+e),n,new V.M(g,1),null,new Z.ad(i.a|j.a|$.$get$ae().a),0))
d=k.O(new V.p(0.1,-0.5,0))
c=k.O(new V.p(0.1,0,0))
j=d.a
if(typeof j!=="number")return H.e(j)
i=d.b
if(typeof i!=="number")return H.e(i)
g=d.c
if(typeof g!=="number")return H.e(g)
n=c.a
if(typeof n!=="number")return n.n()
e=c.c
if(typeof e!=="number")return e.n()
h=$.$get$a_()
f=$.$get$a2()
C.a.h(t,F.bq(null,null,null,new V.p(y+j,s+i,r+g),p,new V.M(n+0.5,e+0.5),null,new Z.ad(h.a|f.a|$.$get$ae().a),0))}b=v.b9(u)
a=w.b9(t)
q=P.x
v.hI(P.cy(u.length,new B.iZ(b),!0,q))
w.b8(P.cy(t.length,new B.j_(a),!0,q))
a0=H.a([],z)
a1=H.a([],z)
C.a.h(a0,this.aP(a8.n(0,new V.p(0,0.05,0)),this.a,0.5,0.5))
C.a.h(a1,this.aP(a8.n(0,new V.p(0,-0.1,0)),p,0.5,0.5))
for(o=0;o<=1;o+=0.1){z=-6.283185307179586*o
m=Math.cos(z)
l=Math.sin(z)
a2=new V.aN(m,0,-l,0,1,0,l,0,m)
d=a2.O(new V.p(0.4,-0.15,0))
c=a2.O(new V.p(0.5,0,0))
z=d.a
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.e(z)
p=d.b
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.e(p)
n=d.c
if(typeof r!=="number")return r.n()
if(typeof n!=="number")return H.e(n)
j=c.a
if(typeof j!=="number")return j.n()
i=c.c
if(typeof i!=="number")return i.n()
h=$.$get$a_()
g=$.$get$a2()
C.a.h(a0,F.bq(null,null,null,new V.p(y+z,s+p,r+n),null,new V.M(j+0.5,i+0.5),null,new Z.ad(h.a|g.a|$.$get$ae().a),0))
g=6.283185307179586*o
m=Math.cos(g)
l=Math.sin(g)
a3=new V.aN(m,0,-l,0,1,0,l,0,m)
a4=a3.O(new V.p(0.4,-0.15,0))
a5=a3.O(new V.p(0.5,0,0))
g=a4.a
if(typeof g!=="number")return H.e(g)
h=a4.b
if(typeof h!=="number")return H.e(h)
i=a4.c
if(typeof i!=="number")return H.e(i)
j=a5.a
if(typeof j!=="number")return j.n()
n=a5.c
if(typeof n!=="number")return n.n()
p=$.$get$a_()
z=$.$get$a2()
C.a.h(a1,F.bq(null,null,null,new V.p(y+g,s+h,r+i),null,new V.M(j+0.5,n+0.5),null,new Z.ad(p.a|z.a|$.$get$ae().a),0))}a6=x.b9(a0)
a7=w.b9(a1)
x.b8(P.cy(a0.length,new B.j0(a6),!0,q))
w.b8(P.cy(a1.length,new B.j1(a7),!0,q))},
q:{
di:function(a,b){var z,y,x
z=new B.iY(new V.E(0,1,0),new V.E(0,-1,0),new V.E(1,0,0),new V.E(-1,0,0),new V.E(0,0,1),new V.E(0,0,-1),new V.p(-0.5,0.5,0.5),new V.p(0.5,0.5,0.5),new V.p(-0.5,-0.5,0.5),new V.p(0.5,-0.5,0.5),new V.p(-0.5,0.5,-0.5),new V.p(0.5,0.5,-0.5),new V.p(-0.5,-0.5,-0.5),new V.p(0.5,-0.5,-0.5),a,b)
if(b==null){y=$.$get$a_()
x=$.$get$a2()
z.dx=new Z.ad(y.a|x.a|$.$get$ae().a)}y=a==null?null:a.d
y=y==null?null:y.length
if(y==null)y=1
y=new Array(y)
y.fixed$length=Array
z.dy=H.a(y,[F.eE])
return z}}},
iZ:{"^":"v:6;a",
$1:function(a){return this.a+a}},
j_:{"^":"v:6;a",
$1:function(a){return this.a+a}},
j0:{"^":"v:6;a",
$1:function(a){return this.a+a}},
j1:{"^":"v:6;a",
$1:function(a){return this.a+a}},
jW:{"^":"b;a,0b,0c,0d,0e",
eH:function(a){var z,y,x,w,v,u,t
z=new B.hF(this)
z.b=L.io(0)
this.b=z
this.c=H.a([],[B.dS])
this.d=H.a([],[E.ah])
for(z=this.a.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
v=this.d;(v&&C.a).h(v,E.bg(null,!0,null,"",null,w))}for(u=-144;u<144;u+=24)for(t=-144;t<144;t+=24){z=this.c;(z&&C.a).h(z,B.hd(u,t,this))}this.b.hX()},
b_:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.a===a&&w.b===b)return w}return},
t:function(a,b,c){var z,y,x,w,v,u
z=C.e.a0(J.cg(a).aH(a),24)*24
y=C.e.a0(J.cg(c).aH(c),24)*24
if(a<0)z-=24
if(c<0)y-=24
x=this.b_(z,y)
w=C.h.b0(a)-z
v=J.cj(b)
u=C.h.b0(c)-y
if(w<0)w+=24
return new B.h8(w,v,u<0?u+24:u,z,y,x)},
a6:[function(a,b){var z,y,x,w,v,u,t,s,r
H.i(b,"$isn")
z=this.e.x.f
y=z.O(new V.p(0,0,0))
x=z.O(new V.p(0,0,-24))
w=new V.M(y.a,y.c)
v=new V.M(x.a,x.c)
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.iM()
r.iN(w,v)}},"$1","giL",5,0,0],
q:{
jX:function(a){var z=new B.jW(a)
z.eH(a)
return z}}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eg.prototype
return J.ef.prototype}if(typeof a=="string")return J.d4.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.hL.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.bc=function(a){if(typeof a=="string")return J.d4.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.dE=function(a){if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.cg=function(a){if(typeof a=="number")return J.cw.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.dt.prototype
return a}
J.c2=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
return a}if(a instanceof P.b)return a
return J.cI(a)}
J.Y=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).u(a,b)}
J.fW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cg(a).U(a,b)}
J.fX=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lI(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bc(a).k(a,b)}
J.fY=function(a,b,c){return J.c2(a).fW(a,b,c)}
J.fZ=function(a,b,c,d){return J.c2(a).dF(a,b,c,d)}
J.cM=function(a,b,c){return J.bc(a).hM(a,b,c)}
J.cN=function(a,b){return J.dE(a).J(a,b)}
J.cj=function(a){return J.cg(a).b0(a)}
J.h_=function(a,b){return J.dE(a).M(a,b)}
J.bf=function(a){return J.P(a).gY(a)}
J.c3=function(a){return J.dE(a).ga1(a)}
J.bA=function(a){return J.bc(a).gl(a)}
J.h0=function(a,b){return J.c2(a).iv(a,b)}
J.cO=function(a){return J.cg(a).aH(a)}
J.at=function(a){return J.P(a).i(a)}
I.dH=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cT.prototype
C.z=J.q.prototype
C.a=J.bk.prototype
C.A=J.ef.prototype
C.e=J.eg.prototype
C.B=J.eh.prototype
C.h=J.cw.prototype
C.i=J.d4.prototype
C.I=J.ca.prototype
C.r=H.ii.prototype
C.J=W.ik.prototype
C.t=J.ir.prototype
C.K=P.dg.prototype
C.m=J.dt.prototype
C.u=W.bV.prototype
C.v=W.jV.prototype
C.w=new P.ip()
C.x=new P.jJ()
C.j=new P.kJ()
C.b=new A.cp(0,"ColorSourceType.None")
C.f=new A.cp(1,"ColorSourceType.Solid")
C.c=new A.cp(2,"ColorSourceType.Texture2D")
C.d=new A.cp(3,"ColorSourceType.TextureCube")
C.l=new P.bD(0)
C.y=new P.bD(5e6)
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
C.o=function(hooks) { return hooks; }

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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=H.a(I.dH([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.n=new P.jI(!1)
$.aB=0
$.bB=null
$.dN=null
$.dy=!1
$.fL=null
$.fF=null
$.fS=null
$.cH=null
$.cJ=null
$.dF=null
$.bt=null
$.bY=null
$.bZ=null
$.dz=!1
$.T=C.j
$.e1=null
$.e0=null
$.e_=null
$.dZ=null
$.m=V.ib()
$.ey=null
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
I.$lazy(y,x,w)}})(["dY","$get$dY",function(){return H.fK("_$dart_dartClosure")},"d5","$get$d5",function(){return H.fK("_$dart_js")},"eX","$get$eX",function(){return H.aF(H.cB({
toString:function(){return"$receiver$"}}))},"eY","$get$eY",function(){return H.aF(H.cB({$method$:null,
toString:function(){return"$receiver$"}}))},"eZ","$get$eZ",function(){return H.aF(H.cB(null))},"f_","$get$f_",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f3","$get$f3",function(){return H.aF(H.cB(void 0))},"f4","$get$f4",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aF(H.f2(null))},"f0","$get$f0",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"f6","$get$f6",function(){return H.aF(H.f2(void 0))},"f5","$get$f5",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dv","$get$dv",function(){return P.jY()},"c_","$get$c_",function(){return[]},"fy","$get$fy",function(){return P.iJ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dW","$get$dW",function(){return{}},"e4","$get$e4",function(){return H.a([B.aE(5,2),B.aE(2,5),B.aE(-5,2),B.aE(-2,5),B.aE(5,-2),B.aE(2,-5),B.aE(-5,-2),B.aE(-2,-5)],[B.af])},"e5","$get$e5",function(){return B.aE(-0.211324865405187,-0.211324865405187)},"cY","$get$cY",function(){return B.aE(0.366025403784439,0.366025403784439)},"ff","$get$ff",function(){return Z.az(0)},"a_","$get$a_",function(){return Z.az(1)},"ae","$get$ae",function(){return Z.az(2)},"aR","$get$aR",function(){return Z.az(4)},"a2","$get$a2",function(){return Z.az(8)},"aS","$get$aS",function(){return Z.az(16)},"bT","$get$bT",function(){return Z.az(32)},"bU","$get$bU",function(){return Z.az(64)},"fe","$get$fe",function(){return Z.az(96)},"br","$get$br",function(){return Z.az(128)},"aQ","$get$aQ",function(){return Z.az(256)},"ea","$get$ea",function(){return V.ao(0)},"e9","$get$e9",function(){return V.ao(511)},"bj","$get$bj",function(){return V.ao(1)},"d0","$get$d0",function(){return V.ao(2)},"bi","$get$bi",function(){return V.ao(4)},"bG","$get$bG",function(){return V.ao(8)},"d1","$get$d1",function(){return V.ao(16)},"bF","$get$bF",function(){return V.ao(32)},"c7","$get$c7",function(){return V.ao(64)},"eb","$get$eb",function(){return V.ao(128)},"c6","$get$c6",function(){return V.ao(256)},"d_","$get$d_",function(){return V.ao(146)},"cl","$get$cl",function(){return H.a([100,101,102,103,104,105,108,109,110,111,112,1,113,200,201,202,203,204,205],[P.x])}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.n]},{func:1,ret:-1,opt:[D.n]},{func:1,ret:P.R},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:P.R,args:[F.av]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.x,[P.h,E.ah]]},{func:1,ret:P.R,args:[D.n]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.x,[P.h,U.a5]]},{func:1,ret:P.y},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.o,args:[P.x]},{func:1,ret:-1,args:[P.x,[P.h,D.a1]]},{func:1,args:[,]},{func:1,ret:P.R,args:[,]},{func:1,ret:P.R,args:[W.ai]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:-1,args:[P.x,[P.h,X.Q]]},{func:1,ret:-1,args:[P.x,[P.h,V.aC]]},{func:1,ret:P.R,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,ret:W.a0,args:[W.L]},{func:1,ret:P.a7,args:[P.y,P.y]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.a7,args:[W.L]},{func:1,ret:P.a7,args:[[P.h,D.a1]]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.R,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,ret:P.R,args:[P.X]},{func:1,ret:P.R,args:[{func:1,ret:-1}]},{func:1,ret:P.R,args:[P.bo]},{func:1,ret:V.p,args:[V.p,V.p]},{func:1,args:[P.o]},{func:1,args:[,P.o]},{func:1,ret:P.a7,args:[[P.h,X.Q]]}]
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
if(x==y)H.lT(d||a)
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
Isolate.dH=a.dH
Isolate.c1=a.c1
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
if(typeof dartMainRunner==="function")dartMainRunner(B.fP,[])
else B.fP([])})})()
//# sourceMappingURL=main.dart.js.map
