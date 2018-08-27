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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ist)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.e4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.e4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.e4(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e5=function(){}
var dart=[["","",,H,{"^":"",pE:{"^":"b;a"}}],["","",,J,{"^":"",
N:function(a){return void 0},
e8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cy:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e6==null){H.nY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ct("Return interceptor for "+H.m(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dv()]
if(v!=null)return v
v=H.o0(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$dv(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
t:{"^":"b;",
C:function(a,b){return a===b},
gY:function(a){return H.c3(a)},
j:["f8",function(a){return"Instance of '"+H.bv(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
jd:{"^":"t;",
j:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isM:1},
eM:{"^":"t;",
C:function(a,b){return null==b},
j:function(a){return"null"},
gY:function(a){return 0},
$isz:1},
dw:{"^":"t;",
gY:function(a){return 0},
j:["f9",function(a){return String(a)}]},
jV:{"^":"dw;"},
cX:{"^":"dw;"},
bY:{"^":"dw;",
j:function(a){var z=a[$.$get$et()]
if(z==null)return this.f9(a)
return"JavaScript function for "+H.m(J.at(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isds:1},
bd:{"^":"t;$ti",
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.p(P.A("add"))
a.push(b)},
a6:function(a,b){var z
if(!!a.fixed$length)H.p(P.A("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.bo(a))}},
I:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.n(z,y,H.m(a[y]))
return z.join(b)},
iO:function(a){return this.I(a,"")},
iH:function(a,b,c,d){var z,y,x
H.x(b,d)
H.d(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.bo(a))}return y},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
ce:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a8(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.u(a,0)])
return H.h(a.slice(b,c),[H.u(a,0)])},
gaO:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.ja())},
f5:function(a,b,c,d,e){var z,y,x,w
z=H.u(a,0)
H.v(d,"$isn",[z],"$asn")
if(!!a.immutable$list)H.p(P.A("setRange"))
P.aZ(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.F()
if(typeof b!=="number")return H.k(b)
y=c-b
if(y===0)return
H.v(d,"$isf",[z],"$asf")
z=J.aC(d)
x=z.gk(d)
if(typeof x!=="number")return H.k(x)
if(e+y>x)throw H.a(H.jb())
if(e<b)for(w=y-1;w>=0;--w)a[b+w]=z.i(d,e+w)
else for(w=0;w<y;++w)a[b+w]=z.i(d,e+w)},
bA:function(a,b,c,d){return this.f5(a,b,c,d,0)},
aN:function(a,b,c,d){var z
H.x(d,H.u(a,0))
if(!!a.immutable$list)H.p(P.A("fill range"))
P.aZ(b,c,a.length,null,null,null)
for(z=b;z.E(0,c);z=z.m(0,1))a[z]=d},
ar:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.R(a[z],b))return z
return-1},
R:function(a,b){return this.ar(a,b,0)},
bj:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
j:function(a){return P.dt(a,"[","]")},
ga5:function(a){return new J.az(a,a.length,0,[H.u(a,0)])},
gY:function(a){return H.c3(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cC(b,"newLength",null))
if(b<0)throw H.a(P.a8(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b>=a.length||b<0)throw H.a(H.aT(a,b))
return a[b]},
n:function(a,b,c){H.D(b)
H.x(c,H.u(a,0))
if(!!a.immutable$list)H.p(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b>=a.length||b<0)throw H.a(H.aT(a,b))
a[b]=c},
m:function(a,b){var z,y
z=[H.u(a,0)]
H.v(b,"$isf",z,"$asf")
y=C.d.m(a.length,b.gk(b))
z=H.h([],z)
this.sk(z,y)
this.bA(z,0,a.length,a)
this.bA(z,a.length,y,b)
return z},
$isn:1,
$isf:1,
q:{
jc:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cC(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a8(a,0,4294967295,"length",null))
return J.eJ(new Array(a),b)},
eJ:function(a,b){return J.bX(H.h(a,[b]))},
bX:function(a){H.cc(a)
a.fixed$length=Array
return a}}},
pD:{"^":"bd;$ti"},
az:{"^":"b;a,b,c,0d,$ti",
gV:function(a){return this.d},
J:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cj:{"^":"t;",
jt:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
c4:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eV:function(a,b){var z,y
if(b>20)throw H.a(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bv:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a8(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.A("Unexpected toString result: "+z))
x=J.aC(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.l("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a+b},
by:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dW(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dW(a,b)},
dW:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.m(z)+": "+H.m(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.dU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hH:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dU(a,b)},
dU:function(a,b){return b>31?0:a>>>b},
E:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a>=b},
$isC:1,
$isa0:1},
eL:{"^":"cj;",$iso:1},
eK:{"^":"cj;"},
ck:{"^":"t;",
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b<0)throw H.a(H.aT(a,b))
if(b>=a.length)H.p(H.aT(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.a(H.aT(a,b))
return a.charCodeAt(b)},
m:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.cC(b,null,null))
return a+b},
b8:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ah(b))
c=P.aZ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aj:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ah(c))
if(typeof c!=="number")return c.E()
if(c<0||c>a.length)throw H.a(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ai:function(a,b){return this.aj(a,b,0)},
w:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.E()
if(b<0)throw H.a(P.cT(b,null,null))
if(b>c)throw H.a(P.cT(b,null,null))
if(c>a.length)throw H.a(P.cT(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.w(a,b,null)},
dd:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.K(z,0)===133){x=J.je(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.a_(z,w)===133?J.jf(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
j4:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
an:function(a,b){return this.j4(a,b," ")},
j5:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.l(c,z)},
ar:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a8(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
R:function(a,b){return this.ar(a,b,0)},
iQ:function(a,b,c){var z
c=a.length
z=b.length
if(c+z>c)c-=z
return a.lastIndexOf(b,c)},
iP:function(a,b){return this.iQ(a,b,null)},
it:function(a,b,c){if(c>a.length)throw H.a(P.a8(c,0,a.length,null,null))
return H.hL(a,b,c)},
j:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.a(H.aT(a,b))
return a[b]},
$isf4:1,
$isj:1,
q:{
eN:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
je:function(a,b){var z,y
for(z=a.length;b<z;){y=C.b.K(a,b)
if(y!==32&&y!==13&&!J.eN(y))break;++b}return b},
jf:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.b.a_(a,z)
if(y!==32&&y!==13&&!J.eN(y))break}return b}}}}],["","",,H,{"^":"",
d5:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ja:function(){return new P.dL("No element")},
jb:function(){return new P.dL("Too few elements")},
ai:{"^":"l4;a",
gk:function(a){return this.a.length},
i:function(a,b){return C.b.a_(this.a,b)},
$ascY:function(){return[P.o]},
$asy:function(){return[P.o]},
$asn:function(){return[P.o]},
$asf:function(){return[P.o]}},
is:{"^":"n;"},
eV:{"^":"b;a,b,c,0d,$ti",
gV:function(a){return this.d},
J:function(){var z,y,x,w
z=this.a
y=J.aC(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.bo(z))
w=this.c
if(typeof x!=="number")return H.k(x)
if(w>=x){this.d=null
return!1}this.d=y.M(z,w);++this.c
return!0}},
jz:{"^":"n;a,b,$ti",
ga5:function(a){return new H.jA(J.bS(this.a),this.b,this.$ti)},
gk:function(a){return J.as(this.a)},
M:function(a,b){return this.b.$1(J.db(this.a,b))},
$asn:function(a,b){return[b]}},
jA:{"^":"du;0a,b,c,$ti",
J:function(){var z=this.b
if(z.J()){this.a=this.c.$1(z.gV(z))
return!0}this.a=null
return!1},
gV:function(a){return this.a},
$asdu:function(a,b){return[b]}},
lx:{"^":"n;a,b,$ti",
ga5:function(a){return new H.ly(J.bS(this.a),this.b,this.$ti)}},
ly:{"^":"du;a,b,$ti",
J:function(){var z,y
for(z=this.a,y=this.b;z.J();)if(y.$1(z.gV(z)))return!0
return!1},
gV:function(a){var z=this.a
return z.gV(z)}},
cJ:{"^":"b;$ti"},
cY:{"^":"b;$ti",
n:function(a,b,c){H.D(b)
H.x(c,H.aD(this,"cY",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aN:function(a,b,c,d){H.x(d,H.aD(this,"cY",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
l4:{"^":"cN+cY;"}}],["","",,H,{"^":"",
ie:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
nT:function(a){return init.types[H.D(a)]},
hE:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isH},
m:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
c3:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
k5:function(a,b){var z,y,x,w,v,u
if(typeof a!=="string")H.p(H.ah(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.c(z,3)
y=H.L(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a8(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.K(w,u)|32)>x)return}return parseInt(a,b)},
k4:function(a){var z,y
if(typeof a!=="string")H.p(H.ah(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.dd(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bv:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.N(a).$iscX){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.K(w,0)===36)w=C.b.aw(w,1)
r=H.e7(H.cc(H.bj(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jX:function(){if(!!self.location)return self.location.href
return},
f6:function(a){var z,y,x,w,v
H.cc(a)
z=J.as(a)
if(typeof z!=="number")return z.f3()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
k6:function(a){var z,y,x,w
z=H.h([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aY(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.f6(z)},
f7:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.k6(a)}return H.f6(a)},
k7:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.f3()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cR:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aY(z,10))>>>0,56320|z&1023)}}throw H.a(P.a8(a,0,1114111,null,null))},
ax:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
k3:function(a){return a.b?H.ax(a).getUTCFullYear()+0:H.ax(a).getFullYear()+0},
k1:function(a){return a.b?H.ax(a).getUTCMonth()+1:H.ax(a).getMonth()+1},
jY:function(a){return a.b?H.ax(a).getUTCDate()+0:H.ax(a).getDate()+0},
jZ:function(a){return a.b?H.ax(a).getUTCHours()+0:H.ax(a).getHours()+0},
k0:function(a){return a.b?H.ax(a).getUTCMinutes()+0:H.ax(a).getMinutes()+0},
k2:function(a){return a.b?H.ax(a).getUTCSeconds()+0:H.ax(a).getSeconds()+0},
k_:function(a){return a.b?H.ax(a).getUTCMilliseconds()+0:H.ax(a).getMilliseconds()+0},
k:function(a){throw H.a(H.ah(a))},
c:function(a,b){if(a==null)J.as(a)
throw H.a(H.aT(a,b))},
aT:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b6(!0,b,"index",null)
z=H.D(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.k(z)
y=b>=z}else y=!0
if(y)return P.Y(b,a,"index",null,z)
return P.cT(b,"index",null)},
nN:function(a,b,c){if(a>c)return new P.cS(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cS(a,c,!0,b,"end","Invalid value")
return new P.b6(!0,b,"end",null)},
ah:function(a){return new P.b6(!0,a,null,null)},
bN:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.dF()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hN})
z.name=""}else z.toString=H.hN
return z},
hN:function(){return J.at(this.dartException)},
p:function(a){throw H.a(a)},
F:function(a){throw H.a(P.bo(a))},
ae:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oI(a)
if(a==null)return
if(a instanceof H.dr)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dx(H.m(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f3(H.m(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fq()
u=$.$get$fr()
t=$.$get$fs()
s=$.$get$ft()
r=$.$get$fx()
q=$.$get$fy()
p=$.$get$fv()
$.$get$fu()
o=$.$get$fA()
n=$.$get$fz()
m=v.am(y)
if(m!=null)return z.$1(H.dx(H.L(y),m))
else{m=u.am(y)
if(m!=null){m.method="call"
return z.$1(H.dx(H.L(y),m))}else{m=t.am(y)
if(m==null){m=s.am(y)
if(m==null){m=r.am(y)
if(m==null){m=q.am(y)
if(m==null){m=p.am(y)
if(m==null){m=s.am(y)
if(m==null){m=o.am(y)
if(m==null){m=n.am(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f3(H.L(y),m))}}return z.$1(new H.l3(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fd()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b6(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fd()
return a},
bk:function(a){var z
if(a instanceof H.dr)return a.b
if(a==null)return new H.h6(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h6(a)},
nR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.n(0,a[y],a[x])}return b},
o_:function(a,b,c,d,e,f){H.e(a,"$isds")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.q("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o_)
a.$identity=z
return z},
i9:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.N(d).$isf){z.$reflectionInfo=d
x=H.kc(z).r}else x=d
w=e?Object.create(new H.kx().constructor.prototype):Object.create(new H.dg(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aU
if(typeof u!=="number")return u.m()
$.aU=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.eq(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ej:H.dh
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.eq(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i6:function(a,b,c,d){var z=H.dh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eq:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i8(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i6(y,!w,z,b)
if(y===0){w=$.aU
if(typeof w!=="number")return w.m()
$.aU=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bT
if(v==null){v=H.cD("self")
$.bT=v}return new Function(w+H.m(v)+";return "+u+"."+H.m(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aU
if(typeof w!=="number")return w.m()
$.aU=w+1
t+=w
w="return function("+t+"){return this."
v=$.bT
if(v==null){v=H.cD("self")
$.bT=v}return new Function(w+H.m(v)+"."+H.m(z)+"("+t+");}")()},
i7:function(a,b,c,d){var z,y
z=H.dh
y=H.ej
switch(b?-1:a){case 0:throw H.a(H.kl("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i8:function(a,b){var z,y,x,w,v,u,t,s
z=$.bT
if(z==null){z=H.cD("self")
$.bT=z}y=$.ei
if(y==null){y=H.cD("receiver")
$.ei=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i7(w,!u,x,b)
if(w===1){z="return function(){return this."+H.m(z)+"."+H.m(x)+"(this."+H.m(y)+");"
y=$.aU
if(typeof y!=="number")return y.m()
$.aU=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.m(z)+"."+H.m(x)+"(this."+H.m(y)+", "+s+");"
y=$.aU
if(typeof y!=="number")return y.m()
$.aU=y+1
return new Function(z+y+"}")()},
e4:function(a,b,c,d,e,f,g){var z,y
z=J.bX(H.cc(b))
H.D(c)
y=!!J.N(d).$isf?J.bX(d):d
return H.i9(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aS(a,"String"))},
nO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aS(a,"double"))},
oC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aS(a,"num"))},
hx:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aS(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aS(a,"int"))},
hJ:function(a,b){throw H.a(H.aS(a,H.L(b).substring(3)))},
oE:function(a,b){var z=J.aC(b)
throw H.a(H.i3(a,z.w(b,3,z.gk(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.hJ(a,b)},
l:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.oE(a,b)},
cc:function(a){if(a==null)return a
if(!!J.N(a).$isf)return a
throw H.a(H.aS(a,"List"))},
hG:function(a,b){if(a==null)return a
if(!!J.N(a).$isf)return a
if(J.N(a)[b])return a
H.hJ(a,b)},
hy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cv:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hy(J.N(a))
if(z==null)return!1
y=H.hD(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.e0)return a
$.e0=!0
try{if(H.cv(a,b))return a
z=H.cz(b)
y=H.aS(a,z)
throw H.a(y)}finally{$.e0=!1}},
bQ:function(a,b){if(a!=null&&!H.e3(a,b))H.p(H.aS(a,H.cz(b)))
return a},
hs:function(a){var z
if(a instanceof H.i){z=H.hy(J.N(a))
if(z!=null)return H.cz(z)
return"Closure"}return H.bv(a)},
oH:function(a){throw H.a(new P.ii(H.L(a)))},
hA:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
bj:function(a){if(a==null)return
return a.$ti},
qM:function(a,b,c){return H.bR(a["$as"+H.m(c)],H.bj(b))},
bb:function(a,b,c,d){var z
H.L(c)
H.D(d)
z=H.bR(a["$as"+H.m(c)],H.bj(b))
return z==null?null:z[d]},
aD:function(a,b,c){var z
H.L(b)
H.D(c)
z=H.bR(a["$as"+H.m(b)],H.bj(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.D(b)
z=H.bj(a)
return z==null?null:z[b]},
cz:function(a){var z=H.bm(a,null)
return z},
bm:function(a,b){var z,y
H.v(b,"$isf",[P.j],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e7(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.m(b[y])}if('func' in a)return H.ny(a,b)
if('futureOr' in a)return"FutureOr<"+H.bm("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ny:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.b.m(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bm(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bm(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bm(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bm(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nQ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.bm(i[h],b)+(" "+H.m(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e7:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isf",[P.j],"$asf")
if(a==null)return""
z=new P.aH("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bm(u,c)}v="<"+z.j(0)+">"
return v},
bR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bj(a)
y=J.N(a)
if(y[b]==null)return!1
return H.hv(H.bR(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.L(b)
H.cc(c)
H.L(d)
if(a==null)return a
z=H.b4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e7(c,0,null)
throw H.a(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hv:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aP(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aP(a[y],b,c[y],d))return!1
return!0},
qK:function(a,b,c){return a.apply(b,H.bR(J.N(b)["$as"+H.m(c)],H.bj(b)))},
hF:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="z"||a===-1||a===-2||H.hF(z)}return!1},
e3:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="z"||b===-1||b===-2||H.hF(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.e3(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cv(a,b)}y=J.N(a).constructor
x=H.bj(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aP(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.e3(a,b))throw H.a(H.aS(a,H.cz(b)))
return a},
aP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aP(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.hD(a,b,c,d)
if('func' in a)return c.builtin$cls==="ds"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aP("type" in a?a.type:null,b,x,d)
else if(H.aP(a,b,x,d))return!0
else{if(!('$is'+"af" in y.prototype))return!1
w=y.prototype["$as"+"af"]
v=H.bR(w,z?a.slice(1):null)
return H.aP(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cz(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hv(H.bR(r,z),b,u,d)},
hD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aP(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aP(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aP(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aP(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.oB(m,b,l,d)},
oB:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aP(c[w],d,a[w],b))return!1}return!0},
qL:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
o0:function(a){var z,y,x,w,v,u
z=H.L($.hC.$1(a))
y=$.d4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.hu.$2(a,z))
if(z!=null){y=$.d4[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d6[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d7(x)
$.d4[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d6[z]=x
return x}if(v==="-"){u=H.d7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hI(a,x)
if(v==="*")throw H.a(P.ct(z))
if(init.leafTags[z]===true){u=H.d7(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hI(a,x)},
hI:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e8(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d7:function(a){return J.e8(a,!1,null,!!a.$isH)},
oA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d7(z)
else return J.e8(z,c,null,null)},
nY:function(){if(!0===$.e6)return
$.e6=!0
H.nZ()},
nZ:function(){var z,y,x,w,v,u,t,s
$.d4=Object.create(null)
$.d6=Object.create(null)
H.nU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hK.$1(v)
if(u!=null){t=H.oA(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nU:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bM(C.K,H.bM(C.P,H.bM(C.u,H.bM(C.u,H.bM(C.O,H.bM(C.L,H.bM(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hC=new H.nV(v)
$.hu=new H.nW(u)
$.hK=new H.nX(t)},
bM:function(a,b){return a(b)||b},
hL:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hM:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
id:{"^":"b;$ti",
j:function(a){return P.dy(this)},
n:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
return H.ie()},
$isJ:1},
ig:{"^":"id;a,b,c,$ti",
gk:function(a){return this.a},
bQ:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bQ(0,b))return
return this.dH(b)},
dH:function(a){return this.b[H.L(a)]},
A:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.d(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dH(v),z))}}},
kb:{"^":"b;a,b,c,d,e,f,r,0x",q:{
kc:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bX(z)
y=z[0]
x=z[1]
return new H.kb(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kR:{"^":"b;a,b,c,d,e,f",
am:function(a){var z,y,x
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
b_:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fw:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jQ:{"^":"ak;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.m(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
f3:function(a,b){return new H.jQ(a,b==null?null:b.method)}}},
ji:{"^":"ak;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.m(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.m(this.a)+")"},
q:{
dx:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ji(a,y,z?null:b.receiver)}}},
l3:{"^":"ak;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
dr:{"^":"b;a,b"},
oI:{"^":"i:20;a",
$1:function(a){if(!!J.N(a).$isak)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h6:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isau:1},
i:{"^":"b;",
j:function(a){return"Closure '"+H.bv(this).trim()+"'"},
gf0:function(){return this},
$isds:1,
gf0:function(){return this}},
fi:{"^":"i;"},
kx:{"^":"fi;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
dg:{"^":"fi;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dg))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.c3(this.a)
else y=typeof z!=="object"?J.bn(z):H.c3(z)
return(y^H.c3(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bv(z)+"'")},
q:{
dh:function(a){return a.a},
ej:function(a){return a.c},
cD:function(a){var z,y,x,w,v
z=new H.dg("self","target","receiver","name")
y=J.bX(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kS:{"^":"ak;a",
j:function(a){return this.a},
q:{
aS:function(a,b){return new H.kS("TypeError: "+H.m(P.cI(a))+": type '"+H.hs(a)+"' is not a subtype of type '"+b+"'")}}},
i2:{"^":"ak;a",
j:function(a){return this.a},
q:{
i3:function(a,b){return new H.i2("CastError: "+H.m(P.cI(a))+": type '"+H.hs(a)+"' is not a subtype of type '"+b+"'")}}},
kk:{"^":"ak;a",
j:function(a){return"RuntimeError: "+H.m(this.a)},
q:{
kl:function(a){return new H.kk(a)}}},
aR:{"^":"jw;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaB:function(a){return new H.jm(this,[H.u(this,0)])},
bQ:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dE(y,b)}else return this.iL(b)},
iL:function(a){var z=this.d
if(z==null)return!1
return this.d1(this.cq(z,this.d0(a)),a)>=0},
ih:function(a,b){J.dc(H.v(b,"$isJ",this.$ti,"$asJ"),new H.jh(this))},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bC(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bC(w,b)
x=y==null?null:y.b
return x}else return this.iM(b)},
iM:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cq(z,this.d0(a))
x=this.d1(y,a)
if(x<0)return
return y[x].b},
n:function(a,b,c){var z,y
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cu()
this.b=z}this.dt(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cu()
this.c=y}this.dt(y,b,c)}else this.iN(b,c)},
iN:function(a,b){var z,y,x,w
H.x(a,H.u(this,0))
H.x(b,H.u(this,1))
z=this.d
if(z==null){z=this.cu()
this.d=z}y=this.d0(a)
x=this.cq(z,y)
if(x==null)this.cE(z,y,[this.cv(a,b)])
else{w=this.d1(x,a)
if(w>=0)x[w].b=b
else x.push(this.cv(a,b))}},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.bo(this))
z=z.c}},
dt:function(a,b,c){var z
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
z=this.bC(a,b)
if(z==null)this.cE(a,b,this.cv(b,c))
else z.b=c},
fW:function(){this.r=this.r+1&67108863},
cv:function(a,b){var z,y
z=new H.jl(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fW()
return z},
d0:function(a){return J.bn(a)&0x3ffffff},
d1:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
j:function(a){return P.dy(this)},
bC:function(a,b){return a[b]},
cq:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
fJ:function(a,b){delete a[b]},
dE:function(a,b){return this.bC(a,b)!=null},
cu:function(){var z=Object.create(null)
this.cE(z,"<non-identifier-key>",z)
this.fJ(z,"<non-identifier-key>")
return z},
$iseS:1},
jh:{"^":"i;a",
$2:function(a,b){var z=this.a
z.n(0,H.x(a,H.u(z,0)),H.x(b,H.u(z,1)))},
$S:function(){var z=this.a
return{func:1,ret:P.z,args:[H.u(z,0),H.u(z,1)]}}},
jl:{"^":"b;a,b,0c,0d"},
jm:{"^":"is;a,$ti",
gk:function(a){return this.a.a},
ga5:function(a){var z,y
z=this.a
y=new H.jn(z,z.r,this.$ti)
y.c=z.e
return y}},
jn:{"^":"b;a,b,0c,0d,$ti",
gV:function(a){return this.d},
J:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bo(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nV:{"^":"i:20;a",
$1:function(a){return this.a(a)}},
nW:{"^":"i:30;a",
$2:function(a,b){return this.a(a,b)}},
nX:{"^":"i:34;a",
$1:function(a){return this.a(H.L(a))}},
jg:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gh0:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.eO(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
iF:function(a){var z=this.b.exec(a)
if(z==null)return
return new H.h_(this,z)},
fM:function(a,b){var z,y
z=this.gh0()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.h_(this,y)},
$isf4:1,
$iskd:1,
q:{
eO:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
h_:{"^":"b;a,b",
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]}},
lA:{"^":"b;a,b,c,0d",
gV:function(a){return this.d},
J:function(){var z,y,x,w
z=this.b
if(z==null)return!1
y=this.c
if(y<=z.length){x=this.a.fM(z,y)
if(x!=null){this.d=x
z=x.b
y=z.index
w=y+z[0].length
this.c=y===w?w+1:w
return!0}}this.d=null
this.b=null
return!1}}}],["","",,H,{"^":"",
nQ:function(a){return J.eJ(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
oD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bJ:function(a){return a},
jN:function(a){return new Int8Array(a)},
b3:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aT(b,a))},
ns:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nN(a,b,c))
return b},
f2:{"^":"t;",$isf2:1,"%":"ArrayBuffer"},
dD:{"^":"t;",$isdD:1,$iskT:1,"%":"DataView;ArrayBufferView;dC|h0|h1|jO|h2|h3|bf"},
dC:{"^":"dD;",
gk:function(a){return a.length},
$isH:1,
$asH:I.e5},
jO:{"^":"h1;",
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
n:function(a,b,c){H.D(b)
H.nO(c)
H.b3(b,a,a.length)
a[b]=c},
$ascJ:function(){return[P.C]},
$asy:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]},
"%":"Float32Array|Float64Array"},
bf:{"^":"h3;",
n:function(a,b,c){H.D(b)
H.D(c)
H.b3(b,a,a.length)
a[b]=c},
$ascJ:function(){return[P.o]},
$asy:function(){return[P.o]},
$isn:1,
$asn:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]}},
pQ:{"^":"bf;",
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
"%":"Int16Array"},
pR:{"^":"bf;",
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
"%":"Int32Array"},
pS:{"^":"bf;",
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
"%":"Int8Array"},
pT:{"^":"bf;",
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
pU:{"^":"bf;",
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pV:{"^":"bf;",
gk:function(a){return a.length},
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dE:{"^":"bf;",
gk:function(a){return a.length},
i:function(a,b){H.b3(b,a,a.length)
return a[b]},
ce:function(a,b,c){return new Uint8Array(a.subarray(b,H.ns(b,c,a.length)))},
$isdE:1,
$isW:1,
"%":";Uint8Array"},
h0:{"^":"dC+y;"},
h1:{"^":"h0+cJ;"},
h2:{"^":"dC+y;"},
h3:{"^":"h2+cJ;"}}],["","",,P,{"^":"",
lE:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nG()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bO(new P.lG(z),1)).observe(y,{childList:true})
return new P.lF(z,y,x)}else if(self.setImmediate!=null)return P.nH()
return P.nI()},
qz:[function(a){self.scheduleImmediate(H.bO(new P.lH(H.d(a,{func:1,ret:-1})),0))},"$1","nG",4,0,15],
qA:[function(a){self.setImmediate(H.bO(new P.lI(H.d(a,{func:1,ret:-1})),0))},"$1","nH",4,0,15],
qB:[function(a){P.dP(C.t,H.d(a,{func:1,ret:-1}))},"$1","nI",4,0,15],
dP:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.d.aa(a.a,1000)
return P.mK(z<0?0:z,b)},
fl:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.bC]})
z=C.d.aa(a.a,1000)
return P.mL(z<0?0:z,b)},
ac:function(a){return new P.fR(new P.mH(new P.ay(0,$.Q,[a]),[a]),!1,[a])},
ab:function(a,b){H.d(a,{func:1,ret:-1,args:[P.o,,]})
H.e(b,"$isfR")
a.$2(0,null)
b.b=!0
return b.a.a},
an:function(a,b){P.np(a,H.d(b,{func:1,ret:-1,args:[P.o,,]}))},
aa:function(a,b){H.e(b,"$isdn").aI(0,a)},
a9:function(a,b){H.e(b,"$isdn").bi(H.ae(a),H.bk(a))},
np:function(a,b){var z,y,x,w,v
H.d(b,{func:1,ret:-1,args:[P.o,,]})
z=new P.nq(b)
y=new P.nr(b)
x=J.N(a)
if(!!x.$isay)a.cG(H.d(z,{func:1,ret:{futureOr:1},args:[,]}),y,null)
else{w={func:1,ret:{futureOr:1},args:[,]}
if(!!x.$isaf)a.c6(H.d(z,w),y,null)
else{v=new P.ay(0,$.Q,[null])
H.x(a,null)
v.a=4
v.c=a
v.cG(H.d(z,w),null,null)}}},
ad:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
return $.Q.eR(new P.nF(z),P.z,P.o,null)},
nB:function(a,b){if(H.cv(a,{func:1,args:[P.b,P.au]}))return b.eR(a,null,P.b,P.au)
if(H.cv(a,{func:1,args:[P.b]}))return H.d(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cC(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nA:function(){var z,y
for(;z=$.bK,z!=null;){$.ca=null
y=z.b
$.bK=y
if(y==null)$.c9=null
z.a.$0()}},
qJ:[function(){$.e1=!0
try{P.nA()}finally{$.ca=null
$.e1=!1
if($.bK!=null)$.$get$dW().$1(P.hw())}},"$0","hw",0,0,7],
hp:function(a){var z=new P.fS(H.d(a,{func:1,ret:-1}))
if($.bK==null){$.c9=z
$.bK=z
if(!$.e1)$.$get$dW().$1(P.hw())}else{$.c9.b=z
$.c9=z}},
nE:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.bK
if(z==null){P.hp(a)
$.ca=$.c9
return}y=new P.fS(a)
x=$.ca
if(x==null){y.b=z
$.ca=y
$.bK=y}else{y.b=x.b
x.b=y
$.ca=y
if(y.b==null)$.c9=y}},
ea:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.Q
if(C.j===y){P.bL(null,null,C.j,a)
return}y.toString
P.bL(null,null,y,H.d(y.cL(a),z))},
qh:function(a,b){return new P.mC(H.v(a,"$iscq",[b],"$ascq"),!1,[b])},
kN:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.Q
if(y===C.j){y.toString
return P.dP(a,b)}return P.dP(a,H.d(y.cL(b),z))},
kO:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bC]}
H.d(b,z)
y=$.Q
if(y===C.j){y.toString
return P.fl(a,b)}x=y.e2(b,P.bC)
$.Q.toString
return P.fl(a,H.d(x,z))},
d2:function(a,b,c,d,e){var z={}
z.a=d
P.nE(new P.nC(z,e))},
hl:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.Q
if(y===c)return d.$0()
$.Q=c
z=y
try{y=d.$0()
return y}finally{$.Q=z}},
hm:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.Q
if(y===c)return d.$1(e)
$.Q=c
z=y
try{y=d.$1(e)
return y}finally{$.Q=z}},
nD:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.Q
if(y===c)return d.$2(e,f)
$.Q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Q=z}},
bL:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cL(d):c.ip(d,-1)
P.hp(d)},
lG:{"^":"i:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lF:{"^":"i:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lH:{"^":"i:0;a",
$0:function(){this.a.$0()}},
lI:{"^":"i:0;a",
$0:function(){this.a.$0()}},
ha:{"^":"b;a,0b,c",
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bO(new P.mN(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
fn:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bO(new P.mM(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbC:1,
q:{
mK:function(a,b){var z=new P.ha(!0,0)
z.fm(a,b)
return z},
mL:function(a,b){var z=new P.ha(!1,0)
z.fn(a,b)
return z}}},
mN:{"^":"i:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mM:{"^":"i:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.fb(w,x)}z.c=y
this.d.$1(z)}},
fR:{"^":"b;a,b,$ti",
aI:function(a,b){var z
H.bQ(b,{futureOr:1,type:H.u(this,0)})
if(this.b)this.a.aI(0,b)
else{z=H.b4(b,"$isaf",this.$ti,"$asaf")
if(z){z=this.a
b.c6(z.gir(z),z.ge5(),-1)}else P.ea(new P.lC(this,b))}},
bi:function(a,b){if(this.b)this.a.bi(a,b)
else P.ea(new P.lB(this,a,b))},
$isdn:1},
lC:{"^":"i:0;a,b",
$0:function(){this.a.a.aI(0,this.b)}},
lB:{"^":"i:0;a,b,c",
$0:function(){this.a.a.bi(this.b,this.c)}},
nq:{"^":"i:35;a",
$1:function(a){return this.a.$2(0,a)}},
nr:{"^":"i:36;a",
$2:function(a,b){this.a.$2(1,new H.dr(a,H.e(b,"$isau")))}},
nF:{"^":"i:40;a",
$2:function(a,b){this.a(H.D(a),b)}},
af:{"^":"b;$ti"},
fU:{"^":"b;$ti",
bi:[function(a,b){H.e(b,"$isau")
if(a==null)a=new P.dF()
if(this.a.a!==0)throw H.a(P.dM("Future already completed"))
$.Q.toString
this.ay(a,b)},function(a){return this.bi(a,null)},"is","$2","$1","ge5",4,2,18],
$isdn:1},
lD:{"^":"fU;a,$ti",
aI:function(a,b){var z
H.bQ(b,{futureOr:1,type:H.u(this,0)})
z=this.a
if(z.a!==0)throw H.a(P.dM("Future already completed"))
z.fs(b)},
ay:function(a,b){this.a.ft(a,b)}},
mH:{"^":"fU;a,$ti",
aI:[function(a,b){var z
H.bQ(b,{futureOr:1,type:H.u(this,0)})
z=this.a
if(z.a!==0)throw H.a(P.dM("Future already completed"))
z.cm(b)},function(a){return this.aI(a,null)},"kr","$1","$0","gir",1,2,62],
ay:function(a,b){this.a.ay(a,b)}},
bH:{"^":"b;0a,b,c,d,e,$ti",
iV:function(a){if(this.c!==6)return!0
return this.b.b.dc(H.d(this.d,{func:1,ret:P.M,args:[P.b]}),a.a,P.M,P.b)},
iK:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.cv(z,{func:1,args:[P.b,P.au]}))return H.bQ(w.jo(z,a.a,a.b,null,y,P.au),x)
else return H.bQ(w.dc(H.d(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ay:{"^":"b;dV:a<,b,0hC:c<,$ti",
c6:function(a,b,c){var z,y
z=H.u(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Q
if(y!==C.j){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nB(b,y)}return this.cG(a,b,c)},
eU:function(a,b){return this.c6(a,null,b)},
cG:function(a,b,c){var z,y,x
z=H.u(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=new P.ay(0,$.Q,[c])
x=b==null?1:3
this.du(new P.bH(y,x,a,b,[z,c]))
return y},
du:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbH")
this.c=a}else{if(z===2){y=H.e(this.c,"$isay")
z=y.a
if(z<4){y.du(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bL(null,null,z,H.d(new P.lX(this,a),{func:1,ret:-1}))}},
dN:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbH")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isay")
y=u.a
if(y<4){u.dN(a)
return}this.a=y
this.c=u.c}z.a=this.bI(a)
y=this.b
y.toString
P.bL(null,null,y,H.d(new P.m3(z,this),{func:1,ret:-1}))}},
bH:function(){var z=H.e(this.c,"$isbH")
this.c=null
return this.bI(z)},
bI:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cm:function(a){var z,y,x,w
z=H.u(this,0)
H.bQ(a,{futureOr:1,type:z})
y=this.$ti
x=H.b4(a,"$isaf",y,"$asaf")
if(x){z=H.b4(a,"$isay",y,null)
if(z)P.cZ(a,this)
else P.fW(a,this)}else{w=this.bH()
H.x(a,z)
this.a=4
this.c=a
P.bI(this,w)}},
ay:[function(a,b){var z
H.e(b,"$isau")
z=this.bH()
this.a=8
this.c=new P.aF(a,b)
P.bI(this,z)},function(a){return this.ay(a,null)},"jE","$2","$1","gfF",4,2,18],
fs:function(a){var z
H.bQ(a,{futureOr:1,type:H.u(this,0)})
z=H.b4(a,"$isaf",this.$ti,"$asaf")
if(z){this.fD(a)
return}this.a=1
z=this.b
z.toString
P.bL(null,null,z,H.d(new P.lZ(this,a),{func:1,ret:-1}))},
fD:function(a){var z=this.$ti
H.v(a,"$isaf",z,"$asaf")
z=H.b4(a,"$isay",z,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.bL(null,null,z,H.d(new P.m2(this,a),{func:1,ret:-1}))}else P.cZ(a,this)
return}P.fW(a,this)},
ft:function(a,b){var z
this.a=1
z=this.b
z.toString
P.bL(null,null,z,H.d(new P.lY(this,a,b),{func:1,ret:-1}))},
$isaf:1,
q:{
fW:function(a,b){var z,y,x
b.a=1
try{a.c6(new P.m_(b),new P.m0(b),null)}catch(x){z=H.ae(x)
y=H.bk(x)
P.ea(new P.m1(b,z,y))}},
cZ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isay")
if(z>=4){y=b.bH()
b.a=a.a
b.c=a.c
P.bI(b,y)}else{y=H.e(b.c,"$isbH")
b.a=2
b.c=a
a.dN(y)}},
bI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isaF")
y=y.b
u=v.a
t=v.b
y.toString
P.d2(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bI(z.a,b)}y=z.a
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
if(p){H.e(r,"$isaF")
y=y.b
u=r.a
t=r.b
y.toString
P.d2(null,null,y,u,t)
return}o=$.Q
if(o==null?q!=null:o!==q)$.Q=q
else o=null
y=b.c
if(y===8)new P.m6(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.m5(x,b,r).$0()}else if((y&2)!==0)new P.m4(z,x,b).$0()
if(o!=null)$.Q=o
y=x.b
if(!!J.N(y).$isaf){if(y.a>=4){n=H.e(t.c,"$isbH")
t.c=null
b=t.bI(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cZ(y,t)
return}}m=b.b
n=H.e(m.c,"$isbH")
m.c=null
b=m.bI(n)
y=x.a
u=x.b
if(!y){H.x(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isaF")
m.a=8
m.c=u}z.a=m
y=m}}}},
lX:{"^":"i:0;a,b",
$0:function(){P.bI(this.a,this.b)}},
m3:{"^":"i:0;a,b",
$0:function(){P.bI(this.b,this.a.a)}},
m_:{"^":"i:23;a",
$1:function(a){var z=this.a
z.a=0
z.cm(a)}},
m0:{"^":"i:48;a",
$2:function(a,b){this.a.ay(a,H.e(b,"$isau"))},
$1:function(a){return this.$2(a,null)}},
m1:{"^":"i:0;a,b,c",
$0:function(){this.a.ay(this.b,this.c)}},
lZ:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.x(this.b,H.u(z,0))
x=z.bH()
z.a=4
z.c=y
P.bI(z,x)}},
m2:{"^":"i:0;a,b",
$0:function(){P.cZ(this.b,this.a)}},
lY:{"^":"i:0;a,b,c",
$0:function(){this.a.ay(this.b,this.c)}},
m6:{"^":"i:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eT(H.d(w.d,{func:1}),null)}catch(v){y=H.ae(v)
x=H.bk(v)
if(this.d){w=H.e(this.a.a.c,"$isaF").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isaF")
else u.b=new P.aF(y,x)
u.a=!0
return}if(!!J.N(z).$isaf){if(z instanceof P.ay&&z.gdV()>=4){if(z.gdV()===8){w=this.b
w.b=H.e(z.ghC(),"$isaF")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eU(new P.m7(t),null)
w.a=!1}}},
m7:{"^":"i:49;a",
$1:function(a){return this.a}},
m5:{"^":"i:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.x(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.dc(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ae(t)
y=H.bk(t)
x=this.a
x.b=new P.aF(z,y)
x.a=!0}}},
m4:{"^":"i:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isaF")
w=this.c
if(w.iV(z)&&w.e!=null){v=this.b
v.b=w.iK(z)
v.a=!1}}catch(u){y=H.ae(u)
x=H.bk(u)
w=H.e(this.a.a.c,"$isaF")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aF(y,x)
s.a=!0}}},
fS:{"^":"b;a,0b"},
cq:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.ay(0,$.Q,[P.o])
z.a=0
this.iT(new P.kA(z,this),!0,new P.kB(z,y),y.gfF())
return y}},
kA:{"^":"i;a,b",
$1:function(a){H.x(a,H.aD(this.b,"cq",0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.aD(this.b,"cq",0)]}}},
kB:{"^":"i:0;a,b",
$0:function(){this.b.cm(this.a.a)}},
ff:{"^":"b;$ti"},
kz:{"^":"b;"},
mC:{"^":"b;0a,b,c,$ti"},
bC:{"^":"b;"},
aF:{"^":"b;a,b",
j:function(a){return H.m(this.a)},
$isak:1},
ne:{"^":"b;",$isqy:1},
nC:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dF()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
mr:{"^":"ne;",
jp:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.j===$.Q){a.$0()
return}P.hl(null,null,this,a,-1)}catch(x){z=H.ae(x)
y=H.bk(x)
P.d2(null,null,this,z,H.e(y,"$isau"))}},
jq:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.j===$.Q){a.$1(b)
return}P.hm(null,null,this,a,b,-1,c)}catch(x){z=H.ae(x)
y=H.bk(x)
P.d2(null,null,this,z,H.e(y,"$isau"))}},
ip:function(a,b){return new P.mt(this,H.d(a,{func:1,ret:b}),b)},
cL:function(a){return new P.ms(this,H.d(a,{func:1,ret:-1}))},
e2:function(a,b){return new P.mu(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
eT:function(a,b){H.d(a,{func:1,ret:b})
if($.Q===C.j)return a.$0()
return P.hl(null,null,this,a,b)},
dc:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.Q===C.j)return a.$1(b)
return P.hm(null,null,this,a,b,c,d)},
jo:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.Q===C.j)return a.$2(b,c)
return P.nD(null,null,this,a,b,c,d,e,f)},
eR:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
mt:{"^":"i;a,b,c",
$0:function(){return this.a.eT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ms:{"^":"i:7;a,b",
$0:function(){return this.a.jp(this.b)}},
mu:{"^":"i;a,b,c",
$1:function(a){var z=this.c
return this.a.jq(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
jo:function(a,b,c,d,e){return new H.aR(0,0,[d,e])},
jp:function(a,b,c){H.cc(a)
return H.v(H.nR(a,new H.aR(0,0,[b,c])),"$iseS",[b,c],"$aseS")},
eT:function(a,b){return new H.aR(0,0,[a,b])},
jr:function(a,b,c,d){return new P.md(0,0,[d])},
j9:function(a,b,c){var z,y
if(P.e2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$cb()
C.a.h(y,a)
try{P.nz(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.fg(b,H.hG(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
dt:function(a,b,c){var z,y,x
if(P.e2(a))return b+"..."+c
z=new P.aH(b)
y=$.$get$cb()
C.a.h(y,a)
try{x=z
x.a=P.fg(x.gaT(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaT()+c
y=z.gaT()
return y.charCodeAt(0)==0?y:y},
e2:function(a){var z,y
for(z=0;y=$.$get$cb(),z<y.length;++z)if(a===y[z])return!0
return!1},
nz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga5(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.J())return
w=H.m(z.gV(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.J()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gV(z);++x
if(!z.J()){if(x<=4){C.a.h(b,H.m(t))
return}v=H.m(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gV(z);++x
for(;z.J();t=s,s=r){r=z.gV(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.m(t)
v=H.m(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eU:function(a,b,c){var z=P.jo(null,null,null,b,c)
a.A(0,new P.jq(z,b,c))
return z},
dy:function(a){var z,y,x
z={}
if(P.e2(a))return"{...}"
y=new P.aH("")
try{C.a.h($.$get$cb(),a)
x=y
x.a=x.gaT()+"{"
z.a=!0
J.dc(a,new P.jx(z,y))
z=y
z.a=z.gaT()+"}"}finally{z=$.$get$cb()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaT()
return z.charCodeAt(0)==0?z:z},
md:{"^":"m8;a,0b,0c,0d,0e,0f,r,$ti",
ga5:function(a){return P.fZ(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.x(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dY()
this.b=z}return this.dA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dY()
this.c=y}return this.dA(y,b)}else return this.fp(0,b)},
fp:function(a,b){var z,y,x
H.x(b,H.u(this,0))
z=this.d
if(z==null){z=P.dY()
this.d=z}y=this.dC(b)
x=z[y]
if(x==null)z[y]=[this.cl(b)]
else{if(this.dI(x,b)>=0)return!1
x.push(this.cl(b))}return!0},
a6:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dO(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dO(this.c,b)
else return this.hw(0,b)},
hw:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fS(z,b)
x=this.dI(y,b)
if(x<0)return!1
this.dX(y.splice(x,1)[0])
return!0},
dA:function(a,b){H.x(b,H.u(this,0))
if(H.e(a[b],"$isdX")!=null)return!1
a[b]=this.cl(b)
return!0},
dO:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdX")
if(z==null)return!1
this.dX(z)
delete a[b]
return!0},
dB:function(){this.r=this.r+1&67108863},
cl:function(a){var z,y
z=new P.dX(H.x(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dB()
return z},
dX:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dB()},
dC:function(a){return J.bn(a)&0x3ffffff},
fS:function(a,b){return a[this.dC(b)]},
dI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
q:{
dY:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dX:{"^":"b;a,0b,0c"},
me:{"^":"b;a,b,0c,0d,$ti",
gV:function(a){return this.d},
J:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bo(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.u(this,0))
this.c=z.b
return!0}}},
q:{
fZ:function(a,b,c){var z=new P.me(a,b,[c])
z.c=a.e
return z}}},
m8:{"^":"km;"},
jq:{"^":"i:10;a,b,c",
$2:function(a,b){this.a.n(0,H.x(a,this.b),H.x(b,this.c))}},
cN:{"^":"mf;",$isn:1,$isf:1},
y:{"^":"b;$ti",
ga5:function(a){return new H.eV(a,this.gk(a),0,[H.bb(this,a,"y",0)])},
M:function(a,b){return this.i(a,b)},
jv:function(a,b){var z,y,x
z=H.h([],[H.bb(this,a,"y",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.k(x)
if(!(y<x))break
C.a.n(z,y,this.i(a,y));++y}return z},
ju:function(a){return this.jv(a,!0)},
m:function(a,b){var z,y,x
z=[H.bb(this,a,"y",0)]
H.v(b,"$isf",z,"$asf")
y=H.h([],z)
z=this.gk(a)
x=b.gk(b)
if(typeof z!=="number")return z.m()
C.a.sk(y,C.d.m(z,x))
C.a.bA(y,0,this.gk(a),a)
C.a.bA(y,this.gk(a),y.length,b)
return y},
aN:function(a,b,c,d){var z
H.x(d,H.bb(this,a,"y",0))
P.aZ(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.n(a,z,d)},
ar:function(a,b,c){var z,y
if(c.E(0,0))c=0
z=c
while(!0){y=this.gk(a)
if(typeof y!=="number")return H.k(y)
if(!(z<y))break
if(J.R(this.i(a,z),b))return z;++z}return-1},
R:function(a,b){return this.ar(a,b,0)},
j:function(a){return P.dt(a,"[","]")}},
jw:{"^":"aA;"},
jx:{"^":"i:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.m(a)
z.a=y+": "
z.a+=H.m(b)}},
aA:{"^":"b;$ti",
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bb(this,a,"aA",0),H.bb(this,a,"aA",1)]})
for(z=J.bS(this.gaB(a));z.J();){y=z.gV(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.as(this.gaB(a))},
j:function(a){return P.dy(a)},
$isJ:1},
mS:{"^":"b;$ti",
n:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
jy:{"^":"b;$ti",
i:function(a,b){return J.X(this.a,b)},
n:function(a,b,c){J.d9(this.a,H.x(b,H.u(this,0)),H.x(c,H.u(this,1)))},
A:function(a,b){J.dc(this.a,H.d(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gk:function(a){return J.as(this.a)},
j:function(a){return J.at(this.a)},
$isJ:1},
fH:{"^":"mT;a,$ti"},
ko:{"^":"b;$ti",
j:function(a){return P.dt(this,"{","}")},
M:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ee("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.fZ(this,this.r,H.u(this,0)),y=0;z.J();){x=z.d
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
$isn:1},
km:{"^":"ko;"},
mf:{"^":"b+y;"},
mT:{"^":"jy+mS;$ti"}}],["","",,P,{"^":"",i_:{"^":"cf;a",
iX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aZ(c,d,b.length,null,null,null)
z=$.$get$fT()
if(typeof d!=="number")return H.k(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.K(b,y)
if(r===37){q=s+2
if(q<=d){p=H.d5(C.b.K(b,s))
o=H.d5(C.b.K(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.c(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aH("")
w.a+=C.b.w(b,x,y)
w.a+=H.cR(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.eh(b,u,d,v,t,k)
else{j=C.d.by(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b8(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.eh(b,u,d,v,t,i)
else{j=C.d.by(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b8(b,d,d,j===2?"==":"=")}return b},
$ascf:function(){return[[P.f,P.o],P.j]},
q:{
eh:function(a,b,c,d,e,f){if(C.d.by(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},i0:{"^":"bU;a",
$asbU:function(){return[[P.f,P.o],P.j]}},cf:{"^":"b;$ti"},bU:{"^":"kz;$ti"},iu:{"^":"cf;",
$ascf:function(){return[P.j,[P.f,P.o]]}},lh:{"^":"iu;a",
giB:function(){return C.F}},lo:{"^":"bU;",
bk:function(a,b,c){var z,y,x,w
z=a.length
P.aZ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.nd(0,0,x)
if(w.fR(a,b,z)!==z)w.e_(J.hR(a,z-1),0)
return C.W.ce(x,0,w.b)},
cQ:function(a){return this.bk(a,0,null)},
$asbU:function(){return[P.j,[P.f,P.o]]}},nd:{"^":"b;a,b,c",
e_:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.c(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.c(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.c(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.c(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.c(z,y)
z[y]=128|a&63
return!1}},
fR:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.K(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.e_(w,C.b.K(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.c(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.c(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.c(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.c(z,v)
z[v]=128|w&63}}return x}},li:{"^":"bU;a",
bk:function(a,b,c){var z,y,x,w,v
H.v(a,"$isf",[P.o],"$asf")
z=P.lj(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aZ(b,c,y,null,null,null)
x=new P.aH("")
w=new P.na(!1,x,!0,0,0,0)
w.bk(a,b,y)
w.iG(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cQ:function(a){return this.bk(a,0,null)},
$asbU:function(){return[[P.f,P.o],P.j]},
q:{
lj:function(a,b,c,d){H.v(b,"$isf",[P.o],"$asf")
if(b instanceof Uint8Array)return P.lk(!1,b,c,d)
return},
lk:function(a,b,c,d){var z,y,x
z=$.$get$fL()
if(z==null)return
y=0===c
if(y&&!0)return P.dU(z,b)
x=b.length
d=P.aZ(c,d,x,null,null,null)
if(y&&d===x)return P.dU(z,b)
return P.dU(z,b.subarray(c,d))},
dU:function(a,b){if(P.lm(b))return
return P.ln(a,b)},
ln:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ae(y)}return},
lm:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ll:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ae(y)}return}}},na:{"^":"b;a,b,c,d,e,f",
iG:function(a,b,c){var z
H.v(b,"$isf",[P.o],"$asf")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bk:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isf",[P.o],"$asf")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.nc(c)
v=new P.nb(this,b,c,a)
$label0$0:for(u=J.aC(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ca()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.d.bv(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.c(C.w,q)
if(z<=C.w[q]){q=P.a1("Overlong encoding of 0x"+C.d.bv(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.d.bv(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cR(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cc()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.E()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.d.bv(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.d.bv(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},nc:{"^":"i:55;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isf",[P.o],"$asf")
z=this.a
for(y=J.aC(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.ca()
if((w&127)!==w)return x-b}return z-b}},nb:{"^":"i:57;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cr(this.d,a,b)}}}],["","",,P,{"^":"",
bl:function(a,b,c){var z
H.L(a)
H.d(b,{func:1,ret:P.o,args:[P.j]})
z=H.k5(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
nP:function(a,b){var z=H.k4(a)
if(z!=null)return z
throw H.a(P.a1("Invalid double",a,null))},
iw:function(a){var z=J.N(a)
if(!!z.$isi)return z.j(a)
return"Instance of '"+H.bv(a)+"'"},
js:function(a,b,c,d){var z,y
H.x(b,d)
z=J.jc(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.n(z,y,b)
return H.v(z,"$isf",[d],"$asf")},
jt:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.ga5(a);x.J();)C.a.h(y,H.x(x.gV(x),c))
if(b)return y
return H.v(J.bX(y),"$isf",z,"$asf")},
cr:function(a,b,c){var z,y
z=P.o
H.v(a,"$isn",[z],"$asn")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbd",[z],"$asbd")
y=a.length
c=P.aZ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.E()
z=c<y}else z=!0
return H.f7(z?C.a.ce(a,b,c):a)}if(!!J.N(a).$isdE)return H.k7(a,b,P.aZ(b,c,a.length,null,null,null))
return P.kC(a,b,c)},
kC:function(a,b,c){var z,y,x,w
H.v(a,"$isn",[P.o],"$asn")
if(b<0)throw H.a(P.a8(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a8(c,b,J.as(a),null,null))
y=J.bS(a)
for(x=0;x<b;++x)if(!y.J())throw H.a(P.a8(b,0,x,null,null))
w=[]
if(z)for(;y.J();)w.push(y.gV(y))
else for(x=b;x<c;++x){if(!y.J())throw H.a(P.a8(c,b,x,null,null))
w.push(y.gV(y))}return H.f7(w)},
dH:function(a,b,c){return new H.jg(a,H.eO(a,!1,!0,!1))},
cu:function(){var z=H.jX()
if(z!=null)return P.l9(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iw(a)},
q:function(a){return new P.fV(a)},
ju:function(a,b,c,d){var z,y
H.d(b,{func:1,ret:d,args:[P.o]})
z=H.h([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.n(z,y,b.$1(y))
return z},
cd:function(a){H.oD(a)},
l9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.K(a,b+4)^58)*3|C.b.K(a,b)^100|C.b.K(a,b+1)^97|C.b.K(a,b+2)^116|C.b.K(a,b+3)^97)>>>0
if(y===0)return P.fI(b>0||c<c?C.b.w(a,b,c):a,5,null).geX()
else if(y===32)return P.fI(C.b.w(a,z,c),0,null).geX()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.o])
C.a.n(w,0,0)
x=b-1
C.a.n(w,1,x)
C.a.n(w,2,x)
C.a.n(w,7,x)
C.a.n(w,3,b)
C.a.n(w,4,b)
C.a.n(w,5,c)
C.a.n(w,6,c)
if(P.hn(a,b,c,0,w)>=14)C.a.n(w,7,c)
v=w[1]
if(typeof v!=="number")return v.av()
if(v>=b)if(P.hn(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.m()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.E()
if(typeof r!=="number")return H.k(r)
if(q<r)r=q
if(typeof s!=="number")return s.E()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.E()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.E()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aj(a,"..",s)))n=r>s+2&&C.b.aj(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aj(a,"file",b)){if(u<=b){if(!C.b.aj(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b8(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aj(a,"http",b)){if(x&&t+3===s&&C.b.aj(a,"80",t+1))if(b===0&&!0){a=C.b.b8(a,t,s,"")
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
else if(v===z&&C.b.aj(a,"https",b)){if(x&&t+4===s&&C.b.aj(a,"443",t+1))if(b===0&&!0){a=C.b.b8(a,t,s,"")
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
q-=b}return new P.mw(a,v,u,t,s,r,q,o)}return P.mU(a,b,c,v,u,t,s,r,q,o)},
fK:function(a,b){var z=P.j
return C.a.iH(H.h(a.split("&"),[z]),P.eT(z,z),new P.lc(b),[P.J,P.j,P.j])},
l7:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.l8(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bl(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.cc()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.c(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bl(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.cc()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.c(y,u)
y[u]=s
return y},
fJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.la(a)
y=new P.lb(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaO(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.l7(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.c(o,l)
o[l]=0
i=l+1
if(i>=n)return H.c(o,i)
o[i]=0
l+=2}else{i=C.d.aY(k,8)
if(l<0||l>=n)return H.c(o,l)
o[l]=i
i=l+1
if(i>=n)return H.c(o,i)
o[i]=k&255
l+=2}}return o},
nt:function(){var z,y,x,w,v
z=P.ju(22,new P.nv(),!0,P.W)
y=new P.nu(z)
x=new P.nw()
w=new P.nx()
v=H.e(y.$2(0,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isW")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isW")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isW"),"]",5)
v=H.e(y.$2(9,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isW")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isW"),"az",21)
v=H.e(y.$2(21,245),"$isW")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hn:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isf",[P.o],"$asf")
z=$.$get$ho()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.c(z,d)
x=z[d]
w=C.b.K(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.c(x,w)
v=x[w]
d=v&31
C.a.n(e,v>>>5,y)}return d},
M:{"^":"b;"},
"+bool":0,
aG:{"^":"b;a,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aG))return!1
return this.a===b.a&&this.b===b.b},
gY:function(a){var z=this.a
return(z^C.d.aY(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.ij(H.k3(this))
y=P.cg(H.k1(this))
x=P.cg(H.jY(this))
w=P.cg(H.jZ(this))
v=P.cg(H.k0(this))
u=P.cg(H.k2(this))
t=P.ik(H.k_(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
ij:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ik:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cg:function(a){if(a>=10)return""+a
return"0"+a}}},
C:{"^":"a0;"},
"+double":0,
bq:{"^":"b;a",
m:function(a,b){return new P.bq(C.d.m(this.a,b.gfK()))},
E:function(a,b){return C.d.E(this.a,H.e(b,"$isbq").a)},
av:function(a,b){return C.d.av(this.a,b.gfK())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bq))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.ir()
y=this.a
if(y<0)return"-"+new P.bq(0-y).j(0)
x=z.$1(C.d.aa(y,6e7)%60)
w=z.$1(C.d.aa(y,1e6)%60)
v=new P.iq().$1(y%1e6)
return""+C.d.aa(y,36e8)+":"+H.m(x)+":"+H.m(w)+"."+H.m(v)},
q:{
ez:function(a,b,c,d,e,f){return new P.bq(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
iq:{"^":"i:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ir:{"^":"i:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
ak:{"^":"b;"},
dF:{"^":"ak;",
j:function(a){return"Throw of null."}},
b6:{"^":"ak;a,b,c,d",
gco:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcn:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.m(z)
w=this.gco()+y+x
if(!this.a)return w
v=this.gcn()
u=P.cI(this.b)
return w+v+": "+H.m(u)},
q:{
ce:function(a){return new P.b6(!1,null,null,a)},
cC:function(a,b,c){return new P.b6(!0,a,b,c)},
ee:function(a){return new P.b6(!1,null,a,"Must not be null")}}},
cS:{"^":"b6;e,f,a,b,c,d",
gco:function(){return"RangeError"},
gcn:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.m(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.m(z)
else if(x>z)y=": Not in range "+H.m(z)+".."+H.m(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.m(z)}return y},
q:{
cT:function(a,b,c){return new P.cS(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.cS(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.k(a)
if(0<=a){if(typeof c!=="number")return H.k(c)
z=a>c}else z=!0
if(z)throw H.a(P.a8(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.k(c)
z=b>c}else z=!0
if(z)throw H.a(P.a8(b,a,c,"end",f))
return b}return c}}},
iI:{"^":"b6;e,k:f>,a,b,c,d",
gco:function(){return"RangeError"},
gcn:function(){if(J.d8(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.m(z)},
q:{
Y:function(a,b,c,d,e){var z=H.D(e!=null?e:J.as(b))
return new P.iI(b,z,!0,a,c,"Index out of range")}}},
l5:{"^":"ak;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
A:function(a){return new P.l5(a)}}},
l2:{"^":"ak;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ct:function(a){return new P.l2(a)}}},
dL:{"^":"ak;a",
j:function(a){return"Bad state: "+this.a},
q:{
dM:function(a){return new P.dL(a)}}},
ic:{"^":"ak;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.m(P.cI(z))+"."},
q:{
bo:function(a){return new P.ic(a)}}},
jT:{"^":"b;",
j:function(a){return"Out of Memory"},
$isak:1},
fd:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isak:1},
ii:{"^":"ak;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fV:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
iB:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.m(z):"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.m(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.K(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
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
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
q:{
a1:function(a,b,c){return new P.iB(a,b,c)}}},
o:{"^":"a0;"},
"+int":0,
n:{"^":"b;$ti",
gk:function(a){var z,y
z=this.ga5(this)
for(y=0;z.J();)++y
return y},
M:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ee("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.ga5(this),y=0;z.J();){x=z.gV(z)
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
j:function(a){return P.j9(this,"(",")")}},
du:{"^":"b;$ti"},
f:{"^":"b;$ti",$isn:1},
"+List":0,
J:{"^":"b;$ti"},
z:{"^":"b;",
gY:function(a){return P.b.prototype.gY.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a0:{"^":"b;"},
"+num":0,
b:{"^":";",
C:function(a,b){return this===b},
gY:function(a){return H.c3(this)},
j:function(a){return"Instance of '"+H.bv(this)+"'"},
toString:function(){return this.j(this)}},
au:{"^":"b;"},
j:{"^":"b;",$isf4:1},
"+String":0,
aH:{"^":"b;aT:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isqj:1,
q:{
fg:function(a,b,c){var z=J.bS(b)
if(!z.J())return a
if(c.length===0){do a+=H.m(z.gV(z))
while(z.J())}else{a+=H.m(z.gV(z))
for(;z.J();)a=a+c+H.m(z.gV(z))}return a}}},
lc:{"^":"i:47;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isJ",[z,z],"$asJ")
H.L(b)
y=J.aC(b).R(b,"=")
if(y===-1){if(b!=="")J.d9(a,P.e_(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.aw(b,y+1)
z=this.a
J.d9(a,P.e_(x,0,x.length,z,!0),P.e_(w,0,w.length,z,!0))}return a}},
l8:{"^":"i:33;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
la:{"^":"i:44;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
lb:{"^":"i:31;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bl(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.E()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
d0:{"^":"b;cd:a<,b,c,d,eM:e>,f,r,0x,0y,0z,0Q,0ch",
geY:function(){return this.b},
gd_:function(a){var z=this.c
if(z==null)return""
if(C.b.ai(z,"["))return C.b.w(z,1,z.length-1)
return z},
gc5:function(a){var z=this.d
if(z==null)return P.hc(this.a)
return z},
gd8:function(a){var z=this.f
return z==null?"":z},
gey:function(){var z=this.r
return z==null?"":z},
da:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.j,null],"$asJ")
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
if(x&&!C.b.ai(d,"/"))d="/"+d
g=P.dZ(g,0,0,h)
return new P.d0(i,j,c,f,d,g,this.r)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gb6:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.fH(P.fK(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gez:function(){return this.c!=null},
geC:function(){return this.f!=null},
geA:function(){return this.r!=null},
j:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.m(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.m(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.m(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
C:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.N(b)
if(!!z.$isdT){y=this.a
x=b.gcd()
if(y==null?x==null:y===x)if(this.c!=null===b.gez()){y=this.b
x=b.geY()
if(y==null?x==null:y===x){y=this.gd_(this)
x=z.gd_(b)
if(y==null?x==null:y===x){y=this.gc5(this)
x=z.gc5(b)
if(y==null?x==null:y===x)if(this.e===z.geM(b)){y=this.f
x=y==null
if(!x===b.geC()){if(x)y=""
if(y===z.gd8(b)){z=this.r
y=z==null
if(!y===b.geA()){if(y)z=""
z=z===b.gey()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.b.gY(this.j(0))
this.z=z}return z},
$isdT:1,
q:{
d1:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isf",[P.o],"$asf")
if(c===C.k){z=$.$get$hh().b
if(typeof b!=="string")H.p(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.aD(c,"cf",0))
y=c.giB().cQ(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cR(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mU:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.n4(a,b,d)
else{if(d===b)P.c7(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.n5(a,z,e-1):""
x=P.mZ(a,e,f,!1)
if(typeof f!=="number")return f.m()
w=f+1
if(typeof g!=="number")return H.k(g)
v=w<g?P.n1(P.bl(C.b.w(a,w,g),new P.mV(a,f),null),j):null}else{y=""
x=null
v=null}u=P.n_(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.E()
t=h<i?P.dZ(a,h+1,i,null):null
return new P.d0(j,y,x,v,u,t,i<c?P.mY(a,i+1,c):null)},
hc:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c7:function(a,b,c){throw H.a(P.a1(c,a,b))},
n1:function(a,b){if(a!=null&&a===P.hc(b))return
return a},
mZ:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.F()
z=c-1
if(C.b.a_(a,z)!==93)P.c7(a,b,"Missing end `]` to match `[` in host")
P.fJ(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.k(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fJ(a,b,c)
return"["+a+"]"}return P.n7(a,b,c)},
n7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.k(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.hj(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aH("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.c(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aH("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.c(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c7(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aH("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hd(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
n4:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hf(C.b.K(a,b)))P.c7(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.K(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c7(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.mW(y?a.toLowerCase():a)},
mW:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n5:function(a,b,c){return P.c8(a,b,c,C.S)},
n_:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c8(a,b,c,C.y):C.q.kv(d,new P.n0(),P.j).I(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ai(w,"/"))w="/"+w
return P.n6(w,e,f)},
n6:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ai(a,"/"))return P.n8(a,!z||c)
return P.n9(a)},
dZ:function(a,b,c,d){var z,y
z={}
H.v(d,"$isJ",[P.j,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.ce("Both query and queryParameters specified"))
return P.c8(a,b,c,C.n)}if(d==null)return
y=new P.aH("")
z.a=""
d.A(0,new P.n2(new P.n3(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mY:function(a,b,c){return P.c8(a,b,c,C.n)},
hj:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.d5(y)
v=H.d5(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aY(u,4)
if(z>=8)return H.c(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cR(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
hd:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.o])
C.a.n(y,0,37)
C.a.n(y,1,C.b.K("0123456789ABCDEF",a>>>4))
C.a.n(y,2,C.b.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.hH(a,6*w)&63|x
C.a.n(y,v,37)
C.a.n(y,v+1,C.b.K("0123456789ABCDEF",u>>>4))
C.a.n(y,v+2,C.b.K("0123456789ABCDEF",u&15))
v+=3}}return P.cr(y,0,null)},
c8:function(a,b,c,d){var z=P.hi(a,b,c,H.v(d,"$isf",[P.o],"$asf"),!1)
return z==null?C.b.w(a,b,c):z},
hi:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isf",[P.o],"$asf")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.E()
if(typeof c!=="number")return H.k(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.c(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hj(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.c(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c7(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hd(v)}}if(w==null)w=new P.aH("")
w.a+=C.b.w(a,x,y)
w.a+=H.m(t)
if(typeof s!=="number")return H.k(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.E()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hg:function(a){if(C.b.ai(a,"."))return!0
return C.b.R(a,"/.")!==-1},
n9:function(a){var z,y,x,w,v,u,t
if(!P.hg(a))return a
z=H.h([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.c(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.I(z,"/")},
n8:function(a,b){var z,y,x,w,v,u
if(!P.hg(a))return!b?P.he(a):a
z=H.h([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaO(z)!==".."){if(0>=z.length)return H.c(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.c(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaO(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.c(z,0)
C.a.n(z,0,P.he(z[0]))}return C.a.I(z,"/")},
he:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hf(J.hO(a,0)))for(y=1;y<z;++y){x=C.b.K(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.aw(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mX:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.K(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ce("Invalid URL encoding"))}}return z},
e_:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.cx(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.K(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.ai(y.w(a,b,c))}else{u=H.h([],[P.o])
for(x=b;x<c;++x){w=y.K(a,x)
if(w>127)throw H.a(P.ce("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ce("Truncated URI"))
C.a.h(u,P.mX(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isf",[P.o],"$asf")
return new P.li(!1).cQ(u)},
hf:function(a){var z=a|32
return 97<=z&&z<=122}}},
mV:{"^":"i:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.m()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
n0:{"^":"i:42;",
$1:function(a){return P.d1(C.U,a,C.k,!1)}},
n3:{"^":"i:21;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.m(P.d1(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.m(P.d1(C.p,b,C.k,!0))}}},
n2:{"^":"i:45;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.bS(H.hG(b,"$isn")),y=this.a;z.J();)y.$2(a,H.L(z.gV(z)))}},
l6:{"^":"b;a,b,c",
geX:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
z=z[0]+1
x=C.b.ar(y,"?",z)
w=y.length
if(x>=0){v=P.c8(y,x+1,w,C.n)
w=x}else v=null
z=new P.lN(this,"data",null,null,null,P.c8(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fI:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.K(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.K(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaO(z)
if(v!==44||x!==t+7||!C.b.aj(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.iX(0,a,s,y)
else{r=P.hi(a,s,y,C.n,!0)
if(r!=null)a=C.b.b8(a,s,y,r)}return new P.l6(a,z,c)}}},
nv:{"^":"i:46;",
$1:function(a){return new Uint8Array(96)}},
nu:{"^":"i:54;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.c(z,a)
z=z[a]
J.hS(z,0,96,b)
return z}},
nw:{"^":"i;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.K(b,y)^96
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
nx:{"^":"i;",
$3:function(a,b,c){var z,y,x
for(z=C.b.K(b,0),y=C.b.K(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
mw:{"^":"b;a,b,c,d,e,f,r,x,0y",
gez:function(){return this.c>0},
geB:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.m()
y=this.e
if(typeof y!=="number")return H.k(y)
y=z+1<y
z=y}else z=!1
return z},
geC:function(){var z=this.f
if(typeof z!=="number")return z.E()
return z<this.r},
geA:function(){return this.r<this.a.length},
gdJ:function(){return this.b===4&&C.b.ai(this.a,"http")},
gdK:function(){return this.b===5&&C.b.ai(this.a,"https")},
gcd:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdJ()){this.x="http"
z="http"}else if(this.gdK()){this.x="https"
z="https"}else if(z===4&&C.b.ai(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ai(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
geY:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gd_:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gc5:function(a){var z
if(this.geB()){z=this.d
if(typeof z!=="number")return z.m()
return P.bl(C.b.w(this.a,z+1,this.e),null,null)}if(this.gdJ())return 80
if(this.gdK())return 443
return 0},
geM:function(a){return C.b.w(this.a,this.e,this.f)},
gd8:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.E()
return z<y?C.b.w(this.a,z+1,y):""},
gey:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aw(y,z+1):""},
gb6:function(){var z=this.f
if(typeof z!=="number")return z.E()
if(z>=this.r)return C.V
z=P.j
return new P.fH(P.fK(this.gd8(this),C.k),[z,z])},
da:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.j,null],"$asJ")
i=this.gcd()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.geB()?this.gc5(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ai(d,"/"))d="/"+d
g=P.dZ(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aw(y,x+1)
return new P.d0(i,j,c,f,d,g,b)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.b.gY(this.a)
this.y=z}return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.N(b)
if(!!z.$isdT)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdT:1},
lN:{"^":"d0;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dj:function(a,b){var z=document.createElement("canvas")
return z},
it:function(a){H.e(a,"$isa7")
return"wheel"},
eE:function(a,b,c){return W.iG(a,null,null,b,null,null,null,c).eU(new W.iF(),P.j)},
iG:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.bW
y=new P.ay(0,$.Q,[z])
x=new P.lD(y,[z])
w=new XMLHttpRequest()
C.H.j3(w,"GET",a,!0)
z=W.cp
v={func:1,ret:-1,args:[z]}
W.a2(w,"load",H.d(new W.iH(w,x),v),!1,z)
W.a2(w,"error",H.d(x.ge5(),v),!1,z)
w.send()
return y},
eH:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseG")
try{J.hV(z,a)}catch(x){H.ae(x)}return z},
d_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fY:function(a,b,c,d){var z,y
z=W.d_(W.d_(W.d_(W.d_(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ht:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.Q
if(z===C.j)return a
return z.e2(a,b)},
ao:{"^":"a6;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
oK:{"^":"dJ;0t:x=,0v:y=","%":"Accelerometer|LinearAccelerationSensor"},
oL:{"^":"t;0k:length=","%":"AccessibleNodeList"},
oM:{"^":"ao;0a7:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oN:{"^":"ao;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
df:{"^":"t;",$isdf:1,"%":";Blob"},
oU:{"^":"ao;0a7:type}","%":"HTMLButtonElement"},
di:{"^":"ao;",
cb:function(a,b,c){if(c!=null)return a.getContext(b,P.nJ(c,null))
return a.getContext(b)},
f1:function(a,b){return this.cb(a,b,null)},
$isdi:1,
"%":"HTMLCanvasElement"},
eo:{"^":"t;",$iseo:1,"%":"CanvasRenderingContext2D"},
oW:{"^":"O;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oY:{"^":"cG;0k:length=","%":"CSSPerspective"},
oZ:{"^":"dq;0t:x=,0v:y=","%":"CSSPositionValue"},
p_:{"^":"cG;0t:x=,0v:y=","%":"CSSRotation"},
bp:{"^":"t;",$isbp:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
p0:{"^":"cG;0t:x=,0v:y=","%":"CSSScale"},
p1:{"^":"lM;0k:length=",
f2:function(a,b){var z=a.getPropertyValue(this.fA(a,b))
return z==null?"":z},
fA:function(a,b){var z,y
z=$.$get$es()
y=z[b]
if(typeof y==="string")return y
y=this.hI(a,b)
z[b]=y
return y},
hI:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.il()+b
if(z in a)return z
return b},
gcM:function(a){return a.bottom},
gaA:function(a){return a.height},
gb5:function(a){return a.left},
gbs:function(a){return a.right},
gbx:function(a){return a.top},
gaC:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ih:{"^":"b;",
gb5:function(a){return this.f2(a,"left")}},
dq:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cG:{"^":"t;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
p2:{"^":"dq;0k:length=","%":"CSSTransformValue"},
p3:{"^":"cG;0t:x=,0v:y=","%":"CSSTranslation"},
p4:{"^":"dq;0k:length=","%":"CSSUnparsedValue"},
p5:{"^":"t;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
p6:{"^":"t;0t:x=,0v:y=","%":"DeviceAcceleration"},
p7:{"^":"t;",
j:function(a){return String(a)},
"%":"DOMException"},
p8:{"^":"io;",
gt:function(a){return a.x},
gv:function(a){return a.y},
"%":"DOMPoint"},
io:{"^":"t;",
gt:function(a){return a.x},
gv:function(a){return a.y},
"%":";DOMPointReadOnly"},
p9:{"^":"lP;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.v(c,"$isap",[P.a0],"$asap")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[[P.ap,P.a0]]},
$asy:function(){return[[P.ap,P.a0]]},
$isn:1,
$asn:function(){return[[P.ap,P.a0]]},
$isf:1,
$asf:function(){return[[P.ap,P.a0]]},
$asB:function(){return[[P.ap,P.a0]]},
"%":"ClientRectList|DOMRectList"},
ip:{"^":"t;",
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaC(a))+" x "+H.m(this.gaA(a))},
C:function(a,b){var z
if(b==null)return!1
z=H.b4(b,"$isap",[P.a0],"$asap")
if(!z)return!1
z=J.b5(b)
return a.left===z.gb5(b)&&a.top===z.gbx(b)&&this.gaC(a)===z.gaC(b)&&this.gaA(a)===z.gaA(b)},
gY:function(a){return W.fY(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaC(a)&0x1FFFFFFF,this.gaA(a)&0x1FFFFFFF)},
gcM:function(a){return a.bottom},
gaA:function(a){return a.height},
gb5:function(a){return a.left},
gbs:function(a){return a.right},
gbx:function(a){return a.top},
gaC:function(a){return a.width},
gt:function(a){return a.x},
gv:function(a){return a.y},
$isap:1,
$asap:function(){return[P.a0]},
"%":";DOMRectReadOnly"},
pa:{"^":"lR;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[P.j]},
$asy:function(){return[P.j]},
$isn:1,
$asn:function(){return[P.j]},
$isf:1,
$asf:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"DOMStringList"},
pb:{"^":"t;0k:length=","%":"DOMTokenList"},
lL:{"^":"cN;a,b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.e(z[b],"$isa6")},
n:function(a,b,c){var z
H.D(b)
H.e(c,"$isa6")
z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga5:function(a){var z=this.ju(this)
return new J.az(z,z.length,0,[H.u(z,0)])},
aN:function(a,b,c,d){throw H.a(P.ct(null))},
$asy:function(){return[W.a6]},
$asn:function(){return[W.a6]},
$asf:function(){return[W.a6]}},
a6:{"^":"O;",
gcP:function(a){return new W.lL(a,a.children)},
gbP:function(a){return P.ka(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a0)},
j:function(a){return a.localName},
$isa6:1,
"%":";Element"},
pc:{"^":"ao;0a7:type}","%":"HTMLEmbedElement"},
al:{"^":"t;",$isal:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"t;",
e0:["f7",function(a,b,c,d){H.d(c,{func:1,args:[W.al]})
if(c!=null)this.fq(a,b,c,!1)}],
fq:function(a,b,c,d){return a.addEventListener(b,H.bO(H.d(c,{func:1,args:[W.al]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h4|h5|h8|h9"},
bc:{"^":"df;",$isbc:1,"%":"File"},
eB:{"^":"lW;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isn:1,
$asn:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$iseB:1,
$asB:function(){return[W.bc]},
"%":"FileList"},
pv:{"^":"a7;0k:length=","%":"FileWriter"},
py:{"^":"ao;0k:length=","%":"HTMLFormElement"},
br:{"^":"t;",$isbr:1,"%":"Gamepad"},
pz:{"^":"dJ;0t:x=,0v:y=","%":"Gyroscope"},
pA:{"^":"t;0k:length=","%":"History"},
pB:{"^":"ma;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isO")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.O]},
$asy:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$asB:function(){return[W.O]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bW:{"^":"iE;",
kD:function(a,b,c,d,e,f){return a.open(b,c)},
j3:function(a,b,c,d){return a.open(b,c,d)},
$isbW:1,
"%":"XMLHttpRequest"},
iF:{"^":"i:61;",
$1:function(a){return H.e(a,"$isbW").responseText}},
iH:{"^":"i:29;a,b",
$1:function(a){var z,y,x,w,v
H.e(a,"$iscp")
z=this.a
y=z.status
if(typeof y!=="number")return y.av()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.aI(0,z)
else v.is(a)}},
iE:{"^":"a7;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
ci:{"^":"t;0e7:data=",$isci:1,"%":"ImageData"},
eF:{"^":"ao;",$iseF:1,"%":"HTMLImageElement"},
eG:{"^":"ao;0a7:type}",$iseG:1,$isep:1,"%":"HTMLInputElement"},
ep:{"^":"b;",$isa6:1,$isa7:1,$isO:1},
bZ:{"^":"dQ;",$isbZ:1,"%":"KeyboardEvent"},
pG:{"^":"ao;0a7:type}","%":"HTMLLinkElement"},
pH:{"^":"t;",
j:function(a){return String(a)},
"%":"Location"},
pI:{"^":"dJ;0t:x=,0v:y=","%":"Magnetometer"},
pK:{"^":"t;0k:length=","%":"MediaList"},
pL:{"^":"a7;0cT:enabled}","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
pM:{"^":"a7;",
e0:function(a,b,c,d){H.d(c,{func:1,args:[W.al]})
if(b==="message")a.start()
this.f7(a,b,c,!1)},
"%":"MessagePort"},
pN:{"^":"mg;",
i:function(a,b){return P.ba(a.get(H.L(b)))},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ba(y.value[1]))}},
gaB:function(a){var z=H.h([],[P.j])
this.A(a,new W.jI(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaA:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"MIDIInputMap"},
jI:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pO:{"^":"mh;",
i:function(a,b){return P.ba(a.get(H.L(b)))},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ba(y.value[1]))}},
gaB:function(a){var z=H.h([],[P.j])
this.A(a,new W.jJ(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaA:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
jJ:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bt:{"^":"t;",$isbt:1,"%":"MimeType"},
pP:{"^":"mj;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbt")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bt]},
$asy:function(){return[W.bt]},
$isn:1,
$asn:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asB:function(){return[W.bt]},
"%":"MimeTypeArray"},
aY:{"^":"dQ;",$isaY:1,"%":"PointerEvent;DragEvent|MouseEvent"},
lK:{"^":"cN;a",
n:function(a,b,c){var z,y
H.D(b)
H.e(c,"$isO")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
ga5:function(a){var z=this.a.childNodes
return new W.eC(z,z.length,-1,[H.bb(C.X,z,"B",0)])},
aN:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asy:function(){return[W.O]},
$asn:function(){return[W.O]},
$asf:function(){return[W.O]}},
O:{"^":"a7;",
jj:function(a,b){var z,y
try{z=a.parentNode
J.hP(z,b,a)}catch(y){H.ae(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.f8(a):z},
hx:function(a,b,c){return a.replaceChild(b,c)},
$isO:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
jP:{"^":"ml;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isO")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.O]},
$asy:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$asB:function(){return[W.O]},
"%":"NodeList|RadioNodeList"},
pX:{"^":"ao;0a7:type}","%":"HTMLOListElement"},
pY:{"^":"ao;0a7:type}","%":"HTMLObjectElement"},
bu:{"^":"t;0k:length=",$isbu:1,"%":"Plugin"},
q1:{"^":"mp;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbu")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bu]},
$asy:function(){return[W.bu]},
$isn:1,
$asn:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asB:function(){return[W.bu]},
"%":"PluginArray"},
cp:{"^":"al;",$iscp:1,"%":"ProgressEvent|ResourceProgressEvent"},
q6:{"^":"t;0a7:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
q7:{"^":"mv;",
i:function(a,b){return P.ba(a.get(H.L(b)))},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ba(y.value[1]))}},
gaB:function(a){var z=H.h([],[P.j])
this.A(a,new W.kj(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaA:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"RTCStatsReport"},
kj:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
q9:{"^":"ao;0a7:type}","%":"HTMLScriptElement"},
qb:{"^":"ao;0k:length=","%":"HTMLSelectElement"},
dJ:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bw:{"^":"a7;",$isbw:1,"%":"SourceBuffer"},
qc:{"^":"h5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbw")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bw]},
$asy:function(){return[W.bw]},
$isn:1,
$asn:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asB:function(){return[W.bw]},
"%":"SourceBufferList"},
qd:{"^":"ao;0a7:type}","%":"HTMLSourceElement"},
bx:{"^":"t;",$isbx:1,"%":"SpeechGrammar"},
qe:{"^":"my;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbx")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bx]},
$asy:function(){return[W.bx]},
$isn:1,
$asn:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asB:function(){return[W.bx]},
"%":"SpeechGrammarList"},
by:{"^":"t;0k:length=",$isby:1,"%":"SpeechRecognitionResult"},
qg:{"^":"mB;",
i:function(a,b){return a.getItem(H.L(b))},
n:function(a,b,c){a.setItem(b,H.L(c))},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaB:function(a){var z=H.h([],[P.j])
this.A(a,new W.ky(z))
return z},
gk:function(a){return a.length},
$asaA:function(){return[P.j,P.j]},
$isJ:1,
$asJ:function(){return[P.j,P.j]},
"%":"Storage"},
ky:{"^":"i:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
qk:{"^":"ao;0a7:type}","%":"HTMLStyleElement"},
bz:{"^":"t;",$isbz:1,"%":"CSSStyleSheet|StyleSheet"},
dN:{"^":"ao;",$isdN:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bA:{"^":"a7;",$isbA:1,"%":"TextTrack"},
bB:{"^":"a7;",$isbB:1,"%":"TextTrackCue|VTTCue"},
qo:{"^":"mJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbB")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bB]},
$asy:function(){return[W.bB]},
$isn:1,
$asn:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$asB:function(){return[W.bB]},
"%":"TextTrackCueList"},
qp:{"^":"h9;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbA")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bA]},
$asy:function(){return[W.bA]},
$isn:1,
$asn:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asB:function(){return[W.bA]},
"%":"TextTrackList"},
qq:{"^":"t;0k:length=","%":"TimeRanges"},
bD:{"^":"t;",$isbD:1,"%":"Touch"},
bE:{"^":"dQ;",$isbE:1,"%":"TouchEvent"},
qr:{"^":"mP;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbD")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bD]},
$asy:function(){return[W.bD]},
$isn:1,
$asn:function(){return[W.bD]},
$isf:1,
$asf:function(){return[W.bD]},
$asB:function(){return[W.bD]},
"%":"TouchList"},
qs:{"^":"t;0k:length=","%":"TrackDefaultList"},
dQ:{"^":"al;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
qu:{"^":"t;",
j:function(a){return String(a)},
"%":"URL"},
qw:{"^":"t;0t:x=","%":"VRStageBoundsPoint"},
qx:{"^":"a7;0k:length=","%":"VideoTrackList"},
c5:{"^":"aY;",
giy:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
gix:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isc5:1,
"%":"WheelEvent"},
lz:{"^":"a7;",
hy:function(a,b){return a.requestAnimationFrame(H.bO(H.d(b,{func:1,ret:-1,args:[P.a0]}),1))},
fL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
qC:{"^":"ng;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbp")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bp]},
$asy:function(){return[W.bp]},
$isn:1,
$asn:function(){return[W.bp]},
$isf:1,
$asf:function(){return[W.bp]},
$asB:function(){return[W.bp]},
"%":"CSSRuleList"},
qD:{"^":"ip;",
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
C:function(a,b){var z
if(b==null)return!1
z=H.b4(b,"$isap",[P.a0],"$asap")
if(!z)return!1
z=J.b5(b)
return a.left===z.gb5(b)&&a.top===z.gbx(b)&&a.width===z.gaC(b)&&a.height===z.gaA(b)},
gY:function(a){return W.fY(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaA:function(a){return a.height},
gaC:function(a){return a.width},
gt:function(a){return a.x},
gv:function(a){return a.y},
"%":"ClientRect|DOMRect"},
qF:{"^":"ni;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbr")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.br]},
$asy:function(){return[W.br]},
$isn:1,
$asn:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asB:function(){return[W.br]},
"%":"GamepadList"},
qG:{"^":"nk;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isO")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.O]},
$asy:function(){return[W.O]},
$isn:1,
$asn:function(){return[W.O]},
$isf:1,
$asf:function(){return[W.O]},
$asB:function(){return[W.O]},
"%":"MozNamedAttrMap|NamedNodeMap"},
qH:{"^":"nm;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isby")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.by]},
$asy:function(){return[W.by]},
$isn:1,
$asn:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asB:function(){return[W.by]},
"%":"SpeechRecognitionResultList"},
qI:{"^":"no;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.e(c,"$isbz")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bz]},
$asy:function(){return[W.bz]},
$isn:1,
$asn:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$asB:function(){return[W.bz]},
"%":"StyleSheetList"},
lS:{"^":"cq;a,b,c,$ti",
iT:function(a,b,c,d){var z=H.u(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
qE:{"^":"lS;a,b,c,$ti"},
lT:{"^":"ff;a,b,c,d,e,$ti",
hN:function(){var z=this.d
if(z!=null&&this.a<=0)J.hQ(this.b,this.c,z,!1)},
q:{
a2:function(a,b,c,d,e){var z=c==null?null:W.ht(new W.lU(c),W.al)
z=new W.lT(0,a,b,z,!1,[e])
z.hN()
return z}}},
lU:{"^":"i:8;a",
$1:function(a){return this.a.$1(H.e(a,"$isal"))}},
B:{"^":"b;$ti",
ga5:function(a){return new W.eC(a,this.gk(a),-1,[H.bb(this,a,"B",0)])},
aN:function(a,b,c,d){H.x(d,H.bb(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
eC:{"^":"b;a,b,c,0d,$ti",
J:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.X(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gV:function(a){return this.d}},
lM:{"^":"t+ih;"},
lO:{"^":"t+y;"},
lP:{"^":"lO+B;"},
lQ:{"^":"t+y;"},
lR:{"^":"lQ+B;"},
lV:{"^":"t+y;"},
lW:{"^":"lV+B;"},
m9:{"^":"t+y;"},
ma:{"^":"m9+B;"},
mg:{"^":"t+aA;"},
mh:{"^":"t+aA;"},
mi:{"^":"t+y;"},
mj:{"^":"mi+B;"},
mk:{"^":"t+y;"},
ml:{"^":"mk+B;"},
mo:{"^":"t+y;"},
mp:{"^":"mo+B;"},
mv:{"^":"t+aA;"},
h4:{"^":"a7+y;"},
h5:{"^":"h4+B;"},
mx:{"^":"t+y;"},
my:{"^":"mx+B;"},
mB:{"^":"t+aA;"},
mI:{"^":"t+y;"},
mJ:{"^":"mI+B;"},
h8:{"^":"a7+y;"},
h9:{"^":"h8+B;"},
mO:{"^":"t+y;"},
mP:{"^":"mO+B;"},
nf:{"^":"t+y;"},
ng:{"^":"nf+B;"},
nh:{"^":"t+y;"},
ni:{"^":"nh+B;"},
nj:{"^":"t+y;"},
nk:{"^":"nj+B;"},
nl:{"^":"t+y;"},
nm:{"^":"nl+B;"},
nn:{"^":"t+y;"},
no:{"^":"nn+B;"}}],["","",,P,{"^":"",
nM:function(a){var z,y
z=J.N(a)
if(!!z.$isci){y=z.ge7(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hb(a.data,a.height,a.width)},
nL:function(a){if(a instanceof P.hb)return{data:a.a,height:a.b,width:a.c}
return a},
ba:function(a){var z,y,x,w,v
if(a==null)return
z=P.eT(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.L(y[w])
z.n(0,v,a[v])}return z},
nJ:function(a,b){var z={}
a.A(0,new P.nK(z))
return z},
ey:function(){var z=$.ex
if(z==null){z=J.da(window.navigator.userAgent,"Opera",0)
$.ex=z}return z},
il:function(){var z,y
z=$.eu
if(z!=null)return z
y=$.ev
if(y==null){y=J.da(window.navigator.userAgent,"Firefox",0)
$.ev=y}if(y)z="-moz-"
else{y=$.ew
if(y==null){y=!P.ey()&&J.da(window.navigator.userAgent,"Trident/",0)
$.ew=y}if(y)z="-ms-"
else z=P.ey()?"-o-":"-webkit-"}$.eu=z
return z},
mF:{"^":"b;",
ev:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
c9:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isaG)return new Date(a.a)
if(!!y.$iskd)throw H.a(P.ct("structured clone of RegExp"))
if(!!y.$isbc)return a
if(!!y.$isdf)return a
if(!!y.$iseB)return a
if(!!y.$isci)return a
if(!!y.$isf2||!!y.$isdD)return a
if(!!y.$isJ){x=this.ev(a)
w=this.b
if(x>=w.length)return H.c(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.n(w,x,v)
y.A(a,new P.mG(z,this))
return z.a}if(!!y.$isf){x=this.ev(a)
z=this.b
if(x>=z.length)return H.c(z,x)
v=z[x]
if(v!=null)return v
return this.iv(a,x)}throw H.a(P.ct("structured clone of other type"))},
iv:function(a,b){var z,y,x,w
z=J.aC(a)
y=z.gk(a)
x=new Array(y)
C.a.n(this.b,b,x)
if(typeof y!=="number")return H.k(y)
w=0
for(;w<y;++w)C.a.n(x,w,this.c9(z.i(a,w)))
return x}},
mG:{"^":"i:10;a,b",
$2:function(a,b){this.a.a[a]=this.b.c9(b)}},
hb:{"^":"b;e7:a>,b,c",$isci:1},
nK:{"^":"i:10;a",
$2:function(a,b){this.a[a]=b}},
h7:{"^":"mF;a,b"},
iy:{"^":"cN;a,b",
gbE:function(){var z,y,x
z=this.b
y=H.aD(z,"y",0)
x=W.a6
return new H.jz(new H.lx(z,H.d(new P.iz(),{func:1,ret:P.M,args:[y]}),[y]),H.d(new P.iA(),{func:1,ret:x,args:[y]}),[y,x])},
n:function(a,b,c){var z
H.D(b)
H.e(c,"$isa6")
z=this.gbE()
J.hT(z.b.$1(J.db(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aN:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gk:function(a){return J.as(this.gbE().a)},
i:function(a,b){var z=this.gbE()
return z.b.$1(J.db(z.a,b))},
ga5:function(a){var z=P.jt(this.gbE(),!1,W.a6)
return new J.az(z,z.length,0,[H.u(z,0)])},
$asy:function(){return[W.a6]},
$asn:function(){return[W.a6]},
$asf:function(){return[W.a6]}},
iz:{"^":"i:32;",
$1:function(a){return!!J.N(H.e(a,"$isO")).$isa6}},
iA:{"^":"i:28;",
$1:function(a){return H.l(H.e(a,"$isO"),"$isa6")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bg:{"^":"b;t:a>,v:b>,$ti",
j:function(a){return"Point("+H.m(this.a)+", "+H.m(this.b)+")"},
C:function(a,b){var z,y,x
if(b==null)return!1
z=H.b4(b,"$isbg",[P.a0],null)
if(!z)return!1
z=this.a
y=J.b5(b)
x=y.gt(b)
if(z==null?x==null:z===x){z=this.b
y=y.gv(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gY:function(a){var z,y
z=J.bn(this.a)
y=J.bn(this.b)
return P.fX(P.c6(P.c6(0,z),y))},
m:function(a,b){var z,y,x,w
z=this.$ti
H.v(b,"$isbg",z,"$asbg")
y=this.a
if(typeof y!=="number")return y.m()
x=H.u(this,0)
y=H.x(C.i.m(y,b.a),x)
w=this.b
if(typeof w!=="number")return w.m()
return new P.bg(y,H.x(C.i.m(w,b.b),x),z)}},
mq:{"^":"b;$ti",
gbs:function(a){var z=this.a
if(typeof z!=="number")return z.m()
return H.x(z+this.c,H.u(this,0))},
gcM:function(a){var z=this.b
if(typeof z!=="number")return z.m()
return H.x(z+this.d,H.u(this,0))},
j:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
C:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b4(b,"$isap",[P.a0],"$asap")
if(!z)return!1
z=this.a
y=J.b5(b)
x=y.gb5(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbx(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.m()
w=H.u(this,0)
if(H.x(z+this.c,w)===y.gbs(b)){if(typeof x!=="number")return x.m()
z=H.x(x+this.d,w)===y.gcM(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.bn(z)
x=this.b
w=J.bn(x)
if(typeof z!=="number")return z.m()
v=H.u(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.m()
v=H.x(x+this.d,v)
return P.fX(P.c6(P.c6(P.c6(P.c6(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
e6:function(a,b){var z,y
H.v(b,"$isbg",[P.a0],"$asbg")
z=b.a
y=this.a
if(typeof z!=="number")return z.av()
if(typeof y!=="number")return H.k(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.av()
if(typeof y!=="number")return H.k(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ap:{"^":"mq;b5:a>,bx:b>,aC:c>,aA:d>,$ti",q:{
ka:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.E()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.E()
if(d<0)y=-d*0
else y=d
return new P.ap(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",pd:{"^":"Z;0t:x=,0v:y=","%":"SVGFEBlendElement"},pe:{"^":"Z;0t:x=,0v:y=","%":"SVGFEColorMatrixElement"},pf:{"^":"Z;0t:x=,0v:y=","%":"SVGFEComponentTransferElement"},pg:{"^":"Z;0t:x=,0v:y=","%":"SVGFECompositeElement"},ph:{"^":"Z;0t:x=,0v:y=","%":"SVGFEConvolveMatrixElement"},pi:{"^":"Z;0t:x=,0v:y=","%":"SVGFEDiffuseLightingElement"},pj:{"^":"Z;0t:x=,0v:y=","%":"SVGFEDisplacementMapElement"},pk:{"^":"Z;0t:x=,0v:y=","%":"SVGFEFloodElement"},pl:{"^":"Z;0t:x=,0v:y=","%":"SVGFEGaussianBlurElement"},pm:{"^":"Z;0t:x=,0v:y=","%":"SVGFEImageElement"},pn:{"^":"Z;0t:x=,0v:y=","%":"SVGFEMergeElement"},po:{"^":"Z;0t:x=,0v:y=","%":"SVGFEMorphologyElement"},pp:{"^":"Z;0t:x=,0v:y=","%":"SVGFEOffsetElement"},pq:{"^":"Z;0t:x=,0v:y=","%":"SVGFEPointLightElement"},pr:{"^":"Z;0t:x=,0v:y=","%":"SVGFESpecularLightingElement"},ps:{"^":"Z;0t:x=,0v:y=","%":"SVGFESpotLightElement"},pt:{"^":"Z;0t:x=,0v:y=","%":"SVGFETileElement"},pu:{"^":"Z;0t:x=,0v:y=","%":"SVGFETurbulenceElement"},pw:{"^":"Z;0t:x=,0v:y=","%":"SVGFilterElement"},px:{"^":"bV;0t:x=,0v:y=","%":"SVGForeignObjectElement"},iD:{"^":"bV;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bV:{"^":"Z;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},pC:{"^":"bV;0t:x=,0v:y=","%":"SVGImageElement"},c_:{"^":"t;",$isc_:1,"%":"SVGLength"},pF:{"^":"mc;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.e(c,"$isc_")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$asy:function(){return[P.c_]},
$isn:1,
$asn:function(){return[P.c_]},
$isf:1,
$asf:function(){return[P.c_]},
$asB:function(){return[P.c_]},
"%":"SVGLengthList"},pJ:{"^":"Z;0t:x=,0v:y=","%":"SVGMaskElement"},c2:{"^":"t;",$isc2:1,"%":"SVGNumber"},pW:{"^":"mn;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.e(c,"$isc2")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$asy:function(){return[P.c2]},
$isn:1,
$asn:function(){return[P.c2]},
$isf:1,
$asf:function(){return[P.c2]},
$asB:function(){return[P.c2]},
"%":"SVGNumberList"},q0:{"^":"Z;0t:x=,0v:y=","%":"SVGPatternElement"},q2:{"^":"t;0t:x=,0v:y=","%":"SVGPoint"},q3:{"^":"t;0k:length=","%":"SVGPointList"},q4:{"^":"t;0t:x=,0v:y=","%":"SVGRect"},q5:{"^":"iD;0t:x=,0v:y=","%":"SVGRectElement"},qa:{"^":"Z;0a7:type}","%":"SVGScriptElement"},qi:{"^":"mE;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$asy:function(){return[P.j]},
$isn:1,
$asn:function(){return[P.j]},
$isf:1,
$asf:function(){return[P.j]},
$asB:function(){return[P.j]},
"%":"SVGStringList"},ql:{"^":"Z;0a7:type}","%":"SVGStyleElement"},Z:{"^":"a6;",
gcP:function(a){return new P.iy(a,new W.lK(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},qm:{"^":"bV;0t:x=,0v:y=","%":"SVGSVGElement"},kE:{"^":"bV;","%":"SVGTextPathElement;SVGTextContentElement"},qn:{"^":"kE;0t:x=,0v:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},c4:{"^":"t;",$isc4:1,"%":"SVGTransform"},qt:{"^":"mR;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.e(c,"$isc4")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$asy:function(){return[P.c4]},
$isn:1,
$asn:function(){return[P.c4]},
$isf:1,
$asf:function(){return[P.c4]},
$asB:function(){return[P.c4]},
"%":"SVGTransformList"},qv:{"^":"bV;0t:x=,0v:y=","%":"SVGUseElement"},mb:{"^":"t+y;"},mc:{"^":"mb+B;"},mm:{"^":"t+y;"},mn:{"^":"mm+B;"},mD:{"^":"t+y;"},mE:{"^":"mD+B;"},mQ:{"^":"t+y;"},mR:{"^":"mQ+B;"}}],["","",,P,{"^":"",W:{"^":"b;",$isn:1,
$asn:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$iskT:1}}],["","",,P,{"^":"",oO:{"^":"t;0k:length=","%":"AudioBuffer"},eg:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oP:{"^":"lJ;",
i:function(a,b){return P.ba(a.get(H.L(b)))},
A:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ba(y.value[1]))}},
gaB:function(a){var z=H.h([],[P.j])
this.A(a,new P.hY(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaA:function(){return[P.j,null]},
$isJ:1,
$asJ:function(){return[P.j,null]},
"%":"AudioParamMap"},hY:{"^":"i:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},hZ:{"^":"eg;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oQ:{"^":"t;0cT:enabled}","%":"AudioTrack"},oR:{"^":"a7;0k:length=","%":"AudioTrackList"},i1:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oS:{"^":"eg;0a7:type}","%":"BiquadFilterNode"},pZ:{"^":"i1;0k:length=","%":"OfflineAudioContext"},q_:{"^":"hZ;0a7:type}","%":"Oscillator|OscillatorNode"},lJ:{"^":"t+aA;"}}],["","",,P,{"^":"",dI:{"^":"t;",
js:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isci)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nL(g))
return}if(!!z.$iseF)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.ce("Incorrect number or type of arguments"))},
jr:function(a,b,c,d,e,f,g){return this.js(a,b,c,d,e,f,g,null,null,null)},
$isdI:1,
"%":"WebGLRenderingContext"},l0:{"^":"t;",$isl0:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",qf:{"^":"mA;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return P.ba(a.item(b))},
n:function(a,b,c){H.D(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
M:function(a,b){return this.i(a,b)},
$asy:function(){return[[P.J,,,]]},
$isn:1,
$asn:function(){return[[P.J,,,]]},
$isf:1,
$asf:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},mz:{"^":"t+y;"},mA:{"^":"mz+B;"}}],["","",,O,{"^":"",aQ:{"^":"b;0a,0b,0c,0d,$ti",
ci:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
dg:function(a,b,c){var z=H.aD(this,"aQ",0)
H.d(b,{func:1,ret:P.M,args:[[P.n,z]]})
z={func:1,ret:-1,args:[P.o,[P.n,z]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
bz:function(a,b){return this.dg(a,null,b)},
hm:function(a){var z
H.v(a,"$isn",[H.aD(this,"aQ",0)],"$asn")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fg:function(a,b){var z
H.v(b,"$isn",[H.aD(this,"aQ",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
fi:function(a,b){var z
H.v(b,"$isn",[H.aD(this,"aQ",0)],"$asn")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga5:function(a){var z=this.a
return new J.az(z,z.length,0,[H.u(z,0)])},
M:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
ar:function(a,b,c){H.x(b,H.aD(this,"aQ",0))
return C.a.ar(this.a,b,c)},
R:function(a,b){return this.ar(a,b,0)},
h:function(a,b){var z,y,x
z=H.aD(this,"aQ",0)
H.x(b,z)
z=[z]
if(this.hm(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fg(x,H.h([b],z))}},
i:function(a,b){var z=this.a
if(b>=z.length)return H.c(z,b)
return z[b]},
$isn:1,
q:{
dl:function(a){var z=new O.aQ([a])
z.ci(a)
return z}}},dA:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
fh:function(a){var z=this.b
if(!(z==null))z.L(a)},
aR:function(){return this.fh(null)},
ga1:function(a){var z=this.a
if(z.length>0)return C.a.gaO(z)
else return V.cm()},
eP:function(a){var z=this.a
if(a==null)C.a.h(z,V.cm())
else C.a.h(z,a)
this.aR()},
d7:function(){var z=this.a
if(z.length>0){z.pop()
this.aR()}}}}],["","",,E,{"^":"",de:{"^":"b;"},aj:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a9:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scT:function(a,b){this.b=b},
dz:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();){y=z.d
if(y.f==null)y.dz()}},
sdh:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.d(this.geJ(),{func:1,ret:-1,args:[D.w]})
C.a.a6(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.d(this.geJ(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.ar])
w.b=!0
this.ah(w)}},
sba:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.d(this.geK(),{func:1,ret:-1,args:[D.w]})
C.a.a6(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gD()
z.toString
y=H.d(this.geK(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}this.dz()
w=new D.E("technique",x,this.f,this,[O.cs])
w.b=!0
this.ah(w)}},
sbn:function(a){var z,y,x,w
if(!J.R(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.d(this.geI(),{func:1,ret:-1,args:[D.w]})
C.a.a6(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.d(this.geI(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}this.r=a
w=new D.E("mover",z,a,this,[U.aw])
w.b=!0
this.ah(w)}},
bh:function(){var z,y
z=this.d
y=z!=null?V.fc(null,z.bh()):null
for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)y=V.fc(y,z.d.bh())
return y},
jm:function(a,b){var z,y,x,w
z=this.bh()
b=new V.aB(0,0,0).F(0,z.giq())
y=z.d
x=z.e
if(x>y)y=x
x=z.f
if(x>y)y=x
if(y===0)return
w=a/y
this.bN(V.f0(w,w,w,1).l(0,V.f1(b.a,b.b,b.c)))},
jl:function(a){return this.jm(a,null)},
bN:function(a){var z=this.c
if(z!=null)z.bN(a)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)z.d.bN(a)},
ao:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.bc(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.E("matrix",x,y,this,[V.aV])
w.b=!0
this.ah(w)}z=this.f
if(z!=null)z.ao(0,b)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)z.d.ao(0,b)},
aP:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1(z))
else C.a.h(z.a,y.l(0,z.ga1(z)))
z.aR()
a.eQ(this.f)
z=a.dy
x=(z&&C.a).gaO(z)
if(x!=null&&this.d!=null)x.eS(a,this)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)z.d.aP(a)
a.eN()
a.dx.d7()},
gD:function(){var z=this.z
if(z==null){z=D.T()
this.z=z}return z},
ah:function(a){var z=this.z
if(!(z==null))z.L(a)},
a4:function(){return this.ah(null)},
j1:[function(a){H.e(a,"$isw")
this.e=null
this.ah(a)},function(){return this.j1(null)},"kB","$1","$0","geJ",0,2,3],
j2:[function(a){this.ah(H.e(a,"$isw"))},function(){return this.j2(null)},"kC","$1","$0","geK",0,2,3],
j0:[function(a){this.ah(H.e(a,"$isw"))},function(){return this.j0(null)},"kA","$1","$0","geI",0,2,3],
iZ:[function(a){this.ah(H.e(a,"$isw"))},function(){return this.iZ(null)},"ky","$1","$0","geH",0,2,3],
kx:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isn",[E.aj],"$asn")
for(z=b.length,y=this.geH(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.F)(b),++v){u=b[v]
if(u!=null){if(u.ga9()==null){t=new D.ch()
t.a=H.h([],w)
t.c=0
u.sa9(t)}t=u.ga9()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.a4()},"$2","giY",8,0,12],
kz:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isn",[E.aj],"$asn")
for(z=b.length,y=this.geH(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.F)(b),++v){u=b[v]
if(u!=null){if(u.ga9()==null){t=new D.ch()
t.a=H.h([],w)
t.c=0
u.sa9(t)}t=u.ga9()
t.toString
H.d(y,x)
C.a.a6(t.a,y)}}this.a4()},"$2","gj_",8,0,12],
$isb7:1,
q:{
cH:function(a,b,c,d,e,f){var z,y
z=new E.aj()
z.a=d
z.b=!0
y=O.dl(E.aj)
z.y=y
y.bz(z.giY(),z.gj_())
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
z.sdh(0,e)
z.sba(f)
z.sbn(c)
return z}}},ke:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
fd:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aG(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dA()
y=[V.aV]
z.a=H.h([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.w]}
v=H.d(new E.kg(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dA()
z.a=H.h([],y)
v=z.gD()
v.toString
x=H.d(new E.kh(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dA()
z.a=H.h([],y)
y=z.gD()
y.toString
w=H.d(new E.ki(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.cs])
this.dy=z
C.a.h(z,null)
this.fr=new H.aR(0,0,[P.j,A.dK])},
gjh:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga1(z)
y=this.db
y=z.l(0,y.ga1(y))
this.z=y
z=y}return z},
geO:function(){var z,y
z=this.ch
if(z==null){z=this.gjh()
y=this.dx
y=z.l(0,y.ga1(y))
this.ch=y
z=y}return z},
gf_:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.ga1(z)
y=this.dx
y=z.l(0,y.ga1(y))
this.cx=y
z=y}return z},
eQ:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaO(z):a;(z&&C.a).h(z,y)},
eN:function(){var z=this.dy
if(z.length>1)z.pop()},
e1:function(a){var z=a.b
if(z.length===0)throw H.a(P.q("May not cache a shader with no name."))
if(this.fr.bQ(0,z))throw H.a(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.n(0,z,a)},
q:{
kf:function(a,b){var z=new E.ke(a,b)
z.fd(a,b)
return z}}},kg:{"^":"i:16;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.z=null
z.ch=null}},kh:{"^":"i:16;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ki:{"^":"i:16;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},kK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a9:x@,0y,0z,0Q,0ch",
gD:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z},
fk:[function(a){var z
H.e(a,"$isw")
z=this.x
if(!(z==null))z.L(a)
this.jk()},function(){return this.fk(null)},"fj","$1","$0","gdn",0,2,3],
giJ:function(){var z,y,x
z=Date.now()
y=C.d.aa(P.ez(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aG(z,!1)
return x/y},
dQ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.k(z)
x=C.i.c4(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.c4(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
jk:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.kM(this),{func:1,ret:-1,args:[P.a0]})
C.B.fL(z)
C.B.hy(z,W.ht(y,P.a0))}},
ji:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.dQ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aG(w,!1)
x.y=P.ez(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aR()
w=x.db
C.a.sk(w.a,0)
w.aR()
w=x.dx
C.a.sk(w.a,0)
w.aR()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aP(this.e)}}catch(v){z=H.ae(v)
y=H.bk(v)
P.cd("Error: "+H.m(z))
P.cd("Stack: "+H.m(y))
throw H.a(z)}},
q:{
kL:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$isdi)return E.fk(a,!0,!0,!0,!1)
y=W.dj(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcP(a).h(0,y)
w=E.fk(y,!0,!0,!0,!1)
w.a=a
return w},
fk:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kK()
y=P.jp(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.l.cb(a,"webgl",y)
x=H.e(x==null?C.l.cb(a,"experimental-webgl",y):x,"$isdI")
if(x==null)H.p(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.kf(x,a)
w=new T.kF(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ld(a)
v=new X.jj()
v.c=new X.aX(!1,!1,!1)
v.d=P.jr(null,null,null,P.o)
w.b=v
v=new X.jK(w)
v.f=0
v.r=new V.a3(0,0)
v.x=new V.a3(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.jv(w)
v.r=0
v.x=new V.a3(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kQ(w)
v.e=0
v.f=new V.a3(0,0)
v.r=new V.a3(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.ff,P.b]])
w.z=v
u=document
t=W.aY
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.d(w.gh9(),s),!1,t))
v=w.z
r=W.al
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.d(w.ghc(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.d(w.gh6(),q),!1,r))
v=w.z
p=W.bZ
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.d(w.ghe(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.d(w.ghd(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.d(w.ghh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.d(w.ghj(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.d(w.ghi(),s),!1,t))
p=w.z
o=W.c5;(p&&C.a).h(p,W.a2(a,H.L(W.it(a)),H.d(w.ghk(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.d(w.gha(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.d(w.ghb(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.d(w.ghl(),q),!1,r))
r=w.z
q=W.bE
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.d(w.ghs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.d(w.ghq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.d(w.ghr(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aG(Date.now(),!1)
z.ch=0
z.dQ()
return z}}},kM:{"^":"i:37;a",
$1:function(a){var z
H.oC(a)
z=this.a
if(z.z){z.z=!1
z.ji()}}}}],["","",,Z,{"^":"",fP:{"^":"b;a,b",q:{
dV:function(a,b,c){var z
H.v(c,"$isf",[P.o],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bJ(c)),35044)
a.bindBuffer(b,null)
return new Z.fP(b,z)}}},ek:{"^":"de;a,b,c,d,e",
aH:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ae(y)
x=P.q('Failed to bind buffer attribute "'+J.at(this.a)+'": '+H.m(z))
throw H.a(x)}},
j:function(a){return"["+J.at(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}},fQ:{"^":"b;a",$isoT:1},cE:{"^":"b;a,0b,c,d",
al:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aH:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aH(a)},
eW:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aP:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
eL:function(a){this.aH(a)
this.aP(a)
this.eW(a)},
j:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.F)(x),++v)C.a.h(y,x[v].j(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.at(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.I(y,", ")+"\nAttrs:   "+C.a.I(u,", ")},
$iskD:1},el:{"^":"b;0a",$iskD:1},cK:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bv(this.c)+"'")+"]"}},bh:{"^":"b;a",
gdi:function(a){var z,y
z=this.a
y=(z&$.$get$aO().a)!==0?3:0
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$b1().a)!==0)y+=2
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$b8().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=4
if((z&$.$get$bi().a)!==0)++y
return(z&$.$get$b0().a)!==0?y+4:y},
io:function(a){var z,y,x
z=$.$get$aO()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b8()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fO()},
R:function(a,b){var z,y
z=this.a
if((z&$.$get$aO().a)!==0)y=1
else y=0
if((z&$.$get$aN().a)!==0)++y
if((z&$.$get$aM().a)!==0)++y
if((z&$.$get$b1().a)!==0)++y
if((z&$.$get$b2().a)!==0)++y
if((z&$.$get$b8().a)!==0)++y
if((z&$.$get$bG().a)!==0)++y
if((z&$.$get$bi().a)!==0)++y;(z&$.$get$b0().a)!==0
return-1},
C:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.h([],[P.j])
y=this.a
if((y&$.$get$aO().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b2().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b8().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.I(z,"|")},
q:{
aL:function(a){return new Z.bh(a)}}}}],["","",,D,{"^":"",dk:{"^":"b;"},ch:{"^":"b;0a,0b,0c",
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.A(y,new D.ix(z))
return x!==0},
iz:function(){return this.L(null)},
jn:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.L(y)}}},
b9:function(a){return this.jn(a,!0,!1)},
q:{
T:function(){var z=new D.ch()
z.a=H.h([],[{func:1,ret:-1,args:[D.w]}])
z.c=0
return z}}},ix:{"^":"i:38;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"b;a,0b"},cL:{"^":"w;c,d,a,0b,$ti"},cM:{"^":"w;c,d,a,0b,$ti"},E:{"^":"w;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}}],["","",,O,{"^":"",
hB:function(a){var z=C.b.iP(a,"/")
if(z<=0)return a
return C.b.w(a,0,z)},
hr:function(a){var z,y,x
z=P.dH("([^\\s]+)",!0,!1)
$.hq=z
y=z.iF(a)
if(y==null)return H.h([],[P.j])
z=y.b
if(1>=z.length)return H.c(z,1)
x=z[1]
return H.h([x,C.b.dd(C.b.aw(a,x.length))],[P.j])},
d3:function(a){var z,y,x
z=H.h([],[P.j])
y=P.dH("([^\\s]+)",!0,!1)
$.hq=y
y=new H.lA(y,a,0)
for(;y.J();){x=y.d.b
if(1>=x.length)return H.c(x,1)
C.a.h(z,x[1])}return z},
b9:function(a){var z,y,x,w
z=O.d3(a)
y=H.h([],[P.C])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,P.nP(z[w],null))}return y},
jL:{"^":"b;a,0dL:b<,0c",
at:function(a,b,c){var z=0,y=P.ac(null),x=this
var $async$at=P.ad(function(d,e){if(d===1)return P.a9(e,y)
while(true)switch(z){case 0:z=2
return P.an(x.as(H.h(a.split("\n"),[P.j]),b,!1),$async$at)
case 2:return P.aa(null,y)}})
return P.ab($async$at,y)},
as:function(a,b,c){H.v(a,"$isf",[P.j],"$asf")
return this.jf(a,b,!1)},
jf:function(a,b,c){var z=0,y=P.ac(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$as=P.ad(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.d8(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.c(a,q)
z=1
break}z=10
return P.an(t.a8(a[q],b,!1),$async$as)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ae(o)
q=P.q("Line "+H.m(J.cA(s,1))+": "+H.m(r))
throw H.a(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.cA(s,1)
z=3
break
case 5:case 1:return P.aa(x,y)
case 2:return P.a9(v,y)}})
return P.ab($async$as,y)},
a8:function(a,b,c){H.L(a)
return this.jd(a,b,!1)},
jd:function(a,b,c){var z=0,y=P.ac(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$a8=P.ad(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.ec(a,"#")
if(J.eb(s,0))a=J.ed(a,0,s)
a=J.dd(a)
if(J.as(a)<=0){z=1
break}r=O.hr(a)
if(J.as(r)<1){z=1
break}case 7:switch(J.X(r,0)){case"newmtl":z=9
break
case"Ka":z=10
break
case"Kd":z=11
break
case"Ks":z=12
break
case"Ns":z=13
break
case"d":z=14
break
case"Tr":z=15
break
case"map_Ka":z=16
break
case"map_Kd":z=17
break
case"map_Ks":z=18
break
case"map_d":z=19
break
case"map_bump":z=20
break
case"bump":z=21
break
default:z=22
break}break
case 9:p=J.X(r,1)
o=O.eY()
t.c=o
t.b.n(0,p,o)
z=1
break
case 10:n=O.b9(J.X(r,1))
t.c.r.sU(0,V.dm(n))
z=1
break
case 11:n=O.b9(J.X(r,1))
t.c.x.sU(0,V.dm(n))
z=1
break
case 12:n=O.b9(J.X(r,1))
t.c.z.sU(0,V.dm(n))
z=1
break
case 13:n=O.b9(J.X(r,1))
p=n.length
if(p!==1)H.p(P.q("Shininess may only have 1 number."))
o=t.c.z
if(0>=p){x=H.c(n,0)
z=1
break}m=n[0]
o.toString
if(m==null)m=100
if(m<=0)o.e4(0)
else if(o.c===C.c){o.c=C.h
o.cg()
o.bK(100)
p=o.a
p.a=null
p.H(null)}o.bK(m)
z=1
break
case 14:n=O.b9(J.X(r,1))
p=n.length
if(p!==1)H.p(P.q("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.c(n,0)
z=1
break}o.seZ(0,n[0])
z=1
break
case 15:n=O.b9(J.X(r,1))
p=n.length
if(p!==1)H.p(P.q("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.c(n,0)
z=1
break}p=n[0]
if(typeof p!=="number"){x=H.k(p)
z=1
break}o.seZ(0,1-p)
z=1
break
case 16:z=23
return P.an(t.cz(J.X(r,1),b),$async$a8)
case 23:z=1
break
case 17:z=24
return P.an(t.cA(J.X(r,1),b),$async$a8)
case 24:z=1
break
case 18:z=25
return P.an(t.cB(J.X(r,1),b),$async$a8)
case 25:z=1
break
case 19:z=26
return P.an(t.cw(J.X(r,1),b),$async$a8)
case 26:z=1
break
case 20:z=27
return P.an(t.bF(J.X(r,1),b),$async$a8)
case 27:z=1
break
case 21:z=28
return P.an(t.bF(J.X(r,1),b),$async$a8)
case 28:z=1
break
case 22:z=1
break
case 8:w=2
z=6
break
case 4:w=3
k=v
q=H.ae(k)
p=P.q('Line: "'+H.m(a)+'": '+H.m(q))
throw H.a(p)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aa(x,y)
case 2:return P.a9(v,y)}})
return P.ab($async$a8,y)},
cz:function(a,b){var z=0,y=P.ac(null),x=this,w
var $async$cz=P.ad(function(c,d){if(c===1)return P.a9(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.r.sbu(x.a.bl(w))
return P.aa(null,y)}})
return P.ab($async$cz,y)},
cA:function(a,b){var z=0,y=P.ac(null),x=this,w
var $async$cA=P.ad(function(c,d){if(c===1)return P.a9(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.x.sbu(x.a.bl(w))
return P.aa(null,y)}})
return P.ab($async$cA,y)},
cB:function(a,b){var z=0,y=P.ac(null),x=this,w
var $async$cB=P.ad(function(c,d){if(c===1)return P.a9(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.z.sbu(x.a.bl(w))
return P.aa(null,y)}})
return P.ab($async$cB,y)},
cw:function(a,b){var z=0,y=P.ac(null),x=this,w
var $async$cw=P.ad(function(c,d){if(c===1)return P.a9(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.db.sbu(x.a.bl(w))
return P.aa(null,y)}})
return P.ab($async$cw,y)},
bF:function(a,b){var z=0,y=P.ac(null),x=this,w
var $async$bF=P.ad(function(c,d){if(c===1)return P.a9(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.Q.sbu(x.a.bl(w))
return P.aa(null,y)}})
return P.ab($async$bF,y)},
q:{
cn:function(a,b,c){return O.jM(a,b,!1)},
jM:function(a,b,c){var z=0,y=P.ac([P.J,P.j,O.cO]),x,w=2,v,u=[],t,s,r,q,p,o,n,m
var $async$cn=P.ad(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
t=O.hB(a)
p=new O.jL(b)
p.b=new H.aR(0,0,[P.j,O.cO])
s=p
z=7
return P.an(W.eE(a,null,null),$async$cn)
case 7:r=e
z=8
return P.an(s.at(r,t,!1),$async$cn)
case 8:o=s.gdL()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
m=v
q=H.ae(m)
P.cd(a+": "+H.m(q))
o=P.q(a+": "+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aa(x,y)
case 2:return P.a9(v,y)}})
return P.ab($async$cn,y)}}},
hk:{"^":"b;a,0b"},
jR:{"^":"b;a,0b,0c,0d,0dL:e<,0f,0r,0x,0y,0z",
giC:function(){var z,y,x
z=this.z
y=z.y.a
x=y.length
if(x===1){if(0>=x)return H.c(y,0)
return y[0]}return z},
at:function(a,b,c){var z=0,y=P.ac(null),x=this
var $async$at=P.ad(function(d,e){if(d===1)return P.a9(e,y)
while(true)switch(z){case 0:z=2
return P.an(x.as(H.h(a.split("\n"),[P.j]),b,!1),$async$at)
case 2:return P.aa(null,y)}})
return P.ab($async$at,y)},
as:function(a,b,c){H.v(a,"$isf",[P.j],"$asf")
return this.jg(a,b,!1)},
jg:function(a,b,c){var z=0,y=P.ac(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$as=P.ad(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.d8(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.c(a,q)
z=1
break}z=10
return P.an(t.a8(a[q],b,!1),$async$as)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ae(o)
q=P.q("Line "+H.m(J.cA(s,1))+": "+H.m(r))
throw H.a(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.cA(s,1)
z=3
break
case 5:case 1:return P.aa(x,y)
case 2:return P.a9(v,y)}})
return P.ab($async$as,y)},
a8:function(a,b,c){H.L(a)
return this.je(a,b,!1)},
je:function(a,b,c){var z=0,y=P.ac(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$a8=P.ad(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.ec(a,"#")
if(J.eb(s,0))a=J.ed(a,0,s)
a=J.dd(a)
if(J.as(a)<=0){z=1
break}r=O.hr(a)
if(J.as(r)<1){z=1
break}case 7:switch(J.X(r,0)){case"v":z=9
break
case"vt":z=10
break
case"vn":z=11
break
case"p":z=12
break
case"l":z=13
break
case"f":z=14
break
case"mtllib":z=15
break
case"usemtl":z=16
break
case"g":z=17
break
case"o":z=18
break
default:z=19
break}break
case 9:p=O.b9(J.X(r,1))
o=p.length
if(o<3)H.p(P.q("Positions must have at least 3 numbers."))
if(o>4)H.p(P.q("Positions must have at most than 4 numbers."))
if(o===4){if(3>=o){x=H.c(p,3)
z=1
break}o=p[3]
if(!$.r.$2(o,1))H.p(P.q("Currently, non-one w values in positions are not supported."))}o=t.b
n=p.length
if(0>=n){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.c(p,1)
z=1
break}l=p[1]
if(2>=n){x=H.c(p,2)
z=1
break}l=[m,l,p[2]]
l=new O.hk(new V.aB(l[0],l[1],l[2]))
l.b=H.h([],[F.I])
C.a.h(o,l)
z=1
break
case 10:p=O.b9(J.X(r,1))
o=p.length
if(o<2)H.p(P.q("Textures must have at least 2 numbers."))
if(o>3)H.p(P.q("Textures must have at most than 3 numbers."))
if(o===3){if(2>=o){x=H.c(p,2)
z=1
break}o=p[2]
if(!$.r.$2(o,0))H.p(P.q("Currently, non-zero z values in textures are not supported."))}o=t.c
n=p.length
if(0>=n){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.c(p,1)
z=1
break}m=[m,p[1]]
C.a.h(o,new V.a3(m[0],m[1]))
z=1
break
case 11:p=O.b9(J.X(r,1))
o=p.length
if(o!==3)H.p(P.q("Normals must have exactly 3 numbers."))
n=t.d
if(0>=o){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=o){x=H.c(p,1)
z=1
break}l=p[1]
if(2>=o){x=H.c(p,2)
z=1
break}C.a.h(n,new V.G(m,l,p[2]))
z=1
break
case 12:t.hv(J.X(r,1))
z=1
break
case 13:t.hu(J.X(r,1))
z=1
break
case 14:t.ht(J.X(r,1))
z=1
break
case 15:z=20
return P.an(t.bG(J.X(r,1),b,!1),$async$a8)
case 20:z=1
break
case 16:o=J.X(r,1)
t.r=t.e.i(0,o)
t.bL()
z=1
break
case 17:t.f=J.X(r,1)
t.bL()
z=1
break
case 18:t.f=J.X(r,1)
t.bL()
z=1
break
case 19:z=1
break
case 8:w=2
z=6
break
case 4:w=3
j=v
q=H.ae(j)
o=P.q('Line: "'+H.m(a)+'": '+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aa(x,y)
case 2:return P.a9(v,y)}})
return P.ab($async$a8,y)},
bL:function(){var z,y,x
if(this.y==null||this.x.a.c.length!==0){z=F.am()
this.x=z
z=E.cH(null,!0,null,"",z,null)
this.y=z
this.z.y.h(0,z)
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)C.a.sk(z[x].b,0)}this.y.sba(this.r)
this.y.a=this.f},
cj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.split("/")
y=z.length
if(0>=y)return H.c(z,0)
x=P.bl(z[0],null,null)
w=this.b.length
if(typeof x!=="number")return x.E()
if(x<-w||x>w)throw H.a(P.q("The position index, "+x+", was out of range [-"+w+".."+w+"] or 0."))
if(x<0)x=w+x+1;--x
if(y>1){v=z[1]
if(v!=null&&v.length>0){u=P.bl(v,null,null)
t=this.c
w=t.length
if(typeof u!=="number")return u.E()
if(u<-w||u>w)throw H.a(P.q("The texture index, "+u+", was out of range [-"+w+".."+w+"] or 0."))
if(u<0)u=w+u+1
s=u-1
if(s<0||s>=w)return H.c(t,s)
r=t[s]}else r=null}else r=null
if(y>2){v=z[2]
if(v!=null&&v.length>0){q=P.bl(v,null,null)
y=this.d
w=y.length
if(typeof q!=="number")return q.E()
if(q<-w||q>w)throw H.a(P.q("The normal index, "+q+", was out of range [-"+w+".."+w+"] or 0."))
if(q<0)q=w+q+1
t=q-1
if(t<0||t>=w)return H.c(y,t)
p=y[t]}else p=null}else p=null
y=this.b
if(x<0||x>=y.length)return H.c(y,x)
o=y[x]
for(y=o.b,t=y.length,n=0;n<y.length;y.length===t||(0,H.F)(y),++n){m=y[n]
if(J.R(m.y,r)&&J.R(m.r,p))return m}m=F.bF(null,null,null,null,null,null,null,null,0)
m.sac(0,o.a)
if(!J.R(m.y,r)){m.y=r
y=m.a
if(y!=null)y.a4()}m.sbo(p)
this.x.a.h(0,m)
C.a.h(o.b,m)
return m},
hv:function(a){var z,y,x,w
z=O.d3(a)
y=H.h([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.cj(z[w]))}this.x.b.il(y)},
hu:function(a){var z,y,x,w
z=O.d3(a)
y=H.h([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.cj(z[w]))}this.x.c.ik(y)},
ht:function(a){var z,y,x,w
z=O.d3(a)
y=H.h([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.cj(z[w]))}this.x.d.ij(y)},
bG:function(a,b,c){var z=0,y=P.ac(null),x=this,w
var $async$bG=P.ad(function(d,e){if(d===1)return P.a9(e,y)
while(true)switch(z){case 0:z=2
return P.an(O.cn(b+"/"+a,x.a,!1),$async$bG)
case 2:w=e
x.e.ih(0,w)
return P.aa(null,y)}})
return P.ab($async$bG,y)},
q:{
co:function(a,b,c,d){return O.jS(a,b,c,!1)},
jS:function(a,b,c,d){var z=0,y=P.ac(E.aj),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l
var $async$co=P.ad(function(e,f){if(e===1){v=f
z=w}while(true)switch(z){case 0:w=4
t=O.hB(a)
p=new O.jR(b)
p.b=H.h([],[O.hk])
p.c=H.h([],[V.a3])
p.d=H.h([],[V.G])
p.e=new H.aR(0,0,[P.j,O.cO])
p.f=""
o=O.eY()
n=o.r
n.sU(0,new V.S(0.35,0.35,0.35))
n=o.x
n.sU(0,new V.S(0.65,0.65,0.65))
p.r=o
p.z=E.cH(null,!0,null,"",null,null)
p.bL()
s=p
z=7
return P.an(W.eE(a,null,null),$async$co)
case 7:r=f
z=8
return P.an(s.at(r,t,!1),$async$co)
case 8:P.cd("Done.")
o=s.giC()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
l=v
q=H.ae(l)
P.cd(a+": "+H.m(q))
o=P.q(a+": "+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aa(x,y)
case 2:return P.a9(v,y)}})
return P.ab($async$co,y)}}}}],["","",,X,{"^":"",em:{"^":"b;a,b",
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.em))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.C(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)},
q:{"^":"oV<"}},eP:{"^":"b;a,b",
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.C(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}},eQ:{"^":"w;c,a,0b"},jj:{"^":"b;0a,0b,0c,0d",
ja:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eQ(a,this)
y.b=!0
return z.L(y)},
j6:function(a){var z,y
this.c=a.b
this.d.a6(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eQ(a,this)
y.b=!0
return z.L(y)}},eW:{"^":"cQ;x,y,c,d,e,a,0b"},jv:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aG(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=y.a
if(typeof t!=="number")return t.m()
y=y.b
if(typeof y!=="number")return y.m()
s=new V.a3(t+x*w,y+v*u)
u=this.a.gb1()
r=new X.c0(a,new V.a3(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
d6:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.L(this.aF(a,b))
return!0},
bq:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f4()
if(typeof z!=="number")return z.ca()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.aF(a,b))
return!0},
bp:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.aF(a,b))
return!0},
jb:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.dB(new V.a_(v*u,t*s),y,x,new P.aG(w,!1),this)
w.b=!0
z.L(w)
return!0},
hg:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aG(Date.now(),!1)
y=this.f
x=new X.eW(c,a,this.a.gb1(),b,z,this)
x.b=!0
y.L(x)
this.y=z
this.x=new V.a3(0,0)}},aX:{"^":"b;a,b,c",
C:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aX))return!1
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
return z+(this.c?"Shift+":"")}},c0:{"^":"cQ;x,y,z,Q,ch,c,d,e,a,0b"},jK:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cp:function(a,b,c){var z,y,x
z=new P.aG(Date.now(),!1)
y=this.a.gb1()
x=new X.c0(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d6:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.L(this.cp(a,b,!0))
return!0},
bq:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f4()
if(typeof z!=="number")return z.ca()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.cp(a,b,!0))
return!0},
bp:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.cp(a,b,!1))
return!0},
jc:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.dB(new V.a_(w*v,u*t),y,b,new P.aG(x,!1),this)
x.b=!0
z.L(x)
return!0},
ge9:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
gc8:function(){var z=this.c
if(z==null){z=D.T()
this.c=z}return z},
geG:function(){var z=this.d
if(z==null){z=D.T()
this.d=z}return z}},dB:{"^":"cQ;x,c,d,e,a,0b"},cQ:{"^":"w;"},fo:{"^":"cQ;x,y,z,Q,ch,c,d,e,a,0b"},kQ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.v(a,"$isf",[V.a3],"$asf")
z=new P.aG(Date.now(),!1)
y=a.length>0?a[0]:new V.a3(0,0)
x=this.a.gb1()
w=new X.fo(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
j9:function(a){var z
H.v(a,"$isf",[V.a3],"$asf")
z=this.b
if(z==null)return!1
z.L(this.aF(a,!0))
return!0},
j7:function(a){var z
H.v(a,"$isf",[V.a3],"$asf")
z=this.c
if(z==null)return!1
z.L(this.aF(a,!0))
return!0},
j8:function(a){var z
H.v(a,"$isf",[V.a3],"$asf")
z=this.d
if(z==null)return!1
z.L(this.aF(a,!1))
return!0}},ld:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb1:function(){var z=this.a
return V.fa(0,0,(z&&C.l).gbP(z).c,C.l.gbP(z).d)},
dF:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eP(z,new X.aX(y,a.altKey,a.shiftKey))},
aX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aX(y,a.altKey,a.shiftKey)},
cF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aX(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.a3(y-w,x-v)},
bf:function(a){return new V.a_(a.movementX,a.movementY)},
cC:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.a3])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.F)(x),++v){u=x[v]
t=C.i.au(u.pageX)
C.i.au(u.pageY)
s=z.left
C.i.au(u.pageX)
C.a.h(y,new V.a3(t-s,C.i.au(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.em(z,new X.aX(y,a.altKey,a.shiftKey))},
jX:[function(a){this.f=!0},"$1","ghc",4,0,8],
jR:[function(a){this.f=!1},"$1","gh6",4,0,8],
jU:[function(a){if(this.f)a.preventDefault()},"$1","gh9",4,0,8],
jZ:[function(a){var z
H.e(a,"$isbZ")
if(!this.f)return
z=this.dF(a)
if(this.b.ja(z))a.preventDefault()},"$1","ghe",4,0,22],
jY:[function(a){var z
H.e(a,"$isbZ")
if(!this.f)return
z=this.dF(a)
if(this.b.j6(z))a.preventDefault()},"$1","ghd",4,0,22],
k0:[function(a){var z,y,x,w
H.e(a,"$isaY")
z=this.a
z.focus()
this.f=!0
this.aX(a)
if(this.x){y=this.aD(a)
x=this.bf(a)
if(this.d.d6(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aG(a)
if(this.c.d6(y,w))a.preventDefault()},"$1","ghh",4,0,9],
k6:[function(a){var z,y,x
H.e(a,"$isaY")
this.aX(a)
z=this.aD(a)
if(this.x){y=this.bf(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bq(z,x))a.preventDefault()},"$1","ghj",4,0,9],
jW:[function(a){var z,y,x,w
H.e(a,"$isaY")
z=this.a
if(!(z&&C.l).gbP(z).e6(0,new P.bg(a.clientX,a.clientY,[P.a0]))){this.aX(a)
y=this.aD(a)
if(this.x){x=this.bf(a)
if(this.d.bq(y,x))a.preventDefault()
return}if(this.r)return
w=this.aG(a)
if(this.c.bq(y,w))a.preventDefault()}},"$1","ghb",4,0,9],
k5:[function(a){var z,y,x
H.e(a,"$isaY")
this.aX(a)
z=this.aD(a)
if(this.x){y=this.bf(a)
if(this.d.bp(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bp(z,x))a.preventDefault()},"$1","ghi",4,0,9],
jV:[function(a){var z,y,x,w
H.e(a,"$isaY")
z=this.a
if(!(z&&C.l).gbP(z).e6(0,new P.bg(a.clientX,a.clientY,[P.a0]))){this.aX(a)
y=this.aD(a)
if(this.x){x=this.bf(a)
if(this.d.bp(y,x))a.preventDefault()
return}if(this.r)return
w=this.aG(a)
if(this.c.bp(y,w))a.preventDefault()}},"$1","gha",4,0,9],
k7:[function(a){var z,y
H.e(a,"$isc5")
this.aX(a)
z=new V.a_((a&&C.A).gix(a),C.A.giy(a)).B(0,180)
if(this.x){if(this.d.jb(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.jc(z,y))a.preventDefault()},"$1","ghk",4,0,63],
k8:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aD(this.y)
v=this.aG(this.y)
this.d.hg(w,v,x)}},"$1","ghl",4,0,8],
ke:[function(a){var z
H.e(a,"$isbE")
this.a.focus()
this.f=!0
this.cF(a)
z=this.cC(a)
if(this.e.j9(z))a.preventDefault()},"$1","ghs",4,0,17],
kc:[function(a){var z
H.e(a,"$isbE")
this.cF(a)
z=this.cC(a)
if(this.e.j7(z))a.preventDefault()},"$1","ghq",4,0,17],
kd:[function(a){var z
H.e(a,"$isbE")
this.cF(a)
z=this.cC(a)
if(this.e.j8(z))a.preventDefault()},"$1","ghr",4,0,17]}}],["","",,D,{"^":"",im:{"^":"b;",$isag:1,$isb7:1},ag:{"^":"b;",$isb7:1},jk:{"^":"aQ;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gD:function(){var z=this.Q
if(z==null){z=D.T()
this.Q=z}return z},
dq:function(a){var z=this.Q
if(!(z==null))z.L(a)},
hf:[function(a){var z=this.ch
if(!(z==null))z.L(a)},function(){return this.hf(null)},"k_","$1","$0","gdM",0,2,3],
k9:[function(a){var z,y,x
H.v(a,"$isn",[D.ag],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.F)(a),++y){x=a[y]
if(x==null||this.fG(x))return!1}return!0},"$1","ghn",4,0,43],
jO:[function(a,b){var z,y,x,w,v
z=D.ag
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gdM(),w=0;w<b.length;b.length===y||(0,H.F)(b),++w){v=H.e(b[w],"$isag")
v.gD().h(0,x)}z=new D.cL(a,b,this,[z])
z.b=!0
this.dq(z)},"$2","gh3",8,0,24],
kb:[function(a,b){var z,y,x,w,v
z=D.ag
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gdM(),w=0;w<b.length;b.length===y||(0,H.F)(b),++w){v=H.e(b[w],"$isag")
v.gD().a6(0,x)}z=new D.cM(a,b,this,[z])
z.b=!0
this.dq(z)},"$2","ghp",8,0,24],
fG:function(a){var z=C.a.bj(this.e,a)
return z},
$asn:function(){return[D.ag]},
$asaQ:function(){return[D.ag]}},jW:{"^":"b;",$isag:1,$isb7:1},kw:{"^":"b;",$isag:1,$isb7:1},kH:{"^":"b;",$isag:1,$isb7:1},kI:{"^":"b;",$isag:1,$isb7:1},kJ:{"^":"b;",$isag:1,$isb7:1}}],["","",,V,{"^":"",
oX:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.k(a)
return Math.abs(b-a)<=1e-9},"$2","jH",8,0,41],
oJ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.by(a-b,z)
return(a<0?a+z:a)+b},
V:function(a,b,c){if(a==null)return C.b.an("null",c)
return C.b.an(C.i.eV($.r.$2(a,0)?0:a,b),c+b+1)},
bP:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isf",[P.C],"$asf")
z=H.h([],[P.j])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.F)(a),++w){v=V.V(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.n(z,u,C.b.an(z[u],x))}return z},
e9:function(a,b){return C.i.jt(Math.pow(b,C.J.c4(Math.log(H.bN(a))/Math.log(b))))},
S:{"^":"b;a,b,c",
m:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.S(z,y,x)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"},
q:{
dm:function(a){var z,y,x
H.v(a,"$isf",[P.C],"$asf")
z=J.aC(a)
y=z.i(a,0)
x=z.i(a,1)
z=z.i(a,2)
if(typeof y!=="number")return y.E()
if(y<0)y=0
else if(y>1)y=1
if(typeof x!=="number")return x.E()
if(x<0)x=0
else if(x>1)x=1
if(typeof z!=="number")return z.E()
if(z<0)z=0
else if(z>1)z=1
return new V.S(y,x,z)},
ia:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.i.c4(a)
y=a-z
x=b*(1-c)
w=b*(1-c*y)
v=b*(1-c*(1-y))
switch(z){case 0:if(b<0)u=0
else u=b>1?1:b
if(v<0)t=0
else t=v>1?1:v
if(x<0)s=0
else s=x>1?1:x
return new V.S(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.S(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.S(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.S(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.S(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.S(u,t,s)}}}},
a5:{"^":"b;a,b,c,d",
m:function(a,b){var z,y,x,w
z=C.i.m(this.a,b.gb7())
y=C.i.m(this.b,b.gaQ())
x=C.i.m(this.c,b.gaZ())
w=C.i.m(this.d,b.gkq(b))
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.a5(z,y,x,w)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
f_:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f_))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.C]
y=V.bP(H.h([this.a,this.d,this.r],z),3,0)
x=V.bP(H.h([this.b,this.e,this.x],z),3,0)
w=V.bP(H.h([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.c(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.c(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.c(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.c(y,1)
s=" "+y[1]+", "
if(1>=u)return H.c(x,1)
s=s+x[1]+", "
if(1>=t)return H.c(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.c(y,2)
z=" "+y[2]+", "
if(2>=u)return H.c(x,2)
z=z+x[2]+", "
if(2>=t)return H.c(w,2)
return s+(z+w[2]+"]")}},
aV:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return z},
eE:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.k(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.k(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.k(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.k(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.k(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.k(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.cm()
a3=1/a2
a4=-w
a5=-i
return V.aW((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.k(s)
r=a7.b
if(typeof r!=="number")return H.k(r)
q=a7.f
if(typeof q!=="number")return H.k(q)
p=a7.z
if(typeof p!=="number")return H.k(p)
o=a7.cy
if(typeof o!=="number")return H.k(o)
n=a7.c
if(typeof n!=="number")return H.k(n)
m=a7.r
if(typeof m!=="number")return H.k(m)
l=a7.Q
if(typeof l!=="number")return H.k(l)
k=a7.db
if(typeof k!=="number")return H.k(k)
j=a7.d
if(typeof j!=="number")return H.k(j)
i=a7.x
if(typeof i!=="number")return H.k(i)
h=a7.ch
if(typeof h!=="number")return H.k(h)
g=a7.dx
if(typeof g!=="number")return H.k(g)
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
return V.aW(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
t=this.d
if(typeof t!=="number")return H.k(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.k(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.k(l)
return new V.aB(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aV))return!1
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
j:function(a){return this.S()},
ex:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.C]
y=V.bP(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bP(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bP(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bP(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.c(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.c(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.c(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.c(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.c(y,1)
q=q+y[1]+", "
if(1>=t)return H.c(x,1)
q=q+x[1]+", "
if(1>=s)return H.c(w,1)
q=q+w[1]+", "
if(1>=r)return H.c(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.c(y,2)
u=u+y[2]+", "
if(2>=t)return H.c(x,2)
u=u+x[2]+", "
if(2>=s)return H.c(w,2)
u=u+w[2]+", "
if(2>=r)return H.c(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.c(y,3)
q=q+y[3]+", "
if(3>=t)return H.c(x,3)
q=q+x[3]+", "
if(3>=s)return H.c(w,3)
q=q+w[3]+", "
if(3>=r)return H.c(v,3)
return u+(q+v[3]+"]")},
G:function(a){return this.ex(a,3,0)},
S:function(){return this.ex("",3,0)},
q:{
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cm:function(){return V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
f1:function(a,b,c){return V.aW(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
f0:function(a,b,c,d){return V.aW(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)}}},
a3:{"^":"b;t:a>,v:b>",
m:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.k(w)
return new V.a3(z+y,x+w)},
F:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.F()
if(typeof w!=="number")return H.k(w)
return new V.a3(z-y,x-w)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
aB:{"^":"b;t:a>,v:b>,c",
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.k(u)
return new V.aB(z+y,x+w,v+u)},
F:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.F()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.F()
if(typeof u!=="number")return H.k(u)
return new V.aB(z-y,x-w,v-u)},
B:function(a,b){var z,y,x
if($.r.$2(b,0))return new V.aB(0,0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
x=this.c
if(typeof x!=="number")return x.B()
return new V.aB(z/b,y/b,x/b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
f9:{"^":"b;t:a>,v:b>,c,d",
gag:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f9))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"},
q:{
fa:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f9(a,b,c,d)}}},
cU:{"^":"b;t:a>,v:b>,c,d,e,f",
giq:function(){var z,y,x
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
x=this.c
if(typeof x!=="number")return x.m()
return new V.aB(z+this.d/2,y+this.e/2,x+this.f/2)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cU))return!1
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
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+", "+V.V(this.e,3,0)+", "+V.V(this.f,3,0)+"]"},
q:{
fb:function(a,b,c,d,e,f){return new V.cU(a,b,c,d,e,f)},
fc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(a==null)return b
if(b==null)return a
z=a.a
y=b.a
x=Math.min(H.bN(z),H.bN(y))
w=a.b
v=b.b
u=Math.min(H.bN(w),H.bN(v))
t=a.c
s=b.c
r=Math.min(H.bN(t),H.bN(s))
q=a.d
if(typeof z!=="number")return z.m()
p=b.d
if(typeof y!=="number")return y.m()
o=Math.max(z+q,y+p)
p=a.e
if(typeof w!=="number")return w.m()
y=b.e
if(typeof v!=="number")return v.m()
n=Math.max(w+p,v+y)
y=a.f
if(typeof t!=="number")return t.m()
v=b.f
if(typeof s!=="number")return s.m()
return new V.cU(x,u,r,o-x,n-u,Math.max(t+y,s+v)-r)}}},
a_:{"^":"b;a,b",
iR:[function(a){return Math.sqrt(this.N(this))},"$0","gk",1,0,25],
N:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
return z*y+x*w},
m:function(a,b){var z,y,x
z=this.a
y=b.gaK(b)
if(typeof z!=="number")return z.m()
y=C.i.m(z,y)
z=this.b
x=b.gaL(b)
if(typeof z!=="number")return z.m()
return new V.a_(y,C.i.m(z,x))},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.a_(z*b,y*b)},
B:function(a,b){var z,y
if($.r.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.a_(z/b,y/b)},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
iR:[function(a){return Math.sqrt(this.N(this))},"$0","gk",1,0,25],
N:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
return z*y+x*w+v*u},
aJ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=a.a
if(typeof v!=="number")return H.k(v)
u=this.a
if(typeof u!=="number")return u.l()
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.k(u)
return new V.G(z+y,x+w,v+u)},
O:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.O()
y=this.b
if(typeof y!=="number")return y.O()
x=this.c
if(typeof x!=="number")return x.O()
return new V.G(-z,-y,-x)},
B:function(a,b){var z,y,x
if($.r.$2(b,0))return new V.G(0,0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
x=this.c
if(typeof x!=="number")return x.B()
return new V.G(z/b,y/b,x/b)},
eF:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
C:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ib:{"^":"dk;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ck:function(a){var z=V.oJ(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.T()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.L(a)},
sde:function(a,b){},
sd3:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.ck(z)}z=new D.E("maximumLocation",y,this.b,this,[P.C])
z.b=!0
this.W(z)}},
sd5:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.ck(z)}z=new D.E("minimumLocation",y,this.c,this,[P.C])
z.b=!0
this.W(z)}},
sac:function(a,b){var z,y
b=this.ck(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.C])
z.b=!0
this.W(z)}},
sd4:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.C])
z.b=!0
this.W(z)}},
sZ:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.C])
z.b=!0
this.W(z)}},
scR:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.C])
z.b=!0
this.W(z)}},
ao:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sac(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sZ(y)}},
q:{
dp:function(){var z=new U.ib()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},er:{"^":"aw;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.T()
this.b=z}return z},
bc:function(a,b,c){return this.a},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.er))return!1
return J.R(this.a,b.a)},
j:function(a){return"Constant: "+this.a.G("          ")}},eD:{"^":"aQ;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
W:[function(a){var z
H.e(a,"$isw")
z=this.e
if(!(z==null))z.L(a)},function(){return this.W(null)},"ap","$1","$0","gaV",0,2,3],
jN:[function(a,b){var z,y,x,w,v,u,t
z=U.aw
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaV(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.F)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.cL(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gh2",8,0,26],
ka:[function(a,b){var z,y,x,w,v,u,t
z=U.aw
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaV(),w={func:1,ret:-1,args:[D.w]},v=0;v<b.length;b.length===y||(0,H.F)(b),++v){u=b[v]
if(u!=null){t=u.gD()
t.toString
H.d(x,w)
C.a.a6(t.a,x)}}z=new D.cM(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gho",8,0,26],
bc:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.E()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.az(z,z.length,0,[H.u(z,0)]),x=null;z.J();){y=z.d
if(y!=null){w=y.bc(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.cm():x
z=this.e
if(!(z==null))z.b9(0)}return this.f},
C:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eD))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.R(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asn:function(){return[U.aw]},
$asaQ:function(){return[U.aw]},
$isaw:1},aw:{"^":"dk;"},le:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.T()
this.cy=z}return z},
W:[function(a){var z
H.e(a,"$isw")
z=this.cy
if(!(z==null))z.L(a)},function(){return this.W(null)},"ap","$1","$0","gaV",0,2,3],
bg:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.ge9()
z.toString
y={func:1,ret:-1,args:[D.w]}
x=H.d(this.gcr(),y)
C.a.h(z.a,x)
x=this.a.c.geG()
x.toString
z=H.d(this.gcs(),y)
C.a.h(x.a,z)
z=this.a.c.gc8()
z.toString
y=H.d(this.gct(),y)
C.a.h(z.a,y)
return!0},
fX:[function(a){H.e(a,"$isw")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcr",4,0,5],
fY:[function(a){var z,y,x,w,v,u,t
a=H.l(H.e(a,"$isw"),"$isc0")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.a_(z.a,z.b)
z=z.N(z)
y=this.r
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.a_(y.a,y.b).l(0,2).B(0,z.gag())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.k(x)
y.sZ(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.a_(x.a,x.b).l(0,2).B(0,z.gag())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.k(u)
t=this.z
if(typeof t!=="number")return H.k(t)
x.sac(0,-v*u+t)
this.b.sZ(0)
y=y.F(0,a.z)
this.Q=new V.a_(y.a,y.b).l(0,2).B(0,z.gag())}this.ap()},"$1","gcs",4,0,5],
fZ:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.N(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.k(x)
z.sZ(y*10*x)
this.ap()}},"$1","gct",4,0,5],
bc:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.E()
if(z<y){this.ch=y
x=b.y
this.b.ao(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aW(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaw:1},lf:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.T()
this.fx=z}return z},
W:[function(a){var z
H.e(a,"$isw")
z=this.fx
if(!(z==null))z.L(a)},function(){return this.W(null)},"ap","$1","$0","gaV",0,2,3],
bg:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.ge9()
z.toString
y={func:1,ret:-1,args:[D.w]}
x=H.d(this.gcr(),y)
C.a.h(z.a,x)
x=this.a.c.geG()
x.toString
z=H.d(this.gcs(),y)
C.a.h(x.a,z)
z=this.a.c.gc8()
z.toString
x=H.d(this.gct(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.T()
x.f=z}x=H.d(this.gfU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.d(this.gfV(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.T()
x.b=z}x=H.d(this.ghM(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.T()
x.d=z}x=H.d(this.ghL(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.T()
x.c=z}y=H.d(this.ghK(),y)
C.a.h(z.a,y)
return!0},
az:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.a_(z,y)},
fX:[function(a){a=H.l(H.e(a,"$isw"),"$isc0")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcr",4,0,5],
fY:[function(a){var z,y,x,w,v,u,t
a=H.l(H.e(a,"$isw"),"$isc0")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.a_(z.a,z.b)
z=z.N(z)
y=this.Q
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.az(new V.a_(y.a,y.b).l(0,2).B(0,z.gag()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.k(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.k(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.az(new V.a_(x.a,x.b).l(0,2).B(0,z.gag()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.sac(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.F(0,a.z)
this.dx=this.az(new V.a_(y.a,y.b).l(0,2).B(0,z.gag()))}this.ap()},"$1","gcs",4,0,5],
fZ:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.N(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.k(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.k(z)
x.sZ(-y*10*z)
this.ap()}},"$1","gct",4,0,5],
jJ:[function(a){if(H.l(H.e(a,"$isw"),"$iseW").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfU",4,0,5],
jK:[function(a){var z,y,x,w,v,u,t
a=H.l(H.e(a,"$isw"),"$isc0")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.az(new V.a_(x.a,x.b).l(0,2).B(0,z.gag()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.sac(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.F(0,a.z)
this.dx=this.az(new V.a_(y.a,y.b).l(0,2).B(0,z.gag()))
this.ap()},"$1","gfV",4,0,5],
kk:[function(a){H.e(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghM",4,0,5],
kj:[function(a){var z,y,x,w,v,u,t
a=H.l(H.e(a,"$isw"),"$isfo")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.a_(z.a,z.b)
z=z.N(z)
y=this.Q
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.az(new V.a_(y.a,y.b).l(0,2).B(0,z.gag()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.k(x)
y.sZ(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.k(y)
x.sZ(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.az(new V.a_(x.a,x.b).l(0,2).B(0,z.gag()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.sac(0,-u*v+x)
this.b.sZ(0)
this.c.sZ(0)
y=y.F(0,a.z)
this.dx=this.az(new V.a_(y.a,y.b).l(0,2).B(0,z.gag()))}this.ap()},"$1","ghL",4,0,5],
ki:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.N(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.k(x)
z.sZ(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.k(z)
x.sZ(-y*10*z)
this.ap()}},"$1","ghK",4,0,5],
bc:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.E()
if(z<y){this.dy=y
x=b.y
this.c.ao(0,x)
this.b.ao(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aW(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aW(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaw:1},lg:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.T()
this.r=z}return z},
W:function(a){var z=this.r
if(!(z==null))z.L(a)},
bg:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.T()
z.e=y
z=y}else z=y
y=H.d(this.gh_(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.T()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
jL:[function(a){var z,y,x,w
H.e(a,"$isw")
if(!J.R(this.b,this.a.b.c))return
H.l(a,"$isdB")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.C])
z.b=!0
this.W(z)}},"$1","gh_",4,0,5],
bc:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.f0(x,x,x,1)}return this.f},
$isaw:1}}],["","",,M,{"^":"",iv:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aS:[function(a){var z
H.e(a,"$isw")
z=this.x
if(!(z==null))z.L(a)},function(){return this.aS(null)},"jy","$1","$0","gax",0,2,3],
jS:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aj
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.F)(b),++u){t=b[u]
if(t!=null){if(t.ga9()==null){s=new D.ch()
s.a=H.h([],v)
s.c=0
t.sa9(s)}s=t.ga9()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.cL(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gh7",8,0,12],
jT:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aj
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.F)(b),++u){t=b[u]
if(t!=null){if(t.ga9()==null){s=new D.ch()
s.a=H.h([],v)
s.c=0
t.sa9(s)}s=t.ga9()
s.toString
H.d(x,w)
C.a.a6(s.a,x)}}z=new D.cM(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gh8",8,0,12],
sba:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.d(this.gax(),{func:1,ret:-1,args:[D.w]})
C.a.a6(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.d(this.gax(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.cs])
z.b=!0
this.aS(z)}},
gD:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z},
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.eQ(this.c)
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
if(typeof x!=="number")return H.k(x)
u=C.d.au(v.a*x)
if(typeof w!=="number")return H.k(w)
t=C.d.au(v.b*w)
s=C.d.au(v.c*x)
a.c=s
v=C.d.au(v.d*w)
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
s.eP(V.aW(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.f5
if(y==null){y=new V.G(0,0,-1)
m=y.B(0,Math.sqrt(y.N(y)))
y=new V.G(0,1,0).aJ(m)
l=y.B(0,Math.sqrt(y.N(y)))
k=m.aJ(l)
j=new V.G(0,0,0)
y=V.aW(l.a,k.a,m.a,l.O(0).N(j),l.b,k.b,m.b,k.O(0).N(j),l.c,k.c,m.c,m.O(0).N(j),0,0,0,1)
$.f5=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.eP(i)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)z.d.ao(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)z.d.aP(a)
this.a.toString
a.cy.d7()
a.db.d7()
this.b.toString
a.eN()},
$isq8:1}}],["","",,A,{"^":"",ef:{"^":"b;a,b,c"},hX:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
R:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
iA:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
e8:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eI:{"^":"dK;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},eZ:{"^":"dK;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0b3,0aM,0b4,0bS,0ea,0eb,0bT,0bU,0ec,0ed,0bV,0bW,0ee,0ef,0bX,0eg,0eh,0bY,0ei,0ej,0bZ,0c_,0c0,0ek,0el,0c1,0c2,0em,0en,0c3,0eo,0cU,0ep,0cV,0eq,0cW,0er,0cX,0es,0cY,0eu,0cZ,a,b,0c,0d,0e,0f,0r",
fc:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.aH("")
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
a1.hV(z)
a1.i1(z)
a1.hW(z)
a1.i9(z)
a1.ia(z)
a1.i3(z)
a1.ig(z)
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
z=new P.aH("")
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
v.hZ(z)
v.hU(z)
v.hX(z)
v.i_(z)
v.i7(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.i5(z)
v.i6(z)}v.i2(z)
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
p=H.h([],[P.j])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.I(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hY(z)
v.i4(z)
v.i8(z)
v.ib(z)
v.ic(z)
v.ie(z)
v.i0(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.j])
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
n="vec4("+C.a.I(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eD(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.l(this.r.p(0,"invViewMat"),"$isaI")
if(y)this.db=H.l(this.r.p(0,"objMat"),"$isaI")
if(w)this.dx=H.l(this.r.p(0,"viewObjMat"),"$isaI")
this.fr=H.l(this.r.p(0,"projViewObjMat"),"$isaI")
if(a1.x2)this.go=H.l(this.r.p(0,"txt2DMat"),"$isdS")
if(a1.y1)this.id=H.l(this.r.p(0,"txtCubeMat"),"$isaI")
if(a1.y2)this.k1=H.l(this.r.p(0,"colorMat"),"$isaI")
this.k3=H.h([],[A.aI])
y=a1.b3
if(y>0){this.k2=H.e(this.r.p(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.l(l,"$isaI"))}}y=a1.a
if(y!==C.c){this.k4=H.l(this.r.p(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.r1=H.l(this.r.p(0,"emissionTxt"),"$isaJ")
this.rx=H.l(this.r.p(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.l(this.r.p(0,"emissionTxt"),"$isaK")
this.rx=H.l(this.r.p(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.ry=H.l(this.r.p(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.x1=H.l(this.r.p(0,"ambientTxt"),"$isaJ")
this.y1=H.l(this.r.p(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.l(this.r.p(0,"ambientTxt"),"$isaK")
this.y1=H.l(this.r.p(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.y2=H.l(this.r.p(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.b3=H.l(this.r.p(0,"diffuseTxt"),"$isaJ")
this.b4=H.l(this.r.p(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.aM=H.l(this.r.p(0,"diffuseTxt"),"$isaK")
this.b4=H.l(this.r.p(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bS=H.l(this.r.p(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.ea=H.l(this.r.p(0,"invDiffuseTxt"),"$isaJ")
this.bT=H.l(this.r.p(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.eb=H.l(this.r.p(0,"invDiffuseTxt"),"$isaK")
this.bT=H.l(this.r.p(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bW=H.l(this.r.p(0,"shininess"),"$isa4")
this.bU=H.l(this.r.p(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.ec=H.l(this.r.p(0,"specularTxt"),"$isaJ")
this.bV=H.l(this.r.p(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.ed=H.l(this.r.p(0,"specularTxt"),"$isaK")
this.bV=H.l(this.r.p(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.e:this.ee=H.l(this.r.p(0,"bumpTxt"),"$isaJ")
this.bX=H.l(this.r.p(0,"nullBumpTxt"),"$isP")
break
case C.f:this.ef=H.l(this.r.p(0,"bumpTxt"),"$isaK")
this.bX=H.l(this.r.p(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.eg=H.l(this.r.p(0,"envSampler"),"$isaK")
this.eh=H.l(this.r.p(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bY=H.l(this.r.p(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.ei=H.l(this.r.p(0,"reflectTxt"),"$isaJ")
this.bZ=H.l(this.r.p(0,"nullReflectTxt"),"$isP")
break
case C.f:this.ej=H.l(this.r.p(0,"reflectTxt"),"$isaK")
this.bZ=H.l(this.r.p(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.c_=H.l(this.r.p(0,"refraction"),"$isa4")
this.c0=H.l(this.r.p(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.h:break
case C.e:this.ek=H.l(this.r.p(0,"refractTxt"),"$isaJ")
this.c1=H.l(this.r.p(0,"nullRefractTxt"),"$isP")
break
case C.f:this.el=H.l(this.r.p(0,"refractTxt"),"$isaK")
this.c1=H.l(this.r.p(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.c2=H.l(this.r.p(0,"alpha"),"$isa4")
switch(y){case C.c:break
case C.h:break
case C.e:this.em=H.l(this.r.p(0,"alphaTxt"),"$isaJ")
this.c3=H.l(this.r.p(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.en=H.l(this.r.p(0,"alphaTxt"),"$isaK")
this.c3=H.l(this.r.p(0,"nullAlphaTxt"),"$isP")
break}}this.cU=H.h([],[A.fB])
this.cV=H.h([],[A.fC])
this.cW=H.h([],[A.fD])
this.cX=H.h([],[A.fE])
this.cY=H.h([],[A.fF])
this.cZ=H.h([],[A.fG])
if(a1.k2){y=a1.z
if(y>0){this.eo=H.e(this.r.p(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.cU;(x&&C.a).h(x,new A.fB(m,l,k))}}y=a1.Q
if(y>0){this.ep=H.e(this.r.p(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isa4")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isa4")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa4")
x=this.cV;(x&&C.a).h(x,new A.fC(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eq=H.e(this.r.p(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isa4")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa4")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa4")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa4")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa4")
x=this.cW;(x&&C.a).h(x,new A.fD(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.er=H.e(this.r.p(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isK")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isP")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isaJ")
x=this.cX;(x&&C.a).h(x,new A.fE(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.es=H.e(this.r.p(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isdS")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isP")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isa4")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isa4")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa4")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isaK")
x=this.cY;(x&&C.a).h(x,new A.fF(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eu=H.e(this.r.p(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(l,"$isK")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(k,"$isK")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(j,"$isK")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(i,"$isK")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(h,"$isK")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(g,"$isP")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(f,"$isK")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(e,"$isa4")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(d,"$isa4")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(c,"$isa4")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(b,"$isa4")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a,"$isa4")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.l(a0,"$isaJ")
x=this.cZ;(x&&C.a).h(x,new A.fG(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aq:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.f6(c)
b.a.uniform1i(b.d,0)}},
ak:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
jB:function(a,b){var z,y
z=a.aM
y=new A.eZ(b,z)
y.dm(b,z)
y.fc(a,b)
return y}}},jE:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,b3,aM,b4",
hV:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.b3+"];\n"
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
i1:function(a){var z
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
hW:function(a){var z
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
i9:function(a){var z,y
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
ia:function(a){var z,y
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
i3:function(a){var z
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
ig:function(a){var z
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
aE:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aw(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hZ:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
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
hU:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
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
hX:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"diffuse")
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
i_:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"invDiffuse")
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
i7:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aE(a,z,"specular")
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
i2:function(a){var z,y
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
i5:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aE(a,z,"reflect")
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
i6:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aE(a,z,"refract")
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
hY:function(a){var z,y
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
i4:function(a){var z,y
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
i8:function(a){var z,y
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
ib:function(a){var z,y,x
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
ic:function(a){var z,y,x
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
ie:function(a){var z,y,x
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
i0:function(a){var z
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
j:function(a){return this.aM}},fB:{"^":"b;a,b,c"},fE:{"^":"b;a,b,c,d,e,f,r,x"},fC:{"^":"b;a,b,c,d,e,f,r"},fF:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fD:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fG:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dK:{"^":"de;",
dm:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
eD:function(a,b,c){var z,y,x
this.c=this.dG(b,35633)
this.d=this.dG(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.hx(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.p(P.q("Failed to link shader: "+H.m(x)))}this.hD()
this.hF()},
aH:function(a){a.a.useProgram(this.e)
this.f.iA()},
dG:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.hx(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.q("Error compiling shader '"+H.m(y)+"': "+H.m(x)))}return y},
hD:function(){var z,y,x,w,v,u
z=H.h([],[A.ef])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.k(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.ef(y,v.name,u))}this.f=new A.hX(z)},
hF:function(){var z,y,x,w,v,u
z=H.h([],[A.av])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.k(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.iw(v.type,v.size,v.name,u))}this.r=new A.l_(z)},
aU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dR(z,y,b,a,c)},
fH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aJ(z,y,b,c)
else return A.dR(z,y,b,a,c)},
fI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aK(z,y,b,c)
else return A.dR(z,y,b,a,c)},
bM:function(a,b){return new P.fV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
iw:function(a,b,c,d){switch(a){case 5120:return this.aU(b,c,d)
case 5121:return this.aU(b,c,d)
case 5122:return this.aU(b,c,d)
case 5123:return this.aU(b,c,d)
case 5124:return this.aU(b,c,d)
case 5125:return this.aU(b,c,d)
case 5126:return new A.a4(this.a,this.e,c,d)
case 35664:return new A.kV(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.kY(this.a,this.e,c,d)
case 35667:return new A.kW(this.a,this.e,c,d)
case 35668:return new A.kX(this.a,this.e,c,d)
case 35669:return new A.kZ(this.a,this.e,c,d)
case 35674:return new A.l1(this.a,this.e,c,d)
case 35675:return new A.dS(this.a,this.e,c,d)
case 35676:return new A.aI(this.a,this.e,c,d)
case 35678:return this.fH(b,c,d)
case 35680:return this.fI(b,c,d)
case 35670:throw H.a(this.bM("BOOL",c))
case 35671:throw H.a(this.bM("BOOL_VEC2",c))
case 35672:throw H.a(this.bM("BOOL_VEC3",c))
case 35673:throw H.a(this.bM("BOOL_VEC4",c))
default:throw H.a(P.q("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}},cF:{"^":"b;a,b",
j:function(a){return this.b}},av:{"^":"b;"},l_:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
R:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
j:function(a){return this.S()},
iI:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.F)(z),++w)x+=z[w].j(0)+a
return x},
S:function(){return this.iI("\n")}},P:{"^":"av;a,b,c,d",
j:function(a){return"Uniform1i: "+H.m(this.c)}},kW:{"^":"av;a,b,c,d",
j:function(a){return"Uniform2i: "+H.m(this.c)}},kX:{"^":"av;a,b,c,d",
j:function(a){return"Uniform3i: "+H.m(this.c)}},kZ:{"^":"av;a,b,c,d",
j:function(a){return"Uniform4i: "+H.m(this.c)}},kU:{"^":"av;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.m(this.c)},
q:{
dR:function(a,b,c,d,e){var z=new A.kU(a,b,c,e)
z.f=d
z.e=P.js(d,0,!1,P.o)
return z}}},a4:{"^":"av;a,b,c,d",
j:function(a){return"Uniform1f: "+H.m(this.c)}},kV:{"^":"av;a,b,c,d",
j:function(a){return"Uniform2f: "+H.m(this.c)}},K:{"^":"av;a,b,c,d",
j:function(a){return"Uniform3f: "+H.m(this.c)}},kY:{"^":"av;a,b,c,d",
j:function(a){return"Uniform4f: "+H.m(this.c)}},l1:{"^":"av;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.m(this.c)}},dS:{"^":"av;a,b,c,d",
af:function(a){var z=new Float32Array(H.bJ(H.v(a,"$isf",[P.C],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.m(this.c)}},aI:{"^":"av;a,b,c,d",
af:function(a){var z=new Float32Array(H.bJ(H.v(a,"$isf",[P.C],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.m(this.c)}},aJ:{"^":"av;a,b,c,d",
f6:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.m(this.c)}},aK:{"^":"av;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.m(this.c)}}}],["","",,F,{"^":"",U:{"^":"b;0a,0b,0c,0d,0e",
jx:function(a,b,c){if(!c)this.d=null
if(!b)this.e=null},
dd:function(a){return this.jx(a,!0,!0)},
gcS:function(){return this.a==null||this.b==null||this.c==null},
fv:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.eF())return
return v.B(0,Math.sqrt(v.N(v)))},
fC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.N(z)))
z=w.F(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aJ(z.B(0,Math.sqrt(z.N(z))))
return z.B(0,Math.sqrt(z.N(z)))},
cO:function(){if(this.d!=null)return!0
var z=this.fv()
if(z==null){z=this.fC()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
fu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.eF())return
return v.B(0,Math.sqrt(v.N(v)))},
fB:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.k(y)
n=z-y
if($.r.$2(n,0)){z=r.F(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.N(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.F()
if(typeof p!=="number")return H.k(p)
if(z-p<0)m=m.O(0)}else{y=q.b
if(typeof y!=="number")return H.k(y)
l=(z-y)/n
y=r.F(0,u)
z=y.a
if(typeof z!=="number")return z.l()
w=y.b
if(typeof w!=="number")return w.l()
y=y.c
if(typeof y!=="number")return y.l()
y=new V.aB(z*l,w*l,y*l).m(0,u).F(0,x)
y=new V.G(y.a,y.b,y.c)
m=y.B(0,Math.sqrt(y.N(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.F()
if(typeof p!=="number")return H.k(p)
q=q.a
if(typeof q!=="number")return H.k(q)
if((o-p)*l+p-q<0)m=m.O(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.N(z)))
z=k.aJ(m)
z=z.B(0,Math.sqrt(z.N(z))).aJ(k)
m=z.B(0,Math.sqrt(z.N(z)))}return m},
cN:function(){if(this.e!=null)return!0
var z=this.fu()
if(z==null){z=this.fB()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
G:function(a){var z,y
if(this.gcS())return a+"disposed"
z=a+C.b.an(J.at(this.a.e),0)+", "+C.b.an(J.at(this.b.e),0)+", "+C.b.an(J.at(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
S:function(){return this.G("")},
q:{
eA:function(a,b,c){var z,y,x
z=new F.U()
y=a.a
if(y==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},be:{"^":"b;0a,0b",
gcS:function(){return this.a==null||this.b==null},
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
G:function(a){if(this.gcS())return a+"disposed"
return a+C.b.an(J.at(this.a.e),0)+", "+C.b.an(J.at(this.b.e),0)},
S:function(){return this.G("")},
q:{
eR:function(a,b){var z,y,x
z=new F.be()
if(a==null)H.p(P.q("May not create a line with a null start vertex."))
if(b==null)H.p(P.q("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.q("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},cP:{"^":"b;0a",
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.an(J.at(z.e),0)},
S:function(){return this.G("")},
q:{
dG:function(a){var z=new F.cP()
if(a.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.a4()
return z}}},ar:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
b0:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.b0()||!1
if(!this.a.b0())y=!1
z=this.e
if(!(z==null))z.b9(0)
return y},
b_:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.b_()||!1
if(!this.a.b_())y=!1
z=this.e
if(!(z==null))z.b9(0)
return y},
bO:function(){var z=this.e
if(!(z==null))++z.c
this.a.bO()
z=this.e
if(!(z==null))z.b9(0)
return!0},
bh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.fb(0,0,0,0,0,0)
z=z[0].f
x=V.fb(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.c(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(typeof u!=="number")return u.E()
if(typeof r!=="number")return H.k(r)
if(u<r){s+=r-u
q=u}else{if(u>r+s)s=u-r
q=r}p=x.e
u=x.b
if(typeof t!=="number")return t.E()
if(typeof u!=="number")return H.k(u)
if(t<u){p+=u-t
o=t}else{if(t>u+p)p=t-u
o=u}n=x.f
u=x.c
if(typeof v!=="number")return v.E()
if(typeof u!=="number")return H.k(u)
if(v<u){n+=u-v
m=v}else{if(v>u+n)n=v-u
m=u}x=new V.cU(q,o,m,s,p,n)}return x},
bN:function(a){var z,y,x
for(z=this.a.c.length-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
y=x.f
if(y!=null){y=a.bb(y)
if(!J.R(x.f,y)){x.f=y
y=x.a
if(y!=null){y=y.e
if(!(y==null))y.L(null)}}}y=x.r
if(y!=null)x.sbo(a.c7(y))
y=x.x
if(y!=null)x.sX(a.c7(y))}},
e3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aO()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$b8().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$bi().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
v=b.gdi(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.C
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.ek])
for(r=0,q=0;q<w;++q){p=b.io(q)
o=p.gdi(p)
C.a.n(s,q,new Z.ek(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].iS(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.n(t,l,m[k]);++l}}r+=o}H.v(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bJ(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cE(new Z.fP(34962,j),s,b)
i.b=H.h([],[Z.cK])
if(this.b.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.P()
C.a.h(h,g.e)}f=Z.dV(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cK(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.P()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.P()
C.a.h(h,g.e)}f=Z.dV(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cK(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.P()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.P()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].c
g.a.a.P()
C.a.h(h,g.e)}f=Z.dV(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cK(4,h.length,f))}return i},
j:function(a){var z=H.h([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.I(z,"\n")},
ah:function(a){var z=this.e
if(!(z==null))z.L(a)},
a4:function(){return this.ah(null)},
$iscV:1,
q:{
am:function(){var z,y
z=new F.ar()
y=new F.lp(z)
y.b=!1
y.c=H.h([],[F.I])
z.a=y
y=new F.kr(z)
y.b=H.h([],[F.cP])
z.b=y
y=new F.kq(z)
y.b=H.h([],[F.be])
z.c=y
y=new F.kp(z)
y.b=H.h([],[F.U])
z.d=y
z.e=null
return z}}},cV:{"^":"dk;"},kp:{"^":"b;a,0b",
ab:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.eA(b,c,d)},
ij:function(a){var z,y,x,w,v,u
H.v(a,"$isf",[F.I],"$asf")
z=H.h([],[F.U])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.c(a,v)
v=a[v]
if(w>=u)return H.c(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.eA(x,v,u))}}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
R:function(a,b){return C.a.R(this.b,b)},
b0:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.F)(z),++w)if(!z[w].cO())x=!1
return x},
b_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.F)(z),++w)if(!z[w].cN())x=!1
return x},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
return C.a.I(z,"\n")},
S:function(){return this.G("")}},kq:{"^":"b;a,0b",
u:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.eR(b,c)},
ik:function(a){var z,y,x,w,v
H.v(a,"$isf",[F.I],"$asf")
z=H.h([],[F.be])
y=a.length
for(x=1;x<y;x+=2){w=x-1
v=a.length
if(w>=v)return H.c(a,w)
w=a[w]
if(x>=v)return H.c(a,x)
v=a[x]
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.eR(w,v))}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
R:function(a,b){return C.a.R(this.b,b)},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.I(z,"\n")},
S:function(){return this.G("")}},kr:{"^":"b;a,0b",
il:function(a){var z,y,x,w
H.v(a,"$isf",[F.I],"$asf")
z=H.h([],[F.cP])
y=a.length
for(x=0;x<y;++x){if(x>=a.length)return H.c(a,x)
w=a[x]
this.a.a.h(0,w)
C.a.h(z,F.dG(w))}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
R:function(a,b){return C.a.R(this.b,b)},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
return C.a.I(z,"\n")},
S:function(){return this.G("")}},I:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
iu:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bF(this.cx,x,u,z,y,w,v,a,t)},
a2:function(){return this.iu(null)},
sac:function(a,b){var z
if(!J.R(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a4()}},
sbo:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.N(a)))
if(!J.R(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a4()}},
sX:function(a){var z
a=a==null?null:a.B(0,Math.sqrt(a.N(a)))
if(!J.R(this.x,a)){this.x=a
z=this.a
if(z!=null)z.a4()}},
sU:function(a,b){var z
if(!J.R(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.a4()}},
iS:function(a){var z,y
z=J.N(a)
if(z.C(a,$.$get$aO())){z=this.f
y=[P.C]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$aN())){z=this.r
y=[P.C]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$aM())){z=this.x
y=[P.C]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$b1())){z=this.y
y=[P.C]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.C(a,$.$get$b2())){z=this.z
y=[P.C]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$b8())){z=this.Q
y=[P.C]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.C(a,$.$get$bG())){z=this.Q
y=[P.C]
if(z==null)return H.h([1,1,1,1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else if(z.C(a,$.$get$bi()))return H.h([this.ch],[P.C])
else if(z.C(a,$.$get$b0())){z=H.h([-1,-1,-1,-1],[P.C])
return z}else return H.h([],[P.C])},
cO:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.A(0,new F.lw(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.b9(0)}return!0},
cN:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.A(0,new F.lv(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.b9(0)}return!0},
ew:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.b
x.a.a.P()
x=x.e
a.a.a.P()
v=a.e
if(x==null?v==null:x===v)return w}return},
iE:function(a){var z=this.ew(a)
if(z!=null)return z
return a.ew(this)},
C:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
G:function(a){var z,y,x
z=H.h([],[P.j])
C.a.h(z,C.b.an(J.at(this.e),0))
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
C.a.h(z,V.V(this.ch,3,0))
C.a.h(z,"-")
x=C.a.I(z,", ")
return a+"{"+x+"}"},
S:function(){return this.G("")},
q:{
bF:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.I()
y=new F.lu(z)
y.b=H.h([],[F.cP])
z.b=y
y=new F.lt(z)
x=[F.be]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.lq(z)
x=[F.U]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$fM()
z.e=0
y=$.$get$aO()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aN().a)!==0?e:null
z.x=(x&$.$get$aM().a)!==0?b:null
z.y=(x&$.$get$b1().a)!==0?f:null
z.z=(x&$.$get$b2().a)!==0?g:null
z.Q=(x&$.$get$fN().a)!==0?c:null
z.ch=(x&$.$get$bi().a)!==0?i:0
z.cx=(x&$.$get$b0().a)!==0?a:null
return z}}},lw:{"^":"i:4;a",
$1:function(a){var z,y
H.e(a,"$isU")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},lv:{"^":"i:4;a",
$1:function(a){var z,y
H.e(a,"$isU")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},lp:{"^":"b;a,0b,0c",
P:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a4()
return!0},
cH:function(a,b,c){var z=F.bF(null,null,null,new V.aB(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gk:function(a){return this.c.length},
i:function(a,b){var z=this.c
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
R:function(a,b){return C.a.R(this.c,b)},
b0:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)z[x].cO()
return!0},
b_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)z[x].cN()
return!0},
bO:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.l()
t=v.b
if(typeof t!=="number")return t.l()
s=v.c
if(typeof s!=="number")return s.l()
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.L(null)}}}}return!0},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
this.P()
z=H.h([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
return C.a.I(z,"\n")},
S:function(){return this.G("")}},lq:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b.length
if(b.E(0,z)){y=this.b
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}b=b.F(0,z)
x=this.c.length
if(b.E(0,x)){y=this.c
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}b=b.F(0,x)
y=this.d
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]},
R:function(a,b){var z=C.a.R(this.b,b)
if(z>=0)return z
z=C.a.R(this.c,b)
if(z>=0)return z+this.b.length
z=C.a.R(this.d,b)
if(z>=0)return z+this.b.length+this.c.length
return-1},
A:function(a,b){H.d(b,{func:1,ret:-1,args:[F.U]})
C.a.A(this.b,b)
C.a.A(this.c,new F.lr(this,b))
C.a.A(this.d,new F.ls(this,b))},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
return C.a.I(z,"\n")},
S:function(){return this.G("")}},lr:{"^":"i:4;a,b",
$1:function(a){H.e(a,"$isU")
if(!J.R(a.a,this.a))this.b.$1(a)}},ls:{"^":"i:4;a,b",
$1:function(a){var z
H.e(a,"$isU")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},lt:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b.length
if(b.av(0,z)){y=this.c
x=b.F(0,z)
if(x>>>0!==x||x>=y.length)return H.c(y,x)
return y[x]}else{y=this.b
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}},
R:function(a,b){var z=C.a.R(this.b,b)
if(z>=0)return z
z=C.a.R(this.c,b)
if(z>=0)return z+this.b.length
return-1},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
return C.a.I(z,"\n")},
S:function(){return this.G("")}},lu:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
R:function(a,b){return C.a.R(this.b,b)},
j:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.h([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].G(a))
return C.a.I(z,"\n")},
S:function(){return this.G("")}}}],["","",,O,{"^":"",iJ:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gD:function(){var z=this.rx
if(z==null){z=D.T()
this.rx=z}return z},
H:function(a){var z=this.rx
if(!(z==null))z.L(a)},
sae:function(a){var z,y
z=this.r2
if(!$.r.$2(z,a)){y=this.r2
this.r2=a
z=new D.E("vectorScale",y,a,this,[P.C])
z.b=!0
this.H(z)}},
ao:function(a,b){},
eS:function(a,b){var z,y,x,w
if(this.a==null){z=H.e(a.fr.i(0,"Inspection"),"$iseI")
if(z==null){y=a.a
z=new A.eI(y,"Inspection")
z.dm(y,"Inspection")
z.eD(0,$.j0,$.iT)
z.x=z.f.i(0,"posAttr")
z.y=z.f.i(0,"normAttr")
z.z=z.f.i(0,"clrAttr")
z.Q=z.f.i(0,"binmAttr")
z.ch=H.l(z.r.i(0,"lightVec"),"$isK")
z.cx=H.l(z.r.i(0,"ambientClr"),"$isK")
z.cy=H.l(z.r.i(0,"diffuseClr"),"$isK")
z.db=H.l(z.r.i(0,"weightScalar"),"$isa4")
z.dx=H.l(z.r.i(0,"viewMat"),"$isaI")
z.dy=H.l(z.r.i(0,"viewObjMatrix"),"$isaI")
z.fr=H.l(z.r.i(0,"projViewObjMatrix"),"$isaI")
a.e1(z)}this.a=z}if(b.e==null){b.d.b0()
b.d.b_()
b.d.bO()
y=new Z.el()
y.a=new H.aR(0,0,[P.j,Z.cE])
b.e=y}y=this.a
y.aH(a)
x=this.r2
w=y.db
w.a.uniform1f(w.d,x)
x=this.b
w=y.ch
w.a.uniform3f(w.d,x.a,x.b,x.c)
x=a.db
x=x.ga1(x)
w=y.dx
w.toString
w.af(x.ad(0,!0))
x=a.gf_()
w=y.dy
w.toString
w.af(x.ad(0,!0))
x=a.geO()
y=y.fr
y.toString
y.af(x.ad(0,!0))
y=b.e
if(y instanceof Z.el){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
if(this.k3)this.dP(a,y,b.d,"Axis",H.d(this.gdv(),{func:1,ret:F.ar,args:[F.cV]}),this.z,this.y)
if(this.k4)this.dP(a,y,b.d,"AABB",H.d(this.gds(),{func:1,ret:F.ar,args:[F.cV]}),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}else{w.enable(2929)
a.a.disable(3042)
if(this.cx)this.a3(a,y,b.c,"vertices",this.ghQ(),this.f,this.e)
if(this.fr)this.a3(a,y,b.c,"faceCenters",this.gfO(),this.f,this.e)
if(this.Q)this.a3(a,y,b.c,"shapeFill",this.ghG(),this.d,this.c)
if(this.id)this.a3(a,y,b.c,"colorFill",this.gfE(),this.x,this.r)
if(this.k1)this.a3(a,y,b.c,"txt2DColor",this.ghO(),this.x,this.r)
if(this.k2)this.a3(a,y,b.c,"weight",this.ghR(),this.x,this.r)
a.a.disable(2929)
a.a.enable(3042)
if(this.ch)this.a3(a,y,b.c,"wireFrame",this.ghS(),this.f,this.e)
if(this.cy)this.a3(a,y,b.c,"normals",this.gh1(),this.f,this.e)
if(this.db)this.a3(a,y,b.c,"binormals",this.gfz(),this.f,this.e)
if(this.dx)this.a3(a,y,b.c,"tangentals",this.ghJ(),this.f,this.e)
if(this.dy)this.a3(a,y,b.c,"textureCube",this.ghP(),this.f,this.e)
if(this.fx)this.a3(a,y,b.c,"faceNormals",this.gfP(),this.f,this.e)
if(this.fy)this.a3(a,y,b.c,"faceBinormals",this.gfN(),this.x,this.r)
if(this.go)this.a3(a,y,b.c,"faceTangentals",this.gfQ(),this.x,this.r)
if(this.k3)this.a3(a,y,b.c,"Axis",this.gdv(),this.z,this.y)
if(this.k4)this.a3(a,y,b.c,"AABB",this.gds(),this.z,this.y)
a.a.enable(2929)
a.a.disable(3042)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.e8()},
a3:function(a,b,c,d,e,f,g){var z,y,x
H.d(e,{func:1,ret:F.ar,args:[F.ar]})
z=b.a.i(0,d)
if(z==null){z=this.dw(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.eL(a)},
dP:function(a,b,c,d,e,f,g){var z,y,x
H.d(e,{func:1,ret:F.ar,args:[F.cV]})
z=b.a.i(0,d)
if(z==null){z=this.dw(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.eL(a)},
dw:function(a,b){var z,y,x,w
H.e(b,"$isar")
z=a.a
y=$.$get$aO()
x=$.$get$aN()
w=b.e3(new Z.fQ(z),new Z.bh(y.a|x.a|$.$get$aM().a|$.$get$b8().a))
w.al($.$get$aO()).e=this.a.x.c
w.al($.$get$aN()).e=this.a.y.c
w.al($.$get$b8()).e=this.a.z.c
w.al($.$get$aM()).e=this.a.Q.c
return w},
kg:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.iV(z,new V.a5(1,1,1,1)),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
x=a.d
x.toString
y=H.d(new O.iW(z),{func:1,ret:-1,args:[F.U]})
C.a.A(x.b,y)
return z},"$1","ghG",4,0,2],
hT:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.am()
z.a=new V.a5(0,0.7,1,1)
x=a.a
x.toString
z=H.d(new O.j6(z,y),{func:1,ret:-1,args:[F.I]})
C.a.A(x.c,z)
z=new O.j5(y)
x=a.c
x.toString
w=H.d(new O.j7(y,z),{func:1,ret:-1,args:[F.be]})
C.a.A(x.b,w)
w=a.d
w.toString
z=H.d(new O.j8(y,z),{func:1,ret:-1,args:[F.U]})
C.a.A(w.b,z)
return y},function(a){return this.hT(a,null)},"kp","$2$color","$1","ghS",4,3,50],
kn:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.j1(new V.a5(1,1,1,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","ghQ",4,0,2],
jM:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.iU(new V.a5(1,1,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","gh1",4,0,2],
jC:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.iM(new V.a5(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","gfz",4,0,2],
kh:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.iX(new V.a5(1,0.3,1,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","ghJ",4,0,2],
km:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.j_(new V.a5(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
return z},"$1","ghP",4,0,2],
jG:[function(a){var z,y,x
z=F.am()
y=a.d
y.toString
x=H.d(new O.iQ(new V.a5(1,1,0.3,1),z),{func:1,ret:-1,args:[F.U]})
C.a.A(y.b,x)
return z},"$1","gfO",4,0,2],
jH:[function(a){var z,y,x
z=F.am()
y=a.d
y.toString
x=H.d(new O.iR(new V.a5(1,1,0.3,1),z),{func:1,ret:-1,args:[F.U]})
C.a.A(y.b,x)
return z},"$1","gfP",4,0,2],
jF:[function(a){var z,y,x
z=F.am()
y=a.d
y.toString
x=H.d(new O.iP(new V.a5(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.U]})
C.a.A(y.b,x)
return z},"$1","gfN",4,0,2],
jI:[function(a){var z,y,x
z=F.am()
y=a.d
y.toString
x=H.d(new O.iS(new V.a5(1,0.3,1,1),z),{func:1,ret:-1,args:[F.U]})
C.a.A(y.b,x)
return z},"$1","gfQ",4,0,2],
jD:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.iN(z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
x=a.d
x.toString
y=H.d(new O.iO(z),{func:1,ret:-1,args:[F.U]})
C.a.A(x.b,y)
return z},"$1","gfE",4,0,2],
kl:[function(a){var z,y,x
z=F.am()
y=a.a
y.toString
x=H.d(new O.iY(z),{func:1,ret:-1,args:[F.I]})
C.a.A(y.c,x)
x=a.d
x.toString
y=H.d(new O.iZ(z),{func:1,ret:-1,args:[F.U]})
C.a.A(x.b,y)
return z},"$1","ghO",4,0,2],
ko:[function(a){var z,y,x,w,v,u,t
z={}
y=F.am()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.I]}
C.a.A(w,H.d(new O.j2(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.F()
if(typeof u!=="number")return H.k(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.d(new O.j3(z,y),x)
C.a.A(w.c,x)
x=a.d
x.toString
w=H.d(new O.j4(y),{func:1,ret:-1,args:[F.U]})
C.a.A(x.b,w)
return y},"$1","ghR",4,0,2],
jB:[function(a){return this.fw(a)},"$1","gdv",4,0,2],
fw:function(a){var z,y
z=F.am()
y=new O.iL(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
jA:[function(a){return this.fo(a)},"$1","gds",4,0,2],
fo:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.bh()
y=F.am()
x=new O.iK(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
if(typeof w!=="number")return w.m()
s=w+z.d
r=x.$3(s,v,u)
if(typeof v!=="number")return v.m()
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
if(typeof u!=="number")return u.m()
u+=z.f
n=x.$3(w,v,u)
m=x.$3(s,v,u)
l=x.$3(s,q,u)
k=x.$3(w,q,u)
y.c.u(0,t,r)
y.c.u(0,r,p)
y.c.u(0,p,o)
y.c.u(0,o,t)
y.c.u(0,n,m)
y.c.u(0,m,l)
y.c.u(0,l,k)
y.c.u(0,k,n)
y.c.u(0,t,n)
y.c.u(0,r,m)
y.c.u(0,p,l)
y.c.u(0,o,k)
return y}},iV:{"^":"i:6;a,b",
$1:function(a){var z,y
H.e(a,"$isI")
z=this.a.a
y=a.a2()
y.sU(0,this.b)
y.sX(new V.G(0,0,0))
z.h(0,y)}},iW:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isU")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.P()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.ab(0,w,v,u)}},j6:{"^":"i:6;a,b",
$1:function(a){var z,y
H.e(a,"$isI")
z=this.b.a
y=a.a2()
y.sU(0,this.a.a)
y.sX(new V.G(0,0,0))
z.h(0,y)}},j5:{"^":"i:52;a",
$2:function(a,b){if(a.iE(b)==null)this.a.c.u(0,a,b)}},j7:{"^":"i:53;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isbe")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.P()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.c(z,x)
this.b.$2(w,z[x])}},j8:{"^":"i:4;a,b",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isU")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.P()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.P()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.c(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},j1:{"^":"i:6;a,b",
$1:function(a){var z,y
z=H.e(a,"$isI").a2()
z.sU(0,this.a)
z.sX(new V.G(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dG(z)}},iU:{"^":"i:6;a,b",
$1:function(a){var z,y,x
z=H.e(a,"$isI").a2()
z.sU(0,this.a)
z.sX(new V.G(0,0,0))
y=z.a2()
y.sX(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iM:{"^":"i:6;a,b",
$1:function(a){var z,y,x
H.e(a,"$isI")
z=a.a2()
z.sU(0,this.a)
z.sX(new V.G(0,0,0))
y=z.a2()
y.sX(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iX:{"^":"i:6;a,b",
$1:function(a){var z,y,x
H.e(a,"$isI")
z=a.a2()
z.sU(0,this.a)
z.sX(new V.G(0,0,0))
y=z.a2()
y.sX(a.x.aJ(a.r).O(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},j_:{"^":"i:6;a,b",
$1:function(a){var z,y,x
H.e(a,"$isI")
z=a.a2()
z.sU(0,this.a)
z.sX(new V.G(0,0,0))
y=z.a2()
y.sX(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iQ:{"^":"i:4;a,b",
$1:function(a){var z,y
H.e(a,"$isU")
z=F.bF(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dG(z)}},iR:{"^":"i:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isU")
z=F.bF(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=z.a2()
y.sX(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iP:{"^":"i:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isU")
z=F.bF(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=z.a2()
y.sX(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iS:{"^":"i:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isU")
z=F.bF(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).B(0,3),a.d,null,null,null,0)
y=z.a2()
y.sX(a.e.aJ(a.d).O(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.u(0,z,y)}},iN:{"^":"i:6;a",
$1:function(a){var z,y
H.e(a,"$isI")
z=this.a.a
y=a.a2()
y.sX(new V.G(0,0,0))
z.h(0,y)}},iO:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isU")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.P()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.ab(0,w,v,u)}},iY:{"^":"i:6;a",
$1:function(a){var z,y,x,w,v,u,t
H.e(a,"$isI")
z=a.y
y=this.a.a
x=a.a2()
w=z.a
v=z.b
if(typeof w!=="number")return w.E()
if(w<0)w=0
else if(w>1)w=1
if(typeof v!=="number")return v.E()
u=v<0
if(u)t=0
else if(v>1)t=1
else t=v
if(u)v=0
else if(v>1)v=1
x.sU(0,new V.a5(w,t,v,1))
x.sX(new V.G(0,0,0))
y.h(0,x)}},iZ:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isU")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.P()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.ab(0,w,v,u)}},j2:{"^":"i:6;a",
$1:function(a){var z,y,x
H.e(a,"$isI")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.cc()
if(typeof x!=="number")return H.k(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.E()
if(y<x)z.b=x}},j3:{"^":"i:6;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isI")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.k(x)
w=V.ia((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.a2()
x.sX(new V.G(0,0,0))
x.sU(0,new V.a5(w.a,w.b,w.c,1))
y.h(0,x)}},j4:{"^":"i:4;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isU")
z=this.a
y=z.a
x=a.a
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.P()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.P()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.ab(0,w,v,u)}},iL:{"^":"i;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.a5(z,y,x,1)
z=this.a
v=z.a.cH(0,0,0)
v.sX(new V.G(0,0,0))
v.sbo(new V.G(1,0,0))
v.sU(0,w)
u=z.a.cH(a,b,c)
u.sX(new V.G(0,0,0))
u.sbo(new V.G(1,0,0))
u.sU(0,w)
z.c.u(0,v,u)}},iK:{"^":"i;a",
$3:function(a,b,c){var z=this.a.a.cH(a,b,c)
z.sX(new V.G(0,0,0))
z.sbo(new V.G(a,b,c))
return z}},cO:{"^":"cs;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.T()
this.dy=z}return z},
H:[function(a){var z
H.e(a,"$isw")
z=this.dy
if(!(z==null))z.L(a)},function(){return this.H(null)},"fl","$1","$0","gbB",0,2,3],
hA:[function(a){H.e(a,"$isw")
this.a=null
this.H(a)},function(){return this.hA(null)},"kf","$1","$0","ghz",0,2,3],
jP:[function(a,b){var z=V.aV
z=new D.cL(a,H.v(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.H(z)},"$2","gh4",8,0,27],
jQ:[function(a,b){var z=V.aV
z=new D.cM(a,H.v(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.H(z)},"$2","gh5",8,0,27],
dD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.aa(z.e.length+3,4)*4
x=C.d.aa(z.f.length+3,4)*4
w=C.d.aa(z.r.length+3,4)*4
v=C.d.aa(z.x.length+3,4)*4
u=C.d.aa(z.y.length+3,4)*4
t=C.d.aa(z.z.length+3,4)*4
s=C.d.aa(this.e.a.length+3,4)*4
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
a6=$.$get$aO()
if(c){z=$.$get$aN()
a6=new Z.bh(a6.a|z.a)}if(b){z=$.$get$aM()
a6=new Z.bh(a6.a|z.a)}if(a){z=$.$get$b1()
a6=new Z.bh(a6.a|z.a)}if(a0){z=$.$get$b2()
a6=new Z.bh(a6.a|z.a)}if(a2){z=$.$get$b0()
a6=new Z.bh(a6.a|z.a)}return new A.jE(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
a0:function(a,b){H.v(a,"$isf",[T.dO],"$asf")
if(b!=null)if(!C.a.bj(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a,b){var z
for(z=this.dx.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.J();)C.q.ao(z.d,b)},
eS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dD()
y=H.e(a.fr.i(0,z.aM),"$iseZ")
if(y==null){y=A.jB(z,a.a)
a.e1(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.b4
z=b.e
if(!(z instanceof Z.cE)){b.e=null
z=null}if(z==null||!z.d.C(0,w)){z=x.r1
if(z)b.d.b0()
v=x.r2
if(v)b.d.b_()
u=x.ry
if(u)b.d.bO()
t=b.d.e3(new Z.fQ(a.a),w)
t.al($.$get$aO()).e=this.a.y.c
if(z)t.al($.$get$aN()).e=this.a.Q.c
if(v)t.al($.$get$aM()).e=this.a.z.c
if(x.rx)t.al($.$get$b1()).e=this.a.ch.c
if(u)t.al($.$get$b2()).e=this.a.cx.c
if(x.x1)t.al($.$get$b0()).e=this.a.cy.c
b.e=t}z=T.dO
s=H.h([],[z])
this.a.aH(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga1(u)
v=v.db
v.toString
v.af(u.ad(0,!0))}if(x.fy){v=this.a
u=a.gf_()
v=v.dx
v.toString
v.af(u.ad(0,!0))}v=this.a
u=a.geO()
v=v.fr
v.toString
v.af(u.ad(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.af(u.ad(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.af(u.ad(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.af(C.q.ad(u,!0))}if(x.b3>0){r=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,r)
for(v=[P.C],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.c(p,q)
p=p[q]
u.toString
H.e(p,"$isaV")
u=u.k3
if(q>=u.length)return H.c(u,q)
u=u[q]
o=new Float32Array(H.bJ(H.v(p.ad(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.a0(s,this.f.d)
v=this.a
u=this.f.d
v.aq(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.a0(s,this.f.e)
v=this.a
u=this.f.e
v.ak(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.a0(s,this.r.d)
v=this.a
u=this.r.d
v.aq(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.a0(s,this.r.e)
v=this.a
u=this.r.e
v.ak(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.a0(s,this.x.d)
v=this.a
u=this.x.d
v.aq(v.b3,v.b4,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.a0(s,this.x.e)
v=this.a
u=this.x.e
v.ak(v.aM,v.b4,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bS
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.a0(s,this.y.d)
v=this.a
u=this.y.d
v.aq(v.ea,v.bT,u)
u=this.a
v=this.y.f
u=u.bS
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.a0(s,this.y.e)
v=this.a
u=this.y.e
v.ak(v.eb,v.bT,u)
u=this.a
v=this.y.f
u=u.bS
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bU
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bW
u.a.uniform1f(u.d,n)
break
case C.e:this.a0(s,this.z.d)
v=this.a
u=this.z.d
v.aq(v.ec,v.bV,u)
u=this.a
v=this.z.f
u=u.bU
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bW
v.a.uniform1f(v.d,n)
break
case C.f:this.a0(s,this.z.e)
v=this.a
u=this.z.e
v.ak(v.ed,v.bV,u)
u=this.a
v=this.z.f
u=u.bU
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bW
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.eo
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga1(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cU
if(l>=p.length)return H.c(p,l)
i=p[l]
p=m.c7(j.gbR(j))
n=p.a
if(typeof n!=="number")return n.l()
h=p.b
if(typeof h!=="number")return h.l()
g=p.c
if(typeof g!=="number")return g.l()
g=p.B(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gU(j)
h=i.c
n=g.gb7()
p=g.gaQ()
g=g.gaZ()
h.a.uniform3f(h.d,n,p,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.ep
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga1(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cV
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gbr(j)
n=i.b
h=p.gt(p)
g=p.gv(p)
p=p.gdf(p)
n.a.uniform3f(n.d,h,g,p)
p=m.bb(j.gbr(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gU(j)
g=i.d
h=p.gb7()
n=p.gaQ()
p=p.gaZ()
g.a.uniform3f(g.d,h,n,p)
p=j.gcI()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gcJ()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gcK()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.eq
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga1(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cW
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gbr(j)
n=i.b
h=p.gt(p)
g=p.gv(p)
p=p.gdf(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbR(j).kw()
g=i.c
h=p.gaK(p)
n=p.gaL(p)
p=p.gb2()
g.a.uniform3f(g.d,h,n,p)
p=m.bb(j.gbr(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gU(j)
n=i.e
h=p.gb7()
g=p.gaQ()
p=p.gaZ()
n.a.uniform3f(n.d,h,g,p)
p=j.gkt()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gks()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gcI()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gcJ()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gcK()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.er
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga1(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
n=this.a.cX
if(l>=n.length)return H.c(n,l)
i=n[l]
n=j.gbt()
H.v(s,"$isf",p,"$asf")
if(!C.a.bj(s,n)){n.sbD(s.length)
C.a.h(s,n)}n=j.gbR(j)
h=i.d
g=n.gaK(n)
f=n.gaL(n)
n=n.gb2()
h.a.uniform3f(h.d,g,f,n)
n=j.gc8()
f=i.b
g=n.gaK(n)
h=n.gaL(n)
n=n.gb2()
f.a.uniform3f(f.d,g,h,n)
n=j.gbs(j)
h=i.c
g=n.gaK(n)
f=n.gaL(n)
n=n.gb2()
h.a.uniform3f(h.d,g,f,n)
n=m.c7(j.gbR(j))
f=n.a
if(typeof f!=="number")return f.l()
g=n.b
if(typeof g!=="number")return g.l()
h=n.c
if(typeof h!=="number")return h.l()
h=n.B(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gU(j)
g=i.f
f=h.gb7()
n=h.gaQ()
h=h.gaZ()
g.a.uniform3f(g.d,f,n,h)
h=j.gbt()
n=h.gd2(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gfT()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gbD())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.es
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga1(v)
for(v=this.dx.y,u=v.length,p=[P.C],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
h=this.a.cY
if(l>=h.length)return H.c(h,l)
i=h[l]
h=j.gbt()
H.v(s,"$isf",n,"$asf")
if(!C.a.bj(s,h)){h.sbD(s.length)
C.a.h(s,h)}e=m.l(0,j.ga1(j))
h=j.ga1(j).bb(new V.aB(0,0,0))
g=i.b
f=h.gt(h)
d=h.gv(h)
h=h.gdf(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bb(new V.aB(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.eE(0)
d=i.d
o=new Float32Array(H.bJ(H.v(new V.f_(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ad(0,!0),"$isf",p,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gU(j)
h=i.e
f=d.gb7()
g=d.gaQ()
d=d.gaZ()
h.a.uniform3f(h.d,f,g,d)
d=j.gbt()
h=d.gd2(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gd2(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gku(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcI()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcJ()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcK()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.eu
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga1(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cZ
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gbt()
H.v(s,"$isf",z,"$asf")
if(!C.a.bj(s,p)){p.sbD(s.length)
C.a.h(s,p)}p=j.gbr(j)
n=i.b
h=p.gt(p)
g=p.gv(p)
p=p.gdf(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbR(j)
g=i.c
h=p.gaK(p)
n=p.gaL(p)
p=p.gb2()
g.a.uniform3f(g.d,h,n,p)
p=j.gc8()
n=i.d
h=p.gaK(p)
g=p.gaL(p)
p=p.gb2()
n.a.uniform3f(n.d,h,g,p)
p=j.gbs(j)
g=i.e
h=p.gaK(p)
n=p.gaL(p)
p=p.gb2()
g.a.uniform3f(g.d,h,n,p)
p=m.bb(j.gbr(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gbt()
n=p.gd2(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gfT()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gbD())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gU(j)
n=i.y
h=p.gb7()
g=p.gaQ()
p=p.gaZ()
n.a.uniform3f(n.d,h,g,p)
p=j.gkE()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gkF()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gcI()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gcJ()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gcK()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.e:this.a0(s,this.Q.d)
z=this.a
v=this.Q.d
z.aq(z.ee,z.bX,v)
break
case C.f:this.a0(s,this.Q.e)
z=this.a
v=this.Q.e
z.ak(z.ef,z.bX,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga1(v).eE(0)
a.Q=v}z=z.fy
z.toString
z.af(v.ad(0,!0))}if(x.dy){this.a0(s,this.ch)
z=this.a
v=this.ch
z.ak(z.eg,z.eh,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bY
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.a0(s,this.cx.d)
z=this.a
v=this.cx.d
z.aq(z.ei,z.bZ,v)
v=this.a
z=this.cx.f
v=v.bY
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.f:this.a0(s,this.cx.e)
z=this.a
v=this.cx.e
z.ak(z.ej,z.bZ,v)
v=this.a
z=this.cx.f
v=v.bY
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.c0
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.c_
v.a.uniform1f(v.d,p)
break
case C.e:this.a0(s,this.cy.d)
z=this.a
v=this.cy.d
z.aq(z.ek,z.c1,v)
v=this.a
z=this.cy.f
v=v.c0
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.c_
z.a.uniform1f(z.d,p)
break
case C.f:this.a0(s,this.cy.e)
z=this.a
v=this.cy.e
z.ak(z.el,z.c1,v)
v=this.a
z=this.cy.f
v=v.c0
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.c_
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.c2
z.a.uniform1f(z.d,u)
break
case C.e:this.a0(s,this.db.d)
z=this.a
u=this.db.d
z.aq(z.em,z.c3,u)
u=this.a
z=this.db.f
u=u.c2
u.a.uniform1f(u.d,z)
break
case C.f:this.a0(s,this.db.e)
z=this.a
u=this.db.e
z.ak(z.en,z.c3,u)
u=this.a
z=this.db.f
u=u.c2
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.l(b.e,"$iscE")
z.aH(a)
z.aP(a)
z.eW(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.e8()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dD().aM},
q:{
eY:function(){var z,y,x,w
z=new O.cO()
y=O.dl(V.aV)
z.e=y
y.bz(z.gh4(),z.gh5())
y=new O.bs(z,"emission")
y.c=C.c
y.f=new V.S(0,0,0)
z.f=y
y=new O.bs(z,"ambient")
y.c=C.c
y.f=new V.S(0,0,0)
z.r=y
y=new O.bs(z,"diffuse")
y.c=C.c
y.f=new V.S(0,0,0)
z.x=y
y=new O.bs(z,"invDiffuse")
y.c=C.c
y.f=new V.S(0,0,0)
z.y=y
y=new O.jG(z,"specular")
y.c=C.c
y.f=new V.S(0,0,0)
y.ch=100
z.z=y
y=new O.jD(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bs(z,"reflect")
y.c=C.c
y.f=new V.S(0,0,0)
z.cx=y
y=new O.jF(z,"refract")
y.c=C.c
y.f=new V.S(0,0,0)
y.ch=1
z.cy=y
y=new O.jC(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.jk()
y.ci(D.ag)
y.e=H.h([],[D.im])
y.f=H.h([],[D.jW])
y.r=H.h([],[D.kw])
y.x=H.h([],[D.kH])
y.y=H.h([],[D.kI])
y.z=H.h([],[D.kJ])
y.Q=null
y.ch=null
y.dg(y.gh3(),y.ghn(),y.ghp())
z.dx=y
x=y.Q
if(x==null){x=D.T()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.w]}
w=H.d(z.ghz(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.T()
w.ch=y}x=H.d(z.gbB(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},jC:{"^":"dz;0f,a,b,0c,0d,0e",
bJ:function(a){var z,y
z=this.f
if(!$.r.$2(z,a)){y=this.f
this.f=a
z=new D.E(this.b,y,a,this,[P.C])
z.b=!0
this.a.H(z)}},
be:function(){this.dk()
this.bJ(1)},
aW:function(){this.cf()
this.bJ(1)},
seZ:function(a,b){var z
if(b==null)b=1
if(b<=0)this.e4(0)
else if(this.c===C.c){this.c=C.h
this.cf()
this.bJ(1)
z=this.a
z.a=null
z.H(null)}this.bJ(b)}},dz:{"^":"b;",
H:[function(a){this.a.H(H.e(a,"$isw"))},function(){return this.H(null)},"fl","$1","$0","gbB",0,2,3],
be:["dk",function(){}],
aW:["cf",function(){}],
dS:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.d(this.gbB(),{func:1,ret:-1,args:[D.w]})
C.a.a6(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.d(this.gbB(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.E(this.b+".texture2D",x,this.d,this,[T.fj])
z.b=!0
this.a.H(z)}},
dT:function(a){},
e4:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.H(null)}this.be()
this.dS(null)
this.dT(null)
this.a.H(null)},
sbu:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.aW()
this.c=C.e
this.dT(null)
z=this.a
z.a=null
z.H(null)}this.dS(a)}},jD:{"^":"dz;a,b,0c,0d,0e"},bs:{"^":"dz;0f,a,b,0c,0d,0e",
cD:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.S])
y.b=!0
this.a.H(y)}},
be:["dl",function(){this.dk()
this.cD(new V.S(0,0,0))}],
aW:["cg",function(){this.cf()
this.cD(new V.S(1,1,1))}],
sU:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aW()
z=this.a
z.a=null
z.H(null)}this.cD(b)}},jF:{"^":"bs;0ch,0f,a,b,0c,0d,0e",
dR:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.C])
z.b=!0
this.a.H(z)}},
be:function(){this.dl()
this.dR(1)},
aW:function(){this.cg()
this.dR(1)}},jG:{"^":"bs;0ch,0f,a,b,0c,0d,0e",
bK:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.C])
z.b=!0
this.a.H(z)}},
be:function(){this.dl()
this.bK(100)},
aW:function(){this.cg()
this.bK(100)}},cs:{"^":"b;"}}],["","",,T,{"^":"",dO:{"^":"de;"},fj:{"^":"dO;0b,0c,0d,0e,0f,0r,0x,0y,a"},kF:{"^":"b;a,0b,0c,0d,0e",
iU:function(a,b,c,d,e){var z,y,x,w
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
w=new T.fj(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.T()
z=W.al
W.a2(x,"load",H.d(new T.kG(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bl:function(a){return this.iU(a,!1,!1,!1,!1)},
hB:function(a,b,c){var z,y,x,w
b=V.e9(b,2)
z=V.e9(a.width,2)
y=V.e9(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.dj(null,null)
x.width=z
x.height=y
w=H.e(C.l.f1(x,"2d"),"$iseo")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nM(w.getImageData(0,0,x.width,x.height))}}},kG:{"^":"i:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hB(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.Y.jr(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.iz()}++x.e}}}],["","",,V,{"^":"",hW:{"^":"b;",
bm:function(a,b){return!0},
j:function(a){return"all"},
$iscl:1},cl:{"^":"b;"},eX:{"^":"b;",
bm:["fa",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)if(z[x].bm(0,b))return!0
return!1}],
j:["dj",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.F)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$iscl:1},c1:{"^":"eX;0a",
bm:function(a,b){return!this.fa(0,b)},
j:function(a){return"!["+this.dj(0)+"]"}},kn:{"^":"b;0a",
fe:function(a){var z,y
if(a.a.length<=0)throw H.a(P.q("May not create a SetMatcher with zero characters."))
z=new H.aR(0,0,[P.o,P.M])
for(y=new H.eV(a,a.gk(a),0,[H.aD(a,"y",0)]);y.J();)z.n(0,y.d,!0)
this.a=z},
bm:function(a,b){return this.a.bQ(0,b)},
j:function(a){var z=this.a
return P.cr(z.gaB(z),0,null)},
$iscl:1,
q:{
aq:function(a){var z=new V.kn()
z.fe(a)
return z}}},fe:{"^":"b;a,b,0c,0d",
giW:function(a){return this.b},
I:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fp(this.a.T(0,b))
w.a=H.h([],[V.cl])
w.c=!1
C.a.h(this.c,w)
return w},
iD:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
if(w.bm(0,a))return w}return},
j:function(a){return this.b}},fm:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hM(this.b,"\n","\\n")
y=H.hM(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fn:{"^":"b;a,b,0c",
j:function(a){return this.b}},kP:{"^":"b;0a,0b,0c",
T:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.fe(this,b)
z.c=H.h([],[V.fp])
this.a.n(0,b,z)}return z},
bw:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.fn(this,a)
y=P.j
z.c=new H.aR(0,0,[y,y])
this.b.n(0,a,z)}return z},
jw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.h([],[V.fm])
y=this.c
x=[P.o]
w=H.h([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.K(a,t)
r=y.iD(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cr(w,0,null)
throw H.a(P.q("Untokenizable string [state: "+y.giW(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.h([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cr(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.fm(o==null?p.b:o,q,t)}++t}}}},fp:{"^":"eX;b,0c,0a",
j:function(a){return this.b.b+": "+this.dj(0)}}}],["","",,X,{"^":"",en:{"^":"b;",$isb7:1},iC:{"^":"fh;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.T()
this.x=z}return z}},jU:{"^":"b;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.T()
this.e=z}return z},
bd:[function(a){var z
H.e(a,"$isw")
z=this.e
if(!(z==null))z.L(a)},function(){return this.bd(null)},"jz","$1","$0","gdr",0,2,3],
sbn:function(a){var z,y,x
if(!J.R(this.a,a)){z=this.a
if(z!=null){z=z.gD()
z.toString
y=H.d(this.gdr(),{func:1,ret:-1,args:[D.w]})
C.a.a6(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gD()
z.toString
y=H.d(this.gdr(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.E("mover",x,this.a,this,[U.aw])
z.b=!0
this.bd(z)}},
$isb7:1,
$isen:1},fh:{"^":"b;"}}],["","",,V,{"^":"",
oF:function(a){P.kO(C.G,new V.oG(a))},
i4:{"^":"b;a,b,0c,0d",
ab:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.d(c,{func:1,ret:-1,args:[P.M]})
if(this.c==null)return
z=this.d.length
y=P.cu().gb6().i(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.c(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.cB(this.c).h(0,u)
s=W.eH("checkbox")
s.checked=x
t=W.al
W.a2(s,"change",H.d(new V.i5(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.cB(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.dZ(z,x)},
u:function(a,b,c){return this.ab(a,b,c,!1)},
dZ:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.cu().gb6().i(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.j5(y,a-x+1,"0")
w=a>0?C.b.w(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.aw(y,x)
v=P.cu()
x=P.j
u=P.eU(v.gb6(),x,x)
u.n(0,z,w)
t=v.d9(0,u)
z=window.history
x=t.j(0)
z.toString
z.replaceState(new P.h7([],[]).c9(""),"",x)}},
i5:{"^":"i:13;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.dZ(this.d,z.checked)}},
oG:{"^":"i:56;a",
$1:function(a){H.e(a,"$isbC")
P.cd(C.i.eV(this.a.giJ(),2)+" fps")}},
k8:{"^":"b;a,b,0c",
ab:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.d(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cu().gb6().i(0,H.m(z))
if(y==null)if(d){c.$0()
this.dY(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.cB(this.c).h(0,v)
t=W.eH("radio")
t.checked=x
t.name=z
z=W.al
W.a2(t,"change",H.d(new V.k9(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.cB(this.c).h(0,w.createElement("br"))},
u:function(a,b,c){return this.ab(a,b,c,!1)},
dY:function(a){var z,y,x,w,v
z=P.cu()
y=P.j
x=P.eU(z.gb6(),y,y)
x.n(0,this.a,a)
w=z.d9(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.h7([],[]).c9(""),"",v)},
q:{
f8:function(a,b){var z,y
z=new V.k8(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.p("Failed to find "+a+" for RadioGroup")
return z}}},
k9:{"^":"i:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dY(this.d)}}},
ks:{"^":"b;0a,0b",
ff:function(a,b){var z,y,x,w,v,u,t
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
t=W.al
W.a2(z,"scroll",H.d(new V.kv(x),{func:1,ret:-1,args:[t]}),!1,t)},
im:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isf",[P.j],"$asf")
this.hE()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jw(C.a.iO(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.F)(x),++v){u=x[v]
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
if(H.hL(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.c(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.d1(C.T,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.m(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
ii:function(a){var z,y,x,w,v,u,t
H.v(a,"$isf",[P.j],"$asf")
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
x=H.e(w.insertCell(-1),"$isdN").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$isdN")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hE:function(){var z,y,x,w
if(this.b!=null)return
z=new V.kP()
y=P.j
z.a=new H.aR(0,0,[y,V.fe])
z.b=new H.aR(0,0,[y,V.fn])
z.c=z.T(0,"Start")
y=z.T(0,"Start").I(0,"Bold")
x=V.aq(new H.ai("*"))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"Bold").I(0,"Bold")
x=new V.c1()
w=[V.cl]
x.a=H.h([],w)
C.a.h(y.a,x)
y=V.aq(new H.ai("*"))
C.a.h(x.a,y)
y=z.T(0,"Bold").I(0,"BoldEnd")
x=V.aq(new H.ai("*"))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"Start").I(0,"Italic")
x=V.aq(new H.ai("_"))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"Italic").I(0,"Italic")
x=new V.c1()
x.a=H.h([],w)
C.a.h(y.a,x)
y=V.aq(new H.ai("_"))
C.a.h(x.a,y)
y=z.T(0,"Italic").I(0,"ItalicEnd")
x=V.aq(new H.ai("_"))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"Start").I(0,"Code")
x=V.aq(new H.ai("`"))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"Code").I(0,"Code")
x=new V.c1()
x.a=H.h([],w)
C.a.h(y.a,x)
y=V.aq(new H.ai("`"))
C.a.h(x.a,y)
y=z.T(0,"Code").I(0,"CodeEnd")
x=V.aq(new H.ai("`"))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"Start").I(0,"LinkHead")
x=V.aq(new H.ai("["))
C.a.h(y.a,x)
y.c=!0
y=z.T(0,"LinkHead").I(0,"LinkTail")
x=V.aq(new H.ai("|"))
C.a.h(y.a,x)
x=z.T(0,"LinkHead").I(0,"LinkEnd")
y=V.aq(new H.ai("]"))
C.a.h(x.a,y)
x.c=!0
x=z.T(0,"LinkHead").I(0,"LinkHead")
y=new V.c1()
y.a=H.h([],w)
C.a.h(x.a,y)
x=V.aq(new H.ai("|]"))
C.a.h(y.a,x)
x=z.T(0,"LinkTail").I(0,"LinkEnd")
y=V.aq(new H.ai("]"))
C.a.h(x.a,y)
x.c=!0
x=z.T(0,"LinkTail").I(0,"LinkTail")
y=new V.c1()
y.a=H.h([],w)
C.a.h(x.a,y)
x=V.aq(new H.ai("|]"))
C.a.h(y.a,x)
C.a.h(z.T(0,"Start").I(0,"Other").a,new V.hW())
x=z.T(0,"Other").I(0,"Other")
y=new V.c1()
y.a=H.h([],w)
C.a.h(x.a,y)
x=V.aq(new H.ai("*_`["))
C.a.h(y.a,x)
x=z.T(0,"BoldEnd")
x.d=x.a.bw("Bold")
x=z.T(0,"ItalicEnd")
x.d=x.a.bw("Italic")
x=z.T(0,"CodeEnd")
x.d=x.a.bw("Code")
x=z.T(0,"LinkEnd")
x.d=x.a.bw("Link")
x=z.T(0,"Other")
x.d=x.a.bw("Other")
this.b=z},
q:{
kt:function(a,b){var z=new V.ks()
z.ff(a,!0)
return z}}},
kv:{"^":"i:13;a",
$1:function(a){P.kN(C.t,new V.ku(this.a))}},
ku:{"^":"i:0;a",
$0:function(){var z,y,x
z=C.i.au(document.documentElement.scrollTop)
y=this.a.style
x=H.m(-0.01*z)+"px"
y.top=x}}}],["","",,G,{"^":"",
hH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z={}
y=V.kt("Test 032",!0)
x=W.dj(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
y.a.appendChild(x)
w=[P.j]
y.im(H.h(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],w))
y.ii(H.h(["controls","shapes","scalars"],w))
w=document
v=w.getElementById("testCanvas")
if(v==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
u=E.kL(v,!0,!0,!0,!1)
z.a=!0
t=E.cH(null,!0,null,"",null,null)
y=new U.eD()
y.ci(U.aw)
y.bz(y.gh2(),y.gho())
y.e=null
y.f=V.cm()
y.r=0
s=u.r
r=new U.lf()
q=U.dp()
q.sde(0,!0)
q.sd3(6.283185307179586)
q.sd5(0)
q.sac(0,0)
q.sd4(100)
q.sZ(0)
q.scR(0.5)
r.b=q
q=q.gD()
q.toString
p={func:1,ret:-1,args:[D.w]}
o=H.d(r.gaV(),p)
C.a.h(q.a,o)
q=U.dp()
q.sde(0,!0)
q.sd3(6.283185307179586)
q.sd5(0)
q.sac(0,0)
q.sd4(100)
q.sZ(0)
q.scR(0.5)
r.c=q
C.a.h(q.gD().a,o)
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
n=new X.aX(!1,!1,!1)
m=r.d
r.d=n
q=[X.aX]
o=new D.E("modifiers",m,n,r,q)
o.b=!0
r.W(o)
o=r.f
if(o!==!1){r.f=!1
o=new D.E("invertX",o,!1,r,[P.M])
o.b=!0
r.W(o)}o=r.r
if(o!==!0){r.r=!0
o=new D.E("invertY",o,!0,r,[P.M])
o.b=!0
r.W(o)}r.bg(s)
y.h(0,r)
s=u.r
r=new U.le()
o=U.dp()
o.sde(0,!0)
o.sd3(6.283185307179586)
o.sd5(0)
o.sac(0,0)
o.sd4(100)
o.sZ(0)
o.scR(0.2)
r.b=o
o=o.gD()
o.toString
l=H.d(r.gaV(),p)
C.a.h(o.a,l)
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
n=new X.aX(!0,!1,!1)
m=r.c
r.c=n
o=new D.E("modifiers",m,n,r,q)
o.b=!0
r.W(o)
r.bg(s)
y.h(0,r)
s=u.r
r=new U.lg()
r.c=0.01
r.d=0
r.e=0
n=new X.aX(!1,!1,!1)
r.b=n
q=new D.E("modifiers",null,n,r,q)
q.b=!0
r.W(q)
r.bg(s)
y.h(0,r)
t.sbn(y)
k=new O.iJ()
k.b=new V.G(0,0,-1)
k.c=new V.S(0.2,0.3,0.4)
k.d=new V.S(0.1,0.2,0.3)
k.e=new V.S(0.7,0.7,0.7)
k.f=new V.S(0.3,0.3,0.3)
k.r=new V.S(0.5,0.5,0.5)
k.x=new V.S(0.5,0.5,0.5)
k.y=new V.S(1,1,1)
k.z=new V.S(0.8,0.8,0.8)
k.Q=!1
k.ch=!1
k.cx=!1
k.cy=!1
k.db=!1
k.dx=!1
k.dy=!1
k.fr=!1
k.fx=!1
k.fy=!1
k.go=!1
k.id=!1
k.k1=!1
k.k2=!1
k.k3=!1
k.k4=!1
k.r1=!1
k.r2=1
k.sae(0.4)
y=new M.iv()
s=O.dl(E.aj)
y.d=s
s.bz(y.gh7(),y.gh8())
y.e=null
y.f=null
y.r=null
y.x=null
j=new X.jU()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.sbn(null)
s=j.b
if(!$.r.$2(s,1.0471975511965976)){m=j.b
j.b=1.0471975511965976
s=new D.E("fov",m,1.0471975511965976,j,[P.C])
s.b=!0
j.bd(s)}s=j.c
if(!$.r.$2(s,0.1)){m=j.c
j.c=0.1
s=new D.E("near",m,0.1,j,[P.C])
s.b=!0
j.bd(s)}s=j.d
if(!$.r.$2(s,2000)){m=j.d
j.d=2000
s=new D.E("far",m,2000,j,[P.C])
s.b=!0
j.bd(s)}s=y.a
if(s!==j){if(s!=null){s=s.gD()
s.toString
r=H.d(y.gax(),p)
C.a.a6(s.a,r)}m=y.a
y.a=j
s=j.gD()
s.toString
r=H.d(y.gax(),p)
C.a.h(s.a,r)
s=new D.E("camera",m,y.a,y,[X.en])
s.b=!0
y.aS(s)}i=new X.iC()
s=new V.a5(0,0,0,1)
i.a=s
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
s=V.fa(0,0,1,1)
i.r=s
s=y.b
if(s!==i){if(s!=null){s=s.gD()
s.toString
r=H.d(y.gax(),p)
C.a.a6(s.a,r)}m=y.b
y.b=i
s=i.gD()
s.toString
r=H.d(y.gax(),p)
C.a.h(s.a,r)
s=new D.E("target",m,y.b,y,[X.fh])
s.b=!0
y.aS(s)}y.sba(null)
y.sba(k)
y.d.h(0,t)
s=y.a
h=V.f1(0,0,5)
r=new U.er()
r.a=h
s.sbn(r)
s=u.d
if(s!==y){if(s!=null){s=s.gD()
s.toString
r=H.d(u.gdn(),p)
C.a.a6(s.a,r)}u.d=y
y=y.gD()
y.toString
p=H.d(u.gdn(),p)
C.a.h(y.a,p)
u.fj()}y=new V.i4("controls",!0)
w=w.getElementById("controls")
y.c=w
if(w==null)H.p("Failed to find controls for CheckGroup")
y.d=H.h([],[W.ep])
y.ab(0,"Material",new G.o1(z,t),!0)
y.u(0,"Filled",new G.o2(k))
y.ab(0,"Wire Frame",new G.o3(k),!0)
y.u(0,"Vertices",new G.oe(k))
y.u(0,"Normals",new G.op(k))
y.u(0,"Binormals",new G.or(k))
y.u(0,"Tangentals",new G.os(k))
y.u(0,"Face Centers",new G.ot(k))
y.u(0,"Face Normals",new G.ou(k))
y.u(0,"Face Binormals",new G.ov(k))
y.u(0,"Face Tangentals",new G.ow(k))
y.u(0,"Colors",new G.o4(k))
y.u(0,"Textures2D",new G.o5(k))
y.u(0,"TexturesCube",new G.o6(k))
y.u(0,"Weight",new G.o7(k))
y.ab(0,"Axis",new G.o8(k),!0)
y.u(0,"AABB",new G.o9(k))
z=new G.oz(z,u,t,new G.ox(),k)
y=V.f8("shapes",!0)
y.ab(0,"Cube",new G.oa(z),!0)
y.u(0,"Low Poly Tree",new G.ob(z))
y.u(0,"Low Poly Wolf",new G.oc(z))
y.u(0,"Plant",new G.od(z))
z=V.f8("scalars",!0)
z.u(0,"0.01",new G.of(k))
z.u(0,"0.02",new G.og(k))
z.u(0,"0.04",new G.oh(k))
z.u(0,"0.06",new G.oi(k))
z.u(0,"0.08",new G.oj(k))
z.u(0,"0.1",new G.ok(k))
z.u(0,"0.2",new G.ol(k))
z.ab(0,"0.4",new G.om(k),!0)
z.u(0,"0.6",new G.on(k))
z.u(0,"0.8",new G.oo(k))
z.u(0,"1.0",new G.oq(k))
V.oF(u)},
o1:{"^":"i:1;a,b",
$1:function(a){var z
this.a.a=a
z=this.b.y.a
if(z.length>1)J.hU(z[0],a)}},
o2:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.E("showFilled",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o3:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.E("showWireFrame",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
oe:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.E("showVertices",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
op:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.E("showNormals",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
or:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.E("showBinormals",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
os:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.E("showTangentals",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
ot:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.E("showFaceCenters",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
ou:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.E("showFaceNormals",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
ov:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.E("showFaceBinormals",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
ow:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.E("showFaceTangentals",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o4:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.E("showColorFill",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o5:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.E("showTxt2DColor",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o6:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.E("showTxtCube",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o7:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.E("showWeight",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o8:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.E("showAxis",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
o9:{"^":"i:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.E("showAABB",!a,a,z,[P.M])
y.b=!0
z.H(y)}}},
ox:{"^":"i:58;",
$1:function(a){var z,y,x
z=E.cH(null,!0,null,"",null,null)
z.sdh(0,a.c)
y=a.y
x=H.d(new G.oy(z,this),{func:1,ret:-1,args:[H.u(y,0)]})
C.a.A(y.a,x)
return z}},
oy:{"^":"i:59;a,b",
$1:function(a){H.e(a,"$isaj")
this.a.y.h(0,this.b.$1(a))}},
oz:{"^":"i:60;a,b,c,d,e",
$1:function(a){var z=0,y=P.ac(null),x=this,w,v,u,t,s
var $async$$1=P.ad(function(b,c){if(b===1)return P.a9(c,y)
while(true)switch(z){case 0:z=2
return P.an(O.co(a,x.b.f,null,!1),$async$$1)
case 2:w=c
w.jl(3.5)
v=x.c
u=v.y
t=u.a
if(t.length>0){u.a=H.h([],[H.u(u,0)])
u.fi(0,t)}v.y.h(0,w)
w.b=x.a.a
s=x.d.$1(w)
s.sba(x.e)
v.y.h(0,s)
return P.aa(null,y)}})
return P.ab($async$$1,y)}},
oa:{"^":"i:14;a",
$0:function(){var z=0,y=P.ac(P.z),x=this
var $async$$0=P.ad(function(a,b){if(a===1)return P.a9(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Cube.obj")
return P.aa(null,y)}})
return P.ab($async$$0,y)}},
ob:{"^":"i:14;a",
$0:function(){var z=0,y=P.ac(P.z),x=this
var $async$$0=P.ad(function(a,b){if(a===1)return P.a9(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/tree/tree.obj")
return P.aa(null,y)}})
return P.ab($async$$0,y)}},
oc:{"^":"i:14;a",
$0:function(){var z=0,y=P.ac(P.z),x=this
var $async$$0=P.ad(function(a,b){if(a===1)return P.a9(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Wolf.obj")
return P.aa(null,y)}})
return P.ab($async$$0,y)}},
od:{"^":"i:14;a",
$0:function(){var z=0,y=P.ac(P.z),x=this
var $async$$0=P.ad(function(a,b){if(a===1)return P.a9(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/plant/plant.obj")
return P.aa(null,y)}})
return P.ab($async$$0,y)}},
of:{"^":"i:0;a",
$0:function(){this.a.sae(0.01)}},
og:{"^":"i:0;a",
$0:function(){this.a.sae(0.02)}},
oh:{"^":"i:0;a",
$0:function(){this.a.sae(0.04)}},
oi:{"^":"i:0;a",
$0:function(){this.a.sae(0.06)}},
oj:{"^":"i:0;a",
$0:function(){this.a.sae(0.08)}},
ok:{"^":"i:0;a",
$0:function(){this.a.sae(0.1)}},
ol:{"^":"i:0;a",
$0:function(){this.a.sae(0.2)}},
om:{"^":"i:0;a",
$0:function(){this.a.sae(0.4)}},
on:{"^":"i:0;a",
$0:function(){this.a.sae(0.6)}},
oo:{"^":"i:0;a",
$0:function(){this.a.sae(0.8)}},
oq:{"^":"i:0;a",
$0:function(){this.a.sae(1)}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eL.prototype
return J.eK.prototype}if(typeof a=="string")return J.ck.prototype
if(a==null)return J.eM.prototype
if(typeof a=="boolean")return J.jd.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cy(a)}
J.nS=function(a){if(typeof a=="number")return J.cj.prototype
if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cy(a)}
J.aC=function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cy(a)}
J.cw=function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cy(a)}
J.hz=function(a){if(typeof a=="number")return J.cj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cX.prototype
return a}
J.cx=function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cX.prototype
return a}
J.b5=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.b)return a
return J.cy(a)}
J.cA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nS(a).m(a,b)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).C(a,b)}
J.eb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.hz(a).av(a,b)}
J.d8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.hz(a).E(a,b)}
J.X=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hE(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).i(a,b)}
J.d9=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hE(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cw(a).n(a,b,c)}
J.hO=function(a,b){return J.cx(a).K(a,b)}
J.hP=function(a,b,c){return J.b5(a).hx(a,b,c)}
J.hQ=function(a,b,c,d){return J.b5(a).e0(a,b,c,d)}
J.hR=function(a,b){return J.cx(a).a_(a,b)}
J.da=function(a,b,c){return J.aC(a).it(a,b,c)}
J.db=function(a,b){return J.cw(a).M(a,b)}
J.hS=function(a,b,c,d){return J.cw(a).aN(a,b,c,d)}
J.dc=function(a,b){return J.cw(a).A(a,b)}
J.cB=function(a){return J.b5(a).gcP(a)}
J.bn=function(a){return J.N(a).gY(a)}
J.bS=function(a){return J.cw(a).ga5(a)}
J.as=function(a){return J.aC(a).gk(a)}
J.ec=function(a,b){return J.aC(a).R(a,b)}
J.hT=function(a,b){return J.b5(a).jj(a,b)}
J.hU=function(a,b){return J.b5(a).scT(a,b)}
J.hV=function(a,b){return J.b5(a).sa7(a,b)}
J.ed=function(a,b,c){return J.cx(a).w(a,b,c)}
J.at=function(a){return J.N(a).j(a)}
J.dd=function(a){return J.cx(a).dd(a)}
I.aE=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.di.prototype
C.H=W.bW.prototype
C.I=J.t.prototype
C.a=J.bd.prototype
C.J=J.eK.prototype
C.d=J.eL.prototype
C.q=J.eM.prototype
C.i=J.cj.prototype
C.b=J.ck.prototype
C.Q=J.bY.prototype
C.W=H.dE.prototype
C.X=W.jP.prototype
C.z=J.jV.prototype
C.Y=P.dI.prototype
C.r=J.cX.prototype
C.A=W.c5.prototype
C.B=W.lz.prototype
C.D=new P.i0(!1)
C.C=new P.i_(C.D)
C.E=new P.jT()
C.F=new P.lo()
C.j=new P.mr()
C.c=new A.cF(0,"ColorSourceType.None")
C.h=new A.cF(1,"ColorSourceType.Solid")
C.e=new A.cF(2,"ColorSourceType.Texture2D")
C.f=new A.cF(3,"ColorSourceType.TextureCube")
C.t=new P.bq(0)
C.G=new P.bq(5e6)
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
C.w=H.h(I.aE([127,2047,65535,1114111]),[P.o])
C.m=H.h(I.aE([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.h(I.aE([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.h(I.aE([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.S=H.h(I.aE([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.T=H.h(I.aE([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.p=H.h(I.aE([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.h(I.aE([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.U=H.h(I.aE([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.h(I.aE([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.R=H.h(I.aE([]),[P.j])
C.V=new H.ig(0,{},C.R,[P.j,P.j])
C.k=new P.lh(!1)
$.aU=0
$.bT=null
$.ei=null
$.e0=!1
$.hC=null
$.hu=null
$.hK=null
$.d4=null
$.d6=null
$.e6=null
$.bK=null
$.c9=null
$.ca=null
$.e1=!1
$.Q=C.j
$.ex=null
$.ew=null
$.ev=null
$.eu=null
$.hq=null
$.r=V.jH()
$.j0="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.iT="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
$.f5=null
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
I.$lazy(y,x,w)}})(["et","$get$et",function(){return H.hA("_$dart_dartClosure")},"dv","$get$dv",function(){return H.hA("_$dart_js")},"fq","$get$fq",function(){return H.b_(H.cW({
toString:function(){return"$receiver$"}}))},"fr","$get$fr",function(){return H.b_(H.cW({$method$:null,
toString:function(){return"$receiver$"}}))},"fs","$get$fs",function(){return H.b_(H.cW(null))},"ft","$get$ft",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fx","$get$fx",function(){return H.b_(H.cW(void 0))},"fy","$get$fy",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fv","$get$fv",function(){return H.b_(H.fw(null))},"fu","$get$fu",function(){return H.b_(function(){try{null.$method$}catch(z){return z.message}}())},"fA","$get$fA",function(){return H.b_(H.fw(void 0))},"fz","$get$fz",function(){return H.b_(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dW","$get$dW",function(){return P.lE()},"cb","$get$cb",function(){return[]},"fL","$get$fL",function(){return P.ll()},"fT","$get$fT",function(){return H.jN(H.bJ(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"hh","$get$hh",function(){return P.dH("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ho","$get$ho",function(){return P.nt()},"es","$get$es",function(){return{}},"fO","$get$fO",function(){return Z.aL(0)},"fM","$get$fM",function(){return Z.aL(511)},"aO","$get$aO",function(){return Z.aL(1)},"aN","$get$aN",function(){return Z.aL(2)},"aM","$get$aM",function(){return Z.aL(4)},"b1","$get$b1",function(){return Z.aL(8)},"b2","$get$b2",function(){return Z.aL(16)},"b8","$get$b8",function(){return Z.aL(32)},"bG","$get$bG",function(){return Z.aL(64)},"fN","$get$fN",function(){return Z.aL(96)},"bi","$get$bi",function(){return Z.aL(128)},"b0","$get$b0",function(){return Z.aL(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:P.z,args:[P.M]},{func:1,ret:F.ar,args:[F.ar]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.z,args:[F.U]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.z,args:[F.I]},{func:1,ret:-1},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.o,[P.n,E.aj]]},{func:1,ret:P.z,args:[W.al]},{func:1,ret:[P.af,P.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[D.w]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:-1,args:[P.b],opt:[P.au]},{func:1,ret:P.j,args:[P.o]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bZ]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[P.o,[P.n,D.ag]]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.o,[P.n,U.aw]]},{func:1,ret:-1,args:[P.o,[P.n,V.aV]]},{func:1,ret:W.a6,args:[W.O]},{func:1,ret:P.z,args:[W.cp]},{func:1,args:[,P.j]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.M,args:[W.O]},{func:1,ret:-1,args:[P.j,P.o]},{func:1,args:[P.j]},{func:1,ret:-1,args:[,]},{func:1,ret:P.z,args:[,P.au]},{func:1,ret:P.z,args:[P.a0]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.z,args:[P.j]},{func:1,ret:P.z,args:[P.o,,]},{func:1,ret:P.M,args:[P.C,P.C]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.M,args:[[P.n,D.ag]]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.z,args:[P.j,,]},{func:1,ret:P.W,args:[P.o]},{func:1,ret:[P.J,P.j,P.j],args:[[P.J,P.j,P.j],P.j]},{func:1,ret:P.z,args:[,],opt:[,]},{func:1,ret:[P.ay,,],args:[,]},{func:1,ret:F.ar,args:[F.ar],named:{color:V.a5}},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[F.I,F.I]},{func:1,ret:P.z,args:[F.be]},{func:1,ret:P.W,args:[,,]},{func:1,ret:P.o,args:[[P.f,P.o],P.o]},{func:1,ret:P.z,args:[P.bC]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:E.aj,args:[E.aj]},{func:1,ret:P.z,args:[E.aj]},{func:1,ret:[P.af,,],args:[P.j]},{func:1,ret:P.j,args:[W.bW]},{func:1,ret:-1,opt:[P.b]},{func:1,ret:-1,args:[W.c5]}]
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
if(x==y)H.oH(d||a)
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
Isolate.aE=a.aE
Isolate.e5=a.e5
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
if(typeof dartMainRunner==="function")dartMainRunner(G.hH,[])
else G.hH([])})})()
//# sourceMappingURL=test.dart.js.map
