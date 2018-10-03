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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dh(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.di=function(){}
var dart=[["","",,H,{"^":"",lP:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cy:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dl==null){H.l8()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eO("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cR()]
if(v!=null)return v
v=H.ld(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cR(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
q:{"^":"a;",
q:function(a,b){return a===b},
gV:function(a){return H.bv(a)},
j:["e0",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hk:{"^":"q;",
j:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa3:1},
dW:{"^":"q;",
q:function(a,b){return null==b},
j:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
cS:{"^":"q;",
gV:function(a){return 0},
j:["e1",function(a){return String(a)}]},
hX:{"^":"cS;"},
d8:{"^":"cS;"},
bW:{"^":"cS;",
j:function(a){var z=a[$.$get$dF()]
if(z==null)return this.e1(a)
return"JavaScript function for "+H.k(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscN:1},
aY:{"^":"q;$ti",
h:function(a,b){H.D(b,H.z(a,0))
if(!!a.fixed$length)H.p(P.ah("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.p(P.ah("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
bY:function(a,b){var z,y
H.v(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.p(P.ah("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bg(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a3(z,y,H.k(a[y]))
return z.join(b)},
h7:function(a){return this.A(a,"")},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bC:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.al(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.al(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.z(a,0)])
return H.d(a.slice(b,c),[H.z(a,0)])},
gcm:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.hi())},
au:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
j:function(a){return P.cO(a,"[","]")},
gZ:function(a){return new J.ao(a,a.length,0,[H.z(a,0)])},
gV:function(a){return H.bv(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.ah("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c5(b,"newLength",null))
if(b<0)throw H.h(P.al(b,0,null,"newLength",null))
a.length=b},
a3:function(a,b,c){H.W(b)
H.D(c,H.z(a,0))
if(!!a.immutable$list)H.p(P.ah("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aT(a,b))
if(b>=a.length||b<0)throw H.h(H.aT(a,b))
a[b]=c},
$ise:1,
$isf:1,
p:{
hj:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.al(a,0,4294967295,"length",null))
return J.dT(new Array(a),b)},
dT:function(a,b){return J.bo(H.d(a,[b]))},
bo:function(a){H.bQ(a)
a.fixed$length=Array
return a}}},
lO:{"^":"aY;$ti"},
ao:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cg:{"^":"q;",
hD:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ah(""+a+".toInt()"))},
cj:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ah(""+a+".floor()"))},
T:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ah(""+a+".round()"))},
dR:function(a,b){var z,y
if(b>20)throw H.h(P.al(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
dX:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ah("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bh:function(a,b){var z
if(a>0)z=this.fj(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fj:function(a,b){return b>31?0:a>>>b},
ah:function(a,b){if(typeof b!=="number")throw H.h(H.aS(b))
return a<b},
$isu:1,
$isX:1},
dV:{"^":"cg;",$isB:1},
dU:{"^":"cg;"},
cQ:{"^":"q;",
c6:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aT(a,b))
if(b<0)throw H.h(H.aT(a,b))
if(b>=a.length)H.p(H.aT(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.h(H.aT(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.T(b)
if(typeof b!=="string")throw H.h(P.c5(b,null,null))
return a+b},
bD:function(a,b,c){H.W(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.ck(b,null,null))
if(b>c)throw H.h(P.ck(b,null,null))
if(c>a.length)throw H.h(P.ck(c,null,null))
return a.substring(b,c)},
cG:function(a,b){return this.bD(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hk:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ag:function(a,b){return this.hk(a,b," ")},
fU:function(a,b,c){if(c>a.length)throw H.h(P.al(c,0,a.length,null,null))
return H.fs(a,b,c)},
j:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ise9:1,
$iso:1}}],["","",,H,{"^":"",
hi:function(){return new P.iz("No element")},
a_:{"^":"j6;a",
gk:function(a){return this.a.length},
i:function(a,b){return C.i.c6(this.a,b)},
$aseP:function(){return[P.B]},
$ast:function(){return[P.B]},
$ase:function(){return[P.B]},
$asf:function(){return[P.B]}},
h1:{"^":"e;"},
e0:{"^":"a;a,b,c,0d,$ti",
gR:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.c3(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bg(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
hB:{"^":"e;a,b,$ti",
gZ:function(a){return new H.hC(J.bS(this.a),this.b,this.$ti)},
gk:function(a){return J.bd(this.a)},
D:function(a,b){return this.b.$1(J.dr(this.a,b))},
$ase:function(a,b){return[b]}},
hC:{"^":"cP;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascP:function(a,b){return[b]}},
jm:{"^":"e;a,b,$ti",
gZ:function(a){return new H.jn(J.bS(this.a),this.b,this.$ti)}},
jn:{"^":"cP;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
cd:{"^":"a;$ti"},
eP:{"^":"a;$ti"},
j6:{"^":"ch+eP;"}}],["","",,H,{"^":"",
l3:function(a){return init.types[H.W(a)]},
lb:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isE},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.h(H.aS(a))
return z},
bv:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$isd8){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bd(w,0)===36)w=C.i.cG(w,1)
r=H.dm(H.bQ(H.aU(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ec:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i6:function(a){var z,y,x,w
z=H.d([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aS(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bh(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aS(w))}return H.ec(z)},
ed:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aS(x))
if(x<0)throw H.h(H.aS(x))
if(x>65535)return H.i6(a)}return H.ec(a)},
i5:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bh(z,10))>>>0,56320|z&1023)}throw H.h(P.al(a,0,1114111,null,null))},
ac:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i4:function(a){return a.b?H.ac(a).getUTCFullYear()+0:H.ac(a).getFullYear()+0},
i2:function(a){return a.b?H.ac(a).getUTCMonth()+1:H.ac(a).getMonth()+1},
hZ:function(a){return a.b?H.ac(a).getUTCDate()+0:H.ac(a).getDate()+0},
i_:function(a){return a.b?H.ac(a).getUTCHours()+0:H.ac(a).getHours()+0},
i1:function(a){return a.b?H.ac(a).getUTCMinutes()+0:H.ac(a).getMinutes()+0},
i3:function(a){return a.b?H.ac(a).getUTCSeconds()+0:H.ac(a).getSeconds()+0},
i0:function(a){return a.b?H.ac(a).getUTCMilliseconds()+0:H.ac(a).getMilliseconds()+0},
r:function(a){throw H.h(H.aS(a))},
i:function(a,b){if(a==null)J.bd(a)
throw H.h(H.aT(a,b))},
aT:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
z=H.W(J.bd(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.ck(b,"index",null)},
l_:function(a,b,c){if(a>c)return new P.cj(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cj(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
aS:function(a){return new P.aC(!0,a,null,null)},
kV:function(a){if(typeof a!=="number")throw H.h(H.aS(a))
return a},
h:function(a){var z
if(a==null)a=new P.e8()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fu})
z.name=""}else z.toString=H.fu
return z},
fu:function(){return J.a9(this.dartException)},
p:function(a){throw H.h(a)},
y:function(a){throw H.h(P.bg(a))},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lo(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bh(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cT(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e7(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ew()
u=$.$get$ex()
t=$.$get$ey()
s=$.$get$ez()
r=$.$get$eD()
q=$.$get$eE()
p=$.$get$eB()
$.$get$eA()
o=$.$get$eG()
n=$.$get$eF()
m=v.af(y)
if(m!=null)return z.$1(H.cT(H.T(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.cT(H.T(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e7(H.T(y),m))}}return z.$1(new H.j5(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eh()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aC(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eh()
return a},
bb:function(a){var z
if(a==null)return new H.f4(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f4(a)},
l1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a3(0,a[y],a[x])}return b},
la:function(a,b,c,d,e,f){H.j(a,"$iscN")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.n("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.W(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.la)
a.$identity=z
return z},
fL:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isf){z.$reflectionInfo=d
x=H.i9(z).r}else x=d
w=e?Object.create(new H.iA().constructor.prototype):Object.create(new H.cD(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.E()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dB(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l3,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dw:H.cE
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dB(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fI:function(a,b,c,d){var z=H.cE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dB:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fK(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fI(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.E()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.c6("self")
$.be=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.E()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.c6("self")
$.be=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fJ:function(a,b,c,d){var z,y
z=H.cE
y=H.dw
switch(b?-1:a){case 0:throw H.h(H.ij("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fK:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.c6("self")
$.be=z}y=$.dv
if(y==null){y=H.c6("receiver")
$.dv=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fJ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.au
if(typeof y!=="number")return y.E()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.E()
$.au=y+1
return new Function(z+y+"}")()},
dh:function(a,b,c,d,e,f,g){var z,y
z=J.bo(H.bQ(b))
H.W(c)
y=!!J.K(d).$isf?J.bo(d):d
return H.fL(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aA(a,"String"))},
lg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aA(a,"num"))},
fi:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aA(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aA(a,"int"))},
fq:function(a,b){throw H.h(H.aA(a,H.T(b).substring(3)))},
li:function(a,b){var z=J.c3(b)
throw H.h(H.fH(a,z.bD(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fq(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.li(a,b)},
bQ:function(a){if(a==null)return a
if(!!J.K(a).$isf)return a
throw H.h(H.aA(a,"List"))},
lc:function(a,b){if(a==null)return a
if(!!J.K(a).$isf)return a
if(J.K(a)[b])return a
H.fq(a,b)},
fj:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.W(z)]
else return a.$S()}return},
c2:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fj(J.K(a))
if(z==null)return!1
y=H.fm(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.dd)return a
$.dd=!0
try{if(H.c2(a,b))return a
z=H.c4(b)
y=H.aA(a,z)
throw H.h(y)}finally{$.dd=!1}},
dj:function(a,b){if(a!=null&&!H.dg(a,b))H.p(H.aA(a,H.c4(b)))
return a},
fd:function(a){var z
if(a instanceof H.w){z=H.fj(J.K(a))
if(z!=null)return H.c4(z)
return"Closure"}return H.b0(a)},
ln:function(a){throw H.h(new P.fS(H.T(a)))},
fk:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
aU:function(a){if(a==null)return
return a.$ti},
mC:function(a,b,c){return H.bc(a["$as"+H.k(c)],H.aU(b))},
bP:function(a,b,c,d){var z
H.T(c)
H.W(d)
z=H.bc(a["$as"+H.k(c)],H.aU(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.T(b)
H.W(c)
z=H.bc(a["$as"+H.k(b)],H.aU(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.W(b)
z=H.aU(a)
return z==null?null:z[b]},
c4:function(a){var z=H.aV(a,null)
return z},
aV:function(a,b){var z,y
H.v(b,"$isf",[P.o],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dm(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.k(b[y])}if('func' in a)return H.kL(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.v(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aV(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aV(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aV(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l0(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dm:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isf",[P.o],"$asf")
if(a==null)return""
z=new P.c_("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}v="<"+z.j(0)+">"
return v},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aU(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fg(H.bc(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.T(b)
H.bQ(c)
H.T(d)
if(a==null)return a
z=H.bO(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dm(c,0,null)
throw H.h(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fg:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
mA:function(a,b,c){return a.apply(b,H.bc(J.K(b)["$as"+H.k(c)],H.aU(b)))},
fn:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fn(z)}return!1},
dg:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fn(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dg(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c2(a,b)}y=J.K(a).constructor
x=H.aU(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.an(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.dg(a,b))throw H.h(H.aA(a,H.c4(b)))
return a},
an:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fm(a,b,c,d)
if('func' in a)return c.builtin$cls==="cN"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,x,d)
else if(H.an(a,b,x,d))return!0
else{if(!('$is'+"bl" in y.prototype))return!1
w=y.prototype["$as"+"bl"]
v=H.bc(w,z?a.slice(1):null)
return H.an(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c4(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fg(H.bc(r,z),b,u,d)},
fm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.an(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.an(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.an(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lf(m,b,l,d)},
lf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
mB:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
ld:function(a){var z,y,x,w,v,u
z=H.T($.fl.$1(a))
y=$.cw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cz[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.ff.$2(a,z))
if(z!=null){y=$.cw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cz[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cA(x)
$.cw[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cz[z]=x
return x}if(v==="-"){u=H.cA(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fp(a,x)
if(v==="*")throw H.h(P.eO(z))
if(init.leafTags[z]===true){u=H.cA(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fp(a,x)},
fp:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dp(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cA:function(a){return J.dp(a,!1,null,!!a.$isE)},
le:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cA(z)
else return J.dp(z,c,null,null)},
l8:function(){if(!0===$.dl)return
$.dl=!0
H.l9()},
l9:function(){var z,y,x,w,v,u,t,s
$.cw=Object.create(null)
$.cz=Object.create(null)
H.l4()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fr.$1(v)
if(u!=null){t=H.le(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l4:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b8(C.B,H.b8(C.G,H.b8(C.n,H.b8(C.n,H.b8(C.F,H.b8(C.C,H.b8(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fl=new H.l5(v)
$.ff=new H.l6(u)
$.fr=new H.l7(t)},
b8:function(a,b){return a(b)||b},
fs:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ft:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i8:{"^":"a;a,b,c,d,e,f,r,0x",p:{
i9:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bo(z)
y=z[0]
x=z[1]
return new H.i8(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iW:{"^":"a;a,b,c,d,e,f",
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
p:{
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
co:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eC:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hU:{"^":"Y;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e7:function(a,b){return new H.hU(a,b==null?null:b.method)}}},
hn:{"^":"Y;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
p:{
cT:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hn(a,y,z?null:b.receiver)}}},
j5:{"^":"Y;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lo:{"^":"w:13;a",
$1:function(a){if(!!J.K(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f4:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isas:1},
w:{"^":"a;",
j:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gdU:function(){return this},
$iscN:1,
gdU:function(){return this}},
el:{"^":"w;"},
iA:{"^":"el;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cD:{"^":"el;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bv(this.a)
else y=typeof z!=="object"?J.aX(z):H.bv(z)
return(y^H.bv(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
p:{
cE:function(a){return a.a},
dw:function(a){return a.c},
c6:function(a){var z,y,x,w,v
z=new H.cD("self","target","receiver","name")
y=J.bo(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iX:{"^":"Y;a",
j:function(a){return this.a},
p:{
aA:function(a,b){return new H.iX("TypeError: "+H.k(P.cc(a))+": type '"+H.fd(a)+"' is not a subtype of type '"+b+"'")}}},
fG:{"^":"Y;a",
j:function(a){return this.a},
p:{
fH:function(a,b){return new H.fG("CastError: "+H.k(P.cc(a))+": type '"+H.fd(a)+"' is not a subtype of type '"+b+"'")}}},
ii:{"^":"Y;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
p:{
ij:function(a){return new H.ii(a)}}},
aZ:{"^":"hz;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaw:function(a){return new H.e_(this,[H.z(this,0)])},
dc:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cT(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cT(y,b)}else return this.h5(b)},
h5:function(a){var z=this.d
if(z==null)return!1
return this.ck(this.bL(z,J.aX(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.h6(b)},
h6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bL(z,J.aX(a)&0x3ffffff)
x=this.ck(y,a)
if(x<0)return
return y[x].b},
a3:function(a,b,c){var z,y,x,w,v,u
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bR()
this.b=z}this.cM(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bR()
this.c=y}this.cM(y,b,c)}else{x=this.d
if(x==null){x=this.bR()
this.d=x}w=J.aX(b)&0x3ffffff
v=this.bL(x,w)
if(v==null)this.bW(x,w,[this.bS(b,c)])
else{u=this.ck(v,b)
if(u>=0)v[u].b=c
else v.push(this.bS(b,c))}}},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bg(this))
z=z.c}},
cM:function(a,b,c){var z
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
z=this.be(a,b)
if(z==null)this.bW(a,b,this.bS(b,c))
else z.b=c},
ey:function(){this.r=this.r+1&67108863},
bS:function(a,b){var z,y
z=new H.hr(H.D(a,H.z(this,0)),H.D(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ey()
return z},
ck:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
j:function(a){return P.e2(this)},
be:function(a,b){return a[b]},
bL:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
er:function(a,b){delete a[b]},
cT:function(a,b){return this.be(a,b)!=null},
bR:function(){var z=Object.create(null)
this.bW(z,"<non-identifier-key>",z)
this.er(z,"<non-identifier-key>")
return z},
$isdZ:1},
hr:{"^":"a;a,b,0c,0d"},
e_:{"^":"h1;a,$ti",
gk:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.hs(z,z.r,this.$ti)
y.c=z.e
return y}},
hs:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bg(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
l5:{"^":"w:13;a",
$1:function(a){return this.a(a)}},
l6:{"^":"w:39;a",
$2:function(a,b){return this.a(a,b)}},
l7:{"^":"w:35;a",
$1:function(a){return this.a(H.T(a))}},
hl:{"^":"a;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$ise9:1,
p:{
hm:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.ha("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l0:function(a){return J.dT(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b6:function(a){return a},
aR:function(a,b,c){H.bQ(b)
if(a>>>0!==a||a>=c)throw H.h(H.aT(b,a))},
kK:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l_(a,b,c))
return b},
hR:{"^":"q;",$isml:1,"%":"DataView;ArrayBufferView;cZ|eZ|f_|hQ|f0|f1|aN"},
cZ:{"^":"hR;",
gk:function(a){return a.length},
$isE:1,
$asE:I.di},
hQ:{"^":"f_;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
$ascd:function(){return[P.u]},
$ast:function(){return[P.u]},
$ise:1,
$ase:function(){return[P.u]},
$isf:1,
$asf:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
aN:{"^":"f1;",
$ascd:function(){return[P.B]},
$ast:function(){return[P.B]},
$ise:1,
$ase:function(){return[P.B]},
$isf:1,
$asf:function(){return[P.B]}},
lX:{"^":"aN;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lY:{"^":"aN;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lZ:{"^":"aN;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m_:{"^":"aN;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m0:{"^":"aN;",
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m1:{"^":"aN;",
gk:function(a){return a.length},
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hS:{"^":"aN;",
gk:function(a){return a.length},
i:function(a,b){H.aR(b,a,a.length)
return a[b]},
bC:function(a,b,c){return new Uint8Array(a.subarray(b,H.kK(b,c,a.length)))},
"%":";Uint8Array"},
eZ:{"^":"cZ+t;"},
f_:{"^":"eZ+cd;"},
f0:{"^":"cZ+t;"},
f1:{"^":"f0+cd;"}}],["","",,P,{"^":"",
jp:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kS()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.jr(z),1)).observe(y,{childList:true})
return new P.jq(z,y,x)}else if(self.setImmediate!=null)return P.kT()
return P.kU()},
mp:[function(a){self.scheduleImmediate(H.b9(new P.js(H.c(a,{func:1,ret:-1})),0))},"$1","kS",4,0,10],
mq:[function(a){self.setImmediate(H.b9(new P.jt(H.c(a,{func:1,ret:-1})),0))},"$1","kT",4,0,10],
mr:[function(a){P.d5(C.l,H.c(a,{func:1,ret:-1}))},"$1","kU",4,0,10],
d5:function(a,b){var z
H.c(b,{func:1,ret:-1})
z=C.f.a_(a.a,1000)
return P.ko(z<0?0:z,b)},
er:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.b2]})
z=C.f.a_(a.a,1000)
return P.kp(z<0?0:z,b)},
kO:function(a,b){if(H.c2(a,{func:1,args:[P.a,P.as]}))return b.ht(a,null,P.a,P.as)
if(H.c2(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kN:function(){var z,y
for(;z=$.b7,z!=null;){$.bM=null
y=z.b
$.b7=y
if(y==null)$.bL=null
z.a.$0()}},
mz:[function(){$.de=!0
try{P.kN()}finally{$.bM=null
$.de=!1
if($.b7!=null)$.$get$da().$1(P.fh())}},"$0","fh",0,0,3],
fc:function(a){var z=new P.eU(H.c(a,{func:1,ret:-1}))
if($.b7==null){$.bL=z
$.b7=z
if(!$.de)$.$get$da().$1(P.fh())}else{$.bL.b=z
$.bL=z}},
kR:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.b7
if(z==null){P.fc(a)
$.bM=$.bL
return}y=new P.eU(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.b7=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
lj:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.P
if(C.j===y){P.cv(null,null,C.j,a)
return}y.toString
P.cv(null,null,y,H.c(y.c1(a),z))},
eq:function(a,b){var z,y
z={func:1,ret:-1}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.d5(a,b)}return P.d5(a,H.c(y.c1(b),z))},
iT:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b2]}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.er(a,b)}x=y.d8(b,P.b2)
$.P.toString
return P.er(a,H.c(x,z))},
cu:function(a,b,c,d,e){var z={}
z.a=d
P.kR(new P.kP(z,e))},
fa:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fb:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kQ:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cv:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c1(d):c.fS(d,-1)
P.fc(d)},
jr:{"^":"w:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jq:{"^":"w:29;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
js:{"^":"w:2;a",
$0:function(){this.a.$0()}},
jt:{"^":"w:2;a",
$0:function(){this.a.$0()}},
f7:{"^":"a;a,0b,c",
ed:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.kr(this,b),0),a)
else throw H.h(P.ah("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b9(new P.kq(this,a,Date.now(),b),0),a)
else throw H.h(P.ah("Periodic timer."))},
$isb2:1,
p:{
ko:function(a,b){var z=new P.f7(!0,0)
z.ed(a,b)
return z},
kp:function(a,b){var z=new P.f7(!1,0)
z.ee(a,b)
return z}}},
kr:{"^":"w:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kq:{"^":"w:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.e3(w,x)}z.c=y
this.d.$1(z)}},
b5:{"^":"a;0a,b,c,d,e,$ti",
hc:function(a){if(this.c!==6)return!0
return this.b.b.cu(H.c(this.d,{func:1,ret:P.a3,args:[P.a]}),a.a,P.a3,P.a)},
h4:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c2(z,{func:1,args:[P.a,P.as]}))return H.dj(w.hy(z,a.a,a.b,null,y,P.as),x)
else return H.dj(w.cu(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;d2:a<,b,0fb:c<,$ti",
dQ:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kO(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.P,[c])
w=b==null?1:3
this.cN(new P.b5(x,w,a,b,[z,c]))
return x},
hC:function(a,b){return this.dQ(a,null,b)},
cN:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb5")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaK")
z=y.a
if(z<4){y.cN(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cv(null,null,z,H.c(new P.jH(this,a),{func:1,ret:-1}))}},
cZ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb5")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaK")
y=u.a
if(y<4){u.cZ(a)
return}this.a=y
this.c=u.c}z.a=this.bg(a)
y=this.b
y.toString
P.cv(null,null,y,H.c(new P.jM(z,this),{func:1,ret:-1}))}},
bU:function(){var z=H.j(this.c,"$isb5")
this.c=null
return this.bg(z)},
bg:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cQ:function(a){var z,y,x,w
z=H.z(this,0)
H.dj(a,{futureOr:1,type:z})
y=this.$ti
x=H.bO(a,"$isbl",y,"$asbl")
if(x){z=H.bO(a,"$isaK",y,null)
if(z)P.eW(a,this)
else P.jI(a,this)}else{w=this.bU()
H.D(a,z)
this.a=4
this.c=a
P.bJ(this,w)}},
bH:[function(a,b){var z
H.j(b,"$isas")
z=this.bU()
this.a=8
this.c=new P.ai(a,b)
P.bJ(this,z)},function(a){return this.bH(a,null)},"hJ","$2","$1","gen",4,2,28],
$isbl:1,
p:{
jI:function(a,b){var z,y,x
b.a=1
try{a.dQ(new P.jJ(b),new P.jK(b),null)}catch(x){z=H.aW(x)
y=H.bb(x)
P.lj(new P.jL(b,z,y))}},
eW:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaK")
if(z>=4){y=b.bU()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.j(b.c,"$isb5")
b.a=2
b.c=a
a.cZ(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cu(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bJ(z.a,b)}y=z.a
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
if(p){H.j(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cu(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jP(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jO(x,b,r).$0()}else if((y&2)!==0)new P.jN(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbl){if(y.a>=4){n=H.j(t.c,"$isb5")
t.c=null
b=t.bg(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eW(y,t)
return}}m=b.b
n=H.j(m.c,"$isb5")
m.c=null
b=m.bg(n)
y=x.a
u=x.b
if(!y){H.D(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
jH:{"^":"w:2;a,b",
$0:function(){P.bJ(this.a,this.b)}},
jM:{"^":"w:2;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
jJ:{"^":"w:14;a",
$1:function(a){var z=this.a
z.a=0
z.cQ(a)}},
jK:{"^":"w:27;a",
$2:function(a,b){this.a.bH(a,H.j(b,"$isas"))},
$1:function(a){return this.$2(a,null)}},
jL:{"^":"w:2;a,b,c",
$0:function(){this.a.bH(this.b,this.c)}},
jP:{"^":"w:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dO(H.c(w.d,{func:1}),null)}catch(v){y=H.aW(v)
x=H.bb(v)
if(this.d){w=H.j(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.K(z).$isbl){if(z instanceof P.aK&&z.gd2()>=4){if(z.gd2()===8){w=this.b
w.b=H.j(z.gfb(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hC(new P.jQ(t),null)
w.a=!1}}},
jQ:{"^":"w:24;a",
$1:function(a){return this.a}},
jO:{"^":"w:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.D(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cu(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aW(t)
y=H.bb(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
jN:{"^":"w:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isai")
w=this.c
if(w.hc(z)&&w.e!=null){v=this.b
v.b=w.h4(z)
v.a=!1}}catch(u){y=H.aW(u)
x=H.bb(u)
w=H.j(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
eU:{"^":"a;a,0b"},
d2:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aK(0,$.P,[P.B])
z.a=0
this.ha(new P.iD(z,this),!0,new P.iE(z,y),y.gen())
return y}},
iD:{"^":"w;a,b",
$1:function(a){H.D(a,H.aB(this.b,"d2",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aB(this.b,"d2",0)]}}},
iE:{"^":"w:2;a,b",
$0:function(){this.b.cQ(this.a.a)}},
ej:{"^":"a;$ti"},
iC:{"^":"a;"},
b2:{"^":"a;"},
ai:{"^":"a;a,b",
j:function(a){return H.k(this.a)},
$isY:1},
ky:{"^":"a;",$ismo:1},
kP:{"^":"w:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e8()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.j(0)
throw x}},
ka:{"^":"ky;",
hz:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fa(null,null,this,a,-1)}catch(x){z=H.aW(x)
y=H.bb(x)
P.cu(null,null,this,z,H.j(y,"$isas"))}},
hA:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fb(null,null,this,a,b,-1,c)}catch(x){z=H.aW(x)
y=H.bb(x)
P.cu(null,null,this,z,H.j(y,"$isas"))}},
fS:function(a,b){return new P.kc(this,H.c(a,{func:1,ret:b}),b)},
c1:function(a){return new P.kb(this,H.c(a,{func:1,ret:-1}))},
d8:function(a,b){return new P.kd(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
dO:function(a,b){H.c(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fa(null,null,this,a,b)},
cu:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.P===C.j)return a.$1(b)
return P.fb(null,null,this,a,b,c,d)},
hy:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kQ(null,null,this,a,b,c,d,e,f)},
ht:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
kc:{"^":"w;a,b,c",
$0:function(){return this.a.dO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kb:{"^":"w:3;a,b",
$0:function(){return this.a.hz(this.b)}},
kd:{"^":"w;a,b,c",
$1:function(a){var z=this.c
return this.a.hA(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hu:function(a,b,c){H.bQ(a)
return H.v(H.l1(a,new H.aZ(0,0,[b,c])),"$isdZ",[b,c],"$asdZ")},
ht:function(a,b){return new H.aZ(0,0,[a,b])},
hv:function(a,b,c,d){return new P.jX(0,0,[d])},
hh:function(a,b,c){var z,y
if(P.df(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.kM(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ek(b,H.lc(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cO:function(a,b,c){var z,y,x
if(P.df(a))return b+"..."+c
z=new P.c_(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.ek(x.gaD(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
df:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
kM:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.k(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.C();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e2:function(a){var z,y,x
z={}
if(P.df(a))return"{...}"
y=new P.c_("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
J.fy(a,new P.hA(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
jX:{"^":"jR;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.eY(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.D(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dc()
this.b=z}return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dc()
this.c=y}return this.cO(y,b)}else return this.eg(0,b)},
eg:function(a,b){var z,y,x
H.D(b,H.z(this,0))
z=this.d
if(z==null){z=P.dc()
this.d=z}y=this.cR(b)
x=z[y]
if(x==null)z[y]=[this.bG(b)]
else{if(this.cW(x,b)>=0)return!1
x.push(this.bG(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d_(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d_(this.c,b)
else return this.f6(0,b)},
f6:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ev(z,b)
x=this.cW(y,b)
if(x<0)return!1
this.d4(y.splice(x,1)[0])
return!0},
cO:function(a,b){H.D(b,H.z(this,0))
if(H.j(a[b],"$isdb")!=null)return!1
a[b]=this.bG(b)
return!0},
d_:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isdb")
if(z==null)return!1
this.d4(z)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&67108863},
bG:function(a){var z,y
z=new P.db(H.D(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cP()
return z},
d4:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cP()},
cR:function(a){return J.aX(a)&0x3ffffff},
ev:function(a,b){return a[this.cR(b)]},
cW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
p:{
dc:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
db:{"^":"a;a,0b,0c"},
jY:{"^":"a;a,b,0c,0d,$ti",
gR:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bg(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.z(this,0))
this.c=z.b
return!0}}},
p:{
eY:function(a,b,c){var z=new P.jY(a,b,[c])
z.c=a.e
return z}}},
jR:{"^":"ik;"},
ch:{"^":"jZ;",$ise:1,$isf:1},
t:{"^":"a;$ti",
gZ:function(a){return new H.e0(a,this.gk(a),0,[H.bP(this,a,"t",0)])},
D:function(a,b){return this.i(a,b)},
hF:function(a,b){var z,y,x
z=H.d([],[H.bP(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.a3(z,y,this.i(a,y));++y}return z},
hE:function(a){return this.hF(a,!0)},
j:function(a){return P.cO(a,"[","]")}},
hz:{"^":"ae;"},
hA:{"^":"w:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ae:{"^":"a;$ti",
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bP(this,a,"ae",0),H.bP(this,a,"ae",1)]})
for(z=J.bS(this.gaw(a));z.C();){y=z.gR(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.bd(this.gaw(a))},
j:function(a){return P.e2(a)},
$isa4:1},
im:{"^":"a;$ti",
j:function(a){return P.cO(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.ds("index"))
if(b<0)H.p(P.al(b,0,null,"index",null))
for(z=P.eY(this,this.r,H.z(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.h(P.O(b,this,"index",null,y))},
$ise:1},
ik:{"^":"im;"},
jZ:{"^":"a+t;"}}],["","",,P,{"^":"",cH:{"^":"a;$ti"},dC:{"^":"iC;$ti"},h3:{"^":"cH;",
$ascH:function(){return[P.o,[P.f,P.B]]}},jc:{"^":"h3;a"},jd:{"^":"dC;",
fW:function(a,b,c){var z,y,x,w
z=a.length
P.ee(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kx(0,0,x)
if(w.eu(a,b,z)!==z)w.d5(C.i.c6(a,z-1),0)
return C.J.bC(x,0,w.b)},
fV:function(a){return this.fW(a,0,null)},
$asdC:function(){return[P.o,[P.f,P.B]]}},kx:{"^":"a;a,b,c",
d5:function(a,b){var z,y,x,w,v
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
eu:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c6(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bd(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d5(w,C.i.bd(a,u)))x=u}else if(w<=2047){v=this.b
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
h5:function(a){var z=J.K(a)
if(!!z.$isw)return z.j(a)
return"Instance of '"+H.b0(a)+"'"},
hw:function(a,b,c,d){var z,y
H.D(b,d)
z=J.hj(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a3(z,y,b)
return H.v(z,"$isf",[d],"$asf")},
hx:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gZ(a);x.C();)C.a.h(y,H.D(x.gR(x),c))
if(b)return y
return H.v(J.bo(y),"$isf",z,"$asf")},
d3:function(a,b,c){var z,y
z=P.B
H.v(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.v(a,"$isaY",[z],"$asaY")
y=a.length
c=P.ee(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ah()
z=c<y}else z=!0
return H.ed(z?C.a.bC(a,b,c):a)}return P.iF(a,b,c)},
iF:function(a,b,c){var z,y,x
H.v(a,"$ise",[P.B],"$ase")
z=J.bS(a)
for(y=0;y<b;++y)if(!z.C())throw H.h(P.al(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gR(z))
return H.ed(x)},
ia:function(a,b,c){return new H.hl(a,H.hm(a,!1,!0,!1))},
kw:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isf",[P.B],"$asf")
if(c===C.r){z=$.$get$f9().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.fV(H.D(b,H.aB(c,"cH",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.i5(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h5(a)},
n:function(a){return new P.eV(a)},
dq:function(a){H.lh(a)},
a3:{"^":"a;"},
"+bool":0,
aq:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.f.bh(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fT(H.i4(this))
y=P.bT(H.i2(this))
x=P.bT(H.hZ(this))
w=P.bT(H.i_(this))
v=P.bT(H.i1(this))
u=P.bT(H.i3(this))
t=P.fU(H.i0(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fT:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bT:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"X;"},
"+double":0,
bi:{"^":"a;a",
ah:function(a,b){return C.f.ah(this.a,H.j(b,"$isbi").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.h0()
y=this.a
if(y<0)return"-"+new P.bi(0-y).j(0)
x=z.$1(C.f.a_(y,6e7)%60)
w=z.$1(C.f.a_(y,1e6)%60)
v=new P.h_().$1(y%1e6)
return""+C.f.a_(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
p:{
dN:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h_:{"^":"w:23;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h0:{"^":"w:23;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
e8:{"^":"Y;",
j:function(a){return"Throw of null."}},
aC:{"^":"Y;a,b,c,d",
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbJ()+y+x
if(!this.a)return w
v=this.gbI()
u=P.cc(this.b)
return w+v+": "+H.k(u)},
p:{
fA:function(a){return new P.aC(!1,null,null,a)},
c5:function(a,b,c){return new P.aC(!0,a,b,c)},
ds:function(a){return new P.aC(!1,null,a,"Must not be null")}}},
cj:{"^":"aC;e,f,a,b,c,d",
gbJ:function(){return"RangeError"},
gbI:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
p:{
ck:function(a,b,c){return new P.cj(null,null,!0,a,b,"Value not in range")},
al:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
ee:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.h(P.al(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.h(P.al(b,a,c,"end",f))
return b}return c}}},
hg:{"^":"aC;e,k:f>,a,b,c,d",
gbJ:function(){return"RangeError"},
gbI:function(){if(J.fv(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
p:{
O:function(a,b,c,d,e){var z=H.W(e!=null?e:J.bd(b))
return new P.hg(b,z,!0,a,c,"Index out of range")}}},
j7:{"^":"Y;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
ah:function(a){return new P.j7(a)}}},
j4:{"^":"Y;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eO:function(a){return new P.j4(a)}}},
iz:{"^":"Y;a",
j:function(a){return"Bad state: "+this.a}},
fO:{"^":"Y;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cc(z))+"."},
p:{
bg:function(a){return new P.fO(a)}}},
hV:{"^":"a;",
j:function(a){return"Out of Memory"},
$isY:1},
eh:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isY:1},
fS:{"^":"Y;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eV:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
ha:{"^":"a;a,b,c",
j:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bD(x,0,75)+"..."
return y+"\n"+x}},
B:{"^":"X;"},
"+int":0,
e:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gZ(this)
for(y=0;z.C();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.ds("index"))
if(b<0)H.p(P.al(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.C();){x=z.gR(z)
if(b===y)return x;++y}throw H.h(P.O(b,this,"index",null,y))},
j:function(a){return P.hh(this,"(",")")}},
cP:{"^":"a;$ti"},
f:{"^":"a;$ti",$ise:1},
"+List":0,
a4:{"^":"a;$ti"},
I:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
X:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gV:function(a){return H.bv(this)},
j:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.j(this)}},
as:{"^":"a;"},
o:{"^":"a;",$ise9:1},
"+String":0,
c_:{"^":"a;aD:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ek:function(a,b,c){var z=J.bS(b)
if(!z.C())return a
if(c.length===0){do a+=H.k(z.gR(z))
while(z.C())}else{a+=H.k(z.gR(z))
for(;z.C();)a=a+c+H.k(z.gR(z))}return a}}}}],["","",,W,{"^":"",
cG:function(a,b){var z=document.createElement("canvas")
return z},
h2:function(a){H.j(a,"$isab")
return"wheel"},
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eX:function(a,b,c,d){var z,y
z=W.cr(W.cr(W.cr(W.cr(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fe:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d8(a,b)},
bn:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lq:{"^":"q;0k:length=","%":"AccessibleNodeList"},
lr:{"^":"bn;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ls:{"^":"bn;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fF:{"^":"q;","%":";Blob"},
cF:{"^":"bn;",
bB:function(a,b,c){if(c!=null)return a.getContext(b,P.kW(c,null))
return a.getContext(b)},
dV:function(a,b){return this.bB(a,b,null)},
$iscF:1,
"%":"HTMLCanvasElement"},
dz:{"^":"q;",$isdz:1,"%":"CanvasRenderingContext2D"},
ly:{"^":"L;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lA:{"^":"fR;0k:length=","%":"CSSPerspective"},
bh:{"^":"q;",$isbh:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lB:{"^":"jx;0k:length=",
dW:function(a,b){var z=a.getPropertyValue(this.ek(a,b))
return z==null?"":z},
ek:function(a,b){var z,y
z=$.$get$dD()
y=z[b]
if(typeof y==="string")return y
y=this.fk(a,b)
z[b]=y
return y},
fk:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fY()+b
if(z in a)return z
return b},
gc2:function(a){return a.bottom},
gaa:function(a){return a.height},
gaQ:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gad:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fQ:{"^":"a;",
gaQ:function(a){return this.dW(a,"left")}},
dE:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fR:{"^":"q;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lC:{"^":"dE;0k:length=","%":"CSSTransformValue"},
lD:{"^":"dE;0k:length=","%":"CSSUnparsedValue"},
lE:{"^":"q;0k:length=","%":"DataTransferItemList"},
lF:{"^":"q;",
j:function(a){return String(a)},
"%":"DOMException"},
lG:{"^":"jz;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.ad,P.X]]},
$ast:function(){return[[P.ad,P.X]]},
$ise:1,
$ase:function(){return[[P.ad,P.X]]},
$isf:1,
$asf:function(){return[[P.ad,P.X]]},
$asA:function(){return[[P.ad,P.X]]},
"%":"ClientRectList|DOMRectList"},
fZ:{"^":"q;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gad(a))+" x "+H.k(this.gaa(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bO(b,"$isad",[P.X],"$asad")
if(!z)return!1
z=J.cx(b)
return a.left===z.gaQ(b)&&a.top===z.gb9(b)&&this.gad(a)===z.gad(b)&&this.gaa(a)===z.gaa(b)},
gV:function(a){return W.eX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gad(a)&0x1FFFFFFF,this.gaa(a)&0x1FFFFFFF)},
gc2:function(a){return a.bottom},
gaa:function(a){return a.height},
gaQ:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gad:function(a){return a.width},
$isad:1,
$asad:function(){return[P.X]},
"%":";DOMRectReadOnly"},
lH:{"^":"jB;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.o]},
$ast:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asA:function(){return[P.o]},
"%":"DOMStringList"},
lI:{"^":"q;0k:length=","%":"DOMTokenList"},
jw:{"^":"ch;a,b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.j(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.hE(this)
return new J.ao(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
a0:{"^":"L;",
gd9:function(a){return new W.jw(a,a.children)},
gda:function(a){return P.i7(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
j:function(a){return a.localName},
$isa0:1,
"%":";Element"},
aa:{"^":"q;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"q;",
d6:["e_",function(a,b,c,d){H.c(c,{func:1,args:[W.aa]})
if(c!=null)this.eh(a,b,c,!1)}],
eh:function(a,b,c,d){return a.addEventListener(b,H.b9(H.c(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f2|f3|f5|f6"},
bk:{"^":"fF;",$isbk:1,"%":"File"},
lJ:{"^":"jG;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$asA:function(){return[W.bk]},
"%":"FileList"},
lK:{"^":"ab;0k:length=","%":"FileWriter"},
lL:{"^":"bn;0k:length=","%":"HTMLFormElement"},
bm:{"^":"q;",$isbm:1,"%":"Gamepad"},
lM:{"^":"q;0k:length=","%":"History"},
lN:{"^":"jT;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.L]},
$ast:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$asA:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ce:{"^":"q;0dd:data=",$isce:1,"%":"ImageData"},
dS:{"^":"bn;",$isdS:1,"%":"HTMLImageElement"},
bp:{"^":"d6;",$isbp:1,"%":"KeyboardEvent"},
lR:{"^":"q;",
j:function(a){return String(a)},
"%":"Location"},
lS:{"^":"q;0k:length=","%":"MediaList"},
lT:{"^":"ab;",
d6:function(a,b,c,d){H.c(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.e_(a,b,c,!1)},
"%":"MessagePort"},
lU:{"^":"k_;",
i:function(a,b){return P.aL(a.get(H.T(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gaw:function(a){var z=H.d([],[P.o])
this.N(a,new W.hN(z))
return z},
gk:function(a){return a.size},
$asae:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hN:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lV:{"^":"k0;",
i:function(a,b){return P.aL(a.get(H.T(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gaw:function(a){var z=H.d([],[P.o])
this.N(a,new W.hO(z))
return z},
gk:function(a){return a.size},
$asae:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hO:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bq:{"^":"q;",$isbq:1,"%":"MimeType"},
lW:{"^":"k2;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$isf:1,
$asf:function(){return[W.bq]},
$asA:function(){return[W.bq]},
"%":"MimeTypeArray"},
ar:{"^":"d6;",$isar:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jv:{"^":"ch;a",
gZ:function(a){var z=this.a.childNodes
return new W.dP(z,z.length,-1,[H.bP(C.K,z,"A",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.L]},
$ase:function(){return[W.L]},
$asf:function(){return[W.L]}},
L:{"^":"ab;",
j:function(a){var z=a.nodeValue
return z==null?this.e0(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hT:{"^":"k4;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.L]},
$ast:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$asA:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bt:{"^":"q;0k:length=",$isbt:1,"%":"Plugin"},
m4:{"^":"k8;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asA:function(){return[W.bt]},
"%":"PluginArray"},
m6:{"^":"ke;",
i:function(a,b){return P.aL(a.get(H.T(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gaw:function(a){var z=H.d([],[P.o])
this.N(a,new W.ih(z))
return z},
gk:function(a){return a.size},
$asae:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"RTCStatsReport"},
ih:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m7:{"^":"bn;0k:length=","%":"HTMLSelectElement"},
bx:{"^":"ab;",$isbx:1,"%":"SourceBuffer"},
m8:{"^":"f3;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asA:function(){return[W.bx]},
"%":"SourceBufferList"},
by:{"^":"q;",$isby:1,"%":"SpeechGrammar"},
m9:{"^":"kg;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.by]},
$ast:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asA:function(){return[W.by]},
"%":"SpeechGrammarList"},
bz:{"^":"q;0k:length=",$isbz:1,"%":"SpeechRecognitionResult"},
mb:{"^":"kj;",
i:function(a,b){return a.getItem(H.T(b))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaw:function(a){var z=H.d([],[P.o])
this.N(a,new W.iB(z))
return z},
gk:function(a){return a.length},
$asae:function(){return[P.o,P.o]},
$isa4:1,
$asa4:function(){return[P.o,P.o]},
"%":"Storage"},
iB:{"^":"w:37;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bA:{"^":"q;",$isbA:1,"%":"CSSStyleSheet|StyleSheet"},
bB:{"^":"ab;",$isbB:1,"%":"TextTrack"},
bC:{"^":"ab;",$isbC:1,"%":"TextTrackCue|VTTCue"},
mf:{"^":"kn;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bC]},
$ast:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$asA:function(){return[W.bC]},
"%":"TextTrackCueList"},
mg:{"^":"f6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bB]},
$ast:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$asA:function(){return[W.bB]},
"%":"TextTrackList"},
mh:{"^":"q;0k:length=","%":"TimeRanges"},
bE:{"^":"q;",$isbE:1,"%":"Touch"},
b3:{"^":"d6;",$isb3:1,"%":"TouchEvent"},
mi:{"^":"kt;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bE]},
$ast:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$isf:1,
$asf:function(){return[W.bE]},
$asA:function(){return[W.bE]},
"%":"TouchList"},
mj:{"^":"q;0k:length=","%":"TrackDefaultList"},
d6:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mm:{"^":"q;",
j:function(a){return String(a)},
"%":"URL"},
mn:{"^":"ab;0k:length=","%":"VideoTrackList"},
bI:{"^":"ar;",
gh_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ah("deltaY is not supported"))},
gfZ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ah("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
jo:{"^":"ab;",
f7:function(a,b){return a.requestAnimationFrame(H.b9(H.c(b,{func:1,ret:-1,args:[P.X]}),1))},
es:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ms:{"^":"kA;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$ise:1,
$ase:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asA:function(){return[W.bh]},
"%":"CSSRuleList"},
mt:{"^":"fZ;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bO(b,"$isad",[P.X],"$asad")
if(!z)return!1
z=J.cx(b)
return a.left===z.gaQ(b)&&a.top===z.gb9(b)&&a.width===z.gad(b)&&a.height===z.gaa(b)},
gV:function(a){return W.eX(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaa:function(a){return a.height},
gad:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mv:{"^":"kC;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$asA:function(){return[W.bm]},
"%":"GamepadList"},
mw:{"^":"kE;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.L]},
$ast:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$asA:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mx:{"^":"kG;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$asA:function(){return[W.bz]},
"%":"SpeechRecognitionResultList"},
my:{"^":"kI;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asA:function(){return[W.bA]},
"%":"StyleSheetList"},
jC:{"^":"d2;a,b,c,$ti",
ha:function(a,b,c,d){var z=H.z(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mu:{"^":"jC;a,b,c,$ti"},
jD:{"^":"ej;a,b,c,d,e,$ti",
fo:function(){var z=this.d
if(z!=null&&this.a<=0)J.fx(this.b,this.c,z,!1)},
p:{
V:function(a,b,c,d,e){var z=c==null?null:W.fe(new W.jE(c),W.aa)
z=new W.jD(0,a,b,z,!1,[e])
z.fo()
return z}}},
jE:{"^":"w:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isaa"))}},
A:{"^":"a;$ti",
gZ:function(a){return new W.dP(a,this.gk(a),-1,[H.bP(this,a,"A",0)])}},
dP:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fw(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
jx:{"^":"q+fQ;"},
jy:{"^":"q+t;"},
jz:{"^":"jy+A;"},
jA:{"^":"q+t;"},
jB:{"^":"jA+A;"},
jF:{"^":"q+t;"},
jG:{"^":"jF+A;"},
jS:{"^":"q+t;"},
jT:{"^":"jS+A;"},
k_:{"^":"q+ae;"},
k0:{"^":"q+ae;"},
k1:{"^":"q+t;"},
k2:{"^":"k1+A;"},
k3:{"^":"q+t;"},
k4:{"^":"k3+A;"},
k7:{"^":"q+t;"},
k8:{"^":"k7+A;"},
ke:{"^":"q+ae;"},
f2:{"^":"ab+t;"},
f3:{"^":"f2+A;"},
kf:{"^":"q+t;"},
kg:{"^":"kf+A;"},
kj:{"^":"q+ae;"},
km:{"^":"q+t;"},
kn:{"^":"km+A;"},
f5:{"^":"ab+t;"},
f6:{"^":"f5+A;"},
ks:{"^":"q+t;"},
kt:{"^":"ks+A;"},
kz:{"^":"q+t;"},
kA:{"^":"kz+A;"},
kB:{"^":"q+t;"},
kC:{"^":"kB+A;"},
kD:{"^":"q+t;"},
kE:{"^":"kD+A;"},
kF:{"^":"q+t;"},
kG:{"^":"kF+A;"},
kH:{"^":"q+t;"},
kI:{"^":"kH+A;"}}],["","",,P,{"^":"",
kZ:function(a){var z,y
z=J.K(a)
if(!!z.$isce){y=z.gdd(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f8(a.data,a.height,a.width)},
kY:function(a){if(a instanceof P.f8)return{data:a.a,height:a.b,width:a.c}
return a},
aL:function(a){var z,y,x,w,v
if(a==null)return
z=P.ht(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.T(y[w])
z.a3(0,v,a[v])}return z},
kW:function(a,b){var z={}
a.N(0,new P.kX(z))
return z},
dL:function(){var z=$.dK
if(z==null){z=J.cB(window.navigator.userAgent,"Opera",0)
$.dK=z}return z},
fY:function(){var z,y
z=$.dH
if(z!=null)return z
y=$.dI
if(y==null){y=J.cB(window.navigator.userAgent,"Firefox",0)
$.dI=y}if(y)z="-moz-"
else{y=$.dJ
if(y==null){y=!P.dL()&&J.cB(window.navigator.userAgent,"Trident/",0)
$.dJ=y}if(y)z="-ms-"
else z=P.dL()?"-o-":"-webkit-"}$.dH=z
return z},
f8:{"^":"a;dd:a>,b,c",$isce:1},
kX:{"^":"w:12;a",
$2:function(a,b){this.a[a]=b}},
h7:{"^":"ch;a,b",
gbM:function(){var z,y,x
z=this.b
y=H.aB(z,"t",0)
x=W.a0
return new H.hB(new H.jm(z,H.c(new P.h8(),{func:1,ret:P.a3,args:[y]}),[y]),H.c(new P.h9(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bd(this.gbM().a)},
i:function(a,b){var z=this.gbM()
return z.b.$1(J.dr(z.a,b))},
gZ:function(a){var z=P.hx(this.gbM(),!1,W.a0)
return new J.ao(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
h8:{"^":"w:25;",
$1:function(a){return!!J.K(H.j(a,"$isL")).$isa0}},
h9:{"^":"w:26;",
$1:function(a){return H.b(H.j(a,"$isL"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k9:{"^":"a;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.D(z+this.c,H.z(this,0))},
gc2:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.D(z+this.d,H.z(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bO(b,"$isad",[P.X],"$asad")
if(!z)return!1
z=this.a
y=J.cx(b)
x=y.gaQ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.z(this,0)
if(H.D(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.E()
z=H.D(x+this.d,w)===y.gc2(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.aX(z)
x=this.b
w=J.aX(x)
if(typeof z!=="number")return z.E()
v=H.z(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.D(x+this.d,v)
return P.jU(P.cs(P.cs(P.cs(P.cs(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"k9;aQ:a>,b9:b>,ad:c>,aa:d>,$ti",p:{
i7:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ah()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.ah()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",bX:{"^":"q;",$isbX:1,"%":"SVGLength"},lQ:{"^":"jW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ast:function(){return[P.bX]},
$ise:1,
$ase:function(){return[P.bX]},
$isf:1,
$asf:function(){return[P.bX]},
$asA:function(){return[P.bX]},
"%":"SVGLengthList"},bZ:{"^":"q;",$isbZ:1,"%":"SVGNumber"},m2:{"^":"k6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ast:function(){return[P.bZ]},
$ise:1,
$ase:function(){return[P.bZ]},
$isf:1,
$asf:function(){return[P.bZ]},
$asA:function(){return[P.bZ]},
"%":"SVGNumberList"},m5:{"^":"q;0k:length=","%":"SVGPointList"},mc:{"^":"kl;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ast:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asA:function(){return[P.o]},
"%":"SVGStringList"},md:{"^":"a0;",
gd9:function(a){return new P.h7(a,new W.jv(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},c0:{"^":"q;",$isc0:1,"%":"SVGTransform"},mk:{"^":"kv;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ast:function(){return[P.c0]},
$ise:1,
$ase:function(){return[P.c0]},
$isf:1,
$asf:function(){return[P.c0]},
$asA:function(){return[P.c0]},
"%":"SVGTransformList"},jV:{"^":"q+t;"},jW:{"^":"jV+A;"},k5:{"^":"q+t;"},k6:{"^":"k5+A;"},kk:{"^":"q+t;"},kl:{"^":"kk+A;"},ku:{"^":"q+t;"},kv:{"^":"ku+A;"}}],["","",,P,{"^":"",lt:{"^":"q;0k:length=","%":"AudioBuffer"},lu:{"^":"ju;",
i:function(a,b){return P.aL(a.get(H.T(b)))},
N:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gaw:function(a){var z=H.d([],[P.o])
this.N(a,new P.fC(z))
return z},
gk:function(a){return a.size},
$asae:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"AudioParamMap"},fC:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},lv:{"^":"ab;0k:length=","%":"AudioTrackList"},fE:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m3:{"^":"fE;0k:length=","%":"OfflineAudioContext"},ju:{"^":"q+ae;"}}],["","",,P,{"^":"",d0:{"^":"q;",
dP:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$isce&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.kY(g))
return}if(!!y.$isdS&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fA("Incorrect number or type of arguments"))},
hB:function(a,b,c,d,e,f,g){return this.dP(a,b,c,d,e,f,g,null,null,null)},
$isd0:1,
"%":"WebGLRenderingContext"},iG:{"^":"q;",$isiG:1,"%":"WebGLTexture"},j2:{"^":"q;",$isj2:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ma:{"^":"ki;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return P.aL(a.item(b))},
D:function(a,b){return this.i(a,b)},
$ast:function(){return[[P.a4,,,]]},
$ise:1,
$ase:function(){return[[P.a4,,,]]},
$isf:1,
$asf:function(){return[[P.a4,,,]]},
$asA:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},kh:{"^":"q+t;"},ki:{"^":"kh+A;"}}],["","",,O,{"^":"",aj:{"^":"a;0a,0b,0c,0d,$ti",
bc:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cC:function(a,b,c){var z=H.aB(this,"aj",0)
H.c(b,{func:1,ret:P.a3,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.B,[P.e,z]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
aA:function(a,b){return this.cC(a,null,b)},
bf:function(a){var z
H.v(a,"$ise",[H.aB(this,"aj",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cJ:function(a,b){var z
H.v(b,"$ise",[H.aB(this,"aj",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.ao(z,z.length,0,[H.z(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aB(this,"aj",0)
H.D(b,z)
z=[z]
if(this.bf(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cJ(x,H.d([b],z))}},
bY:function(a,b){var z,y
H.v(b,"$ise",[H.aB(this,"aj",0)],"$ase")
if(this.bf(b)){z=this.a
y=z.length
C.a.bY(z,b)
this.cJ(y,b)}},
$ise:1,
p:{
c8:function(a){var z=new O.aj([a])
z.bc(a)
return z}}},cX:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gm:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
e9:function(a){var z=this.b
if(!(z==null))z.u(a)},
aB:function(){return this.e9(null)},
gL:function(a){var z=this.a
if(z.length>0)return C.a.gcm(z)
else return V.aM()},
by:function(a){var z=this.a
if(a==null)C.a.h(z,V.aM())
else C.a.h(z,a)
this.aB()},
ax:function(){var z=this.a
if(z.length>0){z.pop()
this.aB()}}}}],["","",,E,{"^":"",cC:{"^":"a;"},aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scE:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gm()
y.toString
x=H.c(this.gdM(),{func:1,ret:-1,args:[D.l]})
C.a.O(y.a,x)}y=this.c
if(y!=null){y=y.gm()
y.toString
x=H.c(this.gdM(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.x("shape",z,this.c,this,[F.ef])
w.b=!0
this.ak(w)}},
sdJ:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gm()
y.toString
x=H.c(this.gdL(),{func:1,ret:-1,args:[D.l]})
C.a.O(y.a,x)}if(a!=null){y=a.gm()
y.toString
x=H.c(this.gdL(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.x("mover",z,a,this,[U.a6])
w.b=!0
this.ak(w)}},
a2:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.x("matrix",x,y,this,[V.a5])
w.b=!0
this.ak(w)}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a2(0,b)},
a0:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gL(z))
else C.a.h(z.a,y.l(0,z.gL(z)))
z.aB()
a.ct(this.f)
z=a.dy
x=(z&&C.a).gcm(z)
if(x!=null&&this.d!=null)x.b4(a,this)
for(z=this.y.a,z=new J.ao(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a0(a)
a.cs()
a.dx.ax()},
gm:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
ak:function(a){var z=this.z
if(!(z==null))z.u(a)},
a6:function(){return this.ak(null)},
hj:[function(a){H.j(a,"$isl")
this.e=null
this.ak(a)},function(){return this.hj(null)},"it","$1","$0","gdM",0,2,0],
hi:[function(a){this.ak(H.j(a,"$isl"))},function(){return this.hi(null)},"is","$1","$0","gdL",0,2,0],
hg:[function(a){this.ak(H.j(a,"$isl"))},function(){return this.hg(null)},"iq","$1","$0","gdK",0,2,0],
ip:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ise",[E.aD],"$ase")
for(z=b.length,y=this.gdK(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.aE()
t.a=H.d([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.a6()},"$2","ghf",8,0,6],
ir:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ise",[E.aD],"$ase")
for(z=b.length,y=this.gdK(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.aE()
t.a=H.d([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.c(y,x)
C.a.O(t.a,y)}}this.a6()},"$2","ghh",8,0,6],
$isax:1,
p:{
cb:function(a,b,c,d,e,f){var z,y
z=new E.aD()
z.a=d
z.b=!0
y=O.c8(E.aD)
z.y=y
y.aA(z.ghf(),z.ghh())
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
z.scE(0,e)
z.sdJ(c)
return z}}},ib:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e5:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aq(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cX()
y=[V.a5]
z.a=H.d([],y)
x=z.gm()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.c(new E.id(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cX()
z.a=H.d([],y)
v=z.gm()
v.toString
x=H.c(new E.ie(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cX()
z.a=H.d([],y)
y=z.gm()
y.toString
w=H.c(new E.ig(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.aP])
this.dy=z
C.a.h(z,null)
this.fr=new H.aZ(0,0,[P.o,A.bw])},
ghs:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gL(z)
y=this.db
y=z.l(0,y.gL(y))
this.z=y
z=y}return z},
gdN:function(){var z,y
z=this.ch
if(z==null){z=this.ghs()
y=this.dx
y=z.l(0,y.gL(y))
this.ch=y
z=y}return z},
gdS:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gL(z)
y=this.dx
y=z.l(0,y.gL(y))
this.cx=y
z=y}return z},
ct:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcm(z):a;(z&&C.a).h(z,y)},
cs:function(){var z=this.dy
if(z.length>1)z.pop()},
aV:function(a){var z=a.b
if(z.length===0)throw H.h(P.n("May not cache a shader with no name."))
if(this.fr.dc(0,z))throw H.h(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a3(0,z,a)},
p:{
ic:function(a,b){var z=new E.ib(a,b)
z.e5(a,b)
return z}}},id:{"^":"w:9;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.ch=null}},ie:{"^":"w:9;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ig:{"^":"w:9;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iQ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch",
gm:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
eb:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.u(a)
this.hw()},function(){return this.eb(null)},"ea","$1","$0","gcK",0,2,0],
gh3:function(){var z,y,x
z=Date.now()
y=C.f.a_(P.dN(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aq(z,!1)
return x/y},
d0:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.r(z)
x=C.h.cj(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.h.cj(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eq(C.l,this.ghv())},
hw:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.iS(this),{func:1,ret:-1,args:[P.X]})
C.u.es(z)
C.u.f7(z,W.fe(y,P.X))}},"$0","ghv",0,0,3],
hu:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d0()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.dN(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aB()
w=x.db
C.a.sk(w.a,0)
w.aB()
w=x.dx
C.a.sk(w.a,0)
w.aB()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a0(this.e)}}catch(v){z=H.aW(v)
y=H.bb(v)
P.dq("Error: "+H.k(z))
P.dq("Stack: "+H.k(y))
throw H.h(z)}},
p:{
iR:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscF)return E.ep(a,!0,!0,!0,!1)
y=W.cG(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd9(a).h(0,y)
w=E.ep(y,!0,!0,!0,!1)
w.a=a
return w},
ep:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iQ()
y=P.hu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bB(a,"webgl",y)
x=H.j(x==null?C.k.bB(a,"experimental-webgl",y):x,"$isd0")
if(x==null)H.p(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ic(x,a)
w=new T.iL(x)
w.b=H.W(x.getParameter(3379))
w.c=H.W(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.j8(a)
v=new X.ho()
v.c=new X.aw(!1,!1,!1)
v.d=P.hv(null,null,null,P.B)
w.b=v
v=new X.hP(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hy(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iV(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.ej,P.a]])
w.z=v
u=document
t=W.ar
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.c(w.geK(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.c(w.geP(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.c(w.geH(),q),!1,r))
v=w.z
p=W.bp
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.c(w.geR(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.c(w.geQ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.c(w.geU(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.c(w.geW(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.c(w.geV(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.V(a,H.T(W.h2(a)),H.c(w.geX(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.c(w.geL(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.c(w.geM(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.c(w.geY(),q),!1,r))
r=w.z
q=W.b3
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.c(w.gf5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.c(w.gf3(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.c(w.gf4(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aq(Date.now(),!1)
z.ch=0
z.d0()
return z}}},iS:{"^":"w:30;a",
$1:function(a){var z
H.lg(a)
z=this.a
if(z.z){z.z=!1
z.hu()}}}}],["","",,Z,{"^":"",eT:{"^":"a;a,b",p:{
d9:function(a,b,c){var z
H.v(c,"$isf",[P.B],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b6(c)),35044)
a.bindBuffer(b,null)
return new Z.eT(b,z)}}},dx:{"^":"cC;a,b,c,d,e",
F:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aW(y)
x=P.n('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.k(z))
throw H.h(x)}},
j:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},c1:{"^":"a;a",$islw:1},bf:{"^":"a;a,0b,c,d",
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
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].j(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$isme:1},cf:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b0(this.c)+"'")+"]"}},aQ:{"^":"a;a",
gcF:function(a){var z,y
z=this.a
y=(z&$.$get$Z().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$at().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$b4().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
fR:function(a){var z,y,x
z=$.$get$Z()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eS()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.d([],[P.o])
y=this.a
if((y&$.$get$Z().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$at().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b4().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
p:{
am:function(a){return new Z.aQ(a)}}}}],["","",,D,{"^":"",dA:{"^":"a;"},aE:{"^":"a;0a,0b,0c",
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.h6(z))
return x!==0},
cb:function(){return this.u(null)},
hx:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.u(y)}}},
ay:function(a){return this.hx(a,!0,!1)},
p:{
C:function(){var z=new D.aE()
z.a=H.d([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},h6:{"^":"w:31;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bU:{"^":"l;c,d,a,0b,$ti"},bV:{"^":"l;c,d,a,0b,$ti"},x:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dy:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
p:{"^":"lx<"}},dX:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},dY:{"^":"l;c,a,0b"},ho:{"^":"a;0a,0b,0c,0d",
hp:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.u(y)},
hl:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.u(y)}},e1:{"^":"ci;x,y,c,d,e,a,0b"},hy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.Q(y.a+x*w,y.b+v*u)
u=this.a.gaK()
s=new X.br(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cr:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.ar(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dT()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.ar(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.ar(a,b))
return!0},
hq:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cY(new V.R(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.u(w)
return!0},
eT:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.e1(c,a,this.a.gaK(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.Q(0,0)}},aw:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
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
return z+(this.c?"Shift+":"")}},br:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},hP:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bK:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gaK()
x=new X.br(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cr:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bK(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dT()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bK(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bK(a,b,!1))
return!0},
hr:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaK()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cY(new V.R(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.u(x)
return!0},
gde:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbA:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gdI:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cY:{"^":"ci;x,c,d,e,a,0b"},ci:{"^":"l;"},eu:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},iV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.v(a,"$isf",[V.Q],"$asf")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gaK()
w=new X.eu(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ho:function(a){var z
H.v(a,"$isf",[V.Q],"$asf")
z=this.b
if(z==null)return!1
z.u(this.ar(a,!0))
return!0},
hm:function(a){var z
H.v(a,"$isf",[V.Q],"$asf")
z=this.c
if(z==null)return!1
z.u(this.ar(a,!0))
return!0},
hn:function(a){var z
H.v(a,"$isf",[V.Q],"$asf")
z=this.d
if(z==null)return!1
z.u(this.ar(a,!1))
return!0}},j8:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaK:function(){var z=this.a
return V.aO(0,0,(z&&C.k).gda(z).c,C.k.gda(z).d)},
cU:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dX(z,new X.aw(y,a.altKey,a.shiftKey))},
aI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
bX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.Q(y-w,x-v)},
aU:function(a){return new V.R(a.movementX,a.movementY)},
bT:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.h.T(u.pageX)
C.h.T(u.pageY)
s=z.left
C.h.T(u.pageX)
C.a.h(y,new V.Q(t-s,C.h.T(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dy(z,new X.aw(y,a.altKey,a.shiftKey))},
bN:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hZ:[function(a){this.f=!0},"$1","geP",4,0,7],
hR:[function(a){this.f=!1},"$1","geH",4,0,7],
hU:[function(a){H.j(a,"$isar")
if(this.f&&this.bN(a))a.preventDefault()},"$1","geK",4,0,4],
i0:[function(a){var z
H.j(a,"$isbp")
if(!this.f)return
z=this.cU(a)
if(this.b.hp(z))a.preventDefault()},"$1","geR",4,0,15],
i_:[function(a){var z
H.j(a,"$isbp")
if(!this.f)return
z=this.cU(a)
if(this.b.hl(z))a.preventDefault()},"$1","geQ",4,0,15],
i2:[function(a){var z,y,x,w
H.j(a,"$isar")
z=this.a
z.focus()
this.f=!0
this.aI(a)
if(this.x){y=this.ap(a)
x=this.aU(a)
if(this.d.cr(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cr(y,w))a.preventDefault()},"$1","geU",4,0,4],
i4:[function(a){var z,y,x
H.j(a,"$isar")
this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","geW",4,0,4],
hW:[function(a){var z,y,x
H.j(a,"$isar")
if(!this.bN(a)){this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","geM",4,0,4],
i3:[function(a){var z,y,x
H.j(a,"$isar")
this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","geV",4,0,4],
hV:[function(a){var z,y,x
H.j(a,"$isar")
if(!this.bN(a)){this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b1(z,x))a.preventDefault()}},"$1","geL",4,0,4],
i5:[function(a){var z,y
H.j(a,"$isbI")
this.aI(a)
z=new V.R((a&&C.t).gfZ(a),C.t.gh_(a)).v(0,180)
if(this.x){if(this.d.hq(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hr(z,y))a.preventDefault()},"$1","geX",4,0,32],
i6:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.eT(w,v,x)}},"$1","geY",4,0,7],
ig:[function(a){var z
H.j(a,"$isb3")
this.a.focus()
this.f=!0
this.bX(a)
z=this.bT(a)
if(this.e.ho(z))a.preventDefault()},"$1","gf5",4,0,11],
ic:[function(a){var z
H.j(a,"$isb3")
this.bX(a)
z=this.bT(a)
if(this.e.hm(z))a.preventDefault()},"$1","gf3",4,0,11],
ie:[function(a){var z
H.j(a,"$isb3")
this.bX(a)
z=this.bT(a)
if(this.e.hn(z))a.preventDefault()},"$1","gf4",4,0,11]}}],["","",,D,{"^":"",ca:{"^":"a;0a,0b,0c,0d",
gm:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aC:[function(a){var z
H.j(a,"$isl")
z=this.d
if(!(z==null))z.u(a)},function(){return this.aC(null)},"hH","$1","$0","gec",0,2,0],
$isU:1,
$isax:1,
p:{
dM:function(a,b){var z,y,x,w
z=new D.ca()
z.c=new V.S(1,1,1)
z.a=new V.H(0,0,1)
y=z.b
z.b=b
x=b.gm()
x.toString
w=H.c(z.gec(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.x("mover",y,z.b,z,[U.a6])
x.b=!0
z.aC(x)
if(!z.c.q(0,a)){y=z.c
z.c=a
x=new D.x("color",y,a,z,[V.S])
x.b=!0
z.aC(x)}return z}}},U:{"^":"a;",$isax:1},hp:{"^":"aj;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gm:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aC:function(a){var z=this.Q
if(!(z==null))z.u(a)},
eS:[function(a){var z
H.j(a,"$isl")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.eS(null)},"i1","$1","$0","gcY",0,2,0],
i7:[function(a){var z,y,x
H.v(a,"$ise",[D.U],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.eo(x))return!1}return!0},"$1","geZ",4,0,34],
hO:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcY(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.j(b[u],"$isU")
if(t instanceof D.ca)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aE()
s.a=H.d([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.h(s.a,x)}z=new D.bU(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","geE",8,0,16],
i9:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcY(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.j(b[u],"$isU")
if(t instanceof D.ca)C.a.O(this.e,t)
s=t.d
if(s==null){s=new D.aE()
s.a=H.d([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.O(s.a,x)}z=new D.bV(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gf0",8,0,16],
eo:function(a){var z=C.a.au(this.e,a)
return z},
$ase:function(){return[D.U]},
$asaj:function(){return[D.U]}},hY:{"^":"a;",$isU:1,$isax:1},iy:{"^":"a;",$isU:1,$isax:1},iN:{"^":"a;",$isU:1,$isax:1},iO:{"^":"a;",$isU:1,$isax:1},iP:{"^":"a;",$isU:1,$isax:1}}],["","",,V,{"^":"",
lz:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hK",8,0,33],
lp:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.dX(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.h.dR($.m.$2(a,0)?0:a,b),c+b+1)},
ba:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isf",[P.u],"$asf")
z=H.d([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.a3(z,u,C.i.ag(z[u],x))}return z},
bR:function(a,b){return C.h.hD(Math.pow(b,C.z.cj(Math.log(H.kV(a))/Math.log(b))))},
S:{"^":"a;a,b,c",
q:function(a,b){var z
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
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
ap:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
cW:{"^":"a;a,b,c,d,e,f,r,x,y",
W:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cW))return!1
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
z=[P.u]
y=V.ba(H.d([this.a,this.d,this.r],z),3,0)
x=V.ba(H.d([this.b,this.e,this.x],z),3,0)
w=V.ba(H.d([this.c,this.f,this.y],z),3,0)
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
a5:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
W:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
cl:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aM()
a3=1/a2
a4=-w
a5=-i
return V.av((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.av(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.af(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
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
dD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.ba(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ba(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ba(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ba(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
w:function(a){return this.dD(a,3,0)},
H:function(){return this.dD("",3,0)},
p:{
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aM:function(){return V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
hM:function(a,b,c){return V.av(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hL:function(a,b,c,d){return V.av(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
e6:function(a,b,c,d){return V.e5(new V.af(0,0,0),new V.H(0,1,0),new V.H(a,b,c))},
e5:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.B(c)))
y=b.aY(z)
x=y.v(0,Math.sqrt(y.B(y)))
w=z.aY(x)
v=new V.H(a.a,a.b,a.c)
return V.av(x.a,w.a,z.a,x.J(0).B(v),x.b,w.b,z.b,w.J(0).B(v),x.c,w.c,z.c,z.J(0).B(v),0,0,0,1)}}},
Q:{"^":"a;a,b",
G:function(a,b){return new V.Q(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
af:{"^":"a;a,b,c",
G:function(a,b){return new V.af(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
bu:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
cl:{"^":"a;a,b,c,d",
gac:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"},
p:{
aO:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cl(a,b,c,d)}}},
R:{"^":"a;a,b",
h8:[function(a){return Math.sqrt(this.B(this))},"$0","gk",1,0,17],
B:function(a){var z,y,x,w
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
v:function(a,b){var z,y
if($.m.$2(b,0))return new V.R(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.R(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
h8:[function(a){return Math.sqrt(this.B(this))},"$0","gk",1,0,17],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aY:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.H(-this.a,-this.b,-this.c)},
v:function(a,b){if($.m.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
dE:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fM:{"^":"dA;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bF:function(a){var z=V.lp(a,this.c,this.b)
return z},
gm:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.u(a)},
scw:function(a,b){},
sco:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bF(z)}z=new D.x("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.M(z)}},
scq:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bF(z)}z=new D.x("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.M(z)}},
sab:function(a,b){var z,y
b=this.bF(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.x("location",y,b,this,[P.u])
z.b=!0
this.M(z)}},
scp:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.x("maximumVelocity",y,a,this,[P.u])
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
z=new D.x("velocity",x,a,this,[P.u])
z.b=!0
this.M(z)}},
sc8:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.x("dampening",y,a,this,[P.u])
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
this.sab(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sP(y)}},
p:{
cI:function(){var z=new U.fM()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cJ:{"^":"a6;0a,0b",
gm:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
sL:function(a,b){var z,y,x
if(!J.N(this.a,b)){z=this.a
this.a=b
y=new D.x("matrix",z,b,this,[V.a5])
y.b=!0
x=this.b
if(!(x==null))x.u(y)}},
aR:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
return J.N(this.a,b.a)},
j:function(a){return"Constant: "+this.a.w("          ")},
p:{
cK:function(a){var z=new U.cJ()
z.sL(0,a)
return z}}},dR:{"^":"aj;0e,0f,0r,0a,0b,0c,0d",
gm:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
M:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.M(null)},"aj","$1","$0","gaG",0,2,0],
hN:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaG(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gm()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bU(a,b,this,[z])
z.b=!0
this.M(z)},"$2","geD",8,0,18],
i8:[function(a,b){var z,y,x,w,v,u,t
z=U.a6
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaG(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gm()
t.toString
H.c(x,w)
C.a.O(t.a,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gf_",8,0,18],
aR:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ah()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ao(z,z.length,0,[H.z(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aR(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aM():x
z=this.e
if(!(z==null))z.ay(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.N(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ase:function(){return[U.a6]},
$asaj:function(){return[U.a6]},
$isa6:1},a6:{"^":"dA;"},j9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gm:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
M:[function(a){var z
H.j(a,"$isl")
z=this.cy
if(!(z==null))z.u(a)},function(){return this.M(null)},"aj","$1","$0","gaG",0,2,0],
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gde()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbO(),y)
C.a.h(z.a,x)
x=this.a.c.gdI()
x.toString
z=H.c(this.gbP(),y)
C.a.h(x.a,z)
z=this.a.c.gbA()
z.toString
y=H.c(this.gbQ(),y)
C.a.h(z.a,y)
return!0},
ez:[function(a){H.j(a,"$isl")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbO",4,0,1],
eA:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isbr")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.R(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.R(y.a,y.b).l(0,2).v(0,z.gac())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.r(x)
y.sP(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.R(x.a,x.b).l(0,2).v(0,z.gac())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.r(u)
t=this.z
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
this.b.sP(0)
y=y.G(0,a.z)
this.Q=new V.R(y.a,y.b).l(0,2).v(0,z.gac())}this.aj()},"$1","gbP",4,0,1],
eB:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.r(x)
z.sP(y*10*x)
this.aj()}},"$1","gbQ",4,0,1],
aR:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ah()
if(z<y){this.ch=y
x=b.y
this.b.a2(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.av(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa6:1},ja:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gm:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
M:[function(a){var z
H.j(a,"$isl")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.M(null)},"aj","$1","$0","gaG",0,2,0],
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gde()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbO(),y)
C.a.h(z.a,x)
x=this.a.c.gdI()
x.toString
z=H.c(this.gbP(),y)
C.a.h(x.a,z)
z=this.a.c.gbA()
z.toString
x=H.c(this.gbQ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.C()
x.f=z}x=H.c(this.gew(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.c(this.gex(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.C()
x.b=z}x=H.c(this.gfn(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.c(this.gfm(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.C()
x.c=z}y=H.c(this.gfl(),y)
C.a.h(z.a,y)
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.R(z,y)},
ez:[function(a){a=H.b(H.j(a,"$isl"),"$isbr")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbO",4,0,1],
eA:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isbr")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.R(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.al(new V.R(y.a,y.b).l(0,2).v(0,z.gac()))
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
x=y.G(0,a.y)
w=this.al(new V.R(x.a,x.b).l(0,2).v(0,z.gac()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sab(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.G(0,a.z)
this.dx=this.al(new V.R(y.a,y.b).l(0,2).v(0,z.gac()))}this.aj()},"$1","gbP",4,0,1],
eB:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
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
this.aj()}},"$1","gbQ",4,0,1],
hK:[function(a){if(H.b(H.j(a,"$isl"),"$ise1").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gew",4,0,1],
hL:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isbr")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.al(new V.R(x.a,x.b).l(0,2).v(0,z.gac()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sab(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.G(0,a.z)
this.dx=this.al(new V.R(y.a,y.b).l(0,2).v(0,z.gac()))
this.aj()},"$1","gex",4,0,1],
ik:[function(a){H.j(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfn",4,0,1],
ij:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$iseu")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.R(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.al(new V.R(y.a,y.b).l(0,2).v(0,z.gac()))
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
x=y.G(0,a.y)
w=this.al(new V.R(x.a,x.b).l(0,2).v(0,z.gac()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sab(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sab(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.G(0,a.z)
this.dx=this.al(new V.R(y.a,y.b).l(0,2).v(0,z.gac()))}this.aj()},"$1","gfm",4,0,1],
ii:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
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
this.aj()}},"$1","gfl",4,0,1],
aR:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ah()
if(z<y){this.dy=y
x=b.y
this.c.a2(0,x)
this.b.a2(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.av(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.av(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa6:1},jb:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gm:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.u(a)},
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=H.c(this.geC(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hM:[function(a){var z,y,x,w
H.j(a,"$isl")
if(!J.N(this.b,this.a.b.c))return
H.b(a,"$iscY")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.x("zoom",z,w,this,[P.u])
z.b=!0
this.M(z)}},"$1","geC",4,0,1],
aR:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hL(x,x,x,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",fN:{"^":"aj;0e,0f,0a,0b,0c,0d",
gm:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
X:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.X(null)},"cL","$1","$0","gS",0,2,0],
ia:[function(a,b){var z,y,x,w,v,u,t
z=M.ay
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gm()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bU(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gf1",8,0,19],
ib:[function(a,b){var z,y,x,w,v,u,t
z=M.ay
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gm()
t.toString
H.c(x,w)
C.a.O(t.a,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gf2",8,0,19],
a0:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ao(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
if(!(y==null))y.a0(a)}this.e=!1},
$ase:function(){return[M.ay]},
$asaj:function(){return[M.ay]},
$isay:1},fP:{"^":"a;0a,0b,0c,0d,0e,0f",
gm:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
X:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.X(null)},"cL","$1","$0","gS",0,2,0],
saJ:function(a){var z,y,x
if(a==null)a=new X.hf()
z=this.a
if(z!==a){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.a
this.a=a
z=a.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("camera",x,this.a,this,[X.c7])
z.b=!0
this.X(z)}},
saz:function(a,b){var z,y,x
if(b==null)b=X.cM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.b
this.b=b
z=b.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("target",x,this.b,this,[X.cm])
z.b=!0
this.X(z)}},
san:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.x("technique",x,this.c,this,[O.aP])
z.b=!0
this.X(z)}},
a0:function(a){var z
a.ct(this.c)
this.b.F(a)
this.a.F(a)
z=this.c
if(z!=null)z.a2(0,a)
this.d.a2(0,a)
this.d.a0(a)
this.a.a1(a)
this.b.a1(a)
a.cs()},
$isay:1,
p:{
cL:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fP()
z.saJ(a)
z.saz(0,b)
z.san(c)
y=E.cb(null,!0,null,"",null,null)
x=F.d1()
w=x.a
v=new V.H(-1,-1,1)
v=v.v(0,Math.sqrt(v.B(v)))
u=w.bj(new V.bu(1,2,4,6),new V.ap(1,0,0,1),new V.af(-1,-1,0),new V.Q(0,1),v,null)
w=x.a
v=new V.H(1,-1,1)
v=v.v(0,Math.sqrt(v.B(v)))
t=w.bj(new V.bu(0,3,4,6),new V.ap(0,0,1,1),new V.af(1,-1,0),new V.Q(1,1),v,null)
w=x.a
v=new V.H(1,1,1)
v=v.v(0,Math.sqrt(v.B(v)))
s=w.bj(new V.bu(0,2,5,6),new V.ap(0,1,0,1),new V.af(1,1,0),new V.Q(1,0),v,null)
w=x.a
v=new V.H(-1,1,1)
v=v.v(0,Math.sqrt(v.B(v)))
r=w.bj(new V.bu(0,2,4,7),new V.ap(1,1,0,1),new V.af(-1,1,0),new V.Q(0,0),v,null)
x.d.fO(H.d([u,t,s,r],[F.aF]))
x.at()
y.scE(0,x)
z.d=y
z.e=null
return z}}},h4:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
X:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.u(a)},function(){return this.X(null)},"cL","$1","$0","gS",0,2,0],
hS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aD
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.aE()
s.a=H.d([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.bU(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geI",8,0,6],
hT:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aD
H.v(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.aE()
s.a=H.d([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.c(x,w)
C.a.O(s.a,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geJ",8,0,6],
saJ:function(a){var z,y,x
if(a==null)a=X.ea(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.a
this.a=a
z=a.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("camera",x,this.a,this,[X.c7])
z.b=!0
this.X(z)}},
saz:function(a,b){var z,y,x
if(b==null)b=X.cM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.b
this.b=b
z=b.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("target",x,this.b,this,[X.cm])
z.b=!0
this.X(z)}},
san:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gm()
z.toString
y=H.c(this.gS(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.x("technique",x,this.c,this,[O.aP])
z.b=!0
this.X(z)}},
gm:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a0:function(a){var z
a.ct(this.c)
this.b.F(a)
this.a.F(a)
z=this.c
if(z!=null)z.a2(0,a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a2(0,a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a0(a)
this.a.toString
a.cy.ax()
a.db.ax()
this.b.a1(a)
a.cs()},
$isay:1,
p:{
dO:function(a,b,c,d){var z,y
z=new M.h4()
y=O.c8(E.aD)
z.d=y
y.aA(z.geI(),z.geJ())
z.e=null
z.f=null
z.r=null
z.x=null
z.saJ(a)
z.saz(0,c)
z.san(d)
return z}}},ay:{"^":"a;"}}],["","",,A,{"^":"",dt:{"^":"a;a,b,c"},fB:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
h0:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
aZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dG:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dQ:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r",
a7:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dZ(c)
b.a.uniform1i(b.d,0)}}},e4:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aO,0av,0aP,0bl,0df,0dg,0bm,0bn,0dh,0di,0bo,0bp,0dj,0dk,0bq,0dl,0dm,0br,0dn,0dq,0bs,0bt,0bu,0dr,0ds,0bv,0bw,0dt,0du,0bx,0dv,0cc,0dw,0cd,0dz,0ce,0dA,0cf,0dB,0cg,0dC,0ci,a,b,0c,0d,0e,0f,0r",
e4:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.c_("")
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
a1.fq(z)
a1.fA(z)
a1.fs(z)
a1.fI(z)
a1.fJ(z)
a1.fC(z)
a1.fN(z)
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
z=new P.c_("")
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
v.fv(z)
v.fp(z)
v.ft(z)
v.fw(z)
v.fG(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fE(z)
v.fF(z)}v.fB(z)
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
p=H.d([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.A(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fu(z)
v.fD(z)
v.fH(z)
v.fK(z)
v.fL(z)
v.fM(z)
v.fz(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.A(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.b_(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.b(this.r.n(0,"invViewMat"),"$isa8")
if(y)this.db=H.b(this.r.n(0,"objMat"),"$isa8")
if(w)this.dx=H.b(this.r.n(0,"viewObjMat"),"$isa8")
this.fr=H.b(this.r.n(0,"projViewObjMat"),"$isa8")
if(a1.x2)this.go=H.b(this.r.n(0,"txt2DMat"),"$iscp")
if(a1.y1)this.id=H.b(this.r.n(0,"txtCubeMat"),"$isa8")
if(a1.y2)this.k1=H.b(this.r.n(0,"colorMat"),"$isa8")
this.k3=H.d([],[A.a8])
y=a1.aO
if(y>0){this.k2=H.j(this.r.n(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isa8"))}}y=a1.a
if(y!==C.b){this.k4=H.b(this.r.n(0,"emissionClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.b(this.r.n(0,"emissionTxt"),"$isa2")
this.rx=H.b(this.r.n(0,"nullEmissionTxt"),"$isF")
break
case C.c:this.r2=H.b(this.r.n(0,"emissionTxt"),"$isag")
this.rx=H.b(this.r.n(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.ry=H.b(this.r.n(0,"ambientClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.b(this.r.n(0,"ambientTxt"),"$isa2")
this.y1=H.b(this.r.n(0,"nullAmbientTxt"),"$isF")
break
case C.c:this.x2=H.b(this.r.n(0,"ambientTxt"),"$isag")
this.y1=H.b(this.r.n(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.y2=H.b(this.r.n(0,"diffuseClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.aO=H.b(this.r.n(0,"diffuseTxt"),"$isa2")
this.aP=H.b(this.r.n(0,"nullDiffuseTxt"),"$isF")
break
case C.c:this.av=H.b(this.r.n(0,"diffuseTxt"),"$isag")
this.aP=H.b(this.r.n(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bl=H.b(this.r.n(0,"invDiffuseClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.df=H.b(this.r.n(0,"invDiffuseTxt"),"$isa2")
this.bm=H.b(this.r.n(0,"nullInvDiffuseTxt"),"$isF")
break
case C.c:this.dg=H.b(this.r.n(0,"invDiffuseTxt"),"$isag")
this.bm=H.b(this.r.n(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bp=H.b(this.r.n(0,"shininess"),"$isJ")
this.bn=H.b(this.r.n(0,"specularClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.dh=H.b(this.r.n(0,"specularTxt"),"$isa2")
this.bo=H.b(this.r.n(0,"nullSpecularTxt"),"$isF")
break
case C.c:this.di=H.b(this.r.n(0,"specularTxt"),"$isag")
this.bo=H.b(this.r.n(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.dj=H.b(this.r.n(0,"bumpTxt"),"$isa2")
this.bq=H.b(this.r.n(0,"nullBumpTxt"),"$isF")
break
case C.c:this.dk=H.b(this.r.n(0,"bumpTxt"),"$isag")
this.bq=H.b(this.r.n(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dl=H.b(this.r.n(0,"envSampler"),"$isag")
this.dm=H.b(this.r.n(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.br=H.b(this.r.n(0,"reflectClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.dn=H.b(this.r.n(0,"reflectTxt"),"$isa2")
this.bs=H.b(this.r.n(0,"nullReflectTxt"),"$isF")
break
case C.c:this.dq=H.b(this.r.n(0,"reflectTxt"),"$isag")
this.bs=H.b(this.r.n(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bt=H.b(this.r.n(0,"refraction"),"$isJ")
this.bu=H.b(this.r.n(0,"refractClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.dr=H.b(this.r.n(0,"refractTxt"),"$isa2")
this.bv=H.b(this.r.n(0,"nullRefractTxt"),"$isF")
break
case C.c:this.ds=H.b(this.r.n(0,"refractTxt"),"$isag")
this.bv=H.b(this.r.n(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bw=H.b(this.r.n(0,"alpha"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.dt=H.b(this.r.n(0,"alphaTxt"),"$isa2")
this.bx=H.b(this.r.n(0,"nullAlphaTxt"),"$isF")
break
case C.c:this.du=H.b(this.r.n(0,"alphaTxt"),"$isag")
this.bx=H.b(this.r.n(0,"nullAlphaTxt"),"$isF")
break}}this.cc=H.d([],[A.eI])
this.cd=H.d([],[A.eJ])
this.ce=H.d([],[A.eK])
this.cf=H.d([],[A.eL])
this.cg=H.d([],[A.eM])
this.ci=H.d([],[A.eN])
if(a1.k2){y=a1.z
if(y>0){this.dv=H.j(this.r.n(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.cc;(x&&C.a).h(x,new A.eI(m,l,k))}}y=a1.Q
if(y>0){this.dw=H.j(this.r.n(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isJ")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isJ")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isJ")
x=this.cd;(x&&C.a).h(x,new A.eJ(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dz=H.j(this.r.n(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isJ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isJ")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isJ")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isJ")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isJ")
x=this.ce;(x&&C.a).h(x,new A.eK(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dA=H.j(this.r.n(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isG")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isF")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa2")
x=this.cf;(x&&C.a).h(x,new A.eL(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dB=H.j(this.r.n(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$iscp")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isF")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isJ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isJ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isJ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isag")
x=this.cg;(x&&C.a).h(x,new A.eM(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dC=H.j(this.r.n(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isG")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isF")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isG")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isJ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isJ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isJ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isJ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isJ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa2")
x=this.ci;(x&&C.a).h(x,new A.eN(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cD(c)
b.a.uniform1i(b.d,0)}},
p:{
hE:function(a,b){var z,y
z=a.av
y=new A.e4(b,z)
y.aS(b,z)
y.e4(a,b)
return y}}},hH:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aO,av,aP",
fq:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aO+"];\n"
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
fA:function(a){var z
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
fs:function(a){var z
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
fI:function(a){var z,y
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
fJ:function(a){var z,y
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
fC:function(a){var z
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
fN:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cG(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fv:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
fp:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
ft:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
fw:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
fG:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
fB:function(a){var z,y
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
fE:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
fF:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
fu:function(a){var z,y
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
fD:function(a){var z,y
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
fH:function(a){var z,y
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
fK:function(a){var z,y,x
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
fL:function(a){var z,y,x
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
fM:function(a){var z,y,x
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
fz:function(a){var z
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
j:function(a){return this.av}},eI:{"^":"a;a,b,c"},eL:{"^":"a;a,b,c,d,e,f,r,x"},eJ:{"^":"a;a,b,c,d,e,f,r"},eM:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eK:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eN:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},bw:{"^":"cC;",
aS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b_:function(a,b,c){var z,y,x
this.c=this.cV(b,35633)
this.d=this.cV(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fi(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.n("Failed to link shader: "+H.k(x)))}this.fg()
this.fi()},
F:function(a){a.a.useProgram(this.e)
this.f.h0()},
cV:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fi(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.n("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fg:function(){var z,y,x,w,v,u
z=H.d([],[A.dt])
y=this.a
x=H.W(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dt(y,v.name,u))}this.f=new A.fB(z)},
fi:function(){var z,y,x,w,v,u
z=H.d([],[A.a7])
y=this.a
x=H.W(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fY(v.type,v.size,v.name,u))}this.r=new A.j1(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.d7(z,y,b,a,c)},
ep:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a2(z,y,b,c)
else return A.d7(z,y,b,a,c)},
eq:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ag(z,y,b,c)
else return A.d7(z,y,b,a,c)},
bi:function(a,b){return new P.eV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
fY:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.J(this.a,this.e,c,d)
case 35664:return new A.bF(this.a,this.e,c,d)
case 35665:return new A.G(this.a,this.e,c,d)
case 35666:return new A.eH(this.a,this.e,c,d)
case 35667:return new A.iZ(this.a,this.e,c,d)
case 35668:return new A.j_(this.a,this.e,c,d)
case 35669:return new A.j0(this.a,this.e,c,d)
case 35674:return new A.j3(this.a,this.e,c,d)
case 35675:return new A.cp(this.a,this.e,c,d)
case 35676:return new A.a8(this.a,this.e,c,d)
case 35678:return this.ep(b,c,d)
case 35680:return this.eq(b,c,d)
case 35670:throw H.h(this.bi("BOOL",c))
case 35671:throw H.h(this.bi("BOOL_VEC2",c))
case 35672:throw H.h(this.bi("BOOL_VEC3",c))
case 35673:throw H.h(this.bi("BOOL_VEC4",c))
default:throw H.h(P.n("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},c9:{"^":"a;a,b",
j:function(a){return this.b}},eg:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},en:{"^":"bw;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
e8:function(a,b){var z,y,x,w,v
this.b_(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iK(a))
this.x=this.f.i(0,"posAttr")
this.y=H.b(this.r.n(0,"txtCount"),"$isF")
this.z=H.b(this.r.n(0,"backClr"),"$iseH")
this.Q=H.d([],[A.a2])
this.ch=H.d([],[A.a8])
z=[A.bF]
this.cx=H.d([],z)
this.cy=H.d([],z)
this.db=H.d([],z)
this.dx=H.d([],z)
this.dy=H.d([],[A.F])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa2"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa8"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.db
x=this.r
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.dx
x=this.r
w="destSize"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.dy
x=this.r
w="flip"+y
v=x.i(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isF"))}},
p:{
iK:function(a){var z,y
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
iJ:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.en(b,z)
y.aS(b,z)
y.e8(a,b)
return y}}},a7:{"^":"a;"},j1:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.h(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.H()},
h2:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].j(0)+a
return x},
H:function(){return this.h2("\n")}},F:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},iZ:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},j_:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},j0:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},iY:{"^":"a7;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
p:{
d7:function(a,b,c,d,e){var z=new A.iY(a,b,c,e)
z.f=d
z.e=P.hw(d,0,!1,P.B)
return z}}},J:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},bF:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},G:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},eH:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform4f: "+H.k(this.c)}},j3:{"^":"a7;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},cp:{"^":"a7;a,b,c,d",
a4:function(a){var z=new Float32Array(H.b6(H.v(a,"$isf",[P.u],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},a8:{"^":"a7;a,b,c,d",
a4:function(a){var z=new Float32Array(H.b6(H.v(a,"$isf",[P.u],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},a2:{"^":"a7;a,b,c,d",
dZ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},ag:{"^":"a7;a,b,c,d",
cD:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
ct:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.ct(y)
k=F.ct(z.b)
j=F.lm(d,e,new F.kJ(z,F.ct(z.c),F.ct(z.d),k,l,c),b)
if(j!=null)a.hd(j)},
lm:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.aF,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.d1()
y=H.d([],[F.aF])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cq(null,null,new V.ap(u,0,0,1),null,null,new V.Q(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c7(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cq(null,null,new V.ap(o,n,m,1),null,null,new V.Q(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c7(d))}}z.d.fP(a+1,b+1,y)
return z},
kJ:{"^":"w:36;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cn(z.b,b).cn(z.d.cn(z.c,b),c)
z=new V.af(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a6()}a.sb7(y.v(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
x=new V.bu(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a6()}}},
ak:{"^":"a;0a,0b,0c,0d,0e",
gca:function(){return this.a==null||this.b==null||this.c==null},
ej:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dE())return
return v.v(0,Math.sqrt(v.B(v)))},
em:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.B(z)))
z=w.G(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aY(z.v(0,Math.sqrt(z.B(z))))
return z.v(0,Math.sqrt(z.B(z)))},
c5:function(){if(this.d!=null)return!0
var z=this.ej()
if(z==null){z=this.em()
if(z==null)return!1}this.d=z
this.a.a.a6()
return!0},
ei:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dE())return
return v.v(0,Math.sqrt(v.B(v)))},
el:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.H(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.af(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.B(z)))
z=k.aY(m)
z=z.v(0,Math.sqrt(z.B(z))).aY(k)
m=z.v(0,Math.sqrt(z.B(z)))}return m},
c3:function(){if(this.e!=null)return!0
var z=this.ei()
if(z==null){z=this.el()
if(z==null)return!1}this.e=z
this.a.a.a6()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
w:function(a){var z,y
if(this.gca())return a+"disposed"
z=a+C.i.ag(J.a9(this.a.e),0)+", "+C.i.ag(J.a9(this.b.e),0)+", "+C.i.ag(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
H:function(){return this.w("")},
p:{
bj:function(a,b,c){var z,y,x
z=new F.ak()
y=a.a
if(y==null)H.p(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.n("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a6()
return z}}},
cU:{"^":"a;0a,0b",
gca:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
w:function(a){if(this.gca())return a+"disposed"
return a+C.i.ag(J.a9(this.a.e),0)+", "+C.i.ag(J.a9(this.b.e),0)},
H:function(){return this.w("")},
p:{
hq:function(a,b){var z,y,x
z=new F.cU()
y=a.a
if(y==null)H.p(P.n("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.n("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a6()
return z}}},
d_:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ag(J.a9(z.e),0)},
H:function(){return this.w("")}},
ef:{"^":"a;0a,0b,0c,0d,0e",
gm:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
hd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.Y()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.fX())}this.a.Y()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d_()
if(r.a==null)H.p(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.u(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.Y()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.hq(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.Y()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bj(p,o,m)}z=this.e
if(!(z==null))z.ay(0)},
at:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.at()||!1
if(!this.a.at())y=!1
z=this.e
if(!(z==null))z.ay(0)
return y},
aX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$Z()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gcF(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dx])
for(r=0,q=0;q<w;++q){p=b.fR(q)
o=p.gcF(p)
C.a.a3(s,q,new Z.dx(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h9(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a3(t,l,m[k]);++l}}r+=o}H.v(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b6(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bf(new Z.eT(34962,j),s,b)
i.b=H.d([],[Z.cf])
if(this.b.b.length!==0){x=P.B
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cf(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.Y()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cf(1,h.length,f))}if(this.d.b.length!==0){x=P.B
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.Y()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.Y()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cf(4,h.length,f))}return i},
j:function(a){var z=H.d([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.A(z,"\n")},
ak:function(a){var z=this.e
if(!(z==null))z.u(a)},
a6:function(){return this.ak(null)},
p:{
d1:function(){var z,y
z=new F.ef()
y=new F.je(z)
y.b=!1
y.c=H.d([],[F.aF])
z.a=y
y=new F.iq(z)
y.b=H.d([],[F.d_])
z.b=y
y=new F.ip(z)
y.b=H.d([],[F.cU])
z.c=y
y=new F.io(z)
y.b=H.d([],[F.ak])
z.d=y
z.e=null
return z}}},
io:{"^":"a;a,0b",
fO:function(a){var z,y,x,w,v
H.v(a,"$isf",[F.aF],"$asf")
z=H.d([],[F.ak])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bj(y,w,v))}return z},
fP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isf",[F.aF],"$asf")
z=H.d([],[F.ak])
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
C.a.h(z,F.bj(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bj(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bj(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bj(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
at:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c5())x=!1
return x},
c4:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c3())x=!1
return x},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
H:function(){return this.w("")}},
ip:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
z=H.d([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.A(z,"\n")},
H:function(){return this.w("")}},
iq:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
H:function(){return this.w("")}},
aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c7:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cq(this.cx,x,u,z,y,w,v,a,t)},
fX:function(){return this.c7(null)},
sb7:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a6()}},
h9:function(a){var z,y
z=J.K(a)
if(z.q(a,$.$get$Z())){z=this.f
y=[P.u]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aI())){z=this.r
y=[P.u]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aH())){z=this.x
y=[P.u]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$at())){z=this.y
y=[P.u]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.q(a,$.$get$aJ())){z=this.z
y=[P.u]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bG())){z=this.Q
y=[P.u]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bH())){z=this.Q
y=[P.u]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b4()))return H.d([this.ch],[P.u])
else if(z.q(a,$.$get$aG())){z=this.cx
y=[P.u]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.u])},
c5:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.N(0,new F.jl(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.ay(0)}return!0},
c3:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.N(0,new F.jk(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a6()
z=this.a.e
if(!(z==null))z.ay(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.H()},
w:function(a){var z,y,x
z=H.d([],[P.o])
C.a.h(z,C.i.ag(J.a9(this.e),0))
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
C.a.h(z,V.M(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.A(z,", ")
return a+"{"+x+"}"},
H:function(){return this.w("")},
p:{
cq:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aF()
y=new F.jj(z)
y.b=H.d([],[F.d_])
z.b=y
y=new F.ji(z)
x=[F.cU]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.jf(z)
x=[F.ak]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$eQ()
z.e=0
y=$.$get$Z()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$at().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$eR().a)!==0?c:null
z.ch=(x&$.$get$b4().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
jl:{"^":"w:5;a",
$1:function(a){var z,y
H.j(a,"$isak")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jk:{"^":"w:5;a",
$1:function(a){var z,y
H.j(a,"$isak")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
je:{"^":"a;a,0b,0c",
Y:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a6()
return!0},
fQ:function(a,b,c,d,e,f,g,h,i){var z=F.cq(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bj:function(a,b,c,d,e,f){return this.fQ(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
at:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c5()
return!0},
c4:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c3()
return!0},
fT:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
this.Y()
z=H.d([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
H:function(){return this.w("")}},
jf:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.c(b,{func:1,ret:-1,args:[F.ak]})
C.a.N(this.b,b)
C.a.N(this.c,new F.jg(this,b))
C.a.N(this.d,new F.jh(this,b))},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
H:function(){return this.w("")}},
jg:{"^":"w:5;a,b",
$1:function(a){H.j(a,"$isak")
if(!J.N(a.a,this.a))this.b.$1(a)}},
jh:{"^":"w:5;a,b",
$1:function(a){var z
H.j(a,"$isak")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
ji:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
H:function(){return this.w("")}},
jj:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.H()},
w:function(a){var z,y,x,w
z=H.d([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
H:function(){return this.w("")}}}],["","",,O,{"^":"",fV:{"^":"aP;0a,0b,0c,0d,0e,0a8:f@",
gm:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
t:function(a){var z=this.f
if(!(z==null))z.u(a)},
a2:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.j(a.fr.i(0,"Depth"),"$isdG")
if(y==null){z=a.a
y=new A.dG(z,"Depth")
y.aS(z,"Depth")
y.b_(0,$.fX,$.fW)
y.x=y.f.i(0,"posAttr")
y.y=H.b(y.r.i(0,"objClr"),"$isG")
y.z=H.b(y.r.i(0,"fogClr"),"$isG")
y.Q=H.b(y.r.i(0,"fogStart"),"$isJ")
y.ch=H.b(y.r.i(0,"fogStop"),"$isJ")
y.cx=H.b(y.r.i(0,"viewObjMat"),"$isa8")
y.cy=H.b(y.r.i(0,"projMat"),"$isa8")
a.aV(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bf)){b.e=null
x=null}if(x==null){z=b.d.aX(new Z.c1(a.a),$.$get$Z())
x=z.a9($.$get$Z())
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
w.a4(x.W(0,!0))
x=a.gdS()
z=z.cx
z.toString
z.a4(x.W(0,!0))
x=b.e
x.F(a)
x.a0(a)
x.a1(a)
x=this.a
x.toString
a.a.useProgram(null)
x.f.aZ()}},hc:{"^":"aP;0a,0b,0c,0d,0e,0f,0r,0a8:x@",
gm:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
t:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.u(a)},function(){return this.t(null)},"ao","$1","$0","gU",0,2,0],
a2:function(a,b){},
K:function(a,b){H.v(a,"$isf",[T.b1],"$asf")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
b4:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.j(a.fr.i(0,"GaussianBlur"),"$isdQ")
if(z==null){y=a.a
z=new A.dQ(y,"GaussianBlur")
z.aS(y,"GaussianBlur")
z.b_(0,$.he,$.hd)
z.x=z.f.i(0,"posAttr")
z.y=z.f.i(0,"txtAttr")
z.z=H.b(z.r.i(0,"projViewObjMat"),"$isa8")
z.Q=H.b(z.r.i(0,"txt2DMat"),"$iscp")
z.ch=H.b(z.r.i(0,"colorTxt"),"$isa2")
z.cx=H.b(z.r.i(0,"depthTxt"),"$isa2")
z.cy=H.b(z.r.i(0,"nullColorTxt"),"$isF")
z.db=H.b(z.r.i(0,"nullDepthTxt"),"$isF")
z.dx=H.b(z.r.i(0,"width"),"$isJ")
z.dy=H.b(z.r.i(0,"height"),"$isJ")
z.fr=H.b(z.r.i(0,"highOffset"),"$isJ")
z.fx=H.b(z.r.i(0,"lowOffset"),"$isJ")
z.fy=H.b(z.r.i(0,"depthLimit"),"$isJ")
a.aV(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$Z()
v=$.$get$at()
v=y.aX(new Z.c1(x),new Z.aQ(w.a|v.a))
v.a9($.$get$Z()).e=this.a.x.c
v.a9($.$get$at()).e=this.a.y.c
b.e=v}u=H.d([],[T.b1])
this.K(u,this.c)
this.K(u,this.d)
for(t=0;t<u.length;++t)u[t].F(a)
y=this.a
y.F(a)
x=this.c
y.a7(y.ch,y.cy,x)
x=this.d
y.a7(y.cx,y.db,x)
x=this.b
w=y.Q
w.toString
w.a4(x.W(0,!0))
x=a.gdN()
w=y.z
w.toString
w.a4(x.W(0,!0))
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
if(y instanceof Z.bf){y.F(a)
y.a0(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aZ()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hD:{"^":"aP;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0a8:dy@",
gm:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
t:[function(a){var z
H.j(a,"$isl")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.t(null)},"ao","$1","$0","gU",0,2,0],
f9:[function(a){H.j(a,"$isl")
this.a=null
this.t(a)},function(){return this.f9(null)},"ih","$1","$0","gf8",0,2,0],
hP:[function(a,b){var z=V.a5
z=new D.bU(a,H.v(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.t(z)},"$2","geF",8,0,20],
hQ:[function(a,b){var z=V.a5
z=new D.bV(a,H.v(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.t(z)},"$2","geG",8,0,20],
cS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a_(z.e.length+3,4)*4
x=C.f.a_(z.f.length+3,4)*4
w=C.f.a_(z.r.length+3,4)*4
v=C.f.a_(z.x.length+3,4)*4
u=C.f.a_(z.y.length+3,4)*4
t=C.f.a_(z.z.length+3,4)*4
s=C.f.a_(this.e.a.length+3,4)*4
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
a6=$.$get$Z()
if(c){z=$.$get$aI()
a6=new Z.aQ(a6.a|z.a)}if(b){z=$.$get$aH()
a6=new Z.aQ(a6.a|z.a)}if(a){z=$.$get$at()
a6=new Z.aQ(a6.a|z.a)}if(a0){z=$.$get$aJ()
a6=new Z.aQ(a6.a|z.a)}if(a2){z=$.$get$aG()
a6=new Z.aQ(a6.a|z.a)}return new A.hH(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
K:function(a,b){H.v(a,"$isf",[T.b1],"$asf")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
a2:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ao(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cv(x)}}},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cS()
y=H.j(a.fr.i(0,z.av),"$ise4")
if(y==null){y=A.hE(z,a.a)
a.aV(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aP
z=b.e
if(!(z instanceof Z.bf)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.at()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.c4()
u.a.c4()
u=u.e
if(!(u==null))u.ay(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fT()
t=t.e
if(!(t==null))t.ay(0)}r=b.d.aX(new Z.c1(a.a),w)
r.a9($.$get$Z()).e=this.a.y.c
if(z)r.a9($.$get$aI()).e=this.a.Q.c
if(v)r.a9($.$get$aH()).e=this.a.z.c
if(x.rx)r.a9($.$get$at()).e=this.a.ch.c
if(u)r.a9($.$get$aJ()).e=this.a.cx.c
if(x.x1)r.a9($.$get$aG()).e=this.a.cy.c
b.e=r}z=T.b1
q=H.d([],[z])
this.a.F(a)
if(x.fx){v=this.a
u=a.dx
u=u.gL(u)
v=v.db
v.toString
v.a4(u.W(0,!0))}if(x.fy){v=this.a
u=a.gdS()
v=v.dx
v.toString
v.a4(u.W(0,!0))}v=this.a
u=a.gdN()
v=v.fr
v.toString
v.a4(u.W(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a4(u.W(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a4(u.W(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a4(C.A.W(u,!0))}if(x.aO>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.u],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.j(t,"$isa5")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.b6(H.v(t.W(0,!0),"$isf",v,"$asf")))
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
v.a7(v.r1,v.rx,u)
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
v.ae(v.r2,v.rx,u)
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
v.a7(v.x1,v.y1,u)
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
v.ae(v.x2,v.y1,u)
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
v.a7(v.aO,v.aP,u)
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
v.ae(v.av,v.aP,u)
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
v=v.bl
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.K(q,this.y.d)
v=this.a
u=this.y.d
v.a7(v.df,v.bm,u)
u=this.a
v=this.y.f
u=u.bl
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.K(q,this.y.e)
v=this.a
u=this.y.e
v.ae(v.dg,v.bm,u)
u=this.a
v=this.y.f
u=u.bl
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bn
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bp
u.a.uniform1f(u.d,s)
break
case C.d:this.K(q,this.z.d)
v=this.a
u=this.z.d
v.a7(v.dh,v.bo,u)
u=this.a
v=this.z.f
u=u.bn
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bp
v.a.uniform1f(v.d,s)
break
case C.c:this.K(q,this.z.e)
v=this.a
u=this.z.e
v.ae(v.di,v.bo,u)
u=this.a
v=this.z.f
u=u.bn
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bp
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cc
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cv(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cd
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb3(j)
s=i.b
h=t.gcz(t)
g=t.gcA(t)
t=t.gcB(t)
s.a.uniform3f(s.d,h,g,t)
t=m.ba(j.gb3(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gam(j)
g=i.d
h=t.gbz()
s=t.gbb()
t=t.gbk()
g.a.uniform3f(g.d,h,s,t)
t=j.gbZ()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gc_()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gc0()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.ce
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb3(j)
s=i.b
h=t.gcz(t)
g=t.gcA(t)
t=t.gcB(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc9(j).io()
g=i.c
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
g.a.uniform3f(g.d,h,s,t)
t=m.ba(j.gb3(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gam(j)
s=i.e
h=t.gbz()
g=t.gbb()
t=t.gbk()
s.a.uniform3f(s.d,h,g,t)
t=j.gim()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gil()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbZ()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gc_()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gc0()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.cf
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb6()
H.v(q,"$isf",t,"$asf")
if(!C.a.au(q,s)){s.saT(q.length)
C.a.h(q,s)}s=j.gc9(j)
h=i.d
g=s.gaL(s)
f=s.gaM(s)
s=s.gaN()
h.a.uniform3f(h.d,g,f,s)
s=j.gbA()
f=i.b
g=s.gaL(s)
h=s.gaM(s)
s=s.gaN()
f.a.uniform3f(f.d,g,h,s)
s=j.gb5(j)
h=i.c
g=s.gaL(s)
f=s.gaM(s)
s=s.gaN()
h.a.uniform3f(h.d,g,f,s)
s=m.cv(j.gc9(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gam(j)
g=i.f
f=h.gbz()
s=h.gbb()
h=h.gbk()
g.a.uniform3f(g.d,f,s,h)
h=j.gb6()
s=h.gdH(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcX()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaT())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dB
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.y,u=v.length,t=[P.u],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.cg
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb6()
H.v(q,"$isf",s,"$asf")
if(!C.a.au(q,h)){h.saT(q.length)
C.a.h(q,h)}e=m.l(0,j.gL(j))
h=j.gL(j).ba(new V.af(0,0,0))
g=i.b
f=h.gcz(h)
d=h.gcA(h)
h=h.gcB(h)
g.a.uniform3f(g.d,f,d,h)
h=e.ba(new V.af(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cl(0)
d=i.d
n=new Float32Array(H.b6(H.v(new V.cW(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).W(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gam(j)
h=i.e
f=d.gbz()
g=d.gbb()
d=d.gbk()
h.a.uniform3f(h.d,f,g,d)
d=j.gb6()
h=d.gdH(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcX()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaT())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbZ()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc_()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc0()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dC
v.a.uniform1i(v.d,p)
v=a.db
m=v.gL(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.ci
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb6()
H.v(q,"$isf",z,"$asf")
if(!C.a.au(q,t)){t.saT(q.length)
C.a.h(q,t)}t=j.gb3(j)
s=i.b
h=t.gcz(t)
g=t.gcA(t)
t=t.gcB(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc9(j)
g=i.c
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
g.a.uniform3f(g.d,h,s,t)
t=j.gbA()
s=i.d
h=t.gaL(t)
g=t.gaM(t)
t=t.gaN()
s.a.uniform3f(s.d,h,g,t)
t=j.gb5(j)
g=i.e
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
g.a.uniform3f(g.d,h,s,t)
t=m.ba(j.gb3(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb6()
s=t.gdH(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcX()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaT())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gam(j)
s=i.y
h=t.gbz()
g=t.gbb()
t=t.gbk()
s.a.uniform3f(s.d,h,g,t)
t=j.giu()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giv()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbZ()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gc_()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gc0()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.K(q,this.Q.d)
z=this.a
v=this.Q.d
z.a7(z.dj,z.bq,v)
break
case C.c:this.K(q,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.dk,z.bq,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gL(v).cl(0)
a.Q=v}z=z.fy
z.toString
z.a4(v.W(0,!0))}if(x.dy){this.K(q,this.ch)
z=this.a
v=this.ch
z.ae(z.dl,z.dm,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.br
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.K(q,this.cx.d)
z=this.a
v=this.cx.d
z.a7(z.dn,z.bs,v)
v=this.a
z=this.cx.f
v=v.br
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.K(q,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.dq,z.bs,v)
v=this.a
z=this.cx.f
v=v.br
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bu
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bt
v.a.uniform1f(v.d,t)
break
case C.d:this.K(q,this.cy.d)
z=this.a
v=this.cy.d
z.a7(z.dr,z.bv,v)
v=this.a
z=this.cy.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bt
z.a.uniform1f(z.d,t)
break
case C.c:this.K(q,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.ds,z.bv,v)
v=this.a
z=this.cy.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bt
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bw
z.a.uniform1f(z.d,u)
break
case C.d:this.K(q,this.db.d)
z=this.a
u=this.db.d
z.a7(z.dt,z.bx,u)
u=this.a
z=this.db.f
u=u.bw
u.a.uniform1f(u.d,z)
break
case C.c:this.K(q,this.db.e)
z=this.a
u=this.db.e
z.ae(z.du,z.bx,u)
u=this.a
z=this.db.f
u=u.bw
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
z.f.aZ()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cS().av}},hF:{"^":"cV;0f,a,b,0c,0d,0e",
fc:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.x(this.b,y,a,this,[P.u])
z.b=!0
this.a.t(z)}},
aH:function(){this.cI()
this.fc(1)}},cV:{"^":"a;",
t:[function(a){this.a.t(H.j(a,"$isl"))},function(){return this.t(null)},"ao","$1","$0","gU",0,2,0],
aH:["cI",function(){}],
fe:function(a){},
ff:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.gm()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.O(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.gm()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.x(this.b+".textureCube",x,this.e,this,[T.d4])
z.b=!0
this.a.t(z)}},
sb7:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aH()
this.c=C.c
this.fe(null)
z=this.a
z.a=null
z.t(null)}this.ff(a)}},hG:{"^":"cV;a,b,0c,0d,0e"},b_:{"^":"cV;0f,a,b,0c,0d,0e",
d1:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.x(this.b+".color",z,a,this,[V.S])
y.b=!0
this.a.t(y)}},
aH:["bE",function(){this.cI()
this.d1(new V.S(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aH()
z=this.a
z.a=null
z.t(null)}this.d1(b)}},hI:{"^":"b_;0ch,0f,a,b,0c,0d,0e",
fd:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.t(z)}},
aH:function(){this.bE()
this.fd(1)}},hJ:{"^":"b_;0ch,0f,a,b,0c,0d,0e",
bV:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.t(z)}},
aH:function(){this.bE()
this.bV(100)}},iv:{"^":"aP;0a,0b,0c,0d,0a8:e@",
gm:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
t:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.t(null)},"ao","$1","$0","gU",0,2,0],
a2:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.i(0,"Skybox"),"$iseg")
if(z==null){y=a.a
z=new A.eg(y,"Skybox")
z.aS(y,"Skybox")
z.b_(0,$.ix,$.iw)
z.x=z.f.i(0,"posAttr")
z.y=H.b(z.r.i(0,"fov"),"$isJ")
z.z=H.b(z.r.i(0,"ratio"),"$isJ")
z.Q=H.b(z.r.i(0,"boxClr"),"$isG")
z.ch=H.b(z.r.i(0,"boxTxt"),"$isag")
z.cx=H.b(z.r.i(0,"viewMat"),"$isa8")
a.aV(z)}this.a=z}if(b.e==null){y=b.d.aX(new Z.c1(a.a),$.$get$Z())
y.a9($.$get$Z()).e=this.a.x.c
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
w.ch.cD(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gL(x).cl(0)
w=w.cx
w.toString
w.a4(x.W(0,!0))
y=b.e
if(y instanceof Z.bf){y.F(a)
y.a0(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.aZ()
y=this.c
if(y!=null)y.a1(a)}},aP:{"^":"a;"},iI:{"^":"aP;0a,0b,0c,0d,0a8:e@",
gm:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
t:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.t(null)},"ao","$1","$0","gU",0,2,0],
hX:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ise",[O.bD],"$ase")
for(z=b.length,y=this.gU(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.aE()
t.a=H.d([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.ao()},"$2","geN",8,0,21],
hY:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ise",[O.bD],"$ase")
for(z=b.length,y=this.gU(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.aE()
t.a=H.d([],w)
t.c=0
u.sa8(t)}t=u.ga8()
t.toString
H.c(y,x)
C.a.O(t.a,y)}}this.ao()},"$2","geO",8,0,21],
a2:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.f.a_(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.j(a.fr.i(0,y),"$isen")
if(x==null){x=A.iJ(z,a.a)
a.aV(x)}this.b=x
y=x}if(b.e==null){y=b.d.aX(new Z.c1(a.a),$.$get$Z())
w=y.a9($.$get$Z())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.F(a)
y=T.b1
u=H.d([],[y])
for(w=[P.u],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.v(u,"$isf",y,"$asf")
if(v!=null)if(!C.a.au(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.Q
if(t>=v.length)return H.i(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.ch
if(t>=v.length)return H.i(v,t)
v=v[t]
n=new Float32Array(H.b6(H.v((q==null?new V.a5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).W(0,!0),"$isf",w,"$asf")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aO(0,0,1,1)
q=v.cx
if(t>=q.length)return H.i(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.cy
if(t>=v.length)return H.i(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aO(0,0,1,1)
q=v.db
if(t>=q.length)return H.i(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.i(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.dy
if(t>=v.length)return H.i(v,t)
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
if(y instanceof Z.bf){y.F(a)
y.a0(a)
y.a1(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.aZ()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bD:{"^":"a;0a,0b,0c,0d,0e,0a8:f@",
gm:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
t:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.t(null)},"ao","$1","$0","gU",0,2,0],
p:{
eo:function(a,b,c,d,e){var z,y,x,w,v,u
z=new O.bD()
y=z.a
z.a=e
x=e.gm()
x.toString
w=H.c(z.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.x("texture",y,z.a,z,[T.cn])
x.b=!0
z.t(x)
v=V.aM()
if(!J.N(z.b,v)){y=z.b
z.b=v
x=new D.x("colorMatrix",y,v,z,[V.a5])
x.b=!0
z.t(x)}u=V.aO(0,0,1,1)
if(!J.N(z.c,u)){y=z.c
z.c=u
x=new D.x("source",y,u,z,[V.cl])
x.b=!0
z.t(x)}if(!J.N(z.d,b)){y=z.d
z.d=b
x=new D.x("destination",y,b,z,[V.cl])
x.b=!0
z.t(x)}if(z.e!==!1){z.e=!1
x=new D.x("flip",!0,!1,z,[P.a3])
x.b=!0
z.t(x)}z.f=null
return z}}}}],["","",,T,{"^":"",b1:{"^":"cC;"},cn:{"^":"b1;"},iH:{"^":"cn;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gm:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
F:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
p:{
em:function(a,b){var z=new T.iH()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},d4:{"^":"b1;0a,0b,0c,0d,0e",
gm:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
F:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a1:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iL:{"^":"a;a,0b,0c,0d,0e",
dG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.d4()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aF(r,s,z,34069,!1,!1)
this.aF(r,s,w,34070,!1,!1)
this.aF(r,s,y,34071,!1,!1)
this.aF(r,s,v,34072,!1,!1)
this.aF(r,s,x,34073,!1,!1)
this.aF(r,s,u,34074,!1,!1)
return r},
dF:function(a){return this.dG(a,".png",!1,"")},
hb:function(a,b){return this.dG(a,b,!1,"")},
aF:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.V(z,"load",H.c(new T.iM(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fa:function(a,b,c){var z,y,x,w
b=V.bR(b,2)
z=V.bR(a.width,2)
y=V.bR(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cG(null,null)
x.width=z
x.height=y
w=H.j(C.k.dV(x,"2d"),"$isdz")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kZ(w.getImageData(0,0,x.width,x.height))}}},iM:{"^":"w:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fa(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hB(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.cb()}++z.e}}}],["","",,V,{"^":"",fz:{"^":"a;",
b0:function(a,b){return!0},
j:function(a){return"all"},
$isbY:1},bY:{"^":"a;"},e3:{"^":"a;",
b0:["e2",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b0(0,b))return!0
return!1}],
j:["cH",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isbY:1},bs:{"^":"e3;0a",
b0:function(a,b){return!this.e2(0,b)},
j:function(a){return"!["+this.cH(0)+"]"}},il:{"^":"a;0a",
e6:function(a){var z,y
if(a.a.length<=0)throw H.h(P.n("May not create a SetMatcher with zero characters."))
z=new H.aZ(0,0,[P.B,P.a3])
for(y=new H.e0(a,a.gk(a),0,[H.aB(a,"t",0)]);y.C();)z.a3(0,y.d,!0)
this.a=z},
b0:function(a,b){return this.a.dc(0,b)},
j:function(a){var z=this.a
return P.d3(new H.e_(z,[H.z(z,0)]),0,null)},
$isbY:1,
p:{
a1:function(a){var z=new V.il()
z.e6(a)
return z}}},ei:{"^":"a;a,b,0c,0d",
ghe:function(a){return this.b},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ev(this.a.I(0,b))
w.a=H.d([],[V.bY])
w.c=!1
C.a.h(this.c,w)
return w},
h1:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b0(0,a))return w}return},
j:function(a){return this.b}},es:{"^":"a;a,b,c",
j:function(a){var z,y
z=H.ft(this.b,"\n","\\n")
y=H.ft(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},et:{"^":"a;a,b,0c",
j:function(a){return this.b}},iU:{"^":"a;0a,0b,0c",
I:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.ei(this,b)
z.c=H.d([],[V.ev])
this.a.a3(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.et(this,a)
y=P.o
z.c=new H.aZ(0,0,[y,y])
this.b.a3(0,a,z)}return z},
hG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.es])
y=this.c
x=[P.B]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bd(a,t)
r=y.h1(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d3(w,0,null)
throw H.h(P.n("Untokenizable string [state: "+y.ghe(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d3(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.es(o==null?p.b:o,q,t)}++t}}}},ev:{"^":"e3;b,0c,0a",
j:function(a){return this.b.b+": "+this.cH(0)}}}],["","",,X,{"^":"",fD:{"^":"cm;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gm:function(){var z=this.fr
if(z==null){z=D.C()
this.fr=z}return z},
ai:function(a){var z=this.fr
if(!(z==null))z.u(a)},
sad:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.x("width",z,b,this,[P.B])
z.b=!0
this.ai(z)}},
saa:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.x("height",z,b,this,[P.B])
z.b=!0
this.ai(z)}},
F:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.l()
this.sad(0,C.h.T(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.l()
this.saa(0,C.h.T(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.W(z.getParameter(3379))
u=V.bR(x,2)
t=V.bR(w,2)
v=V.bR(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dP(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.em(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cb()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cb()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.Q=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.z,0)
z.framebufferRenderbuffer(36160,36096,36161,this.Q)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.y)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dy
y=z.c
a.c=C.h.T(y*this.a)
x=z.d
a.d=C.h.T(x*this.b)
w=this.c
q=C.h.T(z.a*w)
p=this.d
o=C.h.T(z.b*p)
n=C.h.T(y*w)
m=C.h.T(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
if(this.cy){z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a1:function(a){a.a.bindFramebuffer(36160,null)},
p:{
du:function(a,b,c,d,e,f){var z=new X.fD()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.em(0,null)
z.cx=new V.ap(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.aO(0,0,1,1)
z.sad(0,a)
z.saa(0,b)
return z}}},c7:{"^":"a;",$isax:1},hb:{"^":"cm;0a,0b,0c,0d,0e,0f,0r,0x",
gm:function(){var z=this.x
if(z==null){z=D.C()
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
v=C.h.T(w.a*y)
if(typeof x!=="number")return H.r(x)
u=C.h.T(w.b*x)
t=C.h.T(w.c*y)
a.c=t
w=C.h.T(w.d*x)
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
cM:function(a,b,c,d,e,f,g){var z,y
z=new X.hb()
y=new V.ap(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aO(0,0,1,1)
z.r=y
return z}}},hf:{"^":"a;0a,0b",
gm:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
F:function(a){var z
a.cy.by(V.aM())
z=V.aM()
a.db.by(z)},
a1:function(a){a.cy.ax()
a.db.ax()},
$isax:1,
$isc7:1},hW:{"^":"a;0a,0b,0c,0d,0e,0f",
gm:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
ai:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.ai(null)},"hI","$1","$0","gef",0,2,0],
F:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.av(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.by(s)
z=$.eb
if(z==null){z=V.e5(new V.af(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.eb=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aR(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.by(r)},
a1:function(a){a.cy.ax()
a.db.ax()},
$isax:1,
$isc7:1,
p:{
ea:function(a,b,c,d,e){var z,y,x,w
z=new X.hW()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null){x=c.gm()
x.toString
w=H.c(z.gef(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.x("mover",y,z.b,z,[U.a6])
x.b=!0
z.ai(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.x("fov",y,b,z,[P.u])
x.b=!0
z.ai(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.x("near",y,d,z,[P.u])
x.b=!0
z.ai(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.x("far",y,a,z,[P.u])
x.b=!0
z.ai(x)}return z}}},cm:{"^":"a;"}}],["","",,V,{"^":"",
lk:function(a){P.iT(C.x,new V.ll(a))},
ll:{"^":"w:38;a",
$1:function(a){H.j(a,"$isb2")
P.dq(C.h.dR(this.a.gh3(),2)+" fps")}},
ir:{"^":"a;0a,0b",
e7:function(a,b){var z,y,x,w,v,u,t
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
W.V(z,"scroll",H.c(new V.iu(x),{func:1,ret:-1,args:[t]}),!1,t)},
d7:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isf",[P.o],"$asf")
this.fh()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hG(C.a.h7(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fs(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kw(C.I,s,C.r,!1)
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
fh:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iU()
y=P.o
z.a=new H.aZ(0,0,[y,V.ei])
z.b=new H.aZ(0,0,[y,V.et])
z.c=z.I(0,"Start")
y=z.I(0,"Start").A(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Bold").A(0,"Bold")
x=new V.bs()
w=[V.bY]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.I(0,"Bold").A(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").A(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Italic").A(0,"Italic")
x=new V.bs()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.I(0,"Italic").A(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").A(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Code").A(0,"Code")
x=new V.bs()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.I(0,"Code").A(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").A(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"LinkHead").A(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.I(0,"LinkHead").A(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkHead").A(0,"LinkHead")
y=new V.bs()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.I(0,"LinkTail").A(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkTail").A(0,"LinkTail")
y=new V.bs()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.I(0,"Start").A(0,"Other").a,new V.fz())
x=z.I(0,"Other").A(0,"Other")
y=new V.bs()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.I(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.I(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.I(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.I(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.I(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
p:{
is:function(a,b){var z=new V.ir()
z.e7(a,!0)
return z}}},
iu:{"^":"w:22;a",
$1:function(a){P.eq(C.l,new V.it(this.a))}},
it:{"^":"w:2;a",
$0:function(){var z,y,x
z=C.h.T(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
fo:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=V.is("Test 028",!0)
y=W.cG(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.o]
z.d7(H.d(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],x))
z.d7(H.d(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.p(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.iR(w,!0,!0,!0,!1)
u=new U.dR()
u.bc(U.a6)
u.aA(u.geD(),u.gf_())
u.e=null
u.f=V.aM()
u.r=0
z=v.r
x=new U.ja()
t=U.cI()
t.scw(0,!0)
t.sco(6.283185307179586)
t.scq(0)
t.sab(0,0)
t.scp(100)
t.sP(0)
t.sc8(0.5)
x.b=t
t=t.gm()
t.toString
s={func:1,ret:-1,args:[D.l]}
r=H.c(x.gaG(),s)
C.a.h(t.a,r)
t=U.cI()
t.scw(0,!0)
t.sco(6.283185307179586)
t.scq(0)
t.sab(0,0)
t.scp(100)
t.sP(0)
t.sc8(0.5)
x.c=t
C.a.h(t.gm().a,r)
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
q=new X.aw(!1,!1,!1)
p=x.d
x.d=q
t=[X.aw]
r=new D.x("modifiers",p,q,x,t)
r.b=!0
x.M(r)
r=x.f
if(r!==!1){x.f=!1
r=new D.x("invertX",r,!1,x,[P.a3])
r.b=!0
x.M(r)}r=x.r
if(r!==!1){x.r=!1
r=new D.x("invertY",r,!1,x,[P.a3])
r.b=!0
x.M(r)}x.aW(z)
u.h(0,x)
z=v.r
x=new U.j9()
r=U.cI()
r.scw(0,!0)
r.sco(6.283185307179586)
r.scq(0)
r.sab(0,0)
r.scp(100)
r.sP(0)
r.sc8(0.2)
x.b=r
r=r.gm()
r.toString
o=H.c(x.gaG(),s)
C.a.h(r.a,o)
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
q=new X.aw(!0,!1,!1)
p=x.c
x.c=q
r=new D.x("modifiers",p,q,x,t)
r.b=!0
x.M(r)
x.aW(z)
u.h(0,x)
z=v.r
x=new U.jb()
x.c=0.01
x.d=0
x.e=0
q=new X.aw(!1,!1,!1)
x.b=q
t=new D.x("modifiers",null,q,x,t)
t.b=!0
x.M(t)
x.aW(z)
u.h(0,x)
u.h(0,U.cK(V.hM(0,0,5)))
n=X.ea(2000,1.0471975511965976,u,0.1,null)
m=F.d1()
F.bK(m,null,null,1,1,1,0,0,1)
F.bK(m,null,null,1,1,0,1,0,3)
F.bK(m,null,null,1,1,0,0,1,2)
F.bK(m,null,null,1,1,-1,0,0,0)
F.bK(m,null,null,1,1,0,-1,0,0)
F.bK(m,null,null,1,1,0,0,-1,3)
m.at()
l=E.cb(null,!0,null,"",m,null)
k=E.cb(null,!0,null,"",null,null)
for(j=-1.6;j<=1.7;j+=0.8)for(i=-1.6;i<=1.7;i+=0.8)for(h=-1.6;h<=1.7;h+=0.8){g=new V.a5(1,0,0,j,0,1,0,i,0,0,1,h,0,0,0,1).l(0,new V.a5(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
f=E.cb(null,!0,null,"",null,null)
z=new U.cJ()
z.sL(0,g)
f.sdJ(z)
z=f.y
x=H.z(z,0)
H.D(l,x)
t=[x]
if(z.bf(H.d([l],t))){r=z.a
e=r.length
C.a.h(r,l)
x=H.v(H.d([l],t),"$ise",[x],"$ase")
z=z.c
if(z!=null)z.$2(e,x)}z=k.y
x=H.z(z,0)
H.D(f,x)
t=[x]
if(z.bf(H.d([f],t))){r=z.a
e=r.length
C.a.h(r,f)
x=H.v(H.d([f],t),"$ise",[x],"$ase")
z=z.c
if(z!=null)z.$2(e,x)}}d=v.f.dF("../resources/diceColor")
c=new O.hD()
z=O.c8(V.a5)
c.e=z
z.aA(c.geF(),c.geG())
z=new O.b_(c,"emission")
z.c=C.b
z.f=new V.S(0,0,0)
c.f=z
z=new O.b_(c,"ambient")
z.c=C.b
z.f=new V.S(0,0,0)
c.r=z
z=new O.b_(c,"diffuse")
z.c=C.b
z.f=new V.S(0,0,0)
c.x=z
z=new O.b_(c,"invDiffuse")
z.c=C.b
z.f=new V.S(0,0,0)
c.y=z
z=new O.hJ(c,"specular")
z.c=C.b
z.f=new V.S(0,0,0)
z.ch=100
c.z=z
z=new O.hG(c,"bump")
z.c=C.b
c.Q=z
c.ch=null
z=new O.b_(c,"reflect")
z.c=C.b
z.f=new V.S(0,0,0)
c.cx=z
z=new O.hI(c,"refract")
z.c=C.b
z.f=new V.S(0,0,0)
z.ch=1
c.cy=z
z=new O.hF(c,"alpha")
z.c=C.b
z.f=1
c.db=z
z=new D.hp()
z.bc(D.U)
z.e=H.d([],[D.ca])
z.f=H.d([],[D.hY])
z.r=H.d([],[D.iy])
z.x=H.d([],[D.iN])
z.y=H.d([],[D.iO])
z.z=H.d([],[D.iP])
z.Q=null
z.ch=null
z.cC(z.geE(),z.geZ(),z.gf0())
c.dx=z
x=z.Q
if(x==null){x=D.C()
z.Q=x
z=x}else z=x
x=H.c(c.gf8(),s)
C.a.h(z.a,x)
x=c.dx
z=x.ch
if(z==null){z=D.C()
x.ch=z}x=H.c(c.gU(),s)
C.a.h(z.a,x)
c.dy=null
x=c.dx
z=U.cK(V.e6(-1,-1,-1,null))
x.h(0,D.dM(new V.S(1,0.9,0.9),z))
z=c.dx
x=U.cK(V.e6(1,1,2,null))
z.h(0,D.dM(new V.S(0.2,0.2,0.35),x))
z=c.r
z.sam(0,new V.S(0.2,0.2,0.2))
c.r.sb7(d)
z=c.x
z.sam(0,new V.S(0.8,0.8,0.8))
c.x.sb7(d)
z=c.z
z.sam(0,new V.S(0.7,0.7,0.7))
z=c.z
if(z.c===C.b){z.c=C.e
z.bE()
z.bV(100)
x=z.a
x.a=null
x.t(null)}z.bV(10)
c.Q.sb7(v.f.dF("../resources/diceBumpMap"))
b=X.du(800,600,!0,1,1,!0)
if(b.cy){b.cy=!1
z=new D.x("clearColor",!0,!1,b,[P.a3])
z.b=!0
b.ai(z)}z=v.f.hb("../resources/maskonaive",".jpg")
a=M.cL(null,null,null)
x=new O.iv()
x.b=1.0471975511965976
p=x.c
x.c=z
z=z.gm()
z.toString
t=H.c(x.gU(),s)
C.a.h(z.a,t)
z=new D.x("boxTexture",p,x.c,x,[T.d4])
z.b=!0
x.t(z)
d=new V.S(1,1,1)
if(!J.N(x.d,d)){p=x.d
x.d=d
z=new D.x("boxColor",p,d,x,[V.S])
z.b=!0
x.t(z)}x.e=null
a.san(x)
a.saJ(n)
a.saz(0,b)
a0=M.dO(null,null,null,null)
a0.saJ(n)
a0.saz(0,b)
a0.san(c)
a0.d.h(0,k)
a1=X.du(400,300,!0,0.5,0.5,!0)
a2=M.dO(null,null,null,null)
a2.saJ(n)
a2.saz(0,a1)
z=new O.fV()
z.d=1
z.e=10
a3=new V.S(1,1,1)
z.b=a3
x=[V.S]
t=new D.x("objectColor",null,a3,z,x)
t.b=!0
z.t(t)
a3=new V.S(0,0,0)
if(!J.N(z.c,a3)){p=z.c
z.c=a3
x=new D.x("fogColor",p,a3,z,x)
x.b=!0
z.t(x)}x=z.d
if(!$.m.$2(x,3.5)){p=z.d
z.d=3.5
x=new D.x("fogStart",p,3.5,z,[P.u])
x.b=!0
z.t(x)}x=z.e
if(!$.m.$2(x,5.5)){p=z.e
z.e=5.5
x=new D.x("fogStop",p,5.5,z,[P.u])
x.b=!0
z.t(x)}a2.san(z)
a2.d.h(0,k)
a4=M.cL(null,null,null)
z=b.ch
x=a1.ch
t=new O.hc()
t.e=0
t.f=4
t.r=0.001
t.b=new V.cW(1,0,0,0,1,0,0,0,1)
r=new D.x("textureMatrix",null,null,t,[P.a])
r.b=!0
t.t(r)
r=t.c
if(r!==z){if(r!=null){r=r.gm()
r.toString
o=H.c(t.gU(),s)
C.a.O(r.a,o)}p=t.c
t.c=z
z=z.gm()
z.toString
r=H.c(t.gU(),s)
C.a.h(z.a,r)
z=new D.x("colorTexture",p,t.c,t,[T.cn])
z.b=!0
t.t(z)}z=t.d
if(z!==x){if(z!=null){z=z.gm()
z.toString
r=H.c(t.gU(),s)
C.a.O(z.a,r)}p=t.d
t.d=x
z=x.gm()
z.toString
x=H.c(t.gU(),s)
C.a.h(z.a,x)
z=new D.x("depthTexture",p,t.d,t,[T.cn])
z.b=!0
t.t(z)}z=t.e
if(!$.m.$2(z,0)){p=t.e
t.e=0
z=new D.x("highOffset",p,0,t,[P.u])
z.b=!0
t.t(z)}z=t.f
if(!$.m.$2(z,8)){p=t.f
t.f=8
z=new D.x("lowOffset",p,8,t,[P.u])
z.b=!0
t.t(z)}z=t.r
if(!$.m.$2(z,0.001)){p=t.r
t.r=0.001
z=new D.x("depthLimit",p,0.001,t,[P.u])
z.b=!0
t.t(z)}a4.san(t)
a5=new O.iI()
a3=new V.ap(0,0,0,0)
a5.a=a3
z=new D.x("backColor",null,a3,a5,[V.ap])
z.b=!0
a5.t(z)
a5.b=null
z=O.c8(O.bD)
a5.c=z
z.aA(a5.geN(),a5.geO())
a5.d=0
a5.e=null
z=a5.c
x=a1.ch
z.h(0,O.eo(null,V.aO(0,0.8,0.2,0.2),!1,null,x))
x=a5.c
z=b.ch
x.h(0,O.eo(null,V.aO(0,0.6,0.2,0.2),!1,null,z))
a6=M.cL(null,null,null)
a6.saz(0,X.cM(!1,!0,!1,null,2000,null,0))
a6.san(a5)
z=M.ay
x=H.d([a,a0,a2,a4,a6],[z])
t=new M.fN()
t.bc(z)
t.e=!1
t.f=null
t.aA(t.gf1(),t.gf2())
t.bY(0,x)
z=v.d
if(z!==t){if(z!=null){z=z.gm()
z.toString
x=H.c(v.gcK(),s)
C.a.O(z.a,x)}v.d=t
z=t.gm()
z.toString
s=H.c(v.gcK(),s)
C.a.h(z.a,s)
v.ea()}V.lk(v)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dV.prototype
return J.dU.prototype}if(typeof a=="string")return J.cQ.prototype
if(a==null)return J.dW.prototype
if(typeof a=="boolean")return J.hk.prototype
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.a)return a
return J.cy(a)}
J.c3=function(a){if(typeof a=="string")return J.cQ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.a)return a
return J.cy(a)}
J.dk=function(a){if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.a)return a
return J.cy(a)}
J.l2=function(a){if(typeof a=="number")return J.cg.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d8.prototype
return a}
J.cx=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bW.prototype
return a}if(a instanceof P.a)return a
return J.cy(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)}
J.fv=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l2(a).ah(a,b)}
J.fw=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lb(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c3(a).i(a,b)}
J.fx=function(a,b,c,d){return J.cx(a).d6(a,b,c,d)}
J.cB=function(a,b,c){return J.c3(a).fU(a,b,c)}
J.dr=function(a,b){return J.dk(a).D(a,b)}
J.fy=function(a,b){return J.dk(a).N(a,b)}
J.aX=function(a){return J.K(a).gV(a)}
J.bS=function(a){return J.dk(a).gZ(a)}
J.bd=function(a){return J.c3(a).gk(a)}
J.a9=function(a){return J.K(a).j(a)}
I.dn=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cF.prototype
C.y=J.q.prototype
C.a=J.aY.prototype
C.z=J.dU.prototype
C.f=J.dV.prototype
C.A=J.dW.prototype
C.h=J.cg.prototype
C.i=J.cQ.prototype
C.H=J.bW.prototype
C.J=H.hS.prototype
C.K=W.hT.prototype
C.p=J.hX.prototype
C.q=P.d0.prototype
C.m=J.d8.prototype
C.t=W.bI.prototype
C.u=W.jo.prototype
C.v=new P.hV()
C.w=new P.jd()
C.j=new P.ka()
C.b=new A.c9(0,"ColorSourceType.None")
C.e=new A.c9(1,"ColorSourceType.Solid")
C.d=new A.c9(2,"ColorSourceType.Texture2D")
C.c=new A.c9(3,"ColorSourceType.TextureCube")
C.l=new P.bi(0)
C.x=new P.bi(5e6)
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
C.I=H.d(I.dn([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.r=new P.jc(!1)
$.au=0
$.be=null
$.dv=null
$.dd=!1
$.fl=null
$.ff=null
$.fr=null
$.cw=null
$.cz=null
$.dl=null
$.b7=null
$.bL=null
$.bM=null
$.de=!1
$.P=C.j
$.dK=null
$.dJ=null
$.dI=null
$.dH=null
$.m=V.hK()
$.fX="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fW="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.he="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.hd="precision mediump float;                                 \n                                                         \n#define MAX_BLUR_RANGE 20.0                              \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D depthTxt;                              \nuniform int nullColorTxt;                                \nuniform int nullDepthTxt;                                \nuniform float width;                                     \nuniform float height;                                    \nuniform float highOffset;                                \nuniform float lowOffset;                                 \nuniform float depthLimit;                                \n                                                         \nvarying vec2 txt2D;                                      \n                                                         \nfloat div;                                               \nvec4 color;                                              \n                                                         \nvoid offsetColor(float baseDepth, float tu, float tv)    \n{                                                        \n   vec2 txtOffset = vec2(txt2D.x + tu/width,             \n                         txt2D.y + tv/height);           \n   float depth = texture2D(depthTxt, txtOffset).r;       \n   if (depth - depthLimit > baseDepth) return;           \n   div += 1.0;                                           \n   color += texture2D(colorTxt, txtOffset);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0)                                  \n   {                                                     \n      gl_FragColor = vec4(1.0);                          \n      return;                                            \n   }                                                     \n   color = texture2D(colorTxt, txt2D);                   \n   float baseDepth;                                      \n   if(nullDepthTxt > 0) baseDepth = 1.0;                 \n   else baseDepth = texture2D(depthTxt, txt2D).r;        \n   float offset = mix(lowOffset, highOffset, baseDepth); \n   offset = abs(offset);                                 \n   div = 1.0;                                            \n   for(float x=0.0; x<MAX_BLUR_RANGE; x+=1.0)            \n   {                                                     \n      if(x > offset) break;                              \n      for(float y=1.0; y<MAX_BLUR_RANGE; y+=1.0)         \n      {                                                  \n         if(y > offset) break;                           \n         offsetColor(baseDepth,  x,  y);                 \n         offsetColor(baseDepth,  x, -y);                 \n         offsetColor(baseDepth, -x,  y);                 \n         offsetColor(baseDepth, -x, -y);                 \n      }                                                  \n   }                                                     \n   gl_FragColor = color / div;                           \n}                                                        \n"
$.ix="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iw="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eb=null
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
I.$lazy(y,x,w)}})(["dF","$get$dF",function(){return H.fk("_$dart_dartClosure")},"cR","$get$cR",function(){return H.fk("_$dart_js")},"ew","$get$ew",function(){return H.az(H.co({
toString:function(){return"$receiver$"}}))},"ex","$get$ex",function(){return H.az(H.co({$method$:null,
toString:function(){return"$receiver$"}}))},"ey","$get$ey",function(){return H.az(H.co(null))},"ez","$get$ez",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eD","$get$eD",function(){return H.az(H.co(void 0))},"eE","$get$eE",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eB","$get$eB",function(){return H.az(H.eC(null))},"eA","$get$eA",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"eG","$get$eG",function(){return H.az(H.eC(void 0))},"eF","$get$eF",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"da","$get$da",function(){return P.jp()},"bN","$get$bN",function(){return[]},"f9","$get$f9",function(){return P.ia("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dD","$get$dD",function(){return{}},"eS","$get$eS",function(){return Z.am(0)},"eQ","$get$eQ",function(){return Z.am(511)},"Z","$get$Z",function(){return Z.am(1)},"aI","$get$aI",function(){return Z.am(2)},"aH","$get$aH",function(){return Z.am(4)},"at","$get$at",function(){return Z.am(8)},"aJ","$get$aJ",function(){return Z.am(16)},"bG","$get$bG",function(){return Z.am(32)},"bH","$get$bH",function(){return Z.am(64)},"eR","$get$eR",function(){return Z.am(96)},"b4","$get$b4",function(){return Z.am(128)},"aG","$get$aG",function(){return Z.am(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ar]},{func:1,ret:P.I,args:[F.ak]},{func:1,ret:-1,args:[P.B,[P.e,E.aD]]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.I,args:[,,]},{func:1,args:[,]},{func:1,ret:P.I,args:[,]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[P.B,[P.e,D.U]]},{func:1,ret:P.u},{func:1,ret:-1,args:[P.B,[P.e,U.a6]]},{func:1,ret:-1,args:[P.B,[P.e,M.ay]]},{func:1,ret:-1,args:[P.B,[P.e,V.a5]]},{func:1,ret:-1,args:[P.B,[P.e,O.bD]]},{func:1,ret:P.I,args:[W.aa]},{func:1,ret:P.o,args:[P.B]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.a3,args:[W.L]},{func:1,ret:W.a0,args:[W.L]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.as]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[P.X]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:P.a3,args:[P.u,P.u]},{func:1,ret:P.a3,args:[[P.e,D.U]]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[F.aF,P.u,P.u]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.I,args:[P.b2]},{func:1,args:[,P.o]}]
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
if(x==y)H.ln(d||a)
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
Isolate.dn=a.dn
Isolate.di=a.di
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
if(typeof dartMainRunner==="function")dartMainRunner(N.fo,[])
else N.fo([])})})()
//# sourceMappingURL=test.dart.js.map
