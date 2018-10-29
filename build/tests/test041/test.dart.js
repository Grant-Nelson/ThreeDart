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
var dart=[["","",,H,{"^":"",lZ:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cx:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dk==null){H.lg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eS("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cO()]
if(v!=null)return v
v=H.ll(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cO(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
r:{"^":"a;",
q:function(a,b){return a===b},
gW:function(a){return H.bs(a)},
j:["ea",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hp:{"^":"r;",
j:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isa7:1},
dZ:{"^":"r;",
q:function(a,b){return null==b},
j:function(a){return"null"},
gW:function(a){return 0},
$isK:1},
cP:{"^":"r;",
gW:function(a){return 0},
j:["eb",function(a){return String(a)}]},
i1:{"^":"cP;"},
d5:{"^":"cP;"},
bU:{"^":"cP;",
j:function(a){var z=a[$.$get$dI()]
if(z==null)return this.eb(a)
return"JavaScript function for "+H.k(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscK:1},
aZ:{"^":"r;$ti",
h:function(a,b){H.E(b,H.A(a,0))
if(!!a.fixed$length)H.q(P.af("add"))
a.push(b)},
E:function(a,b){var z
if(!!a.fixed$length)H.q(P.af("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
aR:function(a,b){var z,y
H.w(b,"$isf",[H.A(a,0)],"$asf")
if(!!a.fixed$length)H.q(P.af("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bf(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a1(z,y,H.k(a[y]))
return z.join(b)},
ho:function(a){return this.D(a,"")},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bH:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.am(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.am(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.A(a,0)])
return H.b(a.slice(b,c),[H.A(a,0)])},
gck:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.hn())},
ar:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
j:function(a){return P.cL(a,"[","]")},
gY:function(a){return new J.ah(a,a.length,0,[H.A(a,0)])},
gW:function(a){return H.bs(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.af("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c5(b,"newLength",null))
if(b<0)throw H.h(P.am(b,0,null,"newLength",null))
a.length=b},
a1:function(a,b,c){H.W(b)
H.E(c,H.A(a,0))
if(!!a.immutable$list)H.q(P.af("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aU(a,b))
if(b>=a.length||b<0)throw H.h(H.aU(a,b))
a[b]=c},
$isf:1,
$isd:1,
p:{
ho:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.am(a,0,4294967295,"length",null))
return J.dW(new Array(a),b)},
dW:function(a,b){return J.bn(H.b(a,[b]))},
bn:function(a){H.bN(a)
a.fixed$length=Array
return a}}},
lY:{"^":"aZ;$ti"},
ah:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ce:{"^":"r;",
ghn:function(a){return a===0?1/a<0:a<0},
hX:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.af(""+a+".toInt()"))},
aU:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.af(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.af(""+a+".round()"))},
dX:function(a,b){var z
if(b>20)throw H.h(P.am(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghn(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.h(H.aG(b))
return a*b},
aP:function(a,b){var z
if(typeof b!=="number")throw H.h(H.aG(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ed:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d0(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.d0(a,b)},
d0:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.af("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bc:function(a,b){var z
if(a>0)z=this.fA(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fA:function(a,b){return b>31?0:a>>>b},
ao:function(a,b){if(typeof b!=="number")throw H.h(H.aG(b))
return a<b},
$isn:1,
$isX:1},
dY:{"^":"ce;",$isB:1},
dX:{"^":"ce;"},
cN:{"^":"r;",
ca:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aU(a,b))
if(b<0)throw H.h(H.aU(a,b))
if(b>=a.length)H.q(H.aU(a,b))
return a.charCodeAt(b)},
b7:function(a,b){if(b>=a.length)throw H.h(H.aU(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.R(b)
if(typeof b!=="string")throw H.h(P.c5(b,null,null))
return a+b},
bI:function(a,b,c){H.W(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cj(b,null,null))
if(b>c)throw H.h(P.cj(b,null,null))
if(c>a.length)throw H.h(P.cj(c,null,null))
return a.substring(b,c)},
cA:function(a,b){return this.bI(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hD:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ag:function(a,b){return this.hD(a,b," ")},
h9:function(a,b,c){if(c>a.length)throw H.h(P.am(c,0,a.length,null,null))
return H.fu(a,b,c)},
j:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isee:1,
$isp:1}}],["","",,H,{"^":"",
hn:function(){return new P.iB("No element")},
a_:{"^":"j9;a",
gl:function(a){return this.a.length},
i:function(a,b){return C.i.ca(this.a,b)},
$aseT:function(){return[P.B]},
$asv:function(){return[P.B]},
$asf:function(){return[P.B]},
$asd:function(){return[P.B]}},
h5:{"^":"f;"},
e3:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.c3(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bf(z))
w=this.c
if(typeof x!=="number")return H.m(x)
if(w>=x){this.d=null
return!1}this.d=y.G(z,w);++this.c
return!0}},
hH:{"^":"f;a,b,$ti",
gY:function(a){return new H.hI(J.bP(this.a),this.b,this.$ti)},
gl:function(a){return J.bd(this.a)},
G:function(a,b){return this.b.$1(J.dq(this.a,b))},
$asf:function(a,b){return[b]}},
hI:{"^":"cM;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascM:function(a,b){return[b]}},
jr:{"^":"f;a,b,$ti",
gY:function(a){return new H.js(J.bP(this.a),this.b,this.$ti)}},
js:{"^":"cM;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cb:{"^":"a;$ti"},
eT:{"^":"a;$ti"},
j9:{"^":"cf+eT;"}}],["","",,H,{"^":"",
l8:function(a){return init.types[H.W(a)]},
lj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isD},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.h(H.aG(a))
return z},
bs:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.L(a).$isd5){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b7(w,0)===36)w=C.i.cA(w,1)
r=H.dl(H.bN(H.aV(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eh:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ia:function(a){var z,y,x,w
z=H.b([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aG(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bc(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aG(w))}return H.eh(z)},
ei:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aG(x))
if(x<0)throw H.h(H.aG(x))
if(x>65535)return H.ia(a)}return H.eh(a)},
i9:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bc(z,10))>>>0,56320|z&1023)}throw H.h(P.am(a,0,1114111,null,null))},
ab:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i8:function(a){return a.b?H.ab(a).getUTCFullYear()+0:H.ab(a).getFullYear()+0},
i6:function(a){return a.b?H.ab(a).getUTCMonth()+1:H.ab(a).getMonth()+1},
i2:function(a){return a.b?H.ab(a).getUTCDate()+0:H.ab(a).getDate()+0},
i3:function(a){return a.b?H.ab(a).getUTCHours()+0:H.ab(a).getHours()+0},
i5:function(a){return a.b?H.ab(a).getUTCMinutes()+0:H.ab(a).getMinutes()+0},
i7:function(a){return a.b?H.ab(a).getUTCSeconds()+0:H.ab(a).getSeconds()+0},
i4:function(a){return a.b?H.ab(a).getUTCMilliseconds()+0:H.ab(a).getMilliseconds()+0},
m:function(a){throw H.h(H.aG(a))},
e:function(a,b){if(a==null)J.bd(a)
throw H.h(H.aU(a,b))},
aU:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.W(J.bd(a))
if(!(b<0)){if(typeof z!=="number")return H.m(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.cj(b,"index",null)},
l4:function(a,b,c){if(a>c)return new P.ci(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ci(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
aG:function(a){return new P.aI(!0,a,null,null)},
l_:function(a){if(typeof a!=="number")throw H.h(H.aG(a))
return a},
h:function(a){var z
if(a==null)a=new P.ed()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fx})
z.name=""}else z.toString=H.fx
return z},
fx:function(){return J.a8(this.dartException)},
q:function(a){throw H.h(a)},
y:function(a){throw H.h(P.bf(a))},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bc(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cQ(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ec(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eA()
u=$.$get$eB()
t=$.$get$eC()
s=$.$get$eD()
r=$.$get$eH()
q=$.$get$eI()
p=$.$get$eF()
$.$get$eE()
o=$.$get$eK()
n=$.$get$eJ()
m=v.af(y)
if(m!=null)return z.$1(H.cQ(H.R(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.cQ(H.R(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ec(H.R(y),m))}}return z.$1(new H.j8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.em()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.em()
return a},
bb:function(a){var z
if(a==null)return new H.f6(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f6(a)},
l6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a1(0,a[y],a[x])}return b},
li:function(a,b,c,d,e,f){H.i(a,"$iscK")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.o("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.W(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.li)
a.$identity=z
return z},
fO:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.id(z).r}else x=d
w=e?Object.create(new H.iC().constructor.prototype):Object.create(new H.cD(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aw
if(typeof u!=="number")return u.B()
$.aw=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dA(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l8,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dv:H.cE
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
fL:function(a,b,c,d){var z=H.cE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fN(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fL(y,!w,z,b)
if(y===0){w=$.aw
if(typeof w!=="number")return w.B()
$.aw=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.c6("self")
$.be=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aw
if(typeof w!=="number")return w.B()
$.aw=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.c6("self")
$.be=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fM:function(a,b,c,d){var z,y
z=H.cE
y=H.dv
switch(b?-1:a){case 0:throw H.h(H.io("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fN:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.c6("self")
$.be=z}y=$.du
if(y==null){y=H.c6("receiver")
$.du=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fM(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aw
if(typeof y!=="number")return y.B()
$.aw=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aw
if(typeof y!=="number")return y.B()
$.aw=y+1
return new Function(z+y+"}")()},
dg:function(a,b,c,d,e,f,g){var z,y
z=J.bn(H.bN(b))
H.W(c)
y=!!J.L(d).$isd?J.bn(d):d
return H.fO(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aC(a,"String"))},
lp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aC(a,"num"))},
fk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aC(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aC(a,"int"))},
fs:function(a,b){throw H.h(H.aC(a,H.R(b).substring(3)))},
lr:function(a,b){var z=J.c3(b)
throw H.h(H.fK(a,z.bI(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fs(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.lr(a,b)},
bN:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.h(H.aC(a,"List"))},
lk:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.fs(a,b)},
fl:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.W(z)]
else return a.$S()}return},
c2:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fl(J.L(a))
if(z==null)return!1
y=H.fo(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dc)return a
$.dc=!0
try{if(H.c2(a,b))return a
z=H.c4(b)
y=H.aC(a,z)
throw H.h(y)}finally{$.dc=!1}},
di:function(a,b){if(a!=null&&!H.df(a,b))H.q(H.aC(a,H.c4(b)))
return a},
ff:function(a){var z
if(a instanceof H.t){z=H.fl(J.L(a))
if(z!=null)return H.c4(z)
return"Closure"}return H.b2(a)},
ly:function(a){throw H.h(new P.fV(H.R(a)))},
fm:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
mM:function(a,b,c){return H.bc(a["$as"+H.k(c)],H.aV(b))},
bM:function(a,b,c,d){var z
H.R(c)
H.W(d)
z=H.bc(a["$as"+H.k(c)],H.aV(b))
return z==null?null:z[d]},
aH:function(a,b,c){var z
H.R(b)
H.W(c)
z=H.bc(a["$as"+H.k(b)],H.aV(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.W(b)
z=H.aV(a)
return z==null?null:z[b]},
c4:function(a){var z=H.aW(a,null)
return z},
aW:function(a,b){var z,y
H.w(b,"$isd",[P.p],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dl(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.k(b[y])}if('func' in a)return H.kQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.p]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.i.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aW(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aW(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aW(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aW(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l5(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aW(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dl:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.p],"$asd")
if(a==null)return""
z=new P.c_("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aW(u,c)}v="<"+z.j(0)+">"
return v},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bL:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aV(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fi(H.bc(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.R(b)
H.bN(c)
H.R(d)
if(a==null)return a
z=H.bL(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dl(c,0,null)
throw H.h(H.aC(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fi:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
mK:function(a,b,c){return a.apply(b,H.bc(J.L(b)["$as"+H.k(c)],H.aV(b)))},
fp:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="K"||a===-1||a===-2||H.fp(z)}return!1},
df:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="K"||b===-1||b===-2||H.fp(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.df(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c2(a,b)}y=J.L(a).constructor
x=H.aV(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.df(a,b))throw H.h(H.aC(a,H.c4(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="K")return!0
if('func' in c)return H.fo(a,b,c,d)
if('func' in a)return c.builtin$cls==="cK"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bk" in y.prototype))return!1
w=y.prototype["$as"+"bk"]
v=H.bc(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c4(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fi(H.bc(r,z),b,u,d)},
fo:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lo(m,b,l,d)},
lo:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
mL:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
ll:function(a){var z,y,x,w,v,u
z=H.R($.fn.$1(a))
y=$.cv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cy[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.fh.$2(a,z))
if(z!=null){y=$.cv[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cy[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cz(x)
$.cv[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cy[z]=x
return x}if(v==="-"){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fr(a,x)
if(v==="*")throw H.h(P.eS(z))
if(init.leafTags[z]===true){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fr(a,x)},
fr:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dn(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cz:function(a){return J.dn(a,!1,null,!!a.$isD)},
ln:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cz(z)
else return J.dn(z,c,null,null)},
lg:function(){if(!0===$.dk)return
$.dk=!0
H.lh()},
lh:function(){var z,y,x,w,v,u,t,s
$.cv=Object.create(null)
$.cy=Object.create(null)
H.lc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ft.$1(v)
if(u!=null){t=H.ln(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lc:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b8(C.B,H.b8(C.G,H.b8(C.n,H.b8(C.n,H.b8(C.F,H.b8(C.C,H.b8(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fn=new H.ld(v)
$.fh=new H.le(u)
$.ft=new H.lf(t)},
b8:function(a,b){return a(b)||b},
fu:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fv:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ic:{"^":"a;a,b,c,d,e,f,r,0x",p:{
id:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bn(z)
y=z[0]
x=z[1]
return new H.ic(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iY:{"^":"a;a,b,c,d,e,f",
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
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.p])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eG:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"Y;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ec:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hs:{"^":"Y;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
p:{
cQ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hs(a,y,z?null:b.receiver)}}},
j8:{"^":"Y;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lz:{"^":"t:14;a",
$1:function(a){if(!!J.L(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f6:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isau:1},
t:{"^":"a;",
j:function(a){return"Closure '"+H.b2(this).trim()+"'"},
ge5:function(){return this},
$iscK:1,
ge5:function(){return this}},
eq:{"^":"t;"},
iC:{"^":"eq;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cD:{"^":"eq;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bs(this.a)
else y=typeof z!=="object"?J.aY(z):H.bs(z)
return(y^H.bs(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
cE:function(a){return a.a},
dv:function(a){return a.c},
c6:function(a){var z,y,x,w,v
z=new H.cD("self","target","receiver","name")
y=J.bn(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iZ:{"^":"Y;a",
j:function(a){return this.a},
p:{
aC:function(a,b){return new H.iZ("TypeError: "+H.k(P.ca(a))+": type '"+H.ff(a)+"' is not a subtype of type '"+b+"'")}}},
fJ:{"^":"Y;a",
j:function(a){return this.a},
p:{
fK:function(a,b){return new H.fJ("CastError: "+H.k(P.ca(a))+": type '"+H.ff(a)+"' is not a subtype of type '"+b+"'")}}},
im:{"^":"Y;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
p:{
io:function(a){return new H.im(a)}}},
b_:{"^":"hF;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaB:function(a){return new H.e2(this,[H.A(this,0)])},
dd:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cO(y,b)}else return this.hl(b)},
hl:function(a){var z=this.d
if(z==null)return!1
return this.cj(this.bQ(z,J.aY(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b8(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b8(w,b)
x=y==null?null:y.b
return x}else return this.hm(b)},
hm:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bQ(z,J.aY(a)&0x3ffffff)
x=this.cj(y,a)
if(x<0)return
return y[x].b},
a1:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bT()
this.b=z}this.cG(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bT()
this.c=y}this.cG(y,b,c)}else{x=this.d
if(x==null){x=this.bT()
this.d=x}w=J.aY(b)&0x3ffffff
v=this.bQ(x,w)
if(v==null)this.c_(x,w,[this.bU(b,c)])
else{u=this.cj(v,b)
if(u>=0)v[u].b=c
else v.push(this.bU(b,c))}}},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bf(this))
z=z.c}},
cG:function(a,b,c){var z
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
z=this.b8(a,b)
if(z==null)this.c_(a,b,this.bU(b,c))
else z.b=c},
eK:function(){this.r=this.r+1&67108863},
bU:function(a,b){var z,y
z=new H.hx(H.E(a,H.A(this,0)),H.E(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eK()
return z},
cj:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
j:function(a){return P.e5(this)},
b8:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
eC:function(a,b){delete a[b]},
cO:function(a,b){return this.b8(a,b)!=null},
bT:function(){var z=Object.create(null)
this.c_(z,"<non-identifier-key>",z)
this.eC(z,"<non-identifier-key>")
return z},
$ise1:1},
hx:{"^":"a;a,b,0c,0d"},
e2:{"^":"h5;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.hy(z,z.r,this.$ti)
y.c=z.e
return y}},
hy:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bf(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ld:{"^":"t:14;a",
$1:function(a){return this.a(a)}},
le:{"^":"t:35;a",
$2:function(a,b){return this.a(a,b)}},
lf:{"^":"t:28;a",
$1:function(a){return this.a(H.R(a))}},
hq:{"^":"a;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$isee:1,
p:{
hr:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hf("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l5:function(a){return J.dW(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b6:function(a){return a},
aT:function(a,b,c){H.bN(b)
if(a>>>0!==a||a>=c)throw H.h(H.aU(b,a))},
kP:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l4(a,b,c))
return b},
hV:{"^":"r;",$ismv:1,"%":"DataView;ArrayBufferView;cW|f0|f1|hU|f2|f3|aP"},
cW:{"^":"hV;",
gl:function(a){return a.length},
$isD:1,
$asD:I.dh},
hU:{"^":"f1;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
$ascb:function(){return[P.n]},
$asv:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
"%":"Float32Array|Float64Array"},
aP:{"^":"f3;",
$ascb:function(){return[P.B]},
$asv:function(){return[P.B]},
$isf:1,
$asf:function(){return[P.B]},
$isd:1,
$asd:function(){return[P.B]}},
m6:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m7:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m8:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m9:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ma:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mb:{"^":"aP;",
gl:function(a){return a.length},
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hW:{"^":"aP;",
gl:function(a){return a.length},
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
bH:function(a,b,c){return new Uint8Array(a.subarray(b,H.kP(b,c,a.length)))},
"%":";Uint8Array"},
f0:{"^":"cW+v;"},
f1:{"^":"f0+cb;"},
f2:{"^":"cW+v;"},
f3:{"^":"f2+cb;"}}],["","",,P,{"^":"",
ju:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.jw(z),1)).observe(y,{childList:true})
return new P.jv(z,y,x)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
mz:[function(a){self.scheduleImmediate(H.b9(new P.jx(H.l(a,{func:1,ret:-1})),0))},"$1","kX",4,0,12],
mA:[function(a){self.setImmediate(H.b9(new P.jy(H.l(a,{func:1,ret:-1})),0))},"$1","kY",4,0,12],
mB:[function(a){P.d2(C.l,H.l(a,{func:1,ret:-1}))},"$1","kZ",4,0,12],
d2:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a0(a.a,1000)
return P.kt(z<0?0:z,b)},
ev:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.b3]})
z=C.f.a0(a.a,1000)
return P.ku(z<0?0:z,b)},
kT:function(a,b){if(H.c2(a,{func:1,args:[P.a,P.au]}))return b.hM(a,null,P.a,P.au)
if(H.c2(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kS:function(){var z,y
for(;z=$.b7,z!=null;){$.bJ=null
y=z.b
$.b7=y
if(y==null)$.bI=null
z.a.$0()}},
mJ:[function(){$.dd=!0
try{P.kS()}finally{$.bJ=null
$.dd=!1
if($.b7!=null)$.$get$d9().$1(P.fj())}},"$0","fj",0,0,3],
fe:function(a){var z=new P.eW(H.l(a,{func:1,ret:-1}))
if($.b7==null){$.bI=z
$.b7=z
if(!$.dd)$.$get$d9().$1(P.fj())}else{$.bI.b=z
$.bI=z}},
kW:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.b7
if(z==null){P.fe(a)
$.bJ=$.bI
return}y=new P.eW(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.b7=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
ls:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.P
if(C.j===y){P.cu(null,null,C.j,a)
return}y.toString
P.cu(null,null,y,H.l(y.c4(a),z))},
eu:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.P
if(y===C.j){y.toString
return P.d2(a,b)}return P.d2(a,H.l(y.c4(b),z))},
iV:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b3]}
H.l(b,z)
y=$.P
if(y===C.j){y.toString
return P.ev(a,b)}x=y.d9(b,P.b3)
$.P.toString
return P.ev(a,H.l(x,z))},
ct:function(a,b,c,d,e){var z={}
z.a=d
P.kW(new P.kU(z,e))},
fc:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fd:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kV:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cu:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c4(d):c.h6(d,-1)
P.fe(d)},
jw:{"^":"t:13;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jv:{"^":"t:39;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jx:{"^":"t:2;a",
$0:function(){this.a.$0()}},
jy:{"^":"t:2;a",
$0:function(){this.a.$0()}},
f9:{"^":"a;a,0b,c",
eo:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.kw(this,b),0),a)
else throw H.h(P.af("`setTimeout()` not found."))},
ep:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b9(new P.kv(this,a,Date.now(),b),0),a)
else throw H.h(P.af("Periodic timer."))},
$isb3:1,
p:{
kt:function(a,b){var z=new P.f9(!0,0)
z.eo(a,b)
return z},
ku:function(a,b){var z=new P.f9(!1,0)
z.ep(a,b)
return z}}},
kw:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kv:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.ed(w,x)}z.c=y
this.d.$1(z)}},
b5:{"^":"a;0a,b,c,d,e,$ti",
ht:function(a){if(this.c!==6)return!0
return this.b.b.cu(H.l(this.d,{func:1,ret:P.a7,args:[P.a]}),a.a,P.a7,P.a)},
hk:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.c2(z,{func:1,args:[P.a,P.au]}))return H.di(w.hS(z,a.a,a.b,null,y,P.au),x)
else return H.di(w.cu(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aM:{"^":"a;d_:a<,b,0fo:c<,$ti",
dW:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kT(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aM(0,$.P,[c])
w=b==null?1:3
this.cH(new P.b5(x,w,a,b,[z,c]))
return x},
hW:function(a,b){return this.dW(a,null,b)},
cH:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isb5")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaM")
z=y.a
if(z<4){y.cH(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cu(null,null,z,H.l(new P.jM(this,a),{func:1,ret:-1}))}},
cV:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isb5")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaM")
y=u.a
if(y<4){u.cV(a)
return}this.a=y
this.c=u.c}z.a=this.bb(a)
y=this.b
y.toString
P.cu(null,null,y,H.l(new P.jR(z,this),{func:1,ret:-1}))}},
bW:function(){var z=H.i(this.c,"$isb5")
this.c=null
return this.bb(z)},
bb:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cL:function(a){var z,y,x,w
z=H.A(this,0)
H.di(a,{futureOr:1,type:z})
y=this.$ti
x=H.bL(a,"$isbk",y,"$asbk")
if(x){z=H.bL(a,"$isaM",y,null)
if(z)P.eY(a,this)
else P.jN(a,this)}else{w=this.bW()
H.E(a,z)
this.a=4
this.c=a
P.bG(this,w)}},
bM:[function(a,b){var z
H.i(b,"$isau")
z=this.bW()
this.a=8
this.c=new P.ai(a,b)
P.bG(this,z)},function(a){return this.bM(a,null)},"i8","$2","$1","gey",4,2,34],
$isbk:1,
p:{
jN:function(a,b){var z,y,x
b.a=1
try{a.dW(new P.jO(b),new P.jP(b),null)}catch(x){z=H.aX(x)
y=H.bb(x)
P.ls(new P.jQ(b,z,y))}},
eY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaM")
if(z>=4){y=b.bW()
b.a=a.a
b.c=a.c
P.bG(b,y)}else{y=H.i(b.c,"$isb5")
b.a=2
b.c=a
a.cV(y)}},
bG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.ct(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bG(z.a,b)}y=z.a
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
if(p){H.i(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.ct(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jU(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jT(x,b,r).$0()}else if((y&2)!==0)new P.jS(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.L(y).$isbk){if(y.a>=4){n=H.i(t.c,"$isb5")
t.c=null
b=t.bb(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eY(y,t)
return}}m=b.b
n=H.i(m.c,"$isb5")
m.c=null
b=m.bb(n)
y=x.a
u=x.b
if(!y){H.E(u,H.A(m,0))
m.a=4
m.c=u}else{H.i(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
jM:{"^":"t:2;a,b",
$0:function(){P.bG(this.a,this.b)}},
jR:{"^":"t:2;a,b",
$0:function(){P.bG(this.b,this.a.a)}},
jO:{"^":"t:13;a",
$1:function(a){var z=this.a
z.a=0
z.cL(a)}},
jP:{"^":"t:29;a",
$2:function(a,b){this.a.bM(a,H.i(b,"$isau"))},
$1:function(a){return this.$2(a,null)}},
jQ:{"^":"t:2;a,b,c",
$0:function(){this.a.bM(this.b,this.c)}},
jU:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dT(H.l(w.d,{func:1}),null)}catch(v){y=H.aX(v)
x=H.bb(v)
if(this.d){w=H.i(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.L(z).$isbk){if(z instanceof P.aM&&z.gd_()>=4){if(z.gd_()===8){w=this.b
w.b=H.i(z.gfo(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hW(new P.jV(t),null)
w.a=!1}}},
jV:{"^":"t:30;a",
$1:function(a){return this.a}},
jT:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.E(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.cu(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aX(t)
y=H.bb(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
jS:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isai")
w=this.c
if(w.ht(z)&&w.e!=null){v=this.b
v.b=w.hk(z)
v.a=!1}}catch(u){y=H.aX(u)
x=H.bb(u)
w=H.i(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
eW:{"^":"a;a,0b"},
d_:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aM(0,$.P,[P.B])
z.a=0
this.hr(new P.iF(z,this),!0,new P.iG(z,y),y.gey())
return y}},
iF:{"^":"t;a,b",
$1:function(a){H.E(a,H.aH(this.b,"d_",0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.aH(this.b,"d_",0)]}}},
iG:{"^":"t:2;a,b",
$0:function(){this.b.cL(this.a.a)}},
eo:{"^":"a;$ti"},
iE:{"^":"a;"},
b3:{"^":"a;"},
ai:{"^":"a;a,b",
j:function(a){return H.k(this.a)},
$isY:1},
kD:{"^":"a;",$ismy:1},
kU:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ed()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.j(0)
throw x}},
kf:{"^":"kD;",
hT:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fc(null,null,this,a,-1)}catch(x){z=H.aX(x)
y=H.bb(x)
P.ct(null,null,this,z,H.i(y,"$isau"))}},
hU:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fd(null,null,this,a,b,-1,c)}catch(x){z=H.aX(x)
y=H.bb(x)
P.ct(null,null,this,z,H.i(y,"$isau"))}},
h6:function(a,b){return new P.kh(this,H.l(a,{func:1,ret:b}),b)},
c4:function(a){return new P.kg(this,H.l(a,{func:1,ret:-1}))},
d9:function(a,b){return new P.ki(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dT:function(a,b){H.l(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fc(null,null,this,a,b)},
cu:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.P===C.j)return a.$1(b)
return P.fd(null,null,this,a,b,c,d)},
hS:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kV(null,null,this,a,b,c,d,e,f)},
hM:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
kh:{"^":"t;a,b,c",
$0:function(){return this.a.dT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kg:{"^":"t:3;a,b",
$0:function(){return this.a.hT(this.b)}},
ki:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hU(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hA:function(a,b,c){H.bN(a)
return H.w(H.l6(a,new H.b_(0,0,[b,c])),"$ise1",[b,c],"$ase1")},
hz:function(a,b){return new H.b_(0,0,[a,b])},
hB:function(a,b,c,d){return new P.k1(0,0,[d])},
hm:function(a,b,c){var z,y
if(P.de(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.h(y,a)
try{P.kR(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.ep(b,H.lk(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cL:function(a,b,c){var z,y,x
if(P.de(a))return b+"..."+c
z=new P.c_(b)
y=$.$get$bK()
C.a.h(y,a)
try{x=z
x.a=P.ep(x.gaG(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaG()+c
y=z.gaG()
return y.charCodeAt(0)==0?y:y},
de:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
kR:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.k(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.F();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e5:function(a){var z,y,x
z={}
if(P.de(a))return"{...}"
y=new P.c_("")
try{C.a.h($.$get$bK(),a)
x=y
x.a=x.gaG()+"{"
z.a=!0
J.fB(a,new P.hG(z,y))
z=y
z.a=z.gaG()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaG()
return z.charCodeAt(0)==0?z:z},
k1:{"^":"jW;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.f_(this,this.r,H.A(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.db()
this.b=z}return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.db()
this.c=y}return this.cJ(y,b)}else return this.eq(0,b)},
eq:function(a,b){var z,y,x
H.E(b,H.A(this,0))
z=this.d
if(z==null){z=P.db()
this.d=z}y=this.cM(b)
x=z[y]
if(x==null)z[y]=[this.bL(b)]
else{if(this.cR(x,b)>=0)return!1
x.push(this.bL(b))}return!0},
E:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cW(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cW(this.c,b)
else return this.fh(0,b)},
fh:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eG(z,b)
x=this.cR(y,b)
if(x<0)return!1
this.d1(y.splice(x,1)[0])
return!0},
cJ:function(a,b){H.E(b,H.A(this,0))
if(H.i(a[b],"$isda")!=null)return!1
a[b]=this.bL(b)
return!0},
cW:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isda")
if(z==null)return!1
this.d1(z)
delete a[b]
return!0},
cK:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.da(H.E(a,H.A(this,0)))
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
cM:function(a){return J.aY(a)&0x3ffffff},
eG:function(a,b){return a[this.cM(b)]},
cR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
p:{
db:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
da:{"^":"a;a,0b,0c"},
k2:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bf(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.A(this,0))
this.c=z.b
return!0}}},
p:{
f_:function(a,b,c){var z=new P.k2(a,b,[c])
z.c=a.e
return z}}},
jW:{"^":"ip;"},
cf:{"^":"k3;",$isf:1,$isd:1},
v:{"^":"a;$ti",
gY:function(a){return new H.e3(a,this.gl(a),0,[H.bM(this,a,"v",0)])},
G:function(a,b){return this.i(a,b)},
hZ:function(a,b){var z,y,x
z=H.b([],[H.bM(this,a,"v",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.m(x)
if(!(y<x))break
C.a.a1(z,y,this.i(a,y));++y}return z},
hY:function(a){return this.hZ(a,!0)},
j:function(a){return P.cL(a,"[","]")}},
hF:{"^":"ae;"},
hG:{"^":"t:15;a,b",
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
H.l(b,{func:1,ret:-1,args:[H.bM(this,a,"ae",0),H.bM(this,a,"ae",1)]})
for(z=J.bP(this.gaB(a));z.F();){y=z.gO(z)
b.$2(y,this.i(a,y))}},
gl:function(a){return J.bd(this.gaB(a))},
j:function(a){return P.e5(a)},
$isa4:1},
ir:{"^":"a;$ti",
j:function(a){return P.cL(this,"{","}")},
G:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dr("index"))
if(b<0)H.q(P.am(b,0,null,"index",null))
for(z=P.f_(this,this.r,H.A(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.h(P.O(b,this,"index",null,y))},
$isf:1},
ip:{"^":"ir;"},
k3:{"^":"a+v;"}}],["","",,P,{"^":"",cH:{"^":"a;$ti"},dE:{"^":"iE;$ti"},h7:{"^":"cH;",
$ascH:function(){return[P.p,[P.d,P.B]]}},je:{"^":"h7;a"},jf:{"^":"dE;",
hb:function(a,b,c){var z,y,x,w
z=a.length
P.ej(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kC(0,0,x)
if(w.eE(a,b,z)!==z)w.d2(C.i.ca(a,z-1),0)
return C.J.bH(x,0,w.b)},
ha:function(a){return this.hb(a,0,null)},
$asdE:function(){return[P.p,[P.d,P.B]]}},kC:{"^":"a;a,b,c",
d2:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.e(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.e(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.e(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.e(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.e(z,y)
z[y]=128|a&63
return!1}},
eE:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.ca(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b7(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d2(w,C.i.b7(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.e(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.e(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.e(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.e(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
h9:function(a){var z=J.L(a)
if(!!z.$ist)return z.j(a)
return"Instance of '"+H.b2(a)+"'"},
hC:function(a,b,c,d){var z,y
H.E(b,d)
z=J.ho(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a1(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hD:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gY(a);x.F();)C.a.h(y,H.E(x.gO(x),c))
if(b)return y
return H.w(J.bn(y),"$isd",z,"$asd")},
d0:function(a,b,c){var z,y
z=P.B
H.w(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.w(a,"$isaZ",[z],"$asaZ")
y=a.length
c=P.ej(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ao()
z=c<y}else z=!0
return H.ei(z?C.a.bH(a,b,c):a)}return P.iH(a,b,c)},
iH:function(a,b,c){var z,y,x
H.w(a,"$isf",[P.B],"$asf")
z=J.bP(a)
for(y=0;y<b;++y)if(!z.F())throw H.h(P.am(b,0,y,null,null))
x=[]
for(;z.F();)x.push(z.gO(z))
return H.ei(x)},
ie:function(a,b,c){return new H.hq(a,H.hr(a,!1,!0,!1))},
kB:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.B],"$asd")
if(c===C.r){z=$.$get$fb().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.ha(H.E(b,H.aH(c,"cH",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.i9(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h9(a)},
o:function(a){return new P.eX(a)},
dp:function(a){H.lq(a)},
a7:{"^":"a;"},
"+bool":0,
as:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a&&this.b===b.b},
gW:function(a){var z=this.a
return(z^C.f.bc(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fW(H.i8(this))
y=P.bR(H.i6(this))
x=P.bR(H.i2(this))
w=P.bR(H.i3(this))
v=P.bR(H.i5(this))
u=P.bR(H.i7(this))
t=P.fX(H.i4(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
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
bR:function(a){if(a>=10)return""+a
return"0"+a}}},
n:{"^":"X;"},
"+double":0,
bh:{"^":"a;a",
ao:function(a,b){return C.f.ao(this.a,H.i(b,"$isbh").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bh))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.h4()
y=this.a
if(y<0)return"-"+new P.bh(0-y).j(0)
x=z.$1(C.f.a0(y,6e7)%60)
w=z.$1(C.f.a0(y,1e6)%60)
v=new P.h3().$1(y%1e6)
return""+C.f.a0(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
p:{
dP:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h3:{"^":"t:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h4:{"^":"t:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
ed:{"^":"Y;",
j:function(a){return"Throw of null."}},
aI:{"^":"Y;a,b,c,d",
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbO()+y+x
if(!this.a)return w
v=this.gbN()
u=P.ca(this.b)
return w+v+": "+H.k(u)},
p:{
fD:function(a){return new P.aI(!1,null,null,a)},
c5:function(a,b,c){return new P.aI(!0,a,b,c)},
dr:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
ci:{"^":"aI;e,f,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
p:{
cj:function(a,b,c){return new P.ci(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.ci(b,c,!0,a,d,"Invalid value")},
ej:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.m(a)
if(0<=a){if(typeof c!=="number")return H.m(c)
z=a>c}else z=!0
if(z)throw H.h(P.am(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.m(c)
z=b>c}else z=!0
if(z)throw H.h(P.am(b,a,c,"end",f))
return b}return c}}},
hl:{"^":"aI;e,l:f>,a,b,c,d",
gbO:function(){return"RangeError"},
gbN:function(){if(J.fy(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
p:{
O:function(a,b,c,d,e){var z=H.W(e!=null?e:J.bd(b))
return new P.hl(b,z,!0,a,c,"Index out of range")}}},
ja:{"^":"Y;a",
j:function(a){return"Unsupported operation: "+this.a},
p:{
af:function(a){return new P.ja(a)}}},
j7:{"^":"Y;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eS:function(a){return new P.j7(a)}}},
iB:{"^":"Y;a",
j:function(a){return"Bad state: "+this.a}},
fR:{"^":"Y;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.ca(z))+"."},
p:{
bf:function(a){return new P.fR(a)}}},
i_:{"^":"a;",
j:function(a){return"Out of Memory"},
$isY:1},
em:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isY:1},
fV:{"^":"Y;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eX:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
hf:{"^":"a;a,b,c",
j:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bI(x,0,75)+"..."
return y+"\n"+x}},
B:{"^":"X;"},
"+int":0,
f:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.F();)++y
return y},
G:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dr("index"))
if(b<0)H.q(P.am(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.F();){x=z.gO(z)
if(b===y)return x;++y}throw H.h(P.O(b,this,"index",null,y))},
j:function(a){return P.hm(this,"(",")")}},
cM:{"^":"a;$ti"},
d:{"^":"a;$ti",$isf:1},
"+List":0,
a4:{"^":"a;$ti"},
K:{"^":"a;",
gW:function(a){return P.a.prototype.gW.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
X:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gW:function(a){return H.bs(this)},
j:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.j(this)}},
au:{"^":"a;"},
p:{"^":"a;",$isee:1},
"+String":0,
c_:{"^":"a;aG:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ep:function(a,b,c){var z=J.bP(b)
if(!z.F())return a
if(c.length===0){do a+=H.k(z.gO(z))
while(z.F())}else{a+=H.k(z.gO(z))
for(;z.F();)a=a+c+H.k(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cG:function(a,b){var z=document.createElement("canvas")
return z},
h6:function(a){H.i(a,"$isaa")
return"wheel"},
cq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eZ:function(a,b,c,d){var z,y
z=W.cq(W.cq(W.cq(W.cq(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fg:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d9(a,b)},
bm:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lA:{"^":"r;0l:length=","%":"AccessibleNodeList"},
lB:{"^":"bm;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lC:{"^":"bm;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fI:{"^":"r;","%":";Blob"},
cF:{"^":"bm;",
bF:function(a,b,c){if(c!=null)return a.getContext(b,P.l0(c,null))
return a.getContext(b)},
e6:function(a,b){return this.bF(a,b,null)},
$iscF:1,
"%":"HTMLCanvasElement"},
dy:{"^":"r;",$isdy:1,"%":"CanvasRenderingContext2D"},
lI:{"^":"M;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lK:{"^":"fU;0l:length=","%":"CSSPerspective"},
bg:{"^":"r;",$isbg:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lL:{"^":"jC;0l:length=",
e7:function(a,b){var z=a.getPropertyValue(this.ev(a,b))
return z==null?"":z},
ev:function(a,b){var z,y
z=$.$get$dG()
y=z[b]
if(typeof y==="string")return y
y=this.fB(a,b)
z[b]=y
return y},
fB:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h0()+b
if(z in a)return z
return b},
gc5:function(a){return a.bottom},
ga9:function(a){return a.height},
gaM:function(a){return a.left},
gb0:function(a){return a.right},
gb3:function(a){return a.top},
gab:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fT:{"^":"a;",
gaM:function(a){return this.e7(a,"left")}},
dH:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fU:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lM:{"^":"dH;0l:length=","%":"CSSTransformValue"},
lN:{"^":"dH;0l:length=","%":"CSSUnparsedValue"},
lO:{"^":"r;0l:length=","%":"DataTransferItemList"},
lP:{"^":"r;",
j:function(a){return String(a)},
"%":"DOMException"},
lQ:{"^":"jE;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.ac,P.X]]},
$asv:function(){return[[P.ac,P.X]]},
$isf:1,
$asf:function(){return[[P.ac,P.X]]},
$isd:1,
$asd:function(){return[[P.ac,P.X]]},
$asz:function(){return[[P.ac,P.X]]},
"%":"ClientRectList|DOMRectList"},
h2:{"^":"r;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gab(a))+" x "+H.k(this.ga9(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bL(b,"$isac",[P.X],"$asac")
if(!z)return!1
z=J.cw(b)
return a.left===z.gaM(b)&&a.top===z.gb3(b)&&this.gab(a)===z.gab(b)&&this.ga9(a)===z.ga9(b)},
gW:function(a){return W.eZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gab(a)&0x1FFFFFFF,this.ga9(a)&0x1FFFFFFF)},
gc5:function(a){return a.bottom},
ga9:function(a){return a.height},
gaM:function(a){return a.left},
gb0:function(a){return a.right},
gb3:function(a){return a.top},
gab:function(a){return a.width},
$isac:1,
$asac:function(){return[P.X]},
"%":";DOMRectReadOnly"},
lR:{"^":"jG;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.p]},
$asv:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$isd:1,
$asd:function(){return[P.p]},
$asz:function(){return[P.p]},
"%":"DOMStringList"},
lS:{"^":"r;0l:length=","%":"DOMTokenList"},
jB:{"^":"cf;a,b",
gl:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.i(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.hY(this)
return new J.ah(z,z.length,0,[H.A(z,0)])},
$asv:function(){return[W.a0]},
$asf:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
a0:{"^":"M;",
gda:function(a){return new W.jB(a,a.children)},
gdc:function(a){return P.ib(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
j:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a9:{"^":"r;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aa:{"^":"r;",
d3:["e9",function(a,b,c,d){H.l(c,{func:1,args:[W.a9]})
if(c!=null)this.er(a,b,c,!1)}],
er:function(a,b,c,d){return a.addEventListener(b,H.b9(H.l(c,{func:1,args:[W.a9]}),1),!1)},
$isaa:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f4|f5|f7|f8"},
bj:{"^":"fI;",$isbj:1,"%":"File"},
lT:{"^":"jL;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bj]},
$asv:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asz:function(){return[W.bj]},
"%":"FileList"},
lU:{"^":"aa;0l:length=","%":"FileWriter"},
lV:{"^":"bm;0l:length=","%":"HTMLFormElement"},
bl:{"^":"r;",$isbl:1,"%":"Gamepad"},
lW:{"^":"r;0l:length=","%":"History"},
lX:{"^":"jY;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.M]},
$asv:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asz:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cc:{"^":"r;0df:data=",$iscc:1,"%":"ImageData"},
dV:{"^":"bm;",$isdV:1,"%":"HTMLImageElement"},
bo:{"^":"d3;",$isbo:1,"%":"KeyboardEvent"},
m0:{"^":"r;",
j:function(a){return String(a)},
"%":"Location"},
m1:{"^":"r;0l:length=","%":"MediaList"},
m2:{"^":"aa;",
d3:function(a,b,c,d){H.l(c,{func:1,args:[W.a9]})
if(b==="message")a.start()
this.e9(a,b,c,!1)},
"%":"MessagePort"},
m3:{"^":"k4;",
i:function(a,b){return P.aN(a.get(H.R(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.p])
this.N(a,new W.hR(z))
return z},
gl:function(a){return a.size},
$asae:function(){return[P.p,null]},
$isa4:1,
$asa4:function(){return[P.p,null]},
"%":"MIDIInputMap"},
hR:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m4:{"^":"k5;",
i:function(a,b){return P.aN(a.get(H.R(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.p])
this.N(a,new W.hS(z))
return z},
gl:function(a){return a.size},
$asae:function(){return[P.p,null]},
$isa4:1,
$asa4:function(){return[P.p,null]},
"%":"MIDIOutputMap"},
hS:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"r;",$isbp:1,"%":"MimeType"},
m5:{"^":"k7;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bp]},
$asv:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asz:function(){return[W.bp]},
"%":"MimeTypeArray"},
at:{"^":"d3;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jA:{"^":"cf;a",
gY:function(a){var z=this.a.childNodes
return new W.dR(z,z.length,-1,[H.bM(C.K,z,"z",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asv:function(){return[W.M]},
$asf:function(){return[W.M]},
$asd:function(){return[W.M]}},
M:{"^":"aa;",
j:function(a){var z=a.nodeValue
return z==null?this.ea(a):z},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hX:{"^":"k9;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.M]},
$asv:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asz:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
br:{"^":"r;0l:length=",$isbr:1,"%":"Plugin"},
me:{"^":"kd;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.br]},
$asv:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asz:function(){return[W.br]},
"%":"PluginArray"},
mg:{"^":"kj;",
i:function(a,b){return P.aN(a.get(H.R(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.p])
this.N(a,new W.il(z))
return z},
gl:function(a){return a.size},
$asae:function(){return[P.p,null]},
$isa4:1,
$asa4:function(){return[P.p,null]},
"%":"RTCStatsReport"},
il:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mh:{"^":"bm;0l:length=","%":"HTMLSelectElement"},
bt:{"^":"aa;",$isbt:1,"%":"SourceBuffer"},
mi:{"^":"f5;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bt]},
$asv:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asz:function(){return[W.bt]},
"%":"SourceBufferList"},
bu:{"^":"r;",$isbu:1,"%":"SpeechGrammar"},
mj:{"^":"kl;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$asv:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asz:function(){return[W.bu]},
"%":"SpeechGrammarList"},
bv:{"^":"r;0l:length=",$isbv:1,"%":"SpeechRecognitionResult"},
ml:{"^":"ko;",
i:function(a,b){return a.getItem(H.R(b))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.p,P.p]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaB:function(a){var z=H.b([],[P.p])
this.N(a,new W.iD(z))
return z},
gl:function(a){return a.length},
$asae:function(){return[P.p,P.p]},
$isa4:1,
$asa4:function(){return[P.p,P.p]},
"%":"Storage"},
iD:{"^":"t:36;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bw:{"^":"r;",$isbw:1,"%":"CSSStyleSheet|StyleSheet"},
bx:{"^":"aa;",$isbx:1,"%":"TextTrack"},
by:{"^":"aa;",$isby:1,"%":"TextTrackCue|VTTCue"},
mp:{"^":"ks;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.by]},
$asv:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asz:function(){return[W.by]},
"%":"TextTrackCueList"},
mq:{"^":"f8;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asv:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asz:function(){return[W.bx]},
"%":"TextTrackList"},
mr:{"^":"r;0l:length=","%":"TimeRanges"},
bB:{"^":"r;",$isbB:1,"%":"Touch"},
b4:{"^":"d3;",$isb4:1,"%":"TouchEvent"},
ms:{"^":"ky;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asv:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$isd:1,
$asd:function(){return[W.bB]},
$asz:function(){return[W.bB]},
"%":"TouchList"},
mt:{"^":"r;0l:length=","%":"TrackDefaultList"},
d3:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mw:{"^":"r;",
j:function(a){return String(a)},
"%":"URL"},
mx:{"^":"aa;0l:length=","%":"VideoTrackList"},
bF:{"^":"at;",
ghf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.af("deltaY is not supported"))},
ghe:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.af("deltaX is not supported"))},
$isbF:1,
"%":"WheelEvent"},
jt:{"^":"aa;",
fk:function(a,b){return a.requestAnimationFrame(H.b9(H.l(b,{func:1,ret:-1,args:[P.X]}),1))},
eD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mC:{"^":"kF;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bg]},
$asv:function(){return[W.bg]},
$isf:1,
$asf:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asz:function(){return[W.bg]},
"%":"CSSRuleList"},
mD:{"^":"h2;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bL(b,"$isac",[P.X],"$asac")
if(!z)return!1
z=J.cw(b)
return a.left===z.gaM(b)&&a.top===z.gb3(b)&&a.width===z.gab(b)&&a.height===z.ga9(b)},
gW:function(a){return W.eZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga9:function(a){return a.height},
gab:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mF:{"^":"kH;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bl]},
$asv:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asz:function(){return[W.bl]},
"%":"GamepadList"},
mG:{"^":"kJ;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.M]},
$asv:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asz:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mH:{"^":"kL;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$asv:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asz:function(){return[W.bv]},
"%":"SpeechRecognitionResultList"},
mI:{"^":"kN;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$asv:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asz:function(){return[W.bw]},
"%":"StyleSheetList"},
jH:{"^":"d_;a,b,c,$ti",
hr:function(a,b,c,d){var z=H.A(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mE:{"^":"jH;a,b,c,$ti"},
jI:{"^":"eo;a,b,c,d,e,$ti",
fF:function(){var z=this.d
if(z!=null&&this.a<=0)J.fA(this.b,this.c,z,!1)},
p:{
V:function(a,b,c,d,e){var z=c==null?null:W.fg(new W.jJ(c),W.a9)
z=new W.jI(0,a,b,z,!1,[e])
z.fF()
return z}}},
jJ:{"^":"t:5;a",
$1:function(a){return this.a.$1(H.i(a,"$isa9"))}},
z:{"^":"a;$ti",
gY:function(a){return new W.dR(a,this.gl(a),-1,[H.bM(this,a,"z",0)])}},
dR:{"^":"a;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fz(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
jC:{"^":"r+fT;"},
jD:{"^":"r+v;"},
jE:{"^":"jD+z;"},
jF:{"^":"r+v;"},
jG:{"^":"jF+z;"},
jK:{"^":"r+v;"},
jL:{"^":"jK+z;"},
jX:{"^":"r+v;"},
jY:{"^":"jX+z;"},
k4:{"^":"r+ae;"},
k5:{"^":"r+ae;"},
k6:{"^":"r+v;"},
k7:{"^":"k6+z;"},
k8:{"^":"r+v;"},
k9:{"^":"k8+z;"},
kc:{"^":"r+v;"},
kd:{"^":"kc+z;"},
kj:{"^":"r+ae;"},
f4:{"^":"aa+v;"},
f5:{"^":"f4+z;"},
kk:{"^":"r+v;"},
kl:{"^":"kk+z;"},
ko:{"^":"r+ae;"},
kr:{"^":"r+v;"},
ks:{"^":"kr+z;"},
f7:{"^":"aa+v;"},
f8:{"^":"f7+z;"},
kx:{"^":"r+v;"},
ky:{"^":"kx+z;"},
kE:{"^":"r+v;"},
kF:{"^":"kE+z;"},
kG:{"^":"r+v;"},
kH:{"^":"kG+z;"},
kI:{"^":"r+v;"},
kJ:{"^":"kI+z;"},
kK:{"^":"r+v;"},
kL:{"^":"kK+z;"},
kM:{"^":"r+v;"},
kN:{"^":"kM+z;"}}],["","",,P,{"^":"",
l3:function(a){var z,y
z=J.L(a)
if(!!z.$iscc){y=z.gdf(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fa(a.data,a.height,a.width)},
l2:function(a){if(a instanceof P.fa)return{data:a.a,height:a.b,width:a.c}
return a},
aN:function(a){var z,y,x,w,v
if(a==null)return
z=P.hz(P.p,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.R(y[w])
z.a1(0,v,a[v])}return z},
l0:function(a,b){var z={}
a.N(0,new P.l1(z))
return z},
dO:function(){var z=$.dN
if(z==null){z=J.cB(window.navigator.userAgent,"Opera",0)
$.dN=z}return z},
h0:function(){var z,y
z=$.dK
if(z!=null)return z
y=$.dL
if(y==null){y=J.cB(window.navigator.userAgent,"Firefox",0)
$.dL=y}if(y)z="-moz-"
else{y=$.dM
if(y==null){y=!P.dO()&&J.cB(window.navigator.userAgent,"Trident/",0)
$.dM=y}if(y)z="-ms-"
else z=P.dO()?"-o-":"-webkit-"}$.dK=z
return z},
fa:{"^":"a;df:a>,b,c",$iscc:1},
l1:{"^":"t:15;a",
$2:function(a,b){this.a[a]=b}},
hc:{"^":"cf;a,b",
gbR:function(){var z,y,x
z=this.b
y=H.aH(z,"v",0)
x=W.a0
return new H.hH(new H.jr(z,H.l(new P.hd(),{func:1,ret:P.a7,args:[y]}),[y]),H.l(new P.he(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bd(this.gbR().a)},
i:function(a,b){var z=this.gbR()
return z.b.$1(J.dq(z.a,b))},
gY:function(a){var z=P.hD(this.gbR(),!1,W.a0)
return new J.ah(z,z.length,0,[H.A(z,0)])},
$asv:function(){return[W.a0]},
$asf:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
hd:{"^":"t:26;",
$1:function(a){return!!J.L(H.i(a,"$isM")).$isa0}},
he:{"^":"t:27;",
$1:function(a){return H.c(H.i(a,"$isM"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ke:{"^":"a;$ti",
gb0:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.E(z+this.c,H.A(this,0))},
gc5:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.E(z+this.d,H.A(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bL(b,"$isac",[P.X],"$asac")
if(!z)return!1
z=this.a
y=J.cw(b)
x=y.gaM(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb3(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.A(this,0)
if(H.E(z+this.c,w)===y.gb0(b)){if(typeof x!=="number")return x.B()
z=H.E(x+this.d,w)===y.gc5(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.B()
v=H.A(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.E(x+this.d,v)
return P.jZ(P.cr(P.cr(P.cr(P.cr(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ac:{"^":"ke;aM:a>,b3:b>,ab:c>,a9:d>,$ti",p:{
ib:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ao()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.ao()
if(d<0)y=-d*0
else y=d
return new P.ac(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bV:{"^":"r;",$isbV:1,"%":"SVGLength"},m_:{"^":"k0;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$asv:function(){return[P.bV]},
$isf:1,
$asf:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$asz:function(){return[P.bV]},
"%":"SVGLengthList"},bY:{"^":"r;",$isbY:1,"%":"SVGNumber"},mc:{"^":"kb;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$asv:function(){return[P.bY]},
$isf:1,
$asf:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$asz:function(){return[P.bY]},
"%":"SVGNumberList"},mf:{"^":"r;0l:length=","%":"SVGPointList"},mm:{"^":"kq;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$asv:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$isd:1,
$asd:function(){return[P.p]},
$asz:function(){return[P.p]},
"%":"SVGStringList"},mn:{"^":"a0;",
gda:function(a){return new P.hc(a,new W.jA(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},c1:{"^":"r;",$isc1:1,"%":"SVGTransform"},mu:{"^":"kA;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.i(a,b)},
$asv:function(){return[P.c1]},
$isf:1,
$asf:function(){return[P.c1]},
$isd:1,
$asd:function(){return[P.c1]},
$asz:function(){return[P.c1]},
"%":"SVGTransformList"},k_:{"^":"r+v;"},k0:{"^":"k_+z;"},ka:{"^":"r+v;"},kb:{"^":"ka+z;"},kp:{"^":"r+v;"},kq:{"^":"kp+z;"},kz:{"^":"r+v;"},kA:{"^":"kz+z;"}}],["","",,P,{"^":"",lD:{"^":"r;0l:length=","%":"AudioBuffer"},lE:{"^":"jz;",
i:function(a,b){return P.aN(a.get(H.R(b)))},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gaB:function(a){var z=H.b([],[P.p])
this.N(a,new P.fF(z))
return z},
gl:function(a){return a.size},
$asae:function(){return[P.p,null]},
$isa4:1,
$asa4:function(){return[P.p,null]},
"%":"AudioParamMap"},fF:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lF:{"^":"aa;0l:length=","%":"AudioTrackList"},fH:{"^":"aa;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},md:{"^":"fH;0l:length=","%":"OfflineAudioContext"},jz:{"^":"r+ae;"}}],["","",,P,{"^":"",cY:{"^":"r;",
dU:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.L(g)
if(!!y.$iscc&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.l2(g))
return}if(!!y.$isdV&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fD("Incorrect number or type of arguments"))},
hV:function(a,b,c,d,e,f,g){return this.dU(a,b,c,d,e,f,g,null,null,null)},
$iscY:1,
"%":"WebGLRenderingContext"},j5:{"^":"r;",$isj5:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mk:{"^":"kn;",
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return P.aN(a.item(b))},
G:function(a,b){return this.i(a,b)},
$asv:function(){return[[P.a4,,,]]},
$isf:1,
$asf:function(){return[[P.a4,,,]]},
$isd:1,
$asd:function(){return[[P.a4,,,]]},
$asz:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},km:{"^":"r+v;"},kn:{"^":"km+z;"}}],["","",,O,{"^":"",aj:{"^":"a;0a,0b,0c,0d,$ti",
b5:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cv:function(a,b,c){var z=H.aH(this,"aj",0)
H.l(b,{func:1,ret:P.a7,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.B,[P.f,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
aD:function(a,b){return this.cv(a,null,b)},
cU:function(a){var z
H.w(a,"$isf",[H.aH(this,"aj",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cS:function(a,b){var z
H.w(b,"$isf",[H.aH(this,"aj",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.ah(z,z.length,0,[H.A(z,0)])},
G:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aH(this,"aj",0)
H.E(b,z)
z=[z]
if(this.cU(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cS(x,H.b([b],z))}},
aR:function(a,b){var z,y
H.w(b,"$isf",[H.aH(this,"aj",0)],"$asf")
if(this.cU(b)){z=this.a
y=z.length
C.a.aR(z,b)
this.cS(y,b)}},
$isf:1,
p:{
c8:function(a){var z=new O.aj([a])
z.b5(a)
return z}}},cU:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
ej:function(a){var z=this.b
if(!(z==null))z.u(a)},
aE:function(){return this.ej(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gck(z)
else return V.aO()},
bB:function(a){var z=this.a
if(a==null)C.a.h(z,V.aO())
else C.a.h(z,a)
this.aE()},
b_:function(){var z=this.a
if(z.length>0){z.pop()
this.aE()}}}}],["","",,E,{"^":"",cC:{"^":"a;"},ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cI:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();){y=z.d
if(y.f==null)y.cI()}},
sbG:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gn().E(0,this.gdO())
y=this.c
if(y!=null)y.gn().h(0,this.gdO())
x=new D.u("shape",z,this.c,this,[F.el])
x.b=!0
this.aa(x)}},
sah:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gn().E(0,this.gdP())
y=this.f
this.f=a
if(a!=null)a.gn().h(0,this.gdP())
this.cI()
x=new D.u("technique",y,this.f,this,[O.aR])
x.b=!0
this.aa(x)}},
saX:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gn().E(0,this.gdN())
if(a!=null)a.gn().h(0,this.gdN())
this.r=a
y=new D.u("mover",z,a,this,[U.a5])
y.b=!0
this.aa(y)}},
a5:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.au(0,b,this):null
if(!J.J(y,this.x)){x=this.x
this.x=y
w=new D.u("matrix",x,y,this,[V.al])
w.b=!0
this.aa(w)}z=this.f
if(z!=null)z.a5(0,b)
for(z=this.y.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();)z.d.a5(0,b)},
a4:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gR(z))
else C.a.h(z.a,y.k(0,z.gR(z)))
z.aE()
a.cr(this.f)
z=a.dy
x=(z&&C.a).gck(z)
if(x!=null&&this.d!=null)x.bD(a,this)
for(z=this.y.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();)z.d.a4(a)
a.cp()
a.dx.b_()},
gn:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aa:function(a){var z=this.z
if(!(z==null))z.u(a)},
T:function(){return this.aa(null)},
hB:[function(a){H.i(a,"$isx")
this.e=null
this.aa(a)},function(){return this.hB(null)},"iW","$1","$0","gdO",0,2,0],
hC:[function(a){this.aa(H.i(a,"$isx"))},function(){return this.hC(null)},"iX","$1","$0","gdP",0,2,0],
hA:[function(a){this.aa(H.i(a,"$isx"))},function(){return this.hA(null)},"iV","$1","$0","gdN",0,2,0],
hy:[function(a){this.aa(H.i(a,"$isx"))},function(){return this.hy(null)},"iT","$1","$0","gdM",0,2,0],
iS:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isf",[E.ax],"$asf")
for(z=b.length,y=this.gdM(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.aJ()
t.d=0
u.sa2(t)}t=u.ga2()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.T()},"$2","ghx",8,0,7],
iU:[function(a,b){var z,y,x,w,v
H.w(b,"$isf",[E.ax],"$asf")
for(z=b.length,y=this.gdM(),x=0;x<b.length;b.length===z||(0,H.y)(b),++x){w=b[x]
if(w!=null){if(w.ga2()==null){v=new D.aJ()
v.d=0
w.sa2(v)}w.ga2().E(0,y)}}this.T()},"$2","ghz",8,0,7],
$isaz:1,
p:{
cI:function(a,b,c,d,e,f){var z,y
z=new E.ax()
z.a=d
z.b=!0
y=O.c8(E.ax)
z.y=y
y.aD(z.ghx(),z.ghz())
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
z.sbG(0,e)
z.sah(f)
z.saX(c)
return z}}},ig:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
ef:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.as(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cU()
y=[V.al]
z.a=H.b([],y)
z.gn().h(0,new E.ii(this))
this.cy=z
z=new O.cU()
z.a=H.b([],y)
z.gn().h(0,new E.ij(this))
this.db=z
z=new O.cU()
z.a=H.b([],y)
z.gn().h(0,new E.ik(this))
this.dx=z
z=H.b([],[O.aR])
this.dy=z
C.a.h(z,null)
this.fr=new H.b_(0,0,[P.p,A.bZ])},
ghL:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.k(0,y.gR(y))
this.z=y
z=y}return z},
gdR:function(){var z,y
z=this.ch
if(z==null){z=this.ghL()
y=this.dx
y=z.k(0,y.gR(y))
this.ch=y
z=y}return z},
gdZ:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gR(z)
y=this.dx
y=z.k(0,y.gR(y))
this.cx=y
z=y}return z},
cr:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gck(z):a;(z&&C.a).h(z,y)},
cp:function(){var z=this.dy
if(z.length>1)z.pop()},
bf:function(a){var z=a.b
if(z.length===0)throw H.h(P.o("May not cache a shader with no name."))
if(this.fr.dd(0,z))throw H.h(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a1(0,z,a)},
p:{
ih:function(a,b){var z=new E.ig(a,b)
z.ef(a,b)
return z}}},ii:{"^":"t:8;a",
$1:function(a){var z
H.i(a,"$isx")
z=this.a
z.z=null
z.ch=null}},ij:{"^":"t:8;a",
$1:function(a){var z
H.i(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ik:{"^":"t:8;a",
$1:function(a){var z
H.i(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},iS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
el:[function(a){var z
H.i(a,"$isx")
z=this.x
if(!(z==null))z.u(a)
this.hQ()},function(){return this.el(null)},"ek","$1","$0","gcD",0,2,0],
ghj:function(){var z,y,x
z=Date.now()
y=C.f.a0(P.dP(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.as(z,!1)
return x/y},
cX:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.m(z)
x=C.e.aU(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.aU(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eu(C.l,this.ghP())},
hQ:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.iU(this),{func:1,ret:-1,args:[P.X]})
C.u.eD(z)
C.u.fk(z,W.fg(y,P.X))}},"$0","ghP",0,0,3],
hO:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cX()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.as(w,!1)
x.y=P.dP(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.a4(this.e)}}catch(v){z=H.aX(v)
y=H.bb(v)
P.dp("Error: "+H.k(z))
P.dp("Stack: "+H.k(y))
throw H.h(z)}},
p:{
iT:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscF)return E.et(a,!0,!0,!0,!1)
y=W.cG(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gda(a).h(0,y)
w=E.et(y,!0,!0,!0,!1)
w.a=a
return w},
et:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iS()
y=P.hA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.p,null)
x=C.k.bF(a,"webgl",y)
x=H.i(x==null?C.k.bF(a,"experimental-webgl",y):x,"$iscY")
if(x==null)H.q(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ih(x,a)
w=new T.iM(x)
w.b=H.W(x.getParameter(3379))
w.c=H.W(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jb(a)
v=new X.ht()
v.c=new X.aK(!1,!1,!1)
v.d=P.hB(null,null,null,P.B)
w.b=v
v=new X.hT(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hE(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iX(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.eo,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.l(w.geV(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.l(w.gf_(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.l(w.geS(),q),!1,r))
v=w.z
p=W.bo
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.l(w.gf1(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.l(w.gf0(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.l(w.gf4(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.l(w.gf6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.l(w.gf5(),s),!1,t))
p=w.z
o=W.bF;(p&&C.a).h(p,W.V(a,H.R(W.h6(a)),H.l(w.gf7(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.l(w.geW(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.l(w.geX(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.l(w.gf8(),q),!1,r))
r=w.z
q=W.b4
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.l(w.gfg(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.l(w.gfe(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.l(w.gff(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.as(Date.now(),!1)
z.cy=0
z.cX()
return z}}},iU:{"^":"t:40;a",
$1:function(a){var z
H.lp(a)
z=this.a
if(z.ch){z.ch=!1
z.hO()}}}}],["","",,Z,{"^":"",eV:{"^":"a;a,b",p:{
d8:function(a,b,c){var z
H.w(c,"$isd",[P.B],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b6(c)),35044)
a.bindBuffer(b,null)
return new Z.eV(b,z)}}},dw:{"^":"cC;a,b,c,d,e",
P:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aX(y)
x=P.o('Failed to bind buffer attribute "'+J.a8(this.a)+'": '+H.k(z))
throw H.h(x)}},
j:function(a){return"["+J.a8(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},cp:{"^":"a;a",$islG:1},bQ:{"^":"a;a,0b,c,d",
ae:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
P:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].P(a)},
aC:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a4:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.p]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].j(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$ismo:1},cd:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b2(this.c)+"'")+"]"}},aL:{"^":"a;a",
gcz:function(a){var z,y
z=this.a
y=(z&$.$get$a3().a)!==0?3:0
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$ap().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=4
if((z&$.$get$aS().a)!==0)++y
return(z&$.$get$aD().a)!==0?y+4:y},
h5:function(a){var z,y,x
z=$.$get$a3()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ap()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eU()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.b([],[P.p])
y=this.a
if((y&$.$get$a3().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$av().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ap().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
p:{
ao:function(a){return new Z.aL(a)}}}}],["","",,D,{"^":"",dz:{"^":"a;"},aJ:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
E:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.ar(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).E(z,b)||!1}else y=!1
return y},
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.x(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.N(y,new D.ha(z))
return!0},
dg:function(){return this.u(null)},
hR:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.u(y)}}},
a8:function(a){return this.hR(a,!0,!1)},
p:{
C:function(){var z=new D.aJ()
z.d=0
return z}}},ha:{"^":"t:31;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},bS:{"^":"x;c,d,a,0b,$ti"},bT:{"^":"x;c,d,a,0b,$ti"},u:{"^":"x;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dx:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
p:{"^":"lH<"}},e_:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},e0:{"^":"x;c,a,0b"},ht:{"^":"a;0a,0b,0c,0d",
hI:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.e0(a,this)
y.b=!0
return z.u(y)},
hE:function(a){var z,y
this.c=a.b
this.d.E(0,a.a)
z=this.b
if(z==null)return!1
y=new X.e0(a,this)
y.b=!0
return z.u(y)}},e4:{"^":"ch;x,y,c,d,e,a,0b"},hE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ax:function(a,b){var z,y,x,w,v,u,t,s
z=new P.as(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.Q(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.bX(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
co:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.ax(a,b))
return!0},
aZ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.e8()
if(typeof z!=="number")return z.e4()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.ax(a,b))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.ax(a,b))
return!0},
hJ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cV(new V.S(v*u,t*s),y,x,new P.as(w,!1),this)
w.b=!0
z.u(w)
return!0},
f3:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.as(Date.now(),!1)
y=this.f
x=new X.e4(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.Q(0,0)}},aK:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aK))return!1
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
return z+(this.c?"Shift+":"")}},bX:{"^":"ch;x,y,z,Q,ch,c,d,e,a,0b"},hT:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bP:function(a,b,c){var z,y,x
z=new P.as(Date.now(),!1)
y=this.a.gaL()
x=new X.bX(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
co:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bP(a,b,!0))
return!0},
aZ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.e8()
if(typeof z!=="number")return z.e4()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bP(a,b,!0))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bP(a,b,!1))
return!0},
hK:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cV(new V.S(w*v,u*t),y,b,new P.as(x,!1),this)
x.b=!0
z.u(x)
return!0}},cV:{"^":"ch;x,c,d,e,a,0b"},ch:{"^":"x;"},ey:{"^":"ch;x,y,z,Q,ch,c,d,e,a,0b"},iX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ax:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.Q],"$asd")
z=new P.as(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gaL()
w=new X.ey(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hH:function(a){var z
H.w(a,"$isd",[V.Q],"$asd")
z=this.b
if(z==null)return!1
z.u(this.ax(a,!0))
return!0},
hF:function(a){var z
H.w(a,"$isd",[V.Q],"$asd")
z=this.c
if(z==null)return!1
z.u(this.ax(a,!0))
return!0},
hG:function(a){var z
H.w(a,"$isd",[V.Q],"$asd")
z=this.d
if(z==null)return!1
z.u(this.ax(a,!1))
return!0}},jb:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.aQ(0,0,(z&&C.k).gdc(z).c,C.k.gdc(z).d)},
cP:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e_(z,new X.aK(y,a.altKey,a.shiftKey))},
aK:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
c0:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
ay:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.Q(y-w,x-v)},
aQ:function(a){return new V.S(a.movementX,a.movementY)},
bV:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.e.U(u.pageX)
C.e.U(u.pageY)
s=z.left
C.e.U(u.pageX)
C.a.h(y,new V.Q(t-s,C.e.U(u.pageY)-z.top))}return y},
av:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dx(z,new X.aK(y,a.altKey,a.shiftKey))},
bS:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.K()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
it:[function(a){this.f=!0},"$1","gf_",4,0,5],
ik:[function(a){this.f=!1},"$1","geS",4,0,5],
io:[function(a){H.i(a,"$isat")
if(this.f&&this.bS(a))a.preventDefault()},"$1","geV",4,0,4],
iv:[function(a){var z
H.i(a,"$isbo")
if(!this.f)return
z=this.cP(a)
if(this.b.hI(z))a.preventDefault()},"$1","gf1",4,0,17],
iu:[function(a){var z
H.i(a,"$isbo")
if(!this.f)return
z=this.cP(a)
if(this.b.hE(z))a.preventDefault()},"$1","gf0",4,0,17],
ix:[function(a){var z,y,x,w
H.i(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aK(a)
if(this.x){y=this.av(a)
x=this.aQ(a)
if(this.d.co(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.av(a)
w=this.ay(a)
if(this.c.co(y,w))a.preventDefault()},"$1","gf4",4,0,4],
iz:[function(a){var z,y,x
H.i(a,"$isat")
this.aK(a)
z=this.av(a)
if(this.x){y=this.aQ(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.aZ(z,x))a.preventDefault()},"$1","gf6",4,0,4],
iq:[function(a){var z,y,x
H.i(a,"$isat")
if(!this.bS(a)){this.aK(a)
z=this.av(a)
if(this.x){y=this.aQ(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.aZ(z,x))a.preventDefault()}},"$1","geX",4,0,4],
iy:[function(a){var z,y,x
H.i(a,"$isat")
this.aK(a)
z=this.av(a)
if(this.x){y=this.aQ(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gf5",4,0,4],
ip:[function(a){var z,y,x
H.i(a,"$isat")
if(!this.bS(a)){this.aK(a)
z=this.av(a)
if(this.x){y=this.aQ(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","geW",4,0,4],
iA:[function(a){var z,y
H.i(a,"$isbF")
this.aK(a)
z=new V.S((a&&C.t).ghe(a),C.t.ghf(a)).v(0,180)
if(this.x){if(this.d.hJ(z))a.preventDefault()
return}if(this.r)return
y=this.ay(a)
if(this.c.hK(z,y))a.preventDefault()},"$1","gf7",4,0,32],
iB:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.av(this.y)
v=this.ay(this.y)
this.d.f3(w,v,x)}},"$1","gf8",4,0,5],
iJ:[function(a){var z
H.i(a,"$isb4")
this.a.focus()
this.f=!0
this.c0(a)
z=this.bV(a)
if(this.e.hH(z))a.preventDefault()},"$1","gfg",4,0,11],
iH:[function(a){var z
H.i(a,"$isb4")
this.c0(a)
z=this.bV(a)
if(this.e.hF(z))a.preventDefault()},"$1","gfe",4,0,11],
iI:[function(a){var z
H.i(a,"$isb4")
this.c0(a)
z=this.bV(a)
if(this.e.hG(z))a.preventDefault()},"$1","gff",4,0,11]}}],["","",,D,{"^":"",h1:{"^":"a;",$isU:1,$isaz:1},U:{"^":"a;",$isaz:1},hu:{"^":"aj;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
ai:function(a){var z=this.Q
if(!(z==null))z.u(a)},
f2:[function(a){var z
H.i(a,"$isx")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.f2(null)},"iw","$1","$0","gcT",0,2,0],
iC:[function(a){var z,y,x
H.w(a,"$isf",[D.U],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.ez(x))return!1}return!0},"$1","gf9",4,0,37],
ih:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.U
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcT(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.i(b[u],"$isU")
if(t instanceof D.cg)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.aJ()
s.d=0
t.r=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.bS(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","geP",8,0,16],
iE:[function(a,b){var z,y,x,w,v,u
z=D.U
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcT(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=H.i(b[w],"$isU")
if(v instanceof D.cg)C.a.E(this.f,v)
u=v.r
if(u==null){u=new D.aJ()
u.d=0
v.r=u}u.E(0,x)}z=new D.bT(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","gfb",8,0,16],
ez:function(a){var z=C.a.ar(this.f,a)
return z},
$asf:function(){return[D.U]},
$asaj:function(){return[D.U]}},cg:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
ai:[function(a){var z
H.i(a,"$isx")
z=this.r
if(!(z==null))z.u(a)},function(){return this.ai(null)},"i5","$1","$0","gem",0,2,0],
$isU:1,
$isaz:1},iA:{"^":"a;",$isU:1,$isaz:1},iP:{"^":"a;",$isU:1,$isaz:1},iQ:{"^":"a;",$isU:1,$isaz:1},iR:{"^":"a;",$isU:1,$isaz:1}}],["","",,V,{"^":"",
lJ:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.m(a)
return Math.abs(b-a)<=1e-9},"$2","hQ",8,0,33],
cA:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.aP(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.e.dX($.j.$2(a,0)?0:a,b),c+b+1)},
ba:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.n],"$asd")
z=H.b([],[P.p])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.H(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.a1(z,u,C.i.ag(z[u],x))}return z},
bO:function(a,b){return C.e.hX(Math.pow(b,C.z.aU(Math.log(H.l_(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
ar:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
cT:{"^":"a;a,b,c,d,e,f,r,x,y",
Z:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.n])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cT))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
z=b.e
if(!$.j.$2(z,this.e))return!1
z=b.f
if(!$.j.$2(z,this.f))return!1
z=b.r
if(!$.j.$2(z,this.r))return!1
z=b.x
if(!$.j.$2(z,this.x))return!1
z=b.y
if(!$.j.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.n]
y=V.ba(H.b([this.a,this.d,this.r],z),3,0)
x=V.ba(H.b([this.b,this.e,this.x],z),3,0)
w=V.ba(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
al:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
Z:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.n])
return z},
dH:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.m(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.m(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.m(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.m(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.m(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.m(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.j.$2(a2,0))return V.aO()
a3=1/a2
a4=-w
a5=-i
return V.ay((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.m(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.m(s)
r=a7.b
if(typeof r!=="number")return H.m(r)
q=a7.f
if(typeof q!=="number")return H.m(q)
p=a7.z
if(typeof p!=="number")return H.m(p)
o=a7.cy
if(typeof o!=="number")return H.m(o)
n=a7.c
if(typeof n!=="number")return H.m(n)
m=a7.r
if(typeof m!=="number")return H.m(m)
l=a7.Q
if(typeof l!=="number")return H.m(l)
k=a7.db
if(typeof k!=="number")return H.m(k)
j=a7.d
if(typeof j!=="number")return H.m(j)
i=a7.x
if(typeof i!=="number")return H.m(i)
h=a7.ch
if(typeof h!=="number")return H.m(h)
g=a7.dx
if(typeof g!=="number")return H.m(g)
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
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dY:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gak(a)
if(typeof z!=="number")return z.k()
y=C.e.k(z,y)
z=this.b
x=a.gal(a)
if(typeof z!=="number")return z.k()
x=C.e.k(z,x)
z=this.c
w=a.gam()
if(typeof z!=="number")return z.k()
w=C.e.k(z,w)
z=this.e
v=a.gak(a)
if(typeof z!=="number")return z.k()
v=C.e.k(z,v)
z=this.f
u=a.gal(a)
if(typeof z!=="number")return z.k()
u=C.e.k(z,u)
z=this.r
t=a.gam()
if(typeof z!=="number")return z.k()
t=C.e.k(z,t)
z=this.y
s=a.gak(a)
if(typeof z!=="number")return z.k()
s=C.e.k(z,s)
z=this.z
r=a.gal(a)
if(typeof z!=="number")return z.k()
r=C.e.k(z,r)
z=this.Q
q=a.gam()
if(typeof z!=="number")return z.k()
return new V.I(y+x+w,v+u+t,s+r+C.e.k(z,q))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.m(u)
t=this.d
if(typeof t!=="number")return H.m(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.m(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.m(l)
return new V.Z(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
z=b.e
if(!$.j.$2(z,this.e))return!1
z=b.f
if(!$.j.$2(z,this.f))return!1
z=b.r
if(!$.j.$2(z,this.r))return!1
z=b.x
if(!$.j.$2(z,this.x))return!1
z=b.y
if(!$.j.$2(z,this.y))return!1
z=b.z
if(!$.j.$2(z,this.z))return!1
z=b.Q
if(!$.j.$2(z,this.Q))return!1
z=b.ch
if(!$.j.$2(z,this.ch))return!1
z=b.cx
if(!$.j.$2(z,this.cx))return!1
z=b.cy
if(!$.j.$2(z,this.cy))return!1
z=b.db
if(!$.j.$2(z,this.db))return!1
z=b.dx
if(!$.j.$2(z,this.dx))return!1
return!0},
j:function(a){return this.I()},
dG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.n]
y=V.ba(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ba(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ba(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ba(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.e(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.e(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.e(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.e(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.e(y,1)
q=q+y[1]+", "
if(1>=t)return H.e(x,1)
q=q+x[1]+", "
if(1>=s)return H.e(w,1)
q=q+w[1]+", "
if(1>=r)return H.e(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.e(y,2)
u=u+y[2]+", "
if(2>=t)return H.e(x,2)
u=u+x[2]+", "
if(2>=s)return H.e(w,2)
u=u+w[2]+", "
if(2>=r)return H.e(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.e(y,3)
q=q+y[3]+", "
if(3>=t)return H.e(x,3)
q=q+x[3]+", "
if(3>=s)return H.e(w,3)
q=q+w[3]+", "
if(3>=r)return H.e(v,3)
return u+(q+v[3]+"]")},
I:function(){return this.dG("",3,0)},
A:function(a){return this.dG(a,3,0)},
p:{
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aO:function(){return V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eb:function(a,b,c){return V.ay(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
e9:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ea:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ay(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
Q:{"^":"a;a,b",
K:function(a,b){return new V.Q(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
Z:{"^":"a;a,b,c",
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.m(w)
return new V.Z(this.a+z,this.b+y,x+w)},
K:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.K()
if(typeof w!=="number")return H.m(w)
return new V.Z(this.a-z,this.b-y,x-w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
b1:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
ck:{"^":"a;a,b,c,d",
gat:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ck))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
z=b.d
if(!$.j.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"},
p:{
aQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ck(a,b,c,d)}}},
S:{"^":"a;a,b",
hp:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,19],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.S(z*b,y*b)},
v:function(a,b){var z,y
if($.j.$2(b,0))return new V.S(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.S(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
I:{"^":"a;a,b,c",
hp:[function(a){return Math.sqrt(this.C(this))},"$0","gl",1,0,19],
C:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.m(y)
return this.a*a.a+this.b*a.b+z*y},
cl:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.K()
if(typeof x!=="number")return H.m(x)
return new V.I(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
aS:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.m(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.m(w)
return new V.I(this.a+z,this.b+y,x+w)},
L:function(a){var z=this.c
if(typeof z!=="number")return z.L()
return new V.I(-this.a,-this.b,-z)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.I(this.a*b,this.b*b,z*b)},
v:function(a,b){var z
if($.j.$2(b,0))return new V.I(0,0,0)
z=this.c
if(typeof z!=="number")return z.v()
return new V.I(this.a/b,this.b/b,z/b)},
dI:function(){if(!$.j.$2(0,this.a))return!1
if(!$.j.$2(0,this.b))return!1
if(!$.j.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.j.$2(z,this.a))return!1
z=b.b
if(!$.j.$2(z,this.b))return!1
z=b.c
if(!$.j.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fP:{"^":"dz;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.cA(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
H:function(a){var z=this.y
if(!(z==null))z.u(a)},
se_:function(a,b){},
sdJ:function(a){var z,y
z=this.b
if(!$.j.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.u("maximumLocation",y,this.b,this,[P.n])
z.b=!0
this.H(z)}},
sdL:function(a){var z,y
z=this.c
if(!$.j.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.u("minimumLocation",y,this.c,this,[P.n])
z.b=!0
this.H(z)}},
sa3:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.j.$2(z,b)){y=this.d
this.d=b
z=new D.u("location",y,b,this,[P.n])
z.b=!0
this.H(z)}},
sdK:function(a){var z,y,x
z=this.e
if(!$.j.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.u("maximumVelocity",y,a,this,[P.n])
z.b=!0
this.H(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.j.$2(z,a)){x=this.f
this.f=a
z=new D.u("velocity",x,a,this,[P.n])
z.b=!0
this.H(z)}},
sde:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.j.$2(z,a)){y=this.x
this.x=a
z=new D.u("dampening",y,a,this,[P.n])
z.b=!0
this.H(z)}},
a5:function(a,b){var z,y,x,w
z=this.f
if($.j.$2(z,0)){z=this.r
z=!$.j.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*b)
z=this.x
if(!$.j.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
p:{
dB:function(){var z=new U.fP()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dC:{"^":"a5;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
au:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.J(this.a,b.a)},
j:function(a){return"Constant: "+this.a.A("          ")},
p:{
dD:function(a){var z=new U.dC()
z.a=a
return z}}},dT:{"^":"aj;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
H:[function(a){var z
H.i(a,"$isx")
z=this.e
if(!(z==null))z.u(a)},function(){return this.H(null)},"aI","$1","$0","gba",0,2,0],
i6:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a5
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gba(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gn()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gen",8,0,20],
iD:[function(a,b){var z,y,x,w,v
z=U.a5
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gba(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gn().E(0,x)}z=new D.bT(a,b,this,[z])
z.b=!0
this.H(z)},"$2","gfa",8,0,20],
au:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ao()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ah(z,z.length,0,[H.A(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.au(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.aO():x
z=this.e
if(!(z==null))z.a8(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.J(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asf:function(){return[U.a5]},
$asaj:function(){return[U.a5]},
$isa5:1,
p:{
dU:function(a){var z=new U.dT()
z.b5(U.a5)
z.aD(z.gen(),z.gfa())
z.aR(0,a)
z.e=null
z.f=V.aO()
z.r=0
return z}}},a5:{"^":"dz;"},ek:{"^":"a5;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gn:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
H:function(a){var z=this.y
if(!(z==null))z.u(a)},
se2:function(a){var z,y
a=V.cA(a,0,6.283185307179586)
z=this.a
if(!$.j.$2(z,a)){y=this.a
this.a=a
z=new D.u("yaw",y,a,this,[P.n])
z.b=!0
this.H(z)}},
sdQ:function(a,b){var z,y
b=V.cA(b,0,6.283185307179586)
z=this.b
if(!$.j.$2(z,b)){y=this.b
this.b=b
z=new D.u("pitch",y,b,this,[P.n])
z.b=!0
this.H(z)}},
sdS:function(a){var z,y
a=V.cA(a,0,6.283185307179586)
z=this.c
if(!$.j.$2(z,a)){y=this.c
this.c=a
z=new D.u("roll",y,a,this,[P.n])
z.b=!0
this.H(z)}},
au:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.se2(this.a+this.d*b.y)
this.sdQ(0,this.b+this.e*b.y)
this.sdS(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.ay(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.ea(this.b)).k(0,V.e9(this.a))
z=this.y
if(!(z==null))z.a8(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ek))return!1
z=this.a
y=b.a
if(!$.j.$2(z,y))return!1
z=this.b
y=b.b
if(!$.j.$2(z,y))return!1
z=this.c
y=b.c
if(!$.j.$2(z,y))return!1
z=this.d
y=b.d
if(!$.j.$2(z,y))return!1
z=this.e
y=b.e
if(!$.j.$2(z,y))return!1
z=this.f
y=b.f
if(!$.j.$2(z,y))return!1
return!0},
j:function(a){return"Rotater: ["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"], ["+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"}},jc:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
H:[function(a){var z
H.i(a,"$isx")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.H(null)},"aI","$1","$0","gba",0,2,0],
c3:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.geL())
z=this.a.c
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.geM())
z=this.a.c
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.geN())
z=this.a.d
y=z.f
if(y==null){y=D.C()
z.f=y
z=y}else z=y
z.h(0,this.geI())
z=this.a.d
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.geJ())
z=this.a.e
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gfE())
z=this.a.e
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gfD())
z=this.a.e
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.gfC())
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.S(z,y)},
ib:[function(a){a=H.c(H.i(a,"$isx"),"$isbX")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geL",4,0,1],
ic:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isx"),"$isbX")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.S(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.aq(new V.S(y.a,y.b).k(0,2).v(0,z.gat()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.m(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.m(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aq(new V.S(x.a,x.b).k(0,2).v(0,z.gat()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sa3(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.aq(new V.S(y.a,y.b).k(0,2).v(0,z.gat()))}this.aI()},"$1","geM",4,0,1],
ie:[function(a){var z,y,x
H.i(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.m(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.m(z)
x.sV(-y*10*z)
this.aI()}},"$1","geN",4,0,1],
i9:[function(a){if(H.c(H.i(a,"$isx"),"$ise4").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geI",4,0,1],
ia:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isx"),"$isbX")
if(!J.J(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aq(new V.S(x.a,x.b).k(0,2).v(0,z.gat()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sa3(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.aq(new V.S(y.a,y.b).k(0,2).v(0,z.gat()))
this.aI()},"$1","geJ",4,0,1],
iN:[function(a){H.i(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfE",4,0,1],
iM:[function(a){var z,y,x,w,v,u,t
a=H.c(H.i(a,"$isx"),"$isey")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.S(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.m(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.aq(new V.S(y.a,y.b).k(0,2).v(0,z.gat()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.m(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.m(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aq(new V.S(x.a,x.b).k(0,2).v(0,z.gat()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.m(u)
t=this.cy
if(typeof t!=="number")return H.m(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.m(v)
x=this.db
if(typeof x!=="number")return H.m(x)
t.sa3(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.aq(new V.S(y.a,y.b).k(0,2).v(0,z.gat()))}this.aI()},"$1","gfD",4,0,1],
iL:[function(a){var z,y,x
H.i(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.m(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.m(z)
x.sV(-y*10*z)
this.aI()}},"$1","gfC",4,0,1],
au:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.ao()
if(z<y){this.dy=y
x=b.y
this.c.a5(0,x)
this.b.a5(0,x)
this.fr=V.e9(this.b.d).k(0,V.ea(this.c.d))}return this.fr},
$isa5:1},jd:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
H:function(a){var z=this.r
if(!(z==null))z.u(a)},
c3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=this.geO()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ig:[function(a){var z,y,x,w
H.i(a,"$isx")
if(!J.J(this.b,this.a.b.c))return
H.c(a,"$iscV")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.u("zoom",z,w,this,[P.n])
z.b=!0
this.H(z)}},"$1","geO",4,0,1],
au:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ay(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",fQ:{"^":"aj;0e,0f,0a,0b,0c,0d",
gn:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
X:[function(a){var z
H.i(a,"$isx")
z=this.f
if(!(z==null))z.u(a)},function(){return this.X(null)},"cE","$1","$0","gS",0,2,0],
iF:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aA
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gn()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gfc",8,0,21],
iG:[function(a,b){var z,y,x,w,v
z=M.aA
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null)v.gn().E(0,x)}z=new D.bT(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gfd",8,0,21],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$asf:function(){return[M.aA]},
$asaj:function(){return[M.aA]},
$isaA:1},fS:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
X:[function(a){var z
H.i(a,"$isx")
z=this.f
if(!(z==null))z.u(a)},function(){return this.X(null)},"cE","$1","$0","gS",0,2,0],
saN:function(a,b){var z,y
if(b==null)b=X.cJ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gn().E(0,this.gS())
y=this.b
this.b=b
b.gn().h(0,this.gS())
z=new D.u("target",y,this.b,this,[X.cl])
z.b=!0
this.X(z)}},
sah:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gn().E(0,this.gS())
y=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gS())
z=new D.u("technique",y,this.c,this,[O.aR])
z.b=!0
this.X(z)}},
a4:function(a){var z,y
a.cr(this.c)
this.b.P(a)
z=this.a
z.toString
a.cy.bB(V.aO())
y=V.aO()
z.a
a.db.bB(y)
z=this.c
if(z!=null)z.a5(0,a)
this.d.a5(0,a)
this.d.a4(a)
this.a.toString
a.cy.b_()
a.db.b_()
this.b.toString
a.cp()},
$isaA:1,
p:{
dF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new M.fS()
a=new X.hk()
y=z.a
z.a=a
a.gn().h(0,z.gS())
x=new D.u("camera",y,z.a,z,[X.c7])
x.b=!0
z.X(x)
z.saN(0,b)
z.sah(c)
x=E.cI(null,!0,null,"",null,null)
w=F.cZ()
v=w.a
u=new V.I(-1,-1,1)
u=u.v(0,Math.sqrt(u.C(u)))
t=v.be(new V.b1(1,2,4,6),new V.ar(1,0,0,1),new V.Z(-1,-1,0),new V.Q(0,1),u,null)
v=w.a
u=new V.I(1,-1,1)
u=u.v(0,Math.sqrt(u.C(u)))
s=v.be(new V.b1(0,3,4,6),new V.ar(0,0,1,1),new V.Z(1,-1,0),new V.Q(1,1),u,null)
v=w.a
u=new V.I(1,1,1)
u=u.v(0,Math.sqrt(u.C(u)))
r=v.be(new V.b1(0,2,5,6),new V.ar(0,1,0,1),new V.Z(1,1,0),new V.Q(1,0),u,null)
v=w.a
u=new V.I(-1,1,1)
u=u.v(0,Math.sqrt(u.C(u)))
q=v.be(new V.b1(0,2,4,7),new V.ar(1,1,0,1),new V.Z(-1,1,0),new V.Q(0,0),u,null)
w.d.h1(H.b([t,s,r,q],[F.ag]))
w.aj()
x.sbG(0,w)
z.d=x
z.e=null
return z}}},h8:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
X:[function(a){var z
H.i(a,"$isx")
z=this.x
if(!(z==null))z.u(a)},function(){return this.X(null)},"cE","$1","$0","gS",0,2,0],
il:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.ax
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.aJ()
s.d=0
t.sa2(s)}s=t.ga2()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bS(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geT",8,0,7],
im:[function(a,b){var z,y,x,w,v,u
z=E.ax
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gS(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null){if(v.ga2()==null){u=new D.aJ()
u.d=0
v.sa2(u)}v.ga2().E(0,x)}}z=new D.bT(a,b,this,[z])
z.b=!0
this.X(z)},"$2","geU",8,0,7],
sc9:function(a){var z,y
if(a==null)a=X.ef(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gn().E(0,this.gS())
y=this.a
this.a=a
a.gn().h(0,this.gS())
z=new D.u("camera",y,this.a,this,[X.c7])
z.b=!0
this.X(z)}},
saN:function(a,b){var z,y
if(b==null)b=X.cJ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gn().E(0,this.gS())
y=this.b
this.b=b
b.gn().h(0,this.gS())
z=new D.u("target",y,this.b,this,[X.cl])
z.b=!0
this.X(z)}},
sah:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gn().E(0,this.gS())
y=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gS())
z=new D.u("technique",y,this.c,this,[O.aR])
z.b=!0
this.X(z)}},
gn:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.cr(this.c)
this.b.P(a)
z=this.a
y=a.c
x=a.d
w=z.c
v=z.d
u=z.e
t=u-v
s=1/Math.tan(w*0.5)
r=V.ay(-s/(y/x),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0)
z.a
a.cy.bB(r)
y=$.eg
if(y==null){y=new V.I(0,0,-1)
q=y.v(0,Math.sqrt(y.C(y)))
y=new V.I(0,1,0).aS(q)
p=y.v(0,Math.sqrt(y.C(y)))
o=q.aS(p)
n=new V.I(0,0,0)
y=V.ay(p.a,o.a,q.a,p.L(0).C(n),p.b,o.b,q.b,o.L(0).C(n),p.c,o.c,q.c,q.L(0).C(n),0,0,0,1)
$.eg=y
m=y}else m=y
y=z.b
if(y!=null){l=y.au(0,a,z)
if(l!=null)m=l.k(0,m)}a.db.bB(m)
z=this.c
if(z!=null)z.a5(0,a)
for(z=this.d.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();)z.d.a5(0,a)
for(z=this.d.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();)z.d.a4(a)
this.a.toString
a.cy.b_()
a.db.b_()
this.b.aC(a)
a.cp()},
$isaA:1,
p:{
dQ:function(a,b,c,d){var z,y
z=new M.h8()
y=O.c8(E.ax)
z.d=y
y.aD(z.geT(),z.geU())
z.e=null
z.f=null
z.r=null
z.x=null
z.sc9(a)
z.saN(0,c)
z.sah(d)
z.d.aR(0,b)
return z}}},aA:{"^":"a;"}}],["","",,A,{"^":"",ds:{"^":"a;a,b,c"},fE:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hg:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
bj:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dJ:{"^":"bZ;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},dS:{"^":"bZ;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y",
a7:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.cw(c)
b.a.uniform1i(b.d,0)}}},e7:{"^":"bZ;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0an,0bk,0dh,0bl,0bm,0di,0dj,0bn,0bo,0dk,0dl,0bp,0bq,0dm,0dn,0br,0dq,0dr,0bs,0ds,0dt,0bt,0bu,0bv,0du,0dv,0bw,0bx,0dw,0dz,0by,0dA,0cc,0dB,0cd,0dC,0ce,0dD,0cf,0dE,0cg,0dF,0ci,a,b,0c,0d,0e,0f,0r,0x,0y",
ee:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
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
a1.fH(z)
a1.fO(z)
a1.fI(z)
a1.fW(z)
a1.fX(z)
a1.fQ(z)
a1.h0(z)
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
v=this.z
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
v.fL(z)
v.fG(z)
v.fJ(z)
v.fM(z)
v.fU(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fS(z)
v.fT(z)}v.fP(z)
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
p=H.b([],[P.p])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fK(z)
v.fR(z)
v.fV(z)
v.fY(z)
v.fZ(z)
v.h_(z)
v.fN(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.p])
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
this.bz(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a1.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$isad")
if(y)this.dy=H.c(this.y.m(0,"objMat"),"$isad")
if(w)this.fr=H.c(this.y.m(0,"viewObjMat"),"$isad")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$isad")
if(a1.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$iscn")
if(a1.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$isad")
if(a1.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$isad")
this.r1=H.b([],[A.ad])
y=a1.as
if(y>0){this.k4=H.i(this.y.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.q(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isad"))}}y=a1.a
if(y!==C.b){this.r2=H.c(this.y.m(0,"emissionClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.rx=H.c(this.y.m(0,"emissionTxt"),"$isa2")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.ry=H.c(this.y.m(0,"emissionTxt"),"$isan")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.x2=H.c(this.y.m(0,"ambientClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.y1=H.c(this.y.m(0,"ambientTxt"),"$isa2")
this.as=H.c(this.y.m(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.y2=H.c(this.y.m(0,"ambientTxt"),"$isan")
this.as=H.c(this.y.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.an=H.c(this.y.m(0,"diffuseClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.bk=H.c(this.y.m(0,"diffuseTxt"),"$isa2")
this.bl=H.c(this.y.m(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.dh=H.c(this.y.m(0,"diffuseTxt"),"$isan")
this.bl=H.c(this.y.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bm=H.c(this.y.m(0,"invDiffuseClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.di=H.c(this.y.m(0,"invDiffuseTxt"),"$isa2")
this.bn=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.dj=H.c(this.y.m(0,"invDiffuseTxt"),"$isan")
this.bn=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bq=H.c(this.y.m(0,"shininess"),"$isN")
this.bo=H.c(this.y.m(0,"specularClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.dk=H.c(this.y.m(0,"specularTxt"),"$isa2")
this.bp=H.c(this.y.m(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.dl=H.c(this.y.m(0,"specularTxt"),"$isan")
this.bp=H.c(this.y.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.h:break
case C.c:this.dm=H.c(this.y.m(0,"bumpTxt"),"$isa2")
this.br=H.c(this.y.m(0,"nullBumpTxt"),"$isF")
break
case C.d:this.dn=H.c(this.y.m(0,"bumpTxt"),"$isan")
this.br=H.c(this.y.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dq=H.c(this.y.m(0,"envSampler"),"$isan")
this.dr=H.c(this.y.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bs=H.c(this.y.m(0,"reflectClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.ds=H.c(this.y.m(0,"reflectTxt"),"$isa2")
this.bt=H.c(this.y.m(0,"nullReflectTxt"),"$isF")
break
case C.d:this.dt=H.c(this.y.m(0,"reflectTxt"),"$isan")
this.bt=H.c(this.y.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bu=H.c(this.y.m(0,"refraction"),"$isN")
this.bv=H.c(this.y.m(0,"refractClr"),"$isG")
switch(y){case C.b:break
case C.h:break
case C.c:this.du=H.c(this.y.m(0,"refractTxt"),"$isa2")
this.bw=H.c(this.y.m(0,"nullRefractTxt"),"$isF")
break
case C.d:this.dv=H.c(this.y.m(0,"refractTxt"),"$isan")
this.bw=H.c(this.y.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bx=H.c(this.y.m(0,"alpha"),"$isN")
switch(y){case C.b:break
case C.h:break
case C.c:this.dw=H.c(this.y.m(0,"alphaTxt"),"$isa2")
this.by=H.c(this.y.m(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.dz=H.c(this.y.m(0,"alphaTxt"),"$isan")
this.by=H.c(this.y.m(0,"nullAlphaTxt"),"$isF")
break}}this.cc=H.b([],[A.eM])
this.cd=H.b([],[A.eN])
this.ce=H.b([],[A.eO])
this.cf=H.b([],[A.eP])
this.cg=H.b([],[A.eQ])
this.ci=H.b([],[A.eR])
if(a1.k2){y=a1.z
if(y>0){this.dA=H.i(this.y.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isG")
x=this.y
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isG")
x=this.cc;(x&&C.a).h(x,new A.eM(m,l,k))}}y=a1.Q
if(y>0){this.dB=H.i(this.y.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isG")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isG")
x=this.y
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isG")
x=this.y
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isN")
x=this.y
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isN")
x=this.y
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isN")
x=this.cd;(x&&C.a).h(x,new A.eN(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dC=H.i(this.y.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isG")
x=this.y
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isG")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isG")
x=this.y
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isG")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isN")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isN")
x=this.y
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isN")
x=this.y
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isN")
x=this.y
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isN")
x=this.ce;(x&&C.a).h(x,new A.eO(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dD=H.i(this.y.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isG")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isG")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isG")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isG")
x=this.y
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isG")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isF")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isa2")
x=this.cf;(x&&C.a).h(x,new A.eP(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dE=H.i(this.y.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isG")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isG")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$iscn")
x=this.y
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isG")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isF")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isN")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isN")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isN")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isan")
x=this.cg;(x&&C.a).h(x,new A.eQ(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dF=H.i(this.y.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isG")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isG")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isG")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isG")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isG")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isF")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isG")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isN")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isN")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isN")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isN")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isN")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isa2")
x=this.ci;(x&&C.a).h(x,new A.eR(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a7:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.cw(c)
b.a.uniform1i(b.d,0)}},
ad:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
hJ:function(a,b){var z,y
z=a.an
y=new A.e7(b,z)
y.b6(b,z)
y.ee(a,b)
return y}}},hN:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,an,bk",
fH:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
fO:function(a){var z
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
fI:function(a){var z
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
fW:function(a){var z,y
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
fX:function(a){var z,y
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
fQ:function(a){var z
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
h0:function(a){var z
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
aw:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cA(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fL:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aw(a,z,"emission")
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
fG:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aw(a,z,"ambient")
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
fJ:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aw(a,z,"diffuse")
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
fM:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aw(a,z,"invDiffuse")
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
fU:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aw(a,z,"specular")
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
fP:function(a){var z,y
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
fS:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aw(a,z,"reflect")
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
fT:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aw(a,z,"refract")
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
fK:function(a){var z,y
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
fR:function(a){var z,y
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
fV:function(a){var z,y
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
fY:function(a){var z,y,x
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
fZ:function(a){var z,y,x
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
h_:function(a){var z,y,x
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
fN:function(a){var z
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
j:function(a){return this.an}},eM:{"^":"a;a,b,c"},eP:{"^":"a;a,b,c,d,e,f,r,x"},eN:{"^":"a;a,b,c,d,e,f,r"},eQ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eO:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eR:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},bZ:{"^":"cC;",
b6:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bz:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.cQ(b,35633)
this.f=this.cQ(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.fk(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.q(P.o("Failed to link shader: "+H.k(x)))}this.fv()
this.fz()},
P:function(a){a.a.useProgram(this.r)
this.x.hg()},
cQ:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fk(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.o("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fv:function(){var z,y,x,w,v,u
z=H.b([],[A.ds])
y=this.a
x=H.W(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.m(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ds(y,v.name,u))}this.x=new A.fE(z)},
fz:function(){var z,y,x,w,v,u
z=H.b([],[A.a6])
y=this.a
x=H.W(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.m(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hd(v.type,v.size,v.name,u))}this.y=new A.j4(z)},
aH:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.F(z,y,b,c)
else return A.d4(z,y,b,a,c)},
eA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a2(z,y,b,c)
else return A.d4(z,y,b,a,c)},
eB:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.d4(z,y,b,a,c)},
bd:function(a,b){return new P.eX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hd:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.N(this.a,this.r,c,d)
case 35664:return new A.bC(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.eL(this.a,this.r,c,d)
case 35667:return new A.j1(this.a,this.r,c,d)
case 35668:return new A.j2(this.a,this.r,c,d)
case 35669:return new A.j3(this.a,this.r,c,d)
case 35674:return new A.j6(this.a,this.r,c,d)
case 35675:return new A.cn(this.a,this.r,c,d)
case 35676:return new A.ad(this.a,this.r,c,d)
case 35678:return this.eA(b,c,d)
case 35680:return this.eB(b,c,d)
case 35670:throw H.h(this.bd("BOOL",c))
case 35671:throw H.h(this.bd("BOOL_VEC2",c))
case 35672:throw H.h(this.bd("BOOL_VEC3",c))
case 35673:throw H.h(this.bd("BOOL_VEC4",c))
default:throw H.h(P.o("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},c9:{"^":"a;a,b",
j:function(a){return this.b}},er:{"^":"bZ;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
ei:function(a,b){var z,y,x,w,v
this.bz(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iL(a))
this.z=this.x.i(0,"posAttr")
this.Q=H.c(this.y.m(0,"txtCount"),"$isF")
this.ch=H.c(this.y.m(0,"backClr"),"$iseL")
this.cx=H.b([],[A.a2])
this.cy=H.b([],[A.ad])
z=[A.bC]
this.db=H.b([],z)
this.dx=H.b([],z)
this.dy=H.b([],z)
this.fr=H.b([],z)
this.fx=H.b([],[A.F])
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isa2"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isad"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbC"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbC"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbC"))
z=this.fr
x=this.y
w="destSize"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isbC"))
z=this.fx
x=this.y
w="flip"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isF"))}},
p:{
iL:function(a){var z,y
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
iK:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.er(b,z)
y.b6(b,z)
y.ei(a,b)
return y}}},a6:{"^":"a;"},j4:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.i(0,b)
if(z==null)throw H.h(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.I()},
hi:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].j(0)+a
return x},
I:function(){return this.hi("\n")}},F:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},j1:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},j2:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},j3:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},j0:{"^":"a6;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
p:{
d4:function(a,b,c,d,e){var z=new A.j0(a,b,c,e)
z.f=d
z.e=P.hC(d,0,!1,P.B)
return z}}},N:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},bC:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},G:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},eL:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform4f: "+H.k(this.c)}},j6:{"^":"a6;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},cn:{"^":"a6;a,b,c,d",
a6:function(a){var z=new Float32Array(H.b6(H.w(a,"$isd",[P.n],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},ad:{"^":"a6;a,b,c,d",
a6:function(a){var z=new Float32Array(H.b6(H.w(a,"$isd",[P.n],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},a2:{"^":"a6;a,b,c,d",
cw:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},an:{"^":"a6;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cs:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.i4()
return(y>0?z+4:z)*2},
bH:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ag,P.n,P.n]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.I(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.I(t+h,s+f,r+g)
z.b=q
p=new V.I(t-h,s-f,r-g)
z.c=p
o=new V.I(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cs(y)
k=F.cs(z.b)
j=F.fw(d,e,new F.kO(z,F.cs(z.c),F.cs(z.d),k,l,c),b)
if(j!=null)a.cn(j)},
lv:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.lw()
z=new F.lx(z,c)
y=F.cZ()
F.bH(y,null,z,d,a,1,0,0,1)
F.bH(y,null,z,d,a,0,1,0,3)
F.bH(y,null,z,d,a,0,0,1,2)
F.bH(y,null,z,d,a,-1,0,0,0)
F.bH(y,null,z,d,a,0,-1,0,0)
F.bH(y,null,z,d,a,0,0,-1,3)
y.aj()
y.hu(new F.jl(),new F.hY())
return y},
l9:function(a,b,c){var z={}
z.a=b
z.a=new F.la()
return F.fw(c,a,new F.lb(z),null)},
fw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ag,P.n,P.n]})
if(a<1)return
if(b<1)return
z=F.cZ()
y=H.b([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.co(null,null,new V.ar(u,0,0,1),null,null,new V.Q(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cb(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.co(null,null,new V.ar(o,n,m,1),null,null,new V.Q(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cb(d))}}z.d.h2(a+1,b+1,y)
return z},
kO:{"^":"t:10;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cl(z.b,b).cl(z.d.cl(z.c,b),c)
a.sa3(0,new V.Z(y.a,y.b,y.c))
a.sdV(y.v(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
a.sd8(new V.b1(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
this.f.$3(a,b,c)}},
lw:{"^":"t:22;",
$2:function(a,b){return 0}},
lx:{"^":"t:10;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.m(z)
y=a.f
x=new V.I(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.C(x))).k(0,this.b+z)
a.sa3(0,new V.Z(z.a,z.b,z.c))}},
la:{"^":"t:22;",
$2:function(a,b){return 0}},
lb:{"^":"t:10;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa3(0,new V.Z(z,y,this.a.a.$2(b,c)))
x=new V.I(z,y,1)
a.sdV(x.v(0,Math.sqrt(x.C(x))))
x=1-b
w=1-c
a.sd8(new V.b1(b*c,2+x*c,4+b*w,6+x*w))}},
ak:{"^":"a;0a,0b,0c,0d,0e",
aA:function(){if(!this.gaT()){C.a.E(this.a.a.d.b,this)
this.a.a.T()}this.bX()
this.bY()
this.fj()},
c1:function(a){this.a=a
C.a.h(a.d.b,this)},
c2:function(a){this.b=a
C.a.h(a.d.c,this)},
fu:function(a){this.c=a
C.a.h(a.d.d,this)},
bX:function(){var z=this.a
if(z!=null){C.a.E(z.d.b,this)
this.a=null}},
bY:function(){var z=this.b
if(z!=null){C.a.E(z.d.c,this)
this.b=null}},
fj:function(){var z=this.c
if(z!=null){C.a.E(z.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
eu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.I(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dI())return
return v.v(0,Math.sqrt(v.C(v)))},
ex:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.C(z)))
z=w.K(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.aS(z.v(0,Math.sqrt(z.C(z))))
return z.v(0,Math.sqrt(z.C(z)))},
c8:function(){if(this.d!=null)return!0
var z=this.eu()
if(z==null){z=this.ex()
if(z==null)return!1}this.d=z
this.a.a.T()
return!0},
es:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.I(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dI())return
return v.v(0,Math.sqrt(v.C(v)))},
ew:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.j.$2(n,0)){z=r.K(0,u)
z=new V.I(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.K(0,u)
y=z.c
if(typeof y!=="number")return y.k()
y=new V.Z(z.a*l,z.b*l,y*l).B(0,u).K(0,x)
y=new V.I(y.a,y.b,y.c)
m=y.v(0,Math.sqrt(y.C(y)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.C(z)))
z=k.aS(m)
z=z.v(0,Math.sqrt(z.C(z))).aS(k)
m=z.v(0,Math.sqrt(z.C(z)))}return m},
c6:function(){if(this.e!=null)return!0
var z=this.es()
if(z==null){z=this.ew()
if(z==null)return!1}this.e=z
this.a.a.T()
return!0},
gh8:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
A:function(a){var z,y
if(this.gaT())return a+"disposed"
z=a+C.i.ag(J.a8(this.a.e),0)+", "+C.i.ag(J.a8(this.b.e),0)+", "+C.i.ag(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
I:function(){return this.A("")},
p:{
bi:function(a,b,c){var z,y,x
z=new F.ak()
y=a.a
if(y==null)H.q(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.o("May not create a face with vertices attached to different shapes."))
z.c1(a)
z.c2(b)
z.fu(c)
C.a.h(z.a.a.d.b,z)
z.a.a.T()
return z}}},
hb:{"^":"a;"},
iz:{"^":"hb;",
aW:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cR:{"^":"a;0a,0b",
aA:function(){if(!this.gaT()){C.a.E(this.a.a.c.b,this)
this.a.a.T()}this.bX()
this.bY()},
c1:function(a){this.a=a
C.a.h(a.c.b,this)},
c2:function(a){this.b=a
C.a.h(a.c.c,this)},
bX:function(){var z=this.a
if(z!=null){C.a.E(z.c.b,this)
this.a=null}},
bY:function(){var z=this.b
if(z!=null){C.a.E(z.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
A:function(a){if(this.gaT())return a+"disposed"
return a+C.i.ag(J.a8(this.a.e),0)+", "+C.i.ag(J.a8(this.b.e),0)},
I:function(){return this.A("")},
p:{
hv:function(a,b){var z,y,x
z=new F.cR()
y=a.a
if(y==null)H.q(P.o("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.o("May not create a line with vertices attached to different shapes."))
z.c1(a)
z.c2(b)
C.a.h(z.a.a.c.b,z)
z.a.a.T()
return z}}},
hw:{"^":"a;"},
j_:{"^":"hw;",
aW:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cX:{"^":"a;0a",
aA:function(){var z=this.a
if(z!=null){C.a.E(z.a.b.b,this)
this.a.a.T()}this.fi()},
fi:function(){var z=this.a
if(z!=null){C.a.E(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ag(J.a8(z.e),0)},
I:function(){return this.A("")}},
el:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
cn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.hc())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cX()
if(r.a==null)H.q(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.u(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.hv(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bi(p,o,m)}z=this.e
if(!(z==null))z.a8(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.a8(0)
return y},
h4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
w=v.y
u=C.e.aU(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.K()
s=C.e.aU(w*(t-1))
w=a.b
u=u>=0?C.f.aP(u,w):w+C.f.aP(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.m(t)
s=C.f.aP(s,t)}else{if(typeof t!=="number")return H.m(t)
s=t+C.f.aP(s,t)}r=(u+s*w)*4
if(r<0||r>=x)return H.e(z,r)
w=z[r]/255
t=r+1
if(t>=x)return H.e(z,t)
t=z[t]/255
q=r+2
if(q>=x)return H.e(z,q)
q=z[q]/255
p=r+3
if(p>=x)return H.e(z,p)
p=z[p]/255
if(w<0)w=0
else if(w>1)w=1
if(t<0)t=0
else if(t>1)t=1
if(q<0)q=0
else if(q>1)q=1
if(!(p<0))if(p>1)p=1
o=(w+t+q)*b/3
w=v.f
t=v.r
q=t.a
p=t.b
t=t.c
if(typeof t!=="number")return t.k()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.B()
t=new V.Z(n+q*o,m+p*o,l+t*o)
if(!J.J(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.u(null)}}}z=this.e
if(!(z==null))z.a8(0)},
i2:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.d
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.e(w,y)
v=w[y]
if((x&$.$get$a3().a)===0)v.f=null
if((x&$.$get$av().a)===0)v.r=null
if((x&$.$get$aE().a)===0)v.x=null
if((x&$.$get$ap().a)===0)v.y=null
if((x&$.$get$aF().a)===0)v.z=null
if((x&$.$get$d7().a)===0)v.Q=null
if((x&$.$get$aS().a)===0)v.ch=0
if((x&$.$get$aD().a)===0)v.cx=null}z=this.e
if(!(z==null))z.a8(0)},
i1:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.d
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.e(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.a8(0)},
i0:function(a){return this.i1(!0,a)},
eF:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.ag],"$asd")
H.w(e,"$isd",[P.B],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aW(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hu:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ag],x=[P.B];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.eF(a,v,y,u,t))b.cn(u)}this.a.t()
this.c.cs()
this.d.cs()
this.b.hN()
this.c.ct(new F.j_())
this.d.ct(new F.iz())
z=this.e
if(!(z==null))z.a8(0)},
bh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a3()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$ap().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
v=b.gcz(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.n
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dw])
for(r=0,q=0;q<w;++q){p=b.h5(q)
o=p.gcz(p)
C.a.a1(s,q,new Z.dw(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hq(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a1(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b6(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bQ(new Z.eV(34962,j),s,b)
i.b=H.b([],[Z.cd])
if(this.b.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cd(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cd(1,h.length,f))}if(this.d.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cd(4,h.length,f))}return i},
j:function(a){var z=H.b([],[P.p])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.D(z,"\n")},
aa:function(a){var z=this.e
if(!(z==null))z.u(a)},
T:function(){return this.aa(null)},
p:{
cZ:function(){var z,y
z=new F.el()
y=new F.jg(z)
y.b=!1
y.c=H.b([],[F.ag])
z.a=y
y=new F.iu(z)
y.b=H.b([],[F.cX])
z.b=y
y=new F.it(z)
y.b=H.b([],[F.cR])
z.c=y
y=new F.is(z)
y.b=H.b([],[F.ak])
z.d=y
z.e=null
return z}}},
is:{"^":"a;a,0b",
h1:function(a){var z,y,x,w,v
H.w(a,"$isd",[F.ag],"$asd")
z=H.b([],[F.ak])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bi(y,w,v))}return z},
h2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.ag],"$asd")
z=H.b([],[F.ak])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.e(c,x)
r=c[x];++x
if(x>=s)return H.e(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.e(c,p)
o=c[p]
if(y<0||y>=s)return H.e(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bi(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bi(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bi(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bi(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
ct:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.aW(0,v,t)){v.aA()
break}}}}},
cs:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gh8(x)
if(y)x.aA()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c8())x=!1
return x},
c7:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c6())x=!1
return x},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
I:function(){return this.A("")}},
it:{"^":"a;a,0b",
gl:function(a){return this.b.length},
ct:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.aW(0,v,t)){v.aA()
break}}}}},
cs:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.aA()}},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
z=H.b([],[P.p])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.D(z,"\n")},
I:function(){return this.A("")}},
iu:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hN:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aA()}},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
I:function(){return this.A("")}},
ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cb:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.co(this.cx,x,u,z,y,w,v,a,t)},
hc:function(){return this.cb(null)},
sa3:function(a,b){var z
if(!J.J(this.f,b)){this.f=b
z=this.a
if(z!=null)z.T()}},
shw:function(a){var z
a=a.v(0,Math.sqrt(a.C(a)))
if(!J.J(this.r,a)){this.r=a
z=this.a
if(z!=null)z.T()}},
sdV:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.T()}},
sd8:function(a){var z
if(!J.J(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.T()}},
hq:function(a){var z,y
z=J.L(a)
if(z.q(a,$.$get$a3())){z=this.f
y=[P.n]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$av())){z=this.r
y=[P.n]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aE())){z=this.x
y=[P.n]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ap())){z=this.y
y=[P.n]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$aF())){z=this.z
y=[P.n]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bD())){z=this.Q
y=[P.n]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bE())){z=this.Q
y=[P.n]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aS()))return H.b([this.ch],[P.n])
else if(z.q(a,$.$get$aD())){z=this.cx
y=[P.n]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.n])},
c8:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.N(0,new F.jq(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.a8(0)}return!0},
c6:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.N(0,new F.jp(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.a8(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
A:function(a){var z,y,x
z=H.b([],[P.p])
C.a.h(z,C.i.ag(J.a8(this.e),0))
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
C.a.h(z,V.H(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
I:function(){return this.A("")},
p:{
co:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.jo(z)
y.b=H.b([],[F.cX])
z.b=y
y=new F.jk(z)
x=[F.cR]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.jh(z)
x=[F.ak]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$d6()
z.e=0
y=$.$get$a3()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$av().a)!==0?e:null
z.x=(x&$.$get$aE().a)!==0?b:null
z.y=(x&$.$get$ap().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$d7().a)!==0?c:null
z.ch=(x&$.$get$aS().a)!==0?i:0
z.cx=(x&$.$get$aD().a)!==0?a:null
return z}}},
jq:{"^":"t:9;a",
$1:function(a){var z,y
H.i(a,"$isak")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
jp:{"^":"t:9;a",
$1:function(a){var z,y
H.i(a,"$isak")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
jg:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.T()
return!0},
h3:function(a,b,c,d,e,f,g,h,i){var z=F.co(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
be:function(a,b,c,d,e,f){return this.h3(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c8()
return!0},
c7:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c6()
return!0},
h7:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.J(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
this.t()
z=H.b([],[P.p])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
I:function(){return this.A("")}},
jh:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.e(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.e(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
N:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ak]})
C.a.N(this.b,b)
C.a.N(this.c,new F.ji(this,b))
C.a.N(this.d,new F.jj(this,b))},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
I:function(){return this.A("")}},
ji:{"^":"t:9;a,b",
$1:function(a){H.i(a,"$isak")
if(!J.J(a.a,this.a))this.b.$1(a)}},
jj:{"^":"t:9;a,b",
$1:function(a){var z
H.i(a,"$isak")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
jk:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
I:function(){return this.A("")}},
jm:{"^":"a;"},
jl:{"^":"jm;",
aW:function(a,b,c){return J.J(b.f,c.f)}},
jn:{"^":"a;"},
hY:{"^":"jn;",
cn:function(a){var z,y,x,w,v,u,t
H.w(a,"$isd",[F.ag],"$asd")
z=new V.I(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.B()
if(typeof w!=="number")return H.m(w)
z=new V.I(z.a+v,z.b+u,t+w)}}z=z.v(0,Math.sqrt(z.C(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)a[x].shw(z)
return}},
jo:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.I()},
A:function(a){var z,y,x,w
z=H.b([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.D(z,"\n")},
I:function(){return this.A("")}}}],["","",,O,{"^":"",fY:{"^":"aR;0a,0b,0c,0d,0e,0ac:f@",
gn:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
w:function(a){var z=this.f
if(!(z==null))z.u(a)},
a5:function(a,b){},
bD:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.i(a.fr.i(0,"Depth"),"$isdJ")
if(y==null){z=a.a
y=new A.dJ(z,"Depth")
y.b6(z,"Depth")
y.bz(0,$.h_,$.fZ)
y.z=y.x.i(0,"posAttr")
y.Q=H.c(y.y.i(0,"objClr"),"$isG")
y.ch=H.c(y.y.i(0,"fogClr"),"$isG")
y.cx=H.c(y.y.i(0,"fogStart"),"$isN")
y.cy=H.c(y.y.i(0,"fogStop"),"$isN")
y.db=H.c(y.y.i(0,"viewObjMat"),"$isad")
y.dx=H.c(y.y.i(0,"projMat"),"$isad")
a.bf(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bQ)){b.e=null
x=null}if(x==null){z=b.d.bh(new Z.cp(a.a),$.$get$a3())
x=z.ae($.$get$a3())
w=this.a
x.e=w.z.c
b.e=z
z=w}z.P(a)
x=this.b
w=z.Q
w.toString
v=x.a
u=x.b
x=x.c
w.a.uniform3f(w.d,v,u,x)
x=this.c
u=z.ch
u.toString
v=x.a
w=x.b
x=x.c
u.a.uniform3f(u.d,v,w,x)
x=this.d
w=z.cx
w.a.uniform1f(w.d,x)
x=this.e
w=z.cy
w.a.uniform1f(w.d,x)
x=a.cy
x=x.gR(x)
w=z.dx
w.toString
w.a6(x.Z(0,!0))
x=a.gdZ()
z=z.db
z.toString
z.a6(x.Z(0,!0))
x=b.e
x.P(a)
x.a4(a)
x.aC(a)
x=this.a
x.toString
a.a.useProgram(null)
x.x.bj()}},hh:{"^":"aR;0a,0b,0c,0d,0e,0f,0r,0ac:x@",
gn:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
w:[function(a){var z
H.i(a,"$isx")
z=this.x
if(!(z==null))z.u(a)},function(){return this.w(null)},"aF","$1","$0","ga_",0,2,0],
a5:function(a,b){},
M:function(a,b){H.w(a,"$isd",[T.bz],"$asd")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
bD:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.i(a.fr.i(0,"GaussianBlur"),"$isdS")
if(z==null){y=a.a
z=new A.dS(y,"GaussianBlur")
z.b6(y,"GaussianBlur")
z.bz(0,$.hj,$.hi)
z.z=z.x.i(0,"posAttr")
z.Q=z.x.i(0,"txtAttr")
z.ch=H.c(z.y.i(0,"projViewObjMat"),"$isad")
z.cx=H.c(z.y.i(0,"txt2DMat"),"$iscn")
z.cy=H.c(z.y.i(0,"colorTxt"),"$isa2")
z.db=H.c(z.y.i(0,"depthTxt"),"$isa2")
z.dx=H.c(z.y.i(0,"nullColorTxt"),"$isF")
z.dy=H.c(z.y.i(0,"nullDepthTxt"),"$isF")
z.fr=H.c(z.y.i(0,"width"),"$isN")
z.fx=H.c(z.y.i(0,"height"),"$isN")
z.fy=H.c(z.y.i(0,"highOffset"),"$isN")
z.go=H.c(z.y.i(0,"lowOffset"),"$isN")
z.id=H.c(z.y.i(0,"depthLimit"),"$isN")
a.bf(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a3()
v=$.$get$ap()
v=y.bh(new Z.cp(x),new Z.aL(w.a|v.a))
v.ae($.$get$a3()).e=this.a.z.c
v.ae($.$get$ap()).e=this.a.Q.c
b.e=v}u=H.b([],[T.bz])
this.M(u,this.c)
this.M(u,this.d)
for(t=0;t<u.length;++t)u[t].P(a)
y=this.a
y.P(a)
x=this.c
y.a7(y.cy,y.dx,x)
x=this.d
y.a7(y.db,y.dy,x)
x=this.b
w=y.cx
w.toString
w.a6(x.Z(0,!0))
x=a.gdR()
w=y.ch
w.toString
w.a6(x.Z(0,!0))
x=a.c
w=y.fr
w.a.uniform1f(w.d,x)
x=a.d
w=y.fx
w.a.uniform1f(w.d,x)
x=this.e
w=y.fy
w.a.uniform1f(w.d,x)
x=this.f
w=y.go
w.a.uniform1f(w.d,x)
x=this.r
y=y.id
y.a.uniform1f(y.d,x)
y=b.e
if(y instanceof Z.bQ){y.P(a)
y.a4(a)
y.aC(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.bj()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hK:{"^":"aR;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ac:dy@",
gn:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
w:[function(a){var z
H.i(a,"$isx")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.w(null)},"aF","$1","$0","ga_",0,2,0],
fm:[function(a){H.i(a,"$isx")
this.a=null
this.w(a)},function(){return this.fm(null)},"iK","$1","$0","gfl",0,2,0],
ii:[function(a,b){var z=V.al
z=new D.bS(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.w(z)},"$2","geQ",8,0,23],
ij:[function(a,b){var z=V.al
z=new D.bT(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.w(z)},"$2","geR",8,0,23],
cN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a0(z.e.length+3,4)*4
x=C.f.a0(z.f.length+3,4)*4
w=C.f.a0(z.r.length+3,4)*4
v=C.f.a0(z.x.length+3,4)*4
u=C.f.a0(z.y.length+3,4)*4
t=C.f.a0(z.z.length+3,4)*4
s=C.f.a0(this.e.a.length+3,4)*4
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
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$a3()
if(c){z=$.$get$av()
a6=new Z.aL(a6.a|z.a)}if(b){z=$.$get$aE()
a6=new Z.aL(a6.a|z.a)}if(a){z=$.$get$ap()
a6=new Z.aL(a6.a|z.a)}if(a0){z=$.$get$aF()
a6=new Z.aL(a6.a|z.a)}if(a2){z=$.$get$aD()
a6=new Z.aL(a6.a|z.a)}return new A.hN(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.w(a,"$isd",[T.bz],"$asd")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
a5:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.ah(z,z.length,0,[H.A(z,0)]);z.F();){y=z.d
y.a=new V.Z(0,0,0)
x=y.b
if(x!=null){w=x.au(0,b,y)
if(w!=null)y.a=w.aO(y.a)}}},
bD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cN()
y=H.i(a.fr.i(0,z.an),"$ise7")
if(y==null){y=A.hJ(z,a.a)
a.bf(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bk
z=b.e
if(!(z instanceof Z.bQ)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.aj()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.c7()
u.a.c7()
u=u.e
if(!(u==null))u.a8(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.h7()
t=t.e
if(!(t==null))t.a8(0)}r=b.d.bh(new Z.cp(a.a),w)
r.ae($.$get$a3()).e=this.a.Q.c
if(z)r.ae($.$get$av()).e=this.a.cx.c
if(v)r.ae($.$get$aE()).e=this.a.ch.c
if(x.rx)r.ae($.$get$ap()).e=this.a.cy.c
if(u)r.ae($.$get$aF()).e=this.a.db.c
if(x.x1)r.ae($.$get$aD()).e=this.a.dx.c
b.e=r}z=T.bz
q=H.b([],[z])
this.a.P(a)
if(x.fx){v=this.a
u=a.dx
u=u.gR(u)
v=v.dy
v.toString
v.a6(u.Z(0,!0))}if(x.fy){v=this.a
u=a.gdZ()
v=v.fr
v.toString
v.a6(u.Z(0,!0))}v=this.a
u=a.gdR()
v=v.fy
v.toString
v.a6(u.Z(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a6(u.Z(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a6(u.Z(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a6(C.A.Z(u,!0))}if(x.as>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.n],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.e(t,o)
t=t[o]
u.toString
H.i(t,"$isal")
u=u.r1
if(o>=u.length)return H.e(u,o)
u=u[o]
n=new Float32Array(H.b6(H.w(t.Z(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.h:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.f.d)
v=this.a
u=this.f.d
v.a7(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.f.e)
v=this.a
u=this.f.e
v.ad(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.h:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.r.d)
v=this.a
u=this.r.d
v.a7(v.y1,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.r.e)
v=this.a
u=this.r.e
v.ad(v.y2,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.h:v=this.a
u=this.x.f
v=v.an
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.x.d)
v=this.a
u=this.x.d
v.a7(v.bk,v.bl,u)
u=this.a
v=this.x.f
u=u.an
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.x.e)
v=this.a
u=this.x.e
v.ad(v.dh,v.bl,u)
u=this.a
v=this.x.f
u=u.an
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.h:v=this.a
u=this.y.f
v=v.bm
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.y.d)
v=this.a
u=this.y.d
v.a7(v.di,v.bn,u)
u=this.a
v=this.y.f
u=u.bm
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.y.e)
v=this.a
u=this.y.e
v.ad(v.dj,v.bn,u)
u=this.a
v=this.y.f
u=u.bm
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.h:v=this.a
u=this.z.f
v=v.bo
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bq
u.a.uniform1f(u.d,s)
break
case C.c:this.M(q,this.z.d)
v=this.a
u=this.z.d
v.a7(v.dk,v.bp,u)
u=this.a
v=this.z.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bq
v.a.uniform1f(v.d,s)
break
case C.d:this.M(q,this.z.e)
v=this.a
u=this.z.e
v.ad(v.dl,v.bp,u)
u=this.a
v=this.z.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bq
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cc
if(l>=t.length)return H.e(t,l)
i=t[l]
t=m.dY(j.gbi(j))
s=t.a
h=t.b
g=t.c
if(typeof g!=="number")return g.k()
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gaz(j)
h=i.c
s=g.gbC()
t=g.gb4()
g=g.gbg()
h.a.uniform3f(h.d,s,t,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dB
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cd
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.a
s=i.b
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=m.aO(j.a)
s=i.c
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.c
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.d
s=i.e
s.a.uniform1f(s.d,t)
t=j.e
s=i.f
s.a.uniform1f(s.d,t)
t=j.f
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dC
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.ce
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gcq(j)
s=i.b
h=t.ge0(t)
g=t.ge1(t)
t=t.ge3(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbi(j).iR()
g=i.c
h=t.gak(t)
s=t.gal(t)
t=t.gam()
g.a.uniform3f(g.d,h,s,t)
t=m.aO(j.gcq(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaz(j)
s=i.e
h=t.gbC()
g=t.gb4()
t=t.gbg()
s.a.uniform3f(s.d,h,g,t)
t=j.giP()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giO()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gd5()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gd6()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gd7()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dD
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.cf
if(l>=s.length)return H.e(s,l)
i=s[l]
s=j.gb1()
H.w(q,"$isd",t,"$asd")
if(!C.a.ar(q,s)){s.sb9(q.length)
C.a.h(q,s)}s=j.gbi(j)
h=i.d
g=s.gak(s)
f=s.gal(s)
s=s.gam()
h.a.uniform3f(h.d,g,f,s)
s=j.gi3()
f=i.b
g=s.gak(s)
h=s.gal(s)
s=s.gam()
f.a.uniform3f(f.d,g,h,s)
s=j.gb0(j)
h=i.c
g=s.gak(s)
f=s.gal(s)
s=s.gam()
h.a.uniform3f(h.d,g,f,s)
s=m.dY(j.gbi(j))
f=s.a
g=s.b
h=s.c
if(typeof h!=="number")return h.k()
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gaz(j)
g=i.f
f=h.gbC()
s=h.gb4()
h=h.gbg()
g.a.uniform3f(g.d,f,s,h)
h=j.gb1()
s=h.gcm(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.geH()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gb9())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dE
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.y,u=v.length,t=[P.n],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.cg
if(l>=h.length)return H.e(h,l)
i=h[l]
h=j.gb1()
H.w(q,"$isd",s,"$asd")
if(!C.a.ar(q,h)){h.sb9(q.length)
C.a.h(q,h)}e=m.k(0,j.gR(j))
h=j.gR(j).aO(new V.Z(0,0,0))
g=i.b
f=h.ge0(h)
d=h.ge1(h)
h=h.ge3(h)
g.a.uniform3f(g.d,f,d,h)
h=e.aO(new V.Z(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.dH(0)
d=i.d
n=new Float32Array(H.b6(H.w(new V.cT(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).Z(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gaz(j)
h=i.e
f=d.gbC()
g=d.gb4()
d=d.gbg()
h.a.uniform3f(h.d,f,g,d)
d=j.gb1()
h=d.gcm(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcm(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.giQ(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gd5()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gd6()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gd7()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dF
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.ci
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gb1()
H.w(q,"$isd",z,"$asd")
if(!C.a.ar(q,t)){t.sb9(q.length)
C.a.h(q,t)}t=j.gcq(j)
s=i.b
h=t.ge0(t)
g=t.ge1(t)
t=t.ge3(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbi(j)
g=i.c
h=t.gak(t)
s=t.gal(t)
t=t.gam()
g.a.uniform3f(g.d,h,s,t)
t=j.gi3()
s=i.d
h=t.gak(t)
g=t.gal(t)
t=t.gam()
s.a.uniform3f(s.d,h,g,t)
t=j.gb0(j)
g=i.e
h=t.gak(t)
s=t.gal(t)
t=t.gam()
g.a.uniform3f(g.d,h,s,t)
t=m.aO(j.gcq(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb1()
s=t.gcm(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.geH()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gb9())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gaz(j)
s=i.y
h=t.gbC()
g=t.gb4()
t=t.gbg()
s.a.uniform3f(s.d,h,g,t)
t=j.giY()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giZ()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gd5()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gd6()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gd7()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.h:break
case C.c:this.M(q,this.Q.d)
z=this.a
v=this.Q.d
z.a7(z.dm,z.br,v)
break
case C.d:this.M(q,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.dn,z.br,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gR(v).dH(0)
a.Q=v}z=z.id
z.toString
z.a6(v.Z(0,!0))}if(x.dy){this.M(q,this.ch)
z=this.a
v=this.ch
z.ad(z.dq,z.dr,v)
switch(x.r){case C.b:break
case C.h:z=this.a
v=this.cx.f
z=z.bs
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.M(q,this.cx.d)
z=this.a
v=this.cx.d
z.a7(z.ds,z.bt,v)
v=this.a
z=this.cx.f
v=v.bs
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.M(q,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.dt,z.bt,v)
v=this.a
z=this.cx.f
v=v.bs
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.h:z=this.a
v=this.cy.f
z=z.bv
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bu
v.a.uniform1f(v.d,t)
break
case C.c:this.M(q,this.cy.d)
z=this.a
v=this.cy.d
z.a7(z.du,z.bw,v)
v=this.a
z=this.cy.f
v=v.bv
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bu
z.a.uniform1f(z.d,t)
break
case C.d:this.M(q,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.dv,z.bw,v)
v=this.a
z=this.cy.f
v=v.bv
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bu
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.h:z=this.a
u=this.db.f
z=z.bx
z.a.uniform1f(z.d,u)
break
case C.c:this.M(q,this.db.d)
z=this.a
u=this.db.d
z.a7(z.dw,z.by,u)
u=this.a
z=this.db.f
u=u.bx
u.a.uniform1f(u.d,z)
break
case C.d:this.M(q,this.db.e)
z=this.a
u=this.db.e
z.ad(z.dz,z.by,u)
u=this.a
z=this.db.f
u=u.bx
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].P(a)
z=b.e
z.P(a)
z.a4(a)
z.aC(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.bj()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cN().an},
p:{
e8:function(){var z,y,x
z=new O.hK()
y=O.c8(V.al)
z.e=y
y.aD(z.geQ(),z.geR())
y=new O.b0(z,"emission")
y.c=C.b
y.f=new V.T(0,0,0)
z.f=y
y=new O.b0(z,"ambient")
y.c=C.b
y.f=new V.T(0,0,0)
z.r=y
y=new O.b0(z,"diffuse")
y.c=C.b
y.f=new V.T(0,0,0)
z.x=y
y=new O.b0(z,"invDiffuse")
y.c=C.b
y.f=new V.T(0,0,0)
z.y=y
y=new O.hP(z,"specular")
y.c=C.b
y.f=new V.T(0,0,0)
y.ch=100
z.z=y
y=new O.hM(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.b0(z,"reflect")
y.c=C.b
y.f=new V.T(0,0,0)
z.cx=y
y=new O.hO(z,"refract")
y.c=C.b
y.f=new V.T(0,0,0)
y.ch=1
z.cy=y
y=new O.hL(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.hu()
y.b5(D.U)
y.e=H.b([],[D.h1])
y.f=H.b([],[D.cg])
y.r=H.b([],[D.iA])
y.x=H.b([],[D.iP])
y.y=H.b([],[D.iQ])
y.z=H.b([],[D.iR])
y.Q=null
y.ch=null
y.cv(y.geP(),y.gf9(),y.gfb())
z.dx=y
x=y.Q
if(x==null){x=D.C()
y.Q=x
y=x}else y=x
y.h(0,z.gfl())
y=z.dx
x=y.ch
if(x==null){x=D.C()
y.ch=x
y=x}else y=x
y.h(0,z.ga_())
z.dy=null
return z}}},hL:{"^":"cS;0f,a,b,0c,0d,0e",
fp:function(a){var z,y
z=this.f
if(!$.j.$2(z,a)){y=this.f
this.f=a
z=new D.u(this.b,y,a,this,[P.n])
z.b=!0
this.a.w(z)}},
aJ:function(){this.cC()
this.fp(1)}},cS:{"^":"a;",
w:[function(a){this.a.w(H.i(a,"$isx"))},function(){return this.w(null)},"aF","$1","$0","ga_",0,2,0],
aJ:["cC",function(){}],
fs:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gn().E(0,this.ga_())
y=this.d
this.d=a
if(a!=null)a.gn().h(0,this.ga_())
z=new D.u(this.b+".texture2D",y,this.d,this,[T.c0])
z.b=!0
this.a.w(z)}},
ft:function(a){},
sbE:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aJ()
this.c=C.c
this.ft(null)
z=this.a
z.a=null
z.w(null)}this.fs(a)}},hM:{"^":"cS;a,b,0c,0d,0e"},b0:{"^":"cS;0f,a,b,0c,0d,0e",
cY:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.u(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.w(y)}},
aJ:["bJ",function(){this.cC()
this.cY(new V.T(1,1,1))}],
saz:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.aJ()
z=this.a
z.a=null
z.w(null)}this.cY(b)}},hO:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
fq:function(a){var z,y
z=this.ch
if(!$.j.$2(z,a)){y=this.ch
this.ch=a
z=new D.u(this.b+".refraction",y,a,this,[P.n])
z.b=!0
this.a.w(z)}},
aJ:function(){this.bJ()
this.fq(1)}},hP:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
bZ:function(a){var z,y
z=this.ch
if(!$.j.$2(z,a)){y=this.ch
this.ch=a
z=new D.u(this.b+".shininess",y,a,this,[P.n])
z.b=!0
this.a.w(z)}},
aJ:function(){this.bJ()
this.bZ(100)}},aR:{"^":"a;"},iJ:{"^":"aR;0a,0b,0c,0d,0ac:e@",
gn:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
w:[function(a){var z
H.i(a,"$isx")
z=this.e
if(!(z==null))z.u(a)},function(){return this.w(null)},"aF","$1","$0","ga_",0,2,0],
ir:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isf",[O.bA],"$asf")
for(z=b.length,y=this.ga_(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gac()==null){t=new D.aJ()
t.d=0
u.sac(t)}t=u.gac()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.aF()},"$2","geY",8,0,24],
is:[function(a,b){var z,y,x,w,v
H.w(b,"$isf",[O.bA],"$asf")
for(z=b.length,y=this.ga_(),x=0;x<b.length;b.length===z||(0,H.y)(b),++x){w=b[x]
if(w!=null){if(w.gac()==null){v=new D.aJ()
v.d=0
w.sac(v)}w.gac().E(0,y)}}this.aF()},"$2","geZ",8,0,24],
a5:function(a,b){},
bD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.f.a0(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.i(a.fr.i(0,y),"$iser")
if(x==null){x=A.iK(z,a.a)
a.bf(x)}this.b=x
y=x}if(b.e==null){y=b.d.bh(new Z.cp(a.a),$.$get$a3())
w=y.ae($.$get$a3())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.P(a)
y=T.bz
u=H.b([],[y])
for(w=[P.n],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.w(u,"$isd",y,"$asd")
if(v!=null)if(!C.a.ar(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.e(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.e(v,t)
v=v[t]
n=new Float32Array(H.b6(H.w((q==null?new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).Z(0,!0),"$isd",w,"$asd")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aQ(0,0,1,1)
q=v.db
if(t>=q.length)return H.e(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.e(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aQ(0,0,1,1)
q=v.dy
if(t>=q.length)return H.e(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.e(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.e(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.Q
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].P(a)
y=b.e
if(y instanceof Z.bQ){y.P(a)
y.a4(a)
y.aC(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.x.bj()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bA:{"^":"a;0a,0b,0c,0d,0e,0ac:f@",
gn:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
w:[function(a){var z
H.i(a,"$isx")
z=this.f
if(!(z==null))z.u(a)},function(){return this.w(null)},"aF","$1","$0","ga_",0,2,0],
p:{
es:function(a,b,c,d,e){var z,y,x,w,v
z=new O.bA()
y=z.a
z.a=e
e.gn().h(0,z.ga_())
x=new D.u("texture",y,z.a,z,[T.c0])
x.b=!0
z.w(x)
w=V.aO()
if(!J.J(z.b,w)){y=z.b
z.b=w
x=new D.u("colorMatrix",y,w,z,[V.al])
x.b=!0
z.w(x)}v=V.aQ(0,0,1,1)
if(!J.J(z.c,v)){y=z.c
z.c=v
x=new D.u("source",y,v,z,[V.ck])
x.b=!0
z.w(x)}if(!J.J(z.d,b)){y=z.d
z.d=b
x=new D.u("destination",y,b,z,[V.ck])
x.b=!0
z.w(x)}if(z.e!==!1){z.e=!1
x=new D.u("flip",!0,!1,z,[P.a7])
x.b=!0
z.w(x)}z.f=null
return z}}}}],["","",,T,{"^":"",bz:{"^":"cC;"},c0:{"^":"bz;"},iI:{"^":"c0;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cZ:function(){if(!this.d){this.d=!0
var z=this.y
if(!(z==null))z.dg()}},
gn:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
P:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
p:{
d1:function(a,b){var z=new T.iI()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},iM:{"^":"a;a,0b,0c,0d,0e",
hs:function(a,b,c,d,e){var z,y,x,w
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
w=T.d1(0,y)
z=W.a9
W.V(x,"load",H.l(new T.iN(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bA:function(a){return this.hs(a,!1,!1,!1,!1)},
fn:function(a,b,c){var z,y,x,w
b=V.bO(b,2)
z=V.bO(a.width,2)
y=V.bO(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cG(null,null)
x.width=z
x.height=y
w=H.i(C.k.e6(x,"2d"),"$isdy")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.l3(w.getImageData(0,0,x.width,x.height))}}},iN:{"^":"t:25;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fn(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.q.hV(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
z.cZ();++x.e}},iO:{"^":"a;a,b,c"}}],["","",,V,{"^":"",fC:{"^":"a;",
aV:function(a,b){return!0},
j:function(a){return"all"},
$isbW:1},bW:{"^":"a;"},e6:{"^":"a;",
aV:["ec",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aV(0,b))return!0
return!1}],
j:["cB",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isbW:1},bq:{"^":"e6;0a",
aV:function(a,b){return!this.ec(0,b)},
j:function(a){return"!["+this.cB(0)+"]"}},iq:{"^":"a;0a",
eg:function(a){var z,y
if(a.a.length<=0)throw H.h(P.o("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.B,P.a7])
for(y=new H.e3(a,a.gl(a),0,[H.aH(a,"v",0)]);y.F();)z.a1(0,y.d,!0)
this.a=z},
aV:function(a,b){return this.a.dd(0,b)},
j:function(a){var z=this.a
return P.d0(new H.e2(z,[H.A(z,0)]),0,null)},
$isbW:1,
p:{
a1:function(a){var z=new V.iq()
z.eg(a)
return z}}},en:{"^":"a;a,b,0c,0d",
ghv:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ez(this.a.J(0,b))
w.a=H.b([],[V.bW])
w.c=!1
C.a.h(this.c,w)
return w},
hh:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aV(0,a))return w}return},
j:function(a){return this.b}},ew:{"^":"a;a,b,c",
j:function(a){var z,y
z=H.fv(this.b,"\n","\\n")
y=H.fv(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ex:{"^":"a;a,b,0c",
j:function(a){return this.b}},iW:{"^":"a;0a,0b,0c",
J:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.en(this,b)
z.c=H.b([],[V.ez])
this.a.a1(0,b,z)}return z},
b2:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.ex(this,a)
y=P.p
z.c=new H.b_(0,0,[y,y])
this.b.a1(0,a,z)}return z},
i_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ew])
y=this.c
x=[P.B]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b7(a,t)
r=y.hh(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d0(w,0,null)
throw H.h(P.o("Untokenizable string [state: "+y.ghv(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d0(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.ew(o==null?p.b:o,q,t)}++t}}}},ez:{"^":"e6;b,0c,0a",
j:function(a){return this.b.b+": "+this.cB(0)}}}],["","",,X,{"^":"",fG:{"^":"cl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gn:function(){var z=this.fr
if(z==null){z=D.C()
this.fr=z}return z},
ap:function(a){var z=this.fr
if(!(z==null))z.u(a)},
sab:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.u("width",z,b,this,[P.B])
z.b=!0
this.ap(z)}},
sa9:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.u("height",z,b,this,[P.B])
z.b=!0
this.ap(z)}},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.k()
this.sab(0,C.e.U(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.k()
this.sa9(0,C.e.U(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.W(z.getParameter(3379))
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
C.q.dU(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.d1(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.cZ()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.dg()
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
a.c=C.e.U(y*this.a)
x=z.d
a.d=C.e.U(x*this.b)
w=this.c
if(typeof w!=="number")return H.m(w)
q=C.e.U(z.a*w)
p=this.d
if(typeof p!=="number")return H.m(p)
o=C.e.U(z.b*p)
n=C.e.U(y*w)
m=C.e.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)},
aC:function(a){a.a.bindFramebuffer(36160,null)},
p:{
dt:function(a,b,c,d,e,f){var z=new X.fG()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.d1(0,null)
z.cx=new V.ar(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.aQ(0,0,1,1)
z.sab(0,a)
z.sa9(0,b)
return z}}},c7:{"^":"a;",$isaz:1},hg:{"^":"cl;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
P:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.m(y)
v=C.e.U(w.a*y)
if(typeof x!=="number")return H.m(x)
u=C.e.U(w.b*x)
t=C.e.U(w.c*y)
a.c=t
w=C.e.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
aC:function(a){},
p:{
cJ:function(a,b,c,d,e,f,g){var z,y
z=new X.hg()
y=new V.ar(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aQ(0,0,1,1)
z.r=y
return z}}},hk:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
$isaz:1,
$isc7:1},i0:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
ap:[function(a){var z
H.i(a,"$isx")
z=this.f
if(!(z==null))z.u(a)},function(){return this.ap(null)},"i7","$1","$0","gcF",0,2,0],
saX:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gn().E(0,this.gcF())
y=this.b
this.b=a
if(a!=null)a.gn().h(0,this.gcF())
z=new D.u("mover",y,this.b,this,[U.a5])
z.b=!0
this.ap(z)}},
$isaz:1,
$isc7:1,
p:{
ef:function(a,b,c,d,e){var z,y,x
z=new X.i0()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.saX(c)
y=z.c
if(!$.j.$2(y,b)){x=z.c
z.c=b
y=new D.u("fov",x,b,z,[P.n])
y.b=!0
z.ap(y)}y=z.d
if(!$.j.$2(y,d)){x=z.d
z.d=d
y=new D.u("near",x,d,z,[P.n])
y.b=!0
z.ap(y)}y=z.e
if(!$.j.$2(y,a)){x=z.e
z.e=a
y=new D.u("far",x,a,z,[P.n])
y.b=!0
z.ap(y)}return z}}},cl:{"^":"a;"}}],["","",,V,{"^":"",
lt:function(a){P.iV(C.x,new V.lu(a))},
lu:{"^":"t:38;a",
$1:function(a){H.i(a,"$isb3")
P.dp(C.e.dX(this.a.ghj(),2)+" fps")}},
iv:{"^":"a;0a,0b",
eh:function(a,b){var z,y,x,w,v,u,t
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
t=W.a9
W.V(z,"scroll",H.l(new V.iy(x),{func:1,ret:-1,args:[t]}),!1,t)},
d4:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.p],"$asd")
this.fw()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.i_(C.a.ho(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fu(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kB(C.I,s,C.r,!1)
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
fw:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iW()
y=P.p
z.a=new H.b_(0,0,[y,V.en])
z.b=new H.b_(0,0,[y,V.ex])
z.c=z.J(0,"Start")
y=z.J(0,"Start").D(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").D(0,"Bold")
x=new V.bq()
w=[V.bW]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").D(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").D(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").D(0,"Italic")
x=new V.bq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").D(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").D(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").D(0,"Code")
x=new V.bq()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").D(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").D(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").D(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").D(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").D(0,"LinkHead")
y=new V.bq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").D(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").D(0,"LinkTail")
y=new V.bq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").D(0,"Other").a,new V.fC())
x=z.J(0,"Other").D(0,"Other")
y=new V.bq()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.b2("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.b2("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.b2("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.b2("Link")
x=z.J(0,"Other")
x.d=x.a.b2("Other")
this.b=z},
p:{
iw:function(a,b){var z=new V.iv()
z.eh(a,!0)
return z}}},
iy:{"^":"t:25;a",
$1:function(a){P.eu(C.l,new V.ix(this.a))}},
ix:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.e.U(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=V.iw("Test 041",!0)
y=W.cG(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.p]
z.d4(H.b(["A combination of bump mapping with height map and specular map."],x))
z.d4(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.iT(w,!0,!0,!0,!1)
u=v.f.bA("../resources/gravel/colorLarge.png")
t=v.f.bA("../resources/gravel/bumpSmall.png")
s=v.f.bA("../resources/gravel/specularSmall.png")
r=v.f.bA("../resources/gravel/heightSmall.png")
z=U.dD(V.eb(0,0,2))
x=new U.ek()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.se2(0)
x.sdQ(0,0)
x.sdS(0)
q=x.d
if(!$.j.$2(q,0.6)){p=x.d
x.d=0.6
q=new D.u("deltaYaw",p,0.6,x,[P.n])
q.b=!0
x.H(q)}q=x.e
if(!$.j.$2(q,0.1)){p=x.e
x.e=0.1
q=new D.u("deltaPitch",p,0.1,x,[P.n])
q.b=!0
x.H(q)}q=x.f
if(!$.j.$2(q,0)){p=x.f
x.f=0
q=new D.u("deltaRoll",p,0,x,[P.n])
q.b=!0
x.H(q)}q=U.a5
o=[q]
n=U.dU(H.b([z,x],o))
m=E.cI(null,!0,null,"",F.lv(8,null,0.03,8),null)
m.saX(n)
x=O.e8()
z=x.f
z.saz(0,new V.T(1,1,1))
m.sah(x)
z=new V.T(1,1,1)
l=new D.cg()
l.c=new V.T(1,1,1)
l.d=1
l.e=0
l.f=0
l.a=new V.Z(0,0,0)
p=l.b
l.b=n
n.gn().h(0,l.gem())
x=new D.u("mover",p,l.b,l,[q])
x.b=!0
l.ai(x)
l.c=z
if(!z.q(0,z)){p=l.c
l.c=z
z=new D.u("color",p,z,l,[V.T])
z.b=!0
l.ai(z)}z=l.d
if(!$.j.$2(z,0.5)){p=l.d
l.d=0.5
z=new D.u("attenuation0",p,0.5,l,[P.n])
z.b=!0
l.ai(z)}z=l.e
if(!$.j.$2(z,0.1)){p=l.e
l.e=0.1
z=new D.u("attenuation1",p,0.1,l,[P.n])
z.b=!0
l.ai(z)}z=l.f
if(!$.j.$2(z,0)){p=l.f
l.f=0
z=new D.u("attenuation2",p,0,l,[P.n])
z.b=!0
l.ai(z)}k=E.cI(null,!0,null,"",null,null)
r.gn().h(0,new K.lm(v,r,k))
j=X.ef(2000,1.0471975511965976,null,0.1,null)
z=v.r
x=new U.jc()
q=U.dB()
q.se_(0,!0)
q.sdJ(6.283185307179586)
q.sdL(0)
q.sa3(0,0)
q.sdK(100)
q.sV(0)
q.sde(0.5)
x.b=q
i=x.gba()
q.gn().h(0,i)
q=U.dB()
q.se_(0,!0)
q.sdJ(6.283185307179586)
q.sdL(0)
q.sa3(0,0)
q.sdK(100)
q.sV(0)
q.sde(0.5)
x.c=q
q.gn().h(0,i)
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
h=new X.aK(!1,!1,!1)
p=x.d
x.d=h
q=[X.aK]
i=new D.u("modifiers",p,h,x,q)
i.b=!0
x.H(i)
i=x.f
if(i!==!1){x.f=!1
i=new D.u("invertX",i,!1,x,[P.a7])
i.b=!0
x.H(i)}i=x.r
if(i!==!1){x.r=!1
i=new D.u("invertY",i,!1,x,[P.a7])
i.b=!0
x.H(i)}x.c3(z)
z=v.r
i=new U.jd()
i.c=0.01
i.d=0
i.e=0
h=new X.aK(!1,!1,!1)
i.b=h
q=new D.u("modifiers",null,h,i,q)
q.b=!0
i.H(q)
i.c3(z)
j.saX(U.dU(H.b([x,i,U.dD(V.eb(0,0,5))],o)))
g=O.e8()
g.dx.h(0,l)
z=g.r
z.saz(0,new V.T(0.3,0.3,0.3))
g.r.sbE(u)
g.x.sbE(u)
z=g.z
if(z.c===C.b){z.c=C.h
z.bJ()
z.bZ(100)
x=z.a
x.a=null
x.w(null)}z.bZ(100)
g.z.sbE(s)
g.Q.sbE(t)
f=X.dt(800,600,!0,1,1,!0)
z=[E.ax]
e=M.dQ(null,H.b([k,m],z),null,null)
e.sah(g)
e.sc9(j)
e.saN(0,f)
d=X.dt(400,300,!0,0.5,0.5,!0)
c=M.dQ(null,H.b([k,m],z),null,null)
c.sc9(j)
c.saN(0,d)
z=new O.fY()
z.d=1
z.e=10
b=new V.T(1,1,1)
z.b=b
x=[V.T]
q=new D.u("objectColor",null,b,z,x)
q.b=!0
z.w(q)
b=new V.T(0,0,0)
if(!J.J(z.c,b)){p=z.c
z.c=b
x=new D.u("fogColor",p,b,z,x)
x.b=!0
z.w(x)}x=z.d
if(!$.j.$2(x,1)){p=z.d
z.d=1
x=new D.u("fogStart",p,1,z,[P.n])
x.b=!0
z.w(x)}x=z.e
if(!$.j.$2(x,4)){p=z.e
z.e=4
x=new D.u("fogStop",p,4,z,[P.n])
x.b=!0
z.w(x)}c.sah(z)
z=f.ch
x=d.ch
a=new O.hh()
a.e=0
a.f=4
a.r=0.001
a.b=new V.cT(1,0,0,0,1,0,0,0,1)
q=new D.u("textureMatrix",null,null,a,[P.a])
q.b=!0
a.w(q)
q=a.c
if(q!==z){if(q!=null)q.gn().E(0,a.ga_())
p=a.c
a.c=z
z.gn().h(0,a.ga_())
z=new D.u("colorTexture",p,a.c,a,[T.c0])
z.b=!0
a.w(z)}z=a.d
if(z!==x){if(z!=null)z.gn().E(0,a.ga_())
p=a.d
a.d=x
x.gn().h(0,a.ga_())
z=new D.u("depthTexture",p,a.d,a,[T.c0])
z.b=!0
a.w(z)}z=a.e
if(!$.j.$2(z,0)){p=a.e
a.e=0
z=new D.u("highOffset",p,0,a,[P.n])
z.b=!0
a.w(z)}z=a.f
if(!$.j.$2(z,4)){p=a.f
a.f=4
z=new D.u("lowOffset",p,4,a,[P.n])
z.b=!0
a.w(z)}z=a.r
if(!$.j.$2(z,0.001)){p=a.r
a.r=0.001
z=new D.u("depthLimit",p,0.001,a,[P.n])
z.b=!0
a.w(z)}a0=M.dF(null,null,null)
a0.sah(a)
a1=new O.iJ()
b=new V.ar(0,0,0,0)
a1.a=b
z=new D.u("backColor",null,b,a1,[V.ar])
z.b=!0
a1.w(z)
a1.b=null
z=O.c8(O.bA)
a1.c=z
z.aD(a1.geY(),a1.geZ())
a1.d=0
a1.e=null
z=a1.c
x=d.ch
z.h(0,O.es(null,V.aQ(0,0.8,0.2,0.2),!1,null,x))
x=a1.c
z=f.ch
x.h(0,O.es(null,V.aQ(0,0.6,0.2,0.2),!1,null,z))
a2=M.dF(null,null,null)
a2.saN(0,X.cJ(!1,!0,!1,null,2000,null,0))
a2.sah(a1)
z=M.aA
x=H.b([e,c,a0,a2],[z])
q=new M.fQ()
q.b5(z)
q.e=!1
q.f=null
q.aD(q.gfc(),q.gfd())
q.aR(0,x)
z=v.d
if(z!==q){if(z!=null)z.gn().E(0,v.gcD())
v.d=q
q.gn().h(0,v.gcD())
v.ek()}V.lt(v)},
lm:{"^":"t:8;a,b,c",
$1:function(a){var z,y,x,w,v,u
H.i(a,"$isx")
z=this.a.f
y=this.b
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.m(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
u=F.l9(150,null,150)
u.aj()
u.h4(new T.iO(v,x,w),0.05)
z=$.$get$av()
z.toString
u.i2(new Z.aL($.$get$d6().a&~z.a))
u.i0(!1)
u.aj()
this.c.sbG(0,u)}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dY.prototype
return J.dX.prototype}if(typeof a=="string")return J.cN.prototype
if(a==null)return J.dZ.prototype
if(typeof a=="boolean")return J.hp.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.c3=function(a){if(typeof a=="string")return J.cN.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.dj=function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.l7=function(a){if(typeof a=="number")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d5.prototype
return a}
J.cw=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.a)return a
return J.cx(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).q(a,b)}
J.fy=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l7(a).ao(a,b)}
J.fz=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c3(a).i(a,b)}
J.fA=function(a,b,c,d){return J.cw(a).d3(a,b,c,d)}
J.cB=function(a,b,c){return J.c3(a).h9(a,b,c)}
J.dq=function(a,b){return J.dj(a).G(a,b)}
J.fB=function(a,b){return J.dj(a).N(a,b)}
J.aY=function(a){return J.L(a).gW(a)}
J.bP=function(a){return J.dj(a).gY(a)}
J.bd=function(a){return J.c3(a).gl(a)}
J.a8=function(a){return J.L(a).j(a)}
I.dm=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cF.prototype
C.y=J.r.prototype
C.a=J.aZ.prototype
C.z=J.dX.prototype
C.f=J.dY.prototype
C.A=J.dZ.prototype
C.e=J.ce.prototype
C.i=J.cN.prototype
C.H=J.bU.prototype
C.J=H.hW.prototype
C.K=W.hX.prototype
C.p=J.i1.prototype
C.q=P.cY.prototype
C.m=J.d5.prototype
C.t=W.bF.prototype
C.u=W.jt.prototype
C.v=new P.i_()
C.w=new P.jf()
C.j=new P.kf()
C.b=new A.c9(0,"ColorSourceType.None")
C.h=new A.c9(1,"ColorSourceType.Solid")
C.c=new A.c9(2,"ColorSourceType.Texture2D")
C.d=new A.c9(3,"ColorSourceType.TextureCube")
C.l=new P.bh(0)
C.x=new P.bh(5e6)
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
C.I=H.b(I.dm([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.r=new P.je(!1)
$.aw=0
$.be=null
$.du=null
$.dc=!1
$.fn=null
$.fh=null
$.ft=null
$.cv=null
$.cy=null
$.dk=null
$.b7=null
$.bI=null
$.bJ=null
$.dd=!1
$.P=C.j
$.dN=null
$.dM=null
$.dL=null
$.dK=null
$.j=V.hQ()
$.h_="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fZ="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.hj="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.hi="precision mediump float;                                 \n                                                         \n#define MAX_BLUR_RANGE 20.0                              \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D depthTxt;                              \nuniform int nullColorTxt;                                \nuniform int nullDepthTxt;                                \nuniform float width;                                     \nuniform float height;                                    \nuniform float highOffset;                                \nuniform float lowOffset;                                 \nuniform float depthLimit;                                \n                                                         \nvarying vec2 txt2D;                                      \n                                                         \nfloat div;                                               \nvec4 color;                                              \n                                                         \nvoid offsetColor(float baseDepth, float tu, float tv)    \n{                                                        \n   vec2 txtOffset = vec2(txt2D.x + tu/width,             \n                         txt2D.y + tv/height);           \n   float depth = texture2D(depthTxt, txtOffset).r;       \n   if (depth - depthLimit > baseDepth) return;           \n   div += 1.0;                                           \n   color += texture2D(colorTxt, txtOffset);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0)                                  \n   {                                                     \n      gl_FragColor = vec4(1.0);                          \n      return;                                            \n   }                                                     \n   color = texture2D(colorTxt, txt2D);                   \n   float baseDepth;                                      \n   if(nullDepthTxt > 0) baseDepth = 1.0;                 \n   else baseDepth = texture2D(depthTxt, txt2D).r;        \n   float offset = mix(lowOffset, highOffset, baseDepth); \n   offset = abs(offset);                                 \n   div = 1.0;                                            \n   for(float x=0.0; x<MAX_BLUR_RANGE; x+=1.0)            \n   {                                                     \n      if(x > offset) break;                              \n      for(float y=1.0; y<MAX_BLUR_RANGE; y+=1.0)         \n      {                                                  \n         if(y > offset) break;                           \n         offsetColor(baseDepth,  x,  y);                 \n         offsetColor(baseDepth,  x, -y);                 \n         offsetColor(baseDepth, -x,  y);                 \n         offsetColor(baseDepth, -x, -y);                 \n      }                                                  \n   }                                                     \n   gl_FragColor = color / div;                           \n}                                                        \n"
$.eg=null
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
I.$lazy(y,x,w)}})(["dI","$get$dI",function(){return H.fm("_$dart_dartClosure")},"cO","$get$cO",function(){return H.fm("_$dart_js")},"eA","$get$eA",function(){return H.aB(H.cm({
toString:function(){return"$receiver$"}}))},"eB","$get$eB",function(){return H.aB(H.cm({$method$:null,
toString:function(){return"$receiver$"}}))},"eC","$get$eC",function(){return H.aB(H.cm(null))},"eD","$get$eD",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eH","$get$eH",function(){return H.aB(H.cm(void 0))},"eI","$get$eI",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.aB(H.eG(null))},"eE","$get$eE",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eK","$get$eK",function(){return H.aB(H.eG(void 0))},"eJ","$get$eJ",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d9","$get$d9",function(){return P.ju()},"bK","$get$bK",function(){return[]},"fb","$get$fb",function(){return P.ie("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dG","$get$dG",function(){return{}},"eU","$get$eU",function(){return Z.ao(0)},"d6","$get$d6",function(){return Z.ao(511)},"a3","$get$a3",function(){return Z.ao(1)},"av","$get$av",function(){return Z.ao(2)},"aE","$get$aE",function(){return Z.ao(4)},"ap","$get$ap",function(){return Z.ao(8)},"aF","$get$aF",function(){return Z.ao(16)},"bD","$get$bD",function(){return Z.ao(32)},"bE","$get$bE",function(){return Z.ao(64)},"d7","$get$d7",function(){return Z.ao(96)},"aS","$get$aS",function(){return Z.ao(128)},"aD","$get$aD",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.p,,]},{func:1,ret:-1,args:[P.B,[P.f,E.ax]]},{func:1,ret:P.K,args:[D.x]},{func:1,ret:P.K,args:[F.ak]},{func:1,ret:P.K,args:[F.ag,P.n,P.n]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.B,[P.f,D.U]]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.p,args:[P.B]},{func:1,ret:P.n},{func:1,ret:-1,args:[P.B,[P.f,U.a5]]},{func:1,ret:-1,args:[P.B,[P.f,M.aA]]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.B,[P.f,V.al]]},{func:1,ret:-1,args:[P.B,[P.f,O.bA]]},{func:1,ret:P.K,args:[W.a9]},{func:1,ret:P.a7,args:[W.M]},{func:1,ret:W.a0,args:[W.M]},{func:1,args:[P.p]},{func:1,ret:P.K,args:[,],opt:[,]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.a7,args:[P.n,P.n]},{func:1,ret:-1,args:[P.a],opt:[P.au]},{func:1,args:[,P.p]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.a7,args:[[P.f,D.U]]},{func:1,ret:P.K,args:[P.b3]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[P.X]}]
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
if(x==y)H.ly(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fq,[])
else K.fq([])})})()
//# sourceMappingURL=test.dart.js.map
