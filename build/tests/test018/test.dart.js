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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dF(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dH=function(){}
var dart=[["","",,H,{"^":"",om:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cM:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dK==null){H.mY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ch("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d5()]
if(v!=null)return v
v=H.n4(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d5(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
v:function(a,b){return a===b},
gU:function(a){return H.bR(a)},
j:["ew",function(a){return"Instance of '"+H.bi(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i8:{"^":"r;",
j:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isal:1},
eo:{"^":"r;",
v:function(a,b){return null==b},
j:function(a){return"null"},
gU:function(a){return 0},
$isH:1},
d6:{"^":"r;",
gU:function(a){return 0},
j:["ex",function(a){return String(a)}]},
iR:{"^":"d6;"},
ci:{"^":"d6;"},
cb:{"^":"d6;",
j:function(a){var z=a[$.$get$e9()]
if(z==null)return this.ex(a)
return"JavaScript function for "+H.l(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd2:1},
be:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.B("add"))
a.push(b)},
il:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ce(b,null,null))
return a.splice(b,1)[0]},
J:function(a,b){var z
if(!!a.fixed$length)H.q(P.B("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b9(a))}},
G:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
hY:function(a){return this.G(a,"")},
hR:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b9(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bS:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a1(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a1(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaB:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i6())},
aA:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.B("fill range"))
P.aR(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.B(0,1))a[z]=d},
b4:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
j:function(a){return P.d3(a,"[","]")},
ga1:function(a){return new J.aE(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bR(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cn(b,"newLength",null))
if(b<0)throw H.a(P.a1(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
return a[b]},
l:function(a,b,c){H.E(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b>=a.length||b<0)throw H.a(H.aM(a,b))
a[b]=c},
$isk:1,
$isc:1,
t:{
i7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cn(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a1(a,0,4294967295,"length",null))
return J.el(new Array(a),b)},
el:function(a,b){return J.bJ(H.e(a,[b]))},
bJ:function(a){H.c4(a)
a.fixed$length=Array
return a},
ok:[function(a,b){return J.hm(H.ha(a,"$isam"),H.ha(b,"$isam"))},"$2","mu",8,0,50]}},
ol:{"^":"be;$ti"},
aE:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c9:{"^":"r;",
aN:function(a,b){var z
H.h9(b)
if(typeof b!=="number")throw H.a(H.a5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbJ(b)
if(this.gbJ(a)===z)return 0
if(this.gbJ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbJ:function(a){return a===0?1/a<0:a<0},
iz:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cw:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
ek:function(a,b){var z
if(b>20)throw H.a(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbJ(a))return"-"+z
return z},
be:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.B("Unexpected toString result: "+z))
x=J.aw(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a*b},
bj:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aL:function(a,b){var z
if(a>0)z=this.dk(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h_:function(a,b){if(b<0)throw H.a(H.a5(b))
return this.dk(a,b)},
dk:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a<b},
ae:function(a,b){if(typeof b!=="number")throw H.a(H.a5(b))
return a>b},
$isam:1,
$asam:function(){return[P.W]},
$isu:1,
$isW:1},
en:{"^":"c9;",$ism:1},
em:{"^":"c9;"},
ca:{"^":"r;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aM(a,b))
if(b<0)throw H.a(H.aM(a,b))
if(b>=a.length)H.q(H.aM(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aM(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.cn(b,null,null))
return a+b},
aY:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a5(b))
c=P.aR(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a5(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a5(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.a8(a,b,0)},
w:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a5(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.ce(b,null,null))
if(b>c)throw H.a(P.ce(b,null,null))
if(c>a.length)throw H.a(P.ce(c,null,null))
return a.substring(b,c)},
aC:function(a,b){return this.w(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i9:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ab:function(a,b){return this.i9(a,b," ")},
e2:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e1:function(a,b){return this.e2(a,b,0)},
hD:function(a,b,c){if(c>a.length)throw H.a(P.a1(c,0,a.length,null,null))
return H.he(a,b,c)},
aN:function(a,b){var z
H.K(b)
if(typeof b!=="string")throw H.a(H.a5(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isam:1,
$asam:function(){return[P.i]},
$iseA:1,
$isi:1}}],["","",,H,{"^":"",
cN:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i6:function(){return new P.jx("No element")},
jv:function(a,b,c){var z
H.v(a,"$isc",[c],"$asc")
H.h(b,{func:1,ret:P.m,args:[c,c]})
z=J.ap(a)
if(typeof z!=="number")return z.M()
H.cf(a,0,z-1,b,c)},
cf:function(a,b,c,d,e){H.v(a,"$isc",[e],"$asc")
H.h(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.ju(a,b,c,d,e)
else H.jt(a,b,c,d,e)},
ju:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$isc",[e],"$asc")
H.h(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.aw(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aD(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jt:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$isc",[a2],"$asc")
H.h(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.d.a0(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a0(b+a0,2)
v=w-z
u=w+z
t=J.aw(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aD(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aD(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aD(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aD(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aD(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aD(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aD(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aD(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aD(a1.$2(p,o),0)){n=o
o=p
p=n}t.l(a,y,s)
t.l(a,w,q)
t.l(a,x,o)
t.l(a,v,t.i(a,b))
t.l(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.F(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.L()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.ae()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
l=h
m=g
break}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.L()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.ae()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.ae()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.L()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.l(a,b,t.i(a,c))
t.l(a,c,r)
c=l+1
t.l(a,a0,t.i(a,c))
t.l(a,c,p)
H.cf(a,b,m-2,a1,a2)
H.cf(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.F(a1.$2(t.i(a,m),r),0);)++m
for(;J.F(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.L()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cf(a,m,l,a1,a2)}else H.cf(a,m,l,a1,a2)},
a6:{"^":"k5;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.b.Z(this.a,b)},
$ascE:function(){return[P.m]},
$asx:function(){return[P.m]},
$ask:function(){return[P.m]},
$asc:function(){return[P.m]}},
hR:{"^":"k;"},
et:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z,y,x,w
z=this.a
y=J.aw(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b9(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iw:{"^":"k;a,b,$ti",
ga1:function(a){return new H.ix(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.ap(this.a)},
K:function(a,b){return this.b.$1(J.cT(this.a,b))},
$ask:function(a,b){return[b]}},
ix:{"^":"d4;0a,b,c,$ti",
I:function(){var z=this.b
if(z.I()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$asd4:function(a,b){return[b]}},
kB:{"^":"k;a,b,$ti",
ga1:function(a){return new H.kC(J.bE(this.a),this.b,this.$ti)}},
kC:{"^":"d4;a,b,$ti",
I:function(){var z,y
for(z=this.a,y=this.b;z.I();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
ct:{"^":"b;$ti"},
cE:{"^":"b;$ti",
l:function(a,b,c){H.E(b)
H.z(c,H.aC(this,"cE",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aA:function(a,b,c,d){H.z(d,H.aC(this,"cE",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
k5:{"^":"cx+cE;"}}],["","",,H,{"^":"",
hG:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mT:function(a){return init.types[H.E(a)]},
h5:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.a5(a))
return z},
bR:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j0:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.K(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bi:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$isci){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aC(w,1)
r=H.dL(H.c4(H.b6(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iT:function(){if(!!self.location)return self.location.href
return},
eC:function(a){var z,y,x,w,v
H.c4(a)
z=J.ap(a)
if(typeof z!=="number")return z.er()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j1:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a5(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aL(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a5(w))}return H.eC(z)},
eD:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a5(x))
if(x<0)throw H.a(H.a5(x))
if(x>65535)return H.j1(a)}return H.eC(a)},
j2:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.er()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cA:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aL(z,10))>>>0,56320|z&1023)}}throw H.a(P.a1(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j_:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
iY:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
iU:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
iV:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
iX:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
iZ:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
iW:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a5(a))},
d:function(a,b){if(a==null)J.ap(a)
throw H.a(H.aM(a,b))},
aM:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.E(J.ap(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.T(b,a,"index",null,z)
return P.ce(b,"index",null)},
mP:function(a,b,c){if(a>c)return new P.cB(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cB(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
a5:function(a){return new P.aN(!0,a,null,null)},
mE:function(a){if(typeof a!=="number")throw H.a(H.a5(a))
return a},
a:function(a){var z
if(a==null)a=new P.ez()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hg})
z.name=""}else z.toString=H.hg
return z},
hg:function(){return J.ac(this.dartException)},
q:function(a){throw H.a(a)},
D:function(a){throw H.a(P.b9(a))},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aL(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d7(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ey(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eV()
u=$.$get$eW()
t=$.$get$eX()
s=$.$get$eY()
r=$.$get$f1()
q=$.$get$f2()
p=$.$get$f_()
$.$get$eZ()
o=$.$get$f4()
n=$.$get$f3()
m=v.aa(y)
if(m!=null)return z.$1(H.d7(H.K(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.d7(H.K(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ey(H.K(y),m))}}return z.$1(new H.k4(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eI()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eI()
return a},
bC:function(a){var z
if(a==null)return new H.fz(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fz(a)},
mS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
n_:function(a,b,c,d,e,f){H.f(a,"$isd2")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n_)
a.$identity=z
return z},
hC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.j7(z).r}else x=d
w=e?Object.create(new H.jy().constructor.prototype):Object.create(new H.cW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.B()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e5(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dZ:H.cX
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e5(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hz:function(a,b,c,d){var z=H.cX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e5:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hz(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.B()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bF
if(v==null){v=H.co("self")
$.bF=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.B()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bF
if(v==null){v=H.co("self")
$.bF=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hA:function(a,b,c,d){var z,y
z=H.cX
y=H.dZ
switch(b?-1:a){case 0:throw H.a(H.jh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hB:function(a,b){var z,y,x,w,v,u,t,s
z=$.bF
if(z==null){z=H.co("self")
$.bF=z}y=$.dY
if(y==null){y=H.co("receiver")
$.dY=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hA(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aF
if(typeof y!=="number")return y.B()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.B()
$.aF=y+1
return new Function(z+y+"}")()},
dF:function(a,b,c,d,e,f,g){var z,y
z=J.bJ(H.c4(b))
H.E(c)
y=!!J.I(d).$isc?J.bJ(d):d
return H.hC(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
mQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
h9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
fW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
dP:function(a,b){throw H.a(H.aB(a,H.K(b).substring(3)))},
nh:function(a,b){var z=J.aw(b)
throw H.a(H.hy(a,z.w(b,3,z.gm(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.dP(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.nh(a,b)},
ha:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.I(a)[b])return a
H.dP(a,b)},
c4:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.aB(a,"List"))},
h7:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.dP(a,b)},
h_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
cj:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h_(J.I(a))
if(z==null)return!1
y=H.h4(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dB)return a
$.dB=!0
try{if(H.cj(a,b))return a
z=H.cm(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dB=!1}},
dI:function(a,b){if(a!=null&&!H.dE(a,b))H.q(H.aB(a,H.cm(b)))
return a},
fR:function(a){var z
if(a instanceof H.n){z=H.h_(J.I(a))
if(z!=null)return H.cm(z)
return"Closure"}return H.bi(a)},
nn:function(a){throw H.a(new P.hJ(H.K(a)))},
h2:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b6:function(a){if(a==null)return
return a.$ti},
pt:function(a,b,c){return H.bD(a["$as"+H.l(c)],H.b6(b))},
b5:function(a,b,c,d){var z
H.K(c)
H.E(d)
z=H.bD(a["$as"+H.l(c)],H.b6(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.K(b)
H.E(c)
z=H.bD(a["$as"+H.l(b)],H.b6(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.E(b)
z=H.b6(a)
return z==null?null:z[b]},
cm:function(a){var z=H.b7(a,null)
return z},
b7:function(a,b){var z,y
H.v(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dL(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mt(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b7(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b7(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b7(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b7(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.b7(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dL:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.as("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b7(u,c)}v="<"+z.j(0)+">"
return v},
bD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bz:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b6(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fU(H.bD(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.K(b)
H.c4(c)
H.K(d)
if(a==null)return a
z=H.bz(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dL(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ax(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ax(a[y],b,c[y],d))return!1
return!0},
pr:function(a,b,c){return a.apply(b,H.bD(J.I(b)["$as"+H.l(c)],H.b6(b)))},
h6:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.h6(z)}return!1},
dE:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.h6(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cj(a,b)}y=J.I(a).constructor
x=H.b6(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ax(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dE(a,b))throw H.a(H.aB(a,H.cm(b)))
return a},
ax:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.h4(a,b,c,d)
if('func' in a)return c.builtin$cls==="d2"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,x,d)
else if(H.ax(a,b,x,d))return!0
else{if(!('$is'+"bH" in y.prototype))return!1
w=y.prototype["$as"+"bH"]
v=H.bD(w,z?a.slice(1):null)
return H.ax(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cm(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fU(H.bD(r,z),b,u,d)},
h4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ax(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ax(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ax(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nf(m,b,l,d)},
nf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ax(c[w],d,a[w],b))return!1}return!0},
ps:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
n4:function(a){var z,y,x,w,v,u
z=H.K($.h3.$1(a))
y=$.cL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.fT.$2(a,z))
if(z!=null){y=$.cL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cP(x)
$.cL[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cO[z]=x
return x}if(v==="-"){u=H.cP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hb(a,x)
if(v==="*")throw H.a(P.ch(z))
if(init.leafTags[z]===true){u=H.cP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hb(a,x)},
hb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dM(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cP:function(a){return J.dM(a,!1,null,!!a.$isG)},
ne:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cP(z)
else return J.dM(z,c,null,null)},
mY:function(){if(!0===$.dK)return
$.dK=!0
H.mZ()},
mZ:function(){var z,y,x,w,v,u,t,s
$.cL=Object.create(null)
$.cO=Object.create(null)
H.mU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hc.$1(v)
if(u!=null){t=H.ne(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mU:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.by(C.J,H.by(C.O,H.by(C.u,H.by(C.u,H.by(C.N,H.by(C.K,H.by(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h3=new H.mV(v)
$.fT=new H.mW(u)
$.hc=new H.mX(t)},
by:function(a,b){return a(b)||b},
he:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hf:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hF:{"^":"b;$ti",
j:function(a){return P.d9(this)},
l:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hG()},
$isJ:1},
hH:{"^":"hF;a,b,c,$ti",
gm:function(a){return this.a},
bv:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bv(0,b))return
return this.dc(b)},
dc:function(a){return this.b[H.K(a)]},
N:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.dc(v),z))}}},
j6:{"^":"b;a,b,c,d,e,f,r,0x",t:{
j7:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.j6(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jR:{"^":"b;a,b,c,d,e,f",
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
t:{
aK:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f0:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iO:{"^":"a7;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
ey:function(a,b){return new H.iO(a,b==null?null:b.method)}}},
ib:{"^":"a7;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
t:{
d7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ib(a,y,z?null:b.receiver)}}},
k4:{"^":"a7;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nq:{"^":"n:18;a",
$1:function(a){if(!!J.I(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fz:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
n:{"^":"b;",
j:function(a){return"Closure '"+H.bi(this).trim()+"'"},
geo:function(){return this},
$isd2:1,
geo:function(){return this}},
eN:{"^":"n;"},
jy:{"^":"eN;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cW:{"^":"eN;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bR(this.a)
else y=typeof z!=="object"?J.b8(z):H.bR(z)
return(y^H.bR(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bi(z)+"'")},
t:{
cX:function(a){return a.a},
dZ:function(a){return a.c},
co:function(a){var z,y,x,w,v
z=new H.cW("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jS:{"^":"a7;a",
j:function(a){return this.a},
t:{
aB:function(a,b){return new H.jS("TypeError: "+H.l(P.cs(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
hx:{"^":"a7;a",
j:function(a){return this.a},
t:{
hy:function(a,b){return new H.hx("CastError: "+H.l(P.cs(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
jg:{"^":"a7;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
t:{
jh:function(a){return new H.jg(a)}}},
b3:{"^":"it;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gap:function(a){return new H.ih(this,[H.y(this,0)])},
bv:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d8(y,b)}else return this.hV(b)},
hV:function(a){var z=this.d
if(z==null)return!1
return this.cB(this.c_(z,this.cA(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bm(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bm(w,b)
x=y==null?null:y.b
return x}else return this.hW(b)},
hW:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c_(z,this.cA(a))
x=this.cB(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c3()
this.b=z}this.d1(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c3()
this.c=y}this.d1(y,b,c)}else this.hX(b,c)},
hX:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.c3()
this.d=z}y=this.cA(a)
x=this.c_(z,y)
if(x==null)this.c9(z,y,[this.c4(a,b)])
else{w=this.cB(x,a)
if(w>=0)x[w].b=b
else x.push(this.c4(a,b))}},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b9(this))
z=z.c}},
d1:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bm(a,b)
if(z==null)this.c9(a,b,this.c4(b,c))
else z.b=c},
f5:function(){this.r=this.r+1&67108863},
c4:function(a,b){var z,y
z=new H.ig(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f5()
return z},
cA:function(a){return J.b8(a)&0x3ffffff},
cB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
j:function(a){return P.d9(this)},
bm:function(a,b){return a[b]},
c_:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
d8:function(a,b){return this.bm(a,b)!=null},
c3:function(){var z=Object.create(null)
this.c9(z,"<non-identifier-key>",z)
this.eY(z,"<non-identifier-key>")
return z},
$iser:1},
ig:{"^":"b;a,b,0c,0d"},
ih:{"^":"hR;a,$ti",
gm:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.ii(z,z.r,this.$ti)
y.c=z.e
return y}},
ii:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mV:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
mW:{"^":"n:42;a",
$2:function(a,b){return this.a(a,b)}},
mX:{"^":"n:43;a",
$1:function(a){return this.a(H.K(a))}},
i9:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseA:1,
$isj8:1,
t:{
ia:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mR:function(a){return J.el(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ng:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bw:function(a){return a},
iK:function(a){return new Int8Array(a)},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aM(b,a))},
mn:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mP(a,b,c))
return b},
ex:{"^":"r;",$isex:1,"%":"ArrayBuffer"},
de:{"^":"r;",$isde:1,$isjT:1,"%":"DataView;ArrayBufferView;dd|ft|fu|iL|fv|fw|b4"},
dd:{"^":"de;",
gm:function(a){return a.length},
$isG:1,
$asG:I.dH},
iL:{"^":"fu;",
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
l:function(a,b,c){H.E(b)
H.mQ(c)
H.aL(b,a,a.length)
a[b]=c},
$asct:function(){return[P.u]},
$asx:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
b4:{"^":"fw;",
l:function(a,b,c){H.E(b)
H.E(c)
H.aL(b,a,a.length)
a[b]=c},
$asct:function(){return[P.m]},
$asx:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
ox:{"^":"b4;",
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oy:{"^":"b4;",
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oz:{"^":"b4;",
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oA:{"^":"b4;",
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oB:{"^":"b4;",
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oC:{"^":"b4;",
gm:function(a){return a.length},
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
df:{"^":"b4;",
gm:function(a){return a.length},
i:function(a,b){H.aL(b,a,a.length)
return a[b]},
bS:function(a,b,c){return new Uint8Array(a.subarray(b,H.mn(b,c,a.length)))},
$isdf:1,
$isS:1,
"%":";Uint8Array"},
ft:{"^":"dd+x;"},
fu:{"^":"ft+ct;"},
fv:{"^":"dd+x;"},
fw:{"^":"fv+ct;"}}],["","",,P,{"^":"",
kE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bA(new P.kG(z),1)).observe(y,{childList:true})
return new P.kF(z,y,x)}else if(self.setImmediate!=null)return P.mC()
return P.mD()},
pg:[function(a){self.scheduleImmediate(H.bA(new P.kH(H.h(a,{func:1,ret:-1})),0))},"$1","mB",4,0,11],
ph:[function(a){self.setImmediate(H.bA(new P.kI(H.h(a,{func:1,ret:-1})),0))},"$1","mC",4,0,11],
pi:[function(a){P.dn(C.r,H.h(a,{func:1,ret:-1}))},"$1","mD",4,0,11],
dn:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a0(a.a,1000)
return P.lH(z<0?0:z,b)},
eQ:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bp]})
z=C.d.a0(a.a,1000)
return P.lI(z<0?0:z,b)},
mx:function(a,b){if(H.cj(a,{func:1,args:[P.b,P.aA]}))return b.ik(a,null,P.b,P.aA)
if(H.cj(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cn(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mw:function(){var z,y
for(;z=$.bx,z!=null;){$.c2=null
y=z.b
$.bx=y
if(y==null)$.c1=null
z.a.$0()}},
pq:[function(){$.dC=!0
try{P.mw()}finally{$.c2=null
$.dC=!1
if($.bx!=null)$.$get$dw().$1(P.fV())}},"$0","fV",0,0,3],
fQ:function(a){var z=new P.fm(H.h(a,{func:1,ret:-1}))
if($.bx==null){$.c1=z
$.bx=z
if(!$.dC)$.$get$dw().$1(P.fV())}else{$.c1.b=z
$.c1=z}},
mA:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bx
if(z==null){P.fQ(a)
$.c2=$.c1
return}y=new P.fm(a)
x=$.c2
if(x==null){y.b=z
$.c2=y
$.bx=y}else{y.b=x.b
x.b=y
$.c2=y
if(y.b==null)$.c1=y}},
ni:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.V
if(C.j===y){P.cK(null,null,C.j,a)
return}y.toString
P.cK(null,null,y,H.h(y.cf(a),z))},
jN:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.V
if(y===C.j){y.toString
return P.dn(a,b)}return P.dn(a,H.h(y.cf(b),z))},
jO:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bp]}
H.h(b,z)
y=$.V
if(y===C.j){y.toString
return P.eQ(a,b)}x=y.du(b,P.bp)
$.V.toString
return P.eQ(a,H.h(x,z))},
cJ:function(a,b,c,d,e){var z={}
z.a=d
P.mA(new P.my(z,e))},
fM:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fN:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mz:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cK:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cf(d):c.hz(d,-1)
P.fQ(d)},
kG:{"^":"n:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kF:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kH:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kI:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fC:{"^":"b;a,0b,c",
eL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bA(new P.lK(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bA(new P.lJ(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbp:1,
t:{
lH:function(a,b){var z=new P.fC(!0,0)
z.eL(a,b)
return z},
lI:function(a,b){var z=new P.fC(!1,0)
z.eM(a,b)
return z}}},
lK:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lJ:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ez(w,x)}z.c=y
this.d.$1(z)}},
bv:{"^":"b;0a,b,c,d,e,$ti",
i1:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.h(this.d,{func:1,ret:P.al,args:[P.b]}),a.a,P.al,P.b)},
hU:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cj(z,{func:1,args:[P.b,P.aA]}))return H.dI(w.it(z,a.a,a.b,null,y,P.aA),x)
else return H.dI(w.cO(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aZ:{"^":"b;dl:a<,b,0fN:c<,$ti",
ej:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mx(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aZ(0,$.V,[c])
w=b==null?1:3
this.d2(new P.bv(x,w,a,b,[z,c]))
return x},
iy:function(a,b){return this.ej(a,null,b)},
d2:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbv")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaZ")
z=y.a
if(z<4){y.d2(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cK(null,null,z,H.h(new P.kX(this,a),{func:1,ret:-1}))}},
dh:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbv")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaZ")
y=u.a
if(y<4){u.dh(a)
return}this.a=y
this.c=u.c}z.a=this.bp(a)
y=this.b
y.toString
P.cK(null,null,y,H.h(new P.l1(z,this),{func:1,ret:-1}))}},
c6:function(){var z=H.f(this.c,"$isbv")
this.c=null
return this.bp(z)},
bp:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d5:function(a){var z,y,x,w
z=H.y(this,0)
H.dI(a,{futureOr:1,type:z})
y=this.$ti
x=H.bz(a,"$isbH",y,"$asbH")
if(x){z=H.bz(a,"$isaZ",y,null)
if(z)P.fp(a,this)
else P.kY(a,this)}else{w=this.c6()
H.z(a,z)
this.a=4
this.c=a
P.bX(this,w)}},
bW:[function(a,b){var z
H.f(b,"$isaA")
z=this.c6()
this.a=8
this.c=new P.aq(a,b)
P.bX(this,z)},function(a){return this.bW(a,null)},"iG","$2","$1","geU",4,2,28],
$isbH:1,
t:{
kY:function(a,b){var z,y,x
b.a=1
try{a.ej(new P.kZ(b),new P.l_(b),null)}catch(x){z=H.ay(x)
y=H.bC(x)
P.ni(new P.l0(b,z,y))}},
fp:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaZ")
if(z>=4){y=b.c6()
b.a=a.a
b.c=a.c
P.bX(b,y)}else{y=H.f(b.c,"$isbv")
b.a=2
b.c=a
a.dh(y)}},
bX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isaq")
y=y.b
u=v.a
t=v.b
y.toString
P.cJ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bX(z.a,b)}y=z.a
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
if(p){H.f(r,"$isaq")
y=y.b
u=r.a
t=r.b
y.toString
P.cJ(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.l4(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l3(x,b,r).$0()}else if((y&2)!==0)new P.l2(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.I(y).$isbH){if(y.a>=4){n=H.f(t.c,"$isbv")
t.c=null
b=t.bp(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fp(y,t)
return}}m=b.b
n=H.f(m.c,"$isbv")
m.c=null
b=m.bp(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isaq")
m.a=8
m.c=u}z.a=m
y=m}}}},
kX:{"^":"n:0;a,b",
$0:function(){P.bX(this.a,this.b)}},
l1:{"^":"n:0;a,b",
$0:function(){P.bX(this.b,this.a.a)}},
kZ:{"^":"n:20;a",
$1:function(a){var z=this.a
z.a=0
z.d5(a)}},
l_:{"^":"n:52;a",
$2:function(a,b){this.a.bW(a,H.f(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
l0:{"^":"n:0;a,b,c",
$0:function(){this.a.bW(this.b,this.c)}},
l4:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eh(H.h(w.d,{func:1}),null)}catch(v){y=H.ay(v)
x=H.bC(v)
if(this.d){w=H.f(this.a.a.c,"$isaq").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isaq")
else u.b=new P.aq(y,x)
u.a=!0
return}if(!!J.I(z).$isbH){if(z instanceof P.aZ&&z.gdl()>=4){if(z.gdl()===8){w=this.b
w.b=H.f(z.gfN(),"$isaq")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iy(new P.l5(t),null)
w.a=!1}}},
l5:{"^":"n:30;a",
$1:function(a){return this.a}},
l3:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cO(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ay(t)
y=H.bC(t)
x=this.a
x.b=new P.aq(z,y)
x.a=!0}}},
l2:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isaq")
w=this.c
if(w.i1(z)&&w.e!=null){v=this.b
v.b=w.hU(z)
v.a=!1}}catch(u){y=H.ay(u)
x=H.bC(u)
w=H.f(this.a.a.c,"$isaq")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aq(y,x)
s.a=!0}}},
fm:{"^":"b;a,0b"},
dj:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.aZ(0,$.V,[P.m])
z.a=0
this.i_(new P.jB(z,this),!0,new P.jC(z,y),y.geU())
return y}},
jB:{"^":"n;a,b",
$1:function(a){H.z(a,H.aC(this.b,"dj",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aC(this.b,"dj",0)]}}},
jC:{"^":"n:0;a,b",
$0:function(){this.b.d5(this.a.a)}},
eK:{"^":"b;$ti"},
jA:{"^":"b;"},
bp:{"^":"b;"},
aq:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa7:1},
mb:{"^":"b;",$ispf:1},
my:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ez()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
lp:{"^":"mb;",
iu:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.V){a.$0()
return}P.fM(null,null,this,a,-1)}catch(x){z=H.ay(x)
y=H.bC(x)
P.cJ(null,null,this,z,H.f(y,"$isaA"))}},
iv:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.V){a.$1(b)
return}P.fN(null,null,this,a,b,-1,c)}catch(x){z=H.ay(x)
y=H.bC(x)
P.cJ(null,null,this,z,H.f(y,"$isaA"))}},
hz:function(a,b){return new P.lr(this,H.h(a,{func:1,ret:b}),b)},
cf:function(a){return new P.lq(this,H.h(a,{func:1,ret:-1}))},
du:function(a,b){return new P.ls(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
eh:function(a,b){H.h(a,{func:1,ret:b})
if($.V===C.j)return a.$0()
return P.fM(null,null,this,a,b)},
cO:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.V===C.j)return a.$1(b)
return P.fN(null,null,this,a,b,c,d)},
it:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.V===C.j)return a.$2(b,c)
return P.mz(null,null,this,a,b,c,d,e,f)},
ik:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lr:{"^":"n;a,b,c",
$0:function(){return this.a.eh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lq:{"^":"n:3;a,b",
$0:function(){return this.a.iu(this.b)}},
ls:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.iv(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ij:function(a,b,c,d,e){return new H.b3(0,0,[d,e])},
ik:function(a,b,c){H.c4(a)
return H.v(H.mS(a,new H.b3(0,0,[b,c])),"$iser",[b,c],"$aser")},
es:function(a,b){return new H.b3(0,0,[a,b])},
io:function(a,b,c,d){return new P.lb(0,0,[d])},
i5:function(a,b,c){var z,y
if(P.dD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c3()
C.a.h(y,a)
try{P.mv(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eL(b,H.h7(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
d3:function(a,b,c){var z,y,x
if(P.dD(a))return b+"..."+c
z=new P.as(b)
y=$.$get$c3()
C.a.h(y,a)
try{x=z
x.a=P.eL(x.gaH(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaH()+c
y=z.gaH()
return y.charCodeAt(0)==0?y:y},
dD:function(a){var z,y
for(z=0;y=$.$get$c3(),z<y.length;++z)if(a===y[z])return!0
return!1},
mv:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
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
il:function(a,b,c){var z=P.ij(null,null,null,b,c)
a.N(0,new P.im(z,b,c))
return z},
d9:function(a){var z,y,x
z={}
if(P.dD(a))return"{...}"
y=new P.as("")
try{C.a.h($.$get$c3(),a)
x=y
x.a=x.gaH()+"{"
z.a=!0
J.dS(a,new P.iu(z,y))
z=y
z.a=z.gaH()+"}"}finally{z=$.$get$c3()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaH()
return z.charCodeAt(0)==0?z:z},
lb:{"^":"l6;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){return P.fs(this,this.r,H.y(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dy()
this.b=z}return this.d3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dy()
this.c=y}return this.d3(y,b)}else return this.eN(0,b)},
eN:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dy()
this.d=z}y=this.d6(b)
x=z[y]
if(x==null)z[y]=[this.bV(b)]
else{if(this.dd(x,b)>=0)return!1
x.push(this.bV(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.di(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.di(this.c,b)
else return this.fE(0,b)},
fE:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f1(z,b)
x=this.dd(y,b)
if(x<0)return!1
this.dn(y.splice(x,1)[0])
return!0},
d3:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdx")!=null)return!1
a[b]=this.bV(b)
return!0},
di:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdx")
if(z==null)return!1
this.dn(z)
delete a[b]
return!0},
d4:function(){this.r=this.r+1&67108863},
bV:function(a){var z,y
z=new P.dx(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d4()
return z},
dn:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d4()},
d6:function(a){return J.b8(a)&0x3ffffff},
f1:function(a,b){return a[this.d6(b)]},
dd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
t:{
dy:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dx:{"^":"b;a,0b,0c"},
lc:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
I:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
t:{
fs:function(a,b,c){var z=new P.lc(a,b,[c])
z.c=a.e
return z}}},
l6:{"^":"ji;"},
im:{"^":"n:7;a,b,c",
$2:function(a,b){this.a.l(0,H.z(a,this.b),H.z(b,this.c))}},
cx:{"^":"ld;",$isk:1,$isc:1},
x:{"^":"b;$ti",
ga1:function(a){return new H.et(a,this.gm(a),0,[H.b5(this,a,"x",0)])},
K:function(a,b){return this.i(a,b)},
iA:function(a,b){var z,y,x
z=H.e([],[H.b5(this,a,"x",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
cP:function(a){return this.iA(a,!0)},
aA:function(a,b,c,d){var z
H.z(d,H.b5(this,a,"x",0))
P.aR(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.d3(a,"[","]")}},
it:{"^":"an;"},
iu:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
an:{"^":"b;$ti",
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.b5(this,a,"an",0),H.b5(this,a,"an",1)]})
for(z=J.bE(this.gap(a));z.I();){y=z.gS(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.ap(this.gap(a))},
j:function(a){return P.d9(a)},
$isJ:1},
lP:{"^":"b;$ti",
l:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
iv:{"^":"b;$ti",
i:function(a,b){return J.dR(this.a,b)},
l:function(a,b,c){J.cR(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
N:function(a,b){J.dS(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ap(this.a)},
j:function(a){return J.ac(this.a)},
$isJ:1},
fb:{"^":"lQ;a,$ti"},
jk:{"^":"b;$ti",
j:function(a){return P.d3(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dU("index"))
if(b<0)H.q(P.a1(b,0,null,"index",null))
for(z=P.fs(this,this.r,H.y(this,0)),y=0;z.I();){x=z.d
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
$isk:1},
ji:{"^":"jk;"},
ld:{"^":"b+x;"},
lQ:{"^":"iv+lP;$ti"}}],["","",,P,{"^":"",hu:{"^":"c6;a",
i3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aR(c,d,b.length,null,null,null)
z=$.$get$fn()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cN(C.b.H(b,s))
o=H.cN(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.as("")
w.a+=C.b.w(b,x,y)
w.a+=H.cA(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.dX(b,u,d,v,t,k)
else{j=C.d.bj(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aY(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dX(b,u,d,v,t,i)
else{j=C.d.bj(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aY(b,d,d,j===2?"==":"=")}return b},
$asc6:function(){return[[P.c,P.m],P.i]},
t:{
dX:function(a,b,c,d,e,f){if(C.d.bj(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hv:{"^":"bG;a",
$asbG:function(){return[[P.c,P.m],P.i]}},c6:{"^":"b;$ti"},bG:{"^":"jA;$ti"},hT:{"^":"c6;",
$asc6:function(){return[P.i,[P.c,P.m]]}},ki:{"^":"hT;a",
ghM:function(){return C.F}},kp:{"^":"bG;",
b5:function(a,b,c){var z,y,x,w
z=a.length
P.aR(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ma(0,0,x)
if(w.f_(a,b,z)!==z)w.dr(J.hl(a,z-1),0)
return C.V.bS(x,0,w.b)},
cm:function(a){return this.b5(a,0,null)},
$asbG:function(){return[P.i,[P.c,P.m]]}},ma:{"^":"b;a,b,c",
dr:function(a,b){var z,y,x,w,v
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
f_:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dr(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kj:{"^":"bG;a",
b5:function(a,b,c){var z,y,x,w,v
H.v(a,"$isc",[P.m],"$asc")
z=P.kk(!1,a,b,c)
if(z!=null)return z
y=J.ap(a)
P.aR(b,c,y,null,null,null)
x=new P.as("")
w=new P.m7(!1,x,!0,0,0,0)
w.b5(a,b,y)
w.hQ(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cm:function(a){return this.b5(a,0,null)},
$asbG:function(){return[[P.c,P.m],P.i]},
t:{
kk:function(a,b,c,d){H.v(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kl(!1,b,c,d)
return},
kl:function(a,b,c,d){var z,y,x
z=$.$get$fg()
if(z==null)return
y=0===c
if(y&&!0)return P.dt(z,b)
x=b.length
d=P.aR(c,d,x,null,null,null)
if(y&&d===x)return P.dt(z,b)
return P.dt(z,b.subarray(c,d))},
dt:function(a,b){if(P.kn(b))return
return P.ko(a,b)},
ko:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ay(y)}return},
kn:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
km:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ay(y)}return}}},m7:{"^":"b;a,b,c,d,e,f",
hQ:function(a,b,c){var z
H.v(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m9(c)
v=new P.m8(this,b,c,a)
$label0$0:for(u=J.aw(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bP()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.d.be(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.a_("Overlong encoding of 0x"+C.d.be(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.d.be(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cA(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ae()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.d.be(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.d.be(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m9:{"^":"n:51;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aw(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bP()
if((w&127)!==w)return x-b}return z-b}},m8:{"^":"n:41;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cg(this.d,a,b)}}}],["","",,P,{"^":"",
cl:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.j0(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hV:function(a){var z=J.I(a)
if(!!z.$isn)return z.j(a)
return"Instance of '"+H.bi(a)+"'"},
ip:function(a,b,c,d){var z,y
H.z(b,d)
z=J.i7(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
iq:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga1(a);x.I();)C.a.h(y,H.z(x.gS(x),c))
if(b)return y
return H.v(J.bJ(y),"$isc",z,"$asc")},
cg:function(a,b,c){var z,y
z=P.m
H.v(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbe",[z],"$asbe")
y=a.length
c=P.aR(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.eD(z?C.a.bS(a,b,c):a)}if(!!J.I(a).$isdf)return H.j2(a,b,P.aR(b,c,a.length,null,null,null))
return P.jD(a,b,c)},
jD:function(a,b,c){var z,y,x,w
H.v(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.a1(b,0,J.ap(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a1(c,b,J.ap(a),null,null))
y=J.bE(a)
for(x=0;x<b;++x)if(!y.I())throw H.a(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.I();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.I())throw H.a(P.a1(c,b,x,null,null))
w.push(y.gS(y))}return H.eD(w)},
j9:function(a,b,c){return new H.i9(a,H.ia(a,!1,!0,!1))},
fd:function(){var z=H.iT()
if(z!=null)return P.ka(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cs:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hV(a)},
t:function(a){return new P.fo(a)},
ir:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dO:function(a){H.ng(a)},
ka:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fc(b>0||c<c?C.b.w(a,b,c):a,5,null).gel()
else if(y===32)return P.fc(C.b.w(a,z,c),0,null).gel()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.fO(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cU()
if(v>=b)if(P.fO(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.L()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.L()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.L()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a8(a,"..",s)))n=r>s+2&&C.b.a8(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a8(a,"file",b)){if(u<=b){if(!C.b.a8(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.w(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aY(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.aY(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.aY(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.w(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lu(a,v,u,t,s,r,q,o)}return P.lR(a,b,c,v,u,t,s,r,q,o)},
ff:function(a,b){var z=P.i
return C.a.hR(H.e(a.split("&"),[z]),P.es(z,z),new P.kd(b),[P.J,P.i,P.i])},
k8:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k9(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cl(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.ae()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cl(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.ae()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fe:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kb(a)
y=new P.kc(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaB(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k8(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.d.aL(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mo:function(){var z,y,x,w,v
z=P.ir(22,new P.mq(),!0,P.S)
y=new P.mp(z)
x=new P.mr()
w=new P.ms()
v=H.f(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isS"),"]",5)
v=H.f(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isS"),"az",21)
v=H.f(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fO:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isc",[P.m],"$asc")
z=$.$get$fP()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
al:{"^":"b;"},
"+bool":0,
ai:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a&&this.b===b.b},
aN:function(a,b){return C.d.aN(this.a,H.f(b,"$isai").a)},
gU:function(a){var z=this.a
return(z^C.d.aL(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hK(H.j_(this))
y=P.c7(H.iY(this))
x=P.c7(H.iU(this))
w=P.c7(H.iV(this))
v=P.c7(H.iX(this))
u=P.c7(H.iZ(this))
t=P.hL(H.iW(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isam:1,
$asam:function(){return[P.ai]},
t:{
hK:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c7:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"W;"},
"+double":0,
aG:{"^":"b;a",
k:function(a,b){return new P.aG(C.d.ac(this.a*b))},
L:function(a,b){return C.d.L(this.a,H.f(b,"$isaG").a)},
ae:function(a,b){return C.d.ae(this.a,H.f(b,"$isaG").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aG))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
aN:function(a,b){return C.d.aN(this.a,H.f(b,"$isaG").a)},
j:function(a){var z,y,x,w,v
z=new P.hQ()
y=this.a
if(y<0)return"-"+new P.aG(0-y).j(0)
x=z.$1(C.d.a0(y,6e7)%60)
w=z.$1(C.d.a0(y,1e6)%60)
v=new P.hP().$1(y%1e6)
return""+C.d.a0(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
$isam:1,
$asam:function(){return[P.aG]},
t:{
ef:function(a,b,c,d,e,f){return new P.aG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hP:{"^":"n:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hQ:{"^":"n:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"b;"},
ez:{"^":"a7;",
j:function(a){return"Throw of null."}},
aN:{"^":"a7;a,b,c,d",
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbY()+y+x
if(!this.a)return w
v=this.gbX()
u=P.cs(this.b)
return w+v+": "+H.l(u)},
t:{
c5:function(a){return new P.aN(!1,null,null,a)},
cn:function(a,b,c){return new P.aN(!0,a,b,c)},
dU:function(a){return new P.aN(!1,null,a,"Must not be null")}}},
cB:{"^":"aN;e,f,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
t:{
ce:function(a,b,c){return new P.cB(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
aR:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a1(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a1(b,a,c,"end",f))
return b}return c}}},
i3:{"^":"aN;e,m:f>,a,b,c,d",
gbY:function(){return"RangeError"},
gbX:function(){if(J.hh(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
t:{
T:function(a,b,c,d,e){var z=H.E(e!=null?e:J.ap(b))
return new P.i3(b,z,!0,a,c,"Index out of range")}}},
k6:{"^":"a7;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
B:function(a){return new P.k6(a)}}},
k3:{"^":"a7;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ch:function(a){return new P.k3(a)}}},
jx:{"^":"a7;a",
j:function(a){return"Bad state: "+this.a}},
hE:{"^":"a7;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cs(z))+"."},
t:{
b9:function(a){return new P.hE(a)}}},
iP:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa7:1},
eI:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa7:1},
hJ:{"^":"a7;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fo:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
i0:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Z(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a_:function(a,b,c){return new P.i0(a,b,c)}}},
m:{"^":"W;"},
"+int":0,
k:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga1(this)
for(y=0;z.I();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dU("index"))
if(b<0)H.q(P.a1(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.I();){x=z.gS(z)
if(b===y)return x;++y}throw H.a(P.T(b,this,"index",null,y))},
j:function(a){return P.i5(this,"(",")")}},
d4:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
W:{"^":"b;",$isam:1,
$asam:function(){return[P.W]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gU:function(a){return H.bR(this)},
j:function(a){return"Instance of '"+H.bi(this)+"'"},
toString:function(){return this.j(this)}},
aA:{"^":"b;"},
i:{"^":"b;",$isam:1,
$asam:function(){return[P.i]},
$iseA:1},
"+String":0,
as:{"^":"b;aH:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isp_:1,
t:{
eL:function(a,b,c){var z=J.bE(b)
if(!z.I())return a
if(c.length===0){do a+=H.l(z.gS(z))
while(z.I())}else{a+=H.l(z.gS(z))
for(;z.I();)a=a+c+H.l(z.gS(z))}return a}}},
kd:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.v(a,"$isJ",[z,z],"$asJ")
H.K(b)
y=J.aw(b).e1(b,"=")
if(y===-1){if(b!=="")J.cR(a,P.dA(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.aC(b,y+1)
z=this.a
J.cR(a,P.dA(x,0,x.length,z,!0),P.dA(w,0,w.length,z,!0))}return a}},
k9:{"^":"n:48;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
kb:{"^":"n:39;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kc:{"^":"n:29;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cl(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cG:{"^":"b;bR:a<,b,c,d,ec:e>,f,r,0x,0y,0z,0Q,0ch",
gem:function(){return this.b},
gcz:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbK:function(a){var z=this.d
if(z==null)return P.fE(this.a)
return z},
gcK:function(a){var z=this.f
return z==null?"":z},
gdX:function(){var z=this.r
return z==null?"":z},
cN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.i,null],"$asJ")
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
g=P.dz(g,0,0,h)
return new P.cG(i,j,c,f,d,g,this.r)},
eg:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gcL:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.fb(P.ff(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdY:function(){return this.c!=null},
ge0:function(){return this.f!=null},
gdZ:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isds){y=this.a
x=b.gbR()
if(y==null?x==null:y===x)if(this.c!=null===b.gdY()){y=this.b
x=b.gem()
if(y==null?x==null:y===x){y=this.gcz(this)
x=z.gcz(b)
if(y==null?x==null:y===x){y=this.gbK(this)
x=z.gbK(b)
if(y==null?x==null:y===x)if(this.e===z.gec(b)){y=this.f
x=y==null
if(!x===b.ge0()){if(x)y=""
if(y===z.gcK(b)){z=this.r
y=z==null
if(!y===b.gdZ()){if(y)z=""
z=z===b.gdX()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.j(0))
this.z=z}return z},
$isds:1,
t:{
cH:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fJ().b
if(typeof b!=="string")H.q(H.a5(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aC(c,"c6",0))
y=c.ghM().cm(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cA(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m1(a,b,d)
else{if(d===b)P.bZ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m2(a,z,e-1):""
x=P.lW(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lZ(P.cl(C.b.w(a,w,g),new P.lS(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lX(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.dz(a,h+1,i,null):null
return new P.cG(j,y,x,v,u,t,i<c?P.lV(a,i+1,c):null)},
fE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bZ:function(a,b,c){throw H.a(P.a_(c,a,b))},
lZ:function(a,b){if(a!=null&&a===P.fE(b))return
return a},
lW:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.Z(a,z)!==93)P.bZ(a,b,"Missing end `]` to match `[` in host")
P.fe(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.fe(a,b,c)
return"["+a+"]"}return P.m4(a,b,c)},
m4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fL(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.as("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.as("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bZ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.as("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fF(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m1:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fH(C.b.H(a,b)))P.bZ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bZ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.lT(y?a.toLowerCase():a)},
lT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m2:function(a,b,c){return P.c_(a,b,c,C.R)},
lX:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c_(a,b,c,C.y):C.t.jf(d,new P.lY(),P.i).G(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.m3(w,e,f)},
m3:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.m5(a,!z||c)
return P.m6(a)},
dz:function(a,b,c,d){var z,y
z={}
H.v(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c5("Both query and queryParameters specified"))
return P.c_(a,b,c,C.n)}if(d==null)return
y=new P.as("")
z.a=""
d.N(0,new P.m_(new P.m0(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lV:function(a,b,c){return P.c_(a,b,c,C.n)},
fL:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cN(y)
v=H.cN(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aL(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cA(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
fF:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.h_(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cg(y,0,null)},
c_:function(a,b,c,d){var z=P.fK(a,b,c,H.v(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.w(a,b,c):z},
fK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
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
if(u){P.bZ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fF(v)}}if(w==null)w=new P.as("")
w.a+=C.b.w(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fI:function(a){if(C.b.a7(a,"."))return!0
return C.b.e1(a,"/.")!==-1},
m6:function(a){var z,y,x,w,v,u,t
if(!P.fI(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.G(z,"/")},
m5:function(a,b){var z,y,x,w,v,u
if(!P.fI(a))return!b?P.fG(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaB(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaB(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.l(z,0,P.fG(z[0]))}return C.a.G(z,"/")},
fG:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fH(J.hi(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.aC(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lU:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c5("Invalid URL encoding"))}}return z},
dA:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dJ(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.a6(y.w(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c5("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c5("Truncated URI"))
C.a.h(u,P.lU(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isc",[P.m],"$asc")
return new P.kj(!1).cm(u)},
fH:function(a){var z=a|32
return 97<=z&&z<=122}}},
lS:{"^":"n:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
lY:{"^":"n:38;",
$1:function(a){return P.cH(C.T,a,C.k,!1)}},
m0:{"^":"n:19;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cH(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cH(C.p,b,C.k,!0))}}},
m_:{"^":"n:33;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.bE(H.h7(b,"$isk")),y=this.a;z.I();)y.$2(a,H.K(z.gS(z)))}},
k7:{"^":"b;a,b,c",
gel:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.e2(y,"?",z)
w=y.length
if(x>=0){v=P.c_(y,x+1,w,C.n)
w=x}else v=null
z=new P.kN(this,"data",null,null,null,P.c_(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fc:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaB(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.i3(0,a,s,y)
else{r=P.fK(a,s,y,C.n,!0)
if(r!=null)a=C.b.aY(a,s,y,r)}return new P.k7(a,z,c)}}},
mq:{"^":"n:27;",
$1:function(a){return new Uint8Array(96)}},
mp:{"^":"n:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hn(z,0,96,b)
return z}},
mr:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
ms:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lu:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdY:function(){return this.c>0},
ge_:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
ge0:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
gdZ:function(){return this.r<this.a.length},
gde:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdf:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbR:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gde()){this.x="http"
z="http"}else if(this.gdf()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gem:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gcz:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbK:function(a){var z
if(this.ge_()){z=this.d
if(typeof z!=="number")return z.B()
return P.cl(C.b.w(this.a,z+1,this.e),null,null)}if(this.gde())return 80
if(this.gdf())return 443
return 0},
gec:function(a){return C.b.w(this.a,this.e,this.f)},
gcK:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.w(this.a,z+1,y):""},
gdX:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aC(y,z+1):""},
gcL:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.U
z=P.i
return new P.fb(P.ff(this.gcK(this),C.k),[z,z])},
cN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.i,null],"$asJ")
i=this.gbR()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.ge_()?this.gbK(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.dz(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aC(y,x+1)
return new P.cG(i,j,c,f,d,g,b)},
eg:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isds)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isds:1},
kN:{"^":"cG;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cZ:function(a,b){var z=document.createElement("canvas")
return z},
hS:function(a){H.f(a,"$isa8")
return"wheel"},
i4:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$isek")
try{J.hp(z,a)}catch(x){H.ay(x)}return z},
cF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fr:function(a,b,c,d){var z,y
z=W.cF(W.cF(W.cF(W.cF(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fS:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.j)return a
return z.du(a,b)},
a9:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ns:{"^":"di;0q:x=,0u:y=","%":"Accelerometer|LinearAccelerationSensor"},
nt:{"^":"r;0m:length=","%":"AccessibleNodeList"},
nu:{"^":"a9;0a2:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nv:{"^":"a9;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cV:{"^":"r;",$iscV:1,"%":";Blob"},
nB:{"^":"a9;0a2:type}","%":"HTMLButtonElement"},
cY:{"^":"a9;",
bQ:function(a,b,c){if(c!=null)return a.getContext(b,P.mF(c,null))
return a.getContext(b)},
ep:function(a,b){return this.bQ(a,b,null)},
$iscY:1,
"%":"HTMLCanvasElement"},
e3:{"^":"r;",$ise3:1,"%":"CanvasRenderingContext2D"},
nD:{"^":"L;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nF:{"^":"cq;0m:length=","%":"CSSPerspective"},
nG:{"^":"d1;0q:x=,0u:y=","%":"CSSPositionValue"},
nH:{"^":"cq;0q:x=,0u:y=","%":"CSSRotation"},
ba:{"^":"r;",$isba:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nI:{"^":"cq;0q:x=,0u:y=","%":"CSSScale"},
nJ:{"^":"kM;0m:length=",
eq:function(a,b){var z=a.getPropertyValue(this.eR(a,b))
return z==null?"":z},
eR:function(a,b){var z,y
z=$.$get$e8()
y=z[b]
if(typeof y==="string")return y
y=this.h0(a,b)
z[b]=y
return y},
h0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hM()+b
if(z in a)return z
return b},
gcg:function(a){return a.bottom},
gao:function(a){return a.height},
gaU:function(a){return a.left},
gbc:function(a){return a.right},
gbg:function(a){return a.top},
gas:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hI:{"^":"b;",
gaU:function(a){return this.eq(a,"left")}},
d1:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cq:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nK:{"^":"d1;0m:length=","%":"CSSTransformValue"},
nL:{"^":"cq;0q:x=,0u:y=","%":"CSSTranslation"},
nM:{"^":"d1;0m:length=","%":"CSSUnparsedValue"},
nN:{"^":"r;0m:length=","%":"DataTransferItemList"},
nO:{"^":"r;0q:x=,0u:y=","%":"DeviceAcceleration"},
nP:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
nQ:{"^":"hN;",
gq:function(a){return a.x},
gu:function(a){return a.y},
"%":"DOMPoint"},
hN:{"^":"r;",
gq:function(a){return a.x},
gu:function(a){return a.y},
"%":";DOMPointReadOnly"},
nR:{"^":"kP;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.v(c,"$isaa",[P.W],"$asaa")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.aa,P.W]]},
$asx:function(){return[[P.aa,P.W]]},
$isk:1,
$ask:function(){return[[P.aa,P.W]]},
$isc:1,
$asc:function(){return[[P.aa,P.W]]},
$asC:function(){return[[P.aa,P.W]]},
"%":"ClientRectList|DOMRectList"},
hO:{"^":"r;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gas(a))+" x "+H.l(this.gao(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bz(b,"$isaa",[P.W],"$asaa")
if(!z)return!1
z=J.b0(b)
return a.left===z.gaU(b)&&a.top===z.gbg(b)&&this.gas(a)===z.gas(b)&&this.gao(a)===z.gao(b)},
gU:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gas(a)&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF)},
gcg:function(a){return a.bottom},
gao:function(a){return a.height},
gaU:function(a){return a.left},
gbc:function(a){return a.right},
gbg:function(a){return a.top},
gas:function(a){return a.width},
gq:function(a){return a.x},
gu:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.W]},
"%":";DOMRectReadOnly"},
nS:{"^":"kR;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
nT:{"^":"r;0m:length=","%":"DOMTokenList"},
kL:{"^":"cx;a,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.f(z[b],"$isa3")},
l:function(a,b,c){var z
H.E(b)
H.f(c,"$isa3")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.cP(this)
return new J.aE(z,z.length,0,[H.y(z,0)])},
aA:function(a,b,c,d){throw H.a(P.ch(null))},
$asx:function(){return[W.a3]},
$ask:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
a3:{"^":"L;",
gcl:function(a){return new W.kL(a,a.children)},
gbu:function(a){return P.j5(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
j:function(a){return a.localName},
$isa3:1,
"%":";Element"},
nU:{"^":"a9;0a2:type}","%":"HTMLEmbedElement"},
ad:{"^":"r;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a8:{"^":"r;",
ds:["ev",function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(c!=null)this.eO(a,b,c,!1)}],
eO:function(a,b,c,d){return a.addEventListener(b,H.bA(H.h(c,{func:1,args:[W.ad]}),1),!1)},
$isa8:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fx|fy|fA|fB"},
b2:{"^":"cV;",$isb2:1,"%":"File"},
eg:{"^":"kW;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isb2")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b2]},
$asx:function(){return[W.b2]},
$isk:1,
$ask:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$iseg:1,
$asC:function(){return[W.b2]},
"%":"FileList"},
oc:{"^":"a8;0m:length=","%":"FileWriter"},
of:{"^":"a9;0m:length=","%":"HTMLFormElement"},
bd:{"^":"r;",$isbd:1,"%":"Gamepad"},
og:{"^":"di;0q:x=,0u:y=","%":"Gyroscope"},
oh:{"^":"r;0m:length=","%":"History"},
oi:{"^":"l8;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c8:{"^":"r;0dz:data=",$isc8:1,"%":"ImageData"},
ej:{"^":"a9;",$isej:1,"%":"HTMLImageElement"},
ek:{"^":"a9;0a2:type}",$isek:1,"%":"HTMLInputElement"},
bK:{"^":"dp;",$isbK:1,"%":"KeyboardEvent"},
oo:{"^":"a9;0a2:type}","%":"HTMLLinkElement"},
op:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
oq:{"^":"di;0q:x=,0u:y=","%":"Magnetometer"},
os:{"^":"r;0m:length=","%":"MediaList"},
ot:{"^":"a8;",
ds:function(a,b,c,d){H.h(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.ev(a,b,c,!1)},
"%":"MessagePort"},
ou:{"^":"le;",
i:function(a,b){return P.b_(a.get(H.K(b)))},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b_(y.value[1]))}},
gap:function(a){var z=H.e([],[P.i])
this.N(a,new W.iH(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iH:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ov:{"^":"lf;",
i:function(a,b){return P.b_(a.get(H.K(b)))},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b_(y.value[1]))}},
gap:function(a){var z=H.e([],[P.i])
this.N(a,new W.iI(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iI:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"r;",$isbg:1,"%":"MimeType"},
ow:{"^":"lh;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"MimeTypeArray"},
aJ:{"^":"dp;",$isaJ:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kK:{"^":"cx;a",
l:function(a,b,c){var z,y
H.E(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.eh(z,z.length,-1,[H.b5(C.W,z,"C",0)])},
aA:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.L]},
$ask:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"a8;",
iq:function(a,b){var z,y
try{z=a.parentNode
J.hj(z,b,a)}catch(y){H.ay(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.ew(a):z},
fH:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iM:{"^":"lj;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
oE:{"^":"a9;0a2:type}","%":"HTMLOListElement"},
oF:{"^":"a9;0a2:type}","%":"HTMLObjectElement"},
bh:{"^":"r;0m:length=",$isbh:1,"%":"Plugin"},
oJ:{"^":"ln;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"PluginArray"},
oO:{"^":"r;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oP:{"^":"lt;",
i:function(a,b){return P.b_(a.get(H.K(b)))},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b_(y.value[1]))}},
gap:function(a){var z=H.e([],[P.i])
this.N(a,new W.jf(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
jf:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oR:{"^":"a9;0a2:type}","%":"HTMLScriptElement"},
oT:{"^":"a9;0m:length=","%":"HTMLSelectElement"},
di:{"^":"a8;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bj:{"^":"a8;",$isbj:1,"%":"SourceBuffer"},
oU:{"^":"fy;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"SourceBufferList"},
oV:{"^":"a9;0a2:type}","%":"HTMLSourceElement"},
bk:{"^":"r;",$isbk:1,"%":"SpeechGrammar"},
oW:{"^":"lw;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asx:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asC:function(){return[W.bk]},
"%":"SpeechGrammarList"},
bl:{"^":"r;0m:length=",$isbl:1,"%":"SpeechRecognitionResult"},
oY:{"^":"lz;",
i:function(a,b){return a.getItem(H.K(b))},
l:function(a,b,c){a.setItem(b,H.K(c))},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.e([],[P.i])
this.N(a,new W.jz(z))
return z},
gm:function(a){return a.length},
$asan:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
jz:{"^":"n:19;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p0:{"^":"a9;0a2:type}","%":"HTMLStyleElement"},
bm:{"^":"r;",$isbm:1,"%":"CSSStyleSheet|StyleSheet"},
dk:{"^":"a9;",$isdk:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bn:{"^":"a8;",$isbn:1,"%":"TextTrack"},
bo:{"^":"a8;",$isbo:1,"%":"TextTrackCue|VTTCue"},
p5:{"^":"lG;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbo")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asx:function(){return[W.bo]},
$isk:1,
$ask:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asC:function(){return[W.bo]},
"%":"TextTrackCueList"},
p6:{"^":"fB;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbn")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bn]},
$asx:function(){return[W.bn]},
$isk:1,
$ask:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asC:function(){return[W.bn]},
"%":"TextTrackList"},
p7:{"^":"r;0m:length=","%":"TimeRanges"},
bq:{"^":"r;",$isbq:1,"%":"Touch"},
br:{"^":"dp;",$isbr:1,"%":"TouchEvent"},
p8:{"^":"lM;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbq")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bq]},
$asx:function(){return[W.bq]},
$isk:1,
$ask:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asC:function(){return[W.bq]},
"%":"TouchList"},
p9:{"^":"r;0m:length=","%":"TrackDefaultList"},
dp:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pb:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
pd:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
pe:{"^":"a8;0m:length=","%":"VideoTrackList"},
bW:{"^":"aJ;",
ghI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghH:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbW:1,
"%":"WheelEvent"},
kD:{"^":"a8;",
fJ:function(a,b){return a.requestAnimationFrame(H.bA(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pj:{"^":"md;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isba")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"CSSRuleList"},
pk:{"^":"hO;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bz(b,"$isaa",[P.W],"$asaa")
if(!z)return!1
z=J.b0(b)
return a.left===z.gaU(b)&&a.top===z.gbg(b)&&a.width===z.gas(b)&&a.height===z.gao(b)},
gU:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gao:function(a){return a.height},
gas:function(a){return a.width},
gq:function(a){return a.x},
gu:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pm:{"^":"mf;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"GamepadList"},
pn:{"^":"mh;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
po:{"^":"mj;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbl")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asx:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"SpeechRecognitionResultList"},
pp:{"^":"ml;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.E(b)
H.f(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asx:function(){return[W.bm]},
$isk:1,
$ask:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asC:function(){return[W.bm]},
"%":"StyleSheetList"},
kS:{"^":"dj;a,b,c,$ti",
i_:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
pl:{"^":"kS;a,b,c,$ti"},
kT:{"^":"eK;a,b,c,d,e,$ti",
h4:function(){var z=this.d
if(z!=null&&this.a<=0)J.hk(this.b,this.c,z,!1)},
t:{
a2:function(a,b,c,d,e){var z=c==null?null:W.fS(new W.kU(c),W.ad)
z=new W.kT(0,a,b,z,!1,[e])
z.h4()
return z}}},
kU:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isad"))}},
C:{"^":"b;$ti",
ga1:function(a){return new W.eh(a,this.gm(a),-1,[H.b5(this,a,"C",0)])},
aA:function(a,b,c,d){H.z(d,H.b5(this,a,"C",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
eh:{"^":"b;a,b,c,0d,$ti",
I:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dR(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
kM:{"^":"r+hI;"},
kO:{"^":"r+x;"},
kP:{"^":"kO+C;"},
kQ:{"^":"r+x;"},
kR:{"^":"kQ+C;"},
kV:{"^":"r+x;"},
kW:{"^":"kV+C;"},
l7:{"^":"r+x;"},
l8:{"^":"l7+C;"},
le:{"^":"r+an;"},
lf:{"^":"r+an;"},
lg:{"^":"r+x;"},
lh:{"^":"lg+C;"},
li:{"^":"r+x;"},
lj:{"^":"li+C;"},
lm:{"^":"r+x;"},
ln:{"^":"lm+C;"},
lt:{"^":"r+an;"},
fx:{"^":"a8+x;"},
fy:{"^":"fx+C;"},
lv:{"^":"r+x;"},
lw:{"^":"lv+C;"},
lz:{"^":"r+an;"},
lF:{"^":"r+x;"},
lG:{"^":"lF+C;"},
fA:{"^":"a8+x;"},
fB:{"^":"fA+C;"},
lL:{"^":"r+x;"},
lM:{"^":"lL+C;"},
mc:{"^":"r+x;"},
md:{"^":"mc+C;"},
me:{"^":"r+x;"},
mf:{"^":"me+C;"},
mg:{"^":"r+x;"},
mh:{"^":"mg+C;"},
mi:{"^":"r+x;"},
mj:{"^":"mi+C;"},
mk:{"^":"r+x;"},
ml:{"^":"mk+C;"}}],["","",,P,{"^":"",
mI:function(a){var z,y
z=J.I(a)
if(!!z.$isc8){y=z.gdz(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fD(a.data,a.height,a.width)},
mH:function(a){if(a instanceof P.fD)return{data:a.a,height:a.b,width:a.c}
return a},
b_:function(a){var z,y,x,w,v
if(a==null)return
z=P.es(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.K(y[w])
z.l(0,v,a[v])}return z},
mF:function(a,b){var z={}
a.N(0,new P.mG(z))
return z},
ee:function(){var z=$.ed
if(z==null){z=J.cS(window.navigator.userAgent,"Opera",0)
$.ed=z}return z},
hM:function(){var z,y
z=$.ea
if(z!=null)return z
y=$.eb
if(y==null){y=J.cS(window.navigator.userAgent,"Firefox",0)
$.eb=y}if(y)z="-moz-"
else{y=$.ec
if(y==null){y=!P.ee()&&J.cS(window.navigator.userAgent,"Trident/",0)
$.ec=y}if(y)z="-ms-"
else z=P.ee()?"-o-":"-webkit-"}$.ea=z
return z},
lC:{"^":"b;",
dV:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cR:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isai)return new Date(a.a)
if(!!y.$isj8)throw H.a(P.ch("structured clone of RegExp"))
if(!!y.$isb2)return a
if(!!y.$iscV)return a
if(!!y.$iseg)return a
if(!!y.$isc8)return a
if(!!y.$isex||!!y.$isde)return a
if(!!y.$isJ){x=this.dV(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.N(a,new P.lE(z,this))
return z.a}if(!!y.$isc){x=this.dV(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hF(a,x)}throw H.a(P.ch("structured clone of other type"))},
hF:function(a,b){var z,y,x,w
z=J.aw(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.cR(z.i(a,w)))
return x}},
lE:{"^":"n:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.cR(b)}},
fD:{"^":"b;dz:a>,b,c",$isc8:1},
mG:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
lD:{"^":"lC;a,b"},
hY:{"^":"cx;a,b",
gbo:function(){var z,y,x
z=this.b
y=H.aC(z,"x",0)
x=W.a3
return new H.iw(new H.kB(z,H.h(new P.hZ(),{func:1,ret:P.al,args:[y]}),[y]),H.h(new P.i_(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.E(b)
H.f(c,"$isa3")
z=this.gbo()
J.ho(z.b.$1(J.cT(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aA:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gm:function(a){return J.ap(this.gbo().a)},
i:function(a,b){var z=this.gbo()
return z.b.$1(J.cT(z.a,b))},
ga1:function(a){var z=P.iq(this.gbo(),!1,W.a3)
return new J.aE(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a3]},
$ask:function(){return[W.a3]},
$asc:function(){return[W.a3]}},
hZ:{"^":"n:45;",
$1:function(a){return!!J.I(H.f(a,"$isL")).$isa3}},
i_:{"^":"n:47;",
$1:function(a){return H.j(H.f(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bP:{"^":"b;q:a>,u:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
v:function(a,b){var z,y,x
if(b==null)return!1
z=H.bz(b,"$isbP",[P.W],null)
if(!z)return!1
z=this.a
y=J.b0(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gu(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.b8(this.a)
y=J.b8(this.b)
return P.fq(P.bY(P.bY(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bP(z,H.z(x*b,y),this.$ti)}},
lo:{"^":"b;$ti",
gbc:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gcg:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bz(b,"$isaa",[P.W],"$asaa")
if(!z)return!1
z=this.a
y=J.b0(b)
x=y.gaU(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbg(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbc(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gcg(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.b8(z)
x=this.b
w=J.b8(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.fq(P.bY(P.bY(P.bY(P.bY(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dw:function(a,b){var z,y
H.v(b,"$isbP",[P.W],"$asbP")
z=b.a
y=this.a
if(typeof z!=="number")return z.cU()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cU()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"lo;aU:a>,bg:b>,as:c>,ao:d>,$ti",t:{
j5:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nV:{"^":"X;0q:x=,0u:y=","%":"SVGFEBlendElement"},nW:{"^":"X;0q:x=,0u:y=","%":"SVGFEColorMatrixElement"},nX:{"^":"X;0q:x=,0u:y=","%":"SVGFEComponentTransferElement"},nY:{"^":"X;0q:x=,0u:y=","%":"SVGFECompositeElement"},nZ:{"^":"X;0q:x=,0u:y=","%":"SVGFEConvolveMatrixElement"},o_:{"^":"X;0q:x=,0u:y=","%":"SVGFEDiffuseLightingElement"},o0:{"^":"X;0q:x=,0u:y=","%":"SVGFEDisplacementMapElement"},o1:{"^":"X;0q:x=,0u:y=","%":"SVGFEFloodElement"},o2:{"^":"X;0q:x=,0u:y=","%":"SVGFEGaussianBlurElement"},o3:{"^":"X;0q:x=,0u:y=","%":"SVGFEImageElement"},o4:{"^":"X;0q:x=,0u:y=","%":"SVGFEMergeElement"},o5:{"^":"X;0q:x=,0u:y=","%":"SVGFEMorphologyElement"},o6:{"^":"X;0q:x=,0u:y=","%":"SVGFEOffsetElement"},o7:{"^":"X;0q:x=,0u:y=","%":"SVGFEPointLightElement"},o8:{"^":"X;0q:x=,0u:y=","%":"SVGFESpecularLightingElement"},o9:{"^":"X;0q:x=,0u:y=","%":"SVGFESpotLightElement"},oa:{"^":"X;0q:x=,0u:y=","%":"SVGFETileElement"},ob:{"^":"X;0q:x=,0u:y=","%":"SVGFETurbulenceElement"},od:{"^":"X;0q:x=,0u:y=","%":"SVGFilterElement"},oe:{"^":"bI;0q:x=,0u:y=","%":"SVGForeignObjectElement"},i2:{"^":"bI;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bI:{"^":"X;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},oj:{"^":"bI;0q:x=,0u:y=","%":"SVGImageElement"},bL:{"^":"r;",$isbL:1,"%":"SVGLength"},on:{"^":"la;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.f(c,"$isbL")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asx:function(){return[P.bL]},
$isk:1,
$ask:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asC:function(){return[P.bL]},
"%":"SVGLengthList"},or:{"^":"X;0q:x=,0u:y=","%":"SVGMaskElement"},bO:{"^":"r;",$isbO:1,"%":"SVGNumber"},oD:{"^":"ll;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.f(c,"$isbO")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asx:function(){return[P.bO]},
$isk:1,
$ask:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asC:function(){return[P.bO]},
"%":"SVGNumberList"},oI:{"^":"X;0q:x=,0u:y=","%":"SVGPatternElement"},oK:{"^":"r;0q:x=,0u:y=","%":"SVGPoint"},oL:{"^":"r;0m:length=","%":"SVGPointList"},oM:{"^":"r;0q:x=,0u:y=","%":"SVGRect"},oN:{"^":"i2;0q:x=,0u:y=","%":"SVGRectElement"},oS:{"^":"X;0a2:type}","%":"SVGScriptElement"},oZ:{"^":"lB;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.K(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},p1:{"^":"X;0a2:type}","%":"SVGStyleElement"},X:{"^":"a3;",
gcl:function(a){return new P.hY(a,new W.kK(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},p2:{"^":"bI;0q:x=,0u:y=","%":"SVGSVGElement"},jE:{"^":"bI;","%":"SVGTextPathElement;SVGTextContentElement"},p4:{"^":"jE;0q:x=,0u:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bS:{"^":"r;",$isbS:1,"%":"SVGTransform"},pa:{"^":"lO;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.E(b)
H.f(c,"$isbS")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asx:function(){return[P.bS]},
$isk:1,
$ask:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asC:function(){return[P.bS]},
"%":"SVGTransformList"},pc:{"^":"bI;0q:x=,0u:y=","%":"SVGUseElement"},l9:{"^":"r+x;"},la:{"^":"l9+C;"},lk:{"^":"r+x;"},ll:{"^":"lk+C;"},lA:{"^":"r+x;"},lB:{"^":"lA+C;"},lN:{"^":"r+x;"},lO:{"^":"lN+C;"}}],["","",,P,{"^":"",S:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjT:1}}],["","",,P,{"^":"",nw:{"^":"r;0m:length=","%":"AudioBuffer"},dW:{"^":"a8;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nx:{"^":"kJ;",
i:function(a,b){return P.b_(a.get(H.K(b)))},
N:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b_(y.value[1]))}},
gap:function(a){var z=H.e([],[P.i])
this.N(a,new P.hs(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asan:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hs:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},ht:{"^":"dW;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},ny:{"^":"a8;0m:length=","%":"AudioTrackList"},hw:{"^":"a8;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nz:{"^":"dW;0a2:type}","%":"BiquadFilterNode"},oG:{"^":"hw;0m:length=","%":"OfflineAudioContext"},oH:{"^":"ht;0a2:type}","%":"Oscillator|OscillatorNode"},kJ:{"^":"r+an;"}}],["","",,P,{"^":"",dh:{"^":"r;",
ix:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc8)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mH(g))
return}if(!!z.$isej)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c5("Incorrect number or type of arguments"))},
iw:function(a,b,c,d,e,f,g){return this.ix(a,b,c,d,e,f,g,null,null,null)},
$isdh:1,
"%":"WebGLRenderingContext"},k1:{"^":"r;",$isk1:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oX:{"^":"ly;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.T(b,a,null,null,null))
return P.b_(a.item(b))},
l:function(a,b,c){H.E(b)
H.f(c,"$isJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asx:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asC:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lx:{"^":"r+x;"},ly:{"^":"lx+C;"}}],["","",,O,{"^":"",aO:{"^":"b;0a,0b,0c,0d,$ti",
bT:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cV:function(a,b,c){var z=H.aC(this,"aO",0)
H.h(b,{func:1,ret:P.al,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bk:function(a,b){return this.cV(a,null,b)},
fv:function(a){var z
H.v(a,"$isk",[H.aC(this,"aO",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eF:function(a,b){var z
H.v(b,"$isk",[H.aC(this,"aO",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.aE(z,z.length,0,[H.y(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aC(this,"aO",0)
H.z(b,z)
z=[z]
if(this.fv(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eF(x,H.e([b],z))}},
$isk:1,
t:{
d_:function(a){var z=new O.aO([a])
z.bT(a)
return z}}},db:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
eG:function(a){var z=this.b
if(!(z==null))z.E(a)},
aD:function(){return this.eG(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaB(z)
else return V.cd()},
ee:function(a){var z=this.a
if(a==null)C.a.h(z,V.cd())
else C.a.h(z,a)
this.aD()},
cJ:function(){var z=this.a
if(z.length>0){z.pop()
this.aD()}}}}],["","",,E,{"^":"",cU:{"^":"b;"},b1:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa5:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.h(this.geb(),{func:1,ret:-1,args:[D.w]})
C.a.J(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.h(this.geb(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}w=new D.Q("shape",z,this.c,this,[F.eH])
w.b=!0
this.ai(w)}},
sb8:function(a){var z,y,x,w
if(!J.F(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.h(this.gea(),{func:1,ret:-1,args:[D.w]})
C.a.J(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.h(this.gea(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}this.r=a
w=new D.Q("mover",z,a,this,[U.aj])
w.b=!0
this.ai(w)}},
ar:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.b_(0,b,this):null
if(!J.F(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.az])
w.b=!0
this.ai(w)}for(z=this.y.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.I();)z.d.ar(0,b)},
aX:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.k(0,z.ga_(z)))
z.aD()
a.ef(this.f)
z=a.dy
x=(z&&C.a).gaB(z)
if(x!=null&&this.d!=null)x.ip(a,this)
for(z=this.y.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.I();)z.d.aX(a)
a.ed()
a.dx.cJ()},
gD:function(){var z=this.z
if(z==null){z=D.P()
this.z=z}return z},
ai:function(a){var z=this.z
if(!(z==null))z.E(a)},
W:function(){return this.ai(null)},
i8:[function(a){H.f(a,"$isw")
this.e=null
this.ai(a)},function(){return this.i8(null)},"jl","$1","$0","geb",0,2,1],
i7:[function(a){this.ai(H.f(a,"$isw"))},function(){return this.i7(null)},"jk","$1","$0","gea",0,2,1],
i5:[function(a){this.ai(H.f(a,"$isw"))},function(){return this.i5(null)},"ji","$1","$0","ge9",0,2,1],
jh:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isk",[E.b1],"$ask")
for(z=b.length,y=this.ge9(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bb()
t.a=H.e([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.W()},"$2","gi4",8,0,9],
jj:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isk",[E.b1],"$ask")
for(z=b.length,y=this.ge9(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bb()
t.a=H.e([],w)
t.c=0
u.sa4(t)}t=u.ga4()
t.toString
H.h(y,x)
C.a.J(t.a,y)}}this.W()},"$2","gi6",8,0,9],
$isaQ:1},ja:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eB:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ai(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.db()
y=[V.az]
z.a=H.e([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.w]}
v=H.h(new E.jc(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.db()
z.a=H.e([],y)
v=z.gD()
v.toString
x=H.h(new E.jd(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.db()
z.a=H.e([],y)
y=z.gD()
y.toString
w=H.h(new E.je(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.dl])
this.dy=z
C.a.h(z,null)
this.fr=new H.b3(0,0,[P.i,A.eG])},
gij:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.k(0,y.ga_(y))
this.z=y
z=y}return z},
ef:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaB(z):a;(z&&C.a).h(z,y)},
ed:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jb:function(a,b){var z=new E.ja(a,b)
z.eB(a,b)
return z}}},jc:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.z=null
z.ch=null}},jd:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},je:{"^":"n:12;a",
$1:function(a){var z
H.f(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},jK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch",
gD:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
eI:[function(a){var z
H.f(a,"$isw")
z=this.x
if(!(z==null))z.E(a)
this.ir()},function(){return this.eI(null)},"eH","$1","$0","gd_",0,2,1],
ghT:function(){var z,y,x
z=Date.now()
y=C.d.a0(P.ef(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ai(z,!1)
return x/y},
dj:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.cw(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cw(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ir:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jM(this),{func:1,ret:-1,args:[P.W]})
C.B.eZ(z)
C.B.fJ(z,W.fS(y,P.W))}},
io:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dj()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ai(w,!1)
x.y=P.ef(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aD()
w=x.db
C.a.sm(w.a,0)
w.aD()
w=x.dx
C.a.sm(w.a,0)
w.aD()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aX(this.e)}}catch(v){z=H.ay(v)
y=H.bC(v)
P.dO("Error: "+H.l(z))
P.dO("Stack: "+H.l(y))
throw H.a(z)}},
t:{
jL:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscY)return E.eP(a,!0,!0,!0,!1)
y=W.cZ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcl(a).h(0,y)
w=E.eP(y,!0,!0,!0,!1)
w.a=a
return w},
eP:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jK()
y=P.ik(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bQ(a,"webgl",y)
x=H.f(x==null?C.l.bQ(a,"experimental-webgl",y):x,"$isdh")
if(x==null)H.q(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jb(x,a)
w=new T.jF(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ke(a)
v=new X.ic()
v.c=new X.aI(!1,!1,!1)
v.d=P.io(null,null,null,P.m)
w.b=v
v=new X.iJ(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.is(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jQ(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eK,P.b]])
w.z=v
u=document
t=W.aJ
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.h(w.gfh(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.h(w.gfk(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.h(w.gfe(),q),!1,r))
v=w.z
p=W.bK
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.h(w.gfm(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.h(w.gfl(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.h(w.gfp(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.h(w.gfs(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.h(w.gfq(),s),!1,t))
p=w.z
o=W.bW;(p&&C.a).h(p,W.a2(a,H.K(W.hS(a)),H.h(w.gft(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.h(w.gfi(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.h(w.gfj(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.h(w.gfu(),q),!1,r))
r=w.z
q=W.br
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.h(w.gfD(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.h(w.gfB(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.h(w.gfC(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ai(Date.now(),!1)
z.ch=0
z.dj()
return z}}},jM:{"^":"n:31;a",
$1:function(a){var z
H.h9(a)
z=this.a
if(z.z){z.z=!1
z.io()}}}}],["","",,Z,{"^":"",fl:{"^":"b;a,b",t:{
dv:function(a,b,c){var z
H.v(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bw(c)),35044)
a.bindBuffer(b,null)
return new Z.fl(b,z)}}},e_:{"^":"cU;a,b,c,d,e",
ce:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ay(y)
x=P.t('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kA:{"^":"b;a",$isnA:1},e0:{"^":"b;a,0b,c,d",
aT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ce:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ce(a)},
iC:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aX:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.d(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.G(y,", ")+"\nAttrs:   "+C.a.G(u,", ")},
$isp3:1},cu:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bi(this.c)+"'")+"]"}},bt:{"^":"b;a",
gcW:function(a){var z,y
z=this.a
y=(z&$.$get$aW().a)!==0?3:0
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aX().a)!==0)y+=2
if((z&$.$get$aY().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=3
if((z&$.$get$bV().a)!==0)y+=4
if((z&$.$get$bu().a)!==0)++y
return(z&$.$get$aT().a)!==0?y+4:y},
hy:function(a){var z,y,x
z=$.$get$aW()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fk()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bt))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aW().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aY().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bV().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.G(z,"|")},
t:{
av:function(a){return new Z.bt(a)}}}}],["","",,D,{"^":"",e4:{"^":"b;"},bb:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.hW(z))
return x!==0},
hK:function(){return this.E(null)},
is:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
aq:function(a){return this.is(a,!0,!1)},
t:{
P:function(){var z=new D.bb()
z.a=H.e([],[{func:1,ret:-1,args:[D.w]}])
z.c=0
return z}}},hW:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"b;a,0b"},cv:{"^":"w;c,d,a,0b,$ti"},cw:{"^":"w;c,d,a,0b,$ti"},Q:{"^":"w;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e1:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
t:{"^":"nC<"}},ep:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ep))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},eq:{"^":"w;c,a,0b"},ic:{"^":"b;0a,0b,0c,0d",
ig:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eq(a,this)
y.b=!0
return z.E(y)},
ia:function(a){var z,y
this.c=a.b
this.d.J(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eq(a,this)
y.b=!0
return z.E(y)}},eu:{"^":"cz;x,y,c,d,e,a,0b"},is:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
av:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ai(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.B(0,new V.R(x*w,v*u))
u=this.a.gaM()
s=new X.bM(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cI:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.av(a,b))
return!0},
ba:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.es()
if(typeof z!=="number")return z.bP()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.av(a,b))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.av(a,b))
return!0},
ih:function(a){var z,y,x,w,v,u,t,s
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
w=new X.dc(new V.Z(v*u,t*s),y,x,new P.ai(w,!1),this)
w.b=!0
z.E(w)
return!0},
fo:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ai(Date.now(),!1)
y=this.f
x=new X.eu(c,a,this.a.gaM(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.R(0,0)}},aI:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aI))return!1
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
return z+(this.c?"Shift+":"")}},bM:{"^":"cz;x,y,z,Q,ch,c,d,e,a,0b"},iJ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bZ:function(a,b,c){var z,y,x
z=new P.ai(Date.now(),!1)
y=this.a.gaM()
x=new X.bM(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cI:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bZ(a,b,!0))
return!0},
ba:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.es()
if(typeof z!=="number")return z.bP()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bZ(a,b,!0))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bZ(a,b,!1))
return!0},
ii:function(a,b){var z,y,x,w,v,u,t
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
x=new X.dc(new V.Z(w*v,u*t),y,b,new P.ai(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdA:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
gbO:function(){var z=this.c
if(z==null){z=D.P()
this.c=z}return z},
ge8:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z}},dc:{"^":"cz;x,c,d,e,a,0b"},cz:{"^":"w;"},eT:{"^":"cz;x,y,z,Q,ch,c,d,e,a,0b"},jQ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
av:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.R],"$asc")
z=new P.ai(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gaM()
w=new X.eT(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ie:function(a){var z
H.v(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.E(this.av(a,!0))
return!0},
ib:function(a){var z
H.v(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.E(this.av(a,!0))
return!0},
ic:function(a){var z
H.v(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.E(this.av(a,!1))
return!0}},ke:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaM:function(){var z=this.a
return V.eF(0,0,(z&&C.l).gbu(z).c,C.l.gbu(z).d)},
d9:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ep(z,new X.aI(y,a.altKey,a.shiftKey))},
aK:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
ca:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.R(y-w,x-v)},
b2:function(a){return new V.Z(a.movementX,a.movementY)},
c5:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.h.ac(u.pageX)
C.h.ac(u.pageY)
s=z.left
C.h.ac(u.pageX)
C.a.h(y,new V.R(t-s,C.h.ac(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e1(z,new X.aI(y,a.altKey,a.shiftKey))},
iU:[function(a){this.f=!0},"$1","gfk",4,0,5],
iO:[function(a){this.f=!1},"$1","gfe",4,0,5],
iR:[function(a){if(this.f)a.preventDefault()},"$1","gfh",4,0,5],
iW:[function(a){var z
H.f(a,"$isbK")
if(!this.f)return
z=this.d9(a)
if(this.b.ig(z))a.preventDefault()},"$1","gfm",4,0,21],
iV:[function(a){var z
H.f(a,"$isbK")
if(!this.f)return
z=this.d9(a)
if(this.b.ia(z))a.preventDefault()},"$1","gfl",4,0,21],
iY:[function(a){var z,y,x,w
H.f(a,"$isaJ")
z=this.a
z.focus()
this.f=!0
this.aK(a)
if(this.x){y=this.at(a)
x=this.b2(a)
if(this.d.cI(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cI(y,w))a.preventDefault()},"$1","gfp",4,0,4],
j_:[function(a){var z,y,x
H.f(a,"$isaJ")
this.aK(a)
z=this.at(a)
if(this.x){y=this.b2(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gfs",4,0,4],
iT:[function(a){var z,y,x,w
H.f(a,"$isaJ")
z=this.a
if(!(z&&C.l).gbu(z).dw(0,new P.bP(a.clientX,a.clientY,[P.W]))){this.aK(a)
y=this.at(a)
if(this.x){x=this.b2(a)
if(this.d.ba(y,x))a.preventDefault()
return}if(this.r)return
w=this.aw(a)
if(this.c.ba(y,w))a.preventDefault()}},"$1","gfj",4,0,4],
iZ:[function(a){var z,y,x
H.f(a,"$isaJ")
this.aK(a)
z=this.at(a)
if(this.x){y=this.b2(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gfq",4,0,4],
iS:[function(a){var z,y,x,w
H.f(a,"$isaJ")
z=this.a
if(!(z&&C.l).gbu(z).dw(0,new P.bP(a.clientX,a.clientY,[P.W]))){this.aK(a)
y=this.at(a)
if(this.x){x=this.b2(a)
if(this.d.b9(y,x))a.preventDefault()
return}if(this.r)return
w=this.aw(a)
if(this.c.b9(y,w))a.preventDefault()}},"$1","gfi",4,0,4],
j0:[function(a){var z,y
H.f(a,"$isbW")
this.aK(a)
z=new V.Z((a&&C.A).ghH(a),C.A.ghI(a)).p(0,180)
if(this.x){if(this.d.ih(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.ii(z,y))a.preventDefault()},"$1","gft",4,0,35],
j1:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.at(this.y)
v=this.aw(this.y)
this.d.fo(w,v,x)}},"$1","gfu",4,0,5],
j7:[function(a){var z
H.f(a,"$isbr")
this.a.focus()
this.f=!0
this.ca(a)
z=this.c5(a)
if(this.e.ie(z))a.preventDefault()},"$1","gfD",4,0,13],
j5:[function(a){var z
H.f(a,"$isbr")
this.ca(a)
z=this.c5(a)
if(this.e.ib(z))a.preventDefault()},"$1","gfB",4,0,13],
j6:[function(a){var z
H.f(a,"$isbr")
this.ca(a)
z=this.c5(a)
if(this.e.ic(z))a.preventDefault()},"$1","gfC",4,0,13]}}],["","",,D,{"^":"",cr:{"^":"b;0a,0b,0c,0d",
gD:function(){var z=this.d
if(z==null){z=D.P()
this.d=z}return z},
aE:[function(a){var z
H.f(a,"$isw")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aE(null)},"iD","$1","$0","geJ",0,2,1],
$isa4:1,
$isaQ:1},a4:{"^":"b;",$isaQ:1},id:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gD:function(){var z=this.Q
if(z==null){z=D.P()
this.Q=z}return z},
aE:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fn:[function(a){var z
H.f(a,"$isw")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fn(null)},"iX","$1","$0","gdg",0,2,1],
j2:[function(a){var z,y,x
H.v(a,"$isk",[D.a4],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eV(x))return!1}return!0},"$1","gfw",4,0,37],
iL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.v(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdg(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.f(b[u],"$isa4")
if(t instanceof D.cr)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cv(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gfb",8,0,22],
j4:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.v(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdg(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.f(b[u],"$isa4")
if(t instanceof D.cr)C.a.J(this.e,t)
s=t.d
if(s==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.J(s.a,x)}z=new D.cw(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gfA",8,0,22],
eV:function(a){var z=C.a.b4(this.e,a)
return z},
$ask:function(){return[D.a4]},
$asaO:function(){return[D.a4]}},iS:{"^":"b;",$isa4:1,$isaQ:1},jw:{"^":"b;",$isa4:1,$isaQ:1},jH:{"^":"b;",$isa4:1,$isaQ:1},jI:{"^":"b;",$isa4:1,$isaQ:1},jJ:{"^":"b;",$isa4:1,$isaQ:1}}],["","",,V,{"^":"",
nE:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iG",8,0,34],
nr:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bj(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.h.ek($.p.$2(a,0)?0:a,b),c+b+1)},
bB:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.u],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.l(z,u,C.b.ab(z[u],x))}return z},
dN:function(a,b){return C.h.iz(Math.pow(b,C.I.cw(Math.log(H.mE(a))/Math.log(b))))},
ah:{"^":"b;a,b,c",
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
return new V.ah(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
aP:{"^":"b;a,b,c,d",
cP:function(a){return H.e([this.a,this.b,this.c,this.d],[P.u])},
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
return new V.aP(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
cy:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscy")
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
return new V.cy(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cy))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.bB(H.e([this.a,this.d,this.r],z),3,0)
x=V.bB(H.e([this.b,this.e,this.x],z),3,0)
w=V.bB(H.e([this.c,this.f,this.y],z),3,0)
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
az:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
e3:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.cd()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isaz")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.o(s)
r=a7.b
if(typeof r!=="number")return H.o(r)
q=a7.f
if(typeof q!=="number")return H.o(q)
p=a7.z
if(typeof p!=="number")return H.o(p)
o=a7.cy
if(typeof o!=="number")return H.o(o)
n=a7.c
if(typeof n!=="number")return H.o(n)
m=a7.r
if(typeof m!=="number")return H.o(m)
l=a7.Q
if(typeof l!=="number")return H.o(l)
k=a7.db
if(typeof k!=="number")return H.o(k)
j=a7.d
if(typeof j!=="number")return H.o(j)
i=a7.x
if(typeof i!=="number")return H.o(i)
h=a7.ch
if(typeof h!=="number")return H.o(h)
g=a7.dx
if(typeof g!=="number")return H.o(g)
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
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.A(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
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
j:function(a){return this.O()},
dW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bB(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bB(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bB(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bB(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
F:function(a){return this.dW(a,3,0)},
O:function(){return this.dW("",3,0)},
t:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cd:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ew:function(a,b,c){var z,y,x,w,v
z=c.p(0,Math.sqrt(c.C(c)))
y=b.ax(z)
x=y.p(0,Math.sqrt(y.C(y)))
w=z.ax(x)
v=new V.A(a.a,a.b,a.c)
return V.aH(x.a,w.a,z.a,x.R(0).C(v),x.b,w.b,z.b,w.R(0).C(v),x.c,w.c,z.c,z.R(0).C(v),0,0,0,1)}}},
R:{"^":"b;q:a>,u:b>",
B:function(a,b){return new V.R(this.a+b.a,this.b+b.b)},
M:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.R(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.R(0,0)
return new V.R(this.a/b,this.b/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
U:{"^":"b;q:a>,u:b>,c",
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.U(0,0,0)
return new V.U(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bQ:{"^":"b;q:a>,u:b>,c,d",
k:function(a,b){return new V.bQ(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
eE:{"^":"b;q:a>,u:b>,c,d",
ga6:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eE))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
t:{
eF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eE(a,b,c,d)}}},
Z:{"^":"b;a,b",
e5:[function(a){return Math.sqrt(this.C(this))},"$0","gm",1,0,14],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.Z(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.Z(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
A:{"^":"b;a,b,c",
e5:[function(a){return Math.sqrt(this.C(this))},"$0","gm",1,0,14],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cC:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.A(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.A(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.A(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.A(0,0,0)
return new V.A(this.a/b,this.b/b,this.c/b)},
e4:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bT:{"^":"b;a,b,c,d",
e5:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bT(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bT(0,0,0,0)
return new V.bT(this.a/b,this.b/b,this.c/b,this.d/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bT))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hD:{"^":"e4;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bU:function(a){var z=V.nr(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.P()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.E(a)},
scS:function(a,b){},
scE:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bU(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.T(z)}},
scG:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bU(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.T(z)}},
sY:function(a,b){var z,y
b=this.bU(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.u])
z.b=!0
this.T(z)}},
scF:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.u])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.u])
z.b=!0
this.T(z)}},
sco:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.u])
z.b=!0
this.T(z)}},
ar:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sY(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
t:{
d0:function(){var z=new U.hD()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e6:{"^":"aj;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.P()
this.b=z}return z},
b_:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e6))return!1
return J.F(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")},
t:{
e7:function(a){var z=new U.e6()
z.a=a
return z}}},ei:{"^":"aO;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
T:[function(a){var z
H.f(a,"$isw")
z=this.e
if(!(z==null))z.E(a)},function(){return this.T(null)},"af","$1","$0","gaJ",0,2,1],
iK:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.v(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cv(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfa",8,0,23],
j3:[function(a,b){var z,y,x,w,v,u,t
z=U.aj
H.v(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaJ(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.h(x,w)
C.a.J(t.a,x)}}z=new D.cw(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfz",8,0,23],
b_:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aE(z,z.length,0,[H.y(z,0)]),x=null;z.I();){y=z.d
if(y!=null){w=y.b_(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.cd():x
z=this.e
if(!(z==null))z.aq(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ei))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ask:function(){return[U.aj]},
$asaO:function(){return[U.aj]},
$isaj:1},aj:{"^":"e4;"},kf:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.P()
this.cy=z}return z},
T:[function(a){var z
H.f(a,"$isw")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.T(null)},"af","$1","$0","gaJ",0,2,1],
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdA()
z.toString
y={func:1,ret:-1,args:[D.w]}
x=H.h(this.gc0(),y)
C.a.h(z.a,x)
x=this.a.c.ge8()
x.toString
z=H.h(this.gc1(),y)
C.a.h(x.a,z)
z=this.a.c.gbO()
z.toString
y=H.h(this.gc2(),y)
C.a.h(z.a,y)
return!0},
f6:[function(a){H.f(a,"$isw")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc0",4,0,2],
f7:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isw"),"$isbM")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.Z(y.a,y.b).k(0,2).p(0,z.ga6())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.Z(x.a,x.b).k(0,2).p(0,z.ga6())
x=this.b
v=w.a
if(typeof v!=="number")return v.R()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sY(0,-v*u+t)
this.b.sV(0)
y=y.M(0,a.z)
this.Q=new V.Z(y.a,y.b).k(0,2).p(0,z.ga6())}this.af()},"$1","gc1",4,0,2],
f8:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.af()}},"$1","gc2",4,0,2],
b_:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.ar(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaj:1},kg:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.P()
this.fx=z}return z},
T:[function(a){var z
H.f(a,"$isw")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.T(null)},"af","$1","$0","gaJ",0,2,1],
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdA()
z.toString
y={func:1,ret:-1,args:[D.w]}
x=H.h(this.gc0(),y)
C.a.h(z.a,x)
x=this.a.c.ge8()
x.toString
z=H.h(this.gc1(),y)
C.a.h(x.a,z)
z=this.a.c.gbO()
z.toString
x=H.h(this.gc2(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.P()
x.f=z}x=H.h(this.gf3(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.P()
x.d=z}x=H.h(this.gf4(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.P()
x.b=z}x=H.h(this.gh3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.P()
x.d=z}x=H.h(this.gh2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.P()
x.c=z}y=H.h(this.gh1(),y)
C.a.h(z.a,y)
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.Z(z,y)},
f6:[function(a){a=H.j(H.f(a,"$isw"),"$isbM")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc0",4,0,2],
f7:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isw"),"$isbM")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.al(new V.Z(y.a,y.b).k(0,2).p(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.al(new V.Z(x.a,x.b).k(0,2).p(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sY(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.al(new V.Z(y.a,y.b).k(0,2).p(0,z.ga6()))}this.af()},"$1","gc1",4,0,2],
f8:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.af()}},"$1","gc2",4,0,2],
iH:[function(a){if(H.j(H.f(a,"$isw"),"$iseu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf3",4,0,2],
iI:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isw"),"$isbM")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.al(new V.Z(x.a,x.b).k(0,2).p(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sY(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.al(new V.Z(y.a,y.b).k(0,2).p(0,z.ga6()))
this.af()},"$1","gf4",4,0,2],
jb:[function(a){H.f(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh3",4,0,2],
ja:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$isw"),"$iseT")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.Z(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.al(new V.Z(y.a,y.b).k(0,2).p(0,z.ga6()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.al(new V.Z(x.a,x.b).k(0,2).p(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sY(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.M(0,a.z)
this.dx=this.al(new V.Z(y.a,y.b).k(0,2).p(0,z.ga6()))}this.af()},"$1","gh2",4,0,2],
j9:[function(a){var z,y,x
H.f(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.af()}},"$1","gh1",4,0,2],
b_:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.ar(0,x)
this.b.ar(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aH(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaj:1},kh:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.P()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.E(a)},
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.P()
z.e=y
z=y}else z=y
y=H.h(this.gf9(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.P()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iJ:[function(a){var z,y,x,w
H.f(a,"$isw")
if(!J.F(this.b,this.a.b.c))return
H.j(a,"$isdc")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.u])
z.b=!0
this.T(z)}},"$1","gf9",4,0,2],
b_:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aH(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaj:1}}],["","",,M,{"^":"",hU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aF:[function(a){var z
H.f(a,"$isw")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aF(null)},"iE","$1","$0","gak",0,2,1],
iP:[function(a,b){var z,y,x,w,v,u,t,s
z=E.b1
H.v(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gak(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cv(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gff",8,0,9],
iQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.b1
H.v(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gak(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bb()
s.a=H.e([],v)
s.c=0
t.sa4(s)}s=t.ga4()
s.toString
H.h(x,w)
C.a.J(s.a,x)}}z=new D.cw(a,b,this,[z])
z.b=!0
this.aF(z)},"$2","gfg",8,0,9],
sei:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.h(this.gak(),{func:1,ret:-1,args:[D.w]})
C.a.J(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.h(this.gak(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.Q("technique",x,this.c,this,[O.dl])
z.b=!0
this.aF(z)}},
gD:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.ef(this.c)
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
if(typeof x!=="number")return H.o(x)
u=C.d.ac(v.a*x)
if(typeof w!=="number")return H.o(w)
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
s.ee(V.aH(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.eB
if(y==null){y=V.ew(new V.U(0,0,0),new V.A(0,1,0),new V.A(0,0,-1))
$.eB=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.ee(m)
z=this.c
if(z!=null)z.ar(0,a)
for(z=this.d.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.I();)z.d.ar(0,a)
for(z=this.d.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.I();)z.d.aX(a)
this.a.toString
a.cy.cJ()
a.db.cJ()
this.b.toString
a.ed()},
$isoQ:1}}],["","",,A,{"^":"",dV:{"^":"b;a,b,c"},hr:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hJ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},iA:{"^":"eG;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aR,0az,0aS,0bw,0dB,0dC,0bx,0by,0dD,0dE,0bz,0bA,0dF,0dG,0bB,0dH,0dI,0bC,0dJ,0dK,0bD,0bE,0bF,0dL,0dM,0bG,0bH,0dN,0dO,0bI,0dP,0cq,0dQ,0cr,0dR,0cs,0dS,0ct,0dT,0cu,0dU,0cv,a,b,0c,0d,0e,0f,0r",
eA:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.as("")
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
a2.h6(z)
a2.hd(z)
a2.h7(z)
a2.hl(z)
a2.hm(z)
a2.hf(z)
a2.hq(z)
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
z=new P.as("")
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
v.ha(z)
v.h5(z)
v.h8(z)
v.hb(z)
v.hj(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hh(z)
v.hi(z)}v.he(z)
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
r=z.a+="   return litClr*("+C.a.G(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h9(z)
v.hg(z)
v.hk(z)
v.hn(z)
v.ho(z)
v.hp(z)
v.hc(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.G(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.da(x.charCodeAt(0)==0?x:x,35633)
this.d=this.da(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fW(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.t("Failed to link shader: "+H.l(m)))}this.fX()
this.fZ()
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaS")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaS")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaS")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaS")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdr")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaS")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaS")
this.k3=H.e([],[A.aS])
y=a2.aR
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.i(0,v)
if(k==null)H.q(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaS"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isat")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isO")
break
case C.f:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isau")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isat")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isO")
break
case C.f:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isau")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.aR=H.j(this.r.n(0,"diffuseTxt"),"$isat")
this.aS=H.j(this.r.n(0,"nullDiffuseTxt"),"$isO")
break
case C.f:this.az=H.j(this.r.n(0,"diffuseTxt"),"$isau")
this.aS=H.j(this.r.n(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.c){this.bw=H.j(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dB=H.j(this.r.n(0,"invDiffuseTxt"),"$isat")
this.bx=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break
case C.f:this.dC=H.j(this.r.n(0,"invDiffuseTxt"),"$isau")
this.bx=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.c){this.bA=H.j(this.r.n(0,"shininess"),"$isa0")
this.by=H.j(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dD=H.j(this.r.n(0,"specularTxt"),"$isat")
this.bz=H.j(this.r.n(0,"nullSpecularTxt"),"$isO")
break
case C.f:this.dE=H.j(this.r.n(0,"specularTxt"),"$isau")
this.bz=H.j(this.r.n(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dF=H.j(this.r.n(0,"bumpTxt"),"$isat")
this.bB=H.j(this.r.n(0,"nullBumpTxt"),"$isO")
break
case C.f:this.dG=H.j(this.r.n(0,"bumpTxt"),"$isau")
this.bB=H.j(this.r.n(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dH=H.j(this.r.n(0,"envSampler"),"$isau")
this.dI=H.j(this.r.n(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.c){this.bC=H.j(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dJ=H.j(this.r.n(0,"reflectTxt"),"$isat")
this.bD=H.j(this.r.n(0,"nullReflectTxt"),"$isO")
break
case C.f:this.dK=H.j(this.r.n(0,"reflectTxt"),"$isau")
this.bD=H.j(this.r.n(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.c){this.bE=H.j(this.r.n(0,"refraction"),"$isa0")
this.bF=H.j(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.e:this.dL=H.j(this.r.n(0,"refractTxt"),"$isat")
this.bG=H.j(this.r.n(0,"nullRefractTxt"),"$isO")
break
case C.f:this.dM=H.j(this.r.n(0,"refractTxt"),"$isau")
this.bG=H.j(this.r.n(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.c){this.bH=H.j(this.r.n(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.i:break
case C.e:this.dN=H.j(this.r.n(0,"alphaTxt"),"$isat")
this.bI=H.j(this.r.n(0,"nullAlphaTxt"),"$isO")
break
case C.f:this.dO=H.j(this.r.n(0,"alphaTxt"),"$isau")
this.bI=H.j(this.r.n(0,"nullAlphaTxt"),"$isO")
break}}this.cq=H.e([],[A.f5])
this.cr=H.e([],[A.f6])
this.cs=H.e([],[A.f7])
this.ct=H.e([],[A.f8])
this.cu=H.e([],[A.f9])
this.cv=H.e([],[A.fa])
if(a2.k2){y=a2.z
if(y>0){this.dP=H.f(this.r.n(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.cq;(x&&C.a).h(x,new A.f5(l,k,j))}}y=a2.Q
if(y>0){this.dQ=H.f(this.r.n(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa0")
x=this.r
w="pntLights["+l+"].att1"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.r
w="pntLights["+l+"].att2"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.cr;(x&&C.a).h(x,new A.f6(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dR=H.f(this.r.n(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.r
w="spotLights["+l+"].att0"
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.r
w="spotLights["+l+"].att1"
d=x.i(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="spotLights["+l+"].att2"
c=x.i(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.cs;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dS=H.f(this.r.n(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isat")
x=this.ct;(x&&C.a).h(x,new A.f8(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dT=H.f(this.r.n(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdr")
x=this.r
w="txtPntLights["+l+"].color"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.i(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isau")
x=this.cu;(x&&C.a).h(x,new A.f9(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dU=H.f(this.r.n(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.i(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.i(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.i(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.i(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.i(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.i(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.i(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.i(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.i(0,w)
if(b==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.i(0,w)
if(a==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa0")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.i(0,w)
if(a0==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isa0")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.i(0,w)
if(a1==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isat")
x=this.cv;(x&&C.a).h(x,new A.fa(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ag:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eu(c)
b.a.uniform1i(b.d,0)}},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
iz:function(a,b){var z,y
z=a.az
y=new A.iA(b,z)
y.eD(b,z)
y.eA(a,b)
return y}}},iD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aR,az,aS",
h6:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aR+"];\n"
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
hd:function(a){var z
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
h7:function(a){var z
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
hl:function(a){var z,y
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
hm:function(a){var z,y
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
hf:function(a){var z
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
hq:function(a){var z
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
au:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aC(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ha:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.au(a,z,"emission")
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
h5:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.au(a,z,"ambient")
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
h8:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"diffuse")
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
hb:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"invDiffuse")
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
hj:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.au(a,z,"specular")
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
he:function(a){var z,y
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
hh:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.au(a,z,"reflect")
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
hi:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.au(a,z,"refract")
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
h9:function(a){var z,y
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
hg:function(a){var z,y
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
hk:function(a){var z,y
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
hn:function(a){var z,y,x
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
ho:function(a){var z,y,x
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
hp:function(a){var z,y,x
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
hc:function(a){var z
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
j:function(a){return this.az}},f5:{"^":"b;a,b,c"},f8:{"^":"b;a,b,c,d,e,f,r,x"},f6:{"^":"b;a,b,c,d,e,f,r"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fa:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eG:{"^":"cU;",
eD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
da:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fW(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fX:function(){var z,y,x,w,v,u
z=H.e([],[A.dV])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dV(y,v.name,u))}this.f=new A.hr(z)},
fZ:function(){var z,y,x,w,v,u
z=H.e([],[A.ae])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hG(v.type,v.size,v.name,u))}this.r=new A.k0(z)},
aI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.O(z,y,b,c)
else return A.dq(z,y,b,a,c)},
eW:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.at(z,y,b,c)
else return A.dq(z,y,b,a,c)},
eX:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.au(z,y,b,c)
else return A.dq(z,y,b,a,c)},
bq:function(a,b){return new P.fo(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hG:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.a0(this.a,this.e,c,d)
case 35664:return new A.jW(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jZ(this.a,this.e,c,d)
case 35667:return new A.jX(this.a,this.e,c,d)
case 35668:return new A.jY(this.a,this.e,c,d)
case 35669:return new A.k_(this.a,this.e,c,d)
case 35674:return new A.k2(this.a,this.e,c,d)
case 35675:return new A.dr(this.a,this.e,c,d)
case 35676:return new A.aS(this.a,this.e,c,d)
case 35678:return this.eW(b,c,d)
case 35680:return this.eX(b,c,d)
case 35670:throw H.a(this.bq("BOOL",c))
case 35671:throw H.a(this.bq("BOOL_VEC2",c))
case 35672:throw H.a(this.bq("BOOL_VEC3",c))
case 35673:throw H.a(this.bq("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cp:{"^":"b;a,b",
j:function(a){return this.b}},ae:{"^":"b;"},k0:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.O()},
hS:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
O:function(){return this.hS("\n")}},O:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jX:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},jY:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},k_:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jV:{"^":"ae;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
t:{
dq:function(a,b,c,d,e){var z=new A.jV(a,b,c,e)
z.f=d
z.e=P.ip(d,0,!1,P.m)
return z}}},a0:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},jW:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jZ:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},k2:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dr:{"^":"ae;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bw(H.v(a,"$isc",[P.u],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aS:{"^":"ae;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bw(H.v(a,"$isc",[P.u],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},at:{"^":"ae;a,b,c,d",
eu:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},au:{"^":"ae;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dG:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.u,P.u]})
z=F.cC()
F.c0(z,b,c,d,a,1,0,0,1)
F.c0(z,b,c,d,a,0,1,0,3)
F.c0(z,b,c,d,a,0,0,1,2)
F.c0(z,b,c,d,a,-1,0,0,0)
F.c0(z,b,c,d,a,0,-1,0,0)
F.c0(z,b,c,d,a,0,0,-1,3)
z.ah()
return z},
cI:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c0:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.u,P.u]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.A(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.A(t+h,s+f,r+g)
z.b=q
p=new V.A(t-h,s-f,r-g)
z.c=p
o=new V.A(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cI(y)
k=F.cI(z.b)
j=F.cQ(d,e,new F.mm(z,F.cI(z.c),F.cI(z.d),k,l,c),b)
if(j!=null)a.aW(j)},
fZ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.u,args:[P.u]})
if(e<3)return
z=F.cC()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.af])
v=z.a
u=new V.A(0,0,y)
u=u.p(0,Math.sqrt(u.C(u)))
C.a.h(w,v.hu(new V.bQ(a,-1,-1,-1),new V.aP(1,1,1,1),new V.U(0,0,c),new V.A(0,0,y),new V.R(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.A(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bs(new V.bQ(a,-1,-1,-1),null,new V.aP(n,l,m,1),new V.U(r*p,q*p,c),new V.A(0,0,y),new V.R(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hs(w)
return z},
fX:function(a,b,c,d,e,f){return F.mK(!0,c,d,new F.mJ(a,f),e)},
mK:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.cQ(c,e,new F.mM(d),null)
if(z==null)return
z.ah()
z.bs()
if(b)z.aW(F.fZ(3,!1,1,new F.mN(d),e))
z.aW(F.fZ(1,!0,-1,new F.mO(d),e))
return z},
n2:function(a,b){var z=F.cQ(a,b,new F.n3(),null)
z.d.bM()
z.ah()
z.bs()
return z},
ag:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.C(b)))
z=b.a
y=b.b
x=b.c
w=F.bs(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.hN(w,new F.du())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.san(0,new V.aP(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.saZ(new V.R(q,p<0?-p:p))
a.a.h(0,w)
return w},
Y:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.br(0,b,d,c)
else{z=F.ag(a,b.r.B(0,c.r).k(0,0.5))
y=F.ag(a,c.r.B(0,d.r).k(0,0.5))
x=F.ag(a,d.r.B(0,b.r).k(0,0.5))
w=e-1
F.Y(a,b,z,x,w)
F.Y(a,z,c,y,w)
F.Y(a,y,x,z,w)
F.Y(a,x,y,d,w)}},
hd:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.nl()
y=F.dG(a,null,new F.nm(z),c)
y.bs()
return y},
no:function(a,b,c,d){return F.fY(c,a,d,b,new F.np())},
n0:function(a,b,c,d,e,f){return F.fY(d,a,e,b,new F.n1(f,c))},
fY:function(a,b,c,d,e){var z=F.cQ(a,b,new F.mL(H.h(e,{func:1,ret:V.U,args:[P.u]}),d,b,c),null)
if(z==null)return
z.ah()
z.bs()
return z},
cQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.cC()
y=H.e([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bs(null,null,new V.aP(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cn(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bs(null,null,new V.aP(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cn(d))}}z.d.ht(a+1,b+1,y)
return z},
mm:{"^":"n:6;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cC(z.b,b).cC(z.d.cC(z.c,b),c)
a.sY(0,new V.U(y.a,y.b,y.c))
a.sbN(y.p(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
a.sdt(new V.bQ(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mJ:{"^":"n:25;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mM:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sY(0,new V.U(y,u,w))
u=new V.A(y,u,w)
a.sbN(u.p(0,Math.sqrt(u.C(u))))
a.sdt(new V.bQ(1-c,2+c,-1,-1))}},
mN:{"^":"n:16;a",
$1:function(a){return this.a.$2(a,1)}},
mO:{"^":"n:16;a",
$1:function(a){return this.a.$2(1-a,0)}},
n3:{"^":"n:6;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.A(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.C(w)))
a.sY(0,new V.U(x.a,x.b,x.c))}},
nl:{"^":"n:25;",
$2:function(a,b){return 0}},
nm:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.A(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.C(x))).k(0,1+z)
a.sY(0,new V.U(z.a,z.b,z.c))}},
np:{"^":"n:26;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
n1:{"^":"n:26;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mL:{"^":"n:6;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dQ(y.$1(z),x)
x=J.dQ(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.A(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.C(x)))
u=new V.A(1,0,0)
y=v.ax(!v.v(0,u)?new V.A(0,0,1):u)
t=y.p(0,Math.sqrt(y.C(y)))
y=t.ax(v)
u=y.p(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sY(0,w.B(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ar:{"^":"b;0a,0b,0c,0d,0e",
ay:function(){if(!this.gb6()){C.a.J(this.a.a.d.b,this)
this.a.a.W()}this.c7()
this.c8()
this.fG()},
fU:function(a){this.a=a
C.a.h(a.d.b,this)},
fV:function(a){this.b=a
C.a.h(a.d.c,this)},
fW:function(a){this.c=a
C.a.h(a.d.d,this)},
c7:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
c8:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
fG:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
eQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.A(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.e4())return
return v.p(0,Math.sqrt(v.C(v)))},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.A(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.C(z)))
z=w.M(0,y)
z=new V.A(z.a,z.b,z.c)
z=v.ax(z.p(0,Math.sqrt(z.C(z))))
return z.p(0,Math.sqrt(z.C(z)))},
ck:function(){if(this.d!=null)return!0
var z=this.eQ()
if(z==null){z=this.eT()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
eP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.A(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.e4())return
return v.p(0,Math.sqrt(v.C(v)))},
eS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.M(0,u)
z=new V.A(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.M(0,u).k(0,l).B(0,u).M(0,x)
z=new V.A(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.C(z)))
z=k.ax(m)
z=z.p(0,Math.sqrt(z.C(z))).ax(k)
m=z.p(0,Math.sqrt(z.C(z)))}return m},
ci:function(){if(this.e!=null)return!0
var z=this.eP()
if(z==null){z=this.eS()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
aG:function(a,b){var z=b.a
if(z==null)throw H.a(P.t("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.t("May not replace a face's vertex with a vertex attached to a different shape."))},
ghC:function(a){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){var z,y
if(this.gb6())return a+"disposed"
z=a+C.b.ab(J.ac(this.a.e),0)+", "+C.b.ab(J.ac(this.b.e),0)+", "+C.b.ab(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
O:function(){return this.F("")},
t:{
bc:function(a,b,c){var z,y,x
z=new F.ar()
y=a.a
if(y==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.t("May not create a face with vertices attached to different shapes."))
z.fU(a)
z.fV(b)
z.fW(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
hX:{"^":"b;"},
js:{"^":"hX;",
aV:function(a,b,c){var z,y
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
d8:{"^":"b;0a,0b",
ay:function(){if(!this.gb6()){C.a.J(this.a.a.c.b,this)
this.a.a.W()}this.c7()
this.c8()},
c7:function(){var z=this.a
if(z!=null){C.a.J(z.c.b,this)
this.a=null}},
c8:function(){var z=this.b
if(z!=null){C.a.J(z.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
aG:function(a,b){var z=b.a
if(z==null)throw H.a(P.t("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.t("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){if(this.gb6())return a+"disposed"
return a+C.b.ab(J.ac(this.a.e),0)+", "+C.b.ab(J.ac(this.b.e),0)},
O:function(){return this.F("")}},
ie:{"^":"b;"},
jU:{"^":"ie;",
aV:function(a,b,c){var z,y
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
dg:{"^":"b;0a",
ay:function(){var z=this.a
if(z!=null){C.a.J(z.a.b.b,this)
this.a.a.W()}this.fF()},
fF:function(){var z=this.a
if(z!=null){C.a.J(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.ac(z.e),0)},
O:function(){return this.F("")}},
eH:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.hE())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dg()
if(r.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d8()
s=p.a
if(s==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.t("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bc(p,o,l)}z=this.e
if(!(z==null))z.aq(0)},
ah:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ah()||!1
if(!this.a.ah())y=!1
z=this.e
if(!(z==null))z.aq(0)
return y},
hO:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
if(b.aV(0,a,w))return w}return},
hN:function(a,b){return this.hO(a,b,0)},
f0:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.af],"$asc")
H.v(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.aV(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fI:function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isc",[P.m],"$asc")
H.jv(b,J.mu(),H.y(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.d(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.d(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.q(P.t("May not replace a face's vertex when the point has been disposed."))
if(J.F(v,w)){x.aG(w,a)
v=x.a
if(v!=null){C.a.J(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aG(w,a)
v=x.b
if(v!=null){C.a.J(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.F(x.c,w)){x.aG(w,a)
v=x.c
if(v!=null){C.a.J(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.q(P.t("May not replace a line's vertex when the point has been disposed."))
if(J.F(v,w)){x.aG(w,a)
v=x.a
if(v!=null){C.a.J(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aG(w,a)
v=x.b
if(v!=null){C.a.J(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.q(P.t("May not replace a point's vertex when the point has been disposed."))
if(J.F(v,w)){if(a.a==null)H.q(P.t("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.J(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.E(null)}}x=this.a
v=x.c
if(y>=v.length)return H.d(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.q(P.t("May not remove a vertex without first making it empty."))
t.a=null
C.a.il(v,y)
v=x.a.e
if(!(v==null))v.E(null)
x.b=!0}},
e7:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.f0(a,v,y,u,t)){s=b.aW(u)
if(s!=null){this.fI(s,t)
y-=t.length}}}this.a.A()
this.c.bM()
this.d.bM()
this.b.im()
this.c.cM(new F.jU())
this.d.cM(new F.js())
z=this.e
if(!(z==null))z.aq(0)},
hx:function(a){this.e7(new F.du(),new F.iN())},
bs:function(){return this.hx(null)},
hA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aW()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bV().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
v=b.gcW(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.e_])
for(r=0,q=0;q<w;++q){p=b.hy(q)
o=p.gcW(p)
C.a.l(s,q,new Z.e_(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hZ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.e0(new Z.fl(34962,j),s,b)
i.b=H.e([],[Z.cu])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dv(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cu(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dv(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cu(1,h.length,f))}if(this.d.b.length!==0){x=P.m
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
C.a.h(h,g.e)}f=Z.dv(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cu(4,h.length,f))}return i},
j:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.G(z,"\n")},
ai:function(a){var z=this.e
if(!(z==null))z.E(a)},
W:function(){return this.ai(null)},
t:{
cC:function(){var z,y
z=new F.eH()
y=new F.kq(z)
y.b=!1
y.c=H.e([],[F.af])
z.a=y
y=new F.jn(z)
y.b=H.e([],[F.dg])
z.b=y
y=new F.jm(z)
y.b=H.e([],[F.d8])
z.c=y
y=new F.jl(z)
y.b=H.e([],[F.ar])
z.d=y
z.e=null
return z}}},
jl:{"^":"b;a,0b",
br:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bc(b,c,d)},
hs:function(a){var z,y,x,w,v,u
H.v(a,"$isc",[F.af],"$asc")
z=H.e([],[F.ar])
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
C.a.h(z,F.bc(x,v,u))}}return z},
ht:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.af],"$asc")
z=H.e([],[F.ar])
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
C.a.h(z,F.bc(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bc(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bc(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bc(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cM:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.aV(0,v,t)){v.ay()
break}}}}},
bM:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghC(x)
if(y)x.ay()}},
ah:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].ck())x=!1
return x},
cj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].ci())x=!1
return x},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
jm:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cM:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.aV(0,v,t)){v.ay()
break}}}}},
bM:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.ay()}},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.G(z,"\n")},
O:function(){return this.F("")}},
jn:{"^":"b;a,0b",
gm:function(a){return this.b.length},
im:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ay()}},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cn:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bs(this.cx,x,u,z,y,w,v,a,t)},
hE:function(){return this.cn(null)},
sY:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.W()}},
scH:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.F(this.r,a)){this.r=a
z=this.a
if(z!=null)z.W()}},
sdv:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.F(this.x,a)){this.x=a
z=this.a
if(z!=null)z.W()}},
saZ:function(a){var z
if(!J.F(this.y,a)){this.y=a
z=this.a
if(z!=null)z.W()}},
sbN:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
san:function(a,b){var z
if(!J.F(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.W()}},
sen:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.W()}},
sdt:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.W()}},
hZ:function(a){var z,y
z=J.I(a)
if(z.v(a,$.$get$aW())){z=this.f
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aV())){z=this.r
y=[P.u]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aU())){z=this.x
y=[P.u]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aX())){z=this.y
y=[P.u]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.v(a,$.$get$aY())){z=this.z
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
y=[P.u]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bV())){z=this.Q
if(z==null)return H.e([1,1,1,1],[P.u])
else return z.cP(0)}else if(z.v(a,$.$get$bu()))return H.e([this.ch],[P.u])
else if(z.v(a,$.$get$aT())){z=this.cx
y=[P.u]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.u])},
ck:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.A(0,0,0)
this.d.N(0,new F.kz(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aq(0)}return!0},
ci:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.A(0,0,0)
this.d.N(0,new F.ky(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aq(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
F:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.ab(J.ac(this.e),0))
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
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.G(z,", ")
return a+"{"+x+"}"},
O:function(){return this.F("")},
t:{
bs:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.kx(z)
y.b=H.e([],[F.dg])
z.b=y
y=new F.kv(z)
x=[F.d8]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.kr(z)
x=[F.ar]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fi()
z.e=0
y=$.$get$aW()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aV().a)!==0?e:null
z.x=(x&$.$get$aU().a)!==0?b:null
z.y=(x&$.$get$aX().a)!==0?f:null
z.z=(x&$.$get$aY().a)!==0?g:null
z.Q=(x&$.$get$fj().a)!==0?c:null
z.ch=(x&$.$get$bu().a)!==0?i:0
z.cx=(x&$.$get$aT().a)!==0?a:null
return z}}},
kz:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isar")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
ky:{"^":"n:10;a",
$1:function(a){var z,y
H.f(a,"$isar")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kq:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
hv:function(a,b,c,d,e,f,g,h,i){var z=F.bs(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hu:function(a,b,c,d,e,f){return this.hv(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ah:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].ck()
return!0},
cj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].ci()
return!0},
hB:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
this.A()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
kr:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
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
N:function(a,b){H.h(b,{func:1,ret:-1,args:[F.ar]})
C.a.N(this.b,b)
C.a.N(this.c,new F.ks(this,b))
C.a.N(this.d,new F.kt(this,b))},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
ks:{"^":"n:10;a,b",
$1:function(a){H.f(a,"$isar")
if(!J.F(a.a,this.a))this.b.$1(a)}},
kt:{"^":"n:10;a,b",
$1:function(a){var z
H.f(a,"$isar")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kv:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}},
kw:{"^":"b;"},
du:{"^":"kw;",
aV:function(a,b,c){return J.F(b.f,c.f)}},
fh:{"^":"b;"},
ku:{"^":"fh;",
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a,"$isc",[F.af],"$asc")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.U(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.A(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.A(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.R(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.A(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bT(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bT(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bs(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sY(0,null)
else b.sY(0,x.p(0,y))
if(w==null)b.scH(null)
else b.scH(w.p(0,Math.sqrt(w.C(w))))
if(v==null)b.sdv(null)
else b.sdv(v.p(0,Math.sqrt(v.C(v))))
if(s<=0||r==null)b.saZ(null)
else b.saZ(r.p(0,s))
if(q<=0||p==null)b.sbN(null)
else b.sbN(p.p(0,q))
if(u<=0||t==null)b.san(0,null)
else{z=t.p(0,u)
z=[z.a,z.b,z.c,z.d]
f=z[0]
e=z[1]
d=z[2]
z=z[3]
if(f<0)f=0
else if(f>1)f=1
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(z<0)z=0
else if(z>1)z=1
b.san(0,new V.aP(f,e,d,z))}if(o<=0)b.sen(0,0)
else b.sen(0,n/o)
return b}},
iN:{"^":"fh;",
aW:function(a){var z,y,x,w
H.v(a,"$isc",[F.af],"$asc")
z=new V.A(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.A(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.p(0,Math.sqrt(z.C(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].scH(z)
return}},
kx:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
O:function(){return this.F("")}}}],["","",,O,{"^":"",iy:{"^":"dl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.P()
this.dy=z}return z},
a3:[function(a){var z
H.f(a,"$isw")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a3(null)},"eK","$1","$0","gbl",0,2,1],
fL:[function(a){H.f(a,"$isw")
this.a=null
this.a3(a)},function(){return this.fL(null)},"j8","$1","$0","gfK",0,2,1],
iM:[function(a,b){var z=V.az
z=new D.cv(a,H.v(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a3(z)},"$2","gfc",8,0,17],
iN:[function(a,b){var z=V.az
z=new D.cw(a,H.v(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a3(z)},"$2","gfd",8,0,17],
d7:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a0(z.e.length+3,4)*4
x=C.d.a0(z.f.length+3,4)*4
w=C.d.a0(z.r.length+3,4)*4
v=C.d.a0(z.x.length+3,4)*4
u=C.d.a0(z.y.length+3,4)*4
t=C.d.a0(z.z.length+3,4)*4
s=C.d.a0(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.j(q.a)+C.d.j(p.a)+C.d.j(o.a)+C.d.j(n.a)+C.d.j(m.a)+C.d.j(l.a)+C.d.j(k.a)+C.d.j(j.a)+C.d.j(i.a)+"_"
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
a6=$.$get$aW()
if(c){z=$.$get$aV()
a6=new Z.bt(a6.a|z.a)}if(b){z=$.$get$aU()
a6=new Z.bt(a6.a|z.a)}if(a){z=$.$get$aX()
a6=new Z.bt(a6.a|z.a)}if(a0){z=$.$get$aY()
a6=new Z.bt(a6.a|z.a)}if(a2){z=$.$get$aT()
a6=new Z.bt(a6.a|z.a)}return new A.iD(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
X:function(a,b){H.v(a,"$isc",[T.dm],"$asc")
if(b!=null)if(!C.a.b4(a,b)){b.a=a.length
C.a.h(a,b)}},
ar:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aE(z,z.length,0,[H.y(z,0)]);z.I();){y=z.d
x=new V.A(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cQ(x)}}},
ip:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d7()
y=a.fr.i(0,z.az)
if(y==null){y=A.iz(z,a.a)
x=y.b
if(x.length===0)H.q(P.t("May not cache a shader with no name."))
if(a.fr.bv(0,x))H.q(P.t('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.l(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aS
z=b.e
if(!(z instanceof Z.e0)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ah()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.cj()
t.a.cj()
t=t.e
if(!(t==null))t.aq(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hB()
s=s.e
if(!(s==null))s.aq(0)}q=b.d.hA(new Z.kA(a.a),v)
q.aT($.$get$aW()).e=this.a.y.c
if(z)q.aT($.$get$aV()).e=this.a.Q.c
if(u)q.aT($.$get$aU()).e=this.a.z.c
if(w.rx)q.aT($.$get$aX()).e=this.a.ch.c
if(t)q.aT($.$get$aY()).e=this.a.cx.c
if(w.x1)q.aT($.$get$aT()).e=this.a.cy.c
b.e=q}z=T.dm
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hL()
if(w.fx){u=this.a
t=a.dx
t=t.ga_(t)
u=u.db
u.toString
u.aj(t.ad(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga_(t)
s=a.dx
s=t.k(0,s.ga_(s))
a.cx=s
t=s}u=u.dx
u.toString
u.aj(t.ad(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gij()
s=a.dx
s=t.k(0,s.ga_(s))
a.ch=s
t=s}u=u.fr
u.toString
u.aj(t.ad(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.aj(t.ad(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.aj(t.ad(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.aj(C.t.ad(t,!0))}if(w.aR>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.u],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.f(s,"$isaz")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bw(H.v(s.ad(0,!0),"$isc",u,"$asc")))
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
case C.e:this.X(p,this.f.d)
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
case C.f:this.X(p,this.f.e)
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
case C.e:this.X(p,this.r.d)
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
case C.f:this.X(p,this.r.e)
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
case C.e:this.X(p,this.x.d)
u=this.a
t=this.x.d
u.ag(u.aR,u.aS,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.X(p,this.x.e)
u=this.a
t=this.x.e
u.a9(u.az,u.aS,t)
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
u=u.bw
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.X(p,this.y.d)
u=this.a
t=this.y.d
u.ag(u.dB,u.bx,t)
t=this.a
u=this.y.f
t=t.bw
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.X(p,this.y.e)
u=this.a
t=this.y.e
u.a9(u.dC,u.bx,t)
t=this.a
u=this.y.f
t=t.bw
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.by
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bA
t.a.uniform1f(t.d,r)
break
case C.e:this.X(p,this.z.d)
u=this.a
t=this.z.d
u.ag(u.dD,u.bz,t)
t=this.a
u=this.z.f
t=t.by
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bA
u.a.uniform1f(u.d,r)
break
case C.f:this.X(p,this.z.e)
u=this.a
t=this.z.e
u.a9(u.dE,u.bz,t)
t=this.a
u=this.z.f
t=t.by
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bA
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dP
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cq
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.cQ(i.a)
r=s.a
g=s.b
f=s.c
f=s.p(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dQ
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cr
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gbb(i)
r=h.b
g=s.gq(s)
f=s.gu(s)
s=s.gcT(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bh(i.gbb(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gan(i)
f=h.d
g=s.gbL()
r=s.gbi()
s=s.gbt()
f.a.uniform3f(f.d,g,r,s)
s=i.gcb()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcc()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gcd()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dR
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cs
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gbb(i)
r=h.b
g=s.gq(s)
f=s.gu(s)
s=s.gcT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcp(i).jg()
f=h.c
g=s.gaO(s)
r=s.gaP(s)
s=s.gaQ()
f.a.uniform3f(f.d,g,r,s)
s=l.bh(i.gbb(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gan(i)
r=h.e
g=s.gbL()
f=s.gbi()
s=s.gbt()
r.a.uniform3f(r.d,g,f,s)
s=i.gjd()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjc()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcb()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcc()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcd()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dS
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.ct
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gbd()
H.v(p,"$isc",s,"$asc")
if(!C.a.b4(p,r)){r.sbn(p.length)
C.a.h(p,r)}r=i.gcp(i)
g=h.d
f=r.gaO(r)
e=r.gaP(r)
r=r.gaQ()
g.a.uniform3f(g.d,f,e,r)
r=i.gbO()
e=h.b
f=r.gaO(r)
g=r.gaP(r)
r=r.gaQ()
e.a.uniform3f(e.d,f,g,r)
r=i.gbc(i)
g=h.c
f=r.gaO(r)
e=r.gaP(r)
r=r.gaQ()
g.a.uniform3f(g.d,f,e,r)
r=l.cQ(i.gcp(i))
e=r.a
f=r.b
g=r.c
g=r.p(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gan(i)
f=h.f
e=g.gbL()
r=g.gbi()
g=g.gbt()
f.a.uniform3f(f.d,e,r,g)
g=i.gbd()
r=g.gcD(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gf2()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbn())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dT
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.y,t=u.length,s=[P.u],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.cu
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.gbd()
H.v(p,"$isc",r,"$asc")
if(!C.a.b4(p,g)){g.sbn(p.length)
C.a.h(p,g)}d=l.k(0,i.ga_(i))
g=i.ga_(i).bh(new V.U(0,0,0))
f=h.b
e=g.gq(g)
c=g.gu(g)
g=g.gcT(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bh(new V.U(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.e3(0)
c=h.d
m=new Float32Array(H.bw(H.v(new V.cy(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ad(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gan(i)
g=h.e
e=c.gbL()
f=c.gbi()
c=c.gbt()
g.a.uniform3f(g.d,e,f,c)
c=i.gbd()
g=c.gcD(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcD(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gje(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcb()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcc()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcd()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dU
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cv
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gbd()
H.v(p,"$isc",z,"$asc")
if(!C.a.b4(p,s)){s.sbn(p.length)
C.a.h(p,s)}s=i.gbb(i)
r=h.b
g=s.gq(s)
f=s.gu(s)
s=s.gcT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcp(i)
f=h.c
g=s.gaO(s)
r=s.gaP(s)
s=s.gaQ()
f.a.uniform3f(f.d,g,r,s)
s=i.gbO()
r=h.d
g=s.gaO(s)
f=s.gaP(s)
s=s.gaQ()
r.a.uniform3f(r.d,g,f,s)
s=i.gbc(i)
f=h.e
g=s.gaO(s)
r=s.gaP(s)
s=s.gaQ()
f.a.uniform3f(f.d,g,r,s)
s=l.bh(i.gbb(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbd()
r=s.gcD(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gf2()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbn())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gan(i)
r=h.y
g=s.gbL()
f=s.gbi()
s=s.gbt()
r.a.uniform3f(r.d,g,f,s)
s=i.gjm()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjn()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcb()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcc()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcd()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.X(p,this.Q.d)
z=this.a
u=this.Q.d
z.ag(z.dF,z.bB,u)
break
case C.f:this.X(p,this.Q.e)
z=this.a
u=this.Q.e
z.a9(z.dG,z.bB,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga_(u).e3(0)
a.Q=u}z=z.fy
z.toString
z.aj(u.ad(0,!0))}if(w.dy){this.X(p,this.ch)
z=this.a
u=this.ch
z.a9(z.dH,z.dI,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bC
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.X(p,this.cx.d)
z=this.a
u=this.cx.d
z.ag(z.dJ,z.bD,u)
u=this.a
z=this.cx.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.f:this.X(p,this.cx.e)
z=this.a
u=this.cx.e
z.a9(z.dK,z.bD,u)
u=this.a
z=this.cx.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bF
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bE
u.a.uniform1f(u.d,s)
break
case C.e:this.X(p,this.cy.d)
z=this.a
u=this.cy.d
z.ag(z.dL,z.bG,u)
u=this.a
z=this.cy.f
u=u.bF
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bE
z.a.uniform1f(z.d,s)
break
case C.f:this.X(p,this.cy.e)
z=this.a
u=this.cy.e
z.a9(z.dM,z.bG,u)
u=this.a
z=this.cy.f
u=u.bF
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bE
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bH
z.a.uniform1f(z.d,t)
break
case C.e:this.X(p,this.db.d)
z=this.a
t=this.db.d
z.ag(z.dN,z.bI,t)
t=this.a
z=this.db.f
t=t.bH
t.a.uniform1f(t.d,z)
break
case C.f:this.X(p,this.db.e)
z=this.a
t=this.db.e
z.a9(z.dO,z.bI,t)
t=this.a
z=this.db.f
t=t.bH
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.ce(a)
z.aX(a)
z.iC(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hJ()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.d7().az}},iB:{"^":"da;0f,a,b,0c,0d,0e",
fO:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.Q(this.b,y,a,this,[P.u])
z.b=!0
this.a.a3(z)}},
b1:function(){this.cY()
this.fO(1)}},da:{"^":"b;",
a3:[function(a){this.a.a3(H.f(a,"$isw"))},function(){return this.a3(null)},"eK","$1","$0","gbl",0,2,1],
b1:["cY",function(){}],
fS:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.h(this.gbl(),{func:1,ret:-1,args:[D.w]})
C.a.J(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.h(this.gbl(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.Q(this.b+".texture2D",x,this.d,this,[T.eO])
z.b=!0
this.a.a3(z)}},
fT:function(a){},
saZ:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.b1()
this.c=C.e
this.fT(null)
z=this.a
z.a=null
z.a3(null)}this.fS(a)}},iC:{"^":"da;a,b,0c,0d,0e"},bf:{"^":"da;0f,a,b,0c,0d,0e",
fP:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.ah])
y.b=!0
this.a.a3(y)}},
b1:["cZ",function(){this.cY()
this.fP(new V.ah(1,1,1))}]},iE:{"^":"bf;0ch,0f,a,b,0c,0d,0e",
fQ:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.a3(z)}},
b1:function(){this.cZ()
this.fQ(1)}},iF:{"^":"bf;0ch,0f,a,b,0c,0d,0e",
fR:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.a3(z)}},
b1:function(){this.cZ()
this.fR(100)}},dl:{"^":"b;"}}],["","",,T,{"^":"",dm:{"^":"cU;"},eO:{"^":"dm;0b,0c,0d,0e,0f,0r,0x,0y,a"},jF:{"^":"b;a,0b,0c,0d,0e",
i0:function(a,b,c,d,e){var z,y,x,w
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
w=new T.eO(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.P()
z=W.ad
W.a2(x,"load",H.h(new T.jG(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
e6:function(a){return this.i0(a,!1,!1,!1,!1)},
fM:function(a,b,c){var z,y,x,w
b=V.dN(b,2)
z=V.dN(a.width,2)
y=V.dN(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cZ(null,null)
x.width=z
x.height=y
w=H.f(C.l.ep(x,"2d"),"$ise3")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mI(w.getImageData(0,0,x.width,x.height))}}},jG:{"^":"n:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fM(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.iw(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hK()}++x.e}}}],["","",,V,{"^":"",hq:{"^":"b;",
b7:function(a,b){return!0},
j:function(a){return"all"},
$iscc:1},cc:{"^":"b;"},ev:{"^":"b;",
b7:["ey",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b7(0,b))return!0
return!1}],
j:["cX",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$iscc:1},bN:{"^":"ev;0a",
b7:function(a,b){return!this.ey(0,b)},
j:function(a){return"!["+this.cX(0)+"]"}},jj:{"^":"b;0a",
eC:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.b3(0,0,[P.m,P.al])
for(y=new H.et(a,a.gm(a),0,[H.aC(a,"x",0)]);y.I();)z.l(0,y.d,!0)
this.a=z},
b7:function(a,b){return this.a.bv(0,b)},
j:function(a){var z=this.a
return P.cg(z.gap(z),0,null)},
$iscc:1,
t:{
ab:function(a){var z=new V.jj()
z.eC(a)
return z}}},eJ:{"^":"b;a,b,0c,0d",
gi2:function(a){return this.b},
G:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eU(this.a.P(0,b))
w.a=H.e([],[V.cc])
w.c=!1
C.a.h(this.c,w)
return w},
hP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b7(0,a))return w}return},
j:function(a){return this.b}},eR:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hf(this.b,"\n","\\n")
y=H.hf(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eS:{"^":"b;a,b,0c",
j:function(a){return this.b}},jP:{"^":"b;0a,0b,0c",
P:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.eJ(this,b)
z.c=H.e([],[V.eU])
this.a.l(0,b,z)}return z},
bf:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.eS(this,a)
y=P.i
z.c=new H.b3(0,0,[y,y])
this.b.l(0,a,z)}return z},
iB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eR])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hP(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cg(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.gi2(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cg(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.eR(o==null?p.b:o,q,t)}++t}}}},eU:{"^":"ev;b,0c,0a",
j:function(a){return this.b.b+": "+this.cX(0)}}}],["","",,X,{"^":"",e2:{"^":"b;",$isaQ:1},i1:{"^":"eM;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.P()
this.x=z}return z}},iQ:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.P()
this.e=z}return z},
b0:[function(a){var z
H.f(a,"$isw")
z=this.e
if(!(z==null))z.E(a)},function(){return this.b0(null)},"iF","$1","$0","gd0",0,2,1],
sb8:function(a){var z,y,x
if(!J.F(this.a,a)){z=this.a
if(z!=null){z=z.gD()
z.toString
y=H.h(this.gd0(),{func:1,ret:-1,args:[D.w]})
C.a.J(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gD()
z.toString
y=H.h(this.gd0(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.Q("mover",x,this.a,this,[U.aj])
z.b=!0
this.b0(z)}},
$isaQ:1,
$ise2:1},eM:{"^":"b;"}}],["","",,V,{"^":"",
nj:function(a){P.jO(C.G,new V.nk(a))},
nk:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbp")
P.dO(C.h.ek(this.a.ghT(),2)+" fps")}},
j3:{"^":"b;a,b,0c",
br:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fd().gcL().i(0,H.l(z))
if(y==null)if(d){c.$0()
this.dq(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dT(this.c).h(0,v)
t=W.i4("radio")
t.checked=x
t.name=z
z=W.ad
W.a2(t,"change",H.h(new V.j4(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dT(this.c).h(0,w.createElement("br"))},
am:function(a,b,c){return this.br(a,b,c,!1)},
dq:function(a){var z,y,x,w,v
z=P.fd()
y=P.i
x=P.il(z.gcL(),y,y)
x.l(0,this.a,a)
w=z.eg(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.lD([],[]).cR(""),"",v)}},
j4:{"^":"n:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dq(this.d)}}},
jo:{"^":"b;0a,0b",
eE:function(a,b){var z,y,x,w,v,u,t
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
W.a2(z,"scroll",H.h(new V.jr(x),{func:1,ret:-1,args:[t]}),!1,t)},
hw:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.i],"$asc")
this.fY()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iB(C.a.hY(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.he(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cH(C.S,s,C.k,!1)
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
hr:function(a){var z,y,x,w,v,u,t
H.v(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isdk").style
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
t=H.f(w.insertCell(-1),"$isdk")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fY:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jP()
y=P.i
z.a=new H.b3(0,0,[y,V.eJ])
z.b=new H.b3(0,0,[y,V.eS])
z.c=z.P(0,"Start")
y=z.P(0,"Start").G(0,"Bold")
x=V.ab(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Bold").G(0,"Bold")
x=new V.bN()
w=[V.cc]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ab(new H.a6("*"))
C.a.h(x.a,y)
y=z.P(0,"Bold").G(0,"BoldEnd")
x=V.ab(new H.a6("*"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").G(0,"Italic")
x=V.ab(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Italic").G(0,"Italic")
x=new V.bN()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ab(new H.a6("_"))
C.a.h(x.a,y)
y=z.P(0,"Italic").G(0,"ItalicEnd")
x=V.ab(new H.a6("_"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").G(0,"Code")
x=V.ab(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Code").G(0,"Code")
x=new V.bN()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ab(new H.a6("`"))
C.a.h(x.a,y)
y=z.P(0,"Code").G(0,"CodeEnd")
x=V.ab(new H.a6("`"))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"Start").G(0,"LinkHead")
x=V.ab(new H.a6("["))
C.a.h(y.a,x)
y.c=!0
y=z.P(0,"LinkHead").G(0,"LinkTail")
x=V.ab(new H.a6("|"))
C.a.h(y.a,x)
x=z.P(0,"LinkHead").G(0,"LinkEnd")
y=V.ab(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.P(0,"LinkHead").G(0,"LinkHead")
y=new V.bN()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ab(new H.a6("|]"))
C.a.h(y.a,x)
x=z.P(0,"LinkTail").G(0,"LinkEnd")
y=V.ab(new H.a6("]"))
C.a.h(x.a,y)
x.c=!0
x=z.P(0,"LinkTail").G(0,"LinkTail")
y=new V.bN()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ab(new H.a6("|]"))
C.a.h(y.a,x)
C.a.h(z.P(0,"Start").G(0,"Other").a,new V.hq())
x=z.P(0,"Other").G(0,"Other")
y=new V.bN()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ab(new H.a6("*_`["))
C.a.h(y.a,x)
x=z.P(0,"BoldEnd")
x.d=x.a.bf("Bold")
x=z.P(0,"ItalicEnd")
x.d=x.a.bf("Italic")
x=z.P(0,"CodeEnd")
x.d=x.a.bf("Code")
x=z.P(0,"LinkEnd")
x.d=x.a.bf("Link")
x=z.P(0,"Other")
x.d=x.a.bf("Other")
this.b=z},
t:{
jp:function(a,b){var z=new V.jo()
z.eE(a,!0)
return z}}},
jr:{"^":"n:15;a",
$1:function(a){P.jN(C.r,new V.jq(this.a))}},
jq:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.h.ac(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
h8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.jp("Test 018",!0)
y=W.cZ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.hw(H.e(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],x))
z.hr(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.jL(w,!0,!0,!0,!1)
u=new E.b1()
u.a=""
u.b=!0
z=E.b1
t=O.d_(z)
u.y=t
t.bk(u.gi4(),u.gi6())
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
u.sa5(0,null)
u.sb8(null)
u.sa5(0,F.hd(8,null,8))
t=new U.ei()
s=U.aj
t.bT(s)
t.bk(t.gfa(),t.gfz())
t.e=null
t.f=V.cd()
t.r=0
r=v.r
q=new U.kg()
p=U.d0()
p.scS(0,!0)
p.scE(6.283185307179586)
p.scG(0)
p.sY(0,0)
p.scF(100)
p.sV(0)
p.sco(0.5)
q.b=p
p=p.gD()
p.toString
o={func:1,ret:-1,args:[D.w]}
n=H.h(q.gaJ(),o)
C.a.h(p.a,n)
p=U.d0()
p.scS(0,!0)
p.scE(6.283185307179586)
p.scG(0)
p.sY(0,0)
p.scF(100)
p.sV(0)
p.sco(0.5)
q.c=p
C.a.h(p.gD().a,n)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
m=new X.aI(!1,!1,!1)
l=q.d
q.d=m
p=[X.aI]
n=new D.Q("modifiers",l,m,q,p)
n.b=!0
q.T(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.Q("invertX",n,!1,q,[P.al])
n.b=!0
q.T(n)}n=q.r
if(n!==!1){q.r=!1
n=new D.Q("invertY",n,!1,q,[P.al])
n.b=!0
q.T(n)}q.b3(r)
t.h(0,q)
r=v.r
q=new U.kf()
n=U.d0()
n.scS(0,!0)
n.scE(6.283185307179586)
n.scG(0)
n.sY(0,0)
n.scF(100)
n.sV(0)
n.sco(0.2)
q.b=n
n=n.gD()
n.toString
k=H.h(q.gaJ(),o)
C.a.h(n.a,k)
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
m=new X.aI(!0,!1,!1)
l=q.c
q.c=m
n=new D.Q("modifiers",l,m,q,p)
n.b=!0
q.T(n)
q.b3(r)
t.h(0,q)
r=v.r
q=new U.kh()
q.c=0.01
q.d=0
q.e=0
m=new X.aI(!1,!1,!1)
q.b=m
p=new D.Q("modifiers",null,m,q,p)
p.b=!0
q.T(p)
q.b3(r)
t.h(0,q)
u.sb8(t)
j=v.f.e6("../resources/Dirt.png")
i=v.f.e6("../resources/Grass.png")
h=new O.iy()
t=O.d_(V.az)
h.e=t
t.bk(h.gfc(),h.gfd())
t=new O.bf(h,"emission")
t.c=C.c
t.f=new V.ah(0,0,0)
h.f=t
t=new O.bf(h,"ambient")
t.c=C.c
t.f=new V.ah(0,0,0)
h.r=t
t=new O.bf(h,"diffuse")
t.c=C.c
t.f=new V.ah(0,0,0)
h.x=t
t=new O.bf(h,"invDiffuse")
t.c=C.c
t.f=new V.ah(0,0,0)
h.y=t
t=new O.iF(h,"specular")
t.c=C.c
t.f=new V.ah(0,0,0)
t.ch=100
h.z=t
t=new O.iC(h,"bump")
t.c=C.c
h.Q=t
h.ch=null
t=new O.bf(h,"reflect")
t.c=C.c
t.f=new V.ah(0,0,0)
h.cx=t
t=new O.iE(h,"refract")
t.c=C.c
t.f=new V.ah(0,0,0)
t.ch=1
h.cy=t
t=new O.iB(h,"alpha")
t.c=C.c
t.f=1
h.db=t
t=new D.id()
t.bT(D.a4)
t.e=H.e([],[D.cr])
t.f=H.e([],[D.iS])
t.r=H.e([],[D.jw])
t.x=H.e([],[D.jH])
t.y=H.e([],[D.jI])
t.z=H.e([],[D.jJ])
t.Q=null
t.ch=null
t.cV(t.gfb(),t.gfw(),t.gfA())
h.dx=t
r=t.Q
if(r==null){r=D.P()
t.Q=r
t=r}else t=r
r=H.h(h.gfK(),o)
C.a.h(t.a,r)
r=h.dx
t=r.ch
if(t==null){t=D.P()
r.ch=t}r=H.h(h.gbl(),o)
C.a.h(t.a,r)
h.dy=null
r=h.dx
t=U.e7(V.ew(new V.U(0,0,0),new V.A(0,1,0),new V.A(-1,-1,-1)))
g=new V.ah(1,1,1)
q=new D.cr()
q.c=new V.ah(1,1,1)
q.a=new V.A(0,0,1)
l=q.b
q.b=t
t=t.gD()
t.toString
p=H.h(q.geJ(),o)
C.a.h(t.a,p)
t=new D.Q("mover",l,q.b,q,[s])
t.b=!0
q.aE(t)
if(!q.c.v(0,g)){l=q.c
q.c=g
t=new D.Q("color",l,g,q,[V.ah])
t.b=!0
q.aE(t)}r.h(0,q)
h.x.saZ(j)
h.y.saZ(i)
t=new M.hU()
z=O.d_(z)
t.d=z
z.bk(t.gff(),t.gfg())
t.e=null
t.f=null
t.r=null
t.x=null
f=new X.iQ()
f.b=1.0471975511965976
f.c=0.1
f.d=2000
f.sb8(null)
z=f.b
if(!$.p.$2(z,1.0471975511965976)){l=f.b
f.b=1.0471975511965976
z=new D.Q("fov",l,1.0471975511965976,f,[P.u])
z.b=!0
f.b0(z)}z=f.c
if(!$.p.$2(z,0.1)){l=f.c
f.c=0.1
z=new D.Q("near",l,0.1,f,[P.u])
z.b=!0
f.b0(z)}z=f.d
if(!$.p.$2(z,2000)){l=f.d
f.d=2000
z=new D.Q("far",l,2000,f,[P.u])
z.b=!0
f.b0(z)}z=t.a
if(z!==f){if(z!=null){z=z.gD()
z.toString
s=H.h(t.gak(),o)
C.a.J(z.a,s)}l=t.a
t.a=f
z=f.gD()
z.toString
s=H.h(t.gak(),o)
C.a.h(z.a,s)
z=new D.Q("camera",l,t.a,t,[X.e2])
z.b=!0
t.aF(z)}e=new X.i1()
z=new V.aP(0,0,0,1)
e.a=z
e.b=!0
e.c=2000
e.d=!0
e.e=0
e.f=!1
z=V.eF(0,0,1,1)
e.r=z
z=t.b
if(z!==e){if(z!=null){z=z.gD()
z.toString
s=H.h(t.gak(),o)
C.a.J(z.a,s)}l=t.b
t.b=e
z=e.gD()
z.toString
s=H.h(t.gak(),o)
C.a.h(z.a,s)
z=new D.Q("target",l,t.b,t,[X.eM])
z.b=!0
t.aF(z)}t.sei(null)
t.sei(h)
t.d.h(0,u)
t.a.sb8(U.e7(V.aH(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
z=v.d
if(z!==t){if(z!=null){z=z.gD()
z.toString
s=H.h(v.gd_(),o)
C.a.J(z.a,s)}v.d=t
z=t.gD()
z.toString
o=H.h(v.gd_(),o)
C.a.h(z.a,o)
v.eH()}z=new V.j3("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
z.am(0,"Cube",new M.n5(u))
z.am(0,"Cuboid",new M.n6(u))
z.am(0,"Cylinder",new M.n7(u))
z.am(0,"Cone",new M.n8(u))
z.am(0,"LatLonSphere",new M.n9(u))
z.am(0,"IsoSphere",new M.na(u))
z.br(0,"Sphere",new M.nb(u),!0)
z.am(0,"Toroid",new M.nc(u))
z.am(0,"Knot",new M.nd(u))
V.nj(v)},
n5:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.dG(1,null,null,1))}},
n6:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.dG(8,null,null,8))}},
n7:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.fX(1,!0,!0,1,40,1))}},
n8:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.fX(1,!0,!1,1,40,0))}},
n9:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.n2(10,20))}},
na:{"^":"n:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cC()
y=Math.sqrt(5)/2+0.5
x=F.ag(z,new V.A(-1,y,0))
w=F.ag(z,new V.A(1,y,0))
v=-y
u=F.ag(z,new V.A(-1,v,0))
t=F.ag(z,new V.A(1,v,0))
s=F.ag(z,new V.A(0,-1,v))
r=F.ag(z,new V.A(0,1,v))
q=F.ag(z,new V.A(0,-1,y))
p=F.ag(z,new V.A(0,1,y))
o=F.ag(z,new V.A(y,0,1))
n=F.ag(z,new V.A(y,0,-1))
m=F.ag(z,new V.A(v,0,1))
l=F.ag(z,new V.A(v,0,-1))
F.Y(z,x,l,r,2)
F.Y(z,x,r,w,2)
F.Y(z,x,w,p,2)
F.Y(z,x,p,m,2)
F.Y(z,x,m,l,2)
F.Y(z,w,r,n,2)
F.Y(z,r,l,s,2)
F.Y(z,l,m,u,2)
F.Y(z,m,p,q,2)
F.Y(z,p,w,o,2)
F.Y(z,t,n,s,2)
F.Y(z,t,s,u,2)
F.Y(z,t,u,q,2)
F.Y(z,t,q,o,2)
F.Y(z,t,o,n,2)
F.Y(z,s,n,r,2)
F.Y(z,u,s,l,2)
F.Y(z,q,u,m,2)
F.Y(z,o,q,p,2)
F.Y(z,n,o,w,2)
z.e7(new F.du(),new F.ku())
this.a.sa5(0,z)}},
nb:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.hd(6,null,6))}},
nc:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.no(30,1,15,0.5))}},
nd:{"^":"n:0;a",
$0:function(){this.a.sa5(0,F.n0(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.en.prototype
return J.em.prototype}if(typeof a=="string")return J.ca.prototype
if(a==null)return J.eo.prototype
if(typeof a=="boolean")return J.i8.prototype
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.aw=function(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.ck=function(a){if(a==null)return a
if(a.constructor==Array)return J.be.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.h0=function(a){if(typeof a=="number")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.h1=function(a){if(typeof a=="number")return J.c9.prototype
if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.dJ=function(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.b0=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cb.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).v(a,b)}
J.aD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.h0(a).ae(a,b)}
J.hh=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.h0(a).L(a,b)}
J.dQ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.h1(a).k(a,b)}
J.dR=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h5(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aw(a).i(a,b)}
J.cR=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h5(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ck(a).l(a,b,c)}
J.hi=function(a,b){return J.dJ(a).H(a,b)}
J.hj=function(a,b,c){return J.b0(a).fH(a,b,c)}
J.hk=function(a,b,c,d){return J.b0(a).ds(a,b,c,d)}
J.hl=function(a,b){return J.dJ(a).Z(a,b)}
J.hm=function(a,b){return J.h1(a).aN(a,b)}
J.cS=function(a,b,c){return J.aw(a).hD(a,b,c)}
J.cT=function(a,b){return J.ck(a).K(a,b)}
J.hn=function(a,b,c,d){return J.ck(a).aA(a,b,c,d)}
J.dS=function(a,b){return J.ck(a).N(a,b)}
J.dT=function(a){return J.b0(a).gcl(a)}
J.b8=function(a){return J.I(a).gU(a)}
J.bE=function(a){return J.ck(a).ga1(a)}
J.ap=function(a){return J.aw(a).gm(a)}
J.ho=function(a,b){return J.b0(a).iq(a,b)}
J.hp=function(a,b){return J.b0(a).sa2(a,b)}
J.ac=function(a){return J.I(a).j(a)}
I.ao=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cY.prototype
C.H=J.r.prototype
C.a=J.be.prototype
C.I=J.em.prototype
C.d=J.en.prototype
C.t=J.eo.prototype
C.h=J.c9.prototype
C.b=J.ca.prototype
C.P=J.cb.prototype
C.V=H.df.prototype
C.W=W.iM.prototype
C.z=J.iR.prototype
C.X=P.dh.prototype
C.q=J.ci.prototype
C.A=W.bW.prototype
C.B=W.kD.prototype
C.D=new P.hv(!1)
C.C=new P.hu(C.D)
C.E=new P.iP()
C.F=new P.kp()
C.j=new P.lp()
C.c=new A.cp(0,"ColorSourceType.None")
C.i=new A.cp(1,"ColorSourceType.Solid")
C.e=new A.cp(2,"ColorSourceType.Texture2D")
C.f=new A.cp(3,"ColorSourceType.TextureCube")
C.r=new P.aG(0)
C.G=new P.aG(5e6)
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
C.w=H.e(I.ao([127,2047,65535,1114111]),[P.m])
C.m=H.e(I.ao([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.e(I.ao([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.e(I.ao([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.e(I.ao([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.e(I.ao([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.e(I.ao([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.e(I.ao([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.e(I.ao([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.e(I.ao([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.e(I.ao([]),[P.i])
C.U=new H.hH(0,{},C.Q,[P.i,P.i])
C.k=new P.ki(!1)
$.aF=0
$.bF=null
$.dY=null
$.dB=!1
$.h3=null
$.fT=null
$.hc=null
$.cL=null
$.cO=null
$.dK=null
$.bx=null
$.c1=null
$.c2=null
$.dC=!1
$.V=C.j
$.ed=null
$.ec=null
$.eb=null
$.ea=null
$.p=V.iG()
$.eB=null
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
I.$lazy(y,x,w)}})(["e9","$get$e9",function(){return H.h2("_$dart_dartClosure")},"d5","$get$d5",function(){return H.h2("_$dart_js")},"eV","$get$eV",function(){return H.aK(H.cD({
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aK(H.cD({$method$:null,
toString:function(){return"$receiver$"}}))},"eX","$get$eX",function(){return H.aK(H.cD(null))},"eY","$get$eY",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aK(H.cD(void 0))},"f2","$get$f2",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f_","$get$f_",function(){return H.aK(H.f0(null))},"eZ","$get$eZ",function(){return H.aK(function(){try{null.$method$}catch(z){return z.message}}())},"f4","$get$f4",function(){return H.aK(H.f0(void 0))},"f3","$get$f3",function(){return H.aK(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dw","$get$dw",function(){return P.kE()},"c3","$get$c3",function(){return[]},"fg","$get$fg",function(){return P.km()},"fn","$get$fn",function(){return H.iK(H.bw(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fJ","$get$fJ",function(){return P.j9("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fP","$get$fP",function(){return P.mo()},"e8","$get$e8",function(){return{}},"fk","$get$fk",function(){return Z.av(0)},"fi","$get$fi",function(){return Z.av(511)},"aW","$get$aW",function(){return Z.av(1)},"aV","$get$aV",function(){return Z.av(2)},"aU","$get$aU",function(){return Z.av(4)},"aX","$get$aX",function(){return Z.av(8)},"aY","$get$aY",function(){return Z.av(16)},"bU","$get$bU",function(){return Z.av(32)},"bV","$get$bV",function(){return Z.av(64)},"fj","$get$fj",function(){return Z.av(96)},"bu","$get$bu",function(){return Z.av(128)},"aT","$get$aT",function(){return Z.av(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.H,args:[F.af,P.u,P.u]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.k,E.b1]]},{func:1,ret:P.H,args:[F.ar]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.w]},{func:1,ret:-1,args:[W.br]},{func:1,ret:P.u},{func:1,ret:P.H,args:[W.ad]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:-1,args:[P.m,[P.k,V.az]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:-1,args:[P.m,[P.k,D.a4]]},{func:1,ret:-1,args:[P.m,[P.k,U.aj]]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:V.U,args:[P.u]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.aZ,,],args:[,]},{func:1,ret:P.H,args:[P.W]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.al,args:[P.u,P.u]},{func:1,ret:-1,args:[W.bW]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.al,args:[[P.k,D.a4]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:P.al,args:[W.L]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:W.a3,args:[W.L]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.H,args:[P.bp]},{func:1,ret:P.m,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.nn(d||a)
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
Isolate.ao=a.ao
Isolate.dH=a.dH
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
if(typeof dartMainRunner==="function")dartMainRunner(M.h8,[])
else M.h8([])})})()
//# sourceMappingURL=test.dart.js.map
