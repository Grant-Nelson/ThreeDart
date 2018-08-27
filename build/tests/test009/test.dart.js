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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cW(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cX=function(){}
var dart=[["","",,H,{"^":"",lL:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
d2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cj:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d_==null){H.kA()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.eo("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cy()]
if(v!=null)return v
v=H.kF(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cy(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
t:function(a,b){return a===b},
gR:function(a){return H.bo(a)},
i:["dA",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fM:{"^":"m;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isa9:1},
dx:{"^":"m;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isF:1},
cz:{"^":"m;",
gR:function(a){return 0},
i:["dB",function(a){return String(a)}]},
hp:{"^":"cz;"},
ce:{"^":"cz;"},
bM:{"^":"cz;",
i:function(a){var z=a[$.$get$dl()]
if(z==null)return this.dB(a)
return"JavaScript function for "+H.j(J.ai(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscv:1},
aU:{"^":"m;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.am("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.r(P.am("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.bb(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.V(z,y,H.j(a[y]))
return z.join(b)},
fL:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bn:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ad(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ad(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gc0:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.fK())},
b7:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cw(a,"[","]")},
gU:function(a){return new J.an(a,a.length,0,[H.y(a,0)])},
gR:function(a){return H.bo(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.am("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.bX(b,"newLength",null))
if(b<0)throw H.f(P.ad(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.Z(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.am("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aO(a,b))
if(b>=a.length||b<0)throw H.f(H.aO(a,b))
a[b]=c},
$ish:1,
$isc:1,
q:{
fL:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.bX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ad(a,0,4294967295,"length",null))
return J.dv(new Array(a),b)},
dv:function(a,b){return J.bh(H.b(a,[b]))},
bh:function(a){H.bG(a)
a.fixed$length=Array
return a}}},
lK:{"^":"aU;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bL:{"^":"m;",
gfK:function(a){return a===0?1/a<0:a<0},
d8:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.am(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.am(""+a+".round()"))},
dn:function(a,b){var z
if(b>20)throw H.f(P.ad(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfK(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.f(H.aN(b))
return a*b},
dv:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cE(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cE(a,b)},
cE:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.am("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.eV(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eV:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.f(H.aN(b))
return a<b},
$isv:1,
$isR:1},
dw:{"^":"bL;",$isB:1},
fN:{"^":"bL;"},
c7:{"^":"m;",
bR:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aO(a,b))
if(b<0)throw H.f(H.aO(a,b))
if(b>=a.length)H.r(H.aO(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.f(H.aO(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.S(b)
if(typeof b!=="string")throw H.f(P.bX(b,null,null))
return a+b},
bo:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.cc(b,null,null))
if(b>c)throw H.f(P.cc(b,null,null))
if(c>a.length)throw H.f(P.cc(c,null,null))
return a.substring(b,c)},
cg:function(a,b){return this.bo(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
am:function(a,b){return this.fX(a,b," ")},
fu:function(a,b,c){if(c>a.length)throw H.f(P.ad(c,0,a.length,null,null))
return H.f2(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdK:1,
$isl:1}}],["","",,H,{"^":"",
fK:function(){return new P.hY("No element")},
a_:{"^":"iw;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.bR(this.a,b)},
$asep:function(){return[P.B]},
$ast:function(){return[P.B]},
$ash:function(){return[P.B]},
$asc:function(){return[P.B]}},
fv:{"^":"h;"},
dD:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.bU(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.bb(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
h3:{"^":"h;a,b,$ti",
gU:function(a){return new H.h4(J.bH(this.a),this.b,this.$ti)},
gl:function(a){return J.b9(this.a)},
E:function(a,b){return this.b.$1(J.d5(this.a,b))},
$ash:function(a,b){return[b]}},
h4:{"^":"cx;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascx:function(a,b){return[b]}},
iQ:{"^":"h;a,b,$ti",
gU:function(a){return new H.iR(J.bH(this.a),this.b,this.$ti)}},
iR:{"^":"cx;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c3:{"^":"a;$ti"},
ep:{"^":"a;$ti"},
iw:{"^":"c8+ep;"}}],["","",,H,{"^":"",
kv:function(a){return init.types[H.Z(a)]},
kD:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isC},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ai(a)
if(typeof z!=="string")throw H.f(H.aN(a))
return z},
bo:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aX:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isce){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aZ(w,0)===36)w=C.i.cg(w,1)
r=H.d0(H.bG(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dN:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hz:function(a){var z,y,x,w
z=H.b([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aN(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b2(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aN(w))}return H.dN(z)},
dO:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aN(x))
if(x<0)throw H.f(H.aN(x))
if(x>65535)return H.hz(a)}return H.dN(a)},
hy:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b2(z,10))>>>0,56320|z&1023)}throw H.f(P.ad(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hx:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hv:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hr:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
hs:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hu:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hw:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
ht:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
n:function(a){throw H.f(H.aN(a))},
i:function(a,b){if(a==null)J.b9(a)
throw H.f(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.Z(J.b9(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.cc(b,"index",null)},
kq:function(a,b,c){if(a>c)return new P.cb(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
aN:function(a){return new P.aJ(!0,a,null,null)},
f:function(a){var z
if(a==null)a=new P.dJ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f4})
z.name=""}else z.toString=H.f4
return z},
f4:function(){return J.ai(this.dartException)},
r:function(a){throw H.f(a)},
z:function(a){throw H.f(P.bb(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cA(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dI(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e7()
u=$.$get$e8()
t=$.$get$e9()
s=$.$get$ea()
r=$.$get$ee()
q=$.$get$ef()
p=$.$get$ec()
$.$get$eb()
o=$.$get$eh()
n=$.$get$eg()
m=v.a1(y)
if(m!=null)return z.$1(H.cA(H.S(y),m))
else{m=u.a1(y)
if(m!=null){m.method="call"
return z.$1(H.cA(H.S(y),m))}else{m=t.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=r.a1(y)
if(m==null){m=q.a1(y)
if(m==null){m=p.a1(y)
if(m==null){m=s.a1(y)
if(m==null){m=o.a1(y)
if(m==null){m=n.a1(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dI(H.S(y),m))}}return z.$1(new H.iv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dV()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dV()
return a},
b7:function(a){var z
if(a==null)return new H.eG(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eG(a)},
ks:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.V(0,a[y],a[x])}return b},
kC:function(a,b,c,d,e,f){H.k(a,"$iscv")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kC)
a.$identity=z
return z},
fj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isc){z.$reflectionInfo=d
x=H.hC(z).r}else x=d
w=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ao
if(typeof u!=="number")return u.G()
$.ao=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dg(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kv,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d9:H.cp
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dg(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fg:function(a,b,c,d){var z=H.cp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dg:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fg(y,!w,z,b)
if(y===0){w=$.ao
if(typeof w!=="number")return w.G()
$.ao=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ba
if(v==null){v=H.bY("self")
$.ba=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ao
if(typeof w!=="number")return w.G()
$.ao=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.bY("self")
$.ba=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fh:function(a,b,c,d){var z,y
z=H.cp
y=H.d9
switch(b?-1:a){case 0:throw H.f(H.hL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fi:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.bY("self")
$.ba=z}y=$.d8
if(y==null){y=H.bY("receiver")
$.d8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ao
if(typeof y!=="number")return y.G()
$.ao=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ao
if(typeof y!=="number")return y.G()
$.ao=y+1
return new Function(z+y+"}")()},
cW:function(a,b,c,d,e,f,g){var z,y
z=J.bh(H.bG(b))
H.Z(c)
y=!!J.J(d).$isc?J.bh(d):d
return H.fj(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.au(a,"String"))},
kI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.au(a,"num"))},
eT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.au(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.au(a,"int"))},
f0:function(a,b){throw H.f(H.au(a,H.S(b).substring(3)))},
kK:function(a,b){var z=J.bU(b)
throw H.f(H.ff(a,z.bo(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.f0(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kK(a,b)},
bG:function(a){if(a==null)return a
if(!!J.J(a).$isc)return a
throw H.f(H.au(a,"List"))},
kE:function(a,b){if(a==null)return a
if(!!J.J(a).$isc)return a
if(J.J(a)[b])return a
H.f0(a,b)},
eU:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bT:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eU(J.J(a))
if(z==null)return!1
y=H.eX(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.cS)return a
$.cS=!0
try{if(H.bT(a,b))return a
z=H.bW(b)
y=H.au(a,z)
throw H.f(y)}finally{$.cS=!1}},
cY:function(a,b){if(a!=null&&!H.cV(a,b))H.r(H.au(a,H.bW(b)))
return a},
eO:function(a){var z
if(a instanceof H.u){z=H.eU(J.J(a))
if(z!=null)return H.bW(z)
return"Closure"}return H.aX(a)},
kP:function(a){throw H.f(new P.fn(H.S(a)))},
eV:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mH:function(a,b,c){return H.b8(a["$as"+H.j(c)],H.aP(b))},
bF:function(a,b,c,d){var z
H.S(c)
H.Z(d)
z=H.b8(a["$as"+H.j(c)],H.aP(b))
return z==null?null:z[d]},
aI:function(a,b,c){var z
H.S(b)
H.Z(c)
z=H.b8(a["$as"+H.j(b)],H.aP(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.Z(b)
z=H.aP(a)
return z==null?null:z[b]},
bW:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.w(b,"$isc",[P.l],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d0(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kc(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.l]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aQ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aQ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aQ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aQ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kr(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d0:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.l],"$asc")
if(a==null)return""
z=new P.bR("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}v="<"+z.i(0)+">"
return v},
b8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aP(a)
y=J.J(a)
if(y[b]==null)return!1
return H.eR(H.b8(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.S(b)
H.bG(c)
H.S(d)
if(a==null)return a
z=H.b4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d0(c,0,null)
throw H.f(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eR:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ah(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ah(a[y],b,c[y],d))return!1
return!0},
mF:function(a,b,c){return a.apply(b,H.b8(J.J(b)["$as"+H.j(c)],H.aP(b)))},
eY:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.eY(z)}return!1},
cV:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.eY(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cV(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bT(a,b)}y=J.J(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ah(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.cV(a,b))throw H.f(H.au(a,H.bW(b)))
return a},
ah:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eX(a,b,c,d)
if('func' in a)return c.builtin$cls==="cv"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ah("type" in a?a.type:null,b,x,d)
else if(H.ah(a,b,x,d))return!0
else{if(!('$is'+"be" in y.prototype))return!1
w=y.prototype["$as"+"be"]
v=H.b8(w,z?a.slice(1):null)
return H.ah(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bW(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eR(H.b8(r,z),b,u,d)},
eX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kH(m,b,l,d)},
kH:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ah(c[w],d,a[w],b))return!1}return!0},
mG:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
kF:function(a){var z,y,x,w,v,u
z=H.S($.eW.$1(a))
y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.S($.eQ.$2(a,z))
if(z!=null){y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cl(x)
$.ci[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ck[z]=x
return x}if(v==="-"){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f_(a,x)
if(v==="*")throw H.f(P.eo(z))
if(init.leafTags[z]===true){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f_(a,x)},
f_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d2(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cl:function(a){return J.d2(a,!1,null,!!a.$isC)},
kG:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cl(z)
else return J.d2(z,c,null,null)},
kA:function(){if(!0===$.d_)return
$.d_=!0
H.kB()},
kB:function(){var z,y,x,w,v,u,t,s
$.ci=Object.create(null)
$.ck=Object.create(null)
H.kw()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f1.$1(v)
if(u!=null){t=H.kG(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kw:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b3(C.z,H.b3(C.E,H.b3(C.n,H.b3(C.n,H.b3(C.D,H.b3(C.A,H.b3(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eW=new H.kx(v)
$.eQ=new H.ky(u)
$.f1=new H.kz(t)},
b3:function(a,b){return a(b)||b},
f2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hB:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hC:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bh(z)
y=z[0]
x=z[1]
return new H.hB(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ih:{"^":"a;a,b,c,d,e,f",
a1:function(a){var z,y,x
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
at:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.l])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ed:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hm:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dI:function(a,b){return new H.hm(a,b==null?null:b.method)}}},
fQ:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cA:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fQ(a,y,z?null:b.receiver)}}},
iv:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kS:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eG:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
gds:function(){return this},
$iscv:1,
gds:function(){return this}},
e_:{"^":"u;"},
hZ:{"^":"e_;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
co:{"^":"e_;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bo(this.a)
else y=typeof z!=="object"?J.av(z):H.bo(z)
return(y^H.bo(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
q:{
cp:function(a){return a.a},
d9:function(a){return a.c},
bY:function(a){var z,y,x,w,v
z=new H.co("self","target","receiver","name")
y=J.bh(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ii:{"^":"X;a",
i:function(a){return this.a},
q:{
au:function(a,b){return new H.ii("TypeError: "+H.j(P.c1(a))+": type '"+H.eO(a)+"' is not a subtype of type '"+b+"'")}}},
fe:{"^":"X;a",
i:function(a){return this.a},
q:{
ff:function(a,b){return new H.fe("CastError: "+H.j(P.c1(a))+": type '"+H.eO(a)+"' is not a subtype of type '"+b+"'")}}},
hK:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
hL:function(a){return new H.hK(a)}}},
aV:{"^":"h1;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gal:function(a){return new H.dC(this,[H.y(this,0)])},
cK:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cs(y,b)}else return this.fI(b)},
fI:function(a){var z=this.d
if(z==null)return!1
return this.c_(this.bx(z,J.av(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.fJ(b)},
fJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bx(z,J.av(a)&0x3ffffff)
x=this.c_(y,a)
if(x<0)return
return y[x].b},
V:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bC()
this.b=z}this.cl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bC()
this.c=y}this.cl(y,b,c)}else{x=this.d
if(x==null){x=this.bC()
this.d=x}w=J.av(b)&0x3ffffff
v=this.bx(x,w)
if(v==null)this.bH(x,w,[this.bD(b,c)])
else{u=this.c_(v,b)
if(u>=0)v[u].b=c
else v.push(this.bD(b,c))}}},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.bb(this))
z=z.c}},
cl:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.b_(a,b)
if(z==null)this.bH(a,b,this.bD(b,c))
else z.b=c},
e8:function(){this.r=this.r+1&67108863},
bD:function(a,b){var z,y
z=new H.fU(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e8()
return z},
c_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dF(this)},
b_:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
e1:function(a,b){delete a[b]},
cs:function(a,b){return this.b_(a,b)!=null},
bC:function(){var z=Object.create(null)
this.bH(z,"<non-identifier-key>",z)
this.e1(z,"<non-identifier-key>")
return z},
$isdB:1},
fU:{"^":"a;a,b,0c,0d"},
dC:{"^":"fv;a,$ti",
gl:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.fV(z,z.r,this.$ti)
y.c=z.e
return y}},
fV:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kx:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
ky:{"^":"u:24;a",
$2:function(a,b){return this.a(a,b)}},
kz:{"^":"u:25;a",
$1:function(a){return this.a(H.S(a))}},
fO:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdK:1,
q:{
fP:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fF("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kr:function(a){return J.dv(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){return a},
aM:function(a,b,c){H.bG(b)
if(a>>>0!==a||a>=c)throw H.f(H.aO(b,a))},
kb:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kq(a,b,c))
return b},
hi:{"^":"m;","%":"DataView;ArrayBufferView;cE|eA|eB|hh|eC|eD|aL"},
cE:{"^":"hi;",
gl:function(a){return a.length},
$isC:1,
$asC:I.cX},
hh:{"^":"eB;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
$asc3:function(){return[P.v]},
$ast:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eD;",
$asc3:function(){return[P.B]},
$ast:function(){return[P.B]},
$ish:1,
$ash:function(){return[P.B]},
$isc:1,
$asc:function(){return[P.B]}},
lV:{"^":"aL;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lW:{"^":"aL;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lX:{"^":"aL;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lY:{"^":"aL;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lZ:{"^":"aL;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m_:{"^":"aL;",
gl:function(a){return a.length},
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hj:{"^":"aL;",
gl:function(a){return a.length},
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
bn:function(a,b,c){return new Uint8Array(a.subarray(b,H.kb(b,c,a.length)))},
"%":";Uint8Array"},
eA:{"^":"cE+t;"},
eB:{"^":"eA+c3;"},
eC:{"^":"cE+t;"},
eD:{"^":"eC+c3;"}}],["","",,P,{"^":"",
iT:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.iV(z),1)).observe(y,{childList:true})
return new P.iU(z,y,x)}else if(self.setImmediate!=null)return P.kk()
return P.kl()},
mu:[function(a){self.scheduleImmediate(H.b5(new P.iW(H.d(a,{func:1,ret:-1})),0))},"$1","kj",4,0,11],
mv:[function(a){self.setImmediate(H.b5(new P.iX(H.d(a,{func:1,ret:-1})),0))},"$1","kk",4,0,11],
mw:[function(a){P.cJ(C.m,H.d(a,{func:1,ret:-1}))},"$1","kl",4,0,11],
cJ:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.f.X(a.a,1000)
return P.jR(z<0?0:z,b)},
e2:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.aY]})
z=C.f.X(a.a,1000)
return P.jS(z<0?0:z,b)},
kf:function(a,b){if(H.bT(a,{func:1,args:[P.a,P.al]}))return b.h5(a,null,P.a,P.al)
if(H.bT(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.bX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ke:function(){var z,y
for(;z=$.b2,z!=null;){$.bD=null
y=z.b
$.b2=y
if(y==null)$.bC=null
z.a.$0()}},
mE:[function(){$.cT=!0
try{P.ke()}finally{$.bD=null
$.cT=!1
if($.b2!=null)$.$get$cP().$1(P.eS())}},"$0","eS",0,0,3],
eN:function(a){var z=new P.eu(H.d(a,{func:1,ret:-1}))
if($.b2==null){$.bC=z
$.b2=z
if(!$.cT)$.$get$cP().$1(P.eS())}else{$.bC.b=z
$.bC=z}},
ki:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.b2
if(z==null){P.eN(a)
$.bD=$.bC
return}y=new P.eu(a)
x=$.bD
if(x==null){y.b=z
$.bD=y
$.b2=y}else{y.b=x.b
x.b=y
$.bD=y
if(y.b==null)$.bC=y}},
kL:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.M
if(C.j===y){P.ch(null,null,C.j,a)
return}y.toString
P.ch(null,null,y,H.d(y.bM(a),z))},
ic:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.M
if(y===C.j){y.toString
return P.cJ(a,b)}return P.cJ(a,H.d(y.bM(b),z))},
id:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aY]}
H.d(b,z)
y=$.M
if(y===C.j){y.toString
return P.e2(a,b)}x=y.cI(b,P.aY)
$.M.toString
return P.e2(a,H.d(x,z))},
cg:function(a,b,c,d,e){var z={}
z.a=d
P.ki(new P.kg(z,e))},
eL:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
eM:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
kh:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
ch:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bM(d):c.fp(d,-1)
P.eN(d)},
iV:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iU:{"^":"u:21;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iW:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iX:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eJ:{"^":"a;a,0b,c",
dP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.jU(this,b),0),a)
else throw H.f(P.am("`setTimeout()` not found."))},
dQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b5(new P.jT(this,a,Date.now(),b),0),a)
else throw H.f(P.am("Periodic timer."))},
$isaY:1,
q:{
jR:function(a,b){var z=new P.eJ(!0,0)
z.dP(a,b)
return z},
jS:function(a,b){var z=new P.eJ(!1,0)
z.dQ(a,b)
return z}}},
jU:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jT:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dE(w,x)}z.c=y
this.d.$1(z)}},
b1:{"^":"a;0a,b,c,d,e,$ti",
fP:function(a){if(this.c!==6)return!0
return this.b.b.c8(H.d(this.d,{func:1,ret:P.a9,args:[P.a]}),a.a,P.a9,P.a)},
fH:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bT(z,{func:1,args:[P.a,P.al]}))return H.cY(w.hb(z,a.a,a.b,null,y,P.al),x)
else return H.cY(w.c8(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aG:{"^":"a;cD:a<,b,0eN:c<,$ti",
dm:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.j){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kf(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aG(0,$.M,[c])
w=b==null?1:3
this.cm(new P.b1(x,w,a,b,[z,c]))
return x},
he:function(a,b){return this.dm(a,null,b)},
cm:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb1")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaG")
z=y.a
if(z<4){y.cm(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ch(null,null,z,H.d(new P.ja(this,a),{func:1,ret:-1}))}},
cz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb1")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaG")
y=u.a
if(y<4){u.cz(a)
return}this.a=y
this.c=u.c}z.a=this.b1(a)
y=this.b
y.toString
P.ch(null,null,y,H.d(new P.jf(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.k(this.c,"$isb1")
this.c=null
return this.b1(z)},
b1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cp:function(a){var z,y,x,w
z=H.y(this,0)
H.cY(a,{futureOr:1,type:z})
y=this.$ti
x=H.b4(a,"$isbe",y,"$asbe")
if(x){z=H.b4(a,"$isaG",y,null)
if(z)P.ew(a,this)
else P.jb(a,this)}else{w=this.bF()
H.A(a,z)
this.a=4
this.c=a
P.bz(this,w)}},
bt:[function(a,b){var z
H.k(b,"$isal")
z=this.bF()
this.a=8
this.c=new P.ac(a,b)
P.bz(this,z)},function(a){return this.bt(a,null)},"hl","$2","$1","gdY",4,2,28],
$isbe:1,
q:{
jb:function(a,b){var z,y,x
b.a=1
try{a.dm(new P.jc(b),new P.jd(b),null)}catch(x){z=H.aR(x)
y=H.b7(x)
P.kL(new P.je(b,z,y))}},
ew:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaG")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bz(b,y)}else{y=H.k(b.c,"$isb1")
b.a=2
b.c=a
a.cz(y)}},
bz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isac")
y=y.b
u=v.a
t=v.b
y.toString
P.cg(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bz(z.a,b)}y=z.a
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
if(p){H.k(r,"$isac")
y=y.b
u=r.a
t=r.b
y.toString
P.cg(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.ji(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jh(x,b,r).$0()}else if((y&2)!==0)new P.jg(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.J(y).$isbe){if(y.a>=4){n=H.k(t.c,"$isb1")
t.c=null
b=t.b1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ew(y,t)
return}}m=b.b
n=H.k(m.c,"$isb1")
m.c=null
b=m.b1(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.k(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
ja:{"^":"u:2;a,b",
$0:function(){P.bz(this.a,this.b)}},
jf:{"^":"u:2;a,b",
$0:function(){P.bz(this.b,this.a.a)}},
jc:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cp(a)}},
jd:{"^":"u:32;a",
$2:function(a,b){this.a.bt(a,H.k(b,"$isal"))},
$1:function(a){return this.$2(a,null)}},
je:{"^":"u:2;a,b,c",
$0:function(){this.a.bt(this.b,this.c)}},
ji:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dk(H.d(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b7(v)
if(this.d){w=H.k(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.J(z).$isbe){if(z instanceof P.aG&&z.gcD()>=4){if(z.gcD()===8){w=this.b
w.b=H.k(z.geN(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.he(new P.jj(t),null)
w.a=!1}}},
jj:{"^":"u:35;a",
$1:function(a){return this.a}},
jh:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.c8(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b7(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
jg:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isac")
w=this.c
if(w.fP(z)&&w.e!=null){v=this.b
v.b=w.fH(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b7(u)
w=H.k(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
eu:{"^":"a;a,0b"},
cG:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aG(0,$.M,[P.B])
z.a=0
this.fO(new P.i1(z,this),!0,new P.i2(z,y),y.gdY())
return y}},
i1:{"^":"u;a,b",
$1:function(a){H.A(a,H.aI(this.b,"cG",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.aI(this.b,"cG",0)]}}},
i2:{"^":"u:2;a,b",
$0:function(){this.b.cp(this.a.a)}},
dX:{"^":"a;$ti"},
i0:{"^":"a;"},
aY:{"^":"a;"},
ac:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
k0:{"^":"a;",$ismt:1},
kg:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dJ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jD:{"^":"k0;",
hc:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.j===$.M){a.$0()
return}P.eL(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b7(x)
P.cg(null,null,this,z,H.k(y,"$isal"))}},
hd:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.M){a.$1(b)
return}P.eM(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b7(x)
P.cg(null,null,this,z,H.k(y,"$isal"))}},
fp:function(a,b){return new P.jF(this,H.d(a,{func:1,ret:b}),b)},
bM:function(a){return new P.jE(this,H.d(a,{func:1,ret:-1}))},
cI:function(a,b){return new P.jG(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dk:function(a,b){H.d(a,{func:1,ret:b})
if($.M===C.j)return a.$0()
return P.eL(null,null,this,a,b)},
c8:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.M===C.j)return a.$1(b)
return P.eM(null,null,this,a,b,c,d)},
hb:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.M===C.j)return a.$2(b,c)
return P.kh(null,null,this,a,b,c,d,e,f)},
h5:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
jF:{"^":"u;a,b,c",
$0:function(){return this.a.dk(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jE:{"^":"u:3;a,b",
$0:function(){return this.a.hc(this.b)}},
jG:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hd(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fX:function(a,b,c){H.bG(a)
return H.w(H.ks(a,new H.aV(0,0,[b,c])),"$isdB",[b,c],"$asdB")},
fW:function(a,b){return new H.aV(0,0,[a,b])},
fY:function(a,b,c,d){return new P.jp(0,0,[d])},
fJ:function(a,b,c){var z,y
if(P.cU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bE()
C.a.h(y,a)
try{P.kd(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dY(b,H.kE(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cw:function(a,b,c){var z,y,x
if(P.cU(a))return b+"..."+c
z=new P.bR(b)
y=$.$get$bE()
C.a.h(y,a)
try{x=z
x.a=P.dY(x.gas(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gas()+c
y=z.gas()
return y.charCodeAt(0)==0?y:y},
cU:function(a){var z,y
for(z=0;y=$.$get$bE(),z<y.length;++z)if(a===y[z])return!0
return!1},
kd:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.F();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dF:function(a){var z,y,x
z={}
if(P.cU(a))return"{...}"
y=new P.bR("")
try{C.a.h($.$get$bE(),a)
x=y
x.a=x.gas()+"{"
z.a=!0
J.f8(a,new P.h2(z,y))
z=y
z.a=z.gas()+"}"}finally{z=$.$get$bE()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gas()
return z.charCodeAt(0)==0?z:z},
jp:{"^":"jk;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){return P.ez(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cR()
this.b=z}return this.cn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cR()
this.c=y}return this.cn(y,b)}else return this.dR(0,b)},
dR:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.cR()
this.d=z}y=this.cq(b)
x=z[y]
if(x==null)z[y]=[this.bs(b)]
else{if(this.cv(x,b)>=0)return!1
x.push(this.bs(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cA(this.c,b)
else return this.eG(0,b)},
eG:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e5(z,b)
x=this.cv(y,b)
if(x<0)return!1
this.cF(y.splice(x,1)[0])
return!0},
cn:function(a,b){H.A(b,H.y(this,0))
if(H.k(a[b],"$iscQ")!=null)return!1
a[b]=this.bs(b)
return!0},
cA:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscQ")
if(z==null)return!1
this.cF(z)
delete a[b]
return!0},
co:function(){this.r=this.r+1&67108863},
bs:function(a){var z,y
z=new P.cQ(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.co()
return z},
cF:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.co()},
cq:function(a){return J.av(a)&0x3ffffff},
e5:function(a,b){return a[this.cq(b)]},
cv:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
q:{
cR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cQ:{"^":"a;a,0b,0c"},
jq:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
ez:function(a,b,c){var z=new P.jq(a,b,[c])
z.c=a.e
return z}}},
jk:{"^":"hM;"},
c8:{"^":"jr;",$ish:1,$isc:1},
t:{"^":"a;$ti",
gU:function(a){return new H.dD(a,this.gl(a),0,[H.bF(this,a,"t",0)])},
E:function(a,b){return this.k(a,b)},
hg:function(a,b){var z,y,x
z=H.b([],[H.bF(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.V(z,y,this.k(a,y));++y}return z},
hf:function(a){return this.hg(a,!0)},
i:function(a){return P.cw(a,"[","]")}},
h1:{"^":"ab;"},
h2:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ab:{"^":"a;$ti",
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bF(this,a,"ab",0),H.bF(this,a,"ab",1)]})
for(z=J.bH(this.gal(a));z.F();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b9(this.gal(a))},
i:function(a){return P.dF(a)},
$isa3:1},
hO:{"^":"a;$ti",
i:function(a){return P.cw(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.d6("index"))
if(b<0)H.r(P.ad(b,0,null,"index",null))
for(z=P.ez(this,this.r,H.y(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.f(P.K(b,this,"index",null,y))},
$ish:1},
hM:{"^":"hO;"},
jr:{"^":"a+t;"}}],["","",,P,{"^":"",cr:{"^":"a;$ti"},dj:{"^":"i0;$ti"},fx:{"^":"cr;",
$ascr:function(){return[P.l,[P.c,P.B]]}},iC:{"^":"fx;a"},iD:{"^":"dj;",
fw:function(a,b,c){var z,y,x,w
z=a.length
P.dP(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k_(0,0,x)
if(w.e3(a,b,z)!==z)w.cG(C.i.bR(a,z-1),0)
return C.H.bn(x,0,w.b)},
fv:function(a){return this.fw(a,0,null)},
$asdj:function(){return[P.l,[P.c,P.B]]}},k_:{"^":"a;a,b,c",
cG:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.i(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.i(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.i(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.i(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.i(z,y)
z[y]=128|a&63
return!1}},
e3:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bR(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aZ(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cG(w,C.i.aZ(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.i(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.i(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.i(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.i(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fz:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aX(a)+"'"},
fZ:function(a,b,c,d){var z,y
H.A(b,d)
z=J.fL(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.V(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
h_:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gU(a);x.F();)C.a.h(y,H.A(x.gO(x),c))
if(b)return y
return H.w(J.bh(y),"$isc",z,"$asc")},
cH:function(a,b,c){var z,y
z=P.B
H.w(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.w(a,"$isaU",[z],"$asaU")
y=a.length
c=P.dP(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a4()
z=c<y}else z=!0
return H.dO(z?C.a.bn(a,b,c):a)}return P.i3(a,b,c)},
i3:function(a,b,c){var z,y,x
H.w(a,"$ish",[P.B],"$ash")
z=J.bH(a)
for(y=0;y<b;++y)if(!z.F())throw H.f(P.ad(b,0,y,null,null))
x=[]
for(;z.F();)x.push(z.gO(z))
return H.dO(x)},
hD:function(a,b,c){return new H.fO(a,H.fP(a,!1,!0,!1))},
jZ:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.B],"$asc")
if(c===C.q){z=$.$get$eK().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fv(H.A(b,H.aI(c,"cr",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hy(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fz(a)},
q:function(a){return new P.ev(a)},
d3:function(a){H.kJ(a)},
a9:{"^":"a;"},
"+bool":0,
aj:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.f.b2(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fo(H.hx(this))
y=P.bJ(H.hv(this))
x=P.bJ(H.hr(this))
w=P.bJ(H.hs(this))
v=P.bJ(H.hu(this))
u=P.bJ(H.hw(this))
t=P.fp(H.ht(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fo:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fp:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bJ:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"R;"},
"+double":0,
aS:{"^":"a;a",
j:function(a,b){return new P.aS(C.f.a2(this.a*b))},
a4:function(a,b){return C.f.a4(this.a,H.k(b,"$isaS").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fu()
y=this.a
if(y<0)return"-"+new P.aS(0-y).i(0)
x=z.$1(C.f.X(y,6e7)%60)
w=z.$1(C.f.X(y,1e6)%60)
v=new P.ft().$1(y%1e6)
return""+C.f.X(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
ds:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ft:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fu:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dJ:{"^":"X;",
i:function(a){return"Throw of null."}},
aJ:{"^":"X;a,b,c,d",
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbv()+y+x
if(!this.a)return w
v=this.gbu()
u=P.c1(this.b)
return w+v+": "+H.j(u)},
q:{
bX:function(a,b,c){return new P.aJ(!0,a,b,c)},
d6:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
cb:{"^":"aJ;e,f,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cc:function(a,b,c){return new P.cb(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
dP:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.f(P.ad(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.f(P.ad(b,a,c,"end",f))
return b}return c}}},
fI:{"^":"aJ;e,l:f>,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){if(J.f5(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
K:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.b9(b))
return new P.fI(b,z,!0,a,c,"Index out of range")}}},
ix:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
am:function(a){return new P.ix(a)}}},
iu:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eo:function(a){return new P.iu(a)}}},
hY:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fl:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c1(z))+"."},
q:{
bb:function(a){return new P.fl(a)}}},
hn:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
dV:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fn:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ev:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fF:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bo(x,0,75)+"..."
return y+"\n"+x}},
B:{"^":"R;"},
"+int":0,
h:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gU(this)
for(y=0;z.F();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.d6("index"))
if(b<0)H.r(P.ad(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.F();){x=z.gO(z)
if(b===y)return x;++y}throw H.f(P.K(b,this,"index",null,y))},
i:function(a){return P.fJ(this,"(",")")}},
cx:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
"+List":0,
a3:{"^":"a;$ti"},
F:{"^":"a;",
gR:function(a){return P.a.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
R:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gR:function(a){return H.bo(this)},
i:function(a){return"Instance of '"+H.aX(this)+"'"},
toString:function(){return this.i(this)}},
al:{"^":"a;"},
l:{"^":"a;",$isdK:1},
"+String":0,
bR:{"^":"a;as:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dY:function(a,b,c){var z=J.bH(b)
if(!z.F())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.F())}else{a+=H.j(z.gO(z))
for(;z.F();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
de:function(a,b){var z=document.createElement("canvas")
return z},
fw:function(a){H.k(a,"$isa2")
return"wheel"},
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ey:function(a,b,c,d){var z,y
z=W.cf(W.cf(W.cf(W.cf(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eP:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.j)return a
return z.cI(a,b)},
bK:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kU:{"^":"cF;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kV:{"^":"m;0l:length=","%":"AccessibleNodeList"},
kW:{"^":"bK;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kX:{"^":"bK;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fd:{"^":"m;","%":";Blob"},
cq:{"^":"bK;",
cc:function(a,b,c){var z=a.getContext(b,P.km(c,null))
return z},
$iscq:1,
"%":"HTMLCanvasElement"},
l2:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l4:{"^":"c_;0l:length=","%":"CSSPerspective"},
l5:{"^":"cu;0n:x=,0p:y=","%":"CSSPositionValue"},
l6:{"^":"c_;0n:x=,0p:y=","%":"CSSRotation"},
bc:{"^":"m;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l7:{"^":"c_;0n:x=,0p:y=","%":"CSSScale"},
l8:{"^":"j0;0l:length=",
du:function(a,b){var z=a.getPropertyValue(this.dV(a,b))
return z==null?"":z},
dV:function(a,b){var z,y
z=$.$get$dk()
y=z[b]
if(typeof y==="string")return y
y=this.eW(a,b)
z[b]=y
return y},
eW:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fq()+b
if(z in a)return z
return b},
gbN:function(a){return a.bottom},
gac:function(a){return a.height},
gaD:function(a){return a.left},
gaS:function(a){return a.right},
gaV:function(a){return a.top},
gae:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fm:{"^":"a;",
gaD:function(a){return this.du(a,"left")}},
cu:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c_:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l9:{"^":"cu;0l:length=","%":"CSSTransformValue"},
la:{"^":"c_;0n:x=,0p:y=","%":"CSSTranslation"},
lb:{"^":"cu;0l:length=","%":"CSSUnparsedValue"},
lc:{"^":"m;0l:length=","%":"DataTransferItemList"},
ld:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
le:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lf:{"^":"fr;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fr:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lg:{"^":"j2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[[P.a8,P.R]]},
$ast:function(){return[[P.a8,P.R]]},
$ish:1,
$ash:function(){return[[P.a8,P.R]]},
$isc:1,
$asc:function(){return[[P.a8,P.R]]},
$asx:function(){return[[P.a8,P.R]]},
"%":"ClientRectList|DOMRectList"},
fs:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gae(a))+" x "+H.j(this.gac(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.b4(b,"$isa8",[P.R],"$asa8")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaD(b)&&a.top===z.gaV(b)&&this.gae(a)===z.gae(b)&&this.gac(a)===z.gac(b)},
gR:function(a){return W.ey(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF,this.gac(a)&0x1FFFFFFF)},
gbN:function(a){return a.bottom},
gac:function(a){return a.height},
gaD:function(a){return a.left},
gaS:function(a){return a.right},
gaV:function(a){return a.top},
gae:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.R]},
"%":";DOMRectReadOnly"},
lh:{"^":"j4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[P.l]},
$ast:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$asx:function(){return[P.l]},
"%":"DOMStringList"},
li:{"^":"m;0l:length=","%":"DOMTokenList"},
j_:{"^":"c8;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var z=this.hf(this)
return new J.an(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"I;",
gcJ:function(a){return new W.j_(a,a.children)},
gb6:function(a){return P.hA(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.R)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
aa:{"^":"m;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"m;",
cH:["dz",function(a,b,c,d){H.d(c,{func:1,args:[W.aa]})
if(c!=null)this.dS(a,b,c,!1)}],
dS:function(a,b,c,d){return a.addEventListener(b,H.b5(H.d(c,{func:1,args:[W.aa]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eE|eF|eH|eI"},
bd:{"^":"fd;",$isbd:1,"%":"File"},
lB:{"^":"j9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bd]},
$ast:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asx:function(){return[W.bd]},
"%":"FileList"},
lC:{"^":"a2;0l:length=","%":"FileWriter"},
lF:{"^":"bK;0l:length=","%":"HTMLFormElement"},
bf:{"^":"m;",$isbf:1,"%":"Gamepad"},
lG:{"^":"cF;0n:x=,0p:y=","%":"Gyroscope"},
lH:{"^":"m;0l:length=","%":"History"},
lI:{"^":"jm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.I]},
$ast:function(){return[W.I]},
$ish:1,
$ash:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asx:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bi:{"^":"cK;",$isbi:1,"%":"KeyboardEvent"},
lN:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lO:{"^":"cF;0n:x=,0p:y=","%":"Magnetometer"},
lQ:{"^":"m;0l:length=","%":"MediaList"},
lR:{"^":"a2;",
cH:function(a,b,c,d){H.d(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.dz(a,b,c,!1)},
"%":"MessagePort"},
lS:{"^":"js;",
k:function(a,b){return P.aH(a.get(H.S(b)))},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gal:function(a){var z=H.b([],[P.l])
this.L(a,new W.he(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.l,null]},
$isa3:1,
$asa3:function(){return[P.l,null]},
"%":"MIDIInputMap"},
he:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lT:{"^":"jt;",
k:function(a,b){return P.aH(a.get(H.S(b)))},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gal:function(a){var z=H.b([],[P.l])
this.L(a,new W.hf(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.l,null]},
$isa3:1,
$asa3:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
hf:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"m;",$isbj:1,"%":"MimeType"},
lU:{"^":"jv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asx:function(){return[W.bj]},
"%":"MimeTypeArray"},
as:{"^":"cK;",$isas:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iZ:{"^":"c8;a",
gU:function(a){var z=this.a.childNodes
return new W.dt(z,z.length,-1,[H.bF(C.I,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.I]},
$ash:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a2;",
i:function(a){var z=a.nodeValue
return z==null?this.dA(a):z},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hk:{"^":"jx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.I]},
$ast:function(){return[W.I]},
$ish:1,
$ash:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asx:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
bm:{"^":"m;0l:length=",$isbm:1,"%":"Plugin"},
m3:{"^":"jB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asx:function(){return[W.bm]},
"%":"PluginArray"},
m8:{"^":"jH;",
k:function(a,b){return P.aH(a.get(H.S(b)))},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gal:function(a){var z=H.b([],[P.l])
this.L(a,new W.hJ(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.l,null]},
$isa3:1,
$asa3:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hJ:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ma:{"^":"bK;0l:length=","%":"HTMLSelectElement"},
cF:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bp:{"^":"a2;",$isbp:1,"%":"SourceBuffer"},
mb:{"^":"eF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asx:function(){return[W.bp]},
"%":"SourceBufferList"},
bq:{"^":"m;",$isbq:1,"%":"SpeechGrammar"},
mc:{"^":"jJ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"m;0l:length=",$isbr:1,"%":"SpeechRecognitionResult"},
me:{"^":"jM;",
k:function(a,b){return a.getItem(H.S(b))},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,P.l]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.b([],[P.l])
this.L(a,new W.i_(z))
return z},
gl:function(a){return a.length},
$asab:function(){return[P.l,P.l]},
$isa3:1,
$asa3:function(){return[P.l,P.l]},
"%":"Storage"},
i_:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"m;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
bt:{"^":"a2;",$isbt:1,"%":"TextTrack"},
bu:{"^":"a2;",$isbu:1,"%":"TextTrackCue|VTTCue"},
mj:{"^":"jQ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$asx:function(){return[W.bu]},
"%":"TextTrackCueList"},
mk:{"^":"eI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asx:function(){return[W.bt]},
"%":"TextTrackList"},
ml:{"^":"m;0l:length=","%":"TimeRanges"},
bv:{"^":"m;",$isbv:1,"%":"Touch"},
aZ:{"^":"cK;",$isaZ:1,"%":"TouchEvent"},
mm:{"^":"jW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$asx:function(){return[W.bv]},
"%":"TouchList"},
mn:{"^":"m;0l:length=","%":"TrackDefaultList"},
cK:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mp:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mr:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
ms:{"^":"a2;0l:length=","%":"VideoTrackList"},
by:{"^":"as;",
gfB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.am("deltaY is not supported"))},
gfA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.am("deltaX is not supported"))},
$isby:1,
"%":"WheelEvent"},
iS:{"^":"a2;",
eK:function(a,b){return a.requestAnimationFrame(H.b5(H.d(b,{func:1,ret:-1,args:[P.R]}),1))},
e2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mx:{"^":"k2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asx:function(){return[W.bc]},
"%":"CSSRuleList"},
my:{"^":"fs;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.b4(b,"$isa8",[P.R],"$asa8")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaD(b)&&a.top===z.gaV(b)&&a.width===z.gae(b)&&a.height===z.gac(b)},
gR:function(a){return W.ey(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gac:function(a){return a.height},
gae:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mA:{"^":"k4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bf]},
$ast:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asx:function(){return[W.bf]},
"%":"GamepadList"},
mB:{"^":"k6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.I]},
$ast:function(){return[W.I]},
$ish:1,
$ash:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asx:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mC:{"^":"k8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.br]},
$ast:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asx:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
mD:{"^":"ka;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isC:1,
$asC:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$asx:function(){return[W.bs]},
"%":"StyleSheetList"},
j5:{"^":"cG;a,b,c,$ti",
fO:function(a,b,c,d){var z=H.y(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
mz:{"^":"j5;a,b,c,$ti"},
j6:{"^":"dX;a,b,c,d,e,$ti",
f_:function(){var z=this.d
if(z!=null&&this.a<=0)J.f7(this.b,this.c,z,!1)},
q:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eP(new W.j7(c),W.aa)
z=new W.j6(0,a,b,z,!1,[e])
z.f_()
return z}}},
j7:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isaa"))}},
x:{"^":"a;$ti",
gU:function(a){return new W.dt(a,this.gl(a),-1,[H.bF(this,a,"x",0)])}},
dt:{"^":"a;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
j0:{"^":"m+fm;"},
j1:{"^":"m+t;"},
j2:{"^":"j1+x;"},
j3:{"^":"m+t;"},
j4:{"^":"j3+x;"},
j8:{"^":"m+t;"},
j9:{"^":"j8+x;"},
jl:{"^":"m+t;"},
jm:{"^":"jl+x;"},
js:{"^":"m+ab;"},
jt:{"^":"m+ab;"},
ju:{"^":"m+t;"},
jv:{"^":"ju+x;"},
jw:{"^":"m+t;"},
jx:{"^":"jw+x;"},
jA:{"^":"m+t;"},
jB:{"^":"jA+x;"},
jH:{"^":"m+ab;"},
eE:{"^":"a2+t;"},
eF:{"^":"eE+x;"},
jI:{"^":"m+t;"},
jJ:{"^":"jI+x;"},
jM:{"^":"m+ab;"},
jP:{"^":"m+t;"},
jQ:{"^":"jP+x;"},
eH:{"^":"a2+t;"},
eI:{"^":"eH+x;"},
jV:{"^":"m+t;"},
jW:{"^":"jV+x;"},
k1:{"^":"m+t;"},
k2:{"^":"k1+x;"},
k3:{"^":"m+t;"},
k4:{"^":"k3+x;"},
k5:{"^":"m+t;"},
k6:{"^":"k5+x;"},
k7:{"^":"m+t;"},
k8:{"^":"k7+x;"},
k9:{"^":"m+t;"},
ka:{"^":"k9+x;"}}],["","",,P,{"^":"",
aH:function(a){var z,y,x,w,v
if(a==null)return
z=P.fW(P.l,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.S(y[w])
z.V(0,v,a[v])}return z},
km:function(a,b){var z={}
a.L(0,new P.kn(z))
return z},
dr:function(){var z=$.dq
if(z==null){z=J.cm(window.navigator.userAgent,"Opera",0)
$.dq=z}return z},
fq:function(){var z,y
z=$.dm
if(z!=null)return z
y=$.dn
if(y==null){y=J.cm(window.navigator.userAgent,"Firefox",0)
$.dn=y}if(y)z="-moz-"
else{y=$.dp
if(y==null){y=!P.dr()&&J.cm(window.navigator.userAgent,"Trident/",0)
$.dp=y}if(y)z="-ms-"
else z=P.dr()?"-o-":"-webkit-"}$.dm=z
return z},
kn:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fC:{"^":"c8;a,b",
gby:function(){var z,y,x
z=this.b
y=H.aI(z,"t",0)
x=W.a0
return new H.h3(new H.iQ(z,H.d(new P.fD(),{func:1,ret:P.a9,args:[y]}),[y]),H.d(new P.fE(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b9(this.gby().a)},
k:function(a,b){var z=this.gby()
return z.b.$1(J.d5(z.a,b))},
gU:function(a){var z=P.h_(this.gby(),!1,W.a0)
return new J.an(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
fD:{"^":"u:22;",
$1:function(a){return!!J.J(H.k(a,"$isI")).$isa0}},
fE:{"^":"u:23;",
$1:function(a){return H.e(H.k(a,"$isI"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ex:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bn:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
t:function(a,b){var z,y,x
if(b==null)return!1
z=H.b4(b,"$isbn",[P.R],null)
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gR:function(a){var z,y
z=J.av(this.a)
y=J.av(this.b)
return P.ex(P.bA(P.bA(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.y(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bn(z,H.A(x*b,y),this.$ti)}},
jC:{"^":"a;$ti",
gaS:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.A(z+this.c,H.y(this,0))},
gbN:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b4(b,"$isa8",[P.R],"$asa8")
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gaD(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaV(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gaS(b)){if(typeof x!=="number")return x.G()
z=H.A(x+this.d,w)===y.gbN(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.av(z)
x=this.b
w=J.av(x)
if(typeof z!=="number")return z.G()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.A(x+this.d,v)
return P.ex(P.bA(P.bA(P.bA(P.bA(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cL:function(a,b){var z,y
H.w(b,"$isbn",[P.R],"$asbn")
z=b.a
y=this.a
if(typeof z!=="number")return z.dt()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dt()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"jC;aD:a>,aV:b>,ae:c>,ac:d>,$ti",q:{
hA:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a4()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.a4()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",lj:{"^":"Q;0n:x=,0p:y=","%":"SVGFEBlendElement"},lk:{"^":"Q;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},ll:{"^":"Q;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lm:{"^":"Q;0n:x=,0p:y=","%":"SVGFECompositeElement"},ln:{"^":"Q;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lo:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lp:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lq:{"^":"Q;0n:x=,0p:y=","%":"SVGFEFloodElement"},lr:{"^":"Q;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},ls:{"^":"Q;0n:x=,0p:y=","%":"SVGFEImageElement"},lt:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMergeElement"},lu:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lv:{"^":"Q;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lw:{"^":"Q;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lx:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},ly:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lz:{"^":"Q;0n:x=,0p:y=","%":"SVGFETileElement"},lA:{"^":"Q;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lD:{"^":"Q;0n:x=,0p:y=","%":"SVGFilterElement"},lE:{"^":"bg;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fH:{"^":"bg;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bg:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lJ:{"^":"bg;0n:x=,0p:y=","%":"SVGImageElement"},bN:{"^":"m;",$isbN:1,"%":"SVGLength"},lM:{"^":"jo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bN]},
$ish:1,
$ash:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asx:function(){return[P.bN]},
"%":"SVGLengthList"},lP:{"^":"Q;0n:x=,0p:y=","%":"SVGMaskElement"},bQ:{"^":"m;",$isbQ:1,"%":"SVGNumber"},m0:{"^":"jz;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bQ]},
$ish:1,
$ash:function(){return[P.bQ]},
$isc:1,
$asc:function(){return[P.bQ]},
$asx:function(){return[P.bQ]},
"%":"SVGNumberList"},m2:{"^":"Q;0n:x=,0p:y=","%":"SVGPatternElement"},m4:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},m5:{"^":"m;0l:length=","%":"SVGPointList"},m6:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},m7:{"^":"fH;0n:x=,0p:y=","%":"SVGRectElement"},mf:{"^":"jO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$ast:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$asx:function(){return[P.l]},
"%":"SVGStringList"},Q:{"^":"a0;",
gcJ:function(a){return new P.fC(a,new W.iZ(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mg:{"^":"bg;0n:x=,0p:y=","%":"SVGSVGElement"},i4:{"^":"bg;","%":"SVGTextPathElement;SVGTextContentElement"},mi:{"^":"i4;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bS:{"^":"m;",$isbS:1,"%":"SVGTransform"},mo:{"^":"jY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bS]},
$ish:1,
$ash:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asx:function(){return[P.bS]},
"%":"SVGTransformList"},mq:{"^":"bg;0n:x=,0p:y=","%":"SVGUseElement"},jn:{"^":"m+t;"},jo:{"^":"jn+x;"},jy:{"^":"m+t;"},jz:{"^":"jy+x;"},jN:{"^":"m+t;"},jO:{"^":"jN+x;"},jX:{"^":"m+t;"},jY:{"^":"jX+x;"}}],["","",,P,{"^":"",kY:{"^":"m;0l:length=","%":"AudioBuffer"},kZ:{"^":"iY;",
k:function(a,b){return P.aH(a.get(H.S(b)))},
L:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gal:function(a){var z=H.b([],[P.l])
this.L(a,new P.fb(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.l,null]},
$isa3:1,
$asa3:function(){return[P.l,null]},
"%":"AudioParamMap"},fb:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},l_:{"^":"a2;0l:length=","%":"AudioTrackList"},fc:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m1:{"^":"fc;0l:length=","%":"OfflineAudioContext"},iY:{"^":"m+ab;"}}],["","",,P,{"^":"",dS:{"^":"m;",$isdS:1,"%":"WebGLRenderingContext"},is:{"^":"m;",$isis:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",md:{"^":"jL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return P.aH(a.item(b))},
E:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a3,,,]]},
$ish:1,
$ash:function(){return[[P.a3,,,]]},
$isc:1,
$asc:function(){return[[P.a3,,,]]},
$asx:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},jK:{"^":"m+t;"},jL:{"^":"jK+x;"}}],["","",,O,{"^":"",aw:{"^":"a;0a,0b,0c,0d,$ti",
bq:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cd:function(a,b,c){var z=H.aI(this,"aw",0)
H.d(b,{func:1,ret:P.a9,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.B,[P.h,z]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aY:function(a,b){return this.cd(a,null,b)},
ez:function(a){var z
H.w(a,"$ish",[H.aI(this,"aw",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dK:function(a,b){var z
H.w(b,"$ish",[H.aI(this,"aw",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.an(z,z.length,0,[H.y(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aI(this,"aw",0)
H.A(b,z)
z=[z]
if(this.ez(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dK(x,H.b([b],z))}},
$ish:1,
q:{
cs:function(a){var z=new O.aw([a])
z.bq(a)
return z}}},cC:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
dL:function(a){var z=this.b
if(!(z==null))z.C(a)},
ao:function(){return this.dL(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gc0(z)
else return V.bP()},
di:function(a){var z=this.a
if(a==null)C.a.h(z,V.bP())
else C.a.h(z,a)
this.ao()},
c5:function(){var z=this.a
if(z.length>0){z.pop()
this.ao()}}}}],["","",,E,{"^":"",cn:{"^":"a;"},aK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0W:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sce:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gv()
y.toString
x=H.d(this.gdg(),{func:1,ret:-1,args:[D.p]})
C.a.S(y.a,x)}y=this.c
if(y!=null){y=y.gv()
y.toString
x=H.d(this.gdg(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.L("shape",z,this.c,this,[F.dU])
w.b=!0
this.aE(w)}},
ad:function(a,b){var z
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.F();)z.d.ad(0,b)},
aF:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gT(z))
z.ao()
a.dj(this.f)
z=a.dy
y=(z&&C.a).gc0(z)
if(y!=null&&this.d!=null)y.h8(a,this)
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.F();)z.d.aF(a)
a.dh()
a.dx.c5()},
gv:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
aE:function(a){var z=this.z
if(!(z==null))z.C(a)},
a_:function(){return this.aE(null)},
fW:[function(a){H.k(a,"$isp")
this.e=null
this.aE(a)},function(){return this.fW(null)},"hZ","$1","$0","gdg",0,2,0],
fU:[function(a){this.aE(H.k(a,"$isp"))},function(){return this.fU(null)},"hX","$1","$0","gdf",0,2,0],
hW:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.aK],"$ash")
for(z=b.length,y=this.gdf(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gW()==null){t=new D.aT()
t.a=H.b([],w)
t.c=0
u.sW(t)}t=u.gW()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","gfT",8,0,8],
hY:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.aK],"$ash")
for(z=b.length,y=this.gdf(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gW()==null){t=new D.aT()
t.a=H.b([],w)
t.c=0
u.sW(t)}t=u.gW()
t.toString
H.d(y,x)
C.a.S(t.a,y)}}this.a_()},"$2","gfV",8,0,8],
$isax:1},hE:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dG:function(a,b){var z,y,x,w,v
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
z=new O.cC()
y=[V.ap]
z.a=H.b([],y)
x=z.gv()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.d(new E.hG(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cC()
z.a=H.b([],y)
v=z.gv()
v.toString
x=H.d(new E.hH(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cC()
z.a=H.b([],y)
y=z.gv()
y.toString
w=H.d(new E.hI(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cI])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.l,A.dT])},
gh4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.j(0,y.gT(y))
this.z=y
z=y}return z},
dj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc0(z):a;(z&&C.a).h(z,y)},
dh:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
hF:function(a,b){var z=new E.hE(a,b)
z.dG(a,b)
return z}}},hG:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.z=null
z.ch=null}},hH:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hI:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},i9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0W:x@,0y,0z,0Q,0ch",
gv:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
dN:[function(a){var z
H.k(a,"$isp")
z=this.x
if(!(z==null))z.C(a)
this.h9()},function(){return this.dN(null)},"dM","$1","$0","gcj",0,2,0],
gfG:function(){var z,y,x
z=Date.now()
y=C.f.X(P.ds(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
cB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.n(z)
x=C.e.d8(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.d8(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
h9:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.ib(this),{func:1,ret:-1,args:[P.R]})
C.t.e2(z)
C.t.eK(z,W.eP(y,P.R))}},
h7:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.ds(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ao()
w=x.db
C.a.sl(w.a,0)
w.ao()
w=x.dx
C.a.sl(w.a,0)
w.ao()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aF(this.e)}}catch(v){z=H.aR(v)
y=H.b7(v)
P.d3("Error: "+H.j(z))
P.d3("Stack: "+H.j(y))
throw H.f(z)}},
q:{
ia:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscq)return E.e1(a,!0,!0,!0,!1)
y=W.de(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcJ(a).h(0,y)
w=E.e1(y,!0,!0,!0,!1)
w.a=a
return w},
e1:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i9()
y=P.fX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
x=C.k.cc(a,"webgl",y)
x=H.k(x==null?C.k.cc(a,"experimental-webgl",y):x,"$isdS")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hF(x,a)
w=new T.i5(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iy(a)
v=new X.fR()
v.c=new X.ar(!1,!1,!1)
v.d=P.fY(null,null,null,P.B)
w.b=v
v=new X.hg(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h0(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ig(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.dX,P.a]])
w.z=v
u=document
t=W.as
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.d(w.gel(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.d(w.geo(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.d(w.geh(),q),!1,r))
v=w.z
p=W.bi
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.d(w.geq(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.d(w.gep(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.d(w.geu(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.d(w.gew(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.d(w.gev(),s),!1,t))
p=w.z
o=W.by;(p&&C.a).h(p,W.Y(a,H.S(W.fw(a)),H.d(w.gex(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.d(w.gem(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.d(w.gen(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.d(w.gey(),q),!1,r))
r=w.z
q=W.aZ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.d(w.geF(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.d(w.geD(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.d(w.geE(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.cB()
return z}}},ib:{"^":"u:26;a",
$1:function(a){var z
H.kI(a)
z=this.a
if(z.z){z.z=!1
z.h7()}}}}],["","",,Z,{"^":"",et:{"^":"a;a,b",q:{
cO:function(a,b,c){var z
H.w(c,"$isc",[P.B],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,z)}}},da:{"^":"cn;a,b,c,d,e",
b4:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.q('Failed to bind buffer attribute "'+J.ai(this.a)+'": '+H.j(z))
throw H.f(x)}},
i:function(a){return"["+J.ai(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iP:{"^":"a;a",$isl0:1},db:{"^":"a;a,0b,c,d",
aC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b4:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b4(a)},
dq:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aF:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.l]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ai(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ismh:1},c4:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},b_:{"^":"a;a",
gcf:function(a){var z,y
z=this.a
y=(z&$.$get$aD().a)!==0?3:0
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$bw().a)!==0)y+=3
if((z&$.$get$bx().a)!==0)y+=4
if((z&$.$get$b0().a)!==0)++y
return(z&$.$get$aA().a)!==0?y+4:y},
fo:function(a){var z,y,x
z=$.$get$aD()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0)if(x===a)return z
return $.$get$es()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.l])
y=this.a
if((y&$.$get$aD().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
ag:function(a){return new Z.b_(a)}}}}],["","",,D,{"^":"",df:{"^":"a;"},aT:{"^":"a;0a,0b,0c",
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fA(z))
return x!==0},
ha:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.C(y)}}},
an:function(a){return this.ha(a,!0,!1)},
q:{
G:function(){var z=new D.aT()
z.a=H.b([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},fA:{"^":"u:27;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},c5:{"^":"p;c,d,a,0b,$ti"},c6:{"^":"p;c,d,a,0b,$ti"},L:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dc:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"l1<"}},dy:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dz:{"^":"p;c,a,0b"},fR:{"^":"a;0a,0b,0c,0d",
h1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dz(a,this)
y.b=!0
return z.C(y)},
fY:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dz(a,this)
y.b=!0
return z.C(y)}},dE:{"^":"ca;x,y,c,d,e,a,0b"},h0:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ah:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gaw()
s=new X.bk(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c4:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.ah(a,b))
return!0},
aQ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dw()
if(typeof z!=="number")return z.dr()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.ah(a,b))
return!0},
aP:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.ah(a,b))
return!0},
h2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cD(new V.O(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.C(w)
return!0},
es:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.dE(c,a,this.a.gaw(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.T(0,0)}},ar:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ar))return!1
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
return z+(this.c?"Shift+":"")}},bk:{"^":"ca;x,y,z,Q,ch,c,d,e,a,0b"},hg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bw:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaw()
x=new X.bk(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c4:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.bw(a,b,!0))
return!0},
aQ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dw()
if(typeof z!=="number")return z.dr()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.bw(a,b,!0))
return!0},
aP:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.bw(a,b,!1))
return!0},
h3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaw()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cD(new V.O(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.C(x)
return!0},
gcO:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbm:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
gdd:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},cD:{"^":"ca;x,c,d,e,a,0b"},ca:{"^":"p;"},e5:{"^":"ca;x,y,z,Q,ch,c,d,e,a,0b"},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ah:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.T],"$asc")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaw()
w=new X.e5(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h0:function(a){var z
H.w(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.C(this.ah(a,!0))
return!0},
fZ:function(a){var z
H.w(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.C(this.ah(a,!0))
return!0},
h_:function(a){var z
H.w(a,"$isc",[V.T],"$asc")
z=this.d
if(z==null)return!1
z.C(this.ah(a,!1))
return!0}},iy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaw:function(){var z=this.a
return V.dR(0,0,(z&&C.k).gb6(z).c,C.k.gb6(z).d)},
ct:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dy(z,new X.ar(y,a.altKey,a.shiftKey))},
au:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
bI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
ai:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.T(y-w,x-v)},
aI:function(a){return new V.O(a.movementX,a.movementY)},
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.a2(u.pageX)
C.e.a2(u.pageY)
s=z.left
C.e.a2(u.pageX)
C.a.h(y,new V.T(t-s,C.e.a2(u.pageY)-z.top))}return y},
af:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dc(z,new X.ar(y,a.altKey,a.shiftKey))},
hA:[function(a){this.f=!0},"$1","geo",4,0,4],
ht:[function(a){this.f=!1},"$1","geh",4,0,4],
hx:[function(a){if(this.f)a.preventDefault()},"$1","gel",4,0,4],
hC:[function(a){var z
H.k(a,"$isbi")
if(!this.f)return
z=this.ct(a)
if(this.b.h1(z))a.preventDefault()},"$1","geq",4,0,16],
hB:[function(a){var z
H.k(a,"$isbi")
if(!this.f)return
z=this.ct(a)
if(this.b.fY(z))a.preventDefault()},"$1","gep",4,0,16],
hE:[function(a){var z,y,x,w
H.k(a,"$isas")
z=this.a
z.focus()
this.f=!0
this.au(a)
if(this.x){y=this.af(a)
x=this.aI(a)
if(this.d.c4(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.af(a)
w=this.ai(a)
if(this.c.c4(y,w))a.preventDefault()},"$1","geu",4,0,5],
hG:[function(a){var z,y,x
H.k(a,"$isas")
this.au(a)
z=this.af(a)
if(this.x){y=this.aI(a)
if(this.d.aQ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ai(a)
if(this.c.aQ(z,x))a.preventDefault()},"$1","gew",4,0,5],
hz:[function(a){var z,y,x,w
H.k(a,"$isas")
z=this.a
if(!(z&&C.k).gb6(z).cL(0,new P.bn(a.clientX,a.clientY,[P.R]))){this.au(a)
y=this.af(a)
if(this.x){x=this.aI(a)
if(this.d.aQ(y,x))a.preventDefault()
return}if(this.r)return
w=this.ai(a)
if(this.c.aQ(y,w))a.preventDefault()}},"$1","gen",4,0,5],
hF:[function(a){var z,y,x
H.k(a,"$isas")
this.au(a)
z=this.af(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.ai(a)
if(this.c.aP(z,x))a.preventDefault()},"$1","gev",4,0,5],
hy:[function(a){var z,y,x,w
H.k(a,"$isas")
z=this.a
if(!(z&&C.k).gb6(z).cL(0,new P.bn(a.clientX,a.clientY,[P.R]))){this.au(a)
y=this.af(a)
if(this.x){x=this.aI(a)
if(this.d.aP(y,x))a.preventDefault()
return}if(this.r)return
w=this.ai(a)
if(this.c.aP(y,w))a.preventDefault()}},"$1","gem",4,0,5],
hH:[function(a){var z,y
H.k(a,"$isby")
this.au(a)
z=new V.O((a&&C.r).gfA(a),C.r.gfB(a)).u(0,180)
if(this.x){if(this.d.h2(z))a.preventDefault()
return}if(this.r)return
y=this.ai(a)
if(this.c.h3(z,y))a.preventDefault()},"$1","gex",4,0,29],
hI:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.af(this.y)
v=this.ai(this.y)
this.d.es(w,v,x)}},"$1","gey",4,0,4],
hO:[function(a){var z
H.k(a,"$isaZ")
this.a.focus()
this.f=!0
this.bI(a)
z=this.bE(a)
if(this.e.h0(z))a.preventDefault()},"$1","geF",4,0,10],
hM:[function(a){var z
H.k(a,"$isaZ")
this.bI(a)
z=this.bE(a)
if(this.e.fZ(z))a.preventDefault()},"$1","geD",4,0,10],
hN:[function(a){var z
H.k(a,"$isaZ")
this.bI(a)
z=this.bE(a)
if(this.e.h_(z))a.preventDefault()},"$1","geE",4,0,10]}}],["","",,D,{"^":"",c0:{"^":"a;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
ap:[function(a){var z
H.k(a,"$isp")
z=this.d
if(!(z==null))z.C(a)},function(){return this.ap(null)},"hi","$1","$0","gdO",0,2,0],
$isW:1,
$isax:1},W:{"^":"a;",$isax:1},fS:{"^":"aw;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
ap:function(a){var z=this.Q
if(!(z==null))z.C(a)},
er:[function(a){var z
H.k(a,"$isp")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.er(null)},"hD","$1","$0","gcw",0,2,0],
hJ:[function(a){var z,y,x
H.w(a,"$ish",[D.W],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.dZ(x))return!1}return!0},"$1","geA",4,0,31],
hq:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcw(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c0)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.b([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.h(s.a,x)}z=new D.c5(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gee",8,0,17],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcw(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c0)C.a.S(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.b([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.S(s.a,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","geC",8,0,17],
dZ:function(a){var z=C.a.b7(this.e,a)
return z},
$ash:function(){return[D.W]},
$asaw:function(){return[D.W]}},hq:{"^":"a;",$isW:1,$isax:1},hX:{"^":"a;",$isW:1,$isax:1},i6:{"^":"a;",$isW:1,$isax:1},i7:{"^":"a;",$isW:1,$isax:1},i8:{"^":"a;",$isW:1,$isax:1}}],["","",,V,{"^":"",
l3:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","hd",8,0,30],
kT:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dv(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.i.am("null",c)
return C.i.am(C.e.dn($.o.$2(a,0)?0:a,b),c+b+1)},
b6:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.v],"$asc")
z=H.b([],[P.l])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.V(z,u,C.i.am(z[u],x))}return z},
V:{"^":"a;a,b,c",
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
return new V.V(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bI:{"^":"a;a,b,c,d",
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
return new V.bI(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
c9:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isc9")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.e.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.e.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.e.j(t,s)
q=a5.b
p=C.e.j(z,q)
o=a5.e
n=C.e.j(w,o)
m=a5.x
l=C.e.j(t,m)
k=a5.c
z=C.e.j(z,k)
j=a5.f
w=C.e.j(w,j)
i=a5.y
t=C.e.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.e.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.e.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.e.j(d,s)
b=C.e.j(h,q)
a=C.e.j(f,o)
a0=C.e.j(d,m)
h=C.e.j(h,k)
f=C.e.j(f,j)
d=C.e.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.e.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.e.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.c9(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c9))return!1
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
z=[P.v]
y=V.b6(H.b([this.a,this.d,this.r],z),3,0)
x=V.b6(H.b([this.b,this.e,this.x],z),3,0)
w=V.b6(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
ap:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
da:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.bP()
a3=1/a2
a4=-w
a5=-i
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isap")
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
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.a6(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
i:function(a){return this.M()},
d9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b6(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b6(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b6(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b6(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.i(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.i(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.i(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.i(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.i(y,1)
q=q+y[1]+", "
if(1>=t)return H.i(x,1)
q=q+x[1]+", "
if(1>=s)return H.i(w,1)
q=q+w[1]+", "
if(1>=r)return H.i(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.i(y,2)
u=u+y[2]+", "
if(2>=t)return H.i(x,2)
u=u+x[2]+", "
if(2>=s)return H.i(w,2)
u=u+w[2]+", "
if(2>=r)return H.i(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.i(y,3)
q=q+y[3]+", "
if(3>=t)return H.i(x,3)
q=q+x[3]+", "
if(3>=s)return H.i(w,3)
q=q+w[3]+", "
if(3>=r)return H.i(v,3)
return u+(q+v[3]+"]")},
M:function(){return this.d9("",3,0)},
A:function(a){return this.d9(a,3,0)},
q:{
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bP:function(){return V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dH:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.D(c)))
y=b.aj(z)
x=y.u(0,Math.sqrt(y.D(y)))
w=z.aj(x)
v=new V.H(a.a,a.b,a.c)
return V.aq(x.a,w.a,z.a,x.J(0).D(v),x.b,w.b,z.b,w.J(0).D(v),x.c,w.c,z.c,z.J(0).D(v),0,0,0,1)}}},
T:{"^":"a;n:a>,p:b>",
I:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.T(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
a6:{"^":"a;n:a>,p:b>,c",
G:function(a,b){return new V.a6(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a,b){return new V.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a6(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
dQ:{"^":"a;n:a>,p:b>,c,d",
gZ:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
q:{
dR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dQ(a,b,c,d)}}},
O:{"^":"a;a,b",
fM:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,18],
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
return new V.O(z*b,y*b)},
u:function(a,b){var z,y
if($.o.$2(b,0))return new V.O(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.O(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fM:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,18],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aj:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.H(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.o.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
dc:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fk:{"^":"df;0a,0b,0c,0d,0e,0f,0r,0x,0y",
br:function(a){var z=V.kT(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.C(a)},
sca:function(a,b){},
sc1:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.br(z)}z=new D.L("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.K(z)}},
sc3:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.br(z)}z=new D.L("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.K(z)}},
sY:function(a,b){var z,y
b=this.br(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.L("location",y,b,this,[P.v])
z.b=!0
this.K(z)}},
sc2:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.L("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.K(z)}},
sN:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.L("velocity",x,a,this,[P.v])
z.b=!0
this.K(z)}},
sbS:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.L("dampening",y,a,this,[P.v])
z.b=!0
this.K(z)}},
ad:function(a,b){var z,y,x,w
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
y=w}this.sN(y)}},
q:{
ct:function(){var z=new U.fk()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dh:{"^":"a5;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aG:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dh))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
q:{
di:function(a){var z=new U.dh()
z.a=a
return z}}},du:{"^":"aw;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isp")
z=this.e
if(!(z==null))z.C(a)},function(){return this.K(null)},"a5","$1","$0","gaq",0,2,0],
hp:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaq(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.K(z)},"$2","ged",8,0,19],
hK:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaq(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gv()
t.toString
H.d(x,w)
C.a.S(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geB",8,0,19],
aG:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a4()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.an(z,z.length,0,[H.y(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.aG(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bP():x
z=this.e
if(!(z==null))z.an(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.du))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a5]},
$asaw:function(){return[U.a5]},
$isa5:1},a5:{"^":"df;"},iz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isp")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.K(null)},"a5","$1","$0","gaq",0,2,0],
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcO()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.d(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdd()
x.toString
z=H.d(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbm()
z.toString
y=H.d(this.gbB(),y)
C.a.h(z.a,y)
return!0},
e9:[function(a){H.k(a,"$isp")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbz",4,0,1],
ea:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbk")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.O(y.a,y.b).j(0,2).u(0,z.gZ())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sN(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.O(x.a,x.b).j(0,2).u(0,z.gZ())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
this.b.sN(0)
y=y.I(0,a.z)
this.Q=new V.O(y.a,y.b).j(0,2).u(0,z.gZ())}this.a5()},"$1","gbA",4,0,1],
eb:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sN(y*10*x)
this.a5()}},"$1","gbB",4,0,1],
aG:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a4()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa5:1},iA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isp")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.K(null)},"a5","$1","$0","gaq",0,2,0],
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcO()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.d(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdd()
x.toString
z=H.d(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbm()
z.toString
x=H.d(this.gbB(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.G()
x.f=z}x=H.d(this.ge6(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.d(this.ge7(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.G()
x.b=z}x=H.d(this.geZ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.d(this.geY(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.G()
x.c=z}y=H.d(this.geX(),y)
C.a.h(z.a,y)
return!0},
ab:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.O(z,y)},
e9:[function(a){a=H.e(H.k(a,"$isp"),"$isbk")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbz",4,0,1],
ea:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbk")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ab(new V.O(y.a,y.b).j(0,2).u(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ab(new V.O(x.a,x.b).j(0,2).u(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sY(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.I(0,a.z)
this.dx=this.ab(new V.O(y.a,y.b).j(0,2).u(0,z.gZ()))}this.a5()},"$1","gbA",4,0,1],
eb:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sN(-y*10*z)
this.a5()}},"$1","gbB",4,0,1],
hm:[function(a){if(H.e(H.k(a,"$isp"),"$isdE").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ge6",4,0,1],
hn:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbk")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ab(new V.O(x.a,x.b).j(0,2).u(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sY(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.I(0,a.z)
this.dx=this.ab(new V.O(y.a,y.b).j(0,2).u(0,z.gZ()))
this.a5()},"$1","ge7",4,0,1],
hS:[function(a){H.k(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geZ",4,0,1],
hR:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$ise5")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ab(new V.O(y.a,y.b).j(0,2).u(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ab(new V.O(x.a,x.b).j(0,2).u(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sY(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.I(0,a.z)
this.dx=this.ab(new V.O(y.a,y.b).j(0,2).u(0,z.gZ()))}this.a5()},"$1","geY",4,0,1],
hQ:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sN(-y*10*z)
this.a5()}},"$1","geX",4,0,1],
aG:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a4()
if(z<y){this.dy=y
x=b.y
this.c.ad(0,x)
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aq(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa5:1},iB:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.C(a)},
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=H.d(this.gec(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ho:[function(a){var z,y,x,w
H.k(a,"$isp")
if(!J.N(this.b,this.a.b.c))return
H.e(a,"$iscD")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.L("zoom",z,w,this,[P.v])
z.b=!0
this.K(z)}},"$1","gec",4,0,1],
aG:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aq(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",fy:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ar:[function(a){var z
H.k(a,"$isp")
z=this.x
if(!(z==null))z.C(a)},function(){return this.ar(null)},"hj","$1","$0","gaa",0,2,0],
hv:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaa(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gW()==null){s=new D.aT()
s.a=H.b([],v)
s.c=0
t.sW(s)}s=t.gW()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.c5(a,b,this,[z])
z.b=!0
this.ar(z)},"$2","gej",8,0,8],
hw:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaa(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gW()==null){s=new D.aT()
s.a=H.b([],v)
s.c=0
t.sW(s)}s=t.gW()
s.toString
H.d(x,w)
C.a.S(s.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.ar(z)},"$2","gek",8,0,8],
sdl:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gv()
z.toString
y=H.d(this.gaa(),{func:1,ret:-1,args:[D.p]})
C.a.S(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gv()
z.toString
y=H.d(this.gaa(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.L("technique",x,this.c,this,[O.cI])
z.b=!0
this.ar(z)}},
gv:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
aF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
u=C.f.a2(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.f.a2(v.b*w)
s=C.f.a2(v.c*x)
a.c=s
v=C.f.a2(v.d*w)
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
y=$.dL
if(y==null){y=V.dH(new V.a6(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dL=y
m=y}else m=y
y=z.a
if(y!=null){l=y.aG(0,a,z)
if(l!=null)m=l.j(0,m)}a.db.di(m)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.F();)z.d.ad(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.F();)z.d.aF(a)
this.a.toString
a.cy.c5()
a.db.c5()
this.b.toString
a.dh()},
$ism9:1}}],["","",,A,{"^":"",d7:{"^":"a;a,b,c"},fa:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h7:{"^":"dT;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aA,0ak,0aB,0b8,0cP,0cQ,0b9,0ba,0cR,0cS,0bb,0bc,0cT,0cU,0bd,0cV,0cW,0be,0cX,0cY,0bf,0bg,0bh,0cZ,0d_,0bi,0bj,0d0,0d1,0bk,0d2,0bU,0d3,0bV,0d4,0bW,0d5,0bX,0d6,0bY,0d7,0bZ,a,b,0c,0d,0e,0f,0r",
dF:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bR("")
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
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.b([],[P.l])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
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
o=H.b([],[P.l])
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cu(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cu(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eT(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(m)))}this.eS()
this.eU()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isay")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isay")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isay")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isay")
if(a2.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$iscM")
if(a2.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isay")
if(a2.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isay")
this.k3=H.b([],[A.ay])
y=a2.aA
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(k,"$isay"))}}y=a2.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isae")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isae")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.aA=H.e(this.r.m(0,"diffuseTxt"),"$isae")
this.aB=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ak=H.e(this.r.m(0,"diffuseTxt"),"$isaf")
this.aB=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.b8=H.e(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cP=H.e(this.r.m(0,"invDiffuseTxt"),"$isae")
this.b9=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cQ=H.e(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.b9=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.bc=H.e(this.r.m(0,"shininess"),"$isU")
this.ba=H.e(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cR=H.e(this.r.m(0,"specularTxt"),"$isae")
this.bb=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.cS=H.e(this.r.m(0,"specularTxt"),"$isaf")
this.bb=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.h:break
case C.c:this.cT=H.e(this.r.m(0,"bumpTxt"),"$isae")
this.bd=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.cU=H.e(this.r.m(0,"bumpTxt"),"$isaf")
this.bd=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.cV=H.e(this.r.m(0,"envSampler"),"$isaf")
this.cW=H.e(this.r.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.be=H.e(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cX=H.e(this.r.m(0,"reflectTxt"),"$isae")
this.bf=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.cY=H.e(this.r.m(0,"reflectTxt"),"$isaf")
this.bf=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.bg=H.e(this.r.m(0,"refraction"),"$isU")
this.bh=H.e(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cZ=H.e(this.r.m(0,"refractTxt"),"$isae")
this.bi=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.d_=H.e(this.r.m(0,"refractTxt"),"$isaf")
this.bi=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.bj=H.e(this.r.m(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.h:break
case C.c:this.d0=H.e(this.r.m(0,"alphaTxt"),"$isae")
this.bk=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.d1=H.e(this.r.m(0,"alphaTxt"),"$isaf")
this.bk=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bU=H.b([],[A.ei])
this.bV=H.b([],[A.ej])
this.bW=H.b([],[A.ek])
this.bX=H.b([],[A.el])
this.bY=H.b([],[A.em])
this.bZ=H.b([],[A.en])
if(a2.k2){y=a2.z
if(y>0){this.d2=H.k(this.r.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.bU;(x&&C.a).h(x,new A.ei(l,k,j))}}y=a2.Q
if(y>0){this.d3=H.k(this.r.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isU")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isU")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isU")
x=this.bV;(x&&C.a).h(x,new A.ej(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.d4=H.k(this.r.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isU")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isU")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isU")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isU")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isU")
x=this.bW;(x&&C.a).h(x,new A.ek(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d5=H.k(this.r.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isae")
x=this.bX;(x&&C.a).h(x,new A.el(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.d6=H.k(this.r.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$iscM")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isU")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isU")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isU")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isaf")
x=this.bY;(x&&C.a).h(x,new A.em(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.d7=H.k(this.r.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isU")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isU")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isU")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isU")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isU")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a1,"$isae")
x=this.bZ;(x&&C.a).h(x,new A.en(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
a0:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
h6:function(a,b){var z,y
z=a.ak
y=new A.h7(b,z)
y.dI(b,z)
y.dF(a,b)
return y}}},ha:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aA,ak,aB",
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
z=a.a+="uniform BendingValue bendValues["+this.aA+"];\n"
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
ag:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cg(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
f5:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ag(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
this.ag(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
this.ag(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
this.ag(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
this.ag(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
this.ag(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
this.ag(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
i:function(a){return this.ak}},ei:{"^":"a;a,b,c"},el:{"^":"a;a,b,c,d,e,f,r,x"},ej:{"^":"a;a,b,c,d,e,f,r"},em:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ek:{"^":"a;a,b,c,d,e,f,r,x,y,z"},en:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dT:{"^":"cn;",
dI:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cu:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eS:function(){var z,y,x,w,v,u
z=H.b([],[A.d7])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d7(y,v.name,u))}this.f=new A.fa(z)},
eU:function(){var z,y,x,w,v,u
z=H.b([],[A.a4])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fz(v.type,v.size,v.name,u))}this.r=new A.ir(z)},
at:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cL(z,y,b,a,c)},
e_:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ae(z,y,b,c)
else return A.cL(z,y,b,a,c)},
e0:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.cL(z,y,b,a,c)},
b3:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fz:function(a,b,c,d){switch(a){case 5120:return this.at(b,c,d)
case 5121:return this.at(b,c,d)
case 5122:return this.at(b,c,d)
case 5123:return this.at(b,c,d)
case 5124:return this.at(b,c,d)
case 5125:return this.at(b,c,d)
case 5126:return new A.U(this.a,this.e,c,d)
case 35664:return new A.il(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.ip(this.a,this.e,c,d)
case 35667:return new A.im(this.a,this.e,c,d)
case 35668:return new A.io(this.a,this.e,c,d)
case 35669:return new A.iq(this.a,this.e,c,d)
case 35674:return new A.it(this.a,this.e,c,d)
case 35675:return new A.cM(this.a,this.e,c,d)
case 35676:return new A.ay(this.a,this.e,c,d)
case 35678:return this.e_(b,c,d)
case 35680:return this.e0(b,c,d)
case 35670:throw H.f(this.b3("BOOL",c))
case 35671:throw H.f(this.b3("BOOL_VEC2",c))
case 35672:throw H.f(this.b3("BOOL_VEC3",c))
case 35673:throw H.f(this.b3("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bZ:{"^":"a;a,b",
i:function(a){return this.b}},a4:{"^":"a;"},ir:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
fF:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.fF("\n")}},E:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},im:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},io:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iq:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ik:{"^":"a4;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
cL:function(a,b,c,d,e){var z=new A.ik(a,b,c,e)
z.f=d
z.e=P.fZ(d,0,!1,P.B)
return z}}},U:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},il:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ip:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},it:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cM:{"^":"a4;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bB(H.w(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ay:{"^":"a4;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bB(H.w(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ae:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},af:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
kQ:function(a,b,c,d){return F.ko(c,a,d,b,new F.kR())},
ko:function(a,b,c,d,e){var z=F.kO(a,b,new F.kp(H.d(e,{func:1,ret:V.a6,args:[P.v]}),d,b,c),null)
if(z==null)return
z.av()
z.fR(new F.iJ(),new F.hl())
return z},
kO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.az,P.v,P.v]})
if(a<1)return
if(b<1)return
z=new F.dU()
y=new F.iE(z)
y.b=!1
x=[F.az]
y.c=H.b([],x)
z.a=y
y=new F.hR(z)
y.b=H.b([],[F.dM])
z.b=y
y=new F.hQ(z)
y.b=H.b([],[F.dA])
z.c=y
y=new F.hP(z)
y.b=H.b([],[F.ak])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cN(null,null,new V.bI(x,0,0,1),null,null,new V.T(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.cM(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cN(null,null,new V.bI(o,n,m,1),null,null,new V.T(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.cM(d))}}z.d.fm(a+1,b+1,w)
return z},
kR:{"^":"u:33;",
$1:function(a){return new V.a6(Math.cos(a),Math.sin(a),0)}},
kp:{"^":"u:34;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d4(y.$1(z),x)
x=J.d4(y.$1(z+3.141592653589793/this.c),x).I(0,w)
x=new V.H(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.H(1,0,0)
y=v.aj(!v.t(0,u)?new V.H(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.aj(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.G(0,new V.a6(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.N(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a_()}}},
ak:{"^":"a;0a,0b,0c,0d,0e",
aK:function(){if(!this.gcN()){C.a.S(this.a.a.d.b,this)
this.a.a.a_()}this.eH()
this.eI()
this.eJ()},
eP:function(a){this.a=a
C.a.h(a.d.b,this)},
eQ:function(a){this.b=a
C.a.h(a.d.c,this)},
eR:function(a){this.c=a
C.a.h(a.d.d,this)},
eH:function(){var z=this.a
if(z!=null){C.a.S(z.d.b,this)
this.a=null}},
eI:function(){var z=this.b
if(z!=null){C.a.S(z.d.c,this)
this.b=null}},
eJ:function(){var z=this.c
if(z!=null){C.a.S(z.d.d,this)
this.c=null}},
gcN:function(){return this.a==null||this.b==null||this.c==null},
dU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dc())return
return v.u(0,Math.sqrt(v.D(v)))},
dX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.I(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aj(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
bQ:function(){if(this.d!=null)return!0
var z=this.dU()
if(z==null){z=this.dX()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
dT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dc())return
return v.u(0,Math.sqrt(v.D(v)))},
dW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.I(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u).j(0,l).G(0,u).I(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.aj(m)
z=z.u(0,Math.sqrt(z.D(z))).aj(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
bO:function(){if(this.e!=null)return!0
var z=this.dT()
if(z==null){z=this.dW()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
gft:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var z,y
if(this.gcN())return a+"disposed"
z=a+C.i.am(J.ai(this.a.e),0)+", "+C.i.am(J.ai(this.b.e),0)+", "+C.i.am(J.ai(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.A("")},
q:{
c2:function(a,b,c){var z,y,x
z=new F.ak()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.eP(a)
z.eQ(b)
z.eR(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
fB:{"^":"a;"},
hW:{"^":"fB;",
aO:function(a,b,c){var z,y
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
dA:{"^":"a;"},
fT:{"^":"a;"},
ij:{"^":"fT;",
aO:function(a,b,c){var z,y
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
dM:{"^":"a;"},
dU:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
av:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.an(0)
return y},
e4:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.az],"$asc")
H.w(e,"$isc",[P.B],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aO(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fR:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.az],x=[P.B];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.e4(a,v,y,u,t))b.fQ(u)}this.a.w()
this.c.c6()
this.d.c6()
this.b.h6()
this.c.c7(new F.ij())
this.d.c7(new F.hW())
z=this.e
if(!(z==null))z.an(0)},
fq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aD()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
v=b.gcf(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.da])
for(r=0,q=0;q<w;++q){p=b.fo(q)
o=p.gcf(p)
C.a.V(s,q,new Z.da(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fN(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.V(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bB(t)),35044)
y.bindBuffer(34962,null)
i=new Z.db(new Z.et(34962,j),s,b)
i.b=H.b([],[Z.c4])
if(this.b.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.cO(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c4(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.cO(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c4(1,h.length,f))}if(this.d.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.cO(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c4(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
aE:function(a){var z=this.e
if(!(z==null))z.C(a)},
a_:function(){return this.aE(null)}},
hP:{"^":"a;a,0b",
fm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.az],"$asc")
z=H.b([],[F.ak])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.i(c,x)
r=c[x];++x
if(x>=s)return H.i(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.i(c,p)
o=c[p]
if(y<0||y>=s)return H.i(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.c2(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c2(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c2(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c2(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
c7:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aO(0,v,t)){v.aK()
break}}}}},
c6:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gft(x)
if(y)x.aK()}},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bQ())x=!1
return x},
bP:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bO())x=!1
return x},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
M:function(){return this.A("")}},
hQ:{"^":"a;a,0b",
gl:function(a){return this.b.length},
c7:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aO(0,v,t)){v.aK()
break}}}}},
c6:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.aK()}},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.b([],[P.l])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
M:function(){return this.A("")}},
hR:{"^":"a;a,0b",
gl:function(a){return this.b.length},
h6:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aK()}},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
M:function(){return this.A("")}},
az:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cM:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cN(this.cx,x,u,z,y,w,v,a,t)},
fN:function(a){var z,y
z=J.J(a)
if(z.t(a,$.$get$aD())){z=this.f
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aC())){z=this.r
y=[P.v]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aB())){z=this.x
y=[P.v]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aE())){z=this.y
y=[P.v]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aF())){z=this.z
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bw())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bx())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$b0()))return H.b([this.ch],[P.v])
else if(z.t(a,$.$get$aA())){z=H.b([-1,-1,-1,-1],[P.v])
return z}else return H.b([],[P.v])},
bQ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.L(0,new F.iO(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
bO:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.L(0,new F.iN(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var z,y,x
z=H.b([],[P.l])
C.a.h(z,C.i.am(J.ai(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
M:function(){return this.A("")},
q:{
cN:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.az()
y=new F.iM(z)
y.b=H.b([],[F.dM])
z.b=y
y=new F.iI(z)
x=[F.dA]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iF(z)
x=[F.ak]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eq()
z.e=0
y=$.$get$aD()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aC().a)!==0?e:null
z.x=(x&$.$get$aB().a)!==0?b:null
z.y=(x&$.$get$aE().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$er().a)!==0?c:null
z.ch=(x&$.$get$b0().a)!==0?i:0
z.cx=(x&$.$get$aA().a)!==0?a:null
return z}}},
iO:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isak")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
iN:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isak")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
iE:{"^":"a;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
gl:function(a){return this.c.length},
av:function(){var z,y,x
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
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
this.w()
z=H.b([],[P.l])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
M:function(){return this.A("")}},
iF:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
L:function(a,b){H.d(b,{func:1,ret:-1,args:[F.ak]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iG(this,b))
C.a.L(this.d,new F.iH(this,b))},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
M:function(){return this.A("")}},
iG:{"^":"u:6;a,b",
$1:function(a){H.k(a,"$isak")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iH:{"^":"u:6;a,b",
$1:function(a){var z
H.k(a,"$isak")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iI:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
M:function(){return this.A("")}},
iK:{"^":"a;"},
iJ:{"^":"iK;",
aO:function(a,b,c){return J.N(b.f,c.f)}},
iL:{"^":"a;"},
hl:{"^":"iL;",
fQ:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.az],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.u(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.C(null)}}}return}},
iM:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
M:function(){return this.A("")}}}],["","",,O,{"^":"",h5:{"^":"cI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
a6:[function(a){var z
H.k(a,"$isp")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.a6(null)},"hu","$1","$0","gei",0,2,0],
eM:[function(a){H.k(a,"$isp")
this.a=null
this.a6(a)},function(){return this.eM(null)},"hP","$1","$0","geL",0,2,0],
hr:[function(a,b){var z=V.ap
z=new D.c5(a,H.w(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.a6(z)},"$2","gef",8,0,20],
hs:[function(a,b){var z=V.ap
z=new D.c6(a,H.w(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.a6(z)},"$2","geg",8,0,20],
cr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.X(z.e.length+3,4)*4
x=C.f.X(z.f.length+3,4)*4
w=C.f.X(z.r.length+3,4)*4
v=C.f.X(z.x.length+3,4)*4
u=C.f.X(z.y.length+3,4)*4
t=C.f.X(z.z.length+3,4)*4
s=C.f.X(this.e.a.length+3,4)*4
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
a6=new Z.b_(a6.a|z.a)}if(a){z=$.$get$aE()
a6=new Z.b_(a6.a|z.a)}if(a0){z=$.$get$aF()
a6=new Z.b_(a6.a|z.a)}if(a2){z=$.$get$aA()
a6=new Z.b_(a6.a|z.a)}return new A.ha(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.w(a,"$isc",[T.e0],"$asc")},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.F();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c9(x)}}},
h8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cr()
y=a.fr.k(0,z.ak)
if(y==null){y=A.h6(z,a.a)
x=y.b
if(x.length===0)H.r(P.q("May not cache a shader with no name."))
if(a.fr.cK(0,x))H.r(P.q('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.V(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aB
z=b.e
if(!(z instanceof Z.db)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.av()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bP()
t.a.bP()
t=t.e
if(!(t==null))t.an(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fs()
s=s.e
if(!(s==null))s.an(0)}q=b.d.fq(new Z.iP(a.a),v)
q.aC($.$get$aD()).e=this.a.y.c
if(z)q.aC($.$get$aC()).e=this.a.Q.c
if(u)q.aC($.$get$aB()).e=this.a.z.c
if(w.rx)q.aC($.$get$aE()).e=this.a.ch.c
if(t)q.aC($.$get$aF()).e=this.a.cx.c
if(w.x1)q.aC($.$get$aA()).e=this.a.cy.c
b.e=q}z=T.e0
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fD()
if(w.fx){u=this.a
t=a.dx
t=t.gT(t)
u=u.db
u.toString
u.a9(t.a3(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gT(t)
s=a.dx
s=t.j(0,s.gT(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a9(t.a3(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gh4()
s=a.dx
s=t.j(0,s.gT(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a9(t.a3(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a9(t.a3(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a9(t.a3(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a9(C.y.a3(t,!0))}if(w.aA>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.k(s,"$isap")
t=t.k3
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.bB(H.w(s.a3(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.h:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.P(p,this.f.d)
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
case C.d:this.P(p,this.f.e)
u=this.a
t=this.f.e
u.a0(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.h:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.P(p,this.r.d)
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
case C.d:this.P(p,this.r.e)
u=this.a
t=this.r.e
u.a0(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.h:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.P(p,this.x.d)
u=this.a
t=this.x.d
u.a7(u.aA,u.aB,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.P(p,this.x.e)
u=this.a
t=this.x.e
u.a0(u.ak,u.aB,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.h:u=this.a
t=this.y.f
u=u.b8
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.P(p,this.y.d)
u=this.a
t=this.y.d
u.a7(u.cP,u.b9,t)
t=this.a
u=this.y.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.P(p,this.y.e)
u=this.a
t=this.y.e
u.a0(u.cQ,u.b9,t)
t=this.a
u=this.y.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.h:u=this.a
t=this.z.f
u=u.ba
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bc
t.a.uniform1f(t.d,r)
break
case C.c:this.P(p,this.z.d)
u=this.a
t=this.z.d
u.a7(u.cR,u.bb,t)
t=this.a
u=this.z.f
t=t.ba
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bc
u.a.uniform1f(u.d,r)
break
case C.d:this.P(p,this.z.e)
u=this.a
t=this.z.e
u.a0(u.cS,u.bb,t)
t=this.a
u=this.z.f
t=t.ba
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bc
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d2
u.a.uniform1i(u.d,o)
u=a.db
l=u.gT(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bU
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.c9(i.a)
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.d3
u.a.uniform1i(u.d,o)
u=a.db
l=u.gT(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bV
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaR(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aW(i.gaR(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga8(i)
f=h.d
g=s.gbl()
r=s.gaX()
s=s.gb5()
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
l=u.gT(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bW
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaR(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbT(i).hV()
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aW(i.gaR(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga8(i)
r=h.e
g=s.gbl()
f=s.gaX()
s=s.gb5()
r.a.uniform3f(r.d,g,f,s)
s=i.ghU()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghT()
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
l=u.gT(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
r=this.a.bX
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaT()
H.w(p,"$isc",s,"$asc")
if(!C.a.b7(p,r)){r.saL(0,p.length)
C.a.h(p,r)}r=i.gbT(i)
g=h.d
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=i.gbm()
e=h.b
f=r.gax(r)
g=r.gay(r)
r=r.gaz()
e.a.uniform3f(e.d,f,g,r)
r=i.gaS(i)
g=h.c
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=l.c9(i.gbT(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga8(i)
f=h.f
e=g.gbl()
r=g.gaX()
g=g.gb5()
f.a.uniform3f(f.d,e,r,g)
g=i.gaT()
r=g.gaM(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaM(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaL(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.d6
u.a.uniform1i(u.d,o)
u=a.db
l=u.gT(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
g=this.a.bY
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaT()
H.w(p,"$isc",r,"$asc")
if(!C.a.b7(p,g)){g.saL(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gT(i))
g=i.gT(i).aW(new V.a6(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gcb(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aW(new V.a6(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.da(0)
c=h.d
m=new Float32Array(H.bB(H.w(new V.c9(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a3(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga8(i)
g=h.e
e=c.gbl()
f=c.gaX()
c=c.gb5()
g.a.uniform3f(g.d,e,f,c)
c=i.gaT()
g=c.gaM(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaM(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaL(c))
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
l=u.gT(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bZ
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaT()
H.w(p,"$isc",z,"$asc")
if(!C.a.b7(p,s)){s.saL(0,p.length)
C.a.h(p,s)}s=i.gaR(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbT(i)
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=i.gbm()
r=h.d
g=s.gax(s)
f=s.gay(s)
s=s.gaz()
r.a.uniform3f(r.d,g,f,s)
s=i.gaS(i)
f=h.e
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aW(i.gaR(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaT()
r=s.gaM(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaM(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaL(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga8(i)
r=h.y
g=s.gbl()
f=s.gaX()
s=s.gb5()
r.a.uniform3f(r.d,g,f,s)
s=i.gi_()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gi0()
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
case C.h:break
case C.c:this.P(p,this.Q.d)
z=this.a
u=this.Q.d
z.a7(z.cT,z.bd,u)
break
case C.d:this.P(p,this.Q.e)
z=this.a
u=this.Q.e
z.a0(z.cU,z.bd,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gT(u).da(0)
a.Q=u}z=z.fy
z.toString
z.a9(u.a3(0,!0))}if(w.dy){this.P(p,this.ch)
z=this.a
u=this.ch
z.a0(z.cV,z.cW,u)
switch(w.r){case C.b:break
case C.h:z=this.a
u=this.cx.f
z=z.be
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.P(p,this.cx.d)
z=this.a
u=this.cx.d
z.a7(z.cX,z.bf,u)
u=this.a
z=this.cx.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.P(p,this.cx.e)
z=this.a
u=this.cx.e
z.a0(z.cY,z.bf,u)
u=this.a
z=this.cx.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.h:z=this.a
u=this.cy.f
z=z.bh
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bg
u.a.uniform1f(u.d,s)
break
case C.c:this.P(p,this.cy.d)
z=this.a
u=this.cy.d
z.a7(z.cZ,z.bi,u)
u=this.a
z=this.cy.f
u=u.bh
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bg
z.a.uniform1f(z.d,s)
break
case C.d:this.P(p,this.cy.e)
z=this.a
u=this.cy.e
z.a0(z.d_,z.bi,u)
u=this.a
z=this.cy.f
u=u.bh
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bg
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.h:z=this.a
t=this.db.f
z=z.bj
z.a.uniform1f(z.d,t)
break
case C.c:this.P(p,this.db.d)
z=this.a
t=this.db.d
z.a7(z.d0,z.bk,t)
t=this.a
z=this.db.f
t=t.bj
t.a.uniform1f(t.d,z)
break
case C.d:this.P(p,this.db.e)
z=this.a
t=this.db.e
z.a0(z.d1,z.bk,t)
t=this.a
z=this.db.f
t=t.bj
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b4(a)
z=b.e
z.b4(a)
z.aF(a)
z.dq(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].dq(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.fC()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cr().ak}},h8:{"^":"cB;0f,a,b,0c,0d,0e"},cB:{"^":"a;",
b0:["dD",function(){}]},h9:{"^":"cB;a,b,0c,0d,0e"},aW:{"^":"cB;0f,a,b,0c,0d,0e",
cC:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.L(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.a6(y)}},
b0:["bp",function(){this.dD()
this.cC(new V.V(1,1,1))}],
sa8:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.b0()
z=this.a
z.a=null
z.a6(null)}this.cC(b)}},hb:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
eO:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.a6(z)}},
b0:function(){this.bp()
this.eO(1)}},hc:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
bG:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.a6(z)}},
b0:function(){this.bp()
this.bG(100)}},cI:{"^":"a;"}}],["","",,T,{"^":"",e0:{"^":"cn;"},i5:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",f9:{"^":"a;",
aN:function(a,b){return!0},
i:function(a){return"all"},
$isbO:1},bO:{"^":"a;"},dG:{"^":"a;",
aN:["dC",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aN(0,b))return!0
return!1}],
i:["ci",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbO:1},bl:{"^":"dG;0a",
aN:function(a,b){return!this.dC(0,b)},
i:function(a){return"!["+this.ci(0)+"]"}},hN:{"^":"a;0a",
dH:function(a){var z,y
if(a.a.length<=0)throw H.f(P.q("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.B,P.a9])
for(y=new H.dD(a,a.gl(a),0,[H.aI(a,"t",0)]);y.F();)z.V(0,y.d,!0)
this.a=z},
aN:function(a,b){return this.a.cK(0,b)},
i:function(a){var z=this.a
return P.cH(new H.dC(z,[H.y(z,0)]),0,null)},
$isbO:1,
q:{
a1:function(a){var z=new V.hN()
z.dH(a)
return z}}},dW:{"^":"a;a,b,0c,0d",
gfS:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e6(this.a.H(0,b))
w.a=H.b([],[V.bO])
w.c=!1
C.a.h(this.c,w)
return w},
fE:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aN(0,a))return w}return},
i:function(a){return this.b}},e3:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f3(this.b,"\n","\\n")
y=H.f3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e4:{"^":"a;a,b,0c",
i:function(a){return this.b}},ie:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dW(this,b)
z.c=H.b([],[V.e6])
this.a.V(0,b,z)}return z},
aU:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.e4(this,a)
y=P.l
z.c=new H.aV(0,0,[y,y])
this.b.V(0,a,z)}return z},
hh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e3])
y=this.c
x=[P.B]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aZ(a,t)
r=y.fE(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cH(w,0,null)
throw H.f(P.q("Untokenizable string [state: "+y.gfS(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cH(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.e3(o==null?p.b:o,q,t)}++t}}}},e6:{"^":"dG;b,0c,0a",
i:function(a){return this.b.b+": "+this.ci(0)}}}],["","",,X,{"^":"",dd:{"^":"a;",$isax:1},fG:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z}},ho:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
aH:[function(a){var z
H.k(a,"$isp")
z=this.e
if(!(z==null))z.C(a)},function(){return this.aH(null)},"hk","$1","$0","gck",0,2,0],
sde:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gv()
z.toString
y=H.d(this.gck(),{func:1,ret:-1,args:[D.p]})
C.a.S(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gv()
z.toString
y=H.d(this.gck(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.L("mover",x,this.a,this,[U.a5])
z.b=!0
this.aH(z)}},
$isax:1,
$isdd:1},dZ:{"^":"a;"}}],["","",,V,{"^":"",
kM:function(a){P.id(C.w,new V.kN(a))},
kN:{"^":"u:36;a",
$1:function(a){H.k(a,"$isaY")
P.d3(C.e.dn(this.a.gfG(),2)+" fps")}},
hS:{"^":"a;0a,0b",
dJ:function(a,b){var z,y,x,w,v,u,t
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
t=W.aa
W.Y(z,"scroll",H.d(new V.hV(x),{func:1,ret:-1,args:[t]}),!1,t)},
fn:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.l],"$asc")
this.eT()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hh(C.a.fL(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.f2(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jZ(C.G,s,C.q,!1)
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
eT:function(){var z,y,x,w
if(this.b!=null)return
z=new V.ie()
y=P.l
z.a=new H.aV(0,0,[y,V.dW])
z.b=new H.aV(0,0,[y,V.e4])
z.c=z.H(0,"Start")
y=z.H(0,"Start").B(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").B(0,"Bold")
x=new V.bl()
w=[V.bO]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").B(0,"Italic")
x=new V.bl()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").B(0,"Code")
x=new V.bl()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").B(0,"LinkHead")
y=new V.bl()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").B(0,"LinkTail")
y=new V.bl()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").B(0,"Other").a,new V.f9())
x=z.H(0,"Other").B(0,"Other")
y=new V.bl()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.aU("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.aU("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.aU("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.aU("Link")
x=z.H(0,"Other")
x.d=x.a.aU("Other")
this.b=z},
q:{
hT:function(a,b){var z=new V.hS()
z.dJ(a,!0)
return z}}},
hV:{"^":"u:37;a",
$1:function(a){P.ic(C.m,new V.hU(this.a))}},
hU:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.e.a2(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Q,{"^":"",
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.hT("Test 009",!0)
y=W.de(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fn(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],[P.l]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.ia(x,!0,!0,!0,!1)
v=new E.aK()
v.a=""
v.b=!0
z=E.aK
u=O.cs(z)
v.y=u
u.aY(v.gfT(),v.gfV())
v.z=null
v.Q=null
v.ch=null
v.cx=null
v.cy=null
v.db=null
v.dx=null
v.dy=null
v.fr=null
v.fx=null
v.sce(0,null)
v.sce(0,F.kQ(30,1,15,0.5))
t=new O.h5()
u=O.cs(V.ap)
t.e=u
u.aY(t.gef(),t.geg())
u=new O.aW(t,"emission")
u.c=C.b
u.f=new V.V(0,0,0)
t.f=u
u=new O.aW(t,"ambient")
u.c=C.b
u.f=new V.V(0,0,0)
t.r=u
u=new O.aW(t,"diffuse")
u.c=C.b
u.f=new V.V(0,0,0)
t.x=u
u=new O.aW(t,"invDiffuse")
u.c=C.b
u.f=new V.V(0,0,0)
t.y=u
u=new O.hc(t,"specular")
u.c=C.b
u.f=new V.V(0,0,0)
u.ch=100
t.z=u
u=new O.h9(t,"bump")
u.c=C.b
t.Q=u
t.ch=null
u=new O.aW(t,"reflect")
u.c=C.b
u.f=new V.V(0,0,0)
t.cx=u
u=new O.hb(t,"refract")
u.c=C.b
u.f=new V.V(0,0,0)
u.ch=1
t.cy=u
u=new O.h8(t,"alpha")
u.c=C.b
u.f=1
t.db=u
u=new D.fS()
u.bq(D.W)
u.e=H.b([],[D.c0])
u.f=H.b([],[D.hq])
u.r=H.b([],[D.hX])
u.x=H.b([],[D.i6])
u.y=H.b([],[D.i7])
u.z=H.b([],[D.i8])
u.Q=null
u.ch=null
u.cd(u.gee(),u.geA(),u.geC())
t.dx=u
s=u.Q
if(s==null){s=D.G()
u.Q=s
u=s}else u=s
s={func:1,ret:-1,args:[D.p]}
r=H.d(t.geL(),s)
C.a.h(u.a,r)
r=t.dx
u=r.ch
if(u==null){u=D.G()
r.ch=u}r=H.d(t.gei(),s)
C.a.h(u.a,r)
t.dy=null
r=t.dx
u=U.di(V.dH(new V.a6(0,0,0),new V.H(0,1,0),new V.H(-1,-1,-1)))
q=new V.V(1,1,1)
p=new D.c0()
p.c=new V.V(1,1,1)
p.a=new V.H(0,0,1)
o=p.b
p.b=u
u=u.gv()
u.toString
n=H.d(p.gdO(),s)
C.a.h(u.a,n)
u=new D.L("mover",o,p.b,p,[U.a5])
u.b=!0
p.ap(u)
if(!p.c.t(0,q)){o=p.c
p.c=q
u=new D.L("color",o,q,p,[V.V])
u.b=!0
p.ap(u)}r.h(0,p)
t.f.sa8(0,new V.V(0,0,0))
u=t.r
u.sa8(0,new V.V(0,0,1))
u=t.x
u.sa8(0,new V.V(0,1,0))
u=t.z
u.sa8(0,new V.V(1,0,0))
u=t.z
if(u.c===C.b){u.c=C.h
u.bp()
u.bG(100)
r=u.a
r.a=null
r.a6(null)}u.bG(10)
m=new U.du()
m.bq(U.a5)
m.aY(m.ged(),m.geB())
m.e=null
m.f=V.bP()
m.r=0
u=w.r
r=new U.iA()
p=U.ct()
p.sca(0,!0)
p.sc1(6.283185307179586)
p.sc3(0)
p.sY(0,0)
p.sc2(100)
p.sN(0)
p.sbS(0.5)
r.b=p
p=p.gv()
p.toString
n=H.d(r.gaq(),s)
C.a.h(p.a,n)
p=U.ct()
p.sca(0,!0)
p.sc1(6.283185307179586)
p.sc3(0)
p.sY(0,0)
p.sc2(100)
p.sN(0)
p.sbS(0.5)
r.c=p
C.a.h(p.gv().a,n)
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
l=new X.ar(!1,!1,!1)
o=r.d
r.d=l
p=[X.ar]
n=new D.L("modifiers",o,l,r,p)
n.b=!0
r.K(n)
n=r.f
if(n!==!1){r.f=!1
n=new D.L("invertX",n,!1,r,[P.a9])
n.b=!0
r.K(n)}n=r.r
if(n!==!0){r.r=!0
n=new D.L("invertY",n,!0,r,[P.a9])
n.b=!0
r.K(n)}r.aJ(u)
m.h(0,r)
u=w.r
r=new U.iz()
n=U.ct()
n.sca(0,!0)
n.sc1(6.283185307179586)
n.sc3(0)
n.sY(0,0)
n.sc2(100)
n.sN(0)
n.sbS(0.2)
r.b=n
n=n.gv()
n.toString
k=H.d(r.gaq(),s)
C.a.h(n.a,k)
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
l=new X.ar(!0,!1,!1)
o=r.c
r.c=l
n=new D.L("modifiers",o,l,r,p)
n.b=!0
r.K(n)
r.aJ(u)
m.h(0,r)
u=w.r
r=new U.iB()
r.c=0.01
r.d=0
r.e=0
l=new X.ar(!1,!1,!1)
r.b=l
p=new D.L("modifiers",null,l,r,p)
p.b=!0
r.K(p)
r.aJ(u)
m.h(0,r)
m.h(0,U.di(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=new M.fy()
z=O.cs(z)
u.d=z
z.aY(u.gej(),u.gek())
u.e=null
u.f=null
u.r=null
u.x=null
j=new X.ho()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.sde(null)
z=j.b
if(!$.o.$2(z,1.0471975511965976)){o=j.b
j.b=1.0471975511965976
z=new D.L("fov",o,1.0471975511965976,j,[P.v])
z.b=!0
j.aH(z)}z=j.c
if(!$.o.$2(z,0.1)){o=j.c
j.c=0.1
z=new D.L("near",o,0.1,j,[P.v])
z.b=!0
j.aH(z)}z=j.d
if(!$.o.$2(z,2000)){o=j.d
j.d=2000
z=new D.L("far",o,2000,j,[P.v])
z.b=!0
j.aH(z)}z=u.a
if(z!==j){if(z!=null){z=z.gv()
z.toString
r=H.d(u.gaa(),s)
C.a.S(z.a,r)}o=u.a
u.a=j
z=j.gv()
z.toString
r=H.d(u.gaa(),s)
C.a.h(z.a,r)
z=new D.L("camera",o,u.a,u,[X.dd])
z.b=!0
u.ar(z)}i=new X.fG()
z=new V.bI(0,0,0,1)
i.a=z
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
z=V.dR(0,0,1,1)
i.r=z
z=u.b
if(z!==i){if(z!=null){z=z.gv()
z.toString
r=H.d(u.gaa(),s)
C.a.S(z.a,r)}o=u.b
u.b=i
z=i.gv()
z.toString
r=H.d(u.gaa(),s)
C.a.h(z.a,r)
z=new D.L("target",o,u.b,u,[X.dZ])
z.b=!0
u.ar(z)}u.sdl(null)
u.sdl(t)
u.d.h(0,v)
u.a.sde(m)
z=w.d
if(z!==u){if(z!=null){z=z.gv()
z.toString
r=H.d(w.gcj(),s)
C.a.S(z.a,r)}w.d=u
z=u.gv()
z.toString
s=H.d(w.gcj(),s)
C.a.h(z.a,s)
w.dM()}V.kM(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dw.prototype
return J.fN.prototype}if(typeof a=="string")return J.c7.prototype
if(a==null)return J.dx.prototype
if(typeof a=="boolean")return J.fM.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.bU=function(a){if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.cZ=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.kt=function(a){if(typeof a=="number")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.ku=function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.bV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).t(a,b)}
J.f5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kt(a).a4(a,b)}
J.d4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ku(a).j(a,b)}
J.f6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kD(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).k(a,b)}
J.f7=function(a,b,c,d){return J.bV(a).cH(a,b,c,d)}
J.cm=function(a,b,c){return J.bU(a).fu(a,b,c)}
J.d5=function(a,b){return J.cZ(a).E(a,b)}
J.f8=function(a,b){return J.cZ(a).L(a,b)}
J.av=function(a){return J.J(a).gR(a)}
J.bH=function(a){return J.cZ(a).gU(a)}
J.b9=function(a){return J.bU(a).gl(a)}
J.ai=function(a){return J.J(a).i(a)}
I.d1=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cq.prototype
C.x=J.m.prototype
C.a=J.aU.prototype
C.f=J.dw.prototype
C.y=J.dx.prototype
C.e=J.bL.prototype
C.i=J.c7.prototype
C.F=J.bM.prototype
C.H=H.hj.prototype
C.I=W.hk.prototype
C.p=J.hp.prototype
C.l=J.ce.prototype
C.r=W.by.prototype
C.t=W.iS.prototype
C.u=new P.hn()
C.v=new P.iD()
C.j=new P.jD()
C.b=new A.bZ(0,"ColorSourceType.None")
C.h=new A.bZ(1,"ColorSourceType.Solid")
C.c=new A.bZ(2,"ColorSourceType.Texture2D")
C.d=new A.bZ(3,"ColorSourceType.TextureCube")
C.m=new P.aS(0)
C.w=new P.aS(5e6)
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
C.G=H.b(I.d1([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.q=new P.iC(!1)
$.ao=0
$.ba=null
$.d8=null
$.cS=!1
$.eW=null
$.eQ=null
$.f1=null
$.ci=null
$.ck=null
$.d_=null
$.b2=null
$.bC=null
$.bD=null
$.cT=!1
$.M=C.j
$.dq=null
$.dp=null
$.dn=null
$.dm=null
$.o=V.hd()
$.dL=null
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
I.$lazy(y,x,w)}})(["dl","$get$dl",function(){return H.eV("_$dart_dartClosure")},"cy","$get$cy",function(){return H.eV("_$dart_js")},"e7","$get$e7",function(){return H.at(H.cd({
toString:function(){return"$receiver$"}}))},"e8","$get$e8",function(){return H.at(H.cd({$method$:null,
toString:function(){return"$receiver$"}}))},"e9","$get$e9",function(){return H.at(H.cd(null))},"ea","$get$ea",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.at(H.cd(void 0))},"ef","$get$ef",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.at(H.ed(null))},"eb","$get$eb",function(){return H.at(function(){try{null.$method$}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.at(H.ed(void 0))},"eg","$get$eg",function(){return H.at(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cP","$get$cP",function(){return P.iT()},"bE","$get$bE",function(){return[]},"eK","$get$eK",function(){return P.hD("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dk","$get$dk",function(){return{}},"es","$get$es",function(){return Z.ag(0)},"eq","$get$eq",function(){return Z.ag(511)},"aD","$get$aD",function(){return Z.ag(1)},"aC","$get$aC",function(){return Z.ag(2)},"aB","$get$aB",function(){return Z.ag(4)},"aE","$get$aE",function(){return Z.ag(8)},"aF","$get$aF",function(){return Z.ag(16)},"bw","$get$bw",function(){return Z.ag(32)},"bx","$get$bx",function(){return Z.ag(64)},"er","$get$er",function(){return Z.ag(96)},"b0","$get$b0",function(){return Z.ag(128)},"aA","$get$aA",function(){return Z.ag(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[W.as]},{func:1,ret:P.F,args:[F.ak]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.B,[P.h,E.aK]]},{func:1,ret:P.F,args:[D.p]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.l,args:[P.B]},{func:1,ret:P.F,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.B,[P.h,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.B,[P.h,U.a5]]},{func:1,ret:-1,args:[P.B,[P.h,V.ap]]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.a9,args:[W.I]},{func:1,ret:W.a0,args:[W.I]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.F,args:[P.R]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:-1,args:[P.a],opt:[P.al]},{func:1,ret:-1,args:[W.by]},{func:1,ret:P.a9,args:[P.v,P.v]},{func:1,ret:P.a9,args:[[P.h,D.W]]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:V.a6,args:[P.v]},{func:1,ret:P.F,args:[F.az,P.v,P.v]},{func:1,ret:[P.aG,,],args:[,]},{func:1,ret:P.F,args:[P.aY]},{func:1,ret:P.F,args:[W.aa]},{func:1,ret:-1,args:[P.l,P.l]}]
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
if(x==y)H.kP(d||a)
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
Isolate.d1=a.d1
Isolate.cX=a.cX
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.eZ,[])
else Q.eZ([])})})()
//# sourceMappingURL=test.dart.js.map
