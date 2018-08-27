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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dn(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dp=function(){}
var dart=[["","",,H,{"^":"",mm:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ds==null){H.ld()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eS("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cW()]
if(v!=null)return v
v=H.li(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cW(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n:{"^":"a;",
u:function(a,b){return a===b},
gV:function(a){return H.by(a)},
j:["e0",function(a){return"Instance of '"+H.b1(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hq:{"^":"n;",
j:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa4:1},
e0:{"^":"n;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
cX:{"^":"n;",
gV:function(a){return 0},
j:["e1",function(a){return String(a)}]},
i1:{"^":"cX;"},
de:{"^":"cX;"},
bZ:{"^":"cX;",
j:function(a){var z=a[$.$get$dK()]
if(z==null)return this.e1(a)
return"JavaScript function for "+H.k(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscS:1},
aZ:{"^":"n;$ti",
h:function(a,b){H.D(b,H.z(a,0))
if(!!a.fixed$length)H.q(P.ai("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.q(P.ai("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
c_:function(a,b){var z,y
H.u(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.q(P.ai("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bi(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a5(z,y,H.k(a[y]))
return z.join(b)},
h8:function(a){return this.C(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bF:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.am(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.am(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.z(a,0)])
return H.d(a.slice(b,c),[H.z(a,0)])},
gcn:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.ho())},
aw:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
j:function(a){return P.cT(a,"[","]")},
ga_:function(a){return new J.ap(a,a.length,0,[H.z(a,0)])},
gV:function(a){return H.by(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.ai("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.ca(b,"newLength",null))
if(b<0)throw H.h(P.am(b,0,null,"newLength",null))
a.length=b},
a5:function(a,b,c){H.Y(b)
H.D(c,H.z(a,0))
if(!!a.immutable$list)H.q(P.ai("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aV(a,b))
if(b>=a.length||b<0)throw H.h(H.aV(a,b))
a[b]=c},
$ise:1,
$isf:1,
n:{
hp:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.ca(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.am(a,0,4294967295,"length",null))
return J.dY(new Array(a),b)},
dY:function(a,b){return J.br(H.d(a,[b]))},
br:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
ml:{"^":"aZ;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
gT:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cm:{"^":"n;",
hD:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ai(""+a+".toInt()"))},
ck:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ai(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ai(""+a+".round()"))},
dQ:function(a,b){var z,y
if(b>20)throw H.h(P.am(b,0,20,"fractionDigits",null))
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
return this.d2(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d2(a,b)},
d2:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ai("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.fj(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fj:function(a,b){return b>31?0:a>>>b},
ah:function(a,b){if(typeof b!=="number")throw H.h(H.aU(b))
return a<b},
$isv:1,
$isU:1},
e_:{"^":"cm;",$isB:1},
dZ:{"^":"cm;"},
cV:{"^":"n;",
c8:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aV(a,b))
if(b<0)throw H.h(H.aV(a,b))
if(b>=a.length)H.q(H.aV(a,b))
return a.charCodeAt(b)},
bf:function(a,b){if(b>=a.length)throw H.h(H.aV(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.V(b)
if(typeof b!=="string")throw H.h(P.ca(b,null,null))
return a+b},
bG:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cq(b,null,null))
if(b>c)throw H.h(P.cq(b,null,null))
if(c>a.length)throw H.h(P.cq(c,null,null))
return a.substring(b,c)},
cF:function(a,b){return this.bG(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hl:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ag:function(a,b){return this.hl(a,b," ")},
fV:function(a,b,c){if(c>a.length)throw H.h(P.am(c,0,a.length,null,null))
return H.fx(a,b,c)},
j:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isee:1,
$isp:1}}],["","",,H,{"^":"",
ho:function(){return new P.iE("No element")},
a0:{"^":"jc;a",
gk:function(a){return this.a.length},
i:function(a,b){return C.i.c8(this.a,b)},
$aseT:function(){return[P.B]},
$ast:function(){return[P.B]},
$ase:function(){return[P.B]},
$asf:function(){return[P.B]}},
h6:{"^":"e;"},
e5:{"^":"a;a,b,c,0d,$ti",
gT:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.c7(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bi(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hG:{"^":"e;a,b,$ti",
ga_:function(a){return new H.hH(J.bV(this.a),this.b,this.$ti)},
gk:function(a){return J.bf(this.a)},
F:function(a,b){return this.b.$1(J.dx(this.a,b))},
$ase:function(a,b){return[b]}},
hH:{"^":"cU;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$ascU:function(a,b){return[b]}},
js:{"^":"e;a,b,$ti",
ga_:function(a){return new H.jt(J.bV(this.a),this.b,this.$ti)}},
jt:{"^":"cU;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cj:{"^":"a;$ti"},
eT:{"^":"a;$ti"},
jc:{"^":"cn+eT;"}}],["","",,H,{"^":"",
l8:function(a){return init.types[H.Y(a)]},
lg:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isE},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.h(H.aU(a))
return z},
by:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b1:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$isde){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bf(w,0)===36)w=C.i.cF(w,1)
r=H.dt(H.bT(H.aW(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eh:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ib:function(a){var z,y,x,w
z=H.d([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aU(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.bj(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aU(w))}return H.eh(z)},
ei:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aU(x))
if(x<0)throw H.h(H.aU(x))
if(x>65535)return H.ib(a)}return H.eh(a)},
ia:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.bj(z,10))>>>0,56320|z&1023)}throw H.h(P.am(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i9:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
i7:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
i3:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
i4:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
i6:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
i8:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
i5:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
r:function(a){throw H.h(H.aU(a))},
i:function(a,b){if(a==null)J.bf(a)
throw H.h(H.aV(a,b))},
aV:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.Y(J.bf(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.O(b,a,"index",null,z)
return P.cq(b,"index",null)},
l4:function(a,b,c){if(a>c)return new P.cp(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cp(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aU:function(a){return new P.aE(!0,a,null,null)},
l_:function(a){if(typeof a!=="number")throw H.h(H.aU(a))
return a},
h:function(a){var z
if(a==null)a=new P.ed()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fz})
z.name=""}else z.toString=H.fz
return z},
fz:function(){return J.ab(this.dartException)},
q:function(a){throw H.h(a)},
y:function(a){throw H.h(P.bi(a))},
aY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lt(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cY(H.k(y)+" (Error "+w+")",null))
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
if(m!=null)return z.$1(H.cY(H.V(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.cY(H.V(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ec(H.V(y),m))}}return z.$1(new H.jb(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.em()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.em()
return a},
bd:function(a){var z
if(a==null)return new H.f9(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f9(a)},
l6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a5(0,a[y],a[x])}return b},
lf:function(a,b,c,d,e,f){H.j(a,"$iscS")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.o("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lf)
a.$identity=z
return z},
fQ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isf){z.$reflectionInfo=d
x=H.ie(z).r}else x=d
w=e?Object.create(new H.iF().constructor.prototype):Object.create(new H.cH(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.G()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dH(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l8,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dC:H.cI
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dH(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fN:function(a,b,c,d){var z=H.cI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dH:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fP(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fN(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bg
if(v==null){v=H.cb("self")
$.bg=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bg
if(v==null){v=H.cb("self")
$.bg=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
fO:function(a,b,c,d){var z,y
z=H.cI
y=H.dC
switch(b?-1:a){case 0:throw H.h(H.ip("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fP:function(a,b){var z,y,x,w,v,u,t,s
z=$.bg
if(z==null){z=H.cb("self")
$.bg=z}y=$.dB
if(y==null){y=H.cb("receiver")
$.dB=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fO(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()},
dn:function(a,b,c,d,e,f,g){var z,y
z=J.br(H.bT(b))
H.Y(c)
y=!!J.K(d).$isf?J.br(d):d
return H.fQ(a,z,c,y,!!e,f,g)},
V:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aB(a,"String"))},
ll:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aB(a,"num"))},
fn:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aB(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aB(a,"int"))},
fv:function(a,b){throw H.h(H.aB(a,H.V(b).substring(3)))},
ln:function(a,b){var z=J.c7(b)
throw H.h(H.fM(a,z.bG(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fv(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.ln(a,b)},
bT:function(a){if(a==null)return a
if(!!J.K(a).$isf)return a
throw H.h(H.aB(a,"List"))},
lh:function(a,b){if(a==null)return a
if(!!J.K(a).$isf)return a
if(J.K(a)[b])return a
H.fv(a,b)},
fo:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fo(J.K(a))
if(z==null)return!1
y=H.fr(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.dj)return a
$.dj=!0
try{if(H.c6(a,b))return a
z=H.c9(b)
y=H.aB(a,z)
throw H.h(y)}finally{$.dj=!1}},
dq:function(a,b){if(a!=null&&!H.dm(a,b))H.q(H.aB(a,H.c9(b)))
return a},
fi:function(a){var z
if(a instanceof H.w){z=H.fo(J.K(a))
if(z!=null)return H.c9(z)
return"Closure"}return H.b1(a)},
ls:function(a){throw H.h(new P.fW(H.V(a)))},
fp:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
ni:function(a,b,c){return H.be(a["$as"+H.k(c)],H.aW(b))},
bS:function(a,b,c,d){var z
H.V(c)
H.Y(d)
z=H.be(a["$as"+H.k(c)],H.aW(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.V(b)
H.Y(c)
z=H.be(a["$as"+H.k(b)],H.aW(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Y(b)
z=H.aW(a)
return z==null?null:z[b]},
c9:function(a){var z=H.aX(a,null)
return z},
aX:function(a,b){var z,y
H.u(b,"$isf",[P.p],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dt(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.k(b[y])}if('func' in a)return H.kQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aX("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.p]
H.u(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aX(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aX(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aX(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aX(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l5(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.V(z[l])
n=n+m+H.aX(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dt:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isf",[P.p],"$asf")
if(a==null)return""
z=new P.c3("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aX(u,c)}v="<"+z.j(0)+">"
return v},
be:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ba:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aW(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fl(H.be(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.V(b)
H.bT(c)
H.V(d)
if(a==null)return a
z=H.ba(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dt(c,0,null)
throw H.h(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ao(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ao(a[y],b,c[y],d))return!1
return!0},
ng:function(a,b,c){return a.apply(b,H.be(J.K(b)["$as"+H.k(c)],H.aW(b)))},
fs:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fs(z)}return!1},
dm:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fs(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.K(a).constructor
x=H.aW(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ao(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.dm(a,b))throw H.h(H.aB(a,H.c9(b)))
return a},
ao:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ao(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fr(a,b,c,d)
if('func' in a)return c.builtin$cls==="cS"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ao("type" in a?a.type:null,b,x,d)
else if(H.ao(a,b,x,d))return!0
else{if(!('$is'+"bn" in y.prototype))return!1
w=y.prototype["$as"+"bn"]
v=H.be(w,z?a.slice(1):null)
return H.ao(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c9(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fl(H.be(r,z),b,u,d)},
fr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ao(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ao(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ao(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ao(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lk(m,b,l,d)},
lk:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ao(c[w],d,a[w],b))return!1}return!0},
nh:function(a,b,c){Object.defineProperty(a,H.V(b),{value:c,enumerable:false,writable:true,configurable:true})},
li:function(a){var z,y,x,w,v,u
z=H.V($.fq.$1(a))
y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.V($.fk.$2(a,z))
if(z!=null){y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cD[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cE(x)
$.cB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cD[z]=x
return x}if(v==="-"){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fu(a,x)
if(v==="*")throw H.h(P.eS(z))
if(init.leafTags[z]===true){u=H.cE(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fu(a,x)},
fu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dv(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE:function(a){return J.dv(a,!1,null,!!a.$isE)},
lj:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cE(z)
else return J.dv(z,c,null,null)},
ld:function(){if(!0===$.ds)return
$.ds=!0
H.le()},
le:function(){var z,y,x,w,v,u,t,s
$.cB=Object.create(null)
$.cD=Object.create(null)
H.l9()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fw.$1(v)
if(u!=null){t=H.lj(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l9:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b9(C.B,H.b9(C.G,H.b9(C.n,H.b9(C.n,H.b9(C.F,H.b9(C.C,H.b9(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fq=new H.la(v)
$.fk=new H.lb(u)
$.fw=new H.lc(t)},
b9:function(a,b){return a(b)||b},
fx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fy:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
id:{"^":"a;a,b,c,d,e,f,r,0x",n:{
ie:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.br(z)
y=z[0]
x=z[1]
return new H.id(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j1:{"^":"a;a,b,c,d,e,f",
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
aA:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.p])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eG:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"Z;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
ec:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
ht:{"^":"Z;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
n:{
cY:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ht(a,y,z?null:b.receiver)}}},
jb:{"^":"Z;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lt:{"^":"w:13;a",
$1:function(a){if(!!J.K(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f9:{"^":"a;a,0b",
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
j:function(a){return"Closure '"+H.b1(this).trim()+"'"},
gdT:function(){return this},
$iscS:1,
gdT:function(){return this}},
eq:{"^":"w;"},
iF:{"^":"eq;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cH:{"^":"eq;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cH))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.by(this.a)
else y=typeof z!=="object"?J.aD(z):H.by(z)
return(y^H.by(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b1(z)+"'")},
n:{
cI:function(a){return a.a},
dC:function(a){return a.c},
cb:function(a){var z,y,x,w,v
z=new H.cH("self","target","receiver","name")
y=J.br(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j2:{"^":"Z;a",
j:function(a){return this.a},
n:{
aB:function(a,b){return new H.j2("TypeError: "+H.k(P.ci(a))+": type '"+H.fi(a)+"' is not a subtype of type '"+b+"'")}}},
fL:{"^":"Z;a",
j:function(a){return this.a},
n:{
fM:function(a,b){return new H.fL("CastError: "+H.k(P.ci(a))+": type '"+H.fi(a)+"' is not a subtype of type '"+b+"'")}}},
io:{"^":"Z;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
n:{
ip:function(a){return new H.io(a)}}},
b_:{"^":"hE;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gay:function(a){return new H.e4(this,[H.z(this,0)])},
d8:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cS(y,b)}else return this.h6(b)},
h6:function(a){var z=this.d
if(z==null)return!1
return this.cl(this.bO(z,J.aD(a)&0x3ffffff),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.h7(b)},
h7:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bO(z,J.aD(a)&0x3ffffff)
x=this.cl(y,a)
if(x<0)return
return y[x].b},
a5:function(a,b,c){var z,y,x,w,v,u
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bT()
this.b=z}this.cL(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bT()
this.c=y}this.cL(y,b,c)}else{x=this.d
if(x==null){x=this.bT()
this.d=x}w=J.aD(b)&0x3ffffff
v=this.bO(x,w)
if(v==null)this.bY(x,w,[this.bU(b,c)])
else{u=this.cl(v,b)
if(u>=0)v[u].b=c
else v.push(this.bU(b,c))}}},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bi(this))
z=z.c}},
cL:function(a,b,c){var z
H.D(b,H.z(this,0))
H.D(c,H.z(this,1))
z=this.bg(a,b)
if(z==null)this.bY(a,b,this.bU(b,c))
else z.b=c},
ey:function(){this.r=this.r+1&67108863},
bU:function(a,b){var z,y
z=new H.hw(H.D(a,H.z(this,0)),H.D(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ey()
return z},
cl:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
j:function(a){return P.e7(this)},
bg:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
er:function(a,b){delete a[b]},
cS:function(a,b){return this.bg(a,b)!=null},
bT:function(){var z=Object.create(null)
this.bY(z,"<non-identifier-key>",z)
this.er(z,"<non-identifier-key>")
return z},
$ise3:1},
hw:{"^":"a;a,b,0c,0d"},
e4:{"^":"h6;a,$ti",
gk:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.hx(z,z.r,this.$ti)
y.c=z.e
return y}},
hx:{"^":"a;a,b,0c,0d,$ti",
gT:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bi(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
la:{"^":"w:13;a",
$1:function(a){return this.a(a)}},
lb:{"^":"w:39;a",
$2:function(a,b){return this.a(a,b)}},
lc:{"^":"w:35;a",
$1:function(a){return this.a(H.V(a))}},
hr:{"^":"a;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$isee:1,
n:{
hs:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hf("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l5:function(a){return J.dY(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b7:function(a){return a},
aT:function(a,b,c){H.bT(b)
if(a>>>0!==a||a>=c)throw H.h(H.aV(b,a))},
kP:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l4(a,b,c))
return b},
hW:{"^":"n;",$isn_:1,"%":"DataView;ArrayBufferView;d3|f3|f4|hV|f5|f6|aP"},
d3:{"^":"hW;",
gk:function(a){return a.length},
$isE:1,
$asE:I.dp},
hV:{"^":"f4;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
$ascj:function(){return[P.v]},
$ast:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aP:{"^":"f6;",
$ascj:function(){return[P.B]},
$ast:function(){return[P.B]},
$ise:1,
$ase:function(){return[P.B]},
$isf:1,
$asf:function(){return[P.B]}},
mw:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mx:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
my:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mz:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mA:{"^":"aP;",
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mB:{"^":"aP;",
gk:function(a){return a.length},
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hX:{"^":"aP;",
gk:function(a){return a.length},
i:function(a,b){H.aT(b,a,a.length)
return a[b]},
bF:function(a,b,c){return new Uint8Array(a.subarray(b,H.kP(b,c,a.length)))},
"%":";Uint8Array"},
f3:{"^":"d3+t;"},
f4:{"^":"f3+cj;"},
f5:{"^":"d3+t;"},
f6:{"^":"f5+cj;"}}],["","",,P,{"^":"",
jv:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bb(new P.jx(z),1)).observe(y,{childList:true})
return new P.jw(z,y,x)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
n5:[function(a){self.scheduleImmediate(H.bb(new P.jy(H.c(a,{func:1,ret:-1})),0))},"$1","kX",4,0,9],
n6:[function(a){self.setImmediate(H.bb(new P.jz(H.c(a,{func:1,ret:-1})),0))},"$1","kY",4,0,9],
n7:[function(a){P.db(C.m,H.c(a,{func:1,ret:-1}))},"$1","kZ",4,0,9],
db:function(a,b){var z
H.c(b,{func:1,ret:-1})
z=C.f.a1(a.a,1000)
return P.kt(z<0?0:z,b)},
ev:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.b3]})
z=C.f.a1(a.a,1000)
return P.ku(z<0?0:z,b)},
kT:function(a,b){if(H.c6(a,{func:1,args:[P.a,P.as]}))return b.hu(a,null,P.a,P.as)
if(H.c6(a,{func:1,args:[P.a]}))return H.c(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.ca(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kS:function(){var z,y
for(;z=$.b8,z!=null;){$.bQ=null
y=z.b
$.b8=y
if(y==null)$.bP=null
z.a.$0()}},
nf:[function(){$.dk=!0
try{P.kS()}finally{$.bQ=null
$.dk=!1
if($.b8!=null)$.$get$dg().$1(P.fm())}},"$0","fm",0,0,3],
fh:function(a){var z=new P.eY(H.c(a,{func:1,ret:-1}))
if($.b8==null){$.bP=z
$.b8=z
if(!$.dk)$.$get$dg().$1(P.fm())}else{$.bP.b=z
$.bP=z}},
kW:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.b8
if(z==null){P.fh(a)
$.bQ=$.bP
return}y=new P.eY(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.b8=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
lo:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.P
if(C.j===y){P.cA(null,null,C.j,a)
return}y.toString
P.cA(null,null,y,H.c(y.c3(a),z))},
iY:function(a,b){var z,y
z={func:1,ret:-1}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.db(a,b)}return P.db(a,H.c(y.c3(b),z))},
iZ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b3]}
H.c(b,z)
y=$.P
if(y===C.j){y.toString
return P.ev(a,b)}x=y.d6(b,P.b3)
$.P.toString
return P.ev(a,H.c(x,z))},
cz:function(a,b,c,d,e){var z={}
z.a=d
P.kW(new P.kU(z,e))},
ff:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fg:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
kV:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cA:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c3(d):c.fT(d,-1)
P.fh(d)},
jx:{"^":"w:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jw:{"^":"w:29;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jy:{"^":"w:2;a",
$0:function(){this.a.$0()}},
jz:{"^":"w:2;a",
$0:function(){this.a.$0()}},
fc:{"^":"a;a,0b,c",
ed:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bb(new P.kw(this,b),0),a)
else throw H.h(P.ai("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bb(new P.kv(this,a,Date.now(),b),0),a)
else throw H.h(P.ai("Periodic timer."))},
$isb3:1,
n:{
kt:function(a,b){var z=new P.fc(!0,0)
z.ed(a,b)
return z},
ku:function(a,b){var z=new P.fc(!1,0)
z.ee(a,b)
return z}}},
kw:{"^":"w:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kv:{"^":"w:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.e3(w,x)}z.c=y
this.d.$1(z)}},
b6:{"^":"a;0a,b,c,d,e,$ti",
hd:function(a){if(this.c!==6)return!0
return this.b.b.cv(H.c(this.d,{func:1,ret:P.a4,args:[P.a]}),a.a,P.a4,P.a)},
h5:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.a,P.as]}))return H.dq(w.hy(z,a.a,a.b,null,y,P.as),x)
else return H.dq(w.cv(H.c(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aM:{"^":"a;d1:a<,b,0fb:c<,$ti",
dP:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kT(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aM(0,$.P,[c])
w=b==null?1:3
this.cM(new P.b6(x,w,a,b,[z,c]))
return x},
hC:function(a,b){return this.dP(a,null,b)},
cM:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb6")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaM")
z=y.a
if(z<4){y.cM(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cA(null,null,z,H.c(new P.jN(this,a),{func:1,ret:-1}))}},
cY:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb6")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaM")
y=u.a
if(y<4){u.cY(a)
return}this.a=y
this.c=u.c}z.a=this.bi(a)
y=this.b
y.toString
P.cA(null,null,y,H.c(new P.jS(z,this),{func:1,ret:-1}))}},
bW:function(){var z=H.j(this.c,"$isb6")
this.c=null
return this.bi(z)},
bi:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cP:function(a){var z,y,x,w
z=H.z(this,0)
H.dq(a,{futureOr:1,type:z})
y=this.$ti
x=H.ba(a,"$isbn",y,"$asbn")
if(x){z=H.ba(a,"$isaM",y,null)
if(z)P.f_(a,this)
else P.jO(a,this)}else{w=this.bW()
H.D(a,z)
this.a=4
this.c=a
P.bM(this,w)}},
bK:[function(a,b){var z
H.j(b,"$isas")
z=this.bW()
this.a=8
this.c=new P.aj(a,b)
P.bM(this,z)},function(a){return this.bK(a,null)},"hJ","$2","$1","gen",4,2,28],
$isbn:1,
n:{
jO:function(a,b){var z,y,x
b.a=1
try{a.dP(new P.jP(b),new P.jQ(b),null)}catch(x){z=H.aY(x)
y=H.bd(x)
P.lo(new P.jR(b,z,y))}},
f_:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaM")
if(z>=4){y=b.bW()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.j(b.c,"$isb6")
b.a=2
b.c=a
a.cY(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isaj")
y=y.b
u=v.a
t=v.b
y.toString
P.cz(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bM(z.a,b)}y=z.a
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
if(p){H.j(r,"$isaj")
y=y.b
u=r.a
t=r.b
y.toString
P.cz(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jV(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jU(x,b,r).$0()}else if((y&2)!==0)new P.jT(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbn){if(y.a>=4){n=H.j(t.c,"$isb6")
t.c=null
b=t.bi(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f_(y,t)
return}}m=b.b
n=H.j(m.c,"$isb6")
m.c=null
b=m.bi(n)
y=x.a
u=x.b
if(!y){H.D(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isaj")
m.a=8
m.c=u}z.a=m
y=m}}}},
jN:{"^":"w:2;a,b",
$0:function(){P.bM(this.a,this.b)}},
jS:{"^":"w:2;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
jP:{"^":"w:15;a",
$1:function(a){var z=this.a
z.a=0
z.cP(a)}},
jQ:{"^":"w:27;a",
$2:function(a,b){this.a.bK(a,H.j(b,"$isas"))},
$1:function(a){return this.$2(a,null)}},
jR:{"^":"w:2;a,b,c",
$0:function(){this.a.bK(this.b,this.c)}},
jV:{"^":"w:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dN(H.c(w.d,{func:1}),null)}catch(v){y=H.aY(v)
x=H.bd(v)
if(this.d){w=H.j(this.a.a.c,"$isaj").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isaj")
else u.b=new P.aj(y,x)
u.a=!0
return}if(!!J.K(z).$isbn){if(z instanceof P.aM&&z.gd1()>=4){if(z.gd1()===8){w=this.b
w.b=H.j(z.gfb(),"$isaj")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hC(new P.jW(t),null)
w.a=!1}}},
jW:{"^":"w:24;a",
$1:function(a){return this.a}},
jU:{"^":"w:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.D(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cv(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aY(t)
y=H.bd(t)
x=this.a
x.b=new P.aj(z,y)
x.a=!0}}},
jT:{"^":"w:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isaj")
w=this.c
if(w.hd(z)&&w.e!=null){v=this.b
v.b=w.h5(z)
v.a=!1}}catch(u){y=H.aY(u)
x=H.bd(u)
w=H.j(this.a.a.c,"$isaj")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aj(y,x)
s.a=!0}}},
eY:{"^":"a;a,0b"},
d8:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aM(0,$.P,[P.B])
z.a=0
this.hb(new P.iI(z,this),!0,new P.iJ(z,y),y.gen())
return y}},
iI:{"^":"w;a,b",
$1:function(a){H.D(a,H.aC(this.b,"d8",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aC(this.b,"d8",0)]}}},
iJ:{"^":"w:2;a,b",
$0:function(){this.b.cP(this.a.a)}},
eo:{"^":"a;$ti"},
iH:{"^":"a;"},
b3:{"^":"a;"},
aj:{"^":"a;a,b",
j:function(a){return H.k(this.a)},
$isZ:1},
kD:{"^":"a;",$isn4:1},
kU:{"^":"w:2;a,b",
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
hz:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.ff(null,null,this,a,-1)}catch(x){z=H.aY(x)
y=H.bd(x)
P.cz(null,null,this,z,H.j(y,"$isas"))}},
hA:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fg(null,null,this,a,b,-1,c)}catch(x){z=H.aY(x)
y=H.bd(x)
P.cz(null,null,this,z,H.j(y,"$isas"))}},
fT:function(a,b){return new P.kh(this,H.c(a,{func:1,ret:b}),b)},
c3:function(a){return new P.kg(this,H.c(a,{func:1,ret:-1}))},
d6:function(a,b){return new P.ki(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
dN:function(a,b){H.c(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.ff(null,null,this,a,b)},
cv:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.P===C.j)return a.$1(b)
return P.fg(null,null,this,a,b,c,d)},
hy:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.P===C.j)return a.$2(b,c)
return P.kV(null,null,this,a,b,c,d,e,f)},
hu:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
kh:{"^":"w;a,b,c",
$0:function(){return this.a.dN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kg:{"^":"w:3;a,b",
$0:function(){return this.a.hz(this.b)}},
ki:{"^":"w;a,b,c",
$1:function(a){var z=this.c
return this.a.hA(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hz:function(a,b,c){H.bT(a)
return H.u(H.l6(a,new H.b_(0,0,[b,c])),"$ise3",[b,c],"$ase3")},
hy:function(a,b){return new H.b_(0,0,[a,b])},
hA:function(a,b,c,d){return new P.k1(0,0,[d])},
hn:function(a,b,c){var z,y
if(P.dl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.kR(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ep(b,H.lh(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cT:function(a,b,c){var z,y,x
if(P.dl(a))return b+"..."+c
z=new P.c3(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.ep(x.gaF(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaF()+c
y=z.gaF()
return y.charCodeAt(0)==0?y:y},
dl:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
kR:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.k(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.E();t=s,s=r){r=z.gT(z);++x
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
e7:function(a){var z,y,x
z={}
if(P.dl(a))return"{...}"
y=new P.c3("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaF()+"{"
z.a=!0
J.fD(a,new P.hF(z,y))
z=y
z.a=z.gaF()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaF()
return z.charCodeAt(0)==0?z:z},
k1:{"^":"jX;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.f2(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.D(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.di()
this.b=z}return this.cN(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.di()
this.c=y}return this.cN(y,b)}else return this.eg(0,b)},
eg:function(a,b){var z,y,x
H.D(b,H.z(this,0))
z=this.d
if(z==null){z=P.di()
this.d=z}y=this.cQ(b)
x=z[y]
if(x==null)z[y]=[this.bJ(b)]
else{if(this.cV(x,b)>=0)return!1
x.push(this.bJ(b))}return!0},
R:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cZ(this.c,b)
else return this.f6(0,b)},
f6:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ev(z,b)
x=this.cV(y,b)
if(x<0)return!1
this.d3(y.splice(x,1)[0])
return!0},
cN:function(a,b){H.D(b,H.z(this,0))
if(H.j(a[b],"$isdh")!=null)return!1
a[b]=this.bJ(b)
return!0},
cZ:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isdh")
if(z==null)return!1
this.d3(z)
delete a[b]
return!0},
cO:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.dh(H.D(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cO()
return z},
d3:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cO()},
cQ:function(a){return J.aD(a)&0x3ffffff},
ev:function(a,b){return a[this.cQ(b)]},
cV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
n:{
di:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dh:{"^":"a;a,0b,0c"},
k2:{"^":"a;a,b,0c,0d,$ti",
gT:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bi(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
f2:function(a,b,c){var z=new P.k2(a,b,[c])
z.c=a.e
return z}}},
jX:{"^":"iq;"},
cn:{"^":"k3;",$ise:1,$isf:1},
t:{"^":"a;$ti",
ga_:function(a){return new H.e5(a,this.gk(a),0,[H.bS(this,a,"t",0)])},
F:function(a,b){return this.i(a,b)},
hF:function(a,b){var z,y,x
z=H.d([],[H.bS(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.a5(z,y,this.i(a,y));++y}return z},
hE:function(a){return this.hF(a,!0)},
j:function(a){return P.cT(a,"[","]")}},
hE:{"^":"af;"},
hF:{"^":"w:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
af:{"^":"a;$ti",
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.bS(this,a,"af",0),H.bS(this,a,"af",1)]})
for(z=J.bV(this.gay(a));z.E();){y=z.gT(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.bf(this.gay(a))},
j:function(a){return P.e7(a)},
$isa6:1},
is:{"^":"a;$ti",
j:function(a){return P.cT(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dy("index"))
if(b<0)H.q(P.am(b,0,null,"index",null))
for(z=P.f2(this,this.r,H.z(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.h(P.O(b,this,"index",null,y))},
$ise:1},
iq:{"^":"is;"},
k3:{"^":"a+t;"}}],["","",,P,{"^":"",cL:{"^":"a;$ti"},dI:{"^":"iH;$ti"},h8:{"^":"cL;",
$ascL:function(){return[P.p,[P.f,P.B]]}},ji:{"^":"h8;a"},jj:{"^":"dI;",
fX:function(a,b,c){var z,y,x,w
z=a.length
P.ej(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kC(0,0,x)
if(w.eu(a,b,z)!==z)w.d4(C.i.c8(a,z-1),0)
return C.J.bF(x,0,w.b)},
fW:function(a){return this.fX(a,0,null)},
$asdI:function(){return[P.p,[P.f,P.B]]}},kC:{"^":"a;a,b,c",
d4:function(a,b){var z,y,x,w,v
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
if(b!==c&&(C.i.c8(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bf(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d4(w,C.i.bf(a,u)))x=u}else if(w<=2047){v=this.b
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
ha:function(a){var z=J.K(a)
if(!!z.$isw)return z.j(a)
return"Instance of '"+H.b1(a)+"'"},
hB:function(a,b,c,d){var z,y
H.D(b,d)
z=J.hp(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a5(z,y,b)
return H.u(z,"$isf",[d],"$asf")},
hC:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.ga_(a);x.E();)C.a.h(y,H.D(x.gT(x),c))
if(b)return y
return H.u(J.br(y),"$isf",z,"$asf")},
d9:function(a,b,c){var z,y
z=P.B
H.u(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.u(a,"$isaZ",[z],"$asaZ")
y=a.length
c=P.ej(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ah()
z=c<y}else z=!0
return H.ei(z?C.a.bF(a,b,c):a)}return P.iK(a,b,c)},
iK:function(a,b,c){var z,y,x
H.u(a,"$ise",[P.B],"$ase")
z=J.bV(a)
for(y=0;y<b;++y)if(!z.E())throw H.h(P.am(b,0,y,null,null))
x=[]
for(;z.E();)x.push(z.gT(z))
return H.ei(x)},
ig:function(a,b,c){return new H.hr(a,H.hs(a,!1,!0,!1))},
kB:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isf",[P.B],"$asf")
if(c===C.r){z=$.$get$fe().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.fW(H.D(b,H.aC(c,"cL",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ia(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ha(a)},
o:function(a){return new P.eZ(a)},
dw:function(a){H.lm(a)},
a4:{"^":"a;"},
"+bool":0,
ar:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ar))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.f.bj(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fX(H.i9(this))
y=P.bW(H.i7(this))
x=P.bW(H.i3(this))
w=P.bW(H.i4(this))
v=P.bW(H.i6(this))
u=P.bW(H.i8(this))
t=P.fY(H.i5(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fX:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"U;"},
"+double":0,
bk:{"^":"a;a",
ah:function(a,b){return C.f.ah(this.a,H.j(b,"$isbk").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bk))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.h5()
y=this.a
if(y<0)return"-"+new P.bk(0-y).j(0)
x=z.$1(C.f.a1(y,6e7)%60)
w=z.$1(C.f.a1(y,1e6)%60)
v=new P.h4().$1(y%1e6)
return""+C.f.a1(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
n:{
dS:function(a,b,c,d,e,f){return new P.bk(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h4:{"^":"w:23;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h5:{"^":"w:23;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
ed:{"^":"Z;",
j:function(a){return"Throw of null."}},
aE:{"^":"Z;a,b,c,d",
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbM()+y+x
if(!this.a)return w
v=this.gbL()
u=P.ci(this.b)
return w+v+": "+H.k(u)},
n:{
fF:function(a){return new P.aE(!1,null,null,a)},
ca:function(a,b,c){return new P.aE(!0,a,b,c)},
dy:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
cp:{"^":"aE;e,f,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
n:{
cq:function(a,b,c){return new P.cp(null,null,!0,a,b,"Value not in range")},
am:function(a,b,c,d,e){return new P.cp(b,c,!0,a,d,"Invalid value")},
ej:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.h(P.am(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.h(P.am(b,a,c,"end",f))
return b}return c}}},
hm:{"^":"aE;e,k:f>,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){if(J.fA(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
n:{
O:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.bf(b))
return new P.hm(b,z,!0,a,c,"Index out of range")}}},
jd:{"^":"Z;a",
j:function(a){return"Unsupported operation: "+this.a},
n:{
ai:function(a){return new P.jd(a)}}},
ja:{"^":"Z;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eS:function(a){return new P.ja(a)}}},
iE:{"^":"Z;a",
j:function(a){return"Bad state: "+this.a}},
fT:{"^":"Z;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.ci(z))+"."},
n:{
bi:function(a){return new P.fT(a)}}},
i_:{"^":"a;",
j:function(a){return"Out of Memory"},
$isZ:1},
em:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isZ:1},
fW:{"^":"Z;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eZ:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
hf:{"^":"a;a,b,c",
j:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bG(x,0,75)+"..."
return y+"\n"+x}},
B:{"^":"U;"},
"+int":0,
e:{"^":"a;$ti",
gk:function(a){var z,y
z=this.ga_(this)
for(y=0;z.E();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dy("index"))
if(b<0)H.q(P.am(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.E();){x=z.gT(z)
if(b===y)return x;++y}throw H.h(P.O(b,this,"index",null,y))},
j:function(a){return P.hn(this,"(",")")}},
cU:{"^":"a;$ti"},
f:{"^":"a;$ti",$ise:1},
"+List":0,
a6:{"^":"a;$ti"},
I:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
U:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gV:function(a){return H.by(this)},
j:function(a){return"Instance of '"+H.b1(this)+"'"},
toString:function(){return this.j(this)}},
as:{"^":"a;"},
p:{"^":"a;",$isee:1},
"+String":0,
c3:{"^":"a;aF:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
ep:function(a,b,c){var z=J.bV(b)
if(!z.E())return a
if(c.length===0){do a+=H.k(z.gT(z))
while(z.E())}else{a+=H.k(z.gT(z))
for(;z.E();)a=a+c+H.k(z.gT(z))}return a}}}}],["","",,W,{"^":"",
cK:function(a,b){var z=document.createElement("canvas")
return z},
h7:function(a){H.j(a,"$isa5")
return"wheel"},
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f1:function(a,b,c,d){var z,y
z=W.cx(W.cx(W.cx(W.cx(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fj:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d6(a,b)},
bq:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lv:{"^":"d6;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
lw:{"^":"n;0k:length=","%":"AccessibleNodeList"},
lx:{"^":"bq;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ly:{"^":"bq;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fK:{"^":"n;","%":";Blob"},
cJ:{"^":"bq;",
bE:function(a,b,c){if(c!=null)return a.getContext(b,P.l0(c,null))
return a.getContext(b)},
dV:function(a,b){return this.bE(a,b,null)},
$iscJ:1,
"%":"HTMLCanvasElement"},
dF:{"^":"n;",$isdF:1,"%":"CanvasRenderingContext2D"},
lE:{"^":"L;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lG:{"^":"cf;0k:length=","%":"CSSPerspective"},
lH:{"^":"cQ;0q:x=,0t:y=","%":"CSSPositionValue"},
lI:{"^":"cf;0q:x=,0t:y=","%":"CSSRotation"},
bj:{"^":"n;",$isbj:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lJ:{"^":"cf;0q:x=,0t:y=","%":"CSSScale"},
lK:{"^":"jD;0k:length=",
dW:function(a,b){var z=a.getPropertyValue(this.ek(a,b))
return z==null?"":z},
ek:function(a,b){var z,y
z=$.$get$dJ()
y=z[b]
if(typeof y==="string")return y
y=this.fk(a,b)
z[b]=y
return y},
fk:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
gc4:function(a){return a.bottom},
gam:function(a){return a.height},
gaS:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fV:{"^":"a;",
gaS:function(a){return this.dW(a,"left")}},
cQ:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cf:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lL:{"^":"cQ;0k:length=","%":"CSSTransformValue"},
lM:{"^":"cf;0q:x=,0t:y=","%":"CSSTranslation"},
lN:{"^":"cQ;0k:length=","%":"CSSUnparsedValue"},
lO:{"^":"n;0k:length=","%":"DataTransferItemList"},
lP:{"^":"n;0q:x=,0t:y=","%":"DeviceAcceleration"},
lQ:{"^":"n;",
j:function(a){return String(a)},
"%":"DOMException"},
lR:{"^":"h2;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
h2:{"^":"n;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
lS:{"^":"jF;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.ae,P.U]]},
$ast:function(){return[[P.ae,P.U]]},
$ise:1,
$ase:function(){return[[P.ae,P.U]]},
$isf:1,
$asf:function(){return[[P.ae,P.U]]},
$asA:function(){return[[P.ae,P.U]]},
"%":"ClientRectList|DOMRectList"},
h3:{"^":"n;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gao(a))+" x "+H.k(this.gam(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.ba(b,"$isae",[P.U],"$asae")
if(!z)return!1
z=J.c8(b)
return a.left===z.gaS(b)&&a.top===z.gbb(b)&&this.gao(a)===z.gao(b)&&this.gam(a)===z.gam(b)},
gV:function(a){return W.f1(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gc4:function(a){return a.bottom},
gam:function(a){return a.height},
gaS:function(a){return a.left},
gb7:function(a){return a.right},
gbb:function(a){return a.top},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isae:1,
$asae:function(){return[P.U]},
"%":";DOMRectReadOnly"},
lT:{"^":"jH;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.p]},
$ast:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$asA:function(){return[P.p]},
"%":"DOMStringList"},
lU:{"^":"n;0k:length=","%":"DOMTokenList"},
jC:{"^":"cn;a,b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.j(z[b],"$isa1")},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.hE(this)
return new J.ap(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a1]},
$ase:function(){return[W.a1]},
$asf:function(){return[W.a1]}},
a1:{"^":"L;",
gd7:function(a){return new W.jC(a,a.children)},
gbn:function(a){return P.ic(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.U)},
j:function(a){return a.localName},
$isa1:1,
"%":";Element"},
ac:{"^":"n;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a5:{"^":"n;",
d5:["e_",function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(c!=null)this.eh(a,b,c,!1)}],
eh:function(a,b,c,d){return a.addEventListener(b,H.bb(H.c(c,{func:1,args:[W.ac]}),1),!1)},
$isa5:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f7|f8|fa|fb"},
bm:{"^":"fK;",$isbm:1,"%":"File"},
mc:{"^":"jM;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$asA:function(){return[W.bm]},
"%":"FileList"},
md:{"^":"a5;0k:length=","%":"FileWriter"},
mg:{"^":"bq;0k:length=","%":"HTMLFormElement"},
bo:{"^":"n;",$isbo:1,"%":"Gamepad"},
mh:{"^":"d6;0q:x=,0t:y=","%":"Gyroscope"},
mi:{"^":"n;0k:length=","%":"History"},
mj:{"^":"jZ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
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
ck:{"^":"n;0da:data=",$isck:1,"%":"ImageData"},
dX:{"^":"bq;",$isdX:1,"%":"HTMLImageElement"},
bs:{"^":"dc;",$isbs:1,"%":"KeyboardEvent"},
mo:{"^":"n;",
j:function(a){return String(a)},
"%":"Location"},
mp:{"^":"d6;0q:x=,0t:y=","%":"Magnetometer"},
mr:{"^":"n;0k:length=","%":"MediaList"},
ms:{"^":"a5;",
d5:function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.e_(a,b,c,!1)},
"%":"MessagePort"},
mt:{"^":"k4;",
i:function(a,b){return P.aN(a.get(H.V(b)))},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gay:function(a){var z=H.d([],[P.p])
this.P(a,new W.hS(z))
return z},
gk:function(a){return a.size},
$asaf:function(){return[P.p,null]},
$isa6:1,
$asa6:function(){return[P.p,null]},
"%":"MIDIInputMap"},
hS:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mu:{"^":"k5;",
i:function(a,b){return P.aN(a.get(H.V(b)))},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gay:function(a){var z=H.d([],[P.p])
this.P(a,new W.hT(z))
return z},
gk:function(a){return a.size},
$asaf:function(){return[P.p,null]},
$isa6:1,
$asa6:function(){return[P.p,null]},
"%":"MIDIOutputMap"},
hT:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bt:{"^":"n;",$isbt:1,"%":"MimeType"},
mv:{"^":"k7;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asA:function(){return[W.bt]},
"%":"MimeTypeArray"},
ax:{"^":"dc;",$isax:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jB:{"^":"cn;a",
ga_:function(a){var z=this.a.childNodes
return new W.dU(z,z.length,-1,[H.bS(C.K,z,"A",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.L]},
$ase:function(){return[W.L]},
$asf:function(){return[W.L]}},
L:{"^":"a5;",
j:function(a){var z=a.nodeValue
return z==null?this.e0(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hY:{"^":"k9;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
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
bw:{"^":"n;0k:length=",$isbw:1,"%":"Plugin"},
mF:{"^":"kd;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asA:function(){return[W.bw]},
"%":"PluginArray"},
mK:{"^":"kj;",
i:function(a,b){return P.aN(a.get(H.V(b)))},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gay:function(a){var z=H.d([],[P.p])
this.P(a,new W.im(z))
return z},
gk:function(a){return a.size},
$asaf:function(){return[P.p,null]},
$isa6:1,
$asa6:function(){return[P.p,null]},
"%":"RTCStatsReport"},
im:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mL:{"^":"bq;0k:length=","%":"HTMLSelectElement"},
d6:{"^":"a5;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bA:{"^":"a5;",$isbA:1,"%":"SourceBuffer"},
mM:{"^":"f8;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asA:function(){return[W.bA]},
"%":"SourceBufferList"},
bB:{"^":"n;",$isbB:1,"%":"SpeechGrammar"},
mN:{"^":"kl;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bB]},
$ast:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$asA:function(){return[W.bB]},
"%":"SpeechGrammarList"},
bC:{"^":"n;0k:length=",$isbC:1,"%":"SpeechRecognitionResult"},
mP:{"^":"ko;",
i:function(a,b){return a.getItem(H.V(b))},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.p,P.p]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gay:function(a){var z=H.d([],[P.p])
this.P(a,new W.iG(z))
return z},
gk:function(a){return a.length},
$asaf:function(){return[P.p,P.p]},
$isa6:1,
$asa6:function(){return[P.p,P.p]},
"%":"Storage"},
iG:{"^":"w:37;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bD:{"^":"n;",$isbD:1,"%":"CSSStyleSheet|StyleSheet"},
bE:{"^":"a5;",$isbE:1,"%":"TextTrack"},
bF:{"^":"a5;",$isbF:1,"%":"TextTrackCue|VTTCue"},
mU:{"^":"ks;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bF]},
$ast:function(){return[W.bF]},
$ise:1,
$ase:function(){return[W.bF]},
$isf:1,
$asf:function(){return[W.bF]},
$asA:function(){return[W.bF]},
"%":"TextTrackCueList"},
mV:{"^":"fb;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bE]},
$ast:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$isf:1,
$asf:function(){return[W.bE]},
$asA:function(){return[W.bE]},
"%":"TextTrackList"},
mW:{"^":"n;0k:length=","%":"TimeRanges"},
bH:{"^":"n;",$isbH:1,"%":"Touch"},
b4:{"^":"dc;",$isb4:1,"%":"TouchEvent"},
mX:{"^":"ky;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bH]},
$ast:function(){return[W.bH]},
$ise:1,
$ase:function(){return[W.bH]},
$isf:1,
$asf:function(){return[W.bH]},
$asA:function(){return[W.bH]},
"%":"TouchList"},
mY:{"^":"n;0k:length=","%":"TrackDefaultList"},
dc:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n0:{"^":"n;",
j:function(a){return String(a)},
"%":"URL"},
n2:{"^":"n;0q:x=","%":"VRStageBoundsPoint"},
n3:{"^":"a5;0k:length=","%":"VideoTrackList"},
bL:{"^":"ax;",
gh0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ai("deltaY is not supported"))},
gh_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ai("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
ju:{"^":"a5;",
f7:function(a,b){return a.requestAnimationFrame(H.bb(H.c(b,{func:1,ret:-1,args:[P.U]}),1))},
es:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
n8:{"^":"kF;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$ise:1,
$ase:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$asA:function(){return[W.bj]},
"%":"CSSRuleList"},
n9:{"^":"h3;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.ba(b,"$isae",[P.U],"$asae")
if(!z)return!1
z=J.c8(b)
return a.left===z.gaS(b)&&a.top===z.gbb(b)&&a.width===z.gao(b)&&a.height===z.gam(b)},
gV:function(a){return W.f1(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gao:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
nb:{"^":"kH;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asA:function(){return[W.bo]},
"%":"GamepadList"},
nc:{"^":"kJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
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
nd:{"^":"kL;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bC]},
$ast:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$asA:function(){return[W.bC]},
"%":"SpeechRecognitionResultList"},
ne:{"^":"kN;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bD]},
$ast:function(){return[W.bD]},
$ise:1,
$ase:function(){return[W.bD]},
$isf:1,
$asf:function(){return[W.bD]},
$asA:function(){return[W.bD]},
"%":"StyleSheetList"},
jI:{"^":"d8;a,b,c,$ti",
hb:function(a,b,c,d){var z=H.z(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
na:{"^":"jI;a,b,c,$ti"},
jJ:{"^":"eo;a,b,c,d,e,$ti",
fo:function(){var z=this.d
if(z!=null&&this.a<=0)J.fC(this.b,this.c,z,!1)},
n:{
X:function(a,b,c,d,e){var z=c==null?null:W.fj(new W.jK(c),W.ac)
z=new W.jJ(0,a,b,z,!1,[e])
z.fo()
return z}}},
jK:{"^":"w:4;a",
$1:function(a){return this.a.$1(H.j(a,"$isac"))}},
A:{"^":"a;$ti",
ga_:function(a){return new W.dU(a,this.gk(a),-1,[H.bS(this,a,"A",0)])}},
dU:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fB(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
jD:{"^":"n+fV;"},
jE:{"^":"n+t;"},
jF:{"^":"jE+A;"},
jG:{"^":"n+t;"},
jH:{"^":"jG+A;"},
jL:{"^":"n+t;"},
jM:{"^":"jL+A;"},
jY:{"^":"n+t;"},
jZ:{"^":"jY+A;"},
k4:{"^":"n+af;"},
k5:{"^":"n+af;"},
k6:{"^":"n+t;"},
k7:{"^":"k6+A;"},
k8:{"^":"n+t;"},
k9:{"^":"k8+A;"},
kc:{"^":"n+t;"},
kd:{"^":"kc+A;"},
kj:{"^":"n+af;"},
f7:{"^":"a5+t;"},
f8:{"^":"f7+A;"},
kk:{"^":"n+t;"},
kl:{"^":"kk+A;"},
ko:{"^":"n+af;"},
kr:{"^":"n+t;"},
ks:{"^":"kr+A;"},
fa:{"^":"a5+t;"},
fb:{"^":"fa+A;"},
kx:{"^":"n+t;"},
ky:{"^":"kx+A;"},
kE:{"^":"n+t;"},
kF:{"^":"kE+A;"},
kG:{"^":"n+t;"},
kH:{"^":"kG+A;"},
kI:{"^":"n+t;"},
kJ:{"^":"kI+A;"},
kK:{"^":"n+t;"},
kL:{"^":"kK+A;"},
kM:{"^":"n+t;"},
kN:{"^":"kM+A;"}}],["","",,P,{"^":"",
l3:function(a){var z,y
z=J.K(a)
if(!!z.$isck){y=z.gda(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fd(a.data,a.height,a.width)},
l2:function(a){if(a instanceof P.fd)return{data:a.a,height:a.b,width:a.c}
return a},
aN:function(a){var z,y,x,w,v
if(a==null)return
z=P.hy(P.p,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.V(y[w])
z.a5(0,v,a[v])}return z},
l0:function(a,b){var z={}
a.P(0,new P.l1(z))
return z},
dQ:function(){var z=$.dP
if(z==null){z=J.cF(window.navigator.userAgent,"Opera",0)
$.dP=z}return z},
h1:function(){var z,y
z=$.dM
if(z!=null)return z
y=$.dN
if(y==null){y=J.cF(window.navigator.userAgent,"Firefox",0)
$.dN=y}if(y)z="-moz-"
else{y=$.dO
if(y==null){y=!P.dQ()&&J.cF(window.navigator.userAgent,"Trident/",0)
$.dO=y}if(y)z="-ms-"
else z=P.dQ()?"-o-":"-webkit-"}$.dM=z
return z},
fd:{"^":"a;da:a>,b,c",$isck:1},
l1:{"^":"w:12;a",
$2:function(a,b){this.a[a]=b}},
hc:{"^":"cn;a,b",
gbP:function(){var z,y,x
z=this.b
y=H.aC(z,"t",0)
x=W.a1
return new H.hG(new H.js(z,H.c(new P.hd(),{func:1,ret:P.a4,args:[y]}),[y]),H.c(new P.he(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bf(this.gbP().a)},
i:function(a,b){var z=this.gbP()
return z.b.$1(J.dx(z.a,b))},
ga_:function(a){var z=P.hC(this.gbP(),!1,W.a1)
return new J.ap(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a1]},
$ase:function(){return[W.a1]},
$asf:function(){return[W.a1]}},
hd:{"^":"w:25;",
$1:function(a){return!!J.K(H.j(a,"$isL")).$isa1}},
he:{"^":"w:26;",
$1:function(a){return H.b(H.j(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
c2:{"^":"a;q:a>,t:b>,$ti",
j:function(a){return"Point("+H.k(this.a)+", "+H.k(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.ba(b,"$isc2",[P.U],null)
if(!z)return!1
z=this.a
y=J.c8(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gV:function(a){var z,y
z=J.aD(this.a)
y=J.aD(this.b)
return P.f0(P.bN(P.bN(0,z),y))}},
ke:{"^":"a;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.D(z+this.c,H.z(this,0))},
gc4:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.D(z+this.d,H.z(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.ba(b,"$isae",[P.U],"$asae")
if(!z)return!1
z=this.a
y=J.c8(b)
x=y.gaS(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.z(this,0)
if(H.D(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.G()
z=H.D(x+this.d,w)===y.gc4(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.aD(z)
x=this.b
w=J.aD(x)
if(typeof z!=="number")return z.G()
v=H.z(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.D(x+this.d,v)
return P.f0(P.bN(P.bN(P.bN(P.bN(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d9:function(a,b){var z,y
H.u(b,"$isc2",[P.U],"$asc2")
z=b.a
y=this.a
if(typeof z!=="number")return z.dU()
if(typeof y!=="number")return H.r(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dU()
if(typeof y!=="number")return H.r(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ae:{"^":"ke;aS:a>,bb:b>,ao:c>,am:d>,$ti",n:{
ic:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ah()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.ah()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",lV:{"^":"T;0q:x=,0t:y=","%":"SVGFEBlendElement"},lW:{"^":"T;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},lX:{"^":"T;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},lY:{"^":"T;0q:x=,0t:y=","%":"SVGFECompositeElement"},lZ:{"^":"T;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},m_:{"^":"T;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},m0:{"^":"T;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},m1:{"^":"T;0q:x=,0t:y=","%":"SVGFEFloodElement"},m2:{"^":"T;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},m3:{"^":"T;0q:x=,0t:y=","%":"SVGFEImageElement"},m4:{"^":"T;0q:x=,0t:y=","%":"SVGFEMergeElement"},m5:{"^":"T;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},m6:{"^":"T;0q:x=,0t:y=","%":"SVGFEOffsetElement"},m7:{"^":"T;0q:x=,0t:y=","%":"SVGFEPointLightElement"},m8:{"^":"T;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},m9:{"^":"T;0q:x=,0t:y=","%":"SVGFESpotLightElement"},ma:{"^":"T;0q:x=,0t:y=","%":"SVGFETileElement"},mb:{"^":"T;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},me:{"^":"T;0q:x=,0t:y=","%":"SVGFilterElement"},mf:{"^":"bp;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hk:{"^":"bp;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bp:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mk:{"^":"bp;0q:x=,0t:y=","%":"SVGImageElement"},c_:{"^":"n;",$isc_:1,"%":"SVGLength"},mn:{"^":"k0;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.i(a,b)},
$ast:function(){return[P.c_]},
$ise:1,
$ase:function(){return[P.c_]},
$isf:1,
$asf:function(){return[P.c_]},
$asA:function(){return[P.c_]},
"%":"SVGLengthList"},mq:{"^":"T;0q:x=,0t:y=","%":"SVGMaskElement"},c1:{"^":"n;",$isc1:1,"%":"SVGNumber"},mC:{"^":"kb;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.i(a,b)},
$ast:function(){return[P.c1]},
$ise:1,
$ase:function(){return[P.c1]},
$isf:1,
$asf:function(){return[P.c1]},
$asA:function(){return[P.c1]},
"%":"SVGNumberList"},mE:{"^":"T;0q:x=,0t:y=","%":"SVGPatternElement"},mG:{"^":"n;0q:x=,0t:y=","%":"SVGPoint"},mH:{"^":"n;0k:length=","%":"SVGPointList"},mI:{"^":"n;0q:x=,0t:y=","%":"SVGRect"},mJ:{"^":"hk;0q:x=,0t:y=","%":"SVGRectElement"},mQ:{"^":"kq;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.i(a,b)},
$ast:function(){return[P.p]},
$ise:1,
$ase:function(){return[P.p]},
$isf:1,
$asf:function(){return[P.p]},
$asA:function(){return[P.p]},
"%":"SVGStringList"},T:{"^":"a1;",
gd7:function(a){return new P.hc(a,new W.jB(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mR:{"^":"bp;0q:x=,0t:y=","%":"SVGSVGElement"},iL:{"^":"bp;","%":"SVGTextPathElement;SVGTextContentElement"},mT:{"^":"iL;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c4:{"^":"n;",$isc4:1,"%":"SVGTransform"},mZ:{"^":"kA;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.i(a,b)},
$ast:function(){return[P.c4]},
$ise:1,
$ase:function(){return[P.c4]},
$isf:1,
$asf:function(){return[P.c4]},
$asA:function(){return[P.c4]},
"%":"SVGTransformList"},n1:{"^":"bp;0q:x=,0t:y=","%":"SVGUseElement"},k_:{"^":"n+t;"},k0:{"^":"k_+A;"},ka:{"^":"n+t;"},kb:{"^":"ka+A;"},kp:{"^":"n+t;"},kq:{"^":"kp+A;"},kz:{"^":"n+t;"},kA:{"^":"kz+A;"}}],["","",,P,{"^":"",lz:{"^":"n;0k:length=","%":"AudioBuffer"},lA:{"^":"jA;",
i:function(a,b){return P.aN(a.get(H.V(b)))},
P:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.p,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aN(y.value[1]))}},
gay:function(a){var z=H.d([],[P.p])
this.P(a,new P.fH(z))
return z},
gk:function(a){return a.size},
$asaf:function(){return[P.p,null]},
$isa6:1,
$asa6:function(){return[P.p,null]},
"%":"AudioParamMap"},fH:{"^":"w:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},lB:{"^":"a5;0k:length=","%":"AudioTrackList"},fJ:{"^":"a5;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mD:{"^":"fJ;0k:length=","%":"OfflineAudioContext"},jA:{"^":"n+af;"}}],["","",,P,{"^":"",d5:{"^":"n;",
dO:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$isck&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.l2(g))
return}if(!!y.$isdX&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fF("Incorrect number or type of arguments"))},
hB:function(a,b,c,d,e,f,g){return this.dO(a,b,c,d,e,f,g,null,null,null)},
$isd5:1,
"%":"WebGLRenderingContext"},iM:{"^":"n;",$isiM:1,"%":"WebGLTexture"},j8:{"^":"n;",$isj8:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mO:{"^":"kn;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.O(b,a,null,null,null))
return P.aN(a.item(b))},
F:function(a,b){return this.i(a,b)},
$ast:function(){return[[P.a6,,,]]},
$ise:1,
$ase:function(){return[[P.a6,,,]]},
$isf:1,
$asf:function(){return[[P.a6,,,]]},
$asA:function(){return[[P.a6,,,]]},
"%":"SQLResultSetRowList"},km:{"^":"n+t;"},kn:{"^":"km+A;"}}],["","",,O,{"^":"",ak:{"^":"a;0a,0b,0c,0d,$ti",
be:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cB:function(a,b,c){var z=H.aC(this,"ak",0)
H.c(b,{func:1,ret:P.a4,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.B,[P.e,z]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
aC:function(a,b){return this.cB(a,null,b)},
bh:function(a){var z
H.u(a,"$ise",[H.aC(this,"ak",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cI:function(a,b){var z
H.u(b,"$ise",[H.aC(this,"ak",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.z(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aC(this,"ak",0)
H.D(b,z)
z=[z]
if(this.bh(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cI(x,H.d([b],z))}},
c_:function(a,b){var z,y
H.u(b,"$ise",[H.aC(this,"ak",0)],"$ase")
if(this.bh(b)){z=this.a
y=z.length
C.a.c_(z,b)
this.cI(y,b)}},
$ise:1,
n:{
cd:function(a){var z=new O.ak([a])
z.be(a)
return z}}},d1:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
e9:function(a){var z=this.b
if(!(z==null))z.v(a)},
aD:function(){return this.e9(null)},
gN:function(a){var z=this.a
if(z.length>0)return C.a.gcn(z)
else return V.aO()},
bB:function(a){var z=this.a
if(a==null)C.a.h(z,V.aO())
else C.a.h(z,a)
this.aD()},
az:function(){var z=this.a
if(z.length>0){z.pop()
this.aD()}}}}],["","",,E,{"^":"",cG:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scD:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.c(this.gdL(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.c(this.gdL(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.x("shape",z,this.c,this,[F.ek])
w.b=!0
this.aj(w)}},
sdI:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gp()
y.toString
x=H.c(this.gdK(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}if(a!=null){y=a.gp()
y.toString
x=H.c(this.gdK(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.x("mover",z,a,this,[U.a8])
w.b=!0
this.aj(w)}},
a4:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.x("matrix",x,y,this,[V.a7])
w.b=!0
this.aj(w)}for(z=this.y.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a4(0,b)},
a2:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gN(z))
else C.a.h(z.a,y.l(0,z.gN(z)))
z.aD()
a.cu(this.f)
z=a.dy
x=(z&&C.a).gcn(z)
if(x!=null&&this.d!=null)x.b6(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a2(a)
a.ct()
a.dx.az()},
gp:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aj:function(a){var z=this.z
if(!(z==null))z.v(a)},
a9:function(){return this.aj(null)},
hk:[function(a){H.j(a,"$isl")
this.e=null
this.aj(a)},function(){return this.hk(null)},"it","$1","$0","gdL",0,2,0],
hj:[function(a){this.aj(H.j(a,"$isl"))},function(){return this.hj(null)},"is","$1","$0","gdK",0,2,0],
hh:[function(a){this.aj(H.j(a,"$isl"))},function(){return this.hh(null)},"iq","$1","$0","gdJ",0,2,0],
ip:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$ise",[E.aF],"$ase")
for(z=b.length,y=this.gdJ(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.aG()
t.a=H.d([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.a9()},"$2","ghg",8,0,7],
ir:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$ise",[E.aF],"$ase")
for(z=b.length,y=this.gdJ(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.aG()
t.a=H.d([],w)
t.c=0
u.sa7(t)}t=u.ga7()
t.toString
H.c(y,x)
C.a.R(t.a,y)}}this.a9()},"$2","ghi",8,0,7],
$isay:1,
n:{
ch:function(a,b,c,d,e,f){var z,y
z=new E.aF()
z.a=d
z.b=!0
y=O.cd(E.aF)
z.y=y
y.aC(z.ghg(),z.ghi())
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
z.scD(0,e)
z.sdI(c)
return z}}},ih:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e5:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ar(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d1()
y=[V.a7]
z.a=H.d([],y)
x=z.gp()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.c(new E.ij(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d1()
z.a=H.d([],y)
v=z.gp()
v.toString
x=H.c(new E.ik(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d1()
z.a=H.d([],y)
y=z.gp()
y.toString
w=H.c(new E.il(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.aR])
this.dy=z
C.a.h(z,null)
this.fr=new H.b_(0,0,[P.p,A.bz])},
ght:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gN(z)
y=this.db
y=z.l(0,y.gN(y))
this.z=y
z=y}return z},
gdM:function(){var z,y
z=this.ch
if(z==null){z=this.ght()
y=this.dx
y=z.l(0,y.gN(y))
this.ch=y
z=y}return z},
gdR:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gN(z)
y=this.dx
y=z.l(0,y.gN(y))
this.cx=y
z=y}return z},
cu:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcn(z):a;(z&&C.a).h(z,y)},
ct:function(){var z=this.dy
if(z.length>1)z.pop()},
aX:function(a){var z=a.b
if(z.length===0)throw H.h(P.o("May not cache a shader with no name."))
if(this.fr.d8(0,z))throw H.h(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a5(0,z,a)},
n:{
ii:function(a,b){var z=new E.ih(a,b)
z.e5(a,b)
return z}}},ij:{"^":"w:10;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.ch=null}},ik:{"^":"w:10;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},il:{"^":"w:10;a",
$1:function(a){var z
H.j(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
eb:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.hw()},function(){return this.eb(null)},"ea","$1","$0","gcJ",0,2,0],
gh4:function(){var z,y,x
z=Date.now()
y=C.f.a1(P.dS(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ar(z,!1)
return x/y},
d_:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.r(z)
x=C.h.ck(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.h.ck(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hw:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.iX(this),{func:1,ret:-1,args:[P.U]})
C.u.es(z)
C.u.f7(z,W.fj(y,P.U))}},
hv:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d_()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ar(w,!1)
x.y=P.dS(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aD()
w=x.db
C.a.sk(w.a,0)
w.aD()
w=x.dx
C.a.sk(w.a,0)
w.aD()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aY(v)
y=H.bd(v)
P.dw("Error: "+H.k(z))
P.dw("Stack: "+H.k(y))
throw H.h(z)}},
n:{
iW:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscJ)return E.eu(a,!0,!0,!0,!1)
y=W.cK(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd7(a).h(0,y)
w=E.eu(y,!0,!0,!0,!1)
w.a=a
return w},
eu:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iV()
y=P.hz(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.p,null)
x=C.k.bE(a,"webgl",y)
x=H.j(x==null?C.k.bE(a,"experimental-webgl",y):x,"$isd5")
if(x==null)H.q(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ii(x,a)
w=new T.iQ(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.je(a)
v=new X.hu()
v.c=new X.aw(!1,!1,!1)
v.d=P.hA(null,null,null,P.B)
w.b=v
v=new X.hU(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hD(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j0(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eo,P.a]])
w.z=v
u=document
t=W.ax
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.c(w.geK(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.c(w.geP(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.c(w.geH(),q),!1,r))
v=w.z
p=W.bs
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.c(w.geR(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.c(w.geQ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.c(w.geU(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.c(w.geW(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.c(w.geV(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.X(a,H.V(W.h7(a)),H.c(w.geX(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.c(w.geL(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.c(w.geM(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.c(w.geY(),q),!1,r))
r=w.z
q=W.b4
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.c(w.gf5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.c(w.gf3(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.c(w.gf4(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ar(Date.now(),!1)
z.ch=0
z.d_()
return z}}},iX:{"^":"w:30;a",
$1:function(a){var z
H.ll(a)
z=this.a
if(z.z){z.z=!1
z.hv()}}}}],["","",,Z,{"^":"",eX:{"^":"a;a,b",n:{
df:function(a,b,c){var z
H.u(c,"$isf",[P.B],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b7(c)),35044)
a.bindBuffer(b,null)
return new Z.eX(b,z)}}},dD:{"^":"cG;a,b,c,d,e",
H:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aY(y)
x=P.o('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.k(z))
throw H.h(x)}},
j:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},c5:{"^":"a;a",$islC:1},bh:{"^":"a;a,0b,c,d",
ab:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
H:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].H(a)},
a3:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a2:function(a){var z,y,x,w,v
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
z=[P.p]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].j(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$ismS:1},cl:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b1(this.c)+"'")+"]"}},aS:{"^":"a;a",
gcE:function(a){var z,y
z=this.a
y=(z&$.$get$a_().a)!==0?3:0
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$at().a)!==0)y+=2
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$b5().a)!==0)++y
return(z&$.$get$aI().a)!==0?y+4:y},
fS:function(a){var z,y,x
z=$.$get$a_()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eW()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aS))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.d([],[P.p])
y=this.a
if((y&$.$get$a_().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$at().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aL().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
n:{
an:function(a){return new Z.aS(a)}}}}],["","",,D,{"^":"",dG:{"^":"a;"},aG:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.P(y,new D.hb(z))
return x!==0},
dd:function(){return this.v(null)},
hx:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
aA:function(a){return this.hx(a,!0,!1)},
n:{
C:function(){var z=new D.aG()
z.a=H.d([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},hb:{"^":"w:31;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bX:{"^":"l;c,d,a,0b,$ti"},bY:{"^":"l;c,d,a,0b,$ti"},x:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dE:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
n:{"^":"lD<"}},e1:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},e2:{"^":"l;c,a,0b"},hu:{"^":"a;0a,0b,0c,0d",
hq:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.e2(a,this)
y.b=!0
return z.v(y)},
hm:function(a){var z,y
this.c=a.b
this.d.R(0,a.a)
z=this.b
if(z==null)return!1
y=new X.e2(a,this)
y.b=!0
return z.v(y)}},e6:{"^":"co;x,y,c,d,e,a,0b"},hD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ar(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.Q(y.a+x*w,y.b+v*u)
u=this.a.gaM()
s=new X.bu(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cs:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.at(a,b))
return!0},
b4:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.at(a,b))
return!0},
b3:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.at(a,b))
return!0},
hr:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaM()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.d2(new V.R(v*u,t*s),y,x,new P.ar(w,!1),this)
w.b=!0
z.v(w)
return!0},
eT:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ar(Date.now(),!1)
y=this.f
x=new X.e6(c,a,this.a.gaM(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.Q(0,0)}},aw:{"^":"a;a,b,c",
u:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bu:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},hU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bN:function(a,b,c){var z,y,x
z=new P.ar(Date.now(),!1)
y=this.a.gaM()
x=new X.bu(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cs:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bN(a,b,!0))
return!0},
b4:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dY()
if(typeof z!=="number")return z.dS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bN(a,b,!0))
return!0},
b3:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bN(a,b,!1))
return!0},
hs:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaM()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.d2(new V.R(w*v,u*t),y,b,new P.ar(x,!1),this)
x.b=!0
z.v(x)
return!0},
gdc:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbD:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gdH:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},d2:{"^":"co;x,c,d,e,a,0b"},co:{"^":"l;"},ey:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},j0:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.u(a,"$isf",[V.Q],"$asf")
z=new P.ar(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gaM()
w=new X.ey(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hp:function(a){var z
H.u(a,"$isf",[V.Q],"$asf")
z=this.b
if(z==null)return!1
z.v(this.at(a,!0))
return!0},
hn:function(a){var z
H.u(a,"$isf",[V.Q],"$asf")
z=this.c
if(z==null)return!1
z.v(this.at(a,!0))
return!0},
ho:function(a){var z
H.u(a,"$isf",[V.Q],"$asf")
z=this.d
if(z==null)return!1
z.v(this.at(a,!1))
return!0}},je:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaM:function(){var z=this.a
return V.aQ(0,0,(z&&C.k).gbn(z).c,C.k.gbn(z).d)},
cT:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e1(z,new X.aw(y,a.altKey,a.shiftKey))},
aK:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
bZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.Q(y-w,x-v)},
aW:function(a){return new V.R(a.movementX,a.movementY)},
bV:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.h.a0(u.pageX)
C.h.a0(u.pageY)
s=z.left
C.h.a0(u.pageX)
C.a.h(y,new V.Q(t-s,C.h.a0(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dE(z,new X.aw(y,a.altKey,a.shiftKey))},
hZ:[function(a){this.f=!0},"$1","geP",4,0,4],
hR:[function(a){this.f=!1},"$1","geH",4,0,4],
hU:[function(a){if(this.f)a.preventDefault()},"$1","geK",4,0,4],
i0:[function(a){var z
H.j(a,"$isbs")
if(!this.f)return
z=this.cT(a)
if(this.b.hq(z))a.preventDefault()},"$1","geR",4,0,14],
i_:[function(a){var z
H.j(a,"$isbs")
if(!this.f)return
z=this.cT(a)
if(this.b.hm(z))a.preventDefault()},"$1","geQ",4,0,14],
i2:[function(a){var z,y,x,w
H.j(a,"$isax")
z=this.a
z.focus()
this.f=!0
this.aK(a)
if(this.x){y=this.ar(a)
x=this.aW(a)
if(this.d.cs(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cs(y,w))a.preventDefault()},"$1","geU",4,0,5],
i4:[function(a){var z,y,x
H.j(a,"$isax")
this.aK(a)
z=this.ar(a)
if(this.x){y=this.aW(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","geW",4,0,5],
hW:[function(a){var z,y,x,w
H.j(a,"$isax")
z=this.a
if(!(z&&C.k).gbn(z).d9(0,new P.c2(a.clientX,a.clientY,[P.U]))){this.aK(a)
y=this.ar(a)
if(this.x){x=this.aW(a)
if(this.d.b4(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b4(y,w))a.preventDefault()}},"$1","geM",4,0,5],
i3:[function(a){var z,y,x
H.j(a,"$isax")
this.aK(a)
z=this.ar(a)
if(this.x){y=this.aW(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","geV",4,0,5],
hV:[function(a){var z,y,x,w
H.j(a,"$isax")
z=this.a
if(!(z&&C.k).gbn(z).d9(0,new P.c2(a.clientX,a.clientY,[P.U]))){this.aK(a)
y=this.ar(a)
if(this.x){x=this.aW(a)
if(this.d.b3(y,x))a.preventDefault()
return}if(this.r)return
w=this.au(a)
if(this.c.b3(y,w))a.preventDefault()}},"$1","geL",4,0,5],
i5:[function(a){var z,y
H.j(a,"$isbL")
this.aK(a)
z=new V.R((a&&C.t).gh_(a),C.t.gh0(a)).A(0,180)
if(this.x){if(this.d.hr(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.hs(z,y))a.preventDefault()},"$1","geX",4,0,32],
i6:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.eT(w,v,x)}},"$1","geY",4,0,4],
ig:[function(a){var z
H.j(a,"$isb4")
this.a.focus()
this.f=!0
this.bZ(a)
z=this.bV(a)
if(this.e.hp(z))a.preventDefault()},"$1","gf5",4,0,11],
ic:[function(a){var z
H.j(a,"$isb4")
this.bZ(a)
z=this.bV(a)
if(this.e.hn(z))a.preventDefault()},"$1","gf3",4,0,11],
ie:[function(a){var z
H.j(a,"$isb4")
this.bZ(a)
z=this.bV(a)
if(this.e.ho(z))a.preventDefault()},"$1","gf4",4,0,11]}}],["","",,D,{"^":"",cg:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aE:[function(a){var z
H.j(a,"$isl")
z=this.d
if(!(z==null))z.v(a)},function(){return this.aE(null)},"hH","$1","$0","gec",0,2,0],
$isW:1,
$isay:1,
n:{
dR:function(a,b){var z,y,x,w
z=new D.cg()
z.c=new V.S(1,1,1)
z.a=new V.H(0,0,1)
y=z.b
z.b=b
x=b.gp()
x.toString
w=H.c(z.gec(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.x("mover",y,z.b,z,[U.a8])
x.b=!0
z.aE(x)
if(!z.c.u(0,a)){y=z.c
z.c=a
x=new D.x("color",y,a,z,[V.S])
x.b=!0
z.aE(x)}return z}}},W:{"^":"a;",$isay:1},hv:{"^":"ak;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aE:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eS:[function(a){var z
H.j(a,"$isl")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eS(null)},"i1","$1","$0","gcX",0,2,0],
i7:[function(a){var z,y,x
H.u(a,"$ise",[D.W],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.eo(x))return!1}return!0},"$1","geZ",4,0,34],
hO:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcX(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.j(b[u],"$isW")
if(t instanceof D.cg)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aG()
s.a=H.d([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.h(s.a,x)}z=new D.bX(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","geE",8,0,16],
i9:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcX(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.j(b[u],"$isW")
if(t instanceof D.cg)C.a.R(this.e,t)
s=t.d
if(s==null){s=new D.aG()
s.a=H.d([],v)
s.c=0
t.d=s}H.c(x,w)
C.a.R(s.a,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gf0",8,0,16],
eo:function(a){var z=C.a.aw(this.e,a)
return z},
$ase:function(){return[D.W]},
$asak:function(){return[D.W]}},i2:{"^":"a;",$isW:1,$isay:1},iD:{"^":"a;",$isW:1,$isay:1},iS:{"^":"a;",$isW:1,$isay:1},iT:{"^":"a;",$isW:1,$isay:1},iU:{"^":"a;",$isW:1,$isay:1}}],["","",,V,{"^":"",
lF:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hP",8,0,33],
lu:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.dX(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.h.dQ($.m.$2(a,0)?0:a,b),c+b+1)},
bc:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isf",[P.v],"$asf")
z=H.d([],[P.p])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.a5(z,u,C.i.ag(z[u],x))}return z},
bU:function(a,b){return C.h.hD(Math.pow(b,C.z.ck(Math.log(H.l_(a))/Math.log(b))))},
S:{"^":"a;a,b,c",
u:function(a,b){var z
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
aq:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
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
d0:{"^":"a;a,b,c,d,e,f,r,x,y",
X:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d0))return!1
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
z=[P.v]
y=V.bc(H.d([this.a,this.d,this.r],z),3,0)
x=V.bc(H.d([this.b,this.e,this.x],z),3,0)
w=V.bc(H.d([this.c,this.f,this.y],z),3,0)
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
a7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
X:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
cm:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aO()
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
cw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ag(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
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
j:function(a){return this.I()},
dC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.bc(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bc(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bc(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bc(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
B:function(a){return this.dC(a,3,0)},
I:function(){return this.dC("",3,0)},
n:{
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aO:function(){return V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
hR:function(a,b,c){return V.av(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hQ:function(a,b,c,d){return V.av(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eb:function(a,b,c,d){return V.ea(new V.ag(0,0,0),new V.H(0,1,0),new V.H(a,b,c))},
ea:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.D(c)))
y=b.b_(z)
x=y.A(0,Math.sqrt(y.D(y)))
w=z.b_(x)
v=new V.H(a.a,a.b,a.c)
return V.av(x.a,w.a,z.a,x.L(0).D(v),x.b,w.b,z.b,w.L(0).D(v),x.c,w.c,z.c,z.L(0).D(v),0,0,0,1)}}},
Q:{"^":"a;q:a>,t:b>",
K:function(a,b){return new V.Q(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
ag:{"^":"a;q:a>,t:b>,c",
K:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
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
return!0},
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
bx:{"^":"a;q:a>,t:b>,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bx))return!1
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
cr:{"^":"a;q:a>,t:b>,c,d",
gad:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cr))return!1
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
n:{
aQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cr(a,b,c,d)}}},
R:{"^":"a;a,b",
h9:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,17],
D:function(a){var z,y,x,w
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
A:function(a,b){var z,y
if($.m.$2(b,0))return new V.R(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.R(z/b,y/b)},
u:function(a,b){var z
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
h9:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,17],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b_:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.H(-this.a,-this.b,-this.c)},
A:function(a,b){if($.m.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
dD:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
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
j:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fR:{"^":"dG;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.lu(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.v(a)},
scz:function(a,b){},
scp:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.x("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.O(z)}},
scr:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.x("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.O(z)}},
sac:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.x("location",y,b,this,[P.v])
z.b=!0
this.O(z)}},
scq:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.x("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.O(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.x("velocity",x,a,this,[P.v])
z.b=!0
this.O(z)}},
sca:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.x("dampening",y,a,this,[P.v])
z.b=!0
this.O(z)}},
a4:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sac(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
n:{
cM:function(){var z=new U.fR()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cN:{"^":"a8;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
sN:function(a,b){var z,y,x
if(!J.N(this.a,b)){z=this.a
this.a=b
y=new D.x("matrix",z,b,this,[V.a7])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
aT:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return J.N(this.a,b.a)},
j:function(a){return"Constant: "+this.a.B("          ")},
n:{
cO:function(a){var z=new U.cN()
z.sN(0,a)
return z}}},dW:{"^":"ak;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
O:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.O(null)},"ai","$1","$0","gaI",0,2,0],
hN:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.O(z)},"$2","geD",8,0,18],
i8:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.R(t.a,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gf_",8,0,18],
aT:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ah()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ap(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aT(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aO():x
z=this.e
if(!(z==null))z.aA(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dW))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.N(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ase:function(){return[U.a8]},
$asak:function(){return[U.a8]},
$isa8:1},a8:{"^":"dG;"},jf:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
O:[function(a){var z
H.j(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.O(null)},"ai","$1","$0","gaI",0,2,0],
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdc()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbQ(),y)
C.a.h(z.a,x)
x=this.a.c.gdH()
x.toString
z=H.c(this.gbR(),y)
C.a.h(x.a,z)
z=this.a.c.gbD()
z.toString
y=H.c(this.gbS(),y)
C.a.h(z.a,y)
return!0},
ez:[function(a){H.j(a,"$isl")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbQ",4,0,1],
eA:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isbu")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.R(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.R(y.a,y.b).l(0,2).A(0,z.gad())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.r(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.R(x.a,x.b).l(0,2).A(0,z.gad())
x=this.b
v=w.a
if(typeof v!=="number")return v.L()
u=this.e
if(typeof u!=="number")return H.r(u)
t=this.z
if(typeof t!=="number")return H.r(t)
x.sac(0,-v*u+t)
this.b.sS(0)
y=y.K(0,a.z)
this.Q=new V.R(y.a,y.b).l(0,2).A(0,z.gad())}this.ai()},"$1","gbR",4,0,1],
eB:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.r(x)
z.sS(y*10*x)
this.ai()}},"$1","gbS",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ah()
if(z<y){this.ch=y
x=b.y
this.b.a4(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.av(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa8:1},jg:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
O:[function(a){var z
H.j(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.O(null)},"ai","$1","$0","gaI",0,2,0],
aY:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdc()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.c(this.gbQ(),y)
C.a.h(z.a,x)
x=this.a.c.gdH()
x.toString
z=H.c(this.gbR(),y)
C.a.h(x.a,z)
z=this.a.c.gbD()
z.toString
x=H.c(this.gbS(),y)
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
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.R(z,y)},
ez:[function(a){a=H.b(H.j(a,"$isl"),"$isbu")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbQ",4,0,1],
eA:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isbu")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.R(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.ak(new V.R(y.a,y.b).l(0,2).A(0,z.gad()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.ak(new V.R(x.a,x.b).l(0,2).A(0,z.gad()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sac(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.ak(new V.R(y.a,y.b).l(0,2).A(0,z.gad()))}this.ai()},"$1","gbR",4,0,1],
eB:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sS(-y*10*z)
this.ai()}},"$1","gbS",4,0,1],
hK:[function(a){if(H.b(H.j(a,"$isl"),"$ise6").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gew",4,0,1],
hL:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isbu")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.ak(new V.R(x.a,x.b).l(0,2).A(0,z.gad()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sac(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.ak(new V.R(y.a,y.b).l(0,2).A(0,z.gad()))
this.ai()},"$1","gex",4,0,1],
ik:[function(a){H.j(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfn",4,0,1],
ij:[function(a){var z,y,x,w,v,u,t
a=H.b(H.j(a,"$isl"),"$isey")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.R(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.ak(new V.R(y.a,y.b).l(0,2).A(0,z.gad()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.ak(new V.R(x.a,x.b).l(0,2).A(0,z.gad()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sac(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.K(0,a.z)
this.dx=this.ak(new V.R(y.a,y.b).l(0,2).A(0,z.gad()))}this.ai()},"$1","gfm",4,0,1],
ii:[function(a){var z,y,x
H.j(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sS(-y*10*z)
this.ai()}},"$1","gfl",4,0,1],
aT:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ah()
if(z<y){this.dy=y
x=b.y
this.c.a4(0,x)
this.b.a4(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.av(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.av(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa8:1},jh:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
O:function(a){var z=this.r
if(!(z==null))z.v(a)},
aY:function(a){var z,y,x
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
H.b(a,"$isd2")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.x("zoom",z,w,this,[P.v])
z.b=!0
this.O(z)}},"$1","geC",4,0,1],
aT:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hQ(x,x,x,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",fS:{"^":"ak;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
Y:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.Y(null)},"cK","$1","$0","gU",0,2,0],
ia:[function(a,b){var z,y,x,w,v,u,t
z=M.az
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gf1",8,0,19],
ib:[function(a,b){var z,y,x,w,v,u,t
z=M.az
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.c(x,w)
C.a.R(t.a,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","gf2",8,0,19],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$ase:function(){return[M.az]},
$asak:function(){return[M.az]},
$isaz:1},fU:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
Y:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.Y(null)},"cK","$1","$0","gU",0,2,0],
saL:function(a){var z,y,x
if(a==null)a=new X.hl()
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("camera",x,this.a,this,[X.cc])
z.b=!0
this.Y(z)}},
saB:function(a,b){var z,y,x
if(b==null)b=X.cR(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("target",x,this.b,this,[X.cs])
z.b=!0
this.Y(z)}},
san:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.x("technique",x,this.c,this,[O.aR])
z.b=!0
this.Y(z)}},
a2:function(a){var z
a.cu(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a4(0,a)
this.d.a4(0,a)
this.d.a2(a)
this.a.a3(a)
this.b.a3(a)
a.ct()},
$isaz:1,
n:{
cP:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fU()
z.saL(a)
z.saB(0,b)
z.san(c)
y=E.ch(null,!0,null,"",null,null)
x=F.d7()
w=x.a
v=new V.H(-1,-1,1)
v=v.A(0,Math.sqrt(v.D(v)))
u=w.bl(new V.bx(1,2,4,6),new V.aq(1,0,0,1),new V.ag(-1,-1,0),new V.Q(0,1),v,null)
w=x.a
v=new V.H(1,-1,1)
v=v.A(0,Math.sqrt(v.D(v)))
t=w.bl(new V.bx(0,3,4,6),new V.aq(0,0,1,1),new V.ag(1,-1,0),new V.Q(1,1),v,null)
w=x.a
v=new V.H(1,1,1)
v=v.A(0,Math.sqrt(v.D(v)))
s=w.bl(new V.bx(0,2,5,6),new V.aq(0,1,0,1),new V.ag(1,1,0),new V.Q(1,0),v,null)
w=x.a
v=new V.H(-1,1,1)
v=v.A(0,Math.sqrt(v.D(v)))
r=w.bl(new V.bx(0,2,4,7),new V.aq(1,1,0,1),new V.ag(-1,1,0),new V.Q(0,0),v,null)
x.d.fO(H.d([u,t,s,r],[F.aH]))
x.av()
y.scD(0,x)
z.d=y
z.e=null
return z}}},h9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Y:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.Y(null)},"cK","$1","$0","gU",0,2,0],
hS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.aG()
s.a=H.d([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","geI",8,0,7],
hT:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.aG()
s.a=H.d([],v)
s.c=0
t.sa7(s)}s=t.ga7()
s.toString
H.c(x,w)
C.a.R(s.a,x)}}z=new D.bY(a,b,this,[z])
z.b=!0
this.Y(z)},"$2","geJ",8,0,7],
saL:function(a){var z,y,x
if(a==null)a=X.ef(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("camera",x,this.a,this,[X.cc])
z.b=!0
this.Y(z)}},
saB:function(a,b){var z,y,x
if(b==null)b=X.cR(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.x("target",x,this.b,this,[X.cs])
z.b=!0
this.Y(z)}},
san:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.c(this.gU(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.x("technique",x,this.c,this,[O.aR])
z.b=!0
this.Y(z)}},
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a2:function(a){var z
a.cu(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a4(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a4(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a2(a)
this.a.toString
a.cy.az()
a.db.az()
this.b.a3(a)
a.ct()},
$isaz:1,
n:{
dT:function(a,b,c,d){var z,y
z=new M.h9()
y=O.cd(E.aF)
z.d=y
y.aC(z.geI(),z.geJ())
z.e=null
z.f=null
z.r=null
z.x=null
z.saL(a)
z.saB(0,c)
z.san(d)
return z}}},az:{"^":"a;"}}],["","",,A,{"^":"",dz:{"^":"a;a,b,c"},fG:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
h1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
b0:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dL:{"^":"bz;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dV:{"^":"bz;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r",
a8:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dZ(c)
b.a.uniform1i(b.d,0)}}},e9:{"^":"bz;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aQ,0ax,0aR,0bo,0de,0df,0bp,0bq,0dg,0dh,0br,0bs,0di,0dj,0bt,0dk,0dl,0bu,0dm,0dn,0bv,0bw,0bx,0dq,0dr,0by,0bz,0ds,0dt,0bA,0du,0cd,0dv,0ce,0dw,0cf,0dz,0cg,0dA,0ci,0dB,0cj,a,b,0c,0d,0e,0f,0r",
e4:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.c3("")
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
z=new P.c3("")
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
p=H.d([],[P.p])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
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
o=H.d([],[P.p])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.b1(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.b(this.r.m(0,"invViewMat"),"$isaa")
if(y)this.db=H.b(this.r.m(0,"objMat"),"$isaa")
if(w)this.dx=H.b(this.r.m(0,"viewObjMat"),"$isaa")
this.fr=H.b(this.r.m(0,"projViewObjMat"),"$isaa")
if(a1.x2)this.go=H.b(this.r.m(0,"txt2DMat"),"$iscv")
if(a1.y1)this.id=H.b(this.r.m(0,"txtCubeMat"),"$isaa")
if(a1.y2)this.k1=H.b(this.r.m(0,"colorMat"),"$isaa")
this.k3=H.d([],[A.aa])
y=a1.aQ
if(y>0){this.k2=H.j(this.r.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.q(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isaa"))}}y=a1.a
if(y!==C.b){this.k4=H.b(this.r.m(0,"emissionClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.b(this.r.m(0,"emissionTxt"),"$isa3")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isF")
break
case C.c:this.r2=H.b(this.r.m(0,"emissionTxt"),"$isah")
this.rx=H.b(this.r.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.ry=H.b(this.r.m(0,"ambientClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.b(this.r.m(0,"ambientTxt"),"$isa3")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isF")
break
case C.c:this.x2=H.b(this.r.m(0,"ambientTxt"),"$isah")
this.y1=H.b(this.r.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.y2=H.b(this.r.m(0,"diffuseClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.aQ=H.b(this.r.m(0,"diffuseTxt"),"$isa3")
this.aR=H.b(this.r.m(0,"nullDiffuseTxt"),"$isF")
break
case C.c:this.ax=H.b(this.r.m(0,"diffuseTxt"),"$isah")
this.aR=H.b(this.r.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bo=H.b(this.r.m(0,"invDiffuseClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.de=H.b(this.r.m(0,"invDiffuseTxt"),"$isa3")
this.bp=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.c:this.df=H.b(this.r.m(0,"invDiffuseTxt"),"$isah")
this.bp=H.b(this.r.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bs=H.b(this.r.m(0,"shininess"),"$isJ")
this.bq=H.b(this.r.m(0,"specularClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.dg=H.b(this.r.m(0,"specularTxt"),"$isa3")
this.br=H.b(this.r.m(0,"nullSpecularTxt"),"$isF")
break
case C.c:this.dh=H.b(this.r.m(0,"specularTxt"),"$isah")
this.br=H.b(this.r.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.di=H.b(this.r.m(0,"bumpTxt"),"$isa3")
this.bt=H.b(this.r.m(0,"nullBumpTxt"),"$isF")
break
case C.c:this.dj=H.b(this.r.m(0,"bumpTxt"),"$isah")
this.bt=H.b(this.r.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dk=H.b(this.r.m(0,"envSampler"),"$isah")
this.dl=H.b(this.r.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bu=H.b(this.r.m(0,"reflectClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.dm=H.b(this.r.m(0,"reflectTxt"),"$isa3")
this.bv=H.b(this.r.m(0,"nullReflectTxt"),"$isF")
break
case C.c:this.dn=H.b(this.r.m(0,"reflectTxt"),"$isah")
this.bv=H.b(this.r.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bw=H.b(this.r.m(0,"refraction"),"$isJ")
this.bx=H.b(this.r.m(0,"refractClr"),"$isG")
switch(y){case C.b:break
case C.e:break
case C.d:this.dq=H.b(this.r.m(0,"refractTxt"),"$isa3")
this.by=H.b(this.r.m(0,"nullRefractTxt"),"$isF")
break
case C.c:this.dr=H.b(this.r.m(0,"refractTxt"),"$isah")
this.by=H.b(this.r.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bz=H.b(this.r.m(0,"alpha"),"$isJ")
switch(y){case C.b:break
case C.e:break
case C.d:this.ds=H.b(this.r.m(0,"alphaTxt"),"$isa3")
this.bA=H.b(this.r.m(0,"nullAlphaTxt"),"$isF")
break
case C.c:this.dt=H.b(this.r.m(0,"alphaTxt"),"$isah")
this.bA=H.b(this.r.m(0,"nullAlphaTxt"),"$isF")
break}}this.cd=H.d([],[A.eM])
this.ce=H.d([],[A.eN])
this.cf=H.d([],[A.eO])
this.cg=H.d([],[A.eP])
this.ci=H.d([],[A.eQ])
this.cj=H.d([],[A.eR])
if(a1.k2){y=a1.z
if(y>0){this.du=H.j(this.r.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.cd;(x&&C.a).h(x,new A.eM(m,l,k))}}y=a1.Q
if(y>0){this.dv=H.j(this.r.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isJ")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isJ")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isJ")
x=this.ce;(x&&C.a).h(x,new A.eN(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dw=H.j(this.r.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isJ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isJ")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isJ")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isJ")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isJ")
x=this.cf;(x&&C.a).h(x,new A.eO(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dz=H.j(this.r.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isG")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isF")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa3")
x=this.cg;(x&&C.a).h(x,new A.eP(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dA=H.j(this.r.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$iscv")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isF")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isJ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isJ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isJ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isah")
x=this.ci;(x&&C.a).h(x,new A.eQ(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dB=H.j(this.r.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isG")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isG")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isG")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isG")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isG")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isF")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isG")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isJ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isJ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isJ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isJ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isJ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa3")
x=this.cj;(x&&C.a).h(x,new A.eR(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cC(c)
b.a.uniform1i(b.d,0)}},
n:{
hJ:function(a,b){var z,y
z=a.ax
y=new A.e9(b,z)
y.aU(b,z)
y.e4(a,b)
return y}}},hM:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aQ,ax,aR",
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
as:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cF(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fv:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
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
this.as(a,z,"ambient")
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
this.as(a,z,"diffuse")
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
this.as(a,z,"invDiffuse")
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
this.as(a,z,"reflect")
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
j:function(a){return this.ax}},eM:{"^":"a;a,b,c"},eP:{"^":"a;a,b,c,d,e,f,r,x"},eN:{"^":"a;a,b,c,d,e,f,r"},eQ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eO:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eR:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},bz:{"^":"cG;",
aU:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
b1:function(a,b,c){var z,y,x
this.c=this.cU(b,35633)
this.d=this.cU(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fn(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.q(P.o("Failed to link shader: "+H.k(x)))}this.fg()
this.fi()},
H:function(a){a.a.useProgram(this.e)
this.f.h1()},
cU:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fn(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.o("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fg:function(){var z,y,x,w,v,u
z=H.d([],[A.dz])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dz(y,v.name,u))}this.f=new A.fG(z)},
fi:function(){var z,y,x,w,v,u
z=H.d([],[A.a9])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fZ(v.type,v.size,v.name,u))}this.r=new A.j7(z)},
aG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.dd(z,y,b,a,c)},
ep:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a3(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eq:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ah(z,y,b,c)
else return A.dd(z,y,b,a,c)},
bk:function(a,b){return new P.eZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
fZ:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.J(this.a,this.e,c,d)
case 35664:return new A.bI(this.a,this.e,c,d)
case 35665:return new A.G(this.a,this.e,c,d)
case 35666:return new A.eL(this.a,this.e,c,d)
case 35667:return new A.j4(this.a,this.e,c,d)
case 35668:return new A.j5(this.a,this.e,c,d)
case 35669:return new A.j6(this.a,this.e,c,d)
case 35674:return new A.j9(this.a,this.e,c,d)
case 35675:return new A.cv(this.a,this.e,c,d)
case 35676:return new A.aa(this.a,this.e,c,d)
case 35678:return this.ep(b,c,d)
case 35680:return this.eq(b,c,d)
case 35670:throw H.h(this.bk("BOOL",c))
case 35671:throw H.h(this.bk("BOOL_VEC2",c))
case 35672:throw H.h(this.bk("BOOL_VEC3",c))
case 35673:throw H.h(this.bk("BOOL_VEC4",c))
default:throw H.h(P.o("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},ce:{"^":"a;a,b",
j:function(a){return this.b}},el:{"^":"bz;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},es:{"^":"bz;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
e8:function(a,b){var z,y,x,w,v
this.b1(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iP(a))
this.x=this.f.i(0,"posAttr")
this.y=H.b(this.r.m(0,"txtCount"),"$isF")
this.z=H.b(this.r.m(0,"backClr"),"$iseL")
this.Q=H.d([],[A.a3])
this.ch=H.d([],[A.aa])
z=[A.bI]
this.cx=H.d([],z)
this.cy=H.d([],z)
this.db=H.d([],z)
this.dx=H.d([],z)
this.dy=H.d([],[A.F])
for(y=0;y<a;++y){z=this.Q
x=this.r
w="txt"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa3"))
z=this.ch
x=this.r
w="clrMat"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isaa"))
z=this.cx
x=this.r
w="srcLoc"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbI"))
z=this.cy
x=this.r
w="srcSize"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbI"))
z=this.db
x=this.r
w="destLoc"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbI"))
z=this.dx
x=this.r
w="destSize"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbI"))
z=this.dy
x=this.r
w="flip"+y
v=x.i(0,w)
if(v==null)H.q(P.o("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isF"))}},
n:{
iP:function(a){var z,y
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
iO:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.es(b,z)
y.aU(b,z)
y.e8(a,b)
return y}}},a9:{"^":"a;"},j7:{"^":"a;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.i(0,b)
if(z==null)throw H.h(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.I()},
h3:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].j(0)+a
return x},
I:function(){return this.h3("\n")}},F:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},j4:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},j5:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},j6:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},j3:{"^":"a9;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
n:{
dd:function(a,b,c,d,e){var z=new A.j3(a,b,c,e)
z.f=d
z.e=P.hB(d,0,!1,P.B)
return z}}},J:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},bI:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},G:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},eL:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform4f: "+H.k(this.c)}},j9:{"^":"a9;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},cv:{"^":"a9;a,b,c,d",
a6:function(a){var z=new Float32Array(H.b7(H.u(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},aa:{"^":"a9;a,b,c,d",
a6:function(a){var z=new Float32Array(H.b7(H.u(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},a3:{"^":"a9;a,b,c,d",
dZ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},ah:{"^":"a9;a,b,c,d",
cC:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cy:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bO:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.cy(y)
k=F.cy(z.b)
j=F.lr(d,e,new F.kO(z,F.cy(z.c),F.cy(z.d),k,l,c),b)
if(j!=null)a.he(j)},
lr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.aH,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.d7()
y=H.d([],[F.aH])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cw(null,null,new V.aq(u,0,0,1),null,null,new V.Q(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c9(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cw(null,null,new V.aq(o,n,m,1),null,null,new V.Q(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c9(d))}}z.d.fP(a+1,b+1,y)
return z},
kO:{"^":"w:36;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.co(z.b,b).co(z.d.co(z.c,b),c)
z=new V.ag(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a9()}a.sb9(y.A(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.bx(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a9()}}},
al:{"^":"a;0a,0b,0c,0d,0e",
gcc:function(){return this.a==null||this.b==null||this.c==null},
ej:function(){var z,y,x,w,v
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
if(v.dD())return
return v.A(0,Math.sqrt(v.D(v)))},
em:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.D(z)))
z=w.K(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.b_(z.A(0,Math.sqrt(z.D(z))))
return z.A(0,Math.sqrt(z.D(z)))},
c7:function(){if(this.d!=null)return!0
var z=this.ej()
if(z==null){z=this.em()
if(z==null)return!1}this.d=z
this.a.a.a9()
return!0},
ei:function(){var z,y,x,w,v
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
if(v.dD())return
return v.A(0,Math.sqrt(v.D(v)))},
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
if($.m.$2(n,0)){z=r.K(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.K(0,u)
z=new V.ag(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).K(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.D(z)))
z=k.b_(m)
z=z.A(0,Math.sqrt(z.D(z))).b_(k)
m=z.A(0,Math.sqrt(z.D(z)))}return m},
c5:function(){if(this.e!=null)return!0
var z=this.ei()
if(z==null){z=this.el()
if(z==null)return!1}this.e=z
this.a.a.a9()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){var z,y
if(this.gcc())return a+"disposed"
z=a+C.i.ag(J.ab(this.a.e),0)+", "+C.i.ag(J.ab(this.b.e),0)+", "+C.i.ag(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
I:function(){return this.B("")},
n:{
bl:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.q(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.o("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a9()
return z}}},
cZ:{"^":"a;0a,0b",
gcc:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){if(this.gcc())return a+"disposed"
return a+C.i.ag(J.ab(this.a.e),0)+", "+C.i.ag(J.ab(this.b.e),0)},
I:function(){return this.B("")}},
d4:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ag(J.ab(z.e),0)},
I:function(){return this.B("")}},
ek:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
he:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.Z()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.fY())}this.a.Z()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d4()
if(r.a==null)H.q(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.Z()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cZ()
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
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.Z()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.Z()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bl(p,o,l)}z=this.e
if(!(z==null))z.aA(0)},
av:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.aA(0)
return y},
aZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a_()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
v=b.gcE(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dD])
for(r=0,q=0;q<w;++q){p=b.fS(q)
o=p.gcE(p)
C.a.a5(s,q,new Z.dD(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].ha(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a5(t,l,m[k]);++l}}r+=o}H.u(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b7(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bh(new Z.eX(34962,j),s,b)
i.b=H.d([],[Z.cl])
if(this.b.b.length!==0){x=P.B
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.Z()
C.a.h(h,g.e)}f=Z.df(y,34963,H.u(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cl(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.Z()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.Z()
C.a.h(h,g.e)}f=Z.df(y,34963,H.u(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cl(1,h.length,f))}if(this.d.b.length!==0){x=P.B
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.Z()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.Z()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.Z()
C.a.h(h,g.e)}f=Z.df(y,34963,H.u(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cl(4,h.length,f))}return i},
j:function(a){var z=H.d([],[P.p])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.C(z,"\n")},
aj:function(a){var z=this.e
if(!(z==null))z.v(a)},
a9:function(){return this.aj(null)},
n:{
d7:function(){var z,y
z=new F.ek()
y=new F.jk(z)
y.b=!1
y.c=H.d([],[F.aH])
z.a=y
y=new F.iv(z)
y.b=H.d([],[F.d4])
z.b=y
y=new F.iu(z)
y.b=H.d([],[F.cZ])
z.c=y
y=new F.it(z)
y.b=H.d([],[F.al])
z.d=y
z.e=null
return z}}},
it:{"^":"a;a,0b",
fO:function(a){var z,y,x,w,v
H.u(a,"$isf",[F.aH],"$asf")
z=H.d([],[F.al])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bl(y,w,v))}return z},
fP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isf",[F.aH],"$asf")
z=H.d([],[F.al])
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
C.a.h(z,F.bl(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bl(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bl(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bl(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c7())x=!1
return x},
c6:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c5())x=!1
return x},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.d([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
I:function(){return this.B("")}},
iu:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.d([],[P.p])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.C(z,"\n")},
I:function(){return this.B("")}},
iv:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.d([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
I:function(){return this.B("")}},
aH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c9:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cw(this.cx,x,u,z,y,w,v,a,t)},
fY:function(){return this.c9(null)},
sb9:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a9()}},
ha:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$a_())){z=this.f
y=[P.v]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aK())){z=this.r
y=[P.v]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aJ())){z=this.x
y=[P.v]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$at())){z=this.y
y=[P.v]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.u(a,$.$get$aL())){z=this.z
y=[P.v]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bJ())){z=this.Q
y=[P.v]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bK())){z=this.Q
y=[P.v]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b5()))return H.d([this.ch],[P.v])
else if(z.u(a,$.$get$aI())){z=this.cx
y=[P.v]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.v])},
c7:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.P(0,new F.jr(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a9()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
c5:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.P(0,new F.jq(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a9()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.I()},
B:function(a){var z,y,x
z=H.d([],[P.p])
C.a.h(z,C.i.ag(J.ab(this.e),0))
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
x=C.a.C(z,", ")
return a+"{"+x+"}"},
I:function(){return this.B("")},
n:{
cw:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aH()
y=new F.jp(z)
y.b=H.d([],[F.d4])
z.b=y
y=new F.jo(z)
x=[F.cZ]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.jl(z)
x=[F.al]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$eU()
z.e=0
y=$.$get$a_()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aK().a)!==0?e:null
z.x=(x&$.$get$aJ().a)!==0?b:null
z.y=(x&$.$get$at().a)!==0?f:null
z.z=(x&$.$get$aL().a)!==0?g:null
z.Q=(x&$.$get$eV().a)!==0?c:null
z.ch=(x&$.$get$b5().a)!==0?i:0
z.cx=(x&$.$get$aI().a)!==0?a:null
return z}}},
jr:{"^":"w:6;a",
$1:function(a){var z,y
H.j(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jq:{"^":"w:6;a",
$1:function(a){var z,y
H.j(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jk:{"^":"a;a,0b,0c",
Z:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a9()
return!0},
fQ:function(a,b,c,d,e,f,g,h,i){var z=F.cw(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bl:function(a,b,c,d,e,f){return this.fQ(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c7()
return!0},
c6:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c5()
return!0},
fU:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
this.Z()
z=H.d([],[P.p])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
I:function(){return this.B("")}},
jl:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){H.c(b,{func:1,ret:-1,args:[F.al]})
C.a.P(this.b,b)
C.a.P(this.c,new F.jm(this,b))
C.a.P(this.d,new F.jn(this,b))},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.d([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
I:function(){return this.B("")}},
jm:{"^":"w:6;a,b",
$1:function(a){H.j(a,"$isal")
if(!J.N(a.a,this.a))this.b.$1(a)}},
jn:{"^":"w:6;a,b",
$1:function(a){var z
H.j(a,"$isal")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
jo:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.d([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
I:function(){return this.B("")}},
jp:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a){return this.I()},
B:function(a){var z,y,x,w
z=H.d([],[P.p])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].B(a))
return C.a.C(z,"\n")},
I:function(){return this.B("")}}}],["","",,O,{"^":"",fZ:{"^":"aR;0a,0b,0c,0d,0e,0aa:f@",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
w:function(a){var z=this.f
if(!(z==null))z.v(a)},
a4:function(a,b){},
b6:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.j(a.fr.i(0,"Depth"),"$isdL")
if(y==null){z=a.a
y=new A.dL(z,"Depth")
y.aU(z,"Depth")
y.b1(0,$.h0,$.h_)
y.x=y.f.i(0,"posAttr")
y.y=H.b(y.r.i(0,"objClr"),"$isG")
y.z=H.b(y.r.i(0,"fogClr"),"$isG")
y.Q=H.b(y.r.i(0,"fogStart"),"$isJ")
y.ch=H.b(y.r.i(0,"fogStop"),"$isJ")
y.cx=H.b(y.r.i(0,"viewObjMat"),"$isaa")
y.cy=H.b(y.r.i(0,"projMat"),"$isaa")
a.aX(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bh)){b.e=null
x=null}if(x==null){z=b.d.aZ(new Z.c5(a.a),$.$get$a_())
x=z.ab($.$get$a_())
w=this.a
x.e=w.x.c
b.e=z
z=w}z.H(a)
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
x=x.gN(x)
w=z.cy
w.toString
w.a6(x.X(0,!0))
x=a.gdR()
z=z.cx
z.toString
z.a6(x.X(0,!0))
x=b.e
x.H(a)
x.a2(a)
x.a3(a)
x=this.a
x.toString
a.a.useProgram(null)
x.f.b0()}},hh:{"^":"aR;0a,0b,0c,0d,0e,0f,0r,0aa:x@",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
w:[function(a){var z
H.j(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.w(null)},"ap","$1","$0","gW",0,2,0],
a4:function(a,b){},
M:function(a,b){H.u(a,"$isf",[T.b2],"$asf")
if(b!=null)if(!C.a.aw(a,b)){b.a=a.length
C.a.h(a,b)}},
b6:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.j(a.fr.i(0,"GaussianBlur"),"$isdV")
if(z==null){y=a.a
z=new A.dV(y,"GaussianBlur")
z.aU(y,"GaussianBlur")
z.b1(0,$.hj,$.hi)
z.x=z.f.i(0,"posAttr")
z.y=z.f.i(0,"txtAttr")
z.z=H.b(z.r.i(0,"projViewObjMat"),"$isaa")
z.Q=H.b(z.r.i(0,"txt2DMat"),"$iscv")
z.ch=H.b(z.r.i(0,"colorTxt"),"$isa3")
z.cx=H.b(z.r.i(0,"depthTxt"),"$isa3")
z.cy=H.b(z.r.i(0,"nullColorTxt"),"$isF")
z.db=H.b(z.r.i(0,"nullDepthTxt"),"$isF")
z.dx=H.b(z.r.i(0,"width"),"$isJ")
z.dy=H.b(z.r.i(0,"height"),"$isJ")
z.fr=H.b(z.r.i(0,"highOffset"),"$isJ")
z.fx=H.b(z.r.i(0,"lowOffset"),"$isJ")
z.fy=H.b(z.r.i(0,"depthLimit"),"$isJ")
a.aX(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a_()
v=$.$get$at()
v=y.aZ(new Z.c5(x),new Z.aS(w.a|v.a))
v.ab($.$get$a_()).e=this.a.x.c
v.ab($.$get$at()).e=this.a.y.c
b.e=v}u=H.d([],[T.b2])
this.M(u,this.c)
this.M(u,this.d)
for(t=0;t<u.length;++t)u[t].H(a)
y=this.a
y.H(a)
x=this.c
y.a8(y.ch,y.cy,x)
x=this.d
y.a8(y.cx,y.db,x)
x=this.b
w=y.Q
w.toString
w.a6(x.X(0,!0))
x=a.gdM()
w=y.z
w.toString
w.a6(x.X(0,!0))
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
if(y instanceof Z.bh){y.H(a)
y.a2(a)
y.a3(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.b0()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hI:{"^":"aR;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0aa:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
w:[function(a){var z
H.j(a,"$isl")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.w(null)},"ap","$1","$0","gW",0,2,0],
f9:[function(a){H.j(a,"$isl")
this.a=null
this.w(a)},function(){return this.f9(null)},"ih","$1","$0","gf8",0,2,0],
hP:[function(a,b){var z=V.a7
z=new D.bX(a,H.u(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.w(z)},"$2","geF",8,0,20],
hQ:[function(a,b){var z=V.a7
z=new D.bY(a,H.u(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.w(z)},"$2","geG",8,0,20],
cR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a1(z.e.length+3,4)*4
x=C.f.a1(z.f.length+3,4)*4
w=C.f.a1(z.r.length+3,4)*4
v=C.f.a1(z.x.length+3,4)*4
u=C.f.a1(z.y.length+3,4)*4
t=C.f.a1(z.z.length+3,4)*4
s=C.f.a1(this.e.a.length+3,4)*4
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
a6=$.$get$a_()
if(c){z=$.$get$aK()
a6=new Z.aS(a6.a|z.a)}if(b){z=$.$get$aJ()
a6=new Z.aS(a6.a|z.a)}if(a){z=$.$get$at()
a6=new Z.aS(a6.a|z.a)}if(a0){z=$.$get$aL()
a6=new Z.aS(a6.a|z.a)}if(a2){z=$.$get$aI()
a6=new Z.aS(a6.a|z.a)}return new A.hM(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.u(a,"$isf",[T.b2],"$asf")
if(b!=null)if(!C.a.aw(a,b)){b.a=a.length
C.a.h(a,b)}},
a4:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cw(x)}}},
b6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cR()
y=H.j(a.fr.i(0,z.ax),"$ise9")
if(y==null){y=A.hJ(z,a.a)
a.aX(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aR
z=b.e
if(!(z instanceof Z.bh)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.av()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.c6()
u.a.c6()
u=u.e
if(!(u==null))u.aA(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fU()
t=t.e
if(!(t==null))t.aA(0)}r=b.d.aZ(new Z.c5(a.a),w)
r.ab($.$get$a_()).e=this.a.y.c
if(z)r.ab($.$get$aK()).e=this.a.Q.c
if(v)r.ab($.$get$aJ()).e=this.a.z.c
if(x.rx)r.ab($.$get$at()).e=this.a.ch.c
if(u)r.ab($.$get$aL()).e=this.a.cx.c
if(x.x1)r.ab($.$get$aI()).e=this.a.cy.c
b.e=r}z=T.b2
q=H.d([],[z])
this.a.H(a)
if(x.fx){v=this.a
u=a.dx
u=u.gN(u)
v=v.db
v.toString
v.a6(u.X(0,!0))}if(x.fy){v=this.a
u=a.gdR()
v=v.dx
v.toString
v.a6(u.X(0,!0))}v=this.a
u=a.gdM()
v=v.fr
v.toString
v.a6(u.X(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a6(u.X(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a6(u.X(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a6(C.A.X(u,!0))}if(x.aQ>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.j(t,"$isa7")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.b7(H.u(t.X(0,!0),"$isf",v,"$asf")))
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
case C.d:this.M(q,this.f.d)
v=this.a
u=this.f.d
v.a8(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.M(q,this.f.e)
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
case C.d:this.M(q,this.r.d)
v=this.a
u=this.r.d
v.a8(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.M(q,this.r.e)
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
case C.d:this.M(q,this.x.d)
v=this.a
u=this.x.d
v.a8(v.aQ,v.aR,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.M(q,this.x.e)
v=this.a
u=this.x.e
v.ae(v.ax,v.aR,u)
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
v=v.bo
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.M(q,this.y.d)
v=this.a
u=this.y.d
v.a8(v.de,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.M(q,this.y.e)
v=this.a
u=this.y.e
v.ae(v.df,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bq
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bs
u.a.uniform1f(u.d,s)
break
case C.d:this.M(q,this.z.d)
v=this.a
u=this.z.d
v.a8(v.dg,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bs
v.a.uniform1f(v.d,s)
break
case C.c:this.M(q,this.z.e)
v=this.a
u=this.z.e
v.ae(v.dh,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bs
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cd
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cw(j.a)
s=t.a
h=t.b
g=t.c
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.ce
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb5(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcA(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bc(j.gb5(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gal(j)
g=i.d
h=t.gbC()
s=t.gbd()
t=t.gbm()
g.a.uniform3f(g.d,h,s,t)
t=j.gc0()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gc1()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gc2()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cf
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb5(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcA(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcb(j).io()
g=i.c
h=t.gaN(t)
s=t.gaO(t)
t=t.gaP()
g.a.uniform3f(g.d,h,s,t)
t=m.bc(j.gb5(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gal(j)
s=i.e
h=t.gbC()
g=t.gbd()
t=t.gbm()
s.a.uniform3f(s.d,h,g,t)
t=j.gim()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gil()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gc0()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gc1()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gc2()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.cg
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb8()
H.u(q,"$isf",t,"$asf")
if(!C.a.aw(q,s)){s.saV(q.length)
C.a.h(q,s)}s=j.gcb(j)
h=i.d
g=s.gaN(s)
f=s.gaO(s)
s=s.gaP()
h.a.uniform3f(h.d,g,f,s)
s=j.gbD()
f=i.b
g=s.gaN(s)
h=s.gaO(s)
s=s.gaP()
f.a.uniform3f(f.d,g,h,s)
s=j.gb7(j)
h=i.c
g=s.gaN(s)
f=s.gaO(s)
s=s.gaP()
h.a.uniform3f(h.d,g,f,s)
s=m.cw(j.gcb(j))
f=s.a
g=s.b
h=s.c
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gal(j)
g=i.f
f=h.gbC()
s=h.gbd()
h=h.gbm()
g.a.uniform3f(g.d,f,s,h)
h=j.gb8()
s=h.gdG(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcW()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaV())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.ci
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb8()
H.u(q,"$isf",s,"$asf")
if(!C.a.aw(q,h)){h.saV(q.length)
C.a.h(q,h)}e=m.l(0,j.gN(j))
h=j.gN(j).bc(new V.ag(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcA(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bc(new V.ag(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cm(0)
d=i.d
n=new Float32Array(H.b7(H.u(new V.d0(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).X(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gal(j)
h=i.e
f=d.gbC()
g=d.gbd()
d=d.gbm()
h.a.uniform3f(h.d,f,g,d)
d=j.gb8()
h=d.gdG(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcW()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaV())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc0()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc1()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc2()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dB
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cj
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb8()
H.u(q,"$isf",z,"$asf")
if(!C.a.aw(q,t)){t.saV(q.length)
C.a.h(q,t)}t=j.gb5(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcA(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcb(j)
g=i.c
h=t.gaN(t)
s=t.gaO(t)
t=t.gaP()
g.a.uniform3f(g.d,h,s,t)
t=j.gbD()
s=i.d
h=t.gaN(t)
g=t.gaO(t)
t=t.gaP()
s.a.uniform3f(s.d,h,g,t)
t=j.gb7(j)
g=i.e
h=t.gaN(t)
s=t.gaO(t)
t=t.gaP()
g.a.uniform3f(g.d,h,s,t)
t=m.bc(j.gb5(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb8()
s=t.gdG(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcW()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaV())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gal(j)
s=i.y
h=t.gbC()
g=t.gbd()
t=t.gbm()
s.a.uniform3f(s.d,h,g,t)
t=j.giu()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giv()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gc0()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gc1()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gc2()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.M(q,this.Q.d)
z=this.a
v=this.Q.d
z.a8(z.di,z.bt,v)
break
case C.c:this.M(q,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.dj,z.bt,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gN(v).cm(0)
a.Q=v}z=z.fy
z.toString
z.a6(v.X(0,!0))}if(x.dy){this.M(q,this.ch)
z=this.a
v=this.ch
z.ae(z.dk,z.dl,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bu
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.M(q,this.cx.d)
z=this.a
v=this.cx.d
z.a8(z.dm,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.M(q,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.dn,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bx
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bw
v.a.uniform1f(v.d,t)
break
case C.d:this.M(q,this.cy.d)
z=this.a
v=this.cy.d
z.a8(z.dq,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,t)
break
case C.c:this.M(q,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.dr,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bz
z.a.uniform1f(z.d,u)
break
case C.d:this.M(q,this.db.d)
z=this.a
u=this.db.d
z.a8(z.ds,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break
case C.c:this.M(q,this.db.e)
z=this.a
u=this.db.e
z.ae(z.dt,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].H(a)
z=b.e
z.H(a)
z.a2(a)
z.a3(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.b0()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cR().ax}},hK:{"^":"d_;0f,a,b,0c,0d,0e",
fc:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.x(this.b,y,a,this,[P.v])
z.b=!0
this.a.w(z)}},
aJ:function(){this.cH()
this.fc(1)}},d_:{"^":"a;",
w:[function(a){this.a.w(H.j(a,"$isl"))},function(){return this.w(null)},"ap","$1","$0","gW",0,2,0],
aJ:["cH",function(){}],
fe:function(a){},
ff:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.c(this.gW(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.x(this.b+".textureCube",x,this.e,this,[T.da])
z.b=!0
this.a.w(z)}},
sb9:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aJ()
this.c=C.c
this.fe(null)
z=this.a
z.a=null
z.w(null)}this.ff(a)}},hL:{"^":"d_;a,b,0c,0d,0e"},b0:{"^":"d_;0f,a,b,0c,0d,0e",
d0:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.x(this.b+".color",z,a,this,[V.S])
y.b=!0
this.a.w(y)}},
aJ:["bH",function(){this.cH()
this.d0(new V.S(1,1,1))}],
sal:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aJ()
z=this.a
z.a=null
z.w(null)}this.d0(b)}},hN:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
fd:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.w(z)}},
aJ:function(){this.bH()
this.fd(1)}},hO:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
bX:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.w(z)}},
aJ:function(){this.bH()
this.bX(100)}},iA:{"^":"aR;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
w:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.w(null)},"ap","$1","$0","gW",0,2,0],
a4:function(a,b){},
b6:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.i(0,"Skybox"),"$isel")
if(z==null){y=a.a
z=new A.el(y,"Skybox")
z.aU(y,"Skybox")
z.b1(0,$.iC,$.iB)
z.x=z.f.i(0,"posAttr")
z.y=H.b(z.r.i(0,"fov"),"$isJ")
z.z=H.b(z.r.i(0,"ratio"),"$isJ")
z.Q=H.b(z.r.i(0,"boxClr"),"$isG")
z.ch=H.b(z.r.i(0,"boxTxt"),"$isah")
z.cx=H.b(z.r.i(0,"viewMat"),"$isaa")
a.aX(z)}this.a=z}if(b.e==null){y=b.d.aZ(new Z.c5(a.a),$.$get$a_())
y.ab($.$get$a_()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.H(a)}y=a.d
x=a.c
w=this.a
w.H(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cC(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gN(x).cm(0)
w=w.cx
w.toString
w.a6(x.X(0,!0))
y=b.e
if(y instanceof Z.bh){y.H(a)
y.a2(a)
y.a3(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.b0()
y=this.c
if(y!=null)y.a3(a)}},aR:{"^":"a;"},iN:{"^":"aR;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
w:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.w(null)},"ap","$1","$0","gW",0,2,0],
hX:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$ise",[O.bG],"$ase")
for(z=b.length,y=this.gW(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aG()
t.a=H.d([],w)
t.c=0
u.saa(t)}t=u.gaa()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.ap()},"$2","geN",8,0,21],
hY:[function(a,b){var z,y,x,w,v,u,t
H.u(b,"$ise",[O.bG],"$ase")
for(z=b.length,y=this.gW(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aG()
t.a=H.d([],w)
t.c=0
u.saa(t)}t=u.gaa()
t.toString
H.c(y,x)
C.a.R(t.a,y)}}this.ap()},"$2","geO",8,0,21],
a4:function(a,b){},
b6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.f.a1(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.j(a.fr.i(0,y),"$ises")
if(x==null){x=A.iO(z,a.a)
a.aX(x)}this.b=x
y=x}if(b.e==null){y=b.d.aZ(new Z.c5(a.a),$.$get$a_())
w=y.ab($.$get$a_())
v=this.b
w.e=v.x.c
b.e=y
y=v}y.H(a)
y=T.b2
u=H.d([],[y])
for(w=[P.v],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.u(u,"$isf",y,"$asf")
if(v!=null)if(!C.a.aw(u,v)){v.a=u.length
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
n=new Float32Array(H.b7(H.u((q==null?new V.a7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).X(0,!0),"$isf",w,"$asf")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aQ(0,0,1,1)
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
if(m==null)m=V.aQ(0,0,1,1)
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
for(s=0;s<u.length;++s)u[s].H(a)
y=b.e
if(y instanceof Z.bh){y.H(a)
y.a2(a)
y.a3(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.f.b0()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bG:{"^":"a;0a,0b,0c,0d,0e,0aa:f@",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
w:[function(a){var z
H.j(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.w(null)},"ap","$1","$0","gW",0,2,0],
n:{
et:function(a,b,c,d,e){var z,y,x,w,v,u
z=new O.bG()
y=z.a
z.a=e
x=e.y
w=H.c(z.gW(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.x("texture",y,z.a,z,[T.ct])
x.b=!0
z.w(x)
v=V.aO()
if(!J.N(z.b,v)){y=z.b
z.b=v
x=new D.x("colorMatrix",y,v,z,[V.a7])
x.b=!0
z.w(x)}u=V.aQ(0,0,1,1)
if(!J.N(z.c,u)){y=z.c
z.c=u
x=new D.x("source",y,u,z,[V.cr])
x.b=!0
z.w(x)}if(!J.N(z.d,b)){y=z.d
z.d=b
x=new D.x("destination",y,b,z,[V.cr])
x.b=!0
z.w(x)}if(z.e!==!1){z.e=!1
x=new D.x("flip",!0,!1,z,[P.a4])
x.b=!0
z.w(x)}z.f=null
return z}}}}],["","",,T,{"^":"",b2:{"^":"cG;"},ct:{"^":"b2;0b,0c,0d,0e,0f,0r,0x,0y,a",
H:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
n:{
er:function(a,b){var z=new T.ct(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.C()
return z}}},da:{"^":"b2;0b,0c,0d,0e,a",
H:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a3:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iQ:{"^":"a;a,0b,0c,0d,0e",
dF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.da(0)
r.b=s
r.c=!1
r.d=0
r.e=D.C()
this.aH(r,s,z,34069,!1,!1)
this.aH(r,s,w,34070,!1,!1)
this.aH(r,s,y,34071,!1,!1)
this.aH(r,s,v,34072,!1,!1)
this.aH(r,s,x,34073,!1,!1)
this.aH(r,s,u,34074,!1,!1)
return r},
dE:function(a){return this.dF(a,".png",!1,"")},
hc:function(a,b){return this.dF(a,b,!1,"")},
aH:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ac
W.X(z,"load",H.c(new T.iR(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fa:function(a,b,c){var z,y,x,w
b=V.bU(b,2)
z=V.bU(a.width,2)
y=V.bU(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cK(null,null)
x.width=z
x.height=y
w=H.j(C.k.dV(x,"2d"),"$isdF")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.l3(w.getImageData(0,0,x.width,x.height))}}},iR:{"^":"w:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fa(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hB(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.dd();++z.e}}}],["","",,V,{"^":"",fE:{"^":"a;",
b2:function(a,b){return!0},
j:function(a){return"all"},
$isc0:1},c0:{"^":"a;"},e8:{"^":"a;",
b2:["e2",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b2(0,b))return!0
return!1}],
j:["cG",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isc0:1},bv:{"^":"e8;0a",
b2:function(a,b){return!this.e2(0,b)},
j:function(a){return"!["+this.cG(0)+"]"}},ir:{"^":"a;0a",
e6:function(a){var z,y
if(a.a.length<=0)throw H.h(P.o("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.B,P.a4])
for(y=new H.e5(a,a.gk(a),0,[H.aC(a,"t",0)]);y.E();)z.a5(0,y.d,!0)
this.a=z},
b2:function(a,b){return this.a.d8(0,b)},
j:function(a){var z=this.a
return P.d9(new H.e4(z,[H.z(z,0)]),0,null)},
$isc0:1,
n:{
a2:function(a){var z=new V.ir()
z.e6(a)
return z}}},en:{"^":"a;a,b,0c,0d",
ghf:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ez(this.a.J(0,b))
w.a=H.d([],[V.c0])
w.c=!1
C.a.h(this.c,w)
return w},
h2:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b2(0,a))return w}return},
j:function(a){return this.b}},ew:{"^":"a;a,b,c",
j:function(a){var z,y
z=H.fy(this.b,"\n","\\n")
y=H.fy(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ex:{"^":"a;a,b,0c",
j:function(a){return this.b}},j_:{"^":"a;0a,0b,0c",
J:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.en(this,b)
z.c=H.d([],[V.ez])
this.a.a5(0,b,z)}return z},
ba:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.ex(this,a)
y=P.p
z.c=new H.b_(0,0,[y,y])
this.b.a5(0,a,z)}return z},
hG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.ew])
y=this.c
x=[P.B]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bf(a,t)
r=y.h2(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d9(w,0,null)
throw H.h(P.o("Untokenizable string [state: "+y.ghf(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d9(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.ew(o==null?p.b:o,q,t)}++t}}}},ez:{"^":"e8;b,0c,0a",
j:function(a){return this.b.b+": "+this.cG(0)}}}],["","",,X,{"^":"",fI:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gp:function(){var z=this.db
if(z==null){z=D.C()
this.db=z}return z},
aq:function(a){var z=this.db
if(!(z==null))z.v(a)},
H:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.Y(z.getParameter(3379))
u=V.bU(x,2)
t=V.bU(w,2)
v=V.bU(v,2)
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
r=T.er(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
r.y.dd()}y.b=r.b
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
a.c=C.h.a0(y*this.a)
x=z.d
a.d=C.h.a0(x*this.b)
w=this.c
q=C.h.a0(z.a*w)
p=this.d
o=C.h.a0(z.b*p)
n=C.h.a0(y*w)
m=C.h.a0(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a3:function(a){a.a.bindFramebuffer(36160,null)},
n:{
dA:function(a,b,c){var z=new X.fI()
z.a=a
z.b=b
z.c=a
z.d=b
z.e=!0
z.y=T.er(0,null)
z.z=new V.aq(0,0,0,1)
z.Q=!0
z.ch=2000
z.cx=!0
z.cy=V.aQ(0,0,1,1)
return z}}},cc:{"^":"a;",$isay:1},hg:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
H:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.r(y)
v=C.h.a0(w.a*y)
if(typeof x!=="number")return H.r(x)
u=C.h.a0(w.b*x)
t=C.h.a0(w.c*y)
a.c=t
w=C.h.a0(w.d*x)
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
z=new X.hg()
y=new V.aq(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aQ(0,0,1,1)
z.r=y
return z}}},hl:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
H:function(a){var z
a.cy.bB(V.aO())
z=V.aO()
a.db.bB(z)},
a3:function(a){a.cy.az()
a.db.az()},
$isay:1,
$iscc:1},i0:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
aq:[function(a){var z
H.j(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.aq(null)},"hI","$1","$0","gef",0,2,0],
H:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bB(V.av(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eg
if(z==null){z=V.ea(new V.ag(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.eg=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aT(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bB(r)},
a3:function(a){a.cy.az()
a.db.az()},
$isay:1,
$iscc:1,
n:{
ef:function(a,b,c,d){var z,y,x,w
z=new X.i0()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gp()
x.toString
w=H.c(z.gef(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.x("mover",y,z.a,z,[U.a8])
x.b=!0
z.aq(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.x("fov",y,b,z,[P.v])
x.b=!0
z.aq(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.x("near",y,d,z,[P.v])
x.b=!0
z.aq(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.x("far",y,a,z,[P.v])
x.b=!0
z.aq(x)}return z}}},cs:{"^":"a;"}}],["","",,V,{"^":"",
lp:function(a){P.iZ(C.x,new V.lq(a))},
lq:{"^":"w:38;a",
$1:function(a){H.j(a,"$isb3")
P.dw(C.h.dQ(this.a.gh4(),2)+" fps")}},
iw:{"^":"a;0a,0b",
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
t=W.ac
W.X(z,"scroll",H.c(new V.iz(x),{func:1,ret:-1,args:[t]}),!1,t)},
fR:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isf",[P.p],"$asf")
this.fh()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hG(C.a.h8(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fx(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
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
fh:function(){var z,y,x,w
if(this.b!=null)return
z=new V.j_()
y=P.p
z.a=new H.b_(0,0,[y,V.en])
z.b=new H.b_(0,0,[y,V.ex])
z.c=z.J(0,"Start")
y=z.J(0,"Start").C(0,"Bold")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").C(0,"Bold")
x=new V.bv()
w=[V.c0]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").C(0,"BoldEnd")
x=V.a2(new H.a0("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"Italic")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").C(0,"Italic")
x=new V.bv()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").C(0,"ItalicEnd")
x=V.a2(new H.a0("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"Code")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").C(0,"Code")
x=new V.bv()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a2(new H.a0("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").C(0,"CodeEnd")
x=V.a2(new H.a0("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"LinkHead")
x=V.a2(new H.a0("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").C(0,"LinkTail")
x=V.a2(new H.a0("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").C(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").C(0,"LinkHead")
y=new V.bv()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").C(0,"LinkEnd")
y=V.a2(new H.a0("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").C(0,"LinkTail")
y=new V.bv()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").C(0,"Other").a,new V.fE())
x=z.J(0,"Other").C(0,"Other")
y=new V.bv()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a2(new H.a0("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.ba("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.ba("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.ba("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.ba("Link")
x=z.J(0,"Other")
x.d=x.a.ba("Other")
this.b=z},
n:{
ix:function(a,b){var z=new V.iw()
z.e7(a,!0)
return z}}},
iz:{"^":"w:22;a",
$1:function(a){P.iY(C.m,new V.iy(this.a))}},
iy:{"^":"w:2;a",
$0:function(){var z,y,x
z=C.h.a0(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
ft:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=V.ix("Test 028",!0)
y=W.cK(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fR(H.d(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],[P.p]))
x=document.getElementById("testCanvas")
if(x==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
w=E.iW(x,!0,!0,!0,!1)
v=new U.dW()
v.be(U.a8)
v.aC(v.geD(),v.gf_())
v.e=null
v.f=V.aO()
v.r=0
z=w.r
u=new U.jg()
t=U.cM()
t.scz(0,!0)
t.scp(6.283185307179586)
t.scr(0)
t.sac(0,0)
t.scq(100)
t.sS(0)
t.sca(0.5)
u.b=t
t=t.gp()
t.toString
s={func:1,ret:-1,args:[D.l]}
r=H.c(u.gaI(),s)
C.a.h(t.a,r)
t=U.cM()
t.scz(0,!0)
t.scp(6.283185307179586)
t.scr(0)
t.sac(0,0)
t.scq(100)
t.sS(0)
t.sca(0.5)
u.c=t
C.a.h(t.gp().a,r)
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
q=new X.aw(!1,!1,!1)
p=u.d
u.d=q
t=[X.aw]
r=new D.x("modifiers",p,q,u,t)
r.b=!0
u.O(r)
r=u.f
if(r!==!1){u.f=!1
r=new D.x("invertX",r,!1,u,[P.a4])
r.b=!0
u.O(r)}r=u.r
if(r!==!1){u.r=!1
r=new D.x("invertY",r,!1,u,[P.a4])
r.b=!0
u.O(r)}u.aY(z)
v.h(0,u)
z=w.r
u=new U.jf()
r=U.cM()
r.scz(0,!0)
r.scp(6.283185307179586)
r.scr(0)
r.sac(0,0)
r.scq(100)
r.sS(0)
r.sca(0.2)
u.b=r
r=r.gp()
r.toString
o=H.c(u.gaI(),s)
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
q=new X.aw(!0,!1,!1)
p=u.c
u.c=q
r=new D.x("modifiers",p,q,u,t)
r.b=!0
u.O(r)
u.aY(z)
v.h(0,u)
z=w.r
u=new U.jh()
u.c=0.01
u.d=0
u.e=0
q=new X.aw(!1,!1,!1)
u.b=q
t=new D.x("modifiers",null,q,u,t)
t.b=!0
u.O(t)
u.aY(z)
v.h(0,u)
v.h(0,U.cO(V.hR(0,0,5)))
n=X.ef(2000,1.0471975511965976,v,0.1)
m=F.d7()
F.bO(m,null,null,1,1,1,0,0,1)
F.bO(m,null,null,1,1,0,1,0,3)
F.bO(m,null,null,1,1,0,0,1,2)
F.bO(m,null,null,1,1,-1,0,0,0)
F.bO(m,null,null,1,1,0,-1,0,0)
F.bO(m,null,null,1,1,0,0,-1,3)
m.av()
l=E.ch(null,!0,null,"",m,null)
k=E.ch(null,!0,null,"",null,null)
for(j=-1.6;j<=1.7;j+=0.8)for(i=-1.6;i<=1.7;i+=0.8)for(h=-1.6;h<=1.7;h+=0.8){g=new V.a7(1,0,0,j,0,1,0,i,0,0,1,h,0,0,0,1).l(0,new V.a7(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
f=E.ch(null,!0,null,"",null,null)
z=new U.cN()
z.sN(0,g)
f.sdI(z)
z=f.y
u=H.z(z,0)
H.D(l,u)
t=[u]
if(z.bh(H.d([l],t))){r=z.a
e=r.length
C.a.h(r,l)
u=H.u(H.d([l],t),"$ise",[u],"$ase")
z=z.c
if(z!=null)z.$2(e,u)}z=k.y
u=H.z(z,0)
H.D(f,u)
t=[u]
if(z.bh(H.d([f],t))){r=z.a
e=r.length
C.a.h(r,f)
u=H.u(H.d([f],t),"$ise",[u],"$ase")
z=z.c
if(z!=null)z.$2(e,u)}}d=w.f.dE("../resources/diceColor")
c=new O.hI()
z=O.cd(V.a7)
c.e=z
z.aC(c.geF(),c.geG())
z=new O.b0(c,"emission")
z.c=C.b
z.f=new V.S(0,0,0)
c.f=z
z=new O.b0(c,"ambient")
z.c=C.b
z.f=new V.S(0,0,0)
c.r=z
z=new O.b0(c,"diffuse")
z.c=C.b
z.f=new V.S(0,0,0)
c.x=z
z=new O.b0(c,"invDiffuse")
z.c=C.b
z.f=new V.S(0,0,0)
c.y=z
z=new O.hO(c,"specular")
z.c=C.b
z.f=new V.S(0,0,0)
z.ch=100
c.z=z
z=new O.hL(c,"bump")
z.c=C.b
c.Q=z
c.ch=null
z=new O.b0(c,"reflect")
z.c=C.b
z.f=new V.S(0,0,0)
c.cx=z
z=new O.hN(c,"refract")
z.c=C.b
z.f=new V.S(0,0,0)
z.ch=1
c.cy=z
z=new O.hK(c,"alpha")
z.c=C.b
z.f=1
c.db=z
z=new D.hv()
z.be(D.W)
z.e=H.d([],[D.cg])
z.f=H.d([],[D.i2])
z.r=H.d([],[D.iD])
z.x=H.d([],[D.iS])
z.y=H.d([],[D.iT])
z.z=H.d([],[D.iU])
z.Q=null
z.ch=null
z.cB(z.geE(),z.geZ(),z.gf0())
c.dx=z
u=z.Q
if(u==null){u=D.C()
z.Q=u
z=u}else z=u
u=H.c(c.gf8(),s)
C.a.h(z.a,u)
u=c.dx
z=u.ch
if(z==null){z=D.C()
u.ch=z}u=H.c(c.gW(),s)
C.a.h(z.a,u)
c.dy=null
u=c.dx
z=U.cO(V.eb(-1,-1,-1,null))
u.h(0,D.dR(new V.S(1,0.9,0.9),z))
z=c.dx
u=U.cO(V.eb(1,1,2,null))
z.h(0,D.dR(new V.S(0.2,0.2,0.35),u))
z=c.r
z.sal(0,new V.S(0.2,0.2,0.2))
c.r.sb9(d)
z=c.x
z.sal(0,new V.S(0.8,0.8,0.8))
c.x.sb9(d)
z=c.z
z.sal(0,new V.S(0.7,0.7,0.7))
z=c.z
if(z.c===C.b){z.c=C.e
z.bH()
z.bX(100)
u=z.a
u.a=null
u.w(null)}z.bX(10)
c.Q.sb9(w.f.dE("../resources/diceBumpMap"))
b=X.dA(800,600,!0)
if(b.Q){b.Q=!1
z=new D.x("clearColor",!0,!1,b,[P.a4])
z.b=!0
b.aq(z)}z=w.f.hc("../resources/maskonaive",".jpg")
a=M.cP(null,null,null)
u=new O.iA()
u.b=1.0471975511965976
p=u.c
u.c=z
z=z.e
t=H.c(u.gW(),s)
C.a.h(z.a,t)
z=new D.x("boxTexture",p,u.c,u,[T.da])
z.b=!0
u.w(z)
d=new V.S(1,1,1)
if(!J.N(u.d,d)){p=u.d
u.d=d
z=new D.x("boxColor",p,d,u,[V.S])
z.b=!0
u.w(z)}u.e=null
a.san(u)
a.saL(n)
a.saB(0,b)
a0=M.dT(null,null,null,null)
a0.saL(n)
a0.saB(0,b)
a0.san(c)
a0.d.h(0,k)
a1=X.dA(400,300,!0)
a2=M.dT(null,null,null,null)
a2.saL(n)
a2.saB(0,a1)
z=new O.fZ()
z.d=1
z.e=10
a3=new V.S(1,1,1)
z.b=a3
u=[V.S]
t=new D.x("objectColor",null,a3,z,u)
t.b=!0
z.w(t)
a3=new V.S(0,0,0)
if(!J.N(z.c,a3)){p=z.c
z.c=a3
u=new D.x("fogColor",p,a3,z,u)
u.b=!0
z.w(u)}u=z.d
if(!$.m.$2(u,3.5)){p=z.d
z.d=3.5
u=new D.x("fogStart",p,3.5,z,[P.v])
u.b=!0
z.w(u)}u=z.e
if(!$.m.$2(u,5.5)){p=z.e
z.e=5.5
u=new D.x("fogStop",p,5.5,z,[P.v])
u.b=!0
z.w(u)}a2.san(z)
a2.d.h(0,k)
a4=M.cP(null,null,null)
z=b.y
u=a1.y
t=new O.hh()
t.e=0
t.f=4
t.r=0.001
t.b=new V.d0(1,0,0,0,1,0,0,0,1)
r=new D.x("textureMatrix",null,null,t,[P.a])
r.b=!0
t.w(r)
r=t.c
if(r!==z){if(r!=null){r=r.y
o=H.c(t.gW(),s)
C.a.R(r.a,o)}p=t.c
t.c=z
z=z.y
r=H.c(t.gW(),s)
C.a.h(z.a,r)
z=new D.x("colorTexture",p,t.c,t,[T.ct])
z.b=!0
t.w(z)}z=t.d
if(z!==u){if(z!=null){z=z.y
r=H.c(t.gW(),s)
C.a.R(z.a,r)}p=t.d
t.d=u
z=u.y
u=H.c(t.gW(),s)
C.a.h(z.a,u)
z=new D.x("depthTexture",p,t.d,t,[T.ct])
z.b=!0
t.w(z)}z=t.e
if(!$.m.$2(z,0)){p=t.e
t.e=0
z=new D.x("highOffset",p,0,t,[P.v])
z.b=!0
t.w(z)}z=t.f
if(!$.m.$2(z,8)){p=t.f
t.f=8
z=new D.x("lowOffset",p,8,t,[P.v])
z.b=!0
t.w(z)}z=t.r
if(!$.m.$2(z,0.001)){p=t.r
t.r=0.001
z=new D.x("depthLimit",p,0.001,t,[P.v])
z.b=!0
t.w(z)}a4.san(t)
a5=new O.iN()
a3=new V.aq(0,0,0,0)
a5.a=a3
z=new D.x("backColor",null,a3,a5,[V.aq])
z.b=!0
a5.w(z)
a5.b=null
z=O.cd(O.bG)
a5.c=z
z.aC(a5.geN(),a5.geO())
a5.d=0
a5.e=null
z=a5.c
u=a1.y
z.h(0,O.et(null,V.aQ(0,0.8,0.2,0.2),!1,null,u))
u=a5.c
z=b.y
u.h(0,O.et(null,V.aQ(0,0.6,0.2,0.2),!1,null,z))
a6=M.cP(null,null,null)
a6.saB(0,X.cR(!1,!0,!1,null,2000,null,0))
a6.san(a5)
z=M.az
u=H.d([a,a0,a2,a4,a6],[z])
t=new M.fS()
t.be(z)
t.e=!1
t.f=null
t.aC(t.gf1(),t.gf2())
t.c_(0,u)
z=w.d
if(z!==t){if(z!=null){z=z.gp()
z.toString
u=H.c(w.gcJ(),s)
C.a.R(z.a,u)}w.d=t
z=t.gp()
z.toString
s=H.c(w.gcJ(),s)
C.a.h(z.a,s)
w.ea()}V.lp(w)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e_.prototype
return J.dZ.prototype}if(typeof a=="string")return J.cV.prototype
if(a==null)return J.e0.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.a)return a
return J.cC(a)}
J.c7=function(a){if(typeof a=="string")return J.cV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.a)return a
return J.cC(a)}
J.dr=function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.a)return a
return J.cC(a)}
J.l7=function(a){if(typeof a=="number")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.de.prototype
return a}
J.c8=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.a)return a
return J.cC(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.fA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l7(a).ah(a,b)}
J.fB=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lg(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c7(a).i(a,b)}
J.fC=function(a,b,c,d){return J.c8(a).d5(a,b,c,d)}
J.cF=function(a,b,c){return J.c7(a).fV(a,b,c)}
J.dx=function(a,b){return J.dr(a).F(a,b)}
J.fD=function(a,b){return J.dr(a).P(a,b)}
J.aD=function(a){return J.K(a).gV(a)}
J.bV=function(a){return J.dr(a).ga_(a)}
J.bf=function(a){return J.c7(a).gk(a)}
J.ab=function(a){return J.K(a).j(a)}
I.du=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cJ.prototype
C.y=J.n.prototype
C.a=J.aZ.prototype
C.z=J.dZ.prototype
C.f=J.e_.prototype
C.A=J.e0.prototype
C.h=J.cm.prototype
C.i=J.cV.prototype
C.H=J.bZ.prototype
C.J=H.hX.prototype
C.K=W.hY.prototype
C.p=J.i1.prototype
C.q=P.d5.prototype
C.l=J.de.prototype
C.t=W.bL.prototype
C.u=W.ju.prototype
C.v=new P.i_()
C.w=new P.jj()
C.j=new P.kf()
C.b=new A.ce(0,"ColorSourceType.None")
C.e=new A.ce(1,"ColorSourceType.Solid")
C.d=new A.ce(2,"ColorSourceType.Texture2D")
C.c=new A.ce(3,"ColorSourceType.TextureCube")
C.m=new P.bk(0)
C.x=new P.bk(5e6)
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
C.I=H.d(I.du([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.r=new P.ji(!1)
$.au=0
$.bg=null
$.dB=null
$.dj=!1
$.fq=null
$.fk=null
$.fw=null
$.cB=null
$.cD=null
$.ds=null
$.b8=null
$.bP=null
$.bQ=null
$.dk=!1
$.P=C.j
$.dP=null
$.dO=null
$.dN=null
$.dM=null
$.m=V.hP()
$.h0="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.h_="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.hj="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.hi="precision mediump float;                                 \n                                                         \n#define MAX_BLUR_RANGE 20.0                              \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D depthTxt;                              \nuniform int nullColorTxt;                                \nuniform int nullDepthTxt;                                \nuniform float width;                                     \nuniform float height;                                    \nuniform float highOffset;                                \nuniform float lowOffset;                                 \nuniform float depthLimit;                                \n                                                         \nvarying vec2 txt2D;                                      \n                                                         \nfloat div;                                               \nvec4 color;                                              \n                                                         \nvoid offsetColor(float baseDepth, float tu, float tv)    \n{                                                        \n   vec2 txtOffset = vec2(txt2D.x + tu/width,             \n                         txt2D.y + tv/height);           \n   float depth = texture2D(depthTxt, txtOffset).r;       \n   if (depth - depthLimit > baseDepth) return;           \n   div += 1.0;                                           \n   color += texture2D(colorTxt, txtOffset);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0)                                  \n   {                                                     \n      gl_FragColor = vec4(1.0);                          \n      return;                                            \n   }                                                     \n   color = texture2D(colorTxt, txt2D);                   \n   float baseDepth;                                      \n   if(nullDepthTxt > 0) baseDepth = 1.0;                 \n   else baseDepth = texture2D(depthTxt, txt2D).r;        \n   float offset = mix(lowOffset, highOffset, baseDepth); \n   offset = abs(offset);                                 \n   div = 1.0;                                            \n   for(float x=0.0; x<MAX_BLUR_RANGE; x+=1.0)            \n   {                                                     \n      if(x > offset) break;                              \n      for(float y=1.0; y<MAX_BLUR_RANGE; y+=1.0)         \n      {                                                  \n         if(y > offset) break;                           \n         offsetColor(baseDepth,  x,  y);                 \n         offsetColor(baseDepth,  x, -y);                 \n         offsetColor(baseDepth, -x,  y);                 \n         offsetColor(baseDepth, -x, -y);                 \n      }                                                  \n   }                                                     \n   gl_FragColor = color / div;                           \n}                                                        \n"
$.iC="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iB="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["dK","$get$dK",function(){return H.fp("_$dart_dartClosure")},"cW","$get$cW",function(){return H.fp("_$dart_js")},"eA","$get$eA",function(){return H.aA(H.cu({
toString:function(){return"$receiver$"}}))},"eB","$get$eB",function(){return H.aA(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eC","$get$eC",function(){return H.aA(H.cu(null))},"eD","$get$eD",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eH","$get$eH",function(){return H.aA(H.cu(void 0))},"eI","$get$eI",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.aA(H.eG(null))},"eE","$get$eE",function(){return H.aA(function(){try{null.$method$}catch(z){return z.message}}())},"eK","$get$eK",function(){return H.aA(H.eG(void 0))},"eJ","$get$eJ",function(){return H.aA(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dg","$get$dg",function(){return P.jv()},"bR","$get$bR",function(){return[]},"fe","$get$fe",function(){return P.ig("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dJ","$get$dJ",function(){return{}},"eW","$get$eW",function(){return Z.an(0)},"eU","$get$eU",function(){return Z.an(511)},"a_","$get$a_",function(){return Z.an(1)},"aK","$get$aK",function(){return Z.an(2)},"aJ","$get$aJ",function(){return Z.an(4)},"at","$get$at",function(){return Z.an(8)},"aL","$get$aL",function(){return Z.an(16)},"bJ","$get$bJ",function(){return Z.an(32)},"bK","$get$bK",function(){return Z.an(64)},"eV","$get$eV",function(){return Z.an(96)},"b5","$get$b5",function(){return Z.an(128)},"aI","$get$aI",function(){return Z.an(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.I,args:[F.al]},{func:1,ret:-1,args:[P.B,[P.e,E.aF]]},{func:1,ret:-1,args:[P.p,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.I,args:[,,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:P.I,args:[,]},{func:1,ret:-1,args:[P.B,[P.e,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.B,[P.e,U.a8]]},{func:1,ret:-1,args:[P.B,[P.e,M.az]]},{func:1,ret:-1,args:[P.B,[P.e,V.a7]]},{func:1,ret:-1,args:[P.B,[P.e,O.bG]]},{func:1,ret:P.I,args:[W.ac]},{func:1,ret:P.p,args:[P.B]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.a4,args:[W.L]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:-1,args:[P.a],opt:[P.as]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[P.U]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.a4,args:[P.v,P.v]},{func:1,ret:P.a4,args:[[P.e,D.W]]},{func:1,args:[P.p]},{func:1,ret:P.I,args:[F.aH,P.v,P.v]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.I,args:[P.b3]},{func:1,args:[,P.p]}]
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
Isolate.du=a.du
Isolate.dp=a.dp
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
if(typeof dartMainRunner==="function")dartMainRunner(N.ft,[])
else N.ft([])})})()
//# sourceMappingURL=test.dart.js.map
