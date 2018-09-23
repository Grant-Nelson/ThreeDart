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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dq(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.ds=function(){}
var dart=[["","",,H,{"^":"",ns:{"^":"b;a"}}],["","",,J,{"^":"",
O:function(a){return void 0},
dx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cA:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dv==null){H.mC()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c3("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.mH(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
t:{"^":"b;",
q:function(a,b){return a===b},
gT:function(a){return H.bH(a)},
i:["en",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hT:{"^":"t;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isah:1},
e9:{"^":"t;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isG:1},
cU:{"^":"t;",
gT:function(a){return 0},
i:["eo",function(a){return String(a)}]},
iC:{"^":"cU;"},
c4:{"^":"cU;"},
c_:{"^":"cU;",
i:function(a){var z=a[$.$get$dV()]
if(z==null)return this.eo(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscQ:1},
b7:{"^":"t;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.C("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.r(P.C("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hG:function(a){return this.C(a,"")},
hy:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bH:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Z(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Z(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hR())},
ax:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.B(0,1))a[z]=d},
bn:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gZ:function(a){return new J.az(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cb(b,"newLength",null))
if(b<0)throw H.a(P.Z(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b>=a.length||b<0)throw H.a(H.aF(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b>=a.length||b<0)throw H.a(H.aF(a,b))
a[b]=c},
$isk:1,
$isc:1,
p:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Z(a,0,4294967295,"length",null))
return J.e7(new Array(a),b)},
e7:function(a,b){return J.bA(H.d(a,[b]))},
bA:function(a){H.bU(a)
a.fixed$length=Array
return a}}},
nr:{"^":"b7;$ti"},
az:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bY:{"^":"t;",
ghF:function(a){return a===0?1/a<0:a<0},
dN:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
ed:function(a,b){var z
if(b>20)throw H.a(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghF(a))return"-"+z
return z},
b9:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.C("Unexpected toString result: "+z))
x=J.aG(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a*b},
be:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
er:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dd(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dd(a,b)},
dd:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.da(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fL:function(a,b){if(b<0)throw H.a(H.ag(b))
return this.da(a,b)},
da:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a<b},
$isq:1,
$isa_:1},
e8:{"^":"bY;",$ism:1},
hU:{"^":"bY;"},
bZ:{"^":"t;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aF(a,b))
if(b<0)throw H.a(H.aF(a,b))
if(b>=a.length)H.r(H.aF(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aF(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cb(b,null,null))
return a+b},
aR:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a4:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cp(b,null,null))
if(b>c)throw H.a(P.cp(b,null,null))
if(c>a.length)throw H.a(P.cp(c,null,null))
return a.substring(b,c)},
az:function(a,b){return this.t(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hT:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
a7:function(a,b){return this.hT(a,b," ")},
dV:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dU:function(a,b){return this.dV(a,b,0)},
hn:function(a,b,c){if(c>a.length)throw H.a(P.Z(c,0,a.length,null,null))
return H.h_(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseo:1,
$isi:1}}],["","",,H,{"^":"",
cB:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hR:function(){return new P.jf("No element")},
a4:{"^":"jK;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascr:function(){return[P.m]},
$asx:function(){return[P.m]},
$ask:function(){return[P.m]},
$asc:function(){return[P.m]}},
hC:{"^":"k;"},
ee:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aG(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
ig:{"^":"k;a,b,$ti",
gZ:function(a){return new H.ih(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
H:function(a,b){return this.b.$1(J.cH(this.a,b))},
$ask:function(a,b){return[b]}},
ih:{"^":"cS;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascS:function(a,b){return[b]}},
kg:{"^":"k;a,b,$ti",
gZ:function(a){return new H.kh(J.bv(this.a),this.b,this.$ti)}},
kh:{"^":"cS;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cg:{"^":"b;$ti"},
cr:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ay(this,"cr",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){H.z(d,H.ay(this,"cr",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
jK:{"^":"ck+cr;"}}],["","",,H,{"^":"",
hr:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
mx:function(a){return init.types[H.D(a)]},
fT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ag(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iM:function(a,b){var z,y,x,w,v,u
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
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.O(a).$isc4){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.az(w,1)
r=H.dw(H.bU(H.b_(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iE:function(){if(!!self.location)return self.location.href
return},
eq:function(a){var z,y,x,w,v
H.bU(a)
z=J.at(a)
if(typeof z!=="number")return z.ek()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iN:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ag(w))}return H.eq(z)},
er:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ag(x))
if(x<0)throw H.a(H.ag(x))
if(x>65535)return H.iN(a)}return H.eq(a)},
iO:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ek()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cn:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.Z(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iL:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iJ:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iF:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iG:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iI:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iK:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iH:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ag(a))},
e:function(a,b){if(a==null)J.at(a)
throw H.a(H.aF(a,b))},
aF:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cp(b,"index",null)},
mr:function(a,b,c){if(a>c)return new P.co(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.co(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
ag:function(a){return new P.aH(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.en()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h1})
z.name=""}else z.toString=H.h1
return z},
h1:function(){return J.a9(this.dartException)},
r:function(a){throw H.a(a)},
A:function(a){throw H.a(P.b2(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.em(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eN()
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
if(m!=null)return z.$1(H.cV(H.M(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.M(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.em(H.M(y),m))}}return z.$1(new H.jJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ey()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ey()
return a},
bt:function(a){var z
if(a==null)return new H.fp(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fp(a)},
mu:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mE:function(a,b,c,d,e,f){H.f(a,"$iscQ")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mE)
a.$identity=z
return z},
hn:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.O(d).$isc){z.$reflectionInfo=d
x=H.iT(z).r}else x=d
w=e?Object.create(new H.jg().constructor.prototype):Object.create(new H.cK(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.B()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dQ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mx,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dJ:H.cL
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dQ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hk:function(a,b,c,d){var z=H.cL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dQ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hm(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hk(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.B()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cc("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.B()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cc("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hl:function(a,b,c,d){var z,y
z=H.cL
y=H.dJ
switch(b?-1:a){case 0:throw H.a(H.j2("Intercepted function with no arguments."))
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
z=$.bw
if(z==null){z=H.cc("self")
$.bw=z}y=$.dI
if(y==null){y=H.cc("receiver")
$.dI=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hl(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.B()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.B()
$.aA=y+1
return new Function(z+y+"}")()},
dq:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bU(b))
H.D(c)
y=!!J.O(d).$isc?J.bA(d):d
return H.hn(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
ms:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
mQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
fY:function(a,b){throw H.a(H.ax(a,H.M(b).substring(3)))},
mS:function(a,b){var z=J.aG(b)
throw H.a(H.hj(a,z.t(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.fY(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.mS(a,b)},
bU:function(a){if(a==null)return a
if(!!J.O(a).$isc)return a
throw H.a(H.ax(a,"List"))},
fV:function(a,b){if(a==null)return a
if(!!J.O(a).$isc)return a
if(J.O(a)[b])return a
H.fY(a,b)},
fP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fP(J.O(a))
if(z==null)return!1
y=H.fS(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dl)return a
$.dl=!0
try{if(H.c6(a,b))return a
z=H.c9(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.dl=!1}},
dt:function(a,b){if(a!=null&&!H.dp(a,b))H.r(H.ax(a,H.c9(b)))
return a},
fG:function(a){var z
if(a instanceof H.n){z=H.fP(J.O(a))
if(z!=null)return H.c9(z)
return"Closure"}return H.bb(a)},
mZ:function(a){throw H.a(new P.hv(H.M(a)))},
fQ:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
op:function(a,b,c){return H.bu(a["$as"+H.l(c)],H.b_(b))},
aZ:function(a,b,c,d){var z
H.M(c)
H.D(d)
z=H.bu(a["$as"+H.l(c)],H.b_(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.M(b)
H.D(c)
z=H.bu(a["$as"+H.l(b)],H.b_(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b_(a)
return z==null?null:z[b]},
c9:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dw(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.m9(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
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
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b0(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b0(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b0(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b0(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dw:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b0(u,c)}v="<"+z.i(0)+">"
return v},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bT:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b_(a)
y=J.O(a)
if(y[b]==null)return!1
return H.fJ(H.bu(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bU(c)
H.M(d)
if(a==null)return a
z=H.bT(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dw(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fJ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
on:function(a,b,c){return a.apply(b,H.bu(J.O(b)["$as"+H.l(c)],H.b_(b)))},
fU:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fU(z)}return!1},
dp:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fU(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dp(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.O(a).constructor
x=H.b_(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dp(a,b))throw H.a(H.ax(a,H.c9(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cQ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bu(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c9(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fJ(H.bu(r,z),b,u,d)},
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mP(m,b,l,d)},
mP:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
oo:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mH:function(a){var z,y,x,w,v,u
z=H.M($.fR.$1(a))
y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fI.$2(a,z))
if(z!=null){y=$.cz[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cD(x)
$.cz[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cC[z]=x
return x}if(v==="-"){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fX(a,x)
if(v==="*")throw H.a(P.c3(z))
if(init.leafTags[z]===true){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fX(a,x)},
fX:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dx(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cD:function(a){return J.dx(a,!1,null,!!a.$isF)},
mO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cD(z)
else return J.dx(z,c,null,null)},
mC:function(){if(!0===$.dv)return
$.dv=!0
H.mD()},
mD:function(){var z,y,x,w,v,u,t,s
$.cz=Object.create(null)
$.cC=Object.create(null)
H.my()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fZ.$1(v)
if(u!=null){t=H.mO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
my:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.bq(C.I,H.bq(C.N,H.bq(C.u,H.bq(C.u,H.bq(C.M,H.bq(C.J,H.bq(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fR=new H.mz(v)
$.fI=new H.mA(u)
$.fZ=new H.mB(t)},
bq:function(a,b){return a(b)||b},
h_:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h0:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hq:{"^":"b;$ti",
i:function(a){return P.cX(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hr()},
$isJ:1},
hs:{"^":"hq;a,b,c,$ti",
gl:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bo(0,b))return
return this.d1(b)},
d1:function(a){return this.b[H.M(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.d1(v),z))}}},
iS:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jw:{"^":"b;a,b,c,d,e,f",
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
aD:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jw(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eT:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iz:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
em:function(a,b){return new H.iz(a,b==null?null:b.method)}}},
hX:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cV:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hX(a,y,z?null:b.receiver)}}},
jJ:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n0:{"^":"n:20;a",
$1:function(a){if(!!J.O(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isaw:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
gei:function(){return this},
$iscQ:1,
gei:function(){return this}},
eE:{"^":"n;"},
jg:{"^":"eE;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cK:{"^":"eE;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.bV(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cL:function(a){return a.a},
dJ:function(a){return a.c},
cc:function(a){var z,y,x,w,v
z=new H.cK("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jx:{"^":"a5;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.jx("TypeError: "+H.l(P.cf(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
hi:{"^":"a5;a",
i:function(a){return this.a},
p:{
hj:function(a,b){return new H.hi("CastError: "+H.l(P.cf(a))+": type '"+H.fG(a)+"' is not a subtype of type '"+b+"'")}}},
j1:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j2:function(a){return new H.j1(a)}}},
aW:{"^":"ic;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gam:function(a){return new H.i1(this,[H.y(this,0)])},
bo:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cZ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cZ(y,b)}else return this.hC(b)},
hC:function(a){var z=this.d
if(z==null)return!1
return this.cq(this.bQ(z,this.cp(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.hD(b)},
hD:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bQ(z,this.cp(a))
x=this.cq(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bV()
this.b=z}this.cS(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bV()
this.c=y}this.cS(y,b,c)}else this.hE(b,c)},
hE:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bV()
this.d=z}y=this.cp(a)
x=this.bQ(z,y)
if(x==null)this.c1(z,y,[this.bW(a,b)])
else{w=this.cq(x,a)
if(w>=0)x[w].b=b
else x.push(this.bW(a,b))}},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cS:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bg(a,b)
if(z==null)this.c1(a,b,this.bW(b,c))
else z.b=c},
eX:function(){this.r=this.r+1&67108863},
bW:function(a,b){var z,y
z=new H.i0(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eX()
return z},
cp:function(a){return J.bV(a)&0x3ffffff},
cq:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.cX(this)},
bg:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
eQ:function(a,b){delete a[b]},
cZ:function(a,b){return this.bg(a,b)!=null},
bV:function(){var z=Object.create(null)
this.c1(z,"<non-identifier-key>",z)
this.eQ(z,"<non-identifier-key>")
return z},
$isec:1},
i0:{"^":"b;a,b,0c,0d"},
i1:{"^":"hC;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.i2(z,z.r,this.$ti)
y.c=z.e
return y}},
i2:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mz:{"^":"n:20;a",
$1:function(a){return this.a(a)}},
mA:{"^":"n:41;a",
$2:function(a,b){return this.a(a,b)}},
mB:{"^":"n:50;a",
$1:function(a){return this.a(H.M(a))}},
hV:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseo:1,
$isiU:1,
p:{
hW:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.W("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mt:function(a){return J.e7(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
iv:function(a){return new Int8Array(a)},
aE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aF(b,a))},
m3:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mr(a,b,c))
return b},
el:{"^":"t;",$isel:1,"%":"ArrayBuffer"},
d1:{"^":"t;",$isd1:1,"%":"DataView;ArrayBufferView;d0|fj|fk|iw|fl|fm|aX"},
d0:{"^":"d1;",
gl:function(a){return a.length},
$isF:1,
$asF:I.ds},
iw:{"^":"fk;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.ms(c)
H.aE(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.q]},
$asx:function(){return[P.q]},
$isk:1,
$ask:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fm;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aE(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.m]},
$asx:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nB:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nC:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nD:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nE:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nF:{"^":"aX;",
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nG:{"^":"aX;",
gl:function(a){return a.length},
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d2:{"^":"aX;",
gl:function(a){return a.length},
k:function(a,b){H.aE(b,a,a.length)
return a[b]},
bH:function(a,b,c){return new Uint8Array(a.subarray(b,H.m3(b,c,a.length)))},
$isd2:1,
$isR:1,
"%":";Uint8Array"},
fj:{"^":"d0+x;"},
fk:{"^":"fj+cg;"},
fl:{"^":"d0+x;"},
fm:{"^":"fl+cg;"}}],["","",,P,{"^":"",
kj:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mg()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.kl(z),1)).observe(y,{childList:true})
return new P.kk(z,y,x)}else if(self.setImmediate!=null)return P.mh()
return P.mi()},
oc:[function(a){self.scheduleImmediate(H.br(new P.km(H.h(a,{func:1,ret:-1})),0))},"$1","mg",4,0,11],
od:[function(a){self.setImmediate(H.br(new P.kn(H.h(a,{func:1,ret:-1})),0))},"$1","mh",4,0,11],
oe:[function(a){P.d9(C.q,H.h(a,{func:1,ret:-1}))},"$1","mi",4,0,11],
d9:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.a1(a.a,1000)
return P.ln(z<0?0:z,b)},
eI:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bi]})
z=C.e.a1(a.a,1000)
return P.lo(z<0?0:z,b)},
mc:function(a,b){if(H.c6(a,{func:1,args:[P.b,P.aw]}))return b.i1(a,null,P.b,P.aw)
if(H.c6(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mb:function(){var z,y
for(;z=$.bp,z!=null;){$.bR=null
y=z.b
$.bp=y
if(y==null)$.bQ=null
z.a.$0()}},
om:[function(){$.dm=!0
try{P.mb()}finally{$.bR=null
$.dm=!1
if($.bp!=null)$.$get$dg().$1(P.fK())}},"$0","fK",0,0,3],
fF:function(a){var z=new P.fd(H.h(a,{func:1,ret:-1}))
if($.bp==null){$.bQ=z
$.bp=z
if(!$.dm)$.$get$dg().$1(P.fK())}else{$.bQ.b=z
$.bQ=z}},
mf:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fF(a)
$.bR=$.bQ
return}y=new P.fd(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bp=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
mT:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cy(null,null,C.j,a)
return}y.toString
P.cy(null,null,y,H.h(y.c7(a),z))},
eH:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.d9(a,b)}return P.d9(a,H.h(y.c7(b),z))},
jt:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eI(a,b)}x=y.dl(b,P.bi)
$.T.toString
return P.eI(a,H.h(x,z))},
cx:function(a,b,c,d,e){var z={}
z.a=d
P.mf(new P.md(z,e))},
fB:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fC:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
me:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cy:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c7(d):c.hj(d,-1)
P.fF(d)},
kl:{"^":"n:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kk:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
km:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kn:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fs:{"^":"b;a,0b,c",
eD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.lq(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
eE:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.lp(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbi:1,
p:{
ln:function(a,b){var z=new P.fs(!0,0)
z.eD(a,b)
return z},
lo:function(a,b){var z=new P.fs(!1,0)
z.eE(a,b)
return z}}},
lq:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lp:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.er(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hK:function(a){if(this.c!==6)return!0
return this.b.b.cE(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hB:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.b,P.aw]}))return H.dt(w.i9(z,a.a,a.b,null,y,P.aw),x)
else return H.dt(w.cE(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;dc:a<,b,0fD:c<,$ti",
ec:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mc(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cT(new P.bn(x,w,a,b,[z,c]))
return x},
ic:function(a,b){return this.ec(a,null,b)},
cT:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cT(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cy(null,null,z,H.h(new P.kC(this,a),{func:1,ret:-1}))}},
d6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.d6(a)
return}this.a=y
this.c=u.c}z.a=this.bj(a)
y=this.b
y.toString
P.cy(null,null,y,H.h(new P.kH(z,this),{func:1,ret:-1}))}},
bY:function(){var z=H.f(this.c,"$isbn")
this.c=null
return this.bj(z)},
bj:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cW:function(a){var z,y,x,w
z=H.y(this,0)
H.dt(a,{futureOr:1,type:z})
y=this.$ti
x=H.bT(a,"$isbz",y,"$asbz")
if(x){z=H.bT(a,"$isaT",y,null)
if(z)P.fg(a,this)
else P.kD(a,this)}else{w=this.bY()
H.z(a,z)
this.a=4
this.c=a
P.bM(this,w)}},
bM:[function(a,b){var z
H.f(b,"$isaw")
z=this.bY()
this.a=8
this.c=new P.ak(a,b)
P.bM(this,z)},function(a){return this.bM(a,null)},"im","$2","$1","geM",4,2,49],
$isbz:1,
p:{
kD:function(a,b){var z,y,x
b.a=1
try{a.ec(new P.kE(b),new P.kF(b),null)}catch(x){z=H.as(x)
y=H.bt(x)
P.mT(new P.kG(b,z,y))}},
fg:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.bY()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.f(b.c,"$isbn")
b.a=2
b.c=a
a.d6(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bM(z.a,b)}y=z.a
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
if(p){H.f(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cx(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kK(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kJ(x,b,r).$0()}else if((y&2)!==0)new P.kI(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.O(y).$isbz){if(y.a>=4){n=H.f(t.c,"$isbn")
t.c=null
b=t.bj(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fg(y,t)
return}}m=b.b
n=H.f(m.c,"$isbn")
m.c=null
b=m.bj(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kC:{"^":"n:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
kH:{"^":"n:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
kE:{"^":"n:14;a",
$1:function(a){var z=this.a
z.a=0
z.cW(a)}},
kF:{"^":"n:51;a",
$2:function(a,b){this.a.bM(a,H.f(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kG:{"^":"n:0;a,b,c",
$0:function(){this.a.bM(this.b,this.c)}},
kK:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e9(H.h(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.O(z).$isbz){if(z instanceof P.aT&&z.gdc()>=4){if(z.gdc()===8){w=this.b
w.b=H.f(z.gfD(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ic(new P.kL(t),null)
w.a=!1}}},
kL:{"^":"n:47;a",
$1:function(a){return this.a}},
kJ:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cE(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kI:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hK(z)&&w.e!=null){v=this.b
v.b=w.hB(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fd:{"^":"b;a,0b"},
d6:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.m])
z.a=0
this.hJ(new P.jj(z,this),!0,new P.jk(z,y),y.geM())
return y}},
jj:{"^":"n;a,b",
$1:function(a){H.z(a,H.ay(this.b,"d6",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ay(this.b,"d6",0)]}}},
jk:{"^":"n:0;a,b",
$0:function(){this.b.cW(this.a.a)}},
eA:{"^":"b;$ti"},
ji:{"^":"b;"},
bi:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lS:{"^":"b;",$isob:1},
md:{"^":"n:0;a,b",
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
l5:{"^":"lS;",
ia:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fB(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bt(x)
P.cx(null,null,this,z,H.f(y,"$isaw"))}},
ib:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fC(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bt(x)
P.cx(null,null,this,z,H.f(y,"$isaw"))}},
hj:function(a,b){return new P.l7(this,H.h(a,{func:1,ret:b}),b)},
c7:function(a){return new P.l6(this,H.h(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.l8(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fB(null,null,this,a,b)},
cE:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fC(null,null,this,a,b,c,d)},
i9:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.me(null,null,this,a,b,c,d,e,f)},
i1:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
l7:{"^":"n;a,b,c",
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l6:{"^":"n:3;a,b",
$0:function(){return this.a.ia(this.b)}},
l8:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ib(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i3:function(a,b,c,d,e){return new H.aW(0,0,[d,e])},
i4:function(a,b,c){H.bU(a)
return H.w(H.mu(a,new H.aW(0,0,[b,c])),"$isec",[b,c],"$asec")},
ed:function(a,b){return new H.aW(0,0,[a,b])},
i7:function(a,b,c,d){return new P.kS(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.ma(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eB(b,H.fV(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dn(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.eB(x.gaE(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dn:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
ma:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
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
i5:function(a,b,c){var z=P.i3(null,null,null,b,c)
a.K(0,new P.i6(z,b,c))
return z},
cX:function(a){var z,y,x
z={}
if(P.dn(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dC(a,new P.id(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kS:{"^":"kM;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fi(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.di()
this.b=z}return this.cU(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.di()
this.c=y}return this.cU(y,b)}else return this.eF(0,b)},
eF:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.di()
this.d=z}y=this.cX(b)
x=z[y]
if(x==null)z[y]=[this.bL(b)]
else{if(this.d2(x,b)>=0)return!1
x.push(this.bL(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d7(this.c,b)
else return this.fu(0,b)},
fu:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eU(z,b)
x=this.d2(y,b)
if(x<0)return!1
this.de(y.splice(x,1)[0])
return!0},
cU:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdh")!=null)return!1
a[b]=this.bL(b)
return!0},
d7:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdh")
if(z==null)return!1
this.de(z)
delete a[b]
return!0},
cV:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.dh(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cV()
return z},
de:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cV()},
cX:function(a){return J.bV(a)&0x3ffffff},
eU:function(a,b){return a[this.cX(b)]},
d2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
di:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dh:{"^":"b;a,0b,0c"},
kT:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fi:function(a,b,c){var z=new P.kT(a,b,[c])
z.c=a.e
return z}}},
kM:{"^":"j3;"},
i6:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
ck:{"^":"kU;",$isk:1,$isc:1},
x:{"^":"b;$ti",
gZ:function(a){return new H.ee(a,this.gl(a),0,[H.aZ(this,a,"x",0)])},
H:function(a,b){return this.k(a,b)},
ig:function(a,b){var z,y,x
z=H.d([],[H.aZ(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
ie:function(a){return this.ig(a,!0)},
ax:function(a,b,c,d){var z
H.z(d,H.aZ(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cR(a,"[","]")}},
ic:{"^":"ai;"},
id:{"^":"n:6;a,b",
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
H.h(b,{func:1,ret:-1,args:[H.aZ(this,a,"ai",0),H.aZ(this,a,"ai",1)]})
for(z=J.bv(this.gam(a));z.G();){y=z.gR(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.at(this.gam(a))},
i:function(a){return P.cX(a)},
$isJ:1},
lv:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
ie:{"^":"b;$ti",
k:function(a,b){return J.dB(this.a,b)},
m:function(a,b,c){J.cF(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
K:function(a,b){J.dC(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.a9(this.a)},
$isJ:1},
f3:{"^":"lw;a,$ti"},
j5:{"^":"b;$ti",
i:function(a){return P.cR(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dE("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=P.fi(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j3:{"^":"j5;"},
kU:{"^":"b+x;"},
lw:{"^":"ie+lv;$ti"}}],["","",,P,{"^":"",hf:{"^":"bW;a",
hN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$fe()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cB(C.b.F(b,s))
o=H.cB(C.b.F(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.t(b,x,y)
w.a+=H.cn(r)
x=s
continue}}throw H.a(P.W("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.t(b,x,d)
k=l.length
if(v>=0)P.dH(b,u,d,v,t,k)
else{j=C.e.be(k-1,4)+1
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aR(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dH(b,u,d,v,t,i)
else{j=C.e.be(i,4)
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aR(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.c,P.m],P.i]},
p:{
dH:function(a,b,c,d,e,f){if(C.e.be(f,4)!==0)throw H.a(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.W("Invalid base64 padding, more than two '=' characters",a,b))}}},hg:{"^":"bx;a",
$asbx:function(){return[[P.c,P.m],P.i]}},bW:{"^":"b;$ti"},bx:{"^":"ji;$ti"},hE:{"^":"bW;",
$asbW:function(){return[P.i,[P.c,P.m]]}},jX:{"^":"hE;a",
ghv:function(){return C.F}},k3:{"^":"bx;",
aW:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lR(0,0,x)
if(w.eS(a,b,z)!==z)w.dg(J.h7(a,z-1),0)
return C.U.bH(x,0,w.b)},
cd:function(a){return this.aW(a,0,null)},
$asbx:function(){return[P.i,[P.c,P.m]]}},lR:{"^":"b;a,b,c",
dg:function(a,b){var z,y,x,w,v
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
eS:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dg(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jY:{"^":"bx;a",
aW:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.jZ(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aL(b,c,y,null,null,null)
x=new P.an("")
w=new P.lO(!1,x,!0,0,0,0)
w.aW(a,b,y)
w.hx(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cd:function(a){return this.aW(a,0,null)},
$asbx:function(){return[[P.c,P.m],P.i]},
p:{
jZ:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k_(!1,b,c,d)
return},
k_:function(a,b,c,d){var z,y,x
z=$.$get$f8()
if(z==null)return
y=0===c
if(y&&!0)return P.de(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.de(z,b)
return P.de(z,b.subarray(c,d))},
de:function(a,b){if(P.k1(b))return
return P.k2(a,b)},
k2:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k1:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k0:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lO:{"^":"b;a,b,c,d,e,f",
hx:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.W("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lQ(c)
v=new P.lP(this,b,c,a)
$label0$0:for(u=J.aG(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bF()
if((r&192)!==128){q=P.W("Bad UTF-8 encoding 0x"+C.e.b9(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.W("Overlong encoding of 0x"+C.e.b9(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.e.b9(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cn(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cM()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.e.b9(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.W("Bad UTF-8 encoding 0x"+C.e.b9(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lQ:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aG(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bF()
if((w&127)!==w)return x-b}return z-b}},lP:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c2(this.d,a,b)}}}],["","",,P,{"^":"",
c8:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iM(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.W(a,null,null))},
hG:function(a){var z=J.O(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
i8:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
i9:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gZ(a);x.G();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bA(y),"$isc",z,"$asc")},
c2:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.er(z?C.a.bH(a,b,c):a)}if(!!J.O(a).$isd2)return H.iO(a,b,P.aL(b,c,a.length,null,null,null))
return P.jl(a,b,c)},
jl:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.Z(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Z(c,b,J.at(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.Z(c,b,x,null,null))
w.push(y.gR(y))}return H.er(w)},
iV:function(a,b,c){return new H.hV(a,H.hW(a,!1,!0,!1))},
f5:function(){var z=H.iE()
if(z!=null)return P.jP(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hG(a)},
v:function(a){return new P.ff(a)},
ia:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dy:function(a){H.mR(a)},
jP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f4(b>0||c<c?C.b.t(a,b,c):a,5,null).gef()
else if(y===32)return P.f4(C.b.t(a,z,c),0,null).gef()}x=new Array(8)
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
if(typeof v!=="number")return v.ii()
if(v>=b)if(P.fD(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.M()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.M()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.M()
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aR(a,s,r,"/");++r;++q;++c}else{a=C.b.t(a,b,s)+"/"+C.b.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a4(a,"http",b)){if(x&&t+3===s&&C.b.a4(a,"80",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
else if(v===z&&C.b.a4(a,"https",b)){if(x&&t+4===s&&C.b.a4(a,"443",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
q-=b}return new P.la(a,v,u,t,s,r,q,o)}return P.lx(a,b,c,v,u,t,s,r,q,o)},
f7:function(a,b){var z=P.i
return C.a.hy(H.d(a.split("&"),[z]),P.ed(z,z),new P.jS(b),[P.J,P.i,P.i])},
jN:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jO(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c8(C.b.t(a,v,w),null,null)
if(typeof s!=="number")return s.cM()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c8(C.b.t(a,v,c),null,null)
if(typeof s!=="number")return s.cM()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jQ(a)
y=new P.jR(z,a)
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
q=C.a.gay(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jN(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.e.aH(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
m4:function(){var z,y,x,w,v
z=P.ia(22,new P.m6(),!0,P.R)
y=new P.m5(z)
x=new P.m7()
w=new P.m8()
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
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fE()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
al:{"^":"b;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.e.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hw(H.iL(this))
y=P.bX(H.iJ(this))
x=P.bX(H.iF(this))
w=P.bX(H.iG(this))
v=P.bX(H.iI(this))
u=P.bX(H.iK(this))
t=P.hx(H.iH(this))
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
bX:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a_;"},
"+double":0,
b4:{"^":"b;a",
j:function(a,b){return new P.b4(C.e.a9(this.a*b))},
M:function(a,b){return C.e.M(this.a,H.f(b,"$isb4").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hB()
y=this.a
if(y<0)return"-"+new P.b4(0-y).i(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hA().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e0:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hA:{"^":"n:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hB:{"^":"n:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
en:{"^":"a5;",
i:function(a){return"Throw of null."}},
aH:{"^":"a5;a,b,c,d",
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
u=P.cf(this.b)
return w+v+": "+H.l(u)},
p:{
ca:function(a){return new P.aH(!1,null,null,a)},
cb:function(a,b,c){return new P.aH(!0,a,b,c)},
dE:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
co:{"^":"aH;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cp:function(a,b,c){return new P.co(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.Z(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.Z(b,a,c,"end",f))
return b}return c}}},
hO:{"^":"aH;e,l:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.h3(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hO(b,z,!0,a,c,"Index out of range")}}},
jL:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
C:function(a){return new P.jL(a)}}},
jI:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c3:function(a){return new P.jI(a)}}},
jf:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hp:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cf(z))+"."},
p:{
b2:function(a){return new P.hp(a)}}},
iA:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
ey:{"^":"b;",
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
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
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
m:{"^":"a_;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.G();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dE("index"))
if(b<0)H.r(P.Z(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
cS:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
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
gT:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
i:{"^":"b;",$iseo:1},
"+String":0,
an:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso_:1,
p:{
eB:function(a,b,c){var z=J.bv(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
jS:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.M(b)
y=J.aG(b).dU(b,"=")
if(y===-1){if(b!=="")J.cF(a,P.dk(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.t(b,0,y)
w=C.b.az(b,y+1)
z=this.a
J.cF(a,P.dk(x,0,x.length,z,!0),P.dk(w,0,w.length,z,!0))}return a}},
jO:{"^":"n:42;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv4 address, "+a,this.a,b))}},
jQ:{"^":"n:40;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jR:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c8(C.b.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cu:{"^":"b;bG:a<,b,c,d,e2:e>,f,r,0x,0y,0z,0Q,0ch",
geg:function(){return this.b},
gco:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.t(z,1,z.length-1)
return z},
gbC:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gcz:function(a){var z=this.f
return z==null?"":z},
gdP:function(){var z=this.r
return z==null?"":z},
cD:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dj(g,0,0,h)
return new P.cu(i,j,c,f,d,g,this.r)},
e7:function(a,b){return this.cD(a,null,null,null,null,null,null,b,null,null)},
gcA:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f3(P.f7(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdQ:function(){return this.c!=null},
gdT:function(){return this.f!=null},
gdR:function(){return this.r!=null},
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
q:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdd){y=this.a
x=b.gbG()
if(y==null?x==null:y===x)if(this.c!=null===b.gdQ()){y=this.b
x=b.geg()
if(y==null?x==null:y===x){y=this.gco(this)
x=z.gco(b)
if(y==null?x==null:y===x){y=this.gbC(this)
x=z.gbC(b)
if(y==null?x==null:y===x)if(this.e===z.ge2(b)){y=this.f
x=y==null
if(!x===b.gdT()){if(x)y=""
if(y===z.gcz(b)){z=this.r
y=z==null
if(!y===b.gdR()){if(y)z=""
z=z===b.gdP()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdd:1,
p:{
cv:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fy().b
if(typeof b!=="string")H.r(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ay(c,"bW",0))
y=c.ghv().cd(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cn(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lx:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lI(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lJ(a,z,e-1):""
x=P.lC(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lF(P.c8(C.b.t(a,w,g),new P.ly(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lD(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dj(a,h+1,i,null):null
return new P.cu(j,y,x,v,u,t,i<c?P.lB(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.a(P.W(c,a,b))},
lF:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lC:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.V(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.f6(a,b+1,z)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f6(a,b,c)
return"["+a+"]"}return P.lL(a,b,c)},
lL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fA(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.t(a,b,c)
if(y<c){s=C.b.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lI:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.F(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.t(a,b,c)
return P.lz(y?a.toLowerCase():a)},
lz:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lJ:function(a,b,c){return P.bO(a,b,c,C.Q)},
lD:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.y):C.t.iX(d,new P.lE(),P.i).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.lK(w,e,f)},
lK:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.lM(a,!z||c)
return P.lN(a)},
dj:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.ca("Both query and queryParameters specified"))
return P.bO(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.lG(new P.lH(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lB:function(a,b,c){return P.bO(a,b,c,C.n)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cB(y)
v=H.cB(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aH(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cn(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.t(a,b,b+3).toUpperCase()
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
for(v=0;--w,w>=0;x=128){u=C.e.fL(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c2(y,0,null)},
bO:function(a,b,c,d){var z=P.fz(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.t(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.p(c)
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
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.an("")
w.a+=C.b.t(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.a3(a,"."))return!0
return C.b.dU(a,"/.")!==-1},
lN:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lM:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
z=H.d([],[P.i])
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
lA:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ca("Invalid URL encoding"))}}return z},
dk:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.du(a)
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
else u=new H.a4(y.t(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.ca("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ca("Truncated URI"))
C.a.h(u,P.lA(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.jY(!1).cd(u)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
ly:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.W("Invalid port",this.a,z+1))}},
lE:{"^":"n:38;",
$1:function(a){return P.cv(C.S,a,C.k,!1)}},
lH:{"^":"n:23;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cv(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cv(C.p,b,C.k,!0))}}},
lG:{"^":"n:36;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bv(H.fV(b,"$isk")),y=this.a;z.G();)y.$2(a,H.M(z.gR(z)))}},
jM:{"^":"b;a,b,c",
gef:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.dV(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.n)
w=x}else v=null
z=new P.ks(this,"data",null,null,null,P.bO(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
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
if((z.length&1)===1)a=C.C.hN(0,a,s,y)
else{r=P.fz(a,s,y,C.n,!0)
if(r!=null)a=C.b.aR(a,s,y,r)}return new P.jM(a,z,c)}}},
m6:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
m5:{"^":"n:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.h8(z,0,96,b)
return z}},
m7:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
m8:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
la:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdQ:function(){return this.c>0},
gdS:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdT:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdR:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.b.a3(this.a,"http")},
gd4:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbG:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd3()){this.x="http"
z="http"}else if(this.gd4()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.t(this.a,0,z)
this.x=z}return z},
geg:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.t(this.a,y,z-1):""},
gco:function(a){var z=this.c
return z>0?C.b.t(this.a,z,this.d):""},
gbC:function(a){var z
if(this.gdS()){z=this.d
if(typeof z!=="number")return z.B()
return P.c8(C.b.t(this.a,z+1,this.e),null,null)}if(this.gd3())return 80
if(this.gd4())return 443
return 0},
ge2:function(a){return C.b.t(this.a,this.e,this.f)},
gcz:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.t(this.a,z+1,y):""},
gdP:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.az(y,z+1):""},
gcA:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.T
z=P.i
return new P.f3(P.f7(this.gcz(this),C.k),[z,z])},
cD:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbG()
z=i==="file"
y=this.c
j=y>0?C.b.t(this.a,this.b+3,y):""
f=this.gdS()?this.gbC(this):null
y=this.c
if(y>0)c=C.b.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dj(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.az(y,x+1)
return new P.cu(i,j,c,f,d,g,b)},
e7:function(a,b){return this.cD(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdd)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdd:1},
ks:{"^":"cu;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dO:function(a,b){var z=document.createElement("canvas")
return z},
hD:function(a){H.f(a,"$isaa")
return"wheel"},
hP:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise6")
try{J.ha(z,a)}catch(x){H.as(x)}return z},
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fh:function(a,b,c,d){var z,y
z=W.cs(W.cs(W.cs(W.cs(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fH:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dl(a,b)},
ab:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n1:{"^":"t;0l:length=","%":"AccessibleNodeList"},
n2:{"^":"ab;0a_:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n3:{"^":"ab;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cJ:{"^":"t;",$iscJ:1,"%":";Blob"},
n9:{"^":"ab;0a_:type}","%":"HTMLButtonElement"},
cM:{"^":"ab;",
cL:function(a,b,c){var z=a.getContext(b,P.mj(c,null))
return z},
$iscM:1,
"%":"HTMLCanvasElement"},
nb:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nd:{"^":"hu;0l:length=","%":"CSSPerspective"},
b3:{"^":"t;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ne:{"^":"kr;0l:length=",
ej:function(a,b){var z=a.getPropertyValue(this.eJ(a,b))
return z==null?"":z},
eJ:function(a,b){var z,y
z=$.$get$dT()
y=z[b]
if(typeof y==="string")return y
y=this.fM(a,b)
z[b]=y
return y},
fM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hy()+b
if(z in a)return z
return b},
gc8:function(a){return a.bottom},
gal:function(a){return a.height},
gaP:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gap:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ht:{"^":"b;",
gaP:function(a){return this.ej(a,"left")}},
dU:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hu:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nf:{"^":"dU;0l:length=","%":"CSSTransformValue"},
ng:{"^":"dU;0l:length=","%":"CSSUnparsedValue"},
nh:{"^":"t;0l:length=","%":"DataTransferItemList"},
ni:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
nj:{"^":"ku;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa7",[P.a_],"$asa7")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a_]]},
$asx:function(){return[[P.a7,P.a_]]},
$isk:1,
$ask:function(){return[[P.a7,P.a_]]},
$isc:1,
$asc:function(){return[[P.a7,P.a_]]},
$asB:function(){return[[P.a7,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hz:{"^":"t;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gap(a))+" x "+H.l(this.gal(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaP(b)&&a.top===z.gbb(b)&&this.gap(a)===z.gap(b)&&this.gal(a)===z.gal(b)},
gT:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gc8:function(a){return a.bottom},
gal:function(a){return a.height},
gaP:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gap:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
nk:{"^":"kw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
nl:{"^":"t;0l:length=","%":"DOMTokenList"},
kq:{"^":"ck;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa0")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.ie(this)
return new J.az(z,z.length,0,[H.y(z,0)])},
ax:function(a,b,c,d){throw H.a(P.c3(null))},
$asx:function(){return[W.a0]},
$ask:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"K;",
gcc:function(a){return new W.kq(a,a.children)},
gdm:function(a){return P.iR(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
nm:{"^":"ab;0a_:type}","%":"HTMLEmbedElement"},
ad:{"^":"t;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aa:{"^":"t;",
di:["em",function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(c!=null)this.eG(a,b,c,!1)}],
eG:function(a,b,c,d){return a.addEventListener(b,H.br(H.h(c,{func:1,args:[W.ad]}),1),!1)},
$isaa:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fn|fo|fq|fr"},
aV:{"^":"cJ;",$isaV:1,"%":"File"},
e2:{"^":"kB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaV")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aV]},
$asx:function(){return[W.aV]},
$isk:1,
$ask:function(){return[W.aV]},
$isc:1,
$asc:function(){return[W.aV]},
$ise2:1,
$asB:function(){return[W.aV]},
"%":"FileList"},
nn:{"^":"aa;0l:length=","%":"FileWriter"},
no:{"^":"ab;0l:length=","%":"HTMLFormElement"},
b6:{"^":"t;",$isb6:1,"%":"Gamepad"},
np:{"^":"t;0l:length=","%":"History"},
nq:{"^":"kO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.K]},
$asx:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asB:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e5:{"^":"t;",$ise5:1,"%":"ImageData"},
e6:{"^":"ab;0a_:type}",$ise6:1,"%":"HTMLInputElement"},
bB:{"^":"da;",$isbB:1,"%":"KeyboardEvent"},
nu:{"^":"ab;0a_:type}","%":"HTMLLinkElement"},
nv:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
nw:{"^":"t;0l:length=","%":"MediaList"},
nx:{"^":"aa;",
di:function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.em(a,b,c,!1)},
"%":"MessagePort"},
ny:{"^":"kV;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.d([],[P.i])
this.K(a,new W.is(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
is:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nz:{"^":"kW;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.d([],[P.i])
this.K(a,new W.it(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
it:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"t;",$isb9:1,"%":"MimeType"},
nA:{"^":"kY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb9")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isk:1,
$ask:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asB:function(){return[W.b9]},
"%":"MimeTypeArray"},
av:{"^":"da;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kp:{"^":"ck;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isK")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.e3(z,z.length,-1,[H.aZ(C.V,z,"B",0)])},
ax:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asx:function(){return[W.K]},
$ask:function(){return[W.K]},
$asc:function(){return[W.K]}},
K:{"^":"aa;",
i5:function(a,b){var z,y
try{z=a.parentNode
J.h5(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.en(a):z},
fz:function(a,b,c){return a.replaceChild(b,c)},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ix:{"^":"l_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.K]},
$asx:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asB:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
nI:{"^":"ab;0a_:type}","%":"HTMLOListElement"},
nJ:{"^":"ab;0a_:type}","%":"HTMLObjectElement"},
ba:{"^":"t;0l:length=",$isba:1,"%":"Plugin"},
nM:{"^":"l3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isba")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"PluginArray"},
nO:{"^":"t;0a_:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nP:{"^":"l9;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.d([],[P.i])
this.K(a,new W.j0(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j0:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nR:{"^":"ab;0a_:type}","%":"HTMLScriptElement"},
nT:{"^":"ab;0l:length=","%":"HTMLSelectElement"},
bc:{"^":"aa;",$isbc:1,"%":"SourceBuffer"},
nU:{"^":"fo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"SourceBufferList"},
nV:{"^":"ab;0a_:type}","%":"HTMLSourceElement"},
bd:{"^":"t;",$isbd:1,"%":"SpeechGrammar"},
nW:{"^":"lc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"t;0l:length=",$isbe:1,"%":"SpeechRecognitionResult"},
nY:{"^":"lf;",
k:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gam:function(a){var z=H.d([],[P.i])
this.K(a,new W.jh(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jh:{"^":"n:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o0:{"^":"ab;0a_:type}","%":"HTMLStyleElement"},
bf:{"^":"t;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
d7:{"^":"ab;",$isd7:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"aa;",$isbg:1,"%":"TextTrack"},
bh:{"^":"aa;",$isbh:1,"%":"TextTrackCue|VTTCue"},
o3:{"^":"lm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"TextTrackCueList"},
o4:{"^":"fr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"TextTrackList"},
o5:{"^":"t;0l:length=","%":"TimeRanges"},
bj:{"^":"t;",$isbj:1,"%":"Touch"},
bk:{"^":"da;",$isbk:1,"%":"TouchEvent"},
o6:{"^":"ls;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asB:function(){return[W.bj]},
"%":"TouchList"},
o7:{"^":"t;0l:length=","%":"TrackDefaultList"},
da:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o9:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
oa:{"^":"aa;0l:length=","%":"VideoTrackList"},
bL:{"^":"av;",
ghs:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghr:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
ki:{"^":"aa;",
fA:function(a,b){return a.requestAnimationFrame(H.br(H.h(b,{func:1,ret:-1,args:[P.a_]}),1))},
eR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
of:{"^":"lU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb3")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isk:1,
$ask:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asB:function(){return[W.b3]},
"%":"CSSRuleList"},
og:{"^":"hz;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaP(b)&&a.top===z.gbb(b)&&a.width===z.gap(b)&&a.height===z.gal(b)},
gT:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gap:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oi:{"^":"lW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb6")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isk:1,
$ask:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asB:function(){return[W.b6]},
"%":"GamepadList"},
oj:{"^":"lY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isK")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.K]},
$asx:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$asB:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ok:{"^":"m_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
ol:{"^":"m1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"StyleSheetList"},
kx:{"^":"d6;a,b,c,$ti",
hJ:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
oh:{"^":"kx;a,b,c,$ti"},
ky:{"^":"eA;a,b,c,d,e,$ti",
fQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.h6(this.b,this.c,z,!1)},
p:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fH(new W.kz(c),W.ad)
z=new W.ky(0,a,b,z,!1,[e])
z.fQ()
return z}}},
kz:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isad"))}},
B:{"^":"b;$ti",
gZ:function(a){return new W.e3(a,this.gl(a),-1,[H.aZ(this,a,"B",0)])},
ax:function(a,b,c,d){H.z(d,H.aZ(this,a,"B",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
e3:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dB(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kr:{"^":"t+ht;"},
kt:{"^":"t+x;"},
ku:{"^":"kt+B;"},
kv:{"^":"t+x;"},
kw:{"^":"kv+B;"},
kA:{"^":"t+x;"},
kB:{"^":"kA+B;"},
kN:{"^":"t+x;"},
kO:{"^":"kN+B;"},
kV:{"^":"t+ai;"},
kW:{"^":"t+ai;"},
kX:{"^":"t+x;"},
kY:{"^":"kX+B;"},
kZ:{"^":"t+x;"},
l_:{"^":"kZ+B;"},
l2:{"^":"t+x;"},
l3:{"^":"l2+B;"},
l9:{"^":"t+ai;"},
fn:{"^":"aa+x;"},
fo:{"^":"fn+B;"},
lb:{"^":"t+x;"},
lc:{"^":"lb+B;"},
lf:{"^":"t+ai;"},
ll:{"^":"t+x;"},
lm:{"^":"ll+B;"},
fq:{"^":"aa+x;"},
fr:{"^":"fq+B;"},
lr:{"^":"t+x;"},
ls:{"^":"lr+B;"},
lT:{"^":"t+x;"},
lU:{"^":"lT+B;"},
lV:{"^":"t+x;"},
lW:{"^":"lV+B;"},
lX:{"^":"t+x;"},
lY:{"^":"lX+B;"},
lZ:{"^":"t+x;"},
m_:{"^":"lZ+B;"},
m0:{"^":"t+x;"},
m1:{"^":"m0+B;"}}],["","",,P,{"^":"",
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ed(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
mj:function(a,b){var z={}
a.K(0,new P.mk(z))
return z},
e_:function(){var z=$.dZ
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.dZ=z}return z},
hy:function(){var z,y
z=$.dW
if(z!=null)return z
y=$.dX
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.dX=y}if(y)z="-moz-"
else{y=$.dY
if(y==null){y=!P.e_()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.dY=y}if(y)z="-ms-"
else z=P.e_()?"-o-":"-webkit-"}$.dW=z
return z},
li:{"^":"b;",
dM:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cG:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isiU)throw H.a(P.c3("structured clone of RegExp"))
if(!!y.$isaV)return a
if(!!y.$iscJ)return a
if(!!y.$ise2)return a
if(!!y.$ise5)return a
if(!!y.$isel||!!y.$isd1)return a
if(!!y.$isJ){x=this.dM(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.lk(z,this))
return z.a}if(!!y.$isc){x=this.dM(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hp(a,x)}throw H.a(P.c3("structured clone of other type"))},
hp:function(a,b){var z,y,x,w
z=J.aG(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cG(z.k(a,w)))
return x}},
lk:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cG(b)}},
mk:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lj:{"^":"li;a,b"},
hJ:{"^":"ck;a,b",
gbh:function(){var z,y,x
z=this.b
y=H.ay(z,"x",0)
x=W.a0
return new H.ig(new H.kg(z,H.h(new P.hK(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hL(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa0")
z=this.gbh()
J.h9(z.b.$1(J.cH(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ax:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbh().a)},
k:function(a,b){var z=this.gbh()
return z.b.$1(J.cH(z.a,b))},
gZ:function(a){var z=P.i9(this.gbh(),!1,W.a0)
return new J.az(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a0]},
$ask:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
hK:{"^":"n:29;",
$1:function(a){return!!J.O(H.f(a,"$isK")).$isa0}},
hL:{"^":"n:27;",
$1:function(a){return H.j(H.f(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l4:{"^":"b;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gc8:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bT(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=this.a
y=J.aY(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gc8(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bV(z)
x=this.b
w=J.bV(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.kP(P.ct(P.ct(P.ct(P.ct(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l4;aP:a>,bb:b>,ap:c>,al:d>,$ti",p:{
iR:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bC:{"^":"t;",$isbC:1,"%":"SVGLength"},nt:{"^":"kR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbC")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bC]},
$isk:1,
$ask:function(){return[P.bC]},
$isc:1,
$asc:function(){return[P.bC]},
$asB:function(){return[P.bC]},
"%":"SVGLengthList"},bF:{"^":"t;",$isbF:1,"%":"SVGNumber"},nH:{"^":"l1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbF")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bF]},
$isk:1,
$ask:function(){return[P.bF]},
$isc:1,
$asc:function(){return[P.bF]},
$asB:function(){return[P.bF]},
"%":"SVGNumberList"},nN:{"^":"t;0l:length=","%":"SVGPointList"},nS:{"^":"eC;0a_:type}","%":"SVGScriptElement"},nZ:{"^":"lh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},o1:{"^":"eC;0a_:type}","%":"SVGStyleElement"},eC:{"^":"a0;",
gcc:function(a){return new P.hJ(a,new W.kp(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bI:{"^":"t;",$isbI:1,"%":"SVGTransform"},o8:{"^":"lu;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbI")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bI]},
$isk:1,
$ask:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asB:function(){return[P.bI]},
"%":"SVGTransformList"},kQ:{"^":"t+x;"},kR:{"^":"kQ+B;"},l0:{"^":"t+x;"},l1:{"^":"l0+B;"},lg:{"^":"t+x;"},lh:{"^":"lg+B;"},lt:{"^":"t+x;"},lu:{"^":"lt+B;"}}],["","",,P,{"^":"",R:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}}}],["","",,P,{"^":"",n4:{"^":"t;0l:length=","%":"AudioBuffer"},dG:{"^":"aa;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},n5:{"^":"ko;",
k:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.d([],[P.i])
this.K(a,new P.hd(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hd:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},he:{"^":"dG;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},n6:{"^":"aa;0l:length=","%":"AudioTrackList"},hh:{"^":"aa;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},n7:{"^":"dG;0a_:type}","%":"BiquadFilterNode"},nK:{"^":"hh;0l:length=","%":"OfflineAudioContext"},nL:{"^":"he;0a_:type}","%":"Oscillator|OscillatorNode"},ko:{"^":"t+ai;"}}],["","",,P,{"^":"",eu:{"^":"t;",$iseu:1,"%":"WebGLRenderingContext"},jG:{"^":"t;",$isjG:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nX:{"^":"le;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.C("Cannot assign element of immutable List."))},
H:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},ld:{"^":"t+x;"},le:{"^":"ld+B;"}}],["","",,O,{"^":"",aI:{"^":"b;0a,0b,0c,0d,$ti",
bJ:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cN:function(a,b,c){var z=H.ay(this,"aI",0)
H.h(b,{func:1,ret:P.ah,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.cN(a,null,b)},
fm:function(a){var z
H.w(a,"$isk",[H.ay(this,"aI",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ey:function(a,b){var z
H.w(b,"$isk",[H.ay(this,"aI",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.az(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"aI",0)
H.z(b,z)
z=[z]
if(this.fm(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ey(x,H.d([b],z))}},
$isk:1,
p:{
cN:function(a){var z=new O.aI([a])
z.bJ(a)
return z}}},cZ:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
ez:function(a){var z=this.b
if(!(z==null))z.E(a)},
aA:function(){return this.ez(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.c1()},
e5:function(a){var z=this.a
if(a==null)C.a.h(z,V.c1())
else C.a.h(z,a)
this.aA()},
cw:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cI:{"^":"b;"},aJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sab:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.h(this.ge1(),{func:1,ret:-1,args:[D.u]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.h(this.ge1(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.ex])
w.b=!0
this.ag(w)}},
sb3:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.h(this.ge0(),{func:1,ret:-1,args:[D.u]})
C.a.P(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.h(this.ge0(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.a6])
w.b=!0
this.ag(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.au])
w.b=!0
this.ag(w)}for(z=this.y.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.an(0,b)},
aQ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.j(0,z.gW(z)))
z.aA()
a.e6(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.i4(a,this)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aQ(a)
a.e4()
a.dx.cw()},
gw:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.E(a)},
X:function(){return this.ag(null)},
hS:[function(a){H.f(a,"$isu")
this.e=null
this.ag(a)},function(){return this.hS(null)},"j2","$1","$0","ge1",0,2,1],
hR:[function(a){this.ag(H.f(a,"$isu"))},function(){return this.hR(null)},"j1","$1","$0","ge0",0,2,1],
hP:[function(a){this.ag(H.f(a,"$isu"))},function(){return this.hP(null)},"j_","$1","$0","ge_",0,2,1],
iZ:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aJ],"$ask")
for(z=b.length,y=this.ge_(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghO",8,0,10],
j0:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aJ],"$ask")
for(z=b.length,y=this.ge_(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.P(t.a,y)}}this.X()},"$2","ghQ",8,0,10],
$isaK:1,
p:{
e1:function(a,b,c,d,e,f){var z,y
z=new E.aJ()
z.a=d
z.b=!0
y=O.cN(E.aJ)
z.y=y
y.bf(z.ghO(),z.ghQ())
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
z.sab(0,e)
z.sb3(c)
return z}}},iW:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eu:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cZ()
y=[V.au]
z.a=H.d([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.h(new E.iY(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cZ()
z.a=H.d([],y)
v=z.gw()
v.toString
x=H.h(new E.iZ(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cZ()
z.a=H.d([],y)
y=z.gw()
y.toString
w=H.h(new E.j_(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.d8])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.i,A.ew])},
gi0:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.j(0,y.gW(y))
this.z=y
z=y}return z},
e6:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
e4:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iX:function(a,b){var z=new E.iW(a,b)
z.eu(a,b)
return z}}},iY:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.ch=null}},iZ:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j_:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jq:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
eB:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.E(a)
this.i7()},function(){return this.eB(null)},"eA","$1","$0","gcQ",0,2,1],
ghA:function(){var z,y,x
z=Date.now()
y=C.e.a1(P.e0(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
d8:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.d.dN(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.dN(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eH(C.q,this.gi6())},
i7:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.js(this),{func:1,ret:-1,args:[P.a_]})
C.B.eR(z)
C.B.fA(z,W.fH(y,P.a_))}},"$0","gi6",0,0,3],
i3:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d8()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e0(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aQ(this.e)}}catch(v){z=H.as(v)
y=H.bt(v)
P.dy("Error: "+H.l(z))
P.dy("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jr:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscM)return E.eG(a,!0,!0,!0,!1)
y=W.dO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcc(a).h(0,y)
w=E.eG(y,!0,!0,!0,!1)
w.a=a
return w},
eG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jq()
y=P.i4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.cL(a,"webgl",y)
x=H.f(x==null?C.l.cL(a,"experimental-webgl",y):x,"$iseu")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iX(x,a)
w=new T.jm(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jT(a)
v=new X.hY()
v.c=new X.aC(!1,!1,!1)
v.d=P.i7(null,null,null,P.m)
w.b=v
v=new X.iu(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ib(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jv(w)
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
t=W.av
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.h(w.gf9(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.h(w.gfc(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.h(w.gf5(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.h(w.gfe(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.h(w.gfd(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.h(w.gfh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.h(w.gfj(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.h(w.gfi(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.a3(a,H.M(W.hD(a)),H.h(w.gfk(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.h(w.gfa(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.h(w.gfb(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.h(w.gfl(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.h(w.gft(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.h(w.gfq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.h(w.gfs(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.d8()
return z}}},js:{"^":"n:31;a",
$1:function(a){var z
H.mQ(a)
z=this.a
if(z.z){z.z=!1
z.i3()}}}}],["","",,Z,{"^":"",fc:{"^":"b;a,b",p:{
df:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.fc(b,z)}}},dK:{"^":"cI;a,b,c,d,e",
bl:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kf:{"^":"b;a",$isn8:1},dL:{"^":"b;a,0b,c,d",
aO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bl:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bl(a)},
ee:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aQ:function(a){var z,y,x,w,v
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
z=[P.i]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$iso2:1},ch:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcO:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
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
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fb()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.i])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
aq:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dP:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hH(z))
return x!==0},
i8:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
a8:function(a){return this.i8(a,!0,!1)},
p:{
Q:function(){var z=new D.b5()
z.a=H.d([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hH:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},ci:{"^":"u;c,d,a,0b,$ti"},cj:{"^":"u;c,d,a,0b,$ti"},H:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dM:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"na<"}},ea:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ea))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},eb:{"^":"u;c,a,0b"},hY:{"^":"b;0a,0b,0c,0d",
hY:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eb(a,this)
y.b=!0
return z.E(y)},
hU:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eb(a,this)
y.b=!0
return z.E(y)}},ef:{"^":"cm;x,y,c,d,e,a,0b"},ib:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
as:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gaI()
s=new X.bD(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cv:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.as(a,b))
return!0},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.el()
if(typeof z!=="number")return z.bF()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.as(a,b))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.as(a,b))
return!0},
hZ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d_(new V.V(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.E(w)
return!0},
fg:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.ef(c,a,this.a.gaI(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.U(0,0)}},aC:{"^":"b;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aC))return!1
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
return z+(this.c?"Shift+":"")}},bD:{"^":"cm;x,y,z,Q,ch,c,d,e,a,0b"},iu:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bP:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaI()
x=new X.bD(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cv:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bP(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.el()
if(typeof z!=="number")return z.bF()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bP(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bP(a,b,!1))
return!0},
i_:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d_(new V.V(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdn:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbE:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gdY:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},d_:{"^":"cm;x,c,d,e,a,0b"},cm:{"^":"u;"},eL:{"^":"cm;x,y,z,Q,ch,c,d,e,a,0b"},jv:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
as:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.U],"$asc")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gaI()
w=new X.eL(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hX:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.E(this.as(a,!0))
return!0},
hV:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.E(this.as(a,!0))
return!0},
hW:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.E(this.as(a,!1))
return!0}},jT:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaI:function(){var z=this.a
return V.et(0,0,(z&&C.l).gdm(z).c,C.l.gdm(z).d)},
d_:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ea(z,new X.aC(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
c2:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.U(y-w,x-v)},
aT:function(a){return new V.V(a.movementX,a.movementY)},
bX:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.d.a9(u.pageX)
C.d.a9(u.pageY)
s=z.left
C.d.a9(u.pageX)
C.a.h(y,new V.U(t-s,C.d.a9(u.pageY)-z.top))}return y},
aq:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.aC(y,a.altKey,a.shiftKey))},
bR:function(a){var z,y,x,w,v,u
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
iC:[function(a){this.f=!0},"$1","gfc",4,0,5],
iv:[function(a){this.f=!1},"$1","gf5",4,0,5],
iz:[function(a){H.f(a,"$isav")
if(this.f&&this.bR(a))a.preventDefault()},"$1","gf9",4,0,4],
iE:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.d_(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfe",4,0,24],
iD:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.d_(a)
if(this.b.hU(z))a.preventDefault()},"$1","gfd",4,0,24],
iG:[function(a){var z,y,x,w
H.f(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.aq(a)
x=this.aT(a)
if(this.d.cv(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aq(a)
w=this.at(a)
if(this.c.cv(y,w))a.preventDefault()},"$1","gfh",4,0,4],
iI:[function(a){var z,y,x
H.f(a,"$isav")
this.aG(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfj",4,0,4],
iB:[function(a){var z,y,x
H.f(a,"$isav")
if(!this.bR(a)){this.aG(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","gfb",4,0,4],
iH:[function(a){var z,y,x
H.f(a,"$isav")
this.aG(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gfi",4,0,4],
iA:[function(a){var z,y,x
H.f(a,"$isav")
if(!this.bR(a)){this.aG(a)
z=this.aq(a)
if(this.x){y=this.aT(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b4(z,x))a.preventDefault()}},"$1","gfa",4,0,4],
iJ:[function(a){var z,y
H.f(a,"$isbL")
this.aG(a)
z=new V.V((a&&C.A).ghr(a),C.A.ghs(a)).u(0,180)
if(this.x){if(this.d.hZ(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.i_(z,y))a.preventDefault()},"$1","gfk",4,0,35],
iK:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aq(this.y)
v=this.at(this.y)
this.d.fg(w,v,x)}},"$1","gfl",4,0,5],
iQ:[function(a){var z
H.f(a,"$isbk")
this.a.focus()
this.f=!0
this.c2(a)
z=this.bX(a)
if(this.e.hX(z))a.preventDefault()},"$1","gft",4,0,12],
iO:[function(a){var z
H.f(a,"$isbk")
this.c2(a)
z=this.bX(a)
if(this.e.hV(z))a.preventDefault()},"$1","gfq",4,0,12],
iP:[function(a){var z
H.f(a,"$isbk")
this.c2(a)
z=this.bX(a)
if(this.e.hW(z))a.preventDefault()},"$1","gfs",4,0,12]}}],["","",,D,{"^":"",ce:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z},
aB:[function(a){var z
H.f(a,"$isu")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aB(null)},"ij","$1","$0","geC",0,2,1],
$isa1:1,
$isaK:1,
p:{
cP:function(a,b){var z,y,x,w
z=new D.ce()
z.c=new V.X(1,1,1)
z.a=new V.E(0,0,1)
y=z.b
z.b=b
x=b.gw()
x.toString
w=H.h(z.geC(),{func:1,ret:-1,args:[D.u]})
C.a.h(x.a,w)
x=new D.H("mover",y,z.b,z,[U.a6])
x.b=!0
z.aB(x)
if(!z.c.q(0,a)){y=z.c
z.c=a
x=new D.H("color",y,a,z,[V.X])
x.b=!0
z.aB(x)}return z}}},a1:{"^":"b;",$isaK:1},hZ:{"^":"aI;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.E(a)},
ff:[function(a){var z
H.f(a,"$isu")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.ff(null)},"iF","$1","$0","gd5",0,2,1],
iL:[function(a){var z,y,x
H.w(a,"$isk",[D.a1],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.eN(x))return!1}return!0},"$1","gfn",4,0,37],
is:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd5(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.ce)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gf2",8,0,22],
iN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a1
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd5(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.f(b[u],"$isa1")
if(t instanceof D.ce)C.a.P(this.e,t)
s=t.d
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.P(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfp",8,0,22],
eN:function(a){var z=C.a.bn(this.e,a)
return z},
$ask:function(){return[D.a1]},
$asaI:function(){return[D.a1]}},iD:{"^":"b;",$isa1:1,$isaK:1},je:{"^":"b;",$isa1:1,$isaK:1},jn:{"^":"b;",$isa1:1,$isaK:1},jo:{"^":"b;",$isa1:1,$isaK:1},jp:{"^":"b;",$isa1:1,$isaK:1}}],["","",,V,{"^":"",
nc:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ir",8,0,33],
cE:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.be(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.d.ed($.o.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.d([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.a7(z[u],x))}return z},
X:{"^":"b;a,b,c",
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
return new V.X(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b1:{"^":"b;a,b,c,d",
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
return new V.b1(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
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
cl:{"^":"b;a,b,c,d,e,f,r,x,y",
aa:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscl")
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
return new V.cl(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
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
y=V.bs(H.d([this.a,this.d,this.r],z),3,0)
x=V.bs(H.d([this.b,this.e,this.x],z),3,0)
w=V.bs(H.d([this.c,this.f,this.y],z),3,0)
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
au:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aa:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dW:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.c1()
a3=1/a2
a4=-w
a5=-i
return V.aB((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isau")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.aB(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
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
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.a2(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
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
dO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bs(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bs(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bs(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bs(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.dO("",3,0)},
A:function(a){return this.dO(a,3,0)},
p:{
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c1:function(){return V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ek:function(a,b,c,d){return V.aB(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eh:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ei:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
ej:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
U:{"^":"b;a,b",
J:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.U(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
a2:{"^":"b;a,b,c",
B:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bG:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bG(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
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
et:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.es(a,b,c,d)}}},
V:{"^":"b;a,b",
hH:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,21],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.V(z*b,y*b)},
u:function(a,b){var z,y
if($.o.$2(b,0))return new V.V(0,0)
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
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hH:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,21],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cr:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
au:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.E(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.o.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dX:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
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
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ho:{"^":"dP;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.cE(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.E(a)},
scH:function(a,b){},
scs:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.H("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.I(z)}},
scu:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.H("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.I(z)}},
sY:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.q])
z.b=!0
this.I(z)}},
sct:function(a){var z,y,x
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
this.I(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.q])
z.b=!0
this.I(z)}},
scf:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.q])
z.b=!0
this.I(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
cO:function(){var z=new U.ho()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dR:{"^":"a6;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
ao:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
dS:function(a){var z=new U.dR()
z.a=a
return z}}},e4:{"^":"aI;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
I:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.E(a)},function(){return this.I(null)},"ac","$1","$0","gaC",0,2,1],
ir:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gf1",8,0,19],
iM:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.A)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.P(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gfo",8,0,19],
ao:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.az(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.ao(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.c1():x
z=this.e
if(!(z==null))z.a8(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e4))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a6]},
$asaI:function(){return[U.a6]},
$isa6:1},a6:{"^":"dP;"},ev:{"^":"a6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.E(a)},
seh:function(a){var z,y
a=V.cE(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.q])
z.b=!0
this.I(z)}},
se3:function(a,b){var z,y
b=V.cE(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.q])
z.b=!0
this.I(z)}},
se8:function(a){var z,y
a=V.cE(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.q])
z.b=!0
this.I(z)}},
ao:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.seh(this.a+this.d*b.y)
this.se3(0,this.b+this.e*b.y)
this.se8(this.c+this.f*b.y)
this.x=V.ej(this.c).j(0,V.ei(this.b)).j(0,V.eh(this.a))
z=this.y
if(!(z==null))z.a8(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ev))return!1
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
d4:function(a,b,c,d,e,f){var z,y,x
z=new U.ev()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.seh(f)
z.se3(0,d)
z.se8(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.H("deltaYaw",x,c,z,[P.q])
y.b=!0
z.I(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.H("deltaPitch",x,a,z,[P.q])
y.b=!0
z.I(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.H("deltaRoll",x,b,z,[P.q])
y.b=!0
z.I(y)}return z}}},jU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
I:[function(a){var z
H.f(a,"$isu")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.I(null)},"ac","$1","$0","gaC",0,2,1],
aV:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdn()
z.toString
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.gbS(),y)
C.a.h(z.a,x)
x=this.a.c.gdY()
x.toString
z=H.h(this.gbT(),y)
C.a.h(x.a,z)
z=this.a.c.gbE()
z.toString
y=H.h(this.gbU(),y)
C.a.h(z.a,y)
return!0},
eY:[function(a){H.f(a,"$isu")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbS",4,0,2],
eZ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isu"),"$isbD")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.V(y.a,y.b).j(0,2).u(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.V(x.a,x.b).j(0,2).u(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
this.b.sS(0)
y=y.J(0,a.z)
this.Q=new V.V(y.a,y.b).j(0,2).u(0,z.ga2())}this.ac()},"$1","gbT",4,0,2],
f_:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sS(y*10*x)
this.ac()}},"$1","gbU",4,0,2],
ao:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
this.cx=V.ej(this.b.d)}return this.cx},
$isa6:1},jV:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
I:[function(a){var z
H.f(a,"$isu")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.I(null)},"ac","$1","$0","gaC",0,2,1],
aV:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdn()
z.toString
y={func:1,ret:-1,args:[D.u]}
x=H.h(this.gbS(),y)
C.a.h(z.a,x)
x=this.a.c.gdY()
x.toString
z=H.h(this.gbT(),y)
C.a.h(x.a,z)
z=this.a.c.gbE()
z.toString
x=H.h(this.gbU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.Q()
x.f=z}x=H.h(this.geV(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.geW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.Q()
x.b=z}x=H.h(this.gfP(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.Q()
x.d=z}x=H.h(this.gfO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.Q()
x.c=z}y=H.h(this.gfN(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.V(z,y)},
eY:[function(a){a=H.j(H.f(a,"$isu"),"$isbD")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbS",4,0,2],
eZ:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isu"),"$isbD")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aj(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))}this.ac()},"$1","gbT",4,0,2],
f_:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sS(-y*10*z)
this.ac()}},"$1","gbU",4,0,2],
io:[function(a){if(H.j(H.f(a,"$isu"),"$isef").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geV",4,0,2],
ip:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isu"),"$isbD")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aj(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.ac()},"$1","geW",4,0,2],
iU:[function(a){H.f(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfP",4,0,2],
iT:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isu"),"$iseL")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.V(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.aj(new V.V(x.a,x.b).j(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sY(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.J(0,a.z)
this.dx=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga2()))}this.ac()},"$1","gfO",4,0,2],
iS:[function(a){var z,y,x
H.f(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sS(-y*10*z)
this.ac()}},"$1","gfN",4,0,2],
ao:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
this.fr=V.eh(this.b.d).j(0,V.ei(this.c.d))}return this.fr},
$isa6:1},jW:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.E(a)},
aV:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=H.h(this.gf0(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iq:[function(a){var z,y,x,w
H.f(a,"$isu")
if(!J.P(this.b,this.a.b.c))return
H.j(a,"$isd_")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.q])
z.b=!0
this.I(z)}},"$1","gf0",4,0,2],
ao:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ek(x,x,x,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",hF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.f(a,"$isu")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aD(null)},"ik","$1","$0","gai",0,2,1],
ix:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf7",8,0,10],
iy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.P(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf8",8,0,10],
sea:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.u]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gai(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.d8])
z.b=!0
this.aD(z)}},
gw:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e6(this.c)
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
u=C.d.a9(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.d.a9(v.b*w)
s=C.d.a9(v.c*x)
a.c=s
v=C.d.a9(v.d*w)
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
s.e5(V.aB(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ep
if(y==null){y=new V.E(0,0,-1)
m=y.u(0,Math.sqrt(y.D(y)))
y=new V.E(0,1,0).au(m)
l=y.u(0,Math.sqrt(y.D(y)))
k=m.au(l)
j=new V.E(0,0,0)
y=V.aB(l.a,k.a,m.a,l.N(0).D(j),l.b,k.b,m.b,k.N(0).D(j),l.c,k.c,m.c,m.N(0).D(j),0,0,0,1)
$.ep=y
i=y}else i=y
y=z.a
if(y!=null){h=y.ao(0,a,z)
if(h!=null)i=h.j(0,i)}a.db.e5(i)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.an(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aQ(a)
this.a.toString
a.cy.cw()
a.db.cw()
this.b.toString
a.e4()},
$isnQ:1}}],["","",,A,{"^":"",dF:{"^":"b;a,b,c"},hc:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hu:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ht:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ik:{"^":"ew;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aM,0aw,0aN,0bp,0dq,0dr,0bq,0br,0ds,0dt,0bs,0bt,0du,0dv,0bu,0dw,0dz,0bv,0dA,0dB,0bw,0bx,0by,0dC,0dD,0bz,0bA,0dE,0dF,0bB,0dG,0ci,0dH,0cj,0dI,0ck,0dJ,0cl,0dK,0cm,0dL,0cn,a,b,0c,0d,0e,0f,0r",
es:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.an("")
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
a2.fS(z)
a2.fZ(z)
a2.fT(z)
a2.h6(z)
a2.h7(z)
a2.h0(z)
a2.hb(z)
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
v.fW(z)
v.fR(z)
v.fU(z)
v.fX(z)
v.h4(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h2(z)
v.h3(z)}v.h_(z)
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
p=H.d([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fV(z)
v.h1(z)
v.h5(z)
v.h8(z)
v.h9(z)
v.ha(z)
v.fY(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.i])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.d0(x.charCodeAt(0)==0?x:x,35633)
this.d=this.d0(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fL(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.v("Failed to link shader: "+H.l(m)))}this.fI()
this.fK()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaM")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaM")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaM")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdc")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaM")
this.k3=H.d([],[A.aM])
y=a2.aM
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isN")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.aM=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aN=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break
case C.h:this.aw=H.j(this.r.n(0,"diffuseTxt"),"$isap")
this.aN=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break}}y=a2.d
if(y!==C.c){this.bp=H.j(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dq=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bq=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break
case C.h:this.dr=H.j(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bq=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break}}y=a2.e
if(y!==C.c){this.bt=H.j(this.r.n(0,"shininess"),"$isY")
this.br=H.j(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.ds=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bs=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break
case C.h:this.dt=H.j(this.r.n(0,"specularTxt"),"$isap")
this.bs=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.du=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.bu=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break
case C.h:this.dv=H.j(this.r.n(0,"bumpTxt"),"$isap")
this.bu=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break}if(a2.dy){this.dw=H.j(this.r.n(0,"envSampler"),"$isap")
this.dz=H.j(this.r.n(0,"nullEnvTxt"),"$isN")
y=a2.r
if(y!==C.c){this.bv=H.j(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dA=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bw=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break
case C.h:this.dB=H.j(this.r.n(0,"reflectTxt"),"$isap")
this.bw=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break}}y=a2.x
if(y!==C.c){this.bx=H.j(this.r.n(0,"refraction"),"$isY")
this.by=H.j(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.i:break
case C.f:this.dC=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bz=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break
case C.h:this.dD=H.j(this.r.n(0,"refractTxt"),"$isap")
this.bz=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break}}}y=a2.y
if(y!==C.c){this.bA=H.j(this.r.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.i:break
case C.f:this.dE=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bB=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break
case C.h:this.dF=H.j(this.r.n(0,"alphaTxt"),"$isap")
this.bB=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break}}this.ci=H.d([],[A.eY])
this.cj=H.d([],[A.eZ])
this.ck=H.d([],[A.f_])
this.cl=H.d([],[A.f0])
this.cm=H.d([],[A.f1])
this.cn=H.d([],[A.f2])
if(a2.k2){y=a2.z
if(y>0){this.dG=H.f(this.r.n(0,"dirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.ci;(x&&C.a).h(x,new A.eY(l,k,j))}}y=a2.Q
if(y>0){this.dH=H.f(this.r.n(0,"pntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isY")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.cj;(x&&C.a).h(x,new A.eZ(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dI=H.f(this.r.n(0,"spotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.ck;(x&&C.a).h(x,new A.f_(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dJ=H.f(this.r.n(0,"txtDirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isao")
x=this.cl;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dK=H.f(this.r.n(0,"txtPntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdc")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isN")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isap")
x=this.cm;(x&&C.a).h(x,new A.f1(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dL=H.f(this.r.n(0,"txtSpotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isL")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isL")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isL")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isL")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isL")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isL")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isY")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isY")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isY")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isao")
x=this.cn;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ae:function(a,b,c){b.a.uniform1i(b.d,1)},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ij:function(a,b){var z,y
z=a.aw
y=new A.ik(b,z)
y.ew(b,z)
y.es(a,b)
return y}}},io:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aM,aw,aN",
fS:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aM+"];\n"
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
fZ:function(a){var z
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
fT:function(a){var z
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
h6:function(a){var z,y
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
h7:function(a){var z,y
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
h0:function(a){var z
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
hb:function(a){var z
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
ar:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fW:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ar(a,z,"emission")
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
fR:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ar(a,z,"ambient")
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
fU:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"diffuse")
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
fX:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ar(a,z,"invDiffuse")
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
h4:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ar(a,z,"specular")
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
h_:function(a){var z,y
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
h2:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ar(a,z,"reflect")
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
h3:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ar(a,z,"refract")
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
fV:function(a){var z,y
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
h1:function(a){var z,y
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
h5:function(a){var z,y
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
h8:function(a){var z,y,x
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
h9:function(a){var z,y,x
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
ha:function(a){var z,y,x
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
fY:function(a){var z
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
i:function(a){return this.aw}},eY:{"^":"b;a,b,c"},f0:{"^":"b;a,b,c,d,e,f,r,x"},eZ:{"^":"b;a,b,c,d,e,f,r"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f_:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f2:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ew:{"^":"cI;",
ew:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
d0:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fI:function(){var z,y,x,w,v,u
z=H.d([],[A.dF])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dF(y,v.name,u))}this.f=new A.hc(z)},
fK:function(){var z,y,x,w,v,u
z=H.d([],[A.ac])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hq(v.type,v.size,v.name,u))}this.r=new A.jF(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.N(z,y,b,c)
else return A.db(z,y,b,a,c)},
eO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.db(z,y,b,a,c)},
eP:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.db(z,y,b,a,c)},
bk:function(a,b){return new P.ff(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hq:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.Y(this.a,this.e,c,d)
case 35664:return new A.jA(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jD(this.a,this.e,c,d)
case 35667:return new A.jB(this.a,this.e,c,d)
case 35668:return new A.jC(this.a,this.e,c,d)
case 35669:return new A.jE(this.a,this.e,c,d)
case 35674:return new A.jH(this.a,this.e,c,d)
case 35675:return new A.dc(this.a,this.e,c,d)
case 35676:return new A.aM(this.a,this.e,c,d)
case 35678:return this.eO(b,c,d)
case 35680:return this.eP(b,c,d)
case 35670:throw H.a(this.bk("BOOL",c))
case 35671:throw H.a(this.bk("BOOL_VEC2",c))
case 35672:throw H.a(this.bk("BOOL_VEC3",c))
case 35673:throw H.a(this.bk("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cd:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jF:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hz:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hz("\n")}},N:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jB:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jC:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jE:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jz:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
db:function(a,b,c,d,e){var z=new A.jz(a,b,c,e)
z.f=d
z.e=P.i8(d,0,!1,P.m)
return z}}},Y:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jA:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jD:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jH:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dc:{"^":"ac;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aM:{"^":"ac;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dr:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
z=F.d5()
F.bP(z,b,c,d,a,1,0,0,1)
F.bP(z,b,c,d,a,0,1,0,3)
F.bP(z,b,c,d,a,0,0,1,2)
F.bP(z,b,c,d,a,-1,0,0,0)
F.bP(z,b,c,d,a,0,-1,0,0)
F.bP(z,b,c,d,a,0,0,-1,3)
z.ak()
return z},
cw:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
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
z.d=y}l=F.cw(y)
k=F.cw(z.b)
j=F.dz(d,e,new F.m2(z,F.cw(z.c),F.cw(z.d),k,l,c),b)
if(j!=null)a.b2(j)},
fO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.d5()
y=b?-1:1
x=-6.283185307179586/e
w=H.d([],[F.af])
v=z.a
u=new V.E(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hf(new V.bG(a,-1,-1,-1),new V.b1(1,1,1,1),new V.a2(0,0,c),new V.E(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.E(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c5(new V.bG(a,-1,-1,-1),null,new V.b1(n,l,m,1),new V.a2(r*p,q*p,c),new V.E(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hd(w)
return z},
fM:function(a,b,c,d,e,f){return F.mm(!0,c,d,new F.ml(a,f),e)},
mm:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dz(c,e,new F.mo(d),null)
if(z==null)return
z.ak()
z.c3()
if(b)z.b2(F.fO(3,!1,1,new F.mp(d),e))
z.b2(F.fO(1,!0,-1,new F.mq(d),e))
return z},
mW:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.mX()
y=F.dr(a,null,new F.mY(z),c)
y.c3()
return y},
h2:function(a,b,c,d){return F.fN(c,a,d,b,new F.n_())},
mF:function(a,b,c,d,e,f){return F.fN(d,a,e,b,new F.mG(f,c))},
fN:function(a,b,c,d,e){var z=F.dz(a,b,new F.mn(H.h(e,{func:1,ret:V.a2,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ak()
z.c3()
return z},
dz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.d5()
y=H.d([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c5(null,null,new V.b1(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ce(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c5(null,null,new V.b1(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ce(d))}}z.d.he(a+1,b+1,y)
return z},
m2:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cr(z.b,b).cr(z.d.cr(z.c,b),c)
a.sY(0,new V.a2(y.a,y.b,y.c))
a.seb(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdk(new V.bG(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
ml:{"^":"n:26;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mo:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sY(0,new V.a2(y,u,w))
u=new V.E(y,u,w)
a.seb(u.u(0,Math.sqrt(u.D(u))))
a.sdk(new V.bG(1-c,2+c,-1,-1))}},
mp:{"^":"n:18;a",
$1:function(a){return this.a.$2(a,1)}},
mq:{"^":"n:18;a",
$1:function(a){return this.a.$2(1-a,0)}},
mX:{"^":"n:26;",
$2:function(a,b){return 0}},
mY:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).j(0,1+z)
a.sY(0,new V.a2(z.a,z.b,z.c))}},
n_:{"^":"n:16;",
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)}},
mG:{"^":"n:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a2(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mn:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dA(y.$1(z),x)
x=J.dA(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.E(1,0,0)
y=v.au(!v.q(0,u)?new V.E(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.au(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sY(0,w.B(0,new V.a2(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
av:function(){if(!this.gaX()){C.a.P(this.a.a.d.b,this)
this.a.a.X()}this.bZ()
this.c_()
this.fw()},
fF:function(a){this.a=a
C.a.h(a.d.b,this)},
fG:function(a){this.b=a
C.a.h(a.d.c,this)},
fH:function(a){this.c=a
C.a.h(a.d.d,this)},
bZ:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
c_:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
fw:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
gaX:function(){return this.a==null||this.b==null||this.c==null},
eI:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dX())return
return v.u(0,Math.sqrt(v.D(v)))},
eL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.J(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.au(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
cb:function(){if(this.d!=null)return!0
var z=this.eI()
if(z==null){z=this.eL()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
eH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dX())return
return v.u(0,Math.sqrt(v.D(v)))},
eK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.J(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.J(0,u).j(0,l).B(0,u).J(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.au(m)
z=z.u(0,Math.sqrt(z.D(z))).au(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
c9:function(){if(this.e!=null)return!0
var z=this.eH()
if(z==null){z=this.eK()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aY:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.X()},
ghm:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y
if(this.gaX())return a+"disposed"
z=a+C.b.a7(J.a9(this.a.e),0)+", "+C.b.a7(J.a9(this.b.e),0)+", "+C.b.a7(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.A("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.fF(a)
z.fG(b)
z.fH(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hI:{"^":"b;"},
jd:{"^":"hI;",
b1:function(a,b,c){var z,y
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
cW:{"^":"b;0a,0b",
av:function(){if(!this.gaX()){C.a.P(this.a.a.c.b,this)
this.a.a.X()}this.bZ()
this.c_()},
bZ:function(){var z=this.a
if(z!=null){C.a.P(z.c.b,this)
this.a=null}},
c_:function(){var z=this.b
if(z!=null){C.a.P(z.c.c,this)
this.b=null}},
gaX:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){if(this.gaX())return a+"disposed"
return a+C.b.a7(J.a9(this.a.e),0)+", "+C.b.a7(J.a9(this.b.e),0)},
L:function(){return this.A("")}},
i_:{"^":"b;"},
jy:{"^":"i_;",
b1:function(a,b,c){var z,y
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
d3:{"^":"b;0a",
av:function(){var z=this.a
if(z!=null){C.a.P(z.a.b.b,this)
this.a.a.X()}this.fv()},
fv:function(){var z=this.a
if(z!=null){C.a.P(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a7(J.a9(z.e),0)},
L:function(){return this.A("")}},
ex:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.ho())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d3()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cW()
s=p.a
if(s==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.a8(0)},
ak:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ak()||!1
if(!this.a.ak())y=!1
z=this.e
if(!(z==null))z.a8(0)
return y},
eT:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b1(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hL:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.eT(a,v,y,u,t))b.b2(u)}this.a.v()
this.c.cB()
this.d.cB()
this.b.i2()
this.c.cC(new F.jy())
this.d.cC(new F.jd())
z=this.e
if(!(z==null))z.a8(0)},
hh:function(a){this.hL(new F.k9(),new F.iy())},
c3:function(){return this.hh(null)},
aY:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aY()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.e(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdZ(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).u(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.E(null)}}}}z=this.e
if(!(z==null))z.a8(0)},
hk:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcO(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dK])
for(r=0,q=0;q<w;++q){p=b.hi(q)
o=p.gcO(p)
C.a.m(s,q,new Z.dK(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hI(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dL(new Z.fc(34962,j),s,b)
i.b=H.d([],[Z.ch])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.df(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.df(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(1,h.length,f))}if(this.d.b.length!==0){x=P.m
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
C.a.h(h,g.e)}f=Z.df(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ch(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.C(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.E(a)},
X:function(){return this.ag(null)},
p:{
d5:function(){var z,y
z=new F.ex()
y=new F.k4(z)
y.b=!1
y.c=H.d([],[F.af])
z.a=y
y=new F.j8(z)
y.b=H.d([],[F.d3])
z.b=y
y=new F.j7(z)
y.b=H.d([],[F.cW])
z.c=y
y=new F.j6(z)
y.b=H.d([],[F.am])
z.d=y
z.e=null
return z}}},
j6:{"^":"b;a,0b",
hd:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
z=H.d([],[F.am])
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
C.a.h(z,F.by(x,v,u))}}return z},
he:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
z=H.d([],[F.am])
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
cC:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b1(0,v,t)){v.av()
break}}}}},
cB:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghm(x)
if(y)x.av()}},
ak:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cb())x=!1
return x},
ca:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].c9())x=!1
return x},
aY:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].aY()},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
j7:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cC:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b1(0,v,t)){v.av()
break}}}}},
cB:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.av()}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.C(z,"\n")},
L:function(){return this.A("")}},
j8:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i2:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.av()}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ce:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c5(this.cx,x,u,z,y,w,v,a,t)},
ho:function(){return this.ce(null)},
sY:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdZ:function(a){var z
a=a.u(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
seb:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sdk:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
hI:function(a){var z,y
z=J.O(a)
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
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bJ())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bK())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$bm()))return H.d([this.ch],[P.q])
else if(z.q(a,$.$get$aN())){z=this.cx
y=[P.q]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.q])},
cb:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.ke(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.a8(0)}return!0},
c9:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.kd(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.a8(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y,x
z=H.d([],[P.i])
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
L:function(){return this.A("")},
p:{
c5:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.kc(z)
y.b=H.d([],[F.d3])
z.b=y
y=new F.k8(z)
x=[F.cW]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.k5(z)
x=[F.am]
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
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
ke:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kd:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k4:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
hg:function(a,b,c,d,e,f,g,h,i){var z=F.c5(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hf:function(a,b,c,d,e,f){return this.hg(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ak:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cb()
return!0},
ca:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].c9()
return!0},
hl:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
this.v()
z=H.d([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
k5:{"^":"b;a,0b,0c,0d",
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
K:function(a,b){H.h(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.k6(this,b))
C.a.K(this.d,new F.k7(this,b))},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
k6:{"^":"n:8;a,b",
$1:function(a){H.f(a,"$isam")
if(!J.P(a.a,this.a))this.b.$1(a)}},
k7:{"^":"n:8;a,b",
$1:function(a){var z
H.f(a,"$isam")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
k8:{"^":"b;a,0b,0c",
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
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}},
ka:{"^":"b;"},
k9:{"^":"ka;",
b1:function(a,b,c){return J.P(b.f,c.f)}},
kb:{"^":"b;"},
iy:{"^":"kb;",
b2:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)a[x].sdZ(z)
return}},
kc:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
L:function(){return this.A("")}}}],["","",,O,{"^":"",ii:{"^":"d8;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
ad:[function(a){var z
H.f(a,"$isu")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.ad(null)},"iw","$1","$0","gf6",0,2,1],
fC:[function(a){H.f(a,"$isu")
this.a=null
this.ad(a)},function(){return this.fC(null)},"iR","$1","$0","gfB",0,2,1],
it:[function(a,b){var z=V.au
z=new D.ci(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ad(z)},"$2","gf3",8,0,15],
iu:[function(a,b){var z=V.au
z=new D.cj(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ad(z)},"$2","gf4",8,0,15],
cY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a1(z.e.length+3,4)*4
x=C.e.a1(z.f.length+3,4)*4
w=C.e.a1(z.r.length+3,4)*4
v=C.e.a1(z.x.length+3,4)*4
u=C.e.a1(z.y.length+3,4)*4
t=C.e.a1(z.z.length+3,4)*4
s=C.e.a1(this.e.a.length+3,4)*4
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
a6=$.$get$aQ()
if(c){z=$.$get$aP()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bl(a6.a|z.a)}return new A.io(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isc",[T.eF],"$asc")},
an:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.az(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
y.a=new V.E(0,0,1)
x=y.b
if(x!=null){w=x.ao(0,b,y)
if(w!=null)y.a=w.cF(y.a)}}},
i4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cY()
y=a.fr.k(0,z.aw)
if(y==null){y=A.ij(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bo(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aN
z=b.e
if(!(z instanceof Z.dL)){b.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)b.d.ak()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.ca()
t.a.ca()
t=t.e
if(!(t==null))t.a8(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hl()
s=s.e
if(!(s==null))s.a8(0)}q=b.d.hk(new Z.kf(a.a),v)
q.aO($.$get$aQ()).e=this.a.y.c
if(z)q.aO($.$get$aP()).e=this.a.Q.c
if(u)q.aO($.$get$aO()).e=this.a.z.c
if(w.rx)q.aO($.$get$aR()).e=this.a.ch.c
if(t)q.aO($.$get$aS()).e=this.a.cx.c
if(w.x1)q.aO($.$get$aN()).e=this.a.cy.c
b.e=q}z=T.eF
p=H.d([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hu()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.db
u.toString
u.ah(t.aa(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
s=a.dx
s=t.j(0,s.gW(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ah(t.aa(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi0()
s=a.dx
s=t.j(0,s.gW(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ah(t.aa(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ah(t.aa(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ah(t.aa(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ah(C.t.aa(t,!0))}if(w.aM>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.f(s,"$isau")
t=t.k3
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bo(H.w(s.aa(0,!0),"$isc",u,"$asc")))
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
case C.f:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ae(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.a5(u.r2,u.rx,t)
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
case C.f:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ae(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.a5(u.x2,u.y1,t)
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
case C.f:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ae(u.aM,u.aN,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a5(u.aw,u.aN,t)
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
case C.f:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ae(u.dq,u.bq,t)
t=this.a
u=this.y.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a5(u.dr,u.bq,t)
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
case C.f:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ae(u.ds,u.bs,t)
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
case C.h:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a5(u.dt,u.bs,t)
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
u=this.a.dG
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.ci
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.cF(i.a)
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dH
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cj
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb6(i)
r=h.b
g=s.gcI(s)
f=s.gcJ(s)
s=s.gcK(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bc(i.gb6(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gaf(i)
f=h.d
g=s.gbD()
r=s.gbd()
s=s.gbm()
f.a.uniform3f(f.d,g,r,s)
s=i.gc4()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc5()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc6()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dI
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.ck
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb6(i)
r=h.b
g=s.gcI(s)
f=s.gcJ(s)
s=s.gcK(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcg(i).iY()
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.bc(i.gb6(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaf(i)
r=h.e
g=s.gbD()
f=s.gbd()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.giW()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giV()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc4()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc5()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dJ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
r=this.a.cl
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gb8()
H.w(p,"$isc",s,"$asc")
if(!C.a.bn(p,r)){r.saZ(0,p.length)
C.a.h(p,r)}r=i.gcg(i)
g=h.d
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=i.gbE()
e=h.b
f=r.gaJ(r)
g=r.gaK(r)
r=r.gaL()
e.a.uniform3f(e.d,f,g,r)
r=i.gb7(i)
g=h.c
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=l.cF(i.gcg(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaf(i)
f=h.f
e=g.gbD()
r=g.gbd()
g=g.gbm()
f.a.uniform3f(f.d,e,r,g)
g=i.gb8()
r=g.gb_(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb_(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaZ(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
g=this.a.cm
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gb8()
H.w(p,"$isc",r,"$asc")
if(!C.a.bn(p,g)){g.saZ(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gW(i))
g=i.gW(i).bc(new V.a2(0,0,0))
f=h.b
e=g.gcI(g)
c=g.gcJ(g)
g=g.gcK(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bc(new V.a2(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dW(0)
c=h.d
m=new Float32Array(H.bo(H.w(new V.cl(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).aa(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gaf(i)
g=h.e
e=c.gbD()
f=c.gbd()
c=c.gbm()
g.a.uniform3f(g.d,e,f,c)
c=i.gb8()
g=c.gb_(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb_(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaZ(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc4()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc5()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc6()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.A)(u),++j){i=u[j]
s=this.a.cn
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gb8()
H.w(p,"$isc",z,"$asc")
if(!C.a.bn(p,s)){s.saZ(0,p.length)
C.a.h(p,s)}s=i.gb6(i)
r=h.b
g=s.gcI(s)
f=s.gcJ(s)
s=s.gcK(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcg(i)
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=i.gbE()
r=h.d
g=s.gaJ(s)
f=s.gaK(s)
s=s.gaL()
r.a.uniform3f(r.d,g,f,s)
s=i.gb7(i)
f=h.e
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.bc(i.gb6(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb8()
r=s.gb_(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb_(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaZ(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gaf(i)
r=h.y
g=s.gbD()
f=s.gbd()
s=s.gbm()
r.a.uniform3f(r.d,g,f,s)
s=i.gj3()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gj4()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc4()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc5()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ae(z.du,z.bu,u)
break
case C.h:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a5(z.dv,z.bu,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).dW(0)
a.Q=u}z=z.fy
z.toString
z.ah(u.aa(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a5(z.dw,z.dz,u)
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
case C.f:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ae(z.dA,z.bw,u)
u=this.a
z=this.cx.f
u=u.bv
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a5(z.dB,z.bw,u)
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
case C.f:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ae(z.dC,z.bz,u)
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
case C.h:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a5(z.dD,z.bz,u)
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
case C.f:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ae(z.dE,z.bB,t)
t=this.a
z=this.db.f
t=t.bA
t.a.uniform1f(t.d,z)
break
case C.h:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a5(z.dF,z.bB,t)
t=this.a
z=this.db.f
t=t.bA
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bl(a)
z=b.e
z.bl(a)
z.aQ(a)
z.ee(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].ee(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.ht()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cY().aw}},il:{"^":"cY;0f,a,b,0c,0d,0e"},cY:{"^":"b;",
bi:["eq",function(){}]},im:{"^":"cY;a,b,0c,0d,0e"},b8:{"^":"cY;0f,a,b,0c,0d,0e",
d9:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.ad(y)}},
bi:["bI",function(){this.eq()
this.d9(new V.X(1,1,1))}],
saf:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bi()
z=this.a
z.a=null
z.ad(null)}this.d9(b)}},ip:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
fE:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ad(z)}},
bi:function(){this.bI()
this.fE(1)}},iq:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
c0:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ad(z)}},
bi:function(){this.bI()
this.c0(100)}},d8:{"^":"b;"}}],["","",,T,{"^":"",eF:{"^":"cI;"},jm:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",hb:{"^":"b;",
b0:function(a,b){return!0},
i:function(a){return"all"},
$isc0:1},c0:{"^":"b;"},eg:{"^":"b;",
b0:["ep",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].b0(0,b))return!0
return!1}],
i:["cP",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc0:1},bE:{"^":"eg;0a",
b0:function(a,b){return!this.ep(0,b)},
i:function(a){return"!["+this.cP(0)+"]"}},j4:{"^":"b;0a",
ev:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.m,P.ah])
for(y=new H.ee(a,a.gl(a),0,[H.ay(a,"x",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
b0:function(a,b){return this.a.bo(0,b)},
i:function(a){var z=this.a
return P.c2(z.gam(z),0,null)},
$isc0:1,
p:{
a8:function(a){var z=new V.j4()
z.ev(a)
return z}}},ez:{"^":"b;a,b,0c,0d",
ghM:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eM(this.a.O(0,b))
w.a=H.d([],[V.c0])
w.c=!1
C.a.h(this.c,w)
return w},
hw:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.b0(0,a))return w}return},
i:function(a){return this.b}},eJ:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h0(this.b,"\n","\\n")
y=H.h0(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eK:{"^":"b;a,b,0c",
i:function(a){return this.b}},ju:{"^":"b;0a,0b,0c",
O:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.ez(this,b)
z.c=H.d([],[V.eM])
this.a.m(0,b,z)}return z},
ba:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eK(this,a)
y=P.i
z.c=new H.aW(0,0,[y,y])
this.b.m(0,a,z)}return z},
ih:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eJ])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hw(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c2(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghM(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c2(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eJ(o==null?p.b:o,q,t)}++t}}}},eM:{"^":"eg;b,0c,0a",
i:function(a){return this.b.b+": "+this.cP(0)}}}],["","",,X,{"^":"",dN:{"^":"b;",$isaK:1},hN:{"^":"eD;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},iB:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
aS:[function(a){var z
H.f(a,"$isu")
z=this.e
if(!(z==null))z.E(a)},function(){return this.aS(null)},"il","$1","$0","gcR",0,2,1],
sb3:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.h(this.gcR(),{func:1,ret:-1,args:[D.u]})
C.a.P(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gcR(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.a6])
z.b=!0
this.aS(z)}},
$isaK:1,
$isdN:1},eD:{"^":"b;"}}],["","",,V,{"^":"",
mU:function(a){P.jt(C.G,new V.mV(a))},
mV:{"^":"n:48;a",
$1:function(a){H.f(a,"$isbi")
P.dy(C.d.ed(this.a.ghA(),2)+" fps")}},
iP:{"^":"b;a,b,0c",
dh:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f5().gcA().k(0,H.l(z))
if(y==null)if(d){c.$0()
this.df(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dD(this.c).h(0,v)
t=W.hP("radio")
t.checked=x
t.name=z
z=W.ad
W.a3(t,"change",H.h(new V.iQ(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dD(this.c).h(0,w.createElement("br"))},
aU:function(a,b,c){return this.dh(a,b,c,!1)},
df:function(a){var z,y,x,w,v
z=P.f5()
y=P.i
x=P.i5(z.gcA(),y,y)
x.m(0,this.a,a)
w=z.e7(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lj([],[]).cG(""),"",v)}},
iQ:{"^":"n:25;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.df(this.d)}}},
j9:{"^":"b;0a,0b",
ex:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.h(new V.jc(x),{func:1,ret:-1,args:[t]}),!1,t)},
dj:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fJ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ih(C.a.hG(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.h_(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cv(C.R,s,C.k,!1)
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
hc:function(a){var z,y,x,w,v,u,t
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
x=H.f(w.insertCell(-1),"$isd7").style
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
t=H.f(w.insertCell(-1),"$isd7")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fJ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.ju()
y=P.i
z.a=new H.aW(0,0,[y,V.ez])
z.b=new H.aW(0,0,[y,V.eK])
z.c=z.O(0,"Start")
y=z.O(0,"Start").C(0,"Bold")
x=V.a8(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").C(0,"Bold")
x=new V.bE()
w=[V.c0]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a4("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"Italic")
x=V.a8(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").C(0,"Italic")
x=new V.bE()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a4("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"Code")
x=V.a8(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").C(0,"Code")
x=new V.bE()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a4("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a4("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").C(0,"LinkHead")
y=new V.bE()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a4("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").C(0,"LinkTail")
y=new V.bE()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").C(0,"Other").a,new V.hb())
x=z.O(0,"Other").C(0,"Other")
y=new V.bE()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.ba("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.ba("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.ba("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.ba("Link")
x=z.O(0,"Other")
x.d=x.a.ba("Other")
this.b=z},
p:{
ja:function(a,b){var z=new V.j9()
z.ex(a,!0)
return z}}},
jc:{"^":"n:25;a",
$1:function(a){P.eH(C.q,new V.jb(this.a))}},
jb:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.d.a9(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,U,{"^":"",
fW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.ja("Test 020",!0)
y=W.dO(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.dj(H.d(["Test of the Matrial Lighting shader with multiple moving directional lights."],x))
z.hc(H.d(["shapes"],x))
z.dj(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jr(w,!0,!0,!0,!1)
z=U.d4(0,0,0.3,0,0,0)
u=D.cP(new V.X(1,0,0),z)
z=U.d4(0.4,0,0,0,0,0)
t=D.cP(new V.X(0,1,0),z)
z=U.d4(0.5,0,0.5,0,0,0)
s=D.cP(new V.X(0,0,1),z)
r=new O.ii()
z=O.cN(V.au)
r.e=z
z.bf(r.gf3(),r.gf4())
z=new O.b8(r,"emission")
z.c=C.c
z.f=new V.X(0,0,0)
r.f=z
z=new O.b8(r,"ambient")
z.c=C.c
z.f=new V.X(0,0,0)
r.r=z
z=new O.b8(r,"diffuse")
z.c=C.c
z.f=new V.X(0,0,0)
r.x=z
z=new O.b8(r,"invDiffuse")
z.c=C.c
z.f=new V.X(0,0,0)
r.y=z
z=new O.iq(r,"specular")
z.c=C.c
z.f=new V.X(0,0,0)
z.ch=100
r.z=z
z=new O.im(r,"bump")
z.c=C.c
r.Q=z
r.ch=null
z=new O.b8(r,"reflect")
z.c=C.c
z.f=new V.X(0,0,0)
r.cx=z
z=new O.ip(r,"refract")
z.c=C.c
z.f=new V.X(0,0,0)
z.ch=1
r.cy=z
z=new O.il(r,"alpha")
z.c=C.c
z.f=1
r.db=z
z=new D.hZ()
z.bJ(D.a1)
z.e=H.d([],[D.ce])
z.f=H.d([],[D.iD])
z.r=H.d([],[D.je])
z.x=H.d([],[D.jn])
z.y=H.d([],[D.jo])
z.z=H.d([],[D.jp])
z.Q=null
z.ch=null
z.cN(z.gf2(),z.gfn(),z.gfp())
r.dx=z
q=z.Q
if(q==null){q=D.Q()
z.Q=q
z=q}else z=q
q={func:1,ret:-1,args:[D.u]}
p=H.h(r.gfB(),q)
C.a.h(z.a,p)
p=r.dx
z=p.ch
if(z==null){z=D.Q()
p.ch=z}p=H.h(r.gf6(),q)
C.a.h(z.a,p)
r.dy=null
r.dx.h(0,u)
r.dx.h(0,t)
r.dx.h(0,s)
r.f.saf(0,new V.X(0,0,0))
p=r.r
p.saf(0,new V.X(0.1,0.1,0.1))
z=r.x
z.saf(0,new V.X(0.7,0.7,0.7))
z=r.z
z.saf(0,new V.X(0.3,0.3,0.3))
z=r.z
if(z.c===C.c){z.c=C.i
z.bI()
z.c0(100)
p=z.a
p.a=null
p.ad(null)}z.c0(100)
o=E.e1(null,!0,null,"",null,null)
o.sab(0,F.h2(30,1,15,0.5))
n=E.e1(null,!0,null,"",null,null)
n.sb3(U.dS(V.ek(3,3,3,1)))
z=F.dr(1,null,null,1)
z.aY()
n.sab(0,z)
m=new U.e4()
m.bJ(U.a6)
m.bf(m.gf1(),m.gfo())
m.e=null
m.f=V.c1()
m.r=0
z=v.r
p=new U.jV()
l=U.cO()
l.scH(0,!0)
l.scs(6.283185307179586)
l.scu(0)
l.sY(0,0)
l.sct(100)
l.sS(0)
l.scf(0.5)
p.b=l
l=l.gw()
l.toString
k=H.h(p.gaC(),q)
C.a.h(l.a,k)
l=U.cO()
l.scH(0,!0)
l.scs(6.283185307179586)
l.scu(0)
l.sY(0,0)
l.sct(100)
l.sS(0)
l.scf(0.5)
p.c=l
C.a.h(l.gw().a,k)
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
j=new X.aC(!1,!1,!1)
i=p.d
p.d=j
l=[X.aC]
k=new D.H("modifiers",i,j,p,l)
k.b=!0
p.I(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.H("invertX",k,!1,p,[P.ah])
k.b=!0
p.I(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.H("invertY",k,!1,p,[P.ah])
k.b=!0
p.I(k)}p.aV(z)
m.h(0,p)
z=v.r
p=new U.jU()
k=U.cO()
k.scH(0,!0)
k.scs(6.283185307179586)
k.scu(0)
k.sY(0,0)
k.sct(100)
k.sS(0)
k.scf(0.2)
p.b=k
k=k.gw()
k.toString
h=H.h(p.gaC(),q)
C.a.h(k.a,h)
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
j=new X.aC(!0,!1,!1)
i=p.c
p.c=j
k=new D.H("modifiers",i,j,p,l)
k.b=!0
p.I(k)
p.aV(z)
m.h(0,p)
z=v.r
p=new U.jW()
p.c=0.01
p.d=0
p.e=0
j=new X.aC(!1,!1,!1)
p.b=j
l=new D.H("modifiers",null,j,p,l)
l.b=!0
p.I(l)
p.aV(z)
m.h(0,p)
m.h(0,U.dS(V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=new M.hF()
p=O.cN(E.aJ)
z.d=p
p.bf(z.gf7(),z.gf8())
z.e=null
z.f=null
z.r=null
z.x=null
g=new X.iB()
g.b=1.0471975511965976
g.c=0.1
g.d=2000
g.sb3(null)
p=g.b
if(!$.o.$2(p,1.0471975511965976)){i=g.b
g.b=1.0471975511965976
p=new D.H("fov",i,1.0471975511965976,g,[P.q])
p.b=!0
g.aS(p)}p=g.c
if(!$.o.$2(p,0.1)){i=g.c
g.c=0.1
p=new D.H("near",i,0.1,g,[P.q])
p.b=!0
g.aS(p)}p=g.d
if(!$.o.$2(p,2000)){i=g.d
g.d=2000
p=new D.H("far",i,2000,g,[P.q])
p.b=!0
g.aS(p)}p=z.a
if(p!==g){if(p!=null){p=p.gw()
p.toString
l=H.h(z.gai(),q)
C.a.P(p.a,l)}i=z.a
z.a=g
p=g.gw()
p.toString
l=H.h(z.gai(),q)
C.a.h(p.a,l)
p=new D.H("camera",i,z.a,z,[X.dN])
p.b=!0
z.aD(p)}f=new X.hN()
p=new V.b1(0,0,0,1)
f.a=p
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
p=V.et(0,0,1,1)
f.r=p
p=z.b
if(p!==f){if(p!=null){p=p.gw()
p.toString
l=H.h(z.gai(),q)
C.a.P(p.a,l)}i=z.b
z.b=f
p=f.gw()
p.toString
l=H.h(z.gai(),q)
C.a.h(p.a,l)
p=new D.H("target",i,z.b,z,[X.eD])
p.b=!0
z.aD(p)}z.sea(null)
z.sea(r)
z.d.h(0,o)
z.d.h(0,n)
z.a.sb3(m)
p=v.d
if(p!==z){if(p!=null){p=p.gw()
p.toString
l=H.h(v.gcQ(),q)
C.a.P(p.a,l)}v.d=z
z=z.gw()
z.toString
q=H.h(v.gcQ(),q)
C.a.h(z.a,q)
v.eA()}z=new V.iP("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.aU(0,"Cube",new U.mI(o))
z.aU(0,"Cylinder",new U.mJ(o))
z.aU(0,"Cone",new U.mK(o))
z.aU(0,"Sphere",new U.mL(o))
z.dh(0,"Toroid",new U.mM(o),!0)
z.aU(0,"Knot",new U.mN(o))
V.mU(v)},
mI:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.dr(1,null,null,1))}},
mJ:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.fM(1,!0,!0,1,40,1))}},
mK:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.fM(1,!0,!1,1,40,0))}},
mL:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.mW(6,null,6))}},
mM:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.h2(30,1,15,0.5))}},
mN:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.mF(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e8.prototype
return J.hU.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.e9.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.aG=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.c7=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.mv=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.mw=function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.du=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c4.prototype
return a}
J.aY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cA(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).q(a,b)}
J.h3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mv(a).M(a,b)}
J.dA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mw(a).j(a,b)}
J.dB=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aG(a).k(a,b)}
J.cF=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fT(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c7(a).m(a,b,c)}
J.h4=function(a,b){return J.du(a).F(a,b)}
J.h5=function(a,b,c){return J.aY(a).fz(a,b,c)}
J.h6=function(a,b,c,d){return J.aY(a).di(a,b,c,d)}
J.h7=function(a,b){return J.du(a).V(a,b)}
J.cG=function(a,b,c){return J.aG(a).hn(a,b,c)}
J.cH=function(a,b){return J.c7(a).H(a,b)}
J.h8=function(a,b,c,d){return J.c7(a).ax(a,b,c,d)}
J.dC=function(a,b){return J.c7(a).K(a,b)}
J.dD=function(a){return J.aY(a).gcc(a)}
J.bV=function(a){return J.O(a).gT(a)}
J.bv=function(a){return J.c7(a).gZ(a)}
J.at=function(a){return J.aG(a).gl(a)}
J.h9=function(a,b){return J.aY(a).i5(a,b)}
J.ha=function(a,b){return J.aY(a).sa_(a,b)}
J.a9=function(a){return J.O(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cM.prototype
C.H=J.t.prototype
C.a=J.b7.prototype
C.e=J.e8.prototype
C.t=J.e9.prototype
C.d=J.bY.prototype
C.b=J.bZ.prototype
C.O=J.c_.prototype
C.U=H.d2.prototype
C.V=W.ix.prototype
C.z=J.iC.prototype
C.r=J.c4.prototype
C.A=W.bL.prototype
C.B=W.ki.prototype
C.D=new P.hg(!1)
C.C=new P.hf(C.D)
C.E=new P.iA()
C.F=new P.k3()
C.j=new P.l5()
C.c=new A.cd(0,"ColorSourceType.None")
C.i=new A.cd(1,"ColorSourceType.Solid")
C.f=new A.cd(2,"ColorSourceType.Texture2D")
C.h=new A.cd(3,"ColorSourceType.TextureCube")
C.q=new P.b4(0)
C.G=new P.b4(5e6)
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
C.w=H.d(I.aj([127,2047,65535,1114111]),[P.m])
C.m=H.d(I.aj([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.d(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.d(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.Q=H.d(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.R=H.d(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.d(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.d(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.S=H.d(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.d(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.P=H.d(I.aj([]),[P.i])
C.T=new H.hs(0,{},C.P,[P.i,P.i])
C.k=new P.jX(!1)
$.aA=0
$.bw=null
$.dI=null
$.dl=!1
$.fR=null
$.fI=null
$.fZ=null
$.cz=null
$.cC=null
$.dv=null
$.bp=null
$.bQ=null
$.bR=null
$.dm=!1
$.T=C.j
$.dZ=null
$.dY=null
$.dX=null
$.dW=null
$.o=V.ir()
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
I.$lazy(y,x,w)}})(["dV","$get$dV",function(){return H.fQ("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fQ("_$dart_js")},"eN","$get$eN",function(){return H.aD(H.cq({
toString:function(){return"$receiver$"}}))},"eO","$get$eO",function(){return H.aD(H.cq({$method$:null,
toString:function(){return"$receiver$"}}))},"eP","$get$eP",function(){return H.aD(H.cq(null))},"eQ","$get$eQ",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aD(H.cq(void 0))},"eV","$get$eV",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aD(H.eT(null))},"eR","$get$eR",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aD(H.eT(void 0))},"eW","$get$eW",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dg","$get$dg",function(){return P.kj()},"bS","$get$bS",function(){return[]},"f8","$get$f8",function(){return P.k0()},"fe","$get$fe",function(){return H.iv(H.bo(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fy","$get$fy",function(){return P.iV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fE","$get$fE",function(){return P.m4()},"dT","$get$dT",function(){return{}},"fb","$get$fb",function(){return Z.aq(0)},"f9","$get$f9",function(){return Z.aq(511)},"aQ","$get$aQ",function(){return Z.aq(1)},"aP","$get$aP",function(){return Z.aq(2)},"aO","$get$aO",function(){return Z.aq(4)},"aR","$get$aR",function(){return Z.aq(8)},"aS","$get$aS",function(){return Z.aq(16)},"bJ","$get$bJ",function(){return Z.aq(32)},"bK","$get$bK",function(){return Z.aq(64)},"fa","$get$fa",function(){return Z.aq(96)},"bm","$get$bm",function(){return Z.aq(128)},"aN","$get$aN",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[F.am]},{func:1,ret:P.G,args:[F.af,P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.k,E.aJ]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.m,[P.k,V.au]]},{func:1,ret:V.a2,args:[P.q]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.m,[P.k,U.a6]]},{func:1,args:[,]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.k,D.a1]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.G,args:[W.ad]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:W.a0,args:[W.K]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[W.K]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.G,args:[P.a_]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.q,P.q]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.ah,args:[[P.k,D.a1]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.G,args:[P.bi]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.mZ(d||a)
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
Isolate.aj=a.aj
Isolate.ds=a.ds
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
if(typeof dartMainRunner==="function")dartMainRunner(U.fW,[])
else U.fW([])})})()
//# sourceMappingURL=test.dart.js.map
