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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dv(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dw=function(){}
var dart=[["","",,H,{"^":"",nA:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dz==null){H.mG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c5("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cY()]
if(v!=null)return v
v=H.mL(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cY(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
t:{"^":"b;",
q:function(a,b){return a===b},
gT:function(a){return H.bJ(a)},
i:["er",function(a){return"Instance of '"+H.be(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hT:{"^":"t;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isai:1},
ea:{"^":"t;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isG:1},
cZ:{"^":"t;",
gT:function(a){return 0},
i:["es",function(a){return String(a)}]},
iD:{"^":"cZ;"},
c6:{"^":"cZ;"},
c2:{"^":"cZ;",
i:function(a){var z=a[$.$get$dX()]
if(z==null)return this.es(a)
return"JavaScript function for "+H.k(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscU:1},
b9:{"^":"t;$ti",
h:function(a,b){H.y(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.B("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.r(P.B("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b3(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.k(a[y]))
return z.join(b)},
hH:function(a){return this.C(a,"")},
hz:function(a,b,c,d){var z,y,x
H.y(b,d)
H.l(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b3(a))}return y},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bH:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hR())},
ax:function(a,b,c,d){var z
H.y(d,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.N(0,c);z=z.w(0,1))a[z]=d},
aU:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.cW(a,"[","]")},
gZ:function(a){return new J.aB(a,a.length,0,[H.x(a,0)])},
gT:function(a){return H.bJ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cd(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b>=a.length||b<0)throw H.a(H.aH(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.y(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b>=a.length||b<0)throw H.a(H.aH(a,b))
a[b]=c},
$isi:1,
$isc:1,
p:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.e8(new Array(a),b)},
e8:function(a,b){return J.bD(H.d(a,[b]))},
bD:function(a){H.bX(a)
a.fixed$length=Array
return a}}},
nz:{"^":"b9;$ti"},
aB:{"^":"b;a,b,c,0d,$ti",
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
c0:{"^":"t;",
ghG:function(a){return a===0?1/a<0:a<0},
dT:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
eh:function(a,b){var z
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghG(a))return"-"+z
return z},
b7:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.B("Unexpected toString result: "+z))
x=J.aI(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a*b},
bc:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ew:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dj(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dj(a,b)},
dj:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.dh(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fM:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dh(a,b)},
dh:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isq:1,
$isa_:1},
e9:{"^":"c0;",$iso:1},
hU:{"^":"c0;"},
c1:{"^":"t;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aH(a,b))
if(b<0)throw H.a(H.aH(a,b))
if(b>=a.length)H.r(H.aH(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aH(a,b))
return a.charCodeAt(b)},
w:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cd(b,null,null))
return a+b},
aQ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a4:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
if(typeof c!=="number")return c.N()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.a(P.cs(b,null,null))
if(b>c)throw H.a(P.cs(b,null,null))
if(c>a.length)throw H.a(P.cs(c,null,null))
return a.substring(b,c)},
az:function(a,b){return this.t(a,b,null)},
j:function(a,b){var z,y
H.C(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hU:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
a7:function(a,b){return this.hU(a,b," ")},
e0:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e_:function(a,b){return this.e0(a,b,0)},
ho:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.h0(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseo:1,
$ish:1}}],["","",,H,{"^":"",
cF:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hR:function(){return new P.jg("No element")},
a3:{"^":"jL;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascv:function(){return[P.o]},
$asw:function(){return[P.o]},
$asi:function(){return[P.o]},
$asc:function(){return[P.o]}},
hC:{"^":"i;"},
ef:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aI(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b3(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
ih:{"^":"i;a,b,$ti",
gZ:function(a){return new H.ii(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.av(this.a)},
I:function(a,b){return this.b.$1(J.cM(this.a,b))},
$asi:function(a,b){return[b]}},
ii:{"^":"cX;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascX:function(a,b){return[b]}},
kh:{"^":"i;a,b,$ti",
gZ:function(a){return new H.ki(J.by(this.a),this.b,this.$ti)}},
ki:{"^":"cX;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
ci:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.y(c,H.ak(this,"cv",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){H.y(d,H.ak(this,"cv",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jL:{"^":"cm+cv;"}}],["","",,H,{"^":"",
hr:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
my:function(a){return init.types[H.C(a)]},
fU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isF},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bJ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iN:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
be:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.P(a).$isc6){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.az(w,1)
r=H.dA(H.bX(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iF:function(){if(!!self.location)return self.location.href
return},
eq:function(a){var z,y,x,w,v
H.bX(a)
z=J.av(a)
if(typeof z!=="number")return z.eo()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iO:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.eq(z)},
er:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.iO(a)}return H.eq(a)},
iP:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eo()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cq:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iM:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iK:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iG:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iH:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iJ:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iL:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iI:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
n:function(a){throw H.a(H.ah(a))},
e:function(a,b){if(a==null)J.av(a)
throw H.a(H.aH(a,b))},
aH:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.C(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cs(b,"index",null)},
ms:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
ah:function(a){return new P.aJ(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.en()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h2})
z.name=""}else z.toString=H.h2
return z},
h2:function(){return J.a9(this.dartException)},
r:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b3(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d_(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.em(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eN()
u=$.$get$eO()
t=$.$get$eP()
s=$.$get$eQ()
r=$.$get$eU()
q=$.$get$eV()
p=$.$get$eS()
$.$get$eR()
o=$.$get$eX()
n=$.$get$eW()
m=v.a6(y)
if(m!=null)return z.$1(H.d_(H.M(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.d_(H.M(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.em(H.M(y),m))}}return z.$1(new H.jK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ex()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ex()
return a},
bw:function(a){var z
if(a==null)return new H.fp(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fp(a)},
mv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mI:function(a,b,c,d,e,f){H.f(a,"$iscU")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=z
return z},
hn:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$isc){z.$reflectionInfo=d
x=H.iU(z).r}else x=d
w=e?Object.create(new H.jh().constructor.prototype):Object.create(new H.cP(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.w()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.my,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dM:H.cQ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
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
hk:function(a,b,c,d){var z=H.cQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hm(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hk(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.w()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ce("self")
$.bz=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.w()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ce("self")
$.bz=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hl:function(a,b,c,d){var z,y
z=H.cQ
y=H.dM
switch(b?-1:a){case 0:throw H.a(H.j3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hm:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ce("self")
$.bz=z}y=$.dL
if(y==null){y=H.ce("receiver")
$.dL=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hl(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aC
if(typeof y!=="number")return y.w()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.w()
$.aC=y+1
return new Function(z+y+"}")()},
dv:function(a,b,c,d,e,f,g){var z,y
z=J.bD(H.bX(b))
H.C(c)
y=!!J.P(d).$isc?J.bD(d):d
return H.hn(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aA(a,"String"))},
mt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"num"))},
fL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aA(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aA(a,"int"))},
fZ:function(a,b){throw H.a(H.aA(a,H.M(b).substring(3)))},
mZ:function(a,b){var z=J.aI(b)
throw H.a(H.hj(a,z.t(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.fZ(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.mZ(a,b)},
bX:function(a){if(a==null)return a
if(!!J.P(a).$isc)return a
throw H.a(H.aA(a,"List"))},
fW:function(a,b){if(a==null)return a
if(!!J.P(a).$isc)return a
if(J.P(a)[b])return a
H.fZ(a,b)},
fQ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fQ(J.P(a))
if(z==null)return!1
y=H.fT(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dr)return a
$.dr=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.aA(a,z)
throw H.a(y)}finally{$.dr=!1}},
dx:function(a,b){if(a!=null&&!H.du(a,b))H.r(H.aA(a,H.cb(b)))
return a},
fG:function(a){var z
if(a instanceof H.m){z=H.fQ(J.P(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.be(a)},
n5:function(a){throw H.a(new P.hv(H.M(a)))},
fR:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
ox:function(a,b,c){return H.bx(a["$as"+H.k(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.M(c)
H.C(d)
z=H.bx(a["$as"+H.k(c)],H.b0(b))
return z==null?null:z[d]},
ak:function(a,b,c){var z
H.M(b)
H.C(c)
z=H.bx(a["$as"+H.k(b)],H.b0(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.C(b)
z=H.b0(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.v(b,"$isc",[P.h],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dA(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.k(b[y])}if('func' in a)return H.ma(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ma:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.w(t,b[r])
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
for(z=H.mu(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dA:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.h],"$asc")
if(a==null)return""
z=new P.ap("")
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
bW:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.P(a)
if(y[b]==null)return!1
return H.fJ(H.bx(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.M(b)
H.bX(c)
H.M(d)
if(a==null)return a
z=H.bW(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dA(c,0,null)
throw H.a(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
ov:function(a,b,c){return a.apply(b,H.bx(J.P(b)["$as"+H.k(c)],H.b0(b)))},
fV:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fV(z)}return!1},
du:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fV(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.du(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.P(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.at(y,null,b,null)
return z},
y:function(a,b){if(a!=null&&!H.du(a,b))throw H.a(H.aA(a,H.cb(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fT(a,b,c,d)
if('func' in a)return c.builtin$cls==="cU"
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
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bx(r,z),b,u,d)},
fT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mW(m,b,l,d)},
mW:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
ow:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mL:function(a){var z,y,x,w,v,u
z=H.M($.fS.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fI.$2(a,z))
if(z!=null){y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cH(x)
$.cD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cG[z]=x
return x}if(v==="-"){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fY(a,x)
if(v==="*")throw H.a(P.c5(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fY(a,x)},
fY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dB(a,!1,null,!!a.$isF)},
mV:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dB(z,c,null,null)},
mG:function(){if(!0===$.dz)return
$.dz=!0
H.mH()},
mH:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.mC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h_.$1(v)
if(u!=null){t=H.mV(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mC:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bt(C.I,H.bt(C.N,H.bt(C.u,H.bt(C.u,H.bt(C.M,H.bt(C.J,H.bt(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fS=new H.mD(v)
$.fI=new H.mE(u)
$.h_=new H.mF(t)},
bt:function(a,b){return a(b)||b},
h0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hq:{"^":"b;$ti",
i:function(a){return P.d1(this)},
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
return H.hr()},
$isJ:1},
hs:{"^":"hq;a,b,c,$ti",
gl:function(a){return this.a},
bl:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bl(0,b))return
return this.d5(b)},
d5:function(a){return this.b[H.M(a)]},
K:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.l(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.d5(v),z))}}},
iT:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bD(z)
y=z[0]
x=z[1]
return new H.iT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jx:{"^":"b;a,b,c,d,e,f",
a6:function(a){var z,y,x
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
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iA:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
em:function(a,b){return new H.iA(a,b==null?null:b.method)}}},
hX:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
p:{
d_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hX(a,y,z?null:b.receiver)}}},
jK:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n8:{"^":"m:17;a",
$1:function(a){if(!!J.P(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fp:{"^":"b;a,0b",
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
gem:function(){return this},
$iscU:1,
gem:function(){return this}},
eE:{"^":"m;"},
jh:{"^":"eE;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cP:{"^":"eE;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bJ(this.a)
else y=typeof z!=="object"?J.bY(z):H.bJ(z)
return(y^H.bJ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.be(z)+"'")},
p:{
cQ:function(a){return a.a},
dM:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cP("self","target","receiver","name")
y=J.bD(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jy:{"^":"a5;a",
i:function(a){return this.a},
p:{
aA:function(a,b){return new H.jy("TypeError: "+H.k(P.ch(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
hi:{"^":"a5;a",
i:function(a){return this.a},
p:{
hj:function(a,b){return new H.hi("CastError: "+H.k(P.ch(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
j2:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
p:{
j3:function(a){return new H.j2(a)}}},
aX:{"^":"id;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gao:function(a){return new H.i2(this,[H.x(this,0)])},
bl:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d2(y,b)}else return this.hD(b)},
hD:function(a){var z=this.d
if(z==null)return!1
return this.ct(this.bQ(z,this.cs(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.hE(b)},
hE:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bQ(z,this.cs(a))
x=this.ct(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bV()
this.b=z}this.cW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bV()
this.c=y}this.cW(y,b,c)}else this.hF(b,c)},
hF:function(a,b){var z,y,x,w
H.y(a,H.x(this,0))
H.y(b,H.x(this,1))
z=this.d
if(z==null){z=this.bV()
this.d=z}y=this.cs(a)
x=this.bQ(z,y)
if(x==null)this.c1(z,y,[this.bW(a,b)])
else{w=this.ct(x,a)
if(w>=0)x[w].b=b
else x.push(this.bW(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b3(this))
z=z.c}},
cW:function(a,b,c){var z
H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
z=this.be(a,b)
if(z==null)this.c1(a,b,this.bW(b,c))
else z.b=c},
f1:function(){this.r=this.r+1&67108863},
bW:function(a,b){var z,y
z=new H.i1(H.y(a,H.x(this,0)),H.y(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f1()
return z},
cs:function(a){return J.bY(a)&0x3ffffff},
ct:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.d1(this)},
be:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
eV:function(a,b){delete a[b]},
d2:function(a,b){return this.be(a,b)!=null},
bV:function(){var z=Object.create(null)
this.c1(z,"<non-identifier-key>",z)
this.eV(z,"<non-identifier-key>")
return z},
$ised:1},
i1:{"^":"b;a,b,0c,0d"},
i2:{"^":"hC;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.i3(z,z.r,this.$ti)
y.c=z.e
return y}},
i3:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b3(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mD:{"^":"m:17;a",
$1:function(a){return this.a(a)}},
mE:{"^":"m:36;a",
$2:function(a,b){return this.a(a,b)}},
mF:{"^":"m:28;a",
$1:function(a){return this.a(H.M(a))}},
hV:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseo:1,
$isiV:1,
p:{
hW:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.W("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mu:function(a){return J.e8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
br:function(a){return a},
iw:function(a){return new Int8Array(a)},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aH(b,a))},
m4:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ms(a,b,c))
return b},
el:{"^":"t;",$isel:1,"%":"ArrayBuffer"},
d7:{"^":"t;",$isd7:1,"%":"DataView;ArrayBufferView;d6|fj|fk|ix|fl|fm|aY"},
d6:{"^":"d7;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dw},
ix:{"^":"fk;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mt(c)
H.aG(b,a,a.length)
a[b]=c},
$asci:function(){return[P.q]},
$asw:function(){return[P.q]},
$isi:1,
$asi:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aY:{"^":"fm;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aG(b,a,a.length)
a[b]=c},
$asci:function(){return[P.o]},
$asw:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}},
nJ:{"^":"aY;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nK:{"^":"aY;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nL:{"^":"aY;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nM:{"^":"aY;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nN:{"^":"aY;",
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nO:{"^":"aY;",
gl:function(a){return a.length},
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"aY;",
gl:function(a){return a.length},
k:function(a,b){H.aG(b,a,a.length)
return a[b]},
bH:function(a,b,c){return new Uint8Array(a.subarray(b,H.m4(b,c,a.length)))},
$isd8:1,
$isR:1,
"%":";Uint8Array"},
fj:{"^":"d6+w;"},
fk:{"^":"fj+ci;"},
fl:{"^":"d6+w;"},
fm:{"^":"fl+ci;"}}],["","",,P,{"^":"",
kk:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mh()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.km(z),1)).observe(y,{childList:true})
return new P.kl(z,y,x)}else if(self.setImmediate!=null)return P.mi()
return P.mj()},
ok:[function(a){self.scheduleImmediate(H.bu(new P.kn(H.l(a,{func:1,ret:-1})),0))},"$1","mh",4,0,12],
ol:[function(a){self.setImmediate(H.bu(new P.ko(H.l(a,{func:1,ret:-1})),0))},"$1","mi",4,0,12],
om:[function(a){P.de(C.q,H.l(a,{func:1,ret:-1}))},"$1","mj",4,0,12],
de:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a1(a.a,1000)
return P.lo(z<0?0:z,b)},
eI:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bl]})
z=C.h.a1(a.a,1000)
return P.lp(z<0?0:z,b)},
md:function(a,b){if(H.c8(a,{func:1,args:[P.b,P.az]}))return b.i2(a,null,P.b,P.az)
if(H.c8(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mc:function(){var z,y
for(;z=$.bs,z!=null;){$.bU=null
y=z.b
$.bs=y
if(y==null)$.bT=null
z.a.$0()}},
ou:[function(){$.ds=!0
try{P.mc()}finally{$.bU=null
$.ds=!1
if($.bs!=null)$.$get$dl().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fd(H.l(a,{func:1,ret:-1}))
if($.bs==null){$.bT=z
$.bs=z
if(!$.ds)$.$get$dl().$1(P.fK())}else{$.bT.b=z
$.bT=z}},
mg:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bs
if(z==null){P.fF(a)
$.bU=$.bT
return}y=new P.fd(a)
x=$.bU
if(x==null){y.b=z
$.bU=y
$.bs=y}else{y.b=x.b
x.b=y
$.bU=y
if(y.b==null)$.bT=y}},
n_:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.T
if(C.j===y){P.cC(null,null,C.j,a)
return}y.toString
P.cC(null,null,y,H.l(y.ca(a),z))},
eH:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.T
if(y===C.j){y.toString
return P.de(a,b)}return P.de(a,H.l(y.ca(b),z))},
ju:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bl]}
H.l(b,z)
y=$.T
if(y===C.j){y.toString
return P.eI(a,b)}x=y.ds(b,P.bl)
$.T.toString
return P.eI(a,H.l(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.mg(new P.me(z,e))},
fB:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mf:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cC:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ca(d):c.hk(d,-1)
P.fF(d)},
km:{"^":"m:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kl:{"^":"m:38;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kn:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ko:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fs:{"^":"b;a,0b,c",
eI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.lr(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lq(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbl:1,
p:{
lo:function(a,b){var z=new P.fs(!0,0)
z.eI(a,b)
return z},
lp:function(a,b){var z=new P.fs(!1,0)
z.eJ(a,b)
return z}}},
lr:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lq:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ew(w,x)}z.c=y
this.d.$1(z)}},
bq:{"^":"b;0a,b,c,d,e,$ti",
hL:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.l(this.d,{func:1,ret:P.ai,args:[P.b]}),a.a,P.ai,P.b)},
hC:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.b,P.az]}))return H.dx(w.ia(z,a.a,a.b,null,y,P.az),x)
else return H.dx(w.cH(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;di:a<,b,0fG:c<,$ti",
eg:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.md(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cX(new P.bq(x,w,a,b,[z,c]))
return x},
ie:function(a,b){return this.eg(a,null,b)},
cX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbq")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.l(new P.kD(this,a),{func:1,ret:-1}))}},
dd:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbq")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.dd(a)
return}this.a=y
this.c=u.c}z.a=this.bh(a)
y=this.b
y.toString
P.cC(null,null,y,H.l(new P.kI(z,this),{func:1,ret:-1}))}},
bY:function(){var z=H.f(this.c,"$isbq")
this.c=null
return this.bh(z)},
bh:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d_:function(a){var z,y,x,w
z=H.x(this,0)
H.dx(a,{futureOr:1,type:z})
y=this.$ti
x=H.bW(a,"$isbC",y,"$asbC")
if(x){z=H.bW(a,"$isaT",y,null)
if(z)P.fg(a,this)
else P.kE(a,this)}else{w=this.bY()
H.y(a,z)
this.a=4
this.c=a
P.bP(this,w)}},
bM:[function(a,b){var z
H.f(b,"$isaz")
z=this.bY()
this.a=8
this.c=new P.am(a,b)
P.bP(this,z)},function(a){return this.bM(a,null)},"iq","$2","$1","geR",4,2,29],
$isbC:1,
p:{
kE:function(a,b){var z,y,x
b.a=1
try{a.eg(new P.kF(b),new P.kG(b),null)}catch(x){z=H.au(x)
y=H.bw(x)
P.n_(new P.kH(b,z,y))}},
fg:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.bY()
b.a=a.a
b.c=a.c
P.bP(b,y)}else{y=H.f(b.c,"$isbq")
b.a=2
b.c=a
a.dd(y)}},
bP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isam")
y=y.b
u=v.a
t=v.b
y.toString
P.cB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cB(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kL(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kK(x,b,r).$0()}else if((y&2)!==0)new P.kJ(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.P(y).$isbC){if(y.a>=4){n=H.f(t.c,"$isbq")
t.c=null
b=t.bh(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fg(y,t)
return}}m=b.b
n=H.f(m.c,"$isbq")
m.c=null
b=m.bh(n)
y=x.a
u=x.b
if(!y){H.y(u,H.x(m,0))
m.a=4
m.c=u}else{H.f(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kD:{"^":"m:0;a,b",
$0:function(){P.bP(this.a,this.b)}},
kI:{"^":"m:0;a,b",
$0:function(){P.bP(this.b,this.a.a)}},
kF:{"^":"m:25;a",
$1:function(a){var z=this.a
z.a=0
z.d_(a)}},
kG:{"^":"m:52;a",
$2:function(a,b){this.a.bM(a,H.f(b,"$isaz"))},
$1:function(a){return this.$2(a,null)}},
kH:{"^":"m:0;a,b,c",
$0:function(){this.a.bM(this.b,this.c)}},
kL:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ee(H.l(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bw(v)
if(this.d){w=H.f(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.P(z).$isbC){if(z instanceof P.aT&&z.gdi()>=4){if(z.gdi()===8){w=this.b
w.b=H.f(z.gfG(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ie(new P.kM(t),null)
w.a=!1}}},
kM:{"^":"m:33;a",
$1:function(a){return this.a}},
kK:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.y(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cH(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bw(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
kJ:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isam")
w=this.c
if(w.hL(z)&&w.e!=null){v=this.b
v.b=w.hC(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bw(u)
w=H.f(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
fd:{"^":"b;a,0b"},
db:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.o])
z.a=0
this.hK(new P.jk(z,this),!0,new P.jl(z,y),y.geR())
return y}},
jk:{"^":"m;a,b",
$1:function(a){H.y(a,H.ak(this.b,"db",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ak(this.b,"db",0)]}}},
jl:{"^":"m:0;a,b",
$0:function(){this.b.d_(this.a.a)}},
eA:{"^":"b;$ti"},
jj:{"^":"b;"},
bl:{"^":"b;"},
am:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa5:1},
lT:{"^":"b;",$isoj:1},
me:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.en()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l6:{"^":"lT;",
ib:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bw(x)
P.cB(null,null,this,z,H.f(y,"$isaz"))}},
ic:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bw(x)
P.cB(null,null,this,z,H.f(y,"$isaz"))}},
hk:function(a,b){return new P.l8(this,H.l(a,{func:1,ret:b}),b)},
ca:function(a){return new P.l7(this,H.l(a,{func:1,ret:-1}))},
ds:function(a,b){return new P.l9(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ee:function(a,b){H.l(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cH:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.T===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
ia:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mf(null,null,this,a,b,c,d,e,f)},
i2:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
l8:{"^":"m;a,b,c",
$0:function(){return this.a.ee(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l7:{"^":"m:3;a,b",
$0:function(){return this.a.ib(this.b)}},
l9:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.ic(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i4:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
i5:function(a,b,c){H.bX(a)
return H.v(H.mv(a,new H.aX(0,0,[b,c])),"$ised",[b,c],"$ased")},
ee:function(a,b){return new H.aX(0,0,[a,b])},
i8:function(a,b,c,d){return new P.kT(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bV()
C.a.h(y,a)
try{P.mb(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eB(b,H.fW(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cW:function(a,b,c){var z,y,x
if(P.dt(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$bV()
C.a.h(y,a)
try{x=z
x.a=P.eB(x.gaE(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dt:function(a){var z,y
for(z=0;y=$.$get$bV(),z<y.length;++z)if(a===y[z])return!0
return!1},
mb:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.k(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
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
if(P.dt(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$bV(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dF(a,new P.ie(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bV()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kT:{"^":"kN;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fi(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.y(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dn()
this.b=z}return this.cY(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dn()
this.c=y}return this.cY(y,b)}else return this.eK(0,b)},
eK:function(a,b){var z,y,x
H.y(b,H.x(this,0))
z=this.d
if(z==null){z=P.dn()
this.d=z}y=this.d0(b)
x=z[y]
if(x==null)z[y]=[this.bL(b)]
else{if(this.d6(x,b)>=0)return!1
x.push(this.bL(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.de(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.de(this.c,b)
else return this.fz(0,b)},
fz:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eZ(z,b)
x=this.d6(y,b)
if(x<0)return!1
this.dk(y.splice(x,1)[0])
return!0},
cY:function(a,b){H.y(b,H.x(this,0))
if(H.f(a[b],"$isdm")!=null)return!1
a[b]=this.bL(b)
return!0},
de:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdm")
if(z==null)return!1
this.dk(z)
delete a[b]
return!0},
cZ:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.dm(H.y(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cZ()
return z},
dk:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cZ()},
d0:function(a){return J.bY(a)&0x3ffffff},
eZ:function(a,b){return a[this.d0(b)]},
d6:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
p:{
dn:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dm:{"^":"b;a,0b,0c"},
kU:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b3(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.y(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fi:function(a,b,c){var z=new P.kU(a,b,[c])
z.c=a.e
return z}}},
kN:{"^":"j4;"},
i7:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))}},
cm:{"^":"kV;",$isi:1,$isc:1},
w:{"^":"b;$ti",
gZ:function(a){return new H.ef(a,this.gl(a),0,[H.b_(this,a,"w",0)])},
I:function(a,b){return this.k(a,b)},
ih:function(a,b){var z,y,x
z=H.d([],[H.b_(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
ig:function(a){return this.ih(a,!0)},
ax:function(a,b,c,d){var z
H.y(d,H.b_(this,a,"w",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cW(a,"[","]")}},
id:{"^":"aj;"},
ie:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
aj:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b_(this,a,"aj",0),H.b_(this,a,"aj",1)]})
for(z=J.by(this.gao(a));z.G();){y=z.gR(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.av(this.gao(a))},
i:function(a){return P.d1(a)},
$isJ:1},
lw:{"^":"b;$ti",
m:function(a,b,c){H.y(b,H.x(this,0))
H.y(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
ig:{"^":"b;$ti",
k:function(a,b){return J.dE(this.a,b)},
m:function(a,b,c){J.cK(this.a,H.y(b,H.x(this,0)),H.y(c,H.x(this,1)))},
K:function(a,b){J.dF(this.a,H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.av(this.a)},
i:function(a){return J.a9(this.a)},
$isJ:1},
f3:{"^":"lx;a,$ti"},
j6:{"^":"b;$ti",
i:function(a){return P.cW(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dH("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=P.fi(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isi:1},
j4:{"^":"j6;"},
kV:{"^":"b+w;"},
lx:{"^":"ig+lw;$ti"}}],["","",,P,{"^":"",hf:{"^":"bZ;a",
hO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$fe()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cF(C.b.F(b,s))
o=H.cF(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
w.a+=C.b.t(b,x,y)
w.a+=H.cq(r)
x=s
continue}}throw H.a(P.W("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dK(b,u,d,v,t,k)
else{j=C.h.bc(k-1,4)+1
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aQ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dK(b,u,d,v,t,i)
else{j=C.h.bc(i,4)
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aQ(b,d,d,j===2?"==":"=")}return b},
$asbZ:function(){return[[P.c,P.o],P.h]},
p:{
dK:function(a,b,c,d,e,f){if(C.h.bc(f,4)!==0)throw H.a(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.W("Invalid base64 padding, more than two '=' characters",a,b))}}},hg:{"^":"bA;a",
$asbA:function(){return[[P.c,P.o],P.h]}},bZ:{"^":"b;$ti"},bA:{"^":"jj;$ti"},hE:{"^":"bZ;",
$asbZ:function(){return[P.h,[P.c,P.o]]}},jY:{"^":"hE;a",
ghw:function(){return C.F}},k4:{"^":"bA;",
aV:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lS(0,0,x)
if(w.eX(a,b,z)!==z)w.dm(J.h7(a,z-1),0)
return C.U.bH(x,0,w.b)},
cg:function(a){return this.aV(a,0,null)},
$asbA:function(){return[P.h,[P.c,P.o]]}},lS:{"^":"b;a,b,c",
dm:function(a,b){var z,y,x,w,v
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
eX:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dm(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jZ:{"^":"bA;a",
aV:function(a,b,c){var z,y,x,w,v
H.v(a,"$isc",[P.o],"$asc")
z=P.k_(!1,a,b,c)
if(z!=null)return z
y=J.av(a)
P.aL(b,c,y,null,null,null)
x=new P.ap("")
w=new P.lP(!1,x,!0,0,0,0)
w.aV(a,b,y)
w.hy(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cg:function(a){return this.aV(a,0,null)},
$asbA:function(){return[[P.c,P.o],P.h]},
p:{
k_:function(a,b,c,d){H.v(b,"$isc",[P.o],"$asc")
if(b instanceof Uint8Array)return P.k0(!1,b,c,d)
return},
k0:function(a,b,c,d){var z,y,x
z=$.$get$f8()
if(z==null)return
y=0===c
if(y&&!0)return P.dj(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.dj(z,b)
return P.dj(z,b.subarray(c,d))},
dj:function(a,b){if(P.k2(b))return
return P.k3(a,b)},
k3:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
k2:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k1:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},lP:{"^":"b;a,b,c,d,e,f",
hy:function(a,b,c){var z
H.v(b,"$isc",[P.o],"$asc")
if(this.e>0){z=P.W("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isc",[P.o],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lR(c)
v=new P.lQ(this,b,c,a)
$label0$0:for(u=J.aI(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bE()
if((r&192)!==128){q=P.W("Bad UTF-8 encoding 0x"+C.h.b7(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.W("Overlong encoding of 0x"+C.h.b7(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.h.b7(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cq(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bF()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.N()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.h.b7(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.W("Bad UTF-8 encoding 0x"+C.h.b7(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lR:{"^":"m:41;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isc",[P.o],"$asc")
z=this.a
for(y=J.aI(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bE()
if((w&127)!==w)return x-b}return z-b}},lQ:{"^":"m:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c4(this.d,a,b)}}}],["","",,P,{"^":"",
ca:function(a,b,c){var z
H.l(b,{func:1,ret:P.o,args:[P.h]})
z=H.iN(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.W(a,null,null))},
hG:function(a){var z=J.P(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.be(a)+"'"},
i9:function(a,b,c,d){var z,y
H.y(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
ia:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gZ(a);x.G();)C.a.h(y,H.y(x.gR(x),c))
if(b)return y
return H.v(J.bD(y),"$isc",z,"$asc")},
c4:function(a,b,c){var z,y
z=P.o
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.N()
z=c<y}else z=!0
return H.er(z?C.a.bH(a,b,c):a)}if(!!J.P(a).$isd8)return H.iP(a,b,P.aL(b,c,a.length,null,null,null))
return P.jm(a,b,c)},
jm:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.o],"$asi")
if(b<0)throw H.a(P.Z(b,0,J.av(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.av(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gR(y))}return H.er(w)},
iW:function(a,b,c){return new H.hV(a,H.hW(a,!1,!0,!1))},
f5:function(){var z=H.iF()
if(z!=null)return P.jQ(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
ch:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hG(a)},
u:function(a){return new P.ff(a)},
ib:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.o]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dC:function(a){H.mY(a)},
jQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f4(b>0||c<c?C.b.t(a,b,c):a,5,null).gej()
else if(y===32)return P.f4(C.b.t(a,z,c),0,null).gej()}x=new Array(8)
x.fixed$length=Array
w=H.d(x,[P.o])
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
if(typeof v!=="number")return v.ij()
if(v>=b)if(P.fD(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.w()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.n(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a4(a,"..",s)))n=r>s+2&&C.b.a4(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a4(a,"file",b)){if(u<=b){if(!C.b.a4(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aQ(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a4(a,"http",b)){if(x&&t+3===s&&C.b.a4(a,"80",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a4(a,"https",b)){if(x&&t+4===s&&C.b.a4(a,"443",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.t(a,b,t)+C.b.t(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.t(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lb(a,v,u,t,s,r,q,o)}return P.ly(a,b,c,v,u,t,s,r,q,o)},
f7:function(a,b){var z=P.h
return C.a.hz(H.d(a.split("&"),[z]),P.ee(z,z),new P.jT(b),[P.J,P.h,P.h])},
jO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jP(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ca(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.bF()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ca(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.bF()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jR(a)
y=new P.jS(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jO(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.h.aH(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
m5:function(){var z,y,x,w,v
z=P.ib(22,new P.m7(),!0,P.R)
y=new P.m6(z)
x=new P.m8()
w=new P.m9()
v=H.f(y.$2(0,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isR")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isR")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isR"),"]",5)
v=H.f(y.$2(9,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isR"),"az",21)
v=H.f(y.$2(21,245),"$isR")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fD:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isc",[P.o],"$asc")
z=$.$get$fE()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ai:{"^":"b;"},
"+bool":0,
an:{"^":"b;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.h.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hw(H.iM(this))
y=P.c_(H.iK(this))
x=P.c_(H.iG(this))
w=P.c_(H.iH(this))
v=P.c_(H.iJ(this))
u=P.c_(H.iL(this))
t=P.hx(H.iI(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hw:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a_;"},
"+double":0,
b6:{"^":"b;a",
j:function(a,b){return new P.b6(C.d.a8(this.a*b))},
N:function(a,b){return C.h.N(this.a,H.f(b,"$isb6").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hB()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.h.a1(y,6e7)%60)
w=z.$1(C.h.a1(y,1e6)%60)
v=new P.hA().$1(y%1e6)
return""+C.h.a1(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
p:{
e2:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hA:{"^":"m:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hB:{"^":"m:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
en:{"^":"a5;",
i:function(a){return"Throw of null."}},
aJ:{"^":"a5;a,b,c,d",
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
u=P.ch(this.b)
return w+v+": "+H.k(u)},
p:{
cc:function(a){return new P.aJ(!1,null,null,a)},
cd:function(a,b,c){return new P.aJ(!0,a,b,c)},
dH:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
cr:{"^":"aJ;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
p:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
hO:{"^":"aJ;e,l:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.h3(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
p:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.av(b))
return new P.hO(b,z,!0,a,c,"Index out of range")}}},
jM:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.jM(a)}}},
jJ:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c5:function(a){return new P.jJ(a)}}},
jg:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hp:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.ch(z))+"."},
p:{
b3:function(a){return new P.hp(a)}}},
iB:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
ex:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hv:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ff:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hM:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.t(w,0,75)+"..."
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
m=""}l=C.b.t(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
p:{
W:function(a,b,c){return new P.hM(a,b,c)}}},
o:{"^":"a_;"},
"+int":0,
i:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.G();)++y
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dH("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
cX:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
J:{"^":"b;$ti"},
G:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"b;"},
"+num":0,
b:{"^":";",
q:function(a,b){return this===b},
gT:function(a){return H.bJ(this)},
i:function(a){return"Instance of '"+H.be(this)+"'"},
toString:function(){return this.i(this)}},
az:{"^":"b;"},
h:{"^":"b;",$iseo:1},
"+String":0,
ap:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso7:1,
p:{
eB:function(a,b,c){var z=J.by(b)
if(!z.G())return a
if(c.length===0){do a+=H.k(z.gR(z))
while(z.G())}else{a+=H.k(z.gR(z))
for(;z.G();)a=a+c+H.k(z.gR(z))}return a}}},
jT:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.v(a,"$isJ",[z,z],"$asJ")
H.M(b)
y=J.aI(b).e_(b,"=")
if(y===-1){if(b!=="")J.cK(a,P.dq(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.az(b,y+1)
z=this.a
J.cK(a,P.dq(x,0,x.length,z,!0),P.dq(w,0,w.length,z,!0))}return a}},
jP:{"^":"m:39;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv4 address, "+a,this.a,b))}},
jR:{"^":"m:27;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jS:{"^":"m:49;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ca(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.N()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cy:{"^":"b;bG:a<,b,c,d,e7:e>,f,r,0x,0y,0z,0Q,0ch",
gek:function(){return this.b},
gcr:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbB:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gcC:function(a){var z=this.f
return z==null?"":z},
gdV:function(){var z=this.r
return z==null?"":z},
cG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.h,null],"$asJ")
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
g=P.dp(g,0,0,h)
return new P.cy(i,j,c,f,d,g,this.r)},
ec:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gcD:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.f3(P.f7(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdW:function(){return this.c!=null},
gdZ:function(){return this.f!=null},
gdX:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
q:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.P(b)
if(!!z.$isdi){y=this.a
x=b.gbG()
if(y==null?x==null:y===x)if(this.c!=null===b.gdW()){y=this.b
x=b.gek()
if(y==null?x==null:y===x){y=this.gcr(this)
x=z.gcr(b)
if(y==null?x==null:y===x){y=this.gbB(this)
x=z.gbB(b)
if(y==null?x==null:y===x)if(this.e===z.ge7(b)){y=this.f
x=y==null
if(!x===b.gdZ()){if(x)y=""
if(y===z.gcC(b)){z=this.r
y=z==null
if(!y===b.gdX()){if(y)z=""
z=z===b.gdV()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdi:1,
p:{
cz:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.o],"$asc")
if(c===C.k){z=$.$get$fy().b
if(typeof b!=="string")H.r(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.ak(c,"bZ",0))
y=c.ghw().cg(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cq(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ly:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lJ(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lK(a,z,e-1):""
x=P.lD(a,e,f,!1)
if(typeof f!=="number")return f.w()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lG(P.ca(C.b.t(a,w,g),new P.lz(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lE(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.N()
t=h<i?P.dp(a,h+1,i,null):null
return new P.cy(j,y,x,v,u,t,i<c?P.lC(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.a(P.W(c,a,b))},
lG:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lD:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.H()
z=c-1
if(C.b.V(a,z)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
P.f6(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f6(a,b,c)
return"["+a+"]"}return P.lM(a,b,c)},
lM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fA(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.b.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bQ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lJ:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.F(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bQ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lA(y?a.toLowerCase():a)},
lA:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lK:function(a,b,c){return P.bR(a,b,c,C.Q)},
lE:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bR(a,b,c,C.y):C.t.iY(d,new P.lF(),P.h).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.lL(w,e,f)},
lL:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.lN(a,!z||c)
return P.lO(a)},
dp:function(a,b,c,d){var z,y
z={}
H.v(d,"$isJ",[P.h,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.cc("Both query and queryParameters specified"))
return P.bR(a,b,c,C.n)}if(d==null)return
y=new P.ap("")
z.a=""
d.K(0,new P.lH(new P.lI(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lC:function(a,b,c){return P.bR(a,b,c,C.n)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cF(y)
v=H.cF(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aH(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cq(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
fu:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.o])
C.a.m(y,0,37)
C.a.m(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.h.fM(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c4(y,0,null)},
bR:function(a,b,c,d){var z=P.fz(a,b,c,H.v(d,"$isc",[P.o],"$asc"),!1)
return z==null?C.b.t(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isc",[P.o],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.N()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fA(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bQ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.ap("")
w.a+=C.b.t(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.N()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.a3(a,"."))return!0
return C.b.e_(a,"/.")!==-1},
lO:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.d([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lN:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
z=H.d([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.fv(z[0]))}return C.a.C(z,"/")},
fv:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fw(J.h4(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.t(a,0,y)+"%3A"+C.b.az(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lB:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cc("Invalid URL encoding"))}}return z},
dq:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dy(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.t(a,b,c)
else u=new H.a3(y.t(a,b,c))}else{u=H.d([],[P.o])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.cc("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cc("Truncated URI"))
C.a.h(u,P.lB(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isc",[P.o],"$asc")
return new P.jZ(!1).cg(u)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
lz:{"^":"m:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.w()
throw H.a(P.W("Invalid port",this.a,z+1))}},
lF:{"^":"m:47;",
$1:function(a){return P.cz(C.S,a,C.k,!1)}},
lI:{"^":"m:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cz(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cz(C.p,b,C.k,!0))}}},
lH:{"^":"m:43;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.by(H.fW(b,"$isi")),y=this.a;z.G();)y.$2(a,H.M(z.gR(z)))}},
jN:{"^":"b;a,b,c",
gej:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.e0(y,"?",z)
w=y.length
if(x>=0){v=P.bR(y,x+1,w,C.n)
w=x}else v=null
z=new P.kt(this,"data",null,null,null,P.bR(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.W("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.W("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.b.a4(a,"base64",t+1))throw H.a(P.W("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hO(0,a,s,y)
else{r=P.fz(a,s,y,C.n,!0)
if(r!=null)a=C.b.aQ(a,s,y,r)}return new P.jN(a,z,c)}}},
m7:{"^":"m:51;",
$1:function(a){return new Uint8Array(96)}},
m6:{"^":"m:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.h8(z,0,96,b)
return z}},
m8:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
m9:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lb:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdW:function(){return this.c>0},
gdY:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.w()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gdZ:function(){var z=this.f
if(typeof z!=="number")return z.N()
return z<this.r},
gdX:function(){return this.r<this.a.length},
gd7:function(){return this.b===4&&C.b.a3(this.a,"http")},
gd8:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbG:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd7()){this.x="http"
z="http"}else if(this.gd8()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
gek:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gcr:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbB:function(a){var z
if(this.gdY()){z=this.d
if(typeof z!=="number")return z.w()
return P.ca(C.b.t(this.a,z+1,this.e),null,null)}if(this.gd7())return 80
if(this.gd8())return 443
return 0},
ge7:function(a){return C.b.t(this.a,this.e,this.f)},
gcC:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.N()
return z<y?C.b.t(this.a,z+1,y):""},
gdV:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.az(y,z+1):""},
gcD:function(){var z=this.f
if(typeof z!=="number")return z.N()
if(z>=this.r)return C.T
z=P.h
return new P.f3(P.f7(this.gcC(this),C.k),[z,z])},
cG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.h,null],"$asJ")
i=this.gbG()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.gdY()?this.gbB(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dp(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.az(y,x+1)
return new P.cy(i,j,c,f,d,g,b)},
ec:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.P(b)
if(!!z.$isdi)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdi:1},
kt:{"^":"cy;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dR:function(a,b){var z=document.createElement("canvas")
return z},
hD:function(a){H.f(a,"$isaa")
return"wheel"},
hP:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise7")
try{J.ha(z,a)}catch(x){H.au(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fh:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.ds(a,b)},
ab:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n9:{"^":"t;0l:length=","%":"AccessibleNodeList"},
na:{"^":"ab;0a_:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nb:{"^":"ab;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cO:{"^":"t;",$iscO:1,"%":";Blob"},
nh:{"^":"ab;0a_:type}","%":"HTMLButtonElement"},
cR:{"^":"ab;",
cP:function(a,b,c){var z=a.getContext(b,P.mk(c,null))
return z},
$iscR:1,
"%":"HTMLCanvasElement"},
nj:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nl:{"^":"hu;0l:length=","%":"CSSPerspective"},
b5:{"^":"t;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nm:{"^":"ks;0l:length=",
en:function(a,b){var z=a.getPropertyValue(this.eO(a,b))
return z==null?"":z},
eO:function(a,b){var z,y
z=$.$get$dV()
y=z[b]
if(typeof y==="string")return y
y=this.fN(a,b)
z[b]=y
return y},
fN:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hy()+b
if(z in a)return z
return b},
gcb:function(a){return a.bottom},
gan:function(a){return a.height},
gaO:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ht:{"^":"b;",
gaO:function(a){return this.en(a,"left")}},
dW:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hu:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nn:{"^":"dW;0l:length=","%":"CSSTransformValue"},
no:{"^":"dW;0l:length=","%":"CSSUnparsedValue"},
np:{"^":"t;0l:length=","%":"DataTransferItemList"},
nq:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
nr:{"^":"kv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.v(c,"$isa7",[P.a_],"$asa7")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a_]]},
$asw:function(){return[[P.a7,P.a_]]},
$isi:1,
$asi:function(){return[[P.a7,P.a_]]},
$isc:1,
$asc:function(){return[[P.a7,P.a_]]},
$asA:function(){return[[P.a7,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hz:{"^":"t;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaq(a))+" x "+H.k(this.gan(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bW(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaO(b)&&a.top===z.gb9(b)&&this.gaq(a)===z.gaq(b)&&this.gan(a)===z.gan(b)},
gT:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gcb:function(a){return a.bottom},
gan:function(a){return a.height},
gaO:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gaq:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
ns:{"^":"kx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.h]},
$asw:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isc:1,
$asc:function(){return[P.h]},
$asA:function(){return[P.h]},
"%":"DOMStringList"},
nt:{"^":"t;0l:length=","%":"DOMTokenList"},
kr:{"^":"cm;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa0")},
m:function(a,b,c){var z
H.C(b)
H.f(c,"$isa0")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.ig(this)
return new J.aB(z,z.length,0,[H.x(z,0)])},
ax:function(a,b,c,d){throw H.a(P.c5(null))},
$asw:function(){return[W.a0]},
$asi:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"K;",
gcf:function(a){return new W.kr(a,a.children)},
gdt:function(a){return P.iS(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
nu:{"^":"ab;0a_:type}","%":"HTMLEmbedElement"},
ad:{"^":"t;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aa:{"^":"t;",
dq:["eq",function(a,b,c,d){H.l(c,{func:1,args:[W.ad]})
if(c!=null)this.eL(a,b,c,!1)}],
eL:function(a,b,c,d){return a.addEventListener(b,H.bu(H.l(c,{func:1,args:[W.ad]}),1),!1)},
$isaa:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fn|fo|fq|fr"},
aW:{"^":"cO;",$isaW:1,"%":"File"},
e3:{"^":"kC;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isaW")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aW]},
$asw:function(){return[W.aW]},
$isi:1,
$asi:function(){return[W.aW]},
$isc:1,
$asc:function(){return[W.aW]},
$ise3:1,
$asA:function(){return[W.aW]},
"%":"FileList"},
nv:{"^":"aa;0l:length=","%":"FileWriter"},
nw:{"^":"ab;0l:length=","%":"HTMLFormElement"},
b8:{"^":"t;",$isb8:1,"%":"Gamepad"},
nx:{"^":"t;0l:length=","%":"History"},
ny:{"^":"kP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.K]},
$asw:function(){return[W.K]},
$isi:1,
$asi:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asA:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e6:{"^":"t;",$ise6:1,"%":"ImageData"},
e7:{"^":"ab;0a_:type}",$ise7:1,"%":"HTMLInputElement"},
bE:{"^":"df;",$isbE:1,"%":"KeyboardEvent"},
nC:{"^":"ab;0a_:type}","%":"HTMLLinkElement"},
nD:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
nE:{"^":"t;0l:length=","%":"MediaList"},
nF:{"^":"aa;",
dq:function(a,b,c,d){H.l(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.eq(a,b,c,!1)},
"%":"MessagePort"},
nG:{"^":"kW;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gao:function(a){var z=H.d([],[P.h])
this.K(a,new W.it(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaj:function(){return[P.h,null]},
$isJ:1,
$asJ:function(){return[P.h,null]},
"%":"MIDIInputMap"},
it:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nH:{"^":"kX;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gao:function(a){var z=H.d([],[P.h])
this.K(a,new W.iu(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaj:function(){return[P.h,null]},
$isJ:1,
$asJ:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
iu:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"t;",$isbb:1,"%":"MimeType"},
nI:{"^":"kZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbb")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asA:function(){return[W.bb]},
"%":"MimeTypeArray"},
ay:{"^":"df;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kq:{"^":"cm;a",
m:function(a,b,c){var z,y
H.C(b)
H.f(c,"$isK")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.e4(z,z.length,-1,[H.b_(C.V,z,"A",0)])},
ax:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asw:function(){return[W.K]},
$asi:function(){return[W.K]},
$asc:function(){return[W.K]}},
K:{"^":"aa;",
i6:function(a,b){var z,y
try{z=a.parentNode
J.h5(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.er(a):z},
fC:function(a,b,c){return a.replaceChild(b,c)},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iy:{"^":"l0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.K]},
$asw:function(){return[W.K]},
$isi:1,
$asi:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asA:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
nQ:{"^":"ab;0a_:type}","%":"HTMLOListElement"},
nR:{"^":"ab;0a_:type}","%":"HTMLObjectElement"},
bc:{"^":"t;0l:length=",$isbc:1,"%":"Plugin"},
nU:{"^":"l4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asw:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asA:function(){return[W.bc]},
"%":"PluginArray"},
nW:{"^":"t;0a_:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nX:{"^":"la;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gao:function(a){var z=H.d([],[P.h])
this.K(a,new W.j1(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaj:function(){return[P.h,null]},
$isJ:1,
$asJ:function(){return[P.h,null]},
"%":"RTCStatsReport"},
j1:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nZ:{"^":"ab;0a_:type}","%":"HTMLScriptElement"},
o0:{"^":"ab;0l:length=","%":"HTMLSelectElement"},
bf:{"^":"aa;",$isbf:1,"%":"SourceBuffer"},
o1:{"^":"fo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asA:function(){return[W.bf]},
"%":"SourceBufferList"},
o2:{"^":"ab;0a_:type}","%":"HTMLSourceElement"},
bg:{"^":"t;",$isbg:1,"%":"SpeechGrammar"},
o3:{"^":"ld;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asw:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asA:function(){return[W.bg]},
"%":"SpeechGrammarList"},
bh:{"^":"t;0l:length=",$isbh:1,"%":"SpeechRecognitionResult"},
o5:{"^":"lg;",
k:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gao:function(a){var z=H.d([],[P.h])
this.K(a,new W.ji(z))
return z},
gl:function(a){return a.length},
$asaj:function(){return[P.h,P.h]},
$isJ:1,
$asJ:function(){return[P.h,P.h]},
"%":"Storage"},
ji:{"^":"m:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o8:{"^":"ab;0a_:type}","%":"HTMLStyleElement"},
bi:{"^":"t;",$isbi:1,"%":"CSSStyleSheet|StyleSheet"},
dc:{"^":"ab;",$isdc:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bj:{"^":"aa;",$isbj:1,"%":"TextTrack"},
bk:{"^":"aa;",$isbk:1,"%":"TextTrackCue|VTTCue"},
ob:{"^":"ln;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asw:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asA:function(){return[W.bk]},
"%":"TextTrackCueList"},
oc:{"^":"fr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asw:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asA:function(){return[W.bj]},
"%":"TextTrackList"},
od:{"^":"t;0l:length=","%":"TimeRanges"},
bm:{"^":"t;",$isbm:1,"%":"Touch"},
bn:{"^":"df;",$isbn:1,"%":"TouchEvent"},
oe:{"^":"lt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bm]},
$asw:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asA:function(){return[W.bm]},
"%":"TouchList"},
of:{"^":"t;0l:length=","%":"TrackDefaultList"},
df:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oh:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
oi:{"^":"aa;0l:length=","%":"VideoTrackList"},
bO:{"^":"ay;",
ght:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbO:1,
"%":"WheelEvent"},
kj:{"^":"aa;",
fD:function(a,b){return a.requestAnimationFrame(H.bu(H.l(b,{func:1,ret:-1,args:[P.a_]}),1))},
eW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
on:{"^":"lV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isb5")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asw:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asA:function(){return[W.b5]},
"%":"CSSRuleList"},
oo:{"^":"hz;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bW(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaO(b)&&a.top===z.gb9(b)&&a.width===z.gaq(b)&&a.height===z.gan(b)},
gT:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gaq:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oq:{"^":"lX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isb8")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asw:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asA:function(){return[W.b8]},
"%":"GamepadList"},
or:{"^":"lZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.K]},
$asw:function(){return[W.K]},
$isi:1,
$asi:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asA:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
os:{"^":"m0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asw:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asA:function(){return[W.bh]},
"%":"SpeechRecognitionResultList"},
ot:{"^":"m2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.f(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asw:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asA:function(){return[W.bi]},
"%":"StyleSheetList"},
ky:{"^":"db;a,b,c,$ti",
hK:function(a,b,c,d){var z=H.x(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
op:{"^":"ky;a,b,c,$ti"},
kz:{"^":"eA;a,b,c,d,e,$ti",
fR:function(){var z=this.d
if(z!=null&&this.a<=0)J.h6(this.b,this.c,z,!1)},
p:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fH(new W.kA(c),W.ad)
z=new W.kz(0,a,b,z,!1,[e])
z.fR()
return z}}},
kA:{"^":"m:8;a",
$1:function(a){return this.a.$1(H.f(a,"$isad"))}},
A:{"^":"b;$ti",
gZ:function(a){return new W.e4(a,this.gl(a),-1,[H.b_(this,a,"A",0)])},
ax:function(a,b,c,d){H.y(d,H.b_(this,a,"A",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
e4:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dE(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
ks:{"^":"t+ht;"},
ku:{"^":"t+w;"},
kv:{"^":"ku+A;"},
kw:{"^":"t+w;"},
kx:{"^":"kw+A;"},
kB:{"^":"t+w;"},
kC:{"^":"kB+A;"},
kO:{"^":"t+w;"},
kP:{"^":"kO+A;"},
kW:{"^":"t+aj;"},
kX:{"^":"t+aj;"},
kY:{"^":"t+w;"},
kZ:{"^":"kY+A;"},
l_:{"^":"t+w;"},
l0:{"^":"l_+A;"},
l3:{"^":"t+w;"},
l4:{"^":"l3+A;"},
la:{"^":"t+aj;"},
fn:{"^":"aa+w;"},
fo:{"^":"fn+A;"},
lc:{"^":"t+w;"},
ld:{"^":"lc+A;"},
lg:{"^":"t+aj;"},
lm:{"^":"t+w;"},
ln:{"^":"lm+A;"},
fq:{"^":"aa+w;"},
fr:{"^":"fq+A;"},
ls:{"^":"t+w;"},
lt:{"^":"ls+A;"},
lU:{"^":"t+w;"},
lV:{"^":"lU+A;"},
lW:{"^":"t+w;"},
lX:{"^":"lW+A;"},
lY:{"^":"t+w;"},
lZ:{"^":"lY+A;"},
m_:{"^":"t+w;"},
m0:{"^":"m_+A;"},
m1:{"^":"t+w;"},
m2:{"^":"m1+A;"}}],["","",,P,{"^":"",
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ee(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
mk:function(a,b){var z={}
a.K(0,new P.ml(z))
return z},
e1:function(){var z=$.e0
if(z==null){z=J.cL(window.navigator.userAgent,"Opera",0)
$.e0=z}return z},
hy:function(){var z,y
z=$.dY
if(z!=null)return z
y=$.dZ
if(y==null){y=J.cL(window.navigator.userAgent,"Firefox",0)
$.dZ=y}if(y)z="-moz-"
else{y=$.e_
if(y==null){y=!P.e1()&&J.cL(window.navigator.userAgent,"Trident/",0)
$.e_=y}if(y)z="-ms-"
else z=P.e1()?"-o-":"-webkit-"}$.dY=z
return z},
lj:{"^":"b;",
dS:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cK:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.P(a)
if(!!y.$isan)return new Date(a.a)
if(!!y.$isiV)throw H.a(P.c5("structured clone of RegExp"))
if(!!y.$isaW)return a
if(!!y.$iscO)return a
if(!!y.$ise3)return a
if(!!y.$ise6)return a
if(!!y.$isel||!!y.$isd7)return a
if(!!y.$isJ){x=this.dS(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.ll(z,this))
return z.a}if(!!y.$isc){x=this.dS(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hq(a,x)}throw H.a(P.c5("structured clone of other type"))},
hq:function(a,b){var z,y,x,w
z=J.aI(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cK(z.k(a,w)))
return x}},
ll:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cK(b)}},
ml:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
lk:{"^":"lj;a,b"},
hJ:{"^":"cm;a,b",
gbf:function(){var z,y,x
z=this.b
y=H.ak(z,"w",0)
x=W.a0
return new H.ih(new H.kh(z,H.l(new P.hK(),{func:1,ret:P.ai,args:[y]}),[y]),H.l(new P.hL(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.C(b)
H.f(c,"$isa0")
z=this.gbf()
J.h9(z.b.$1(J.cM(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ax:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gl:function(a){return J.av(this.gbf().a)},
k:function(a,b){var z=this.gbf()
return z.b.$1(J.cM(z.a,b))},
gZ:function(a){var z=P.ia(this.gbf(),!1,W.a0)
return new J.aB(z,z.length,0,[H.x(z,0)])},
$asw:function(){return[W.a0]},
$asi:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hK:{"^":"m:30;",
$1:function(a){return!!J.P(H.f(a,"$isK")).$isa0}},
hL:{"^":"m:45;",
$1:function(a){return H.j(H.f(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l5:{"^":"b;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.w()
return H.y(z+this.c,H.x(this,0))},
gcb:function(a){var z=this.b
if(typeof z!=="number")return z.w()
return H.y(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bW(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.w()
w=H.x(this,0)
if(H.y(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.w()
z=H.y(x+this.d,w)===y.gcb(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bY(z)
x=this.b
w=J.bY(x)
if(typeof z!=="number")return z.w()
v=H.x(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.w()
v=H.y(x+this.d,v)
return P.kQ(P.cx(P.cx(P.cx(P.cx(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l5;aO:a>,b9:b>,aq:c>,an:d>,$ti",p:{
iS:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.N()
if(c<0)z=-c*0
else z=c
H.y(z,e)
if(typeof d!=="number")return d.N()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.y(y,e),[e])}}}}],["","",,P,{"^":"",bF:{"^":"t;",$isbF:1,"%":"SVGLength"},nB:{"^":"kS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.f(c,"$isbF")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bF]},
$isi:1,
$asi:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asA:function(){return[P.bF]},
"%":"SVGLengthList"},bI:{"^":"t;",$isbI:1,"%":"SVGNumber"},nP:{"^":"l2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.f(c,"$isbI")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asA:function(){return[P.bI]},
"%":"SVGNumberList"},nV:{"^":"t;0l:length=","%":"SVGPointList"},o_:{"^":"eC;0a_:type}","%":"SVGScriptElement"},o6:{"^":"li;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.M(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asw:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isc:1,
$asc:function(){return[P.h]},
$asA:function(){return[P.h]},
"%":"SVGStringList"},o9:{"^":"eC;0a_:type}","%":"SVGStyleElement"},eC:{"^":"a0;",
gcf:function(a){return new P.hJ(a,new W.kq(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bL:{"^":"t;",$isbL:1,"%":"SVGTransform"},og:{"^":"lv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.f(c,"$isbL")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bL]},
$isi:1,
$asi:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asA:function(){return[P.bL]},
"%":"SVGTransformList"},kR:{"^":"t+w;"},kS:{"^":"kR+A;"},l1:{"^":"t+w;"},l2:{"^":"l1+A;"},lh:{"^":"t+w;"},li:{"^":"lh+A;"},lu:{"^":"t+w;"},lv:{"^":"lu+A;"}}],["","",,P,{"^":"",R:{"^":"b;",$isi:1,
$asi:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]}}}],["","",,P,{"^":"",nc:{"^":"t;0l:length=","%":"AudioBuffer"},dJ:{"^":"aa;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nd:{"^":"kp;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gao:function(a){var z=H.d([],[P.h])
this.K(a,new P.hd(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asaj:function(){return[P.h,null]},
$isJ:1,
$asJ:function(){return[P.h,null]},
"%":"AudioParamMap"},hd:{"^":"m:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},he:{"^":"dJ;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},ne:{"^":"aa;0l:length=","%":"AudioTrackList"},hh:{"^":"aa;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nf:{"^":"dJ;0a_:type}","%":"BiquadFilterNode"},nS:{"^":"hh;0l:length=","%":"OfflineAudioContext"},nT:{"^":"he;0a_:type}","%":"Oscillator|OscillatorNode"},kp:{"^":"t+aj;"}}],["","",,P,{"^":"",eu:{"^":"t;",$iseu:1,"%":"WebGLRenderingContext"},jH:{"^":"t;",$isjH:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",o4:{"^":"lf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.C(b)
H.f(c,"$isJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asw:function(){return[[P.J,,,]]},
$isi:1,
$asi:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asA:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},le:{"^":"t+w;"},lf:{"^":"le+A;"}}],["","",,O,{"^":"",aw:{"^":"b;0a,0b,0c,0d,$ti",
bJ:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cQ:function(a,b,c){var z=H.ak(this,"aw",0)
H.l(b,{func:1,ret:P.ai,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.o,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bd:function(a,b){return this.cQ(a,null,b)},
dc:function(a){var z
H.v(a,"$isi",[H.ak(this,"aw",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d9:function(a,b){var z
H.v(b,"$isi",[H.ak(this,"aw",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
fs:function(a,b){var z
H.v(b,"$isi",[H.ak(this,"aw",0)],"$asi")
z=this.d
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.aB(z,z.length,0,[H.x(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ak(this,"aw",0)
H.y(b,z)
z=[z]
if(this.dc(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d9(x,H.d([b],z))}},
m:function(a,b,c){var z,y,x
z=H.ak(this,"aw",0)
H.y(c,z)
y=this.a
if(b>=y.length)return H.e(y,b)
x=y[b]
if(!J.Q(x,c)&&this.dc(H.d([c],[z]))){C.a.m(this.a,b,c)
z=[z]
this.fs(b,H.d([x],z))
this.d9(b,H.d([c],z))}},
$isi:1,
p:{
cS:function(a){var z=new O.aw([a])
z.bJ(a)
return z}}},d3:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
eC:function(a){var z=this.b
if(!(z==null))z.E(a)},
aA:function(){return this.eC(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.ae()},
ea:function(a){var z=this.a
if(a==null)C.a.h(z,V.ae())
else C.a.h(z,a)
this.aA()},
cB:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cN:{"^":"b;"},aV:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scR:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gA().M(0,this.ge6())
y=this.c
if(y!=null)y.gA().h(0,this.ge6())
x=new D.H("shape",z,this.c,this,[F.ct])
x.b=!0
this.af(x)}},
sb1:function(a){var z,y
if(!J.Q(this.r,a)){z=this.r
if(z!=null)z.gA().M(0,this.ge5())
if(a!=null)a.gA().h(0,this.ge5())
this.r=a
y=new D.H("mover",z,a,this,[U.a6])
y.b=!0
this.af(y)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.ax])
w.b=!0
this.af(w)}for(z=this.y.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ap(0,b)},
aP:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gX(z))
else C.a.h(z.a,y.j(0,z.gX(z)))
z.aA()
a.eb(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.i5(a,this)
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.G();)z.d.aP(a)
a.e9()
a.dx.cB()},
gA:function(){var z=this.z
if(z==null){z=D.N()
this.z=z}return z},
af:function(a){var z=this.z
if(!(z==null))z.E(a)},
Y:function(){return this.af(null)},
hT:[function(a){H.f(a,"$isz")
this.e=null
this.af(a)},function(){return this.hT(null)},"j3","$1","$0","ge6",0,2,1],
hS:[function(a){this.af(H.f(a,"$isz"))},function(){return this.hS(null)},"j2","$1","$0","ge5",0,2,1],
hQ:[function(a){this.af(H.f(a,"$isz"))},function(){return this.hQ(null)},"j0","$1","$0","ge4",0,2,1],
j_:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[E.aV],"$asi")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b7()
t.d=0
u.sa0(t)}t=u.ga0()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.d([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.Y()},"$2","ghP",8,0,9],
j1:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[E.aV],"$asi")
for(z=b.length,y=this.ge4(),x=0;x<b.length;b.length===z||(0,H.D)(b),++x){w=b[x]
if(w!=null){if(w.ga0()==null){v=new D.b7()
v.d=0
w.sa0(v)}w.ga0().M(0,y)}}this.Y()},"$2","ghR",8,0,9],
$isaK:1},iX:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ey:function(a,b){var z,y
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
z=new O.d3()
y=[V.ax]
z.a=H.d([],y)
z.gA().h(0,new E.iZ(this))
this.cy=z
z=new O.d3()
z.a=H.d([],y)
z.gA().h(0,new E.j_(this))
this.db=z
z=new O.d3()
z.a=H.d([],y)
z.gA().h(0,new E.j0(this))
this.dx=z
z=H.d([],[O.dd])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.h,A.ew])},
gi1:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.j(0,y.gX(y))
this.z=y
z=y}return z},
eb:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
e9:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iY:function(a,b){var z=new E.iX(a,b)
z.ey(a,b)
return z}}},iZ:{"^":"m:10;a",
$1:function(a){var z
H.f(a,"$isz")
z=this.a
z.z=null
z.ch=null}},j_:{"^":"m:10;a",
$1:function(a){var z
H.f(a,"$isz")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j0:{"^":"m:10;a",
$1:function(a){var z
H.f(a,"$isz")
z=this.a
z.ch=null
z.cx=null}},ez:{"^":"z;c,a,0b"},jr:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
eE:[function(a){var z
H.f(a,"$isz")
z=this.x
if(!(z==null))z.E(a)
this.i8()},function(){return this.eE(null)},"eD","$1","$0","gcU",0,2,1],
ghB:function(){var z,y,x
z=Date.now()
y=C.h.a1(P.e2(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.an(z,!1)
return x/y},
df:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.n(z)
x=C.d.dT(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.dT(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eH(C.q,this.gi7())},
i8:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jt(this),{func:1,ret:-1,args:[P.a_]})
C.B.eW(z)
C.B.fD(z,W.fH(y,P.a_))}},"$0","gi7",0,0,3],
i4:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.df()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.e2(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aA()
w=x.db
C.a.sl(w.a,0)
w.aA()
w=x.dx
C.a.sl(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aP(this.e)}}catch(v){z=H.au(v)
y=H.bw(v)
P.dC("Error: "+H.k(z))
P.dC("Stack: "+H.k(y))
throw H.a(z)}},
p:{
js:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$iscR)return E.eG(a,!0,!0,!0,!1)
y=W.dR(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcf(a).h(0,y)
w=E.eG(y,!0,!0,!0,!1)
w.a=a
return w},
eG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jr()
y=P.i5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.cP(a,"webgl",y)
x=H.f(x==null?C.l.cP(a,"experimental-webgl",y):x,"$iseu")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iY(x,a)
w=new T.jn(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jU(a)
v=new X.hY()
v.c=new X.aE(!1,!1,!1)
v.d=P.i8(null,null,null,P.o)
w.b=v
v=new X.iv(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ic(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jw(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eA,P.b]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.l(w.gfd(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.l(w.gfg(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.l(w.gf9(),q),!1,r))
v=w.z
p=W.bE
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.l(w.gfi(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.l(w.gfh(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.l(w.gfl(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.l(w.gfn(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.l(w.gfm(),s),!1,t))
p=w.z
o=W.bO;(p&&C.a).h(p,W.a2(a,H.M(W.hD(a)),H.l(w.gfo(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.l(w.gfe(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.l(w.gff(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.l(w.gfp(),q),!1,r))
r=w.z
q=W.bn
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.l(w.gfw(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.l(w.gfu(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.l(w.gfv(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.an(Date.now(),!1)
z.cy=0
z.df()
return z}}},jt:{"^":"m:31;a",
$1:function(a){var z
H.mX(a)
z=this.a
if(z.ch){z.ch=!1
z.i4()}}}}],["","",,Z,{"^":"",fc:{"^":"b;a,b",p:{
dk:function(a,b,c){var z
H.v(c,"$isc",[P.o],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.br(c)),35044)
a.bindBuffer(b,null)
return new Z.fc(b,z)}}},dN:{"^":"cN;a,b,c,d,e",
bj:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.au(y)
x=P.u('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},kg:{"^":"b;a",$isng:1},dO:{"^":"b;a,0b,c,d",
aN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bj:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bj(a)},
ei:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aP:function(a){var z,y,x,w,v
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
z=[P.h]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isoa:1},cj:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.be(this.c)+"'")+"]"}},bo:{"^":"b;a",
gcS:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=4
if((z&$.$get$bp().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
hj:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fb()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bo))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.h])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
as:function(a){return new Z.bo(a)}}}}],["","",,D,{"^":"",dS:{"^":"b;"},b7:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.z]}
H.l(b,z)
y=this.a
if(y==null){z=H.d([],[z])
this.a=z}else z=y
C.a.h(z,b)},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.z]})
z=this.a
z=z==null?null:C.a.aU(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
return y},
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.z(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.hH(z))
return!0},
i9:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
ag:function(a){return this.i9(a,!0,!1)},
p:{
N:function(){var z=new D.b7()
z.d=0
return z}}},hH:{"^":"m:32;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},z:{"^":"b;a,0b"},ck:{"^":"z;c,d,a,0b,$ti"},cl:{"^":"z;c,d,a,0b,$ti"},H:{"^":"z;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dP:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
p:{"^":"ni<"}},eb:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},ec:{"^":"z;c,a,0b"},hY:{"^":"b;0a,0b,0c,0d",
hZ:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.E(y)},
hV:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.E(y)}},eg:{"^":"cp;x,y,c,d,e,a,0b"},ic:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gaJ()
s=new X.bG(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cA:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.at(a,b))
return!0},
b3:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.bE()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.at(a,b))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.at(a,b))
return!0},
i_:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d5(new V.V(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.E(w)
return!0},
fk:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.eg(c,a,this.a.gaJ(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.U(0,0)}},aE:{"^":"b;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
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
return z+(this.c?"Shift+":"")}},bG:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bP:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaJ()
x=new X.bG(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cA:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bP(a,b,!0))
return!0},
b3:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.bE()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bP(a,b,!0))
return!0},
b2:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bP(a,b,!1))
return!0},
i0:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d5(new V.V(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdu:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
gbD:function(){var z=this.c
if(z==null){z=D.N()
this.c=z}return z},
ge3:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z}},d5:{"^":"cp;x,c,d,e,a,0b"},cp:{"^":"z;"},eL:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},jw:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.U],"$asc")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gaJ()
w=new X.eL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hY:function(a){var z
H.v(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.E(this.at(a,!0))
return!0},
hW:function(a){var z
H.v(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.E(this.at(a,!0))
return!0},
hX:function(a){var z
H.v(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.E(this.at(a,!1))
return!0}},jU:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaJ:function(){var z=this.a
return V.et(0,0,(z&&C.l).gdt(z).c,C.l.gdt(z).d)},
d3:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.aE(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
c2:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.U(y-w,x-v)},
aS:function(a){return new V.V(a.movementX,a.movementY)},
bX:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.d.a8(u.pageX)
C.d.a8(u.pageY)
s=z.left
C.d.a8(u.pageX)
C.a.h(y,new V.U(t-s,C.d.a8(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.aE(y,a.altKey,a.shiftKey))},
bR:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.H()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iE:[function(a){this.f=!0},"$1","gfg",4,0,8],
ix:[function(a){this.f=!1},"$1","gf9",4,0,8],
iB:[function(a){H.f(a,"$isay")
if(this.f&&this.bR(a))a.preventDefault()},"$1","gfd",4,0,4],
iG:[function(a){var z
H.f(a,"$isbE")
if(!this.f)return
z=this.d3(a)
if(this.b.hZ(z))a.preventDefault()},"$1","gfi",4,0,26],
iF:[function(a){var z
H.f(a,"$isbE")
if(!this.f)return
z=this.d3(a)
if(this.b.hV(z))a.preventDefault()},"$1","gfh",4,0,26],
iI:[function(a){var z,y,x,w
H.f(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ar(a)
x=this.aS(a)
if(this.d.cA(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cA(y,w))a.preventDefault()},"$1","gfl",4,0,4],
iK:[function(a){var z,y,x
H.f(a,"$isay")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gfn",4,0,4],
iD:[function(a){var z,y,x
H.f(a,"$isay")
if(!this.bR(a)){this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b3(z,x))a.preventDefault()}},"$1","gff",4,0,4],
iJ:[function(a){var z,y,x
H.f(a,"$isay")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gfm",4,0,4],
iC:[function(a){var z,y,x
H.f(a,"$isay")
if(!this.bR(a)){this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gfe",4,0,4],
iL:[function(a){var z,y
H.f(a,"$isbO")
this.aG(a)
z=new V.V((a&&C.A).ghs(a),C.A.ght(a)).u(0,180)
if(this.x){if(this.d.i_(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.i0(z,y))a.preventDefault()},"$1","gfo",4,0,35],
iM:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.fk(w,v,x)}},"$1","gfp",4,0,8],
iR:[function(a){var z
H.f(a,"$isbn")
this.a.focus()
this.f=!0
this.c2(a)
z=this.bX(a)
if(this.e.hY(z))a.preventDefault()},"$1","gfw",4,0,13],
iP:[function(a){var z
H.f(a,"$isbn")
this.c2(a)
z=this.bX(a)
if(this.e.hW(z))a.preventDefault()},"$1","gfu",4,0,13],
iQ:[function(a){var z
H.f(a,"$isbn")
this.c2(a)
z=this.bX(a)
if(this.e.hX(z))a.preventDefault()},"$1","gfv",4,0,13]}}],["","",,D,{"^":"",cg:{"^":"b;0a,0b,0c,0d",
gA:function(){var z=this.d
if(z==null){z=D.N()
this.d=z}return z},
aB:[function(a){var z
H.f(a,"$isz")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aB(null)},"ik","$1","$0","geF",0,2,1],
$isa1:1,
$isaK:1},a1:{"^":"b;",$isaK:1},hZ:{"^":"aw;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gA:function(){var z=this.Q
if(z==null){z=D.N()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fj:[function(a){var z
H.f(a,"$isz")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fj(null)},"iH","$1","$0","gda",0,2,1],
iN:[function(a){var z,y,x
H.v(a,"$isi",[D.a1],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eS(x))return!1}return!0},"$1","gfq",4,0,37],
iu:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a1
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gda(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.cg)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.d([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gf6",8,0,24],
iO:[function(a,b){var z,y,x,w,v,u
z=D.a1
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gda(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=H.f(b[w],"$isa1")
if(v instanceof D.cg)C.a.M(this.e,v)
u=v.d
if(u==null){u=new D.b7()
u.d=0
v.d=u}u.M(0,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gft",8,0,24],
eS:function(a){var z=C.a.aU(this.e,a)
return z},
$asi:function(){return[D.a1]},
$asaw:function(){return[D.a1]}},iE:{"^":"b;",$isa1:1,$isaK:1},jf:{"^":"b;",$isa1:1,$isaK:1},jo:{"^":"b;",$isa1:1,$isaK:1},jp:{"^":"b;",$isa1:1,$isaK:1},jq:{"^":"b;",$isa1:1,$isaK:1}}],["","",,V,{"^":"",
nk:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","is",8,0,34],
cJ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bc(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.d.eh($.p.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.q],"$asc")
z=H.d([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.a7(z[u],x))}return z},
a4:{"^":"b;a,b,c",
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
return new V.a4(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b2:{"^":"b;a,b,c,d",
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
return new V.b2(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
cn:{"^":"b;a,b,c,d,e,f,r,x,y",
a9:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscn")
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
return new V.cn(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cn))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
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
ax:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a9:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
e1:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.ae()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isax")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.n(s)
r=a7.b
if(typeof r!=="number")return H.n(r)
q=a7.f
if(typeof q!=="number")return H.n(q)
p=a7.z
if(typeof p!=="number")return H.n(p)
o=a7.cy
if(typeof o!=="number")return H.n(o)
n=a7.c
if(typeof n!=="number")return H.n(n)
m=a7.r
if(typeof m!=="number")return H.n(m)
l=a7.Q
if(typeof l!=="number")return H.n(l)
k=a7.db
if(typeof k!=="number")return H.n(k)
j=a7.d
if(typeof j!=="number")return H.n(j)
i=a7.x
if(typeof i!=="number")return H.n(i)
h=a7.ch
if(typeof h!=="number")return H.n(h)
g=a7.dx
if(typeof g!=="number")return H.n(g)
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
cJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
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
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.X(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
z=b.z
if(!$.p.$2(z,this.z))return!1
z=b.Q
if(!$.p.$2(z,this.Q))return!1
z=b.ch
if(!$.p.$2(z,this.ch))return!1
z=b.cx
if(!$.p.$2(z,this.cx))return!1
z=b.cy
if(!$.p.$2(z,this.cy))return!1
z=b.db
if(!$.p.$2(z,this.db))return!1
z=b.dx
if(!$.p.$2(z,this.dx))return!1
return!0},
i:function(a){return this.L()},
dU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
L:function(){return this.dU("",3,0)},
B:function(a){return this.dU(a,3,0)},
p:{
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ae:function(){return V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
co:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
d4:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ej:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
ek:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
ei:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.D(c)))
y=b.av(z)
x=y.u(0,Math.sqrt(y.D(y)))
w=z.av(x)
v=new V.E(a.a,a.b,a.c)
return V.aD(x.a,w.a,z.a,x.P(0).D(v),x.b,w.b,z.b,w.P(0).D(v),x.c,w.c,z.c,z.P(0).D(v),0,0,0,1)}}},
U:{"^":"b;a,b",
H:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.U(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
X:{"^":"b;a,b,c",
w:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.n(w)
return new V.X(this.a+z,this.b+y,x+w)},
H:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.H()
if(typeof w!=="number")return H.n(w)
return new V.X(this.a-z,this.b-y,x-w)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.X(this.a*b,this.b*b,z*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bd:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bd(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bd))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
es:{"^":"b;a,b,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.es))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
et:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.es(a,b,c,d)}}},
V:{"^":"b;a,b",
hI:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,19],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.V(z*b,y*b)},
u:function(a,b){var z,y
if($.p.$2(b,0))return new V.V(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.V(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hI:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,19],
D:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
cu:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.H()
if(typeof x!=="number")return H.n(x)
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
av:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
w:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.n(w)
return new V.E(this.a+z,this.b+y,x+w)},
P:function(a){var z=this.c
if(typeof z!=="number")return z.P()
return new V.E(-this.a,-this.b,-z)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.E(this.a*b,this.b*b,z*b)},
u:function(a,b){var z
if($.p.$2(b,0))return new V.E(0,0,0)
z=this.c
if(typeof z!=="number")return z.u()
return new V.E(this.a/b,this.b/b,z/b)},
e2:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ho:{"^":"dS;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.cJ(a,this.c,this.b)
return z},
gA:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.E(a)},
scL:function(a,b){},
scv:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.H("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.J(z)}},
scz:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.H("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.J(z)}},
sW:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.q])
z.b=!0
this.J(z)}},
scw:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.J(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.q])
z.b=!0
this.J(z)}},
scj:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.q])
z.b=!0
this.J(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
cT:function(){var z=new U.ho()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dU:{"^":"a6;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.N()
this.b=z}return z},
ah:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dU))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
p:{
b4:function(a){var z=new U.dU()
z.a=a==null?V.ae():a
return z}}},e5:{"^":"aw;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
J:[function(a){var z
H.f(a,"$isz")
z=this.e
if(!(z==null))z.E(a)},function(){return this.J(null)},"aa","$1","$0","gaC",0,2,1],
il:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a6
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){s=t.gA()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.d([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.J(z)},"$2","geG",8,0,23],
im:[function(a,b){var z,y,x,w,v
z=U.a6
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaC(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null)v.gA().M(0,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.J(z)},"$2","geH",8,0,23],
ah:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aB(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.ah(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.ae():x
z=this.e
if(!(z==null))z.ag(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e5))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.a6]},
$asaw:function(){return[U.a6]},
$isa6:1,
p:{
cV:function(a){var z=new U.e5()
z.bJ(U.a6)
z.bd(z.geG(),z.geH())
z.e=null
z.f=V.ae()
z.r=0
return z}}},a6:{"^":"dS;"},ev:{"^":"a6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.N()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.E(a)},
sel:function(a){var z,y
a=V.cJ(a,0,6.283185307179586)
z=this.a
if(!$.p.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.q])
z.b=!0
this.J(z)}},
se8:function(a,b){var z,y
b=V.cJ(b,0,6.283185307179586)
z=this.b
if(!$.p.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.q])
z.b=!0
this.J(z)}},
sed:function(a){var z,y
a=V.cJ(a,0,6.283185307179586)
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.q])
z.b=!0
this.J(z)}},
ah:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sel(this.a+this.d*b.y)
this.se8(0,this.b+this.e*b.y)
this.sed(this.c+this.f*b.y)
this.x=V.ek(this.c).j(0,V.ej(this.b)).j(0,V.d4(this.a))
z=this.y
if(!(z==null))z.ag(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ev))return!1
z=this.a
y=b.a
if(!$.p.$2(z,y))return!1
z=this.b
y=b.b
if(!$.p.$2(z,y))return!1
z=this.c
y=b.c
if(!$.p.$2(z,y))return!1
z=this.d
y=b.d
if(!$.p.$2(z,y))return!1
z=this.e
y=b.e
if(!$.p.$2(z,y))return!1
z=this.f
y=b.f
if(!$.p.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"},
p:{
bK:function(a,b,c,d,e,f){var z,y,x
z=new U.ev()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sel(f)
z.se8(0,d)
z.sed(e)
y=z.d
if(!$.p.$2(y,c)){x=z.d
z.d=c
y=new D.H("deltaYaw",x,c,z,[P.q])
y.b=!0
z.J(y)}y=z.e
if(!$.p.$2(y,a)){x=z.e
z.e=a
y=new D.H("deltaPitch",x,a,z,[P.q])
y.b=!0
z.J(y)}y=z.f
if(!$.p.$2(y,b)){x=z.f
z.f=b
y=new D.H("deltaRoll",x,b,z,[P.q])
y.b=!0
z.J(y)}return z}}},jV:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.cy
if(z==null){z=D.N()
this.cy=z}return z},
J:[function(a){var z
H.f(a,"$isz")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.J(null)},"aa","$1","$0","gaC",0,2,1],
aT:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdu().h(0,this.gbS())
this.a.c.ge3().h(0,this.gbT())
this.a.c.gbD().h(0,this.gbU())
return!0},
f2:[function(a){H.f(a,"$isz")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbS",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isz"),"$isbG")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.V(y.a,y.b).j(0,2).u(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.V(x.a,x.b).j(0,2).u(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
this.b.sS(0)
y=y.H(0,a.z)
this.Q=new V.V(y.a,y.b).j(0,2).u(0,z.ga2())}this.aa()},"$1","gbT",4,0,2],
f4:[function(a){var z,y,x
H.f(a,"$isz")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sS(y*10*x)
this.aa()}},"$1","gbU",4,0,2],
ah:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.ch=y
x=b.y
this.b.ap(0,x)
this.cx=V.ek(this.b.d)}return this.cx},
$isa6:1},jW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gA:function(){var z=this.fx
if(z==null){z=D.N()
this.fx=z}return z},
J:[function(a){var z
H.f(a,"$isz")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.J(null)},"aa","$1","$0","gaC",0,2,1],
aT:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdu().h(0,this.gbS())
this.a.c.ge3().h(0,this.gbT())
this.a.c.gbD().h(0,this.gbU())
z=this.a.d
y=z.f
if(y==null){y=D.N()
z.f=y
z=y}else z=y
z.h(0,this.gf_())
z=this.a.d
y=z.d
if(y==null){y=D.N()
z.d=y
z=y}else z=y
z.h(0,this.gf0())
z=this.a.e
y=z.b
if(y==null){y=D.N()
z.b=y
z=y}else z=y
z.h(0,this.gfQ())
z=this.a.e
y=z.d
if(y==null){y=D.N()
z.d=y
z=y}else z=y
z.h(0,this.gfP())
z=this.a.e
y=z.c
if(y==null){y=D.N()
z.c=y
z=y}else z=y
z.h(0,this.gfO())
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.V(z,y)},
f2:[function(a){a=H.j(H.f(a,"$isz"),"$isbG")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbS",4,0,2],
f3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isz"),"$isbG")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ak(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ak(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.H(0,a.z)
this.dx=this.ak(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))}this.aa()},"$1","gbT",4,0,2],
f4:[function(a){var z,y,x
H.f(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sS(-y*10*z)
this.aa()}},"$1","gbU",4,0,2],
ir:[function(a){if(H.j(H.f(a,"$isz"),"$iseg").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf_",4,0,2],
is:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isz"),"$isbG")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ak(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.H(0,a.z)
this.dx=this.ak(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.aa()},"$1","gf0",4,0,2],
iV:[function(a){H.f(a,"$isz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfQ",4,0,2],
iU:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isz"),"$iseL")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ak(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ak(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.H(0,a.z)
this.dx=this.ak(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))}this.aa()},"$1","gfP",4,0,2],
iT:[function(a){var z,y,x
H.f(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sS(-y*10*z)
this.aa()}},"$1","gfO",4,0,2],
ah:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.N()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
this.fr=V.d4(this.b.d).j(0,V.ej(this.c.d))}return this.fr},
$isa6:1},jX:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gA:function(){var z=this.r
if(z==null){z=D.N()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.E(a)},
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.N()
z.e=y
z=y}else z=y
y=this.gf5()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.N()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
it:[function(a){var z,y,x,w
H.f(a,"$isz")
if(!J.Q(this.b,this.a.b.c))return
H.j(a,"$isd5")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.q])
z.b=!0
this.J(z)}},"$1","gf5",4,0,2],
ah:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aD(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",hF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.f(a,"$isz")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aD(null)},"io","$1","$0","gaj",0,2,1],
iz:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aV
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b7()
s.d=0
t.sa0(s)}s=t.ga0()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.d([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfb",8,0,9],
iA:[function(a,b){var z,y,x,w,v,u
z=E.aV
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaj(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null){if(v.ga0()==null){u=new D.b7()
u.d=0
v.sa0(u)}v.ga0().M(0,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfc",8,0,9],
sef:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gA().M(0,this.gaj())
y=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gaj())
z=new D.H("technique",y,this.c,this,[O.dd])
z.b=!0
this.aD(z)}},
gA:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z},
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.ez(a,this)
z.b=!0
y=this.e
if(!(y==null))y.E(z)
a.eb(this.c)
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
if(typeof w!=="number")return H.n(w)
t=C.d.a8(u.a*w)
if(typeof v!=="number")return H.n(v)
s=C.d.a8(u.b*v)
r=C.d.a8(u.c*w)
a.c=r
u=C.d.a8(u.d*v)
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
m=V.aD(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.ea(m)
x=$.ep
if(x==null){x=V.ei(new V.X(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.ep=x
l=x}else l=x
x=y.b
if(x!=null){k=x.ah(0,a,y)
if(k!=null)l=k.j(0,l)}a.db.ea(l)
y=this.c
if(y!=null)y.ap(0,a)
for(y=this.d.a,y=new J.aB(y,y.length,0,[H.x(y,0)]);y.G();)y.d.ap(0,a)
for(y=this.d.a,y=new J.aB(y,y.length,0,[H.x(y,0)]);y.G();)y.d.aP(a)
this.a.toString
a.cy.cB()
a.db.cB()
this.b.toString
a.e9()},
$isnY:1}}],["","",,A,{"^":"",dI:{"^":"b;a,b,c"},hc:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hv:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},il:{"^":"ew;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0am,0ae,0bm,0dv,0bn,0bo,0dw,0dz,0bp,0bq,0dA,0dB,0br,0bs,0dC,0dD,0bt,0dE,0dF,0bu,0dG,0dH,0bv,0bw,0bx,0dI,0dJ,0by,0bz,0dK,0dL,0bA,0dM,0cl,0dN,0cm,0dO,0cn,0dP,0co,0dQ,0cp,0dR,0cq,a,b,0c,0d,0e,0f,0r,0x,0y",
ex:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.ap("")
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
a2.fT(z)
a2.h_(z)
a2.fU(z)
a2.h7(z)
a2.h8(z)
a2.h1(z)
a2.hc(z)
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
z=new P.ap("")
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
x.fX(z)
x.fS(z)
x.fV(z)
x.fY(z)
x.h5(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.h3(z)
x.h4(z)}x.h0(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
p=H.d([],[P.h])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fW(z)
x.h2(z)
x.h6(z)
x.h9(z)
x.ha(z)
x.hb(z)
x.fZ(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.h])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.d4(s,35633)
this.f=this.d4(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.fL(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.u("Failed to link shader: "+H.k(m)))}this.fJ()
this.fL()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$isaM")
if(y)this.dy=H.j(this.y.n(0,"objMat"),"$isaM")
if(w)this.fr=H.j(this.y.n(0,"viewObjMat"),"$isaM")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$isdh")
if(a2.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$isaM")
this.r1=H.d([],[A.aM])
y=a2.am
if(y>0){this.k4=H.f(this.y.n(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.r2=H.j(this.y.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.rx=H.j(this.y.n(0,"emissionTxt"),"$isaq")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isO")
break
case C.f:this.ry=H.j(this.y.n(0,"emissionTxt"),"$isar")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.c){this.x2=H.j(this.y.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.y1=H.j(this.y.n(0,"ambientTxt"),"$isaq")
this.am=H.j(this.y.n(0,"nullAmbientTxt"),"$isO")
break
case C.f:this.y2=H.j(this.y.n(0,"ambientTxt"),"$isar")
this.am=H.j(this.y.n(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.c){this.ae=H.j(this.y.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.bm=H.j(this.y.n(0,"diffuseTxt"),"$isaq")
this.bn=H.j(this.y.n(0,"nullDiffuseTxt"),"$isO")
break
case C.f:this.dv=H.j(this.y.n(0,"diffuseTxt"),"$isar")
this.bn=H.j(this.y.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.c){this.bo=H.j(this.y.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dw=H.j(this.y.n(0,"invDiffuseTxt"),"$isaq")
this.bp=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.f:this.dz=H.j(this.y.n(0,"invDiffuseTxt"),"$isar")
this.bp=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.c){this.bs=H.j(this.y.n(0,"shininess"),"$isY")
this.bq=H.j(this.y.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dA=H.j(this.y.n(0,"specularTxt"),"$isaq")
this.br=H.j(this.y.n(0,"nullSpecularTxt"),"$isO")
break
case C.f:this.dB=H.j(this.y.n(0,"specularTxt"),"$isar")
this.br=H.j(this.y.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dC=H.j(this.y.n(0,"bumpTxt"),"$isaq")
this.bt=H.j(this.y.n(0,"nullBumpTxt"),"$isO")
break
case C.f:this.dD=H.j(this.y.n(0,"bumpTxt"),"$isar")
this.bt=H.j(this.y.n(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dE=H.j(this.y.n(0,"envSampler"),"$isar")
this.dF=H.j(this.y.n(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.c){this.bu=H.j(this.y.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dG=H.j(this.y.n(0,"reflectTxt"),"$isaq")
this.bv=H.j(this.y.n(0,"nullReflectTxt"),"$isO")
break
case C.f:this.dH=H.j(this.y.n(0,"reflectTxt"),"$isar")
this.bv=H.j(this.y.n(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.c){this.bw=H.j(this.y.n(0,"refraction"),"$isY")
this.bx=H.j(this.y.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.e:this.dI=H.j(this.y.n(0,"refractTxt"),"$isaq")
this.by=H.j(this.y.n(0,"nullRefractTxt"),"$isO")
break
case C.f:this.dJ=H.j(this.y.n(0,"refractTxt"),"$isar")
this.by=H.j(this.y.n(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.c){this.bz=H.j(this.y.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.i:break
case C.e:this.dK=H.j(this.y.n(0,"alphaTxt"),"$isaq")
this.bA=H.j(this.y.n(0,"nullAlphaTxt"),"$isO")
break
case C.f:this.dL=H.j(this.y.n(0,"alphaTxt"),"$isar")
this.bA=H.j(this.y.n(0,"nullAlphaTxt"),"$isO")
break}}this.cl=H.d([],[A.eY])
this.cm=H.d([],[A.eZ])
this.cn=H.d([],[A.f_])
this.co=H.d([],[A.f0])
this.cp=H.d([],[A.f1])
this.cq=H.d([],[A.f2])
if(a2.k2){y=a2.z
if(y>0){this.dM=H.f(this.y.n(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.cl;(x&&C.a).h(x,new A.eY(l,k,j))}}y=a2.Q
if(y>0){this.dN=H.f(this.y.n(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isY")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.cm;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dO=H.f(this.y.n(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.cn;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dP=H.f(this.y.n(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isaq")
x=this.co;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dQ=H.f(this.y.n(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdh")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isar")
x=this.cp;(x&&C.a).h(x,new A.f1(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dR=H.f(this.y.n(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isL")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isY")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isY")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isaq")
x=this.cq;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ac:function(a,b,c){b.a.uniform1i(b.d,1)},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ik:function(a,b){var z,y
z=a.ae
y=new A.il(b,z)
y.eA(b,z)
y.ex(a,b)
return y}}},ip:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,am,ae,bm",
fT:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.am+"];\n"
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
h_:function(a){var z
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
fU:function(a){var z
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
h7:function(a){var z,y
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
h8:function(a){var z,y
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
h1:function(a){var z
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
hc:function(a){var z
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
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fX:function(a){var z,y
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
fS:function(a){var z,y
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
fV:function(a){var z,y
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
fY:function(a){var z,y
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
h5:function(a){var z,y
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
h0:function(a){var z,y
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
h3:function(a){var z,y
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
h4:function(a){var z,y
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
fW:function(a){var z,y
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
h2:function(a){var z,y
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
h6:function(a){var z,y
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
h9:function(a){var z,y,x
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
ha:function(a){var z,y,x
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
hb:function(a){var z,y,x
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
fZ:function(a){var z
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
i:function(a){return this.ae}},eY:{"^":"b;a,b,c"},f0:{"^":"b;a,b,c,d,e,f,r,x"},eZ:{"^":"b;a,b,c,d,e,f,r"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f2:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ew:{"^":"cN;",
eA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d4:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fJ:function(){var z,y,x,w,v,u
z=H.d([],[A.dI])
y=this.a
x=H.C(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dI(y,v.name,u))}this.x=new A.hc(z)},
fL:function(){var z,y,x,w,v,u
z=H.d([],[A.ac])
y=this.a
x=H.C(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hr(v.type,v.size,v.name,u))}this.y=new A.jG(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.O(z,y,b,c)
else return A.dg(z,y,b,a,c)},
eT:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aq(z,y,b,c)
else return A.dg(z,y,b,a,c)},
eU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dg(z,y,b,a,c)},
bi:function(a,b){return new P.ff(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hr:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.jB(this.a,this.r,c,d)
case 35665:return new A.L(this.a,this.r,c,d)
case 35666:return new A.jE(this.a,this.r,c,d)
case 35667:return new A.jC(this.a,this.r,c,d)
case 35668:return new A.jD(this.a,this.r,c,d)
case 35669:return new A.jF(this.a,this.r,c,d)
case 35674:return new A.jI(this.a,this.r,c,d)
case 35675:return new A.dh(this.a,this.r,c,d)
case 35676:return new A.aM(this.a,this.r,c,d)
case 35678:return this.eT(b,c,d)
case 35680:return this.eU(b,c,d)
case 35670:throw H.a(this.bi("BOOL",c))
case 35671:throw H.a(this.bi("BOOL_VEC2",c))
case 35672:throw H.a(this.bi("BOOL_VEC3",c))
case 35673:throw H.a(this.bi("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cf:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jG:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hA:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hA("\n")}},O:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},jC:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},jD:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},jF:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jA:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
p:{
dg:function(a,b,c,d,e){var z=new A.jA(a,b,c,e)
z.f=d
z.e=P.i9(d,0,!1,P.o)
return z}}},Y:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},jB:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},jE:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},jI:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dh:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.br(H.v(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aM:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.br(H.v(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},aq:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ar:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
fM:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
z=F.da()
F.bS(z,b,c,d,a,1,0,0,1)
F.bS(z,b,c,d,a,0,1,0,3)
F.bS(z,b,c,d,a,0,0,1,2)
F.bS(z,b,c,d,a,-1,0,0,0)
F.bS(z,b,c,d,a,0,-1,0,0)
F.bS(z,b,c,d,a,0,0,-1,3)
z.ad()
return z},
cA:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bF()
return(y>0?z+4:z)*2},
bS:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
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
z.d=y}l=F.cA(y)
k=F.cA(z.b)
j=F.cI(d,e,new F.m3(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.b0(j)},
fP:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.da()
y=b?-1:1
x=-6.283185307179586/f
w=H.d([],[F.ag])
v=z.a
u=new V.E(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hg(new V.bd(a,-1,-1,-1),new V.b2(1,1,1,1),new V.X(0,0,d),new V.E(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.n(p)
o=new V.E(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c7(new V.bd(a,-1,-1,-1),null,new V.b2(n,l,m,1),new V.X(r*p,q*p,d),new V.E(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.he(w)
return z},
fN:function(a,b,c,d,e,f){return F.mn(!0,c,d,new F.mm(a,f),e)},
mn:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.cI(c,e,new F.mp(d),null)
if(z==null)return
z.ad()
z.c5()
if(b)z.b0(F.fP(3,!1,!1,1,new F.mq(d),e))
z.b0(F.fP(1,!0,!1,-1,new F.mr(d),e))
return z},
n2:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n3()
y=F.fM(a,null,new F.n4(z),c)
y.c5()
return y},
n6:function(a,b,c,d){return F.fO(c,a,d,b,new F.n7())},
mJ:function(a,b,c,d,e,f){return F.fO(d,a,e,b,new F.mK(f,c))},
fO:function(a,b,c,d,e){var z=F.cI(a,b,new F.mo(H.l(e,{func:1,ret:V.X,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ad()
z.c5()
return z},
mz:function(a,b,c){var z={}
z.a=b
z.a=new F.mA()
return F.cI(c,a,new F.mB(z),null)},
cI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.da()
y=H.d([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c7(null,null,new V.b2(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ci(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c7(null,null,new V.b2(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ci(d))}}z.d.hf(a+1,b+1,y)
return z},
m3:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cu(z.b,b).cu(z.d.cu(z.c,b),c)
a.sW(0,new V.X(y.a,y.b,y.c))
a.scI(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sc9(new V.bd(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mm:{"^":"m:14;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mp:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sW(0,new V.X(y,u,w))
u=new V.E(y,u,w)
a.scI(u.u(0,Math.sqrt(u.D(u))))
a.sc9(new V.bd(1-c,2+c,-1,-1))}},
mq:{"^":"m:15;a",
$1:function(a){return this.a.$2(a,1)}},
mr:{"^":"m:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
n3:{"^":"m:14;",
$2:function(a,b){return 0}},
n4:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).j(0,1+z)
a.sW(0,new V.X(z.a,z.b,z.c))}},
n7:{"^":"m:16;",
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}},
mK:{"^":"m:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.X(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mo:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dD(y.$1(z),x)
x=J.dD(y.$1(z+3.141592653589793/this.c),x).H(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.E(1,0,0)
y=v.av(!v.q(0,u)?new V.E(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.av(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.H()
if(typeof q!=="number")return H.n(q)
a.sW(0,w.w(0,new V.X(y.a-x.a,y.b-x.b,r-q)))}},
mA:{"^":"m:14;",
$2:function(a,b){return 0}},
mB:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sW(0,new V.X(z,y,this.a.a.$2(b,c)))
x=new V.E(z,y,1)
a.scI(x.u(0,Math.sqrt(x.D(x))))
x=1-b
w=1-c
a.sc9(new V.bd(b*c,2+x*c,4+b*w,6+x*w))}},
ao:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gaW()){C.a.M(this.a.a.d.b,this)
this.a.a.Y()}this.bZ()
this.c_()
this.fB()},
c3:function(a){this.a=a
C.a.h(a.d.b,this)},
c4:function(a){this.b=a
C.a.h(a.d.c,this)},
fI:function(a){this.c=a
C.a.h(a.d.d,this)},
bZ:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
c_:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
fB:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gaW:function(){return this.a==null||this.b==null||this.c==null},
eN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.w(0,y)
if(x!=null)v=v.w(0,x)
if(w!=null)v=v.w(0,w)
if(v.e2())return
return v.u(0,Math.sqrt(v.D(v)))},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.H(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.av(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
ce:function(){if(this.d!=null)return!0
var z=this.eN()
if(z==null){z=this.eQ()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
eM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.w(0,y)
if(x!=null)v=v.w(0,x)
if(w!=null)v=v.w(0,w)
if(v.e2())return
return v.u(0,Math.sqrt(v.D(v)))},
eP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.H(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.H(0,u).j(0,l).w(0,u).H(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.av(m)
z=z.u(0,Math.sqrt(z.D(z))).av(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
cc:function(){if(this.e!=null)return!0
var z=this.eM()
if(z==null){z=this.eP()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
ghn:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z,y
if(this.gaW())return a+"disposed"
z=a+C.b.a7(J.a9(this.a.e),0)+", "+C.b.a7(J.a9(this.b.e),0)+", "+C.b.a7(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.B("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.ao()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.c3(a)
z.c4(b)
z.fI(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
hI:{"^":"b;"},
je:{"^":"hI;",
b_:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d0:{"^":"b;0a,0b",
aw:function(){if(!this.gaW()){C.a.M(this.a.a.c.b,this)
this.a.a.Y()}this.bZ()
this.c_()},
c3:function(a){this.a=a
C.a.h(a.c.b,this)},
c4:function(a){this.b=a
C.a.h(a.c.c,this)},
bZ:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
c_:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gaW:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){if(this.gaW())return a+"disposed"
return a+C.b.a7(J.a9(this.a.e),0)+", "+C.b.a7(J.a9(this.b.e),0)},
L:function(){return this.B("")},
p:{
i_:function(a,b){var z,y,x
z=new F.d0()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.c3(a)
z.c4(b)
C.a.h(z.a.a.c.b,z)
z.a.a.Y()
return z}}},
i0:{"^":"b;"},
jz:{"^":"i0;",
b_:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d9:{"^":"b;0a",
aw:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.Y()}this.fA()},
fA:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a7(J.a9(z.e),0)},
L:function(){return this.B("")}},
ct:{"^":"b;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.N()
this.e=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.hp())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d9()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.w()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.i_(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.w()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bB(p,o,m)}z=this.e
if(!(z==null))z.ag(0)},
ad:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ad()||!1
if(!this.a.ad())y=!1
z=this.e
if(!(z==null))z.ag(0)
return y},
eY:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.ag],"$asc")
H.v(e,"$isc",[P.o],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b_(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hM:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ag],x=[P.o];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.eY(a,v,y,u,t))b.b0(u)}this.a.v()
this.c.cE()
this.d.cE()
this.b.i3()
this.c.cF(new F.jz())
this.d.cF(new F.je())
z=this.e
if(!(z==null))z.ag(0)},
hi:function(a){this.hM(new F.ka(),new F.iz())},
c5:function(){return this.hi(null)},
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
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcS(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dN])
for(r=0,q=0;q<w;++q){p=b.hj(q)
o=p.gcS(p)
C.a.m(s,q,new Z.dN(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hJ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.br(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dO(new Z.fc(34962,j),s,b)
i.b=H.d([],[Z.cj])
if(this.b.b.length!==0){x=P.o
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dk(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cj(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dk(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cj(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dk(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cj(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.C(z,"\n")},
af:function(a){var z=this.e
if(!(z==null))z.E(a)},
Y:function(){return this.af(null)},
p:{
da:function(){var z,y
z=new F.ct()
y=new F.k5(z)
y.b=!1
y.c=H.d([],[F.ag])
z.a=y
y=new F.j9(z)
y.b=H.d([],[F.d9])
z.b=y
y=new F.j8(z)
y.b=H.d([],[F.d0])
z.c=y
y=new F.j7(z)
y.b=H.d([],[F.ao])
z.d=y
z.e=null
return z}}},
j7:{"^":"b;a,0b",
he:function(a){var z,y,x,w,v,u
H.v(a,"$isc",[F.ag],"$asc")
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
hf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.ag],"$asc")
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
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b_(0,v,t)){v.aw()
break}}}}},
cE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghn(x)
if(y)x.aw()}},
ad:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].ce())x=!1
return x},
cd:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cc())x=!1
return x},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.d([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
L:function(){return this.B("")}},
j8:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b_(0,v,t)){v.aw()
break}}}}},
cE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.aw()}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.d([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.C(z,"\n")},
L:function(){return this.B("")}},
j9:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i3:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aw()}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.d([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
L:function(){return this.B("")}},
ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ci:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c7(this.cx,x,u,z,y,w,v,a,t)},
hp:function(){return this.ci(null)},
sW:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
scI:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
sc9:function(a){var z
if(!J.Q(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Y()}},
hJ:function(a){var z,y
z=J.P(a)
if(z.q(a,$.$get$aQ())){z=this.f
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aP())){z=this.r
y=[P.q]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aO())){z=this.x
y=[P.q]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aR())){z=this.y
y=[P.q]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.q(a,$.$get$aS())){z=this.z
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bM())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bN())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$bp()))return H.d([this.ch],[P.q])
else if(z.q(a,$.$get$aN())){z=this.cx
y=[P.q]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.q])},
ce:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.E(0,0,0)
this.d.K(0,new F.kf(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
cc:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.E(0,0,0)
this.d.K(0,new F.ke(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z,y,x
z=H.d([],[P.h])
C.a.h(z,C.b.a7(J.a9(this.e),0))
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
x=C.a.C(z,", ")
return a+"{"+x+"}"},
L:function(){return this.B("")},
p:{
c7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.kd(z)
y.b=H.d([],[F.d9])
z.b=y
y=new F.k9(z)
x=[F.d0]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.k6(z)
x=[F.ao]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$f9()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fa().a)!==0?c:null
z.ch=(x&$.$get$bp().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
kf:{"^":"m:11;a",
$1:function(a){var z,y
H.f(a,"$isao")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.w(0,z)}}},
ke:{"^":"m:11;a",
$1:function(a){var z,y
H.f(a,"$isao")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.w(0,z)}}},
k5:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
hh:function(a,b,c,d,e,f,g,h,i){var z=F.c7(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hg:function(a,b,c,d,e,f){return this.hh(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ad:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].ce()
return!0},
cd:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cc()
return!0},
hm:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.j()
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
this.v()
z=H.d([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
L:function(){return this.B("")}},
k6:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ao]})
C.a.K(this.b,b)
C.a.K(this.c,new F.k7(this,b))
C.a.K(this.d,new F.k8(this,b))},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.d([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
L:function(){return this.B("")}},
k7:{"^":"m:11;a,b",
$1:function(a){H.f(a,"$isao")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
k8:{"^":"m:11;a,b",
$1:function(a){var z
H.f(a,"$isao")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
k9:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.d([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
L:function(){return this.B("")}},
kb:{"^":"b;"},
ka:{"^":"kb;",
b_:function(a,b,c){return J.Q(b.f,c.f)}},
kc:{"^":"b;"},
iz:{"^":"kc;",
b0:function(a){var z,y,x,w,v,u,t,s,r
H.v(a,"$isc",[F.ag],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.w()
if(typeof w!=="number")return H.n(w)
z=new V.E(z.a+v,z.b+u,t+w)}}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,v=w*w+v*v,w=z.c,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){s=a[x]
if(typeof w!=="number")return w.j()
r=z.u(0,Math.sqrt(v+w*w))
if(!J.Q(s.r,r)){s.r=r
u=s.a
if(u!=null){u=u.e
if(!(u==null))u.E(null)}}}return}},
kd:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.d([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
L:function(){return this.B("")}}}],["","",,O,{"^":"",ij:{"^":"dd;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gA:function(){var z=this.dy
if(z==null){z=D.N()
this.dy=z}return z},
ab:[function(a){var z
H.f(a,"$isz")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.ab(null)},"iy","$1","$0","gfa",0,2,1],
fF:[function(a){H.f(a,"$isz")
this.a=null
this.ab(a)},function(){return this.fF(null)},"iS","$1","$0","gfE",0,2,1],
iv:[function(a,b){var z=V.ax
z=new D.ck(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ab(z)},"$2","gf7",8,0,22],
iw:[function(a,b){var z=V.ax
z=new D.cl(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ab(z)},"$2","gf8",8,0,22],
d1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a1(z.e.length+3,4)*4
x=C.h.a1(z.f.length+3,4)*4
w=C.h.a1(z.r.length+3,4)*4
v=C.h.a1(z.x.length+3,4)*4
u=C.h.a1(z.y.length+3,4)*4
t=C.h.a1(z.z.length+3,4)*4
s=C.h.a1(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
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
a6=$.$get$aQ()
if(c){z=$.$get$aP()
a6=new Z.bo(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bo(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bo(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bo(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bo(a6.a|z.a)}return new A.ip(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.v(a,"$isc",[T.eF],"$asc")},
ap:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cJ(x)}}},
i5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d1()
y=a.fr.k(0,z.ae)
if(y==null){y=A.ik(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bl(0,x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bm
z=b.e
if(!(z instanceof Z.dO)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.ad()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cd()
t.a.cd()
t=t.e
if(!(t==null))t.ag(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hm()
s=s.e
if(!(s==null))s.ag(0)}q=b.d.hl(new Z.kg(a.a),v)
q.aN($.$get$aQ()).e=this.a.Q.c
if(z)q.aN($.$get$aP()).e=this.a.cx.c
if(u)q.aN($.$get$aO()).e=this.a.ch.c
if(w.rx)q.aN($.$get$aR()).e=this.a.cy.c
if(t)q.aN($.$get$aS()).e=this.a.db.c
if(w.x1)q.aN($.$get$aN()).e=this.a.dx.c
b.e=q}z=T.eF
p=H.d([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.hv()
if(w.fx){u=this.a
t=a.dx
t=t.gX(t)
u=u.dy
u.toString
u.ai(t.a9(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gX(t)
s=a.dx
s=t.j(0,s.gX(s))
a.cx=s
t=s}u=u.fr
u.toString
u.ai(t.a9(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi1()
s=a.dx
s=t.j(0,s.gX(s))
a.ch=s
t=s}u=u.fy
u.toString
u.ai(t.a9(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ai(t.a9(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ai(t.a9(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ai(C.t.a9(t,!0))}if(w.am>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.f(s,"$isax")
t=t.r1
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.br(H.v(s.a9(0,!0),"$isc",u,"$asc")))
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
case C.e:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ac(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.a5(u.ry,u.x1,t)
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
case C.e:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ac(u.y1,u.am,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.a5(u.y2,u.am,t)
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
u=u.ae
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ac(u.bm,u.bn,t)
t=this.a
u=this.x.f
t=t.ae
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a5(u.dv,u.bn,t)
t=this.a
u=this.x.f
t=t.ae
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bo
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ac(u.dw,u.bp,t)
t=this.a
u=this.y.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a5(u.dz,u.bp,t)
t=this.a
u=this.y.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bs
t.a.uniform1f(t.d,r)
break
case C.e:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ac(u.dA,u.br,t)
t=this.a
u=this.z.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bs
u.a.uniform1f(u.d,r)
break
case C.f:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a5(u.dB,u.br,t)
t=this.a
u=this.z.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bs
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cl
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.cJ(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.j()
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cm
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb4(i)
r=h.b
g=s.gcM(s)
f=s.gcN(s)
s=s.gcO(s)
r.a.uniform3f(r.d,g,f,s)
s=l.ba(i.gb4(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gal(i)
f=h.d
g=s.gbC()
r=s.gbb()
s=s.gbk()
f.a.uniform3f(f.d,g,r,s)
s=i.gc6()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc7()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc8()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dO
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cn
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb4(i)
r=h.b
g=s.gcM(s)
f=s.gcN(s)
s=s.gcO(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gck(i).iZ()
f=h.c
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=l.ba(i.gb4(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gal(i)
r=h.e
g=s.gbC()
f=s.gbb()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.giX()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giW()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc8()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.co
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gb6()
H.v(p,"$isc",s,"$asc")
if(!C.a.aU(p,r)){r.saX(0,p.length)
C.a.h(p,r)}r=i.gck(i)
g=h.d
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
g.a.uniform3f(g.d,f,e,r)
r=i.gbD()
e=h.b
f=r.gaK(r)
g=r.gaL(r)
r=r.gaM()
e.a.uniform3f(e.d,f,g,r)
r=i.gb5(i)
g=h.c
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
g.a.uniform3f(g.d,f,e,r)
r=l.cJ(i.gck(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.j()
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gal(i)
f=h.f
e=g.gbC()
r=g.gbb()
g=g.gbk()
f.a.uniform3f(f.d,e,r,g)
g=i.gb6()
r=g.gaY(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaY(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaX(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dQ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cp
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gb6()
H.v(p,"$isc",r,"$asc")
if(!C.a.aU(p,g)){g.saX(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gX(i))
g=i.gX(i).ba(new V.X(0,0,0))
f=h.b
e=g.gcM(g)
c=g.gcN(g)
g=g.gcO(g)
f.a.uniform3f(f.d,e,c,g)
g=d.ba(new V.X(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.e1(0)
c=h.d
m=new Float32Array(H.br(H.v(new V.cn(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a9(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gal(i)
g=h.e
e=c.gbC()
f=c.gbb()
c=c.gbk()
g.a.uniform3f(g.d,e,f,c)
c=i.gb6()
g=c.gaY(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaY(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaX(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc6()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc7()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc8()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dR
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cq
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb6()
H.v(p,"$isc",z,"$asc")
if(!C.a.aU(p,s)){s.saX(0,p.length)
C.a.h(p,s)}s=i.gb4(i)
r=h.b
g=s.gcM(s)
f=s.gcN(s)
s=s.gcO(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gck(i)
f=h.c
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=i.gbD()
r=h.d
g=s.gaK(s)
f=s.gaL(s)
s=s.gaM()
r.a.uniform3f(r.d,g,f,s)
s=i.gb5(i)
f=h.e
g=s.gaK(s)
r=s.gaL(s)
s=s.gaM()
f.a.uniform3f(f.d,g,r,s)
s=l.ba(i.gb4(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb6()
r=s.gaY(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaY(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaX(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gal(i)
r=h.y
g=s.gbC()
f=s.gbb()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.gj4()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj5()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc8()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ac(z.dC,z.bt,u)
break
case C.f:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a5(z.dD,z.bt,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gX(u).e1(0)
a.Q=u}z=z.id
z.toString
z.ai(u.a9(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a5(z.dE,z.dF,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bu
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ac(z.dG,z.bv,u)
u=this.a
z=this.cx.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a5(z.dH,z.bv,u)
u=this.a
z=this.cx.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bx
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bw
u.a.uniform1f(u.d,s)
break
case C.e:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ac(z.dI,z.by,u)
u=this.a
z=this.cy.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,s)
break
case C.f:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a5(z.dJ,z.by,u)
u=this.a
z=this.cy.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bz
z.a.uniform1f(z.d,t)
break
case C.e:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ac(z.dK,z.bA,t)
t=this.a
z=this.db.f
t=t.bz
t.a.uniform1f(t.d,z)
break
case C.f:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a5(z.dL,z.bA,t)
t=this.a
z=this.db.f
t=t.bz
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bj(a)
z=b.e
z.bj(a)
z.aP(a)
z.ei(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].ei(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.hu()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d1().ae}},im:{"^":"d2;0f,a,b,0c,0d,0e"},d2:{"^":"b;",
bg:["ev",function(){}]},io:{"^":"d2;a,b,0c,0d,0e"},ba:{"^":"d2;0f,a,b,0c,0d,0e",
dg:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.ab(y)}},
bg:["bI",function(){this.ev()
this.dg(new V.a4(1,1,1))}],
sal:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bg()
z=this.a
z.a=null
z.ab(null)}this.dg(b)}},iq:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
fH:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ab(z)}},
bg:function(){this.bI()
this.fH(1)}},ir:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
c0:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ab(z)}},
bg:function(){this.bI()
this.c0(100)}},dd:{"^":"b;"}}],["","",,T,{"^":"",eF:{"^":"cN;"},jn:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",hb:{"^":"b;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isc3:1},c3:{"^":"b;"},eh:{"^":"b;",
aZ:["eu",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["cT",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc3:1},bH:{"^":"eh;0a",
aZ:function(a,b){return!this.eu(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}},j5:{"^":"b;0a",
ez:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.o,P.ai])
for(y=new H.ef(a,a.gl(a),0,[H.ak(a,"w",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.bl(0,b)},
i:function(a){var z=this.a
return P.c4(z.gao(z),0,null)},
$isc3:1,
p:{
a8:function(a){var z=new V.j5()
z.ez(a)
return z}}},ey:{"^":"b;a,b,0c,0d",
ghN:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eM(this.a.O(0,b))
w.a=H.d([],[V.c3])
w.c=!1
C.a.h(this.c,w)
return w},
hx:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},eJ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h1(this.b,"\n","\\n")
y=H.h1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eK:{"^":"b;a,b,0c",
i:function(a){return this.b}},jv:{"^":"b;0a,0b,0c",
O:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.ey(this,b)
z.c=H.d([],[V.eM])
this.a.m(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eK(this,a)
y=P.h
z.c=new H.aX(0,0,[y,y])
this.b.m(0,a,z)}return z},
ii:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eJ])
y=this.c
x=[P.o]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hx(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c4(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.ghN(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c4(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eJ(o==null?p.b:o,q,t)}++t}}}},eM:{"^":"eh;b,0c,0a",
i:function(a){return this.b.b+": "+this.cT(0)}}}],["","",,X,{"^":"",dQ:{"^":"b;",$isaK:1},hN:{"^":"eD;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.N()
this.x=z}return z}},iC:{"^":"b;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.N()
this.f=z}return z},
aR:[function(a){var z
H.f(a,"$isz")
z=this.f
if(!(z==null))z.E(a)},function(){return this.aR(null)},"ip","$1","$0","gcV",0,2,1],
sb1:function(a){var z,y
if(!J.Q(this.b,a)){z=this.b
if(z!=null)z.gA().M(0,this.gcV())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gcV())
z=new D.H("mover",y,this.b,this,[U.a6])
z.b=!0
this.aR(z)}},
$isaK:1,
$isdQ:1},eD:{"^":"b;"}}],["","",,V,{"^":"",
n0:function(a){P.ju(C.G,new V.n1(a))},
n1:{"^":"m:48;a",
$1:function(a){H.f(a,"$isbl")
P.dC(C.d.eh(this.a.ghB(),2)+" fps")}},
iQ:{"^":"b;a,b,0c",
dn:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f5().gcD().k(0,H.k(z))
if(y==null)if(d){c.$0()
this.dl(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dG(this.c).h(0,v)
t=W.hP("radio")
t.checked=x
t.name=z
z=W.ad
W.a2(t,"change",H.l(new V.iR(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dG(this.c).h(0,w.createElement("br"))},
aI:function(a,b,c){return this.dn(a,b,c,!1)},
dl:function(a){var z,y,x,w,v
z=P.f5()
y=P.h
x=P.i6(z.gcD(),y,y)
x.m(0,this.a,a)
w=z.ec(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lk([],[]).cK(""),"",v)}},
iR:{"^":"m:20;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dl(this.d)}}},
ja:{"^":"b;0a,0b",
eB:function(a,b){var z,y,x,w,v,u,t
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
t=W.ad
W.a2(z,"scroll",H.l(new V.jd(x),{func:1,ret:-1,args:[t]}),!1,t)},
dr:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.h],"$asc")
this.fK()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ii(C.a.hH(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.h0(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cz(C.R,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
hd:function(a){var z,y,x,w,v,u,t
H.v(a,"$isc",[P.h],"$asc")
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
x=H.f(w.insertCell(-1),"$isdc").style
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
t=H.f(w.insertCell(-1),"$isdc")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fK:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jv()
y=P.h
z.a=new H.aX(0,0,[y,V.ey])
z.b=new H.aX(0,0,[y,V.eK])
z.c=z.O(0,"Start")
y=z.O(0,"Start").C(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").C(0,"Bold")
x=new V.bH()
w=[V.c3]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").C(0,"Italic")
x=new V.bH()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").C(0,"Code")
x=new V.bH()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").C(0,"LinkHead")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").C(0,"LinkTail")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").C(0,"Other").a,new V.hb())
x=z.O(0,"Other").C(0,"Other")
y=new V.bH()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.O(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
p:{
jb:function(a,b){var z=new V.ja()
z.eB(a,!0)
return z}}},
jd:{"^":"m:20;a",
$1:function(a){P.eH(C.q,new V.jc(this.a))}},
jc:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.a8(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=V.jb("Test 035",!0)
y=W.dR(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dr(H.d(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],x))
z.hd(H.d(["shapes"],x))
z.dr(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.js(w,!0,!0,!0,!1)
u=new E.aV()
u.a=""
u.b=!0
z=E.aV
t=O.cS(z)
u.y=t
t.bd(u.ghP(),u.ghR())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.scR(0,null)
u.sb1(null)
u.sb1(U.b4(null))
s=new O.ij()
t=O.cS(V.ax)
s.e=t
t.bd(s.gf7(),s.gf8())
t=new O.ba(s,"emission")
t.c=C.c
t.f=new V.a4(0,0,0)
s.f=t
t=new O.ba(s,"ambient")
t.c=C.c
t.f=new V.a4(0,0,0)
s.r=t
t=new O.ba(s,"diffuse")
t.c=C.c
t.f=new V.a4(0,0,0)
s.x=t
t=new O.ba(s,"invDiffuse")
t.c=C.c
t.f=new V.a4(0,0,0)
s.y=t
t=new O.ir(s,"specular")
t.c=C.c
t.f=new V.a4(0,0,0)
t.ch=100
s.z=t
t=new O.io(s,"bump")
t.c=C.c
s.Q=t
s.ch=null
t=new O.ba(s,"reflect")
t.c=C.c
t.f=new V.a4(0,0,0)
s.cx=t
t=new O.iq(s,"refract")
t.c=C.c
t.f=new V.a4(0,0,0)
t.ch=1
s.cy=t
t=new O.im(s,"alpha")
t.c=C.c
t.f=1
s.db=t
t=new D.hZ()
t.bJ(D.a1)
t.e=H.d([],[D.cg])
t.f=H.d([],[D.iE])
t.r=H.d([],[D.jf])
t.x=H.d([],[D.jo])
t.y=H.d([],[D.jp])
t.z=H.d([],[D.jq])
t.Q=null
t.ch=null
t.cQ(t.gf6(),t.gfq(),t.gft())
s.dx=t
r=t.Q
if(r==null){r=D.N()
t.Q=r
t=r}else t=r
t.h(0,s.gfE())
t=s.dx
r=t.ch
if(r==null){r=D.N()
t.ch=r
t=r}else t=r
t.h(0,s.gfa())
s.dy=null
t=s.dx
r=U.b4(V.ei(new V.X(0,0,0),new V.E(0,1,0),new V.E(1,1,-3)))
q=new V.a4(1,1,1)
p=new D.cg()
p.c=new V.a4(1,1,1)
p.a=new V.E(0,0,1)
o=p.b
p.b=r
r.gA().h(0,p.geF())
r=new D.H("mover",o,p.b,p,[U.a6])
r.b=!0
p.aB(r)
if(!p.c.q(0,q)){o=p.c
p.c=q
r=new D.H("color",o,q,p,[V.a4])
r.b=!0
p.aB(r)}t.h(0,p)
t=s.r
t.sal(0,new V.a4(0,0,1))
t=s.x
t.sal(0,new V.a4(0,1,0))
t=s.z
t.sal(0,new V.a4(1,0,0))
t=s.z
if(t.c===C.c){t.c=C.i
t.bI()
t.c0(100)
r=t.a
r.a=null
r.ab(null)}t.c0(10)
s.e.h(0,V.ae())
s.e.h(0,V.ae())
s.e.h(0,V.ae())
s.e.h(0,V.ae())
s.e.h(0,V.ae())
s.e.h(0,V.ae())
s.e.h(0,V.ae())
s.e.h(0,V.ae())
n=U.cV(null)
t=v.r
r=new U.jW()
p=U.cT()
p.scL(0,!0)
p.scv(6.283185307179586)
p.scz(0)
p.sW(0,0)
p.scw(100)
p.sS(0)
p.scj(0.5)
r.b=p
m=r.gaC()
p.gA().h(0,m)
p=U.cT()
p.scL(0,!0)
p.scv(6.283185307179586)
p.scz(0)
p.sW(0,0)
p.scw(100)
p.sS(0)
p.scj(0.5)
r.c=p
p.gA().h(0,m)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
l=new X.aE(!1,!1,!1)
o=r.d
r.d=l
p=[X.aE]
m=new D.H("modifiers",o,l,r,p)
m.b=!0
r.J(m)
m=r.f
if(m!==!1){r.f=!1
m=new D.H("invertX",m,!1,r,[P.ai])
m.b=!0
r.J(m)}m=r.r
if(m!==!1){r.r=!1
m=new D.H("invertY",m,!1,r,[P.ai])
m.b=!0
r.J(m)}r.aT(t)
n.h(0,r)
t=v.r
r=new U.jV()
m=U.cT()
m.scL(0,!0)
m.scv(6.283185307179586)
m.scz(0)
m.sW(0,0)
m.scw(100)
m.sS(0)
m.scj(0.2)
r.b=m
m.gA().h(0,r.gaC())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
l=new X.aE(!0,!1,!1)
o=r.c
r.c=l
m=new D.H("modifiers",o,l,r,p)
m.b=!0
r.J(m)
r.aT(t)
n.h(0,r)
t=v.r
r=new U.jX()
r.c=0.01
r.d=0
r.e=0
l=new X.aE(!1,!1,!1)
r.b=l
p=new D.H("modifiers",null,l,r,p)
p.b=!0
r.J(p)
r.aT(t)
n.h(0,r)
n.h(0,U.b4(V.co(0,0,5)))
k=U.cV(null)
k.h(0,U.b4(V.co(0.5,0,0)))
k.h(0,U.bK(0,1.7,0,0,0,0))
k.h(0,U.bK(0.5,0,0,0,0,0))
k.h(0,U.b4(V.d4(0.35)))
k.h(0,U.bK(-0.5,0,0,0,0,0))
k.h(0,U.bK(0,-1.7,0,0,0,0))
k.h(0,U.b4(V.co(-0.5,0,0)))
j=U.cV(null)
j.h(0,U.bK(0,-1.4,0,0,0,0))
j.h(0,U.b4(V.co(0.5,0,0)))
j.h(0,U.bK(0,1.4,0,0,0,0))
i=new M.hF()
z=O.cS(z)
i.d=z
z.bd(i.gfb(),i.gfc())
i.e=null
i.f=null
i.r=null
i.x=null
h=new X.iC()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.sb1(null)
z=h.c
if(!$.p.$2(z,1.0471975511965976)){o=h.c
h.c=1.0471975511965976
z=new D.H("fov",o,1.0471975511965976,h,[P.q])
z.b=!0
h.aR(z)}z=h.d
if(!$.p.$2(z,0.1)){o=h.d
h.d=0.1
z=new D.H("near",o,0.1,h,[P.q])
z.b=!0
h.aR(z)}z=h.e
if(!$.p.$2(z,2000)){o=h.e
h.e=2000
z=new D.H("far",o,2000,h,[P.q])
z.b=!0
h.aR(z)}z=i.a
if(z!==h){if(z!=null)z.gA().M(0,i.gaj())
o=i.a
i.a=h
h.gA().h(0,i.gaj())
z=new D.H("camera",o,i.a,i,[X.dQ])
z.b=!0
i.aD(z)}g=new X.hN()
z=new V.b2(0,0,0,1)
g.a=z
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
z=V.et(0,0,1,1)
g.r=z
z=i.b
if(z!==g){if(z!=null)z.gA().M(0,i.gaj())
o=i.b
i.b=g
g.gA().h(0,i.gaj())
z=new D.H("target",o,i.b,i,[X.eD])
z.b=!0
i.aD(z)}i.sef(null)
i.sef(s)
i.d.h(0,u)
i.a.sb1(n)
z=i.e
if(z==null){z=D.N()
i.e=z}z.h(0,new K.mM(k,j,s))
z=v.d
if(z!==i){if(z!=null)z.gA().M(0,v.gcU())
v.d=i
i.gA().h(0,v.gcU())
v.eD()}z=new K.mU(u)
t=new V.iQ("shapes",!0)
x=x.getElementById("shapes")
t.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
t.dn(0,"Cuboid",new K.mN(z),!0)
t.aI(0,"Cylinder",new K.mO(z))
t.aI(0,"Cone",new K.mP(z))
t.aI(0,"Sphere",new K.mQ(z))
t.aI(0,"Toroid",new K.mR(z))
t.aI(0,"Knot",new K.mS(z))
t.aI(0,"Grid",new K.mT(z))
V.n0(v)},
mM:{"^":"m:10;a,b,c",
$1:function(a){var z,y,x,w
z=H.j(H.f(a,"$isz"),"$isez").c
y=this.a.ah(0,z,null)
x=this.b.ah(0,z,null)
w=this.c
w.e.m(0,0,y)
w.e.m(0,1,x)
w.e.m(0,2,y)
w.e.m(0,3,x)
w.e.m(0,4,y)
w.e.m(0,5,x)
w.e.m(0,6,y)
w.e.m(0,7,x)}},
mU:{"^":"m:50;a",
$1:function(a){a.ad()
this.a.scR(0,a)}},
mN:{"^":"m:0;a",
$0:function(){this.a.$1(F.fM(30,null,null,30))}},
mO:{"^":"m:0;a",
$0:function(){this.a.$1(F.fN(1,!0,!0,100,20,1))}},
mP:{"^":"m:0;a",
$0:function(){this.a.$1(F.fN(1,!0,!1,30,12,0))}},
mQ:{"^":"m:0;a",
$0:function(){this.a.$1(F.n2(20,null,20))}},
mR:{"^":"m:0;a",
$0:function(){this.a.$1(F.n6(30,1.5,15,0.25))}},
mS:{"^":"m:0;a",
$0:function(){this.a.$1(F.mJ(120,1,2,12,0.1,3))}},
mT:{"^":"m:0;a",
$0:function(){this.a.$1(F.mz(4,null,4))}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e9.prototype
return J.hU.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.aI=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.mw=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.mx=function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.dy=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.aZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).q(a,b)}
J.h3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mw(a).N(a,b)}
J.dD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mx(a).j(a,b)}
J.dE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aI(a).k(a,b)}
J.cK=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fU(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).m(a,b,c)}
J.h4=function(a,b){return J.dy(a).F(a,b)}
J.h5=function(a,b,c){return J.aZ(a).fC(a,b,c)}
J.h6=function(a,b,c,d){return J.aZ(a).dq(a,b,c,d)}
J.h7=function(a,b){return J.dy(a).V(a,b)}
J.cL=function(a,b,c){return J.aI(a).ho(a,b,c)}
J.cM=function(a,b){return J.c9(a).I(a,b)}
J.h8=function(a,b,c,d){return J.c9(a).ax(a,b,c,d)}
J.dF=function(a,b){return J.c9(a).K(a,b)}
J.dG=function(a){return J.aZ(a).gcf(a)}
J.bY=function(a){return J.P(a).gT(a)}
J.by=function(a){return J.c9(a).gZ(a)}
J.av=function(a){return J.aI(a).gl(a)}
J.h9=function(a,b){return J.aZ(a).i6(a,b)}
J.ha=function(a,b){return J.aZ(a).sa_(a,b)}
J.a9=function(a){return J.P(a).i(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cR.prototype
C.H=J.t.prototype
C.a=J.b9.prototype
C.h=J.e9.prototype
C.t=J.ea.prototype
C.d=J.c0.prototype
C.b=J.c1.prototype
C.O=J.c2.prototype
C.U=H.d8.prototype
C.V=W.iy.prototype
C.z=J.iD.prototype
C.r=J.c6.prototype
C.A=W.bO.prototype
C.B=W.kj.prototype
C.D=new P.hg(!1)
C.C=new P.hf(C.D)
C.E=new P.iB()
C.F=new P.k4()
C.j=new P.l6()
C.c=new A.cf(0,"ColorSourceType.None")
C.i=new A.cf(1,"ColorSourceType.Solid")
C.e=new A.cf(2,"ColorSourceType.Texture2D")
C.f=new A.cf(3,"ColorSourceType.TextureCube")
C.q=new P.b6(0)
C.G=new P.b6(5e6)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.w=H.d(I.al([127,2047,65535,1114111]),[P.o])
C.m=H.d(I.al([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.d(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.d(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.Q=H.d(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.R=H.d(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.p=H.d(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.d(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.S=H.d(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.d(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.P=H.d(I.al([]),[P.h])
C.T=new H.hs(0,{},C.P,[P.h,P.h])
C.k=new P.jY(!1)
$.aC=0
$.bz=null
$.dL=null
$.dr=!1
$.fS=null
$.fI=null
$.h_=null
$.cD=null
$.cG=null
$.dz=null
$.bs=null
$.bT=null
$.bU=null
$.ds=!1
$.T=C.j
$.e0=null
$.e_=null
$.dZ=null
$.dY=null
$.p=V.is()
$.ep=null
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
I.$lazy(y,x,w)}})(["dX","$get$dX",function(){return H.fR("_$dart_dartClosure")},"cY","$get$cY",function(){return H.fR("_$dart_js")},"eN","$get$eN",function(){return H.aF(H.cu({
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.aF(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eP","$get$eP",function(){return H.aF(H.cu(null))},"eQ","$get$eQ",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aF(H.cu(void 0))},"eV","$get$eV",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aF(H.eT(null))},"eR","$get$eR",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aF(H.eT(void 0))},"eW","$get$eW",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dl","$get$dl",function(){return P.kk()},"bV","$get$bV",function(){return[]},"f8","$get$f8",function(){return P.k1()},"fe","$get$fe",function(){return H.iw(H.br(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"fy","$get$fy",function(){return P.iW("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fE","$get$fE",function(){return P.m5()},"dV","$get$dV",function(){return{}},"fb","$get$fb",function(){return Z.as(0)},"f9","$get$f9",function(){return Z.as(511)},"aQ","$get$aQ",function(){return Z.as(1)},"aP","$get$aP",function(){return Z.as(2)},"aO","$get$aO",function(){return Z.as(4)},"aR","$get$aR",function(){return Z.as(8)},"aS","$get$aS",function(){return Z.as(16)},"bM","$get$bM",function(){return Z.as(32)},"bN","$get$bN",function(){return Z.as(64)},"fa","$get$fa",function(){return Z.as(96)},"bp","$get$bp",function(){return Z.as(128)},"aN","$get$aN",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.G,args:[F.ag,P.q,P.q]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[P.o,[P.i,E.aV]]},{func:1,ret:P.G,args:[D.z]},{func:1,ret:P.G,args:[F.ao]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:V.X,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.q},{func:1,ret:P.G,args:[W.ad]},{func:1,ret:P.h,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.i,V.ax]]},{func:1,ret:-1,args:[P.o,[P.i,U.a6]]},{func:1,ret:-1,args:[P.o,[P.i,D.a1]]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.b],opt:[P.az]},{func:1,ret:P.ai,args:[W.K]},{func:1,ret:P.G,args:[P.a_]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.ai,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bO]},{func:1,args:[,P.h]},{func:1,ret:P.ai,args:[[P.i,D.a1]]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.h,P.o]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.o,args:[[P.c,P.o],P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.G,args:[P.h,,]},{func:1,ret:P.G,args:[P.h]},{func:1,ret:W.a0,args:[W.K]},{func:1,ret:[P.J,P.h,P.h],args:[[P.J,P.h,P.h],P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.G,args:[P.bl]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[F.ct]},{func:1,ret:P.R,args:[P.o]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n5(d||a)
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
Isolate.dw=a.dw
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fX,[])
else K.fX([])})})()
//# sourceMappingURL=test.dart.js.map
