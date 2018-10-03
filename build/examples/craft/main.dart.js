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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dS(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.c5=function(){}
var dart=[["","",,H,{"^":"",mC:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dV==null){H.lY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.ft("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dl()]
if(v!=null)return v
v=H.m2(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$dl(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
q:{"^":"b;",
u:function(a,b){return a===b},
gZ:function(a){return H.bT(a)},
i:["eu",function(a){return"Instance of '"+H.bq(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i3:{"^":"q;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isa8:1},
ex:{"^":"q;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isR:1},
dm:{"^":"q;",
gZ:function(a){return 0},
i:["ev",function(a){return String(a)}]},
iJ:{"^":"dm;"},
dJ:{"^":"dm;"},
cl:{"^":"dm;",
i:function(a){var z=a[$.$get$ed()]
if(z==null)return this.ev(a)
return"JavaScript function for "+H.l(J.at(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isde:1},
bn:{"^":"q;$ti",
h:function(a,b){H.E(b,H.A(a,0))
if(!!a.fixed$length)H.u(P.K("add"))
a.push(b)},
W:function(a,b){var z
if(!!a.fixed$length)H.u(P.K("remove"))
for(z=0;z<a.length;++z)if(J.Z(a[z],b)){a.splice(z,1)
return!0}return!1},
aF:function(a,b){var z,y
H.p(b,"$ish",[H.A(a,0)],"$ash")
if(!!a.fixed$length)H.u(P.K("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.bF(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
i8:function(a){return this.B(a,"")},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
bX:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ao(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ao(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.A(a,0)])
return H.a(a.slice(b,c),[H.A(a,0)])},
gcH:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.i1())},
au:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Z(a[z],b))return!0
return!1},
i:function(a){return P.di(a,"[","]")},
ga1:function(a){return new J.au(a,a.length,0,[H.A(a,0)])},
gZ:function(a){return H.bT(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.K("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.cw(b,"newLength",null))
if(b<0)throw H.d(P.ao(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
return a[b]},
m:function(a,b,c){H.z(b)
H.E(c,H.A(a,0))
if(!!a.immutable$list)H.u(P.K("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
a[b]=c},
$isF:1,
$asF:I.c5,
$ish:1,
$isc:1,
q:{
i2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ao(a,0,4294967295,"length",null))
return J.eu(new Array(a),b)},
eu:function(a,b){return J.bM(H.a(a,[b]))},
bM:function(a){H.ct(a)
a.fixed$length=Array
return a}}},
mB:{"^":"bn;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cI:{"^":"q;",
cu:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gbS(b)
if(this.gbS(a)===z)return 0
if(this.gbS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbS:function(a){return a===0?1/a<0:a<0},
aa:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.K(""+a+".toInt()"))},
b6:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.K(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.K(""+a+".round()"))},
hS:function(a,b,c){if(C.e.cu(b,c)>0)throw H.d(H.aI(b))
if(this.cu(a,b)<0)return b
if(this.cu(a,c)>0)return c
return a},
ek:function(a,b){var z
if(b>20)throw H.d(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbS(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
cV:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dw(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.dw(a,b)},
dw:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.K("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
er:function(a,b){if(b<0)throw H.d(H.aI(b))
return b>31?0:a<<b>>>0},
bz:function(a,b){var z
if(a>0)z=this.hd(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hd:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.aI(b))
return a<b},
$isy:1,
$isY:1},
ew:{"^":"cI;",
cN:function(a,b){var z=this.er(1,b-1)
return((a&z-1)>>>0)-((a&z)>>>0)},
$isx:1},
ev:{"^":"cI;"},
dk:{"^":"q;",
ct:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b<0)throw H.d(H.aJ(a,b))
if(b>=a.length)H.u(H.aJ(a,b))
return a.charCodeAt(b)},
bv:function(a,b){if(b>=a.length)throw H.d(H.aJ(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.U(b)
if(typeof b!=="string")throw H.d(P.cw(b,null,null))
return a+b},
bY:function(a,b,c){H.z(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cM(b,null,null))
if(b>c)throw H.d(P.cM(b,null,null))
if(c>a.length)throw H.d(P.cM(c,null,null))
return a.substring(b,c)},
cX:function(a,b){return this.bY(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.x)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
io:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aM:function(a,b){return this.io(a,b," ")},
hT:function(a,b,c){if(c>a.length)throw H.d(P.ao(c,0,a.length,null,null))
return H.h8(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isF:1,
$asF:I.c5,
$iseO:1,
$iso:1}}],["","",,H,{"^":"",
i1:function(){return new P.jp("No element")},
a9:{"^":"jW;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.ct(this.a,b)},
$asdK:function(){return[P.x]},
$asw:function(){return[P.x]},
$ash:function(){return[P.x]},
$asc:function(){return[P.x]}},
hJ:{"^":"h;"},
eB:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.bg(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.bF(z))
w=this.c
if(typeof x!=="number")return H.e(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ik:{"^":"h;a,b,$ti",
ga1:function(a){return new H.il(J.bC(this.a),this.b,this.$ti)},
gl:function(a){return J.bD(this.a)},
J:function(a,b){return this.b.$1(J.d_(this.a,b))},
$ash:function(a,b){return[b]}},
il:{"^":"dj;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asdj:function(a,b){return[b]}},
kb:{"^":"h;a,b,$ti",
ga1:function(a){return new H.kc(J.bC(this.a),this.b,this.$ti)}},
kc:{"^":"dj;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cE:{"^":"b;$ti"},
dK:{"^":"b;$ti",
m:function(a,b,c){H.z(b)
H.E(c,H.aA(this,"dK",0))
throw H.d(P.K("Cannot modify an unmodifiable list"))}},
jW:{"^":"cJ+dK;"}}],["","",,H,{"^":"",
lT:function(a){return init.types[H.z(a)]},
m0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isI},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.d(H.aI(a))
return z},
bT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iV:function(a,b){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.j(z,3)
y=H.U(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
bq:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.P(a).$isdJ){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bv(w,0)===36)w=C.i.cX(w,1)
r=H.dW(H.ct(H.bh(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iX:function(a){var z,y,x,w
z=H.a([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aI(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.bz(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aI(w))}return H.eR(z)},
eS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aI(x))
if(x<0)throw H.d(H.aI(x))
if(x>65535)return H.iX(a)}return H.eR(a)},
iW:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.bz(z,10))>>>0,56320|z&1023)}throw H.d(P.ao(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iU:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
iS:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
iO:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
iP:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
iR:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
iT:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
iQ:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
e:function(a){throw H.d(H.aI(a))},
j:function(a,b){if(a==null)J.bD(a)
throw H.d(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
z=H.z(J.bD(a))
if(!(b<0)){if(typeof z!=="number")return H.e(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cM(b,"index",null)},
lP:function(a,b,c){if(a>c)return new P.cL(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cL(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
aI:function(a){return new P.aK(!0,a,null,null)},
lK:function(a){if(typeof a!=="number")throw H.d(H.aI(a))
return a},
d:function(a){var z
if(a==null)a=new P.eN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ha})
z.name=""}else z.toString=H.ha
return z},
ha:function(){return J.at(this.dartException)},
u:function(a){throw H.d(a)},
B:function(a){throw H.d(P.bF(a))},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bz(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dn(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eM(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fc()
u=$.$get$fd()
t=$.$get$fe()
s=$.$get$ff()
r=$.$get$fj()
q=$.$get$fk()
p=$.$get$fh()
$.$get$fg()
o=$.$get$fm()
n=$.$get$fl()
m=v.ai(y)
if(m!=null)return z.$1(H.dn(H.U(y),m))
else{m=u.ai(y)
if(m!=null){m.method="call"
return z.$1(H.dn(H.U(y),m))}else{m=t.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=r.ai(y)
if(m==null){m=q.ai(y)
if(m==null){m=p.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=o.ai(y)
if(m==null){m=n.ai(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eM(H.U(y),m))}}return z.$1(new H.jV(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aK(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f0()
return a},
bA:function(a){var z
if(a==null)return new H.fJ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fJ(a)},
lS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
m_:function(a,b,c,d,e,f){H.i(a,"$isde")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.t("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var z
H.z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m_)
a.$identity=z
return z},
hx:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$isc){z.$reflectionInfo=d
x=H.j_(z).r}else x=d
w=e?Object.create(new H.jr().constructor.prototype):Object.create(new H.d2(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.n()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e8(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e3:H.d3
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
hu:function(a,b,c,d){var z=H.d3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e8:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hu(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.n()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bE
if(v==null){v=H.cy("self")
$.bE=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.n()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bE
if(v==null){v=H.cy("self")
$.bE=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hv:function(a,b,c,d){var z,y
z=H.d3
y=H.e3
switch(b?-1:a){case 0:throw H.d(H.j8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hw:function(a,b){var z,y,x,w,v,u,t,s
z=$.bE
if(z==null){z=H.cy("self")
$.bE=z}y=$.e2
if(y==null){y=H.cy("receiver")
$.e2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hv(w,!u,x,b)
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
dS:function(a,b,c,d,e,f,g){var z,y
z=J.bM(H.ct(b))
H.z(c)
y=!!J.P(d).$isc?J.bM(d):d
return H.hx(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ay(a,"String"))},
lQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"double"))},
m6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"num"))},
fY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ay(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ay(a,"int"))},
h6:function(a,b){throw H.d(H.ay(a,H.U(b).substring(3)))},
m8:function(a,b){var z=J.bg(b)
throw H.d(H.hs(a,z.bY(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.h6(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.m8(a,b)},
ct:function(a){if(a==null)return a
if(!!J.P(a).$isc)return a
throw H.d(H.ay(a,"List"))},
m1:function(a,b){if(a==null)return a
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
if($.dO)return a
$.dO=!0
try{if(H.cr(a,b))return a
z=H.cu(b)
y=H.ay(a,z)
throw H.d(y)}finally{$.dO=!1}},
dT:function(a,b){if(a!=null&&!H.dR(a,b))H.u(H.ay(a,H.cu(b)))
return a},
fT:function(a){var z
if(a instanceof H.v){z=H.fZ(J.P(a))
if(z!=null)return H.cu(z)
return"Closure"}return H.bq(a)},
mb:function(a){throw H.d(new P.hC(H.U(a)))},
h_:function(a){return init.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
bh:function(a){if(a==null)return
return a.$ti},
nq:function(a,b,c){return H.bB(a["$as"+H.l(c)],H.bh(b))},
bz:function(a,b,c,d){var z
H.U(c)
H.z(d)
z=H.bB(a["$as"+H.l(c)],H.bh(b))
return z==null?null:z[d]},
aA:function(a,b,c){var z
H.U(b)
H.z(c)
z=H.bB(a["$as"+H.l(b)],H.bh(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.z(b)
z=H.bh(a)
return z==null?null:z[b]},
cu:function(a){var z=H.bi(a,null)
return z},
bi:function(a,b){var z,y
H.p(b,"$isc",[P.o],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dW(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.l(b[y])}if('func' in a)return H.lA(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.p(b,"$isc",z,"$asc")
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
if(q!=null&&q!==P.b)t+=" extends "+H.bi(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bi(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bi(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bi(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.bi(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dW:function(a,b,c){var z,y,x,w,v,u
H.p(c,"$isc",[P.o],"$asc")
if(a==null)return""
z=new P.cp("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bi(u,c)}v="<"+z.i(0)+">"
return v},
bB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bh(a)
y=J.P(a)
if(y[b]==null)return!1
return H.fW(H.bB(y[d],z),null,c,null)},
p:function(a,b,c,d){var z,y
H.U(b)
H.ct(c)
H.U(d)
if(a==null)return a
z=H.c4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dW(c,0,null)
throw H.d(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
no:function(a,b,c){return a.apply(b,H.bB(J.P(b)["$as"+H.l(c)],H.bh(b)))},
h3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="R"||a===-1||a===-2||H.h3(z)}return!1},
dR:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="R"||b===-1||b===-2||H.h3(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cr(a,b)}y=J.P(a).constructor
x=H.bh(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dR(a,b))throw H.d(H.ay(a,H.cu(b)))
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
if('func' in c)return H.h2(a,b,c,d)
if('func' in a)return c.builtin$cls==="de"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bG" in y.prototype))return!1
w=y.prototype["$as"+"bG"]
v=H.bB(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cu(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fW(H.bB(r,z),b,u,d)},
h2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.m5(m,b,l,d)},
m5:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
np:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
m2:function(a){var z,y,x,w,v,u
z=H.U($.h0.$1(a))
y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.fV.$2(a,z))
if(z!=null){y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cX(x)
$.cU[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cW[z]=x
return x}if(v==="-"){u=H.cX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h5(a,x)
if(v==="*")throw H.d(P.ft(z))
if(init.leafTags[z]===true){u=H.cX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h5(a,x)},
h5:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dY(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cX:function(a){return J.dY(a,!1,null,!!a.$isI)},
m4:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cX(z)
else return J.dY(z,c,null,null)},
lY:function(){if(!0===$.dV)return
$.dV=!0
H.lZ()},
lZ:function(){var z,y,x,w,v,u,t,s
$.cU=Object.create(null)
$.cW=Object.create(null)
H.lU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h7.$1(v)
if(u!=null){t=H.m4(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lU:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.bw(C.F,H.bw(C.K,H.bw(C.p,H.bw(C.p,H.bw(C.J,H.bw(C.G,H.bw(C.H(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h0=new H.lV(v)
$.fV=new H.lW(u)
$.h7=new H.lX(t)},
bw:function(a,b){return a(b)||b},
h8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h9:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iZ:{"^":"b;a,b,c,d,e,f,r,0x",q:{
j_:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bM(z)
y=z[0]
x=z[1]
return new H.iZ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jJ:{"^":"b;a,b,c,d,e,f",
ai:function(a){var z,y,x
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
return new H.jJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fi:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iE:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eM:function(a,b){return new H.iE(a,b==null?null:b.method)}}},
i6:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
dn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i6(a,y,z?null:b.receiver)}}},
jV:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mc:{"^":"v:18;a",
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
$isax:1},
v:{"^":"b;",
i:function(a){return"Closure '"+H.bq(this).trim()+"'"},
gem:function(){return this},
$isde:1,
gem:function(){return this}},
f5:{"^":"v;"},
jr:{"^":"f5;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d2:{"^":"f5;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bT(this.a)
else y=typeof z!=="object"?J.bj(z):H.bT(z)
return(y^H.bT(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bq(z)+"'")},
q:{
d3:function(a){return a.a},
e3:function(a){return a.c},
cy:function(a){var z,y,x,w,v
z=new H.d2("self","target","receiver","name")
y=J.bM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jK:{"^":"a5;a",
i:function(a){return this.a},
q:{
ay:function(a,b){return new H.jK("TypeError: "+H.l(P.cD(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
hr:{"^":"a5;a",
i:function(a){return this.a},
q:{
hs:function(a,b){return new H.hr("CastError: "+H.l(P.cD(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
j7:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
j8:function(a){return new H.j7(a)}}},
aN:{"^":"ii;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaL:function(a){return new H.eA(this,[H.A(this,0)])},
dH:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dg(y,b)}else return this.i6(b)},
i6:function(a){var z=this.d
if(z==null)return!1
return this.cG(this.c6(z,J.bj(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.i7(b)},
i7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c6(z,J.bj(a)&0x3ffffff)
x=this.cG(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c8()
this.b=z}this.d5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c8()
this.c=y}this.d5(y,b,c)}else{x=this.d
if(x==null){x=this.c8()
this.d=x}w=J.bj(b)&0x3ffffff
v=this.c6(x,w)
if(v==null)this.ce(x,w,[this.c9(b,c)])
else{u=this.cG(v,b)
if(u>=0)v[u].b=c
else v.push(this.c9(b,c))}}},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.bF(this))
z=z.c}},
d5:function(a,b,c){var z
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
z=this.bw(a,b)
if(z==null)this.ce(a,b,this.c9(b,c))
else z.b=c},
fl:function(){this.r=this.r+1&67108863},
c9:function(a,b){var z,y
z=new H.ia(H.E(a,H.A(this,0)),H.E(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fl()
return z},
cG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Z(a[y].a,b))return y
return-1},
i:function(a){return P.eE(this)},
bw:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
dg:function(a,b){return this.bw(a,b)!=null},
c8:function(){var z=Object.create(null)
this.ce(z,"<non-identifier-key>",z)
this.fc(z,"<non-identifier-key>")
return z},
$isez:1},
ia:{"^":"b;a,b,0c,0d"},
eA:{"^":"hJ;a,$ti",
gl:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.ib(z,z.r,this.$ti)
y.c=z.e
return y}},
ib:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bF(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lV:{"^":"v:18;a",
$1:function(a){return this.a(a)}},
lW:{"^":"v:30;a",
$2:function(a,b){return this.a(a,b)}},
lX:{"^":"v:28;a",
$1:function(a){return this.a(H.U(a))}},
i4:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseO:1,
q:{
i5:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.en("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lR:function(a){return J.eu(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
m7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c0:function(a){var z,y,x,w
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
lz:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.lP(a,b,c))
return b},
iA:{"^":"q;",$isn9:1,"%":"DataView;ArrayBufferView;ds|fD|fE|iz|fF|fG|b5"},
ds:{"^":"iA;",
gl:function(a){return a.length},
$isF:1,
$asF:I.c5,
$isI:1,
$asI:I.c5},
iz:{"^":"fE;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.z(b)
H.lQ(c)
H.aH(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.y]},
$asw:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]},
$isc:1,
$asc:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
b5:{"^":"fG;",
m:function(a,b,c){H.z(b)
H.z(c)
H.aH(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.x]},
$asw:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
mK:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mL:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mM:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mN:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mO:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mP:{"^":"b5;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
iB:{"^":"b5;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
bX:function(a,b,c){return new Uint8Array(a.subarray(b,H.lz(b,c,a.length)))},
"%":";Uint8Array"},
fD:{"^":"ds+w;"},
fE:{"^":"fD+cE;"},
fF:{"^":"ds+w;"},
fG:{"^":"fF+cE;"}}],["","",,P,{"^":"",
kg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lH()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bx(new P.ki(z),1)).observe(y,{childList:true})
return new P.kh(z,y,x)}else if(self.setImmediate!=null)return P.lI()
return P.lJ()},
nd:[function(a){self.scheduleImmediate(H.bx(new P.kj(H.f(a,{func:1,ret:-1})),0))},"$1","lH",4,0,11],
ne:[function(a){self.setImmediate(H.bx(new P.kk(H.f(a,{func:1,ret:-1})),0))},"$1","lI",4,0,11],
nf:[function(a){P.dF(C.m,H.f(a,{func:1,ret:-1}))},"$1","lJ",4,0,11],
dF:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.e.a_(a.a,1000)
return P.lf(z<0?0:z,b)},
f7:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.ap]})
z=C.e.a_(a.a,1000)
return P.lg(z<0?0:z,b)},
lD:function(a,b){if(H.cr(a,{func:1,args:[P.b,P.ax]}))return b.iy(a,null,P.b,P.ax)
if(H.cr(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lC:function(){var z,y
for(;z=$.bv,z!=null;){$.c2=null
y=z.b
$.bv=y
if(y==null)$.c1=null
z.a.$0()}},
nn:[function(){$.dP=!0
try{P.lC()}finally{$.c2=null
$.dP=!1
if($.bv!=null)$.$get$dL().$1(P.fX())}},"$0","fX",0,0,3],
fS:function(a){var z=new P.fy(H.f(a,{func:1,ret:-1}))
if($.bv==null){$.c1=z
$.bv=z
if(!$.dP)$.$get$dL().$1(P.fX())}else{$.c1.b=z
$.c1=z}},
lG:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bv
if(z==null){P.fS(a)
$.c2=$.c1
return}y=new P.fy(a)
x=$.c2
if(x==null){y.b=z
$.c2=y
$.bv=y}else{y.b=x.b
x.b=y
$.c2=y
if(y.b==null)$.c1=y}},
m9:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cT(null,null,C.j,a)
return}y.toString
P.cT(null,null,y,H.f(y.cp(a),z))},
dE:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dF(a,b)}return P.dF(a,H.f(y.cp(b),z))},
cO:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.ap]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.f7(a,b)}x=y.dD(b,P.ap)
$.T.toString
return P.f7(a,H.f(x,z))},
cS:function(a,b,c,d,e){var z={}
z.a=d
P.lG(new P.lE(z,e))},
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
lF:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cT:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cp(d):c.hQ(d,-1)
P.fS(d)},
ki:{"^":"v:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kh:{"^":"v:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kj:{"^":"v:2;a",
$0:function(){this.a.$0()}},
kk:{"^":"v:2;a",
$0:function(){this.a.$0()}},
fM:{"^":"b;a,0b,c",
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bx(new P.li(this,b),0),a)
else throw H.d(P.K("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bx(new P.lh(this,a,Date.now(),b),0),a)
else throw H.d(P.K("Periodic timer."))},
$isap:1,
q:{
lf:function(a,b){var z=new P.fM(!0,0)
z.eP(a,b)
return z},
lg:function(a,b){var z=new P.fM(!1,0)
z.eQ(a,b)
return z}}},
li:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lh:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ex(w,x)}z.c=y
this.d.$1(z)}},
bu:{"^":"b;0a,b,c,d,e,$ti",
ie:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.f(this.d,{func:1,ret:P.a8,args:[P.b]}),a.a,P.a8,P.b)},
i5:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.cr(z,{func:1,args:[P.b,P.ax]}))return H.dT(w.iF(z,a.a,a.b,null,y,P.ax),x)
else return H.dT(w.cM(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aU:{"^":"b;dv:a<,b,0h5:c<,$ti",
ej:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lD(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aU(0,$.T,[c])
w=b==null?1:3
this.d6(new P.bu(x,w,a,b,[z,c]))
return x},
iK:function(a,b){return this.ej(a,null,b)},
d6:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isbu")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaU")
z=y.a
if(z<4){y.d6(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cT(null,null,z,H.f(new P.ky(this,a),{func:1,ret:-1}))}},
dr:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isbu")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaU")
y=u.a
if(y<4){u.dr(a)
return}this.a=y
this.c=u.c}z.a=this.by(a)
y=this.b
y.toString
P.cT(null,null,y,H.f(new P.kD(z,this),{func:1,ret:-1}))}},
cc:function(){var z=H.i(this.c,"$isbu")
this.c=null
return this.by(z)},
by:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dd:function(a){var z,y,x,w
z=H.A(this,0)
H.dT(a,{futureOr:1,type:z})
y=this.$ti
x=H.c4(a,"$isbG",y,"$asbG")
if(x){z=H.c4(a,"$isaU",y,null)
if(z)P.fA(a,this)
else P.kz(a,this)}else{w=this.cc()
H.E(a,z)
this.a=4
this.c=a
P.c_(this,w)}},
c2:[function(a,b){var z
H.i(b,"$isax")
z=this.cc()
this.a=8
this.c=new P.al(a,b)
P.c_(this,z)},function(a){return this.c2(a,null)},"j0","$2","$1","gf8",4,2,41],
$isbG:1,
q:{
kz:function(a,b){var z,y,x
b.a=1
try{a.ej(new P.kA(b),new P.kB(b),null)}catch(x){z=H.aW(x)
y=H.bA(x)
P.m9(new P.kC(b,z,y))}},
fA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaU")
if(z>=4){y=b.cc()
b.a=a.a
b.c=a.c
P.c_(b,y)}else{y=H.i(b.c,"$isbu")
b.a=2
b.c=a
a.dr(y)}},
c_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c_(z.a,b)}y=z.a
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
P.cS(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kF(x,b,r).$0()}else if((y&2)!==0)new P.kE(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.P(y).$isbG){if(y.a>=4){n=H.i(t.c,"$isbu")
t.c=null
b=t.by(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fA(y,t)
return}}m=b.b
n=H.i(m.c,"$isbu")
m.c=null
b=m.by(n)
y=x.a
u=x.b
if(!y){H.E(u,H.A(m,0))
m.a=4
m.c=u}else{H.i(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
ky:{"^":"v:2;a,b",
$0:function(){P.c_(this.a,this.b)}},
kD:{"^":"v:2;a,b",
$0:function(){P.c_(this.b,this.a.a)}},
kA:{"^":"v:14;a",
$1:function(a){var z=this.a
z.a=0
z.dd(a)}},
kB:{"^":"v:38;a",
$2:function(a,b){this.a.c2(a,H.i(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kC:{"^":"v:2;a,b,c",
$0:function(){this.a.c2(this.b,this.c)}},
kG:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ei(H.f(w.d,{func:1}),null)}catch(v){y=H.aW(v)
x=H.bA(v)
if(this.d){w=H.i(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.P(z).$isbG){if(z instanceof P.aU&&z.gdv()>=4){if(z.gdv()===8){w=this.b
w.b=H.i(z.gh5(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iK(new P.kH(t),null)
w.a=!1}}},
kH:{"^":"v:39;a",
$1:function(a){return this.a}},
kF:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.E(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.cM(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aW(t)
y=H.bA(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kE:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isal")
w=this.c
if(w.ie(z)&&w.e!=null){v=this.b
v.b=w.i5(z)
v.a=!1}}catch(u){y=H.aW(u)
x=H.bA(u)
w=H.i(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fy:{"^":"b;a,0b"},
dA:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aU(0,$.T,[P.x])
z.a=0
this.ia(new P.ju(z,this),!0,new P.jv(z,y),y.gf8())
return y}},
ju:{"^":"v;a,b",
$1:function(a){H.E(a,H.aA(this.b,"dA",0));++this.a.a},
$S:function(){return{func:1,ret:P.R,args:[H.aA(this.b,"dA",0)]}}},
jv:{"^":"v:2;a,b",
$0:function(){this.b.dd(this.a.a)}},
f2:{"^":"b;$ti"},
jt:{"^":"b;"},
ap:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lo:{"^":"b;",$isnc:1},
lE:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
l1:{"^":"lo;",
iG:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fQ(null,null,this,a,-1)}catch(x){z=H.aW(x)
y=H.bA(x)
P.cS(null,null,this,z,H.i(y,"$isax"))}},
iH:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fR(null,null,this,a,b,-1,c)}catch(x){z=H.aW(x)
y=H.bA(x)
P.cS(null,null,this,z,H.i(y,"$isax"))}},
hQ:function(a,b){return new P.l3(this,H.f(a,{func:1,ret:b}),b)},
cp:function(a){return new P.l2(this,H.f(a,{func:1,ret:-1}))},
dD:function(a,b){return new P.l4(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ei:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fQ(null,null,this,a,b)},
cM:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.T===C.j)return a.$1(b)
return P.fR(null,null,this,a,b,c,d)},
iF:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.T===C.j)return a.$2(b,c)
return P.lF(null,null,this,a,b,c,d,e,f)},
iy:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
l3:{"^":"v;a,b,c",
$0:function(){return this.a.ei(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l2:{"^":"v:3;a,b",
$0:function(){return this.a.iG(this.b)}},
l4:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.iH(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
id:function(a,b,c){H.ct(a)
return H.p(H.lS(a,new H.aN(0,0,[b,c])),"$isez",[b,c],"$asez")},
ic:function(a,b){return new H.aN(0,0,[a,b])},
ie:function(a,b,c,d){return new P.kO(0,0,[d])},
i0:function(a,b,c){var z,y
if(P.dQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c3()
C.a.h(y,a)
try{P.lB(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.f3(b,H.m1(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
di:function(a,b,c){var z,y,x
if(P.dQ(a))return b+"..."+c
z=new P.cp(b)
y=$.$get$c3()
C.a.h(y,a)
try{x=z
x.a=P.f3(x.gaT(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gaT()+c
y=z.gaT()
return y.charCodeAt(0)==0?y:y},
dQ:function(a){var z,y
for(z=0;y=$.$get$c3(),z<y.length;++z)if(a===y[z])return!0
return!1},
lB:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.H();t=s,s=r){r=z.gP(z);++x
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
eE:function(a){var z,y,x
z={}
if(P.dQ(a))return"{...}"
y=new P.cp("")
try{C.a.h($.$get$c3(),a)
x=y
x.a=x.gaT()+"{"
z.a=!0
J.hf(a,new P.ij(z,y))
z=y
z.a=z.gaT()+"}"}finally{z=$.$get$c3()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gaT()
return z.charCodeAt(0)==0?z:z},
kO:{"^":"kI;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){return P.fC(this,this.r,H.A(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dN()
this.b=z}return this.da(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dN()
this.c=y}return this.da(y,b)}else return this.eR(0,b)},
eR:function(a,b){var z,y,x
H.E(b,H.A(this,0))
z=this.d
if(z==null){z=P.dN()
this.d=z}y=this.de(b)
x=z[y]
if(x==null)z[y]=[this.c1(b)]
else{if(this.dj(x,b)>=0)return!1
x.push(this.c1(b))}return!0},
W:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.ds(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ds(this.c,b)
else return this.h_(0,b)},
h_:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fh(z,b)
x=this.dj(y,b)
if(x<0)return!1
this.dz(y.splice(x,1)[0])
return!0},
da:function(a,b){H.E(b,H.A(this,0))
if(H.i(a[b],"$isdM")!=null)return!1
a[b]=this.c1(b)
return!0},
ds:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isdM")
if(z==null)return!1
this.dz(z)
delete a[b]
return!0},
dc:function(){this.r=this.r+1&67108863},
c1:function(a){var z,y
z=new P.dM(H.E(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dc()
return z},
dz:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dc()},
de:function(a){return J.bj(a)&0x3ffffff},
fh:function(a,b){return a[this.de(b)]},
dj:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Z(a[y].a,b))return y
return-1},
q:{
dN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dM:{"^":"b;a,0b,0c"},
kP:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bF(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.A(this,0))
this.c=z.b
return!0}}},
q:{
fC:function(a,b,c){var z=new P.kP(a,b,[c])
z.c=a.e
return z}}},
kI:{"^":"j9;"},
cJ:{"^":"kQ;",$ish:1,$isc:1},
w:{"^":"b;$ti",
ga1:function(a){return new H.eB(a,this.gl(a),0,[H.bz(this,a,"w",0)])},
J:function(a,b){return this.k(a,b)},
iM:function(a,b){var z,y,x
z=H.a([],[H.bz(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.e(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
iL:function(a){return this.iM(a,!0)},
i1:function(a,b,c,d){var z
H.E(d,H.bz(this,a,"w",0))
P.du(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.di(a,"[","]")}},
ii:{"^":"ak;"},
ij:{"^":"v:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ak:{"^":"b;$ti",
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.bz(this,a,"ak",0),H.bz(this,a,"ak",1)]})
for(z=J.bC(this.gaL(a));z.H();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bD(this.gaL(a))},
i:function(a){return P.eE(a)},
$isab:1},
jb:{"^":"b;$ti",
i:function(a){return P.di(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e0("index"))
if(b<0)H.u(P.ao(b,0,null,"index",null))
for(z=P.fC(this,this.r,H.A(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
$ish:1},
j9:{"^":"jb;"},
kQ:{"^":"b+w;"}}],["","",,P,{"^":"",d8:{"^":"b;$ti"},ea:{"^":"jt;$ti"},hL:{"^":"d8;",
$asd8:function(){return[P.o,[P.c,P.x]]}},k0:{"^":"hL;a"},k1:{"^":"ea;",
hV:function(a,b,c){var z,y,x,w
z=a.length
P.du(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ln(0,0,x)
if(w.fe(a,b,z)!==z)w.dB(C.i.ct(a,z-1),0)
return C.t.bX(x,0,w.b)},
hU:function(a){return this.hV(a,0,null)},
$asea:function(){return[P.o,[P.c,P.x]]}},ln:{"^":"b;a,b,c",
dB:function(a,b){var z,y,x,w,v
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
fe:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.ct(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bv(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dB(w,C.i.bv(a,u)))x=u}else if(w<=2047){v=this.b
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
h1:function(a,b,c){var z=H.iV(a,c)
if(z!=null)return z
throw H.d(P.en(a,null,null))},
hN:function(a){var z=J.P(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.bq(a)+"'"},
ig:function(a,b,c,d){var z,y
H.E(b,d)
z=J.i2(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.p(z,"$isc",[d],"$asc")},
eC:function(a,b,c){var z,y,x
z=[c]
y=H.a([],z)
for(x=J.bC(a);x.H();)C.a.h(y,H.E(x.gP(x),c))
if(b)return y
return H.p(J.bM(y),"$isc",z,"$asc")},
dB:function(a,b,c){var z,y
z=P.x
H.p(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.p(a,"$isbn",[z],"$asbn")
y=a.length
c=P.du(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.T()
z=c<y}else z=!0
return H.eS(z?C.a.bX(a,b,c):a)}return P.jw(a,b,c)},
jw:function(a,b,c){var z,y,x
H.p(a,"$ish",[P.x],"$ash")
z=J.bC(a)
for(y=0;y<b;++y)if(!z.H())throw H.d(P.ao(b,0,y,null,null))
x=[]
for(;z.H();)x.push(z.gP(z))
return H.eS(x)},
j0:function(a,b,c){return new H.i4(a,H.i5(a,!1,!0,!1))},
fP:function(a,b,c,d){var z,y,x,w,v,u
H.p(a,"$isc",[P.x],"$asc")
if(c===C.o){z=$.$get$fO().b
z=z.test(b)}else z=!1
if(z)return b
y=C.y.hU(H.E(b,H.aA(c,"d8",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.iW(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hN(a)},
t:function(a){return new P.fz(a)},
cK:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.x]})
z=H.a([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
e_:function(a){H.m7(a)},
a8:{"^":"b;"},
"+bool":0,
aL:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aL))return!1
return this.a===b.a&&this.b===b.b},
gZ:function(a){var z=this.a
return(z^C.e.bz(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hD(H.iU(this))
y=P.ci(H.iS(this))
x=P.ci(H.iO(this))
w=P.ci(H.iP(this))
v=P.ci(H.iR(this))
u=P.ci(H.iT(this))
t=P.hE(H.iQ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"Y;"},
"+double":0,
aM:{"^":"b;a",
T:function(a,b){return C.e.T(this.a,H.i(b,"$isaM").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aM))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hI()
y=this.a
if(y<0)return"-"+new P.aM(0-y).i(0)
x=z.$1(C.e.a_(y,6e7)%60)
w=z.$1(C.e.a_(y,1e6)%60)
v=new P.hH().$1(y%1e6)
return""+C.e.a_(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
q:{
ej:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hH:{"^":"v:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hI:{"^":"v:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eN:{"^":"a5;",
i:function(a){return"Throw of null."}},
aK:{"^":"a5;a,b,c,d",
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc4()+y+x
if(!this.a)return w
v=this.gc3()
u=P.cD(this.b)
return w+v+": "+H.l(u)},
q:{
hj:function(a){return new P.aK(!1,null,null,a)},
cw:function(a,b,c){return new P.aK(!0,a,b,c)},
e0:function(a){return new P.aK(!1,null,a,"Must not be null")}}},
cL:{"^":"aK;e,f,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cM:function(a,b,c){return new P.cL(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
du:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.e(a)
if(0<=a){if(typeof c!=="number")return H.e(c)
z=a>c}else z=!0
if(z)throw H.d(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
z=b>c}else z=!0
if(z)throw H.d(P.ao(b,a,c,"end",f))
return b}return c}}},
i_:{"^":"aK;e,l:f>,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
S:function(a,b,c,d,e){var z=H.z(e!=null?e:J.bD(b))
return new P.i_(b,z,!0,a,c,"Index out of range")}}},
jX:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
K:function(a){return new P.jX(a)}}},
jU:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ft:function(a){return new P.jU(a)}}},
jp:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hz:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cD(z))+"."},
q:{
bF:function(a){return new P.hz(a)}}},
iH:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
f0:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hC:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fz:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hU:{"^":"b;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.bY(x,0,75)+"..."
return y+"\n"+x},
q:{
en:function(a,b,c){return new P.hU(a,b,c)}}},
x:{"^":"Y;"},
"+int":0,
h:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga1(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e0("index"))
if(b<0)H.u(P.ao(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.H();){x=z.gP(z)
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
i:function(a){return P.i0(this,"(",")")}},
dj:{"^":"b;$ti"},
c:{"^":"b;$ti",$ish:1},
"+List":0,
ab:{"^":"b;$ti"},
R:{"^":"b;",
gZ:function(a){return P.b.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gZ:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.bq(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
o:{"^":"b;",$iseO:1},
"+String":0,
cp:{"^":"b;aT:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
f3:function(a,b,c){var z=J.bC(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.H())}else{a+=H.l(z.gP(z))
for(;z.H();)a=a+c+H.l(z.gP(z))}return a}}}}],["","",,W,{"^":"",
hi:function(a){var z=document.createElement("a")
return z},
d6:function(a,b){var z=document.createElement("canvas")
return z},
hK:function(a){H.i(a,"$isai")
return"wheel"},
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fB:function(a,b,c,d){var z,y
z=W.cQ(W.cQ(W.cQ(W.cQ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fU:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dD(a,b)},
bL:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
md:{"^":"q;0l:length=","%":"AccessibleNodeList"},
me:{"^":"bL;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mf:{"^":"bL;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
hn:{"^":"q;","%":";Blob"},
d5:{"^":"bL;",
bV:function(a,b,c){if(c!=null)return a.getContext(b,P.lL(c,null))
return a.getContext(b)},
en:function(a,b){return this.bV(a,b,null)},
$isd5:1,
"%":"HTMLCanvasElement"},
e6:{"^":"q;",$ise6:1,"%":"CanvasRenderingContext2D"},
ml:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mn:{"^":"hB;0l:length=","%":"CSSPerspective"},
aZ:{"^":"q;",$isaZ:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mo:{"^":"ko;0l:length=",
eo:function(a,b){var z=a.getPropertyValue(this.f5(a,b))
return z==null?"":z},
f5:function(a,b){var z,y
z=$.$get$eb()
y=z[b]
if(typeof y==="string")return y
y=this.he(a,b)
z[b]=y
return y},
he:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hF()+b
if(z in a)return z
return b},
gcq:function(a){return a.bottom},
gav:function(a){return a.height},
gah:function(a){return a.left},
gal:function(a){return a.right},
gbo:function(a){return a.top},
gaz:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hA:{"^":"b;",
gah:function(a){return this.eo(a,"left")}},
ec:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hB:{"^":"q;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mp:{"^":"ec;0l:length=","%":"CSSTransformValue"},
mq:{"^":"ec;0l:length=","%":"CSSUnparsedValue"},
mr:{"^":"q;0l:length=","%":"DataTransferItemList"},
ms:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
mt:{"^":"kq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.p(c,"$isa7",[P.Y],"$asa7")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.Y]]},
$isI:1,
$asI:function(){return[[P.a7,P.Y]]},
$asw:function(){return[[P.a7,P.Y]]},
$ish:1,
$ash:function(){return[[P.a7,P.Y]]},
$isc:1,
$asc:function(){return[[P.a7,P.Y]]},
$asC:function(){return[[P.a7,P.Y]]},
"%":"ClientRectList|DOMRectList"},
hG:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaz(a))+" x "+H.l(this.gav(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isa7",[P.Y],"$asa7")
if(!z)return!1
z=J.c6(b)
return a.left===z.gah(b)&&a.top===z.gbo(b)&&this.gaz(a)===z.gaz(b)&&this.gav(a)===z.gav(b)},
gZ:function(a){return W.fB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaz(a)&0x1FFFFFFF,this.gav(a)&0x1FFFFFFF)},
gcq:function(a){return a.bottom},
gav:function(a){return a.height},
gah:function(a){return a.left},
gal:function(a){return a.right},
gbo:function(a){return a.top},
gaz:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
mu:{"^":"ks;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[P.o]},
"%":"DOMStringList"},
mv:{"^":"q;0l:length=","%":"DOMTokenList"},
kn:{"^":"cJ;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.i(z[b],"$isa1")},
m:function(a,b,c){var z
H.z(b)
H.i(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.iL(this)
return new J.au(z,z.length,0,[H.A(z,0)])},
$asw:function(){return[W.a1]},
$ash:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"L;",
gdF:function(a){return new W.kn(a,a.children)},
gdG:function(a){return P.iY(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
ah:{"^":"q;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ai:{"^":"q;",
dC:["es",function(a,b,c,d){H.f(c,{func:1,args:[W.ah]})
if(c!=null)this.eT(a,b,c,!1)}],
eT:function(a,b,c,d){return a.addEventListener(b,H.bx(H.f(c,{func:1,args:[W.ah]}),1),!1)},
$isai:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fH|fI|fK|fL"},
b_:{"^":"hn;",$isb_:1,"%":"File"},
mw:{"^":"kx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb_")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.b_]},
"%":"FileList"},
mx:{"^":"ai;0l:length=","%":"FileWriter"},
my:{"^":"bL;0l:length=","%":"HTMLFormElement"},
b0:{"^":"q;",$isb0:1,"%":"Gamepad"},
mz:{"^":"q;0l:length=","%":"History"},
mA:{"^":"kK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cG:{"^":"q;0dJ:data=",$iscG:1,"%":"ImageData"},
es:{"^":"bL;",$ises:1,"%":"HTMLImageElement"},
bO:{"^":"dG;",$isbO:1,"%":"KeyboardEvent"},
mE:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
mF:{"^":"q;0l:length=","%":"MediaList"},
mG:{"^":"ai;",
dC:function(a,b,c,d){H.f(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.es(a,b,c,!1)},
"%":"MessagePort"},
mH:{"^":"kR;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaL:function(a){var z=H.a([],[P.o])
this.N(a,new W.iw(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"MIDIInputMap"},
iw:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mI:{"^":"kS;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaL:function(a){var z=H.a([],[P.o])
this.N(a,new W.ix(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
ix:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b4:{"^":"q;",$isb4:1,"%":"MimeType"},
mJ:{"^":"kU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb4")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$isI:1,
$asI:function(){return[W.b4]},
$asw:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asC:function(){return[W.b4]},
"%":"MimeTypeArray"},
aw:{"^":"dG;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
km:{"^":"cJ;a",
m:function(a,b,c){var z,y
H.z(b)
H.i(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.j(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.em(z,z.length,-1,[H.bz(C.M,z,"C",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asw:function(){return[W.L]},
$ash:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"ai;",
iB:function(a,b){var z,y
try{z=a.parentNode
J.hd(z,b,a)}catch(y){H.aW(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eu(a):z},
h0:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iD:{"^":"kW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
b6:{"^":"q;0l:length=",$isb6:1,"%":"Plugin"},
mS:{"^":"l_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb6")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.b6]},
"%":"PluginArray"},
mU:{"^":"l5;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaL:function(a){var z=H.a([],[P.o])
this.N(a,new W.j6(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"RTCStatsReport"},
j6:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mW:{"^":"bL;0l:length=","%":"HTMLSelectElement"},
b9:{"^":"ai;",$isb9:1,"%":"SourceBuffer"},
mX:{"^":"fI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb9")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.b9]},
"%":"SourceBufferList"},
ba:{"^":"q;",$isba:1,"%":"SpeechGrammar"},
mY:{"^":"l7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isba")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.ba]},
"%":"SpeechGrammarList"},
bb:{"^":"q;0l:length=",$isbb:1,"%":"SpeechRecognitionResult"},
n_:{"^":"la;",
k:function(a,b){return a.getItem(H.U(b))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaL:function(a){var z=H.a([],[P.o])
this.N(a,new W.js(z))
return z},
gl:function(a){return a.length},
$asak:function(){return[P.o,P.o]},
$isab:1,
$asab:function(){return[P.o,P.o]},
"%":"Storage"},
js:{"^":"v:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"q;",$isbc:1,"%":"CSSStyleSheet|StyleSheet"},
bd:{"^":"ai;",$isbd:1,"%":"TextTrack"},
be:{"^":"ai;",$isbe:1,"%":"TextTrackCue|VTTCue"},
n3:{"^":"le;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbe")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$isI:1,
$asI:function(){return[W.be]},
$asw:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"TextTrackCueList"},
n4:{"^":"fL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbd")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$isI:1,
$asI:function(){return[W.bd]},
$asw:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"TextTrackList"},
n5:{"^":"q;0l:length=","%":"TimeRanges"},
bf:{"^":"q;",$isbf:1,"%":"Touch"},
br:{"^":"dG;",$isbr:1,"%":"TouchEvent"},
n6:{"^":"lk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbf")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$isI:1,
$asI:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"TouchList"},
n7:{"^":"q;0l:length=","%":"TrackDefaultList"},
dG:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
na:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
nb:{"^":"ai;0l:length=","%":"VideoTrackList"},
bZ:{"^":"aw;",
ghY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.K("deltaY is not supported"))},
ghX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.K("deltaX is not supported"))},
$isbZ:1,
"%":"WheelEvent"},
kd:{"^":"ai;",
h1:function(a,b){return a.requestAnimationFrame(H.bx(H.f(b,{func:1,ret:-1,args:[P.Y]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ng:{"^":"lq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isaZ")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.aZ]},
"%":"CSSRuleList"},
nh:{"^":"hG;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isa7",[P.Y],"$asa7")
if(!z)return!1
z=J.c6(b)
return a.left===z.gah(b)&&a.top===z.gbo(b)&&a.width===z.gaz(b)&&a.height===z.gav(b)},
gZ:function(a){return W.fB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gav:function(a){return a.height},
gaz:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nj:{"^":"ls;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isb0")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b0]},
$isI:1,
$asI:function(){return[W.b0]},
$asw:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$asC:function(){return[W.b0]},
"%":"GamepadList"},
nk:{"^":"lu;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isL")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nl:{"^":"lw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbb")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.bb]},
"%":"SpeechRecognitionResultList"},
nm:{"^":"ly;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.i(c,"$isbc")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
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
$asC:function(){return[W.bc]},
"%":"StyleSheetList"},
kt:{"^":"dA;a,b,c,$ti",
ia:function(a,b,c,d){var z=H.A(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
ni:{"^":"kt;a,b,c,$ti"},
ku:{"^":"f2;a,b,c,d,e,$ti",
hk:function(){var z=this.d
if(z!=null&&this.a<=0)J.he(this.b,this.c,z,!1)},
q:{
a4:function(a,b,c,d,e){var z=c==null?null:W.fU(new W.kv(c),W.ah)
z=new W.ku(0,a,b,z,!1,[e])
z.hk()
return z}}},
kv:{"^":"v:6;a",
$1:function(a){return this.a.$1(H.i(a,"$isah"))}},
C:{"^":"b;$ti",
ga1:function(a){return new W.em(a,this.gl(a),-1,[H.bz(this,a,"C",0)])}},
em:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.hc(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
ko:{"^":"q+hA;"},
kp:{"^":"q+w;"},
kq:{"^":"kp+C;"},
kr:{"^":"q+w;"},
ks:{"^":"kr+C;"},
kw:{"^":"q+w;"},
kx:{"^":"kw+C;"},
kJ:{"^":"q+w;"},
kK:{"^":"kJ+C;"},
kR:{"^":"q+ak;"},
kS:{"^":"q+ak;"},
kT:{"^":"q+w;"},
kU:{"^":"kT+C;"},
kV:{"^":"q+w;"},
kW:{"^":"kV+C;"},
kZ:{"^":"q+w;"},
l_:{"^":"kZ+C;"},
l5:{"^":"q+ak;"},
fH:{"^":"ai+w;"},
fI:{"^":"fH+C;"},
l6:{"^":"q+w;"},
l7:{"^":"l6+C;"},
la:{"^":"q+ak;"},
ld:{"^":"q+w;"},
le:{"^":"ld+C;"},
fK:{"^":"ai+w;"},
fL:{"^":"fK+C;"},
lj:{"^":"q+w;"},
lk:{"^":"lj+C;"},
lp:{"^":"q+w;"},
lq:{"^":"lp+C;"},
lr:{"^":"q+w;"},
ls:{"^":"lr+C;"},
lt:{"^":"q+w;"},
lu:{"^":"lt+C;"},
lv:{"^":"q+w;"},
lw:{"^":"lv+C;"},
lx:{"^":"q+w;"},
ly:{"^":"lx+C;"}}],["","",,P,{"^":"",
lO:function(a){var z,y
z=J.P(a)
if(!!z.$iscG){y=z.gdJ(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fN(a.data,a.height,a.width)},
lN:function(a){if(a instanceof P.fN)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.ic(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.U(y[w])
z.m(0,v,a[v])}return z},
lL:function(a,b){var z={}
a.N(0,new P.lM(z))
return z},
ei:function(){var z=$.eh
if(z==null){z=J.cZ(window.navigator.userAgent,"Opera",0)
$.eh=z}return z},
hF:function(){var z,y
z=$.ee
if(z!=null)return z
y=$.ef
if(y==null){y=J.cZ(window.navigator.userAgent,"Firefox",0)
$.ef=y}if(y)z="-moz-"
else{y=$.eg
if(y==null){y=!P.ei()&&J.cZ(window.navigator.userAgent,"Trident/",0)
$.eg=y}if(y)z="-ms-"
else z=P.ei()?"-o-":"-webkit-"}$.ee=z
return z},
fN:{"^":"b;dJ:a>,b,c",$iscG:1},
lM:{"^":"v:16;a",
$2:function(a,b){this.a[a]=b}},
hR:{"^":"cJ;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.aA(z,"w",0)
x=W.a1
return new H.ik(new H.kb(z,H.f(new P.hS(),{func:1,ret:P.a8,args:[y]}),[y]),H.f(new P.hT(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.z(b)
H.i(c,"$isa1")
z=this.gbx()
J.hg(z.b.$1(J.d_(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bD(this.gbx().a)},
k:function(a,b){var z=this.gbx()
return z.b.$1(J.d_(z.a,b))},
ga1:function(a){var z=P.eC(this.gbx(),!1,W.a1)
return new J.au(z,z.length,0,[H.A(z,0)])},
$asw:function(){return[W.a1]},
$ash:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hS:{"^":"v:40;",
$1:function(a){return!!J.P(H.i(a,"$isL")).$isa1}},
hT:{"^":"v:26;",
$1:function(a){return H.k(H.i(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l0:{"^":"b;$ti",
gal:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.E(z+this.c,H.A(this,0))},
gcq:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.E(z+this.d,H.A(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c4(b,"$isa7",[P.Y],"$asa7")
if(!z)return!1
z=this.a
y=J.c6(b)
x=y.gah(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbo(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.A(this,0)
if(H.E(z+this.c,w)===y.gal(b)){if(typeof x!=="number")return x.n()
z=H.E(x+this.d,w)===y.gcq(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.bj(z)
x=this.b
w=J.bj(x)
if(typeof z!=="number")return z.n()
v=H.A(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.E(x+this.d,v)
return P.kL(P.cR(P.cR(P.cR(P.cR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l0;ah:a>,bo:b>,az:c>,av:d>,$ti",q:{
iY:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.T()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.T()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"q;",$isbP:1,"%":"SVGLength"},mD:{"^":"kN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbP")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bP]},
$ish:1,
$ash:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asC:function(){return[P.bP]},
"%":"SVGLengthList"},bS:{"^":"q;",$isbS:1,"%":"SVGNumber"},mQ:{"^":"kY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbS")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bS]},
$ish:1,
$ash:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asC:function(){return[P.bS]},
"%":"SVGNumberList"},mT:{"^":"q;0l:length=","%":"SVGPointList"},n0:{"^":"lc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asC:function(){return[P.o]},
"%":"SVGStringList"},n1:{"^":"a1;",
gdF:function(a){return new P.hR(a,new W.km(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bU:{"^":"q;",$isbU:1,"%":"SVGTransform"},n8:{"^":"lm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.i(c,"$isbU")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bU]},
$ish:1,
$ash:function(){return[P.bU]},
$isc:1,
$asc:function(){return[P.bU]},
$asC:function(){return[P.bU]},
"%":"SVGTransformList"},kM:{"^":"q+w;"},kN:{"^":"kM+C;"},kX:{"^":"q+w;"},kY:{"^":"kX+C;"},lb:{"^":"q+w;"},lc:{"^":"lb+C;"},ll:{"^":"q+w;"},lm:{"^":"ll+C;"}}],["","",,P,{"^":"",mg:{"^":"q;0l:length=","%":"AudioBuffer"},mh:{"^":"kl;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaL:function(a){var z=H.a([],[P.o])
this.N(a,new P.hl(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.o,null]},
$isab:1,
$asab:function(){return[P.o,null]},
"%":"AudioParamMap"},hl:{"^":"v:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},mi:{"^":"ai;0l:length=","%":"AudioTrackList"},hm:{"^":"ai;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mR:{"^":"hm;0l:length=","%":"OfflineAudioContext"},kl:{"^":"q+ak;"}}],["","",,P,{"^":"",dx:{"^":"q;",
iJ:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.P(g)
if(!!z.$iscG)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lN(g))
return}if(!!z.$ises)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.hj("Incorrect number or type of arguments"))},
iI:function(a,b,c,d,e,f,g){return this.iJ(a,b,c,d,e,f,g,null,null,null)},
$isdx:1,
"%":"WebGLRenderingContext"},jS:{"^":"q;",$isjS:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mZ:{"^":"l9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){H.z(b)
H.i(c,"$isab")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[[P.ab,,,]]},
$ish:1,
$ash:function(){return[[P.ab,,,]]},
$isc:1,
$asc:function(){return[[P.ab,,,]]},
$asC:function(){return[[P.ab,,,]]},
"%":"SQLResultSetRowList"},l8:{"^":"q+w;"},l9:{"^":"l8+C;"}}],["","",,L,{"^":"",iF:{"^":"b;a",q:{
iG:function(a){var z,y,x,w,v,u,t,s
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
a=C.e.cN(C.e.cN(C.e.cN(a*u+t,64)*u+t,64)*u+t,64)
for(v=255;v>=0;--v){z=a*u+t
a=((z&-1)>>>0)-(z&0)
s=C.e.cV(a+31,v+1)
if(s>=256)return H.j(w,s)
C.a.m(x,v,w[s])
w[s]=w[v]}return new L.iF(x)}}}}],["","",,B,{"^":"",hO:{"^":"b;a,b,c,d,0e",
ac:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=new B.b7(a,b)
y=this.c.v(0,z).v(0,$.$get$dd().j(0,a+b))
x=y.a
w=y.b
v=2-x*x-w*w
if(v>0){u=v*v
t=this.e
s=this.b.n(0,z)
r=this.a
q=r[C.h.aa(s.a)&255]
s=C.h.aa(s.b)
if(typeof q!=="number")return q.n()
s=r[q+s&255]
if(typeof s!=="number")return s.cT()
p=(s&14)>>>1
s=$.$get$ek()
if(p>=8)return H.j(s,p)
o=s[p]
this.e=t+u*u*(o.a*x+o.b*w)}}},b7:{"^":"b;a,b",
n:function(a,b){return new B.b7(this.a+b.a,this.b+b.b)},
v:function(a,b){return new B.b7(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.b7(this.a*b,this.b*b)},
i:function(a){return H.l(this.a)+", "+H.l(this.b)},
q:{
aF:function(a,b){return new B.b7(a,b)}}}}],["","",,O,{"^":"",am:{"^":"b;0a,0b,0c,0d,$ti",
bs:function(a){this.a=H.a([],[a])
this.b=null
this.c=null
this.d=null},
bW:function(a,b,c){var z=H.aA(this,"am",0)
H.f(b,{func:1,ret:P.a8,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.x,[P.h,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
br:function(a,b){return this.bW(a,null,b)},
bb:function(a){var z
H.p(a,"$ish",[H.aA(this,"am",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dl:function(a,b){var z
H.p(b,"$ish",[H.aA(this,"am",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.au(z,z.length,0,[H.A(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aA(this,"am",0)
H.E(b,z)
z=[z]
if(this.bb(H.a([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dl(x,H.a([b],z))}},
aF:function(a,b){var z,y
H.p(b,"$ish",[H.aA(this,"am",0)],"$ash")
if(this.bb(b)){z=this.a
y=z.length
C.a.aF(z,b)
this.dl(y,b)}},
$ish:1,
q:{
d9:function(a){var z=new O.am([a])
z.bs(a)
return z}}},dq:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
eG:function(a){var z=this.b
if(!(z==null))z.A(a)},
aP:function(){return this.eG(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gcH(z)
else return V.bp()},
ef:function(a){var z=this.a
if(a==null)C.a.h(z,V.bp())
else C.a.h(z,a)
this.aP()},
cL:function(){var z=this.a
if(z.length>0){z.pop()
this.aP()}}}}],["","",,E,{"^":"",d1:{"^":"b;"},ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d8:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();){y=z.d
if(y.f==null)y.d8()}},
scW:function(a){var z,y,x,w
z=this.d
if(z==null?a!=null:z!==a){this.c=null
this.d=a
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.f(this.gbT(),{func:1,ret:-1,args:[D.n]})
C.a.W(y.a,x)}y=this.d
if(y!=null){y=y.gt()
y.toString
x=H.f(this.gbT(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}w=new D.G("shapeBuilder",z,this.d,this,[F.dy])
w.b=!0
this.a2(w)}},
ab:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ao(0,b,this):null
if(!J.Z(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.aD])
w.b=!0
this.a2(w)}z=this.f
if(z!=null)z.ab(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();)z.d.ab(0,b)},
b7:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV(z))
else C.a.h(z.a,y.j(0,z.gV(z)))
z.aP()
a.eg(this.f)
z=a.dy
x=(z&&C.a).gcH(z)
if(x!=null&&this.d!=null)x.iA(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();)z.d.b7(a)
a.ee()
a.dx.cL()},
gt:function(){var z=this.z
if(z==null){z=D.J()
this.z=z}return z},
a2:function(a){var z=this.z
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
il:[function(a){H.i(a,"$isn")
this.e=null
this.a2(a)},function(){return this.il(null)},"jO","$1","$0","gbT",0,2,1],
im:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.im(null)},"jP","$1","$0","gec",0,2,1],
ik:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ik(null)},"jN","$1","$0","geb",0,2,1],
ii:[function(a){this.a2(H.i(a,"$isn"))},function(){return this.ii(null)},"jL","$1","$0","gea",0,2,1],
jK:[function(a,b){var z,y,x,w,v,u,t
H.p(b,"$ish",[E.ag],"$ash")
for(z=b.length,y=this.gea(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bl()
t.a=H.a([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a5()},"$2","gih",8,0,7],
jM:[function(a,b){var z,y,x,w,v,u,t
H.p(b,"$ish",[E.ag],"$ash")
for(z=b.length,y=this.gea(),x={func:1,ret:-1,args:[D.n]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bl()
t.a=H.a([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.f(y,x)
C.a.W(t.a,y)}}this.a5()},"$2","gij",8,0,7],
$isaP:1,
q:{
bk:function(a,b,c,d,e,f){var z,y,x,w,v,u,t
z=new E.ag()
z.a=d
z.b=!0
y=O.d9(E.ag)
z.y=y
y.br(z.gih(),z.gij())
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
if(y!=null){x=y.gt()
x.toString
w=H.f(z.gbT(),{func:1,ret:-1,args:[D.n]})
C.a.W(x.a,w)}x=z.c
if(x!=null){x=x.gt()
x.toString
w=H.f(z.gbT(),{func:1,ret:-1,args:[D.n]})
C.a.h(x.a,w)}v=new D.G("shape",y,z.c,z,[F.f_])
v.b=!0
z.a2(v)}y=z.f
if(y==null?f!=null:y!==f){if(y!=null){y=y.gt()
y.toString
x=H.f(z.gec(),{func:1,ret:-1,args:[D.n]})
C.a.W(y.a,x)}u=z.f
z.f=f
if(f!=null){y=f.gt()
y.toString
x=H.f(z.gec(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}z.d8()
v=new D.G("technique",u,z.f,z,[O.dC])
v.b=!0
z.a2(v)}if(!J.Z(z.r,c)){t=z.r
if(t!=null){y=t.gt()
y.toString
x=H.f(z.geb(),{func:1,ret:-1,args:[D.n]})
C.a.W(y.a,x)}if(c!=null){y=c.gt()
y.toString
x=H.f(z.geb(),{func:1,ret:-1,args:[D.n]})
C.a.h(y.a,x)}z.r=c
v=new D.G("mover",t,c,z,[U.a6])
v.b=!0
z.a2(v)}if(a!=null)z.y.aF(0,a)
return z}}},j1:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eB:function(a,b){var z,y,x,w,v
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
z=new O.dq()
y=[V.aD]
z.a=H.a([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.n]}
v=H.f(new E.j3(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dq()
z.a=H.a([],y)
v=z.gt()
v.toString
x=H.f(new E.j4(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dq()
z.a=H.a([],y)
y=z.gt()
y.toString
w=H.f(new E.j5(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.a([],[O.dC])
this.dy=z
C.a.h(z,null)
this.fr=new H.aN(0,0,[P.o,A.eZ])},
giw:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.j(0,y.gV(y))
this.z=y
z=y}return z},
eg:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcH(z):a;(z&&C.a).h(z,y)},
ee:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
j2:function(a,b){var z=new E.j1(a,b)
z.eB(a,b)
return z}}},j3:{"^":"v:8;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.ch=null}},j4:{"^":"v:8;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j5:{"^":"v:8;a",
$1:function(a){var z
H.i(a,"$isn")
z=this.a
z.ch=null
z.cx=null}},jq:{"^":"n;c,a,0b"},jE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
eI:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.A(a)
this.iD()},function(){return this.eI(null)},"eH","$1","$0","gd_",0,2,1],
gi4:function(){var z,y,x
z=Date.now()
y=C.e.a_(P.ej(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aL(z,!1)
return x/y},
dt:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.e(z)
x=C.h.b6(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.h.b6(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dE(C.m,this.giC())},
iD:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jG(this),{func:1,ret:-1,args:[P.Y]})
C.w.fd(z)
C.w.h1(z,W.fU(y,P.Y))}},"$0","giC",0,0,3],
iz:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dt()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aL(w,!1)
x.y=P.ej(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aP()
w=x.db
C.a.sl(w.a,0)
w.aP()
w=x.dx
C.a.sl(w.a,0)
w.aP()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b7(this.e)}}catch(v){z=H.aW(v)
y=H.bA(v)
P.e_("Error: "+H.l(z))
P.e_("Stack: "+H.l(y))
throw H.d(z)}},
q:{
jF:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$isd5)return E.f6(a,!0,!0,!0,!1)
y=W.d6(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdF(a).h(0,y)
w=E.f6(y,!0,!0,!0,!1)
w.a=a
return w},
f6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jE()
y=P.id(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bV(a,"webgl",y)
x=H.i(x==null?C.k.bV(a,"experimental-webgl",y):x,"$isdx")
if(x==null)H.u(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j2(x,a)
w=new T.jz(x)
w.b=H.z(x.getParameter(3379))
w.c=H.z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jY(a)
v=new X.i8()
v.c=new X.V(!1,!1,!1)
v.d=P.ie(null,null,null,P.x)
w.b=v
v=new X.iy(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ih(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jI(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.a([],[[P.f2,P.b]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.f(w.gfC(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.f(w.gfF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.f(w.gfv(),q),!1,r))
v=w.z
p=W.bO
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.f(w.gca(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.f(w.gc_(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.f(w.gfL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.f(w.gfN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.f(w.gfM(),s),!1,t))
p=w.z
o=W.bZ;(p&&C.a).h(p,W.a4(a,H.U(W.hK(a)),H.f(w.gfO(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.f(w.gfD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.f(w.gfE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.f(w.gfP(),q),!1,r))
r=w.z
q=W.br
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.f(w.gfW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.f(w.gfU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.f(w.gfV(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aL(Date.now(),!1)
z.ch=0
z.dt()
return z}}},jG:{"^":"v:32;a",
$1:function(a){var z
H.m6(a)
z=this.a
if(z.z){z.z=!1
z.iz()}}}}],["","",,Z,{"^":"",fw:{"^":"b;a,b",q:{
fx:function(a,b,c){var z
H.p(c,"$isc",[P.y],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Float32Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)},
cq:function(a,b,c){var z
H.p(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)}}},cz:{"^":"d1;a,b,c,d,e",
aG:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aW(y)
x=P.t('Failed to bind buffer attribute "'+J.at(this.a)+'": '+H.l(z))
throw H.d(x)}},
i:function(a){return"["+J.at(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ka:{"^":"b;a",$ismj:1},d4:{"^":"b;a,0b,c,d",
b5:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aG:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aG(a)},
bp:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b7:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.a([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.at(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isn2:1},bm:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bq(this.c)+"'")+"]"}},ad:{"^":"b;a",
gdI:function(a){var z,y
z=this.a
y=(z&$.$get$a0().a)!==0?1:0
if((z&$.$get$ae().a)!==0)++y
if((z&$.$get$aS().a)!==0)++y
if((z&$.$get$a3().a)!==0)++y
if((z&$.$get$aT().a)!==0)++y
if((z&$.$get$bX().a)!==0)++y
if((z&$.$get$bY().a)!==0)++y
if((z&$.$get$bt().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+1:y},
gb8:function(a){var z,y
z=this.a
y=(z&$.$get$a0().a)!==0?3:0
if((z&$.$get$ae().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$a3().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bX().a)!==0)y+=3
if((z&$.$get$bY().a)!==0)y+=4
if((z&$.$get$bt().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+4:y},
ck:function(a){var z,y,x
z=$.$get$a0()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fv()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ad))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.a([],[P.o])
y=this.a
if((y&$.$get$a0().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ae().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$a3().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bX().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bY().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
az:function(a){return new Z.ad(a)}}}}],["","",,D,{"^":"",d7:{"^":"b;"},bl:{"^":"b;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.n(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.hP(z))
return x!==0},
dK:function(){return this.A(null)},
iE:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
ay:function(a){return this.iE(a,!0,!1)},
q:{
J:function(){var z=new D.bl()
z.a=H.a([],[{func:1,ret:-1,args:[D.n]}])
z.c=0
return z}}},hP:{"^":"v:33;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.n]})
z=this.a.a
z.b
a.$1(z)}},n:{"^":"b;a,0b"},cj:{"^":"n;c,d,a,0b,$ti"},ck:{"^":"n;c,d,a,0b,$ti"},G:{"^":"n;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e4:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e4))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
q:{"^":"mk<"}},Q:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Q))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},bN:{"^":"n;c,a,0b"},i7:{"^":"am;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
gag:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
d0:function(a){var z=this.e
if(!(z==null))z.A(a)},
iV:[function(a){var z,y,x
H.p(a,"$ish",[X.Q],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(C.a.au(this.a,x))return!1}return!0},"$1","geL",4,0,35],
iU:[function(a,b){var z=X.Q
z=new D.cj(a,H.p(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.d0(z)},"$2","geJ",8,0,19],
iW:[function(a,b){var z=X.Q
z=new D.ck(a,H.p(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.d0(z)},"$2","geM",8,0,19],
eK:[function(a){var z
H.i(a,"$isn")
if(!this.r&&a instanceof X.bN){z=a.c
if(C.a.au(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.A(a)}}},"$1","gc_",4,0,0],
fI:[function(a){var z
H.i(a,"$isn")
if(this.r&&a instanceof X.bN){z=a.c
if(C.a.au(this.a,z))this.r=!1}},"$1","gca",4,0,0],
a6:function(a){var z,y,x,w
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.J()
z.b=y}x={func:1,ret:-1,args:[D.n]}
w=H.f(this.gc_(),x)
C.a.h(y.a,w)
y=z.a
if(y==null){y=D.J()
z.a=y
z=y}else z=y
x=H.f(this.gca(),x)
C.a.h(z.a,x)
return!0},
$ash:function(){return[X.Q]},
$asam:function(){return[X.Q]},
q:{
aC:function(){var z=new X.i7()
z.bs(X.Q)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bW(z.geJ(),z.geL(),z.geM())
return z}}},i8:{"^":"b;0a,0b,0c,0d",
it:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.bN(a,this)
y.b=!0
return z.A(y)},
ip:function(a){var z,y
this.c=a.b
this.d.W(0,a.a)
z=this.b
if(z==null)return!1
y=new X.bN(a,this)
y.b=!0
return z.A(y)}},eD:{"^":"dt;x,y,c,d,e,a,0b"},ih:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aD:function(a,b){var z,y,x,w,v,u,t,s,r
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
u=this.a.gbE()
r=new X.bQ(a,new V.M(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
cK:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.aD(a,b))
return!0},
bj:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.cT()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.aD(a,b))
return!0},
bi:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.aD(a,b))
return!0},
iu:function(a){return!1},
fK:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aL(Date.now(),!1)
y=this.f
x=new X.eD(c,a,this.a.gbE(),b,z,this)
x.b=!0
y.A(x)
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
return z+(this.c?"Shift+":"")}},bQ:{"^":"dt;x,y,z,Q,ch,c,d,e,a,0b"},iy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c5:function(a,b,c){var z,y,x
z=new P.aL(Date.now(),!1)
y=this.a.gbE()
x=new X.bQ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cK:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.c5(a,b,!0))
return!0},
bj:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.cT()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.c5(a,b,!0))
return!0},
bi:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.c5(a,b,!1))
return!0},
iv:function(a,b){return!1}},dt:{"^":"n;"},fa:{"^":"dt;x,y,z,Q,ch,c,d,e,a,0b"},jI:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aD:function(a,b){var z,y,x,w
H.p(a,"$isc",[V.M],"$asc")
z=new P.aL(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gbE()
w=new X.fa(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
is:function(a){var z
H.p(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.A(this.aD(a,!0))
return!0},
iq:function(a){var z
H.p(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.A(this.aD(a,!0))
return!0},
ir:function(a){var z
H.p(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.A(this.aD(a,!1))
return!0}},jY:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbE:function(){var z=this.a
return V.dv(0,0,(z&&C.k).gdG(z).c,C.k.gdG(z).d)},
dh:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.Q(z,new X.V(y,a.altKey,a.shiftKey))},
aY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
cf:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=z.top
if(typeof x!=="number")return x.v()
return new V.M(y-w,x-v)},
bc:function(a){return new V.a_(a.movementX,a.movementY)},
cb:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.a([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.am(u.pageX)
C.h.am(u.pageY)
s=z.left
C.h.am(u.pageX)
C.a.h(y,new V.M(t-s,C.h.am(u.pageY)-z.top))}return y},
aA:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e4(z,new X.V(y,a.altKey,a.shiftKey))},
c7:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.v()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jl:[function(a){this.f=!0},"$1","gfF",4,0,6],
jd:[function(a){this.f=!1},"$1","gfv",4,0,6],
ji:[function(a){H.i(a,"$isaw")
if(this.f&&this.c7(a))a.preventDefault()},"$1","gfC",4,0,4],
fI:[function(a){var z
H.i(a,"$isbO")
if(!this.f)return
z=this.dh(a)
if(this.b.it(z))a.preventDefault()},"$1","gca",4,0,20],
eK:[function(a){var z
H.i(a,"$isbO")
if(!this.f)return
z=this.dh(a)
if(this.b.ip(z))a.preventDefault()},"$1","gc_",4,0,20],
jp:[function(a){var z,y,x,w
H.i(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aY(a)
if(this.x){y=this.aA(a)
x=this.bc(a)
if(this.d.cK(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aA(a)
w=this.aE(a)
if(this.c.cK(y,w))a.preventDefault()},"$1","gfL",4,0,4],
jr:[function(a){var z,y,x
H.i(a,"$isaw")
this.aY(a)
z=this.aA(a)
if(this.x){y=this.bc(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bj(z,x))a.preventDefault()},"$1","gfN",4,0,4],
jk:[function(a){var z,y,x
H.i(a,"$isaw")
if(!this.c7(a)){this.aY(a)
z=this.aA(a)
if(this.x){y=this.bc(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bj(z,x))a.preventDefault()}},"$1","gfE",4,0,4],
jq:[function(a){var z,y,x
H.i(a,"$isaw")
this.aY(a)
z=this.aA(a)
if(this.x){y=this.bc(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bi(z,x))a.preventDefault()},"$1","gfM",4,0,4],
jj:[function(a){var z,y,x
H.i(a,"$isaw")
if(!this.c7(a)){this.aY(a)
z=this.aA(a)
if(this.x){y=this.bc(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bi(z,x))a.preventDefault()}},"$1","gfD",4,0,4],
js:[function(a){var z,y
H.i(a,"$isbZ")
this.aY(a)
z=new V.a_((a&&C.v).ghX(a),C.v.ghY(a)).w(0,180)
if(this.x){if(this.d.iu(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.iv(z,y))a.preventDefault()},"$1","gfO",4,0,34],
jt:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aA(this.y)
v=this.aE(this.y)
this.d.fK(w,v,x)}},"$1","gfP",4,0,6],
jA:[function(a){var z
H.i(a,"$isbr")
this.a.focus()
this.f=!0
this.cf(a)
z=this.cb(a)
if(this.e.is(z))a.preventDefault()},"$1","gfW",4,0,12],
jy:[function(a){var z
H.i(a,"$isbr")
this.cf(a)
z=this.cb(a)
if(this.e.iq(z))a.preventDefault()},"$1","gfU",4,0,12],
jz:[function(a){var z
H.i(a,"$isbr")
this.cf(a)
z=this.cb(a)
if(this.e.ir(z))a.preventDefault()},"$1","gfV",4,0,12]}}],["","",,D,{"^":"",cC:{"^":"b;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.J()
this.d=z}return z},
aW:[function(a){var z
H.i(a,"$isn")
z=this.d
if(!(z==null))z.A(a)},function(){return this.aW(null)},"je","$1","$0","gfw",0,2,1],
$isa2:1,
$isaP:1},a2:{"^":"b;",$isaP:1},i9:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.J()
this.Q=z}return z},
aW:function(a){var z=this.Q
if(!(z==null))z.A(a)},
fJ:[function(a){var z
H.i(a,"$isn")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.fJ(null)},"jo","$1","$0","gdm",0,2,1],
ju:[function(a){var z,y,x
H.p(a,"$ish",[D.a2],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f9(x))return!1}return!0},"$1","gfQ",4,0,29],
j8:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.p(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gdm(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.i(b[u],"$isa2")
if(t instanceof D.cC)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bl()
s.a=H.a([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aW(z)},"$2","gfp",8,0,21],
jw:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.p(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gdm(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.i(b[u],"$isa2")
if(t instanceof D.cC)C.a.W(this.e,t)
s=t.d
if(s==null){s=new D.bl()
s.a=H.a([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.W(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aW(z)},"$2","gfS",8,0,21],
f9:function(a){var z=C.a.au(this.e,a)
return z},
$ash:function(){return[D.a2]},
$asam:function(){return[D.a2]}},iN:{"^":"b;",$isa2:1,$isaP:1},jo:{"^":"b;",$isa2:1,$isaP:1},jB:{"^":"b;",$isa2:1,$isaP:1},jC:{"^":"b;",$isa2:1,$isaP:1},jD:{"^":"b;",$isa2:1,$isaP:1}}],["","",,V,{"^":"",
mm:[function(a,b){if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.e(a)
return Math.abs(b-a)<=1e-9},"$2","iv",8,0,27],
cY:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.cV(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.i.aM("null",c)
return C.i.aM(C.h.ek($.m.$2(a,0)?0:a,b),c+b+1)},
by:function(a,b,c){var z,y,x,w,v,u
H.p(a,"$isc",[P.y],"$asc")
z=H.a([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.j(z,u)
C.a.m(z,u,C.i.aM(z[u],x))}return z},
dZ:function(a,b){return C.h.aa(Math.pow(b,C.l.b6(Math.log(H.lK(a))/Math.log(b))))},
aa:{"^":"b;a,b,c",
u:function(a,b){var z
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
aX:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
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
$.$get$ep()
$.$get$df()
z=H.a([],[P.o])
y=this.a
x=$.$get$b3().a
if((y&x)===x)C.a.h(z,"XPos")
x=$.$get$dg().a
if((y&x)===x)C.a.h(z,"XCenter")
x=$.$get$b2().a
if((y&x)===x)C.a.h(z,"XNeg")
x=$.$get$bI().a
if((y&x)===x)C.a.h(z,"YPos")
x=$.$get$dh().a
if((y&x)===x)C.a.h(z,"YCenter")
x=$.$get$bH().a
if((y&x)===x)C.a.h(z,"YNeg")
x=$.$get$bK().a
if((y&x)===x)C.a.h(z,"ZPos")
x=$.$get$er().a
if((y&x)===x)C.a.h(z,"ZCenter")
x=$.$get$bJ().a
if((y&x)===x)C.a.h(z,"ZNeg")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
an:function(a){return new V.b1(a)}}},
cH:{"^":"b;a,b,c,d",
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.l(this.c)+" "+H.l(this.d)}},
aO:{"^":"b;a,b,c,d,e,f,r,x,y",
aj:function(a,b){var z=H.a([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if($.m.$2(m,0))return new V.aO(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.aO((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
an:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
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
y=V.by(H.a([this.a,this.d,this.r],z),3,0)
x=V.by(H.a([this.b,this.e,this.x],z),3,0)
w=V.by(H.a([this.c,this.f,this.y],z),3,0)
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
eI:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.aO(z,0,-y,0,1,0,y,0,z)}}},
aD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aj:function(a,b){var z=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
bg:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.bp()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.aE(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
an:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
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
e5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.by(H.a([this.a,this.e,this.y,this.cx],z),b,c)
x=V.by(H.a([this.b,this.f,this.z,this.cy],z),b,c)
w=V.by(H.a([this.c,this.r,this.Q,this.db],z),b,c)
v=V.by(H.a([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.e5("",3,0)},
E:function(a){return this.e5(a,3,0)},
q:{
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bp:function(){return V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cn:function(a,b,c){return V.aE(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dr:function(a,b,c,d){return V.aE(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eK:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aE(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eL:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aE(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eJ:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.D(c)))
y=b.bf(z)
x=y.w(0,Math.sqrt(y.D(y)))
w=z.bf(x)
v=new V.H(a.a,a.b,a.c)
return V.aE(x.a,w.a,z.a,x.K(0).D(v),x.b,w.b,z.b,w.K(0).D(v),x.c,w.c,z.c,z.K(0).D(v),0,0,0,1)}}},
M:{"^":"b;a,b",
v:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
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
v:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.v()
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
u:function(a,b){var z
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"},
q:{
b8:function(a,b,c){return new V.r(a,b,c)}}},
co:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.co))return!1
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
eT:{"^":"b;a,b,c,d,e,f",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eT))return!1
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
eU:function(a,b){return new V.eT(a.a,a.b,a.c,b.a,b.b,b.c)}}},
eW:{"^":"b;a,b,c,d",
gax:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
e9:function(a){var z,y,x,w,v,u,t
z=$.$get$eq()
y=a.a
x=this.a
if(typeof y!=="number")return y.T()
if(y<x){w=$.$get$b2()
z=new V.b1(z.a|w.a)}else if(y>=x+this.c){w=$.$get$b3()
z=new V.b1(z.a|w.a)}else{w=$.$get$dg()
z=new V.b1(z.a|w.a)}w=a.b
v=this.b
if(typeof w!=="number")return w.T()
if(w<v)z=new V.b1(z.a|$.$get$bH().a)
else{u=z.a
z=w>=v+this.d?new V.b1(u|$.$get$bI().a):new V.b1(u|$.$get$dh().a)}u=z.a
t=$.$get$b2().a
if(!((u&t)===t)){t=$.$get$b3().a
if((u&t)===t){y=x+this.c
x=y}else x=y}y=$.$get$bH().a
if(!((u&y)===y)){y=$.$get$bI().a
if((u&y)===y){y=v+this.d
v=y}else v=w}return new V.M(x,v)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eW))return!1
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
dv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eW(a,b,c,d)}}},
dw:{"^":"b;a,b,c,d,e,f",
ix:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(typeof t!=="number")return t.T()
if(t<z){s=z-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s>r)return
s/=r
q=$.$get$b2()
p=z
o=!1
n=-1}else if(t>y){s=y-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s<r)return
s/=r
q=$.$get$b3()
p=y
o=!1
n=1}else{o=!0
s=-1
n=null
p=null
q=null}r=a1.b
if(typeof r!=="number")return r.T()
if(r<x){m=x-r
l=a1.e
if(typeof l!=="number")return H.e(l)
if(m>l)return
m/=l
k=$.$get$bH()
j=x
o=!1
i=-1}else if(r>w){m=w-r
l=a1.e
if(typeof l!=="number")return H.e(l)
if(m<l)return
m/=l
k=$.$get$bI()
j=w
o=!1
i=1}else{m=-1
i=null
j=null
k=null}l=a1.c
if(typeof l!=="number")return l.T()
if(l<v){h=v-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h>g)return
h/=g
f=$.$get$bJ()
e=v
o=!1
d=-1}else if(l>u){h=u-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h<g)return
h/=g
f=$.$get$bK()
e=u
o=!1
d=1}else{h=-1
d=null
e=null
f=null}if(o){z=new V.H(a1.d,a1.e,a1.f)
return new V.cH(new V.r(t,r,l),z.w(0,Math.sqrt(z.D(z))).K(0),0,$.$get$df())}if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*s
if(b<x||b>w)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*s
if(a<v||a>u)return
return new V.cH(new V.r(p,b,a),new V.H(n,0,0),s,q)
case 1:x=a1.d
if(typeof x!=="number")return x.j()
a0=t+x*m
if(a0<z||a0>y)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*m
if(a<v||a>u)return
return new V.cH(new V.r(a0,j,a),new V.H(0,i,0),m,k)
default:v=a1.d
if(typeof v!=="number")return v.j()
a0=t+v*h
if(a0<z||a0>y)return
z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*h
if(b<x||b>w)return
return new V.cH(new V.r(a0,b,e),new V.H(0,0,d),h,f)}},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dw))return!1
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
eX:function(a,b,c,d,e,f){return new V.dw(a,b,c,d,e,f)}}},
a_:{"^":"b;a,b",
i9:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w
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
return new V.a_(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a_(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
H:{"^":"b;a,b,c",
i9:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w,v,u
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
bf:function(a){var z,y,x,w,v,u
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
K:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
x=this.c
if(typeof x!=="number")return x.K()
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
e6:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"},
q:{
bV:function(a,b,c){return new V.H(a,b,c)}}}}],["","",,U,{"^":"",hy:{"^":"d7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c0:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cY(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gt:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.A(a)},
scP:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.G("warp",z,b,this,[P.a8])
z.b=!0
this.F(z)}},
scI:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c0(z)}z=new D.G("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.F(z)}},
scJ:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c0(z)}z=new D.G("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.F(z)}},
sS:function(a,b){var z,y
b=this.c0(b==null?0:b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.y])
z.b=!0
this.F(z)}},
saw:function(a){var z,y,x
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
this.F(z)}},
sG:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.y])
z.b=!0
this.F(z)}},
saI:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.y])
z.b=!0
this.F(z)}},
ab:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sS(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sG(y)}},
q:{
c7:function(){var z=new U.hy()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e9:{"^":"a6;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
ao:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e9))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")},
q:{
aY:function(a){var z=new U.e9()
z.a=a
return z}}},eo:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.e
if(!(z==null))z.A(a)},function(){return this.F(null)},"ar","$1","$0","gaq",0,2,1],
iX:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.p(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaq(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.F(z)},"$2","geN",8,0,23],
jv:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.p(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaq(),w={func:1,ret:-1,args:[D.n]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.f(x,w)
C.a.W(t.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.F(z)},"$2","gfR",8,0,23],
ao:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.A(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.ao(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bp():x
z=this.e
if(!(z==null))z.ay(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eo))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.Z(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a6]},
$asam:function(){return[U.a6]},
$isa6:1,
q:{
cF:function(a){var z=new U.eo()
z.bs(U.a6)
z.br(z.geN(),z.gfR())
z.aF(0,a)
z.e=null
z.f=V.bp()
z.r=0
return z}}},et:{"^":"b;0a,0b,0c,0d",
gt:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.b
if(!(z==null))z.A(a)},function(){return this.F(null)},"ar","$1","$0","gaq",0,2,1],
ao:function(a,b,c){var z,y,x
z=this.d
y=b.e
if(z<y){this.d=y
z=this.b
if(!(z==null))++z.c
z=this.a
z=z==null?null:z.ao(0,b,c)
x=z==null?null:z.bg(0)
this.c=x==null?V.bp():x
z=this.b
if(!(z==null))z.ay(0)}return this.c},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.et))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){return"Invert"},
$isa6:1},a6:{"^":"d7;"},eY:{"^":"a6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.A(a)},
sel:function(a){var z,y
a=V.cY(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.G("yaw",y,a,this,[P.y])
z.b=!0
this.F(z)}},
sed:function(a,b){var z,y
b=V.cY(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.G("pitch",y,b,this,[P.y])
z.b=!0
this.F(z)}},
seh:function(a){var z,y
a=V.cY(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.G("roll",y,a,this,[P.y])
z.b=!0
this.F(z)}},
ao:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sel(this.a+this.d*b.y)
this.sed(0,this.b+this.e*b.y)
this.seh(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aE(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).j(0,V.eL(this.b)).j(0,V.eK(this.a))
z=this.y
if(!(z==null))z.ay(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eY))return!1
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
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.J()
this.fx=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.F(null)},"ar","$1","$0","gaq",0,2,1],
a6:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.J()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.n]}
x=H.f(this.gfm(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.J()
x.d=z}x=H.f(this.gfn(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.J()
x.c=z}x=H.f(this.gfo(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.J()
x.f=z}x=H.f(this.gfj(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.J()
x.d=z}x=H.f(this.gfk(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.J()
x.b=z}x=H.f(this.ghh(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.J()
x.d=z}x=H.f(this.ghg(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.J()
x.c=z}y=H.f(this.ghf(),y)
C.a.h(z.a,y)
return!0},
as:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.a_(z,y)},
j5:[function(a){a=H.k(H.i(a,"$isn"),"$isbQ")
if(!J.Z(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfm",4,0,0],
j6:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isbQ")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a_(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.as(new V.a_(y.a,y.b).j(0,2).w(0,z.gax()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sG(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sG(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.as(new V.a_(x.a,x.b).j(0,2).w(0,z.gax()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sS(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sS(0,-u*v+x)
this.b.sG(0)
this.c.sG(0)
y=y.v(0,a.z)
this.dx=this.as(new V.a_(y.a,y.b).j(0,2).w(0,z.gax()))}this.ar()},"$1","gfn",4,0,0],
j7:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sG(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sG(-y*10*z)
this.ar()}},"$1","gfo",4,0,0],
j3:[function(a){if(H.k(H.i(a,"$isn"),"$iseD").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfj",4,0,0],
j4:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isbQ")
if(!J.Z(this.d,a.x.b))return
z=a.c
y=a.d
x=y.v(0,a.y)
w=this.as(new V.a_(x.a,x.b).j(0,2).w(0,z.gax()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sS(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sS(0,-u*v+x)
this.b.sG(0)
this.c.sG(0)
y=y.v(0,a.z)
this.dx=this.as(new V.a_(y.a,y.b).j(0,2).w(0,z.gax()))
this.ar()},"$1","gfk",4,0,0],
jE:[function(a){H.i(a,"$isn")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghh",4,0,0],
jD:[function(a){var z,y,x,w,v,u,t
a=H.k(H.i(a,"$isn"),"$isfa")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a_(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.as(new V.a_(y.a,y.b).j(0,2).w(0,z.gax()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sG(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sG(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.as(new V.a_(x.a,x.b).j(0,2).w(0,z.gax()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sS(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sS(0,-u*v+x)
this.b.sG(0)
this.c.sG(0)
y=y.v(0,a.z)
this.dx=this.as(new V.a_(y.a,y.b).j(0,2).w(0,z.gax()))}this.ar()},"$1","ghg",4,0,0],
jC:[function(a){var z,y,x
H.i(a,"$isn")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sG(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sG(-y*10*z)
this.ar()}},"$1","ghf",4,0,0],
ao:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
this.fr=V.eK(this.b.d).j(0,V.eL(this.c.d))}return this.fr},
$isa6:1},k_:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dx
if(z==null){z=D.J()
this.dx=z}return z},
F:[function(a){var z
H.i(a,"$isn")
z=this.dx
if(!(z==null))z.A(a)},function(){return this.F(null)},"ar","$1","$0","gaq",0,2,1],
sG:function(a){this.r.sG(a.a)
this.x.sG(a.b)
this.y.sG(a.c)},
gS:function(a){return new V.r(this.r.d,this.x.d,this.y.d)},
sS:function(a,b){H.i(b,"$isr")
this.r.sS(0,b.a)
this.x.sS(0,b.b)
this.y.sS(0,b.c)},
jn:[function(a){this.F(H.i(a,"$isn"))},"$1","gfH",4,0,0],
ci:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.n()
e+=d}else if(b.r){if(typeof e!=="number")return e.v()
e-=d}else{if(typeof e!=="number")return e.iT()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
ao:function(a,b,c){var z,y,x,w,v,u,t
z=this.cy
y=b.e
if(typeof z!=="number")return z.T()
if(z<y){this.cy=y
x=this.gS(this)
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
if(z!=null)t=z.an(t)
t=new V.H(this.ci(this.a,this.b,v,u,t.a),this.ci(this.c,this.d,v,u,t.b),this.ci(this.e,this.f,v,u,t.c))
z=this.z
this.sG(z!=null?z.an(t):t)
this.r.ab(0,w)
this.x.ab(0,w)
this.y.ab(0,w)
if(this.dy!=null){z=this.gS(this)
this.sS(0,this.dy.$2(x,z))}this.db=V.cn(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa6:1}}],["","",,M,{"^":"",hM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
b9:[function(a){var z
H.i(a,"$isn")
z=this.x
if(!(z==null))z.A(a)},function(){return this.b9(null)},"iY","$1","$0","gaQ",0,2,1],
jf:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.p(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaQ(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bl()
s.a=H.a([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.b9(z)},"$2","gfz",8,0,7],
jg:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.p(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaQ(),w={func:1,ret:-1,args:[D.n]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bl()
s.a=H.a([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.f(x,w)
C.a.W(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.b9(z)},"$2","gfA",8,0,7],
gt:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
b7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.jq(a,this)
z.b=!0
y=this.e
if(!(y==null))y.A(z)
a.eg(this.c)
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
t=C.h.am(u.a*w)
if(typeof v!=="number")return H.e(v)
s=C.h.am(u.b*v)
r=C.h.am(u.c*w)
a.c=r
u=C.h.am(u.d*v)
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
r=y.c
q=y.d
p=y.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aE(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.ef(m)
x=$.eP
if(x==null){x=V.eJ(new V.r(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.eP=x
l=x}else l=x
x=y.b
if(x!=null){k=x.ao(0,a,y)
if(k!=null)l=k.j(0,l)}a.db.ef(l)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.A(y,0)]);y.H();)y.d.ab(0,a)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.A(y,0)]);y.H();)y.d.b7(a)
this.a.toString
a.cy.cL()
a.db.cL()
this.b.toString
a.ee()},
$ismV:1}}],["","",,A,{"^":"",e1:{"^":"b;a,b,c"},hk:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i0:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},io:{"^":"eZ;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0b3,0aJ,0b4,0bF,0dL,0dM,0bG,0bH,0dN,0dO,0bI,0bJ,0dP,0dQ,0bK,0dR,0dS,0bL,0dT,0dU,0bM,0bN,0bO,0dV,0dW,0bP,0bQ,0dX,0dY,0bR,0dZ,0cw,0e_,0cz,0e0,0cA,0e1,0cB,0e2,0cC,0e3,0cD,a,b,0c,0d,0e,0f,0r",
ez:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.cp("")
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
a2.hr(z)
a2.hy(z)
a2.hs(z)
a2.hG(z)
a2.hH(z)
a2.hA(z)
a2.hL(z)
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
z=new P.cp("")
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
v.hv(z)
v.hq(z)
v.ht(z)
v.hw(z)
v.hE(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hC(z)
v.hD(z)}v.hz(z)
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
v.hu(z)
v.hB(z)
v.hF(z)
v.hI(z)
v.hJ(z)
v.hK(z)
v.hx(z)}r=z.a+="// === Main ===\n"
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
this.c=this.di(x.charCodeAt(0)==0?x:x,35633)
this.d=this.di(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fY(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.u(P.t("Failed to link shader: "+H.l(m)))}this.ha()
this.hc()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.p(0,"invViewMat"),"$isaQ")
if(y)this.db=H.k(this.r.p(0,"objMat"),"$isaQ")
if(w)this.dx=H.k(this.r.p(0,"viewObjMat"),"$isaQ")
this.fr=H.k(this.r.p(0,"projViewObjMat"),"$isaQ")
if(a2.x2)this.go=H.k(this.r.p(0,"txt2DMat"),"$isdI")
if(a2.y1)this.id=H.k(this.r.p(0,"txtCubeMat"),"$isaQ")
if(a2.y2)this.k1=H.k(this.r.p(0,"colorMat"),"$isaQ")
this.k3=H.a([],[A.aQ])
y=a2.b3
if(y>0){this.k2=H.i(this.r.p(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.u(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaQ"))}}y=a2.a
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
case C.c:this.b3=H.k(this.r.p(0,"diffuseTxt"),"$isaq")
this.b4=H.k(this.r.p(0,"nullDiffuseTxt"),"$isO")
break
case C.d:this.aJ=H.k(this.r.p(0,"diffuseTxt"),"$isar")
this.b4=H.k(this.r.p(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.b){this.bF=H.k(this.r.p(0,"invDiffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dL=H.k(this.r.p(0,"invDiffuseTxt"),"$isaq")
this.bG=H.k(this.r.p(0,"nullInvDiffuseTxt"),"$isO")
break
case C.d:this.dM=H.k(this.r.p(0,"invDiffuseTxt"),"$isar")
this.bG=H.k(this.r.p(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.b){this.bJ=H.k(this.r.p(0,"shininess"),"$isX")
this.bH=H.k(this.r.p(0,"specularClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dN=H.k(this.r.p(0,"specularTxt"),"$isaq")
this.bI=H.k(this.r.p(0,"nullSpecularTxt"),"$isO")
break
case C.d:this.dO=H.k(this.r.p(0,"specularTxt"),"$isar")
this.bI=H.k(this.r.p(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.c:this.dP=H.k(this.r.p(0,"bumpTxt"),"$isaq")
this.bK=H.k(this.r.p(0,"nullBumpTxt"),"$isO")
break
case C.d:this.dQ=H.k(this.r.p(0,"bumpTxt"),"$isar")
this.bK=H.k(this.r.p(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dR=H.k(this.r.p(0,"envSampler"),"$isar")
this.dS=H.k(this.r.p(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.b){this.bL=H.k(this.r.p(0,"reflectClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dT=H.k(this.r.p(0,"reflectTxt"),"$isaq")
this.bM=H.k(this.r.p(0,"nullReflectTxt"),"$isO")
break
case C.d:this.dU=H.k(this.r.p(0,"reflectTxt"),"$isar")
this.bM=H.k(this.r.p(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.b){this.bN=H.k(this.r.p(0,"refraction"),"$isX")
this.bO=H.k(this.r.p(0,"refractClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dV=H.k(this.r.p(0,"refractTxt"),"$isaq")
this.bP=H.k(this.r.p(0,"nullRefractTxt"),"$isO")
break
case C.d:this.dW=H.k(this.r.p(0,"refractTxt"),"$isar")
this.bP=H.k(this.r.p(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.b){this.bQ=H.k(this.r.p(0,"alpha"),"$isX")
switch(y){case C.b:break
case C.f:break
case C.c:this.dX=H.k(this.r.p(0,"alphaTxt"),"$isaq")
this.bR=H.k(this.r.p(0,"nullAlphaTxt"),"$isO")
break
case C.d:this.dY=H.k(this.r.p(0,"alphaTxt"),"$isar")
this.bR=H.k(this.r.p(0,"nullAlphaTxt"),"$isO")
break}}this.cw=H.a([],[A.fn])
this.cz=H.a([],[A.fo])
this.cA=H.a([],[A.fp])
this.cB=H.a([],[A.fq])
this.cC=H.a([],[A.fr])
this.cD=H.a([],[A.fs])
if(a2.k2){y=a2.z
if(y>0){this.dZ=H.i(this.r.p(0,"dirLightCount"),"$isO")
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
x=this.cw;(x&&C.a).h(x,new A.fn(l,k,j))}}y=a2.Q
if(y>0){this.e_=H.i(this.r.p(0,"pntLightCount"),"$isO")
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
H.k(h,"$isX")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.cz;(x&&C.a).h(x,new A.fo(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e0=H.i(this.r.p(0,"spotLightCount"),"$isO")
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
H.k(g,"$isX")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.cA;(x&&C.a).h(x,new A.fp(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e1=H.i(this.r.p(0,"txtDirLightCount"),"$isO")
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
x=this.cB;(x&&C.a).h(x,new A.fq(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e2=H.i(this.r.p(0,"txtPntLightCount"),"$isO")
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
H.k(i,"$isdI")
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
H.k(f,"$isX")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isar")
x=this.cC;(x&&C.a).h(x,new A.fr(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e3=H.i(this.r.p(0,"txtSpotLightCount"),"$isO")
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
H.k(d,"$isX")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isX")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isX")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isX")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.u(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isaq")
x=this.cD;(x&&C.a).h(x,new A.fs(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){if(c==null||!c.ga9(c))b.a.uniform1i(b.d,1)
else{a.eq(c)
b.a.uniform1i(b.d,0)}},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
im:function(a,b){var z,y
z=a.aJ
y=new A.io(b,z)
y.eD(b,z)
y.ez(a,b)
return y}}},ir:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,b3,aJ,b4",
hr:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.b3+"];\n"
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
hy:function(a){var z
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
hs:function(a){var z
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
hG:function(a){var z,y
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
hH:function(a){var z,y
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
hA:function(a){var z
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
hL:function(a){var z
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
aC:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.j(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cX(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hv:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aC(a,z,"emission")
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
hq:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aC(a,z,"ambient")
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
ht:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aC(a,z,"diffuse")
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
hw:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aC(a,z,"invDiffuse")
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
hE:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aC(a,z,"specular")
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
hz:function(a){var z,y
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
hC:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aC(a,z,"reflect")
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
hD:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aC(a,z,"refract")
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
hu:function(a){var z,y
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
hB:function(a){var z,y
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
hF:function(a){var z,y
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
hI:function(a){var z,y,x
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
hJ:function(a){var z,y,x
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
hK:function(a){var z,y,x
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
hx:function(a){var z
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
i:function(a){return this.aJ}},fn:{"^":"b;a,b,c"},fq:{"^":"b;a,b,c,d,e,f,r,x"},fo:{"^":"b;a,b,c,d,e,f,r"},fr:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fp:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fs:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eZ:{"^":"d1;",
eD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
di:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.t("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
ha:function(){var z,y,x,w,v,u
z=H.a([],[A.e1])
y=this.a
x=H.z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.e1(y,v.name,u))}this.f=new A.hk(z)},
hc:function(){var z,y,x,w,v,u
z=H.a([],[A.af])
y=this.a
x=H.z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hW(v.type,v.size,v.name,u))}this.r=new A.jR(z)},
aU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.dH(z,y,b,a,c)},
fa:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dH(z,y,b,a,c)},
fb:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.dH(z,y,b,a,c)},
bA:function(a,b){return new P.fz(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hW:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.X(this.a,this.e,c,d)
case 35664:return new A.jM(this.a,this.e,c,d)
case 35665:return new A.N(this.a,this.e,c,d)
case 35666:return new A.jP(this.a,this.e,c,d)
case 35667:return new A.jN(this.a,this.e,c,d)
case 35668:return new A.jO(this.a,this.e,c,d)
case 35669:return new A.jQ(this.a,this.e,c,d)
case 35674:return new A.jT(this.a,this.e,c,d)
case 35675:return new A.dI(this.a,this.e,c,d)
case 35676:return new A.aQ(this.a,this.e,c,d)
case 35678:return this.fa(b,c,d)
case 35680:return this.fb(b,c,d)
case 35670:throw H.d(this.bA("BOOL",c))
case 35671:throw H.d(this.bA("BOOL_VEC2",c))
case 35672:throw H.d(this.bA("BOOL_VEC3",c))
case 35673:throw H.d(this.bA("BOOL_VEC4",c))
default:throw H.d(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cA:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},jR:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
i3:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.i3("\n")}},O:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jN:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jO:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jQ:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jL:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dH:function(a,b,c,d,e){var z=new A.jL(a,b,c,e)
z.f=d
z.e=P.ig(d,0,!1,P.x)
return z}}},X:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jM:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},N:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jP:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jT:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dI:{"^":"af;a,b,c,d",
ap:function(a){var z=new Float32Array(H.c0(H.p(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aQ:{"^":"af;a,b,c,d",
ap:function(a){var z=new Float32Array(H.c0(H.p(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"af;a,b,c,d",
eq:function(a){var z,y,x
z=a==null||!a.ga9(a)
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.ga8(a))},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ar:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",av:{"^":"b;0a,0b,0c,0d,0e",
gi_:function(){return this.a==null||this.b==null||this.c==null},
f4:function(){var z,y,x,w,v
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
if(v.e6())return
return v.w(0,Math.sqrt(v.D(v)))},
f7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.v(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.D(z)))
z=w.v(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.bf(z.w(0,Math.sqrt(z.D(z))))
return z.w(0,Math.sqrt(z.D(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.f4()
if(z==null){z=this.f7()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
f3:function(){var z,y,x,w,v
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
if(v.e6())return
return v.w(0,Math.sqrt(v.D(v)))},
f6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.e(y)
n=z-y
if($.m.$2(n,0)){z=r.v(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.v()
if(typeof p!=="number")return H.e(p)
if(z-p<0)m=m.K(0)}else{y=q.b
if(typeof y!=="number")return H.e(y)
l=(z-y)/n
y=r.v(0,u).j(0,l).n(0,u).v(0,x)
y=new V.H(y.a,y.b,y.c)
m=y.w(0,Math.sqrt(y.D(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.e(p)
q=q.a
if(typeof q!=="number")return H.e(q)
if((o-p)*l+p-q<0)m=m.K(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.D(z)))
z=k.bf(m)
z=z.w(0,Math.sqrt(z.D(z))).bf(k)
m=z.w(0,Math.sqrt(z.D(z)))}return m},
cr:function(){if(this.e!=null)return!0
var z=this.f3()
if(z==null){z=this.f6()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z,y
if(this.gi_())return a+"disposed"
z=a+C.i.aM(J.at(this.a.e),0)+", "+C.i.aM(J.at(this.b.e),0)+", "+C.i.aM(J.at(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.E("")},
q:{
hQ:function(a,b,c){var z,y,x
z=new F.av()
y=a.a
if(y==null)H.u(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.t("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a5()
return z}}},ey:{"^":"b;"},eQ:{"^":"b;"},eV:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
gt:function(){var z=this.Q
if(z==null){z=D.J()
this.Q=z}return z},
be:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.p(a,"$isc",[F.bW],"$asc")
z=a.length
y=new Array(z*this.c)
y.fixed$length=Array
x=H.a(y,[P.y])
for(y=this.a,w=0,v=0;v<this.b;++v){u=y.ck(v)
for(t=0;t<z;++t){if(t>=a.length)return H.j(a,t)
s=a[t].e7(u)
r=w+t*this.c
for(q=0;q<s.length;++q){C.a.m(x,r,s[q]);++r}}w+=u.gb8(u)}p=$.$get$a0()
if((y.a&p.a)!==0){y=this.z
if(y==null){if(0>=a.length)return H.j(a,0)
y=a[0].f
y=V.eX(y.a,y.b,y.c,0,0,0)
this.z=y}for(v=z-1;v>=0;--v){if(v>=a.length)return H.j(a,v)
p=a[v].f
o=p.a
n=p.b
p=p.c
m=y.d
l=y.a
if(typeof o!=="number")return o.T()
if(typeof l!=="number")return H.e(l)
if(o<l){m+=l-o
k=o}else{if(o>l+m)m=o-l
k=l}j=y.e
o=y.b
if(typeof n!=="number")return n.T()
if(typeof o!=="number")return H.e(o)
if(n<o){j+=o-n
i=n}else{if(n>o+j)j=n-o
i=o}h=y.f
y=y.c
if(typeof p!=="number")return p.T()
if(typeof y!=="number")return H.e(y)
if(p<y){h+=y-p
g=p}else{if(p>y+h)h=p-y
g=y}y=new V.dw(k,i,g,m,j,h)
this.z=y}}r=this.d
this.d=r+z
C.a.aF(this.f,x)
this.a5()
return r},
bd:function(a){var z,y,x,w,v,u,t
z=P.x
H.p(a,"$isc",[z],"$asc")
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
C.a.m(w,t+2,a[u])}C.a.aF(this.y,w)
this.a5()}},
hP:function(a){var z,y,x,w,v,u,t,s,r,q
z=P.x
H.p(a,"$isc",[z],"$asc")
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
v=!0}}C.a.aF(this.y,w)
this.a5()}},
a2:function(a){var z=this.Q
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
aH:function(){return!1},
b_:function(){return!1},
bD:function(){return!1},
dE:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=this.a
if(!J.Z(b,z))throw H.d(P.t("Shape was reduced to "+H.l(z)+" so can not build for "+H.l(b)+"."))
if(this.e==null){y=this.c*4
x=new Array(this.b)
x.fixed$length=Array
this.e=H.a(x,[Z.cz])
for(w=0,v=0;v<this.b;++v){u=z.ck(v)
t=u.gb8(u)
x=this.e;(x&&C.a).m(x,v,new Z.cz(u,t,w*4,y,0))
w+=t}}x=a.a
s=new Z.d4(Z.fx(x,34962,H.p(this.f,"$isc",[P.y],"$asc")),this.e,z)
z=H.a([],[Z.bm])
s.b=z
r=this.r
if(r.length!==0){q=Z.cq(x,34963,H.p(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bm(0,this.r.length,q))}r=this.x
if(r.length!==0){q=Z.cq(x,34963,H.p(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bm(1,this.x.length,q))}r=this.y
if(r.length!==0){q=Z.cq(x,34963,H.p(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bm(4,this.y.length,q))}return s},
$isdy:1},f_:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
aH:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aH()||!1
if(!this.a.aH())y=!1
z=this.e
if(!(z==null))z.ay(0)
return y},
b_:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.b_()||!1
if(!this.a.b_())y=!1
z=this.e
if(!(z==null))z.ay(0)
return y},
bD:function(){var z=this.e
if(!(z==null))++z.c
this.a.bD()
z=this.e
if(!(z==null))z.ay(0)
return!0},
dE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a.c.length
y=b.gdI(b)
x=b.gb8(b)
w=x*4
v=new Array(z*x)
v.fixed$length=Array
u=P.y
t=H.a(v,[u])
v=new Array(y)
v.fixed$length=Array
s=H.a(v,[Z.cz])
for(r=0,q=0;q<y;++q){p=b.ck(q)
o=p.gb8(p)
C.a.m(s,q,new Z.cz(p,o,r*4,w,0))
for(n=0;n<z;++n){v=this.a.c
if(n>=v.length)return H.j(v,n)
m=v[n].e7(p)
l=r+n*x
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}v=a.a
j=new Z.d4(Z.fx(v,34962,H.p(t,"$isc",[u],"$asc")),s,b)
j.b=H.a([],[Z.bm])
this.b.b
if(this.c.b.length!==0){u=P.x
i=H.a([],[u])
for(q=0;h=this.c.b,q<h.length;++q){h=h[q].a
h.a.a.aZ()
C.a.h(i,h.e)
h=this.c.b
if(q>=h.length)return H.j(h,q)
h=h[q].b
h.a.a.aZ()
C.a.h(i,h.e)}g=Z.cq(v,34963,H.p(i,"$isc",[u],"$asc"))
C.a.h(j.b,new Z.bm(1,i.length,g))}if(this.d.b.length!==0){u=P.x
i=H.a([],[u])
for(q=0;h=this.d.b,q<h.length;++q){h=h[q].a
h.a.a.aZ()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.j(h,q)
h=h[q].b
h.a.a.aZ()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.j(h,q)
h=h[q].c
h.a.a.aZ()
C.a.h(i,h.e)}g=Z.cq(v,34963,H.p(i,"$isc",[u],"$asc"))
C.a.h(j.b,new Z.bm(4,i.length,g))}return j},
i:function(a){var z=H.a([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.B(z,"\n")},
a2:function(a){var z=this.e
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
$isdy:1},dy:{"^":"d7;"},jc:{"^":"b;a,0b",
hM:function(a){var z,y,x,w,v
H.p(a,"$isc",[F.bW],"$asc")
z=H.a([],[F.av])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.hQ(y,w,v))}return z},
gl:function(a){return this.b.length},
aH:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cs())x=!1
return x},
b_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cr())x=!1
return x},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},jd:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.B(z,"\n")},
O:function(){return this.E("")}},je:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
O:function(){return this.E("")}},bW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
e7:function(a){var z,y
z=J.P(a)
if(z.u(a,$.$get$a0())){z=this.f
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ae())){z=this.r
y=[P.y]
if(z==null)return H.a([0,1,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aS())){z=this.x
y=[P.y]
if(z==null)return H.a([0,0,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$a3())){z=this.y
y=[P.y]
if(z==null)return H.a([0,0],y)
else return H.a([z.a,z.b],y)}else if(z.u(a,$.$get$aT())){z=this.z
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bX())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bY())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1,1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bt()))return H.a([this.ch],[P.y])
else if(z.u(a,$.$get$aR())){z=this.cx
y=[P.y]
if(z==null)return H.a([-1,-1,-1,-1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else return H.a([],[P.y])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.N(0,new F.k9(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.ay(0)}return!0},
cr:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.N(0,new F.k8(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.ay(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.a([],[P.o])
C.a.h(z,C.i.aM(J.at(this.e),0))
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
x=C.a.B(z,", ")
return a+"{"+x+"}"},
O:function(){return this.E("")},
q:{
bs:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bW()
y=new F.k7(z)
y.b=H.a([],[F.eQ])
z.b=y
y=new F.k6(z)
x=[F.ey]
y.b=H.a([],x)
y.c=H.a([],x)
z.c=y
y=new F.k3(z)
x=[F.av]
y.b=H.a([],x)
y.c=H.a([],x)
y.d=H.a([],x)
z.d=y
z.e=0
y=h.a
z.f=(y&$.$get$a0().a)!==0?d:null
z.r=(y&$.$get$ae().a)!==0?e:null
z.x=(y&$.$get$aS().a)!==0?b:null
z.y=(y&$.$get$a3().a)!==0?f:null
z.z=(y&$.$get$aT().a)!==0?g:null
z.Q=(y&$.$get$fu().a)!==0?c:null
z.ch=(y&$.$get$bt().a)!==0?i:0
z.cx=(y&$.$get$aR().a)!==0?a:null
return z}}},k9:{"^":"v:9;a",
$1:function(a){var z,y
H.i(a,"$isav")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},k8:{"^":"v:9;a",
$1:function(a){var z,y
H.i(a,"$isav")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},k2:{"^":"b;a,0b,0c",
aZ:function(){var z,y,x,w
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
this.a.a5()
return!0},
hO:function(a,b,c,d,e,f,g,h,i){var z=F.bs(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bB:function(a,b,c,d,e,f){return this.hO(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aH:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cs()
return!0},
b_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cr()
return!0},
bD:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.j()
t=v.b
if(typeof t!=="number")return t.j()
s=v.c
if(typeof s!=="number")return s.j()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Z(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
this.aZ()
z=H.a([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},k3:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.f(b,{func:1,ret:-1,args:[F.av]})
C.a.N(this.b,b)
C.a.N(this.c,new F.k4(this,b))
C.a.N(this.d,new F.k5(this,b))},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},k4:{"^":"v:9;a,b",
$1:function(a){H.i(a,"$isav")
if(!J.Z(a.a,this.a))this.b.$1(a)}},k5:{"^":"v:9;a,b",
$1:function(a){var z
H.i(a,"$isav")
z=this.a
if(!J.Z(a.a,z)&&!J.Z(a.b,z))this.b.$1(a)}},k6:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},k7:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.a([],[P.o])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
O:function(){return this.E("")}}}],["","",,O,{"^":"",eG:{"^":"dC;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.J()
this.dy=z}return z},
X:[function(a){var z
H.i(a,"$isn")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.X(null)},"eO","$1","$0","gbt",0,2,1],
h3:[function(a){H.i(a,"$isn")
this.a=null
this.X(a)},function(){return this.h3(null)},"jB","$1","$0","gh2",0,2,1],
j9:[function(a,b){var z=V.aD
z=new D.cj(a,H.p(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.X(z)},"$2","gfq",8,0,15],
ja:[function(a,b){var z=V.aD
z=new D.ck(a,H.p(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.X(z)},"$2","gfs",8,0,15],
df:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a_(z.e.length+3,4)*4
x=C.e.a_(z.f.length+3,4)*4
w=C.e.a_(z.r.length+3,4)*4
v=C.e.a_(z.x.length+3,4)*4
u=C.e.a_(z.y.length+3,4)*4
t=C.e.a_(z.z.length+3,4)*4
s=C.e.a_(this.e.a.length+3,4)*4
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
a6=$.$get$a0()
if(c){z=$.$get$ae()
a6=new Z.ad(a6.a|z.a)}if(b){z=$.$get$aS()
a6=new Z.ad(a6.a|z.a)}if(a){z=$.$get$a3()
a6=new Z.ad(a6.a|z.a)}if(a0){z=$.$get$aT()
a6=new Z.ad(a6.a|z.a)}if(a2){z=$.$get$aR()
a6=new Z.ad(a6.a|z.a)}return new A.ir(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.p(a,"$isc",[T.dD],"$asc")
if(b!=null)if(!C.a.au(a,b)){b.sa8(0,a.length)
C.a.h(a,b)}},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.an(x)}}},
iA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.df()
y=a.fr.k(0,z.aJ)
if(y==null){y=A.im(z,a.a)
x=y.b
if(x.length===0)H.u(P.t("May not cache a shader with no name."))
if(a.fr.dH(0,x))H.u(P.t('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.b4
z=b.e
if(!(z instanceof Z.d4)){b.e=null
z=null}if(z==null||!J.Z(z.d,v)){z=w.r1
if(z)b.d.aH()
u=w.r2
if(u)b.d.b_()
t=w.ry
if(t)b.d.bD()
s=b.d.dE(new Z.ka(a.a),v)
s.b5($.$get$a0()).e=this.a.y.c
if(z)s.b5($.$get$ae()).e=this.a.Q.c
if(u)s.b5($.$get$aS()).e=this.a.z.c
if(w.rx)s.b5($.$get$a3()).e=this.a.ch.c
if(t)s.b5($.$get$aT()).e=this.a.cx.c
if(w.x1)s.b5($.$get$aR()).e=this.a.cy.c
b.e=s}z=T.dD
r=H.a([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.i0()
if(w.fx){u=this.a
t=a.dx
t=t.gV(t)
u=u.db
u.toString
u.ap(t.aj(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gV(t)
q=a.dx
q=t.j(0,q.gV(q))
a.cx=q
t=q}u=u.dx
u.toString
u.ap(t.aj(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giw()
q=a.dx
q=t.j(0,q.gV(q))
a.ch=q
t=q}u=u.fr
u.toString
u.ap(t.aj(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ap(t.aj(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ap(t.aj(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ap(C.E.aj(t,!0))}if(w.b3>0){p=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,p)
for(u=[P.y],o=0;o<p;++o){t=this.a
q=this.e.a
if(o>=q.length)return H.j(q,o)
q=q[o]
t.toString
H.i(q,"$isaD")
t=t.k3
if(o>=t.length)return H.j(t,o)
t=t[o]
n=new Float32Array(H.c0(H.p(q.aj(0,!0),"$isc",u,"$asc")))
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
case C.c:this.R(r,this.f.d)
u=this.a
t=this.f.d
u.ak(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.f.e)
u=this.a
t=this.f.e
u.af(u.r2,u.rx,t)
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
case C.c:this.R(r,this.r.d)
u=this.a
t=this.r.d
u.ak(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.r.e)
u=this.a
t=this.r.e
u.af(u.x2,u.y1,t)
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
case C.c:this.R(r,this.x.d)
u=this.a
t=this.x.d
u.ak(u.b3,u.b4,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.x.e)
u=this.a
t=this.x.e
u.af(u.aJ,u.b4,t)
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
u=u.bF
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.R(r,this.y.d)
u=this.a
t=this.y.d
u.ak(u.dL,u.bG,t)
t=this.a
u=this.y.f
t=t.bF
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.y.e)
u=this.a
t=this.y.e
u.af(u.dM,u.bG,t)
t=this.a
u=this.y.f
t=t.bF
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.bH
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
t=this.a
m=this.z.ch
t=t.bJ
t.a.uniform1f(t.d,m)
break
case C.c:this.R(r,this.z.d)
u=this.a
t=this.z.d
u.ak(u.dN,u.bI,t)
t=this.a
u=this.z.f
t=t.bH
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bJ
u.a.uniform1f(u.d,m)
break
case C.d:this.R(r,this.z.e)
u=this.a
t=this.z.e
u.af(u.dO,u.bI,t)
t=this.a
u=this.z.f
t=t.bH
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bJ
u.a.uniform1f(u.d,m)
break}if(w.z>0){p=this.dx.e.length
u=this.a.dZ
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cw
if(k>=q.length)return H.j(q,k)
h=q[k]
q=l.an(i.a)
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
u=this.a.e_
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cz
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbk(i)
m=h.b
g=q.gcQ(q)
f=q.gcR(q)
q=q.gcS(q)
m.a.uniform3f(m.d,g,f,q)
q=l.M(i.gbk(i))
f=h.c
f.a.uniform3f(f.d,q.a,q.b,q.c)
q=i.gat(i)
f=h.d
g=q.gbU()
m=q.gbq()
q=q.gbC()
f.a.uniform3f(f.d,g,m,q)
q=i.gcl()
m=h.e
m.a.uniform1f(m.d,q)
q=i.gcm()
m=h.f
m.a.uniform1f(m.d,q)
q=i.gcn()
m=h.r
m.a.uniform1f(m.d,q);++k}}if(w.ch>0){p=this.dx.r.length
u=this.a.e0
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cA
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbk(i)
m=h.b
g=q.gcQ(q)
f=q.gcR(q)
q=q.gcS(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcv(i).jJ()
f=h.c
g=q.gb0(q)
m=q.gb1(q)
q=q.gb2()
f.a.uniform3f(f.d,g,m,q)
q=l.M(i.gbk(i))
m=h.d
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gat(i)
m=h.e
g=q.gbU()
f=q.gbq()
q=q.gbC()
m.a.uniform3f(m.d,g,f,q)
q=i.gjI()
f=h.f
f.a.uniform1f(f.d,q)
q=i.gjH()
f=h.r
f.a.uniform1f(f.d,q)
q=i.gcl()
f=h.x
f.a.uniform1f(f.d,q)
q=i.gcm()
f=h.y
f.a.uniform1f(f.d,q)
q=i.gcn()
f=h.z
f.a.uniform1f(f.d,q);++k}}if(w.cx>0){p=this.dx.x.length
u=this.a.e1
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.x,t=u.length,q=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
m=this.a.cB
if(k>=m.length)return H.j(m,k)
h=m[k]
m=i.gbl()
H.p(r,"$isc",q,"$asc")
if(!C.a.au(r,m)){m.sa8(0,r.length)
C.a.h(r,m)}m=i.gcv(i)
g=h.d
f=m.gb0(m)
e=m.gb1(m)
m=m.gb2()
g.a.uniform3f(g.d,f,e,m)
m=i.giP()
e=h.b
f=m.gb0(m)
g=m.gb1(m)
m=m.gb2()
e.a.uniform3f(e.d,f,g,m)
m=i.gal(i)
g=h.c
f=m.gb0(m)
e=m.gb1(m)
m=m.gb2()
g.a.uniform3f(g.d,f,e,m)
m=l.an(i.gcv(i))
e=m.a
if(typeof e!=="number")return e.j()
f=m.b
if(typeof f!=="number")return f.j()
g=m.c
if(typeof g!=="number")return g.j()
g=m.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gat(i)
f=h.f
e=g.gbU()
m=g.gbq()
g=g.gbC()
f.a.uniform3f(f.d,e,m,g)
g=i.gbl()
m=g.ga9(g)
if(!m){m=h.x
m.a.uniform1i(m.d,1)}else{m=h.r
f=g.ga9(g)
e=m.a
m=m.d
if(!f)e.uniform1i(m,0)
else e.uniform1i(m,g.ga8(g))
m=h.x
m.a.uniform1i(m.d,0)}++k}}if(w.cy>0){p=this.dx.y.length
u=this.a.e2
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.y,t=u.length,q=[P.y],m=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cC
if(k>=g.length)return H.j(g,k)
h=g[k]
g=i.gbl()
H.p(r,"$isc",m,"$asc")
if(!C.a.au(r,g)){g.sa8(0,r.length)
C.a.h(r,g)}d=l.j(0,i.gV(i))
g=i.gV(i).M(new V.r(0,0,0))
f=h.b
e=g.gcQ(g)
c=g.gcR(g)
g=g.gcS(g)
f.a.uniform3f(f.d,e,c,g)
g=d.M(new V.r(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.bg(0)
c=h.d
n=new Float32Array(H.c0(H.p(new V.aO(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).aj(0,!0),"$isc",q,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,n)
c=i.gat(i)
g=h.e
e=c.gbU()
f=c.gbq()
c=c.gbC()
g.a.uniform3f(g.d,e,f,c)
c=i.gbl()
g=c.ga9(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.ga9(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ga8(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcl()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcm()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcn()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){p=this.dx.z.length
u=this.a.e3
u.a.uniform1i(u.d,p)
u=a.db
l=u.gV(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cD
if(k>=q.length)return H.j(q,k)
h=q[k]
q=i.gbl()
H.p(r,"$isc",z,"$asc")
if(!C.a.au(r,q)){q.sa8(0,r.length)
C.a.h(r,q)}q=i.gbk(i)
m=h.b
g=q.gcQ(q)
f=q.gcR(q)
q=q.gcS(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcv(i)
f=h.c
g=q.gb0(q)
m=q.gb1(q)
q=q.gb2()
f.a.uniform3f(f.d,g,m,q)
q=i.giP()
m=h.d
g=q.gb0(q)
f=q.gb1(q)
q=q.gb2()
m.a.uniform3f(m.d,g,f,q)
q=i.gal(i)
f=h.e
g=q.gb0(q)
m=q.gb1(q)
q=q.gb2()
f.a.uniform3f(f.d,g,m,q)
q=l.M(i.gbk(i))
m=h.f
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gbl()
m=q.ga9(q)
if(!m){q=h.x
q.a.uniform1i(q.d,1)}else{m=h.r
g=q.ga9(q)
f=m.a
m=m.d
if(!g)f.uniform1i(m,0)
else f.uniform1i(m,q.ga8(q))
q=h.x
q.a.uniform1i(q.d,0)}q=i.gat(i)
m=h.y
g=q.gbU()
f=q.gbq()
q=q.gbC()
m.a.uniform3f(m.d,g,f,q)
q=i.gjQ()
f=h.z
f.a.uniform1f(f.d,q)
q=i.gjR()
f=h.Q
f.a.uniform1f(f.d,q)
q=i.gcl()
f=h.ch
f.a.uniform1f(f.d,q)
q=i.gcm()
f=h.cx
f.a.uniform1f(f.d,q)
q=i.gcn()
f=h.cy
f.a.uniform1f(f.d,q);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.c:this.R(r,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.dP,z.bK,u)
break
case C.d:this.R(r,this.Q.e)
z=this.a
u=this.Q.e
z.af(z.dQ,z.bK,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gV(u).bg(0)
a.Q=u}z=z.fy
z.toString
z.ap(u.aj(0,!0))}if(w.dy){this.R(r,this.ch)
z=this.a
u=this.ch
z.af(z.dR,z.dS,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.bL
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
break
case C.c:this.R(r,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.dT,z.bM,u)
u=this.a
z=this.cx.f
u=u.bL
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break
case C.d:this.R(r,this.cx.e)
z=this.a
u=this.cx.e
z.af(z.dU,z.bM,u)
u=this.a
z=this.cx.f
u=u.bL
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.bO
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
u=this.a
q=this.cy.ch
u=u.bN
u.a.uniform1f(u.d,q)
break
case C.c:this.R(r,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.dV,z.bP,u)
u=this.a
z=this.cy.f
u=u.bO
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.bN
z.a.uniform1f(z.d,q)
break
case C.d:this.R(r,this.cy.e)
z=this.a
u=this.cy.e
z.af(z.dW,z.bP,u)
u=this.a
z=this.cy.f
u=u.bO
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.bN
z.a.uniform1f(z.d,q)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.bQ
z.a.uniform1f(z.d,t)
break
case C.c:this.R(r,this.db.d)
z=this.a
t=this.db.d
z.ak(z.dX,z.bR,t)
t=this.a
z=this.db.f
t=t.bQ
t.a.uniform1f(t.d,z)
break
case C.d:this.R(r,this.db.e)
z=this.a
t=this.db.e
z.af(z.dY,z.bR,t)
t=this.a
z=this.db.f
t=t.bQ
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<r.length;++o)r[o].aG(a)
z=b.e
z.aG(a)
z.b7(a)
z.bp(a)
if(u)a.a.disable(3042)
for(o=0;o<r.length;++o)r[o].bp(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hZ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.df().aJ},
q:{
eH:function(){var z,y,x,w
z=new O.eG()
y=O.d9(V.aD)
z.e=y
y.br(z.gfq(),z.gfs())
y=new O.bo(z,"emission")
y.c=C.b
y.f=new V.aa(0,0,0)
z.f=y
y=new O.bo(z,"ambient")
y.c=C.b
y.f=new V.aa(0,0,0)
z.r=y
y=new O.bo(z,"diffuse")
y.c=C.b
y.f=new V.aa(0,0,0)
z.x=y
y=new O.bo(z,"invDiffuse")
y.c=C.b
y.f=new V.aa(0,0,0)
z.y=y
y=new O.it(z,"specular")
y.c=C.b
y.f=new V.aa(0,0,0)
y.ch=100
z.z=y
y=new O.iq(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.bo(z,"reflect")
y.c=C.b
y.f=new V.aa(0,0,0)
z.cx=y
y=new O.is(z,"refract")
y.c=C.b
y.f=new V.aa(0,0,0)
y.ch=1
z.cy=y
y=new O.ip(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.i9()
y.bs(D.a2)
y.e=H.a([],[D.cC])
y.f=H.a([],[D.iN])
y.r=H.a([],[D.jo])
y.x=H.a([],[D.jB])
y.y=H.a([],[D.jC])
y.z=H.a([],[D.jD])
y.Q=null
y.ch=null
y.bW(y.gfp(),y.gfQ(),y.gfS())
z.dx=y
x=y.Q
if(x==null){x=D.J()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.n]}
w=H.f(z.gh2(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.J()
w.ch=y}x=H.f(z.gbt(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ip:{"^":"dp;0f,a,b,0c,0d,0e",
h6:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.G(this.b,y,a,this,[P.y])
z.b=!0
this.a.X(z)}},
aX:function(){this.cZ()
this.h6(1)}},dp:{"^":"b;",
X:[function(a){this.a.X(H.i(a,"$isn"))},function(){return this.X(null)},"eO","$1","$0","gbt",0,2,1],
aX:["cZ",function(){}],
h8:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.f(this.gbt(),{func:1,ret:-1,args:[D.n]})
C.a.W(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.gt()
z.toString
y=H.f(this.gbt(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G(this.b+".texture2D",x,this.d,this,[T.cN])
z.b=!0
this.a.X(z)}},
h9:function(a){},
sbm:function(a){var z
if(a==null){if(this.c===C.c){this.c=C.f
z=this.a
z.a=null
z.X(null)}}else{z=this.c
if(z!==C.c){if(z===C.b)this.aX()
this.c=C.c
this.h9(null)
z=this.a
z.a=null
z.X(null)}}this.h8(a)}},iq:{"^":"dp;a,b,0c,0d,0e"},bo:{"^":"dp;0f,a,b,0c,0d,0e",
du:function(a){var z,y
if(!J.Z(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.aa])
y.b=!0
this.a.X(y)}},
aX:["bZ",function(){this.cZ()
this.du(new V.aa(1,1,1))}],
sat:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aX()
z=this.a
z.a=null
z.X(null)}this.du(b)}},is:{"^":"bo;0ch,0f,a,b,0c,0d,0e",
h7:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.X(z)}},
aX:function(){this.bZ()
this.h7(1)}},it:{"^":"bo;0ch,0f,a,b,0c,0d,0e",
cd:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.X(z)}},
aX:function(){this.bZ()
this.cd(100)}},dC:{"^":"b;"}}],["","",,T,{"^":"",dD:{"^":"d1;"},cN:{"^":"dD;"},jx:{"^":"cN;0a,0b,0c,0d,0e,0f",
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b
return b},
ga9:function(a){var z=this.d
z=z==null?null:z.ga9(z)
if(z==null){z=this.c
z=z==null?null:z.ga9(z)}return z==null?!1:z},
gt:function(){var z=this.f
if(z==null){z=D.J()
this.f=z}return z},
aG:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.aG(a)}},
bp:function(a){var z=this.d
if(z!=null){z.bp(a)
this.d=null}}},jy:{"^":"cN;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b
return b},
ga9:function(a){return this.d},
gt:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
aG:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
bp:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},jz:{"^":"b;a,0b,0c,0d,0e",
ic:function(a,b,c,d,e){var z,y,x,w
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
w=new T.jy()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ah
W.a4(x,"load",H.f(new T.jA(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ib:function(a,b,c,d){return this.ic(a,!1,b,c,d)},
h4:function(a,b,c){var z,y,x,w
b=V.dZ(b,2)
z=V.dZ(a.width,2)
y=V.dZ(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d6(null,null)
x.width=z
x.height=y
w=H.i(C.k.en(x,"2d"),"$ise6")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lO(w.getImageData(0,0,x.width,x.height))}}},jA:{"^":"v:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h4(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.N.iI(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.dK()}++x.e}}}],["","",,V,{"^":"",hh:{"^":"b;",
bh:function(a,b){return!0},
i:function(a){return"all"},
$iscm:1},cm:{"^":"b;"},eF:{"^":"b;",
bh:["ew",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].bh(0,b))return!0
return!1}],
i:["cY",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$iscm:1},bR:{"^":"eF;0a",
bh:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cY(0)+"]"}},ja:{"^":"b;0a",
eC:function(a){var z,y
if(a.a.length<=0)throw H.d(P.t("May not create a SetMatcher with zero characters."))
z=new H.aN(0,0,[P.x,P.a8])
for(y=new H.eB(a,a.gl(a),0,[H.aA(a,"w",0)]);y.H();)z.m(0,y.d,!0)
this.a=z},
bh:function(a,b){return this.a.dH(0,b)},
i:function(a){var z=this.a
return P.dB(new H.eA(z,[H.A(z,0)]),0,null)},
$iscm:1,
q:{
ac:function(a){var z=new V.ja()
z.eC(a)
return z}}},f1:{"^":"b;a,b,0c,0d",
gig:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fb(this.a.L(0,b))
w.a=H.a([],[V.cm])
w.c=!1
C.a.h(this.c,w)
return w},
i2:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.bh(0,a))return w}return},
i:function(a){return this.b}},f8:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h9(this.b,"\n","\\n")
y=H.h9(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},f9:{"^":"b;a,b,0c",
i:function(a){return this.b}},jH:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f1(this,b)
z.c=H.a([],[V.fb])
this.a.m(0,b,z)}return z},
bn:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.f9(this,a)
y=P.o
z.c=new H.aN(0,0,[y,y])
this.b.m(0,a,z)}return z},
iN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.a([],[V.f8])
y=this.c
x=[P.x]
w=H.a([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bv(a,t)
r=y.i2(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dB(w,0,null)
throw H.d(P.t("Untokenizable string [state: "+y.gig(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.a([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dB(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.f8(o==null?p.b:o,q,t)}++t}}}},fb:{"^":"eF;b,0c,0a",
i:function(a){return this.b.b+": "+this.cY(0)}}}],["","",,X,{"^":"",e5:{"^":"b;",$isaP:1},hV:{"^":"f4;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z}},iI:{"^":"b;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.J()
this.f=z}return z},
ba:[function(a){var z
H.i(a,"$isn")
z=this.f
if(!(z==null))z.A(a)},function(){return this.ba(null)},"iZ","$1","$0","gd1",0,2,1],
se8:function(a){var z,y,x
if(!J.Z(this.b,a)){z=this.b
if(z!=null){z=z.gt()
z.toString
y=H.f(this.gd1(),{func:1,ret:-1,args:[D.n]})
C.a.W(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gt()
z.toString
y=H.f(this.gd1(),{func:1,ret:-1,args:[D.n]})
C.a.h(z.a,y)}z=new D.G("mover",x,this.b,this,[U.a6])
z.b=!0
this.ba(z)}},
$isaP:1,
$ise5:1},f4:{"^":"b;"}}],["","",,V,{"^":"",jk:{"^":"b;0a,0b",
eE:function(a,b){var z,y,x,w,v,u,t
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
W.a4(z,"scroll",H.f(new V.jn(x),{func:1,ret:-1,args:[t]}),!1,t)},
hN:function(a,b,c){var z,y,x,w
a=H.z(C.e.hS(a,0,4))
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
cj:function(a,b){return this.hN(a,b,"")},
U:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.p(a,"$isc",[P.o],"$asc")
this.hb()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iN(C.a.i8(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
hb:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jH()
y=P.o
z.a=new H.aN(0,0,[y,V.f1])
z.b=new H.aN(0,0,[y,V.f9])
z.c=z.L(0,"Start")
y=z.L(0,"Start").B(0,"Bold")
x=V.ac(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").B(0,"Bold")
x=new V.bR()
w=[V.cm]
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").B(0,"BoldEnd")
x=V.ac(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").B(0,"Italic")
x=V.ac(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").B(0,"Italic")
x=new V.bR()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").B(0,"ItalicEnd")
x=V.ac(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").B(0,"Code")
x=V.ac(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").B(0,"Code")
x=new V.bR()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").B(0,"CodeEnd")
x=V.ac(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").B(0,"LinkHead")
x=V.ac(new H.a9("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").B(0,"LinkTail")
x=V.ac(new H.a9("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").B(0,"LinkEnd")
y=V.ac(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").B(0,"LinkHead")
y=new V.bR()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").B(0,"LinkEnd")
y=V.ac(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").B(0,"LinkTail")
y=new V.bR()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").B(0,"Other").a,new V.hh())
x=z.L(0,"Other").B(0,"Other")
y=new V.bR()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.bn("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.bn("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.bn("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.bn("Link")
x=z.L(0,"Other")
x.d=x.a.bn("Other")
this.b=z},
q:{
jl:function(a,b){var z=new V.jk()
z.eE(a,!0)
return z}}},jn:{"^":"v:24;a",
$1:function(a){P.dE(C.m,new V.jm(this.a))}},jm:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.h.am(document.documentElement.scrollTop)
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
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
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
z=V.jl("3Dart Craft",!0)
y=[P.o]
z.U(H.a(["This example is in development and may still have a few issues and glitches."],y))
x=W.d6(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
z.a.appendChild(x)
z.cj(1,"About")
z.U(H.a(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],y))
z.U(H.a(["\xab[Back to Examples List|../../]"],y))
z.cj(1,"Controls")
z.U(H.a(["\u2022 _Currently there are no controls for mobile browsers_"],y))
z.U(H.a(["\u2022 *Esc* to release the mouse capture"],y))
z.U(H.a(["\u2022 *W* or *Up arrow* to move forward"],y))
z.U(H.a(["\u2022 *S* or *Down arrow* to move backward"],y))
z.U(H.a(["\u2022 *A* or *Left arrow* to strife left"],y))
z.U(H.a(["\u2022 *D* or *Right arror* to strife right"],y))
z.U(H.a(["\u2022 *Space bar* to jump"],y))
z.U(H.a(["\u2022 *Tab* cycles the block selected which can be placed"],y))
z.U(H.a(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],y))
z.U(H.a(["\u2022 *Left click* or *Q* removes the currently highlighted block"],y))
z.U(H.a(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],y))
z.U(H.a(["\u2022 *O* to return the starting location"],y))
z.cj(1,"Help wanted")
z.U(H.a(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],y))
z.U(H.a(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dE(C.m,B.m3())},
nr:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
z=document.getElementById("targetCanvas")
if(z==null)H.u(P.t("Failed to find an element with the identifier, targetCanvas."))
y=E.jF(z,!0,!0,!0,!1)
x=new B.iu(y)
w=P.x
x.b=new H.aN(0,0,[w,B.W])
x.c=new H.aN(0,0,[w,[P.c,P.x]])
x.d=H.a([],[O.eG])
v=new V.aa(1,1,1)
u=new V.r(0,0,0)
t=new V.r(0.5,-1,0.2).v(0,u)
t=U.aY(V.eJ(u,new V.H(0,0,1),new V.H(t.a,t.b,t.c)))
u=new D.cC()
u.c=new V.aa(1,1,1)
u.a=new V.H(0,0,1)
s=u.b
u.b=t
t=t.gt()
t.toString
r=H.f(u.gfw(),{func:1,ret:-1,args:[D.n]})
C.a.h(t.a,r)
t=new D.G("mover",s,u.b,u,[U.a6])
t.b=!0
u.aW(t)
if(!u.c.u(0,v)){s=u.c
u.c=v
t=new D.G("color",s,v,u,[V.aa])
t.b=!0
u.aW(t)}x.e=u
q=x.I(x.C("boundary"),!1)
p=x.I(x.C("brick"),!1)
o=x.I(x.C("dirt"),!1)
n=x.I(x.C("dryLeavesSide"),!1)
m=x.I(x.C("dryLeavesTop"),!1)
l=x.I(x.C("leaves"),!1)
k=x.I(x.C("rock"),!1)
j=x.I(x.C("sand"),!1)
i=x.I(x.C("trunkEnd"),!1)
h=x.I(x.C("trunkSide"),!1)
g=x.I(x.C("trunkTilted"),!1)
f=x.I(x.C("turfSide"),!1)
e=x.I(x.C("turfTop"),!1)
d=x.I(x.C("woodEnd"),!1)
c=x.I(x.C("woodSide"),!1)
b=x.I(x.C("woodTilted"),!1)
a=x.I(x.C("blackShine"),!0)
a0=x.I(x.C("redShine"),!0)
a1=x.I(x.C("yellowShine"),!0)
a2=x.I(x.C("whiteShine"),!0)
a3=x.I(x.C("mushroomBottom"),!1)
a4=x.I(x.C("mushroomSide"),!1)
a5=x.I(x.C("mushroomTop"),!1)
a6=x.I(x.C("grass"),!1)
a7=x.I(x.C("fern"),!1)
a8=x.I(x.C("blueFlowers"),!1)
a9=x.I(x.C("redFlowers"),!1)
b0=x.I(x.C("whiteFlowers"),!1)
u=T.cN
t=P.eC([x.C("water1"),x.C("water2"),x.C("water3")],!0,u)
r=new T.jx()
r.a=0
r.b=0
r.e=H.p(t,"$isc",[u],"$asc")
x.x=r
b1=x.I(r,!0)
x.b.m(0,100,new B.W(q,q,q,q,q,q))
x.b.m(0,101,new B.W(o,o,o,o,o,o))
x.b.m(0,102,new B.W(e,o,f,f,f,f))
x.b.m(0,103,new B.W(k,k,k,k,k,k))
x.b.m(0,104,new B.W(j,j,j,j,j,j))
x.b.m(0,105,new B.W(m,o,n,n,n,n))
x.b.m(0,106,new B.W(i,i,h,h,h,h))
x.b.m(0,107,new B.W(h,h,g,g,i,i))
x.b.m(0,108,new B.W(g,g,i,i,g,g))
x.b.m(0,109,new B.W(p,p,p,p,p,p))
x.b.m(0,110,new B.W(a0,a0,a0,a0,a0,a0))
x.b.m(0,111,new B.W(a2,a2,a2,a2,a2,a2))
x.b.m(0,112,new B.W(a1,a1,a1,a1,a1,a1))
x.b.m(0,113,new B.W(a,a,a,a,a,a))
x.b.m(0,114,new B.W(l,l,l,l,l,l))
x.b.m(0,115,new B.W(d,d,c,c,c,c))
x.b.m(0,116,new B.W(c,c,b,b,d,d))
x.b.m(0,117,new B.W(b,b,d,d,b,b))
x.b.m(0,1,new B.W(b1,b1,b1,b1,b1,b1))
w=[w]
u=H.p(H.a([a6],w),"$isc",w,"$asc")
x.c.m(0,200,u)
u=H.p(H.a([a7],w),"$isc",w,"$asc")
x.c.m(0,201,u)
u=H.p(H.a([b0],w),"$isc",w,"$asc")
x.c.m(0,202,u)
u=H.p(H.a([a8],w),"$isc",w,"$asc")
x.c.m(0,203,u)
u=H.p(H.a([a9],w),"$isc",w,"$asc")
x.c.m(0,204,u)
w=H.p(H.a([a5,a3,a4],w),"$isc",w,"$asc")
x.c.m(0,205,w)
x.f=x.d4("selection")
x.r=x.d4("crosshair")
b2=B.kf(x)
b3=B.iL(y,b2)
b4=new M.hM()
w=O.d9(E.ag)
b4.d=w
w.br(b4.gfz(),b4.gfA())
b4.e=null
b4.f=null
b4.r=null
b4.x=null
b5=new X.iI()
b5.c=1.0471975511965976
b5.d=0.1
b5.e=2000
b5.se8(null)
w=b5.c
if(!$.m.$2(w,1.0471975511965976)){s=b5.c
b5.c=1.0471975511965976
w=new D.G("fov",s,1.0471975511965976,b5,[P.y])
w.b=!0
b5.ba(w)}w=b5.d
if(!$.m.$2(w,0.1)){s=b5.d
b5.d=0.1
w=new D.G("near",s,0.1,b5,[P.y])
w.b=!0
b5.ba(w)}w=b5.e
if(!$.m.$2(w,2000)){s=b5.e
b5.e=2000
w=new D.G("far",s,2000,b5,[P.y])
w.b=!0
b5.ba(w)}w=b4.a
if(w!==b5){if(w!=null){w=w.gt()
w.toString
u=H.f(b4.gaQ(),{func:1,ret:-1,args:[D.n]})
C.a.W(w.a,u)}s=b4.a
b4.a=b5
w=b5.gt()
w.toString
u=H.f(b4.gaQ(),{func:1,ret:-1,args:[D.n]})
C.a.h(w.a,u)
w=new D.G("camera",s,b4.a,b4,[X.e5])
w.b=!0
b4.b9(w)}b6=new X.hV()
w=new V.aX(0,0,0,1)
b6.a=w
b6.b=!0
b6.c=2000
b6.d=!0
b6.e=0
b6.f=!1
w=V.dv(0,0,1,1)
b6.r=w
w=b4.b
if(w!==b6){if(w!=null){w=w.gt()
w.toString
u=H.f(b4.gaQ(),{func:1,ret:-1,args:[D.n]})
C.a.W(w.a,u)}s=b4.b
b4.b=b6
w=b6.gt()
w.toString
u=H.f(b4.gaQ(),{func:1,ret:-1,args:[D.n]})
C.a.h(w.a,u)
w=new D.G("target",s,b4.b,b4,[X.f4])
w.b=!0
b4.b9(w)}w=b4.e
if(w==null){w=D.J()
b4.e=w}u={func:1,ret:-1,args:[D.n]}
t=H.f(b2.giQ(b2),u)
C.a.h(w.a,t)
b4.a.se8(b3.r)
for(w=b2.e,t=w.length,b7=0;b7<w.length;w.length===t||(0,H.B)(w),++b7){b8=w[b7]
r=b4.d
b9=H.A(r,0)
H.E(b8,b9)
c0=[b9]
if(r.bb(H.a([b8],c0))){c1=r.a
c2=c1.length
C.a.h(c1,b8)
b9=H.p(H.a([b8],c0),"$ish",[b9],"$ash")
r=r.c
if(r!=null)r.$2(c2,b9)}}b4.d.h(0,b3.cy)
b2.f=b3
w=y.d
if(w!==b4){if(w!=null){w=w.gt()
w.toString
t=H.f(y.gd_(),u)
C.a.W(w.a,t)}y.d=b4
w=b4.gt()
w.toString
u=H.f(y.gd_(),u)
C.a.h(w.a,u)
y.eH()}b3.cU()
w=b4.b
v=new V.aX(0.576,0.784,0.929,1)
if(!w.a.u(0,v)){s=w.a
w.a=v
u=new D.G("color",s,v,w,[V.aX])
u.b=!0
w=w.x
if(!(w==null))w.A(u)}P.cO(C.A,new B.ma(y,b2))},"$0","m3",0,0,3],
ho:{"^":"b;a,b,c,d,e,f",
i:function(a){return H.l(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.hq(this.gaN(this))+")"},
gaN:function(a){var z=this.f
z=z==null?null:z.a3(this.a,this.b,this.c)
if(z==null)z=this.b<0?100:0
return z}},
iC:{"^":"b;a,b"},
e7:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x",
ey:function(a){var z,y,x,w,v,u,t,s,r,q
this.d=new Uint8Array(12288)
this.e=H.a([],[E.ag])
for(z=this.c.e,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
v=E.bk(null,!0,null,"",null,null)
u=w.y
t=H.A(u,0)
H.E(v,t)
s=[t]
if(u.bb(H.a([v],s))){r=u.a
q=r.length
C.a.h(r,v)
t=H.p(H.a([v],s),"$ish",[t],"$ash")
u=u.c
if(u!=null)u.$2(q,t)}u=this.e;(u&&C.a).h(u,v)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
a3:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48||a<0||a>=16||c<0||c>=16)return 0
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.j(z,y)
return z[y]},
aO:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48)return 0
if(a<0){z=this.gah(this)
z=z==null?null:z.aO(a+16,b,c)
return z==null?0:z}if(a>=16){z=this.gal(this)
z=z==null?null:z.aO(a-16,b,c)
return z==null?0:z}if(c<0){z=this.gco(this)
z=z==null?null:z.aO(a,b,c+16)
return z==null?0:z}if(c>=16){z=this.gcF()
z=z==null?null:z.aO(a,b,c-16)
return z==null?0:z}z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.j(z,y)
return z[y]},
a7:function(a,b,c,d){var z,y
H.z(a)
H.z(b)
if(b<0||b>=48||a<0||a>=16||c<0||c>=16)return!1
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.j(z,y)
z[y]=d
return!0},
gah:function(a){return this.c.aK(this.a-16,this.b)},
gcF:function(){return this.c.aK(this.a,this.b+16)},
gal:function(a){return this.c.aK(this.a+16,this.b)},
gco:function(a){return this.c.aK(this.a,this.b-16)},
cO:function(a,b,c){var z,y
for(z=47;z>=0;--z){y=this.a3(a,z,b)
if(y>=100&&y<=117)return z}return c},
iO:function(a,b){return this.cO(a,b,48)},
iR:function(){if(this.x||!this.r)return
this.r=!1
this.f=!1
var z=B.dz(this.c.a,null)
z.hR(this)
z.cE(0,this.e)},
saB:function(a){var z,y,x
for(z=this.e,y=z.length,x=0;x<y;++x)z[x].b=a},
iS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
if(this.x||this.r){this.saB(!1)
return}z=V.dv(this.a,this.b,16,16)
y=z.e9(a)
x=y.a
w=a.a
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.e(w)
v=x-w
x=y.b
u=a.b
if(typeof x!=="number")return x.v()
if(typeof u!=="number")return H.e(u)
t=x-u
if(v*v+t*t<100){this.saB(!0)
return}s=z.e9(b)
x=b.a
if(typeof x!=="number")return x.v()
r=b.b
if(typeof r!=="number")return r.v()
r=new V.a_(x-w,r-u)
q=r.w(0,Math.sqrt(r.D(r)))
r=s.a
if(typeof r!=="number")return r.v()
x=s.b
if(typeof x!=="number")return x.v()
p=new V.a_(r-w,x-u)
o=p.D(p)
if(o>6400){this.saB(!1)
return}this.saB(q.D(p.w(0,o))>0)},
q:{
ht:function(a){var z=new B.e7(a)
z.ey(a)
return z}}},
hW:{"^":"b;0a,0b,0c",
e4:function(a){var z
this.c=a
this.fY()
C.t.i1(this.c.d,0,12288,0)
this.hl()
this.f1()
this.f_()
this.hj()
this.eV()
this.fX()
this.eS()
this.hi()
a.x=!1
a.f=!0
a.saB(!1)
z=a.gah(a)
if(!(z==null))z.f=!0
z=a.gal(a)
if(!(z==null))z.f=!0
z=a.gcF()
if(!(z==null))z.f=!0
z=a.gco(a)
if(!(z==null))z.f=!0},
ae:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=this.c
x=(a+y.a)*c
y=(b+y.b)*c
w=new B.b7(x,y)
v=w.n(0,$.$get$el().j(0,x+y))
y=Math.floor(v.a)
x=Math.floor(v.b)
u=new B.b7(y,x)
t=u.n(0,$.$get$dd().j(0,y+x))
s=v.v(0,u)
w=new B.hO(z.a,u,w.v(0,t),s)
w.e=0
w.ac(1,0)
w.ac(0,1)
z=s.a
x=s.b
r=z+x
if(r<=1){q=1-r
if(q>z||q>x)if(z>x)w.ac(1,-1)
else w.ac(-1,1)
else w.ac(1,1)
w.ac(0,0)}else{q=2-r
if(q<z||q<x)if(z>x)w.ac(2,0)
else w.ac(0,2)
else w.ac(0,0)
w.ac(1,1)}return w.e/47*0.5+0.5},
cg:function(a,b){var z,y
z=this.b
y=(a+3)*22+(b+3)
if(y<0||y>=484)return H.j(z,y)
return z[y]},
fY:function(){var z,y,x,w,v
for(z=0,y=-3;y<19;++y)for(x=-3;x<19;++x){w=C.h.aa(Math.pow(0.6*this.ae(y,x,0.001)+0.3*this.ae(y,x,0.01)+0.1*this.ae(y,x,0.1),2)*48)
if(w>=48)w=47
v=this.b
if(z<0||z>=484)return H.j(v,z)
v[z]=w;++z}},
hl:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.hm(z,y)},
hm:function(a,b){var z,y,x,w,v
z=this.cg(a,b)
for(y=z-2,x=z<8,w=0;w<=z;++w){if(x)v=y<=w?104:103
else if(z===w)v=102
else v=y<=w?101:103
this.c.a7(a,w,b,v)}},
f1:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.f2(z,y)},
f2:function(a,b){var z,y
z=this.c.cO(a,b,0)
if(z<8)for(y=8;y>z;--y)this.c.a7(a,y,b,1)},
f_:function(){var z,y
for(z=-1;z<=16;++z)for(y=-1;y<=16;++y)this.f0(z,y)},
f0:function(a,b){var z,y,x,w,v,u
if(this.cg(a,b)<8)for(z=10;z>6;--z)for(y=-1;y<=1;++y)for(x=a+y,w=-1;w<=1;++w){v=b+w
u=this.c.a3(x,z,v)
if(u===102||u===105)this.c.a7(x,z,v,104)}},
hj:function(){var z,y
for(z=-3;z<19;++z)for(y=-3;y<19;++y)if(this.ae(z,y,1.5)<0.1)this.eW(z,y)},
eW:function(a,b){var z,y,x,w
z=this.c
y=a+z.a
if(y>=-30)if(y<30){z=b+z.b
z=z>=-30&&z<30}else z=!1
else z=!1
if(z)return
x=this.cg(a,b)
if(x<10)return
for(w=1;w<8;++w)this.c.a7(a,x+w,b,106)
this.eX(a,b)
this.eY(a,x+8,b)},
eX:function(a,b){var z,y,x,w,v,u
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)if(y+w*w<=10)for(v=b+w,u=47;u>=0;--u)if(this.c.a3(x,u,v)===102){this.c.a7(x,u,v,105)
break}},
eY:function(a,b,c){var z,y,x,w,v,u,t,s
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)for(v=y+w*w,u=b+w,t=-3;t<=3;++t)if(v+t*t<=12){s=c+t
if(this.c.a3(x,u,s)===0)this.c.a7(x,u,s,114)}},
fX:function(){var z,y,x,w,v
for(z=0;z<16;++z)for(y=z-400,x=z+400,w=0;w<16;++w)if(this.ae(z,w,12.5)<0.1)this.aS(z,w,204)
else if(this.ae(x,w,12.5)<0.1)this.aS(z,w,203)
else{v=w+400
if(this.ae(z,v,12.5)<0.1)this.aS(z,w,202)
else if(this.ae(x,v,12.5)<0.15)this.aS(z,w,200)
else if(this.ae(y,w,12.5)<0.1)this.aS(z,w,201)
else if(this.ae(z,w-400,12.5)<0.08)this.aS(z,w,205)}},
aS:function(a,b,c){var z,y
z=this.c.cO(a,b,0)
y=this.c.a3(a,z,b)
if(y!==102&&y!==105)return
this.c.a7(a,z+1,b,c)},
eV:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.c
y=z.a
if(y+16>=-30)if(y<=30){z=z.b
z=z+16<-30||z>30}else z=!0
else z=!0
if(z)return
x=new B.hY(this)
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
eS:function(){var z,y,x
z=this.c
y=z.a
if(y+16>=-36)if(y<=12){z=z.b
z=z+16<-28||z>-22}else z=!0
else z=!0
if(z)return
x=new B.hX(this,-12,40,-25)
z=[P.x]
x.$5(110,0,0,H.a([0,1,2,3,4,4,3,2,4,4,3,2,1,0],z),H.a([1,0,0,0,1,2,3,3,4,5,6,6,6,5],z))
x.$5(110,6,0,H.a([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],z),H.a([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],z))
x.$5(113,12,0,H.a([0,0,0,0,0,1,2,1,2,3,3,3,3,3],z),H.a([2,3,4,5,6,1,1,4,4,2,3,4,5,6],z))
x.$5(113,17,0,H.a([0,0,0,0,0,0,1,2,1,2,3,3,3,3],z),H.a([1,2,3,4,5,6,1,1,4,4,2,3,5,6],z))
x.$5(113,22,0,H.a([0,2,1,1,1,1,1,1],z),H.a([1,1,1,2,3,4,5,6],z))},
hi:function(){var z,y,x,w,v,u
z=this.c
y=z.a
if(y+16>=-3)if(y<=3){z=z.b
z=z+16<-3||z>3}else z=!0
else z=!0
if(z)return
x=new B.hZ(this)
for(w=-3;w<=3;++w)for(v=0;v<=7;++v)for(z=2+v,u=-3;u<=3;++u)x.$4(w,z,u,0)
x.$4(0,2,0,113)
x.$4(0,3,0,112)
x.$4(0,4,0,112)
x.$4(0,5,0,112)
x.$4(0,6,0,112)}},
hY:{"^":"v;a",
$4:function(a,b,c,d){var z=this.a.c
z.a7(a-z.a,b,c-z.b,d)}},
hX:{"^":"v;a,b,c,d",
$5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
z=[P.x]
H.p(d,"$isc",z,"$asc")
H.p(e,"$isc",z,"$asc")
for(y=d.length-1,z=this.a,x=this.b+b,w=this.c+c,v=this.d;y>=0;--y){u=z.c
if(y>=d.length)return H.j(d,y)
t=d[y]
if(typeof t!=="number")return H.e(t)
s=u.a
if(y>=e.length)return H.j(e,y)
r=e[y]
if(typeof r!=="number")return H.e(r)
u.a7(x+t-s,w-r,v-u.b,a)}}},
hZ:{"^":"v;a",
$4:function(a,b,c,d){var z=this.a.c
z.a7(a-z.a,b,c-z.b,d)}},
ma:{"^":"v:36;a,b",
$1:function(a){var z
H.i(a,"$isap")
z=this.b
P.e_(C.h.ek(this.a.gi4(),2)+" fps, "+("chunks: "+z.d.length+", graveyard: "+z.c.length+", player: "+z.f.x.f.M(new V.r(0,0,0)).i(0)))}},
W:{"^":"b;a,b,c,d,e,f"},
iu:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x",
C:function(a){var z="./textures/"+a+".png"
return this.a.f.ib(z,!0,!1,!1)},
I:function(a,b){var z,y,x
z=O.eH()
z.dx.h(0,this.e)
y=z.r
y.sat(0,new V.aa(0.8,0.8,0.8))
y=z.x
y.sat(0,new V.aa(0.4,0.4,0.4))
z.r.sbm(a)
z.x.sbm(a)
z.db.sbm(a)
if(b){y=z.z
y.sat(0,new V.aa(0.5,0.5,0.5))
if(y.c===C.b){y.c=C.f
y.bZ()
y.cd(100)
x=y.a
x.a=null
x.X(null)}y.cd(3)}C.a.h(this.d,z)
return this.d.length-1},
d4:function(a){var z,y
z=this.C(a)
y=O.eH()
y.f.sbm(z)
y.db.sbm(z)
return y}},
iK:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
eA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.r
z.r=!0
y=z.d
y.Q=0.4
y.ch=0.4
y=new U.k_()
x=X.aC()
x.h(0,new X.Q(39,new X.V(!1,!1,!1)))
x.h(0,new X.Q(68,new X.V(!1,!1,!1)))
w=x.gag()
w.toString
v={func:1,ret:-1,args:[D.n]}
u=H.f(y.gfH(),v)
C.a.h(w.a,u)
y.a=x
x=X.aC()
x.h(0,new X.Q(37,new X.V(!1,!1,!1)))
x.h(0,new X.Q(65,new X.V(!1,!1,!1)))
C.a.h(x.gag().a,u)
y.b=x
x=X.aC()
x.h(0,new X.Q(81,new X.V(!1,!1,!1)))
C.a.h(x.gag().a,u)
y.c=x
x=X.aC()
x.h(0,new X.Q(69,new X.V(!1,!1,!1)))
C.a.h(x.gag().a,u)
y.d=x
x=X.aC()
x.h(0,new X.Q(40,new X.V(!1,!1,!1)))
x.h(0,new X.Q(83,new X.V(!1,!1,!1)))
C.a.h(x.gag().a,u)
y.e=x
x=X.aC()
x.h(0,new X.Q(38,new X.V(!1,!1,!1)))
x.h(0,new X.Q(87,new X.V(!1,!1,!1)))
C.a.h(x.gag().a,u)
y.f=x
x=U.c7()
x.saw(30)
x.saI(0)
u=x.gt()
u.toString
w=H.f(y.gaq(),v)
C.a.h(u.a,w)
y.r=x
x=U.c7()
x.saw(30)
x.saI(0)
C.a.h(x.gt().a,w)
y.x=x
x=U.c7()
x.saw(30)
x.saI(0)
C.a.h(x.gt().a,w)
y.y=x
y.z=null
y.Q=null
y.ch=60
y.cx=15
y.cy=0
y.db=null
y.dx=null
y.dy=null
y.a.a6(z)
y.b.a6(z)
y.c.a6(z)
y.d.a6(z)
y.e.a6(z)
y.f.a6(z)
y.r.saw(6)
y.x.saw(60)
z=y.x
x=z.r
if(!$.m.$2(x,-100)){t=z.r
z.r=-100
x=new D.G("acceleration",t,-100,z,[P.y])
x.b=!0
z.F(x)}y.y.saw(6)
y.dy=H.f(this.gfi(),{func:1,ret:V.r,args:[V.r,V.r]})
this.a=y
z=a.r
y=new U.jZ()
x=U.c7()
x.scP(0,!0)
x.scI(6.283185307179586)
x.scJ(0)
x.sS(0,0)
x.saw(100)
x.sG(0)
x.saI(0.5)
y.b=x
x=x.gt()
x.toString
w=H.f(y.gaq(),v)
C.a.h(x.a,w)
x=U.c7()
x.scP(0,!0)
x.scI(6.283185307179586)
x.scJ(0)
x.sS(0,0)
x.saw(100)
x.sG(0)
x.saI(0.5)
y.c=x
C.a.h(x.gt().a,w)
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
y.F(x)
x=y.f
if(x!==!1){y.f=!1
x=new D.G("invertX",x,!1,y,[P.a8])
x.b=!0
y.F(x)}x=y.r
if(x!==!1){y.r=!1
x=new D.G("invertY",x,!1,y,[P.a8])
x.b=!0
y.F(x)}y.a6(z)
y.b.scI(1.5707963267948966)
y.b.scJ(-1.5707963267948966)
y.b.saI(1)
y.c.saI(1)
y.b.scP(0,!1)
this.b=y
z=y.gt()
z.toString
y=H.f(new B.iM(this),v)
C.a.h(z.a,y)
y=U.a6
z=[y]
x=U.cF(H.a([this.a,this.b],z))
w=x.gt()
w.toString
u=H.f(this.ghn(),v)
C.a.h(w.a,u)
this.r=x
x=this.b
u=new U.et()
u.c=V.bp()
u.d=0
if(null!=x){u.a=x
x=x.gt()
x.toString
w=H.f(u.gaq(),v)
C.a.h(x.a,w)
y=new D.G("mover",null,u.a,u,[y])
y.b=!0
u.F(y)}this.x=U.cF(H.a([u,this.a,U.aY(V.dr(1,-1,1,1))],z))
y=U.aY(V.cn(-0.5,-0.5,-0.5))
x=new U.eY()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sel(-0.1)
x.sed(0,0)
x.seh(0)
w=x.d
if(!$.m.$2(w,0)){t=x.d
x.d=0
w=new D.G("deltaYaw",t,0,x,[P.y])
w.b=!0
x.F(w)}w=x.e
if(!$.m.$2(w,0.1)){t=x.e
x.e=0.1
w=new D.G("deltaPitch",t,0.1,x,[P.y])
w.b=!0
x.F(w)}w=x.f
if(!$.m.$2(w,0)){t=x.f
x.f=0
w=new D.G("deltaRoll",t,0,x,[P.y])
w.b=!0
x.F(w)}this.y=U.cF(H.a([y,x,U.aY(V.cn(0.5,0.5,0.5)),U.aY(V.dr(0.04,-0.04,0.04,1)),U.aY(V.cn(-0.15,0.06,-0.2)),this.x],z))
this.z=U.cF(H.a([U.aY(V.dr(0.005,-0.005,0.005,1)),U.aY(V.cn(0,0,-0.2)),this.x],z))
z=X.aC()
z.h(0,new X.Q(32,new X.V(!1,!1,!1)))
z.a6(a.r)
z=z.gag()
z.toString
y=H.f(this.gfG(),v)
C.a.h(z.a,y)
this.d=!0
y=X.aC()
y.h(0,new X.Q(9,new X.V(!1,!1,!1)))
y.h(0,new X.Q(9,new X.V(!1,!1,!0)))
y.a6(a.r)
y=y.gag()
y.toString
z=H.f(this.gfu(),v)
C.a.h(y.a,z)
z=X.aC()
z.h(0,new X.Q(69,new X.V(!1,!1,!1)))
z.h(0,new X.Q(81,new X.V(!1,!1,!1)))
z.a6(a.r)
z=z.gag()
z.toString
y=H.f(this.gft(),v)
C.a.h(z.a,y)
y=a.r.d
z=y.b
if(z==null){z=D.J()
y.b=z}y=H.f(this.gfB(),v)
C.a.h(z.a,y)
y=X.aC()
y.h(0,new X.Q(79,new X.V(!1,!1,!1)))
y.a6(a.r)
y=y.gag()
y.toString
v=H.f(this.gfT(),v)
C.a.h(y.a,v)
v=this.z
y=$.$get$a0()
z=$.$get$a3()
z=new Z.ad(y.a|z.a)
r=new F.f_()
y=new F.k2(r)
y.b=!1
x=F.bW
y.c=H.a([],[x])
r.a=y
y=new F.je(r)
y.b=H.a([],[F.eQ])
r.b=y
y=new F.jd(r)
y.b=H.a([],[F.ey])
r.c=y
y=new F.jc(r)
y.b=H.a([],[F.av])
r.d=y
r.e=null
y=r.a
w=new V.H(-1,-1,1)
w=w.w(0,Math.sqrt(w.D(w)))
q=y.bB(new V.co(1,2,4,6),new V.aX(1,0,0,1),new V.r(-1,-1,0),new V.M(0,1),w,z)
y=r.a
w=new V.H(1,-1,1)
w=w.w(0,Math.sqrt(w.D(w)))
p=y.bB(new V.co(0,3,4,6),new V.aX(0,0,1,1),new V.r(1,-1,0),new V.M(1,1),w,z)
y=r.a
w=new V.H(1,1,1)
w=w.w(0,Math.sqrt(w.D(w)))
o=y.bB(new V.co(0,2,5,6),new V.aX(0,1,0,1),new V.r(1,1,0),new V.M(1,0),w,z)
y=r.a
w=new V.H(-1,1,1)
w=w.w(0,Math.sqrt(w.D(w)))
n=y.bB(new V.co(0,2,4,7),new V.aX(1,1,0,1),new V.r(-1,1,0),new V.M(0,0),w,z)
r.d.hM(H.a([q,p,o,n],[x]))
r.aH()
z=this.c
this.Q=E.bk(null,!0,v,"",r,z.a.r)
this.ch=E.bk(null,!0,this.y,"",null,null)
v=E.ag
this.db=H.a([],[v])
for(y=z.a.d,x=y.length,m=0;m<y.length;y.length===x||(0,H.B)(y),++m){l=E.bk(null,!0,null,"",null,y[m])
w=this.ch.y
u=H.A(w,0)
H.E(l,u)
k=[u]
if(w.bb(H.a([l],k))){j=w.a
i=j.length
C.a.h(j,l)
u=H.p(H.a([l],k),"$ish",[u],"$ash")
w=w.c
if(w!=null)w.$2(i,u)}w=this.db;(w&&C.a).h(w,l)}this.e=0
z=E.bk(null,!0,null,"",null,z.a.f)
this.cx=z
this.f=null
this.cy=E.bk(H.a([this.Q,this.ch,z],[v]),!0,null,"",null,null)
this.dA()},
cU:function(){var z,y
z=this.c.aK(C.l.aa(0.5),C.l.aa(0.5))
y=z==null?null:z.iO(C.l.aa(0.5),C.l.aa(0.5))
if(y==null)y=0
this.a.sS(0,new V.r(0.5,y+60,0.5))
this.a.sG(new V.H(0,0,0))},
jx:[function(a){H.i(a,"$isn")
this.cU()},"$1","gfT",4,0,0],
ad:function(a,b,c){var z,y
z=this.c.a3(a,b,c)
y=z.gaN(z)
return y>=100&&y<=117},
jm:[function(a){H.i(a,"$isn")
if(this.d)this.a.x.sG(30)},"$1","gfG",4,0,0],
jc:[function(a){var z,y
a=H.k(H.i(a,"$isn"),"$isbN")
$.$get$cx()
z=a.c
y=this.e
if(z.b.c){if(typeof y!=="number")return y.v()
z=y-1
this.e=z
if(z<0)this.e=19}else{if(typeof y!=="number")return y.n()
z=y+1
this.e=z
if(z>=20)this.e=0}this.dA()},"$1","gfu",4,0,0],
jb:[function(a){this.d9(H.k(H.i(a,"$isn"),"$isbN").c.a===69)},"$1","gft",4,0,0],
jh:[function(a){this.d9(H.k(H.i(a,"$isn"),"$isbQ").x.a===2)},"$1","gfB",4,0,0],
d9:function(a){var z,y,x,w,v,u,t
z=this.f
if(z==null)return
if(a){y=this.dk(z,this.dn())
z=y.a
this.f=z
x=$.$get$cx()
w=this.e
if(w>>>0!==w||w>=20)return H.j(x,w)
v=x[w]
if(v===106){x=y.b
w=$.$get$b3()
u=$.$get$b2()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=108
else{w=$.$get$bK()
u=$.$get$bJ()
if((x&(w.a|u.a))!==0)v=107}}else if(v===115){x=y.b
w=$.$get$b3()
u=$.$get$b2()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=117
else{w=$.$get$bK()
u=$.$get$bJ()
if((x&(w.a|u.a))!==0)v=116}}}else v=0
t=z.f
if(t!=null){t.a7(z.a,z.b,z.c,v)
t.r=!0
if(this.f.a<=0){z=t.gah(t)
if(!(z==null))z.r=!0}if(this.f.c<=0){z=t.gco(t)
if(!(z==null))z.r=!0}if(this.f.a>=15){z=t.gal(t)
if(!(z==null))z.r=!0}if(this.f.c>=15){z=t.gcF()
if(!(z==null))z.r=!0}}},
j2:[function(a,b){var z,y,x,w,v,u,t,s,r,q
z=b.a
y=b.b
x=b.c
w=J.cv(a.a)+0.5
v=J.cv(a.b)+0.5
u=J.cv(a.c)+0.5
this.d=!1
if(typeof y!=="number")return y.v()
if(this.ad(z,y-0.25,x)){y=v-0.25
this.a.x.sG(0)}if(this.ad(z,y-2+0.25,x)){y=v+0.25
this.a.x.sG(0)
this.d=!0}if(typeof z!=="number")return z.v()
t=z-0.25
s=y-0.5
if(this.ad(t,s,x)||this.ad(t,y-1.5,x)){z=w-0.25
this.a.r.sG(0)}else{t=z+0.25
if(this.ad(t,s,x)||this.ad(t,y-1.5,x)){z=w+0.25
this.a.r.sG(0)}}if(typeof x!=="number")return x.v()
t=x-0.25
if(this.ad(z,s,t)||this.ad(z,y-1.5,t)){x=u-0.25
this.a.y.sG(0)}else{t=x+0.25
if(this.ad(z,s,t)||this.ad(z,y-1.5,t)){x=u+0.25
this.a.y.sG(0)}}t=this.c
while(!0){r=t.a3(z,y-2+0.25,x)
s=r.gaN(r)
if(!(s>=100&&s<=117)){r=t.a3(z,y,x)
s=r.gaN(r)
q=s>=100&&s<=117
s=q}else s=!0
if(!s)break
y=v+0.25;++v
this.a.x.sG(0)
this.d=!0}return new V.r(z,y,x)},"$2","gfi",8,0,37],
dn:function(){var z=this.x.f
return V.eU(z.M(new V.r(0,0,0)),z.an(new V.H(0,0,-6)))},
dk:function(a,b){var z,y,x,w,v,u
z=a.a+a.d
y=a.b
x=a.c+a.e
w=V.eX(z,y,x,1,1,1).ix(b)
if(w==null)return
else{v=w.d
u=J.P(v)
if(u.u(v,$.$get$b2()))z-=0.9
else if(u.u(v,$.$get$b3()))z+=1.1
else if(u.u(v,$.$get$bH()))y-=0.9
else if(u.u(v,$.$get$bI()))y+=1.1
else if(u.u(v,$.$get$bJ()))x-=0.9
else if(u.u(v,$.$get$bK()))x+=1.1
else return}return new B.iC(this.c.a3(z,y,x),v)},
jF:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.i(a,"$isn")
z=this.dn()
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
s=V.eU(new V.r(y+x,w+v,u+t),new V.H(x,v,t).K(0))
r=this.c.a3(y,w,u)
q=0
while(!0){y=r!=null
if(!(y&&r.gaN(r)===0))break
y=this.dk(r,s)
r=y==null?null:y.a;++q}if(y)y=q<1||r.gaN(r)===0||r.gaN(r)===100
else y=!1
if(y)r=null
this.f=r
if(r==null)this.cx.b=!1
else{y=$.$get$a0()
x=$.$get$a3()
p=B.dz(null,new Z.ad(y.a|x.a))
x=this.f
o=new V.r(x.d+x.a+0.5,x.b+0.5,x.e+x.c+0.5)
n=p.Y(0)
x=$.$get$ca()
y=$.$get$cf()
w=$.$get$cg()
v=$.$get$cb()
p.a0(n,o,x,y,w,v,$.$get$ch(),!0,1.1)
u=$.$get$cd()
t=$.$get$c8()
m=$.$get$c9()
l=$.$get$ce()
p.a0(n,o,u,t,m,l,$.$get$cc(),!0,1.1)
p.a0(n,o,x,t,u,y,$.$get$db(),!0,1.1)
p.a0(n,o,w,l,m,v,$.$get$dc(),!0,1.1)
p.a0(n,o,y,u,l,w,$.$get$cB(),!0,1.1)
p.a0(n,o,v,m,t,x,$.$get$da(),!0,1.1)
p.cE(0,H.a([this.cx],[E.ag]))
this.cx.b=!0}},"$1","ghn",4,0,0],
dA:function(){var z,y,x
z=B.dz(this.c.a,null)
y=$.$get$cx()
x=this.e
if(x>>>0!==x||x>=20)return H.j(y,x)
z.d2(null,0,0,0,y[x],!1,1)
z.cE(0,this.db)},
q:{
iL:function(a,b){var z=new B.iK(b)
z.eA(a,b)
return z}}},
iM:{"^":"v:8;a",
$1:function(a){var z,y,x
H.i(a,"$isn")
z=this.a
y=z.a
z=V.eI(-z.b.c.d)
if(!J.Z(y.z,z)){x=y.z
y.z=z
y.Q=z.bg(0)
z=new D.G("velocityRotation",x,y.z,y,[V.aO])
z.b=!0
y.F(z)}}},
jf:{"^":"b;a,b,0c",
hR:function(a){var z,y,x
for(z=15;z>=0;--z)for(y=47;y>=-1;--y)for(x=15;x>=0;--x)this.d2(a,z,y,x,a.aO(z,y,x),!1,1)},
cE:function(a,b){var z,y,x,w
H.p(b,"$isc",[E.ag],"$asc")
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.j(b,z)
y=b[z]
x=this.c
if(z>=x.length)return H.j(x,z)
w=x[z]
if(w!=null){y.scW(w)
y.b=w.f.length!==0}else{y.scW(null)
y.b=!1}}this.c=null},
Y:function(a){var z,y
H.z(a)
z=this.c
if(a>>>0!==a||a>=z.length)return H.j(z,a)
y=z[a]
if(y==null){z=this.b
y=new F.eV(z)
y.b=z.gdI(z)
y.c=z.gb8(z)
y.d=0
y.f=H.a([],[P.y])
z=[P.x]
y.r=H.a([],z)
y.x=H.a([],z)
y.y=H.a([],z)
z=this.c;(z&&C.a).m(z,a,y)}return y},
d2:function(a,b,c,d,e,f,g){var z,y,x,w
z=new V.r(b,c,d)
if(a!=null){b+=a.a
d+=a.b}y=new V.r(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.d3(a,y,z,e,!1,g)
else if(e>=200&&e<=205)if(e===201){x=this.a.c.k(0,201)
w=J.bg(x)
this.bu(this.Y(w.k(x,0)),y,0.3141592653589793)
this.bu(this.Y(w.k(x,0)),y,1.7278759594743864)
this.bu(this.Y(w.k(x,0)),y,3.6128315516282616)
this.bu(this.Y(w.k(x,0)),y,5.026548245743669)}else if(e===205)this.eU(y)
else{x=this.a.c.k(0,e)
w=J.bg(x)
this.d7(this.Y(w.k(x,0)),y,0.39269908169872414,!0)
this.d7(this.Y(w.k(x,0)),y,1.9634954084936207,!0)}else if(e>=100&&e<=117)this.d3(a,y,z,e,!1,g)},
aV:function(a,b,c,d){var z,y
z=$.$get$a0()
y=$.$get$a3()
return F.bs(null,null,null,a,b,new V.M(c,d),null,new Z.ad(z.a|y.a|$.$get$ae().a),0)},
a0:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=a.be(H.a([this.aV(b.n(0,c.j(0,i)),g,0,0),this.aV(b.n(0,d.j(0,i)),g,0,1),this.aV(b.n(0,e.j(0,i)),g,1,1),this.aV(b.n(0,f.j(0,i)),g,1,0)],[F.bW]))
y=z+1
x=z+2
w=z+3
v=[P.x]
a.bd(H.a([z,y,x,w],v))
if(h)a.bd(H.a([x,y,z,w],v))},
d3:function(a,b,c,d,e,f){var z=this.a.b.k(0,d)
if(this.aR(a,d,c,0,1,0))this.a0(this.Y(z.a),b,$.$get$ca(),$.$get$cf(),$.$get$cg(),$.$get$cb(),$.$get$ch(),!1,f)
if(this.aR(a,d,c,0,-1,0))this.a0(this.Y(z.b),b,$.$get$cd(),$.$get$c8(),$.$get$c9(),$.$get$ce(),$.$get$cc(),!1,f)
if(this.aR(a,d,c,-1,0,0))this.a0(this.Y(z.c),b,$.$get$ca(),$.$get$c8(),$.$get$cd(),$.$get$cf(),$.$get$db(),!1,f)
if(this.aR(a,d,c,1,0,0))this.a0(this.Y(z.d),b,$.$get$cg(),$.$get$ce(),$.$get$c9(),$.$get$cb(),$.$get$dc(),!1,f)
if(this.aR(a,d,c,0,0,1))this.a0(this.Y(z.e),b,$.$get$cf(),$.$get$cd(),$.$get$ce(),$.$get$cg(),$.$get$cB(),!1,f)
if(this.aR(a,d,c,0,0,-1))this.a0(this.Y(z.f),b,$.$get$cb(),$.$get$c9(),$.$get$c8(),$.$get$ca(),$.$get$da(),!1,f)},
aR:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.d0(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.hp(b,a.aO(d+J.d0(c.a),e,f+J.d0(c.c)))},
d7:function(a,b,c,d){var z,y,x,w
z=Math.cos(c)*0.5
y=Math.sin(c)*0.5
x=-y
w=-z
this.a0(a,b,new V.r(z,0,x),new V.r(z,-0.5,x),new V.r(w,-0.5,y),new V.r(w,0,y),new V.H(y,0,z),!0,1)},
bu:function(a,b,c){var z=V.eI(c)
this.a0(a,b,z.M(new V.r(0.4,-0.1,-0.4)),z.M(new V.r(0,-0.5,0)),z.M(new V.r(0.4,-0.1,0.4)),z.M(new V.r(0.8,0,0)),$.$get$ch(),!0,1)},
eU:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a.c.k(0,205)
y=J.bg(z)
x=this.Y(y.k(z,0))
w=this.Y(y.k(z,1))
v=this.Y(y.k(z,2))
z=[F.bW]
u=H.a([],z)
t=H.a([],z)
for(y=a7.a,s=a7.b,r=a7.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aO(o,0,-n,0,1,0,n,0,o)
p=m.M(new V.r(0.07,-0.1,0))
l=p.a
if(typeof y!=="number")return y.n()
if(typeof l!=="number")return H.e(l)
k=p.b
if(typeof s!=="number")return s.n()
if(typeof k!=="number")return H.e(k)
p=p.c
if(typeof r!=="number")return r.n()
if(typeof p!=="number")return H.e(p)
j=$.$get$cB()
i=m.an(j)
h=Math.abs(q-1)
g=$.$get$a0()
f=$.$get$a3()
C.a.h(u,F.bs(null,null,null,new V.r(y+l,s+k,r+p),i,new V.M(h,0),null,new Z.ad(g.a|f.a|$.$get$ae().a),0))
f=m.M(new V.r(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.e(g)
i=f.b
if(typeof i!=="number")return H.e(i)
f=f.c
if(typeof f!=="number")return H.e(f)
j=m.an(j)
p=$.$get$a0()
k=$.$get$a3()
C.a.h(u,F.bs(null,null,null,new V.r(y+g,s+i,r+f),j,new V.M(h,1),null,new Z.ad(p.a|k.a|$.$get$ae().a),0))
e=m.M(new V.r(0.1,-0.5,0))
d=m.M(new V.r(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.e(k)
p=e.b
if(typeof p!=="number")return H.e(p)
h=e.c
if(typeof h!=="number")return H.e(h)
j=$.$get$cc()
f=d.a
if(typeof f!=="number")return f.n()
i=d.c
if(typeof i!=="number")return i.n()
g=$.$get$a0()
l=$.$get$a3()
C.a.h(t,F.bs(null,null,null,new V.r(y+k,s+p,r+h),j,new V.M(f+0.5,i+0.5),null,new Z.ad(g.a|l.a|$.$get$ae().a),0))}c=v.be(u)
b=w.be(t)
p=P.x
v.hP(P.cK(u.length,new B.jg(c),!0,p))
w.bd(P.cK(t.length,new B.jh(b),!0,p))
a=H.a([],z)
a0=H.a([],z)
C.a.h(a,this.aV(a7.n(0,new V.r(0,0.05,0)),$.$get$ch(),0.5,0.5))
C.a.h(a0,this.aV(a7.n(0,new V.r(0,-0.1,0)),$.$get$cc(),0.5,0.5))
for(q=0;q<=1;q+=0.1){z=-6.283185307179586*q
o=Math.cos(z)
n=Math.sin(z)
a1=new V.aO(o,0,-n,0,1,0,n,0,o)
e=a1.M(new V.r(0.4,-0.15,0))
d=a1.M(new V.r(0.5,0,0))
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
h=$.$get$a0()
g=$.$get$a3()
C.a.h(a,F.bs(null,null,null,new V.r(y+z,s+l,r+k),null,new V.M(j+0.5,i+0.5),null,new Z.ad(h.a|g.a|$.$get$ae().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aO(o,0,-n,0,1,0,n,0,o)
a3=a2.M(new V.r(0.4,-0.15,0))
a4=a2.M(new V.r(0.5,0,0))
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
l=$.$get$a0()
z=$.$get$a3()
C.a.h(a0,F.bs(null,null,null,new V.r(y+g,s+h,r+i),null,new V.M(j+0.5,k+0.5),null,new Z.ad(l.a|z.a|$.$get$ae().a),0))}a5=x.be(a)
a6=w.be(a0)
x.bd(P.cK(a.length,new B.ji(a5),!0,p))
w.bd(P.cK(a0.length,new B.jj(a6),!0,p))},
q:{
dz:function(a,b){var z,y,x
z=new B.jf(a,b)
if(b==null){y=$.$get$a0()
x=$.$get$a3()
z.b=new Z.ad(y.a|x.a|$.$get$ae().a)}y=a==null?null:a.d
y=y==null?null:y.length
if(y==null)y=1
y=new Array(y)
y.fixed$length=Array
z.c=H.a(y,[F.eV])
return z}}},
jg:{"^":"v:10;a",
$1:function(a){return this.a+a}},
jh:{"^":"v:10;a",
$1:function(a){return this.a+a}},
ji:{"^":"v:10;a",
$1:function(a){return this.a+a}},
jj:{"^":"v:10;a",
$1:function(a){return this.a+a}},
ke:{"^":"b;a,0b,0c,0d,0e,0f,0r",
eF:function(a){var z,y,x,w,v,u,t
z=new B.hW()
z.a=L.iG(0)
z.b=new Uint8Array(484)
this.b=z
z=[B.e7]
this.c=H.a([],z)
this.d=H.a([],z)
this.e=H.a([],[E.ag])
this.r=null
for(z=this.a.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
C.a.h(this.e,E.bk(null,!0,null,"",null,w))}for(v=0;v<140;++v){z=this.c;(z&&C.a).h(z,B.ht(this))}for(u=-32;u<32;u+=16)for(t=-32;t<32;t+=16)this.b.e4(this.dq(u,t))
P.cO(C.C,this.ghp())
P.cO(C.B,this.gfg())
P.cO(C.z,this.geZ())},
aK:function(a,b){var z,y,x,w
for(z=this.d,y=z.length,x=0;x<y;++x){w=z[x]
if(w.a===a&&w.b===b)return w}return},
a3:function(a,b,c){var z,y,x,w,v,u
z=C.e.a_(J.cs(a).aa(a),16)*16
y=C.e.a_(J.cs(c).aa(c),16)*16
if(a<0)z-=16
if(c<0)y-=16
x=this.aK(z,y)
w=C.h.b6(a)-z
v=J.cv(b)
u=C.h.b6(c)-y
if(w<0)w+=16
return new B.ho(w,v,u<0?u+16:u,z,y,x)},
jG:[function(a){H.i(a,"$isap")
this.ho(this.f.x.f.M(new V.r(0,0,0)))},"$1","ghp",4,0,13],
j1:[function(a){var z
H.i(a,"$isap")
z=this.f.x.f.M(new V.r(0,0,0))
this.ff(z)
this.fZ(z)},"$1","gfg",4,0,13],
j_:[function(a){var z,y,x,w
H.i(a,"$isap")
z=this.a.x
y=z.b
x=z.e
w=x.length
y=(y+1)%w
if(y<w){z.b=y
z.c=x[y]
z=z.f
if(!(z==null))z.dK()}},"$1","geZ",4,0,13],
dq:function(a,b){var z,y
z=this.c
if(0>=z.length)return H.j(z,-1)
y=z.pop()
y.a=a
y.b=b
y.f=!0
y.x=!0
y.saB(!1)
C.a.h(this.d,y)
return y},
ho:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a3(a.a,a.b,a.c)
y=this.r
x=z.f
if(y==null?x!=null:y!==x){this.r=x
y=z.d
w=y-128
v=y+128
x=z.e
u=x-128
t=x+128
for(s=this.d.length-1;s>=0;--s){r=this.d
if(s>=r.length)return H.j(r,s)
q=r[s]
r=q.a
if(w<=r)if(v>r){r=q.b
r=u>r||t<=r}else r=!0
else r=!0
if(r){q.f=!1
q.saB(!1)
q.x=!0
q.r=!1
C.a.W(this.d,q)
r=this.c;(r&&C.a).h(r,q)}}p=y-64
o=y+64
n=x-64
m=x+64
for(l=p;l<o;l+=16)for(k=n;k<m;k+=16)if(this.aK(l,k)==null)this.dq(l,k)}},
ff:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null)this.b.e4(v)},
fZ:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.f&&!s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null){v.f=!1
v.r=!0}},
ab:[function(a,b){var z,y,x,w,v,u,t,s,r
H.i(b,"$isn")
z=this.f.x.f
y=z.M(new V.r(0,0,0))
x=z.M(new V.r(0,0,-16))
w=new V.M(y.a,y.c)
v=new V.M(x.a,x.c)
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.iR()
r.iS(w,v)}},"$1","giQ",5,0,0],
q:{
kf:function(a){var z=new B.ke(a)
z.eF(a)
return z}}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ew.prototype
return J.ev.prototype}if(typeof a=="string")return J.dk.prototype
if(a==null)return J.ex.prototype
if(typeof a=="boolean")return J.i3.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.bg=function(a){if(typeof a=="string")return J.dk.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.dU=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.cs=function(a){if(typeof a=="number")return J.cI.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.dJ.prototype
return a}
J.c6=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.Z=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).u(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cs(a).T(a,b)}
J.hc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bg(a).k(a,b)}
J.hd=function(a,b,c){return J.c6(a).h0(a,b,c)}
J.he=function(a,b,c,d){return J.c6(a).dC(a,b,c,d)}
J.cZ=function(a,b,c){return J.bg(a).hT(a,b,c)}
J.d_=function(a,b){return J.dU(a).J(a,b)}
J.cv=function(a){return J.cs(a).b6(a)}
J.hf=function(a,b){return J.dU(a).N(a,b)}
J.bj=function(a){return J.P(a).gZ(a)}
J.bC=function(a){return J.dU(a).ga1(a)}
J.bD=function(a){return J.bg(a).gl(a)}
J.hg=function(a,b){return J.c6(a).iB(a,b)}
J.d0=function(a){return J.cs(a).aa(a)}
J.at=function(a){return J.P(a).i(a)}
I.dX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.d5.prototype
C.D=J.q.prototype
C.a=J.bn.prototype
C.l=J.ev.prototype
C.e=J.ew.prototype
C.E=J.ex.prototype
C.h=J.cI.prototype
C.i=J.dk.prototype
C.L=J.cl.prototype
C.t=H.iB.prototype
C.M=W.iD.prototype
C.u=J.iJ.prototype
C.N=P.dx.prototype
C.n=J.dJ.prototype
C.v=W.bZ.prototype
C.w=W.kd.prototype
C.x=new P.iH()
C.y=new P.k1()
C.j=new P.l1()
C.b=new A.cA(0,"ColorSourceType.None")
C.f=new A.cA(1,"ColorSourceType.Solid")
C.c=new A.cA(2,"ColorSourceType.Texture2D")
C.d=new A.cA(3,"ColorSourceType.TextureCube")
C.m=new P.aM(0)
C.z=new P.aM(25e4)
C.A=new P.aM(5e6)
C.B=new P.aM(7e4)
C.C=new P.aM(75e4)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.r=H.a(I.dX([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.o=new P.k0(!1)
$.aB=0
$.bE=null
$.e2=null
$.dO=!1
$.h0=null
$.fV=null
$.h7=null
$.cU=null
$.cW=null
$.dV=null
$.bv=null
$.c1=null
$.c2=null
$.dP=!1
$.T=C.j
$.eh=null
$.eg=null
$.ef=null
$.ee=null
$.m=V.iv()
$.eP=null
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
I.$lazy(y,x,w)}})(["ed","$get$ed",function(){return H.h_("_$dart_dartClosure")},"dl","$get$dl",function(){return H.h_("_$dart_js")},"fc","$get$fc",function(){return H.aG(H.cP({
toString:function(){return"$receiver$"}}))},"fd","$get$fd",function(){return H.aG(H.cP({$method$:null,
toString:function(){return"$receiver$"}}))},"fe","$get$fe",function(){return H.aG(H.cP(null))},"ff","$get$ff",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fj","$get$fj",function(){return H.aG(H.cP(void 0))},"fk","$get$fk",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fh","$get$fh",function(){return H.aG(H.fi(null))},"fg","$get$fg",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aG(H.fi(void 0))},"fl","$get$fl",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.kg()},"c3","$get$c3",function(){return[]},"fO","$get$fO",function(){return P.j0("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"eb","$get$eb",function(){return{}},"ek","$get$ek",function(){return H.a([B.aF(5,2),B.aF(2,5),B.aF(-5,2),B.aF(-2,5),B.aF(5,-2),B.aF(2,-5),B.aF(-5,-2),B.aF(-2,-5)],[B.b7])},"el","$get$el",function(){return B.aF(-0.211324865405187,-0.211324865405187)},"dd","$get$dd",function(){return B.aF(0.366025403784439,0.366025403784439)},"fv","$get$fv",function(){return Z.az(0)},"a0","$get$a0",function(){return Z.az(1)},"ae","$get$ae",function(){return Z.az(2)},"aS","$get$aS",function(){return Z.az(4)},"a3","$get$a3",function(){return Z.az(8)},"aT","$get$aT",function(){return Z.az(16)},"bX","$get$bX",function(){return Z.az(32)},"bY","$get$bY",function(){return Z.az(64)},"fu","$get$fu",function(){return Z.az(96)},"bt","$get$bt",function(){return Z.az(128)},"aR","$get$aR",function(){return Z.az(256)},"eq","$get$eq",function(){return V.an(0)},"ep","$get$ep",function(){return V.an(511)},"b3","$get$b3",function(){return V.an(1)},"dg","$get$dg",function(){return V.an(2)},"b2","$get$b2",function(){return V.an(4)},"bI","$get$bI",function(){return V.an(8)},"dh","$get$dh",function(){return V.an(16)},"bH","$get$bH",function(){return V.an(32)},"bK","$get$bK",function(){return V.an(64)},"er","$get$er",function(){return V.an(128)},"bJ","$get$bJ",function(){return V.an(256)},"df","$get$df",function(){return V.an(146)},"cx","$get$cx",function(){return H.a([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.x])},"ch","$get$ch",function(){return V.bV(0,1,0)},"cc","$get$cc",function(){return V.bV(0,-1,0)},"db","$get$db",function(){return V.bV(1,0,0)},"dc","$get$dc",function(){return V.bV(-1,0,0)},"cB","$get$cB",function(){return V.bV(0,0,1)},"da","$get$da",function(){return V.bV(0,0,-1)},"cf","$get$cf",function(){return V.b8(-0.5,0.5,0.5)},"cg","$get$cg",function(){return V.b8(0.5,0.5,0.5)},"cd","$get$cd",function(){return V.b8(-0.5,-0.5,0.5)},"ce","$get$ce",function(){return V.b8(0.5,-0.5,0.5)},"ca","$get$ca",function(){return V.b8(-0.5,0.5,-0.5)},"cb","$get$cb",function(){return V.b8(0.5,0.5,-0.5)},"c8","$get$c8",function(){return V.b8(-0.5,-0.5,-0.5)},"c9","$get$c9",function(){return V.b8(0.5,-0.5,-0.5)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.n]},{func:1,ret:-1,opt:[D.n]},{func:1,ret:P.R},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.x,[P.h,E.ag]]},{func:1,ret:P.R,args:[D.n]},{func:1,ret:P.R,args:[F.av]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.ap]},{func:1,ret:P.R,args:[,]},{func:1,ret:-1,args:[P.x,[P.h,V.aD]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.o,args:[P.x]},{func:1,args:[,]},{func:1,ret:-1,args:[P.x,[P.h,X.Q]]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:-1,args:[P.x,[P.h,D.a2]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.x,[P.h,U.a6]]},{func:1,ret:P.R,args:[W.ah]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:P.a8,args:[P.y,P.y]},{func:1,args:[P.o]},{func:1,ret:P.a8,args:[[P.h,D.a2]]},{func:1,args:[,P.o]},{func:1,ret:P.R,args:[{func:1,ret:-1}]},{func:1,ret:P.R,args:[P.Y]},{func:1,ret:P.R,args:[{func:1,ret:-1,args:[D.n]}]},{func:1,ret:-1,args:[W.bZ]},{func:1,ret:P.a8,args:[[P.h,X.Q]]},{func:1,ret:P.R,args:[P.ap]},{func:1,ret:V.r,args:[V.r,V.r]},{func:1,ret:P.R,args:[,],opt:[,]},{func:1,ret:[P.aU,,],args:[,]},{func:1,ret:P.a8,args:[W.L]},{func:1,ret:-1,args:[P.b],opt:[P.ax]}]
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
if(x==y)H.mb(d||a)
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
Isolate.dX=a.dX
Isolate.c5=a.c5
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
