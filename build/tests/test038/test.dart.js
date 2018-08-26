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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d6(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d7=function(){}
var dart=[["","",,H,{"^":"",lx:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ci:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.da==null){H.ki()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.er("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cA()]
if(v!=null)return v
v=H.kn(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cA(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
t:function(a,b){return a===b},
gO:function(a){return H.bi(a)},
i:["dF",function(a){return"Instance of '"+H.aR(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
fQ:{"^":"m;",
i:function(a){return String(a)},
gO:function(a){return a?519018:218159},
$isX:1},
dK:{"^":"m;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0},
$isF:1},
cB:{"^":"m;",
gO:function(a){return 0},
i:["dG",function(a){return String(a)}]},
hr:{"^":"cB;"},
cX:{"^":"cB;"},
bK:{"^":"cB;",
i:function(a){var z=a[$.$get$dv()]
if(z==null)return this.dG(a)
return"JavaScript function for "+H.h(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscw:1},
bJ:{"^":"m;$ti",
h:function(a,b){H.C(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.ad("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.q(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
bI:function(a,b){var z,y
H.x(b,"$isc",[H.y(a,0)],"$asc")
if(!!a.fixed$length)H.q(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.b7(a))}},
V:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a0(z,y,H.h(a[y]))
return z.join(b)},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
gc1:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fO())},
ad:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cx(a,"[","]")},
gS:function(a){return new J.al(a,a.length,0,[H.y(a,0)])},
gO:function(a){return H.bi(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bY(b,"newLength",null))
if(b<0)throw H.j(P.bj(b,0,null,"newLength",null))
a.length=b},
a0:function(a,b,c){H.a2(b)
H.C(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bS(a,b))
if(b>=a.length||b<0)throw H.j(H.bS(a,b))
a[b]=c},
$isc:1,
$ise:1,
q:{
fP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bj(a,0,4294967295,"length",null))
return J.dH(new Array(a),b)},
dH:function(a,b){return J.bd(H.f(a,[b]))},
bd:function(a){H.bV(a)
a.fixed$length=Array
return a}}},
lw:{"^":"bJ;$ti"},
al:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c9:{"^":"m;",
he:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.ad(""+a+".toInt()"))},
c0:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.ad(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ad(""+a+".round()"))},
dr:function(a,b){var z,y
if(b>20)throw H.j(P.bj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){return a&0x1FFFFFFF},
dB:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cH(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cH(a,b)},
cH:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.ad("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
cF:function(a,b){var z
if(a>0)z=this.eV(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eV:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.j(H.cg(b))
return a<b},
$ist:1,
$isR:1},
dJ:{"^":"c9;",$isM:1},
dI:{"^":"c9;"},
cz:{"^":"m;",
e0:function(a,b){if(b>=a.length)throw H.j(H.bS(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.S(b)
if(typeof b!=="string")throw H.j(P.bY(b,null,null))
return a+b},
ce:function(a,b,c){H.a2(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cO(b,null,null))
if(c>a.length)throw H.j(P.cO(c,null,null))
return a.substring(b,c)},
cd:function(a,b){return this.ce(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fV:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a4:function(a,b){return this.fV(a,b," ")},
ft:function(a,b,c){if(c>a.length)throw H.j(P.bj(c,0,a.length,null,null))
return H.kB(a,b,c)},
i:function(a){return a},
gO:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ishp:1,
$isp:1}}],["","",,H,{"^":"",
fO:function(){return new P.hQ("No element")},
fB:{"^":"c;"},
h0:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bU(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.b7(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
h6:{"^":"c;a,b,$ti",
gS:function(a){return new H.h7(J.bX(this.a),this.b,this.$ti)},
gl:function(a){return J.b5(this.a)},
C:function(a,b){return this.b.$1(J.df(this.a,b))},
$asc:function(a,b){return[b]}},
h7:{"^":"cy;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascy:function(a,b){return[b]}},
ix:{"^":"c;a,b,$ti",
gS:function(a){return new H.iy(J.bX(this.a),this.b,this.$ti)}},
iy:{"^":"cy;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c6:{"^":"a;$ti"}}],["","",,H,{"^":"",
ka:function(a){return init.types[H.a2(a)]},
kl:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isA},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.j(H.cg(a))
return z},
bi:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.J(a).$iscX){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.e0(w,0)===36)w=C.h.cd(w,1)
r=H.db(H.bV(H.aN(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
aa:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hz:function(a){return a.b?H.aa(a).getUTCFullYear()+0:H.aa(a).getFullYear()+0},
hx:function(a){return a.b?H.aa(a).getUTCMonth()+1:H.aa(a).getMonth()+1},
ht:function(a){return a.b?H.aa(a).getUTCDate()+0:H.aa(a).getDate()+0},
hu:function(a){return a.b?H.aa(a).getUTCHours()+0:H.aa(a).getHours()+0},
hw:function(a){return a.b?H.aa(a).getUTCMinutes()+0:H.aa(a).getMinutes()+0},
hy:function(a){return a.b?H.aa(a).getUTCSeconds()+0:H.aa(a).getSeconds()+0},
hv:function(a){return a.b?H.aa(a).getUTCMilliseconds()+0:H.aa(a).getMilliseconds()+0},
n:function(a){throw H.j(H.cg(a))},
l:function(a,b){if(a==null)J.b5(a)
throw H.j(H.bS(a,b))},
bS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.a2(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.L(b,a,"index",null,z)
return P.cO(b,"index",null)},
cg:function(a){return new P.aI(!0,a,null,null)},
k1:function(a){if(typeof a!=="number")throw H.j(H.cg(a))
return a},
j:function(a){var z
if(a==null)a=new P.dT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f5})
z.name=""}else z.toString=H.f5
return z},
f5:function(){return J.a9(this.dartException)},
q:function(a){throw H.j(a)},
z:function(a){throw H.j(P.b7(a))},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cF(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cD(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dS(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ea()
u=$.$get$eb()
t=$.$get$ec()
s=$.$get$ed()
r=$.$get$eh()
q=$.$get$ei()
p=$.$get$ef()
$.$get$ee()
o=$.$get$ek()
n=$.$get$ej()
m=v.a3(y)
if(m!=null)return z.$1(H.cD(H.S(y),m))
else{m=u.a3(y)
if(m!=null){m.method="call"
return z.$1(H.cD(H.S(y),m))}else{m=t.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=r.a3(y)
if(m==null){m=q.a3(y)
if(m==null){m=p.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=o.a3(y)
if(m==null){m=n.a3(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dS(H.S(y),m))}}return z.$1(new H.ii(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e1()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e1()
return a},
b3:function(a){var z
if(a==null)return new H.eI(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eI(a)},
k8:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a0(0,a[y],a[x])}return b},
kk:function(a,b,c,d,e,f){H.i(a,"$iscw")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.r("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var z
H.a2(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kk)
a.$identity=z
return z},
fo:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$ise){z.$reflectionInfo=d
x=H.hB(z).r}else x=d
w=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ap
if(typeof u!=="number")return u.B()
$.ap=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dt(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ka,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dl:H.cp
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dt(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fl:function(a,b,c,d){var z=H.cp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dt:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fl(y,!w,z,b)
if(y===0){w=$.ap
if(typeof w!=="number")return w.B()
$.ap=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.bZ("self")
$.b6=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ap
if(typeof w!=="number")return w.B()
$.ap=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.bZ("self")
$.b6=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fm:function(a,b,c,d){var z,y
z=H.cp
y=H.dl
switch(b?-1:a){case 0:throw H.j(H.hJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fn:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.bZ("self")
$.b6=z}y=$.dk
if(y==null){y=H.bZ("receiver")
$.dk=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ap
if(typeof y!=="number")return y.B()
$.ap=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ap
if(typeof y!=="number")return y.B()
$.ap=y+1
return new Function(z+y+"}")()},
d6:function(a,b,c,d,e,f,g){var z,y
z=J.bd(H.bV(b))
H.a2(c)
y=!!J.J(d).$ise?J.bd(d):d
return H.fo(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.at(a,"String"))},
ks:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.at(a,"num"))},
eV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.at(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.at(a,"int"))},
f2:function(a,b){throw H.j(H.at(a,H.S(b).substring(3)))},
ku:function(a,b){var z=J.bU(b)
throw H.j(H.fi(a,z.ce(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.f2(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.ku(a,b)},
bV:function(a){if(a==null)return a
if(!!J.J(a).$ise)return a
throw H.j(H.at(a,"List"))},
km:function(a,b){if(a==null)return a
if(!!J.J(a).$ise)return a
if(J.J(a)[b])return a
H.f2(a,b)},
eW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a2(z)]
else return a.$S()}return},
bT:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eW(J.J(a))
if(z==null)return!1
y=H.eZ(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d2)return a
$.d2=!0
try{if(H.bT(a,b))return a
z=H.bW(b)
y=H.at(a,z)
throw H.j(y)}finally{$.d2=!1}},
d8:function(a,b){if(a!=null&&!H.d5(a,b))H.q(H.at(a,H.bW(b)))
return a},
eQ:function(a){var z
if(a instanceof H.u){z=H.eW(J.J(a))
if(z!=null)return H.bW(z)
return"Closure"}return H.aR(a)},
kC:function(a){throw H.j(new P.ft(H.S(a)))},
eX:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
mF:function(a,b,c){return H.b4(a["$as"+H.h(c)],H.aN(b))},
bC:function(a,b,c,d){var z
H.S(c)
H.a2(d)
z=H.b4(a["$as"+H.h(c)],H.aN(b))
return z==null?null:z[d]},
aM:function(a,b,c){var z
H.S(b)
H.a2(c)
z=H.b4(a["$as"+H.h(b)],H.aN(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.a2(b)
z=H.aN(a)
return z==null?null:z[b]},
bW:function(a){var z=H.aO(a,null)
return z},
aO:function(a,b){var z,y
H.x(b,"$ise",[P.p],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.db(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.h(b[y])}if('func' in a)return H.jS(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.p]
H.x(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.h.B(t,b[r])
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
for(z=H.k7(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
db:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$ise",[P.p],"$ase")
if(a==null)return""
z=new P.bQ("")
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
y=J.J(a)
if(y[b]==null)return!1
return H.eT(H.b4(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.S(b)
H.bV(c)
H.S(d)
if(a==null)return a
z=H.b_(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.db(c,0,null)
throw H.j(H.at(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eT:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
mD:function(a,b,c){return a.apply(b,H.b4(J.J(b)["$as"+H.h(c)],H.aN(b)))},
f_:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.f_(z)}return!1},
d5:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.f_(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d5(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bT(a,b)}y=J.J(a).constructor
x=H.aN(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d5(a,b))throw H.j(H.at(a,H.bW(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"ba" in y.prototype))return!1
w=y.prototype["$as"+"ba"]
v=H.b4(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bW(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eT(H.b4(r,z),b,u,d)},
eZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kr(m,b,l,d)},
kr:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mE:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
kn:function(a){var z,y,x,w,v,u
z=H.S($.eY.$1(a))
y=$.ch[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.S($.eS.$2(a,z))
if(z!=null){y=$.ch[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ck(x)
$.ch[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cj[z]=x
return x}if(v==="-"){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f1(a,x)
if(v==="*")throw H.j(P.er(z))
if(init.leafTags[z]===true){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f1(a,x)},
f1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dc(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck:function(a){return J.dc(a,!1,null,!!a.$isA)},
kq:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ck(z)
else return J.dc(z,c,null,null)},
ki:function(){if(!0===$.da)return
$.da=!0
H.kj()},
kj:function(){var z,y,x,w,v,u,t,s
$.ch=Object.create(null)
$.cj=Object.create(null)
H.ke()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f3.$1(v)
if(u!=null){t=H.kq(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ke:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.aZ(C.y,H.aZ(C.D,H.aZ(C.n,H.aZ(C.n,H.aZ(C.C,H.aZ(C.z,H.aZ(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eY=new H.kf(v)
$.eS=new H.kg(u)
$.f3=new H.kh(t)},
aZ:function(a,b){return a(b)||b},
kB:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hA:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hB:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bd(z)
y=z[0]
x=z[1]
return new H.hA(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i5:{"^":"a;a,b,c,d,e,f",
a3:function(a){var z,y,x
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
q:{
as:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.p])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eg:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hn:{"^":"a_;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dS:function(a,b){return new H.hn(a,b==null?null:b.method)}}},
fR:{"^":"a_;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
q:{
cD:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fR(a,y,z?null:b.receiver)}}},
ii:{"^":"a_;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kD:{"^":"u:16;a",
$1:function(a){if(!!J.J(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eI:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aR(this).trim()+"'"},
gdu:function(){return this},
$iscw:1,
gdu:function(){return this}},
e5:{"^":"u;"},
hR:{"^":"e5;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
co:{"^":"e5;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gO:function(a){var z,y
z=this.c
if(z==null)y=H.bi(this.a)
else y=typeof z!=="object"?J.aH(z):H.bi(z)
return(y^H.bi(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.aR(z)+"'")},
q:{
cp:function(a){return a.a},
dl:function(a){return a.c},
bZ:function(a){var z,y,x,w,v
z=new H.co("self","target","receiver","name")
y=J.bd(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i6:{"^":"a_;a",
i:function(a){return this.a},
q:{
at:function(a,b){return new H.i6("TypeError: "+H.h(P.c5(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
fh:{"^":"a_;a",
i:function(a){return this.a},
q:{
fi:function(a,b){return new H.fh("CastError: "+H.h(P.c5(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
hI:{"^":"a_;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
q:{
hJ:function(a){return new H.hI(a)}}},
cC:{"^":"h4;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gap:function(a){return new H.fW(this,[H.y(this,0)])},
fu:function(a,b){var z=this.b
if(z==null)return!1
return this.e3(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.fH(b)},
fH:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cz(z,J.aH(a)&0x3ffffff)
x=this.d9(y,a)
if(x<0)return
return y[x].b},
a0:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.by()
this.b=z}this.cl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.by()
this.c=y}this.cl(y,b,c)}else{x=this.d
if(x==null){x=this.by()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.cz(x,w)
if(v==null)this.bF(x,w,[this.bz(b,c)])
else{u=this.d9(v,b)
if(u>=0)v[u].b=c
else v.push(this.bz(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.b7(this))
z=z.c}},
cl:function(a,b,c){var z
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
z=this.b_(a,b)
if(z==null)this.bF(a,b,this.bz(b,c))
else z.b=c},
ec:function(){this.r=this.r+1&67108863},
bz:function(a,b){var z,y
z=new H.fV(H.C(a,H.y(this,0)),H.C(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ec()
return z},
d9:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.dN(this)},
b_:function(a,b){return a[b]},
cz:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
e6:function(a,b){delete a[b]},
e3:function(a,b){return this.b_(a,b)!=null},
by:function(){var z=Object.create(null)
this.bF(z,"<non-identifier-key>",z)
this.e6(z,"<non-identifier-key>")
return z},
$isdL:1},
fV:{"^":"a;a,b,0c,0d"},
fW:{"^":"fB;a,$ti",
gl:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.fX(z,z.r,this.$ti)
y.c=z.e
return y}},
fX:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kf:{"^":"u:16;a",
$1:function(a){return this.a(a)}},
kg:{"^":"u:37;a",
$2:function(a,b){return this.a(a,b)}},
kh:{"^":"u:32;a",
$1:function(a){return this.a(H.S(a))}}}],["","",,H,{"^":"",
k7:function(a){return J.dH(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bS(b,a))},
hl:{"^":"m;",$ismm:1,"%":"DataView;ArrayBufferView;cK|eC|eD|hk|eE|eF|aK"},
cK:{"^":"hl;",
gl:function(a){return a.length},
$isA:1,
$asA:I.d7},
hk:{"^":"eD;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$asc6:function(){return[P.t]},
$asv:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eF;",
$asc6:function(){return[P.M]},
$asv:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]},
$ise:1,
$ase:function(){return[P.M]}},
lI:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lJ:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lK:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lL:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lM:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lN:{"^":"aK;",
gl:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lO:{"^":"aK;",
gl:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eC:{"^":"cK+v;"},
eD:{"^":"eC+c6;"},
eE:{"^":"cK+v;"},
eF:{"^":"eE+c6;"}}],["","",,P,{"^":"",
iA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jZ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b0(new P.iC(z),1)).observe(y,{childList:true})
return new P.iB(z,y,x)}else if(self.setImmediate!=null)return P.k_()
return P.k0()},
ms:[function(a){self.scheduleImmediate(H.b0(new P.iD(H.b(a,{func:1,ret:-1})),0))},"$1","jZ",4,0,10],
mt:[function(a){self.setImmediate(H.b0(new P.iE(H.b(a,{func:1,ret:-1})),0))},"$1","k_",4,0,10],
mu:[function(a){H.b(a,{func:1,ret:-1})
P.jy(0,a)},"$1","k0",4,0,10],
e8:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aS]})
z=C.f.Y(a.a,1000)
return P.jz(z<0?0:z,b)},
jV:function(a,b){if(H.bT(a,{func:1,args:[P.a,P.ao]}))return b.h3(a,null,P.a,P.ao)
if(H.bT(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jU:function(){var z,y
for(;z=$.aY,z!=null;){$.bA=null
y=z.b
$.aY=y
if(y==null)$.bz=null
z.a.$0()}},
mC:[function(){$.d3=!0
try{P.jU()}finally{$.bA=null
$.d3=!1
if($.aY!=null)$.$get$d_().$1(P.eU())}},"$0","eU",0,0,3],
eP:function(a){var z=new P.ew(H.b(a,{func:1,ret:-1}))
if($.aY==null){$.bz=z
$.aY=z
if(!$.d3)$.$get$d_().$1(P.eU())}else{$.bz.b=z
$.bz=z}},
jY:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.eP(a)
$.bA=$.bz
return}y=new P.ew(a)
x=$.bA
if(x==null){y.b=z
$.bA=y
$.aY=y}else{y.b=x.b
x.b=y
$.bA=y
if(y.b==null)$.bz=y}},
kv:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.O
if(C.i===y){P.cf(null,null,C.i,a)
return}y.toString
P.cf(null,null,y,H.b(y.cL(a),z))},
i3:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aS]}
H.b(b,z)
y=$.O
if(y===C.i){y.toString
return P.e8(a,b)}x=y.cM(b,P.aS)
$.O.toString
return P.e8(a,H.b(x,z))},
ce:function(a,b,c,d,e){var z={}
z.a=d
P.jY(new P.jW(z,e))},
eN:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
eO:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
jX:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cf:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cL(d):c.fp(d,-1)
P.eP(d)},
iC:{"^":"u:13;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iB:{"^":"u:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iD:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iE:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eL:{"^":"a;a,0b,c",
dT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b0(new P.jB(this,b),0),a)
else throw H.j(P.ad("`setTimeout()` not found."))},
dU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b0(new P.jA(this,a,Date.now(),b),0),a)
else throw H.j(P.ad("Periodic timer."))},
$isaS:1,
q:{
jy:function(a,b){var z=new P.eL(!0,0)
z.dT(a,b)
return z},
jz:function(a,b){var z=new P.eL(!1,0)
z.dU(a,b)
return z}}},
jB:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jA:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dH(w,x)}z.c=y
this.d.$1(z)}},
aX:{"^":"a;0a,b,c,d,e,$ti",
fN:function(a){if(this.c!==6)return!0
return this.b.b.c8(H.b(this.d,{func:1,ret:P.X,args:[P.a]}),a.a,P.X,P.a)},
fG:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bT(z,{func:1,args:[P.a,P.ao]}))return H.d8(w.h8(z,a.a,a.b,null,y,P.ao),x)
else return H.d8(w.c8(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;cG:a<,b,0eN:c<,$ti",
dq:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jV(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.O,[c])
w=b==null?1:3
this.cm(new P.aX(x,w,a,b,[z,c]))
return x},
hd:function(a,b){return this.dq(a,null,b)},
cm:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isaX")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaE")
z=y.a
if(z<4){y.cm(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cf(null,null,z,H.b(new P.iS(this,a),{func:1,ret:-1}))}},
cB:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isaX")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaE")
y=u.a
if(y<4){u.cB(a)
return}this.a=y
this.c=u.c}z.a=this.b2(a)
y=this.b
y.toString
P.cf(null,null,y,H.b(new P.iX(z,this),{func:1,ret:-1}))}},
bD:function(){var z=H.i(this.c,"$isaX")
this.c=null
return this.b2(z)},
b2:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cr:function(a){var z,y,x,w
z=H.y(this,0)
H.d8(a,{futureOr:1,type:z})
y=this.$ti
x=H.b_(a,"$isba",y,"$asba")
if(x){z=H.b_(a,"$isaE",y,null)
if(z)P.ey(a,this)
else P.iT(a,this)}else{w=this.bD()
H.C(a,z)
this.a=4
this.c=a
P.bv(this,w)}},
bt:[function(a,b){var z
H.i(b,"$isao")
z=this.bD()
this.a=8
this.c=new P.ae(a,b)
P.bv(this,z)},function(a){return this.bt(a,null)},"hp","$2","$1","ge1",4,2,40],
$isba:1,
q:{
iT:function(a,b){var z,y,x
b.a=1
try{a.dq(new P.iU(b),new P.iV(b),null)}catch(x){z=H.aG(x)
y=H.b3(x)
P.kv(new P.iW(b,z,y))}},
ey:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaE")
if(z>=4){y=b.bD()
b.a=a.a
b.c=a.c
P.bv(b,y)}else{y=H.i(b.c,"$isaX")
b.a=2
b.c=a
a.cB(y)}},
bv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isae")
y=y.b
u=v.a
t=v.b
y.toString
P.ce(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bv(z.a,b)}y=z.a
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
P.ce(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.j_(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iZ(x,b,r).$0()}else if((y&2)!==0)new P.iY(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.J(y).$isba){if(y.a>=4){n=H.i(t.c,"$isaX")
t.c=null
b=t.b2(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ey(y,t)
return}}m=b.b
n=H.i(m.c,"$isaX")
m.c=null
b=m.b2(n)
y=x.a
u=x.b
if(!y){H.C(u,H.y(m,0))
m.a=4
m.c=u}else{H.i(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
iS:{"^":"u:2;a,b",
$0:function(){P.bv(this.a,this.b)}},
iX:{"^":"u:2;a,b",
$0:function(){P.bv(this.b,this.a.a)}},
iU:{"^":"u:13;a",
$1:function(a){var z=this.a
z.a=0
z.cr(a)}},
iV:{"^":"u:25;a",
$2:function(a,b){this.a.bt(a,H.i(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
iW:{"^":"u:2;a,b,c",
$0:function(){this.a.bt(this.b,this.c)}},
j_:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dl(H.b(w.d,{func:1}),null)}catch(v){y=H.aG(v)
x=H.b3(v)
if(this.d){w=H.i(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.J(z).$isba){if(z instanceof P.aE&&z.gcG()>=4){if(z.gcG()===8){w=this.b
w.b=H.i(z.geN(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hd(new P.j0(t),null)
w.a=!1}}},
j0:{"^":"u:30;a",
$1:function(a){return this.a}},
iZ:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.C(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.c8(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aG(t)
y=H.b3(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
iY:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isae")
w=this.c
if(w.fN(z)&&w.e!=null){v=this.b
v.b=w.fG(z)
v.a=!1}}catch(u){y=H.aG(u)
x=H.b3(u)
w=H.i(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
ew:{"^":"a;a,0b"},
cR:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aE(0,$.O,[P.M])
z.a=0
this.fK(new P.hT(z,this),!0,new P.hU(z,y),y.ge1())
return y}},
hT:{"^":"u;a,b",
$1:function(a){H.C(a,H.aM(this.b,"cR",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.aM(this.b,"cR",0)]}}},
hU:{"^":"u:2;a,b",
$0:function(){this.b.cr(this.a.a)}},
e2:{"^":"a;$ti"},
aS:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.h(this.a)},
$isa_:1},
jG:{"^":"a;",$ismr:1},
jW:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
jk:{"^":"jG;",
h9:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.O){a.$0()
return}P.eN(null,null,this,a,-1)}catch(x){z=H.aG(x)
y=H.b3(x)
P.ce(null,null,this,z,H.i(y,"$isao"))}},
ha:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.i===$.O){a.$1(b)
return}P.eO(null,null,this,a,b,-1,c)}catch(x){z=H.aG(x)
y=H.b3(x)
P.ce(null,null,this,z,H.i(y,"$isao"))}},
fp:function(a,b){return new P.jm(this,H.b(a,{func:1,ret:b}),b)},
cL:function(a){return new P.jl(this,H.b(a,{func:1,ret:-1}))},
cM:function(a,b){return new P.jn(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dl:function(a,b){H.b(a,{func:1,ret:b})
if($.O===C.i)return a.$0()
return P.eN(null,null,this,a,b)},
c8:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.O===C.i)return a.$1(b)
return P.eO(null,null,this,a,b,c,d)},
h8:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.O===C.i)return a.$2(b,c)
return P.jX(null,null,this,a,b,c,d,e,f)},
h3:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jm:{"^":"u;a,b,c",
$0:function(){return this.a.dl(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jl:{"^":"u:3;a,b",
$0:function(){return this.a.h9(this.b)}},
jn:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.ha(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fZ:function(a,b,c){H.bV(a)
return H.x(H.k8(a,new H.cC(0,0,[b,c])),"$isdL",[b,c],"$asdL")},
fY:function(a,b){return new H.cC(0,0,[a,b])},
h_:function(a,b,c,d){return new P.j6(0,0,[d])},
fN:function(a,b,c){var z,y
if(P.d4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bB()
C.a.h(y,a)
try{P.jT(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.e3(b,H.km(z,"$isc"),", ")+c
return y.charCodeAt(0)==0?y:y},
cx:function(a,b,c){var z,y,x
if(P.d4(a))return b+"..."+c
z=new P.bQ(b)
y=$.$get$bB()
C.a.h(y,a)
try{x=z
x.a=P.e3(x.gav(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gav()+c
y=z.gav()
return y.charCodeAt(0)==0?y:y},
d4:function(a){var z,y
for(z=0;y=$.$get$bB(),z<y.length;++z)if(a===y[z])return!0
return!1},
jT:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.h(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.D();t=s,s=r){r=z.gN(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dN:function(a){var z,y,x
z={}
if(P.d4(a))return"{...}"
y=new P.bQ("")
try{C.a.h($.$get$bB(),a)
x=y
x.a=x.gav()+"{"
z.a=!0
J.f9(a,new P.h5(z,y))
z=y
z.a=z.gav()+"}"}finally{z=$.$get$bB()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gav()
return z.charCodeAt(0)==0?z:z},
j6:{"^":"j1;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.eB(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d1()
this.b=z}return this.cp(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d1()
this.c=y}return this.cp(y,b)}else return this.dV(0,b)},
dV:function(a,b){var z,y,x
H.C(b,H.y(this,0))
z=this.d
if(z==null){z=P.d1()
this.d=z}y=this.cs(b)
x=z[y]
if(x==null)z[y]=[this.bs(b)]
else{if(this.cw(x,b)>=0)return!1
x.push(this.bs(b))}return!0},
T:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cC(this.c,b)
else return this.eI(0,b)},
eI:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e8(z,b)
x=this.cw(y,b)
if(x<0)return!1
this.cI(y.splice(x,1)[0])
return!0},
cp:function(a,b){H.C(b,H.y(this,0))
if(H.i(a[b],"$isd0")!=null)return!1
a[b]=this.bs(b)
return!0},
cC:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isd0")
if(z==null)return!1
this.cI(z)
delete a[b]
return!0},
cq:function(){this.r=this.r+1&67108863},
bs:function(a){var z,y
z=new P.d0(H.C(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cq()
return z},
cI:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cq()},
cs:function(a){return J.aH(a)&0x3ffffff},
e8:function(a,b){return a[this.cs(b)]},
cw:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
q:{
d1:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d0:{"^":"a;a,0b,0c"},
j7:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
eB:function(a,b,c){var z=new P.j7(a,b,[c])
z.c=a.e
return z}}},
j1:{"^":"hK;"},
cF:{"^":"j8;",$isc:1,$ise:1},
v:{"^":"a;$ti",
gS:function(a){return new H.h0(a,this.gl(a),0,[H.bC(this,a,"v",0)])},
C:function(a,b){return this.j(a,b)},
hg:function(a,b){var z,y,x
z=H.f([],[H.bC(this,a,"v",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.a0(z,y,this.j(a,y));++y}return z},
hf:function(a){return this.hg(a,!0)},
i:function(a){return P.cx(a,"[","]")}},
h4:{"^":"ac;"},
h5:{"^":"u:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
ac:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bC(this,a,"ac",0),H.bC(this,a,"ac",1)]})
for(z=J.bX(this.gap(a));z.D();){y=z.gN(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.b5(this.gap(a))},
i:function(a){return P.dN(a)},
$isa7:1},
hL:{"^":"a;$ti",
i:function(a){return P.cx(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dh("index"))
if(b<0)H.q(P.bj(b,0,null,"index",null))
for(z=P.eB(this,this.r,H.y(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
$isc:1},
hK:{"^":"hL;"},
j8:{"^":"a+v;"}}],["","",,P,{"^":"",
fE:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aR(a)+"'"},
h1:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fP(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a0(z,y,b)
return H.x(z,"$ise",[d],"$ase")},
h2:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gS(a);x.D();)C.a.h(y,H.C(x.gN(x),c))
if(b)return y
return H.x(J.bd(y),"$ise",z,"$ase")},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fE(a)},
r:function(a){return new P.ex(a)},
de:function(a){H.kt(a)},
X:{"^":"a;"},
"+bool":0,
au:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a&&this.b===b.b},
gO:function(a){var z=this.a
return(z^C.f.cF(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fu(H.hz(this))
y=P.bE(H.hx(this))
x=P.bE(H.ht(this))
w=P.bE(H.hu(this))
v=P.bE(H.hw(this))
u=P.bE(H.hy(this))
t=P.fv(H.hv(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fu:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bE:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"R;"},
"+double":0,
bF:{"^":"a;a",
a9:function(a,b){return C.f.a9(this.a,H.i(b,"$isbF").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bF))return!1
return this.a===b.a},
gO:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fA()
y=this.a
if(y<0)return"-"+new P.bF(0-y).i(0)
x=z.$1(C.f.Y(y,6e7)%60)
w=z.$1(C.f.Y(y,1e6)%60)
v=new P.fz().$1(y%1e6)
return""+C.f.Y(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
q:{
dB:function(a,b,c,d,e,f){return new P.bF(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fz:{"^":"u:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fA:{"^":"u:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
dT:{"^":"a_;",
i:function(a){return"Throw of null."}},
aI:{"^":"a_;a,b,c,d",
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbv()+y+x
if(!this.a)return w
v=this.gbu()
u=P.c5(this.b)
return w+v+": "+H.h(u)},
q:{
fb:function(a){return new P.aI(!1,null,null,a)},
bY:function(a,b,c){return new P.aI(!0,a,b,c)},
dh:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
dV:{"^":"aI;e,f,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
q:{
cO:function(a,b,c){return new P.dV(null,null,!0,a,b,"Value not in range")},
bj:function(a,b,c,d,e){return new P.dV(b,c,!0,a,d,"Invalid value")}}},
fL:{"^":"aI;e,l:f>,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){if(J.f6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
q:{
L:function(a,b,c,d,e){var z=H.a2(e!=null?e:J.b5(b))
return new P.fL(b,z,!0,a,c,"Index out of range")}}},
ij:{"^":"a_;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ad:function(a){return new P.ij(a)}}},
ih:{"^":"a_;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
er:function(a){return new P.ih(a)}}},
hQ:{"^":"a_;a",
i:function(a){return"Bad state: "+this.a}},
fq:{"^":"a_;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.c5(z))+"."},
q:{
b7:function(a){return new P.fq(a)}}},
ho:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa_:1},
e1:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa_:1},
ft:{"^":"a_;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ex:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
M:{"^":"R;"},
"+int":0,
c:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gS(this)
for(y=0;z.D();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.dh("index"))
if(b<0)H.q(P.bj(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.D();){x=z.gN(z)
if(b===y)return x;++y}throw H.j(P.L(b,this,"index",null,y))},
i:function(a){return P.fN(this,"(",")")}},
cy:{"^":"a;$ti"},
e:{"^":"a;$ti",$isc:1},
"+List":0,
a7:{"^":"a;$ti"},
F:{"^":"a;",
gO:function(a){return P.a.prototype.gO.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
R:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gO:function(a){return H.bi(this)},
i:function(a){return"Instance of '"+H.aR(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
p:{"^":"a;",$ishp:1},
"+String":0,
bQ:{"^":"a;av:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
e3:function(a,b,c){var z=J.bX(b)
if(!z.D())return a
if(c.length===0){do a+=H.h(z.gN(z))
while(z.D())}else{a+=H.h(z.gN(z))
for(;z.D();)a=a+c+H.h(z.gN(z))}return a}}}}],["","",,W,{"^":"",
cr:function(a,b){var z=document.createElement("canvas")
return z},
fC:function(a){H.i(a,"$isa4")
return"wheel"},
fM:function(a){var z,y,x
y=document.createElement("input")
z=H.i(y,"$isdG")
try{J.fa(z,a)}catch(x){H.aG(x)}return z},
cc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eA:function(a,b,c,d){var z,y
z=W.cc(W.cc(W.cc(W.cc(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eR:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.i)return a
return z.cM(a,b)},
a5:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kE:{"^":"cQ;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kF:{"^":"m;0l:length=","%":"AccessibleNodeList"},
kG:{"^":"a5;0U:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kH:{"^":"a5;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fg:{"^":"m;","%":";Blob"},
kN:{"^":"a5;0U:type}","%":"HTMLButtonElement"},
cq:{"^":"a5;",
bm:function(a,b,c){if(c!=null)return a.getContext(b,P.k2(c,null))
return a.getContext(b)},
dw:function(a,b){return this.bm(a,b,null)},
$iscq:1,
"%":"HTMLCanvasElement"},
dr:{"^":"m;",$isdr:1,"%":"CanvasRenderingContext2D"},
kP:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kR:{"^":"c2;0l:length=","%":"CSSPerspective"},
kS:{"^":"cu;0n:x=,0p:y=","%":"CSSPositionValue"},
kT:{"^":"c2;0n:x=,0p:y=","%":"CSSRotation"},
b8:{"^":"m;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kU:{"^":"c2;0n:x=,0p:y=","%":"CSSScale"},
fr:{"^":"iI;0l:length=",
dz:function(a,b){var z=a.getPropertyValue(this.cn(a,b))
return z==null?"":z},
cn:function(a,b){var z,y
z=$.$get$du()
y=z[b]
if(typeof y==="string")return y
y=this.eW(a,b)
z[b]=y
return y},
eW:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fw()+b
if(z in a)return z
return b},
eP:function(a,b,c,d){a.setProperty(b,c,d)},
gbN:function(a){return a.bottom},
gae:function(a){return a.height},
gaH:function(a){return a.left},
gaT:function(a){return a.right},
gaV:function(a){return a.top},
gah:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fs:{"^":"a;",
gaH:function(a){return this.dz(a,"left")}},
cu:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c2:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kV:{"^":"cu;0l:length=","%":"CSSTransformValue"},
kW:{"^":"c2;0n:x=,0p:y=","%":"CSSTranslation"},
kX:{"^":"cu;0l:length=","%":"CSSUnparsedValue"},
kY:{"^":"m;0l:length=","%":"DataTransferItemList"},
kZ:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
l_:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
l0:{"^":"fx;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fx:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
l1:{"^":"iK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.ab,P.R]]},
$asv:function(){return[[P.ab,P.R]]},
$isc:1,
$asc:function(){return[[P.ab,P.R]]},
$ise:1,
$ase:function(){return[[P.ab,P.R]]},
$asw:function(){return[[P.ab,P.R]]},
"%":"ClientRectList|DOMRectList"},
fy:{"^":"m;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gah(a))+" x "+H.h(this.gae(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.b_(b,"$isab",[P.R],"$asab")
if(!z)return!1
z=J.b2(b)
return a.left===z.gaH(b)&&a.top===z.gaV(b)&&this.gah(a)===z.gah(b)&&this.gae(a)===z.gae(b)},
gO:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gbN:function(a){return a.bottom},
gae:function(a){return a.height},
gaH:function(a){return a.left},
gaT:function(a){return a.right},
gaV:function(a){return a.top},
gah:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isab:1,
$asab:function(){return[P.R]},
"%":";DOMRectReadOnly"},
l2:{"^":"iM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.p]},
$asv:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
$asw:function(){return[P.p]},
"%":"DOMStringList"},
l3:{"^":"m;0l:length=","%":"DOMTokenList"},
iH:{"^":"cF;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.l(z,b)
return H.i(z[b],"$isa3")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var z=this.hf(this)
return new J.al(z,z.length,0,[H.y(z,0)])},
$asv:function(){return[W.a3]},
$asc:function(){return[W.a3]},
$ase:function(){return[W.a3]}},
a3:{"^":"K;",
gbR:function(a){return new W.iH(a,a.children)},
gb5:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.a9()
if(x<0)x=-x*0
if(typeof w!=="number")return w.a9()
if(w<0)w=-w*0
return new P.ab(z,y,x,w,[P.R])},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
l4:{"^":"a5;0U:type}","%":"HTMLEmbedElement"},
a6:{"^":"m;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a4:{"^":"m;",
cJ:["dE",function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(c!=null)this.dW(a,b,c,!1)}],
dW:function(a,b,c,d){return a.addEventListener(b,H.b0(H.b(c,{func:1,args:[W.a6]}),1),!1)},
$isa4:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;eG|eH|eJ|eK"},
b9:{"^":"fg;",$isb9:1,"%":"File"},
ln:{"^":"iR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b9]},
$asv:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$ise:1,
$ase:function(){return[W.b9]},
$asw:function(){return[W.b9]},
"%":"FileList"},
lo:{"^":"a4;0l:length=","%":"FileWriter"},
lr:{"^":"a5;0l:length=","%":"HTMLFormElement"},
bb:{"^":"m;",$isbb:1,"%":"Gamepad"},
ls:{"^":"cQ;0n:x=,0p:y=","%":"Gyroscope"},
lt:{"^":"m;0l:length=","%":"History"},
lu:{"^":"j3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.K]},
$asv:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$asw:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c7:{"^":"m;0cO:data=",$isc7:1,"%":"ImageData"},
dF:{"^":"a5;",$isdF:1,"%":"HTMLImageElement"},
dG:{"^":"a5;0U:type}",$isdG:1,"%":"HTMLInputElement"},
bf:{"^":"cU;",$isbf:1,"%":"KeyboardEvent"},
lz:{"^":"a5;0U:type}","%":"HTMLLinkElement"},
lA:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lB:{"^":"cQ;0n:x=,0p:y=","%":"Magnetometer"},
lD:{"^":"m;0l:length=","%":"MediaList"},
lE:{"^":"a4;",
cJ:function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.dE(a,b,c,!1)},
"%":"MessagePort"},
lF:{"^":"j9;",
j:function(a,b){return P.aF(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gap:function(a){var z=H.f([],[P.p])
this.J(a,new W.hh(z))
return z},
gl:function(a){return a.size},
$asac:function(){return[P.p,null]},
$isa7:1,
$asa7:function(){return[P.p,null]},
"%":"MIDIInputMap"},
hh:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lG:{"^":"ja;",
j:function(a,b){return P.aF(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gap:function(a){var z=H.f([],[P.p])
this.J(a,new W.hi(z))
return z},
gl:function(a){return a.size},
$asac:function(){return[P.p,null]},
$isa7:1,
$asa7:function(){return[P.p,null]},
"%":"MIDIOutputMap"},
hi:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"m;",$isbg:1,"%":"MimeType"},
lH:{"^":"jc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bg]},
$asv:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asw:function(){return[W.bg]},
"%":"MimeTypeArray"},
ar:{"^":"cU;",$isar:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iG:{"^":"cF;a",
gS:function(a){var z=this.a.childNodes
return new W.dC(z,z.length,-1,[H.bC(C.F,z,"w",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.l(z,b)
return z[b]},
$asv:function(){return[W.K]},
$asc:function(){return[W.K]},
$ase:function(){return[W.K]}},
K:{"^":"a4;",
i:function(a){var z=a.nodeValue
return z==null?this.dF(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hm:{"^":"je;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.K]},
$asv:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$asw:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
lQ:{"^":"a5;0U:type}","%":"HTMLOListElement"},
lR:{"^":"a5;0U:type}","%":"HTMLObjectElement"},
bh:{"^":"m;0l:length=",$isbh:1,"%":"Plugin"},
lV:{"^":"ji;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bh]},
$asv:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$ise:1,
$ase:function(){return[W.bh]},
$asw:function(){return[W.bh]},
"%":"PluginArray"},
m_:{"^":"m;0U:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
m0:{"^":"jo;",
j:function(a,b){return P.aF(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gap:function(a){var z=H.f([],[P.p])
this.J(a,new W.hH(z))
return z},
gl:function(a){return a.size},
$asac:function(){return[P.p,null]},
$isa7:1,
$asa7:function(){return[P.p,null]},
"%":"RTCStatsReport"},
hH:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m2:{"^":"a5;0U:type}","%":"HTMLScriptElement"},
m4:{"^":"a5;0l:length=","%":"HTMLSelectElement"},
cQ:{"^":"a4;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bk:{"^":"a4;",$isbk:1,"%":"SourceBuffer"},
m5:{"^":"eH;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asv:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asw:function(){return[W.bk]},
"%":"SourceBufferList"},
m6:{"^":"a5;0U:type}","%":"HTMLSourceElement"},
bl:{"^":"m;",$isbl:1,"%":"SpeechGrammar"},
m7:{"^":"jq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$asv:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asw:function(){return[W.bl]},
"%":"SpeechGrammarList"},
bm:{"^":"m;0l:length=",$isbm:1,"%":"SpeechRecognitionResult"},
m9:{"^":"jt;",
j:function(a,b){return a.getItem(H.S(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.p,P.p]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.f([],[P.p])
this.J(a,new W.hS(z))
return z},
gl:function(a){return a.length},
$asac:function(){return[P.p,P.p]},
$isa7:1,
$asa7:function(){return[P.p,P.p]},
"%":"Storage"},
hS:{"^":"u:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mb:{"^":"a5;0U:type}","%":"HTMLStyleElement"},
bn:{"^":"m;",$isbn:1,"%":"CSSStyleSheet|StyleSheet"},
bo:{"^":"a5;",$isbo:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bp:{"^":"a4;",$isbp:1,"%":"TextTrack"},
bq:{"^":"a4;",$isbq:1,"%":"TextTrackCue|VTTCue"},
mg:{"^":"jx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$asv:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asw:function(){return[W.bq]},
"%":"TextTrackCueList"},
mh:{"^":"eK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"TextTrackList"},
mi:{"^":"m;0l:length=","%":"TimeRanges"},
br:{"^":"m;",$isbr:1,"%":"Touch"},
aT:{"^":"cU;",$isaT:1,"%":"TouchEvent"},
mj:{"^":"jD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$asv:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asw:function(){return[W.br]},
"%":"TouchList"},
mk:{"^":"m;0l:length=","%":"TrackDefaultList"},
cU:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mn:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mp:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mq:{"^":"a4;0l:length=","%":"VideoTrackList"},
bu:{"^":"ar;",
gfA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.ad("deltaY is not supported"))},
gfz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.ad("deltaX is not supported"))},
$isbu:1,
"%":"WheelEvent"},
iz:{"^":"a4;",
eJ:function(a,b){return a.requestAnimationFrame(H.b0(H.b(b,{func:1,ret:-1,args:[P.R]}),1))},
e7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mv:{"^":"jI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$asv:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$ise:1,
$ase:function(){return[W.b8]},
$asw:function(){return[W.b8]},
"%":"CSSRuleList"},
mw:{"^":"fy;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.b_(b,"$isab",[P.R],"$asab")
if(!z)return!1
z=J.b2(b)
return a.left===z.gaH(b)&&a.top===z.gaV(b)&&a.width===z.gah(b)&&a.height===z.gae(b)},
gO:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gah:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
my:{"^":"jK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bb]},
$asv:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$asw:function(){return[W.bb]},
"%":"GamepadList"},
mz:{"^":"jM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.K]},
$asv:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$asw:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mA:{"^":"jO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$asv:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asw:function(){return[W.bm]},
"%":"SpeechRecognitionResultList"},
mB:{"^":"jQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.l(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$asv:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"StyleSheetList"},
iN:{"^":"cR;a,b,c,$ti",
fK:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
mx:{"^":"iN;a,b,c,$ti"},
iO:{"^":"e2;a,b,c,d,e,$ti",
f_:function(){var z=this.d
if(z!=null&&this.a<=0)J.f8(this.b,this.c,z,!1)},
q:{
W:function(a,b,c,d,e){var z=c==null?null:W.eR(new W.iP(c),W.a6)
z=new W.iO(0,a,b,z,!1,[e])
z.f_()
return z}}},
iP:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.i(a,"$isa6"))}},
w:{"^":"a;$ti",
gS:function(a){return new W.dC(a,this.gl(a),-1,[H.bC(this,a,"w",0)])}},
dC:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f7(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
iI:{"^":"m+fs;"},
iJ:{"^":"m+v;"},
iK:{"^":"iJ+w;"},
iL:{"^":"m+v;"},
iM:{"^":"iL+w;"},
iQ:{"^":"m+v;"},
iR:{"^":"iQ+w;"},
j2:{"^":"m+v;"},
j3:{"^":"j2+w;"},
j9:{"^":"m+ac;"},
ja:{"^":"m+ac;"},
jb:{"^":"m+v;"},
jc:{"^":"jb+w;"},
jd:{"^":"m+v;"},
je:{"^":"jd+w;"},
jh:{"^":"m+v;"},
ji:{"^":"jh+w;"},
jo:{"^":"m+ac;"},
eG:{"^":"a4+v;"},
eH:{"^":"eG+w;"},
jp:{"^":"m+v;"},
jq:{"^":"jp+w;"},
jt:{"^":"m+ac;"},
jw:{"^":"m+v;"},
jx:{"^":"jw+w;"},
eJ:{"^":"a4+v;"},
eK:{"^":"eJ+w;"},
jC:{"^":"m+v;"},
jD:{"^":"jC+w;"},
jH:{"^":"m+v;"},
jI:{"^":"jH+w;"},
jJ:{"^":"m+v;"},
jK:{"^":"jJ+w;"},
jL:{"^":"m+v;"},
jM:{"^":"jL+w;"},
jN:{"^":"m+v;"},
jO:{"^":"jN+w;"},
jP:{"^":"m+v;"},
jQ:{"^":"jP+w;"}}],["","",,P,{"^":"",
k5:function(a){var z,y
z=J.J(a)
if(!!z.$isc7){y=z.gcO(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
k4:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
aF:function(a){var z,y,x,w,v
if(a==null)return
z=P.fY(P.p,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.S(y[w])
z.a0(0,v,a[v])}return z},
k2:function(a,b){var z={}
a.J(0,new P.k3(z))
return z},
dA:function(){var z=$.dz
if(z==null){z=J.cm(window.navigator.userAgent,"Opera",0)
$.dz=z}return z},
fw:function(){var z,y
z=$.dw
if(z!=null)return z
y=$.dx
if(y==null){y=J.cm(window.navigator.userAgent,"Firefox",0)
$.dx=y}if(y)z="-moz-"
else{y=$.dy
if(y==null){y=!P.dA()&&J.cm(window.navigator.userAgent,"Trident/",0)
$.dy=y}if(y)z="-ms-"
else z=P.dA()?"-o-":"-webkit-"}$.dw=z
return z},
eM:{"^":"a;cO:a>,b,c",$isc7:1},
k3:{"^":"u:14;a",
$2:function(a,b){this.a[a]=b}},
fG:{"^":"cF;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.aM(z,"v",0)
x=W.a3
return new H.h6(new H.ix(z,H.b(new P.fH(),{func:1,ret:P.X,args:[y]}),[y]),H.b(new P.fI(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b5(this.gbx().a)},
j:function(a,b){var z=this.gbx()
return z.b.$1(J.df(z.a,b))},
gS:function(a){var z=P.h2(this.gbx(),!1,W.a3)
return new J.al(z,z.length,0,[H.y(z,0)])},
$asv:function(){return[W.a3]},
$asc:function(){return[W.a3]},
$ase:function(){return[W.a3]}},
fH:{"^":"u:26;",
$1:function(a){return!!J.J(H.i(a,"$isK")).$isa3}},
fI:{"^":"u:28;",
$1:function(a){return H.d(H.i(a,"$isK"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ez:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bP:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
t:function(a,b){var z,y,x
if(b==null)return!1
z=H.b_(b,"$isbP",[P.R],null)
if(!z)return!1
z=this.a
y=J.b2(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gO:function(a){var z,y
z=J.aH(this.a)
y=J.aH(this.b)
return P.ez(P.bw(P.bw(0,z),y))}},
jj:{"^":"a;$ti",
gaT:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.C(z+this.c,H.y(this,0))},
gbN:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.C(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b_(b,"$isab",[P.R],"$asab")
if(!z)return!1
z=this.a
y=J.b2(b)
x=y.gaH(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaV(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.C(z+this.c,w)===y.gaT(b)){if(typeof x!=="number")return x.B()
z=H.C(x+this.d,w)===y.gbN(b)}else z=!1}else z=!1}else z=!1
return z},
gO:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.C(x+this.d,v)
return P.ez(P.bw(P.bw(P.bw(P.bw(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cN:function(a,b){var z,y
H.x(b,"$isbP",[P.R],"$asbP")
z=b.a
y=this.a
if(typeof z!=="number")return z.dv()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dv()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ab:{"^":"jj;aH:a>,aV:b>,ah:c>,ae:d>,$ti"}}],["","",,P,{"^":"",l5:{"^":"N;0n:x=,0p:y=","%":"SVGFEBlendElement"},l6:{"^":"N;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},l7:{"^":"N;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},l8:{"^":"N;0n:x=,0p:y=","%":"SVGFECompositeElement"},l9:{"^":"N;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},la:{"^":"N;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lb:{"^":"N;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lc:{"^":"N;0n:x=,0p:y=","%":"SVGFEFloodElement"},ld:{"^":"N;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},le:{"^":"N;0n:x=,0p:y=","%":"SVGFEImageElement"},lf:{"^":"N;0n:x=,0p:y=","%":"SVGFEMergeElement"},lg:{"^":"N;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lh:{"^":"N;0n:x=,0p:y=","%":"SVGFEOffsetElement"},li:{"^":"N;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lj:{"^":"N;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lk:{"^":"N;0n:x=,0p:y=","%":"SVGFESpotLightElement"},ll:{"^":"N;0n:x=,0p:y=","%":"SVGFETileElement"},lm:{"^":"N;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lp:{"^":"N;0n:x=,0p:y=","%":"SVGFilterElement"},lq:{"^":"bc;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fK:{"^":"bc;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bc:{"^":"N;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lv:{"^":"bc;0n:x=,0p:y=","%":"SVGImageElement"},bL:{"^":"m;",$isbL:1,"%":"SVGLength"},ly:{"^":"j5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$ise:1,
$ase:function(){return[P.bL]},
$asw:function(){return[P.bL]},
"%":"SVGLengthList"},lC:{"^":"N;0n:x=,0p:y=","%":"SVGMaskElement"},bO:{"^":"m;",$isbO:1,"%":"SVGNumber"},lP:{"^":"jg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$ise:1,
$ase:function(){return[P.bO]},
$asw:function(){return[P.bO]},
"%":"SVGNumberList"},lU:{"^":"N;0n:x=,0p:y=","%":"SVGPatternElement"},lW:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lX:{"^":"m;0l:length=","%":"SVGPointList"},lY:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lZ:{"^":"fK;0n:x=,0p:y=","%":"SVGRectElement"},m3:{"^":"N;0U:type}","%":"SVGScriptElement"},ma:{"^":"jv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
$asw:function(){return[P.p]},
"%":"SVGStringList"},mc:{"^":"N;0U:type}","%":"SVGStyleElement"},N:{"^":"a3;",
gbR:function(a){return new P.fG(a,new W.iG(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},md:{"^":"bc;0n:x=,0p:y=","%":"SVGSVGElement"},hV:{"^":"bc;","%":"SVGTextPathElement;SVGTextContentElement"},mf:{"^":"hV;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bR:{"^":"m;",$isbR:1,"%":"SVGTransform"},ml:{"^":"jF;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[P.bR]},
$isc:1,
$asc:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$asw:function(){return[P.bR]},
"%":"SVGTransformList"},mo:{"^":"bc;0n:x=,0p:y=","%":"SVGUseElement"},j4:{"^":"m+v;"},j5:{"^":"j4+w;"},jf:{"^":"m+v;"},jg:{"^":"jf+w;"},ju:{"^":"m+v;"},jv:{"^":"ju+w;"},jE:{"^":"m+v;"},jF:{"^":"jE+w;"}}],["","",,P,{"^":"",kI:{"^":"m;0l:length=","%":"AudioBuffer"},dj:{"^":"a4;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},kJ:{"^":"iF;",
j:function(a,b){return P.aF(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gap:function(a){var z=H.f([],[P.p])
this.J(a,new P.fd(z))
return z},
gl:function(a){return a.size},
$asac:function(){return[P.p,null]},
$isa7:1,
$asa7:function(){return[P.p,null]},
"%":"AudioParamMap"},fd:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},fe:{"^":"dj;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},kK:{"^":"a4;0l:length=","%":"AudioTrackList"},ff:{"^":"a4;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kL:{"^":"dj;0U:type}","%":"BiquadFilterNode"},lS:{"^":"ff;0l:length=","%":"OfflineAudioContext"},lT:{"^":"fe;0U:type}","%":"Oscillator|OscillatorNode"},iF:{"^":"m+ac;"}}],["","",,P,{"^":"",cP:{"^":"m;",
hc:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc7)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k4(g))
return}if(!!z.$isdF)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.fb("Incorrect number or type of arguments"))},
hb:function(a,b,c,d,e,f,g){return this.hc(a,b,c,d,e,f,g,null,null,null)},
$iscP:1,
"%":"WebGLRenderingContext"},ie:{"^":"m;",$isie:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",m8:{"^":"js;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.L(b,a,null,null,null))
return P.aF(a.item(b))},
C:function(a,b){return this.j(a,b)},
$asv:function(){return[[P.a7,,,]]},
$isc:1,
$asc:function(){return[[P.a7,,,]]},
$ise:1,
$ase:function(){return[[P.a7,,,]]},
$asw:function(){return[[P.a7,,,]]},
"%":"SQLResultSetRowList"},jr:{"^":"m+v;"},js:{"^":"jr+w;"}}],["","",,O,{"^":"",af:{"^":"a;0a,0b,0c,0d,$ti",
aZ:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
bn:function(a,b,c){var z=H.aM(this,"af",0)
H.b(b,{func:1,ret:P.X,args:[[P.c,z]]})
z={func:1,ret:-1,args:[P.M,[P.c,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aY:function(a,b){return this.bn(a,null,b)},
bB:function(a){var z
H.x(a,"$isc",[H.aM(this,"af",0)],"$asc")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cg:function(a,b){var z
H.x(b,"$isc",[H.aM(this,"af",0)],"$asc")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.al(z,z.length,0,[H.y(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.l(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aM(this,"af",0)
H.C(b,z)
z=[z]
if(this.bB(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cg(x,H.f([b],z))}},
bI:function(a,b){var z,y
H.x(b,"$isc",[H.aM(this,"af",0)],"$asc")
if(this.bB(b)){z=this.a
y=z.length
C.a.bI(z,b)
this.cg(y,b)}},
$isc:1,
q:{
cs:function(a){var z=new O.af([a])
z.aZ(a)
return z}}},cH:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
dL:function(a){var z=this.b
if(!(z==null))z.v(a)},
ar:function(){return this.dL(null)},
gK:function(a){var z=this.a
if(z.length>0)return C.a.gc1(z)
else return V.bM()},
di:function(a){var z=this.a
if(a==null)C.a.h(z,V.bM())
else C.a.h(z,a)
this.ar()},
c7:function(){var z=this.a
if(z.length>0){z.pop()
this.ar()}}}}],["","",,E,{"^":"",cn:{"^":"a;"},av:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0X:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
co:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.al(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
if(y.f==null)y.co()}},
sbo:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gde(),{func:1,ret:-1,args:[D.o]})
C.a.T(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.b(this.gde(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.B("shape",z,this.c,this,[F.e_])
w.b=!0
this.a_(w)}},
sc9:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.b(this.gdf(),{func:1,ret:-1,args:[D.o]})
C.a.T(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gdf(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}this.co()
w=new D.B("technique",x,this.f,this,[O.cS])
w.b=!0
this.a_(w)}},
saI:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gdd(),{func:1,ret:-1,args:[D.o]})
C.a.T(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.b(this.gdd(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}this.r=a
w=new D.B("mover",z,a,this,[U.a0])
w.b=!0
this.a_(w)}},
a6:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aq(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ag])
w.b=!0
this.a_(w)}z=this.f
if(z!=null)z.a6(0,b)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.y(z,0)]);z.D();)z.d.a6(0,b)},
aJ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gK(z))
else C.a.h(z.a,y.k(0,z.gK(z)))
z.ar()
a.dj(this.f)
z=a.dy
x=(z&&C.a).gc1(z)
if(x!=null&&this.d!=null)x.h5(a,this)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aJ(a)
a.dh()
a.dx.c7()},
gu:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
a_:function(a){var z=this.z
if(!(z==null))z.v(a)},
Z:function(){return this.a_(null)},
fT:[function(a){H.i(a,"$iso")
this.e=null
this.a_(a)},function(){return this.fT(null)},"i4","$1","$0","gde",0,2,0],
fU:[function(a){this.a_(H.i(a,"$iso"))},function(){return this.fU(null)},"i5","$1","$0","gdf",0,2,0],
fS:[function(a){this.a_(H.i(a,"$iso"))},function(){return this.fS(null)},"i3","$1","$0","gdd",0,2,0],
fQ:[function(a){this.a_(H.i(a,"$iso"))},function(){return this.fQ(null)},"i1","$1","$0","gdc",0,2,0],
i0:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isc",[E.av],"$asc")
for(z=b.length,y=this.gdc(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.aP()
t.a=H.f([],w)
t.c=0
u.sX(t)}t=u.gX()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.Z()},"$2","gfP",8,0,7],
i2:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isc",[E.av],"$asc")
for(z=b.length,y=this.gdc(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.aP()
t.a=H.f([],w)
t.c=0
u.sX(t)}t=u.gX()
t.toString
H.b(y,x)
C.a.T(t.a,y)}}this.Z()},"$2","gfR",8,0,7],
$isaw:1,
q:{
c4:function(a,b,c,d,e,f){var z,y
z=new E.av()
z.a=d
z.b=!0
y=O.cs(E.av)
z.y=y
y.aY(z.gfP(),z.gfR())
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
z.sbo(0,e)
z.sc9(f)
z.saI(c)
return z}}},hC:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dJ:function(a,b){var z,y,x,w,v
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
z=new O.cH()
y=[V.ag]
z.a=H.f([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.b(new E.hE(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cH()
z.a=H.f([],y)
v=z.gu()
v.toString
x=H.b(new E.hF(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cH()
z.a=H.f([],y)
y=z.gu()
y.toString
w=H.b(new E.hG(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.cS])
this.dy=z
C.a.h(z,null)
this.fr=new H.cC(0,0,[P.p,A.dZ])},
gh2:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gK(z)
y=this.db
y=z.k(0,y.gK(y))
this.z=y
z=y}return z},
dj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc1(z):a;(z&&C.a).h(z,y)},
dh:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
hD:function(a,b){var z=new E.hC(a,b)
z.dJ(a,b)
return z}}},hE:{"^":"u:8;a",
$1:function(a){var z
H.i(a,"$iso")
z=this.a
z.z=null
z.ch=null}},hF:{"^":"u:8;a",
$1:function(a){var z
H.i(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hG:{"^":"u:8;a",
$1:function(a){var z
H.i(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},i0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0X:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
dN:[function(a){var z
H.i(a,"$iso")
z=this.x
if(!(z==null))z.v(a)
this.h6()},function(){return this.dN(null)},"dM","$1","$0","gci",0,2,0],
gfF:function(){var z,y,x
z=Date.now()
y=C.f.Y(P.dB(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.au(z,!1)
return x/y},
cD:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.n(z)
x=C.j.c0(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.j.c0(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
h6:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.i2(this),{func:1,ret:-1,args:[P.R]})
C.r.e7(z)
C.r.eJ(z,W.eR(y,P.R))}},
h4:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cD()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.au(w,!1)
x.y=P.dB(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ar()
w=x.db
C.a.sl(w.a,0)
w.ar()
w=x.dx
C.a.sl(w.a,0)
w.ar()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aJ(this.e)}}catch(v){z=H.aG(v)
y=H.b3(v)
P.de("Error: "+H.h(z))
P.de("Stack: "+H.h(y))
throw H.j(z)}},
q:{
i1:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscq)return E.e7(a,!0,!0,!0,!1)
y=W.cr(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbR(a).h(0,y)
w=E.e7(y,!0,!0,!0,!1)
w.a=a
return w},
e7:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i0()
y=P.fZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.p,null)
x=C.k.bm(a,"webgl",y)
x=H.i(x==null?C.k.bm(a,"experimental-webgl",y):x,"$iscP")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hD(x,a)
w=new T.hW(x)
w.b=H.a2(x.getParameter(3379))
w.c=H.a2(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ik(a)
v=new X.fT()
v.c=new X.Z(!1,!1,!1)
v.d=P.h_(null,null,null,P.M)
w.b=v
v=new X.hj(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h3(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i4(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.e2,P.a]])
w.z=v
u=document
t=W.ar
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.b(w.geo(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.b(w.ger(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.b(w.gek(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.b(w.gbA(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.b(w.gbq(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.b(w.gex(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.b(w.gez(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.b(w.gey(),s),!1,t))
p=w.z
o=W.bu;(p&&C.a).h(p,W.W(a,H.S(W.fC(a)),H.b(w.geA(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.b(w.gep(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.b(w.geq(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.b(w.geB(),q),!1,r))
r=w.z
q=W.aT
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.b(w.geH(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.b(w.geF(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.b(w.geG(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.au(Date.now(),!1)
z.ch=0
z.cD()
return z}}},i2:{"^":"u:33;a",
$1:function(a){var z
H.ks(a)
z=this.a
if(z.z){z.z=!1
z.h4()}}}}],["","",,Z,{"^":"",ev:{"^":"a;a,b",q:{
cZ:function(a,b,c){var z
H.x(c,"$ise",[P.M],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,z)}}},dm:{"^":"cn;a,b,c,d,e",
bM:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aG(y)
x=P.r('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.h(z))
throw H.j(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},iw:{"^":"a;a",$iskM:1},dn:{"^":"a;a,0b,c,d",
aF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bM:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bM(a)},
hh:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aJ:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.l(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.p]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.V(y,", ")+"\nAttrs:   "+C.a.V(u,", ")},
$isme:1},c8:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aR(this.c)+"'")+"]"}},aV:{"^":"a;a",
gcc:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=4
if((z&$.$get$aW().a)!==0)++y
return(z&$.$get$ay().a)!==0?y+4:y},
fo:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eu()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.p])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.V(z,"|")},
q:{
aj:function(a){return new Z.aV(a)}}}}],["","",,D,{"^":"",ds:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fF(z))
return x!==0},
fC:function(){return this.v(null)},
h7:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
ag:function(a){return this.h7(a,!0,!1)},
q:{
E:function(){var z=new D.aP()
z.a=H.f([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},fF:{"^":"u:35;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"a;a,0b"},bH:{"^":"o;c,d,a,0b,$ti"},bI:{"^":"o;c,d,a,0b,$ti"},B:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",dp:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)},
q:{"^":"kO<"}},Q:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Q))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},ca:{"^":"o;c,a,0b"},fS:{"^":"af;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
gaG:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
cj:function(a){var z=this.e
if(!(z==null))z.v(a)},
hk:[function(a){var z,y,x
H.x(a,"$isc",[X.Q],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(C.a.ad(this.a,x))return!1}return!0},"$1","gdQ",4,0,36],
hj:[function(a,b){var z=X.Q
z=new D.bH(a,H.x(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.cj(z)},"$2","gdO",8,0,17],
hl:[function(a,b){var z=X.Q
z=new D.bI(a,H.x(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.cj(z)},"$2","gdR",8,0,17],
dP:[function(a){var z
H.i(a,"$iso")
if(!this.r&&a instanceof X.ca){z=a.c
if(C.a.ad(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.v(a)}}},"$1","gbq",4,0,1],
eu:[function(a){var z
H.i(a,"$iso")
if(this.r&&a instanceof X.ca){z=a.c
if(C.a.ad(this.a,z))this.r=!1}},"$1","gbA",4,0,1],
ac:function(a){var z,y,x,w
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.E()
z.b=y}x={func:1,ret:-1,args:[D.o]}
w=H.b(this.gbq(),x)
C.a.h(y.a,w)
y=z.a
if(y==null){y=D.E()
z.a=y
z=y}else z=y
x=H.b(this.gbA(),x)
C.a.h(z.a,x)
return!0},
$asc:function(){return[X.Q]},
$asaf:function(){return[X.Q]},
q:{
be:function(){var z=new X.fS()
z.aZ(X.Q)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bn(z.gdO(),z.gdQ(),z.gdR())
return z}}},fT:{"^":"a;0a,0b,0c,0d",
h_:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ca(a,this)
y.b=!0
return z.v(y)},
fW:function(a){var z,y
this.c=a.b
this.d.T(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ca(a,this)
y.b=!0
return z.v(y)}},dM:{"^":"cN;x,y,c,d,e,a,0b"},h3:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
al:function(a,b){var z,y,x,w,v,u,t,s
z=new P.au(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gb6()
s=new X.bN(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c6:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.al(a,b))
return!0},
aR:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dC()
if(typeof z!=="number")return z.dt()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.al(a,b))
return!0},
aQ:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.al(a,b))
return!0},
h0:function(a){return!1},
ew:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.au(Date.now(),!1)
y=this.f
x=new X.dM(c,a,this.a.gb6(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.U(0,0)}},Z:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Z))return!1
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
return z+(this.c?"Shift+":"")}},bN:{"^":"cN;x,y,z,Q,ch,c,d,e,a,0b"},hj:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bw:function(a,b,c){var z,y,x
z=new P.au(Date.now(),!1)
y=this.a.gb6()
x=new X.bN(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c6:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bw(a,b,!0))
return!0},
aR:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dC()
if(typeof z!=="number")return z.dt()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bw(a,b,!0))
return!0},
aQ:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bw(a,b,!1))
return!0},
h1:function(a,b){return!1}},cN:{"^":"o;"},e9:{"^":"cN;x,y,z,Q,ch,c,d,e,a,0b"},i4:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
al:function(a,b){var z,y,x,w
H.x(a,"$ise",[V.U],"$ase")
z=new P.au(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gb6()
w=new X.e9(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fZ:function(a){var z
H.x(a,"$ise",[V.U],"$ase")
z=this.b
if(z==null)return!1
z.v(this.al(a,!0))
return!0},
fX:function(a){var z
H.x(a,"$ise",[V.U],"$ase")
z=this.c
if(z==null)return!1
z.v(this.al(a,!0))
return!0},
fY:function(a){var z
H.x(a,"$ise",[V.U],"$ase")
z=this.d
if(z==null)return!1
z.v(this.al(a,!1))
return!0}},ik:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb6:function(){var z=this.a
return V.dX(0,0,(z&&C.k).gb5(z).c,C.k.gb5(z).d)},
cu:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.Q(z,new X.Z(y,a.altKey,a.shiftKey))},
ay:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.Z(y,a.altKey,a.shiftKey)},
bG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.Z(y,a.altKey,a.shiftKey)},
am:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.U(y-w,x-v)},
aN:function(a){return new V.a1(a.movementX,a.movementY)},
bC:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.j.a8(u.pageX)
C.j.a8(u.pageY)
s=z.left
C.j.a8(u.pageX)
C.a.h(y,new V.U(t-s,C.j.a8(u.pageY)-z.top))}return y},
aj:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dp(z,new X.Z(y,a.altKey,a.shiftKey))},
hF:[function(a){this.f=!0},"$1","ger",4,0,4],
hz:[function(a){this.f=!1},"$1","gek",4,0,4],
hC:[function(a){if(this.f)a.preventDefault()},"$1","geo",4,0,4],
eu:[function(a){var z
H.i(a,"$isbf")
if(!this.f)return
z=this.cu(a)
if(this.b.h_(z))a.preventDefault()},"$1","gbA",4,0,18],
dP:[function(a){var z
H.i(a,"$isbf")
if(!this.f)return
z=this.cu(a)
if(this.b.fW(z))a.preventDefault()},"$1","gbq",4,0,18],
hI:[function(a){var z,y,x,w
H.i(a,"$isar")
z=this.a
z.focus()
this.f=!0
this.ay(a)
if(this.x){y=this.aj(a)
x=this.aN(a)
if(this.d.c6(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aj(a)
w=this.am(a)
if(this.c.c6(y,w))a.preventDefault()},"$1","gex",4,0,5],
hK:[function(a){var z,y,x
H.i(a,"$isar")
this.ay(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aR(z,x))a.preventDefault()},"$1","gez",4,0,5],
hE:[function(a){var z,y,x,w
H.i(a,"$isar")
z=this.a
if(!(z&&C.k).gb5(z).cN(0,new P.bP(a.clientX,a.clientY,[P.R]))){this.ay(a)
y=this.aj(a)
if(this.x){x=this.aN(a)
if(this.d.aR(y,x))a.preventDefault()
return}if(this.r)return
w=this.am(a)
if(this.c.aR(y,w))a.preventDefault()}},"$1","geq",4,0,5],
hJ:[function(a){var z,y,x
H.i(a,"$isar")
this.ay(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aQ(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aQ(z,x))a.preventDefault()},"$1","gey",4,0,5],
hD:[function(a){var z,y,x,w
H.i(a,"$isar")
z=this.a
if(!(z&&C.k).gb5(z).cN(0,new P.bP(a.clientX,a.clientY,[P.R]))){this.ay(a)
y=this.aj(a)
if(this.x){x=this.aN(a)
if(this.d.aQ(y,x))a.preventDefault()
return}if(this.r)return
w=this.am(a)
if(this.c.aQ(y,w))a.preventDefault()}},"$1","gep",4,0,5],
hL:[function(a){var z,y
H.i(a,"$isbu")
this.ay(a)
z=new V.a1((a&&C.q).gfz(a),C.q.gfA(a)).A(0,180)
if(this.x){if(this.d.h0(z))a.preventDefault()
return}if(this.r)return
y=this.am(a)
if(this.c.h1(z,y))a.preventDefault()},"$1","geA",4,0,41],
hM:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aj(this.y)
v=this.am(this.y)
this.d.ew(w,v,x)}},"$1","geB",4,0,4],
hS:[function(a){var z
H.i(a,"$isaT")
this.a.focus()
this.f=!0
this.bG(a)
z=this.bC(a)
if(this.e.fZ(z))a.preventDefault()},"$1","geH",4,0,11],
hQ:[function(a){var z
H.i(a,"$isaT")
this.bG(a)
z=this.bC(a)
if(this.e.fX(z))a.preventDefault()},"$1","geF",4,0,11],
hR:[function(a){var z
H.i(a,"$isaT")
this.bG(a)
z=this.bC(a)
if(this.e.fY(z))a.preventDefault()},"$1","geG",4,0,11]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
as:[function(a){var z
H.i(a,"$iso")
z=this.d
if(!(z==null))z.v(a)},function(){return this.as(null)},"hm","$1","$0","gdS",0,2,0],
$isY:1,
$isaw:1,
q:{
cv:function(a,b){var z,y,x,w
z=new D.c3()
z.c=new V.T(1,1,1)
z.a=new V.H(0,0,1)
y=z.b
z.b=b
x=b.gu()
x.toString
w=H.b(z.gdS(),{func:1,ret:-1,args:[D.o]})
C.a.h(x.a,w)
x=new D.B("mover",y,z.b,z,[U.a0])
x.b=!0
z.as(x)
if(!z.c.t(0,a)){y=z.c
z.c=a
x=new D.B("color",y,a,z,[V.T])
x.b=!0
z.as(x)}return z}}},Y:{"^":"a;",$isaw:1},fU:{"^":"af;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
as:function(a){var z=this.Q
if(!(z==null))z.v(a)},
ev:[function(a){var z
H.i(a,"$iso")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.ev(null)},"hH","$1","$0","gcA",0,2,0],
hN:[function(a){var z,y,x
H.x(a,"$isc",[D.Y],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.e2(x))return!1}return!0},"$1","geC",4,0,29],
hw:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Y
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcA(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.i(b[u],"$isY")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bH(a,b,this,[z])
z.b=!0
this.as(z)},"$2","geh",8,0,19],
hP:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Y
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcA(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.i(b[u],"$isY")
if(t instanceof D.c3)C.a.T(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.T(s.a,x)}z=new D.bI(a,b,this,[z])
z.b=!0
this.as(z)},"$2","geE",8,0,19],
e2:function(a){var z=C.a.ad(this.e,a)
return z},
$asc:function(){return[D.Y]},
$asaf:function(){return[D.Y]}},hs:{"^":"a;",$isY:1,$isaw:1},hP:{"^":"a;",$isY:1,$isaw:1},hY:{"^":"a;",$isY:1,$isaw:1},hZ:{"^":"a;",$isY:1,$isaw:1},i_:{"^":"a;",$isY:1,$isaw:1}}],["","",,V,{"^":"",
kQ:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","hg",8,0,27],
cl:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dB(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.h.a4("null",c)
return C.h.a4(C.j.dr($.k.$2(a,0)?0:a,b),c+b+1)},
b1:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$ise",[P.t],"$ase")
z=H.f([],[P.p])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.l(z,u)
C.a.a0(z,u,C.h.a4(z[u],x))}return z},
dd:function(a,b){return C.j.he(Math.pow(b,C.w.c0(Math.log(H.k1(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
c_:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c_))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
aJ:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
bk:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof y!=="number")return y.k()
if(typeof x!=="number")return H.n(x)
w=y*x
v=this.f
u=this.x
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
if(typeof z!=="number")return z.k()
t=this.d
s=this.b
if(typeof s!=="number")return s.k()
r=s*x
q=this.c
if(typeof q!=="number")return H.n(q)
p=u*q
if(typeof t!=="number")return t.k()
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.k()
m=z*(w-v*u)-t*(r-p)+o*n
if($.k.$2(m,0))return new V.aJ(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.aJ((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return p.k()
o=this.y
if(typeof o!=="number")return o.k()
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.b1(H.f([this.a,this.d,this.r],z),3,0)
x=V.b1(H.f([this.b,this.e,this.x],z),3,0)
w=V.b1(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.l(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.l(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.l(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.l(y,1)
s=" "+y[1]+", "
if(1>=u)return H.l(x,1)
s=s+x[1]+", "
if(1>=t)return H.l(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.l(y,2)
z=" "+y[2]+", "
if(2>=u)return H.l(x,2)
z=z+x[2]+", "
if(2>=t)return H.l(w,2)
return s+(z+w[2]+"]")}},
ag:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
bk:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.k.$2(a2,0))return V.bM()
a3=1/a2
a4=-w
a5=-i
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.an(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
z=b.z
if(!$.k.$2(z,this.z))return!1
z=b.Q
if(!$.k.$2(z,this.Q))return!1
z=b.ch
if(!$.k.$2(z,this.ch))return!1
z=b.cx
if(!$.k.$2(z,this.cx))return!1
z=b.cy
if(!$.k.$2(z,this.cy))return!1
z=b.db
if(!$.k.$2(z,this.db))return!1
z=b.dx
if(!$.k.$2(z,this.dx))return!1
return!0},
i:function(a){return this.F()},
d8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b1(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b1(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b1(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b1(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.l(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.l(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.l(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.l(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.l(y,1)
q=q+y[1]+", "
if(1>=t)return H.l(x,1)
q=q+x[1]+", "
if(1>=s)return H.l(w,1)
q=q+w[1]+", "
if(1>=r)return H.l(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.l(y,2)
u=u+y[2]+", "
if(2>=t)return H.l(x,2)
u=u+x[2]+", "
if(2>=s)return H.l(w,2)
u=u+w[2]+", "
if(2>=r)return H.l(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.l(y,3)
q=q+y[3]+", "
if(3>=t)return H.l(x,3)
q=q+x[3]+", "
if(3>=s)return H.l(w,3)
q=q+w[3]+", "
if(3>=r)return H.l(v,3)
return u+(q+v[3]+"]")},
w:function(a){return this.d8(a,3,0)},
F:function(){return this.d8("",3,0)},
q:{
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bM:function(){return V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dR:function(a,b,c){return V.aq(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
cI:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aq(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
dQ:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aq(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
cJ:function(a,b,c,d){return V.dP(new V.an(0,0,0),new V.H(0,1,0),new V.H(a,b,c))},
dP:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.E(c)))
y=b.aO(z)
x=y.A(0,Math.sqrt(y.E(y)))
w=z.aO(x)
v=new V.H(a.a,a.b,a.c)
return V.aq(x.a,w.a,z.a,x.H(0).E(v),x.b,w.b,z.b,w.H(0).E(v),x.c,w.c,z.c,z.H(0).E(v),0,0,0,1)}}},
U:{"^":"a;n:a>,p:b>",
I:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
an:{"^":"a;n:a>,p:b>,c",
I:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.I()
if(typeof w!=="number")return H.n(w)
return new V.an(this.a-z,this.b-y,x-w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
cM:{"^":"a;n:a>,p:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cM))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
dW:{"^":"a;n:a>,p:b>,c,d",
gaf:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dW))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"},
q:{
dX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dW(a,b,c,d)}}},
a1:{"^":"a;a,b",
fI:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,20],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a1(z*b,y*b)},
A:function(a,b){var z,y
if($.k.$2(b,0))return new V.a1(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a1(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fI:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,20],
E:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
c2:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.I()
if(typeof x!=="number")return H.n(x)
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
aO:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.n(y)
return new V.H(this.a+b.a,this.b+b.b,z+y)},
H:function(a){var z=this.c
if(typeof z!=="number")return z.H()
return new V.H(-this.a,-this.b,-z)},
A:function(a,b){var z
if($.k.$2(b,0))return new V.H(0,0,0)
z=this.c
if(typeof z!=="number")return z.A()
return new V.H(this.a/b,this.b/b,z/b)},
da:function(){if(!$.k.$2(0,this.a))return!1
if(!$.k.$2(0,this.b))return!1
if(!$.k.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fp:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x,0y",
br:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cl(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gu:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
G:function(a){var z=this.y
if(!(z==null))z.v(a)},
sca:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.B("warp",z,b,this,[P.X])
z.b=!0
this.G(z)}},
sc4:function(a){var z,y
z=this.b
if(!$.k.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.br(z)}z=new D.B("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.G(z)}},
sc5:function(a){var z,y
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.br(z)}z=new D.B("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.G(z)}},
sW:function(a,b){var z,y
b=this.br(b==null?0:b)
z=this.d
if(!$.k.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.t])
z.b=!0
this.G(z)}},
saP:function(a){var z,y,x
z=this.e
if(!$.k.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.G(z)}},
sL:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.k.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.t])
z.b=!0
this.G(z)}},
san:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.k.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.t])
z.b=!0
this.G(z)}},
a6:function(a,b){var z,y,x,w
z=this.f
if($.k.$2(z,0)){z=this.r
z=!$.k.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.k.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
q:{
bD:function(){var z=new U.fp()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ct:{"^":"a0;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
sK:function(a,b){var z,y,x
if(!J.P(this.a,b)){z=this.a
this.a=b
y=new D.B("matrix",z,b,this,[V.ag])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aq:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ct))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
q:{
c1:function(a){var z=new U.ct()
z.sK(0,a)
return z}}},dD:{"^":"af;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
G:[function(a){var z
H.i(a,"$iso")
z=this.e
if(!(z==null))z.v(a)},function(){return this.G(null)},"ai","$1","$0","gat",0,2,0],
hv:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bH(a,b,this,[z])
z.b=!0
this.G(z)},"$2","geg",8,0,21],
hO:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.T(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.G(z)},"$2","geD",8,0,21],
aq:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.al(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aq(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bM():x
z=this.e
if(!(z==null))z.ag(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.l(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.l(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asc:function(){return[U.a0]},
$asaf:function(){return[U.a0]},
$isa0:1,
q:{
dE:function(a){var z=new U.dD()
z.aZ(U.a0)
z.aY(z.geg(),z.geD())
z.bI(0,a)
z.e=null
z.f=V.bM()
z.r=0
return z}}},a0:{"^":"ds;"},dY:{"^":"a0;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
G:function(a){var z=this.y
if(!(z==null))z.v(a)},
sds:function(a){var z,y
a=V.cl(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.B("yaw",y,a,this,[P.t])
z.b=!0
this.G(z)}},
sdg:function(a,b){var z,y
b=V.cl(b,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,b)){y=this.b
this.b=b
z=new D.B("pitch",y,b,this,[P.t])
z.b=!0
this.G(z)}},
sdk:function(a){var z,y
a=V.cl(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.B("roll",y,a,this,[P.t])
z.b=!0
this.G(z)}},
aq:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sds(this.a+this.d*b.y)
this.sdg(0,this.b+this.e*b.y)
this.sdk(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aq(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.dQ(this.b)).k(0,V.cI(this.a))
z=this.y
if(!(z==null))z.ag(0)}return this.x},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dY))return!1
z=this.a
y=b.a
if(!$.k.$2(z,y))return!1
z=this.b
y=b.b
if(!$.k.$2(z,y))return!1
z=this.c
y=b.c
if(!$.k.$2(z,y))return!1
z=this.d
y=b.d
if(!$.k.$2(z,y))return!1
z=this.e
y=b.e
if(!$.k.$2(z,y))return!1
z=this.f
y=b.f
if(!$.k.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}},il:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
G:[function(a){var z
H.i(a,"$iso")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.G(null)},"ai","$1","$0","gat",0,2,0],
ac:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.o]}
x=H.b(this.ged(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gee(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.E()
x.c=z}x=H.b(this.gef(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.E()
x.f=z}x=H.b(this.gea(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.E()
x.b=z}x=H.b(this.geZ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.geY(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.E()
x.c=z}y=H.b(this.geX(),y)
C.a.h(z.a,y)
return!0},
ab:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.a1(z,y)},
hs:[function(a){a=H.d(H.i(a,"$iso"),"$isbN")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ged",4,0,1],
ht:[function(a){var z,y,x,w,v,u,t
a=H.d(H.i(a,"$iso"),"$isbN")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a1(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ab(new V.a1(y.a,y.b).k(0,2).A(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ab(new V.a1(x.a,x.b).k(0,2).A(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.I(0,a.z)
this.dx=this.ab(new V.a1(y.a,y.b).k(0,2).A(0,z.gaf()))}this.ai()},"$1","gee",4,0,1],
hu:[function(a){var z,y,x
H.i(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sL(-y*10*z)
this.ai()}},"$1","gef",4,0,1],
hq:[function(a){if(H.d(H.i(a,"$iso"),"$isdM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gea",4,0,1],
hr:[function(a){var z,y,x,w,v,u,t
a=H.d(H.i(a,"$iso"),"$isbN")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ab(new V.a1(x.a,x.b).k(0,2).A(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.I(0,a.z)
this.dx=this.ab(new V.a1(y.a,y.b).k(0,2).A(0,z.gaf()))
this.ai()},"$1","geb",4,0,1],
hW:[function(a){H.i(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geZ",4,0,1],
hV:[function(a){var z,y,x,w,v,u,t
a=H.d(H.i(a,"$iso"),"$ise9")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a1(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ab(new V.a1(y.a,y.b).k(0,2).A(0,z.gaf()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ab(new V.a1(x.a,x.b).k(0,2).A(0,z.gaf()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.I(0,a.z)
this.dx=this.ab(new V.a1(y.a,y.b).k(0,2).A(0,z.gaf()))}this.ai()},"$1","geY",4,0,1],
hU:[function(a){var z,y,x
H.i(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sL(-y*10*z)
this.ai()}},"$1","geX",4,0,1],
aq:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.dy=y
x=b.y
this.c.a6(0,x)
this.b.a6(0,x)
this.fr=V.cI(this.b.d).k(0,V.dQ(this.c.d))}return this.fr},
$isa0:1},im:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dx
if(z==null){z=D.E()
this.dx=z}return z},
G:[function(a){var z
H.i(a,"$iso")
z=this.dx
if(!(z==null))z.v(a)},function(){return this.G(null)},"ai","$1","$0","gat",0,2,0],
gW:function(a){return new V.an(this.r.d,this.x.d,this.y.d)},
hG:[function(a){this.G(H.i(a,"$iso"))},"$1","ges",4,0,1],
bH:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.B()
e+=d}else if(b.r){if(typeof e!=="number")return e.I()
e-=d}else{if(typeof e!=="number")return e.dA()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aq:function(a,b,c){var z,y,x,w,v,u
z=this.cy
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.cy=y
this.gW(this)
x=b.y
if(x>0.1)x=0.1
z=this.ch
if(typeof z!=="number")return z.k()
w=z*x
z=this.cx
if(typeof z!=="number")return z.k()
v=z*x
u=new V.H(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)u=z.aK(u)
u=new V.H(this.bH(this.a,this.b,w,v,u.a),this.bH(this.c,this.d,w,v,u.b),this.bH(this.e,this.f,w,v,u.c))
z=this.z
if(z!=null)u=z.aK(u)
this.r.sL(u.a)
this.x.sL(u.b)
this.y.sL(u.c)
this.r.a6(0,x)
this.x.a6(0,x)
this.y.a6(0,x)
this.db=V.dR(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa0:1}}],["","",,M,{"^":"",fD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aL:[function(a){var z
H.i(a,"$iso")
z=this.x
if(!(z==null))z.v(a)},function(){return this.aL(null)},"hn","$1","$0","gau",0,2,0],
hA:[function(a,b){var z,y,x,w,v,u,t,s
z=E.av
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.sX(s)}s=t.gX()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bH(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gem",8,0,7],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.av
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.sX(s)}s=t.gX()
s.toString
H.b(x,w)
C.a.T(s.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gen",8,0,7],
gu:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
aJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dj(this.c)
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
if(typeof x!=="number")return H.n(x)
u=C.f.a8(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.f.a8(v.b*w)
s=C.f.a8(v.c*x)
a.c=s
v=C.f.a8(v.d*w)
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
s.di(V.aq(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dU
if(y==null){y=V.dP(new V.an(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dU=y
m=y}else m=y
y=z.a
if(y!=null){l=y.aq(0,a,z)
if(l!=null)m=l.k(0,m)}a.db.di(m)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.y(z,0)]);z.D();)z.d.a6(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aJ(a)
this.a.toString
a.cy.c7()
a.db.c7()
this.b.toString
a.dh()},
$ism1:1}}],["","",,A,{"^":"",di:{"^":"a;a,b,c"},fc:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fB:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h8:{"^":"dZ;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aD,0ao,0aE,0b7,0cP,0cQ,0b8,0b9,0cR,0cS,0ba,0bb,0cT,0cU,0bc,0cV,0cW,0bd,0cX,0cY,0be,0bf,0bg,0cZ,0d_,0bh,0bi,0d0,0d1,0bj,0d2,0bV,0d3,0bW,0d4,0bX,0d5,0bY,0d6,0bZ,0d7,0c_,a,b,0c,0d,0e,0f,0r",
dI:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bQ("")
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
a2.f1(z)
a2.f8(z)
a2.f2(z)
a2.fg(z)
a2.fh(z)
a2.fa(z)
a2.fl(z)
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
z=new P.bQ("")
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
v.f5(z)
v.f0(z)
v.f3(z)
v.f6(z)
v.fe(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fc(z)
v.fd(z)}v.f9(z)
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
p=H.f([],[P.p])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.V(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f4(z)
v.fb(z)
v.ff(z)
v.fi(z)
v.fj(z)
v.fk(z)
v.f7(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.p])
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
n="vec4("+C.a.V(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cv(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cv(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eV(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.r("Failed to link shader: "+H.h(m)))}this.eT()
this.eU()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.d(this.r.m(0,"invViewMat"),"$isax")
if(y)this.db=H.d(this.r.m(0,"objMat"),"$isax")
if(w)this.dx=H.d(this.r.m(0,"viewObjMat"),"$isax")
this.fr=H.d(this.r.m(0,"projViewObjMat"),"$isax")
if(a2.x2)this.go=H.d(this.r.m(0,"txt2DMat"),"$iscW")
if(a2.y1)this.id=H.d(this.r.m(0,"txtCubeMat"),"$isax")
if(a2.y2)this.k1=H.d(this.r.m(0,"colorMat"),"$isax")
this.k3=H.f([],[A.ax])
y=a2.aD
if(y>0){this.k2=H.i(this.r.m(0,"bendMatCount"),"$isI")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isax"))}}y=a2.a
if(y!==C.b){this.k4=H.d(this.r.m(0,"emissionClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.d(this.r.m(0,"emissionTxt"),"$isah")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isI")
break
case C.d:this.r2=H.d(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isI")
break}}y=a2.b
if(y!==C.b){this.ry=H.d(this.r.m(0,"ambientClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.d(this.r.m(0,"ambientTxt"),"$isah")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isI")
break
case C.d:this.x2=H.d(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isI")
break}}y=a2.c
if(y!==C.b){this.y2=H.d(this.r.m(0,"diffuseClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.aD=H.d(this.r.m(0,"diffuseTxt"),"$isah")
this.aE=H.d(this.r.m(0,"nullDiffuseTxt"),"$isI")
break
case C.d:this.ao=H.d(this.r.m(0,"diffuseTxt"),"$isai")
this.aE=H.d(this.r.m(0,"nullDiffuseTxt"),"$isI")
break}}y=a2.d
if(y!==C.b){this.b7=H.d(this.r.m(0,"invDiffuseClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.cP=H.d(this.r.m(0,"invDiffuseTxt"),"$isah")
this.b8=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isI")
break
case C.d:this.cQ=H.d(this.r.m(0,"invDiffuseTxt"),"$isai")
this.b8=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a2.e
if(y!==C.b){this.bb=H.d(this.r.m(0,"shininess"),"$isV")
this.b9=H.d(this.r.m(0,"specularClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.cR=H.d(this.r.m(0,"specularTxt"),"$isah")
this.ba=H.d(this.r.m(0,"nullSpecularTxt"),"$isI")
break
case C.d:this.cS=H.d(this.r.m(0,"specularTxt"),"$isai")
this.ba=H.d(this.r.m(0,"nullSpecularTxt"),"$isI")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cT=H.d(this.r.m(0,"bumpTxt"),"$isah")
this.bc=H.d(this.r.m(0,"nullBumpTxt"),"$isI")
break
case C.d:this.cU=H.d(this.r.m(0,"bumpTxt"),"$isai")
this.bc=H.d(this.r.m(0,"nullBumpTxt"),"$isI")
break}if(a2.dy){this.cV=H.d(this.r.m(0,"envSampler"),"$isai")
this.cW=H.d(this.r.m(0,"nullEnvTxt"),"$isI")
y=a2.r
if(y!==C.b){this.bd=H.d(this.r.m(0,"reflectClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.cX=H.d(this.r.m(0,"reflectTxt"),"$isah")
this.be=H.d(this.r.m(0,"nullReflectTxt"),"$isI")
break
case C.d:this.cY=H.d(this.r.m(0,"reflectTxt"),"$isai")
this.be=H.d(this.r.m(0,"nullReflectTxt"),"$isI")
break}}y=a2.x
if(y!==C.b){this.bf=H.d(this.r.m(0,"refraction"),"$isV")
this.bg=H.d(this.r.m(0,"refractClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.c:this.cZ=H.d(this.r.m(0,"refractTxt"),"$isah")
this.bh=H.d(this.r.m(0,"nullRefractTxt"),"$isI")
break
case C.d:this.d_=H.d(this.r.m(0,"refractTxt"),"$isai")
this.bh=H.d(this.r.m(0,"nullRefractTxt"),"$isI")
break}}}y=a2.y
if(y!==C.b){this.bi=H.d(this.r.m(0,"alpha"),"$isV")
switch(y){case C.b:break
case C.e:break
case C.c:this.d0=H.d(this.r.m(0,"alphaTxt"),"$isah")
this.bj=H.d(this.r.m(0,"nullAlphaTxt"),"$isI")
break
case C.d:this.d1=H.d(this.r.m(0,"alphaTxt"),"$isai")
this.bj=H.d(this.r.m(0,"nullAlphaTxt"),"$isI")
break}}this.bV=H.f([],[A.el])
this.bW=H.f([],[A.em])
this.bX=H.f([],[A.en])
this.bY=H.f([],[A.eo])
this.bZ=H.f([],[A.ep])
this.c_=H.f([],[A.eq])
if(a2.k2){y=a2.z
if(y>0){this.d2=H.i(this.r.m(0,"dirLightCount"),"$isI")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.bV;(x&&C.a).h(x,new A.el(l,k,j))}}y=a2.Q
if(y>0){this.d3=H.i(this.r.m(0,"pntLightCount"),"$isI")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isV")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isV")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isV")
x=this.bW;(x&&C.a).h(x,new A.em(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.d4=H.i(this.r.m(0,"spotLightCount"),"$isI")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isV")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isV")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isV")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isV")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isV")
x=this.bX;(x&&C.a).h(x,new A.en(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d5=H.i(this.r.m(0,"txtDirLightCount"),"$isI")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isI")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isah")
x=this.bY;(x&&C.a).h(x,new A.eo(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.d6=H.i(this.r.m(0,"txtPntLightCount"),"$isI")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$iscW")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isI")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isV")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isV")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isV")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isai")
x=this.bZ;(x&&C.a).h(x,new A.ep(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.d7=H.i(this.r.m(0,"txtSpotLightCount"),"$isI")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isG")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isG")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isG")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isI")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isG")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isV")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isV")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isV")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isV")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isV")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isah")
x=this.c_;(x&&C.a).h(x,new A.eq(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a7:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dD(c)
b.a.uniform1i(b.d,0)}},
a1:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
h9:function(a,b){var z,y
z=a.ao
y=new A.h8(b,z)
y.dK(b,z)
y.dI(a,b)
return y}}},hd:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aD,ao,aE",
f1:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aD+"];\n"
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
f8:function(a){var z
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
f2:function(a){var z
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
fg:function(a){var z,y
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
fh:function(a){var z,y
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
fa:function(a){var z
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
fl:function(a){var z
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
ak:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.l(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cd(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
f5:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ak(a,z,"emission")
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
f0:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ak(a,z,"ambient")
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
f3:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ak(a,z,"diffuse")
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
f6:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ak(a,z,"invDiffuse")
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
fe:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ak(a,z,"specular")
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
f9:function(a){var z,y
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
fc:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ak(a,z,"reflect")
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
fd:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ak(a,z,"refract")
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
f4:function(a){var z,y
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
fb:function(a){var z,y
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
ff:function(a){var z,y
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
fi:function(a){var z,y,x
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
fj:function(a){var z,y,x
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
fk:function(a){var z,y,x
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
f7:function(a){var z
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
i:function(a){return this.ao}},el:{"^":"a;a,b,c"},eo:{"^":"a;a,b,c,d,e,f,r,x"},em:{"^":"a;a,b,c,d,e,f,r"},ep:{"^":"a;a,b,c,d,e,f,r,x,y,z"},en:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dZ:{"^":"cn;",
dK:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cv:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eV(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.r("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
eT:function(){var z,y,x,w,v,u
z=H.f([],[A.di])
y=this.a
x=H.a2(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.di(y,v.name,u))}this.f=new A.fc(z)},
eU:function(){var z,y,x,w,v,u
z=H.f([],[A.a8])
y=this.a
x=H.a2(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fw(v.type,v.size,v.name,u))}this.r=new A.id(z)},
aw:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.I(z,y,b,c)
else return A.cV(z,y,b,a,c)},
e4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ah(z,y,b,c)
else return A.cV(z,y,b,a,c)},
e5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.cV(z,y,b,a,c)},
b3:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fw:function(a,b,c,d){switch(a){case 5120:return this.aw(b,c,d)
case 5121:return this.aw(b,c,d)
case 5122:return this.aw(b,c,d)
case 5123:return this.aw(b,c,d)
case 5124:return this.aw(b,c,d)
case 5125:return this.aw(b,c,d)
case 5126:return new A.V(this.a,this.e,c,d)
case 35664:return new A.i8(this.a,this.e,c,d)
case 35665:return new A.G(this.a,this.e,c,d)
case 35666:return new A.ib(this.a,this.e,c,d)
case 35667:return new A.i9(this.a,this.e,c,d)
case 35668:return new A.ia(this.a,this.e,c,d)
case 35669:return new A.ic(this.a,this.e,c,d)
case 35674:return new A.ig(this.a,this.e,c,d)
case 35675:return new A.cW(this.a,this.e,c,d)
case 35676:return new A.ax(this.a,this.e,c,d)
case 35678:return this.e4(b,c,d)
case 35680:return this.e5(b,c,d)
case 35670:throw H.j(this.b3("BOOL",c))
case 35671:throw H.j(this.b3("BOOL_VEC2",c))
case 35672:throw H.j(this.b3("BOOL_VEC3",c))
case 35673:throw H.j(this.b3("BOOL_VEC4",c))
default:throw H.j(P.r("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},c0:{"^":"a;a,b",
i:function(a){return this.b}},a8:{"^":"a;"},id:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fE:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fE("\n")}},I:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},i9:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},ia:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},ic:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},i7:{"^":"a8;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.h(this.c)},
q:{
cV:function(a,b,c,d,e){var z=new A.i7(a,b,c,e)
z.f=d
z.e=P.h1(d,0,!1,P.M)
return z}}},V:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},i8:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},G:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},ib:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},ig:{"^":"a8;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},cW:{"^":"a8;a,b,c,d",
aa:function(a){var z=new Float32Array(H.by(H.x(a,"$ise",[P.t],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},ax:{"^":"a8;a,b,c,d",
aa:function(a){var z=new Float32Array(H.by(H.x(a,"$ise",[P.t],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},ah:{"^":"a8;a,b,c,d",
dD:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},ai:{"^":"a8;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
cd:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.dA()
return(y>0?z+4:z)*2},
bx:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.H(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.H(t+h,s+f,r+g)
z.b=q
p=new V.H(t-h,s-f,r-g)
z.c=p
o=new V.H(y-h,w-f,v-g)
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
j=F.f4(d,e,new F.jR(z,F.cd(z.c),F.cd(z.d),k,l,c),b)
if(j!=null)a.fO(j)},
kb:function(a,b,c){var z={}
z.a=b
z.a=new F.kc()
return F.f4(c,a,new F.kd(z),null)},
f4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aU,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.e0()
y=H.f([],[F.aU])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cY(null,null,new V.c_(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bS(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cY(null,null,new V.c_(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bS(d))}}z.d.fn(a+1,b+1,y)
return z},
jR:{"^":"u:22;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c2(z.b,b).c2(z.d.c2(z.c,b),c)
a.sW(0,new V.an(y.a,y.b,y.c))
a.sdn(y.A(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.scK(new V.cM(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))}},
kc:{"^":"u:34;",
$2:function(a,b){return 0}},
kd:{"^":"u:22;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sW(0,new V.an(z,y,this.a.a.$2(b,c)))
x=new V.H(z,y,1)
a.sdn(x.A(0,Math.sqrt(x.E(x))))
x=1-b
w=1-c
a.scK(new V.cM(b*c,2+x*c,4+b*w,6+x*w))}},
am:{"^":"a;0a,0b,0c,0d,0e",
gbU:function(){return this.a==null||this.b==null||this.c==null},
dY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.da())return
return v.A(0,Math.sqrt(v.E(v)))},
e_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.I(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aO(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
bQ:function(){if(this.d!=null)return!0
var z=this.dY()
if(z==null){z=this.e_()
if(z==null)return!1}this.d=z
this.a.a.Z()
return!0},
dX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.da())return
return v.A(0,Math.sqrt(v.E(v)))},
dZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.k.$2(n,0)){z=r.I(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.I(0,u)
y=z.c
if(typeof y!=="number")return y.k()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.n(t)
t=new V.an(z.a*l+w,z.b*l+v,y*l+t).I(0,x)
t=new V.H(t.a,t.b,t.c)
m=t.A(0,Math.sqrt(t.E(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.aO(m)
z=z.A(0,Math.sqrt(z.E(z))).aO(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
bO:function(){if(this.e!=null)return!0
var z=this.dX()
if(z==null){z=this.dZ()
if(z==null)return!1}this.e=z
this.a.a.Z()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var z,y
if(this.gbU())return a+"disposed"
z=a+C.h.a4(J.a9(this.a.e),0)+", "+C.h.a4(J.a9(this.b.e),0)+", "+C.h.a4(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.w("")},
q:{
bG:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.Z()
return z}}},
cE:{"^":"a;0a,0b",
gbU:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){if(this.gbU())return a+"disposed"
return a+C.h.a4(J.a9(this.a.e),0)+", "+C.h.a4(J.a9(this.b.e),0)},
F:function(){return this.w("")}},
cL:{"^":"a;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a4(J.a9(z.e),0)},
F:function(){return this.w("")}},
e_:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
fO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.R()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.fv())}this.a.R()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cL()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.l(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cE()
s=p.a
if(s==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.r("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.R()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.l(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.R()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bG(p,o,l)}z=this.e
if(!(z==null))z.ag(0)},
az:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.az()||!1
if(!this.a.az())y=!1
z=this.e
if(!(z==null))z.ag(0)
return y},
fq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$bt().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
v=b.gcc(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dm])
for(r=0,q=0;q<w;++q){p=b.fo(q)
o=p.gcc(p)
C.a.a0(s,q,new Z.dm(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.l(y,n)
m=y[n].fJ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a0(t,l,m[k]);++l}}r+=o}H.x(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dn(new Z.ev(34962,j),s,b)
i.b=H.f([],[Z.c8])
if(this.b.b.length!==0){x=P.M
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c8(0,h.length,f))}if(this.c.b.length!==0){x=P.M
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.l(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c8(1,h.length,f))}if(this.d.b.length!==0){x=P.M
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.l(g,q)
g=g[q].b
g.a.a.R()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.l(g,q)
g=g[q].c
g.a.a.R()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c8(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.p])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.V(z,"\n")},
a_:function(a){var z=this.e
if(!(z==null))z.v(a)},
Z:function(){return this.a_(null)},
q:{
e0:function(){var z,y
z=new F.e_()
y=new F.io(z)
y.b=!1
y.c=H.f([],[F.aU])
z.a=y
y=new F.hO(z)
y.b=H.f([],[F.cL])
z.b=y
y=new F.hN(z)
y.b=H.f([],[F.cE])
z.c=y
y=new F.hM(z)
y.b=H.f([],[F.am])
z.d=y
z.e=null
return z}}},
hM:{"^":"a;a,0b",
fn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$ise",[F.aU],"$ase")
z=H.f([],[F.am])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.l(c,x)
r=c[x];++x
if(x>=s)return H.l(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.l(c,p)
o=c[p]
if(y<0||y>=s)return H.l(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bG(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bG(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bG(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bG(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
az:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bQ())x=!1
return x},
bP:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bO())x=!1
return x},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
z=H.f([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
return C.a.V(z,"\n")},
F:function(){return this.w("")}},
hN:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
z=H.f([],[P.p])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.l(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.V(z,"\n")},
F:function(){return this.w("")}},
hO:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
z=H.f([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
return C.a.V(z,"\n")},
F:function(){return this.w("")}},
aU:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bS:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cY(this.cx,x,u,z,y,w,v,a,t)},
fv:function(){return this.bS(null)},
sW:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Z()}},
sdn:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Z()}},
scK:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Z()}},
fJ:function(a){var z,y
z=J.J(a)
if(z.t(a,$.$get$aB())){z=this.f
y=[P.t]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aA())){z=this.r
y=[P.t]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$az())){z=this.x
y=[P.t]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aC())){z=this.y
y=[P.t]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.t(a,$.$get$aD())){z=this.z
y=[P.t]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bs())){z=this.Q
y=[P.t]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bt())){z=this.Q
y=[P.t]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$aW()))return H.f([this.ch],[P.t])
else if(z.t(a,$.$get$ay())){z=this.cx
y=[P.t]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.t])},
bQ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.J(0,new F.iv(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
bO:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.J(0,new F.iu(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ag(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var z,y,x
z=H.f([],[P.p])
C.a.h(z,C.h.a4(J.a9(this.e),0))
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
C.a.h(z,V.D(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.V(z,", ")
return a+"{"+x+"}"},
F:function(){return this.w("")},
q:{
cY:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aU()
y=new F.it(z)
y.b=H.f([],[F.cL])
z.b=y
y=new F.is(z)
x=[F.cE]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.ip(z)
x=[F.am]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$es()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aA().a)!==0?e:null
z.x=(x&$.$get$az().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$et().a)!==0?c:null
z.ch=(x&$.$get$aW().a)!==0?i:0
z.cx=(x&$.$get$ay().a)!==0?a:null
return z}}},
iv:{"^":"u:9;a",
$1:function(a){var z,y
H.i(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
iu:{"^":"u:9;a",
$1:function(a){var z,y
H.i(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
io:{"^":"a;a,0b,0c",
R:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.l(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Z()
return!0},
gl:function(a){return this.c.length},
az:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bQ()
return!0},
bP:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bO()
return!0},
fs:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
this.R()
z=H.f([],[P.p])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
return C.a.V(z,"\n")},
F:function(){return this.w("")}},
ip:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.am]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iq(this,b))
C.a.J(this.d,new F.ir(this,b))},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
z=H.f([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
return C.a.V(z,"\n")},
F:function(){return this.w("")}},
iq:{"^":"u:9;a,b",
$1:function(a){H.i(a,"$isam")
if(!J.P(a.a,this.a))this.b.$1(a)}},
ir:{"^":"u:9;a,b",
$1:function(a){var z
H.i(a,"$isam")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
is:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
z=H.f([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
return C.a.V(z,"\n")},
F:function(){return this.w("")}},
it:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.F()},
w:function(a){var z,y,x,w
z=H.f([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].w(a))
return C.a.V(z,"\n")},
F:function(){return this.w("")}}}],["","",,O,{"^":"",ha:{"^":"cS;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
P:[function(a){var z
H.i(a,"$iso")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.P(null)},"el","$1","$0","gb1",0,2,0],
eL:[function(a){H.i(a,"$iso")
this.a=null
this.P(a)},function(){return this.eL(null)},"hT","$1","$0","geK",0,2,0],
hx:[function(a,b){var z=V.ag
z=new D.bH(a,H.x(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.P(z)},"$2","gei",8,0,23],
hy:[function(a,b){var z=V.ag
z=new D.bI(a,H.x(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.P(z)},"$2","gej",8,0,23],
ct:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.Y(z.e.length+3,4)*4
x=C.f.Y(z.f.length+3,4)*4
w=C.f.Y(z.r.length+3,4)*4
v=C.f.Y(z.x.length+3,4)*4
u=C.f.Y(z.y.length+3,4)*4
t=C.f.Y(z.z.length+3,4)*4
s=C.f.Y(this.e.a.length+3,4)*4
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
a6=$.$get$aB()
if(c){z=$.$get$aA()
a6=new Z.aV(a6.a|z.a)}if(b){z=$.$get$az()
a6=new Z.aV(a6.a|z.a)}if(a){z=$.$get$aC()
a6=new Z.aV(a6.a|z.a)}if(a0){z=$.$get$aD()
a6=new Z.aV(a6.a|z.a)}if(a2){z=$.$get$ay()
a6=new Z.aV(a6.a|z.a)}return new A.hd(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.x(a,"$ise",[T.cT],"$ase")
if(b!=null)if(!C.a.ad(a,b)){b.a=a.length
C.a.h(a,b)}},
a6:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.al(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.aK(x)}}},
h5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.ct()
y=a.fr.j(0,z.ao)
if(y==null){y=A.h9(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.fu(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.a0(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aE
z=b.e
if(!(z instanceof Z.dn)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.az()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bP()
t.a.bP()
t=t.e
if(!(t==null))t.ag(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fs()
s=s.e
if(!(s==null))s.ag(0)}q=b.d.fq(new Z.iw(a.a),v)
q.aF($.$get$aB()).e=this.a.y.c
if(z)q.aF($.$get$aA()).e=this.a.Q.c
if(u)q.aF($.$get$az()).e=this.a.z.c
if(w.rx)q.aF($.$get$aC()).e=this.a.ch.c
if(t)q.aF($.$get$aD()).e=this.a.cx.c
if(w.x1)q.aF($.$get$ay()).e=this.a.cy.c
b.e=q}z=T.cT
p=H.f([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fD()
if(w.fx){u=this.a
t=a.dx
t=t.gK(t)
u=u.db
u.toString
u.aa(t.a5(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gK(t)
s=a.dx
s=t.k(0,s.gK(s))
a.cx=s
t=s}u=u.dx
u.toString
u.aa(t.a5(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gh2()
s=a.dx
s=t.k(0,s.gK(s))
a.ch=s
t=s}u=u.fr
u.toString
u.aa(t.a5(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.aa(t.a5(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.aa(t.a5(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.aa(C.x.a5(t,!0))}if(w.aD>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.l(s,n)
s=s[n]
t.toString
H.i(s,"$isag")
t=t.k3
if(n>=t.length)return H.l(t,n)
t=t[n]
m=new Float32Array(H.by(H.x(s.a5(0,!0),"$ise",u,"$ase")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.f.d)
u=this.a
t=this.f.d
u.a7(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.f.e)
u=this.a
t=this.f.e
u.a1(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.r.d)
u=this.a
t=this.r.d
u.a7(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.r.e)
u=this.a
t=this.r.e
u.a1(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.x.d)
u=this.a
t=this.x.d
u.a7(u.aD,u.aE,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.x.e)
u=this.a
t=this.x.e
u.a1(u.ao,u.aE,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.b7
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.y.d)
u=this.a
t=this.y.d
u.a7(u.cP,u.b8,t)
t=this.a
u=this.y.f
t=t.b7
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.y.e)
u=this.a
t=this.y.e
u.a1(u.cQ,u.b8,t)
t=this.a
u=this.y.f
t=t.b7
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b9
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bb
t.a.uniform1f(t.d,r)
break
case C.c:this.M(p,this.z.d)
u=this.a
t=this.z.d
u.a7(u.cR,u.ba,t)
t=this.a
u=this.z.f
t=t.b9
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bb
u.a.uniform1f(u.d,r)
break
case C.d:this.M(p,this.z.e)
u=this.a
t=this.z.e
u.a1(u.cS,u.ba,t)
t=this.a
u=this.z.f
t=t.b9
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bb
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d2
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bV
if(k>=s.length)return H.l(s,k)
h=s[k]
s=l.aK(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.k()
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.d3
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bW
if(k>=s.length)return H.l(s,k)
h=s[k]
s=i.gaS(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aW(i.gaS(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga2(i)
f=h.d
g=s.gbl()
r=s.gaX()
s=s.gb4()
f.a.uniform3f(f.d,g,r,s)
s=i.gbJ()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbK()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbL()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.d4
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bX
if(k>=s.length)return H.l(s,k)
h=s[k]
s=i.gaS(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbT(i).i_()
f=h.c
g=s.gaA(s)
r=s.gaB(s)
s=s.gaC()
f.a.uniform3f(f.d,g,r,s)
s=l.aW(i.gaS(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga2(i)
r=h.e
g=s.gbl()
f=s.gaX()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.ghY()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghX()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbK()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbL()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.d5
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
r=this.a.bY
if(k>=r.length)return H.l(r,k)
h=r[k]
r=i.gaU()
H.x(p,"$ise",s,"$ase")
if(!C.a.ad(p,r)){r.sb0(p.length)
C.a.h(p,r)}r=i.gbT(i)
g=h.d
f=r.gaA(r)
e=r.gaB(r)
r=r.gaC()
g.a.uniform3f(g.d,f,e,r)
r=i.ghi()
e=h.b
f=r.gaA(r)
g=r.gaB(r)
r=r.gaC()
e.a.uniform3f(e.d,f,g,r)
r=i.gaT(i)
g=h.c
f=r.gaA(r)
e=r.gaB(r)
r=r.gaC()
g.a.uniform3f(g.d,f,e,r)
r=l.aK(i.gbT(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.k()
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga2(i)
f=h.f
e=g.gbl()
r=g.gaX()
g=g.gb4()
f.a.uniform3f(f.d,e,r,g)
g=i.gaU()
r=g.gc3(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.ge9()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb0())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.d6
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
g=this.a.bZ
if(k>=g.length)return H.l(g,k)
h=g[k]
g=i.gaU()
H.x(p,"$ise",r,"$ase")
if(!C.a.ad(p,g)){g.sb0(p.length)
C.a.h(p,g)}d=l.k(0,i.gK(i))
g=i.gK(i).aW(new V.an(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gcb(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aW(new V.an(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.bk(0)
c=h.d
m=new Float32Array(H.by(H.x(new V.aJ(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a5(0,!0),"$ise",s,"$ase")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga2(i)
g=h.e
e=c.gbl()
f=c.gaX()
c=c.gb4()
g.a.uniform3f(g.d,e,f,c)
c=i.gaU()
g=c.gc3(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gc3(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ghZ(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbJ()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbK()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbL()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.d7
u.a.uniform1i(u.d,o)
u=a.db
l=u.gK(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.c_
if(k>=s.length)return H.l(s,k)
h=s[k]
s=i.gaU()
H.x(p,"$ise",z,"$ase")
if(!C.a.ad(p,s)){s.sb0(p.length)
C.a.h(p,s)}s=i.gaS(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbT(i)
f=h.c
g=s.gaA(s)
r=s.gaB(s)
s=s.gaC()
f.a.uniform3f(f.d,g,r,s)
s=i.ghi()
r=h.d
g=s.gaA(s)
f=s.gaB(s)
s=s.gaC()
r.a.uniform3f(r.d,g,f,s)
s=i.gaT(i)
f=h.e
g=s.gaA(s)
r=s.gaB(s)
s=s.gaC()
f.a.uniform3f(f.d,g,r,s)
s=l.aW(i.gaS(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaU()
r=s.gc3(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.ge9()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb0())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga2(i)
r=h.y
g=s.gbl()
f=s.gaX()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.gi6()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gi7()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbK()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbL()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.M(p,this.Q.d)
z=this.a
u=this.Q.d
z.a7(z.cT,z.bc,u)
break
case C.d:this.M(p,this.Q.e)
z=this.a
u=this.Q.e
z.a1(z.cU,z.bc,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gK(u).bk(0)
a.Q=u}z=z.fy
z.toString
z.aa(u.a5(0,!0))}if(w.dy){this.M(p,this.ch)
z=this.a
u=this.ch
z.a1(z.cV,z.cW,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.bd
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.M(p,this.cx.d)
z=this.a
u=this.cx.d
z.a7(z.cX,z.be,u)
u=this.a
z=this.cx.f
u=u.bd
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.M(p,this.cx.e)
z=this.a
u=this.cx.e
z.a1(z.cY,z.be,u)
u=this.a
z=this.cx.f
u=u.bd
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.bg
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bf
u.a.uniform1f(u.d,s)
break
case C.c:this.M(p,this.cy.d)
z=this.a
u=this.cy.d
z.a7(z.cZ,z.bh,u)
u=this.a
z=this.cy.f
u=u.bg
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bf
z.a.uniform1f(z.d,s)
break
case C.d:this.M(p,this.cy.e)
z=this.a
u=this.cy.e
z.a1(z.d_,z.bh,u)
u=this.a
z=this.cy.f
u=u.bg
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bf
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.bi
z.a.uniform1f(z.d,t)
break
case C.c:this.M(p,this.db.d)
z=this.a
t=this.db.d
z.a7(z.d0,z.bj,t)
t=this.a
z=this.db.f
t=t.bi
t.a.uniform1f(t.d,z)
break
case C.d:this.M(p,this.db.e)
z=this.a
t=this.db.e
z.a1(z.d1,z.bj,t)
t=this.a
z=this.db.f
t=t.bi
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bM(a)
z.aJ(a)
z.hh(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fB()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ct().ao},
q:{
dO:function(){var z,y,x,w
z=new O.ha()
y=O.cs(V.ag)
z.e=y
y.aY(z.gei(),z.gej())
y=new O.aQ(z,"emission")
y.c=C.b
y.f=new V.T(0,0,0)
z.f=y
y=new O.aQ(z,"ambient")
y.c=C.b
y.f=new V.T(0,0,0)
z.r=y
y=new O.aQ(z,"diffuse")
y.c=C.b
y.f=new V.T(0,0,0)
z.x=y
y=new O.aQ(z,"invDiffuse")
y.c=C.b
y.f=new V.T(0,0,0)
z.y=y
y=new O.hf(z,"specular")
y.c=C.b
y.f=new V.T(0,0,0)
y.ch=100
z.z=y
y=new O.hc(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.aQ(z,"reflect")
y.c=C.b
y.f=new V.T(0,0,0)
z.cx=y
y=new O.he(z,"refract")
y.c=C.b
y.f=new V.T(0,0,0)
y.ch=1
z.cy=y
y=new O.hb(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.fU()
y.aZ(D.Y)
y.e=H.f([],[D.c3])
y.f=H.f([],[D.hs])
y.r=H.f([],[D.hP])
y.x=H.f([],[D.hY])
y.y=H.f([],[D.hZ])
y.z=H.f([],[D.i_])
y.Q=null
y.ch=null
y.bn(y.geh(),y.geC(),y.geE())
z.dx=y
x=y.Q
if(x==null){x=D.E()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.o]}
w=H.b(z.geK(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.E()
w.ch=y}x=H.b(z.gb1(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},hb:{"^":"cG;0f,a,b,0c,0d,0e",
eO:function(a){var z,y
z=this.f
if(!$.k.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.t])
z.b=!0
this.a.P(z)}},
ax:function(){this.cf()
this.eO(1)}},cG:{"^":"a;",
P:[function(a){this.a.P(H.i(a,"$iso"))},function(){return this.P(null)},"el","$1","$0","gb1",0,2,0],
ax:["cf",function(){}],
eR:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gb1(),{func:1,ret:-1,args:[D.o]})
C.a.T(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gb1(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.B(this.b+".texture2D",x,this.d,this,[T.e6])
z.b=!0
this.a.P(z)}},
eS:function(a){},
sdm:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.ax()
this.c=C.c
this.eS(null)
z=this.a
z.a=null
z.P(null)}this.eR(a)}},hc:{"^":"cG;a,b,0c,0d,0e"},aQ:{"^":"cG;0f,a,b,0c,0d,0e",
cE:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.P(y)}},
ax:["bp",function(){this.cf()
this.cE(new V.T(1,1,1))}],
sa2:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.ax()
z=this.a
z.a=null
z.P(null)}this.cE(b)}},he:{"^":"aQ;0ch,0f,a,b,0c,0d,0e",
eQ:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.P(z)}},
ax:function(){this.bp()
this.eQ(1)}},hf:{"^":"aQ;0ch,0f,a,b,0c,0d,0e",
bE:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.P(z)}},
ax:function(){this.bp()
this.bE(100)}},cS:{"^":"a;"}}],["","",,T,{"^":"",cT:{"^":"cn;"},e6:{"^":"cT;0b,0c,0d,0e,0f,0r,0x,0y,a"},hW:{"^":"a;a,0b,0c,0d,0e",
fM:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,10497)
z.texParameteri(3553,10243,10497)
z.texParameteri(3553,10241,9987)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.e6(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.E()
z=W.a6
W.W(x,"load",H.b(new T.hX(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
fL:function(a,b,c){return this.fM(a,!1,b,!1,c)},
eM:function(a,b,c){var z,y,x,w
b=V.dd(b,2)
z=V.dd(a.width,2)
y=V.dd(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cr(null,null)
x.width=z
x.height=y
w=H.i(C.k.dw(x,"2d"),"$isdr")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k5(w.getImageData(0,0,x.width,x.height))}}},hX:{"^":"u:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.eM(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.G.hb(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.fC()}++x.e}}}],["","",,X,{"^":"",dq:{"^":"a;",$isaw:1},fJ:{"^":"e4;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z}},hq:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
aM:[function(a){var z
H.i(a,"$iso")
z=this.e
if(!(z==null))z.v(a)},function(){return this.aM(null)},"ho","$1","$0","gck",0,2,0],
saI:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.b(this.gck(),{func:1,ret:-1,args:[D.o]})
C.a.T(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gck(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.B("mover",x,this.a,this,[U.a0])
z.b=!0
this.aM(z)}},
$isaw:1,
$isdq:1},e4:{"^":"a;"}}],["","",,B,{"^":"",
kw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eP(x,(x&&C.m).cn(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a6
W.W(z,"scroll",H.b(new B.kx(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
ky:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(b,"$ise",[P.p],"$ase")
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
u=W.cr(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.i(v.insertCell(-1),"$isbo")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.i(q.insertCell(-1),"$isbo").style
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
t=H.i(q.insertCell(-1),"$isbo")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.i(q.insertCell(-1),"$isbo")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.i(q.insertCell(-1),"$isbo").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kw(a,y,!1,"../resources/SnowTop.png")},
kz:function(a){P.i3(C.u,new B.kA(a))},
fj:{"^":"a;0a",
fm:function(a,b,c,d){var z,y,x,w,v
H.b(c,{func:1,ret:-1,args:[P.X]})
if(this.a==null)return
c.$1(!1)
z=document
y=z.createElement("label")
x=y.style
x.whiteSpace="nowrap"
J.dg(this.a).h(0,y)
w=W.fM("checkbox")
w.checked=!1
x=W.a6
W.W(w,"change",H.b(new B.fk(c,w),{func:1,ret:-1,args:[x]}),!1,x)
y.appendChild(w)
v=z.createElement("span")
v.textContent=b
y.appendChild(v)
J.dg(this.a).h(0,z.createElement("br"))}},
fk:{"^":"u:12;a,b",
$1:function(a){this.a.$1(this.b.checked)}},
kx:{"^":"u:12;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.h(-0.05*C.j.a8(this.b.scrollTop))+"px"
z.top=y}},
kA:{"^":"u:38;a",
$1:function(a){H.i(a,"$isaS")
P.de(C.j.dr(this.a.gfF(),2)+" fps")}}}],["","",,X,{"^":"",
k6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=O.dO()
y=z.dx
x=U.c1(V.cJ(1,-3,-1,null))
y.h(0,D.cv(new V.T(0.4,0.4,1),x))
y=z.dx
x=U.c1(V.cJ(0,1,0,null))
y.h(0,D.cv(new V.T(0,0.2,0.1),x))
y=z.r
y.sa2(0,new V.T(0.2,0.2,0.2))
y=z.x
y.sa2(0,new V.T(0.7,0.7,0.7))
z.z.sa2(0,new V.T(1,1,1))
y=z.z
if(y.c===C.b){y.c=C.e
y.bp()
y.bE(100)
x=y.a
x.a=null
x.P(null)}y.bE(10)
w=E.c4(null,!0,null,"",null,null)
w.sc9(z)
v=F.e0()
F.bx(v,null,null,1,1,1,0,0,1)
F.bx(v,null,null,1,1,0,1,0,3)
F.bx(v,null,null,1,1,0,0,1,2)
F.bx(v,null,null,1,1,-1,0,0,0)
F.bx(v,null,null,1,1,0,-1,0,0)
F.bx(v,null,null,1,1,0,0,-1,3)
v.az()
for(y=[U.a0],x=[P.t],u=-60;u<=60;u+=12)for(t=u/10,s=-60;s<=60;s+=12){r=E.c4(null,!0,null,"",null,null)
r.sbo(0,v)
q=s/10
p=new U.dY()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.sds(t)
p.sdg(0,q)
p.sdk(0)
o=p.d
if(!$.k.$2(o,t)){n=p.d
p.d=t
o=new D.B("deltaYaw",n,t,p,x)
o.b=!0
m=p.y
if(!(m==null))m.v(o)}o=p.e
if(!$.k.$2(o,q)){n=p.e
p.e=q
q=new D.B("deltaPitch",n,q,p,x)
q.b=!0
o=p.y
if(!(o==null))o.v(q)}q=p.f
if(!$.k.$2(q,0.32)){n=p.f
p.f=0.32
q=new D.B("deltaRoll",n,0.32,p,x)
q.b=!0
o=p.y
if(!(o==null))o.v(q)}q=new U.ct()
q.sK(0,new V.ag(1,0,0,u,0,1,0,0,0,0,1,s,0,0,0,1))
r.saI(U.dE(H.f([p,q],y)))
q=w.y
p=H.y(q,0)
H.C(r,p)
o=[p]
if(q.bB(H.f([r],o))){m=q.a
l=m.length
C.a.h(m,r)
p=H.x(H.f([r],o),"$isc",[p],"$asc")
q=q.c
if(q!=null)q.$2(l,p)}}return w},
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
B.ky("Test 038",H.f(["options"],[P.p]),"A test of basic 3D movement around a room similar to a first person view. A and D (left and right arrow keys) strifes left and right. W and S (up and down arrow keys) moves forward and backward. Q and E moves up and down. Mouse looks around with left mouse button pressed.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.q(P.r("Failed to find an element with the identifier, threeDart."))
x=E.i1(y,!0,!0,!0,!1)
w=E.c4(null,!0,null,"",null,null)
v=w.y
u=x.f.fL("../resources/Grass.png",!0,!0)
t=U.c1(V.dR(0,-3,0).k(0,V.aq(1000,0,0,0,0,1,0,0,0,0,1000,0,0,0,0,1)).k(0,V.cI(-1.5707963267948966)))
s=O.dO()
r=new V.aJ(1000,0,0,0,1000,0,0,0,1)
if(!J.P(s.b,r)){q=s.b
p=q==null&&!0
if(p)s.a=null
s.b=r
q=new D.B("texture2DMatrix",q,r,s,[V.aJ])
q.b=!0
s.P(q)}s.dx.h(0,D.cv(new V.T(1,1,1),U.c1(V.cJ(1,-3,-1,null))))
q=s.r
q.sa2(0,new V.T(0.5,0.5,0.5))
q=s.x
q.sa2(0,new V.T(0.5,0.5,0.5))
s.r.sdm(u)
s.x.sdm(u)
q=E.c4(null,!0,null,"",null,null)
q.sbo(0,F.kb(20,null,20))
q.saI(t)
q.sc9(s)
v.h(0,q)
w.y.h(0,X.k6(x))
q=x.r
o=new U.im()
v=X.be()
v.h(0,new X.Q(39,new X.Z(!1,!1,!1)))
v.h(0,new X.Q(68,new X.Z(!1,!1,!1)))
p=v.gaG()
p.toString
n={func:1,ret:-1,args:[D.o]}
m=H.b(o.ges(),n)
C.a.h(p.a,m)
o.a=v
v=X.be()
v.h(0,new X.Q(37,new X.Z(!1,!1,!1)))
v.h(0,new X.Q(65,new X.Z(!1,!1,!1)))
C.a.h(v.gaG().a,m)
o.b=v
v=X.be()
v.h(0,new X.Q(81,new X.Z(!1,!1,!1)))
C.a.h(v.gaG().a,m)
o.c=v
v=X.be()
v.h(0,new X.Q(69,new X.Z(!1,!1,!1)))
C.a.h(v.gaG().a,m)
o.d=v
v=X.be()
v.h(0,new X.Q(40,new X.Z(!1,!1,!1)))
v.h(0,new X.Q(83,new X.Z(!1,!1,!1)))
C.a.h(v.gaG().a,m)
o.e=v
v=X.be()
v.h(0,new X.Q(38,new X.Z(!1,!1,!1)))
v.h(0,new X.Q(87,new X.Z(!1,!1,!1)))
C.a.h(v.gaG().a,m)
o.f=v
v=U.bD()
v.saP(30)
v.san(0)
m=v.gu()
m.toString
p=H.b(o.gat(),n)
C.a.h(m.a,p)
o.r=v
v=U.bD()
v.saP(30)
v.san(0)
C.a.h(v.gu().a,p)
o.x=v
v=U.bD()
v.saP(30)
v.san(0)
C.a.h(v.gu().a,p)
o.y=v
o.z=null
o.Q=null
o.ch=60
o.cx=15
o.cy=0
o.db=null
o.dx=null
o.dy=null
o.a.ac(q)
o.b.ac(q)
o.c.ac(q)
o.d.ac(q)
o.e.ac(q)
o.f.ac(q)
v=x.r
l=new U.il()
q=U.bD()
q.sca(0,!0)
q.sc4(6.283185307179586)
q.sc5(0)
q.sW(0,0)
q.saP(100)
q.sL(0)
q.san(0.5)
l.b=q
q=q.gu()
q.toString
p=H.b(l.gat(),n)
C.a.h(q.a,p)
q=U.bD()
q.sca(0,!0)
q.sc4(6.283185307179586)
q.sc5(0)
q.sW(0,0)
q.saP(100)
q.sL(0)
q.san(0.5)
l.c=q
C.a.h(q.gu().a,p)
l.d=null
l.e=!1
l.f=!1
l.r=!1
l.x=2.5
l.y=2.5
l.z=2
l.Q=4
l.cx=!1
l.ch=!1
l.cy=0
l.db=0
l.dx=null
l.dy=0
l.fr=null
l.fx=null
k=new X.Z(!1,!1,!1)
j=l.d
l.d=k
q=new D.B("modifiers",j,k,l,[X.Z])
q.b=!0
l.G(q)
q=l.f
if(q!==!1){l.f=!1
q=new D.B("invertX",q,!1,l,[P.X])
q.b=!0
l.G(q)}q=l.r
if(q!==!1){l.r=!1
q=new D.B("invertY",q,!1,l,[P.X])
q.b=!0
l.G(q)}l.ac(v)
l.b.sc4(1.5707963267948966)
l.b.sc5(-1.5707963267948966)
l.b.san(1)
l.c.san(1)
l.b.sca(0,!1)
v=l.gu()
v.toString
q=H.b(new X.ko(o,l),n)
C.a.h(v.a,q)
i=U.dE(H.f([o,l],[U.a0]))
q=new M.fD()
v=O.cs(E.av)
q.d=v
v.aY(q.gem(),q.gen())
q.e=null
q.f=null
q.r=null
q.x=null
h=new X.hq()
h.b=1.0471975511965976
h.c=0.1
h.d=2000
h.saI(null)
v=h.b
if(!$.k.$2(v,1.0471975511965976)){j=h.b
h.b=1.0471975511965976
v=new D.B("fov",j,1.0471975511965976,h,[P.t])
v.b=!0
h.aM(v)}v=h.c
if(!$.k.$2(v,0.1)){j=h.c
h.c=0.1
v=new D.B("near",j,0.1,h,[P.t])
v.b=!0
h.aM(v)}v=h.d
if(!$.k.$2(v,2000)){j=h.d
h.d=2000
v=new D.B("far",j,2000,h,[P.t])
v.b=!0
h.aM(v)}v=q.a
if(v!==h){if(v!=null){v=v.gu()
v.toString
p=H.b(q.gau(),n)
C.a.T(v.a,p)}j=q.a
q.a=h
v=h.gu()
v.toString
p=H.b(q.gau(),n)
C.a.h(v.a,p)
v=new D.B("camera",j,q.a,q,[X.dq])
v.b=!0
q.aL(v)}g=new X.fJ()
v=new V.c_(0,0,0,1)
g.a=v
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
v=V.dX(0,0,1,1)
g.r=v
v=q.b
if(v!==g){if(v!=null){v=v.gu()
v.toString
p=H.b(q.gau(),n)
C.a.T(v.a,p)}j=q.b
q.b=g
v=g.gu()
v.toString
p=H.b(q.gau(),n)
C.a.h(v.a,p)
v=new D.B("target",j,q.b,q,[X.e4])
v.b=!0
q.aL(v)}q.d.h(0,w)
q.a.saI(i)
v=x.d
if(v!==q){if(v!=null){v=v.gu()
v.toString
p=H.b(x.gci(),n)
C.a.T(v.a,p)}x.d=q
v=q.gu()
v.toString
n=H.b(x.gci(),n)
C.a.h(v.a,n)
x.dM()}v=new B.fj()
z=z.getElementById("options")
v.a=z
if(z==null)H.q("Failed to find options for CheckGroup")
v.fm(0,"Mouse Locking",new X.kp(x),!1)
B.kz(x)},
ko:{"^":"u:8;a,b",
$1:function(a){var z,y,x,w,v
H.i(a,"$iso")
z=this.a
y=-this.b.c.d
x=Math.cos(y)
w=Math.sin(y)
y=new V.aJ(x,0,-w,0,1,0,w,0,x)
if(!J.P(z.z,y)){v=z.z
z.z=y
z.Q=y.bk(0)
y=new D.B("velocityRotation",v,z.z,z,[V.aJ])
y.b=!0
z.G(y)}}},
kp:{"^":"u:39;a",
$1:function(a){this.a.r.r=a}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.cz.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.bJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.bU=function(a){if(typeof a=="string")return J.cz.prototype
if(a==null)return a
if(a.constructor==Array)return J.bJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.d9=function(a){if(a==null)return a
if(a.constructor==Array)return J.bJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.k9=function(a){if(typeof a=="number")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cX.prototype
return a}
J.b2=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).t(a,b)}
J.f6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k9(a).a9(a,b)}
J.f7=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kl(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).j(a,b)}
J.f8=function(a,b,c,d){return J.b2(a).cJ(a,b,c,d)}
J.cm=function(a,b,c){return J.bU(a).ft(a,b,c)}
J.df=function(a,b){return J.d9(a).C(a,b)}
J.f9=function(a,b){return J.d9(a).J(a,b)}
J.dg=function(a){return J.b2(a).gbR(a)}
J.aH=function(a){return J.J(a).gO(a)}
J.bX=function(a){return J.d9(a).gS(a)}
J.b5=function(a){return J.bU(a).gl(a)}
J.fa=function(a,b){return J.b2(a).sU(a,b)}
J.a9=function(a){return J.J(a).i(a)}
var $=I.p
C.k=W.cq.prototype
C.m=W.fr.prototype
C.v=J.m.prototype
C.a=J.bJ.prototype
C.w=J.dI.prototype
C.f=J.dJ.prototype
C.x=J.dK.prototype
C.j=J.c9.prototype
C.h=J.cz.prototype
C.E=J.bK.prototype
C.F=W.hm.prototype
C.p=J.hr.prototype
C.G=P.cP.prototype
C.l=J.cX.prototype
C.q=W.bu.prototype
C.r=W.iz.prototype
C.t=new P.ho()
C.i=new P.jk()
C.b=new A.c0(0,"ColorSourceType.None")
C.e=new A.c0(1,"ColorSourceType.Solid")
C.c=new A.c0(2,"ColorSourceType.Texture2D")
C.d=new A.c0(3,"ColorSourceType.TextureCube")
C.u=new P.bF(5e6)
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
$.ap=0
$.b6=null
$.dk=null
$.d2=!1
$.eY=null
$.eS=null
$.f3=null
$.ch=null
$.cj=null
$.da=null
$.aY=null
$.bz=null
$.bA=null
$.d3=!1
$.O=C.i
$.dz=null
$.dy=null
$.dx=null
$.dw=null
$.k=V.hg()
$.dU=null
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
I.$lazy(y,x,w)}})(["dv","$get$dv",function(){return H.eX("_$dart_dartClosure")},"cA","$get$cA",function(){return H.eX("_$dart_js")},"ea","$get$ea",function(){return H.as(H.cb({
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.as(H.cb({$method$:null,
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.as(H.cb(null))},"ed","$get$ed",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.as(H.cb(void 0))},"ei","$get$ei",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.as(H.eg(null))},"ee","$get$ee",function(){return H.as(function(){try{null.$method$}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.as(H.eg(void 0))},"ej","$get$ej",function(){return H.as(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d_","$get$d_",function(){return P.iA()},"bB","$get$bB",function(){return[]},"du","$get$du",function(){return{}},"eu","$get$eu",function(){return Z.aj(0)},"es","$get$es",function(){return Z.aj(511)},"aB","$get$aB",function(){return Z.aj(1)},"aA","$get$aA",function(){return Z.aj(2)},"az","$get$az",function(){return Z.aj(4)},"aC","$get$aC",function(){return Z.aj(8)},"aD","$get$aD",function(){return Z.aj(16)},"bs","$get$bs",function(){return Z.aj(32)},"bt","$get$bt",function(){return Z.aj(64)},"et","$get$et",function(){return Z.aj(96)},"aW","$get$aW",function(){return Z.aj(128)},"ay","$get$ay",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1,args:[D.o]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:-1,args:[P.p,,]},{func:1,ret:-1,args:[P.M,[P.c,E.av]]},{func:1,ret:P.F,args:[D.o]},{func:1,ret:P.F,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.F,args:[W.a6]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.p,args:[P.M]},{func:1,args:[,]},{func:1,ret:-1,args:[P.M,[P.c,X.Q]]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.M,[P.c,D.Y]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.M,[P.c,U.a0]]},{func:1,ret:P.F,args:[F.aU,P.t,P.t]},{func:1,ret:-1,args:[P.M,[P.c,V.ag]]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.X,args:[W.K]},{func:1,ret:P.X,args:[P.t,P.t]},{func:1,ret:W.a3,args:[W.K]},{func:1,ret:P.X,args:[[P.c,D.Y]]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[P.p]},{func:1,ret:P.F,args:[P.R]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.o]}]},{func:1,ret:P.X,args:[[P.c,X.Q]]},{func:1,args:[,P.p]},{func:1,ret:P.F,args:[P.aS]},{func:1,ret:P.F,args:[P.X]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bu]}]
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
if(x==y)H.kC(d||a)
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
Isolate.d7=a.d7
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
if(typeof dartMainRunner==="function")dartMainRunner(X.f0,[])
else X.f0([])})})()
//# sourceMappingURL=test.dart.js.map
