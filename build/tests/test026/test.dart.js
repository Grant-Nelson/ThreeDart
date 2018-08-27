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
var dart=[["","",,H,{"^":"",ob:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dD==null){H.mS()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cb("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cY()]
if(v!=null)return v
v=H.mX(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.y
if(y===Object.prototype)return C.y
if(typeof w=="function"){Object.defineProperty(w,$.$get$cY(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
u:function(a,b){return a===b},
gU:function(a){return H.bM(a)},
i:["ek",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i4:{"^":"r;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isai:1},
ej:{"^":"r;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isG:1},
cZ:{"^":"r;",
gU:function(a){return 0},
i:["el",function(a){return String(a)}]},
iO:{"^":"cZ;"},
cc:{"^":"cZ;"},
c6:{"^":"cZ;",
i:function(a){var z=a[$.$get$e2()]
if(z==null)return this.el(a)
return"JavaScript function for "+H.l(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscV:1},
b9:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.A("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.t(P.A("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b4(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hI:function(a){return this.E(a,"")},
hA:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b4(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bI:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i2())},
ay:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.t(P.A("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.D(0,1))a[z]=d},
aX:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cW(a,"[","]")},
ga0:function(a){return new J.ay(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bM(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ci(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b>=a.length||b<0)throw H.a(H.aF(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b>=a.length||b<0)throw H.a(H.aF(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
i3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ci(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.eg(new Array(a),b)},
eg:function(a,b){return J.bE(H.e(a,[b]))},
bE:function(a){H.bZ(a)
a.fixed$length=Array
return a}}},
oa:{"^":"b9;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c4:{"^":"r;",
ghH:function(a){return a===0?1/a<0:a<0},
ik:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cl:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e8:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghH(a))return"-"+z
return z},
b8:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.W(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.A("Unexpected toString result: "+z))
x=J.aG(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a*b},
bd:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aJ:function(a,b){var z
if(a>0)z=this.d4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fK:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.d4(a,b)},
d4:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$isq:1,
$isW:1},
ei:{"^":"c4;",$ism:1},
eh:{"^":"c4;"},
c5:{"^":"r;",
W:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b<0)throw H.a(H.aF(a,b))
if(b>=a.length)H.t(H.aF(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aF(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.N(b)
if(typeof b!=="string")throw H.a(P.ci(b,null,null))
return a+b},
aS:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a7:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.a7(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.cv(b,null,null))
if(b>c)throw H.a(P.cv(b,null,null))
if(c>a.length)throw H.a(P.cv(c,null,null))
return a.substring(b,c)},
aB:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.D)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ab:function(a,b){return this.hX(a,b," ")},
dO:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dN:function(a,b){return this.dO(a,b,0)},
ho:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.ha(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isex:1,
$isi:1}}],["","",,H,{"^":"",
cG:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i2:function(){return new P.jr("No element")},
a4:{"^":"k_;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ascx:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hN:{"^":"j;"},
eo:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.aG(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b4(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
is:{"^":"j;a,b,$ti",
ga0:function(a){return new H.it(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.au(this.a)},
J:function(a,b){return this.b.$1(J.cM(this.a,b))},
$asj:function(a,b){return[b]}},
it:{"^":"cX;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$ascX:function(a,b){return[b]}},
ku:{"^":"j;a,b,$ti",
ga0:function(a){return new H.kv(J.by(this.a),this.b,this.$ti)}},
kv:{"^":"cX;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
co:{"^":"b;$ti"},
cx:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ax(this,"cx",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.ax(this,"cx",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
k_:{"^":"cs+cx;"}}],["","",,H,{"^":"",
hC:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mN:function(a){return init.types[H.D(a)]},
h3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bM:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iY:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.G||!!J.K(a).$iscc){v=C.u(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aB(w,1)
r=H.dE(H.bZ(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iQ:function(){if(!!self.location)return self.location.href
return},
ez:function(a){var z,y,x,w,v
H.bZ(a)
z=J.au(a)
if(typeof z!=="number")return z.eg()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iZ:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aJ(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.ez(z)},
eA:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iZ(a)}return H.ez(a)},
j_:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eg()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
ct:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aJ(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ag:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iX:function(a){return a.b?H.ag(a).getUTCFullYear()+0:H.ag(a).getFullYear()+0},
iV:function(a){return a.b?H.ag(a).getUTCMonth()+1:H.ag(a).getMonth()+1},
iR:function(a){return a.b?H.ag(a).getUTCDate()+0:H.ag(a).getDate()+0},
iS:function(a){return a.b?H.ag(a).getUTCHours()+0:H.ag(a).getHours()+0},
iU:function(a){return a.b?H.ag(a).getUTCMinutes()+0:H.ag(a).getMinutes()+0},
iW:function(a){return a.b?H.ag(a).getUTCSeconds()+0:H.ag(a).getSeconds()+0},
iT:function(a){return a.b?H.ag(a).getUTCMilliseconds()+0:H.ag(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ae(a))},
d:function(a,b){if(a==null)J.au(a)
throw H.a(H.aF(a,b))},
aF:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.D(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cv(b,"index",null)},
mH:function(a,b,c){if(a>c)return new P.cu(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cu(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
ae:function(a){return new P.aH(!0,a,null,null)},
mw:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.ew()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hc})
z.name=""}else z.toString=H.hc
return z},
hc:function(){return J.ab(this.dartException)},
t:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b4(a))},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aJ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d_(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ev(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eV()
u=$.$get$eW()
t=$.$get$eX()
s=$.$get$eY()
r=$.$get$f1()
q=$.$get$f2()
p=$.$get$f_()
$.$get$eZ()
o=$.$get$f4()
n=$.$get$f3()
m=v.a9(y)
if(m!=null)return z.$1(H.d_(H.N(y),m))
else{m=u.a9(y)
if(m!=null){m.method="call"
return z.$1(H.d_(H.N(y),m))}else{m=t.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=r.a9(y)
if(m==null){m=q.a9(y)
if(m==null){m=p.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=o.a9(y)
if(m==null){m=n.a9(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ev(H.N(y),m))}}return z.$1(new H.jZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eH()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eH()
return a},
bw:function(a){var z
if(a==null)return new H.fz(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fz(a)},
mK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mU:function(a,b,c,d,e,f){H.f(a,"$iscV")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mU)
a.$identity=z
return z},
hy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.j4(z).r}else x=d
w=e?Object.create(new H.js().constructor.prototype):Object.create(new H.cP(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.D()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dZ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mN,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dS:H.cQ
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
hv:function(a,b,c,d){var z=H.cQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hv(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.cj("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.cj("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hw:function(a,b,c,d){var z,y
z=H.cQ
y=H.dS
switch(b?-1:a){case 0:throw H.a(H.je("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hx:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.cj("self")
$.bz=z}y=$.dR
if(y==null){y=H.cj("receiver")
$.dR=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){var z,y
z=J.bE(H.bZ(b))
H.D(c)
y=!!J.K(d).$isc?J.bE(d):d
return H.hy(a,z,c,y,!!e,f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
n6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
h8:function(a,b){throw H.a(H.aw(a,H.N(b).substring(3)))},
n8:function(a,b){var z=J.aG(b)
throw H.a(H.hu(a,z.v(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.h8(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.n8(a,b)},
bZ:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.aw(a,"List"))},
h5:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.h8(a,b)},
h_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
ce:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h_(J.K(a))
if(z==null)return!1
y=H.h2(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.ce(a,b))return a
z=H.ch(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.du=!1}},
dB:function(a,b){if(a!=null&&!H.dx(a,b))H.t(H.aw(a,H.ch(b)))
return a},
fR:function(a){var z
if(a instanceof H.n){z=H.h_(J.K(a))
if(z!=null)return H.ch(z)
return"Closure"}return H.bd(a)},
nf:function(a){throw H.a(new P.hF(H.N(a)))},
h0:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
pi:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.N(c)
H.D(d)
z=H.bx(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
ax:function(a,b,c){var z
H.N(b)
H.D(c)
z=H.bx(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
ch:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dE(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mm(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mm:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dE:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.ao("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.i(0)+">"
return v},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bt:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fU(H.bx(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.N(b)
H.bZ(c)
H.N(d)
if(a==null)return a
z=H.bt(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dE(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
pg:function(a,b,c){return a.apply(b,H.bx(J.K(b)["$as"+H.l(c)],H.b0(b)))},
h4:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.h4(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.h4(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ce(a,b)}y=J.K(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.aw(a,H.ch(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.h2(a,b,c,d)
if('func' in a)return c.builtin$cls==="cV"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bx(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ch(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fU(H.bx(r,z),b,u,d)},
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
return H.n5(m,b,l,d)},
n5:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
ph:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mX:function(a){var z,y,x,w,v,u
z=H.N($.h1.$1(a))
y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cH[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fT.$2(a,z))
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
return u.i}if(v==="+")return H.h7(a,x)
if(v==="*")throw H.a(P.cb(z))
if(init.leafTags[z]===true){u=H.cI(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h7(a,x)},
h7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dF(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cI:function(a){return J.dF(a,!1,null,!!a.$isF)},
n4:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cI(z)
else return J.dF(z,c,null,null)},
mS:function(){if(!0===$.dD)return
$.dD=!0
H.mT()},
mT:function(){var z,y,x,w,v,u,t,s
$.cE=Object.create(null)
$.cH=Object.create(null)
H.mO()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h9.$1(v)
if(u!=null){t=H.n4(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mO:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bs(C.J,H.bs(C.O,H.bs(C.t,H.bs(C.t,H.bs(C.N,H.bs(C.K,H.bs(C.L(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h1=new H.mP(v)
$.fT=new H.mQ(u)
$.h9=new H.mR(t)},
bs:function(a,b){return a(b)||b},
ha:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hb:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hB:{"^":"b;$ti",
i:function(a){return P.d1(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hC()},
$isJ:1},
hD:{"^":"hB;a,b,c,$ti",
gl:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bp(0,b))return
return this.cW(b)},
cW:function(a){return this.b[H.N(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cW(v),z))}}},
j3:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bE(z)
y=z[0]
x=z[1]
return new H.j3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jL:{"^":"b;a,b,c,d,e,f",
a9:function(a){var z,y,x
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
aD:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f0:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iL:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ev:function(a,b){return new H.iL(a,b==null?null:b.method)}}},
i7:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i7(a,y,z?null:b.receiver)}}},
jZ:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nh:{"^":"n:17;a",
$1:function(a){if(!!J.K(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fz:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
ged:function(){return this},
$iscV:1,
ged:function(){return this}},
eN:{"^":"n;"},
js:{"^":"eN;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cP:{"^":"eN;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bM(this.a)
else y=typeof z!=="object"?J.b2(z):H.bM(z)
return(y^H.bM(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cQ:function(a){return a.a},
dS:function(a){return a.c},
cj:function(a){var z,y,x,w,v
z=new H.cP("self","target","receiver","name")
y=J.bE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jM:{"^":"a5;a",
i:function(a){return this.a},
p:{
aw:function(a,b){return new H.jM("TypeError: "+H.l(P.cn(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
ht:{"^":"a5;a",
i:function(a){return this.a},
p:{
hu:function(a,b){return new H.ht("CastError: "+H.l(P.cn(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
jd:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
je:function(a){return new H.jd(a)}}},
aX:{"^":"ip;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gan:function(a){return new H.ic(this,[H.y(this,0)])},
bp:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cT(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cT(y,b)}else return this.hE(b)},
hE:function(a){var z=this.d
if(z==null)return!1
return this.co(this.bR(z,this.cn(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.hF(b)},
hF:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bR(z,this.cn(a))
x=this.co(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bS()
this.b=z}this.cM(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bS()
this.c=y}this.cM(y,b,c)}else this.hG(b,c)},
hG:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bS()
this.d=z}y=this.cn(a)
x=this.bR(z,y)
if(x==null)this.bZ(z,y,[this.bT(a,b)])
else{w=this.co(x,a)
if(w>=0)x[w].b=b
else x.push(this.bT(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b4(this))
z=z.c}},
cM:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bg(a,b)
if(z==null)this.bZ(a,b,this.bT(b,c))
else z.b=c},
eU:function(){this.r=this.r+1&67108863},
bT:function(a,b){var z,y
z=new H.ib(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eU()
return z},
cn:function(a){return J.b2(a)&0x3ffffff},
co:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.d1(this)},
bg:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
cT:function(a,b){return this.bg(a,b)!=null},
bS:function(){var z=Object.create(null)
this.bZ(z,"<non-identifier-key>",z)
this.eM(z,"<non-identifier-key>")
return z},
$isem:1},
ib:{"^":"b;a,b,0c,0d"},
ic:{"^":"hN;a,$ti",
gl:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.id(z,z.r,this.$ti)
y.c=z.e
return y}},
id:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mP:{"^":"n:17;a",
$1:function(a){return this.a(a)}},
mQ:{"^":"n:39;a",
$2:function(a,b){return this.a(a,b)}},
mR:{"^":"n:45;a",
$1:function(a){return this.a(H.N(a))}},
i5:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isex:1,
$isj5:1,
p:{
i6:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mJ:function(a){return J.eg(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bq:function(a){return a},
iH:function(a){return new Int8Array(a)},
aE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aF(b,a))},
mg:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mH(a,b,c))
return b},
eu:{"^":"r;",$iseu:1,"%":"ArrayBuffer"},
d6:{"^":"r;",$isd6:1,$isjN:1,"%":"DataView;ArrayBufferView;d5|ft|fu|iI|fv|fw|aZ"},
d5:{"^":"d6;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dA},
iI:{"^":"fu;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mI(c)
H.aE(b,a,a.length)
a[b]=c},
$asco:function(){return[P.q]},
$asx:function(){return[P.q]},
$isj:1,
$asj:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"fw;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aE(b,a,a.length)
a[b]=c},
$asco:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
om:{"^":"aZ;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int16Array"},
on:{"^":"aZ;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oo:{"^":"aZ;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int8Array"},
op:{"^":"aZ;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oq:{"^":"aZ;",
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
or:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d7:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aE(b,a,a.length)
return a[b]},
bI:function(a,b,c){return new Uint8Array(a.subarray(b,H.mg(b,c,a.length)))},
$isd7:1,
$isQ:1,
"%":";Uint8Array"},
ft:{"^":"d5+x;"},
fu:{"^":"ft+co;"},
fv:{"^":"d5+x;"},
fw:{"^":"fv+co;"}}],["","",,P,{"^":"",
kx:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mt()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.kz(z),1)).observe(y,{childList:true})
return new P.ky(z,y,x)}else if(self.setImmediate!=null)return P.mu()
return P.mv()},
p5:[function(a){self.scheduleImmediate(H.bu(new P.kA(H.h(a,{func:1,ret:-1})),0))},"$1","mt",4,0,12],
p6:[function(a){self.setImmediate(H.bu(new P.kB(H.h(a,{func:1,ret:-1})),0))},"$1","mu",4,0,12],
p7:[function(a){P.dh(C.r,H.h(a,{func:1,ret:-1}))},"$1","mv",4,0,12],
dh:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a4(a.a,1000)
return P.lA(z<0?0:z,b)},
eQ:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bk]})
z=C.d.a4(a.a,1000)
return P.lB(z<0?0:z,b)},
mp:function(a,b){if(H.ce(a,{func:1,args:[P.b,P.av]}))return b.i5(a,null,P.b,P.av)
if(H.ce(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ci(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mo:function(){var z,y
for(;z=$.br,z!=null;){$.bX=null
y=z.b
$.br=y
if(y==null)$.bW=null
z.a.$0()}},
pf:[function(){$.dv=!0
try{P.mo()}finally{$.bX=null
$.dv=!1
if($.br!=null)$.$get$dp().$1(P.fV())}},"$0","fV",0,0,3],
fQ:function(a){var z=new P.fm(H.h(a,{func:1,ret:-1}))
if($.br==null){$.bW=z
$.br=z
if(!$.dv)$.$get$dp().$1(P.fV())}else{$.bW.b=z
$.bW=z}},
ms:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.br
if(z==null){P.fQ(a)
$.bX=$.bW
return}y=new P.fm(a)
x=$.bX
if(x==null){y.b=z
$.bX=y
$.br=y}else{y.b=x.b
x.b=y
$.bX=y
if(y.b==null)$.bW=y}},
n9:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cD(null,null,C.j,a)
return}y.toString
P.cD(null,null,y,H.h(y.c5(a),z))},
jH:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.h(y.c5(b),z))},
jI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eQ(a,b)}x=y.de(b,P.bk)
$.T.toString
return P.eQ(a,H.h(x,z))},
cC:function(a,b,c,d,e){var z={}
z.a=d
P.ms(new P.mq(z,e))},
fM:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fN:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mr:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cD:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c5(d):c.hk(d,-1)
P.fQ(d)},
kz:{"^":"n:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ky:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kA:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kB:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fC:{"^":"b;a,0b,c",
ez:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.lD(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eA:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lC(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbk:1,
p:{
lA:function(a,b){var z=new P.fC(!0,0)
z.ez(a,b)
return z},
lB:function(a,b){var z=new P.fC(!1,0)
z.eA(a,b)
return z}}},
lD:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lC:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eo(w,x)}z.c=y
this.d.$1(z)}},
bp:{"^":"b;0a,b,c,d,e,$ti",
hO:function(a){if(this.c!==6)return!0
return this.b.b.cA(H.h(this.d,{func:1,ret:P.ai,args:[P.b]}),a.a,P.ai,P.b)},
hD:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.ce(z,{func:1,args:[P.b,P.av]}))return H.dB(w.ic(z,a.a,a.b,null,y,P.av),x)
else return H.dB(w.cA(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;d5:a<,b,0fA:c<,$ti",
e7:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mp(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cN(new P.bp(x,w,a,b,[z,c]))
return x},
ij:function(a,b){return this.e7(a,null,b)},
cN:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbp")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cN(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cD(null,null,z,H.h(new P.kQ(this,a),{func:1,ret:-1}))}},
d0:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbp")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.d0(a)
return}this.a=y
this.c=u.c}z.a=this.bk(a)
y=this.b
y.toString
P.cD(null,null,y,H.h(new P.kV(z,this),{func:1,ret:-1}))}},
bV:function(){var z=H.f(this.c,"$isbp")
this.c=null
return this.bk(z)},
bk:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cQ:function(a){var z,y,x,w
z=H.y(this,0)
H.dB(a,{futureOr:1,type:z})
y=this.$ti
x=H.bt(a,"$isbC",y,"$asbC")
if(x){z=H.bt(a,"$isaT",y,null)
if(z)P.fp(a,this)
else P.kR(a,this)}else{w=this.bV()
H.z(a,z)
this.a=4
this.c=a
P.bR(this,w)}},
bN:[function(a,b){var z
H.f(b,"$isav")
z=this.bV()
this.a=8
this.c=new P.al(a,b)
P.bR(this,z)},function(a){return this.bN(a,null)},"iu","$2","$1","geI",4,2,29],
$isbC:1,
p:{
kR:function(a,b){var z,y,x
b.a=1
try{a.e7(new P.kS(b),new P.kT(b),null)}catch(x){z=H.at(x)
y=H.bw(x)
P.n9(new P.kU(b,z,y))}},
fp:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.bV()
b.a=a.a
b.c=a.c
P.bR(b,y)}else{y=H.f(b.c,"$isbp")
b.a=2
b.c=a
a.d0(y)}},
bR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.bR(z.a,b)}y=z.a
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
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kY(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kX(x,b,r).$0()}else if((y&2)!==0)new P.kW(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.K(y).$isbC){if(y.a>=4){n=H.f(t.c,"$isbp")
t.c=null
b=t.bk(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fp(y,t)
return}}m=b.b
n=H.f(m.c,"$isbp")
m.c=null
b=m.bk(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kQ:{"^":"n:0;a,b",
$0:function(){P.bR(this.a,this.b)}},
kV:{"^":"n:0;a,b",
$0:function(){P.bR(this.b,this.a.a)}},
kS:{"^":"n:26;a",
$1:function(a){var z=this.a
z.a=0
z.cQ(a)}},
kT:{"^":"n:51;a",
$2:function(a,b){this.a.bN(a,H.f(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kU:{"^":"n:0;a,b,c",
$0:function(){this.a.bN(this.b,this.c)}},
kY:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e4(H.h(w.d,{func:1}),null)}catch(v){y=H.at(v)
x=H.bw(v)
if(this.d){w=H.f(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.K(z).$isbC){if(z instanceof P.aT&&z.gd5()>=4){if(z.gd5()===8){w=this.b
w.b=H.f(z.gfA(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ij(new P.kZ(t),null)
w.a=!1}}},
kZ:{"^":"n:34;a",
$1:function(a){return this.a}},
kX:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cA(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.at(t)
y=H.bw(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kW:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isal")
w=this.c
if(w.hO(z)&&w.e!=null){v=this.b
v.b=w.hD(z)
v.a=!1}}catch(u){y=H.at(u)
x=H.bw(u)
w=H.f(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fm:{"^":"b;a,0b"},
dd:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.m])
z.a=0
this.hL(new P.jv(z,this),!0,new P.jw(z,y),y.geI())
return y}},
jv:{"^":"n;a,b",
$1:function(a){H.z(a,H.ax(this.b,"dd",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ax(this.b,"dd",0)]}}},
jw:{"^":"n:0;a,b",
$0:function(){this.b.cQ(this.a.a)}},
eK:{"^":"b;$ti"},
ju:{"^":"b;"},
bk:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
m4:{"^":"b;",$isp4:1},
mq:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ew()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
li:{"^":"m4;",
ie:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fM(null,null,this,a,-1)}catch(x){z=H.at(x)
y=H.bw(x)
P.cC(null,null,this,z,H.f(y,"$isav"))}},
ig:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fN(null,null,this,a,b,-1,c)}catch(x){z=H.at(x)
y=H.bw(x)
P.cC(null,null,this,z,H.f(y,"$isav"))}},
hk:function(a,b){return new P.lk(this,H.h(a,{func:1,ret:b}),b)},
c5:function(a){return new P.lj(this,H.h(a,{func:1,ret:-1}))},
de:function(a,b){return new P.ll(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e4:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fM(null,null,this,a,b)},
cA:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fN(null,null,this,a,b,c,d)},
ic:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mr(null,null,this,a,b,c,d,e,f)},
i5:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lk:{"^":"n;a,b,c",
$0:function(){return this.a.e4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lj:{"^":"n:3;a,b",
$0:function(){return this.a.ie(this.b)}},
ll:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ig(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ie:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
ig:function(a,b,c){H.bZ(a)
return H.w(H.mK(a,new H.aX(0,0,[b,c])),"$isem",[b,c],"$asem")},
en:function(a,b){return new H.aX(0,0,[a,b])},
ij:function(a,b,c,d){return new P.l4(0,0,[d])},
i1:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bY()
C.a.h(y,a)
try{P.mn(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eL(b,H.h5(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cW:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.ao(b)
y=$.$get$bY()
C.a.h(y,a)
try{x=z
x.a=P.eL(x.gaG(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaG()+c
y=z.gaG()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bY(),z<y.length;++z)if(a===y[z])return!0
return!1},
mn:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.I())return
w=H.l(z.gS(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.I()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gS(z);++x
if(!z.I()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gS(z);++x
for(;z.I();t=s,s=r){r=z.gS(z);++x
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
ih:function(a,b,c){var z=P.ie(null,null,null,b,c)
a.K(0,new P.ii(z,b,c))
return z},
d1:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.ao("")
try{C.a.h($.$get$bY(),a)
x=y
x.a=x.gaG()+"{"
z.a=!0
J.dL(a,new P.iq(z,y))
z=y
z.a=z.gaG()+"}"}finally{z=$.$get$bY()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaG()
return z.charCodeAt(0)==0?z:z},
l4:{"^":"l_;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){return P.fs(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.cO(y,b)}else return this.eB(0,b)},
eB:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.cR(b)
x=z[y]
if(x==null)z[y]=[this.bM(b)]
else{if(this.cX(x,b)>=0)return!1
x.push(this.bM(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d1(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d1(this.c,b)
else return this.fp(0,b)},
fp:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eQ(z,b)
x=this.cX(y,b)
if(x<0)return!1
this.d7(y.splice(x,1)[0])
return!0},
cO:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdq")!=null)return!1
a[b]=this.bM(b)
return!0},
d1:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdq")
if(z==null)return!1
this.d7(z)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&67108863},
bM:function(a){var z,y
z=new P.dq(H.z(a,H.y(this,0)))
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
cR:function(a){return J.b2(a)&0x3ffffff},
eQ:function(a,b){return a[this.cR(b)]},
cX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"b;a,0b,0c"},
l5:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fs:function(a,b,c){var z=new P.l5(a,b,[c])
z.c=a.e
return z}}},
l_:{"^":"jf;"},
ii:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cs:{"^":"l6;",$isj:1,$isc:1},
x:{"^":"b;$ti",
ga0:function(a){return new H.eo(a,this.gl(a),0,[H.b_(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
im:function(a,b){var z,y,x
z=H.e([],[H.b_(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
il:function(a){return this.im(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.b_(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cW(a,"[","]")}},
ip:{"^":"aj;"},
iq:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
aj:{"^":"b;$ti",
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.b_(this,a,"aj",0),H.b_(this,a,"aj",1)]})
for(z=J.by(this.gan(a));z.I();){y=z.gS(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.au(this.gan(a))},
i:function(a){return P.d1(a)},
$isJ:1},
lI:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ir:{"^":"b;$ti",
j:function(a,b){return J.dK(this.a,b)},
m:function(a,b,c){J.cK(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
K:function(a,b){J.dL(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.au(this.a)},
i:function(a){return J.ab(this.a)},
$isJ:1},
fb:{"^":"lJ;a,$ti"},
jh:{"^":"b;$ti",
i:function(a){return P.cW(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dN("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=P.fs(this,this.r,H.y(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
jf:{"^":"jh;"},
l6:{"^":"b+x;"},
lJ:{"^":"ir+lI;$ti"}}],["","",,P,{"^":"",hq:{"^":"c0;a",
hR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$fn()
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
if(q<=d){p=H.cG(C.b.H(b,s))
o=H.cG(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ao("")
w.a+=C.b.v(b,x,y)
w.a+=H.ct(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dQ(b,u,d,v,t,k)
else{j=C.d.bd(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aS(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dQ(b,u,d,v,t,i)
else{j=C.d.bd(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aS(b,d,d,j===2?"==":"=")}return b},
$asc0:function(){return[[P.c,P.m],P.i]},
p:{
dQ:function(a,b,c,d,e,f){if(C.d.bd(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},hr:{"^":"bA;a",
$asbA:function(){return[[P.c,P.m],P.i]}},c0:{"^":"b;$ti"},bA:{"^":"ju;$ti"},hP:{"^":"c0;",
$asc0:function(){return[P.i,[P.c,P.m]]}},ka:{"^":"hP;a",
ghx:function(){return C.E}},kh:{"^":"bA;",
aY:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m3(0,0,x)
if(w.eO(a,b,z)!==z)w.d9(J.hi(a,z-1),0)
return C.V.bI(x,0,w.b)},
cb:function(a){return this.aY(a,0,null)},
$asbA:function(){return[P.i,[P.c,P.m]]}},m3:{"^":"b;a,b,c",
d9:function(a,b){var z,y,x,w,v
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
eO:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d9(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kb:{"^":"bA;a",
aY:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.kc(!1,a,b,c)
if(z!=null)return z
y=J.au(a)
P.aL(b,c,y,null,null,null)
x=new P.ao("")
w=new P.m0(!1,x,!0,0,0,0)
w.aY(a,b,y)
w.hz(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cb:function(a){return this.aY(a,0,null)},
$asbA:function(){return[[P.c,P.m],P.i]},
p:{
kc:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kd(!1,b,c,d)
return},
kd:function(a,b,c,d){var z,y,x
z=$.$get$fh()
if(z==null)return
y=0===c
if(y&&!0)return P.dm(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.dm(z,b)
return P.dm(z,b.subarray(c,d))},
dm:function(a,b){if(P.kf(b))return
return P.kg(a,b)},
kg:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.at(y)}return},
kf:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ke:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.at(y)}return}}},m0:{"^":"b;a,b,c,d,e,f",
hz:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m2(c)
v=new P.m1(this,b,c,a)
$label0$0:for(u=J.aG(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bF()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.d.b8(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.v,q)
if(z<=C.v[q]){q=P.X("Overlong encoding of 0x"+C.d.b8(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.d.b8(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.ct(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cF()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.d.b8(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.d.b8(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m2:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aG(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bF()
if((w&127)!==w)return x-b}return z-b}},m1:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ca(this.d,a,b)}}}],["","",,P,{"^":"",
cg:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iY(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hR:function(a){var z=J.K(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
ik:function(a,b,c,d){var z,y
H.z(b,d)
z=J.i3(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
il:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga0(a);x.I();)C.a.h(y,H.z(x.gS(x),c))
if(b)return y
return H.w(J.bE(y),"$isc",z,"$asc")},
ca:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.eA(z?C.a.bI(a,b,c):a)}if(!!J.K(a).$isd7)return H.j_(a,b,P.aL(b,c,a.length,null,null,null))
return P.jx(a,b,c)},
jx:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a0(b,0,J.au(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.au(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.I())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.I())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gS(y))}return H.eA(w)},
j6:function(a,b,c){return new H.i5(a,H.i6(a,!1,!0,!1))},
fd:function(){var z=H.iQ()
if(z!=null)return P.k4(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hR(a)},
v:function(a){return new P.fo(a)},
im:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dH:function(a){H.n7(a)},
k4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fc(b>0||c<c?C.b.v(a,b,c):a,5,null).ge9()
else if(y===32)return P.fc(C.b.v(a,z,c),0,null).ge9()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fO(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cE()
if(v>=b)if(P.fO(a,b,v,20,w)===20)w[7]=v
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a7(a,"..",s)))n=r>s+2&&C.b.a7(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a7(a,"file",b)){if(u<=b){if(!C.b.a7(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aS(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a7(a,"http",b)){if(x&&t+3===s&&C.b.a7(a,"80",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
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
else if(v===z&&C.b.a7(a,"https",b)){if(x&&t+4===s&&C.b.a7(a,"443",t+1))if(b===0&&!0){a=C.b.aS(a,t,s,"")
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
q-=b}return new P.ln(a,v,u,t,s,r,q,o)}return P.lK(a,b,c,v,u,t,s,r,q,o)},
ff:function(a,b){var z=P.i
return C.a.hA(H.e(a.split("&"),[z]),P.en(z,z),new P.k7(b),[P.J,P.i,P.i])},
k2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k3(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.W(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cg(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cF()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cg(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cF()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fe:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k5(a)
y=new P.k6(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.W(a,w)
if(s===58){if(w===b){++w
if(C.b.W(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k2(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aJ(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mh:function(){var z,y,x,w,v
z=P.im(22,new P.mj(),!0,P.Q)
y=new P.mi(z)
x=new P.mk()
w=new P.ml()
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
fO:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fP()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ai:{"^":"b;"},
"+bool":0,
aA:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.d.aJ(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hG(H.iX(this))
y=P.c2(H.iV(this))
x=P.c2(H.iR(this))
w=P.c2(H.iS(this))
v=P.c2(H.iU(this))
u=P.c2(H.iW(this))
t=P.hH(H.iT(this))
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
c2:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"W;"},
"+double":0,
b6:{"^":"b;a",
k:function(a,b){return new P.b6(C.d.ad(this.a*b))},
O:function(a,b){return C.d.O(this.a,H.f(b,"$isb6").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hM()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.d.a4(y,6e7)%60)
w=z.$1(C.d.a4(y,1e6)%60)
v=new P.hL().$1(y%1e6)
return""+C.d.a4(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e9:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hL:{"^":"n:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hM:{"^":"n:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
ew:{"^":"a5;",
i:function(a){return"Throw of null."}},
aH:{"^":"a5;a,b,c,d",
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbP()+y+x
if(!this.a)return w
v=this.gbO()
u=P.cn(this.b)
return w+v+": "+H.l(u)},
p:{
c_:function(a){return new P.aH(!1,null,null,a)},
ci:function(a,b,c){return new P.aH(!0,a,b,c)},
dN:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
cu:{"^":"aH;e,f,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cv:function(a,b,c){return new P.cu(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cu(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
i_:{"^":"aH;e,l:f>,a,b,c,d",
gbP:function(){return"RangeError"},
gbO:function(){if(J.he(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.au(b))
return new P.i_(b,z,!0,a,c,"Index out of range")}}},
k0:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.k0(a)}}},
jY:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cb:function(a){return new P.jY(a)}}},
jr:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hA:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cn(z))+"."},
p:{
b4:function(a){return new P.hA(a)}}},
iM:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eH:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hF:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fo:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hX:{"^":"b;a,b,c",
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
for(s=x;s<w.length;++s){r=C.b.W(w,s)
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
X:function(a,b,c){return new P.hX(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga0(this)
for(y=0;z.I();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dN("index"))
if(b<0)H.t(P.a0(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.I();){x=z.gS(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.i1(this,"(",")")}},
cX:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
J:{"^":"b;$ti"},
G:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bM(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"b;"},
i:{"^":"b;",$isex:1},
"+String":0,
ao:{"^":"b;aG:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoP:1,
p:{
eL:function(a,b,c){var z=J.by(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gS(z))
while(z.I())}else{a+=H.l(z.gS(z))
for(;z.I();)a=a+c+H.l(z.gS(z))}return a}}},
k7:{"^":"n:48;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.N(b)
y=J.aG(b).dN(b,"=")
if(y===-1){if(b!=="")J.cK(a,P.dt(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aB(b,y+1)
z=this.a
J.cK(a,P.dt(x,0,x.length,z,!0),P.dt(w,0,w.length,z,!0))}return a}},
k3:{"^":"n:38;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
k5:{"^":"n:28;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k6:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cg(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cz:{"^":"b;bH:a<,b,c,d,dY:e>,f,r,0x,0y,0z,0Q,0ch",
gea:function(){return this.b},
gcm:function(a){var z=this.c
if(z==null)return""
if(C.b.a6(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbD:function(a){var z=this.d
if(z==null)return P.fE(this.a)
return z},
gct:function(a){var z=this.f
return z==null?"":z},
gdI:function(){var z=this.r
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
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
return new P.cz(i,j,c,f,d,g,this.r)},
e2:function(a,b){return this.cz(a,null,null,null,null,null,null,b,null,null)},
gcu:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.fb(P.ff(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdJ:function(){return this.c!=null},
gdM:function(){return this.f!=null},
gdK:function(){return this.r!=null},
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
u:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdl){y=this.a
x=b.gbH()
if(y==null?x==null:y===x)if(this.c!=null===b.gdJ()){y=this.b
x=b.gea()
if(y==null?x==null:y===x){y=this.gcm(this)
x=z.gcm(b)
if(y==null?x==null:y===x){y=this.gbD(this)
x=z.gbD(b)
if(y==null?x==null:y===x)if(this.e===z.gdY(b)){y=this.f
x=y==null
if(!x===b.gdM()){if(x)y=""
if(y===z.gct(b)){z=this.r
y=z==null
if(!y===b.gdK()){if(y)z=""
z=z===b.gdI()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdl:1,
p:{
cA:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fJ().b
if(typeof b!=="string")H.t(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ax(c,"c0",0))
y=c.ghx().cb(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ct(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lK:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lV(a,b,d)
else{if(d===b)P.bT(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lW(a,z,e-1):""
x=P.lP(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lS(P.cg(C.b.v(a,w,g),new P.lL(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lQ(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.ds(a,h+1,i,null):null
return new P.cz(j,y,x,v,u,t,i<c?P.lO(a,i+1,c):null)},
fE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bT:function(a,b,c){throw H.a(P.X(c,a,b))},
lS:function(a,b){if(a!=null&&a===P.fE(b))return
return a},
lP:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.T()
z=c-1
if(C.b.W(a,z)!==93)P.bT(a,b,"Missing end `]` to match `[` in host")
P.fe(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.W(a,y)===58){P.fe(a,b,c)
return"["+a+"]"}return P.lY(a,b,c)},
lY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.W(a,z)
if(v===37){u=P.fL(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ao("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.w,t)
t=(C.w[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ao("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bT(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.W(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ao("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fF(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lV:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fH(C.b.H(a,b)))P.bT(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bT(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lM(y?a.toLowerCase():a)},
lM:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lW:function(a,b,c){return P.bU(a,b,c,C.R)},
lQ:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bU(a,b,c,C.x):C.I.j5(d,new P.lR(),P.i).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a6(w,"/"))w="/"+w
return P.lX(w,e,f)},
lX:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a6(a,"/"))return P.lZ(a,!z||c)
return P.m_(a)},
ds:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c_("Both query and queryParameters specified"))
return P.bU(a,b,c,C.n)}if(d==null)return
y=new P.ao("")
z.a=""
d.K(0,new P.lT(new P.lU(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lO:function(a,b,c){return P.bU(a,b,c,C.n)},
fL:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.W(a,b+1)
x=C.b.W(a,z)
w=H.cG(y)
v=H.cG(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aJ(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.ct(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fF:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fK(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.ca(y,0,null)},
bU:function(a,b,c,d){var z=P.fK(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.W(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fL(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bT(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.W(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fF(v)}}if(w==null)w=new P.ao("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fI:function(a){if(C.b.a6(a,"."))return!0
return C.b.dN(a,"/.")!==-1},
m_:function(a){var z,y,x,w,v,u,t
if(!P.fI(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
lZ:function(a,b){var z,y,x,w,v,u
if(!P.fI(a))return!b?P.fG(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fG(z[0]))}return C.a.E(z,"/")},
fG:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fH(J.hf(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aB(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lN:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c_("Invalid URL encoding"))}}return z},
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
else u=new H.a4(y.v(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c_("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c_("Truncated URI"))
C.a.h(u,P.lN(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.kb(!1).cb(u)},
fH:function(a){var z=a|32
return 97<=z&&z<=122}}},
lL:{"^":"n:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.X("Invalid port",this.a,z+1))}},
lR:{"^":"n:46;",
$1:function(a){return P.cA(C.T,a,C.k,!1)}},
lU:{"^":"n:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cA(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cA(C.p,b,C.k,!0))}}},
lT:{"^":"n:50;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.by(H.h5(b,"$isj")),y=this.a;z.I();)y.$2(a,H.N(z.gS(z)))}},
k1:{"^":"b;a,b,c",
ge9:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dO(y,"?",z)
w=y.length
if(x>=0){v=P.bU(y,x+1,w,C.n)
w=x}else v=null
z=new P.kG(this,"data",null,null,null,P.bU(y,z,w,C.x),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fc:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.a7(a,"base64",t+1))throw H.a(P.X("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.B.hR(0,a,s,y)
else{r=P.fK(a,s,y,C.n,!0)
if(r!=null)a=C.b.aS(a,s,y,r)}return new P.k1(a,z,c)}}},
mj:{"^":"n:44;",
$1:function(a){return new Uint8Array(96)}},
mi:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hj(z,0,96,b)
return z}},
mk:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
ml:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
ln:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdJ:function(){return this.c>0},
gdL:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdM:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
gdK:function(){return this.r<this.a.length},
gcY:function(){return this.b===4&&C.b.a6(this.a,"http")},
gcZ:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbH:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcY()){this.x="http"
z="http"}else if(this.gcZ()){this.x="https"
z="https"}else if(z===4&&C.b.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
gea:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcm:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbD:function(a){var z
if(this.gdL()){z=this.d
if(typeof z!=="number")return z.D()
return P.cg(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcY())return 80
if(this.gcZ())return 443
return 0},
gdY:function(a){return C.b.v(this.a,this.e,this.f)},
gct:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.v(this.a,z+1,y):""},
gdI:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aB(y,z+1):""},
gcu:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.U
z=P.i
return new P.fb(P.ff(this.gct(this),C.k),[z,z])},
cz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbH()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdL()?this.gbD(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aB(y,x+1)
return new P.cz(i,j,c,f,d,g,b)},
e2:function(a,b){return this.cz(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdl)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdl:1},
kG:{"^":"cz;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cS:function(a,b){var z=document.createElement("canvas")
return z},
hO:function(a){H.f(a,"$isa7")
return"wheel"},
i0:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isef")
try{J.hl(z,a)}catch(x){H.at(x)}return z},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fr:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fS:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.de(a,b)},
a8:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ni:{"^":"db;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
nj:{"^":"r;0l:length=","%":"AccessibleNodeList"},
nk:{"^":"a8;0a1:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nl:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cO:{"^":"r;",$iscO:1,"%":";Blob"},
nr:{"^":"a8;0a1:type}","%":"HTMLButtonElement"},
cR:{"^":"a8;",
bG:function(a,b,c){if(c!=null)return a.getContext(b,P.mx(c,null))
return a.getContext(b)},
ee:function(a,b){return this.bG(a,b,null)},
$iscR:1,
"%":"HTMLCanvasElement"},
dX:{"^":"r;",$isdX:1,"%":"CanvasRenderingContext2D"},
nt:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nv:{"^":"cl;0l:length=","%":"CSSPerspective"},
nw:{"^":"cU;0q:x=,0t:y=","%":"CSSPositionValue"},
nx:{"^":"cl;0q:x=,0t:y=","%":"CSSRotation"},
b5:{"^":"r;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ny:{"^":"cl;0q:x=,0t:y=","%":"CSSScale"},
nz:{"^":"kF;0l:length=",
ef:function(a,b){var z=a.getPropertyValue(this.eF(a,b))
return z==null?"":z},
eF:function(a,b){var z,y
z=$.$get$e1()
y=z[b]
if(typeof y==="string")return y
y=this.fL(a,b)
z[b]=y
return y},
fL:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hI()+b
if(z in a)return z
return b},
gc6:function(a){return a.bottom},
gam:function(a){return a.height},
gaQ:function(a){return a.left},
gb6:function(a){return a.right},
gba:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hE:{"^":"b;",
gaQ:function(a){return this.ef(a,"left")}},
cU:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cl:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nA:{"^":"cU;0l:length=","%":"CSSTransformValue"},
nB:{"^":"cl;0q:x=,0t:y=","%":"CSSTranslation"},
nC:{"^":"cU;0l:length=","%":"CSSUnparsedValue"},
nD:{"^":"r;0l:length=","%":"DataTransferItemList"},
nE:{"^":"r;0q:x=,0t:y=","%":"DeviceAcceleration"},
nF:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
nG:{"^":"hJ;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hJ:{"^":"r;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nH:{"^":"kI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa9",[P.W],"$asa9")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a9,P.W]]},
$asx:function(){return[[P.a9,P.W]]},
$isj:1,
$asj:function(){return[[P.a9,P.W]]},
$isc:1,
$asc:function(){return[[P.a9,P.W]]},
$asC:function(){return[[P.a9,P.W]]},
"%":"ClientRectList|DOMRectList"},
hK:{"^":"r;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaq(a))+" x "+H.l(this.gam(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaQ(b)&&a.top===z.gba(b)&&this.gaq(a)===z.gaq(b)&&this.gam(a)===z.gam(b)},
gU:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gc6:function(a){return a.bottom},
gam:function(a){return a.height},
gaQ:function(a){return a.left},
gb6:function(a){return a.right},
gba:function(a){return a.top},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
nI:{"^":"kK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
nJ:{"^":"r;0l:length=","%":"DOMTokenList"},
kE:{"^":"cs;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa2")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa2")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.il(this)
return new J.ay(z,z.length,0,[H.y(z,0)])},
ay:function(a,b,c,d){throw H.a(P.cb(null))},
$asx:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
a2:{"^":"L;",
gca:function(a){return new W.kE(a,a.children)},
gbn:function(a){return P.j2(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa2:1,
"%":";Element"},
nK:{"^":"a8;0a1:type}","%":"HTMLEmbedElement"},
ac:{"^":"r;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"r;",
dc:["ej",function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(c!=null)this.eC(a,b,c,!1)}],
eC:function(a,b,c,d){return a.addEventListener(b,H.bu(H.h(c,{func:1,args:[W.ac]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fx|fy|fA|fB"},
aW:{"^":"cO;",$isaW:1,"%":"File"},
eb:{"^":"kP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaW")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aW]},
$asx:function(){return[W.aW]},
$isj:1,
$asj:function(){return[W.aW]},
$isc:1,
$asc:function(){return[W.aW]},
$iseb:1,
$asC:function(){return[W.aW]},
"%":"FileList"},
o2:{"^":"a7;0l:length=","%":"FileWriter"},
o5:{"^":"a8;0l:length=","%":"HTMLFormElement"},
b8:{"^":"r;",$isb8:1,"%":"Gamepad"},
o6:{"^":"db;0q:x=,0t:y=","%":"Gyroscope"},
o7:{"^":"r;0l:length=","%":"History"},
o8:{"^":"l1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c3:{"^":"r;0dh:data=",$isc3:1,"%":"ImageData"},
ee:{"^":"a8;",$isee:1,"%":"HTMLImageElement"},
ef:{"^":"a8;0a1:type}",$isef:1,"%":"HTMLInputElement"},
bF:{"^":"di;",$isbF:1,"%":"KeyboardEvent"},
od:{"^":"a8;0a1:type}","%":"HTMLLinkElement"},
oe:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
of:{"^":"db;0q:x=,0t:y=","%":"Magnetometer"},
oh:{"^":"r;0l:length=","%":"MediaList"},
oi:{"^":"a7;",
dc:function(a,b,c,d){H.h(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.ej(a,b,c,!1)},
"%":"MessagePort"},
oj:{"^":"l7;",
j:function(a,b){return P.aU(a.get(H.N(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.iE(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iE:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ok:{"^":"l8;",
j:function(a,b){return P.aU(a.get(H.N(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.iF(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iF:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"r;",$isbb:1,"%":"MimeType"},
ol:{"^":"la;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isj:1,
$asj:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"MimeTypeArray"},
aC:{"^":"di;",$isaC:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kD:{"^":"cs;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.ec(z,z.length,-1,[H.b_(C.W,z,"C",0)])},
ay:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.L]},
$asj:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"a7;",
i9:function(a,b){var z,y
try{z=a.parentNode
J.hg(z,b,a)}catch(y){H.at(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ek(a):z},
ft:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iJ:{"^":"lc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
ot:{"^":"a8;0a1:type}","%":"HTMLOListElement"},
ou:{"^":"a8;0a1:type}","%":"HTMLObjectElement"},
bc:{"^":"r;0l:length=",$isbc:1,"%":"Plugin"},
oy:{"^":"lg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"PluginArray"},
oD:{"^":"r;0a1:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oE:{"^":"lm;",
j:function(a,b){return P.aU(a.get(H.N(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.jc(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
jc:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oG:{"^":"a8;0a1:type}","%":"HTMLScriptElement"},
oI:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
db:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
be:{"^":"a7;",$isbe:1,"%":"SourceBuffer"},
oJ:{"^":"fy;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SourceBufferList"},
oK:{"^":"a8;0a1:type}","%":"HTMLSourceElement"},
bf:{"^":"r;",$isbf:1,"%":"SpeechGrammar"},
oL:{"^":"lp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"r;0l:length=",$isbg:1,"%":"SpeechRecognitionResult"},
oN:{"^":"ls;",
j:function(a,b){return a.getItem(H.N(b))},
m:function(a,b,c){a.setItem(b,H.N(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.jt(z))
return z},
gl:function(a){return a.length},
$asaj:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jt:{"^":"n:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oQ:{"^":"a8;0a1:type}","%":"HTMLStyleElement"},
bh:{"^":"r;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
de:{"^":"a8;",$isde:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"a7;",$isbi:1,"%":"TextTrack"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrackCue|VTTCue"},
oV:{"^":"lz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"TextTrackCueList"},
oW:{"^":"fB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isj:1,
$asj:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"TextTrackList"},
oX:{"^":"r;0l:length=","%":"TimeRanges"},
bl:{"^":"r;",$isbl:1,"%":"Touch"},
bm:{"^":"di;",$isbm:1,"%":"TouchEvent"},
oY:{"^":"lF;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bl]},
$asx:function(){return[W.bl]},
$isj:1,
$asj:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"TouchList"},
oZ:{"^":"r;0l:length=","%":"TrackDefaultList"},
di:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
p0:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
p2:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
p3:{"^":"a7;0l:length=","%":"VideoTrackList"},
bQ:{"^":"aC;",
ght:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbQ:1,
"%":"WheelEvent"},
kw:{"^":"a7;",
fu:function(a,b){return a.requestAnimationFrame(H.bu(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
eN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
p8:{"^":"m6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb5")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asx:function(){return[W.b5]},
$isj:1,
$asj:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asC:function(){return[W.b5]},
"%":"CSSRuleList"},
p9:{"^":"hK;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaQ(b)&&a.top===z.gba(b)&&a.width===z.gaq(b)&&a.height===z.gam(b)},
gU:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pb:{"^":"m8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isj:1,
$asj:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asC:function(){return[W.b8]},
"%":"GamepadList"},
pc:{"^":"ma;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isj:1,
$asj:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pd:{"^":"mc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
pe:{"^":"me;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"StyleSheetList"},
kL:{"^":"dd;a,b,c,$ti",
hL:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
pa:{"^":"kL;a,b,c,$ti"},
kM:{"^":"eK;a,b,c,d,e,$ti",
fP:function(){var z=this.d
if(z!=null&&this.a<=0)J.hh(this.b,this.c,z,!1)},
p:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fS(new W.kN(c),W.ac)
z=new W.kM(0,a,b,z,!1,[e])
z.fP()
return z}}},
kN:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.f(a,"$isac"))}},
C:{"^":"b;$ti",
ga0:function(a){return new W.ec(a,this.gl(a),-1,[H.b_(this,a,"C",0)])},
ay:function(a,b,c,d){H.z(d,H.b_(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
ec:{"^":"b;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
kF:{"^":"r+hE;"},
kH:{"^":"r+x;"},
kI:{"^":"kH+C;"},
kJ:{"^":"r+x;"},
kK:{"^":"kJ+C;"},
kO:{"^":"r+x;"},
kP:{"^":"kO+C;"},
l0:{"^":"r+x;"},
l1:{"^":"l0+C;"},
l7:{"^":"r+aj;"},
l8:{"^":"r+aj;"},
l9:{"^":"r+x;"},
la:{"^":"l9+C;"},
lb:{"^":"r+x;"},
lc:{"^":"lb+C;"},
lf:{"^":"r+x;"},
lg:{"^":"lf+C;"},
lm:{"^":"r+aj;"},
fx:{"^":"a7+x;"},
fy:{"^":"fx+C;"},
lo:{"^":"r+x;"},
lp:{"^":"lo+C;"},
ls:{"^":"r+aj;"},
ly:{"^":"r+x;"},
lz:{"^":"ly+C;"},
fA:{"^":"a7+x;"},
fB:{"^":"fA+C;"},
lE:{"^":"r+x;"},
lF:{"^":"lE+C;"},
m5:{"^":"r+x;"},
m6:{"^":"m5+C;"},
m7:{"^":"r+x;"},
m8:{"^":"m7+C;"},
m9:{"^":"r+x;"},
ma:{"^":"m9+C;"},
mb:{"^":"r+x;"},
mc:{"^":"mb+C;"},
md:{"^":"r+x;"},
me:{"^":"md+C;"}}],["","",,P,{"^":"",
mA:function(a){var z,y
z=J.K(a)
if(!!z.$isc3){y=z.gdh(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fD(a.data,a.height,a.width)},
mz:function(a){if(a instanceof P.fD)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.en(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.N(y[w])
z.m(0,v,a[v])}return z},
mx:function(a,b){var z={}
a.K(0,new P.my(z))
return z},
e7:function(){var z=$.e6
if(z==null){z=J.cL(window.navigator.userAgent,"Opera",0)
$.e6=z}return z},
hI:function(){var z,y
z=$.e3
if(z!=null)return z
y=$.e4
if(y==null){y=J.cL(window.navigator.userAgent,"Firefox",0)
$.e4=y}if(y)z="-moz-"
else{y=$.e5
if(y==null){y=!P.e7()&&J.cL(window.navigator.userAgent,"Trident/",0)
$.e5=y}if(y)z="-ms-"
else z=P.e7()?"-o-":"-webkit-"}$.e3=z
return z},
lv:{"^":"b;",
dG:function(a){var z,y,x
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
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isj5)throw H.a(P.cb("structured clone of RegExp"))
if(!!y.$isaW)return a
if(!!y.$iscO)return a
if(!!y.$iseb)return a
if(!!y.$isc3)return a
if(!!y.$iseu||!!y.$isd6)return a
if(!!y.$isJ){x=this.dG(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lx(z,this))
return z.a}if(!!y.$isc){x=this.dG(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hq(a,x)}throw H.a(P.cb("structured clone of other type"))},
hq:function(a,b){var z,y,x,w
z=J.aG(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cC(z.j(a,w)))
return x}},
lx:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cC(b)}},
fD:{"^":"b;dh:a>,b,c",$isc3:1},
my:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lw:{"^":"lv;a,b"},
hU:{"^":"cs;a,b",
gbi:function(){var z,y,x
z=this.b
y=H.ax(z,"x",0)
x=W.a2
return new H.is(new H.ku(z,H.h(new P.hV(),{func:1,ret:P.ai,args:[y]}),[y]),H.h(new P.hW(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa2")
z=this.gbi()
J.hk(z.b.$1(J.cM(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.au(this.gbi().a)},
j:function(a,b){var z=this.gbi()
return z.b.$1(J.cM(z.a,b))},
ga0:function(a){var z=P.il(this.gbi(),!1,W.a2)
return new J.ay(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
hV:{"^":"n:30;",
$1:function(a){return!!J.K(H.f(a,"$isL")).$isa2}},
hW:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isL"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bK:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bt(b,"$isbK",[P.W],null)
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.fq(P.bS(P.bS(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bK(z,H.z(x*b,y),this.$ti)}},
lh:{"^":"b;$ti",
gb6:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.y(this,0))},
gc6:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gba(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb6(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gc6(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.fq(P.bS(P.bS(P.bS(P.bS(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
df:function(a,b){var z,y
H.w(b,"$isbK",[P.W],"$asbK")
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
a9:{"^":"lh;aQ:a>,ba:b>,aq:c>,am:d>,$ti",p:{
j2:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nL:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nM:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nN:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nO:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},nP:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nQ:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nR:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nS:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},nT:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nU:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},nV:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},nW:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nX:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nY:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nZ:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},o_:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},o0:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},o1:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},o3:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},o4:{"^":"bD;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hZ:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},o9:{"^":"bD;0q:x=,0t:y=","%":"SVGImageElement"},bG:{"^":"r;",$isbG:1,"%":"SVGLength"},oc:{"^":"l3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbG")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bG]},
$isj:1,
$asj:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asC:function(){return[P.bG]},
"%":"SVGLengthList"},og:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bJ:{"^":"r;",$isbJ:1,"%":"SVGNumber"},os:{"^":"le;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bJ]},
$isj:1,
$asj:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asC:function(){return[P.bJ]},
"%":"SVGNumberList"},ox:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},oz:{"^":"r;0q:x=,0t:y=","%":"SVGPoint"},oA:{"^":"r;0l:length=","%":"SVGPointList"},oB:{"^":"r;0q:x=,0t:y=","%":"SVGRect"},oC:{"^":"hZ;0q:x=,0t:y=","%":"SVGRectElement"},oH:{"^":"U;0a1:type}","%":"SVGScriptElement"},oO:{"^":"lu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},oR:{"^":"U;0a1:type}","%":"SVGStyleElement"},U:{"^":"a2;",
gca:function(a){return new P.hU(a,new W.kD(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oS:{"^":"bD;0q:x=,0t:y=","%":"SVGSVGElement"},jy:{"^":"bD;","%":"SVGTextPathElement;SVGTextContentElement"},oU:{"^":"jy;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bN:{"^":"r;",$isbN:1,"%":"SVGTransform"},p_:{"^":"lH;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbN")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bN]},
$isj:1,
$asj:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asC:function(){return[P.bN]},
"%":"SVGTransformList"},p1:{"^":"bD;0q:x=,0t:y=","%":"SVGUseElement"},l2:{"^":"r+x;"},l3:{"^":"l2+C;"},ld:{"^":"r+x;"},le:{"^":"ld+C;"},lt:{"^":"r+x;"},lu:{"^":"lt+C;"},lG:{"^":"r+x;"},lH:{"^":"lG+C;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjN:1}}],["","",,P,{"^":"",nm:{"^":"r;0l:length=","%":"AudioBuffer"},dP:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nn:{"^":"kC;",
j:function(a,b){return P.aU(a.get(H.N(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new P.ho(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},ho:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hp:{"^":"dP;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},no:{"^":"a7;0l:length=","%":"AudioTrackList"},hs:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},np:{"^":"dP;0a1:type}","%":"BiquadFilterNode"},ov:{"^":"hs;0l:length=","%":"OfflineAudioContext"},ow:{"^":"hp;0a1:type}","%":"Oscillator|OscillatorNode"},kC:{"^":"r+aj;"}}],["","",,P,{"^":"",da:{"^":"r;",
ii:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mz(g))
return}if(!!z.$isee)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c_("Incorrect number or type of arguments"))},
ih:function(a,b,c,d,e,f,g){return this.ii(a,b,c,d,e,f,g,null,null,null)},
$isda:1,
"%":"WebGLRenderingContext"},jW:{"^":"r;",$isjW:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oM:{"^":"lr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.J,,,]]},
$isj:1,
$asj:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asC:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lq:{"^":"r+x;"},lr:{"^":"lq+C;"}}],["","",,O,{"^":"",aI:{"^":"b;0a,0b,0c,0d,$ti",
bK:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cG:function(a,b,c){var z=H.ax(this,"aI",0)
H.h(b,{func:1,ret:P.ai,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
be:function(a,b){return this.cG(a,null,b)},
fi:function(a){var z
H.w(a,"$isj",[H.ax(this,"aI",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ev:function(a,b){var z
H.w(b,"$isj",[H.ax(this,"aI",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ax(this,"aI",0)
H.z(b,z)
z=[z]
if(this.fi(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ev(x,H.e([b],z))}},
$isj:1,
p:{
cT:function(a){var z=new O.aI([a])
z.bK(a)
return z}}},d3:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
ew:function(a){var z=this.b
if(!(z==null))z.G(a)},
aC:function(){return this.ew(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c8()},
e0:function(a){var z=this.a
if(a==null)C.a.h(z,V.c8())
else C.a.h(z,a)
this.aC()},
cs:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cN:{"^":"b;"},aJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
saf:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdX(),{func:1,ret:-1,args:[D.u]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.h(this.gdX(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.eG])
w.b=!0
this.ah(w)}},
saa:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.M(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.h(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.af])
w.b=!0
this.ah(w)}},
aA:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ap(0,b,this):null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.an])
w.b=!0
this.ah(w)}for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();)z.d.aA(0,b)},
aR:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gX(z))
else C.a.h(z.a,y.k(0,z.gX(z)))
z.aC()
a.e1(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.i8(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();)z.d.aR(a)
a.e_()
a.dx.cs()},
gB:function(){var z=this.z
if(z==null){z=D.R()
this.z=z}return z},
ah:function(a){var z=this.z
if(!(z==null))z.G(a)},
Y:function(){return this.ah(null)},
hW:[function(a){H.f(a,"$isu")
this.e=null
this.ah(a)},function(){return this.hW(null)},"jb","$1","$0","gdX",0,2,1],
hV:[function(a){this.ah(H.f(a,"$isu"))},function(){return this.hV(null)},"ja","$1","$0","gdW",0,2,1],
hT:[function(a){this.ah(H.f(a,"$isu"))},function(){return this.hT(null)},"j8","$1","$0","gdV",0,2,1],
j7:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aJ],"$asj")
for(z=b.length,y=this.gdV(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","ghS",8,0,8],
j9:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aJ],"$asj")
for(z=b.length,y=this.gdV(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.h(y,x)
C.a.M(t.a,y)}}this.Y()},"$2","ghU",8,0,8],
$isaK:1,
p:{
ea:function(a,b,c,d,e,f){var z,y
z=new E.aJ()
z.a=d
z.b=!0
y=O.cT(E.aJ)
z.y=y
y.be(z.ghS(),z.ghU())
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
z.saf(0,e)
z.saa(c)
return z}}},j7:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eq:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aA(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d3()
y=[V.an]
z.a=H.e([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.j9(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d3()
z.a=H.e([],y)
v=z.gB()
v.toString
x=H.h(new E.ja(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d3()
z.a=H.e([],y)
y=z.gB()
y.toString
w=H.h(new E.jb(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.df])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.i,A.eF])},
gi4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.k(0,y.gX(y))
this.z=y
z=y}return z},
e1:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
e_:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j8:function(a,b){var z=new E.j7(a,b)
z.eq(a,b)
return z}}},j9:{"^":"n:9;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.ch=null}},ja:{"^":"n:9;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jb:{"^":"n:9;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},eJ:{"^":"u;c,a,0b"},jE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
ey:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.G(a)
this.ia()},function(){return this.ey(null)},"ex","$1","$0","gcJ",0,2,1],
ghC:function(){var z,y,x
z=Date.now()
y=C.d.a4(P.e9(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
d2:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.p(z)
x=C.h.cl(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cl(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ia:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jG(this),{func:1,ret:-1,args:[P.W]})
C.A.eN(z)
C.A.fu(z,W.fS(y,P.W))}},
i7:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d2()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e9(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aC()
w=x.db
C.a.sl(w.a,0)
w.aC()
w=x.dx
C.a.sl(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aR(this.e)}}catch(v){z=H.at(v)
y=H.bw(v)
P.dH("Error: "+H.l(z))
P.dH("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jF:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscR)return E.eP(a,!0,!0,!0,!1)
y=W.cS(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gca(a).h(0,y)
w=E.eP(y,!0,!0,!0,!1)
w.a=a
return w},
eP:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jE()
y=P.ig(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bG(a,"webgl",y)
x=H.f(x==null?C.l.bG(a,"experimental-webgl",y):x,"$isda")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j8(x,a)
w=new T.jz(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k8(a)
v=new X.i8()
v.c=new X.aY(!1,!1,!1)
v.d=P.ij(null,null,null,P.m)
w.b=v
v=new X.iG(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.io(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jK(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eK,P.b]])
w.z=v
u=document
t=W.aC
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.h(w.gf5(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.h(w.gf8(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.h(w.gf1(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.h(w.gfa(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.h(w.gf9(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.h(w.gfd(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.h(w.gff(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.h(w.gfe(),s),!1,t))
p=w.z
o=W.bQ;(p&&C.a).h(p,W.a1(a,H.N(W.hO(a)),H.h(w.gfg(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.h(w.gf6(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.h(w.gf7(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.h(w.gfh(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.h(w.gfo(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.h(w.gfm(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.h(w.gfn(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.d2()
return z}}},jG:{"^":"n:31;a",
$1:function(a){var z
H.n6(a)
z=this.a
if(z.z){z.z=!1
z.i7()}}}}],["","",,Z,{"^":"",fl:{"^":"b;a,b",p:{
dn:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bq(c)),35044)
a.bindBuffer(b,null)
return new Z.fl(b,z)}}},dT:{"^":"cN;a,b,c,d,e",
c4:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.at(y)
x=P.v('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kt:{"^":"b;a",$isnq:1},dU:{"^":"b;a,0b,c,d",
aP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
c4:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].c4(a)},
ip:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aR:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isoT:1},cp:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bn:{"^":"b;a",
gcH:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bO().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=4
if((z&$.$get$bo().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
hi:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fk()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bO().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
p:{
ar:function(a){return new Z.bn(a)}}}}],["","",,D,{"^":"",dY:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hS(z))
return x!==0},
hv:function(){return this.G(null)},
ib:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
ac:function(a){return this.ib(a,!0,!1)},
p:{
R:function(){var z=new D.b7()
z.a=H.e([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hS:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},cq:{"^":"u;c,d,a,0b,$ti"},cr:{"^":"u;c,d,a,0b,$ti"},H:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dV:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"ns<"}},ek:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ek))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},el:{"^":"u;c,a,0b"},i8:{"^":"b;0a,0b,0c,0d",
i1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.el(a,this)
y.b=!0
return z.G(y)},
hY:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.el(a,this)
y.b=!0
return z.G(y)}},ep:{"^":"d9;x,y,c,d,e,a,0b"},io:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gbo()
s=new X.c9(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cr:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.at(a,b))
return!0},
b4:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eh()
if(typeof z!=="number")return z.bF()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.at(a,b))
return!0},
b3:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.at(a,b))
return!0},
i2:function(a){return!1},
fc:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.ep(c,a,this.a.gbo(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.V(0,0)}},aY:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aY))return!1
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
return z+(this.c?"Shift+":"")}},c9:{"^":"d9;x,y,z,Q,ch,c,d,e,a,0b"},iG:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bQ:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbo()
x=new X.c9(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cr:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.bQ(a,b,!0))
return!0},
b4:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eh()
if(typeof z!=="number")return z.bF()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.bQ(a,b,!0))
return!0},
b3:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.bQ(a,b,!1))
return!0},
i3:function(a,b){return!1}},d9:{"^":"u;"},eT:{"^":"d9;x,y,z,Q,ch,c,d,e,a,0b"},jK:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbo()
w=new X.eT(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i0:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.G(this.at(a,!0))
return!0},
hZ:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.G(this.at(a,!0))
return!0},
i_:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.G(this.at(a,!1))
return!0}},k8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbo:function(){var z=this.a
return V.eC(0,0,(z&&C.l).gbn(z).c,C.l.gbn(z).d)},
cU:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ek(z,new X.aY(y,a.altKey,a.shiftKey))},
aI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
c_:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.T()
v=z.top
if(typeof x!=="number")return x.T()
return new V.V(y-w,x-v)},
aV:function(a){return new V.a6(a.movementX,a.movementY)},
bU:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.ad(u.pageX)
C.h.ad(u.pageY)
s=z.left
C.h.ad(u.pageX)
C.a.h(y,new V.V(t-s,C.h.ad(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.aY(y,a.altKey,a.shiftKey))},
iK:[function(a){this.f=!0},"$1","gf8",4,0,4],
iE:[function(a){this.f=!1},"$1","gf1",4,0,4],
iH:[function(a){if(this.f)a.preventDefault()},"$1","gf5",4,0,4],
iM:[function(a){var z
H.f(a,"$isbF")
if(!this.f)return
z=this.cU(a)
if(this.b.i1(z))a.preventDefault()},"$1","gfa",4,0,20],
iL:[function(a){var z
H.f(a,"$isbF")
if(!this.f)return
z=this.cU(a)
if(this.b.hY(z))a.preventDefault()},"$1","gf9",4,0,20],
iO:[function(a){var z,y,x,w
H.f(a,"$isaC")
z=this.a
z.focus()
this.f=!0
this.aI(a)
if(this.x){y=this.ar(a)
x=this.aV(a)
if(this.d.cr(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cr(y,w))a.preventDefault()},"$1","gfd",4,0,5],
iQ:[function(a){var z,y,x
H.f(a,"$isaC")
this.aI(a)
z=this.ar(a)
if(this.x){y=this.aV(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gff",4,0,5],
iJ:[function(a){var z,y,x,w
H.f(a,"$isaC")
z=this.a
if(!(z&&C.l).gbn(z).df(0,new P.bK(a.clientX,a.clientY,[P.W]))){this.aI(a)
y=this.ar(a)
if(this.x){x=this.aV(a)
if(this.d.b4(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b4(y,w))a.preventDefault()}},"$1","gf7",4,0,5],
iP:[function(a){var z,y,x
H.f(a,"$isaC")
this.aI(a)
z=this.ar(a)
if(this.x){y=this.aV(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gfe",4,0,5],
iI:[function(a){var z,y,x,w
H.f(a,"$isaC")
z=this.a
if(!(z&&C.l).gbn(z).df(0,new P.bK(a.clientX,a.clientY,[P.W]))){this.aI(a)
y=this.ar(a)
if(this.x){x=this.aV(a)
if(this.d.b3(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b3(y,w))a.preventDefault()}},"$1","gf6",4,0,5],
iR:[function(a){var z,y
H.f(a,"$isbQ")
this.aI(a)
z=new V.a6((a&&C.z).ghs(a),C.z.ght(a)).A(0,180)
if(this.x){if(this.d.i2(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.i3(z,y))a.preventDefault()},"$1","gfg",4,0,35],
iS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.fc(w,v,x)}},"$1","gfh",4,0,4],
iY:[function(a){var z
H.f(a,"$isbm")
this.a.focus()
this.f=!0
this.c_(a)
z=this.bU(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfo",4,0,13],
iW:[function(a){var z
H.f(a,"$isbm")
this.c_(a)
z=this.bU(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfm",4,0,13],
iX:[function(a){var z
H.f(a,"$isbm")
this.c_(a)
z=this.bU(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfn",4,0,13]}}],["","",,D,{"^":"",cm:{"^":"b;0a,0b,0c,0d",
gB:function(){var z=this.d
if(z==null){z=D.R()
this.d=z}return z},
aD:[function(a){var z
H.f(a,"$isu")
z=this.d
if(!(z==null))z.G(a)},function(){return this.aD(null)},"ir","$1","$0","gcK",0,2,1],
saa:function(a){var z,y,x
if(!J.O(this.b,a)){z=this.b
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcK(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcK(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.b,this,[U.af])
z.b=!0
this.aD(z)}},
sa5:function(a,b){var z,y
if(b==null)b=new V.a_(1,1,1)
if(!this.c.u(0,b)){z=this.c
this.c=b
y=new D.H("color",z,b,this,[V.a_])
y.b=!0
this.aD(y)}},
$isa3:1,
$isaK:1,
p:{
e8:function(a,b){var z=new D.cm()
z.c=new V.a_(1,1,1)
z.a=new V.E(0,0,1)
z.saa(b)
z.sa5(0,a)
return z}}},a3:{"^":"b;",$isaK:1},i9:{"^":"aI;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.R()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.G(a)},
fb:[function(a){var z
H.f(a,"$isu")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.fb(null)},"iN","$1","$0","gd_",0,2,1],
iT:[function(a){var z,y,x
H.w(a,"$isj",[D.a3],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eJ(x))return!1}return!0},"$1","gfj",4,0,37],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gd_(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.cm)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cq(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","geZ",8,0,19],
iV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gd_(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa3")
if(t instanceof D.cm)C.a.M(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.M(s.a,x)}z=new D.cr(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfl",8,0,19],
eJ:function(a){var z=C.a.aX(this.e,a)
return z},
$asj:function(){return[D.a3]},
$asaI:function(){return[D.a3]}},iP:{"^":"b;",$isa3:1,$isaK:1},jq:{"^":"b;",$isa3:1,$isaK:1},jB:{"^":"b;",$isa3:1,$isaK:1},jC:{"^":"b;",$isa3:1,$isaK:1},jD:{"^":"b;",$isa3:1,$isaK:1}}],["","",,V,{"^":"",
nu:[function(a,b){if(typeof b!=="number")return b.T()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","iC",8,0,33],
cJ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bd(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.h.e8($.o.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ab(z[u],x))}return z},
dG:function(a,b){return C.h.ik(Math.pow(b,C.H.cl(Math.log(H.mw(a))/Math.log(b))))},
a_:{"^":"b;a,b,c",
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
return new V.a_(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b3:{"^":"b;a,b,c,d",
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
return new V.b3(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
bH:{"^":"b;a,b,c,d,e,f,r,x,y",
ae:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$isbH")
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
return new V.bH(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
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
z=[P.q]
y=V.bv(H.e([this.a,this.d,this.r],z),3,0)
x=V.bv(H.e([this.b,this.e,this.x],z),3,0)
w=V.bv(H.e([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")},
p:{
iD:function(a){return new V.bH(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)}}},
an:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ae:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dP:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.c8()
a3=1/a2
a4=-w
a5=-i
return V.aB((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isan")
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
return V.aB(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
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
i:function(a){return this.L()},
dH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bv(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bv(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bv(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bv(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.dH("",3,0)},
C:function(a){return this.dH(a,3,0)},
p:{
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c8:function(){return V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
d4:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
es:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
et:function(a,b,c,d){return V.er(new V.Y(0,0,0),new V.E(0,1,0),new V.E(a,b,c))},
er:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.F(c)))
y=b.av(z)
x=y.A(0,Math.sqrt(y.F(y)))
w=z.av(x)
v=new V.E(a.a,a.b,a.c)
return V.aB(x.a,w.a,z.a,x.P(0).F(v),x.b,w.b,z.b,w.P(0).F(v),x.c,w.c,z.c,z.P(0).F(v),0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
T:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
Y:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bL:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bL(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bL))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
eB:{"^":"b;q:a>,t:b>,c,d",
gao:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eB))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
eC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eB(a,b,c,d)}}},
a6:{"^":"b;a,b",
hJ:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){var z,y,x,w
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
return new V.a6(z*b,y*b)},
A:function(a,b){var z,y
if($.o.$2(b,0))return new V.a6(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a6(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hJ:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dQ:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hz:{"^":"dY;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bL:function(a){var z=V.cJ(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.G(a)},
seb:function(a,b){},
sdR:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bL(z)}z=new D.H("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.R(z)}},
sdT:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bL(z)}z=new D.H("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.R(z)}},
sa2:function(a,b){var z,y
b=this.bL(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.q])
z.b=!0
this.R(z)}},
sdS:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.R(z)}},
sZ:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.q])
z.b=!0
this.R(z)}},
sdg:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.q])
z.b=!0
this.R(z)}},
aA:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sZ(y)}},
p:{
e_:function(){var z=new U.hz()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e0:{"^":"af;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
ap:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e0))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
c1:function(a){var z=new U.e0()
z.a=a
return z}}},ed:{"^":"aI;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
R:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.G(a)},function(){return this.R(null)},"aE","$1","$0","gbf",0,2,1],
iA:[function(a,b){var z,y,x,w,v,u,t
z=U.af
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbf(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.R(z)},"$2","geY",8,0,23],
iU:[function(a,b){var z,y,x,w,v,u,t
z=U.af
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbf(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.h(x,w)
C.a.M(t.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfk",8,0,23],
ap:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ay(z,z.length,0,[H.y(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.ap(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c8():x
z=this.e
if(!(z==null))z.ac(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ed))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.af]},
$asaI:function(){return[U.af]},
$isaf:1},af:{"^":"dY;"},eD:{"^":"af;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.G(a)},
sec:function(a){var z,y
a=V.cJ(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.q])
z.b=!0
this.R(z)}},
sdZ:function(a,b){var z,y
b=V.cJ(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.q])
z.b=!0
this.R(z)}},
se3:function(a){var z,y
a=V.cJ(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.q])
z.b=!0
this.R(z)}},
ap:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sec(this.a+this.d*b.y)
this.sdZ(0,this.b+this.e*b.y)
this.se3(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aB(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.es(this.b)).k(0,V.d4(this.a))
z=this.y
if(!(z==null))z.ac(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eD))return!1
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
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"},
p:{
eE:function(a,b,c,d,e,f){var z,y,x
z=new U.eD()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sec(f)
z.sdZ(0,d)
z.se3(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.H("deltaYaw",x,c,z,[P.q])
y.b=!0
z.R(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.H("deltaPitch",x,a,z,[P.q])
y.b=!0
z.R(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.H("deltaRoll",x,b,z,[P.q])
y.b=!0
z.R(y)}return z}}},k9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.R()
this.fx=z}return z},
R:[function(a){var z
H.f(a,"$isu")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.R(null)},"aE","$1","$0","gbf",0,2,1],
hj:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.R()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.geV(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geW(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.R()
x.c=z}x=H.h(this.geX(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.R()
x.f=z}x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geT(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.R()
x.b=z}x=H.h(this.gfO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.gfN(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.R()
x.c=z}y=H.h(this.gfM(),y)
C.a.h(z.a,y)
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.a6(z,y)},
ix:[function(a){a=H.k(H.f(a,"$isu"),"$isc9")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geV",4,0,2],
iy:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$isc9")
if(!this.cx)return
if(this.ch){z=a.d.T(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.T(0,a.y)
z=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.T(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.T(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))}this.aE()},"$1","geW",4,0,2],
iz:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sZ(-y*10*z)
this.aE()}},"$1","geX",4,0,2],
iv:[function(a){if(H.k(H.f(a,"$isu"),"$isep").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geS",4,0,2],
iw:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$isc9")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.T(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.T(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))
this.aE()},"$1","geT",4,0,2],
j1:[function(a){H.f(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfO",4,0,2],
j0:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$isu"),"$iseT")
if(!this.cx)return
if(this.ch){z=a.d.T(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.T(0,a.y)
z=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.T(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.T(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).A(0,z.gao()))}this.aE()},"$1","gfN",4,0,2],
j_:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sZ(-y*10*z)
this.aE()}},"$1","gfM",4,0,2],
ap:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.aA(0,x)
this.b.aA(0,x)
this.fr=V.d4(this.b.d).k(0,V.es(this.c.d))}return this.fr},
$isaf:1,
p:{
fg:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.k9()
y=U.e_()
y.seb(0,!0)
y.sdR(6.283185307179586)
y.sdT(0)
y.sa2(0,0)
y.sdS(100)
y.sZ(0)
y.sdg(0.5)
z.b=y
y=y.gB()
y.toString
x=H.h(z.gbf(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)
y=U.e_()
y.seb(0,!0)
y.sdR(6.283185307179586)
y.sdT(0)
y.sa2(0,0)
y.sdS(100)
y.sZ(0)
y.sdg(0.5)
z.c=y
C.a.h(y.gB().a,x)
z.d=null
z.e=!1
z.f=!1
z.r=!1
z.x=2.5
z.y=2.5
z.z=2
z.Q=4
z.cx=!1
z.ch=!1
z.cy=0
z.db=0
z.dx=null
z.dy=0
z.fr=null
z.fx=null
w=new X.aY(b,!1,!1)
v=z.d
z.d=w
y=new D.H("modifiers",v,w,z,[X.aY])
y.b=!0
z.R(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.H("invertX",y,!1,z,[P.ai])
y.b=!0
z.R(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.H("invertY",y,!1,z,[P.ai])
y.b=!0
z.R(y)}z.hj(c)
return z}}}}],["","",,M,{"^":"",hQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aF:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aF(null)},"is","$1","$0","gaj",0,2,1],
iF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gf3",8,0,8],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.h(x,w)
C.a.M(s.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gf4",8,0,8],
se5:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.h(this.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.df])
z.b=!0
this.aF(z)}},
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.eJ(a,this)
z.b=!0
y=this.e
if(!(y==null))y.G(z)
a.e1(this.c)
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
if(typeof w!=="number")return H.p(w)
t=C.d.ad(u.a*w)
if(typeof v!=="number")return H.p(v)
s=C.d.ad(u.b*v)
r=C.d.ad(u.c*w)
a.c=r
u=C.d.ad(u.d*v)
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
r.e0(V.aB(-m/(x/u),0,0,0,0,m,0,0,0,0,o/n,-o*p/n,0,0,1,0))
x=$.ey
if(x==null){x=V.er(new V.Y(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.ey=x
l=x}else l=x
x=y.a
if(x!=null){k=x.ap(0,a,y)
if(k!=null)l=k.k(0,l)}a.db.e0(l)
y=this.c
if(y!=null)y.aA(0,a)
for(y=this.d.a,y=new J.ay(y,y.length,0,[H.y(y,0)]);y.I();)y.d.aA(0,a)
for(y=this.d.a,y=new J.ay(y,y.length,0,[H.y(y,0)]);y.I();)y.d.aR(a)
this.a.toString
a.cy.cs()
a.db.cs()
this.b.toString
a.e_()},
$isoF:1}}],["","",,A,{"^":"",dO:{"^":"b;a,b,c"},hn:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hw:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},iw:{"^":"eF;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aN,0ax,0aO,0bq,0di,0dj,0br,0bs,0dk,0dl,0bt,0bu,0dm,0dn,0bv,0dq,0dr,0bw,0ds,0dt,0bx,0by,0bz,0du,0dv,0bA,0bB,0dw,0dz,0bC,0dA,0ce,0dB,0cf,0dC,0cg,0dD,0ci,0dE,0cj,0dF,0ck,a,b,0c,0d,0e,0f,0r",
ep:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.ao("")
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
a2.fR(z)
a2.fY(z)
a2.fS(z)
a2.h5(z)
a2.h6(z)
a2.h_(z)
a2.ha(z)
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
z=new P.ao("")
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
v.fV(z)
v.fQ(z)
v.fT(z)
v.fW(z)
v.h3(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h1(z)
v.h2(z)}v.fZ(z)
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
p=H.e([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fU(z)
v.h0(z)
v.h4(z)
v.h7(z)
v.h8(z)
v.h9(z)
v.fX(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.i])
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cV(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cV(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fW(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(m)))}this.fH()
this.fJ()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaM")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaM")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaM")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdk")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaM")
this.k3=H.e([],[A.aM])
y=a2.aN
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.aN=H.k(this.r.n(0,"diffuseTxt"),"$isap")
this.aO=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.ax=H.k(this.r.n(0,"diffuseTxt"),"$isaq")
this.aO=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bq=H.k(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.di=H.k(this.r.n(0,"invDiffuseTxt"),"$isap")
this.br=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dj=H.k(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.br=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.bu=H.k(this.r.n(0,"shininess"),"$isZ")
this.bs=H.k(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dk=H.k(this.r.n(0,"specularTxt"),"$isap")
this.bt=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dl=H.k(this.r.n(0,"specularTxt"),"$isaq")
this.bt=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dm=H.k(this.r.n(0,"bumpTxt"),"$isap")
this.bv=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dn=H.k(this.r.n(0,"bumpTxt"),"$isaq")
this.bv=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dq=H.k(this.r.n(0,"envSampler"),"$isaq")
this.dr=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bw=H.k(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.ds=H.k(this.r.n(0,"reflectTxt"),"$isap")
this.bx=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dt=H.k(this.r.n(0,"reflectTxt"),"$isaq")
this.bx=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.by=H.k(this.r.n(0,"refraction"),"$isZ")
this.bz=H.k(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.du=H.k(this.r.n(0,"refractTxt"),"$isap")
this.bA=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dv=H.k(this.r.n(0,"refractTxt"),"$isaq")
this.bA=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.bB=H.k(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dw=H.k(this.r.n(0,"alphaTxt"),"$isap")
this.bC=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dz=H.k(this.r.n(0,"alphaTxt"),"$isaq")
this.bC=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.ce=H.e([],[A.f5])
this.cf=H.e([],[A.f6])
this.cg=H.e([],[A.f7])
this.ci=H.e([],[A.f8])
this.cj=H.e([],[A.f9])
this.ck=H.e([],[A.fa])
if(a2.k2){y=a2.z
if(y>0){this.dA=H.f(this.r.n(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.ce;(x&&C.a).h(x,new A.f5(l,k,j))}}y=a2.Q
if(y>0){this.dB=H.f(this.r.n(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isZ")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.cf;(x&&C.a).h(x,new A.f6(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dC=H.f(this.r.n(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.cg;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dD=H.f(this.r.n(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isap")
x=this.ci;(x&&C.a).h(x,new A.f8(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dE=H.f(this.r.n(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdk")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isaq")
x=this.cj;(x&&C.a).h(x,new A.f9(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dF=H.f(this.r.n(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isap")
x=this.ck;(x&&C.a).h(x,new A.fa(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ag:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ei(c)
b.a.uniform1i(b.d,0)}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
iv:function(a,b){var z,y
z=a.ax
y=new A.iw(b,z)
y.es(b,z)
y.ep(a,b)
return y}}},iz:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aN,ax,aO",
fR:function(a){var z,y,x
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
fY:function(a){var z
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
fS:function(a){var z
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
h5:function(a){var z,y
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
h6:function(a){var z,y
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
h_:function(a){var z
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
ha:function(a){var z
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
as:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aB(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fV:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
fQ:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
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
fT:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
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
fW:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
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
h3:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
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
fZ:function(a){var z,y
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
h1:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
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
h2:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
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
fU:function(a){var z,y
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
h0:function(a){var z,y
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
h4:function(a){var z,y
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
h7:function(a){var z,y,x
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
h8:function(a){var z,y,x
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
h9:function(a){var z,y,x
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
fX:function(a){var z
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
i:function(a){return this.ax}},f5:{"^":"b;a,b,c"},f8:{"^":"b;a,b,c,d,e,f,r,x"},f6:{"^":"b;a,b,c,d,e,f,r"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fa:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eF:{"^":"cN;",
es:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cV:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fW(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fH:function(){var z,y,x,w,v,u
z=H.e([],[A.dO])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dO(y,v.name,u))}this.f=new A.hn(z)},
fJ:function(){var z,y,x,w,v,u
z=H.e([],[A.ad])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hr(v.type,v.size,v.name,u))}this.r=new A.jV(z)},
aH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eK:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eL:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bl:function(a,b){return new P.fo(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hr:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jQ(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jT(this.a,this.e,c,d)
case 35667:return new A.jR(this.a,this.e,c,d)
case 35668:return new A.jS(this.a,this.e,c,d)
case 35669:return new A.jU(this.a,this.e,c,d)
case 35674:return new A.jX(this.a,this.e,c,d)
case 35675:return new A.dk(this.a,this.e,c,d)
case 35676:return new A.aM(this.a,this.e,c,d)
case 35678:return this.eK(b,c,d)
case 35680:return this.eL(b,c,d)
case 35670:throw H.a(this.bl("BOOL",c))
case 35671:throw H.a(this.bl("BOOL_VEC2",c))
case 35672:throw H.a(this.bl("BOOL_VEC3",c))
case 35673:throw H.a(this.bl("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ck:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},jV:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hB:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hB("\n")}},P:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jR:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jS:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jU:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jP:{"^":"ad;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dj:function(a,b,c,d,e){var z=new A.jP(a,b,c,e)
z.f=d
z.e=P.ik(d,0,!1,P.m)
return z}}},Z:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jQ:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jT:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jX:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dk:{"^":"ad;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aM:{"^":"ad;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ap:{"^":"ad;a,b,c,d",
ei:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},aq:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dz:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
z=F.dc()
F.bV(z,b,c,d,a,1,0,0,1)
F.bV(z,b,c,d,a,0,1,0,3)
F.bV(z,b,c,d,a,0,0,1,2)
F.bV(z,b,c,d,a,-1,0,0,0)
F.bV(z,b,c,d,a,0,-1,0,0)
F.bV(z,b,c,d,a,0,0,-1,3)
z.al()
return z},
cB:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bV:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
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
j=F.dI(d,e,new F.mf(z,F.cB(z.c),F.cB(z.d),k,l,c),b)
if(j!=null)a.b2(j)},
fZ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.dc()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ah])
v=z.a
u=new V.E(0,0,y)
u=u.A(0,Math.sqrt(u.F(u)))
C.a.h(w,v.he(new V.bL(a,-1,-1,-1),new V.b3(1,1,1,1),new V.Y(0,0,c),new V.E(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.E(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cd(new V.bL(a,-1,-1,-1),null,new V.b3(n,l,m,1),new V.Y(r*p,q*p,c),new V.E(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hc(w)
return z},
fX:function(a,b,c,d,e,f){return F.mC(!0,c,d,new F.mB(a,f),e)},
mC:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dI(c,e,new F.mE(d),null)
if(z==null)return
z.al()
z.c0()
if(b)z.b2(F.fZ(3,!1,1,new F.mF(d),e))
z.b2(F.fZ(1,!0,-1,new F.mG(d),e))
return z},
nc:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.nd()
y=F.dz(a,null,new F.ne(z),c)
y.c0()
return y},
hd:function(a,b,c,d){return F.fY(c,a,d,b,new F.ng())},
mV:function(a,b,c,d,e,f){return F.fY(d,a,e,b,new F.mW(f,c))},
fY:function(a,b,c,d,e){var z=F.dI(a,b,new F.mD(H.h(e,{func:1,ret:V.Y,args:[P.q]}),d,b,c),null)
if(z==null)return
z.al()
z.c0()
return z},
dI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dc()
y=H.e([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cd(null,null,new V.b3(u,0,0,1),null,null,new V.V(w,1),null,null,0)
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
t=F.cd(null,null,new V.b3(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cc(d))}}z.d.hd(a+1,b+1,y)
return z},
mf:{"^":"n:10;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cp(z.b,b).cp(z.d.cp(z.c,b),c)
a.sa2(0,new V.Y(y.a,y.b,y.c))
a.se6(y.A(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sdd(new V.bL(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mB:{"^":"n:15;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mE:{"^":"n:10;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sa2(0,new V.Y(y,u,w))
u=new V.E(y,u,w)
a.se6(u.A(0,Math.sqrt(u.F(u))))
a.sdd(new V.bL(1-c,2+c,-1,-1))}},
mF:{"^":"n:22;a",
$1:function(a){return this.a.$2(a,1)}},
mG:{"^":"n:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
nd:{"^":"n:15;",
$2:function(a,b){return 0}},
ne:{"^":"n:10;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.F(x))).k(0,1+z)
a.sa2(0,new V.Y(z.a,z.b,z.c))}},
ng:{"^":"n:16;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
mW:{"^":"n:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mD:{"^":"n:10;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dJ(y.$1(z),x)
x=J.dJ(y.$1(z+3.141592653589793/this.c),x).T(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.F(x)))
u=new V.E(1,0,0)
y=v.av(!v.u(0,u)?new V.E(0,0,1):u)
t=y.A(0,Math.sqrt(y.F(y)))
y=t.av(v)
u=y.A(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa2(0,w.D(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gaZ()){C.a.M(this.a.a.d.b,this)
this.a.a.Y()}this.bW()
this.bX()
this.fs()},
fE:function(a){this.a=a
C.a.h(a.d.b,this)},
fF:function(a){this.b=a
C.a.h(a.d.c,this)},
fG:function(a){this.c=a
C.a.h(a.d.d,this)},
bW:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
bX:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
fs:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eE:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dQ())return
return v.A(0,Math.sqrt(v.F(v)))},
eH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.T(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.F(z)))
z=w.T(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.av(z.A(0,Math.sqrt(z.F(z))))
return z.A(0,Math.sqrt(z.F(z)))},
c9:function(){if(this.d!=null)return!0
var z=this.eE()
if(z==null){z=this.eH()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
eD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dQ())return
return v.A(0,Math.sqrt(v.F(v)))},
eG:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.T(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.T(0,u).k(0,l).D(0,u).T(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.F(z)))
z=k.av(m)
z=z.A(0,Math.sqrt(z.F(z))).av(k)
m=z.A(0,Math.sqrt(z.F(z)))}return m},
c7:function(){if(this.e!=null)return!0
var z=this.eD()
if(z==null){z=this.eG()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
b_:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.P(0)
y=this.e
if(y!=null)this.e=y.P(0)
this.a.a.Y()},
ghn:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y
if(this.gaZ())return a+"disposed"
z=a+C.b.ab(J.ab(this.a.e),0)+", "+C.b.ab(J.ab(this.b.e),0)+", "+C.b.ab(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.C("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.fE(a)
z.fF(b)
z.fG(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
hT:{"^":"b;"},
jp:{"^":"hT;",
b1:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d0:{"^":"b;0a,0b",
aw:function(){if(!this.gaZ()){C.a.M(this.a.a.c.b,this)
this.a.a.Y()}this.bW()
this.bX()},
bW:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
bX:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaZ())return a+"disposed"
return a+C.b.ab(J.ab(this.a.e),0)+", "+C.b.ab(J.ab(this.b.e),0)},
L:function(){return this.C("")}},
ia:{"^":"b;"},
jO:{"^":"ia;",
b1:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d8:{"^":"b;0a",
aw:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.Y()}this.fq()},
fq:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.ab(z.e),0)},
L:function(){return this.C("")}},
eG:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hp())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d8()
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
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
if(s==null)H.t(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.t(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.w()
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
F.bB(p,o,l)}z=this.e
if(!(z==null))z.ac(0)},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ac(0)
return y},
eP:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ah],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b1(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hP:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ah],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eP(a,v,y,u,t))b.b2(u)}this.a.w()
this.c.cv()
this.d.cv()
this.b.i6()
this.c.cw(new F.jO())
this.d.cw(new F.jp())
z=this.e
if(!(z==null))z.ac(0)},
hh:function(a){this.hP(new F.kn(),new F.iK())},
c0:function(){return this.hh(null)},
b_:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.b_()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdU(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.O(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.G(null)}}}}z=this.e
if(!(z==null))z.ac(0)},
hl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bO().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcH(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dT])
for(r=0,q=0;q<w;++q){p=b.hi(q)
o=p.gcH(p)
C.a.m(s,q,new Z.dT(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hK(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bq(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dU(new Z.fl(34962,j),s,b)
i.b=H.e([],[Z.cp])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cp(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.E(z,"\n")},
ah:function(a){var z=this.e
if(!(z==null))z.G(a)},
Y:function(){return this.ah(null)},
p:{
dc:function(){var z,y
z=new F.eG()
y=new F.ki(z)
y.b=!1
y.c=H.e([],[F.ah])
z.a=y
y=new F.jk(z)
y.b=H.e([],[F.d8])
z.b=y
y=new F.jj(z)
y.b=H.e([],[F.d0])
z.c=y
y=new F.ji(z)
y.b=H.e([],[F.am])
z.d=y
z.e=null
return z}}},
ji:{"^":"b;a,0b",
hc:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ah],"$asc")
z=H.e([],[F.am])
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
C.a.h(z,F.bB(x,v,u))}}return z},
hd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ah],"$asc")
z=H.e([],[F.am])
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
cw:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b1(0,v,t)){v.aw()
break}}}}},
cv:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghn(x)
if(y)x.aw()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c9())x=!1
return x},
c8:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c7())x=!1
return x},
b_:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b_()},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
jj:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cw:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b1(0,v,t)){v.aw()
break}}}}},
cv:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.aw()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.E(z,"\n")},
L:function(){return this.C("")}},
jk:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i6:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
ah:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cc:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cd(this.cx,x,u,z,y,w,v,a,t)},
hp:function(){return this.cc(null)},
sa2:function(a,b){var z
if(!J.O(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
sdU:function(a){var z
a=a.A(0,Math.sqrt(a.F(a)))
if(!J.O(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Y()}},
se6:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
sdd:function(a){var z
if(!J.O(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Y()}},
hK:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$aQ())){z=this.f
y=[P.q]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.r
y=[P.q]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.x
y=[P.q]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.y
y=[P.q]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aS())){z=this.z
y=[P.q]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bO())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bP())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bo()))return H.e([this.ch],[P.q])
else if(z.u(a,$.$get$aN())){z=this.cx
y=[P.q]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.q])},
c9:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.ks(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
c7:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.kr(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.ab(J.ab(this.e),0))
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
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
L:function(){return this.C("")},
p:{
cd:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.kq(z)
y.b=H.e([],[F.d8])
z.b=y
y=new F.km(z)
x=[F.d0]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kj(z)
x=[F.am]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fi()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fj().a)!==0?c:null
z.ch=(x&$.$get$bo().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
ks:{"^":"n:11;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kr:{"^":"n:11;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
ki:{"^":"b;a,0b,0c",
w:function(){var z,y,x,w
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
this.a.Y()
return!0},
hf:function(a,b,c,d,e,f,g,h,i){var z=F.cd(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
he:function(a,b,c,d,e,f){return this.hf(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c9()
return!0},
c8:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c7()
return!0},
hm:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
this.w()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
kj:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kk(this,b))
C.a.K(this.d,new F.kl(this,b))},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
kk:{"^":"n:11;a,b",
$1:function(a){H.f(a,"$isam")
if(!J.O(a.a,this.a))this.b.$1(a)}},
kl:{"^":"n:11;a,b",
$1:function(a){var z
H.f(a,"$isam")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
km:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
ko:{"^":"b;"},
kn:{"^":"ko;",
b1:function(a,b,c){return J.O(b.f,c.f)}},
kp:{"^":"b;"},
iK:{"^":"kp;",
b2:function(a){var z,y,x,w
H.w(a,"$isc",[F.ah],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sdU(z)
return}},
kq:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}}}],["","",,O,{"^":"",iu:{"^":"df;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.R()
this.dy=z}return z},
a_:[function(a){var z
H.f(a,"$isu")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.a_(null)},"f2","$1","$0","gbj",0,2,1],
fw:[function(a){H.f(a,"$isu")
this.a=null
this.a_(a)},function(){return this.fw(null)},"iZ","$1","$0","gfv",0,2,1],
iC:[function(a,b){var z=V.an
z=new D.cq(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.a_(z)},"$2","gf_",8,0,25],
iD:[function(a,b){var z=V.an
z=new D.cr(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.a_(z)},"$2","gf0",8,0,25],
cS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.dx
y=C.d.a4(z.e.length+3,4)*4
x=C.d.a4(z.f.length+3,4)*4
w=C.d.a4(z.r.length+3,4)*4
v=C.d.a4(z.x.length+3,4)*4
u=C.d.a4(z.y.length+3,4)*4
t=C.d.a4(z.z.length+3,4)*4
s=C.d.a4(this.e.a.length+3,4)*4
z=this.b!=null
r=this.c!=null
q=this.d!=null
p=this.f.c
o=this.r.c
n=this.x.c
m=this.y.c
l=this.z.c
k=this.Q.c
j=this.cx.c
i=this.cy.c
h=this.db.c
g="MaterialLight_"+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+C.d.i(h.a)+"_"
g+=z?"1":"0"
g+=r?"1":"0"
g=g+(q?"1":"0")+"_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
f=j!==C.c||i!==C.c
e=o!==C.c||n!==C.c||m!==C.c||l!==C.c
d=l===C.c
c=!d||f
b=n!==C.c||m!==C.c||!d||k!==C.c||f
d=k===C.c
a=!d
a0=p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e
a1=p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f
a2=x+u+v+w+t>0
a3=s>0
a4=b||!d||c
a5=z&&a0
a6=r&&a1
a7=$.$get$aQ()
if(b){z=$.$get$aP()
a7=new Z.bn(a7.a|z.a)}if(a){z=$.$get$aO()
a7=new Z.bn(a7.a|z.a)}if(a0){z=$.$get$aR()
a7=new Z.bn(a7.a|z.a)}if(a1){z=$.$get$aS()
a7=new Z.bn(a7.a|z.a)}if(a3){z=$.$get$aN()
a7=new Z.bn(a7.a|z.a)}return new A.iz(p,o,n,m,l,k,j,i,h,y,x,w,v,u,t,y+x+w+v+u+t,f,f,a2,a4,!0,!1,!1,e,a2,c,b,a,a0,a1,a3,a5,a6,q,s,g.charCodeAt(0)==0?g:g,a7)},
V:function(a,b){H.w(a,"$isc",[T.dg],"$asc")
if(b!=null)if(!C.a.aX(a,b)){b.a=a.length
C.a.h(a,b)}},
aA:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.y(z,0)]);z.I();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cB(x)}}},
i8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cS()
y=a.fr.j(0,z.ax)
if(y==null){y=A.iv(z,a.a)
x=y.b
if(x.length===0)H.t(P.v("May not cache a shader with no name."))
if(a.fr.bp(0,x))H.t(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aO
z=b.e
if(!(z instanceof Z.dU)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.al()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c8()
t.a.c8()
t=t.e
if(!(t==null))t.ac(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hm()
s=s.e
if(!(s==null))s.ac(0)}q=b.d.hl(new Z.kt(a.a),v)
q.aP($.$get$aQ()).e=this.a.y.c
if(z)q.aP($.$get$aP()).e=this.a.Q.c
if(u)q.aP($.$get$aO()).e=this.a.z.c
if(w.rx)q.aP($.$get$aR()).e=this.a.ch.c
if(t)q.aP($.$get$aS()).e=this.a.cx.c
if(w.x1)q.aP($.$get$aN()).e=this.a.cy.c
b.e=q}z=T.dg
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hw()
if(w.fx){u=this.a
t=a.dx
t=t.gX(t)
u=u.db
u.toString
u.ai(t.ae(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gX(t)
s=a.dx
s=t.k(0,s.gX(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ai(t.ae(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi4()
s=a.dx
s=t.k(0,s.gX(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ai(t.ae(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ai(t.ae(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ai(t.ae(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ai(t.ae(0,!0))}if(w.aN>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isan")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bq(H.w(s.ae(0,!0),"$isc",u,"$asc")))
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
case C.e:this.V(p,this.f.d)
u=this.a
t=this.f.d
u.ag(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.f.e)
u=this.a
t=this.f.e
u.a8(u.r2,u.rx,t)
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
case C.e:this.V(p,this.r.d)
u=this.a
t=this.r.d
u.ag(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.r.e)
u=this.a
t=this.r.e
u.a8(u.x2,u.y1,t)
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
case C.e:this.V(p,this.x.d)
u=this.a
t=this.x.d
u.ag(u.aN,u.aO,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.x.e)
u=this.a
t=this.x.e
u.a8(u.ax,u.aO,t)
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
u=u.bq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.V(p,this.y.d)
u=this.a
t=this.y.d
u.ag(u.di,u.br,t)
t=this.a
u=this.y.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.V(p,this.y.e)
u=this.a
t=this.y.e
u.a8(u.dj,u.br,t)
t=this.a
u=this.y.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bs
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bu
t.a.uniform1f(t.d,r)
break
case C.e:this.V(p,this.z.d)
u=this.a
t=this.z.d
u.ag(u.dk,u.bt,t)
t=this.a
u=this.z.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bu
u.a.uniform1f(u.d,r)
break
case C.f:this.V(p,this.z.e)
u=this.a
t=this.z.e
u.a8(u.dl,u.bt,t)
t=this.a
u=this.z.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bu
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ce
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cB(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cf
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb5(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcD(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bb(i.gb5(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga5(i)
f=h.d
g=s.gbE()
r=s.gbc()
s=s.gbm()
f.a.uniform3f(f.d,g,r,s)
s=i.gc1()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc2()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc3()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cg
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb5(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcD(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcd(i).j6()
f=h.c
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=l.bb(i.gb5(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga5(i)
r=h.e
g=s.gbE()
f=s.gbc()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.gj3()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj2()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc1()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc2()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc3()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.ci
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gb7()
H.w(p,"$isc",s,"$asc")
if(!C.a.aX(p,r)){r.sbh(p.length)
C.a.h(p,r)}r=i.gcd(i)
g=h.d
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
g.a.uniform3f(g.d,f,e,r)
r=i.giq()
e=h.b
f=r.gaK(r)
g=r.gaL(r)
r=r.gaM()
e.a.uniform3f(e.d,f,g,r)
r=i.gb6(i)
g=h.c
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
g.a.uniform3f(g.d,f,e,r)
r=l.cB(i.gcd(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga5(i)
f=h.f
e=g.gbE()
r=g.gbc()
g=g.gbm()
f.a.uniform3f(f.d,e,r,g)
g=i.gb7()
r=g.gcq(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.geR()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbh())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dE
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cj
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gb7()
H.w(p,"$isc",r,"$asc")
if(!C.a.aX(p,g)){g.sbh(p.length)
C.a.h(p,g)}d=l.k(0,i.gX(i))
g=i.gX(i).bb(new V.Y(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gcD(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bb(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dP(0)
c=h.d
m=new Float32Array(H.bq(H.w(new V.bH(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ae(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga5(i)
g=h.e
e=c.gbE()
f=c.gbc()
c=c.gbm()
g.a.uniform3f(g.d,e,f,c)
c=i.gb7()
g=c.gcq(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcq(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gj4(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc1()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc2()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc3()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dF
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ck
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gb7()
H.w(p,"$isc",z,"$asc")
if(!C.a.aX(p,s)){s.sbh(p.length)
C.a.h(p,s)}s=i.gb5(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gcD(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcd(i)
f=h.c
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=i.giq()
r=h.d
g=s.gaK(s)
f=s.gaL(s)
s=s.gaM()
r.a.uniform3f(r.d,g,f,s)
s=i.gb6(i)
f=h.e
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=l.bb(i.gb5(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb7()
r=s.gcq(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.geR()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbh())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga5(i)
r=h.y
g=s.gbE()
f=s.gbc()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.gjc()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjd()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc1()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc2()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc3()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.V(p,this.Q.d)
z=this.a
u=this.Q.d
z.ag(z.dm,z.bv,u)
break
case C.f:this.V(p,this.Q.e)
z=this.a
u=this.Q.e
z.a8(z.dn,z.bv,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gX(u).dP(0)
a.Q=u}z=z.fy
z.toString
z.ai(u.ae(0,!0))}if(w.dy){this.V(p,this.ch)
z=this.a
u=this.ch
z.a8(z.dq,z.dr,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bw
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.V(p,this.cx.d)
z=this.a
u=this.cx.d
z.ag(z.ds,z.bx,u)
u=this.a
z=this.cx.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.V(p,this.cx.e)
z=this.a
u=this.cx.e
z.a8(z.dt,z.bx,u)
u=this.a
z=this.cx.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bz
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.by
u.a.uniform1f(u.d,s)
break
case C.e:this.V(p,this.cy.d)
z=this.a
u=this.cy.d
z.ag(z.du,z.bA,u)
u=this.a
z=this.cy.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.by
z.a.uniform1f(z.d,s)
break
case C.f:this.V(p,this.cy.e)
z=this.a
u=this.cy.e
z.a8(z.dv,z.bA,u)
u=this.a
z=this.cy.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.by
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bB
z.a.uniform1f(z.d,t)
break
case C.e:this.V(p,this.db.d)
z=this.a
t=this.db.d
z.ag(z.dw,z.bC,t)
t=this.a
z=this.db.f
t=t.bB
t.a.uniform1f(t.d,z)
break
case C.f:this.V(p,this.db.e)
z=this.a
t=this.db.e
z.a8(z.dz,z.bC,t)
t=this.a
z=this.db.f
t=t.bB
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.c4(a)
z.aR(a)
z.ip(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hu()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cS().ax}},ix:{"^":"d2;0f,a,b,0c,0d,0e"},d2:{"^":"b;",
a_:[function(a){this.a.a_(H.f(a,"$isu"))},function(){return this.a_(null)},"f2","$1","$0","gbj",0,2,1],
aU:["en",function(){}],
fC:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.h(this.gbj(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.h(this.gbj(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H(this.b+".texture2D",x,this.d,this,[T.eO])
z.b=!0
this.a.a_(z)}},
fD:function(a){}},iy:{"^":"d2;a,b,0c,0d,0e"},ba:{"^":"d2;0f,a,b,0c,0d,0e",
d3:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.a_(y)}},
aU:["bJ",function(){this.en()
this.d3(new V.a_(1,1,1))}],
sa5:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aU()
z=this.a
z.a=null
z.a_(null)}this.d3(b)}},iA:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
fB:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.a_(z)}},
aU:function(){this.bJ()
this.fB(1)}},iB:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bY:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.a_(z)}},
aU:function(){this.bJ()
this.bY(100)}},df:{"^":"b;"}}],["","",,T,{"^":"",dg:{"^":"cN;"},eO:{"^":"dg;0b,0c,0d,0e,0f,0r,0x,0y,a"},jz:{"^":"b;a,0b,0c,0d,0e",
hN:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,10497)
z.texParameteri(3553,10243,10497)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.eO(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.R()
z=W.ac
W.a1(x,"load",H.h(new T.jA(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hM:function(a,b){return this.hN(a,!1,!1,!1,b)},
fz:function(a,b,c){var z,y,x,w
b=V.dG(b,2)
z=V.dG(a.width,2)
y=V.dG(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cS(null,null)
x.width=z
x.height=y
w=H.f(C.l.ee(x,"2d"),"$isdX")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mA(w.getImageData(0,0,x.width,x.height))}}},jA:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fz(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ih(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hv()}++x.e}}}],["","",,V,{"^":"",hm:{"^":"b;",
b0:function(a,b){return!0},
i:function(a){return"all"},
$isc7:1},c7:{"^":"b;"},eq:{"^":"b;",
b0:["em",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b0(0,b))return!0
return!1}],
i:["cI",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc7:1},bI:{"^":"eq;0a",
b0:function(a,b){return!this.em(0,b)},
i:function(a){return"!["+this.cI(0)+"]"}},jg:{"^":"b;0a",
er:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.m,P.ai])
for(y=new H.eo(a,a.gl(a),0,[H.ax(a,"x",0)]);y.I();)z.m(0,y.d,!0)
this.a=z},
b0:function(a,b){return this.a.bp(0,b)},
i:function(a){var z=this.a
return P.ca(z.gan(z),0,null)},
$isc7:1,
p:{
aa:function(a){var z=new V.jg()
z.er(a)
return z}}},eI:{"^":"b;a,b,0c,0d",
ghQ:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eU(this.a.N(0,b))
w.a=H.e([],[V.c7])
w.c=!1
C.a.h(this.c,w)
return w},
hy:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b0(0,a))return w}return},
i:function(a){return this.b}},eR:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.hb(this.b,"\n","\\n")
y=H.hb(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eS:{"^":"b;a,b,0c",
i:function(a){return this.b}},jJ:{"^":"b;0a,0b,0c",
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eI(this,b)
z.c=H.e([],[V.eU])
this.a.m(0,b,z)}return z},
b9:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eS(this,a)
y=P.i
z.c=new H.aX(0,0,[y,y])
this.b.m(0,a,z)}return z},
io:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eR])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hy(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ca(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghQ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ca(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eR(o==null?p.b:o,q,t)}++t}}}},eU:{"^":"eq;b,0c,0a",
i:function(a){return this.b.b+": "+this.cI(0)}}}],["","",,X,{"^":"",dW:{"^":"b;",$isaK:1},hY:{"^":"eM;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z}},iN:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
aT:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.G(a)},function(){return this.aT(null)},"it","$1","$0","gcL",0,2,1],
saa:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.h(this.gcL(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.h(this.gcL(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.af])
z.b=!0
this.aT(z)}},
$isaK:1,
$isdW:1},eM:{"^":"b;"}}],["","",,V,{"^":"",
na:function(a){P.jI(C.F,new V.nb(a))},
nb:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbk")
P.dH(C.h.e8(this.a.ghC(),2)+" fps")}},
j0:{"^":"b;a,b,0c",
da:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fd().gcu().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d8(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dM(this.c).h(0,v)
t=W.i0("radio")
t.checked=x
t.name=z
z=W.ac
W.a1(t,"change",H.h(new V.j1(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dM(this.c).h(0,w.createElement("br"))},
aW:function(a,b,c){return this.da(a,b,c,!1)},
d8:function(a){var z,y,x,w,v
z=P.fd()
y=P.i
x=P.ih(z.gcu(),y,y)
x.m(0,this.a,a)
w=z.e2(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lw([],[]).cC(""),"",v)}},
j1:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d8(this.d)}}},
jl:{"^":"b;0a,0b",
eu:function(a,b){var z,y,x,w,v,u,t
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
W.a1(z,"scroll",H.h(new V.jo(x),{func:1,ret:-1,args:[t]}),!1,t)},
hg:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fI()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.io(C.a.hI(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.ha(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
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
hb:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isde").style
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
t=H.f(w.insertCell(-1),"$isde")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fI:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jJ()
y=P.i
z.a=new H.aX(0,0,[y,V.eI])
z.b=new H.aX(0,0,[y,V.eS])
z.c=z.N(0,"Start")
y=z.N(0,"Start").E(0,"Bold")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").E(0,"Bold")
x=new V.bI()
w=[V.c7]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").E(0,"BoldEnd")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Italic")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").E(0,"Italic")
x=new V.bI()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").E(0,"ItalicEnd")
x=V.aa(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Code")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").E(0,"Code")
x=new V.bI()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.aa(new H.a4("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").E(0,"CodeEnd")
x=V.aa(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"LinkHead")
x=V.aa(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").E(0,"LinkTail")
x=V.aa(new H.a4("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").E(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").E(0,"LinkHead")
y=new V.bI()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").E(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").E(0,"LinkTail")
y=new V.bI()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").E(0,"Other").a,new V.hm())
x=z.N(0,"Other").E(0,"Other")
y=new V.bI()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.b9("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.b9("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.b9("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.b9("Link")
x=z.N(0,"Other")
x.d=x.a.b9("Other")
this.b=z},
p:{
jm:function(a,b){var z=new V.jl()
z.eu(a,!0)
return z}}},
jo:{"^":"n:14;a",
$1:function(a){P.jH(C.r,new V.jn(this.a))}},
jn:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
h6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.jm("Test 026",!0)
y=W.cS(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.hg(H.e(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],x))
z.hb(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jF(w,!0,!0,!0,!1)
u=D.e8(null,null)
u.saa(U.c1(V.et(0.3,0.4,1,null)))
t=D.e8(null,null)
t.saa(U.c1(V.et(-0.3,-0.4,-1,null)))
t.sa5(0,new V.a_(0.125,0.125,0.125))
s=new O.iu()
z=O.cT(V.an)
s.e=z
z.be(s.gf_(),s.gf0())
z=new O.ba(s,"emission")
z.c=C.c
z.f=new V.a_(0,0,0)
s.f=z
z=new O.ba(s,"ambient")
z.c=C.c
z.f=new V.a_(0,0,0)
s.r=z
z=new O.ba(s,"diffuse")
z.c=C.c
z.f=new V.a_(0,0,0)
s.x=z
z=new O.ba(s,"invDiffuse")
z.c=C.c
z.f=new V.a_(0,0,0)
s.y=z
z=new O.iB(s,"specular")
z.c=C.c
z.f=new V.a_(0,0,0)
z.ch=100
s.z=z
z=new O.iy(s,"bump")
z.c=C.c
s.Q=z
s.ch=null
z=new O.ba(s,"reflect")
z.c=C.c
z.f=new V.a_(0,0,0)
s.cx=z
z=new O.iA(s,"refract")
z.c=C.c
z.f=new V.a_(0,0,0)
z.ch=1
s.cy=z
z=new O.ix(s,"alpha")
z.c=C.c
z.f=1
s.db=z
z=new D.i9()
z.bK(D.a3)
z.e=H.e([],[D.cm])
z.f=H.e([],[D.iP])
z.r=H.e([],[D.jq])
z.x=H.e([],[D.jB])
z.y=H.e([],[D.jC])
z.z=H.e([],[D.jD])
z.Q=null
z.ch=null
z.cG(z.geZ(),z.gfj(),z.gfl())
s.dx=z
r=z.Q
if(r==null){r=D.R()
z.Q=r
z=r}else z=r
r={func:1,ret:-1,args:[D.u]}
q=H.h(s.gfv(),r)
C.a.h(z.a,q)
q=s.dx
z=q.ch
if(z==null){z=D.R()
q.ch=z}q=H.h(s.gbj(),r)
C.a.h(z.a,q)
s.dy=null
s.dx.h(0,u)
s.dx.h(0,t)
s.f.sa5(0,new V.a_(0,0,0))
q=s.r
q.sa5(0,new V.a_(0.1,0.1,0.1))
z=s.x
z.sa5(0,new V.a_(0.8,0.8,0.8))
z=s.z
z.sa5(0,new V.a_(0.2,0.2,0.2))
z=s.z
if(z.c===C.c){z.c=C.i
z.bJ()
z.bY(100)
q=z.a
q.a=null
q.a_(null)}z.bY(100)
z=s.x
q=v.f.hM("../resources/Test.png",!0)
p=z.c
if(p!==C.e){if(p===C.c)z.aU()
z.c=C.e
z.fD(null)
p=z.a
p.a=null
p.a_(null)}z.fC(q)
o=E.ea(null,!0,null,"",null,null)
o.saa(U.fg(!1,!0,v.r,!1,!1,!1,null,!1))
o.saf(0,F.hd(30,1,15,0.5))
n=E.ea(null,!0,null,"",null,null)
n.saa(U.c1(V.aB(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
z=F.dz(1,null,null,1)
z.b_()
n.saf(0,z)
m=new U.ed()
m.bK(U.af)
m.be(m.geY(),m.gfk())
m.e=null
m.f=V.c8()
m.r=0
m.h(0,U.fg(!1,!1,v.r,!1,!1,!1,null,!1))
m.h(0,U.c1(V.d4(3.141592653589793)))
m.h(0,U.c1(V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=U.eE(0.5,0.7,0.3,0,0,0)
k=U.eE(0,0.1,0,0,0,0)
z=new M.hQ()
q=O.cT(E.aJ)
z.d=q
q.be(z.gf3(),z.gf4())
z.e=null
z.f=null
z.r=null
z.x=null
j=new X.iN()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.saa(null)
q=j.b
if(!$.o.$2(q,1.0471975511965976)){i=j.b
j.b=1.0471975511965976
q=new D.H("fov",i,1.0471975511965976,j,[P.q])
q.b=!0
j.aT(q)}q=j.c
if(!$.o.$2(q,0.1)){i=j.c
j.c=0.1
q=new D.H("near",i,0.1,j,[P.q])
q.b=!0
j.aT(q)}q=j.d
if(!$.o.$2(q,2000)){i=j.d
j.d=2000
q=new D.H("far",i,2000,j,[P.q])
q.b=!0
j.aT(q)}q=z.a
if(q!==j){if(q!=null){q=q.gB()
q.toString
p=H.h(z.gaj(),r)
C.a.M(q.a,p)}i=z.a
z.a=j
q=j.gB()
q.toString
p=H.h(z.gaj(),r)
C.a.h(q.a,p)
q=new D.H("camera",i,z.a,z,[X.dW])
q.b=!0
z.aF(q)}h=new X.hY()
q=new V.b3(0,0,0,1)
h.a=q
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
q=V.eC(0,0,1,1)
h.r=q
q=z.b
if(q!==h){if(q!=null){q=q.gB()
q.toString
p=H.h(z.gaj(),r)
C.a.M(q.a,p)}i=z.b
z.b=h
q=h.gB()
q.toString
p=H.h(z.gaj(),r)
C.a.h(q.a,p)
q=new D.H("target",i,z.b,z,[X.eM])
q.b=!0
z.aF(q)}z.se5(null)
z.se5(s)
z.d.h(0,o)
z.d.h(0,n)
z.a.saa(m)
q=z.e
if(q==null){q=D.R()
z.e=q}p=H.h(new K.mY(s,l,k),r)
C.a.h(q.a,p)
q=v.d
if(q!==z){if(q!=null){q=q.gB()
q.toString
p=H.h(v.gcJ(),r)
C.a.M(q.a,p)}v.d=z
z=z.gB()
z.toString
r=H.h(v.gcJ(),r)
C.a.h(z.a,r)
v.ex()}z=new V.j0("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.t("Failed to find shapes for RadioGroup")
z.aW(0,"Cube",new K.mZ(o))
z.aW(0,"Cylinder",new K.n_(o))
z.aW(0,"Cone",new K.n0(o))
z.aW(0,"Sphere",new K.n1(o))
z.da(0,"Toroid",new K.n2(o),!0)
z.aW(0,"Knot",new K.n3(o))
V.na(v)},
mY:{"^":"n:9;a,b,c",
$1:function(a){var z,y,x,w,v,u,t
z=H.k(H.f(a,"$isu"),"$iseJ").c
y=this.a
x=this.b.ap(0,z,null)
if(!J.O(y.d,x)){w=y.d
v=w==null
u=x==null
if(!(!v&&u))v=v&&!u
else v=!0
if(v)y.a=null
y.d=x
x=new D.H("colorMatrix",w,x,y,[V.an])
x.b=!0
y.a_(x)}t=V.iD(this.c.ap(0,z,null))
if(!J.O(y.b,t)){x=y.b
w=x==null&&!0
if(w)y.a=null
y.b=t
x=new D.H("texture2DMatrix",x,t,y,[V.bH])
x.b=!0
y.a_(x)}}},
mZ:{"^":"n:0;a",
$0:function(){this.a.saf(0,F.dz(1,null,null,1))}},
n_:{"^":"n:0;a",
$0:function(){this.a.saf(0,F.fX(1,!0,!0,1,40,1))}},
n0:{"^":"n:0;a",
$0:function(){this.a.saf(0,F.fX(1,!0,!1,1,40,0))}},
n1:{"^":"n:0;a",
$0:function(){this.a.saf(0,F.nc(6,null,6))}},
n2:{"^":"n:0;a",
$0:function(){this.a.saf(0,F.hd(30,1,15,0.5))}},
n3:{"^":"n:0;a",
$0:function(){this.a.saf(0,F.mV(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ei.prototype
return J.eh.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.ej.prototype
if(typeof a=="boolean")return J.i4.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.aG=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.cf=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.mL=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cc.prototype
return a}
J.mM=function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cc.prototype
return a}
J.dC=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cc.prototype
return a}
J.aV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cF(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.he=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mL(a).O(a,b)}
J.dJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mM(a).k(a,b)}
J.dK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aG(a).j(a,b)}
J.cK=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h3(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cf(a).m(a,b,c)}
J.hf=function(a,b){return J.dC(a).H(a,b)}
J.hg=function(a,b,c){return J.aV(a).ft(a,b,c)}
J.hh=function(a,b,c,d){return J.aV(a).dc(a,b,c,d)}
J.hi=function(a,b){return J.dC(a).W(a,b)}
J.cL=function(a,b,c){return J.aG(a).ho(a,b,c)}
J.cM=function(a,b){return J.cf(a).J(a,b)}
J.hj=function(a,b,c,d){return J.cf(a).ay(a,b,c,d)}
J.dL=function(a,b){return J.cf(a).K(a,b)}
J.dM=function(a){return J.aV(a).gca(a)}
J.b2=function(a){return J.K(a).gU(a)}
J.by=function(a){return J.cf(a).ga0(a)}
J.au=function(a){return J.aG(a).gl(a)}
J.hk=function(a,b){return J.aV(a).i9(a,b)}
J.hl=function(a,b){return J.aV(a).sa1(a,b)}
J.ab=function(a){return J.K(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cR.prototype
C.G=J.r.prototype
C.a=J.b9.prototype
C.H=J.eh.prototype
C.d=J.ei.prototype
C.I=J.ej.prototype
C.h=J.c4.prototype
C.b=J.c5.prototype
C.P=J.c6.prototype
C.V=H.d7.prototype
C.W=W.iJ.prototype
C.y=J.iO.prototype
C.X=P.da.prototype
C.q=J.cc.prototype
C.z=W.bQ.prototype
C.A=W.kw.prototype
C.C=new P.hr(!1)
C.B=new P.hq(C.C)
C.D=new P.iM()
C.E=new P.kh()
C.j=new P.li()
C.c=new A.ck(0,"ColorSourceType.None")
C.i=new A.ck(1,"ColorSourceType.Solid")
C.e=new A.ck(2,"ColorSourceType.Texture2D")
C.f=new A.ck(3,"ColorSourceType.TextureCube")
C.r=new P.b6(0)
C.F=new P.b6(5e6)
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
C.t=function(hooks) { return hooks; }

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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=H.e(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.w=H.e(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.x=H.e(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.ak([]),[P.i])
C.U=new H.hD(0,{},C.Q,[P.i,P.i])
C.k=new P.ka(!1)
$.az=0
$.bz=null
$.dR=null
$.du=!1
$.h1=null
$.fT=null
$.h9=null
$.cE=null
$.cH=null
$.dD=null
$.br=null
$.bW=null
$.bX=null
$.dv=!1
$.T=C.j
$.e6=null
$.e5=null
$.e4=null
$.e3=null
$.o=V.iC()
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
I.$lazy(y,x,w)}})(["e2","$get$e2",function(){return H.h0("_$dart_dartClosure")},"cY","$get$cY",function(){return H.h0("_$dart_js")},"eV","$get$eV",function(){return H.aD(H.cw({
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aD(H.cw({$method$:null,
toString:function(){return"$receiver$"}}))},"eX","$get$eX",function(){return H.aD(H.cw(null))},"eY","$get$eY",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aD(H.cw(void 0))},"f2","$get$f2",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f_","$get$f_",function(){return H.aD(H.f0(null))},"eZ","$get$eZ",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"f4","$get$f4",function(){return H.aD(H.f0(void 0))},"f3","$get$f3",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.kx()},"bY","$get$bY",function(){return[]},"fh","$get$fh",function(){return P.ke()},"fn","$get$fn",function(){return H.iH(H.bq(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fJ","$get$fJ",function(){return P.j6("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fP","$get$fP",function(){return P.mh()},"e1","$get$e1",function(){return{}},"fk","$get$fk",function(){return Z.ar(0)},"fi","$get$fi",function(){return Z.ar(511)},"aQ","$get$aQ",function(){return Z.ar(1)},"aP","$get$aP",function(){return Z.ar(2)},"aO","$get$aO",function(){return Z.ar(4)},"aR","$get$aR",function(){return Z.ar(8)},"aS","$get$aS",function(){return Z.ar(16)},"bO","$get$bO",function(){return Z.ar(32)},"bP","$get$bP",function(){return Z.ar(64)},"fj","$get$fj",function(){return Z.ar(96)},"bo","$get$bo",function(){return Z.ar(128)},"aN","$get$aN",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aJ]]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:P.G,args:[F.ah,P.q,P.q]},{func:1,ret:P.G,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.G,args:[W.ac]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:V.Y,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.j,D.a3]]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.m,[P.j,U.af]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.j,V.an]]},{func:1,ret:P.G,args:[,]},{func:1,ret:W.a2,args:[W.L]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.av]},{func:1,ret:P.ai,args:[W.L]},{func:1,ret:P.G,args:[P.W]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ai,args:[P.q,P.q]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:-1,args:[W.bQ]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ai,args:[[P.j,D.a3]]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,args:[,P.i]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.Q,args:[P.m]},{func:1,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:P.G,args:[P.bk]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.nf(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(K.h6,[])
else K.h6([])})})()
//# sourceMappingURL=test.dart.js.map
