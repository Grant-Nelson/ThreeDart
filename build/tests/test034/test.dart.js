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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d2(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d3=function(){}
var dart=[["","",,H,{"^":"",lm:{"^":"a;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
d8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ch:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d6==null){H.ka()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.ej("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cz()]
if(v!=null)return v
v=H.kf(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$cz(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
m:{"^":"a;",
u:function(a,b){return a===b},
gP:function(a){return H.bk(a)},
i:["dK",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fJ:{"^":"m;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isa7:1},
dD:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isG:1},
cA:{"^":"m;",
gP:function(a){return 0},
i:["dL",function(a){return String(a)}]},
hi:{"^":"cA;"},
cU:{"^":"cA;"},
bL:{"^":"cA;",
i:function(a){var z=a[$.$get$dn()]
if(z==null)return this.dL(a)
return"JavaScript function for "+H.h(J.a3(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscv:1},
bK:{"^":"m;$ti",
h:function(a,b){H.B(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ab("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.r(P.ab("remove"))
for(z=0;z<a.length;++z)if(J.U(a[z],b)){a.splice(z,1)
return!0}return!1},
bI:function(a,b){var z,y
H.x(b,"$isd",[H.z(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ab("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.b7(a))}},
X:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a4(z,y,H.h(a[y]))
return z.join(b)},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gc0:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.fH())},
aR:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
i:function(a){return P.cw(a,"[","]")},
gV:function(a){return new J.ai(a,a.length,0,[H.z(a,0)])},
gP:function(a){return H.bk(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ab("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.bZ(b,"newLength",null))
if(b<0)throw H.i(P.bl(b,0,null,"newLength",null))
a.length=b},
a4:function(a,b,c){H.Y(b)
H.B(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ab("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.bT(a,b))
if(b>=a.length||b<0)throw H.i(H.bT(a,b))
a[b]=c},
$isd:1,
$ise:1,
t:{
fI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.bZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.bl(a,0,4294967295,"length",null))
return J.dA(new Array(a),b)},
dA:function(a,b){return J.be(H.f(a,[b]))},
be:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
ll:{"^":"bK;$ti"},
ai:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c7:{"^":"m;",
hb:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.ab(""+a+".toInt()"))},
bZ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.ab(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ab(""+a+".round()"))},
dw:function(a,b){var z,y
if(b>20)throw H.i(P.bl(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.i(H.bS(b))
return a*b},
dF:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cL(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cL(a,b)},
cL:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.ab("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
cJ:function(a,b){var z
if(a>0)z=this.eW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eW:function(a,b){return b>31?0:a>>>b},
ag:function(a,b){if(typeof b!=="number")throw H.i(H.bS(b))
return a<b},
$isv:1,
$isS:1},
dC:{"^":"c7;",$isM:1},
dB:{"^":"c7;"},
cy:{"^":"m;",
e1:function(a,b){if(b>=a.length)throw H.i(H.bT(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.T(b)
if(typeof b!=="string")throw H.i(P.bZ(b,null,null))
return a+b},
ce:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b>c)throw H.i(P.cK(b,null,null))
if(c>a.length)throw H.i(P.cK(c,null,null))
return a.substring(b,c)},
cd:function(a,b){return this.ce(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fS:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a7:function(a,b){return this.fS(a,b," ")},
fu:function(a,b,c){if(c>a.length)throw H.i(P.bl(c,0,a.length,null,null))
return H.kr(a,b,c)},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ishg:1,
$iso:1}}],["","",,H,{"^":"",
fH:function(){return new P.hK("No element")},
fu:{"^":"d;"},
fT:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bV(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.i(P.b7(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
fZ:{"^":"d;a,b,$ti",
gV:function(a){return new H.h_(J.bY(this.a),this.b,this.$ti)},
gk:function(a){return J.b5(this.a)},
C:function(a,b){return this.b.$1(J.db(this.a,b))},
$asd:function(a,b){return[b]}},
h_:{"^":"cx;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascx:function(a,b){return[b]}},
it:{"^":"d;a,b,$ti",
gV:function(a){return new H.iu(J.bY(this.a),this.b,this.$ti)}},
iu:{"^":"cx;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
c4:{"^":"a;$ti"}}],["","",,H,{"^":"",
k5:function(a){return init.types[H.Y(a)]},
kd:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isA},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a3(a)
if(typeof z!=="string")throw H.i(H.bS(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aS:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.H(a).$iscU){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.e1(w,0)===36)w=C.i.cd(w,1)
r=H.d7(H.bW(H.aN(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hq:function(a){return a.b?H.a5(a).getUTCFullYear()+0:H.a5(a).getFullYear()+0},
ho:function(a){return a.b?H.a5(a).getUTCMonth()+1:H.a5(a).getMonth()+1},
hk:function(a){return a.b?H.a5(a).getUTCDate()+0:H.a5(a).getDate()+0},
hl:function(a){return a.b?H.a5(a).getUTCHours()+0:H.a5(a).getHours()+0},
hn:function(a){return a.b?H.a5(a).getUTCMinutes()+0:H.a5(a).getMinutes()+0},
hp:function(a){return a.b?H.a5(a).getUTCSeconds()+0:H.a5(a).getSeconds()+0},
hm:function(a){return a.b?H.a5(a).getUTCMilliseconds()+0:H.a5(a).getMilliseconds()+0},
p:function(a){throw H.i(H.bS(a))},
k:function(a,b){if(a==null)J.b5(a)
throw H.i(H.bT(a,b))},
bT:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.Y(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.cK(b,"index",null)},
bS:function(a){return new P.aI(!0,a,null,null)},
jY:function(a){if(typeof a!=="number")throw H.i(H.bS(a))
return a},
i:function(a){var z
if(a==null)a=new P.dM()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eY})
z.name=""}else z.toString=H.eY
return z},
eY:function(){return J.a3(this.dartException)},
r:function(a){throw H.i(a)},
y:function(a){throw H.i(P.b7(a))},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ku(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cJ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dL(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e2()
u=$.$get$e3()
t=$.$get$e4()
s=$.$get$e5()
r=$.$get$e9()
q=$.$get$ea()
p=$.$get$e7()
$.$get$e6()
o=$.$get$ec()
n=$.$get$eb()
m=v.a6(y)
if(m!=null)return z.$1(H.cC(H.T(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.T(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dL(H.T(y),m))}}return z.$1(new H.id(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dU()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dU()
return a},
b3:function(a){var z
if(a==null)return new H.eB(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eB(a)},
k3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a4(0,a[y],a[x])}return b},
kc:function(a,b,c,d,e,f){H.j(a,"$iscv")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.q("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kc)
a.$identity=z
return z},
fe:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$ise){z.$reflectionInfo=d
x=H.hs(z).r}else x=d
w=e?Object.create(new H.hL().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.an
if(typeof u!=="number")return u.D()
$.an=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dk(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.k5,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.df:H.cn
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.i("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dk(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fb:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dk:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fd(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fb(y,!w,z,b)
if(y===0){w=$.an
if(typeof w!=="number")return w.D()
$.an=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.an
if(typeof w!=="number")return w.D()
$.an=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fc:function(a,b,c,d){var z,y
z=H.cn
y=H.df
switch(b?-1:a){case 0:throw H.i(H.hA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fd:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.c_("self")
$.b6=z}y=$.de
if(y==null){y=H.c_("receiver")
$.de=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fc(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.an
if(typeof y!=="number")return y.D()
$.an=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.an
if(typeof y!=="number")return y.D()
$.an=y+1
return new Function(z+y+"}")()},
d2:function(a,b,c,d,e,f,g){var z,y
z=J.be(H.bW(b))
H.Y(c)
y=!!J.H(d).$ise?J.be(d):d
return H.fe(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.au(a,"String"))},
ki:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.au(a,"num"))},
eO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.au(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.au(a,"int"))},
eW:function(a,b){throw H.i(H.au(a,H.T(b).substring(3)))},
kk:function(a,b){var z=J.bV(b)
throw H.i(H.fa(a,z.ce(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.eW(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.kk(a,b)},
bW:function(a){if(a==null)return a
if(!!J.H(a).$ise)return a
throw H.i(H.au(a,"List"))},
ke:function(a,b){if(a==null)return a
if(!!J.H(a).$ise)return a
if(J.H(a)[b])return a
H.eW(a,b)},
eP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
bU:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eP(J.H(a))
if(z==null)return!1
y=H.eS(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cZ)return a
$.cZ=!0
try{if(H.bU(a,b))return a
z=H.bX(b)
y=H.au(a,z)
throw H.i(y)}finally{$.cZ=!1}},
d4:function(a,b){if(a!=null&&!H.d1(a,b))H.r(H.au(a,H.bX(b)))
return a},
eJ:function(a){var z
if(a instanceof H.u){z=H.eP(J.H(a))
if(z!=null)return H.bX(z)
return"Closure"}return H.aS(a)},
kt:function(a){throw H.i(new P.fl(H.T(a)))},
eQ:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
mj:function(a,b,c){return H.b4(a["$as"+H.h(c)],H.aN(b))},
bE:function(a,b,c,d){var z
H.T(c)
H.Y(d)
z=H.b4(a["$as"+H.h(c)],H.aN(b))
return z==null?null:z[d]},
aM:function(a,b,c){var z
H.T(b)
H.Y(c)
z=H.b4(a["$as"+H.h(b)],H.aN(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Y(b)
z=H.aN(a)
return z==null?null:z[b]},
bX:function(a){var z=H.aO(a,null)
return z},
aO:function(a,b){var z,y
H.x(b,"$ise",[P.o],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d7(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.h(b[y])}if('func' in a)return H.jO(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.x(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d7:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$ise",[P.o],"$ase")
if(a==null)return""
z=new P.bP("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}v="<"+z.i(0)+">"
return v},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b_:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aN(a)
y=J.H(a)
if(y[b]==null)return!1
return H.eM(H.b4(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.T(b)
H.bW(c)
H.T(d)
if(a==null)return a
z=H.b_(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d7(c,0,null)
throw H.i(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ah(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ah(a[y],b,c[y],d))return!1
return!0},
mh:function(a,b,c){return a.apply(b,H.b4(J.H(b)["$as"+H.h(c)],H.aN(b)))},
eT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.eT(z)}return!1},
d1:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.eT(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bU(a,b)}y=J.H(a).constructor
x=H.aN(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ah(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.d1(a,b))throw H.i(H.au(a,H.bX(b)))
return a},
ah:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.eS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cv"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ah("type" in a?a.type:null,b,x,d)
else if(H.ah(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b4(w,z?a.slice(1):null)
return H.ah(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bX(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eM(H.b4(r,z),b,u,d)},
eS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ah(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ah(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ah(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ah(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kh(m,b,l,d)},
kh:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ah(c[w],d,a[w],b))return!1}return!0},
mi:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kf:function(a){var z,y,x,w,v,u
z=H.T($.eR.$1(a))
y=$.cg[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.eL.$2(a,z))
if(z!=null){y=$.cg[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cj(x)
$.cg[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ci[z]=x
return x}if(v==="-"){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eV(a,x)
if(v==="*")throw H.i(P.ej(z))
if(init.leafTags[z]===true){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eV(a,x)},
eV:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d8(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cj:function(a){return J.d8(a,!1,null,!!a.$isA)},
kg:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cj(z)
else return J.d8(z,c,null,null)},
ka:function(){if(!0===$.d6)return
$.d6=!0
H.kb()},
kb:function(){var z,y,x,w,v,u,t,s
$.cg=Object.create(null)
$.ci=Object.create(null)
H.k6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eX.$1(v)
if(u!=null){t=H.kg(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k6:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.aZ(C.z,H.aZ(C.E,H.aZ(C.o,H.aZ(C.o,H.aZ(C.D,H.aZ(C.A,H.aZ(C.B(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eR=new H.k7(v)
$.eL=new H.k8(u)
$.eX=new H.k9(t)},
aZ:function(a,b){return a(b)||b},
kr:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hr:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hs:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.be(z)
y=z[0]
x=z[1]
return new H.hr(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i1:{"^":"a;a,b,c,d,e,f",
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
t:{
at:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ca:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e8:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
he:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dL:function(a,b){return new H.he(a,b==null?null:b.method)}}},
fK:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
t:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fK(a,y,z?null:b.receiver)}}},
id:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ku:{"^":"u:16;a",
$1:function(a){if(!!J.H(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eB:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isal:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aS(this).trim()+"'"},
gdB:function(){return this},
$iscv:1,
gdB:function(){return this}},
dX:{"^":"u;"},
hL:{"^":"dX;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cm:{"^":"dX;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aH(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
t:{
cn:function(a){return a.a},
df:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.be(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i2:{"^":"X;a",
i:function(a){return this.a},
t:{
au:function(a,b){return new H.i2("TypeError: "+H.h(P.c3(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
f9:{"^":"X;a",
i:function(a){return this.a},
t:{
fa:function(a,b){return new H.f9("CastError: "+H.h(P.c3(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
hz:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
t:{
hA:function(a){return new H.hz(a)}}},
cB:{"^":"fX;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gat:function(a){return new H.fO(this,[H.z(this,0)])},
fv:function(a,b){var z=this.b
if(z==null)return!1
return this.e4(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b4(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b4(w,b)
x=y==null?null:y.b
return x}else return this.fG(b)},
fG:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cz(z,J.aH(a)&0x3ffffff)
x=this.dk(y,a)
if(x<0)return
return y[x].b},
a4:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bC()
this.b=z}this.cn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bC()
this.c=y}this.cn(y,b,c)}else{x=this.d
if(x==null){x=this.bC()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.cz(x,w)
if(v==null)this.bG(x,w,[this.bD(b,c)])
else{u=this.dk(v,b)
if(u>=0)v[u].b=c
else v.push(this.bD(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.b7(this))
z=z.c}},
cn:function(a,b,c){var z
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
z=this.b4(a,b)
if(z==null)this.bG(a,b,this.bD(b,c))
else z.b=c},
ec:function(){this.r=this.r+1&67108863},
bD:function(a,b){var z,y
z=new H.fN(H.B(a,H.z(this,0)),H.B(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ec()
return z},
dk:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
i:function(a){return P.dI(this)},
b4:function(a,b){return a[b]},
cz:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
e4:function(a,b){return this.b4(a,b)!=null},
bC:function(){var z=Object.create(null)
this.bG(z,"<non-identifier-key>",z)
this.e7(z,"<non-identifier-key>")
return z},
$isdG:1},
fN:{"^":"a;a,b,0c,0d"},
fO:{"^":"fu;a,$ti",
gk:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.fP(z,z.r,this.$ti)
y.c=z.e
return y}},
fP:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k7:{"^":"u:16;a",
$1:function(a){return this.a(a)}},
k8:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
k9:{"^":"u:27;a",
$1:function(a){return this.a(H.T(a))}}}],["","",,H,{"^":"",
k2:function(a){return J.dA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.bT(b,a))},
hc:{"^":"m;",$ism0:1,"%":"DataView;ArrayBufferView;cI|ev|ew|hb|ex|ey|aK"},
cI:{"^":"hc;",
gk:function(a){return a.length},
$isA:1,
$asA:I.d3},
hb:{"^":"ew;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$asc4:function(){return[P.v]},
$ast:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aK:{"^":"ey;",
$asc4:function(){return[P.M]},
$ast:function(){return[P.M]},
$isd:1,
$asd:function(){return[P.M]},
$ise:1,
$ase:function(){return[P.M]}},
lw:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lx:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ly:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lz:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lA:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lB:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lC:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ev:{"^":"cI+t;"},
ew:{"^":"ev+c4;"},
ex:{"^":"cI+t;"},
ey:{"^":"ex+c4;"}}],["","",,P,{"^":"",
iw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jV()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b0(new P.iy(z),1)).observe(y,{childList:true})
return new P.ix(z,y,x)}else if(self.setImmediate!=null)return P.jW()
return P.jX()},
m6:[function(a){self.scheduleImmediate(H.b0(new P.iz(H.b(a,{func:1,ret:-1})),0))},"$1","jV",4,0,12],
m7:[function(a){self.setImmediate(H.b0(new P.iA(H.b(a,{func:1,ret:-1})),0))},"$1","jW",4,0,12],
m8:[function(a){H.b(a,{func:1,ret:-1})
P.ju(0,a)},"$1","jX",4,0,12],
e0:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aT]})
z=C.f.Z(a.a,1000)
return P.jv(z<0?0:z,b)},
jR:function(a,b){if(H.bU(a,{func:1,args:[P.a,P.al]}))return b.h0(a,null,P.a,P.al)
if(H.bU(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.bZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jQ:function(){var z,y
for(;z=$.aY,z!=null;){$.bC=null
y=z.b
$.aY=y
if(y==null)$.bB=null
z.a.$0()}},
mg:[function(){$.d_=!0
try{P.jQ()}finally{$.bC=null
$.d_=!1
if($.aY!=null)$.$get$cW().$1(P.eN())}},"$0","eN",0,0,3],
eI:function(a){var z=new P.ep(H.b(a,{func:1,ret:-1}))
if($.aY==null){$.bB=z
$.aY=z
if(!$.d_)$.$get$cW().$1(P.eN())}else{$.bB.b=z
$.bB=z}},
jU:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.eI(a)
$.bC=$.bB
return}y=new P.ep(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.aY=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
kl:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.O
if(C.j===y){P.cf(null,null,C.j,a)
return}y.toString
P.cf(null,null,y,H.b(y.cP(a),z))},
i_:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aT]}
H.b(b,z)
y=$.O
if(y===C.j){y.toString
return P.e0(a,b)}x=y.cQ(b,P.aT)
$.O.toString
return P.e0(a,H.b(x,z))},
ce:function(a,b,c,d,e){var z={}
z.a=d
P.jU(new P.jS(z,e))},
eG:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
eH:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
jT:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cf:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cP(d):c.fs(d,-1)
P.eI(d)},
iy:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ix:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iz:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iA:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eE:{"^":"a;a,0b,c",
dT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b0(new P.jx(this,b),0),a)
else throw H.i(P.ab("`setTimeout()` not found."))},
dU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b0(new P.jw(this,a,Date.now(),b),0),a)
else throw H.i(P.ab("Periodic timer."))},
$isaT:1,
t:{
ju:function(a,b){var z=new P.eE(!0,0)
z.dT(a,b)
return z},
jv:function(a,b){var z=new P.eE(!1,0)
z.dU(a,b)
return z}}},
jx:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jw:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dN(w,x)}z.c=y
this.d.$1(z)}},
aX:{"^":"a;0a,b,c,d,e,$ti",
fM:function(a){if(this.c!==6)return!0
return this.b.b.c8(H.b(this.d,{func:1,ret:P.a7,args:[P.a]}),a.a,P.a7,P.a)},
fF:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bU(z,{func:1,args:[P.a,P.al]}))return H.d4(w.h5(z,a.a,a.b,null,y,P.al),x)
else return H.d4(w.c8(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;cK:a<,b,0eP:c<,$ti",
dv:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jR(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.O,[c])
w=b==null?1:3
this.co(new P.aX(x,w,a,b,[z,c]))
return x},
ha:function(a,b){return this.dv(a,null,b)},
co:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaX")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaE")
z=y.a
if(z<4){y.co(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cf(null,null,z,H.b(new P.iO(this,a),{func:1,ret:-1}))}},
cD:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaX")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaE")
y=u.a
if(y<4){u.cD(a)
return}this.a=y
this.c=u.c}z.a=this.b5(a)
y=this.b
y.toString
P.cf(null,null,y,H.b(new P.iT(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.j(this.c,"$isaX")
this.c=null
return this.b5(z)},
b5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cr:function(a){var z,y,x,w
z=H.z(this,0)
H.d4(a,{futureOr:1,type:z})
y=this.$ti
x=H.b_(a,"$isbb",y,"$asbb")
if(x){z=H.b_(a,"$isaE",y,null)
if(z)P.er(a,this)
else P.iP(a,this)}else{w=this.bF()
H.B(a,z)
this.a=4
this.c=a
P.bx(this,w)}},
bu:[function(a,b){var z
H.j(b,"$isal")
z=this.bF()
this.a=8
this.c=new P.ac(a,b)
P.bx(this,z)},function(a){return this.bu(a,null)},"hf","$2","$1","ge2",4,2,30],
$isbb:1,
t:{
iP:function(a,b){var z,y,x
b.a=1
try{a.dv(new P.iQ(b),new P.iR(b),null)}catch(x){z=H.aG(x)
y=H.b3(x)
P.kl(new P.iS(b,z,y))}},
er:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaE")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.j(b.c,"$isaX")
b.a=2
b.c=a
a.cD(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isac")
y=y.b
u=v.a
t=v.b
y.toString
P.ce(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bx(z.a,b)}y=z.a
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
if(p){H.j(r,"$isac")
y=y.b
u=r.a
t=r.b
y.toString
P.ce(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.iW(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iV(x,b,r).$0()}else if((y&2)!==0)new P.iU(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.H(y).$isbb){if(y.a>=4){n=H.j(t.c,"$isaX")
t.c=null
b=t.b5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.er(y,t)
return}}m=b.b
n=H.j(m.c,"$isaX")
m.c=null
b=m.b5(n)
y=x.a
u=x.b
if(!y){H.B(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
iO:{"^":"u:2;a,b",
$0:function(){P.bx(this.a,this.b)}},
iT:{"^":"u:2;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
iQ:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.cr(a)}},
iR:{"^":"u:34;a",
$2:function(a,b){this.a.bu(a,H.j(b,"$isal"))},
$1:function(a){return this.$2(a,null)}},
iS:{"^":"u:2;a,b,c",
$0:function(){this.a.bu(this.b,this.c)}},
iW:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dt(H.b(w.d,{func:1}),null)}catch(v){y=H.aG(v)
x=H.b3(v)
if(this.d){w=H.j(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.H(z).$isbb){if(z instanceof P.aE&&z.gcK()>=4){if(z.gcK()===8){w=this.b
w.b=H.j(z.geP(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ha(new P.iX(t),null)
w.a=!1}}},
iX:{"^":"u:36;a",
$1:function(a){return this.a}},
iV:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.B(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.c8(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aG(t)
y=H.b3(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
iU:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isac")
w=this.c
if(w.fM(z)&&w.e!=null){v=this.b
v.b=w.fF(z)
v.a=!1}}catch(u){y=H.aG(u)
x=H.b3(u)
w=H.j(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
ep:{"^":"a;a,0b"},
cP:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aE(0,$.O,[P.M])
z.a=0
this.fJ(new P.hN(z,this),!0,new P.hO(z,y),y.ge2())
return y}},
hN:{"^":"u;a,b",
$1:function(a){H.B(a,H.aM(this.b,"cP",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aM(this.b,"cP",0)]}}},
hO:{"^":"u:2;a,b",
$0:function(){this.b.cr(this.a.a)}},
dV:{"^":"a;$ti"},
aT:{"^":"a;"},
ac:{"^":"a;a,b",
i:function(a){return H.h(this.a)},
$isX:1},
jC:{"^":"a;",$ism5:1},
jS:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dM()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
jg:{"^":"jC;",
h6:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.O){a.$0()
return}P.eG(null,null,this,a,-1)}catch(x){z=H.aG(x)
y=H.b3(x)
P.ce(null,null,this,z,H.j(y,"$isal"))}},
h7:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.O){a.$1(b)
return}P.eH(null,null,this,a,b,-1,c)}catch(x){z=H.aG(x)
y=H.b3(x)
P.ce(null,null,this,z,H.j(y,"$isal"))}},
fs:function(a,b){return new P.ji(this,H.b(a,{func:1,ret:b}),b)},
cP:function(a){return new P.jh(this,H.b(a,{func:1,ret:-1}))},
cQ:function(a,b){return new P.jj(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dt:function(a,b){H.b(a,{func:1,ret:b})
if($.O===C.j)return a.$0()
return P.eG(null,null,this,a,b)},
c8:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.O===C.j)return a.$1(b)
return P.eH(null,null,this,a,b,c,d)},
h5:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.O===C.j)return a.$2(b,c)
return P.jT(null,null,this,a,b,c,d,e,f)},
h0:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
ji:{"^":"u;a,b,c",
$0:function(){return this.a.dt(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jh:{"^":"u:3;a,b",
$0:function(){return this.a.h6(this.b)}},
jj:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.h7(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fR:function(a,b,c){H.bW(a)
return H.x(H.k3(a,new H.cB(0,0,[b,c])),"$isdG",[b,c],"$asdG")},
fQ:function(a,b){return new H.cB(0,0,[a,b])},
fS:function(a,b,c,d){return new P.j2(0,0,[d])},
fG:function(a,b,c){var z,y
if(P.d0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.jP(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dW(b,H.ke(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cw:function(a,b,c){var z,y,x
if(P.d0(a))return b+"..."+c
z=new P.bP(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.dW(x.gay(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
d0:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
jP:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.h(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.E();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dI:function(a){var z,y,x
z={}
if(P.d0(a))return"{...}"
y=new P.bP("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.f2(a,new P.fY(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
j2:{"^":"iY;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){return P.eu(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cY()
this.b=z}return this.cp(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cY()
this.c=y}return this.cp(y,b)}else return this.dW(0,b)},
dW:function(a,b){var z,y,x
H.B(b,H.z(this,0))
z=this.d
if(z==null){z=P.cY()
this.d=z}y=this.cs(b)
x=z[y]
if(x==null)z[y]=[this.bt(b)]
else{if(this.cw(x,b)>=0)return!1
x.push(this.bt(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cE(this.c,b)
else return this.eK(0,b)},
eK:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e9(z,b)
x=this.cw(y,b)
if(x<0)return!1
this.cM(y.splice(x,1)[0])
return!0},
cp:function(a,b){H.B(b,H.z(this,0))
if(H.j(a[b],"$iscX")!=null)return!1
a[b]=this.bt(b)
return!0},
cE:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscX")
if(z==null)return!1
this.cM(z)
delete a[b]
return!0},
cq:function(){this.r=this.r+1&67108863},
bt:function(a){var z,y
z=new P.cX(H.B(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cq()
return z},
cM:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cq()},
cs:function(a){return J.aH(a)&0x3ffffff},
e9:function(a,b){return a[this.cs(b)]},
cw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
t:{
cY:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cX:{"^":"a;a,0b,0c"},
j3:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.z(this,0))
this.c=z.b
return!0}}},
t:{
eu:function(a,b,c){var z=new P.j3(a,b,[c])
z.c=a.e
return z}}},
iY:{"^":"hB;"},
cE:{"^":"j4;",$isd:1,$ise:1},
t:{"^":"a;$ti",
gV:function(a){return new H.fT(a,this.gk(a),0,[H.bE(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hd:function(a,b){var z,y,x
z=H.f([],[H.bE(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a4(z,y,this.j(a,y));++y}return z},
hc:function(a){return this.hd(a,!0)},
i:function(a){return P.cw(a,"[","]")}},
fX:{"^":"a8;"},
fY:{"^":"u:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
a8:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bE(this,a,"a8",0),H.bE(this,a,"a8",1)]})
for(z=J.bY(this.gat(a));z.E();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b5(this.gat(a))},
i:function(a){return P.dI(a)},
$isa1:1},
hC:{"^":"a;$ti",
i:function(a){return P.cw(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dc("index"))
if(b<0)H.r(P.bl(b,0,null,"index",null))
for(z=P.eu(this,this.r,H.z(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.i(P.L(b,this,"index",null,y))},
$isd:1},
hB:{"^":"hC;"},
j4:{"^":"a+t;"}}],["","",,P,{"^":"",
fx:function(a){var z=J.H(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aS(a)+"'"},
fU:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fI(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a4(z,y,b)
return H.x(z,"$ise",[d],"$ase")},
fV:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gV(a);x.E();)C.a.h(y,H.B(x.gM(x),c))
if(b)return y
return H.x(J.be(y),"$ise",z,"$ase")},
c3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fx(a)},
q:function(a){return new P.eq(a)},
da:function(a){H.kj(a)},
a7:{"^":"a;"},
"+bool":0,
aj:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gP:function(a){var z=this.a
return(z^C.f.cJ(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fm(H.hq(this))
y=P.bF(H.ho(this))
x=P.bF(H.hk(this))
w=P.bF(H.hl(this))
v=P.bF(H.hn(this))
u=P.bF(H.hp(this))
t=P.fn(H.hm(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fm:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fn:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bF:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"S;"},
"+double":0,
bG:{"^":"a;a",
ag:function(a,b){return C.f.ag(this.a,H.j(b,"$isbG").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bG))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ft()
y=this.a
if(y<0)return"-"+new P.bG(0-y).i(0)
x=z.$1(C.f.Z(y,6e7)%60)
w=z.$1(C.f.Z(y,1e6)%60)
v=new P.fs().$1(y%1e6)
return""+C.f.Z(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
t:{
du:function(a,b,c,d,e,f){return new P.bG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fs:{"^":"u:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ft:{"^":"u:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dM:{"^":"X;",
i:function(a){return"Throw of null."}},
aI:{"^":"X;a,b,c,d",
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbw()+y+x
if(!this.a)return w
v=this.gbv()
u=P.c3(this.b)
return w+v+": "+H.h(u)},
t:{
f4:function(a){return new P.aI(!1,null,null,a)},
bZ:function(a,b,c){return new P.aI(!0,a,b,c)},
dc:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
dP:{"^":"aI;e,f,a,b,c,d",
gbw:function(){return"RangeError"},
gbv:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
t:{
cK:function(a,b,c){return new P.dP(null,null,!0,a,b,"Value not in range")},
bl:function(a,b,c,d,e){return new P.dP(b,c,!0,a,d,"Invalid value")}}},
fF:{"^":"aI;e,k:f>,a,b,c,d",
gbw:function(){return"RangeError"},
gbv:function(){if(J.eZ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
t:{
L:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b5(b))
return new P.fF(b,z,!0,a,c,"Index out of range")}}},
ie:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
ab:function(a){return new P.ie(a)}}},
ic:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ej:function(a){return new P.ic(a)}}},
hK:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fh:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.c3(z))+"."},
t:{
b7:function(a){return new P.fh(a)}}},
hf:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
dU:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fl:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eq:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
M:{"^":"S;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gV(this)
for(y=0;z.E();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.dc("index"))
if(b<0)H.r(P.bl(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.E();){x=z.gM(z)
if(b===y)return x;++y}throw H.i(P.L(b,this,"index",null,y))},
i:function(a){return P.fG(this,"(",")")}},
cx:{"^":"a;$ti"},
e:{"^":"a;$ti",$isd:1},
"+List":0,
a1:{"^":"a;$ti"},
G:{"^":"a;",
gP:function(a){return P.a.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gP:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.i(this)}},
al:{"^":"a;"},
o:{"^":"a;",$ishg:1},
"+String":0,
bP:{"^":"a;ay:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dW:function(a,b,c){var z=J.bY(b)
if(!z.E())return a
if(c.length===0){do a+=H.h(z.gM(z))
while(z.E())}else{a+=H.h(z.gM(z))
for(;z.E();)a=a+c+H.h(z.gM(z))}return a}}}}],["","",,W,{"^":"",
cq:function(a,b){var z=document.createElement("canvas")
return z},
fv:function(a){H.j(a,"$isa0")
return"wheel"},
dz:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
cc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
et:function(a,b,c,d){var z,y
z=W.cc(W.cc(W.cc(W.cc(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eK:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.j)return a
return z.cQ(a,b)},
aP:{"^":"Z;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kw:{"^":"cM;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kx:{"^":"m;0k:length=","%":"AccessibleNodeList"},
ky:{"^":"aP;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kz:{"^":"aP;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f8:{"^":"m;","%":";Blob"},
cp:{"^":"aP;",
bp:function(a,b,c){if(c!=null)return a.getContext(b,P.jZ(c,null))
return a.getContext(b)},
dD:function(a,b){return this.bp(a,b,null)},
$iscp:1,
"%":"HTMLCanvasElement"},
di:{"^":"m;",$isdi:1,"%":"CanvasRenderingContext2D"},
kF:{"^":"I;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kH:{"^":"c2;0k:length=","%":"CSSPerspective"},
kI:{"^":"ct;0n:x=,0p:y=","%":"CSSPositionValue"},
kJ:{"^":"c2;0n:x=,0p:y=","%":"CSSRotation"},
b8:{"^":"m;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kK:{"^":"c2;0n:x=,0p:y=","%":"CSSScale"},
fj:{"^":"iE;0k:length=",
dE:function(a,b){var z=a.getPropertyValue(this.br(a,b))
return z==null?"":z},
br:function(a,b){var z,y
z=$.$get$dm()
y=z[b]
if(typeof y==="string")return y
y=this.eX(a,b)
z[b]=y
return y},
eX:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fo()+b
if(z in a)return z
return b},
cI:function(a,b,c,d){a.setProperty(b,c,d)},
gbM:function(a){return a.bottom},
gaj:function(a){return a.height},
gaG:function(a){return a.left},
gaX:function(a){return a.right},
gb0:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fk:{"^":"a;",
gaG:function(a){return this.dE(a,"left")}},
ct:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c2:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kL:{"^":"ct;0k:length=","%":"CSSTransformValue"},
kM:{"^":"c2;0n:x=,0p:y=","%":"CSSTranslation"},
kN:{"^":"ct;0k:length=","%":"CSSUnparsedValue"},
kO:{"^":"m;0k:length=","%":"DataTransferItemList"},
kP:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
kQ:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
kR:{"^":"fq;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fq:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
kS:{"^":"iG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a6,P.S]]},
$ast:function(){return[[P.a6,P.S]]},
$isd:1,
$asd:function(){return[[P.a6,P.S]]},
$ise:1,
$ase:function(){return[[P.a6,P.S]]},
$asw:function(){return[[P.a6,P.S]]},
"%":"ClientRectList|DOMRectList"},
fr:{"^":"m;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gak(a))+" x "+H.h(this.gaj(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b_(b,"$isa6",[P.S],"$asa6")
if(!z)return!1
z=J.b2(b)
return a.left===z.gaG(b)&&a.top===z.gb0(b)&&this.gak(a)===z.gak(b)&&this.gaj(a)===z.gaj(b)},
gP:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF)},
gbM:function(a){return a.bottom},
gaj:function(a){return a.height},
gaG:function(a){return a.left},
gaX:function(a){return a.right},
gb0:function(a){return a.top},
gak:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa6:1,
$asa6:function(){return[P.S]},
"%":";DOMRectReadOnly"},
kT:{"^":"iI;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.o]},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$asw:function(){return[P.o]},
"%":"DOMStringList"},
kU:{"^":"m;0k:length=","%":"DOMTokenList"},
iD:{"^":"cE;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.j(z[b],"$isZ")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.hc(this)
return new J.ai(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.Z]},
$asd:function(){return[W.Z]},
$ase:function(){return[W.Z]}},
Z:{"^":"I;",
gcS:function(a){return new W.iD(a,a.children)},
gb8:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ag()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ag()
if(w<0)w=-w*0
return new P.a6(z,y,x,w,[P.S])},
i:function(a){return a.localName},
$isZ:1,
"%":";Element"},
a_:{"^":"m;",$isa_:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a0:{"^":"m;",
cN:["dJ",function(a,b,c,d){H.b(c,{func:1,args:[W.a_]})
if(c!=null)this.dX(a,b,c,!1)}],
dX:function(a,b,c,d){return a.addEventListener(b,H.b0(H.b(c,{func:1,args:[W.a_]}),1),!1)},
$isa0:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ez|eA|eC|eD"},
ba:{"^":"f8;",$isba:1,"%":"File"},
lc:{"^":"iN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.ba]},
$ast:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$ise:1,
$ase:function(){return[W.ba]},
$asw:function(){return[W.ba]},
"%":"FileList"},
ld:{"^":"a0;0k:length=","%":"FileWriter"},
lg:{"^":"aP;0k:length=","%":"HTMLFormElement"},
bc:{"^":"m;",$isbc:1,"%":"Gamepad"},
lh:{"^":"cM;0n:x=,0p:y=","%":"Gyroscope"},
li:{"^":"m;0k:length=","%":"History"},
lj:{"^":"j_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$ast:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$ise:1,
$ase:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c5:{"^":"m;0cU:data=",$isc5:1,"%":"ImageData"},
dy:{"^":"aP;",$isdy:1,"%":"HTMLImageElement"},
bf:{"^":"cR;",$isbf:1,"%":"KeyboardEvent"},
lo:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lp:{"^":"cM;0n:x=,0p:y=","%":"Magnetometer"},
lr:{"^":"m;0k:length=","%":"MediaList"},
ls:{"^":"a0;",
cN:function(a,b,c,d){H.b(c,{func:1,args:[W.a_]})
if(b==="message")a.start()
this.dJ(a,b,c,!1)},
"%":"MessagePort"},
lt:{"^":"j5;",
j:function(a,b){return P.aF(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gat:function(a){var z=H.f([],[P.o])
this.J(a,new W.h8(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"MIDIInputMap"},
h8:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lu:{"^":"j6;",
j:function(a,b){return P.aF(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gat:function(a){var z=H.f([],[P.o])
this.J(a,new W.h9(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
h9:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"m;",$isbg:1,"%":"MimeType"},
lv:{"^":"j8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bg]},
$ast:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asw:function(){return[W.bg]},
"%":"MimeTypeArray"},
aq:{"^":"cR;",$isaq:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iC:{"^":"cE;a",
gV:function(a){var z=this.a.childNodes
return new W.dw(z,z.length,-1,[H.bE(C.G,z,"w",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$ast:function(){return[W.I]},
$asd:function(){return[W.I]},
$ase:function(){return[W.I]}},
I:{"^":"a0;",
h2:function(a,b){var z,y
try{z=a.parentNode
J.f0(z,b,a)}catch(y){H.aG(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dK(a):z},
eL:function(a,b,c){return a.replaceChild(b,c)},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hd:{"^":"ja;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$ast:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$ise:1,
$ase:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
bi:{"^":"m;0k:length=",$isbi:1,"%":"Plugin"},
lG:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bi]},
$ast:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$asw:function(){return[W.bi]},
"%":"PluginArray"},
lL:{"^":"jk;",
j:function(a,b){return P.aF(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gat:function(a){var z=H.f([],[P.o])
this.J(a,new W.hy(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hy:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lM:{"^":"aP;0k:length=","%":"HTMLSelectElement"},
cM:{"^":"a0;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bm:{"^":"a0;",$isbm:1,"%":"SourceBuffer"},
lN:{"^":"eA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asw:function(){return[W.bm]},
"%":"SourceBufferList"},
bn:{"^":"m;",$isbn:1,"%":"SpeechGrammar"},
lO:{"^":"jm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"m;0k:length=",$isbo:1,"%":"SpeechRecognitionResult"},
lQ:{"^":"jp;",
j:function(a,b){return a.getItem(H.T(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gat:function(a){var z=H.f([],[P.o])
this.J(a,new W.hM(z))
return z},
gk:function(a){return a.length},
$asa8:function(){return[P.o,P.o]},
$isa1:1,
$asa1:function(){return[P.o,P.o]},
"%":"Storage"},
hM:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"m;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
bq:{"^":"aP;",$isbq:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
br:{"^":"a0;",$isbr:1,"%":"TextTrack"},
bs:{"^":"a0;",$isbs:1,"%":"TextTrackCue|VTTCue"},
lV:{"^":"jt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asw:function(){return[W.bs]},
"%":"TextTrackCueList"},
lW:{"^":"eD;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$ast:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asw:function(){return[W.br]},
"%":"TextTrackList"},
lX:{"^":"m;0k:length=","%":"TimeRanges"},
bt:{"^":"m;",$isbt:1,"%":"Touch"},
aU:{"^":"cR;",$isaU:1,"%":"TouchEvent"},
lY:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asw:function(){return[W.bt]},
"%":"TouchList"},
lZ:{"^":"m;0k:length=","%":"TrackDefaultList"},
cR:{"^":"a_;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m1:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
m3:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
m4:{"^":"a0;0k:length=","%":"VideoTrackList"},
bw:{"^":"aq;",
gfB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ab("deltaY is not supported"))},
gfA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ab("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
iv:{"^":"a0;",
eM:function(a,b){return a.requestAnimationFrame(H.b0(H.b(b,{func:1,ret:-1,args:[P.S]}),1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m9:{"^":"jE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$ast:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$ise:1,
$ase:function(){return[W.b8]},
$asw:function(){return[W.b8]},
"%":"CSSRuleList"},
ma:{"^":"fr;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b_(b,"$isa6",[P.S],"$asa6")
if(!z)return!1
z=J.b2(b)
return a.left===z.gaG(b)&&a.top===z.gb0(b)&&a.width===z.gak(b)&&a.height===z.gaj(b)},
gP:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaj:function(a){return a.height},
gak:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mc:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$asw:function(){return[W.bc]},
"%":"GamepadList"},
md:{"^":"jI;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.I]},
$ast:function(){return[W.I]},
$isd:1,
$asd:function(){return[W.I]},
$ise:1,
$ase:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
me:{"^":"jK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asw:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
mf:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"StyleSheetList"},
iJ:{"^":"cP;a,b,c,$ti",
fJ:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mb:{"^":"iJ;a,b,c,$ti"},
iK:{"^":"dV;a,b,c,d,e,$ti",
f0:function(){var z=this.d
if(z!=null&&this.a<=0)J.f1(this.b,this.c,z,!1)},
t:{
V:function(a,b,c,d,e){var z=c==null?null:W.eK(new W.iL(c),W.a_)
z=new W.iK(0,a,b,z,!1,[e])
z.f0()
return z}}},
iL:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.j(a,"$isa_"))}},
w:{"^":"a;$ti",
gV:function(a){return new W.dw(a,this.gk(a),-1,[H.bE(this,a,"w",0)])}},
dw:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f_(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
iE:{"^":"m+fk;"},
iF:{"^":"m+t;"},
iG:{"^":"iF+w;"},
iH:{"^":"m+t;"},
iI:{"^":"iH+w;"},
iM:{"^":"m+t;"},
iN:{"^":"iM+w;"},
iZ:{"^":"m+t;"},
j_:{"^":"iZ+w;"},
j5:{"^":"m+a8;"},
j6:{"^":"m+a8;"},
j7:{"^":"m+t;"},
j8:{"^":"j7+w;"},
j9:{"^":"m+t;"},
ja:{"^":"j9+w;"},
jd:{"^":"m+t;"},
je:{"^":"jd+w;"},
jk:{"^":"m+a8;"},
ez:{"^":"a0+t;"},
eA:{"^":"ez+w;"},
jl:{"^":"m+t;"},
jm:{"^":"jl+w;"},
jp:{"^":"m+a8;"},
js:{"^":"m+t;"},
jt:{"^":"js+w;"},
eC:{"^":"a0+t;"},
eD:{"^":"eC+w;"},
jy:{"^":"m+t;"},
jz:{"^":"jy+w;"},
jD:{"^":"m+t;"},
jE:{"^":"jD+w;"},
jF:{"^":"m+t;"},
jG:{"^":"jF+w;"},
jH:{"^":"m+t;"},
jI:{"^":"jH+w;"},
jJ:{"^":"m+t;"},
jK:{"^":"jJ+w;"},
jL:{"^":"m+t;"},
jM:{"^":"jL+w;"}}],["","",,P,{"^":"",
k1:function(a){var z,y
z=J.H(a)
if(!!z.$isc5){y=z.gcU(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eF(a.data,a.height,a.width)},
k0:function(a){if(a instanceof P.eF)return{data:a.a,height:a.b,width:a.c}
return a},
aF:function(a){var z,y,x,w,v
if(a==null)return
z=P.fQ(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.T(y[w])
z.a4(0,v,a[v])}return z},
jZ:function(a,b){var z={}
a.J(0,new P.k_(z))
return z},
dt:function(){var z=$.ds
if(z==null){z=J.ck(window.navigator.userAgent,"Opera",0)
$.ds=z}return z},
fo:function(){var z,y
z=$.dp
if(z!=null)return z
y=$.dq
if(y==null){y=J.ck(window.navigator.userAgent,"Firefox",0)
$.dq=y}if(y)z="-moz-"
else{y=$.dr
if(y==null){y=!P.dt()&&J.ck(window.navigator.userAgent,"Trident/",0)
$.dr=y}if(y)z="-ms-"
else z=P.dt()?"-o-":"-webkit-"}$.dp=z
return z},
eF:{"^":"a;cU:a>,b,c",$isc5:1},
k_:{"^":"u:13;a",
$2:function(a,b){this.a[a]=b}},
fz:{"^":"cE;a,b",
gby:function(){var z,y,x
z=this.b
y=H.aM(z,"t",0)
x=W.Z
return new H.fZ(new H.it(z,H.b(new P.fA(),{func:1,ret:P.a7,args:[y]}),[y]),H.b(new P.fB(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b5(this.gby().a)},
j:function(a,b){var z=this.gby()
return z.b.$1(J.db(z.a,b))},
gV:function(a){var z=P.fV(this.gby(),!1,W.Z)
return new J.ai(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.Z]},
$asd:function(){return[W.Z]},
$ase:function(){return[W.Z]}},
fA:{"^":"u:24;",
$1:function(a){return!!J.H(H.j(a,"$isI")).$isZ}},
fB:{"^":"u:25;",
$1:function(a){return H.c(H.j(a,"$isI"),"$isZ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
es:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bO:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b_(b,"$isbO",[P.S],null)
if(!z)return!1
z=this.a
y=J.b2(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gP:function(a){var z,y
z=J.aH(this.a)
y=J.aH(this.b)
return P.es(P.by(P.by(0,z),y))}},
jf:{"^":"a;$ti",
gaX:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.B(z+this.c,H.z(this,0))},
gbM:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.B(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b_(b,"$isa6",[P.S],"$asa6")
if(!z)return!1
z=this.a
y=J.b2(b)
x=y.gaG(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb0(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.B(z+this.c,w)===y.gaX(b)){if(typeof x!=="number")return x.D()
z=H.B(x+this.d,w)===y.gbM(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.B(x+this.d,v)
return P.es(P.by(P.by(P.by(P.by(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cT:function(a,b){var z,y
H.x(b,"$isbO",[P.S],"$asbO")
z=b.a
y=this.a
if(typeof z!=="number")return z.dC()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dC()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a6:{"^":"jf;aG:a>,b0:b>,ak:c>,aj:d>,$ti"}}],["","",,P,{"^":"",kV:{"^":"Q;0n:x=,0p:y=","%":"SVGFEBlendElement"},kW:{"^":"Q;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},kX:{"^":"Q;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},kY:{"^":"Q;0n:x=,0p:y=","%":"SVGFECompositeElement"},kZ:{"^":"Q;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},l_:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},l0:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},l1:{"^":"Q;0n:x=,0p:y=","%":"SVGFEFloodElement"},l2:{"^":"Q;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},l3:{"^":"Q;0n:x=,0p:y=","%":"SVGFEImageElement"},l4:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMergeElement"},l5:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},l6:{"^":"Q;0n:x=,0p:y=","%":"SVGFEOffsetElement"},l7:{"^":"Q;0n:x=,0p:y=","%":"SVGFEPointLightElement"},l8:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},l9:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpotLightElement"},la:{"^":"Q;0n:x=,0p:y=","%":"SVGFETileElement"},lb:{"^":"Q;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},le:{"^":"Q;0n:x=,0p:y=","%":"SVGFilterElement"},lf:{"^":"bd;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fD:{"^":"bd;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bd:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lk:{"^":"bd;0n:x=,0p:y=","%":"SVGImageElement"},bM:{"^":"m;",$isbM:1,"%":"SVGLength"},ln:{"^":"j1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$ise:1,
$ase:function(){return[P.bM]},
$asw:function(){return[P.bM]},
"%":"SVGLengthList"},lq:{"^":"Q;0n:x=,0p:y=","%":"SVGMaskElement"},bN:{"^":"m;",$isbN:1,"%":"SVGNumber"},lD:{"^":"jc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bN]},
$isd:1,
$asd:function(){return[P.bN]},
$ise:1,
$ase:function(){return[P.bN]},
$asw:function(){return[P.bN]},
"%":"SVGNumberList"},lF:{"^":"Q;0n:x=,0p:y=","%":"SVGPatternElement"},lH:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lI:{"^":"m;0k:length=","%":"SVGPointList"},lJ:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lK:{"^":"fD;0n:x=,0p:y=","%":"SVGRectElement"},lR:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$asw:function(){return[P.o]},
"%":"SVGStringList"},Q:{"^":"Z;",
gcS:function(a){return new P.fz(a,new W.iC(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lS:{"^":"bd;0n:x=,0p:y=","%":"SVGSVGElement"},hP:{"^":"bd;","%":"SVGTextPathElement;SVGTextContentElement"},lU:{"^":"hP;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bR:{"^":"m;",$isbR:1,"%":"SVGTransform"},m_:{"^":"jB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$asw:function(){return[P.bR]},
"%":"SVGTransformList"},m2:{"^":"bd;0n:x=,0p:y=","%":"SVGUseElement"},j0:{"^":"m+t;"},j1:{"^":"j0+w;"},jb:{"^":"m+t;"},jc:{"^":"jb+w;"},jq:{"^":"m+t;"},jr:{"^":"jq+w;"},jA:{"^":"m+t;"},jB:{"^":"jA+w;"}}],["","",,P,{"^":"",kA:{"^":"m;0k:length=","%":"AudioBuffer"},kB:{"^":"iB;",
j:function(a,b){return P.aF(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gat:function(a){var z=H.f([],[P.o])
this.J(a,new P.f6(z))
return z},
gk:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa1:1,
$asa1:function(){return[P.o,null]},
"%":"AudioParamMap"},f6:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kC:{"^":"a0;0k:length=","%":"AudioTrackList"},f7:{"^":"a0;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lE:{"^":"f7;0k:length=","%":"OfflineAudioContext"},iB:{"^":"m+a8;"}}],["","",,P,{"^":"",cL:{"^":"m;",
h8:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isc5)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k0(g))
return}if(!!z.$isdy)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.i(P.f4("Incorrect number or type of arguments"))},
du:function(a,b,c,d,e,f,g){return this.h8(a,b,c,d,e,f,g,null,null,null)},
$iscL:1,
"%":"WebGLRenderingContext"},hQ:{"^":"m;",$ishQ:1,"%":"WebGLTexture"},ia:{"^":"m;",$isia:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lP:{"^":"jo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.L(b,a,null,null,null))
return P.aF(a.item(b))},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a1,,,]]},
$isd:1,
$asd:function(){return[[P.a1,,,]]},
$ise:1,
$ase:function(){return[[P.a1,,,]]},
$asw:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jn:{"^":"m+t;"},jo:{"^":"jn+w;"}}],["","",,O,{"^":"",ad:{"^":"a;0a,0b,0c,0d,$ti",
b3:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cb:function(a,b,c){var z=H.aM(this,"ad",0)
H.b(b,{func:1,ret:P.a7,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.M,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aK:function(a,b){return this.cb(a,null,b)},
cC:function(a){var z
H.x(a,"$isd",[H.aM(this,"ad",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ci:function(a,b){var z
H.x(b,"$isd",[H.aM(this,"ad",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.ai(z,z.length,0,[H.z(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aM(this,"ad",0)
H.B(b,z)
z=[z]
if(this.cC(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ci(x,H.f([b],z))}},
bI:function(a,b){var z,y
H.x(b,"$isd",[H.aM(this,"ad",0)],"$asd")
if(this.cC(b)){z=this.a
y=z.length
C.a.bI(z,b)
this.ci(y,b)}},
$isd:1,
t:{
cr:function(a){var z=new O.ad([a])
z.b3(a)
return z}}},cG:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
dQ:function(a){var z=this.b
if(!(z==null))z.w(a)},
aw:function(){return this.dQ(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gc0(z)
else return V.aR()},
bn:function(a){var z=this.a
if(a==null)C.a.h(z,V.aR())
else C.a.h(z,a)
this.aw()},
au:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",cl:{"^":"a;"},aw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbq:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdr(),{func:1,ret:-1,args:[D.l]})
C.a.S(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.b(this.gdr(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.F("shape",z,this.c,this,[F.dS])
w.b=!0
this.aH(w)}},
a8:function(a,b){var z
for(z=this.y.a,z=new J.ai(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a8(0,b)},
a2:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gR(z))
z.aw()
a.c7(this.f)
z=a.dy
y=(z&&C.a).gc0(z)
if(y!=null&&this.d!=null)y.ds(a,this)
for(z=this.y.a,z=new J.ai(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a2(a)
a.c6()
a.dx.au()},
gq:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aH:function(a){var z=this.z
if(!(z==null))z.w(a)},
a_:function(){return this.aH(null)},
fR:[function(a){H.j(a,"$isl")
this.e=null
this.aH(a)},function(){return this.fR(null)},"hU","$1","$0","gdr",0,2,0],
fP:[function(a){this.aH(H.j(a,"$isl"))},function(){return this.fP(null)},"hS","$1","$0","gdq",0,2,0],
hR:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.aw],"$asd")
for(z=b.length,y=this.gdq(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.bH()
t.a=H.f([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","gfO",8,0,8],
hT:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.aw],"$asd")
for(z=b.length,y=this.gdq(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.bH()
t.a=H.f([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.S(t.a,y)}}this.a_()},"$2","gfQ",8,0,8],
$isar:1,
t:{
dv:function(a,b,c,d,e,f){var z,y
z=new E.aw()
z.a=d
z.b=!0
y=O.cr(E.aw)
z.y=y
y.aK(z.gfO(),z.gfQ())
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
z.sbq(0,e)
return z}}},ht:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dP:function(a,b){var z,y,x,w,v
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
z=new O.cG()
y=[V.ax]
z.a=H.f([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hv(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cG()
z.a=H.f([],y)
v=z.gq()
v.toString
x=H.b(new E.hw(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cG()
z.a=H.f([],y)
y=z.gq()
y.toString
w=H.b(new E.hx(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.bQ])
this.dy=z
C.a.h(z,null)
this.fr=new H.cB(0,0,[P.o,A.cN])},
gh_:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.l(0,y.gR(y))
this.z=y
z=y}return z},
c7:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc0(z):a;(z&&C.a).h(z,y)},
c6:function(){var z=this.dy
if(z.length>1)z.pop()},
cO:function(a){var z=a.b
if(z.length===0)throw H.i(P.q("May not cache a shader with no name."))
if(this.fr.fv(0,z))throw H.i(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a4(0,z,a)},
t:{
hu:function(a,b){var z=new E.ht(a,b)
z.dP(a,b)
return z}}},hv:{"^":"u:9;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hw:{"^":"u:9;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hx:{"^":"u:9;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},hX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
dS:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.h3()},function(){return this.dS(null)},"dR","$1","$0","gcj",0,2,0],
gfE:function(){var z,y,x
z=Date.now()
y=C.f.Z(P.du(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
cF:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.h.bZ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.h.bZ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
h3:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hZ(this),{func:1,ret:-1,args:[P.S]})
C.u.e8(z)
C.u.eM(z,W.eK(y,P.S))}},
h1:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cF()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.du(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aw()
w=x.db
C.a.sk(w.a,0)
w.aw()
w=x.dx
C.a.sk(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aG(v)
y=H.b3(v)
P.da("Error: "+H.h(z))
P.da("Stack: "+H.h(y))
throw H.i(z)}},
t:{
hY:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$iscp)return E.e_(a,!0,!0,!0,!1)
y=W.cq(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcS(a).h(0,y)
w=E.e_(y,!0,!0,!0,!1)
w.a=a
return w},
e_:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hX()
y=P.fR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bp(a,"webgl",y)
x=H.j(x==null?C.k.bp(a,"experimental-webgl",y):x,"$iscL")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hu(x,a)
w=new T.hR(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ig(a)
v=new X.fL()
v.c=new X.ap(!1,!1,!1)
v.d=P.fS(null,null,null,P.M)
w.b=v
v=new X.ha(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fW(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i0(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.dV,P.a]])
w.z=v
u=document
t=W.aq
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.b(w.geo(),s),!1,t))
v=w.z
r=W.a_
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.b(w.ger(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.b(w.gel(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.b(w.geu(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.b(w.ges(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.b(w.gex(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.b(w.gez(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.b(w.gey(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.V(a,H.T(W.fv(a)),H.b(w.geA(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.b(w.gep(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.b(w.geq(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.b(w.geB(),q),!1,r))
r=w.z
q=W.aU
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.b(w.geJ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.b(w.geH(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.b(w.geI(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.cF()
return z}}},hZ:{"^":"u:28;a",
$1:function(a){var z
H.ki(a)
z=this.a
if(z.z){z.z=!1
z.h1()}}}}],["","",,Z,{"^":"",en:{"^":"a;a,b",t:{
cV:function(a,b,c){var z
H.x(c,"$ise",[P.M],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.en(b,z)}}},dg:{"^":"cl;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aG(y)
x=P.q('Failed to bind buffer attribute "'+J.a3(this.a)+'": '+H.h(z))
throw H.i(x)}},
i:function(a){return"["+J.a3(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},eo:{"^":"a;a",$iskD:1},co:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
b2:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a2:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a3(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.X(y,", ")+"\nAttrs:   "+C.a.X(u,", ")},
$islT:1},c6:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aS(this.c)+"'")+"]"}},aV:{"^":"a;a",
gcc:function(a){var z,y
z=this.a
y=(z&$.$get$am().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$aW().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
fq:function(a){var z,y,x
z=$.$get$am()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$em()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.o])
y=this.a
if((y&$.$get$am().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.X(z,"|")},
t:{
ag:function(a){return new Z.aV(a)}}}}],["","",,D,{"^":"",dj:{"^":"a;"},bH:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fy(z))
return x!==0},
cX:function(){return this.w(null)},
h4:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
av:function(a){return this.h4(a,!0,!1)},
t:{
C:function(){var z=new D.bH()
z.a=H.f([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fy:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bI:{"^":"l;c,d,a,0b,$ti"},bJ:{"^":"l;c,d,a,0b,$ti"},F:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",dh:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)},
t:{"^":"kE<"}},dE:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},dF:{"^":"l;c,a,0b"},fL:{"^":"a;0a,0b,0c,0d",
fX:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dF(a,this)
y.b=!0
return z.w(y)},
fT:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dF(a,this)
y.b=!0
return z.w(y)}},dH:{"^":"c8;x,y,c,d,e,a,0b"},fW:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ao:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.N(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bh(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c5:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.ao(a,b))
return!0},
aU:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dG()
if(typeof z!=="number")return z.dA()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.ao(a,b))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.ao(a,b))
return!0},
fY:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cH(new V.P(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.w(w)
return!0},
ew:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.dH(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.N(0,0)}},ap:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ap))return!1
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
return z+(this.c?"Shift+":"")}},bh:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},ha:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bx:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaD()
x=new X.bh(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c5:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bx(a,b,!0))
return!0},
aU:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dG()
if(typeof z!=="number")return z.dA()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bx(a,b,!0))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bx(a,b,!1))
return!0},
fZ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cH(new V.P(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.w(x)
return!0},
gcW:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbo:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gdn:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cH:{"^":"c8;x,c,d,e,a,0b"},c8:{"^":"l;"},e1:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},i0:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ao:function(a,b){var z,y,x,w
H.x(a,"$ise",[V.N],"$ase")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gaD()
w=new X.e1(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fW:function(a){var z
H.x(a,"$ise",[V.N],"$ase")
z=this.b
if(z==null)return!1
z.w(this.ao(a,!0))
return!0},
fU:function(a){var z
H.x(a,"$ise",[V.N],"$ase")
z=this.c
if(z==null)return!1
z.w(this.ao(a,!0))
return!0},
fV:function(a){var z
H.x(a,"$ise",[V.N],"$ase")
z=this.d
if(z==null)return!1
z.w(this.ao(a,!1))
return!0}},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.dR(0,0,(z&&C.k).gb8(z).c,C.k.gb8(z).d)},
cu:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dE(z,new X.ap(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ap(y,a.altKey,a.shiftKey)},
bH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ap(y,a.altKey,a.shiftKey)},
ap:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.N(y-w,x-v)},
aN:function(a){return new V.P(a.movementX,a.movementY)},
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.h.af(u.pageX)
C.h.af(u.pageY)
s=z.left
C.h.af(u.pageX)
C.a.h(y,new V.N(t-s,C.h.af(u.pageY)-z.top))}return y},
am:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dh(z,new X.ap(y,a.altKey,a.shiftKey))},
ht:[function(a){this.f=!0},"$1","ger",4,0,4],
hn:[function(a){this.f=!1},"$1","gel",4,0,4],
hq:[function(a){if(this.f)a.preventDefault()},"$1","geo",4,0,4],
hv:[function(a){var z
H.j(a,"$isbf")
if(!this.f)return
z=this.cu(a)
if(this.b.fX(z))a.preventDefault()},"$1","geu",4,0,17],
hu:[function(a){var z
H.j(a,"$isbf")
if(!this.f)return
z=this.cu(a)
if(this.b.fT(z))a.preventDefault()},"$1","ges",4,0,17],
hx:[function(a){var z,y,x,w
H.j(a,"$isaq")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.am(a)
x=this.aN(a)
if(this.d.c5(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.am(a)
w=this.ap(a)
if(this.c.c5(y,w))a.preventDefault()},"$1","gex",4,0,5],
hz:[function(a){var z,y,x
H.j(a,"$isaq")
this.aC(a)
z=this.am(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","gez",4,0,5],
hs:[function(a){var z,y,x,w
H.j(a,"$isaq")
z=this.a
if(!(z&&C.k).gb8(z).cT(0,new P.bO(a.clientX,a.clientY,[P.S]))){this.aC(a)
y=this.am(a)
if(this.x){x=this.aN(a)
if(this.d.aU(y,x))a.preventDefault()
return}if(this.r)return
w=this.ap(a)
if(this.c.aU(y,w))a.preventDefault()}},"$1","geq",4,0,5],
hy:[function(a){var z,y,x
H.j(a,"$isaq")
this.aC(a)
z=this.am(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","gey",4,0,5],
hr:[function(a){var z,y,x,w
H.j(a,"$isaq")
z=this.a
if(!(z&&C.k).gb8(z).cT(0,new P.bO(a.clientX,a.clientY,[P.S]))){this.aC(a)
y=this.am(a)
if(this.x){x=this.aN(a)
if(this.d.aT(y,x))a.preventDefault()
return}if(this.r)return
w=this.ap(a)
if(this.c.aT(y,w))a.preventDefault()}},"$1","gep",4,0,5],
hA:[function(a){var z,y
H.j(a,"$isbw")
this.aC(a)
z=new V.P((a&&C.t).gfA(a),C.t.gfB(a)).v(0,180)
if(this.x){if(this.d.fY(z))a.preventDefault()
return}if(this.r)return
y=this.ap(a)
if(this.c.fZ(z,y))a.preventDefault()},"$1","geA",4,0,31],
hB:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.am(this.y)
v=this.ap(this.y)
this.d.ew(w,v,x)}},"$1","geB",4,0,4],
hJ:[function(a){var z
H.j(a,"$isaU")
this.a.focus()
this.f=!0
this.bH(a)
z=this.bE(a)
if(this.e.fW(z))a.preventDefault()},"$1","geJ",4,0,10],
hH:[function(a){var z
H.j(a,"$isaU")
this.bH(a)
z=this.bE(a)
if(this.e.fU(z))a.preventDefault()},"$1","geH",4,0,10],
hI:[function(a){var z
H.j(a,"$isaU")
this.bH(a)
z=this.bE(a)
if(this.e.fV(z))a.preventDefault()},"$1","geI",4,0,10]}}],["","",,D,{"^":"",fp:{"^":"a;",$isW:1,$isar:1},W:{"^":"a;",$isar:1},fM:{"^":"ad;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
ck:function(a){var z=this.Q
if(!(z==null))z.w(a)},
ev:[function(a){var z=this.ch
if(!(z==null))z.w(a)},function(){return this.ev(null)},"hw","$1","$0","gcB",0,2,0],
hC:[function(a){var z,y,x
H.x(a,"$isd",[D.W],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.e3(x))return!1}return!0},"$1","geC",4,0,33],
hk:[function(a,b){var z,y,x,w,v
z=D.W
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcB(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.j(b[w],"$isW")
v.gq().h(0,x)}z=new D.bI(a,b,this,[z])
z.b=!0
this.ck(z)},"$2","gei",8,0,18],
hE:[function(a,b){var z,y,x,w,v
z=D.W
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcB(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.j(b[w],"$isW")
v.gq().S(0,x)}z=new D.bJ(a,b,this,[z])
z.b=!0
this.ck(z)},"$2","geE",8,0,18],
e3:function(a){var z=C.a.aR(this.e,a)
return z},
$asd:function(){return[D.W]},
$asad:function(){return[D.W]}},hj:{"^":"a;",$isW:1,$isar:1},hJ:{"^":"a;",$isW:1,$isar:1},hU:{"^":"a;",$isW:1,$isar:1},hV:{"^":"a;",$isW:1,$isar:1},hW:{"^":"a;",$isW:1,$isar:1}}],["","",,V,{"^":"",
kG:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","h7",8,0,32],
kv:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.dF(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.a7("null",c)
return C.i.a7(C.h.dw($.n.$2(a,0)?0:a,b),c+b+1)},
b1:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$ise",[P.v],"$ase")
z=H.f([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.a4(z,u,C.i.a7(z[u],x))}return z},
d9:function(a,b){return C.h.hb(Math.pow(b,C.y.bZ(Math.log(H.jY(a))/Math.log(b))))},
a4:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aJ:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
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
dK:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
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
y=V.b1(H.f([this.a,this.d,this.r],z),3,0)
x=V.b1(H.f([this.b,this.e,this.x],z),3,0)
w=V.b1(H.f([this.c,this.f,this.y],z),3,0)
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
ax:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
c_:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aR()
a3=1/a2
a4=-w
a5=-i
return V.ao((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.ao(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dz:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gac(a)
if(typeof z!=="number")return z.l()
y=C.h.l(z,y)
z=this.b
x=a.gad(a)
if(typeof z!=="number")return z.l()
x=C.h.l(z,x)
z=this.c
w=a.gae()
if(typeof z!=="number")return z.l()
w=C.h.l(z,w)
z=this.e
v=a.gac(a)
if(typeof z!=="number")return z.l()
v=C.h.l(z,v)
z=this.f
u=a.gad(a)
if(typeof z!=="number")return z.l()
u=C.h.l(z,u)
z=this.r
t=a.gae()
if(typeof z!=="number")return z.l()
t=C.h.l(z,t)
z=this.y
s=a.gac(a)
if(typeof z!=="number")return z.l()
s=C.h.l(z,s)
z=this.z
r=a.gad(a)
if(typeof z!=="number")return z.l()
r=C.h.l(z,r)
z=this.Q
q=a.gae()
if(typeof z!=="number")return z.l()
return new V.J(y+x+w,v+u+t,s+r+C.h.l(z,q))},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.ak(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
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
i:function(a){return this.F()},
di:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b1(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b1(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b1(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b1(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
A:function(a){return this.di(a,3,0)},
F:function(){return this.di("",3,0)},
t:{
ao:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aR:function(){return V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
N:{"^":"a;n:a>,p:b>",
G:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
ak:{"^":"a;n:a>,p:b>,c",
G:function(a,b){return new V.ak(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bj:{"^":"a;n:a>,p:b>,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bj))return!1
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
dQ:{"^":"a;n:a>,p:b>,c,d",
ga1:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
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
t:{
dR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dQ(a,b,c,d)}}},
P:{"^":"a;a,b",
fH:[function(a){return Math.sqrt(this.B(this))},"$0","gk",1,0,19],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.P(z*b,y*b)},
v:function(a,b){var z,y
if($.n.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.P(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
fH:[function(a){return Math.sqrt(this.B(this))},"$0","gk",1,0,19],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c1:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.J(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aS:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.J(-this.a,-this.b,-this.c)},
v:function(a,b){if($.n.$2(b,0))return new V.J(0,0,0)
return new V.J(this.a/b,this.b/b,this.c/b)},
dl:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ff:{"^":"dj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bs:function(a){var z=V.kv(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.w(a)},
sc9:function(a,b){},
sc2:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bs(z)}z=new D.F("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
sc4:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bs(z)}z=new D.F("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sa0:function(a,b){var z,y
b=this.bs(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sc3:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbR:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
a8:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
t:{
cs:function(){var z=new U.ff()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dl:{"^":"a9;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aI:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dl))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}},dx:{"^":"ad;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
I:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"aa","$1","$0","gaB",0,2,0],
hj:[function(a,b){var z,y,x,w,v,u,t
z=U.a9
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geh",8,0,20],
hD:[function(a,b){var z,y,x,w,v,u,t
z=U.a9
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.S(t.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geD",8,0,20],
aI:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ag()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ai(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aI(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aR():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dx))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.U(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a9]},
$asad:function(){return[U.a9]},
$isa9:1},a9:{"^":"dj;"},ih:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
I:[function(a){var z
H.j(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.I(null)},"aa","$1","$0","gaB",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcW()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdn()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbo()
z.toString
y=H.b(this.gbB(),y)
C.a.h(z.a,y)
return!0},
ed:[function(a){H.j(a,"$isl")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbz",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.c(H.j(a,"$isl"),"$isbh")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.P(y.a,y.b).l(0,2).v(0,z.ga1())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sK(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.P(x.a,x.b).l(0,2).v(0,z.ga1())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
this.b.sK(0)
y=y.G(0,a.z)
this.Q=new V.P(y.a,y.b).l(0,2).v(0,z.ga1())}this.aa()},"$1","gbA",4,0,1],
ef:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sK(y*10*x)
this.aa()}},"$1","gbB",4,0,1],
aI:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ag()
if(z<y){this.ch=y
x=b.y
this.b.a8(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ao(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa9:1},ii:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
I:[function(a){var z
H.j(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.I(null)},"aa","$1","$0","gaB",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcW()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdn()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbo()
z.toString
x=H.b(this.gbB(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.C()
x.f=z}x=H.b(this.gea(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.C()
x.b=z}x=H.b(this.gf_(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.geZ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.C()
x.c=z}y=H.b(this.geY(),y)
C.a.h(z.a,y)
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.P(z,y)},
ed:[function(a){a=H.c(H.j(a,"$isl"),"$isbh")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbz",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.c(H.j(a,"$isl"),"$isbh")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ah(new V.P(y.a,y.b).l(0,2).v(0,z.ga1()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ah(new V.P(x.a,x.b).l(0,2).v(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.G(0,a.z)
this.dx=this.ah(new V.P(y.a,y.b).l(0,2).v(0,z.ga1()))}this.aa()},"$1","gbA",4,0,1],
ef:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sK(-y*10*z)
this.aa()}},"$1","gbB",4,0,1],
hg:[function(a){if(H.c(H.j(a,"$isl"),"$isdH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gea",4,0,1],
hh:[function(a){var z,y,x,w,v,u,t
a=H.c(H.j(a,"$isl"),"$isbh")
if(!J.U(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ah(new V.P(x.a,x.b).l(0,2).v(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.G(0,a.z)
this.dx=this.ah(new V.P(y.a,y.b).l(0,2).v(0,z.ga1()))
this.aa()},"$1","geb",4,0,1],
hN:[function(a){H.j(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf_",4,0,1],
hM:[function(a){var z,y,x,w,v,u,t
a=H.c(H.j(a,"$isl"),"$ise1")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ah(new V.P(y.a,y.b).l(0,2).v(0,z.ga1()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ah(new V.P(x.a,x.b).l(0,2).v(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.G(0,a.z)
this.dx=this.ah(new V.P(y.a,y.b).l(0,2).v(0,z.ga1()))}this.aa()},"$1","geZ",4,0,1],
hL:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sK(-y*10*z)
this.aa()}},"$1","geY",4,0,1],
aI:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ag()
if(z<y){this.dy=y
x=b.y
this.c.a8(0,x)
this.b.a8(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ao(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ao(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa9:1},ij:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.w(a)},
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=H.b(this.geg(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hi:[function(a){var z,y,x,w
H.j(a,"$isl")
if(!J.U(this.b,this.a.b.c))return
H.c(a,"$iscH")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","geg",4,0,1],
aI:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ao(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa9:1}}],["","",,M,{"^":"",fg:{"^":"ad;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
T:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.T(null)},"cl","$1","$0","gN",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t
z=M.as
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geF",8,0,21],
hG:[function(a,b){var z,y,x,w,v,u,t
z=M.as
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.S(t.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geG",8,0,21],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ai(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$asd:function(){return[M.as]},
$asad:function(){return[M.as]},
$isas:1},fi:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
T:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.T(null)},"cl","$1","$0","gN",0,2,0],
saQ:function(a){var z,y,x
if(a==null)a=new X.fE()
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("camera",x,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cu(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("target",x,this.b,this,[X.cQ])
z.b=!0
this.T(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.F("technique",x,this.c,this,[O.bQ])
z.b=!0
this.T(z)}},
a2:function(a){a.c7(this.c)
this.b.W(a)
this.a.W(a)
this.d.a8(0,a)
this.d.a2(a)
this.a.b2(a)
this.b.toString
a.c6()},
$isas:1},fw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.T(null)},"cl","$1","$0","gN",0,2,0],
ho:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aw
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.bH()
s.a=H.f([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gem",8,0,8],
hp:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aw
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.bH()
s.a=H.f([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.S(s.a,x)}}z=new D.bJ(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gen",8,0,8],
saQ:function(a){var z,y,x
if(a==null)a=X.dN(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("camera",x,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cu(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("target",x,this.b,this,[X.cQ])
z.b=!0
this.T(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.F("technique",x,this.c,this,[O.bQ])
z.b=!0
this.T(z)}},
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a2:function(a){var z
a.c7(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.a8(0,a)
for(z=this.d.a,z=new J.ai(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a8(0,a)
for(z=this.d.a,z=new J.ai(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a2(a)
this.a.toString
a.cy.au()
a.db.au()
this.b.toString
a.c6()},
$isas:1},as:{"^":"a;"}}],["","",,A,{"^":"",dd:{"^":"a;a,b,c"},f5:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dJ:{"^":"cN;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aE,0ar,0aF,0ba,0cY,0cZ,0bb,0bc,0d_,0d0,0bd,0be,0d1,0d2,0bf,0d3,0d4,0bg,0d5,0d6,0bh,0bi,0bj,0d7,0d8,0bk,0bl,0d9,0da,0bm,0dc,0bT,0dd,0bU,0de,0bV,0df,0bW,0dg,0bX,0dh,0bY,a,b,0c,0d,0e,0f,0r",
dO:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bP("")
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
a1.f2(z)
a1.f9(z)
a1.f3(z)
a1.fh(z)
a1.fi(z)
a1.fb(z)
a1.fm(z)
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
z=new P.bP("")
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
v.f6(z)
v.f1(z)
v.f4(z)
v.f7(z)
v.ff(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fd(z)
v.fe(z)}v.fa(z)
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
p=H.f([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.X(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f5(z)
v.fc(z)
v.fg(z)
v.fj(z)
v.fk(z)
v.fl(z)
v.f8(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.o])
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
n="vec4("+C.a.X(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dj(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.c(this.r.m(0,"invViewMat"),"$isav")
if(y)this.db=H.c(this.r.m(0,"objMat"),"$isav")
if(w)this.dx=H.c(this.r.m(0,"viewObjMat"),"$isav")
this.fr=H.c(this.r.m(0,"projViewObjMat"),"$isav")
if(a1.x2)this.go=H.c(this.r.m(0,"txt2DMat"),"$iscT")
if(a1.y1)this.id=H.c(this.r.m(0,"txtCubeMat"),"$isav")
if(a1.y2)this.k1=H.c(this.r.m(0,"colorMat"),"$isav")
this.k3=H.f([],[A.av])
y=a1.aE
if(y>0){this.k2=H.j(this.r.m(0,"bendMatCount"),"$isE")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isav"))}}y=a1.a
if(y!==C.b){this.k4=H.c(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.c(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.c(this.r.m(0,"emissionTxt"),"$isaa")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a1.b
if(y!==C.b){this.ry=H.c(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.c(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.c(this.r.m(0,"ambientTxt"),"$isaa")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a1.c
if(y!==C.b){this.y2=H.c(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.aE=H.c(this.r.m(0,"diffuseTxt"),"$isaf")
this.aF=H.c(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ar=H.c(this.r.m(0,"diffuseTxt"),"$isaa")
this.aF=H.c(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a1.d
if(y!==C.b){this.ba=H.c(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cY=H.c(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.bb=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cZ=H.c(this.r.m(0,"invDiffuseTxt"),"$isaa")
this.bb=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a1.e
if(y!==C.b){this.be=H.c(this.r.m(0,"shininess"),"$isR")
this.bc=H.c(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d_=H.c(this.r.m(0,"specularTxt"),"$isaf")
this.bd=H.c(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.d0=H.c(this.r.m(0,"specularTxt"),"$isaa")
this.bd=H.c(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.c:this.d1=H.c(this.r.m(0,"bumpTxt"),"$isaf")
this.bf=H.c(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.d2=H.c(this.r.m(0,"bumpTxt"),"$isaa")
this.bf=H.c(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a1.dy){this.d3=H.c(this.r.m(0,"envSampler"),"$isaa")
this.d4=H.c(this.r.m(0,"nullEnvTxt"),"$isE")
y=a1.r
if(y!==C.b){this.bg=H.c(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d5=H.c(this.r.m(0,"reflectTxt"),"$isaf")
this.bh=H.c(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.d6=H.c(this.r.m(0,"reflectTxt"),"$isaa")
this.bh=H.c(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a1.x
if(y!==C.b){this.bi=H.c(this.r.m(0,"refraction"),"$isR")
this.bj=H.c(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d7=H.c(this.r.m(0,"refractTxt"),"$isaf")
this.bk=H.c(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.d8=H.c(this.r.m(0,"refractTxt"),"$isaa")
this.bk=H.c(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a1.y
if(y!==C.b){this.bl=H.c(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.c:this.d9=H.c(this.r.m(0,"alphaTxt"),"$isaf")
this.bm=H.c(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.da=H.c(this.r.m(0,"alphaTxt"),"$isaa")
this.bm=H.c(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bT=H.f([],[A.ed])
this.bU=H.f([],[A.ee])
this.bV=H.f([],[A.ef])
this.bW=H.f([],[A.eg])
this.bX=H.f([],[A.eh])
this.bY=H.f([],[A.ei])
if(a1.k2){y=a1.z
if(y>0){this.dc=H.j(this.r.m(0,"dirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.bT;(x&&C.a).h(x,new A.ed(m,l,k))}}y=a1.Q
if(y>0){this.dd=H.j(this.r.m(0,"pntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isR")
x=this.bU;(x&&C.a).h(x,new A.ee(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.de=H.j(this.r.m(0,"spotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isR")
x=this.bV;(x&&C.a).h(x,new A.ef(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.df=H.j(this.r.m(0,"txtDirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isD")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isE")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isaf")
x=this.bW;(x&&C.a).h(x,new A.eg(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dg=H.j(this.r.m(0,"txtPntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$iscT")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isE")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isaa")
x=this.bX;(x&&C.a).h(x,new A.eh(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dh=H.j(this.r.m(0,"txtSpotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isD")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isD")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isD")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isD")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isD")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isE")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isD")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isaf")
x=this.bY;(x&&C.a).h(x,new A.ei(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ab:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dH(c)
b.a.uniform1i(b.d,0)}},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
h1:function(a,b){var z,y
z=a.ar
y=new A.dJ(b,z)
y.cg(b,z)
y.dO(a,b)
return y}}},h4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aE,ar,aF",
f2:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aE+"];\n"
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
f9:function(a){var z
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
f3:function(a){var z
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
fh:function(a){var z,y
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
fi:function(a){var z,y
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
fb:function(a){var z
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
fm:function(a){var z
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
an:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cd(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
f6:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.an(a,z,"emission")
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
f1:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.an(a,z,"ambient")
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
f4:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.an(a,z,"diffuse")
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
f7:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.an(a,z,"invDiffuse")
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
ff:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.an(a,z,"specular")
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
fa:function(a){var z,y
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
fd:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.an(a,z,"reflect")
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
fe:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.an(a,z,"refract")
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
f5:function(a){var z,y
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
fc:function(a){var z,y
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
fg:function(a){var z,y
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
fj:function(a){var z,y,x
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
fk:function(a){var z,y,x
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
fl:function(a){var z,y,x
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
f8:function(a){var z
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
i:function(a){return this.ar}},ed:{"^":"a;a,b,c"},eg:{"^":"a;a,b,c,d,e,f,r,x"},ee:{"^":"a;a,b,c,d,e,f,r"},eh:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ef:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ei:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cN:{"^":"cl;",
cg:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dj:function(a,b,c){var z,y,x
this.c=this.cv(b,35633)
this.d=this.cv(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.eO(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.h(x)))}this.eU()
this.eV()},
W:function(a){a.a.useProgram(this.e)
this.f.fC()},
cv:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.i(P.q("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
eU:function(){var z,y,x,w,v,u
z=H.f([],[A.dd])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dd(y,v.name,u))}this.f=new A.f5(z)},
eV:function(){var z,y,x,w,v,u
z=H.f([],[A.a2])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fz(v.type,v.size,v.name,u))}this.r=new A.i9(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cS(z,y,b,a,c)},
e5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.cS(z,y,b,a,c)},
e6:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cS(z,y,b,a,c)},
b6:function(a,b){return new P.eq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fz:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.i4(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.i7(this.a,this.e,c,d)
case 35667:return new A.i5(this.a,this.e,c,d)
case 35668:return new A.i6(this.a,this.e,c,d)
case 35669:return new A.i8(this.a,this.e,c,d)
case 35674:return new A.ib(this.a,this.e,c,d)
case 35675:return new A.cT(this.a,this.e,c,d)
case 35676:return new A.av(this.a,this.e,c,d)
case 35678:return this.e5(b,c,d)
case 35680:return this.e6(b,c,d)
case 35670:throw H.i(this.b6("BOOL",c))
case 35671:throw H.i(this.b6("BOOL_VEC2",c))
case 35672:throw H.i(this.b6("BOOL_VEC3",c))
case 35673:throw H.i(this.b6("BOOL_VEC4",c))
default:throw H.i(P.q("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},c1:{"^":"a;a,b",
i:function(a){return this.b}},dT:{"^":"cN;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a2:{"^":"a;"},i9:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.i(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fD:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fD("\n")}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},i5:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},i6:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},i8:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},i3:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.h(this.c)},
t:{
cS:function(a,b,c,d,e){var z=new A.i3(a,b,c,e)
z.f=d
z.e=P.fU(d,0,!1,P.M)
return z}}},R:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},i4:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},D:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},i7:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},ib:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},cT:{"^":"a2;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bA(H.x(a,"$ise",[P.v],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},av:{"^":"a2;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bA(H.x(a,"$ise",[P.v],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},af:{"^":"a2;a,b,c,d",
dH:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},aa:{"^":"a2;a,b,c,d",
dI:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
cd:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bz:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.J(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.J(t+h,s+f,r+g)
z.b=q
p=new V.J(t-h,s-f,r-g)
z.c=p
o=new V.J(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cd(y)
k=F.cd(z.b)
j=F.ks(d,e,new F.jN(z,F.cd(z.c),F.cd(z.d),k,l,c),b)
if(j!=null)a.fN(j)},
ks:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ay,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cO()
y=H.f([],[F.ay])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cb(null,null,new V.aJ(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bQ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cb(null,null,new V.aJ(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bQ(d))}}z.d.fo(a+1,b+1,y)
return z},
jN:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c1(z.b,b).c1(z.d.c1(z.c,b),c)
z=new V.ak(y.a,y.b,y.c)
if(!J.U(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.sh9(y.v(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
x=new V.bj(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.U(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
ae:{"^":"a;0a,0b,0c,0d,0e",
gbS:function(){return this.a==null||this.b==null||this.c==null},
dZ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.J(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dl())return
return v.v(0,Math.sqrt(v.B(v)))},
e0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.B(z)))
z=w.G(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.aS(z.v(0,Math.sqrt(z.B(z))))
return z.v(0,Math.sqrt(z.B(z)))},
bP:function(){if(this.d!=null)return!0
var z=this.dZ()
if(z==null){z=this.e0()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
dY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.J(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dl())return
return v.v(0,Math.sqrt(v.B(v)))},
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.J(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.ak(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.J(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.B(z)))
z=k.aS(m)
z=z.v(0,Math.sqrt(z.B(z))).aS(k)
m=z.v(0,Math.sqrt(z.B(z)))}return m},
bN:function(){if(this.e!=null)return!0
var z=this.dY()
if(z==null){z=this.e_()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var z,y
if(this.gbS())return a+"disposed"
z=a+C.i.a7(J.a3(this.a.e),0)+", "+C.i.a7(J.a3(this.b.e),0)+", "+C.i.a7(J.a3(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.A("")},
t:{
b9:function(a,b,c){var z,y,x
z=new F.ae()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
cD:{"^":"a;0a,0b",
gbS:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){if(this.gbS())return a+"disposed"
return a+C.i.a7(J.a3(this.a.e),0)+", "+C.i.a7(J.a3(this.b.e),0)},
F:function(){return this.A("")}},
cJ:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a7(J.a3(z.e),0)},
F:function(){return this.A("")}},
dS:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
fN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.U()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.fw())}this.a.U()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cJ()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cD()
s=p.a
if(s==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.q("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.b9(p,o,l)}z=this.e
if(!(z==null))z.av(0)},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
cR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$am()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gcc(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dg])
for(r=0,q=0;q<w;++q){p=b.fq(q)
o=p.gcc(p)
C.a.a4(s,q,new Z.dg(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fI(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a4(t,l,m[k]);++l}}r+=o}H.x(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bA(t)),35044)
y.bindBuffer(34962,null)
i=new Z.co(new Z.en(34962,j),s,b)
i.b=H.f([],[Z.c6])
if(this.b.b.length!==0){x=P.M
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c6(0,h.length,f))}if(this.c.b.length!==0){x=P.M
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c6(1,h.length,f))}if(this.d.b.length!==0){x=P.M
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.U()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c6(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.X(z,"\n")},
aH:function(a){var z=this.e
if(!(z==null))z.w(a)},
a_:function(){return this.aH(null)},
t:{
cO:function(){var z,y
z=new F.dS()
y=new F.ik(z)
y.b=!1
y.c=H.f([],[F.ay])
z.a=y
y=new F.hF(z)
y.b=H.f([],[F.cJ])
z.b=y
y=new F.hE(z)
y.b=H.f([],[F.cD])
z.c=y
y=new F.hD(z)
y.b=H.f([],[F.ae])
z.d=y
z.e=null
return z}}},
hD:{"^":"a;a,0b",
fn:function(a){var z,y,x,w,v
H.x(a,"$ise",[F.ay],"$ase")
z=H.f([],[F.ae])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.b9(y,w,v))}return z},
fo:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$ise",[F.ay],"$ase")
z=H.f([],[F.ae])
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
C.a.h(z,F.b9(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b9(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b9(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.b9(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bP())x=!1
return x},
bO:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bN())x=!1
return x},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.X(z,"\n")},
F:function(){return this.A("")}},
hE:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.f([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.X(z,"\n")},
F:function(){return this.A("")}},
hF:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.X(z,"\n")},
F:function(){return this.A("")}},
ay:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bQ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cb(this.cx,x,u,z,y,w,v,a,t)},
fw:function(){return this.bQ(null)},
sh9:function(a){var z
if(!J.U(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
fI:function(a){var z,y
z=J.H(a)
if(z.u(a,$.$get$am())){z=this.f
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aB())){z=this.r
y=[P.v]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aA())){z=this.x
y=[P.v]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.y
y=[P.v]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aD())){z=this.z
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bu())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bv())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aW()))return H.f([this.ch],[P.v])
else if(z.u(a,$.$get$az())){z=this.cx
y=[P.v]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.v])},
bP:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.J(0,new F.is(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
bN:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.J(0,new F.ir(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
A:function(a){var z,y,x
z=H.f([],[P.o])
C.a.h(z,C.i.a7(J.a3(this.e),0))
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
x=C.a.X(z,", ")
return a+"{"+x+"}"},
F:function(){return this.A("")},
t:{
cb:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ay()
y=new F.iq(z)
y.b=H.f([],[F.cJ])
z.b=y
y=new F.ip(z)
x=[F.cD]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.il(z)
x=[F.ae]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$ek()
z.e=0
y=$.$get$am()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$el().a)!==0?c:null
z.ch=(x&$.$get$aW().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
is:{"^":"u:6;a",
$1:function(a){var z,y
H.j(a,"$isae")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
ir:{"^":"u:6;a",
$1:function(a){var z,y
H.j(a,"$isae")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
ik:{"^":"a;a,0b,0c",
U:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
fp:function(a,b,c,d,e,f,g,h,i){var z=F.cb(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b7:function(a,b,c,d,e,f){return this.fp(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bP()
return!0},
bO:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bN()
return!0},
ft:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.U(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
this.U()
z=H.f([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.X(z,"\n")},
F:function(){return this.A("")}},
il:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ae]})
C.a.J(this.b,b)
C.a.J(this.c,new F.im(this,b))
C.a.J(this.d,new F.io(this,b))},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.X(z,"\n")},
F:function(){return this.A("")}},
im:{"^":"u:6;a,b",
$1:function(a){H.j(a,"$isae")
if(!J.U(a.a,this.a))this.b.$1(a)}},
io:{"^":"u:6;a,b",
$1:function(a){var z
H.j(a,"$isae")
z=this.a
if(!J.U(a.a,z)&&!J.U(a.b,z))this.b.$1(a)}},
ip:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.X(z,"\n")},
F:function(){return this.A("")}},
iq:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
A:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.X(z,"\n")},
F:function(){return this.A("")}}}],["","",,O,{"^":"",h0:{"^":"bQ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
O:[function(a){var z
H.j(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.O(null)},"cm","$1","$0","gax",0,2,0],
eO:[function(a){H.j(a,"$isl")
this.a=null
this.O(a)},function(){return this.eO(null)},"hK","$1","$0","geN",0,2,0],
hl:[function(a,b){var z=V.ax
z=new D.bI(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.O(z)},"$2","gej",8,0,22],
hm:[function(a,b){var z=V.ax
z=new D.bJ(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.O(z)},"$2","gek",8,0,22],
ct:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.Z(z.e.length+3,4)*4
x=C.f.Z(z.f.length+3,4)*4
w=C.f.Z(z.r.length+3,4)*4
v=C.f.Z(z.x.length+3,4)*4
u=C.f.Z(z.y.length+3,4)*4
t=C.f.Z(z.z.length+3,4)*4
s=C.f.Z(this.e.a.length+3,4)*4
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
a6=$.$get$am()
if(c){z=$.$get$aB()
a6=new Z.aV(a6.a|z.a)}if(b){z=$.$get$aA()
a6=new Z.aV(a6.a|z.a)}if(a){z=$.$get$aC()
a6=new Z.aV(a6.a|z.a)}if(a0){z=$.$get$aD()
a6=new Z.aV(a6.a|z.a)}if(a2){z=$.$get$az()
a6=new Z.aV(a6.a|z.a)}return new A.h4(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
L:function(a,b){H.x(a,"$ise",[T.c9],"$ase")
if(b!=null)if(!C.a.aR(a,b)){b.a=a.length
C.a.h(a,b)}},
a8:function(a,b){var z
for(z=this.dx.a,z=new J.ai(z,z.length,0,[H.z(z,0)]);z.E();)C.n.a8(z.d,b)},
ds:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.ct()
y=H.j(a.fr.j(0,z.ar),"$isdJ")
if(y==null){y=A.h1(z,a.a)
a.cO(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aF
z=b.e
if(!(z instanceof Z.co)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.aq()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bO()
u.a.bO()
u=u.e
if(!(u==null))u.av(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.ft()
t=t.e
if(!(t==null))t.av(0)}r=b.d.cR(new Z.eo(a.a),w)
r.as($.$get$am()).e=this.a.y.c
if(z)r.as($.$get$aB()).e=this.a.Q.c
if(v)r.as($.$get$aA()).e=this.a.z.c
if(x.rx)r.as($.$get$aC()).e=this.a.ch.c
if(u)r.as($.$get$aD()).e=this.a.cx.c
if(x.x1)r.as($.$get$az()).e=this.a.cy.c
b.e=r}z=T.c9
q=H.f([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gR(u)
v=v.db
v.toString
v.a9(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gR(u)
t=a.dx
t=u.l(0,t.gR(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a9(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gh_()
t=a.dx
t=u.l(0,t.gR(t))
a.ch=t
u=t}v=v.fr
v.toString
v.a9(u.a3(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a9(u.a3(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a9(u.a3(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a9(C.n.a3(u,!0))}if(x.aE>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.j(t,"$isax")
u=u.k3
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bA(H.x(t.a3(0,!0),"$ise",v,"$ase")))
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
case C.c:this.L(q,this.f.d)
v=this.a
u=this.f.d
v.ab(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.L(q,this.f.e)
v=this.a
u=this.f.e
v.a5(v.r2,v.rx,u)
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
case C.c:this.L(q,this.r.d)
v=this.a
u=this.r.d
v.ab(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.L(q,this.r.e)
v=this.a
u=this.r.e
v.a5(v.x2,v.y1,u)
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
case C.c:this.L(q,this.x.d)
v=this.a
u=this.x.d
v.ab(v.aE,v.aF,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.L(q,this.x.e)
v=this.a
u=this.x.e
v.a5(v.ar,v.aF,u)
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
v=v.ba
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.L(q,this.y.d)
v=this.a
u=this.y.d
v.ab(v.cY,v.bb,u)
u=this.a
v=this.y.f
u=u.ba
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.L(q,this.y.e)
v=this.a
u=this.y.e
v.a5(v.cZ,v.bb,u)
u=this.a
v=this.y.f
u=u.ba
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bc
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.be
u.a.uniform1f(u.d,s)
break
case C.c:this.L(q,this.z.d)
v=this.a
u=this.z.d
v.ab(v.d_,v.bd,u)
u=this.a
v=this.z.f
u=u.bc
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.be
v.a.uniform1f(v.d,s)
break
case C.d:this.L(q,this.z.e)
v=this.a
u=this.z.e
v.a5(v.d0,v.bd,u)
u=this.a
v=this.z.f
u=u.bc
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.be
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dc
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.bT
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.dz(j.gb9(j))
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gai(j)
h=i.c
s=g.gaW()
t=g.gaJ()
g=g.gaP()
h.a.uniform3f(h.d,s,t,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dd
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.bU
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gca(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b1(j.gaV(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gai(j)
g=i.d
h=t.gaW()
s=t.gaJ()
t=t.gaP()
g.a.uniform3f(g.d,h,s,t)
t=j.gbJ()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbK()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbL()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.de
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.bV
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gca(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gb9(j).hQ()
g=i.c
h=t.gac(t)
s=t.gad(t)
t=t.gae()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaV(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gai(j)
s=i.e
h=t.gaW()
g=t.gaJ()
t=t.gaP()
s.a.uniform3f(s.d,h,g,t)
t=j.ghP()
g=i.f
g.a.uniform1f(g.d,t)
t=j.ghO()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbJ()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbK()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbL()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.df
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.bW
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gb_()
H.x(q,"$ise",t,"$ase")
if(!C.a.aR(q,s)){s.saL(q.length)
C.a.h(q,s)}s=j.gb9(j)
h=i.d
g=s.gac(s)
f=s.gad(s)
s=s.gae()
h.a.uniform3f(h.d,g,f,s)
s=j.gbo()
f=i.b
g=s.gac(s)
h=s.gad(s)
s=s.gae()
f.a.uniform3f(f.d,g,h,s)
s=j.gaX(j)
h=i.c
g=s.gac(s)
f=s.gad(s)
s=s.gae()
h.a.uniform3f(h.d,g,f,s)
s=m.dz(j.gb9(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gai(j)
g=i.f
f=h.gaW()
s=h.gaJ()
h=h.gaP()
g.a.uniform3f(g.d,f,s,h)
h=j.gb_()
s=h.gdm(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcA()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaL())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dg
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.bX
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gb_()
H.x(q,"$ise",s,"$ase")
if(!C.a.aR(q,h)){h.saL(q.length)
C.a.h(q,h)}e=m.l(0,j.gR(j))
h=j.gR(j).b1(new V.ak(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gca(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b1(new V.ak(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c_(0)
d=i.d
n=new Float32Array(H.bA(H.x(new V.dK(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gai(j)
h=i.e
f=d.gaW()
g=d.gaJ()
d=d.gaP()
h.a.uniform3f(h.d,f,g,d)
d=j.gb_()
h=d.gdm(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcA()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaL())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbJ()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbK()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbL()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dh
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.bY
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb_()
H.x(q,"$ise",z,"$ase")
if(!C.a.aR(q,t)){t.saL(q.length)
C.a.h(q,t)}t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gca(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gb9(j)
g=i.c
h=t.gac(t)
s=t.gad(t)
t=t.gae()
g.a.uniform3f(g.d,h,s,t)
t=j.gbo()
s=i.d
h=t.gac(t)
g=t.gad(t)
t=t.gae()
s.a.uniform3f(s.d,h,g,t)
t=j.gaX(j)
g=i.e
h=t.gac(t)
s=t.gad(t)
t=t.gae()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaV(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb_()
s=t.gdm(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcA()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaL())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gai(j)
s=i.y
h=t.gaW()
g=t.gaJ()
t=t.gaP()
s.a.uniform3f(s.d,h,g,t)
t=j.ghV()
g=i.z
g.a.uniform1f(g.d,t)
t=j.ghW()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbJ()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbK()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbL()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.c:this.L(q,this.Q.d)
z=this.a
v=this.Q.d
z.ab(z.d1,z.bf,v)
break
case C.d:this.L(q,this.Q.e)
z=this.a
v=this.Q.e
z.a5(z.d2,z.bf,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gR(v).c_(0)
a.Q=v}z=z.fy
z.toString
z.a9(v.a3(0,!0))}if(x.dy){this.L(q,this.ch)
z=this.a
v=this.ch
z.a5(z.d3,z.d4,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bg
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.L(q,this.cx.d)
z=this.a
v=this.cx.d
z.ab(z.d5,z.bh,v)
v=this.a
z=this.cx.f
v=v.bg
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.L(q,this.cx.e)
z=this.a
v=this.cx.e
z.a5(z.d6,z.bh,v)
v=this.a
z=this.cx.f
v=v.bg
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bj
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bi
v.a.uniform1f(v.d,t)
break
case C.c:this.L(q,this.cy.d)
z=this.a
v=this.cy.d
z.ab(z.d7,z.bk,v)
v=this.a
z=this.cy.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bi
z.a.uniform1f(z.d,t)
break
case C.d:this.L(q,this.cy.e)
z=this.a
v=this.cy.e
z.a5(z.d8,z.bk,v)
v=this.a
z=this.cy.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bi
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bl
z.a.uniform1f(z.d,u)
break
case C.c:this.L(q,this.db.d)
z=this.a
u=this.db.d
z.ab(z.d9,z.bm,u)
u=this.a
z=this.db.f
u=u.bl
u.a.uniform1f(u.d,z)
break
case C.d:this.L(q,this.db.e)
z=this.a
u=this.db.e
z.a5(z.da,z.bm,u)
u=this.a
z=this.db.f
u=u.bl
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.W(a)
z.a2(a)
z.b2(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.cV()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ct().ar}},h2:{"^":"cF;0f,a,b,0c,0d,0e"},cF:{"^":"a;",
O:[function(a){this.a.O(H.j(a,"$isl"))},function(){return this.O(null)},"cm","$1","$0","gax",0,2,0],
aM:["dM",function(){}],
eS:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gax(),{func:1,ret:-1,args:[D.l]})
C.a.S(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gax(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.F(this.b+".texture2D",x,this.d,this,[T.dY])
z.b=!0
this.a.O(z)}},
eT:function(a){}},h3:{"^":"cF;a,b,0c,0d,0e"},aQ:{"^":"cF;0f,a,b,0c,0d,0e",
cH:function(a){var z,y
if(!J.U(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.O(y)}},
aM:["cf",function(){this.dM()
this.cH(new V.a4(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aM()
z=this.a
z.a=null
z.O(null)}this.cH(b)}},h5:{"^":"aQ;0ch,0f,a,b,0c,0d,0e",
eQ:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
aM:function(){this.cf()
this.eQ(1)}},h6:{"^":"aQ;0ch,0f,a,b,0c,0d,0e",
eR:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
aM:function(){this.cf()
this.eR(100)}},hG:{"^":"bQ;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
O:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.O(null)},"cm","$1","$0","gax",0,2,0],
ds:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.j(0,"Skybox"),"$isdT")
if(z==null){y=a.a
z=new A.dT(y,"Skybox")
z.cg(y,"Skybox")
z.dj(0,$.hI,$.hH)
z.x=z.f.j(0,"posAttr")
z.y=H.c(z.r.j(0,"fov"),"$isR")
z.z=H.c(z.r.j(0,"ratio"),"$isR")
z.Q=H.c(z.r.j(0,"boxClr"),"$isD")
z.ch=H.c(z.r.j(0,"boxTxt"),"$isaa")
z.cx=H.c(z.r.j(0,"viewMat"),"$isav")
a.cO(z)}this.a=z}if(b.e==null){y=b.d.cR(new Z.eo(a.a),$.$get$am())
y.as($.$get$am()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.dI(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gR(x).c_(0)
w=w.cx
w.toString
w.a9(x.a3(0,!0))
y=b.e
if(y instanceof Z.co){y.W(a)
y.a2(a)
y.b2(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cV()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bQ:{"^":"a;"}}],["","",,T,{"^":"",c9:{"^":"cl;"},dY:{"^":"c9;0b,0c,0d,0e,0f,0r,0x,0y,a"},dZ:{"^":"c9;0b,0c,0d,0e,a"},hR:{"^":"a;a,0b,0c,0d,0e",
fL:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dz(null,a,null)
w=new T.dY(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.C()
z=W.a_
W.V(x,"load",H.b(new T.hT(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
fK:function(a){return this.fL(a,!1,!1,!1,!1)},
aA:function(a,b,c,d,e,f){var z,y
z=W.dz(null,c,null);++this.d
y=W.a_
W.V(z,"load",H.b(new T.hS(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
cG:function(a,b,c){var z,y,x,w
b=V.d9(b,2)
z=V.d9(a.width,2)
y=V.d9(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cq(null,null)
x.width=z
x.height=y
w=H.j(C.k.dD(x,"2d"),"$isdi")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k1(w.getImageData(0,0,x.width,x.height))}}},hT:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.cG(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.r.du(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.cX()}++x.e}},hS:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.cG(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.r.du(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.cX();++z.e}}}],["","",,X,{"^":"",c0:{"^":"a;",$isar:1},fC:{"^":"cQ;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
al:function(a){var z=this.x
if(!(z==null))z.w(a)},
W:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.f.af(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.af(w.b*x)
t=C.f.af(w.c*y)
a.c=t
w=C.f.af(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
t:{
cu:function(a,b,c,d,e,f,g){var z,y
z=new X.fC()
y=new V.aJ(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dR(0,0,1,1)
z.r=y
return z}}},fE:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
W:function(a){var z
a.cy.bn(V.aR())
z=V.aR()
a.db.bn(z)},
b2:function(a){a.cy.au()
a.db.au()},
$isar:1,
$isc0:1},hh:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
al:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.al(null)},"he","$1","$0","gdV",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bn(V.ao(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dO
if(z==null){z=new V.J(0,0,-1)
r=z.v(0,Math.sqrt(z.B(z)))
z=new V.J(0,1,0).aS(r)
q=z.v(0,Math.sqrt(z.B(z)))
p=r.aS(q)
o=new V.J(0,0,0)
z=V.ao(q.a,p.a,r.a,q.H(0).B(o),q.b,p.b,r.b,p.H(0).B(o),q.c,p.c,r.c,r.H(0).B(o),0,0,0,1)
$.dO=z
n=z}else n=z
z=this.a
if(z!=null){m=z.aI(0,a,this)
if(m!=null)n=m.l(0,n)}a.db.bn(n)},
b2:function(a){a.cy.au()
a.db.au()},
$isar:1,
$isc0:1,
t:{
dN:function(a,b,c,d){var z,y,x,w
z=new X.hh()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gq()
x.toString
w=H.b(z.gdV(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.F("mover",y,z.a,z,[U.a9])
x.b=!0
z.al(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.F("fov",y,b,z,[P.v])
x.b=!0
z.al(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.F("near",y,d,z,[P.v])
x.b=!0
z.al(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.F("far",y,a,z,[P.v])
x.b=!0
z.al(x)}return z}}},cQ:{"^":"a;"}}],["","",,B,{"^":"",
km:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.l.cI(x,(x&&C.l).br(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a_
W.V(z,"scroll",H.b(new B.kn(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
ko:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$ise",[P.o],"$ase")
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
u=W.cq(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.j(v.insertCell(-1),"$isbq")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.j(q.insertCell(-1),"$isbq").style
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
t=H.j(q.insertCell(-1),"$isbq")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.j(q.insertCell(-1),"$isbq")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.j(q.insertCell(-1),"$isbq").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.km(a,y,!1,"../resources/SnowTop.png")},
kp:function(a){P.i_(C.w,new B.kq(a))},
kn:{"^":"u:11;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.h(-0.05*C.h.af(this.b.scrollTop))+"px"
z.top=y}},
kq:{"^":"u:37;a",
$1:function(a){H.j(a,"$isaT")
P.da(C.h.dw(this.a.gfE(),2)+" fps")}}}],["","",,Y,{"^":"",
eU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
B.ko("Test 034",H.f([],[P.o]),"Test of resizing the render target.")
z=document
y=z.getElementById("threeDart")
x=y.style
x.width="100%"
x.height="100%"
x.margin="-2px"
w=z.createElement("div")
x=w.style
x.border="2px solid"
x.padding="10px"
C.l.cI(x,(x&&C.l).br(x,"resize"),"both","")
x.overflow="auto"
J.f3(y,w)
w.appendChild(y)
v=z.getElementById("threeDart")
if(v==null)H.r(P.q("Failed to find an element with the identifier, threeDart."))
u=E.hY(v,!0,!0,!0,!1)
t=new U.dx()
t.b3(U.a9)
t.aK(t.geh(),t.geD())
t.e=null
t.f=V.aR()
t.r=0
z=u.r
x=new U.ii()
s=U.cs()
s.sc9(0,!0)
s.sc2(6.283185307179586)
s.sc4(0)
s.sa0(0,0)
s.sc3(100)
s.sK(0)
s.sbR(0.5)
x.b=s
s=s.gq()
s.toString
r={func:1,ret:-1,args:[D.l]}
q=H.b(x.gaB(),r)
C.a.h(s.a,q)
s=U.cs()
s.sc9(0,!0)
s.sc2(6.283185307179586)
s.sc4(0)
s.sa0(0,0)
s.sc3(100)
s.sK(0)
s.sbR(0.5)
x.c=s
C.a.h(s.gq().a,q)
x.d=null
x.e=!1
x.f=!1
x.r=!1
x.x=2.5
x.y=2.5
x.z=2
x.Q=4
x.cx=!1
x.ch=!1
x.cy=0
x.db=0
x.dx=null
x.dy=0
x.fr=null
x.fx=null
p=new X.ap(!1,!1,!1)
o=x.d
x.d=p
s=[X.ap]
q=new D.F("modifiers",o,p,x,s)
q.b=!0
x.I(q)
q=x.f
if(q!==!1){x.f=!1
q=new D.F("invertX",q,!1,x,[P.a7])
q.b=!0
x.I(q)}q=x.r
if(q!==!1){x.r=!1
q=new D.F("invertY",q,!1,x,[P.a7])
q.b=!0
x.I(q)}x.aO(z)
t.h(0,x)
z=u.r
x=new U.ih()
q=U.cs()
q.sc9(0,!0)
q.sc2(6.283185307179586)
q.sc4(0)
q.sa0(0,0)
q.sc3(100)
q.sK(0)
q.sbR(0.2)
x.b=q
q=q.gq()
q.toString
n=H.b(x.gaB(),r)
C.a.h(q.a,n)
x.c=null
x.d=!1
x.e=2.5
x.f=2
x.r=4
x.y=!1
x.x=!1
x.z=0
x.Q=null
x.ch=0
x.cx=null
x.cy=null
p=new X.ap(!0,!1,!1)
o=x.c
x.c=p
q=new D.F("modifiers",o,p,x,s)
q.b=!0
x.I(q)
x.aO(z)
t.h(0,x)
z=u.r
x=new U.ij()
x.c=0.01
x.d=0
x.e=0
p=new X.ap(!1,!1,!1)
x.b=p
s=new D.F("modifiers",null,p,x,s)
s.b=!0
x.I(s)
x.aO(z)
t.h(0,x)
m=V.ao(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
z=new U.dl()
z.a=m
t.h(0,z)
l=X.dN(2000,1.0471975511965976,t,0.1)
k=new O.h0()
z=O.cr(V.ax)
k.e=z
z.aK(k.gej(),k.gek())
z=new O.aQ(k,"emission")
z.c=C.b
z.f=new V.a4(0,0,0)
k.f=z
z=new O.aQ(k,"ambient")
z.c=C.b
z.f=new V.a4(0,0,0)
k.r=z
z=new O.aQ(k,"diffuse")
z.c=C.b
z.f=new V.a4(0,0,0)
k.x=z
z=new O.aQ(k,"invDiffuse")
z.c=C.b
z.f=new V.a4(0,0,0)
k.y=z
z=new O.h6(k,"specular")
z.c=C.b
z.f=new V.a4(0,0,0)
z.ch=100
k.z=z
z=new O.h3(k,"bump")
z.c=C.b
k.Q=z
k.ch=null
z=new O.aQ(k,"reflect")
z.c=C.b
z.f=new V.a4(0,0,0)
k.cx=z
z=new O.h5(k,"refract")
z.c=C.b
z.f=new V.a4(0,0,0)
z.ch=1
k.cy=z
z=new O.h2(k,"alpha")
z.c=C.b
z.f=1
k.db=z
z=new D.fM()
z.b3(D.W)
z.e=H.f([],[D.fp])
z.f=H.f([],[D.hj])
z.r=H.f([],[D.hJ])
z.x=H.f([],[D.hU])
z.y=H.f([],[D.hV])
z.z=H.f([],[D.hW])
z.Q=null
z.ch=null
z.cb(z.gei(),z.geC(),z.geE())
k.dx=z
x=z.Q
if(x==null){x=D.C()
z.Q=x
z=x}else z=x
x=H.b(k.geN(),r)
C.a.h(z.a,x)
x=k.dx
z=x.ch
if(z==null){z=D.C()
x.ch=z}x=H.b(k.gax(),r)
C.a.h(z.a,x)
k.dy=null
x=k.r
x.sai(0,new V.a4(0.3,0.3,0.3))
z=k.x
z.sai(0,new V.a4(0.8,0.8,0.8))
z=k.x
x=u.f.fK("../resources/Test.png")
s=z.c
if(s!==C.c){if(s===C.b)z.aM()
z.c=C.c
z.eT(null)
s=z.a
s.a=null
s.O(null)}z.eS(x)
j=X.cu(!0,!0,!1,null,2000,null,0)
if(j.b){j.b=!1
z=new D.F("clearColor",!0,!1,j,[P.a7])
z.b=!0
j.al(z)}i=E.dv(null,!0,null,"",null,null)
h=F.cO()
F.bz(h,null,null,1,1,1,0,0,1)
F.bz(h,null,null,1,1,0,1,0,3)
F.bz(h,null,null,1,1,0,0,1,2)
F.bz(h,null,null,1,1,-1,0,0,0)
F.bz(h,null,null,1,1,0,-1,0,0)
F.bz(h,null,null,1,1,0,0,-1,3)
h.aq()
i.sbq(0,h)
g=new M.fw()
z=O.cr(E.aw)
g.d=z
z.aK(g.gem(),g.gen())
g.e=null
g.f=null
g.r=null
g.x=null
g.saQ(null)
g.saY(0,null)
g.saZ(null)
g.d.h(0,i)
g.saZ(k)
g.saY(0,j)
g.saQ(l)
z=u.f
x=z.a
f=x.createTexture()
x.bindTexture(34067,f)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
e=new T.dZ(0)
e.b=f
e.c=!1
e.d=0
e.e=D.C()
z.aA(e,f,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aA(e,f,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aA(e,f,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aA(e,f,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aA(e,f,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aA(e,f,"../resources/maskonaive/negz.jpg",34074,!1,!1)
d=new M.fi()
d.saQ(null)
d.saY(0,null)
d.saZ(null)
z=E.dv(null,!0,null,"",null,null)
h=F.cO()
x=h.a
s=new V.J(-1,-1,1)
s=s.v(0,Math.sqrt(s.B(s)))
c=x.b7(new V.bj(1,2,4,6),new V.aJ(1,0,0,1),new V.ak(-1,-1,0),new V.N(0,1),s,null)
x=h.a
s=new V.J(1,-1,1)
s=s.v(0,Math.sqrt(s.B(s)))
b=x.b7(new V.bj(0,3,4,6),new V.aJ(0,0,1,1),new V.ak(1,-1,0),new V.N(1,1),s,null)
x=h.a
s=new V.J(1,1,1)
s=s.v(0,Math.sqrt(s.B(s)))
a=x.b7(new V.bj(0,2,5,6),new V.aJ(0,1,0,1),new V.ak(1,1,0),new V.N(1,0),s,null)
x=h.a
s=new V.J(-1,1,1)
s=s.v(0,Math.sqrt(s.B(s)))
a0=x.b7(new V.bj(0,2,4,7),new V.aJ(1,1,0,1),new V.ak(-1,1,0),new V.N(0,0),s,null)
h.d.fn(H.f([c,b,a,a0],[F.ay]))
h.aq()
z.sbq(0,h)
d.d=z
d.e=null
z=new O.hG()
z.b=1.0471975511965976
o=z.c
z.c=e
x=e.e
s=H.b(z.gax(),r)
C.a.h(x.a,s)
x=new D.F("boxTexture",o,z.c,z,[T.dZ])
x.b=!0
z.O(x)
a1=new V.a4(1,1,1)
if(!J.U(z.d,a1)){o=z.d
z.d=a1
x=new D.F("boxColor",o,a1,z,[V.a4])
x.b=!0
z.O(x)}z.e=null
d.saZ(z)
d.saY(0,j)
d.saQ(l)
z=M.as
x=H.f([d,g],[z])
s=new M.fg()
s.b3(z)
s.e=!1
s.f=null
s.aK(s.geF(),s.geG())
s.bI(0,x)
z=u.d
if(z!==s){if(z!=null){z=z.gq()
z.toString
x=H.b(u.gcj(),r)
C.a.S(z.a,x)}u.d=s
z=s.gq()
z.toString
r=H.b(u.gcj(),r)
C.a.h(z.a,r)
u.dR()}B.kp(u)}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dC.prototype
return J.dB.prototype}if(typeof a=="string")return J.cy.prototype
if(a==null)return J.dD.prototype
if(typeof a=="boolean")return J.fJ.prototype
if(a.constructor==Array)return J.bK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.bV=function(a){if(typeof a=="string")return J.cy.prototype
if(a==null)return a
if(a.constructor==Array)return J.bK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.d5=function(a){if(a==null)return a
if(a.constructor==Array)return J.bK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.k4=function(a){if(typeof a=="number")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cU.prototype
return a}
J.b2=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).u(a,b)}
J.eZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k4(a).ag(a,b)}
J.f_=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kd(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bV(a).j(a,b)}
J.f0=function(a,b,c){return J.b2(a).eL(a,b,c)}
J.f1=function(a,b,c,d){return J.b2(a).cN(a,b,c,d)}
J.ck=function(a,b,c){return J.bV(a).fu(a,b,c)}
J.db=function(a,b){return J.d5(a).C(a,b)}
J.f2=function(a,b){return J.d5(a).J(a,b)}
J.aH=function(a){return J.H(a).gP(a)}
J.bY=function(a){return J.d5(a).gV(a)}
J.b5=function(a){return J.bV(a).gk(a)}
J.f3=function(a,b){return J.b2(a).h2(a,b)}
J.a3=function(a){return J.H(a).i(a)}
var $=I.p
C.k=W.cp.prototype
C.l=W.fj.prototype
C.x=J.m.prototype
C.a=J.bK.prototype
C.y=J.dB.prototype
C.f=J.dC.prototype
C.n=J.dD.prototype
C.h=J.c7.prototype
C.i=J.cy.prototype
C.F=J.bL.prototype
C.G=W.hd.prototype
C.q=J.hi.prototype
C.r=P.cL.prototype
C.m=J.cU.prototype
C.t=W.bw.prototype
C.u=W.iv.prototype
C.v=new P.hf()
C.j=new P.jg()
C.b=new A.c1(0,"ColorSourceType.None")
C.e=new A.c1(1,"ColorSourceType.Solid")
C.c=new A.c1(2,"ColorSourceType.Texture2D")
C.d=new A.c1(3,"ColorSourceType.TextureCube")
C.w=new P.bG(5e6)
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
C.o=function(hooks) { return hooks; }

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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.an=0
$.b6=null
$.de=null
$.cZ=!1
$.eR=null
$.eL=null
$.eX=null
$.cg=null
$.ci=null
$.d6=null
$.aY=null
$.bB=null
$.bC=null
$.d_=!1
$.O=C.j
$.ds=null
$.dr=null
$.dq=null
$.dp=null
$.n=V.h7()
$.hI="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.hH="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dO=null
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
I.$lazy(y,x,w)}})(["dn","$get$dn",function(){return H.eQ("_$dart_dartClosure")},"cz","$get$cz",function(){return H.eQ("_$dart_js")},"e2","$get$e2",function(){return H.at(H.ca({
toString:function(){return"$receiver$"}}))},"e3","$get$e3",function(){return H.at(H.ca({$method$:null,
toString:function(){return"$receiver$"}}))},"e4","$get$e4",function(){return H.at(H.ca(null))},"e5","$get$e5",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e9","$get$e9",function(){return H.at(H.ca(void 0))},"ea","$get$ea",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.at(H.e8(null))},"e6","$get$e6",function(){return H.at(function(){try{null.$method$}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.at(H.e8(void 0))},"eb","$get$eb",function(){return H.at(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cW","$get$cW",function(){return P.iw()},"bD","$get$bD",function(){return[]},"dm","$get$dm",function(){return{}},"em","$get$em",function(){return Z.ag(0)},"ek","$get$ek",function(){return Z.ag(511)},"am","$get$am",function(){return Z.ag(1)},"aB","$get$aB",function(){return Z.ag(2)},"aA","$get$aA",function(){return Z.ag(4)},"aC","$get$aC",function(){return Z.ag(8)},"aD","$get$aD",function(){return Z.ag(16)},"bu","$get$bu",function(){return Z.ag(32)},"bv","$get$bv",function(){return Z.ag(64)},"el","$get$el",function(){return Z.ag(96)},"aW","$get$aW",function(){return Z.ag(128)},"az","$get$az",function(){return Z.ag(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[W.aq]},{func:1,ret:P.G,args:[F.ae]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.M,[P.d,E.aw]]},{func:1,ret:P.G,args:[D.l]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.G,args:[W.a_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.o,args:[P.M]},{func:1,ret:P.G,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.M,[P.d,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.M,[P.d,U.a9]]},{func:1,ret:-1,args:[P.M,[P.d,M.as]]},{func:1,ret:-1,args:[P.M,[P.d,V.ax]]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.a7,args:[W.I]},{func:1,ret:W.Z,args:[W.I]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.G,args:[P.S]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.al]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:P.a7,args:[P.v,P.v]},{func:1,ret:P.a7,args:[[P.d,D.W]]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:P.G,args:[F.ay,P.v,P.v]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.G,args:[P.aT]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.kt(d||a)
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
Isolate.d3=a.d3
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.eU,[])
else Y.eU([])})})()
//# sourceMappingURL=test.dart.js.map
