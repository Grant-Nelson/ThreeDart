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
K:function(a){return void 0},
dF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dD==null){H.mD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c4("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cY()]
if(v!=null)return v
v=H.mI(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cY(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
u:function(a,b){return a===b},
gS:function(a){return H.bJ(a)},
j:["ep",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hV:{"^":"r;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isah:1},
eg:{"^":"r;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isH:1},
cZ:{"^":"r;",
gS:function(a){return 0},
j:["eq",function(a){return String(a)}]},
iE:{"^":"cZ;"},
c5:{"^":"cZ;"},
c3:{"^":"cZ;",
j:function(a){var z=a[$.$get$e1()]
if(z==null)return this.eq(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscU:1},
b5:{"^":"r;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.u(P.A("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.u(P.A("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b1(a))}},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hz:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b1(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bJ:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a_(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.x(a,0)])
return H.h(a.slice(b,c),[H.x(a,0)])},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hT())},
aB:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.u(P.A("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.D(0,1))a[z]=d},
b0:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
j:function(a){return P.cW(a,"[","]")},
gZ:function(a){return new J.au(a,a.length,0,[H.x(a,0)])},
gS:function(a){return H.bJ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.a_(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.u(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
a[b]=c},
$isk:1,
$isc:1,
p:{
hU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a_(a,0,4294967295,"length",null))
return J.ed(new Array(a),b)},
ed:function(a,b){return J.bB(H.h(a,[b]))},
bB:function(a){H.bX(a)
a.fixed$length=Array
return a}}},
nX:{"^":"b5;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c1:{"^":"r;",
ghG:function(a){return a===0?1/a<0:a<0},
ig:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cl:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eb:function(a,b){var z
if(b>20)throw H.a(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghG(a))return"-"+z
return z},
bb:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.u(P.A("Unexpected toString result: "+z))
x=J.aE(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.i("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a*b},
bf:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aM:function(a,b){var z
if(a>0)z=this.d4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fN:function(a,b){if(b<0)throw H.a(H.ad(b))
return this.d4(a,b)},
d4:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a<b},
$isq:1,
$isX:1},
ef:{"^":"c1;",$isn:1},
ee:{"^":"c1;"},
c2:{"^":"r;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b<0)throw H.a(H.aD(a,b))
if(b>=a.length)H.u(H.aD(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aD(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.N(b)
if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aU:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ad(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.ad(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.ad(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.a8(a,b,0)},
v:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.cr(b,null,null))
if(b>c)throw H.a(P.cr(b,null,null))
if(c>a.length)throw H.a(P.cr(c,null,null))
return a.substring(b,c)},
aE:function(a,b){return this.v(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hT:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
ac:function(a,b){return this.hT(a,b," ")},
dR:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dQ:function(a,b){return this.dR(a,b,0)},
ho:function(a,b,c){if(c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
return H.n1(a,b,c)},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseu:1,
$isi:1}}],["","",,H,{"^":"",
cD:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hT:function(){return new P.jc("No element")},
hm:{"^":"jJ;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascv:function(){return[P.n]},
$asy:function(){return[P.n]},
$ask:function(){return[P.n]},
$asc:function(){return[P.n]}},
hD:{"^":"k;"},
i9:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aE(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b1(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
ii:{"^":"k;a,b,$ti",
gZ:function(a){return new H.ij(J.bu(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
I:function(a,b){return this.b.$1(J.cJ(this.a,b))},
$ask:function(a,b){return[b]}},
ij:{"^":"cX;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascX:function(a,b){return[b]}},
kf:{"^":"k;a,b,$ti",
gZ:function(a){return new H.kg(J.bu(this.a),this.b,this.$ti)}},
kg:{"^":"cX;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
ch:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.z(c,H.aF(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aB:function(a,b,c,d){H.z(d,H.aF(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jJ:{"^":"cm+cv;"}}],["","",,H,{"^":"",
hq:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
my:function(a){return init.types[H.C(a)]},
fT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.ad(a))
return z},
bJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iO:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.K(a).$isc5){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aE(w,1)
r=H.dE(H.bX(H.aY(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iG:function(){if(!!self.location)return self.location.href
return},
ew:function(a){var z,y,x,w,v
H.bX(a)
z=J.at(a)
if(typeof z!=="number")return z.el()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iP:function(a){var z,y,x,w
z=H.h([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aM(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ad(w))}return H.ew(z)},
ex:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ad(x))
if(x<0)throw H.a(H.ad(x))
if(x>65535)return H.iP(a)}return H.ew(a)},
iQ:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.el()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cp:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aM(z,10))>>>0,56320|z&1023)}}throw H.a(P.a_(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iN:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iL:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iH:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iI:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iK:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iM:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iJ:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ad(a))},
d:function(a,b){if(a==null)J.at(a)
throw H.a(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.C(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cr(b,"index",null)},
ms:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ad:function(a){return new P.aG(!0,a,null,null)},
mh:function(a){if(typeof a!=="number")throw H.a(H.ad(a))
return a},
a:function(a){var z
if(a==null)a=new P.et()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h0})
z.name=""}else z.toString=H.h0
return z},
h0:function(){return J.aa(this.dartException)},
u:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b1(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aM(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d_(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.es(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eM()
u=$.$get$eN()
t=$.$get$eO()
s=$.$get$eP()
r=$.$get$eT()
q=$.$get$eU()
p=$.$get$eR()
$.$get$eQ()
o=$.$get$eW()
n=$.$get$eV()
m=v.ab(y)
if(m!=null)return z.$1(H.d_(H.N(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.d_(H.N(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.es(H.N(y),m))}}return z.$1(new H.jI(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eD()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eD()
return a},
bs:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
mv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mF:function(a,b,c,d,e,f){H.e(a,"$iscU")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mF)
a.$identity=z
return z},
hl:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.iV(z).r}else x=d
w=e?Object.create(new H.jd().constructor.prototype):Object.create(new H.cM(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ax
if(typeof u!=="number")return u.D()
$.ax=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dZ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.my,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dS:H.cN
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dZ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hi:function(a,b,c,d){var z=H.cN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hk(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hi(y,!w,z,b)
if(y===0){w=$.ax
if(typeof w!=="number")return w.D()
$.ax=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bv
if(v==null){v=H.cc("self")
$.bv=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ax
if(typeof w!=="number")return w.D()
$.ax=w+1
t+=w
w="return function("+t+"){return this."
v=$.bv
if(v==null){v=H.cc("self")
$.bv=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hj:function(a,b,c,d){var z,y
z=H.cN
y=H.dS
switch(b?-1:a){case 0:throw H.a(H.j4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hk:function(a,b){var z,y,x,w,v,u,t,s
z=$.bv
if(z==null){z=H.cc("self")
$.bv=z}y=$.dR
if(y==null){y=H.cc("receiver")
$.dR=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hj(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.ax
if(typeof y!=="number")return y.D()
$.ax=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.ax
if(typeof y!=="number")return y.D()
$.ax=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){var z,y
z=J.bB(H.bX(b))
H.C(c)
y=!!J.K(d).$isc?J.bB(d):d
return H.hl(a,z,c,y,!!e,f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
mR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
fY:function(a,b){throw H.a(H.aw(a,H.N(b).substring(3)))},
mT:function(a,b){var z=J.aE(b)
throw H.a(H.hh(a,z.v(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fY(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.mT(a,b)},
bX:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.aw(a,"List"))},
fV:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.fY(a,b)},
fP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c7:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fP(J.K(a))
if(z==null)return!1
y=H.fS(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.c7(a,b))return a
z=H.ca(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.du=!1}},
dB:function(a,b){if(a!=null&&!H.dx(a,b))H.u(H.aw(a,H.ca(b)))
return a},
fG:function(a){var z
if(a instanceof H.o){z=H.fP(J.K(a))
if(z!=null)return H.ca(z)
return"Closure"}return H.b9(a)},
n2:function(a){throw H.a(new P.hu(H.N(a)))},
fQ:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
aY:function(a){if(a==null)return
return a.$ti},
p4:function(a,b,c){return H.bt(a["$as"+H.l(c)],H.aY(b))},
aX:function(a,b,c,d){var z
H.N(c)
H.C(d)
z=H.bt(a["$as"+H.l(c)],H.aY(b))
return z==null?null:z[d]},
aF:function(a,b,c){var z
H.N(b)
H.C(c)
z=H.bt(a["$as"+H.l(b)],H.aY(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.aY(a)
return z==null?null:z[b]},
ca:function(a){var z=H.aZ(a,null)
return z},
aZ:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dE(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.m7(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aZ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aZ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aZ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mu(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dE:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aZ(u,c)}v="<"+z.j(0)+">"
return v},
bt:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bp:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aY(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fJ(H.bt(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.N(b)
H.bX(c)
H.N(d)
if(a==null)return a
z=H.bp(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dE(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
p2:function(a,b,c){return a.apply(b,H.bt(J.K(b)["$as"+H.l(c)],H.aY(b)))},
fU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.fU(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.fU(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c7(a,b)}y=J.K(a).constructor
x=H.aY(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.aw(a,H.ca(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cU"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bt(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ca(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bt(r,z),b,u,d)},
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mQ(m,b,l,d)},
mQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
p3:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mI:function(a){var z,y,x,w,v,u
z=H.N($.fR.$1(a))
y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fI.$2(a,z))
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
return u.i}if(v==="+")return H.fX(a,x)
if(v==="*")throw H.a(P.c4(z))
if(init.leafTags[z]===true){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fX(a,x)},
fX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dF(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cF:function(a){return J.dF(a,!1,null,!!a.$isF)},
mP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cF(z)
else return J.dF(z,c,null,null)},
mD:function(){if(!0===$.dD)return
$.dD=!0
H.mE()},
mE:function(){var z,y,x,w,v,u,t,s
$.cB=Object.create(null)
$.cE=Object.create(null)
H.mz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fZ.$1(v)
if(u!=null){t=H.mP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mz:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bo(C.J,H.bo(C.O,H.bo(C.u,H.bo(C.u,H.bo(C.N,H.bo(C.K,H.bo(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fR=new H.mA(v)
$.fI=new H.mB(u)
$.fZ=new H.mC(t)},
bo:function(a,b){return a(b)||b},
n1:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hp:{"^":"b;$ti",
j:function(a){return P.d1(this)},
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.hq()},
$isJ:1},
hr:{"^":"hp;a,b,c,$ti",
gl:function(a){return this.a},
ca:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.ca(0,b))return
return this.cV(b)},
cV:function(a){return this.b[H.N(a)]},
K:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cV(v),z))}}},
iU:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iV:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bB(z)
y=z[0]
x=z[1]
return new H.iU(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ju:{"^":"b;a,b,c,d,e,f",
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
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ju(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eS:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iB:{"^":"a5;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
es:function(a,b){return new H.iB(a,b==null?null:b.method)}}},
hY:{"^":"a5;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hY(a,y,z?null:b.receiver)}}},
jI:{"^":"a5;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n4:{"^":"o:17;a",
$1:function(a){if(!!J.K(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fo:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
o:{"^":"b;",
j:function(a){return"Closure '"+H.b9(this).trim()+"'"},
gei:function(){return this},
$iscU:1,
gei:function(){return this}},
eI:{"^":"o;"},
jd:{"^":"eI;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cM:{"^":"eI;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cM))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bJ(this.a)
else y=typeof z!=="object"?J.b_(z):H.bJ(z)
return(y^H.bJ(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
p:{
cN:function(a){return a.a},
dS:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cM("self","target","receiver","name")
y=J.bB(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jv:{"^":"a5;a",
j:function(a){return this.a},
p:{
aw:function(a,b){return new H.jv("TypeError: "+H.l(P.cg(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
hg:{"^":"a5;a",
j:function(a){return this.a},
p:{
hh:function(a,b){return new H.hg("CastError: "+H.l(P.cg(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
j3:{"^":"a5;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j4:function(a){return new H.j3(a)}}},
cl:{"^":"ie;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaC:function(a){return new H.i2(this,[H.x(this,0)])},
ca:function(a,b){var z=this.b
if(z==null)return!1
return this.eM(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bi(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bi(w,b)
x=y==null?null:y.b
return x}else return this.hE(b)},
hE:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cX(z,this.dS(a))
x=this.dT(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bW()
this.b=z}this.cK(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bW()
this.c=y}this.cK(y,b,c)}else this.hF(b,c)},
hF:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.bW()
this.d=z}y=this.dS(a)
x=this.cX(z,y)
if(x==null)this.c2(z,y,[this.bX(a,b)])
else{w=this.dT(x,a)
if(w>=0)x[w].b=b
else x.push(this.bX(a,b))}},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b1(this))
z=z.c}},
cK:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.bi(a,b)
if(z==null)this.c2(a,b,this.bX(b,c))
else z.b=c},
eX:function(){this.r=this.r+1&67108863},
bX:function(a,b){var z,y
z=new H.i1(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eX()
return z},
dS:function(a){return J.b_(a)&0x3ffffff},
dT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
j:function(a){return P.d1(this)},
bi:function(a,b){return a[b]},
cX:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
eP:function(a,b){delete a[b]},
eM:function(a,b){return this.bi(a,b)!=null},
bW:function(){var z=Object.create(null)
this.c2(z,"<non-identifier-key>",z)
this.eP(z,"<non-identifier-key>")
return z},
$isej:1},
i1:{"^":"b;a,b,0c,0d"},
i2:{"^":"hD;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.i3(z,z.r,this.$ti)
y.c=z.e
return y}},
i3:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mA:{"^":"o:17;a",
$1:function(a){return this.a(a)}},
mB:{"^":"o:39;a",
$2:function(a,b){return this.a(a,b)}},
mC:{"^":"o:45;a",
$1:function(a){return this.a(H.N(a))}},
hW:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseu:1,
$isiW:1,
p:{
hX:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mu:function(a){return J.ed(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bm:function(a){return a},
ix:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aD(b,a))},
m1:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ms(a,b,c))
return b},
er:{"^":"r;",$iser:1,"%":"ArrayBuffer"},
d7:{"^":"r;",$isd7:1,$isjw:1,"%":"DataView;ArrayBufferView;d6|fi|fj|iy|fk|fl|aW"},
d6:{"^":"d7;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dA},
iy:{"^":"fj;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mt(c)
H.aC(b,a,a.length)
a[b]=c},
$asch:function(){return[P.q]},
$asy:function(){return[P.q]},
$isk:1,
$ask:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aW:{"^":"fl;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aC(b,a,a.length)
a[b]=c},
$asch:function(){return[P.n]},
$asy:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]}},
o8:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o9:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oa:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ob:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oc:{"^":"aW;",
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
od:{"^":"aW;",
gl:function(a){return a.length},
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"aW;",
gl:function(a){return a.length},
k:function(a,b){H.aC(b,a,a.length)
return a[b]},
bJ:function(a,b,c){return new Uint8Array(a.subarray(b,H.m1(b,c,a.length)))},
$isd8:1,
$isR:1,
"%":";Uint8Array"},
fi:{"^":"d6+y;"},
fj:{"^":"fi+ch;"},
fk:{"^":"d6+y;"},
fl:{"^":"fk+ch;"}}],["","",,P,{"^":"",
ki:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.me()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bq(new P.kk(z),1)).observe(y,{childList:true})
return new P.kj(z,y,x)}else if(self.setImmediate!=null)return P.mf()
return P.mg()},
oS:[function(a){self.scheduleImmediate(H.bq(new P.kl(H.f(a,{func:1,ret:-1})),0))},"$1","me",4,0,11],
oT:[function(a){self.setImmediate(H.bq(new P.km(H.f(a,{func:1,ret:-1})),0))},"$1","mf",4,0,11],
oU:[function(a){H.f(a,{func:1,ret:-1})
P.ll(0,a)},"$1","mg",4,0,11],
eK:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bg]})
z=C.e.a3(a.a,1000)
return P.lm(z<0?0:z,b)},
ma:function(a,b){if(H.c7(a,{func:1,args:[P.b,P.av]}))return b.i1(a,null,P.b,P.av)
if(H.c7(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m9:function(){var z,y
for(;z=$.bn,z!=null;){$.bV=null
y=z.b
$.bn=y
if(y==null)$.bU=null
z.a.$0()}},
p1:[function(){$.dv=!0
try{P.m9()}finally{$.bV=null
$.dv=!1
if($.bn!=null)$.$get$dn().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fb(H.f(a,{func:1,ret:-1}))
if($.bn==null){$.bU=z
$.bn=z
if(!$.dv)$.$get$dn().$1(P.fK())}else{$.bU.b=z
$.bU=z}},
md:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bn
if(z==null){P.fF(a)
$.bV=$.bU
return}y=new P.fb(a)
x=$.bV
if(x==null){y.b=z
$.bV=y
$.bn=y}else{y.b=x.b
x.b=y
$.bV=y
if(y.b==null)$.bU=y}},
mU:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.U
if(C.j===y){P.cA(null,null,C.j,a)
return}y.toString
P.cA(null,null,y,H.f(y.dg(a),z))},
js:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bg]}
H.f(b,z)
y=$.U
if(y===C.j){y.toString
return P.eK(a,b)}x=y.dh(b,P.bg)
$.U.toString
return P.eK(a,H.f(x,z))},
cz:function(a,b,c,d,e){var z={}
z.a=d
P.md(new P.mb(z,e))},
fB:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
mc:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cA:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.dg(d):c.hk(d,-1)
P.fF(d)},
kk:{"^":"o:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kj:{"^":"o:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kl:{"^":"o:1;a",
$0:function(){this.a.$0()}},
km:{"^":"o:1;a",
$0:function(){this.a.$0()}},
fr:{"^":"b;a,0b,c",
eC:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bq(new P.lo(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eD:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bq(new P.ln(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbg:1,
p:{
ll:function(a,b){var z=new P.fr(!0,0)
z.eC(a,b)
return z},
lm:function(a,b){var z=new P.fr(!1,0)
z.eD(a,b)
return z}}},
lo:{"^":"o:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ln:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.es(w,x)}z.c=y
this.d.$1(z)}},
bl:{"^":"b;0a,b,c,d,e,$ti",
hK:function(a){if(this.c!==6)return!0
return this.b.b.cA(H.f(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hC:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.c7(z,{func:1,args:[P.b,P.av]}))return H.dB(w.i8(z,a.a,a.b,null,y,P.av),x)
else return H.dB(w.cA(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;d5:a<,b,0fD:c<,$ti",
ea:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ma(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.U,[c])
w=b==null?1:3
this.cL(new P.bl(x,w,a,b,[z,c]))
return x},
ie:function(a,b){return this.ea(a,null,b)},
cL:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbl")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.cL(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cA(null,null,z,H.f(new P.kB(this,a),{func:1,ret:-1}))}},
d0:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbl")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.d0(a)
return}this.a=y
this.c=u.c}z.a=this.bk(a)
y=this.b
y.toString
P.cA(null,null,y,H.f(new P.kG(z,this),{func:1,ret:-1}))}},
bZ:function(){var z=H.e(this.c,"$isbl")
this.c=null
return this.bk(z)},
bk:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cQ:function(a){var z,y,x,w
z=H.x(this,0)
H.dB(a,{futureOr:1,type:z})
y=this.$ti
x=H.bp(a,"$isbz",y,"$asbz")
if(x){z=H.bp(a,"$isaS",y,null)
if(z)P.fe(a,this)
else P.kC(a,this)}else{w=this.bZ()
H.z(a,z)
this.a=4
this.c=a
P.bP(this,w)}},
bP:[function(a,b){var z
H.e(b,"$isav")
z=this.bZ()
this.a=8
this.c=new P.ai(a,b)
P.bP(this,z)},function(a){return this.bP(a,null)},"ip","$2","$1","geK",4,2,29],
$isbz:1,
p:{
kC:function(a,b){var z,y,x
b.a=1
try{a.ea(new P.kD(b),new P.kE(b),null)}catch(x){z=H.as(x)
y=H.bs(x)
P.mU(new P.kF(b,z,y))}},
fe:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.bZ()
b.a=a.a
b.c=a.c
P.bP(b,y)}else{y=H.e(b.c,"$isbl")
b.a=2
b.c=a
a.d0(y)}},
bP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cz(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bP(z.a,b)}y=z.a
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
if(p){H.e(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cz(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kJ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kI(x,b,r).$0()}else if((y&2)!==0)new P.kH(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.K(y).$isbz){if(y.a>=4){n=H.e(t.c,"$isbl")
t.c=null
b=t.bk(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fe(y,t)
return}}m=b.b
n=H.e(m.c,"$isbl")
m.c=null
b=m.bk(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
kB:{"^":"o:1;a,b",
$0:function(){P.bP(this.a,this.b)}},
kG:{"^":"o:1;a,b",
$0:function(){P.bP(this.b,this.a.a)}},
kD:{"^":"o:26;a",
$1:function(a){var z=this.a
z.a=0
z.cQ(a)}},
kE:{"^":"o:51;a",
$2:function(a,b){this.a.bP(a,H.e(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kF:{"^":"o:1;a,b,c",
$0:function(){this.a.bP(this.b,this.c)}},
kJ:{"^":"o:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e8(H.f(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bs(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.K(z).$isbz){if(z instanceof P.aS&&z.gd5()>=4){if(z.gd5()===8){w=this.b
w.b=H.e(z.gfD(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ie(new P.kK(t),null)
w.a=!1}}},
kK:{"^":"o:34;a",
$1:function(a){return this.a}},
kI:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cA(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bs(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kH:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.hK(z)&&w.e!=null){v=this.b
v.b=w.hC(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bs(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
fb:{"^":"b;a,0b"},
dd:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.U,[P.n])
z.a=0
this.hJ(new P.jg(z,this),!0,new P.jh(z,y),y.geK())
return y}},
jg:{"^":"o;a,b",
$1:function(a){H.z(a,H.aF(this.b,"dd",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aF(this.b,"dd",0)]}}},
jh:{"^":"o:1;a,b",
$0:function(){this.b.cQ(this.a.a)}},
eE:{"^":"b;$ti"},
jf:{"^":"b;"},
bg:{"^":"b;"},
ai:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa5:1},
lQ:{"^":"b;",$isoR:1},
mb:{"^":"o:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.et()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
l3:{"^":"lQ;",
i9:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bs(x)
P.cz(null,null,this,z,H.e(y,"$isav"))}},
ia:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bs(x)
P.cz(null,null,this,z,H.e(y,"$isav"))}},
hk:function(a,b){return new P.l5(this,H.f(a,{func:1,ret:b}),b)},
dg:function(a){return new P.l4(this,H.f(a,{func:1,ret:-1}))},
dh:function(a,b){return new P.l6(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
e8:function(a,b){H.f(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cA:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.U===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
i8:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.U===C.j)return a.$2(b,c)
return P.mc(null,null,this,a,b,c,d,e,f)},
i1:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
l5:{"^":"o;a,b,c",
$0:function(){return this.a.e8(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l4:{"^":"o:3;a,b",
$0:function(){return this.a.i9(this.b)}},
l6:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.ia(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i4:function(a,b,c,d,e){return new H.cl(0,0,[d,e])},
i5:function(a,b,c){H.bX(a)
return H.w(H.mv(a,new H.cl(0,0,[b,c])),"$isej",[b,c],"$asej")},
ek:function(a,b){return new H.cl(0,0,[a,b])},
i8:function(a,b,c,d){return new P.kQ(0,0,[d])},
hS:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bW()
C.a.h(y,a)
try{P.m8(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eF(b,H.fV(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cW:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.am(b)
y=$.$get$bW()
C.a.h(y,a)
try{x=z
x.a=P.eF(x.gaH(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaH()+c
y=z.gaH()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bW(),z<y.length;++z)if(a===y[z])return!0
return!1},
m8:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i6:function(a,b,c){var z=P.i4(null,null,null,b,c)
a.K(0,new P.i7(z,b,c))
return z},
d1:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$bW(),a)
x=y
x.a=x.gaH()+"{"
z.a=!0
J.dL(a,new P.ig(z,y))
z=y
z.a=z.gaH()+"}"}finally{z=$.$get$bW()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaH()
return z.charCodeAt(0)==0?z:z},
kQ:{"^":"kL;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fh(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dq()
this.b=z}return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dq()
this.c=y}return this.cO(y,b)}else return this.eE(0,b)},
eE:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.dq()
this.d=z}y=this.cR(b)
x=z[y]
if(x==null)z[y]=[this.bO(b)]
else{if(this.cW(x,b)>=0)return!1
x.push(this.bO(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d1(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d1(this.c,b)
else return this.ft(0,b)},
ft:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eT(z,b)
x=this.cW(y,b)
if(x<0)return!1
this.d7(y.splice(x,1)[0])
return!0},
cO:function(a,b){H.z(b,H.x(this,0))
if(H.e(a[b],"$isdp")!=null)return!1
a[b]=this.bO(b)
return!0},
d1:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdp")
if(z==null)return!1
this.d7(z)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&67108863},
bO:function(a){var z,y
z=new P.dp(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cP()
return z},
d7:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cP()},
cR:function(a){return J.b_(a)&0x3ffffff},
eT:function(a,b){return a[this.cR(b)]},
cW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
p:{
dq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dp:{"^":"b;a,0b,0c"},
kR:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b1(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fh:function(a,b,c){var z=new P.kR(a,b,[c])
z.c=a.e
return z}}},
kL:{"^":"j5;"},
i7:{"^":"o:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cm:{"^":"kS;",$isk:1,$isc:1},
y:{"^":"b;$ti",
gZ:function(a){return new H.i9(a,this.gl(a),0,[H.aX(this,a,"y",0)])},
I:function(a,b){return this.k(a,b)},
ii:function(a,b){var z,y,x
z=H.h([],[H.aX(this,a,"y",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
ih:function(a){return this.ii(a,!0)},
aB:function(a,b,c,d){var z
H.z(d,H.aX(this,a,"y",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
j:function(a){return P.cW(a,"[","]")}},
ie:{"^":"ag;"},
ig:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ag:{"^":"b;$ti",
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aX(this,a,"ag",0),H.aX(this,a,"ag",1)]})
for(z=J.bu(this.gaC(a));z.G();){y=z.gR(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.at(this.gaC(a))},
j:function(a){return P.d1(a)},
$isJ:1},
lt:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ih:{"^":"b;$ti",
k:function(a,b){return J.dK(this.a,b)},
m:function(a,b,c){J.cH(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
K:function(a,b){J.dL(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.at(this.a)},
j:function(a){return J.aa(this.a)},
$isJ:1},
f2:{"^":"lu;a,$ti"},
j6:{"^":"b;$ti",
j:function(a){return P.cW(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dN("index"))
if(b<0)H.u(P.a_(b,0,null,"index",null))
for(z=P.fh(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j5:{"^":"j6;"},
kS:{"^":"b+y;"},
lu:{"^":"ih+lt;$ti"}}],["","",,P,{"^":"",hd:{"^":"bZ;a",
hM:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$fc()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cD(C.b.H(b,s))
o=H.cD(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.v(b,x,y)
w.a+=H.cp(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dQ(b,u,d,v,t,k)
else{j=C.e.bf(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aU(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dQ(b,u,d,v,t,i)
else{j=C.e.bf(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aU(b,d,d,j===2?"==":"=")}return b},
$asbZ:function(){return[[P.c,P.n],P.i]},
p:{
dQ:function(a,b,c,d,e,f){if(C.e.bf(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},he:{"^":"bw;a",
$asbw:function(){return[[P.c,P.n],P.i]}},bZ:{"^":"b;$ti"},bw:{"^":"jf;$ti"},hF:{"^":"bZ;",
$asbZ:function(){return[P.i,[P.c,P.n]]}},jW:{"^":"hF;a",
ghx:function(){return C.F}},k2:{"^":"bw;",
b1:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lP(0,0,x)
if(w.eR(a,b,z)!==z)w.d8(J.h6(a,z-1),0)
return C.U.bJ(x,0,w.b)},
cb:function(a){return this.b1(a,0,null)},
$asbw:function(){return[P.i,[P.c,P.n]]}},lP:{"^":"b;a,b,c",
d8:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
eR:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d8(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},jX:{"^":"bw;a",
b1:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.n],"$asc")
z=P.jY(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aK(b,c,y,null,null,null)
x=new P.am("")
w=new P.lM(!1,x,!0,0,0,0)
w.b1(a,b,y)
w.hy(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cb:function(a){return this.b1(a,0,null)},
$asbw:function(){return[[P.c,P.n],P.i]},
p:{
jY:function(a,b,c,d){H.w(b,"$isc",[P.n],"$asc")
if(b instanceof Uint8Array)return P.jZ(!1,b,c,d)
return},
jZ:function(a,b,c,d){var z,y,x
z=$.$get$f6()
if(z==null)return
y=0===c
if(y&&!0)return P.dl(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.dl(z,b)
return P.dl(z,b.subarray(c,d))},
dl:function(a,b){if(P.k0(b))return
return P.k1(a,b)},
k1:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k0:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k_:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lM:{"^":"b;a,b,c,d,e,f",
hy:function(a,b,c){var z
H.w(b,"$isc",[P.n],"$asc")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.n],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lO(c)
v=new P.lN(this,b,c,a)
$label0$0:for(u=J.aE(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.e.bb(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.e.bb(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.e.bb(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cp(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cF()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.e.bb(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.e.bb(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lO:{"^":"o:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.n],"$asc")
z=this.a
for(y=J.aE(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lN:{"^":"o:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eG(this.d,a,b)}}}],["","",,P,{"^":"",
c9:function(a,b,c){var z
H.f(b,{func:1,ret:P.n,args:[P.i]})
z=H.iO(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hH:function(a){var z=J.K(a)
if(!!z.$iso)return z.j(a)
return"Instance of '"+H.b9(a)+"'"},
ia:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hU(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ib:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.gZ(a);x.G();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bB(y),"$isc",z,"$asc")},
eG:function(a,b,c){var z,y
z=P.n
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb5",[z],"$asb5")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.ex(z?C.a.bJ(a,b,c):a)}if(!!J.K(a).$isd8)return H.iQ(a,b,P.aK(b,c,a.length,null,null,null))
return P.ji(a,b,c)},
ji:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.n],"$ask")
if(b<0)throw H.a(P.a_(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a_(c,b,J.at(a),null,null))
y=J.bu(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a_(c,b,x,null,null))
w.push(y.gR(y))}return H.ex(w)},
iX:function(a,b,c){return new H.hW(a,H.hX(a,!1,!0,!1))},
dk:function(){var z=H.iG()
if(z!=null)return P.jO(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hH(a)},
v:function(a){return new P.fd(a)},
ic:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.n]})
z=H.h([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dH:function(a){H.mS(a)},
jO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f3(b>0||c<c?C.b.v(a,b,c):a,5,null).gee()
else if(y===32)return P.f3(C.b.v(a,z,c),0,null).gee()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.n])
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
if(typeof v!=="number")return v.cE()
if(v>=b)if(P.fD(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.O()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.O()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.O()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a8(a,"..",s)))n=r>s+2&&C.b.a8(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a8(a,"file",b)){if(u<=b){if(!C.b.a8(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aU(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.aU(a,t,s,"")
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
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.aU(a,t,s,"")
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
q-=b}return new P.l8(a,v,u,t,s,r,q,o)}return P.lv(a,b,c,v,u,t,s,r,q,o)},
f5:function(a,b){var z=P.i
return C.a.hz(H.h(a.split("&"),[z]),P.ek(z,z),new P.jR(b),[P.J,P.i,P.i])},
jM:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jN(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c9(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cF()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c9(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cF()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jP(a)
y=new P.jQ(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaD(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jM(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.e.aM(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
m2:function(){var z,y,x,w,v
z=P.ic(22,new P.m4(),!0,P.R)
y=new P.m3(z)
x=new P.m5()
w=new P.m6()
v=H.e(y.$2(0,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isR")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isR")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isR"),"]",5)
v=H.e(y.$2(9,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isR"),"az",21)
v=H.e(y.$2(21,245),"$isR")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fD:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.n],"$asc")
z=$.$get$fE()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
aj:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.e.aM(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hv(H.iN(this))
y=P.c_(H.iL(this))
x=P.c_(H.iH(this))
w=P.c_(H.iI(this))
v=P.c_(H.iK(this))
u=P.c_(H.iM(this))
t=P.hw(H.iJ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hv:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"X;"},
"+double":0,
bx:{"^":"b;a",
i:function(a,b){return new P.bx(C.e.ae(this.a*b))},
O:function(a,b){return C.e.O(this.a,H.e(b,"$isbx").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.hC()
y=this.a
if(y<0)return"-"+new P.bx(0-y).j(0)
x=z.$1(C.e.a3(y,6e7)%60)
w=z.$1(C.e.a3(y,1e6)%60)
v=new P.hB().$1(y%1e6)
return""+C.e.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e7:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hB:{"^":"o:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hC:{"^":"o:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
et:{"^":"a5;",
j:function(a){return"Throw of null."}},
aG:{"^":"a5;a,b,c,d",
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbR()+y+x
if(!this.a)return w
v=this.gbQ()
u=P.cg(this.b)
return w+v+": "+H.l(u)},
p:{
bY:function(a){return new P.aG(!1,null,null,a)},
cb:function(a,b,c){return new P.aG(!0,a,b,c)},
dN:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cq:{"^":"aG;e,f,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a_(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a_(b,a,c,"end",f))
return b}return c}}},
hQ:{"^":"aG;e,l:f>,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){if(J.h2(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.at(b))
return new P.hQ(b,z,!0,a,c,"Index out of range")}}},
jK:{"^":"a5;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jK(a)}}},
jH:{"^":"a5;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c4:function(a){return new P.jH(a)}}},
jc:{"^":"a5;a",
j:function(a){return"Bad state: "+this.a}},
ho:{"^":"a5;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cg(z))+"."},
p:{
b1:function(a){return new P.ho(a)}}},
iC:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa5:1},
eD:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa5:1},
hu:{"^":"a5;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fd:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
hN:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.i(" ",x-o+n.length)+"^\n"},
p:{
Y:function(a,b,c){return new P.hN(a,b,c)}}},
n:{"^":"X;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.G();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dN("index"))
if(b<0)H.u(P.a_(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
j:function(a){return P.hS(this,"(",")")}},
cX:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bJ(this)},
j:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.j(this)}},
av:{"^":"b;"},
i:{"^":"b;",$iseu:1},
"+String":0,
am:{"^":"b;aH:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoB:1,
p:{
eF:function(a,b,c){var z=J.bu(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
jR:{"^":"o:48;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.N(b)
y=J.aE(b).dQ(b,"=")
if(y===-1){if(b!=="")J.cH(a,P.ds(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aE(b,y+1)
z=this.a
J.cH(a,P.ds(x,0,x.length,z,!0),P.ds(w,0,w.length,z,!0))}return a}},
jN:{"^":"o:38;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
jP:{"^":"o:28;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jQ:{"^":"o:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c9(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cx:{"^":"b;bI:a<,b,c,d,e1:e>,f,r,0x,0y,0z,0Q,0ch",
gef:function(){return this.b},
gcm:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbC:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gcu:function(a){var z=this.f
return z==null?"":z},
gdL:function(){var z=this.r
return z==null?"":z},
cz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
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
return new P.cx(i,j,c,f,d,g,this.r)},
e6:function(a,b){return this.cz(a,null,null,null,null,null,null,b,null,null)},
gbD:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f2(P.f5(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
gdM:function(){return this.c!=null},
gdP:function(){return this.f!=null},
gdN:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdj){y=this.a
x=b.gbI()
if(y==null?x==null:y===x)if(this.c!=null===b.gdM()){y=this.b
x=b.gef()
if(y==null?x==null:y===x){y=this.gcm(this)
x=z.gcm(b)
if(y==null?x==null:y===x){y=this.gbC(this)
x=z.gbC(b)
if(y==null?x==null:y===x)if(this.e===z.ge1(b)){y=this.f
x=y==null
if(!x===b.gdP()){if(x)y=""
if(y===z.gcu(b)){z=this.r
y=z==null
if(!y===b.gdN()){if(y)z=""
z=z===b.gdL()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.j(0))
this.z=z}return z},
$isdj:1,
p:{
dt:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.n],"$asc")
if(c===C.l){z=$.$get$fy().b
if(typeof b!=="string")H.u(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aF(c,"bZ",0))
y=c.ghx().cb(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lv:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lG(a,b,d)
else{if(d===b)P.bR(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lH(a,z,e-1):""
x=P.lA(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lD(P.c9(C.b.v(a,w,g),new P.lw(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lB(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dr(a,h+1,i,null):null
return new P.cx(j,y,x,v,u,t,i<c?P.lz(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bR:function(a,b,c){throw H.a(P.Y(c,a,b))},
lD:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lA:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.V(a,z)!==93)P.bR(a,b,"Missing end `]` to match `[` in host")
P.f4(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f4(a,b,c)
return"["+a+"]"}return P.lJ(a,b,c)},
lJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fA(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bR(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lG:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.H(a,b)))P.bR(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bR(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lx(y?a.toLowerCase():a)},
lx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lH:function(a,b,c){return P.bS(a,b,c,C.R)},
lB:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bS(a,b,c,C.y):C.t.iX(d,new P.lC(),P.i).W(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.lI(w,e,f)},
lI:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.lK(a,!z||c)
return P.lL(a)},
dr:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.bY("Both query and queryParameters specified"))
return P.bS(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.K(0,new P.lE(new P.lF(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lz:function(a,b,c){return P.bS(a,b,c,C.n)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cD(y)
v=H.cD(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aM(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cp(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fu:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.n])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.fN(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.eG(y,0,null)},
bS:function(a,b,c,d){var z=P.fz(a,b,c,H.w(d,"$isc",[P.n],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.n],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fA(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bR(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.am("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.a7(a,"."))return!0
return C.b.dQ(a,"/.")!==-1},
lL:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.h([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.W(z,"/")},
lK:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
z=H.h([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaD(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaD(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fv(z[0]))}return C.a.W(z,"/")},
fv:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fw(J.h3(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aE(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
ly:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bY("Invalid URL encoding"))}}return z},
ds:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dC(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.hm(y.v(a,b,c))}else{u=H.h([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.bY("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bY("Truncated URI"))
C.a.h(u,P.ly(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.n],"$asc")
return new P.jX(!1).cb(u)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
lw:{"^":"o:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lC:{"^":"o:46;",
$1:function(a){return P.dt(C.S,a,C.l,!1)}},
lF:{"^":"o:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dt(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dt(C.p,b,C.l,!0))}}},
lE:{"^":"o:50;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.bu(H.fV(b,"$isk")),y=this.a;z.G();)y.$2(a,H.N(z.gR(z)))}},
jL:{"^":"b;a,b,c",
gee:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dR(y,"?",z)
w=y.length
if(x>=0){v=P.bS(y,x+1,w,C.n)
w=x}else v=null
z=new P.kr(this,"data",null,null,null,P.bS(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaD(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hM(0,a,s,y)
else{r=P.fz(a,s,y,C.n,!0)
if(r!=null)a=C.b.aU(a,s,y,r)}return new P.jL(a,z,c)}}},
m4:{"^":"o:44;",
$1:function(a){return new Uint8Array(96)}},
m3:{"^":"o:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.h7(z,0,96,b)
return z}},
m5:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
m6:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
l8:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdM:function(){return this.c>0},
gdO:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdP:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
gdN:function(){return this.r<this.a.length},
gcY:function(){return this.b===4&&C.b.a7(this.a,"http")},
gcZ:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbI:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcY()){this.x="http"
z="http"}else if(this.gcZ()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
gef:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcm:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbC:function(a){var z
if(this.gdO()){z=this.d
if(typeof z!=="number")return z.D()
return P.c9(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcY())return 80
if(this.gcZ())return 443
return 0},
ge1:function(a){return C.b.v(this.a,this.e,this.f)},
gcu:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.v(this.a,z+1,y):""},
gdL:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aE(y,z+1):""},
gbD:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.T
z=P.i
return new P.f2(P.f5(this.gcu(this),C.l),[z,z])},
cz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbI()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdO()?this.gbC(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.dr(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aE(y,x+1)
return new P.cx(i,j,c,f,d,g,b)},
e6:function(a,b){return this.cz(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdj)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdj:1},
kr:{"^":"cx;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cP:function(a,b){var z=document.createElement("canvas")
return z},
hE:function(a){H.e(a,"$isa6")
return"wheel"},
hR:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isec")
try{J.h9(z,a)}catch(x){H.as(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fg:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dh(a,b)},
a7:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n5:{"^":"db;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
n6:{"^":"r;0l:length=","%":"AccessibleNodeList"},
n7:{"^":"a7;0a0:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n8:{"^":"a7;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cL:{"^":"r;",$iscL:1,"%":";Blob"},
ne:{"^":"a7;0a0:type}","%":"HTMLButtonElement"},
cO:{"^":"a7;",
bH:function(a,b,c){if(c!=null)return a.getContext(b,P.mi(c,null))
return a.getContext(b)},
ej:function(a,b){return this.bH(a,b,null)},
$iscO:1,
"%":"HTMLCanvasElement"},
dX:{"^":"r;",$isdX:1,"%":"CanvasRenderingContext2D"},
ng:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ni:{"^":"cf;0l:length=","%":"CSSPerspective"},
nj:{"^":"cS;0q:x=,0t:y=","%":"CSSPositionValue"},
nk:{"^":"cf;0q:x=,0t:y=","%":"CSSRotation"},
b2:{"^":"r;",$isb2:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nl:{"^":"cf;0q:x=,0t:y=","%":"CSSScale"},
hs:{"^":"kq;0l:length=",
ek:function(a,b){var z=a.getPropertyValue(this.cM(a,b))
return z==null?"":z},
cM:function(a,b){var z,y
z=$.$get$e0()
y=z[b]
if(typeof y==="string")return y
y=this.fO(a,b)
z[b]=y
return y},
fO:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hx()+b
if(z in a)return z
return b},
fE:function(a,b,c,d){a.setProperty(b,c,d)},
gc5:function(a){return a.bottom},
gas:function(a){return a.height},
gaR:function(a){return a.left},
gb9:function(a){return a.right},
gbc:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ht:{"^":"b;",
gaR:function(a){return this.ek(a,"left")}},
cS:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cf:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nm:{"^":"cS;0l:length=","%":"CSSTransformValue"},
nn:{"^":"cf;0q:x=,0t:y=","%":"CSSTranslation"},
no:{"^":"cS;0l:length=","%":"CSSUnparsedValue"},
np:{"^":"r;0l:length=","%":"DataTransferItemList"},
nq:{"^":"r;0q:x=,0t:y=","%":"DeviceAcceleration"},
nr:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
ns:{"^":"hz;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hz:{"^":"r;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nt:{"^":"kt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa9",[P.X],"$asa9")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a9,P.X]]},
$asy:function(){return[[P.a9,P.X]]},
$isk:1,
$ask:function(){return[[P.a9,P.X]]},
$isc:1,
$asc:function(){return[[P.a9,P.X]]},
$asB:function(){return[[P.a9,P.X]]},
"%":"ClientRectList|DOMRectList"},
hA:{"^":"r;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gas(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa9",[P.X],"$asa9")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaR(b)&&a.top===z.gbc(b)&&this.gat(a)===z.gat(b)&&this.gas(a)===z.gas(b)},
gS:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF)},
gc5:function(a){return a.bottom},
gas:function(a){return a.height},
gaR:function(a){return a.left},
gb9:function(a){return a.right},
gbc:function(a){return a.top},
gat:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nu:{"^":"kv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asy:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
nv:{"^":"r;0l:length=","%":"DOMTokenList"},
kp:{"^":"cm;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.e(z[b],"$isa1")},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.ih(this)
return new J.au(z,z.length,0,[H.x(z,0)])},
aB:function(a,b,c,d){throw H.a(P.c4(null))},
$asy:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"L;",
gc9:function(a){return new W.kp(a,a.children)},
gbn:function(a){return P.iT(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
j:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nw:{"^":"a7;0a0:type}","%":"HTMLEmbedElement"},
ab:{"^":"r;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"r;",
da:["eo",function(a,b,c,d){H.f(c,{func:1,args:[W.ab]})
if(c!=null)this.eF(a,b,c,!1)}],
eF:function(a,b,c,d){return a.addEventListener(b,H.bq(H.f(c,{func:1,args:[W.ab]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fm|fn|fp|fq"},
aV:{"^":"cL;",$isaV:1,"%":"File"},
e8:{"^":"kA;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaV")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aV]},
$asy:function(){return[W.aV]},
$isk:1,
$ask:function(){return[W.aV]},
$isc:1,
$asc:function(){return[W.aV]},
$ise8:1,
$asB:function(){return[W.aV]},
"%":"FileList"},
nP:{"^":"a6;0l:length=","%":"FileWriter"},
nS:{"^":"a7;0l:length=","%":"HTMLFormElement"},
b4:{"^":"r;",$isb4:1,"%":"Gamepad"},
nT:{"^":"db;0q:x=,0t:y=","%":"Gyroscope"},
nU:{"^":"r;0l:length=","%":"History"},
nV:{"^":"kN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asy:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c0:{"^":"r;0dj:data=",$isc0:1,"%":"ImageData"},
eb:{"^":"a7;",$iseb:1,"%":"HTMLImageElement"},
ec:{"^":"a7;0a0:type}",$isec:1,"%":"HTMLInputElement"},
bC:{"^":"dg;",$isbC:1,"%":"KeyboardEvent"},
o_:{"^":"a7;0a0:type}","%":"HTMLLinkElement"},
o0:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
o1:{"^":"db;0q:x=,0t:y=","%":"Magnetometer"},
o3:{"^":"r;0l:length=","%":"MediaList"},
o4:{"^":"a6;",
da:function(a,b,c,d){H.f(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.eo(a,b,c,!1)},
"%":"MessagePort"},
o5:{"^":"kT;",
k:function(a,b){return P.aT(a.get(H.N(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.h([],[P.i])
this.K(a,new W.iu(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iu:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o6:{"^":"kU;",
k:function(a,b){return P.aT(a.get(H.N(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.h([],[P.i])
this.K(a,new W.iv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iv:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"r;",$isb7:1,"%":"MimeType"},
o7:{"^":"kW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb7")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b7]},
$asy:function(){return[W.b7]},
$isk:1,
$ask:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"MimeTypeArray"},
aA:{"^":"dg;",$isaA:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ko:{"^":"cm;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.aX(C.V,z,"B",0)])},
aB:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asy:function(){return[W.L]},
$ask:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"a6;",
i5:function(a,b){var z,y
try{z=a.parentNode
J.h4(z,b,a)}catch(y){H.as(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.ep(a):z},
fw:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iz:{"^":"kY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asy:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
of:{"^":"a7;0a0:type}","%":"HTMLOListElement"},
og:{"^":"a7;0a0:type}","%":"HTMLObjectElement"},
b8:{"^":"r;0l:length=",$isb8:1,"%":"Plugin"},
ok:{"^":"l1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asy:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asB:function(){return[W.b8]},
"%":"PluginArray"},
op:{"^":"r;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oq:{"^":"l7;",
k:function(a,b){return P.aT(a.get(H.N(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.h([],[P.i])
this.K(a,new W.j2(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j2:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
os:{"^":"a7;0a0:type}","%":"HTMLScriptElement"},
ou:{"^":"a7;0l:length=","%":"HTMLSelectElement"},
db:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
ba:{"^":"a6;",$isba:1,"%":"SourceBuffer"},
ov:{"^":"fn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asy:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"SourceBufferList"},
ow:{"^":"a7;0a0:type}","%":"HTMLSourceElement"},
bb:{"^":"r;",$isbb:1,"%":"SpeechGrammar"},
ox:{"^":"la;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asy:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"SpeechGrammarList"},
bc:{"^":"r;0l:length=",$isbc:1,"%":"SpeechRecognitionResult"},
oz:{"^":"ld;",
k:function(a,b){return a.getItem(H.N(b))},
m:function(a,b,c){a.setItem(b,H.N(c))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaC:function(a){var z=H.h([],[P.i])
this.K(a,new W.je(z))
return z},
gl:function(a){return a.length},
$asag:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
je:{"^":"o:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oC:{"^":"a7;0a0:type}","%":"HTMLStyleElement"},
bd:{"^":"r;",$isbd:1,"%":"CSSStyleSheet|StyleSheet"},
bK:{"^":"a7;",$isbK:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
be:{"^":"a6;",$isbe:1,"%":"TextTrack"},
bf:{"^":"a6;",$isbf:1,"%":"TextTrackCue|VTTCue"},
oH:{"^":"lk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asy:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"TextTrackCueList"},
oI:{"^":"fq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asy:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"TextTrackList"},
oJ:{"^":"r;0l:length=","%":"TimeRanges"},
bh:{"^":"r;",$isbh:1,"%":"Touch"},
bi:{"^":"dg;",$isbi:1,"%":"TouchEvent"},
oK:{"^":"lq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asy:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"TouchList"},
oL:{"^":"r;0l:length=","%":"TrackDefaultList"},
dg:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oN:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
oP:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
oQ:{"^":"a6;0l:length=","%":"VideoTrackList"},
bO:{"^":"aA;",
ght:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbO:1,
"%":"WheelEvent"},
kh:{"^":"a6;",
fz:function(a,b){return a.requestAnimationFrame(H.bq(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
eQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oV:{"^":"lS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb2")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b2]},
$asy:function(){return[W.b2]},
$isk:1,
$ask:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$asB:function(){return[W.b2]},
"%":"CSSRuleList"},
oW:{"^":"hA;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bp(b,"$isa9",[P.X],"$asa9")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaR(b)&&a.top===z.gbc(b)&&a.width===z.gat(b)&&a.height===z.gas(b)},
gS:function(a){return W.fg(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gas:function(a){return a.height},
gat:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oY:{"^":"lU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb4")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$asy:function(){return[W.b4]},
$isk:1,
$ask:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asB:function(){return[W.b4]},
"%":"GamepadList"},
oZ:{"^":"lW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asy:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asB:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
p_:{"^":"lY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"SpeechRecognitionResultList"},
p0:{"^":"m_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"StyleSheetList"},
kw:{"^":"dd;a,b,c,$ti",
hJ:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
oX:{"^":"kw;a,b,c,$ti"},
kx:{"^":"eE;a,b,c,d,e,$ti",
fS:function(){var z=this.d
if(z!=null&&this.a<=0)J.h5(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fH(new W.ky(c),W.ab)
z=new W.kx(0,a,b,z,!1,[e])
z.fS()
return z}}},
ky:{"^":"o:4;a",
$1:function(a){return this.a.$1(H.e(a,"$isab"))}},
B:{"^":"b;$ti",
gZ:function(a){return new W.e9(a,this.gl(a),-1,[H.aX(this,a,"B",0)])},
aB:function(a,b,c,d){H.z(d,H.aX(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e9:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kq:{"^":"r+ht;"},
ks:{"^":"r+y;"},
kt:{"^":"ks+B;"},
ku:{"^":"r+y;"},
kv:{"^":"ku+B;"},
kz:{"^":"r+y;"},
kA:{"^":"kz+B;"},
kM:{"^":"r+y;"},
kN:{"^":"kM+B;"},
kT:{"^":"r+ag;"},
kU:{"^":"r+ag;"},
kV:{"^":"r+y;"},
kW:{"^":"kV+B;"},
kX:{"^":"r+y;"},
kY:{"^":"kX+B;"},
l0:{"^":"r+y;"},
l1:{"^":"l0+B;"},
l7:{"^":"r+ag;"},
fm:{"^":"a6+y;"},
fn:{"^":"fm+B;"},
l9:{"^":"r+y;"},
la:{"^":"l9+B;"},
ld:{"^":"r+ag;"},
lj:{"^":"r+y;"},
lk:{"^":"lj+B;"},
fp:{"^":"a6+y;"},
fq:{"^":"fp+B;"},
lp:{"^":"r+y;"},
lq:{"^":"lp+B;"},
lR:{"^":"r+y;"},
lS:{"^":"lR+B;"},
lT:{"^":"r+y;"},
lU:{"^":"lT+B;"},
lV:{"^":"r+y;"},
lW:{"^":"lV+B;"},
lX:{"^":"r+y;"},
lY:{"^":"lX+B;"},
lZ:{"^":"r+y;"},
m_:{"^":"lZ+B;"}}],["","",,P,{"^":"",
ml:function(a){var z,y
z=J.K(a)
if(!!z.$isc0){y=z.gdj(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fs(a.data,a.height,a.width)},
mk:function(a){if(a instanceof P.fs)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.ek(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.N(y[w])
z.m(0,v,a[v])}return z},
mi:function(a,b){var z={}
a.K(0,new P.mj(z))
return z},
e6:function(){var z=$.e5
if(z==null){z=J.cI(window.navigator.userAgent,"Opera",0)
$.e5=z}return z},
hx:function(){var z,y
z=$.e2
if(z!=null)return z
y=$.e3
if(y==null){y=J.cI(window.navigator.userAgent,"Firefox",0)
$.e3=y}if(y)z="-moz-"
else{y=$.e4
if(y==null){y=!P.e6()&&J.cI(window.navigator.userAgent,"Trident/",0)
$.e4=y}if(y)z="-ms-"
else z=P.e6()?"-o-":"-webkit-"}$.e2=z
return z},
lg:{"^":"b;",
dJ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cC:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isaj)return new Date(a.a)
if(!!y.$isiW)throw H.a(P.c4("structured clone of RegExp"))
if(!!y.$isaV)return a
if(!!y.$iscL)return a
if(!!y.$ise8)return a
if(!!y.$isc0)return a
if(!!y.$iser||!!y.$isd7)return a
if(!!y.$isJ){x=this.dJ(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.li(z,this))
return z.a}if(!!y.$isc){x=this.dJ(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hq(a,x)}throw H.a(P.c4("structured clone of other type"))},
hq:function(a,b){var z,y,x,w
z=J.aE(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cC(z.k(a,w)))
return x}},
li:{"^":"o:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cC(b)}},
fs:{"^":"b;dj:a>,b,c",$isc0:1},
mj:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
lh:{"^":"lg;a,b"},
hK:{"^":"cm;a,b",
gbj:function(){var z,y,x
z=this.b
y=H.aF(z,"y",0)
x=W.a1
return new H.ii(new H.kf(z,H.f(new P.hL(),{func:1,ret:P.ah,args:[y]}),[y]),H.f(new P.hM(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isa1")
z=this.gbj()
J.h8(z.b.$1(J.cJ(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aB:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbj().a)},
k:function(a,b){var z=this.gbj()
return z.b.$1(J.cJ(z.a,b))},
gZ:function(a){var z=P.ib(this.gbj(),!1,W.a1)
return new J.au(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hL:{"^":"o:30;",
$1:function(a){return!!J.K(H.e(a,"$isL")).$isa1}},
hM:{"^":"o:27;",
$1:function(a){return H.j(H.e(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ff:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bH:{"^":"b;q:a>,t:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bp(b,"$isbH",[P.X],null)
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b_(this.a)
y=J.b_(this.b)
return P.ff(P.bQ(P.bQ(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.x(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bH(z,H.z(x*b,y),this.$ti)}},
l2:{"^":"b;$ti",
gb9:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.x(this,0))},
gc5:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.x(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bp(b,"$isa9",[P.X],"$asa9")
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbc(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gb9(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gc5(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b_(z)
x=this.b
w=J.b_(x)
if(typeof z!=="number")return z.D()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.ff(P.bQ(P.bQ(P.bQ(P.bQ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
di:function(a,b){var z,y
H.w(b,"$isbH",[P.X],"$asbH")
z=b.a
y=this.a
if(typeof z!=="number")return z.cE()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cE()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"l2;aR:a>,bc:b>,at:c>,as:d>,$ti",p:{
iT:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nx:{"^":"T;0q:x=,0t:y=","%":"SVGFEBlendElement"},ny:{"^":"T;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nz:{"^":"T;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nA:{"^":"T;0q:x=,0t:y=","%":"SVGFECompositeElement"},nB:{"^":"T;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nC:{"^":"T;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nD:{"^":"T;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nE:{"^":"T;0q:x=,0t:y=","%":"SVGFEFloodElement"},nF:{"^":"T;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nG:{"^":"T;0q:x=,0t:y=","%":"SVGFEImageElement"},nH:{"^":"T;0q:x=,0t:y=","%":"SVGFEMergeElement"},nI:{"^":"T;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nJ:{"^":"T;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nK:{"^":"T;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nL:{"^":"T;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nM:{"^":"T;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nN:{"^":"T;0q:x=,0t:y=","%":"SVGFETileElement"},nO:{"^":"T;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nQ:{"^":"T;0q:x=,0t:y=","%":"SVGFilterElement"},nR:{"^":"bA;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hP:{"^":"bA;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bA:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nW:{"^":"bA;0q:x=,0t:y=","%":"SVGImageElement"},bD:{"^":"r;",$isbD:1,"%":"SVGLength"},nZ:{"^":"kP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbD")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bD]},
$isk:1,
$ask:function(){return[P.bD]},
$isc:1,
$asc:function(){return[P.bD]},
$asB:function(){return[P.bD]},
"%":"SVGLengthList"},o2:{"^":"T;0q:x=,0t:y=","%":"SVGMaskElement"},bG:{"^":"r;",$isbG:1,"%":"SVGNumber"},oe:{"^":"l_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbG")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bG]},
$isk:1,
$ask:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asB:function(){return[P.bG]},
"%":"SVGNumberList"},oj:{"^":"T;0q:x=,0t:y=","%":"SVGPatternElement"},ol:{"^":"r;0q:x=,0t:y=","%":"SVGPoint"},om:{"^":"r;0l:length=","%":"SVGPointList"},on:{"^":"r;0q:x=,0t:y=","%":"SVGRect"},oo:{"^":"hP;0q:x=,0t:y=","%":"SVGRectElement"},ot:{"^":"T;0a0:type}","%":"SVGScriptElement"},oA:{"^":"lf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},oD:{"^":"T;0a0:type}","%":"SVGStyleElement"},T:{"^":"a1;",
gc9:function(a){return new P.hK(a,new W.ko(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oE:{"^":"bA;0q:x=,0t:y=","%":"SVGSVGElement"},jj:{"^":"bA;","%":"SVGTextPathElement;SVGTextContentElement"},oG:{"^":"jj;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bL:{"^":"r;",$isbL:1,"%":"SVGTransform"},oM:{"^":"ls;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbL")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bL]},
$isk:1,
$ask:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asB:function(){return[P.bL]},
"%":"SVGTransformList"},oO:{"^":"bA;0q:x=,0t:y=","%":"SVGUseElement"},kO:{"^":"r+y;"},kP:{"^":"kO+B;"},kZ:{"^":"r+y;"},l_:{"^":"kZ+B;"},le:{"^":"r+y;"},lf:{"^":"le+B;"},lr:{"^":"r+y;"},ls:{"^":"lr+B;"}}],["","",,P,{"^":"",R:{"^":"b;",$isk:1,
$ask:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$isjw:1}}],["","",,P,{"^":"",n9:{"^":"r;0l:length=","%":"AudioBuffer"},dP:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},na:{"^":"kn;",
k:function(a,b){return P.aT(a.get(H.N(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gaC:function(a){var z=H.h([],[P.i])
this.K(a,new P.hb(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hb:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hc:{"^":"dP;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nb:{"^":"a6;0l:length=","%":"AudioTrackList"},hf:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nc:{"^":"dP;0a0:type}","%":"BiquadFilterNode"},oh:{"^":"hf;0l:length=","%":"OfflineAudioContext"},oi:{"^":"hc;0a0:type}","%":"Oscillator|OscillatorNode"},kn:{"^":"r+ag;"}}],["","",,P,{"^":"",da:{"^":"r;",
ic:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mk(g))
return}if(!!z.$iseb)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bY("Incorrect number or type of arguments"))},
ib:function(a,b,c,d,e,f,g){return this.ic(a,b,c,d,e,f,g,null,null,null)},
$isda:1,
"%":"WebGLRenderingContext"},jk:{"^":"r;",$isjk:1,"%":"WebGLTexture"},jF:{"^":"r;",$isjF:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oy:{"^":"lc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lb:{"^":"r+y;"},lc:{"^":"lb+B;"}}],["","",,O,{"^":"",aH:{"^":"b;0a,0b,0c,0d,$ti",
bL:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
cG:function(a,b,c){var z=H.aF(this,"aH",0)
H.f(b,{func:1,ret:P.ah,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.n,[P.k,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bg:function(a,b){return this.cG(a,null,b)},
fl:function(a){var z
H.w(a,"$isk",[H.aF(this,"aH",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f1:function(a,b){var z
H.w(b,"$isk",[H.aF(this,"aH",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.au(z,z.length,0,[H.x(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aF(this,"aH",0)
H.z(b,z)
z=[z]
if(this.fl(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f1(x,H.h([b],z))}},
$isk:1,
p:{
cQ:function(a){var z=new O.aH([a])
z.bL(a)
return z}}},d3:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
ex:function(a){var z=this.b
if(!(z==null))z.E(a)},
aF:function(){return this.ex(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.bE()},
e4:function(a){var z=this.a
if(a==null)C.a.h(z,V.bE())
else C.a.h(z,a)
this.aF()},
ct:function(){var z=this.a
if(z.length>0){z.pop()
this.aF()}}}}],["","",,E,{"^":"",cK:{"^":"b;"},aI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cN:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
if(y.f==null)y.cN()}},
sa6:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.f(this.ge_(),{func:1,ret:-1,args:[D.t]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.f(this.ge_(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.eC])
w.b=!0
this.a5(w)}},
sba:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.ge0(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.ge0(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cN()
w=new D.E("technique",x,this.f,this,[O.cs])
w.b=!0
this.a5(w)}},
saS:function(a){var z,y,x,w
if(!J.Q(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.f(this.gdZ(),{func:1,ret:-1,args:[D.t]})
C.a.L(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.f(this.gdZ(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.E("mover",z,a,this,[U.a8])
w.b=!0
this.a5(w)}},
al:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.am(0,b,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.E("matrix",x,y,this,[V.al])
w.b=!0
this.a5(w)}z=this.f
if(z!=null)z.al(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.al(0,b)},
aT:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.i(0,z.ga_(z)))
z.aF()
a.e5(this.f)
z=a.dy
x=(z&&C.a).gaD(z)
if(x!=null&&this.d!=null)x.i4(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aT(a)
a.e3()
a.dx.ct()},
gB:function(){var z=this.z
if(z==null){z=D.O()
this.z=z}return z},
a5:function(a){var z=this.z
if(!(z==null))z.E(a)},
X:function(){return this.a5(null)},
hR:[function(a){H.e(a,"$ist")
this.e=null
this.a5(a)},function(){return this.hR(null)},"j2","$1","$0","ge_",0,2,0],
hS:[function(a){this.a5(H.e(a,"$ist"))},function(){return this.hS(null)},"j3","$1","$0","ge0",0,2,0],
hQ:[function(a){this.a5(H.e(a,"$ist"))},function(){return this.hQ(null)},"j1","$1","$0","gdZ",0,2,0],
hO:[function(a){this.a5(H.e(a,"$ist"))},function(){return this.hO(null)},"j_","$1","$0","gdY",0,2,0],
iZ:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aI],"$ask")
for(z=b.length,y=this.gdY(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b3()
t.a=H.h([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghN",8,0,8],
j0:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aI],"$ask")
for(z=b.length,y=this.gdY(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b3()
t.a=H.h([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.L(t.a,y)}}this.X()},"$2","ghP",8,0,8],
$isaJ:1,
p:{
cT:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cQ(E.aI)
z.y=y
y.bg(z.ghN(),z.ghP())
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
z.sa6(0,e)
z.sba(f)
z.saS(c)
return z}}},iY:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ev:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aj(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d3()
y=[V.al]
z.a=H.h([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.f(new E.j_(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d3()
z.a=H.h([],y)
v=z.gB()
v.toString
x=H.f(new E.j0(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d3()
z.a=H.h([],y)
y=z.gB()
y.toString
w=H.f(new E.j1(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.cs])
this.dy=z
C.a.h(z,null)
this.fr=new H.cl(0,0,[P.i,A.eB])},
gi0:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.i(0,y.ga_(y))
this.z=y
z=y}return z},
e5:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
e3:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iZ:function(a,b){var z=new E.iY(a,b)
z.ev(a,b)
return z}}},j_:{"^":"o:12;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.z=null
z.ch=null}},j0:{"^":"o:12;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j1:{"^":"o:12;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jp:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
ez:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.E(a)
this.i6()},function(){return this.ez(null)},"ey","$1","$0","gcI",0,2,0],
ghB:function(){var z,y,x
z=Date.now()
y=C.e.a3(P.e7(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
d2:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.p(z)
x=C.d.cl(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.d.cl(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
i6:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jr(this),{func:1,ret:-1,args:[P.X]})
C.B.eQ(z)
C.B.fz(z,W.fH(y,P.X))}},
i3:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d2()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.e7(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aT(this.e)}}catch(v){z=H.as(v)
y=H.bs(v)
P.dH("Error: "+H.l(z))
P.dH("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jq:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscO)return E.eJ(a,!0,!0,!0,!1)
y=W.cP(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc9(a).h(0,y)
w=E.eJ(y,!0,!0,!0,!1)
w.a=a
return w},
eJ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jp()
y=P.i5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.k.bH(a,"webgl",y)
x=H.e(x==null?C.k.bH(a,"experimental-webgl",y):x,"$isda")
if(x==null)H.u(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iZ(x,a)
w=new T.jl(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jS(a)
v=new X.hZ()
v.c=new X.az(!1,!1,!1)
v.d=P.i8(null,null,null,P.n)
w.b=v
v=new X.iw(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.id(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jt(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.eE,P.b]])
w.z=v
u=document
t=W.aA
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.f(w.gf8(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.f(w.gfb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.f(w.gf5(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.f(w.gfd(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.f(w.gfc(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.f(w.gfg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.f(w.gfi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.f(w.gfh(),s),!1,t))
p=w.z
o=W.bO;(p&&C.a).h(p,W.a0(a,H.N(W.hE(a)),H.f(w.gfj(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.f(w.gf9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.f(w.gfa(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.f(w.gfk(),q),!1,r))
r=w.z
q=W.bi
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.f(w.gfs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.f(w.gfp(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.f(w.gfq(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.d2()
return z}}},jr:{"^":"o:31;a",
$1:function(a){var z
H.mR(a)
z=this.a
if(z.z){z.z=!1
z.i3()}}}}],["","",,Z,{"^":"",fa:{"^":"b;a,b",p:{
dm:function(a,b,c){var z
H.w(c,"$isc",[P.n],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bm(c)),35044)
a.bindBuffer(b,null)
return new Z.fa(b,z)}}},dT:{"^":"cK;a,b,c,d,e",
b_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ke:{"^":"b;a",$isnd:1},dU:{"^":"b;a,0b,c,d",
aQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b_(a)},
ij:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aT:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.W(y,", ")+"\nAttrs:   "+C.a.W(u,", ")},
$isoF:1},ci:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},bj:{"^":"b;a",
gcH:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=4
if((z&$.$get$bk().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hj:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f9()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.h([],[P.i])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.W(z,"|")},
p:{
ap:function(a){return new Z.bj(a)}}}}],["","",,D,{"^":"",dY:{"^":"b;"},b3:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hI(z))
return x!==0},
hv:function(){return this.E(null)},
i7:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
ad:function(a){return this.i7(a,!0,!1)},
p:{
O:function(){var z=new D.b3()
z.a=H.h([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hI:{"^":"o:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},cj:{"^":"t;c,d,a,0b,$ti"},ck:{"^":"t;c,d,a,0b,$ti"},E:{"^":"t;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dV:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
p:{"^":"nf<"}},eh:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},ei:{"^":"t;c,a,0b"},hZ:{"^":"b;0a,0b,0c,0d",
hY:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.E(y)},
hU:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.E(y)}},el:{"^":"co;x,y,c,d,e,a,0b"},id:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aw:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gaN()
s=new X.bF(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cs:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.aw(a,b))
return!0},
b7:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.em()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.aw(a,b))
return!0},
b6:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aw(a,b))
return!0},
hZ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.d5(new V.W(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.E(w)
return!0},
ff:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.el(c,a,this.a.gaN(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.V(0,0)}},az:{"^":"b;a,b,c",
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
j:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bF:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bS:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaN()
x=new X.bF(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cs:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bS(a,b,!0))
return!0},
b7:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.em()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bS(a,b,!0))
return!0},
b6:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bS(a,b,!1))
return!0},
i_:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaN()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.d5(new V.W(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdk:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.O()
this.c=z}return z},
gdW:function(){var z=this.d
if(z==null){z=D.O()
this.d=z}return z}},d5:{"^":"co;x,c,d,e,a,0b"},co:{"^":"t;"},eL:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},jt:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aw:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gaN()
w=new X.eL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hX:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.E(this.aw(a,!0))
return!0},
hV:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.E(this.aw(a,!0))
return!0},
hW:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.E(this.aw(a,!1))
return!0}},jS:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaN:function(){var z=this.a
return V.ez(0,0,(z&&C.k).gbn(z).c,C.k.gbn(z).d)},
cT:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eh(z,new X.az(y,a.altKey,a.shiftKey))},
aL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
c3:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
ax:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.V(y-w,x-v)},
aX:function(a){return new V.W(a.movementX,a.movementY)},
bY:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.d.ae(u.pageX)
C.d.ae(u.pageY)
s=z.left
C.d.ae(u.pageX)
C.a.h(y,new V.V(t-s,C.d.ae(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.az(y,a.altKey,a.shiftKey))},
iC:[function(a){this.f=!0},"$1","gfb",4,0,4],
iw:[function(a){this.f=!1},"$1","gf5",4,0,4],
iz:[function(a){if(this.f)a.preventDefault()},"$1","gf8",4,0,4],
iE:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cT(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfd",4,0,20],
iD:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.cT(a)
if(this.b.hU(z))a.preventDefault()},"$1","gfc",4,0,20],
iG:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
z.focus()
this.f=!0
this.aL(a)
if(this.x){y=this.au(a)
x=this.aX(a)
if(this.d.cs(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.ax(a)
if(this.c.cs(y,w))a.preventDefault()},"$1","gfg",4,0,5],
iI:[function(a){var z,y,x
H.e(a,"$isaA")
this.aL(a)
z=this.au(a)
if(this.x){y=this.aX(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfi",4,0,5],
iB:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
if(!(z&&C.k).gbn(z).di(0,new P.bH(a.clientX,a.clientY,[P.X]))){this.aL(a)
y=this.au(a)
if(this.x){x=this.aX(a)
if(this.d.b7(y,x))a.preventDefault()
return}if(this.r)return
w=this.ax(a)
if(this.c.b7(y,w))a.preventDefault()}},"$1","gfa",4,0,5],
iH:[function(a){var z,y,x
H.e(a,"$isaA")
this.aL(a)
z=this.au(a)
if(this.x){y=this.aX(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.ax(a)
if(this.c.b6(z,x))a.preventDefault()},"$1","gfh",4,0,5],
iA:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
if(!(z&&C.k).gbn(z).di(0,new P.bH(a.clientX,a.clientY,[P.X]))){this.aL(a)
y=this.au(a)
if(this.x){x=this.aX(a)
if(this.d.b6(y,x))a.preventDefault()
return}if(this.r)return
w=this.ax(a)
if(this.c.b6(y,w))a.preventDefault()}},"$1","gf9",4,0,5],
iJ:[function(a){var z,y
H.e(a,"$isbO")
this.aL(a)
z=new V.W((a&&C.A).ghs(a),C.A.ght(a)).w(0,180)
if(this.x){if(this.d.hZ(z))a.preventDefault()
return}if(this.r)return
y=this.ax(a)
if(this.c.i_(z,y))a.preventDefault()},"$1","gfj",4,0,35],
iK:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.au(this.y)
v=this.ax(this.y)
this.d.ff(w,v,x)}},"$1","gfk",4,0,4],
iQ:[function(a){var z
H.e(a,"$isbi")
this.a.focus()
this.f=!0
this.c3(a)
z=this.bY(a)
if(this.e.hX(z))a.preventDefault()},"$1","gfs",4,0,13],
iO:[function(a){var z
H.e(a,"$isbi")
this.c3(a)
z=this.bY(a)
if(this.e.hV(z))a.preventDefault()},"$1","gfp",4,0,13],
iP:[function(a){var z
H.e(a,"$isbi")
this.c3(a)
z=this.bY(a)
if(this.e.hW(z))a.preventDefault()},"$1","gfq",4,0,13]}}],["","",,D,{"^":"",hy:{"^":"b;",$isa2:1,$isaJ:1},a2:{"^":"b;",$isaJ:1},i_:{"^":"aH;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.O()
this.Q=z}return z},
a9:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fe:[function(a){var z
H.e(a,"$ist")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fe(null)},"iF","$1","$0","gd_",0,2,0],
iL:[function(a){var z,y,x
H.w(a,"$isk",[D.a2],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eL(x))return!1}return!0},"$1","gfm",4,0,37],
it:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd_(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.ct)C.a.h(this.y,t)
s=t.x
if(s==null){s=new D.b3()
s.a=H.h([],v)
s.c=0
t.x=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gf2",8,0,19],
iN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd_(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa2")
if(t instanceof D.ct)C.a.L(this.y,t)
s=t.x
if(s==null){s=new D.b3()
s.a=H.h([],v)
s.c=0
t.x=s}H.f(x,w)
C.a.L(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gfo",8,0,19],
eL:function(a){var z=C.a.b0(this.y,a)
return z},
$ask:function(){return[D.a2]},
$asaH:function(){return[D.a2]}},iF:{"^":"b;",$isa2:1,$isaJ:1},jb:{"^":"b;",$isa2:1,$isaJ:1},jn:{"^":"b;",$isa2:1,$isaJ:1},ct:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
a9:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a9(null)},"ik","$1","$0","gbM",0,2,0],
$isa2:1,
$isaJ:1},jo:{"^":"b;",$isa2:1,$isaJ:1}}],["","",,V,{"^":"",
nh:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","it",8,0,33],
cG:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bf(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.d.eb($.m.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.h([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ac(z[u],x))}return z},
dG:function(a,b){return C.d.ig(Math.pow(b,C.I.cl(Math.log(H.mh(a))/Math.log(b))))},
a4:{"^":"b;a,b,c",
i:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.a4(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b0:{"^":"b;a,b,c,d",
i:function(a,b){var z,y,x,w
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
return new V.b0(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
cn:{"^":"b;a,b,c,d,e,f,r,x,y",
af:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscn")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.d.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.d.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.d.i(t,s)
q=a5.b
p=C.d.i(z,q)
o=a5.e
n=C.d.i(w,o)
m=a5.x
l=C.d.i(t,m)
k=a5.c
z=C.d.i(z,k)
j=a5.f
w=C.d.i(w,j)
i=a5.y
t=C.d.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.d.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.d.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.d.i(d,s)
b=C.d.i(h,q)
a=C.d.i(f,o)
a0=C.d.i(d,m)
h=C.d.i(h,k)
f=C.d.i(f,j)
d=C.d.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.d.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.d.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.cn(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.i(a3,s),C.d.i(a1,q)+C.d.i(a2,o)+C.d.i(a3,m),C.d.i(a1,k)+C.d.i(a2,j)+C.d.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cn))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
y=V.br(H.h([this.a,this.d,this.r],z),3,0)
x=V.br(H.h([this.b,this.e,this.x],z),3,0)
w=V.br(H.h([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
al:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
af:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dU:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.bE()
a3=1/a2
a4=-w
a5=-i
return V.ay((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isal")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
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
if(typeof f!=="number")return f.i()
e=this.f
if(typeof e!=="number")return e.i()
d=this.r
if(typeof d!=="number")return d.i()
c=this.x
if(typeof c!=="number")return c.i()
b=this.y
if(typeof b!=="number")return b.i()
a=this.z
if(typeof a!=="number")return a.i()
a0=this.Q
if(typeof a0!=="number")return a0.i()
a1=this.ch
if(typeof a1!=="number")return a1.i()
a2=this.cx
if(typeof a2!=="number")return a2.i()
a3=this.cy
if(typeof a3!=="number")return a3.i()
a4=this.db
if(typeof a4!=="number")return a4.i()
a5=this.dx
if(typeof a5!=="number")return a5.i()
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ec:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gai(a)
if(typeof z!=="number")return z.i()
y=C.d.i(z,y)
z=this.b
x=a.gaj(a)
if(typeof z!=="number")return z.i()
x=C.d.i(z,x)
z=this.c
w=a.gak()
if(typeof z!=="number")return z.i()
w=C.d.i(z,w)
z=this.e
v=a.gai(a)
if(typeof z!=="number")return z.i()
v=C.d.i(z,v)
z=this.f
u=a.gaj(a)
if(typeof z!=="number")return z.i()
u=C.d.i(z,u)
z=this.r
t=a.gak()
if(typeof z!=="number")return z.i()
t=C.d.i(z,t)
z=this.y
s=a.gai(a)
if(typeof z!=="number")return z.i()
s=C.d.i(z,s)
z=this.z
r=a.gaj(a)
if(typeof z!=="number")return z.i()
r=C.d.i(z,r)
z=this.Q
q=a.gak()
if(typeof z!=="number")return z.i()
return new V.G(y+x+w,v+u+t,s+r+C.d.i(z,q))},
bd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.a3(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
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
j:function(a){return this.N()},
dK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.br(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.br(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.br(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.br(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
N:function(){return this.dK("",3,0)},
C:function(a){return this.dK(a,3,0)},
p:{
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bE:function(){return V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eq:function(a,b,c){return V.ay(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
d4:function(a,b,c,d){return V.ay(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
en:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eo:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
ep:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
M:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
a3:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bI:{"^":"b;q:a>,t:b>,c,d",
i:function(a,b){return new V.bI(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
ey:{"^":"b;q:a>,t:b>,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ey))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
ez:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ey(a,b,c,d)}}},
W:{"^":"b;a,b",
hH:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.W(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.W(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hH:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ay:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.G(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dV:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hn:{"^":"dY;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bN:function(a){var z=V.cG(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.O()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.E(a)},
scD:function(a,b){},
scp:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bN(z)}z=new D.E("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.J(z)}},
scr:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bN(z)}z=new D.E("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.J(z)}},
sY:function(a,b){var z,y
b=this.bN(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.q])
z.b=!0
this.J(z)}},
scq:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.J(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.q])
z.b=!0
this.J(z)}},
scd:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.q])
z.b=!0
this.J(z)}},
al:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
p:{
cR:function(){var z=new U.hn()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e_:{"^":"a8;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
am:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e_))return!1
return J.Q(this.a,b.a)},
j:function(a){return"Constant: "+this.a.C("          ")},
p:{
ce:function(a){var z=new U.e_()
z.a=a
return z}}},ea:{"^":"aH;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
J:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.J(null)},"ag","$1","$0","gaK",0,2,0],
il:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.J(z)},"$2","geA",8,0,23],
iM:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaK(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.f(x,w)
C.a.L(t.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gfn",8,0,23],
am:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.am(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.bE():x
z=this.e
if(!(z==null))z.ad(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ask:function(){return[U.a8]},
$asaH:function(){return[U.a8]},
$isa8:1,
p:{
cV:function(a){var z=new U.ea()
z.bL(U.a8)
z.bg(z.geA(),z.gfn())
z.e=null
z.f=V.bE()
z.r=0
return z}}},a8:{"^":"dY;"},eA:{"^":"a8;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.O()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.E(a)},
seg:function(a){var z,y
a=V.cG(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.E("yaw",y,a,this,[P.q])
z.b=!0
this.J(z)}},
se2:function(a,b){var z,y
b=V.cG(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.E("pitch",y,b,this,[P.q])
z.b=!0
this.J(z)}},
se7:function(a){var z,y
a=V.cG(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.E("roll",y,a,this,[P.q])
z.b=!0
this.J(z)}},
am:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.seg(this.a+this.d*b.y)
this.se2(0,this.b+this.e*b.y)
this.se7(this.c+this.f*b.y)
this.x=V.ep(this.c).i(0,V.eo(this.b)).i(0,V.en(this.a))
z=this.y
if(!(z==null))z.ad(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eA))return!1
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
j:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"}},jT:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.O()
this.cy=z}return z},
J:[function(a){var z
H.e(a,"$ist")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.J(null)},"ag","$1","$0","gaK",0,2,0],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdk()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.c.gdW()
x.toString
z=H.f(this.gbU(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
y=H.f(this.gbV(),y)
C.a.h(z.a,y)
return!0},
eY:[function(a){H.e(a,"$ist")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbT",4,0,2],
eZ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$isbF")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.W(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.W(y.a,y.b).i(0,2).w(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.W(x.a,x.b).i(0,2).w(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
this.b.sT(0)
y=y.M(0,a.z)
this.Q=new V.W(y.a,y.b).i(0,2).w(0,z.ga4())}this.ag()},"$1","gbU",4,0,2],
f_:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sT(y*10*x)
this.ag()}},"$1","gbV",4,0,2],
am:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.ch=y
x=b.y
this.b.al(0,x)
this.cx=V.ep(this.b.d)}return this.cx},
$isa8:1},jU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.O()
this.fx=z}return z},
J:[function(a){var z
H.e(a,"$ist")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.J(null)},"ag","$1","$0","gaK",0,2,0],
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdk()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.c.gdW()
x.toString
z=H.f(this.gbU(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
x=H.f(this.gbV(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.O()
x.f=z}x=H.f(this.geV(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.f(this.geW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.O()
x.b=z}x=H.f(this.gfR(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.f(this.gfQ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.O()
x.c=z}y=H.f(this.gfP(),y)
C.a.h(z.a,y)
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.W(z,y)},
eY:[function(a){a=H.j(H.e(a,"$ist"),"$isbF")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbT",4,0,2],
eZ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$isbF")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.W(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.ap(new V.W(y.a,y.b).i(0,2).w(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ap(new V.W(x.a,x.b).i(0,2).w(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.M(0,a.z)
this.dx=this.ap(new V.W(y.a,y.b).i(0,2).w(0,z.ga4()))}this.ag()},"$1","gbU",4,0,2],
f_:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sT(-y*10*z)
this.ag()}},"$1","gbV",4,0,2],
iq:[function(a){if(H.j(H.e(a,"$ist"),"$isel").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geV",4,0,2],
ir:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$isbF")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ap(new V.W(x.a,x.b).i(0,2).w(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.M(0,a.z)
this.dx=this.ap(new V.W(y.a,y.b).i(0,2).w(0,z.ga4()))
this.ag()},"$1","geW",4,0,2],
iU:[function(a){H.e(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfR",4,0,2],
iT:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$iseL")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.W(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.ap(new V.W(y.a,y.b).i(0,2).w(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.ap(new V.W(x.a,x.b).i(0,2).w(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.M(0,a.z)
this.dx=this.ap(new V.W(y.a,y.b).i(0,2).w(0,z.ga4()))}this.ag()},"$1","gfQ",4,0,2],
iS:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sT(-y*10*z)
this.ag()}},"$1","gfP",4,0,2],
am:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.al(0,x)
this.b.al(0,x)
this.fr=V.en(this.b.d).i(0,V.eo(this.c.d))}return this.fr},
$isa8:1},jV:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.O()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.E(a)},
aZ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.O()
z.e=y
z=y}else z=y
y=H.f(this.gf0(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.O()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
is:[function(a){var z,y,x,w
H.e(a,"$ist")
if(!J.Q(this.b,this.a.b.c))return
H.j(a,"$isd5")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.q])
z.b=!0
this.J(z)}},"$1","gf0",4,0,2],
am:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.d4(x,x,x,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",hG:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aG:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aG(null)},"im","$1","$0","gao",0,2,0],
ix:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b3()
s.a=H.h([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gf6",8,0,8],
iy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b3()
s.a=H.h([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.L(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gf7",8,0,8],
sba:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.gao(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gao(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.cs])
z.b=!0
this.aG(z)}},
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e5(this.c)
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
u=C.e.ae(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.e.ae(v.b*w)
s=C.e.ae(v.c*x)
a.c=s
v=C.e.ae(v.d*w)
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
s.e4(V.ay(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ev
if(y==null){y=new V.G(0,0,-1)
m=y.w(0,Math.sqrt(y.F(y)))
y=new V.G(0,1,0).ay(m)
l=y.w(0,Math.sqrt(y.F(y)))
k=m.ay(l)
j=new V.G(0,0,0)
y=V.ay(l.a,k.a,m.a,l.P(0).F(j),l.b,k.b,m.b,k.P(0).F(j),l.c,k.c,m.c,m.P(0).F(j),0,0,0,1)
$.ev=y
i=y}else i=y
y=z.a
if(y!=null){h=y.am(0,a,z)
if(h!=null)i=h.i(0,i)}a.db.e4(i)
z=this.c
if(z!=null)z.al(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.al(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aT(a)
this.a.toString
a.cy.ct()
a.db.ct()
this.b.toString
a.e3()},
$isor:1}}],["","",,A,{"^":"",dO:{"^":"b;a,b,c"},ha:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hw:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ik:{"^":"eB;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aO,0aA,0aP,0bp,0dl,0dm,0bq,0br,0dn,0dq,0bs,0bt,0dr,0ds,0bu,0dt,0du,0bv,0dv,0dw,0bw,0bx,0by,0dz,0dA,0bz,0bA,0dB,0dC,0bB,0dD,0ce,0dE,0cf,0dF,0cg,0dG,0ci,0dH,0cj,0dI,0ck,a,b,0c,0d,0e,0f,0r",
eu:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.am("")
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
a2.fU(z)
a2.h0(z)
a2.fV(z)
a2.h8(z)
a2.h9(z)
a2.h2(z)
a2.hd(z)
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
z=new P.am("")
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
v.fY(z)
v.fT(z)
v.fW(z)
v.fZ(z)
v.h6(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h4(z)
v.h5(z)}v.h1(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.h){r+="uniform sampler2D alphaTxt;\n"
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
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.h([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.W(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fX(z)
v.h3(z)
v.h7(z)
v.ha(z)
v.hb(z)
v.hc(z)
v.h_(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.i])
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
n="vec4("+C.a.W(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cU(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cU(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fL(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.u(P.v("Failed to link shader: "+H.l(m)))}this.fL()
this.fM()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaL")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaL")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaL")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaL")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdi")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaL")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.h([],[A.aL])
y=a2.aO
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.u(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaL"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.aO=H.j(this.r.n(0,"diffuseTxt"),"$isan")
this.aP=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.aA=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aP=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bp=H.j(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dl=H.j(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bq=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dm=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bq=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.bt=H.j(this.r.n(0,"shininess"),"$isZ")
this.br=H.j(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dn=H.j(this.r.n(0,"specularTxt"),"$isan")
this.bs=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dq=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bs=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.h:this.dr=H.j(this.r.n(0,"bumpTxt"),"$isan")
this.bu=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.ds=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.bu=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dt=H.j(this.r.n(0,"envSampler"),"$isao")
this.du=H.j(this.r.n(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bv=H.j(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dv=H.j(this.r.n(0,"reflectTxt"),"$isan")
this.bw=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dw=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bw=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.bx=H.j(this.r.n(0,"refraction"),"$isZ")
this.by=H.j(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dz=H.j(this.r.n(0,"refractTxt"),"$isan")
this.bz=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dA=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bz=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.bA=H.j(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.h:this.dB=H.j(this.r.n(0,"alphaTxt"),"$isan")
this.bB=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dC=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bB=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.ce=H.h([],[A.eX])
this.cf=H.h([],[A.eY])
this.cg=H.h([],[A.eZ])
this.ci=H.h([],[A.f_])
this.cj=H.h([],[A.f0])
this.ck=H.h([],[A.f1])
if(a2.k2){y=a2.z
if(y>0){this.dD=H.e(this.r.n(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.ce;(x&&C.a).h(x,new A.eX(l,k,j))}}y=a2.Q
if(y>0){this.dE=H.e(this.r.n(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isZ")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.cf;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dF=H.e(this.r.n(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.cg;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dG=H.e(this.r.n(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isan")
x=this.ci;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dH=H.e(this.r.n(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdi")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isao")
x=this.cj;(x&&C.a).h(x,new A.f0(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dI=H.e(this.r.n(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isan")
x=this.ck;(x&&C.a).h(x,new A.f1(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ah:function(a,b,c){b.a.uniform1i(b.d,1)},
aa:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.en(c)
b.a.uniform1i(b.d,0)}},
p:{
il:function(a,b){var z,y
z=a.aA
y=new A.ik(b,z)
y.ew(b,z)
y.eu(a,b)
return y}}},iq:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aO,aA,aP",
fU:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aO+"];\n"
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
h0:function(a){var z
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
fV:function(a){var z
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
h8:function(a){var z,y
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
h9:function(a){var z,y
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
h2:function(a){var z
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
hd:function(a){var z
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
av:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aE(c,1))+"Txt;\n"
a.a=z
if(b===C.h)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fY:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.av(a,z,"emission")
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
fT:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.av(a,z,"ambient")
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
fW:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"diffuse")
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
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fZ:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"invDiffuse")
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
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
h6:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.av(a,z,"specular")
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
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
h1:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.h:z+="uniform sampler2D bumpTxt;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
h4:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.av(a,z,"reflect")
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
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
h5:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.av(a,z,"refract")
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
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fX:function(a){var z,y
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
h3:function(a){var z,y
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
h7:function(a){var z,y
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
ha:function(a){var z,y,x
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
hb:function(a){var z,y,x
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
hc:function(a){var z,y,x
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
h_:function(a){var z
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
j:function(a){return this.aA}},eX:{"^":"b;a,b,c"},f_:{"^":"b;a,b,c,d,e,f,r,x"},eY:{"^":"b;a,b,c,d,e,f,r"},f0:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eZ:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eB:{"^":"cK;",
ew:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cU:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fL:function(){var z,y,x,w,v,u
z=H.h([],[A.dO])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dO(y,v.name,u))}this.f=new A.ha(z)},
fM:function(){var z,y,x,w,v,u
z=H.h([],[A.ac])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hr(v.type,v.size,v.name,u))}this.r=new A.jE(z)},
aI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dh(z,y,b,a,c)},
eN:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.dh(z,y,b,a,c)},
eO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dh(z,y,b,a,c)},
bl:function(a,b){return new P.fd(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hr:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jz(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jC(this.a,this.e,c,d)
case 35667:return new A.jA(this.a,this.e,c,d)
case 35668:return new A.jB(this.a,this.e,c,d)
case 35669:return new A.jD(this.a,this.e,c,d)
case 35674:return new A.jG(this.a,this.e,c,d)
case 35675:return new A.di(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.eN(b,c,d)
case 35680:return this.eO(b,c,d)
case 35670:throw H.a(this.bl("BOOL",c))
case 35671:throw H.a(this.bl("BOOL_VEC2",c))
case 35672:throw H.a(this.bl("BOOL_VEC3",c))
case 35673:throw H.a(this.bl("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cd:{"^":"b;a,b",
j:function(a){return this.b}},ac:{"^":"b;"},jE:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.N()},
hA:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
N:function(){return this.hA("\n")}},P:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jA:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},jB:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},jD:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jy:{"^":"ac;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dh:function(a,b,c,d,e){var z=new A.jy(a,b,c,e)
z.f=d
z.e=P.ia(d,0,!1,P.n)
return z}}},Z:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},jz:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jC:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},jG:{"^":"ac;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},di:{"^":"ac;a,b,c,d",
an:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ac;a,b,c,d",
an:function(a){var z=new Float32Array(H.bm(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},an:{"^":"ac;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
en:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dz:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
z=F.dc()
F.bT(z,b,c,d,a,1,0,0,1)
F.bT(z,b,c,d,a,0,1,0,3)
F.bT(z,b,c,d,a,0,0,1,2)
F.bT(z,b,c,d,a,-1,0,0,0)
F.bT(z,b,c,d,a,0,-1,0,0)
F.bT(z,b,c,d,a,0,0,-1,3)
z.aq()
return z},
cy:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bT:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
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
z.d=y}l=F.cy(y)
k=F.cy(z.b)
j=F.dI(d,e,new F.m0(z,F.cy(z.c),F.cy(z.d),k,l,c),b)
if(j!=null)a.b5(j)},
fO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.dc()
y=b?-1:1
x=-6.283185307179586/e
w=H.h([],[F.af])
v=z.a
u=new V.G(0,0,y)
u=u.w(0,Math.sqrt(u.F(u)))
C.a.h(w,v.hg(new V.bI(a,-1,-1,-1),new V.b0(1,1,1,1),new V.a3(0,0,c),new V.G(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.G(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c6(new V.bI(a,-1,-1,-1),null,new V.b0(n,l,m,1),new V.a3(r*p,q*p,c),new V.G(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.he(w)
return z},
fM:function(a,b,c,d,e,f){return F.mn(!0,c,d,new F.mm(a,f),e)},
mn:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dI(c,e,new F.mp(d),null)
if(z==null)return
z.aq()
z.c4()
if(b)z.b5(F.fO(3,!1,1,new F.mq(d),e))
z.b5(F.fO(1,!0,-1,new F.mr(d),e))
return z},
h_:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n_()
y=F.dz(a,null,new F.n0(z),c)
y.c4()
return y},
h1:function(a,b,c,d){return F.fN(c,a,d,b,new F.n3())},
mG:function(a,b,c,d,e,f){return F.fN(d,a,e,b,new F.mH(f,c))},
fN:function(a,b,c,d,e){var z=F.dI(a,b,new F.mo(H.f(e,{func:1,ret:V.a3,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aq()
z.c4()
return z},
dI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dc()
y=H.h([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c6(null,null,new V.b0(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cc(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c6(null,null,new V.b0(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cc(d))}}z.d.hf(a+1,b+1,y)
return z},
m0:{"^":"o:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cn(z.b,b).cn(z.d.cn(z.c,b),c)
a.sY(0,new V.a3(y.a,y.b,y.c))
a.se9(y.w(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sdf(new V.bI(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mm:{"^":"o:15;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mp:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sY(0,new V.a3(y,u,w))
u=new V.G(y,u,w)
a.se9(u.w(0,Math.sqrt(u.F(u))))
a.sdf(new V.bI(1-c,2+c,-1,-1))}},
mq:{"^":"o:22;a",
$1:function(a){return this.a.$2(a,1)}},
mr:{"^":"o:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
n_:{"^":"o:15;",
$2:function(a,b){return 0}},
n0:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.F(x))).i(0,1+z)
a.sY(0,new V.a3(z.a,z.b,z.c))}},
n3:{"^":"o:16;",
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)}},
mH:{"^":"o:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a3(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mo:{"^":"o:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dJ(y.$1(z),x)
x=J.dJ(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.F(x)))
u=new V.G(1,0,0)
y=v.ay(!v.u(0,u)?new V.G(0,0,1):u)
t=y.w(0,Math.sqrt(y.F(y)))
y=t.ay(v)
u=y.w(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
a.sY(0,w.D(0,new V.a3(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ak:{"^":"b;0a,0b,0c,0d,0e",
az:function(){if(!this.gb2()){C.a.L(this.a.a.d.b,this)
this.a.a.X()}this.c_()
this.c0()
this.fv()},
fI:function(a){this.a=a
C.a.h(a.d.b,this)},
fJ:function(a){this.b=a
C.a.h(a.d.c,this)},
fK:function(a){this.c=a
C.a.h(a.d.d,this)},
c_:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
fv:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gb2:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dV())return
return v.w(0,Math.sqrt(v.F(v)))},
eJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.F(z)))
z=w.M(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.ay(z.w(0,Math.sqrt(z.F(z))))
return z.w(0,Math.sqrt(z.F(z)))},
c8:function(){if(this.d!=null)return!0
var z=this.eH()
if(z==null){z=this.eJ()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
eG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dV())return
return v.w(0,Math.sqrt(v.F(v)))},
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
if($.m.$2(n,0)){z=r.M(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.M(0,u).i(0,l).D(0,u).M(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.F(z)))
z=k.ay(m)
z=z.w(0,Math.sqrt(z.F(z))).ay(k)
m=z.w(0,Math.sqrt(z.F(z)))}return m},
c6:function(){if(this.e!=null)return!0
var z=this.eG()
if(z==null){z=this.eI()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
b3:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.P(0)
y=this.e
if(y!=null)this.e=y.P(0)
this.a.a.X()},
ghn:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
C:function(a){var z,y
if(this.gb2())return a+"disposed"
z=a+C.b.ac(J.aa(this.a.e),0)+", "+C.b.ac(J.aa(this.b.e),0)+", "+C.b.ac(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
N:function(){return this.C("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.ak()
y=a.a
if(y==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.v("May not create a face with vertices attached to different shapes."))
z.fI(a)
z.fJ(b)
z.fK(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hJ:{"^":"b;"},
ja:{"^":"hJ;",
b4:function(a,b,c){var z,y
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
d0:{"^":"b;0a,0b",
az:function(){if(!this.gb2()){C.a.L(this.a.a.c.b,this)
this.a.a.X()}this.c_()
this.c0()},
c_:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gb2:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
C:function(a){if(this.gb2())return a+"disposed"
return a+C.b.ac(J.aa(this.a.e),0)+", "+C.b.ac(J.aa(this.b.e),0)},
N:function(){return this.C("")}},
i0:{"^":"b;"},
jx:{"^":"i0;",
b4:function(a,b,c){var z,y
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
this.a.a.X()}this.fu()},
fu:function(){var z=this.a
if(z!=null){C.a.L(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ac(J.aa(z.e),0)},
N:function(){return this.C("")}},
eC:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.hp())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d9()
if(r.a==null)H.u(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d0()
s=p.a
if(s==null)H.u(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.u(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.ad(0)},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.ad(0)
return y},
eS:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.n],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b4(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hL:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.h([],z)
t=H.h([],x)
if(this.eS(a,v,y,u,t))b.b5(u)}this.a.A()
this.c.cv()
this.d.cv()
this.b.i2()
this.c.cw(new F.jx())
this.d.cw(new F.ja())
z=this.e
if(!(z==null))z.ad(0)},
hi:function(a){this.hL(new F.k8(),new F.iA())},
c4:function(){return this.hi(null)},
b3:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.b3()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdX(new V.G(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.G(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.Q(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.E(null)}}}}z=this.e
if(!(z==null))z.ad(0)},
hl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bk().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcH(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.dT])
for(r=0,q=0;q<w;++q){p=b.hj(q)
o=p.gcH(p)
C.a.m(s,q,new Z.dT(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hI(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bm(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dU(new Z.fa(34962,j),s,b)
i.b=H.h([],[Z.ci])
if(this.b.b.length!==0){x=P.n
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(4,h.length,f))}return i},
j:function(a){var z=H.h([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.W(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.E(a)},
X:function(){return this.a5(null)},
p:{
dc:function(){var z,y
z=new F.eC()
y=new F.k3(z)
y.b=!1
y.c=H.h([],[F.af])
z.a=y
y=new F.j9(z)
y.b=H.h([],[F.d9])
z.b=y
y=new F.j8(z)
y.b=H.h([],[F.d0])
z.c=y
y=new F.j7(z)
y.b=H.h([],[F.ak])
z.d=y
z.e=null
return z}}},
j7:{"^":"b;a,0b",
he:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
z=H.h([],[F.ak])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.d(a,v)
v=a[v]
if(w>=u)return H.d(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.by(x,v,u))}}return z},
hf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
z=H.h([],[F.ak])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.d(c,x)
r=c[x];++x
if(x>=s)return H.d(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.d(c,p)
o=c[p]
if(y<0||y>=s)return H.d(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.by(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.by(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cw:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b4(0,v,t)){v.az()
break}}}}},
cv:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghn(x)
if(y)x.az()}},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c8())x=!1
return x},
c7:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].c6())x=!1
return x},
b3:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].b3()},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
N:function(){return this.C("")}},
j8:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cw:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b4(0,v,t)){v.az()
break}}}}},
cv:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.az()}},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.h([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.W(z,"\n")},
N:function(){return this.C("")}},
j9:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i2:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.az()}},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
N:function(){return this.C("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cc:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c6(this.cx,x,u,z,y,w,v,a,t)},
hp:function(){return this.cc(null)},
sY:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdX:function(a){var z
a=a.w(0,Math.sqrt(a.F(a)))
if(!J.Q(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
se9:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sdf:function(a){var z
if(!J.Q(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
hI:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$aP())){z=this.f
y=[P.q]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.r
y=[P.q]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aN())){z=this.x
y=[P.q]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aQ())){z=this.y
y=[P.q]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.u(a,$.$get$aR())){z=this.z
y=[P.q]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bM())){z=this.Q
y=[P.q]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bN())){z=this.Q
y=[P.q]
if(z==null)return H.h([1,1,1,1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bk()))return H.h([this.ch],[P.q])
else if(z.u(a,$.$get$aM())){z=this.cx
y=[P.q]
if(z==null)return H.h([-1,-1,-1,-1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else return H.h([],[P.q])},
c8:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.kd(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ad(0)}return!0},
c6:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.kc(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ad(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
C:function(a){var z,y,x
z=H.h([],[P.i])
C.a.h(z,C.b.ac(J.aa(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.x
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.z
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.W(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
p:{
c6:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.kb(z)
y.b=H.h([],[F.d9])
z.b=y
y=new F.k7(z)
x=[F.d0]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.k4(z)
x=[F.ak]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$f7()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$f8().a)!==0?c:null
z.ch=(x&$.$get$bk().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
kd:{"^":"o:10;a",
$1:function(a){var z,y
H.e(a,"$isak")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kc:{"^":"o:10;a",
$1:function(a){var z,y
H.e(a,"$isak")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
k3:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
hh:function(a,b,c,d,e,f,g,h,i){var z=F.c6(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hg:function(a,b,c,d,e,f){return this.hh(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c8()
return!0},
c7:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].c6()
return!0},
hm:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
this.A()
z=H.h([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
N:function(){return this.C("")}},
k4:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
K:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ak]})
C.a.K(this.b,b)
C.a.K(this.c,new F.k5(this,b))
C.a.K(this.d,new F.k6(this,b))},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
N:function(){return this.C("")}},
k5:{"^":"o:10;a,b",
$1:function(a){H.e(a,"$isak")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
k6:{"^":"o:10;a,b",
$1:function(a){var z
H.e(a,"$isak")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
k7:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
N:function(){return this.C("")}},
k9:{"^":"b;"},
k8:{"^":"k9;",
b4:function(a,b,c){return J.Q(b.f,c.f)}},
ka:{"^":"b;"},
iA:{"^":"ka;",
b5:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].sdX(z)
return}},
kb:{"^":"b;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",im:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.O()
this.dy=z}return z},
a1:[function(a){var z
H.e(a,"$ist")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a1(null)},"eB","$1","$0","gbh",0,2,0],
fB:[function(a){H.e(a,"$ist")
this.a=null
this.a1(a)},function(){return this.fB(null)},"iR","$1","$0","gfA",0,2,0],
iu:[function(a,b){var z=V.al
z=new D.cj(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a1(z)},"$2","gf3",8,0,25],
iv:[function(a,b){var z=V.al
z=new D.ck(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a1(z)},"$2","gf4",8,0,25],
cS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a3(z.e.length+3,4)*4
x=C.e.a3(z.f.length+3,4)*4
w=C.e.a3(z.r.length+3,4)*4
v=C.e.a3(z.x.length+3,4)*4
u=C.e.a3(z.y.length+3,4)*4
t=C.e.a3(z.z.length+3,4)*4
s=C.e.a3(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.e.j(q.a)+C.e.j(p.a)+C.e.j(o.a)+C.e.j(n.a)+C.e.j(m.a)+C.e.j(l.a)+C.e.j(k.a)+C.e.j(j.a)+C.e.j(i.a)+"_"
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
a=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aP()
if(c){z=$.$get$aO()
a6=new Z.bj(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.bj(a6.a|z.a)}if(a){z=$.$get$aQ()
a6=new Z.bj(a6.a|z.a)}if(a0){z=$.$get$aR()
a6=new Z.bj(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.bj(a6.a|z.a)}return new A.iq(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isc",[T.de],"$asc")
if(b!=null)if(!C.a.b0(a,b)){b.a=a.length
C.a.h(a,b)}},
al:function(a,b){var z,y,x
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
y.a=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
x=y.b
if(x!=null)y.a=x.am(0,b,y)}},
i4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cS()
y=a.fr.k(0,z.aA)
if(y==null){y=A.il(z,a.a)
x=y.b
if(x.length===0)H.u(P.v("May not cache a shader with no name."))
if(a.fr.ca(0,x))H.u(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aP
z=b.e
if(!(z instanceof Z.dU)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.aq()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c7()
t.a.c7()
t=t.e
if(!(t==null))t.ad(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hm()
s=s.e
if(!(s==null))s.ad(0)}q=b.d.hl(new Z.ke(a.a),v)
q.aQ($.$get$aP()).e=this.a.y.c
if(z)q.aQ($.$get$aO()).e=this.a.Q.c
if(u)q.aQ($.$get$aN()).e=this.a.z.c
if(w.rx)q.aQ($.$get$aQ()).e=this.a.ch.c
if(t)q.aQ($.$get$aR()).e=this.a.cx.c
if(w.x1)q.aQ($.$get$aM()).e=this.a.cy.c
b.e=q}z=T.de
p=H.h([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hw()
if(w.fx){u=this.a
t=a.dx
t=t.ga_(t)
u=u.db
u.toString
u.an(t.af(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga_(t)
s=a.dx
s=t.i(0,s.ga_(s))
a.cx=s
t=s}u=u.dx
u.toString
u.an(t.af(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi0()
s=a.dx
s=t.i(0,s.ga_(s))
a.ch=s
t=s}u=u.fr
u.toString
u.an(t.af(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.an(t.af(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.an(t.af(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.an(C.t.af(t,!0))}if(w.aO>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.e(s,"$isal")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bm(H.w(s.af(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ah(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.aa(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ah(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.aa(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ah(u.aO,u.aP,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.aa(u.aA,u.aP,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bp
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.h:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ah(u.dl,u.bq,t)
t=this.a
u=this.y.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.aa(u.dm,u.bq,t)
t=this.a
u=this.y.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.br
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bt
t.a.uniform1f(t.d,r)
break
case C.h:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ah(u.dn,u.bs,t)
t=this.a
u=this.z.f
t=t.br
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bt
u.a.uniform1f(u.d,r)
break
case C.f:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.aa(u.dq,u.bs,t)
t=this.a
u=this.z.f
t=t.br
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bt
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ce
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.ec(i.gbo(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gar(i)
g=h.c
r=f.gbE()
s=f.gbe()
f=f.gbm()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dE
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cf
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb8(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.geh(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bd(i.gb8(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gar(i)
f=h.d
g=s.gbE()
r=s.gbe()
s=s.gbm()
f.a.uniform3f(f.d,g,r,s)
s=i.gdc()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gdd()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gde()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dF
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cg
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb8(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.geh(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbo(i).iY()
f=h.c
g=s.gai(s)
r=s.gaj(s)
s=s.gak()
f.a.uniform3f(f.d,g,r,s)
s=l.bd(i.gb8(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gar(i)
r=h.e
g=s.gbE()
f=s.gbe()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.giW()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giV()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gdc()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gdd()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gde()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dG
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.ci
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gcB()
H.w(p,"$isc",s,"$asc")
if(!C.a.b0(p,r)){r.seU(p.length)
C.a.h(p,r)}r=i.gbo(i)
g=h.d
f=r.gai(r)
e=r.gaj(r)
r=r.gak()
g.a.uniform3f(g.d,f,e,r)
r=i.gbF()
e=h.b
f=r.gai(r)
g=r.gaj(r)
r=r.gak()
e.a.uniform3f(e.d,f,g,r)
r=i.gb9(i)
g=h.c
f=r.gai(r)
e=r.gaj(r)
r=r.gak()
g.a.uniform3f(g.d,f,e,r)
r=l.ec(i.gbo(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gar(i)
f=h.f
e=g.gbE()
r=g.gbe()
g=g.gbm()
f.a.uniform3f(f.d,e,r,g)
g=i.gcB()
r=g.gco(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gco(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.ghD(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dH
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cj
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.d
H.w(p,"$isc",r,"$asc")
if(g!=null)if(!C.a.b0(p,g)){g.a=p.length
C.a.h(p,g)}d=l.i(0,i.a)
g=i.a.bd(new V.a3(0,0,0))
f=h.b
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=d.bd(new V.a3(0,0,0))
f=h.c
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=d.dU(0)
f=h.d
m=new Float32Array(H.bm(H.w(new V.cn(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).af(0,!0),"$isc",s,"$asc")))
f.a.uniformMatrix3fv(f.d,!1,m)
f=i.c
g=h.e
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.d
g=f!=null
if(!g||f.d<6){g=h.r
g.a.uniform1i(g.d,1)}else{e=h.f
g=!g||f.d<6
c=e.a
e=e.d
if(g)c.uniform1i(e,0)
else c.uniform1i(e,f.a)
g=h.r
g.a.uniform1i(g.d,0)}g=i.e
f=h.x
f.a.uniform1f(f.d,g)
g=i.f
f=h.y
f.a.uniform1f(f.d,g)
g=i.r
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dI
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ck
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcB()
H.w(p,"$isc",z,"$asc")
if(!C.a.b0(p,s)){s.seU(p.length)
C.a.h(p,s)}s=i.gb8(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.geh(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbo(i)
f=h.c
g=s.gai(s)
r=s.gaj(s)
s=s.gak()
f.a.uniform3f(f.d,g,r,s)
s=i.gbF()
r=h.d
g=s.gai(s)
f=s.gaj(s)
s=s.gak()
r.a.uniform3f(r.d,g,f,s)
s=i.gb9(i)
f=h.e
g=s.gai(s)
r=s.gaj(s)
s=s.gak()
f.a.uniform3f(f.d,g,r,s)
s=l.bd(i.gb8(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gcB()
r=s.gco(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gco(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.ghD(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gar(i)
r=h.y
g=s.gbE()
f=s.gbe()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.gj4()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj5()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gdc()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gdd()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gde()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.h:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ah(z.dr,z.bu,u)
break
case C.f:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.aa(z.ds,z.bu,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga_(u).dU(0)
a.Q=u}z=z.fy
z.toString
z.an(u.af(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.aa(z.dt,z.du,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bv
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.h:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ah(z.dv,z.bw,u)
u=this.a
z=this.cx.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.aa(z.dw,z.bw,u)
u=this.a
z=this.cx.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.by
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bx
u.a.uniform1f(u.d,s)
break
case C.h:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ah(z.dz,z.bz,u)
u=this.a
z=this.cy.f
u=u.by
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,s)
break
case C.f:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.aa(z.dA,z.bz,u)
u=this.a
z=this.cy.f
u=u.by
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bA
z.a.uniform1f(z.d,t)
break
case C.h:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ah(z.dB,z.bB,t)
t=this.a
z=this.db.f
t=t.bA
t.a.uniform1f(t.d,z)
break
case C.f:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.aa(z.dC,z.bB,t)
t=this.a
z=this.db.f
t=t.bA
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b_(a)
z=b.e
z.b_(a)
z.aT(a)
z.ij(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hu()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cS().aA},
p:{
em:function(){var z,y,x,w
z=new O.im()
y=O.cQ(V.al)
z.e=y
y.bg(z.gf3(),z.gf4())
y=new O.b6(z,"emission")
y.c=C.c
y.f=new V.a4(0,0,0)
z.f=y
y=new O.b6(z,"ambient")
y.c=C.c
y.f=new V.a4(0,0,0)
z.r=y
y=new O.b6(z,"diffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.x=y
y=new O.b6(z,"invDiffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
z.y=y
y=new O.is(z,"specular")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=100
z.z=y
y=new O.ip(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b6(z,"reflect")
y.c=C.c
y.f=new V.a4(0,0,0)
z.cx=y
y=new O.ir(z,"refract")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=1
z.cy=y
y=new O.io(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.i_()
y.bL(D.a2)
y.e=H.h([],[D.hy])
y.f=H.h([],[D.iF])
y.r=H.h([],[D.jb])
y.x=H.h([],[D.jn])
y.y=H.h([],[D.ct])
y.z=H.h([],[D.jo])
y.Q=null
y.ch=null
y.cG(y.gf2(),y.gfm(),y.gfo())
z.dx=y
x=y.Q
if(x==null){x=D.O()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.t]}
w=H.f(z.gfA(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.O()
w.ch=y}x=H.f(z.gbh(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},io:{"^":"d2;0f,a,b,0c,0d,0e"},d2:{"^":"b;",
a1:[function(a){this.a.a1(H.e(a,"$ist"))},function(){return this.a1(null)},"eB","$1","$0","gbh",0,2,0],
aW:["er",function(){}],
fG:function(a){},
fH:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.f(this.gbh(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.f(this.gbh(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.E(this.b+".textureCube",x,this.e,this,[T.df])
z.b=!0
this.a.a1(z)}}},ip:{"^":"d2;a,b,0c,0d,0e"},b6:{"^":"d2;0f,a,b,0c,0d,0e",
d3:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.a1(y)}},
aW:["bK",function(){this.er()
this.d3(new V.a4(1,1,1))}],
sar:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aW()
z=this.a
z.a=null
z.a1(null)}this.d3(b)}},ir:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
fF:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.a1(z)}},
aW:function(){this.bK()
this.fF(1)}},is:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
c1:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.a1(z)}},
aW:function(){this.bK()
this.c1(100)}},cs:{"^":"b;"}}],["","",,T,{"^":"",de:{"^":"cK;"},df:{"^":"de;0b,0c,0d,0e,a",
b_:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}}},jl:{"^":"b;a,0b,0c,0d,0e",
aJ:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ab
W.a0(z,"load",H.f(new T.jm(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fC:function(a,b,c){var z,y,x,w
b=V.dG(b,2)
z=V.dG(a.width,2)
y=V.dG(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cP(null,null)
x.width=z
x.height=y
w=H.e(C.k.ej(x,"2d"),"$isdX")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ml(w.getImageData(0,0,x.width,x.height))}}},jm:{"^":"o:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fC(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.W.ib(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hv();++z.e}}}],["","",,X,{"^":"",dW:{"^":"b;",$isaJ:1},hO:{"^":"eH;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z}},iD:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
aV:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.aV(null)},"io","$1","$0","gcJ",0,2,0],
saS:function(a){var z,y,x
if(!J.Q(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.f(this.gcJ(),{func:1,ret:-1,args:[D.t]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gcJ(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.E("mover",x,this.a,this,[U.a8])
z.b=!0
this.aV(z)}},
$isaJ:1,
$isdW:1},eH:{"^":"b;"}}],["","",,B,{"^":"",
mV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=document
y=z.body
x=y.style
x.backgroundColor="#FFFFFF"
x.margin="40px"
x.padding="0"
w=z.createElement("div")
x=w.style
x.position="fixed"
x.width="100%"
x.height="100%"
x.left="0px"
x.top="0px"
x.zIndex="-1"
v="url('"+d+"')"
x.backgroundImage=v
x.backgroundRepeat="no-repeat"
y.appendChild(w)
u=z.createElement("div")
x=u.style
x.position="relative"
x.textAlign="center"
y.appendChild(u)
t=z.createElement("div")
x=t.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
x.marginTop="40px"
x.marginBottom="40px"
x.padding="40px"
x.background="rgba(255,255,255,0.8)"
C.r.fE(x,(x&&C.r).cM(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
u.appendChild(t)
if(a.length!==0)z.title=a
s=z.createElement("div")
t.appendChild(s)
s.appendChild(b)
r=z.createElement("div")
x=r.style
x.display="block"
x.clear="both"
s.appendChild(r)
x=W.ab
W.a0(z,"scroll",H.f(new B.mW(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
mX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.i],"$asc")
z=document
y=z.createElement("div")
x=y.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
w=z.createElement("table")
w.id="shellTable"
x=w.style
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
y.appendChild(w)
v=w.insertRow(-1)
u=W.cP(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.e(v.insertCell(-1),"$isbK")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.e(q.insertCell(-1),"$isbK").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<1;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.e(q.insertCell(-1),"$isbK")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.e(q.insertCell(-1),"$isbK")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.e(q.insertCell(-1),"$isbK").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.mV(a,y,!1,"../resources/SnowTop.png")},
mY:function(a){P.js(C.G,new B.mZ(a))},
iR:{"^":"b;a,0b",
d9:function(a,b,c,d){var z,y,x,w,v,u,t
H.f(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dk().gbD().k(0,z)==null)if(d){c.$0()
this.ed(b)
y=!0}else y=!1
else if(P.dk().gbD().k(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dM(this.b).h(0,w)
u=W.hR("radio")
u.checked=y
u.name=z
z=W.ab
W.a0(u,"change",H.f(new B.iS(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dM(this.b).h(0,x.createElement("br"))},
aY:function(a,b,c){return this.d9(a,b,c,!1)},
ed:function(a){var z,y,x,w,v
z=P.dk()
y=P.i
x=P.i6(z.gbD(),y,y)
x.m(0,this.a,a)
w=z.e6(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.lh([],[]).cC(""),"",v)}},
iS:{"^":"o:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.ed(this.c)
this.d.$0()}}},
mW:{"^":"o:14;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.d.ae(this.b.scrollTop))+"px"
z.top=y}},
mZ:{"^":"o:49;a",
$1:function(a){H.e(a,"$isbg")
P.dH(C.d.eb(this.a.ghB(),2)+" fps")}}}],["","",,T,{"^":"",
fW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
B.mX("Test 022",H.h(["shapes"],[P.i]),"Test of the Material Lighting shader with a textured point light.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.u(P.v("Failed to find an element with the identifier, threeDart."))
x=E.jq(y,!0,!0,!0,!1)
w=x.f
v=w.a
u=v.createTexture()
v.bindTexture(34067,u)
v.texParameteri(34067,10242,10497)
v.texParameteri(34067,10243,10497)
v.texParameteri(34067,10241,9729)
v.texParameteri(34067,10240,9729)
v.bindTexture(34067,null)
t=new T.df(0)
t.b=u
t.c=!1
t.d=0
t.e=D.O()
w.aJ(t,u,"../resources/earthColor/posx.png",34069,!1,!1)
w.aJ(t,u,"../resources/earthColor/negx.png",34070,!1,!1)
w.aJ(t,u,"../resources/earthColor/posy.png",34071,!1,!1)
w.aJ(t,u,"../resources/earthColor/negy.png",34072,!1,!1)
w.aJ(t,u,"../resources/earthColor/posz.png",34073,!1,!1)
w.aJ(t,u,"../resources/earthColor/negz.png",34074,!1,!1)
s=U.cV(null)
s.h(0,U.ce(V.eq(0,0,2)))
w=new U.eA()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.seg(0)
w.se2(0,0)
w.se7(0)
v=w.d
if(!$.m.$2(v,0.5)){r=w.d
w.d=0.5
v=new D.E("deltaYaw",r,0.5,w,[P.q])
v.b=!0
w.J(v)}v=w.e
if(!$.m.$2(v,0.5)){r=w.e
w.e=0.5
v=new D.E("deltaPitch",r,0.5,w,[P.q])
v.b=!0
w.J(v)}v=w.f
if(!$.m.$2(v,0)){r=w.f
w.f=0
v=new D.E("deltaRoll",r,0,w,[P.q])
v.b=!0
w.J(v)}s.h(0,w)
q=E.cT(null,!0,null,"",null,null)
w=U.cV(null)
w.h(0,U.ce(V.d4(0.2,0.2,0.2,1)))
w.h(0,s)
q.saS(w)
q.sa6(0,F.h_(8,null,8))
w=O.em()
v=w.f
p=v.c
if(p!==C.f){if(p===C.c)v.aW()
v.c=C.f
v.fG(null)
p=v.a
p.a=null
p.a1(null)}v.fH(t)
q.sba(w)
o=new D.ct()
o.c=new V.a4(1,1,1)
o.e=1
o.f=0
o.r=0
o.a=V.bE()
r=o.b
o.b=s
w=s.gB()
w.toString
v=H.f(o.gbM(),{func:1,ret:-1,args:[D.t]})
C.a.h(w.a,v)
w=new D.E("mover",r,o.b,o,[U.a8])
w.b=!0
o.a9(w)
n=new V.a4(1,1,1)
if(!o.c.u(0,n)){r=o.c
o.c=n
w=new D.E("color",r,n,o,[V.a4])
w.b=!0
o.a9(w)}w=o.d
if(w!==t){if(w!=null){w=w.e
v=H.f(o.gbM(),{func:1,ret:-1,args:[D.t]})
C.a.L(w.a,v)}r=o.d
o.d=t
w=t.e
v=H.f(o.gbM(),{func:1,ret:-1,args:[D.t]})
C.a.h(w.a,v)
w=new D.E("texture",r,o.d,o,[T.df])
w.b=!0
o.a9(w)}w=o.e
if(!$.m.$2(w,1)){r=o.e
o.e=1
w=new D.E("attenuation0",r,1,o,[P.q])
w.b=!0
o.a9(w)}w=o.f
if(!$.m.$2(w,0.15)){r=o.f
o.f=0.15
w=new D.E("attenuation1",r,0.15,o,[P.q])
w.b=!0
o.a9(w)}w=o.r
if(!$.m.$2(w,0.05)){r=o.r
o.r=0.05
w=new D.E("attenuation2",r,0.05,o,[P.q])
w.b=!0
o.a9(w)}m=O.em()
m.dx.h(0,o)
w=m.r
w.sar(0,new V.a4(0.2,0.2,0.2))
w=m.x
w.sar(0,new V.a4(1,1,1))
w=m.z
w.sar(0,new V.a4(1,1,1))
w=m.z
if(w.c===C.c){w.c=C.i
w.bK()
w.c1(100)
v=w.a
v.a=null
v.a1(null)}w.c1(100)
l=E.cT(null,!0,null,"",null,null)
l.saS(U.ce(V.d4(3,3,3,1)))
w=F.dz(1,null,null,1)
w.b3()
l.sa6(0,w)
k=E.cT(null,!0,null,"",null,null)
k.sa6(0,F.h1(30,1,15,0.5))
j=U.cV(null)
w=x.r
v=new U.jU()
p=U.cR()
p.scD(0,!0)
p.scp(6.283185307179586)
p.scr(0)
p.sY(0,0)
p.scq(100)
p.sT(0)
p.scd(0.5)
v.b=p
p=p.gB()
p.toString
i={func:1,ret:-1,args:[D.t]}
h=H.f(v.gaK(),i)
C.a.h(p.a,h)
p=U.cR()
p.scD(0,!0)
p.scp(6.283185307179586)
p.scr(0)
p.sY(0,0)
p.scq(100)
p.sT(0)
p.scd(0.5)
v.c=p
C.a.h(p.gB().a,h)
v.d=null
v.e=!1
v.f=!1
v.r=!1
v.x=2.5
v.y=2.5
v.z=2
v.Q=4
v.cx=!1
v.ch=!1
v.cy=0
v.db=0
v.dx=null
v.dy=0
v.fr=null
v.fx=null
g=new X.az(!1,!1,!1)
r=v.d
v.d=g
p=[X.az]
h=new D.E("modifiers",r,g,v,p)
h.b=!0
v.J(h)
h=v.f
if(h!==!1){v.f=!1
h=new D.E("invertX",h,!1,v,[P.ah])
h.b=!0
v.J(h)}h=v.r
if(h!==!1){v.r=!1
h=new D.E("invertY",h,!1,v,[P.ah])
h.b=!0
v.J(h)}v.aZ(w)
j.h(0,v)
w=x.r
v=new U.jT()
h=U.cR()
h.scD(0,!0)
h.scp(6.283185307179586)
h.scr(0)
h.sY(0,0)
h.scq(100)
h.sT(0)
h.scd(0.2)
v.b=h
h=h.gB()
h.toString
f=H.f(v.gaK(),i)
C.a.h(h.a,f)
v.c=null
v.d=!1
v.e=2.5
v.f=2
v.r=4
v.y=!1
v.x=!1
v.z=0
v.Q=null
v.ch=0
v.cx=null
v.cy=null
g=new X.az(!0,!1,!1)
r=v.c
v.c=g
h=new D.E("modifiers",r,g,v,p)
h.b=!0
v.J(h)
v.aZ(w)
j.h(0,v)
w=x.r
v=new U.jV()
v.c=0.01
v.d=0
v.e=0
g=new X.az(!1,!1,!1)
v.b=g
p=new D.E("modifiers",null,g,v,p)
p.b=!0
v.J(p)
v.aZ(w)
j.h(0,v)
j.h(0,U.ce(V.eq(0,0,5)))
e=new M.hG()
w=O.cQ(E.aI)
e.d=w
w.bg(e.gf6(),e.gf7())
e.e=null
e.f=null
e.r=null
e.x=null
d=new X.iD()
d.b=1.0471975511965976
d.c=0.1
d.d=2000
d.saS(null)
w=d.b
if(!$.m.$2(w,1.0471975511965976)){r=d.b
d.b=1.0471975511965976
w=new D.E("fov",r,1.0471975511965976,d,[P.q])
w.b=!0
d.aV(w)}w=d.c
if(!$.m.$2(w,0.1)){r=d.c
d.c=0.1
w=new D.E("near",r,0.1,d,[P.q])
w.b=!0
d.aV(w)}w=d.d
if(!$.m.$2(w,2000)){r=d.d
d.d=2000
w=new D.E("far",r,2000,d,[P.q])
w.b=!0
d.aV(w)}w=e.a
if(w!==d){if(w!=null){w=w.gB()
w.toString
v=H.f(e.gao(),i)
C.a.L(w.a,v)}r=e.a
e.a=d
w=d.gB()
w.toString
v=H.f(e.gao(),i)
C.a.h(w.a,v)
w=new D.E("camera",r,e.a,e,[X.dW])
w.b=!0
e.aG(w)}c=new X.hO()
w=new V.b0(0,0,0,1)
c.a=w
c.b=!0
c.c=2000
c.d=!0
c.e=0
c.f=!1
w=V.ez(0,0,1,1)
c.r=w
w=e.b
if(w!==c){if(w!=null){w=w.gB()
w.toString
v=H.f(e.gao(),i)
C.a.L(w.a,v)}r=e.b
e.b=c
w=c.gB()
w.toString
v=H.f(e.gao(),i)
C.a.h(w.a,v)
w=new D.E("target",r,e.b,e,[X.eH])
w.b=!0
e.aG(w)}e.sba(null)
e.sba(m)
e.d.h(0,l)
e.d.h(0,k)
e.d.h(0,q)
e.a.saS(j)
w=x.d
if(w!==e){if(w!=null){w=w.gB()
w.toString
v=H.f(x.gcI(),i)
C.a.L(w.a,v)}x.d=e
w=e.gB()
w.toString
i=H.f(x.gcI(),i)
C.a.h(w.a,i)
x.ey()}w=new B.iR("shapes")
z=z.getElementById("shapes")
w.b=z
if(z==null)H.u("Failed to find "+w.j(0)+"._elemId for RadioGroup")
w.aY(0,"Cube",new T.mJ(k))
w.aY(0,"Cylinder",new T.mK(k))
w.aY(0,"Cone",new T.mL(k))
w.aY(0,"Sphere",new T.mM(k))
w.d9(0,"Toroid",new T.mN(k),!0)
w.aY(0,"Knot",new T.mO(k))
B.mY(x)},
mJ:{"^":"o:1;a",
$0:function(){this.a.sa6(0,F.dz(1,null,null,1))}},
mK:{"^":"o:1;a",
$0:function(){this.a.sa6(0,F.fM(1,!0,!0,1,40,1))}},
mL:{"^":"o:1;a",
$0:function(){this.a.sa6(0,F.fM(1,!0,!1,1,40,0))}},
mM:{"^":"o:1;a",
$0:function(){this.a.sa6(0,F.h_(6,null,6))}},
mN:{"^":"o:1;a",
$0:function(){this.a.sa6(0,F.h1(30,1,15,0.5))}},
mO:{"^":"o:1;a",
$0:function(){this.a.sa6(0,F.mG(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ef.prototype
return J.ee.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.eg.prototype
if(typeof a=="boolean")return J.hV.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.aE=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.c8=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.mw=function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.mx=function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.dC=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c5.prototype
return a}
J.aU=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c3.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.h2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mw(a).O(a,b)}
J.dJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mx(a).i(a,b)}
J.dK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).k(a,b)}
J.cH=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fT(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c8(a).m(a,b,c)}
J.h3=function(a,b){return J.dC(a).H(a,b)}
J.h4=function(a,b,c){return J.aU(a).fw(a,b,c)}
J.h5=function(a,b,c,d){return J.aU(a).da(a,b,c,d)}
J.h6=function(a,b){return J.dC(a).V(a,b)}
J.cI=function(a,b,c){return J.aE(a).ho(a,b,c)}
J.cJ=function(a,b){return J.c8(a).I(a,b)}
J.h7=function(a,b,c,d){return J.c8(a).aB(a,b,c,d)}
J.dL=function(a,b){return J.c8(a).K(a,b)}
J.dM=function(a){return J.aU(a).gc9(a)}
J.b_=function(a){return J.K(a).gS(a)}
J.bu=function(a){return J.c8(a).gZ(a)}
J.at=function(a){return J.aE(a).gl(a)}
J.h8=function(a,b){return J.aU(a).i5(a,b)}
J.h9=function(a,b){return J.aU(a).sa0(a,b)}
J.aa=function(a){return J.K(a).j(a)}
I.ar=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cO.prototype
C.r=W.hs.prototype
C.H=J.r.prototype
C.a=J.b5.prototype
C.I=J.ee.prototype
C.e=J.ef.prototype
C.t=J.eg.prototype
C.d=J.c1.prototype
C.b=J.c2.prototype
C.P=J.c3.prototype
C.U=H.d8.prototype
C.V=W.iz.prototype
C.z=J.iE.prototype
C.W=P.da.prototype
C.q=J.c5.prototype
C.A=W.bO.prototype
C.B=W.kh.prototype
C.D=new P.he(!1)
C.C=new P.hd(C.D)
C.E=new P.iC()
C.F=new P.k2()
C.j=new P.l3()
C.c=new A.cd(0,"ColorSourceType.None")
C.i=new A.cd(1,"ColorSourceType.Solid")
C.h=new A.cd(2,"ColorSourceType.Texture2D")
C.f=new A.cd(3,"ColorSourceType.TextureCube")
C.G=new P.bx(5e6)
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
C.w=H.h(I.ar([127,2047,65535,1114111]),[P.n])
C.m=H.h(I.ar([0,0,32776,33792,1,10240,0,0]),[P.n])
C.n=H.h(I.ar([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.h(I.ar([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.R=H.h(I.ar([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.p=H.h(I.ar([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.x=H.h(I.ar([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.S=H.h(I.ar([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.y=H.h(I.ar([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.Q=H.h(I.ar([]),[P.i])
C.T=new H.hr(0,{},C.Q,[P.i,P.i])
C.l=new P.jW(!1)
$.ax=0
$.bv=null
$.dR=null
$.du=!1
$.fR=null
$.fI=null
$.fZ=null
$.cB=null
$.cE=null
$.dD=null
$.bn=null
$.bU=null
$.bV=null
$.dv=!1
$.U=C.j
$.e5=null
$.e4=null
$.e3=null
$.e2=null
$.m=V.it()
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
I.$lazy(y,x,w)}})(["e1","$get$e1",function(){return H.fQ("_$dart_dartClosure")},"cY","$get$cY",function(){return H.fQ("_$dart_js")},"eM","$get$eM",function(){return H.aB(H.cu({
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.aB(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.aB(H.cu(null))},"eP","$get$eP",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eT","$get$eT",function(){return H.aB(H.cu(void 0))},"eU","$get$eU",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.aB(H.eS(null))},"eQ","$get$eQ",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aB(H.eS(void 0))},"eV","$get$eV",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dn","$get$dn",function(){return P.ki()},"bW","$get$bW",function(){return[]},"f6","$get$f6",function(){return P.k_()},"fc","$get$fc",function(){return H.ix(H.bm(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"fy","$get$fy",function(){return P.iX("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fE","$get$fE",function(){return P.m2()},"e0","$get$e0",function(){return{}},"f9","$get$f9",function(){return Z.ap(0)},"f7","$get$f7",function(){return Z.ap(511)},"aP","$get$aP",function(){return Z.ap(1)},"aO","$get$aO",function(){return Z.ap(2)},"aN","$get$aN",function(){return Z.ap(4)},"aQ","$get$aQ",function(){return Z.ap(8)},"aR","$get$aR",function(){return Z.ap(16)},"bM","$get$bM",function(){return Z.ap(32)},"bN","$get$bN",function(){return Z.ap(64)},"f8","$get$f8",function(){return Z.ap(96)},"bk","$get$bk",function(){return Z.ap(128)},"aM","$get$aM",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.t]},{func:1,ret:P.H},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.n,[P.k,E.aI]]},{func:1,ret:P.H,args:[F.af,P.q,P.q]},{func:1,ret:P.H,args:[F.ak]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.t]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.H,args:[W.ab]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:V.a3,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.n,[P.k,D.a2]]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.i,args:[P.n]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.n,[P.k,U.a8]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.n,[P.k,V.al]]},{func:1,ret:P.H,args:[,]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:P.ah,args:[W.L]},{func:1,ret:P.H,args:[P.X]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.ah,args:[P.q,P.q]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.k,D.a2]]},{func:1,ret:-1,args:[P.i,P.n]},{func:1,args:[,P.i]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.n,args:[[P.c,P.n],P.n]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:P.R,args:[P.n]},{func:1,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:P.H,args:[P.bg]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.n2(d||a)
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
Isolate.ar=a.ar
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
if(typeof dartMainRunner==="function")dartMainRunner(T.fW,[])
else T.fW([])})})()
//# sourceMappingURL=test.dart.js.map
