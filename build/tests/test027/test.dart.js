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
var dart=[["","",,H,{"^":"",mn:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cu:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dk==null){H.le()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eP("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cO()]
if(v!=null)return v
v=H.lj(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cO(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n:{"^":"a;",
u:function(a,b){return a===b},
gU:function(a){return H.bu(a)},
i:["e1",function(a){return"Instance of '"+H.b0(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hk:{"^":"n;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isae:1},
dU:{"^":"n;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isJ:1},
cP:{"^":"n;",
gU:function(a){return 0},
i:["e2",function(a){return String(a)}]},
hW:{"^":"cP;"},
cn:{"^":"cP;"},
bU:{"^":"cP;",
i:function(a){var z=a[$.$get$dE()]
if(z==null)return this.e2(a)
return"JavaScript function for "+H.j(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscL:1},
aW:{"^":"n;$ti",
h:function(a,b){H.B(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
I:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bW:function(a,b){var z,y
H.w(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bf(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a1(z,y,H.j(a[y]))
return z.join(b)},
he:function(a){return this.D(a,"")},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bz:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ai(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gci:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.hi())},
aV:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cM(a,"[","]")},
gZ:function(a){return new J.an(a,a.length,0,[H.z(a,0)])},
gU:function(a){return H.bu(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c4(b,"newLength",null))
if(b<0)throw H.h(P.ai(b,0,null,"newLength",null))
a.length=b},
a1:function(a,b,c){H.Z(b)
H.B(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b>=a.length||b<0)throw H.h(H.aQ(a,b))
a[b]=c},
$ise:1,
$isd:1,
n:{
hj:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ai(a,0,4294967295,"length",null))
return J.dR(new Array(a),b)},
dR:function(a,b){return J.bn(H.c(a,[b]))},
bn:function(a){H.bN(a)
a.fixed$length=Array
return a}}},
mm:{"^":"aW;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bT:{"^":"n;",
ghd:function(a){return a===0?1/a<0:a<0},
hJ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ad(""+a+".toInt()"))},
ce:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ad(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ad(""+a+".round()"))},
dQ:function(a,b){var z
if(b>20)throw H.h(P.ai(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghd(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.h(H.aM(b))
return a*b},
dX:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d0(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d0(a,b)},
d0:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
bd:function(a,b){var z
if(a>0)z=this.fn(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fn:function(a,b){return b>31?0:a>>>b},
aa:function(a,b){if(typeof b!=="number")throw H.h(H.aM(b))
return a<b},
$ist:1,
$isT:1},
dT:{"^":"bT;",$isA:1},
dS:{"^":"bT;"},
ce:{"^":"n;",
c4:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b<0)throw H.h(H.aQ(a,b))
if(b>=a.length)H.r(H.aQ(a,b))
return a.charCodeAt(b)},
ba:function(a,b){if(b>=a.length)throw H.h(H.aQ(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.U(b)
if(typeof b!=="string")throw H.h(P.c4(b,null,null))
return a+b},
bA:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cj(b,null,null))
if(b>c)throw H.h(P.cj(b,null,null))
if(c>a.length)throw H.h(P.cj(c,null,null))
return a.substring(b,c)},
cB:function(a,b){return this.bA(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hp:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
a9:function(a,b){return this.hp(a,b," ")},
h_:function(a,b,c){if(c>a.length)throw H.h(P.ai(c,0,a.length,null,null))
return H.fv(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseb:1,
$iso:1}}],["","",,H,{"^":"",
hi:function(){return new P.iz("No element")},
a0:{"^":"j7;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.c4(this.a,b)},
$aseQ:function(){return[P.A]},
$asu:function(){return[P.A]},
$ase:function(){return[P.A]},
$asd:function(){return[P.A]}},
h2:{"^":"e;"},
dZ:{"^":"a;a,b,c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.c1(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bf(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.G(z,w);++this.c
return!0}},
hB:{"^":"e;a,b,$ti",
gZ:function(a){return new H.hC(J.bP(this.a),this.b,this.$ti)},
gl:function(a){return J.bd(this.a)},
G:function(a,b){return this.b.$1(J.dr(this.a,b))},
$ase:function(a,b){return[b]}},
hC:{"^":"cN;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascN:function(a,b){return[b]}},
jq:{"^":"e;a,b,$ti",
gZ:function(a){return new H.jr(J.bP(this.a),this.b,this.$ti)}},
jr:{"^":"cN;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cb:{"^":"a;$ti"},
eQ:{"^":"a;$ti"},
j7:{"^":"cf+eQ;"}}],["","",,H,{"^":"",
l9:function(a){return init.types[H.Z(a)]},
lh:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isD},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.h(H.aM(a))
return z},
bu:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$iscn){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.ba(w,0)===36)w=C.i.cB(w,1)
r=H.dl(H.bN(H.aR(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ed:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i5:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.bd(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aM(w))}return H.ed(z)},
ee:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aM(x))
if(x<0)throw H.h(H.aM(x))
if(x>65535)return H.i5(a)}return H.ed(a)},
i4:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.bd(z,10))>>>0,56320|z&1023)}throw H.h(P.ai(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i3:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
i1:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hY:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hZ:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
i0:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
i2:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
i_:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aM(a))},
i:function(a,b){if(a==null)J.bd(a)
throw H.h(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.Z(J.bd(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cj(b,"index",null)},
l4:function(a,b,c){if(a>c)return new P.ci(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ci(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aM:function(a){return new P.aE(!0,a,null,null)},
kY:function(a){if(typeof a!=="number")throw H.h(H.aM(a))
return a},
h:function(a){var z
if(a==null)a=new P.ea()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fy})
z.name=""}else z.toString=H.fy
return z},
fy:function(){return J.a7(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bf(a))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lv(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bd(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cQ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e9(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ey()
u=$.$get$ez()
t=$.$get$eA()
s=$.$get$eB()
r=$.$get$eF()
q=$.$get$eG()
p=$.$get$eD()
$.$get$eC()
o=$.$get$eI()
n=$.$get$eH()
m=v.a8(y)
if(m!=null)return z.$1(H.cQ(H.U(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.cQ(H.U(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e9(H.U(y),m))}}return z.$1(new H.j6(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ek()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ek()
return a},
bb:function(a){var z
if(a==null)return new H.f7(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f7(a)},
l6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a1(0,a[y],a[x])}return b},
lg:function(a,b,c,d,e,f){H.k(a,"$iscL")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lg)
a.$identity=z
return z},
fP:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.i8(z).r}else x=d
w=e?Object.create(new H.iA().constructor.prototype):Object.create(new H.cA(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.E()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dA(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l9,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dv:H.cB
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dA(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fM:function(a,b,c,d){var z=H.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fO(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fM(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.E()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.c5("self")
$.be=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.E()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.c5("self")
$.be=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fN:function(a,b,c,d){var z,y
z=H.cB
y=H.dv
switch(b?-1:a){case 0:throw H.h(H.ii("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fO:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.c5("self")
$.be=z}y=$.du
if(y==null){y=H.c5("receiver")
$.du=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fN(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ar
if(typeof y!=="number")return y.E()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.E()
$.ar=y+1
return new Function(z+y+"}")()},
dg:function(a,b,c,d,e,f,g){var z,y
z=J.bn(H.bN(b))
H.Z(c)
y=!!J.K(d).$isd?J.bn(d):d
return H.fP(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aA(a,"String"))},
lm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aA(a,"num"))},
fl:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aA(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aA(a,"int"))},
ft:function(a,b){throw H.h(H.aA(a,H.U(b).substring(3)))},
lo:function(a,b){var z=J.c1(b)
throw H.h(H.fL(a,z.bA(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.ft(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.lo(a,b)},
bN:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.h(H.aA(a,"List"))},
li:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.ft(a,b)},
fm:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
c0:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fm(J.K(a))
if(z==null)return!1
y=H.fp(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.dc)return a
$.dc=!0
try{if(H.c0(a,b))return a
z=H.c3(b)
y=H.aA(a,z)
throw H.h(y)}finally{$.dc=!1}},
di:function(a,b){if(a!=null&&!H.df(a,b))H.r(H.aA(a,H.c3(b)))
return a},
fg:function(a){var z
if(a instanceof H.v){z=H.fm(J.K(a))
if(z!=null)return H.c3(z)
return"Closure"}return H.b0(a)},
ls:function(a){throw H.h(new P.fV(H.U(a)))},
fn:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
nj:function(a,b,c){return H.bc(a["$as"+H.j(c)],H.aR(b))},
bM:function(a,b,c,d){var z
H.U(c)
H.Z(d)
z=H.bc(a["$as"+H.j(c)],H.aR(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.U(b)
H.Z(c)
z=H.bc(a["$as"+H.j(b)],H.aR(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aR(a)
return z==null?null:z[b]},
c3:function(a){var z=H.aS(a,null)
return z},
aS:function(a,b){var z,y
H.w(b,"$isd",[P.o],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dl(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kO(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
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
for(z=H.l5(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dl:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.o],"$asd")
if(a==null)return""
z=new P.bY("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}v="<"+z.i(0)+">"
return v},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b8:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aR(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fj(H.bc(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.U(b)
H.bN(c)
H.U(d)
if(a==null)return a
z=H.b8(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dl(c,0,null)
throw H.h(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fj:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.am(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.am(a[y],b,c[y],d))return!1
return!0},
nh:function(a,b,c){return a.apply(b,H.bc(J.K(b)["$as"+H.j(c)],H.aR(b)))},
fq:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fq(z)}return!1},
df:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fq(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.df(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c0(a,b)}y=J.K(a).constructor
x=H.aR(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.am(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.df(a,b))throw H.h(H.aA(a,H.c3(b)))
return a},
am:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fp(a,b,c,d)
if('func' in a)return c.builtin$cls==="cL"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,x,d)
else if(H.am(a,b,x,d))return!0
else{if(!('$is'+"bj" in y.prototype))return!1
w=y.prototype["$as"+"bj"]
v=H.bc(w,z?a.slice(1):null)
return H.am(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c3(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fj(H.bc(r,z),b,u,d)},
fp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.am(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.am(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.am(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ll(m,b,l,d)},
ll:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.am(c[w],d,a[w],b))return!1}return!0},
ni:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
lj:function(a){var z,y,x,w,v,u
z=H.U($.fo.$1(a))
y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.fi.$2(a,z))
if(z!=null){y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cw(x)
$.ct[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cv[z]=x
return x}if(v==="-"){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fs(a,x)
if(v==="*")throw H.h(P.eP(z))
if(init.leafTags[z]===true){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fs(a,x)},
fs:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dn(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cw:function(a){return J.dn(a,!1,null,!!a.$isD)},
lk:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cw(z)
else return J.dn(z,c,null,null)},
le:function(){if(!0===$.dk)return
$.dk=!0
H.lf()},
lf:function(){var z,y,x,w,v,u,t,s
$.ct=Object.create(null)
$.cv=Object.create(null)
H.la()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fu.$1(v)
if(u!=null){t=H.lk(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
la:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b7(C.B,H.b7(C.G,H.b7(C.n,H.b7(C.n,H.b7(C.F,H.b7(C.C,H.b7(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fo=new H.lb(v)
$.fi=new H.lc(u)
$.fu=new H.ld(t)},
b7:function(a,b){return a(b)||b},
fv:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fw:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i7:{"^":"a;a,b,c,d,e,f,r,0x",n:{
i8:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bn(z)
y=z[0]
x=z[1]
return new H.i7(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iU:{"^":"a;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
az:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hT:{"^":"a_;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
e9:function(a,b){return new H.hT(a,b==null?null:b.method)}}},
hn:{"^":"a_;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cQ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hn(a,y,z?null:b.receiver)}}},
j6:{"^":"a_;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lv:{"^":"v:15;a",
$1:function(a){if(!!J.K(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f7:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
v:{"^":"a;",
i:function(a){return"Closure '"+H.b0(this).trim()+"'"},
gdT:function(){return this},
$iscL:1,
gdT:function(){return this}},
eo:{"^":"v;"},
iA:{"^":"eo;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cA:{"^":"eo;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bu(this.a)
else y=typeof z!=="object"?J.aD(z):H.bu(z)
return(y^H.bu(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b0(z)+"'")},
n:{
cB:function(a){return a.a},
dv:function(a){return a.c},
c5:function(a){var z,y,x,w,v
z=new H.cA("self","target","receiver","name")
y=J.bn(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iV:{"^":"a_;a",
i:function(a){return this.a},
n:{
aA:function(a,b){return new H.iV("TypeError: "+H.j(P.ca(a))+": type '"+H.fg(a)+"' is not a subtype of type '"+b+"'")}}},
fK:{"^":"a_;a",
i:function(a){return this.a},
n:{
fL:function(a,b){return new H.fK("CastError: "+H.j(P.ca(a))+": type '"+H.fg(a)+"' is not a subtype of type '"+b+"'")}}},
ih:{"^":"a_;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
ii:function(a){return new H.ih(a)}}},
aX:{"^":"hz;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gav:function(a){return new H.dY(this,[H.z(this,0)])},
d8:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cO(y,b)}else return this.hb(b)},
hb:function(a){var z=this.d
if(z==null)return!1
return this.cf(this.bI(z,J.aD(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bb(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bb(w,b)
x=y==null?null:y.b
return x}else return this.hc(b)},
hc:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bI(z,J.aD(a)&0x3ffffff)
x=this.cf(y,a)
if(x<0)return
return y[x].b},
a1:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bN()
this.b=z}this.cH(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bN()
this.c=y}this.cH(y,b,c)}else{x=this.d
if(x==null){x=this.bN()
this.d=x}w=J.aD(b)&0x3ffffff
v=this.bI(x,w)
if(v==null)this.bU(x,w,[this.bO(b,c)])
else{u=this.cf(v,b)
if(u>=0)v[u].b=c
else v.push(this.bO(b,c))}}},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bf(this))
z=z.c}},
cH:function(a,b,c){var z
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
z=this.bb(a,b)
if(z==null)this.bU(a,b,this.bO(b,c))
else z.b=c},
eB:function(){this.r=this.r+1&67108863},
bO:function(a,b){var z,y
z=new H.hr(H.B(a,H.z(this,0)),H.B(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eB()
return z},
cf:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.e0(this)},
bb:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
eu:function(a,b){delete a[b]},
cO:function(a,b){return this.bb(a,b)!=null},
bN:function(){var z=Object.create(null)
this.bU(z,"<non-identifier-key>",z)
this.eu(z,"<non-identifier-key>")
return z},
$isdX:1},
hr:{"^":"a;a,b,0c,0d"},
dY:{"^":"h2;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.hs(z,z.r,this.$ti)
y.c=z.e
return y}},
hs:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bf(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lb:{"^":"v:15;a",
$1:function(a){return this.a(a)}},
lc:{"^":"v:27;a",
$2:function(a,b){return this.a(a,b)}},
ld:{"^":"v:28;a",
$1:function(a){return this.a(H.U(a))}},
hl:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseb:1,
n:{
hm:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hc("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l5:function(a){return J.dR(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ln:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bI:function(a){return a},
aP:function(a,b,c){H.bN(b)
if(a>>>0!==a||a>=c)throw H.h(H.aQ(b,a))},
kN:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l4(a,b,c))
return b},
hP:{"^":"n;",$isn0:1,"%":"DataView;ArrayBufferView;cV|f1|f2|hO|f3|f4|aO"},
cV:{"^":"hP;",
gl:function(a){return a.length},
$isD:1,
$asD:I.dh},
hO:{"^":"f2;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
$ascb:function(){return[P.t]},
$asu:function(){return[P.t]},
$ise:1,
$ase:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aO:{"^":"f4;",
$ascb:function(){return[P.A]},
$asu:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
mx:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
my:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mz:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mA:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mB:{"^":"aO;",
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mC:{"^":"aO;",
gl:function(a){return a.length},
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hQ:{"^":"aO;",
gl:function(a){return a.length},
k:function(a,b){H.aP(b,a,a.length)
return a[b]},
bz:function(a,b,c){return new Uint8Array(a.subarray(b,H.kN(b,c,a.length)))},
"%":";Uint8Array"},
f1:{"^":"cV+u;"},
f2:{"^":"f1+cb;"},
f3:{"^":"cV+u;"},
f4:{"^":"f3+cb;"}}],["","",,P,{"^":"",
jt:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kV()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.jv(z),1)).observe(y,{childList:true})
return new P.ju(z,y,x)}else if(self.setImmediate!=null)return P.kW()
return P.kX()},
n6:[function(a){self.scheduleImmediate(H.b9(new P.jw(H.b(a,{func:1,ret:-1})),0))},"$1","kV",4,0,11],
n7:[function(a){self.setImmediate(H.b9(new P.jx(H.b(a,{func:1,ret:-1})),0))},"$1","kW",4,0,11],
n8:[function(a){P.d4(C.m,H.b(a,{func:1,ret:-1}))},"$1","kX",4,0,11],
d4:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.e.a3(a.a,1000)
return P.kr(z<0?0:z,b)},
et:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b1]})
z=C.e.a3(a.a,1000)
return P.ks(z<0?0:z,b)},
kR:function(a,b){if(H.c0(a,{func:1,args:[P.a,P.ap]}))return b.hy(a,null,P.a,P.ap)
if(H.c0(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kQ:function(){var z,y
for(;z=$.b6,z!=null;){$.bK=null
y=z.b
$.b6=y
if(y==null)$.bJ=null
z.a.$0()}},
ng:[function(){$.dd=!0
try{P.kQ()}finally{$.bK=null
$.dd=!1
if($.b6!=null)$.$get$d9().$1(P.fk())}},"$0","fk",0,0,3],
ff:function(a){var z=new P.eW(H.b(a,{func:1,ret:-1}))
if($.b6==null){$.bJ=z
$.b6=z
if(!$.dd)$.$get$d9().$1(P.fk())}else{$.bJ.b=z
$.bJ=z}},
kU:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b6
if(z==null){P.ff(a)
$.bK=$.bJ
return}y=new P.eW(a)
x=$.bK
if(x==null){y.b=z
$.bK=y
$.b6=y}else{y.b=x.b
x.b=y
$.bK=y
if(y.b==null)$.bJ=y}},
lp:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.P
if(C.j===y){P.cs(null,null,C.j,a)
return}y.toString
P.cs(null,null,y,H.b(y.c_(a),z))},
iQ:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.P
if(y===C.j){y.toString
return P.d4(a,b)}return P.d4(a,H.b(y.c_(b),z))},
iR:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b1]}
H.b(b,z)
y=$.P
if(y===C.j){y.toString
return P.et(a,b)}x=y.d5(b,P.b1)
$.P.toString
return P.et(a,H.b(x,z))},
cr:function(a,b,c,d,e){var z={}
z.a=d
P.kU(new P.kS(z,e))},
fd:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fe:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kT:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cs:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c_(d):c.fX(d,-1)
P.ff(d)},
jv:{"^":"v:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ju:{"^":"v:24;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jw:{"^":"v:2;a",
$0:function(){this.a.$0()}},
jx:{"^":"v:2;a",
$0:function(){this.a.$0()}},
fa:{"^":"a;a,0b,c",
ef:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.ku(this,b),0),a)
else throw H.h(P.ad("`setTimeout()` not found."))},
eg:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b9(new P.kt(this,a,Date.now(),b),0),a)
else throw H.h(P.ad("Periodic timer."))},
$isb1:1,
n:{
kr:function(a,b){var z=new P.fa(!0,0)
z.ef(a,b)
return z},
ks:function(a,b){var z=new P.fa(!1,0)
z.eg(a,b)
return z}}},
ku:{"^":"v:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kt:{"^":"v:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.e5(w,x)}z.c=y
this.d.$1(z)}},
b5:{"^":"a;0a,b,c,d,e,$ti",
hi:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.b(this.d,{func:1,ret:P.ae,args:[P.a]}),a.a,P.ae,P.a)},
ha:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c0(z,{func:1,args:[P.a,P.ap]}))return H.di(w.hD(z,a.a,a.b,null,y,P.ap),x)
else return H.di(w.ct(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aL:{"^":"a;d_:a<,b,0fd:c<,$ti",
dP:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kR(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aL(0,$.P,[c])
w=b==null?1:3
this.cI(new P.b5(x,w,a,b,[z,c]))
return x},
hI:function(a,b){return this.dP(a,null,b)},
cI:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb5")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaL")
z=y.a
if(z<4){y.cI(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cs(null,null,z,H.b(new P.jL(this,a),{func:1,ret:-1}))}},
cW:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb5")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaL")
y=u.a
if(y<4){u.cW(a)
return}this.a=y
this.c=u.c}z.a=this.bc(a)
y=this.b
y.toString
P.cs(null,null,y,H.b(new P.jQ(z,this),{func:1,ret:-1}))}},
bQ:function(){var z=H.k(this.c,"$isb5")
this.c=null
return this.bc(z)},
bc:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cL:function(a){var z,y,x,w
z=H.z(this,0)
H.di(a,{futureOr:1,type:z})
y=this.$ti
x=H.b8(a,"$isbj",y,"$asbj")
if(x){z=H.b8(a,"$isaL",y,null)
if(z)P.eY(a,this)
else P.jM(a,this)}else{w=this.bQ()
H.B(a,z)
this.a=4
this.c=a
P.bF(this,w)}},
bE:[function(a,b){var z
H.k(b,"$isap")
z=this.bQ()
this.a=8
this.c=new P.af(a,b)
P.bF(this,z)},function(a){return this.bE(a,null)},"hQ","$2","$1","gep",4,2,31],
$isbj:1,
n:{
jM:function(a,b){var z,y,x
b.a=1
try{a.dP(new P.jN(b),new P.jO(b),null)}catch(x){z=H.aT(x)
y=H.bb(x)
P.lp(new P.jP(b,z,y))}},
eY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaL")
if(z>=4){y=b.bQ()
b.a=a.a
b.c=a.c
P.bF(b,y)}else{y=H.k(b.c,"$isb5")
b.a=2
b.c=a
a.cW(y)}},
bF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isaf")
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
if(p){H.k(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cr(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jT(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jS(x,b,r).$0()}else if((y&2)!==0)new P.jR(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbj){if(y.a>=4){n=H.k(t.c,"$isb5")
t.c=null
b=t.bc(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eY(y,t)
return}}m=b.b
n=H.k(m.c,"$isb5")
m.c=null
b=m.bc(n)
y=x.a
u=x.b
if(!y){H.B(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
jL:{"^":"v:2;a,b",
$0:function(){P.bF(this.a,this.b)}},
jQ:{"^":"v:2;a,b",
$0:function(){P.bF(this.b,this.a.a)}},
jN:{"^":"v:14;a",
$1:function(a){var z=this.a
z.a=0
z.cL(a)}},
jO:{"^":"v:35;a",
$2:function(a,b){this.a.bE(a,H.k(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
jP:{"^":"v:2;a,b,c",
$0:function(){this.a.bE(this.b,this.c)}},
jT:{"^":"v:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dN(H.b(w.d,{func:1}),null)}catch(v){y=H.aT(v)
x=H.bb(v)
if(this.d){w=H.k(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.K(z).$isbj){if(z instanceof P.aL&&z.gd_()>=4){if(z.gd_()===8){w=this.b
w.b=H.k(z.gfd(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hI(new P.jU(t),null)
w.a=!1}}},
jU:{"^":"v:37;a",
$1:function(a){return this.a}},
jS:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.B(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ct(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aT(t)
y=H.bb(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
jR:{"^":"v:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isaf")
w=this.c
if(w.hi(z)&&w.e!=null){v=this.b
v.b=w.ha(z)
v.a=!1}}catch(u){y=H.aT(u)
x=H.bb(u)
w=H.k(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
eW:{"^":"a;a,0b"},
d2:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aL(0,$.P,[P.A])
z.a=0
this.hh(new P.iD(z,this),!0,new P.iE(z,y),y.gep())
return y}},
iD:{"^":"v;a,b",
$1:function(a){H.B(a,H.aC(this.b,"d2",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aC(this.b,"d2",0)]}}},
iE:{"^":"v:2;a,b",
$0:function(){this.b.cL(this.a.a)}},
em:{"^":"a;$ti"},
iC:{"^":"a;"},
b1:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa_:1},
kB:{"^":"a;",$isn5:1},
kS:{"^":"v:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ea()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
kd:{"^":"kB;",
hE:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fd(null,null,this,a,-1)}catch(x){z=H.aT(x)
y=H.bb(x)
P.cr(null,null,this,z,H.k(y,"$isap"))}},
hF:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fe(null,null,this,a,b,-1,c)}catch(x){z=H.aT(x)
y=H.bb(x)
P.cr(null,null,this,z,H.k(y,"$isap"))}},
fX:function(a,b){return new P.kf(this,H.b(a,{func:1,ret:b}),b)},
c_:function(a){return new P.ke(this,H.b(a,{func:1,ret:-1}))},
d5:function(a,b){return new P.kg(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dN:function(a,b){H.b(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fd(null,null,this,a,b)},
ct:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.P===C.j)return a.$1(b)
return P.fe(null,null,this,a,b,c,d)},
hD:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kT(null,null,this,a,b,c,d,e,f)},
hy:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
kf:{"^":"v;a,b,c",
$0:function(){return this.a.dN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ke:{"^":"v:3;a,b",
$0:function(){return this.a.hE(this.b)}},
kg:{"^":"v;a,b,c",
$1:function(a){var z=this.c
return this.a.hF(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hu:function(a,b,c){H.bN(a)
return H.w(H.l6(a,new H.aX(0,0,[b,c])),"$isdX",[b,c],"$asdX")},
ht:function(a,b){return new H.aX(0,0,[a,b])},
hv:function(a,b,c,d){return new P.k_(0,0,[d])},
hh:function(a,b,c){var z,y
if(P.de(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bL()
C.a.h(y,a)
try{P.kP(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.en(b,H.li(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cM:function(a,b,c){var z,y,x
if(P.de(a))return b+"..."+c
z=new P.bY(b)
y=$.$get$bL()
C.a.h(y,a)
try{x=z
x.a=P.en(x.gaB(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaB()+c
y=z.gaB()
return y.charCodeAt(0)==0?y:y},
de:function(a){var z,y
for(z=0;y=$.$get$bL(),z<y.length;++z)if(a===y[z])return!0
return!1},
kP:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.j(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.F();t=s,s=r){r=z.gP(z);++x
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
e0:function(a){var z,y,x
z={}
if(P.de(a))return"{...}"
y=new P.bY("")
try{C.a.h($.$get$bL(),a)
x=y
x.a=x.gaB()+"{"
z.a=!0
J.fC(a,new P.hA(z,y))
z=y
z.a=z.gaB()+"}"}finally{z=$.$get$bL()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaB()
return z.charCodeAt(0)==0?z:z},
k_:{"^":"jV;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.f0(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.db()
this.b=z}return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.db()
this.c=y}return this.cJ(y,b)}else return this.ei(0,b)},
ei:function(a,b){var z,y,x
H.B(b,H.z(this,0))
z=this.d
if(z==null){z=P.db()
this.d=z}y=this.cM(b)
x=z[y]
if(x==null)z[y]=[this.bD(b)]
else{if(this.cR(x,b)>=0)return!1
x.push(this.bD(b))}return!0},
I:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cX(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cX(this.c,b)
else return this.f6(0,b)},
f6:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ey(z,b)
x=this.cR(y,b)
if(x<0)return!1
this.d1(y.splice(x,1)[0])
return!0},
cJ:function(a,b){H.B(b,H.z(this,0))
if(H.k(a[b],"$isda")!=null)return!1
a[b]=this.bD(b)
return!0},
cX:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isda")
if(z==null)return!1
this.d1(z)
delete a[b]
return!0},
cK:function(){this.r=this.r+1&67108863},
bD:function(a){var z,y
z=new P.da(H.B(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cK()
return z},
d1:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cK()},
cM:function(a){return J.aD(a)&0x3ffffff},
ey:function(a,b){return a[this.cM(b)]},
cR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
n:{
db:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
da:{"^":"a;a,0b,0c"},
k0:{"^":"a;a,b,0c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bf(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
f0:function(a,b,c){var z=new P.k0(a,b,[c])
z.c=a.e
return z}}},
jV:{"^":"ij;"},
cf:{"^":"k1;",$ise:1,$isd:1},
u:{"^":"a;$ti",
gZ:function(a){return new H.dZ(a,this.gl(a),0,[H.bM(this,a,"u",0)])},
G:function(a,b){return this.k(a,b)},
hL:function(a,b){var z,y,x
z=H.c([],[H.bM(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a1(z,y,this.k(a,y));++y}return z},
hK:function(a){return this.hL(a,!0)},
i:function(a){return P.cM(a,"[","]")}},
hz:{"^":"ab;"},
hA:{"^":"v:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ab:{"^":"a;$ti",
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bM(this,a,"ab",0),H.bM(this,a,"ab",1)]})
for(z=J.bP(this.gav(a));z.F();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bd(this.gav(a))},
i:function(a){return P.e0(a)},
$isa4:1},
il:{"^":"a;$ti",
i:function(a){return P.cM(this,"{","}")},
G:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.ds("index"))
if(b<0)H.r(P.ai(b,0,null,"index",null))
for(z=P.f0(this,this.r,H.z(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.h(P.N(b,this,"index",null,y))},
$ise:1},
ij:{"^":"il;"},
k1:{"^":"a+u;"}}],["","",,P,{"^":"",cF:{"^":"a;$ti"},dC:{"^":"iC;$ti"},h4:{"^":"cF;",
$ascF:function(){return[P.o,[P.d,P.A]]}},jd:{"^":"h4;a"},je:{"^":"dC;",
h1:function(a,b,c){var z,y,x,w
z=a.length
P.ef(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kA(0,0,x)
if(w.ew(a,b,z)!==z)w.d2(C.i.c4(a,z-1),0)
return C.J.bz(x,0,w.b)},
h0:function(a){return this.h1(a,0,null)},
$asdC:function(){return[P.o,[P.d,P.A]]}},kA:{"^":"a;a,b,c",
d2:function(a,b){var z,y,x,w,v
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
ew:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c4(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.ba(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d2(w,C.i.ba(a,u)))x=u}else if(w<=2047){v=this.b
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
h6:function(a){var z=J.K(a)
if(!!z.$isv)return z.i(a)
return"Instance of '"+H.b0(a)+"'"},
hw:function(a,b,c,d){var z,y
H.B(b,d)
z=J.hj(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a1(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hx:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.F();)C.a.h(y,H.B(x.gP(x),c))
if(b)return y
return H.w(J.bn(y),"$isd",z,"$asd")},
d3:function(a,b,c){var z,y
z=P.A
H.w(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.w(a,"$isaW",[z],"$asaW")
y=a.length
c=P.ef(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.aa()
z=c<y}else z=!0
return H.ee(z?C.a.bz(a,b,c):a)}return P.iF(a,b,c)},
iF:function(a,b,c){var z,y,x
H.w(a,"$ise",[P.A],"$ase")
z=J.bP(a)
for(y=0;y<b;++y)if(!z.F())throw H.h(P.ai(b,0,y,null,null))
x=[]
for(;z.F();)x.push(z.gP(z))
return H.ee(x)},
i9:function(a,b,c){return new H.hl(a,H.hm(a,!1,!0,!1))},
kz:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.A],"$asd")
if(c===C.r){z=$.$get$fc().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.h0(H.B(b,H.aC(c,"cF",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.i4(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h6(a)},
q:function(a){return new P.eX(a)},
dp:function(a){H.ln(a)},
ae:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.e.bd(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fW(H.i3(this))
y=P.bQ(H.i1(this))
x=P.bQ(H.hY(this))
w=P.bQ(H.hZ(this))
v=P.bQ(H.i0(this))
u=P.bQ(H.i2(this))
t=P.fX(H.i_(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fW:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bQ:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"T;"},
"+double":0,
aU:{"^":"a;a",
j:function(a,b){return new P.aU(C.e.W(this.a*b))},
aa:function(a,b){return C.e.aa(this.a,H.k(b,"$isaU").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aU))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h1()
y=this.a
if(y<0)return"-"+new P.aU(0-y).i(0)
x=z.$1(C.e.a3(y,6e7)%60)
w=z.$1(C.e.a3(y,1e6)%60)
v=new P.h0().$1(y%1e6)
return""+C.e.a3(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dK:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h0:{"^":"v:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h1:{"^":"v:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"a;"},
ea:{"^":"a_;",
i:function(a){return"Throw of null."}},
aE:{"^":"a_;a,b,c,d",
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbG()+y+x
if(!this.a)return w
v=this.gbF()
u=P.ca(this.b)
return w+v+": "+H.j(u)},
n:{
fE:function(a){return new P.aE(!1,null,null,a)},
c4:function(a,b,c){return new P.aE(!0,a,b,c)},
ds:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
ci:{"^":"aE;e,f,a,b,c,d",
gbG:function(){return"RangeError"},
gbF:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
cj:function(a,b,c){return new P.ci(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.ci(b,c,!0,a,d,"Invalid value")},
ef:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ai(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ai(b,a,c,"end",f))
return b}return c}}},
hg:{"^":"aE;e,l:f>,a,b,c,d",
gbG:function(){return"RangeError"},
gbF:function(){if(J.fz(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
N:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.bd(b))
return new P.hg(b,z,!0,a,c,"Index out of range")}}},
j8:{"^":"a_;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ad:function(a){return new P.j8(a)}}},
j5:{"^":"a_;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eP:function(a){return new P.j5(a)}}},
iz:{"^":"a_;a",
i:function(a){return"Bad state: "+this.a}},
fS:{"^":"a_;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.ca(z))+"."},
n:{
bf:function(a){return new P.fS(a)}}},
hU:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa_:1},
ek:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa_:1},
fV:{"^":"a_;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eX:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hc:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bA(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"T;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.F();)++y
return y},
G:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.ds("index"))
if(b<0)H.r(P.ai(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.F();){x=z.gP(z)
if(b===y)return x;++y}throw H.h(P.N(b,this,"index",null,y))},
i:function(a){return P.hh(this,"(",")")}},
cN:{"^":"a;$ti"},
d:{"^":"a;$ti",$ise:1},
"+List":0,
a4:{"^":"a;$ti"},
J:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bu(this)},
i:function(a){return"Instance of '"+H.b0(this)+"'"},
toString:function(){return this.i(this)}},
ap:{"^":"a;"},
o:{"^":"a;",$iseb:1},
"+String":0,
bY:{"^":"a;aB:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
en:function(a,b,c){var z=J.bP(b)
if(!z.F())return a
if(c.length===0){do a+=H.j(z.gP(z))
while(z.F())}else{a+=H.j(z.gP(z))
for(;z.F();)a=a+c+H.j(z.gP(z))}return a}}}}],["","",,W,{"^":"",
cE:function(a,b){var z=document.createElement("canvas")
return z},
h3:function(a){H.k(a,"$isa3")
return"wheel"},
cp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f_:function(a,b,c,d){var z,y
z=W.cp(W.cp(W.cp(W.cp(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fh:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d5(a,b)},
bm:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lw:{"^":"d_;0p:x=,0q:y=","%":"Accelerometer|LinearAccelerationSensor"},
lx:{"^":"n;0l:length=","%":"AccessibleNodeList"},
ly:{"^":"bm;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lz:{"^":"bm;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fJ:{"^":"n;","%":";Blob"},
cD:{"^":"bm;",
by:function(a,b,c){if(c!=null)return a.getContext(b,P.kZ(c,null))
return a.getContext(b)},
dV:function(a,b){return this.by(a,b,null)},
$iscD:1,
"%":"HTMLCanvasElement"},
dy:{"^":"n;",$isdy:1,"%":"CanvasRenderingContext2D"},
lF:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lH:{"^":"c8;0l:length=","%":"CSSPerspective"},
lI:{"^":"cJ;0p:x=,0q:y=","%":"CSSPositionValue"},
lJ:{"^":"c8;0p:x=,0q:y=","%":"CSSRotation"},
bg:{"^":"n;",$isbg:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lK:{"^":"c8;0p:x=,0q:y=","%":"CSSScale"},
lL:{"^":"jB;0l:length=",
dW:function(a,b){var z=a.getPropertyValue(this.em(a,b))
return z==null?"":z},
em:function(a,b){var z,y
z=$.$get$dD()
y=z[b]
if(typeof y==="string")return y
y=this.fo(a,b)
z[b]=y
return y},
fo:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fY()+b
if(z in a)return z
return b},
gc0:function(a){return a.bottom},
gak:function(a){return a.height},
gaN:function(a){return a.left},
gb1:function(a){return a.right},
gb5:function(a){return a.top},
gal:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fU:{"^":"a;",
gaN:function(a){return this.dW(a,"left")}},
cJ:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c8:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lM:{"^":"cJ;0l:length=","%":"CSSTransformValue"},
lN:{"^":"c8;0p:x=,0q:y=","%":"CSSTranslation"},
lO:{"^":"cJ;0l:length=","%":"CSSUnparsedValue"},
lP:{"^":"n;0l:length=","%":"DataTransferItemList"},
lQ:{"^":"n;0p:x=,0q:y=","%":"DeviceAcceleration"},
lR:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
lS:{"^":"fZ;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"DOMPoint"},
fZ:{"^":"n;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":";DOMPointReadOnly"},
lT:{"^":"jD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.aa,P.T]]},
$asu:function(){return[[P.aa,P.T]]},
$ise:1,
$ase:function(){return[[P.aa,P.T]]},
$isd:1,
$asd:function(){return[[P.aa,P.T]]},
$asy:function(){return[[P.aa,P.T]]},
"%":"ClientRectList|DOMRectList"},
h_:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gal(a))+" x "+H.j(this.gak(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b8(b,"$isaa",[P.T],"$asaa")
if(!z)return!1
z=J.c2(b)
return a.left===z.gaN(b)&&a.top===z.gb5(b)&&this.gal(a)===z.gal(b)&&this.gak(a)===z.gak(b)},
gU:function(a){return W.f_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gc0:function(a){return a.bottom},
gak:function(a){return a.height},
gaN:function(a){return a.left},
gb1:function(a){return a.right},
gb5:function(a){return a.top},
gal:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.T]},
"%":";DOMRectReadOnly"},
lU:{"^":"jF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.o]},
$asu:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"DOMStringList"},
lV:{"^":"n;0l:length=","%":"DOMTokenList"},
jA:{"^":"cf;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa1")},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.hK(this)
return new J.an(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a1]},
$ase:function(){return[W.a1]},
$asd:function(){return[W.a1]}},
a1:{"^":"L;",
gd7:function(a){return new W.jA(a,a.children)},
gbh:function(a){return P.i6(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
a8:{"^":"n;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"n;",
d3:["e0",function(a,b,c,d){H.b(c,{func:1,args:[W.a8]})
if(c!=null)this.ej(a,b,c,!1)}],
ej:function(a,b,c,d){return a.addEventListener(b,H.b9(H.b(c,{func:1,args:[W.a8]}),1),!1)},
$isa3:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f5|f6|f8|f9"},
bi:{"^":"fJ;",$isbi:1,"%":"File"},
md:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bi]},
$asu:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asy:function(){return[W.bi]},
"%":"FileList"},
me:{"^":"a3;0l:length=","%":"FileWriter"},
mh:{"^":"bm;0l:length=","%":"HTMLFormElement"},
bk:{"^":"n;",$isbk:1,"%":"Gamepad"},
mi:{"^":"d_;0p:x=,0q:y=","%":"Gyroscope"},
mj:{"^":"n;0l:length=","%":"History"},
mk:{"^":"jX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$asu:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cc:{"^":"n;0da:data=",$iscc:1,"%":"ImageData"},
dQ:{"^":"bm;",$isdQ:1,"%":"HTMLImageElement"},
bo:{"^":"d5;",$isbo:1,"%":"KeyboardEvent"},
mp:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
mq:{"^":"d_;0p:x=,0q:y=","%":"Magnetometer"},
ms:{"^":"n;0l:length=","%":"MediaList"},
mt:{"^":"a3;",
d3:function(a,b,c,d){H.b(c,{func:1,args:[W.a8]})
if(b==="message")a.start()
this.e0(a,b,c,!1)},
"%":"MessagePort"},
mu:{"^":"k2;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gav:function(a){var z=H.c([],[P.o])
this.N(a,new W.hL(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hL:{"^":"v:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mv:{"^":"k3;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gav:function(a){var z=H.c([],[P.o])
this.N(a,new W.hM(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hM:{"^":"v:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"n;",$isbp:1,"%":"MimeType"},
mw:{"^":"k5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bp]},
$asu:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asy:function(){return[W.bp]},
"%":"MimeTypeArray"},
aw:{"^":"d5;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jz:{"^":"cf;a",
gZ:function(a){var z=this.a.childNodes
return new W.dM(z,z.length,-1,[H.bM(C.K,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asu:function(){return[W.L]},
$ase:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.e1(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hR:{"^":"k7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$asu:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bs:{"^":"n;0l:length=",$isbs:1,"%":"Plugin"},
mG:{"^":"kb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$asu:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"PluginArray"},
mL:{"^":"kh;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gav:function(a){var z=H.c([],[P.o])
this.N(a,new W.ig(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"RTCStatsReport"},
ig:{"^":"v:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mM:{"^":"bm;0l:length=","%":"HTMLSelectElement"},
d_:{"^":"a3;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bv:{"^":"a3;",$isbv:1,"%":"SourceBuffer"},
mN:{"^":"f6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"SourceBufferList"},
bw:{"^":"n;",$isbw:1,"%":"SpeechGrammar"},
mO:{"^":"kj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$asu:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SpeechGrammarList"},
bx:{"^":"n;0l:length=",$isbx:1,"%":"SpeechRecognitionResult"},
mQ:{"^":"km;",
k:function(a,b){return a.getItem(H.U(b))},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gav:function(a){var z=H.c([],[P.o])
this.N(a,new W.iB(z))
return z},
gl:function(a){return a.length},
$asab:function(){return[P.o,P.o]},
$isa4:1,
$asa4:function(){return[P.o,P.o]},
"%":"Storage"},
iB:{"^":"v:39;a",
$2:function(a,b){return C.a.h(this.a,a)}},
by:{"^":"n;",$isby:1,"%":"CSSStyleSheet|StyleSheet"},
bz:{"^":"a3;",$isbz:1,"%":"TextTrack"},
bA:{"^":"a3;",$isbA:1,"%":"TextTrackCue|VTTCue"},
mV:{"^":"kq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$asu:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TextTrackCueList"},
mW:{"^":"f9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$asu:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"TextTrackList"},
mX:{"^":"n;0l:length=","%":"TimeRanges"},
bB:{"^":"n;",$isbB:1,"%":"Touch"},
b2:{"^":"d5;",$isb2:1,"%":"TouchEvent"},
mY:{"^":"kw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asu:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$isd:1,
$asd:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"TouchList"},
mZ:{"^":"n;0l:length=","%":"TrackDefaultList"},
d5:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n1:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
n3:{"^":"n;0p:x=","%":"VRStageBoundsPoint"},
n4:{"^":"a3;0l:length=","%":"VideoTrackList"},
bE:{"^":"aw;",
gh5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ad("deltaY is not supported"))},
gh4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ad("deltaX is not supported"))},
$isbE:1,
"%":"WheelEvent"},
js:{"^":"a3;",
f9:function(a,b){return a.requestAnimationFrame(H.b9(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
ev:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
n9:{"^":"kD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bg]},
$asu:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asy:function(){return[W.bg]},
"%":"CSSRuleList"},
na:{"^":"h_;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b8(b,"$isaa",[P.T],"$asaa")
if(!z)return!1
z=J.c2(b)
return a.left===z.gaN(b)&&a.top===z.gb5(b)&&a.width===z.gal(b)&&a.height===z.gak(b)},
gU:function(a){return W.f_(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gal:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nc:{"^":"kF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bk]},
$asu:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asy:function(){return[W.bk]},
"%":"GamepadList"},
nd:{"^":"kH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$asu:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ne:{"^":"kJ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"SpeechRecognitionResultList"},
nf:{"^":"kL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.by]},
$asu:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"StyleSheetList"},
jG:{"^":"d2;a,b,c,$ti",
hh:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
nb:{"^":"jG;a,b,c,$ti"},
jH:{"^":"em;a,b,c,d,e,$ti",
ft:function(){var z=this.d
if(z!=null&&this.a<=0)J.fB(this.b,this.c,z,!1)},
n:{
Y:function(a,b,c,d,e){var z=c==null?null:W.fh(new W.jI(c),W.a8)
z=new W.jH(0,a,b,z,!1,[e])
z.ft()
return z}}},
jI:{"^":"v:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa8"))}},
y:{"^":"a;$ti",
gZ:function(a){return new W.dM(a,this.gl(a),-1,[H.bM(this,a,"y",0)])}},
dM:{"^":"a;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fA(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
jB:{"^":"n+fU;"},
jC:{"^":"n+u;"},
jD:{"^":"jC+y;"},
jE:{"^":"n+u;"},
jF:{"^":"jE+y;"},
jJ:{"^":"n+u;"},
jK:{"^":"jJ+y;"},
jW:{"^":"n+u;"},
jX:{"^":"jW+y;"},
k2:{"^":"n+ab;"},
k3:{"^":"n+ab;"},
k4:{"^":"n+u;"},
k5:{"^":"k4+y;"},
k6:{"^":"n+u;"},
k7:{"^":"k6+y;"},
ka:{"^":"n+u;"},
kb:{"^":"ka+y;"},
kh:{"^":"n+ab;"},
f5:{"^":"a3+u;"},
f6:{"^":"f5+y;"},
ki:{"^":"n+u;"},
kj:{"^":"ki+y;"},
km:{"^":"n+ab;"},
kp:{"^":"n+u;"},
kq:{"^":"kp+y;"},
f8:{"^":"a3+u;"},
f9:{"^":"f8+y;"},
kv:{"^":"n+u;"},
kw:{"^":"kv+y;"},
kC:{"^":"n+u;"},
kD:{"^":"kC+y;"},
kE:{"^":"n+u;"},
kF:{"^":"kE+y;"},
kG:{"^":"n+u;"},
kH:{"^":"kG+y;"},
kI:{"^":"n+u;"},
kJ:{"^":"kI+y;"},
kK:{"^":"n+u;"},
kL:{"^":"kK+y;"}}],["","",,P,{"^":"",
l1:function(a){var z,y
z=J.K(a)
if(!!z.$iscc){y=z.gda(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fb(a.data,a.height,a.width)},
l0:function(a){if(a instanceof P.fb)return{data:a.a,height:a.b,width:a.c}
return a},
aN:function(a){var z,y,x,w,v
if(a==null)return
z=P.ht(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.U(y[w])
z.a1(0,v,a[v])}return z},
kZ:function(a,b){var z={}
a.N(0,new P.l_(z))
return z},
dJ:function(){var z=$.dI
if(z==null){z=J.cy(window.navigator.userAgent,"Opera",0)
$.dI=z}return z},
fY:function(){var z,y
z=$.dF
if(z!=null)return z
y=$.dG
if(y==null){y=J.cy(window.navigator.userAgent,"Firefox",0)
$.dG=y}if(y)z="-moz-"
else{y=$.dH
if(y==null){y=!P.dJ()&&J.cy(window.navigator.userAgent,"Trident/",0)
$.dH=y}if(y)z="-ms-"
else z=P.dJ()?"-o-":"-webkit-"}$.dF=z
return z},
fb:{"^":"a;da:a>,b,c",$iscc:1},
l_:{"^":"v:12;a",
$2:function(a,b){this.a[a]=b}},
h9:{"^":"cf;a,b",
gbJ:function(){var z,y,x
z=this.b
y=H.aC(z,"u",0)
x=W.a1
return new H.hB(new H.jq(z,H.b(new P.ha(),{func:1,ret:P.ae,args:[y]}),[y]),H.b(new P.hb(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bd(this.gbJ().a)},
k:function(a,b){var z=this.gbJ()
return z.b.$1(J.dr(z.a,b))},
gZ:function(a){var z=P.hx(this.gbJ(),!1,W.a1)
return new J.an(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.a1]},
$ase:function(){return[W.a1]},
$asd:function(){return[W.a1]}},
ha:{"^":"v:25;",
$1:function(a){return!!J.K(H.k(a,"$isL")).$isa1}},
hb:{"^":"v:26;",
$1:function(a){return H.f(H.k(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bt:{"^":"a;p:a>,q:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b8(b,"$isbt",[P.T],null)
if(!z)return!1
z=this.a
y=J.c2(b)
x=y.gp(b)
if(z==null?x==null:z===x){z=this.b
y=y.gq(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.aD(this.a)
y=J.aD(this.b)
return P.eZ(P.bG(P.bG(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.z(this,0)
z=H.B(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bt(z,H.B(x*b,y),this.$ti)}},
kc:{"^":"a;$ti",
gb1:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.B(z+this.c,H.z(this,0))},
gc0:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.B(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b8(b,"$isaa",[P.T],"$asaa")
if(!z)return!1
z=this.a
y=J.c2(b)
x=y.gaN(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb5(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.z(this,0)
if(H.B(z+this.c,w)===y.gb1(b)){if(typeof x!=="number")return x.E()
z=H.B(x+this.d,w)===y.gc0(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.aD(z)
x=this.b
w=J.aD(x)
if(typeof z!=="number")return z.E()
v=H.z(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.B(x+this.d,v)
return P.eZ(P.bG(P.bG(P.bG(P.bG(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d9:function(a,b){var z,y
H.w(b,"$isbt",[P.T],"$asbt")
z=b.a
y=this.a
if(typeof z!=="number")return z.dU()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dU()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"kc;aN:a>,b5:b>,al:c>,ak:d>,$ti",n:{
i6:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.aa()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.aa()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",lW:{"^":"R;0p:x=,0q:y=","%":"SVGFEBlendElement"},lX:{"^":"R;0p:x=,0q:y=","%":"SVGFEColorMatrixElement"},lY:{"^":"R;0p:x=,0q:y=","%":"SVGFEComponentTransferElement"},lZ:{"^":"R;0p:x=,0q:y=","%":"SVGFECompositeElement"},m_:{"^":"R;0p:x=,0q:y=","%":"SVGFEConvolveMatrixElement"},m0:{"^":"R;0p:x=,0q:y=","%":"SVGFEDiffuseLightingElement"},m1:{"^":"R;0p:x=,0q:y=","%":"SVGFEDisplacementMapElement"},m2:{"^":"R;0p:x=,0q:y=","%":"SVGFEFloodElement"},m3:{"^":"R;0p:x=,0q:y=","%":"SVGFEGaussianBlurElement"},m4:{"^":"R;0p:x=,0q:y=","%":"SVGFEImageElement"},m5:{"^":"R;0p:x=,0q:y=","%":"SVGFEMergeElement"},m6:{"^":"R;0p:x=,0q:y=","%":"SVGFEMorphologyElement"},m7:{"^":"R;0p:x=,0q:y=","%":"SVGFEOffsetElement"},m8:{"^":"R;0p:x=,0q:y=","%":"SVGFEPointLightElement"},m9:{"^":"R;0p:x=,0q:y=","%":"SVGFESpecularLightingElement"},ma:{"^":"R;0p:x=,0q:y=","%":"SVGFESpotLightElement"},mb:{"^":"R;0p:x=,0q:y=","%":"SVGFETileElement"},mc:{"^":"R;0p:x=,0q:y=","%":"SVGFETurbulenceElement"},mf:{"^":"R;0p:x=,0q:y=","%":"SVGFilterElement"},mg:{"^":"bl;0p:x=,0q:y=","%":"SVGForeignObjectElement"},he:{"^":"bl;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bl:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ml:{"^":"bl;0p:x=,0q:y=","%":"SVGImageElement"},bV:{"^":"n;",$isbV:1,"%":"SVGLength"},mo:{"^":"jZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$asy:function(){return[P.bV]},
"%":"SVGLengthList"},mr:{"^":"R;0p:x=,0q:y=","%":"SVGMaskElement"},bX:{"^":"n;",$isbX:1,"%":"SVGNumber"},mD:{"^":"k9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bX]},
$ise:1,
$ase:function(){return[P.bX]},
$isd:1,
$asd:function(){return[P.bX]},
$asy:function(){return[P.bX]},
"%":"SVGNumberList"},mF:{"^":"R;0p:x=,0q:y=","%":"SVGPatternElement"},mH:{"^":"n;0p:x=,0q:y=","%":"SVGPoint"},mI:{"^":"n;0l:length=","%":"SVGPointList"},mJ:{"^":"n;0p:x=,0q:y=","%":"SVGRect"},mK:{"^":"he;0p:x=,0q:y=","%":"SVGRectElement"},mR:{"^":"ko;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.k(a,b)},
$asu:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a1;",
gd7:function(a){return new P.h9(a,new W.jz(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mS:{"^":"bl;0p:x=,0q:y=","%":"SVGSVGElement"},iG:{"^":"bl;","%":"SVGTextPathElement;SVGTextContentElement"},mU:{"^":"iG;0p:x=,0q:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c_:{"^":"n;",$isc_:1,"%":"SVGTransform"},n_:{"^":"ky;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.k(a,b)},
$asu:function(){return[P.c_]},
$ise:1,
$ase:function(){return[P.c_]},
$isd:1,
$asd:function(){return[P.c_]},
$asy:function(){return[P.c_]},
"%":"SVGTransformList"},n2:{"^":"bl;0p:x=,0q:y=","%":"SVGUseElement"},jY:{"^":"n+u;"},jZ:{"^":"jY+y;"},k8:{"^":"n+u;"},k9:{"^":"k8+y;"},kn:{"^":"n+u;"},ko:{"^":"kn+y;"},kx:{"^":"n+u;"},ky:{"^":"kx+y;"}}],["","",,P,{"^":"",lA:{"^":"n;0l:length=","%":"AudioBuffer"},lB:{"^":"jy;",
k:function(a,b){return P.aN(a.get(H.U(b)))},
N:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gav:function(a){var z=H.c([],[P.o])
this.N(a,new P.fG(z))
return z},
gl:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"AudioParamMap"},fG:{"^":"v:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},lC:{"^":"a3;0l:length=","%":"AudioTrackList"},fI:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mE:{"^":"fI;0l:length=","%":"OfflineAudioContext"},jy:{"^":"n+ab;"}}],["","",,P,{"^":"",cZ:{"^":"n;",
dO:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$iscc&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.l0(g))
return}if(!!y.$isdQ&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fE("Incorrect number or type of arguments"))},
hG:function(a,b,c,d,e,f,g){return this.dO(a,b,c,d,e,f,g,null,null,null)},
$iscZ:1,
"%":"WebGLRenderingContext"},iH:{"^":"n;",$isiH:1,"%":"WebGLTexture"},j3:{"^":"n;",$isj3:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mP:{"^":"kl;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return P.aN(a.item(b))},
G:function(a,b){return this.k(a,b)},
$asu:function(){return[[P.a4,,,]]},
$ise:1,
$ase:function(){return[[P.a4,,,]]},
$isd:1,
$asd:function(){return[[P.a4,,,]]},
$asy:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},kk:{"^":"n+u;"},kl:{"^":"kk+y;"}}],["","",,O,{"^":"",ag:{"^":"a;0a,0b,0c,0d,$ti",
b9:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cz:function(a,b,c){var z=H.aC(this,"ag",0)
H.b(b,{func:1,ret:P.ae,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.A,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aQ:function(a,b){return this.cz(a,null,b)},
cV:function(a){var z
H.w(a,"$ise",[H.aC(this,"ag",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cT:function(a,b){var z
H.w(b,"$ise",[H.aC(this,"ag",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.an(z,z.length,0,[H.z(z,0)])},
G:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aC(this,"ag",0)
H.B(b,z)
z=[z]
if(this.cV(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cT(x,H.c([b],z))}},
bW:function(a,b){var z,y
H.w(b,"$ise",[H.aC(this,"ag",0)],"$ase")
if(this.cV(b)){z=this.a
y=z.length
C.a.bW(z,b)
this.cT(y,b)}},
$ise:1,
n:{
cG:function(a){var z=new O.ag([a])
z.b9(a)
return z}}},cT:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
ea:function(a){var z=this.b
if(!(z==null))z.A(a)},
ay:function(){return this.ea(null)},
gV:function(a){var z=this.a
if(z.length>0)return C.a.gci(z)
else return V.aZ()},
bv:function(a){var z=this.a
if(a==null)C.a.h(z,V.aZ())
else C.a.h(z,a)
this.ay()},
aw:function(){var z=this.a
if(z.length>0){z.pop()
this.ay()}}}}],["","",,E,{"^":"",cz:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sb8:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.b(this.gdJ(),{func:1,ret:-1,args:[D.m]})
C.a.I(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.b(this.gdJ(),{func:1,ret:-1,args:[D.m]})
C.a.h(y.a,x)}w=new D.C("shape",z,this.c,this,[F.ei])
w.b=!0
this.aO(w)}},
ag:function(a,b){var z
for(z=this.y.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.F();)z.d.ag(0,b)},
a5:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gV(z))
z.ay()
a.cq(this.f)
z=a.dy
y=(z&&C.a).gci(z)
if(y!=null&&this.d!=null)y.dL(a,this)
for(z=this.y.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a5(a)
a.cp()
a.dx.aw()},
gt:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
aO:function(a){var z=this.z
if(!(z==null))z.A(a)},
a_:function(){return this.aO(null)},
ho:[function(a){H.k(a,"$ism")
this.e=null
this.aO(a)},function(){return this.ho(null)},"iw","$1","$0","gdJ",0,2,0],
hm:[function(a){this.aO(H.k(a,"$ism"))},function(){return this.hm(null)},"iu","$1","$0","gdI",0,2,0],
it:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aF],"$ase")
for(z=b.length,y=this.gdI(),x={func:1,ret:-1,args:[D.m]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.aV()
t.a=H.c([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","ghl",8,0,8],
iv:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aF],"$ase")
for(z=b.length,y=this.gdI(),x={func:1,ret:-1,args:[D.m]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.aV()
t.a=H.c([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.b(y,x)
C.a.I(t.a,y)}}this.a_()},"$2","ghn",8,0,8],
$isax:1,
n:{
cK:function(a,b,c,d,e,f){var z,y
z=new E.aF()
z.a=d
z.b=!0
y=O.cG(E.aF)
z.y=y
y.aQ(z.ghl(),z.ghn())
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
z.sb8(0,e)
return z}}},ia:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e7:function(a,b){var z,y,x,w,v
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
z=new O.cT()
y=[V.at]
z.a=H.c([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.m]}
v=H.b(new E.ic(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cT()
z.a=H.c([],y)
v=z.gt()
v.toString
x=H.b(new E.id(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cT()
z.a=H.c([],y)
y=z.gt()
y.toString
w=H.b(new E.ie(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bZ])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.o,A.d0])},
ghx:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gV(z)
y=this.db
y=z.j(0,y.gV(y))
this.z=y
z=y}return z},
cq:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gci(z):a;(z&&C.a).h(z,y)},
cp:function(){var z=this.dy
if(z.length>1)z.pop()},
d4:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d8(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a1(0,z,a)},
n:{
ib:function(a,b){var z=new E.ia(a,b)
z.e7(a,b)
return z}}},ic:{"^":"v:9;a",
$1:function(a){var z
H.k(a,"$ism")
z=this.a
z.z=null
z.ch=null}},id:{"^":"v:9;a",
$1:function(a){var z
H.k(a,"$ism")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ie:{"^":"v:9;a",
$1:function(a){var z
H.k(a,"$ism")
z=this.a
z.ch=null
z.cx=null}},iN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
ec:[function(a){var z
H.k(a,"$ism")
z=this.x
if(!(z==null))z.A(a)
this.hB()},function(){return this.ec(null)},"eb","$1","$0","gcE",0,2,0],
gh9:function(){var z,y,x
z=Date.now()
y=C.e.a3(P.dK(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
cY:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.f.ce(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.f.ce(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hB:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iP(this),{func:1,ret:-1,args:[P.T]})
C.u.ev(z)
C.u.f9(z,W.fh(y,P.T))}},
hA:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cY()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ay()
w=x.db
C.a.sl(w.a,0)
w.ay()
w=x.dx
C.a.sl(w.a,0)
w.ay()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a5(this.e)}}catch(v){z=H.aT(v)
y=H.bb(v)
P.dp("Error: "+H.j(z))
P.dp("Stack: "+H.j(y))
throw H.h(z)}},
n:{
iO:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscD)return E.es(a,!0,!0,!0,!1)
y=W.cE(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd7(a).h(0,y)
w=E.es(y,!0,!0,!0,!1)
w.a=a
return w},
es:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iN()
y=P.hu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.by(a,"webgl",y)
x=H.k(x==null?C.k.by(a,"experimental-webgl",y):x,"$iscZ")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ib(x,a)
w=new T.iI(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.j9(a)
v=new X.ho()
v.c=new X.av(!1,!1,!1)
v.d=P.hv(null,null,null,P.A)
w.b=v
v=new X.hN(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hy(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iT(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.em,P.a]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.b(w.geM(),s),!1,t))
v=w.z
r=W.a8
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.b(w.geP(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.b(w.geJ(),q),!1,r))
v=w.z
p=W.bo
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.b(w.geR(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.b(w.geQ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.b(w.geU(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.b(w.geW(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.b(w.geV(),s),!1,t))
p=w.z
o=W.bE;(p&&C.a).h(p,W.Y(a,H.U(W.h3(a)),H.b(w.geX(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.b(w.geN(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.b(w.geO(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.b(w.geY(),q),!1,r))
r=w.z
q=W.b2
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.b(w.gf5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.b(w.gf3(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.b(w.gf4(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.cY()
return z}}},iP:{"^":"v:29;a",
$1:function(a){var z
H.lm(a)
z=this.a
if(z.z){z.z=!1
z.hA()}}}}],["","",,Z,{"^":"",eU:{"^":"a;a,b",n:{
d8:function(a,b,c){var z
H.w(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bI(c)),35044)
a.bindBuffer(b,null)
return new Z.eU(b,z)}}},dw:{"^":"cz;a,b,c,d,e",
Y:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aT(y)
x=P.q('Failed to bind buffer attribute "'+J.a7(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a7(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eV:{"^":"a;a",$islD:1},cC:{"^":"a;a,0b,c,d",
au:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
af:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a5:function(a){var z,y,x,w,v
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
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$ismT:1},cd:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b0(this.c)+"'")+"]"}},b3:{"^":"a;a",
gcA:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=4
if((z&$.$get$b4().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
fW:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eT()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b3))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b4().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
n:{
al:function(a){return new Z.b3(a)}}}}],["","",,D,{"^":"",dz:{"^":"a;"},aV:{"^":"a;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.m(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.N(y,new D.h7(z))
return x!==0},
de:function(){return this.A(null)},
hC:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
ae:function(a){return this.hC(a,!0,!1)},
n:{
F:function(){var z=new D.aV()
z.a=H.c([],[{func:1,ret:-1,args:[D.m]}])
z.c=0
return z}}},h7:{"^":"v:30;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.m]})
z=this.a.a
z.b
a.$1(z)}},m:{"^":"a;a,0b"},bR:{"^":"m;c,d,a,0b,$ti"},bS:{"^":"m;c,d,a,0b,$ti"},C:{"^":"m;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dx:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"lE<"}},dV:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dW:{"^":"m;c,a,0b"},ho:{"^":"a;0a,0b,0c,0d",
hu:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dW(a,this)
y.b=!0
return z.A(y)},
hq:function(a){var z,y
this.c=a.b
this.d.I(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dW(a,this)
y.b=!0
return z.A(y)}},e_:{"^":"ch;x,y,c,d,e,a,0b"},hy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaH()
s=new X.bq(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
co:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.ap(a,b))
return!0},
b_:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.ap(a,b))
return!0},
aZ:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.ap(a,b))
return!0},
hv:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaH()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cU(new V.Q(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.A(w)
return!0},
eT:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.e_(c,a,this.a.gaH(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.O(0,0)}},av:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
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
return z+(this.c?"Shift+":"")}},bq:{"^":"ch;x,y,z,Q,ch,c,d,e,a,0b"},hN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bH:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaH()
x=new X.bq(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
co:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.bH(a,b,!0))
return!0},
b_:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.bH(a,b,!0))
return!0},
aZ:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.bH(a,b,!1))
return!0},
hw:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaH()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cU(new V.Q(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.A(x)
return!0},
gdd:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gbx:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gdH:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},cU:{"^":"ch;x,c,d,e,a,0b"},ch:{"^":"m;"},ew:{"^":"ch;x,y,z,Q,ch,c,d,e,a,0b"},iT:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.O],"$asd")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaH()
w=new X.ew(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ht:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.A(this.ap(a,!0))
return!0},
hr:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.A(this.ap(a,!0))
return!0},
hs:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.A(this.ap(a,!1))
return!0}},j9:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaH:function(){var z=this.a
return V.cY(0,0,(z&&C.k).gbh(z).c,C.k.gbh(z).d)},
cP:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.av(y,a.altKey,a.shiftKey))},
aF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
bV:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
aq:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.O(y-w,x-v)},
aT:function(a){return new V.Q(a.movementX,a.movementY)},
bP:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.f.W(u.pageX)
C.f.W(u.pageY)
s=z.left
C.f.W(u.pageX)
C.a.h(y,new V.O(t-s,C.f.W(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dx(z,new X.av(y,a.altKey,a.shiftKey))},
i2:[function(a){this.f=!0},"$1","geP",4,0,4],
hX:[function(a){this.f=!1},"$1","geJ",4,0,4],
i_:[function(a){if(this.f)a.preventDefault()},"$1","geM",4,0,4],
i4:[function(a){var z
H.k(a,"$isbo")
if(!this.f)return
z=this.cP(a)
if(this.b.hu(z))a.preventDefault()},"$1","geR",4,0,16],
i3:[function(a){var z
H.k(a,"$isbo")
if(!this.f)return
z=this.cP(a)
if(this.b.hq(z))a.preventDefault()},"$1","geQ",4,0,16],
i6:[function(a){var z,y,x,w
H.k(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aF(a)
if(this.x){y=this.an(a)
x=this.aT(a)
if(this.d.co(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.aq(a)
if(this.c.co(y,w))a.preventDefault()},"$1","geU",4,0,5],
i8:[function(a){var z,y,x
H.k(a,"$isaw")
this.aF(a)
z=this.an(a)
if(this.x){y=this.aT(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.b_(z,x))a.preventDefault()},"$1","geW",4,0,5],
i1:[function(a){var z,y,x,w
H.k(a,"$isaw")
z=this.a
if(!(z&&C.k).gbh(z).d9(0,new P.bt(a.clientX,a.clientY,[P.T]))){this.aF(a)
y=this.an(a)
if(this.x){x=this.aT(a)
if(this.d.b_(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.b_(y,w))a.preventDefault()}},"$1","geO",4,0,5],
i7:[function(a){var z,y,x
H.k(a,"$isaw")
this.aF(a)
z=this.an(a)
if(this.x){y=this.aT(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aZ(z,x))a.preventDefault()},"$1","geV",4,0,5],
i0:[function(a){var z,y,x,w
H.k(a,"$isaw")
z=this.a
if(!(z&&C.k).gbh(z).d9(0,new P.bt(a.clientX,a.clientY,[P.T]))){this.aF(a)
y=this.an(a)
if(this.x){x=this.aT(a)
if(this.d.aZ(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.aZ(y,w))a.preventDefault()}},"$1","geN",4,0,5],
i9:[function(a){var z,y
H.k(a,"$isbE")
this.aF(a)
z=new V.Q((a&&C.t).gh4(a),C.t.gh5(a)).v(0,180)
if(this.x){if(this.d.hv(z))a.preventDefault()
return}if(this.r)return
y=this.aq(a)
if(this.c.hw(z,y))a.preventDefault()},"$1","geX",4,0,32],
ia:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.aq(this.y)
this.d.eT(w,v,x)}},"$1","geY",4,0,4],
ik:[function(a){var z
H.k(a,"$isb2")
this.a.focus()
this.f=!0
this.bV(a)
z=this.bP(a)
if(this.e.ht(z))a.preventDefault()},"$1","gf5",4,0,10],
ii:[function(a){var z
H.k(a,"$isb2")
this.bV(a)
z=this.bP(a)
if(this.e.hr(z))a.preventDefault()},"$1","gf3",4,0,10],
ij:[function(a){var z
H.k(a,"$isb2")
this.bV(a)
z=this.bP(a)
if(this.e.hs(z))a.preventDefault()},"$1","gf4",4,0,10]}}],["","",,D,{"^":"",c9:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
az:[function(a){var z
H.k(a,"$ism")
z=this.d
if(!(z==null))z.A(a)},function(){return this.az(null)},"hN","$1","$0","ged",0,2,0],
$isX:1,
$isax:1},X:{"^":"a;",$isax:1},hp:{"^":"ag;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
az:function(a){var z=this.Q
if(!(z==null))z.A(a)},
eS:[function(a){var z
H.k(a,"$ism")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.eS(null)},"i5","$1","$0","gcU",0,2,0],
ib:[function(a){var z,y,x
H.w(a,"$ise",[D.X],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.eq(x))return!1}return!0},"$1","geZ",4,0,34],
hU:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcU(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isX")
if(t instanceof D.c9)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bR(a,b,this,[z])
z.b=!0
this.az(z)},"$2","geG",8,0,17],
ie:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcU(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isX")
if(t instanceof D.c9)C.a.I(this.e,t)
s=t.d
if(s==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.I(s.a,x)}z=new D.bS(a,b,this,[z])
z.b=!0
this.az(z)},"$2","gf0",8,0,17],
eq:function(a){var z=C.a.aV(this.e,a)
return z},
$ase:function(){return[D.X]},
$asag:function(){return[D.X]}},hX:{"^":"a;",$isX:1,$isax:1},iy:{"^":"a;",$isX:1,$isax:1},iK:{"^":"a;",$isX:1,$isax:1},iL:{"^":"a;",$isX:1,$isax:1},iM:{"^":"a;",$isX:1,$isax:1}}],["","",,V,{"^":"",
lG:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hK",8,0,33],
cx:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.f.dX(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.i.a9("null",c)
return C.i.a9(C.f.dQ($.l.$2(a,0)?0:a,b),c+b+1)},
ba:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.t],"$asd")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.a1(z,u,C.i.a9(z[u],x))}return z},
bO:function(a,b){return C.f.hJ(Math.pow(b,C.z.ce(Math.log(H.kY(a))/Math.log(b))))},
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
as:{"^":"a;a,b,c,d",
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
return new V.as(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
cg:{"^":"a;a,b,c,d,e,f,r,x,y",
a6:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$iscg")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.f.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.f.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.f.j(t,s)
q=a5.b
p=C.f.j(z,q)
o=a5.e
n=C.f.j(w,o)
m=a5.x
l=C.f.j(t,m)
k=a5.c
z=C.f.j(z,k)
j=a5.f
w=C.f.j(w,j)
i=a5.y
t=C.f.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.f.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.f.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.f.j(d,s)
b=C.f.j(h,q)
a=C.f.j(f,o)
a0=C.f.j(d,m)
h=C.f.j(h,k)
f=C.f.j(f,j)
d=C.f.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.f.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.f.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cg(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.f.j(a3,s),C.f.j(a1,q)+C.f.j(a2,o)+C.f.j(a3,m),C.f.j(a1,k)+C.f.j(a2,j)+C.f.j(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cg))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.ba(H.c([this.a,this.d,this.r],z),3,0)
x=V.ba(H.c([this.b,this.e,this.x],z),3,0)
w=V.ba(H.c([this.c,this.f,this.y],z),3,0)
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
at:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a6:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
cg:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.aZ()
a3=1/a2
a4=-w
a5=-i
return V.au((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isat")
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
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
z=b.z
if(!$.l.$2(z,this.z))return!1
z=b.Q
if(!$.l.$2(z,this.Q))return!1
z=b.ch
if(!$.l.$2(z,this.ch))return!1
z=b.cx
if(!$.l.$2(z,this.cx))return!1
z=b.cy
if(!$.l.$2(z,this.cy))return!1
z=b.db
if(!$.l.$2(z,this.db))return!1
z=b.dx
if(!$.l.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
dD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.ba(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ba(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ba(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ba(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.dD("",3,0)},
B:function(a){return this.dD(a,3,0)},
n:{
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aZ:function(){return V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e8:function(a,b,c){return V.au(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
e5:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.au(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
e6:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.au(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
e7:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.au(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
e4:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.C(c)))
y=b.ar(z)
x=y.v(0,Math.sqrt(y.C(y)))
w=z.ar(x)
v=new V.E(a.a,a.b,a.c)
return V.au(x.a,w.a,z.a,x.M(0).C(v),x.b,w.b,z.b,w.M(0).C(v),x.c,w.c,z.c,z.M(0).C(v),0,0,0,1)}}},
O:{"^":"a;p:a>,q:b>",
L:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
W:{"^":"a;p:a>,q:b>,c",
E:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
b_:{"^":"a;p:a>,q:b>,c,d",
j:function(a,b){return new V.b_(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b_))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
eg:{"^":"a;p:a>,q:b>,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eg))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
n:{
cY:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eg(a,b,c,d)}}},
Q:{"^":"a;a,b",
hf:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){var z,y,x,w
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
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.l.$2(b,0))return new V.Q(0,0)
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
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
hf:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,18],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cj:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ar:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.E(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.l.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dF:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fQ:{"^":"dz;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bC:function(a){var z=V.cx(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
H:function(a){var z=this.y
if(!(z==null))z.A(a)},
scv:function(a,b){},
sck:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bC(z)}z=new D.C("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.H(z)}},
scn:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bC(z)}z=new D.C("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.H(z)}},
sa0:function(a,b){var z,y
b=this.bC(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.t])
z.b=!0
this.H(z)}},
scl:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.H(z)}},
sO:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.t])
z.b=!0
this.H(z)}},
sc6:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.t])
z.b=!0
this.H(z)}},
ag:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sO(y)}},
n:{
cH:function(){var z=new U.fQ()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dB:{"^":"a5;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
ax:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
n:{
cI:function(a){var z=new U.dB()
z.a=a
return z}}},dO:{"^":"ag;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
H:[function(a){var z
H.k(a,"$ism")
z=this.e
if(!(z==null))z.A(a)},function(){return this.H(null)},"ac","$1","$0","gaE",0,2,0],
hO:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gee",8,0,19],
ic:[function(a,b){var z,y,x,w,v,u,t
z=U.a5
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaE(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.I(t.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gf_",8,0,19],
ax:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.an(z,z.length,0,[H.z(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.ax(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.aZ():x
z=this.e
if(!(z==null))z.ae(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dO))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.a5]},
$asag:function(){return[U.a5]},
$isa5:1,
n:{
dP:function(a){var z=new U.dO()
z.b9(U.a5)
z.aQ(z.gee(),z.gf_())
z.e=null
z.f=V.aZ()
z.r=0
return z}}},a5:{"^":"dz;"},eh:{"^":"a5;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
H:function(a){var z=this.y
if(!(z==null))z.A(a)},
sdR:function(a){var z,y
a=V.cx(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.C("yaw",y,a,this,[P.t])
z.b=!0
this.H(z)}},
sdK:function(a,b){var z,y
b=V.cx(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.C("pitch",y,b,this,[P.t])
z.b=!0
this.H(z)}},
sdM:function(a){var z,y
a=V.cx(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.C("roll",y,a,this,[P.t])
z.b=!0
this.H(z)}},
ax:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sdR(this.a+this.d*b.y)
this.sdK(0,this.b+this.e*b.y)
this.sdM(this.c+this.f*b.y)
this.x=V.e7(this.c).j(0,V.e6(this.b)).j(0,V.e5(this.a))
z=this.y
if(!(z==null))z.ae(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eh))return!1
z=this.a
y=b.a
if(!$.l.$2(z,y))return!1
z=this.b
y=b.b
if(!$.l.$2(z,y))return!1
z=this.c
y=b.c
if(!$.l.$2(z,y))return!1
z=this.d
y=b.d
if(!$.l.$2(z,y))return!1
z=this.e
y=b.e
if(!$.l.$2(z,y))return!1
z=this.f
y=b.f
if(!$.l.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}},ja:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
H:[function(a){var z
H.k(a,"$ism")
z=this.cy
if(!(z==null))z.A(a)},function(){return this.H(null)},"ac","$1","$0","gaE",0,2,0],
aU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdd()
z.toString
y={func:1,ret:-1,args:[D.m]}
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.c.gdH()
x.toString
z=H.b(this.gbL(),y)
C.a.h(x.a,z)
z=this.a.c.gbx()
z.toString
y=H.b(this.gbM(),y)
C.a.h(z.a,y)
return!0},
eC:[function(a){H.k(a,"$ism")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbK",4,0,1],
eD:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$ism"),"$isbq")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.Q(y.a,y.b).j(0,2).v(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sO(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.Q(x.a,x.b).j(0,2).v(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
this.b.sO(0)
y=y.L(0,a.z)
this.Q=new V.Q(y.a,y.b).j(0,2).v(0,z.ga4())}this.ac()},"$1","gbL",4,0,1],
eE:[function(a){var z,y,x
H.k(a,"$ism")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sO(y*10*x)
this.ac()}},"$1","gbM",4,0,1],
ax:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.ch=y
x=b.y
this.b.ag(0,x)
this.cx=V.e7(this.b.d)}return this.cx},
$isa5:1},jb:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
H:[function(a){var z
H.k(a,"$ism")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.H(null)},"ac","$1","$0","gaE",0,2,0],
aU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdd()
z.toString
y={func:1,ret:-1,args:[D.m]}
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.c.gdH()
x.toString
z=H.b(this.gbL(),y)
C.a.h(x.a,z)
z=this.a.c.gbx()
z.toString
x=H.b(this.gbM(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.F()
x.f=z}x=H.b(this.gez(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geA(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.F()
x.b=z}x=H.b(this.gfs(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.gfq(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.F()
x.c=z}y=H.b(this.gfp(),y)
C.a.h(z.a,y)
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.Q(z,y)},
eC:[function(a){a=H.f(H.k(a,"$ism"),"$isbq")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbK",4,0,1],
eD:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$ism"),"$isbq")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ah(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ah(new V.Q(x.a,x.b).j(0,2).v(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.L(0,a.z)
this.dx=this.ah(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))}this.ac()},"$1","gbL",4,0,1],
eE:[function(a){var z,y,x
H.k(a,"$ism")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sO(-y*10*z)
this.ac()}},"$1","gbM",4,0,1],
hR:[function(a){if(H.f(H.k(a,"$ism"),"$ise_").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gez",4,0,1],
hS:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$ism"),"$isbq")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ah(new V.Q(x.a,x.b).j(0,2).v(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.L(0,a.z)
this.dx=this.ah(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))
this.ac()},"$1","geA",4,0,1],
ip:[function(a){H.k(a,"$ism")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfs",4,0,1],
io:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$ism"),"$isew")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.Q(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ah(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ah(new V.Q(x.a,x.b).j(0,2).v(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.L(0,a.z)
this.dx=this.ah(new V.Q(y.a,y.b).j(0,2).v(0,z.ga4()))}this.ac()},"$1","gfq",4,0,1],
im:[function(a){var z,y,x
H.k(a,"$ism")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sO(-y*10*z)
this.ac()}},"$1","gfp",4,0,1],
ax:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.aa()
if(z<y){this.dy=y
x=b.y
this.c.ag(0,x)
this.b.ag(0,x)
this.fr=V.e5(this.b.d).j(0,V.e6(this.c.d))}return this.fr},
$isa5:1},jc:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
H:function(a){var z=this.r
if(!(z==null))z.A(a)},
aU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=H.b(this.geF(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hT:[function(a){var z,y,x,w
H.k(a,"$ism")
if(!J.M(this.b,this.a.b.c))return
H.f(a,"$iscU")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.t])
z.b=!0
this.H(z)}},"$1","geF",4,0,1],
ax:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.au(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",fR:{"^":"ag;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
X:[function(a){var z
H.k(a,"$ism")
z=this.f
if(!(z==null))z.A(a)},function(){return this.X(null)},"cF","$1","$0","gS",0,2,0],
ig:[function(a,b){var z,y,x,w,v,u,t
z=M.ay
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gf1",8,0,20],
ih:[function(a,b){var z,y,x,w,v,u,t
z=M.ay
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.m]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.I(t.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gf2",8,0,20],
a5:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.F();){y=z.d
if(!(y==null))y.a5(a)}this.e=!1},
$ase:function(){return[M.ay]},
$asag:function(){return[M.ay]},
$isay:1},fT:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
X:[function(a){var z
H.k(a,"$ism")
z=this.f
if(!(z==null))z.A(a)},function(){return this.X(null)},"cF","$1","$0","gS",0,2,0],
saG:function(a){var z,y,x
if(a==null)a=new X.hf()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.C("camera",x,this.a,this,[X.c6])
z.b=!0
this.X(z)}},
sb2:function(a,b){var z,y,x
if(b==null)b=X.dN(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.C("target",x,this.b,this,[X.ck])
z.b=!0
this.X(z)}},
saP:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.C("technique",x,this.c,this,[O.bZ])
z.b=!0
this.X(z)}},
a5:function(a){a.cq(this.c)
this.b.Y(a)
this.a.Y(a)
this.d.ag(0,a)
this.d.a5(a)
this.a.af(a)
this.b.af(a)
a.cp()},
$isay:1},h5:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
X:[function(a){var z
H.k(a,"$ism")
z=this.x
if(!(z==null))z.A(a)},function(){return this.X(null)},"cF","$1","$0","gS",0,2,0],
hY:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bR(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geK",8,0,8],
hZ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.m]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.aV()
s.a=H.c([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.b(x,w)
C.a.I(s.a,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geL",8,0,8],
saG:function(a){var z,y,x
if(a==null)a=X.cW(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.C("camera",x,this.a,this,[X.c6])
z.b=!0
this.X(z)}},
sb2:function(a,b){var z,y,x
if(b==null)b=X.dN(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)
z=new D.C("target",x,this.b,this,[X.ck])
z.b=!0
this.X(z)}},
saP:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gS(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.C("technique",x,this.c,this,[O.bZ])
z.b=!0
this.X(z)}},
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
a5:function(a){var z
a.cq(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.ag(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.F();)z.d.ag(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.F();)z.d.a5(a)
this.a.toString
a.cy.aw()
a.db.aw()
this.b.af(a)
a.cp()},
$isay:1,
n:{
dL:function(a,b,c,d){var z,y
z=new M.h5()
y=O.cG(E.aF)
z.d=y
y.aQ(z.geK(),z.geL())
z.e=null
z.f=null
z.r=null
z.x=null
z.saG(a)
z.sb2(0,c)
z.saP(d)
return z}}},ay:{"^":"a;"}}],["","",,A,{"^":"",dt:{"^":"a;a,b,c"},fF:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
h6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dc:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e2:{"^":"d0;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aL,0at,0aM,0bi,0df,0dg,0bj,0bk,0dh,0di,0bl,0bm,0dj,0dk,0bn,0dl,0dm,0bo,0dn,0dq,0bp,0bq,0br,0dr,0ds,0bs,0bt,0dt,0du,0bu,0dv,0c8,0dw,0c9,0dz,0ca,0dA,0cb,0dB,0cc,0dC,0cd,a,b,0c,0d,0e,0f,0r",
e6:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bY("")
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
a1.fv(z)
a1.fE(z)
a1.fw(z)
a1.fM(z)
a1.fN(z)
a1.fG(z)
a1.fR(z)
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
z=new P.bY("")
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
v.fB(z)
v.fu(z)
v.fz(z)
v.fC(z)
v.fK(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fI(z)
v.fJ(z)}v.fF(z)
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
p=H.c([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fA(z)
v.fH(z)
v.fL(z)
v.fO(z)
v.fP(z)
v.fQ(z)
v.fD(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.o])
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
this.dE(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isaB")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isaB")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isaB")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isaB")
if(a1.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$isd7")
if(a1.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isaB")
if(a1.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isaB")
this.k3=H.c([],[A.aB])
y=a1.aL
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isI")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isaB"))}}y=a1.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isaj")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isI")
break
case C.d:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isI")
break}}y=a1.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isaj")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isI")
break
case C.d:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isI")
break}}y=a1.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.aL=H.f(this.r.m(0,"diffuseTxt"),"$isaj")
this.aM=H.f(this.r.m(0,"nullDiffuseTxt"),"$isI")
break
case C.d:this.at=H.f(this.r.m(0,"diffuseTxt"),"$isac")
this.aM=H.f(this.r.m(0,"nullDiffuseTxt"),"$isI")
break}}y=a1.d
if(y!==C.b){this.bi=H.f(this.r.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.df=H.f(this.r.m(0,"invDiffuseTxt"),"$isaj")
this.bj=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isI")
break
case C.d:this.dg=H.f(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bj=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a1.e
if(y!==C.b){this.bm=H.f(this.r.m(0,"shininess"),"$isS")
this.bk=H.f(this.r.m(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.dh=H.f(this.r.m(0,"specularTxt"),"$isaj")
this.bl=H.f(this.r.m(0,"nullSpecularTxt"),"$isI")
break
case C.d:this.di=H.f(this.r.m(0,"specularTxt"),"$isac")
this.bl=H.f(this.r.m(0,"nullSpecularTxt"),"$isI")
break}}switch(a1.f){case C.b:break
case C.h:break
case C.c:this.dj=H.f(this.r.m(0,"bumpTxt"),"$isaj")
this.bn=H.f(this.r.m(0,"nullBumpTxt"),"$isI")
break
case C.d:this.dk=H.f(this.r.m(0,"bumpTxt"),"$isac")
this.bn=H.f(this.r.m(0,"nullBumpTxt"),"$isI")
break}if(a1.dy){this.dl=H.f(this.r.m(0,"envSampler"),"$isac")
this.dm=H.f(this.r.m(0,"nullEnvTxt"),"$isI")
y=a1.r
if(y!==C.b){this.bo=H.f(this.r.m(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.dn=H.f(this.r.m(0,"reflectTxt"),"$isaj")
this.bp=H.f(this.r.m(0,"nullReflectTxt"),"$isI")
break
case C.d:this.dq=H.f(this.r.m(0,"reflectTxt"),"$isac")
this.bp=H.f(this.r.m(0,"nullReflectTxt"),"$isI")
break}}y=a1.x
if(y!==C.b){this.bq=H.f(this.r.m(0,"refraction"),"$isS")
this.br=H.f(this.r.m(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.h:break
case C.c:this.dr=H.f(this.r.m(0,"refractTxt"),"$isaj")
this.bs=H.f(this.r.m(0,"nullRefractTxt"),"$isI")
break
case C.d:this.ds=H.f(this.r.m(0,"refractTxt"),"$isac")
this.bs=H.f(this.r.m(0,"nullRefractTxt"),"$isI")
break}}}y=a1.y
if(y!==C.b){this.bt=H.f(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.h:break
case C.c:this.dt=H.f(this.r.m(0,"alphaTxt"),"$isaj")
this.bu=H.f(this.r.m(0,"nullAlphaTxt"),"$isI")
break
case C.d:this.du=H.f(this.r.m(0,"alphaTxt"),"$isac")
this.bu=H.f(this.r.m(0,"nullAlphaTxt"),"$isI")
break}}this.c8=H.c([],[A.eJ])
this.c9=H.c([],[A.eK])
this.ca=H.c([],[A.eL])
this.cb=H.c([],[A.eM])
this.cc=H.c([],[A.eN])
this.cd=H.c([],[A.eO])
if(a1.k2){y=a1.z
if(y>0){this.dv=H.k(this.r.m(0,"dirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.c8;(x&&C.a).h(x,new A.eJ(m,l,k))}}y=a1.Q
if(y>0){this.dw=H.k(this.r.m(0,"pntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isS")
x=this.c9;(x&&C.a).h(x,new A.eK(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dz=H.k(this.r.m(0,"spotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isS")
x=this.ca;(x&&C.a).h(x,new A.eL(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dA=H.k(this.r.m(0,"txtDirLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isI")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isaj")
x=this.cb;(x&&C.a).h(x,new A.eM(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dB=H.k(this.r.m(0,"txtPntLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isd7")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isI")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isac")
x=this.cc;(x&&C.a).h(x,new A.eN(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dC=H.k(this.r.m(0,"txtSpotLightCount"),"$isI")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isH")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isH")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isH")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isH")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isI")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isH")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isaj")
x=this.cd;(x&&C.a).h(x,new A.eO(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ad:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dZ(c)
b.a.uniform1i(b.d,0)}},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hD:function(a,b){var z,y
z=a.at
y=new A.e2(b,z)
y.cD(b,z)
y.e6(a,b)
return y}}},hH:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aL,at,aM",
fv:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aL+"];\n"
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
fE:function(a){var z
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
fw:function(a){var z
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
fM:function(a){var z,y
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
fN:function(a){var z,y
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
fG:function(a){var z
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
fR:function(a){var z
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
ao:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cB(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fB:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ao(a,z,"emission")
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
fu:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ao(a,z,"ambient")
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
fz:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"diffuse")
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
fC:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"invDiffuse")
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
fK:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ao(a,z,"specular")
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
fF:function(a){var z,y
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
fI:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ao(a,z,"reflect")
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
fJ:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ao(a,z,"refract")
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
fA:function(a){var z,y
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
fH:function(a){var z,y
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
fL:function(a){var z,y
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
fO:function(a){var z,y,x
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
fP:function(a){var z,y,x
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
fQ:function(a){var z,y,x
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
fD:function(a){var z
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
i:function(a){return this.at}},eJ:{"^":"a;a,b,c"},eM:{"^":"a;a,b,c,d,e,f,r,x"},eK:{"^":"a;a,b,c,d,e,f,r"},eN:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eL:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eO:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},d0:{"^":"cz;",
cD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dE:function(a,b,c){var z,y,x
this.c=this.cQ(b,35633)
this.d=this.cQ(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fl(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.fk()
this.fm()},
Y:function(a){a.a.useProgram(this.e)
this.f.h6()},
cQ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fl(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fk:function(){var z,y,x,w,v,u
z=H.c([],[A.dt])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dt(y,v.name,u))}this.f=new A.fF(z)},
fm:function(){var z,y,x,w,v,u
z=H.c([],[A.a6])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.h3(v.type,v.size,v.name,u))}this.r=new A.j2(z)},
aC:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.I(z,y,b,c)
else return A.d6(z,y,b,a,c)},
er:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aj(z,y,b,c)
else return A.d6(z,y,b,a,c)},
es:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.d6(z,y,b,a,c)},
be:function(a,b){return new P.eX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
h3:function(a,b,c,d){switch(a){case 5120:return this.aC(b,c,d)
case 5121:return this.aC(b,c,d)
case 5122:return this.aC(b,c,d)
case 5123:return this.aC(b,c,d)
case 5124:return this.aC(b,c,d)
case 5125:return this.aC(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.iY(this.a,this.e,c,d)
case 35665:return new A.H(this.a,this.e,c,d)
case 35666:return new A.j0(this.a,this.e,c,d)
case 35667:return new A.iZ(this.a,this.e,c,d)
case 35668:return new A.j_(this.a,this.e,c,d)
case 35669:return new A.j1(this.a,this.e,c,d)
case 35674:return new A.j4(this.a,this.e,c,d)
case 35675:return new A.d7(this.a,this.e,c,d)
case 35676:return new A.aB(this.a,this.e,c,d)
case 35678:return this.er(b,c,d)
case 35680:return this.es(b,c,d)
case 35670:throw H.h(this.be("BOOL",c))
case 35671:throw H.h(this.be("BOOL_VEC2",c))
case 35672:throw H.h(this.be("BOOL_VEC3",c))
case 35673:throw H.h(this.be("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c7:{"^":"a;a,b",
i:function(a){return this.b}},ej:{"^":"d0;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a6:{"^":"a;"},j2:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
h8:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.h8("\n")}},I:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iZ:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},j_:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},j1:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iX:{"^":"a6;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
d6:function(a,b,c,d,e){var z=new A.iX(a,b,c,e)
z.f=d
z.e=P.hw(d,0,!1,P.A)
return z}}},S:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iY:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},H:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},j0:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},j4:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d7:{"^":"a6;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bI(H.w(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aB:{"^":"a6;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bI(H.w(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aj:{"^":"a6;a,b,c,d",
dZ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ac:{"^":"a6;a,b,c,d",
e_:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cq:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bH:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
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
z.d=y}l=F.cq(y)
k=F.cq(z.b)
j=F.fx(d,e,new F.kM(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.cm(j)},
lt:function(a,b,c,d){return F.l2(c,a,d,b,new F.lu())},
l2:function(a,b,c,d,e){var z=F.fx(a,b,new F.l3(H.b(e,{func:1,ret:V.W,args:[P.t]}),d,b,c),null)
if(z==null)return
z.ai()
z.hj(new F.jk(),new F.hS())
return z},
fx:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ak,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.d1()
y=H.c([],[F.ak])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.co(null,null,new V.as(u,0,0,1),null,null,new V.O(w,1),null,null,0)
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
t=F.co(null,null,new V.as(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c5(d))}}z.d.fT(a+1,b+1,y)
return z},
kM:{"^":"v:21;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cj(z.b,b).cj(z.d.cj(z.c,b),c)
a.sa0(0,new V.W(y.a,y.b,y.c))
a.shH(y.v(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.b_(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.M(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
lu:{"^":"v:36;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
l3:{"^":"v:21;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dq(y.$1(z),x)
x=J.dq(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.C(x)))
u=new V.E(1,0,0)
y=v.ar(!v.u(0,u)?new V.E(0,0,1):u)
t=y.v(0,Math.sqrt(y.C(y)))
y=t.ar(v)
u=y.v(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sa0(0,w.E(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ah:{"^":"a;0a,0b,0c,0d,0e",
as:function(){if(!this.gaW()){C.a.I(this.a.a.d.b,this)
this.a.a.a_()}this.bR()
this.bS()
this.f8()},
fh:function(a){this.a=a
C.a.h(a.d.b,this)},
fi:function(a){this.b=a
C.a.h(a.d.c,this)},
fj:function(a){this.c=a
C.a.h(a.d.d,this)},
bR:function(){var z=this.a
if(z!=null){C.a.I(z.d.b,this)
this.a=null}},
bS:function(){var z=this.b
if(z!=null){C.a.I(z.d.c,this)
this.b=null}},
f8:function(){var z=this.c
if(z!=null){C.a.I(z.d.d,this)
this.c=null}},
gaW:function(){return this.a==null||this.b==null||this.c==null},
el:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dF())return
return v.v(0,Math.sqrt(v.C(v)))},
eo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.C(z)))
z=w.L(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.ar(z.v(0,Math.sqrt(z.C(z))))
return z.v(0,Math.sqrt(z.C(z)))},
c3:function(){if(this.d!=null)return!0
var z=this.el()
if(z==null){z=this.eo()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
ek:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dF())return
return v.v(0,Math.sqrt(v.C(v)))},
en:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.L(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.L(0,u).j(0,l).E(0,u).L(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.C(z)))
z=k.ar(m)
z=z.v(0,Math.sqrt(z.C(z))).ar(k)
m=z.v(0,Math.sqrt(z.C(z)))}return m},
c1:function(){if(this.e!=null)return!0
var z=this.ek()
if(z==null){z=this.en()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
gfZ:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var z,y
if(this.gaW())return a+"disposed"
z=a+C.i.a9(J.a7(this.a.e),0)+", "+C.i.a9(J.a7(this.b.e),0)+", "+C.i.a9(J.a7(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.B("")},
n:{
bh:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.fh(a)
z.fi(b)
z.fj(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
h8:{"^":"a;"},
iu:{"^":"h8;",
aY:function(a,b,c){var z,y
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
cR:{"^":"a;0a,0b",
as:function(){if(!this.gaW()){C.a.I(this.a.a.c.b,this)
this.a.a.a_()}this.bR()
this.bS()},
bR:function(){var z=this.a
if(z!=null){C.a.I(z.c.b,this)
this.a=null}},
bS:function(){var z=this.b
if(z!=null){C.a.I(z.c.c,this)
this.b=null}},
gaW:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){if(this.gaW())return a+"disposed"
return a+C.i.a9(J.a7(this.a.e),0)+", "+C.i.a9(J.a7(this.b.e),0)},
J:function(){return this.B("")}},
hq:{"^":"a;"},
iW:{"^":"hq;",
aY:function(a,b,c){var z,y
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
cX:{"^":"a;0a",
as:function(){var z=this.a
if(z!=null){C.a.I(z.a.b.b,this)
this.a.a.a_()}this.f7()},
f7:function(){var z=this.a
if(z!=null){C.a.I(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a9(J.a7(z.e),0)},
J:function(){return this.B("")}},
ei:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
cm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.h2())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cX()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.A(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cR()
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
if(!(t==null))t.A(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bh(p,o,l)}z=this.e
if(!(z==null))z.ae(0)},
ai:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ai()||!1
if(!this.a.ai())y=!1
z=this.e
if(!(z==null))z.ae(0)
return y},
ex:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.ak],"$asd")
H.w(e,"$isd",[P.A],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aY(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hj:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ak],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.ex(a,v,y,u,t))b.cm(u)}this.a.w()
this.c.cr()
this.d.cr()
this.b.hz()
this.c.cs(new F.iW())
this.d.cs(new F.iu())
z=this.e
if(!(z==null))z.ae(0)},
d6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gcA(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dw])
for(r=0,q=0;q<w;++q){p=b.fW(q)
o=p.gcA(p)
C.a.a1(s,q,new Z.dw(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].hg(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a1(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bI(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cC(new Z.eU(34962,j),s,b)
i.b=H.c([],[Z.cd])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cd(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cd(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
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
C.a.h(h,g.e)}f=Z.d8(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cd(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.D(z,"\n")},
aO:function(a){var z=this.e
if(!(z==null))z.A(a)},
a_:function(){return this.aO(null)},
n:{
d1:function(){var z,y
z=new F.ei()
y=new F.jf(z)
y.b=!1
y.c=H.c([],[F.ak])
z.a=y
y=new F.ip(z)
y.b=H.c([],[F.cX])
z.b=y
y=new F.io(z)
y.b=H.c([],[F.cR])
z.c=y
y=new F.im(z)
y.b=H.c([],[F.ah])
z.d=y
z.e=null
return z}}},
im:{"^":"a;a,0b",
fS:function(a){var z,y,x,w,v
H.w(a,"$isd",[F.ak],"$asd")
z=H.c([],[F.ah])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bh(y,w,v))}return z},
fT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.ak],"$asd")
z=H.c([],[F.ah])
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
C.a.h(z,F.bh(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bh(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bh(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bh(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cs:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aY(0,v,t)){v.as()
break}}}}},
cr:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfZ(x)
if(y)x.as()}},
ai:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c3())x=!1
return x},
c2:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c1())x=!1
return x},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
J:function(){return this.B("")}},
io:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cs:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aY(0,v,t)){v.as()
break}}}}},
cr:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.as()}},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.D(z,"\n")},
J:function(){return this.B("")}},
ip:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hz:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.as()}},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
J:function(){return this.B("")}},
ak:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c5:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.co(this.cx,x,u,z,y,w,v,a,t)},
h2:function(){return this.c5(null)},
sa0:function(a,b){var z
if(!J.M(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a_()}},
shH:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
hg:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$aq())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aJ())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aK())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bD())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b4()))return H.c([this.ch],[P.t])
else if(z.u(a,$.$get$aG())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
c3:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.N(0,new F.jp(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
c1:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.N(0,new F.jo(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.i.a9(J.a7(this.e),0))
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
C.a.h(z,V.G(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
J:function(){return this.B("")},
n:{
co:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ak()
y=new F.jn(z)
y.b=H.c([],[F.cX])
z.b=y
y=new F.jj(z)
x=[F.cR]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.jg(z)
x=[F.ah]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eR()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$eS().a)!==0?c:null
z.ch=(x&$.$get$b4().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
jp:{"^":"v:6;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jo:{"^":"v:6;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
jf:{"^":"a;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
fU:function(a,b,c,d,e,f,g,h,i){var z=F.co(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bf:function(a,b,c,d,e,f){return this.fU(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ai:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c3()
return!0},
c2:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c1()
return!0},
fY:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
this.w()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
J:function(){return this.B("")}},
jg:{"^":"a;a,0b,0c,0d",
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
N:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.N(this.b,b)
C.a.N(this.c,new F.jh(this,b))
C.a.N(this.d,new F.ji(this,b))},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
J:function(){return this.B("")}},
jh:{"^":"v:6;a,b",
$1:function(a){H.k(a,"$isah")
if(!J.M(a.a,this.a))this.b.$1(a)}},
ji:{"^":"v:6;a,b",
$1:function(a){var z
H.k(a,"$isah")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
jj:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
J:function(){return this.B("")}},
jl:{"^":"a;"},
jk:{"^":"jl;",
aY:function(a,b,c){return J.M(b.f,c.f)}},
jm:{"^":"a;"},
hS:{"^":"jm;",
cm:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.ak],"$asd")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.C(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.M(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.A(null)}}}return}},
jn:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
J:function(){return this.B("")}}}],["","",,O,{"^":"",hE:{"^":"bZ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
T:[function(a){var z
H.k(a,"$ism")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.T(null)},"cG","$1","$0","gaA",0,2,0],
fb:[function(a){H.k(a,"$ism")
this.a=null
this.T(a)},function(){return this.fb(null)},"il","$1","$0","gfa",0,2,0],
hV:[function(a,b){var z=V.at
z=new D.bR(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.T(z)},"$2","geH",8,0,22],
hW:[function(a,b){var z=V.at
z=new D.bS(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.T(z)},"$2","geI",8,0,22],
cN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a3(z.e.length+3,4)*4
x=C.e.a3(z.f.length+3,4)*4
w=C.e.a3(z.r.length+3,4)*4
v=C.e.a3(z.x.length+3,4)*4
u=C.e.a3(z.y.length+3,4)*4
t=C.e.a3(z.z.length+3,4)*4
s=C.e.a3(this.e.a.length+3,4)*4
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
a6=$.$get$aq()
if(c){z=$.$get$aI()
a6=new Z.b3(a6.a|z.a)}if(b){z=$.$get$aH()
a6=new Z.b3(a6.a|z.a)}if(a){z=$.$get$aJ()
a6=new Z.b3(a6.a|z.a)}if(a0){z=$.$get$aK()
a6=new Z.b3(a6.a|z.a)}if(a2){z=$.$get$aG()
a6=new Z.b3(a6.a|z.a)}return new A.hH(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.w(a,"$isd",[T.cl],"$asd")
if(b!=null)if(!C.a.aV(a,b)){b.a=a.length
C.a.h(a,b)}},
ag:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.F();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cu(x)}}},
dL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cN()
y=H.k(a.fr.k(0,z.at),"$ise2")
if(y==null){y=A.hD(z,a.a)
a.d4(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aM
z=b.e
if(!(z instanceof Z.cC)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ai()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.c2()
u.a.c2()
u=u.e
if(!(u==null))u.ae(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fY()
t=t.e
if(!(t==null))t.ae(0)}r=b.d.d6(new Z.eV(a.a),w)
r.au($.$get$aq()).e=this.a.y.c
if(z)r.au($.$get$aI()).e=this.a.Q.c
if(v)r.au($.$get$aH()).e=this.a.z.c
if(x.rx)r.au($.$get$aJ()).e=this.a.ch.c
if(u)r.au($.$get$aK()).e=this.a.cx.c
if(x.x1)r.au($.$get$aG()).e=this.a.cy.c
b.e=r}z=T.cl
q=H.c([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx
u=u.gV(u)
v=v.db
v.toString
v.ab(u.a6(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gV(u)
t=a.dx
t=u.j(0,t.gV(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ab(u.a6(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghx()
t=a.dx
t=u.j(0,t.gV(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ab(u.a6(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ab(u.a6(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ab(u.a6(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ab(C.A.a6(u,!0))}if(x.aL>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.t],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isat")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bI(H.w(t.a6(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.R(q,this.f.d)
v=this.a
u=this.f.d
v.ad(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.f.e)
v=this.a
u=this.f.e
v.a7(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.R(q,this.r.d)
v=this.a
u=this.r.d
v.ad(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.r.e)
v=this.a
u=this.r.e
v.a7(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.R(q,this.x.d)
v=this.a
u=this.x.d
v.ad(v.aL,v.aM,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.x.e)
v=this.a
u=this.x.e
v.a7(v.at,v.aM,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.h:v=this.a
u=this.y.f
v=v.bi
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.R(q,this.y.d)
v=this.a
u=this.y.d
v.ad(v.df,v.bj,u)
u=this.a
v=this.y.f
u=u.bi
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.R(q,this.y.e)
v=this.a
u=this.y.e
v.a7(v.dg,v.bj,u)
u=this.a
v=this.y.f
u=u.bi
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.h:v=this.a
u=this.z.f
v=v.bk
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bm
u.a.uniform1f(u.d,s)
break
case C.c:this.R(q,this.z.d)
v=this.a
u=this.z.d
v.ad(v.dh,v.bl,u)
u=this.a
v=this.z.f
u=u.bk
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bm
v.a.uniform1f(v.d,s)
break
case C.d:this.R(q,this.z.e)
v=this.a
u=this.z.e
v.a7(v.di,v.bl,u)
u=this.a
v=this.z.f
u=u.bk
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bm
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cu(j.a)
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
m=v.gV(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c9
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb0(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcw(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b6(j.gb0(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gaj(j)
g=i.d
h=t.gbw()
s=t.gb7()
t=t.gbg()
g.a.uniform3f(g.d,h,s,t)
t=j.gbX()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbY()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbZ()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.ca
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb0(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcw(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc7(j).is()
g=i.c
h=t.gaI(t)
s=t.gaJ(t)
t=t.gaK()
g.a.uniform3f(g.d,h,s,t)
t=m.b6(j.gb0(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaj(j)
s=i.e
h=t.gbw()
g=t.gb7()
t=t.gbg()
s.a.uniform3f(s.d,h,g,t)
t=j.gir()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giq()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbX()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbY()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbZ()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.cb
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb3()
H.w(q,"$isd",t,"$asd")
if(!C.a.aV(q,s)){s.saR(q.length)
C.a.h(q,s)}s=j.gc7(j)
h=i.d
g=s.gaI(s)
f=s.gaJ(s)
s=s.gaK()
h.a.uniform3f(h.d,g,f,s)
s=j.gbx()
f=i.b
g=s.gaI(s)
h=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,h,s)
s=j.gb1(j)
h=i.c
g=s.gaI(s)
f=s.gaJ(s)
s=s.gaK()
h.a.uniform3f(h.d,g,f,s)
s=m.cu(j.gc7(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gaj(j)
g=i.f
f=h.gbw()
s=h.gb7()
h=h.gbg()
g.a.uniform3f(g.d,f,s,h)
h=j.gb3()
s=h.gdG(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcS()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaR())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dB
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.y,u=v.length,t=[P.t],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cc
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb3()
H.w(q,"$isd",s,"$asd")
if(!C.a.aV(q,h)){h.saR(q.length)
C.a.h(q,h)}e=m.j(0,j.gV(j))
h=j.gV(j).b6(new V.W(0,0,0))
g=i.b
f=h.gp(h)
d=h.gq(h)
h=h.gcw(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b6(new V.W(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cg(0)
d=i.d
n=new Float32Array(H.bI(H.w(new V.cg(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a6(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gaj(j)
h=i.e
f=d.gbw()
g=d.gb7()
d=d.gbg()
h.a.uniform3f(h.d,f,g,d)
d=j.gb3()
h=d.gdG(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcS()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaR())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbX()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbY()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbZ()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dC
v.a.uniform1i(v.d,p)
v=a.db
m=v.gV(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cd
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb3()
H.w(q,"$isd",z,"$asd")
if(!C.a.aV(q,t)){t.saR(q.length)
C.a.h(q,t)}t=j.gb0(j)
s=i.b
h=t.gp(t)
g=t.gq(t)
t=t.gcw(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc7(j)
g=i.c
h=t.gaI(t)
s=t.gaJ(t)
t=t.gaK()
g.a.uniform3f(g.d,h,s,t)
t=j.gbx()
s=i.d
h=t.gaI(t)
g=t.gaJ(t)
t=t.gaK()
s.a.uniform3f(s.d,h,g,t)
t=j.gb1(j)
g=i.e
h=t.gaI(t)
s=t.gaJ(t)
t=t.gaK()
g.a.uniform3f(g.d,h,s,t)
t=m.b6(j.gb0(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb3()
s=t.gdG(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcS()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaR())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gaj(j)
s=i.y
h=t.gbw()
g=t.gb7()
t=t.gbg()
s.a.uniform3f(s.d,h,g,t)
t=j.gix()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giy()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbX()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbY()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbZ()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.h:break
case C.c:this.R(q,this.Q.d)
z=this.a
v=this.Q.d
z.ad(z.dj,z.bn,v)
break
case C.d:this.R(q,this.Q.e)
z=this.a
v=this.Q.e
z.a7(z.dk,z.bn,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gV(v).cg(0)
a.Q=v}z=z.fy
z.toString
z.ab(v.a6(0,!0))}if(x.dy){this.R(q,this.ch)
z=this.a
v=this.ch
z.a7(z.dl,z.dm,v)
switch(x.r){case C.b:break
case C.h:z=this.a
v=this.cx.f
z=z.bo
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.R(q,this.cx.d)
z=this.a
v=this.cx.d
z.ad(z.dn,z.bp,v)
v=this.a
z=this.cx.f
v=v.bo
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.R(q,this.cx.e)
z=this.a
v=this.cx.e
z.a7(z.dq,z.bp,v)
v=this.a
z=this.cx.f
v=v.bo
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.h:z=this.a
v=this.cy.f
z=z.br
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bq
v.a.uniform1f(v.d,t)
break
case C.c:this.R(q,this.cy.d)
z=this.a
v=this.cy.d
z.ad(z.dr,z.bs,v)
v=this.a
z=this.cy.f
v=v.br
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,t)
break
case C.d:this.R(q,this.cy.e)
z=this.a
v=this.cy.e
z.a7(z.ds,z.bs,v)
v=this.a
z=this.cy.f
v=v.br
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.h:z=this.a
u=this.db.f
z=z.bt
z.a.uniform1f(z.d,u)
break
case C.c:this.R(q,this.db.d)
z=this.a
u=this.db.d
z.ad(z.dt,z.bu,u)
u=this.a
z=this.db.f
u=u.bt
u.a.uniform1f(u.d,z)
break
case C.d:this.R(q,this.db.e)
z=this.a
u=this.db.e
z.a7(z.du,z.bu,u)
u=this.a
z=this.db.f
u=u.bt
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.Y(a)
z.a5(a)
z.af(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dc()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cN().at},
n:{
e3:function(){var z,y,x,w
z=new O.hE()
y=O.cG(V.at)
z.e=y
y.aQ(z.geH(),z.geI())
y=new O.aY(z,"emission")
y.c=C.b
y.f=new V.V(0,0,0)
z.f=y
y=new O.aY(z,"ambient")
y.c=C.b
y.f=new V.V(0,0,0)
z.r=y
y=new O.aY(z,"diffuse")
y.c=C.b
y.f=new V.V(0,0,0)
z.x=y
y=new O.aY(z,"invDiffuse")
y.c=C.b
y.f=new V.V(0,0,0)
z.y=y
y=new O.hJ(z,"specular")
y.c=C.b
y.f=new V.V(0,0,0)
y.ch=100
z.z=y
y=new O.hG(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.aY(z,"reflect")
y.c=C.b
y.f=new V.V(0,0,0)
z.cx=y
y=new O.hI(z,"refract")
y.c=C.b
y.f=new V.V(0,0,0)
y.ch=1
z.cy=y
y=new O.hF(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.hp()
y.b9(D.X)
y.e=H.c([],[D.c9])
y.f=H.c([],[D.hX])
y.r=H.c([],[D.iy])
y.x=H.c([],[D.iK])
y.y=H.c([],[D.iL])
y.z=H.c([],[D.iM])
y.Q=null
y.ch=null
y.cz(y.geG(),y.geZ(),y.gf0())
z.dx=y
x=y.Q
if(x==null){x=D.F()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.m]}
w=H.b(z.gfa(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.F()
w.ch=y}x=H.b(z.gaA(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},hF:{"^":"cS;0f,a,b,0c,0d,0e"},cS:{"^":"a;",
T:[function(a){this.a.T(H.k(a,"$ism"))},function(){return this.T(null)},"cG","$1","$0","gaA",0,2,0],
aS:["e4",function(){}],
ff:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gaA(),{func:1,ret:-1,args:[D.m]})
C.a.I(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gaA(),{func:1,ret:-1,args:[D.m]})
C.a.h(z.a,y)}z=new D.C(this.b+".texture2D",x,this.d,this,[T.ep])
z.b=!0
this.a.T(z)}},
fg:function(a){}},hG:{"^":"cS;a,b,0c,0d,0e"},aY:{"^":"cS;0f,a,b,0c,0d,0e",
cZ:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.C(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.T(y)}},
aS:["bB",function(){this.e4()
this.cZ(new V.V(1,1,1))}],
saj:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.aS()
z=this.a
z.a=null
z.T(null)}this.cZ(b)}},hI:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
fe:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.T(z)}},
aS:function(){this.bB()
this.fe(1)}},hJ:{"^":"aY;0ch,0f,a,b,0c,0d,0e",
bT:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.T(z)}},
aS:function(){this.bB()
this.bT(100)}},iv:{"^":"bZ;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
T:[function(a){var z
H.k(a,"$ism")
z=this.e
if(!(z==null))z.A(a)},function(){return this.T(null)},"cG","$1","$0","gaA",0,2,0],
dL:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.k(0,"Skybox"),"$isej")
if(z==null){y=a.a
z=new A.ej(y,"Skybox")
z.cD(y,"Skybox")
z.dE(0,$.ix,$.iw)
z.x=z.f.k(0,"posAttr")
z.y=H.f(z.r.k(0,"fov"),"$isS")
z.z=H.f(z.r.k(0,"ratio"),"$isS")
z.Q=H.f(z.r.k(0,"boxClr"),"$isH")
z.ch=H.f(z.r.k(0,"boxTxt"),"$isac")
z.cx=H.f(z.r.k(0,"viewMat"),"$isaB")
a.d4(z)}this.a=z}if(b.e==null){y=b.d.d6(new Z.eV(a.a),$.$get$aq())
y.au($.$get$aq()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.Y(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.e_(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gV(x).cg(0)
w=w.cx
w.toString
w.ab(x.a6(0,!0))
y=b.e
if(y instanceof Z.cC){y.Y(a)
y.a5(a)
y.af(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dc()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bZ:{"^":"a;"}}],["","",,T,{"^":"",cl:{"^":"cz;"},ep:{"^":"cl;0b,0c,0d,0e,0f,0r,0x,0y,a",n:{
eq:function(a,b){var z=new T.ep(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.F()
return z}}},er:{"^":"cl;0b,0c,0d,0e,a"},iI:{"^":"a;a,0b,0c,0d,0e",
aD:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a8
W.Y(z,"load",H.b(new T.iJ(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fc:function(a,b,c){var z,y,x,w
b=V.bO(b,2)
z=V.bO(a.width,2)
y=V.bO(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cE(null,null)
x.width=z
x.height=y
w=H.k(C.k.dV(x,"2d"),"$isdy")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.l1(w.getImageData(0,0,x.width,x.height))}}},iJ:{"^":"v:23;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fc(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hG(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.de();++z.e}}}],["","",,V,{"^":"",fD:{"^":"a;",
aX:function(a,b){return!0},
i:function(a){return"all"},
$isbW:1},bW:{"^":"a;"},e1:{"^":"a;",
aX:["e3",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aX(0,b))return!0
return!1}],
i:["cC",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbW:1},br:{"^":"e1;0a",
aX:function(a,b){return!this.e3(0,b)},
i:function(a){return"!["+this.cC(0)+"]"}},ik:{"^":"a;0a",
e8:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.A,P.ae])
for(y=new H.dZ(a,a.gl(a),0,[H.aC(a,"u",0)]);y.F();)z.a1(0,y.d,!0)
this.a=z},
aX:function(a,b){return this.a.d8(0,b)},
i:function(a){var z=this.a
return P.d3(new H.dY(z,[H.z(z,0)]),0,null)},
$isbW:1,
n:{
a2:function(a){var z=new V.ik()
z.e8(a)
return z}}},el:{"^":"a;a,b,0c,0d",
ghk:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ex(this.a.K(0,b))
w.a=H.c([],[V.bW])
w.c=!1
C.a.h(this.c,w)
return w},
h7:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aX(0,a))return w}return},
i:function(a){return this.b}},eu:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fw(this.b,"\n","\\n")
y=H.fw(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ev:{"^":"a;a,b,0c",
i:function(a){return this.b}},iS:{"^":"a;0a,0b,0c",
K:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.el(this,b)
z.c=H.c([],[V.ex])
this.a.a1(0,b,z)}return z},
b4:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ev(this,a)
y=P.o
z.c=new H.aX(0,0,[y,y])
this.b.a1(0,a,z)}return z},
hM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eu])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.ba(a,t)
r=y.h7(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d3(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.ghk(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d3(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eu(o==null?p.b:o,q,t)}++t}}}},ex:{"^":"e1;b,0c,0a",
i:function(a){return this.b.b+": "+this.cC(0)}}}],["","",,X,{"^":"",fH:{"^":"ck;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gt:function(){var z=this.db
if(z==null){z=D.F()
this.db=z}return z},
am:function(a){var z=this.db
if(!(z==null))z.A(a)},
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.Z(z.getParameter(3379))
u=V.bO(x,2)
t=V.bO(w,2)
v=V.bO(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dO(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.eq(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.de()}y.b=r.b
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
a.c=C.e.W(y*this.a)
x=z.d
a.d=C.e.W(x*this.b)
w=this.c
q=C.e.W(z.a*w)
p=this.d
o=C.e.W(z.b*p)
n=C.e.W(y*w)
m=C.e.W(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
af:function(a){a.a.bindFramebuffer(36160,null)}},c6:{"^":"a;",$isax:1},hd:{"^":"ck;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
Y:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.e.W(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.e.W(w.b*x)
t=C.e.W(w.c*y)
a.c=t
w=C.e.W(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
af:function(a){},
n:{
dN:function(a,b,c,d,e,f,g){var z,y
z=new X.hd()
y=new V.as(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.cY(0,0,1,1)
z.r=y
return z}}},hf:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
Y:function(a){var z
a.cy.bv(V.aZ())
z=V.aZ()
a.db.bv(z)},
af:function(a){a.cy.aw()
a.db.aw()},
$isax:1,
$isc6:1},hV:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
am:[function(a){var z
H.k(a,"$ism")
z=this.e
if(!(z==null))z.A(a)},function(){return this.am(null)},"hP","$1","$0","geh",0,2,0],
Y:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bv(V.au(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.ec
if(z==null){z=V.e4(new V.W(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.ec=z
r=z}else r=z
z=this.a
if(z!=null){q=z.ax(0,a,this)
if(q!=null)r=q.j(0,r)}a.db.bv(r)},
af:function(a){a.cy.aw()
a.db.aw()},
$isax:1,
$isc6:1,
n:{
cW:function(a,b,c,d){var z,y,x,w
z=new X.hV()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.b(z.geh(),{func:1,ret:-1,args:[D.m]})
C.a.h(x.a,w)}x=new D.C("mover",y,z.a,z,[U.a5])
x.b=!0
z.am(x)}x=z.b
if(!$.l.$2(x,b)){y=z.b
z.b=b
x=new D.C("fov",y,b,z,[P.t])
x.b=!0
z.am(x)}x=z.c
if(!$.l.$2(x,d)){y=z.c
z.c=d
x=new D.C("near",y,d,z,[P.t])
x.b=!0
z.am(x)}x=z.d
if(!$.l.$2(x,a)){y=z.d
z.d=a
x=new D.C("far",y,a,z,[P.t])
x.b=!0
z.am(x)}return z}}},ck:{"^":"a;"}}],["","",,V,{"^":"",
lq:function(a){P.iR(C.x,new V.lr(a))},
lr:{"^":"v:38;a",
$1:function(a){H.k(a,"$isb1")
P.dp(C.f.dQ(this.a.gh9(),2)+" fps")}},
iq:{"^":"a;0a,0b",
e9:function(a,b){var z,y,x,w,v,u,t
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
t=W.a8
W.Y(z,"scroll",H.b(new V.it(x),{func:1,ret:-1,args:[t]}),!1,t)},
fV:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.o],"$asd")
this.fl()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hM(C.a.he(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fv(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kz(C.I,s,C.r,!1)
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
fl:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iS()
y=P.o
z.a=new H.aX(0,0,[y,V.el])
z.b=new H.aX(0,0,[y,V.ev])
z.c=z.K(0,"Start")
y=z.K(0,"Start").D(0,"Bold")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").D(0,"Bold")
x=new V.br()
w=[V.bW]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").D(0,"BoldEnd")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").D(0,"Italic")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").D(0,"Italic")
x=new V.br()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").D(0,"ItalicEnd")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").D(0,"Code")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").D(0,"Code")
x=new V.br()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").D(0,"CodeEnd")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").D(0,"LinkHead")
x=V.a2(new H.a0("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").D(0,"LinkTail")
x=V.a2(new H.a0("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").D(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").D(0,"LinkHead")
y=new V.br()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").D(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").D(0,"LinkTail")
y=new V.br()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").D(0,"Other").a,new V.fD())
x=z.K(0,"Other").D(0,"Other")
y=new V.br()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.b4("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.b4("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.b4("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.b4("Link")
x=z.K(0,"Other")
x.d=x.a.b4("Other")
this.b=z},
n:{
ir:function(a,b){var z=new V.iq()
z.e9(a,!0)
return z}}},
it:{"^":"v:23;a",
$1:function(a){P.iQ(C.m,new V.is(this.a))}},
is:{"^":"v:2;a",
$0:function(){var z,y,x
z=C.f.W(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,V,{"^":"",
fr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
z=V.ir("Test 027",!0)
y=W.cE(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fV(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],[P.o]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.iO(x,!0,!0,!0,!1)
v=U.dP(null)
z=new U.eh()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sdR(0)
z.sdK(0,0)
z.sdM(0)
u=z.d
if(!$.l.$2(u,0.1)){t=z.d
z.d=0.1
u=new D.C("deltaYaw",t,0.1,z,[P.t])
u.b=!0
z.H(u)}u=z.e
if(!$.l.$2(u,0.21)){t=z.e
z.e=0.21
u=new D.C("deltaPitch",t,0.21,z,[P.t])
u.b=!0
z.H(u)}u=z.f
if(!$.l.$2(u,0.32)){t=z.f
z.f=0.32
u=new D.C("deltaRoll",t,0.32,z,[P.t])
u.b=!0
z.H(u)}v.h(0,z)
v.h(0,U.cI(V.e8(0,0,5)))
s=X.cW(2000,1.0471975511965976,v,0.1)
r=new X.fH()
r.a=512
r.b=512
r.c=512
r.d=512
r.e=!0
r.y=T.eq(0,null)
r.z=new V.as(0,0,0,1)
r.Q=!0
r.ch=2000
r.cx=!0
r.cy=V.cY(0,0,1,1)
r.Q=!1
z=[P.ae]
u=new D.C("clearColor",!0,!1,r,z)
u.b=!0
r.am(u)
u=w.f
q=u.a
p=q.createTexture()
q.bindTexture(34067,p)
q.texParameteri(34067,10242,10497)
q.texParameteri(34067,10243,10497)
q.texParameteri(34067,10241,9729)
q.texParameteri(34067,10240,9729)
q.bindTexture(34067,null)
o=new T.er(0)
o.b=p
o.c=!1
o.d=0
o.e=D.F()
u.aD(o,p,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aD(o,p,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aD(o,p,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aD(o,p,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aD(o,p,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aD(o,p,"../resources/maskonaive/negz.jpg",34074,!1,!1)
n=new M.fT()
n.saG(null)
n.sb2(0,null)
n.saP(null)
u=E.cK(null,!0,null,"",null,null)
m=F.d1()
q=m.a
l=new V.E(-1,-1,1)
l=l.v(0,Math.sqrt(l.C(l)))
k=q.bf(new V.b_(1,2,4,6),new V.as(1,0,0,1),new V.W(-1,-1,0),new V.O(0,1),l,null)
q=m.a
l=new V.E(1,-1,1)
l=l.v(0,Math.sqrt(l.C(l)))
j=q.bf(new V.b_(0,3,4,6),new V.as(0,0,1,1),new V.W(1,-1,0),new V.O(1,1),l,null)
q=m.a
l=new V.E(1,1,1)
l=l.v(0,Math.sqrt(l.C(l)))
i=q.bf(new V.b_(0,2,5,6),new V.as(0,1,0,1),new V.W(1,1,0),new V.O(1,0),l,null)
q=m.a
l=new V.E(-1,1,1)
l=l.v(0,Math.sqrt(l.C(l)))
h=q.bf(new V.b_(0,2,4,7),new V.as(1,1,0,1),new V.W(-1,1,0),new V.O(0,0),l,null)
m.d.fS(H.c([k,j,i,h],[F.ak]))
m.ai()
u.sb8(0,m)
n.d=u
n.e=null
u=new O.iv()
u.b=1.0471975511965976
t=u.c
u.c=o
q=o.e
l=H.b(u.gaA(),{func:1,ret:-1,args:[D.m]})
C.a.h(q.a,l)
q=new D.C("boxTexture",t,u.c,u,[T.er])
q.b=!0
u.T(q)
g=new V.V(1,1,1)
if(!J.M(u.d,g)){t=u.d
u.d=g
q=new D.C("boxColor",t,g,u,[V.V])
q.b=!0
u.T(q)}u.e=null
n.saP(u)
n.sb2(0,r)
n.saG(s)
f=E.cK(null,!0,null,"",null,null)
f.sb8(0,F.lt(30,1,15,0.5))
e=O.e3()
u=e.dx
q=U.cI(V.e4(new V.W(0,0,0),new V.E(0,1,0),new V.E(0,-1,-1)))
g=new V.V(1,1,1)
l=new D.c9()
l.c=new V.V(1,1,1)
l.a=new V.E(0,0,1)
t=l.b
l.b=q
q=q.gt()
q.toString
d=H.b(l.ged(),{func:1,ret:-1,args:[D.m]})
C.a.h(q.a,d)
q=new D.C("mover",t,l.b,l,[U.a5])
q.b=!0
l.az(q)
if(!l.c.u(0,g)){t=l.c
l.c=g
q=new D.C("color",t,g,l,[V.V])
q.b=!0
l.az(q)}u.h(0,l)
u=e.r
u.saj(0,new V.V(0,0,1))
u=e.x
u.saj(0,new V.V(0,1,0))
u=e.z
u.saj(0,new V.V(1,0,0))
u=e.z
if(u.c===C.b){u.c=C.h
u.bB()
u.bT(100)
q=u.a
q.a=null
q.T(null)}u.bT(10)
c=M.dL(null,null,null,null)
c.saG(s)
c.saP(e)
c.sb2(0,r)
c.d.h(0,f)
b=U.dP(null)
u=w.r
q=new U.jb()
l=U.cH()
l.scv(0,!0)
l.sck(6.283185307179586)
l.scn(0)
l.sa0(0,0)
l.scl(100)
l.sO(0)
l.sc6(0.5)
q.b=l
l=l.gt()
l.toString
d={func:1,ret:-1,args:[D.m]}
a=H.b(q.gaE(),d)
C.a.h(l.a,a)
l=U.cH()
l.scv(0,!0)
l.sck(6.283185307179586)
l.scn(0)
l.sa0(0,0)
l.scl(100)
l.sO(0)
l.sc6(0.5)
q.c=l
C.a.h(l.gt().a,a)
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
a0=new X.av(!1,!1,!1)
t=q.d
q.d=a0
l=[X.av]
a=new D.C("modifiers",t,a0,q,l)
a.b=!0
q.H(a)
a=q.f
if(a!==!1){q.f=!1
a=new D.C("invertX",a,!1,q,z)
a.b=!0
q.H(a)}a=q.r
if(a!==!1){q.r=!1
z=new D.C("invertY",a,!1,q,z)
z.b=!0
q.H(z)}q.aU(u)
b.h(0,q)
z=w.r
u=new U.ja()
q=U.cH()
q.scv(0,!0)
q.sck(6.283185307179586)
q.scn(0)
q.sa0(0,0)
q.scl(100)
q.sO(0)
q.sc6(0.2)
u.b=q
q=q.gt()
q.toString
a=H.b(u.gaE(),d)
C.a.h(q.a,a)
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
a0=new X.av(!0,!1,!1)
t=u.c
u.c=a0
q=new D.C("modifiers",t,a0,u,l)
q.b=!0
u.H(q)
u.aU(z)
b.h(0,u)
z=w.r
u=new U.jc()
u.c=0.01
u.d=0
u.e=0
a0=new X.av(!1,!1,!1)
u.b=a0
q=new D.C("modifiers",null,a0,u,l)
q.b=!0
u.H(q)
u.aU(z)
b.h(0,u)
b.h(0,U.cI(V.e8(0,0,5)))
a1=X.cW(2000,1.0471975511965976,b,0.1)
a2=E.cK(null,!0,null,"",null,null)
m=F.d1()
F.bH(m,null,null,1,1,1,0,0,1)
F.bH(m,null,null,1,1,0,1,0,3)
F.bH(m,null,null,1,1,0,0,1,2)
F.bH(m,null,null,1,1,-1,0,0,0)
F.bH(m,null,null,1,1,0,-1,0,0)
F.bH(m,null,null,1,1,0,0,-1,3)
m.ai()
a2.sb8(0,m)
a3=O.e3()
z=a3.f
u=r.y
q=z.c
if(q!==C.c){if(q===C.b)z.aS()
z.c=C.c
z.fg(null)
q=z.a
q.a=null
q.T(null)}z.ff(u)
a4=M.dL(null,null,null,null)
a4.saG(a1)
a4.saP(a3)
a4.d.h(0,a2)
z=M.ay
u=H.c([n,c,a4],[z])
q=new M.fR()
q.b9(z)
q.e=!1
q.f=null
q.aQ(q.gf1(),q.gf2())
q.bW(0,u)
z=w.d
if(z!==q){if(z!=null){z=z.gt()
z.toString
u=H.b(w.gcE(),d)
C.a.I(z.a,u)}w.d=q
z=q.gt()
z.toString
d=H.b(w.gcE(),d)
C.a.h(z.a,d)
w.eb()}V.lq(w)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.dS.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.hk.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.c1=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.dj=function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.l7=function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cn.prototype
return a}
J.l8=function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cn.prototype
return a}
J.c2=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.fz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l7(a).aa(a,b)}
J.dq=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l8(a).j(a,b)}
J.fA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lh(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c1(a).k(a,b)}
J.fB=function(a,b,c,d){return J.c2(a).d3(a,b,c,d)}
J.cy=function(a,b,c){return J.c1(a).h_(a,b,c)}
J.dr=function(a,b){return J.dj(a).G(a,b)}
J.fC=function(a,b){return J.dj(a).N(a,b)}
J.aD=function(a){return J.K(a).gU(a)}
J.bP=function(a){return J.dj(a).gZ(a)}
J.bd=function(a){return J.c1(a).gl(a)}
J.a7=function(a){return J.K(a).i(a)}
I.dm=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cD.prototype
C.y=J.n.prototype
C.a=J.aW.prototype
C.z=J.dS.prototype
C.e=J.dT.prototype
C.A=J.dU.prototype
C.f=J.bT.prototype
C.i=J.ce.prototype
C.H=J.bU.prototype
C.J=H.hQ.prototype
C.K=W.hR.prototype
C.p=J.hW.prototype
C.q=P.cZ.prototype
C.l=J.cn.prototype
C.t=W.bE.prototype
C.u=W.js.prototype
C.v=new P.hU()
C.w=new P.je()
C.j=new P.kd()
C.b=new A.c7(0,"ColorSourceType.None")
C.h=new A.c7(1,"ColorSourceType.Solid")
C.c=new A.c7(2,"ColorSourceType.Texture2D")
C.d=new A.c7(3,"ColorSourceType.TextureCube")
C.m=new P.aU(0)
C.x=new P.aU(5e6)
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
C.I=H.c(I.dm([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=new P.jd(!1)
$.ar=0
$.be=null
$.du=null
$.dc=!1
$.fo=null
$.fi=null
$.fu=null
$.ct=null
$.cv=null
$.dk=null
$.b6=null
$.bJ=null
$.bK=null
$.dd=!1
$.P=C.j
$.dI=null
$.dH=null
$.dG=null
$.dF=null
$.l=V.hK()
$.ix="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iw="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ec=null
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
I.$lazy(y,x,w)}})(["dE","$get$dE",function(){return H.fn("_$dart_dartClosure")},"cO","$get$cO",function(){return H.fn("_$dart_js")},"ey","$get$ey",function(){return H.az(H.cm({
toString:function(){return"$receiver$"}}))},"ez","$get$ez",function(){return H.az(H.cm({$method$:null,
toString:function(){return"$receiver$"}}))},"eA","$get$eA",function(){return H.az(H.cm(null))},"eB","$get$eB",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.az(H.cm(void 0))},"eG","$get$eG",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eD","$get$eD",function(){return H.az(H.eE(null))},"eC","$get$eC",function(){return H.az(function(){try{null.$method$}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.az(H.eE(void 0))},"eH","$get$eH",function(){return H.az(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d9","$get$d9",function(){return P.jt()},"bL","$get$bL",function(){return[]},"fc","$get$fc",function(){return P.i9("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dD","$get$dD",function(){return{}},"eT","$get$eT",function(){return Z.al(0)},"eR","$get$eR",function(){return Z.al(511)},"aq","$get$aq",function(){return Z.al(1)},"aI","$get$aI",function(){return Z.al(2)},"aH","$get$aH",function(){return Z.al(4)},"aJ","$get$aJ",function(){return Z.al(8)},"aK","$get$aK",function(){return Z.al(16)},"bC","$get$bC",function(){return Z.al(32)},"bD","$get$bD",function(){return Z.al(64)},"eS","$get$eS",function(){return Z.al(96)},"b4","$get$b4",function(){return Z.al(128)},"aG","$get$aG",function(){return Z.al(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.m]},{func:1,ret:-1,args:[D.m]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.J,args:[F.ah]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.e,E.aF]]},{func:1,ret:P.J,args:[D.m]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.A,[P.e,D.X]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.A,[P.e,U.a5]]},{func:1,ret:-1,args:[P.A,[P.e,M.ay]]},{func:1,ret:P.J,args:[F.ak,P.t,P.t]},{func:1,ret:-1,args:[P.A,[P.e,V.at]]},{func:1,ret:P.J,args:[W.a8]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.ae,args:[W.L]},{func:1,ret:W.a1,args:[W.L]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.J,args:[P.T]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.m]}]},{func:1,ret:-1,args:[P.a],opt:[P.ap]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.ae,args:[P.t,P.t]},{func:1,ret:P.ae,args:[[P.e,D.X]]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:V.W,args:[P.t]},{func:1,ret:[P.aL,,],args:[,]},{func:1,ret:P.J,args:[P.b1]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.ls(d||a)
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
Isolate.dm=a.dm
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
if(typeof dartMainRunner==="function")dartMainRunner(V.fr,[])
else V.fr([])})})()
//# sourceMappingURL=test.dart.js.map
