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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isr)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dd(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.de=function(){}
var dart=[["","",,H,{"^":"",lP:{"^":"a;a"}}],["","",,J,{"^":"",
R:function(a){return void 0},
dl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cw:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dh==null){H.kZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eE("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cN()]
if(v!=null)return v
v=H.l3(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.$get$cN(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
r:{"^":"a;",
v:function(a,b){return a===b},
gW:function(a){return H.bA(a)},
i:["eu",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hh:{"^":"r;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isa8:1},
dQ:{"^":"r;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isJ:1},
cO:{"^":"r;",
gW:function(a){return 0},
i:["ev",function(a){return String(a)}]},
hT:{"^":"cO;"},
d4:{"^":"cO;"},
c_:{"^":"cO;",
i:function(a){var z=a[$.$get$dD()]
if(z==null)return this.ev(a)
return"JavaScript function for "+H.k(J.ad(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscJ:1},
b7:{"^":"r;$ti",
h:function(a,b){H.E(b,H.z(a,0))
if(!!a.fixed$length)H.l(P.au("add"))
a.push(b)},
i6:function(a,b){if(!!a.fixed$length)H.l(P.au("removeAt"))
if(b<0||b>=a.length)throw H.h(P.c3(b,null,null))
return a.splice(b,1)[0]},
B:function(a,b){var z
if(!!a.fixed$length)H.l(P.au("remove"))
for(z=0;z<a.length;++z)if(J.B(a[z],b)){a.splice(z,1)
return!0}return!1},
c8:function(a,b){var z,y
H.w(b,"$isf",[H.z(a,0)],"$asf")
if(!!a.fixed$length)H.l(P.au("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bn(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a_(z,y,H.k(a[y]))
return z.join(b)},
hK:function(a){return this.D(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
bI:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ap(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ap(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
ghD:function(a){if(a.length>0)return a[0]
throw H.h(H.dN())},
gcv:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.dN())},
aY:function(a,b){var z
for(z=0;z<a.length;++z)if(J.B(a[z],b))return!0
return!1},
i:function(a){return P.cK(a,"[","]")},
gX:function(a){return new J.ak(a,a.length,0,[H.z(a,0)])},
gW:function(a){return H.bA(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.l(P.au("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.cc(b,"newLength",null))
if(b<0)throw H.h(P.ap(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.a0(b)
H.E(c,H.z(a,0))
if(!!a.immutable$list)H.l(P.au("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.b2(a,b))
if(b>=a.length||b<0)throw H.h(H.b2(a,b))
a[b]=c},
$isf:1,
$isd:1,
p:{
hg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ap(a,0,4294967295,"length",null))
return J.dO(new Array(a),b)},
dO:function(a,b){return J.bt(H.b(a,[b]))},
bt:function(a){H.ca(a)
a.fixed$length=Array
return a}}},
lO:{"^":"b7;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ck:{"^":"r;",
ck:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.f.gbE(b)
if(this.gbE(a)===z)return 0
if(this.gbE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbE:function(a){return a===0?1/a<0:a<0},
e2:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.au(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.au(""+a+".round()"))},
hq:function(a,b,c){if(C.f.ck(b,c)>0)throw H.h(H.aU(b))
if(this.ck(a,b)<0)return b
if(this.ck(a,c)>0)return c
return a},
ij:function(a,b){var z
if(b>20)throw H.h(P.ap(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbE(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.h(H.aU(b))
return a*b},
eq:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
a6:function(a,b){return(a|0)===a?a/b|0:this.fQ(a,b)},
fQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.au("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bk:function(a,b){var z
if(a>0)z=this.fO(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fO:function(a,b){return b>31?0:a>>>b},
ae:function(a,b){if(typeof b!=="number")throw H.h(H.aU(b))
return a<b},
$isv:1,
$isa1:1},
dP:{"^":"ck;",$isC:1},
hi:{"^":"ck;"},
cM:{"^":"r;",
cj:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.b2(a,b))
if(b<0)throw H.h(H.b2(a,b))
if(b>=a.length)H.l(H.b2(a,b))
return a.charCodeAt(b)},
bg:function(a,b){if(b>=a.length)throw H.h(H.b2(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.W(b)
if(typeof b!=="string")throw H.h(P.cc(b,null,null))
return a+b},
bJ:function(a,b,c){H.a0(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.c3(b,null,null))
if(b>c)throw H.h(P.c3(b,null,null))
if(c>a.length)throw H.h(P.c3(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.bJ(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.w)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ad:function(a,b){return this.hX(a,b," ")},
ht:function(a,b,c){if(c>a.length)throw H.h(P.ap(c,0,a.length,null,null))
return H.fn(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ise2:1,
$iso:1}}],["","",,H,{"^":"",
dN:function(){return new P.iu("No element")},
a4:{"^":"iY;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.cj(this.a,b)},
$aseF:function(){return[P.C]},
$asu:function(){return[P.C]},
$asf:function(){return[P.C]},
$asd:function(){return[P.C]}},
fU:{"^":"f;"},
dV:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.c9(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bn(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hz:{"^":"f;a,b,$ti",
gX:function(a){return new H.hA(J.bT(this.a),this.b,this.$ti)},
gl:function(a){return J.bl(this.a)},
F:function(a,b){return this.b.$1(J.dm(this.a,b))},
$asf:function(a,b){return[b]}},
hA:{"^":"cL;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascL:function(a,b){return[b]}},
jg:{"^":"f;a,b,$ti",
gX:function(a){return new H.jh(J.bT(this.a),this.b,this.$ti)}},
jh:{"^":"cL;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
ch:{"^":"a;$ti"},
eF:{"^":"a;$ti"},
iY:{"^":"cl+eF;"}}],["","",,H,{"^":"",
kU:function(a){return init.types[H.a0(a)]},
l1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.R(a).$isD},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ad(a)
if(typeof z!=="string")throw H.h(H.aU(a))
return z},
bA:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
bc:function(a){var z,y,x,w,v,u,t,s,r
z=J.R(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.R(a).$isd4){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bg(w,0)===36)w=C.i.cV(w,1)
r=H.di(H.ca(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e4:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i3:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aU(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bk(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aU(w))}return H.e4(z)},
e5:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aU(x))
if(x<0)throw H.h(H.aU(x))
if(x>65535)return H.i3(a)}return H.e4(a)},
i2:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bk(z,10))>>>0,56320|z&1023)}throw H.h(P.ap(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i1:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
i_:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
hW:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
hX:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
hZ:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
i0:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
hY:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aU(a))},
c:function(a,b){if(a==null)J.bl(a)
throw H.h(H.b2(a,b))},
b2:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aW(!0,b,"index",null)
z=H.a0(J.bl(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.c3(b,"index",null)},
kP:function(a,b,c){if(a>c)return new P.cn(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cn(a,c,!0,b,"end","Invalid value")
return new P.aW(!0,b,"end",null)},
aU:function(a){return new P.aW(!0,a,null,null)},
h:function(a){var z
if(a==null)a=new P.e1()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fp})
z.name=""}else z.toString=H.fp
return z},
fp:function(){return J.ad(this.dartException)},
l:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bn(a))},
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lo(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bk(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cP(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e0(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$en()
u=$.$get$eo()
t=$.$get$ep()
s=$.$get$eq()
r=$.$get$eu()
q=$.$get$ev()
p=$.$get$es()
$.$get$er()
o=$.$get$ex()
n=$.$get$ew()
m=v.ac(y)
if(m!=null)return z.$1(H.cP(H.W(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.cP(H.W(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e0(H.W(y),m))}}return z.$1(new H.iX(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ea()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aW(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ea()
return a},
bj:function(a){var z
if(a==null)return new H.eX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eX(a)},
kS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a_(0,a[y],a[x])}return b},
l0:function(a,b,c,d,e,f){H.i(a,"$iscJ")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.j("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l0)
a.$identity=z
return z},
fF:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.R(d).$isd){z.$reflectionInfo=d
x=H.i6(z).r}else x=d
w=e?Object.create(new H.iv().constructor.prototype):Object.create(new H.cC(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aE
if(typeof u!=="number")return u.C()
$.aE=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dy(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kU,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dr:H.cD
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dy(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fC:function(a,b,c,d){var z=H.cD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dy:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fE(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fC(y,!w,z,b)
if(y===0){w=$.aE
if(typeof w!=="number")return w.C()
$.aE=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bm
if(v==null){v=H.cd("self")
$.bm=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aE
if(typeof w!=="number")return w.C()
$.aE=w+1
t+=w
w="return function("+t+"){return this."
v=$.bm
if(v==null){v=H.cd("self")
$.bm=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fD:function(a,b,c,d){var z,y
z=H.cD
y=H.dr
switch(b?-1:a){case 0:throw H.h(H.ig("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fE:function(a,b){var z,y,x,w,v,u,t,s
z=$.bm
if(z==null){z=H.cd("self")
$.bm=z}y=$.dq
if(y==null){y=H.cd("receiver")
$.dq=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fD(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aE
if(typeof y!=="number")return y.C()
$.aE=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aE
if(typeof y!=="number")return y.C()
$.aE=y+1
return new Function(z+y+"}")()},
dd:function(a,b,c,d,e,f,g){var z,y
z=J.bt(H.ca(b))
H.a0(c)
y=!!J.R(d).$isd?J.bt(d):d
return H.fF(a,z,c,y,!!e,f,g)},
W:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aK(a,"String"))},
l6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aK(a,"num"))},
f9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aK(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aK(a,"int"))},
fl:function(a,b){throw H.h(H.aK(a,H.W(b).substring(3)))},
l8:function(a,b){var z=J.c9(b)
throw H.h(H.fB(a,z.bJ(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.fl(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else z=!0
if(z)return a
H.l8(a,b)},
ca:function(a){if(a==null)return a
if(!!J.R(a).$isd)return a
throw H.h(H.aK(a,"List"))},
l2:function(a,b){if(a==null)return a
if(!!J.R(a).$isd)return a
if(J.R(a)[b])return a
H.fl(a,b)},
fc:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fc(J.R(a))
if(z==null)return!1
y=H.ff(z,null,b,null)
return y},
m:function(a,b){var z,y
if(a==null)return a
if($.d9)return a
$.d9=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.aK(a,z)
throw H.h(y)}finally{$.d9=!1}},
df:function(a,b){if(a!=null&&!H.dc(a,b))H.l(H.aK(a,H.cb(b)))
return a},
f4:function(a){var z
if(a instanceof H.q){z=H.fc(J.R(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.bc(a)},
ln:function(a){throw H.h(new P.fL(H.W(a)))},
fd:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
mA:function(a,b,c){return H.bk(a["$as"+H.k(c)],H.b3(b))},
bS:function(a,b,c,d){var z
H.W(c)
H.a0(d)
z=H.bk(a["$as"+H.k(c)],H.b3(b))
return z==null?null:z[d]},
aL:function(a,b,c){var z
H.W(b)
H.a0(c)
z=H.bk(a["$as"+H.k(b)],H.b3(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.a0(b)
z=H.b3(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b4(a,null)
return z},
b4:function(a,b){var z,y
H.w(b,"$isd",[P.o],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.di(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.k(b[y])}if('func' in a)return H.kD(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.i.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.W(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
di:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.o],"$asd")
if(a==null)return""
z=new P.c4("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}v="<"+z.i(0)+">"
return v},
bk:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bQ:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.R(a)
if(y[b]==null)return!1
return H.f7(H.bk(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.W(b)
H.ca(c)
H.W(d)
if(a==null)return a
z=H.bQ(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.di(c,0,null)
throw H.h(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f7:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
my:function(a,b,c){return a.apply(b,H.bk(J.R(b)["$as"+H.k(c)],H.b3(b)))},
fg:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fg(z)}return!1},
dc:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fg(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.R(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dc(a,b))throw H.h(H.aK(a,H.cb(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.ff(a,b,c,d)
if('func' in a)return c.builtin$cls==="cJ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,x,d)
else if(H.aw(a,b,x,d))return!0
else{if(!('$is'+"br" in y.prototype))return!1
w=y.prototype["$as"+"br"]
v=H.bk(w,z?a.slice(1):null)
return H.aw(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f7(H.bk(r,z),b,u,d)},
ff:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.l5(m,b,l,d)},
l5:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
mz:function(a,b,c){Object.defineProperty(a,H.W(b),{value:c,enumerable:false,writable:true,configurable:true})},
l3:function(a){var z,y,x,w,v,u
z=H.W($.fe.$1(a))
y=$.cu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.W($.f6.$2(a,z))
if(z!=null){y=$.cu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cy(x)
$.cu[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cx[z]=x
return x}if(v==="-"){u=H.cy(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fj(a,x)
if(v==="*")throw H.h(P.eE(z))
if(init.leafTags[z]===true){u=H.cy(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fj(a,x)},
fj:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dl(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cy:function(a){return J.dl(a,!1,null,!!a.$isD)},
l4:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cy(z)
else return J.dl(z,c,null,null)},
kZ:function(){if(!0===$.dh)return
$.dh=!0
H.l_()},
l_:function(){var z,y,x,w,v,u,t,s
$.cu=Object.create(null)
$.cx=Object.create(null)
H.kV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fm.$1(v)
if(u!=null){t=H.l4(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kV:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.bh(C.z,H.bh(C.E,H.bh(C.p,H.bh(C.p,H.bh(C.D,H.bh(C.A,H.bh(C.B(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fe=new H.kW(v)
$.f6=new H.kX(u)
$.fm=new H.kY(t)},
bh:function(a,b){return a(b)||b},
fn:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fo:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i5:{"^":"a;a,b,c,d,e,f,r,0x",p:{
i6:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bt(z)
y=z[0]
x=z[1]
return new H.i5(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iL:{"^":"a;a,b,c,d,e,f",
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
p:{
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
co:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
et:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hQ:{"^":"a2;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e0:function(a,b){return new H.hQ(a,b==null?null:b.method)}}},
hl:{"^":"a2;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
p:{
cP:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hl(a,y,z?null:b.receiver)}}},
iX:{"^":"a2;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lo:{"^":"q:14;a",
$1:function(a){if(!!J.R(a).$isa2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eX:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.bc(this).trim()+"'"},
geo:function(){return this},
$iscJ:1,
geo:function(){return this}},
ef:{"^":"q;"},
iv:{"^":"ef;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cC:{"^":"ef;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cC))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bA(this.a)
else y=typeof z!=="object"?J.b6(z):H.bA(z)
return(y^H.bA(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
p:{
cD:function(a){return a.a},
dr:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cC("self","target","receiver","name")
y=J.bt(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iM:{"^":"a2;a",
i:function(a){return this.a},
p:{
aK:function(a,b){return new H.iM("TypeError: "+H.k(P.cg(a))+": type '"+H.f4(a)+"' is not a subtype of type '"+b+"'")}}},
fA:{"^":"a2;a",
i:function(a){return this.a},
p:{
fB:function(a,b){return new H.fA("CastError: "+H.k(P.cg(a))+": type '"+H.f4(a)+"' is not a subtype of type '"+b+"'")}}},
ie:{"^":"a2;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
p:{
ig:function(a){return new H.ie(a)}}},
aX:{"^":"hx;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaB:function(a){return new H.dU(this,[H.z(this,0)])},
dE:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dc(y,b)}else return this.hH(b)},
hH:function(a){var z=this.d
if(z==null)return!1
return this.cu(this.bQ(z,J.b6(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bh(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bh(w,b)
x=y==null?null:y.b
return x}else return this.hI(b)},
hI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bQ(z,J.b6(a)&0x3ffffff)
x=this.cu(y,a)
if(x<0)return
return y[x].b},
a_:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bW()
this.b=z}this.d3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bW()
this.c=y}this.d3(y,b,c)}else{x=this.d
if(x==null){x=this.bW()
this.d=x}w=J.b6(b)&0x3ffffff
v=this.bQ(x,w)
if(v==null)this.c3(x,w,[this.bX(b,c)])
else{u=this.cu(v,b)
if(u>=0)v[u].b=c
else v.push(this.bX(b,c))}}},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bn(this))
z=z.c}},
d3:function(a,b,c){var z
H.E(b,H.z(this,0))
H.E(c,H.z(this,1))
z=this.bh(a,b)
if(z==null)this.c3(a,b,this.bX(b,c))
else z.b=c},
f_:function(){this.r=this.r+1&67108863},
bX:function(a,b){var z,y
z=new H.hp(H.E(a,H.z(this,0)),H.E(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f_()
return z},
cu:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].a,b))return y
return-1},
i:function(a){return P.dX(this)},
bh:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
eU:function(a,b){delete a[b]},
dc:function(a,b){return this.bh(a,b)!=null},
bW:function(){var z=Object.create(null)
this.c3(z,"<non-identifier-key>",z)
this.eU(z,"<non-identifier-key>")
return z},
$isdT:1},
hp:{"^":"a;a,b,0c,0d"},
dU:{"^":"fU;a,$ti",
gl:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.hq(z,z.r,this.$ti)
y.c=z.e
return y}},
hq:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bn(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kW:{"^":"q:14;a",
$1:function(a){return this.a(a)}},
kX:{"^":"q:27;a",
$2:function(a,b){return this.a(a,b)}},
kY:{"^":"q:28;a",
$1:function(a){return this.a(H.W(a))}},
hj:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise2:1,
p:{
hk:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.h3("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kR:function(a){return J.dO(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bM:function(a){return a},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.b2(b,a))},
kC:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kP(a,b,c))
return b},
hN:{"^":"r;","%":"DataView;ArrayBufferView;cU|eR|eS|hM|eT|eU|aY"},
cU:{"^":"hN;",
gl:function(a){return a.length},
$isD:1,
$asD:I.de},
hM:{"^":"eS;",
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
$asch:function(){return[P.v]},
$asu:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aY:{"^":"eU;",
$asch:function(){return[P.C]},
$asu:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]}},
lX:{"^":"aY;",
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lY:{"^":"aY;",
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lZ:{"^":"aY;",
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m_:{"^":"aY;",
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m0:{"^":"aY;",
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m1:{"^":"aY;",
gl:function(a){return a.length},
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hO:{"^":"aY;",
gl:function(a){return a.length},
j:function(a,b){H.b1(b,a,a.length)
return a[b]},
bI:function(a,b,c){return new Uint8Array(a.subarray(b,H.kC(b,c,a.length)))},
"%":";Uint8Array"},
eR:{"^":"cU+u;"},
eS:{"^":"eR+ch;"},
eT:{"^":"cU+u;"},
eU:{"^":"eT+ch;"}}],["","",,P,{"^":"",
jj:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kK()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bR(new P.jl(z),1)).observe(y,{childList:true})
return new P.jk(z,y,x)}else if(self.setImmediate!=null)return P.kL()
return P.kM()},
mn:[function(a){self.scheduleImmediate(H.bR(new P.jm(H.m(a,{func:1,ret:-1})),0))},"$1","kK",4,0,12],
mo:[function(a){self.setImmediate(H.bR(new P.jn(H.m(a,{func:1,ret:-1})),0))},"$1","kL",4,0,12],
mp:[function(a){P.d_(C.l,H.m(a,{func:1,ret:-1}))},"$1","kM",4,0,12],
d_:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.f.a6(a.a,1000)
return P.kj(z<0?0:z,b)},
kG:function(a,b){if(H.c8(a,{func:1,args:[P.a,P.aA]}))return b.i5(a,null,P.a,P.aA)
if(H.c8(a,{func:1,args:[P.a]}))return H.m(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kF:function(){var z,y
for(;z=$.bg,z!=null;){$.bO=null
y=z.b
$.bg=y
if(y==null)$.bN=null
z.a.$0()}},
mx:[function(){$.da=!0
try{P.kF()}finally{$.bO=null
$.da=!1
if($.bg!=null)$.$get$d6().$1(P.f8())}},"$0","f8",0,0,4],
f3:function(a){var z=new P.eM(H.m(a,{func:1,ret:-1}))
if($.bg==null){$.bN=z
$.bg=z
if(!$.da)$.$get$d6().$1(P.f8())}else{$.bN.b=z
$.bN=z}},
kJ:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.bg
if(z==null){P.f3(a)
$.bO=$.bN
return}y=new P.eM(a)
x=$.bO
if(x==null){y.b=z
$.bO=y
$.bg=y}else{y.b=x.b
x.b=y
$.bO=y
if(y.b==null)$.bN=y}},
l9:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.U
if(C.j===y){P.ct(null,null,C.j,a)
return}y.toString
P.ct(null,null,y,H.m(y.ce(a),z))},
ei:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.U
if(y===C.j){y.toString
return P.d_(a,b)}return P.d_(a,H.m(y.ce(b),z))},
cs:function(a,b,c,d,e){var z={}
z.a=d
P.kJ(new P.kH(z,e))},
f1:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
f2:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
kI:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
ct:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ce(d):c.ho(d,-1)
P.f3(d)},
jl:{"^":"q:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jk:{"^":"q:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jm:{"^":"q:3;a",
$0:function(){this.a.$0()}},
jn:{"^":"q:3;a",
$0:function(){this.a.$0()}},
ki:{"^":"a;a,0b,c",
eH:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bR(new P.kk(this,b),0),a)
else throw H.h(P.au("`setTimeout()` not found."))},
p:{
kj:function(a,b){var z=new P.ki(!0,0)
z.eH(a,b)
return z}}},
kk:{"^":"q:4;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
bf:{"^":"a;0a,b,c,d,e,$ti",
hN:function(a){if(this.c!==6)return!0
return this.b.b.cG(H.m(this.d,{func:1,ret:P.a8,args:[P.a]}),a.a,P.a8,P.a)},
hG:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.a,P.aA]}))return H.df(w.ic(z,a.a,a.b,null,y,P.aA),x)
else return H.df(w.cG(H.m(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aT:{"^":"a;dr:a<,b,0fF:c<,$ti",
ej:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kG(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.U,[c])
w=b==null?1:3
this.d4(new P.bf(x,w,a,b,[z,c]))
return x},
ih:function(a,b){return this.ej(a,null,b)},
d4:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isbf")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaT")
z=y.a
if(z<4){y.d4(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ct(null,null,z,H.m(new P.jB(this,a),{func:1,ret:-1}))}},
dj:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isbf")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaT")
y=u.a
if(y<4){u.dj(a)
return}this.a=y
this.c=u.c}z.a=this.bj(a)
y=this.b
y.toString
P.ct(null,null,y,H.m(new P.jG(z,this),{func:1,ret:-1}))}},
bZ:function(){var z=H.i(this.c,"$isbf")
this.c=null
return this.bj(z)},
bj:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d8:function(a){var z,y,x,w
z=H.z(this,0)
H.df(a,{futureOr:1,type:z})
y=this.$ti
x=H.bQ(a,"$isbr",y,"$asbr")
if(x){z=H.bQ(a,"$isaT",y,null)
if(z)P.eO(a,this)
else P.jC(a,this)}else{w=this.bZ()
H.E(a,z)
this.a=4
this.c=a
P.bK(this,w)}},
bM:[function(a,b){var z
H.i(b,"$isaA")
z=this.bZ()
this.a=8
this.c=new P.al(a,b)
P.bK(this,z)},function(a){return this.bM(a,null)},"ip","$2","$1","geQ",4,2,30],
$isbr:1,
p:{
jC:function(a,b){var z,y,x
b.a=1
try{a.ej(new P.jD(b),new P.jE(b),null)}catch(x){z=H.b5(x)
y=H.bj(x)
P.l9(new P.jF(b,z,y))}},
eO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaT")
if(z>=4){y=b.bZ()
b.a=a.a
b.c=a.c
P.bK(b,y)}else{y=H.i(b.c,"$isbf")
b.a=2
b.c=a
a.dj(y)}},
bK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cs(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bK(z.a,b)}y=z.a
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
P.cs(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.jJ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jI(x,b,r).$0()}else if((y&2)!==0)new P.jH(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.R(y).$isbr){if(y.a>=4){n=H.i(t.c,"$isbf")
t.c=null
b=t.bj(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eO(y,t)
return}}m=b.b
n=H.i(m.c,"$isbf")
m.c=null
b=m.bj(n)
y=x.a
u=x.b
if(!y){H.E(u,H.z(m,0))
m.a=4
m.c=u}else{H.i(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
jB:{"^":"q:3;a,b",
$0:function(){P.bK(this.a,this.b)}},
jG:{"^":"q:3;a,b",
$0:function(){P.bK(this.b,this.a.a)}},
jD:{"^":"q:15;a",
$1:function(a){var z=this.a
z.a=0
z.d8(a)}},
jE:{"^":"q:31;a",
$2:function(a,b){this.a.bM(a,H.i(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
jF:{"^":"q:3;a,b,c",
$0:function(){this.a.bM(this.b,this.c)}},
jJ:{"^":"q:4;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ei(H.m(w.d,{func:1}),null)}catch(v){y=H.b5(v)
x=H.bj(v)
if(this.d){w=H.i(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.R(z).$isbr){if(z instanceof P.aT&&z.gdr()>=4){if(z.gdr()===8){w=this.b
w.b=H.i(z.gfF(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ih(new P.jK(t),null)
w.a=!1}}},
jK:{"^":"q:35;a",
$1:function(a){return this.a}},
jI:{"^":"q:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.E(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cG(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.b5(t)
y=H.bj(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
jH:{"^":"q:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isal")
w=this.c
if(w.hN(z)&&w.e!=null){v=this.b
v.b=w.hG(z)
v.a=!1}}catch(u){y=H.b5(u)
x=H.bj(u)
w=H.i(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
eM:{"^":"a;a,0b"},
cX:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.U,[P.C])
z.a=0
this.hM(new P.iy(z,this),!0,new P.iz(z,y),y.geQ())
return y}},
iy:{"^":"q;a,b",
$1:function(a){H.E(a,H.aL(this.b,"cX",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aL(this.b,"cX",0)]}}},
iz:{"^":"q:3;a,b",
$0:function(){this.b.d8(this.a.a)}},
ec:{"^":"a;$ti"},
ix:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.k(this.a)},
$isa2:1},
kq:{"^":"a;",$ismm:1},
kH:{"^":"q:3;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e1()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
k4:{"^":"kq;",
ie:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.f1(null,null,this,a,-1)}catch(x){z=H.b5(x)
y=H.bj(x)
P.cs(null,null,this,z,H.i(y,"$isaA"))}},
ig:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.f2(null,null,this,a,b,-1,c)}catch(x){z=H.b5(x)
y=H.bj(x)
P.cs(null,null,this,z,H.i(y,"$isaA"))}},
ho:function(a,b){return new P.k6(this,H.m(a,{func:1,ret:b}),b)},
ce:function(a){return new P.k5(this,H.m(a,{func:1,ret:-1}))},
hp:function(a,b){return new P.k7(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
ei:function(a,b){H.m(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.f1(null,null,this,a,b)},
cG:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.U===C.j)return a.$1(b)
return P.f2(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.U===C.j)return a.$2(b,c)
return P.kI(null,null,this,a,b,c,d,e,f)},
i5:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
k6:{"^":"q;a,b,c",
$0:function(){return this.a.ei(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k5:{"^":"q:4;a,b",
$0:function(){return this.a.ie(this.b)}},
k7:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hs:function(a,b,c){H.ca(a)
return H.w(H.kS(a,new H.aX(0,0,[b,c])),"$isdT",[b,c],"$asdT")},
hr:function(a,b){return new H.aX(0,0,[a,b])},
ht:function(a,b,c,d){return new P.jR(0,0,[d])},
hf:function(a,b,c){var z,y
if(P.db(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bP()
C.a.h(y,a)
try{P.kE(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.ed(b,H.l2(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cK:function(a,b,c){var z,y,x
if(P.db(a))return b+"..."+c
z=new P.c4(b)
y=$.$get$bP()
C.a.h(y,a)
try{x=z
x.a=P.ed(x.gaI(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaI()+c
y=z.gaI()
return y.charCodeAt(0)==0?y:y},
db:function(a){var z,y
for(z=0;y=$.$get$bP(),z<y.length;++z)if(a===y[z])return!0
return!1},
kE:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.k(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.E();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dX:function(a){var z,y,x
z={}
if(P.db(a))return"{...}"
y=new P.c4("")
try{C.a.h($.$get$bP(),a)
x=y
x.a=x.gaI()+"{"
z.a=!0
J.ft(a,new P.hy(z,y))
z=y
z.a=z.gaI()+"}"}finally{z=$.$get$bP()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaI()
return z.charCodeAt(0)==0?z:z},
jR:{"^":"jL;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eQ(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d8()
this.b=z}return this.d6(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d8()
this.c=y}return this.d6(y,b)}else return this.eI(0,b)},
eI:function(a,b){var z,y,x
H.E(b,H.z(this,0))
z=this.d
if(z==null){z=P.d8()
this.d=z}y=this.d9(b)
x=z[y]
if(x==null)z[y]=[this.bL(b)]
else{if(this.df(x,b)>=0)return!1
x.push(this.bL(b))}return!0},
B:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dk(this.c,b)
else return this.fw(0,b)},
fw:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eX(z,b)
x=this.df(y,b)
if(x<0)return!1
this.ds(y.splice(x,1)[0])
return!0},
d6:function(a,b){H.E(b,H.z(this,0))
if(H.i(a[b],"$isd7")!=null)return!1
a[b]=this.bL(b)
return!0},
dk:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isd7")
if(z==null)return!1
this.ds(z)
delete a[b]
return!0},
d7:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.d7(H.E(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d7()
return z},
ds:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d7()},
d9:function(a){return J.b6(a)&0x3ffffff},
eX:function(a,b){return a[this.d9(b)]},
df:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].a,b))return y
return-1},
p:{
d8:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d7:{"^":"a;a,0b,0c"},
jS:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bn(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.z(this,0))
this.c=z.b
return!0}}},
p:{
eQ:function(a,b,c){var z=new P.jS(a,b,[c])
z.c=a.e
return z}}},
jL:{"^":"ih;"},
cl:{"^":"jT;",$isf:1,$isd:1},
u:{"^":"a;$ti",
gX:function(a){return new H.dV(a,this.gl(a),0,[H.bS(this,a,"u",0)])},
F:function(a,b){return this.j(a,b)},
ii:function(a,b){var z,y,x
z=H.b([],[H.bS(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a_(z,y,this.j(a,y));++y}return z},
cJ:function(a){return this.ii(a,!0)},
i:function(a){return P.cK(a,"[","]")}},
hx:{"^":"ai;"},
hy:{"^":"q:20;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ai:{"^":"a;$ti",
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bS(this,a,"ai",0),H.bS(this,a,"ai",1)]})
for(z=J.bT(this.gaB(a));z.E();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.bl(this.gaB(a))},
i:function(a){return P.dX(a)},
$isa9:1},
ij:{"^":"a;$ti",
i:function(a){return P.cK(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dn("index"))
if(b<0)H.l(P.ap(b,0,null,"index",null))
for(z=P.eQ(this,this.r,H.z(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.h(P.S(b,this,"index",null,y))},
$isf:1},
ih:{"^":"ij;"},
jT:{"^":"a+u;"}}],["","",,P,{"^":"",cF:{"^":"a;$ti"},dA:{"^":"ix;$ti"},fW:{"^":"cF;",
$ascF:function(){return[P.o,[P.d,P.C]]}},j3:{"^":"fW;a"},j4:{"^":"dA;",
hv:function(a,b,c){var z,y,x,w
z=a.length
P.e6(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kp(0,0,x)
if(w.eW(a,b,z)!==z)w.dt(C.i.cj(a,z-1),0)
return C.G.bI(x,0,w.b)},
hu:function(a){return this.hv(a,0,null)},
$asdA:function(){return[P.o,[P.d,P.C]]}},kp:{"^":"a;a,b,c",
dt:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.c(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.c(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.c(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.c(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.c(z,y)
z[y]=128|a&63
return!1}},
eW:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cj(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bg(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dt(w,C.i.bg(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.c(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.c(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.c(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.c(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fY:function(a){var z=J.R(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.bc(a)+"'"},
hu:function(a,b,c,d){var z,y
H.E(b,d)
z=J.hg(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a_(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hv:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gX(a);x.E();)C.a.h(y,H.E(x.gP(x),c))
if(b)return y
return H.w(J.bt(y),"$isd",z,"$asd")},
cY:function(a,b,c){var z,y
z=P.C
H.w(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.e6(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ae()
z=c<y}else z=!0
return H.e5(z?C.a.bI(a,b,c):a)}return P.iA(a,b,c)},
iA:function(a,b,c){var z,y,x
H.w(a,"$isf",[P.C],"$asf")
z=J.bT(a)
for(y=0;y<b;++y)if(!z.E())throw H.h(P.ap(b,0,y,null,null))
x=[]
for(;z.E();)x.push(z.gP(z))
return H.e5(x)},
i7:function(a,b,c){return new H.hj(a,H.hk(a,!1,!0,!1))},
f0:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.C],"$asd")
if(c===C.n){z=$.$get$f_().b
z=z.test(b)}else z=!1
if(z)return b
y=C.x.hu(H.E(b,H.aL(c,"cF",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.i2(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ad(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fY(a)},
j:function(a){return new P.eN(a)},
fk:function(a){H.l7(a)},
a8:{"^":"a;"},
"+bool":0,
aF:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.f.bk(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fM(H.i1(this))
y=P.bU(H.i_(this))
x=P.bU(H.hW(this))
w=P.bU(H.hX(this))
v=P.bU(H.hZ(this))
u=P.bU(H.i0(this))
t=P.fN(H.hY(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fM:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"a1;"},
"+double":0,
bV:{"^":"a;a",
ae:function(a,b){return C.f.ae(this.a,H.i(b,"$isbV").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bV))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fT()
y=this.a
if(y<0)return"-"+new P.bV(0-y).i(0)
x=z.$1(C.f.a6(y,6e7)%60)
w=z.$1(C.f.a6(y,1e6)%60)
v=new P.fS().$1(y%1e6)
return""+C.f.a6(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
p:{
fR:function(a,b,c,d,e,f){return new P.bV(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fS:{"^":"q:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fT:{"^":"q:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a2:{"^":"a;"},
e1:{"^":"a2;",
i:function(a){return"Throw of null."}},
aW:{"^":"a2;a,b,c,d",
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbO()+y+x
if(!this.a)return w
v=this.gbN()
u=P.cg(this.b)
return w+v+": "+H.k(u)},
p:{
cc:function(a,b,c){return new P.aW(!0,a,b,c)},
dn:function(a){return new P.aW(!1,null,a,"Must not be null")}}},
cn:{"^":"aW;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
p:{
c3:function(a,b,c){return new P.cn(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.cn(b,c,!0,a,d,"Invalid value")},
e6:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ap(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ap(b,a,c,"end",f))
return b}return c}}},
h5:{"^":"aW;e,l:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.fq(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
p:{
S:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.bl(b))
return new P.h5(b,z,!0,a,c,"Index out of range")}}},
iZ:{"^":"a2;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
au:function(a){return new P.iZ(a)}}},
iW:{"^":"a2;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eE:function(a){return new P.iW(a)}}},
iu:{"^":"a2;a",
i:function(a){return"Bad state: "+this.a}},
fI:{"^":"a2;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cg(z))+"."},
p:{
bn:function(a){return new P.fI(a)}}},
hR:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa2:1},
ea:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa2:1},
fL:{"^":"a2;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eN:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h3:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bJ(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"a1;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gX(this)
for(y=0;z.E();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dn("index"))
if(b<0)H.l(P.ap(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.E();){x=z.gP(z)
if(b===y)return x;++y}throw H.h(P.S(b,this,"index",null,y))},
i:function(a){return P.hf(this,"(",")")}},
cL:{"^":"a;$ti"},
d:{"^":"a;$ti",$isf:1},
"+List":0,
a9:{"^":"a;$ti"},
J:{"^":"a;",
gW:function(a){return P.a.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gW:function(a){return H.bA(this)},
i:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"a;"},
o:{"^":"a;",$ise2:1},
"+String":0,
c4:{"^":"a;aI:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ed:function(a,b,c){var z=J.bT(b)
if(!z.E())return a
if(c.length===0){do a+=H.k(z.gP(z))
while(z.E())}else{a+=H.k(z.gP(z))
for(;z.E();)a=a+c+H.k(z.gP(z))}return a}}}}],["","",,W,{"^":"",
fv:function(a){var z=document.createElement("a")
return z},
dw:function(a,b){var z=document.createElement("canvas")
return z},
fV:function(a){H.i(a,"$isae")
return"wheel"},
cp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eP:function(a,b,c,d){var z,y
z=W.cp(W.cp(W.cp(W.cp(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f5:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.hp(a,b)},
bX:{"^":"a5;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lq:{"^":"r;0l:length=","%":"AccessibleNodeList"},
lr:{"^":"bX;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ls:{"^":"bX;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fz:{"^":"r;","%":";Blob"},
cE:{"^":"bX;",
cP:function(a,b,c){var z=a.getContext(b,P.kN(c,null))
return z},
$iscE:1,
"%":"HTMLCanvasElement"},
ly:{"^":"O;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lA:{"^":"fK;0l:length=","%":"CSSPerspective"},
bo:{"^":"r;",$isbo:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lB:{"^":"jr;0l:length=",
ep:function(a,b){var z=a.getPropertyValue(this.eM(a,b))
return z==null?"":z},
eM:function(a,b){var z,y
z=$.$get$dB()
y=z[b]
if(typeof y==="string")return y
y=this.fP(a,b)
z[b]=y
return y},
fP:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fO()+b
if(z in a)return z
return b},
gcf:function(a){return a.bottom},
gas:function(a){return a.height},
gaP:function(a){return a.left},
gb9:function(a){return a.right},
gbc:function(a){return a.top},
gau:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fJ:{"^":"a;",
gaP:function(a){return this.ep(a,"left")}},
dC:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fK:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lC:{"^":"dC;0l:length=","%":"CSSTransformValue"},
lD:{"^":"dC;0l:length=","%":"CSSUnparsedValue"},
lE:{"^":"r;0l:length=","%":"DataTransferItemList"},
lF:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
lG:{"^":"jt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.ag,P.a1]]},
$asu:function(){return[[P.ag,P.a1]]},
$isf:1,
$asf:function(){return[[P.ag,P.a1]]},
$isd:1,
$asd:function(){return[[P.ag,P.a1]]},
$asA:function(){return[[P.ag,P.a1]]},
"%":"ClientRectList|DOMRectList"},
fQ:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gau(a))+" x "+H.k(this.gas(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bQ(b,"$isag",[P.a1],"$asag")
if(!z)return!1
z=J.cv(b)
return a.left===z.gaP(b)&&a.top===z.gbc(b)&&this.gau(a)===z.gau(b)&&this.gas(a)===z.gas(b)},
gW:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gau(a)&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF)},
gcf:function(a){return a.bottom},
gas:function(a){return a.height},
gaP:function(a){return a.left},
gb9:function(a){return a.right},
gbc:function(a){return a.top},
gau:function(a){return a.width},
$isag:1,
$asag:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
lH:{"^":"jv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.o]},
$asu:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asA:function(){return[P.o]},
"%":"DOMStringList"},
lI:{"^":"r;0l:length=","%":"DOMTokenList"},
jq:{"^":"cl;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.i(z[b],"$isa5")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.cJ(this)
return new J.ak(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a5]},
$asf:function(){return[W.a5]},
$asd:function(){return[W.a5]}},
a5:{"^":"O;",
gdC:function(a){return new W.jq(a,a.children)},
gdD:function(a){return P.i4(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
$isa5:1,
"%":";Element"},
ah:{"^":"r;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ae:{"^":"r;",
dv:["es",function(a,b,c,d){H.m(c,{func:1,args:[W.ah]})
if(c!=null)this.eJ(a,b,c,!1)}],
eJ:function(a,b,c,d){return a.addEventListener(b,H.bR(H.m(c,{func:1,args:[W.ah]}),1),!1)},
$isae:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eV|eW|eY|eZ"},
bq:{"^":"fz;",$isbq:1,"%":"File"},
lJ:{"^":"jA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bq]},
$asu:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asA:function(){return[W.bq]},
"%":"FileList"},
lK:{"^":"ae;0l:length=","%":"FileWriter"},
lL:{"^":"bX;0l:length=","%":"HTMLFormElement"},
bs:{"^":"r;",$isbs:1,"%":"Gamepad"},
lM:{"^":"r;0l:length=","%":"History"},
lN:{"^":"jN;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.O]},
$asu:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$isd:1,
$asd:function(){return[W.O]},
$asA:function(){return[W.O]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bu:{"^":"d0;",$isbu:1,"%":"KeyboardEvent"},
lR:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
lS:{"^":"r;0l:length=","%":"MediaList"},
lT:{"^":"ae;",
dv:function(a,b,c,d){H.m(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.es(a,b,c,!1)},
"%":"MessagePort"},
lU:{"^":"jU;",
j:function(a,b){return P.aV(a.get(H.W(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.o])
this.H(a,new W.hJ(z))
return z},
gl:function(a){return a.size},
$asai:function(){return[P.o,null]},
$isa9:1,
$asa9:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hJ:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lV:{"^":"jV;",
j:function(a,b){return P.aV(a.get(H.W(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.o])
this.H(a,new W.hK(z))
return z},
gl:function(a){return a.size},
$asai:function(){return[P.o,null]},
$isa9:1,
$asa9:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hK:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"r;",$isbx:1,"%":"MimeType"},
lW:{"^":"jX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asA:function(){return[W.bx]},
"%":"MimeTypeArray"},
ay:{"^":"d0;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jp:{"^":"cl;a",
gX:function(a){var z=this.a.childNodes
return new W.dJ(z,z.length,-1,[H.bS(C.H,z,"A",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asu:function(){return[W.O]},
$asf:function(){return[W.O]},
$asd:function(){return[W.O]}},
O:{"^":"ae;",
i:function(a){var z=a.nodeValue
return z==null?this.eu(a):z},
$isO:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hP:{"^":"jZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.O]},
$asu:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$isd:1,
$asd:function(){return[W.O]},
$asA:function(){return[W.O]},
"%":"NodeList|RadioNodeList"},
bz:{"^":"r;0l:length=",$isbz:1,"%":"Plugin"},
m4:{"^":"k2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$asu:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asA:function(){return[W.bz]},
"%":"PluginArray"},
m6:{"^":"k8;",
j:function(a,b){return P.aV(a.get(H.W(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.o])
this.H(a,new W.id(z))
return z},
gl:function(a){return a.size},
$asai:function(){return[P.o,null]},
$isa9:1,
$asa9:function(){return[P.o,null]},
"%":"RTCStatsReport"},
id:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m7:{"^":"bX;0l:length=","%":"HTMLSelectElement"},
bB:{"^":"ae;",$isbB:1,"%":"SourceBuffer"},
m8:{"^":"eW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asu:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$isd:1,
$asd:function(){return[W.bB]},
$asA:function(){return[W.bB]},
"%":"SourceBufferList"},
bC:{"^":"r;",$isbC:1,"%":"SpeechGrammar"},
m9:{"^":"ka;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bC]},
$asu:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$isd:1,
$asd:function(){return[W.bC]},
$asA:function(){return[W.bC]},
"%":"SpeechGrammarList"},
bD:{"^":"r;0l:length=",$isbD:1,"%":"SpeechRecognitionResult"},
mb:{"^":"kd;",
j:function(a,b){return a.getItem(H.W(b))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaB:function(a){var z=H.b([],[P.o])
this.H(a,new W.iw(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.o,P.o]},
$isa9:1,
$asa9:function(){return[P.o,P.o]},
"%":"Storage"},
iw:{"^":"q:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bE:{"^":"r;",$isbE:1,"%":"CSSStyleSheet|StyleSheet"},
bF:{"^":"ae;",$isbF:1,"%":"TextTrack"},
bG:{"^":"ae;",$isbG:1,"%":"TextTrackCue|VTTCue"},
me:{"^":"kh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bG]},
$asu:function(){return[W.bG]},
$isf:1,
$asf:function(){return[W.bG]},
$isd:1,
$asd:function(){return[W.bG]},
$asA:function(){return[W.bG]},
"%":"TextTrackCueList"},
mf:{"^":"eZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bF]},
$asu:function(){return[W.bF]},
$isf:1,
$asf:function(){return[W.bF]},
$isd:1,
$asd:function(){return[W.bF]},
$asA:function(){return[W.bF]},
"%":"TextTrackList"},
mg:{"^":"r;0l:length=","%":"TimeRanges"},
bH:{"^":"r;",$isbH:1,"%":"Touch"},
bd:{"^":"d0;",$isbd:1,"%":"TouchEvent"},
mh:{"^":"km;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bH]},
$asu:function(){return[W.bH]},
$isf:1,
$asf:function(){return[W.bH]},
$isd:1,
$asd:function(){return[W.bH]},
$asA:function(){return[W.bH]},
"%":"TouchList"},
mi:{"^":"r;0l:length=","%":"TrackDefaultList"},
d0:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mk:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
ml:{"^":"ae;0l:length=","%":"VideoTrackList"},
bJ:{"^":"ay;",
ghy:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.au("deltaY is not supported"))},
ghx:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.au("deltaX is not supported"))},
$isbJ:1,
"%":"WheelEvent"},
ji:{"^":"ae;",
fC:function(a,b){return a.requestAnimationFrame(H.bR(H.m(b,{func:1,ret:-1,args:[P.a1]}),1))},
eV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mq:{"^":"ks;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asA:function(){return[W.bo]},
"%":"CSSRuleList"},
mr:{"^":"fQ;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bQ(b,"$isag",[P.a1],"$asag")
if(!z)return!1
z=J.cv(b)
return a.left===z.gaP(b)&&a.top===z.gbc(b)&&a.width===z.gau(b)&&a.height===z.gas(b)},
gW:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gas:function(a){return a.height},
gau:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mt:{"^":"ku;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$asu:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asA:function(){return[W.bs]},
"%":"GamepadList"},
mu:{"^":"kw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.O]},
$asu:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$isd:1,
$asd:function(){return[W.O]},
$asA:function(){return[W.O]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mv:{"^":"ky;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bD]},
$asu:function(){return[W.bD]},
$isf:1,
$asf:function(){return[W.bD]},
$isd:1,
$asd:function(){return[W.bD]},
$asA:function(){return[W.bD]},
"%":"SpeechRecognitionResultList"},
mw:{"^":"kA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bE]},
$asu:function(){return[W.bE]},
$isf:1,
$asf:function(){return[W.bE]},
$isd:1,
$asd:function(){return[W.bE]},
$asA:function(){return[W.bE]},
"%":"StyleSheetList"},
jw:{"^":"cX;a,b,c,$ti",
hM:function(a,b,c,d){var z=H.z(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
ms:{"^":"jw;a,b,c,$ti"},
jx:{"^":"ec;a,b,c,d,e,$ti",
fU:function(){var z=this.d
if(z!=null&&this.a<=0)J.fs(this.b,this.c,z,!1)},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.f5(new W.jy(c),W.ah)
z=new W.jx(0,a,b,z,!1,[e])
z.fU()
return z}}},
jy:{"^":"q:7;a",
$1:function(a){return this.a.$1(H.i(a,"$isah"))}},
A:{"^":"a;$ti",
gX:function(a){return new W.dJ(a,this.gl(a),-1,[H.bS(this,a,"A",0)])}},
dJ:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fr(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
jr:{"^":"r+fJ;"},
js:{"^":"r+u;"},
jt:{"^":"js+A;"},
ju:{"^":"r+u;"},
jv:{"^":"ju+A;"},
jz:{"^":"r+u;"},
jA:{"^":"jz+A;"},
jM:{"^":"r+u;"},
jN:{"^":"jM+A;"},
jU:{"^":"r+ai;"},
jV:{"^":"r+ai;"},
jW:{"^":"r+u;"},
jX:{"^":"jW+A;"},
jY:{"^":"r+u;"},
jZ:{"^":"jY+A;"},
k1:{"^":"r+u;"},
k2:{"^":"k1+A;"},
k8:{"^":"r+ai;"},
eV:{"^":"ae+u;"},
eW:{"^":"eV+A;"},
k9:{"^":"r+u;"},
ka:{"^":"k9+A;"},
kd:{"^":"r+ai;"},
kg:{"^":"r+u;"},
kh:{"^":"kg+A;"},
eY:{"^":"ae+u;"},
eZ:{"^":"eY+A;"},
kl:{"^":"r+u;"},
km:{"^":"kl+A;"},
kr:{"^":"r+u;"},
ks:{"^":"kr+A;"},
kt:{"^":"r+u;"},
ku:{"^":"kt+A;"},
kv:{"^":"r+u;"},
kw:{"^":"kv+A;"},
kx:{"^":"r+u;"},
ky:{"^":"kx+A;"},
kz:{"^":"r+u;"},
kA:{"^":"kz+A;"}}],["","",,P,{"^":"",
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.hr(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.W(y[w])
z.a_(0,v,a[v])}return z},
kN:function(a,b){var z={}
a.H(0,new P.kO(z))
return z},
dI:function(){var z=$.dH
if(z==null){z=J.cA(window.navigator.userAgent,"Opera",0)
$.dH=z}return z},
fO:function(){var z,y
z=$.dE
if(z!=null)return z
y=$.dF
if(y==null){y=J.cA(window.navigator.userAgent,"Firefox",0)
$.dF=y}if(y)z="-moz-"
else{y=$.dG
if(y==null){y=!P.dI()&&J.cA(window.navigator.userAgent,"Trident/",0)
$.dG=y}if(y)z="-ms-"
else z=P.dI()?"-o-":"-webkit-"}$.dE=z
return z},
kO:{"^":"q:20;a",
$2:function(a,b){this.a[a]=b}},
h0:{"^":"cl;a,b",
gbR:function(){var z,y,x
z=this.b
y=H.aL(z,"u",0)
x=W.a5
return new H.hz(new H.jg(z,H.m(new P.h1(),{func:1,ret:P.a8,args:[y]}),[y]),H.m(new P.h2(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bl(this.gbR().a)},
j:function(a,b){var z=this.gbR()
return z.b.$1(J.dm(z.a,b))},
gX:function(a){var z=P.hv(this.gbR(),!1,W.a5)
return new J.ak(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a5]},
$asf:function(){return[W.a5]},
$asd:function(){return[W.a5]}},
h1:{"^":"q:25;",
$1:function(a){return!!J.R(H.i(a,"$isO")).$isa5}},
h2:{"^":"q:26;",
$1:function(a){return H.e(H.i(a,"$isO"),"$isa5")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k3:{"^":"a;$ti",
gb9:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.E(z+this.c,H.z(this,0))},
gcf:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.E(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bQ(b,"$isag",[P.a1],"$asag")
if(!z)return!1
z=this.a
y=J.cv(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbc(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.E(z+this.c,w)===y.gb9(b)){if(typeof x!=="number")return x.C()
z=H.E(x+this.d,w)===y.gcf(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.b6(z)
x=this.b
w=J.b6(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.E(x+this.d,v)
return P.jO(P.cq(P.cq(P.cq(P.cq(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ag:{"^":"k3;aP:a>,bc:b>,au:c>,as:d>,$ti",p:{
i4:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ae()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.ae()
if(d<0)y=-d*0
else y=d
return new P.ag(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",c0:{"^":"r;",$isc0:1,"%":"SVGLength"},lQ:{"^":"jQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asu:function(){return[P.c0]},
$isf:1,
$asf:function(){return[P.c0]},
$isd:1,
$asd:function(){return[P.c0]},
$asA:function(){return[P.c0]},
"%":"SVGLengthList"},c2:{"^":"r;",$isc2:1,"%":"SVGNumber"},m2:{"^":"k0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asu:function(){return[P.c2]},
$isf:1,
$asf:function(){return[P.c2]},
$isd:1,
$asd:function(){return[P.c2]},
$asA:function(){return[P.c2]},
"%":"SVGNumberList"},m5:{"^":"r;0l:length=","%":"SVGPointList"},mc:{"^":"kf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asu:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asA:function(){return[P.o]},
"%":"SVGStringList"},md:{"^":"a5;",
gdC:function(a){return new P.h0(a,new W.jp(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},c6:{"^":"r;",$isc6:1,"%":"SVGTransform"},mj:{"^":"ko;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asu:function(){return[P.c6]},
$isf:1,
$asf:function(){return[P.c6]},
$isd:1,
$asd:function(){return[P.c6]},
$asA:function(){return[P.c6]},
"%":"SVGTransformList"},jP:{"^":"r+u;"},jQ:{"^":"jP+A;"},k_:{"^":"r+u;"},k0:{"^":"k_+A;"},ke:{"^":"r+u;"},kf:{"^":"ke+A;"},kn:{"^":"r+u;"},ko:{"^":"kn+A;"}}],["","",,P,{"^":"",lt:{"^":"r;0l:length=","%":"AudioBuffer"},lu:{"^":"jo;",
j:function(a,b){return P.aV(a.get(H.W(b)))},
H:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.o])
this.H(a,new P.fx(z))
return z},
gl:function(a){return a.size},
$asai:function(){return[P.o,null]},
$isa9:1,
$asa9:function(){return[P.o,null]},
"%":"AudioParamMap"},fx:{"^":"q:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},lv:{"^":"ae;0l:length=","%":"AudioTrackList"},fy:{"^":"ae;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m3:{"^":"fy;0l:length=","%":"OfflineAudioContext"},jo:{"^":"r+ai;"}}],["","",,P,{"^":"",e9:{"^":"r;",$ise9:1,"%":"WebGLRenderingContext"},iU:{"^":"r;",$isiU:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ma:{"^":"kc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
F:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.a9,,,]]},
$isf:1,
$asf:function(){return[[P.a9,,,]]},
$isd:1,
$asd:function(){return[[P.a9,,,]]},
$asA:function(){return[[P.a9,,,]]},
"%":"SQLResultSetRowList"},kb:{"^":"r+u;"},kc:{"^":"kb+A;"}}],["","",,O,{"^":"",am:{"^":"a;0a,0b,0c,0d,$ti",
be:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cR:function(a,b,c){var z=H.aL(this,"am",0)
H.m(b,{func:1,ret:P.a8,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.C,[P.f,z]]}
H.m(a,z)
H.m(c,z)
this.b=b
this.c=a
this.d=c},
aT:function(a,b){return this.cR(a,null,b)},
di:function(a){var z
H.w(a,"$isf",[H.aL(this,"am",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dg:function(a,b){var z
H.w(b,"$isf",[H.aL(this,"am",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.z(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aL(this,"am",0)
H.E(b,z)
z=[z]
if(this.di(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dg(x,H.b([b],z))}},
c8:function(a,b){var z,y
H.w(b,"$isf",[H.aL(this,"am",0)],"$asf")
if(this.di(b)){z=this.a
y=z.length
C.a.c8(z,b)
this.dg(y,b)}},
$isf:1,
p:{
cG:function(a){var z=new O.am([a])
z.be(a)
return z}}},cR:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
eB:function(a){var z=this.b
if(!(z==null))z.u(a)},
aF:function(){return this.eB(null)},
gI:function(a){var z=this.a
if(z.length>0)return C.a.gcv(z)
else return V.bv()},
ef:function(a){var z=this.a
if(a==null)C.a.h(z,V.bv())
else C.a.h(z,a)
this.aF()},
cD:function(){var z=this.a
if(z.length>0){z.pop()
this.aF()}}}}],["","",,E,{"^":"",cB:{"^":"a;"},aM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a1:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d5:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
if(y.f==null)y.d5()}},
sa0:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().B(0,this.geb())
y=this.c
if(y!=null)y.gt().h(0,this.geb())
x=new D.G("shape",z,this.c,this,[F.aj])
x.b=!0
this.a7(x)}},
sa3:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gt().B(0,this.gec())
y=this.f
this.f=a
if(a!=null)a.gt().h(0,this.gec())
this.d5()
x=new D.G("technique",y,this.f,this,[O.c5])
x.b=!0
this.a7(x)}},
sT:function(a){var z,y
if(!J.B(this.r,a)){z=this.r
if(z!=null)z.gt().B(0,this.gea())
if(a!=null)a.gt().h(0,this.gea())
this.r=a
y=new D.G("mover",z,a,this,[U.aa])
y.b=!0
this.a7(y)}},
a8:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aR(0,b,this):null
if(!J.B(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.ax])
w.b=!0
this.a7(w)}z=this.f
if(z!=null)z.a8(0,b)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a8(0,b)},
am:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gI(z))
else C.a.h(z.a,y.k(0,z.gI(z)))
z.aF()
a.eg(this.f)
z=a.dy
x=(z&&C.a).gcv(z)
if(x!=null&&this.d!=null)x.eh(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();)z.d.am(a)
a.ed()
a.dx.cD()},
gt:function(){var z=this.z
if(z==null){z=D.N()
this.z=z}return z},
a7:function(a){var z=this.z
if(!(z==null))z.u(a)},
L:function(){return this.a7(null)},
hU:[function(a){H.i(a,"$ist")
this.e=null
this.a7(a)},function(){return this.hU(null)},"j5","$1","$0","geb",0,2,0],
hV:[function(a){this.a7(H.i(a,"$ist"))},function(){return this.hV(null)},"j6","$1","$0","gec",0,2,0],
hT:[function(a){this.a7(H.i(a,"$ist"))},function(){return this.hT(null)},"j4","$1","$0","gea",0,2,0],
hR:[function(a){this.a7(H.i(a,"$ist"))},function(){return this.hR(null)},"j2","$1","$0","ge9",0,2,0],
j1:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isf",[E.aM],"$asf")
for(z=b.length,y=this.ge9(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.bW()
t.d=0
u.sa1(t)}t=u.ga1()
t.toString
H.m(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.L()},"$2","ghQ",8,0,9],
j3:[function(a,b){var z,y,x,w,v
H.w(b,"$isf",[E.aM],"$asf")
for(z=b.length,y=this.ge9(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.ga1()==null){v=new D.bW()
v.d=0
w.sa1(v)}w.ga1().B(0,y)}}this.L()},"$2","ghS",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaO:1,
p:{
an:function(a,b,c,d,e,f){var z,y
z=new E.aM()
z.a=d
z.b=!0
y=O.cG(E.aM)
z.y=y
y.aT(z.ghQ(),z.ghS())
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
z.sa0(0,e)
z.sa3(f)
z.sT(c)
return z}}},i8:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ey:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aF(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cR()
y=[V.ax]
z.a=H.b([],y)
z.gt().h(0,new E.ia(this))
this.cy=z
z=new O.cR()
z.a=H.b([],y)
z.gt().h(0,new E.ib(this))
this.db=z
z=new O.cR()
z.a=H.b([],y)
z.gt().h(0,new E.ic(this))
this.dx=z
z=H.b([],[O.c5])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.o,A.cW])},
gi4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gI(z)
y=this.db
y=z.k(0,y.gI(y))
this.z=y
z=y}return z},
gee:function(){var z,y
z=this.ch
if(z==null){z=this.gi4()
y=this.dx
y=z.k(0,y.gI(y))
this.ch=y
z=y}return z},
gel:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gI(z)
y=this.dx
y=z.k(0,y.gI(y))
this.cx=y
z=y}return z},
eg:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcv(z):a;(z&&C.a).h(z,y)},
ed:function(){var z=this.dy
if(z.length>1)z.pop()},
dz:function(a){var z=a.b
if(z.length===0)throw H.h(P.j("May not cache a shader with no name."))
if(this.fr.dE(0,z))throw H.h(P.j('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a_(0,z,a)},
p:{
i9:function(a,b){var z=new E.i8(a,b)
z.ey(a,b)
return z}}},ia:{"^":"q:1;a",
$1:function(a){var z
H.i(a,"$ist")
z=this.a
z.z=null
z.ch=null}},ib:{"^":"q:1;a",
$1:function(a){var z
H.i(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ic:{"^":"q:1;a",
$1:function(a){var z
H.i(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},iG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a1:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
eD:[function(a){var z
H.i(a,"$ist")
z=this.x
if(!(z==null))z.u(a)
this.ia()},function(){return this.eD(null)},"eC","$1","$0","gd1",0,2,0],
sbH:function(a){var z=this.d
if(z!==a){if(z!=null)z.gt().B(0,this.gd1())
this.d=a
a.gt().h(0,this.gd1())
this.eC()}},
dm:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.p(z)
x=C.h.e2(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.e2(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ei(C.l,this.gi9())}},
ia:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.iI(this),{func:1,ret:-1,args:[P.a1]})
C.v.eV(z)
C.v.fC(z,W.f5(y,P.a1))}},"$0","gi9",0,0,4],
i8:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dm()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.fR(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aF()
w=x.db
C.a.sl(w.a,0)
w.aF()
w=x.dx
C.a.sl(w.a,0)
w.aF()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.am(this.e)}}catch(v){z=H.b5(v)
y=H.bj(v)
P.fk("Error: "+H.k(z))
P.fk("Stack: "+H.k(y))
throw H.h(z)}},
p:{
cZ:function(a,b,c,d,e){var z=document.getElementById(a)
if(z==null)throw H.h(P.j("Failed to find an element with the identifier, "+a+"."))
return E.iH(z,!0,!0,!0,!1)},
iH:function(a,b,c,d,e){var z,y,x,w
z=J.R(a)
if(!!z.$iscE)return E.eh(a,!0,!0,!0,!1)
y=W.dw(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdC(a).h(0,y)
w=E.eh(y,!0,!0,!0,!1)
w.a=a
return w},
eh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iG()
y=P.hs(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.cP(a,"webgl",y)
x=H.i(x==null?C.k.cP(a,"experimental-webgl",y):x,"$ise9")
if(x==null)H.l(P.j("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.i9(x,a)
w=new T.iC(x)
w.b=H.a0(x.getParameter(3379))
w.c=H.a0(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.j_(a)
v=new X.hm()
v.c=new X.aI(!1,!1,!1)
v.d=P.ht(null,null,null,P.C)
w.b=v
v=new X.hL(w)
v.f=0
v.r=new V.F(0,0)
v.x=new V.F(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hw(w)
v.r=0
v.x=new V.F(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iK(w)
v.e=0
v.f=new V.F(0,0)
v.r=new V.F(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.ec,P.a]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.m(w.gfa(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.m(w.gfd(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.m(w.gf7(),q),!1,r))
v=w.z
p=W.bu
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.m(w.gff(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.m(w.gfe(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.m(w.gfi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.m(w.gfk(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.m(w.gfj(),s),!1,t))
p=w.z
o=W.bJ;(p&&C.a).h(p,W.a3(a,H.W(W.fV(a)),H.m(w.gfl(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.m(w.gfb(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.m(w.gfc(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.m(w.gfm(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.m(w.gfv(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.m(w.gft(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.m(w.gfu(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aF(Date.now(),!1)
z.cy=0
z.dm()
return z}}},iI:{"^":"q:29;a",
$1:function(a){var z
H.l6(a)
z=this.a
if(z.ch){z.ch=!1
z.i8()}}}}],["","",,Z,{"^":"",eK:{"^":"a;a,b",p:{
d5:function(a,b,c){var z
H.w(c,"$isd",[P.C],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bM(c)),35044)
a.bindBuffer(b,null)
return new Z.eK(b,z)}}},ds:{"^":"cB;a,b,c,d,e",
ap:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.b5(y)
x=P.j('Failed to bind buffer attribute "'+J.ad(this.a)+'": '+H.k(z))
throw H.h(x)}},
i:function(a){return"["+J.ad(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},eL:{"^":"a;a",$islw:1},ce:{"^":"a;a,0b,c,d",
ab:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ap:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ap(a)},
cK:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
am:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
hW:function(a){this.ap(a)
this.am(a)
this.cK(a)},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ad(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$isiB:1},dt:{"^":"a;0a",$isiB:1},cj:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bc(this.c)+"'")+"]"}},b_:{"^":"a;a",
gcU:function(a){var z,y
z=this.a
y=(z&$.$get$aD().a)!==0?3:0
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=4
if((z&$.$get$be().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
hn:function(a){var z,y,x
z=$.$get$aD()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eJ()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.o])
y=this.a
if((y&$.$get$aD().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$be().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
p:{
av:function(a){return new Z.b_(a)}}}}],["","",,D,{"^":"",dx:{"^":"a;"},bW:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.t]}
H.m(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
B:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.t]})
z=this.a
z=z==null?null:C.a.aY(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).B(z,b)||!1}else y=!1
return y},
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.H(y,new D.fZ(z))
return!0},
ib:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.u(y)}}},
at:function(a){return this.ib(a,!0,!1)},
p:{
N:function(){var z=new D.bW()
z.d=0
return z}}},fZ:{"^":"q:43;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
if(z.b)a.$1(z)}},t:{"^":"a;a,0b"},bY:{"^":"t;c,d,a,0b,$ti"},bZ:{"^":"t;c,d,a,0b,$ti"},G:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",du:{"^":"a;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
p:{"^":"lx<"}},dR:{"^":"a;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},dS:{"^":"t;c,a,0b"},hm:{"^":"a;0a,0b,0c,0d",
i1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dS(a,this)
y.b=!0
return z.u(y)},
hY:function(a){var z,y
this.c=a.b
this.d.B(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dS(a,this)
y.b=!0
return z.u(y)}},dW:{"^":"cm;x,y,c,d,e,a,0b"},hw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ax:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.C(0,new V.F(x*w,v*u))
u=this.a.gaO()
s=new X.aN(a,new V.F(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cC:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.ax(a,b))
return!0},
b6:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.en()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.ax(a,b))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.ax(a,b))
return!0},
i2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaO()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cT(new V.P(v*u,t*s),y,x,new P.aF(w,!1),this)
w.b=!0
z.u(w)
return!0},
fh:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aF(Date.now(),!1)
y=this.f
x=new X.dW(c,a,this.a.gaO(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.F(0,0)}},aI:{"^":"a;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aI))return!1
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
return z+(this.c?"Shift+":"")}},aN:{"^":"cm;x,y,z,Q,ch,c,d,e,a,0b"},hL:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bP:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gaO()
x=new X.aN(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cC:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bP(a,b,!0))
return!0},
b6:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.en()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bP(a,b,!0))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bP(a,b,!1))
return!0},
i3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaO()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cT(new V.P(w*v,u*t),y,b,new P.aF(x,!1),this)
x.b=!0
z.u(x)
return!0},
gb0:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
gaE:function(){var z=this.c
if(z==null){z=D.N()
this.c=z}return z},
gb4:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z}},cT:{"^":"cm;x,c,d,e,a,0b"},cm:{"^":"t;"},el:{"^":"cm;x,y,z,Q,ch,c,d,e,a,0b"},iK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ax:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.F],"$asd")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.F(0,0)
x=this.a.gaO()
w=new X.el(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i0:function(a){var z
H.w(a,"$isd",[V.F],"$asd")
z=this.b
if(z==null)return!1
z.u(this.ax(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$isd",[V.F],"$asd")
z=this.c
if(z==null)return!1
z.u(this.ax(a,!0))
return!0},
i_:function(a){var z
H.w(a,"$isd",[V.F],"$asd")
z=this.d
if(z==null)return!1
z.u(this.ax(a,!1))
return!0}},j_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaO:function(){var z=this.a
return V.e8(0,0,(z&&C.k).gdD(z).c,C.k.gdD(z).d)},
dd:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dR(z,new X.aI(y,a.altKey,a.shiftKey))},
aL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
c4:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
ay:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.F(y-w,x-v)},
aV:function(a){return new V.P(a.movementX,a.movementY)},
bY:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.F])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.h.an(u.pageX)
C.h.an(u.pageY)
s=z.left
C.h.an(u.pageX)
C.a.h(y,new V.F(t-s,C.h.an(u.pageY)-z.top))}return y},
av:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.du(z,new X.aI(y,a.altKey,a.shiftKey))},
bS:function(a){var z,y,x,w,v,u
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
iC:[function(a){this.f=!0},"$1","gfd",4,0,7],
iw:[function(a){this.f=!1},"$1","gf7",4,0,7],
iz:[function(a){H.i(a,"$isay")
if(this.f&&this.bS(a))a.preventDefault()},"$1","gfa",4,0,6],
iE:[function(a){var z
H.i(a,"$isbu")
if(!this.f)return
z=this.dd(a)
if(this.b.i1(z))a.preventDefault()},"$1","gff",4,0,16],
iD:[function(a){var z
H.i(a,"$isbu")
if(!this.f)return
z=this.dd(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfe",4,0,16],
iG:[function(a){var z,y,x,w
H.i(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aL(a)
if(this.x){y=this.av(a)
x=this.aV(a)
if(this.d.cC(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.av(a)
w=this.ay(a)
if(this.c.cC(y,w))a.preventDefault()},"$1","gfi",4,0,6],
iI:[function(a){var z,y,x
H.i(a,"$isay")
this.aL(a)
z=this.av(a)
if(this.x){y=this.aV(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.b6(z,x))a.preventDefault()},"$1","gfk",4,0,6],
iB:[function(a){var z,y,x
H.i(a,"$isay")
if(!this.bS(a)){this.aL(a)
z=this.av(a)
if(this.x){y=this.aV(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.b6(z,x))a.preventDefault()}},"$1","gfc",4,0,6],
iH:[function(a){var z,y,x
H.i(a,"$isay")
this.aL(a)
z=this.av(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfj",4,0,6],
iA:[function(a){var z,y,x
H.i(a,"$isay")
if(!this.bS(a)){this.aL(a)
z=this.av(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","gfb",4,0,6],
iJ:[function(a){var z,y
H.i(a,"$isbJ")
this.aL(a)
z=new V.P((a&&C.u).ghx(a),C.u.ghy(a)).n(0,180)
if(this.x){if(this.d.i2(z))a.preventDefault()
return}if(this.r)return
y=this.ay(a)
if(this.c.i3(z,y))a.preventDefault()},"$1","gfl",4,0,32],
iK:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.av(this.y)
v=this.ay(this.y)
this.d.fh(w,v,x)}},"$1","gfm",4,0,7],
iS:[function(a){var z
H.i(a,"$isbd")
this.a.focus()
this.f=!0
this.c4(a)
z=this.bY(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfv",4,0,11],
iQ:[function(a){var z
H.i(a,"$isbd")
this.c4(a)
z=this.bY(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gft",4,0,11],
iR:[function(a){var z
H.i(a,"$isbd")
this.c4(a)
z=this.bY(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfu",4,0,11]}}],["","",,D,{"^":"",fP:{"^":"a;",$isa_:1,$isaO:1},a_:{"^":"a;",$isaO:1},hn:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.N()
this.Q=z}return z},
d2:function(a){var z=this.Q
if(!(z==null))z.u(a)},
fg:[function(a){var z=this.ch
if(!(z==null))z.u(a)},function(){return this.fg(null)},"iF","$1","$0","gdh",0,2,0],
iL:[function(a){var z,y,x
H.w(a,"$isf",[D.a_],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.eR(x))return!1}return!0},"$1","gfn",4,0,33],
it:[function(a,b){var z,y,x,w,v
z=D.a_
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gdh(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.i(b[w],"$isa_")
v.gt().h(0,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.d2(z)},"$2","gf4",8,0,17],
iN:[function(a,b){var z,y,x,w,v
z=D.a_
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gdh(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.i(b[w],"$isa_")
v.gt().B(0,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.d2(z)},"$2","gfp",8,0,17],
eR:function(a){var z=C.a.aY(this.e,a)
return z},
$asf:function(){return[D.a_]},
$asam:function(){return[D.a_]}},hV:{"^":"a;",$isa_:1,$isaO:1},it:{"^":"a;",$isa_:1,$isaO:1},iD:{"^":"a;",$isa_:1,$isaO:1},iE:{"^":"a;",$isa_:1,$isaO:1},iF:{"^":"a;",$isa_:1,$isaO:1}}],["","",,V,{"^":"",
lz:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hI",8,0,34],
lp:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.eq(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.ad("null",c)
return C.i.ad(C.h.ij($.n.$2(a,0)?0:a,b),c+b+1)},
bi:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.v],"$asd")
z=H.b([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.a_(z,u,C.i.ad(z[u],x))}return z},
Z:{"^":"a;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
I:{"^":"a;a,b,c,d",
cJ:function(a){return H.b([this.a,this.b,this.c,this.d],[P.v])},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
e_:{"^":"a;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.bi(H.b([this.a,this.d,this.r],z),3,0)
x=V.bi(H.b([this.b,this.e,this.x],z),3,0)
w=V.bi(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.c(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.c(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.c(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.c(y,1)
s=" "+y[1]+", "
if(1>=u)return H.c(x,1)
s=s+x[1]+", "
if(1>=t)return H.c(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.c(y,2)
z=" "+y[2]+", "
if(2>=u)return H.c(x,2)
z=z+x[2]+", "
if(2>=t)return H.c(w,2)
return s+(z+w[2]+"]")}},
ax:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
e5:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.bv()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.p(s)
r=a7.b
if(typeof r!=="number")return H.p(r)
q=a7.f
if(typeof q!=="number")return H.p(q)
p=a7.z
if(typeof p!=="number")return H.p(p)
o=a7.cy
if(typeof o!=="number")return H.p(o)
n=a7.c
if(typeof n!=="number")return H.p(n)
m=a7.r
if(typeof m!=="number")return H.p(m)
l=a7.Q
if(typeof l!=="number")return H.p(l)
k=a7.db
if(typeof k!=="number")return H.p(k)
j=a7.d
if(typeof j!=="number")return H.p(j)
i=a7.x
if(typeof i!=="number")return H.p(i)
h=a7.ch
if(typeof h!=="number")return H.p(h)
g=a7.dx
if(typeof g!=="number")return H.p(g)
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
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ek:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gai(a)
if(typeof z!=="number")return z.k()
y=C.h.k(z,y)
z=this.b
x=a.gaj(a)
if(typeof z!=="number")return z.k()
x=C.h.k(z,x)
z=this.c
w=a.gak()
if(typeof z!=="number")return z.k()
w=C.h.k(z,w)
z=this.e
v=a.gai(a)
if(typeof z!=="number")return z.k()
v=C.h.k(z,v)
z=this.f
u=a.gaj(a)
if(typeof z!=="number")return z.k()
u=C.h.k(z,u)
z=this.r
t=a.gak()
if(typeof z!=="number")return z.k()
t=C.h.k(z,t)
z=this.y
s=a.gai(a)
if(typeof z!=="number")return z.k()
s=C.h.k(z,s)
z=this.z
r=a.gaj(a)
if(typeof z!=="number")return z.k()
r=C.h.k(z,r)
z=this.Q
q=a.gak()
if(typeof z!=="number")return z.k()
return new V.y(y+x+w,v+u+t,s+r+C.h.k(z,q))},
bd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.Y(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
e3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.bi(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bi(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bi(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bi(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.c(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.c(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.c(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.c(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.c(y,1)
q=q+y[1]+", "
if(1>=t)return H.c(x,1)
q=q+x[1]+", "
if(1>=s)return H.c(w,1)
q=q+w[1]+", "
if(1>=r)return H.c(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.c(y,2)
u=u+y[2]+", "
if(2>=t)return H.c(x,2)
u=u+x[2]+", "
if(2>=s)return H.c(w,2)
u=u+w[2]+", "
if(2>=r)return H.c(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.c(y,3)
q=q+y[3]+", "
if(3>=t)return H.c(x,3)
q=q+x[3]+", "
if(3>=s)return H.c(w,3)
q=q+w[3]+", "
if(3>=r)return H.c(v,3)
return u+(q+v[3]+"]")},
J:function(){return this.e3("",3,0)},
A:function(a){return this.e3(a,3,0)},
p:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bv:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
a6:function(a,b,c){return V.aH(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ba:function(a,b,c,d){return V.aH(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bw:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aH(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
cS:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aH(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
F:{"^":"a;a,b",
C:function(a,b){return new V.F(this.a+b.a,this.b+b.b)},
G:function(a,b){return new V.F(this.a-b.a,this.b-b.b)},
n:function(a,b){if($.n.$2(b,0))return new V.F(0,0)
return new V.F(this.a/b,this.b/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
Y:{"^":"a;a,b,c",
C:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
n:function(a,b){if($.n.$2(b,0))return new V.Y(0,0,0)
return new V.Y(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aP:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
e7:{"^":"a;a,b,c,d",
gZ:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
p:{
e8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)}}},
P:{"^":"a;a,b",
e7:[function(a){return Math.sqrt(this.w(this))},"$0","gl",1,0,10],
w:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.P(z*b,y*b)},
n:function(a,b){var z,y
if($.n.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.P(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
y:{"^":"a;a,b,c",
e7:[function(a){return Math.sqrt(this.w(this))},"$0","gl",1,0,10],
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cw:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.y(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aZ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.y(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.y(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
n:function(a,b){if($.n.$2(b,0))return new V.y(0,0,0)
return new V.y(this.a/b,this.b/b,this.c/b)},
e6:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
c7:{"^":"a;a,b,c,d",
e7:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gl",1,0,10],
n:function(a,b){if($.n.$2(b,0))return new V.c7(0,0,0,0)
return new V.c7(this.a/b,this.b/b,this.c/b,this.d/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c7))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}}}],["","",,U,{"^":"",fG:{"^":"dx;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.lp(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
N:function(a){var z=this.y
if(!(z==null))z.u(a)},
scL:function(a,b){},
scz:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.G("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.N(z)}},
scB:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.G("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.N(z)}},
sY:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.v])
z.b=!0
this.N(z)}},
scA:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.N(z)}},
sO:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.v])
z.b=!0
this.N(z)}},
scn:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.v])
z.b=!0
this.N(z)}},
a8:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sO(y)}},
p:{
cH:function(){var z=new U.fG()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dz:{"^":"aa;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
sI:function(a,b){var z,y,x
if(b==null)b=V.bv()
if(!J.B(this.a,b)){z=this.a
this.a=b
y=new D.G("matrix",z,b,this,[V.ax])
y.b=!0
x=this.b
if(!(x==null))x.u(y)}},
aR:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
return J.B(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
M:function(a){var z=new U.dz()
z.sI(0,a)
return z}}},dK:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
N:[function(a){var z
H.i(a,"$ist")
z=this.e
if(!(z==null))z.u(a)},function(){return this.N(null)},"af","$1","$0","gaK",0,2,0],
il:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.aa
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.N(z)},"$2","geE",8,0,18],
iM:[function(a,b){var z,y,x,w,v
z=U.aa
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaK(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gt().B(0,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gfo",8,0,18],
aR:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ak(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aR(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bv():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dK))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.B(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.aa]},
$asam:function(){return[U.aa]},
$isaa:1,
p:{
aG:function(a){var z=new U.dK()
z.be(U.aa)
z.aT(z.geE(),z.gfo())
z.e=null
z.f=V.bv()
z.r=0
return z}}},aa:{"^":"dx;"},j0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.N()
this.cy=z}return z},
N:[function(a){var z
H.i(a,"$ist")
z=this.cy
if(!(z==null))z.u(a)},function(){return this.N(null)},"af","$1","$0","gaK",0,2,0],
aW:function(a){if(this.a!=null)return!1
this.a=a
a.c.gb0().h(0,this.gbT())
this.a.c.gb4().h(0,this.gbU())
this.a.c.gaE().h(0,this.gbV())
return!0},
f0:[function(a){H.i(a,"$ist")
if(!J.B(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbT",4,0,2],
f1:[function(a){var z,y,x,w,v,u,t
a=H.e(H.i(a,"$ist"),"$isaN")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.w(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.P(y.a,y.b).k(0,2).n(0,z.gZ())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sO(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.P(x.a,x.b).k(0,2).n(0,z.gZ())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
this.b.sO(0)
y=y.G(0,a.z)
this.Q=new V.P(y.a,y.b).k(0,2).n(0,z.gZ())}this.af()},"$1","gbU",4,0,2],
f2:[function(a){var z,y,x
H.i(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.w(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sO(y*10*x)
this.af()}},"$1","gbV",4,0,2],
aR:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.ch=y
x=b.y
this.b.a8(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaa:1},j1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.N()
this.fx=z}return z},
N:[function(a){var z
H.i(a,"$ist")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.N(null)},"af","$1","$0","gaK",0,2,0],
aW:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gb0().h(0,this.gbT())
this.a.c.gb4().h(0,this.gbU())
this.a.c.gaE().h(0,this.gbV())
z=this.a.d
y=z.f
if(y==null){y=D.N()
z.f=y
z=y}else z=y
z.h(0,this.geY())
z=this.a.d
y=z.d
if(y==null){y=D.N()
z.d=y
z=y}else z=y
z.h(0,this.geZ())
z=this.a.e
y=z.b
if(y==null){y=D.N()
z.b=y
z=y}else z=y
z.h(0,this.gfT())
z=this.a.e
y=z.d
if(y==null){y=D.N()
z.d=y
z=y}else z=y
z.h(0,this.gfS())
z=this.a.e
y=z.c
if(y==null){y=D.N()
z.c=y
z=y}else z=y
z.h(0,this.gfR())
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.P(z,y)},
f0:[function(a){a=H.e(H.i(a,"$ist"),"$isaN")
if(!J.B(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbT",4,0,2],
f1:[function(a){var z,y,x,w,v,u,t
a=H.e(H.i(a,"$ist"),"$isaN")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ao(new V.P(y.a,y.b).k(0,2).n(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ao(new V.P(x.a,x.b).k(0,2).n(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.ao(new V.P(y.a,y.b).k(0,2).n(0,z.gZ()))}this.af()},"$1","gbU",4,0,2],
f2:[function(a){var z,y,x
H.i(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sO(-y*10*z)
this.af()}},"$1","gbV",4,0,2],
iq:[function(a){if(H.e(H.i(a,"$ist"),"$isdW").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geY",4,0,2],
ir:[function(a){var z,y,x,w,v,u,t
a=H.e(H.i(a,"$ist"),"$isaN")
if(!J.B(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ao(new V.P(x.a,x.b).k(0,2).n(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.ao(new V.P(y.a,y.b).k(0,2).n(0,z.gZ()))
this.af()},"$1","geZ",4,0,2],
iX:[function(a){H.i(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfT",4,0,2],
iW:[function(a){var z,y,x,w,v,u,t
a=H.e(H.i(a,"$ist"),"$isel")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ao(new V.P(y.a,y.b).k(0,2).n(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ao(new V.P(x.a,x.b).k(0,2).n(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.ao(new V.P(y.a,y.b).k(0,2).n(0,z.gZ()))}this.af()},"$1","gfS",4,0,2],
iV:[function(a){var z,y,x
H.i(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sO(-y*10*z)
this.af()}},"$1","gfR",4,0,2],
aR:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.dy=y
x=b.y
this.c.a8(0,x)
this.b.a8(0,x)
this.fr=V.bw(this.b.d).k(0,V.cS(this.c.d))}return this.fr},
$isaa:1},j2:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.N()
this.r=z}return z},
N:function(a){var z=this.r
if(!(z==null))z.u(a)},
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.N()
z.e=y
z=y}else z=y
y=this.gf3()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.N()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
is:[function(a){var z,y,x,w
H.i(a,"$ist")
if(!J.B(this.b,this.a.b.c))return
H.e(a,"$iscT")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.v])
z.b=!0
this.N(z)}},"$1","gf3",4,0,2],
aR:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ba(x,x,x,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",fH:{"^":"am;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.N()
this.f=z}return z},
a9:[function(a){var z
H.i(a,"$ist")
z=this.f
if(!(z==null))z.u(a)},function(){return this.a9(null)},"eF","$1","$0","ga5",0,2,0],
iO:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aq
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga5(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gfq",8,0,19],
iP:[function(a,b){var z,y,x,w,v
z=M.aq
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga5(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gt().B(0,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gfs",8,0,19],
am:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
if(!(y==null))y.am(a)}this.e=!1},
$asf:function(){return[M.aq]},
$asam:function(){return[M.aq]},
$isaq:1,
p:{
cI:function(a){var z=new M.fH()
z.be(M.aq)
z.e=!1
z.f=null
z.aT(z.gfq(),z.gfs())
z.c8(0,a)
return z}}},fX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a9:[function(a){var z
H.i(a,"$ist")
z=this.x
if(!(z==null))z.u(a)},function(){return this.a9(null)},"eF","$1","$0","ga5",0,2,0],
ix:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aM
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga5(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.bW()
s.d=0
t.sa1(s)}s=t.ga1()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gf8",8,0,9],
iy:[function(a,b){var z,y,x,w,v,u
z=E.aM
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga5(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.ga1()==null){u=new D.bW()
u.d=0
v.sa1(u)}v.ga1().B(0,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gf9",8,0,9],
saz:function(a){var z,y
if(a==null)a=X.bb(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().B(0,this.ga5())
y=this.a
this.a=a
a.gt().h(0,this.ga5())
z=new D.G("camera",y,this.a,this,[X.dv])
z.b=!0
this.a9(z)}},
sbF:function(a,b){var z,y
if(b==null)b=X.ci(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().B(0,this.ga5())
y=this.b
this.b=b
b.gt().h(0,this.ga5())
z=new D.G("target",y,this.b,this,[X.ee])
z.b=!0
this.a9(z)}},
sa3:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().B(0,this.ga5())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga5())
z=new D.G("technique",y,this.c,this,[O.c5])
z.b=!0
this.a9(z)}},
gt:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
am:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.eg(this.c)
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
if(typeof x!=="number")return H.p(x)
u=C.h.an(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.h.an(v.b*w)
s=C.h.an(v.c*x)
a.c=s
v=C.h.an(v.d*w)
a.d=v
y.viewport(u,t,s,v)
a.a.clearDepth(z.c)
if(z.b){y=a.a
z=z.a
y.clearColor(z.a,z.b,z.c,z.d)
r=16640}else r=256
a.a.clear(r)
z=this.a
y=a.c
v=a.d
s=z.c
q=z.d
p=z.e
o=p-q
n=1/Math.tan(s*0.5)
m=V.aH(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y=z.a
if(y!=null){l=y.a
if(l!=null)m=l.k(0,m)}a.cy.ef(m)
y=$.e3
if(y==null){y=new V.y(0,0,-1)
k=y.n(0,Math.sqrt(y.w(y)))
y=new V.y(0,1,0).aZ(k)
j=y.n(0,Math.sqrt(y.w(y)))
i=k.aZ(j)
h=new V.y(0,0,0)
y=V.aH(j.a,i.a,k.a,j.M(0).w(h),j.b,i.b,k.b,i.M(0).w(h),j.c,i.c,k.c,k.M(0).w(h),0,0,0,1)
$.e3=y
g=y}else g=y
z=z.b
if(z!=null){l=z.a
if(l!=null)g=l.k(0,g)}a.db.ef(g)
z=this.c
if(z!=null)z.a8(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a8(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();)z.d.am(a)
this.a.toString
a.cy.cD()
a.db.cD()
this.b.toString
a.ed()},
$isaq:1,
p:{
bp:function(a,b,c,d){var z,y
z=new M.fX()
y=O.cG(E.aM)
z.d=y
y.aT(z.gf8(),z.gf9())
z.e=null
z.f=null
z.r=null
z.x=null
z.saz(a)
z.sbF(0,c)
z.sa3(d)
return z}}},aq:{"^":"a;"}}],["","",,A,{"^":"",dp:{"^":"a;a,b,c"},fw:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hz:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dG:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dL:{"^":"cW;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},dZ:{"^":"cW;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ar,0al,0bp,0dH,0bq,0br,0dI,0dJ,0bs,0bt,0dK,0dL,0bu,0bv,0dM,0dN,0bw,0dO,0dP,0bx,0dQ,0dR,0by,0bz,0bA,0dS,0dT,0bB,0bC,0dU,0dV,0bD,0dW,0co,0dX,0cp,0dY,0cq,0dZ,0cr,0e_,0cs,0e0,0ct,a,b,0c,0d,0e,0f,0r,0x,0y",
ex:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.c4("")
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
a1.fY(z)
a1.h4(z)
a1.fZ(z)
a1.hc(z)
a1.hd(z)
a1.h6(z)
a1.hh(z)
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
z=new P.c4("")
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
v.h1(z)
v.fX(z)
v.h_(z)
v.h2(z)
v.ha(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h8(z)
v.h9(z)}v.h5(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.b([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h0(z)
v.h7(z)
v.hb(z)
v.he(z)
v.hf(z)
v.hg(z)
v.h3(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.o])
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
this.e4(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.e(this.y.m(0,"invViewMat"),"$isar")
if(y)this.dy=H.e(this.y.m(0,"objMat"),"$isar")
if(w)this.fr=H.e(this.y.m(0,"viewObjMat"),"$isar")
this.fy=H.e(this.y.m(0,"projViewObjMat"),"$isar")
if(a1.x2)this.k1=H.e(this.y.m(0,"txt2DMat"),"$isd3")
if(a1.y1)this.k2=H.e(this.y.m(0,"txtCubeMat"),"$isar")
if(a1.y2)this.k3=H.e(this.y.m(0,"colorMat"),"$isar")
this.r1=H.b([],[A.ar])
y=a1.ar
if(y>0){this.k4=H.i(this.y.m(0,"bendMatCount"),"$isL")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.l(P.j("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isar"))}}y=a1.a
if(y!==C.b){this.r2=H.e(this.y.m(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.rx=H.e(this.y.m(0,"emissionTxt"),"$isas")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isL")
break
case C.d:this.ry=H.e(this.y.m(0,"emissionTxt"),"$isat")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isL")
break}}y=a1.b
if(y!==C.b){this.x2=H.e(this.y.m(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.y1=H.e(this.y.m(0,"ambientTxt"),"$isas")
this.ar=H.e(this.y.m(0,"nullAmbientTxt"),"$isL")
break
case C.d:this.y2=H.e(this.y.m(0,"ambientTxt"),"$isat")
this.ar=H.e(this.y.m(0,"nullAmbientTxt"),"$isL")
break}}y=a1.c
if(y!==C.b){this.al=H.e(this.y.m(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.bp=H.e(this.y.m(0,"diffuseTxt"),"$isas")
this.bq=H.e(this.y.m(0,"nullDiffuseTxt"),"$isL")
break
case C.d:this.dH=H.e(this.y.m(0,"diffuseTxt"),"$isat")
this.bq=H.e(this.y.m(0,"nullDiffuseTxt"),"$isL")
break}}y=a1.d
if(y!==C.b){this.br=H.e(this.y.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.dI=H.e(this.y.m(0,"invDiffuseTxt"),"$isas")
this.bs=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isL")
break
case C.d:this.dJ=H.e(this.y.m(0,"invDiffuseTxt"),"$isat")
this.bs=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a1.e
if(y!==C.b){this.bv=H.e(this.y.m(0,"shininess"),"$isX")
this.bt=H.e(this.y.m(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.dK=H.e(this.y.m(0,"specularTxt"),"$isas")
this.bu=H.e(this.y.m(0,"nullSpecularTxt"),"$isL")
break
case C.d:this.dL=H.e(this.y.m(0,"specularTxt"),"$isat")
this.bu=H.e(this.y.m(0,"nullSpecularTxt"),"$isL")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.c:this.dM=H.e(this.y.m(0,"bumpTxt"),"$isas")
this.bw=H.e(this.y.m(0,"nullBumpTxt"),"$isL")
break
case C.d:this.dN=H.e(this.y.m(0,"bumpTxt"),"$isat")
this.bw=H.e(this.y.m(0,"nullBumpTxt"),"$isL")
break}if(a1.dy){this.dO=H.e(this.y.m(0,"envSampler"),"$isat")
this.dP=H.e(this.y.m(0,"nullEnvTxt"),"$isL")
y=a1.r
if(y!==C.b){this.bx=H.e(this.y.m(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.dQ=H.e(this.y.m(0,"reflectTxt"),"$isas")
this.by=H.e(this.y.m(0,"nullReflectTxt"),"$isL")
break
case C.d:this.dR=H.e(this.y.m(0,"reflectTxt"),"$isat")
this.by=H.e(this.y.m(0,"nullReflectTxt"),"$isL")
break}}y=a1.x
if(y!==C.b){this.bz=H.e(this.y.m(0,"refraction"),"$isX")
this.bA=H.e(this.y.m(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.e:break
case C.c:this.dS=H.e(this.y.m(0,"refractTxt"),"$isas")
this.bB=H.e(this.y.m(0,"nullRefractTxt"),"$isL")
break
case C.d:this.dT=H.e(this.y.m(0,"refractTxt"),"$isat")
this.bB=H.e(this.y.m(0,"nullRefractTxt"),"$isL")
break}}}y=a1.y
if(y!==C.b){this.bC=H.e(this.y.m(0,"alpha"),"$isX")
switch(y){case C.b:break
case C.e:break
case C.c:this.dU=H.e(this.y.m(0,"alphaTxt"),"$isas")
this.bD=H.e(this.y.m(0,"nullAlphaTxt"),"$isL")
break
case C.d:this.dV=H.e(this.y.m(0,"alphaTxt"),"$isat")
this.bD=H.e(this.y.m(0,"nullAlphaTxt"),"$isL")
break}}this.co=H.b([],[A.ey])
this.cp=H.b([],[A.ez])
this.cq=H.b([],[A.eA])
this.cr=H.b([],[A.eB])
this.cs=H.b([],[A.eC])
this.ct=H.b([],[A.eD])
if(a1.k2){y=a1.z
if(y>0){this.dW=H.i(this.y.m(0,"dirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.co;(x&&C.a).h(x,new A.ey(m,l,k))}}y=a1.Q
if(y>0){this.dX=H.i(this.y.m(0,"pntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isX")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isX")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isX")
x=this.cp;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dY=H.i(this.y.m(0,"spotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isX")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isX")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isX")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isX")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isX")
x=this.cq;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dZ=H.i(this.y.m(0,"txtDirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isH")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isL")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isas")
x=this.cr;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e_=H.i(this.y.m(0,"txtPntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isd3")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isL")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isX")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isX")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isX")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isat")
x=this.cs;(x&&C.a).h(x,new A.eC(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e0=H.i(this.y.m(0,"txtSpotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isH")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isL")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isH")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isX")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isX")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isX")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isX")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.l(P.j("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isas")
x=this.ct;(x&&C.a).h(x,new A.eD(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ag:function(a,b,c){b.a.uniform1i(b.d,1)},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
hB:function(a,b){var z,y
z=a.al
y=new A.dZ(b,z)
y.d0(b,z)
y.ex(a,b)
return y}}},hF:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ar,al,bp",
fY:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ar+"];\n"
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
h4:function(a){var z
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
fZ:function(a){var z
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
hc:function(a){var z,y
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
hd:function(a){var z,y
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
h6:function(a){var z
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
hh:function(a){var z
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
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cV(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h1:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aw(a,z,"emission")
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
fX:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aw(a,z,"ambient")
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
h_:function(a){var z,y
z=this.c
if(z===C.b)return
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
h2:function(a){var z,y
z=this.d
if(z===C.b)return
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
ha:function(a){var z,y
z=this.e
if(z===C.b)return
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
h5:function(a){var z,y
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
h8:function(a){var z,y
z=this.r
if(z===C.b)return
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
h9:function(a){var z,y
z=this.x
if(z===C.b)return
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
h0:function(a){var z,y
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
h7:function(a){var z,y
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
hb:function(a){var z,y
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
he:function(a){var z,y,x
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
hf:function(a){var z,y,x
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
hg:function(a){var z,y,x
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
h3:function(a){var z
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
i:function(a){return this.al}},ey:{"^":"a;a,b,c"},eB:{"^":"a;a,b,c,d,e,f,r,x"},ez:{"^":"a;a,b,c,d,e,f,r"},eC:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eD:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cW:{"^":"cB;",
d0:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
e4:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.de(b,35633)
this.f=this.de(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.f9(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.l(P.j("Failed to link shader: "+H.k(x)))}this.fK()
this.fM()},
ap:function(a){a.a.useProgram(this.r)
this.x.hz()},
de:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f9(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.j("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fK:function(){var z,y,x,w,v,u
z=H.b([],[A.dp])
y=this.a
x=H.a0(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dp(y,v.name,u))}this.x=new A.fw(z)},
fM:function(){var z,y,x,w,v,u
z=H.b([],[A.ab])
y=this.a
x=H.a0(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hw(v.type,v.size,v.name,u))}this.y=new A.iT(z)},
aJ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.L(z,y,b,c)
else return A.d1(z,y,b,a,c)},
eS:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.d1(z,y,b,a,c)},
eT:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.at(z,y,b,c)
else return A.d1(z,y,b,a,c)},
bl:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hw:function(a,b,c,d){switch(a){case 5120:return this.aJ(b,c,d)
case 5121:return this.aJ(b,c,d)
case 5122:return this.aJ(b,c,d)
case 5123:return this.aJ(b,c,d)
case 5124:return this.aJ(b,c,d)
case 5125:return this.aJ(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.iP(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.d2(this.a,this.r,c,d)
case 35667:return new A.iQ(this.a,this.r,c,d)
case 35668:return new A.iR(this.a,this.r,c,d)
case 35669:return new A.iS(this.a,this.r,c,d)
case 35674:return new A.iV(this.a,this.r,c,d)
case 35675:return new A.d3(this.a,this.r,c,d)
case 35676:return new A.ar(this.a,this.r,c,d)
case 35678:return this.eS(b,c,d)
case 35680:return this.eT(b,c,d)
case 35670:throw H.h(this.bl("BOOL",c))
case 35671:throw H.h(this.bl("BOOL_VEC2",c))
case 35672:throw H.h(this.bl("BOOL_VEC3",c))
case 35673:throw H.h(this.bl("BOOL_VEC4",c))
default:throw H.h(P.j("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cf:{"^":"a;a,b",
i:function(a){return this.b}},ab:{"^":"a;"},iT:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.j("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hF:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hF("\n")}},L:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},iQ:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},iR:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},iS:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},iO:{"^":"ab;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
p:{
d1:function(a,b,c,d,e){var z=new A.iO(a,b,c,e)
z.f=d
z.e=P.hu(d,0,!1,P.C)
return z}}},X:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},iP:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},H:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},d2:{"^":"ab;a,b,c,d",
cQ:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.k(this.c)}},iV:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},d3:{"^":"ab;a,b,c,d",
a4:function(a){var z=new Float32Array(H.bM(H.w(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},ar:{"^":"ab;a,b,c,d",
a4:function(a){var z=new Float32Array(H.bM(H.w(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},as:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},at:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
dj:function(a){var z,y,x,w,v
z=F.az()
y=z.a
x=new V.y(-1,-1,0)
x=x.n(0,Math.sqrt(x.w(x)))
w=y.aM(new V.aP(1,2,4,6),new V.I(1,0,0,1),new V.Y(-1,0,0),new V.F(0,0),x,a)
y=z.a
x=new V.y(1,-1,0)
x=x.n(0,Math.sqrt(x.w(x)))
v=y.aM(new V.aP(0,3,4,6),new V.I(0,0,1,1),new V.Y(1,0,0),new V.F(1,0),x,a)
z.c.c7(0,w,v)
return z},
cz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
z=F.az()
y=z.a
x=-d*0.5
w=-b*0.5
v=new V.y(-1,-1,1)
v=v.n(0,Math.sqrt(v.w(v)))
u=y.aM(new V.aP(1,2,4,6),new V.I(1,0,0,1),new V.Y(x,w,e),new V.F(0,1),v,c)
y=z.a
v=d*0.5
t=new V.y(1,-1,1)
t=t.n(0,Math.sqrt(t.w(t)))
s=y.aM(new V.aP(0,3,4,6),new V.I(0,0,1,1),new V.Y(v,w,e),new V.F(1,1),t,c)
y=z.a
w=b*0.5
t=new V.y(1,1,1)
t=t.n(0,Math.sqrt(t.w(t)))
r=y.aM(new V.aP(0,2,5,6),new V.I(0,1,0,1),new V.Y(v,w,e),new V.F(1,0),t,c)
y=z.a
v=new V.y(-1,1,1)
v=v.n(0,Math.sqrt(v.w(v)))
q=y.aM(new V.aP(0,2,4,7),new V.I(1,1,0,1),new V.Y(x,w,e),new V.F(0,0),v,c)
y=[F.Q]
if(a)z.c.dw(H.b([u,s,r,q],y))
else z.d.hi(H.b([u,s,r,q],y))
z.aq()
return z},
fa:function(a,b,c,d){var z=F.az()
F.bL(z,b,c,d,a,1,0,0,1)
F.bL(z,b,c,d,a,0,1,0,3)
F.bL(z,b,c,d,a,0,0,1,2)
F.bL(z,b,c,d,a,-1,0,0,0)
F.bL(z,b,c,d,a,0,-1,0,0)
F.bL(z,b,c,d,a,0,0,-1,3)
z.aq()
return z},
cr:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bL:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.y(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.y(t+h,s+f,r+g)
z.b=q
p=new V.y(t-h,s-f,r-g)
z.c=p
o=new V.y(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cr(y)
k=F.cr(z.b)
j=F.lm(d,e,new F.kB(z,F.cr(z.c),F.cr(z.d),k,l,c),b)
if(j!=null)a.aC(j)},
fb:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
e=new F.kQ()
if(f<3)return
z=F.az()
y=-6.283185307179586/f
x=H.b([],[F.Q])
for(w=0;w<=f;++w){v=y*w
u=Math.sin(v)
t=Math.cos(v)
s=e.$1(w/f)
r=z.a
if(typeof s!=="number")return H.p(s)
q=new V.y(u,t,1).n(0,Math.sqrt(u*u+t*t+1))
if(u<0)p=0
else p=u>1?1:u
o=t<0
if(o)n=0
else n=t>1?1:t
if(o)o=0
else o=t>1?1:t
r.toString
m=F.aZ(new V.aP(a,-1,-1,-1),null,new V.I(p,n,o,1),new V.Y(u*s,t*s,d),new V.y(0,0,1),new V.F(u*0.5+0.5,t*0.5+0.5),q,null,0)
r.h(0,m)
C.a.h(x,m)}z.c.dw(x)
return z},
fh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.az()
y=Math.sqrt(5)/2+0.5
x=F.ac(z,new V.y(-1,y,0))
w=F.ac(z,new V.y(1,y,0))
v=-y
u=F.ac(z,new V.y(-1,v,0))
t=F.ac(z,new V.y(1,v,0))
s=F.ac(z,new V.y(0,-1,v))
r=F.ac(z,new V.y(0,1,v))
q=F.ac(z,new V.y(0,-1,y))
p=F.ac(z,new V.y(0,1,y))
o=F.ac(z,new V.y(y,0,1))
n=F.ac(z,new V.y(y,0,-1))
m=F.ac(z,new V.y(v,0,1))
l=F.ac(z,new V.y(v,0,-1))
F.T(z,x,l,r,a)
F.T(z,x,r,w,a)
F.T(z,x,w,p,a)
F.T(z,x,p,m,a)
F.T(z,x,m,l,a)
F.T(z,w,r,n,a)
F.T(z,r,l,s,a)
F.T(z,l,m,u,a)
F.T(z,m,p,q,a)
F.T(z,p,w,o,a)
F.T(z,t,n,s,a)
F.T(z,t,s,u,a)
F.T(z,t,u,q,a)
F.T(z,t,q,o,a)
F.T(z,t,o,n,a)
F.T(z,s,n,r,a)
F.T(z,u,s,l,a)
F.T(z,q,u,m,a)
F.T(z,o,q,p,a)
F.T(z,n,o,w,a)
z.hO(new F.eG(),new F.j9())
return z},
ac:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.n(0,Math.sqrt(b.w(b)))
z=b.a
y=b.b
x=b.c
w=F.aZ(null,null,null,new V.Y(z,y,x),b,null,null,null,0)
v=a.hA(w,new F.eG())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sS(0,new V.I(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.scH(new V.F(q,p<0?-p:p))
a.a.h(0,w)
return w},
T:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.du(0,b,d,c)
else{z=F.ac(a,b.r.C(0,c.r).k(0,0.5))
y=F.ac(a,c.r.C(0,d.r).k(0,0.5))
x=F.ac(a,d.r.C(0,b.r).k(0,0.5))
w=e-1
F.T(a,b,z,x,w)
F.T(a,z,c,y,w)
F.T(a,y,x,z,w)
F.T(a,x,y,d,w)}},
lm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[F.Q,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.az()
y=H.b([],[F.Q])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.aZ(null,null,new V.I(u,0,0,1),null,null,new V.F(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cm(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.aZ(null,null,new V.I(o,n,m,1),null,null,new V.F(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cm(d))}}z.d.hj(a+1,b+1,y)
return z},
kB:{"^":"q:36;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cw(z.b,b).cw(z.d.cw(z.c,b),c)
a.sY(0,new V.Y(y.a,y.b,y.c))
a.scI(y.n(0,Math.sqrt(y.w(y))))
z=1-b
x=1-c
x=new V.aP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.B(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.L()}}},
kQ:{"^":"q:37;",
$1:function(a){return 1}},
V:{"^":"a;0a,0b,0c,0d,0e",
aA:function(){if(!this.gb_()){C.a.B(this.a.a.d.b,this)
this.a.a.L()}this.c_()
this.c0()
this.fA()},
c5:function(a){this.a=a
C.a.h(a.d.b,this)},
c6:function(a){this.b=a
C.a.h(a.d.c,this)},
fJ:function(a){this.c=a
C.a.h(a.d.d,this)},
c_:function(){var z=this.a
if(z!=null){C.a.B(z.d.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.B(z.d.c,this)
this.b=null}},
fA:function(){var z=this.c
if(z!=null){C.a.B(z.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.y(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.e6())return
return v.n(0,Math.sqrt(v.w(v)))},
eP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.y(z.a,z.b,z.c)
v=z.n(0,Math.sqrt(z.w(z)))
z=w.G(0,y)
z=new V.y(z.a,z.b,z.c)
z=v.aZ(z.n(0,Math.sqrt(z.w(z))))
return z.n(0,Math.sqrt(z.w(z)))},
ci:function(){if(this.d!=null)return!0
var z=this.eL()
if(z==null){z=this.eP()
if(z==null)return!1}this.d=z
this.a.a.L()
return!0},
eK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.y(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.e6())return
return v.n(0,Math.sqrt(v.w(v)))},
eO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.G(0,u)
z=new V.y(z.a,z.b,z.c)
m=z.n(0,Math.sqrt(z.w(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.G(0,u).k(0,l).C(0,u).G(0,x)
z=new V.y(z.a,z.b,z.c)
m=z.n(0,Math.sqrt(z.w(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.n(0,Math.sqrt(z.w(z)))
z=k.aZ(m)
z=z.n(0,Math.sqrt(z.w(z))).aZ(k)
m=z.n(0,Math.sqrt(z.w(z)))}return m},
cg:function(){if(this.e!=null)return!0
var z=this.eK()
if(z==null){z=this.eO()
if(z==null)return!1}this.e=z
this.a.a.L()
return!0},
aH:function(a,b){var z=b.a
if(z==null)throw H.h(P.j("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.h(P.j("May not replace a face's vertex with a vertex attached to a different shape."))},
ghs:function(a){if(J.B(this.a,this.b))return!0
if(J.B(this.b,this.c))return!0
if(J.B(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y
if(this.gb_())return a+"disposed"
z=a+C.i.ad(J.ad(this.a.e),0)+", "+C.i.ad(J.ad(this.b.e),0)+", "+C.i.ad(J.ad(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.A("")}},
h_:{"^":"a;"},
is:{"^":"h_;",
aQ:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
ao:{"^":"a;0a,0b",
aA:function(){if(!this.gb_()){C.a.B(this.a.a.c.b,this)
this.a.a.L()}this.c_()
this.c0()},
c5:function(a){this.a=a
C.a.h(a.c.b,this)},
c6:function(a){this.b=a
C.a.h(a.c.c,this)},
c_:function(){var z=this.a
if(z!=null){C.a.B(z.c.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.B(z.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
aH:function(a,b){var z=b.a
if(z==null)throw H.h(P.j("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.h(P.j("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){if(this.gb_())return a+"disposed"
return a+C.i.ad(J.ad(this.a.e),0)+", "+C.i.ad(J.ad(this.b.e),0)},
J:function(){return this.A("")}},
ho:{"^":"a;"},
iN:{"^":"ho;",
aQ:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cV:{"^":"a;0a",
aA:function(){var z=this.a
if(z!=null){C.a.B(z.a.b.b,this)
this.a.a.L()}this.fz()},
fI:function(a){this.a=a
C.a.h(a.b.b,this)},
fz:function(){var z=this.a
if(z!=null){C.a.B(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ad(J.ad(z.e),0)},
J:function(){return this.A("")},
p:{
hU:function(a){var z=new F.cV()
if(a.a==null)H.l(P.j("May not create a point with a vertex which is not attached to a shape."))
z.fI(a)
C.a.h(z.a.a.b.b,z)
z.a.a.L()
return z}}},
aj:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
aC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.cl())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.hU(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.c(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.ao()
s=p.a
if(s==null)H.l(P.j("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.l(P.j("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.u(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.c(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
m=new F.V()
t=p.a
if(t==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
s=o.a
if(t==null?s==null:t===s){s=l.a
s=t==null?s!=null:t!==s
t=s}else t=!0
if(t)H.l(P.j("May not create a face with vertices attached to different shapes."))
m.a=p
C.a.h(p.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=l
C.a.h(l.d.d,m)
C.a.h(m.a.a.d.b,m)
t=m.a.a.e
if(!(t==null))t.u(null)}z=this.e
if(!(z==null))z.at(0)},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
aN:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aN()||!1
if(!this.a.aN())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
bn:function(){var z=this.e
if(!(z==null))++z.d
this.a.bn()
z=this.e
if(!(z==null))z.at(0)
return!0},
hB:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.c(x,y)
w=x[y]
if(b.aQ(0,a,w))return w}return},
hA:function(a,b){return this.hB(a,b,0)},
fB:function(a,b){var z,y,x,w,v,u
H.w(b,"$isd",[F.Q],"$asd")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.l(P.j("May not replace a face's vertex when the point has been disposed."))
if(J.B(v,x)){w.aH(x,a)
v=w.a
if(v!=null){C.a.B(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.B(w.b,x)){w.aH(x,a)
v=w.b
if(v!=null){C.a.B(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.B(w.c,x)){w.aH(x,a)
v=w.c
if(v!=null){C.a.B(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.u(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null)H.l(P.j("May not replace a line's vertex when the point has been disposed."))
if(J.B(v,x)){w.aH(x,a)
v=w.a
if(v!=null){C.a.B(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.B(w.b,x)){w.aH(x,a)
v=w.b
if(v!=null){C.a.B(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.u(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.l(P.j("May not replace a point's vertex when the point has been disposed."))
if(J.B(v,x)){if(a.a==null)H.l(P.j("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.B(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.u(null)}}this.a.B(0,x)}},
hO:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.z(z,0)])
for(z=[F.Q];y.length!==0;){x=C.a.ghD(y)
C.a.i6(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.x)(y),++u){t=y[u]
if(t!=null&&a.aQ(0,x,t)){C.a.h(w,t)
C.a.B(y,t)}}if(w.length>1){s=b.aC(w)
this.fB(s,w)
C.a.h(y,s)}}}this.a.q()
this.c.cE()
this.d.cE()
this.b.i7()
this.c.cF(new F.iN())
this.d.cF(new F.is())
z=this.e
if(!(z==null))z.at(0)},
dB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aD()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$be().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gcU(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.ds])
for(r=0,q=0;q<w;++q){p=b.hn(q)
o=p.gcU(p)
C.a.a_(s,q,new Z.ds(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].hL(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a_(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bM(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ce(new Z.eK(34962,j),s,b)
i.b=H.b([],[Z.cj])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.D(z,"\n")},
a7:function(a){var z=this.e
if(!(z==null))z.u(a)},
L:function(){return this.a7(null)},
p:{
az:function(){var z,y
z=new F.aj()
y=new F.j5(z)
y.b=!1
y.c=H.b([],[F.Q])
z.a=y
y=new F.im(z)
y.b=H.b([],[F.cV])
z.b=y
y=new F.il(z)
y.b=H.b([],[F.ao])
z.c=y
y=new F.ik(z)
y.b=H.b([],[F.V])
z.d=y
z.e=null
return z}}},
ik:{"^":"a;a,0b",
du:function(a,b,c,d){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
z=new F.V()
y=b.a
if(y==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
x=c.a
if(y==null?x==null:y===x){x=d.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.l(P.j("May not create a face with vertices attached to different shapes."))
z.c5(b)
z.c6(c)
z.fJ(d)
C.a.h(z.a.a.d.b,z)
z.a.a.L()
return z},
hi:function(a){var z,y,x,w,v,u,t,s,r
H.w(a,"$isd",[F.Q],"$asd")
z=H.b([],[F.V])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.c(a,v)
v=a[v]
if(w>=u)return H.c(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
t=new F.V()
s=x.a
if(s==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
r=v.a
if(s==null?r==null:s===r){r=u.a
r=s==null?r!=null:s!==r
s=r}else s=!0
if(s)H.l(P.j("May not create a face with vertices attached to different shapes."))
t.a=x
C.a.h(x.d.b,t)
t.b=v
C.a.h(v.d.c,t)
t.c=u
C.a.h(u.d.d,t)
C.a.h(t.a.a.d.b,t)
v=t.a.a.e
if(!(v==null))v.u(null)
C.a.h(z,t)}}return z},
hj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.w(c,"$isd",[F.Q],"$asd")
z=H.b([],[F.V])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.c(c,x)
r=c[x];++x
if(x>=s)return H.c(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.c(c,p)
o=c[p]
if(y<0||y>=s)return H.c(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
m=new F.V()
s=r.a
if(s==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=q.a
if(s==null?l==null:s===l){l=o.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.l(P.j("May not create a face with vertices attached to different shapes."))
m.a=r
C.a.h(r.d.b,m)
m.b=q
C.a.h(q.d.c,m)
m.c=o
C.a.h(o.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.u(null)
C.a.h(z,m)
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
m=new F.V()
s=r.a
if(s==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=o.a
if(s==null?l==null:s===l){l=n.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.l(P.j("May not create a face with vertices attached to different shapes."))
m.a=r
C.a.h(r.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=n
C.a.h(n.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.u(null)
C.a.h(z,m)}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
m=new F.V()
s=q.a
if(s==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=o.a
if(s==null?l==null:s===l){l=n.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.l(P.j("May not create a face with vertices attached to different shapes."))
m.a=q
C.a.h(q.d.b,m)
m.b=o
C.a.h(o.d.c,m)
m.c=n
C.a.h(n.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.u(null)
C.a.h(z,m)
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
m=new F.V()
s=q.a
if(s==null)H.l(P.j("May not create a face with a first vertex which is not attached to a shape."))
l=n.a
if(s==null?l==null:s===l){l=r.a
l=s==null?l!=null:s!==l
s=l}else s=!0
if(s)H.l(P.j("May not create a face with vertices attached to different shapes."))
m.a=q
C.a.h(q.d.b,m)
m.b=n
C.a.h(n.d.c,m)
m.c=r
C.a.h(r.d.d,m)
C.a.h(m.a.a.d.b,m)
s=m.a.a.e
if(!(s==null))s.u(null)
C.a.h(z,m)}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aQ(0,v,t)){v.aA()
break}}}}},
cE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=x.ghs(x)
if(y)x.aA()}},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].ci())x=!1
return x},
aN:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].cg())x=!1
return x},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.b([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
J:function(){return this.A("")}},
il:{"^":"a;a,0b",
c7:function(a,b,c){var z,y,x
this.a.a.h(0,b)
this.a.a.h(0,c)
z=new F.ao()
if(b==null)H.l(P.j("May not create a line with a null start vertex."))
if(c==null)H.l(P.j("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.l(P.j("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.l(P.j("May not create a line with vertices attached to different shapes."))
z.c5(b)
z.c6(c)
C.a.h(z.a.a.c.b,z)
z.a.a.L()
return z},
dw:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.Q],"$asd")
z=H.b([],[F.ao])
y=a.length
if(y>0){for(x=1;x<y;++x){w=x-1
v=a.length
if(w>=v)return H.c(a,w)
w=a[w]
if(x>=v)return H.c(a,x)
v=a[x]
this.a.a.h(0,w)
this.a.a.h(0,v)
u=new F.ao()
t=w.a
if(t==null)H.l(P.j("May not create a line with a start vertex which is not attached to a shape."))
s=v.a
if(t==null?s!=null:t!==s)H.l(P.j("May not create a line with vertices attached to different shapes."))
u.a=w
C.a.h(w.c.b,u)
u.b=v
C.a.h(v.c.c,u)
C.a.h(u.a.a.c.b,u)
w=u.a.a.e
if(!(w==null))w.u(null)
C.a.h(z,u)}w=y-1
v=a.length
if(w>=v)return H.c(a,w)
w=a[w]
if(0>=v)return H.c(a,0)
C.a.h(z,this.c7(0,w,a[0]))}return z},
hl:function(a){var z,y,x,w,v,u,t
H.w(a,"$isd",[F.Q],"$asd")
z=H.b([],[F.ao])
for(y=1;y<64;y+=2){x=a[y-1]
w=a[y]
this.a.a.h(0,x)
this.a.a.h(0,w)
v=new F.ao()
u=x.a
if(u==null)H.l(P.j("May not create a line with a start vertex which is not attached to a shape."))
t=w.a
if(u==null?t!=null:u!==t)H.l(P.j("May not create a line with vertices attached to different shapes."))
v.a=x
C.a.h(x.c.b,v)
v.b=w
C.a.h(w.c.c,v)
C.a.h(v.a.a.c.b,v)
x=v.a.a.e
if(!(x==null))x.u(null)
C.a.h(z,v)}return z},
gl:function(a){return this.b.length},
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aQ(0,v,t)){v.aA()
break}}}}},
cE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=J.B(x.a,x.b)
if(y)x.aA()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.b([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.D(z,"\n")},
J:function(){return this.A("")}},
im:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i7:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aA()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.b([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
J:function(){return this.A("")}},
Q:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cm:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.aZ(this.cx,x,u,z,y,w,v,a,t)},
cl:function(){return this.cm(null)},
ghJ:function(a){var z
if(this.b.b.length===0){z=this.c
if(z.b.length===0&&z.c.length===0){z=this.d
z=z.b.length===0&&z.c.length===0&&z.d.length===0}else z=!1}else z=!1
return z},
sY:function(a,b){var z
if(!J.B(this.f,b)){this.f=b
z=this.a
if(z!=null)z.L()}},
se8:function(a){var z
a=a==null?null:a.n(0,Math.sqrt(a.w(a)))
if(!J.B(this.r,a)){this.r=a
z=this.a
if(z!=null)z.L()}},
sbm:function(a){var z
a=a==null?null:a.n(0,Math.sqrt(a.w(a)))
if(!J.B(this.x,a)){this.x=a
z=this.a
if(z!=null)z.L()}},
scH:function(a){var z
if(!J.B(this.y,a)){this.y=a
z=this.a
if(z!=null)z.L()}},
scI:function(a){var z
if(!J.B(this.z,a)){this.z=a
z=this.a
if(z!=null)z.L()}},
sS:function(a,b){var z
if(!J.B(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.L()}},
sem:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.L()}},
hL:function(a){var z,y
z=J.R(a)
if(z.v(a,$.$get$aD())){z=this.f
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aC())){z=this.r
y=[P.v]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aB())){z=this.x
y=[P.v]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aR())){z=this.y
y=[P.v]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.v(a,$.$get$aS())){z=this.z
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$b0())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bI())){z=this.Q
if(z==null)return H.b([1,1,1,1],[P.v])
else return z.cJ(0)}else if(z.v(a,$.$get$be()))return H.b([this.ch],[P.v])
else if(z.v(a,$.$get$aQ())){z=this.cx
y=[P.v]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.v])},
ci:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.y(0,0,0)
this.d.H(0,new F.jf(z))
z=z.a
this.r=z.n(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.L()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
cg:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.y(0,0,0)
this.d.H(0,new F.je(z))
z=z.a
this.x=z.n(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.L()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
e1:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.b
x.a.a.q()
x=x.e
a.a.a.q()
v=a.e
if(x==null?v==null:x===v)return w}return},
hE:function(a){var z=this.e1(a)
if(z!=null)return z
return a.e1(this)},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y,x
z=H.b([],[P.o])
C.a.h(z,C.i.ad(J.ad(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
J:function(){return this.A("")},
p:{
aZ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.Q()
y=new F.jd(z)
y.b=H.b([],[F.cV])
z.b=y
y=new F.ja(z)
x=[F.ao]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.j6(z)
x=[F.V]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eH()
z.e=0
y=$.$get$aD()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aC().a)!==0?e:null
z.x=(x&$.$get$aB().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$eI().a)!==0?c:null
z.ch=(x&$.$get$be().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
jf:{"^":"q:5;a",
$1:function(a){var z,y
H.i(a,"$isV")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
je:{"^":"q:5;a",
$1:function(a){var z,y
H.i(a,"$isV")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
j5:{"^":"a;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.j("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.L()
return!0},
hm:function(a,b,c,d,e,f,g,h,i){var z=F.aZ(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
aM:function(a,b,c,d,e,f){return this.hm(a,null,b,c,null,d,e,f,0)},
V:function(a,b,c){var z=F.aZ(null,null,null,new V.Y(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gl:function(a){return this.c.length},
B:function(a,b){if(b==null)return!1
if(b.a!==this.a)return!1
if(!b.ghJ(b))throw H.h(P.j("May not remove a vertex without first making it empty."))
b.a=null
C.a.B(this.c,b)
this.a.L()
this.b=!0
return!0},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].ci()
return!0},
aN:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].cg()
return!0},
bn:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.n(0,Math.sqrt(u*u+t*t+s*s))
if(!J.B(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
this.q()
z=H.b([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
J:function(){return this.A("")}},
j6:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.c(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.c(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.c(z,b)
return z[b]},
H:function(a,b){H.m(b,{func:1,ret:-1,args:[F.V]})
C.a.H(this.b,b)
C.a.H(this.c,new F.j7(this,b))
C.a.H(this.d,new F.j8(this,b))},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.b([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
J:function(){return this.A("")}},
j7:{"^":"q:5;a,b",
$1:function(a){H.i(a,"$isV")
if(!J.B(a.a,this.a))this.b.$1(a)}},
j8:{"^":"q:5;a,b",
$1:function(a){var z
H.i(a,"$isV")
z=this.a
if(!J.B(a.a,z)&&!J.B(a.b,z))this.b.$1(a)}},
ja:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.c(z,x)
return z[x]}else{if(b<0)return H.c(z,b)
return z[b]}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.b([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
J:function(){return this.A("")}},
jb:{"^":"a;"},
eG:{"^":"jb;",
aQ:function(a,b,c){return J.B(b.f,c.f)}},
jc:{"^":"a;"},
j9:{"^":"jc;",
aC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a,"$isd",[F.Q],"$asd")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.Y(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.y(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.y(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.F(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.y(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.c7(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.c7(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.p(f)
n+=f;++o}b=F.aZ(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sY(0,null)
else b.sY(0,x.n(0,y))
if(w==null)b.se8(null)
else b.se8(w.n(0,Math.sqrt(w.w(w))))
if(v==null)b.sbm(null)
else b.sbm(v.n(0,Math.sqrt(v.w(v))))
if(s<=0||r==null)b.scH(null)
else b.scH(r.n(0,s))
if(q<=0||p==null)b.scI(null)
else b.scI(p.n(0,q))
if(u<=0||t==null)b.sS(0,null)
else{z=t.n(0,u)
z=[z.a,z.b,z.c,z.d]
f=z[0]
e=z[1]
d=z[2]
z=z[3]
if(f<0)f=0
else if(f>1)f=1
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(z<0)z=0
else if(z>1)z=1
b.sS(0,new V.I(f,e,d,z))}if(o<=0)b.sem(0,0)
else b.sem(0,n/o)
return b}},
jd:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.b([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
J:function(){return this.A("")}}}],["","",,O,{"^":"",h6:{"^":"c5;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gt:function(){var z=this.rx
if(z==null){z=D.N()
this.rx=z}return z},
U:function(a){var z=this.rx
if(!(z==null))z.u(a)},
scS:function(a){var z
if(!this.Q){this.Q=!0
z=new D.G("showFilled",!1,!0,this,[P.a8])
z.b=!0
this.U(z)}},
scT:function(a){var z
if(!this.ch){this.ch=!0
z=new D.G("showWireFrame",!1,!0,this,[P.a8])
z.b=!0
this.U(z)}},
sdF:function(a){var z,y
if(!this.c.v(0,a)){z=this.c
this.c=a
y=new D.G("diffuse1",z,a,this,[V.I])
y.b=!0
this.U(y)}},
sdA:function(a){var z,y
if(!this.d.v(0,a)){z=this.d
this.d=a
y=new D.G("ambient1",z,a,this,[V.I])
y.b=!0
this.U(y)}},
a8:function(a,b){},
eh:function(a,b){var z,y,x,w
if(this.a==null){z=H.i(a.fr.j(0,"Inspection"),"$isdL")
if(z==null){y=a.a
z=new A.dL(y,"Inspection")
z.d0(y,"Inspection")
z.e4(0,$.ha,$.h7)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"normAttr")
z.ch=z.x.j(0,"clrAttr")
z.cx=z.x.j(0,"binmAttr")
z.cy=H.e(z.y.j(0,"lightVec"),"$isH")
z.db=H.e(z.y.j(0,"ambientClr"),"$isd2")
z.dx=H.e(z.y.j(0,"diffuseClr"),"$isd2")
z.dy=H.e(z.y.j(0,"weightScalar"),"$isX")
z.fr=H.e(z.y.j(0,"viewMat"),"$isar")
z.fx=H.e(z.y.j(0,"viewObjMatrix"),"$isar")
z.fy=H.e(z.y.j(0,"projViewObjMatrix"),"$isar")
a.dz(z)}this.a=z}if(b.e==null){b.d.aq()
b.d.aN()
b.d.bn()
y=new Z.dt()
y.a=new H.aX(0,0,[P.o,Z.ce])
b.e=y}y=this.a
y.ap(a)
x=this.r2
w=y.dy
w.a.uniform1f(w.d,x)
x=this.b
w=y.cy
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.gI(x)
w=y.fr
w.toString
w.a4(x.a2(0,!0))
x=a.gel()
w=y.fx
w.toString
w.a4(x.a2(0,!0))
x=a.gee()
y=y.fy
y.toString
y.a4(x.a2(0,!0))
y=b.e
if(y instanceof Z.dt){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
a.a.enable(2929)
a.a.blendFunc(770,771)}else{w.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
if(this.Q)this.dl(a,y,b.c,"shapeFill",this.gfN(),this.d,this.c)
a.a.disable(2929)
a.a.blendFunc(1,1)
if(this.ch)this.dl(a,y,b.c,"wireFrame",this.gfV(),this.f,this.e)
a.a.enable(2929)
a.a.blendFunc(770,771)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.dG()},
dl:function(a,b,c,d,e,f,g){var z,y
H.m(e,{func:1,ret:F.aj,args:[F.aj]})
z=b.a.j(0,d)
if(z==null){z=this.eN(a,e.$1(c))
b.a.a_(0,d,z)}y=this.a
y.db.cQ(f)
y.dx.cQ(g)
z.hW(a)},
eN:function(a,b){var z,y,x,w
H.i(b,"$isaj")
z=a.a
y=$.$get$aD()
x=$.$get$aC()
w=b.dB(new Z.eL(z),new Z.b_(y.a|x.a|$.$get$aB().a|$.$get$b0().a))
w.ab($.$get$aD()).e=this.a.z.c
w.ab($.$get$aC()).e=this.a.Q.c
w.ab($.$get$b0()).e=this.a.ch.c
w.ab($.$get$aB()).e=this.a.cx.c
return w},
iU:[function(a){var z,y,x
z=F.az()
y=a.a
y.toString
x=H.m(new O.h8(z,new V.I(1,1,1,1)),{func:1,ret:-1,args:[F.Q]})
C.a.H(y.c,x)
x=a.d
x.toString
y=H.m(new O.h9(z),{func:1,ret:-1,args:[F.V]})
C.a.H(x.b,y)
return z},"$1","gfN",4,0,38],
fW:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.az()
z.a=new V.I(0,0.7,1,1)
x=a.a
x.toString
z=H.m(new O.hc(z,y),{func:1,ret:-1,args:[F.Q]})
C.a.H(x.c,z)
z=new O.hb(y)
x=a.c
x.toString
w=H.m(new O.hd(y,z),{func:1,ret:-1,args:[F.ao]})
C.a.H(x.b,w)
w=a.d
w.toString
z=H.m(new O.he(y,z),{func:1,ret:-1,args:[F.V]})
C.a.H(w.b,z)
return y},function(a){return this.fW(a,null)},"iY","$2$color","$1","gfV",4,3,39],
p:{
dM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var z=new O.h6()
z.b=new V.y(0,0,-1)
z.c=new V.I(0.2,0.3,0.4,1)
z.d=new V.I(0.1,0.2,0.3,1)
z.e=new V.I(0.7,0.7,0.7,1)
z.f=new V.I(0.3,0.3,0.3,1)
z.r=new V.I(0.5,0.5,0.5,1)
z.x=new V.I(0.5,0.5,0.5,1)
z.y=new V.I(1,1,1,1)
z.z=new V.I(0.8,0.8,0.8,1)
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
z.r2=r
return z}}},h8:{"^":"q:21;a,b",
$1:function(a){var z,y
H.i(a,"$isQ")
z=this.a.a
y=a.cl()
y.sS(0,this.b)
y.sbm(new V.y(0,0,0))
z.h(0,y)}},h9:{"^":"q:5;a",
$1:function(a){var z,y,x,w,v,u
H.i(a,"$isV")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.du(0,w,v,u)}},hc:{"^":"q:21;a,b",
$1:function(a){var z,y
H.i(a,"$isQ")
z=this.b.a
y=a.cl()
y.sS(0,this.a.a)
y.sbm(new V.y(0,0,0))
z.h(0,y)}},hb:{"^":"q:40;a",
$2:function(a,b){if(a.hE(b)==null)this.a.c.c7(0,a,b)}},hd:{"^":"q:41;a,b",
$1:function(a){var z,y,x,w
H.i(a,"$isao")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.q()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.c(z,x)
this.b.$2(w,z[x])}},he:{"^":"q:5;a,b",
$1:function(a){var z,y,x,w,v,u
H.i(a,"$isV")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.q()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.c(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},hC:{"^":"c5;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.N()
this.dy=z}return z},
U:[function(a){var z
H.i(a,"$ist")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.U(null)},"im","$1","$0","geG",0,2,0],
fE:[function(a){H.i(a,"$ist")
this.a=null
this.U(a)},function(){return this.fE(null)},"iT","$1","$0","gfD",0,2,0],
iu:[function(a,b){var z=V.ax
z=new D.bY(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.U(z)},"$2","gf5",8,0,22],
iv:[function(a,b){var z=V.ax
z=new D.bZ(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.U(z)},"$2","gf6",8,0,22],
da:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a6(z.e.length+3,4)*4
x=C.f.a6(z.f.length+3,4)*4
w=C.f.a6(z.r.length+3,4)*4
v=C.f.a6(z.x.length+3,4)*4
u=C.f.a6(z.y.length+3,4)*4
t=C.f.a6(z.z.length+3,4)*4
s=C.f.a6(this.e.a.length+3,4)*4
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
a6=$.$get$aD()
if(c){z=$.$get$aC()
a6=new Z.b_(a6.a|z.a)}if(b){z=$.$get$aB()
a6=new Z.b_(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.b_(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.b_(a6.a|z.a)}if(a2){z=$.$get$aQ()
a6=new Z.b_(a6.a|z.a)}return new A.hF(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.w(a,"$isd",[T.eg],"$asd")},
a8:function(a,b){var z
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.E();)C.o.a8(z.d,b)},
eh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.da()
y=H.i(a.fr.j(0,z.al),"$isdZ")
if(y==null){y=A.hB(z,a.a)
a.dz(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bp
z=b.e
if(!(z instanceof Z.ce)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.aq()
v=x.r2
if(v)b.d.aN()
u=x.ry
if(u)b.d.bn()
t=b.d.dB(new Z.eL(a.a),w)
t.ab($.$get$aD()).e=this.a.Q.c
if(z)t.ab($.$get$aC()).e=this.a.cx.c
if(v)t.ab($.$get$aB()).e=this.a.ch.c
if(x.rx)t.ab($.$get$aR()).e=this.a.cy.c
if(u)t.ab($.$get$aS()).e=this.a.db.c
if(x.x1)t.ab($.$get$aQ()).e=this.a.dx.c
b.e=t}z=T.eg
s=H.b([],[z])
this.a.ap(a)
if(x.fx){v=this.a
u=a.dx
u=u.gI(u)
v=v.dy
v.toString
v.a4(u.a2(0,!0))}if(x.fy){v=this.a
u=a.gel()
v=v.fr
v.toString
v.a4(u.a2(0,!0))}v=this.a
u=a.gee()
v=v.fy
v.toString
v.a4(u.a2(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a4(u.a2(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a4(u.a2(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a4(C.o.a2(u,!0))}if(x.ar>0){r=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,r)
for(v=[P.v],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.c(p,q)
p=p[q]
u.toString
H.i(p,"$isax")
u=u.r1
if(q>=u.length)return H.c(u,q)
u=u[q]
o=new Float32Array(H.bM(H.w(p.a2(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.R(s,this.f.d)
v=this.a
u=this.f.d
v.ag(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.R(s,this.f.e)
v=this.a
u=this.f.e
v.aa(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.R(s,this.r.d)
v=this.a
u=this.r.d
v.ag(v.y1,v.ar,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.R(s,this.r.e)
v=this.a
u=this.r.e
v.aa(v.y2,v.ar,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.al
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.R(s,this.x.d)
v=this.a
u=this.x.d
v.ag(v.bp,v.bq,u)
u=this.a
v=this.x.f
u=u.al
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.R(s,this.x.e)
v=this.a
u=this.x.e
v.aa(v.dH,v.bq,u)
u=this.a
v=this.x.f
u=u.al
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.br
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.c:this.R(s,this.y.d)
v=this.a
u=this.y.d
v.ag(v.dI,v.bs,u)
u=this.a
v=this.y.f
u=u.br
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.R(s,this.y.e)
v=this.a
u=this.y.e
v.aa(v.dJ,v.bs,u)
u=this.a
v=this.y.f
u=u.br
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bt
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bv
u.a.uniform1f(u.d,n)
break
case C.c:this.R(s,this.z.d)
v=this.a
u=this.z.d
v.ag(v.dK,v.bu,u)
u=this.a
v=this.z.f
u=u.bt
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bv
v.a.uniform1f(v.d,n)
break
case C.d:this.R(s,this.z.e)
v=this.a
u=this.z.e
v.aa(v.dL,v.bu,u)
u=this.a
v=this.z.f
u=u.bt
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bv
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dW
v.a.uniform1i(v.d,r)
v=a.db
m=v.gI(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.co
if(l>=p.length)return H.c(p,l)
i=p[l]
p=m.ek(j.gbo(j))
n=p.a
h=p.b
g=p.c
g=p.n(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gS(j)
h=i.c
n=g.gb8()
p=g.gaS()
g=g.gaX()
h.a.uniform3f(h.d,n,p,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dX
v.a.uniform1i(v.d,r)
v=a.db
m=v.gI(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cp
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gb7(j)
n=i.b
h=p.gcM(p)
g=p.gcN(p)
p=p.gcO(p)
n.a.uniform3f(n.d,h,g,p)
p=m.bd(j.gb7(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gS(j)
g=i.d
h=p.gb8()
n=p.gaS()
p=p.gaX()
g.a.uniform3f(g.d,h,n,p)
p=j.gcb()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gcc()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gcd()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dY
v.a.uniform1i(v.d,r)
v=a.db
m=v.gI(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cq
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gb7(j)
n=i.b
h=p.gcM(p)
g=p.gcN(p)
p=p.gcO(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbo(j).j0()
g=i.c
h=p.gai(p)
n=p.gaj(p)
p=p.gak()
g.a.uniform3f(g.d,h,n,p)
p=m.bd(j.gb7(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gS(j)
n=i.e
h=p.gb8()
g=p.gaS()
p=p.gaX()
n.a.uniform3f(n.d,h,g,p)
p=j.gj_()
g=i.f
g.a.uniform1f(g.d,p)
p=j.giZ()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gcb()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gcc()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gcd()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.dZ
v.a.uniform1i(v.d,r)
v=a.db
m=v.gI(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
n=this.a.cr
if(l>=n.length)return H.c(n,l)
i=n[l]
n=j.gba()
H.w(s,"$isd",p,"$asd")
if(!C.a.aY(s,n)){n.sb1(0,s.length)
C.a.h(s,n)}n=j.gbo(j)
h=i.d
g=n.gai(n)
f=n.gaj(n)
n=n.gak()
h.a.uniform3f(h.d,g,f,n)
n=j.gaE()
f=i.b
g=n.gai(n)
h=n.gaj(n)
n=n.gak()
f.a.uniform3f(f.d,g,h,n)
n=j.gb9(j)
h=i.c
g=n.gai(n)
f=n.gaj(n)
n=n.gak()
h.a.uniform3f(h.d,g,f,n)
n=m.ek(j.gbo(j))
f=n.a
g=n.b
h=n.c
h=n.n(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gS(j)
g=i.f
f=h.gb8()
n=h.gaS()
h=h.gaX()
g.a.uniform3f(g.d,f,n,h)
h=j.gba()
n=h.gb2(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gb2(h)
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gb1(h))
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.e_
v.a.uniform1i(v.d,r)
v=a.db
m=v.gI(v)
for(v=this.dx.y,u=v.length,p=[P.v],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cs
if(l>=h.length)return H.c(h,l)
i=h[l]
h=j.gba()
H.w(s,"$isd",n,"$asd")
if(!C.a.aY(s,h)){h.sb1(0,s.length)
C.a.h(s,h)}e=m.k(0,j.gI(j))
h=j.gI(j).bd(new V.Y(0,0,0))
g=i.b
f=h.gcM(h)
d=h.gcN(h)
h=h.gcO(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bd(new V.Y(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.e5(0)
d=i.d
o=new Float32Array(H.bM(H.w(new V.e_(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a2(0,!0),"$isd",p,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gS(j)
h=i.e
f=d.gb8()
g=d.gaS()
d=d.gaX()
h.a.uniform3f(h.d,f,g,d)
d=j.gba()
h=d.gb2(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gb2(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gb1(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcb()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcc()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcd()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.e0
v.a.uniform1i(v.d,r)
v=a.db
m=v.gI(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.ct
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gba()
H.w(s,"$isd",z,"$asd")
if(!C.a.aY(s,p)){p.sb1(0,s.length)
C.a.h(s,p)}p=j.gb7(j)
n=i.b
h=p.gcM(p)
g=p.gcN(p)
p=p.gcO(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbo(j)
g=i.c
h=p.gai(p)
n=p.gaj(p)
p=p.gak()
g.a.uniform3f(g.d,h,n,p)
p=j.gaE()
n=i.d
h=p.gai(p)
g=p.gaj(p)
p=p.gak()
n.a.uniform3f(n.d,h,g,p)
p=j.gb9(j)
g=i.e
h=p.gai(p)
n=p.gaj(p)
p=p.gak()
g.a.uniform3f(g.d,h,n,p)
p=m.bd(j.gb7(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gba()
n=p.gb2(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gb2(p)
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gb1(p))
p=i.x
p.a.uniform1i(p.d,0)}p=j.gS(j)
n=i.y
h=p.gb8()
g=p.gaS()
p=p.gaX()
n.a.uniform3f(n.d,h,g,p)
p=j.gj7()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gj8()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gcb()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gcc()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gcd()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.c:this.R(s,this.Q.d)
z=this.a
v=this.Q.d
z.ag(z.dM,z.bw,v)
break
case C.d:this.R(s,this.Q.e)
z=this.a
v=this.Q.e
z.aa(z.dN,z.bw,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gI(v).e5(0)
a.Q=v}z=z.id
z.toString
z.a4(v.a2(0,!0))}if(x.dy){this.R(s,this.ch)
z=this.a
v=this.ch
z.aa(z.dO,z.dP,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bx
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.c:this.R(s,this.cx.d)
z=this.a
v=this.cx.d
z.ag(z.dQ,z.by,v)
v=this.a
z=this.cx.f
v=v.bx
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.R(s,this.cx.e)
z=this.a
v=this.cx.e
z.aa(z.dR,z.by,v)
v=this.a
z=this.cx.f
v=v.bx
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bA
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bz
v.a.uniform1f(v.d,p)
break
case C.c:this.R(s,this.cy.d)
z=this.a
v=this.cy.d
z.ag(z.dS,z.bB,v)
v=this.a
z=this.cy.f
v=v.bA
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bz
z.a.uniform1f(z.d,p)
break
case C.d:this.R(s,this.cy.e)
z=this.a
v=this.cy.e
z.aa(z.dT,z.bB,v)
v=this.a
z=this.cy.f
v=v.bA
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bz
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bC
z.a.uniform1f(z.d,u)
break
case C.c:this.R(s,this.db.d)
z=this.a
u=this.db.d
z.ag(z.dU,z.bD,u)
u=this.a
z=this.db.f
u=u.bC
u.a.uniform1f(u.d,z)
break
case C.d:this.R(s,this.db.e)
z=this.a
u=this.db.e
z.aa(z.dV,z.bD,u)
u=this.a
z=this.db.f
u=u.bC
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q)s[q].ap(a)
z=H.e(b.e,"$isce")
z.ap(a)
z.am(a)
z.cK(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q)s[q].cK(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.dG()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.da().al},
p:{
b8:function(){var z,y,x
z=new O.hC()
y=O.cG(V.ax)
z.e=y
y.aT(z.gf5(),z.gf6())
y=new O.b9(z,"emission")
y.c=C.b
y.f=new V.Z(0,0,0)
z.f=y
y=new O.b9(z,"ambient")
y.c=C.b
y.f=new V.Z(0,0,0)
z.r=y
y=new O.b9(z,"diffuse")
y.c=C.b
y.f=new V.Z(0,0,0)
z.x=y
y=new O.b9(z,"invDiffuse")
y.c=C.b
y.f=new V.Z(0,0,0)
z.y=y
y=new O.hH(z,"specular")
y.c=C.b
y.f=new V.Z(0,0,0)
y.ch=100
z.z=y
y=new O.hE(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.b9(z,"reflect")
y.c=C.b
y.f=new V.Z(0,0,0)
z.cx=y
y=new O.hG(z,"refract")
y.c=C.b
y.f=new V.Z(0,0,0)
y.ch=1
z.cy=y
y=new O.hD(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.hn()
y.be(D.a_)
y.e=H.b([],[D.fP])
y.f=H.b([],[D.hV])
y.r=H.b([],[D.it])
y.x=H.b([],[D.iD])
y.y=H.b([],[D.iE])
y.z=H.b([],[D.iF])
y.Q=null
y.ch=null
y.cR(y.gf4(),y.gfn(),y.gfp())
z.dx=y
x=y.Q
if(x==null){x=D.N()
y.Q=x
y=x}else y=x
y.h(0,z.gfD())
y=z.dx
x=y.ch
if(x==null){x=D.N()
y.ch=x
y=x}else y=x
y.h(0,z.geG())
z.dy=null
return z}}},hD:{"^":"cQ;0f,a,b,0c,0d,0e",
c1:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.G(this.b,y,a,this,[P.v])
z.b=!0
this.a.U(z)}},
aU:function(){this.cX()
this.c1(1)},
sbG:function(a,b){var z
if(b<=0)this.hr(0)
else if(this.c===C.b){this.c=C.e
this.cY()
this.c1(1)
z=this.a
z.a=null
z.U(null)}this.c1(b)}},cQ:{"^":"a;",
aU:["cX",function(){}],
bi:["cY",function(){}],
fG:function(a){},
fH:function(a){},
hr:function(a){var z
if(this.c!==C.b){this.c=C.b
z=this.a
z.a=null
z.U(null)}this.aU()
this.fG(null)
this.fH(null)
this.a.U(null)}},hE:{"^":"cQ;a,b,0c,0d,0e"},b9:{"^":"cQ;0f,a,b,0c,0d,0e",
c2:function(a){var z,y
if(!J.B(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.Z])
y.b=!0
this.a.U(y)}},
aU:["cZ",function(){this.cX()
this.c2(new V.Z(0,0,0))}],
bi:["d_",function(){this.cY()
this.c2(new V.Z(1,1,1))}],
sS:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.bi()
z=this.a
z.a=null
z.U(null)}this.c2(b)}},hG:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
dn:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.U(z)}},
aU:function(){this.cZ()
this.dn(1)},
bi:function(){this.d_()
this.dn(1)}},hH:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
dq:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.U(z)}},
aU:function(){this.cZ()
this.dq(100)},
bi:function(){this.d_()
this.dq(100)}},c5:{"^":"a;"}}],["","",,T,{"^":"",eg:{"^":"cB;"},iC:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fu:{"^":"a;",
b3:function(a,b){return!0},
i:function(a){return"all"},
$isc1:1},c1:{"^":"a;"},dY:{"^":"a;",
b3:["ew",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].b3(0,b))return!0
return!1}],
i:["cW",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc1:1},by:{"^":"dY;0a",
b3:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}},ii:{"^":"a;0a",
ez:function(a){var z,y
if(a.a.length<=0)throw H.h(P.j("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.C,P.a8])
for(y=new H.dV(a,a.gl(a),0,[H.aL(a,"u",0)]);y.E();)z.a_(0,y.d,!0)
this.a=z},
b3:function(a,b){return this.a.dE(0,b)},
i:function(a){var z=this.a
return P.cY(new H.dU(z,[H.z(z,0)]),0,null)},
$isc1:1,
p:{
a7:function(a){var z=new V.ii()
z.ez(a)
return z}}},eb:{"^":"a;a,b,0c,0d",
ghP:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.em(this.a.K(0,b))
w.a=H.b([],[V.c1])
w.c=!1
C.a.h(this.c,w)
return w},
hC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.b3(0,a))return w}return},
i:function(a){return this.b}},ej:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fo(this.b,"\n","\\n")
y=H.fo(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ek:{"^":"a;a,b,0c",
i:function(a){return this.b}},iJ:{"^":"a;0a,0b,0c",
K:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eb(this,b)
z.c=H.b([],[V.em])
this.a.a_(0,b,z)}return z},
bb:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ek(this,a)
y=P.o
z.c=new H.aX(0,0,[y,y])
this.b.a_(0,a,z)}return z},
ik:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ej])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bg(a,t)
r=y.hC(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cY(w,0,null)
throw H.h(P.j("Untokenizable string [state: "+y.ghP(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cY(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ej(o==null?p.b:o,q,t)}++t}}}},em:{"^":"dY;b,0c,0a",
i:function(a){return this.b.b+": "+this.cW(0)}}}],["","",,X,{"^":"",dv:{"^":"a;",$isaO:1},h4:{"^":"ee;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
p:{
ci:function(a,b,c,d,e,f,g){var z,y
z=new X.h4()
y=new V.I(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e8(0,0,1,1)
z.r=y
return z}}},hS:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.N()
this.f=z}return z},
aG:[function(a){var z
H.i(a,"$ist")
z=this.f
if(!(z==null))z.u(a)},function(){return this.aG(null)},"io","$1","$0","gbf",0,2,0],
sT:function(a){var z,y
if(!J.B(this.b,a)){z=this.b
if(z!=null)z.gt().B(0,this.gbf())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gbf())
z=new D.G("mover",y,this.b,this,[U.aa])
z.b=!0
this.aG(z)}},
saD:function(a){var z,y
if(!J.B(this.a,a)){z=this.a
if(z!=null)z.gt().B(0,this.gbf())
y=this.a
this.a=a
if(a!=null)a.gt().h(0,this.gbf())
z=new D.G("premover",y,this.a,this,[U.aa])
z.b=!0
this.aG(z)}},
$isaO:1,
$isdv:1,
p:{
bb:function(a,b,c,d,e){var z,y,x
z=new X.hS()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.saD(e)
z.sT(c)
y=z.c
if(!$.n.$2(y,b)){x=z.c
z.c=b
y=new D.G("fov",x,b,z,[P.v])
y.b=!0
z.aG(y)}y=z.d
if(!$.n.$2(y,d)){x=z.d
z.d=d
y=new D.G("near",x,d,z,[P.v])
y.b=!0
z.aG(y)}y=z.e
if(!$.n.$2(y,a)){x=z.e
z.e=a
y=new D.G("far",x,a,z,[P.v])
y.b=!0
z.aG(y)}return z}}},ee:{"^":"a;"}}],["","",,V,{"^":"",io:{"^":"a;0a,0b",
eA:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.m(new V.ir(x),{func:1,ret:-1,args:[t]}),!1,t)},
hk:function(a,b,c){var z,y,x,w
a=H.a0(C.f.hq(a,0,4))
if(c.length===0)c=P.f0(C.r,b,C.n,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.fv(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
c9:function(a,b){return this.hk(a,b,"")},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.o],"$asd")
this.fL()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ik(C.a.hK(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fn(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.c(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.f0(C.r,s,C.n,!1)
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
ca:function(a){var z=W.dw(null,null)
z.className="pageLargeCanvas"
z.id=a
this.a.appendChild(z)},
fL:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iJ()
y=P.o
z.a=new H.aX(0,0,[y,V.eb])
z.b=new H.aX(0,0,[y,V.ek])
z.c=z.K(0,"Start")
y=z.K(0,"Start").D(0,"Bold")
x=V.a7(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").D(0,"Bold")
x=new V.by()
w=[V.c1]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a7(new H.a4("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").D(0,"BoldEnd")
x=V.a7(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").D(0,"Italic")
x=V.a7(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").D(0,"Italic")
x=new V.by()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a7(new H.a4("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").D(0,"ItalicEnd")
x=V.a7(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").D(0,"Code")
x=V.a7(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").D(0,"Code")
x=new V.by()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a7(new H.a4("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").D(0,"CodeEnd")
x=V.a7(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").D(0,"LinkHead")
x=V.a7(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").D(0,"LinkTail")
x=V.a7(new H.a4("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").D(0,"LinkEnd")
y=V.a7(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").D(0,"LinkHead")
y=new V.by()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a7(new H.a4("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").D(0,"LinkEnd")
y=V.a7(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").D(0,"LinkTail")
y=new V.by()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a7(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").D(0,"Other").a,new V.fu())
x=z.K(0,"Other").D(0,"Other")
y=new V.by()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a7(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.bb("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.bb("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.bb("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.bb("Link")
x=z.K(0,"Other")
x.d=x.a.bb("Other")
this.b=z},
p:{
ip:function(a,b){var z=new V.io()
z.eA(a,!0)
return z}}},ir:{"^":"q:42;a",
$1:function(a){P.ei(C.l,new V.iq(this.a))}},iq:{"^":"q:3;a",
$0:function(){var z,y,x
z=C.h.an(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
la:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
y=E.cZ(a,!0,!0,!0,!1)
x=O.b8()
w=x.f
w.sS(0,new V.Z(0.4,0.6,0.8))
v=O.b8()
w=v.f
w.sS(0,new V.Z(0.8,0.6,0.4))
v.db.sbG(0,0.3)
u=O.b8()
w=u.f
w.sS(0,new V.Z(0.4,0.6,0.8))
u.db.sbG(0,0.3)
t=U.M(null)
s=U.M(null)
r=E.an(null,!0,null,"",null,null)
r.sa3(x)
w=F.az()
w.aC(F.cz(!0,2,null,2,0))
w.aC(F.fb(-1,!1,!0,0,null,36))
r.sa0(0,w)
q=E.an(null,!0,null,"",null,null)
q.sa3(v)
q.sa0(0,F.dj(null))
w=U.aG(null)
w.h(0,U.M(V.ba(1.3,1.3,1.3,1)))
w.h(0,U.M(V.bw(-1.5707963267948966)))
w.h(0,t)
q.sT(w)
p=E.an(null,!0,null,"",null,null)
p.sa0(0,F.dj(null))
w=U.aG(null)
w.h(0,U.M(V.a6(0,0,0.1)))
p.sT(w)
o=E.an(null,!0,null,"",null,null)
o.sa0(0,F.dj(null))
w=U.aG(null)
w.h(0,s)
o.sT(w)
n=M.bp(null,null,null,null)
n.sbF(0,X.ci(!1,!0,!1,null,2000,null,0))
w=X.bb(2000,1.0471975511965976,null,0.1,null)
w.saD(U.M(V.a6(-0.5,0,0)))
w.sT(U.M(V.a6(0,0,5)))
n.saz(w)
n.d.h(0,q)
n.d.h(0,r)
m=M.bp(null,null,null,null)
w=X.bb(2000,1.0471975511965976,null,0.1,null)
w.saD(U.M(V.a6(0.5,0,0)))
w.sT(U.M(V.a6(0,0,5)))
m.saz(w)
m.sa3(u)
m.d.h(0,o)
m.d.h(0,p)
z.a=0.5
z.b=!1
y.r.c.gb0().h(0,new M.lb(z))
y.r.c.gaE().h(0,new M.lc(z))
y.r.c.gb4().h(0,new M.ld(z,t,p,o,s))
y.sbH(M.cI(H.b([m,n],[M.aq])))},
le:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z={}
y=E.cZ(a,!0,!0,!0,!1)
x=O.dM(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
x.scT(!0)
x.scS(!0)
x.sdF(new V.I(0.2,0.3,0.4,0.2))
x.sdA(new V.I(0.1,0.2,0.3,0.2))
w=O.b8()
v=w.f
v.sS(0,new V.Z(0.8,0.6,0.4))
w.db.sbG(0,0.3)
u=O.b8()
v=u.f
v.sS(0,new V.Z(0.4,0.6,0.8))
t=U.M(null)
s=U.M(null)
r=U.aG(null)
r.h(0,U.M(V.bw(0.4)))
r.h(0,U.M(V.cS(0.4)))
q=E.an(null,!0,null,"",null,null)
q.sa3(x)
v=F.az()
v.aC(F.fa(1,null,null,1))
v.aC(F.fh(2))
q.sa0(0,v)
q.sT(r)
p=E.an(null,!0,null,"",null,null)
p.sa3(w)
p.sa0(0,F.cz(!1,2,null,2,0))
v=U.aG(null)
v.h(0,U.M(V.ba(1.3,1.3,1.3,1)))
v.h(0,U.M(V.bw(-1.5707963267948966)))
v.h(0,t)
v.h(0,r)
p.sT(v)
o=E.an(null,!0,null,"",null,null)
o.sa0(0,F.cz(!0,2,null,2,0))
n=E.an(null,!0,null,"",null,null)
n.sa0(0,F.fb(-1,!1,!0,0,null,36))
v=U.aG(null)
v.h(0,s)
n.sT(v)
m=M.bp(null,null,null,null)
m.sbF(0,X.ci(!1,!0,!1,null,2000,null,0))
v=X.bb(2000,1.0471975511965976,null,0.1,null)
v.saD(U.M(V.a6(-0.5,0,0)))
v.sT(U.M(V.a6(0,0,5)))
m.saz(v)
m.d.h(0,p)
m.d.h(0,q)
l=M.bp(null,null,null,null)
v=X.bb(2000,1.0471975511965976,null,0.1,null)
v.saD(U.M(V.a6(0.5,0,0)))
v.sT(U.M(V.a6(0,0,5)))
l.saz(v)
l.sa3(u)
l.d.h(0,n)
l.d.h(0,o)
z.a=0.5
z.b=!1
y.r.c.gb0().h(0,new M.lf(z))
y.r.c.gaE().h(0,new M.lg(z))
y.r.c.gb4().h(0,new M.lh(z,t,o,n,s))
y.sbH(M.cI(H.b([l,m],[M.aq])))},
li:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z={}
y=E.cZ(b1,!0,!0,!0,!1)
x=O.b8()
w=x.f
w.sS(0,new V.Z(0.4,0.6,0.8))
v=O.b8()
w=v.f
w.sS(0,new V.Z(0.8,0.6,0.4))
v.db.sbG(0,0.3)
u=O.dM(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
u.scT(!0)
u.scS(!0)
u.sdF(new V.I(0.2,0.3,0.4,0.2))
u.sdA(new V.I(0.1,0.2,0.3,0.2))
t=U.M(null)
s=U.M(null)
r=U.aG(null)
r.h(0,U.M(V.bw(0.4)))
r.h(0,U.M(V.cS(0.4)))
q=U.aG(null)
p=F.az()
o=p.a.V(1,-1,1)
n=p.a.V(1,1,1)
m=p.a.V(1,1,-1)
l=p.a.V(1,-1,-1)
k=p.a.V(-1,-1,1)
j=p.a.V(-1,1,1)
i=p.a.V(-1,1,-1)
h=p.a.V(-1,-1,-1)
g=p.a.V(0.5,-0.5,0.5)
f=p.a.V(0.5,0.5,0.5)
e=p.a.V(0.5,0.5,-0.5)
d=p.a.V(0.5,-0.5,-0.5)
c=p.a.V(-0.5,-0.5,0.5)
b=p.a.V(-0.5,0.5,0.5)
a=p.a.V(-0.5,0.5,-0.5)
a0=p.a.V(-0.5,-0.5,-0.5)
p.c.hl(H.b([o,n,n,m,m,l,l,o,k,j,j,i,i,h,h,k,g,f,f,e,e,d,d,g,c,b,b,a,a,a0,a0,c,o,k,n,j,m,i,l,h,g,c,f,b,e,a,d,a0,o,g,n,f,m,e,l,d,k,c,j,b,i,a,h,a0],[F.Q]))
a1=E.an(null,!0,null,"",null,null)
a1.sa3(x)
a1.sa0(0,p)
a1.sT(r)
a2=E.an(null,!0,null,"",null,null)
a2.sa3(v)
a2.sa0(0,F.cz(!1,2,null,2,0))
w=U.aG(null)
w.h(0,U.M(V.ba(1.1,1.1,1.1,1)))
w.h(0,U.M(V.bw(-1.5707963267948966)))
w.h(0,t)
w.h(0,r)
a2.sT(w)
a3=E.an(null,!0,null,"",null,null)
a3.sa0(0,F.fa(1,null,null,1))
a3.sT(q)
a4=E.an(null,!0,null,"",null,null)
a4.sa0(0,F.fh(2))
w=U.aG(null)
w.h(0,s)
w.h(0,q)
a4.sT(w)
a5=M.bp(null,null,null,null)
a5.sbF(0,X.ci(!1,!0,!1,null,2000,null,0))
w=X.bb(2000,1.0471975511965976,null,0.1,null)
w.saD(U.M(V.a6(-0.5,0,0)))
w.sT(U.M(V.a6(0,0,5)))
a5.saz(w)
a5.d.h(0,a1)
a5.d.h(0,a2)
a6=M.bp(null,null,null,null)
w=X.bb(2000,1.0471975511965976,null,0.1,null)
w.saD(U.M(V.a6(0.5,0,0)))
w.sT(U.M(V.a6(0,0,5)))
a6.saz(w)
a6.sa3(u)
a6.d.h(0,a4)
a6.d.h(0,a3)
z.a=0.5
z.b=!1
y.r.c.gb0().h(0,new M.lj(z))
y.r.c.gaE().h(0,new M.lk(z))
y.r.c.gb4().h(0,new M.ll(z,t,a3,a4,s))
z=y.r
w=new U.j1()
a7=U.cH()
a7.scL(0,!0)
a7.scz(6.283185307179586)
a7.scB(0)
a7.sY(0,0)
a7.scA(100)
a7.sO(0)
a7.scn(0.5)
w.b=a7
a8=w.gaK()
a7.gt().h(0,a8)
a7=U.cH()
a7.scL(0,!0)
a7.scz(6.283185307179586)
a7.scB(0)
a7.sY(0,0)
a7.scA(100)
a7.sO(0)
a7.scn(0.5)
w.c=a7
a7.gt().h(0,a8)
w.d=null
w.e=!1
w.f=!1
w.r=!1
w.x=2.5
w.y=2.5
w.z=2
w.Q=4
w.cx=!1
w.ch=!1
w.cy=0
w.db=0
w.dx=null
w.dy=0
w.fr=null
w.fx=null
a9=new X.aI(!1,!1,!1)
b0=w.d
w.d=a9
a7=[X.aI]
a8=new D.G("modifiers",b0,a9,w,a7)
a8.b=!0
w.N(a8)
a8=w.f
if(a8!==!1){w.f=!1
a8=new D.G("invertX",a8,!1,w,[P.a8])
a8.b=!0
w.N(a8)}a8=w.r
if(a8!==!0){w.r=!0
a8=new D.G("invertY",a8,!0,w,[P.a8])
a8.b=!0
w.N(a8)}w.aW(z)
q.h(0,w)
z=y.r
w=new U.j0()
a8=U.cH()
a8.scL(0,!0)
a8.scz(6.283185307179586)
a8.scB(0)
a8.sY(0,0)
a8.scA(100)
a8.sO(0)
a8.scn(0.2)
w.b=a8
a8.gt().h(0,w.gaK())
w.c=null
w.d=!1
w.e=2.5
w.f=2
w.r=4
w.y=!1
w.x=!1
w.z=0
w.Q=null
w.ch=0
w.cx=null
w.cy=null
a9=new X.aI(!0,!1,!1)
b0=w.c
w.c=a9
a8=new D.G("modifiers",b0,a9,w,a7)
a8.b=!0
w.N(a8)
w.aW(z)
q.h(0,w)
z=y.r
w=new U.j2()
w.c=0.01
w.d=0
w.e=0
a9=new X.aI(!1,!1,!1)
w.b=a9
a7=new D.G("modifiers",null,a9,w,a7)
a7.b=!0
w.N(a7)
w.aW(z)
q.h(0,w)
y.sbH(M.cI(H.b([a6,a5],[M.aq])))},
fi:function(){var z,y
z=V.ip("Hypersphere",!0)
y=[P.o]
z.ah(H.b(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],y))
z.c9(3,"2D: circle and square")
z.ah(H.b(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],y))
z.ca("target2D")
z.ah(H.b(["_Click and drag to move the location of the slice._"],y))
z.c9(3,"3D: sphere and cube")
z.ah(H.b(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],y))
z.ca("target3D")
z.ah(H.b(["_Click and drag to move the location of the slice._"],y))
z.c9(3,"4D: hypersphere and hypercube")
z.ah(H.b(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],y))
z.ca("target4D")
z.ah(H.b(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],y))
z.ah(H.b(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],y))
z.ah(H.b(["\xab[Back to Examples|../]"],y))
M.la("target2D")
M.le("target3D")
M.li("target4D")},
lb:{"^":"q:1;a",
$1:function(a){H.i(a,"$ist")
this.a.b=!0}},
lc:{"^":"q:1;a",
$1:function(a){H.i(a,"$ist")
this.a.b=!1}},
ld:{"^":"q:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.e(H.i(a,"$ist"),"$isaN")
z=this.a
if(!z.b)return
y=z.a
x=a.c
w=a.d.G(0,a.z)
x=new V.P(w.a,w.b).k(0,2).n(0,x.gZ()).b
if(typeof x!=="number")return H.p(x)
v=y+x
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sI(0,V.a6(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sI(0,V.ba(u,u,u,1))
x.b=!0
w.b=!0}}},
lf:{"^":"q:1;a",
$1:function(a){H.i(a,"$ist")
this.a.b=!0}},
lg:{"^":"q:1;a",
$1:function(a){H.i(a,"$ist")
this.a.b=!1}},
lh:{"^":"q:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.e(H.i(a,"$ist"),"$isaN")
z=this.a
if(!z.b)return
y=z.a
x=a.c
w=a.d.G(0,a.z)
x=new V.P(w.a,w.b).k(0,2).n(0,x.gZ()).b
if(typeof x!=="number")return H.p(x)
v=y+x
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sI(0,V.a6(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sI(0,V.ba(u,u,u,1))
x.b=!0
w.b=!0}}},
lj:{"^":"q:1;a",
$1:function(a){H.i(a,"$ist")
this.a.b=!0}},
lk:{"^":"q:1;a",
$1:function(a){H.i(a,"$ist")
this.a.b=!1}},
ll:{"^":"q:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.e(H.i(a,"$ist"),"$isaN")
z=this.a
if(!z.b)return
y=a.c
x=a.d
if(new V.F((x.a-y.a-y.c*0.5)*2,(x.b-y.b-y.d*0.5)*2).n(0,y.gZ()).a>0)return
w=z.a
x=x.G(0,a.z)
y=new V.P(x.a,x.b).k(0,2).n(0,y.gZ()).b
if(typeof y!=="number")return H.p(y)
v=w+y
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sI(0,V.a6(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sI(0,V.ba(u,u,u,1))
x.b=!0
w.b=!0}a.b=!1}}},1]]
setupProgram(dart,0,0)
J.R=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.hi.prototype}if(typeof a=="string")return J.cM.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hh.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.c9=function(a){if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.dg=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.kT=function(a){if(typeof a=="number")return J.ck.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d4.prototype
return a}
J.cv=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cw(a)}
J.B=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).v(a,b)}
J.fq=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kT(a).ae(a,b)}
J.fr=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c9(a).j(a,b)}
J.fs=function(a,b,c,d){return J.cv(a).dv(a,b,c,d)}
J.cA=function(a,b,c){return J.c9(a).ht(a,b,c)}
J.dm=function(a,b){return J.dg(a).F(a,b)}
J.ft=function(a,b){return J.dg(a).H(a,b)}
J.b6=function(a){return J.R(a).gW(a)}
J.bT=function(a){return J.dg(a).gX(a)}
J.bl=function(a){return J.c9(a).gl(a)}
J.ad=function(a){return J.R(a).i(a)}
I.dk=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cE.prototype
C.y=J.r.prototype
C.a=J.b7.prototype
C.f=J.dP.prototype
C.o=J.dQ.prototype
C.h=J.ck.prototype
C.i=J.cM.prototype
C.F=J.c_.prototype
C.G=H.hO.prototype
C.H=W.hP.prototype
C.t=J.hT.prototype
C.m=J.d4.prototype
C.u=W.bJ.prototype
C.v=W.ji.prototype
C.w=new P.hR()
C.x=new P.j4()
C.j=new P.k4()
C.b=new A.cf(0,"ColorSourceType.None")
C.e=new A.cf(1,"ColorSourceType.Solid")
C.c=new A.cf(2,"ColorSourceType.Texture2D")
C.d=new A.cf(3,"ColorSourceType.TextureCube")
C.l=new P.bV(0)
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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

C.B=function(getTagFallback) {
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
C.C=function() {
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
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.r=H.b(I.dk([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.n=new P.j3(!1)
$.aE=0
$.bm=null
$.dq=null
$.d9=!1
$.fe=null
$.f6=null
$.fm=null
$.cu=null
$.cx=null
$.dh=null
$.bg=null
$.bN=null
$.bO=null
$.da=!1
$.U=C.j
$.dH=null
$.dG=null
$.dF=null
$.dE=null
$.n=V.hI()
$.ha="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.h7="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.e3=null
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
I.$lazy(y,x,w)}})(["dD","$get$dD",function(){return H.fd("_$dart_dartClosure")},"cN","$get$cN",function(){return H.fd("_$dart_js")},"en","$get$en",function(){return H.aJ(H.co({
toString:function(){return"$receiver$"}}))},"eo","$get$eo",function(){return H.aJ(H.co({$method$:null,
toString:function(){return"$receiver$"}}))},"ep","$get$ep",function(){return H.aJ(H.co(null))},"eq","$get$eq",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eu","$get$eu",function(){return H.aJ(H.co(void 0))},"ev","$get$ev",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"es","$get$es",function(){return H.aJ(H.et(null))},"er","$get$er",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"ex","$get$ex",function(){return H.aJ(H.et(void 0))},"ew","$get$ew",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d6","$get$d6",function(){return P.jj()},"bP","$get$bP",function(){return[]},"f_","$get$f_",function(){return P.i7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dB","$get$dB",function(){return{}},"eJ","$get$eJ",function(){return Z.av(0)},"eH","$get$eH",function(){return Z.av(511)},"aD","$get$aD",function(){return Z.av(1)},"aC","$get$aC",function(){return Z.av(2)},"aB","$get$aB",function(){return Z.av(4)},"aR","$get$aR",function(){return Z.av(8)},"aS","$get$aS",function(){return Z.av(16)},"b0","$get$b0",function(){return Z.av(32)},"bI","$get$bI",function(){return Z.av(64)},"eI","$get$eI",function(){return Z.av(96)},"be","$get$be",function(){return Z.av(128)},"aQ","$get$aQ",function(){return Z.av(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.t]},{func:1,ret:P.J,args:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:P.J,args:[F.V]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.C,[P.f,E.aM]]},{func:1,ret:P.v},{func:1,ret:-1,args:[W.bd]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:-1,args:[P.C,[P.f,D.a_]]},{func:1,ret:-1,args:[P.C,[P.f,U.aa]]},{func:1,ret:-1,args:[P.C,[P.f,M.aq]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.J,args:[F.Q]},{func:1,ret:-1,args:[P.C,[P.f,V.ax]]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a8,args:[W.O]},{func:1,ret:W.a5,args:[W.O]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.J,args:[P.a1]},{func:1,ret:-1,args:[P.a],opt:[P.aA]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:P.a8,args:[[P.f,D.a_]]},{func:1,ret:P.a8,args:[P.v,P.v]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.J,args:[F.Q,P.v,P.v]},{func:1,ret:P.v,args:[P.v]},{func:1,ret:F.aj,args:[F.aj]},{func:1,ret:F.aj,args:[F.aj],named:{color:V.I}},{func:1,ret:-1,args:[F.Q,F.Q]},{func:1,ret:P.J,args:[F.ao]},{func:1,ret:P.J,args:[W.ah]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.t]}]}]
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
if(x==y)H.ln(d||a)
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
Isolate.dk=a.dk
Isolate.de=a.de
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
if(typeof dartMainRunner==="function")dartMainRunner(M.fi,[])
else M.fi([])})})()
//# sourceMappingURL=main.dart.js.map
