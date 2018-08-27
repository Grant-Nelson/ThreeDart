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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dH(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dI=function(){}
var dart=[["","",,H,{"^":"",nZ:{"^":"b;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cK:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dL==null){H.mG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cd("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d6()]
if(v!=null)return v
v=H.mJ(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d6(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
q:{"^":"b;",
A:function(a,b){return a===b},
gU:function(a){return H.bO(a)},
i:["eC",function(a){return"Instance of '"+H.be(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i2:{"^":"q;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isad:1},
ek:{"^":"q;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isG:1},
d7:{"^":"q;",
gU:function(a){return 0},
i:["eD",function(a){return String(a)}]},
iG:{"^":"d7;"},
cz:{"^":"d7;"},
c8:{"^":"d7;",
i:function(a){var z=a[$.$get$e5()]
if(z==null)return this.eD(a)
return"JavaScript function for "+H.l(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd1:1},
b9:{"^":"q;$ti",
h:function(a,b){H.z(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.B("add"))
a.push(b)},
a_:function(a,b){var z
if(!!a.fixed$length)H.t(P.B("remove"))
for(z=0;z<a.length;++z)if(J.a1(a[z],b)){a.splice(z,1)
return!0}return!1},
cd:function(a,b){var z,y
H.v(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.t(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b_(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hJ:function(a){return this.E(a,"")},
hC:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b_(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bW:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gaC:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i0())},
aA:function(a,b,c,d){var z
H.z(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("fill range"))
P.aO(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.F(0,1))a[z]=d},
b7:function(a,b){var z
for(z=0;z<a.length;++z)if(J.a1(a[z],b))return!0
return!1},
i:function(a){return P.d4(a,"[","]")},
ga3:function(a){return new J.ax(a,a.length,0,[H.x(a,0)])},
gU:function(a){return H.bO(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ch(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
return a[b]},
m:function(a,b,c){H.E(b)
H.z(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
a[b]=c},
$isi:1,
$isd:1,
p:{
i1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ch(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.eh(new Array(a),b)},
eh:function(a,b){return J.bH(H.c(a,[b]))},
bH:function(a){H.c1(a)
a.fixed$length=Array
return a}}},
nY:{"^":"b9;$ti"},
ax:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cq:{"^":"q;",
ii:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cB:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
er:function(a,b){var z,y
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bj:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.B("Unexpected toString result: "+z))
x=J.aK(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.l("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
bo:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dA(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dA(a,b)},
dA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aO:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fS:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isA:1,
$isY:1},
ej:{"^":"cq;",$ism:1},
ei:{"^":"cq;"},
cr:{"^":"q;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b<0)throw H.a(H.aJ(a,b))
if(b>=a.length)H.t(H.aJ(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aJ(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.ch(b,null,null))
return a+b},
aX:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ah(b))
c=P.aO(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ae:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ah(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ad:function(a,b){return this.ae(a,b,0)},
v:function(a,b,c){H.E(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cw(b,null,null))
if(b>c)throw H.a(P.cw(b,null,null))
if(c>a.length)throw H.a(P.cw(c,null,null))
return a.substring(b,c)},
aF:function(a,b){return this.v(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.F)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
ah:function(a,b){return this.hX(a,b," ")},
ef:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ee:function(a,b){return this.ef(a,b,0)},
hs:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.h7(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$iseA:1,
$isj:1}}],["","",,H,{"^":"",
cL:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i0:function(){return new P.jl("No element")},
a4:{"^":"jY;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$ascA:function(){return[P.m]},
$asw:function(){return[P.m]},
$asi:function(){return[P.m]},
$asd:function(){return[P.m]}},
hL:{"^":"i;"},
eq:{"^":"b;a,b,c,0d,$ti",
gS:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aK(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b_(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
im:{"^":"i;a,b,$ti",
ga3:function(a){return new H.io(J.bA(this.a),this.b,this.$ti)},
gk:function(a){return J.aw(this.a)},
K:function(a,b){return this.b.$1(J.cQ(this.a,b))},
$asi:function(a,b){return[b]}},
io:{"^":"d5;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gS(z))
return!0}this.a=null
return!1},
gS:function(a){return this.a},
$asd5:function(a,b){return[b]}},
kq:{"^":"i;a,b,$ti",
ga3:function(a){return new H.kr(J.bA(this.a),this.b,this.$ti)}},
kr:{"^":"d5;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gS(z)))return!0
return!1},
gS:function(a){var z=this.a
return z.gS(z)}},
co:{"^":"b;$ti"},
cA:{"^":"b;$ti",
m:function(a,b,c){H.E(b)
H.z(c,H.at(this,"cA",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aA:function(a,b,c,d){H.z(d,H.at(this,"cA",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
jY:{"^":"cs+cA;"}}],["","",,H,{"^":"",
hz:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mB:function(a){return init.types[H.E(a)]},
h0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bO:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iQ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
be:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.J(a).$iscz){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.aF(w,1)
r=H.dM(H.c1(H.b3(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iI:function(){if(!!self.location)return self.location.href
return},
eD:function(a){var z,y,x,w,v
H.c1(a)
z=J.aw(a)
if(typeof z!=="number")return z.ey()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iR:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aO(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.eD(z)},
eE:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.iR(a)}return H.eD(a)},
iS:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ey()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cu:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aO(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
ag:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iP:function(a){return a.b?H.ag(a).getUTCFullYear()+0:H.ag(a).getFullYear()+0},
iN:function(a){return a.b?H.ag(a).getUTCMonth()+1:H.ag(a).getMonth()+1},
iJ:function(a){return a.b?H.ag(a).getUTCDate()+0:H.ag(a).getDate()+0},
iK:function(a){return a.b?H.ag(a).getUTCHours()+0:H.ag(a).getHours()+0},
iM:function(a){return a.b?H.ag(a).getUTCMinutes()+0:H.ag(a).getMinutes()+0},
iO:function(a){return a.b?H.ag(a).getUTCSeconds()+0:H.ag(a).getSeconds()+0},
iL:function(a){return a.b?H.ag(a).getUTCMilliseconds()+0:H.ag(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ah(a))},
h:function(a,b){if(a==null)J.aw(a)
throw H.a(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
z=H.E(J.aw(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cw(b,"index",null)},
mw:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
ah:function(a){return new P.aL(!0,a,null,null)},
mr:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.ez()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h9})
z.name=""}else z.toString=H.h9
return z},
h9:function(){return J.ab(this.dartException)},
t:function(a){throw H.a(a)},
C:function(a){throw H.a(P.b_(a))},
av:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n3(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aO(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d8(H.l(y)+" (Error "+w+")",null))
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
m=v.ag(y)
if(m!=null)return z.$1(H.d8(H.O(y),m))
else{m=u.ag(y)
if(m!=null){m.method="call"
return z.$1(H.d8(H.O(y),m))}else{m=t.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=r.ag(y)
if(m==null){m=q.ag(y)
if(m==null){m=p.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=o.ag(y)
if(m==null){m=n.ag(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ey(H.O(y),m))}}return z.$1(new H.jX(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eJ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aL(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eJ()
return a},
bx:function(a){var z
if(a==null)return new H.fy(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fy(a)},
mz:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mI:function(a,b,c,d,e,f){H.e(a,"$isd1")
switch(H.E(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var z
H.E(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=z
return z},
hu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isd){z.$reflectionInfo=d
x=H.iX(z).r}else x=d
w=e?Object.create(new H.jm().constructor.prototype):Object.create(new H.cT(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.F()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e1(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dX:H.cU
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e1(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hr:function(a,b,c,d){var z=H.cU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e1:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ht(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hr(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.F()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bB
if(v==null){v=H.ci("self")
$.bB=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.F()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bB
if(v==null){v=H.ci("self")
$.bB=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hs:function(a,b,c,d){var z,y
z=H.cU
y=H.dX
switch(b?-1:a){case 0:throw H.a(H.j6("Intercepted function with no arguments."))
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
z=$.bB
if(z==null){z=H.ci("self")
$.bB=z}y=$.dW
if(y==null){y=H.ci("receiver")
$.dW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hs(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aB
if(typeof y!=="number")return y.F()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.F()
$.aB=y+1
return new Function(z+y+"}")()},
dH:function(a,b,c,d,e,f,g){var z,y
z=J.bH(H.c1(b))
H.E(c)
y=!!J.J(d).$isd?J.bH(d):d
return H.hu(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.az(a,"String"))},
mx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"double"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.az(a,"num"))},
fW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.az(a,"bool"))},
E:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.az(a,"int"))},
h5:function(a,b){throw H.a(H.az(a,H.O(b).substring(3)))},
mY:function(a,b){var z=J.aK(b)
throw H.a(H.hq(a,z.v(b,3,z.gk(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.h5(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.mY(a,b)},
c1:function(a){if(a==null)return a
if(!!J.J(a).$isd)return a
throw H.a(H.az(a,"List"))},
h2:function(a,b){if(a==null)return a
if(!!J.J(a).$isd)return a
if(J.J(a)[b])return a
H.h5(a,b)},
fX:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.E(z)]
else return a.$S()}return},
ce:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fX(J.J(a))
if(z==null)return!1
y=H.h_(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dD)return a
$.dD=!0
try{if(H.ce(a,b))return a
z=H.cg(b)
y=H.az(a,z)
throw H.a(y)}finally{$.dD=!1}},
dJ:function(a,b){if(a!=null&&!H.dG(a,b))H.t(H.az(a,H.cg(b)))
return a},
fR:function(a){var z
if(a instanceof H.n){z=H.fX(J.J(a))
if(z!=null)return H.cg(z)
return"Closure"}return H.be(a)},
n2:function(a){throw H.a(new P.hD(H.O(a)))},
fY:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
p4:function(a,b,c){return H.by(a["$as"+H.l(c)],H.b3(b))},
aY:function(a,b,c,d){var z
H.O(c)
H.E(d)
z=H.by(a["$as"+H.l(c)],H.b3(b))
return z==null?null:z[d]},
at:function(a,b,c){var z
H.O(b)
H.E(c)
z=H.by(a["$as"+H.l(b)],H.b3(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.E(b)
z=H.b3(a)
return z==null?null:z[b]},
cg:function(a){var z=H.b4(a,null)
return z},
b4:function(a,b){var z,y
H.v(b,"$isd",[P.j],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dM(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.E(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.l(b[y])}if('func' in a)return H.mh(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.my(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dM:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.j],"$asd")
if(a==null)return""
z=new P.aq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}v="<"+z.i(0)+">"
return v},
by:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bu:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b3(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fU(H.by(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.c1(c)
H.O(d)
if(a==null)return a
z=H.bu(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dM(c,0,null)
throw H.a(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.au(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.au(a[y],b,c[y],d))return!1
return!0},
p2:function(a,b,c){return a.apply(b,H.by(J.J(b)["$as"+H.l(c)],H.b3(b)))},
h1:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.h1(z)}return!1},
dG:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.h1(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ce(a,b)}y=J.J(a).constructor
x=H.b3(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.au(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dG(a,b))throw H.a(H.az(a,H.cg(b)))
return a},
au:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.h_(a,b,c,d)
if('func' in a)return c.builtin$cls==="d1"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,x,d)
else if(H.au(a,b,x,d))return!0
else{if(!('$is'+"bF" in y.prototype))return!1
w=y.prototype["$as"+"bF"]
v=H.by(w,z?a.slice(1):null)
return H.au(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cg(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fU(H.by(r,z),b,u,d)},
h_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.au(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.au(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.au(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mV(m,b,l,d)},
mV:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.au(c[w],d,a[w],b))return!1}return!0},
p3:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mJ:function(a){var z,y,x,w,v,u
z=H.O($.fZ.$1(a))
y=$.cJ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cM[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fT.$2(a,z))
if(z!=null){y=$.cJ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cM[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cN(x)
$.cJ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cM[z]=x
return x}if(v==="-"){u=H.cN(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h4(a,x)
if(v==="*")throw H.a(P.cd(z))
if(init.leafTags[z]===true){u=H.cN(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h4(a,x)},
h4:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dN(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cN:function(a){return J.dN(a,!1,null,!!a.$isF)},
mU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cN(z)
else return J.dN(z,c,null,null)},
mG:function(){if(!0===$.dL)return
$.dL=!0
H.mH()},
mH:function(){var z,y,x,w,v,u,t,s
$.cJ=Object.create(null)
$.cM=Object.create(null)
H.mC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h6.$1(v)
if(u!=null){t=H.mU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mC:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bt(C.K,H.bt(C.P,H.bt(C.u,H.bt(C.u,H.bt(C.O,H.bt(C.L,H.bt(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fZ=new H.mD(v)
$.fT=new H.mE(u)
$.h6=new H.mF(t)},
bt:function(a,b){return a(b)||b},
h7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hy:{"^":"b;$ti",
i:function(a){return P.da(this)},
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
return H.hz()},
$isK:1},
hA:{"^":"hy;a,b,c,$ti",
gk:function(a){return this.a},
bz:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bz(0,b))return
return this.dg(b)},
dg:function(a){return this.b[H.O(a)]},
J:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.dg(v),z))}}},
iW:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bH(z)
y=z[0]
x=z[1]
return new H.iW(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jK:{"^":"b;a,b,c,d,e,f",
ag:function(a){var z,y,x
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
aG:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f0:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iD:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ey:function(a,b){return new H.iD(a,b==null?null:b.method)}}},
i5:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d8:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i5(a,y,z?null:b.receiver)}}},
jX:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n3:{"^":"n:16;a",
$1:function(a){if(!!J.J(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fy:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.be(this).trim()+"'"},
gev:function(){return this},
$isd1:1,
gev:function(){return this}},
eN:{"^":"n;"},
jm:{"^":"eN;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cT:{"^":"eN;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bO(this.a)
else y=typeof z!=="object"?J.b5(z):H.bO(z)
return(y^H.bO(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.be(z)+"'")},
p:{
cU:function(a){return a.a},
dX:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cT("self","target","receiver","name")
y=J.bH(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jL:{"^":"a5;a",
i:function(a){return this.a},
p:{
az:function(a,b){return new H.jL("TypeError: "+H.l(P.cn(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
hp:{"^":"a5;a",
i:function(a){return this.a},
p:{
hq:function(a,b){return new H.hp("CastError: "+H.l(P.cn(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
j5:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j6:function(a){return new H.j5(a)}}},
b1:{"^":"ij;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaq:function(a){return new H.i9(this,[H.x(this,0)])},
bz:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dd(y,b)}else return this.hG(b)},
hG:function(a){var z=this.d
if(z==null)return!1
return this.cE(this.c2(z,this.cD(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.br(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.br(w,b)
x=y==null?null:y.b
return x}else return this.hH(b)},
hH:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c2(z,this.cD(a))
x=this.cE(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c6()
this.b=z}this.d5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c6()
this.c=y}this.d5(y,b,c)}else this.hI(b,c)},
hI:function(a,b){var z,y,x,w
H.z(a,H.x(this,0))
H.z(b,H.x(this,1))
z=this.d
if(z==null){z=this.c6()
this.d=z}y=this.cD(a)
x=this.c2(z,y)
if(x==null)this.cb(z,y,[this.c7(a,b)])
else{w=this.cE(x,a)
if(w>=0)x[w].b=b
else x.push(this.c7(a,b))}},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b_(this))
z=z.c}},
d5:function(a,b,c){var z
H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
z=this.br(a,b)
if(z==null)this.cb(a,b,this.c7(b,c))
else z.b=c},
f8:function(){this.r=this.r+1&67108863},
c7:function(a,b){var z,y
z=new H.i8(H.z(a,H.x(this,0)),H.z(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f8()
return z},
cD:function(a){return J.b5(a)&0x3ffffff},
cE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a1(a[y].a,b))return y
return-1},
i:function(a){return P.da(this)},
br:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
cb:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
dd:function(a,b){return this.br(a,b)!=null},
c6:function(){var z=Object.create(null)
this.cb(z,"<non-identifier-key>",z)
this.f2(z,"<non-identifier-key>")
return z},
$isen:1},
i8:{"^":"b;a,b,0c,0d"},
i9:{"^":"hL;a,$ti",
gk:function(a){return this.a.a},
ga3:function(a){var z,y
z=this.a
y=new H.ia(z,z.r,this.$ti)
y.c=z.e
return y}},
ia:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b_(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mD:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
mE:{"^":"n:45;a",
$2:function(a,b){return this.a(a,b)}},
mF:{"^":"n:28;a",
$1:function(a){return this.a(H.O(a))}},
i3:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseA:1,
$isiY:1,
p:{
i4:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
my:function(a){return J.eh(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
br:function(a){return a},
iA:function(a){return new Int8Array(a)},
aI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aJ(b,a))},
mb:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mw(a,b,c))
return b},
ex:{"^":"q;",$isex:1,"%":"ArrayBuffer"},
df:{"^":"q;",$isdf:1,$isjM:1,"%":"DataView;ArrayBufferView;de|fs|ft|iB|fu|fv|b2"},
de:{"^":"df;",
gk:function(a){return a.length},
$isF:1,
$asF:I.dI},
iB:{"^":"ft;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
m:function(a,b,c){H.E(b)
H.mx(c)
H.aI(b,a,a.length)
a[b]=c},
$asco:function(){return[P.A]},
$asw:function(){return[P.A]},
$isi:1,
$asi:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
"%":"Float32Array|Float64Array"},
b2:{"^":"fv;",
m:function(a,b,c){H.E(b)
H.E(c)
H.aI(b,a,a.length)
a[b]=c},
$asco:function(){return[P.m]},
$asw:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
o9:{"^":"b2;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oa:{"^":"b2;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ob:{"^":"b2;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oc:{"^":"b2;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
od:{"^":"b2;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oe:{"^":"b2;",
gk:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dg:{"^":"b2;",
gk:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
bW:function(a,b,c){return new Uint8Array(a.subarray(b,H.mb(b,c,a.length)))},
$isdg:1,
$isQ:1,
"%":";Uint8Array"},
fs:{"^":"de+w;"},
ft:{"^":"fs+co;"},
fu:{"^":"de+w;"},
fv:{"^":"fu+co;"}}],["","",,P,{"^":"",
kt:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mo()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bv(new P.kv(z),1)).observe(y,{childList:true})
return new P.ku(z,y,x)}else if(self.setImmediate!=null)return P.mp()
return P.mq()},
oS:[function(a){self.scheduleImmediate(H.bv(new P.kw(H.f(a,{func:1,ret:-1})),0))},"$1","mo",4,0,11],
oT:[function(a){self.setImmediate(H.bv(new P.kx(H.f(a,{func:1,ret:-1})),0))},"$1","mp",4,0,11],
oU:[function(a){P.dr(C.r,H.f(a,{func:1,ret:-1}))},"$1","mq",4,0,11],
dr:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.a6(a.a,1000)
return P.lv(z<0?0:z,b)},
eQ:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bl]})
z=C.d.a6(a.a,1000)
return P.lw(z<0?0:z,b)},
mk:function(a,b){if(H.ce(a,{func:1,args:[P.b,P.ay]}))return b.i5(a,null,P.b,P.ay)
if(H.ce(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ch(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mj:function(){var z,y
for(;z=$.bs,z!=null;){$.bZ=null
y=z.b
$.bs=y
if(y==null)$.bY=null
z.a.$0()}},
p1:[function(){$.dE=!0
try{P.mj()}finally{$.bZ=null
$.dE=!1
if($.bs!=null)$.$get$dy().$1(P.fV())}},"$0","fV",0,0,3],
fQ:function(a){var z=new P.fl(H.f(a,{func:1,ret:-1}))
if($.bs==null){$.bY=z
$.bs=z
if(!$.dE)$.$get$dy().$1(P.fV())}else{$.bY.b=z
$.bY=z}},
mn:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bs
if(z==null){P.fQ(a)
$.bZ=$.bY
return}y=new P.fl(a)
x=$.bZ
if(x==null){y.b=z
$.bZ=y
$.bs=y}else{y.b=x.b
x.b=y
$.bZ=y
if(y.b==null)$.bY=y}},
mZ:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.i===y){P.cI(null,null,C.i,a)
return}y.toString
P.cI(null,null,y,H.f(y.ci(a),z))},
jG:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.i){y.toString
return P.dr(a,b)}return P.dr(a,H.f(y.ci(b),z))},
jH:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bl]}
H.f(b,z)
y=$.T
if(y===C.i){y.toString
return P.eQ(a,b)}x=y.dG(b,P.bl)
$.T.toString
return P.eQ(a,H.f(x,z))},
cH:function(a,b,c,d,e){var z={}
z.a=d
P.mn(new P.ml(z,e))},
fM:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fN:function(a,b,c,d,e,f,g){var z,y
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
cI:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.ci(d):c.hp(d,-1)
P.fQ(d)},
kv:{"^":"n:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ku:{"^":"n:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kw:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kx:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fC:{"^":"b;a,0b,c",
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.ly(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.lx(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbl:1,
p:{
lv:function(a,b){var z=new P.fC(!0,0)
z.eP(a,b)
return z},
lw:function(a,b){var z=new P.fC(!1,0)
z.eQ(a,b)
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
if(w>(y+1)*x)y=C.d.eG(w,x)}z.c=y
this.d.$1(z)}},
bq:{"^":"b;0a,b,c,d,e,$ti",
hP:function(a){if(this.c!==6)return!0
return this.b.b.cQ(H.f(this.d,{func:1,ret:P.ad,args:[P.b]}),a.a,P.ad,P.b)},
hF:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.ce(z,{func:1,args:[P.b,P.ay]}))return H.dJ(w.ia(z,a.a,a.b,null,y,P.ay),x)
else return H.dJ(w.cQ(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aV:{"^":"b;dz:a<,b,0fN:c<,$ti",
eq:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.i){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mk(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aV(0,$.T,[c])
w=b==null?1:3
this.d6(new P.bq(x,w,a,b,[z,c]))
return x},
ih:function(a,b){return this.eq(a,null,b)},
d6:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbq")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaV")
z=y.a
if(z<4){y.d6(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cI(null,null,z,H.f(new P.kM(this,a),{func:1,ret:-1}))}},
dq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbq")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaV")
y=u.a
if(y<4){u.dq(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cI(null,null,y,H.f(new P.kR(z,this),{func:1,ret:-1}))}},
c9:function(){var z=H.e(this.c,"$isbq")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d9:function(a){var z,y,x,w
z=H.x(this,0)
H.dJ(a,{futureOr:1,type:z})
y=this.$ti
x=H.bu(a,"$isbF",y,"$asbF")
if(x){z=H.bu(a,"$isaV",y,null)
if(z)P.fo(a,this)
else P.kN(a,this)}else{w=this.c9()
H.z(a,z)
this.a=4
this.c=a
P.bT(this,w)}},
bZ:[function(a,b){var z
H.e(b,"$isay")
z=this.c9()
this.a=8
this.c=new P.am(a,b)
P.bT(this,z)},function(a){return this.bZ(a,null)},"ip","$2","$1","geZ",4,2,29],
$isbF:1,
p:{
kN:function(a,b){var z,y,x
b.a=1
try{a.eq(new P.kO(b),new P.kP(b),null)}catch(x){z=H.av(x)
y=H.bx(x)
P.mZ(new P.kQ(b,z,y))}},
fo:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaV")
if(z>=4){y=b.c9()
b.a=a.a
b.c=a.c
P.bT(b,y)}else{y=H.e(b.c,"$isbq")
b.a=2
b.c=a
a.dq(y)}},
bT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isam")
y=y.b
u=v.a
t=v.b
y.toString
P.cH(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bT(z.a,b)}y=z.a
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
if(p){H.e(r,"$isam")
y=y.b
u=r.a
t=r.b
y.toString
P.cH(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kU(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kT(x,b,r).$0()}else if((y&2)!==0)new P.kS(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.J(y).$isbF){if(y.a>=4){n=H.e(t.c,"$isbq")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fo(y,t)
return}}m=b.b
n=H.e(m.c,"$isbq")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.z(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isam")
m.a=8
m.c=u}z.a=m
y=m}}}},
kM:{"^":"n:0;a,b",
$0:function(){P.bT(this.a,this.b)}},
kR:{"^":"n:0;a,b",
$0:function(){P.bT(this.b,this.a.a)}},
kO:{"^":"n:20;a",
$1:function(a){var z=this.a
z.a=0
z.d9(a)}},
kP:{"^":"n:51;a",
$2:function(a,b){this.a.bZ(a,H.e(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
kQ:{"^":"n:0;a,b,c",
$0:function(){this.a.bZ(this.b,this.c)}},
kU:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eo(H.f(w.d,{func:1}),null)}catch(v){y=H.av(v)
x=H.bx(v)
if(this.d){w=H.e(this.a.a.c,"$isam").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isam")
else u.b=new P.am(y,x)
u.a=!0
return}if(!!J.J(z).$isbF){if(z instanceof P.aV&&z.gdz()>=4){if(z.gdz()===8){w=this.b
w.b=H.e(z.gfN(),"$isam")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ih(new P.kV(t),null)
w.a=!1}}},
kV:{"^":"n:34;a",
$1:function(a){return this.a}},
kT:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.z(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cQ(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.av(t)
y=H.bx(t)
x=this.a
x.b=new P.am(z,y)
x.a=!0}}},
kS:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isam")
w=this.c
if(w.hP(z)&&w.e!=null){v=this.b
v.b=w.hF(z)
v.a=!1}}catch(u){y=H.av(u)
x=H.bx(u)
w=H.e(this.a.a.c,"$isam")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.am(y,x)
s.a=!0}}},
fl:{"^":"b;a,0b"},
dm:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.aV(0,$.T,[P.m])
z.a=0
this.hM(new P.jp(z,this),!0,new P.jq(z,y),y.geZ())
return y}},
jp:{"^":"n;a,b",
$1:function(a){H.z(a,H.at(this.b,"dm",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.at(this.b,"dm",0)]}}},
jq:{"^":"n:0;a,b",
$0:function(){this.b.d9(this.a.a)}},
eL:{"^":"b;$ti"},
jo:{"^":"b;"},
bl:{"^":"b;"},
am:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
m_:{"^":"b;",$isoR:1},
ml:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ez()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
le:{"^":"m_;",
ib:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.i===$.T){a.$0()
return}P.fM(null,null,this,a,-1)}catch(x){z=H.av(x)
y=H.bx(x)
P.cH(null,null,this,z,H.e(y,"$isay"))}},
ic:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.i===$.T){a.$1(b)
return}P.fN(null,null,this,a,b,-1,c)}catch(x){z=H.av(x)
y=H.bx(x)
P.cH(null,null,this,z,H.e(y,"$isay"))}},
hp:function(a,b){return new P.lg(this,H.f(a,{func:1,ret:b}),b)},
ci:function(a){return new P.lf(this,H.f(a,{func:1,ret:-1}))},
dG:function(a,b){return new P.lh(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
eo:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.i)return a.$0()
return P.fM(null,null,this,a,b)},
cQ:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.i)return a.$1(b)
return P.fN(null,null,this,a,b,c,d)},
ia:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.i)return a.$2(b,c)
return P.mm(null,null,this,a,b,c,d,e,f)},
i5:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
lg:{"^":"n;a,b,c",
$0:function(){return this.a.eo(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lf:{"^":"n:3;a,b",
$0:function(){return this.a.ib(this.b)}},
lh:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ic(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ib:function(a,b,c,d,e){return new H.b1(0,0,[d,e])},
ic:function(a,b,c){H.c1(a)
return H.v(H.mz(a,new H.b1(0,0,[b,c])),"$isen",[b,c],"$asen")},
eo:function(a,b){return new H.b1(0,0,[a,b])},
ie:function(a,b,c,d){return new P.l0(0,0,[d])},
i_:function(a,b,c){var z,y
if(P.dF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c_()
C.a.h(y,a)
try{P.mi(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eM(b,H.h2(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d4:function(a,b,c){var z,y,x
if(P.dF(a))return b+"..."+c
z=new P.aq(b)
y=$.$get$c_()
C.a.h(y,a)
try{x=z
x.a=P.eM(x.gaJ(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaJ()+c
y=z.gaJ()
return y.charCodeAt(0)==0?y:y},
dF:function(a){var z,y
for(z=0;y=$.$get$c_(),z<y.length;++z)if(a===y[z])return!0
return!1},
mi:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga3(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gS(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gS(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gS(z);++x
for(;z.G();t=s,s=r){r=z.gS(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ep:function(a,b,c){var z=P.ib(null,null,null,b,c)
a.J(0,new P.id(z,b,c))
return z},
da:function(a){var z,y,x
z={}
if(P.dF(a))return"{...}"
y=new P.aq("")
try{C.a.h($.$get$c_(),a)
x=y
x.a=x.gaJ()+"{"
z.a=!0
J.dR(a,new P.ik(z,y))
z=y
z.a=z.gaJ()+"}"}finally{z=$.$get$c_()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaJ()
return z.charCodeAt(0)==0?z:z},
l0:{"^":"kW;a,0b,0c,0d,0e,0f,r,$ti",
ga3:function(a){return P.fr(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dA()
this.b=z}return this.d7(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dA()
this.c=y}return this.d7(y,b)}else return this.eS(0,b)},
eS:function(a,b){var z,y,x
H.z(b,H.x(this,0))
z=this.d
if(z==null){z=P.dA()
this.d=z}y=this.da(b)
x=z[y]
if(x==null)z[y]=[this.bY(b)]
else{if(this.dh(x,b)>=0)return!1
x.push(this.bY(b))}return!0},
a_:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dr(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dr(this.c,b)
else return this.fI(0,b)},
fI:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f5(z,b)
x=this.dh(y,b)
if(x<0)return!1
this.dB(y.splice(x,1)[0])
return!0},
d7:function(a,b){H.z(b,H.x(this,0))
if(H.e(a[b],"$isdz")!=null)return!1
a[b]=this.bY(b)
return!0},
dr:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdz")
if(z==null)return!1
this.dB(z)
delete a[b]
return!0},
d8:function(){this.r=this.r+1&67108863},
bY:function(a){var z,y
z=new P.dz(H.z(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d8()
return z},
dB:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d8()},
da:function(a){return J.b5(a)&0x3ffffff},
f5:function(a,b){return a[this.da(b)]},
dh:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a1(a[y].a,b))return y
return-1},
p:{
dA:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dz:{"^":"b;a,0b,0c"},
l1:{"^":"b;a,b,0c,0d,$ti",
gS:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b_(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.x(this,0))
this.c=z.b
return!0}}},
p:{
fr:function(a,b,c){var z=new P.l1(a,b,[c])
z.c=a.e
return z}}},
kW:{"^":"j7;"},
id:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cs:{"^":"l2;",$isi:1,$isd:1},
w:{"^":"b;$ti",
ga3:function(a){return new H.eq(a,this.gk(a),0,[H.aY(this,a,"w",0)])},
K:function(a,b){return this.j(a,b)},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aY(this,a,"w",0)]})
z=this.gk(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gk(a))throw H.a(P.b_(a))}},
ik:function(a,b){var z,y,x
z=H.c([],[H.aY(this,a,"w",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ij:function(a){return this.ik(a,!0)},
aA:function(a,b,c,d){var z
H.z(d,H.aY(this,a,"w",0))
P.aO(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d4(a,"[","]")}},
ij:{"^":"ai;"},
ik:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aY(this,a,"ai",0),H.aY(this,a,"ai",1)]})
for(z=J.bA(this.gaq(a));z.G();){y=z.gS(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.aw(this.gaq(a))},
i:function(a){return P.da(a)},
$isK:1},
lD:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.x(this,0))
H.z(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
il:{"^":"b;$ti",
j:function(a,b){return J.dQ(this.a,b)},
m:function(a,b,c){J.cO(this.a,H.z(b,H.x(this,0)),H.z(c,H.x(this,1)))},
J:function(a,b){J.dR(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gk:function(a){return J.aw(this.a)},
i:function(a){return J.ab(this.a)},
$isK:1},
fb:{"^":"lE;a,$ti"},
j9:{"^":"b;$ti",
i:function(a){return P.d4(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dS("index"))
if(b<0)H.t(P.a2(b,0,null,"index",null))
for(z=P.fr(this,this.r,H.x(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isi:1},
j7:{"^":"j9;"},
l2:{"^":"b+w;"},
lE:{"^":"il+lD;$ti"}}],["","",,P,{"^":"",hm:{"^":"c3;a",
hS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aO(c,d,b.length,null,null,null)
z=$.$get$fm()
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
if(q<=d){p=H.cL(C.b.H(b,s))
o=H.cL(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aq("")
w.a+=C.b.v(b,x,y)
w.a+=H.cu(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dV(b,u,d,v,t,k)
else{j=C.d.bo(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aX(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dV(b,u,d,v,t,i)
else{j=C.d.bo(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aX(b,d,d,j===2?"==":"=")}return b},
$asc3:function(){return[[P.d,P.m],P.j]},
p:{
dV:function(a,b,c,d,e,f){if(C.d.bo(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hn:{"^":"bC;a",
$asbC:function(){return[[P.d,P.m],P.j]}},c3:{"^":"b;$ti"},bC:{"^":"jo;$ti"},hN:{"^":"c3;",
$asc3:function(){return[P.j,[P.d,P.m]]}},ka:{"^":"hN;a",
ghz:function(){return C.G}},kh:{"^":"bC;",
b8:function(a,b,c){var z,y,x,w
z=a.length
P.aO(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lZ(0,0,x)
if(w.f4(a,b,z)!==z)w.dC(J.he(a,z-1),0)
return C.W.bW(x,0,w.b)},
co:function(a){return this.b8(a,0,null)},
$asbC:function(){return[P.j,[P.d,P.m]]}},lZ:{"^":"b;a,b,c",
dC:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.h(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.h(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.h(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.h(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.h(z,y)
z[y]=128|a&63
return!1}},
f4:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dC(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.h(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.h(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.h(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.h(z,v)
z[v]=128|w&63}}return x}},kb:{"^":"bC;a",
b8:function(a,b,c){var z,y,x,w,v
H.v(a,"$isd",[P.m],"$asd")
z=P.kc(!1,a,b,c)
if(z!=null)return z
y=J.aw(a)
P.aO(b,c,y,null,null,null)
x=new P.aq("")
w=new P.lW(!1,x,!0,0,0,0)
w.b8(a,b,y)
w.hB(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
co:function(a){return this.b8(a,0,null)},
$asbC:function(){return[[P.d,P.m],P.j]},
p:{
kc:function(a,b,c,d){H.v(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.kd(!1,b,c,d)
return},
kd:function(a,b,c,d){var z,y,x
z=$.$get$ff()
if(z==null)return
y=0===c
if(y&&!0)return P.dw(z,b)
x=b.length
d=P.aO(c,d,x,null,null,null)
if(y&&d===x)return P.dw(z,b)
return P.dw(z,b.subarray(c,d))},
dw:function(a,b){if(P.kf(b))return
return P.kg(a,b)},
kg:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.av(y)}return},
kf:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ke:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.av(y)}return}}},lW:{"^":"b;a,b,c,d,e,f",
hB:function(a,b,c){var z
H.v(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lY(c)
v=new P.lX(this,b,c,a)
$label0$0:for(u=J.aK(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bS()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.d.bj(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.w,q)
if(z<=C.w[q]){q=P.a_("Overlong encoding of 0x"+C.d.bj(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.d.bj(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cu(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cV()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.d.bj(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.d.bj(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lY:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.aK(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bS()
if((w&127)!==w)return x-b}return z-b}},lX:{"^":"n:44;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cb(this.d,a,b)}}}],["","",,P,{"^":"",
c0:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.j]})
z=H.iQ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
hP:function(a){var z=J.J(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.be(a)+"'"},
ig:function(a,b,c,d){var z,y
H.z(b,d)
z=J.i1(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
er:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga3(a);x.G();)C.a.h(y,H.z(x.gS(x),c))
if(b)return y
return H.v(J.bH(y),"$isd",z,"$asd")},
cb:function(a,b,c){var z,y
z=P.m
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aO(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.eE(z?C.a.bW(a,b,c):a)}if(!!J.J(a).$isdg)return H.iS(a,b,P.aO(b,c,a.length,null,null,null))
return P.jr(a,b,c)},
jr:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a2(b,0,J.aw(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.aw(a),null,null))
y=J.bA(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gS(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gS(y))}return H.eE(w)},
iZ:function(a,b,c){return new H.i3(a,H.i4(a,!1,!0,!1))},
cB:function(){var z=H.iI()
if(z!=null)return P.k2(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
cn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hP(a)},
u:function(a){return new P.fn(a)},
ih:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dP:function(a){H.mX(a)},
k2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fc(b>0||c<c?C.b.v(a,b,c):a,5,null).ges()
else if(y===32)return P.fc(C.b.v(a,z,c),0,null).ges()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fO(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cU()
if(v>=b)if(P.fO(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.M()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.M()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.M()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ae(a,"..",s)))n=r>s+2&&C.b.ae(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ae(a,"file",b)){if(u<=b){if(!C.b.ae(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aX(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ae(a,"http",b)){if(x&&t+3===s&&C.b.ae(a,"80",t+1))if(b===0&&!0){a=C.b.aX(a,t,s,"")
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
else if(v===z&&C.b.ae(a,"https",b)){if(x&&t+4===s&&C.b.ae(a,"443",t+1))if(b===0&&!0){a=C.b.aX(a,t,s,"")
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
q-=b}return new P.lj(a,v,u,t,s,r,q,o)}return P.lF(a,b,c,v,u,t,s,r,q,o)},
fe:function(a,b){var z=P.j
return C.a.hC(H.c(a.split("&"),[z]),P.eo(z,z),new P.k5(b),[P.K,P.j,P.j])},
k0:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k1(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c0(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cV()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c0(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cV()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k3(a)
y=new P.k4(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaC(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k0(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.d.aO(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
mc:function(){var z,y,x,w,v
z=P.ih(22,new P.me(),!0,P.Q)
y=new P.md(z)
x=new P.mf()
w=new P.mg()
v=H.e(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isQ"),"]",5)
v=H.e(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isQ"),"az",21)
v=H.e(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fO:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isd",[P.m],"$asd")
z=$.$get$fP()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ad:{"^":"b;"},
"+bool":0,
ao:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.d.aO(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hE(H.iP(this))
y=P.c4(H.iN(this))
x=P.c4(H.iJ(this))
w=P.c4(H.iK(this))
v=P.c4(H.iM(this))
u=P.c4(H.iO(this))
t=P.hF(H.iL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hE:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c4:function(a){if(a>=10)return""+a
return"0"+a}}},
A:{"^":"Y;"},
"+double":0,
bD:{"^":"b;a",
M:function(a,b){return C.d.M(this.a,H.e(b,"$isbD").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bD))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hK()
y=this.a
if(y<0)return"-"+new P.bD(0-y).i(0)
x=z.$1(C.d.a6(y,6e7)%60)
w=z.$1(C.d.a6(y,1e6)%60)
v=new P.hJ().$1(y%1e6)
return""+C.d.a6(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
eb:function(a,b,c,d,e,f){return new P.bD(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hJ:{"^":"n:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hK:{"^":"n:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
ez:{"^":"a5;",
i:function(a){return"Throw of null."}},
aL:{"^":"a5;a,b,c,d",
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gc0()+y+x
if(!this.a)return w
v=this.gc_()
u=P.cn(this.b)
return w+v+": "+H.l(u)},
p:{
c2:function(a){return new P.aL(!1,null,null,a)},
ch:function(a,b,c){return new P.aL(!0,a,b,c)},
dS:function(a){return new P.aL(!1,null,a,"Must not be null")}}},
cv:{"^":"aL;e,f,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cw:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
aO:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
hY:{"^":"aL;e,k:f>,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){if(J.ha(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.E(e!=null?e:J.aw(b))
return new P.hY(b,z,!0,a,c,"Index out of range")}}},
jZ:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
B:function(a){return new P.jZ(a)}}},
jW:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
cd:function(a){return new P.jW(a)}}},
jl:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hx:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cn(z))+"."},
p:{
b_:function(a){return new P.hx(a)}}},
iE:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eJ:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hD:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fn:{"^":"b;a",
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
p:{
a_:function(a,b,c){return new P.hU(a,b,c)}}},
m:{"^":"Y;"},
"+int":0,
i:{"^":"b;$ti",
gk:function(a){var z,y
z=this.ga3(this)
for(y=0;z.G();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dS("index"))
if(b<0)H.t(P.a2(b,0,null,"index",null))
for(z=this.ga3(this),y=0;z.G();){x=z.gS(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.i_(this,"(",")")}},
d5:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
G:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gU:function(a){return H.bO(this)},
i:function(a){return"Instance of '"+H.be(this)+"'"},
toString:function(){return this.i(this)}},
ay:{"^":"b;"},
j:{"^":"b;",$iseA:1},
"+String":0,
aq:{"^":"b;aJ:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoB:1,
p:{
eM:function(a,b,c){var z=J.bA(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gS(z))
while(z.G())}else{a+=H.l(z.gS(z))
for(;z.G();)a=a+c+H.l(z.gS(z))}return a}}},
k5:{"^":"n:38;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isK",[z,z],"$asK")
H.O(b)
y=J.aK(b).ee(b,"=")
if(y===-1){if(b!=="")J.cO(a,P.dC(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aF(b,y+1)
z=this.a
J.cO(a,P.dC(x,0,x.length,z,!0),P.dC(w,0,w.length,z,!0))}return a}},
k1:{"^":"n:26;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
k3:{"^":"n:30;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k4:{"^":"n:46;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c0(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cE:{"^":"b;bU:a<,b,c,d,em:e>,f,r,0x,0y,0z,0Q,0ch",
geu:function(){return this.b},
gcC:function(a){var z=this.c
if(z==null)return""
if(C.b.ad(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbN:function(a){var z=this.d
if(z==null)return P.fE(this.a)
return z},
gcN:function(a){var z=this.f
return z==null?"":z},
ge9:function(){var z=this.r
return z==null?"":z},
cP:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.j,null],"$asK")
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
if(x&&!C.b.ad(d,"/"))d="/"+d
g=P.dB(g,0,0,h)
return new P.cE(i,j,c,f,d,g,this.r)},
cO:function(a,b){return this.cP(a,null,null,null,null,null,null,b,null,null)},
gbe:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fb(P.fe(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gea:function(){return this.c!=null},
ged:function(){return this.f!=null},
geb:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdv){y=this.a
x=b.gbU()
if(y==null?x==null:y===x)if(this.c!=null===b.gea()){y=this.b
x=b.geu()
if(y==null?x==null:y===x){y=this.gcC(this)
x=z.gcC(b)
if(y==null?x==null:y===x){y=this.gbN(this)
x=z.gbN(b)
if(y==null?x==null:y===x)if(this.e===z.gem(b)){y=this.f
x=y==null
if(!x===b.ged()){if(x)y=""
if(y===z.gcN(b)){z=this.r
y=z==null
if(!y===b.geb()){if(y)z=""
z=z===b.ge9()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdv:1,
p:{
cF:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.m],"$asd")
if(c===C.k){z=$.$get$fJ().b
if(typeof b!=="string")H.t(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.at(c,"c3",0))
y=c.ghz().co(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cu(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lF:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lQ(a,b,d)
else{if(d===b)P.bV(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lR(a,z,e-1):""
x=P.lK(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lN(P.c0(C.b.v(a,w,g),new P.lG(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lL(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dB(a,h+1,i,null):null
return new P.cE(j,y,x,v,u,t,i<c?P.lJ(a,i+1,c):null)},
fE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bV:function(a,b,c){throw H.a(P.a_(c,a,b))},
lN:function(a,b){if(a!=null&&a===P.fE(b))return
return a},
lK:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.O()
z=c-1
if(C.b.Z(a,z)!==93)P.bV(a,b,"Missing end `]` to match `[` in host")
P.fd(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.fd(a,b,c)
return"["+a+"]"}return P.lT(a,b,c)},
lT:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fL(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aq("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aq("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bV(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aq("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fF(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lQ:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fH(C.b.H(a,b)))P.bV(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bV(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lH(y?a.toLowerCase():a)},
lH:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lR:function(a,b,c){return P.bW(a,b,c,C.S)},
lL:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bW(a,b,c,C.y):C.t.j_(d,new P.lM(),P.j).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ad(w,"/"))w="/"+w
return P.lS(w,e,f)},
lS:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ad(a,"/"))return P.lU(a,!z||c)
return P.lV(a)},
dB:function(a,b,c,d){var z,y
z={}
H.v(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.c2("Both query and queryParameters specified"))
return P.bW(a,b,c,C.n)}if(d==null)return
y=new P.aq("")
z.a=""
d.J(0,new P.lO(new P.lP(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lJ:function(a,b,c){return P.bW(a,b,c,C.n)},
fL:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cL(y)
v=H.cL(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aO(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cu(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fF:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.fS(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cb(y,0,null)},
bW:function(a,b,c,d){var z=P.fK(a,b,c,H.v(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
fK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fL(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bV(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fF(v)}}if(w==null)w=new P.aq("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fI:function(a){if(C.b.ad(a,"."))return!0
return C.b.ee(a,"/.")!==-1},
lV:function(a){var z,y,x,w,v,u,t
if(!P.fI(a))return a
z=H.c([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.a1(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
lU:function(a,b){var z,y,x,w,v,u
if(!P.fI(a))return!b?P.fG(a):a
z=H.c([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaC(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaC(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.m(z,0,P.fG(z[0]))}return C.a.E(z,"/")},
fG:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fH(J.hb(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aF(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lI:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c2("Invalid URL encoding"))}}return z},
dC:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dK(a)
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
else u=new H.a4(y.v(a,b,c))}else{u=H.c([],[P.m])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.c2("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c2("Truncated URI"))
C.a.h(u,P.lI(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isd",[P.m],"$asd")
return new P.kb(!1).co(u)},
fH:function(a){var z=a|32
return 97<=z&&z<=122}}},
lG:{"^":"n:17;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
lM:{"^":"n:39;",
$1:function(a){return P.cF(C.U,a,C.k,!1)}},
lP:{"^":"n:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cF(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cF(C.p,b,C.k,!0))}}},
lO:{"^":"n:50;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bA(H.h2(b,"$isi")),y=this.a;z.G();)y.$2(a,H.O(z.gS(z)))}},
k_:{"^":"b;a,b,c",
ges:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.ef(y,"?",z)
w=y.length
if(x>=0){v=P.bW(y,x+1,w,C.n)
w=x}else v=null
z=new P.kC(this,"data",null,null,null,P.bW(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fc:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaC(z)
if(v!==44||x!==t+7||!C.b.ae(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.D.hS(0,a,s,y)
else{r=P.fK(a,s,y,C.n,!0)
if(r!=null)a=C.b.aX(a,s,y,r)}return new P.k_(a,z,c)}}},
me:{"^":"n:40;",
$1:function(a){return new Uint8Array(96)}},
md:{"^":"n:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hf(z,0,96,b)
return z}},
mf:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mg:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
lj:{"^":"b;a,b,c,d,e,f,r,x,0y",
gea:function(){return this.c>0},
gec:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
ged:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
geb:function(){return this.r<this.a.length},
gdi:function(){return this.b===4&&C.b.ad(this.a,"http")},
gdj:function(){return this.b===5&&C.b.ad(this.a,"https")},
gbU:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdi()){this.x="http"
z="http"}else if(this.gdj()){this.x="https"
z="https"}else if(z===4&&C.b.ad(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ad(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geu:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcC:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbN:function(a){var z
if(this.gec()){z=this.d
if(typeof z!=="number")return z.F()
return P.c0(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdi())return 80
if(this.gdj())return 443
return 0},
gem:function(a){return C.b.v(this.a,this.e,this.f)},
gcN:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.v(this.a,z+1,y):""},
ge9:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aF(y,z+1):""},
gbe:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.V
z=P.j
return new P.fb(P.fe(this.gcN(this),C.k),[z,z])},
cP:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.j,null],"$asK")
i=this.gbU()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gec()?this.gbN(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ad(d,"/"))d="/"+d
g=P.dB(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aF(y,x+1)
return new P.cE(i,j,c,f,d,g,b)},
cO:function(a,b){return this.cP(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.J(b)
if(!!z.$isdv)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdv:1},
kC:{"^":"cE;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cX:function(a,b){var z=document.createElement("canvas")
return z},
hM:function(a){H.e(a,"$isa7")
return"wheel"},
d3:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hZ:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseg")
try{J.hh(z,a)}catch(x){H.av(x)}return z},
cD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fq:function(a,b,c,d){var z,y
z=W.cD(W.cD(W.cD(W.cD(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fS:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.i)return a
return z.dG(a,b)},
a8:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n5:{"^":"dj;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
n6:{"^":"q;0k:length=","%":"AccessibleNodeList"},
n7:{"^":"a8;0a4:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
n8:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cS:{"^":"q;",$iscS:1,"%":";Blob"},
ne:{"^":"a8;0a4:type}","%":"HTMLButtonElement"},
cW:{"^":"a8;",
bT:function(a,b,c){if(c!=null)return a.getContext(b,P.ms(c,null))
return a.getContext(b)},
ew:function(a,b){return this.bT(a,b,null)},
$iscW:1,
"%":"HTMLCanvasElement"},
e_:{"^":"q;",$ise_:1,"%":"CanvasRenderingContext2D"},
ng:{"^":"M;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ni:{"^":"cl;0k:length=","%":"CSSPerspective"},
nj:{"^":"d_;0q:x=,0t:y=","%":"CSSPositionValue"},
nk:{"^":"cl;0q:x=,0t:y=","%":"CSSRotation"},
b6:{"^":"q;",$isb6:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nl:{"^":"cl;0q:x=,0t:y=","%":"CSSScale"},
nm:{"^":"kB;0k:length=",
ex:function(a,b){var z=a.getPropertyValue(this.eW(a,b))
return z==null?"":z},
eW:function(a,b){var z,y
z=$.$get$e4()
y=z[b]
if(typeof y==="string")return y
y=this.fT(a,b)
z[b]=y
return y},
fT:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hG()+b
if(z in a)return z
return b},
gcj:function(a){return a.bottom},
gap:function(a){return a.height},
gaV:function(a){return a.left},
gbf:function(a){return a.right},
gbl:function(a){return a.top},
gar:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hC:{"^":"b;",
gaV:function(a){return this.ex(a,"left")}},
d_:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cl:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nn:{"^":"d_;0k:length=","%":"CSSTransformValue"},
no:{"^":"cl;0q:x=,0t:y=","%":"CSSTranslation"},
np:{"^":"d_;0k:length=","%":"CSSUnparsedValue"},
nq:{"^":"q;0k:length=","%":"DataTransferItemList"},
nr:{"^":"q;0q:x=,0t:y=","%":"DeviceAcceleration"},
ns:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
nt:{"^":"hH;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hH:{"^":"q;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nu:{"^":"kE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.v(c,"$isa9",[P.Y],"$asa9")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a9,P.Y]]},
$asw:function(){return[[P.a9,P.Y]]},
$isi:1,
$asi:function(){return[[P.a9,P.Y]]},
$isd:1,
$asd:function(){return[[P.a9,P.Y]]},
$asD:function(){return[[P.a9,P.Y]]},
"%":"ClientRectList|DOMRectList"},
hI:{"^":"q;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gar(a))+" x "+H.l(this.gap(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.bu(b,"$isa9",[P.Y],"$asa9")
if(!z)return!1
z=J.aX(b)
return a.left===z.gaV(b)&&a.top===z.gbl(b)&&this.gar(a)===z.gar(b)&&this.gap(a)===z.gap(b)},
gU:function(a){return W.fq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF,this.gap(a)&0x1FFFFFFF)},
gcj:function(a){return a.bottom},
gap:function(a){return a.height},
gaV:function(a){return a.left},
gbf:function(a){return a.right},
gbl:function(a){return a.top},
gar:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
nv:{"^":"kG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.j]},
$asw:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"DOMStringList"},
nw:{"^":"q;0k:length=","%":"DOMTokenList"},
kA:{"^":"cs;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.e(z[b],"$isW")},
m:function(a,b,c){var z
H.E(b)
H.e(c,"$isW")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga3:function(a){var z=this.ij(this)
return new J.ax(z,z.length,0,[H.x(z,0)])},
aA:function(a,b,c,d){throw H.a(P.cd(null))},
$asw:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
W:{"^":"M;",
gcn:function(a){return new W.kA(a,a.children)},
gby:function(a){return P.iV(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isW:1,
"%":";Element"},
nx:{"^":"a8;0a4:type}","%":"HTMLEmbedElement"},
a6:{"^":"q;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"q;",
dE:["eB",function(a,b,c,d){H.f(c,{func:1,args:[W.a6]})
if(c!=null)this.eT(a,b,c,!1)}],
eT:function(a,b,c,d){return a.addEventListener(b,H.bv(H.f(c,{func:1,args:[W.a6]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fw|fx|fA|fB"},
b0:{"^":"cS;",$isb0:1,"%":"File"},
ed:{"^":"kL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isb0")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b0]},
$asw:function(){return[W.b0]},
$isi:1,
$asi:function(){return[W.b0]},
$isd:1,
$asd:function(){return[W.b0]},
$ised:1,
$asD:function(){return[W.b0]},
"%":"FileList"},
nQ:{"^":"a7;0k:length=","%":"FileWriter"},
nT:{"^":"a8;0k:length=","%":"HTMLFormElement"},
b8:{"^":"q;",$isb8:1,"%":"Gamepad"},
nU:{"^":"dj;0q:x=,0t:y=","%":"Gyroscope"},
nV:{"^":"q;0k:length=","%":"History"},
nW:{"^":"kY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asD:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c5:{"^":"q;0dK:data=",$isc5:1,"%":"ImageData"},
d2:{"^":"a8;",$isd2:1,"%":"HTMLImageElement"},
eg:{"^":"a8;0a4:type}",$iseg:1,"%":"HTMLInputElement"},
bI:{"^":"ds;",$isbI:1,"%":"KeyboardEvent"},
o0:{"^":"a8;0a4:type}","%":"HTMLLinkElement"},
o1:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
o2:{"^":"dj;0q:x=,0t:y=","%":"Magnetometer"},
o4:{"^":"q;0k:length=","%":"MediaList"},
o5:{"^":"a7;",
dE:function(a,b,c,d){H.f(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.eB(a,b,c,!1)},
"%":"MessagePort"},
o6:{"^":"l3;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.j])
this.J(a,new W.ix(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
ix:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o7:{"^":"l4;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.j])
this.J(a,new W.iy(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iy:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"q;",$isbc:1,"%":"MimeType"},
o8:{"^":"l6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asw:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"MimeTypeArray"},
ae:{"^":"ds;",$isae:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kz:{"^":"cs;a",
m:function(a,b,c){var z,y
H.E(b)
H.e(c,"$isM")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga3:function(a){var z=this.a.childNodes
return new W.ee(z,z.length,-1,[H.aY(C.X,z,"D",0)])},
aA:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asw:function(){return[W.M]},
$asi:function(){return[W.M]},
$asd:function(){return[W.M]}},
M:{"^":"a7;",
i7:function(a,b){var z,y
try{z=a.parentNode
J.hc(z,b,a)}catch(y){H.av(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eC(a):z},
fJ:function(a,b,c){return a.replaceChild(b,c)},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iC:{"^":"l8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asD:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
og:{"^":"a8;0a4:type}","%":"HTMLOListElement"},
oh:{"^":"a8;0a4:type}","%":"HTMLObjectElement"},
bd:{"^":"q;0k:length=",$isbd:1,"%":"Plugin"},
ol:{"^":"lc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbd")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asw:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asD:function(){return[W.bd]},
"%":"PluginArray"},
oq:{"^":"q;0a4:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
or:{"^":"li;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.j])
this.J(a,new W.j4(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
j4:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
os:{"^":"a8;0a4:type}","%":"HTMLScriptElement"},
ou:{"^":"a8;0k:length=","%":"HTMLSelectElement"},
dj:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bf:{"^":"a7;",$isbf:1,"%":"SourceBuffer"},
ov:{"^":"fx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbf")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asD:function(){return[W.bf]},
"%":"SourceBufferList"},
ow:{"^":"a8;0a4:type}","%":"HTMLSourceElement"},
bg:{"^":"q;",$isbg:1,"%":"SpeechGrammar"},
ox:{"^":"ll;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asw:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"SpeechGrammarList"},
bh:{"^":"q;0k:length=",$isbh:1,"%":"SpeechRecognitionResult"},
oz:{"^":"lo;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaq:function(a){var z=H.c([],[P.j])
this.J(a,new W.jn(z))
return z},
gk:function(a){return a.length},
$asai:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
jn:{"^":"n:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oC:{"^":"a8;0a4:type}","%":"HTMLStyleElement"},
bi:{"^":"q;",$isbi:1,"%":"CSSStyleSheet|StyleSheet"},
dn:{"^":"a8;",$isdn:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrack"},
bk:{"^":"a7;",$isbk:1,"%":"TextTrackCue|VTTCue"},
oH:{"^":"lu;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asw:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"TextTrackCueList"},
oI:{"^":"fB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asw:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"TextTrackList"},
oJ:{"^":"q;0k:length=","%":"TimeRanges"},
bm:{"^":"q;",$isbm:1,"%":"Touch"},
bn:{"^":"ds;",$isbn:1,"%":"TouchEvent"},
oK:{"^":"lA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bm]},
$asw:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"TouchList"},
oL:{"^":"q;0k:length=","%":"TrackDefaultList"},
ds:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oN:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
oP:{"^":"q;0q:x=","%":"VRStageBoundsPoint"},
oQ:{"^":"a7;0k:length=","%":"VideoTrackList"},
bS:{"^":"ae;",
ghx:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbS:1,
"%":"WheelEvent"},
ks:{"^":"a7;",
fK:function(a,b){return a.requestAnimationFrame(H.bv(H.f(b,{func:1,ret:-1,args:[P.Y]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oV:{"^":"m1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isb6")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asw:function(){return[W.b6]},
$isi:1,
$asi:function(){return[W.b6]},
$isd:1,
$asd:function(){return[W.b6]},
$asD:function(){return[W.b6]},
"%":"CSSRuleList"},
oW:{"^":"hI;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.bu(b,"$isa9",[P.Y],"$asa9")
if(!z)return!1
z=J.aX(b)
return a.left===z.gaV(b)&&a.top===z.gbl(b)&&a.width===z.gar(b)&&a.height===z.gap(b)},
gU:function(a){return W.fq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gap:function(a){return a.height},
gar:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
oY:{"^":"m3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isb8")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asw:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$asD:function(){return[W.b8]},
"%":"GamepadList"},
oZ:{"^":"m5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isM")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.M]},
$asw:function(){return[W.M]},
$isi:1,
$asi:function(){return[W.M]},
$isd:1,
$asd:function(){return[W.M]},
$asD:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
p_:{"^":"m7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asw:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asD:function(){return[W.bh]},
"%":"SpeechRecognitionResultList"},
p0:{"^":"m9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.E(b)
H.e(c,"$isbi")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asw:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asD:function(){return[W.bi]},
"%":"StyleSheetList"},
kH:{"^":"dm;a,b,c,$ti",
hM:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
oX:{"^":"kH;a,b,c,$ti"},
kI:{"^":"eL;a,b,c,d,e,$ti",
fX:function(){var z=this.d
if(z!=null&&this.a<=0)J.hd(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fS(new W.kJ(c),W.a6)
z=new W.kI(0,a,b,z,!1,[e])
z.fX()
return z}}},
kJ:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.e(a,"$isa6"))}},
D:{"^":"b;$ti",
ga3:function(a){return new W.ee(a,this.gk(a),-1,[H.aY(this,a,"D",0)])},
aA:function(a,b,c,d){H.z(d,H.aY(this,a,"D",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
ee:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dQ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gS:function(a){return this.d}},
kB:{"^":"q+hC;"},
kD:{"^":"q+w;"},
kE:{"^":"kD+D;"},
kF:{"^":"q+w;"},
kG:{"^":"kF+D;"},
kK:{"^":"q+w;"},
kL:{"^":"kK+D;"},
kX:{"^":"q+w;"},
kY:{"^":"kX+D;"},
l3:{"^":"q+ai;"},
l4:{"^":"q+ai;"},
l5:{"^":"q+w;"},
l6:{"^":"l5+D;"},
l7:{"^":"q+w;"},
l8:{"^":"l7+D;"},
lb:{"^":"q+w;"},
lc:{"^":"lb+D;"},
li:{"^":"q+ai;"},
fw:{"^":"a7+w;"},
fx:{"^":"fw+D;"},
lk:{"^":"q+w;"},
ll:{"^":"lk+D;"},
lo:{"^":"q+ai;"},
lt:{"^":"q+w;"},
lu:{"^":"lt+D;"},
fA:{"^":"a7+w;"},
fB:{"^":"fA+D;"},
lz:{"^":"q+w;"},
lA:{"^":"lz+D;"},
m0:{"^":"q+w;"},
m1:{"^":"m0+D;"},
m2:{"^":"q+w;"},
m3:{"^":"m2+D;"},
m4:{"^":"q+w;"},
m5:{"^":"m4+D;"},
m6:{"^":"q+w;"},
m7:{"^":"m6+D;"},
m8:{"^":"q+w;"},
m9:{"^":"m8+D;"}}],["","",,P,{"^":"",
mv:function(a){var z,y
z=J.J(a)
if(!!z.$isc5){y=z.gdK(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fD(a.data,a.height,a.width)},
mu:function(a){if(a instanceof P.fD)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var z,y,x,w,v
if(a==null)return
z=P.eo(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
ms:function(a,b){var z={}
a.J(0,new P.mt(z))
return z},
ea:function(){var z=$.e9
if(z==null){z=J.cP(window.navigator.userAgent,"Opera",0)
$.e9=z}return z},
hG:function(){var z,y
z=$.e6
if(z!=null)return z
y=$.e7
if(y==null){y=J.cP(window.navigator.userAgent,"Firefox",0)
$.e7=y}if(y)z="-moz-"
else{y=$.e8
if(y==null){y=!P.ea()&&J.cP(window.navigator.userAgent,"Trident/",0)
$.e8=y}if(y)z="-ms-"
else z=P.ea()?"-o-":"-webkit-"}$.e6=z
return z},
lr:{"^":"b;",
e7:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bR:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.J(a)
if(!!y.$isao)return new Date(a.a)
if(!!y.$isiY)throw H.a(P.cd("structured clone of RegExp"))
if(!!y.$isb0)return a
if(!!y.$iscS)return a
if(!!y.$ised)return a
if(!!y.$isc5)return a
if(!!y.$isex||!!y.$isdf)return a
if(!!y.$isK){x=this.e7(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.J(a,new P.ls(z,this))
return z.a}if(!!y.$isd){x=this.e7(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.hu(a,x)}throw H.a(P.cd("structured clone of other type"))},
hu:function(a,b){var z,y,x,w
z=J.aK(a)
y=z.gk(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.bR(z.j(a,w)))
return x}},
ls:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.bR(b)}},
fD:{"^":"b;dK:a>,b,c",$isc5:1},
mt:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
fz:{"^":"lr;a,b"},
hR:{"^":"cs;a,b",
gb0:function(){var z,y,x
z=this.b
y=H.at(z,"w",0)
x=W.W
return new H.im(new H.kq(z,H.f(new P.hS(),{func:1,ret:P.ad,args:[y]}),[y]),H.f(new P.hT(),{func:1,ret:x,args:[y]}),[y,x])},
J:function(a,b){H.f(b,{func:1,ret:-1,args:[W.W]})
C.a.J(P.er(this.gb0(),!1,W.W),b)},
m:function(a,b,c){var z
H.E(b)
H.e(c,"$isW")
z=this.gb0()
J.hg(z.b.$1(J.cQ(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aA:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gk:function(a){return J.aw(this.gb0().a)},
j:function(a,b){var z=this.gb0()
return z.b.$1(J.cQ(z.a,b))},
ga3:function(a){var z=P.er(this.gb0(),!1,W.W)
return new J.ax(z,z.length,0,[H.x(z,0)])},
$asw:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
hS:{"^":"n:25;",
$1:function(a){return!!J.J(H.e(a,"$isM")).$isW}},
hT:{"^":"n:27;",
$1:function(a){return H.k(H.e(a,"$isM"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ca:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
A:function(a,b){var z,y,x
if(b==null)return!1
z=H.bu(b,"$isca",[P.Y],null)
if(!z)return!1
z=this.a
y=J.aX(b)
x=y.gq(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.b5(this.a)
y=J.b5(this.b)
return P.fp(P.bU(P.bU(0,z),y))}},
ld:{"^":"b;$ti",
gbf:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.z(z+this.c,H.x(this,0))},
gcj:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.z(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bu(b,"$isa9",[P.Y],"$asa9")
if(!z)return!1
z=this.a
y=J.aX(b)
x=y.gaV(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbl(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.x(this,0)
if(H.z(z+this.c,w)===y.gbf(b)){if(typeof x!=="number")return x.F()
z=H.z(x+this.d,w)===y.gcj(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.b5(z)
x=this.b
w=J.b5(x)
if(typeof z!=="number")return z.F()
v=H.x(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.z(x+this.d,v)
return P.fp(P.bU(P.bU(P.bU(P.bU(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dJ:function(a,b){var z,y
H.v(b,"$isca",[P.Y],"$asca")
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
a9:{"^":"ld;aV:a>,bl:b>,ar:c>,ap:d>,$ti",p:{
iV:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",ny:{"^":"V;0q:x=,0t:y=","%":"SVGFEBlendElement"},nz:{"^":"V;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nA:{"^":"V;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nB:{"^":"V;0q:x=,0t:y=","%":"SVGFECompositeElement"},nC:{"^":"V;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nD:{"^":"V;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nE:{"^":"V;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nF:{"^":"V;0q:x=,0t:y=","%":"SVGFEFloodElement"},nG:{"^":"V;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nH:{"^":"V;0q:x=,0t:y=","%":"SVGFEImageElement"},nI:{"^":"V;0q:x=,0t:y=","%":"SVGFEMergeElement"},nJ:{"^":"V;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nK:{"^":"V;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nL:{"^":"V;0q:x=,0t:y=","%":"SVGFEPointLightElement"},nM:{"^":"V;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},nN:{"^":"V;0q:x=,0t:y=","%":"SVGFESpotLightElement"},nO:{"^":"V;0q:x=,0t:y=","%":"SVGFETileElement"},nP:{"^":"V;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},nR:{"^":"V;0q:x=,0t:y=","%":"SVGFilterElement"},nS:{"^":"bG;0q:x=,0t:y=","%":"SVGForeignObjectElement"},hW:{"^":"bG;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bG:{"^":"V;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},nX:{"^":"bG;0q:x=,0t:y=","%":"SVGImageElement"},bJ:{"^":"q;",$isbJ:1,"%":"SVGLength"},o_:{"^":"l_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.e(c,"$isbJ")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bJ]},
$isi:1,
$asi:function(){return[P.bJ]},
$isd:1,
$asd:function(){return[P.bJ]},
$asD:function(){return[P.bJ]},
"%":"SVGLengthList"},o3:{"^":"V;0q:x=,0t:y=","%":"SVGMaskElement"},bM:{"^":"q;",$isbM:1,"%":"SVGNumber"},of:{"^":"la;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.e(c,"$isbM")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asD:function(){return[P.bM]},
"%":"SVGNumberList"},ok:{"^":"V;0q:x=,0t:y=","%":"SVGPatternElement"},om:{"^":"q;0q:x=,0t:y=","%":"SVGPoint"},on:{"^":"q;0k:length=","%":"SVGPointList"},oo:{"^":"q;0q:x=,0t:y=","%":"SVGRect"},op:{"^":"hW;0q:x=,0t:y=","%":"SVGRectElement"},ot:{"^":"V;0a4:type}","%":"SVGScriptElement"},oA:{"^":"lq;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.j]},
$isi:1,
$asi:function(){return[P.j]},
$isd:1,
$asd:function(){return[P.j]},
$asD:function(){return[P.j]},
"%":"SVGStringList"},oD:{"^":"V;0a4:type}","%":"SVGStyleElement"},V:{"^":"W;",
gcn:function(a){return new P.hR(a,new W.kz(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oE:{"^":"bG;0q:x=,0t:y=","%":"SVGSVGElement"},js:{"^":"bG;","%":"SVGTextPathElement;SVGTextContentElement"},oG:{"^":"js;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bP:{"^":"q;",$isbP:1,"%":"SVGTransform"},oM:{"^":"lC;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.E(b)
H.e(c,"$isbP")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$isd:1,
$asd:function(){return[P.bP]},
$asD:function(){return[P.bP]},
"%":"SVGTransformList"},oO:{"^":"bG;0q:x=,0t:y=","%":"SVGUseElement"},kZ:{"^":"q+w;"},l_:{"^":"kZ+D;"},l9:{"^":"q+w;"},la:{"^":"l9+D;"},lp:{"^":"q+w;"},lq:{"^":"lp+D;"},lB:{"^":"q+w;"},lC:{"^":"lB+D;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isjM:1}}],["","",,P,{"^":"",n9:{"^":"q;0k:length=","%":"AudioBuffer"},dU:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},na:{"^":"ky;",
j:function(a,b){return P.aW(a.get(H.O(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aW(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.j])
this.J(a,new P.hk(z))
return z},
gk:function(a){return a.size},
m:function(a,b,c){throw H.a(P.B("Not supported"))},
$asai:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},hk:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hl:{"^":"dU;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nb:{"^":"a7;0k:length=","%":"AudioTrackList"},ho:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nc:{"^":"dU;0a4:type}","%":"BiquadFilterNode"},oi:{"^":"ho;0k:length=","%":"OfflineAudioContext"},oj:{"^":"hl;0a4:type}","%":"Oscillator|OscillatorNode"},ky:{"^":"q+ai;"}}],["","",,P,{"^":"",di:{"^":"q;",
ie:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc5)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mu(g))
return}if(!!z.$isd2)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c2("Incorrect number or type of arguments"))},
ep:function(a,b,c,d,e,f,g){return this.ie(a,b,c,d,e,f,g,null,null,null)},
$isdi:1,
"%":"WebGLRenderingContext"},jt:{"^":"q;",$isjt:1,"%":"WebGLTexture"},jU:{"^":"q;",$isjU:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oy:{"^":"ln;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aW(a.item(b))},
m:function(a,b,c){H.E(b)
H.e(c,"$isK")
throw H.a(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asw:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isd:1,
$asd:function(){return[[P.K,,,]]},
$asD:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},lm:{"^":"q+w;"},ln:{"^":"lm+D;"}}],["","",,O,{"^":"",an:{"^":"b;0a,0b,0c,0d,$ti",
bq:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cW:function(a,b,c){var z=H.at(this,"an",0)
H.f(b,{func:1,ret:P.ad,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
aZ:function(a,b){return this.cW(a,null,b)},
dn:function(a){var z
H.v(a,"$isi",[H.at(this,"an",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d2:function(a,b){var z
H.v(b,"$isi",[H.at(this,"an",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga3:function(a){var z=this.a
return new J.ax(z,z.length,0,[H.x(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.at(this,"an",0)
H.z(b,z)
z=[z]
if(this.dn(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d2(x,H.c([b],z))}},
cd:function(a,b){var z,y
H.v(b,"$isi",[H.at(this,"an",0)],"$asi")
if(this.dn(b)){z=this.a
y=z.length
C.a.cd(z,b)
this.d2(y,b)}},
$isi:1,
p:{
cY:function(a){var z=new O.an([a])
z.bq(a)
return z}}},dc:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eL:function(a){var z=this.b
if(!(z==null))z.B(a)},
aG:function(){return this.eL(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gaC(z)
else return V.bb()},
bO:function(a){var z=this.a
if(a==null)C.a.h(z,V.bb())
else C.a.h(z,a)
this.aG()},
aD:function(){var z=this.a
if(z.length>0){z.pop()
this.aG()}}}}],["","",,E,{"^":"",cR:{"^":"b;"},aM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbV:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.f(this.gel(),{func:1,ret:-1,args:[D.p]})
C.a.a_(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.f(this.gel(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.I("shape",z,this.c,this,[F.eH])
w.b=!0
this.aW(w)}},
an:function(a,b){var z
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.G();)z.d.an(0,b)},
ab:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga0(z))
z.aG()
a.cM(this.f)
z=a.dy
y=(z&&C.a).gaC(z)
if(y!=null&&this.d!=null)y.en(a,this)
for(z=this.y.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ab(a)
a.cL()
a.dx.aD()},
gu:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aW:function(a){var z=this.z
if(!(z==null))z.B(a)},
a7:function(){return this.aW(null)},
hW:[function(a){H.e(a,"$isp")
this.e=null
this.aW(a)},function(){return this.hW(null)},"j4","$1","$0","gel",0,2,1],
hU:[function(a){this.aW(H.e(a,"$isp"))},function(){return this.hU(null)},"j2","$1","$0","gek",0,2,1],
j1:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aM],"$asi")
for(z=b.length,y=this.gek(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.b7()
t.a=H.c([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a7()},"$2","ghT",8,0,8],
j3:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aM],"$asi")
for(z=b.length,y=this.gek(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.b7()
t.a=H.c([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.f(y,x)
C.a.a_(t.a,y)}}this.a7()},"$2","ghV",8,0,8],
$isaE:1,
p:{
ec:function(a,b,c,d,e,f){var z,y
z=new E.aM()
z.a=d
z.b=!0
y=O.cY(E.aM)
z.y=y
y.aZ(z.ghT(),z.ghV())
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
z.sbV(0,e)
return z}}},j_:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eI:function(a,b){var z,y,x,w,v
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
z=new O.dc()
y=[V.aN]
z.a=H.c([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.f(new E.j1(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dc()
z.a=H.c([],y)
v=z.gu()
v.toString
x=H.f(new E.j2(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dc()
z.a=H.c([],y)
y=z.gu()
y.toString
w=H.f(new E.j3(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.cc])
this.dy=z
C.a.h(z,null)
this.fr=new H.b1(0,0,[P.j,A.dk])},
gi4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.l(0,y.ga0(y))
this.z=y
z=y}return z},
cM:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaC(z):a;(z&&C.a).h(z,y)},
cL:function(){var z=this.dy
if(z.length>1)z.pop()},
dF:function(a){var z=a.b
if(z.length===0)throw H.a(P.u("May not cache a shader with no name."))
if(this.fr.bz(0,z))throw H.a(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.m(0,z,a)},
p:{
j0:function(a,b){var z=new E.j_(a,b)
z.eI(a,b)
return z}}},j1:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isp")
z=this.a
z.z=null
z.ch=null}},j2:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j3:{"^":"n:12;a",
$1:function(a){var z
H.e(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},jD:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
eN:[function(a){var z
H.e(a,"$isp")
z=this.x
if(!(z==null))z.B(a)
this.i8()},function(){return this.eN(null)},"eM","$1","$0","gd3",0,2,1],
ghE:function(){var z,y,x
z=Date.now()
y=C.d.a6(P.eb(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
ds:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.j.cB(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.cB(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
i8:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jF(this),{func:1,ret:-1,args:[P.Y]})
C.C.f3(z)
C.C.fK(z,W.fS(y,P.Y))}},
i6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.ds()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.eb(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aG()
w=x.db
C.a.sk(w.a,0)
w.aG()
w=x.dx
C.a.sk(w.a,0)
w.aG()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ab(this.e)}}catch(v){z=H.av(v)
y=H.bx(v)
P.dP("Error: "+H.l(z))
P.dP("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jE:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscW)return E.eP(a,!0,!0,!0,!1)
y=W.cX(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcn(a).h(0,y)
w=E.eP(y,!0,!0,!0,!1)
w.a=a
return w},
eP:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jD()
y=P.ic(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.bT(a,"webgl",y)
x=H.e(x==null?C.l.bT(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.t(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j0(x,a)
w=new T.jx(x)
w.b=H.E(x.getParameter(3379))
w.c=H.E(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k6(a)
v=new X.i6()
v.c=new X.aD(!1,!1,!1)
v.d=P.ie(null,null,null,P.m)
w.b=v
v=new X.iz(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ii(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jJ(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eL,P.b]])
w.z=v
u=document
t=W.ae
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.f(w.gfk(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.f(w.gfn(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.f(w.gfh(),q),!1,r))
v=w.z
p=W.bI
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.f(w.gfp(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.f(w.gfo(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.f(w.gft(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.f(w.gfv(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.f(w.gfu(),s),!1,t))
p=w.z
o=W.bS;(p&&C.a).h(p,W.a0(a,H.O(W.hM(a)),H.f(w.gfw(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.f(w.gfl(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.f(w.gfm(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.f(w.gfz(),q),!1,r))
r=w.z
q=W.bn
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.f(w.gfH(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.f(w.gfF(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.f(w.gfG(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.ds()
return z}}},jF:{"^":"n:31;a",
$1:function(a){var z
H.mW(a)
z=this.a
if(z.z){z.z=!1
z.i6()}}}}],["","",,Z,{"^":"",fj:{"^":"b;a,b",p:{
dx:function(a,b,c){var z
H.v(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.br(c)),35044)
a.bindBuffer(b,null)
return new Z.fj(b,z)}}},dY:{"^":"cR;a,b,c,d,e",
Y:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.av(y)
x=P.u('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fk:{"^":"b;a",$isnd:1},cV:{"^":"b;a,0b,c,d",
aB:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
am:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ab:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isoF:1},cp:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.be(this.c)+"'")+"]"}},bo:{"^":"b;a",
gcY:function(a){var z,y
z=this.a
y=(z&$.$get$aA().a)!==0?3:0
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=2
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bQ().a)!==0)y+=3
if((z&$.$get$bR().a)!==0)y+=4
if((z&$.$get$bp().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
ho:function(a){var z,y,x
z=$.$get$aA()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fi()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bo))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.j])
y=this.a
if((y&$.$get$aA().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aU().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bQ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bR().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
p:{
as:function(a){return new Z.bo(a)}}}}],["","",,D,{"^":"",e0:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.hQ(z))
return x!==0},
dN:function(){return this.B(null)},
i9:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
aE:function(a){return this.i9(a,!0,!1)},
p:{
H:function(){var z=new D.b7()
z.a=H.c([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},hQ:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"b;a,0b"},c6:{"^":"p;c,d,a,0b,$ti"},c7:{"^":"p;c,d,a,0b,$ti"},I:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dZ:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dZ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nf<"}},el:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.el))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},em:{"^":"p;c,a,0b"},i6:{"^":"b;0a,0b,0c,0d",
i1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.em(a,this)
y.b=!0
return z.B(y)},
hY:function(a){var z,y
this.c=a.b
this.d.a_(0,a.a)
z=this.b
if(z==null)return!1
y=new X.em(a,this)
y.b=!0
return z.B(y)}},es:{"^":"ct;x,y,c,d,e,a,0b"},ii:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
av:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gaP()
s=new X.bK(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cK:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.av(a,b))
return!0},
bc:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ez()
if(typeof z!=="number")return z.bS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.av(a,b))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.av(a,b))
return!0},
i2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaP()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.dd(new V.X(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.B(w)
return!0},
fs:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.es(c,a,this.a.gaP(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.U(0,0)}},aD:{"^":"b;a,b,c",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
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
return z+(this.c?"Shift+":"")}},bK:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},iz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c1:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaP()
x=new X.bK(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cK:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.c1(a,b,!0))
return!0},
bc:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ez()
if(typeof z!=="number")return z.bS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.c1(a,b,!0))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.c1(a,b,!1))
return!0},
i3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaP()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.dd(new V.X(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.B(x)
return!0},
gdM:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbQ:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gej:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},dd:{"^":"ct;x,c,d,e,a,0b"},ct:{"^":"p;"},eT:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},jJ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
av:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.U],"$asd")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gaP()
w=new X.eT(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i0:function(a){var z
H.v(a,"$isd",[V.U],"$asd")
z=this.b
if(z==null)return!1
z.B(this.av(a,!0))
return!0},
hZ:function(a){var z
H.v(a,"$isd",[V.U],"$asd")
z=this.c
if(z==null)return!1
z.B(this.av(a,!0))
return!0},
i_:function(a){var z
H.v(a,"$isd",[V.U],"$asd")
z=this.d
if(z==null)return!1
z.B(this.av(a,!1))
return!0}},k6:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaP:function(){var z=this.a
return V.eG(0,0,(z&&C.l).gby(z).c,C.l.gby(z).d)},
de:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.el(z,new X.aD(y,a.altKey,a.shiftKey))},
aN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
cc:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=z.top
if(typeof x!=="number")return x.O()
return new V.U(y-w,x-v)},
b3:function(a){return new V.X(a.movementX,a.movementY)},
c8:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.j.al(u.pageX)
C.j.al(u.pageY)
s=z.left
C.j.al(u.pageX)
C.a.h(y,new V.U(t-s,C.j.al(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dZ(z,new X.aD(y,a.altKey,a.shiftKey))},
iD:[function(a){this.f=!0},"$1","gfn",4,0,4],
ix:[function(a){this.f=!1},"$1","gfh",4,0,4],
iA:[function(a){if(this.f)a.preventDefault()},"$1","gfk",4,0,4],
iF:[function(a){var z
H.e(a,"$isbI")
if(!this.f)return
z=this.de(a)
if(this.b.i1(z))a.preventDefault()},"$1","gfp",4,0,14],
iE:[function(a){var z
H.e(a,"$isbI")
if(!this.f)return
z=this.de(a)
if(this.b.hY(z))a.preventDefault()},"$1","gfo",4,0,14],
iH:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
z.focus()
this.f=!0
this.aN(a)
if(this.x){y=this.at(a)
x=this.b3(a)
if(this.d.cK(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cK(y,w))a.preventDefault()},"$1","gft",4,0,5],
iJ:[function(a){var z,y,x
H.e(a,"$isae")
this.aN(a)
z=this.at(a)
if(this.x){y=this.b3(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.bc(z,x))a.preventDefault()},"$1","gfv",4,0,5],
iC:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
if(!(z&&C.l).gby(z).dJ(0,new P.ca(a.clientX,a.clientY,[P.Y]))){this.aN(a)
y=this.at(a)
if(this.x){x=this.b3(a)
if(this.d.bc(y,x))a.preventDefault()
return}if(this.r)return
w=this.aw(a)
if(this.c.bc(y,w))a.preventDefault()}},"$1","gfm",4,0,5],
iI:[function(a){var z,y,x
H.e(a,"$isae")
this.aN(a)
z=this.at(a)
if(this.x){y=this.b3(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","gfu",4,0,5],
iB:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
if(!(z&&C.l).gby(z).dJ(0,new P.ca(a.clientX,a.clientY,[P.Y]))){this.aN(a)
y=this.at(a)
if(this.x){x=this.b3(a)
if(this.d.bb(y,x))a.preventDefault()
return}if(this.r)return
w=this.aw(a)
if(this.c.bb(y,w))a.preventDefault()}},"$1","gfl",4,0,5],
iK:[function(a){var z,y
H.e(a,"$isbS")
this.aN(a)
z=new V.X((a&&C.B).ghw(a),C.B.ghx(a)).C(0,180)
if(this.x){if(this.d.i2(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.i3(z,y))a.preventDefault()},"$1","gfw",4,0,35],
iL:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.at(this.y)
v=this.aw(this.y)
this.d.fs(w,v,x)}},"$1","gfz",4,0,4],
iT:[function(a){var z
H.e(a,"$isbn")
this.a.focus()
this.f=!0
this.cc(a)
z=this.c8(a)
if(this.e.i0(z))a.preventDefault()},"$1","gfH",4,0,13],
iR:[function(a){var z
H.e(a,"$isbn")
this.cc(a)
z=this.c8(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfF",4,0,13],
iS:[function(a){var z
H.e(a,"$isbn")
this.cc(a)
z=this.c8(a)
if(this.e.i_(z))a.preventDefault()},"$1","gfG",4,0,13]}}],["","",,D,{"^":"",cm:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aH:[function(a){var z
H.e(a,"$isp")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aH(null)},"im","$1","$0","geO",0,2,1],
$isa3:1,
$isaE:1},a3:{"^":"b;",$isaE:1},i7:{"^":"an;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aH:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fq:[function(a){var z
H.e(a,"$isp")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fq(null)},"iG","$1","$0","gdm",0,2,1],
iM:[function(a){var z,y,x
H.v(a,"$isi",[D.a3],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.f_(x))return!1}return!0},"$1","gfA",4,0,37],
iu:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdm(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.cm)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.a=H.c([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gfe",8,0,19],
iO:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdm(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.cm)C.a.a_(this.e,t)
s=t.d
if(s==null){s=new D.b7()
s.a=H.c([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.a_(s.a,x)}z=new D.c7(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gfC",8,0,19],
f_:function(a){var z=C.a.b7(this.e,a)
return z},
$asi:function(){return[D.a3]},
$asan:function(){return[D.a3]}},iH:{"^":"b;",$isa3:1,$isaE:1},jk:{"^":"b;",$isa3:1,$isaE:1},jA:{"^":"b;",$isa3:1,$isaE:1},jB:{"^":"b;",$isa3:1,$isaE:1},jC:{"^":"b;",$isa3:1,$isaE:1}}],["","",,V,{"^":"",
nh:[function(a,b){if(typeof b!=="number")return b.O()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iw",8,0,33],
n4:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bo(a-b,z)
return(a<0?a+z:a)+b},
R:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.j.er($.r.$2(a,0)?0:a,b),c+b+1)},
bw:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.A],"$asd")
z=H.c([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.R(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.m(z,u,C.b.ah(z[u],x))}return z},
dO:function(a,b){return C.j.ii(Math.pow(b,C.J.cB(Math.log(H.mr(a))/Math.log(b))))},
y:{"^":"b;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
aZ:{"^":"b;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aZ))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
ev:{"^":"b;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.A])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ev))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.A]
y=V.bw(H.c([this.a,this.d,this.r],z),3,0)
x=V.bw(H.c([this.b,this.e,this.x],z),3,0)
w=V.bw(H.c([this.c,this.f,this.y],z),3,0)
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
aN:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.A])
return z},
cF:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.bb()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
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
return V.aC(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.N(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.aj(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aN))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
z=b.z
if(!$.r.$2(z,this.z))return!1
z=b.Q
if(!$.r.$2(z,this.Q))return!1
z=b.ch
if(!$.r.$2(z,this.ch))return!1
z=b.cx
if(!$.r.$2(z,this.cx))return!1
z=b.cy
if(!$.r.$2(z,this.cy))return!1
z=b.db
if(!$.r.$2(z,this.db))return!1
z=b.dx
if(!$.r.$2(z,this.dx))return!1
return!0},
i:function(a){return this.L()},
e8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.A]
y=V.bw(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bw(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bw(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bw(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.e8("",3,0)},
D:function(a){return this.e8(a,3,0)},
p:{
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bb:function(){return V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ew:function(a,b,c){var z,y,x,w,v
z=c.C(0,Math.sqrt(c.I(c)))
y=b.b9(z)
x=y.C(0,Math.sqrt(y.I(y)))
w=z.b9(x)
v=new V.N(a.a,a.b,a.c)
return V.aC(x.a,w.a,z.a,x.R(0).I(v),x.b,w.b,z.b,w.R(0).I(v),x.c,w.c,z.c,z.R(0).I(v),0,0,0,1)}}},
U:{"^":"b;q:a>,t:b>",
O:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
aj:{"^":"b;q:a>,t:b>,c",
O:function(a,b){return new V.aj(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
bN:{"^":"b;q:a>,t:b>,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bN))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
eF:{"^":"b;q:a>,t:b>,c,d",
gaa:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"},
p:{
eG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)}}},
X:{"^":"b;a,b",
hK:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,21],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.X(z*b,y*b)},
C:function(a,b){var z,y
if($.r.$2(b,0))return new V.X(0,0)
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.X(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
N:{"^":"b;a,b,c",
hK:[function(a){return Math.sqrt(this.I(this))},"$0","gk",1,0,21],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cG:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b9:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.N(-this.a,-this.b,-this.c)},
C:function(a,b){if($.r.$2(b,0))return new V.N(0,0,0)
return new V.N(this.a/b,this.b/b,this.c/b)},
eh:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hv:{"^":"e0;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bX:function(a){var z=V.n4(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.B(a)},
scS:function(a,b){},
scH:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bX(z)}z=new D.I("maximumLocation",y,this.b,this,[P.A])
z.b=!0
this.T(z)}},
scJ:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bX(z)}z=new D.I("minimumLocation",y,this.c,this,[P.A])
z.b=!0
this.T(z)}},
sa9:function(a,b){var z,y
b=this.bX(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.A])
z.b=!0
this.T(z)}},
scI:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.A])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.A])
z.b=!0
this.T(z)}},
scq:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.A])
z.b=!0
this.T(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
p:{
cZ:function(){var z=new U.hv()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e2:{"^":"af;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aY:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
p:{
e3:function(a){var z=new U.e2()
z.a=a
return z}}},ef:{"^":"an;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.T(null)},"aj","$1","$0","gaI",0,2,1],
it:[function(a,b){var z,y,x,w,v,u,t
z=U.af
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfd",8,0,22],
iN:[function(a,b){var z,y,x,w,v,u,t
z=U.af
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.a_(t.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfB",8,0,22],
aY:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ax(z,z.length,0,[H.x(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aY(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bb():x
z=this.e
if(!(z==null))z.aE(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ef))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.a1(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.af]},
$asan:function(){return[U.af]},
$isaf:1},af:{"^":"e0;"},k7:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
T:[function(a){var z
H.e(a,"$isp")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.T(null)},"aj","$1","$0","gaI",0,2,1],
b5:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdM()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.f(this.gc3(),y)
C.a.h(z.a,x)
x=this.a.c.gej()
x.toString
z=H.f(this.gc4(),y)
C.a.h(x.a,z)
z=this.a.c.gbQ()
z.toString
y=H.f(this.gc5(),y)
C.a.h(z.a,y)
return!0},
f9:[function(a){H.e(a,"$isp")
if(!J.a1(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc3",4,0,2],
fa:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isp"),"$isbK")
if(!this.y)return
if(this.x){z=a.d.O(0,a.y)
z=new V.X(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.O(0,a.y)
z=new V.X(y.a,y.b).l(0,2).C(0,z.gaa())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=new V.X(x.a,x.b).l(0,2).C(0,z.gaa())
x=this.b
v=w.a
if(typeof v!=="number")return v.R()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
this.b.sV(0)
y=y.O(0,a.z)
this.Q=new V.X(y.a,y.b).l(0,2).C(0,z.gaa())}this.aj()},"$1","gc4",4,0,2],
fb:[function(a){var z,y,x
H.e(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.aj()}},"$1","gc5",4,0,2],
aY:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aC(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaf:1},k8:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isp")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.T(null)},"aj","$1","$0","gaI",0,2,1],
b5:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdM()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.f(this.gc3(),y)
C.a.h(z.a,x)
x=this.a.c.gej()
x.toString
z=H.f(this.gc4(),y)
C.a.h(x.a,z)
z=this.a.c.gbQ()
z.toString
x=H.f(this.gc5(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.H()
x.f=z}x=H.f(this.gf6(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gf7(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.H()
x.b=z}x=H.f(this.gfW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.H()
x.d=z}x=H.f(this.gfV(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.H()
x.c=z}y=H.f(this.gfU(),y)
C.a.h(z.a,y)
return!0},
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.X(z,y)},
f9:[function(a){a=H.k(H.e(a,"$isp"),"$isbK")
if(!J.a1(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc3",4,0,2],
fa:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isp"),"$isbK")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.X(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ao(new V.X(y.a,y.b).l(0,2).C(0,z.gaa()))
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
x=y.O(0,a.y)
w=this.ao(new V.X(x.a,x.b).l(0,2).C(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa9(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.O(0,a.z)
this.dx=this.ao(new V.X(y.a,y.b).l(0,2).C(0,z.gaa()))}this.aj()},"$1","gc4",4,0,2],
fb:[function(a){var z,y,x
H.e(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
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
this.aj()}},"$1","gc5",4,0,2],
iq:[function(a){if(H.k(H.e(a,"$isp"),"$ises").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf6",4,0,2],
ir:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isp"),"$isbK")
if(!J.a1(this.d,a.x.b))return
z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ao(new V.X(x.a,x.b).l(0,2).C(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa9(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.O(0,a.z)
this.dx=this.ao(new V.X(y.a,y.b).l(0,2).C(0,z.gaa()))
this.aj()},"$1","gf7",4,0,2],
iX:[function(a){H.e(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfW",4,0,2],
iW:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isp"),"$iseT")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.X(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ao(new V.X(y.a,y.b).l(0,2).C(0,z.gaa()))
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
x=y.O(0,a.y)
w=this.ao(new V.X(x.a,x.b).l(0,2).C(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa9(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.O(0,a.z)
this.dx=this.ao(new V.X(y.a,y.b).l(0,2).C(0,z.gaa()))}this.aj()},"$1","gfV",4,0,2],
iV:[function(a){var z,y,x
H.e(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
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
this.aj()}},"$1","gfU",4,0,2],
aY:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aC(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aC(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaf:1},k9:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.B(a)},
b5:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=H.f(this.gfc(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
is:[function(a){var z,y,x,w
H.e(a,"$isp")
if(!J.a1(this.b,this.a.b.c))return
H.k(a,"$isdd")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.I("zoom",z,w,this,[P.A])
z.b=!0
this.T(z)}},"$1","gfc",4,0,2],
aY:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aC(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaf:1}}],["","",,M,{"^":"",hw:{"^":"an;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a1:[function(a){var z
H.e(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a1(null)},"d4","$1","$0","gX",0,2,1],
iP:[function(a,b){var z,y,x,w,v,u,t
z=M.aF
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfD",8,0,23],
iQ:[function(a,b){var z,y,x,w,v,u,t
z=M.aF
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.f(x,w)
C.a.a_(t.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfE",8,0,23],
ab:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
if(!(y==null))y.ab(a)}this.e=!1},
$asi:function(){return[M.aF]},
$asan:function(){return[M.aF]},
$isaF:1},hB:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
a1:[function(a){var z
H.e(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a1(null)},"d4","$1","$0","gX",0,2,1],
sb6:function(a){var z,y,x
if(a==null)a=new X.hX()
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("camera",x,this.a,this,[X.cj])
z.b=!0
this.a1(z)}},
sbg:function(a,b){var z,y,x
if(b==null)b=X.d0(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("target",x,this.b,this,[X.dp])
z.b=!0
this.a1(z)}},
sbh:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.cc])
z.b=!0
this.a1(z)}},
ab:function(a){a.cM(this.c)
this.b.Y(a)
this.a.Y(a)
this.d.an(0,a)
this.d.ab(a)
this.a.am(a)
this.b.toString
a.cL()},
$isaF:1},hO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a1:[function(a){var z
H.e(a,"$isp")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a1(null)},"d4","$1","$0","gX",0,2,1],
iy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aM
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.b7()
s.a=H.c([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfi",8,0,8],
iz:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aM
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gX(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.b7()
s.a=H.c([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.f(x,w)
C.a.a_(s.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.a1(z)},"$2","gfj",8,0,8],
sb6:function(a){var z,y,x
if(a==null)a=X.eB(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.a
this.a=a
z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("camera",x,this.a,this,[X.cj])
z.b=!0
this.a1(z)}},
sbg:function(a,b){var z,y,x
if(b==null)b=X.d0(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.b
this.b=b
z=b.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=new D.I("target",x,this.b,this,[X.dp])
z.b=!0
this.a1(z)}},
sbh:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.f(this.gX(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.I("technique",x,this.c,this,[O.cc])
z.b=!0
this.a1(z)}},
gu:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
ab:function(a){var z
a.cM(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.G();)z.d.an(0,a)
for(z=this.d.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.G();)z.d.ab(a)
this.a.toString
a.cy.aD()
a.db.aD()
this.b.toString
a.cL()},
$isaF:1},aF:{"^":"b;"}}],["","",,A,{"^":"",dT:{"^":"b;a,b,c"},hj:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hy:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eu:{"^":"dk;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aT,0az,0aU,0bA,0dO,0dP,0bB,0bC,0dQ,0dR,0bD,0bE,0dS,0dT,0bF,0dU,0dV,0bG,0dW,0dX,0bH,0bI,0bJ,0dY,0dZ,0bK,0bL,0e_,0e0,0bM,0e1,0ct,0e2,0cu,0e3,0cv,0e4,0cw,0e5,0cz,0e6,0cA,a,b,0c,0d,0e,0f,0r",
eH:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.aq("")
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
a1.fZ(z)
a1.h5(z)
a1.h_(z)
a1.hd(z)
a1.he(z)
a1.h7(z)
a1.hi(z)
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
z=new P.aq("")
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
v.h2(z)
v.fY(z)
v.h0(z)
v.h3(z)
v.hb(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h9(z)
v.ha(z)}v.h6(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.c([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h1(z)
v.h8(z)
v.hc(z)
v.hf(z)
v.hg(z)
v.hh(z)
v.h4(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.j])
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
this.eg(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaH")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaH")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaH")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaH")
if(a1.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isdu")
if(a1.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaH")
if(a1.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaH")
this.k3=H.c([],[A.aH])
y=a1.aT
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaH"))}}y=a1.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isar")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isak")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isar")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isak")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.aT=H.k(this.r.n(0,"diffuseTxt"),"$isar")
this.aU=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.az=H.k(this.r.n(0,"diffuseTxt"),"$isak")
this.aU=H.k(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bA=H.k(this.r.n(0,"invDiffuseClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dO=H.k(this.r.n(0,"invDiffuseTxt"),"$isar")
this.bB=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dP=H.k(this.r.n(0,"invDiffuseTxt"),"$isak")
this.bB=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bE=H.k(this.r.n(0,"shininess"),"$isZ")
this.bC=H.k(this.r.n(0,"specularClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dQ=H.k(this.r.n(0,"specularTxt"),"$isar")
this.bD=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dR=H.k(this.r.n(0,"specularTxt"),"$isak")
this.bD=H.k(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.e:this.dS=H.k(this.r.n(0,"bumpTxt"),"$isar")
this.bF=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dT=H.k(this.r.n(0,"bumpTxt"),"$isak")
this.bF=H.k(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.dU=H.k(this.r.n(0,"envSampler"),"$isak")
this.dV=H.k(this.r.n(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bG=H.k(this.r.n(0,"reflectClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dW=H.k(this.r.n(0,"reflectTxt"),"$isar")
this.bH=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dX=H.k(this.r.n(0,"reflectTxt"),"$isak")
this.bH=H.k(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bI=H.k(this.r.n(0,"refraction"),"$isZ")
this.bJ=H.k(this.r.n(0,"refractClr"),"$isL")
switch(y){case C.c:break
case C.h:break
case C.e:this.dY=H.k(this.r.n(0,"refractTxt"),"$isar")
this.bK=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dZ=H.k(this.r.n(0,"refractTxt"),"$isak")
this.bK=H.k(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.bL=H.k(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.h:break
case C.e:this.e_=H.k(this.r.n(0,"alphaTxt"),"$isar")
this.bM=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.e0=H.k(this.r.n(0,"alphaTxt"),"$isak")
this.bM=H.k(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.ct=H.c([],[A.f5])
this.cu=H.c([],[A.f6])
this.cv=H.c([],[A.f7])
this.cw=H.c([],[A.f8])
this.cz=H.c([],[A.f9])
this.cA=H.c([],[A.fa])
if(a1.k2){y=a1.z
if(y>0){this.e1=H.e(this.r.n(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.ct;(x&&C.a).h(x,new A.f5(m,l,k))}}y=a1.Q
if(y>0){this.e2=H.e(this.r.n(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isZ")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isZ")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.cu;(x&&C.a).h(x,new A.f6(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e3=H.e(this.r.n(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isZ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.cv;(x&&C.a).h(x,new A.f7(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e4=H.e(this.r.n(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isar")
x=this.cw;(x&&C.a).h(x,new A.f8(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e5=H.e(this.r.n(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdu")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isZ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isZ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isak")
x=this.cz;(x&&C.a).h(x,new A.f9(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e6=H.e(this.r.n(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isL")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isL")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isL")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isL")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isL")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isL")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isZ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isZ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isar")
x=this.cA;(x&&C.a).h(x,new A.fa(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ak:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eA(c)
b.a.uniform1i(b.d,0)}},
af:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cX(c)
b.a.uniform1i(b.d,0)}},
p:{
iq:function(a,b){var z,y
z=a.az
y=new A.eu(b,z)
y.d1(b,z)
y.eH(a,b)
return y}}},it:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aT,az,aU",
fZ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aT+"];\n"
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
h5:function(a){var z
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
h_:function(a){var z
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
hd:function(a){var z,y
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
he:function(a){var z,y
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
h7:function(a){var z
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
hi:function(a){var z
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
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aF(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h2:function(a){var z,y
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
case C.h:z=y+"   return emissionClr;\n"
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
fY:function(a){var z,y
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
case C.h:z=y+"   return ambientClr;\n"
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
h0:function(a){var z,y
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
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
h3:function(a){var z,y
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
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
hb:function(a){var z,y
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
h6:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
h9:function(a){var z,y
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
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
ha:function(a){var z,y
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
h1:function(a){var z,y
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
h8:function(a){var z,y
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
hc:function(a){var z,y
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
hf:function(a){var z,y,x
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
hg:function(a){var z,y,x
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
hh:function(a){var z,y,x
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
h4:function(a){var z
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
i:function(a){return this.az}},f5:{"^":"b;a,b,c"},f8:{"^":"b;a,b,c,d,e,f,r,x"},f6:{"^":"b;a,b,c,d,e,f,r"},f9:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fa:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dk:{"^":"cR;",
d1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
eg:function(a,b,c){var z,y,x
this.c=this.df(b,35633)
this.d=this.df(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fW(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.t(P.u("Failed to link shader: "+H.l(x)))}this.fP()
this.fR()},
Y:function(a){a.a.useProgram(this.e)
this.f.hy()},
df:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fW(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fP:function(){var z,y,x,w,v,u
z=H.c([],[A.dT])
y=this.a
x=H.E(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dT(y,v.name,u))}this.f=new A.hj(z)},
fR:function(){var z,y,x,w,v,u
z=H.c([],[A.ac])
y=this.a
x=H.E(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hv(v.type,v.size,v.name,u))}this.r=new A.jT(z)},
aK:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dt(z,y,b,a,c)},
f0:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.dt(z,y,b,a,c)},
f1:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ak(z,y,b,c)
else return A.dt(z,y,b,a,c)},
bv:function(a,b){return new P.fn(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hv:function(a,b,c,d){switch(a){case 5120:return this.aK(b,c,d)
case 5121:return this.aK(b,c,d)
case 5122:return this.aK(b,c,d)
case 5123:return this.aK(b,c,d)
case 5124:return this.aK(b,c,d)
case 5125:return this.aK(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jO(this.a,this.e,c,d)
case 35665:return new A.L(this.a,this.e,c,d)
case 35666:return new A.jR(this.a,this.e,c,d)
case 35667:return new A.jP(this.a,this.e,c,d)
case 35668:return new A.jQ(this.a,this.e,c,d)
case 35669:return new A.jS(this.a,this.e,c,d)
case 35674:return new A.jV(this.a,this.e,c,d)
case 35675:return new A.du(this.a,this.e,c,d)
case 35676:return new A.aH(this.a,this.e,c,d)
case 35678:return this.f0(b,c,d)
case 35680:return this.f1(b,c,d)
case 35670:throw H.a(this.bv("BOOL",c))
case 35671:throw H.a(this.bv("BOOL_VEC2",c))
case 35672:throw H.a(this.bv("BOOL_VEC3",c))
case 35673:throw H.a(this.bv("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ck:{"^":"b;a,b",
i:function(a){return this.b}},eI:{"^":"dk;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ac:{"^":"b;"},jT:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
hD:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.hD("\n")}},P:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jP:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jQ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jS:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jN:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dt:function(a,b,c,d,e){var z=new A.jN(a,b,c,e)
z.f=d
z.e=P.ig(d,0,!1,P.m)
return z}}},Z:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jO:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},L:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jR:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jV:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},du:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.br(H.v(a,"$isd",[P.A],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aH:{"^":"ac;a,b,c,d",
ai:function(a){var z=new Float32Array(H.br(H.v(a,"$isd",[P.A],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},ar:{"^":"ac;a,b,c,d",
eA:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ak:{"^":"ac;a,b,c,d",
cX:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
cG:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bX:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cG(y)
k=F.cG(z.b)
j=F.n1(d,e,new F.ma(z,F.cG(z.c),F.cG(z.d),k,l,c),b)
if(j!=null)a.hQ(j)},
n1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.aP,P.A,P.A]})
if(a<1)return
if(b<1)return
z=F.dl()
y=H.c([],[F.aP])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cC(null,null,new V.aZ(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cp(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cC(null,null,new V.aZ(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cp(d))}}z.d.hl(a+1,b+1,y)
return z},
ma:{"^":"n:43;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cG(z.b,b).cG(z.d.cG(z.c,b),c)
z=new V.aj(y.a,y.b,y.c)
if(!J.a1(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a7()}a.sig(y.C(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.bN(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.a1(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a7()}}},
ap:{"^":"b;0a,0b,0c,0d,0e",
gcs:function(){return this.a==null||this.b==null||this.c==null},
eV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.N(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eh())return
return v.C(0,Math.sqrt(v.I(v)))},
eY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.O(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.I(z)))
z=w.O(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.b9(z.C(0,Math.sqrt(z.I(z))))
return z.C(0,Math.sqrt(z.I(z)))},
cm:function(){if(this.d!=null)return!0
var z=this.eV()
if(z==null){z=this.eY()
if(z==null)return!1}this.d=z
this.a.a.a7()
return!0},
eU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.N(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eh())return
return v.C(0,Math.sqrt(v.I(v)))},
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.O(0,u)
z=new V.N(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.O(0,u)
z=new V.aj(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).O(0,x)
z=new V.N(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.I(z)))
z=k.b9(m)
z=z.C(0,Math.sqrt(z.I(z))).b9(k)
m=z.C(0,Math.sqrt(z.I(z)))}return m},
ck:function(){if(this.e!=null)return!0
var z=this.eU()
if(z==null){z=this.eX()
if(z==null)return!1}this.e=z
this.a.a.a7()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var z,y
if(this.gcs())return a+"disposed"
z=a+C.b.ah(J.ab(this.a.e),0)+", "+C.b.ah(J.ab(this.b.e),0)+", "+C.b.ah(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.D("")},
p:{
bE:function(a,b,c){var z,y,x
z=new F.ap()
y=a.a
if(y==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.u("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a7()
return z}}},
d9:{"^":"b;0a,0b",
gcs:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){if(this.gcs())return a+"disposed"
return a+C.b.ah(J.ab(this.a.e),0)+", "+C.b.ah(J.ab(this.b.e),0)},
L:function(){return this.D("")}},
dh:{"^":"b;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ah(J.ab(z.e),0)},
L:function(){return this.D("")}},
eH:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
hQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.a2()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.ht())}this.a.a2()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dh()
if(r.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.B(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a2()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d9()
s=p.a
if(s==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.t(P.u("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.B(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.a2()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.a2()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bE(p,o,l)}z=this.e
if(!(z==null))z.aE(0)},
ax:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ax()||!1
if(!this.a.ax())y=!1
z=this.e
if(!(z==null))z.aE(0)
return y},
dH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aA()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$bQ().a)!==0)++w
if((x&$.$get$bR().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gcY(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.A
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dY])
for(r=0,q=0;q<w;++q){p=b.ho(q)
o=p.gcY(p)
C.a.m(s,q,new Z.dY(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].hL(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.br(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cV(new Z.fj(34962,j),s,b)
i.b=H.c([],[Z.cp])
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a2()
C.a.h(h,g.e)}f=Z.dx(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cp(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a2()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a2()
C.a.h(h,g.e)}f=Z.dx(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cp(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a2()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a2()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.a2()
C.a.h(h,g.e)}f=Z.dx(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cp(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.E(z,"\n")},
aW:function(a){var z=this.e
if(!(z==null))z.B(a)},
a7:function(){return this.aW(null)},
p:{
dl:function(){var z,y
z=new F.eH()
y=new F.ki(z)
y.b=!1
y.c=H.c([],[F.aP])
z.a=y
y=new F.jc(z)
y.b=H.c([],[F.dh])
z.b=y
y=new F.jb(z)
y.b=H.c([],[F.d9])
z.c=y
y=new F.ja(z)
y.b=H.c([],[F.ap])
z.d=y
z.e=null
return z}}},
ja:{"^":"b;a,0b",
hk:function(a){var z,y,x,w,v
H.v(a,"$isd",[F.aP],"$asd")
z=H.c([],[F.ap])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bE(y,w,v))}return z},
hl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.aP],"$asd")
z=H.c([],[F.ap])
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
C.a.h(z,F.bE(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bE(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
ax:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cm())x=!1
return x},
cl:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].ck())x=!1
return x},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
L:function(){return this.D("")}},
jb:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.E(z,"\n")},
L:function(){return this.D("")}},
jc:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
L:function(){return this.D("")}},
aP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cp:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cC(this.cx,x,u,z,y,w,v,a,t)},
ht:function(){return this.cp(null)},
sig:function(a){var z
if(!J.a1(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a7()}},
hL:function(a){var z,y
z=J.J(a)
if(z.A(a,$.$get$aA())){z=this.f
y=[P.A]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aS())){z=this.r
y=[P.A]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aR())){z=this.x
y=[P.A]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aT())){z=this.y
y=[P.A]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.A(a,$.$get$aU())){z=this.z
y=[P.A]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bQ())){z=this.Q
y=[P.A]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bR())){z=this.Q
y=[P.A]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.A(a,$.$get$bp()))return H.c([this.ch],[P.A])
else if(z.A(a,$.$get$aQ())){z=this.cx
y=[P.A]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.A])},
cm:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.N(0,0,0)
this.d.J(0,new F.kp(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a7()
z=this.a.e
if(!(z==null))z.aE(0)}return!0},
ck:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.N(0,0,0)
this.d.J(0,new F.ko(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a7()
z=this.a.e
if(!(z==null))z.aE(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var z,y,x
z=H.c([],[P.j])
C.a.h(z,C.b.ah(J.ab(this.e),0))
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
C.a.h(z,V.R(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
L:function(){return this.D("")},
p:{
cC:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aP()
y=new F.kn(z)
y.b=H.c([],[F.dh])
z.b=y
y=new F.km(z)
x=[F.d9]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kj(z)
x=[F.ap]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fg()
z.e=0
y=$.$get$aA()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aS().a)!==0?e:null
z.x=(x&$.$get$aR().a)!==0?b:null
z.y=(x&$.$get$aT().a)!==0?f:null
z.z=(x&$.$get$aU().a)!==0?g:null
z.Q=(x&$.$get$fh().a)!==0?c:null
z.ch=(x&$.$get$bp().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
kp:{"^":"n:9;a",
$1:function(a){var z,y
H.e(a,"$isap")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
ko:{"^":"n:9;a",
$1:function(a){var z,y
H.e(a,"$isap")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
ki:{"^":"b;a,0b,0c",
a2:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a7()
return!0},
hm:function(a,b,c,d,e,f,g,h,i){var z=F.cC(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bw:function(a,b,c,d,e,f){return this.hm(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ax:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cm()
return!0},
cl:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].ck()
return!0},
hq:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.a1(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
this.a2()
z=H.c([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
L:function(){return this.D("")}},
kj:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ap]})
C.a.J(this.b,b)
C.a.J(this.c,new F.kk(this,b))
C.a.J(this.d,new F.kl(this,b))},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
L:function(){return this.D("")}},
kk:{"^":"n:9;a,b",
$1:function(a){H.e(a,"$isap")
if(!J.a1(a.a,this.a))this.b.$1(a)}},
kl:{"^":"n:9;a,b",
$1:function(a){var z
H.e(a,"$isap")
z=this.a
if(!J.a1(a.a,z)&&!J.a1(a.b,z))this.b.$1(a)}},
km:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
L:function(){return this.D("")}},
kn:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.c([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.E(z,"\n")},
L:function(){return this.D("")}}}],["","",,O,{"^":"",ip:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
P:[function(a){var z
H.e(a,"$isp")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.P(null)},"dl","$1","$0","gaM",0,2,1],
fM:[function(a){H.e(a,"$isp")
this.a=null
this.P(a)},function(){return this.fM(null)},"iU","$1","$0","gfL",0,2,1],
iv:[function(a,b){var z=V.aN
z=new D.c6(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.P(z)},"$2","gff",8,0,24],
iw:[function(a,b){var z=V.aN
z=new D.c7(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.P(z)},"$2","gfg",8,0,24],
dc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a6(z.e.length+3,4)*4
x=C.d.a6(z.f.length+3,4)*4
w=C.d.a6(z.r.length+3,4)*4
v=C.d.a6(z.x.length+3,4)*4
u=C.d.a6(z.y.length+3,4)*4
t=C.d.a6(z.z.length+3,4)*4
s=C.d.a6(this.e.a.length+3,4)*4
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
a6=$.$get$aA()
if(c){z=$.$get$aS()
a6=new Z.bo(a6.a|z.a)}if(b){z=$.$get$aR()
a6=new Z.bo(a6.a|z.a)}if(a){z=$.$get$aT()
a6=new Z.bo(a6.a|z.a)}if(a0){z=$.$get$aU()
a6=new Z.bo(a6.a|z.a)}if(a2){z=$.$get$aQ()
a6=new Z.bo(a6.a|z.a)}return new A.it(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.v(a,"$isd",[T.cx],"$asd")
if(b!=null)if(!C.a.b7(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ax(z,z.length,0,[H.x(z,0)]);z.G();){y=z.d
x=new V.N(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cR(x)}}},
en:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dc()
y=H.e(a.fr.j(0,z.az),"$iseu")
if(y==null){y=A.iq(z,a.a)
a.dF(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aU
z=b.e
if(!(z instanceof Z.cV)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.ax()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.cl()
u.a.cl()
u=u.e
if(!(u==null))u.aE(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hq()
t=t.e
if(!(t==null))t.aE(0)}r=b.d.dH(new Z.fk(a.a),w)
r.aB($.$get$aA()).e=this.a.y.c
if(z)r.aB($.$get$aS()).e=this.a.Q.c
if(v)r.aB($.$get$aR()).e=this.a.z.c
if(x.rx)r.aB($.$get$aT()).e=this.a.ch.c
if(u)r.aB($.$get$aU()).e=this.a.cx.c
if(x.x1)r.aB($.$get$aQ()).e=this.a.cy.c
b.e=r}z=T.cx
q=H.c([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga0(u)
v=v.db
v.toString
v.ai(u.ac(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga0(u)
t=a.dx
t=u.l(0,t.ga0(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ai(u.ac(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gi4()
t=a.dx
t=u.l(0,t.ga0(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ai(u.ac(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ai(u.ac(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ai(u.ac(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ai(C.t.ac(u,!0))}if(x.aT>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.A],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.e(t,"$isaN")
u=u.k3
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.br(H.v(t.ac(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.W(q,this.f.d)
v=this.a
u=this.f.d
v.ak(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.f.e)
v=this.a
u=this.f.e
v.af(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.W(q,this.r.d)
v=this.a
u=this.r.d
v.ak(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.r.e)
v=this.a
u=this.r.e
v.af(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.W(q,this.x.d)
v=this.a
u=this.x.d
v.ak(v.aT,v.aU,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.x.e)
v=this.a
u=this.x.e
v.af(v.az,v.aU,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bA
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.e:this.W(q,this.y.d)
v=this.a
u=this.y.d
v.ak(v.dO,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.W(q,this.y.e)
v=this.a
u=this.y.e
v.af(v.dP,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bC
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bE
u.a.uniform1f(u.d,s)
break
case C.e:this.W(q,this.z.d)
v=this.a
u=this.z.d
v.ak(v.dQ,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break
case C.f:this.W(q,this.z.e)
v=this.a
u=this.z.e
v.af(v.dR,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e1
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.ct
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cR(j.a)
s=t.a
h=t.b
g=t.c
g=t.C(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e2
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cu
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bm(j.gbd(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gw(j)
g=i.d
h=t.gbP()
s=t.gbn()
t=t.gbx()
g.a.uniform3f(g.d,h,s,t)
t=j.gce()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcf()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcg()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cv
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcr(j).j0()
g=i.c
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
g.a.uniform3f(g.d,h,s,t)
t=m.bm(j.gbd(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gw(j)
s=i.e
h=t.gbP()
g=t.gbn()
t=t.gbx()
s.a.uniform3f(s.d,h,g,t)
t=j.giZ()
g=i.f
g.a.uniform1f(g.d,t)
t=j.giY()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gce()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcf()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcg()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e4
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
s=this.a.cw
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbi()
H.v(q,"$isd",t,"$asd")
if(!C.a.b7(q,s)){s.sb_(q.length)
C.a.h(q,s)}s=j.gcr(j)
h=i.d
g=s.gaQ(s)
f=s.gaR(s)
s=s.gaS()
h.a.uniform3f(h.d,g,f,s)
s=j.gbQ()
f=i.b
g=s.gaQ(s)
h=s.gaR(s)
s=s.gaS()
f.a.uniform3f(f.d,g,h,s)
s=j.gbf(j)
h=i.c
g=s.gaQ(s)
f=s.gaR(s)
s=s.gaS()
h.a.uniform3f(h.d,g,f,s)
s=m.cR(j.gcr(j))
f=s.a
g=s.b
h=s.c
h=s.C(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gw(j)
g=i.f
f=h.gbP()
s=h.gbn()
h=h.gbx()
g.a.uniform3f(g.d,f,s,h)
h=j.gbi()
s=h.gei(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdk()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gb_())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e5
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.y,u=v.length,t=[P.A],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
h=this.a.cz
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbi()
H.v(q,"$isd",s,"$asd")
if(!C.a.b7(q,h)){h.sb_(q.length)
C.a.h(q,h)}e=m.l(0,j.ga0(j))
h=j.ga0(j).bm(new V.aj(0,0,0))
g=i.b
f=h.gq(h)
d=h.gt(h)
h=h.gcT(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bm(new V.aj(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cF(0)
d=i.d
n=new Float32Array(H.br(H.v(new V.ev(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ac(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gw(j)
h=i.e
f=d.gbP()
g=d.gbn()
d=d.gbx()
h.a.uniform3f(h.d,f,g,d)
d=j.gbi()
h=d.gei(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdk()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gb_())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gce()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcf()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcg()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e6
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga0(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbi()
H.v(q,"$isd",z,"$asd")
if(!C.a.b7(q,t)){t.sb_(q.length)
C.a.h(q,t)}t=j.gbd(j)
s=i.b
h=t.gq(t)
g=t.gt(t)
t=t.gcT(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcr(j)
g=i.c
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
g.a.uniform3f(g.d,h,s,t)
t=j.gbQ()
s=i.d
h=t.gaQ(t)
g=t.gaR(t)
t=t.gaS()
s.a.uniform3f(s.d,h,g,t)
t=j.gbf(j)
g=i.e
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
g.a.uniform3f(g.d,h,s,t)
t=m.bm(j.gbd(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbi()
s=t.gei(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdk()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gb_())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gw(j)
s=i.y
h=t.gbP()
g=t.gbn()
t=t.gbx()
s.a.uniform3f(s.d,h,g,t)
t=j.gj5()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gj6()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gce()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcf()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcg()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.e:this.W(q,this.Q.d)
z=this.a
v=this.Q.d
z.ak(z.dS,z.bF,v)
break
case C.f:this.W(q,this.Q.e)
z=this.a
v=this.Q.e
z.af(z.dT,z.bF,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga0(v).cF(0)
a.Q=v}z=z.fy
z.toString
z.ai(v.ac(0,!0))}if(x.dy){this.W(q,this.ch)
z=this.a
v=this.ch
z.af(z.dU,z.dV,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bG
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.e:this.W(q,this.cx.d)
z=this.a
v=this.cx.d
z.ak(z.dW,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.W(q,this.cx.e)
z=this.a
v=this.cx.e
z.af(z.dX,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bJ
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bI
v.a.uniform1f(v.d,t)
break
case C.e:this.W(q,this.cy.d)
z=this.a
v=this.cy.d
z.ak(z.dY,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break
case C.f:this.W(q,this.cy.e)
z=this.a
v=this.cy.e
z.af(z.dZ,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bL
z.a.uniform1f(z.d,u)
break
case C.e:this.W(q,this.db.d)
z=this.a
u=this.db.d
z.ak(z.e_,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break
case C.f:this.W(q,this.db.e)
z=this.a
u=this.db.e
z.af(z.e0,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].Y(a)
z=b.e
z.Y(a)
z.ab(a)
z.am(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].am(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.dL()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dc().az}},ir:{"^":"db;0f,a,b,0c,0d,0e",
fO:function(a){var z,y
z=this.f
if(!$.r.$2(z,a)){y=this.f
this.f=a
z=new D.I(this.b,y,a,this,[P.A])
z.b=!0
this.a.P(z)}},
b1:function(){this.d_()
this.fO(1)}},db:{"^":"b;",
P:[function(a){this.a.P(H.e(a,"$isp"))},function(){return this.P(null)},"dl","$1","$0","gaM",0,2,1],
b1:["d_",function(){}],
b2:["eF",function(){}],
du:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gaM(),{func:1,ret:-1,args:[D.p]})
C.a.a_(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gaM(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.I(this.b+".texture2D",x,this.d,this,[T.eO])
z.b=!0
this.a.P(z)}},
dv:function(a){},
hr:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.P(null)}this.b1()
this.du(null)
this.dv(null)
this.a.P(null)}},is:{"^":"db;a,b,0c,0d,0e"},ba:{"^":"db;0f,a,b,0c,0d,0e",
ca:function(a){var z,y
if(!J.a1(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.y])
y.b=!0
this.a.P(y)}},
b1:["d0",function(){this.d_()
this.ca(new V.y(0,0,0))}],
b2:["bp",function(){this.eF()
this.ca(new V.y(1,1,1))}],
sw:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.b2()
z=this.a
z.a=null
z.P(null)}this.ca(b)}},iu:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bt:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.A])
z.b=!0
this.a.P(z)}},
b1:function(){this.d0()
this.bt(1)},
b2:function(){this.bp()
this.bt(1)},
say:function(a){var z
if(a<=0)this.hr(0)
else if(this.c===C.c){this.c=C.h
this.bp()
this.bt(1)
z=this.a
z.a=null
z.P(null)}this.bt(a)}},iv:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bu:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.A])
z.b=!0
this.a.P(z)}},
b1:function(){this.d0()
this.bu(100)},
b2:function(){this.bp()
this.bu(100)}},jh:{"^":"cc;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.P(null)},"dl","$1","$0","gaM",0,2,1],
en:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$iseI")
if(z==null){y=a.a
z=new A.eI(y,"Skybox")
z.d1(y,"Skybox")
z.eg(0,$.jj,$.ji)
z.x=z.f.j(0,"posAttr")
z.y=H.k(z.r.j(0,"fov"),"$isZ")
z.z=H.k(z.r.j(0,"ratio"),"$isZ")
z.Q=H.k(z.r.j(0,"boxClr"),"$isL")
z.ch=H.k(z.r.j(0,"boxTxt"),"$isak")
z.cx=H.k(z.r.j(0,"viewMat"),"$isaH")
a.dF(z)}this.a=z}if(b.e==null){y=b.d.dH(new Z.fk(a.a),$.$get$aA())
y.aB($.$get$aA()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.Y(a)}y=a.d
x=a.c
w=this.a
w.Y(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cX(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga0(x).cF(0)
w=w.cx
w.toString
w.ai(x.ac(0,!0))
y=b.e
if(y instanceof Z.cV){y.Y(a)
y.ab(a)
y.am(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dL()
y=this.c
if(y!=null)y.am(a)}},cc:{"^":"b;"}}],["","",,T,{"^":"",cx:{"^":"cR;"},eO:{"^":"cx;0b,0c,0d,0e,0f,0r,0x,0y,a",
Y:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
am:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},dq:{"^":"cx;0b,0c,0d,0e,a",
Y:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
am:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jx:{"^":"b;a,0b,0c,0d,0e",
hO:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.d3(null,a,null)
w=new T.eO(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.H()
z=W.a6
W.a0(x,"load",H.f(new T.jz(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hN:function(a){return this.hO(a,!1,!1,!1,!1)},
aL:function(a,b,c,d,e,f){var z,y
z=W.d3(null,c,null);++this.d
y=W.a6
W.a0(z,"load",H.f(new T.jy(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dt:function(a,b,c){var z,y,x,w
b=V.dO(b,2)
z=V.dO(a.width,2)
y=V.dO(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cX(null,null)
x.width=z
x.height=y
w=H.e(C.l.ew(x,"2d"),"$ise_")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mv(w.getImageData(0,0,x.width,x.height))}}},jz:{"^":"n:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dt(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.A.ep(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.dN()}++x.e}},jy:{"^":"n:10;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dt(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.A.ep(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.dN();++z.e}}}],["","",,V,{"^":"",hi:{"^":"b;",
ba:function(a,b){return!0},
i:function(a){return"all"},
$isc9:1},c9:{"^":"b;"},et:{"^":"b;",
ba:["eE",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].ba(0,b))return!0
return!1}],
i:["cZ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc9:1},bL:{"^":"et;0a",
ba:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.cZ(0)+"]"}},j8:{"^":"b;0a",
eJ:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.m,P.ad])
for(y=new H.eq(a,a.gk(a),0,[H.at(a,"w",0)]);y.G();)z.m(0,y.d,!0)
this.a=z},
ba:function(a,b){return this.a.bz(0,b)},
i:function(a){var z=this.a
return P.cb(z.gaq(z),0,null)},
$isc9:1,
p:{
aa:function(a){var z=new V.j8()
z.eJ(a)
return z}}},eK:{"^":"b;a,b,0c,0d",
ghR:function(a){return this.b},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eU(this.a.N(0,b))
w.a=H.c([],[V.c9])
w.c=!1
C.a.h(this.c,w)
return w},
hA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.ba(0,a))return w}return},
i:function(a){return this.b}},eR:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h8(this.b,"\n","\\n")
y=H.h8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eS:{"^":"b;a,b,0c",
i:function(a){return this.b}},jI:{"^":"b;0a,0b,0c",
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eK(this,b)
z.c=H.c([],[V.eU])
this.a.m(0,b,z)}return z},
bk:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eS(this,a)
y=P.j
z.c=new H.b1(0,0,[y,y])
this.b.m(0,a,z)}return z},
il:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eR])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hA(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cb(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.ghR(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cb(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eR(o==null?p.b:o,q,t)}++t}}}},eU:{"^":"et;b,0c,0a",
i:function(a){return this.b.b+": "+this.cZ(0)}}}],["","",,X,{"^":"",cj:{"^":"b;",$isaE:1},hV:{"^":"dp;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
as:function(a){var z=this.x
if(!(z==null))z.B(a)},
sdI:function(a,b){var z
if(this.b){this.b=!1
z=new D.I("clearColor",!0,!1,this,[P.ad])
z.b=!0
this.as(z)}},
Y:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.al(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.al(w.b*x)
t=C.d.al(w.c*y)
a.c=t
w=C.d.al(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
d0:function(a,b,c,d,e,f,g){var z,y
z=new X.hV()
y=new V.aZ(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eG(0,0,1,1)
z.r=y
return z}}},hX:{"^":"b;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
Y:function(a){var z
a.cy.bO(V.bb())
z=V.bb()
a.db.bO(z)},
am:function(a){a.cy.aD()
a.db.aD()},
$isaE:1,
$iscj:1},iF:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
as:[function(a){var z
H.e(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.as(null)},"io","$1","$0","geR",0,2,1],
Y:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bO(V.aC(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eC
if(z==null){z=V.ew(new V.aj(0,0,0),new V.N(0,1,0),new V.N(0,0,-1))
$.eC=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aY(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bO(r)},
am:function(a){a.cy.aD()
a.db.aD()},
$isaE:1,
$iscj:1,
p:{
eB:function(a,b,c,d){var z,y,x,w
z=new X.iF()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gu()
x.toString
w=H.f(z.geR(),{func:1,ret:-1,args:[D.p]})
C.a.h(x.a,w)}x=new D.I("mover",y,z.a,z,[U.af])
x.b=!0
z.as(x)}x=z.b
if(!$.r.$2(x,b)){y=z.b
z.b=b
x=new D.I("fov",y,b,z,[P.A])
x.b=!0
z.as(x)}x=z.c
if(!$.r.$2(x,d)){y=z.c
z.c=d
x=new D.I("near",y,d,z,[P.A])
x.b=!0
z.as(x)}x=z.d
if(!$.r.$2(x,a)){y=z.d
z.d=a
x=new D.I("far",y,a,z,[P.A])
x.b=!0
z.as(x)}return z}}},dp:{"^":"b;"}}],["","",,V,{"^":"",
n_:function(a){P.jH(C.H,new V.n0(a))},
n0:{"^":"n:47;a",
$1:function(a){H.e(a,"$isbl")
P.dP(C.j.er(this.a.ghE(),2)+" fps")}},
iT:{"^":"b;a,b,0c",
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cB().gbe().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.b4(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bz(this.c).h(0,v)
t=W.hZ("radio")
t.checked=x
t.name=z
z=W.a6
W.a0(t,"change",H.f(new V.iU(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bz(this.c).h(0,w.createElement("br"))},
a8:function(a,b,c){return this.dD(a,b,c,!1)},
b4:function(a){var z,y,x,w,v
z=P.cB()
y=P.j
x=P.ep(z.gbe(),y,y)
x.m(0,this.a,a)
w=z.cO(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fz([],[]).bR(""),"",v)}},
iU:{"^":"n:10;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.b4(this.d)}}},
jd:{"^":"b;0a,0b",
eK:function(a,b){var z,y,x,w,v,u,t
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
t=W.a6
W.a0(z,"scroll",H.f(new V.jg(x),{func:1,ret:-1,args:[t]}),!1,t)},
hn:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.j],"$asd")
this.fQ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.il(C.a.hJ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.h7(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cF(C.T,s,C.k,!1)
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
hj:function(a){var z,y,x,w,v,u,t
H.v(a,"$isd",[P.j],"$asd")
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
x=H.e(w.insertCell(-1),"$isdn").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$isdn")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fQ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jI()
y=P.j
z.a=new H.b1(0,0,[y,V.eK])
z.b=new H.b1(0,0,[y,V.eS])
z.c=z.N(0,"Start")
y=z.N(0,"Start").E(0,"Bold")
x=V.aa(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").E(0,"Bold")
x=new V.bL()
w=[V.c9]
x.a=H.c([],w)
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
x=new V.bL()
x.a=H.c([],w)
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
x=new V.bL()
x.a=H.c([],w)
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
y=new V.bL()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").E(0,"LinkEnd")
y=V.aa(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").E(0,"LinkTail")
y=new V.bL()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").E(0,"Other").a,new V.hi())
x=z.N(0,"Other").E(0,"Other")
y=new V.bL()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.aa(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.bk("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.bk("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.bk("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.bk("Link")
x=z.N(0,"Other")
x.d=x.a.bk("Other")
this.b=z},
p:{
je:function(a,b){var z=new V.jd()
z.eK(a,!0)
return z}}},
jg:{"^":"n:10;a",
$1:function(a){P.jG(C.r,new V.jf(this.a))}},
jf:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.j.al(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
ju:{"^":"b;a,b,0c,d",
a8:function(a,b,c){var z,y,x,w,v,u
z=W.d3(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bz(this.c)
x=y.gk(y)
y=W.ae
W.a0(z,"click",H.f(new V.jw(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bz(this.c).h(0,z)
J.bz(this.c).h(0,document.createElement("br"))
w=P.cB().gbe().j(0,H.l(this.a))
if(w==null){this.b4(x)
v=c}else{u=P.c0(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.a8(a,b,!1)},
b4:function(a){var z,y,x,w,v
z=P.cB()
y=P.j
x=P.ep(z.gbe(),y,y)
x.m(0,this.a,H.l(a))
w=z.cO(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fz([],[]).bR(""),"",v)}},
jw:{"^":"n:48;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isae")
z=this.a
y=J.bz(z.c)
y.J(y,new V.jv())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.b4(this.d)}},
jv:{"^":"n:49;",
$1:function(a){var z
H.e(a,"$isW")
if(!!J.J(a).$isd2){z=a.style
z.border="solid 2px white"}}}}],["","",,B,{"^":"",
h3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.je("Test 015",!0)
y=W.cX(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.hn(H.c(["Test of Material Lighting shader with bump mapping, reflections, refractions."],x))
z.hj(H.c(["bumpMaps","controls"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.jE(w,!0,!0,!0,!1)
u=X.d0(!0,!0,!1,null,2000,null,0)
u.sdI(0,!1)
t=E.ec(null,!0,null,"",null,null)
s=F.dl()
F.bX(s,null,null,1,1,1,0,0,1)
F.bX(s,null,null,1,1,0,1,0,3)
F.bX(s,null,null,1,1,0,0,1,2)
F.bX(s,null,null,1,1,-1,0,0,0)
F.bX(s,null,null,1,1,0,-1,0,0)
F.bX(s,null,null,1,1,0,0,-1,3)
s.ax()
t.sbV(0,s)
z=v.f
r=z.a
q=r.createTexture()
r.bindTexture(34067,q)
r.texParameteri(34067,10242,10497)
r.texParameteri(34067,10243,10497)
r.texParameteri(34067,10241,9729)
r.texParameteri(34067,10240,9729)
r.bindTexture(34067,null)
p=new T.dq(0)
p.b=q
p.c=!1
p.d=0
p.e=D.H()
z.aL(p,q,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aL(p,q,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aL(p,q,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aL(p,q,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aL(p,q,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aL(p,q,"../resources/maskonaive/negz.jpg",34074,!1,!1)
o=new O.ip()
z=O.cY(V.aN)
o.e=z
z.aZ(o.gff(),o.gfg())
z=new O.ba(o,"emission")
z.c=C.c
z.f=new V.y(0,0,0)
o.f=z
z=new O.ba(o,"ambient")
z.c=C.c
z.f=new V.y(0,0,0)
o.r=z
z=new O.ba(o,"diffuse")
z.c=C.c
z.f=new V.y(0,0,0)
o.x=z
z=new O.ba(o,"invDiffuse")
z.c=C.c
z.f=new V.y(0,0,0)
o.y=z
z=new O.iv(o,"specular")
z.c=C.c
z.f=new V.y(0,0,0)
z.ch=100
o.z=z
z=new O.is(o,"bump")
z.c=C.c
o.Q=z
o.ch=null
z=new O.ba(o,"reflect")
z.c=C.c
z.f=new V.y(0,0,0)
o.cx=z
z=new O.iu(o,"refract")
z.c=C.c
z.f=new V.y(0,0,0)
z.ch=1
o.cy=z
z=new O.ir(o,"alpha")
z.c=C.c
z.f=1
o.db=z
z=new D.i7()
z.bq(D.a3)
z.e=H.c([],[D.cm])
z.f=H.c([],[D.iH])
z.r=H.c([],[D.jk])
z.x=H.c([],[D.jA])
z.y=H.c([],[D.jB])
z.z=H.c([],[D.jC])
z.Q=null
z.ch=null
z.cW(z.gfe(),z.gfA(),z.gfC())
o.dx=z
r=z.Q
if(r==null){r=D.H()
z.Q=r
z=r}else z=r
r={func:1,ret:-1,args:[D.p]}
n=H.f(o.gfL(),r)
C.a.h(z.a,n)
n=o.dx
z=n.ch
if(z==null){z=D.H()
n.ch=z}n=H.f(o.gaM(),r)
C.a.h(z.a,n)
o.dy=null
z=o.dx
m=U.e3(V.ew(new V.aj(0,0,0),new V.N(0,1,0),new V.N(-1,-1,-1)))
l=new D.cm()
l.c=new V.y(1,1,1)
l.a=new V.N(0,0,1)
k=l.b
l.b=m
m=m.gu()
m.toString
j=H.f(l.geO(),r)
C.a.h(m.a,j)
m=new D.I("mover",k,l.b,l,[U.af])
m.b=!0
l.aH(m)
i=new V.y(1,1,1)
if(!l.c.A(0,i)){k=l.c
l.c=i
m=new D.I("color",k,i,l,[V.y])
m.b=!0
l.aH(m)}z.h(0,l)
z=o.r
z.sw(0,new V.y(0.1,0.1,0.1))
z=o.x
z.sw(0,new V.y(0.1,0.1,0.1))
o.z.sw(0,new V.y(0,0,0))
z=o.z
if(z.c===C.c){z.c=C.h
z.bp()
z.bu(100)
m=z.a
m.a=null
m.P(null)}z.bu(10)
z=o.ch
if(z!==p){if(z!=null)C.a.a_(z.e.a,n)
k=o.ch
o.ch=p
C.a.h(p.e.a,n)
z=new D.I("environment",k,o.ch,o,[T.dq])
z.b=!0
o.P(z)}o.cy.say(0.6)
z=o.cy
z.sw(0,new V.y(0.2,0.3,1))
z=o.cx
z.sw(0,new V.y(0.6,0.6,0.6))
h=new U.ef()
h.bq(U.af)
h.aZ(h.gfd(),h.gfB())
h.e=null
h.f=V.bb()
h.r=0
z=v.r
n=new U.k8()
m=U.cZ()
m.scS(0,!0)
m.scH(6.283185307179586)
m.scJ(0)
m.sa9(0,0)
m.scI(100)
m.sV(0)
m.scq(0.5)
n.b=m
m=m.gu()
m.toString
l=H.f(n.gaI(),r)
C.a.h(m.a,l)
m=U.cZ()
m.scS(0,!0)
m.scH(6.283185307179586)
m.scJ(0)
m.sa9(0,0)
m.scI(100)
m.sV(0)
m.scq(0.5)
n.c=m
C.a.h(m.gu().a,l)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
g=new X.aD(!1,!1,!1)
k=n.d
n.d=g
m=[X.aD]
l=new D.I("modifiers",k,g,n,m)
l.b=!0
n.T(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.I("invertX",l,!1,n,[P.ad])
l.b=!0
n.T(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.I("invertY",l,!1,n,[P.ad])
l.b=!0
n.T(l)}n.b5(z)
h.h(0,n)
z=v.r
n=new U.k7()
l=U.cZ()
l.scS(0,!0)
l.scH(6.283185307179586)
l.scJ(0)
l.sa9(0,0)
l.scI(100)
l.sV(0)
l.scq(0.2)
n.b=l
l=l.gu()
l.toString
j=H.f(n.gaI(),r)
C.a.h(l.a,j)
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
g=new X.aD(!0,!1,!1)
k=n.c
n.c=g
l=new D.I("modifiers",k,g,n,m)
l.b=!0
n.T(l)
n.b5(z)
h.h(0,n)
z=v.r
n=new U.k9()
n.c=0.01
n.d=0
n.e=0
g=new X.aD(!1,!1,!1)
n.b=g
m=new D.I("modifiers",null,g,n,m)
m.b=!0
n.T(m)
n.b5(z)
h.h(0,n)
h.h(0,U.e3(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.eB(2000,1.0471975511965976,h,0.1)
e=new M.hB()
e.sb6(null)
e.sbg(0,null)
e.sbh(null)
z=E.ec(null,!0,null,"",null,null)
s=F.dl()
n=s.a
m=new V.N(-1,-1,1)
m=m.C(0,Math.sqrt(m.I(m)))
d=n.bw(new V.bN(1,2,4,6),new V.aZ(1,0,0,1),new V.aj(-1,-1,0),new V.U(0,1),m,null)
n=s.a
m=new V.N(1,-1,1)
m=m.C(0,Math.sqrt(m.I(m)))
c=n.bw(new V.bN(0,3,4,6),new V.aZ(0,0,1,1),new V.aj(1,-1,0),new V.U(1,1),m,null)
n=s.a
m=new V.N(1,1,1)
m=m.C(0,Math.sqrt(m.I(m)))
b=n.bw(new V.bN(0,2,5,6),new V.aZ(0,1,0,1),new V.aj(1,1,0),new V.U(1,0),m,null)
n=s.a
m=new V.N(-1,1,1)
m=m.C(0,Math.sqrt(m.I(m)))
a=n.bw(new V.bN(0,2,4,7),new V.aZ(1,1,0,1),new V.aj(-1,1,0),new V.U(0,0),m,null)
s.d.hk(H.c([d,c,b,a],[F.aP]))
s.ax()
z.sbV(0,s)
e.d=z
e.e=null
z=new O.jh()
z.b=1.0471975511965976
k=z.c
z.c=p
n=p.e
m=H.f(z.gaM(),r)
C.a.h(n.a,m)
n=new D.I("boxTexture",k,z.c,z,[T.dq])
n.b=!0
z.P(n)
i=new V.y(1,1,1)
if(!J.a1(z.d,i)){k=z.d
z.d=i
n=new D.I("boxColor",k,i,z,[V.y])
n.b=!0
z.P(n)}z.e=null
e.sbh(z)
e.sbg(0,u)
e.sb6(f)
a0=new M.hO()
z=O.cY(E.aM)
a0.d=z
z.aZ(a0.gfi(),a0.gfj())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sb6(null)
a0.sbg(0,null)
a0.sbh(null)
a0.sb6(f)
a0.sbh(o)
a0.sbg(0,u)
a0.d.h(0,t)
a0.b.sdI(0,!1)
z=M.aF
n=H.c([e,a0],[z])
m=new M.hw()
m.bq(z)
m.e=!1
m.f=null
m.aZ(m.gfD(),m.gfE())
m.cd(0,n)
z=v.d
if(z!==m){if(z!=null){z=z.gu()
z.toString
n=H.f(v.gd3(),r)
C.a.a_(z.a,n)}v.d=m
z=m.gu()
z.toString
r=H.f(v.gd3(),r)
C.a.h(z.a,r)
v.eM()}z=new V.iT("controls",!0)
r=x.getElementById("controls")
z.c=r
if(r==null)H.t("Failed to find controls for RadioGroup")
z.dD(0,"Silver",new B.mK(o),!0)
z.a8(0,"Gold",new B.mL(o))
z.a8(0,"Glass",new B.mM(o))
z.a8(0,"Blue Glass",new B.mN(o))
z.a8(0,"Water Bubble",new B.mO(o))
z.a8(0,"No Reflection",new B.mP(o))
z.a8(0,"Pink Distort",new B.mQ(o))
z.a8(0,"Cloak",new B.mR(o))
z.a8(0,"White and Shiny",new B.mS(o))
z=new V.ju("bumpMaps",!0,new B.mT(o,v))
x=x.getElementById("bumpMaps")
z.c=x
if(x==null)H.t("Failed to find bumpMaps for Texture2DGroup")
z.a8(0,"../resources/BumpMap1.png",!0)
z.h(0,"../resources/BumpMap2.png")
z.h(0,"../resources/BumpMap3.png")
z.h(0,"../resources/BumpMap4.png")
z.h(0,"../resources/BumpMap5.png")
z.h(0,"../resources/ScrewBumpMap.png")
z.h(0,"../resources/CtrlPnlBumpMap.png")
V.n_(v)},
mK:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.2,0.2,0.2))
z.cy.sw(0,new V.y(0,0,0))
z=z.cx
z.sw(0,new V.y(1,1,1))}},
mL:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.11,0.11,0.1))
y=z.x
y.sw(0,new V.y(0.21,0.21,0.2))
z.cy.sw(0,new V.y(0,0,0))
z=z.cx
z.sw(0,new V.y(1,0.9,0.5))}},
mM:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.say(0.4)
y=z.cy
y.sw(0,new V.y(0.6,0.6,0.6))
z=z.cx
z.sw(0,new V.y(0.4,0.4,0.4))}},
mN:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.say(0.4)
y=z.cy
y.sw(0,new V.y(0.2,0.3,1))
z=z.cx
z.sw(0,new V.y(0.3,0.3,0.3))}},
mO:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.say(0.6)
y=z.cy
y.sw(0,new V.y(0.8,0.8,0.8))
z=z.cx
z.sw(0,new V.y(0.2,0.2,0.2))}},
mP:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.say(0.6)
y=z.cy
y.sw(0,new V.y(1,1,1))
z.cx.sw(0,new V.y(0,0,0))}},
mQ:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.say(0.9)
y=z.cy
y.sw(0,new V.y(1,0.8,0.8))
z.cx.sw(0,new V.y(0,0,0))}},
mR:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0,0,0))
y=z.x
y.sw(0,new V.y(0.1,0.1,0.1))
z.cy.say(0.99)
y=z.cy
y.sw(0,new V.y(0.95,0.95,0.95))
z.cx.sw(0,new V.y(0,0,0))}},
mS:{"^":"n:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.y(0.3,0.3,0.3))
y=z.x
y.sw(0,new V.y(0.5,0.5,0.5))
z.cy.sw(0,new V.y(0,0,0))
z=z.cx
z.sw(0,new V.y(0.3,0.3,0.3))}},
mT:{"^":"n:17;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.hN(a)
x=z.c
if(x!==C.e){if(x===C.c)z.b2()
z.c=C.e
z.dv(null)
x=z.a
x.a=null
x.P(null)}z.du(y)}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ej.prototype
return J.ei.prototype}if(typeof a=="string")return J.cr.prototype
if(a==null)return J.ek.prototype
if(typeof a=="boolean")return J.i2.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cK(a)}
J.aK=function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cK(a)}
J.cf=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cK(a)}
J.mA=function(a){if(typeof a=="number")return J.cq.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cz.prototype
return a}
J.dK=function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cz.prototype
return a}
J.aX=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c8.prototype
return a}if(a instanceof P.b)return a
return J.cK(a)}
J.a1=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).A(a,b)}
J.ha=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mA(a).M(a,b)}
J.dQ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).j(a,b)}
J.cO=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h0(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cf(a).m(a,b,c)}
J.hb=function(a,b){return J.dK(a).H(a,b)}
J.hc=function(a,b,c){return J.aX(a).fJ(a,b,c)}
J.hd=function(a,b,c,d){return J.aX(a).dE(a,b,c,d)}
J.he=function(a,b){return J.dK(a).Z(a,b)}
J.cP=function(a,b,c){return J.aK(a).hs(a,b,c)}
J.cQ=function(a,b){return J.cf(a).K(a,b)}
J.hf=function(a,b,c,d){return J.cf(a).aA(a,b,c,d)}
J.dR=function(a,b){return J.cf(a).J(a,b)}
J.bz=function(a){return J.aX(a).gcn(a)}
J.b5=function(a){return J.J(a).gU(a)}
J.bA=function(a){return J.cf(a).ga3(a)}
J.aw=function(a){return J.aK(a).gk(a)}
J.hg=function(a,b){return J.aX(a).i7(a,b)}
J.hh=function(a,b){return J.aX(a).sa4(a,b)}
J.ab=function(a){return J.J(a).i(a)}
I.al=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cW.prototype
C.I=J.q.prototype
C.a=J.b9.prototype
C.J=J.ei.prototype
C.d=J.ej.prototype
C.t=J.ek.prototype
C.j=J.cq.prototype
C.b=J.cr.prototype
C.Q=J.c8.prototype
C.W=H.dg.prototype
C.X=W.iC.prototype
C.z=J.iG.prototype
C.A=P.di.prototype
C.q=J.cz.prototype
C.B=W.bS.prototype
C.C=W.ks.prototype
C.E=new P.hn(!1)
C.D=new P.hm(C.E)
C.F=new P.iE()
C.G=new P.kh()
C.i=new P.le()
C.c=new A.ck(0,"ColorSourceType.None")
C.h=new A.ck(1,"ColorSourceType.Solid")
C.e=new A.ck(2,"ColorSourceType.Texture2D")
C.f=new A.ck(3,"ColorSourceType.TextureCube")
C.r=new P.bD(0)
C.H=new P.bD(5e6)
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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

C.M=function(getTagFallback) {
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
C.N=function() {
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
C.O=function(hooks) {
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
C.P=function(hooks) {
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
C.w=H.c(I.al([127,2047,65535,1114111]),[P.m])
C.m=H.c(I.al([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.c(I.al([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.c(I.al([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.S=H.c(I.al([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.T=H.c(I.al([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.c(I.al([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.c(I.al([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.U=H.c(I.al([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.c(I.al([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.R=H.c(I.al([]),[P.j])
C.V=new H.hA(0,{},C.R,[P.j,P.j])
C.k=new P.ka(!1)
$.aB=0
$.bB=null
$.dW=null
$.dD=!1
$.fZ=null
$.fT=null
$.h6=null
$.cJ=null
$.cM=null
$.dL=null
$.bs=null
$.bY=null
$.bZ=null
$.dE=!1
$.T=C.i
$.e9=null
$.e8=null
$.e7=null
$.e6=null
$.r=V.iw()
$.jj="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ji="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eC=null
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
I.$lazy(y,x,w)}})(["e5","$get$e5",function(){return H.fY("_$dart_dartClosure")},"d6","$get$d6",function(){return H.fY("_$dart_js")},"eV","$get$eV",function(){return H.aG(H.cy({
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aG(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"eX","$get$eX",function(){return H.aG(H.cy(null))},"eY","$get$eY",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aG(H.cy(void 0))},"f2","$get$f2",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f_","$get$f_",function(){return H.aG(H.f0(null))},"eZ","$get$eZ",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"f4","$get$f4",function(){return H.aG(H.f0(void 0))},"f3","$get$f3",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dy","$get$dy",function(){return P.kt()},"c_","$get$c_",function(){return[]},"ff","$get$ff",function(){return P.ke()},"fm","$get$fm",function(){return H.iA(H.br(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fJ","$get$fJ",function(){return P.iZ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fP","$get$fP",function(){return P.mc()},"e4","$get$e4",function(){return{}},"fi","$get$fi",function(){return Z.as(0)},"fg","$get$fg",function(){return Z.as(511)},"aA","$get$aA",function(){return Z.as(1)},"aS","$get$aS",function(){return Z.as(2)},"aR","$get$aR",function(){return Z.as(4)},"aT","$get$aT",function(){return Z.as(8)},"aU","$get$aU",function(){return Z.as(16)},"bQ","$get$bQ",function(){return Z.as(32)},"bR","$get$bR",function(){return Z.as(64)},"fh","$get$fh",function(){return Z.as(96)},"bp","$get$bp",function(){return Z.as(128)},"aQ","$get$aQ",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.m,[P.i,E.aM]]},{func:1,ret:P.G,args:[F.ap]},{func:1,ret:P.G,args:[W.a6]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[D.p]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:P.j,args:[P.m]},{func:1,args:[,]},{func:1,ret:P.G,args:[P.j]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[P.m,[P.i,D.a3]]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.m,[P.i,U.af]]},{func:1,ret:-1,args:[P.m,[P.i,M.aF]]},{func:1,ret:-1,args:[P.m,[P.i,V.aN]]},{func:1,ret:P.ad,args:[W.M]},{func:1,ret:-1,args:[P.j,P.m]},{func:1,ret:W.W,args:[W.M]},{func:1,args:[P.j]},{func:1,ret:-1,args:[P.b],opt:[P.ay]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.G,args:[P.Y]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.ad,args:[P.A,P.A]},{func:1,ret:[P.aV,,],args:[,]},{func:1,ret:-1,args:[W.bS]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ad,args:[[P.i,D.a3]]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.Q,args:[P.m]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.G,args:[F.aP,P.A,P.A]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.j]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.G,args:[P.bl]},{func:1,ret:P.G,args:[W.ae]},{func:1,ret:P.G,args:[W.W]},{func:1,ret:P.G,args:[P.j,,]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n2(d||a)
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
Isolate.al=a.al
Isolate.dI=a.dI
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
if(typeof dartMainRunner==="function")dartMainRunner(B.h3,[])
else B.h3([])})})()
//# sourceMappingURL=test.dart.js.map
