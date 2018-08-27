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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ism)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dk(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dl=function(){}
var dart=[["","",,H,{"^":"",mA:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
ds:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cD:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dp==null){H.lq()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.eV("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cV()]
if(v!=null)return v
v=H.lv(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cV(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gX:function(a){return H.bz(a)},
i:["e6",function(a){return"Instance of '"+H.b5(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hu:{"^":"m;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isa6:1},
e_:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isJ:1},
cW:{"^":"m;",
gX:function(a){return 0},
i:["e7",function(a){return String(a)}]},
i7:{"^":"cW;"},
cw:{"^":"cW;"},
c1:{"^":"cW;",
i:function(a){var z=a[$.$get$dK()]
if(z==null)return this.e7(a)
return"JavaScript function for "+H.j(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscS:1},
b0:{"^":"m;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.q(P.aj("add"))
a.push(b)},
H:function(a,b){var z
if(!!a.fixed$length)H.q(P.aj("remove"))
for(z=0;z<a.length;++z)if(J.H(a[z],b)){a.splice(z,1)
return!0}return!1},
c0:function(a,b){var z,y
H.t(b,"$isf",[H.z(a,0)],"$asf")
if(!!a.fixed$length)H.q(P.aj("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.bl(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a6(z,y,H.j(a[y]))
return z.join(b)},
hi:function(a){return this.D(a,"")},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bH:function(a,b,c){var z=a.length
if(b>z)throw H.i(P.ao(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.i(P.ao(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcm:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.hs())},
aw:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
i:function(a){return P.cT(a,"[","]")},
ga2:function(a){return new J.at(a,a.length,0,[H.z(a,0)])},
gX:function(a){return H.bz(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.aj("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.cd(b,"newLength",null))
if(b<0)throw H.i(P.ao(b,0,null,"newLength",null))
a.length=b},
a6:function(a,b,c){H.Z(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.q(P.aj("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aW(a,b))
if(b>=a.length||b<0)throw H.i(H.aW(a,b))
a[b]=c},
$isf:1,
$ise:1,
n:{
ht:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.cd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.ao(a,0,4294967295,"length",null))
return J.dX(new Array(a),b)},
dX:function(a,b){return J.bt(H.c(a,[b]))},
bt:function(a){H.bV(a)
a.fixed$length=Array
return a}}},
mz:{"^":"b0;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c0:{"^":"m;",
ghh:function(a){return a===0?1/a<0:a<0},
hR:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.aj(""+a+".toInt()"))},
cj:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.aj(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aj(""+a+".round()"))},
dV:function(a,b){var z
if(b>20)throw H.i(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghh(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.i(H.aQ(b))
return a*b},
e2:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ea:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.aj("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
bl:function(a,b){var z
if(a>0)z=this.ft(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ft:function(a,b){return b>31?0:a>>>b},
aj:function(a,b){if(typeof b!=="number")throw H.i(H.aQ(b))
return a<b},
$isw:1,
$isS:1},
dZ:{"^":"c0;",$isA:1},
dY:{"^":"c0;"},
co:{"^":"m;",
c9:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.aW(a,b))
if(b<0)throw H.i(H.aW(a,b))
if(b>=a.length)H.q(H.aW(a,b))
return a.charCodeAt(b)},
bh:function(a,b){if(b>=a.length)throw H.i(H.aW(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.T(b)
if(typeof b!=="string")throw H.i(P.cd(b,null,null))
return a+b},
bI:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.i(P.cs(b,null,null))
if(b>c)throw H.i(P.cs(b,null,null))
if(c>a.length)throw H.i(P.cs(c,null,null))
return a.substring(b,c)},
cD:function(a,b){return this.bI(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hx:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ag:function(a,b){return this.hx(a,b," ")},
h3:function(a,b,c){if(c>a.length)throw H.i(P.ao(c,0,a.length,null,null))
return H.fC(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseg:1,
$isp:1}}],["","",,H,{"^":"",
hs:function(){return new P.iL("No element")},
a3:{"^":"jk;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.c9(this.a,b)},
$aseW:function(){return[P.A]},
$asu:function(){return[P.A]},
$asf:function(){return[P.A]},
$ase:function(){return[P.A]}},
hc:{"^":"f;"},
e4:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.ca(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.i(P.bl(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.G(z,w);++this.c
return!0}},
hL:{"^":"f;a,b,$ti",
ga2:function(a){return new H.hM(J.bX(this.a),this.b,this.$ti)},
gl:function(a){return J.bi(this.a)},
G:function(a,b){return this.b.$1(J.dv(this.a,b))},
$asf:function(a,b){return[b]}},
hM:{"^":"cU;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascU:function(a,b){return[b]}},
jC:{"^":"f;a,b,$ti",
ga2:function(a){return new H.jD(J.bX(this.a),this.b,this.$ti)}},
jD:{"^":"cU;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cl:{"^":"a;$ti"},
eW:{"^":"a;$ti"},
jk:{"^":"cp+eW;"}}],["","",,H,{"^":"",
ll:function(a){return init.types[H.Z(a)]},
lt:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isE},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.i(H.aQ(a))
return z},
bz:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b5:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$iscw){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bh(w,0)===36)w=C.i.cD(w,1)
r=H.dq(H.bV(H.aX(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ej:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ii:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.i(H.aQ(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bl(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.i(H.aQ(w))}return H.ej(z)},
ek:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.i(H.aQ(x))
if(x<0)throw H.i(H.aQ(x))
if(x>65535)return H.ii(a)}return H.ej(a)},
ih:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bl(z,10))>>>0,56320|z&1023)}throw H.i(P.ao(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ig:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
id:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
i9:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
ia:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
ic:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
ie:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
ib:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
r:function(a){throw H.i(H.aQ(a))},
h:function(a,b){if(a==null)J.bi(a)
throw H.i(H.aW(a,b))},
aW:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.Z(J.bi(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cs(b,"index",null)},
lg:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
aQ:function(a){return new P.aJ(!0,a,null,null)},
l9:function(a){if(typeof a!=="number")throw H.i(H.aQ(a))
return a},
i:function(a){var z
if(a==null)a=new P.ef()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fF})
z.name=""}else z.toString=H.fF
return z},
fF:function(){return J.aa(this.dartException)},
q:function(a){throw H.i(a)},
x:function(a){throw H.i(P.bl(a))},
aZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bl(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cX(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ee(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eD()
u=$.$get$eE()
t=$.$get$eF()
s=$.$get$eG()
r=$.$get$eK()
q=$.$get$eL()
p=$.$get$eI()
$.$get$eH()
o=$.$get$eN()
n=$.$get$eM()
m=v.af(y)
if(m!=null)return z.$1(H.cX(H.T(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.cX(H.T(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ee(H.T(y),m))}}return z.$1(new H.jj(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eo()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eo()
return a},
bg:function(a){var z
if(a==null)return new H.fe(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fe(a)},
li:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a6(0,a[y],a[x])}return b},
ls:function(a,b,c,d,e,f){H.k(a,"$iscS")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.o("Unsupported number of arguments for wrapped closure"))},
be:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ls)
a.$identity=z
return z},
fW:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$ise){z.$reflectionInfo=d
x=H.il(z).r}else x=d
w=e?Object.create(new H.iM().constructor.prototype):Object.create(new H.cI(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.E()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dF(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ll,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dA:H.cJ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.i("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dF(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fT:function(a,b,c,d){var z=H.cJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dF:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fV(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fT(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.E()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bj
if(v==null){v=H.ce("self")
$.bj=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.E()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bj
if(v==null){v=H.ce("self")
$.bj=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fU:function(a,b,c,d){var z,y
z=H.cJ
y=H.dA
switch(b?-1:a){case 0:throw H.i(H.iv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fV:function(a,b){var z,y,x,w,v,u,t,s
z=$.bj
if(z==null){z=H.ce("self")
$.bj=z}y=$.dz
if(y==null){y=H.ce("receiver")
$.dz=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fU(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.az
if(typeof y!=="number")return y.E()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.E()
$.az=y+1
return new Function(z+y+"}")()},
dk:function(a,b,c,d,e,f,g){var z,y
z=J.bt(H.bV(b))
H.Z(c)
y=!!J.K(d).$ise?J.bt(d):d
return H.fW(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aG(a,"String"))},
ly:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aG(a,"num"))},
fs:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aG(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aG(a,"int"))},
fA:function(a,b){throw H.i(H.aG(a,H.T(b).substring(3)))},
lA:function(a,b){var z=J.ca(b)
throw H.i(H.fS(a,z.bI(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fA(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.lA(a,b)},
bV:function(a){if(a==null)return a
if(!!J.K(a).$ise)return a
throw H.i(H.aG(a,"List"))},
lu:function(a,b){if(a==null)return a
if(!!J.K(a).$ise)return a
if(J.K(a)[b])return a
H.fA(a,b)},
ft:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
c9:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ft(J.K(a))
if(z==null)return!1
y=H.fw(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.dg)return a
$.dg=!0
try{if(H.c9(a,b))return a
z=H.cc(b)
y=H.aG(a,z)
throw H.i(y)}finally{$.dg=!1}},
dm:function(a,b){if(a!=null&&!H.dj(a,b))H.q(H.aG(a,H.cc(b)))
return a},
fn:function(a){var z
if(a instanceof H.v){z=H.ft(J.K(a))
if(z!=null)return H.cc(z)
return"Closure"}return H.b5(a)},
lE:function(a){throw H.i(new P.h1(H.T(a)))},
fu:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aX:function(a){if(a==null)return
return a.$ti},
nw:function(a,b,c){return H.bh(a["$as"+H.j(c)],H.aX(b))},
bU:function(a,b,c,d){var z
H.T(c)
H.Z(d)
z=H.bh(a["$as"+H.j(c)],H.aX(b))
return z==null?null:z[d]},
aH:function(a,b,c){var z
H.T(b)
H.Z(c)
z=H.bh(a["$as"+H.j(b)],H.aX(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aX(a)
return z==null?null:z[b]},
cc:function(a){var z=H.aY(a,null)
return z},
aY:function(a,b){var z,y
H.t(b,"$ise",[P.p],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dq(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.l_(a,b)
if('futureOr' in a)return"FutureOr<"+H.aY("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.p]
H.t(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aY(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aY(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aY(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aY(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lh(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aY(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dq:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$ise",[P.p],"$ase")
if(a==null)return""
z=new P.c6("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aY(u,c)}v="<"+z.i(0)+">"
return v},
bh:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bd:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aX(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fq(H.bh(y[d],z),null,c,null)},
t:function(a,b,c,d){var z,y
H.T(b)
H.bV(c)
H.T(d)
if(a==null)return a
z=H.bd(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dq(c,0,null)
throw H.i(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
nu:function(a,b,c){return a.apply(b,H.bh(J.K(b)["$as"+H.j(c)],H.aX(b)))},
fx:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fx(z)}return!1},
dj:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fx(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c9(a,b)}y=J.K(a).constructor
x=H.aX(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.dj(a,b))throw H.i(H.aG(a,H.cc(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fw(a,b,c,d)
if('func' in a)return c.builtin$cls==="cS"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bp" in y.prototype))return!1
w=y.prototype["$as"+"bp"]
v=H.bh(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cc(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fq(H.bh(r,z),b,u,d)},
fw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lx(m,b,l,d)},
lx:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
nv:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
lv:function(a){var z,y,x,w,v,u
z=H.T($.fv.$1(a))
y=$.cC[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.fp.$2(a,z))
if(z!=null){y=$.cC[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cF(x)
$.cC[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cE[z]=x
return x}if(v==="-"){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fz(a,x)
if(v==="*")throw H.i(P.eV(z))
if(init.leafTags[z]===true){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fz(a,x)},
fz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ds(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cF:function(a){return J.ds(a,!1,null,!!a.$isE)},
lw:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cF(z)
else return J.ds(z,c,null,null)},
lq:function(){if(!0===$.dp)return
$.dp=!0
H.lr()},
lr:function(){var z,y,x,w,v,u,t,s
$.cC=Object.create(null)
$.cE=Object.create(null)
H.lm()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fB.$1(v)
if(u!=null){t=H.lw(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lm:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.bc(C.B,H.bc(C.G,H.bc(C.n,H.bc(C.n,H.bc(C.F,H.bc(C.C,H.bc(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fv=new H.ln(v)
$.fp=new H.lo(u)
$.fB=new H.lp(t)},
bc:function(a,b){return a(b)||b},
fC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fD:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ik:{"^":"a;a,b,c,d,e,f,r,0x",n:{
il:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bt(z)
y=z[0]
x=z[1]
return new H.ik(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j8:{"^":"a;a,b,c,d,e,f",
af:function(a){var z,y,x
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
n:{
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.p])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eJ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i4:{"^":"a_;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
ee:function(a,b){return new H.i4(a,b==null?null:b.method)}}},
hx:{"^":"a_;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cX:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hx(a,y,z?null:b.receiver)}}},
jj:{"^":"a_;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lH:{"^":"v:19;a",
$1:function(a){if(!!J.K(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fe:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
v:{"^":"a;",
i:function(a){return"Closure '"+H.b5(this).trim()+"'"},
gdZ:function(){return this},
$iscS:1,
gdZ:function(){return this}},
es:{"^":"v;"},
iM:{"^":"es;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cI:{"^":"es;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cI))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bz(this.a)
else y=typeof z!=="object"?J.aI(z):H.bz(z)
return(y^H.bz(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b5(z)+"'")},
n:{
cJ:function(a){return a.a},
dA:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cI("self","target","receiver","name")
y=J.bt(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j9:{"^":"a_;a",
i:function(a){return this.a},
n:{
aG:function(a,b){return new H.j9("TypeError: "+H.j(P.ck(a))+": type '"+H.fn(a)+"' is not a subtype of type '"+b+"'")}}},
fR:{"^":"a_;a",
i:function(a){return this.a},
n:{
fS:function(a,b){return new H.fR("CastError: "+H.j(P.ck(a))+": type '"+H.fn(a)+"' is not a subtype of type '"+b+"'")}}},
iu:{"^":"a_;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
iv:function(a){return new H.iu(a)}}},
b1:{"^":"hJ;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaA:function(a){return new H.e3(this,[H.z(this,0)])},
de:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cP(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cP(y,b)}else return this.hf(b)},
hf:function(a){var z=this.d
if(z==null)return!1
return this.ck(this.bQ(z,J.aI(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bi(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bi(w,b)
x=y==null?null:y.b
return x}else return this.hg(b)},
hg:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bQ(z,J.aI(a)&0x3ffffff)
x=this.ck(y,a)
if(x<0)return
return y[x].b},
a6:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bS()
this.b=z}this.cI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bS()
this.c=y}this.cI(y,b,c)}else{x=this.d
if(x==null){x=this.bS()
this.d=x}w=J.aI(b)&0x3ffffff
v=this.bQ(x,w)
if(v==null)this.bZ(x,w,[this.bT(b,c)])
else{u=this.ck(v,b)
if(u>=0)v[u].b=c
else v.push(this.bT(b,c))}}},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.bl(this))
z=z.c}},
cI:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.bi(a,b)
if(z==null)this.bZ(a,b,this.bT(b,c))
else z.b=c},
eG:function(){this.r=this.r+1&67108863},
bT:function(a,b){var z,y
z=new H.hB(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eG()
return z},
ck:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].a,b))return y
return-1},
i:function(a){return P.e6(this)},
bi:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
ez:function(a,b){delete a[b]},
cP:function(a,b){return this.bi(a,b)!=null},
bS:function(){var z=Object.create(null)
this.bZ(z,"<non-identifier-key>",z)
this.ez(z,"<non-identifier-key>")
return z},
$ise2:1},
hB:{"^":"a;a,b,0c,0d"},
e3:{"^":"hc;a,$ti",
gl:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.hC(z,z.r,this.$ti)
y.c=z.e
return y}},
hC:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.bl(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ln:{"^":"v:19;a",
$1:function(a){return this.a(a)}},
lo:{"^":"v:39;a",
$2:function(a,b){return this.a(a,b)}},
lp:{"^":"v:37;a",
$1:function(a){return this.a(H.T(a))}},
hv:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseg:1,
n:{
hw:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.i(new P.hm("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lh:function(a){return J.dX(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ba:function(a){return a},
aV:function(a,b,c){H.bV(b)
if(a>>>0!==a||a>=c)throw H.i(H.aW(b,a))},
kZ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.i(H.lg(a,b,c))
return b},
hZ:{"^":"m;",$isnd:1,"%":"DataView;ArrayBufferView;d1|f8|f9|hY|fa|fb|aS"},
d1:{"^":"hZ;",
gl:function(a){return a.length},
$isE:1,
$asE:I.dl},
hY:{"^":"f9;",
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
$ascl:function(){return[P.w]},
$asu:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aS:{"^":"fb;",
$ascl:function(){return[P.A]},
$asu:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]}},
mK:{"^":"aS;",
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mL:{"^":"aS;",
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mM:{"^":"aS;",
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mN:{"^":"aS;",
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mO:{"^":"aS;",
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mP:{"^":"aS;",
gl:function(a){return a.length},
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
i_:{"^":"aS;",
gl:function(a){return a.length},
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
bH:function(a,b,c){return new Uint8Array(a.subarray(b,H.kZ(b,c,a.length)))},
"%":";Uint8Array"},
f8:{"^":"d1+u;"},
f9:{"^":"f8+cl;"},
fa:{"^":"d1+u;"},
fb:{"^":"fa+cl;"}}],["","",,P,{"^":"",
jF:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l6()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.be(new P.jH(z),1)).observe(y,{childList:true})
return new P.jG(z,y,x)}else if(self.setImmediate!=null)return P.l7()
return P.l8()},
nj:[function(a){self.scheduleImmediate(H.be(new P.jI(H.d(a,{func:1,ret:-1})),0))},"$1","l6",4,0,10],
nk:[function(a){self.setImmediate(H.be(new P.jJ(H.d(a,{func:1,ret:-1})),0))},"$1","l7",4,0,10],
nl:[function(a){P.d9(C.m,H.d(a,{func:1,ret:-1}))},"$1","l8",4,0,10],
d9:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.h.a4(a.a,1000)
return P.kD(z<0?0:z,b)},
ey:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.b6]})
z=C.h.a4(a.a,1000)
return P.kE(z<0?0:z,b)},
l2:function(a,b){if(H.c9(a,{func:1,args:[P.a,P.av]}))return b.hG(a,null,P.a,P.av)
if(H.c9(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.cd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l1:function(){var z,y
for(;z=$.bb,z!=null;){$.bS=null
y=z.b
$.bb=y
if(y==null)$.bR=null
z.a.$0()}},
nt:[function(){$.dh=!0
try{P.l1()}finally{$.bS=null
$.dh=!1
if($.bb!=null)$.$get$dd().$1(P.fr())}},"$0","fr",0,0,3],
fm:function(a){var z=new P.f2(H.d(a,{func:1,ret:-1}))
if($.bb==null){$.bR=z
$.bb=z
if(!$.dh)$.$get$dd().$1(P.fr())}else{$.bR.b=z
$.bR=z}},
l5:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.bb
if(z==null){P.fm(a)
$.bS=$.bR
return}y=new P.f2(a)
x=$.bS
if(x==null){y.b=z
$.bS=y
$.bb=y}else{y.b=x.b
x.b=y
$.bS=y
if(y.b==null)$.bR=y}},
lB:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.P
if(C.j===y){P.cB(null,null,C.j,a)
return}y.toString
P.cB(null,null,y,H.d(y.c5(a),z))},
j4:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.P
if(y===C.j){y.toString
return P.d9(a,b)}return P.d9(a,H.d(y.c5(b),z))},
j5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b6]}
H.d(b,z)
y=$.P
if(y===C.j){y.toString
return P.ey(a,b)}x=y.d8(b,P.b6)
$.P.toString
return P.ey(a,H.d(x,z))},
cA:function(a,b,c,d,e){var z={}
z.a=d
P.l5(new P.l3(z,e))},
fk:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fl:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
l4:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cB:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c5(d):c.h1(d,-1)
P.fm(d)},
jH:{"^":"v:22;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jG:{"^":"v:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jI:{"^":"v:2;a",
$0:function(){this.a.$0()}},
jJ:{"^":"v:2;a",
$0:function(){this.a.$0()}},
fh:{"^":"a;a,0b,c",
el:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.be(new P.kG(this,b),0),a)
else throw H.i(P.aj("`setTimeout()` not found."))},
em:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.be(new P.kF(this,a,Date.now(),b),0),a)
else throw H.i(P.aj("Periodic timer."))},
$isb6:1,
n:{
kD:function(a,b){var z=new P.fh(!0,0)
z.el(a,b)
return z},
kE:function(a,b){var z=new P.fh(!1,0)
z.em(a,b)
return z}}},
kG:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kF:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ea(w,x)}z.c=y
this.d.$1(z)}},
b9:{"^":"a;0a,b,c,d,e,$ti",
ho:function(a){if(this.c!==6)return!0
return this.b.b.cv(H.d(this.d,{func:1,ret:P.a6,args:[P.a]}),a.a,P.a6,P.a)},
he:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c9(z,{func:1,args:[P.a,P.av]}))return H.dm(w.hL(z,a.a,a.b,null,y,P.av),x)
else return H.dm(w.cv(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aP:{"^":"a;d3:a<,b,0fk:c<,$ti",
dU:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.l2(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aP(0,$.P,[c])
w=b==null?1:3
this.cJ(new P.b9(x,w,a,b,[z,c]))
return x},
hQ:function(a,b){return this.dU(a,null,b)},
cJ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb9")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaP")
z=y.a
if(z<4){y.cJ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cB(null,null,z,H.d(new P.jX(this,a),{func:1,ret:-1}))}},
cY:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb9")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaP")
y=u.a
if(y<4){u.cY(a)
return}this.a=y
this.c=u.c}z.a=this.bk(a)
y=this.b
y.toString
P.cB(null,null,y,H.d(new P.k1(z,this),{func:1,ret:-1}))}},
bV:function(){var z=H.k(this.c,"$isb9")
this.c=null
return this.bk(z)},
bk:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cM:function(a){var z,y,x,w
z=H.z(this,0)
H.dm(a,{futureOr:1,type:z})
y=this.$ti
x=H.bd(a,"$isbp",y,"$asbp")
if(x){z=H.bd(a,"$isaP",y,null)
if(z)P.f4(a,this)
else P.jY(a,this)}else{w=this.bV()
H.C(a,z)
this.a=4
this.c=a
P.bO(this,w)}},
bM:[function(a,b){var z
H.k(b,"$isav")
z=this.bV()
this.a=8
this.c=new P.al(a,b)
P.bO(this,z)},function(a){return this.bM(a,null)},"hZ","$2","$1","gev",4,2,36],
$isbp:1,
n:{
jY:function(a,b){var z,y,x
b.a=1
try{a.dU(new P.jZ(b),new P.k_(b),null)}catch(x){z=H.aZ(x)
y=H.bg(x)
P.lB(new P.k0(b,z,y))}},
f4:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaP")
if(z>=4){y=b.bV()
b.a=a.a
b.c=a.c
P.bO(b,y)}else{y=H.k(b.c,"$isb9")
b.a=2
b.c=a
a.cY(y)}},
bO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cA(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bO(z.a,b)}y=z.a
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
if(p){H.k(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cA(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.k4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k3(x,b,r).$0()}else if((y&2)!==0)new P.k2(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbp){if(y.a>=4){n=H.k(t.c,"$isb9")
t.c=null
b=t.bk(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f4(y,t)
return}}m=b.b
n=H.k(m.c,"$isb9")
m.c=null
b=m.bk(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
jX:{"^":"v:2;a,b",
$0:function(){P.bO(this.a,this.b)}},
k1:{"^":"v:2;a,b",
$0:function(){P.bO(this.b,this.a.a)}},
jZ:{"^":"v:22;a",
$1:function(a){var z=this.a
z.a=0
z.cM(a)}},
k_:{"^":"v:35;a",
$2:function(a,b){this.a.bM(a,H.k(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
k0:{"^":"v:2;a,b,c",
$0:function(){this.a.bM(this.b,this.c)}},
k4:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dS(H.d(w.d,{func:1}),null)}catch(v){y=H.aZ(v)
x=H.bg(v)
if(this.d){w=H.k(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.K(z).$isbp){if(z instanceof P.aP&&z.gd3()>=4){if(z.gd3()===8){w=this.b
w.b=H.k(z.gfk(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hQ(new P.k5(t),null)
w.a=!1}}},
k5:{"^":"v:32;a",
$1:function(a){return this.a}},
k3:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cv(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aZ(t)
y=H.bg(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
k2:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isal")
w=this.c
if(w.ho(z)&&w.e!=null){v=this.b
v.b=w.he(z)
v.a=!1}}catch(u){y=H.aZ(u)
x=H.bg(u)
w=H.k(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
f2:{"^":"a;a,0b"},
d6:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aP(0,$.P,[P.A])
z.a=0
this.hl(new P.iP(z,this),!0,new P.iQ(z,y),y.gev())
return y}},
iP:{"^":"v;a,b",
$1:function(a){H.C(a,H.aH(this.b,"d6",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aH(this.b,"d6",0)]}}},
iQ:{"^":"v:2;a,b",
$0:function(){this.b.cM(this.a.a)}},
eq:{"^":"a;$ti"},
iO:{"^":"a;"},
b6:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa_:1},
kN:{"^":"a;",$isni:1},
l3:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ef()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
kp:{"^":"kN;",
hM:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fk(null,null,this,a,-1)}catch(x){z=H.aZ(x)
y=H.bg(x)
P.cA(null,null,this,z,H.k(y,"$isav"))}},
hN:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fl(null,null,this,a,b,-1,c)}catch(x){z=H.aZ(x)
y=H.bg(x)
P.cA(null,null,this,z,H.k(y,"$isav"))}},
h1:function(a,b){return new P.kr(this,H.d(a,{func:1,ret:b}),b)},
c5:function(a){return new P.kq(this,H.d(a,{func:1,ret:-1}))},
d8:function(a,b){return new P.ks(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dS:function(a,b){H.d(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fk(null,null,this,a,b)},
cv:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.P===C.j)return a.$1(b)
return P.fl(null,null,this,a,b,c,d)},
hL:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.P===C.j)return a.$2(b,c)
return P.l4(null,null,this,a,b,c,d,e,f)},
hG:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
kr:{"^":"v;a,b,c",
$0:function(){return this.a.dS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kq:{"^":"v:3;a,b",
$0:function(){return this.a.hM(this.b)}},
ks:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.hN(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hE:function(a,b,c){H.bV(a)
return H.t(H.li(a,new H.b1(0,0,[b,c])),"$ise2",[b,c],"$ase2")},
hD:function(a,b){return new H.b1(0,0,[a,b])},
hF:function(a,b,c,d){return new P.kb(0,0,[d])},
hr:function(a,b,c){var z,y
if(P.di(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bT()
C.a.h(y,a)
try{P.l0(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.er(b,H.lu(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cT:function(a,b,c){var z,y,x
if(P.di(a))return b+"..."+c
z=new P.c6(b)
y=$.$get$bT()
C.a.h(y,a)
try{x=z
x.a=P.er(x.gaH(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaH()+c
y=z.gaH()
return y.charCodeAt(0)==0?y:y},
di:function(a){var z,y
for(z=0;y=$.$get$bT(),z<y.length;++z)if(a===y[z])return!0
return!1},
l0:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.j(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.F();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e6:function(a){var z,y,x
z={}
if(P.di(a))return"{...}"
y=new P.c6("")
try{C.a.h($.$get$bT(),a)
x=y
x.a=x.gaH()+"{"
z.a=!0
J.fJ(a,new P.hK(z,y))
z=y
z.a=z.gaH()+"}"}finally{z=$.$get$bT()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaH()
return z.charCodeAt(0)==0?z:z},
kb:{"^":"k6;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){return P.f7(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.df()
this.b=z}return this.cK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.df()
this.c=y}return this.cK(y,b)}else return this.en(0,b)},
en:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.df()
this.d=z}y=this.cN(b)
x=z[y]
if(x==null)z[y]=[this.bL(b)]
else{if(this.cS(x,b)>=0)return!1
x.push(this.bL(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cZ(this.c,b)
else return this.fd(0,b)},
fd:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eD(z,b)
x=this.cS(y,b)
if(x<0)return!1
this.d5(y.splice(x,1)[0])
return!0},
cK:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$isde")!=null)return!1
a[b]=this.bL(b)
return!0},
cZ:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isde")
if(z==null)return!1
this.d5(z)
delete a[b]
return!0},
cL:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.de(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cL()
return z},
d5:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cL()},
cN:function(a){return J.aI(a)&0x3ffffff},
eD:function(a,b){return a[this.cN(b)]},
cS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].a,b))return y
return-1},
n:{
df:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
de:{"^":"a;a,0b,0c"},
kc:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.bl(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
f7:function(a,b,c){var z=new P.kc(a,b,[c])
z.c=a.e
return z}}},
k6:{"^":"iw;"},
cp:{"^":"kd;",$isf:1,$ise:1},
u:{"^":"a;$ti",
ga2:function(a){return new H.e4(a,this.gl(a),0,[H.bU(this,a,"u",0)])},
G:function(a,b){return this.j(a,b)},
hT:function(a,b){var z,y,x
z=H.c([],[H.bU(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.a6(z,y,this.j(a,y));++y}return z},
hS:function(a){return this.hT(a,!0)},
i:function(a){return P.cT(a,"[","]")}},
hJ:{"^":"ah;"},
hK:{"^":"v:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ah:{"^":"a;$ti",
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bU(this,a,"ah",0),H.bU(this,a,"ah",1)]})
for(z=J.bX(this.gaA(a));z.F();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.bi(this.gaA(a))},
i:function(a){return P.e6(a)},
$isa8:1},
iy:{"^":"a;$ti",
i:function(a){return P.cT(this,"{","}")},
G:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dw("index"))
if(b<0)H.q(P.ao(b,0,null,"index",null))
for(z=P.f7(this,this.r,H.z(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
$isf:1},
iw:{"^":"iy;"},
kd:{"^":"a+u;"}}],["","",,P,{"^":"",cM:{"^":"a;$ti"},dI:{"^":"iO;$ti"},he:{"^":"cM;",
$ascM:function(){return[P.p,[P.e,P.A]]}},jp:{"^":"he;a"},jq:{"^":"dI;",
h5:function(a,b,c){var z,y,x,w
z=a.length
P.el(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kM(0,0,x)
if(w.eB(a,b,z)!==z)w.d6(C.i.c9(a,z-1),0)
return C.J.bH(x,0,w.b)},
h4:function(a){return this.h5(a,0,null)},
$asdI:function(){return[P.p,[P.e,P.A]]}},kM:{"^":"a;a,b,c",
d6:function(a,b){var z,y,x,w,v
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
eB:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c9(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bh(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d6(w,C.i.bh(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hg:function(a){var z=J.K(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.b5(a)+"'"},
hG:function(a,b,c,d){var z,y
H.C(b,d)
z=J.ht(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a6(z,y,b)
return H.t(z,"$ise",[d],"$ase")},
hH:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga2(a);x.F();)C.a.h(y,H.C(x.gR(x),c))
if(b)return y
return H.t(J.bt(y),"$ise",z,"$ase")},
d7:function(a,b,c){var z,y
z=P.A
H.t(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.t(a,"$isb0",[z],"$asb0")
y=a.length
c=P.el(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.aj()
z=c<y}else z=!0
return H.ek(z?C.a.bH(a,b,c):a)}return P.iR(a,b,c)},
iR:function(a,b,c){var z,y,x
H.t(a,"$isf",[P.A],"$asf")
z=J.bX(a)
for(y=0;y<b;++y)if(!z.F())throw H.i(P.ao(b,0,y,null,null))
x=[]
for(;z.F();)x.push(z.gR(z))
return H.ek(x)},
im:function(a,b,c){return new H.hv(a,H.hw(a,!1,!0,!1))},
kL:function(a,b,c,d){var z,y,x,w,v,u
H.t(a,"$ise",[P.A],"$ase")
if(c===C.r){z=$.$get$fj().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.h4(H.C(b,H.aH(c,"cM",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ih(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hg(a)},
o:function(a){return new P.f3(a)},
dt:function(a){H.lz(a)},
a6:{"^":"a;"},
"+bool":0,
au:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.h.bl(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.h2(H.ig(this))
y=P.bY(H.id(this))
x=P.bY(H.i9(this))
w=P.bY(H.ia(this))
v=P.bY(H.ic(this))
u=P.bY(H.ie(this))
t=P.h3(H.ib(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
h2:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"S;"},
"+double":0,
b_:{"^":"a;a",
k:function(a,b){return new P.b_(C.h.a_(this.a*b))},
aj:function(a,b){return C.h.aj(this.a,H.k(b,"$isb_").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b_))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hb()
y=this.a
if(y<0)return"-"+new P.b_(0-y).i(0)
x=z.$1(C.h.a4(y,6e7)%60)
w=z.$1(C.h.a4(y,1e6)%60)
v=new P.ha().$1(y%1e6)
return""+C.h.a4(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dR:function(a,b,c,d,e,f){return new P.b_(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ha:{"^":"v:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hb:{"^":"v:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
ef:{"^":"a_;",
i:function(a){return"Throw of null."}},
aJ:{"^":"a_;a,b,c,d",
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbO()+y+x
if(!this.a)return w
v=this.gbN()
u=P.ck(this.b)
return w+v+": "+H.j(u)},
n:{
fL:function(a){return new P.aJ(!1,null,null,a)},
cd:function(a,b,c){return new P.aJ(!0,a,b,c)},
dw:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
cr:{"^":"aJ;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
el:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.i(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.i(P.ao(b,a,c,"end",f))
return b}return c}}},
hq:{"^":"aJ;e,l:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.fG(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
N:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.bi(b))
return new P.hq(b,z,!0,a,c,"Index out of range")}}},
jl:{"^":"a_;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
aj:function(a){return new P.jl(a)}}},
ji:{"^":"a_;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eV:function(a){return new P.ji(a)}}},
iL:{"^":"a_;a",
i:function(a){return"Bad state: "+this.a}},
fZ:{"^":"a_;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.ck(z))+"."},
n:{
bl:function(a){return new P.fZ(a)}}},
i5:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa_:1},
eo:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa_:1},
h1:{"^":"a_;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f3:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hm:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bI(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"S;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.ga2(this)
for(y=0;z.F();)++y
return y},
G:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dw("index"))
if(b<0)H.q(P.ao(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.F();){x=z.gR(z)
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
i:function(a){return P.hr(this,"(",")")}},
cU:{"^":"a;$ti"},
e:{"^":"a;$ti",$isf:1},
"+List":0,
a8:{"^":"a;$ti"},
J:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gX:function(a){return H.bz(this)},
i:function(a){return"Instance of '"+H.b5(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"a;"},
p:{"^":"a;",$iseg:1},
"+String":0,
c6:{"^":"a;aH:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
er:function(a,b,c){var z=J.bX(b)
if(!z.F())return a
if(c.length===0){do a+=H.j(z.gR(z))
while(z.F())}else{a+=H.j(z.gR(z))
for(;z.F();)a=a+c+H.j(z.gR(z))}return a}}}}],["","",,W,{"^":"",
cL:function(a,b){var z=document.createElement("canvas")
return z},
hd:function(a){H.k(a,"$isa7")
return"wheel"},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f6:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fo:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d8(a,b)},
bs:{"^":"a4;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lJ:{"^":"d4;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
lK:{"^":"m;0l:length=","%":"AccessibleNodeList"},
lL:{"^":"bs;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lM:{"^":"bs;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fQ:{"^":"m;","%":";Blob"},
cK:{"^":"bs;",
bG:function(a,b,c){if(c!=null)return a.getContext(b,P.la(c,null))
return a.getContext(b)},
e0:function(a,b){return this.bG(a,b,null)},
$iscK:1,
"%":"HTMLCanvasElement"},
dD:{"^":"m;",$isdD:1,"%":"CanvasRenderingContext2D"},
lS:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lU:{"^":"ci;0l:length=","%":"CSSPerspective"},
lV:{"^":"cP;0q:x=,0t:y=","%":"CSSPositionValue"},
lW:{"^":"ci;0q:x=,0t:y=","%":"CSSRotation"},
bm:{"^":"m;",$isbm:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lX:{"^":"ci;0q:x=,0t:y=","%":"CSSScale"},
lY:{"^":"jN;0l:length=",
e1:function(a,b){var z=a.getPropertyValue(this.er(a,b))
return z==null?"":z},
er:function(a,b){var z,y
z=$.$get$dJ()
y=z[b]
if(typeof y==="string")return y
y=this.fu(a,b)
z[b]=y
return y},
fu:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h4()+b
if(z in a)return z
return b},
gc6:function(a){return a.bottom},
gan:function(a){return a.height},
gaS:function(a){return a.left},
gb8:function(a){return a.right},
gbb:function(a){return a.top},
gar:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h0:{"^":"a;",
gaS:function(a){return this.e1(a,"left")}},
cP:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ci:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lZ:{"^":"cP;0l:length=","%":"CSSTransformValue"},
m_:{"^":"ci;0q:x=,0t:y=","%":"CSSTranslation"},
m0:{"^":"cP;0l:length=","%":"CSSUnparsedValue"},
m1:{"^":"m;0l:length=","%":"DataTransferItemList"},
m2:{"^":"m;0q:x=,0t:y=","%":"DeviceAcceleration"},
m3:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
m4:{"^":"h8;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
h8:{"^":"m;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
m5:{"^":"jP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.af,P.S]]},
$asu:function(){return[[P.af,P.S]]},
$isf:1,
$asf:function(){return[[P.af,P.S]]},
$ise:1,
$ase:function(){return[[P.af,P.S]]},
$asy:function(){return[[P.af,P.S]]},
"%":"ClientRectList|DOMRectList"},
h9:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gar(a))+" x "+H.j(this.gan(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bd(b,"$isaf",[P.S],"$asaf")
if(!z)return!1
z=J.cb(b)
return a.left===z.gaS(b)&&a.top===z.gbb(b)&&this.gar(a)===z.gar(b)&&this.gan(a)===z.gan(b)},
gX:function(a){return W.f6(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF)},
gc6:function(a){return a.bottom},
gan:function(a){return a.height},
gaS:function(a){return a.left},
gb8:function(a){return a.right},
gbb:function(a){return a.top},
gar:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isaf:1,
$asaf:function(){return[P.S]},
"%":";DOMRectReadOnly"},
m6:{"^":"jR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.p]},
$asu:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
$asy:function(){return[P.p]},
"%":"DOMStringList"},
m7:{"^":"m;0l:length=","%":"DOMTokenList"},
jM:{"^":"cp;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.k(z[b],"$isa4")},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.hS(this)
return new J.at(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a4]},
$asf:function(){return[W.a4]},
$ase:function(){return[W.a4]}},
a4:{"^":"L;",
gdc:function(a){return new W.jM(a,a.children)},
gbq:function(a){return P.ij(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.S)},
i:function(a){return a.localName},
$isa4:1,
"%":";Element"},
ac:{"^":"m;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"m;",
d7:["e5",function(a,b,c,d){H.d(c,{func:1,args:[W.ac]})
if(c!=null)this.eo(a,b,c,!1)}],
eo:function(a,b,c,d){return a.addEventListener(b,H.be(H.d(c,{func:1,args:[W.ac]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fc|fd|ff|fg"},
bo:{"^":"fQ;",$isbo:1,"%":"File"},
mq:{"^":"jW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"FileList"},
mr:{"^":"a7;0l:length=","%":"FileWriter"},
mu:{"^":"bs;0l:length=","%":"HTMLFormElement"},
bq:{"^":"m;",$isbq:1,"%":"Gamepad"},
mv:{"^":"d4;0q:x=,0t:y=","%":"Gyroscope"},
mw:{"^":"m;0l:length=","%":"History"},
mx:{"^":"k8;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.L]},
$asu:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cm:{"^":"m;0dh:data=",$iscm:1,"%":"ImageData"},
dW:{"^":"bs;",$isdW:1,"%":"HTMLImageElement"},
bu:{"^":"da;",$isbu:1,"%":"KeyboardEvent"},
mC:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
mD:{"^":"d4;0q:x=,0t:y=","%":"Magnetometer"},
mF:{"^":"m;0l:length=","%":"MediaList"},
mG:{"^":"a7;",
d7:function(a,b,c,d){H.d(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.e5(a,b,c,!1)},
"%":"MessagePort"},
mH:{"^":"ke;",
j:function(a,b){return P.aR(a.get(H.T(b)))},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gaA:function(a){var z=H.c([],[P.p])
this.O(a,new W.hV(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.p,null]},
$isa8:1,
$asa8:function(){return[P.p,null]},
"%":"MIDIInputMap"},
hV:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mI:{"^":"kf;",
j:function(a,b){return P.aR(a.get(H.T(b)))},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gaA:function(a){var z=H.c([],[P.p])
this.O(a,new W.hW(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.p,null]},
$isa8:1,
$asa8:function(){return[P.p,null]},
"%":"MIDIOutputMap"},
hW:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bv:{"^":"m;",$isbv:1,"%":"MimeType"},
mJ:{"^":"kh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"MimeTypeArray"},
aC:{"^":"da;",$isaC:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jL:{"^":"cp;a",
ga2:function(a){var z=this.a.childNodes
return new W.dT(z,z.length,-1,[H.bU(C.K,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asu:function(){return[W.L]},
$asf:function(){return[W.L]},
$ase:function(){return[W.L]}},
L:{"^":"a7;",
i:function(a){var z=a.nodeValue
return z==null?this.e6(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
i0:{"^":"kj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.L]},
$asu:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bx:{"^":"m;0l:length=",$isbx:1,"%":"Plugin"},
mT:{"^":"kn;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"PluginArray"},
mY:{"^":"kt;",
j:function(a,b){return P.aR(a.get(H.T(b)))},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gaA:function(a){var z=H.c([],[P.p])
this.O(a,new W.it(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.p,null]},
$isa8:1,
$asa8:function(){return[P.p,null]},
"%":"RTCStatsReport"},
it:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mZ:{"^":"bs;0l:length=","%":"HTMLSelectElement"},
d4:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bB:{"^":"a7;",$isbB:1,"%":"SourceBuffer"},
n_:{"^":"fd;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bB]},
$asu:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"SourceBufferList"},
bC:{"^":"m;",$isbC:1,"%":"SpeechGrammar"},
n0:{"^":"kv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bC]},
$asu:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"SpeechGrammarList"},
bD:{"^":"m;0l:length=",$isbD:1,"%":"SpeechRecognitionResult"},
n2:{"^":"ky;",
j:function(a,b){return a.getItem(H.T(b))},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.p,P.p]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaA:function(a){var z=H.c([],[P.p])
this.O(a,new W.iN(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.p,P.p]},
$isa8:1,
$asa8:function(){return[P.p,P.p]},
"%":"Storage"},
iN:{"^":"v:31;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bE:{"^":"m;",$isbE:1,"%":"CSSStyleSheet|StyleSheet"},
bF:{"^":"a7;",$isbF:1,"%":"TextTrack"},
bG:{"^":"a7;",$isbG:1,"%":"TextTrackCue|VTTCue"},
n7:{"^":"kC;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bG]},
$asu:function(){return[W.bG]},
$isf:1,
$asf:function(){return[W.bG]},
$ise:1,
$ase:function(){return[W.bG]},
$asy:function(){return[W.bG]},
"%":"TextTrackCueList"},
n8:{"^":"fg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bF]},
$asu:function(){return[W.bF]},
$isf:1,
$asf:function(){return[W.bF]},
$ise:1,
$ase:function(){return[W.bF]},
$asy:function(){return[W.bF]},
"%":"TextTrackList"},
n9:{"^":"m;0l:length=","%":"TimeRanges"},
bI:{"^":"m;",$isbI:1,"%":"Touch"},
b7:{"^":"da;",$isb7:1,"%":"TouchEvent"},
na:{"^":"kI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bI]},
$asu:function(){return[W.bI]},
$isf:1,
$asf:function(){return[W.bI]},
$ise:1,
$ase:function(){return[W.bI]},
$asy:function(){return[W.bI]},
"%":"TouchList"},
nb:{"^":"m;0l:length=","%":"TrackDefaultList"},
da:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ne:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
ng:{"^":"m;0q:x=","%":"VRStageBoundsPoint"},
nh:{"^":"a7;0l:length=","%":"VideoTrackList"},
bN:{"^":"aC;",
gh9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aj("deltaY is not supported"))},
gh8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aj("deltaX is not supported"))},
$isbN:1,
"%":"WheelEvent"},
jE:{"^":"a7;",
fg:function(a,b){return a.requestAnimationFrame(H.be(H.d(b,{func:1,ret:-1,args:[P.S]}),1))},
eA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nm:{"^":"kP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bm]},
$asu:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"CSSRuleList"},
nn:{"^":"h9;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bd(b,"$isaf",[P.S],"$asaf")
if(!z)return!1
z=J.cb(b)
return a.left===z.gaS(b)&&a.top===z.gbb(b)&&a.width===z.gar(b)&&a.height===z.gan(b)},
gX:function(a){return W.f6(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gan:function(a){return a.height},
gar:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
np:{"^":"kR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bq]},
$asu:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asy:function(){return[W.bq]},
"%":"GamepadList"},
nq:{"^":"kT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.L]},
$asu:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nr:{"^":"kV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bD]},
$asu:function(){return[W.bD]},
$isf:1,
$asf:function(){return[W.bD]},
$ise:1,
$ase:function(){return[W.bD]},
$asy:function(){return[W.bD]},
"%":"SpeechRecognitionResultList"},
ns:{"^":"kX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bE]},
$asu:function(){return[W.bE]},
$isf:1,
$asf:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$asy:function(){return[W.bE]},
"%":"StyleSheetList"},
jS:{"^":"d6;a,b,c,$ti",
hl:function(a,b,c,d){var z=H.z(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
no:{"^":"jS;a,b,c,$ti"},
jT:{"^":"eq;a,b,c,d,e,$ti",
fA:function(){var z=this.d
if(z!=null&&this.a<=0)J.fI(this.b,this.c,z,!1)},
n:{
Y:function(a,b,c,d,e){var z=c==null?null:W.fo(new W.jU(c),W.ac)
z=new W.jT(0,a,b,z,!1,[e])
z.fA()
return z}}},
jU:{"^":"v:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isac"))}},
y:{"^":"a;$ti",
ga2:function(a){return new W.dT(a,this.gl(a),-1,[H.bU(this,a,"y",0)])}},
dT:{"^":"a;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fH(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
jN:{"^":"m+h0;"},
jO:{"^":"m+u;"},
jP:{"^":"jO+y;"},
jQ:{"^":"m+u;"},
jR:{"^":"jQ+y;"},
jV:{"^":"m+u;"},
jW:{"^":"jV+y;"},
k7:{"^":"m+u;"},
k8:{"^":"k7+y;"},
ke:{"^":"m+ah;"},
kf:{"^":"m+ah;"},
kg:{"^":"m+u;"},
kh:{"^":"kg+y;"},
ki:{"^":"m+u;"},
kj:{"^":"ki+y;"},
km:{"^":"m+u;"},
kn:{"^":"km+y;"},
kt:{"^":"m+ah;"},
fc:{"^":"a7+u;"},
fd:{"^":"fc+y;"},
ku:{"^":"m+u;"},
kv:{"^":"ku+y;"},
ky:{"^":"m+ah;"},
kB:{"^":"m+u;"},
kC:{"^":"kB+y;"},
ff:{"^":"a7+u;"},
fg:{"^":"ff+y;"},
kH:{"^":"m+u;"},
kI:{"^":"kH+y;"},
kO:{"^":"m+u;"},
kP:{"^":"kO+y;"},
kQ:{"^":"m+u;"},
kR:{"^":"kQ+y;"},
kS:{"^":"m+u;"},
kT:{"^":"kS+y;"},
kU:{"^":"m+u;"},
kV:{"^":"kU+y;"},
kW:{"^":"m+u;"},
kX:{"^":"kW+y;"}}],["","",,P,{"^":"",
ld:function(a){var z,y
z=J.K(a)
if(!!z.$iscm){y=z.gdh(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fi(a.data,a.height,a.width)},
lc:function(a){if(a instanceof P.fi)return{data:a.a,height:a.b,width:a.c}
return a},
aR:function(a){var z,y,x,w,v
if(a==null)return
z=P.hD(P.p,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.T(y[w])
z.a6(0,v,a[v])}return z},
la:function(a,b){var z={}
a.O(0,new P.lb(z))
return z},
dP:function(){var z=$.dO
if(z==null){z=J.cG(window.navigator.userAgent,"Opera",0)
$.dO=z}return z},
h4:function(){var z,y
z=$.dL
if(z!=null)return z
y=$.dM
if(y==null){y=J.cG(window.navigator.userAgent,"Firefox",0)
$.dM=y}if(y)z="-moz-"
else{y=$.dN
if(y==null){y=!P.dP()&&J.cG(window.navigator.userAgent,"Trident/",0)
$.dN=y}if(y)z="-ms-"
else z=P.dP()?"-o-":"-webkit-"}$.dL=z
return z},
fi:{"^":"a;dh:a>,b,c",$iscm:1},
lb:{"^":"v:16;a",
$2:function(a,b){this.a[a]=b}},
hj:{"^":"cp;a,b",
gbR:function(){var z,y,x
z=this.b
y=H.aH(z,"u",0)
x=W.a4
return new H.hL(new H.jC(z,H.d(new P.hk(),{func:1,ret:P.a6,args:[y]}),[y]),H.d(new P.hl(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bi(this.gbR().a)},
j:function(a,b){var z=this.gbR()
return z.b.$1(J.dv(z.a,b))},
ga2:function(a){var z=P.hH(this.gbR(),!1,W.a4)
return new J.at(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a4]},
$asf:function(){return[W.a4]},
$ase:function(){return[W.a4]}},
hk:{"^":"v:29;",
$1:function(a){return!!J.K(H.k(a,"$isL")).$isa4}},
hl:{"^":"v:28;",
$1:function(a){return H.b(H.k(a,"$isL"),"$isa4")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
by:{"^":"a;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bd(b,"$isby",[P.S],null)
if(!z)return!1
z=this.a
y=J.cb(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gX:function(a){var z,y
z=J.aI(this.a)
y=J.aI(this.b)
return P.f5(P.bP(P.bP(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.z(this,0)
z=H.C(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.by(z,H.C(x*b,y),this.$ti)}},
ko:{"^":"a;$ti",
gb8:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.C(z+this.c,H.z(this,0))},
gc6:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bd(b,"$isaf",[P.S],"$asaf")
if(!z)return!1
z=this.a
y=J.cb(b)
x=y.gaS(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gb8(b)){if(typeof x!=="number")return x.E()
z=H.C(x+this.d,w)===y.gc6(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.aI(z)
x=this.b
w=J.aI(x)
if(typeof z!=="number")return z.E()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.C(x+this.d,v)
return P.f5(P.bP(P.bP(P.bP(P.bP(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
df:function(a,b){var z,y
H.t(b,"$isby",[P.S],"$asby")
z=b.a
y=this.a
if(typeof z!=="number")return z.e_()
if(typeof y!=="number")return H.r(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.e_()
if(typeof y!=="number")return H.r(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
af:{"^":"ko;aS:a>,bb:b>,ar:c>,an:d>,$ti",n:{
ij:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.aj()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.aj()
if(d<0)y=-d*0
else y=d
return new P.af(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",m8:{"^":"Q;0q:x=,0t:y=","%":"SVGFEBlendElement"},m9:{"^":"Q;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},ma:{"^":"Q;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},mb:{"^":"Q;0q:x=,0t:y=","%":"SVGFECompositeElement"},mc:{"^":"Q;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},md:{"^":"Q;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},me:{"^":"Q;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},mf:{"^":"Q;0q:x=,0t:y=","%":"SVGFEFloodElement"},mg:{"^":"Q;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},mh:{"^":"Q;0q:x=,0t:y=","%":"SVGFEImageElement"},mi:{"^":"Q;0q:x=,0t:y=","%":"SVGFEMergeElement"},mj:{"^":"Q;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},mk:{"^":"Q;0q:x=,0t:y=","%":"SVGFEOffsetElement"},ml:{"^":"Q;0q:x=,0t:y=","%":"SVGFEPointLightElement"},mm:{"^":"Q;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},mn:{"^":"Q;0q:x=,0t:y=","%":"SVGFESpotLightElement"},mo:{"^":"Q;0q:x=,0t:y=","%":"SVGFETileElement"},mp:{"^":"Q;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},ms:{"^":"Q;0q:x=,0t:y=","%":"SVGFilterElement"},mt:{"^":"br;0q:x=,0t:y=","%":"SVGForeignObjectElement"},ho:{"^":"br;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},br:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},my:{"^":"br;0q:x=,0t:y=","%":"SVGImageElement"},c2:{"^":"m;",$isc2:1,"%":"SVGLength"},mB:{"^":"ka;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$asu:function(){return[P.c2]},
$isf:1,
$asf:function(){return[P.c2]},
$ise:1,
$ase:function(){return[P.c2]},
$asy:function(){return[P.c2]},
"%":"SVGLengthList"},mE:{"^":"Q;0q:x=,0t:y=","%":"SVGMaskElement"},c5:{"^":"m;",$isc5:1,"%":"SVGNumber"},mQ:{"^":"kl;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$asu:function(){return[P.c5]},
$isf:1,
$asf:function(){return[P.c5]},
$ise:1,
$ase:function(){return[P.c5]},
$asy:function(){return[P.c5]},
"%":"SVGNumberList"},mS:{"^":"Q;0q:x=,0t:y=","%":"SVGPatternElement"},mU:{"^":"m;0q:x=,0t:y=","%":"SVGPoint"},mV:{"^":"m;0l:length=","%":"SVGPointList"},mW:{"^":"m;0q:x=,0t:y=","%":"SVGRect"},mX:{"^":"ho;0q:x=,0t:y=","%":"SVGRectElement"},n3:{"^":"kA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$asu:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
$asy:function(){return[P.p]},
"%":"SVGStringList"},Q:{"^":"a4;",
gdc:function(a){return new P.hj(a,new W.jL(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},n4:{"^":"br;0q:x=,0t:y=","%":"SVGSVGElement"},iS:{"^":"br;","%":"SVGTextPathElement;SVGTextContentElement"},n6:{"^":"iS;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c7:{"^":"m;",$isc7:1,"%":"SVGTransform"},nc:{"^":"kK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$asu:function(){return[P.c7]},
$isf:1,
$asf:function(){return[P.c7]},
$ise:1,
$ase:function(){return[P.c7]},
$asy:function(){return[P.c7]},
"%":"SVGTransformList"},nf:{"^":"br;0q:x=,0t:y=","%":"SVGUseElement"},k9:{"^":"m+u;"},ka:{"^":"k9+y;"},kk:{"^":"m+u;"},kl:{"^":"kk+y;"},kz:{"^":"m+u;"},kA:{"^":"kz+y;"},kJ:{"^":"m+u;"},kK:{"^":"kJ+y;"}}],["","",,P,{"^":"",lN:{"^":"m;0l:length=","%":"AudioBuffer"},lO:{"^":"jK;",
j:function(a,b){return P.aR(a.get(H.T(b)))},
O:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aR(y.value[1]))}},
gaA:function(a){var z=H.c([],[P.p])
this.O(a,new P.fN(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.p,null]},
$isa8:1,
$asa8:function(){return[P.p,null]},
"%":"AudioParamMap"},fN:{"^":"v:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lP:{"^":"a7;0l:length=","%":"AudioTrackList"},fP:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mR:{"^":"fP;0l:length=","%":"OfflineAudioContext"},jK:{"^":"m+ah;"}}],["","",,P,{"^":"",d3:{"^":"m;",
dT:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$iscm&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.lc(g))
return}if(!!y.$isdW&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.i(P.fL("Incorrect number or type of arguments"))},
hO:function(a,b,c,d,e,f,g){return this.dT(a,b,c,d,e,f,g,null,null,null)},
$isd3:1,
"%":"WebGLRenderingContext"},iT:{"^":"m;",$isiT:1,"%":"WebGLTexture"},jg:{"^":"m;",$isjg:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",n1:{"^":"kx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return P.aR(a.item(b))},
G:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.a8,,,]]},
$isf:1,
$asf:function(){return[[P.a8,,,]]},
$ise:1,
$ase:function(){return[[P.a8,,,]]},
$asy:function(){return[[P.a8,,,]]},
"%":"SQLResultSetRowList"},kw:{"^":"m+u;"},kx:{"^":"kw+y;"}}],["","",,O,{"^":"",am:{"^":"a;0a,0b,0c,0d,$ti",
bf:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cA:function(a,b,c){var z=H.aH(this,"am",0)
H.d(b,{func:1,ret:P.a6,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.A,[P.f,z]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aD:function(a,b){return this.cA(a,null,b)},
cX:function(a){var z
H.t(a,"$isf",[H.aH(this,"am",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cV:function(a,b){var z
H.t(b,"$isf",[H.aH(this,"am",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.at(z,z.length,0,[H.z(z,0)])},
G:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aH(this,"am",0)
H.C(b,z)
z=[z]
if(this.cX(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cV(x,H.c([b],z))}},
c0:function(a,b){var z,y
H.t(b,"$isf",[H.aH(this,"am",0)],"$asf")
if(this.cX(b)){z=this.a
y=z.length
C.a.c0(z,b)
this.cV(y,b)}},
$isf:1,
n:{
cg:function(a){var z=new O.am([a])
z.bf(a)
return z}}},d_:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
eg:function(a){var z=this.b
if(!(z==null))z.w(a)},
aE:function(){return this.eg(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gcm(z)
else return V.aA()},
bE:function(a){var z=this.a
if(a==null)C.a.h(z,V.aA())
else C.a.h(z,a)
this.aE()},
aB:function(){var z=this.a
if(z.length>0){z.pop()
this.aE()}}}}],["","",,E,{"^":"",cH:{"^":"a;"},aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbe:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.d(this.gdR(),{func:1,ret:-1,args:[D.l]})
C.a.H(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.d(this.gdR(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.B("shape",z,this.c,this,[F.em])
w.b=!0
this.ai(w)}},
sb3:function(a){var z,y,x,w
if(!J.H(this.r,a)){z=this.r
if(z!=null){y=z.gp()
y.toString
x=H.d(this.gdQ(),{func:1,ret:-1,args:[D.l]})
C.a.H(y.a,x)}if(a!=null){y=a.gp()
y.toString
x=H.d(this.gdQ(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.B("mover",z,a,this,[U.ad])
w.b=!0
this.ai(w)}},
a9:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aT(0,b,this):null
if(!J.H(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ai])
w.b=!0
this.ai(w)}for(z=this.y.a,z=new J.at(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a9(0,b)},
a5:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV(z))
else C.a.h(z.a,y.k(0,z.gV(z)))
z.aE()
a.cs(this.f)
z=a.dy
x=(z&&C.a).gcm(z)
if(x!=null&&this.d!=null)x.b7(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a5(a)
a.cq()
a.dx.aB()},
gp:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
ai:function(a){var z=this.z
if(!(z==null))z.w(a)},
Z:function(){return this.ai(null)},
hw:[function(a){H.k(a,"$isl")
this.e=null
this.ai(a)},function(){return this.hw(null)},"iL","$1","$0","gdR",0,2,0],
hv:[function(a){this.ai(H.k(a,"$isl"))},function(){return this.hv(null)},"iK","$1","$0","gdQ",0,2,0],
ht:[function(a){this.ai(H.k(a,"$isl"))},function(){return this.ht(null)},"iI","$1","$0","gdP",0,2,0],
iH:[function(a,b){var z,y,x,w,v,u,t
H.t(b,"$isf",[E.aK],"$asf")
for(z=b.length,y=this.gdP(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.aL()
t.a=H.c([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.Z()},"$2","ghs",8,0,7],
iJ:[function(a,b){var z,y,x,w,v,u,t
H.t(b,"$isf",[E.aK],"$asf")
for(z=b.length,y=this.gdP(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.aL()
t.a=H.c([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.d(y,x)
C.a.H(t.a,y)}}this.Z()},"$2","ghu",8,0,7],
$isaD:1,
n:{
cQ:function(a,b,c,d,e,f){var z,y
z=new E.aK()
z.a=d
z.b=!0
y=O.cg(E.aK)
z.y=y
y.aD(z.ghs(),z.ghu())
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
z.sbe(0,e)
z.sb3(c)
return z}}},io:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ec:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.au(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d_()
y=[V.ai]
z.a=H.c([],y)
x=z.gp()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.d(new E.iq(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d_()
z.a=H.c([],y)
v=z.gp()
v.toString
x=H.d(new E.ir(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d_()
z.a=H.c([],y)
y=z.gp()
y.toString
w=H.d(new E.is(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.aU])
this.dy=z
C.a.h(z,null)
this.fr=new H.b1(0,0,[P.p,A.bA])},
ghF:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.k(0,y.gV(y))
this.z=y
z=y}return z},
gcr:function(){var z,y
z=this.ch
if(z==null){z=this.ghF()
y=this.dx
y=z.k(0,y.gV(y))
this.ch=y
z=y}return z},
gdW:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gV(z)
y=this.dx
y=z.k(0,y.gV(y))
this.cx=y
z=y}return z},
cs:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcm(z):a;(z&&C.a).h(z,y)},
cq:function(){var z=this.dy
if(z.length>1)z.pop()},
aW:function(a){var z=a.b
if(z.length===0)throw H.i(P.o("May not cache a shader with no name."))
if(this.fr.de(0,z))throw H.i(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a6(0,z,a)},
n:{
ip:function(a,b){var z=new E.io(a,b)
z.ec(a,b)
return z}}},iq:{"^":"v:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},ir:{"^":"v:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},is:{"^":"v:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},j1:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
ei:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hJ()},function(){return this.ei(null)},"eh","$1","$0","gcF",0,2,0],
ghd:function(){var z,y,x
z=Date.now()
y=C.h.a4(P.dR(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.au(z,!1)
return x/y},
d_:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.r(z)
x=C.c.cj(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.c.cj(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hJ:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.j3(this),{func:1,ret:-1,args:[P.S]})
C.u.eA(z)
C.u.fg(z,W.fo(y,P.S))}},
hI:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d_()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.au(w,!1)
x.y=P.dR(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aE()
w=x.db
C.a.sl(w.a,0)
w.aE()
w=x.dx
C.a.sl(w.a,0)
w.aE()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a5(this.e)}}catch(v){z=H.aZ(v)
y=H.bg(v)
P.dt("Error: "+H.j(z))
P.dt("Stack: "+H.j(y))
throw H.i(z)}},
n:{
j2:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscK)return E.ex(a,!0,!0,!0,!1)
y=W.cL(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdc(a).h(0,y)
w=E.ex(y,!0,!0,!0,!1)
w.a=a
return w},
ex:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.j1()
y=P.hE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.p,null)
x=C.k.bG(a,"webgl",y)
x=H.k(x==null?C.k.bG(a,"experimental-webgl",y):x,"$isd3")
if(x==null)H.q(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ip(x,a)
w=new T.iX(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jm(a)
v=new X.hy()
v.c=new X.aB(!1,!1,!1)
v.d=P.hF(null,null,null,P.A)
w.b=v
v=new X.hX(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hI(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j7(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eq,P.a]])
w.z=v
u=document
t=W.aC
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.d(w.geR(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.d(w.geW(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.d(w.geO(),q),!1,r))
v=w.z
p=W.bu
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.d(w.geY(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.d(w.geX(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.d(w.gf0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.d(w.gf2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.d(w.gf1(),s),!1,t))
p=w.z
o=W.bN;(p&&C.a).h(p,W.Y(a,H.T(W.hd(a)),H.d(w.gf3(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.d(w.geS(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.d(w.geT(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.d(w.gf4(),q),!1,r))
r=w.z
q=W.b7
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.d(w.gfc(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.d(w.gfa(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.d(w.gfb(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.au(Date.now(),!1)
z.ch=0
z.d_()
return z}}},j3:{"^":"v:40;a",
$1:function(a){var z
H.ly(a)
z=this.a
if(z.z){z.z=!1
z.hI()}}}}],["","",,Z,{"^":"",f1:{"^":"a;a,b",n:{
dc:function(a,b,c){var z
H.t(c,"$ise",[P.A],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.ba(c)),35044)
a.bindBuffer(b,null)
return new Z.f1(b,z)}}},dB:{"^":"cH;a,b,c,d,e",
J:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aZ(y)
x=P.o('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.j(z))
throw H.i(x)}},
i:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},c8:{"^":"a;a",$islQ:1},bk:{"^":"a;a,0b,c,d",
a1:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
J:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].J(a)},
a3:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a5:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.p]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$isn5:1},cn:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b5(this.c)+"'")+"]"}},aq:{"^":"a;a",
gcC:function(a){var z,y
z=this.a
y=(z&$.$get$a2().a)!==0?3:0
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$ak().a)!==0)y+=2
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$bL().a)!==0)y+=3
if((z&$.$get$bM().a)!==0)y+=4
if((z&$.$get$b8().a)!==0)++y
return(z&$.$get$aO().a)!==0?y+4:y},
h0:function(a){var z,y,x
z=$.$get$a2()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ak()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b8()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f0()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aq))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.p])
y=this.a
if((y&$.$get$a2().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ak().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$ay().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bL().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bM().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b8().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
n:{
ar:function(a){return new Z.aq(a)}}}}],["","",,D,{"^":"",dE:{"^":"a;"},aL:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.O(y,new D.hh(z))
return x!==0},
di:function(){return this.w(null)},
hK:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
ap:function(a){return this.hK(a,!0,!1)},
n:{
D:function(){var z=new D.aL()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},hh:{"^":"v:27;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bZ:{"^":"l;c,d,a,0b,$ti"},c_:{"^":"l;c,d,a,0b,$ti"},B:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dC:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"lR<"}},e0:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e0))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},e1:{"^":"l;c,a,0b"},hy:{"^":"a;0a,0b,0c,0d",
hC:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.e1(a,this)
y.b=!0
return z.w(y)},
hy:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.e1(a,this)
y.b=!0
return z.w(y)}},e5:{"^":"cq;x,y,c,d,e,a,0b"},hI:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
au:function(a,b){var z,y,x,w,v,u,t,s
z=new P.au(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaM()
s=new X.c4(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cp:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.au(a,b))
return!0},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.e3()
if(typeof z!=="number")return z.dY()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.au(a,b))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.au(a,b))
return!0},
hD:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaM()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.d0(new V.W(v*u,t*s),y,x,new P.au(w,!1),this)
w.b=!0
z.w(w)
return!0},
f_:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.au(Date.now(),!1)
y=this.f
x=new X.e5(c,a,this.a.gaM(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.O(0,0)}},aB:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
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
return z+(this.c?"Shift+":"")}},c4:{"^":"cq;x,y,z,Q,ch,c,d,e,a,0b"},hX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bP:function(a,b,c){var z,y,x
z=new P.au(Date.now(),!1)
y=this.a.gaM()
x=new X.c4(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cp:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bP(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.e3()
if(typeof z!=="number")return z.dY()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bP(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bP(a,b,!1))
return!0},
hE:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaM()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.d0(new V.W(w*v,u*t),y,b,new P.au(x,!1),this)
x.b=!0
z.w(x)
return!0}},d0:{"^":"cq;x,c,d,e,a,0b"},cq:{"^":"l;"},eB:{"^":"cq;x,y,z,Q,ch,c,d,e,a,0b"},j7:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
au:function(a,b){var z,y,x,w
H.t(a,"$ise",[V.O],"$ase")
z=new P.au(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaM()
w=new X.eB(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hB:function(a){var z
H.t(a,"$ise",[V.O],"$ase")
z=this.b
if(z==null)return!1
z.w(this.au(a,!0))
return!0},
hz:function(a){var z
H.t(a,"$ise",[V.O],"$ase")
z=this.c
if(z==null)return!1
z.w(this.au(a,!0))
return!0},
hA:function(a){var z
H.t(a,"$ise",[V.O],"$ase")
z=this.d
if(z==null)return!1
z.w(this.au(a,!1))
return!0}},jm:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaM:function(){var z=this.a
return V.aT(0,0,(z&&C.k).gbq(z).c,C.k.gbq(z).d)},
cQ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e0(z,new X.aB(y,a.altKey,a.shiftKey))},
aK:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
c_:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
av:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.P()
v=z.top
if(typeof x!=="number")return x.P()
return new V.O(y-w,x-v)},
aV:function(a){return new V.W(a.movementX,a.movementY)},
bU:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.a_(u.pageX)
C.c.a_(u.pageY)
s=z.left
C.c.a_(u.pageX)
C.a.h(y,new V.O(t-s,C.c.a_(u.pageY)-z.top))}return y},
as:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dC(z,new X.aB(y,a.altKey,a.shiftKey))},
ii:[function(a){this.f=!0},"$1","geW",4,0,4],
i8:[function(a){this.f=!1},"$1","geO",4,0,4],
ib:[function(a){if(this.f)a.preventDefault()},"$1","geR",4,0,4],
ik:[function(a){var z
H.k(a,"$isbu")
if(!this.f)return
z=this.cQ(a)
if(this.b.hC(z))a.preventDefault()},"$1","geY",4,0,24],
ij:[function(a){var z
H.k(a,"$isbu")
if(!this.f)return
z=this.cQ(a)
if(this.b.hy(z))a.preventDefault()},"$1","geX",4,0,24],
im:[function(a){var z,y,x,w
H.k(a,"$isaC")
z=this.a
z.focus()
this.f=!0
this.aK(a)
if(this.x){y=this.as(a)
x=this.aV(a)
if(this.d.cp(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.as(a)
w=this.av(a)
if(this.c.cp(y,w))a.preventDefault()},"$1","gf0",4,0,5],
ip:[function(a){var z,y,x
H.k(a,"$isaC")
this.aK(a)
z=this.as(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gf2",4,0,5],
ie:[function(a){var z,y,x,w
H.k(a,"$isaC")
z=this.a
if(!(z&&C.k).gbq(z).df(0,new P.by(a.clientX,a.clientY,[P.S]))){this.aK(a)
y=this.as(a)
if(this.x){x=this.aV(a)
if(this.d.b5(y,x))a.preventDefault()
return}if(this.r)return
w=this.av(a)
if(this.c.b5(y,w))a.preventDefault()}},"$1","geT",4,0,5],
io:[function(a){var z,y,x
H.k(a,"$isaC")
this.aK(a)
z=this.as(a)
if(this.x){y=this.aV(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gf1",4,0,5],
ic:[function(a){var z,y,x,w
H.k(a,"$isaC")
z=this.a
if(!(z&&C.k).gbq(z).df(0,new P.by(a.clientX,a.clientY,[P.S]))){this.aK(a)
y=this.as(a)
if(this.x){x=this.aV(a)
if(this.d.b4(y,x))a.preventDefault()
return}if(this.r)return
w=this.av(a)
if(this.c.b4(y,w))a.preventDefault()}},"$1","geS",4,0,5],
iq:[function(a){var z,y
H.k(a,"$isbN")
this.aK(a)
z=new V.W((a&&C.t).gh8(a),C.t.gh9(a)).A(0,180)
if(this.x){if(this.d.hD(z))a.preventDefault()
return}if(this.r)return
y=this.av(a)
if(this.c.hE(z,y))a.preventDefault()},"$1","gf3",4,0,25],
ir:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.as(this.y)
v=this.av(this.y)
this.d.f_(w,v,x)}},"$1","gf4",4,0,4],
iz:[function(a){var z
H.k(a,"$isb7")
this.a.focus()
this.f=!0
this.c_(a)
z=this.bU(a)
if(this.e.hB(z))a.preventDefault()},"$1","gfc",4,0,11],
ix:[function(a){var z
H.k(a,"$isb7")
this.c_(a)
z=this.bU(a)
if(this.e.hz(z))a.preventDefault()},"$1","gfa",4,0,11],
iy:[function(a){var z
H.k(a,"$isb7")
this.c_(a)
z=this.bU(a)
if(this.e.hA(z))a.preventDefault()},"$1","gfb",4,0,11]}}],["","",,D,{"^":"",cj:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
aF:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aF(null)},"hW","$1","$0","gej",0,2,0],
$isX:1,
$isaD:1},X:{"^":"a;",$isaD:1},hz:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
aF:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eZ:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.eZ(null)},"il","$1","$0","gcW",0,2,0],
is:[function(a){var z,y,x
H.t(a,"$isf",[D.X],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ew(x))return!1}return!0},"$1","gf5",4,0,34],
i5:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isX")
if(t instanceof D.cj)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aL()
s.a=H.c([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.h(s.a,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","geL",8,0,23],
iu:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isX")
if(t instanceof D.cj)C.a.H(this.e,t)
s=t.d
if(s==null){s=new D.aL()
s.a=H.c([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.H(s.a,x)}z=new D.c_(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gf7",8,0,23],
ew:function(a){var z=C.a.aw(this.e,a)
return z},
$asf:function(){return[D.X]},
$asam:function(){return[D.X]}},i8:{"^":"a;",$isX:1,$isaD:1},iK:{"^":"a;",$isX:1,$isaD:1},iZ:{"^":"a;",$isX:1,$isaD:1},j_:{"^":"a;",$isX:1,$isaD:1},j0:{"^":"a;",$isX:1,$isaD:1}}],["","",,V,{"^":"",
lT:[function(a,b){if(typeof b!=="number")return b.P()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hU",8,0,26],
lI:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.e2(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.c.dV($.n.$2(a,0)?0:a,b),c+b+1)},
bf:function(a,b,c){var z,y,x,w,v,u
H.t(a,"$ise",[P.w],"$ase")
z=H.c([],[P.p])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.a6(z,u,C.i.ag(z[u],x))}return z},
bW:function(a,b){return C.c.hR(Math.pow(b,C.z.cj(Math.log(H.l9(a))/Math.log(b))))},
U:{"^":"a;a,b,c",
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
return new V.U(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
ab:{"^":"a;a,b,c,d",
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
return new V.ab(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
b3:{"^":"a;a,b,c,d,e,f,r,x,y",
S:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isb3")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.c.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.c.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.c.k(t,s)
q=a5.b
p=C.c.k(z,q)
o=a5.e
n=C.c.k(w,o)
m=a5.x
l=C.c.k(t,m)
k=a5.c
z=C.c.k(z,k)
j=a5.f
w=C.c.k(w,j)
i=a5.y
t=C.c.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.c.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.c.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.c.k(d,s)
b=C.c.k(h,q)
a=C.c.k(f,o)
a0=C.c.k(d,m)
h=C.c.k(h,k)
f=C.c.k(f,j)
d=C.c.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.c.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.c.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.b3(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.k(a3,s),C.c.k(a1,q)+C.c.k(a2,o)+C.c.k(a3,m),C.c.k(a1,k)+C.c.k(a2,j)+C.c.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
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
z=[P.w]
y=V.bf(H.c([this.a,this.d,this.r],z),3,0)
x=V.bf(H.c([this.b,this.e,this.x],z),3,0)
w=V.bf(H.c([this.c,this.f,this.y],z),3,0)
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
ai:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
S:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cl:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.r(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.r(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.r(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.r(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.r(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.r(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.r(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.r(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aA()
a3=1/a2
a4=-w
a5=-i
return V.aM((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isai")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.r(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.r(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aM(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.r(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.r(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.r(l)
return new V.V(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
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
i:function(a){return this.L()},
dH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bf(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bf(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bf(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bf(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
B:function(a){return this.dH(a,3,0)},
L:function(){return this.dH("",3,0)},
n:{
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aA:function(){return V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eb:function(a,b,c){return V.aM(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ea:function(a,b,c,d){return V.aM(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
e9:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.C(c)))
y=b.ax(z)
x=y.A(0,Math.sqrt(y.C(y)))
w=z.ax(x)
v=new V.G(a.a,a.b,a.c)
return V.aM(x.a,w.a,z.a,x.N(0).C(v),x.b,w.b,z.b,w.N(0).C(v),x.c,w.c,z.c,z.N(0).C(v),0,0,0,1)}}},
O:{"^":"a;q:a>,t:b>",
P:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
V:{"^":"a;q:a>,t:b>,c",
E:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
b4:{"^":"a;q:a>,t:b>,c,d",
k:function(a,b){return new V.b4(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
ct:{"^":"a;q:a>,t:b>,c,d",
gao:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ct))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"},
n:{
aT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ct(a,b,c,d)}}},
W:{"^":"a;a,b",
hj:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,21],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.r(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.W(z*b,y*b)},
A:function(a,b){var z,y
if($.n.$2(b,0))return new V.W(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.W(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
hj:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,21],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.G(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dJ:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fX:{"^":"dE;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.lI(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.w(a)},
sdX:function(a,b){},
sdM:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.B("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.T(z)}},
sdO:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.B("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.T(z)}},
sab:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.w])
z.b=!0
this.T(z)}},
sdN:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.T(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.w])
z.b=!0
this.T(z)}},
sdg:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.w])
z.b=!0
this.T(z)}},
a9:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sab(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
n:{
dG:function(){var z=new U.fX()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dH:{"^":"ad;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aT:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
n:{
cN:function(a){var z=new U.dH()
z.a=a
return z}}},dU:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.T(null)},"aG","$1","$0","gbg",0,2,0],
hX:[function(a,b){var z,y,x,w,v,u,t
z=U.ad
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gbg(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gek",8,0,20],
it:[function(a,b){var z,y,x,w,v,u,t
z=U.ad
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gbg(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.H(t.a,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gf6",8,0,20],
aT:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.aj()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.at(z,z.length,0,[H.z(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.aT(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.aA():x
z=this.e
if(!(z==null))z.ap(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dU))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.H(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.ad]},
$asam:function(){return[U.ad]},
$isad:1,
n:{
dV:function(a){var z=new U.dU()
z.bf(U.ad)
z.aD(z.gek(),z.gf6())
z.e=null
z.f=V.aA()
z.r=0
return z}}},ad:{"^":"dE;"},jn:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.T(null)},"aG","$1","$0","gbg",0,2,0],
c1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.D()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.l]}
x=H.d(this.geH(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.d(this.geI(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.D()
x.c=z}x=H.d(this.geJ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.d(this.geE(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.d(this.geF(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.d(this.gfz(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.d(this.gfw(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.d(this.gfv(),y)
C.a.h(z.a,y)
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.W(z,y)},
i1:[function(a){a=H.b(H.k(a,"$isl"),"$isc4")
if(!J.H(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geH",4,0,1],
i2:[function(a){var z,y,x,w,v,u,t
a=H.b(H.k(a,"$isl"),"$isc4")
if(!this.cx)return
if(this.ch){z=a.d.P(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.P(0,a.y)
z=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.P(0,a.y)
w=this.al(new V.W(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sab(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.P(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gao()))}this.aG()},"$1","geI",4,0,1],
i3:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sY(-y*10*z)
this.aG()}},"$1","geJ",4,0,1],
i_:[function(a){if(H.b(H.k(a,"$isl"),"$ise5").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geE",4,0,1],
i0:[function(a){var z,y,x,w,v,u,t
a=H.b(H.k(a,"$isl"),"$isc4")
if(!J.H(this.d,a.x.b))return
z=a.c
y=a.d
x=y.P(0,a.y)
w=this.al(new V.W(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sab(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.P(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gao()))
this.aG()},"$1","geF",4,0,1],
iD:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfz",4,0,1],
iC:[function(a){var z,y,x,w,v,u,t
a=H.b(H.k(a,"$isl"),"$iseB")
if(!this.cx)return
if(this.ch){z=a.d.P(0,a.y)
z=new V.W(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.P(0,a.y)
z=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.P(0,a.y)
w=this.al(new V.W(x.a,x.b).k(0,2).A(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sab(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.P(0,a.z)
this.dx=this.al(new V.W(y.a,y.b).k(0,2).A(0,z.gao()))}this.aG()},"$1","gfw",4,0,1],
iB:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sY(-y*10*z)
this.aG()}},"$1","gfv",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.aj()
if(z<y){this.dy=y
x=b.y
this.c.a9(0,x)
this.b.a9(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aM(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aM(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isad:1,
n:{
eX:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jn()
y=U.dG()
y.sdX(0,!0)
y.sdM(6.283185307179586)
y.sdO(0)
y.sab(0,0)
y.sdN(100)
y.sY(0)
y.sdg(0.5)
z.b=y
y=y.gp()
y.toString
x=H.d(z.gbg(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)
y=U.dG()
y.sdX(0,!0)
y.sdM(6.283185307179586)
y.sdO(0)
y.sab(0,0)
y.sdN(100)
y.sY(0)
y.sdg(0.5)
z.c=y
C.a.h(y.gp().a,x)
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
w=new X.aB(b,!1,!1)
v=z.d
z.d=w
y=new D.B("modifiers",v,w,z,[X.aB])
y.b=!0
z.T(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.B("invertX",y,!1,z,[P.a6])
y.b=!0
z.T(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.B("invertY",y,!1,z,[P.a6])
y.b=!0
z.T(y)}z.c1(c)
return z}}},jo:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.w(a)},
c1:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.d(this.geK(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
i4:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.H(this.b,this.a.b.c))return
H.b(a,"$isd0")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.w])
z.b=!0
this.T(z)}},"$1","geK",4,0,1],
aT:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ea(x,x,x,1)}return this.f},
$isad:1,
n:{
eY:function(a,b,c,d,e){var z,y,x
z=new U.jo()
z.c=0.01
z.d=0
z.e=0
y=new X.aB(b,!1,!1)
z.b=y
x=new D.B("modifiers",null,y,z,[X.aB])
x.b=!0
z.T(x)
z.c1(c)
return z}}}}],["","",,M,{"^":"",fY:{"^":"am;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
a0:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a0(null)},"cG","$1","$0","gU",0,2,0],
iv:[function(a,b){var z,y,x,w,v,u,t
z=M.aE
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gf8",8,0,18],
iw:[function(a,b){var z,y,x,w,v,u,t
z=M.aE
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.d(x,w)
C.a.H(t.a,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gf9",8,0,18],
a5:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.at(z,z.length,0,[H.z(z,0)]);z.F();){y=z.d
if(!(y==null))y.a5(a)}this.e=!1},
$asf:function(){return[M.aE]},
$asam:function(){return[M.aE]},
$isaE:1},h_:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
a0:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a0(null)},"cG","$1","$0","gU",0,2,0],
saY:function(a){var z,y,x
if(a==null)a=new X.hp()
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.cf])
z.b=!0
this.a0(z)}},
saC:function(a,b){var z,y,x
if(b==null)b=X.cR(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.cu])
z.b=!0
this.a0(z)}},
saq:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.aU])
z.b=!0
this.a0(z)}},
a5:function(a){var z
a.cs(this.c)
this.b.J(a)
this.a.J(a)
z=this.c
if(z!=null)z.a9(0,a)
this.d.a9(0,a)
this.d.a5(a)
this.a.a3(a)
this.b.a3(a)
a.cq()},
$isaE:1,
n:{
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.h_()
z.saY(a)
z.saC(0,b)
z.saq(c)
y=E.cQ(null,!0,null,"",null,null)
x=F.d5()
w=x.a
v=new V.G(-1,-1,1)
v=v.A(0,Math.sqrt(v.C(v)))
u=w.bn(new V.b4(1,2,4,6),new V.ab(1,0,0,1),new V.V(-1,-1,0),new V.O(0,1),v,null)
w=x.a
v=new V.G(1,-1,1)
v=v.A(0,Math.sqrt(v.C(v)))
t=w.bn(new V.b4(0,3,4,6),new V.ab(0,0,1,1),new V.V(1,-1,0),new V.O(1,1),v,null)
w=x.a
v=new V.G(1,1,1)
v=v.A(0,Math.sqrt(v.C(v)))
s=w.bn(new V.b4(0,2,5,6),new V.ab(0,1,0,1),new V.V(1,1,0),new V.O(1,0),v,null)
w=x.a
v=new V.G(-1,1,1)
v=v.A(0,Math.sqrt(v.C(v)))
r=w.bn(new V.b4(0,2,4,7),new V.ab(1,1,0,1),new V.V(-1,1,0),new V.O(0,0),v,null)
x.d.fX(H.c([u,t,s,r],[F.ap]))
x.ah()
y.sbe(0,x)
z.d=y
z.e=null
return z}}},hf:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a0:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.a0(null)},"cG","$1","$0","gU",0,2,0],
i9:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.aL()
s.a=H.c([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","geP",8,0,7],
ia:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.t(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.aL()
s.a=H.c([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.d(x,w)
C.a.H(s.a,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","geQ",8,0,7],
saY:function(a){var z,y,x
if(a==null)a=X.eh(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.cf])
z.b=!0
this.a0(z)}},
saC:function(a,b){var z,y,x
if(b==null)b=X.cR(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.cu])
z.b=!0
this.a0(z)}},
saq:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.aU])
z.b=!0
this.a0(z)}},
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a5:function(a){var z
a.cs(this.c)
this.b.J(a)
this.a.J(a)
z=this.c
if(z!=null)z.a9(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a9(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a5(a)
this.a.toString
a.cy.aB()
a.db.aB()
this.b.a3(a)
a.cq()},
$isaE:1,
n:{
dS:function(a,b,c,d){var z,y
z=new M.hf()
y=O.cg(E.aK)
z.d=y
y.aD(z.geP(),z.geQ())
z.e=null
z.f=null
z.r=null
z.x=null
z.saY(a)
z.saC(0,c)
z.saq(d)
return z}}},aE:{"^":"a;"}}],["","",,A,{"^":"",dx:{"^":"a;a,b,c"},fM:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ha:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
aZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dQ:{"^":"bA;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
aa:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.e4(c)
b.a.uniform1i(b.d,0)}}},e8:{"^":"bA;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aQ,0az,0aR,0br,0dj,0dk,0bs,0bt,0dl,0dm,0bu,0bv,0dn,0dq,0bw,0dr,0ds,0bx,0dt,0du,0by,0bz,0bA,0dv,0dw,0bB,0bC,0dz,0dA,0bD,0dB,0cc,0dC,0cd,0dD,0ce,0dE,0cf,0dF,0cg,0dG,0ci,a,b,0c,0d,0e,0f,0r",
eb:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.c6("")
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
a1.fC(z)
a1.fJ(z)
a1.fD(z)
a1.fR(z)
a1.fS(z)
a1.fL(z)
a1.fW(z)
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
z=new P.c6("")
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
v.fG(z)
v.fB(z)
v.fE(z)
v.fH(z)
v.fP(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fN(z)
v.fO(z)}v.fK(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.p])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fF(z)
v.fM(z)
v.fQ(z)
v.fT(z)
v.fU(z)
v.fV(z)
v.fI(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.p])
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
this.b0(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.b(this.r.m(0,"invViewMat"),"$isa0")
if(y)this.db=H.b(this.r.m(0,"objMat"),"$isa0")
if(w)this.dx=H.b(this.r.m(0,"viewObjMat"),"$isa0")
this.fr=H.b(this.r.m(0,"projViewObjMat"),"$isa0")
if(a1.x2)this.go=H.b(this.r.m(0,"txt2DMat"),"$isbK")
if(a1.y1)this.id=H.b(this.r.m(0,"txtCubeMat"),"$isa0")
if(a1.y2)this.k1=H.b(this.r.m(0,"colorMat"),"$isa0")
this.k3=H.c([],[A.a0])
y=a1.aQ
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.q(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isa0"))}}y=a1.a
if(y!==C.b){this.k4=H.b(this.r.m(0,"emissionClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.r1=H.b(this.r.m(0,"emissionTxt"),"$isa1")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.r2=H.b(this.r.m(0,"emissionTxt"),"$isag")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.ry=H.b(this.r.m(0,"ambientClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.x1=H.b(this.r.m(0,"ambientTxt"),"$isa1")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.x2=H.b(this.r.m(0,"ambientTxt"),"$isag")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.y2=H.b(this.r.m(0,"diffuseClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.aQ=H.b(this.r.m(0,"diffuseTxt"),"$isa1")
this.aR=H.b(this.r.m(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.az=H.b(this.r.m(0,"diffuseTxt"),"$isag")
this.aR=H.b(this.r.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.br=H.b(this.r.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dj=H.b(this.r.m(0,"invDiffuseTxt"),"$isa1")
this.bs=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.dk=H.b(this.r.m(0,"invDiffuseTxt"),"$isag")
this.bs=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bv=H.b(this.r.m(0,"shininess"),"$isR")
this.bt=H.b(this.r.m(0,"specularClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dl=H.b(this.r.m(0,"specularTxt"),"$isa1")
this.bu=H.b(this.r.m(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.dm=H.b(this.r.m(0,"specularTxt"),"$isag")
this.bu=H.b(this.r.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.e:this.dn=H.b(this.r.m(0,"bumpTxt"),"$isa1")
this.bw=H.b(this.r.m(0,"nullBumpTxt"),"$isF")
break
case C.d:this.dq=H.b(this.r.m(0,"bumpTxt"),"$isag")
this.bw=H.b(this.r.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dr=H.b(this.r.m(0,"envSampler"),"$isag")
this.ds=H.b(this.r.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bx=H.b(this.r.m(0,"reflectClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dt=H.b(this.r.m(0,"reflectTxt"),"$isa1")
this.by=H.b(this.r.m(0,"nullReflectTxt"),"$isF")
break
case C.d:this.du=H.b(this.r.m(0,"reflectTxt"),"$isag")
this.by=H.b(this.r.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bz=H.b(this.r.m(0,"refraction"),"$isR")
this.bA=H.b(this.r.m(0,"refractClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dv=H.b(this.r.m(0,"refractTxt"),"$isa1")
this.bB=H.b(this.r.m(0,"nullRefractTxt"),"$isF")
break
case C.d:this.dw=H.b(this.r.m(0,"refractTxt"),"$isag")
this.bB=H.b(this.r.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bC=H.b(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.e:this.dz=H.b(this.r.m(0,"alphaTxt"),"$isa1")
this.bD=H.b(this.r.m(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.dA=H.b(this.r.m(0,"alphaTxt"),"$isag")
this.bD=H.b(this.r.m(0,"nullAlphaTxt"),"$isF")
break}}this.cc=H.c([],[A.eP])
this.cd=H.c([],[A.eQ])
this.ce=H.c([],[A.eR])
this.cf=H.c([],[A.eS])
this.cg=H.c([],[A.eT])
this.ci=H.c([],[A.eU])
if(a1.k2){y=a1.z
if(y>0){this.dB=H.k(this.r.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.cc;(x&&C.a).h(x,new A.eP(m,l,k))}}y=a1.Q
if(y>0){this.dC=H.k(this.r.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isR")
x=this.cd;(x&&C.a).h(x,new A.eQ(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dD=H.k(this.r.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isR")
x=this.ce;(x&&C.a).h(x,new A.eR(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dE=H.k(this.r.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isF")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa1")
x=this.cf;(x&&C.a).h(x,new A.eS(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dF=H.k(this.r.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isbK")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isF")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isag")
x=this.cg;(x&&C.a).h(x,new A.eT(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dG=H.k(this.r.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isF")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isI")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa1")
x=this.ci;(x&&C.a).h(x,new A.eU(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
ae:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hO:function(a,b){var z,y
z=a.az
y=new A.e8(b,z)
y.aU(b,z)
y.eb(a,b)
return y}}},hR:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aQ,az,aR",
fC:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aQ+"];\n"
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
fJ:function(a){var z
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
fD:function(a){var z
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
fR:function(a){var z,y
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
fS:function(a){var z,y
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
fL:function(a){var z
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
fW:function(a){var z
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
at:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cD(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fG:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.at(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
fB:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.at(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
fE:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.at(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fH:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.at(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fP:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.at(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fK:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
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
fN:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.at(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fO:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.at(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fF:function(a){var z,y
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
fM:function(a){var z,y
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
fQ:function(a){var z,y
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
fT:function(a){var z,y,x
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
fU:function(a){var z,y,x
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
fV:function(a){var z,y,x
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
fI:function(a){var z
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
i:function(a){return this.az}},eP:{"^":"a;a,b,c"},eS:{"^":"a;a,b,c,d,e,f,r,x"},eQ:{"^":"a;a,b,c,d,e,f,r"},eT:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eR:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eU:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ec:{"^":"bA;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r"},i3:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
n:{
ed:function(a){var z,y,x,w,v,u,t
z=a!==C.b
y=a===C.e
x=a===C.d
w="Normal_"+C.h.i(a.a)
v=$.$get$a2()
u=$.$get$ax()
u=v.a|u.a
t=new Z.aq(u)
if(z)t=new Z.aq(u|$.$get$aw().a)
if(y)t=new Z.aq(t.a|$.$get$ak().a)
return new A.i3(a,z,y,x,w,x?new Z.aq(t.a|$.$get$ay().a):t)}}},bA:{"^":"cH;",
aU:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b0:function(a,b,c){var z,y,x
this.c=this.cR(b,35633)
this.d=this.cR(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fs(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.q(P.o("Failed to link shader: "+H.j(x)))}this.fp()
this.fs()},
J:function(a){a.a.useProgram(this.e)
this.f.ha()},
cR:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fs(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.i(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fp:function(){var z,y,x,w,v,u
z=H.c([],[A.dx])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dx(y,v.name,u))}this.f=new A.fM(z)},
fs:function(){var z,y,x,w,v,u
z=H.c([],[A.a9])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.h7(v.type,v.size,v.name,u))}this.r=new A.jf(z)},
aI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.db(z,y,b,a,c)},
ex:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a1(z,y,b,c)
else return A.db(z,y,b,a,c)},
ey:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ag(z,y,b,c)
else return A.db(z,y,b,a,c)},
bm:function(a,b){return new P.f3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
h7:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.bJ(this.a,this.e,c,d)
case 35665:return new A.I(this.a,this.e,c,d)
case 35666:return new A.eO(this.a,this.e,c,d)
case 35667:return new A.jc(this.a,this.e,c,d)
case 35668:return new A.jd(this.a,this.e,c,d)
case 35669:return new A.je(this.a,this.e,c,d)
case 35674:return new A.jh(this.a,this.e,c,d)
case 35675:return new A.bK(this.a,this.e,c,d)
case 35676:return new A.a0(this.a,this.e,c,d)
case 35678:return this.ex(b,c,d)
case 35680:return this.ey(b,c,d)
case 35670:throw H.i(this.bm("BOOL",c))
case 35671:throw H.i(this.bm("BOOL_VEC2",c))
case 35672:throw H.i(this.bm("BOOL_VEC3",c))
case 35673:throw H.i(this.bm("BOOL_VEC4",c))
default:throw H.i(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},ch:{"^":"a;a,b",
i:function(a){return this.b}},en:{"^":"bA;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ev:{"^":"bA;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
ef:function(a,b){var z,y,x,w,v
this.b0(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iW(a))
this.x=this.f.j(0,"posAttr")
this.y=H.b(this.r.m(0,"txtCount"),"$isF")
this.z=H.b(this.r.m(0,"backClr"),"$iseO")
this.Q=H.c([],[A.a1])
this.ch=H.c([],[A.a0])
z=[A.bJ]
this.cx=H.c([],z)
this.cy=H.c([],z)
this.db=H.c([],z)
this.dx=H.c([],z)
this.dy=H.c([],[A.F])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa1"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa0"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbJ"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbJ"))
z=this.db
x=this.r
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbJ"))
z=this.dx
x=this.r
w="destSize"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbJ"))
z=this.dy
x=this.r
w="flip"+y
v=x.j(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isF"))}},
n:{
iW:function(a){var z,y
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
iV:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.ev(b,z)
y.aU(b,z)
y.ef(a,b)
return y}}},a9:{"^":"a;"},jf:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.i(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hc:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hc("\n")}},F:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},jc:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},jd:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},je:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},jb:{"^":"a9;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
db:function(a,b,c,d,e){var z=new A.jb(a,b,c,e)
z.f=d
z.e=P.hG(d,0,!1,P.A)
return z}}},R:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},bJ:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},I:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},eO:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},jh:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},bK:{"^":"a9;a,b,c,d",
W:function(a){var z=new Float32Array(H.ba(H.t(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},a0:{"^":"a9;a,b,c,d",
W:function(a){var z=new Float32Array(H.ba(H.t(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},a1:{"^":"a9;a,b,c,d",
e4:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ag:{"^":"a9;a,b,c,d",
cB:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cz:function(a){var z=a.a>0?1:0
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
z.d=y}l=F.cz(y)
k=F.cz(z.b)
j=F.fE(d,e,new F.kY(z,F.cz(z.c),F.cz(z.d),k,l,c),b)
if(j!=null)a.co(j)},
lF:function(a,b,c,d){return F.le(c,a,d,b,new F.lG())},
le:function(a,b,c,d,e){var z=F.fE(a,b,new F.lf(H.d(e,{func:1,ret:V.V,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ah()
z.hp(new F.jw(),new F.i2())
return z},
fE:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.ap,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d5()
y=H.c([],[F.ap])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cx(null,null,new V.ab(u,0,0,1),null,null,new V.O(w,1),null,null,0)
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
t=F.cx(null,null,new V.ab(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ca(d))}}z.d.fY(a+1,b+1,y)
return z},
kY:{"^":"v:15;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cn(z.b,b).cn(z.d.cn(z.c,b),c)
a.sab(0,new V.V(y.a,y.b,y.c))
a.shP(y.A(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.b4(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.H(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.Z()}}},
lG:{"^":"v:33;",
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}},
lf:{"^":"v:15;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.du(y.$1(z),x)
x=J.du(y.$1(z+3.141592653589793/this.c),x).P(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.C(x)))
u=new V.G(1,0,0)
y=v.ax(!v.u(0,u)?new V.G(0,0,1):u)
t=y.A(0,Math.sqrt(y.C(y)))
y=t.ax(v)
u=y.A(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sab(0,w.E(0,new V.V(y.a-x.a,y.b-x.b,y.c-x.c)))}},
an:{"^":"a;0a,0b,0c,0d,0e",
ay:function(){if(!this.gb_()){C.a.H(this.a.a.d.b,this)
this.a.a.Z()}this.bW()
this.bX()
this.ff()},
fm:function(a){this.a=a
C.a.h(a.d.b,this)},
fn:function(a){this.b=a
C.a.h(a.d.c,this)},
fo:function(a){this.c=a
C.a.h(a.d.d,this)},
bW:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
bX:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
ff:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eq:function(){var z,y,x,w,v
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
if(v.dJ())return
return v.A(0,Math.sqrt(v.C(v)))},
eu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.P(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.C(z)))
z=w.P(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.ax(z.A(0,Math.sqrt(z.C(z))))
return z.A(0,Math.sqrt(z.C(z)))},
c8:function(){if(this.d!=null)return!0
var z=this.eq()
if(z==null){z=this.eu()
if(z==null)return!1}this.d=z
this.a.a.Z()
return!0},
ep:function(){var z,y,x,w,v
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
if(v.dJ())return
return v.A(0,Math.sqrt(v.C(v)))},
es:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.P(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.P(0,u).k(0,l).E(0,u).P(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.C(z)))
z=k.ax(m)
z=z.A(0,Math.sqrt(z.C(z))).ax(k)
m=z.A(0,Math.sqrt(z.C(z)))}return m},
c7:function(){if(this.e!=null)return!0
var z=this.ep()
if(z==null){z=this.es()
if(z==null)return!1}this.e=z
this.a.a.Z()
return!0},
gh2:function(a){if(J.H(this.a,this.b))return!0
if(J.H(this.b,this.c))return!0
if(J.H(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z,y
if(this.gb_())return a+"disposed"
z=a+C.i.ag(J.aa(this.a.e),0)+", "+C.i.ag(J.aa(this.b.e),0)+", "+C.i.ag(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.B("")},
n:{
bn:function(a,b,c){var z,y,x
z=new F.an()
y=a.a
if(y==null)H.q(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.o("May not create a face with vertices attached to different shapes."))
z.fm(a)
z.fn(b)
z.fo(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Z()
return z}}},
hi:{"^":"a;"},
iG:{"^":"hi;",
b2:function(a,b,c){var z,y
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
cY:{"^":"a;0a,0b",
ay:function(){if(!this.gb_()){C.a.H(this.a.a.c.b,this)
this.a.a.Z()}this.bW()
this.bX()},
bW:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
bX:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){if(this.gb_())return a+"disposed"
return a+C.i.ag(J.aa(this.a.e),0)+", "+C.i.ag(J.aa(this.b.e),0)},
L:function(){return this.B("")}},
hA:{"^":"a;"},
ja:{"^":"hA;",
b2:function(a,b,c){var z,y
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
d2:{"^":"a;0a",
ay:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.Z()}this.fe()},
fe:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ag(J.aa(z.e),0)},
L:function(){return this.B("")}},
em:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
co:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.h6())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d2()
if(r.a==null)H.q(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cY()
s=p.a
if(s==null)H.q(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bn(p,o,l)}z=this.e
if(!(z==null))z.ap(0)},
ah:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ah()||!1
if(!this.a.ah())y=!1
z=this.e
if(!(z==null))z.ap(0)
return y},
aL:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aL()||!1
if(!this.a.aL())y=!1
z=this.e
if(!(z==null))z.ap(0)
return y},
bp:function(){var z=this.e
if(!(z==null))++z.c
this.a.bp()
z=this.e
if(!(z==null))z.ap(0)
return!0},
eC:function(a,b,c,d,e){var z,y,x
H.t(d,"$ise",[F.ap],"$ase")
H.t(e,"$ise",[P.A],"$ase")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.b2(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hp:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ap],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.eC(a,v,y,u,t))b.co(u)}this.a.v()
this.c.ct()
this.d.ct()
this.b.hH()
this.c.cu(new F.ja())
this.d.cu(new F.iG())
z=this.e
if(!(z==null))z.ap(0)},
aX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a2()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$ak().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$bL().a)!==0)++w
if((x&$.$get$bM().a)!==0)++w
if((x&$.$get$b8().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
v=b.gcC(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dB])
for(r=0,q=0;q<w;++q){p=b.h0(q)
o=p.gcC(p)
C.a.a6(s,q,new Z.dB(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hk(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a6(t,l,m[k]);++l}}r+=o}H.t(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.ba(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bk(new Z.f1(34962,j),s,b)
i.b=H.c([],[Z.cn])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.t(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cn(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.t(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cn(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.t(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cn(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.p])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.D(z,"\n")},
ai:function(a){var z=this.e
if(!(z==null))z.w(a)},
Z:function(){return this.ai(null)},
n:{
d5:function(){var z,y
z=new F.em()
y=new F.jr(z)
y.b=!1
y.c=H.c([],[F.ap])
z.a=y
y=new F.iB(z)
y.b=H.c([],[F.d2])
z.b=y
y=new F.iA(z)
y.b=H.c([],[F.cY])
z.c=y
y=new F.iz(z)
y.b=H.c([],[F.an])
z.d=y
z.e=null
return z}}},
iz:{"^":"a;a,0b",
fX:function(a){var z,y,x,w,v
H.t(a,"$ise",[F.ap],"$ase")
z=H.c([],[F.an])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bn(y,w,v))}return z},
fY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.t(c,"$ise",[F.ap],"$ase")
z=H.c([],[F.an])
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
C.a.h(z,F.bn(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bn(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bn(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bn(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cu:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b2(0,v,t)){v.ay()
break}}}}},
ct:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gh2(x)
if(y)x.ay()}},
ah:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c8())x=!1
return x},
aL:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c7())x=!1
return x},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.c([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
iA:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cu:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b2(0,v,t)){v.ay()
break}}}}},
ct:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.H(x.a,x.b)
if(y)x.ay()}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.c([],[P.p])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.D(z,"\n")},
L:function(){return this.B("")}},
iB:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hH:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ay()}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.c([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
ap:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ca:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cx(this.cx,x,u,z,y,w,v,a,t)},
h6:function(){return this.ca(null)},
sab:function(a,b){var z
if(!J.H(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Z()}},
shr:function(a){var z
a=a.A(0,Math.sqrt(a.C(a)))
if(!J.H(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Z()}},
shP:function(a){var z
if(!J.H(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Z()}},
hk:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$a2())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ax())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aw())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ak())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$ay())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bL())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bM())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b8()))return H.c([this.ch],[P.w])
else if(z.u(a,$.$get$aO())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
c8:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.O(0,new F.jB(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ap(0)}return!0},
c7:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.O(0,new F.jA(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ap(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var z,y,x
z=H.c([],[P.p])
C.a.h(z,C.i.ag(J.aa(this.e),0))
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
C.a.h(z,V.M(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
L:function(){return this.B("")},
n:{
cx:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ap()
y=new F.jz(z)
y.b=H.c([],[F.d2])
z.b=y
y=new F.jv(z)
x=[F.cY]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.js(z)
x=[F.an]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eZ()
z.e=0
y=$.$get$a2()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$ak().a)!==0?f:null
z.z=(x&$.$get$ay().a)!==0?g:null
z.Q=(x&$.$get$f_().a)!==0?c:null
z.ch=(x&$.$get$b8().a)!==0?i:0
z.cx=(x&$.$get$aO().a)!==0?a:null
return z}}},
jB:{"^":"v:8;a",
$1:function(a){var z,y
H.k(a,"$isan")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jA:{"^":"v:8;a",
$1:function(a){var z,y
H.k(a,"$isan")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jr:{"^":"a;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Z()
return!0},
fZ:function(a,b,c,d,e,f,g,h,i){var z=F.cx(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bn:function(a,b,c,d,e,f){return this.fZ(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ah:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c8()
return!0},
aL:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c7()
return!0},
bp:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.H(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
this.v()
z=H.c([],[P.p])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
js:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
O:function(a,b){H.d(b,{func:1,ret:-1,args:[F.an]})
C.a.O(this.b,b)
C.a.O(this.c,new F.jt(this,b))
C.a.O(this.d,new F.ju(this,b))},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.c([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
jt:{"^":"v:8;a,b",
$1:function(a){H.k(a,"$isan")
if(!J.H(a.a,this.a))this.b.$1(a)}},
ju:{"^":"v:8;a,b",
$1:function(a){var z
H.k(a,"$isan")
z=this.a
if(!J.H(a.a,z)&&!J.H(a.b,z))this.b.$1(a)}},
jv:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.c([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}},
jx:{"^":"a;"},
jw:{"^":"jx;",
b2:function(a,b,c){return J.H(b.f,c.f)}},
jy:{"^":"a;"},
i2:{"^":"jy;",
co:function(a){var z,y,x,w
H.t(a,"$ise",[F.ap],"$ase")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.C(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)a[x].shr(z)
return}},
jz:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
B:function(a){var z,y,x,w
z=H.c([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
L:function(){return this.B("")}}}],["","",,O,{"^":"",h5:{"^":"aU;0a,0b,0c,0d,0e,0f,0ac:r@",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.w(a)},
a8:function(){return this.I(null)},
sdd:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.a8()}},
sda:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.a8()}},
sd9:function(a){var z=a==null?V.aA():a
this.f=z
if(!z.u(0,a)){this.f=a
this.a8()}},
a9:function(a,b){},
K:function(a,b){H.t(a,"$ise",[T.aN],"$ase")
if(b!=null)if(!C.a.aw(a,b)){b.a=a.length
C.a.h(a,b)}},
b7:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.k(a.fr.j(0,"Distort"),"$isdQ")
if(z==null){y=a.a
z=new A.dQ(y,"Distort")
z.aU(y,"Distort")
z.b0(0,$.h7,$.h6)
z.x=z.f.j(0,"posAttr")
z.y=z.f.j(0,"txt2DAttr")
z.z=H.b(z.r.m(0,"projViewObjMat"),"$isa0")
z.Q=H.b(z.r.m(0,"colorTxt2DMat"),"$isbK")
z.ch=H.b(z.r.m(0,"bumpTxt2DMat"),"$isbK")
z.cx=H.b(z.r.m(0,"colorTxt"),"$isa1")
z.cy=H.b(z.r.m(0,"bumpTxt"),"$isa1")
z.db=H.b(z.r.m(0,"nullColorTxt"),"$isF")
z.dx=H.b(z.r.m(0,"nullBumpTxt"),"$isF")
z.dy=H.b(z.r.m(0,"bumpMat"),"$isa0")
a.aW(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a2()
v=$.$get$ak()
v=y.aX(new Z.c8(x),new Z.aq(w.a|v.a))
v.a1($.$get$a2()).e=this.a.x.c
v.a1($.$get$ak()).e=this.a.y.c
b.e=v}u=H.c([],[T.aN])
this.K(u,this.b)
this.K(u,this.c)
for(t=0;t<u.length;++t)u[t].J(a)
y=this.a
y.J(a)
x=this.b
y.aa(y.cx,y.db,x)
x=this.c
y.aa(y.cy,y.dx,x)
x=a.gcr()
w=y.z
w.toString
w.W(x.S(0,!0))
x=this.d
w=y.Q
w.toString
w.W(x.S(0,!0))
x=this.e
w=y.ch
w.toString
w.W(x.S(0,!0))
x=this.f
y=y.dy
y.toString
y.W(x.S(0,!0))
y=b.e
if(y instanceof Z.bk){y.J(a)
y.a5(a)
y.a3(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aZ()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hN:{"^":"aU;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ac:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gad",0,2,0],
fi:[function(a){H.k(a,"$isl")
this.a=null
this.I(a)},function(){return this.fi(null)},"iA","$1","$0","gfh",0,2,0],
i6:[function(a,b){var z=V.ai
z=new D.bZ(a,H.t(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.I(z)},"$2","geM",8,0,14],
i7:[function(a,b){var z=V.ai
z=new D.c_(a,H.t(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.I(z)},"$2","geN",8,0,14],
cO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a4(z.e.length+3,4)*4
x=C.h.a4(z.f.length+3,4)*4
w=C.h.a4(z.r.length+3,4)*4
v=C.h.a4(z.x.length+3,4)*4
u=C.h.a4(z.y.length+3,4)*4
t=C.h.a4(z.z.length+3,4)*4
s=C.h.a4(this.e.a.length+3,4)*4
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
g=k!==C.b||j!==C.b
f=p!==C.b||o!==C.b||n!==C.b||m!==C.b
e=m===C.b
d=!e||g
c=o!==C.b||n!==C.b||!e||l!==C.b||g
e=l===C.b
b=!e
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$a2()
if(c){z=$.$get$ax()
a6=new Z.aq(a6.a|z.a)}if(b){z=$.$get$aw()
a6=new Z.aq(a6.a|z.a)}if(a){z=$.$get$ak()
a6=new Z.aq(a6.a|z.a)}if(a0){z=$.$get$ay()
a6=new Z.aq(a6.a|z.a)}if(a2){z=$.$get$aO()
a6=new Z.aq(a6.a|z.a)}return new A.hR(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
K:function(a,b){H.t(a,"$ise",[T.aN],"$ase")},
a9:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.z(z,0)]);z.F();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cw(x)}}},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cO()
y=H.k(a.fr.j(0,z.az),"$ise8")
if(y==null){y=A.hO(z,a.a)
a.aW(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aR
z=b.e
if(!(z instanceof Z.bk)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ah()
v=x.r2
if(v)b.d.aL()
u=x.ry
if(u)b.d.bp()
t=b.d.aX(new Z.c8(a.a),w)
t.a1($.$get$a2()).e=this.a.y.c
if(z)t.a1($.$get$ax()).e=this.a.Q.c
if(v)t.a1($.$get$aw()).e=this.a.z.c
if(x.rx)t.a1($.$get$ak()).e=this.a.ch.c
if(u)t.a1($.$get$ay()).e=this.a.cx.c
if(x.x1)t.a1($.$get$aO()).e=this.a.cy.c
b.e=t}z=T.aN
s=H.c([],[z])
this.a.J(a)
if(x.fx){v=this.a
u=a.dx
u=u.gV(u)
v=v.db
v.toString
v.W(u.S(0,!0))}if(x.fy){v=this.a
u=a.gdW()
v=v.dx
v.toString
v.W(u.S(0,!0))}v=this.a
u=a.gcr()
v=v.fr
v.toString
v.W(u.S(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.W(u.S(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.W(u.S(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.W(C.A.S(u,!0))}if(x.aQ>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.w],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.k(p,"$isai")
u=u.k3
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.ba(H.t(p.S(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.K(s,this.f.d)
v=this.a
u=this.f.d
v.aa(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.K(s,this.f.e)
v=this.a
u=this.f.e
v.ae(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.K(s,this.r.d)
v=this.a
u=this.r.d
v.aa(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.K(s,this.r.e)
v=this.a
u=this.r.e
v.ae(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.K(s,this.x.d)
v=this.a
u=this.x.d
v.aa(v.aQ,v.aR,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.K(s,this.x.e)
v=this.a
u=this.x.e
v.ae(v.az,v.aR,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.br
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.K(s,this.y.d)
v=this.a
u=this.y.d
v.aa(v.dj,v.bs,u)
u=this.a
v=this.y.f
u=u.br
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.K(s,this.y.e)
v=this.a
u=this.y.e
v.ae(v.dk,v.bs,u)
u=this.a
v=this.y.f
u=u.br
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
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
case C.e:this.K(s,this.z.d)
v=this.a
u=this.z.d
v.aa(v.dl,v.bu,u)
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
case C.d:this.K(s,this.z.e)
v=this.a
u=this.z.e
v.ae(v.dm,v.bu,u)
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
v=this.a.dB
v.a.uniform1i(v.d,r)
v=a.db
m=v.gV(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cc
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cw(j.a)
n=p.a
h=p.b
g=p.c
g=p.A(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dC
v.a.uniform1i(v.d,r)
v=a.db
m=v.gV(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cd
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb6(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcz(p)
n.a.uniform3f(n.d,h,g,p)
p=m.bc(j.gb6(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gam(j)
g=i.d
h=p.gbF()
n=p.gbd()
p=p.gbo()
g.a.uniform3f(g.d,h,n,p)
p=j.gc2()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gc3()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gc4()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dD
v.a.uniform1i(v.d,r)
v=a.db
m=v.gV(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.ce
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb6(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcz(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcb(j).iG()
g=i.c
h=p.gaN(p)
n=p.gaO(p)
p=p.gaP()
g.a.uniform3f(g.d,h,n,p)
p=m.bc(j.gb6(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gam(j)
n=i.e
h=p.gbF()
g=p.gbd()
p=p.gbo()
n.a.uniform3f(n.d,h,g,p)
p=j.giF()
g=i.f
g.a.uniform1f(g.d,p)
p=j.giE()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gc2()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gc4()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.dE
v.a.uniform1i(v.d,r)
v=a.db
m=v.gV(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
n=this.a.cf
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gb9()
H.t(s,"$ise",p,"$ase")
if(!C.a.aw(s,n)){n.sdI(0,s.length)
C.a.h(s,n)}n=j.gcb(j)
h=i.d
g=n.gaN(n)
f=n.gaO(n)
n=n.gaP()
h.a.uniform3f(h.d,g,f,n)
n=j.ghV()
f=i.b
g=n.gaN(n)
h=n.gaO(n)
n=n.gaP()
f.a.uniform3f(f.d,g,h,n)
n=j.gb8(j)
h=i.c
g=n.gaN(n)
f=n.gaO(n)
n=n.gaP()
h.a.uniform3f(h.d,g,f,n)
n=m.cw(j.gcb(j))
f=n.a
g=n.b
h=n.c
h=n.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gam(j)
g=i.f
f=h.gbF()
n=h.gbd()
h=h.gbo()
g.a.uniform3f(g.d,f,n,h)
h=j.gb9()
n=h.gdL(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gcU()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gcT())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dF
v.a.uniform1i(v.d,r)
v=a.db
m=v.gV(v)
for(v=this.dx.y,u=v.length,p=[P.w],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cg
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gb9()
H.t(s,"$ise",n,"$ase")
if(!C.a.aw(s,h)){h.sdI(0,s.length)
C.a.h(s,h)}e=m.k(0,j.gV(j))
h=j.gV(j).bc(new V.V(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcz(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bc(new V.V(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cl(0)
d=i.d
o=new Float32Array(H.ba(H.t(new V.b3(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).S(0,!0),"$ise",p,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gam(j)
h=i.e
f=d.gbF()
g=d.gbd()
d=d.gbo()
h.a.uniform3f(h.d,f,g,d)
d=j.gb9()
h=d.gdL(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcU()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gcT())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc2()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc3()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc4()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.dG
v.a.uniform1i(v.d,r)
v=a.db
m=v.gV(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.ci
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gb9()
H.t(s,"$ise",z,"$ase")
if(!C.a.aw(s,p)){p.sdI(0,s.length)
C.a.h(s,p)}p=j.gb6(j)
n=i.b
h=p.gq(p)
g=p.gt(p)
p=p.gcz(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcb(j)
g=i.c
h=p.gaN(p)
n=p.gaO(p)
p=p.gaP()
g.a.uniform3f(g.d,h,n,p)
p=j.ghV()
n=i.d
h=p.gaN(p)
g=p.gaO(p)
p=p.gaP()
n.a.uniform3f(n.d,h,g,p)
p=j.gb8(j)
g=i.e
h=p.gaN(p)
n=p.gaO(p)
p=p.gaP()
g.a.uniform3f(g.d,h,n,p)
p=m.bc(j.gb6(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gb9()
n=p.gdL(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gcU()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gcT())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gam(j)
n=i.y
h=p.gbF()
g=p.gbd()
p=p.gbo()
n.a.uniform3f(n.d,h,g,p)
p=j.giM()
g=i.z
g.a.uniform1f(g.d,p)
p=j.giN()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gc2()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gc4()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.e:this.K(s,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.dn,z.bw,v)
break
case C.d:this.K(s,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.dq,z.bw,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gV(v).cl(0)
a.Q=v}z=z.fy
z.toString
z.W(v.S(0,!0))}if(x.dy){this.K(s,this.ch)
z=this.a
v=this.ch
z.ae(z.dr,z.ds,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bx
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.K(s,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.dt,z.by,v)
v=this.a
z=this.cx.f
v=v.bx
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.K(s,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.du,z.by,v)
v=this.a
z=this.cx.f
v=v.bx
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
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
case C.e:this.K(s,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.dv,z.bB,v)
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
case C.d:this.K(s,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.dw,z.bB,v)
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
case C.f:z=this.a
u=this.db.f
z=z.bC
z.a.uniform1f(z.d,u)
break
case C.e:this.K(s,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dz,z.bD,u)
u=this.a
z=this.db.f
u=u.bC
u.a.uniform1f(u.d,z)
break
case C.d:this.K(s,this.db.e)
z=this.a
u=this.db.e
z.ae(z.dA,z.bD,u)
u=this.a
z=this.db.f
u=u.bC
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q)s[q].J(a)
z=b.e
z.J(a)
z.a5(a)
z.a3(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q)s[q].a3(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.aZ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cO().az}},hP:{"^":"cZ;0f,a,b,0c,0d,0e"},cZ:{"^":"a;",
bj:["e9",function(){}]},hQ:{"^":"cZ;a,b,0c,0d,0e"},b2:{"^":"cZ;0f,a,b,0c,0d,0e",
d2:function(a){var z,y
if(!J.H(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.I(y)}},
bj:["bJ",function(){this.e9()
this.d2(new V.U(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.bj()
z=this.a
z.a=null
z.I(null)}this.d2(b)}},hS:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
fl:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.I(z)}},
bj:function(){this.bJ()
this.fl(1)}},hT:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
bY:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.I(z)}},
bj:function(){this.bJ()
this.bY(100)}},i1:{"^":"aU;0a,0b,0c,0d,0e,0f,0ac:r@",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.r
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gad",0,2,0],
d0:function(a){},
d1:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.d(this.gad(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.e
y=H.d(this.gad(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("bumpyTextureCube",x,this.f,this,[T.d8])
z.b=!0
this.I(z)}},
K:function(a,b){H.t(a,"$ise",[T.aN],"$ase")
if(b!=null)if(!C.a.aw(a,b)){b.a=a.length
C.a.h(a,b)}},
a9:function(a,b){},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
if(z==null){y=A.ed(this.d)
z=y.e
x=H.k(a.fr.j(0,z),"$isec")
if(x==null){w=a.a
x=new A.ec(w,z)
x.aU(w,z)
x.x=y
z=y.c
v=z?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
u=y.d
v=(u?v+"uniform mat4 txtCubeMat;\n":v)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
t=y.b
if(t)v+="attribute vec3 binmAttr;\n"
if(z)v+="attribute vec2 txt2DAttr;\n"
v=(u?v+"attribute vec3 txtCubeAttr;\n":v)+"\nvarying vec3 normalVec;\n"
if(t)v+="varying vec3 binormalVec;\n"
if(z)v+="varying vec2 txt2D;\n"
v=(u?v+"varying vec3 txtCube;\n":v)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(t)v+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(z)v+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
v=(u?v+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":v)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
t=t?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(z)t+="varying vec2 txt2D;\n"
t=(u?t+"varying vec3 txtCube;\n":t)+"\n"
s=y.a
switch(s){case C.b:break
case C.f:break
case C.e:t+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.d:t+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}t+="\nvec3 normal()\n{\n"
if(s===C.b||s===C.f)t+="   return normalize(normalVec);\n"
else{t+="   if(nullBumpTxt > 0) return normalVec;\n"
t=(s===C.e?t+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":t+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}t+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.b0(0,v.charCodeAt(0)==0?v:v,t.charCodeAt(0)==0?t:t)
x.y=x.f.j(0,"posAttr")
x.Q=x.f.j(0,"normAttr")
x.z=x.f.j(0,"binmAttr")
x.ch=x.f.j(0,"txt2DAttr")
x.cx=x.f.j(0,"txtCubeAttr")
x.cy=H.b(x.r.m(0,"viewObjMat"),"$isa0")
x.db=H.b(x.r.m(0,"projViewObjMat"),"$isa0")
if(z)x.dx=H.b(x.r.m(0,"txt2DMat"),"$isbK")
if(u)x.dy=H.b(x.r.m(0,"txtCubeMat"),"$isa0")
switch(s){case C.b:break
case C.f:break
case C.e:x.fr=H.b(x.r.m(0,"bumpTxt"),"$isa1")
x.fy=H.b(x.r.m(0,"nullBumpTxt"),"$isF")
break
case C.d:x.fx=H.b(x.r.m(0,"bumpTxt"),"$isag")
x.fy=H.b(x.r.m(0,"nullBumpTxt"),"$isF")
break}a.aW(x)}this.a=x
b.e=null
z=x}y=z.x
r=y.f
z=b.e
if(!(z instanceof Z.bk)){b.e=null
z=null}if(z==null||!z.d.u(0,r)){b.d.ah()
z=y.b
if(z)b.d.aL()
v=y.d
if(v)b.d.bp()
q=b.d.aX(new Z.c8(a.a),r)
q.a1($.$get$a2()).e=this.a.y.c
q.a1($.$get$ax()).e=this.a.Q.c
if(z)q.a1($.$get$aw()).e=this.a.z.c
if(y.c)q.a1($.$get$ak()).e=this.a.ch.c
if(v)q.a1($.$get$ay()).e=this.a.cx.c
b.e=q}p=H.c([],[T.aN])
this.a.J(a)
z=this.a
v=a.gdW()
z=z.cy
z.toString
z.W(v.S(0,!0))
v=this.a
z=a.gcr()
v=v.db
v.toString
v.W(z.S(0,!0))
if(y.c){z=this.a
v=this.b
z=z.dx
z.toString
z.W(v.S(0,!0))}if(y.d){z=this.a
v=this.c
z=z.dy
z.toString
z.W(v.S(0,!0))}switch(y.a){case C.b:break
case C.f:break
case C.e:this.K(p,this.e)
z=this.a.fy
z.a.uniform1i(z.d,1)
break
case C.d:this.K(p,this.f)
z=this.a
v=this.f
u=z.fx
z=z.fy
if(v==null||v.d<6)z.a.uniform1i(z.d,1)
else{u.cB(v)
z.a.uniform1i(z.d,0)}break}for(o=0;o<p.length;++o)p[o].J(a)
z=b.e
z.J(a)
z.a5(a)
z.a3(a)
for(o=0;o<p.length;++o){z=p[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.aZ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.ed(this.d).e}},iH:{"^":"aU;0a,0b,0c,0d,0ac:e@",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gad",0,2,0],
a9:function(a,b){},
b7:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$isen")
if(z==null){y=a.a
z=new A.en(y,"Skybox")
z.aU(y,"Skybox")
z.b0(0,$.iJ,$.iI)
z.x=z.f.j(0,"posAttr")
z.y=H.b(z.r.j(0,"fov"),"$isR")
z.z=H.b(z.r.j(0,"ratio"),"$isR")
z.Q=H.b(z.r.j(0,"boxClr"),"$isI")
z.ch=H.b(z.r.j(0,"boxTxt"),"$isag")
z.cx=H.b(z.r.j(0,"viewMat"),"$isa0")
a.aW(z)}this.a=z}if(b.e==null){y=b.d.aX(new Z.c8(a.a),$.$get$a2())
y.a1($.$get$a2()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.J(a)}y=a.d
x=a.c
w=this.a
w.J(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cB(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gV(x).cl(0)
w=w.cx
w.toString
w.W(x.S(0,!0))
y=b.e
if(y instanceof Z.bk){y.J(a)
y.a5(a)
y.a3(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aZ()
y=this.c
if(y!=null)y.a3(a)}},aU:{"^":"a;"},iU:{"^":"aU;0a,0b,0c,0d,0ac:e@",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gad",0,2,0],
ig:[function(a,b){var z,y,x,w,v,u,t
H.t(b,"$isf",[O.bH],"$asf")
for(z=b.length,y=this.gad(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gac()==null){t=new D.aL()
t.a=H.c([],w)
t.c=0
u.sac(t)}t=u.gac()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.a8()},"$2","geU",8,0,13],
ih:[function(a,b){var z,y,x,w,v,u,t
H.t(b,"$isf",[O.bH],"$asf")
for(z=b.length,y=this.gad(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gac()==null){t=new D.aL()
t.a=H.c([],w)
t.c=0
u.sac(t)}t=u.gac()
t.toString
H.d(y,x)
C.a.H(t.a,y)}}this.a8()},"$2","geV",8,0,13],
a9:function(a,b){},
b7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.a4(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.k(a.fr.j(0,y),"$isev")
if(x==null){x=A.iV(z,a.a)
a.aW(x)}this.b=x
y=x}if(b.e==null){y=b.d.aX(new Z.c8(a.a),$.$get$a2())
w=y.a1($.$get$a2())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.J(a)
y=T.aN
u=H.c([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.t(u,"$ise",y,"$ase")
if(v!=null)if(!C.a.aw(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.Q
if(t>=v.length)return H.h(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.ch
if(t>=v.length)return H.h(v,t)
v=v[t]
n=new Float32Array(H.ba(H.t((q==null?new V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).S(0,!0),"$ise",w,"$ase")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aT(0,0,1,1)
q=v.cx
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.cy
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aT(0,0,1,1)
q=v.db
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.dy
if(t>=v.length)return H.h(v,t)
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
for(s=0;s<u.length;++s)u[s].J(a)
y=b.e
if(y instanceof Z.bk){y.J(a)
y.a5(a)
y.a3(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.aZ()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bH:{"^":"a;0a,0b,0c,0d,0e,0ac:f@",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gad",0,2,0],
n:{
ew:function(a,b,c,d,e){var z,y,x,w,v,u
z=new O.bH()
y=z.a
z.a=e
x=e.y
w=H.d(z.gad(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.B("texture",y,z.a,z,[T.et])
x.b=!0
z.I(x)
v=V.aA()
if(!J.H(z.b,v)){y=z.b
z.b=v
x=new D.B("colorMatrix",y,v,z,[V.ai])
x.b=!0
z.I(x)}u=V.aT(0,0,1,1)
if(!J.H(z.c,u)){y=z.c
z.c=u
x=new D.B("source",y,u,z,[V.ct])
x.b=!0
z.I(x)}if(!J.H(z.d,b)){y=z.d
z.d=b
x=new D.B("destination",y,b,z,[V.ct])
x.b=!0
z.I(x)}if(z.e!==c){z.e=c
x=new D.B("flip",!c,c,z,[P.a6])
x.b=!0
z.I(x)}z.f=null
return z}}}}],["","",,T,{"^":"",aN:{"^":"cH;"},et:{"^":"aN;0b,0c,0d,0e,0f,0r,0x,0y,a",
J:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
n:{
eu:function(a,b){var z=new T.et(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.D()
return z}}},d8:{"^":"aN;0b,0c,0d,0e,a",
J:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a3:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iX:{"^":"a;a,0b,0c,0d,0e",
dK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.d8(0)
r.b=s
r.c=!1
r.d=0
r.e=D.D()
this.aJ(r,s,z,34069,!1,!1)
this.aJ(r,s,w,34070,!1,!1)
this.aJ(r,s,y,34071,!1,!1)
this.aJ(r,s,v,34072,!1,!1)
this.aJ(r,s,x,34073,!1,!1)
this.aJ(r,s,u,34074,!1,!1)
return r},
hm:function(a){return this.dK(a,".png",!1,"")},
hn:function(a,b){return this.dK(a,b,!1,"")},
aJ:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ac
W.Y(z,"load",H.d(new T.iY(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fj:function(a,b,c){var z,y,x,w
b=V.bW(b,2)
z=V.bW(a.width,2)
y=V.bW(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cL(null,null)
x.width=z
x.height=y
w=H.k(C.k.e0(x,"2d"),"$isdD")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ld(w.getImageData(0,0,x.width,x.height))}}},iY:{"^":"v:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fj(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hO(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.di();++z.e}}}],["","",,V,{"^":"",fK:{"^":"a;",
b1:function(a,b){return!0},
i:function(a){return"all"},
$isc3:1},c3:{"^":"a;"},e7:{"^":"a;",
b1:["e8",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].b1(0,b))return!0
return!1}],
i:["cE",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc3:1},bw:{"^":"e7;0a",
b1:function(a,b){return!this.e8(0,b)},
i:function(a){return"!["+this.cE(0)+"]"}},ix:{"^":"a;0a",
ed:function(a){var z,y
if(a.a.length<=0)throw H.i(P.o("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.A,P.a6])
for(y=new H.e4(a,a.gl(a),0,[H.aH(a,"u",0)]);y.F();)z.a6(0,y.d,!0)
this.a=z},
b1:function(a,b){return this.a.de(0,b)},
i:function(a){var z=this.a
return P.d7(new H.e3(z,[H.z(z,0)]),0,null)},
$isc3:1,
n:{
a5:function(a){var z=new V.ix()
z.ed(a)
return z}}},ep:{"^":"a;a,b,0c,0d",
ghq:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eC(this.a.M(0,b))
w.a=H.c([],[V.c3])
w.c=!1
C.a.h(this.c,w)
return w},
hb:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.b1(0,a))return w}return},
i:function(a){return this.b}},ez:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fD(this.b,"\n","\\n")
y=H.fD(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eA:{"^":"a;a,b,0c",
i:function(a){return this.b}},j6:{"^":"a;0a,0b,0c",
M:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ep(this,b)
z.c=H.c([],[V.eC])
this.a.a6(0,b,z)}return z},
ba:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eA(this,a)
y=P.p
z.c=new H.b1(0,0,[y,y])
this.b.a6(0,a,z)}return z},
hU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ez])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bh(a,t)
r=y.hb(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d7(w,0,null)
throw H.i(P.o("Untokenizable string [state: "+y.ghq(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d7(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ez(o==null?p.b:o,q,t)}++t}}}},eC:{"^":"e7;b,0c,0a",
i:function(a){return this.b.b+": "+this.cE(0)}}}],["","",,X,{"^":"",fO:{"^":"cu;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gp:function(){var z=this.db
if(z==null){z=D.D()
this.db=z}return z},
ak:function(a){var z=this.db
if(!(z==null))z.w(a)},
J:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.Z(z.getParameter(3379))
u=V.bW(x,2)
t=V.bW(w,2)
v=V.bW(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dT(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.eu(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.di()}y.b=r.b
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
a.c=C.c.a_(y*this.a)
x=z.d
a.d=C.c.a_(x*this.b)
w=this.c
q=C.c.a_(z.a*w)
p=this.d
o=C.c.a_(z.b*p)
n=C.c.a_(y*w)
m=C.c.a_(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a3:function(a){a.a.bindFramebuffer(36160,null)},
n:{
dy:function(a,b,c){var z=new X.fO()
z.a=a
z.b=b
z.c=a
z.d=b
z.e=!0
z.y=T.eu(0,null)
z.z=new V.ab(0,0,0,1)
z.Q=!0
z.ch=2000
z.cx=!0
z.cy=V.aT(0,0,1,1)
return z}}},cf:{"^":"a;",$isaD:1},hn:{"^":"cu;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
J:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.r(y)
v=C.c.a_(w.a*y)
if(typeof x!=="number")return H.r(x)
u=C.c.a_(w.b*x)
t=C.c.a_(w.c*y)
a.c=t
w=C.c.a_(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
a3:function(a){},
n:{
cR:function(a,b,c,d,e,f,g){var z,y
z=new X.hn()
y=new V.ab(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aT(0,0,1,1)
z.r=y
return z}}},hp:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
J:function(a){var z
a.cy.bE(V.aA())
z=V.aA()
a.db.bE(z)},
a3:function(a){a.cy.aB()
a.db.aB()},
$isaD:1,
$iscf:1},i6:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
ak:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.ak(null)},"hY","$1","$0","gcH",0,2,0],
sb3:function(a){var z,y,x
if(!J.H(this.a,a)){z=this.a
if(z!=null){z=z.gp()
z.toString
y=H.d(this.gcH(),{func:1,ret:-1,args:[D.l]})
C.a.H(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gp()
z.toString
y=H.d(this.gcH(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("mover",x,this.a,this,[U.ad])
z.b=!0
this.ak(z)}},
J:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bE(V.aM(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.ei
if(z==null){z=V.e9(new V.V(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.ei=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aT(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bE(r)},
a3:function(a){a.cy.aB()
a.db.aB()},
$isaD:1,
$iscf:1,
n:{
eh:function(a,b,c,d){var z,y,x
z=new X.i6()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
z.sb3(c)
y=z.b
if(!$.n.$2(y,b)){x=z.b
z.b=b
y=new D.B("fov",x,b,z,[P.w])
y.b=!0
z.ak(y)}y=z.c
if(!$.n.$2(y,d)){x=z.c
z.c=d
y=new D.B("near",x,d,z,[P.w])
y.b=!0
z.ak(y)}y=z.d
if(!$.n.$2(y,a)){x=z.d
z.d=a
y=new D.B("far",x,a,z,[P.w])
y.b=!0
z.ak(y)}return z}}},cu:{"^":"a;"}}],["","",,V,{"^":"",
lC:function(a){P.j5(C.x,new V.lD(a))},
lD:{"^":"v:38;a",
$1:function(a){H.k(a,"$isb6")
P.dt(C.c.dV(this.a.ghd(),2)+" fps")}},
iC:{"^":"a;0a,0b",
ee:function(a,b){var z,y,x,w,v,u,t
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
W.Y(z,"scroll",H.d(new V.iF(x),{func:1,ret:-1,args:[t]}),!1,t)},
h_:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.t(a,"$ise",[P.p],"$ase")
this.fq()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hU(C.a.hi(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fC(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kL(C.I,s,C.r,!1)
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
fq:function(){var z,y,x,w
if(this.b!=null)return
z=new V.j6()
y=P.p
z.a=new H.b1(0,0,[y,V.ep])
z.b=new H.b1(0,0,[y,V.eA])
z.c=z.M(0,"Start")
y=z.M(0,"Start").D(0,"Bold")
x=V.a5(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Bold").D(0,"Bold")
x=new V.bw()
w=[V.c3]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a5(new H.a3("*"))
C.a.h(x.a,y)
y=z.M(0,"Bold").D(0,"BoldEnd")
x=V.a5(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"Italic")
x=V.a5(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Italic").D(0,"Italic")
x=new V.bw()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a5(new H.a3("_"))
C.a.h(x.a,y)
y=z.M(0,"Italic").D(0,"ItalicEnd")
x=V.a5(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"Code")
x=V.a5(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Code").D(0,"Code")
x=new V.bw()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a5(new H.a3("`"))
C.a.h(x.a,y)
y=z.M(0,"Code").D(0,"CodeEnd")
x=V.a5(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"LinkHead")
x=V.a5(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"LinkHead").D(0,"LinkTail")
x=V.a5(new H.a3("|"))
C.a.h(y.a,x)
x=z.M(0,"LinkHead").D(0,"LinkEnd")
y=V.a5(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkHead").D(0,"LinkHead")
y=new V.bw()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a5(new H.a3("|]"))
C.a.h(y.a,x)
x=z.M(0,"LinkTail").D(0,"LinkEnd")
y=V.a5(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkTail").D(0,"LinkTail")
y=new V.bw()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a5(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.M(0,"Start").D(0,"Other").a,new V.fK())
x=z.M(0,"Other").D(0,"Other")
y=new V.bw()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a5(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.M(0,"BoldEnd")
x.d=x.a.ba("Bold")
x=z.M(0,"ItalicEnd")
x.d=x.a.ba("Italic")
x=z.M(0,"CodeEnd")
x.d=x.a.ba("Code")
x=z.M(0,"LinkEnd")
x.d=x.a.ba("Link")
x=z.M(0,"Other")
x.d=x.a.ba("Other")
this.b=z},
n:{
iD:function(a,b){var z=new V.iC()
z.ee(a,!0)
return z}}},
iF:{"^":"v:12;a",
$1:function(a){P.j4(C.m,new V.iE(this.a))}},
iE:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.c.a_(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
fy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
z=V.iD("Test 031",!0)
y=W.cL(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.h_(H.c(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],[P.p]))
x=document.getElementById("testCanvas")
if(x==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
w=E.j2(x,!0,!0,!0,!1)
v=E.cQ(null,!0,null,"",null,null)
u=F.d5()
F.bQ(u,null,null,1,1,1,0,0,1)
F.bQ(u,null,null,1,1,0,1,0,3)
F.bQ(u,null,null,1,1,0,0,1,2)
F.bQ(u,null,null,1,1,-1,0,0,0)
F.bQ(u,null,null,1,1,0,-1,0,0)
F.bQ(u,null,null,1,1,0,0,-1,3)
u.ah()
v.sbe(0,u)
z=U.dV(null)
z.h(0,U.eX(!1,!1,w.r,!1,!1,!1,null,!1))
z.h(0,U.eY(!1,!1,w.r,null,!1))
v.sb3(z)
t=new O.i1()
t.b=new V.b3(1,0,0,0,1,0,0,0,1)
t.c=V.aA()
t.d=C.b
t.d0(null)
t.d1(null)
t.a8()
t.r=null
z=w.f.hm("../resources/diceBumpMap")
if(t.d!==C.d){t.d=C.d
t.d0(null)
t.a=null}t.d1(z)
s=X.dy(800,600,!0)
z=new V.ab(0.5,0.5,1,1)
if(!s.z.u(0,z)){r=s.z
s.z=z
z=new D.B("color",r,z,s,[V.ab])
z.b=!0
s.ak(z)}q=M.dS(null,null,null,null)
q.saq(t)
q.saC(0,s)
q.d.h(0,v)
q.a.sb3(U.cN(V.eb(0,0,5)))
p=U.dV(null)
p.h(0,U.eX(!1,!0,w.r,!1,!1,!1,null,!1))
p.h(0,U.eY(!1,!0,w.r,null,!1))
p.h(0,U.cN(V.eb(0,0,5)))
o=X.eh(2000,1.0471975511965976,p,0.1)
n=X.dy(800,600,!0)
if(n.Q){n.Q=!1
z=new D.B("clearColor",!0,!1,n,[P.a6])
z.b=!0
n.ak(z)}m=E.cQ(null,!0,null,"",null,null)
m.sbe(0,F.lF(30,1,15,0.5))
l=new O.hN()
z=O.cg(V.ai)
l.e=z
z.aD(l.geM(),l.geN())
z=new O.b2(l,"emission")
z.c=C.b
z.f=new V.U(0,0,0)
l.f=z
z=new O.b2(l,"ambient")
z.c=C.b
z.f=new V.U(0,0,0)
l.r=z
z=new O.b2(l,"diffuse")
z.c=C.b
z.f=new V.U(0,0,0)
l.x=z
z=new O.b2(l,"invDiffuse")
z.c=C.b
z.f=new V.U(0,0,0)
l.y=z
z=new O.hT(l,"specular")
z.c=C.b
z.f=new V.U(0,0,0)
z.ch=100
l.z=z
z=new O.hQ(l,"bump")
z.c=C.b
l.Q=z
l.ch=null
z=new O.b2(l,"reflect")
z.c=C.b
z.f=new V.U(0,0,0)
l.cx=z
z=new O.hS(l,"refract")
z.c=C.b
z.f=new V.U(0,0,0)
z.ch=1
l.cy=z
z=new O.hP(l,"alpha")
z.c=C.b
z.f=1
l.db=z
z=new D.hz()
z.bf(D.X)
z.e=H.c([],[D.cj])
z.f=H.c([],[D.i8])
z.r=H.c([],[D.iK])
z.x=H.c([],[D.iZ])
z.y=H.c([],[D.j_])
z.z=H.c([],[D.j0])
z.Q=null
z.ch=null
z.cA(z.geL(),z.gf5(),z.gf7())
l.dx=z
k=z.Q
if(k==null){k=D.D()
z.Q=k
z=k}else z=k
k={func:1,ret:-1,args:[D.l]}
j=H.d(l.gfh(),k)
C.a.h(z.a,j)
j=l.dx
z=j.ch
if(z==null){z=D.D()
j.ch=z}j=H.d(l.gad(),k)
C.a.h(z.a,j)
l.dy=null
j=l.dx
z=U.cN(V.e9(new V.V(0,0,0),new V.G(0,1,0),new V.G(0,-1,-1)))
i=new V.U(1,1,1)
h=new D.cj()
h.c=new V.U(1,1,1)
h.a=new V.G(0,0,1)
r=h.b
h.b=z
z=z.gp()
z.toString
g=H.d(h.gej(),k)
C.a.h(z.a,g)
z=new D.B("mover",r,h.b,h,[U.ad])
z.b=!0
h.aF(z)
if(!h.c.u(0,i)){r=h.c
h.c=i
z=new D.B("color",r,i,h,[V.U])
z.b=!0
h.aF(z)}j.h(0,h)
z=l.r
z.sam(0,new V.U(0,0,1))
z=l.x
z.sam(0,new V.U(0,1,0))
z=l.z
z.sam(0,new V.U(1,0,0))
z=l.z
if(z.c===C.b){z.c=C.f
z.bJ()
z.bY(100)
j=z.a
j.a=null
j.I(null)}z.bY(10)
z=w.f.hn("../resources/maskonaive",".jpg")
f=M.cO(null,null,null)
j=new O.iH()
j.b=1.0471975511965976
r=j.c
j.c=z
z=z.e
h=H.d(j.gad(),k)
C.a.h(z.a,h)
z=new D.B("boxTexture",r,j.c,j,[T.d8])
z.b=!0
j.I(z)
i=new V.U(1,1,1)
if(!J.H(j.d,i)){r=j.d
j.d=i
z=new D.B("boxColor",r,i,j,[V.U])
z.b=!0
j.I(z)}j.e=null
f.saq(j)
f.saC(0,n)
f.saY(o)
e=M.dS(null,null,null,null)
e.saY(o)
e.saq(l)
e.saC(0,n)
e.d.h(0,m)
d=new O.h5()
d.sdd(null)
d.sda(null)
c=new V.b3(1,0,0,0,1,0,0,0,1)
if(!J.H(d.d,c)){d.d=c
d.a8()}c=new V.b3(1,0,0,0,1,0,0,0,1)
if(!J.H(d.e,c)){d.e=c
d.a8()}d.sd9(null)
d.sdd(n.y)
d.sda(s.y)
d.sd9(V.ea(0.05,0.05,0.05,1))
b=M.cO(null,null,null)
b.saq(d)
a=new O.iU()
a0=new V.ab(0,0,0,0)
a.a=a0
z=new D.B("backColor",null,a0,a,[V.ab])
z.b=!0
a.I(z)
a.b=null
z=O.cg(O.bH)
a.c=z
z.aD(a.geU(),a.geV())
a.d=0
a.e=null
z=a.c
j=s.y
z.h(0,O.ew(null,V.aT(0,0.8,0.2,0.2),!0,null,j))
j=a.c
z=n.y
j.h(0,O.ew(null,V.aT(0,0.6,0.2,0.2),!1,null,z))
a1=M.cO(null,null,null)
a1.saC(0,X.cR(!1,!0,!1,null,2000,null,0))
a1.saq(a)
z=M.aE
j=H.c([f,e,q,b,a1],[z])
h=new M.fY()
h.bf(z)
h.e=!1
h.f=null
h.aD(h.gf8(),h.gf9())
h.c0(0,j)
z=w.d
if(z!==h){if(z!=null){z=z.gp()
z.toString
j=H.d(w.gcF(),k)
C.a.H(z.a,j)}w.d=h
z=h.gp()
z.toString
k=H.d(w.gcF(),k)
C.a.h(z.a,k)
w.eh()}V.lC(w)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dZ.prototype
return J.dY.prototype}if(typeof a=="string")return J.co.prototype
if(a==null)return J.e_.prototype
if(typeof a=="boolean")return J.hu.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.ca=function(a){if(typeof a=="string")return J.co.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.dn=function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.lj=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cw.prototype
return a}
J.lk=function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.co.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cw.prototype
return a}
J.cb=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.a)return a
return J.cD(a)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.fG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lj(a).aj(a,b)}
J.du=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lk(a).k(a,b)}
J.fH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lt(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ca(a).j(a,b)}
J.fI=function(a,b,c,d){return J.cb(a).d7(a,b,c,d)}
J.cG=function(a,b,c){return J.ca(a).h3(a,b,c)}
J.dv=function(a,b){return J.dn(a).G(a,b)}
J.fJ=function(a,b){return J.dn(a).O(a,b)}
J.aI=function(a){return J.K(a).gX(a)}
J.bX=function(a){return J.dn(a).ga2(a)}
J.bi=function(a){return J.ca(a).gl(a)}
J.aa=function(a){return J.K(a).i(a)}
I.dr=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cK.prototype
C.y=J.m.prototype
C.a=J.b0.prototype
C.z=J.dY.prototype
C.h=J.dZ.prototype
C.A=J.e_.prototype
C.c=J.c0.prototype
C.i=J.co.prototype
C.H=J.c1.prototype
C.J=H.i_.prototype
C.K=W.i0.prototype
C.p=J.i7.prototype
C.q=P.d3.prototype
C.l=J.cw.prototype
C.t=W.bN.prototype
C.u=W.jE.prototype
C.v=new P.i5()
C.w=new P.jq()
C.j=new P.kp()
C.b=new A.ch(0,"ColorSourceType.None")
C.f=new A.ch(1,"ColorSourceType.Solid")
C.e=new A.ch(2,"ColorSourceType.Texture2D")
C.d=new A.ch(3,"ColorSourceType.TextureCube")
C.m=new P.b_(0)
C.x=new P.b_(5e6)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.I=H.c(I.dr([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=new P.jp(!1)
$.az=0
$.bj=null
$.dz=null
$.dg=!1
$.fv=null
$.fp=null
$.fB=null
$.cC=null
$.cE=null
$.dp=null
$.bb=null
$.bR=null
$.bS=null
$.dh=!1
$.P=C.j
$.dO=null
$.dN=null
$.dM=null
$.dL=null
$.n=V.hU()
$.h7="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.h6="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.iJ="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iI="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ei=null
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
I.$lazy(y,x,w)}})(["dK","$get$dK",function(){return H.fu("_$dart_dartClosure")},"cV","$get$cV",function(){return H.fu("_$dart_js")},"eD","$get$eD",function(){return H.aF(H.cv({
toString:function(){return"$receiver$"}}))},"eE","$get$eE",function(){return H.aF(H.cv({$method$:null,
toString:function(){return"$receiver$"}}))},"eF","$get$eF",function(){return H.aF(H.cv(null))},"eG","$get$eG",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eK","$get$eK",function(){return H.aF(H.cv(void 0))},"eL","$get$eL",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.aF(H.eJ(null))},"eH","$get$eH",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.aF(H.eJ(void 0))},"eM","$get$eM",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dd","$get$dd",function(){return P.jF()},"bT","$get$bT",function(){return[]},"fj","$get$fj",function(){return P.im("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dJ","$get$dJ",function(){return{}},"f0","$get$f0",function(){return Z.ar(0)},"eZ","$get$eZ",function(){return Z.ar(511)},"a2","$get$a2",function(){return Z.ar(1)},"ax","$get$ax",function(){return Z.ar(2)},"aw","$get$aw",function(){return Z.ar(4)},"ak","$get$ak",function(){return Z.ar(8)},"ay","$get$ay",function(){return Z.ar(16)},"bL","$get$bL",function(){return Z.ar(32)},"bM","$get$bM",function(){return Z.ar(64)},"f_","$get$f_",function(){return Z.ar(96)},"b8","$get$b8",function(){return Z.ar(128)},"aO","$get$aO",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:-1,args:[P.p,,]},{func:1,ret:-1,args:[P.A,[P.f,E.aK]]},{func:1,ret:P.J,args:[F.an]},{func:1,ret:P.J,args:[D.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.J,args:[W.ac]},{func:1,ret:-1,args:[P.A,[P.f,O.bH]]},{func:1,ret:-1,args:[P.A,[P.f,V.ai]]},{func:1,ret:P.J,args:[F.ap,P.w,P.w]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.p,args:[P.A]},{func:1,ret:-1,args:[P.A,[P.f,M.aE]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.A,[P.f,U.ad]]},{func:1,ret:P.w},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[P.A,[P.f,D.X]]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:-1,args:[W.bN]},{func:1,ret:P.a6,args:[P.w,P.w]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:W.a4,args:[W.L]},{func:1,ret:P.a6,args:[W.L]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:V.V,args:[P.w]},{func:1,ret:P.a6,args:[[P.f,D.X]]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.av]},{func:1,args:[P.p]},{func:1,ret:P.J,args:[P.b6]},{func:1,args:[,P.p]},{func:1,ret:P.J,args:[P.S]}]
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
if(x==y)H.lE(d||a)
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
Isolate.dr=a.dr
Isolate.dl=a.dl
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fy,[])
else S.fy([])})})()
//# sourceMappingURL=test.dart.js.map
