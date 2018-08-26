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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dg(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dh=function(){}
var dart=[["","",,H,{"^":"",lH:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dk==null){H.kv()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.ez("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cO()]
if(v!=null)return v
v=H.kA(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cO(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n:{"^":"a;",
u:function(a,b){return a===b},
gT:function(a){return H.bp(a)},
j:["dS",function(a){return"Instance of '"+H.aW(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h1:{"^":"n;",
j:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa8:1},
dS:{"^":"n;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gT:function(a){return 0},
$isH:1},
cP:{"^":"n;",
gT:function(a){return 0},
j:["dT",function(a){return String(a)}]},
hD:{"^":"cP;"},
d7:{"^":"cP;"},
bS:{"^":"cP;",
j:function(a){var z=a[$.$get$dB()]
if(z==null)return this.dT(a)
return"JavaScript function for "+H.i(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscK:1},
bR:{"^":"n;$ti",
h:function(a,b){H.D(b,H.A(a,0))
if(!!a.fixed$length)H.p(P.ag("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.p(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
bS:function(a,b){var z,y
H.x(b,"$isd",[H.A(a,0)],"$asd")
if(!!a.fixed$length)H.p(P.ag("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.bc(a))}},
a_:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.ac(z,y,H.i(a[y]))
return z.join(b)},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gcb:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.h_())},
av:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
j:function(a){return P.cL(a,"[","]")},
gY:function(a){return new J.am(a,a.length,0,[H.A(a,0)])},
gT:function(a){return H.bp(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.c5(b,"newLength",null))
if(b<0)throw H.j(P.bq(b,0,null,"newLength",null))
a.length=b},
ac:function(a,b,c){H.Y(b)
H.D(c,H.A(a,0))
if(!!a.immutable$list)H.p(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bZ(a,b))
if(b>=a.length||b<0)throw H.j(H.bZ(a,b))
a[b]=c},
$isd:1,
$isf:1,
p:{
h0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.c5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bq(a,0,4294967295,"length",null))
return J.dP(new Array(a),b)},
dP:function(a,b){return J.bj(H.e(a,[b]))},
bj:function(a){H.c2(a)
a.fixed$length=Array
return a}}},
lG:{"^":"bR;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ch:{"^":"n;",
hl:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.ag(""+a+".toInt()"))},
c9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.ag(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ag(""+a+".round()"))},
dH:function(a,b){var z,y
if(b>20)throw H.j(P.bq(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
dO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.ag("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
cS:function(a,b){var z
if(a>0)z=this.f7(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f7:function(a,b){return b>31?0:a>>>b},
ai:function(a,b){if(typeof b!=="number")throw H.j(H.ct(b))
return a<b},
$ist:1,
$isU:1},
dR:{"^":"ch;",$isM:1},
dQ:{"^":"ch;"},
cN:{"^":"n;",
ea:function(a,b){if(b>=a.length)throw H.j(H.bZ(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.V(b)
if(typeof b!=="string")throw H.j(P.c5(b,null,null))
return a+b},
ct:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.d_(b,null,null))
if(c>a.length)throw H.j(P.d_(c,null,null))
return a.substring(b,c)},
cs:function(a,b){return this.ct(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h3:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
af:function(a,b){return this.h3(a,b," ")},
fI:function(a,b,c){if(c>a.length)throw H.j(P.bq(c,0,a.length,null,null))
return H.kM(a,b,c)},
j:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ishB:1,
$isq:1}}],["","",,H,{"^":"",
h_:function(){return new P.i4("No element")},
fK:{"^":"d;"},
hb:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.c0(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.bc(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
hh:{"^":"d;a,b,$ti",
gY:function(a){return new H.hi(J.c4(this.a),this.b,this.$ti)},
gk:function(a){return J.b9(this.a)},
D:function(a,b){return this.b.$1(J.dp(this.a,b))},
$asd:function(a,b){return[b]}},
hi:{"^":"cM;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascM:function(a,b){return[b]}},
iO:{"^":"d;a,b,$ti",
gY:function(a){return new H.iP(J.c4(this.a),this.b,this.$ti)}},
iP:{"^":"cM;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
ce:{"^":"a;$ti"}}],["","",,H,{"^":"",
kq:function(a){return init.types[H.Y(a)]},
ky:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isC},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.j(H.ct(a))
return z},
bp:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aW:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.w||!!J.J(a).$isd7){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.ea(w,0)===36)w=C.i.cs(w,1)
r=H.dl(H.c2(H.aR(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ab:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hL:function(a){return a.b?H.ab(a).getUTCFullYear()+0:H.ab(a).getFullYear()+0},
hJ:function(a){return a.b?H.ab(a).getUTCMonth()+1:H.ab(a).getMonth()+1},
hF:function(a){return a.b?H.ab(a).getUTCDate()+0:H.ab(a).getDate()+0},
hG:function(a){return a.b?H.ab(a).getUTCHours()+0:H.ab(a).getHours()+0},
hI:function(a){return a.b?H.ab(a).getUTCMinutes()+0:H.ab(a).getMinutes()+0},
hK:function(a){return a.b?H.ab(a).getUTCSeconds()+0:H.ab(a).getSeconds()+0},
hH:function(a){return a.b?H.ab(a).getUTCMilliseconds()+0:H.ab(a).getMilliseconds()+0},
r:function(a){throw H.j(H.ct(a))},
k:function(a,b){if(a==null)J.b9(a)
throw H.j(H.bZ(a,b))},
bZ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.Y(J.b9(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.d_(b,"index",null)},
ct:function(a){return new P.aJ(!0,a,null,null)},
ki:function(a){if(typeof a!=="number")throw H.j(H.ct(a))
return a},
j:function(a){var z
if(a==null)a=new P.e1()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fc})
z.name=""}else z.toString=H.fc
return z},
fc:function(){return J.a9(this.dartException)},
p:function(a){throw H.j(a)},
z:function(a){throw H.j(P.bc(a))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cS(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cR(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e0(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eh()
u=$.$get$ei()
t=$.$get$ej()
s=$.$get$ek()
r=$.$get$eo()
q=$.$get$ep()
p=$.$get$em()
$.$get$el()
o=$.$get$er()
n=$.$get$eq()
m=v.ae(y)
if(m!=null)return z.$1(H.cR(H.V(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.cR(H.V(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e0(H.V(y),m))}}return z.$1(new H.iA(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e7()
return a},
b7:function(a){var z
if(a==null)return new H.eQ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eQ(a)},
ko:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.ac(0,a[y],a[x])}return b},
kx:function(a,b,c,d,e,f){H.h(a,"$iscK")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.o("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kx)
a.$identity=z
return z},
fs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hN(z).r}else x=d
w=e?Object.create(new H.i5().constructor.prototype):Object.create(new H.cA(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.E()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dz(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kq,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.du:H.cB
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dz(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fp:function(a,b,c,d){var z=H.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dz:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fp(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.E()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ba
if(v==null){v=H.c6("self")
$.ba=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.E()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.c6("self")
$.ba=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fq:function(a,b,c,d){var z,y
z=H.cB
y=H.du
switch(b?-1:a){case 0:throw H.j(H.hV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fr:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.c6("self")
$.ba=z}y=$.dt
if(y==null){y=H.c6("receiver")
$.dt=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.ar
if(typeof y!=="number")return y.E()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.E()
$.ar=y+1
return new Function(z+y+"}")()},
dg:function(a,b,c,d,e,f,g){var z,y
z=J.bj(H.c2(b))
H.Y(c)
y=!!J.J(d).$isf?J.bj(d):d
return H.fs(a,z,c,y,!!e,f,g)},
V:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.ay(a,"String"))},
kD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.ay(a,"num"))},
f2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.ay(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.ay(a,"int"))},
fa:function(a,b){throw H.j(H.ay(a,H.V(b).substring(3)))},
kF:function(a,b){var z=J.c0(b)
throw H.j(H.fo(a,z.ct(b,3,z.gk(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fa(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kF(a,b)},
c2:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.j(H.ay(a,"List"))},
kz:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
if(J.J(a)[b])return a
H.fa(a,b)},
f3:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
c_:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f3(J.J(a))
if(z==null)return!1
y=H.f6(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.dc)return a
$.dc=!0
try{if(H.c_(a,b))return a
z=H.c3(b)
y=H.ay(a,z)
throw H.j(y)}finally{$.dc=!1}},
di:function(a,b){if(a!=null&&!H.df(a,b))H.p(H.ay(a,H.c3(b)))
return a},
eY:function(a){var z
if(a instanceof H.v){z=H.f3(J.J(a))
if(z!=null)return H.c3(z)
return"Closure"}return H.aW(a)},
kO:function(a){throw H.j(new P.fz(H.V(a)))},
f4:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
mE:function(a,b,c){return H.b8(a["$as"+H.i(c)],H.aR(b))},
bL:function(a,b,c,d){var z
H.V(c)
H.Y(d)
z=H.b8(a["$as"+H.i(c)],H.aR(b))
return z==null?null:z[d]},
aQ:function(a,b,c){var z
H.V(b)
H.Y(c)
z=H.b8(a["$as"+H.i(b)],H.aR(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.Y(b)
z=H.aR(a)
return z==null?null:z[b]},
c3:function(a){var z=H.aS(a,null)
return z},
aS:function(a,b){var z,y
H.x(b,"$isf",[P.q],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dl(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.i(b[y])}if('func' in a)return H.k8(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.q]
H.x(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aS(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aS(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aS(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kn(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.V(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dl:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isf",[P.q],"$asf")
if(a==null)return""
z=new P.bW("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}v="<"+z.j(0)+">"
return v},
b8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aR(a)
y=J.J(a)
if(y[b]==null)return!1
return H.f0(H.b8(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.V(b)
H.c2(c)
H.V(d)
if(a==null)return a
z=H.b4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dl(c,0,null)
throw H.j(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f0:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
mC:function(a,b,c){return a.apply(b,H.b8(J.J(b)["$as"+H.i(c)],H.aR(b)))},
f7:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.f7(z)}return!1},
df:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.f7(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.df(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c_(a,b)}y=J.J(a).constructor
x=H.aR(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.df(a,b))throw H.j(H.ay(a,H.c3(b)))
return a},
al:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.al(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.f6(a,b,c,d)
if('func' in a)return c.builtin$cls==="cK"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bg" in y.prototype))return!1
w=y.prototype["$as"+"bg"]
v=H.b8(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c3(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f0(H.b8(r,z),b,u,d)},
f6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.al(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.al(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.al(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.al(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kC(m,b,l,d)},
kC:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
mD:function(a,b,c){Object.defineProperty(a,H.V(b),{value:c,enumerable:false,writable:true,configurable:true})},
kA:function(a){var z,y,x,w,v,u
z=H.V($.f5.$1(a))
y=$.cu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.V($.f_.$2(a,z))
if(z!=null){y=$.cu[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cw[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cx(x)
$.cu[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cw[z]=x
return x}if(v==="-"){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f9(a,x)
if(v==="*")throw H.j(P.ez(z))
if(init.leafTags[z]===true){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f9(a,x)},
f9:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dm(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cx:function(a){return J.dm(a,!1,null,!!a.$isC)},
kB:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cx(z)
else return J.dm(z,c,null,null)},
kv:function(){if(!0===$.dk)return
$.dk=!0
H.kw()},
kw:function(){var z,y,x,w,v,u,t,s
$.cu=Object.create(null)
$.cw=Object.create(null)
H.kr()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fb.$1(v)
if(u!=null){t=H.kB(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kr:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b3(C.z,H.b3(C.E,H.b3(C.n,H.b3(C.n,H.b3(C.D,H.b3(C.A,H.b3(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f5=new H.ks(v)
$.f_=new H.kt(u)
$.fb=new H.ku(t)},
b3:function(a,b){return a(b)||b},
kM:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hM:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bj(z)
y=z[0]
x=z[1]
return new H.hM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iq:{"^":"a;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.q])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
en:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hz:{"^":"Z;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e0:function(a,b){return new H.hz(a,b==null?null:b.method)}}},
h2:{"^":"Z;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
p:{
cR:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h2(a,y,z?null:b.receiver)}}},
iA:{"^":"Z;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kP:{"^":"v:13;a",
$1:function(a){if(!!J.J(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eQ:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
v:{"^":"a;",
j:function(a){return"Closure '"+H.aW(this).trim()+"'"},
gdK:function(){return this},
$iscK:1,
gdK:function(){return this}},
ea:{"^":"v;"},
i5:{"^":"ea;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cA:{"^":"ea;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bp(this.a)
else y=typeof z!=="object"?J.aI(z):H.bp(z)
return(y^H.bp(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aW(z)+"'")},
p:{
cB:function(a){return a.a},
du:function(a){return a.c},
c6:function(a){var z,y,x,w,v
z=new H.cA("self","target","receiver","name")
y=J.bj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ir:{"^":"Z;a",
j:function(a){return this.a},
p:{
ay:function(a,b){return new H.ir("TypeError: "+H.i(P.cd(a))+": type '"+H.eY(a)+"' is not a subtype of type '"+b+"'")}}},
fn:{"^":"Z;a",
j:function(a){return this.a},
p:{
fo:function(a,b){return new H.fn("CastError: "+H.i(P.cd(a))+": type '"+H.eY(a)+"' is not a subtype of type '"+b+"'")}}},
hU:{"^":"Z;a",
j:function(a){return"RuntimeError: "+H.i(this.a)},
p:{
hV:function(a){return new H.hU(a)}}},
cQ:{"^":"hf;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gax:function(a){return new H.h6(this,[H.A(this,0)])},
fJ:function(a,b){var z=this.b
if(z==null)return!1
return this.ed(z,b)},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bc(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bc(w,b)
x=y==null?null:y.b
return x}else return this.fS(b)},
fS:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cL(z,J.aI(a)&0x3ffffff)
x=this.dr(y,a)
if(x<0)return
return y[x].b},
ac:function(a,b,c){var z,y,x,w,v,u
H.D(b,H.A(this,0))
H.D(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bL()
this.b=z}this.cA(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bL()
this.c=y}this.cA(y,b,c)}else{x=this.d
if(x==null){x=this.bL()
this.d=x}w=J.aI(b)&0x3ffffff
v=this.cL(x,w)
if(v==null)this.bQ(x,w,[this.bM(b,c)])
else{u=this.dr(v,b)
if(u>=0)v[u].b=c
else v.push(this.bM(b,c))}}},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.bc(this))
z=z.c}},
cA:function(a,b,c){var z
H.D(b,H.A(this,0))
H.D(c,H.A(this,1))
z=this.bc(a,b)
if(z==null)this.bQ(a,b,this.bM(b,c))
else z.b=c},
el:function(){this.r=this.r+1&67108863},
bM:function(a,b){var z,y
z=new H.h5(H.D(a,H.A(this,0)),H.D(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.el()
return z},
dr:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
j:function(a){return P.dX(this)},
bc:function(a,b){return a[b]},
cL:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
eg:function(a,b){delete a[b]},
ed:function(a,b){return this.bc(a,b)!=null},
bL:function(){var z=Object.create(null)
this.bQ(z,"<non-identifier-key>",z)
this.eg(z,"<non-identifier-key>")
return z},
$isdV:1},
h5:{"^":"a;a,b,0c,0d"},
h6:{"^":"fK;a,$ti",
gk:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.h7(z,z.r,this.$ti)
y.c=z.e
return y}},
h7:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.bc(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ks:{"^":"v:13;a",
$1:function(a){return this.a(a)}},
kt:{"^":"v:39;a",
$2:function(a,b){return this.a(a,b)}},
ku:{"^":"v:35;a",
$1:function(a){return this.a(H.V(a))}}}],["","",,H,{"^":"",
kn:function(a){return J.dP(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b1:function(a){return a},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bZ(b,a))},
hx:{"^":"n;",$isml:1,"%":"DataView;ArrayBufferView;cY|eK|eL|hw|eM|eN|aL"},
cY:{"^":"hx;",
gk:function(a){return a.length},
$isC:1,
$asC:I.dh},
hw:{"^":"eL;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
$asce:function(){return[P.t]},
$asu:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
$isf:1,
$asf:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eN;",
$asce:function(){return[P.M]},
$asu:function(){return[P.M]},
$isd:1,
$asd:function(){return[P.M]},
$isf:1,
$asf:function(){return[P.M]}},
lR:{"^":"aL;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lS:{"^":"aL;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lT:{"^":"aL;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lU:{"^":"aL;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lV:{"^":"aL;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lW:{"^":"aL;",
gk:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lX:{"^":"aL;",
gk:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eK:{"^":"cY+u;"},
eL:{"^":"eK+ce;"},
eM:{"^":"cY+u;"},
eN:{"^":"eM+ce;"}}],["","",,P,{"^":"",
iR:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kf()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.iT(z),1)).observe(y,{childList:true})
return new P.iS(z,y,x)}else if(self.setImmediate!=null)return P.kg()
return P.kh()},
mr:[function(a){self.scheduleImmediate(H.b5(new P.iU(H.c(a,{func:1,ret:-1})),0))},"$1","kf",4,0,9],
ms:[function(a){self.setImmediate(H.b5(new P.iV(H.c(a,{func:1,ret:-1})),0))},"$1","kg",4,0,9],
mt:[function(a){H.c(a,{func:1,ret:-1})
P.jP(0,a)},"$1","kh",4,0,9],
ef:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.aY]})
z=C.f.a5(a.a,1000)
return P.jQ(z<0?0:z,b)},
kb:function(a,b){if(H.c_(a,{func:1,args:[P.a,P.ap]}))return b.hc(a,null,P.a,P.ap)
if(H.c_(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.c5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ka:function(){var z,y
for(;z=$.b2,z!=null;){$.bJ=null
y=z.b
$.b2=y
if(y==null)$.bI=null
z.a.$0()}},
mB:[function(){$.dd=!0
try{P.ka()}finally{$.bJ=null
$.dd=!1
if($.b2!=null)$.$get$d9().$1(P.f1())}},"$0","f1",0,0,3],
eX:function(a){var z=new P.eE(H.c(a,{func:1,ret:-1}))
if($.b2==null){$.bI=z
$.b2=z
if(!$.dd)$.$get$d9().$1(P.f1())}else{$.bI.b=z
$.bI=z}},
ke:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.b2
if(z==null){P.eX(a)
$.bJ=$.bI
return}y=new P.eE(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.b2=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
kG:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.Q
if(C.j===y){P.cs(null,null,C.j,a)
return}y.toString
P.cs(null,null,y,H.c(y.cX(a),z))},
io:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aY]}
H.c(b,z)
y=$.Q
if(y===C.j){y.toString
return P.ef(a,b)}x=y.cY(b,P.aY)
$.Q.toString
return P.ef(a,H.c(x,z))},
cr:function(a,b,c,d,e){var z={}
z.a=d
P.ke(new P.kc(z,e))},
eV:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.Q
if(y===c)return d.$0()
$.Q=c
z=y
try{y=d.$0()
return y}finally{$.Q=z}},
eW:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.Q
if(y===c)return d.$1(e)
$.Q=c
z=y
try{y=d.$1(e)
return y}finally{$.Q=z}},
kd:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.Q
if(y===c)return d.$2(e,f)
$.Q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Q=z}},
cs:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cX(d):c.fG(d,-1)
P.eX(d)},
iT:{"^":"v:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iS:{"^":"v:29;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iU:{"^":"v:2;a",
$0:function(){this.a.$0()}},
iV:{"^":"v:2;a",
$0:function(){this.a.$0()}},
eT:{"^":"a;a,0b,c",
e1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.jS(this,b),0),a)
else throw H.j(P.ag("`setTimeout()` not found."))},
e2:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b5(new P.jR(this,a,Date.now(),b),0),a)
else throw H.j(P.ag("Periodic timer."))},
$isaY:1,
p:{
jP:function(a,b){var z=new P.eT(!0,0)
z.e1(a,b)
return z},
jQ:function(a,b){var z=new P.eT(!1,0)
z.e2(a,b)
return z}}},
jS:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jR:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dU(w,x)}z.c=y
this.d.$1(z)}},
b0:{"^":"a;0a,b,c,d,e,$ti",
fX:function(a){if(this.c!==6)return!0
return this.b.b.ck(H.c(this.d,{func:1,ret:P.a8,args:[P.a]}),a.a,P.a8,P.a)},
fR:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.c_(z,{func:1,args:[P.a,P.ap]}))return H.di(w.hg(z,a.a,a.b,null,y,P.ap),x)
else return H.di(w.ck(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aG:{"^":"a;cT:a<,b,0f_:c<,$ti",
dG:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Q
if(y!==C.j){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kb(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aG(0,$.Q,[c])
w=b==null?1:3
this.cB(new P.b0(x,w,a,b,[z,c]))
return x},
hk:function(a,b){return this.dG(a,null,b)},
cB:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isb0")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaG")
z=y.a
if(z<4){y.cB(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cs(null,null,z,H.c(new P.j8(this,a),{func:1,ret:-1}))}},
cO:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isb0")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaG")
y=u.a
if(y<4){u.cO(a)
return}this.a=y
this.c=u.c}z.a=this.be(a)
y=this.b
y.toString
P.cs(null,null,y,H.c(new P.jd(z,this),{func:1,ret:-1}))}},
bO:function(){var z=H.h(this.c,"$isb0")
this.c=null
return this.be(z)},
be:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cF:function(a){var z,y,x,w
z=H.A(this,0)
H.di(a,{futureOr:1,type:z})
y=this.$ti
x=H.b4(a,"$isbg",y,"$asbg")
if(x){z=H.b4(a,"$isaG",y,null)
if(z)P.eG(a,this)
else P.j9(a,this)}else{w=this.bO()
H.D(a,z)
this.a=4
this.c=a
P.bF(this,w)}},
bD:[function(a,b){var z
H.h(b,"$isap")
z=this.bO()
this.a=8
this.c=new P.ah(a,b)
P.bF(this,z)},function(a){return this.bD(a,null)},"hq","$2","$1","geb",4,2,28],
$isbg:1,
p:{
j9:function(a,b){var z,y,x
b.a=1
try{a.dG(new P.ja(b),new P.jb(b),null)}catch(x){z=H.aT(x)
y=H.b7(x)
P.kG(new P.jc(b,z,y))}},
eG:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaG")
if(z>=4){y=b.bO()
b.a=a.a
b.c=a.c
P.bF(b,y)}else{y=H.h(b.c,"$isb0")
b.a=2
b.c=a
a.cO(y)}},
bF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isah")
y=y.b
u=v.a
t=v.b
y.toString
P.cr(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bF(z.a,b)}y=z.a
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
if(p){H.h(r,"$isah")
y=y.b
u=r.a
t=r.b
y.toString
P.cr(null,null,y,u,t)
return}o=$.Q
if(o==null?q!=null:o!==q)$.Q=q
else o=null
y=b.c
if(y===8)new P.jg(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jf(x,b,r).$0()}else if((y&2)!==0)new P.je(z,x,b).$0()
if(o!=null)$.Q=o
y=x.b
if(!!J.J(y).$isbg){if(y.a>=4){n=H.h(t.c,"$isb0")
t.c=null
b=t.be(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eG(y,t)
return}}m=b.b
n=H.h(m.c,"$isb0")
m.c=null
b=m.be(n)
y=x.a
u=x.b
if(!y){H.D(u,H.A(m,0))
m.a=4
m.c=u}else{H.h(u,"$isah")
m.a=8
m.c=u}z.a=m
y=m}}}},
j8:{"^":"v:2;a,b",
$0:function(){P.bF(this.a,this.b)}},
jd:{"^":"v:2;a,b",
$0:function(){P.bF(this.b,this.a.a)}},
ja:{"^":"v:15;a",
$1:function(a){var z=this.a
z.a=0
z.cF(a)}},
jb:{"^":"v:27;a",
$2:function(a,b){this.a.bD(a,H.h(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
jc:{"^":"v:2;a,b,c",
$0:function(){this.a.bD(this.b,this.c)}},
jg:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dE(H.c(w.d,{func:1}),null)}catch(v){y=H.aT(v)
x=H.b7(v)
if(this.d){w=H.h(this.a.a.c,"$isah").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isah")
else u.b=new P.ah(y,x)
u.a=!0
return}if(!!J.J(z).$isbg){if(z instanceof P.aG&&z.gcT()>=4){if(z.gcT()===8){w=this.b
w.b=H.h(z.gf_(),"$isah")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hk(new P.jh(t),null)
w.a=!1}}},
jh:{"^":"v:24;a",
$1:function(a){return this.a}},
jf:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.D(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.ck(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aT(t)
y=H.b7(t)
x=this.a
x.b=new P.ah(z,y)
x.a=!0}}},
je:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isah")
w=this.c
if(w.fX(z)&&w.e!=null){v=this.b
v.b=w.fR(z)
v.a=!1}}catch(u){y=H.aT(u)
x=H.b7(u)
w=H.h(this.a.a.c,"$isah")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ah(y,x)
s.a=!0}}},
eE:{"^":"a;a,0b"},
d3:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aG(0,$.Q,[P.M])
z.a=0
this.fV(new P.i7(z,this),!0,new P.i8(z,y),y.geb())
return y}},
i7:{"^":"v;a,b",
$1:function(a){H.D(a,H.aQ(this.b,"d3",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aQ(this.b,"d3",0)]}}},
i8:{"^":"v:2;a,b",
$0:function(){this.b.cF(this.a.a)}},
e8:{"^":"a;$ti"},
aY:{"^":"a;"},
ah:{"^":"a;a,b",
j:function(a){return H.i(this.a)},
$isZ:1},
jX:{"^":"a;",$ismq:1},
kc:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e1()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.j(0)
throw x}},
jB:{"^":"jX;",
hh:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.j===$.Q){a.$0()
return}P.eV(null,null,this,a,-1)}catch(x){z=H.aT(x)
y=H.b7(x)
P.cr(null,null,this,z,H.h(y,"$isap"))}},
hi:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.Q){a.$1(b)
return}P.eW(null,null,this,a,b,-1,c)}catch(x){z=H.aT(x)
y=H.b7(x)
P.cr(null,null,this,z,H.h(y,"$isap"))}},
fG:function(a,b){return new P.jD(this,H.c(a,{func:1,ret:b}),b)},
cX:function(a){return new P.jC(this,H.c(a,{func:1,ret:-1}))},
cY:function(a,b){return new P.jE(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
dE:function(a,b){H.c(a,{func:1,ret:b})
if($.Q===C.j)return a.$0()
return P.eV(null,null,this,a,b)},
ck:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.Q===C.j)return a.$1(b)
return P.eW(null,null,this,a,b,c,d)},
hg:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.Q===C.j)return a.$2(b,c)
return P.kd(null,null,this,a,b,c,d,e,f)},
hc:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
jD:{"^":"v;a,b,c",
$0:function(){return this.a.dE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jC:{"^":"v:3;a,b",
$0:function(){return this.a.hh(this.b)}},
jE:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.hi(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h9:function(a,b,c){H.c2(a)
return H.x(H.ko(a,new H.cQ(0,0,[b,c])),"$isdV",[b,c],"$asdV")},
h8:function(a,b){return new H.cQ(0,0,[a,b])},
ha:function(a,b,c,d){return new P.jn(0,0,[d])},
fZ:function(a,b,c){var z,y
if(P.de(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.h(y,a)
try{P.k9(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.e9(b,H.kz(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cL:function(a,b,c){var z,y,x
if(P.de(a))return b+"..."+c
z=new P.bW(b)
y=$.$get$bK()
C.a.h(y,a)
try{x=z
x.a=P.e9(x.gaE(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
de:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
k9:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.i(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.G();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dX:function(a){var z,y,x
z={}
if(P.de(a))return"{...}"
y=new P.bW("")
try{C.a.h($.$get$bK(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.fg(a,new P.hg(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
jn:{"^":"ji;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.eJ(this,this.r,H.A(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.D(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.db()
this.b=z}return this.cD(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.db()
this.c=y}return this.cD(y,b)}else return this.e4(0,b)},
e4:function(a,b){var z,y,x
H.D(b,H.A(this,0))
z=this.d
if(z==null){z=P.db()
this.d=z}y=this.cG(b)
x=z[y]
if(x==null)z[y]=[this.bC(b)]
else{if(this.cK(x,b)>=0)return!1
x.push(this.bC(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cP(this.c,b)
else return this.eV(0,b)},
eV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ei(z,b)
x=this.cK(y,b)
if(x<0)return!1
this.cV(y.splice(x,1)[0])
return!0},
cD:function(a,b){H.D(b,H.A(this,0))
if(H.h(a[b],"$isda")!=null)return!1
a[b]=this.bC(b)
return!0},
cP:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isda")
if(z==null)return!1
this.cV(z)
delete a[b]
return!0},
cE:function(){this.r=this.r+1&67108863},
bC:function(a){var z,y
z=new P.da(H.D(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cE()
return z},
cV:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cE()},
cG:function(a){return J.aI(a)&0x3ffffff},
ei:function(a,b){return a[this.cG(b)]},
cK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
p:{
db:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
da:{"^":"a;a,0b,0c"},
jo:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.bc(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.A(this,0))
this.c=z.b
return!0}}},
p:{
eJ:function(a,b,c){var z=new P.jo(a,b,[c])
z.c=a.e
return z}}},
ji:{"^":"hW;"},
cT:{"^":"jp;",$isd:1,$isf:1},
u:{"^":"a;$ti",
gY:function(a){return new H.hb(a,this.gk(a),0,[H.bL(this,a,"u",0)])},
D:function(a,b){return this.i(a,b)},
hn:function(a,b){var z,y,x
z=H.e([],[H.bL(this,a,"u",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.ac(z,y,this.i(a,y));++y}return z},
hm:function(a){return this.hn(a,!0)},
j:function(a){return P.cL(a,"[","]")}},
hf:{"^":"ad;"},
hg:{"^":"v:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ad:{"^":"a;$ti",
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bL(this,a,"ad",0),H.bL(this,a,"ad",1)]})
for(z=J.c4(this.gax(a));z.G();){y=z.gR(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.b9(this.gax(a))},
j:function(a){return P.dX(a)},
$isa3:1},
hX:{"^":"a;$ti",
j:function(a){return P.cL(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dq("index"))
if(b<0)H.p(P.bq(b,0,null,"index",null))
for(z=P.eJ(this,this.r,H.A(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.j(P.O(b,this,"index",null,y))},
$isd:1},
hW:{"^":"hX;"},
jp:{"^":"a+u;"}}],["","",,P,{"^":"",
fN:function(a){var z=J.J(a)
if(!!z.$isv)return z.j(a)
return"Instance of '"+H.aW(a)+"'"},
hc:function(a,b,c,d){var z,y
H.D(b,d)
z=J.h0(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.ac(z,y,b)
return H.x(z,"$isf",[d],"$asf")},
hd:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gY(a);x.G();)C.a.h(y,H.D(x.gR(x),c))
if(b)return y
return H.x(J.bj(y),"$isf",z,"$asf")},
cd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fN(a)},
o:function(a){return new P.eF(a)},
dn:function(a){H.kE(a)},
a8:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.f.cS(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fA(H.hL(this))
y=P.bN(H.hJ(this))
x=P.bN(H.hF(this))
w=P.bN(H.hG(this))
v=P.bN(H.hI(this))
u=P.bN(H.hK(this))
t=P.fB(H.hH(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fA:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bN:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"U;"},
"+double":0,
bO:{"^":"a;a",
ai:function(a,b){return C.f.ai(this.a,H.h(b,"$isbO").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bO))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.bO(0-y).j(0)
x=z.$1(C.f.a5(y,6e7)%60)
w=z.$1(C.f.a5(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.f.a5(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
p:{
dJ:function(a,b,c,d,e,f){return new P.bO(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"v:23;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"v:23;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
e1:{"^":"Z;",
j:function(a){return"Throw of null."}},
aJ:{"^":"Z;a,b,c,d",
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbF()+y+x
if(!this.a)return w
v=this.gbE()
u=P.cd(this.b)
return w+v+": "+H.i(u)},
p:{
fh:function(a){return new P.aJ(!1,null,null,a)},
c5:function(a,b,c){return new P.aJ(!0,a,b,c)},
dq:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
e4:{"^":"aJ;e,f,a,b,c,d",
gbF:function(){return"RangeError"},
gbE:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
p:{
d_:function(a,b,c){return new P.e4(null,null,!0,a,b,"Value not in range")},
bq:function(a,b,c,d,e){return new P.e4(b,c,!0,a,d,"Invalid value")}}},
fY:{"^":"aJ;e,k:f>,a,b,c,d",
gbF:function(){return"RangeError"},
gbE:function(){if(J.fd(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
p:{
O:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b9(b))
return new P.fY(b,z,!0,a,c,"Index out of range")}}},
iB:{"^":"Z;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
ag:function(a){return new P.iB(a)}}},
iz:{"^":"Z;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ez:function(a){return new P.iz(a)}}},
i4:{"^":"Z;a",
j:function(a){return"Bad state: "+this.a}},
fv:{"^":"Z;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cd(z))+"."},
p:{
bc:function(a){return new P.fv(a)}}},
hA:{"^":"a;",
j:function(a){return"Out of Memory"},
$isZ:1},
e7:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isZ:1},
fz:{"^":"Z;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eF:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
M:{"^":"U;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gY(this)
for(y=0;z.G();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dq("index"))
if(b<0)H.p(P.bq(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.j(P.O(b,this,"index",null,y))},
j:function(a){return P.fZ(this,"(",")")}},
cM:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a3:{"^":"a;$ti"},
H:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
U:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bp(this)},
j:function(a){return"Instance of '"+H.aW(this)+"'"},
toString:function(){return this.j(this)}},
ap:{"^":"a;"},
q:{"^":"a;",$ishB:1},
"+String":0,
bW:{"^":"a;aE:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e9:function(a,b,c){var z=J.c4(b)
if(!z.G())return a
if(c.length===0){do a+=H.i(z.gR(z))
while(z.G())}else{a+=H.i(z.gR(z))
for(;z.G();)a=a+c+H.i(z.gR(z))}return a}}}}],["","",,W,{"^":"",
cD:function(a,b){var z=document.createElement("canvas")
return z},
fL:function(a){H.h(a,"$isa2")
return"wheel"},
cp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eI:function(a,b,c,d){var z,y
z=W.cp(W.cp(W.cp(W.cp(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eZ:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.Q
if(z===C.j)return a
return z.cY(a,b)},
aU:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kR:{"^":"d1;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
kS:{"^":"n;0k:length=","%":"AccessibleNodeList"},
kT:{"^":"aU;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kU:{"^":"aU;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fm:{"^":"n;","%":";Blob"},
cC:{"^":"aU;",
bz:function(a,b,c){if(c!=null)return a.getContext(b,P.kj(c,null))
return a.getContext(b)},
dM:function(a,b){return this.bz(a,b,null)},
$iscC:1,
"%":"HTMLCanvasElement"},
dx:{"^":"n;",$isdx:1,"%":"CanvasRenderingContext2D"},
l_:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l1:{"^":"ca;0k:length=","%":"CSSPerspective"},
l2:{"^":"cI;0q:x=,0t:y=","%":"CSSPositionValue"},
l3:{"^":"ca;0q:x=,0t:y=","%":"CSSRotation"},
bd:{"^":"n;",$isbd:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l4:{"^":"ca;0q:x=,0t:y=","%":"CSSScale"},
fx:{"^":"iZ;0k:length=",
dN:function(a,b){var z=a.getPropertyValue(this.cC(a,b))
return z==null?"":z},
cC:function(a,b){var z,y
z=$.$get$dA()
y=z[b]
if(typeof y==="string")return y
y=this.f8(a,b)
z[b]=y
return y},
f8:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
f1:function(a,b,c,d){a.setProperty(b,c,d)},
gbW:function(a){return a.bottom},
gal:function(a){return a.height},
gaR:function(a){return a.left},
gb5:function(a){return a.right},
gb8:function(a){return a.top},
gan:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fy:{"^":"a;",
gaR:function(a){return this.dN(a,"left")}},
cI:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ca:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l5:{"^":"cI;0k:length=","%":"CSSTransformValue"},
l6:{"^":"ca;0q:x=,0t:y=","%":"CSSTranslation"},
l7:{"^":"cI;0k:length=","%":"CSSUnparsedValue"},
l8:{"^":"n;0k:length=","%":"DataTransferItemList"},
l9:{"^":"n;0q:x=,0t:y=","%":"DeviceAcceleration"},
la:{"^":"n;",
j:function(a){return String(a)},
"%":"DOMException"},
lb:{"^":"fG;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
fG:{"^":"n;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
lc:{"^":"j0;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[[P.ac,P.U]]},
$asu:function(){return[[P.ac,P.U]]},
$isd:1,
$asd:function(){return[[P.ac,P.U]]},
$isf:1,
$asf:function(){return[[P.ac,P.U]]},
$asy:function(){return[[P.ac,P.U]]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"n;",
j:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gan(a))+" x "+H.i(this.gal(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b4(b,"$isac",[P.U],"$asac")
if(!z)return!1
z=J.c1(b)
return a.left===z.gaR(b)&&a.top===z.gb8(b)&&this.gan(a)===z.gan(b)&&this.gal(a)===z.gal(b)},
gT:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gbW:function(a){return a.bottom},
gal:function(a){return a.height},
gaR:function(a){return a.left},
gb5:function(a){return a.right},
gb8:function(a){return a.top},
gan:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isac:1,
$asac:function(){return[P.U]},
"%":";DOMRectReadOnly"},
ld:{"^":"j2;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[P.q]},
$asu:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
$isf:1,
$asf:function(){return[P.q]},
$asy:function(){return[P.q]},
"%":"DOMStringList"},
le:{"^":"n;0k:length=","%":"DOMTokenList"},
iY:{"^":"cT;a,b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.h(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.hm(this)
return new J.am(z,z.length,0,[H.A(z,0)])},
$asu:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
a0:{"^":"K;",
gcZ:function(a){return new W.iY(a,a.children)},
gbi:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ai()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ai()
if(w<0)w=-w*0
return new P.ac(z,y,x,w,[P.U])},
j:function(a){return a.localName},
$isa0:1,
"%":";Element"},
aa:{"^":"n;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"n;",
cW:["dR",function(a,b,c,d){H.c(c,{func:1,args:[W.aa]})
if(c!=null)this.e5(a,b,c,!1)}],
e5:function(a,b,c,d){return a.addEventListener(b,H.b5(H.c(c,{func:1,args:[W.aa]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eO|eP|eR|eS"},
bf:{"^":"fm;",$isbf:1,"%":"File"},
lx:{"^":"j7;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bf]},
$asu:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$isf:1,
$asf:function(){return[W.bf]},
$asy:function(){return[W.bf]},
"%":"FileList"},
ly:{"^":"a2;0k:length=","%":"FileWriter"},
lB:{"^":"aU;0k:length=","%":"HTMLFormElement"},
bh:{"^":"n;",$isbh:1,"%":"Gamepad"},
lC:{"^":"d1;0q:x=,0t:y=","%":"Gyroscope"},
lD:{"^":"n;0k:length=","%":"History"},
lE:{"^":"jk;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.K]},
$asu:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cf:{"^":"n;0d0:data=",$iscf:1,"%":"ImageData"},
dO:{"^":"aU;",$isdO:1,"%":"HTMLImageElement"},
bk:{"^":"d5;",$isbk:1,"%":"KeyboardEvent"},
lJ:{"^":"n;",
j:function(a){return String(a)},
"%":"Location"},
lK:{"^":"d1;0q:x=,0t:y=","%":"Magnetometer"},
lM:{"^":"n;0k:length=","%":"MediaList"},
lN:{"^":"a2;",
cW:function(a,b,c,d){H.c(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.dR(a,b,c,!1)},
"%":"MessagePort"},
lO:{"^":"jq;",
i:function(a,b){return P.aH(a.get(H.V(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gax:function(a){var z=H.e([],[P.q])
this.N(a,new W.ht(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.q,null]},
$isa3:1,
$asa3:function(){return[P.q,null]},
"%":"MIDIInputMap"},
ht:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lP:{"^":"jr;",
i:function(a,b){return P.aH(a.get(H.V(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gax:function(a){var z=H.e([],[P.q])
this.N(a,new W.hu(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.q,null]},
$isa3:1,
$asa3:function(){return[P.q,null]},
"%":"MIDIOutputMap"},
hu:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bl:{"^":"n;",$isbl:1,"%":"MimeType"},
lQ:{"^":"jt;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bl]},
$asu:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$asy:function(){return[W.bl]},
"%":"MimeTypeArray"},
au:{"^":"d5;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iX:{"^":"cT;a",
gY:function(a){var z=this.a.childNodes
return new W.dL(z,z.length,-1,[H.bL(C.G,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$asu:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a2;",
j:function(a){var z=a.nodeValue
return z==null?this.dS(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hy:{"^":"jv;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.K]},
$asu:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bn:{"^":"n;0k:length=",$isbn:1,"%":"Plugin"},
m0:{"^":"jz;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bn]},
$asu:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$isf:1,
$asf:function(){return[W.bn]},
$asy:function(){return[W.bn]},
"%":"PluginArray"},
m5:{"^":"jF;",
i:function(a,b){return P.aH(a.get(H.V(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gax:function(a){var z=H.e([],[P.q])
this.N(a,new W.hT(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.q,null]},
$isa3:1,
$asa3:function(){return[P.q,null]},
"%":"RTCStatsReport"},
hT:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m6:{"^":"aU;0k:length=","%":"HTMLSelectElement"},
d1:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bs:{"^":"a2;",$isbs:1,"%":"SourceBuffer"},
m7:{"^":"eP;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bs]},
$asu:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"SourceBufferList"},
bt:{"^":"n;",$isbt:1,"%":"SpeechGrammar"},
m8:{"^":"jH;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bt]},
$asu:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"SpeechGrammarList"},
bu:{"^":"n;0k:length=",$isbu:1,"%":"SpeechRecognitionResult"},
ma:{"^":"jK;",
i:function(a,b){return a.getItem(H.V(b))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,P.q]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gax:function(a){var z=H.e([],[P.q])
this.N(a,new W.i6(z))
return z},
gk:function(a){return a.length},
$asad:function(){return[P.q,P.q]},
$isa3:1,
$asa3:function(){return[P.q,P.q]},
"%":"Storage"},
i6:{"^":"v:37;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bv:{"^":"n;",$isbv:1,"%":"CSSStyleSheet|StyleSheet"},
bw:{"^":"aU;",$isbw:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bx:{"^":"a2;",$isbx:1,"%":"TextTrack"},
by:{"^":"a2;",$isby:1,"%":"TextTrackCue|VTTCue"},
mf:{"^":"jO;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.by]},
$asu:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"TextTrackCueList"},
mg:{"^":"eS;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"TextTrackList"},
mh:{"^":"n;0k:length=","%":"TimeRanges"},
bA:{"^":"n;",$isbA:1,"%":"Touch"},
aZ:{"^":"d5;",$isaZ:1,"%":"TouchEvent"},
mi:{"^":"jU;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bA]},
$asu:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TouchList"},
mj:{"^":"n;0k:length=","%":"TrackDefaultList"},
d5:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mm:{"^":"n;",
j:function(a){return String(a)},
"%":"URL"},
mo:{"^":"n;0q:x=","%":"VRStageBoundsPoint"},
mp:{"^":"a2;0k:length=","%":"VideoTrackList"},
bE:{"^":"au;",
gfN:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.ag("deltaY is not supported"))},
gfM:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.ag("deltaX is not supported"))},
$isbE:1,
"%":"WheelEvent"},
iQ:{"^":"a2;",
eW:function(a,b){return a.requestAnimationFrame(H.b5(H.c(b,{func:1,ret:-1,args:[P.U]}),1))},
eh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mu:{"^":"jZ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$isf:1,
$asf:function(){return[W.bd]},
$asy:function(){return[W.bd]},
"%":"CSSRuleList"},
mv:{"^":"fH;",
j:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b4(b,"$isac",[P.U],"$asac")
if(!z)return!1
z=J.c1(b)
return a.left===z.gaR(b)&&a.top===z.gb8(b)&&a.width===z.gan(b)&&a.height===z.gal(b)},
gT:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gan:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mx:{"^":"k0;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bh]},
$asu:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asy:function(){return[W.bh]},
"%":"GamepadList"},
my:{"^":"k2;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.K]},
$asu:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mz:{"^":"k4;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bu]},
$asu:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"SpeechRecognitionResultList"},
mA:{"^":"k6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"StyleSheetList"},
j3:{"^":"d3;a,b,c,$ti",
fV:function(a,b,c,d){var z=H.A(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
mw:{"^":"j3;a,b,c,$ti"},
j4:{"^":"e8;a,b,c,d,e,$ti",
fc:function(){var z=this.d
if(z!=null&&this.a<=0)J.ff(this.b,this.c,z,!1)},
p:{
X:function(a,b,c,d,e){var z=c==null?null:W.eZ(new W.j5(c),W.aa)
z=new W.j4(0,a,b,z,!1,[e])
z.fc()
return z}}},
j5:{"^":"v:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isaa"))}},
y:{"^":"a;$ti",
gY:function(a){return new W.dL(a,this.gk(a),-1,[H.bL(this,a,"y",0)])}},
dL:{"^":"a;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fe(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
iZ:{"^":"n+fy;"},
j_:{"^":"n+u;"},
j0:{"^":"j_+y;"},
j1:{"^":"n+u;"},
j2:{"^":"j1+y;"},
j6:{"^":"n+u;"},
j7:{"^":"j6+y;"},
jj:{"^":"n+u;"},
jk:{"^":"jj+y;"},
jq:{"^":"n+ad;"},
jr:{"^":"n+ad;"},
js:{"^":"n+u;"},
jt:{"^":"js+y;"},
ju:{"^":"n+u;"},
jv:{"^":"ju+y;"},
jy:{"^":"n+u;"},
jz:{"^":"jy+y;"},
jF:{"^":"n+ad;"},
eO:{"^":"a2+u;"},
eP:{"^":"eO+y;"},
jG:{"^":"n+u;"},
jH:{"^":"jG+y;"},
jK:{"^":"n+ad;"},
jN:{"^":"n+u;"},
jO:{"^":"jN+y;"},
eR:{"^":"a2+u;"},
eS:{"^":"eR+y;"},
jT:{"^":"n+u;"},
jU:{"^":"jT+y;"},
jY:{"^":"n+u;"},
jZ:{"^":"jY+y;"},
k_:{"^":"n+u;"},
k0:{"^":"k_+y;"},
k1:{"^":"n+u;"},
k2:{"^":"k1+y;"},
k3:{"^":"n+u;"},
k4:{"^":"k3+y;"},
k5:{"^":"n+u;"},
k6:{"^":"k5+y;"}}],["","",,P,{"^":"",
km:function(a){var z,y
z=J.J(a)
if(!!z.$iscf){y=z.gd0(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eU(a.data,a.height,a.width)},
kl:function(a){if(a instanceof P.eU)return{data:a.a,height:a.b,width:a.c}
return a},
aH:function(a){var z,y,x,w,v
if(a==null)return
z=P.h8(P.q,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.V(y[w])
z.ac(0,v,a[v])}return z},
kj:function(a,b){var z={}
a.N(0,new P.kk(z))
return z},
dH:function(){var z=$.dG
if(z==null){z=J.cy(window.navigator.userAgent,"Opera",0)
$.dG=z}return z},
fF:function(){var z,y
z=$.dD
if(z!=null)return z
y=$.dE
if(y==null){y=J.cy(window.navigator.userAgent,"Firefox",0)
$.dE=y}if(y)z="-moz-"
else{y=$.dF
if(y==null){y=!P.dH()&&J.cy(window.navigator.userAgent,"Trident/",0)
$.dF=y}if(y)z="-ms-"
else z=P.dH()?"-o-":"-webkit-"}$.dD=z
return z},
eU:{"^":"a;d0:a>,b,c",$iscf:1},
kk:{"^":"v:12;a",
$2:function(a,b){this.a[a]=b}},
fP:{"^":"cT;a,b",
gbH:function(){var z,y,x
z=this.b
y=H.aQ(z,"u",0)
x=W.a0
return new H.hh(new H.iO(z,H.c(new P.fQ(),{func:1,ret:P.a8,args:[y]}),[y]),H.c(new P.fR(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b9(this.gbH().a)},
i:function(a,b){var z=this.gbH()
return z.b.$1(J.dp(z.a,b))},
gY:function(a){var z=P.hd(this.gbH(),!1,W.a0)
return new J.am(z,z.length,0,[H.A(z,0)])},
$asu:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
fQ:{"^":"v:25;",
$1:function(a){return!!J.J(H.h(a,"$isK")).$isa0}},
fR:{"^":"v:26;",
$1:function(a){return H.b(H.h(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bV:{"^":"a;q:a>,t:b>,$ti",
j:function(a){return"Point("+H.i(this.a)+", "+H.i(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b4(b,"$isbV",[P.U],null)
if(!z)return!1
z=this.a
y=J.c1(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.aI(this.a)
y=J.aI(this.b)
return P.eH(P.bG(P.bG(0,z),y))}},
jA:{"^":"a;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.D(z+this.c,H.A(this,0))},
gbW:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.D(z+this.d,H.A(this,0))},
j:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b4(b,"$isac",[P.U],"$asac")
if(!z)return!1
z=this.a
y=J.c1(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.A(this,0)
if(H.D(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.E()
z=H.D(x+this.d,w)===y.gbW(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.aI(z)
x=this.b
w=J.aI(x)
if(typeof z!=="number")return z.E()
v=H.A(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.D(x+this.d,v)
return P.eH(P.bG(P.bG(P.bG(P.bG(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d_:function(a,b){var z,y
H.x(b,"$isbV",[P.U],"$asbV")
z=b.a
y=this.a
if(typeof z!=="number")return z.dL()
if(typeof y!=="number")return H.r(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dL()
if(typeof y!=="number")return H.r(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ac:{"^":"jA;aR:a>,b8:b>,an:c>,al:d>,$ti"}}],["","",,P,{"^":"",lf:{"^":"T;0q:x=,0t:y=","%":"SVGFEBlendElement"},lg:{"^":"T;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},lh:{"^":"T;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},li:{"^":"T;0q:x=,0t:y=","%":"SVGFECompositeElement"},lj:{"^":"T;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},lk:{"^":"T;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},ll:{"^":"T;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},lm:{"^":"T;0q:x=,0t:y=","%":"SVGFEFloodElement"},ln:{"^":"T;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},lo:{"^":"T;0q:x=,0t:y=","%":"SVGFEImageElement"},lp:{"^":"T;0q:x=,0t:y=","%":"SVGFEMergeElement"},lq:{"^":"T;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},lr:{"^":"T;0q:x=,0t:y=","%":"SVGFEOffsetElement"},ls:{"^":"T;0q:x=,0t:y=","%":"SVGFEPointLightElement"},lt:{"^":"T;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},lu:{"^":"T;0q:x=,0t:y=","%":"SVGFESpotLightElement"},lv:{"^":"T;0q:x=,0t:y=","%":"SVGFETileElement"},lw:{"^":"T;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},lz:{"^":"T;0q:x=,0t:y=","%":"SVGFilterElement"},lA:{"^":"bi;0q:x=,0t:y=","%":"SVGForeignObjectElement"},fW:{"^":"bi;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bi:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lF:{"^":"bi;0q:x=,0t:y=","%":"SVGImageElement"},bT:{"^":"n;",$isbT:1,"%":"SVGLength"},lI:{"^":"jm;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$asu:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$isf:1,
$asf:function(){return[P.bT]},
$asy:function(){return[P.bT]},
"%":"SVGLengthList"},lL:{"^":"T;0q:x=,0t:y=","%":"SVGMaskElement"},bU:{"^":"n;",$isbU:1,"%":"SVGNumber"},lY:{"^":"jx;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$asu:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$isf:1,
$asf:function(){return[P.bU]},
$asy:function(){return[P.bU]},
"%":"SVGNumberList"},m_:{"^":"T;0q:x=,0t:y=","%":"SVGPatternElement"},m1:{"^":"n;0q:x=,0t:y=","%":"SVGPoint"},m2:{"^":"n;0k:length=","%":"SVGPointList"},m3:{"^":"n;0q:x=,0t:y=","%":"SVGRect"},m4:{"^":"fW;0q:x=,0t:y=","%":"SVGRectElement"},mb:{"^":"jM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$asu:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
$isf:1,
$asf:function(){return[P.q]},
$asy:function(){return[P.q]},
"%":"SVGStringList"},T:{"^":"a0;",
gcZ:function(a){return new P.fP(a,new W.iX(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mc:{"^":"bi;0q:x=,0t:y=","%":"SVGSVGElement"},i9:{"^":"bi;","%":"SVGTextPathElement;SVGTextContentElement"},me:{"^":"i9;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bX:{"^":"n;",$isbX:1,"%":"SVGTransform"},mk:{"^":"jW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$asu:function(){return[P.bX]},
$isd:1,
$asd:function(){return[P.bX]},
$isf:1,
$asf:function(){return[P.bX]},
$asy:function(){return[P.bX]},
"%":"SVGTransformList"},mn:{"^":"bi;0q:x=,0t:y=","%":"SVGUseElement"},jl:{"^":"n+u;"},jm:{"^":"jl+y;"},jw:{"^":"n+u;"},jx:{"^":"jw+y;"},jL:{"^":"n+u;"},jM:{"^":"jL+y;"},jV:{"^":"n+u;"},jW:{"^":"jV+y;"}}],["","",,P,{"^":"",kV:{"^":"n;0k:length=","%":"AudioBuffer"},kW:{"^":"iW;",
i:function(a,b){return P.aH(a.get(H.V(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.q,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gax:function(a){var z=H.e([],[P.q])
this.N(a,new P.fj(z))
return z},
gk:function(a){return a.size},
$asad:function(){return[P.q,null]},
$isa3:1,
$asa3:function(){return[P.q,null]},
"%":"AudioParamMap"},fj:{"^":"v:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},kX:{"^":"a2;0k:length=","%":"AudioTrackList"},fl:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lZ:{"^":"fl;0k:length=","%":"OfflineAudioContext"},iW:{"^":"n+ad;"}}],["","",,P,{"^":"",d0:{"^":"n;",
dF:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.J(g)
if(!!y.$iscf&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.kl(g))
return}if(!!y.$isdO&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.fh("Incorrect number or type of arguments"))},
hj:function(a,b,c,d,e,f,g){return this.dF(a,b,c,d,e,f,g,null,null,null)},
$isd0:1,
"%":"WebGLRenderingContext"},ia:{"^":"n;",$isia:1,"%":"WebGLTexture"},ix:{"^":"n;",$isix:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",m9:{"^":"jJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.O(b,a,null,null,null))
return P.aH(a.item(b))},
D:function(a,b){return this.i(a,b)},
$asu:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$isf:1,
$asf:function(){return[[P.a3,,,]]},
$asy:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},jI:{"^":"n+u;"},jJ:{"^":"jI+y;"}}],["","",,O,{"^":"",ai:{"^":"a;0a,0b,0c,0d,$ti",
bb:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
co:function(a,b,c){var z=H.aQ(this,"ai",0)
H.c(b,{func:1,ret:P.a8,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.M,[P.d,z]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
aB:function(a,b){return this.co(a,null,b)},
bd:function(a){var z
H.x(a,"$isd",[H.aQ(this,"ai",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cv:function(a,b){var z
H.x(b,"$isd",[H.aQ(this,"ai",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.am(z,z.length,0,[H.A(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aQ(this,"ai",0)
H.D(b,z)
z=[z]
if(this.bd(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cv(x,H.e([b],z))}},
bS:function(a,b){var z,y
H.x(b,"$isd",[H.aQ(this,"ai",0)],"$asd")
if(this.bd(b)){z=this.a
y=z.length
C.a.bS(z,b)
this.cv(y,b)}},
$isd:1,
p:{
c8:function(a){var z=new O.ai([a])
z.bb(a)
return z}}},cW:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
dY:function(a){var z=this.b
if(!(z==null))z.v(a)},
aC:function(){return this.dY(null)},
gL:function(a){var z=this.a
if(z.length>0)return C.a.gcb(z)
else return V.aK()},
bw:function(a){var z=this.a
if(a==null)C.a.h(z,V.aK())
else C.a.h(z,a)
this.aC()},
ay:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cz:{"^":"a;"},az:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scq:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gn()
y.toString
x=H.c(this.gdC(),{func:1,ret:-1,args:[D.l]})
C.a.O(y.a,x)}y=this.c
if(y!=null){y=y.gn()
y.toString
x=H.c(this.gdC(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.w("shape",z,this.c,this,[F.e5])
w.b=!0
this.ah(w)}},
sdz:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gn()
y.toString
x=H.c(this.gdB(),{func:1,ret:-1,args:[D.l]})
C.a.O(y.a,x)}if(a!=null){y=a.gn()
y.toString
x=H.c(this.gdB(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.w("mover",z,a,this,[U.a5])
w.b=!0
this.ah(w)}},
a2:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.w("matrix",x,y,this,[V.a4])
w.b=!0
this.ah(w)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.A(z,0)]);z.G();)z.d.a2(0,b)},
a0:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gL(z))
else C.a.h(z.a,y.l(0,z.gL(z)))
z.aC()
a.cj(this.f)
z=a.dy
x=(z&&C.a).gcb(z)
if(x!=null&&this.d!=null)x.b4(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.A(z,0)]);z.G();)z.d.a0(a)
a.ci()
a.dx.ay()},
gn:function(){var z=this.z
if(z==null){z=D.B()
this.z=z}return z},
ah:function(a){var z=this.z
if(!(z==null))z.v(a)},
a7:function(){return this.ah(null)},
h2:[function(a){H.h(a,"$isl")
this.e=null
this.ah(a)},function(){return this.h2(null)},"i7","$1","$0","gdC",0,2,0],
h1:[function(a){this.ah(H.h(a,"$isl"))},function(){return this.h1(null)},"i6","$1","$0","gdB",0,2,0],
h_:[function(a){this.ah(H.h(a,"$isl"))},function(){return this.h_(null)},"i4","$1","$0","gdA",0,2,0],
i3:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.az],"$asd")
for(z=b.length,y=this.gdA(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.aA()
t.a=H.e([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.a7()},"$2","gfZ",8,0,7],
i5:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.az],"$asd")
for(z=b.length,y=this.gdA(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.aA()
t.a=H.e([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.c(y,x)
C.a.O(t.a,y)}}this.a7()},"$2","gh0",8,0,7],
$isav:1,
p:{
cc:function(a,b,c,d,e,f){var z,y
z=new E.az()
z.a=d
z.b=!0
y=O.c8(E.az)
z.y=y
y.aB(z.gfZ(),z.gh0())
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
z.scq(0,e)
z.sdz(c)
return z}}},hO:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dW:function(a,b){var z,y,x,w,v
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
z=new O.cW()
y=[V.a4]
z.a=H.e([],y)
x=z.gn()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.c(new E.hQ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cW()
z.a=H.e([],y)
v=z.gn()
v.toString
x=H.c(new E.hR(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cW()
z.a=H.e([],y)
y=z.gn()
y.toString
w=H.c(new E.hS(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.aN])
this.dy=z
C.a.h(z,null)
this.fr=new H.cQ(0,0,[P.q,A.br])},
ghb:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gL(z)
y=this.db
y=z.l(0,y.gL(y))
this.z=y
z=y}return z},
gdD:function(){var z,y
z=this.ch
if(z==null){z=this.ghb()
y=this.dx
y=z.l(0,y.gL(y))
this.ch=y
z=y}return z},
gdI:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gL(z)
y=this.dx
y=z.l(0,y.gL(y))
this.cx=y
z=y}return z},
cj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcb(z):a;(z&&C.a).h(z,y)},
ci:function(){var z=this.dy
if(z.length>1)z.pop()},
aW:function(a){var z=a.b
if(z.length===0)throw H.j(P.o("May not cache a shader with no name."))
if(this.fr.fJ(0,z))throw H.j(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.ac(0,z,a)},
p:{
hP:function(a,b){var z=new E.hO(a,b)
z.dW(a,b)
return z}}},hQ:{"^":"v:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hR:{"^":"v:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hS:{"^":"v:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},ik:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gn:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
e_:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.he()},function(){return this.e_(null)},"dZ","$1","$0","gcw",0,2,0],
gfQ:function(){var z,y,x
z=Date.now()
y=C.f.a5(P.dJ(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
cQ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.r(z)
x=C.h.c9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.h.c9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
he:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.im(this),{func:1,ret:-1,args:[P.U]})
C.t.eh(z)
C.t.eW(z,W.eZ(y,P.U))}},
hd:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cQ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dJ(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aC()
w=x.db
C.a.sk(w.a,0)
w.aC()
w=x.dx
C.a.sk(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a0(this.e)}}catch(v){z=H.aT(v)
y=H.b7(v)
P.dn("Error: "+H.i(z))
P.dn("Stack: "+H.i(y))
throw H.j(z)}},
p:{
il:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscC)return E.ee(a,!0,!0,!0,!1)
y=W.cD(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcZ(a).h(0,y)
w=E.ee(y,!0,!0,!0,!1)
w.a=a
return w},
ee:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ik()
y=P.h9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.q,null)
x=C.k.bz(a,"webgl",y)
x=H.h(x==null?C.k.bz(a,"experimental-webgl",y):x,"$isd0")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hP(x,a)
w=new T.ie(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iC(a)
v=new X.h3()
v.c=new X.at(!1,!1,!1)
v.d=P.ha(null,null,null,P.M)
w.b=v
v=new X.hv(w)
v.f=0
v.r=new V.P(0,0)
v.x=new V.P(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.he(w)
v.r=0
v.x=new V.P(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ip(w)
v.e=0
v.f=new V.P(0,0)
v.r=new V.P(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.e8,P.a]])
w.z=v
u=document
t=W.au
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.c(w.gey(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.c(w.geD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.c(w.gev(),q),!1,r))
v=w.z
p=W.bk
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.c(w.geF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.c(w.geE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.c(w.geI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.c(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.c(w.geJ(),s),!1,t))
p=w.z
o=W.bE;(p&&C.a).h(p,W.X(a,H.V(W.fL(a)),H.c(w.geL(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.c(w.gez(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.c(w.geA(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.c(w.geM(),q),!1,r))
r=w.z
q=W.aZ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.c(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.c(w.geS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.c(w.geT(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.cQ()
return z}}},im:{"^":"v:30;a",
$1:function(a){var z
H.kD(a)
z=this.a
if(z.z){z.z=!1
z.hd()}}}}],["","",,Z,{"^":"",eD:{"^":"a;a,b",p:{
d8:function(a,b,c){var z
H.x(c,"$isf",[P.M],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b1(c)),35044)
a.bindBuffer(b,null)
return new Z.eD(b,z)}}},dv:{"^":"cz;a,b,c,d,e",
F:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aT(y)
x=P.o('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.i(z))
throw H.j(x)}},
j:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},bY:{"^":"a;a",$iskY:1},bb:{"^":"a;a,0b,c,d",
a9:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
F:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].F(a)},
a1:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a0:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.q]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.a_(y,", ")+"\nAttrs:   "+C.a.a_(u,", ")},
$ismd:1},cg:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aW(this.c)+"'")+"]"}},aO:{"^":"a;a",
gcr:function(a){var z,y
z=this.a
y=(z&$.$get$a_().a)!==0?3:0
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aq().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=4
if((z&$.$get$b_().a)!==0)++y
return(z&$.$get$aC().a)!==0?y+4:y},
fF:function(a){var z,y,x
z=$.$get$a_()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eC()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aO))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.q])
y=this.a
if((y&$.$get$a_().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aq().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.a_(z,"|")},
p:{
ak:function(a){return new Z.aO(a)}}}}],["","",,D,{"^":"",dy:{"^":"a;"},aA:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.fO(z))
return x!==0},
d2:function(){return this.v(null)},
hf:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
az:function(a){return this.hf(a,!0,!1)},
p:{
B:function(){var z=new D.aA()
z.a=H.e([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fO:{"^":"v:31;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bP:{"^":"l;c,d,a,0b,$ti"},bQ:{"^":"l;c,d,a,0b,$ti"},w:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dw:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.i(this.a)},
p:{"^":"kZ<"}},dT:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.i(this.a)}},dU:{"^":"l;c,a,0b"},h3:{"^":"a;0a,0b,0c,0d",
h8:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dU(a,this)
y.b=!0
return z.v(y)},
h4:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dU(a,this)
y.b=!0
return z.v(y)}},dW:{"^":"ci;x,y,c,d,e,a,0b"},he:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
as:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.P(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.bm(a,new V.P(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cg:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.as(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.as(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.as(a,b))
return!0},
h9:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cX(new V.R(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.v(w)
return!0},
eH:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.dW(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.P(0,0)}},at:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.at))return!1
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
return z+(this.c?"Shift+":"")}},bm:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},hv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bG:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaL()
x=new X.bm(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bG(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bG(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bG(a,b,!1))
return!0},
ha:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cX(new V.R(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.v(x)
return!0},
gd1:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
gby:function(){var z=this.c
if(z==null){z=D.B()
this.c=z}return z},
gdw:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z}},cX:{"^":"ci;x,c,d,e,a,0b"},ci:{"^":"l;"},eg:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},ip:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
as:function(a,b){var z,y,x,w
H.x(a,"$isf",[V.P],"$asf")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.P(0,0)
x=this.a.gaL()
w=new X.eg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h7:function(a){var z
H.x(a,"$isf",[V.P],"$asf")
z=this.b
if(z==null)return!1
z.v(this.as(a,!0))
return!0},
h5:function(a){var z
H.x(a,"$isf",[V.P],"$asf")
z=this.c
if(z==null)return!1
z.v(this.as(a,!0))
return!0},
h6:function(a){var z
H.x(a,"$isf",[V.P],"$asf")
z=this.d
if(z==null)return!1
z.v(this.as(a,!1))
return!0}},iC:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.aM(0,0,(z&&C.k).gbi(z).c,C.k.gbi(z).d)},
cI:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.at(y,a.altKey,a.shiftKey))},
aJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.at(y,a.altKey,a.shiftKey)},
bR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.at(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.P(y-w,x-v)},
aV:function(a){return new V.R(a.movementX,a.movementY)},
bN:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.P])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.h.Z(u.pageX)
C.h.Z(u.pageY)
s=z.left
C.h.Z(u.pageX)
C.a.h(y,new V.P(t-s,C.h.Z(u.pageY)-z.top))}return y},
aq:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.at(y,a.altKey,a.shiftKey))},
hG:[function(a){this.f=!0},"$1","geD",4,0,4],
hy:[function(a){this.f=!1},"$1","gev",4,0,4],
hB:[function(a){if(this.f)a.preventDefault()},"$1","gey",4,0,4],
hI:[function(a){var z
H.h(a,"$isbk")
if(!this.f)return
z=this.cI(a)
if(this.b.h8(z))a.preventDefault()},"$1","geF",4,0,14],
hH:[function(a){var z
H.h(a,"$isbk")
if(!this.f)return
z=this.cI(a)
if(this.b.h4(z))a.preventDefault()},"$1","geE",4,0,14],
hK:[function(a){var z,y,x,w
H.h(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aJ(a)
if(this.x){y=this.aq(a)
x=this.aV(a)
if(this.d.cg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aq(a)
w=this.at(a)
if(this.c.cg(y,w))a.preventDefault()},"$1","geI",4,0,5],
hM:[function(a){var z,y,x
H.h(a,"$isau")
this.aJ(a)
z=this.aq(a)
if(this.x){y=this.aV(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","geK",4,0,5],
hD:[function(a){var z,y,x,w
H.h(a,"$isau")
z=this.a
if(!(z&&C.k).gbi(z).d_(0,new P.bV(a.clientX,a.clientY,[P.U]))){this.aJ(a)
y=this.aq(a)
if(this.x){x=this.aV(a)
if(this.d.b2(y,x))a.preventDefault()
return}if(this.r)return
w=this.at(a)
if(this.c.b2(y,w))a.preventDefault()}},"$1","geA",4,0,5],
hL:[function(a){var z,y,x
H.h(a,"$isau")
this.aJ(a)
z=this.aq(a)
if(this.x){y=this.aV(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","geJ",4,0,5],
hC:[function(a){var z,y,x,w
H.h(a,"$isau")
z=this.a
if(!(z&&C.k).gbi(z).d_(0,new P.bV(a.clientX,a.clientY,[P.U]))){this.aJ(a)
y=this.aq(a)
if(this.x){x=this.aV(a)
if(this.d.b1(y,x))a.preventDefault()
return}if(this.r)return
w=this.at(a)
if(this.c.b1(y,w))a.preventDefault()}},"$1","gez",4,0,5],
hN:[function(a){var z,y
H.h(a,"$isbE")
this.aJ(a)
z=new V.R((a&&C.r).gfM(a),C.r.gfN(a)).A(0,180)
if(this.x){if(this.d.h9(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.ha(z,y))a.preventDefault()},"$1","geL",4,0,32],
hO:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aq(this.y)
v=this.at(this.y)
this.d.eH(w,v,x)}},"$1","geM",4,0,4],
hW:[function(a){var z
H.h(a,"$isaZ")
this.a.focus()
this.f=!0
this.bR(a)
z=this.bN(a)
if(this.e.h7(z))a.preventDefault()},"$1","geU",4,0,11],
hU:[function(a){var z
H.h(a,"$isaZ")
this.bR(a)
z=this.bN(a)
if(this.e.h5(z))a.preventDefault()},"$1","geS",4,0,11],
hV:[function(a){var z
H.h(a,"$isaZ")
this.bR(a)
z=this.bN(a)
if(this.e.h6(z))a.preventDefault()},"$1","geT",4,0,11]}}],["","",,D,{"^":"",cb:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z},
aD:[function(a){var z
H.h(a,"$isl")
z=this.d
if(!(z==null))z.v(a)},function(){return this.aD(null)},"ho","$1","$0","ge0",0,2,0],
$isW:1,
$isav:1,
p:{
dI:function(a,b){var z,y,x,w
z=new D.cb()
z.c=new V.S(1,1,1)
z.a=new V.G(0,0,1)
y=z.b
z.b=b
x=b.gn()
x.toString
w=H.c(z.ge0(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.w("mover",y,z.b,z,[U.a5])
x.b=!0
z.aD(x)
if(!z.c.u(0,a)){y=z.c
z.c=a
x=new D.w("color",y,a,z,[V.S])
x.b=!0
z.aD(x)}return z}}},W:{"^":"a;",$isav:1},h4:{"^":"ai;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.B()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eG:[function(a){var z
H.h(a,"$isl")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eG(null)},"hJ","$1","$0","gcN",0,2,0],
hP:[function(a){var z,y,x
H.x(a,"$isd",[D.W],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.ec(x))return!1}return!0},"$1","geN",4,0,34],
hv:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isW")
if(t instanceof D.cb)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aA()
s.a=H.e([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.h(s.a,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","ger",8,0,16],
hR:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isW")
if(t instanceof D.cb)C.a.O(this.e,t)
s=t.d
if(s==null){s=new D.aA()
s.a=H.e([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.O(s.a,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","geP",8,0,16],
ec:function(a){var z=C.a.av(this.e,a)
return z},
$asd:function(){return[D.W]},
$asai:function(){return[D.W]}},hE:{"^":"a;",$isW:1,$isav:1},i3:{"^":"a;",$isW:1,$isav:1},ih:{"^":"a;",$isW:1,$isav:1},ii:{"^":"a;",$isW:1,$isav:1},ij:{"^":"a;",$isW:1,$isav:1}}],["","",,V,{"^":"",
l0:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hq",8,0,33],
kQ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.dO(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.i.af("null",c)
return C.i.af(C.h.dH($.m.$2(a,0)?0:a,b),c+b+1)},
b6:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isf",[P.t],"$asf")
z=H.e([],[P.q])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.ac(z,u,C.i.af(z[u],x))}return z},
bM:function(a,b){return C.h.hl(Math.pow(b,C.x.c9(Math.log(H.ki(a))/Math.log(b))))},
S:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
an:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
cV:{"^":"a;a,b,c,d,e,f,r,x,y",
V:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cV))return!1
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
z=[P.t]
y=V.b6(H.e([this.a,this.d,this.r],z),3,0)
x=V.b6(H.e([this.b,this.e,this.x],z),3,0)
w=V.b6(H.e([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
a4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
V:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
ca:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.r(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.r(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.r(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.r(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.r(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.r(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.r(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.r(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.aK()
a3=1/a2
a4=-w
a5=-i
return V.as((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.r(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.r(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.r(s)
r=a7.b
if(typeof r!=="number")return H.r(r)
q=a7.f
if(typeof q!=="number")return H.r(q)
p=a7.z
if(typeof p!=="number")return H.r(p)
o=a7.cy
if(typeof o!=="number")return H.r(o)
n=a7.c
if(typeof n!=="number")return H.r(n)
m=a7.r
if(typeof m!=="number")return H.r(m)
l=a7.Q
if(typeof l!=="number")return H.r(l)
k=a7.db
if(typeof k!=="number")return H.r(k)
j=a7.d
if(typeof j!=="number")return H.r(j)
i=a7.x
if(typeof i!=="number")return H.r(i)
h=a7.ch
if(typeof h!=="number")return H.r(h)
g=a7.dx
if(typeof g!=="number")return H.r(g)
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
return V.as(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.r(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.r(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.r(l)
return new V.ae(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
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
j:function(a){return this.H()},
dq:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b6(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b6(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b6(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b6(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
B:function(a){return this.dq(a,3,0)},
H:function(){return this.dq("",3,0)},
p:{
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aK:function(){return V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
hs:function(a,b,c){return V.as(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hr:function(a,b,c,d){return V.as(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
e_:function(a,b,c,d){return V.dZ(new V.ae(0,0,0),new V.G(0,1,0),new V.G(a,b,c))},
dZ:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.C(c)))
y=b.aZ(z)
x=y.A(0,Math.sqrt(y.C(y)))
w=z.aZ(x)
v=new V.G(a.a,a.b,a.c)
return V.as(x.a,w.a,z.a,x.J(0).C(v),x.b,w.b,z.b,w.J(0).C(v),x.c,w.c,z.c,z.J(0).C(v),0,0,0,1)}}},
P:{"^":"a;q:a>,t:b>",
I:function(a,b){return new V.P(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ae:{"^":"a;q:a>,t:b>,c",
I:function(a,b){return new V.ae(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bo:{"^":"a;q:a>,t:b>,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
cj:{"^":"a;q:a>,t:b>,c,d",
gab:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cj))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
p:{
aM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cj(a,b,c,d)}}},
R:{"^":"a;a,b",
fT:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,17],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.r(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.R(z*b,y*b)},
A:function(a,b){var z,y
if($.m.$2(b,0))return new V.R(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.R(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
fT:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,17],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cc:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aZ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.G(-this.a,-this.b,-this.c)},
A:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
ds:function(){if(!$.m.$2(0,this.a))return!1
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
j:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ft:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bB:function(a){var z=V.kQ(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.B()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.v(a)},
scm:function(a,b){},
scd:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bB(z)}z=new D.w("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.M(z)}},
scf:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bB(z)}z=new D.w("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.M(z)}},
saa:function(a,b){var z,y
b=this.bB(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.w("location",y,b,this,[P.t])
z.b=!0
this.M(z)}},
sce:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.w("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.M(z)}},
sP:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.w("velocity",x,a,this,[P.t])
z.b=!0
this.M(z)}},
sc0:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.w("dampening",y,a,this,[P.t])
z.b=!0
this.M(z)}},
a2:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.saa(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sP(y)}},
p:{
cE:function(){var z=new U.ft()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cF:{"^":"a5;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
sL:function(a,b){var z,y,x
if(!J.N(this.a,b)){z=this.a
this.a=b
y=new D.w("matrix",z,b,this,[V.a4])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aS:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
return J.N(this.a,b.a)},
j:function(a){return"Constant: "+this.a.B("          ")},
p:{
cG:function(a){var z=new U.cF()
z.sL(0,a)
return z}}},dN:{"^":"ai;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
M:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.M(null)},"ag","$1","$0","gaH",0,2,0],
hu:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaH(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.M(z)},"$2","geq",8,0,18],
hQ:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaH(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.c(x,w)
C.a.O(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.M(z)},"$2","geO",8,0,18],
aS:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ai()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.A(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aS(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aK():x
z=this.e
if(!(z==null))z.az(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dN))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.N(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asd:function(){return[U.a5]},
$asai:function(){return[U.a5]},
$isa5:1},a5:{"^":"dy;"},iD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.B()
this.cy=z}return z},
M:[function(a){var z
H.h(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.M(null)},"ag","$1","$0","gaH",0,2,0],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd1()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdw()
x.toString
z=H.c(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gby()
z.toString
y=H.c(this.gbK(),y)
C.a.h(z.a,y)
return!0},
em:[function(a){H.h(a,"$isl")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbI",4,0,1],
en:[function(a){var z,y,x,w,v,u,t
a=H.b(H.h(a,"$isl"),"$isbm")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.R(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.R(y.a,y.b).l(0,2).A(0,z.gab())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.r(x)
y.sP(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.R(x.a,x.b).l(0,2).A(0,z.gab())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.r(u)
t=this.z
if(typeof t!=="number")return H.r(t)
x.saa(0,-v*u+t)
this.b.sP(0)
y=y.I(0,a.z)
this.Q=new V.R(y.a,y.b).l(0,2).A(0,z.gab())}this.ag()},"$1","gbJ",4,0,1],
eo:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.r(x)
z.sP(y*10*x)
this.ag()}},"$1","gbK",4,0,1],
aS:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ai()
if(z<y){this.ch=y
x=b.y
this.b.a2(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.as(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa5:1},iE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.B()
this.fx=z}return z},
M:[function(a){var z
H.h(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.M(null)},"ag","$1","$0","gaH",0,2,0],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd1()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdw()
x.toString
z=H.c(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gby()
z.toString
x=H.c(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.B()
x.f=z}x=H.c(this.gej(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.c(this.gek(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.B()
x.b=z}x=H.c(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.c(this.gfa(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.B()
x.c=z}y=H.c(this.gf9(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.R(z,y)},
em:[function(a){a=H.b(H.h(a,"$isl"),"$isbm")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbI",4,0,1],
en:[function(a){var z,y,x,w,v,u,t
a=H.b(H.h(a,"$isl"),"$isbm")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.R(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.aj(new V.R(y.a,y.b).l(0,2).A(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.aj(new V.R(x.a,x.b).l(0,2).A(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.saa(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.I(0,a.z)
this.dx=this.aj(new V.R(y.a,y.b).l(0,2).A(0,z.gab()))}this.ag()},"$1","gbJ",4,0,1],
eo:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sP(-y*10*z)
this.ag()}},"$1","gbK",4,0,1],
hr:[function(a){if(H.b(H.h(a,"$isl"),"$isdW").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gej",4,0,1],
hs:[function(a){var z,y,x,w,v,u,t
a=H.b(H.h(a,"$isl"),"$isbm")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.aj(new V.R(x.a,x.b).l(0,2).A(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.saa(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.I(0,a.z)
this.dx=this.aj(new V.R(y.a,y.b).l(0,2).A(0,z.gab()))
this.ag()},"$1","gek",4,0,1],
i_:[function(a){H.h(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfb",4,0,1],
hZ:[function(a){var z,y,x,w,v,u,t
a=H.b(H.h(a,"$isl"),"$iseg")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.R(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.aj(new V.R(y.a,y.b).l(0,2).A(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.aj(new V.R(x.a,x.b).l(0,2).A(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.saa(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.I(0,a.z)
this.dx=this.aj(new V.R(y.a,y.b).l(0,2).A(0,z.gab()))}this.ag()},"$1","gfa",4,0,1],
hY:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sP(-y*10*z)
this.ag()}},"$1","gf9",4,0,1],
aS:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ai()
if(z<y){this.dy=y
x=b.y
this.c.a2(0,x)
this.b.a2(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.as(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.as(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa5:1},iF:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.v(a)},
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.B()
z.e=y
z=y}else z=y
y=H.c(this.gep(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.B()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ht:[function(a){var z,y,x,w
H.h(a,"$isl")
if(!J.N(this.b,this.a.b.c))return
H.b(a,"$iscX")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.w("zoom",z,w,this,[P.t])
z.b=!0
this.M(z)}},"$1","gep",4,0,1],
aS:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hr(x,x,x,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",fu:{"^":"ai;0e,0f,0a,0b,0c,0d",
gn:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
W:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.W(null)},"cz","$1","$0","gS",0,2,0],
hS:[function(a,b){var z,y,x,w,v,u,t
z=M.aw
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.W(z)},"$2","geQ",8,0,19],
hT:[function(a,b){var z,y,x,w,v,u,t
z=M.aw
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.c(x,w)
C.a.O(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.W(z)},"$2","geR",8,0,19],
a0:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.A(z,0)]);z.G();){y=z.d
if(!(y==null))y.a0(a)}this.e=!1},
$asd:function(){return[M.aw]},
$asai:function(){return[M.aw]},
$isaw:1},fw:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
W:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.W(null)},"cz","$1","$0","gS",0,2,0],
saK:function(a){var z,y,x
if(a==null)a=new X.fX()
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.w("camera",x,this.a,this,[X.c7])
z.b=!0
this.W(z)}},
saA:function(a,b){var z,y,x
if(b==null)b=X.cJ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.w("target",x,this.b,this,[X.ck])
z.b=!0
this.W(z)}},
sam:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.w("technique",x,this.c,this,[O.aN])
z.b=!0
this.W(z)}},
a0:function(a){var z
a.cj(this.c)
this.b.F(a)
this.a.F(a)
z=this.c
if(z!=null)z.a2(0,a)
this.d.a2(0,a)
this.d.a0(a)
this.a.a1(a)
this.b.a1(a)
a.ci()},
$isaw:1,
p:{
cH:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fw()
z.saK(a)
z.saA(0,b)
z.sam(c)
y=E.cc(null,!0,null,"",null,null)
x=F.d2()
w=x.a
v=new V.G(-1,-1,1)
v=v.A(0,Math.sqrt(v.C(v)))
u=w.bg(new V.bo(1,2,4,6),new V.an(1,0,0,1),new V.ae(-1,-1,0),new V.P(0,1),v,null)
w=x.a
v=new V.G(1,-1,1)
v=v.A(0,Math.sqrt(v.C(v)))
t=w.bg(new V.bo(0,3,4,6),new V.an(0,0,1,1),new V.ae(1,-1,0),new V.P(1,1),v,null)
w=x.a
v=new V.G(1,1,1)
v=v.A(0,Math.sqrt(v.C(v)))
s=w.bg(new V.bo(0,2,5,6),new V.an(0,1,0,1),new V.ae(1,1,0),new V.P(1,0),v,null)
w=x.a
v=new V.G(-1,1,1)
v=v.A(0,Math.sqrt(v.C(v)))
r=w.bg(new V.bo(0,2,4,7),new V.an(1,1,0,1),new V.ae(-1,1,0),new V.P(0,0),v,null)
x.d.fC(H.e([u,t,s,r],[F.aB]))
x.au()
y.scq(0,x)
z.d=y
z.e=null
return z}}},fM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
W:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.W(null)},"cz","$1","$0","gS",0,2,0],
hz:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.aA()
s.a=H.e([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gew",8,0,7],
hA:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.aA()
s.a=H.e([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.c(x,w)
C.a.O(s.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gex",8,0,7],
saK:function(a){var z,y,x
if(a==null)a=X.e2(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.w("camera",x,this.a,this,[X.c7])
z.b=!0
this.W(z)}},
saA:function(a,b){var z,y,x
if(b==null)b=X.cJ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.w("target",x,this.b,this,[X.ck])
z.b=!0
this.W(z)}},
sam:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.w("technique",x,this.c,this,[O.aN])
z.b=!0
this.W(z)}},
gn:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
a0:function(a){var z
a.cj(this.c)
this.b.F(a)
this.a.F(a)
z=this.c
if(z!=null)z.a2(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.A(z,0)]);z.G();)z.d.a2(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.A(z,0)]);z.G();)z.d.a0(a)
this.a.toString
a.cy.ay()
a.db.ay()
this.b.a1(a)
a.ci()},
$isaw:1,
p:{
dK:function(a,b,c,d){var z,y
z=new M.fM()
y=O.c8(E.az)
z.d=y
y.aB(z.gew(),z.gex())
z.e=null
z.f=null
z.r=null
z.x=null
z.saK(a)
z.saA(0,c)
z.sam(d)
return z}}},aw:{"^":"a;"}}],["","",,A,{"^":"",dr:{"^":"a;a,b,c"},fi:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fO:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
b_:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dC:{"^":"br;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dM:{"^":"br;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r",
a6:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dQ(c)
b.a.uniform1i(b.d,0)}}},dY:{"^":"br;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aP,0aw,0aQ,0bj,0d3,0d4,0bk,0bl,0d5,0d6,0bm,0bn,0d7,0d8,0bo,0d9,0da,0bp,0dc,0dd,0bq,0br,0bs,0de,0df,0bt,0bu,0dg,0dh,0bv,0di,0c3,0dj,0c4,0dk,0c5,0dl,0c6,0dm,0c7,0dn,0c8,a,b,0c,0d,0e,0f,0r",
dV:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bW("")
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
a1.fe(z)
a1.fl(z)
a1.ff(z)
a1.fu(z)
a1.fv(z)
a1.fn(z)
a1.fB(z)
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
z=new P.bW("")
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
v.fi(z)
v.fd(z)
v.fg(z)
v.fj(z)
v.fs(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fp(z)
v.fq(z)}v.fm(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.c){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.e([],[P.q])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.a_(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fh(z)
v.fo(z)
v.ft(z)
v.fw(z)
v.fz(z)
v.fA(z)
v.fk(z)}r=z.a+="// === Main ===\n"
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
o=H.e([],[P.q])
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
n="vec4("+C.a.a_(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.b0(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.b(this.r.m(0,"invViewMat"),"$isa7")
if(y)this.db=H.b(this.r.m(0,"objMat"),"$isa7")
if(w)this.dx=H.b(this.r.m(0,"viewObjMat"),"$isa7")
this.fr=H.b(this.r.m(0,"projViewObjMat"),"$isa7")
if(a1.x2)this.go=H.b(this.r.m(0,"txt2DMat"),"$iscn")
if(a1.y1)this.id=H.b(this.r.m(0,"txtCubeMat"),"$isa7")
if(a1.y2)this.k1=H.b(this.r.m(0,"colorMat"),"$isa7")
this.k3=H.e([],[A.a7])
y=a1.aP
if(y>0){this.k2=H.h(this.r.m(0,"bendMatCount"),"$isE")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isa7"))}}y=a1.a
if(y!==C.b){this.k4=H.b(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.b(this.r.m(0,"emissionTxt"),"$isa1")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.c:this.r2=H.b(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a1.b
if(y!==C.b){this.ry=H.b(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.b(this.r.m(0,"ambientTxt"),"$isa1")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.c:this.x2=H.b(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a1.c
if(y!==C.b){this.y2=H.b(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.aP=H.b(this.r.m(0,"diffuseTxt"),"$isa1")
this.aQ=H.b(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.c:this.aw=H.b(this.r.m(0,"diffuseTxt"),"$isaf")
this.aQ=H.b(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a1.d
if(y!==C.b){this.bj=H.b(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.d3=H.b(this.r.m(0,"invDiffuseTxt"),"$isa1")
this.bk=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.c:this.d4=H.b(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.bk=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a1.e
if(y!==C.b){this.bn=H.b(this.r.m(0,"shininess"),"$isI")
this.bl=H.b(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.d5=H.b(this.r.m(0,"specularTxt"),"$isa1")
this.bm=H.b(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.c:this.d6=H.b(this.r.m(0,"specularTxt"),"$isaf")
this.bm=H.b(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.d7=H.b(this.r.m(0,"bumpTxt"),"$isa1")
this.bo=H.b(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.c:this.d8=H.b(this.r.m(0,"bumpTxt"),"$isaf")
this.bo=H.b(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a1.dy){this.d9=H.b(this.r.m(0,"envSampler"),"$isaf")
this.da=H.b(this.r.m(0,"nullEnvTxt"),"$isE")
y=a1.r
if(y!==C.b){this.bp=H.b(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dc=H.b(this.r.m(0,"reflectTxt"),"$isa1")
this.bq=H.b(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.c:this.dd=H.b(this.r.m(0,"reflectTxt"),"$isaf")
this.bq=H.b(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a1.x
if(y!==C.b){this.br=H.b(this.r.m(0,"refraction"),"$isI")
this.bs=H.b(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.de=H.b(this.r.m(0,"refractTxt"),"$isa1")
this.bt=H.b(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.c:this.df=H.b(this.r.m(0,"refractTxt"),"$isaf")
this.bt=H.b(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a1.y
if(y!==C.b){this.bu=H.b(this.r.m(0,"alpha"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.d:this.dg=H.b(this.r.m(0,"alphaTxt"),"$isa1")
this.bv=H.b(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.c:this.dh=H.b(this.r.m(0,"alphaTxt"),"$isaf")
this.bv=H.b(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.c3=H.e([],[A.et])
this.c4=H.e([],[A.eu])
this.c5=H.e([],[A.ev])
this.c6=H.e([],[A.ew])
this.c7=H.e([],[A.ex])
this.c8=H.e([],[A.ey])
if(a1.k2){y=a1.z
if(y>0){this.di=H.h(this.r.m(0,"dirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isF")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isF")
x=this.c3;(x&&C.a).h(x,new A.et(m,l,k))}}y=a1.Q
if(y>0){this.dj=H.h(this.r.m(0,"pntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isF")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isF")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isF")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isI")
x=this.c4;(x&&C.a).h(x,new A.eu(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dk=H.h(this.r.m(0,"spotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isF")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isF")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isF")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isF")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isI")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isI")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isI")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isI")
x=this.c5;(x&&C.a).h(x,new A.ev(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dl=H.h(this.r.m(0,"txtDirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isF")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isF")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isF")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isF")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isF")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isE")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa1")
x=this.c6;(x&&C.a).h(x,new A.ew(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dm=H.h(this.r.m(0,"txtPntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isF")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isF")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$iscn")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isF")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isE")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isI")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isI")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isI")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isaf")
x=this.c7;(x&&C.a).h(x,new A.ex(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dn=H.h(this.r.m(0,"txtSpotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isF")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isF")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isF")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isF")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isF")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isE")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isF")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isI")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isI")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isI")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isI")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isI")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa1")
x=this.c8;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
ad:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cp(c)
b.a.uniform1i(b.d,0)}},
p:{
hk:function(a,b){var z,y
z=a.aw
y=new A.dY(b,z)
y.aT(b,z)
y.dV(a,b)
return y}}},hn:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aP,aw,aQ",
fe:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aP+"];\n"
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
fl:function(a){var z
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
ff:function(a){var z
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
fu:function(a){var z,y
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
fv:function(a){var z,y
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
fn:function(a){var z
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
fB:function(a){var z
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
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cs(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fi:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ar(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fd:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ar(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fg:function(a){var z,y
z=this.c
if(z===C.b)return
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fj:function(a){var z,y
z=this.d
if(z===C.b)return
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fs:function(a){var z,y
z=this.e
if(z===C.b)return
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fm:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.c:z+="uniform samplerCube bumpTxt;\n"
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
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fp:function(a){var z,y
z=this.r
if(z===C.b)return
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fq:function(a){var z,y
z=this.x
if(z===C.b)return
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
switch(z){case C.b:z=y
break
case C.e:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fh:function(a){var z,y
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
fo:function(a){var z,y
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
ft:function(a){var z,y
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
fw:function(a){var z,y,x
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
fz:function(a){var z,y,x
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
fA:function(a){var z,y,x
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
fk:function(a){var z
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
j:function(a){return this.aw}},et:{"^":"a;a,b,c"},ew:{"^":"a;a,b,c,d,e,f,r,x"},eu:{"^":"a;a,b,c,d,e,f,r"},ex:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ev:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},br:{"^":"cz;",
aT:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b0:function(a,b,c){var z,y,x
this.c=this.cJ(b,35633)
this.d=this.cJ(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f2(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.i(x)))}this.f5()
this.f6()},
F:function(a){a.a.useProgram(this.e)
this.f.fO()},
cJ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f2(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.o("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
f5:function(){var z,y,x,w,v,u
z=H.e([],[A.dr])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dr(y,v.name,u))}this.f=new A.fi(z)},
f6:function(){var z,y,x,w,v,u
z=H.e([],[A.a6])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fL(v.type,v.size,v.name,u))}this.r=new A.iw(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.d6(z,y,b,a,c)},
ee:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a1(z,y,b,c)
else return A.d6(z,y,b,a,c)},
ef:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.d6(z,y,b,a,c)},
bf:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fL:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.I(this.a,this.e,c,d)
case 35664:return new A.bB(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.es(this.a,this.e,c,d)
case 35667:return new A.it(this.a,this.e,c,d)
case 35668:return new A.iu(this.a,this.e,c,d)
case 35669:return new A.iv(this.a,this.e,c,d)
case 35674:return new A.iy(this.a,this.e,c,d)
case 35675:return new A.cn(this.a,this.e,c,d)
case 35676:return new A.a7(this.a,this.e,c,d)
case 35678:return this.ee(b,c,d)
case 35680:return this.ef(b,c,d)
case 35670:throw H.j(this.bf("BOOL",c))
case 35671:throw H.j(this.bf("BOOL_VEC2",c))
case 35672:throw H.j(this.bf("BOOL_VEC3",c))
case 35673:throw H.j(this.bf("BOOL_VEC4",c))
default:throw H.j(P.o("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c9:{"^":"a;a,b",
j:function(a){return this.b}},e6:{"^":"br;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ec:{"^":"br;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
dX:function(a,b){var z,y,x,w,v
this.b0(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.id(a))
this.x=this.f.i(0,"posAttr")
this.y=H.b(this.r.m(0,"txtCount"),"$isE")
this.z=H.b(this.r.m(0,"backClr"),"$ises")
this.Q=H.e([],[A.a1])
this.ch=H.e([],[A.a7])
z=[A.bB]
this.cx=H.e([],z)
this.cy=H.e([],z)
this.db=H.e([],z)
this.dx=H.e([],z)
this.dy=H.e([],[A.E])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa1"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa7"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbB"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbB"))
z=this.db
x=this.r
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbB"))
z=this.dx
x=this.r
w="destSize"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbB"))
z=this.dy
x=this.r
w="flip"+y
v=x.i(0,w)
if(v==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isE"))}},
p:{
id:function(a){var z,y
for(z=0,y="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";z<a;++z)y=y+("uniform sampler2D txt"+z+";\n")+("uniform mat4 clrMat"+z+";\n")+("uniform vec2 srcLoc"+z+";\n")+("uniform vec2 srcSize"+z+";\n")+("uniform vec2 destLoc"+z+";\n")+("uniform vec2 destSize"+z+";\n")+("uniform int flip"+z+";\n")
y+"\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
y+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(z=0;z<a;++z)y=y+("   if(txtCount <= "+z+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+z+", clrMat"+z+", srcLoc"+z+", srcSize"+z+", destLoc"+z+", destSize"+z+", flip"+z+");\n")
y+"   return clrAccum;\n"
y+"   return clrAccum;\n}\n"
y+"   return clrAccum;\n}\n\n"
y+"   return clrAccum;\n}\n\nvoid main()\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
y+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return y.charCodeAt(0)==0?y:y},
ic:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.ec(b,z)
y.aT(b,z)
y.dX(a,b)
return y}}},a6:{"^":"a;"},iw:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.i(0,b)
if(z==null)throw H.j(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.H()},
fP:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].j(0)+a
return x},
H:function(){return this.fP("\n")}},E:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1i: "+H.i(this.c)}},it:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform2i: "+H.i(this.c)}},iu:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform3i: "+H.i(this.c)}},iv:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform4i: "+H.i(this.c)}},is:{"^":"a6;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.i(this.c)},
p:{
d6:function(a,b,c,d,e){var z=new A.is(a,b,c,e)
z.f=d
z.e=P.hc(d,0,!1,P.M)
return z}}},I:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1f: "+H.i(this.c)}},bB:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform2f: "+H.i(this.c)}},F:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform3f: "+H.i(this.c)}},es:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform4f: "+H.i(this.c)}},iy:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cn:{"^":"a6;a,b,c,d",
a3:function(a){var z=new Float32Array(H.b1(H.x(a,"$isf",[P.t],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.i(this.c)}},a7:{"^":"a6;a,b,c,d",
a3:function(a){var z=new Float32Array(H.b1(H.x(a,"$isf",[P.t],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.i(this.c)}},a1:{"^":"a6;a,b,c,d",
dQ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.i(this.c)}},af:{"^":"a6;a,b,c,d",
cp:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
cq:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bH:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.cq(y)
k=F.cq(z.b)
j=F.kN(d,e,new F.k7(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.fY(j)},
kN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.aB,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.d2()
y=H.e([],[F.aB])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.co(null,null,new V.an(u,0,0,1),null,null,new V.P(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c_(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.co(null,null,new V.an(o,n,m,1),null,null,new V.P(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c_(d))}}z.d.fD(a+1,b+1,y)
return z},
k7:{"^":"v:36;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cc(z.b,b).cc(z.d.cc(z.c,b),c)
z=new V.ae(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a7()}a.sb7(y.A(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.bo(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a7()}}},
aj:{"^":"a;0a,0b,0c,0d,0e",
gc2:function(){return this.a==null||this.b==null||this.c==null},
e7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.ds())return
return v.A(0,Math.sqrt(v.C(v)))},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.C(z)))
z=w.I(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aZ(z.A(0,Math.sqrt(z.C(z))))
return z.A(0,Math.sqrt(z.C(z)))},
bZ:function(){if(this.d!=null)return!0
var z=this.e7()
if(z==null){z=this.e9()
if(z==null)return!1}this.d=z
this.a.a.a7()
return!0},
e6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.ds())return
return v.A(0,Math.sqrt(v.C(v)))},
e8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.I(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.ae(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.C(z)))
z=k.aZ(m)
z=z.A(0,Math.sqrt(z.C(z))).aZ(k)
m=z.A(0,Math.sqrt(z.C(z)))}return m},
bX:function(){if(this.e!=null)return!0
var z=this.e6()
if(z==null){z=this.e8()
if(z==null)return!1}this.e=z
this.a.a.a7()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
B:function(a){var z,y
if(this.gc2())return a+"disposed"
z=a+C.i.af(J.a9(this.a.e),0)+", "+C.i.af(J.a9(this.b.e),0)+", "+C.i.af(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
H:function(){return this.B("")},
p:{
be:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a7()
return z}}},
cS:{"^":"a;0a,0b",
gc2:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
B:function(a){if(this.gc2())return a+"disposed"
return a+C.i.af(J.a9(this.a.e),0)+", "+C.i.af(J.a9(this.b.e),0)},
H:function(){return this.B("")}},
cZ:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.af(J.a9(z.e),0)},
H:function(){return this.B("")}},
e5:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
fY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.X()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.fK())}this.a.X()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cZ()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.X()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cS()
s=p.a
if(s==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.X()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.be(p,o,l)}z=this.e
if(!(z==null))z.az(0)},
au:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.au()||!1
if(!this.a.au())y=!1
z=this.e
if(!(z==null))z.az(0)
return y},
aY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a_()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aq().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
v=b.gcr(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dv])
for(r=0,q=0;q<w;++q){p=b.fF(q)
o=p.gcr(p)
C.a.ac(s,q,new Z.dv(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fU(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.ac(t,l,m[k]);++l}}r+=o}H.x(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b1(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bb(new Z.eD(34962,j),s,b)
i.b=H.e([],[Z.cg])
if(this.b.b.length!==0){x=P.M
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cg(0,h.length,f))}if(this.c.b.length!==0){x=P.M
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.X()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cg(1,h.length,f))}if(this.d.b.length!==0){x=P.M
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.X()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.X()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cg(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.q])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.a_(z,"\n")},
ah:function(a){var z=this.e
if(!(z==null))z.v(a)},
a7:function(){return this.ah(null)},
p:{
d2:function(){var z,y
z=new F.e5()
y=new F.iG(z)
y.b=!1
y.c=H.e([],[F.aB])
z.a=y
y=new F.i_(z)
y.b=H.e([],[F.cZ])
z.b=y
y=new F.hZ(z)
y.b=H.e([],[F.cS])
z.c=y
y=new F.hY(z)
y.b=H.e([],[F.aj])
z.d=y
z.e=null
return z}}},
hY:{"^":"a;a,0b",
fC:function(a){var z,y,x,w,v
H.x(a,"$isf",[F.aB],"$asf")
z=H.e([],[F.aj])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.be(y,w,v))}return z},
fD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isf",[F.aB],"$asf")
z=H.e([],[F.aj])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.k(c,x)
r=c[x];++x
if(x>=s)return H.k(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.k(c,p)
o=c[p]
if(y<0||y>=s)return H.k(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.be(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.be(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.be(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.be(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
au:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bZ())x=!1
return x},
bY:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bX())x=!1
return x},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a_(z,"\n")},
H:function(){return this.B("")}},
hZ:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.a_(z,"\n")},
H:function(){return this.B("")}},
i_:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a_(z,"\n")},
H:function(){return this.B("")}},
aB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c_:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.co(this.cx,x,u,z,y,w,v,a,t)},
fK:function(){return this.c_(null)},
sb7:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a7()}},
fU:function(a){var z,y
z=J.J(a)
if(z.u(a,$.$get$a_())){z=this.f
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aE())){z=this.r
y=[P.t]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aD())){z=this.x
y=[P.t]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aq())){z=this.y
y=[P.t]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aF())){z=this.z
y=[P.t]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bD())){z=this.Q
y=[P.t]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b_()))return H.e([this.ch],[P.t])
else if(z.u(a,$.$get$aC())){z=this.cx
y=[P.t]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.t])},
bZ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.N(0,new F.iN(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a7()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
bX:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.N(0,new F.iM(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a7()
z=this.a.e
if(!(z==null))z.az(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
B:function(a){var z,y,x
z=H.e([],[P.q])
C.a.h(z,C.i.af(J.a9(this.e),0))
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
C.a.h(z,V.L(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.a_(z,", ")
return a+"{"+x+"}"},
H:function(){return this.B("")},
p:{
co:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aB()
y=new F.iL(z)
y.b=H.e([],[F.cZ])
z.b=y
y=new F.iK(z)
x=[F.cS]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.iH(z)
x=[F.aj]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$eA()
z.e=0
y=$.$get$a_()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aE().a)!==0?e:null
z.x=(x&$.$get$aD().a)!==0?b:null
z.y=(x&$.$get$aq().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$eB().a)!==0?c:null
z.ch=(x&$.$get$b_().a)!==0?i:0
z.cx=(x&$.$get$aC().a)!==0?a:null
return z}}},
iN:{"^":"v:6;a",
$1:function(a){var z,y
H.h(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iM:{"^":"v:6;a",
$1:function(a){var z,y
H.h(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iG:{"^":"a;a,0b,0c",
X:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a7()
return!0},
fE:function(a,b,c,d,e,f,g,h,i){var z=F.co(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bg:function(a,b,c,d,e,f){return this.fE(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
au:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bZ()
return!0},
bY:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bX()
return!0},
fH:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
this.X()
z=H.e([],[P.q])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a_(z,"\n")},
H:function(){return this.B("")}},
iH:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.c(b,{func:1,ret:-1,args:[F.aj]})
C.a.N(this.b,b)
C.a.N(this.c,new F.iI(this,b))
C.a.N(this.d,new F.iJ(this,b))},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a_(z,"\n")},
H:function(){return this.B("")}},
iI:{"^":"v:6;a,b",
$1:function(a){H.h(a,"$isaj")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iJ:{"^":"v:6;a,b",
$1:function(a){var z
H.h(a,"$isaj")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iK:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a_(z,"\n")},
H:function(){return this.B("")}},
iL:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.H()},
B:function(a){var z,y,x,w
z=H.e([],[P.q])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].B(a))
return C.a.a_(z,"\n")},
H:function(){return this.B("")}}}],["","",,O,{"^":"",fC:{"^":"aN;0a,0b,0c,0d,0e,0a8:f@",
gn:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
w:function(a){var z=this.f
if(!(z==null))z.v(a)},
a2:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.h(a.fr.i(0,"Depth"),"$isdC")
if(y==null){z=a.a
y=new A.dC(z,"Depth")
y.aT(z,"Depth")
y.b0(0,$.fE,$.fD)
y.x=y.f.i(0,"posAttr")
y.y=H.b(y.r.i(0,"objClr"),"$isF")
y.z=H.b(y.r.i(0,"fogClr"),"$isF")
y.Q=H.b(y.r.i(0,"fogStart"),"$isI")
y.ch=H.b(y.r.i(0,"fogStop"),"$isI")
y.cx=H.b(y.r.i(0,"viewObjMat"),"$isa7")
y.cy=H.b(y.r.i(0,"projMat"),"$isa7")
a.aW(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bb)){b.e=null
x=null}if(x==null){z=b.d.aY(new Z.bY(a.a),$.$get$a_())
x=z.a9($.$get$a_())
w=this.a
x.e=w.x.c
b.e=z
z=w}z.F(a)
x=this.b
w=z.y
w.toString
v=x.a
u=x.b
x=x.c
w.a.uniform3f(w.d,v,u,x)
x=this.c
u=z.z
u.toString
v=x.a
w=x.b
x=x.c
u.a.uniform3f(u.d,v,w,x)
x=this.d
w=z.Q
w.a.uniform1f(w.d,x)
x=this.e
w=z.ch
w.a.uniform1f(w.d,x)
x=a.cy
x=x.gL(x)
w=z.cy
w.toString
w.a3(x.V(0,!0))
x=a.gdI()
z=z.cx
z.toString
z.a3(x.V(0,!0))
x=b.e
x.F(a)
x.a0(a)
x.a1(a)
x=this.a
x.toString
a.a.useProgram(null)
x.f.b_()}},fT:{"^":"aN;0a,0b,0c,0d,0e,0f,0r,0a8:x@",
gn:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
w:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.w(null)},"ao","$1","$0","gU",0,2,0],
a2:function(a,b){},
K:function(a,b){H.x(a,"$isf",[T.aX],"$asf")
if(b!=null)if(!C.a.av(a,b)){b.a=a.length
C.a.h(a,b)}},
b4:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.h(a.fr.i(0,"GaussianBlur"),"$isdM")
if(z==null){y=a.a
z=new A.dM(y,"GaussianBlur")
z.aT(y,"GaussianBlur")
z.b0(0,$.fV,$.fU)
z.x=z.f.i(0,"posAttr")
z.y=z.f.i(0,"txtAttr")
z.z=H.b(z.r.i(0,"projViewObjMat"),"$isa7")
z.Q=H.b(z.r.i(0,"txt2DMat"),"$iscn")
z.ch=H.b(z.r.i(0,"colorTxt"),"$isa1")
z.cx=H.b(z.r.i(0,"depthTxt"),"$isa1")
z.cy=H.b(z.r.i(0,"nullColorTxt"),"$isE")
z.db=H.b(z.r.i(0,"nullDepthTxt"),"$isE")
z.dx=H.b(z.r.i(0,"width"),"$isI")
z.dy=H.b(z.r.i(0,"height"),"$isI")
z.fr=H.b(z.r.i(0,"highOffset"),"$isI")
z.fx=H.b(z.r.i(0,"lowOffset"),"$isI")
z.fy=H.b(z.r.i(0,"depthLimit"),"$isI")
a.aW(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a_()
v=$.$get$aq()
v=y.aY(new Z.bY(x),new Z.aO(w.a|v.a))
v.a9($.$get$a_()).e=this.a.x.c
v.a9($.$get$aq()).e=this.a.y.c
b.e=v}u=H.e([],[T.aX])
this.K(u,this.c)
this.K(u,this.d)
for(t=0;t<u.length;++t)u[t].F(a)
y=this.a
y.F(a)
x=this.c
y.a6(y.ch,y.cy,x)
x=this.d
y.a6(y.cx,y.db,x)
x=this.b
w=y.Q
w.toString
w.a3(x.V(0,!0))
x=a.gdD()
w=y.z
w.toString
w.a3(x.V(0,!0))
x=a.c
w=y.dx
w.a.uniform1f(w.d,x)
x=a.d
w=y.dy
w.a.uniform1f(w.d,x)
x=this.e
w=y.fr
w.a.uniform1f(w.d,x)
x=this.f
w=y.fx
w.a.uniform1f(w.d,x)
x=this.r
y=y.fy
y.a.uniform1f(y.d,x)
y=b.e
if(y instanceof Z.bb){y.F(a)
y.a0(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.b_()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hj:{"^":"aN;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0a8:dy@",
gn:function(){var z=this.dy
if(z==null){z=D.B()
this.dy=z}return z},
w:[function(a){var z
H.h(a,"$isl")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.w(null)},"ao","$1","$0","gU",0,2,0],
eY:[function(a){H.h(a,"$isl")
this.a=null
this.w(a)},function(){return this.eY(null)},"hX","$1","$0","geX",0,2,0],
hw:[function(a,b){var z=V.a4
z=new D.bP(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.w(z)},"$2","ges",8,0,20],
hx:[function(a,b){var z=V.a4
z=new D.bQ(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.w(z)},"$2","geu",8,0,20],
cH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a5(z.e.length+3,4)*4
x=C.f.a5(z.f.length+3,4)*4
w=C.f.a5(z.r.length+3,4)*4
v=C.f.a5(z.x.length+3,4)*4
u=C.f.a5(z.y.length+3,4)*4
t=C.f.a5(z.z.length+3,4)*4
s=C.f.a5(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.f.j(q.a)+C.f.j(p.a)+C.f.j(o.a)+C.f.j(n.a)+C.f.j(m.a)+C.f.j(l.a)+C.f.j(k.a)+C.f.j(j.a)+C.f.j(i.a)+"_"
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$a_()
if(c){z=$.$get$aE()
a6=new Z.aO(a6.a|z.a)}if(b){z=$.$get$aD()
a6=new Z.aO(a6.a|z.a)}if(a){z=$.$get$aq()
a6=new Z.aO(a6.a|z.a)}if(a0){z=$.$get$aF()
a6=new Z.aO(a6.a|z.a)}if(a2){z=$.$get$aC()
a6=new Z.aO(a6.a|z.a)}return new A.hn(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
K:function(a,b){H.x(a,"$isf",[T.aX],"$asf")
if(b!=null)if(!C.a.av(a,b)){b.a=a.length
C.a.h(a,b)}},
a2:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.A(z,0)]);z.G();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cl(x)}}},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cH()
y=H.h(a.fr.i(0,z.aw),"$isdY")
if(y==null){y=A.hk(z,a.a)
a.aW(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aQ
z=b.e
if(!(z instanceof Z.bb)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.au()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bY()
u.a.bY()
u=u.e
if(!(u==null))u.az(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fH()
t=t.e
if(!(t==null))t.az(0)}r=b.d.aY(new Z.bY(a.a),w)
r.a9($.$get$a_()).e=this.a.y.c
if(z)r.a9($.$get$aE()).e=this.a.Q.c
if(v)r.a9($.$get$aD()).e=this.a.z.c
if(x.rx)r.a9($.$get$aq()).e=this.a.ch.c
if(u)r.a9($.$get$aF()).e=this.a.cx.c
if(x.x1)r.a9($.$get$aC()).e=this.a.cy.c
b.e=r}z=T.aX
q=H.e([],[z])
this.a.F(a)
if(x.fx){v=this.a
u=a.dx
u=u.gL(u)
v=v.db
v.toString
v.a3(u.V(0,!0))}if(x.fy){v=this.a
u=a.gdI()
v=v.dx
v.toString
v.a3(u.V(0,!0))}v=this.a
u=a.gdD()
v=v.fr
v.toString
v.a3(u.V(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a3(u.V(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a3(u.V(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a3(C.y.V(u,!0))}if(x.aP>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.t],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.h(t,"$isa4")
u=u.k3
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.b1(H.x(t.V(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.K(q,this.f.d)
v=this.a
u=this.f.d
v.a6(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.K(q,this.f.e)
v=this.a
u=this.f.e
v.ad(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.K(q,this.r.d)
v=this.a
u=this.r.d
v.a6(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.K(q,this.r.e)
v=this.a
u=this.r.e
v.ad(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.K(q,this.x.d)
v=this.a
u=this.x.d
v.a6(v.aP,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.K(q,this.x.e)
v=this.a
u=this.x.e
v.ad(v.aw,v.aQ,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bj
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.K(q,this.y.d)
v=this.a
u=this.y.d
v.a6(v.d3,v.bk,u)
u=this.a
v=this.y.f
u=u.bj
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.K(q,this.y.e)
v=this.a
u=this.y.e
v.ad(v.d4,v.bk,u)
u=this.a
v=this.y.f
u=u.bj
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bl
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bn
u.a.uniform1f(u.d,s)
break
case C.d:this.K(q,this.z.d)
v=this.a
u=this.z.d
v.a6(v.d5,v.bm,u)
u=this.a
v=this.z.f
u=u.bl
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bn
v.a.uniform1f(v.d,s)
break
case C.c:this.K(q,this.z.e)
v=this.a
u=this.z.e
v.ad(v.d6,v.bm,u)
u=this.a
v=this.z.f
u=u.bl
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bn
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.di
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.cl(j.a)
s=t.a
h=t.b
g=t.c
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dj
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c4
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb3(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcn(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b9(j.gb3(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gak(j)
g=i.d
h=t.gbx()
s=t.gba()
t=t.gbh()
g.a.uniform3f(g.d,h,s,t)
t=j.gbT()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbU()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbV()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dk
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb3(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcn(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc1(j).i2()
g=i.c
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=m.b9(j.gb3(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gak(j)
s=i.e
h=t.gbx()
g=t.gba()
t=t.gbh()
s.a.uniform3f(s.d,h,g,t)
t=j.gi1()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi0()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dl
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.c6
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gb6()
H.x(q,"$isf",t,"$asf")
if(!C.a.av(q,s)){s.saU(q.length)
C.a.h(q,s)}s=j.gc1(j)
h=i.d
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
h.a.uniform3f(h.d,g,f,s)
s=j.gby()
f=i.b
g=s.gaM(s)
h=s.gaN(s)
s=s.gaO()
f.a.uniform3f(f.d,g,h,s)
s=j.gb5(j)
h=i.c
g=s.gaM(s)
f=s.gaN(s)
s=s.gaO()
h.a.uniform3f(h.d,g,f,s)
s=m.cl(j.gc1(j))
f=s.a
g=s.b
h=s.c
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gak(j)
g=i.f
f=h.gbx()
s=h.gba()
h=h.gbh()
g.a.uniform3f(g.d,f,s,h)
h=j.gb6()
s=h.gdv(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcM()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaU())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dm
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.y,u=v.length,t=[P.t],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.c7
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gb6()
H.x(q,"$isf",s,"$asf")
if(!C.a.av(q,h)){h.saU(q.length)
C.a.h(q,h)}e=m.l(0,j.gL(j))
h=j.gL(j).b9(new V.ae(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcn(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b9(new V.ae(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ca(0)
d=i.d
n=new Float32Array(H.b1(H.x(new V.cV(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).V(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gak(j)
h=i.e
f=d.gbx()
g=d.gba()
d=d.gbh()
h.a.uniform3f(h.d,f,g,d)
d=j.gb6()
h=d.gdv(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcM()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaU())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbT()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbU()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbV()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dn
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb6()
H.x(q,"$isf",z,"$asf")
if(!C.a.av(q,t)){t.saU(q.length)
C.a.h(q,t)}t=j.gb3(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcn(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc1(j)
g=i.c
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=j.gby()
s=i.d
h=t.gaM(t)
g=t.gaN(t)
t=t.gaO()
s.a.uniform3f(s.d,h,g,t)
t=j.gb5(j)
g=i.e
h=t.gaM(t)
s=t.gaN(t)
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=m.b9(j.gb3(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb6()
s=t.gdv(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcM()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaU())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gak(j)
s=i.y
h=t.gbx()
g=t.gba()
t=t.gbh()
s.a.uniform3f(s.d,h,g,t)
t=j.gi8()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gi9()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.K(q,this.Q.d)
z=this.a
v=this.Q.d
z.a6(z.d7,z.bo,v)
break
case C.c:this.K(q,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.d8,z.bo,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gL(v).ca(0)
a.Q=v}z=z.fy
z.toString
z.a3(v.V(0,!0))}if(x.dy){this.K(q,this.ch)
z=this.a
v=this.ch
z.ad(z.d9,z.da,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bp
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.K(q,this.cx.d)
z=this.a
v=this.cx.d
z.a6(z.dc,z.bq,v)
v=this.a
z=this.cx.f
v=v.bp
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.K(q,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.dd,z.bq,v)
v=this.a
z=this.cx.f
v=v.bp
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bs
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.br
v.a.uniform1f(v.d,t)
break
case C.d:this.K(q,this.cy.d)
z=this.a
v=this.cy.d
z.a6(z.de,z.bt,v)
v=this.a
z=this.cy.f
v=v.bs
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.br
z.a.uniform1f(z.d,t)
break
case C.c:this.K(q,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.df,z.bt,v)
v=this.a
z=this.cy.f
v=v.bs
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.br
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bu
z.a.uniform1f(z.d,u)
break
case C.d:this.K(q,this.db.d)
z=this.a
u=this.db.d
z.a6(z.dg,z.bv,u)
u=this.a
z=this.db.f
u=u.bu
u.a.uniform1f(u.d,z)
break
case C.c:this.K(q,this.db.e)
z=this.a
u=this.db.e
z.ad(z.dh,z.bv,u)
u=this.a
z=this.db.f
u=u.bu
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].F(a)
z=b.e
z.F(a)
z.a0(a)
z.a1(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.b_()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cH().aw}},hl:{"^":"cU;0f,a,b,0c,0d,0e",
f0:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.w(this.b,y,a,this,[P.t])
z.b=!0
this.a.w(z)}},
aI:function(){this.cu()
this.f0(1)}},cU:{"^":"a;",
w:[function(a){this.a.w(H.h(a,"$isl"))},function(){return this.w(null)},"ao","$1","$0","gU",0,2,0],
aI:["cu",function(){}],
f3:function(a){},
f4:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.w(this.b+".textureCube",x,this.e,this,[T.d4])
z.b=!0
this.a.w(z)}},
sb7:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aI()
this.c=C.c
this.f3(null)
z=this.a
z.a=null
z.w(null)}this.f4(a)}},hm:{"^":"cU;a,b,0c,0d,0e"},aV:{"^":"cU;0f,a,b,0c,0d,0e",
cR:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.w(this.b+".color",z,a,this,[V.S])
y.b=!0
this.a.w(y)}},
aI:["bA",function(){this.cu()
this.cR(new V.S(1,1,1))}],
sak:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aI()
z=this.a
z.a=null
z.w(null)}this.cR(b)}},ho:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
f2:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.w(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.w(z)}},
aI:function(){this.bA()
this.f2(1)}},hp:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
bP:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.w(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.w(z)}},
aI:function(){this.bA()
this.bP(100)}},i0:{"^":"aN;0a,0b,0c,0d,0a8:e@",
gn:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
w:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.w(null)},"ao","$1","$0","gU",0,2,0],
a2:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.i(0,"Skybox"),"$ise6")
if(z==null){y=a.a
z=new A.e6(y,"Skybox")
z.aT(y,"Skybox")
z.b0(0,$.i2,$.i1)
z.x=z.f.i(0,"posAttr")
z.y=H.b(z.r.i(0,"fov"),"$isI")
z.z=H.b(z.r.i(0,"ratio"),"$isI")
z.Q=H.b(z.r.i(0,"boxClr"),"$isF")
z.ch=H.b(z.r.i(0,"boxTxt"),"$isaf")
z.cx=H.b(z.r.i(0,"viewMat"),"$isa7")
a.aW(z)}this.a=z}if(b.e==null){y=b.d.aY(new Z.bY(a.a),$.$get$a_())
y.a9($.$get$a_()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.F(a)}y=a.d
x=a.c
w=this.a
w.F(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cp(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gL(x).ca(0)
w=w.cx
w.toString
w.a3(x.V(0,!0))
y=b.e
if(y instanceof Z.bb){y.F(a)
y.a0(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.b_()
y=this.c
if(y!=null)y.a1(a)}},aN:{"^":"a;"},ib:{"^":"aN;0a,0b,0c,0d,0a8:e@",
gn:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
w:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.w(null)},"ao","$1","$0","gU",0,2,0],
hE:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[O.bz],"$asd")
for(z=b.length,y=this.gU(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.aA()
t.a=H.e([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.ao()},"$2","geB",8,0,21],
hF:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[O.bz],"$asd")
for(z=b.length,y=this.gU(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.aA()
t.a=H.e([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.c(y,x)
C.a.O(t.a,y)}}this.ao()},"$2","geC",8,0,21],
a2:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.f.a5(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.h(a.fr.i(0,y),"$isec")
if(x==null){x=A.ic(z,a.a)
a.aW(x)}this.b=x
y=x}if(b.e==null){y=b.d.aY(new Z.bY(a.a),$.$get$a_())
w=y.a9($.$get$a_())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.F(a)
y=T.aX
u=H.e([],[y])
for(w=[P.t],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.x(u,"$isf",y,"$asf")
if(v!=null)if(!C.a.av(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.Q
if(t>=v.length)return H.k(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.ch
if(t>=v.length)return H.k(v,t)
v=v[t]
n=new Float32Array(H.b1(H.x((q==null?new V.a4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).V(0,!0),"$isf",w,"$asf")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aM(0,0,1,1)
q=v.cx
if(t>=q.length)return H.k(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.cy
if(t>=v.length)return H.k(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aM(0,0,1,1)
q=v.db
if(t>=q.length)return H.k(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.k(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.dy
if(t>=v.length)return H.k(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.y
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.z
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].F(a)
y=b.e
if(y instanceof Z.bb){y.F(a)
y.a0(a)
y.a1(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.b_()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bz:{"^":"a;0a,0b,0c,0d,0e,0a8:f@",
gn:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
w:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.w(null)},"ao","$1","$0","gU",0,2,0],
p:{
ed:function(a,b,c,d,e){var z,y,x,w,v,u
z=new O.bz()
y=z.a
z.a=e
x=e.y
w=H.c(z.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.w("texture",y,z.a,z,[T.cl])
x.b=!0
z.w(x)
v=V.aK()
if(!J.N(z.b,v)){y=z.b
z.b=v
x=new D.w("colorMatrix",y,v,z,[V.a4])
x.b=!0
z.w(x)}u=V.aM(0,0,1,1)
if(!J.N(z.c,u)){y=z.c
z.c=u
x=new D.w("source",y,u,z,[V.cj])
x.b=!0
z.w(x)}if(!J.N(z.d,b)){y=z.d
z.d=b
x=new D.w("destination",y,b,z,[V.cj])
x.b=!0
z.w(x)}if(z.e!==!1){z.e=!1
x=new D.w("flip",!0,!1,z,[P.a8])
x.b=!0
z.w(x)}z.f=null
return z}}}}],["","",,T,{"^":"",aX:{"^":"cz;"},cl:{"^":"aX;0b,0c,0d,0e,0f,0r,0x,0y,a",
F:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
p:{
eb:function(a,b){var z=new T.cl(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.B()
return z}}},d4:{"^":"aX;0b,0c,0d,0e,a",
F:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a1:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},ie:{"^":"a;a,0b,0c,0d,0e",
du:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.d4(0)
r.b=s
r.c=!1
r.d=0
r.e=D.B()
this.aG(r,s,z,34069,!1,!1)
this.aG(r,s,w,34070,!1,!1)
this.aG(r,s,y,34071,!1,!1)
this.aG(r,s,v,34072,!1,!1)
this.aG(r,s,x,34073,!1,!1)
this.aG(r,s,u,34074,!1,!1)
return r},
dt:function(a){return this.du(a,".png",!1,"")},
fW:function(a,b){return this.du(a,b,!1,"")},
aG:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.X(z,"load",H.c(new T.ig(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
eZ:function(a,b,c){var z,y,x,w
b=V.bM(b,2)
z=V.bM(a.width,2)
y=V.bM(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cD(null,null)
x.width=z
x.height=y
w=H.h(C.k.dM(x,"2d"),"$isdx")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.km(w.getImageData(0,0,x.width,x.height))}}},ig:{"^":"v:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.eZ(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hj(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d2();++z.e}}}],["","",,X,{"^":"",fk:{"^":"ck;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gn:function(){var z=this.db
if(z==null){z=D.B()
this.db=z}return z},
ap:function(a){var z=this.db
if(!(z==null))z.v(a)},
F:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.Y(z.getParameter(3379))
u=V.bM(x,2)
t=V.bM(w,2)
v=V.bM(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dF(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.eb(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.d2()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=this.y
x=y.b
this.r=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.x=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.f=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.r,0)
z.framebufferRenderbuffer(36160,36096,36161,this.x)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.f)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.cy
y=z.c
a.c=C.h.Z(y*this.a)
x=z.d
a.d=C.h.Z(x*this.b)
w=this.c
q=C.h.Z(z.a*w)
p=this.d
o=C.h.Z(z.b*p)
n=C.h.Z(y*w)
m=C.h.Z(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a1:function(a){a.a.bindFramebuffer(36160,null)},
p:{
ds:function(a,b,c){var z=new X.fk()
z.a=a
z.b=b
z.c=a
z.d=b
z.e=!0
z.y=T.eb(0,null)
z.z=new V.an(0,0,0,1)
z.Q=!0
z.ch=2000
z.cx=!0
z.cy=V.aM(0,0,1,1)
return z}}},c7:{"^":"a;",$isav:1},fS:{"^":"ck;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
F:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.r(y)
v=C.h.Z(w.a*y)
if(typeof x!=="number")return H.r(x)
u=C.h.Z(w.b*x)
t=C.h.Z(w.c*y)
a.c=t
w=C.h.Z(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
a1:function(a){},
p:{
cJ:function(a,b,c,d,e,f,g){var z,y
z=new X.fS()
y=new V.an(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aM(0,0,1,1)
z.r=y
return z}}},fX:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
F:function(a){var z
a.cy.bw(V.aK())
z=V.aK()
a.db.bw(z)},
a1:function(a){a.cy.ay()
a.db.ay()},
$isav:1,
$isc7:1},hC:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
ap:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.ap(null)},"hp","$1","$0","ge3",0,2,0],
F:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bw(V.as(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e3
if(z==null){z=V.dZ(new V.ae(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.e3=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aS(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bw(r)},
a1:function(a){a.cy.ay()
a.db.ay()},
$isav:1,
$isc7:1,
p:{
e2:function(a,b,c,d){var z,y,x,w
z=new X.hC()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gn()
x.toString
w=H.c(z.ge3(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.w("mover",y,z.a,z,[U.a5])
x.b=!0
z.ap(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.w("fov",y,b,z,[P.t])
x.b=!0
z.ap(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.w("near",y,d,z,[P.t])
x.b=!0
z.ap(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.w("far",y,a,z,[P.t])
x.b=!0
z.ap(x)}return z}}},ck:{"^":"a;"}}],["","",,B,{"^":"",
kH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.f1(x,(x&&C.m).cC(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.aa
W.X(z,"scroll",H.c(new B.kI(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$isf",[P.q],"$asf")
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
u=W.cD(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.h(v.insertCell(-1),"$isbw")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.h(q.insertCell(-1),"$isbw").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.k(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.h(q.insertCell(-1),"$isbw")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.h(q.insertCell(-1),"$isbw")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.h(q.insertCell(-1),"$isbw").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kH(a,y,!1,"../resources/SnowTop.png")},
kK:function(a){P.io(C.v,new B.kL(a))},
kI:{"^":"v:22;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.i(-0.05*C.h.Z(this.b.scrollTop))+"px"
z.top=y}},
kL:{"^":"v:38;a",
$1:function(a){H.h(a,"$isaY")
P.dn(C.h.dH(this.a.gfQ(),2)+" fps")}}}],["","",,N,{"^":"",
f8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
B.kJ("Test 028",H.e([],[P.q]),"Test of a Gaussian blur cover pass. Notice the depth of field causing things further away to be blurry.")
z=document.getElementById("threeDart")
if(z==null)H.p(P.o("Failed to find an element with the identifier, threeDart."))
y=E.il(z,!0,!0,!0,!1)
x=new U.dN()
x.bb(U.a5)
x.aB(x.geq(),x.geO())
x.e=null
x.f=V.aK()
x.r=0
w=y.r
v=new U.iE()
u=U.cE()
u.scm(0,!0)
u.scd(6.283185307179586)
u.scf(0)
u.saa(0,0)
u.sce(100)
u.sP(0)
u.sc0(0.5)
v.b=u
u=u.gn()
u.toString
t={func:1,ret:-1,args:[D.l]}
s=H.c(v.gaH(),t)
C.a.h(u.a,s)
u=U.cE()
u.scm(0,!0)
u.scd(6.283185307179586)
u.scf(0)
u.saa(0,0)
u.sce(100)
u.sP(0)
u.sc0(0.5)
v.c=u
C.a.h(u.gn().a,s)
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
r=new X.at(!1,!1,!1)
q=v.d
v.d=r
u=[X.at]
s=new D.w("modifiers",q,r,v,u)
s.b=!0
v.M(s)
s=v.f
if(s!==!1){v.f=!1
s=new D.w("invertX",s,!1,v,[P.a8])
s.b=!0
v.M(s)}s=v.r
if(s!==!1){v.r=!1
s=new D.w("invertY",s,!1,v,[P.a8])
s.b=!0
v.M(s)}v.aX(w)
x.h(0,v)
w=y.r
v=new U.iD()
s=U.cE()
s.scm(0,!0)
s.scd(6.283185307179586)
s.scf(0)
s.saa(0,0)
s.sce(100)
s.sP(0)
s.sc0(0.2)
v.b=s
s=s.gn()
s.toString
p=H.c(v.gaH(),t)
C.a.h(s.a,p)
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
r=new X.at(!0,!1,!1)
q=v.c
v.c=r
s=new D.w("modifiers",q,r,v,u)
s.b=!0
v.M(s)
v.aX(w)
x.h(0,v)
w=y.r
v=new U.iF()
v.c=0.01
v.d=0
v.e=0
r=new X.at(!1,!1,!1)
v.b=r
u=new D.w("modifiers",null,r,v,u)
u.b=!0
v.M(u)
v.aX(w)
x.h(0,v)
x.h(0,U.cG(V.hs(0,0,5)))
o=X.e2(2000,1.0471975511965976,x,0.1)
n=F.d2()
F.bH(n,null,null,1,1,1,0,0,1)
F.bH(n,null,null,1,1,0,1,0,3)
F.bH(n,null,null,1,1,0,0,1,2)
F.bH(n,null,null,1,1,-1,0,0,0)
F.bH(n,null,null,1,1,0,-1,0,0)
F.bH(n,null,null,1,1,0,0,-1,3)
n.au()
m=E.cc(null,!0,null,"",n,null)
l=E.cc(null,!0,null,"",null,null)
for(k=-1.6;k<=1.7;k+=0.8)for(j=-1.6;j<=1.7;j+=0.8)for(i=-1.6;i<=1.7;i+=0.8){h=new V.a4(1,0,0,k,0,1,0,j,0,0,1,i,0,0,0,1).l(0,new V.a4(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
g=E.cc(null,!0,null,"",null,null)
w=new U.cF()
w.sL(0,h)
g.sdz(w)
w=g.y
v=H.A(w,0)
H.D(m,v)
u=[v]
if(w.bd(H.e([m],u))){s=w.a
f=s.length
C.a.h(s,m)
v=H.x(H.e([m],u),"$isd",[v],"$asd")
w=w.c
if(w!=null)w.$2(f,v)}w=l.y
v=H.A(w,0)
H.D(g,v)
u=[v]
if(w.bd(H.e([g],u))){s=w.a
f=s.length
C.a.h(s,g)
v=H.x(H.e([g],u),"$isd",[v],"$asd")
w=w.c
if(w!=null)w.$2(f,v)}}e=y.f.dt("../resources/diceColor")
d=new O.hj()
w=O.c8(V.a4)
d.e=w
w.aB(d.ges(),d.geu())
w=new O.aV(d,"emission")
w.c=C.b
w.f=new V.S(0,0,0)
d.f=w
w=new O.aV(d,"ambient")
w.c=C.b
w.f=new V.S(0,0,0)
d.r=w
w=new O.aV(d,"diffuse")
w.c=C.b
w.f=new V.S(0,0,0)
d.x=w
w=new O.aV(d,"invDiffuse")
w.c=C.b
w.f=new V.S(0,0,0)
d.y=w
w=new O.hp(d,"specular")
w.c=C.b
w.f=new V.S(0,0,0)
w.ch=100
d.z=w
w=new O.hm(d,"bump")
w.c=C.b
d.Q=w
d.ch=null
w=new O.aV(d,"reflect")
w.c=C.b
w.f=new V.S(0,0,0)
d.cx=w
w=new O.ho(d,"refract")
w.c=C.b
w.f=new V.S(0,0,0)
w.ch=1
d.cy=w
w=new O.hl(d,"alpha")
w.c=C.b
w.f=1
d.db=w
w=new D.h4()
w.bb(D.W)
w.e=H.e([],[D.cb])
w.f=H.e([],[D.hE])
w.r=H.e([],[D.i3])
w.x=H.e([],[D.ih])
w.y=H.e([],[D.ii])
w.z=H.e([],[D.ij])
w.Q=null
w.ch=null
w.co(w.ger(),w.geN(),w.geP())
d.dx=w
v=w.Q
if(v==null){v=D.B()
w.Q=v
w=v}else w=v
v=H.c(d.geX(),t)
C.a.h(w.a,v)
v=d.dx
w=v.ch
if(w==null){w=D.B()
v.ch=w}v=H.c(d.gU(),t)
C.a.h(w.a,v)
d.dy=null
v=d.dx
w=U.cG(V.e_(-1,-1,-1,null))
v.h(0,D.dI(new V.S(1,0.9,0.9),w))
w=d.dx
v=U.cG(V.e_(1,1,2,null))
w.h(0,D.dI(new V.S(0.2,0.2,0.35),v))
w=d.r
w.sak(0,new V.S(0.2,0.2,0.2))
d.r.sb7(e)
w=d.x
w.sak(0,new V.S(0.8,0.8,0.8))
d.x.sb7(e)
w=d.z
w.sak(0,new V.S(0.7,0.7,0.7))
w=d.z
if(w.c===C.b){w.c=C.e
w.bA()
w.bP(100)
v=w.a
v.a=null
v.w(null)}w.bP(10)
d.Q.sb7(y.f.dt("../resources/diceBumpMap"))
c=X.ds(800,600,!0)
if(c.Q){c.Q=!1
w=new D.w("clearColor",!0,!1,c,[P.a8])
w.b=!0
c.ap(w)}w=y.f.fW("../resources/maskonaive",".jpg")
b=M.cH(null,null,null)
v=new O.i0()
v.b=1.0471975511965976
q=v.c
v.c=w
w=w.e
u=H.c(v.gU(),t)
C.a.h(w.a,u)
w=new D.w("boxTexture",q,v.c,v,[T.d4])
w.b=!0
v.w(w)
e=new V.S(1,1,1)
if(!J.N(v.d,e)){q=v.d
v.d=e
w=new D.w("boxColor",q,e,v,[V.S])
w.b=!0
v.w(w)}v.e=null
b.sam(v)
b.saK(o)
b.saA(0,c)
a=M.dK(null,null,null,null)
a.saK(o)
a.saA(0,c)
a.sam(d)
a.d.h(0,l)
a0=X.ds(400,300,!0)
a1=M.dK(null,null,null,null)
a1.saK(o)
a1.saA(0,a0)
w=new O.fC()
w.d=1
w.e=10
a2=new V.S(1,1,1)
w.b=a2
v=[V.S]
u=new D.w("objectColor",null,a2,w,v)
u.b=!0
w.w(u)
a2=new V.S(0,0,0)
if(!J.N(w.c,a2)){q=w.c
w.c=a2
v=new D.w("fogColor",q,a2,w,v)
v.b=!0
w.w(v)}v=w.d
if(!$.m.$2(v,3.5)){q=w.d
w.d=3.5
v=new D.w("fogStart",q,3.5,w,[P.t])
v.b=!0
w.w(v)}v=w.e
if(!$.m.$2(v,5.5)){q=w.e
w.e=5.5
v=new D.w("fogStop",q,5.5,w,[P.t])
v.b=!0
w.w(v)}a1.sam(w)
a1.d.h(0,l)
a3=M.cH(null,null,null)
w=c.y
v=a0.y
u=new O.fT()
u.e=0
u.f=4
u.r=0.001
u.b=new V.cV(1,0,0,0,1,0,0,0,1)
s=new D.w("textureMatrix",null,null,u,[P.a])
s.b=!0
u.w(s)
s=u.c
if(s!==w){if(s!=null){s=s.y
p=H.c(u.gU(),t)
C.a.O(s.a,p)}q=u.c
u.c=w
w=w.y
s=H.c(u.gU(),t)
C.a.h(w.a,s)
w=new D.w("colorTexture",q,u.c,u,[T.cl])
w.b=!0
u.w(w)}w=u.d
if(w!==v){if(w!=null){w=w.y
s=H.c(u.gU(),t)
C.a.O(w.a,s)}q=u.d
u.d=v
w=v.y
v=H.c(u.gU(),t)
C.a.h(w.a,v)
w=new D.w("depthTexture",q,u.d,u,[T.cl])
w.b=!0
u.w(w)}w=u.e
if(!$.m.$2(w,0)){q=u.e
u.e=0
w=new D.w("highOffset",q,0,u,[P.t])
w.b=!0
u.w(w)}w=u.f
if(!$.m.$2(w,8)){q=u.f
u.f=8
w=new D.w("lowOffset",q,8,u,[P.t])
w.b=!0
u.w(w)}w=u.r
if(!$.m.$2(w,0.001)){q=u.r
u.r=0.001
w=new D.w("depthLimit",q,0.001,u,[P.t])
w.b=!0
u.w(w)}a3.sam(u)
a4=new O.ib()
a2=new V.an(0,0,0,0)
a4.a=a2
w=new D.w("backColor",null,a2,a4,[V.an])
w.b=!0
a4.w(w)
a4.b=null
w=O.c8(O.bz)
a4.c=w
w.aB(a4.geB(),a4.geC())
a4.d=0
a4.e=null
w=a4.c
v=a0.y
w.h(0,O.ed(null,V.aM(0,0.8,0.2,0.2),!1,null,v))
v=a4.c
w=c.y
v.h(0,O.ed(null,V.aM(0,0.6,0.2,0.2),!1,null,w))
a5=M.cH(null,null,null)
a5.saA(0,X.cJ(!1,!0,!1,null,2000,null,0))
a5.sam(a4)
w=M.aw
v=H.e([b,a,a1,a3,a5],[w])
u=new M.fu()
u.bb(w)
u.e=!1
u.f=null
u.aB(u.geQ(),u.geR())
u.bS(0,v)
w=y.d
if(w!==u){if(w!=null){w=w.gn()
w.toString
v=H.c(y.gcw(),t)
C.a.O(w.a,v)}y.d=u
w=u.gn()
w.toString
t=H.c(y.gcw(),t)
C.a.h(w.a,t)
y.dZ()}B.kK(y)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.dQ.prototype}if(typeof a=="string")return J.cN.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.bR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.c0=function(a){if(typeof a=="string")return J.cN.prototype
if(a==null)return a
if(a.constructor==Array)return J.bR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.dj=function(a){if(a==null)return a
if(a.constructor==Array)return J.bR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.kp=function(a){if(typeof a=="number")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d7.prototype
return a}
J.c1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bS.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).u(a,b)}
J.fd=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kp(a).ai(a,b)}
J.fe=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ky(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).i(a,b)}
J.ff=function(a,b,c,d){return J.c1(a).cW(a,b,c,d)}
J.cy=function(a,b,c){return J.c0(a).fI(a,b,c)}
J.dp=function(a,b){return J.dj(a).D(a,b)}
J.fg=function(a,b){return J.dj(a).N(a,b)}
J.aI=function(a){return J.J(a).gT(a)}
J.c4=function(a){return J.dj(a).gY(a)}
J.b9=function(a){return J.c0(a).gk(a)}
J.a9=function(a){return J.J(a).j(a)}
var $=I.p
C.k=W.cC.prototype
C.m=W.fx.prototype
C.w=J.n.prototype
C.a=J.bR.prototype
C.x=J.dQ.prototype
C.f=J.dR.prototype
C.y=J.dS.prototype
C.h=J.ch.prototype
C.i=J.cN.prototype
C.F=J.bS.prototype
C.G=W.hy.prototype
C.p=J.hD.prototype
C.q=P.d0.prototype
C.l=J.d7.prototype
C.r=W.bE.prototype
C.t=W.iQ.prototype
C.u=new P.hA()
C.j=new P.jB()
C.b=new A.c9(0,"ColorSourceType.None")
C.e=new A.c9(1,"ColorSourceType.Solid")
C.d=new A.c9(2,"ColorSourceType.Texture2D")
C.c=new A.c9(3,"ColorSourceType.TextureCube")
C.v=new P.bO(5e6)
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
C.n=function(hooks) { return hooks; }

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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.ar=0
$.ba=null
$.dt=null
$.dc=!1
$.f5=null
$.f_=null
$.fb=null
$.cu=null
$.cw=null
$.dk=null
$.b2=null
$.bI=null
$.bJ=null
$.dd=!1
$.Q=C.j
$.dG=null
$.dF=null
$.dE=null
$.dD=null
$.m=V.hq()
$.fE="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fD="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.fV="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.fU="precision mediump float;                                 \n                                                         \n#define MAX_BLUR_RANGE 20.0                              \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D depthTxt;                              \nuniform int nullColorTxt;                                \nuniform int nullDepthTxt;                                \nuniform float width;                                     \nuniform float height;                                    \nuniform float highOffset;                                \nuniform float lowOffset;                                 \nuniform float depthLimit;                                \n                                                         \nvarying vec2 txt2D;                                      \n                                                         \nfloat div;                                               \nvec4 color;                                              \n                                                         \nvoid offsetColor(float baseDepth, float tu, float tv)    \n{                                                        \n   vec2 txtOffset = vec2(txt2D.x + tu/width,             \n                         txt2D.y + tv/height);           \n   float depth = texture2D(depthTxt, txtOffset).r;       \n   if (depth - depthLimit > baseDepth) return;           \n   div += 1.0;                                           \n   color += texture2D(colorTxt, txtOffset);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0)                                  \n   {                                                     \n      gl_FragColor = vec4(1.0);                          \n      return;                                            \n   }                                                     \n   color = texture2D(colorTxt, txt2D);                   \n   float baseDepth;                                      \n   if(nullDepthTxt > 0) baseDepth = 1.0;                 \n   else baseDepth = texture2D(depthTxt, txt2D).r;        \n   float offset = mix(lowOffset, highOffset, baseDepth); \n   offset = abs(offset);                                 \n   div = 1.0;                                            \n   for(float x=0.0; x<MAX_BLUR_RANGE; x+=1.0)            \n   {                                                     \n      if(x > offset) break;                              \n      for(float y=1.0; y<MAX_BLUR_RANGE; y+=1.0)         \n      {                                                  \n         if(y > offset) break;                           \n         offsetColor(baseDepth,  x,  y);                 \n         offsetColor(baseDepth,  x, -y);                 \n         offsetColor(baseDepth, -x,  y);                 \n         offsetColor(baseDepth, -x, -y);                 \n      }                                                  \n   }                                                     \n   gl_FragColor = color / div;                           \n}                                                        \n"
$.i2="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.i1="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["dB","$get$dB",function(){return H.f4("_$dart_dartClosure")},"cO","$get$cO",function(){return H.f4("_$dart_js")},"eh","$get$eh",function(){return H.ax(H.cm({
toString:function(){return"$receiver$"}}))},"ei","$get$ei",function(){return H.ax(H.cm({$method$:null,
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.ax(H.cm(null))},"ek","$get$ek",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.ax(H.cm(void 0))},"ep","$get$ep",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.ax(H.en(null))},"el","$get$el",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"er","$get$er",function(){return H.ax(H.en(void 0))},"eq","$get$eq",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d9","$get$d9",function(){return P.iR()},"bK","$get$bK",function(){return[]},"dA","$get$dA",function(){return{}},"eC","$get$eC",function(){return Z.ak(0)},"eA","$get$eA",function(){return Z.ak(511)},"a_","$get$a_",function(){return Z.ak(1)},"aE","$get$aE",function(){return Z.ak(2)},"aD","$get$aD",function(){return Z.ak(4)},"aq","$get$aq",function(){return Z.ak(8)},"aF","$get$aF",function(){return Z.ak(16)},"bC","$get$bC",function(){return Z.ak(32)},"bD","$get$bD",function(){return Z.ak(64)},"eB","$get$eB",function(){return Z.ak(96)},"b_","$get$b_",function(){return Z.ak(128)},"aC","$get$aC",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.H,args:[F.aj]},{func:1,ret:-1,args:[P.M,[P.d,E.az]]},{func:1,ret:-1,args:[P.q,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.l]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.H,args:[,,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[P.M,[P.d,D.W]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.M,[P.d,U.a5]]},{func:1,ret:-1,args:[P.M,[P.d,M.aw]]},{func:1,ret:-1,args:[P.M,[P.d,V.a4]]},{func:1,ret:-1,args:[P.M,[P.d,O.bz]]},{func:1,ret:P.H,args:[W.aa]},{func:1,ret:P.q,args:[P.M]},{func:1,ret:[P.aG,,],args:[,]},{func:1,ret:P.a8,args:[W.K]},{func:1,ret:W.a0,args:[W.K]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.ap]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[P.U]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.a8,args:[P.t,P.t]},{func:1,ret:P.a8,args:[[P.d,D.W]]},{func:1,args:[P.q]},{func:1,ret:P.H,args:[F.aB,P.t,P.t]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:P.H,args:[P.aY]},{func:1,args:[,P.q]}]
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
if(x==y)H.kO(d||a)
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
Isolate.dh=a.dh
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
if(typeof dartMainRunner==="function")dartMainRunner(N.f8,[])
else N.f8([])})})()
//# sourceMappingURL=test.dart.js.map
