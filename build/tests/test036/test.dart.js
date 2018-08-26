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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d1(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d2=function(){}
var dart=[["","",,H,{"^":"",lp:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
d7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d5==null){H.kb()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.ek("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.kg(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n:{"^":"a;",
u:function(a,b){return a===b},
gS:function(a){return H.bo(a)},
j:["dI",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fH:{"^":"n;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa4:1},
dC:{"^":"n;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isH:1},
cE:{"^":"n;",
gS:function(a){return 0},
j:["dJ",function(a){return String(a)}]},
hi:{"^":"cE;"},
ci:{"^":"cE;"},
bO:{"^":"cE;",
j:function(a){var z=a[$.$get$dp()]
if(z==null)return this.dJ(a)
return"JavaScript function for "+H.j(J.al(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscA:1},
bM:{"^":"n;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bK:function(a,b){var z,y
H.v(b,"$isc",[H.y(a,0)],"$asc")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.k(P.b9(a))}},
X:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a5(z,y,H.j(a[y]))
return z.join(b)},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
gc1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.k(H.fF())},
aP:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
j:function(a){return P.cB(a,"[","]")},
gW:function(a){return new J.am(a,a.length,0,[H.y(a,0)])},
gS:function(a){return H.bo(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.c1(b,"newLength",null))
if(b<0)throw H.k(P.bp(b,0,null,"newLength",null))
a.length=b},
a5:function(a,b,c){H.X(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.bV(a,b))
if(b>=a.length||b<0)throw H.k(H.bV(a,b))
a[b]=c},
$isc:1,
$ise:1,
t:{
fG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.c1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.k(P.bp(a,0,4294967295,"length",null))
return J.dz(new Array(a),b)},
dz:function(a,b){return J.bh(H.d(a,[b]))},
bh:function(a){H.bZ(a)
a.fixed$length=Array
return a}}},
lo:{"^":"bM;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bN:{"^":"n;",
gfQ:function(a){return a===0?1/a<0:a<0},
hk:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.k(P.ad(""+a+".toInt()"))},
c_:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.k(P.ad(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.ad(""+a+".round()"))},
dA:function(a,b){var z
if(b>20)throw H.k(P.bp(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfQ(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.k(H.bU(b))
return a*b},
dF:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cL(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cL(a,b)},
cL:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
cJ:function(a,b){var z
if(a>0)z=this.f3(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f3:function(a,b){return b>31?0:a>>>b},
ac:function(a,b){if(typeof b!=="number")throw H.k(H.bU(b))
return a<b},
$isw:1,
$isS:1},
dB:{"^":"bN;",$isI:1},
dA:{"^":"bN;"},
cb:{"^":"n;",
e1:function(a,b){if(b>=a.length)throw H.k(H.bV(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.T(b)
if(typeof b!=="string")throw H.k(P.c1(b,null,null))
return a+b},
cl:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b>c)throw H.k(P.cM(b,null,null))
if(c>a.length)throw H.k(P.cM(c,null,null))
return a.substring(b,c)},
ck:function(a,b){return this.cl(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h1:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
at:function(a,b){return this.h1(a,b," ")},
fF:function(a,b,c){if(c>a.length)throw H.k(P.bp(c,0,a.length,null,null))
return H.ks(a,b,c)},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ishg:1,
$iso:1}}],["","",,H,{"^":"",
fF:function(){return new P.hI("No element")},
fr:{"^":"c;"},
fS:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bX(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.k(P.b9(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
fY:{"^":"c;a,b,$ti",
gW:function(a){return new H.fZ(J.c0(this.a),this.b,this.$ti)},
gl:function(a){return J.b7(this.a)},
D:function(a,b){return this.b.$1(J.db(this.a,b))},
$asc:function(a,b){return[b]}},
fZ:{"^":"cC;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascC:function(a,b){return[b]}},
iu:{"^":"c;a,b,$ti",
gW:function(a){return new H.iv(J.c0(this.a),this.b,this.$ti)}},
iv:{"^":"cC;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
c9:{"^":"a;$ti"}}],["","",,H,{"^":"",
k6:function(a){return init.types[H.X(a)]},
ke:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.al(a)
if(typeof z!=="string")throw H.k(H.bU(a))
return z},
bo:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.L(a).$isci){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.e1(w,0)===36)w=C.j.ck(w,1)
r=H.d6(H.bZ(H.aO(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hq:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
ho:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
hk:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
hl:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
hn:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
hp:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
hm:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
q:function(a){throw H.k(H.bU(a))},
h:function(a,b){if(a==null)J.b7(a)
throw H.k(H.bV(a,b))},
bV:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,"index",null)
z=H.X(J.b7(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cM(b,"index",null)},
bU:function(a){return new P.aR(!0,a,null,null)},
jY:function(a){if(typeof a!=="number")throw H.k(H.bU(a))
return a},
k:function(a){var z
if(a==null)a=new P.dM()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eY})
z.name=""}else z.toString=H.eY
return z},
eY:function(){return J.al(this.dartException)},
r:function(a){throw H.k(a)},
z:function(a){throw H.k(P.b9(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kx(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.cJ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cG(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dL(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e2()
u=$.$get$e3()
t=$.$get$e4()
s=$.$get$e5()
r=$.$get$e9()
q=$.$get$ea()
p=$.$get$e7()
$.$get$e6()
o=$.$get$ec()
n=$.$get$eb()
m=v.a7(y)
if(m!=null)return z.$1(H.cG(H.T(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cG(H.T(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dL(H.T(y),m))}}return z.$1(new H.ib(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dT()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aR(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dT()
return a},
b5:function(a){var z
if(a==null)return new H.eC(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eC(a)},
k3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a5(0,a[y],a[x])}return b},
kd:function(a,b,c,d,e,f){H.i(a,"$iscA")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(P.p("Unsupported number of arguments for wrapped closure"))},
b3:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kd)
a.$identity=z
return z},
fc:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$ise){z.$reflectionInfo=d
x=H.hs(z).r}else x=d
w=e?Object.create(new H.hJ().constructor.prototype):Object.create(new H.ct(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.F()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dk(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.k6,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.df:H.cu
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.k("Error in reflectionInfo.")
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
f9:function(a,b,c,d){var z=H.cu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dk:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fb(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f9(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.F()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b8
if(v==null){v=H.c2("self")
$.b8=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.F()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.b8
if(v==null){v=H.c2("self")
$.b8=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fa:function(a,b,c,d){var z,y
z=H.cu
y=H.df
switch(b?-1:a){case 0:throw H.k(H.hA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fb:function(a,b){var z,y,x,w,v,u,t,s
z=$.b8
if(z==null){z=H.c2("self")
$.b8=z}y=$.de
if(y==null){y=H.c2("receiver")
$.de=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fa(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ar
if(typeof y!=="number")return y.F()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.F()
$.ar=y+1
return new Function(z+y+"}")()},
d1:function(a,b,c,d,e,f,g){var z,y
z=J.bh(H.bZ(b))
H.X(c)
y=!!J.L(d).$ise?J.bh(d):d
return H.fc(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.ay(a,"String"))},
kj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.ay(a,"num"))},
eO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.ay(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.ay(a,"int"))},
eW:function(a,b){throw H.k(H.ay(a,H.T(b).substring(3)))},
kl:function(a,b){var z=J.bX(b)
throw H.k(H.f8(a,z.cl(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.eW(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.kl(a,b)},
bZ:function(a){if(a==null)return a
if(!!J.L(a).$ise)return a
throw H.k(H.ay(a,"List"))},
kf:function(a,b){if(a==null)return a
if(!!J.L(a).$ise)return a
if(J.L(a)[b])return a
H.eW(a,b)},
eP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bW:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eP(J.L(a))
if(z==null)return!1
y=H.eS(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cY)return a
$.cY=!0
try{if(H.bW(a,b))return a
z=H.c_(b)
y=H.ay(a,z)
throw H.k(y)}finally{$.cY=!1}},
d3:function(a,b){if(a!=null&&!H.d0(a,b))H.r(H.ay(a,H.c_(b)))
return a},
eJ:function(a){var z
if(a instanceof H.u){z=H.eP(J.L(a))
if(z!=null)return H.c_(z)
return"Closure"}return H.aT(a)},
ku:function(a){throw H.k(new P.fj(H.T(a)))},
eQ:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
aO:function(a){if(a==null)return
return a.$ti},
mm:function(a,b,c){return H.b6(a["$as"+H.j(c)],H.aO(b))},
bH:function(a,b,c,d){var z
H.T(c)
H.X(d)
z=H.b6(a["$as"+H.j(c)],H.aO(b))
return z==null?null:z[d]},
aI:function(a,b,c){var z
H.T(b)
H.X(c)
z=H.b6(a["$as"+H.j(b)],H.aO(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.X(b)
z=H.aO(a)
return z==null?null:z[b]},
c_:function(a){var z=H.aP(a,null)
return z},
aP:function(a,b){var z,y
H.v(b,"$ise",[P.o],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d6(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.jO(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.v(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.j.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aP(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aP(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aP(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aP(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d6:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.o],"$ase")
if(a==null)return""
z=new P.bR("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aP(u,c)}v="<"+z.j(0)+">"
return v},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b2:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aO(a)
y=J.L(a)
if(y[b]==null)return!1
return H.eM(H.b6(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.T(b)
H.bZ(c)
H.T(d)
if(a==null)return a
z=H.b2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d6(c,0,null)
throw H.k(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
mk:function(a,b,c){return a.apply(b,H.b6(J.L(b)["$as"+H.j(c)],H.aO(b)))},
eT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.eT(z)}return!1},
d0:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.eT(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d0(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bW(a,b)}y=J.L(a).constructor
x=H.aO(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.d0(a,b))throw H.k(H.ay(a,H.c_(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.eS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cA"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bd" in y.prototype))return!1
w=y.prototype["$as"+"bd"]
v=H.b6(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c_(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eM(H.b6(r,z),b,u,d)},
eS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ki(m,b,l,d)},
ki:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
ml:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kg:function(a){var z,y,x,w,v,u
z=H.T($.eR.$1(a))
y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.eL.$2(a,z))
if(z!=null){y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cq(x)
$.cn[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cp[z]=x
return x}if(v==="-"){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eV(a,x)
if(v==="*")throw H.k(P.ek(z))
if(init.leafTags[z]===true){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eV(a,x)},
eV:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d7(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq:function(a){return J.d7(a,!1,null,!!a.$isA)},
kh:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cq(z)
else return J.d7(z,c,null,null)},
kb:function(){if(!0===$.d5)return
$.d5=!0
H.kc()},
kc:function(){var z,y,x,w,v,u,t,s
$.cn=Object.create(null)
$.cp=Object.create(null)
H.k7()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eX.$1(v)
if(u!=null){t=H.kh(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k7:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.b1(C.y,H.b1(C.D,H.b1(C.n,H.b1(C.n,H.b1(C.C,H.b1(C.z,H.b1(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eR=new H.k8(v)
$.eL=new H.k9(u)
$.eX=new H.ka(t)},
b1:function(a,b){return a(b)||b},
ks:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hr:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hs:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bh(z)
y=z[0]
x=z[1]
return new H.hr(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i0:{"^":"a;a,b,c,d,e,f",
a7:function(a){var z,y,x
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
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ch:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e8:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
he:{"^":"Z;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dL:function(a,b){return new H.he(a,b==null?null:b.method)}}},
fI:{"^":"Z;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
cG:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fI(a,y,z?null:b.receiver)}}},
ib:{"^":"Z;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kx:{"^":"u:19;a",
$1:function(a){if(!!J.L(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eC:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
u:{"^":"a;",
j:function(a){return"Closure '"+H.aT(this).trim()+"'"},
gdC:function(){return this},
$iscA:1,
gdC:function(){return this}},
dW:{"^":"u;"},
hJ:{"^":"dW;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ct:{"^":"dW;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ct))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bo(this.a)
else y=typeof z!=="object"?J.aJ(z):H.bo(z)
return(y^H.bo(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
t:{
cu:function(a){return a.a},
df:function(a){return a.c},
c2:function(a){var z,y,x,w,v
z=new H.ct("self","target","receiver","name")
y=J.bh(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i1:{"^":"Z;a",
j:function(a){return this.a},
t:{
ay:function(a,b){return new H.i1("TypeError: "+H.j(P.c8(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
f7:{"^":"Z;a",
j:function(a){return this.a},
t:{
f8:function(a,b){return new H.f7("CastError: "+H.j(P.c8(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
hz:{"^":"Z;a",
j:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
hA:function(a){return new H.hz(a)}}},
cF:{"^":"fW;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gas:function(a){return new H.fN(this,[H.y(this,0)])},
fG:function(a,b){var z=this.b
if(z==null)return!1
return this.e4(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b3(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b3(w,b)
x=y==null?null:y.b
return x}else return this.fP(b)},
fP:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cD(z,J.aJ(a)&0x3ffffff)
x=this.dn(y,a)
if(x<0)return
return y[x].b},
a5:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bC()
this.b=z}this.cq(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bC()
this.c=y}this.cq(y,b,c)}else{x=this.d
if(x==null){x=this.bC()
this.d=x}w=J.aJ(b)&0x3ffffff
v=this.cD(x,w)
if(v==null)this.bI(x,w,[this.bD(b,c)])
else{u=this.dn(v,b)
if(u>=0)v[u].b=c
else v.push(this.bD(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.b9(this))
z=z.c}},
cq:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.b3(a,b)
if(z==null)this.bI(a,b,this.bD(b,c))
else z.b=c},
ef:function(){this.r=this.r+1&67108863},
bD:function(a,b){var z,y
z=new H.fM(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ef()
return z},
dn:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
j:function(a){return P.dI(this)},
b3:function(a,b){return a[b]},
cD:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
e4:function(a,b){return this.b3(a,b)!=null},
bC:function(){var z=Object.create(null)
this.bI(z,"<non-identifier-key>",z)
this.e7(z,"<non-identifier-key>")
return z},
$isdG:1},
fM:{"^":"a;a,b,0c,0d"},
fN:{"^":"fr;a,$ti",
gl:function(a){return this.a.a},
gW:function(a){var z,y
z=this.a
y=new H.fO(z,z.r,this.$ti)
y.c=z.e
return y}},
fO:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
k8:{"^":"u:19;a",
$1:function(a){return this.a(a)}},
k9:{"^":"u:39;a",
$2:function(a,b){return this.a(a,b)}},
ka:{"^":"u:36;a",
$1:function(a){return this.a(H.T(a))}}}],["","",,H,{"^":"",
k2:function(a){return J.dz(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b_:function(a){return a},
aN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.bV(b,a))},
hb:{"^":"n;",$ism3:1,"%":"DataView;ArrayBufferView;cL|ew|ex|ha|ey|ez|aL"},
cL:{"^":"hb;",
gl:function(a){return a.length},
$isA:1,
$asA:I.d2},
ha:{"^":"ex;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
$asc9:function(){return[P.w]},
$ast:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aL:{"^":"ez;",
$asc9:function(){return[P.I]},
$ast:function(){return[P.I]},
$isc:1,
$asc:function(){return[P.I]},
$ise:1,
$ase:function(){return[P.I]}},
lz:{"^":"aL;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lA:{"^":"aL;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lB:{"^":"aL;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lC:{"^":"aL;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lD:{"^":"aL;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lE:{"^":"aL;",
gl:function(a){return a.length},
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lF:{"^":"aL;",
gl:function(a){return a.length},
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ew:{"^":"cL+t;"},
ex:{"^":"ew+c9;"},
ey:{"^":"cL+t;"},
ez:{"^":"ey+c9;"}}],["","",,P,{"^":"",
ix:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jV()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b3(new P.iz(z),1)).observe(y,{childList:true})
return new P.iy(z,y,x)}else if(self.setImmediate!=null)return P.jW()
return P.jX()},
m9:[function(a){self.scheduleImmediate(H.b3(new P.iA(H.b(a,{func:1,ret:-1})),0))},"$1","jV",4,0,9],
ma:[function(a){self.setImmediate(H.b3(new P.iB(H.b(a,{func:1,ret:-1})),0))},"$1","jW",4,0,9],
mb:[function(a){H.b(a,{func:1,ret:-1})
P.jv(0,a)},"$1","jX",4,0,9],
e0:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aV]})
z=C.h.Z(a.a,1000)
return P.jw(z<0?0:z,b)},
jR:function(a,b){if(H.bW(a,{func:1,args:[P.a,P.ao]}))return b.ha(a,null,P.a,P.ao)
if(H.bW(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.k(P.c1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jQ:function(){var z,y
for(;z=$.b0,z!=null;){$.bF=null
y=z.b
$.b0=y
if(y==null)$.bE=null
z.a.$0()}},
mj:[function(){$.cZ=!0
try{P.jQ()}finally{$.bF=null
$.cZ=!1
if($.b0!=null)$.$get$cV().$1(P.eN())}},"$0","eN",0,0,3],
eI:function(a){var z=new P.eq(H.b(a,{func:1,ret:-1}))
if($.b0==null){$.bE=z
$.b0=z
if(!$.cZ)$.$get$cV().$1(P.eN())}else{$.bE.b=z
$.bE=z}},
jU:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b0
if(z==null){P.eI(a)
$.bF=$.bE
return}y=new P.eq(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.b0=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
km:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.P
if(C.i===y){P.cm(null,null,C.i,a)
return}y.toString
P.cm(null,null,y,H.b(y.cP(a),z))},
hZ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aV]}
H.b(b,z)
y=$.P
if(y===C.i){y.toString
return P.e0(a,b)}x=y.cQ(b,P.aV)
$.P.toString
return P.e0(a,H.b(x,z))},
cl:function(a,b,c,d,e){var z={}
z.a=d
P.jU(new P.jS(z,e))},
eG:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
eH:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
jT:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cm:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cP(d):c.fC(d,-1)
P.eI(d)},
iz:{"^":"u:21;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iy:{"^":"u:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iA:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iB:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eF:{"^":"a;a,0b,c",
dT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b3(new P.jy(this,b),0),a)
else throw H.k(P.ad("`setTimeout()` not found."))},
dU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b3(new P.jx(this,a,Date.now(),b),0),a)
else throw H.k(P.ad("Periodic timer."))},
$isaV:1,
t:{
jv:function(a,b){var z=new P.eF(!0,0)
z.dT(a,b)
return z},
jw:function(a,b){var z=new P.eF(!1,0)
z.dU(a,b)
return z}}},
jy:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jx:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.dL(w,x)}z.c=y
this.d.$1(z)}},
aZ:{"^":"a;0a,b,c,d,e,$ti",
fU:function(a){if(this.c!==6)return!0
return this.b.b.cb(H.b(this.d,{func:1,ret:P.a4,args:[P.a]}),a.a,P.a4,P.a)},
fO:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bW(z,{func:1,args:[P.a,P.ao]}))return H.d3(w.hf(z,a.a,a.b,null,y,P.ao),x)
else return H.d3(w.cb(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aG:{"^":"a;cK:a<,b,0eW:c<,$ti",
dz:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jR(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aG(0,$.P,[c])
w=b==null?1:3
this.cr(new P.aZ(x,w,a,b,[z,c]))
return x},
hj:function(a,b){return this.dz(a,null,b)},
cr:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaG")
z=y.a
if(z<4){y.cr(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cm(null,null,z,H.b(new P.iP(this,a),{func:1,ret:-1}))}},
cF:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaG")
y=u.a
if(y<4){u.cF(a)
return}this.a=y
this.c=u.c}z.a=this.b5(a)
y=this.b
y.toString
P.cm(null,null,y,H.b(new P.iU(z,this),{func:1,ret:-1}))}},
bG:function(){var z=H.i(this.c,"$isaZ")
this.c=null
return this.b5(z)},
b5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cv:function(a){var z,y,x,w
z=H.y(this,0)
H.d3(a,{futureOr:1,type:z})
y=this.$ti
x=H.b2(a,"$isbd",y,"$asbd")
if(x){z=H.b2(a,"$isaG",y,null)
if(z)P.es(a,this)
else P.iQ(a,this)}else{w=this.bG()
H.B(a,z)
this.a=4
this.c=a
P.bC(this,w)}},
bu:[function(a,b){var z
H.i(b,"$isao")
z=this.bG()
this.a=8
this.c=new P.ae(a,b)
P.bC(this,z)},function(a){return this.bu(a,null)},"hp","$2","$1","ge2",4,2,35],
$isbd:1,
t:{
iQ:function(a,b){var z,y,x
b.a=1
try{a.dz(new P.iR(b),new P.iS(b),null)}catch(x){z=H.aQ(x)
y=H.b5(x)
P.km(new P.iT(b,z,y))}},
es:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaG")
if(z>=4){y=b.bG()
b.a=a.a
b.c=a.c
P.bC(b,y)}else{y=H.i(b.c,"$isaZ")
b.a=2
b.c=a
a.cF(y)}},
bC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isae")
y=y.b
u=v.a
t=v.b
y.toString
P.cl(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bC(z.a,b)}y=z.a
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
if(p){H.i(r,"$isae")
y=y.b
u=r.a
t=r.b
y.toString
P.cl(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.iX(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iW(x,b,r).$0()}else if((y&2)!==0)new P.iV(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.L(y).$isbd){if(y.a>=4){n=H.i(t.c,"$isaZ")
t.c=null
b=t.b5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.es(y,t)
return}}m=b.b
n=H.i(m.c,"$isaZ")
m.c=null
b=m.b5(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.i(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
iP:{"^":"u:2;a,b",
$0:function(){P.bC(this.a,this.b)}},
iU:{"^":"u:2;a,b",
$0:function(){P.bC(this.b,this.a.a)}},
iR:{"^":"u:21;a",
$1:function(a){var z=this.a
z.a=0
z.cv(a)}},
iS:{"^":"u:31;a",
$2:function(a,b){this.a.bu(a,H.i(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
iT:{"^":"u:2;a,b,c",
$0:function(){this.a.bu(this.b,this.c)}},
iX:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dw(H.b(w.d,{func:1}),null)}catch(v){y=H.aQ(v)
x=H.b5(v)
if(this.d){w=H.i(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.L(z).$isbd){if(z instanceof P.aG&&z.gcK()>=4){if(z.gcK()===8){w=this.b
w.b=H.i(z.geW(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hj(new P.iY(t),null)
w.a=!1}}},
iY:{"^":"u:29;a",
$1:function(a){return this.a}},
iW:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cb(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aQ(t)
y=H.b5(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
iV:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isae")
w=this.c
if(w.fU(z)&&w.e!=null){v=this.b
v.b=w.fO(z)
v.a=!1}}catch(u){y=H.aQ(u)
x=H.b5(u)
w=H.i(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
eq:{"^":"a;a,0b"},
cQ:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aG(0,$.P,[P.I])
z.a=0
this.fT(new P.hL(z,this),!0,new P.hM(z,y),y.ge2())
return y}},
hL:{"^":"u;a,b",
$1:function(a){H.B(a,H.aI(this.b,"cQ",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aI(this.b,"cQ",0)]}}},
hM:{"^":"u:2;a,b",
$0:function(){this.b.cv(this.a.a)}},
dU:{"^":"a;$ti"},
aV:{"^":"a;"},
ae:{"^":"a;a,b",
j:function(a){return H.j(this.a)},
$isZ:1},
jD:{"^":"a;",$ism8:1},
jS:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dM()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.j(0)
throw x}},
jh:{"^":"jD;",
hg:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.P){a.$0()
return}P.eG(null,null,this,a,-1)}catch(x){z=H.aQ(x)
y=H.b5(x)
P.cl(null,null,this,z,H.i(y,"$isao"))}},
hh:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.P){a.$1(b)
return}P.eH(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.b5(x)
P.cl(null,null,this,z,H.i(y,"$isao"))}},
fC:function(a,b){return new P.jj(this,H.b(a,{func:1,ret:b}),b)},
cP:function(a){return new P.ji(this,H.b(a,{func:1,ret:-1}))},
cQ:function(a,b){return new P.jk(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dw:function(a,b){H.b(a,{func:1,ret:b})
if($.P===C.i)return a.$0()
return P.eG(null,null,this,a,b)},
cb:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.P===C.i)return a.$1(b)
return P.eH(null,null,this,a,b,c,d)},
hf:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.P===C.i)return a.$2(b,c)
return P.jT(null,null,this,a,b,c,d,e,f)},
ha:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jj:{"^":"u;a,b,c",
$0:function(){return this.a.dw(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ji:{"^":"u:3;a,b",
$0:function(){return this.a.hg(this.b)}},
jk:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hh(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fQ:function(a,b,c){H.bZ(a)
return H.v(H.k3(a,new H.cF(0,0,[b,c])),"$isdG",[b,c],"$asdG")},
fP:function(a,b){return new H.cF(0,0,[a,b])},
fR:function(a,b,c,d){return new P.j3(0,0,[d])},
fE:function(a,b,c){var z,y
if(P.d_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.jP(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dV(b,H.kf(z,"$isc"),", ")+c
return y.charCodeAt(0)==0?y:y},
cB:function(a,b,c){var z,y,x
if(P.d_(a))return b+"..."+c
z=new P.bR(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.dV(x.gay(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
d_:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
jP:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gW(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.E();t=s,s=r){r=z.gP(z);++x
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
dI:function(a){var z,y,x
z={}
if(P.d_(a))return"{...}"
y=new P.bR("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.f1(a,new P.fX(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
j3:{"^":"iZ;a,0b,0c,0d,0e,0f,r,$ti",
gW:function(a){return P.ev(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cX()
this.b=z}return this.ct(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cX()
this.c=y}return this.ct(y,b)}else return this.dW(0,b)},
dW:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cX()
this.d=z}y=this.cw(b)
x=z[y]
if(x==null)z[y]=[this.bt(b)]
else{if(this.cC(x,b)>=0)return!1
x.push(this.bt(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cG(this.c,b)
else return this.eP(0,b)},
eP:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ea(z,b)
x=this.cC(y,b)
if(x<0)return!1
this.cM(y.splice(x,1)[0])
return!0},
ct:function(a,b){H.B(b,H.y(this,0))
if(H.i(a[b],"$iscW")!=null)return!1
a[b]=this.bt(b)
return!0},
cG:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$iscW")
if(z==null)return!1
this.cM(z)
delete a[b]
return!0},
cu:function(){this.r=this.r+1&67108863},
bt:function(a){var z,y
z=new P.cW(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cu()
return z},
cM:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cu()},
cw:function(a){return J.aJ(a)&0x3ffffff},
ea:function(a,b){return a[this.cw(b)]},
cC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
t:{
cX:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cW:{"^":"a;a,0b,0c"},
j4:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
t:{
ev:function(a,b,c){var z=new P.j4(a,b,[c])
z.c=a.e
return z}}},
iZ:{"^":"hB;"},
cH:{"^":"j5;",$isc:1,$ise:1},
t:{"^":"a;$ti",
gW:function(a){return new H.fS(a,this.gl(a),0,[H.bH(this,a,"t",0)])},
D:function(a,b){return this.k(a,b)},
hm:function(a,b){var z,y,x
z=H.d([],[H.bH(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.a5(z,y,this.k(a,y));++y}return z},
hl:function(a){return this.hm(a,!0)},
j:function(a){return P.cB(a,"[","]")}},
fW:{"^":"ab;"},
fX:{"^":"u:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ab:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bH(this,a,"ab",0),H.bH(this,a,"ab",1)]})
for(z=J.c0(this.gas(a));z.E();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b7(this.gas(a))},
j:function(a){return P.dI(a)},
$isa2:1},
hC:{"^":"a;$ti",
j:function(a){return P.cB(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dc("index"))
if(b<0)H.r(P.bp(b,0,null,"index",null))
for(z=P.ev(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.k(P.N(b,this,"index",null,y))},
$isc:1},
hB:{"^":"hC;"},
j5:{"^":"a+t;"}}],["","",,P,{"^":"",
fu:function(a){var z=J.L(a)
if(!!z.$isu)return z.j(a)
return"Instance of '"+H.aT(a)+"'"},
fT:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fG(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a5(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
fU:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gW(a);x.E();)C.a.h(y,H.B(x.gP(x),c))
if(b)return y
return H.v(J.bh(y),"$ise",z,"$ase")},
c8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fu(a)},
p:function(a){return new P.er(a)},
d9:function(a){H.kk(a)},
a4:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.h.cJ(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fk(H.hq(this))
y=P.bI(H.ho(this))
x=P.bI(H.hk(this))
w=P.bI(H.hl(this))
v=P.bI(H.hn(this))
u=P.bI(H.hp(this))
t=P.fl(H.hm(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fk:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bI:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"S;"},
"+double":0,
bb:{"^":"a;a",
i:function(a,b){return new P.bb(C.h.U(this.a*b))},
ac:function(a,b){return C.h.ac(this.a,H.i(b,"$isbb").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fq()
y=this.a
if(y<0)return"-"+new P.bb(0-y).j(0)
x=z.$1(C.h.Z(y,6e7)%60)
w=z.$1(C.h.Z(y,1e6)%60)
v=new P.fp().$1(y%1e6)
return""+C.h.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
dv:function(a,b,c,d,e,f){return new P.bb(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fp:{"^":"u:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fq:{"^":"u:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
dM:{"^":"Z;",
j:function(a){return"Throw of null."}},
aR:{"^":"Z;a,b,c,d",
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbw()+y+x
if(!this.a)return w
v=this.gbv()
u=P.c8(this.b)
return w+v+": "+H.j(u)},
t:{
c1:function(a,b,c){return new P.aR(!0,a,b,c)},
dc:function(a){return new P.aR(!1,null,a,"Must not be null")}}},
dQ:{"^":"aR;e,f,a,b,c,d",
gbw:function(){return"RangeError"},
gbv:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cM:function(a,b,c){return new P.dQ(null,null,!0,a,b,"Value not in range")},
bp:function(a,b,c,d,e){return new P.dQ(b,c,!0,a,d,"Invalid value")}}},
fD:{"^":"aR;e,l:f>,a,b,c,d",
gbw:function(){return"RangeError"},
gbv:function(){if(J.eZ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
N:function(a,b,c,d,e){var z=H.X(e!=null?e:J.b7(b))
return new P.fD(b,z,!0,a,c,"Index out of range")}}},
ic:{"^":"Z;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
ad:function(a){return new P.ic(a)}}},
ia:{"^":"Z;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ek:function(a){return new P.ia(a)}}},
hI:{"^":"Z;a",
j:function(a){return"Bad state: "+this.a}},
ff:{"^":"Z;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c8(z))+"."},
t:{
b9:function(a){return new P.ff(a)}}},
hf:{"^":"a;",
j:function(a){return"Out of Memory"},
$isZ:1},
dT:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isZ:1},
fj:{"^":"Z;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
er:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
I:{"^":"S;"},
"+int":0,
c:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gW(this)
for(y=0;z.E();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dc("index"))
if(b<0)H.r(P.bp(b,0,null,"index",null))
for(z=this.gW(this),y=0;z.E();){x=z.gP(z)
if(b===y)return x;++y}throw H.k(P.N(b,this,"index",null,y))},
j:function(a){return P.fE(this,"(",")")}},
cC:{"^":"a;$ti"},
e:{"^":"a;$ti",$isc:1},
"+List":0,
a2:{"^":"a;$ti"},
H:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bo(this)},
j:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.j(this)}},
ao:{"^":"a;"},
o:{"^":"a;",$ishg:1},
"+String":0,
bR:{"^":"a;ay:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dV:function(a,b,c){var z=J.c0(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gP(z))
while(z.E())}else{a+=H.j(z.gP(z))
for(;z.E();)a=a+c+H.j(z.gP(z))}return a}}}}],["","",,W,{"^":"",
di:function(a,b){var z=document.createElement("canvas")
return z},
fs:function(a){H.i(a,"$isa1")
return"wheel"},
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eu:function(a,b,c,d){var z,y
z=W.ck(W.ck(W.ck(W.ck(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eK:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.i)return a
return z.cQ(a,b)},
bg:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kz:{"^":"cO;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kA:{"^":"n;0l:length=","%":"AccessibleNodeList"},
kB:{"^":"bg;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kC:{"^":"bg;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
f6:{"^":"n;","%":";Blob"},
cw:{"^":"bg;",
cf:function(a,b,c){var z=a.getContext(b,P.jZ(c,null))
return z},
$iscw:1,
"%":"HTMLCanvasElement"},
kI:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kK:{"^":"c6;0l:length=","%":"CSSPerspective"},
kL:{"^":"cy;0n:x=,0p:y=","%":"CSSPositionValue"},
kM:{"^":"c6;0n:x=,0p:y=","%":"CSSRotation"},
ba:{"^":"n;",$isba:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kN:{"^":"c6;0n:x=,0p:y=","%":"CSSScale"},
fh:{"^":"iF;0l:length=",
dE:function(a,b){var z=a.getPropertyValue(this.cs(a,b))
return z==null?"":z},
cs:function(a,b){var z,y
z=$.$get$dn()
y=z[b]
if(typeof y==="string")return y
y=this.f4(a,b)
z[b]=y
return y},
f4:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fm()+b
if(z in a)return z
return b},
eX:function(a,b,c,d){a.setProperty(b,c,d)},
gbO:function(a){return a.bottom},
gah:function(a){return a.height},
gaI:function(a){return a.left},
gaW:function(a){return a.right},
gaZ:function(a){return a.top},
gai:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fi:{"^":"a;",
gaI:function(a){return this.dE(a,"left")}},
cy:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c6:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kO:{"^":"cy;0l:length=","%":"CSSTransformValue"},
kP:{"^":"c6;0n:x=,0p:y=","%":"CSSTranslation"},
kQ:{"^":"cy;0l:length=","%":"CSSUnparsedValue"},
kR:{"^":"n;0l:length=","%":"DataTransferItemList"},
kS:{"^":"n;0n:x=,0p:y=","%":"DeviceAcceleration"},
kT:{"^":"n;",
j:function(a){return String(a)},
"%":"DOMException"},
kU:{"^":"fn;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fn:{"^":"n;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
kV:{"^":"iH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a7,P.S]]},
$ast:function(){return[[P.a7,P.S]]},
$isc:1,
$asc:function(){return[[P.a7,P.S]]},
$ise:1,
$ase:function(){return[[P.a7,P.S]]},
$asx:function(){return[[P.a7,P.S]]},
"%":"ClientRectList|DOMRectList"},
fo:{"^":"n;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gai(a))+" x "+H.j(this.gah(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b2(b,"$isa7",[P.S],"$asa7")
if(!z)return!1
z=J.bY(b)
return a.left===z.gaI(b)&&a.top===z.gaZ(b)&&this.gai(a)===z.gai(b)&&this.gah(a)===z.gah(b)},
gS:function(a){return W.eu(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF)},
gbO:function(a){return a.bottom},
gah:function(a){return a.height},
gaI:function(a){return a.left},
gaW:function(a){return a.right},
gaZ:function(a){return a.top},
gai:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa7:1,
$asa7:function(){return[P.S]},
"%":";DOMRectReadOnly"},
kW:{"^":"iJ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.o]},
$ast:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"DOMStringList"},
kX:{"^":"n;0l:length=","%":"DOMTokenList"},
iE:{"^":"cH;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.i(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var z=this.hl(this)
return new J.am(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$asc:function(){return[W.a0]},
$ase:function(){return[W.a0]}},
a0:{"^":"J;",
gcT:function(a){return new W.iE(a,a.children)},
gb9:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ac()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ac()
if(w<0)w=-w*0
return new P.a7(z,y,x,w,[P.S])},
j:function(a){return a.localName},
$isa0:1,
"%":";Element"},
aa:{"^":"n;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a1:{"^":"n;",
cN:["dH",function(a,b,c,d){H.b(c,{func:1,args:[W.aa]})
if(c!=null)this.dX(a,b,c,!1)}],
dX:function(a,b,c,d){return a.addEventListener(b,H.b3(H.b(c,{func:1,args:[W.aa]}),1),!1)},
$isa1:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eA|eB|eD|eE"},
bc:{"^":"f6;",$isbc:1,"%":"File"},
lf:{"^":"iO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$asx:function(){return[W.bc]},
"%":"FileList"},
lg:{"^":"a1;0l:length=","%":"FileWriter"},
lj:{"^":"bg;0l:length=","%":"HTMLFormElement"},
be:{"^":"n;",$isbe:1,"%":"Gamepad"},
lk:{"^":"cO;0n:x=,0p:y=","%":"Gyroscope"},
ll:{"^":"n;0l:length=","%":"History"},
lm:{"^":"j0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bi:{"^":"cR;",$isbi:1,"%":"KeyboardEvent"},
lr:{"^":"n;",
j:function(a){return String(a)},
"%":"Location"},
ls:{"^":"cO;0n:x=,0p:y=","%":"Magnetometer"},
lu:{"^":"n;0l:length=","%":"MediaList"},
lv:{"^":"a1;",
cN:function(a,b,c,d){H.b(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.dH(a,b,c,!1)},
"%":"MessagePort"},
lw:{"^":"j6;",
k:function(a,b){return P.aH(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gas:function(a){var z=H.d([],[P.o])
this.J(a,new W.h7(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIInputMap"},
h7:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lx:{"^":"j7;",
k:function(a,b){return P.aH(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gas:function(a){var z=H.d([],[P.o])
this.J(a,new W.h8(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
h8:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"n;",$isbj:1,"%":"MimeType"},
ly:{"^":"j9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$asx:function(){return[W.bj]},
"%":"MimeTypeArray"},
au:{"^":"cR;",$isau:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iD:{"^":"cH;a",
gW:function(a){var z=this.a.childNodes
return new W.dx(z,z.length,-1,[H.bH(C.F,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ast:function(){return[W.J]},
$asc:function(){return[W.J]},
$ase:function(){return[W.J]}},
J:{"^":"a1;",
j:function(a){var z=a.nodeValue
return z==null?this.dI(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hc:{"^":"jb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bl:{"^":"n;0l:length=",$isbl:1,"%":"Plugin"},
lJ:{"^":"jf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$ast:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asx:function(){return[W.bl]},
"%":"PluginArray"},
lO:{"^":"jl;",
k:function(a,b){return P.aH(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gas:function(a){var z=H.d([],[P.o])
this.J(a,new W.hy(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hy:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lP:{"^":"bg;0l:length=","%":"HTMLSelectElement"},
cO:{"^":"a1;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bq:{"^":"a1;",$isbq:1,"%":"SourceBuffer"},
lQ:{"^":"eB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"SourceBufferList"},
br:{"^":"n;",$isbr:1,"%":"SpeechGrammar"},
lR:{"^":"jn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$ast:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asx:function(){return[W.br]},
"%":"SpeechGrammarList"},
bs:{"^":"n;0l:length=",$isbs:1,"%":"SpeechRecognitionResult"},
lT:{"^":"jq;",
k:function(a,b){return a.getItem(H.T(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gas:function(a){var z=H.d([],[P.o])
this.J(a,new W.hK(z))
return z},
gl:function(a){return a.length},
$asab:function(){return[P.o,P.o]},
$isa2:1,
$asa2:function(){return[P.o,P.o]},
"%":"Storage"},
hK:{"^":"u:28;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bt:{"^":"n;",$isbt:1,"%":"CSSStyleSheet|StyleSheet"},
bu:{"^":"bg;",$isbu:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bv:{"^":"a1;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a1;",$isbw:1,"%":"TextTrackCue|VTTCue"},
lY:{"^":"ju;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asx:function(){return[W.bw]},
"%":"TextTrackCueList"},
lZ:{"^":"eE;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$asx:function(){return[W.bv]},
"%":"TextTrackList"},
m_:{"^":"n;0l:length=","%":"TimeRanges"},
bx:{"^":"n;",$isbx:1,"%":"Touch"},
aW:{"^":"cR;",$isaW:1,"%":"TouchEvent"},
m0:{"^":"jA;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isc:1,
$asc:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$asx:function(){return[W.bx]},
"%":"TouchList"},
m1:{"^":"n;0l:length=","%":"TrackDefaultList"},
cR:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m4:{"^":"n;",
j:function(a){return String(a)},
"%":"URL"},
m6:{"^":"n;0n:x=","%":"VRStageBoundsPoint"},
m7:{"^":"a1;0l:length=","%":"VideoTrackList"},
bB:{"^":"au;",
gfJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.k(P.ad("deltaY is not supported"))},
gfI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.k(P.ad("deltaX is not supported"))},
$isbB:1,
"%":"WheelEvent"},
iw:{"^":"a1;",
eT:function(a,b){return a.requestAnimationFrame(H.b3(H.b(b,{func:1,ret:-1,args:[P.S]}),1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mc:{"^":"jF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.ba]},
$ast:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$ise:1,
$ase:function(){return[W.ba]},
$asx:function(){return[W.ba]},
"%":"CSSRuleList"},
md:{"^":"fo;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b2(b,"$isa7",[P.S],"$asa7")
if(!z)return!1
z=J.bY(b)
return a.left===z.gaI(b)&&a.top===z.gaZ(b)&&a.width===z.gai(b)&&a.height===z.gah(b)},
gS:function(a){return W.eu(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gah:function(a){return a.height},
gai:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mf:{"^":"jH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.be]},
$ast:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$asx:function(){return[W.be]},
"%":"GamepadList"},
mg:{"^":"jJ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mh:{"^":"jL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asx:function(){return[W.bs]},
"%":"SpeechRecognitionResultList"},
mi:{"^":"jN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asx:function(){return[W.bt]},
"%":"StyleSheetList"},
iK:{"^":"cQ;a,b,c,$ti",
fT:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
me:{"^":"iK;a,b,c,$ti"},
iL:{"^":"dU;a,b,c,d,e,$ti",
f8:function(){var z=this.d
if(z!=null&&this.a<=0)J.f0(this.b,this.c,z,!1)},
t:{
a_:function(a,b,c,d,e){var z=c==null?null:W.eK(new W.iM(c),W.aa)
z=new W.iL(0,a,b,z,!1,[e])
z.f8()
return z}}},
iM:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.i(a,"$isaa"))}},
x:{"^":"a;$ti",
gW:function(a){return new W.dx(a,this.gl(a),-1,[H.bH(this,a,"x",0)])}},
dx:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f_(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
iF:{"^":"n+fi;"},
iG:{"^":"n+t;"},
iH:{"^":"iG+x;"},
iI:{"^":"n+t;"},
iJ:{"^":"iI+x;"},
iN:{"^":"n+t;"},
iO:{"^":"iN+x;"},
j_:{"^":"n+t;"},
j0:{"^":"j_+x;"},
j6:{"^":"n+ab;"},
j7:{"^":"n+ab;"},
j8:{"^":"n+t;"},
j9:{"^":"j8+x;"},
ja:{"^":"n+t;"},
jb:{"^":"ja+x;"},
je:{"^":"n+t;"},
jf:{"^":"je+x;"},
jl:{"^":"n+ab;"},
eA:{"^":"a1+t;"},
eB:{"^":"eA+x;"},
jm:{"^":"n+t;"},
jn:{"^":"jm+x;"},
jq:{"^":"n+ab;"},
jt:{"^":"n+t;"},
ju:{"^":"jt+x;"},
eD:{"^":"a1+t;"},
eE:{"^":"eD+x;"},
jz:{"^":"n+t;"},
jA:{"^":"jz+x;"},
jE:{"^":"n+t;"},
jF:{"^":"jE+x;"},
jG:{"^":"n+t;"},
jH:{"^":"jG+x;"},
jI:{"^":"n+t;"},
jJ:{"^":"jI+x;"},
jK:{"^":"n+t;"},
jL:{"^":"jK+x;"},
jM:{"^":"n+t;"},
jN:{"^":"jM+x;"}}],["","",,P,{"^":"",
aH:function(a){var z,y,x,w,v
if(a==null)return
z=P.fP(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.T(y[w])
z.a5(0,v,a[v])}return z},
jZ:function(a,b){var z={}
a.J(0,new P.k_(z))
return z},
du:function(){var z=$.dt
if(z==null){z=J.cr(window.navigator.userAgent,"Opera",0)
$.dt=z}return z},
fm:function(){var z,y
z=$.dq
if(z!=null)return z
y=$.dr
if(y==null){y=J.cr(window.navigator.userAgent,"Firefox",0)
$.dr=y}if(y)z="-moz-"
else{y=$.ds
if(y==null){y=!P.du()&&J.cr(window.navigator.userAgent,"Trident/",0)
$.ds=y}if(y)z="-ms-"
else z=P.du()?"-o-":"-webkit-"}$.dq=z
return z},
k_:{"^":"u:16;a",
$2:function(a,b){this.a[a]=b}},
fx:{"^":"cH;a,b",
gby:function(){var z,y,x
z=this.b
y=H.aI(z,"t",0)
x=W.a0
return new H.fY(new H.iu(z,H.b(new P.fy(),{func:1,ret:P.a4,args:[y]}),[y]),H.b(new P.fz(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b7(this.gby().a)},
k:function(a,b){var z=this.gby()
return z.b.$1(J.db(z.a,b))},
gW:function(a){var z=P.fU(this.gby(),!1,W.a0)
return new J.am(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$asc:function(){return[W.a0]},
$ase:function(){return[W.a0]}},
fy:{"^":"u:27;",
$1:function(a){return!!J.L(H.i(a,"$isJ")).$isa0}},
fz:{"^":"u:25;",
$1:function(a){return H.f(H.i(a,"$isJ"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
et:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bm:{"^":"a;n:a>,p:b>,$ti",
j:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b2(b,"$isbm",[P.S],null)
if(!z)return!1
z=this.a
y=J.bY(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.aJ(this.a)
y=J.aJ(this.b)
return P.et(P.bD(P.bD(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.y(this,0)
z=H.B(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bm(z,H.B(x*b,y),this.$ti)}},
jg:{"^":"a;$ti",
gaW:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.B(z+this.c,H.y(this,0))},
gbO:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.B(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b2(b,"$isa7",[P.S],"$asa7")
if(!z)return!1
z=this.a
y=J.bY(b)
x=y.gaI(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaZ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaW(b)){if(typeof x!=="number")return x.F()
z=H.B(x+this.d,w)===y.gbO(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aJ(z)
x=this.b
w=J.aJ(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.B(x+this.d,v)
return P.et(P.bD(P.bD(P.bD(P.bD(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cV:function(a,b){var z,y
H.v(b,"$isbm",[P.S],"$asbm")
z=b.a
y=this.a
if(typeof z!=="number")return z.dD()
if(typeof y!=="number")return H.q(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dD()
if(typeof y!=="number")return H.q(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a7:{"^":"jg;aI:a>,aZ:b>,ai:c>,ah:d>,$ti"}}],["","",,P,{"^":"",kY:{"^":"R;0n:x=,0p:y=","%":"SVGFEBlendElement"},kZ:{"^":"R;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},l_:{"^":"R;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},l0:{"^":"R;0n:x=,0p:y=","%":"SVGFECompositeElement"},l1:{"^":"R;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},l2:{"^":"R;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},l3:{"^":"R;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},l4:{"^":"R;0n:x=,0p:y=","%":"SVGFEFloodElement"},l5:{"^":"R;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},l6:{"^":"R;0n:x=,0p:y=","%":"SVGFEImageElement"},l7:{"^":"R;0n:x=,0p:y=","%":"SVGFEMergeElement"},l8:{"^":"R;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},l9:{"^":"R;0n:x=,0p:y=","%":"SVGFEOffsetElement"},la:{"^":"R;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lb:{"^":"R;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lc:{"^":"R;0n:x=,0p:y=","%":"SVGFESpotLightElement"},ld:{"^":"R;0n:x=,0p:y=","%":"SVGFETileElement"},le:{"^":"R;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lh:{"^":"R;0n:x=,0p:y=","%":"SVGFilterElement"},li:{"^":"bf;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fB:{"^":"bf;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bf:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ln:{"^":"bf;0n:x=,0p:y=","%":"SVGImageElement"},bP:{"^":"n;",$isbP:1,"%":"SVGLength"},lq:{"^":"j2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$asx:function(){return[P.bP]},
"%":"SVGLengthList"},lt:{"^":"R;0n:x=,0p:y=","%":"SVGMaskElement"},bQ:{"^":"n;",$isbQ:1,"%":"SVGNumber"},lG:{"^":"jd;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bQ]},
$isc:1,
$asc:function(){return[P.bQ]},
$ise:1,
$ase:function(){return[P.bQ]},
$asx:function(){return[P.bQ]},
"%":"SVGNumberList"},lI:{"^":"R;0n:x=,0p:y=","%":"SVGPatternElement"},lK:{"^":"n;0n:x=,0p:y=","%":"SVGPoint"},lL:{"^":"n;0l:length=","%":"SVGPointList"},lM:{"^":"n;0n:x=,0p:y=","%":"SVGRect"},lN:{"^":"fB;0n:x=,0p:y=","%":"SVGRectElement"},lU:{"^":"js;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a0;",
gcT:function(a){return new P.fx(a,new W.iD(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lV:{"^":"bf;0n:x=,0p:y=","%":"SVGSVGElement"},hN:{"^":"bf;","%":"SVGTextPathElement;SVGTextContentElement"},lX:{"^":"hN;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bT:{"^":"n;",$isbT:1,"%":"SVGTransform"},m2:{"^":"jC;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bT]},
$isc:1,
$asc:function(){return[P.bT]},
$ise:1,
$ase:function(){return[P.bT]},
$asx:function(){return[P.bT]},
"%":"SVGTransformList"},m5:{"^":"bf;0n:x=,0p:y=","%":"SVGUseElement"},j1:{"^":"n+t;"},j2:{"^":"j1+x;"},jc:{"^":"n+t;"},jd:{"^":"jc+x;"},jr:{"^":"n+t;"},js:{"^":"jr+x;"},jB:{"^":"n+t;"},jC:{"^":"jB+x;"}}],["","",,P,{"^":"",kD:{"^":"n;0l:length=","%":"AudioBuffer"},kE:{"^":"iC;",
k:function(a,b){return P.aH(a.get(H.T(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gas:function(a){var z=H.d([],[P.o])
this.J(a,new P.f3(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"AudioParamMap"},f3:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},kF:{"^":"a1;0l:length=","%":"AudioTrackList"},f5:{"^":"a1;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lH:{"^":"f5;0l:length=","%":"OfflineAudioContext"},iC:{"^":"n+ab;"}}],["","",,P,{"^":"",cN:{"^":"n;",
hi:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
$iscN:1,
"%":"WebGLRenderingContext"},i8:{"^":"n;",$isi8:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lS:{"^":"jp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.N(b,a,null,null,null))
return P.aH(a.item(b))},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a2,,,]]},
$isc:1,
$asc:function(){return[[P.a2,,,]]},
$ise:1,
$ase:function(){return[[P.a2,,,]]},
$asx:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},jo:{"^":"n+t;"},jp:{"^":"jo+x;"}}],["","",,O,{"^":"",a9:{"^":"a;0a,0b,0c,0d,$ti",
b1:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cg:function(a,b,c){var z=H.aI(this,"a9",0)
H.b(b,{func:1,ret:P.a4,args:[[P.c,z]]})
z={func:1,ret:-1,args:[P.I,[P.c,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
av:function(a,b){return this.cg(a,null,b)},
bE:function(a){var z
H.v(a,"$isc",[H.aI(this,"a9",0)],"$asc")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cn:function(a,b){var z
H.v(b,"$isc",[H.aI(this,"a9",0)],"$asc")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var z=this.a
return new J.am(z,z.length,0,[H.y(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aI(this,"a9",0)
H.B(b,z)
z=[z]
if(this.bE(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cn(x,H.d([b],z))}},
bK:function(a,b){var z,y
H.v(b,"$isc",[H.aI(this,"a9",0)],"$asc")
if(this.bE(b)){z=this.a
y=z.length
C.a.bK(z,b)
this.cn(y,b)}},
$isc:1,
t:{
c4:function(a){var z=new O.a9([a])
z.b1(a)
return z}}},cJ:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
dP:function(a){var z=this.b
if(!(z==null))z.w(a)},
aw:function(){return this.dP(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gc1(z)
else return V.aK()},
bn:function(a){var z=this.a
if(a==null)C.a.h(z,V.aK())
else C.a.h(z,a)
this.aw()},
aU:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",cs:{"^":"a;"},az:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbq:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdu(),{func:1,ret:-1,args:[D.l]})
C.a.L(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.b(this.gdu(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.D("shape",z,this.c,this,[F.dR])
w.b=!0
this.aJ(w)}},
ab:function(a,b){var z
for(z=this.y.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ab(0,b)},
a3:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gT(z))
z.aw()
a.c8(this.f)
z=a.dy
y=(z&&C.a).gc1(z)
if(y!=null&&this.d!=null)y.dv(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a3(a)
a.c7()
a.dx.aU()},
gq:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aJ:function(a){var z=this.z
if(!(z==null))z.w(a)},
a0:function(){return this.aJ(null)},
h0:[function(a){H.i(a,"$isl")
this.e=null
this.aJ(a)},function(){return this.h0(null)},"i5","$1","$0","gdu",0,2,0],
fZ:[function(a){this.aJ(H.i(a,"$isl"))},function(){return this.fZ(null)},"i3","$1","$0","gdt",0,2,0],
i2:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isc",[E.az],"$asc")
for(z=b.length,y=this.gdt(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aA()
t.a=H.d([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a0()},"$2","gfY",8,0,7],
i4:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isc",[E.az],"$asc")
for(z=b.length,y=this.gdt(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aA()
t.a=H.d([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.L(t.a,y)}}this.a0()},"$2","gh_",8,0,7],
$isav:1,
t:{
dw:function(a,b,c,d,e,f){var z,y
z=new E.az()
z.a=d
z.b=!0
y=O.c4(E.az)
z.y=y
y.av(z.gfY(),z.gh_())
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
dN:function(a,b){var z,y,x,w,v
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
z=new O.cJ()
y=[V.ag]
z.a=H.d([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hv(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cJ()
z.a=H.d([],y)
v=z.gq()
v.toString
x=H.b(new E.hw(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cJ()
z.a=H.d([],y)
y=z.gq()
y.toString
w=H.b(new E.hx(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.bS])
this.dy=z
C.a.h(z,null)
this.fr=new H.cF(0,0,[P.o,A.cP])},
gh9:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.i(0,y.gT(y))
this.z=y
z=y}return z},
c8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc1(z):a;(z&&C.a).h(z,y)},
c7:function(){var z=this.dy
if(z.length>1)z.pop()},
cO:function(a){var z=a.b
if(z.length===0)throw H.k(P.p("May not cache a shader with no name."))
if(this.fr.fG(0,z))throw H.k(P.p('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a5(0,z,a)},
t:{
hu:function(a,b){var z=new E.ht(a,b)
z.dN(a,b)
return z}}},hv:{"^":"u:11;a",
$1:function(a){var z
H.i(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hw:{"^":"u:11;a",
$1:function(a){var z
H.i(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hx:{"^":"u:11;a",
$1:function(a){var z
H.i(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},hW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
dR:[function(a){var z
H.i(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hd()},function(){return this.dR(null)},"dQ","$1","$0","gco",0,2,0],
gfN:function(){var z,y,x
z=Date.now()
y=C.h.Z(P.dv(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
cH:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.q(z)
x=C.c.c_(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.c.c_(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hd:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hY(this),{func:1,ret:-1,args:[P.S]})
C.r.e8(z)
C.r.eT(z,W.eK(y,P.S))}},
hc:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cH()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dv(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aw()
w=x.db
C.a.sl(w.a,0)
w.aw()
w=x.dx
C.a.sl(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aQ(v)
y=H.b5(v)
P.d9("Error: "+H.j(z))
P.d9("Stack: "+H.j(y))
throw H.k(z)}},
t:{
hX:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscw)return E.e_(a,!0,!0,!0,!1)
y=W.di(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcT(a).h(0,y)
w=E.e_(y,!0,!0,!0,!1)
w.a=a
return w},
e_:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hW()
y=P.fQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.cf(a,"webgl",y)
x=H.i(x==null?C.k.cf(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.r(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hu(x,a)
w=new T.hS(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.id(a)
v=new X.fJ()
v.c=new X.at(!1,!1,!1)
v.d=P.fR(null,null,null,P.I)
w.b=v
v=new X.h9(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fV(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i_(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.dU,P.a]])
w.z=v
u=document
t=W.au
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.b(w.ger(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.b(w.gex(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.b(w.geo(),q),!1,r))
v=w.z
p=W.bi
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.b(w.gez(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.b(w.gey(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.b(w.geC(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.b(w.geE(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.b(w.geD(),s),!1,t))
p=w.z
o=W.bB;(p&&C.a).h(p,W.a_(a,H.T(W.fs(a)),H.b(w.geF(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.b(w.ges(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.b(w.geu(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.b(w.geG(),q),!1,r))
r=w.z
q=W.aW
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.b(w.geO(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.b(w.geM(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.b(w.geN(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.cH()
return z}}},hY:{"^":"u:40;a",
$1:function(a){var z
H.kj(a)
z=this.a
if(z.z){z.z=!1
z.hc()}}}}],["","",,Z,{"^":"",eo:{"^":"a;a,b",t:{
cU:function(a,b,c){var z
H.v(c,"$ise",[P.I],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b_(c)),35044)
a.bindBuffer(b,null)
return new Z.eo(b,z)}}},dg:{"^":"cs;a,b,c,d,e",
a_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aQ(y)
x=P.p('Failed to bind buffer attribute "'+J.al(this.a)+'": '+H.j(z))
throw H.k(x)}},
j:function(a){return"["+J.al(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},ep:{"^":"a;a",$iskG:1},cv:{"^":"a;a,0b,c,d",
ar:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a_(a)},
aK:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a3:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].j(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.al(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.X(y,", ")+"\nAttrs:   "+C.a.X(u,", ")},
$islW:1},ca:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aX:{"^":"a;a",
gci:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=3
if((z&$.$get$bA().a)!==0)y+=4
if((z&$.$get$aY().a)!==0)++y
return(z&$.$get$aB().a)!==0?y+4:y},
fB:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0)if(x===a)return z
return $.$get$en()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.d([],[P.o])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.X(z,"|")},
t:{
aj:function(a){return new Z.aX(a)}}}}],["","",,D,{"^":"",dj:{"^":"a;"},aA:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fv(z))
return x!==0},
fK:function(){return this.w(null)},
he:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
au:function(a){return this.he(a,!0,!1)},
t:{
C:function(){var z=new D.aA()
z.a=H.d([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fv:{"^":"u:23;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bK:{"^":"l;c,d,a,0b,$ti"},bL:{"^":"l;c,d,a,0b,$ti"},D:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dh:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)},
t:{"^":"kH<"}},dD:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}},dE:{"^":"l;c,a,0b"},fJ:{"^":"a;0a,0b,0c,0d",
h6:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dE(a,this)
y.b=!0
return z.w(y)},
h2:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dE(a,this)
y.b=!0
return z.w(y)}},dH:{"^":"cd;x,y,c,d,e,a,0b"},fV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
am:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaC()
s=new X.bk(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c6:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.am(a,b))
return!0},
aT:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dG()
if(typeof z!=="number")return z.dB()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.am(a,b))
return!0},
aS:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.am(a,b))
return!0},
h7:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaC()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.cK(new V.Q(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.w(w)
return!0},
eB:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.dH(c,a,this.a.gaC(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.O(0,0)}},at:{"^":"a;a,b,c",
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
return z+(this.c?"Shift+":"")}},bk:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},h9:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bx:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaC()
x=new X.bk(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c6:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bx(a,b,!0))
return!0},
aT:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dG()
if(typeof z!=="number")return z.dB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bx(a,b,!0))
return!0},
aS:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bx(a,b,!1))
return!0},
h8:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaC()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.cK(new V.Q(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.w(x)
return!0},
gd_:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbp:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gds:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cK:{"^":"cd;x,c,d,e,a,0b"},cd:{"^":"l;"},e1:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},i_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
am:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.O],"$ase")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaC()
w=new X.e1(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h5:function(a){var z
H.v(a,"$ise",[V.O],"$ase")
z=this.b
if(z==null)return!1
z.w(this.am(a,!0))
return!0},
h3:function(a){var z
H.v(a,"$ise",[V.O],"$ase")
z=this.c
if(z==null)return!1
z.w(this.am(a,!0))
return!0},
h4:function(a){var z
H.v(a,"$ise",[V.O],"$ase")
z=this.d
if(z==null)return!1
z.w(this.am(a,!1))
return!0}},id:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaC:function(){var z=this.a
return V.aM(0,0,(z&&C.k).gb9(z).c,C.k.gb9(z).d)},
cA:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dD(z,new X.at(y,a.altKey,a.shiftKey))},
aB:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.at(y,a.altKey,a.shiftKey)},
bJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.at(y,a.altKey,a.shiftKey)},
an:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.O(y-w,x-v)},
aN:function(a){return new V.Q(a.movementX,a.movementY)},
bF:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.c.U(u.pageX)
C.c.U(u.pageY)
s=z.left
C.c.U(u.pageX)
C.a.h(y,new V.O(t-s,C.c.U(u.pageY)-z.top))}return y},
ak:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dh(z,new X.at(y,a.altKey,a.shiftKey))},
hF:[function(a){this.f=!0},"$1","gex",4,0,4],
hx:[function(a){this.f=!1},"$1","geo",4,0,4],
hA:[function(a){if(this.f)a.preventDefault()},"$1","ger",4,0,4],
hH:[function(a){var z
H.i(a,"$isbi")
if(!this.f)return
z=this.cA(a)
if(this.b.h6(z))a.preventDefault()},"$1","gez",4,0,22],
hG:[function(a){var z
H.i(a,"$isbi")
if(!this.f)return
z=this.cA(a)
if(this.b.h2(z))a.preventDefault()},"$1","gey",4,0,22],
hJ:[function(a){var z,y,x,w
H.i(a,"$isau")
z=this.a
z.focus()
this.f=!0
this.aB(a)
if(this.x){y=this.ak(a)
x=this.aN(a)
if(this.d.c6(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ak(a)
w=this.an(a)
if(this.c.c6(y,w))a.preventDefault()},"$1","geC",4,0,5],
hL:[function(a){var z,y,x
H.i(a,"$isau")
this.aB(a)
z=this.ak(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","geE",4,0,5],
hC:[function(a){var z,y,x,w
H.i(a,"$isau")
z=this.a
if(!(z&&C.k).gb9(z).cV(0,new P.bm(a.clientX,a.clientY,[P.S]))){this.aB(a)
y=this.ak(a)
if(this.x){x=this.aN(a)
if(this.d.aT(y,x))a.preventDefault()
return}if(this.r)return
w=this.an(a)
if(this.c.aT(y,w))a.preventDefault()}},"$1","geu",4,0,5],
hK:[function(a){var z,y,x
H.i(a,"$isau")
this.aB(a)
z=this.ak(a)
if(this.x){y=this.aN(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.an(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","geD",4,0,5],
hB:[function(a){var z,y,x,w
H.i(a,"$isau")
z=this.a
if(!(z&&C.k).gb9(z).cV(0,new P.bm(a.clientX,a.clientY,[P.S]))){this.aB(a)
y=this.ak(a)
if(this.x){x=this.aN(a)
if(this.d.aS(y,x))a.preventDefault()
return}if(this.r)return
w=this.an(a)
if(this.c.aS(y,w))a.preventDefault()}},"$1","ges",4,0,5],
hM:[function(a){var z,y
H.i(a,"$isbB")
this.aB(a)
z=new V.Q((a&&C.q).gfI(a),C.q.gfJ(a)).v(0,180)
if(this.x){if(this.d.h7(z))a.preventDefault()
return}if(this.r)return
y=this.an(a)
if(this.c.h8(z,y))a.preventDefault()},"$1","geF",4,0,24],
hN:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ak(this.y)
v=this.an(this.y)
this.d.eB(w,v,x)}},"$1","geG",4,0,4],
hV:[function(a){var z
H.i(a,"$isaW")
this.a.focus()
this.f=!0
this.bJ(a)
z=this.bF(a)
if(this.e.h5(z))a.preventDefault()},"$1","geO",4,0,10],
hT:[function(a){var z
H.i(a,"$isaW")
this.bJ(a)
z=this.bF(a)
if(this.e.h3(z))a.preventDefault()},"$1","geM",4,0,10],
hU:[function(a){var z
H.i(a,"$isaW")
this.bJ(a)
z=this.bF(a)
if(this.e.h4(z))a.preventDefault()},"$1","geN",4,0,10]}}],["","",,D,{"^":"",c7:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
ax:[function(a){var z
H.i(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.ax(null)},"hn","$1","$0","gdS",0,2,0],
$isV:1,
$isav:1},V:{"^":"a;",$isav:1},fK:{"^":"a9;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
ax:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eA:[function(a){var z
H.i(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.eA(null)},"hI","$1","$0","gcE",0,2,0],
hO:[function(a){var z,y,x
H.v(a,"$isc",[D.V],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.e3(x))return!1}return!0},"$1","geH",4,0,34],
hu:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcE(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.i(b[u],"$isV")
if(t instanceof D.c7)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aA()
s.a=H.d([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bK(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gel",8,0,20],
hQ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcE(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.i(b[u],"$isV")
if(t instanceof D.c7)C.a.L(this.e,t)
s=t.d
if(s==null){s=new D.aA()
s.a=H.d([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.L(s.a,x)}z=new D.bL(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","geJ",8,0,20],
e3:function(a){var z=C.a.aP(this.e,a)
return z},
$asc:function(){return[D.V]},
$asa9:function(){return[D.V]}},hj:{"^":"a;",$isV:1,$isav:1},hH:{"^":"a;",$isV:1,$isav:1},hT:{"^":"a;",$isV:1,$isav:1},hU:{"^":"a;",$isV:1,$isav:1},hV:{"^":"a;",$isV:1,$isav:1}}],["","",,V,{"^":"",
kJ:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","h6",8,0,26],
ky:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dF(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.j.at("null",c)
return C.j.at(C.c.dA($.m.$2(a,0)?0:a,b),c+b+1)},
b4:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.w],"$ase")
z=H.d([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.a5(z,u,C.j.at(z[u],x))}return z},
d8:function(a,b){return C.c.hk(Math.pow(b,C.w.c_(Math.log(H.jY(a))/Math.log(b))))},
Y:{"^":"a;a,b,c",
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
return new V.Y(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
a5:{"^":"a;a,b,c,d",
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
return new V.a5(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
cc:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.i(a5,"$iscc")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.c.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.c.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.c.i(t,s)
q=a5.b
p=C.c.i(z,q)
o=a5.e
n=C.c.i(w,o)
m=a5.x
l=C.c.i(t,m)
k=a5.c
z=C.c.i(z,k)
j=a5.f
w=C.c.i(w,j)
i=a5.y
t=C.c.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.c.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.c.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.c.i(d,s)
b=C.c.i(h,q)
a=C.c.i(f,o)
a0=C.c.i(d,m)
h=C.c.i(h,k)
f=C.c.i(f,j)
d=C.c.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.c.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.c.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.cc(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.i(a3,s),C.c.i(a1,q)+C.c.i(a2,o)+C.c.i(a3,m),C.c.i(a1,k)+C.c.i(a2,j)+C.c.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cc))return!1
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
z=[P.w]
y=V.b4(H.d([this.a,this.d,this.r],z),3,0)
x=V.b4(H.d([this.b,this.e,this.x],z),3,0)
w=V.b4(H.d([this.c,this.f,this.y],z),3,0)
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
ag:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
dq:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.i()
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
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.i(a7,"$isag")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
if(typeof s!=="number")return H.q(s)
r=a7.b
if(typeof r!=="number")return H.q(r)
q=a7.f
if(typeof q!=="number")return H.q(q)
p=a7.z
if(typeof p!=="number")return H.q(p)
o=a7.cy
if(typeof o!=="number")return H.q(o)
n=a7.c
if(typeof n!=="number")return H.q(n)
m=a7.r
if(typeof m!=="number")return H.q(m)
l=a7.Q
if(typeof l!=="number")return H.q(l)
k=a7.db
if(typeof k!=="number")return H.q(k)
j=a7.d
if(typeof j!=="number")return H.q(j)
i=a7.x
if(typeof i!=="number")return H.q(i)
h=a7.ch
if(typeof h!=="number")return H.q(h)
g=a7.dx
if(typeof g!=="number")return H.q(g)
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
return V.as(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.e
if(typeof t!=="number")return t.i()
s=this.f
if(typeof s!=="number")return s.i()
r=this.r
if(typeof r!=="number")return r.i()
q=this.y
if(typeof q!=="number")return q.i()
p=this.z
if(typeof p!=="number")return p.i()
o=this.Q
if(typeof o!=="number")return o.i()
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
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
j:function(a){return this.K()},
dl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.b4(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b4(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b4(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b4(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(a){return this.dl(a,3,0)},
K:function(){return this.dl("",3,0)},
t:{
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aK:function(){return V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dK:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.A(c)))
y=b.ap(z)
x=y.v(0,Math.sqrt(y.A(y)))
w=z.ap(x)
v=new V.F(a.a,a.b,a.c)
return V.as(x.a,w.a,z.a,x.H(0).A(v),x.b,w.b,z.b,w.H(0).A(v),x.c,w.c,z.c,z.H(0).A(v),0,0,0,1)}}},
O:{"^":"a;n:a>,p:b>",
G:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
W:{"^":"a;n:a>,p:b>,c",
F:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bn:{"^":"a;n:a>,p:b>,c,d",
i:function(a,b){return new V.bn(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bn))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
ce:{"^":"a;n:a>,p:b>,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ce))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
t:{
aM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ce(a,b,c,d)}}},
Q:{"^":"a;a,b",
fR:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.m.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
F:{"^":"a;a,b,c",
fR:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.F(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.m.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
dr:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fd:{"^":"dj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bs:function(a){var z=V.ky(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.w(a)},
scd:function(a,b){},
sc3:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bs(z)}z=new D.D("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.I(z)}},
sc5:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bs(z)}z=new D.D("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.I(z)}},
sa1:function(a,b){var z,y
b=this.bs(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.D("location",y,b,this,[P.w])
z.b=!0
this.I(z)}},
sc4:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.D("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.I(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.D("velocity",x,a,this,[P.w])
z.b=!0
this.I(z)}},
sbS:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.D("dampening",y,a,this,[P.w])
z.b=!0
this.I(z)}},
ab:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
t:{
cx:function(){var z=new U.fd()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dl:{"^":"ac;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aL:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dl))return!1
return J.M(this.a,b.a)},
j:function(a){return"Constant: "+this.a.C("          ")},
t:{
dm:function(a){var z=new U.dl()
z.a=a
return z}}},dy:{"^":"a9;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
I:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gaA",0,2,0],
ht:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gaA(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bK(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gek",8,0,15],
hP:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gaA(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.L(t.a,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geI",8,0,15],
aL:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aL(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.aK():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.M(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asc:function(){return[U.ac]},
$asa9:function(){return[U.ac]},
$isac:1},ac:{"^":"dj;"},ie:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
I:[function(a){var z
H.i(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gaA",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd_()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gds()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbp()
z.toString
y=H.b(this.gbB(),y)
C.a.h(z.a,y)
return!0},
eg:[function(a){H.i(a,"$isl")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbz",4,0,1],
eh:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isl"),"$isbk")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.Q(y.a,y.b).i(0,2).v(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.Q(x.a,x.b).i(0,2).v(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
this.b.sM(0)
y=y.G(0,a.z)
this.Q=new V.Q(y.a,y.b).i(0,2).v(0,z.ga2())}this.a8()},"$1","gbA",4,0,1],
ei:[function(a){var z,y,x
H.i(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sM(y*10*x)
this.a8()}},"$1","gbB",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.ch=y
x=b.y
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.as(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},ig:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
I:[function(a){var z
H.i(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gaA",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd_()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gds()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbp()
z.toString
x=H.b(this.gbB(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.C()
x.f=z}x=H.b(this.ged(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.gee(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.C()
x.b=z}x=H.b(this.gf7(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.gf6(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.C()
x.c=z}y=H.b(this.gf5(),y)
C.a.h(z.a,y)
return!0},
af:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.Q(z,y)},
eg:[function(a){a=H.f(H.i(a,"$isl"),"$isbk")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbz",4,0,1],
eh:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isl"),"$isbk")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.af(new V.Q(x.a,x.b).i(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))}this.a8()},"$1","gbA",4,0,1],
ei:[function(a){var z,y,x
H.i(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sM(-y*10*z)
this.a8()}},"$1","gbB",4,0,1],
hq:[function(a){if(H.f(H.i(a,"$isl"),"$isdH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ged",4,0,1],
hr:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isl"),"$isbk")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.af(new V.Q(x.a,x.b).i(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))
this.a8()},"$1","gee",4,0,1],
hZ:[function(a){H.i(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf7",4,0,1],
hY:[function(a){var z,y,x,w,v,u,t
a=H.f(H.i(a,"$isl"),"$ise1")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.af(new V.Q(x.a,x.b).i(0,2).v(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa1(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga2()))}this.a8()},"$1","gf6",4,0,1],
hX:[function(a){var z,y,x
H.i(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sM(-y*10*z)
this.a8()}},"$1","gf5",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.as(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.i(0,V.as(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1},ih:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
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
y=H.b(this.gej(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hs:[function(a){var z,y,x,w
H.i(a,"$isl")
if(!J.M(this.b,this.a.b.c))return
H.f(a,"$iscK")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.D("zoom",z,w,this,[P.w])
z.b=!0
this.I(z)}},"$1","gej",4,0,1],
aL:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.as(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",fe:{"^":"a9;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
V:[function(a){var z
H.i(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"cp","$1","$0","gR",0,2,0],
hR:[function(a,b){var z,y,x,w,v,u,t
z=M.aw
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bK(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geK",8,0,14],
hS:[function(a,b){var z,y,x,w,v,u,t
z=M.aw
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.L(t.a,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geL",8,0,14],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$asc:function(){return[M.aw]},
$asa9:function(){return[M.aw]},
$isaw:1},fg:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
V:[function(a){var z
H.i(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"cp","$1","$0","gR",0,2,0],
saX:function(a,b){var z,y,x
if(b==null)b=X.cz(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.L(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("target",x,this.b,this,[X.cf])
z.b=!0
this.V(z)}},
saY:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("technique",x,this.c,this,[O.bS])
z.b=!0
this.V(z)}},
a3:function(a){var z,y
a.c8(this.c)
this.b.a_(a)
z=this.a
z.toString
a.cy.bn(V.aK())
y=V.aK()
z.a
a.db.bn(y)
this.d.ab(0,a)
this.d.a3(a)
this.a.toString
a.cy.aU()
a.db.aU()
this.b.toString
a.c7()},
$isaw:1},ft:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.i(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.V(null)},"cp","$1","$0","gR",0,2,0],
hy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aA()
s.a=H.d([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bK(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gep",8,0,7],
hz:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aA()
s.a=H.d([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.L(s.a,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geq",8,0,7],
scS:function(a){var z,y,x
if(a==null)a=X.dN(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.L(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("camera",x,this.a,this,[X.c3])
z.b=!0
this.V(z)}},
saX:function(a,b){var z,y,x
if(b==null)b=X.cz(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.L(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("target",x,this.b,this,[X.cf])
z.b=!0
this.V(z)}},
saY:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.L(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gR(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("technique",x,this.c,this,[O.bS])
z.b=!0
this.V(z)}},
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p
a.c8(this.c)
this.b.a_(a)
z=this.a
y=a.c
x=a.d
w=a.cy
v=z.b
u=z.c
t=z.d
s=t-u
r=1/Math.tan(v*0.5)
w.bn(V.as(-r/(y/x),0,0,0,0,r,0,0,0,0,t/s,-t*u/s,0,0,1,0))
y=$.dO
if(y==null){y=V.dK(new V.W(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.dO=y
q=y}else q=y
y=z.a
if(y!=null){p=y.aL(0,a,z)
if(p!=null)q=p.i(0,q)}a.db.bn(q)
z=this.c
if(z!=null)z.ab(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ab(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a3(a)
this.a.toString
a.cy.aU()
a.db.aU()
this.b.aK(a)
a.c7()},
$isaw:1},aw:{"^":"a;"}}],["","",,A,{"^":"",dd:{"^":"a;a,b,c"},f2:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cY:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dJ:{"^":"cP;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aG,0aq,0aH,0ba,0d0,0d1,0bb,0bc,0d2,0d3,0bd,0be,0d4,0d5,0bf,0d6,0d7,0bg,0d8,0d9,0bh,0bi,0bj,0da,0dc,0bk,0bl,0dd,0de,0bm,0df,0bU,0dg,0bV,0dh,0bW,0di,0bX,0dj,0bY,0dk,0bZ,a,b,0c,0d,0e,0f,0r",
dM:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bR("")
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
a1.fa(z)
a1.fh(z)
a1.fb(z)
a1.fp(z)
a1.fq(z)
a1.fj(z)
a1.fv(z)
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
z=new P.bR("")
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
v.fe(z)
v.f9(z)
v.fc(z)
v.ff(z)
v.fn(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fl(z)
v.fm(z)}v.fi(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
p=H.d([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.X(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fd(z)
v.fk(z)
v.fo(z)
v.fs(z)
v.ft(z)
v.fu(z)
v.fg(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.o])
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
this.dm(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isap")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isap")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isap")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isap")
if(a1.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$iscT")
if(a1.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isap")
if(a1.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isap")
this.k3=H.d([],[A.ap])
y=a1.aG
if(y>0){this.k2=H.i(this.r.m(0,"bendMatCount"),"$isE")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isap"))}}y=a1.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isa8")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.e:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isah")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a1.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isa8")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.e:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isah")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a1.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.aG=H.f(this.r.m(0,"diffuseTxt"),"$isa8")
this.aH=H.f(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.e:this.aq=H.f(this.r.m(0,"diffuseTxt"),"$isah")
this.aH=H.f(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a1.d
if(y!==C.b){this.ba=H.f(this.r.m(0,"invDiffuseClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.d0=H.f(this.r.m(0,"invDiffuseTxt"),"$isa8")
this.bb=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.e:this.d1=H.f(this.r.m(0,"invDiffuseTxt"),"$isah")
this.bb=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a1.e
if(y!==C.b){this.be=H.f(this.r.m(0,"shininess"),"$isU")
this.bc=H.f(this.r.m(0,"specularClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.d2=H.f(this.r.m(0,"specularTxt"),"$isa8")
this.bd=H.f(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.e:this.d3=H.f(this.r.m(0,"specularTxt"),"$isah")
this.bd=H.f(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.d:this.d4=H.f(this.r.m(0,"bumpTxt"),"$isa8")
this.bf=H.f(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.e:this.d5=H.f(this.r.m(0,"bumpTxt"),"$isah")
this.bf=H.f(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a1.dy){this.d6=H.f(this.r.m(0,"envSampler"),"$isah")
this.d7=H.f(this.r.m(0,"nullEnvTxt"),"$isE")
y=a1.r
if(y!==C.b){this.bg=H.f(this.r.m(0,"reflectClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.d8=H.f(this.r.m(0,"reflectTxt"),"$isa8")
this.bh=H.f(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.e:this.d9=H.f(this.r.m(0,"reflectTxt"),"$isah")
this.bh=H.f(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a1.x
if(y!==C.b){this.bi=H.f(this.r.m(0,"refraction"),"$isU")
this.bj=H.f(this.r.m(0,"refractClr"),"$isG")
switch(y){case C.b:break
case C.f:break
case C.d:this.da=H.f(this.r.m(0,"refractTxt"),"$isa8")
this.bk=H.f(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.e:this.dc=H.f(this.r.m(0,"refractTxt"),"$isah")
this.bk=H.f(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a1.y
if(y!==C.b){this.bl=H.f(this.r.m(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.f:break
case C.d:this.dd=H.f(this.r.m(0,"alphaTxt"),"$isa8")
this.bm=H.f(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.e:this.de=H.f(this.r.m(0,"alphaTxt"),"$isah")
this.bm=H.f(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bU=H.d([],[A.ee])
this.bV=H.d([],[A.ef])
this.bW=H.d([],[A.eg])
this.bX=H.d([],[A.eh])
this.bY=H.d([],[A.ei])
this.bZ=H.d([],[A.ej])
if(a1.k2){y=a1.z
if(y>0){this.df=H.i(this.r.m(0,"dirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isG")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isG")
x=this.bU;(x&&C.a).h(x,new A.ee(m,l,k))}}y=a1.Q
if(y>0){this.dg=H.i(this.r.m(0,"pntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isG")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isG")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isG")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isU")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isU")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isU")
x=this.bV;(x&&C.a).h(x,new A.ef(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dh=H.i(this.r.m(0,"spotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isG")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isG")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isG")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isG")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isU")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isU")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isU")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isU")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isU")
x=this.bW;(x&&C.a).h(x,new A.eg(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.di=H.i(this.r.m(0,"txtDirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isG")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isG")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isG")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isG")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isG")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isE")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isa8")
x=this.bX;(x&&C.a).h(x,new A.eh(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dj=H.i(this.r.m(0,"txtPntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isG")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isG")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$iscT")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isG")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isU")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isU")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isU")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isah")
x=this.bY;(x&&C.a).h(x,new A.ei(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dk=H.i(this.r.m(0,"txtSpotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isG")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isG")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isG")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isG")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isG")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isE")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isG")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isU")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isU")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isU")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isU")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isU")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isa8")
x=this.bZ;(x&&C.a).h(x,new A.ej(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
h0:function(a,b){var z,y
z=a.aq
y=new A.dJ(b,z)
y.cm(b,z)
y.dM(a,b)
return y}}},h3:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aG,aq,aH",
fa:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aG+"];\n"
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
fh:function(a){var z
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
fb:function(a){var z
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
fp:function(a){var z,y
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
fq:function(a){var z,y
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
fj:function(a){var z
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
fv:function(a){var z
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
al:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.ck(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fe:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.al(a,z,"emission")
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
f9:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.al(a,z,"ambient")
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
fc:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"diffuse")
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
ff:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.al(a,z,"invDiffuse")
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
fn:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.al(a,z,"specular")
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
fi:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
switch(y){case C.b:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
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
fl:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.al(a,z,"reflect")
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
fm:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.al(a,z,"refract")
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
fd:function(a){var z,y
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
fk:function(a){var z,y
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
fo:function(a){var z,y
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
fs:function(a){var z,y,x
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
ft:function(a){var z,y,x
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
fu:function(a){var z,y,x
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
fg:function(a){var z
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
j:function(a){return this.aq}},ee:{"^":"a;a,b,c"},eh:{"^":"a;a,b,c,d,e,f,r,x"},ef:{"^":"a;a,b,c,d,e,f,r"},ei:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eg:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ej:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cP:{"^":"cs;",
cm:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dm:function(a,b,c){var z,y,x
this.c=this.cB(b,35633)
this.d=this.cB(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.eO(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.p("Failed to link shader: "+H.j(x)))}this.f1()
this.f2()},
a_:function(a){a.a.useProgram(this.e)
this.f.fL()},
cB:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.k(P.p("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f1:function(){var z,y,x,w,v,u
z=H.d([],[A.dd])
y=this.a
x=H.X(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dd(y,v.name,u))}this.f=new A.f2(z)},
f2:function(){var z,y,x,w,v,u
z=H.d([],[A.a3])
y=this.a
x=H.X(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fH(v.type,v.size,v.name,u))}this.r=new A.i7(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cS(z,y,b,a,c)},
e5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a8(z,y,b,c)
else return A.cS(z,y,b,a,c)},
e6:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ah(z,y,b,c)
else return A.cS(z,y,b,a,c)},
b6:function(a,b){return new P.er(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fH:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.U(this.a,this.e,c,d)
case 35664:return new A.by(this.a,this.e,c,d)
case 35665:return new A.G(this.a,this.e,c,d)
case 35666:return new A.ed(this.a,this.e,c,d)
case 35667:return new A.i4(this.a,this.e,c,d)
case 35668:return new A.i5(this.a,this.e,c,d)
case 35669:return new A.i6(this.a,this.e,c,d)
case 35674:return new A.i9(this.a,this.e,c,d)
case 35675:return new A.cT(this.a,this.e,c,d)
case 35676:return new A.ap(this.a,this.e,c,d)
case 35678:return this.e5(b,c,d)
case 35680:return this.e6(b,c,d)
case 35670:throw H.k(this.b6("BOOL",c))
case 35671:throw H.k(this.b6("BOOL_VEC2",c))
case 35672:throw H.k(this.b6("BOOL_VEC3",c))
case 35673:throw H.k(this.b6("BOOL_VEC4",c))
default:throw H.k(P.p("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c5:{"^":"a;a,b",
j:function(a){return this.b}},dZ:{"^":"cP;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
dO:function(a,b){var z,y,x,w,v
this.dm(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.hR(a))
this.x=this.f.k(0,"posAttr")
this.y=H.f(this.r.m(0,"txtCount"),"$isE")
this.z=H.f(this.r.m(0,"backClr"),"$ised")
this.Q=H.d([],[A.a8])
this.ch=H.d([],[A.ap])
z=[A.by]
this.cx=H.d([],z)
this.cy=H.d([],z)
this.db=H.d([],z)
this.dx=H.d([],z)
this.dy=H.d([],[A.E])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isa8"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isap"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isby"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isby"))
z=this.db
x=this.r
w="destLoc"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isby"))
z=this.dx
x=this.r
w="destSize"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isby"))
z=this.dy
x=this.r
w="flip"+y
v=x.k(0,w)
if(v==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.f(v,"$isE"))}},
t:{
hR:function(a){var z,y
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
hP:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.dZ(b,z)
y.cm(b,z)
y.dO(a,b)
return y}}},a3:{"^":"a;"},i7:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.k(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.K()},
fM:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].j(0)+a
return x},
K:function(){return this.fM("\n")}},E:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform1i: "+H.j(this.c)}},i4:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform2i: "+H.j(this.c)}},i5:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform3i: "+H.j(this.c)}},i6:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform4i: "+H.j(this.c)}},i3:{"^":"a3;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
cS:function(a,b,c,d,e){var z=new A.i3(a,b,c,e)
z.f=d
z.e=P.fT(d,0,!1,P.I)
return z}}},U:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform1f: "+H.j(this.c)}},by:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform2f: "+H.j(this.c)}},G:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform3f: "+H.j(this.c)}},ed:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform4f: "+H.j(this.c)}},i9:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cT:{"^":"a3;a,b,c,d",
ad:function(a){var z=new Float32Array(H.b_(H.v(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.j(this.c)}},ap:{"^":"a3;a,b,c,d",
ad:function(a){var z=new Float32Array(H.b_(H.v(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.j(this.c)}},a8:{"^":"a3;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.j(this.c)}},ah:{"^":"a3;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
kv:function(a,b,c,d){return F.k0(c,a,d,b,new F.kw())},
k0:function(a,b,c,d,e){var z=F.kt(a,b,new F.k1(H.b(e,{func:1,ret:V.W,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ao()
z.fW(new F.io(),new F.hd())
return z},
kt:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ai,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.dS()
y=H.d([],[F.ai])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cj(null,null,new V.a5(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cW(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cj(null,null,new V.a5(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cW(d))}}z.d.fz(a+1,b+1,y)
return z},
kw:{"^":"u:32;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
k1:{"^":"u:33;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.da(y.$1(z),x)
x=J.da(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.A(x)))
u=new V.F(1,0,0)
y=v.ap(!v.u(0,u)?new V.F(0,0,1):u)
t=y.v(0,Math.sqrt(y.A(y)))
y=t.ap(v)
u=y.v(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
x=w.F(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.M(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a0()}}},
af:{"^":"a;0a,0b,0c,0d,0e",
aQ:function(){if(!this.gcZ()){C.a.L(this.a.a.d.b,this)
this.a.a.a0()}this.eQ()
this.eR()
this.eS()},
eZ:function(a){this.a=a
C.a.h(a.d.b,this)},
f_:function(a){this.b=a
C.a.h(a.d.c,this)},
f0:function(a){this.c=a
C.a.h(a.d.d,this)},
eQ:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
eR:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
eS:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gcZ:function(){return this.a==null||this.b==null||this.c==null},
dZ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dr())return
return v.v(0,Math.sqrt(v.A(v)))},
e0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.A(z)))
z=w.G(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.ap(z.v(0,Math.sqrt(z.A(z))))
return z.v(0,Math.sqrt(z.A(z)))},
bR:function(){if(this.d!=null)return!0
var z=this.dZ()
if(z==null){z=this.e0()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
dY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dr())return
return v.v(0,Math.sqrt(v.A(v)))},
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
if($.m.$2(n,0)){z=r.G(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.G(0,u).i(0,l).F(0,u).G(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.A(z)))
z=k.ap(m)
z=z.v(0,Math.sqrt(z.A(z))).ap(k)
m=z.v(0,Math.sqrt(z.A(z)))}return m},
bP:function(){if(this.e!=null)return!0
var z=this.dY()
if(z==null){z=this.e_()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
gfE:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
C:function(a){var z,y
if(this.gcZ())return a+"disposed"
z=a+C.j.at(J.al(this.a.e),0)+", "+C.j.at(J.al(this.b.e),0)+", "+C.j.at(J.al(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
K:function(){return this.C("")},
t:{
bJ:function(a,b,c){var z,y,x
z=new F.af()
y=a.a
if(y==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.p("May not create a face with vertices attached to different shapes."))
z.eZ(a)
z.f_(b)
z.f0(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
fw:{"^":"a;"},
hG:{"^":"fw;",
aR:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dF:{"^":"a;"},
fL:{"^":"a;"},
i2:{"^":"fL;",
aR:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dP:{"^":"a;"},
dR:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
ao:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ao()||!1
if(!this.a.ao())y=!1
z=this.e
if(!(z==null))z.au(0)
return y},
e9:function(a,b,c,d,e){var z,y,x
H.v(d,"$ise",[F.ai],"$ase")
H.v(e,"$ise",[P.I],"$ase")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.aR(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fW:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ai],x=[P.I];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.e9(a,v,y,u,t))b.fV(u)}this.a.B()
this.c.c9()
this.d.c9()
this.b.hb()
this.c.ca(new F.i2())
this.d.ca(new F.hG())
z=this.e
if(!(z==null))z.au(0)},
cR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
v=b.gci(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dg])
for(r=0,q=0;q<w;++q){p=b.fB(q)
o=p.gci(p)
C.a.a5(s,q,new Z.dg(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].fS(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a5(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b_(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cv(new Z.eo(34962,j),s,b)
i.b=H.d([],[Z.ca])
if(this.b.b.length!==0){x=P.I
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.cU(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ca(0,h.length,f))}if(this.c.b.length!==0){x=P.I
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.cU(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ca(1,h.length,f))}if(this.d.b.length!==0){x=P.I
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.B()
C.a.h(h,g.e)}f=Z.cU(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.ca(4,h.length,f))}return i},
j:function(a){var z=H.d([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.X(z,"\n")},
aJ:function(a){var z=this.e
if(!(z==null))z.w(a)},
a0:function(){return this.aJ(null)},
t:{
dS:function(){var z,y
z=new F.dR()
y=new F.ii(z)
y.b=!1
y.c=H.d([],[F.ai])
z.a=y
y=new F.hF(z)
y.b=H.d([],[F.dP])
z.b=y
y=new F.hE(z)
y.b=H.d([],[F.dF])
z.c=y
y=new F.hD(z)
y.b=H.d([],[F.af])
z.d=y
z.e=null
return z}}},
hD:{"^":"a;a,0b",
fw:function(a){var z,y,x,w,v
H.v(a,"$ise",[F.ai],"$ase")
z=H.d([],[F.af])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bJ(y,w,v))}return z},
fz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ise",[F.ai],"$ase")
z=H.d([],[F.af])
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
C.a.h(z,F.bJ(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bJ(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bJ(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bJ(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
ca:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aR(0,v,t)){v.aQ()
break}}}}},
c9:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gfE(x)
if(y)x.aQ()}},
ao:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bR())x=!1
return x},
bQ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bP())x=!1
return x},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.X(z,"\n")},
K:function(){return this.C("")}},
hE:{"^":"a;a,0b",
gl:function(a){return this.b.length},
ca:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aR(0,v,t)){v.aQ()
break}}}}},
c9:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.aQ()}},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.d([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.X(z,"\n")},
K:function(){return this.C("")}},
hF:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hb:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aQ()}},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.X(z,"\n")},
K:function(){return this.C("")}},
ai:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cW:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cj(this.cx,x,u,z,y,w,v,a,t)},
sfX:function(a){var z
a=a.v(0,Math.sqrt(a.A(a)))
if(!J.M(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a0()}},
fS:function(a){var z,y
z=J.L(a)
if(z.u(a,$.$get$aq())){z=this.f
y=[P.w]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aD())){z=this.r
y=[P.w]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.x
y=[P.w]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aE())){z=this.y
y=[P.w]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.u(a,$.$get$aF())){z=this.z
y=[P.w]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bz())){z=this.Q
y=[P.w]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bA())){z=this.Q
y=[P.w]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aY()))return H.d([this.ch],[P.w])
else if(z.u(a,$.$get$aB())){z=this.cx
y=[P.w]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.w])},
bR:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.J(0,new F.it(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
bP:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.J(0,new F.is(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
C:function(a){var z,y,x
z=H.d([],[P.o])
C.a.h(z,C.j.at(J.al(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.X(z,", ")
return a+"{"+x+"}"},
K:function(){return this.C("")},
t:{
cj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ai()
y=new F.ir(z)
y.b=H.d([],[F.dP])
z.b=y
y=new F.im(z)
x=[F.dF]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.ij(z)
x=[F.af]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$el()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aC().a)!==0?b:null
z.y=(x&$.$get$aE().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$em().a)!==0?c:null
z.ch=(x&$.$get$aY().a)!==0?i:0
z.cx=(x&$.$get$aB().a)!==0?a:null
return z}}},
it:{"^":"u:8;a",
$1:function(a){var z,y
H.i(a,"$isaf")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
is:{"^":"u:8;a",
$1:function(a){var z,y
H.i(a,"$isaf")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
ii:{"^":"a;a,0b,0c",
B:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.k(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a0()
return!0},
fA:function(a,b,c,d,e,f,g,h,i){var z=F.cj(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b7:function(a,b,c,d,e,f){return this.fA(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ao:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bR()
return!0},
bQ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bP()
return!0},
fD:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
this.B()
z=H.d([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.X(z,"\n")},
K:function(){return this.C("")}},
ij:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.af]})
C.a.J(this.b,b)
C.a.J(this.c,new F.ik(this,b))
C.a.J(this.d,new F.il(this,b))},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.X(z,"\n")},
K:function(){return this.C("")}},
ik:{"^":"u:8;a,b",
$1:function(a){H.i(a,"$isaf")
if(!J.M(a.a,this.a))this.b.$1(a)}},
il:{"^":"u:8;a,b",
$1:function(a){var z
H.i(a,"$isaf")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
im:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.X(z,"\n")},
K:function(){return this.C("")}},
ip:{"^":"a;"},
io:{"^":"ip;",
aR:function(a,b,c){return J.M(b.f,c.f)}},
iq:{"^":"a;"},
hd:{"^":"iq;",
fV:function(a){var z,y,x,w
H.v(a,"$ise",[F.ai],"$ase")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)a[x].sfX(z)
return}},
ir:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.X(z,"\n")},
K:function(){return this.C("")}}}],["","",,O,{"^":"",h_:{"^":"bS;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ae:dy@",
gq:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
N:[function(a){var z
H.i(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.N(null)},"b2","$1","$0","gaj",0,2,0],
eV:[function(a){H.i(a,"$isl")
this.a=null
this.N(a)},function(){return this.eV(null)},"hW","$1","$0","geU",0,2,0],
hv:[function(a,b){var z=V.ag
z=new D.bK(a,H.v(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.N(z)},"$2","gem",8,0,13],
hw:[function(a,b){var z=V.ag
z=new D.bL(a,H.v(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.N(z)},"$2","gen",8,0,13],
cz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.Z(z.e.length+3,4)*4
x=C.h.Z(z.f.length+3,4)*4
w=C.h.Z(z.r.length+3,4)*4
v=C.h.Z(z.x.length+3,4)*4
u=C.h.Z(z.y.length+3,4)*4
t=C.h.Z(z.z.length+3,4)*4
s=C.h.Z(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.j(q.a)+C.h.j(p.a)+C.h.j(o.a)+C.h.j(n.a)+C.h.j(m.a)+C.h.j(l.a)+C.h.j(k.a)+C.h.j(j.a)+C.h.j(i.a)+"_"
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
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aq()
if(c){z=$.$get$aD()
a6=new Z.aX(a6.a|z.a)}if(b){z=$.$get$aC()
a6=new Z.aX(a6.a|z.a)}if(a){z=$.$get$aE()
a6=new Z.aX(a6.a|z.a)}if(a0){z=$.$get$aF()
a6=new Z.aX(a6.a|z.a)}if(a2){z=$.$get$aB()
a6=new Z.aX(a6.a|z.a)}return new A.h3(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.v(a,"$ise",[T.cg],"$ase")},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cc(x)}}},
dv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cz()
y=H.i(a.fr.k(0,z.aq),"$isdJ")
if(y==null){y=A.h0(z,a.a)
a.cO(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aH
z=b.e
if(!(z instanceof Z.cv)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ao()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bQ()
u.a.bQ()
u=u.e
if(!(u==null))u.au(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fD()
t=t.e
if(!(t==null))t.au(0)}r=b.d.cR(new Z.ep(a.a),w)
r.ar($.$get$aq()).e=this.a.y.c
if(z)r.ar($.$get$aD()).e=this.a.Q.c
if(v)r.ar($.$get$aC()).e=this.a.z.c
if(x.rx)r.ar($.$get$aE()).e=this.a.ch.c
if(u)r.ar($.$get$aF()).e=this.a.cx.c
if(x.x1)r.ar($.$get$aB()).e=this.a.cy.c
b.e=r}z=T.cg
q=H.d([],[z])
this.a.a_(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.ad(u.a4(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gT(u)
t=a.dx
t=u.i(0,t.gT(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ad(u.a4(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gh9()
t=a.dx
t=u.i(0,t.gT(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ad(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ad(u.a4(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ad(u.a4(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ad(C.x.a4(u,!0))}if(x.aG>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.i(t,"$isag")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.b_(H.v(t.a4(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.f.d)
v=this.a
u=this.f.d
v.a9(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.f.e)
v=this.a
u=this.f.e
v.a6(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.r.d)
v=this.a
u=this.r.d
v.a9(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.r.e)
v=this.a
u=this.r.e
v.a6(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.a9(v.aG,v.aH,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.aq,v.aH,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.ba
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.y.d)
v=this.a
u=this.y.d
v.a9(v.d0,v.bb,u)
u=this.a
v=this.y.f
u=u.ba
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.d1,v.bb,u)
u=this.a
v=this.y.f
u=u.ba
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
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
case C.d:this.O(q,this.z.d)
v=this.a
u=this.z.d
v.a9(v.d2,v.bd,u)
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
case C.e:this.O(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.d3,v.bd,u)
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
v=this.a.df
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bU
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cc(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dg
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bV
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gce(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b_(j.gaV(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gag(j)
g=i.d
h=t.gbo()
s=t.gb0()
t=t.gb8()
g.a.uniform3f(g.d,h,s,t)
t=j.gbL()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbM()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbN()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dh
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bW
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gce(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbT(j).i1()
g=i.c
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=m.b_(j.gaV(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gag(j)
s=i.e
h=t.gbo()
g=t.gb0()
t=t.gb8()
s.a.uniform3f(s.d,h,g,t)
t=j.gi0()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi_()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbL()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbM()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbN()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.di
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.bX
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gaa()
H.v(q,"$ise",t,"$ase")
if(!C.a.aP(q,s)){s.sc0(0,q.length)
C.a.h(q,s)}s=j.gbT(j)
h=i.d
g=s.gaD(s)
f=s.gaE(s)
s=s.gaF()
h.a.uniform3f(h.d,g,f,s)
s=j.gbp()
f=i.b
g=s.gaD(s)
h=s.gaE(s)
s=s.gaF()
f.a.uniform3f(f.d,g,h,s)
s=j.gaW(j)
h=i.c
g=s.gaD(s)
f=s.gaE(s)
s=s.gaF()
h.a.uniform3f(h.d,g,f,s)
s=m.cc(j.gbT(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gag(j)
g=i.f
f=h.gbo()
s=h.gb0()
h=h.gb8()
g.a.uniform3f(g.d,f,s,h)
h=j.gaa()
s=h.gc2(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gec()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.geb())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dj
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.bY
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gaa()
H.v(q,"$ise",s,"$ase")
if(!C.a.aP(q,h)){h.sc0(0,q.length)
C.a.h(q,h)}e=m.i(0,j.gT(j))
h=j.gT(j).b_(new V.W(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gce(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b_(new V.W(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.dq(0)
d=i.d
n=new Float32Array(H.b_(H.v(new V.cc(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gag(j)
h=i.e
f=d.gbo()
g=d.gb0()
d=d.gb8()
h.a.uniform3f(h.d,f,g,d)
d=j.gaa()
h=d.gc2(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gc2(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gc0(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbL()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbM()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbN()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dk
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bZ
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaa()
H.v(q,"$ise",z,"$ase")
if(!C.a.aP(q,t)){t.sc0(0,q.length)
C.a.h(q,t)}t=j.gaV(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gce(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbT(j)
g=i.c
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=j.gbp()
s=i.d
h=t.gaD(t)
g=t.gaE(t)
t=t.gaF()
s.a.uniform3f(s.d,h,g,t)
t=j.gaW(j)
g=i.e
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=m.b_(j.gaV(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaa()
s=t.gc2(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gec()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.geb())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gag(j)
s=i.y
h=t.gbo()
g=t.gb0()
t=t.gb8()
s.a.uniform3f(s.d,h,g,t)
t=j.gi6()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gi7()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbL()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbM()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbN()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.d:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.a9(z.d4,z.bf,v)
break
case C.e:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.d5,z.bf,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).dq(0)
a.Q=v}z=z.fy
z.toString
z.ad(v.a4(0,!0))}if(x.dy){this.O(q,this.ch)
z=this.a
v=this.ch
z.a6(z.d6,z.d7,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bg
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.O(q,this.cx.d)
z=this.a
v=this.cx.d
z.a9(z.d8,z.bh,v)
v=this.a
z=this.cx.f
v=v.bg
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.O(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.d9,z.bh,v)
v=this.a
z=this.cx.f
v=v.bg
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
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
case C.d:this.O(q,this.cy.d)
z=this.a
v=this.cy.d
z.a9(z.da,z.bk,v)
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
case C.e:this.O(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dc,z.bk,v)
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
case C.f:z=this.a
u=this.db.f
z=z.bl
z.a.uniform1f(z.d,u)
break
case C.d:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.a9(z.dd,z.bm,u)
u=this.a
z=this.db.f
u=u.bl
u.a.uniform1f(u.d,z)
break
case C.e:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.de,z.bm,u)
u=this.a
z=this.db.f
u=u.bl
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a_(a)
z=b.e
z.a_(a)
z.a3(a)
z.aK(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aK(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.cY()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cz().aq}},h1:{"^":"cI;0f,a,b,0c,0d,0e"},cI:{"^":"a;",
b4:["dK",function(){}]},h2:{"^":"cI;a,b,0c,0d,0e"},aS:{"^":"cI;0f,a,b,0c,0d,0e",
cI:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.D(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.N(y)}},
b4:["br",function(){this.dK()
this.cI(new V.Y(1,1,1))}],
sag:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b4()
z=this.a
z.a=null
z.N(null)}this.cI(b)}},h4:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eY:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.N(z)}},
b4:function(){this.br()
this.eY(1)}},h5:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
bH:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.N(z)}},
b4:function(){this.br()
this.bH(100)}},bS:{"^":"a;"},hO:{"^":"bS;0a,0b,0c,0d,0ae:e@",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
N:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.N(null)},"b2","$1","$0","gaj",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isc",[O.aU],"$asc")
for(z=b.length,y=this.gaj(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gae()==null){t=new D.aA()
t.a=H.d([],w)
t.c=0
u.sae(t)}t=u.gae()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.b2()},"$2","gev",8,0,12],
hE:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isc",[O.aU],"$asc")
for(z=b.length,y=this.gaj(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gae()==null){t=new D.aA()
t.a=H.d([],w)
t.c=0
u.sae(t)}t=u.gae()
t.toString
H.b(y,x)
C.a.L(t.a,y)}}this.b2()},"$2","gew",8,0,12],
dv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.Z(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.i(a.fr.k(0,y),"$isdZ")
if(x==null){x=A.hP(z,a.a)
a.cO(x)}this.b=x
y=x}if(b.e==null){y=b.d.cR(new Z.ep(a.a),$.$get$aq())
w=y.ar($.$get$aq())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.a_(a)
y=T.cg
u=H.d([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.v(u,"$ise",y,"$ase")
if(v!=null)if(!C.a.aP(u,v)){v.a=u.length
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
n=new Float32Array(H.b_(H.v((q==null?new V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).a4(0,!0),"$ise",w,"$ase")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aM(0,0,1,1)
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
if(m==null)m=V.aM(0,0,1,1)
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
for(s=0;s<u.length;++s){y=u[s]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=b.e
if(y instanceof Z.cv){y.a_(a)
y.a3(a)
y.aK(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.cY()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},aU:{"^":"a;0a,0b,0c,0d,0e,0ae:f@",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
N:[function(a){var z
H.i(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.N(null)},"b2","$1","$0","gaj",0,2,0],
saa:function(a){var z,y,x
z=this.a
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gaj(),{func:1,ret:-1,args:[D.l]})
C.a.L(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.y
y=H.b(this.gaj(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("texture",x,this.a,this,[T.dX])
z.b=!0
this.N(z)}},
scU:function(a){var z,y
a=V.aK()
if(!J.M(this.b,a)){z=this.b
this.b=a
y=new D.D("colorMatrix",z,a,this,[V.ag])
y.b=!0
this.N(y)}},
scj:function(a,b){var z,y
b=V.aM(0,0,1,1)
if(!J.M(this.c,b)){z=this.c
this.c=b
y=new D.D("source",z,b,this,[V.ce])
y.b=!0
this.N(y)}},
scX:function(a,b){var z,y
if(b==null)b=V.aM(0,0,1,1)
if(!J.M(this.d,b)){z=this.d
this.d=b
y=new D.D("destination",z,b,this,[V.ce])
y.b=!0
this.N(y)}},
t:{
hQ:function(a,b,c,d,e){var z,y
z=new O.aU()
z.saa(e)
z.scU(a)
z.scj(0,d)
z.scX(0,b)
if(z.e!==!1){z.e=!1
y=new D.D("flip",!0,!1,z,[P.a4])
y.b=!0
z.N(y)}z.f=null
return z}}}}],["","",,T,{"^":"",cg:{"^":"cs;"},dX:{"^":"cg;0b,0c,0d,0e,0f,0r,0x,0y,a",t:{
dY:function(a,b){var z=new T.dX(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.C()
return z}}},hS:{"^":"a;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",f4:{"^":"cf;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gq:function(){var z=this.db
if(z==null){z=D.C()
this.db=z}return z},
a_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.X(z.getParameter(3379))
u=V.d8(x,2)
t=V.d8(w,2)
v=V.d8(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.G.hi(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.dY(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.fK()}y.b=r.b
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
a.c=C.c.U(y*this.a)
x=z.d
a.d=C.c.U(x*this.b)
w=this.c
q=C.c.U(z.a*w)
p=this.d
o=C.c.U(z.b*p)
n=C.c.U(y*w)
m=C.c.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)},
aK:function(a){a.a.bindFramebuffer(36160,null)}},c3:{"^":"a;",$isav:1},fA:{"^":"cf;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a_:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.q(y)
v=C.c.U(w.a*y)
if(typeof x!=="number")return H.q(x)
u=C.c.U(w.b*x)
t=C.c.U(w.c*y)
a.c=t
w=C.c.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
aK:function(a){},
t:{
cz:function(a,b,c,d,e,f,g){var z,y
z=new X.fA()
if(d==null)y=new V.a5(0,0,0,1)
else y=d
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aM(0,0,1,1)
z.r=y
return z}}},fC:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
$isav:1,
$isc3:1},hh:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
aM:[function(a){var z
H.i(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.aM(null)},"ho","$1","$0","gdV",0,2,0],
$isav:1,
$isc3:1,
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
C.a.h(x.a,w)}x=new D.D("mover",y,z.a,z,[U.ac])
x.b=!0
z.aM(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.D("fov",y,b,z,[P.w])
x.b=!0
z.aM(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.D("near",y,d,z,[P.w])
x.b=!0
z.aM(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.D("far",y,a,z,[P.w])
x.b=!0
z.aM(x)}return z}}},cf:{"^":"a;"}}],["","",,B,{"^":"",
kn:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eX(x,(x&&C.m).cs(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
W.a_(z,"scroll",H.b(new B.ko(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(b,"$ise",[P.o],"$ase")
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
u=W.di(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.i(v.insertCell(-1),"$isbu")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.i(q.insertCell(-1),"$isbu").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.h(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.i(q.insertCell(-1),"$isbu")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.i(q.insertCell(-1),"$isbu")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.i(q.insertCell(-1),"$isbu").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kn(a,y,!1,"../resources/SnowTop.png")},
kq:function(a){P.hZ(C.u,new B.kr(a))},
ko:{"^":"u:37;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.j(-0.05*C.c.U(this.b.scrollTop))+"px"
z.top=y}},
kr:{"^":"u:38;a",
$1:function(a){H.i(a,"$isaV")
P.d9(C.c.dA(this.a.gfN(),2)+" fps")}}}],["","",,S,{"^":"",
eU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
B.kp("Test 036",H.d([],[P.o]),"Test of the texture layout cover technique.")
z=document.getElementById("threeDart")
if(z==null)H.r(P.p("Failed to find an element with the identifier, threeDart."))
y=E.hX(z,!0,!0,!0,!1)
x=new U.dy()
w=U.ac
x.b1(w)
x.av(x.gek(),x.geI())
x.e=null
x.f=V.aK()
x.r=0
v=y.r
u=new U.ig()
t=U.cx()
t.scd(0,!0)
t.sc3(6.283185307179586)
t.sc5(0)
t.sa1(0,0)
t.sc4(100)
t.sM(0)
t.sbS(0.5)
u.b=t
t=t.gq()
t.toString
s={func:1,ret:-1,args:[D.l]}
r=H.b(u.gaA(),s)
C.a.h(t.a,r)
t=U.cx()
t.scd(0,!0)
t.sc3(6.283185307179586)
t.sc5(0)
t.sa1(0,0)
t.sc4(100)
t.sM(0)
t.sbS(0.5)
u.c=t
C.a.h(t.gq().a,r)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
q=new X.at(!1,!1,!1)
p=u.d
u.d=q
t=[X.at]
r=new D.D("modifiers",p,q,u,t)
r.b=!0
u.I(r)
r=u.f
if(r!==!1){u.f=!1
r=new D.D("invertX",r,!1,u,[P.a4])
r.b=!0
u.I(r)}r=u.r
if(r!==!1){u.r=!1
r=new D.D("invertY",r,!1,u,[P.a4])
r.b=!0
u.I(r)}u.aO(v)
x.h(0,u)
v=y.r
u=new U.ie()
r=U.cx()
r.scd(0,!0)
r.sc3(6.283185307179586)
r.sc5(0)
r.sa1(0,0)
r.sc4(100)
r.sM(0)
r.sbS(0.2)
u.b=r
r=r.gq()
r.toString
o=H.b(u.gaA(),s)
C.a.h(r.a,o)
u.c=null
u.d=!1
u.e=2.5
u.f=2
u.r=4
u.y=!1
u.x=!1
u.z=0
u.Q=null
u.ch=0
u.cx=null
u.cy=null
q=new X.at(!0,!1,!1)
p=u.c
u.c=q
r=new D.D("modifiers",p,q,u,t)
r.b=!0
u.I(r)
u.aO(v)
x.h(0,u)
v=y.r
u=new U.ih()
u.c=0.01
u.d=0
u.e=0
q=new X.at(!1,!1,!1)
u.b=q
t=new D.D("modifiers",null,q,u,t)
t.b=!0
u.I(t)
u.aO(v)
x.h(0,u)
x.h(0,U.dm(V.as(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=X.dN(2000,1.0471975511965976,x,0.1)
m=new X.f4()
m.a=800
m.b=600
m.c=800
m.d=600
m.e=!0
m.y=T.dY(0,null)
v=new V.a5(0,0,0,1)
m.z=v
m.Q=!0
m.ch=2000
m.cx=!0
m.cy=V.aM(0,0,1,1)
u=new V.a5(0,0,0,0)
if(!v.u(0,u))m.z=u
l=E.dw(null,!0,null,"",null,null)
l.sbq(0,F.kv(30,1,15,0.5))
k=new O.h_()
v=O.c4(V.ag)
k.e=v
v.av(k.gem(),k.gen())
v=new O.aS(k,"emission")
v.c=C.b
v.f=new V.Y(0,0,0)
k.f=v
v=new O.aS(k,"ambient")
v.c=C.b
v.f=new V.Y(0,0,0)
k.r=v
v=new O.aS(k,"diffuse")
v.c=C.b
v.f=new V.Y(0,0,0)
k.x=v
v=new O.aS(k,"invDiffuse")
v.c=C.b
v.f=new V.Y(0,0,0)
k.y=v
v=new O.h5(k,"specular")
v.c=C.b
v.f=new V.Y(0,0,0)
v.ch=100
k.z=v
v=new O.h2(k,"bump")
v.c=C.b
k.Q=v
k.ch=null
v=new O.aS(k,"reflect")
v.c=C.b
v.f=new V.Y(0,0,0)
k.cx=v
v=new O.h4(k,"refract")
v.c=C.b
v.f=new V.Y(0,0,0)
v.ch=1
k.cy=v
v=new O.h1(k,"alpha")
v.c=C.b
v.f=1
k.db=v
v=new D.fK()
v.b1(D.V)
v.e=H.d([],[D.c7])
v.f=H.d([],[D.hj])
v.r=H.d([],[D.hH])
v.x=H.d([],[D.hT])
v.y=H.d([],[D.hU])
v.z=H.d([],[D.hV])
v.Q=null
v.ch=null
v.cg(v.gel(),v.geH(),v.geJ())
k.dx=v
u=v.Q
if(u==null){u=D.C()
v.Q=u
v=u}else v=u
u=H.b(k.geU(),s)
C.a.h(v.a,u)
u=k.dx
v=u.ch
if(v==null){v=D.C()
u.ch=v}u=H.b(k.gaj(),s)
C.a.h(v.a,u)
k.dy=null
u=k.dx
v=U.dm(V.dK(new V.W(0,0,0),new V.F(0,1,0),new V.F(0,-1,-1)))
j=new V.Y(1,1,1)
t=new D.c7()
t.c=new V.Y(1,1,1)
t.a=new V.F(0,0,1)
p=t.b
t.b=v
v=v.gq()
v.toString
r=H.b(t.gdS(),s)
C.a.h(v.a,r)
w=new D.D("mover",p,t.b,t,[w])
w.b=!0
t.ax(w)
if(!t.c.u(0,j)){p=t.c
t.c=j
w=new D.D("color",p,j,t,[V.Y])
w.b=!0
t.ax(w)}u.h(0,t)
w=k.r
w.sag(0,new V.Y(0,0,1))
w=k.x
w.sag(0,new V.Y(0,1,0))
w=k.z
w.sag(0,new V.Y(1,0,0))
w=k.z
if(w.c===C.b){w.c=C.f
w.br()
w.bH(100)
v=w.a
v.a=null
v.N(null)}w.bH(10)
i=new M.ft()
w=O.c4(E.az)
i.d=w
w.av(i.gep(),i.geq())
i.e=null
i.f=null
i.r=null
i.x=null
i.scS(null)
i.saX(0,null)
i.saY(null)
i.scS(n)
i.saY(k)
i.saX(0,m)
i.d.h(0,l)
h=new V.a5(0,0,0,1)
g=new O.hO()
g.a=h
w=new D.D("backColor",null,h,g,[V.a5])
w.b=!0
g.N(w)
g.b=null
w=O.c4(O.aU)
g.c=w
w.av(g.gev(),g.gew())
g.d=0
g.e=null
for(w=[P.a4],f=0;f<3;++f){e=f*0.3333333333333333
for(d=0;d<3;++d){v=g.c
u=m.y
t=V.aM(e,d*0.3333333333333333,0.3333333333333333,0.3333333333333333)
r=new O.aU()
r.saa(u)
r.scU(null)
r.scj(0,null)
r.scX(0,t)
if(r.e!==!1){r.e=!1
u=new D.D("flip",!0,!1,r,w)
u.b=!0
t=r.f
if(!(t==null))t.w(u)}r.f=null
v.toString
u=H.aI(v,"a9",0)
H.B(r,u)
t=[u]
if(v.bE(H.d([r],t))){o=v.a
c=o.length
C.a.h(o,r)
u=H.v(H.d([r],t),"$isc",[u],"$asc")
v=v.c
if(v!=null)v.$2(c,u)}}}w=g.c
v=O.hQ(null,null,!1,null,null)
v.saa(m.y)
w.h(0,v)
b=new M.fg()
a=new X.fC()
p=b.a
b.a=a
w=a.gq()
w.toString
v=H.b(b.gR(),s)
C.a.h(w.a,v)
w=new D.D("camera",p,b.a,b,[X.c3])
w.b=!0
b.V(w)
b.saX(0,null)
b.saY(null)
w=E.dw(null,!0,null,"",null,null)
a0=F.dS()
v=a0.a
u=new V.F(-1,-1,1)
u=u.v(0,Math.sqrt(u.A(u)))
a1=v.b7(new V.bn(1,2,4,6),new V.a5(1,0,0,1),new V.W(-1,-1,0),new V.O(0,1),u,null)
v=a0.a
u=new V.F(1,-1,1)
u=u.v(0,Math.sqrt(u.A(u)))
a2=v.b7(new V.bn(0,3,4,6),new V.a5(0,0,1,1),new V.W(1,-1,0),new V.O(1,1),u,null)
v=a0.a
u=new V.F(1,1,1)
u=u.v(0,Math.sqrt(u.A(u)))
a3=v.b7(new V.bn(0,2,5,6),new V.a5(0,1,0,1),new V.W(1,1,0),new V.O(1,0),u,null)
v=a0.a
u=new V.F(-1,1,1)
u=u.v(0,Math.sqrt(u.A(u)))
a4=v.b7(new V.bn(0,2,4,7),new V.a5(1,1,0,1),new V.W(-1,1,0),new V.O(0,0),u,null)
a0.d.fw(H.d([a1,a2,a3,a4],[F.ai]))
a0.ao()
w.sbq(0,a0)
b.d=w
b.e=null
b.saY(g)
b.saX(0,X.cz(!0,!0,!1,new V.a5(0,0,0,1),2000,null,0))
w=M.aw
v=H.d([i,b],[w])
u=new M.fe()
u.b1(w)
u.e=!1
u.f=null
u.av(u.geK(),u.geL())
u.bK(0,v)
w=y.d
if(w!==u){if(w!=null){w=w.gq()
w.toString
v=H.b(y.gco(),s)
C.a.L(w.a,v)}y.d=u
w=u.gq()
w.toString
s=H.b(y.gco(),s)
C.a.h(w.a,s)
y.dQ()}B.kq(y)}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dB.prototype
return J.dA.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.dC.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.bM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.bX=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.bM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.d4=function(a){if(a==null)return a
if(a.constructor==Array)return J.bM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.k4=function(a){if(typeof a=="number")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ci.prototype
return a}
J.k5=function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ci.prototype
return a}
J.bY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).u(a,b)}
J.eZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k4(a).ac(a,b)}
J.da=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.k5(a).i(a,b)}
J.f_=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ke(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bX(a).k(a,b)}
J.f0=function(a,b,c,d){return J.bY(a).cN(a,b,c,d)}
J.cr=function(a,b,c){return J.bX(a).fF(a,b,c)}
J.db=function(a,b){return J.d4(a).D(a,b)}
J.f1=function(a,b){return J.d4(a).J(a,b)}
J.aJ=function(a){return J.L(a).gS(a)}
J.c0=function(a){return J.d4(a).gW(a)}
J.b7=function(a){return J.bX(a).gl(a)}
J.al=function(a){return J.L(a).j(a)}
var $=I.p
C.k=W.cw.prototype
C.m=W.fh.prototype
C.v=J.n.prototype
C.a=J.bM.prototype
C.w=J.dA.prototype
C.h=J.dB.prototype
C.x=J.dC.prototype
C.c=J.bN.prototype
C.j=J.cb.prototype
C.E=J.bO.prototype
C.F=W.hc.prototype
C.p=J.hi.prototype
C.G=P.cN.prototype
C.l=J.ci.prototype
C.q=W.bB.prototype
C.r=W.iw.prototype
C.t=new P.hf()
C.i=new P.jh()
C.b=new A.c5(0,"ColorSourceType.None")
C.f=new A.c5(1,"ColorSourceType.Solid")
C.d=new A.c5(2,"ColorSourceType.Texture2D")
C.e=new A.c5(3,"ColorSourceType.TextureCube")
C.u=new P.bb(5e6)
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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

C.A=function(getTagFallback) {
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
C.B=function() {
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
C.C=function(hooks) {
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
C.D=function(hooks) {
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
$.b8=null
$.de=null
$.cY=!1
$.eR=null
$.eL=null
$.eX=null
$.cn=null
$.cp=null
$.d5=null
$.b0=null
$.bE=null
$.bF=null
$.cZ=!1
$.P=C.i
$.dt=null
$.ds=null
$.dr=null
$.dq=null
$.m=V.h6()
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
I.$lazy(y,x,w)}})(["dp","$get$dp",function(){return H.eQ("_$dart_dartClosure")},"cD","$get$cD",function(){return H.eQ("_$dart_js")},"e2","$get$e2",function(){return H.ax(H.ch({
toString:function(){return"$receiver$"}}))},"e3","$get$e3",function(){return H.ax(H.ch({$method$:null,
toString:function(){return"$receiver$"}}))},"e4","$get$e4",function(){return H.ax(H.ch(null))},"e5","$get$e5",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e9","$get$e9",function(){return H.ax(H.ch(void 0))},"ea","$get$ea",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.ax(H.e8(null))},"e6","$get$e6",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.ax(H.e8(void 0))},"eb","$get$eb",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cV","$get$cV",function(){return P.ix()},"bG","$get$bG",function(){return[]},"dn","$get$dn",function(){return{}},"en","$get$en",function(){return Z.aj(0)},"el","$get$el",function(){return Z.aj(511)},"aq","$get$aq",function(){return Z.aj(1)},"aD","$get$aD",function(){return Z.aj(2)},"aC","$get$aC",function(){return Z.aj(4)},"aE","$get$aE",function(){return Z.aj(8)},"aF","$get$aF",function(){return Z.aj(16)},"bz","$get$bz",function(){return Z.aj(32)},"bA","$get$bA",function(){return Z.aj(64)},"em","$get$em",function(){return Z.aj(96)},"aY","$get$aY",function(){return Z.aj(128)},"aB","$get$aB",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.au]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.I,[P.c,E.az]]},{func:1,ret:P.H,args:[F.af]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:P.H,args:[D.l]},{func:1,ret:-1,args:[P.I,[P.c,O.aU]]},{func:1,ret:-1,args:[P.I,[P.c,V.ag]]},{func:1,ret:-1,args:[P.I,[P.c,M.aw]]},{func:1,ret:-1,args:[P.I,[P.c,U.ac]]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.o,args:[P.I]},{func:1,ret:P.w},{func:1,args:[,]},{func:1,ret:-1,args:[P.I,[P.c,D.V]]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:W.a0,args:[W.J]},{func:1,ret:P.a4,args:[P.w,P.w]},{func:1,ret:P.a4,args:[W.J]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aG,,],args:[,]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:V.W,args:[P.w]},{func:1,ret:P.H,args:[F.ai,P.w,P.w]},{func:1,ret:P.a4,args:[[P.c,D.V]]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,args:[P.o]},{func:1,ret:P.H,args:[W.aa]},{func:1,ret:P.H,args:[P.aV]},{func:1,args:[,P.o]},{func:1,ret:P.H,args:[P.S]}]
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
if(x==y)H.ku(d||a)
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
Isolate.d2=a.d2
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
if(typeof dartMainRunner==="function")dartMainRunner(S.eU,[])
else S.eU([])})})()
//# sourceMappingURL=test.dart.js.map
