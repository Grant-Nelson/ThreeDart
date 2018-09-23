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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dx(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dy=function(){}
var dart=[["","",,H,{"^":"",n9:{"^":"b;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dB==null){H.mv()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c6("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d_()]
if(v!=null)return v
v=H.my(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d_(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
t:function(a,b){return a===b},
gT:function(a){return H.bI(a)},
i:["ev",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hV:{"^":"u;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa4:1},
eb:{"^":"u;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isE:1},
d0:{"^":"u;",
gT:function(a){return 0},
i:["ew",function(a){return String(a)}]},
iz:{"^":"d0;"},
cu:{"^":"d0;"},
c2:{"^":"d0;",
i:function(a){var z=a[$.$get$dX()]
if(z==null)return this.ew(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscW:1},
b9:{"^":"u;$ti",
h:function(a,b){H.y(b,H.x(a,0))
if(!!a.fixed$length)H.p(P.A("add"))
a.push(b)},
Z:function(a,b){var z
if(!!a.fixed$length)H.p(P.A("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aY(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hI:function(a){return this.w(a,"")},
hB:function(a,b,c,d){var z,y,x
H.y(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aY(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bH:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a_(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gav:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hT())},
au:function(a,b,c,d){var z
H.y(d,H.x(a,0))
if(!!a.immutable$list)H.p(P.A("fill range"))
P.aR(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.A(0,1))a[z]=d},
aY:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.cY(a,"[","]")},
gY:function(a){return new J.au(a,a.length,0,[H.x(a,0)])},
gT:function(a){return H.bI(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.a_(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aK(a,b))
if(b>=a.length||b<0)throw H.a(H.aK(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.y(c,H.x(a,0))
if(!!a.immutable$list)H.p(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aK(a,b))
if(b>=a.length||b<0)throw H.a(H.aK(a,b))
a[b]=c},
$isk:1,
$ise:1,
p:{
hU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a_(a,0,4294967295,"length",null))
return J.e8(new Array(a),b)},
e8:function(a,b){return J.bC(H.d(a,[b]))},
bC:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
n8:{"^":"b9;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cl:{"^":"u;",
il:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cl:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
ei:function(a,b){var z,y
if(b>20)throw H.a(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
b7:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.A("Unexpected toString result: "+z))
x=J.aL(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
bc:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.de(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aG:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fT:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isz:1,
$isa2:1},
ea:{"^":"cl;",$ism:1},
e9:{"^":"cl;"},
cm:{"^":"u;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aK(a,b))
if(b<0)throw H.a(H.aK(a,b))
if(b>=a.length)H.p(H.aK(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aK(a,b))
return a.charCodeAt(b)},
A:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aQ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ah(b))
c=P.aR(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ah(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.a8(a,b,0)},
q:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.cr(b,null,null))
if(b>c)throw H.a(P.cr(b,null,null))
if(c>a.length)throw H.a(P.cr(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.q(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hY:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ac:function(a,b){return this.hY(a,b," ")},
dZ:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dY:function(a,b){return this.dZ(a,b,0)},
hq:function(a,b,c){if(c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
return H.fX(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$iseq:1,
$isj:1}}],["","",,H,{"^":"",
cG:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hT:function(){return new P.ja("No element")},
a5:{"^":"jL;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$ascv:function(){return[P.m]},
$asv:function(){return[P.m]},
$ask:function(){return[P.m]},
$ase:function(){return[P.m]}},
hw:{"^":"k;"},
eg:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aL(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aY(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
ie:{"^":"k;a,b,$ti",
gY:function(a){return new H.ig(J.bx(this.a),this.b,this.$ti)},
gk:function(a){return J.at(this.a)},
H:function(a,b){return this.b.$1(J.cL(this.a,b))},
$ask:function(a,b){return[b]}},
ig:{"^":"cZ;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascZ:function(a,b){return[b]}},
kd:{"^":"k;a,b,$ti",
gY:function(a){return new H.ke(J.bx(this.a),this.b,this.$ti)}},
ke:{"^":"cZ;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
ch:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.y(c,H.aB(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
au:function(a,b,c,d){H.y(d,H.aB(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jL:{"^":"cn+cv;"}}],["","",,H,{"^":"",
hl:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mq:function(a){return init.types[H.C(a)]},
fQ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bI:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iK:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.J(a).$iscu){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.ay(w,1)
r=H.dC(H.bW(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iC:function(){if(!!self.location)return self.location.href
return},
et:function(a){var z,y,x,w,v
H.bW(a)
z=J.at(a)
if(typeof z!=="number")return z.eq()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iL:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aG(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.et(z)},
eu:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.iL(a)}return H.et(a)},
iM:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cp:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aG(z,10))>>>0,56320|z&1023)}}throw H.a(P.a_(a,0,1114111,null,null))},
ag:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iJ:function(a){return a.b?H.ag(a).getUTCFullYear()+0:H.ag(a).getFullYear()+0},
iH:function(a){return a.b?H.ag(a).getUTCMonth()+1:H.ag(a).getMonth()+1},
iD:function(a){return a.b?H.ag(a).getUTCDate()+0:H.ag(a).getDate()+0},
iE:function(a){return a.b?H.ag(a).getUTCHours()+0:H.ag(a).getHours()+0},
iG:function(a){return a.b?H.ag(a).getUTCMinutes()+0:H.ag(a).getMinutes()+0},
iI:function(a){return a.b?H.ag(a).getUTCSeconds()+0:H.ag(a).getSeconds()+0},
iF:function(a){return a.b?H.ag(a).getUTCMilliseconds()+0:H.ag(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ah(a))},
h:function(a,b){if(a==null)J.at(a)
throw H.a(H.aK(a,b))},
aK:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.C(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cr(b,"index",null)},
ml:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
ah:function(a){return new P.aM(!0,a,null,null)},
mg:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.ep()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fZ})
z.name=""}else z.toString=H.fZ
return z},
fZ:function(){return J.a9(this.dartException)},
p:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aY(a))},
aC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d1(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eo(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eL()
u=$.$get$eM()
t=$.$get$eN()
s=$.$get$eO()
r=$.$get$eS()
q=$.$get$eT()
p=$.$get$eQ()
$.$get$eP()
o=$.$get$eV()
n=$.$get$eU()
m=v.ab(y)
if(m!=null)return z.$1(H.d1(H.M(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.d1(H.M(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eo(H.M(y),m))}}return z.$1(new H.jK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ex()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ex()
return a},
bv:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
mo:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mx:function(a,b,c,d,e,f){H.c(a,"$iscW")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mx)
a.$identity=z
return z},
hh:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$ise){z.$reflectionInfo=d
x=H.iP(z).r}else x=d
w=e?Object.create(new H.jb().constructor.prototype):Object.create(new H.cO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aD
if(typeof u!=="number")return u.A()
$.aD=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dS(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mq,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dM:H.cP
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dS(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
he:function(a,b,c,d){var z=H.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dS:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hg(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.he(y,!w,z,b)
if(y===0){w=$.aD
if(typeof w!=="number")return w.A()
$.aD=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.by
if(v==null){v=H.cc("self")
$.by=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aD
if(typeof w!=="number")return w.A()
$.aD=w+1
t+=w
w="return function("+t+"){return this."
v=$.by
if(v==null){v=H.cc("self")
$.by=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hf:function(a,b,c,d){var z,y
z=H.cP
y=H.dM
switch(b?-1:a){case 0:throw H.a(H.iZ("Intercepted function with no arguments."))
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
z=$.by
if(z==null){z=H.cc("self")
$.by=z}y=$.dL
if(y==null){y=H.cc("receiver")
$.dL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hf(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aD
if(typeof y!=="number")return y.A()
$.aD=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aD
if(typeof y!=="number")return y.A()
$.aD=y+1
return new Function(z+y+"}")()},
dx:function(a,b,c,d,e,f,g){var z,y
z=J.bC(H.bW(b))
H.C(c)
y=!!J.J(d).$ise?J.bC(d):d
return H.hh(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
mm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
mC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
fV:function(a,b){throw H.a(H.ax(a,H.M(b).substring(3)))},
mE:function(a,b){var z=J.aL(b)
throw H.a(H.hd(a,z.q(b,3,z.gk(b))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fV(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.mE(a,b)},
bW:function(a){if(a==null)return a
if(!!J.J(a).$ise)return a
throw H.a(H.ax(a,"List"))},
fS:function(a,b){if(a==null)return a
if(!!J.J(a).$ise)return a
if(J.J(a)[b])return a
H.fV(a,b)},
fM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c7:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fM(J.J(a))
if(z==null)return!1
y=H.fP(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dt)return a
$.dt=!0
try{if(H.c7(a,b))return a
z=H.c9(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.dt=!1}},
dz:function(a,b){if(a!=null&&!H.dw(a,b))H.p(H.ax(a,H.c9(b)))
return a},
fG:function(a){var z
if(a instanceof H.n){z=H.fM(J.J(a))
if(z!=null)return H.c9(z)
return"Closure"}return H.bd(a)},
mJ:function(a){throw H.a(new P.hp(H.M(a)))},
fN:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
nX:function(a,b,c){return H.bw(a["$as"+H.l(c)],H.b3(b))},
aX:function(a,b,c,d){var z
H.M(c)
H.C(d)
z=H.bw(a["$as"+H.l(c)],H.b3(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.M(b)
H.C(c)
z=H.bw(a["$as"+H.l(b)],H.b3(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.b3(a)
return z==null?null:z[b]},
c9:function(a){var z=H.b4(a,null)
return z},
b4:function(a,b){var z,y
H.w(b,"$ise",[P.j],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dC(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.m6(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.A(t,b[r])
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
for(z=H.mn(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dC:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$ise",[P.j],"$ase")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}v="<"+z.i(0)+">"
return v},
bw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bU:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fJ(H.bw(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bW(c)
H.M(d)
if(a==null)return a
z=H.bU(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dC(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
nV:function(a,b,c){return a.apply(b,H.bw(J.J(b)["$as"+H.l(c)],H.b3(b)))},
fR:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.fR(z)}return!1},
dw:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.fR(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c7(a,b)}y=J.J(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
y:function(a,b){if(a!=null&&!H.dw(a,b))throw H.a(H.ax(a,H.c9(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.fP(a,b,c,d)
if('func' in a)return c.builtin$cls==="cW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bw(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c9(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bw(r,z),b,u,d)},
fP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mB(m,b,l,d)},
mB:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
nW:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
my:function(a){var z,y,x,w,v,u
z=H.M($.fO.$1(a))
y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fI.$2(a,z))
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
return u.i}if(v==="+")return H.fU(a,x)
if(v==="*")throw H.a(P.c6(z))
if(init.leafTags[z]===true){u=H.cI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fU(a,x)},
fU:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cI:function(a){return J.dD(a,!1,null,!!a.$isF)},
mA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cI(z)
else return J.dD(z,c,null,null)},
mv:function(){if(!0===$.dB)return
$.dB=!0
H.mw()},
mw:function(){var z,y,x,w,v,u,t,s
$.cE=Object.create(null)
$.cH=Object.create(null)
H.mr()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fW.$1(v)
if(u!=null){t=H.mA(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mr:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.br(C.J,H.br(C.O,H.br(C.u,H.br(C.u,H.br(C.N,H.br(C.K,H.br(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fO=new H.ms(v)
$.fI=new H.mt(u)
$.fW=new H.mu(t)},
br:function(a,b){return a(b)||b},
fX:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hk:{"^":"b;$ti",
i:function(a){return P.d2(this)},
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
return H.hl()},
$isK:1},
hm:{"^":"hk;a,b,c,$ti",
gk:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.d2(b)},
d2:function(a){return this.b[H.M(a)]},
C:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.d2(v),z))}}},
iO:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iP:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bC(z)
y=z[0]
x=z[1]
return new H.iO(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jx:{"^":"b;a,b,c,d,e,f",
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
p:{
aI:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ct:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iw:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
eo:function(a,b){return new H.iw(a,b==null?null:b.method)}}},
hY:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d1:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hY(a,y,z?null:b.receiver)}}},
jK:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mK:{"^":"n:16;a",
$1:function(a){if(!!J.J(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fo:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gen:function(){return this},
$iscW:1,
gen:function(){return this}},
eC:{"^":"n;"},
jb:{"^":"eC;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cO:{"^":"eC;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bI(this.a)
else y=typeof z!=="object"?J.bX(z):H.bI(z)
return(y^H.bI(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cP:function(a){return a.a},
dM:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cO("self","target","receiver","name")
y=J.bC(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jy:{"^":"a6;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.jy("TypeError: "+H.l(P.cg(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
hc:{"^":"a6;a",
i:function(a){return this.a},
p:{
hd:function(a,b){return new H.hc("CastError: "+H.l(P.cg(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
iY:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
iZ:function(a){return new H.iY(a)}}},
aP:{"^":"ib;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaj:function(a){return new H.i1(this,[H.x(this,0)])},
bm:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d_(y,b)}else return this.hF(b)},
hF:function(a){var z=this.d
if(z==null)return!1
return this.co(this.bQ(z,this.cn(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.hG(b)},
hG:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bQ(z,this.cn(a))
x=this.co(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bV()
this.b=z}this.cQ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bV()
this.c=y}this.cQ(y,b,c)}else this.hH(b,c)},
hH:function(a,b){var z,y,x,w
H.y(a,H.x(this,0))
H.y(b,H.x(this,1))
z=this.d
if(z==null){z=this.bV()
this.d=z}y=this.cn(a)
x=this.bQ(z,y)
if(x==null)this.c_(z,y,[this.bW(a,b)])
else{w=this.co(x,a)
if(w>=0)x[w].b=b
else x.push(this.bW(a,b))}},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aY(this))
z=z.c}},
cQ:function(a,b,c){var z
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
z=this.be(a,b)
if(z==null)this.c_(a,b,this.bW(b,c))
else z.b=c},
f4:function(){this.r=this.r+1&67108863},
bW:function(a,b){var z,y
z=new H.i0(H.y(a,H.x(this,0)),H.y(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f4()
return z},
cn:function(a){return J.bX(a)&0x3ffffff},
co:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.d2(this)},
be:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
d_:function(a,b){return this.be(a,b)!=null},
bV:function(){var z=Object.create(null)
this.c_(z,"<non-identifier-key>",z)
this.eY(z,"<non-identifier-key>")
return z},
$isee:1},
i0:{"^":"b;a,b,0c,0d"},
i1:{"^":"hw;a,$ti",
gk:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.i2(z,z.r,this.$ti)
y.c=z.e
return y}},
i2:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ms:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
mt:{"^":"n:32;a",
$2:function(a,b){return this.a(a,b)}},
mu:{"^":"n:28;a",
$1:function(a){return this.a(H.M(a))}},
hW:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseq:1,
$isiQ:1,
p:{
hX:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mn:function(a){return J.e8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bp:function(a){return a},
it:function(a){return new Int8Array(a)},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aK(b,a))},
m0:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ml(a,b,c))
return b},
en:{"^":"u;",$isen:1,"%":"ArrayBuffer"},
d7:{"^":"u;",$isd7:1,$isjz:1,"%":"DataView;ArrayBufferView;d6|fi|fj|iu|fk|fl|b0"},
d6:{"^":"d7;",
gk:function(a){return a.length},
$isF:1,
$asF:I.dy},
iu:{"^":"fj;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mm(c)
H.aJ(b,a,a.length)
a[b]=c},
$asch:function(){return[P.z]},
$asv:function(){return[P.z]},
$isk:1,
$ask:function(){return[P.z]},
$ise:1,
$ase:function(){return[P.z]},
"%":"Float32Array|Float64Array"},
b0:{"^":"fl;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aJ(b,a,a.length)
a[b]=c},
$asch:function(){return[P.m]},
$asv:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]}},
nh:{"^":"b0;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ni:{"^":"b0;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nj:{"^":"b0;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nk:{"^":"b0;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nl:{"^":"b0;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nm:{"^":"b0;",
gk:function(a){return a.length},
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"b0;",
gk:function(a){return a.length},
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
bH:function(a,b,c){return new Uint8Array(a.subarray(b,H.m0(b,c,a.length)))},
$isd8:1,
$isP:1,
"%":";Uint8Array"},
fi:{"^":"d6+v;"},
fj:{"^":"fi+ch;"},
fk:{"^":"d6+v;"},
fl:{"^":"fk+ch;"}}],["","",,P,{"^":"",
kg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.md()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bs(new P.ki(z),1)).observe(y,{childList:true})
return new P.kh(z,y,x)}else if(self.setImmediate!=null)return P.me()
return P.mf()},
nK:[function(a){self.scheduleImmediate(H.bs(new P.kj(H.f(a,{func:1,ret:-1})),0))},"$1","md",4,0,13],
nL:[function(a){self.setImmediate(H.bs(new P.kk(H.f(a,{func:1,ret:-1})),0))},"$1","me",4,0,13],
nM:[function(a){P.dg(C.q,H.f(a,{func:1,ret:-1}))},"$1","mf",4,0,13],
dg:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.f.a1(a.a,1000)
return P.lk(z<0?0:z,b)},
eG:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bk]})
z=C.f.a1(a.a,1000)
return P.ll(z<0?0:z,b)},
m9:function(a,b){if(H.c7(a,{func:1,args:[P.b,P.aw]}))return b.i6(a,null,P.b,P.aw)
if(H.c7(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m8:function(){var z,y
for(;z=$.bq,z!=null;){$.bS=null
y=z.b
$.bq=y
if(y==null)$.bR=null
z.a.$0()}},
nU:[function(){$.du=!0
try{P.m8()}finally{$.bS=null
$.du=!1
if($.bq!=null)$.$get$dn().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fc(H.f(a,{func:1,ret:-1}))
if($.bq==null){$.bR=z
$.bq=z
if(!$.du)$.$get$dn().$1(P.fK())}else{$.bR.b=z
$.bR=z}},
mc:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.fF(a)
$.bS=$.bR
return}y=new P.fc(a)
x=$.bS
if(x==null){y.b=z
$.bS=y
$.bq=y}else{y.b=x.b
x.b=y
$.bS=y
if(y.b==null)$.bR=y}},
mF:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cD(null,null,C.j,a)
return}y.toString
P.cD(null,null,y,H.f(y.c4(a),z))},
eF:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dg(a,b)}return P.dg(a,H.f(y.c4(b),z))},
ju:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.eG(a,b)}x=y.dm(b,P.bk)
$.T.toString
return P.eG(a,H.f(x,z))},
cC:function(a,b,c,d,e){var z={}
z.a=d
P.mc(new P.ma(z,e))},
fB:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mb:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cD:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c4(d):c.hp(d,-1)
P.fF(d)},
ki:{"^":"n:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kh:{"^":"n:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kj:{"^":"n:2;a",
$0:function(){this.a.$0()}},
kk:{"^":"n:2;a",
$0:function(){this.a.$0()}},
fr:{"^":"b;a,0b,c",
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.ln(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eK:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.lm(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbk:1,
p:{
lk:function(a,b){var z=new P.fr(!0,0)
z.eJ(a,b)
return z},
ll:function(a,b){var z=new P.fr(!1,0)
z.eK(a,b)
return z}}},
ln:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lm:{"^":"n:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.ez(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"b;0a,b,c,d,e,$ti",
hO:function(a){if(this.c!==6)return!0
return this.b.b.cB(H.f(this.d,{func:1,ret:P.a4,args:[P.b]}),a.a,P.a4,P.b)},
hE:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.c7(z,{func:1,args:[P.b,P.aw]}))return H.dz(w.ic(z,a.a,a.b,null,y,P.aw),x)
else return H.dz(w.cB(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aV:{"^":"b;dd:a<,b,0fM:c<,$ti",
eh:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m9(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aV(0,$.T,[c])
w=b==null?1:3
this.cR(new P.bo(x,w,a,b,[z,c]))
return x},
ik:function(a,b){return this.eh(a,null,b)},
cR:function(a){var z,y
z=this.a
if(z<=1){a.a=H.c(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.c(this.c,"$isaV")
z=y.a
if(z<4){y.cR(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cD(null,null,z,H.f(new P.kz(this,a),{func:1,ret:-1}))}},
d7:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.c(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.c(this.c,"$isaV")
y=u.a
if(y<4){u.d7(a)
return}this.a=y
this.c=u.c}z.a=this.bi(a)
y=this.b
y.toString
P.cD(null,null,y,H.f(new P.kE(z,this),{func:1,ret:-1}))}},
bY:function(){var z=H.c(this.c,"$isbo")
this.c=null
return this.bi(z)},
bi:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cX:function(a){var z,y,x,w
z=H.x(this,0)
H.dz(a,{futureOr:1,type:z})
y=this.$ti
x=H.bU(a,"$isbB",y,"$asbB")
if(x){z=H.bU(a,"$isaV",y,null)
if(z)P.ff(a,this)
else P.kA(a,this)}else{w=this.bY()
H.y(a,z)
this.a=4
this.c=a
P.bN(this,w)}},
bM:[function(a,b){var z
H.c(b,"$isaw")
z=this.bY()
this.a=8
this.c=new P.al(a,b)
P.bN(this,z)},function(a){return this.bM(a,null)},"iw","$2","$1","geU",4,2,29],
$isbB:1,
p:{
kA:function(a,b){var z,y,x
b.a=1
try{a.eh(new P.kB(b),new P.kC(b),null)}catch(x){z=H.aC(x)
y=H.bv(x)
P.mF(new P.kD(b,z,y))}},
ff:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.c(a.c,"$isaV")
if(z>=4){y=b.bY()
b.a=a.a
b.c=a.c
P.bN(b,y)}else{y=H.c(b.c,"$isbo")
b.a=2
b.c=a
a.d7(y)}},
bN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.c(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cC(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.c(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cC(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kH(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kG(x,b,r).$0()}else if((y&2)!==0)new P.kF(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.J(y).$isbB){if(y.a>=4){n=H.c(t.c,"$isbo")
t.c=null
b=t.bi(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ff(y,t)
return}}m=b.b
n=H.c(m.c,"$isbo")
m.c=null
b=m.bi(n)
y=x.a
u=x.b
if(!y){H.y(u,H.x(m,0))
m.a=4
m.c=u}else{H.c(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kz:{"^":"n:2;a,b",
$0:function(){P.bN(this.a,this.b)}},
kE:{"^":"n:2;a,b",
$0:function(){P.bN(this.b,this.a.a)}},
kB:{"^":"n:19;a",
$1:function(a){var z=this.a
z.a=0
z.cX(a)}},
kC:{"^":"n:33;a",
$2:function(a,b){this.a.bM(a,H.c(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kD:{"^":"n:2;a,b,c",
$0:function(){this.a.bM(this.b,this.c)}},
kH:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eg(H.f(w.d,{func:1}),null)}catch(v){y=H.aC(v)
x=H.bv(v)
if(this.d){w=H.c(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.c(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.J(z).$isbB){if(z instanceof P.aV&&z.gdd()>=4){if(z.gdd()===8){w=this.b
w.b=H.c(z.gfM(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ik(new P.kI(t),null)
w.a=!1}}},
kI:{"^":"n:46;a",
$1:function(a){return this.a}},
kG:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.y(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cB(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aC(t)
y=H.bv(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kF:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.c(this.a.a.c,"$isal")
w=this.c
if(w.hO(z)&&w.e!=null){v=this.b
v.b=w.hE(z)
v.a=!1}}catch(u){y=H.aC(u)
x=H.bv(u)
w=H.c(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fc:{"^":"b;a,0b"},
dd:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.aV(0,$.T,[P.m])
z.a=0
this.hL(new P.je(z,this),!0,new P.jf(z,y),y.geU())
return y}},
je:{"^":"n;a,b",
$1:function(a){H.y(a,H.aB(this.b,"dd",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aB(this.b,"dd",0)]}}},
jf:{"^":"n:2;a,b",
$0:function(){this.b.cX(this.a.a)}},
ez:{"^":"b;$ti"},
jd:{"^":"b;"},
bk:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa6:1},
lP:{"^":"b;",$isnJ:1},
ma:{"^":"n:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ep()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l2:{"^":"lP;",
ie:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.aC(x)
y=H.bv(x)
P.cC(null,null,this,z,H.c(y,"$isaw"))}},
ig:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.aC(x)
y=H.bv(x)
P.cC(null,null,this,z,H.c(y,"$isaw"))}},
hp:function(a,b){return new P.l4(this,H.f(a,{func:1,ret:b}),b)},
c4:function(a){return new P.l3(this,H.f(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.l5(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eg:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cB:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.T===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mb(null,null,this,a,b,c,d,e,f)},
i6:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
l4:{"^":"n;a,b,c",
$0:function(){return this.a.eg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l3:{"^":"n:3;a,b",
$0:function(){return this.a.ie(this.b)}},
l5:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i3:function(a,b,c,d,e){return new H.aP(0,0,[d,e])},
i4:function(a,b,c){H.bW(a)
return H.w(H.mo(a,new H.aP(0,0,[b,c])),"$isee",[b,c],"$asee")},
ef:function(a,b){return new H.aP(0,0,[a,b])},
i7:function(a,b,c,d){return new P.kP(0,0,[d])},
hS:function(a,b,c){var z,y
if(P.dv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bT()
C.a.h(y,a)
try{P.m7(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eA(b,H.fS(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cY:function(a,b,c){var z,y,x
if(P.dv(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bT()
C.a.h(y,a)
try{x=z
x.a=P.eA(x.gaD(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
dv:function(a){var z,y
for(z=0;y=$.$get$bT(),z<y.length;++z)if(a===y[z])return!0
return!1},
m7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.l(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.E();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i5:function(a,b,c){var z=P.i3(null,null,null,b,c)
a.C(0,new P.i6(z,b,c))
return z},
d2:function(a){var z,y,x
z={}
if(P.dv(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bT(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
J.dH(a,new P.ic(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bT()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
kP:{"^":"kJ;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.fh(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.y(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dq()
this.b=z}return this.cV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dq()
this.c=y}return this.cV(y,b)}else return this.eL(0,b)},
eL:function(a,b){var z,y,x
H.y(b,H.x(this,0))
z=this.d
if(z==null){z=P.dq()
this.d=z}y=this.cY(b)
x=z[y]
if(x==null)z[y]=[this.bL(b)]
else{if(this.d3(x,b)>=0)return!1
x.push(this.bL(b))}return!0},
Z:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d8(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d8(this.c,b)
else return this.fF(0,b)},
fF:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f0(z,b)
x=this.d3(y,b)
if(x<0)return!1
this.df(y.splice(x,1)[0])
return!0},
cV:function(a,b){H.y(b,H.x(this,0))
if(H.c(a[b],"$isdp")!=null)return!1
a[b]=this.bL(b)
return!0},
d8:function(a,b){var z
if(a==null)return!1
z=H.c(a[b],"$isdp")
if(z==null)return!1
this.df(z)
delete a[b]
return!0},
cW:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.dp(H.y(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cW()
return z},
df:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cW()},
cY:function(a){return J.bX(a)&0x3ffffff},
f0:function(a,b){return a[this.cY(b)]},
d3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
p:{
dq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dp:{"^":"b;a,0b,0c"},
kQ:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aY(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.y(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fh:function(a,b,c){var z=new P.kQ(a,b,[c])
z.c=a.e
return z}}},
kJ:{"^":"j_;"},
i6:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))}},
cn:{"^":"kR;",$isk:1,$ise:1},
v:{"^":"b;$ti",
gY:function(a){return new H.eg(a,this.gk(a),0,[H.aX(this,a,"v",0)])},
H:function(a,b){return this.j(a,b)},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aX(this,a,"v",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gk(a))throw H.a(P.aY(a))}},
io:function(a,b){var z,y,x
z=H.d([],[H.aX(this,a,"v",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
im:function(a){return this.io(a,!0)},
au:function(a,b,c,d){var z
H.y(d,H.aX(this,a,"v",0))
P.aR(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cY(a,"[","]")}},
ib:{"^":"aj;"},
ic:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
aj:{"^":"b;$ti",
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aX(this,a,"aj",0),H.aX(this,a,"aj",1)]})
for(z=J.bx(this.gaj(a));z.E();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.at(this.gaj(a))},
i:function(a){return P.d2(a)},
$isK:1},
ls:{"^":"b;$ti",
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
id:{"^":"b;$ti",
j:function(a,b){return J.dG(this.a,b)},
m:function(a,b,c){J.cJ(this.a,H.y(b,H.x(this,0)),H.y(c,H.x(this,1)))},
C:function(a,b){J.dH(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gk:function(a){return J.at(this.a)},
i:function(a){return J.a9(this.a)},
$isK:1},
f1:{"^":"lt;a,$ti"},
j1:{"^":"b;$ti",
i:function(a){return P.cY(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.p(P.a_(b,0,null,"index",null))
for(z=P.fh(this,this.r,H.x(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j_:{"^":"j1;"},
kR:{"^":"b+v;"},
lt:{"^":"id+ls;$ti"}}],["","",,P,{"^":"",h9:{"^":"bZ;a",
hR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aR(c,d,b.length,null,null,null)
z=$.$get$fd()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cG(C.b.F(b,s))
o=H.cG(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.q(b,x,y)
w.a+=H.cp(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dK(b,u,d,v,t,k)
else{j=C.f.bc(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aQ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dK(b,u,d,v,t,i)
else{j=C.f.bc(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aQ(b,d,d,j===2?"==":"=")}return b},
$asbZ:function(){return[[P.e,P.m],P.j]},
p:{
dK:function(a,b,c,d,e,f){if(C.f.bc(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},ha:{"^":"bz;a",
$asbz:function(){return[[P.e,P.m],P.j]}},bZ:{"^":"b;$ti"},bz:{"^":"jd;$ti"},hy:{"^":"bZ;",
$asbZ:function(){return[P.j,[P.e,P.m]]}},jY:{"^":"hy;a",
ghx:function(){return C.F}},k4:{"^":"bz;",
aZ:function(a,b,c){var z,y,x,w
z=a.length
P.aR(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lO(0,0,x)
if(w.f_(a,b,z)!==z)w.dh(J.h3(a,z-1),0)
return C.V.bH(x,0,w.b)},
c9:function(a){return this.aZ(a,0,null)},
$asbz:function(){return[P.j,[P.e,P.m]]}},lO:{"^":"b;a,b,c",
dh:function(a,b){var z,y,x,w,v
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
f_:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dh(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jZ:{"^":"bz;a",
aZ:function(a,b,c){var z,y,x,w,v
H.w(a,"$ise",[P.m],"$ase")
z=P.k_(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aR(b,c,y,null,null,null)
x=new P.an("")
w=new P.lL(!1,x,!0,0,0,0)
w.aZ(a,b,y)
w.hA(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c9:function(a){return this.aZ(a,0,null)},
$asbz:function(){return[[P.e,P.m],P.j]},
p:{
k_:function(a,b,c,d){H.w(b,"$ise",[P.m],"$ase")
if(b instanceof Uint8Array)return P.k0(!1,b,c,d)
return},
k0:function(a,b,c,d){var z,y,x
z=$.$get$f6()
if(z==null)return
y=0===c
if(y&&!0)return P.dl(z,b)
x=b.length
d=P.aR(c,d,x,null,null,null)
if(y&&d===x)return P.dl(z,b)
return P.dl(z,b.subarray(c,d))},
dl:function(a,b){if(P.k2(b))return
return P.k3(a,b)},
k3:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aC(y)}return},
k2:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k1:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aC(y)}return}}},lL:{"^":"b;a,b,c,d,e,f",
hA:function(a,b,c){var z
H.w(b,"$ise",[P.m],"$ase")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$ise",[P.m],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lN(c)
v=new P.lM(this,b,c,a)
$label0$0:for(u=J.aL(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bD()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.f.b7(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.w,q)
if(z<=C.w[q]){q=P.X("Overlong encoding of 0x"+C.f.b7(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.f.b7(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cp(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cJ()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.f.b7(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.f.b7(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lN:{"^":"n:27;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$ise",[P.m],"$ase")
z=this.a
for(y=J.aL(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bD()
if((w&127)!==w)return x-b}return z-b}},lM:{"^":"n:30;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c5(this.d,a,b)}}}],["","",,P,{"^":"",
bV:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.j]})
z=H.iK(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hA:function(a){var z=J.J(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
i8:function(a,b,c,d){var z,y
H.y(b,d)
z=J.hU(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$ise",[d],"$ase")},
eh:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gY(a);x.E();)C.a.h(y,H.y(x.gO(x),c))
if(b)return y
return H.w(J.bC(y),"$ise",z,"$ase")},
c5:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aR(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.eu(z?C.a.bH(a,b,c):a)}if(!!J.J(a).$isd8)return H.iM(a,b,P.aR(b,c,a.length,null,null,null))
return P.jg(a,b,c)},
jg:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.a_(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a_(c,b,J.at(a),null,null))
y=J.bx(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a_(c,b,x,null,null))
w.push(y.gO(y))}return H.eu(w)},
iR:function(a,b,c){return new H.hW(a,H.hX(a,!1,!0,!1))},
f3:function(){var z=H.iC()
if(z!=null)return P.jQ(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hA(a)},
t:function(a){return new P.fe(a)},
i9:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dF:function(a){H.mD(a)},
jQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f2(b>0||c<c?C.b.q(a,b,c):a,5,null).gek()
else if(y===32)return P.f2(C.b.q(a,z,c),0,null).gek()}x=new Array(8)
x.fixed$length=Array
w=H.d(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fD(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iq()
if(v>=b)if(P.fD(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.A()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.K()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.K()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.K()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a8(a,"..",s)))n=r>s+2&&C.b.a8(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a8(a,"file",b)){if(u<=b){if(!C.b.a8(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aQ(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.l7(a,v,u,t,s,r,q,o)}return P.lu(a,b,c,v,u,t,s,r,q,o)},
f5:function(a,b){var z=P.j
return C.a.hB(H.d(a.split("&"),[z]),P.ef(z,z),new P.jT(b),[P.K,P.j,P.j])},
jO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jP(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bV(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.cJ()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bV(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.cJ()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jR(a)
y=new P.jS(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gav(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jO(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.f.aG(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
m1:function(){var z,y,x,w,v
z=P.i9(22,new P.m3(),!0,P.P)
y=new P.m2(z)
x=new P.m4()
w=new P.m5()
v=H.c(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.c(y.$2(8,8),"$isP"),"]",5)
v=H.c(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.c(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.c(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.c(y.$2(20,245),"$isP"),"az",21)
v=H.c(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fD:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$ise",[P.m],"$ase")
z=$.$get$fE()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
a4:{"^":"b;"},
"+bool":0,
am:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.f.aG(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hq(H.iJ(this))
y=P.c_(H.iH(this))
x=P.c_(H.iD(this))
w=P.c_(H.iE(this))
v=P.c_(H.iG(this))
u=P.c_(H.iI(this))
t=P.hr(H.iF(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hq:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
z:{"^":"a2;"},
"+double":0,
bA:{"^":"b;a",
K:function(a,b){return C.f.K(this.a,H.c(b,"$isbA").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bA))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hv()
y=this.a
if(y<0)return"-"+new P.bA(0-y).i(0)
x=z.$1(C.f.a1(y,6e7)%60)
w=z.$1(C.f.a1(y,1e6)%60)
v=new P.hu().$1(y%1e6)
return""+C.f.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e2:function(a,b,c,d,e,f){return new P.bA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hu:{"^":"n:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hv:{"^":"n:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
ep:{"^":"a6;",
i:function(a){return"Throw of null."}},
aM:{"^":"a6;a,b,c,d",
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbO()+y+x
if(!this.a)return w
v=this.gbN()
u=P.cg(this.b)
return w+v+": "+H.l(u)},
p:{
bY:function(a){return new P.aM(!1,null,null,a)},
cb:function(a,b,c){return new P.aM(!0,a,b,c)},
dI:function(a){return new P.aM(!1,null,a,"Must not be null")}}},
cq:{"^":"aM;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
aR:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a_(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a_(b,a,c,"end",f))
return b}return c}}},
hH:{"^":"aM;e,k:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.h_(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.at(b))
return new P.hH(b,z,!0,a,c,"Index out of range")}}},
jM:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jM(a)}}},
jJ:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c6:function(a){return new P.jJ(a)}}},
ja:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hj:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cg(z))+"."},
p:{
aY:function(a){return new P.hj(a)}}},
ix:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa6:1},
ex:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hp:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fe:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hF:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.V(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
p:{
X:function(a,b,c){return new P.hF(a,b,c)}}},
m:{"^":"a2;"},
"+int":0,
k:{"^":"b;$ti",
gk:function(a){var z,y
z=this.gY(this)
for(y=0;z.E();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.p(P.a_(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.E();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hS(this,"(",")")}},
cZ:{"^":"b;$ti"},
e:{"^":"b;$ti",$isk:1},
"+List":0,
K:{"^":"b;$ti"},
E:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a2:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gT:function(a){return H.bI(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
j:{"^":"b;",$iseq:1},
"+String":0,
an:{"^":"b;aD:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnz:1,
p:{
eA:function(a,b,c){var z=J.bx(b)
if(!z.E())return a
if(c.length===0){do a+=H.l(z.gO(z))
while(z.E())}else{a+=H.l(z.gO(z))
for(;z.E();)a=a+c+H.l(z.gO(z))}return a}}},
jT:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.w(a,"$isK",[z,z],"$asK")
H.M(b)
y=J.aL(b).dY(b,"=")
if(y===-1){if(b!=="")J.cJ(a,P.ds(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ay(b,y+1)
z=this.a
J.cJ(a,P.ds(x,0,x.length,z,!0),P.ds(w,0,w.length,z,!0))}return a}},
jP:{"^":"n:45;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
jR:{"^":"n:50;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jS:{"^":"n:49;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bV(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cz:{"^":"b;bF:a<,b,c,d,e9:e>,f,r,0x,0y,0z,0Q,0ch",
gel:function(){return this.b},
gcm:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbA:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gcw:function(a){var z=this.f
return z==null?"":z},
gdT:function(){var z=this.r
return z==null?"":z},
cA:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.dr(g,0,0,h)
return new P.cz(i,j,c,f,d,g,this.r)},
ef:function(a,b){return this.cA(a,null,null,null,null,null,null,b,null,null)},
gcz:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.f1(P.f5(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdU:function(){return this.c!=null},
gdX:function(){return this.f!=null},
gdV:function(){return this.r!=null},
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
t:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdk){y=this.a
x=b.gbF()
if(y==null?x==null:y===x)if(this.c!=null===b.gdU()){y=this.b
x=b.gel()
if(y==null?x==null:y===x){y=this.gcm(this)
x=z.gcm(b)
if(y==null?x==null:y===x){y=this.gbA(this)
x=z.gbA(b)
if(y==null?x==null:y===x)if(this.e===z.ge9(b)){y=this.f
x=y==null
if(!x===b.gdX()){if(x)y=""
if(y===z.gcw(b)){z=this.r
y=z==null
if(!y===b.gdV()){if(y)z=""
z=z===b.gdT()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdk:1,
p:{
cA:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$ise",[P.m],"$ase")
if(c===C.k){z=$.$get$fy().b
if(typeof b!=="string")H.p(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.aB(c,"bZ",0))
y=c.ghx().c9(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lF(a,b,d)
else{if(d===b)P.bO(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lG(a,z,e-1):""
x=P.lz(a,e,f,!1)
if(typeof f!=="number")return f.A()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lC(P.bV(C.b.q(a,w,g),new P.lv(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lA(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.dr(a,h+1,i,null):null
return new P.cz(j,y,x,v,u,t,i<c?P.ly(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bO:function(a,b,c){throw H.a(P.X(c,a,b))},
lC:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lz:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.I()
z=c-1
if(C.b.V(a,z)!==93)P.bO(a,b,"Missing end `]` to match `[` in host")
P.f4(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f4(a,b,c)
return"["+a+"]"}return P.lI(a,b,c)},
lI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fA(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bO(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lF:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.F(a,b)))P.bO(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bO(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lw(y?a.toLowerCase():a)},
lw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lG:function(a,b,c){return P.bP(a,b,c,C.R)},
lA:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bP(a,b,c,C.y):C.t.j7(d,new P.lB(),P.j).w(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.lH(w,e,f)},
lH:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.lJ(a,!z||c)
return P.lK(a)},
dr:function(a,b,c,d){var z,y
z={}
H.w(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.bY("Both query and queryParameters specified"))
return P.bP(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.C(0,new P.lD(new P.lE(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ly:function(a,b,c){return P.bP(a,b,c,C.n)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cG(y)
v=H.cG(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aG(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cp(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fu:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.f.fT(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c5(y,0,null)},
bP:function(a,b,c,d){var z=P.fz(a,b,c,H.w(d,"$ise",[P.m],"$ase"),!1)
return z==null?C.b.q(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$ise",[P.m],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fA(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bO(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.an("")
w.a+=C.b.q(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.a7(a,"."))return!0
return C.b.dY(a,"/.")!==-1},
lK:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.d([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.w(z,"/")},
lJ:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
z=H.d([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gav(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gav(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.fv(z[0]))}return C.a.w(z,"/")},
fv:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fw(J.h0(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lx:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bY("Invalid URL encoding"))}}return z},
ds:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dA(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.a5(y.q(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.bY("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bY("Truncated URI"))
C.a.h(u,P.lx(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$ise",[P.m],"$ase")
return new P.jZ(!1).c9(u)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
lv:{"^":"n:25;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.A()
throw H.a(P.X("Invalid port",this.a,z+1))}},
lB:{"^":"n:43;",
$1:function(a){return P.cA(C.T,a,C.k,!1)}},
lE:{"^":"n:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cA(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cA(C.p,b,C.k,!0))}}},
lD:{"^":"n:40;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bx(H.fS(b,"$isk")),y=this.a;z.E();)y.$2(a,H.M(z.gO(z)))}},
jN:{"^":"b;a,b,c",
gek:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.dZ(y,"?",z)
w=y.length
if(x>=0){v=P.bP(y,x+1,w,C.n)
w=x}else v=null
z=new P.kp(this,"data",null,null,null,P.bP(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gav(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.X("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hR(0,a,s,y)
else{r=P.fz(a,s,y,C.n,!0)
if(r!=null)a=C.b.aQ(a,s,y,r)}return new P.jN(a,z,c)}}},
m3:{"^":"n:39;",
$1:function(a){return new Uint8Array(96)}},
m2:{"^":"n:38;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.h4(z,0,96,b)
return z}},
m4:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
m5:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
l7:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdU:function(){return this.c>0},
gdW:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.A()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdX:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
gdV:function(){return this.r<this.a.length},
gd4:function(){return this.b===4&&C.b.a7(this.a,"http")},
gd5:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbF:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd4()){this.x="http"
z="http"}else if(this.gd5()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
gel:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gcm:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbA:function(a){var z
if(this.gdW()){z=this.d
if(typeof z!=="number")return z.A()
return P.bV(C.b.q(this.a,z+1,this.e),null,null)}if(this.gd4())return 80
if(this.gd5())return 443
return 0},
ge9:function(a){return C.b.q(this.a,this.e,this.f)},
gcw:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.q(this.a,z+1,y):""},
gdT:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ay(y,z+1):""},
gcz:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.U
z=P.j
return new P.f1(P.f5(this.gcw(this),C.k),[z,z])},
cA:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.j,null],"$asK")
i=this.gbF()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gdW()?this.gbA(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.dr(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ay(y,x+1)
return new P.cz(i,j,c,f,d,g,b)},
ef:function(a,b){return this.cA(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdk)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdk:1},
kp:{"^":"cz;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cR:function(a,b){var z=document.createElement("canvas")
return z},
hx:function(a){H.c(a,"$isaf")
return"wheel"},
e6:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fg:function(a,b,c,d){var z,y
z=W.cx(W.cx(W.cx(W.cx(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dm(a,b)},
b8:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mM:{"^":"u;0k:length=","%":"AccessibleNodeList"},
mN:{"^":"b8;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mO:{"^":"b8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"u;",$iscN:1,"%":";Blob"},
cQ:{"^":"b8;",
bE:function(a,b,c){if(c!=null)return a.getContext(b,P.mh(c,null))
return a.getContext(b)},
eo:function(a,b){return this.bE(a,b,null)},
$iscQ:1,
"%":"HTMLCanvasElement"},
dR:{"^":"u;",$isdR:1,"%":"CanvasRenderingContext2D"},
mU:{"^":"L;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mW:{"^":"ho;0k:length=","%":"CSSPerspective"},
b5:{"^":"u;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mX:{"^":"ko;0k:length=",
ep:function(a,b){var z=a.getPropertyValue(this.eR(a,b))
return z==null?"":z},
eR:function(a,b){var z,y
z=$.$get$dV()
y=z[b]
if(typeof y==="string")return y
y=this.fU(a,b)
z[b]=y
return y},
fU:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hs()+b
if(z in a)return z
return b},
gc5:function(a){return a.bottom},
gai:function(a){return a.height},
gaP:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hn:{"^":"b;",
gaP:function(a){return this.ep(a,"left")}},
dW:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ho:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mY:{"^":"dW;0k:length=","%":"CSSTransformValue"},
mZ:{"^":"dW;0k:length=","%":"CSSUnparsedValue"},
n_:{"^":"u;0k:length=","%":"DataTransferItemList"},
n0:{"^":"u;",
i:function(a){return String(a)},
"%":"DOMException"},
n1:{"^":"kr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa7",[P.a2],"$asa7")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a2]]},
$asv:function(){return[[P.a7,P.a2]]},
$isk:1,
$ask:function(){return[[P.a7,P.a2]]},
$ise:1,
$ase:function(){return[[P.a7,P.a2]]},
$asB:function(){return[[P.a7,P.a2]]},
"%":"ClientRectList|DOMRectList"},
ht:{"^":"u;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gak(a))+" x "+H.l(this.gai(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bU(b,"$isa7",[P.a2],"$asa7")
if(!z)return!1
z=J.bu(b)
return a.left===z.gaP(b)&&a.top===z.gb9(b)&&this.gak(a)===z.gak(b)&&this.gai(a)===z.gai(b)},
gT:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF)},
gc5:function(a){return a.bottom},
gai:function(a){return a.height},
gaP:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gak:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a2]},
"%":";DOMRectReadOnly"},
n2:{"^":"kt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.j]},
$asv:function(){return[P.j]},
$isk:1,
$ask:function(){return[P.j]},
$ise:1,
$ase:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"DOMStringList"},
n3:{"^":"u;0k:length=","%":"DOMTokenList"},
kn:{"^":"cn;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.c(z[b],"$isV")},
m:function(a,b,c){var z
H.C(b)
H.c(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.im(this)
return new J.au(z,z.length,0,[H.x(z,0)])},
au:function(a,b,c,d){throw H.a(P.c6(null))},
$asv:function(){return[W.V]},
$ask:function(){return[W.V]},
$ase:function(){return[W.V]}},
V:{"^":"L;",
gc8:function(a){return new W.kn(a,a.children)},
gdq:function(a){return P.iN(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a2)},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
ae:{"^":"u;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"u;",
di:["eu",function(a,b,c,d){H.f(c,{func:1,args:[W.ae]})
if(c!=null)this.eM(a,b,c,!1)}],
eM:function(a,b,c,d){return a.addEventListener(b,H.bs(H.f(c,{func:1,args:[W.ae]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fm|fn|fp|fq"},
aZ:{"^":"cN;",$isaZ:1,"%":"File"},
e3:{"^":"ky;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isaZ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aZ]},
$asv:function(){return[W.aZ]},
$isk:1,
$ask:function(){return[W.aZ]},
$ise:1,
$ase:function(){return[W.aZ]},
$ise3:1,
$asB:function(){return[W.aZ]},
"%":"FileList"},
n4:{"^":"af;0k:length=","%":"FileWriter"},
n5:{"^":"b8;0k:length=","%":"HTMLFormElement"},
b7:{"^":"u;",$isb7:1,"%":"Gamepad"},
n6:{"^":"u;0k:length=","%":"History"},
n7:{"^":"kL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c1:{"^":"u;0dr:data=",$isc1:1,"%":"ImageData"},
cX:{"^":"b8;",$iscX:1,"%":"HTMLImageElement"},
bD:{"^":"dh;",$isbD:1,"%":"KeyboardEvent"},
nb:{"^":"u;",
i:function(a){return String(a)},
"%":"Location"},
nc:{"^":"u;0k:length=","%":"MediaList"},
nd:{"^":"af;",
di:function(a,b,c,d){H.f(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.eu(a,b,c,!1)},
"%":"MessagePort"},
ne:{"^":"kS;",
j:function(a,b){return P.aW(a.get(H.M(b)))},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaj:function(a){var z=H.d([],[P.j])
this.C(a,new W.iq(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iq:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nf:{"^":"kT;",
j:function(a,b){return P.aW(a.get(H.M(b)))},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaj:function(a){var z=H.d([],[P.j])
this.C(a,new W.ir(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
ir:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"u;",$isbb:1,"%":"MimeType"},
ng:{"^":"kV;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asv:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"MimeTypeArray"},
aa:{"^":"dh;",$isaa:1,"%":"PointerEvent;DragEvent|MouseEvent"},
km:{"^":"cn;a",
m:function(a,b,c){var z,y
H.C(b)
H.c(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.e4(z,z.length,-1,[H.aX(C.W,z,"B",0)])},
au:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asv:function(){return[W.L]},
$ask:function(){return[W.L]},
$ase:function(){return[W.L]}},
L:{"^":"af;",
i8:function(a,b){var z,y
try{z=a.parentNode
J.h1(z,b,a)}catch(y){H.aC(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ev(a):z},
fH:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iv:{"^":"kX;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bc:{"^":"u;0k:length=",$isbc:1,"%":"Plugin"},
np:{"^":"l0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asv:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"PluginArray"},
nr:{"^":"l6;",
j:function(a,b){return P.aW(a.get(H.M(b)))},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaj:function(a){var z=H.d([],[P.j])
this.C(a,new W.iX(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
iX:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nt:{"^":"b8;0k:length=","%":"HTMLSelectElement"},
be:{"^":"af;",$isbe:1,"%":"SourceBuffer"},
nu:{"^":"fn;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asv:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SourceBufferList"},
bf:{"^":"u;",$isbf:1,"%":"SpeechGrammar"},
nv:{"^":"l9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asv:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$ise:1,
$ase:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"u;0k:length=",$isbg:1,"%":"SpeechRecognitionResult"},
nx:{"^":"lc;",
j:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaj:function(a){var z=H.d([],[P.j])
this.C(a,new W.jc(z))
return z},
gk:function(a){return a.length},
$asaj:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
jc:{"^":"n:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"u;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
de:{"^":"b8;",$isde:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"af;",$isbi:1,"%":"TextTrack"},
bj:{"^":"af;",$isbj:1,"%":"TextTrackCue|VTTCue"},
nB:{"^":"lj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asv:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TextTrackCueList"},
nC:{"^":"fq;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asv:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"TextTrackList"},
nD:{"^":"u;0k:length=","%":"TimeRanges"},
bl:{"^":"u;",$isbl:1,"%":"Touch"},
bm:{"^":"dh;",$isbm:1,"%":"TouchEvent"},
nE:{"^":"lp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bl]},
$asv:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asB:function(){return[W.bl]},
"%":"TouchList"},
nF:{"^":"u;0k:length=","%":"TrackDefaultList"},
dh:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nH:{"^":"u;",
i:function(a){return String(a)},
"%":"URL"},
nI:{"^":"af;0k:length=","%":"VideoTrackList"},
bM:{"^":"aa;",
ghu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ght:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbM:1,
"%":"WheelEvent"},
kf:{"^":"af;",
fI:function(a,b){return a.requestAnimationFrame(H.bs(H.f(b,{func:1,ret:-1,args:[P.a2]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nN:{"^":"lR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isb5")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asv:function(){return[W.b5]},
$isk:1,
$ask:function(){return[W.b5]},
$ise:1,
$ase:function(){return[W.b5]},
$asB:function(){return[W.b5]},
"%":"CSSRuleList"},
nO:{"^":"ht;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bU(b,"$isa7",[P.a2],"$asa7")
if(!z)return!1
z=J.bu(b)
return a.left===z.gaP(b)&&a.top===z.gb9(b)&&a.width===z.gak(b)&&a.height===z.gai(b)},
gT:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gai:function(a){return a.height},
gak:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nQ:{"^":"lT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isb7")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b7]},
$asv:function(){return[W.b7]},
$isk:1,
$ask:function(){return[W.b7]},
$ise:1,
$ase:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"GamepadList"},
nR:{"^":"lV;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asv:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nS:{"^":"lX;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asv:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
nT:{"^":"lZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.c(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asv:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$ise:1,
$ase:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"StyleSheetList"},
ku:{"^":"dd;a,b,c,$ti",
hL:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
nP:{"^":"ku;a,b,c,$ti"},
kv:{"^":"ez;a,b,c,d,e,$ti",
fY:function(){var z=this.d
if(z!=null&&this.a<=0)J.h2(this.b,this.c,z,!1)},
p:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fH(new W.kw(c),W.ae)
z=new W.kv(0,a,b,z,!1,[e])
z.fY()
return z}}},
kw:{"^":"n:8;a",
$1:function(a){return this.a.$1(H.c(a,"$isae"))}},
B:{"^":"b;$ti",
gY:function(a){return new W.e4(a,this.gk(a),-1,[H.aX(this,a,"B",0)])},
au:function(a,b,c,d){H.y(d,H.aX(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e4:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dG(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
ko:{"^":"u+hn;"},
kq:{"^":"u+v;"},
kr:{"^":"kq+B;"},
ks:{"^":"u+v;"},
kt:{"^":"ks+B;"},
kx:{"^":"u+v;"},
ky:{"^":"kx+B;"},
kK:{"^":"u+v;"},
kL:{"^":"kK+B;"},
kS:{"^":"u+aj;"},
kT:{"^":"u+aj;"},
kU:{"^":"u+v;"},
kV:{"^":"kU+B;"},
kW:{"^":"u+v;"},
kX:{"^":"kW+B;"},
l_:{"^":"u+v;"},
l0:{"^":"l_+B;"},
l6:{"^":"u+aj;"},
fm:{"^":"af+v;"},
fn:{"^":"fm+B;"},
l8:{"^":"u+v;"},
l9:{"^":"l8+B;"},
lc:{"^":"u+aj;"},
li:{"^":"u+v;"},
lj:{"^":"li+B;"},
fp:{"^":"af+v;"},
fq:{"^":"fp+B;"},
lo:{"^":"u+v;"},
lp:{"^":"lo+B;"},
lQ:{"^":"u+v;"},
lR:{"^":"lQ+B;"},
lS:{"^":"u+v;"},
lT:{"^":"lS+B;"},
lU:{"^":"u+v;"},
lV:{"^":"lU+B;"},
lW:{"^":"u+v;"},
lX:{"^":"lW+B;"},
lY:{"^":"u+v;"},
lZ:{"^":"lY+B;"}}],["","",,P,{"^":"",
mk:function(a){var z,y
z=J.J(a)
if(!!z.$isc1){y=z.gdr(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fs(a.data,a.height,a.width)},
mj:function(a){if(a instanceof P.fs)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var z,y,x,w,v
if(a==null)return
z=P.ef(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
mh:function(a,b){var z={}
a.C(0,new P.mi(z))
return z},
e1:function(){var z=$.e0
if(z==null){z=J.cK(window.navigator.userAgent,"Opera",0)
$.e0=z}return z},
hs:function(){var z,y
z=$.dY
if(z!=null)return z
y=$.dZ
if(y==null){y=J.cK(window.navigator.userAgent,"Firefox",0)
$.dZ=y}if(y)z="-moz-"
else{y=$.e_
if(y==null){y=!P.e1()&&J.cK(window.navigator.userAgent,"Trident/",0)
$.e_=y}if(y)z="-ms-"
else z=P.e1()?"-o-":"-webkit-"}$.dY=z
return z},
lf:{"^":"b;",
dQ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cE:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.J(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isiQ)throw H.a(P.c6("structured clone of RegExp"))
if(!!y.$isaZ)return a
if(!!y.$iscN)return a
if(!!y.$ise3)return a
if(!!y.$isc1)return a
if(!!y.$isen||!!y.$isd7)return a
if(!!y.$isK){x=this.dQ(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.C(a,new P.lh(z,this))
return z.a}if(!!y.$ise){x=this.dQ(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hr(a,x)}throw H.a(P.c6("structured clone of other type"))},
hr:function(a,b){var z,y,x,w
z=J.aL(a)
y=z.gk(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cE(z.j(a,w)))
return x}},
lh:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cE(b)}},
fs:{"^":"b;dr:a>,b,c",$isc1:1},
mi:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lg:{"^":"lf;a,b"},
hC:{"^":"cn;a,b",
gaU:function(){var z,y,x
z=this.b
y=H.aB(z,"v",0)
x=W.V
return new H.ie(new H.kd(z,H.f(new P.hD(),{func:1,ret:P.a4,args:[y]}),[y]),H.f(new P.hE(),{func:1,ret:x,args:[y]}),[y,x])},
C:function(a,b){H.f(b,{func:1,ret:-1,args:[W.V]})
C.a.C(P.eh(this.gaU(),!1,W.V),b)},
m:function(a,b,c){var z
H.C(b)
H.c(c,"$isV")
z=this.gaU()
J.h5(z.b.$1(J.cL(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
au:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gk:function(a){return J.at(this.gaU().a)},
j:function(a,b){var z=this.gaU()
return z.b.$1(J.cL(z.a,b))},
gY:function(a){var z=P.eh(this.gaU(),!1,W.V)
return new J.au(z,z.length,0,[H.x(z,0)])},
$asv:function(){return[W.V]},
$ask:function(){return[W.V]},
$ase:function(){return[W.V]}},
hD:{"^":"n:26;",
$1:function(a){return!!J.J(H.c(a,"$isL")).$isV}},
hE:{"^":"n:55;",
$1:function(a){return H.i(H.c(a,"$isL"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l1:{"^":"b;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.A()
return H.y(z+this.c,H.x(this,0))},
gc5:function(a){var z=this.b
if(typeof z!=="number")return z.A()
return H.y(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bU(b,"$isa7",[P.a2],"$asa7")
if(!z)return!1
z=this.a
y=J.bu(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.A()
w=H.x(this,0)
if(H.y(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.A()
z=H.y(x+this.d,w)===y.gc5(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bX(z)
x=this.b
w=J.bX(x)
if(typeof z!=="number")return z.A()
v=H.x(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.A()
v=H.y(x+this.d,v)
return P.kM(P.cy(P.cy(P.cy(P.cy(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l1;aP:a>,b9:b>,ak:c>,ai:d>,$ti",p:{
iN:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.y(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.y(y,e),[e])}}}}],["","",,P,{"^":"",bE:{"^":"u;",$isbE:1,"%":"SVGLength"},na:{"^":"kO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.c(c,"$isbE")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bE]},
$isk:1,
$ask:function(){return[P.bE]},
$ise:1,
$ase:function(){return[P.bE]},
$asB:function(){return[P.bE]},
"%":"SVGLengthList"},bH:{"^":"u;",$isbH:1,"%":"SVGNumber"},nn:{"^":"kZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.c(c,"$isbH")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bH]},
$isk:1,
$ask:function(){return[P.bH]},
$ise:1,
$ase:function(){return[P.bH]},
$asB:function(){return[P.bH]},
"%":"SVGNumberList"},nq:{"^":"u;0k:length=","%":"SVGPointList"},ny:{"^":"le;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asv:function(){return[P.j]},
$isk:1,
$ask:function(){return[P.j]},
$ise:1,
$ase:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"SVGStringList"},nA:{"^":"V;",
gc8:function(a){return new P.hC(a,new W.km(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bK:{"^":"u;",$isbK:1,"%":"SVGTransform"},nG:{"^":"lr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.c(c,"$isbK")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bK]},
$isk:1,
$ask:function(){return[P.bK]},
$ise:1,
$ase:function(){return[P.bK]},
$asB:function(){return[P.bK]},
"%":"SVGTransformList"},kN:{"^":"u+v;"},kO:{"^":"kN+B;"},kY:{"^":"u+v;"},kZ:{"^":"kY+B;"},ld:{"^":"u+v;"},le:{"^":"ld+B;"},lq:{"^":"u+v;"},lr:{"^":"lq+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$isjz:1}}],["","",,P,{"^":"",mP:{"^":"u;0k:length=","%":"AudioBuffer"},mQ:{"^":"kl;",
j:function(a,b){return P.aW(a.get(H.M(b)))},
C:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaj:function(a){var z=H.d([],[P.j])
this.C(a,new P.h8(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},h8:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},mR:{"^":"af;0k:length=","%":"AudioTrackList"},hb:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},no:{"^":"hb;0k:length=","%":"OfflineAudioContext"},kl:{"^":"u+aj;"}}],["","",,P,{"^":"",da:{"^":"u;",
ii:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc1)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mj(g))
return}if(!!z.$iscX)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bY("Incorrect number or type of arguments"))},
ih:function(a,b,c,d,e,f,g){return this.ii(a,b,c,d,e,f,g,null,null,null)},
$isda:1,
"%":"WebGLRenderingContext"},jH:{"^":"u;",$isjH:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nw:{"^":"lb;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aW(a.item(b))},
m:function(a,b,c){H.C(b)
H.c(c,"$isK")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asv:function(){return[[P.K,,,]]},
$isk:1,
$ask:function(){return[[P.K,,,]]},
$ise:1,
$ase:function(){return[[P.K,,,]]},
$asB:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},la:{"^":"u+v;"},lb:{"^":"la+B;"}}],["","",,O,{"^":"",aN:{"^":"b;0a,0b,0c,0d,$ti",
bJ:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cK:function(a,b,c){var z=H.aB(this,"aN",0)
H.f(b,{func:1,ret:P.a4,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bd:function(a,b){return this.cK(a,null,b)},
fw:function(a){var z
H.w(a,"$isk",[H.aB(this,"aN",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eE:function(a,b){var z
H.w(b,"$isk",[H.aB(this,"aN",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.au(z,z.length,0,[H.x(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aB(this,"aN",0)
H.y(b,z)
z=[z]
if(this.fw(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eE(x,H.d([b],z))}},
$isk:1,
p:{
cT:function(a){var z=new O.aN([a])
z.bJ(a)
return z}}},d4:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
eF:function(a){var z=this.b
if(!(z==null))z.D(a)},
az:function(){return this.eF(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gav(z)
else return V.c4()},
ec:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.az()},
cv:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cM:{"^":"b;"},aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cU:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
if(y.f==null)y.cU()}},
sbG:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.f(this.ge6(),{func:1,ret:-1,args:[D.r]})
C.a.Z(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.f(this.ge6(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)}w=new D.I("shape",z,this.c,this,[F.ac])
w.b=!0
this.a6(w)}},
scC:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.ge7(),{func:1,ret:-1,args:[D.r]})
C.a.Z(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.ge7(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}this.cU()
w=new D.I("technique",x,this.f,this,[O.cs])
w.b=!0
this.a6(w)}},
sb1:function(a){var z,y,x,w
if(!J.R(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.f(this.ge5(),{func:1,ret:-1,args:[D.r]})
C.a.Z(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.f(this.ge5(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)}this.r=a
w=new D.I("mover",z,a,this,[U.ab])
w.b=!0
this.a6(w)}},
ag:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aR(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.I("matrix",x,y,this,[V.aF])
w.b=!0
this.a6(w)}z=this.f
if(z!=null)z.ag(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.E();)z.d.ag(0,b)},
aw:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.l(0,z.gW(z)))
z.az()
a.ed(this.f)
z=a.dy
x=(z&&C.a).gav(z)
if(x!=null&&this.d!=null)x.ee(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.E();)z.d.aw(a)
a.ea()
a.dx.cv()},
gu:function(){var z=this.z
if(z==null){z=D.N()
this.z=z}return z},
a6:function(a){var z=this.z
if(!(z==null))z.D(a)},
X:function(){return this.a6(null)},
hW:[function(a){H.c(a,"$isr")
this.e=null
this.a6(a)},function(){return this.hW(null)},"jd","$1","$0","ge6",0,2,0],
hX:[function(a){this.a6(H.c(a,"$isr"))},function(){return this.hX(null)},"je","$1","$0","ge7",0,2,0],
hV:[function(a){this.a6(H.c(a,"$isr"))},function(){return this.hV(null)},"jc","$1","$0","ge5",0,2,0],
hT:[function(a){this.a6(H.c(a,"$isr"))},function(){return this.hT(null)},"ja","$1","$0","ge4",0,2,0],
j9:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aO],"$ask")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b6()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghS",8,0,9],
jb:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aO],"$ask")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b6()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.f(y,x)
C.a.Z(t.a,y)}}this.X()},"$2","ghU",8,0,9],
$isaQ:1,
p:{
cV:function(a,b,c,d,e,f){var z,y
z=new E.aO()
z.a=d
z.b=!0
y=O.cT(E.aO)
z.y=y
y.bd(z.ghS(),z.ghU())
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
z.sbG(0,e)
z.scC(f)
z.sb1(c)
return z}}},iS:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eB:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.am(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d4()
y=[V.aF]
z.a=H.d([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.r]}
v=H.f(new E.iU(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d4()
z.a=H.d([],y)
v=z.gu()
v.toString
x=H.f(new E.iV(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d4()
z.a=H.d([],y)
y=z.gu()
y.toString
w=H.f(new E.iW(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.cs])
this.dy=z
C.a.h(z,null)
this.fr=new H.aP(0,0,[P.j,A.db])},
gi5:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.l(0,y.gW(y))
this.z=y
z=y}return z},
geb:function(){var z,y
z=this.ch
if(z==null){z=this.gi5()
y=this.dx
y=z.l(0,y.gW(y))
this.ch=y
z=y}return z},
gem:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gW(z)
y=this.dx
y=z.l(0,y.gW(y))
this.cx=y
z=y}return z},
ed:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gav(z):a;(z&&C.a).h(z,y)},
ea:function(){var z=this.dy
if(z.length>1)z.pop()},
dl:function(a){var z=a.b
if(z.length===0)throw H.a(P.t("May not cache a shader with no name."))
if(this.fr.bm(0,z))throw H.a(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
iT:function(a,b){var z=new E.iS(a,b)
z.eB(a,b)
return z}}},iU:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$isr")
z=this.a
z.z=null
z.ch=null}},iV:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$isr")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iW:{"^":"n:12;a",
$1:function(a){var z
H.c(a,"$isr")
z=this.a
z.ch=null
z.cx=null}},jr:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
eH:[function(a){var z
H.c(a,"$isr")
z=this.x
if(!(z==null))z.D(a)
this.ia()},function(){return this.eH(null)},"eG","$1","$0","gcO",0,2,0],
ghD:function(){var z,y,x
z=Date.now()
y=C.f.a1(P.e2(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
d9:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.i.cl(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.cl(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eF(C.q,this.gi9())},
ia:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jt(this),{func:1,ret:-1,args:[P.a2]})
C.B.eZ(z)
C.B.fI(z,W.fH(y,P.a2))}},"$0","gi9",0,0,3],
i7:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d9()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.e2(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.az()
w=x.db
C.a.sk(w.a,0)
w.az()
w=x.dx
C.a.sk(w.a,0)
w.az()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aw(this.e)}}catch(v){z=H.aC(v)
y=H.bv(v)
P.dF("Error: "+H.l(z))
P.dF("Stack: "+H.l(y))
throw H.a(z)}},
p:{
js:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscQ)return E.eE(a,!0,!0,!0,!1)
y=W.cR(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc8(a).h(0,y)
w=E.eE(y,!0,!0,!0,!1)
w.a=a
return w},
eE:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jr()
y=P.i4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bE(a,"webgl",y)
x=H.c(x==null?C.l.bE(a,"experimental-webgl",y):x,"$isda")
if(x==null)H.p(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iT(x,a)
w=new T.jm(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jU(a)
v=new X.hZ()
v.c=new X.aH(!1,!1,!1)
v.d=P.i7(null,null,null,P.m)
w.b=v
v=new X.is(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ia(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jw(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.ez,P.b]])
w.z=v
u=document
t=W.aa
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.f(w.gfi(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.f(w.gfl(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.f(w.gfe(),q),!1,r))
v=w.z
p=W.bD
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.f(w.gfn(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.f(w.gfm(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.f(w.gfq(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.f(w.gft(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.f(w.gfs(),s),!1,t))
p=w.z
o=W.bM;(p&&C.a).h(p,W.a1(a,H.M(W.hx(a)),H.f(w.gfu(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.f(w.gfj(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.f(w.gfk(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.f(w.gfv(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.f(w.gfE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.f(w.gfC(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.f(w.gfD(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.d9()
return z}}},jt:{"^":"n:31;a",
$1:function(a){var z
H.mC(a)
z=this.a
if(z.z){z.z=!1
z.i7()}}}}],["","",,Z,{"^":"",fa:{"^":"b;a,b",p:{
dm:function(a,b,c){var z
H.w(c,"$ise",[P.m],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bp(c)),35044)
a.bindBuffer(b,null)
return new Z.fa(b,z)}}},dN:{"^":"cM;a,b,c,d,e",
aq:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aC(y)
x=P.t('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fb:{"^":"b;a",$ismS:1},cd:{"^":"b;a,0b,c,d",
aa:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aq:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aq(a)},
ej:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aw:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
e8:function(a){this.aq(a)
this.aw(a)
this.ej(a)},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$isjh:1},dO:{"^":"b;0a",$isjh:1},ci:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},b1:{"^":"b;a",
gcL:function(a){var z,y
z=this.a
y=(z&$.$get$aA().a)!==0?3:0
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=4
if((z&$.$get$bn().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
ho:function(a){var z,y,x
z=$.$get$aA()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f9()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.j])
y=this.a
if((y&$.$get$aA().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$az().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
p:{
ar:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",cS:{"^":"b;"},b6:{"^":"b;0a,0b,0c",
D:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.r(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.C(y,new D.hB(z))
return x!==0},
hv:function(){return this.D(null)},
ib:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.D(y)}}},
ax:function(a){return this.ib(a,!0,!1)},
p:{
N:function(){var z=new D.b6()
z.a=H.d([],[{func:1,ret:-1,args:[D.r]}])
z.c=0
return z}}},hB:{"^":"n:54;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},r:{"^":"b;a,0b"},cj:{"^":"r;c,d,a,0b,$ti"},ck:{"^":"r;c,d,a,0b,$ti"},I:{"^":"r;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dP:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"mT<"}},ec:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ec))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ed:{"^":"r;c,a,0b"},hZ:{"^":"b;0a,0b,0c,0d",
i2:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ed(a,this)
y.b=!0
return z.D(y)},
hZ:function(a){var z,y
this.c=a.b
this.d.Z(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ed(a,this)
y.b=!0
return z.D(y)}},ei:{"^":"co;x,y,c,d,e,a,0b"},ia:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaI()
s=new X.bF(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cu:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.D(this.an(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.bD()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.an(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.an(a,b))
return!0},
i3:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.d5(new V.W(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.D(w)
return!0},
fp:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.ei(c,a,this.a.gaI(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=new V.Z(0,0)}},aH:{"^":"b;a,b,c",
t:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bF:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},is:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bP:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaI()
x=new X.bF(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cu:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.bP(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.bD()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.bP(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.bP(a,b,!1))
return!0},
i4:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.d5(new V.W(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.D(x)
return!0},
gdt:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
gbC:function(){var z=this.c
if(z==null){z=D.N()
this.c=z}return z},
ge2:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z}},d5:{"^":"co;x,c,d,e,a,0b"},co:{"^":"r;"},eJ:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},jw:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.w(a,"$ise",[V.Z],"$ase")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gaI()
w=new X.eJ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i1:function(a){var z
H.w(a,"$ise",[V.Z],"$ase")
z=this.b
if(z==null)return!1
z.D(this.an(a,!0))
return!0},
i_:function(a){var z
H.w(a,"$ise",[V.Z],"$ase")
z=this.c
if(z==null)return!1
z.D(this.an(a,!0))
return!0},
i0:function(a){var z
H.w(a,"$ise",[V.Z],"$ase")
z=this.d
if(z==null)return!1
z.D(this.an(a,!1))
return!0}},jU:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaI:function(){var z=this.a
return V.ew(0,0,(z&&C.l).gdq(z).c,C.l.gdq(z).d)},
d0:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ec(z,new X.aH(y,a.altKey,a.shiftKey))},
aF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
c0:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.Z(y-w,x-v)},
aW:function(a){return new V.W(a.movementX,a.movementY)},
bX:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.i.af(u.pageX)
C.i.af(u.pageY)
s=z.left
C.i.af(u.pageX)
C.a.h(y,new V.Z(t-s,C.i.af(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.aH(y,a.altKey,a.shiftKey))},
bR:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.I()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iL:[function(a){this.f=!0},"$1","gfl",4,0,8],
iF:[function(a){this.f=!1},"$1","gfe",4,0,8],
iI:[function(a){H.c(a,"$isaa")
if(this.f&&this.bR(a))a.preventDefault()},"$1","gfi",4,0,4],
iN:[function(a){var z
H.c(a,"$isbD")
if(!this.f)return
z=this.d0(a)
if(this.b.i2(z))a.preventDefault()},"$1","gfn",4,0,24],
iM:[function(a){var z
H.c(a,"$isbD")
if(!this.f)return
z=this.d0(a)
if(this.b.hZ(z))a.preventDefault()},"$1","gfm",4,0,24],
iP:[function(a){var z,y,x,w
H.c(a,"$isaa")
z=this.a
z.focus()
this.f=!0
this.aF(a)
if(this.x){y=this.al(a)
x=this.aW(a)
if(this.d.cu(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.cu(y,w))a.preventDefault()},"$1","gfq",4,0,4],
iR:[function(a){var z,y,x
H.c(a,"$isaa")
this.aF(a)
z=this.al(a)
if(this.x){y=this.aW(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gft",4,0,4],
iK:[function(a){var z,y,x
H.c(a,"$isaa")
if(!this.bR(a)){this.aF(a)
z=this.al(a)
if(this.x){y=this.aW(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.b3(z,x))a.preventDefault()}},"$1","gfk",4,0,4],
iQ:[function(a){var z,y,x
H.c(a,"$isaa")
this.aF(a)
z=this.al(a)
if(this.x){y=this.aW(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gfs",4,0,4],
iJ:[function(a){var z,y,x
H.c(a,"$isaa")
if(!this.bR(a)){this.aF(a)
z=this.al(a)
if(this.x){y=this.aW(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gfj",4,0,4],
iS:[function(a){var z,y
H.c(a,"$isbM")
this.aF(a)
z=new V.W((a&&C.A).ght(a),C.A.ghu(a)).B(0,180)
if(this.x){if(this.d.i3(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.i4(z,y))a.preventDefault()},"$1","gfu",4,0,35],
iT:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.fp(w,v,x)}},"$1","gfv",4,0,8],
iZ:[function(a){var z
H.c(a,"$isbm")
this.a.focus()
this.f=!0
this.c0(a)
z=this.bX(a)
if(this.e.i1(z))a.preventDefault()},"$1","gfE",4,0,14],
iX:[function(a){var z
H.c(a,"$isbm")
this.c0(a)
z=this.bX(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfC",4,0,14],
iY:[function(a){var z
H.c(a,"$isbm")
this.c0(a)
z=this.bX(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfD",4,0,14]}}],["","",,D,{"^":"",cf:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z},
aA:[function(a){var z
H.c(a,"$isr")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aA(null)},"ir","$1","$0","geI",0,2,0],
$isa3:1,
$isaQ:1},a3:{"^":"b;",$isaQ:1},i_:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.N()
this.Q=z}return z},
aA:function(a){var z=this.Q
if(!(z==null))z.D(a)},
fo:[function(a){var z
H.c(a,"$isr")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.fo(null)},"iO","$1","$0","gd6",0,2,0],
iU:[function(a){var z,y,x
H.w(a,"$isk",[D.a3],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eV(x))return!1}return!0},"$1","gfz",4,0,37],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd6(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.c(b[u],"$isa3")
if(t instanceof D.cf)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gfb",8,0,23],
iW:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd6(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.c(b[u],"$isa3")
if(t instanceof D.cf)C.a.Z(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.Z(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gfB",8,0,23],
eV:function(a){var z=C.a.aY(this.e,a)
return z},
$ask:function(){return[D.a3]},
$asaN:function(){return[D.a3]}},iA:{"^":"b;",$isa3:1,$isaQ:1},j9:{"^":"b;",$isa3:1,$isaQ:1},jo:{"^":"b;",$isa3:1,$isaQ:1},jp:{"^":"b;",$isa3:1,$isaQ:1},jq:{"^":"b;",$isa3:1,$isaQ:1}}],["","",,V,{"^":"",
mV:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","ip",8,0,36],
mL:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bc(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.i.ei($.q.$2(a,0)?0:a,b),c+b+1)},
bt:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$ise",[P.z],"$ase")
z=H.d([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.ac(z[u],x))}return z},
dE:function(a,b){return C.i.il(Math.pow(b,C.I.cl(Math.log(H.mg(a))/Math.log(b))))},
U:{"^":"b;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
aE:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
el:{"^":"b;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.el))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.z]
y=V.bt(H.d([this.a,this.d,this.r],z),3,0)
x=V.bt(H.d([this.b,this.e,this.x],z),3,0)
w=V.bt(H.d([this.c,this.f,this.y],z),3,0)
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
aF:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return z},
e0:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
t=this.e
if(typeof t!=="number")return t.l()
s=this.f
if(typeof s!=="number")return s.l()
r=this.r
if(typeof r!=="number")return r.l()
q=this.y
if(typeof q!=="number")return q.l()
p=this.z
if(typeof p!=="number")return p.l()
o=this.Q
if(typeof o!=="number")return o.l()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.av(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
dS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.z]
y=V.bt(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bt(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bt(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bt(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.dS("",3,0)},
v:function(a){return this.dS(a,3,0)},
p:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c4:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
em:function(a,b,c){var z,y,x,w,v
z=c.B(0,Math.sqrt(c.G(c)))
y=b.b_(z)
x=y.B(0,Math.sqrt(y.G(y)))
w=z.b_(x)
v=new V.G(a.a,a.b,a.c)
return V.aG(x.a,w.a,z.a,x.M(0).G(v),x.b,w.b,z.b,w.M(0).G(v),x.c,w.c,z.c,z.M(0).G(v),0,0,0,1)}}},
Z:{"^":"b;a,b",
I:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
av:{"^":"b;a,b,c",
A:function(a,b){return new V.av(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a,b){return new V.av(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
es:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.es))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
ev:{"^":"b;a,b,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ev))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
ew:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ev(a,b,c,d)}}},
W:{"^":"b;a,b",
hJ:[function(a){return Math.sqrt(this.G(this))},"$0","gk",1,0,15],
G:function(a){var z,y,x,w
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
return new V.W(z*b,y*b)},
B:function(a,b){var z,y
if($.q.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.W(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hJ:[function(a){return Math.sqrt(this.G(this))},"$0","gk",1,0,15],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b_:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
A:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.G(-this.a,-this.b,-this.c)},
B:function(a,b){if($.q.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
e1:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hi:{"^":"cS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.mL(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.D(a)},
scF:function(a,b){},
scr:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.I("maximumLocation",y,this.b,this,[P.z])
z.b=!0
this.P(z)}},
sct:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.I("minimumLocation",y,this.c,this,[P.z])
z.b=!0
this.P(z)}},
sa4:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.z])
z.b=!0
this.P(z)}},
scs:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.z])
z.b=!0
this.P(z)}},
sR:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.z])
z.b=!0
this.P(z)}},
scb:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.z])
z.b=!0
this.P(z)}},
ag:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa4(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sR(y)}},
p:{
cU:function(){var z=new U.hi()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dT:{"^":"ab;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
aR:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
p:{
dU:function(a){var z=new U.dT()
z.a=a
return z}}},e5:{"^":"aN;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
P:[function(a){var z
H.c(a,"$isr")
z=this.e
if(!(z==null))z.D(a)},function(){return this.P(null)},"ad","$1","$0","gaB",0,2,0],
iB:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gfa",8,0,21],
iV:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.Z(t.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gfA",8,0,21],
aR:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.x(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aR(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.ax(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e5))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.ab]},
$asaN:function(){return[U.ab]},
$isab:1},ab:{"^":"cS;"},jV:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.N()
this.cy=z}return z},
P:[function(a){var z
H.c(a,"$isr")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.P(null)},"ad","$1","$0","gaB",0,2,0],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.r]}
x=H.f(this.gbS(),y)
C.a.h(z.a,x)
x=this.a.c.ge2()
x.toString
z=H.f(this.gbT(),y)
C.a.h(x.a,z)
z=this.a.c.gbC()
z.toString
y=H.f(this.gbU(),y)
C.a.h(z.a,y)
return!0},
f5:[function(a){H.c(a,"$isr")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbS",4,0,1],
f6:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$isr"),"$isbF")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.W(y.a,y.b).l(0,2).B(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sR(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.W(x.a,x.b).l(0,2).B(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa4(0,-v*u+t)
this.b.sR(0)
y=y.I(0,a.z)
this.Q=new V.W(y.a,y.b).l(0,2).B(0,z.ga5())}this.ad()},"$1","gbT",4,0,1],
f7:[function(a){var z,y,x
H.c(a,"$isr")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sR(y*10*x)
this.ad()}},"$1","gbU",4,0,1],
aR:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.ag(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aG(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isab:1},jW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.N()
this.fx=z}return z},
P:[function(a){var z
H.c(a,"$isr")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.P(null)},"ad","$1","$0","gaB",0,2,0],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.r]}
x=H.f(this.gbS(),y)
C.a.h(z.a,x)
x=this.a.c.ge2()
x.toString
z=H.f(this.gbT(),y)
C.a.h(x.a,z)
z=this.a.c.gbC()
z.toString
x=H.f(this.gbU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.N()
x.f=z}x=H.f(this.gf2(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.N()
x.d=z}x=H.f(this.gf3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.N()
x.b=z}x=H.f(this.gfX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.N()
x.d=z}x=H.f(this.gfW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.N()
x.c=z}y=H.f(this.gfV(),y)
C.a.h(z.a,y)
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.W(z,y)},
f5:[function(a){a=H.i(H.c(a,"$isr"),"$isbF")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbS",4,0,1],
f6:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$isr"),"$isbF")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ah(new V.W(y.a,y.b).l(0,2).B(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ah(new V.W(x.a,x.b).l(0,2).B(0,z.ga5()))
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
this.b.sR(0)
this.c.sR(0)
y=y.I(0,a.z)
this.dx=this.ah(new V.W(y.a,y.b).l(0,2).B(0,z.ga5()))}this.ad()},"$1","gbT",4,0,1],
f7:[function(a){var z,y,x
H.c(a,"$isr")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sR(-y*10*z)
this.ad()}},"$1","gbU",4,0,1],
ix:[function(a){if(H.i(H.c(a,"$isr"),"$isei").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf2",4,0,1],
iy:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$isr"),"$isbF")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ah(new V.W(x.a,x.b).l(0,2).B(0,z.ga5()))
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
this.b.sR(0)
this.c.sR(0)
y=y.I(0,a.z)
this.dx=this.ah(new V.W(y.a,y.b).l(0,2).B(0,z.ga5()))
this.ad()},"$1","gf3",4,0,1],
j2:[function(a){H.c(a,"$isr")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfX",4,0,1],
j1:[function(a){var z,y,x,w,v,u,t
a=H.i(H.c(a,"$isr"),"$iseJ")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ah(new V.W(y.a,y.b).l(0,2).B(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ah(new V.W(x.a,x.b).l(0,2).B(0,z.ga5()))
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
this.b.sR(0)
this.c.sR(0)
y=y.I(0,a.z)
this.dx=this.ah(new V.W(y.a,y.b).l(0,2).B(0,z.ga5()))}this.ad()},"$1","gfW",4,0,1],
j0:[function(a){var z,y,x
H.c(a,"$isr")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sR(-y*10*z)
this.ad()}},"$1","gfV",4,0,1],
aR:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.ag(0,x)
this.b.ag(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aG(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aG(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isab:1},jX:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.N()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.D(a)},
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.N()
z.e=y
z=y}else z=y
y=H.f(this.gf8(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.N()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iz:[function(a){var z,y,x,w
H.c(a,"$isr")
if(!J.R(this.b,this.a.b.c))return
H.i(a,"$isd5")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.z])
z.b=!0
this.P(z)}},"$1","gf8",4,0,1],
aR:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aG(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isab:1}}],["","",,M,{"^":"",hz:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aS:[function(a){var z
H.c(a,"$isr")
z=this.x
if(!(z==null))z.D(a)},function(){return this.aS(null)},"is","$1","$0","gaC",0,2,0],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gfg",8,0,9],
iH:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b6()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.f(x,w)
C.a.Z(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gfh",8,0,9],
gu:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
aw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ed(this.c)
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
if(typeof x!=="number")return H.o(x)
u=C.i.af(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.i.af(v.b*w)
s=C.i.af(v.c*x)
a.c=s
v=C.i.af(v.d*w)
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
s=a.cy
r=z.b
q=z.c
p=z.d
o=p-q
n=1/Math.tan(r*0.5)
s.ec(V.aG(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.er
if(y==null){y=V.em(new V.av(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.er=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.l(0,m)}a.db.ec(m)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.E();)z.d.ag(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.E();)z.d.aw(a)
this.a.toString
a.cy.cv()
a.db.cv()
this.b.toString
a.ea()},
$isns:1}}],["","",,A,{"^":"",dJ:{"^":"b;a,b,c"},h7:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hw:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ds:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e7:{"^":"db;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},ek:{"^":"db;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aN,0at,0aO,0bn,0du,0dv,0bo,0bp,0dw,0dz,0bq,0br,0dA,0dB,0bs,0dC,0dD,0bt,0dE,0dF,0bu,0bv,0bw,0dG,0dH,0bx,0by,0dI,0dJ,0bz,0dK,0ce,0dL,0cf,0dM,0cg,0dN,0ci,0dO,0cj,0dP,0ck,a,b,0c,0d,0e,0f,0r",
eA:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.an("")
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
a1.h1(z)
a1.h8(z)
a1.h2(z)
a1.hg(z)
a1.hh(z)
a1.ha(z)
a1.hl(z)
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
z=new P.an("")
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
v.h5(z)
v.h0(z)
v.h3(z)
v.h6(z)
v.he(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hc(z)
v.hd(z)}v.h9(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.h:r+="   return alpha;\n"
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
p=H.d([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h4(z)
v.hb(z)
v.hf(z)
v.hi(z)
v.hj(z)
v.hk(z)
v.h7(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.w(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.e_(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.i(this.r.n(0,"invViewMat"),"$isao")
if(y)this.db=H.i(this.r.n(0,"objMat"),"$isao")
if(w)this.dx=H.i(this.r.n(0,"viewObjMat"),"$isao")
this.fr=H.i(this.r.n(0,"projViewObjMat"),"$isao")
if(a1.x2)this.go=H.i(this.r.n(0,"txt2DMat"),"$isdj")
if(a1.y1)this.id=H.i(this.r.n(0,"txtCubeMat"),"$isao")
if(a1.y2)this.k1=H.i(this.r.n(0,"colorMat"),"$isao")
this.k3=H.d([],[A.ao])
y=a1.aN
if(y>0){this.k2=H.c(this.r.n(0,"bendMatCount"),"$isO")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isao"))}}y=a1.a
if(y!==C.c){this.k4=H.i(this.r.n(0,"emissionClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.r1=H.i(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isO")
break
case C.e:this.r2=H.i(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.i(this.r.n(0,"nullEmissionTxt"),"$isO")
break}}y=a1.b
if(y!==C.c){this.ry=H.i(this.r.n(0,"ambientClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.x1=H.i(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isO")
break
case C.e:this.x2=H.i(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.i(this.r.n(0,"nullAmbientTxt"),"$isO")
break}}y=a1.c
if(y!==C.c){this.y2=H.i(this.r.n(0,"diffuseClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.aN=H.i(this.r.n(0,"diffuseTxt"),"$isap")
this.aO=H.i(this.r.n(0,"nullDiffuseTxt"),"$isO")
break
case C.e:this.at=H.i(this.r.n(0,"diffuseTxt"),"$isaq")
this.aO=H.i(this.r.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a1.d
if(y!==C.c){this.bn=H.i(this.r.n(0,"invDiffuseClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.du=H.i(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bo=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.e:this.dv=H.i(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.bo=H.i(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a1.e
if(y!==C.c){this.br=H.i(this.r.n(0,"shininess"),"$isY")
this.bp=H.i(this.r.n(0,"specularClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.dw=H.i(this.r.n(0,"specularTxt"),"$isap")
this.bq=H.i(this.r.n(0,"nullSpecularTxt"),"$isO")
break
case C.e:this.dz=H.i(this.r.n(0,"specularTxt"),"$isaq")
this.bq=H.i(this.r.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.d:this.dA=H.i(this.r.n(0,"bumpTxt"),"$isap")
this.bs=H.i(this.r.n(0,"nullBumpTxt"),"$isO")
break
case C.e:this.dB=H.i(this.r.n(0,"bumpTxt"),"$isaq")
this.bs=H.i(this.r.n(0,"nullBumpTxt"),"$isO")
break}if(a1.dy){this.dC=H.i(this.r.n(0,"envSampler"),"$isaq")
this.dD=H.i(this.r.n(0,"nullEnvTxt"),"$isO")
y=a1.r
if(y!==C.c){this.bt=H.i(this.r.n(0,"reflectClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.dE=H.i(this.r.n(0,"reflectTxt"),"$isap")
this.bu=H.i(this.r.n(0,"nullReflectTxt"),"$isO")
break
case C.e:this.dF=H.i(this.r.n(0,"reflectTxt"),"$isaq")
this.bu=H.i(this.r.n(0,"nullReflectTxt"),"$isO")
break}}y=a1.x
if(y!==C.c){this.bv=H.i(this.r.n(0,"refraction"),"$isY")
this.bw=H.i(this.r.n(0,"refractClr"),"$isH")
switch(y){case C.c:break
case C.h:break
case C.d:this.dG=H.i(this.r.n(0,"refractTxt"),"$isap")
this.bx=H.i(this.r.n(0,"nullRefractTxt"),"$isO")
break
case C.e:this.dH=H.i(this.r.n(0,"refractTxt"),"$isaq")
this.bx=H.i(this.r.n(0,"nullRefractTxt"),"$isO")
break}}}y=a1.y
if(y!==C.c){this.by=H.i(this.r.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.h:break
case C.d:this.dI=H.i(this.r.n(0,"alphaTxt"),"$isap")
this.bz=H.i(this.r.n(0,"nullAlphaTxt"),"$isO")
break
case C.e:this.dJ=H.i(this.r.n(0,"alphaTxt"),"$isaq")
this.bz=H.i(this.r.n(0,"nullAlphaTxt"),"$isO")
break}}this.ce=H.d([],[A.eW])
this.cf=H.d([],[A.eX])
this.cg=H.d([],[A.eY])
this.ci=H.d([],[A.eZ])
this.cj=H.d([],[A.f_])
this.ck=H.d([],[A.f0])
if(a1.k2){y=a1.z
if(y>0){this.dK=H.c(this.r.n(0,"dirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.ce;(x&&C.a).h(x,new A.eW(m,l,k))}}y=a1.Q
if(y>0){this.dL=H.c(this.r.n(0,"pntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isY")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isY")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isY")
x=this.cf;(x&&C.a).h(x,new A.eX(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dM=H.c(this.r.n(0,"spotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isY")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isY")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isY")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isY")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isY")
x=this.cg;(x&&C.a).h(x,new A.eY(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dN=H.c(this.r.n(0,"txtDirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isH")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isO")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isap")
x=this.ci;(x&&C.a).h(x,new A.eZ(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dO=H.c(this.r.n(0,"txtPntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isdj")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isO")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isY")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isY")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isY")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isaq")
x=this.cj;(x&&C.a).h(x,new A.f_(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dP=H.c(this.r.n(0,"txtSpotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isH")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isH")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isH")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isH")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isH")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isO")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isH")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isY")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isY")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isY")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isY")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isY")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isap")
x=this.ck;(x&&C.a).h(x,new A.f0(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ae:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.es(c)
b.a.uniform1i(b.d,0)}},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ii:function(a,b){var z,y
z=a.at
y=new A.ek(b,z)
y.cN(b,z)
y.eA(a,b)
return y}}},il:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aN,at,aO",
h1:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aN+"];\n"
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
h8:function(a){var z
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
h2:function(a){var z
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
hg:function(a){var z,y
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
hh:function(a){var z,y
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
ha:function(a){var z
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
hl:function(a){var z
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
am:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h5:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.am(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
h0:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.am(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
h3:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
h6:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
he:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.am(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
h9:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.h:z+="   return normalize(normalVec);\n"
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
hc:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.am(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
hd:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.am(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
h4:function(a){var z,y
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
hb:function(a){var z,y
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
hf:function(a){var z,y
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
hi:function(a){var z,y,x
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
hj:function(a){var z,y,x
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
hk:function(a){var z,y,x
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
h7:function(a){var z
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
i:function(a){return this.at}},eW:{"^":"b;a,b,c"},eZ:{"^":"b;a,b,c,d,e,f,r,x"},eX:{"^":"b;a,b,c,d,e,f,r"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eY:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f0:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},db:{"^":"cM;",
cN:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
e_:function(a,b,c){var z,y,x
this.c=this.d1(b,35633)
this.d=this.d1(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fL(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.t("Failed to link shader: "+H.l(x)))}this.fQ()
this.fS()},
aq:function(a){a.a.useProgram(this.e)
this.f.hw()},
d1:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fQ:function(){var z,y,x,w,v,u
z=H.d([],[A.dJ])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dJ(y,v.name,u))}this.f=new A.h7(z)},
fS:function(){var z,y,x,w,v,u
z=H.d([],[A.ad])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hs(v.type,v.size,v.name,u))}this.r=new A.jG(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.di(z,y,b,a,c)},
eW:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.di(z,y,b,a,c)},
eX:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.di(z,y,b,a,c)},
bj:function(a,b){return new P.fe(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hs:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.Y(this.a,this.e,c,d)
case 35664:return new A.jB(this.a,this.e,c,d)
case 35665:return new A.H(this.a,this.e,c,d)
case 35666:return new A.jE(this.a,this.e,c,d)
case 35667:return new A.jC(this.a,this.e,c,d)
case 35668:return new A.jD(this.a,this.e,c,d)
case 35669:return new A.jF(this.a,this.e,c,d)
case 35674:return new A.jI(this.a,this.e,c,d)
case 35675:return new A.dj(this.a,this.e,c,d)
case 35676:return new A.ao(this.a,this.e,c,d)
case 35678:return this.eW(b,c,d)
case 35680:return this.eX(b,c,d)
case 35670:throw H.a(this.bj("BOOL",c))
case 35671:throw H.a(this.bj("BOOL_VEC2",c))
case 35672:throw H.a(this.bj("BOOL_VEC3",c))
case 35673:throw H.a(this.bj("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ce:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},jG:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hC:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hC("\n")}},O:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jC:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jD:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jF:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jA:{"^":"ad;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
di:function(a,b,c,d,e){var z=new A.jA(a,b,c,e)
z.f=d
z.e=P.i8(d,0,!1,P.m)
return z}}},Y:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jB:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},H:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jE:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jI:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dj:{"^":"ad;a,b,c,d",
a3:function(a){var z=new Float32Array(H.bp(H.w(a,"$ise",[P.z],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},ao:{"^":"ad;a,b,c,d",
a3:function(a){var z=new Float32Array(H.bp(H.w(a,"$ise",[P.z],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ap:{"^":"ad;a,b,c,d",
es:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aq:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
cB:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bQ:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.G(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.G(t+h,s+f,r+g)
z.b=q
p=new V.G(t-h,s-f,r-g)
z.c=p
o=new V.G(y-h,w-f,v-g)
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
j=F.mI(d,e,new F.m_(z,F.cB(z.c),F.cB(z.d),k,l,c),b)
if(j!=null)a.hP(j)},
mI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.a0,P.z,P.z]})
if(a<1)return
if(b<1)return
z=F.bJ()
y=H.d([],[F.a0])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cw(null,null,new V.aE(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ca(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cw(null,null,new V.aE(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ca(d))}}z.d.hn(a+1,b+1,y)
return z},
m_:{"^":"n:42;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cp(z.b,b).cp(z.d.cp(z.c,b),c)
z=new V.av(y.a,y.b,y.c)
if(!J.R(a.f,z)){a.f=z
z=a.a
if(z!=null)z.X()}a.sij(y.B(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
x=new V.es(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.R(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.X()}}},
ai:{"^":"b;0a,0b,0c,0d,0e",
gcd:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.e1())return
return v.B(0,Math.sqrt(v.G(v)))},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.G(z)))
z=w.I(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.b_(z.B(0,Math.sqrt(z.G(z))))
return z.B(0,Math.sqrt(z.G(z)))},
c7:function(){if(this.d!=null)return!0
var z=this.eO()
if(z==null){z=this.eT()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
eN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.A(0,y)
if(x!=null)v=v.A(0,x)
if(w!=null)v=v.A(0,w)
if(v.e1())return
return v.B(0,Math.sqrt(v.G(v)))},
eS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.I(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.av(z.a*l,z.b*l,z.c*l).A(0,u).I(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.G(z)))
z=k.b_(m)
z=z.B(0,Math.sqrt(z.G(z))).b_(k)
m=z.B(0,Math.sqrt(z.G(z)))}return m},
c6:function(){if(this.e!=null)return!0
var z=this.eN()
if(z==null){z=this.eS()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var z,y
if(this.gcd())return a+"disposed"
z=a+C.b.ac(J.a9(this.a.e),0)+", "+C.b.ac(J.a9(this.b.e),0)+", "+C.b.ac(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.v("")},
p:{
c0:function(a,b,c){var z,y,x
z=new F.ai()
y=a.a
if(y==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.t("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
b_:{"^":"b;0a,0b",
gcd:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){if(this.gcd())return a+"disposed"
return a+C.b.ac(J.a9(this.a.e),0)+", "+C.b.ac(J.a9(this.b.e),0)},
J:function(){return this.v("")}},
d9:{"^":"b;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ac(J.a9(z.e),0)},
J:function(){return this.v("")},
p:{
iB:function(a){var z=new F.d9()
if(a.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.X()
return z}}},
ac:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
hP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.N()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.aJ())}this.a.N()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.N()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.iB(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.N()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.N()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.b_()
s=p.a
if(s==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.t("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.D(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.N()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.N()
t=t.e
if(typeof t!=="number")return t.A()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.N()
s=s.e
if(typeof s!=="number")return s.A()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.c0(p,o,l)}z=this.e
if(!(z==null))z.ax(0)},
as:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.as()||!1
if(!this.a.as())y=!1
z=this.e
if(!(z==null))z.ax(0)
return y},
aH:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aH()||!1
if(!this.a.aH())y=!1
z=this.e
if(!(z==null))z.ax(0)
return y},
bl:function(){var z=this.e
if(!(z==null))++z.c
this.a.bl()
z=this.e
if(!(z==null))z.ax(0)
return!0},
dn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aA()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gcL(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.z
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dN])
for(r=0,q=0;q<w;++q){p=b.ho(q)
o=p.gcL(p)
C.a.m(s,q,new Z.dN(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hK(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bp(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cd(new Z.fa(34962,j),s,b)
i.b=H.d([],[Z.ci])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ci(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.N()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ci(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.N()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.N()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ci(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
a6:function(a){var z=this.e
if(!(z==null))z.D(a)},
X:function(){return this.a6(null)},
$isdc:1,
p:{
bJ:function(){var z,y
z=new F.ac()
y=new F.k5(z)
y.b=!1
y.c=H.d([],[F.a0])
z.a=y
y=new F.j4(z)
y.b=H.d([],[F.d9])
z.b=y
y=new F.j3(z)
y.b=H.d([],[F.b_])
z.c=y
y=new F.j2(z)
y.b=H.d([],[F.ai])
z.d=y
z.e=null
return z}}},
dc:{"^":"cS;"},
j2:{"^":"b;a,0b",
hn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$ise",[F.a0],"$ase")
z=H.d([],[F.ai])
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
C.a.h(z,F.c0(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c0(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c0(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c0(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
as:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c7())x=!1
return x},
aH:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c6())x=!1
return x},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
J:function(){return this.v("")}},
j3:{"^":"b;a,0b",
ap:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.b_()
if(b==null)H.p(P.t("May not create a line with a null start vertex."))
if(c==null)H.p(P.t("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.p(P.t("May not create a line with vertices attached to different shapes."))
z.a=b
C.a.h(b.c.b,z)
z.b=c
C.a.h(c.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.X()
return z},
gk:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.d([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
J:function(){return this.v("")}},
j4:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
J:function(){return this.v("")}},
a0:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ca:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cw(this.cx,x,u,z,y,w,v,a,t)},
aJ:function(){return this.ca(null)},
se3:function(a){var z
a=a.B(0,Math.sqrt(a.G(a)))
if(!J.R(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
sar:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.G(a)))
if(!J.R(this.x,a)){this.x=a
z=this.a
if(z!=null)z.X()}},
sij:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sa_:function(a,b){var z
if(!J.R(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.X()}},
hK:function(a){var z,y
z=J.J(a)
if(z.t(a,$.$get$aA())){z=this.f
y=[P.z]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$az())){z=this.r
y=[P.z]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ay())){z=this.x
y=[P.z]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aT())){z=this.y
y=[P.z]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.t(a,$.$get$aU())){z=this.z
y=[P.z]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$b2())){z=this.Q
y=[P.z]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bL())){z=this.Q
y=[P.z]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bn()))return H.d([this.ch],[P.z])
else if(z.t(a,$.$get$aS())){z=this.cx
y=[P.z]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.z])},
c7:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.C(0,new F.kc(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ax(0)}return!0},
c6:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.C(0,new F.kb(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ax(0)}return!0},
dR:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.b
x.a.a.N()
x=x.e
a.a.a.N()
v=a.e
if(x==null?v==null:x===v)return w}return},
hz:function(a){var z=this.dR(a)
if(z!=null)return z
return a.dR(this)},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var z,y,x
z=H.d([],[P.j])
C.a.h(z,C.b.ac(J.a9(this.e),0))
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.w(z,", ")
return a+"{"+x+"}"},
J:function(){return this.v("")},
p:{
cw:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.a0()
y=new F.ka(z)
y.b=H.d([],[F.d9])
z.b=y
y=new F.k9(z)
x=[F.b_]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.k6(z)
x=[F.ai]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$f7()
z.e=0
y=$.$get$aA()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$az().a)!==0?e:null
z.x=(x&$.$get$ay().a)!==0?b:null
z.y=(x&$.$get$aT().a)!==0?f:null
z.z=(x&$.$get$aU().a)!==0?g:null
z.Q=(x&$.$get$f8().a)!==0?c:null
z.ch=(x&$.$get$bn().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
kc:{"^":"n:5;a",
$1:function(a){var z,y
H.c(a,"$isai")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
kb:{"^":"n:5;a",
$1:function(a){var z,y
H.c(a,"$isai")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.A(0,z)}}},
k5:{"^":"b;a,0b,0c",
N:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
dj:function(a,b,c){var z=F.cw(null,null,null,new V.av(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gk:function(a){return this.c.length},
as:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c7()
return!0},
aH:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c6()
return!0},
bl:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
this.N()
z=H.d([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
J:function(){return this.v("")}},
k6:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
C:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ai]})
C.a.C(this.b,b)
C.a.C(this.c,new F.k7(this,b))
C.a.C(this.d,new F.k8(this,b))},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
J:function(){return this.v("")}},
k7:{"^":"n:5;a,b",
$1:function(a){H.c(a,"$isai")
if(!J.R(a.a,this.a))this.b.$1(a)}},
k8:{"^":"n:5;a,b",
$1:function(a){var z
H.c(a,"$isai")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
k9:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
J:function(){return this.v("")}},
ka:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.d([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
J:function(){return this.v("")}}}],["","",,O,{"^":"",hI:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gu:function(){var z=this.rx
if(z==null){z=D.N()
this.rx=z}return z},
S:function(a){var z=this.rx
if(!(z==null))z.D(a)},
ag:function(a,b){},
ee:function(a,b){var z,y,x,w
if(this.a==null){z=H.c(a.fr.j(0,"Inspection"),"$ise7")
if(z==null){y=a.a
z=new A.e7(y,"Inspection")
z.cN(y,"Inspection")
z.e_(0,$.hN,$.hL)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"normAttr")
z.z=z.f.j(0,"clrAttr")
z.Q=z.f.j(0,"binmAttr")
z.ch=H.i(z.r.j(0,"lightVec"),"$isH")
z.cx=H.i(z.r.j(0,"ambientClr"),"$isH")
z.cy=H.i(z.r.j(0,"diffuseClr"),"$isH")
z.db=H.i(z.r.j(0,"weightScalar"),"$isY")
z.dx=H.i(z.r.j(0,"viewMat"),"$isao")
z.dy=H.i(z.r.j(0,"viewObjMatrix"),"$isao")
z.fr=H.i(z.r.j(0,"projViewObjMatrix"),"$isao")
a.dl(z)}this.a=z}if(b.e==null){b.d.as()
b.d.aH()
b.d.bl()
y=new Z.dO()
y.a=new H.aP(0,0,[P.j,Z.cd])
b.e=y}y=this.a
y.aq(a)
x=this.r2
w=y.db
w.a.uniform1f(w.d,x)
x=this.b
w=y.ch
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.gW(x)
w=y.dx
w.toString
w.a3(x.a2(0,!0))
x=a.gem()
w=y.dy
w.toString
w.a3(x.a2(0,!0))
x=a.geb()
y=y.fr
y.toString
y.a3(x.a2(0,!0))
y=b.e
if(y instanceof Z.dO){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
if(this.k3)this.fG(a,y,b.d,"Axis",H.f(this.gcS(),{func:1,ret:F.ac,args:[F.dc]}),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}else{w.enable(2929)
a.a.disable(3042)
a.a.disable(2929)
a.a.enable(3042)
if(this.ch)this.bh(a,y,b.c,"wireFrame",this.gfZ(),this.f,this.e)
if(this.cy)this.bh(a,y,b.c,"normals",this.gf9(),this.f,this.e)
if(this.db)this.bh(a,y,b.c,"binormals",this.geQ(),this.f,this.e)
if(this.k3)this.bh(a,y,b.c,"Axis",this.gcS(),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.ds()},
bh:function(a,b,c,d,e,f,g){var z,y,x
H.f(e,{func:1,ret:F.ac,args:[F.ac]})
z=b.a.j(0,d)
if(z==null){z=this.cT(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.e8(a)},
fG:function(a,b,c,d,e,f,g){var z,y,x
H.f(e,{func:1,ret:F.ac,args:[F.dc]})
z=b.a.j(0,d)
if(z==null){z=this.cT(a,e.$1(c))
b.a.m(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.e8(a)},
cT:function(a,b){var z,y,x,w
H.c(b,"$isac")
z=a.a
y=$.$get$aA()
x=$.$get$az()
w=b.dn(new Z.fb(z),new Z.b1(y.a|x.a|$.$get$ay().a|$.$get$b2().a))
w.aa($.$get$aA()).e=this.a.x.c
w.aa($.$get$az()).e=this.a.y.c
w.aa($.$get$b2()).e=this.a.z.c
w.aa($.$get$ay()).e=this.a.Q.c
return w},
h_:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.bJ()
z.a=new V.aE(0,0.7,1,1)
x=a.a
x.toString
z=H.f(new O.hP(z,y),{func:1,ret:-1,args:[F.a0]})
C.a.C(x.c,z)
z=new O.hO(y)
x=a.c
x.toString
w=H.f(new O.hQ(y,z),{func:1,ret:-1,args:[F.b_]})
C.a.C(x.b,w)
w=a.d
w.toString
z=H.f(new O.hR(y,z),{func:1,ret:-1,args:[F.ai]})
C.a.C(w.b,z)
return y},function(a){return this.h_(a,null)},"j3","$2$color","$1","gfZ",4,3,44],
iA:[function(a){var z,y,x
z=F.bJ()
y=a.a
y.toString
x=H.f(new O.hM(new V.aE(1,1,0.3,1),z),{func:1,ret:-1,args:[F.a0]})
C.a.C(y.c,x)
return z},"$1","gf9",4,0,11],
iv:[function(a){var z,y,x
z=F.bJ()
y=a.a
y.toString
x=H.f(new O.hK(new V.aE(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.a0]})
C.a.C(y.c,x)
return z},"$1","geQ",4,0,11],
iu:[function(a){return this.eP(a)},"$1","gcS",4,0,11],
eP:function(a){var z,y
z=F.bJ()
y=new O.hJ(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z}},hP:{"^":"n:10;a,b",
$1:function(a){var z,y
H.c(a,"$isa0")
z=this.b.a
y=a.aJ()
y.sa_(0,this.a.a)
y.sar(new V.G(0,0,0))
z.h(0,y)}},hO:{"^":"n:47;a",
$2:function(a,b){if(a.hz(b)==null)this.a.c.ap(0,a,b)}},hQ:{"^":"n:48;a,b",
$1:function(a){var z,y,x,w
H.c(a,"$isb_")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.h(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.N()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.h(z,x)
this.b.$2(w,z[x])}},hR:{"^":"n:5;a,b",
$1:function(a){var z,y,x,w,v,u
H.c(a,"$isai")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.h(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.N()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.h(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.N()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.h(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},hM:{"^":"n:10;a,b",
$1:function(a){var z,y,x
z=H.c(a,"$isa0").aJ()
z.sa_(0,this.a)
z.sar(new V.G(0,0,0))
y=z.aJ()
y.sar(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ap(0,z,y)}},hK:{"^":"n:10;a,b",
$1:function(a){var z,y,x
H.c(a,"$isa0")
z=a.aJ()
z.sa_(0,this.a)
z.sar(new V.G(0,0,0))
y=z.aJ()
y.sar(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.ap(0,z,y)}},hJ:{"^":"n;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.aE(z,y,x,1)
z=this.a
v=z.a.dj(0,0,0)
v.sar(new V.G(0,0,0))
v.se3(new V.G(1,0,0))
v.sa_(0,w)
u=z.a.dj(a,b,c)
u.sar(new V.G(0,0,0))
u.se3(new V.G(1,0,0))
u.sa_(0,w)
z.c.ap(0,v,u)}},ih:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.N()
this.dy=z}return z},
S:[function(a){var z
H.c(a,"$isr")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.S(null)},"ff","$1","$0","gbg",0,2,0],
fK:[function(a){H.c(a,"$isr")
this.a=null
this.S(a)},function(){return this.fK(null)},"j_","$1","$0","gfJ",0,2,0],
iD:[function(a,b){var z=V.aF
z=new D.cj(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.S(z)},"$2","gfc",8,0,20],
iE:[function(a,b){var z=V.aF
z=new D.ck(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.S(z)},"$2","gfd",8,0,20],
cZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aA()
if(c){z=$.$get$az()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$ay()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aT()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aU()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aS()
a6=new Z.b1(a6.a|z.a)}return new A.il(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$ise",[T.df],"$ase")
if(b!=null)if(!C.a.aY(a,b)){b.a=a.length
C.a.h(a,b)}},
ag:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cD(x)}}},
ee:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cZ()
y=H.c(a.fr.j(0,z.at),"$isek")
if(y==null){y=A.ii(z,a.a)
a.dl(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aO
z=b.e
if(!(z instanceof Z.cd)){b.e=null
z=null}if(z==null||!z.d.t(0,w)){z=x.r1
if(z)b.d.as()
v=x.r2
if(v)b.d.aH()
u=x.ry
if(u)b.d.bl()
t=b.d.dn(new Z.fb(a.a),w)
t.aa($.$get$aA()).e=this.a.y.c
if(z)t.aa($.$get$az()).e=this.a.Q.c
if(v)t.aa($.$get$ay()).e=this.a.z.c
if(x.rx)t.aa($.$get$aT()).e=this.a.ch.c
if(u)t.aa($.$get$aU()).e=this.a.cx.c
if(x.x1)t.aa($.$get$aS()).e=this.a.cy.c
b.e=t}z=T.df
s=H.d([],[z])
this.a.aq(a)
if(x.fx){v=this.a
u=a.dx
u=u.gW(u)
v=v.db
v.toString
v.a3(u.a2(0,!0))}if(x.fy){v=this.a
u=a.gem()
v=v.dx
v.toString
v.a3(u.a2(0,!0))}v=this.a
u=a.geb()
v=v.fr
v.toString
v.a3(u.a2(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a3(u.a2(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a3(u.a2(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a3(C.t.a2(u,!0))}if(x.aN>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.z],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.c(p,"$isaF")
u=u.k3
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.bp(H.w(p.a2(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.U(s,this.f.d)
v=this.a
u=this.f.d
v.ae(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.U(s,this.f.e)
v=this.a
u=this.f.e
v.a9(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.U(s,this.r.d)
v=this.a
u=this.r.d
v.ae(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.U(s,this.r.e)
v=this.a
u=this.r.e
v.a9(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.U(s,this.x.d)
v=this.a
u=this.x.d
v.ae(v.aN,v.aO,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.U(s,this.x.e)
v=this.a
u=this.x.e
v.a9(v.at,v.aO,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bn
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.d:this.U(s,this.y.d)
v=this.a
u=this.y.d
v.ae(v.du,v.bo,u)
u=this.a
v=this.y.f
u=u.bn
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.e:this.U(s,this.y.e)
v=this.a
u=this.y.e
v.a9(v.dv,v.bo,u)
u=this.a
v=this.y.f
u=u.bn
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bp
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.br
u.a.uniform1f(u.d,n)
break
case C.d:this.U(s,this.z.d)
v=this.a
u=this.z.d
v.ae(v.dw,v.bq,u)
u=this.a
v=this.z.f
u=u.bp
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.br
v.a.uniform1f(v.d,n)
break
case C.e:this.U(s,this.z.e)
v=this.a
u=this.z.e
v.a9(v.dz,v.bq,u)
u=this.a
v=this.z.f
u=u.bp
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.br
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dK
v.a.uniform1i(v.d,r)
v=a.db
m=v.gW(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.ce
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cD(j.a)
n=p.a
h=p.b
g=p.c
g=p.B(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dL
v.a.uniform1i(v.d,r)
v=a.db
m=v.gW(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.cf
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb4(j)
n=i.b
h=p.gcG(p)
g=p.gcH(p)
p=p.gcI(p)
n.a.uniform3f(n.d,h,g,p)
p=m.ba(j.gb4(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.ga_(j)
g=i.d
h=p.gbB()
n=p.gbb()
p=p.gbk()
g.a.uniform3f(g.d,h,n,p)
p=j.gc1()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gc2()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gc3()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dM
v.a.uniform1i(v.d,r)
v=a.db
m=v.gW(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.cg
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb4(j)
n=i.b
h=p.gcG(p)
g=p.gcH(p)
p=p.gcI(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcc(j).j8()
g=i.c
h=p.gaK(p)
n=p.gaL(p)
p=p.gaM()
g.a.uniform3f(g.d,h,n,p)
p=m.ba(j.gb4(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.ga_(j)
n=i.e
h=p.gbB()
g=p.gbb()
p=p.gbk()
n.a.uniform3f(n.d,h,g,p)
p=j.gj5()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gj4()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gc1()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gc2()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.dN
v.a.uniform1i(v.d,r)
v=a.db
m=v.gW(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
n=this.a.ci
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gb6()
H.w(s,"$ise",p,"$ase")
if(!C.a.aY(s,n)){n.sbf(s.length)
C.a.h(s,n)}n=j.gcc(j)
h=i.d
g=n.gaK(n)
f=n.gaL(n)
n=n.gaM()
h.a.uniform3f(h.d,g,f,n)
n=j.gbC()
f=i.b
g=n.gaK(n)
h=n.gaL(n)
n=n.gaM()
f.a.uniform3f(f.d,g,h,n)
n=j.gb5(j)
h=i.c
g=n.gaK(n)
f=n.gaL(n)
n=n.gaM()
h.a.uniform3f(h.d,g,f,n)
n=m.cD(j.gcc(j))
f=n.a
g=n.b
h=n.c
h=n.B(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.ga_(j)
g=i.f
f=h.gbB()
n=h.gbb()
h=h.gbk()
g.a.uniform3f(g.d,f,n,h)
h=j.gb6()
n=h.gcq(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gf1()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gbf())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dO
v.a.uniform1i(v.d,r)
v=a.db
m=v.gW(v)
for(v=this.dx.y,u=v.length,p=[P.z],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
h=this.a.cj
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gb6()
H.w(s,"$ise",n,"$ase")
if(!C.a.aY(s,h)){h.sbf(s.length)
C.a.h(s,h)}e=m.l(0,j.gW(j))
h=j.gW(j).ba(new V.av(0,0,0))
g=i.b
f=h.gcG(h)
d=h.gcH(h)
h=h.gcI(h)
g.a.uniform3f(g.d,f,d,h)
h=e.ba(new V.av(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.e0(0)
d=i.d
o=new Float32Array(H.bp(H.w(new V.el(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a2(0,!0),"$ise",p,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.ga_(j)
h=i.e
f=d.gbB()
g=d.gbb()
d=d.gbk()
h.a.uniform3f(h.d,f,g,d)
d=j.gb6()
h=d.gcq(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcq(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gj6(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc1()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc2()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc3()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.dP
v.a.uniform1i(v.d,r)
v=a.db
m=v.gW(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
p=this.a.ck
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb6()
H.w(s,"$ise",z,"$ase")
if(!C.a.aY(s,p)){p.sbf(s.length)
C.a.h(s,p)}p=j.gb4(j)
n=i.b
h=p.gcG(p)
g=p.gcH(p)
p=p.gcI(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcc(j)
g=i.c
h=p.gaK(p)
n=p.gaL(p)
p=p.gaM()
g.a.uniform3f(g.d,h,n,p)
p=j.gbC()
n=i.d
h=p.gaK(p)
g=p.gaL(p)
p=p.gaM()
n.a.uniform3f(n.d,h,g,p)
p=j.gb5(j)
g=i.e
h=p.gaK(p)
n=p.gaL(p)
p=p.gaM()
g.a.uniform3f(g.d,h,n,p)
p=m.ba(j.gb4(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gb6()
n=p.gcq(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gf1()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gbf())
p=i.x
p.a.uniform1i(p.d,0)}p=j.ga_(j)
n=i.y
h=p.gbB()
g=p.gbb()
p=p.gbk()
n.a.uniform3f(n.d,h,g,p)
p=j.gjf()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gjg()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gc1()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gc2()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.d:this.U(s,this.Q.d)
z=this.a
v=this.Q.d
z.ae(z.dA,z.bs,v)
break
case C.e:this.U(s,this.Q.e)
z=this.a
v=this.Q.e
z.a9(z.dB,z.bs,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gW(v).e0(0)
a.Q=v}z=z.fy
z.toString
z.a3(v.a2(0,!0))}if(x.dy){this.U(s,this.ch)
z=this.a
v=this.ch
z.a9(z.dC,z.dD,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bt
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.d:this.U(s,this.cx.d)
z=this.a
v=this.cx.d
z.ae(z.dE,z.bu,v)
v=this.a
z=this.cx.f
v=v.bt
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.e:this.U(s,this.cx.e)
z=this.a
v=this.cx.e
z.a9(z.dF,z.bu,v)
v=this.a
z=this.cx.f
v=v.bt
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bw
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bv
v.a.uniform1f(v.d,p)
break
case C.d:this.U(s,this.cy.d)
z=this.a
v=this.cy.d
z.ae(z.dG,z.bx,v)
v=this.a
z=this.cy.f
v=v.bw
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,p)
break
case C.e:this.U(s,this.cy.e)
z=this.a
v=this.cy.e
z.a9(z.dH,z.bx,v)
v=this.a
z=this.cy.f
v=v.bw
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.by
z.a.uniform1f(z.d,u)
break
case C.d:this.U(s,this.db.d)
z=this.a
u=this.db.d
z.ae(z.dI,z.bz,u)
u=this.a
z=this.db.f
u=u.by
u.a.uniform1f(u.d,z)
break
case C.e:this.U(s,this.db.e)
z=this.a
u=this.db.e
z.a9(z.dJ,z.bz,u)
u=this.a
z=this.db.f
u=u.by
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.i(b.e,"$iscd")
z.aq(a)
z.aw(a)
z.ej(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.ds()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cZ().at}},ij:{"^":"d3;0f,a,b,0c,0d,0e"},d3:{"^":"b;",
S:[function(a){this.a.S(H.c(a,"$isr"))},function(){return this.S(null)},"ff","$1","$0","gbg",0,2,0],
aV:["ey",function(){}],
fO:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gbg(),{func:1,ret:-1,args:[D.r]})
C.a.Z(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.gbg(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.I(this.b+".texture2D",x,this.d,this,[T.eD])
z.b=!0
this.a.S(z)}},
fP:function(a){}},ik:{"^":"d3;a,b,0c,0d,0e"},ba:{"^":"d3;0f,a,b,0c,0d,0e",
da:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.S(y)}},
aV:["bI",function(){this.ey()
this.da(new V.U(1,1,1))}],
sa_:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aV()
z=this.a
z.a=null
z.S(null)}this.da(b)}},im:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
fN:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.z])
z.b=!0
this.a.S(z)}},
aV:function(){this.bI()
this.fN(1)}},io:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bZ:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.z])
z.b=!0
this.a.S(z)}},
aV:function(){this.bI()
this.bZ(100)}},cs:{"^":"b;"}}],["","",,T,{"^":"",df:{"^":"cM;"},eD:{"^":"df;"},jl:{"^":"eD;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z}},jm:{"^":"b;a,0b,0c,0d,0e",
hN:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.e6(null,a,null)
w=new T.jl()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ae
W.a1(x,"load",H.f(new T.jn(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hM:function(a){return this.hN(a,!1,!1,!1,!1)},
fL:function(a,b,c){var z,y,x,w
b=V.dE(b,2)
z=V.dE(a.width,2)
y=V.dE(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cR(null,null)
x.width=z
x.height=y
w=H.c(C.l.eo(x,"2d"),"$isdR")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mk(w.getImageData(0,0,x.width,x.height))}}},jn:{"^":"n:18;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fL(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ih(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.hv()}++x.e}}}],["","",,V,{"^":"",h6:{"^":"b;",
b0:function(a,b){return!0},
i:function(a){return"all"},
$isc3:1},c3:{"^":"b;"},ej:{"^":"b;",
b0:["ex",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b0(0,b))return!0
return!1}],
i:["cM",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc3:1},bG:{"^":"ej;0a",
b0:function(a,b){return!this.ex(0,b)},
i:function(a){return"!["+this.cM(0)+"]"}},j0:{"^":"b;0a",
eC:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.aP(0,0,[P.m,P.a4])
for(y=new H.eg(a,a.gk(a),0,[H.aB(a,"v",0)]);y.E();)z.m(0,y.d,!0)
this.a=z},
b0:function(a,b){return this.a.bm(0,b)},
i:function(a){var z=this.a
return P.c5(z.gaj(z),0,null)},
$isc3:1,
p:{
a8:function(a){var z=new V.j0()
z.eC(a)
return z}}},ey:{"^":"b;a,b,0c,0d",
ghQ:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eK(this.a.L(0,b))
w.a=H.d([],[V.c3])
w.c=!1
C.a.h(this.c,w)
return w},
hy:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b0(0,a))return w}return},
i:function(a){return this.b}},eH:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.fY(this.b,"\n","\\n")
y=H.fY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eI:{"^":"b;a,b,0c",
i:function(a){return this.b}},jv:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ey(this,b)
z.c=H.d([],[V.eK])
this.a.m(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eI(this,a)
y=P.j
z.c=new H.aP(0,0,[y,y])
this.b.m(0,a,z)}return z},
ip:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eH])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hy(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c5(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.ghQ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c5(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eH(o==null?p.b:o,q,t)}++t}}}},eK:{"^":"ej;b,0c,0a",
i:function(a){return this.b.b+": "+this.cM(0)}}}],["","",,X,{"^":"",dQ:{"^":"b;",$isaQ:1},hG:{"^":"eB;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z}},iy:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
aT:[function(a){var z
H.c(a,"$isr")
z=this.e
if(!(z==null))z.D(a)},function(){return this.aT(null)},"it","$1","$0","gcP",0,2,0],
sb1:function(a){var z,y,x
if(!J.R(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.f(this.gcP(),{func:1,ret:-1,args:[D.r]})
C.a.Z(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.gcP(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.I("mover",x,this.a,this,[U.ab])
z.b=!0
this.aT(z)}},
$isaQ:1,
$isdQ:1},eB:{"^":"b;"}}],["","",,V,{"^":"",
mG:function(a){P.ju(C.G,new V.mH(a))},
mH:{"^":"n:51;a",
$1:function(a){H.c(a,"$isbk")
P.dF(C.i.ei(this.a.ghD(),2)+" fps")}},
j5:{"^":"b;0a,0b",
eD:function(a,b){var z,y,x,w,v,u,t
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
t=W.ae
W.a1(z,"scroll",H.f(new V.j8(x),{func:1,ret:-1,args:[t]}),!1,t)},
dk:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$ise",[P.j],"$ase")
this.fR()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ip(C.a.hI(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.fX(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
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
hm:function(a){var z,y,x,w,v,u,t
H.w(a,"$ise",[P.j],"$ase")
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
x=H.c(w.insertCell(-1),"$isde").style
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
t=H.c(w.insertCell(-1),"$isde")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fR:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jv()
y=P.j
z.a=new H.aP(0,0,[y,V.ey])
z.b=new H.aP(0,0,[y,V.eI])
z.c=z.L(0,"Start")
y=z.L(0,"Start").w(0,"Bold")
x=V.a8(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").w(0,"Bold")
x=new V.bG()
w=[V.c3]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a5("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").w(0,"BoldEnd")
x=V.a8(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").w(0,"Italic")
x=V.a8(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").w(0,"Italic")
x=new V.bG()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a5("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").w(0,"ItalicEnd")
x=V.a8(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").w(0,"Code")
x=V.a8(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").w(0,"Code")
x=new V.bG()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a5("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").w(0,"CodeEnd")
x=V.a8(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").w(0,"LinkHead")
x=V.a8(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").w(0,"LinkTail")
x=V.a8(new H.a5("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").w(0,"LinkEnd")
y=V.a8(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").w(0,"LinkHead")
y=new V.bG()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a5("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").w(0,"LinkEnd")
y=V.a8(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").w(0,"LinkTail")
y=new V.bG()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").w(0,"Other").a,new V.h6())
x=z.L(0,"Other").w(0,"Other")
y=new V.bG()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.L(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
p:{
j6:function(a,b){var z=new V.j5()
z.eD(a,!0)
return z}}},
j8:{"^":"n:18;a",
$1:function(a){P.eF(C.q,new V.j7(this.a))}},
j7:{"^":"n:2;a",
$0:function(){var z,y,x
z=C.i.af(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
ji:{"^":"b;a,b,0c,d",
ap:function(a,b,c){var z,y,x,w,v,u
z=W.e6(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.ca(this.c)
x=y.gk(y)
y=W.aa
W.a1(z,"click",H.f(new V.jk(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.ca(this.c).h(0,z)
J.ca(this.c).h(0,document.createElement("br"))
w=P.f3().gcz().j(0,H.l(this.a))
if(w==null){this.dg(x)
v=c}else{u=P.bV(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.ap(a,b,!1)},
dg:function(a){var z,y,x,w,v
z=P.f3()
y=P.j
x=P.i5(z.gcz(),y,y)
x.m(0,this.a,H.l(a))
w=z.ef(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lg([],[]).cE(""),"",v)}},
jk:{"^":"n:52;a,b,c,d",
$1:function(a){var z,y
H.c(a,"$isaa")
z=this.a
y=J.ca(z.c)
y.C(y,new V.jj())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.dg(this.d)}},
jj:{"^":"n:53;",
$1:function(a){var z
H.c(a,"$isV")
if(!!J.J(a).$iscX){z=a.style
z.border="solid 2px white"}}}}],["","",,N,{"^":"",
fT:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.j6("Test 006",!0)
y=W.cR(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.dk(H.d(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],x))
z.hm(H.d(["bumpMaps"],x))
z.dk(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.js(w,!0,!0,!0,!1)
u=F.bJ()
F.bQ(u,null,null,1,1,1,0,0,1)
F.bQ(u,null,null,1,1,0,1,0,3)
F.bQ(u,null,null,1,1,0,0,1,2)
F.bQ(u,null,null,1,1,-1,0,0,0)
F.bQ(u,null,null,1,1,0,-1,0,0)
F.bQ(u,null,null,1,1,0,0,-1,3)
u.as()
t=new O.ih()
z=O.cT(V.aF)
t.e=z
z.bd(t.gfc(),t.gfd())
z=new O.ba(t,"emission")
z.c=C.c
z.f=new V.U(0,0,0)
t.f=z
z=new O.ba(t,"ambient")
z.c=C.c
z.f=new V.U(0,0,0)
t.r=z
z=new O.ba(t,"diffuse")
z.c=C.c
z.f=new V.U(0,0,0)
t.x=z
z=new O.ba(t,"invDiffuse")
z.c=C.c
z.f=new V.U(0,0,0)
t.y=z
z=new O.io(t,"specular")
z.c=C.c
z.f=new V.U(0,0,0)
z.ch=100
t.z=z
z=new O.ik(t,"bump")
z.c=C.c
t.Q=z
t.ch=null
z=new O.ba(t,"reflect")
z.c=C.c
z.f=new V.U(0,0,0)
t.cx=z
z=new O.im(t,"refract")
z.c=C.c
z.f=new V.U(0,0,0)
z.ch=1
t.cy=z
z=new O.ij(t,"alpha")
z.c=C.c
z.f=1
t.db=z
z=new D.i_()
z.bJ(D.a3)
z.e=H.d([],[D.cf])
z.f=H.d([],[D.iA])
z.r=H.d([],[D.j9])
z.x=H.d([],[D.jo])
z.y=H.d([],[D.jp])
z.z=H.d([],[D.jq])
z.Q=null
z.ch=null
z.cK(z.gfb(),z.gfz(),z.gfB())
t.dx=z
s=z.Q
if(s==null){s=D.N()
z.Q=s
z=s}else z=s
s={func:1,ret:-1,args:[D.r]}
r=H.f(t.gfJ(),s)
C.a.h(z.a,r)
r=t.dx
z=r.ch
if(z==null){z=D.N()
r.ch=z}r=H.f(t.gbg(),s)
C.a.h(z.a,r)
t.dy=null
r=t.dx
z=U.dU(V.em(new V.av(0,0,0),new V.G(0,1,0),new V.G(0,0,-1)))
q=new V.U(1,1,1)
p=new D.cf()
p.c=new V.U(1,1,1)
p.a=new V.G(0,0,1)
o=p.b
p.b=z
z=z.gu()
z.toString
n=H.f(p.geI(),s)
C.a.h(z.a,n)
z=new D.I("mover",o,p.b,p,[U.ab])
z.b=!0
p.aA(z)
if(!p.c.t(0,q)){o=p.c
p.c=q
z=new D.I("color",o,q,p,[V.U])
z.b=!0
p.aA(z)}r.h(0,p)
z=t.r
z.sa_(0,new V.U(0,0,1))
z=t.x
z.sa_(0,new V.U(0,1,0))
z=t.z
z.sa_(0,new V.U(1,0,0))
z=t.z
if(z.c===C.c){z.c=C.h
z.bI()
z.bZ(100)
r=z.a
r.a=null
r.S(null)}z.bZ(10)
m=E.cV(null,!0,null,"",null,null)
m.sbG(0,u)
m.scC(t)
l=E.cV(null,!0,null,"",null,null)
l.sbG(0,u)
z=new O.hI()
z.b=new V.G(0,0,-1)
z.c=new V.U(0.2,0.3,0.4)
z.d=new V.U(0.1,0.2,0.3)
z.e=new V.U(0.7,0.7,0.7)
z.f=new V.U(0.3,0.3,0.3)
z.r=new V.U(0.5,0.5,0.5)
z.x=new V.U(0.5,0.5,0.5)
z.y=new V.U(1,1,1)
z.z=new V.U(0.8,0.8,0.8)
z.Q=!1
z.ch=!1
z.cx=!1
z.cy=!1
z.db=!1
z.dx=!1
z.dy=!1
z.fr=!1
z.fx=!1
z.fy=!1
z.go=!1
z.id=!1
z.k1=!1
z.k2=!1
z.k3=!1
z.k4=!1
z.r1=!1
z.r2=1
if(!$.q.$2(1,0.4)){z.r2=0.4
r=new D.I("vectorScale",1,0.4,z,[P.z])
r.b=!0
z.S(r)}if(!z.ch){z.ch=!0
r=new D.I("showWireFrame",!1,!0,z,[P.a4])
r.b=!0
z.S(r)}if(!z.k3){z.k3=!0
r=new D.I("showAxis",!1,!0,z,[P.a4])
r.b=!0
z.S(r)}if(!z.cy){z.cy=!0
r=new D.I("showNormals",!1,!0,z,[P.a4])
r.b=!0
z.S(r)}if(!z.db){z.db=!0
r=new D.I("showBinormals",!1,!0,z,[P.a4])
r.b=!0
z.S(r)}l.scC(z)
k=E.cV(null,!0,null,"",null,null)
k.y.h(0,l)
k.y.h(0,m)
z=new U.e5()
z.bJ(U.ab)
z.bd(z.gfa(),z.gfA())
z.e=null
z.f=V.c4()
z.r=0
r=v.r
p=new U.jW()
n=U.cU()
n.scF(0,!0)
n.scr(6.283185307179586)
n.sct(0)
n.sa4(0,0)
n.scs(100)
n.sR(0)
n.scb(0.5)
p.b=n
n=n.gu()
n.toString
j=H.f(p.gaB(),s)
C.a.h(n.a,j)
n=U.cU()
n.scF(0,!0)
n.scr(6.283185307179586)
n.sct(0)
n.sa4(0,0)
n.scs(100)
n.sR(0)
n.scb(0.5)
p.c=n
C.a.h(n.gu().a,j)
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
i=new X.aH(!1,!1,!1)
o=p.d
p.d=i
n=[X.aH]
j=new D.I("modifiers",o,i,p,n)
j.b=!0
p.P(j)
j=p.f
if(j!==!1){p.f=!1
j=new D.I("invertX",j,!1,p,[P.a4])
j.b=!0
p.P(j)}j=p.r
if(j!==!0){p.r=!0
j=new D.I("invertY",j,!0,p,[P.a4])
j.b=!0
p.P(j)}p.aX(r)
z.h(0,p)
r=v.r
p=new U.jV()
j=U.cU()
j.scF(0,!0)
j.scr(6.283185307179586)
j.sct(0)
j.sa4(0,0)
j.scs(100)
j.sR(0)
j.scb(0.2)
p.b=j
j=j.gu()
j.toString
h=H.f(p.gaB(),s)
C.a.h(j.a,h)
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
i=new X.aH(!0,!1,!1)
o=p.c
p.c=i
j=new D.I("modifiers",o,i,p,n)
j.b=!0
p.P(j)
p.aX(r)
z.h(0,p)
r=v.r
p=new U.jX()
p.c=0.01
p.d=0
p.e=0
i=new X.aH(!1,!1,!1)
p.b=i
n=new D.I("modifiers",null,i,p,n)
n.b=!0
p.P(n)
p.aX(r)
z.h(0,p)
k.sb1(z)
z=new M.hz()
r=O.cT(E.aO)
z.d=r
r.bd(z.gfg(),z.gfh())
z.e=null
z.f=null
z.r=null
z.x=null
g=new X.iy()
g.b=1.0471975511965976
g.c=0.1
g.d=2000
g.sb1(null)
r=g.b
if(!$.q.$2(r,1.0471975511965976)){o=g.b
g.b=1.0471975511965976
r=new D.I("fov",o,1.0471975511965976,g,[P.z])
r.b=!0
g.aT(r)}r=g.c
if(!$.q.$2(r,0.1)){o=g.c
g.c=0.1
r=new D.I("near",o,0.1,g,[P.z])
r.b=!0
g.aT(r)}r=g.d
if(!$.q.$2(r,2000)){o=g.d
g.d=2000
r=new D.I("far",o,2000,g,[P.z])
r.b=!0
g.aT(r)}r=z.a
if(r!==g){if(r!=null){r=r.gu()
r.toString
p=H.f(z.gaC(),s)
C.a.Z(r.a,p)}o=z.a
z.a=g
r=g.gu()
r.toString
p=H.f(z.gaC(),s)
C.a.h(r.a,p)
r=new D.I("camera",o,z.a,z,[X.dQ])
r.b=!0
z.aS(r)}f=new X.hG()
r=new V.aE(0,0,0,1)
f.a=r
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
r=V.ew(0,0,1,1)
f.r=r
r=z.b
if(r!==f){if(r!=null){r=r.gu()
r.toString
p=H.f(z.gaC(),s)
C.a.Z(r.a,p)}o=z.b
z.b=f
r=f.gu()
r.toString
p=H.f(z.gaC(),s)
C.a.h(r.a,p)
r=new D.I("target",o,z.b,z,[X.eB])
r.b=!0
z.aS(r)}z.d.h(0,k)
z.a.sb1(U.dU(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=v.d
if(r!==z){if(r!=null){r=r.gu()
r.toString
p=H.f(v.gcO(),s)
C.a.Z(r.a,p)}v.d=z
z=z.gu()
z.toString
s=H.f(v.gcO(),s)
C.a.h(z.a,s)
v.eG()}z=new V.ji("bumpMaps",!0,new N.mz(t,v))
x=x.getElementById("bumpMaps")
z.c=x
if(x==null)H.p("Failed to find bumpMaps for Texture2DGroup")
z.ap(0,"../resources/BumpMap1.png",!0)
z.h(0,"../resources/BumpMap2.png")
z.h(0,"../resources/BumpMap3.png")
z.h(0,"../resources/BumpMap4.png")
z.h(0,"../resources/BumpMap5.png")
z.h(0,"../resources/ScrewBumpMap.png")
z.h(0,"../resources/CtrlPnlBumpMap.png")
V.mG(v)},
mz:{"^":"n:25;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.hM(a)
x=z.c
if(x!==C.d){if(x===C.c)z.aV()
z.c=C.d
z.fP(null)
x=z.a
x.a=null
x.S(null)}z.fO(y)}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ea.prototype
return J.e9.prototype}if(typeof a=="string")return J.cm.prototype
if(a==null)return J.eb.prototype
if(typeof a=="boolean")return J.hV.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.aL=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.c8=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.mp=function(a){if(typeof a=="number")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cu.prototype
return a}
J.dA=function(a){if(typeof a=="string")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cu.prototype
return a}
J.bu=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).t(a,b)}
J.h_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mp(a).K(a,b)}
J.dG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fQ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aL(a).j(a,b)}
J.cJ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fQ(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c8(a).m(a,b,c)}
J.h0=function(a,b){return J.dA(a).F(a,b)}
J.h1=function(a,b,c){return J.bu(a).fH(a,b,c)}
J.h2=function(a,b,c,d){return J.bu(a).di(a,b,c,d)}
J.h3=function(a,b){return J.dA(a).V(a,b)}
J.cK=function(a,b,c){return J.aL(a).hq(a,b,c)}
J.cL=function(a,b){return J.c8(a).H(a,b)}
J.h4=function(a,b,c,d){return J.c8(a).au(a,b,c,d)}
J.dH=function(a,b){return J.c8(a).C(a,b)}
J.ca=function(a){return J.bu(a).gc8(a)}
J.bX=function(a){return J.J(a).gT(a)}
J.bx=function(a){return J.c8(a).gY(a)}
J.at=function(a){return J.aL(a).gk(a)}
J.h5=function(a,b){return J.bu(a).i8(a,b)}
J.a9=function(a){return J.J(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cQ.prototype
C.H=J.u.prototype
C.a=J.b9.prototype
C.I=J.e9.prototype
C.f=J.ea.prototype
C.t=J.eb.prototype
C.i=J.cl.prototype
C.b=J.cm.prototype
C.P=J.c2.prototype
C.V=H.d8.prototype
C.W=W.iv.prototype
C.z=J.iz.prototype
C.X=P.da.prototype
C.r=J.cu.prototype
C.A=W.bM.prototype
C.B=W.kf.prototype
C.D=new P.ha(!1)
C.C=new P.h9(C.D)
C.E=new P.ix()
C.F=new P.k4()
C.j=new P.l2()
C.c=new A.ce(0,"ColorSourceType.None")
C.h=new A.ce(1,"ColorSourceType.Solid")
C.d=new A.ce(2,"ColorSourceType.Texture2D")
C.e=new A.ce(3,"ColorSourceType.TextureCube")
C.q=new P.bA(0)
C.G=new P.bA(5e6)
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
C.w=H.d(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.d(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.d(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.d(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.d(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.d(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.d(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.d(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.d(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.d(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.d(I.ak([]),[P.j])
C.U=new H.hm(0,{},C.Q,[P.j,P.j])
C.k=new P.jY(!1)
$.aD=0
$.by=null
$.dL=null
$.dt=!1
$.fO=null
$.fI=null
$.fW=null
$.cE=null
$.cH=null
$.dB=null
$.bq=null
$.bR=null
$.bS=null
$.du=!1
$.T=C.j
$.e0=null
$.e_=null
$.dZ=null
$.dY=null
$.q=V.ip()
$.hN="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.hL="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
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
I.$lazy(y,x,w)}})(["dX","$get$dX",function(){return H.fN("_$dart_dartClosure")},"d_","$get$d_",function(){return H.fN("_$dart_js")},"eL","$get$eL",function(){return H.aI(H.ct({
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.aI(H.ct({$method$:null,
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.aI(H.ct(null))},"eO","$get$eO",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aI(H.ct(void 0))},"eT","$get$eT",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.aI(H.eR(null))},"eP","$get$eP",function(){return H.aI(function(){try{null.$method$}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.aI(H.eR(void 0))},"eU","$get$eU",function(){return H.aI(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dn","$get$dn",function(){return P.kg()},"bT","$get$bT",function(){return[]},"f6","$get$f6",function(){return P.k1()},"fd","$get$fd",function(){return H.it(H.bp(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fy","$get$fy",function(){return P.iR("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fE","$get$fE",function(){return P.m1()},"dV","$get$dV",function(){return{}},"f9","$get$f9",function(){return Z.ar(0)},"f7","$get$f7",function(){return Z.ar(511)},"aA","$get$aA",function(){return Z.ar(1)},"az","$get$az",function(){return Z.ar(2)},"ay","$get$ay",function(){return Z.ar(4)},"aT","$get$aT",function(){return Z.ar(8)},"aU","$get$aU",function(){return Z.ar(16)},"b2","$get$b2",function(){return Z.ar(32)},"bL","$get$bL",function(){return Z.ar(64)},"f8","$get$f8",function(){return Z.ar(96)},"bn","$get$bn",function(){return Z.ar(128)},"aS","$get$aS",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1,args:[D.r]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.E,args:[F.ai]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[P.m,[P.k,E.aO]]},{func:1,ret:P.E,args:[F.a0]},{func:1,ret:F.ac,args:[F.ac]},{func:1,ret:P.E,args:[D.r]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.z},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.E,args:[W.ae]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[P.m,[P.k,V.aF]]},{func:1,ret:-1,args:[P.m,[P.k,U.ab]]},{func:1,ret:P.j,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.k,D.a3]]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.E,args:[P.j]},{func:1,ret:P.a4,args:[W.L]},{func:1,ret:P.m,args:[[P.e,P.m],P.m]},{func:1,args:[P.j]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.E,args:[P.a2]},{func:1,args:[,P.j]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bM]},{func:1,ret:P.a4,args:[P.z,P.z]},{func:1,ret:P.a4,args:[[P.k,D.a3]]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.m]},{func:1,ret:P.E,args:[P.j,,]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,ret:P.E,args:[F.a0,P.z,P.z]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:F.ac,args:[F.ac],named:{color:V.aE}},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:[P.aV,,],args:[,]},{func:1,ret:-1,args:[F.a0,F.a0]},{func:1,ret:P.E,args:[F.b_]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.E,args:[P.bk]},{func:1,ret:P.E,args:[W.aa]},{func:1,ret:P.E,args:[W.V]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:W.V,args:[W.L]}]
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
if(x==y)H.mJ(d||a)
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
Isolate.dy=a.dy
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fT,[])
else N.fT([])})})()
//# sourceMappingURL=test.dart.js.map
