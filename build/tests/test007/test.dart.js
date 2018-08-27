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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d2(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d3=function(){}
var dart=[["","",,H,{"^":"",lN:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
d9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cj:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d6==null){H.kE()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.ex("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cA()]
if(v!=null)return v
v=H.kJ(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cA(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
t:function(a,b){return a===b},
gP:function(a){return H.bo(a)},
i:["dE",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fW:{"^":"m;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isaa:1},
dG:{"^":"m;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isG:1},
cB:{"^":"m;",
gP:function(a){return 0},
i:["dF",function(a){return String(a)}]},
hw:{"^":"cB;"},
cT:{"^":"cB;"},
bL:{"^":"cB;",
i:function(a){var z=a[$.$get$dt()]
if(z==null)return this.dF(a)
return"JavaScript function for "+H.j(J.a5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscw:1},
aS:{"^":"m;$ti",
h:function(a,b){H.B(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ag("add"))
a.push(b)},
V:function(a,b){var z
if(!!a.fixed$length)H.r(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.ba(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.W(z,y,H.j(a[y]))
return z.join(b)},
fM:function(a){return this.B(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bn:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ad(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ad(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gc4:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.fU())},
aK:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cx(a,"[","]")},
gU:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gP:function(a){return H.bo(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.bX(b,"newLength",null))
if(b<0)throw H.f(P.ad(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.Y(b)
H.B(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aN(a,b))
if(b>=a.length||b<0)throw H.f(H.aN(a,b))
a[b]=c},
$ish:1,
$isd:1,
q:{
fV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.bX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ad(a,0,4294967295,"length",null))
return J.dD(new Array(a),b)},
dD:function(a,b){return J.bi(H.c(a,[b]))},
bi:function(a){H.bH(a)
a.fixed$length=Array
return a}}},
lM:{"^":"aS;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c8:{"^":"m;",
hj:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.ag(""+a+".toInt()"))},
c2:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.ag(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ag(""+a+".round()"))},
ds:function(a,b){var z,y
if(b>20)throw H.f(P.ad(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
dA:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cJ(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cJ(a,b)},
cJ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.ag("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.eW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eW:function(a,b){return b>31?0:a>>>b},
a5:function(a,b){if(typeof b!=="number")throw H.f(H.aM(b))
return a<b},
$isv:1,
$isQ:1},
dF:{"^":"c8;",$isC:1},
dE:{"^":"c8;"},
cz:{"^":"m;",
bS:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aN(a,b))
if(b<0)throw H.f(H.aN(a,b))
if(b>=a.length)H.r(H.aN(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.f(H.aN(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.R(b)
if(typeof b!=="string")throw H.f(P.bX(b,null,null))
return a+b},
bo:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.cc(b,null,null))
if(b>c)throw H.f(P.cc(b,null,null))
if(c>a.length)throw H.f(P.cc(c,null,null))
return a.substring(b,c)},
cl:function(a,b){return this.bo(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fZ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a3:function(a,b){return this.fZ(a,b," ")},
fu:function(a,b,c){if(c>a.length)throw H.f(P.ad(c,0,a.length,null,null))
return H.fc(a,b,c)},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdT:1,
$isn:1}}],["","",,H,{"^":"",
fU:function(){return new P.i3("No element")},
Z:{"^":"iC;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bS(this.a,b)},
$asey:function(){return[P.C]},
$ast:function(){return[P.C]},
$ash:function(){return[P.C]},
$asd:function(){return[P.C]}},
fG:{"^":"h;"},
dL:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bU(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.ba(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
hb:{"^":"h;a,b,$ti",
gU:function(a){return new H.hc(J.bI(this.a),this.b,this.$ti)},
gk:function(a){return J.b8(this.a)},
C:function(a,b){return this.b.$1(J.dc(this.a,b))},
$ash:function(a,b){return[b]}},
hc:{"^":"cy;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascy:function(a,b){return[b]}},
iT:{"^":"h;a,b,$ti",
gU:function(a){return new H.iU(J.bI(this.a),this.b,this.$ti)}},
iU:{"^":"cy;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c3:{"^":"a;$ti"},
ey:{"^":"a;$ti"},
iC:{"^":"c9+ey;"}}],["","",,H,{"^":"",
kz:function(a){return init.types[H.Y(a)]},
kH:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a5(a)
if(typeof z!=="string")throw H.f(H.aM(a))
return z},
bo:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.I(a).$iscT){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aZ(w,0)===36)w=C.h.cl(w,1)
r=H.d7(H.bH(H.aO(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dW:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hG:function(a){var z,y,x,w
z=H.c([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b2(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aM(w))}return H.dW(z)},
dX:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aM(x))
if(x<0)throw H.f(H.aM(x))
if(x>65535)return H.hG(a)}return H.dW(a)},
hF:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b2(z,10))>>>0,56320|z&1023)}throw H.f(P.ad(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hE:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hC:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hy:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hz:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hB:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hD:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hA:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
o:function(a){throw H.f(H.aM(a))},
i:function(a,b){if(a==null)J.b8(a)
throw H.f(H.aN(a,b))},
aN:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.av(!0,b,"index",null)
z=H.Y(J.b8(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cc(b,"index",null)},
kv:function(a,b,c){if(a>c)return new P.cb(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end","Invalid value")
return new P.av(!0,b,"end",null)},
aM:function(a){return new P.av(!0,a,null,null)},
kq:function(a){if(typeof a!=="number")throw H.f(H.aM(a))
return a},
f:function(a){var z
if(a==null)a=new P.dS()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fe})
z.name=""}else z.toString=H.fe
return z},
fe:function(){return J.a5(this.dartException)},
r:function(a){throw H.f(a)},
x:function(a){throw H.f(P.ba(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dR(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eg()
u=$.$get$eh()
t=$.$get$ei()
s=$.$get$ej()
r=$.$get$en()
q=$.$get$eo()
p=$.$get$el()
$.$get$ek()
o=$.$get$eq()
n=$.$get$ep()
m=v.a2(y)
if(m!=null)return z.$1(H.cC(H.R(y),m))
else{m=u.a2(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.R(y),m))}else{m=t.a2(y)
if(m==null){m=s.a2(y)
if(m==null){m=r.a2(y)
if(m==null){m=q.a2(y)
if(m==null){m=p.a2(y)
if(m==null){m=s.a2(y)
if(m==null){m=o.a2(y)
if(m==null){m=n.a2(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dR(H.R(y),m))}}return z.$1(new H.iB(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.av(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e3()
return a},
b6:function(a){var z
if(a==null)return new H.eP(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eP(a)},
kx:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.W(0,a[y],a[x])}return b},
kG:function(a,b,c,d,e,f){H.k(a,"$iscw")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
b4:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kG)
a.$identity=z
return z},
fu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isd){z.$reflectionInfo=d
x=H.hJ(z).r}else x=d
w=e?Object.create(new H.i4().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.an
if(typeof u!=="number")return u.E()
$.an=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dn(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kz,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dg:H.cp
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dn(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fr:function(a,b,c,d){var z=H.cp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dn:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ft(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fr(y,!w,z,b)
if(y===0){w=$.an
if(typeof w!=="number")return w.E()
$.an=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b9
if(v==null){v=H.bY("self")
$.b9=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.an
if(typeof w!=="number")return w.E()
$.an=w+1
t+=w
w="return function("+t+"){return this."
v=$.b9
if(v==null){v=H.bY("self")
$.b9=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fs:function(a,b,c,d){var z,y
z=H.cp
y=H.dg
switch(b?-1:a){case 0:throw H.f(H.hS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ft:function(a,b){var z,y,x,w,v,u,t,s
z=$.b9
if(z==null){z=H.bY("self")
$.b9=z}y=$.df
if(y==null){y=H.bY("receiver")
$.df=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fs(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.an
if(typeof y!=="number")return y.E()
$.an=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.an
if(typeof y!=="number")return y.E()
$.an=y+1
return new Function(z+y+"}")()},
d2:function(a,b,c,d,e,f,g){var z,y
z=J.bi(H.bH(b))
H.Y(c)
y=!!J.I(d).$isd?J.bi(d):d
return H.fu(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.at(a,"String"))},
kM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.at(a,"num"))},
f2:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.at(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.at(a,"int"))},
fa:function(a,b){throw H.f(H.at(a,H.R(b).substring(3)))},
kO:function(a,b){var z=J.bU(b)
throw H.f(H.fq(a,z.bo(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.fa(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kO(a,b)},
bH:function(a){if(a==null)return a
if(!!J.I(a).$isd)return a
throw H.f(H.at(a,"List"))},
kI:function(a,b){if(a==null)return a
if(!!J.I(a).$isd)return a
if(J.I(a)[b])return a
H.fa(a,b)},
f3:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
bT:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f3(J.I(a))
if(z==null)return!1
y=H.f6(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cZ)return a
$.cZ=!0
try{if(H.bT(a,b))return a
z=H.bW(b)
y=H.at(a,z)
throw H.f(y)}finally{$.cZ=!1}},
d4:function(a,b){if(a!=null&&!H.d1(a,b))H.r(H.at(a,H.bW(b)))
return a},
eY:function(a){var z
if(a instanceof H.u){z=H.f3(J.I(a))
if(z!=null)return H.bW(z)
return"Closure"}return H.aV(a)},
kT:function(a){throw H.f(new P.fy(H.R(a)))},
f4:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aO:function(a){if(a==null)return
return a.$ti},
mK:function(a,b,c){return H.b7(a["$as"+H.j(c)],H.aO(b))},
bG:function(a,b,c,d){var z
H.R(c)
H.Y(d)
z=H.b7(a["$as"+H.j(c)],H.aO(b))
return z==null?null:z[d]},
aI:function(a,b,c){var z
H.R(b)
H.Y(c)
z=H.b7(a["$as"+H.j(b)],H.aO(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Y(b)
z=H.aO(a)
return z==null?null:z[b]},
bW:function(a){var z=H.aP(a,null)
return z},
aP:function(a,b){var z,y
H.y(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d7(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kg(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.y(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.E(t,b[r])
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
for(z=H.kw(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aP(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d7:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.bR("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aP(u,c)}v="<"+z.i(0)+">"
return v},
b7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b3:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aO(a)
y=J.I(a)
if(y[b]==null)return!1
return H.f0(H.b7(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.R(b)
H.bH(c)
H.R(d)
if(a==null)return a
z=H.b3(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d7(c,0,null)
throw H.f(H.at(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f0:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ai(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ai(a[y],b,c[y],d))return!1
return!0},
mI:function(a,b,c){return a.apply(b,H.b7(J.I(b)["$as"+H.j(c)],H.aO(b)))},
f7:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.f7(z)}return!1},
d1:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.f7(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bT(a,b)}y=J.I(a).constructor
x=H.aO(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ai(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.d1(a,b))throw H.f(H.at(a,H.bW(b)))
return a},
ai:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.f6(a,b,c,d)
if('func' in a)return c.builtin$cls==="cw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ai("type" in a?a.type:null,b,x,d)
else if(H.ai(a,b,x,d))return!0
else{if(!('$is'+"be" in y.prototype))return!1
w=y.prototype["$as"+"be"]
v=H.b7(w,z?a.slice(1):null)
return H.ai(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bW(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f0(H.b7(r,z),b,u,d)},
f6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ai(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ai(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ai(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ai(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kL(m,b,l,d)},
kL:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ai(c[w],d,a[w],b))return!1}return!0},
mJ:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
kJ:function(a){var z,y,x,w,v,u
z=H.R($.f5.$1(a))
y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.f_.$2(a,z))
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
return u.i}if(v==="+")return H.f9(a,x)
if(v==="*")throw H.f(P.ex(z))
if(init.leafTags[z]===true){u=H.cl(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f9(a,x)},
f9:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d9(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cl:function(a){return J.d9(a,!1,null,!!a.$isA)},
kK:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cl(z)
else return J.d9(z,c,null,null)},
kE:function(){if(!0===$.d6)return
$.d6=!0
H.kF()},
kF:function(){var z,y,x,w,v,u,t,s
$.ci=Object.create(null)
$.ck=Object.create(null)
H.kA()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fb.$1(v)
if(u!=null){t=H.kK(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kA:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b2(C.A,H.b2(C.F,H.b2(C.n,H.b2(C.n,H.b2(C.E,H.b2(C.B,H.b2(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f5=new H.kB(v)
$.f_=new H.kC(u)
$.fb=new H.kD(t)},
b2:function(a,b){return a(b)||b},
fc:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fd:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hI:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hJ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bi(z)
y=z[0]
x=z[1]
return new H.hI(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ip:{"^":"a;a,b,c,d,e,f",
a2:function(a){var z,y,x
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
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ip(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
em:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ht:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dR:function(a,b){return new H.ht(a,b==null?null:b.method)}}},
fZ:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fZ(a,y,z?null:b.receiver)}}},
iB:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kU:{"^":"u:14;a",
$1:function(a){if(!!J.I(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eP:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gdu:function(){return this},
$iscw:1,
gdu:function(){return this}},
e8:{"^":"u;"},
i4:{"^":"e8;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
co:{"^":"e8;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.bo(this.a)
else y=typeof z!=="object"?J.au(z):H.bo(z)
return(y^H.bo(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
q:{
cp:function(a){return a.a},
dg:function(a){return a.c},
bY:function(a){var z,y,x,w,v
z=new H.co("self","target","receiver","name")
y=J.bi(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iq:{"^":"X;a",
i:function(a){return this.a},
q:{
at:function(a,b){return new H.iq("TypeError: "+H.j(P.c2(a))+": type '"+H.eY(a)+"' is not a subtype of type '"+b+"'")}}},
fp:{"^":"X;a",
i:function(a){return this.a},
q:{
fq:function(a,b){return new H.fp("CastError: "+H.j(P.c2(a))+": type '"+H.eY(a)+"' is not a subtype of type '"+b+"'")}}},
hR:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
hS:function(a){return new H.hR(a)}}},
aT:{"^":"h9;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gam:function(a){return new H.dK(this,[H.z(this,0)])},
cP:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cz(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cz(y,b)}else return this.fK(b)},
fK:function(a){var z=this.d
if(z==null)return!1
return this.c3(this.bx(z,J.au(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.fL(b)},
fL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bx(z,J.au(a)&0x3ffffff)
x=this.c3(y,a)
if(x<0)return
return y[x].b},
W:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bC()
this.b=z}this.cq(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bC()
this.c=y}this.cq(y,b,c)}else{x=this.d
if(x==null){x=this.bC()
this.d=x}w=J.au(b)&0x3ffffff
v=this.bx(x,w)
if(v==null)this.bH(x,w,[this.bD(b,c)])
else{u=this.c3(v,b)
if(u>=0)v[u].b=c
else v.push(this.bD(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.ba(this))
z=z.c}},
cq:function(a,b,c){var z
H.B(b,H.z(this,0))
H.B(c,H.z(this,1))
z=this.b_(a,b)
if(z==null)this.bH(a,b,this.bD(b,c))
else z.b=c},
ec:function(){this.r=this.r+1&67108863},
bD:function(a,b){var z,y
z=new H.h1(H.B(a,H.z(this,0)),H.B(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ec()
return z},
c3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dN(this)},
b_:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
e5:function(a,b){delete a[b]},
cz:function(a,b){return this.b_(a,b)!=null},
bC:function(){var z=Object.create(null)
this.bH(z,"<non-identifier-key>",z)
this.e5(z,"<non-identifier-key>")
return z},
$isdJ:1},
h1:{"^":"a;a,b,0c,0d"},
dK:{"^":"fG;a,$ti",
gk:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.h2(z,z.r,this.$ti)
y.c=z.e
return y}},
h2:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.ba(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kB:{"^":"u:14;a",
$1:function(a){return this.a(a)}},
kC:{"^":"u:31;a",
$2:function(a,b){return this.a(a,b)}},
kD:{"^":"u:34;a",
$1:function(a){return this.a(H.R(a))}},
fX:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdT:1,
q:{
fY:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fP("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kw:function(a){return J.dD(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bC:function(a){return a},
aL:function(a,b,c){H.bH(b)
if(a>>>0!==a||a>=c)throw H.f(H.aN(b,a))},
kf:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kv(a,b,c))
return b},
hq:{"^":"m;",$ismr:1,"%":"DataView;ArrayBufferView;cH|eJ|eK|hp|eL|eM|aK"},
cH:{"^":"hq;",
gk:function(a){return a.length},
$isA:1,
$asA:I.d3},
hp:{"^":"eK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
$asc3:function(){return[P.v]},
$ast:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eM;",
$asc3:function(){return[P.C]},
$ast:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]}},
lX:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lY:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lZ:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m_:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m0:{"^":"aK;",
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m1:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hr:{"^":"aK;",
gk:function(a){return a.length},
j:function(a,b){H.aL(b,a,a.length)
return a[b]},
bn:function(a,b,c){return new Uint8Array(a.subarray(b,H.kf(b,c,a.length)))},
"%":";Uint8Array"},
eJ:{"^":"cH+t;"},
eK:{"^":"eJ+c3;"},
eL:{"^":"cH+t;"},
eM:{"^":"eL+c3;"}}],["","",,P,{"^":"",
iW:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kn()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b4(new P.iY(z),1)).observe(y,{childList:true})
return new P.iX(z,y,x)}else if(self.setImmediate!=null)return P.ko()
return P.kp()},
mx:[function(a){self.scheduleImmediate(H.b4(new P.iZ(H.b(a,{func:1,ret:-1})),0))},"$1","kn",4,0,11],
my:[function(a){self.setImmediate(H.b4(new P.j_(H.b(a,{func:1,ret:-1})),0))},"$1","ko",4,0,11],
mz:[function(a){P.cP(C.m,H.b(a,{func:1,ret:-1}))},"$1","kp",4,0,11],
cP:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.Y(a.a,1000)
return P.jU(z<0?0:z,b)},
eb:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aW]})
z=C.f.Y(a.a,1000)
return P.jV(z<0?0:z,b)},
kj:function(a,b){if(H.bT(a,{func:1,args:[P.a,P.al]}))return b.h7(a,null,P.a,P.al)
if(H.bT(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.bX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ki:function(){var z,y
for(;z=$.b1,z!=null;){$.bE=null
y=z.b
$.b1=y
if(y==null)$.bD=null
z.a.$0()}},
mH:[function(){$.d_=!0
try{P.ki()}finally{$.bE=null
$.d_=!1
if($.b1!=null)$.$get$cW().$1(P.f1())}},"$0","f1",0,0,3],
eX:function(a){var z=new P.eD(H.b(a,{func:1,ret:-1}))
if($.b1==null){$.bD=z
$.b1=z
if(!$.d_)$.$get$cW().$1(P.f1())}else{$.bD.b=z
$.bD=z}},
km:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b1
if(z==null){P.eX(a)
$.bE=$.bD
return}y=new P.eD(a)
x=$.bE
if(x==null){y.b=z
$.bE=y
$.b1=y}else{y.b=x.b
x.b=y
$.bE=y
if(y.b==null)$.bD=y}},
kP:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.i===y){P.ch(null,null,C.i,a)
return}y.toString
P.ch(null,null,y,H.b(y.bN(a),z))},
ik:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.cP(a,b)}return P.cP(a,H.b(y.bN(b),z))},
il:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aW]}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.eb(a,b)}x=y.cN(b,P.aW)
$.N.toString
return P.eb(a,H.b(x,z))},
cg:function(a,b,c,d,e){var z={}
z.a=d
P.km(new P.kk(z,e))},
eV:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
eW:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kl:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
ch:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.bN(d):c.fq(d,-1)
P.eX(d)},
iY:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iX:{"^":"u:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iZ:{"^":"u:2;a",
$0:function(){this.a.$0()}},
j_:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eS:{"^":"a;a,0b,c",
dT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b4(new P.jX(this,b),0),a)
else throw H.f(P.ag("`setTimeout()` not found."))},
dU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b4(new P.jW(this,a,Date.now(),b),0),a)
else throw H.f(P.ag("Periodic timer."))},
$isaW:1,
q:{
jU:function(a,b){var z=new P.eS(!0,0)
z.dT(a,b)
return z},
jV:function(a,b){var z=new P.eS(!1,0)
z.dU(a,b)
return z}}},
jX:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jW:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dH(w,x)}z.c=y
this.d.$1(z)}},
b0:{"^":"a;0a,b,c,d,e,$ti",
fR:function(a){if(this.c!==6)return!0
return this.b.b.cd(H.b(this.d,{func:1,ret:P.aa,args:[P.a]}),a.a,P.aa,P.a)},
fJ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bT(z,{func:1,args:[P.a,P.al]}))return H.d4(w.hc(z,a.a,a.b,null,y,P.al),x)
else return H.d4(w.cd(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aG:{"^":"a;cI:a<,b,0eO:c<,$ti",
dr:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kj(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aG(0,$.N,[c])
w=b==null?1:3
this.cr(new P.b0(x,w,a,b,[z,c]))
return x},
hi:function(a,b){return this.dr(a,null,b)},
cr:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb0")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaG")
z=y.a
if(z<4){y.cr(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ch(null,null,z,H.b(new P.jd(this,a),{func:1,ret:-1}))}},
cE:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb0")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaG")
y=u.a
if(y<4){u.cE(a)
return}this.a=y
this.c=u.c}z.a=this.b1(a)
y=this.b
y.toString
P.ch(null,null,y,H.b(new P.ji(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.k(this.c,"$isb0")
this.c=null
return this.b1(z)},
b1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cu:function(a){var z,y,x,w
z=H.z(this,0)
H.d4(a,{futureOr:1,type:z})
y=this.$ti
x=H.b3(a,"$isbe",y,"$asbe")
if(x){z=H.b3(a,"$isaG",y,null)
if(z)P.eF(a,this)
else P.je(a,this)}else{w=this.bF()
H.B(a,z)
this.a=4
this.c=a
P.bz(this,w)}},
bt:[function(a,b){var z
H.k(b,"$isal")
z=this.bF()
this.a=8
this.c=new P.ac(a,b)
P.bz(this,z)},function(a){return this.bt(a,null)},"hr","$2","$1","ge1",4,2,22],
$isbe:1,
q:{
je:function(a,b){var z,y,x
b.a=1
try{a.dr(new P.jf(b),new P.jg(b),null)}catch(x){z=H.aQ(x)
y=H.b6(x)
P.kP(new P.jh(b,z,y))}},
eF:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaG")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bz(b,y)}else{y=H.k(b.c,"$isb0")
b.a=2
b.c=a
a.cE(y)}},
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
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jl(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jk(x,b,r).$0()}else if((y&2)!==0)new P.jj(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.I(y).$isbe){if(y.a>=4){n=H.k(t.c,"$isb0")
t.c=null
b=t.b1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eF(y,t)
return}}m=b.b
n=H.k(m.c,"$isb0")
m.c=null
b=m.b1(n)
y=x.a
u=x.b
if(!y){H.B(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
jd:{"^":"u:2;a,b",
$0:function(){P.bz(this.a,this.b)}},
ji:{"^":"u:2;a,b",
$0:function(){P.bz(this.b,this.a.a)}},
jf:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.cu(a)}},
jg:{"^":"u:23;a",
$2:function(a,b){this.a.bt(a,H.k(b,"$isal"))},
$1:function(a){return this.$2(a,null)}},
jh:{"^":"u:2;a,b,c",
$0:function(){this.a.bt(this.b,this.c)}},
jl:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dn(H.b(w.d,{func:1}),null)}catch(v){y=H.aQ(v)
x=H.b6(v)
if(this.d){w=H.k(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.I(z).$isbe){if(z instanceof P.aG&&z.gcI()>=4){if(z.gcI()===8){w=this.b
w.b=H.k(z.geO(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hi(new P.jm(t),null)
w.a=!1}}},
jm:{"^":"u:24;a",
$1:function(a){return this.a}},
jk:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.B(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cd(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aQ(t)
y=H.b6(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
jj:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isac")
w=this.c
if(w.fR(z)&&w.e!=null){v=this.b
v.b=w.fJ(z)
v.a=!1}}catch(u){y=H.aQ(u)
x=H.b6(u)
w=H.k(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
eD:{"^":"a;a,0b"},
cL:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aG(0,$.N,[P.C])
z.a=0
this.fP(new P.i7(z,this),!0,new P.i8(z,y),y.ge1())
return y}},
i7:{"^":"u;a,b",
$1:function(a){H.B(a,H.aI(this.b,"cL",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aI(this.b,"cL",0)]}}},
i8:{"^":"u:2;a,b",
$0:function(){this.b.cu(this.a.a)}},
e5:{"^":"a;$ti"},
i6:{"^":"a;"},
aW:{"^":"a;"},
ac:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
k3:{"^":"a;",$ismw:1},
kk:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dS()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jG:{"^":"k3;",
hd:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.N){a.$0()
return}P.eV(null,null,this,a,-1)}catch(x){z=H.aQ(x)
y=H.b6(x)
P.cg(null,null,this,z,H.k(y,"$isal"))}},
he:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.N){a.$1(b)
return}P.eW(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.b6(x)
P.cg(null,null,this,z,H.k(y,"$isal"))}},
fq:function(a,b){return new P.jI(this,H.b(a,{func:1,ret:b}),b)},
bN:function(a){return new P.jH(this,H.b(a,{func:1,ret:-1}))},
cN:function(a,b){return new P.jJ(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dn:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.i)return a.$0()
return P.eV(null,null,this,a,b)},
cd:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.N===C.i)return a.$1(b)
return P.eW(null,null,this,a,b,c,d)},
hc:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.N===C.i)return a.$2(b,c)
return P.kl(null,null,this,a,b,c,d,e,f)},
h7:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jI:{"^":"u;a,b,c",
$0:function(){return this.a.dn(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jH:{"^":"u:3;a,b",
$0:function(){return this.a.hd(this.b)}},
jJ:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.he(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h4:function(a,b,c){H.bH(a)
return H.y(H.kx(a,new H.aT(0,0,[b,c])),"$isdJ",[b,c],"$asdJ")},
h3:function(a,b){return new H.aT(0,0,[a,b])},
h5:function(a,b,c,d){return new P.js(0,0,[d])},
fT:function(a,b,c){var z,y
if(P.d0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bF()
C.a.h(y,a)
try{P.kh(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.e6(b,H.kI(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cx:function(a,b,c){var z,y,x
if(P.d0(a))return b+"..."+c
z=new P.bR(b)
y=$.$get$bF()
C.a.h(y,a)
try{x=z
x.a=P.e6(x.gar(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gar()+c
y=z.gar()
return y.charCodeAt(0)==0?y:y},
d0:function(a){var z,y
for(z=0;y=$.$get$bF(),z<y.length;++z)if(a===y[z])return!0
return!1},
kh:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.D();t=s,s=r){r=z.gN(z);++x
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
dN:function(a){var z,y,x
z={}
if(P.d0(a))return"{...}"
y=new P.bR("")
try{C.a.h($.$get$bF(),a)
x=y
x.a=x.gar()+"{"
z.a=!0
J.fi(a,new P.ha(z,y))
z=y
z.a=z.gar()+"}"}finally{z=$.$get$bF()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gar()
return z.charCodeAt(0)==0?z:z},
js:{"^":"jn;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){return P.eI(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cY()
this.b=z}return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cY()
this.c=y}return this.cs(y,b)}else return this.dV(0,b)},
dV:function(a,b){var z,y,x
H.B(b,H.z(this,0))
z=this.d
if(z==null){z=P.cY()
this.d=z}y=this.cv(b)
x=z[y]
if(x==null)z[y]=[this.bs(b)]
else{if(this.cC(x,b)>=0)return!1
x.push(this.bs(b))}return!0},
V:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cF(this.c,b)
else return this.eJ(0,b)},
eJ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e8(z,b)
x=this.cC(y,b)
if(x<0)return!1
this.cK(y.splice(x,1)[0])
return!0},
cs:function(a,b){H.B(b,H.z(this,0))
if(H.k(a[b],"$iscX")!=null)return!1
a[b]=this.bs(b)
return!0},
cF:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscX")
if(z==null)return!1
this.cK(z)
delete a[b]
return!0},
ct:function(){this.r=this.r+1&67108863},
bs:function(a){var z,y
z=new P.cX(H.B(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ct()
return z},
cK:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ct()},
cv:function(a){return J.au(a)&0x3ffffff},
e8:function(a,b){return a[this.cv(b)]},
cC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
q:{
cY:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cX:{"^":"a;a,0b,0c"},
jt:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.ba(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.z(this,0))
this.c=z.b
return!0}}},
q:{
eI:function(a,b,c){var z=new P.jt(a,b,[c])
z.c=a.e
return z}}},
jn:{"^":"hT;"},
c9:{"^":"ju;",$ish:1,$isd:1},
t:{"^":"a;$ti",
gU:function(a){return new H.dL(a,this.gk(a),0,[H.bG(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hl:function(a,b){var z,y,x
z=H.c([],[H.bG(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.W(z,y,this.j(a,y));++y}return z},
hk:function(a){return this.hl(a,!0)},
i:function(a){return P.cx(a,"[","]")}},
h9:{"^":"ab;"},
ha:{"^":"u:12;a,b",
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
H.b(b,{func:1,ret:-1,args:[H.bG(this,a,"ab",0),H.bG(this,a,"ab",1)]})
for(z=J.bI(this.gam(a));z.D();){y=z.gN(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b8(this.gam(a))},
i:function(a){return P.dN(a)},
$isa3:1},
hV:{"^":"a;$ti",
i:function(a){return P.cx(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.dd("index"))
if(b<0)H.r(P.ad(b,0,null,"index",null))
for(z=P.eI(this,this.r,H.z(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
$ish:1},
hT:{"^":"hV;"},
ju:{"^":"a+t;"}}],["","",,P,{"^":"",cs:{"^":"a;$ti"},dr:{"^":"i6;$ti"},fI:{"^":"cs;",
$ascs:function(){return[P.n,[P.d,P.C]]}},iI:{"^":"fI;a"},iJ:{"^":"dr;",
fw:function(a,b,c){var z,y,x,w
z=a.length
P.dY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k2(0,0,x)
if(w.e7(a,b,z)!==z)w.cL(C.h.bS(a,z-1),0)
return C.I.bn(x,0,w.b)},
fv:function(a){return this.fw(a,0,null)},
$asdr:function(){return[P.n,[P.d,P.C]]}},k2:{"^":"a;a,b,c",
cL:function(a,b){var z,y,x,w,v
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
e7:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bS(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aZ(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cL(w,C.h.aZ(a,u)))x=u}else if(w<=2047){v=this.b
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
fK:function(a){var z=J.I(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aV(a)+"'"},
h6:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fV(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.W(z,y,b)
return H.y(z,"$isd",[d],"$asd")},
h7:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gU(a);x.D();)C.a.h(y,H.B(x.gN(x),c))
if(b)return y
return H.y(J.bi(y),"$isd",z,"$asd")},
cM:function(a,b,c){var z,y
z=P.C
H.y(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.y(a,"$isaS",[z],"$asaS")
y=a.length
c=P.dY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a5()
z=c<y}else z=!0
return H.dX(z?C.a.bn(a,b,c):a)}return P.i9(a,b,c)},
i9:function(a,b,c){var z,y,x
H.y(a,"$ish",[P.C],"$ash")
z=J.bI(a)
for(y=0;y<b;++y)if(!z.D())throw H.f(P.ad(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gN(z))
return H.dX(x)},
hK:function(a,b,c){return new H.fX(a,H.fY(a,!1,!0,!1))},
k1:function(a,b,c,d){var z,y,x,w,v,u
H.y(a,"$isd",[P.C],"$asd")
if(c===C.q){z=$.$get$eU().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fv(H.B(b,H.aI(c,"cs",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hF(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
q:function(a){return new P.eE(a)},
db:function(a){H.kN(a)},
aa:{"^":"a;"},
"+bool":0,
aj:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gP:function(a){var z=this.a
return(z^C.f.b2(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fz(H.hE(this))
y=P.bJ(H.hC(this))
x=P.bJ(H.hy(this))
w=P.bJ(H.hz(this))
v=P.bJ(H.hB(this))
u=P.bJ(H.hD(this))
t=P.fA(H.hA(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bJ:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"Q;"},
"+double":0,
bc:{"^":"a;a",
a5:function(a,b){return C.f.a5(this.a,H.k(b,"$isbc").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bc))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fF()
y=this.a
if(y<0)return"-"+new P.bc(0-y).i(0)
x=z.$1(C.f.Y(y,6e7)%60)
w=z.$1(C.f.Y(y,1e6)%60)
v=new P.fE().$1(y%1e6)
return""+C.f.Y(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dz:function(a,b,c,d,e,f){return new P.bc(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fE:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fF:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dS:{"^":"X;",
i:function(a){return"Throw of null."}},
av:{"^":"X;a,b,c,d",
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
u=P.c2(this.b)
return w+v+": "+H.j(u)},
q:{
fk:function(a){return new P.av(!1,null,null,a)},
bX:function(a,b,c){return new P.av(!0,a,b,c)},
dd:function(a){return new P.av(!1,null,a,"Must not be null")}}},
cb:{"^":"av;e,f,a,b,c,d",
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
dY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.f(P.ad(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.f(P.ad(b,a,c,"end",f))
return b}return c}}},
fS:{"^":"av;e,k:f>,a,b,c,d",
gbv:function(){return"RangeError"},
gbu:function(){if(J.ff(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
M:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b8(b))
return new P.fS(b,z,!0,a,c,"Index out of range")}}},
iD:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ag:function(a){return new P.iD(a)}}},
iA:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ex:function(a){return new P.iA(a)}}},
i3:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fw:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c2(z))+"."},
q:{
ba:function(a){return new P.fw(a)}}},
hu:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
e3:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fy:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eE:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fP:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bo(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"Q;"},
"+int":0,
h:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gU(this)
for(y=0;z.D();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.dd("index"))
if(b<0)H.r(P.ad(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.D();){x=z.gN(z)
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
i:function(a){return P.fT(this,"(",")")}},
cy:{"^":"a;$ti"},
d:{"^":"a;$ti",$ish:1},
"+List":0,
a3:{"^":"a;$ti"},
G:{"^":"a;",
gP:function(a){return P.a.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Q:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gP:function(a){return H.bo(this)},
i:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.i(this)}},
al:{"^":"a;"},
n:{"^":"a;",$isdT:1},
"+String":0,
bR:{"^":"a;ar:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
e6:function(a,b,c){var z=J.bI(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gN(z))
while(z.D())}else{a+=H.j(z.gN(z))
for(;z.D();)a=a+c+H.j(z.gN(z))}return a}}}}],["","",,W,{"^":"",
cr:function(a,b){var z=document.createElement("canvas")
return z},
fH:function(a){H.k(a,"$isa2")
return"wheel"},
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eH:function(a,b,c,d){var z,y
z=W.ce(W.ce(W.ce(W.ce(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eZ:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.i)return a
return z.cN(a,b)},
bh:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kW:{"^":"cK;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kX:{"^":"m;0k:length=","%":"AccessibleNodeList"},
kY:{"^":"bh;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kZ:{"^":"bh;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fo:{"^":"m;","%":";Blob"},
cq:{"^":"bh;",
bm:function(a,b,c){if(c!=null)return a.getContext(b,P.kr(c,null))
return a.getContext(b)},
dw:function(a,b){return this.bm(a,b,null)},
$iscq:1,
"%":"HTMLCanvasElement"},
dl:{"^":"m;",$isdl:1,"%":"CanvasRenderingContext2D"},
l4:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l6:{"^":"c0;0k:length=","%":"CSSPerspective"},
l7:{"^":"cv;0n:x=,0p:y=","%":"CSSPositionValue"},
l8:{"^":"c0;0n:x=,0p:y=","%":"CSSRotation"},
bb:{"^":"m;",$isbb:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l9:{"^":"c0;0n:x=,0p:y=","%":"CSSScale"},
la:{"^":"j3;0k:length=",
dz:function(a,b){var z=a.getPropertyValue(this.dZ(a,b))
return z==null?"":z},
dZ:function(a,b){var z,y
z=$.$get$ds()
y=z[b]
if(typeof y==="string")return y
y=this.eX(a,b)
z[b]=y
return y},
eX:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fB()+b
if(z in a)return z
return b},
gbO:function(a){return a.bottom},
gae:function(a){return a.height},
gaE:function(a){return a.left},
gaR:function(a){return a.right},
gaU:function(a){return a.top},
gag:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"a;",
gaE:function(a){return this.dz(a,"left")}},
cv:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c0:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lb:{"^":"cv;0k:length=","%":"CSSTransformValue"},
lc:{"^":"c0;0n:x=,0p:y=","%":"CSSTranslation"},
ld:{"^":"cv;0k:length=","%":"CSSUnparsedValue"},
le:{"^":"m;0k:length=","%":"DataTransferItemList"},
lf:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
lg:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lh:{"^":"fC;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fC:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
li:{"^":"j5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a9,P.Q]]},
$ast:function(){return[[P.a9,P.Q]]},
$ish:1,
$ash:function(){return[[P.a9,P.Q]]},
$isd:1,
$asd:function(){return[[P.a9,P.Q]]},
$asw:function(){return[[P.a9,P.Q]]},
"%":"ClientRectList|DOMRectList"},
fD:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gag(a))+" x "+H.j(this.gae(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.b3(b,"$isa9",[P.Q],"$asa9")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaE(b)&&a.top===z.gaU(b)&&this.gag(a)===z.gag(b)&&this.gae(a)===z.gae(b)},
gP:function(a){return W.eH(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gbO:function(a){return a.bottom},
gae:function(a){return a.height},
gaE:function(a){return a.left},
gaR:function(a){return a.right},
gaU:function(a){return a.top},
gag:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa9:1,
$asa9:function(){return[P.Q]},
"%":";DOMRectReadOnly"},
lj:{"^":"j7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.n]},
$ast:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asw:function(){return[P.n]},
"%":"DOMStringList"},
lk:{"^":"m;0k:length=","%":"DOMTokenList"},
j2:{"^":"c9;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var z=this.hk(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
a0:{"^":"J;",
gcO:function(a){return new W.j2(a,a.children)},
gb5:function(a){return P.hH(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Q)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a6:{"^":"m;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"m;",
cM:["dD",function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(c!=null)this.dW(a,b,c,!1)}],
dW:function(a,b,c,d){return a.addEventListener(b,H.b4(H.b(c,{func:1,args:[W.a6]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eN|eO|eQ|eR"},
bd:{"^":"fo;",$isbd:1,"%":"File"},
lD:{"^":"jc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bd]},
$ast:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asw:function(){return[W.bd]},
"%":"FileList"},
lE:{"^":"a2;0k:length=","%":"FileWriter"},
lH:{"^":"bh;0k:length=","%":"HTMLFormElement"},
bf:{"^":"m;",$isbf:1,"%":"Gamepad"},
lI:{"^":"cK;0n:x=,0p:y=","%":"Gyroscope"},
lJ:{"^":"m;0k:length=","%":"History"},
lK:{"^":"jp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"m;0cR:data=",$isc4:1,"%":"ImageData"},
dC:{"^":"bh;",$isdC:1,"%":"HTMLImageElement"},
bj:{"^":"cQ;",$isbj:1,"%":"KeyboardEvent"},
lP:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
lQ:{"^":"cK;0n:x=,0p:y=","%":"Magnetometer"},
lS:{"^":"m;0k:length=","%":"MediaList"},
lT:{"^":"a2;",
cM:function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.dD(a,b,c,!1)},
"%":"MessagePort"},
lU:{"^":"jv;",
j:function(a,b){return P.aH(a.get(H.R(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gam:function(a){var z=H.c([],[P.n])
this.L(a,new W.hm(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hm:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lV:{"^":"jw;",
j:function(a,b){return P.aH(a.get(H.R(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gam:function(a){var z=H.c([],[P.n])
this.L(a,new W.hn(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hn:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"m;",$isbk:1,"%":"MimeType"},
lW:{"^":"jy;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$ish:1,
$ash:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asw:function(){return[W.bk]},
"%":"MimeTypeArray"},
ar:{"^":"cQ;",$isar:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j1:{"^":"c9;a",
gU:function(a){var z=this.a.childNodes
return new W.dA(z,z.length,-1,[H.bG(C.J,z,"w",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.J]},
$ash:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a2;",
i:function(a){var z=a.nodeValue
return z==null?this.dE(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hs:{"^":"jA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bn:{"^":"m;0k:length=",$isbn:1,"%":"Plugin"},
m5:{"^":"jE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"PluginArray"},
ma:{"^":"jK;",
j:function(a,b){return P.aH(a.get(H.R(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gam:function(a){var z=H.c([],[P.n])
this.L(a,new W.hQ(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hQ:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mc:{"^":"bh;0k:length=","%":"HTMLSelectElement"},
cK:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bp:{"^":"a2;",$isbp:1,"%":"SourceBuffer"},
md:{"^":"eO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"SourceBufferList"},
bq:{"^":"m;",$isbq:1,"%":"SpeechGrammar"},
me:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asw:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"m;0k:length=",$isbr:1,"%":"SpeechRecognitionResult"},
mg:{"^":"jP;",
j:function(a,b){return a.getItem(H.R(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gam:function(a){var z=H.c([],[P.n])
this.L(a,new W.i5(z))
return z},
gk:function(a){return a.length},
$asab:function(){return[P.n,P.n]},
$isa3:1,
$asa3:function(){return[P.n,P.n]},
"%":"Storage"},
i5:{"^":"u:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"m;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
bt:{"^":"a2;",$isbt:1,"%":"TextTrack"},
bu:{"^":"a2;",$isbu:1,"%":"TextTrackCue|VTTCue"},
ml:{"^":"jT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$ish:1,
$ash:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asw:function(){return[W.bu]},
"%":"TextTrackCueList"},
mm:{"^":"eR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asw:function(){return[W.bt]},
"%":"TextTrackList"},
mn:{"^":"m;0k:length=","%":"TimeRanges"},
bv:{"^":"m;",$isbv:1,"%":"Touch"},
aX:{"^":"cQ;",$isaX:1,"%":"TouchEvent"},
mo:{"^":"jZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asw:function(){return[W.bv]},
"%":"TouchList"},
mp:{"^":"m;0k:length=","%":"TrackDefaultList"},
cQ:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ms:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mu:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mv:{"^":"a2;0k:length=","%":"VideoTrackList"},
by:{"^":"ar;",
gfC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ag("deltaY is not supported"))},
gfB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ag("deltaX is not supported"))},
$isby:1,
"%":"WheelEvent"},
iV:{"^":"a2;",
eK:function(a,b){return a.requestAnimationFrame(H.b4(H.b(b,{func:1,ret:-1,args:[P.Q]}),1))},
e6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mA:{"^":"k5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bb]},
$ast:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asw:function(){return[W.bb]},
"%":"CSSRuleList"},
mB:{"^":"fD;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.b3(b,"$isa9",[P.Q],"$asa9")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaE(b)&&a.top===z.gaU(b)&&a.width===z.gag(b)&&a.height===z.gae(b)},
gP:function(a){return W.eH(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gag:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mD:{"^":"k7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bf]},
$ast:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asw:function(){return[W.bf]},
"%":"GamepadList"},
mE:{"^":"k9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asw:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mF:{"^":"kb;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$ast:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asw:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
mG:{"^":"kd;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$ish:1,
$ash:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asw:function(){return[W.bs]},
"%":"StyleSheetList"},
j8:{"^":"cL;a,b,c,$ti",
fP:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
mC:{"^":"j8;a,b,c,$ti"},
j9:{"^":"e5;a,b,c,d,e,$ti",
f0:function(){var z=this.d
if(z!=null&&this.a<=0)J.fh(this.b,this.c,z,!1)},
q:{
W:function(a,b,c,d,e){var z=c==null?null:W.eZ(new W.ja(c),W.a6)
z=new W.j9(0,a,b,z,!1,[e])
z.f0()
return z}}},
ja:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa6"))}},
w:{"^":"a;$ti",
gU:function(a){return new W.dA(a,this.gk(a),-1,[H.bG(this,a,"w",0)])}},
dA:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fg(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
j3:{"^":"m+fx;"},
j4:{"^":"m+t;"},
j5:{"^":"j4+w;"},
j6:{"^":"m+t;"},
j7:{"^":"j6+w;"},
jb:{"^":"m+t;"},
jc:{"^":"jb+w;"},
jo:{"^":"m+t;"},
jp:{"^":"jo+w;"},
jv:{"^":"m+ab;"},
jw:{"^":"m+ab;"},
jx:{"^":"m+t;"},
jy:{"^":"jx+w;"},
jz:{"^":"m+t;"},
jA:{"^":"jz+w;"},
jD:{"^":"m+t;"},
jE:{"^":"jD+w;"},
jK:{"^":"m+ab;"},
eN:{"^":"a2+t;"},
eO:{"^":"eN+w;"},
jL:{"^":"m+t;"},
jM:{"^":"jL+w;"},
jP:{"^":"m+ab;"},
jS:{"^":"m+t;"},
jT:{"^":"jS+w;"},
eQ:{"^":"a2+t;"},
eR:{"^":"eQ+w;"},
jY:{"^":"m+t;"},
jZ:{"^":"jY+w;"},
k4:{"^":"m+t;"},
k5:{"^":"k4+w;"},
k6:{"^":"m+t;"},
k7:{"^":"k6+w;"},
k8:{"^":"m+t;"},
k9:{"^":"k8+w;"},
ka:{"^":"m+t;"},
kb:{"^":"ka+w;"},
kc:{"^":"m+t;"},
kd:{"^":"kc+w;"}}],["","",,P,{"^":"",
ku:function(a){var z,y
z=J.I(a)
if(!!z.$isc4){y=z.gcR(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eT(a.data,a.height,a.width)},
kt:function(a){if(a instanceof P.eT)return{data:a.a,height:a.b,width:a.c}
return a},
aH:function(a){var z,y,x,w,v
if(a==null)return
z=P.h3(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.R(y[w])
z.W(0,v,a[v])}return z},
kr:function(a,b){var z={}
a.L(0,new P.ks(z))
return z},
dy:function(){var z=$.dx
if(z==null){z=J.cm(window.navigator.userAgent,"Opera",0)
$.dx=z}return z},
fB:function(){var z,y
z=$.du
if(z!=null)return z
y=$.dv
if(y==null){y=J.cm(window.navigator.userAgent,"Firefox",0)
$.dv=y}if(y)z="-moz-"
else{y=$.dw
if(y==null){y=!P.dy()&&J.cm(window.navigator.userAgent,"Trident/",0)
$.dw=y}if(y)z="-ms-"
else z=P.dy()?"-o-":"-webkit-"}$.du=z
return z},
eT:{"^":"a;cR:a>,b,c",$isc4:1},
ks:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fM:{"^":"c9;a,b",
gby:function(){var z,y,x
z=this.b
y=H.aI(z,"t",0)
x=W.a0
return new H.hb(new H.iT(z,H.b(new P.fN(),{func:1,ret:P.aa,args:[y]}),[y]),H.b(new P.fO(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b8(this.gby().a)},
j:function(a,b){var z=this.gby()
return z.b.$1(J.dc(z.a,b))},
gU:function(a){var z=P.h7(this.gby(),!1,W.a0)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$ash:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
fN:{"^":"u:26;",
$1:function(a){return!!J.I(H.k(a,"$isJ")).$isa0}},
fO:{"^":"u:27;",
$1:function(a){return H.e(H.k(a,"$isJ"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bQ:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
t:function(a,b){var z,y,x
if(b==null)return!1
z=H.b3(b,"$isbQ",[P.Q],null)
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gP:function(a){var z,y
z=J.au(this.a)
y=J.au(this.b)
return P.eG(P.bA(P.bA(0,z),y))}},
jF:{"^":"a;$ti",
gaR:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.B(z+this.c,H.z(this,0))},
gbO:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.B(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b3(b,"$isa9",[P.Q],"$asa9")
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gaE(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaU(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.z(this,0)
if(H.B(z+this.c,w)===y.gaR(b)){if(typeof x!=="number")return x.E()
z=H.B(x+this.d,w)===y.gbO(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.au(z)
x=this.b
w=J.au(x)
if(typeof z!=="number")return z.E()
v=H.z(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.B(x+this.d,v)
return P.eG(P.bA(P.bA(P.bA(P.bA(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cQ:function(a,b){var z,y
H.y(b,"$isbQ",[P.Q],"$asbQ")
z=b.a
y=this.a
if(typeof z!=="number")return z.dv()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dv()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a9:{"^":"jF;aE:a>,aU:b>,ag:c>,ae:d>,$ti",q:{
hH:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a5()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.a5()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",ll:{"^":"P;0n:x=,0p:y=","%":"SVGFEBlendElement"},lm:{"^":"P;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},ln:{"^":"P;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lo:{"^":"P;0n:x=,0p:y=","%":"SVGFECompositeElement"},lp:{"^":"P;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lq:{"^":"P;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lr:{"^":"P;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},ls:{"^":"P;0n:x=,0p:y=","%":"SVGFEFloodElement"},lt:{"^":"P;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lu:{"^":"P;0n:x=,0p:y=","%":"SVGFEImageElement"},lv:{"^":"P;0n:x=,0p:y=","%":"SVGFEMergeElement"},lw:{"^":"P;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lx:{"^":"P;0n:x=,0p:y=","%":"SVGFEOffsetElement"},ly:{"^":"P;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lz:{"^":"P;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lA:{"^":"P;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lB:{"^":"P;0n:x=,0p:y=","%":"SVGFETileElement"},lC:{"^":"P;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lF:{"^":"P;0n:x=,0p:y=","%":"SVGFilterElement"},lG:{"^":"bg;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fR:{"^":"bg;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bg:{"^":"P;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lL:{"^":"bg;0n:x=,0p:y=","%":"SVGImageElement"},bM:{"^":"m;",$isbM:1,"%":"SVGLength"},lO:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asw:function(){return[P.bM]},
"%":"SVGLengthList"},lR:{"^":"P;0n:x=,0p:y=","%":"SVGMaskElement"},bP:{"^":"m;",$isbP:1,"%":"SVGNumber"},m2:{"^":"jC;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bP]},
$ish:1,
$ash:function(){return[P.bP]},
$isd:1,
$asd:function(){return[P.bP]},
$asw:function(){return[P.bP]},
"%":"SVGNumberList"},m4:{"^":"P;0n:x=,0p:y=","%":"SVGPatternElement"},m6:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},m7:{"^":"m;0k:length=","%":"SVGPointList"},m8:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},m9:{"^":"fR;0n:x=,0p:y=","%":"SVGRectElement"},mh:{"^":"jR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asw:function(){return[P.n]},
"%":"SVGStringList"},P:{"^":"a0;",
gcO:function(a){return new P.fM(a,new W.j1(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mi:{"^":"bg;0n:x=,0p:y=","%":"SVGSVGElement"},ia:{"^":"bg;","%":"SVGTextPathElement;SVGTextContentElement"},mk:{"^":"ia;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bS:{"^":"m;",$isbS:1,"%":"SVGTransform"},mq:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bS]},
$ish:1,
$ash:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asw:function(){return[P.bS]},
"%":"SVGTransformList"},mt:{"^":"bg;0n:x=,0p:y=","%":"SVGUseElement"},jq:{"^":"m+t;"},jr:{"^":"jq+w;"},jB:{"^":"m+t;"},jC:{"^":"jB+w;"},jQ:{"^":"m+t;"},jR:{"^":"jQ+w;"},k_:{"^":"m+t;"},k0:{"^":"k_+w;"}}],["","",,P,{"^":"",l_:{"^":"m;0k:length=","%":"AudioBuffer"},l0:{"^":"j0;",
j:function(a,b){return P.aH(a.get(H.R(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aH(y.value[1]))}},
gam:function(a){var z=H.c([],[P.n])
this.L(a,new P.fm(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.n,null]},
$isa3:1,
$asa3:function(){return[P.n,null]},
"%":"AudioParamMap"},fm:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},l1:{"^":"a2;0k:length=","%":"AudioTrackList"},fn:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m3:{"^":"fn;0k:length=","%":"OfflineAudioContext"},j0:{"^":"m+ab;"}}],["","",,P,{"^":"",cJ:{"^":"m;",
hg:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kt(g))
return}if(!!z.$isdC)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.fk("Incorrect number or type of arguments"))},
hf:function(a,b,c,d,e,f,g){return this.hg(a,b,c,d,e,f,g,null,null,null)},
$iscJ:1,
"%":"WebGLRenderingContext"},iy:{"^":"m;",$isiy:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mf:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aH(a.item(b))},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a3,,,]]},
$ish:1,
$ash:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$asw:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},jN:{"^":"m+t;"},jO:{"^":"jN+w;"}}],["","",,O,{"^":"",aw:{"^":"a;0a,0b,0c,0d,$ti",
bq:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
ci:function(a,b,c){var z=H.aI(this,"aw",0)
H.b(b,{func:1,ret:P.aa,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.C,[P.h,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aX:function(a,b){return this.ci(a,null,b)},
eC:function(a){var z
H.y(a,"$ish",[H.aI(this,"aw",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dN:function(a,b){var z
H.y(b,"$ish",[H.aI(this,"aw",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aI(this,"aw",0)
H.B(b,z)
z=[z]
if(this.eC(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dN(x,H.c([b],z))}},
$ish:1,
q:{
ct:function(a){var z=new O.aw([a])
z.bq(a)
return z}}},cF:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
dO:function(a){var z=this.b
if(!(z==null))z.w(a)},
ao:function(){return this.dO(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gc4(z)
else return V.bO()},
dl:function(a){var z=this.a
if(a==null)C.a.h(z,V.bO())
else C.a.h(z,a)
this.ao()},
cc:function(){var z=this.a
if(z.length>0){z.pop()
this.ao()}}}}],["","",,E,{"^":"",cn:{"^":"a;"},aJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0X:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scj:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gdj(),{func:1,ret:-1,args:[D.p]})
C.a.V(y.a,x)}y=this.c
if(y!=null){y=y.gu()
y.toString
x=H.b(this.gdj(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.e1])
w.b=!0
this.a8(w)}},
saN:function(a){var z,y,x,w
if(!J.S(this.r,a)){z=this.r
if(z!=null){y=z.gu()
y.toString
x=H.b(this.gdi(),{func:1,ret:-1,args:[D.p]})
C.a.V(y.a,x)}if(a!=null){y=a.gu()
y.toString
x=H.b(this.gdi(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}this.r=a
w=new D.H("mover",z,a,this,[U.a7])
w.b=!0
this.a8(w)}},
af:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aG(0,b,this):null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.ao])
w.b=!0
this.a8(w)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.af(0,b)},
aF:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gR(z))
else C.a.h(z.a,y.l(0,z.gR(z)))
z.ao()
a.dm(this.f)
z=a.dy
x=(z&&C.a).gc4(z)
if(x!=null&&this.d!=null)x.h9(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.aF(a)
a.dk()
a.dx.cc()},
gu:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
a8:function(a){var z=this.z
if(!(z==null))z.w(a)},
Z:function(){return this.a8(null)},
fY:[function(a){H.k(a,"$isp")
this.e=null
this.a8(a)},function(){return this.fY(null)},"i5","$1","$0","gdj",0,2,0],
fX:[function(a){this.a8(H.k(a,"$isp"))},function(){return this.fX(null)},"i4","$1","$0","gdi",0,2,0],
fV:[function(a){this.a8(H.k(a,"$isp"))},function(){return this.fV(null)},"i2","$1","$0","gdh",0,2,0],
i1:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$ish",[E.aJ],"$ash")
for(z=b.length,y=this.gdh(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.aR()
t.a=H.c([],w)
t.c=0
u.sX(t)}t=u.gX()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.Z()},"$2","gfU",8,0,7],
i3:[function(a,b){var z,y,x,w,v,u,t
H.y(b,"$ish",[E.aJ],"$ash")
for(z=b.length,y=this.gdh(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.aR()
t.a=H.c([],w)
t.c=0
u.sX(t)}t=u.gX()
t.toString
H.b(y,x)
C.a.V(t.a,y)}}this.Z()},"$2","gfW",8,0,7],
$isax:1},hL:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dJ:function(a,b){var z,y,x,w,v
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
z=new O.cF()
y=[V.ao]
z.a=H.c([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.b(new E.hN(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cF()
z.a=H.c([],y)
v=z.gu()
v.toString
x=H.b(new E.hO(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cF()
z.a=H.c([],y)
y=z.gu()
y.toString
w=H.b(new E.hP(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.cN])
this.dy=z
C.a.h(z,null)
this.fr=new H.aT(0,0,[P.n,A.e0])},
gh6:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.l(0,y.gR(y))
this.z=y
z=y}return z},
dm:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc4(z):a;(z&&C.a).h(z,y)},
dk:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
hM:function(a,b){var z=new E.hL(a,b)
z.dJ(a,b)
return z}}},hN:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.z=null
z.ch=null}},hO:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hP:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},ih:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0X:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
dQ:[function(a){var z
H.k(a,"$isp")
z=this.x
if(!(z==null))z.w(a)
this.ha()},function(){return this.dQ(null)},"dP","$1","$0","gco",0,2,0],
gfI:function(){var z,y,x
z=Date.now()
y=C.f.Y(P.dz(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
cG:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.j.c2(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.c2(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
ha:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.ij(this),{func:1,ret:-1,args:[P.Q]})
C.t.e6(z)
C.t.eK(z,W.eZ(y,P.Q))}},
h8:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cG()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.dz(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ao()
w=x.db
C.a.sk(w.a,0)
w.ao()
w=x.dx
C.a.sk(w.a,0)
w.ao()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aF(this.e)}}catch(v){z=H.aQ(v)
y=H.b6(v)
P.db("Error: "+H.j(z))
P.db("Stack: "+H.j(y))
throw H.f(z)}},
q:{
ii:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscq)return E.ea(a,!0,!0,!0,!1)
y=W.cr(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcO(a).h(0,y)
w=E.ea(y,!0,!0,!0,!1)
w.a=a
return w},
ea:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ih()
y=P.h4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bm(a,"webgl",y)
x=H.k(x==null?C.k.bm(a,"experimental-webgl",y):x,"$iscJ")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hM(x,a)
w=new T.ib(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iE(a)
v=new X.h_()
v.c=new X.aq(!1,!1,!1)
v.d=P.h5(null,null,null,P.C)
w.b=v
v=new X.ho(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h8(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.io(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.e5,P.a]])
w.z=v
u=document
t=W.ar
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.b(w.geo(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.b(w.ger(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.b(w.gel(),q),!1,r))
v=w.z
p=W.bj
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.b(w.geu(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.b(w.ges(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.b(w.gex(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.b(w.gez(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.b(w.gey(),s),!1,t))
p=w.z
o=W.by;(p&&C.a).h(p,W.W(a,H.R(W.fH(a)),H.b(w.geA(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.b(w.gep(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.b(w.geq(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.b(w.geB(),q),!1,r))
r=w.z
q=W.aX
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.b(w.geI(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.b(w.geG(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.b(w.geH(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.cG()
return z}}},ij:{"^":"u:29;a",
$1:function(a){var z
H.kM(a)
z=this.a
if(z.z){z.z=!1
z.h8()}}}}],["","",,Z,{"^":"",eC:{"^":"a;a,b",q:{
cV:function(a,b,c){var z
H.y(c,"$isd",[P.C],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bC(c)),35044)
a.bindBuffer(b,null)
return new Z.eC(b,z)}}},dh:{"^":"cn;a,b,c,d,e",
bM:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aQ(y)
x=P.q('Failed to bind buffer attribute "'+J.a5(this.a)+'": '+H.j(z))
throw H.f(x)}},
i:function(a){return"["+J.a5(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iS:{"^":"a;a",$isl2:1},di:{"^":"a;a,0b,c,d",
aD:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bM:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bM(a)},
hn:function(a){var z,y,x
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
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a5(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ismj:1},c5:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},aZ:{"^":"a;a",
gck:function(a){var z,y
z=this.a
y=(z&$.$get$aD().a)!==0?3:0
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$bw().a)!==0)y+=3
if((z&$.$get$bx().a)!==0)y+=4
if((z&$.$get$b_().a)!==0)++y
return(z&$.$get$aA().a)!==0?y+4:y},
fp:function(a){var z,y,x
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
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eB()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aZ))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aD().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
ah:function(a){return new Z.aZ(a)}}}}],["","",,D,{"^":"",dm:{"^":"a;"},aR:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fL(z))
return x!==0},
fE:function(){return this.w(null)},
hb:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
an:function(a){return this.hb(a,!0,!1)},
q:{
F:function(){var z=new D.aR()
z.a=H.c([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},fL:{"^":"u:30;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},c6:{"^":"p;c,d,a,0b,$ti"},c7:{"^":"p;c,d,a,0b,$ti"},H:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dj:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dj))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"l3<"}},dH:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dI:{"^":"p;c,a,0b"},h_:{"^":"a;0a,0b,0c,0d",
h3:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dI(a,this)
y.b=!0
return z.w(y)},
h_:function(a){var z,y
this.c=a.b
this.d.V(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dI(a,this)
y.b=!0
return z.w(y)}},dM:{"^":"ca;x,y,c,d,e,a,0b"},h8:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aj:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gax()
s=new X.bl(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cb:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.aj(a,b))
return!0},
aP:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dB()
if(typeof z!=="number")return z.dt()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.aj(a,b))
return!0},
aO:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.aj(a,b))
return!0},
h4:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gax()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cG(new V.O(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.w(w)
return!0},
ew:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.dM(c,a,this.a.gax(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.T(0,0)}},aq:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aq))return!1
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
return z+(this.c?"Shift+":"")}},bl:{"^":"ca;x,y,z,Q,ch,c,d,e,a,0b"},ho:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bw:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gax()
x=new X.bl(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cb:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bw(a,b,!0))
return!0},
aP:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dB()
if(typeof z!=="number")return z.dt()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bw(a,b,!0))
return!0},
aO:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bw(a,b,!1))
return!0},
h5:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gax()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cG(new V.O(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.w(x)
return!0},
gcS:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gbl:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gdg:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},cG:{"^":"ca;x,c,d,e,a,0b"},ca:{"^":"p;"},ee:{"^":"ca;x,y,z,Q,ch,c,d,e,a,0b"},io:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aj:function(a,b){var z,y,x,w
H.y(a,"$isd",[V.T],"$asd")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gax()
w=new X.ee(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h2:function(a){var z
H.y(a,"$isd",[V.T],"$asd")
z=this.b
if(z==null)return!1
z.w(this.aj(a,!0))
return!0},
h0:function(a){var z
H.y(a,"$isd",[V.T],"$asd")
z=this.c
if(z==null)return!1
z.w(this.aj(a,!0))
return!0},
h1:function(a){var z
H.y(a,"$isd",[V.T],"$asd")
z=this.d
if(z==null)return!1
z.w(this.aj(a,!1))
return!0}},iE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gax:function(){var z=this.a
return V.e_(0,0,(z&&C.k).gb5(z).c,C.k.gb5(z).d)},
cA:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dH(z,new X.aq(y,a.altKey,a.shiftKey))},
av:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
bI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
ak:function(a){var z,y,x,w,v
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
y=H.c([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.a9(u.pageX)
C.j.a9(u.pageY)
s=z.left
C.j.a9(u.pageX)
C.a.h(y,new V.T(t-s,C.j.a9(u.pageY)-z.top))}return y},
ah:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dj(z,new X.aq(y,a.altKey,a.shiftKey))},
hF:[function(a){this.f=!0},"$1","ger",4,0,4],
hz:[function(a){this.f=!1},"$1","gel",4,0,4],
hC:[function(a){if(this.f)a.preventDefault()},"$1","geo",4,0,4],
hH:[function(a){var z
H.k(a,"$isbj")
if(!this.f)return
z=this.cA(a)
if(this.b.h3(z))a.preventDefault()},"$1","geu",4,0,16],
hG:[function(a){var z
H.k(a,"$isbj")
if(!this.f)return
z=this.cA(a)
if(this.b.h_(z))a.preventDefault()},"$1","ges",4,0,16],
hJ:[function(a){var z,y,x,w
H.k(a,"$isar")
z=this.a
z.focus()
this.f=!0
this.av(a)
if(this.x){y=this.ah(a)
x=this.aI(a)
if(this.d.cb(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ah(a)
w=this.ak(a)
if(this.c.cb(y,w))a.preventDefault()},"$1","gex",4,0,5],
hL:[function(a){var z,y,x
H.k(a,"$isar")
this.av(a)
z=this.ah(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aP(z,x))a.preventDefault()},"$1","gez",4,0,5],
hE:[function(a){var z,y,x,w
H.k(a,"$isar")
z=this.a
if(!(z&&C.k).gb5(z).cQ(0,new P.bQ(a.clientX,a.clientY,[P.Q]))){this.av(a)
y=this.ah(a)
if(this.x){x=this.aI(a)
if(this.d.aP(y,x))a.preventDefault()
return}if(this.r)return
w=this.ak(a)
if(this.c.aP(y,w))a.preventDefault()}},"$1","geq",4,0,5],
hK:[function(a){var z,y,x
H.k(a,"$isar")
this.av(a)
z=this.ah(a)
if(this.x){y=this.aI(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","gey",4,0,5],
hD:[function(a){var z,y,x,w
H.k(a,"$isar")
z=this.a
if(!(z&&C.k).gb5(z).cQ(0,new P.bQ(a.clientX,a.clientY,[P.Q]))){this.av(a)
y=this.ah(a)
if(this.x){x=this.aI(a)
if(this.d.aO(y,x))a.preventDefault()
return}if(this.r)return
w=this.ak(a)
if(this.c.aO(y,w))a.preventDefault()}},"$1","gep",4,0,5],
hM:[function(a){var z,y
H.k(a,"$isby")
this.av(a)
z=new V.O((a&&C.r).gfB(a),C.r.gfC(a)).A(0,180)
if(this.x){if(this.d.h4(z))a.preventDefault()
return}if(this.r)return
y=this.ak(a)
if(this.c.h5(z,y))a.preventDefault()},"$1","geA",4,0,37],
hN:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ah(this.y)
v=this.ak(this.y)
this.d.ew(w,v,x)}},"$1","geB",4,0,4],
hT:[function(a){var z
H.k(a,"$isaX")
this.a.focus()
this.f=!0
this.bI(a)
z=this.bE(a)
if(this.e.h2(z))a.preventDefault()},"$1","geI",4,0,10],
hR:[function(a){var z
H.k(a,"$isaX")
this.bI(a)
z=this.bE(a)
if(this.e.h0(z))a.preventDefault()},"$1","geG",4,0,10],
hS:[function(a){var z
H.k(a,"$isaX")
this.bI(a)
z=this.bE(a)
if(this.e.h1(z))a.preventDefault()},"$1","geH",4,0,10]}}],["","",,D,{"^":"",c1:{"^":"a;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
ap:[function(a){var z
H.k(a,"$isp")
z=this.d
if(!(z==null))z.w(a)},function(){return this.ap(null)},"ho","$1","$0","gdR",0,2,0],
$isV:1,
$isax:1},V:{"^":"a;",$isax:1},h0:{"^":"aw;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
ap:function(a){var z=this.Q
if(!(z==null))z.w(a)},
ev:[function(a){var z
H.k(a,"$isp")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.ev(null)},"hI","$1","$0","gcD",0,2,0],
hO:[function(a){var z,y,x
H.y(a,"$ish",[D.V],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.e2(x))return!1}return!0},"$1","geD",4,0,33],
hw:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcD(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.c1)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aR()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.c6(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gei",8,0,17],
hQ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcD(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.c1)C.a.V(this.e,t)
s=t.d
if(s==null){s=new D.aR()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.V(s.a,x)}z=new D.c7(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","geF",8,0,17],
e2:function(a){var z=C.a.aK(this.e,a)
return z},
$ash:function(){return[D.V]},
$asaw:function(){return[D.V]}},hx:{"^":"a;",$isV:1,$isax:1},i2:{"^":"a;",$isV:1,$isax:1},id:{"^":"a;",$isV:1,$isax:1},ie:{"^":"a;",$isV:1,$isax:1},ig:{"^":"a;",$isV:1,$isax:1}}],["","",,V,{"^":"",
l5:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","hl",8,0,32],
kV:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dA(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a3("null",c)
return C.h.a3(C.j.ds($.l.$2(a,0)?0:a,b),c+b+1)},
b5:function(a,b,c){var z,y,x,w,v,u
H.y(a,"$isd",[P.v],"$asd")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.W(z,u,C.h.a3(z[u],x))}return z},
da:function(a,b){return C.j.hj(Math.pow(b,C.y.c2(Math.log(H.kq(a))/Math.log(b))))},
a_:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bZ:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bZ))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dP:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
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
z=[P.v]
y=V.b5(H.c([this.a,this.d,this.r],z),3,0)
x=V.b5(H.c([this.b,this.e,this.x],z),3,0)
w=V.b5(H.c([this.c,this.f,this.y],z),3,0)
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
ao:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
de:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.bO()
a3=1/a2
a4=-w
a5=-i
return V.ap((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.ap(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ce:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.K(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ay(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
i:function(a){return this.G()},
dd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b5(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b5(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b5(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b5(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
v:function(a){return this.dd(a,3,0)},
G:function(){return this.dd("",3,0)},
q:{
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bO:function(){return V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dQ:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.F(c)))
y=b.aL(z)
x=y.A(0,Math.sqrt(y.F(y)))
w=z.aL(x)
v=new V.K(a.a,a.b,a.c)
return V.ap(x.a,w.a,z.a,x.J(0).F(v),x.b,w.b,z.b,w.J(0).F(v),x.c,w.c,z.c,z.J(0).F(v),0,0,0,1)}}},
T:{"^":"a;n:a>,p:b>",
I:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ay:{"^":"a;n:a>,p:b>,c",
I:function(a,b){return new V.ay(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
dV:{"^":"a;n:a>,p:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dV))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dZ:{"^":"a;n:a>,p:b>,c,d",
ga0:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dZ))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
q:{
e_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dZ(a,b,c,d)}}},
O:{"^":"a;a,b",
fN:[function(a){return Math.sqrt(this.F(this))},"$0","gk",1,0,18],
F:function(a){var z,y,x,w
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
return new V.O(z*b,y*b)},
A:function(a,b){var z,y
if($.l.$2(b,0))return new V.O(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.O(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
K:{"^":"a;a,b,c",
fN:[function(a){return Math.sqrt(this.F(this))},"$0","gk",1,0,18],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aL:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.K(-this.a,-this.b,-this.c)},
A:function(a,b){if($.l.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
df:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fv:{"^":"dm;0a,0b,0c,0d,0e,0f,0r,0x,0y",
br:function(a){var z=V.kV(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.w(a)},
scf:function(a,b){},
sc8:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.br(z)}z=new D.H("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.K(z)}},
sca:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.br(z)}z=new D.H("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.K(z)}},
sa_:function(a,b){var z,y
b=this.br(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.v])
z.b=!0
this.K(z)}},
sc9:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.K(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.v])
z.b=!0
this.K(z)}},
sbU:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.v])
z.b=!0
this.K(z)}},
af:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
q:{
cu:function(){var z=new U.fv()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dp:{"^":"a7;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
aG:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dp))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
q:{
dq:function(a){var z=new U.dp()
z.a=a
return z}}},dB:{"^":"aw;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.K(null)},"a6","$1","$0","gat",0,2,0],
hv:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geh",8,0,19],
hP:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.b(x,w)
C.a.V(t.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geE",8,0,19],
aG:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a5()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aG(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.bO():x
z=this.e
if(!(z==null))z.an(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a7]},
$asaw:function(){return[U.a7]},
$isa7:1},a7:{"^":"dm;"},iF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isp")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.K(null)},"a6","$1","$0","gat",0,2,0],
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcS()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdg()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbl()
z.toString
y=H.b(this.gbB(),y)
C.a.h(z.a,y)
return!0},
ed:[function(a){H.k(a,"$isp")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbz",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbl")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.O(y.a,y.b).l(0,2).A(0,z.ga0())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.O(x.a,x.b).l(0,2).A(0,z.ga0())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
this.b.sM(0)
y=y.I(0,a.z)
this.Q=new V.O(y.a,y.b).l(0,2).A(0,z.ga0())}this.a6()},"$1","gbA",4,0,1],
ef:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sM(y*10*x)
this.a6()}},"$1","gbB",4,0,1],
aG:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a5()
if(z<y){this.ch=y
x=b.y
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ap(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},iG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isp")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.K(null)},"a6","$1","$0","gat",0,2,0],
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcS()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.b(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.c.gdg()
x.toString
z=H.b(this.gbA(),y)
C.a.h(x.a,z)
z=this.a.c.gbl()
z.toString
x=H.b(this.gbB(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.F()
x.f=z}x=H.b(this.gea(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.F()
x.b=z}x=H.b(this.gf_(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.F()
x.d=z}x=H.b(this.geZ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.F()
x.c=z}y=H.b(this.geY(),y)
C.a.h(z.a,y)
return!0},
ac:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.O(z,y)},
ed:[function(a){a=H.e(H.k(a,"$isp"),"$isbl")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbz",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbl")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ac(new V.O(y.a,y.b).l(0,2).A(0,z.ga0()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ac(new V.O(x.a,x.b).l(0,2).A(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.ac(new V.O(y.a,y.b).l(0,2).A(0,z.ga0()))}this.a6()},"$1","gbA",4,0,1],
ef:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sM(-y*10*z)
this.a6()}},"$1","gbB",4,0,1],
hs:[function(a){if(H.e(H.k(a,"$isp"),"$isdM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gea",4,0,1],
ht:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbl")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ac(new V.O(x.a,x.b).l(0,2).A(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.ac(new V.O(y.a,y.b).l(0,2).A(0,z.ga0()))
this.a6()},"$1","geb",4,0,1],
hX:[function(a){H.k(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf_",4,0,1],
hW:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isee")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.O(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ac(new V.O(y.a,y.b).l(0,2).A(0,z.ga0()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ac(new V.O(x.a,x.b).l(0,2).A(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.ac(new V.O(y.a,y.b).l(0,2).A(0,z.ga0()))}this.a6()},"$1","geZ",4,0,1],
hV:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sM(-y*10*z)
this.a6()}},"$1","geY",4,0,1],
aG:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a5()
if(z<y){this.dy=y
x=b.y
this.c.af(0,x)
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ap(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ap(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},iH:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.w(a)},
aJ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=H.b(this.geg(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hu:[function(a){var z,y,x,w
H.k(a,"$isp")
if(!J.S(this.b,this.a.b.c))return
H.e(a,"$iscG")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.v])
z.b=!0
this.K(z)}},"$1","geg",4,0,1],
aG:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ap(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",fJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aq:[function(a){var z
H.k(a,"$isp")
z=this.x
if(!(z==null))z.w(a)},function(){return this.aq(null)},"hp","$1","$0","gab",0,2,0],
hA:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gab(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.aR()
s.a=H.c([],v)
s.c=0
t.sX(s)}s=t.gX()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.c6(a,b,this,[z])
z.b=!0
this.aq(z)},"$2","gem",8,0,7],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aJ
H.y(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gab(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.aR()
s.a=H.c([],v)
s.c=0
t.sX(s)}s=t.gX()
s.toString
H.b(x,w)
C.a.V(s.a,x)}}z=new D.c7(a,b,this,[z])
z.b=!0
this.aq(z)},"$2","gen",8,0,7],
sdq:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.b(this.gab(),{func:1,ret:-1,args:[D.p]})
C.a.V(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gab(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cN])
z.b=!0
this.aq(z)}},
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
aF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dm(this.c)
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
u=C.f.a9(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.f.a9(v.b*w)
s=C.f.a9(v.c*x)
a.c=s
v=C.f.a9(v.d*w)
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
s.dl(V.ap(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dU
if(y==null){y=V.dQ(new V.ay(0,0,0),new V.K(0,1,0),new V.K(0,0,-1))
$.dU=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.l(0,m)}a.db.dl(m)
z=this.c
if(z!=null)z.af(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.af(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.aF(a)
this.a.toString
a.cy.cc()
a.db.cc()
this.b.toString
a.dk()},
$ismb:1}}],["","",,A,{"^":"",de:{"^":"a;a,b,c"},fl:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fF:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hf:{"^":"e0;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aB,0al,0aC,0b6,0cT,0cU,0b7,0b8,0cV,0cW,0b9,0ba,0cX,0cY,0bb,0cZ,0d_,0bc,0d0,0d1,0bd,0be,0bf,0d2,0d3,0bg,0bh,0d4,0d5,0bi,0d6,0bX,0d7,0bY,0d8,0bZ,0d9,0c_,0da,0c0,0dc,0c1,a,b,0c,0d,0e,0f,0r",
dI:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.f2(z)
a2.f9(z)
a2.f3(z)
a2.fh(z)
a2.fi(z)
a2.fb(z)
a2.fm(z)
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
v.f6(z)
v.f1(z)
v.f4(z)
v.f7(z)
v.ff(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fd(z)
v.fe(z)}v.fa(z)
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
p=H.c([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f5(z)
v.fc(z)
v.fg(z)
v.fj(z)
v.fk(z)
v.fl(z)
v.f8(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
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
this.c=this.cB(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cB(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.f2(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(m)))}this.eT()
this.eV()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isaz")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isaz")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isaz")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isaz")
if(a2.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$iscS")
if(a2.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isaz")
if(a2.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isaz")
this.k3=H.c([],[A.az])
y=a2.aB
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(k,"$isaz"))}}y=a2.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isae")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isae")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.aB=H.e(this.r.m(0,"diffuseTxt"),"$isae")
this.aC=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.al=H.e(this.r.m(0,"diffuseTxt"),"$isaf")
this.aC=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.b6=H.e(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cT=H.e(this.r.m(0,"invDiffuseTxt"),"$isae")
this.b7=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cU=H.e(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.b7=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.ba=H.e(this.r.m(0,"shininess"),"$isU")
this.b8=H.e(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.cV=H.e(this.r.m(0,"specularTxt"),"$isae")
this.b9=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.cW=H.e(this.r.m(0,"specularTxt"),"$isaf")
this.b9=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cX=H.e(this.r.m(0,"bumpTxt"),"$isae")
this.bb=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.cY=H.e(this.r.m(0,"bumpTxt"),"$isaf")
this.bb=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.cZ=H.e(this.r.m(0,"envSampler"),"$isaf")
this.d_=H.e(this.r.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.bc=H.e(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d0=H.e(this.r.m(0,"reflectTxt"),"$isae")
this.bd=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.d1=H.e(this.r.m(0,"reflectTxt"),"$isaf")
this.bd=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.be=H.e(this.r.m(0,"refraction"),"$isU")
this.bf=H.e(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.e:break
case C.c:this.d2=H.e(this.r.m(0,"refractTxt"),"$isae")
this.bg=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.d3=H.e(this.r.m(0,"refractTxt"),"$isaf")
this.bg=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.bh=H.e(this.r.m(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.e:break
case C.c:this.d4=H.e(this.r.m(0,"alphaTxt"),"$isae")
this.bi=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.d5=H.e(this.r.m(0,"alphaTxt"),"$isaf")
this.bi=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bX=H.c([],[A.er])
this.bY=H.c([],[A.es])
this.bZ=H.c([],[A.et])
this.c_=H.c([],[A.eu])
this.c0=H.c([],[A.ev])
this.c1=H.c([],[A.ew])
if(a2.k2){y=a2.z
if(y>0){this.d6=H.k(this.r.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.bX;(x&&C.a).h(x,new A.er(l,k,j))}}y=a2.Q
if(y>0){this.d7=H.k(this.r.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isU")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isU")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isU")
x=this.bY;(x&&C.a).h(x,new A.es(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.d8=H.k(this.r.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isU")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isU")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isU")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isU")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isU")
x=this.bZ;(x&&C.a).h(x,new A.et(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d9=H.k(this.r.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isae")
x=this.c_;(x&&C.a).h(x,new A.eu(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.da=H.k(this.r.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$iscS")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isU")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isU")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isU")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isaf")
x=this.c0;(x&&C.a).h(x,new A.ev(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dc=H.k(this.r.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isU")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isU")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isU")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isU")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isU")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a1,"$isae")
x=this.c1;(x&&C.a).h(x,new A.ew(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a7:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dC(c)
b.a.uniform1i(b.d,0)}},
a1:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
he:function(a,b){var z,y
z=a.al
y=new A.hf(b,z)
y.dL(b,z)
y.dI(a,b)
return y}}},hi:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aB,al,aC",
f2:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aB+"];\n"
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
f9:function(a){var z
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
f3:function(a){var z
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
fh:function(a){var z,y
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
fi:function(a){var z,y
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
fb:function(a){var z
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
fm:function(a){var z
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
ai:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cl(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
f6:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ai(a,z,"emission")
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
f1:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ai(a,z,"ambient")
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
f4:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ai(a,z,"diffuse")
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
f7:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ai(a,z,"invDiffuse")
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
ff:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ai(a,z,"specular")
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
fa:function(a){var z,y
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
fd:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ai(a,z,"reflect")
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
fe:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ai(a,z,"refract")
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
f5:function(a){var z,y
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
fc:function(a){var z,y
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
fg:function(a){var z,y
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
fj:function(a){var z,y,x
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
fk:function(a){var z,y,x
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
fl:function(a){var z,y,x
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
f8:function(a){var z
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
i:function(a){return this.al}},er:{"^":"a;a,b,c"},eu:{"^":"a;a,b,c,d,e,f,r,x"},es:{"^":"a;a,b,c,d,e,f,r"},ev:{"^":"a;a,b,c,d,e,f,r,x,y,z"},et:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ew:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},e0:{"^":"cn;",
dL:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cB:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f2(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eT:function(){var z,y,x,w,v,u
z=H.c([],[A.de])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.de(y,v.name,u))}this.f=new A.fl(z)},
eV:function(){var z,y,x,w,v,u
z=H.c([],[A.a4])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fA(v.type,v.size,v.name,u))}this.r=new A.ix(z)},
as:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cR(z,y,b,a,c)},
e3:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ae(z,y,b,c)
else return A.cR(z,y,b,a,c)},
e4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.cR(z,y,b,a,c)},
b3:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fA:function(a,b,c,d){switch(a){case 5120:return this.as(b,c,d)
case 5121:return this.as(b,c,d)
case 5122:return this.as(b,c,d)
case 5123:return this.as(b,c,d)
case 5124:return this.as(b,c,d)
case 5125:return this.as(b,c,d)
case 5126:return new A.U(this.a,this.e,c,d)
case 35664:return new A.is(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.iv(this.a,this.e,c,d)
case 35667:return new A.it(this.a,this.e,c,d)
case 35668:return new A.iu(this.a,this.e,c,d)
case 35669:return new A.iw(this.a,this.e,c,d)
case 35674:return new A.iz(this.a,this.e,c,d)
case 35675:return new A.cS(this.a,this.e,c,d)
case 35676:return new A.az(this.a,this.e,c,d)
case 35678:return this.e3(b,c,d)
case 35680:return this.e4(b,c,d)
case 35670:throw H.f(this.b3("BOOL",c))
case 35671:throw H.f(this.b3("BOOL_VEC2",c))
case 35672:throw H.f(this.b3("BOOL_VEC3",c))
case 35673:throw H.f(this.b3("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c_:{"^":"a;a,b",
i:function(a){return this.b}},a4:{"^":"a;"},ix:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fH:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fH("\n")}},E:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},it:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iu:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iw:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ir:{"^":"a4;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
cR:function(a,b,c,d,e){var z=new A.ir(a,b,c,e)
z.f=d
z.e=P.h6(d,0,!1,P.C)
return z}}},U:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},is:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iv:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iz:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cS:{"^":"a4;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bC(H.y(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},az:{"^":"a4;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bC(H.y(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ae:{"^":"a4;a,b,c,d",
dC:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},af:{"^":"a4;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cf:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bB:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.K(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.K(t+h,s+f,r+g)
z.b=q
p=new V.K(t-h,s-f,r-g)
z.c=p
o=new V.K(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cf(y)
k=F.cf(z.b)
j=F.kS(d,e,new F.ke(z,F.cf(z.c),F.cf(z.d),k,l,c),b)
if(j!=null)a.fS(j)},
kS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aY,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.e2()
y=H.c([],[F.aY])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cU(null,null,new V.bZ(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bT(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cU(null,null,new V.bZ(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bT(d))}}z.d.fn(a+1,b+1,y)
return z},
ke:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c5(z.b,b).c5(z.d.c5(z.c,b),c)
z=new V.ay(y.a,y.b,y.c)
if(!J.S(a.f,z)){a.f=z
z=a.a
if(z!=null)z.Z()}a.shh(y.A(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
x=new V.dV(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.S(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.Z()}}},
ak:{"^":"a;0a,0b,0c,0d,0e",
gbW:function(){return this.a==null||this.b==null||this.c==null},
dY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.df())return
return v.A(0,Math.sqrt(v.F(v)))},
e0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.F(z)))
z=w.I(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aL(z.A(0,Math.sqrt(z.F(z))))
return z.A(0,Math.sqrt(z.F(z)))},
bR:function(){if(this.d!=null)return!0
var z=this.dY()
if(z==null){z=this.e0()
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
v=new V.K(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.df())return
return v.A(0,Math.sqrt(v.F(v)))},
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
if($.l.$2(n,0)){z=r.I(0,u)
z=new V.K(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.ay(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.F(z)))
z=k.aL(m)
z=z.A(0,Math.sqrt(z.F(z))).aL(k)
m=z.A(0,Math.sqrt(z.F(z)))}return m},
bP:function(){if(this.e!=null)return!0
var z=this.dX()
if(z==null){z=this.e_()
if(z==null)return!1}this.e=z
this.a.a.Z()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y
if(this.gbW())return a+"disposed"
z=a+C.h.a3(J.a5(this.a.e),0)+", "+C.h.a3(J.a5(this.b.e),0)+", "+C.h.a3(J.a5(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.v("")},
q:{
bK:function(a,b,c){var z,y,x
z=new F.ak()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.Z()
return z}}},
cD:{"^":"a;0a,0b",
gbW:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){if(this.gbW())return a+"disposed"
return a+C.h.a3(J.a5(this.a.e),0)+", "+C.h.a3(J.a5(this.b.e),0)},
G:function(){return this.v("")}},
cI:{"^":"a;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a3(J.a5(z.e),0)},
G:function(){return this.v("")}},
e1:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
fS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.T()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fz())}this.a.T()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cI()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.T()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cD()
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
if(!(t==null))t.w(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.T()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.T()
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
F.bK(p,o,l)}z=this.e
if(!(z==null))z.an(0)},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.an(0)
return y},
fs:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
v=b.gck(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dh])
for(r=0,q=0;q<w;++q){p=b.fp(q)
o=p.gck(p)
C.a.W(s,q,new Z.dh(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fO(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.W(t,l,m[k]);++l}}r+=o}H.y(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bC(t)),35044)
y.bindBuffer(34962,null)
i=new Z.di(new Z.eC(34962,j),s,b)
i.b=H.c([],[Z.c5])
if(this.b.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.T()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c5(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.T()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.T()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c5(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.T()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.T()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.T()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c5(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.B(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.w(a)},
Z:function(){return this.a8(null)},
q:{
e2:function(){var z,y
z=new F.e1()
y=new F.iK(z)
y.b=!1
y.c=H.c([],[F.aY])
z.a=y
y=new F.hY(z)
y.b=H.c([],[F.cI])
z.b=y
y=new F.hX(z)
y.b=H.c([],[F.cD])
z.c=y
y=new F.hW(z)
y.b=H.c([],[F.ak])
z.d=y
z.e=null
return z}}},
hW:{"^":"a;a,0b",
fn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isd",[F.aY],"$asd")
z=H.c([],[F.ak])
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
C.a.h(z,F.bK(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bK(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bK(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bK(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bR())x=!1
return x},
bQ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bP())x=!1
return x},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.B(z,"\n")},
G:function(){return this.v("")}},
hX:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.B(z,"\n")},
G:function(){return this.v("")}},
hY:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.B(z,"\n")},
G:function(){return this.v("")}},
aY:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bT:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cU(this.cx,x,u,z,y,w,v,a,t)},
fz:function(){return this.bT(null)},
shh:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Z()}},
fO:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$aD())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aC())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aB())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aE())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.t(a,$.$get$aF())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bw())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bx())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$b_()))return H.c([this.ch],[P.v])
else if(z.t(a,$.$get$aA())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
bR:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.L(0,new F.iR(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
bP:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.K(0,0,0)
this.d.L(0,new F.iQ(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.h.a3(J.a5(this.e),0))
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
C.a.h(z,V.L(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
G:function(){return this.v("")},
q:{
cU:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aY()
y=new F.iP(z)
y.b=H.c([],[F.cI])
z.b=y
y=new F.iO(z)
x=[F.cD]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iL(z)
x=[F.ak]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$ez()
z.e=0
y=$.$get$aD()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aC().a)!==0?e:null
z.x=(x&$.$get$aB().a)!==0?b:null
z.y=(x&$.$get$aE().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$eA().a)!==0?c:null
z.ch=(x&$.$get$b_().a)!==0?i:0
z.cx=(x&$.$get$aA().a)!==0?a:null
return z}}},
iR:{"^":"u:8;a",
$1:function(a){var z,y
H.k(a,"$isak")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iQ:{"^":"u:8;a",
$1:function(a){var z,y
H.k(a,"$isak")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iK:{"^":"a;a,0b,0c",
T:function(){var z,y,x,w
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
this.a.Z()
return!0},
gk:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bR()
return!0},
bQ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bP()
return!0},
ft:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
this.T()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.B(z,"\n")},
G:function(){return this.v("")}},
iL:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ak]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iM(this,b))
C.a.L(this.d,new F.iN(this,b))},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.B(z,"\n")},
G:function(){return this.v("")}},
iM:{"^":"u:8;a,b",
$1:function(a){H.k(a,"$isak")
if(!J.S(a.a,this.a))this.b.$1(a)}},
iN:{"^":"u:8;a,b",
$1:function(a){var z
H.k(a,"$isak")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
iO:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.B(z,"\n")},
G:function(){return this.v("")}},
iP:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.B(z,"\n")},
G:function(){return this.v("")}}}],["","",,O,{"^":"",hd:{"^":"cN;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
S:[function(a){var z
H.k(a,"$isp")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.S(null)},"dS","$1","$0","gaY",0,2,0],
eM:[function(a){H.k(a,"$isp")
this.a=null
this.S(a)},function(){return this.eM(null)},"hU","$1","$0","geL",0,2,0],
hx:[function(a,b){var z=V.ao
z=new D.c6(a,H.y(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.S(z)},"$2","gej",8,0,20],
hy:[function(a,b){var z=V.ao
z=new D.c7(a,H.y(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.S(z)},"$2","gek",8,0,20],
cw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a6=$.$get$aD()
if(c){z=$.$get$aC()
a6=new Z.aZ(a6.a|z.a)}if(b){z=$.$get$aB()
a6=new Z.aZ(a6.a|z.a)}if(a){z=$.$get$aE()
a6=new Z.aZ(a6.a|z.a)}if(a0){z=$.$get$aF()
a6=new Z.aZ(a6.a|z.a)}if(a2){z=$.$get$aA()
a6=new Z.aZ(a6.a|z.a)}return new A.hi(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.y(a,"$isd",[T.cO],"$asd")
if(b!=null)if(!C.a.aK(a,b)){b.a=a.length
C.a.h(a,b)}},
af:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
x=new V.K(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ce(x)}}},
h9:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cw()
y=a.fr.j(0,z.al)
if(y==null){y=A.he(z,a.a)
x=y.b
if(x.length===0)H.r(P.q("May not cache a shader with no name."))
if(a.fr.cP(0,x))H.r(P.q('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.W(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aC
z=b.e
if(!(z instanceof Z.di)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aw()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bQ()
t.a.bQ()
t=t.e
if(!(t==null))t.an(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.ft()
s=s.e
if(!(s==null))s.an(0)}q=b.d.fs(new Z.iS(a.a),v)
q.aD($.$get$aD()).e=this.a.y.c
if(z)q.aD($.$get$aC()).e=this.a.Q.c
if(u)q.aD($.$get$aB()).e=this.a.z.c
if(w.rx)q.aD($.$get$aE()).e=this.a.ch.c
if(t)q.aD($.$get$aF()).e=this.a.cx.c
if(w.x1)q.aD($.$get$aA()).e=this.a.cy.c
b.e=q}z=T.cO
p=H.c([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fF()
if(w.fx){u=this.a
t=a.dx
t=t.gR(t)
u=u.db
u.toString
u.aa(t.a4(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gR(t)
s=a.dx
s=t.l(0,s.gR(s))
a.cx=s
t=s}u=u.dx
u.toString
u.aa(t.a4(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gh6()
s=a.dx
s=t.l(0,s.gR(s))
a.ch=s
t=s}u=u.fr
u.toString
u.aa(t.a4(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.aa(t.a4(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.aa(t.a4(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.aa(C.z.a4(t,!0))}if(w.aB>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.k(s,"$isao")
t=t.k3
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.bC(H.y(s.a4(0,!0),"$isd",u,"$asd")))
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
case C.c:this.O(p,this.f.d)
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
case C.d:this.O(p,this.f.e)
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
case C.c:this.O(p,this.r.d)
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
case C.d:this.O(p,this.r.e)
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
case C.c:this.O(p,this.x.d)
u=this.a
t=this.x.d
u.a7(u.aB,u.aC,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.O(p,this.x.e)
u=this.a
t=this.x.e
u.a1(u.al,u.aC,t)
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
u=u.b6
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.O(p,this.y.d)
u=this.a
t=this.y.d
u.a7(u.cT,u.b7,t)
t=this.a
u=this.y.f
t=t.b6
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.O(p,this.y.e)
u=this.a
t=this.y.e
u.a1(u.cU,u.b7,t)
t=this.a
u=this.y.f
t=t.b6
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b8
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.ba
t.a.uniform1f(t.d,r)
break
case C.c:this.O(p,this.z.d)
u=this.a
t=this.z.d
u.a7(u.cV,u.b9,t)
t=this.a
u=this.z.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.ba
u.a.uniform1f(u.d,r)
break
case C.d:this.O(p,this.z.e)
u=this.a
t=this.z.e
u.a1(u.cW,u.b9,t)
t=this.a
u=this.z.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.ba
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d6
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bX
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.ce(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.d7
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bY
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcg(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aV(i.gaQ(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gad(i)
f=h.d
g=s.gbj()
r=s.gaW()
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
u=this.a.d8
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bZ
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcg(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbV(i).i0()
f=h.c
g=s.gay(s)
r=s.gaz(s)
s=s.gaA()
f.a.uniform3f(f.d,g,r,s)
s=l.aV(i.gaQ(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gad(i)
r=h.e
g=s.gbj()
f=s.gaW()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.ghZ()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghY()
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
u=this.a.d9
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.c_
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaS()
H.y(p,"$isd",s,"$asd")
if(!C.a.aK(p,r)){r.sb0(p.length)
C.a.h(p,r)}r=i.gbV(i)
g=h.d
f=r.gay(r)
e=r.gaz(r)
r=r.gaA()
g.a.uniform3f(g.d,f,e,r)
r=i.gbl()
e=h.b
f=r.gay(r)
g=r.gaz(r)
r=r.gaA()
e.a.uniform3f(e.d,f,g,r)
r=i.gaR(i)
g=h.c
f=r.gay(r)
e=r.gaz(r)
r=r.gaA()
g.a.uniform3f(g.d,f,e,r)
r=l.ce(i.gbV(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gad(i)
f=h.f
e=g.gbj()
r=g.gaW()
g=g.gb4()
f.a.uniform3f(f.d,e,r,g)
g=i.gaS()
r=g.gc7(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.ge9()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb0())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.da
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.c0
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaS()
H.y(p,"$isd",r,"$asd")
if(!C.a.aK(p,g)){g.sb0(p.length)
C.a.h(p,g)}d=l.l(0,i.gR(i))
g=i.gR(i).aV(new V.ay(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gcg(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aV(new V.ay(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.de(0)
c=h.d
m=new Float32Array(H.bC(H.y(new V.dP(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a4(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gad(i)
g=h.e
e=c.gbj()
f=c.gaW()
c=c.gb4()
g.a.uniform3f(g.d,e,f,c)
c=i.gaS()
g=c.gc7(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gc7(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gi_(c))
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
u=this.a.dc
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.c1
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaS()
H.y(p,"$isd",z,"$asd")
if(!C.a.aK(p,s)){s.sb0(p.length)
C.a.h(p,s)}s=i.gaQ(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gcg(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbV(i)
f=h.c
g=s.gay(s)
r=s.gaz(s)
s=s.gaA()
f.a.uniform3f(f.d,g,r,s)
s=i.gbl()
r=h.d
g=s.gay(s)
f=s.gaz(s)
s=s.gaA()
r.a.uniform3f(r.d,g,f,s)
s=i.gaR(i)
f=h.e
g=s.gay(s)
r=s.gaz(s)
s=s.gaA()
f.a.uniform3f(f.d,g,r,s)
s=l.aV(i.gaQ(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaS()
r=s.gc7(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.ge9()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb0())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gad(i)
r=h.y
g=s.gbj()
f=s.gaW()
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
case C.c:this.O(p,this.Q.d)
z=this.a
u=this.Q.d
z.a7(z.cX,z.bb,u)
break
case C.d:this.O(p,this.Q.e)
z=this.a
u=this.Q.e
z.a1(z.cY,z.bb,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gR(u).de(0)
a.Q=u}z=z.fy
z.toString
z.aa(u.a4(0,!0))}if(w.dy){this.O(p,this.ch)
z=this.a
u=this.ch
z.a1(z.cZ,z.d_,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.bc
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.O(p,this.cx.d)
z=this.a
u=this.cx.d
z.a7(z.d0,z.bd,u)
u=this.a
z=this.cx.f
u=u.bc
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.O(p,this.cx.e)
z=this.a
u=this.cx.e
z.a1(z.d1,z.bd,u)
u=this.a
z=this.cx.f
u=u.bc
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.bf
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.be
u.a.uniform1f(u.d,s)
break
case C.c:this.O(p,this.cy.d)
z=this.a
u=this.cy.d
z.a7(z.d2,z.bg,u)
u=this.a
z=this.cy.f
u=u.bf
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.be
z.a.uniform1f(z.d,s)
break
case C.d:this.O(p,this.cy.e)
z=this.a
u=this.cy.e
z.a1(z.d3,z.bg,u)
u=this.a
z=this.cy.f
u=u.bf
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.be
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.bh
z.a.uniform1f(z.d,t)
break
case C.c:this.O(p,this.db.d)
z=this.a
t=this.db.d
z.a7(z.d4,z.bi,t)
t=this.a
z=this.db.f
t=t.bh
t.a.uniform1f(t.d,z)
break
case C.d:this.O(p,this.db.e)
z=this.a
t=this.db.e
z.a1(z.d5,z.bi,t)
t=this.a
z=this.db.f
t=t.bh
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bM(a)
z.aF(a)
z.hn(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fD()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cw().al}},hg:{"^":"cE;0f,a,b,0c,0d,0e",
eP:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.v])
z.b=!0
this.a.S(z)}},
au:function(){this.cn()
this.eP(1)}},cE:{"^":"a;",
S:[function(a){this.a.S(H.k(a,"$isp"))},function(){return this.S(null)},"dS","$1","$0","gaY",0,2,0],
au:["cn",function(){}],
eR:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gaY(),{func:1,ret:-1,args:[D.p]})
C.a.V(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gaY(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.H(this.b+".texture2D",x,this.d,this,[T.e9])
z.b=!0
this.a.S(z)}},
eS:function(a){},
sbk:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.au()
this.c=C.c
this.eS(null)
z=this.a
z.a=null
z.S(null)}this.eR(a)}},hh:{"^":"cE;a,b,0c,0d,0e"},aU:{"^":"cE;0f,a,b,0c,0d,0e",
cH:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.S(y)}},
au:["bp",function(){this.cn()
this.cH(new V.a_(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.au()
z=this.a
z.a=null
z.S(null)}this.cH(b)}},hj:{"^":"aU;0ch,0f,a,b,0c,0d,0e",
eQ:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.S(z)}},
au:function(){this.bp()
this.eQ(1)}},hk:{"^":"aU;0ch,0f,a,b,0c,0d,0e",
bG:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.S(z)}},
au:function(){this.bp()
this.bG(100)}},cN:{"^":"a;"}}],["","",,T,{"^":"",cO:{"^":"cn;"},e9:{"^":"cO;0b,0c,0d,0e,0f,0r,0x,0y,a"},ib:{"^":"a;a,0b,0c,0d,0e",
fQ:function(a,b,c,d,e){var z,y,x,w
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
w=new T.e9(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.F()
z=W.a6
W.W(x,"load",H.b(new T.ic(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
c6:function(a){return this.fQ(a,!1,!1,!1,!1)},
eN:function(a,b,c){var z,y,x,w
b=V.da(b,2)
z=V.da(a.width,2)
y=V.da(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cr(null,null)
x.width=z
x.height=y
w=H.k(C.k.dw(x,"2d"),"$isdl")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.ku(w.getImageData(0,0,x.width,x.height))}}},ic:{"^":"u:21;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.eN(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.K.hf(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.fE()}++x.e}}}],["","",,V,{"^":"",fj:{"^":"a;",
aM:function(a,b){return!0},
i:function(a){return"all"},
$isbN:1},bN:{"^":"a;"},dO:{"^":"a;",
aM:["dG",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aM(0,b))return!0
return!1}],
i:["cm",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbN:1},bm:{"^":"dO;0a",
aM:function(a,b){return!this.dG(0,b)},
i:function(a){return"!["+this.cm(0)+"]"}},hU:{"^":"a;0a",
dK:function(a){var z,y
if(a.a.length<=0)throw H.f(P.q("May not create a SetMatcher with zero characters."))
z=new H.aT(0,0,[P.C,P.aa])
for(y=new H.dL(a,a.gk(a),0,[H.aI(a,"t",0)]);y.D();)z.W(0,y.d,!0)
this.a=z},
aM:function(a,b){return this.a.cP(0,b)},
i:function(a){var z=this.a
return P.cM(new H.dK(z,[H.z(z,0)]),0,null)},
$isbN:1,
q:{
a1:function(a){var z=new V.hU()
z.dK(a)
return z}}},e4:{"^":"a;a,b,0c,0d",
gfT:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ef(this.a.H(0,b))
w.a=H.c([],[V.bN])
w.c=!1
C.a.h(this.c,w)
return w},
fG:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aM(0,a))return w}return},
i:function(a){return this.b}},ec:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fd(this.b,"\n","\\n")
y=H.fd(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ed:{"^":"a;a,b,0c",
i:function(a){return this.b}},im:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e4(this,b)
z.c=H.c([],[V.ef])
this.a.W(0,b,z)}return z},
aT:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ed(this,a)
y=P.n
z.c=new H.aT(0,0,[y,y])
this.b.W(0,a,z)}return z},
hm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ec])
y=this.c
x=[P.C]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aZ(a,t)
r=y.fG(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cM(w,0,null)
throw H.f(P.q("Untokenizable string [state: "+y.gfT(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cM(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ec(o==null?p.b:o,q,t)}++t}}}},ef:{"^":"dO;b,0c,0a",
i:function(a){return this.b.b+": "+this.cm(0)}}}],["","",,X,{"^":"",dk:{"^":"a;",$isax:1},fQ:{"^":"e7;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z}},hv:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
aH:[function(a){var z
H.k(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.aH(null)},"hq","$1","$0","gcp",0,2,0],
saN:function(a){var z,y,x
if(!J.S(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.b(this.gcp(),{func:1,ret:-1,args:[D.p]})
C.a.V(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.b(this.gcp(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.a7])
z.b=!0
this.aH(z)}},
$isax:1,
$isdk:1},e7:{"^":"a;"}}],["","",,V,{"^":"",
kQ:function(a){P.il(C.w,new V.kR(a))},
kR:{"^":"u:36;a",
$1:function(a){H.k(a,"$isaW")
P.db(C.j.ds(this.a.gfI(),2)+" fps")}},
hZ:{"^":"a;0a,0b",
dM:function(a,b){var z,y,x,w,v,u,t
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
W.W(z,"scroll",H.b(new V.i1(x),{func:1,ret:-1,args:[t]}),!1,t)},
fo:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.y(a,"$isd",[P.n],"$asd")
this.eU()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hm(C.a.fM(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fc(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.k1(C.H,s,C.q,!1)
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
eU:function(){var z,y,x,w
if(this.b!=null)return
z=new V.im()
y=P.n
z.a=new H.aT(0,0,[y,V.e4])
z.b=new H.aT(0,0,[y,V.ed])
z.c=z.H(0,"Start")
y=z.H(0,"Start").B(0,"Bold")
x=V.a1(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").B(0,"Bold")
x=new V.bm()
w=[V.bN]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Italic")
x=V.a1(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").B(0,"Italic")
x=new V.bm()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Code")
x=V.a1(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").B(0,"Code")
x=new V.bm()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"LinkHead")
x=V.a1(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.Z("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").B(0,"LinkHead")
y=new V.bm()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").B(0,"LinkTail")
y=new V.bm()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").B(0,"Other").a,new V.fj())
x=z.H(0,"Other").B(0,"Other")
y=new V.bm()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.aT("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.aT("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.aT("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.aT("Link")
x=z.H(0,"Other")
x.d=x.a.aT("Other")
this.b=z},
q:{
i_:function(a,b){var z=new V.hZ()
z.dM(a,!0)
return z}}},
i1:{"^":"u:21;a",
$1:function(a){P.ik(C.m,new V.i0(this.a))}},
i0:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.j.a9(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,E,{"^":"",
f8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.i_("Test 007",!0)
y=W.cr(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fo(H.c(["A test of the Material Lighting shader with bumpy 2D textures and ","a directional light. The lighting and bump is being applied to ","ambient, diffuse, and specular 2D texturing."],[P.n]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.ii(x,!0,!0,!0,!1)
v=new E.aJ()
v.a=""
v.b=!0
z=E.aJ
u=O.ct(z)
v.y=u
u.aX(v.gfU(),v.gfW())
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
v.scj(0,null)
v.saN(null)
t=F.e2()
F.bB(t,null,null,1,1,1,0,0,1)
F.bB(t,null,null,1,1,0,1,0,3)
F.bB(t,null,null,1,1,0,0,1,2)
F.bB(t,null,null,1,1,-1,0,0,0)
F.bB(t,null,null,1,1,0,-1,0,0)
F.bB(t,null,null,1,1,0,0,-1,3)
t.aw()
v.scj(0,t)
u=new U.dB()
s=U.a7
u.bq(s)
u.aX(u.geh(),u.geE())
u.e=null
u.f=V.bO()
u.r=0
r=w.r
q=new U.iG()
p=U.cu()
p.scf(0,!0)
p.sc8(6.283185307179586)
p.sca(0)
p.sa_(0,0)
p.sc9(100)
p.sM(0)
p.sbU(0.5)
q.b=p
p=p.gu()
p.toString
o={func:1,ret:-1,args:[D.p]}
n=H.b(q.gat(),o)
C.a.h(p.a,n)
p=U.cu()
p.scf(0,!0)
p.sc8(6.283185307179586)
p.sca(0)
p.sa_(0,0)
p.sc9(100)
p.sM(0)
p.sbU(0.5)
q.c=p
C.a.h(p.gu().a,n)
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
m=new X.aq(!1,!1,!1)
l=q.d
q.d=m
p=[X.aq]
n=new D.H("modifiers",l,m,q,p)
n.b=!0
q.K(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.H("invertX",n,!1,q,[P.aa])
n.b=!0
q.K(n)}n=q.r
if(n!==!0){q.r=!0
n=new D.H("invertY",n,!0,q,[P.aa])
n.b=!0
q.K(n)}q.aJ(r)
u.h(0,q)
r=w.r
q=new U.iF()
n=U.cu()
n.scf(0,!0)
n.sc8(6.283185307179586)
n.sca(0)
n.sa_(0,0)
n.sc9(100)
n.sM(0)
n.sbU(0.2)
q.b=n
n=n.gu()
n.toString
k=H.b(q.gat(),o)
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
m=new X.aq(!0,!1,!1)
l=q.c
q.c=m
n=new D.H("modifiers",l,m,q,p)
n.b=!0
q.K(n)
q.aJ(r)
u.h(0,q)
r=w.r
q=new U.iH()
q.c=0.01
q.d=0
q.e=0
m=new X.aq(!1,!1,!1)
q.b=m
p=new D.H("modifiers",null,m,q,p)
p.b=!0
q.K(p)
q.aJ(r)
u.h(0,q)
v.saN(u)
j=w.f.c6("../resources/ScrewColor.png")
i=new O.hd()
u=O.ct(V.ao)
i.e=u
u.aX(i.gej(),i.gek())
u=new O.aU(i,"emission")
u.c=C.b
u.f=new V.a_(0,0,0)
i.f=u
u=new O.aU(i,"ambient")
u.c=C.b
u.f=new V.a_(0,0,0)
i.r=u
u=new O.aU(i,"diffuse")
u.c=C.b
u.f=new V.a_(0,0,0)
i.x=u
u=new O.aU(i,"invDiffuse")
u.c=C.b
u.f=new V.a_(0,0,0)
i.y=u
u=new O.hk(i,"specular")
u.c=C.b
u.f=new V.a_(0,0,0)
u.ch=100
i.z=u
u=new O.hh(i,"bump")
u.c=C.b
i.Q=u
i.ch=null
u=new O.aU(i,"reflect")
u.c=C.b
u.f=new V.a_(0,0,0)
i.cx=u
u=new O.hj(i,"refract")
u.c=C.b
u.f=new V.a_(0,0,0)
u.ch=1
i.cy=u
u=new O.hg(i,"alpha")
u.c=C.b
u.f=1
i.db=u
u=new D.h0()
u.bq(D.V)
u.e=H.c([],[D.c1])
u.f=H.c([],[D.hx])
u.r=H.c([],[D.i2])
u.x=H.c([],[D.id])
u.y=H.c([],[D.ie])
u.z=H.c([],[D.ig])
u.Q=null
u.ch=null
u.ci(u.gei(),u.geD(),u.geF())
i.dx=u
r=u.Q
if(r==null){r=D.F()
u.Q=r
u=r}else u=r
r=H.b(i.geL(),o)
C.a.h(u.a,r)
r=i.dx
u=r.ch
if(u==null){u=D.F()
r.ch=u}r=H.b(i.gaY(),o)
C.a.h(u.a,r)
i.dy=null
r=i.dx
u=U.dq(V.dQ(new V.ay(0,0,0),new V.K(0,1,0),new V.K(0,0,-1)))
h=new V.a_(1,1,1)
q=new D.c1()
q.c=new V.a_(1,1,1)
q.a=new V.K(0,0,1)
l=q.b
q.b=u
u=u.gu()
u.toString
p=H.b(q.gdR(),o)
C.a.h(u.a,p)
u=new D.H("mover",l,q.b,q,[s])
u.b=!0
q.ap(u)
if(!q.c.t(0,h)){l=q.c
q.c=h
u=new D.H("color",l,h,q,[V.a_])
u.b=!0
q.ap(u)}r.h(0,q)
u=i.r
u.sad(0,new V.a_(0.2,0.2,0.2))
u=i.x
u.sad(0,new V.a_(0.8,0.8,0.8))
i.r.sbk(j)
i.x.sbk(j)
i.Q.sbk(w.f.c6("../resources/ScrewBumpMap.png"))
i.z.sad(0,new V.a_(1,1,1))
i.z.sbk(w.f.c6("../resources/ScrewSpecular.png"))
u=i.z
if(u.c===C.b){u.c=C.e
u.bp()
u.bG(100)
s=u.a
s.a=null
s.S(null)}u.bG(10)
u=new M.fJ()
z=O.ct(z)
u.d=z
z.aX(u.gem(),u.gen())
u.e=null
u.f=null
u.r=null
u.x=null
g=new X.hv()
g.b=1.0471975511965976
g.c=0.1
g.d=2000
g.saN(null)
z=g.b
if(!$.l.$2(z,1.0471975511965976)){l=g.b
g.b=1.0471975511965976
z=new D.H("fov",l,1.0471975511965976,g,[P.v])
z.b=!0
g.aH(z)}z=g.c
if(!$.l.$2(z,0.1)){l=g.c
g.c=0.1
z=new D.H("near",l,0.1,g,[P.v])
z.b=!0
g.aH(z)}z=g.d
if(!$.l.$2(z,2000)){l=g.d
g.d=2000
z=new D.H("far",l,2000,g,[P.v])
z.b=!0
g.aH(z)}z=u.a
if(z!==g){if(z!=null){z=z.gu()
z.toString
s=H.b(u.gab(),o)
C.a.V(z.a,s)}l=u.a
u.a=g
z=g.gu()
z.toString
s=H.b(u.gab(),o)
C.a.h(z.a,s)
z=new D.H("camera",l,u.a,u,[X.dk])
z.b=!0
u.aq(z)}f=new X.fQ()
z=new V.bZ(0,0,0,1)
f.a=z
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
z=V.e_(0,0,1,1)
f.r=z
z=u.b
if(z!==f){if(z!=null){z=z.gu()
z.toString
s=H.b(u.gab(),o)
C.a.V(z.a,s)}l=u.b
u.b=f
z=f.gu()
z.toString
s=H.b(u.gab(),o)
C.a.h(z.a,s)
z=new D.H("target",l,u.b,u,[X.e7])
z.b=!0
u.aq(z)}u.sdq(null)
u.sdq(i)
u.d.h(0,v)
u.a.saN(U.dq(V.ap(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=w.d
if(z!==u){if(z!=null){z=z.gu()
z.toString
s=H.b(w.gco(),o)
C.a.V(z.a,s)}w.d=u
z=u.gu()
z.toString
o=H.b(w.gco(),o)
C.a.h(z.a,o)
w.dP()}V.kQ(w)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.dE.prototype}if(typeof a=="string")return J.cz.prototype
if(a==null)return J.dG.prototype
if(typeof a=="boolean")return J.fW.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.bU=function(a){if(typeof a=="string")return J.cz.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.d5=function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.ky=function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cT.prototype
return a}
J.bV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.cj(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.ff=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ky(a).a5(a,b)}
J.fg=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kH(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).j(a,b)}
J.fh=function(a,b,c,d){return J.bV(a).cM(a,b,c,d)}
J.cm=function(a,b,c){return J.bU(a).fu(a,b,c)}
J.dc=function(a,b){return J.d5(a).C(a,b)}
J.fi=function(a,b){return J.d5(a).L(a,b)}
J.au=function(a){return J.I(a).gP(a)}
J.bI=function(a){return J.d5(a).gU(a)}
J.b8=function(a){return J.bU(a).gk(a)}
J.a5=function(a){return J.I(a).i(a)}
I.d8=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cq.prototype
C.x=J.m.prototype
C.a=J.aS.prototype
C.y=J.dE.prototype
C.f=J.dF.prototype
C.z=J.dG.prototype
C.j=J.c8.prototype
C.h=J.cz.prototype
C.G=J.bL.prototype
C.I=H.hr.prototype
C.J=W.hs.prototype
C.p=J.hw.prototype
C.K=P.cJ.prototype
C.l=J.cT.prototype
C.r=W.by.prototype
C.t=W.iV.prototype
C.u=new P.hu()
C.v=new P.iJ()
C.i=new P.jG()
C.b=new A.c_(0,"ColorSourceType.None")
C.e=new A.c_(1,"ColorSourceType.Solid")
C.c=new A.c_(2,"ColorSourceType.Texture2D")
C.d=new A.c_(3,"ColorSourceType.TextureCube")
C.m=new P.bc(0)
C.w=new P.bc(5e6)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.H=H.c(I.d8([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iI(!1)
$.an=0
$.b9=null
$.df=null
$.cZ=!1
$.f5=null
$.f_=null
$.fb=null
$.ci=null
$.ck=null
$.d6=null
$.b1=null
$.bD=null
$.bE=null
$.d_=!1
$.N=C.i
$.dx=null
$.dw=null
$.dv=null
$.du=null
$.l=V.hl()
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
I.$lazy(y,x,w)}})(["dt","$get$dt",function(){return H.f4("_$dart_dartClosure")},"cA","$get$cA",function(){return H.f4("_$dart_js")},"eg","$get$eg",function(){return H.as(H.cd({
toString:function(){return"$receiver$"}}))},"eh","$get$eh",function(){return H.as(H.cd({$method$:null,
toString:function(){return"$receiver$"}}))},"ei","$get$ei",function(){return H.as(H.cd(null))},"ej","$get$ej",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"en","$get$en",function(){return H.as(H.cd(void 0))},"eo","$get$eo",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"el","$get$el",function(){return H.as(H.em(null))},"ek","$get$ek",function(){return H.as(function(){try{null.$method$}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.as(H.em(void 0))},"ep","$get$ep",function(){return H.as(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cW","$get$cW",function(){return P.iW()},"bF","$get$bF",function(){return[]},"eU","$get$eU",function(){return P.hK("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ds","$get$ds",function(){return{}},"eB","$get$eB",function(){return Z.ah(0)},"ez","$get$ez",function(){return Z.ah(511)},"aD","$get$aD",function(){return Z.ah(1)},"aC","$get$aC",function(){return Z.ah(2)},"aB","$get$aB",function(){return Z.ah(4)},"aE","$get$aE",function(){return Z.ah(8)},"aF","$get$aF",function(){return Z.ah(16)},"bw","$get$bw",function(){return Z.ah(32)},"bx","$get$bx",function(){return Z.ah(64)},"eA","$get$eA",function(){return Z.ah(96)},"b_","$get$b_",function(){return Z.ah(128)},"aA","$get$aA",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[W.ar]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.C,[P.h,E.aJ]]},{func:1,ret:P.G,args:[F.ak]},{func:1,ret:P.G,args:[D.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.n,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.C,[P.h,D.V]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.C,[P.h,U.a7]]},{func:1,ret:-1,args:[P.C,[P.h,V.ao]]},{func:1,ret:P.G,args:[W.a6]},{func:1,ret:-1,args:[P.a],opt:[P.al]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aG,,],args:[,]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.aa,args:[W.J]},{func:1,ret:W.a0,args:[W.J]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[P.Q]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,args:[,P.n]},{func:1,ret:P.aa,args:[P.v,P.v]},{func:1,ret:P.aa,args:[[P.h,D.V]]},{func:1,args:[P.n]},{func:1,ret:P.G,args:[F.aY,P.v,P.v]},{func:1,ret:P.G,args:[P.aW]},{func:1,ret:-1,args:[W.by]}]
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
if(x==y)H.kT(d||a)
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
Isolate.d8=a.d8
Isolate.d3=a.d3
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
if(typeof dartMainRunner==="function")dartMainRunner(E.f8,[])
else E.f8([])})})()
//# sourceMappingURL=test.dart.js.map
