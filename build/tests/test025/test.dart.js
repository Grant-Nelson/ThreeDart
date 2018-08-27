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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isq)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dB=function(){}
var dart=[["","",,H,{"^":"",o6:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cG:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dE==null){H.mN()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ca("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d_()]
if(v!=null)return v
v=H.mS(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
u:function(a,b){return a===b},
gT:function(a){return H.bL(a)},
i:["eh",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i1:{"^":"q;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isah:1},
ei:{"^":"q;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isG:1},
d0:{"^":"q;",
gT:function(a){return 0},
i:["ei",function(a){return String(a)}]},
iK:{"^":"d0;"},
cb:{"^":"d0;"},
c5:{"^":"d0;",
i:function(a){var z=a[$.$get$e3()]
if(z==null)return this.ei(a)
return"JavaScript function for "+H.l(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscW:1},
b9:{"^":"q;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.A("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.t(P.A("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b4(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hC:function(a){return this.E(a,"")},
hu:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b4(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bE:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a_(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i_())},
ay:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.t(P.A("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.D(0,1))a[z]=d},
aV:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cY(a,"[","]")},
ga_:function(a){return new J.au(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ch(b,"newLength",null))
if(b<0)throw H.a(P.a_(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
i0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ch(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a_(a,0,4294967295,"length",null))
return J.ef(new Array(a),b)},
ef:function(a,b){return J.bE(H.e(a,[b]))},
bE:function(a){H.bY(a)
a.fixed$length=Array
return a}}},
o5:{"^":"b9;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c3:{"^":"q;",
ghB:function(a){return a===0?1/a<0:a<0},
ie:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cg:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e6:function(a,b){var z
if(b>20)throw H.a(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghB(a))return"-"+z
return z},
b4:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.A("Unexpected toString result: "+z))
x=J.aF(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a*b},
b9:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
el:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d2(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d2(a,b)},
d2:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.d0(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fE:function(a,b){if(b<0)throw H.a(H.ae(b))
return this.d0(a,b)},
d0:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.ae(b))
return a<b},
$isr:1,
$isW:1},
eh:{"^":"c3;",$ism:1},
eg:{"^":"c3;"},
c4:{"^":"q;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b<0)throw H.a(H.aE(a,b))
if(b>=a.length)H.t(H.aE(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aE(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.ch(b,null,null))
return a+b},
aO:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ae(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.a8(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.cu(b,null,null))
if(b>c)throw H.a(P.cu(b,null,null))
if(c>a.length)throw H.a(P.cu(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.v(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hS:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ab:function(a,b){return this.hS(a,b," ")},
dN:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dM:function(a,b){return this.dN(a,b,0)},
hi:function(a,b,c){if(c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
return H.h6(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isex:1,
$isi:1}}],["","",,H,{"^":"",
cH:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i_:function(){return new P.jn("No element")},
a4:{"^":"jV;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$ascy:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hK:{"^":"j;"},
en:{"^":"b;a,b,c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aF(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b4(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ip:{"^":"j;a,b,$ti",
ga_:function(a){return new H.iq(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
J:function(a,b){return this.b.$1(J.cM(this.a,b))},
$asj:function(a,b){return[b]}},
iq:{"^":"cZ;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascZ:function(a,b){return[b]}},
kp:{"^":"j;a,b,$ti",
ga_:function(a){return new H.kq(J.by(this.a),this.b,this.$ti)}},
kq:{"^":"cZ;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cm:{"^":"b;$ti"},
cy:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ay(this,"cy",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
ay:function(a,b,c,d){H.z(d,H.ay(this,"cy",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jV:{"^":"cq+cy;"}}],["","",,H,{"^":"",
hy:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mI:function(a){return init.types[H.D(a)]},
h_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.ae(a))
return z},
bL:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iU:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$iscb){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aA(w,1)
r=H.dF(H.bY(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iM:function(){if(!!self.location)return self.location.href
return},
ez:function(a){var z,y,x,w,v
H.bY(a)
z=J.at(a)
if(typeof z!=="number")return z.ee()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iV:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ae(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ae(w))}return H.ez(z)},
eA:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ae(x))
if(x<0)throw H.a(H.ae(x))
if(x>65535)return H.iV(a)}return H.ez(a)},
iW:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ee()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cs:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.a_(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iT:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iR:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iN:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iO:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iQ:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iS:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
iP:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ae(a))},
d:function(a,b){if(a==null)J.at(a)
throw H.a(H.aE(a,b))},
aE:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cu(b,"index",null)},
mC:function(a,b,c){if(a>c)return new P.ct(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ct(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
ae:function(a){return new P.aG(!0,a,null,null)},
mr:function(a){if(typeof a!=="number")throw H.a(H.ae(a))
return a},
a:function(a){var z
if(a==null)a=new P.ew()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h8})
z.name=""}else z.toString=H.h8
return z},
h8:function(){return J.ab(this.dartException)},
t:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b4(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d1(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ev(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eS()
u=$.$get$eT()
t=$.$get$eU()
s=$.$get$eV()
r=$.$get$eZ()
q=$.$get$f_()
p=$.$get$eX()
$.$get$eW()
o=$.$get$f1()
n=$.$get$f0()
m=v.aa(y)
if(m!=null)return z.$1(H.d1(H.M(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.d1(H.M(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ev(H.M(y),m))}}return z.$1(new H.jU(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eF()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eF()
return a},
bw:function(a){var z
if(a==null)return new H.fw(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fw(a)},
mF:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mP:function(a,b,c,d,e,f){H.h(a,"$iscW")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mP)
a.$identity=z
return z},
hu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.j0(z).r}else x=d
w=e?Object.create(new H.jo().constructor.prototype):Object.create(new H.cP(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.D()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e_(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mI,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dT:H.cQ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e_(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hr:function(a,b,c,d){var z=H.cQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ht(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hr(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ci("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ci("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hs:function(a,b,c,d){var z,y
z=H.cQ
y=H.dT
switch(b?-1:a){case 0:throw H.a(H.ja("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ht:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ci("self")
$.bz=z}y=$.dS
if(y==null){y=H.ci("receiver")
$.dS=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hs(w,!u,x,b)
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
z=J.bE(H.bY(b))
H.D(c)
y=!!J.I(d).$isc?J.bE(d):d
return H.hu(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
mD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
h4:function(a,b){throw H.a(H.ax(a,H.M(b).substring(3)))},
n2:function(a,b){var z=J.aF(b)
throw H.a(H.hq(a,z.v(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.h4(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.n2(a,b)},
bY:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.ax(a,"List"))},
h1:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.h4(a,b)},
fW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cd:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fW(J.I(a))
if(z==null)return!1
y=H.fZ(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.cd(a,b))return a
z=H.cg(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.du=!1}},
dC:function(a,b){if(a!=null&&!H.dx(a,b))H.t(H.ax(a,H.cg(b)))
return a},
fO:function(a){var z
if(a instanceof H.n){z=H.fW(J.I(a))
if(z!=null)return H.cg(z)
return"Closure"}return H.bd(a)},
n9:function(a){throw H.a(new P.hB(H.M(a)))},
fX:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
pd:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.M(c)
H.D(d)
z=H.bx(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.M(b)
H.D(c)
z=H.bx(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
cg:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dF(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mh(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.mE(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dF:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.an("")
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
y=J.I(a)
if(y[b]==null)return!1
return H.fR(H.bx(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bY(c)
H.M(d)
if(a==null)return a
z=H.bt(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dF(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fR:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
pb:function(a,b,c){return a.apply(b,H.bx(J.I(b)["$as"+H.l(c)],H.b0(b)))},
h0:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.h0(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.h0(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cd(a,b)}y=J.I(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.ax(a,H.cg(b)))
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
if('func' in c)return H.fZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bx(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cg(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fR(H.bx(r,z),b,u,d)},
fZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.n_(m,b,l,d)},
n_:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
pc:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mS:function(a){var z,y,x,w,v,u
z=H.M($.fY.$1(a))
y=$.cF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fQ.$2(a,z))
if(z!=null){y=$.cF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cJ(x)
$.cF[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cI[z]=x
return x}if(v==="-"){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h3(a,x)
if(v==="*")throw H.a(P.ca(z))
if(init.leafTags[z]===true){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h3(a,x)},
h3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dG(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cJ:function(a){return J.dG(a,!1,null,!!a.$isF)},
mZ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cJ(z)
else return J.dG(z,c,null,null)},
mN:function(){if(!0===$.dE)return
$.dE=!0
H.mO()},
mO:function(){var z,y,x,w,v,u,t,s
$.cF=Object.create(null)
$.cI=Object.create(null)
H.mJ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h5.$1(v)
if(u!=null){t=H.mZ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mJ:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bs(C.J,H.bs(C.O,H.bs(C.u,H.bs(C.u,H.bs(C.N,H.bs(C.K,H.bs(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fY=new H.mK(v)
$.fQ=new H.mL(u)
$.h5=new H.mM(t)},
bs:function(a,b){return a(b)||b},
h6:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h7:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hx:{"^":"b;$ti",
i:function(a){return P.d3(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hy()},
$isH:1},
hz:{"^":"hx;a,b,c,$ti",
gl:function(a){return this.a},
bk:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bk(0,b))return
return this.cR(b)},
cR:function(a){return this.b[H.M(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.f(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cR(v),z))}}},
j_:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j0:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bE(z)
y=z[0]
x=z[1]
return new H.j_(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jG:{"^":"b;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cx:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iH:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ev:function(a,b){return new H.iH(a,b==null?null:b.method)}}},
i4:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d1:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i4(a,y,z?null:b.receiver)}}},
jU:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nb:{"^":"n:17;a",
$1:function(a){if(!!J.I(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fw:{"^":"b;a,0b",
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
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
geb:function(){return this},
$iscW:1,
geb:function(){return this}},
eK:{"^":"n;"},
jo:{"^":"eK;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cP:{"^":"eK;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bL(this.a)
else y=typeof z!=="object"?J.b2(z):H.bL(z)
return(y^H.bL(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cQ:function(a){return a.a},
dT:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cP("self","target","receiver","name")
y=J.bE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jH:{"^":"a5;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.jH("TypeError: "+H.l(P.cl(a))+": type '"+H.fO(a)+"' is not a subtype of type '"+b+"'")}}},
hp:{"^":"a5;a",
i:function(a){return this.a},
p:{
hq:function(a,b){return new H.hp("CastError: "+H.l(P.cl(a))+": type '"+H.fO(a)+"' is not a subtype of type '"+b+"'")}}},
j9:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
ja:function(a){return new H.j9(a)}}},
aX:{"^":"il;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gan:function(a){return new H.i9(this,[H.y(this,0)])},
bk:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cO(y,b)}else return this.hy(b)},
hy:function(a){var z=this.d
if(z==null)return!1
return this.ck(this.bN(z,this.cj(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bc(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bc(w,b)
x=y==null?null:y.b
return x}else return this.hz(b)},
hz:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bN(z,this.cj(a))
x=this.ck(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bO()
this.b=z}this.cG(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bO()
this.c=y}this.cG(y,b,c)}else this.hA(b,c)},
hA:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bO()
this.d=z}y=this.cj(a)
x=this.bN(z,y)
if(x==null)this.bW(z,y,[this.bP(a,b)])
else{w=this.ck(x,a)
if(w>=0)x[w].b=b
else x.push(this.bP(a,b))}},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b4(this))
z=z.c}},
cG:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bc(a,b)
if(z==null)this.bW(a,b,this.bP(b,c))
else z.b=c},
eR:function(){this.r=this.r+1&67108863},
bP:function(a,b){var z,y
z=new H.i8(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eR()
return z},
cj:function(a){return J.b2(a)&0x3ffffff},
ck:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.d3(this)},
bc:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
cO:function(a,b){return this.bc(a,b)!=null},
bO:function(){var z=Object.create(null)
this.bW(z,"<non-identifier-key>",z)
this.eK(z,"<non-identifier-key>")
return z},
$isel:1},
i8:{"^":"b;a,b,0c,0d"},
i9:{"^":"hK;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.ia(z,z.r,this.$ti)
y.c=z.e
return y}},
ia:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mK:{"^":"n:17;a",
$1:function(a){return this.a(a)}},
mL:{"^":"n:39;a",
$2:function(a,b){return this.a(a,b)}},
mM:{"^":"n:45;a",
$1:function(a){return this.a(H.M(a))}},
i2:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isex:1,
$isj1:1,
p:{
i3:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.X("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mE:function(a){return J.ef(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bq:function(a){return a},
iD:function(a){return new Int8Array(a)},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aE(b,a))},
mb:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mC(a,b,c))
return b},
eu:{"^":"q;",$iseu:1,"%":"ArrayBuffer"},
d7:{"^":"q;",$isd7:1,$isjI:1,"%":"DataView;ArrayBufferView;d6|fq|fr|iE|fs|ft|aZ"},
d6:{"^":"d7;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dB},
iE:{"^":"fr;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mD(c)
H.aD(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.r]},
$asx:function(){return[P.r]},
$isj:1,
$asj:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"ft;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aD(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
oh:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oi:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oj:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ok:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ol:{"^":"aZ;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
om:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"aZ;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
bE:function(a,b,c){return new Uint8Array(a.subarray(b,H.mb(b,c,a.length)))},
$isd8:1,
$isO:1,
"%":";Uint8Array"},
fq:{"^":"d6+x;"},
fr:{"^":"fq+cm;"},
fs:{"^":"d6+x;"},
ft:{"^":"fs+cm;"}}],["","",,P,{"^":"",
ks:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mo()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.ku(z),1)).observe(y,{childList:true})
return new P.kt(z,y,x)}else if(self.setImmediate!=null)return P.mp()
return P.mq()},
p0:[function(a){self.scheduleImmediate(H.bu(new P.kv(H.f(a,{func:1,ret:-1})),0))},"$1","mo",4,0,11],
p1:[function(a){self.setImmediate(H.bu(new P.kw(H.f(a,{func:1,ret:-1})),0))},"$1","mp",4,0,11],
p2:[function(a){P.dh(C.r,H.f(a,{func:1,ret:-1}))},"$1","mq",4,0,11],
dh:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a3(a.a,1000)
return P.lv(z<0?0:z,b)},
eN:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bk]})
z=C.d.a3(a.a,1000)
return P.lw(z<0?0:z,b)},
mk:function(a,b){if(H.cd(a,{func:1,args:[P.b,P.aw]}))return b.i0(a,null,P.b,P.aw)
if(H.cd(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ch(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mj:function(){var z,y
for(;z=$.br,z!=null;){$.bW=null
y=z.b
$.br=y
if(y==null)$.bV=null
z.a.$0()}},
pa:[function(){$.dv=!0
try{P.mj()}finally{$.bW=null
$.dv=!1
if($.br!=null)$.$get$dp().$1(P.fS())}},"$0","fS",0,0,3],
fN:function(a){var z=new P.fj(H.f(a,{func:1,ret:-1}))
if($.br==null){$.bV=z
$.br=z
if(!$.dv)$.$get$dp().$1(P.fS())}else{$.bV.b=z
$.bV=z}},
mn:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.br
if(z==null){P.fN(a)
$.bW=$.bV
return}y=new P.fj(a)
x=$.bW
if(x==null){y.b=z
$.bW=y
$.br=y}else{y.b=x.b
x.b=y
$.bW=y
if(y.b==null)$.bV=y}},
n3:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cE(null,null,C.j,a)
return}y.toString
P.cE(null,null,y,H.f(y.bZ(a),z))},
jC:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.f(y.bZ(b),z))},
jD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.eN(a,b)}x=y.dd(b,P.bk)
$.T.toString
return P.eN(a,H.f(x,z))},
cD:function(a,b,c,d,e){var z={}
z.a=d
P.mn(new P.ml(z,e))},
fJ:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fK:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mm:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cE:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bZ(d):c.he(d,-1)
P.fN(d)},
ku:{"^":"n:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kt:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kv:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kw:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fz:{"^":"b;a,0b,c",
ex:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.ly(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ey:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lx(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbk:1,
p:{
lv:function(a,b){var z=new P.fz(!0,0)
z.ex(a,b)
return z},
lw:function(a,b){var z=new P.fz(!1,0)
z.ey(a,b)
return z}}},
ly:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lx:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.el(w,x)}z.c=y
this.d.$1(z)}},
bp:{"^":"b;0a,b,c,d,e,$ti",
hI:function(a){if(this.c!==6)return!0
return this.b.b.cu(H.f(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hx:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cd(z,{func:1,args:[P.b,P.aw]}))return H.dC(w.i7(z,a.a,a.b,null,y,P.aw),x)
else return H.dC(w.cu(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;d1:a<,b,0fu:c<,$ti",
e5:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mk(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cH(new P.bp(x,w,a,b,[z,c]))
return x},
ic:function(a,b){return this.e5(a,null,b)},
cH:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbp")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaT")
z=y.a
if(z<4){y.cH(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cE(null,null,z,H.f(new P.kL(this,a),{func:1,ret:-1}))}},
cX:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbp")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaT")
y=u.a
if(y<4){u.cX(a)
return}this.a=y
this.c=u.c}z.a=this.bf(a)
y=this.b
y.toString
P.cE(null,null,y,H.f(new P.kQ(z,this),{func:1,ret:-1}))}},
bS:function(){var z=H.h(this.c,"$isbp")
this.c=null
return this.bf(z)},
bf:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cL:function(a){var z,y,x,w
z=H.y(this,0)
H.dC(a,{futureOr:1,type:z})
y=this.$ti
x=H.bt(a,"$isbC",y,"$asbC")
if(x){z=H.bt(a,"$isaT",y,null)
if(z)P.fm(a,this)
else P.kM(a,this)}else{w=this.bS()
H.z(a,z)
this.a=4
this.c=a
P.bQ(this,w)}},
bJ:[function(a,b){var z
H.h(b,"$isaw")
z=this.bS()
this.a=8
this.c=new P.al(a,b)
P.bQ(this,z)},function(a){return this.bJ(a,null)},"ip","$2","$1","geG",4,2,29],
$isbC:1,
p:{
kM:function(a,b){var z,y,x
b.a=1
try{a.e5(new P.kN(b),new P.kO(b),null)}catch(x){z=H.as(x)
y=H.bw(x)
P.n3(new P.kP(b,z,y))}},
fm:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaT")
if(z>=4){y=b.bS()
b.a=a.a
b.c=a.c
P.bQ(b,y)}else{y=H.h(b.c,"$isbp")
b.a=2
b.c=a
a.cX(y)}},
bQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cD(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bQ(z.a,b)}y=z.a
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
if(p){H.h(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cD(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kT(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kS(x,b,r).$0()}else if((y&2)!==0)new P.kR(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.I(y).$isbC){if(y.a>=4){n=H.h(t.c,"$isbp")
t.c=null
b=t.bf(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fm(y,t)
return}}m=b.b
n=H.h(m.c,"$isbp")
m.c=null
b=m.bf(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kL:{"^":"n:0;a,b",
$0:function(){P.bQ(this.a,this.b)}},
kQ:{"^":"n:0;a,b",
$0:function(){P.bQ(this.b,this.a.a)}},
kN:{"^":"n:26;a",
$1:function(a){var z=this.a
z.a=0
z.cL(a)}},
kO:{"^":"n:51;a",
$2:function(a,b){this.a.bJ(a,H.h(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kP:{"^":"n:0;a,b,c",
$0:function(){this.a.bJ(this.b,this.c)}},
kT:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e3(H.f(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bw(v)
if(this.d){w=H.h(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.I(z).$isbC){if(z instanceof P.aT&&z.gd1()>=4){if(z.gd1()===8){w=this.b
w.b=H.h(z.gfu(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ic(new P.kU(t),null)
w.a=!1}}},
kU:{"^":"n:34;a",
$1:function(a){return this.a}},
kS:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cu(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bw(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kR:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isal")
w=this.c
if(w.hI(z)&&w.e!=null){v=this.b
v.b=w.hx(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bw(u)
w=H.h(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fj:{"^":"b;a,0b"},
de:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.m])
z.a=0
this.hF(new P.jr(z,this),!0,new P.js(z,y),y.geG())
return y}},
jr:{"^":"n;a,b",
$1:function(a){H.z(a,H.ay(this.b,"de",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ay(this.b,"de",0)]}}},
js:{"^":"n:0;a,b",
$0:function(){this.b.cL(this.a.a)}},
eH:{"^":"b;$ti"},
jq:{"^":"b;"},
bk:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
m_:{"^":"b;",$isp_:1},
ml:{"^":"n:0;a,b",
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
ld:{"^":"m_;",
i8:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fJ(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bw(x)
P.cD(null,null,this,z,H.h(y,"$isaw"))}},
i9:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fK(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bw(x)
P.cD(null,null,this,z,H.h(y,"$isaw"))}},
he:function(a,b){return new P.lf(this,H.f(a,{func:1,ret:b}),b)},
bZ:function(a){return new P.le(this,H.f(a,{func:1,ret:-1}))},
dd:function(a,b){return new P.lg(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
e3:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fJ(null,null,this,a,b)},
cu:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fK(null,null,this,a,b,c,d)},
i7:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mm(null,null,this,a,b,c,d,e,f)},
i0:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lf:{"^":"n;a,b,c",
$0:function(){return this.a.e3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
le:{"^":"n:3;a,b",
$0:function(){return this.a.i8(this.b)}},
lg:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i9(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ib:function(a,b,c,d,e){return new H.aX(0,0,[d,e])},
ic:function(a,b,c){H.bY(a)
return H.w(H.mF(a,new H.aX(0,0,[b,c])),"$isel",[b,c],"$asel")},
em:function(a,b){return new H.aX(0,0,[a,b])},
ig:function(a,b,c,d){return new P.l_(0,0,[d])},
hZ:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bX()
C.a.h(y,a)
try{P.mi(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eI(b,H.h1(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cY:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bX()
C.a.h(y,a)
try{x=z
x.a=P.eI(x.gaE(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bX(),z<y.length;++z)if(a===y[z])return!0
return!1},
mi:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
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
id:function(a,b,c){var z=P.ib(null,null,null,b,c)
a.K(0,new P.ie(z,b,c))
return z},
d3:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bX(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dM(a,new P.im(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bX()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
l_:{"^":"kV;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fp(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.cJ(y,b)}else return this.ez(0,b)},
ez:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.cM(b)
x=z[y]
if(x==null)z[y]=[this.bI(b)]
else{if(this.cS(x,b)>=0)return!1
x.push(this.bI(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cY(this.c,b)
else return this.fl(0,b)},
fl:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eO(z,b)
x=this.cS(y,b)
if(x<0)return!1
this.d3(y.splice(x,1)[0])
return!0},
cJ:function(a,b){H.z(b,H.y(this,0))
if(H.h(a[b],"$isdq")!=null)return!1
a[b]=this.bI(b)
return!0},
cY:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdq")
if(z==null)return!1
this.d3(z)
delete a[b]
return!0},
cK:function(){this.r=this.r+1&67108863},
bI:function(a){var z,y
z=new P.dq(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cK()
return z},
d3:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cK()},
cM:function(a){return J.b2(a)&0x3ffffff},
eO:function(a,b){return a[this.cM(b)]},
cS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"b;a,0b,0c"},
l0:{"^":"b;a,b,0c,0d,$ti",
gR:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fp:function(a,b,c){var z=new P.l0(a,b,[c])
z.c=a.e
return z}}},
kV:{"^":"jb;"},
ie:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cq:{"^":"l1;",$isj:1,$isc:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.en(a,this.gl(a),0,[H.b_(this,a,"x",0)])},
J:function(a,b){return this.j(a,b)},
ih:function(a,b){var z,y,x
z=H.e([],[H.b_(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ig:function(a){return this.ih(a,!0)},
ay:function(a,b,c,d){var z
H.z(d,H.b_(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cY(a,"[","]")}},
il:{"^":"ai;"},
im:{"^":"n:6;a,b",
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
H.f(b,{func:1,ret:-1,args:[H.b_(this,a,"ai",0),H.b_(this,a,"ai",1)]})
for(z=J.by(this.gan(a));z.G();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.at(this.gan(a))},
i:function(a){return P.d3(a)},
$isH:1},
lD:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
io:{"^":"b;$ti",
j:function(a,b){return J.dL(this.a,b)},
m:function(a,b,c){J.cK(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
K:function(a,b){J.dM(this.a,H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.ab(this.a)},
$isH:1},
f8:{"^":"lE;a,$ti"},
jd:{"^":"b;$ti",
i:function(a){return P.cY(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.t(P.a_(b,0,null,"index",null))
for(z=P.fp(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
jb:{"^":"jd;"},
l1:{"^":"b+x;"},
lE:{"^":"io+lD;$ti"}}],["","",,P,{"^":"",hm:{"^":"c_;a",
hL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$fk()
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
if(q<=d){p=H.cH(C.b.H(b,s))
o=H.cH(C.b.H(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.cs(r)
x=s
continue}}throw H.a(P.X("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dR(b,u,d,v,t,k)
else{j=C.d.b9(k-1,4)+1
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aO(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dR(b,u,d,v,t,i)
else{j=C.d.b9(i,4)
if(j===1)throw H.a(P.X("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aO(b,d,d,j===2?"==":"=")}return b},
$asc_:function(){return[[P.c,P.m],P.i]},
p:{
dR:function(a,b,c,d,e,f){if(C.d.b9(f,4)!==0)throw H.a(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.X("Invalid base64 padding, more than two '=' characters",a,b))}}},hn:{"^":"bA;a",
$asbA:function(){return[[P.c,P.m],P.i]}},c_:{"^":"b;$ti"},bA:{"^":"jq;$ti"},hM:{"^":"c_;",
$asc_:function(){return[P.i,[P.c,P.m]]}},k5:{"^":"hM;a",
ghr:function(){return C.F}},kc:{"^":"bA;",
aW:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lZ(0,0,x)
if(w.eM(a,b,z)!==z)w.d5(J.he(a,z-1),0)
return C.V.bE(x,0,w.b)},
c4:function(a){return this.aW(a,0,null)},
$asbA:function(){return[P.i,[P.c,P.m]]}},lZ:{"^":"b;a,b,c",
d5:function(a,b){var z,y,x,w,v
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
eM:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d5(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k6:{"^":"bA;a",
aW:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.k7(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aL(b,c,y,null,null,null)
x=new P.an("")
w=new P.lW(!1,x,!0,0,0,0)
w.aW(a,b,y)
w.ht(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c4:function(a){return this.aW(a,0,null)},
$asbA:function(){return[[P.c,P.m],P.i]},
p:{
k7:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k8(!1,b,c,d)
return},
k8:function(a,b,c,d){var z,y,x
z=$.$get$fe()
if(z==null)return
y=0===c
if(y&&!0)return P.dm(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.dm(z,b)
return P.dm(z,b.subarray(c,d))},
dm:function(a,b){if(P.ka(b))return
return P.kb(a,b)},
kb:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
ka:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k9:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lW:{"^":"b;a,b,c,d,e,f",
ht:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.X("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lY(c)
v=new P.lX(this,b,c,a)
$label0$0:for(u=J.aF(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bB()
if((r&192)!==128){q=P.X("Bad UTF-8 encoding 0x"+C.d.b4(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.X("Overlong encoding of 0x"+C.d.b4(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.X("Character outside valid Unicode range: 0x"+C.d.b4(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cs(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cA()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.X("Negative UTF-8 code unit: -0x"+C.d.b4(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.X("Bad UTF-8 encoding 0x"+C.d.b4(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lY:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aF(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bB()
if((w&127)!==w)return x-b}return z-b}},lX:{"^":"n:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c9(this.d,a,b)}}}],["","",,P,{"^":"",
cf:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.i]})
z=H.iU(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.X(a,null,null))},
hO:function(a){var z=J.I(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
ih:function(a,b,c,d){var z,y
H.z(b,d)
z=J.i0(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ii:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.z(x.gR(x),c))
if(b)return y
return H.w(J.bE(y),"$isc",z,"$asc")},
c9:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.eA(z?C.a.bE(a,b,c):a)}if(!!J.I(a).$isd8)return H.iW(a,b,P.aL(b,c,a.length,null,null,null))
return P.jt(a,b,c)},
jt:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.a_(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a_(c,b,J.at(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a_(c,b,x,null,null))
w.push(y.gR(y))}return H.eA(w)},
j2:function(a,b,c){return new H.i2(a,H.i3(a,!1,!0,!1))},
fa:function(){var z=H.iM()
if(z!=null)return P.k_(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hO(a)},
v:function(a){return new P.fl(a)},
ij:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dI:function(a){H.n1(a)},
k_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f9(b>0||c<c?C.b.v(a,b,c):a,5,null).ge7()
else if(y===32)return P.f9(C.b.v(a,z,c),0,null).ge7()}x=new Array(8)
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
if(P.fL(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cz()
if(v>=b)if(P.fL(a,b,v,20,w)===20)w[7]=v
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aO(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.aO(a,t,s,"")
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
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.aO(a,t,s,"")
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
q-=b}return new P.li(a,v,u,t,s,r,q,o)}return P.lF(a,b,c,v,u,t,s,r,q,o)},
fc:function(a,b){var z=P.i
return C.a.hu(H.e(a.split("&"),[z]),P.em(z,z),new P.k2(b),[P.H,P.i,P.i])},
jY:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jZ(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cf(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cA()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cf(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cA()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k0(a)
y=new P.k1(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jY(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aH(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mc:function(){var z,y,x,w,v
z=P.ij(22,new P.me(),!0,P.O)
y=new P.md(z)
x=new P.mf()
w=new P.mg()
v=H.h(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isO"),"]",5)
v=H.h(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isO"),"az",21)
v=H.h(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fL:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fM()
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
aA:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.d.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hC(H.iT(this))
y=P.c1(H.iR(this))
x=P.c1(H.iN(this))
w=P.c1(H.iO(this))
v=P.c1(H.iQ(this))
u=P.c1(H.iS(this))
t=P.hD(H.iP(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hC:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"W;"},
"+double":0,
b6:{"^":"b;a",
k:function(a,b){return new P.b6(C.d.ac(this.a*b))},
O:function(a,b){return C.d.O(this.a,H.h(b,"$isb6").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hJ()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.hI().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e9:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hI:{"^":"n:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hJ:{"^":"n:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
ew:{"^":"a5;",
i:function(a){return"Throw of null."}},
aG:{"^":"a5;a,b,c,d",
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbL()+y+x
if(!this.a)return w
v=this.gbK()
u=P.cl(this.b)
return w+v+": "+H.l(u)},
p:{
bZ:function(a){return new P.aG(!1,null,null,a)},
ch:function(a,b,c){return new P.aG(!0,a,b,c)},
dO:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
ct:{"^":"aG;e,f,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cu:function(a,b,c){return new P.ct(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.ct(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a_(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a_(b,a,c,"end",f))
return b}return c}}},
hX:{"^":"aG;e,l:f>,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){if(J.ha(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hX(b,z,!0,a,c,"Index out of range")}}},
jW:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jW(a)}}},
jT:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ca:function(a){return new P.jT(a)}}},
jn:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hw:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cl(z))+"."},
p:{
b4:function(a){return new P.hw(a)}}},
iI:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eF:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hB:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fl:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hU:{"^":"b;a,b,c",
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
X:function(a,b,c){return new P.hU(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dO("index"))
if(b<0)H.t(P.a_(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hZ(this,"(",")")}},
cZ:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bL(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
i:{"^":"b;",$isex:1},
"+String":0,
an:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoK:1,
p:{
eI:function(a,b,c){var z=J.by(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gR(z))
while(z.G())}else{a+=H.l(z.gR(z))
for(;z.G();)a=a+c+H.l(z.gR(z))}return a}}},
k2:{"^":"n:48;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isH",[z,z],"$asH")
H.M(b)
y=J.aF(b).dM(b,"=")
if(y===-1){if(b!=="")J.cK(a,P.dt(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aA(b,y+1)
z=this.a
J.cK(a,P.dt(x,0,x.length,z,!0),P.dt(w,0,w.length,z,!0))}return a}},
jZ:{"^":"n:38;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv4 address, "+a,this.a,b))}},
k0:{"^":"n:28;a",
$2:function(a,b){throw H.a(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k1:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cf(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cA:{"^":"b;bD:a<,b,c,d,dZ:e>,f,r,0x,0y,0z,0Q,0ch",
ge8:function(){return this.b},
gci:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.v(z,1,z.length-1)
return z},
gby:function(a){var z=this.d
if(z==null)return P.fB(this.a)
return z},
gcp:function(a){var z=this.f
return z==null?"":z},
gdH:function(){var z=this.r
return z==null?"":z},
ct:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
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
g=P.ds(g,0,0,h)
return new P.cA(i,j,c,f,d,g,this.r)},
e2:function(a,b){return this.ct(a,null,null,null,null,null,null,b,null,null)},
gcq:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f8(P.fc(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdI:function(){return this.c!=null},
gdL:function(){return this.f!=null},
gdJ:function(){return this.r!=null},
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
z=J.I(b)
if(!!z.$isdl){y=this.a
x=b.gbD()
if(y==null?x==null:y===x)if(this.c!=null===b.gdI()){y=this.b
x=b.ge8()
if(y==null?x==null:y===x){y=this.gci(this)
x=z.gci(b)
if(y==null?x==null:y===x){y=this.gby(this)
x=z.gby(b)
if(y==null?x==null:y===x)if(this.e===z.gdZ(b)){y=this.f
x=y==null
if(!x===b.gdL()){if(x)y=""
if(y===z.gcp(b)){z=this.r
y=z==null
if(!y===b.gdJ()){if(y)z=""
z=z===b.gdH()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdl:1,
p:{
cB:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fG().b
if(typeof b!=="string")H.t(H.ae(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ay(c,"c_",0))
y=c.ghr().c4(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cs(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lQ(a,b,d)
else{if(d===b)P.bS(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lR(a,z,e-1):""
x=P.lK(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lN(P.cf(C.b.v(a,w,g),new P.lG(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lL(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.ds(a,h+1,i,null):null
return new P.cA(j,y,x,v,u,t,i<c?P.lJ(a,i+1,c):null)},
fB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bS:function(a,b,c){throw H.a(P.X(c,a,b))},
lN:function(a,b){if(a!=null&&a===P.fB(b))return
return a},
lK:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.b.V(a,z)!==93)P.bS(a,b,"Missing end `]` to match `[` in host")
P.fb(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.fb(a,b,c)
return"["+a+"]"}return P.lT(a,b,c)},
lT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fI(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bS(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fC(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lQ:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fE(C.b.H(a,b)))P.bS(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bS(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lH(y?a.toLowerCase():a)},
lH:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lR:function(a,b,c){return P.bT(a,b,c,C.R)},
lL:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bT(a,b,c,C.y):C.t.j1(d,new P.lM(),P.i).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.lS(w,e,f)},
lS:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.lU(a,!z||c)
return P.lV(a)},
ds:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.bZ("Both query and queryParameters specified"))
return P.bT(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.lO(new P.lP(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lJ:function(a,b,c){return P.bT(a,b,c,C.n)},
fI:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cH(y)
v=H.cH(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aH(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cs(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fC:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.d.fE(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c9(y,0,null)},
bT:function(a,b,c,d){var z=P.fH(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fH:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
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
else{if(v===37){t=P.fI(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bS(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fC(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fF:function(a){if(C.b.a7(a,"."))return!0
return C.b.dM(a,"/.")!==-1},
lV:function(a){var z,y,x,w,v,u,t
if(!P.fF(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
lU:function(a,b){var z,y,x,w,v,u
if(!P.fF(a))return!b?P.fD(a):a
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
C.a.m(z,0,P.fD(z[0]))}return C.a.E(z,"/")},
fD:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fE(J.hb(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lI:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bZ("Invalid URL encoding"))}}return z},
dt:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dD(a)
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
if(w>127)throw H.a(P.bZ("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bZ("Truncated URI"))
C.a.h(u,P.lI(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.k6(!1).c4(u)},
fE:function(a){var z=a|32
return 97<=z&&z<=122}}},
lG:{"^":"n:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.X("Invalid port",this.a,z+1))}},
lM:{"^":"n:46;",
$1:function(a){return P.cB(C.T,a,C.k,!1)}},
lP:{"^":"n:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cB(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cB(C.p,b,C.k,!0))}}},
lO:{"^":"n:50;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.by(H.h1(b,"$isj")),y=this.a;z.G();)y.$2(a,H.M(z.gR(z)))}},
jX:{"^":"b;a,b,c",
ge7:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dN(y,"?",z)
w=y.length
if(x>=0){v=P.bT(y,x+1,w,C.n)
w=x}else v=null
z=new P.kB(this,"data",null,null,null,P.bT(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.X("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.X("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.X("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hL(0,a,s,y)
else{r=P.fH(a,s,y,C.n,!0)
if(r!=null)a=C.b.aO(a,s,y,r)}return new P.jX(a,z,c)}}},
me:{"^":"n:44;",
$1:function(a){return new Uint8Array(96)}},
md:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hf(z,0,96,b)
return z}},
mf:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mg:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
li:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdI:function(){return this.c>0},
gdK:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdL:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
gdJ:function(){return this.r<this.a.length},
gcU:function(){return this.b===4&&C.b.a7(this.a,"http")},
gcV:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbD:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcU()){this.x="http"
z="http"}else if(this.gcV()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
ge8:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gci:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gby:function(a){var z
if(this.gdK()){z=this.d
if(typeof z!=="number")return z.D()
return P.cf(C.b.v(this.a,z+1,this.e),null,null)}if(this.gcU())return 80
if(this.gcV())return 443
return 0},
gdZ:function(a){return C.b.v(this.a,this.e,this.f)},
gcp:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.v(this.a,z+1,y):""},
gdH:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aA(y,z+1):""},
gcq:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.U
z=P.i
return new P.f8(P.fc(this.gcp(this),C.k),[z,z])},
ct:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
i=this.gbD()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdK()?this.gby(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aA(y,x+1)
return new P.cA(i,j,c,f,d,g,b)},
e2:function(a,b){return this.ct(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdl)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdl:1},
kB:{"^":"cA;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cS:function(a,b){var z=document.createElement("canvas")
return z},
hL:function(a){H.h(a,"$isa7")
return"wheel"},
hY:function(a){var z,y,x
y=document.createElement("input")
z=H.h(y,"$isee")
try{J.hh(z,a)}catch(x){H.as(x)}return z},
cz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fo:function(a,b,c,d){var z,y
z=W.cz(W.cz(W.cz(W.cz(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fP:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dd(a,b)},
a8:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nd:{"^":"dc;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
ne:{"^":"q;0l:length=","%":"AccessibleNodeList"},
nf:{"^":"a8;0a0:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ng:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cO:{"^":"q;",$iscO:1,"%":";Blob"},
nm:{"^":"a8;0a0:type}","%":"HTMLButtonElement"},
cR:{"^":"a8;",
bC:function(a,b,c){if(c!=null)return a.getContext(b,P.ms(c,null))
return a.getContext(b)},
ec:function(a,b){return this.bC(a,b,null)},
$iscR:1,
"%":"HTMLCanvasElement"},
dY:{"^":"q;",$isdY:1,"%":"CanvasRenderingContext2D"},
no:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nq:{"^":"ck;0l:length=","%":"CSSPerspective"},
nr:{"^":"cU;0q:x=,0t:y=","%":"CSSPositionValue"},
ns:{"^":"ck;0q:x=,0t:y=","%":"CSSRotation"},
b5:{"^":"q;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nt:{"^":"ck;0q:x=,0t:y=","%":"CSSScale"},
nu:{"^":"kA;0l:length=",
ed:function(a,b){var z=a.getPropertyValue(this.eD(a,b))
return z==null?"":z},
eD:function(a,b){var z,y
z=$.$get$e2()
y=z[b]
if(typeof y==="string")return y
y=this.fF(a,b)
z[b]=y
return y},
fF:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hE()+b
if(z in a)return z
return b},
gc_:function(a){return a.bottom},
gam:function(a){return a.height},
gaL:function(a){return a.left},
gbA:function(a){return a.right},
gb6:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hA:{"^":"b;",
gaL:function(a){return this.ed(a,"left")}},
cU:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ck:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nv:{"^":"cU;0l:length=","%":"CSSTransformValue"},
nw:{"^":"ck;0q:x=,0t:y=","%":"CSSTranslation"},
nx:{"^":"cU;0l:length=","%":"CSSUnparsedValue"},
ny:{"^":"q;0l:length=","%":"DataTransferItemList"},
nz:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
nA:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nB:{"^":"hG;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hG:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nC:{"^":"kD;",
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
hH:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaq(a))+" x "+H.l(this.gam(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaL(b)&&a.top===z.gb6(b)&&this.gaq(a)===z.gaq(b)&&this.gam(a)===z.gam(b)},
gT:function(a){return W.fo(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gc_:function(a){return a.bottom},
gam:function(a){return a.height},
gaL:function(a){return a.left},
gbA:function(a){return a.right},
gb6:function(a){return a.top},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
nD:{"^":"kF;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.M(c)
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
nE:{"^":"q;0l:length=","%":"DOMTokenList"},
kz:{"^":"cq;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.h(z[b],"$isa2")},
m:function(a,b,c){var z
H.D(b)
H.h(c,"$isa2")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.ig(this)
return new J.au(z,z.length,0,[H.y(z,0)])},
ay:function(a,b,c,d){throw H.a(P.ca(null))},
$asx:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
a2:{"^":"J;",
gc3:function(a){return new W.kz(a,a.children)},
gbi:function(a){return P.iZ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa2:1,
"%":";Element"},
nF:{"^":"a8;0a0:type}","%":"HTMLEmbedElement"},
ac:{"^":"q;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"q;",
d7:["eg",function(a,b,c,d){H.f(c,{func:1,args:[W.ac]})
if(c!=null)this.eA(a,b,c,!1)}],
eA:function(a,b,c,d){return a.addEventListener(b,H.bu(H.f(c,{func:1,args:[W.ac]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fu|fv|fx|fy"},
aW:{"^":"cO;",$isaW:1,"%":"File"},
ea:{"^":"kK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isaW")
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
$isea:1,
$asC:function(){return[W.aW]},
"%":"FileList"},
nY:{"^":"a7;0l:length=","%":"FileWriter"},
o0:{"^":"a8;0l:length=","%":"HTMLFormElement"},
b8:{"^":"q;",$isb8:1,"%":"Gamepad"},
o1:{"^":"dc;0q:x=,0t:y=","%":"Gyroscope"},
o2:{"^":"q;0l:length=","%":"History"},
o3:{"^":"kX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c2:{"^":"q;0dg:data=",$isc2:1,"%":"ImageData"},
ed:{"^":"a8;",$ised:1,"%":"HTMLImageElement"},
ee:{"^":"a8;0a0:type}",$isee:1,"%":"HTMLInputElement"},
bF:{"^":"di;",$isbF:1,"%":"KeyboardEvent"},
o8:{"^":"a8;0a0:type}","%":"HTMLLinkElement"},
o9:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
oa:{"^":"dc;0q:x=,0t:y=","%":"Magnetometer"},
oc:{"^":"q;0l:length=","%":"MediaList"},
od:{"^":"a7;",
d7:function(a,b,c,d){H.f(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.eg(a,b,c,!1)},
"%":"MessagePort"},
oe:{"^":"l2;",
j:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.iA(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iA:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
of:{"^":"l3;",
j:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.iB(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iB:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"q;",$isbb:1,"%":"MimeType"},
og:{"^":"l5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbb")
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
aB:{"^":"di;",$isaB:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ky:{"^":"cq;a",
m:function(a,b,c){var z,y
H.D(b)
H.h(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.eb(z,z.length,-1,[H.b_(C.W,z,"C",0)])},
ay:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.J]},
$asj:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a7;",
i4:function(a,b){var z,y
try{z=a.parentNode
J.hc(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eh(a):z},
fo:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iF:{"^":"l7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
oo:{"^":"a8;0a0:type}","%":"HTMLOListElement"},
op:{"^":"a8;0a0:type}","%":"HTMLObjectElement"},
bc:{"^":"q;0l:length=",$isbc:1,"%":"Plugin"},
ot:{"^":"lb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbc")
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
oy:{"^":"q;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oz:{"^":"lh;",
j:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.j8(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j8:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oB:{"^":"a8;0a0:type}","%":"HTMLScriptElement"},
oD:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
dc:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
be:{"^":"a7;",$isbe:1,"%":"SourceBuffer"},
oE:{"^":"fv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbe")
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
oF:{"^":"a8;0a0:type}","%":"HTMLSourceElement"},
bf:{"^":"q;",$isbf:1,"%":"SpeechGrammar"},
oG:{"^":"lk;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbf")
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
bg:{"^":"q;0l:length=",$isbg:1,"%":"SpeechRecognitionResult"},
oI:{"^":"ln;",
j:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new W.jp(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
jp:{"^":"n:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oL:{"^":"a8;0a0:type}","%":"HTMLStyleElement"},
bh:{"^":"q;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
df:{"^":"a8;",$isdf:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"a7;",$isbi:1,"%":"TextTrack"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrackCue|VTTCue"},
oQ:{"^":"lu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbj")
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
oR:{"^":"fy;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbi")
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
oS:{"^":"q;0l:length=","%":"TimeRanges"},
bl:{"^":"q;",$isbl:1,"%":"Touch"},
bm:{"^":"di;",$isbm:1,"%":"TouchEvent"},
oT:{"^":"lA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbl")
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
oU:{"^":"q;0l:length=","%":"TrackDefaultList"},
di:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oW:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oY:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
oZ:{"^":"a7;0l:length=","%":"VideoTrackList"},
bP:{"^":"aB;",
ghn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbP:1,
"%":"WheelEvent"},
kr:{"^":"a7;",
fp:function(a,b){return a.requestAnimationFrame(H.bu(H.f(b,{func:1,ret:-1,args:[P.W]}),1))},
eL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
p3:{"^":"m1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isb5")
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
p4:{"^":"hH;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.aV(b)
return a.left===z.gaL(b)&&a.top===z.gb6(b)&&a.width===z.gaq(b)&&a.height===z.gam(b)},
gT:function(a){return W.fo(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gaq:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
p6:{"^":"m3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isb8")
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
p7:{"^":"m5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
p8:{"^":"m7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbg")
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
p9:{"^":"m9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbh")
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
kG:{"^":"de;a,b,c,$ti",
hF:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
p5:{"^":"kG;a,b,c,$ti"},
kH:{"^":"eH;a,b,c,d,e,$ti",
fJ:function(){var z=this.d
if(z!=null&&this.a<=0)J.hd(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fP(new W.kI(c),W.ac)
z=new W.kH(0,a,b,z,!1,[e])
z.fJ()
return z}}},
kI:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isac"))}},
C:{"^":"b;$ti",
ga_:function(a){return new W.eb(a,this.gl(a),-1,[H.b_(this,a,"C",0)])},
ay:function(a,b,c,d){H.z(d,H.b_(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
eb:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dL(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kA:{"^":"q+hA;"},
kC:{"^":"q+x;"},
kD:{"^":"kC+C;"},
kE:{"^":"q+x;"},
kF:{"^":"kE+C;"},
kJ:{"^":"q+x;"},
kK:{"^":"kJ+C;"},
kW:{"^":"q+x;"},
kX:{"^":"kW+C;"},
l2:{"^":"q+ai;"},
l3:{"^":"q+ai;"},
l4:{"^":"q+x;"},
l5:{"^":"l4+C;"},
l6:{"^":"q+x;"},
l7:{"^":"l6+C;"},
la:{"^":"q+x;"},
lb:{"^":"la+C;"},
lh:{"^":"q+ai;"},
fu:{"^":"a7+x;"},
fv:{"^":"fu+C;"},
lj:{"^":"q+x;"},
lk:{"^":"lj+C;"},
ln:{"^":"q+ai;"},
lt:{"^":"q+x;"},
lu:{"^":"lt+C;"},
fx:{"^":"a7+x;"},
fy:{"^":"fx+C;"},
lz:{"^":"q+x;"},
lA:{"^":"lz+C;"},
m0:{"^":"q+x;"},
m1:{"^":"m0+C;"},
m2:{"^":"q+x;"},
m3:{"^":"m2+C;"},
m4:{"^":"q+x;"},
m5:{"^":"m4+C;"},
m6:{"^":"q+x;"},
m7:{"^":"m6+C;"},
m8:{"^":"q+x;"},
m9:{"^":"m8+C;"}}],["","",,P,{"^":"",
mv:function(a){var z,y
z=J.I(a)
if(!!z.$isc2){y=z.gdg(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fA(a.data,a.height,a.width)},
mu:function(a){if(a instanceof P.fA)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.em(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
ms:function(a,b){var z={}
a.K(0,new P.mt(z))
return z},
e8:function(){var z=$.e7
if(z==null){z=J.cL(window.navigator.userAgent,"Opera",0)
$.e7=z}return z},
hE:function(){var z,y
z=$.e4
if(z!=null)return z
y=$.e5
if(y==null){y=J.cL(window.navigator.userAgent,"Firefox",0)
$.e5=y}if(y)z="-moz-"
else{y=$.e6
if(y==null){y=!P.e8()&&J.cL(window.navigator.userAgent,"Trident/",0)
$.e6=y}if(y)z="-ms-"
else z=P.e8()?"-o-":"-webkit-"}$.e4=z
return z},
lq:{"^":"b;",
dF:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cw:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isj1)throw H.a(P.ca("structured clone of RegExp"))
if(!!y.$isaW)return a
if(!!y.$iscO)return a
if(!!y.$isea)return a
if(!!y.$isc2)return a
if(!!y.$iseu||!!y.$isd7)return a
if(!!y.$isH){x=this.dF(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.K(a,new P.ls(z,this))
return z.a}if(!!y.$isc){x=this.dF(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hk(a,x)}throw H.a(P.ca("structured clone of other type"))},
hk:function(a,b){var z,y,x,w
z=J.aF(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cw(z.j(a,w)))
return x}},
ls:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cw(b)}},
fA:{"^":"b;dg:a>,b,c",$isc2:1},
mt:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lr:{"^":"lq;a,b"},
hR:{"^":"cq;a,b",
gbd:function(){var z,y,x
z=this.b
y=H.ay(z,"x",0)
x=W.a2
return new H.ip(new H.kp(z,H.f(new P.hS(),{func:1,ret:P.ah,args:[y]}),[y]),H.f(new P.hT(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.h(c,"$isa2")
z=this.gbd()
J.hg(z.b.$1(J.cM(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ay:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gbd().a)},
j:function(a,b){var z=this.gbd()
return z.b.$1(J.cM(z.a,b))},
ga_:function(a){var z=P.ii(this.gbd(),!1,W.a2)
return new J.au(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a2]},
$asj:function(){return[W.a2]},
$asc:function(){return[W.a2]}},
hS:{"^":"n:30;",
$1:function(a){return!!J.I(H.h(a,"$isJ")).$isa2}},
hT:{"^":"n:27;",
$1:function(a){return H.k(H.h(a,"$isJ"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fn:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bJ:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bt(b,"$isbJ",[P.W],null)
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gT:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.fn(P.bR(P.bR(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bJ(z,H.z(x*b,y),this.$ti)}},
lc:{"^":"b;$ti",
gbA:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.y(this,0))},
gc_:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bt(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gaL(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb6(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbA(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gc_(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.fn(P.bR(P.bR(P.bR(P.bR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
de:function(a,b){var z,y
H.w(b,"$isbJ",[P.W],"$asbJ")
z=b.a
y=this.a
if(typeof z!=="number")return z.cz()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cz()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"lc;aL:a>,b6:b>,aq:c>,am:d>,$ti",p:{
iZ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nG:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nH:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nI:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nJ:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},nK:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nL:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nM:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nN:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},nO:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nP:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},nQ:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},nR:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nS:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nT:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nU:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nV:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nW:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},nX:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nZ:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},o_:{"^":"bD;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hW:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},o4:{"^":"bD;0q:x=,0t:y=","%":"SVGImageElement"},bG:{"^":"q;",$isbG:1,"%":"SVGLength"},o7:{"^":"kZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.h(c,"$isbG")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bG]},
$isj:1,
$asj:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asC:function(){return[P.bG]},
"%":"SVGLengthList"},ob:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bI:{"^":"q;",$isbI:1,"%":"SVGNumber"},on:{"^":"l9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.h(c,"$isbI")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bI]},
$isj:1,
$asj:function(){return[P.bI]},
$isc:1,
$asc:function(){return[P.bI]},
$asC:function(){return[P.bI]},
"%":"SVGNumberList"},os:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},ou:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},ov:{"^":"q;0l:length=","%":"SVGPointList"},ow:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},ox:{"^":"hW;0q:x=,0t:y=","%":"SVGRectElement"},oC:{"^":"U;0a0:type}","%":"SVGScriptElement"},oJ:{"^":"lp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},oM:{"^":"U;0a0:type}","%":"SVGStyleElement"},U:{"^":"a2;",
gc3:function(a){return new P.hR(a,new W.ky(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oN:{"^":"bD;0q:x=,0t:y=","%":"SVGSVGElement"},ju:{"^":"bD;","%":"SVGTextPathElement;SVGTextContentElement"},oP:{"^":"ju;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bM:{"^":"q;",$isbM:1,"%":"SVGTransform"},oV:{"^":"lC;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.h(c,"$isbM")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bM]},
$isj:1,
$asj:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asC:function(){return[P.bM]},
"%":"SVGTransformList"},oX:{"^":"bD;0q:x=,0t:y=","%":"SVGUseElement"},kY:{"^":"q+x;"},kZ:{"^":"kY+C;"},l8:{"^":"q+x;"},l9:{"^":"l8+C;"},lo:{"^":"q+x;"},lp:{"^":"lo+C;"},lB:{"^":"q+x;"},lC:{"^":"lB+C;"}}],["","",,P,{"^":"",O:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjI:1}}],["","",,P,{"^":"",nh:{"^":"q;0l:length=","%":"AudioBuffer"},dQ:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},ni:{"^":"kx;",
j:function(a,b){return P.aU(a.get(H.M(b)))},
K:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gan:function(a){var z=H.e([],[P.i])
this.K(a,new P.hk(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},hk:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hl:{"^":"dQ;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nj:{"^":"a7;0l:length=","%":"AudioTrackList"},ho:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nk:{"^":"dQ;0a0:type}","%":"BiquadFilterNode"},oq:{"^":"ho;0l:length=","%":"OfflineAudioContext"},or:{"^":"hl;0a0:type}","%":"Oscillator|OscillatorNode"},kx:{"^":"q+ai;"}}],["","",,P,{"^":"",db:{"^":"q;",
ib:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc2)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mu(g))
return}if(!!z.$ised)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bZ("Incorrect number or type of arguments"))},
ia:function(a,b,c,d,e,f,g){return this.ib(a,b,c,d,e,f,g,null,null,null)},
$isdb:1,
"%":"WebGLRenderingContext"},jR:{"^":"q;",$isjR:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oH:{"^":"lm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.h(c,"$isH")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asC:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},ll:{"^":"q+x;"},lm:{"^":"ll+C;"}}],["","",,O,{"^":"",aH:{"^":"b;0a,0b,0c,0d,$ti",
bG:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cB:function(a,b,c){var z=H.ay(this,"aH",0)
H.f(b,{func:1,ret:P.ah,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
ba:function(a,b){return this.cB(a,null,b)},
fe:function(a){var z
H.w(a,"$isj",[H.ay(this,"aH",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eV:function(a,b){var z
H.w(b,"$isj",[H.ay(this,"aH",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.au(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"aH",0)
H.z(b,z)
z=[z]
if(this.fe(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eV(x,H.e([b],z))}},
$isj:1,
p:{
cT:function(a){var z=new O.aH([a])
z.bG(a)
return z}}},d5:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
er:function(a){var z=this.b
if(!(z==null))z.I(a)},
aB:function(){return this.er(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c7()},
e0:function(a){var z=this.a
if(a==null)C.a.h(z,V.c7())
else C.a.h(z,a)
this.aB()},
cn:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cN:{"^":"b;"},aI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cI:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
if(y.f==null)y.cI()}},
sa6:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.f(this.gdX(),{func:1,ret:-1,args:[D.u]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.f(this.gdX(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.L("shape",z,this.c,this,[F.eE])
w.b=!0
this.a5(w)}},
sb3:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.gdY(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gdY(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}this.cI()
w=new D.L("technique",x,this.f,this,[O.cv])
w.b=!0
this.a5(w)}},
saM:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.f(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.M(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.f(this.gdW(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.L("mover",z,a,this,[U.aj])
w.b=!0
this.a5(w)}},
ap:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aQ(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.L("matrix",x,y,this,[V.av])
w.b=!0
this.a5(w)}z=this.f
if(z!=null)z.ap(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ap(0,b)},
aN:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.k(0,z.gW(z)))
z.aB()
a.e1(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.i3(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aN(a)
a.e_()
a.dx.cn()},
gB:function(){var z=this.z
if(z==null){z=D.R()
this.z=z}return z},
a5:function(a){var z=this.z
if(!(z==null))z.I(a)},
X:function(){return this.a5(null)},
hQ:[function(a){H.h(a,"$isu")
this.e=null
this.a5(a)},function(){return this.hQ(null)},"j7","$1","$0","gdX",0,2,1],
hR:[function(a){this.a5(H.h(a,"$isu"))},function(){return this.hR(null)},"j8","$1","$0","gdY",0,2,1],
hP:[function(a){this.a5(H.h(a,"$isu"))},function(){return this.hP(null)},"j6","$1","$0","gdW",0,2,1],
hN:[function(a){this.a5(H.h(a,"$isu"))},function(){return this.hN(null)},"j4","$1","$0","gdV",0,2,1],
j3:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdV(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ghM",8,0,8],
j5:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aI],"$asj")
for(z=b.length,y=this.gdV(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.M(t.a,y)}}this.X()},"$2","ghO",8,0,8],
$isaK:1,
p:{
cV:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cT(E.aI)
z.y=y
y.ba(z.ghM(),z.ghO())
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
z.sb3(f)
z.saM(c)
return z}}},j3:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
en:function(a,b){var z,y,x,w,v
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
z=new O.d5()
y=[V.av]
z.a=H.e([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.f(new E.j5(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d5()
z.a=H.e([],y)
v=z.gB()
v.toString
x=H.f(new E.j6(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d5()
z.a=H.e([],y)
y=z.gB()
y.toString
w=H.f(new E.j7(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cv])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.i,A.eD])},
gi_:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.k(0,y.gW(y))
this.z=y
z=y}return z},
e1:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
e_:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j4:function(a,b){var z=new E.j3(a,b)
z.en(a,b)
return z}}},j5:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isu")
z=this.a
z.z=null
z.ch=null}},j6:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j7:{"^":"n:12;a",
$1:function(a){var z
H.h(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jz:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
eu:[function(a){var z
H.h(a,"$isu")
z=this.x
if(!(z==null))z.I(a)
this.i5()},function(){return this.eu(null)},"es","$1","$0","gcE",0,2,1],
ghw:function(){var z,y,x
z=Date.now()
y=C.d.a3(P.e9(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
cZ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.p(z)
x=C.h.cg(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cg(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
i5:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jB(this),{func:1,ret:-1,args:[P.W]})
C.B.eL(z)
C.B.fp(z,W.fP(y,P.W))}},
i2:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cZ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e9(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aB()
w=x.db
C.a.sl(w.a,0)
w.aB()
w=x.dx
C.a.sl(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aN(this.e)}}catch(v){z=H.as(v)
y=H.bw(v)
P.dI("Error: "+H.l(z))
P.dI("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jA:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscR)return E.eM(a,!0,!0,!0,!1)
y=W.cS(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc3(a).h(0,y)
w=E.eM(y,!0,!0,!0,!1)
w.a=a
return w},
eM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jz()
y=P.ic(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bC(a,"webgl",y)
x=H.h(x==null?C.l.bC(a,"experimental-webgl",y):x,"$isdb")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j4(x,a)
w=new T.jv(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k3(a)
v=new X.i5()
v.c=new X.aY(!1,!1,!1)
v.d=P.ig(null,null,null,P.m)
w.b=v
v=new X.iC(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ik(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jF(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eH,P.b]])
w.z=v
u=document
t=W.aB
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.f(w.gf1(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.f(w.gf4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.f(w.geZ(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.f(w.gf6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.f(w.gf5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.f(w.gf9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.f(w.gfb(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.f(w.gfa(),s),!1,t))
p=w.z
o=W.bP;(p&&C.a).h(p,W.a0(a,H.M(W.hL(a)),H.f(w.gfc(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.f(w.gf2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.f(w.gf3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.f(w.gfd(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.f(w.gfk(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.f(w.gfi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.f(w.gfj(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.cZ()
return z}}},jB:{"^":"n:31;a",
$1:function(a){var z
H.n0(a)
z=this.a
if(z.z){z.z=!1
z.i2()}}}}],["","",,Z,{"^":"",fi:{"^":"b;a,b",p:{
dn:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bq(c)),35044)
a.bindBuffer(b,null)
return new Z.fi(b,z)}}},dU:{"^":"cN;a,b,c,d,e",
aU:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ko:{"^":"b;a",$isnl:1},dV:{"^":"b;a,0b,c,d",
aK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aU:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aU(a)},
ij:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aN:function(a){var z,y,x,w,v
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
$isoO:1},cn:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bn:{"^":"b;a",
gcC:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bN().a)!==0)y+=3
if((z&$.$get$bO().a)!==0)y+=4
if((z&$.$get$bo().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
hc:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fh()},
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
if((y&$.$get$bN().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bO().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
p:{
aq:function(a){return new Z.bn(a)}}}}],["","",,D,{"^":"",dZ:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
I:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.hP(z))
return x!==0},
hp:function(){return this.I(null)},
i6:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.I(y)}}},
ah:function(a){return this.i6(a,!0,!1)},
p:{
R:function(){var z=new D.b7()
z.a=H.e([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},hP:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"b;a,0b"},co:{"^":"u;c,d,a,0b,$ti"},cp:{"^":"u;c,d,a,0b,$ti"},L:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dW:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nn<"}},ej:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ek:{"^":"u;c,a,0b"},i5:{"^":"b;0a,0b,0c,0d",
hX:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ek(a,this)
y.b=!0
return z.I(y)},
hT:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ek(a,this)
y.b=!0
return z.I(y)}},eo:{"^":"da;x,y,c,d,e,a,0b"},ik:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
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
u=this.a.gbj()
s=new X.c8(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cm:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.I(this.at(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ef()
if(typeof z!=="number")return z.bB()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.at(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.at(a,b))
return!0},
hY:function(a){return!1},
f8:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.eo(c,a,this.a.gbj(),b,z,this)
x.b=!0
y.I(x)
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
return z+(this.c?"Shift+":"")}},c8:{"^":"da;x,y,z,Q,ch,c,d,e,a,0b"},iC:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bM:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbj()
x=new X.c8(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cm:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.I(this.bM(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ef()
if(typeof z!=="number")return z.bB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.bM(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.bM(a,b,!1))
return!0},
hZ:function(a,b){return!1}},da:{"^":"u;"},eQ:{"^":"da;x,y,z,Q,ch,c,d,e,a,0b"},jF:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbj()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hW:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.I(this.at(a,!0))
return!0},
hU:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.I(this.at(a,!0))
return!0},
hV:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.I(this.at(a,!1))
return!0}},k3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbj:function(){var z=this.a
return V.eC(0,0,(z&&C.l).gbi(z).c,C.l.gbi(z).d)},
cP:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ej(z,new X.aY(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
bX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aY(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.V(y-w,x-v)},
aS:function(a){return new V.a6(a.movementX,a.movementY)},
bR:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.ac(u.pageX)
C.h.ac(u.pageY)
s=z.left
C.h.ac(u.pageX)
C.a.h(y,new V.V(t-s,C.h.ac(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dW(z,new X.aY(y,a.altKey,a.shiftKey))},
iG:[function(a){this.f=!0},"$1","gf4",4,0,4],
iz:[function(a){this.f=!1},"$1","geZ",4,0,4],
iD:[function(a){if(this.f)a.preventDefault()},"$1","gf1",4,0,4],
iI:[function(a){var z
H.h(a,"$isbF")
if(!this.f)return
z=this.cP(a)
if(this.b.hX(z))a.preventDefault()},"$1","gf6",4,0,20],
iH:[function(a){var z
H.h(a,"$isbF")
if(!this.f)return
z=this.cP(a)
if(this.b.hT(z))a.preventDefault()},"$1","gf5",4,0,20],
iK:[function(a){var z,y,x,w
H.h(a,"$isaB")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ar(a)
x=this.aS(a)
if(this.d.cm(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cm(y,w))a.preventDefault()},"$1","gf9",4,0,5],
iM:[function(a){var z,y,x
H.h(a,"$isaB")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gfb",4,0,5],
iF:[function(a){var z,y,x,w
H.h(a,"$isaB")
z=this.a
if(!(z&&C.l).gbi(z).de(0,new P.bJ(a.clientX,a.clientY,[P.W]))){this.aG(a)
y=this.ar(a)
if(this.x){x=this.aS(a)
if(this.d.b2(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b2(y,w))a.preventDefault()}},"$1","gf3",4,0,5],
iL:[function(a){var z,y,x
H.h(a,"$isaB")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gfa",4,0,5],
iE:[function(a){var z,y,x,w
H.h(a,"$isaB")
z=this.a
if(!(z&&C.l).gbi(z).de(0,new P.bJ(a.clientX,a.clientY,[P.W]))){this.aG(a)
y=this.ar(a)
if(this.x){x=this.aS(a)
if(this.d.b1(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b1(y,w))a.preventDefault()}},"$1","gf2",4,0,5],
iN:[function(a){var z,y
H.h(a,"$isbP")
this.aG(a)
z=new V.a6((a&&C.A).ghm(a),C.A.ghn(a)).w(0,180)
if(this.x){if(this.d.hY(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.hZ(z,y))a.preventDefault()},"$1","gfc",4,0,35],
iO:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.f8(w,v,x)}},"$1","gfd",4,0,4],
iU:[function(a){var z
H.h(a,"$isbm")
this.a.focus()
this.f=!0
this.bX(a)
z=this.bR(a)
if(this.e.hW(z))a.preventDefault()},"$1","gfk",4,0,13],
iS:[function(a){var z
H.h(a,"$isbm")
this.bX(a)
z=this.bR(a)
if(this.e.hU(z))a.preventDefault()},"$1","gfi",4,0,13],
iT:[function(a){var z
H.h(a,"$isbm")
this.bX(a)
z=this.bR(a)
if(this.e.hV(z))a.preventDefault()},"$1","gfj",4,0,13]}}],["","",,D,{"^":"",hF:{"^":"b;",$isa3:1,$isaK:1},a3:{"^":"b;",$isaK:1},i6:{"^":"aH;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.R()
this.Q=z}return z},
a4:function(a){var z=this.Q
if(!(z==null))z.I(a)},
f7:[function(a){var z
H.h(a,"$isu")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.f7(null)},"iJ","$1","$0","gcW",0,2,1],
iP:[function(a){var z,y,x
H.w(a,"$isj",[D.a3],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eH(x))return!1}return!0},"$1","gff",4,0,37],
iw:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa3")
if(t instanceof D.cw)C.a.h(this.z,t)
s=t.db
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.db=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","geW",8,0,19],
iR:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcW(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa3")
if(t instanceof D.cw)C.a.M(this.z,t)
s=t.db
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.db=s}H.f(x,w)
C.a.M(s.a,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gfh",8,0,19],
eH:function(a){var z=C.a.aV(this.z,a)
return z},
$asj:function(){return[D.a3]},
$asaH:function(){return[D.a3]}},iL:{"^":"b;",$isa3:1,$isaK:1},jm:{"^":"b;",$isa3:1,$isaK:1},jx:{"^":"b;",$isa3:1,$isaK:1},jy:{"^":"b;",$isa3:1,$isaK:1},cw:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gB:function(){var z=this.db
if(z==null){z=D.R()
this.db=z}return z},
a4:[function(a){var z
H.h(a,"$isu")
z=this.db
if(!(z==null))z.I(a)},function(){return this.a4(null)},"iA","$1","$0","gbQ",0,2,1],
$isa3:1,
$isaK:1}}],["","",,V,{"^":"",
np:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","iz",8,0,33],
nc:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.b9(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.h.e6($.o.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.r],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ab(z[u],x))}return z},
dH:function(a,b){return C.h.ie(Math.pow(b,C.I.cg(Math.log(H.mr(a))/Math.log(b))))},
a1:{"^":"b;a,b,c",
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
return new V.a1(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cr:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscr")
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
return new V.cr(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cr))return!1
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
z=[P.r]
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
return s+(z+w[2]+"]")}},
av:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
dO:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.c7()
a3=1/a2
a4=-w
a5=-i
return V.aJ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isav")
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
return V.aJ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
b7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(!(b instanceof V.av))return!1
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
dG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
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
L:function(){return this.dG("",3,0)},
C:function(a){return this.dG(a,3,0)},
p:{
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c7:function(){return V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
et:function(a,b,c){return V.aJ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
es:function(a,b,c,d){return V.aJ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
er:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aJ(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
S:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
Y:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bK:{"^":"b;q:a>,t:b>,c,d",
k:function(a,b){return new V.bK(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bK))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
eC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eB(a,b,c,d)}}},
a6:{"^":"b;a,b",
hD:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
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
w:function(a,b){var z,y
if($.o.$2(b,0))return new V.a6(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hD:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cl:function(a,b){var z,y,x
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
w:function(a,b){if($.o.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dP:function(){if(!$.o.$2(0,this.a))return!1
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hv:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bH:function(a){var z=V.nc(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
Z:function(a){var z=this.y
if(!(z==null))z.I(a)},
se9:function(a,b){},
sdR:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bH(z)}z=new D.L("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.Z(z)}},
sdT:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bH(z)}z=new D.L("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.Z(z)}},
sa1:function(a,b){var z,y
b=this.bH(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.L("location",y,b,this,[P.r])
z.b=!0
this.Z(z)}},
sdS:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.L("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.Z(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.L("velocity",x,a,this,[P.r])
z.b=!0
this.Z(z)}},
sdf:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.L("dampening",y,a,this,[P.r])
z.b=!0
this.Z(z)}},
ap:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
p:{
e0:function(){var z=new U.hv()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e1:{"^":"aj;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
aQ:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e1))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
c0:function(a){var z=new U.e1()
z.a=a
return z}}},ec:{"^":"aH;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
Z:[function(a){var z
H.h(a,"$isu")
z=this.e
if(!(z==null))z.I(a)},function(){return this.Z(null)},"aC","$1","$0","gbb",0,2,1],
ik:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbb(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gev",8,0,23],
iQ:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gbb(),w={func:1,ret:-1,args:[D.u]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.f(x,w)
C.a.M(t.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gfg",8,0,23],
aQ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aQ(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c7():x
z=this.e
if(!(z==null))z.ah(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ec))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.aj]},
$asaH:function(){return[U.aj]},
$isaj:1,
p:{
cX:function(a){var z=new U.ec()
z.bG(U.aj)
z.ba(z.gev(),z.gfg())
z.e=null
z.f=V.c7()
z.r=0
return z}}},aj:{"^":"dZ;"},k4:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.R()
this.fx=z}return z},
Z:[function(a){var z
H.h(a,"$isu")
z=this.fx
if(!(z==null))z.I(a)},function(){return this.Z(null)},"aC","$1","$0","gbb",0,2,1],
hd:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.R()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.u]}
x=H.f(this.geS(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.f(this.geT(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.R()
x.c=z}x=H.f(this.geU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.R()
x.f=z}x=H.f(this.geP(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.f(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.R()
x.b=z}x=H.f(this.gfI(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.f(this.gfH(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.R()
x.c=z}y=H.f(this.gfG(),y)
C.a.h(z.a,y)
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.a6(z,y)},
it:[function(a){a=H.k(H.h(a,"$isu"),"$isc8")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geS",4,0,2],
iu:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isu"),"$isc8")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ak(new V.a6(y.a,y.b).k(0,2).w(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).w(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).w(0,z.gao()))}this.aC()},"$1","geT",4,0,2],
iv:[function(a){var z,y,x
H.h(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sY(-y*10*z)
this.aC()}},"$1","geU",4,0,2],
ir:[function(a){if(H.k(H.h(a,"$isu"),"$iseo").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geP",4,0,2],
is:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isu"),"$isc8")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).w(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).w(0,z.gao()))
this.aC()},"$1","geQ",4,0,2],
iY:[function(a){H.h(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfI",4,0,2],
iX:[function(a){var z,y,x,w,v,u,t
a=H.k(H.h(a,"$isu"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a6(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ak(new V.a6(y.a,y.b).k(0,2).w(0,z.gao()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ak(new V.a6(x.a,x.b).k(0,2).w(0,z.gao()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.S(0,a.z)
this.dx=this.ak(new V.a6(y.a,y.b).k(0,2).w(0,z.gao()))}this.aC()},"$1","gfH",4,0,2],
iW:[function(a){var z,y,x
H.h(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sY(-y*10*z)
this.aC()}},"$1","gfG",4,0,2],
aQ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.ap(0,x)
this.b.ap(0,x)
z=V.er(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aJ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaj:1,
p:{
fd:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.k4()
y=U.e0()
y.se9(0,!0)
y.sdR(6.283185307179586)
y.sdT(0)
y.sa1(0,0)
y.sdS(100)
y.sY(0)
y.sdf(0.5)
z.b=y
y=y.gB()
y.toString
x=H.f(z.gbb(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)
y=U.e0()
y.se9(0,!0)
y.sdR(6.283185307179586)
y.sdT(0)
y.sa1(0,0)
y.sdS(100)
y.sY(0)
y.sdf(0.5)
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
y=new D.L("modifiers",v,w,z,[X.aY])
y.b=!0
z.Z(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.L("invertX",y,!1,z,[P.ah])
y.b=!0
z.Z(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.L("invertY",y,!1,z,[P.ah])
y.b=!0
z.Z(y)}z.hd(c)
return z}}}}],["","",,M,{"^":"",hN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aD:[function(a){var z
H.h(a,"$isu")
z=this.x
if(!(z==null))z.I(a)},function(){return this.aD(null)},"il","$1","$0","gaj",0,2,1],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf_",8,0,8],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.M(s.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gf0",8,0,8],
sb3:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.L("technique",x,this.c,this,[O.cv])
z.b=!0
this.aD(z)}},
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e1(this.c)
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
u=C.d.ac(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.d.ac(v.b*w)
s=C.d.ac(v.c*x)
a.c=s
v=C.d.ac(v.d*w)
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
s.e0(V.aJ(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ey
if(y==null){y=new V.E(0,0,-1)
m=y.w(0,Math.sqrt(y.F(y)))
y=new V.E(0,1,0).av(m)
l=y.w(0,Math.sqrt(y.F(y)))
k=m.av(l)
j=new V.E(0,0,0)
y=V.aJ(l.a,k.a,m.a,l.P(0).F(j),l.b,k.b,m.b,k.P(0).F(j),l.c,k.c,m.c,m.P(0).F(j),0,0,0,1)
$.ey=y
i=y}else i=y
y=z.a
if(y!=null){h=y.aQ(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.e0(i)
z=this.c
if(z!=null)z.ap(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.ap(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aN(a)
this.a.toString
a.cy.cn()
a.db.cn()
this.b.toString
a.e_()},
$isoA:1}}],["","",,A,{"^":"",dP:{"^":"b;a,b,c"},hj:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hq:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ho:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ir:{"^":"eD;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aI,0ax,0aJ,0bl,0dh,0di,0bm,0bn,0dj,0dk,0bo,0bp,0dl,0dm,0bq,0dn,0dq,0br,0dr,0ds,0bs,0bt,0bu,0dt,0du,0bv,0bw,0dv,0dw,0bx,0dz,0ca,0dA,0cb,0dB,0cc,0dC,0cd,0dD,0ce,0dE,0cf,a,b,0c,0d,0e,0f,0r",
em:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.fL(z)
a2.fS(z)
a2.fM(z)
a2.h_(z)
a2.h0(z)
a2.fU(z)
a2.h4(z)
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
v.fP(z)
v.fK(z)
v.fN(z)
v.fQ(z)
v.fY(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fW(z)
v.fX(z)}v.fT(z)
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
v.fO(z)
v.fV(z)
v.fZ(z)
v.h1(z)
v.h2(z)
v.h3(z)
v.fR(z)}r=z.a+="// === Main ===\n"
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
this.c=this.cQ(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cQ(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fT(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.t(P.v("Failed to link shader: "+H.l(m)))}this.fB()
this.fD()
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
y=a2.aI
if(y>0){this.k2=H.h(this.r.n(0,"bendMatCount"),"$isN")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isN")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isap")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isN")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isN")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isap")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isN")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.aI=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aJ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isN")
break
case C.f:this.ax=H.k(this.r.n(0,"diffuseTxt"),"$isap")
this.aJ=H.k(this.r.n(0,"nullDiffuseTxt"),"$isN")
break}}y=a2.d
if(y!==C.c){this.bl=H.k(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dh=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bm=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break
case C.f:this.di=H.k(this.r.n(0,"invDiffuseTxt"),"$isap")
this.bm=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break}}y=a2.e
if(y!==C.c){this.bp=H.k(this.r.n(0,"shininess"),"$isZ")
this.bn=H.k(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dj=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bo=H.k(this.r.n(0,"nullSpecularTxt"),"$isN")
break
case C.f:this.dk=H.k(this.r.n(0,"specularTxt"),"$isap")
this.bo=H.k(this.r.n(0,"nullSpecularTxt"),"$isN")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dl=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bq=H.k(this.r.n(0,"nullBumpTxt"),"$isN")
break
case C.f:this.dm=H.k(this.r.n(0,"bumpTxt"),"$isap")
this.bq=H.k(this.r.n(0,"nullBumpTxt"),"$isN")
break}if(a2.dy){this.dn=H.k(this.r.n(0,"envSampler"),"$isap")
this.dq=H.k(this.r.n(0,"nullEnvTxt"),"$isN")
y=a2.r
if(y!==C.c){this.br=H.k(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dr=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bs=H.k(this.r.n(0,"nullReflectTxt"),"$isN")
break
case C.f:this.ds=H.k(this.r.n(0,"reflectTxt"),"$isap")
this.bs=H.k(this.r.n(0,"nullReflectTxt"),"$isN")
break}}y=a2.x
if(y!==C.c){this.bt=H.k(this.r.n(0,"refraction"),"$isZ")
this.bu=H.k(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.e:this.dt=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bv=H.k(this.r.n(0,"nullRefractTxt"),"$isN")
break
case C.f:this.du=H.k(this.r.n(0,"refractTxt"),"$isap")
this.bv=H.k(this.r.n(0,"nullRefractTxt"),"$isN")
break}}}y=a2.y
if(y!==C.c){this.bw=H.k(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.e:this.dv=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bx=H.k(this.r.n(0,"nullAlphaTxt"),"$isN")
break
case C.f:this.dw=H.k(this.r.n(0,"alphaTxt"),"$isap")
this.bx=H.k(this.r.n(0,"nullAlphaTxt"),"$isN")
break}}this.ca=H.e([],[A.f2])
this.cb=H.e([],[A.f3])
this.cc=H.e([],[A.f4])
this.cd=H.e([],[A.f5])
this.ce=H.e([],[A.f6])
this.cf=H.e([],[A.f7])
if(a2.k2){y=a2.z
if(y>0){this.dz=H.h(this.r.n(0,"dirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.ca;(x&&C.a).h(x,new A.f2(l,k,j))}}y=a2.Q
if(y>0){this.dA=H.h(this.r.n(0,"pntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
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
x=this.cb;(x&&C.a).h(x,new A.f3(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dB=H.h(this.r.n(0,"spotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
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
x=this.cc;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dC=H.h(this.r.n(0,"txtDirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isN")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isao")
x=this.cd;(x&&C.a).h(x,new A.f5(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dD=H.h(this.r.n(0,"txtPntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdk")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
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
H.k(c,"$isap")
x=this.ce;(x&&C.a).h(x,new A.f6(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dE=H.h(this.r.n(0,"txtSpotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isN")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isK")
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
H.k(a1,"$isao")
x=this.cf;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
is:function(a,b){var z,y
z=a.ax
y=new A.ir(b,z)
y.ep(b,z)
y.em(a,b)
return y}}},iw:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aI,ax,aJ",
fL:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
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
fS:function(a){var z
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
fM:function(a){var z
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
h_:function(a){var z,y
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
h0:function(a){var z,y
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
fU:function(a){var z
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
h4:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.b.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fP:function(a){var z,y
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
fK:function(a){var z,y
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
fN:function(a){var z,y
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
fQ:function(a){var z,y
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
fY:function(a){var z,y
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
fT:function(a){var z,y
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
fW:function(a){var z,y
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
fX:function(a){var z,y
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
fO:function(a){var z,y
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
fV:function(a){var z,y
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
fZ:function(a){var z,y
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
h1:function(a){var z,y,x
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
h2:function(a){var z,y,x
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
h3:function(a){var z,y,x
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
fR:function(a){var z
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
i:function(a){return this.ax}},f2:{"^":"b;a,b,c"},f5:{"^":"b;a,b,c,d,e,f,r,x"},f3:{"^":"b;a,b,c,d,e,f,r"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eD:{"^":"cN;",
ep:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cQ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fB:function(){var z,y,x,w,v,u
z=H.e([],[A.dP])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dP(y,v.name,u))}this.f=new A.hj(z)},
fD:function(){var z,y,x,w,v,u
z=H.e([],[A.ad])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hl(v.type,v.size,v.name,u))}this.r=new A.jQ(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.N(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ap(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bg:function(a,b){return new P.fl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hl:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jL(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jO(this.a,this.e,c,d)
case 35667:return new A.jM(this.a,this.e,c,d)
case 35668:return new A.jN(this.a,this.e,c,d)
case 35669:return new A.jP(this.a,this.e,c,d)
case 35674:return new A.jS(this.a,this.e,c,d)
case 35675:return new A.dk(this.a,this.e,c,d)
case 35676:return new A.aM(this.a,this.e,c,d)
case 35678:return this.eI(b,c,d)
case 35680:return this.eJ(b,c,d)
case 35670:throw H.a(this.bg("BOOL",c))
case 35671:throw H.a(this.bg("BOOL_VEC2",c))
case 35672:throw H.a(this.bg("BOOL_VEC3",c))
case 35673:throw H.a(this.bg("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cj:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},jQ:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hv:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hv("\n")}},N:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jM:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jN:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jP:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jK:{"^":"ad;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dj:function(a,b,c,d,e){var z=new A.jK(a,b,c,e)
z.f=d
z.e=P.ih(d,0,!1,P.m)
return z}}},Z:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jL:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jO:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jS:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dk:{"^":"ad;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aM:{"^":"ad;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.r],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ao:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ap:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dz:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
z=F.dd()
F.bU(z,b,c,d,a,1,0,0,1)
F.bU(z,b,c,d,a,0,1,0,3)
F.bU(z,b,c,d,a,0,0,1,2)
F.bU(z,b,c,d,a,-1,0,0,0)
F.bU(z,b,c,d,a,0,-1,0,0)
F.bU(z,b,c,d,a,0,0,-1,3)
z.al()
return z},
cC:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bU:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
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
z.d=y}l=F.cC(y)
k=F.cC(z.b)
j=F.dJ(d,e,new F.ma(z,F.cC(z.c),F.cC(z.d),k,l,c),b)
if(j!=null)a.b0(j)},
fV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
z=F.dd()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ag])
v=z.a
u=new V.E(0,0,y)
u=u.w(0,Math.sqrt(u.F(u)))
C.a.h(w,v.h8(new V.bK(a,-1,-1,-1),new V.b3(1,1,1,1),new V.Y(0,0,c),new V.E(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.E(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cc(new V.bK(a,-1,-1,-1),null,new V.b3(n,l,m,1),new V.Y(r*p,q*p,c),new V.E(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h6(w)
return z},
dA:function(a,b,c,d,e,f){return F.mx(b,c,d,new F.mw(a,f),e)},
mx:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.dJ(c,e,new F.mz(d),null)
if(z==null)return
z.al()
z.bY()
if(b)z.b0(F.fV(3,!1,1,new F.mA(d),e))
if(a)z.b0(F.fV(1,!0,-1,new F.mB(d),e))
return z},
n6:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n7()
y=F.dz(a,null,new F.n8(z),c)
y.bY()
return y},
h9:function(a,b,c,d){return F.fU(c,a,d,b,new F.na())},
mQ:function(a,b,c,d,e,f){return F.fU(d,a,e,b,new F.mR(f,c))},
fU:function(a,b,c,d,e){var z=F.dJ(a,b,new F.my(H.f(e,{func:1,ret:V.Y,args:[P.r]}),d,b,c),null)
if(z==null)return
z.al()
z.bY()
return z},
dJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.dd()
y=H.e([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cc(null,null,new V.b3(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c5(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cc(null,null,new V.b3(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c5(d))}}z.d.h7(a+1,b+1,y)
return z},
ma:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cl(z.b,b).cl(z.d.cl(z.c,b),c)
a.sa1(0,new V.Y(y.a,y.b,y.c))
a.se4(y.w(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sdc(new V.bK(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mw:{"^":"n:15;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mz:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sa1(0,new V.Y(y,u,w))
u=new V.E(y,u,w)
a.se4(u.w(0,Math.sqrt(u.F(u))))
a.sdc(new V.bK(1-c,2+c,-1,-1))}},
mA:{"^":"n:22;a",
$1:function(a){return this.a.$2(a,1)}},
mB:{"^":"n:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
n7:{"^":"n:15;",
$2:function(a,b){return 0}},
n8:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.F(x))).k(0,1+z)
a.sa1(0,new V.Y(z.a,z.b,z.c))}},
na:{"^":"n:16;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
mR:{"^":"n:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
my:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dK(y.$1(z),x)
x=J.dK(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.F(x)))
u=new V.E(1,0,0)
y=v.av(!v.u(0,u)?new V.E(0,0,1):u)
t=y.w(0,Math.sqrt(y.F(y)))
y=t.av(v)
u=y.w(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa1(0,w.D(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"b;0a,0b,0c,0d,0e",
aw:function(){if(!this.gaX()){C.a.M(this.a.a.d.b,this)
this.a.a.X()}this.bT()
this.bU()
this.fn()},
fw:function(a){this.a=a
C.a.h(a.d.b,this)},
fz:function(a){this.b=a
C.a.h(a.d.c,this)},
fA:function(a){this.c=a
C.a.h(a.d.d,this)},
bT:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
bU:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
fn:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gaX:function(){return this.a==null||this.b==null||this.c==null},
eC:function(){var z,y,x,w,v
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
if(v.dP())return
return v.w(0,Math.sqrt(v.F(v)))},
eF:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.F(z)))
z=w.S(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.av(z.w(0,Math.sqrt(z.F(z))))
return z.w(0,Math.sqrt(z.F(z)))},
c2:function(){if(this.d!=null)return!0
var z=this.eC()
if(z==null){z=this.eF()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
eB:function(){var z,y,x,w,v
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
if(v.dP())return
return v.w(0,Math.sqrt(v.F(v)))},
eE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.S(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.S(0,u).k(0,l).D(0,u).S(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.F(z)))
z=k.av(m)
z=z.w(0,Math.sqrt(z.F(z))).av(k)
m=z.w(0,Math.sqrt(z.F(z)))}return m},
c0:function(){if(this.e!=null)return!0
var z=this.eB()
if(z==null){z=this.eE()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aY:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.P(0)
y=this.e
if(y!=null)this.e=y.P(0)
this.a.a.X()},
ghh:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z,y
if(this.gaX())return a+"disposed"
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
z.fw(a)
z.fz(b)
z.fA(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hQ:{"^":"b;"},
jl:{"^":"hQ;",
b_:function(a,b,c){var z,y
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
d2:{"^":"b;0a,0b",
aw:function(){if(!this.gaX()){C.a.M(this.a.a.c.b,this)
this.a.a.X()}this.bT()
this.bU()},
bT:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
bU:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gaX:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaX())return a+"disposed"
return a+C.b.ab(J.ab(this.a.e),0)+", "+C.b.ab(J.ab(this.b.e),0)},
L:function(){return this.C("")}},
i7:{"^":"b;"},
jJ:{"^":"i7;",
b_:function(a,b,c){var z,y
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
aw:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.X()}this.fm()},
fm:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.ab(z.e),0)},
L:function(){return this.C("")}},
eE:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hj())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
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
if(r.a==null)H.t(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
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
t=new F.d2()
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
if(!(t==null))t.I(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
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
F.bB(p,o,l)}z=this.e
if(!(z==null))z.ah(0)},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ah(0)
return y},
eN:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ag],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b_(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hJ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ag],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eN(a,v,y,u,t))b.b0(u)}this.a.A()
this.c.cr()
this.d.cr()
this.b.i1()
this.c.cs(new F.jJ())
this.d.cs(new F.jl())
z=this.e
if(!(z==null))z.ah(0)},
hb:function(a){this.hJ(new F.ki(),new F.iG())},
bY:function(){return this.hb(null)},
aY:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aY()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdU(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.I(null)}}}}z=this.e
if(!(z==null))z.ah(0)},
hf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bN().a)!==0)++w
if((x&$.$get$bO().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcC(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dU])
for(r=0,q=0;q<w;++q){p=b.hc(q)
o=p.gcC(p)
C.a.m(s,q,new Z.dU(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hE(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bq(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dV(new Z.fi(34962,j),s,b)
i.b=H.e([],[Z.cn])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.e([],[x])
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
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.E(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.I(a)},
X:function(){return this.a5(null)},
p:{
dd:function(){var z,y
z=new F.eE()
y=new F.kd(z)
y.b=!1
y.c=H.e([],[F.ag])
z.a=y
y=new F.jg(z)
y.b=H.e([],[F.d9])
z.b=y
y=new F.jf(z)
y.b=H.e([],[F.d2])
z.c=y
y=new F.je(z)
y.b=H.e([],[F.am])
z.d=y
z.e=null
return z}}},
je:{"^":"b;a,0b",
h6:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ag],"$asc")
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
h7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ag],"$asc")
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
cs:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b_(0,v,t)){v.aw()
break}}}}},
cr:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghh(x)
if(y)x.aw()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c2())x=!1
return x},
c1:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c0())x=!1
return x},
aY:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].aY()},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
jf:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cs:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b_(0,v,t)){v.aw()
break}}}}},
cr:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.aw()}},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.E(z,"\n")},
L:function(){return this.C("")}},
jg:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i1:function(){var z,y
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
ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c5:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cc(this.cx,x,u,z,y,w,v,a,t)},
hj:function(){return this.c5(null)},
sa1:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sdU:function(a){var z
a=a.w(0,Math.sqrt(a.F(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
se4:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sdc:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
hE:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$aQ())){z=this.f
y=[P.r]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.r
y=[P.r]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aO())){z=this.x
y=[P.r]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.y
y=[P.r]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aS())){z=this.z
y=[P.r]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bN())){z=this.Q
y=[P.r]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bO())){z=this.Q
y=[P.r]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bo()))return H.e([this.ch],[P.r])
else if(z.u(a,$.$get$aN())){z=this.cx
y=[P.r]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.r])},
c2:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.kn(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ah(0)}return!0},
c0:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.K(0,new F.km(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ah(0)}return!0},
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
L:function(){return this.C("")},
p:{
cc:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.kl(z)
y.b=H.e([],[F.d9])
z.b=y
y=new F.kh(z)
x=[F.d2]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.ke(z)
x=[F.am]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$ff()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fg().a)!==0?c:null
z.ch=(x&$.$get$bo().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
kn:{"^":"n:10;a",
$1:function(a){var z,y
H.h(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
km:{"^":"n:10;a",
$1:function(a){var z,y
H.h(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kd:{"^":"b;a,0b,0c",
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
h9:function(a,b,c,d,e,f,g,h,i){var z=F.cc(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h8:function(a,b,c,d,e,f){return this.h9(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c2()
return!0},
c1:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c0()
return!0},
hg:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
this.A()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
ke:{"^":"b;a,0b,0c,0d",
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
K:function(a,b){H.f(b,{func:1,ret:-1,args:[F.am]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kf(this,b))
C.a.K(this.d,new F.kg(this,b))},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}},
kf:{"^":"n:10;a,b",
$1:function(a){H.h(a,"$isam")
if(!J.P(a.a,this.a))this.b.$1(a)}},
kg:{"^":"n:10;a,b",
$1:function(a){var z
H.h(a,"$isam")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
kh:{"^":"b;a,0b,0c",
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
kj:{"^":"b;"},
ki:{"^":"kj;",
b_:function(a,b,c){return J.P(b.f,c.f)}},
kk:{"^":"b;"},
iG:{"^":"kk;",
b0:function(a){var z,y,x,w
H.w(a,"$isc",[F.ag],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sdU(z)
return}},
kl:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
L:function(){return this.C("")}}}],["","",,O,{"^":"",it:{"^":"cv;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.R()
this.dy=z}return z},
ae:[function(a){var z
H.h(a,"$isu")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.ae(null)},"im","$1","$0","gew",0,2,1],
fs:[function(a){H.h(a,"$isu")
this.a=null
this.ae(a)},function(){return this.fs(null)},"iV","$1","$0","gfq",0,2,1],
ix:[function(a,b){var z=V.av
z=new D.co(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ae(z)},"$2","geX",8,0,25],
iy:[function(a,b){var z=V.av
z=new D.cp(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ae(z)},"$2","geY",8,0,25],
cN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a3(z.e.length+3,4)*4
x=C.d.a3(z.f.length+3,4)*4
w=C.d.a3(z.r.length+3,4)*4
v=C.d.a3(z.x.length+3,4)*4
u=C.d.a3(z.y.length+3,4)*4
t=C.d.a3(z.z.length+3,4)*4
s=C.d.a3(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+"_"
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
a6=new Z.bn(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bn(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bn(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bn(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bn(a6.a|z.a)}return new A.iw(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isc",[T.dg],"$asc")
if(b!=null)if(!C.a.aV(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var z,y,x,w,v,u,t
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
y.a=new V.Y(0,0,0)
y.b=new V.E(0,0,1)
y.c=new V.E(0,1,0)
y.d=new V.E(-1,0,0)
x=y.e
if(x!=null){w=x.aQ(0,b,y)
if(w!=null){y.a=w.aP(y.a)
x=w.b7(y.b)
v=x.a
u=x.b
t=x.c
y.b=x.w(0,Math.sqrt(v*v+u*u+t*t))
t=w.b7(y.c)
u=t.a
v=t.b
x=t.c
y.c=t.w(0,Math.sqrt(u*u+v*v+x*x))
x=w.b7(y.d)
v=x.a
u=x.b
t=x.c
y.d=x.w(0,Math.sqrt(v*v+u*u+t*t))}}}},
i3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cN()
y=a.fr.j(0,z.ax)
if(y==null){y=A.is(z,a.a)
x=y.b
if(x.length===0)H.t(P.v("May not cache a shader with no name."))
if(a.fr.bk(0,x))H.t(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aJ
z=b.e
if(!(z instanceof Z.dV)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.al()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c1()
t.a.c1()
t=t.e
if(!(t==null))t.ah(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hg()
s=s.e
if(!(s==null))s.ah(0)}q=b.d.hf(new Z.ko(a.a),v)
q.aK($.$get$aQ()).e=this.a.y.c
if(z)q.aK($.$get$aP()).e=this.a.Q.c
if(u)q.aK($.$get$aO()).e=this.a.z.c
if(w.rx)q.aK($.$get$aR()).e=this.a.ch.c
if(t)q.aK($.$get$aS()).e=this.a.cx.c
if(w.x1)q.aK($.$get$aN()).e=this.a.cy.c
b.e=q}z=T.dg
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hq()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.db
u.toString
u.ai(t.ad(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
s=a.dx
s=t.k(0,s.gW(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ai(t.ad(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi_()
s=a.dx
s=t.k(0,s.gW(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ai(t.ad(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ai(t.ad(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ai(t.ad(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ai(C.t.ad(t,!0))}if(w.aI>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.r],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.h(s,"$isav")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bq(H.w(s.ad(0,!0),"$isc",u,"$asc")))
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
case C.e:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.af(u.r1,u.rx,t)
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
u.a9(u.r2,u.rx,t)
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
case C.e:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.af(u.x1,u.y1,t)
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
u.a9(u.x2,u.y1,t)
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
case C.e:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.af(u.aI,u.aJ,t)
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
u.a9(u.ax,u.aJ,t)
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
u=u.bl
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.af(u.dh,u.bm,t)
t=this.a
u=this.y.f
t=t.bl
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a9(u.di,u.bm,t)
t=this.a
u=this.y.f
t=t.bl
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bn
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bp
t.a.uniform1f(t.d,r)
break
case C.e:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.af(u.dj,u.bo,t)
t=this.a
u=this.z.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bp
u.a.uniform1f(u.d,r)
break
case C.f:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a9(u.dk,u.bo,t)
t=this.a
u=this.z.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bp
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.b7(i.gc6(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gag(i)
g=h.c
r=f.gbz()
s=f.gb8()
f=f.gbh()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cb
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gco(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gea(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aP(i.gco(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gag(i)
f=h.d
g=s.gbz()
r=s.gb8()
s=s.gbh()
f.a.uniform3f(f.d,g,r,s)
s=i.gd8()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gd9()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gda()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cc
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gco(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gea(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc6(i).j2()
f=h.c
g=s.gc7(s)
r=s.gc8(s)
s=s.gc9()
f.a.uniform3f(f.d,g,r,s)
s=l.aP(i.gco(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gag(i)
r=h.e
g=s.gbz()
f=s.gb8()
s=s.gbh()
r.a.uniform3f(r.d,g,f,s)
s=i.gj_()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giZ()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gd8()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gd9()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gda()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cd
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gcv()
H.w(p,"$isc",s,"$asc")
if(!C.a.aV(p,r)){r.scT(p.length)
C.a.h(p,r)}r=i.gc6(i)
g=h.d
f=r.gc7(r)
e=r.gc8(r)
r=r.gc9()
g.a.uniform3f(g.d,f,e,r)
r=i.gj9()
e=h.b
f=r.gc7(r)
g=r.gc8(r)
r=r.gc9()
e.a.uniform3f(e.d,f,g,r)
r=i.gbA(i)
g=h.c
f=r.gc7(r)
e=r.gc8(r)
r=r.gc9()
g.a.uniform3f(g.d,f,e,r)
r=l.b7(i.gc6(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gag(i)
f=h.f
e=g.gbz()
r=g.gb8()
g=g.gbh()
f.a.uniform3f(f.d,e,r,g)
g=i.gcv()
r=g.gdQ(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.giq()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gcT())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,s=[P.r],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.ce
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gcv()
H.w(p,"$isc",r,"$asc")
if(!C.a.aV(p,g)){g.scT(p.length)
C.a.h(p,g)}d=l.k(0,i.gW(i))
g=i.gW(i).aP(new V.Y(0,0,0))
f=h.b
e=g.gq(g)
c=g.gt(g)
g=g.gea(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aP(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dO(0)
c=h.d
m=new Float32Array(H.bq(H.w(new V.cr(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ad(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gag(i)
g=h.e
e=c.gbz()
f=c.gb8()
c=c.gbh()
g.a.uniform3f(g.d,e,f,c)
c=i.gcv()
g=c.gdQ(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gdQ(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gj0(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gd8()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gd9()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gda()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dE
u.a.uniform1i(u.d,o)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cf
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.r
H.w(p,"$isc",z,"$asc")
if(s!=null)if(!C.a.aV(p,s)){s.a=p.length
C.a.h(p,s)}s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.b
r=h.c
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.c
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.d
r=h.e
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=l.aP(i.a)
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.r
r=s!=null
if(!r||!s.d){s=h.x
s.a.uniform1i(s.d,1)}else{g=h.r
r=!r||!s.d
f=g.a
g=g.d
if(r)f.uniform1i(g,0)
else f.uniform1i(g,s.a)
s=h.x
s.a.uniform1i(s.d,0)}s=i.f
r=h.y
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.x
r=h.z
r.a.uniform1f(r.d,s)
s=i.y
r=h.Q
r.a.uniform1f(r.d,s)
s=i.ch
r=h.ch
r.a.uniform1f(r.d,s)
s=i.cx
r=h.cx
r.a.uniform1f(r.d,s)
s=i.cy
r=h.cy
r.a.uniform1f(r.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.af(z.dl,z.bq,u)
break
case C.f:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a9(z.dm,z.bq,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).dO(0)
a.Q=u}z=z.fy
z.toString
z.ai(u.ad(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a9(z.dn,z.dq,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.br
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.af(z.dr,z.bs,u)
u=this.a
z=this.cx.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a9(z.ds,z.bs,u)
u=this.a
z=this.cx.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bu
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bt
u.a.uniform1f(u.d,s)
break
case C.e:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.af(z.dt,z.bv,u)
u=this.a
z=this.cy.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bt
z.a.uniform1f(z.d,s)
break
case C.f:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a9(z.du,z.bv,u)
u=this.a
z=this.cy.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bt
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bw
z.a.uniform1f(z.d,t)
break
case C.e:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.af(z.dv,z.bx,t)
t=this.a
z=this.db.f
t=t.bw
t.a.uniform1f(t.d,z)
break
case C.f:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a9(z.dw,z.bx,t)
t=this.a
z=this.db.f
t=t.bw
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aU(a)
z=b.e
z.aU(a)
z.aN(a)
z.ij(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.ho()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cN().ax},
p:{
eq:function(){var z,y,x,w
z=new O.it()
y=O.cT(V.av)
z.e=y
y.ba(z.geX(),z.geY())
y=new O.ba(z,"emission")
y.c=C.c
y.f=new V.a1(0,0,0)
z.f=y
y=new O.ba(z,"ambient")
y.c=C.c
y.f=new V.a1(0,0,0)
z.r=y
y=new O.ba(z,"diffuse")
y.c=C.c
y.f=new V.a1(0,0,0)
z.x=y
y=new O.ba(z,"invDiffuse")
y.c=C.c
y.f=new V.a1(0,0,0)
z.y=y
y=new O.iy(z,"specular")
y.c=C.c
y.f=new V.a1(0,0,0)
y.ch=100
z.z=y
y=new O.iv(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.ba(z,"reflect")
y.c=C.c
y.f=new V.a1(0,0,0)
z.cx=y
y=new O.ix(z,"refract")
y.c=C.c
y.f=new V.a1(0,0,0)
y.ch=1
z.cy=y
y=new O.iu(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.i6()
y.bG(D.a3)
y.e=H.e([],[D.hF])
y.f=H.e([],[D.iL])
y.r=H.e([],[D.jm])
y.x=H.e([],[D.jx])
y.y=H.e([],[D.jy])
y.z=H.e([],[D.cw])
y.Q=null
y.ch=null
y.cB(y.geW(),y.gff(),y.gfh())
z.dx=y
x=y.Q
if(x==null){x=D.R()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.u]}
w=H.f(z.gfq(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.R()
w.ch=y}x=H.f(z.gew(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},iu:{"^":"d4;0f,a,b,0c,0d,0e"},d4:{"^":"b;",
be:["ek",function(){}]},iv:{"^":"d4;a,b,0c,0d,0e"},ba:{"^":"d4;0f,a,b,0c,0d,0e",
d_:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.L(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.ae(y)}},
be:["bF",function(){this.ek()
this.d_(new V.a1(1,1,1))}],
sag:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.be()
z=this.a
z.a=null
z.ae(null)}this.d_(b)}},ix:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
fv:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.ae(z)}},
be:function(){this.bF()
this.fv(1)}},iy:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bV:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.ae(z)}},
be:function(){this.bF()
this.bV(100)}},cv:{"^":"b;"}}],["","",,T,{"^":"",dg:{"^":"cN;"},eL:{"^":"dg;0b,0c,0d,0e,0f,0r,0x,0y,a",
aU:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}}},jv:{"^":"b;a,0b,0c,0d,0e",
hH:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.eL(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.R()
z=W.ac
W.a0(x,"load",H.f(new T.jw(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hG:function(a){return this.hH(a,!1,!1,!1,!1)},
ft:function(a,b,c){var z,y,x,w
b=V.dH(b,2)
z=V.dH(a.width,2)
y=V.dH(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cS(null,null)
x.width=z
x.height=y
w=H.h(C.l.ec(x,"2d"),"$isdY")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mv(w.getImageData(0,0,x.width,x.height))}}},jw:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ft(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ia(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hp()}++x.e}}}],["","",,V,{"^":"",hi:{"^":"b;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isc6:1},c6:{"^":"b;"},ep:{"^":"b;",
aZ:["ej",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["cD",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc6:1},bH:{"^":"ep;0a",
aZ:function(a,b){return!this.ej(0,b)},
i:function(a){return"!["+this.cD(0)+"]"}},jc:{"^":"b;0a",
eo:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.m,P.ah])
for(y=new H.en(a,a.gl(a),0,[H.ay(a,"x",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.bk(0,b)},
i:function(a){var z=this.a
return P.c9(z.gan(z),0,null)},
$isc6:1,
p:{
aa:function(a){var z=new V.jc()
z.eo(a)
return z}}},eG:{"^":"b;a,b,0c,0d",
ghK:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eR(this.a.N(0,b))
w.a=H.e([],[V.c6])
w.c=!1
C.a.h(this.c,w)
return w},
hs:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},eO:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h7(this.b,"\n","\\n")
y=H.h7(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eP:{"^":"b;a,b,0c",
i:function(a){return this.b}},jE:{"^":"b;0a,0b,0c",
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eG(this,b)
z.c=H.e([],[V.eR])
this.a.m(0,b,z)}return z},
b5:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eP(this,a)
y=P.i
z.c=new H.aX(0,0,[y,y])
this.b.m(0,a,z)}return z},
ii:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eO])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hs(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c9(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghK(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c9(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eO(o==null?p.b:o,q,t)}++t}}}},eR:{"^":"ep;b,0c,0a",
i:function(a){return this.b.b+": "+this.cD(0)}}}],["","",,X,{"^":"",dX:{"^":"b;",$isaK:1},hV:{"^":"eJ;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z}},iJ:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
aR:[function(a){var z
H.h(a,"$isu")
z=this.e
if(!(z==null))z.I(a)},function(){return this.aR(null)},"io","$1","$0","gcF",0,2,1],
saM:function(a){var z,y,x
if(!J.P(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.f(this.gcF(),{func:1,ret:-1,args:[D.u]})
C.a.M(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gcF(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.L("mover",x,this.a,this,[U.aj])
z.b=!0
this.aR(z)}},
$isaK:1,
$isdX:1},eJ:{"^":"b;"}}],["","",,V,{"^":"",
n4:function(a){P.jD(C.G,new V.n5(a))},
n5:{"^":"n:49;a",
$1:function(a){H.h(a,"$isbk")
P.dI(C.h.e6(this.a.ghw(),2)+" fps")}},
iX:{"^":"b;a,b,0c",
d6:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fa().gcq().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d4(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dN(this.c).h(0,v)
t=W.hY("radio")
t.checked=x
t.name=z
z=W.ac
W.a0(t,"change",H.f(new V.iY(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dN(this.c).h(0,w.createElement("br"))},
aT:function(a,b,c){return this.d6(a,b,c,!1)},
d4:function(a){var z,y,x,w,v
z=P.fa()
y=P.i
x=P.id(z.gcq(),y,y)
x.m(0,this.a,a)
w=z.e2(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lr([],[]).cw(""),"",v)}},
iY:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d4(this.d)}}},
jh:{"^":"b;0a,0b",
eq:function(a,b){var z,y,x,w,v,u,t
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
W.a0(z,"scroll",H.f(new V.jk(x),{func:1,ret:-1,args:[t]}),!1,t)},
ha:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fC()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ii(C.a.hC(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.h6(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cB(C.S,s,C.k,!1)
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
h5:function(a){var z,y,x,w,v,u,t
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
x=H.h(w.insertCell(-1),"$isdf").style
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
t=H.h(w.insertCell(-1),"$isdf")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fC:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jE()
y=P.i
z.a=new H.aX(0,0,[y,V.eG])
z.b=new H.aX(0,0,[y,V.eP])
z.c=z.N(0,"Start")
y=z.N(0,"Start").E(0,"Bold")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").E(0,"Bold")
x=new V.bH()
w=[V.c6]
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
x=new V.bH()
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
x=new V.bH()
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
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").E(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").E(0,"LinkTail")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").E(0,"Other").a,new V.hi())
x=z.N(0,"Other").E(0,"Other")
y=new V.bH()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.b5("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.b5("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.b5("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.b5("Link")
x=z.N(0,"Other")
x.d=x.a.b5("Other")
this.b=z},
p:{
ji:function(a,b){var z=new V.jh()
z.eq(a,!0)
return z}}},
jk:{"^":"n:14;a",
$1:function(a){P.jC(C.r,new V.jj(this.a))}},
jj:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.ac(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,L,{"^":"",
h2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.ji("Test 025",!0)
y=W.cS(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.ha(H.e(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.h5(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jA(w,!0,!0,!0,!1)
u=U.cX(null)
u.h(0,U.c0(V.et(0,0,-2.5)))
u.h(0,U.fd(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a1(1,1,1)
z=v.f.hG("../resources/Test.png")
s=new D.cw()
s.z=0.6
s.Q=1
s.f=new V.a1(1,1,1)
s.z=1.0471975511965976
s.ch=1
s.cx=0
s.cy=0
s.a=new V.Y(0,0,0)
s.b=new V.E(0,0,1)
s.c=new V.E(0,1,0)
s.d=new V.E(-1,0,0)
r=s.e
s.e=u
q=u.gB()
q.toString
p=H.f(s.gbQ(),{func:1,ret:-1,args:[D.u]})
C.a.h(q.a,p)
q=new D.L("mover",r,s.e,s,[U.aj])
q.b=!0
s.a4(q)
if(!s.f.u(0,t)){r=s.f
s.f=t
q=new D.L("color",r,t,s,[V.a1])
q.b=!0
s.a4(q)}q=s.r
if(q!==z){if(q!=null){q=q.y
p=H.f(s.gbQ(),{func:1,ret:-1,args:[D.u]})
C.a.M(q.a,p)}r=s.r
s.r=z
z=z.y
q=H.f(s.gbQ(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,q)
z=new D.L("texture",r,s.r,s,[T.eL])
z.b=!0
s.a4(z)}z=s.z
if(!$.o.$2(z,0.5)){r=s.z
s.z=0.5
z=1/(Math.sqrt(2)*Math.tan(s.z))
s.x=z
s.y=z*s.Q
z=new D.L("fov",r,s.z,s,[P.r])
z.b=!0
s.a4(z)}z=s.Q
if(!$.o.$2(z,1)){r=s.Q
s.Q=1
z=s.x
if(typeof z!=="number")return z.k()
s.y=z
z=new D.L("ratio",r,1,s,[P.r])
z.b=!0
s.a4(z)}z=s.ch
if(!$.o.$2(z,0.5)){r=s.ch
s.ch=0.5
z=new D.L("attenuation0",r,0.5,s,[P.r])
z.b=!0
s.a4(z)}z=s.cx
if(!$.o.$2(z,0.05)){r=s.cx
s.cx=0.05
z=new D.L("attenuation1",r,0.05,s,[P.r])
z.b=!0
s.a4(z)}z=s.cy
if(!$.o.$2(z,0.05)){r=s.cy
s.cy=0.05
z=new D.L("attenuation2",r,0.05,s,[P.r])
z.b=!0
s.a4(z)}o=O.eq()
o.dx.h(0,s)
z=o.r
z.sag(0,new V.a1(0.05,0.05,0.05))
z=o.x
z.sag(0,new V.a1(0.7,0.7,0.7))
z=o.z
z.sag(0,new V.a1(0.3,0.3,0.3))
z=o.z
if(z.c===C.c){z.c=C.i
z.bF()
z.bV(100)
q=z.a
q.a=null
q.ae(null)}z.bV(100)
n=E.cV(null,!0,null,"",null,null)
n.sa6(0,F.h9(30,1,15,0.5))
m=E.cV(null,!0,null,"",null,null)
m.saM(U.c0(V.es(3,3,3,1)))
z=F.dz(1,null,null,1)
z.aY()
m.sa6(0,z)
l=U.cX(null)
l.h(0,U.fd(!1,!1,v.r,!1,!1,!1,null,!1))
l.h(0,U.c0(V.er(3.141592653589793)))
l.h(0,U.c0(V.et(0,0,5)))
k=E.cV(null,!0,null,"",null,null)
z=U.cX(null)
z.h(0,U.c0(V.es(0.1,0.1,0.1,1)))
z.h(0,u)
k.saM(z)
k.sa6(0,F.dA(0,!1,!0,1,40,1))
z=O.eq()
z.f.sag(0,new V.a1(1,1,1))
k.sb3(z)
z=new M.hN()
q=O.cT(E.aI)
z.d=q
q.ba(z.gf_(),z.gf0())
z.e=null
z.f=null
z.r=null
z.x=null
j=new X.iJ()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.saM(null)
q=j.b
if(!$.o.$2(q,1.0471975511965976)){r=j.b
j.b=1.0471975511965976
q=new D.L("fov",r,1.0471975511965976,j,[P.r])
q.b=!0
j.aR(q)}q=j.c
if(!$.o.$2(q,0.1)){r=j.c
j.c=0.1
q=new D.L("near",r,0.1,j,[P.r])
q.b=!0
j.aR(q)}q=j.d
if(!$.o.$2(q,2000)){r=j.d
j.d=2000
q=new D.L("far",r,2000,j,[P.r])
q.b=!0
j.aR(q)}q=z.a
if(q!==j){if(q!=null){q=q.gB()
q.toString
p=H.f(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.M(q.a,p)}r=z.a
z.a=j
q=j.gB()
q.toString
p=H.f(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(q.a,p)
q=new D.L("camera",r,z.a,z,[X.dX])
q.b=!0
z.aD(q)}i=new X.hV()
q=new V.b3(0,0,0,1)
i.a=q
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
q=V.eC(0,0,1,1)
i.r=q
q=z.b
if(q!==i){if(q!=null){q=q.gB()
q.toString
p=H.f(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.M(q.a,p)}r=z.b
z.b=i
q=i.gB()
q.toString
p=H.f(z.gaj(),{func:1,ret:-1,args:[D.u]})
C.a.h(q.a,p)
q=new D.L("target",r,z.b,z,[X.eJ])
q.b=!0
z.aD(q)}z.sb3(null)
z.sb3(o)
z.d.h(0,n)
z.d.h(0,m)
z.d.h(0,k)
z.a.saM(l)
q=v.d
if(q!==z){if(q!=null){q=q.gB()
q.toString
p=H.f(v.gcE(),{func:1,ret:-1,args:[D.u]})
C.a.M(q.a,p)}v.d=z
z=z.gB()
z.toString
q=H.f(v.gcE(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,q)
v.es()}z=new V.iX("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.t("Failed to find shapes for RadioGroup")
z.aT(0,"Cube",new L.mT(n))
z.aT(0,"Cylinder",new L.mU(n))
z.aT(0,"Cone",new L.mV(n))
z.aT(0,"Sphere",new L.mW(n))
z.d6(0,"Toroid",new L.mX(n),!0)
z.aT(0,"Knot",new L.mY(n))
V.n4(v)},
mT:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.dz(1,null,null,1))}},
mU:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.dA(1,!0,!0,1,40,1))}},
mV:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.dA(1,!0,!1,1,40,0))}},
mW:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.n6(6,null,6))}},
mX:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.h9(30,1,15,0.5))}},
mY:{"^":"n:0;a",
$0:function(){this.a.sa6(0,F.mQ(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eh.prototype
return J.eg.prototype}if(typeof a=="string")return J.c4.prototype
if(a==null)return J.ei.prototype
if(typeof a=="boolean")return J.i1.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.aF=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.ce=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.mG=function(a){if(typeof a=="number")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cb.prototype
return a}
J.mH=function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cb.prototype
return a}
J.dD=function(a){if(typeof a=="string")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cb.prototype
return a}
J.aV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c5.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.ha=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mG(a).O(a,b)}
J.dK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mH(a).k(a,b)}
J.dL=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).j(a,b)}
J.cK=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h_(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ce(a).m(a,b,c)}
J.hb=function(a,b){return J.dD(a).H(a,b)}
J.hc=function(a,b,c){return J.aV(a).fo(a,b,c)}
J.hd=function(a,b,c,d){return J.aV(a).d7(a,b,c,d)}
J.he=function(a,b){return J.dD(a).V(a,b)}
J.cL=function(a,b,c){return J.aF(a).hi(a,b,c)}
J.cM=function(a,b){return J.ce(a).J(a,b)}
J.hf=function(a,b,c,d){return J.ce(a).ay(a,b,c,d)}
J.dM=function(a,b){return J.ce(a).K(a,b)}
J.dN=function(a){return J.aV(a).gc3(a)}
J.b2=function(a){return J.I(a).gT(a)}
J.by=function(a){return J.ce(a).ga_(a)}
J.at=function(a){return J.aF(a).gl(a)}
J.hg=function(a,b){return J.aV(a).i4(a,b)}
J.hh=function(a,b){return J.aV(a).sa0(a,b)}
J.ab=function(a){return J.I(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cR.prototype
C.H=J.q.prototype
C.a=J.b9.prototype
C.I=J.eg.prototype
C.d=J.eh.prototype
C.t=J.ei.prototype
C.h=J.c3.prototype
C.b=J.c4.prototype
C.P=J.c5.prototype
C.V=H.d8.prototype
C.W=W.iF.prototype
C.z=J.iK.prototype
C.X=P.db.prototype
C.q=J.cb.prototype
C.A=W.bP.prototype
C.B=W.kr.prototype
C.D=new P.hn(!1)
C.C=new P.hm(C.D)
C.E=new P.iI()
C.F=new P.kc()
C.j=new P.ld()
C.c=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.e=new A.cj(2,"ColorSourceType.Texture2D")
C.f=new A.cj(3,"ColorSourceType.TextureCube")
C.r=new P.b6(0)
C.G=new P.b6(5e6)
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
C.w=H.e(I.ak([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.ak([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.ak([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.ak([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.ak([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.ak([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.ak([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.ak([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.ak([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.ak([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.ak([]),[P.i])
C.U=new H.hz(0,{},C.Q,[P.i,P.i])
C.k=new P.k5(!1)
$.az=0
$.bz=null
$.dS=null
$.du=!1
$.fY=null
$.fQ=null
$.h5=null
$.cF=null
$.cI=null
$.dE=null
$.br=null
$.bV=null
$.bW=null
$.dv=!1
$.T=C.j
$.e7=null
$.e6=null
$.e5=null
$.e4=null
$.o=V.iz()
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
I.$lazy(y,x,w)}})(["e3","$get$e3",function(){return H.fX("_$dart_dartClosure")},"d_","$get$d_",function(){return H.fX("_$dart_js")},"eS","$get$eS",function(){return H.aC(H.cx({
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aC(H.cx({$method$:null,
toString:function(){return"$receiver$"}}))},"eU","$get$eU",function(){return H.aC(H.cx(null))},"eV","$get$eV",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aC(H.cx(void 0))},"f_","$get$f_",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eX","$get$eX",function(){return H.aC(H.eY(null))},"eW","$get$eW",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aC(H.eY(void 0))},"f0","$get$f0",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.ks()},"bX","$get$bX",function(){return[]},"fe","$get$fe",function(){return P.k9()},"fk","$get$fk",function(){return H.iD(H.bq(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fG","$get$fG",function(){return P.j2("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fM","$get$fM",function(){return P.mc()},"e2","$get$e2",function(){return{}},"fh","$get$fh",function(){return Z.aq(0)},"ff","$get$ff",function(){return Z.aq(511)},"aQ","$get$aQ",function(){return Z.aq(1)},"aP","$get$aP",function(){return Z.aq(2)},"aO","$get$aO",function(){return Z.aq(4)},"aR","$get$aR",function(){return Z.aq(8)},"aS","$get$aS",function(){return Z.aq(16)},"bN","$get$bN",function(){return Z.aq(32)},"bO","$get$bO",function(){return Z.aq(64)},"fg","$get$fg",function(){return Z.aq(96)},"bo","$get$bo",function(){return Z.aq(128)},"aN","$get$aN",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.j,E.aI]]},{func:1,ret:P.G,args:[F.ag,P.r,P.r]},{func:1,ret:P.G,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.G,args:[W.ac]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:V.Y,args:[P.r]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.j,D.a3]]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:-1,args:[P.m,[P.j,U.aj]]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.m,[P.j,V.av]]},{func:1,ret:P.G,args:[,]},{func:1,ret:W.a2,args:[W.J]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,ret:P.ah,args:[W.J]},{func:1,ret:P.G,args:[P.W]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ah,args:[P.r,P.r]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:-1,args:[W.bP]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ah,args:[[P.j,D.a3]]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,args:[,P.i]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.O,args:[P.m]},{func:1,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,ret:P.G,args:[P.bk]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n9(d||a)
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
Isolate.dB=a.dB
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
if(typeof dartMainRunner==="function")dartMainRunner(L.h2,[])
else L.h2([])})})()
//# sourceMappingURL=test.dart.js.map
