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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dP(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dS=function(){}
var dart=[["","",,H,{"^":"",ox:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dU==null){H.nF()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ck("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dc()]
if(v!=null)return v
v=H.nK(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dc(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
v:function(a,b){return a===b},
gU:function(a){return H.bP(a)},
i:["eK",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iI:{"^":"t;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isS:1},
eG:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isM:1},
dd:{"^":"t;",
gU:function(a){return 0},
i:["eM",function(a){return String(a)}]},
jq:{"^":"dd;"},
cl:{"^":"dd;"},
ce:{"^":"dd;",
i:function(a){var z=a[$.$get$eo()]
if(z==null)return this.eM(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isca:1},
bh:{"^":"t;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.C("add"))
a.push(b)},
iH:function(a,b){if(!!a.fixed$length)H.r(P.C("removeAt"))
if(b<0||b>=a.length)throw H.a(P.ci(b,null,null))
return a.splice(b,1)[0]},
J:function(a,b){var z
if(!!a.fixed$length)H.r(P.C("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aM(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
ic:function(a){return this.n(a,"")},
i4:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aM(a))}return y},
i2:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.S,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aM(a))}throw H.a(H.cC())},
i1:function(a,b){return this.i2(a,b,null)},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bN:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a3(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a3(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gi0:function(a){if(a.length>0)return a[0]
throw H.a(H.cC())},
gau:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cC())},
aF:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("fill range"))
P.aS(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.E(0,1))a[z]=d},
du:function(a,b){var z,y
H.l(b,{func:1,ret:P.S,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aM(a))}return!1},
T:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.da(a,"[","]")},
gX:function(a){return new J.aw(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bP(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.C("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ct(b,"newLength",null))
if(b<0)throw H.a(P.a3(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iH:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ct(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a3(a,0,4294967295,"length",null))
return J.eD(new Array(a),b)},
eD:function(a,b){return J.bK(H.c(a,[b]))},
bK:function(a){H.c4(a)
a.fixed$length=Array
return a}}},
ow:{"^":"bh;$ti"},
aw:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cc:{"^":"t;",
iW:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.C(""+a+".toInt()"))},
cv:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.C(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.C(""+a+".round()"))},
es:function(a,b){var z,y
if(b>20)throw H.a(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
ba:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a3(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.W(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.C("Unexpected toString result: "+z))
x=J.aK(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a*b},
be:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eQ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dk(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dk(a,b)},
dk:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.C("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aO:function(a,b){var z
if(a>0)z=this.di(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h9:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.di(a,b)},
di:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isp:1,
$isa5:1},
eF:{"^":"cc;",$isn:1},
eE:{"^":"cc;"},
cd:{"^":"t;",
W:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b<0)throw H.a(H.aJ(a,b))
if(b>=a.length)H.r(H.aJ(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aJ(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.ct(b,null,null))
return a+b},
aV:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
c=P.aS(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.ci(b,null,null))
if(b>c)throw H.a(P.ci(b,null,null))
if(c>a.length)throw H.a(P.ci(c,null,null))
return a.substring(b,c)},
an:function(a,b){return this.u(a,b,null)},
iZ:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iv:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ad:function(a,b){return this.iv(a,b," ")},
e7:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e6:function(a,b){return this.e7(a,b,0)},
hP:function(a,b,c){if(c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
return H.hC(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseW:1,
$ish:1}}],["","",,H,{"^":"",
cW:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cC:function(){return new P.dt("No element")},
iG:function(){return new P.dt("Too many elements")},
w:{"^":"kD;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ascM:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
ev:{"^":"i;"},
cE:{"^":"ev;$ti",
gX:function(a){return new H.dh(this,this.gm(this),0,[H.ak(this,"cE",0)])},
cO:function(a,b){return this.eL(0,H.l(b,{func:1,ret:P.S,args:[H.ak(this,"cE",0)]}))}},
dh:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.aK(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aM(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
j2:{"^":"i;a,b,$ti",
gX:function(a){return new H.j3(J.b1(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cs(this.a,b))},
$asi:function(a,b){return[b]}},
j3:{"^":"db;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asdb:function(a,b){return[b]}},
j4:{"^":"cE;a,b,$ti",
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cs(this.a,b))},
$ascE:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dE:{"^":"i;a,b,$ti",
gX:function(a){return new H.l7(J.b1(this.a),this.b,this.$ti)}},
l7:{"^":"db;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
cy:{"^":"b;$ti"},
cM:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.ak(this,"cM",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))},
aF:function(a,b,c,d){H.A(d,H.ak(this,"cM",0))
throw H.a(P.C("Cannot modify an unmodifiable list"))}},
kD:{"^":"cD+cM;"}}],["","",,H,{"^":"",
i6:function(){throw H.a(P.C("Cannot modify unmodifiable Map"))},
ny:function(a){return init.types[H.F(a)]},
hv:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isJ},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bP:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jB:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a3(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.K(a).$iscl){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.an(w,1)
r=H.dV(H.c4(H.b9(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jt:function(){if(!!self.location)return self.location.href
return},
eY:function(a){var z,y,x,w,v
H.c4(a)
z=J.ao(a)
if(typeof z!=="number")return z.eF()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jC:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aO(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.eY(z)},
eZ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.jC(a)}return H.eY(a)},
jD:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eF()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bQ:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aO(z,10))>>>0,56320|z&1023)}}throw H.a(P.a3(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jA:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
jy:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
ju:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
jv:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
jx:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
jz:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
jw:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ah(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.ci(b,"index",null)},
ns:function(a,b,c){if(a>c)return new P.cG(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cG(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
ah:function(a){return new P.aD(!0,a,null,null)},
nh:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.eV()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hD})
z.name=""}else z.toString=H.hD
return z},
hD:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aM(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.o4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aO(x,16)&8191)===10)switch(w){case 438:return z.$1(H.de(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eU(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fk()
u=$.$get$fl()
t=$.$get$fm()
s=$.$get$fn()
r=$.$get$fr()
q=$.$get$fs()
p=$.$get$fp()
$.$get$fo()
o=$.$get$fu()
n=$.$get$ft()
m=v.ac(y)
if(m!=null)return z.$1(H.de(H.I(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.de(H.I(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eU(H.I(y),m))}}return z.$1(new H.kC(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f4()
return a},
bD:function(a){var z
if(a==null)return new H.h0(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h0(a)},
nv:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nH:function(a,b,c,d,e,f){H.e(a,"$isca")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nH)
a.$identity=z
return z},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.jJ(z).r}else x=d
w=e?Object.create(new H.k6().constructor.prototype):Object.create(new H.d2(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aE
if(typeof u!=="number")return u.E()
$.aE=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ej(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ny,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ec:H.d3
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ej(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i_:function(a,b,c,d){var z=H.d3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ej:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i_(y,!w,z,b)
if(y===0){w=$.aE
if(typeof w!=="number")return w.E()
$.aE=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.cv("self")
$.bG=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aE
if(typeof w!=="number")return w.E()
$.aE=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.cv("self")
$.bG=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i0:function(a,b,c,d){var z,y
z=H.d3
y=H.ec
switch(b?-1:a){case 0:throw H.a(H.jT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i1:function(a,b){var z,y,x,w,v,u,t,s
z=$.bG
if(z==null){z=H.cv("self")
$.bG=z}y=$.eb
if(y==null){y=H.cv("receiver")
$.eb=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aE
if(typeof y!=="number")return y.E()
$.aE=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aE
if(typeof y!=="number")return y.E()
$.aE=y+1
return new Function(z+y+"}")()},
dP:function(a,b,c,d,e,f,g){var z,y
z=J.bK(H.c4(b))
H.F(c)
y=!!J.K(d).$isd?J.bK(d):d
return H.i2(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
nU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
dN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
hA:function(a,b){throw H.a(H.aB(a,H.I(b).substring(3)))},
nW:function(a,b){var z=J.aK(b)
throw H.a(H.hZ(a,z.u(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.hA(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.nW(a,b)},
c4:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.a(H.aB(a,"List"))},
hx:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.hA(a,b)},
hr:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cp:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hr(J.K(a))
if(z==null)return!1
y=H.hu(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dK)return a
$.dK=!0
try{if(H.cp(a,b))return a
z=H.cr(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dK=!1}},
dT:function(a,b){if(a!=null&&!H.dO(a,b))H.r(H.aB(a,H.cr(b)))
return a},
hk:function(a){var z
if(a instanceof H.m){z=H.hr(J.K(a))
if(z!=null)return H.cr(z)
return"Closure"}return H.bl(a)},
o2:function(a){throw H.a(new P.ia(H.I(a)))},
hs:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
pB:function(a,b,c){return H.bE(a["$as"+H.j(c)],H.b9(b))},
b8:function(a,b,c,d){var z
H.I(c)
H.F(d)
z=H.bE(a["$as"+H.j(c)],H.b9(b))
return z==null?null:z[d]},
ak:function(a,b,c){var z
H.I(b)
H.F(c)
z=H.bE(a["$as"+H.j(b)],H.b9(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.b9(a)
return z==null?null:z[b]},
cr:function(a){var z=H.ba(a,null)
return z},
ba:function(a,b){var z,y
H.v(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dV(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.n7(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ba(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ba(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ba(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nu(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dV:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ba(u,c)}v="<"+z.i(0)+">"
return v},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b9(a)
y=J.K(a)
if(y[b]==null)return!1
return H.hn(H.bE(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.I(b)
H.c4(c)
H.I(d)
if(a==null)return a
z=H.c1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dV(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hn:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.av(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.av(a[y],b,c[y],d))return!1
return!0},
pz:function(a,b,c){return a.apply(b,H.bE(J.K(b)["$as"+H.j(c)],H.b9(b)))},
hw:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="M"||a===-1||a===-2||H.hw(z)}return!1},
dO:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="M"||b===-1||b===-2||H.hw(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cp(a,b)}y=J.K(a).constructor
x=H.b9(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.av(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dO(a,b))throw H.a(H.aB(a,H.cr(b)))
return a},
av:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="M")return!0
if('func' in c)return H.hu(a,b,c,d)
if('func' in a)return c.builtin$cls==="ca"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,x,d)
else if(H.av(a,b,x,d))return!0
else{if(!('$is'+"bJ" in y.prototype))return!1
w=y.prototype["$as"+"bJ"]
v=H.bE(w,z?a.slice(1):null)
return H.av(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cr(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hn(H.bE(r,z),b,u,d)},
hu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.av(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.av(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.av(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.av(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nT(m,b,l,d)},
nT:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.av(c[w],d,a[w],b))return!1}return!0},
pA:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nK:function(a){var z,y,x,w,v,u
z=H.I($.ht.$1(a))
y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cX[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hm.$2(a,z))
if(z!=null){y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cX[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cY(x)
$.cU[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cX[z]=x
return x}if(v==="-"){u=H.cY(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hz(a,x)
if(v==="*")throw H.a(P.ck(z))
if(init.leafTags[z]===true){u=H.cY(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hz(a,x)},
hz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cY:function(a){return J.dW(a,!1,null,!!a.$isJ)},
nS:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cY(z)
else return J.dW(z,c,null,null)},
nF:function(){if(!0===$.dU)return
$.dU=!0
H.nG()},
nG:function(){var z,y,x,w,v,u,t,s
$.cU=Object.create(null)
$.cX=Object.create(null)
H.nB()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hB.$1(v)
if(u!=null){t=H.nS(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nB:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bA(C.R,H.bA(C.W,H.bA(C.x,H.bA(C.x,H.bA(C.V,H.bA(C.S,H.bA(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ht=new H.nC(v)
$.hm=new H.nD(u)
$.hB=new H.nE(t)},
bA:function(a,b){return a(b)||b},
hC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dZ:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i5:{"^":"b;$ti",
i:function(a){return P.di(this)},
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.i6()},
$isL:1},
i7:{"^":"i5;a,b,c,$ti",
gm:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bp(0,b))return
return this.d7(b)},
d7:function(a){return this.b[H.I(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.d7(v),z))}}},
jI:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jJ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bK(z)
y=z[0]
x=z[1]
return new H.jI(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ko:{"^":"b;a,b,c,d,e,f",
ac:function(a){var z,y,x
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
aH:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ko(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jn:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eU:function(a,b){return new H.jn(a,b==null?null:b.method)}}},
iL:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
de:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iL(a,y,z?null:b.receiver)}}},
kC:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
o4:{"^":"m:19;a",
$1:function(a){if(!!J.K(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h0:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bl(this).trim()+"'"},
geB:function(){return this},
$isca:1,
geB:function(){return this}},
fa:{"^":"m;"},
k6:{"^":"fa;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d2:{"^":"fa;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bP(this.a)
else y=typeof z!=="object"?J.c5(z):H.bP(z)
return(y^H.bP(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
t:{
d3:function(a){return a.a},
ec:function(a){return a.c},
cv:function(a){var z,y,x,w,v
z=new H.d2("self","target","receiver","name")
y=J.bK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kp:{"^":"a8;a",
i:function(a){return this.a},
t:{
aB:function(a,b){return new H.kp("TypeError: "+H.j(P.cx(a))+": type '"+H.hk(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"a8;a",
i:function(a){return this.a},
t:{
hZ:function(a,b){return new H.hY("CastError: "+H.j(P.cx(a))+": type '"+H.hk(a)+"' is not a subtype of type '"+b+"'")}}},
jS:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jT:function(a){return new H.jS(a)}}},
b5:{"^":"eM;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gib:function(a){return this.a===0},
ga6:function(a){return new H.iR(this,[H.y(this,0)])},
bp:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d3(y,b)}else return this.i8(b)},
i8:function(a){var z=this.d
if(z==null)return!1
return this.cA(this.bY(z,this.cz(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bi(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bi(w,b)
x=y==null?null:y.b
return x}else return this.i9(b)},
i9:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bY(z,this.cz(a))
x=this.cA(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c_()
this.b=z}this.cW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c_()
this.c=y}this.cW(y,b,c)}else this.ia(b,c)},
ia:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.c_()
this.d=z}y=this.cz(a)
x=this.bY(z,y)
if(x==null)this.c7(z,y,[this.c0(a,b)])
else{w=this.cA(x,a)
if(w>=0)x[w].b=b
else x.push(this.c0(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aM(this))
z=z.c}},
cW:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bi(a,b)
if(z==null)this.c7(a,b,this.c0(b,c))
else z.b=c},
fm:function(){this.r=this.r+1&67108863},
c0:function(a,b){var z,y
z=new H.iQ(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fm()
return z},
cz:function(a){return J.c5(a)&0x3ffffff},
cA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.di(this)},
bi:function(a,b){return a[b]},
bY:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
fh:function(a,b){delete a[b]},
d3:function(a,b){return this.bi(a,b)!=null},
c_:function(){var z=Object.create(null)
this.c7(z,"<non-identifier-key>",z)
this.fh(z,"<non-identifier-key>")
return z},
$iseJ:1},
iQ:{"^":"b;a,b,0c,0d"},
iR:{"^":"ev;a,$ti",
gm:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.iS(z,z.r,this.$ti)
y.c=z.e
return y}},
iS:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aM(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nC:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nD:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nE:{"^":"m:55;a",
$1:function(a){return this.a(H.I(a))}},
iJ:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseW:1,
$isjK:1,
t:{
iK:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nu:function(a){return J.eD(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
jh:function(a){return new Int8Array(a)},
aI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aJ(b,a))},
n1:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ns(a,b,c))
return b},
eS:{"^":"t;",$iseS:1,"%":"ArrayBuffer"},
dm:{"^":"t;",$isdm:1,$iskq:1,"%":"DataView;ArrayBufferView;dl|fV|fW|ji|fX|fY|b7"},
dl:{"^":"dm;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dS},
ji:{"^":"fW;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nt(c)
H.aI(b,a,a.length)
a[b]=c},
$ascy:function(){return[P.p]},
$asz:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$isd:1,
$asd:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
b7:{"^":"fY;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aI(b,a,a.length)
a[b]=c},
$ascy:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oG:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oH:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oI:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oJ:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oK:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oL:{"^":"b7;",
gm:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dn:{"^":"b7;",
gm:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
bN:function(a,b,c){return new Uint8Array(a.subarray(b,H.n1(b,c,a.length)))},
$isdn:1,
$isQ:1,
"%":";Uint8Array"},
fV:{"^":"dl+z;"},
fW:{"^":"fV+cy;"},
fX:{"^":"dl+z;"},
fY:{"^":"fX+cy;"}}],["","",,P,{"^":"",
l9:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bB(new P.lb(z),1)).observe(y,{childList:true})
return new P.la(z,y,x)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
pm:[function(a){self.scheduleImmediate(H.bB(new P.lc(H.l(a,{func:1,ret:-1})),0))},"$1","ne",4,0,12],
pn:[function(a){self.setImmediate(H.bB(new P.ld(H.l(a,{func:1,ret:-1})),0))},"$1","nf",4,0,12],
po:[function(a){P.dx(C.q,H.l(a,{func:1,ret:-1}))},"$1","ng",4,0,12],
dx:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a5(a.a,1000)
return P.mk(z<0?0:z,b)},
ff:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bs]})
z=C.e.a5(a.a,1000)
return P.ml(z<0?0:z,b)},
na:function(a,b){if(H.cp(a,{func:1,args:[P.b,P.aA]}))return b.iF(a,null,P.b,P.aA)
if(H.cp(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ct(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n9:function(){var z,y
for(;z=$.bz,z!=null;){$.c_=null
y=z.b
$.bz=y
if(y==null)$.bZ=null
z.a.$0()}},
py:[function(){$.dL=!0
try{P.n9()}finally{$.c_=null
$.dL=!1
if($.bz!=null)$.$get$dF().$1(P.ho())}},"$0","ho",0,0,3],
hj:function(a){var z=new P.fM(H.l(a,{func:1,ret:-1}))
if($.bz==null){$.bZ=z
$.bz=z
if(!$.dL)$.$get$dF().$1(P.ho())}else{$.bZ.b=z
$.bZ=z}},
nd:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bz
if(z==null){P.hj(a)
$.c_=$.bZ
return}y=new P.fM(a)
x=$.c_
if(x==null){y.b=z
$.c_=y
$.bz=y}else{y.b=x.b
x.b=y
$.c_=y
if(y.b==null)$.bZ=y}},
nX:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cT(null,null,C.j,a)
return}y.toString
P.cT(null,null,y,H.l(y.cc(a),z))},
fe:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dx(a,b)}return P.dx(a,H.l(y.cc(b),z))},
kl:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.ff(a,b)}x=y.dB(b,P.bs)
$.Y.toString
return P.ff(a,H.l(x,z))},
cS:function(a,b,c,d,e){var z={}
z.a=d
P.nd(new P.nb(z,e))},
hf:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
hg:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
nc:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cT:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cc(d):c.hL(d,-1)
P.hj(d)},
lb:{"^":"m:31;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
la:{"^":"m:52;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lc:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ld:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h4:{"^":"b;a,0b,c",
f3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.mn(this,b),0),a)
else throw H.a(P.C("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.mm(this,a,Date.now(),b),0),a)
else throw H.a(P.C("Periodic timer."))},
$isbs:1,
t:{
mk:function(a,b){var z=new P.h4(!0,0)
z.f3(a,b)
return z},
ml:function(a,b){var z=new P.h4(!1,0)
z.f4(a,b)
return z}}},
mn:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mm:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eQ(w,x)}z.c=y
this.d.$1(z)}},
bx:{"^":"b;0a,b,c,d,e,$ti",
ik:function(a){if(this.c!==6)return!0
return this.b.b.cL(H.l(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
i7:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cp(z,{func:1,args:[P.b,P.aA]}))return H.dT(w.iP(z,a.a,a.b,null,y,P.aA),x)
else return H.dT(w.cL(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b_:{"^":"b;dj:a<,b,0h1:c<,$ti",
er:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.na(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b_(0,$.Y,[c])
w=b==null?1:3
this.cX(new P.bx(x,w,a,b,[z,c]))
return x},
iV:function(a,b){return this.er(a,null,b)},
cX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbx")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb_")
z=y.a
if(z<4){y.cX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cT(null,null,z,H.l(new P.lt(this,a),{func:1,ret:-1}))}},
de:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbx")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb_")
y=u.a
if(y<4){u.de(a)
return}this.a=y
this.c=u.c}z.a=this.bl(a)
y=this.b
y.toString
P.cT(null,null,y,H.l(new P.ly(z,this),{func:1,ret:-1}))}},
c3:function(){var z=H.e(this.c,"$isbx")
this.c=null
return this.bl(z)},
bl:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d0:function(a){var z,y,x,w
z=H.y(this,0)
H.dT(a,{futureOr:1,type:z})
y=this.$ti
x=H.c1(a,"$isbJ",y,"$asbJ")
if(x){z=H.c1(a,"$isb_",y,null)
if(z)P.fQ(a,this)
else P.lu(a,this)}else{w=this.c3()
H.A(a,z)
this.a=4
this.c=a
P.bV(this,w)}},
bT:[function(a,b){var z
H.e(b,"$isaA")
z=this.c3()
this.a=8
this.c=new P.ap(a,b)
P.bV(this,z)},function(a){return this.bT(a,null)},"j5","$2","$1","gfc",4,2,51],
$isbJ:1,
t:{
lu:function(a,b){var z,y,x
b.a=1
try{a.er(new P.lv(b),new P.lw(b),null)}catch(x){z=H.ab(x)
y=H.bD(x)
P.nX(new P.lx(b,z,y))}},
fQ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb_")
if(z>=4){y=b.c3()
b.a=a.a
b.c=a.c
P.bV(b,y)}else{y=H.e(b.c,"$isbx")
b.a=2
b.c=a
a.de(y)}},
bV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bV(z.a,b)}y=z.a
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
if(p){H.e(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cS(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lA(x,b,r).$0()}else if((y&2)!==0)new P.lz(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.K(y).$isbJ){if(y.a>=4){n=H.e(t.c,"$isbx")
t.c=null
b=t.bl(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fQ(y,t)
return}}m=b.b
n=H.e(m.c,"$isbx")
m.c=null
b=m.bl(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
lt:{"^":"m:0;a,b",
$0:function(){P.bV(this.a,this.b)}},
ly:{"^":"m:0;a,b",
$0:function(){P.bV(this.b,this.a.a)}},
lv:{"^":"m:31;a",
$1:function(a){var z=this.a
z.a=0
z.d0(a)}},
lw:{"^":"m:50;a",
$2:function(a,b){this.a.bT(a,H.e(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
lx:{"^":"m:0;a,b,c",
$0:function(){this.a.bT(this.b,this.c)}},
lB:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ep(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bD(v)
if(this.d){w=H.e(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.K(z).$isbJ){if(z instanceof P.b_&&z.gdj()>=4){if(z.gdj()===8){w=this.b
w.b=H.e(z.gh1(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iV(new P.lC(t),null)
w.a=!1}}},
lC:{"^":"m:48;a",
$1:function(a){return this.a}},
lA:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cL(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bD(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lz:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isap")
w=this.c
if(w.ik(z)&&w.e!=null){v=this.b
v.b=w.i7(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bD(u)
w=H.e(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fM:{"^":"b;a,0b"},
du:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b_(0,$.Y,[P.n])
z.a=0
this.ih(new P.k9(z,this),!0,new P.ka(z,y),y.gfc())
return y}},
k9:{"^":"m;a,b",
$1:function(a){H.A(a,H.ak(this.b,"du",0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.ak(this.b,"du",0)]}}},
ka:{"^":"m:0;a,b",
$0:function(){this.b.d0(this.a.a)}},
f7:{"^":"b;$ti"},
k8:{"^":"b;"},
bs:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa8:1},
mQ:{"^":"b;",$ispl:1},
nb:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eV()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lW:{"^":"mQ;",
iQ:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hf(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cS(null,null,this,z,H.e(y,"$isaA"))}},
iR:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.hg(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cS(null,null,this,z,H.e(y,"$isaA"))}},
hL:function(a,b){return new P.lY(this,H.l(a,{func:1,ret:b}),b)},
cc:function(a){return new P.lX(this,H.l(a,{func:1,ret:-1}))},
dB:function(a,b){return new P.lZ(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ep:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hf(null,null,this,a,b)},
cL:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.hg(null,null,this,a,b,c,d)},
iP:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.nc(null,null,this,a,b,c,d,e,f)},
iF:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lY:{"^":"m;a,b,c",
$0:function(){return this.a.ep(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lX:{"^":"m:3;a,b",
$0:function(){return this.a.iQ(this.b)}},
lZ:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iR(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iT:function(a,b,c,d,e){return new H.b5(0,0,[d,e])},
iU:function(a,b,c){H.c4(a)
return H.v(H.nv(a,new H.b5(0,0,[b,c])),"$iseJ",[b,c],"$aseJ")},
dg:function(a,b){return new H.b5(0,0,[a,b])},
cf:function(a,b,c,d){return new P.lJ(0,0,[d])},
iF:function(a,b,c){var z,y
if(P.dM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c0()
C.a.h(y,a)
try{P.n8(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f8(b,H.hx(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
da:function(a,b,c){var z,y,x
if(P.dM(a))return b+"..."+c
z=new P.am(b)
y=$.$get$c0()
C.a.h(y,a)
try{x=z
x.a=P.f8(x.gaL(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaL()+c
y=z.gaL()
return y.charCodeAt(0)==0?y:y},
dM:function(a){var z,y
for(z=0;y=$.$get$c0(),z<y.length;++z)if(a===y[z])return!0
return!1},
n8:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.D();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iV:function(a,b,c){var z=P.iT(null,null,null,b,c)
a.K(0,new P.iW(z,b,c))
return z},
eK:function(a,b){var z,y
z=P.cf(null,null,null,b)
for(y=J.b1(a);y.D();)z.h(0,H.A(y.gM(y),b))
return z},
di:function(a){var z,y,x
z={}
if(P.dM(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$c0(),a)
x=y
x.a=x.gaL()+"{"
z.a=!0
J.e2(a,new P.j0(z,y))
z=y
z.a=z.gaL()+"}"}finally{z=$.$get$c0()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaL()
return z.charCodeAt(0)==0?z:z},
lJ:{"^":"lD;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){var z=new P.fU(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
T:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscP")!=null}else{y=this.fd(b)
return y}},
fd:function(a){var z=this.d
if(z==null)return!1
return this.bW(this.d8(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dH()
this.b=z}return this.cZ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dH()
this.c=y}return this.cZ(y,b)}else return this.f5(0,b)},
f5:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dH()
this.d=z}y=this.d1(b)
x=z[y]
if(x==null)z[y]=[this.bS(b)]
else{if(this.bW(x,b)>=0)return!1
x.push(this.bS(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.df(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.df(this.c,b)
else return this.fU(0,b)},
fU:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.d8(z,b)
x=this.bW(y,b)
if(x<0)return!1
this.dl(y.splice(x,1)[0])
return!0},
cZ:function(a,b){H.A(b,H.y(this,0))
if(H.e(a[b],"$iscP")!=null)return!1
a[b]=this.bS(b)
return!0},
df:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscP")
if(z==null)return!1
this.dl(z)
delete a[b]
return!0},
d_:function(){this.r=this.r+1&67108863},
bS:function(a){var z,y
z=new P.cP(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d_()
return z},
dl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d_()},
d1:function(a){return J.c5(a)&0x3ffffff},
d8:function(a,b){return a[this.d1(b)]},
bW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
t:{
dH:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cP:{"^":"b;a,0b,0c"},
fU:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aM(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lD:{"^":"jU;"},
iW:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cD:{"^":"lK;",$isi:1,$isd:1},
z:{"^":"b;$ti",
gX:function(a){return new H.dh(a,this.gm(a),0,[H.b8(this,a,"z",0)])},
I:function(a,b){return this.j(a,b)},
iY:function(a,b){var z,y,x
z=H.c([],[H.b8(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
iX:function(a){return this.iY(a,!0)},
aF:function(a,b,c,d){var z
H.A(d,H.b8(this,a,"z",0))
P.aS(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.da(a,"[","]")}},
eM:{"^":"ai;"},
j0:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b8(this,a,"ai",0),H.b8(this,a,"ai",1)]})
for(z=J.b1(this.ga6(a));z.D();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.ao(this.ga6(a))},
i:function(a){return P.di(a)},
$isL:1},
ms:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.C("Cannot modify unmodifiable map"))}},
j1:{"^":"b;$ti",
j:function(a,b){return J.e1(this.a,b)},
p:function(a,b,c){J.cZ(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
K:function(a,b){J.e2(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isL:1},
fB:{"^":"mt;a,$ti"},
jW:{"^":"b;$ti",
aq:function(a,b){var z
for(z=J.b1(H.v(b,"$isi",this.$ti,"$asi"));z.D();)this.h(0,z.gM(z))},
i:function(a){return P.da(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e6("index"))
if(b<0)H.r(P.a3(b,0,null,"index",null))
for(z=new P.fU(this,this.r,this.$ti),z.c=this.e,y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jU:{"^":"jW;"},
lK:{"^":"b+z;"},
mt:{"^":"j1+ms;$ti"}}],["","",,P,{"^":"",hV:{"^":"c7;a",
io:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aS(c,d,b.length,null,null,null)
z=$.$get$fO()
if(typeof d!=="number")return H.q(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cW(C.b.F(b,s))
o=H.cW(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.u(b,x,y)
w.a+=H.bQ(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.e9(b,u,d,v,t,k)
else{j=C.e.be(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aV(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e9(b,u,d,v,t,i)
else{j=C.e.be(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aV(b,d,d,j===2?"==":"=")}return b},
$asc7:function(){return[[P.d,P.n],P.h]},
t:{
e9:function(a,b,c,d,e,f){if(C.e.be(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},hW:{"^":"b3;a",
$asb3:function(){return[[P.d,P.n],P.h]}},c7:{"^":"b;$ti"},b3:{"^":"k8;$ti"},io:{"^":"c7;",
$asc7:function(){return[P.h,[P.d,P.n]]}},iC:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iB:{"^":"b3;a",
fe:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.am("")
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hQ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb3:function(){return[P.h,P.h]}},kO:{"^":"io;a",
ghZ:function(){return C.L}},kV:{"^":"b3;",
b2:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mO(0,0,x)
if(w.fj(a,b,z)!==z)w.dn(J.hJ(a,z-1),0)
return C.a2.bN(x,0,w.b)},
cj:function(a){return this.b2(a,0,null)},
$asb3:function(){return[P.h,[P.d,P.n]]}},mO:{"^":"b;a,b,c",
dn:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
fj:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dn(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}},kP:{"^":"b3;a",
b2:function(a,b,c){var z,y,x,w,v
H.v(a,"$isd",[P.n],"$asd")
z=P.kQ(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aS(b,c,y,null,null,null)
x=new P.am("")
w=new P.mL(!1,x,!0,0,0,0)
w.b2(a,b,y)
w.i3(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cj:function(a){return this.b2(a,0,null)},
$asb3:function(){return[[P.d,P.n],P.h]},
t:{
kQ:function(a,b,c,d){H.v(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.kR(!1,b,c,d)
return},
kR:function(a,b,c,d){var z,y,x
z=$.$get$fH()
if(z==null)return
y=0===c
if(y&&!0)return P.dC(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.dC(z,b)
return P.dC(z,b.subarray(c,d))},
dC:function(a,b){if(P.kT(b))return
return P.kU(a,b)},
kU:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kT:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kS:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mL:{"^":"b;a,b,c,d,e,f",
i3:function(a,b,c){var z
H.v(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mN(c)
v=new P.mM(this,b,c,a)
$label0$0:for(u=J.aK(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bK()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.e.ba(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a0("Overlong encoding of 0x"+C.e.ba(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.e.ba(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bQ(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cP()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.e.ba(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.e.ba(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mN:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aK(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bK()
if((w&127)!==w)return x-b}return z-b}},mM:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cj(this.d,a,b)}}}],["","",,P,{"^":"",
cq:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jB(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
iq:function(a){var z=J.K(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bl(a)+"'"},
iX:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iH(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
iY:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.D();)C.a.h(y,H.A(x.gM(x),c))
if(b)return y
return H.v(J.bK(y),"$isd",z,"$asd")},
cj:function(a,b,c){var z,y
z=P.n
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aS(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.eZ(z?C.a.bN(a,b,c):a)}if(!!J.K(a).$isdn)return H.jD(a,b,P.aS(b,c,a.length,null,null,null))
return P.kb(a,b,c)},
kb:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a3(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a3(c,b,J.ao(a),null,null))
y=J.b1(a)
for(x=0;x<b;++x)if(!y.D())throw H.a(P.a3(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.D())throw H.a(P.a3(c,b,x,null,null))
w.push(y.gM(y))}return H.eZ(w)},
jL:function(a,b,c){return new H.iJ(a,H.iK(a,!1,!0,!1))},
fD:function(){var z=H.jt()
if(z!=null)return P.kI(z,0,null)
throw H.a(P.C("'Uri.base' is not supported"))},
cx:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iq(a)},
u:function(a){return new P.fP(a)},
iZ:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dY:function(a){H.nV(a)},
kI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.fC(b>0||c<c?C.b.u(a,b,c):a,5,null).gev()
else if(y===32)return P.fC(C.b.u(a,z,c),0,null).gev()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hh(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.j0()
if(v>=b)if(P.hh(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.q(r)
if(q<r)r=q
if(typeof s!=="number")return s.P()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.P()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.P()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aV(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.u(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.m4(a,v,u,t,s,r,q,o)}return P.mu(a,b,c,v,u,t,s,r,q,o)},
fF:function(a,b){var z=P.h
return C.a.i4(H.c(a.split("&"),[z]),P.dg(z,z),new P.kL(b),[P.L,P.h,P.h])},
kG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kH(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.W(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cq(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.cP()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cq(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.cP()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kJ(a)
y=new P.kK(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.W(a,w)
if(s===58){if(w===b){++w
if(C.b.W(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gau(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kG(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.e.aO(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n2:function(){var z,y,x,w,v
z=P.iZ(22,new P.n4(),!0,P.Q)
y=new P.n3(z)
x=new P.n5()
w=new P.n6()
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
hh:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isd",[P.n],"$asd")
z=$.$get$hi()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
S:{"^":"b;"},
"+bool":0,
aF:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gU:function(a){var z=this.a
return(z^C.e.aO(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ic(H.jA(this))
y=P.c9(H.jy(this))
x=P.c9(H.ju(this))
w=P.c9(H.jv(this))
v=P.c9(H.jx(this))
u=P.c9(H.jz(this))
t=P.id(H.jw(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
ic:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
id:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c9:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a5;"},
"+double":0,
be:{"^":"b;a",
k:function(a,b){return new P.be(C.e.ae(this.a*b))},
P:function(a,b){return C.e.P(this.a,H.e(b,"$isbe").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ij()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.e.a5(y,6e7)%60)
w=z.$1(C.e.a5(y,1e6)%60)
v=new P.ii().$1(y%1e6)
return""+C.e.a5(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
eu:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ii:{"^":"m:30;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ij:{"^":"m:30;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eV:{"^":"a8;",
i:function(a){return"Throw of null."}},
aD:{"^":"a8;a,b,c,d",
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbV()+y+x
if(!this.a)return w
v=this.gbU()
u=P.cx(this.b)
return w+v+": "+H.j(u)},
t:{
c6:function(a){return new P.aD(!1,null,null,a)},
ct:function(a,b,c){return new P.aD(!0,a,b,c)},
e6:function(a){return new P.aD(!1,null,a,"Must not be null")}}},
cG:{"^":"aD;e,f,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
ci:function(a,b,c){return new P.cG(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.a3(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.a3(b,a,c,"end",f))
return b}return c}}},
iD:{"^":"aD;e,m:f>,a,b,c,d",
gbV:function(){return"RangeError"},
gbU:function(){if(J.hF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.iD(b,z,!0,a,c,"Index out of range")}}},
kE:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
C:function(a){return new P.kE(a)}}},
kB:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ck:function(a){return new P.kB(a)}}},
dt:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
t:{
f6:function(a){return new P.dt(a)}}},
i4:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cx(z))+"."},
t:{
aM:function(a){return new P.i4(a)}}},
jo:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
f4:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
ia:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fP:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
ix:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.W(w,s)
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a0:function(a,b,c){return new P.ix(a,b,c)}}},
ca:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
cO:["eL",function(a,b){var z=H.ak(this,"i",0)
return new H.dE(this,H.l(b,{func:1,ret:P.S,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gX(this)
for(y=0;z.D();)++y
return y},
gaH:function(a){var z,y
z=this.gX(this)
if(!z.D())throw H.a(H.cC())
y=z.gM(z)
if(z.D())throw H.a(H.iG())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e6("index"))
if(b<0)H.r(P.a3(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.D();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iF(this,"(",")")}},
db:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
L:{"^":"b;$ti"},
M:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gU:function(a){return H.bP(this)},
i:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"b;"},
h:{"^":"b;",$iseW:1},
"+String":0,
am:{"^":"b;aL:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isp5:1,
t:{
f8:function(a,b,c){var z=J.b1(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.D())}else{a+=H.j(z.gM(z))
for(;z.D();)a=a+c+H.j(z.gM(z))}return a}}},
kL:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.v(a,"$isL",[z,z],"$asL")
H.I(b)
y=J.aK(b).e6(b,"=")
if(y===-1){if(b!=="")J.cZ(a,P.dJ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.an(b,y+1)
z=this.a
J.cZ(a,P.dJ(x,0,x.length,z,!0),P.dJ(w,0,w.length,z,!0))}return a}},
kH:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
kJ:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kK:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cq(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cQ:{"^":"b;bM:a<,b,c,d,ek:e>,f,r,0x,0y,0z,0Q,0ch",
gew:function(){return this.b},
gcw:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbG:function(a){var z=this.d
if(z==null)return P.h6(this.a)
return z},
gcG:function(a){var z=this.f
return z==null?"":z},
ge1:function(){var z=this.r
return z==null?"":z},
cK:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.h,null],"$asL")
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
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dI(g,0,0,h)
return new P.cQ(i,j,c,f,d,g,this.r)},
eo:function(a,b){return this.cK(a,null,null,null,null,null,null,b,null,null)},
gcH:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fB(P.fF(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ge2:function(){return this.c!=null},
ge5:function(){return this.f!=null},
ge3:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
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
z=J.K(b)
if(!!z.$isdB){y=this.a
x=b.gbM()
if(y==null?x==null:y===x)if(this.c!=null===b.ge2()){y=this.b
x=b.gew()
if(y==null?x==null:y===x){y=this.gcw(this)
x=z.gcw(b)
if(y==null?x==null:y===x){y=this.gbG(this)
x=z.gbG(b)
if(y==null?x==null:y===x)if(this.e===z.gek(b)){y=this.f
x=y==null
if(!x===b.ge5()){if(x)y=""
if(y===z.gcG(b)){z=this.r
y=z==null
if(!y===b.ge3()){if(y)z=""
z=z===b.ge1()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdB:1,
t:{
co:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$hb().b
if(typeof b!=="string")H.r(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.ak(c,"c7",0))
y=c.ghZ().cj(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bQ(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mF(a,b,d)
else{if(d===b)P.bW(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mG(a,z,e-1):""
x=P.mz(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.mC(P.cq(C.b.u(a,w,g),new P.mv(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mA(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dI(a,h+1,i,null):null
return new P.cQ(j,y,x,v,u,t,i<c?P.my(a,i+1,c):null)},
h6:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bW:function(a,b,c){throw H.a(P.a0(c,a,b))},
mC:function(a,b){if(a!=null&&a===P.h6(b))return
return a},
mz:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.b.W(a,z)!==93)P.bW(a,b,"Missing end `]` to match `[` in host")
P.fE(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.W(a,y)===58){P.fE(a,b,c)
return"["+a+"]"}return P.mI(a,b,c)},
mI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.W(a,z)
if(v===37){u=P.hd(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bW(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.W(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h7(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mF:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h9(C.b.F(a,b)))P.bW(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bW(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mw(y?a.toLowerCase():a)},
mw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mG:function(a,b,c){return P.bX(a,b,c,C.a_)},
mA:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bX(a,b,c,C.D):C.w.jJ(d,new P.mB(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.mH(w,e,f)},
mH:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.mJ(a,!z||c)
return P.mK(a)},
dI:function(a,b,c,d){var z,y
z={}
H.v(d,"$isL",[P.h,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.c6("Both query and queryParameters specified"))
return P.bX(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.K(0,new P.mD(new P.mE(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
my:function(a,b,c){return P.bX(a,b,c,C.n)},
hd:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.W(a,b+1)
x=C.b.W(a,z)
w=H.cW(y)
v=H.cW(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aO(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bQ(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
h7:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.h9(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.cj(y,0,null)},
bX:function(a,b,c,d){var z=P.hc(a,b,c,H.v(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.u(a,b,c):z},
hc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.W(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hd(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bW(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.W(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h7(v)}}if(w==null)w=new P.am("")
w.a+=C.b.u(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
ha:function(a){if(C.b.a3(a,"."))return!0
return C.b.e6(a,"/.")!==-1},
mK:function(a){var z,y,x,w,v,u,t
if(!P.ha(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mJ:function(a,b){var z,y,x,w,v,u
if(!P.ha(a))return!b?P.h8(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gau(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gau(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h8(z[0]))}return C.a.n(z,"/")},
h8:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h9(J.hG(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.an(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mx:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c6("Invalid URL encoding"))}}return z},
dJ:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c3(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.w(y.u(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.c6("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c6("Truncated URI"))
C.a.h(u,P.mx(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isd",[P.n],"$asd")
return new P.kP(!1).cj(u)},
h9:function(a){var z=a|32
return 97<=z&&z<=122}}},
mv:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
mB:{"^":"m:28;",
$1:function(a){return P.co(C.a0,a,C.k,!1)}},
mE:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.co(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.co(C.p,b,C.k,!0))}}},
mD:{"^":"m:40;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.b1(H.hx(b,"$isi")),y=this.a;z.D();)y.$2(a,H.I(z.gM(z)))}},
kF:{"^":"b;a,b,c",
gev:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.e7(y,"?",z)
w=y.length
if(x>=0){v=P.bX(y,x+1,w,C.n)
w=x}else v=null
z=new P.li(this,"data",null,null,null,P.bX(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gau(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.io(0,a,s,y)
else{r=P.hc(a,s,y,C.n,!0)
if(r!=null)a=C.b.aV(a,s,y,r)}return new P.kF(a,z,c)}}},
n4:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
n3:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hK(z,0,96,b)
return z}},
n5:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
n6:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m4:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge2:function(){return this.c>0},
ge4:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
ge5:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
ge3:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.b.a3(this.a,"http")},
gdc:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbM:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gda()){this.x="http"
z="http"}else if(this.gdc()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gew:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcw:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbG:function(a){var z
if(this.ge4()){z=this.d
if(typeof z!=="number")return z.E()
return P.cq(C.b.u(this.a,z+1,this.e),null,null)}if(this.gda())return 80
if(this.gdc())return 443
return 0},
gek:function(a){return C.b.u(this.a,this.e,this.f)},
gcG:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.u(this.a,z+1,y):""},
ge1:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.an(y,z+1):""},
gcH:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.a1
z=P.h
return new P.fB(P.fF(this.gcG(this),C.k),[z,z])},
cK:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isL",[P.h,null],"$asL")
i=this.gbM()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.ge4()?this.gbG(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dI(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.an(y,x+1)
return new P.cQ(i,j,c,f,d,g,b)},
eo:function(a,b){return this.cK(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdB)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdB:1},
li:{"^":"cQ;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e5:function(a){var z=document.createElement("a")
return z},
d5:function(a,b){var z=document.createElement("canvas")
return z},
ik:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).aj(z,a,b,c)
y.toString
z=W.G
z=new H.dE(new W.au(y),H.l(new W.il(),{func:1,ret:P.S,args:[z]}),[z])
return H.e(z.gaH(z),"$isV")},
im:function(a){H.e(a,"$isaf")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iE:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseC")
try{J.hP(z,a)}catch(x){H.ab(x)}return z},
cN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fT:function(a,b,c,d){var z,y
z=W.cN(W.cN(W.cN(W.cN(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hl:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dB(a,b)},
Z:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
o6:{"^":"t;0m:length=","%":"AccessibleNodeList"},
o7:{"^":"Z;0a1:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o8:{"^":"Z;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ea:{"^":"Z;",$isea:1,"%":"HTMLBaseElement"},
d1:{"^":"t;",$isd1:1,"%":";Blob"},
cu:{"^":"Z;",$iscu:1,"%":"HTMLBodyElement"},
oe:{"^":"Z;0a1:type}","%":"HTMLButtonElement"},
d4:{"^":"Z;",
bL:function(a,b,c){if(c!=null)return a.getContext(b,P.ni(c,null))
return a.getContext(b)},
eD:function(a,b){return this.bL(a,b,null)},
$isd4:1,
"%":"HTMLCanvasElement"},
eh:{"^":"t;",$iseh:1,"%":"CanvasRenderingContext2D"},
og:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oi:{"^":"i9;0m:length=","%":"CSSPerspective"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oj:{"^":"lh;0m:length=",
eE:function(a,b){var z=a.getPropertyValue(this.f9(a,b))
return z==null?"":z},
f9:function(a,b){var z,y
z=$.$get$em()
y=z[b]
if(typeof y==="string")return y
y=this.ha(a,b)
z[b]=y
return y},
ha:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ie()+b
if(z in a)return z
return b},
gcd:function(a){return a.bottom},
gat:function(a){return a.height},
gaR:function(a){return a.left},
gbJ:function(a){return a.right},
gbb:function(a){return a.top},
gax:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i8:{"^":"b;",
gaR:function(a){return this.eE(a,"left")}},
en:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i9:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ok:{"^":"en;0m:length=","%":"CSSTransformValue"},
ol:{"^":"en;0m:length=","%":"CSSUnparsedValue"},
om:{"^":"t;0m:length=","%":"DataTransferItemList"},
bd:{"^":"Z;",$isbd:1,"%":"HTMLDivElement"},
on:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
oo:{"^":"lk;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.v(c,"$isad",[P.a5],"$asad")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ad,P.a5]]},
$asz:function(){return[[P.ad,P.a5]]},
$isi:1,
$asi:function(){return[[P.ad,P.a5]]},
$isd:1,
$asd:function(){return[[P.ad,P.a5]]},
$asE:function(){return[[P.ad,P.a5]]},
"%":"ClientRectList|DOMRectList"},
ih:{"^":"t;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gax(a))+" x "+H.j(this.gat(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c1(b,"$isad",[P.a5],"$asad")
if(!z)return!1
z=J.aC(b)
return a.left===z.gaR(b)&&a.top===z.gbb(b)&&this.gax(a)===z.gax(b)&&this.gat(a)===z.gat(b)},
gU:function(a){return W.fT(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gax(a)&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF)},
gcd:function(a){return a.bottom},
gat:function(a){return a.height},
gaR:function(a){return a.left},
gbJ:function(a){return a.right},
gbb:function(a){return a.top},
gax:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
op:{"^":"lm;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.I(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"DOMStringList"},
oq:{"^":"t;0m:length=","%":"DOMTokenList"},
lg:{"^":"cD;d6:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isV")},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.iX(this)
return new J.aw(z,z.length,0,[H.y(z,0)])},
aF:function(a,b,c,d){throw H.a(P.ck(null))},
$asz:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"G;0iS:tagName=",
ghK:function(a){return new W.ln(a)},
gci:function(a){return new W.lg(a,a.children)},
gdC:function(a){return P.jH(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
aj:["bO",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ex
if(z==null){z=H.c([],[W.aG])
y=new W.eT(z)
C.a.h(z,W.fR(null))
C.a.h(z,W.h1())
$.ex=y
d=y}else d=z
z=$.ew
if(z==null){z=new W.he(d)
$.ew=z
c=z}else{z.a=d
c=z}}if($.aN==null){z=document
y=z.implementation.createHTMLDocument("")
$.aN=y
$.d7=y.createRange()
y=$.aN
y.toString
y=y.createElement("base")
H.e(y,"$isea")
y.href=z.baseURI
$.aN.head.appendChild(y)}z=$.aN
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscu")}z=$.aN
if(!!this.$iscu)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aN.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.Z,a.tagName)){$.d7.selectNodeContents(x)
w=$.d7.createContextualFragment(b)}else{x.innerHTML=b
w=$.aN.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aN.body
if(x==null?z!=null:x!==z)J.e4(x)
c.cQ(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aj(a,b,c,null)},"hS",null,null,"gjG",5,5,null],
eI:function(a,b,c,d){a.textContent=null
a.appendChild(this.aj(a,b,c,d))},
eH:function(a,b){return this.eI(a,b,null,null)},
$isV:1,
"%":";Element"},
il:{"^":"m:24;",
$1:function(a){return!!J.K(H.e(a,"$isG")).$isV}},
or:{"^":"Z;0a1:type}","%":"HTMLEmbedElement"},
ae:{"^":"t;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"t;",
ds:["eJ",function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(c!=null)this.f6(a,b,c,!1)}],
f6:function(a,b,c,d){return a.addEventListener(b,H.bB(H.l(c,{func:1,args:[W.ae]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fZ|h_|h2|h3"},
b4:{"^":"d1;",$isb4:1,"%":"File"},
ey:{"^":"ls;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isb4")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b4]},
$asz:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$isey:1,
$asE:function(){return[W.b4]},
"%":"FileList"},
os:{"^":"af;0m:length=","%":"FileWriter"},
ot:{"^":"Z;0m:length=","%":"HTMLFormElement"},
bg:{"^":"t;",$isbg:1,"%":"Gamepad"},
ou:{"^":"t;0m:length=","%":"History"},
ov:{"^":"lF;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cb:{"^":"t;0dE:data=",$iscb:1,"%":"ImageData"},
eB:{"^":"Z;",$iseB:1,"%":"HTMLImageElement"},
eC:{"^":"Z;0a1:type}",$iseC:1,"%":"HTMLInputElement"},
bL:{"^":"dy;",$isbL:1,"%":"KeyboardEvent"},
oz:{"^":"Z;0a1:type}","%":"HTMLLinkElement"},
oA:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
oB:{"^":"t;0m:length=","%":"MediaList"},
oC:{"^":"af;",
ds:function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.eJ(a,b,c,!1)},
"%":"MessagePort"},
oD:{"^":"lL;",
j:function(a,b){return P.b0(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.je(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"MIDIInputMap"},
je:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oE:{"^":"lM;",
j:function(a,b){return P.b0(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jf(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jf:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
oF:{"^":"lO;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbj")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asE:function(){return[W.bj]},
"%":"MimeTypeArray"},
ay:{"^":"dy;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
au:{"^":"cD;a",
gaH:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f6("No elements"))
if(y>1)throw H.a(P.f6("More than one element"))
return z.firstChild},
aq:function(a,b){var z,y,x,w
H.v(b,"$isi",[W.G],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.e(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gX:function(a){var z=this.a.childNodes
return new W.ez(z,z.length,-1,[H.b8(C.a3,z,"E",0)])},
aF:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.G]},
$asi:function(){return[W.G]},
$asd:function(){return[W.G]}},
G:{"^":"af;0cF:previousSibling=",
iG:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iL:function(a,b){var z,y
try{z=a.parentNode
J.hH(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eK(a):z},
fX:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oM:{"^":"t;",
iD:[function(a){return a.previousNode()},"$0","gcF",1,0,26],
"%":"NodeIterator"},
jj:{"^":"lQ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
oP:{"^":"Z;0a1:type}","%":"HTMLOListElement"},
oQ:{"^":"Z;0a1:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oT:{"^":"lU;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbk")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asE:function(){return[W.bk]},
"%":"PluginArray"},
oV:{"^":"t;0a1:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oW:{"^":"m_;",
j:function(a,b){return P.b0(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jR(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jR:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oY:{"^":"Z;0a1:type}","%":"HTMLScriptElement"},
oZ:{"^":"Z;0m:length=","%":"HTMLSelectElement"},
bm:{"^":"af;",$isbm:1,"%":"SourceBuffer"},
p_:{"^":"h_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbm")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asE:function(){return[W.bm]},
"%":"SourceBufferList"},
p0:{"^":"Z;0a1:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
p1:{"^":"m6;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbn")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
p3:{"^":"m9;",
j:function(a,b){return a.getItem(H.I(b))},
p:function(a,b,c){a.setItem(b,H.I(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.k7(z))
return z},
gm:function(a){return a.length},
$asai:function(){return[P.h,P.h]},
$isL:1,
$asL:function(){return[P.h,P.h]},
"%":"Storage"},
k7:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p6:{"^":"Z;0a1:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
dv:{"^":"Z;",$isdv:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kc:{"^":"Z;",
aj:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
z=W.ik("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.au(y).aq(0,new W.au(z))
return y},
"%":"HTMLTableElement"},
p8:{"^":"Z;",
aj:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.au(z)
x=z.gaH(z)
x.toString
z=new W.au(x)
w=z.gaH(z)
y.toString
w.toString
new W.au(y).aq(0,new W.au(w))
return y},
"%":"HTMLTableRowElement"},
p9:{"^":"Z;",
aj:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.au(z)
x=z.gaH(z)
y.toString
x.toString
new W.au(y).aq(0,new W.au(x))
return y},
"%":"HTMLTableSectionElement"},
fb:{"^":"Z;",$isfb:1,"%":"HTMLTemplateElement"},
bq:{"^":"af;",$isbq:1,"%":"TextTrack"},
br:{"^":"af;",$isbr:1,"%":"TextTrackCue|VTTCue"},
pb:{"^":"mj;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbr")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"TextTrackCueList"},
pc:{"^":"h3;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbq")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"TextTrackList"},
pd:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"dy;",$isbu:1,"%":"TouchEvent"},
pe:{"^":"mp;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbt")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asE:function(){return[W.bt]},
"%":"TouchList"},
pf:{"^":"t;0m:length=","%":"TrackDefaultList"},
ph:{"^":"t;",
iD:[function(a){return a.previousNode()},"$0","gcF",1,0,26],
"%":"TreeWalker"},
dy:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pj:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
pk:{"^":"af;0m:length=","%":"VideoTrackList"},
bU:{"^":"ay;",
ghV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.C("deltaY is not supported"))},
ghU:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.C("deltaX is not supported"))},
$isbU:1,
"%":"WheelEvent"},
l8:{"^":"af;",
fY:function(a,b){return a.requestAnimationFrame(H.bB(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fi:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fN:{"^":"G;",$isfN:1,"%":"Attr"},
pp:{"^":"mS;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbc")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bc]},
$asz:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asE:function(){return[W.bc]},
"%":"CSSRuleList"},
pq:{"^":"ih;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c1(b,"$isad",[P.a5],"$asad")
if(!z)return!1
z=J.aC(b)
return a.left===z.gaR(b)&&a.top===z.gbb(b)&&a.width===z.gax(b)&&a.height===z.gat(b)},
gU:function(a){return W.fT(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gat:function(a){return a.height},
gax:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ps:{"^":"mU;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbg")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asz:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asE:function(){return[W.bg]},
"%":"GamepadList"},
pv:{"^":"mW;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pw:{"^":"mY;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbo")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asE:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
px:{"^":"n_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbp")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"StyleSheetList"},
le:{"^":"eM;d6:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga6(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga6:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfN")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asai:function(){return[P.h,P.h]},
$asL:function(){return[P.h,P.h]}},
ln:{"^":"le;a",
j:function(a,b){return this.a.getAttribute(H.I(b))},
p:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gm:function(a){return this.ga6(this).length}},
lo:{"^":"du;a,b,c,$ti",
ih:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
pr:{"^":"lo;a,b,c,$ti"},
lp:{"^":"f7;a,b,c,d,e,$ti",
he:function(){var z=this.d
if(z!=null&&this.a<=0)J.hI(this.b,this.c,z,!1)},
t:{
a4:function(a,b,c,d,e){var z=c==null?null:W.hl(new W.lq(c),W.ae)
z=new W.lp(0,a,b,z,!1,[e])
z.he()
return z}}},
lq:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.e(a,"$isae"))}},
cn:{"^":"b;a",
eZ:function(a){var z,y
z=$.$get$dG()
if(z.gib(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nz())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nA())}},
aP:function(a){return $.$get$fS().T(0,W.bH(a))},
aC:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dG()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dN(x.$4(a,b,c,this))},
$isaG:1,
t:{
fR:function(a){var z,y
z=W.e5(null)
y=window.location
z=new W.cn(new W.m0(z,y))
z.eZ(a)
return z},
pt:[function(a,b,c,d){H.e(a,"$isV")
H.I(b)
H.I(c)
H.e(d,"$iscn")
return!0},"$4","nz",16,0,32],
pu:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isV")
H.I(b)
H.I(c)
z=H.e(d,"$iscn").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","nA",16,0,32]}},
E:{"^":"b;$ti",
gX:function(a){return new W.ez(a,this.gm(a),-1,[H.b8(this,a,"E",0)])},
aF:function(a,b,c,d){H.A(d,H.b8(this,a,"E",0))
throw H.a(P.C("Cannot modify an immutable List."))}},
eT:{"^":"b;a",
aP:function(a){return C.a.du(this.a,new W.jl(a))},
aC:function(a,b,c){return C.a.du(this.a,new W.jk(a,b,c))},
$isaG:1},
jl:{"^":"m:15;a",
$1:function(a){return H.e(a,"$isaG").aP(this.a)}},
jk:{"^":"m:15;a,b,c",
$1:function(a){return H.e(a,"$isaG").aC(this.a,this.b,this.c)}},
m1:{"^":"b;",
f1:function(a,b,c,d){var z,y,x
this.a.aq(0,c)
z=b.cO(0,new W.m2())
y=b.cO(0,new W.m3())
this.b.aq(0,z)
x=this.c
x.aq(0,C.A)
x.aq(0,y)},
aP:function(a){return this.a.T(0,W.bH(a))},
aC:["eP",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.T(0,H.j(z)+"::"+b))return this.d.hH(c)
else if(y.T(0,"*::"+b))return this.d.hH(c)
else{y=this.b
if(y.T(0,H.j(z)+"::"+b))return!0
else if(y.T(0,"*::"+b))return!0
else if(y.T(0,H.j(z)+"::*"))return!0
else if(y.T(0,"*::*"))return!0}return!1}],
$isaG:1},
m2:{"^":"m:29;",
$1:function(a){return!C.a.T(C.t,H.I(a))}},
m3:{"^":"m:29;",
$1:function(a){return C.a.T(C.t,H.I(a))}},
mg:{"^":"m1;e,a,b,c,d",
aC:function(a,b,c){if(this.eP(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.T(0,b)
return!1},
t:{
h1:function(){var z,y,x,w,v
z=P.h
y=P.eK(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mh(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mg(y,P.cf(null,null,null,z),P.cf(null,null,null,z),P.cf(null,null,null,z),null)
y.f1(null,new H.j4(C.r,w,[x,z]),v,null)
return y}}},
mh:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))}},
mf:{"^":"b;",
aP:function(a){var z=J.K(a)
if(!!z.$isf1)return!1
z=!!z.$iscH
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aP(a)},
$isaG:1},
ez:{"^":"b;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e1(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
aG:{"^":"b;"},
m0:{"^":"b;a,b",$ispi:1},
he:{"^":"b;a",
cQ:function(a){new W.mP(this).$2(a,null)},
b_:function(a,b){if(b==null)J.e4(a)
else b.removeChild(a)},
h3:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hL(a)
x=y.gd6().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.ab(t)}try{u=W.bH(a)
this.h2(H.e(a,"$isV"),b,z,v,u,H.e(y,"$isL"),H.I(x))}catch(t){if(H.ab(t) instanceof P.aD)throw t
else{this.b_(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
h2:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aP(a)){this.b_(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aC(a,"is",g)){this.b_(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga6(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga6(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aC(a,J.hR(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.K(a).$isfb)this.cQ(a.content)},
$isoN:1},
mP:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.h3(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hM(z)}catch(w){H.ab(w)
v=H.e(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isG")}}},
lh:{"^":"t+i8;"},
lj:{"^":"t+z;"},
lk:{"^":"lj+E;"},
ll:{"^":"t+z;"},
lm:{"^":"ll+E;"},
lr:{"^":"t+z;"},
ls:{"^":"lr+E;"},
lE:{"^":"t+z;"},
lF:{"^":"lE+E;"},
lL:{"^":"t+ai;"},
lM:{"^":"t+ai;"},
lN:{"^":"t+z;"},
lO:{"^":"lN+E;"},
lP:{"^":"t+z;"},
lQ:{"^":"lP+E;"},
lT:{"^":"t+z;"},
lU:{"^":"lT+E;"},
m_:{"^":"t+ai;"},
fZ:{"^":"af+z;"},
h_:{"^":"fZ+E;"},
m5:{"^":"t+z;"},
m6:{"^":"m5+E;"},
m9:{"^":"t+ai;"},
mi:{"^":"t+z;"},
mj:{"^":"mi+E;"},
h2:{"^":"af+z;"},
h3:{"^":"h2+E;"},
mo:{"^":"t+z;"},
mp:{"^":"mo+E;"},
mR:{"^":"t+z;"},
mS:{"^":"mR+E;"},
mT:{"^":"t+z;"},
mU:{"^":"mT+E;"},
mV:{"^":"t+z;"},
mW:{"^":"mV+E;"},
mX:{"^":"t+z;"},
mY:{"^":"mX+E;"},
mZ:{"^":"t+z;"},
n_:{"^":"mZ+E;"}}],["","",,P,{"^":"",
nl:function(a){var z,y
z=J.K(a)
if(!!z.$iscb){y=z.gdE(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h5(a.data,a.height,a.width)},
nk:function(a){if(a instanceof P.h5)return{data:a.a,height:a.b,width:a.c}
return a},
b0:function(a){var z,y,x,w,v
if(a==null)return
z=P.dg(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.I(y[w])
z.p(0,v,a[v])}return z},
ni:function(a,b){var z={}
a.K(0,new P.nj(z))
return z},
et:function(){var z=$.es
if(z==null){z=J.d_(window.navigator.userAgent,"Opera",0)
$.es=z}return z},
ie:function(){var z,y
z=$.ep
if(z!=null)return z
y=$.eq
if(y==null){y=J.d_(window.navigator.userAgent,"Firefox",0)
$.eq=y}if(y)z="-moz-"
else{y=$.er
if(y==null){y=!P.et()&&J.d_(window.navigator.userAgent,"Trident/",0)
$.er=y}if(y)z="-ms-"
else z=P.et()?"-o-":"-webkit-"}$.ep=z
return z},
mc:{"^":"b;",
e_:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cN:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isaF)return new Date(a.a)
if(!!y.$isjK)throw H.a(P.ck("structured clone of RegExp"))
if(!!y.$isb4)return a
if(!!y.$isd1)return a
if(!!y.$isey)return a
if(!!y.$iscb)return a
if(!!y.$iseS||!!y.$isdm)return a
if(!!y.$isL){x=this.e_(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.K(a,new P.me(z,this))
return z.a}if(!!y.$isd){x=this.e_(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.hR(a,x)}throw H.a(P.ck("structured clone of other type"))},
hR:function(a,b){var z,y,x,w
z=J.aK(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.cN(z.j(a,w)))
return x}},
me:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cN(b)}},
h5:{"^":"b;dE:a>,b,c",$iscb:1},
nj:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
md:{"^":"mc;a,b"},
iu:{"^":"cD;a,b",
gbj:function(){var z,y,x
z=this.b
y=H.ak(z,"z",0)
x=W.V
return new H.j2(new H.dE(z,H.l(new P.iv(),{func:1,ret:P.S,args:[y]}),[y]),H.l(new P.iw(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.gbj()
J.hO(z.b.$1(J.cs(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aF:function(a,b,c,d){throw H.a(P.C("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbj().a)},
j:function(a,b){var z=this.gbj()
return z.b.$1(J.cs(z.a,b))},
gX:function(a){var z=P.iY(this.gbj(),!1,W.V)
return new J.aw(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
iv:{"^":"m:24;",
$1:function(a){return!!J.K(H.e(a,"$isG")).$isV}},
iw:{"^":"m:57;",
$1:function(a){return H.k(H.e(a,"$isG"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lV:{"^":"b;$ti",
gbJ:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.y(this,0))},
gcd:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c1(b,"$isad",[P.a5],"$asad")
if(!z)return!1
z=this.a
y=J.aC(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbb(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbJ(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gcd(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.c5(z)
x=this.b
w=J.c5(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.lG(P.cO(P.cO(P.cO(P.cO(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"lV;aR:a>,bb:b>,ax:c>,at:d>,$ti",t:{
jH:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"t;",$isbM:1,"%":"SVGLength"},oy:{"^":"lI;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbM")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asE:function(){return[P.bM]},
"%":"SVGLengthList"},bN:{"^":"t;",$isbN:1,"%":"SVGNumber"},oO:{"^":"lS;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbN")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bN]},
$isi:1,
$asi:function(){return[P.bN]},
$isd:1,
$asd:function(){return[P.bN]},
$asE:function(){return[P.bN]},
"%":"SVGNumberList"},oU:{"^":"t;0m:length=","%":"SVGPointList"},f1:{"^":"cH;0a1:type}",$isf1:1,"%":"SVGScriptElement"},p4:{"^":"mb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.I(c)
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"SVGStringList"},p7:{"^":"cH;0a1:type}","%":"SVGStyleElement"},cH:{"^":"V;",
gci:function(a){return new P.iu(a,new W.au(a))},
aj:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aG])
C.a.h(z,W.fR(null))
C.a.h(z,W.h1())
C.a.h(z,new W.mf())
c=new W.he(new W.eT(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).hS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.au(w)
u=z.gaH(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscH:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bR:{"^":"t;",$isbR:1,"%":"SVGTransform"},pg:{"^":"mr;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbR")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$asE:function(){return[P.bR]},
"%":"SVGTransformList"},lH:{"^":"t+z;"},lI:{"^":"lH+E;"},lR:{"^":"t+z;"},lS:{"^":"lR+E;"},ma:{"^":"t+z;"},mb:{"^":"ma+E;"},mq:{"^":"t+z;"},mr:{"^":"mq+E;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$iskq:1}}],["","",,P,{"^":"",o9:{"^":"t;0m:length=","%":"AudioBuffer"},e8:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oa:{"^":"lf;",
j:function(a,b){return P.b0(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new P.hT(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.C("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"AudioParamMap"},hT:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hU:{"^":"e8;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},ob:{"^":"af;0m:length=","%":"AudioTrackList"},hX:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oc:{"^":"e8;0a1:type}","%":"BiquadFilterNode"},oR:{"^":"hX;0m:length=","%":"OfflineAudioContext"},oS:{"^":"hU;0a1:type}","%":"Oscillator|OscillatorNode"},lf:{"^":"t+ai;"}}],["","",,P,{"^":"",dr:{"^":"t;",
iU:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$iscb)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nk(g))
return}if(!!z.$iseB)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c6("Incorrect number or type of arguments"))},
iT:function(a,b,c,d,e,f,g){return this.iU(a,b,c,d,e,f,g,null,null,null)},
$isdr:1,
"%":"WebGLRenderingContext"},kz:{"^":"t;",$iskz:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p2:{"^":"m8;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b0(a.item(b))},
p:function(a,b,c){H.F(b)
H.e(c,"$isL")
throw H.a(P.C("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asz:function(){return[[P.L,,,]]},
$isi:1,
$asi:function(){return[[P.L,,,]]},
$isd:1,
$asd:function(){return[[P.L,,,]]},
$asE:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},m7:{"^":"t+z;"},m8:{"^":"m7+E;"}}],["","",,O,{"^":"",aL:{"^":"b;0a,0b,0c,0d,$ti",
bQ:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cR:function(a,b,c){var z=H.ak(this,"aL",0)
H.l(b,{func:1,ret:P.S,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.cR(a,null,b)},
fN:function(a){var z
H.v(a,"$isi",[H.ak(this,"aL",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fq:function(a,b){var z
H.v(b,"$isi",[H.ak(this,"aL",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.y(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ak(this,"aL",0)
H.A(b,z)
z=[z]
if(this.fN(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fq(x,H.c([b],z))}},
$isi:1,
t:{
d6:function(a){var z=new O.aL([a])
z.bQ(a)
return z}}},dk:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.U()
this.b=z}return z},
eW:function(a){var z=this.b
if(!(z==null))z.H(a)},
aI:function(){return this.eW(null)},
gZ:function(a){var z=this.a
if(z.length>0)return C.a.gau(z)
else return V.cg()},
em:function(a){var z=this.a
if(a==null)C.a.h(z,V.cg())
else C.a.h(z,a)
this.aI()},
cD:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",d0:{"^":"b;"},aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cY:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
if(y.f==null)y.cY()}},
sa9:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().J(0,this.geh())
y=this.c
if(y!=null)y.gB().h(0,this.geh())
x=new D.O("shape",z,this.c,this,[F.f3])
x.b=!0
this.a8(x)}},
sb9:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gB().J(0,this.gei())
y=this.f
this.f=a
if(a!=null)a.gB().h(0,this.gei())
this.cY()
x=new D.O("technique",y,this.f,this,[O.cI])
x.b=!0
this.a8(x)}},
saT:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gB().J(0,this.geg())
if(a!=null)a.gB().h(0,this.geg())
this.r=a
y=new D.O("mover",z,a,this,[U.al])
y.b=!0
this.a8(y)}},
aw:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aX(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.O("matrix",x,y,this,[V.ax])
w.b=!0
this.a8(w)}z=this.f
if(z!=null)z.aw(0,b)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aw(0,b)},
aU:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gZ(z))
else C.a.h(z.a,y.k(0,z.gZ(z)))
z.aI()
a.en(this.f)
z=a.dy
x=(z&&C.a).gau(z)
if(x!=null&&this.d!=null)x.iK(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aU(a)
a.el()
a.dx.cD()},
gB:function(){var z=this.z
if(z==null){z=D.U()
this.z=z}return z},
a8:function(a){var z=this.z
if(!(z==null))z.H(a)},
Y:function(){return this.a8(null)},
it:[function(a){H.e(a,"$isD")
this.e=null
this.a8(a)},function(){return this.it(null)},"jP","$1","$0","geh",0,2,1],
iu:[function(a){this.a8(H.e(a,"$isD"))},function(){return this.iu(null)},"jQ","$1","$0","gei",0,2,1],
is:[function(a){this.a8(H.e(a,"$isD"))},function(){return this.is(null)},"jO","$1","$0","geg",0,2,1],
iq:[function(a){this.a8(H.e(a,"$isD"))},function(){return this.iq(null)},"jM","$1","$0","gef",0,2,1],
jL:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[E.aO],"$asi")
for(z=b.length,y=this.gef(),x={func:1,ret:-1,args:[D.D]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bf()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.Y()},"$2","gip",8,0,11],
jN:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[E.aO],"$asi")
for(z=b.length,y=this.gef(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bf()
v.d=0
w.sa4(v)}w.ga4().J(0,y)}}this.Y()},"$2","gir",8,0,11],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaR:1,
t:{
d8:function(a,b,c,d,e,f){var z,y
z=new E.aO()
z.a=d
z.b=!0
y=O.d6(E.aO)
z.y=y
y.bf(z.gip(),z.gir())
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
z.sa9(0,e)
z.sb9(f)
z.saT(c)
return z}}},jM:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eS:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aF(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dk()
y=[V.ax]
z.a=H.c([],y)
z.gB().h(0,new E.jO(this))
this.cy=z
z=new O.dk()
z.a=H.c([],y)
z.gB().h(0,new E.jP(this))
this.db=z
z=new O.dk()
z.a=H.c([],y)
z.gB().h(0,new E.jQ(this))
this.dx=z
z=H.c([],[O.cI])
this.dy=z
C.a.h(z,null)
this.fr=new H.b5(0,0,[P.h,A.f2])},
giE:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gZ(z)
y=this.db
y=z.k(0,y.gZ(y))
this.z=y
z=y}return z},
en:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gau(z):a;(z&&C.a).h(z,y)},
el:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jN:function(a,b){var z=new E.jM(a,b)
z.eS(a,b)
return z}}},jO:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isD")
z=this.a
z.z=null
z.ch=null}},jP:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isD")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jQ:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isD")
z=this.a
z.ch=null
z.cx=null}},ki:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.x
if(z==null){z=D.U()
this.x=z}return z},
eY:[function(a){var z
H.e(a,"$isD")
z=this.x
if(!(z==null))z.H(a)
this.iN()},function(){return this.eY(null)},"eX","$1","$0","gcU",0,2,1],
gi6:function(){var z,y,x
z=Date.now()
y=C.e.a5(P.eu(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aF(z,!1)
return x/y},
dg:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.q(z)
x=C.d.cv(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cv(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fe(C.q,this.giM())}},
iN:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kk(this),{func:1,ret:-1,args:[P.a5]})
C.H.fi(z)
C.H.fY(z,W.hl(y,P.a5))}},"$0","giM",0,0,3],
iJ:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dg()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.eu(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aI()
w=x.db
C.a.sm(w.a,0)
w.aI()
w=x.dx
C.a.sm(w.a,0)
w.aI()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aU(this.e)}x=this.z
if(!(x==null))x.H(null)}catch(v){z=H.ab(v)
y=H.bD(v)
P.dY("Error: "+H.j(z))
P.dY("Stack: "+H.j(y))
throw H.a(z)}},
t:{
kj:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$isd4)return E.fd(a,!0,!0,!0,!1)
y=W.d5(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gci(a).h(0,y)
w=E.fd(y,!0,!0,!0,!1)
w.a=a
return w},
fd:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ki()
y=P.iU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.bL(a,"webgl",y)
x=H.e(x==null?C.l.bL(a,"experimental-webgl",y):x,"$isdr")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jN(x,a)
w=new T.ke(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kM(a)
v=new X.iM()
v.c=new X.b6(!1,!1,!1)
v.d=P.cf(null,null,null,P.n)
w.b=v
v=new X.jg(w)
v.f=0
v.r=new V.a_(0,0)
v.x=new V.a_(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j_(w)
v.r=0
v.x=new V.a_(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kn(w)
v.e=0
v.f=new V.a_(0,0)
v.r=new V.a_(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.f7,P.b]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.l(w.gfA(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.l(w.gfD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.l(w.gfv(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.l(w.gfF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.l(w.gfE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.l(w.gfI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.l(w.gfK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.l(w.gfJ(),s),!1,t))
p=w.z
o=W.bU;(p&&C.a).h(p,W.a4(a,H.I(W.im(a)),H.l(w.gfL(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.l(w.gfB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.l(w.gfC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.l(w.gfM(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.l(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.l(w.gfR(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.l(w.gfS(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aF(Date.now(),!1)
z.cy=0
z.dg()
return z}}},kk:{"^":"m:35;a",
$1:function(a){var z
H.nU(a)
z=this.a
if(z.ch){z.ch=!1
z.iJ()}}}}],["","",,Z,{"^":"",fL:{"^":"b;a,b",t:{
dD:function(a,b,c){var z
H.v(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.fL(b,z)}}},ed:{"^":"d0;a,b,c,d,e",
b1:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.u('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},l6:{"^":"b;a",$isod:1},ee:{"^":"b;a,0b,c,d",
aQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b1:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b1(a)},
j_:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aU:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$ispa:1},cz:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bv:{"^":"b;a",
gcS:function(a){var z,y
z=this.a
y=(z&$.$get$aX().a)!==0?3:0
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=2
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$bS().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=4
if((z&$.$get$bw().a)!==0)++y
return(z&$.$get$aU().a)!==0?y+4:y},
hI:function(a){var z,y,x
z=$.$get$aX()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fK()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aX().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bS().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
at:function(a){return new Z.bv(a)}}}}],["","",,D,{"^":"",ei:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.D]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.D]})
z=this.a
z=z==null?null:C.a.T(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).J(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.T(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).J(z,b)||y}return y},
H:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.D(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.ir(z))
y=this.b
if(!(y==null))C.a.K(y,new D.is(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
hX:function(){return this.H(null)},
iO:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.H(y)}}},
al:function(a){return this.iO(a,!0,!1)},
t:{
U:function(){var z=new D.bf()
z.d=0
return z}}},ir:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.D]})
z=this.a.a
z.b
a.$1(z)}},is:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.D]})
z=this.a.a
z.b
a.$1(z)}},D:{"^":"b;a,0b"},cA:{"^":"D;c,d,a,0b,$ti"},cB:{"^":"D;c,d,a,0b,$ti"},O:{"^":"D;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ef:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"of<"}},eH:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eH))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eI:{"^":"D;c,a,0b"},iM:{"^":"b;0a,0b,0c,0d",
iA:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eI(a,this)
y.b=!0
return z.H(y)},
iw:function(a){var z,y
this.c=a.b
this.d.J(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eI(a,this)
y.b=!0
return z.H(y)}},eL:{"^":"dq;x,y,c,d,e,a,0b"},j_:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aA:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.a_(y.a+x*w,y.b+v*u)
u=this.a.gbo()
s=new X.ch(a,new V.a_(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cC:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.H(this.aA(a,b))
return!0},
b8:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eG()
if(typeof z!=="number")return z.bK()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.aA(a,b))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.aA(a,b))
return!0},
iB:function(a){return!1},
fH:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aF(Date.now(),!1)
y=this.f
x=new X.eL(c,a,this.a.gbo(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=new V.a_(0,0)}},b6:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b6))return!1
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
return z+(this.c?"Shift+":"")}},ch:{"^":"dq;x,y,z,Q,ch,c,d,e,a,0b"},jg:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bX:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gbo()
x=new X.ch(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cC:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.bX(a,b,!0))
return!0},
b8:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eG()
if(typeof z!=="number")return z.bK()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.bX(a,b,!0))
return!0},
b7:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.bX(a,b,!1))
return!0},
iC:function(a,b){return!1}},dq:{"^":"D;"},fi:{"^":"dq;x,y,z,Q,ch,c,d,e,a,0b"},kn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aA:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.a_],"$asd")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.a_(0,0)
x=this.a.gbo()
w=new X.fi(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iz:function(a){var z
H.v(a,"$isd",[V.a_],"$asd")
z=this.b
if(z==null)return!1
z.H(this.aA(a,!0))
return!0},
ix:function(a){var z
H.v(a,"$isd",[V.a_],"$asd")
z=this.c
if(z==null)return!1
z.H(this.aA(a,!0))
return!0},
iy:function(a){var z
H.v(a,"$isd",[V.a_],"$asd")
z=this.d
if(z==null)return!1
z.H(this.aA(a,!1))
return!0}},kM:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbo:function(){var z=this.a
return V.f0(0,0,(z&&C.l).gdC(z).c,C.l.gdC(z).d)},
d4:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eH(z,new X.b6(y,a.altKey,a.shiftKey))},
aN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b6(y,a.altKey,a.shiftKey)},
c8:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b6(y,a.altKey,a.shiftKey)},
aB:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.a_(y-w,x-v)},
aZ:function(a){return new V.a9(a.movementX,a.movementY)},
c2:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a_])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.ae(u.pageX)
C.d.ae(u.pageY)
s=z.left
C.d.ae(u.pageX)
C.a.h(y,new V.a_(t-s,C.d.ae(u.pageY)-z.top))}return y},
ay:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ef(z,new X.b6(y,a.altKey,a.shiftKey))},
bZ:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.S()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jm:[function(a){this.f=!0},"$1","gfD",4,0,9],
jf:[function(a){this.f=!1},"$1","gfv",4,0,9],
jj:[function(a){H.e(a,"$isay")
if(this.f&&this.bZ(a))a.preventDefault()},"$1","gfA",4,0,4],
jo:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.d4(a)
if(this.b.iA(z))a.preventDefault()},"$1","gfF",4,0,22],
jn:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.d4(a)
if(this.b.iw(z))a.preventDefault()},"$1","gfE",4,0,22],
jq:[function(a){var z,y,x,w
H.e(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aN(a)
if(this.x){y=this.ay(a)
x=this.aZ(a)
if(this.d.cC(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ay(a)
w=this.aB(a)
if(this.c.cC(y,w))a.preventDefault()},"$1","gfI",4,0,4],
js:[function(a){var z,y,x
H.e(a,"$isay")
this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfK",4,0,4],
jl:[function(a){var z,y,x
H.e(a,"$isay")
if(!this.bZ(a)){this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.b8(z,x))a.preventDefault()}},"$1","gfC",4,0,4],
jr:[function(a){var z,y,x
H.e(a,"$isay")
this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.b7(z,x))a.preventDefault()},"$1","gfJ",4,0,4],
jk:[function(a){var z,y,x
H.e(a,"$isay")
if(!this.bZ(a)){this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.b7(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.b7(z,x))a.preventDefault()}},"$1","gfB",4,0,4],
jt:[function(a){var z,y
H.e(a,"$isbU")
this.aN(a)
z=new V.a9((a&&C.G).ghU(a),C.G.ghV(a)).w(0,180)
if(this.x){if(this.d.iB(z))a.preventDefault()
return}if(this.r)return
y=this.aB(a)
if(this.c.iC(z,y))a.preventDefault()},"$1","gfL",4,0,39],
ju:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ay(this.y)
v=this.aB(this.y)
this.d.fH(w,v,x)}},"$1","gfM",4,0,9],
jA:[function(a){var z
H.e(a,"$isbu")
this.a.focus()
this.f=!0
this.c8(a)
z=this.c2(a)
if(this.e.iz(z))a.preventDefault()},"$1","gfT",4,0,14],
jy:[function(a){var z
H.e(a,"$isbu")
this.c8(a)
z=this.c2(a)
if(this.e.ix(z))a.preventDefault()},"$1","gfR",4,0,14],
jz:[function(a){var z
H.e(a,"$isbu")
this.c8(a)
z=this.c2(a)
if(this.e.iy(z))a.preventDefault()},"$1","gfS",4,0,14]}}],["","",,D,{"^":"",ig:{"^":"b;",$isa7:1,$isaR:1},a7:{"^":"b;",$isaR:1},iN:{"^":"aL;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.U()
this.Q=z}return z},
a7:function(a){var z=this.Q
if(!(z==null))z.H(a)},
fG:[function(a){var z
H.e(a,"$isD")
z=this.ch
if(!(z==null))z.H(a)},function(){return this.fG(null)},"jp","$1","$0","gdd",0,2,1],
jv:[function(a){var z,y,x
H.v(a,"$isi",[D.a7],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f_(x))return!1}return!0},"$1","gfO",4,0,41],
jc:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a7
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdd(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.e(b[u],"$isa7")
if(t instanceof D.cJ)C.a.h(this.z,t)
s=t.db
if(s==null){s=new D.bf()
s.d=0
t.db=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cA(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gfs",8,0,18],
jx:[function(a,b){var z,y,x,w,v,u
z=D.a7
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdd(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.e(b[w],"$isa7")
if(v instanceof D.cJ)C.a.J(this.z,v)
u=v.db
if(u==null){u=new D.bf()
u.d=0
v.db=u}u.J(0,x)}z=new D.cB(a,b,this,[z])
z.b=!0
this.a7(z)},"$2","gfQ",8,0,18],
f_:function(a){var z=C.a.T(this.z,a)
return z},
$asi:function(){return[D.a7]},
$asaL:function(){return[D.a7]}},js:{"^":"b;",$isa7:1,$isaR:1},k5:{"^":"b;",$isa7:1,$isaR:1},kg:{"^":"b;",$isa7:1,$isaR:1},kh:{"^":"b;",$isa7:1,$isaR:1},cJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gB:function(){var z=this.db
if(z==null){z=D.U()
this.db=z}return z},
a7:[function(a){var z
H.e(a,"$isD")
z=this.db
if(!(z==null))z.H(a)},function(){return this.a7(null)},"jg","$1","$0","gc1",0,2,1],
$isa7:1,
$isaR:1}}],["","",,V,{"^":"",
oh:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","jd",8,0,37],
o5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.be(a-b,z)
return(a<0?a+z:a)+b},
T:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.d.es($.o.$2(a,0)?0:a,b),c+b+1)},
bC:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.p],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.T(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.ad(z[u],x))}return z},
dX:function(a,b){return C.d.iW(Math.pow(b,C.Q.cv(Math.log(H.nh(a))/Math.log(b))))},
a6:{"^":"b;a,b,c",
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
return new V.a6(z,y,x)},
v:function(a,b){var z
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}},
bb:{"^":"b;a,b,c,d",
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
return new V.bb(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bb))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}},
cF:{"^":"b;a,b,c,d,e,f,r,x,y",
af:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscF")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cF(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cF))return!1
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
z=[P.p]
y=V.bC(H.c([this.a,this.d,this.r],z),3,0)
x=V.bC(H.c([this.b,this.e,this.x],z),3,0)
w=V.bC(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.f(y,1)
s=" "+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.f(y,2)
z=" "+y[2]+", "
if(2>=u)return H.f(x,2)
z=z+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(z+w[2]+"]")}},
ax:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
af:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
e8:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.cg()
a3=1/a2
a4=-w
a5=-i
return V.aQ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isax")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.q(s)
r=a7.b
if(typeof r!=="number")return H.q(r)
q=a7.f
if(typeof q!=="number")return H.q(q)
p=a7.z
if(typeof p!=="number")return H.q(p)
o=a7.cy
if(typeof o!=="number")return H.q(o)
n=a7.c
if(typeof n!=="number")return H.q(n)
m=a7.r
if(typeof m!=="number")return H.q(m)
l=a7.Q
if(typeof l!=="number")return H.q(l)
k=a7.db
if(typeof k!=="number")return H.q(k)
j=a7.d
if(typeof j!=="number")return H.q(j)
i=a7.x
if(typeof i!=="number")return H.q(i)
h=a7.ch
if(typeof h!=="number")return H.q(h)
g=a7.dx
if(typeof g!=="number")return H.q(g)
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
return V.aQ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.a1(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
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
i:function(a){return this.N()},
e0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bC(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bC(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bC(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bC(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.f(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.f(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.f(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.f(y,1)
q=q+y[1]+", "
if(1>=t)return H.f(x,1)
q=q+x[1]+", "
if(1>=s)return H.f(w,1)
q=q+w[1]+", "
if(1>=r)return H.f(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.f(y,2)
u=u+y[2]+", "
if(2>=t)return H.f(x,2)
u=u+x[2]+", "
if(2>=s)return H.f(w,2)
u=u+w[2]+", "
if(2>=r)return H.f(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.f(y,3)
q=q+y[3]+", "
if(3>=t)return H.f(x,3)
q=q+x[3]+", "
if(3>=s)return H.f(w,3)
q=q+w[3]+", "
if(3>=r)return H.f(v,3)
return u+(q+v[3]+"]")},
N:function(){return this.e0("",3,0)},
C:function(a){return this.e0(a,3,0)},
t:{
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cg:function(){return V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eR:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eQ:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eP:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aQ(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
a_:{"^":"b;a,b",
S:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.a_(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}},
a1:{"^":"b;a,b,c",
E:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}},
bO:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bO(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}},
f_:{"^":"b;a,b,c,d",
gav:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"},
t:{
f0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f_(a,b,c,d)}}},
a9:{"^":"b;a,b",
ie:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a9(z*b,y*b)},
w:function(a,b){var z,y
if($.o.$2(b,0))return new V.a9(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a9(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}},
H:{"^":"b;a,b,c",
ie:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cB:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aD:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.H(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.o.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
e9:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
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
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i3:{"^":"ei;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bR:function(a){var z=V.o5(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.U()
this.y=z}return z},
a0:function(a){var z=this.y
if(!(z==null))z.H(a)},
sex:function(a,b){},
seb:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bR(z)}z=new D.O("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.a0(z)}},
sed:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bR(z)}z=new D.O("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.a0(z)}},
sa2:function(a,b){var z,y
b=this.bR(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.O("location",y,b,this,[P.p])
z.b=!0
this.a0(z)}},
sec:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.O("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.a0(z)}},
sa_:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.O("velocity",x,a,this,[P.p])
z.b=!0
this.a0(z)}},
sdD:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.O("dampening",y,a,this,[P.p])
z.b=!0
this.a0(z)}},
aw:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa_(y)}},
t:{
ek:function(){var z=new U.i3()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},el:{"^":"al;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.U()
this.b=z}return z},
aX:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.el))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
t:{
c8:function(a){var z=new U.el()
z.a=a
return z}}},eA:{"^":"aL;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.U()
this.e=z}return z},
a0:[function(a){var z
H.e(a,"$isD")
z=this.e
if(!(z==null))z.H(a)},function(){return this.a0(null)},"aJ","$1","$0","gbh",0,2,1],
j1:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.al
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbh(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cA(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gf0",8,0,16],
jw:[function(a,b){var z,y,x,w,v
z=U.al
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbh(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gB().J(0,x)}z=new D.cB(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gfP",8,0,16],
aX:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aw(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aX(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.cg():x
z=this.e
if(!(z==null))z.al(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eA))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.al]},
$asaL:function(){return[U.al]},
$isal:1,
t:{
d9:function(a){var z=new U.eA()
z.bQ(U.al)
z.bf(z.gf0(),z.gfP())
z.e=null
z.f=V.cg()
z.r=0
return z}}},al:{"^":"ei;"},kN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.U()
this.fx=z}return z},
a0:[function(a){var z
H.e(a,"$isD")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.a0(null)},"aJ","$1","$0","gbh",0,2,1],
hJ:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.U()
z.b=y
z=y}else z=y
z.h(0,this.gfn())
z=this.a.c
y=z.d
if(y==null){y=D.U()
z.d=y
z=y}else z=y
z.h(0,this.gfo())
z=this.a.c
y=z.c
if(y==null){y=D.U()
z.c=y
z=y}else z=y
z.h(0,this.gfp())
z=this.a.d
y=z.f
if(y==null){y=D.U()
z.f=y
z=y}else z=y
z.h(0,this.gfk())
z=this.a.d
y=z.d
if(y==null){y=D.U()
z.d=y
z=y}else z=y
z.h(0,this.gfl())
z=this.a.e
y=z.b
if(y==null){y=D.U()
z.b=y
z=y}else z=y
z.h(0,this.ghd())
z=this.a.e
y=z.d
if(y==null){y=D.U()
z.d=y
z=y}else z=y
z.h(0,this.ghc())
z=this.a.e
y=z.c
if(y==null){y=D.U()
z.c=y
z=y}else z=y
z.h(0,this.ghb())
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.a9(z,y)},
j9:[function(a){a=H.k(H.e(a,"$isD"),"$isch")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfn",4,0,2],
ja:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isch")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a9(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ap(new V.a9(y.a,y.b).k(0,2).w(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sa_(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sa_(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).w(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa2(0,-u*v+x)
this.b.sa_(0)
this.c.sa_(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).w(0,z.gav()))}this.aJ()},"$1","gfo",4,0,2],
jb:[function(a){var z,y,x
H.e(a,"$isD")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sa_(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sa_(-y*10*z)
this.aJ()}},"$1","gfp",4,0,2],
j7:[function(a){if(H.k(H.e(a,"$isD"),"$iseL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfk",4,0,2],
j8:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isch")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).w(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa2(0,-u*v+x)
this.b.sa_(0)
this.c.sa_(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).w(0,z.gav()))
this.aJ()},"$1","gfl",4,0,2],
jE:[function(a){H.e(a,"$isD")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghd",4,0,2],
jD:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isfi")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a9(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ap(new V.a9(y.a,y.b).k(0,2).w(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sa_(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sa_(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).w(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa2(0,-u*v+x)
this.b.sa_(0)
this.c.sa_(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).w(0,z.gav()))}this.aJ()},"$1","ghc",4,0,2],
jC:[function(a){var z,y,x
H.e(a,"$isD")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sa_(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sa_(-y*10*z)
this.aJ()}},"$1","ghb",4,0,2],
aX:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.aw(0,x)
this.b.aw(0,x)
z=V.eP(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aQ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isal:1,
t:{
fG:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.kN()
y=U.ek()
y.sex(0,!0)
y.seb(6.283185307179586)
y.sed(0)
y.sa2(0,0)
y.sec(100)
y.sa_(0)
y.sdD(0.5)
z.b=y
x=z.gbh()
y.gB().h(0,x)
y=U.ek()
y.sex(0,!0)
y.seb(6.283185307179586)
y.sed(0)
y.sa2(0,0)
y.sec(100)
y.sa_(0)
y.sdD(0.5)
z.c=y
y.gB().h(0,x)
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
w=new X.b6(b,!1,!1)
v=z.d
z.d=w
y=new D.O("modifiers",v,w,z,[X.b6])
y.b=!0
z.a0(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.O("invertX",y,!1,z,[P.S])
y.b=!0
z.a0(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.O("invertY",y,!1,z,[P.S])
y.b=!0
z.a0(y)}z.hJ(c)
return z}}}}],["","",,M,{"^":"",ip:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aK:[function(a){var z
H.e(a,"$isD")
z=this.x
if(!(z==null))z.H(a)},function(){return this.aK(null)},"j2","$1","$0","gao",0,2,1],
jh:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aO
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bf()
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cA(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfw",8,0,11],
ji:[function(a,b){var z,y,x,w,v,u
z=E.aO
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bf()
u.d=0
v.sa4(u)}v.ga4().J(0,x)}}z=new D.cB(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfz",8,0,11],
sb9:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().J(0,this.gao())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gao())
z=new D.O("technique",y,this.c,this,[O.cI])
z.b=!0
this.aK(z)}},
gB:function(){var z=this.x
if(z==null){z=D.U()
this.x=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.en(this.c)
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
if(typeof x!=="number")return H.q(x)
u=C.d.ae(v.a*x)
if(typeof w!=="number")return H.q(w)
t=C.d.ae(v.b*w)
s=C.d.ae(v.c*x)
a.c=s
v=C.d.ae(v.d*w)
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
s=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aQ(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.em(n)
y=$.eX
if(y==null){y=new V.H(0,0,-1)
m=y.w(0,Math.sqrt(y.G(y)))
y=new V.H(0,1,0).aD(m)
l=y.w(0,Math.sqrt(y.G(y)))
k=m.aD(l)
j=new V.H(0,0,0)
y=V.aQ(l.a,k.a,m.a,l.R(0).G(j),l.b,k.b,m.b,k.R(0).G(j),l.c,k.c,m.c,m.R(0).G(j),0,0,0,1)
$.eX=y
i=y}else i=y
y=z.b
if(y!=null){h=y.aX(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.em(i)
z=this.c
if(z!=null)z.aw(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aw(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aU(a)
this.a.toString
a.cy.cD()
a.db.cD()
this.b.toString
a.el()},
$isoX:1}}],["","",,A,{"^":"",e7:{"^":"b;a,b,c"},hS:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hY:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j5:{"^":"f2;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0ak,0br,0dF,0bs,0bt,0dG,0dH,0bu,0bv,0dI,0dJ,0bw,0bx,0dK,0dL,0by,0dM,0dN,0bz,0dO,0dP,0bA,0bB,0bC,0dQ,0dR,0bD,0bE,0dS,0dT,0bF,0dU,0cp,0dV,0cq,0dW,0cr,0dX,0cs,0dY,0ct,0dZ,0cu,a,b,0c,0d,0e,0f,0r,0x,0y",
eR:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.am("")
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
a2.hg(z)
a2.hn(z)
a2.hh(z)
a2.hv(z)
a2.hw(z)
a2.hp(z)
a2.hA(z)
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
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.am("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.hk(z)
x.hf(z)
x.hi(z)
x.hl(z)
x.ht(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hr(z)
x.hs(z)}x.ho(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
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
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
q=x.k2
if(q){r+="// === Lighting ===\n"
z.a=r
r+="\n"
z.a=r
r+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
z.a=r
r+="{\n"
z.a=r
z.a=r+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
p=H.c([],[P.h])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hj(z)
x.hq(z)
x.hu(z)
x.hx(z)
x.hy(z)
x.hz(z)
x.hm(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.c([],[P.h])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.n(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.d5(s,35633)
this.f=this.d5(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dN(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.u("Failed to link shader: "+H.j(m)))}this.h6()
this.h8()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaT")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaT")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaT")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaT")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdA")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaT")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaT")
this.r1=H.c([],[A.aT])
y=a2.as
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaT"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isar")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isP")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isas")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isar")
this.as=H.k(this.y.q(0,"nullAmbientTxt"),"$isP")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isas")
this.as=H.k(this.y.q(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.ak=H.k(this.y.q(0,"diffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.br=H.k(this.y.q(0,"diffuseTxt"),"$isar")
this.bs=H.k(this.y.q(0,"nullDiffuseTxt"),"$isP")
break
case C.h:this.dF=H.k(this.y.q(0,"diffuseTxt"),"$isas")
this.bs=H.k(this.y.q(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bt=H.k(this.y.q(0,"invDiffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dG=H.k(this.y.q(0,"invDiffuseTxt"),"$isar")
this.bu=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isP")
break
case C.h:this.dH=H.k(this.y.q(0,"invDiffuseTxt"),"$isas")
this.bu=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.bx=H.k(this.y.q(0,"shininess"),"$isa2")
this.bv=H.k(this.y.q(0,"specularClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dI=H.k(this.y.q(0,"specularTxt"),"$isar")
this.bw=H.k(this.y.q(0,"nullSpecularTxt"),"$isP")
break
case C.h:this.dJ=H.k(this.y.q(0,"specularTxt"),"$isas")
this.bw=H.k(this.y.q(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dK=H.k(this.y.q(0,"bumpTxt"),"$isar")
this.by=H.k(this.y.q(0,"nullBumpTxt"),"$isP")
break
case C.h:this.dL=H.k(this.y.q(0,"bumpTxt"),"$isas")
this.by=H.k(this.y.q(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dM=H.k(this.y.q(0,"envSampler"),"$isas")
this.dN=H.k(this.y.q(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bz=H.k(this.y.q(0,"reflectClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dO=H.k(this.y.q(0,"reflectTxt"),"$isar")
this.bA=H.k(this.y.q(0,"nullReflectTxt"),"$isP")
break
case C.h:this.dP=H.k(this.y.q(0,"reflectTxt"),"$isas")
this.bA=H.k(this.y.q(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.bB=H.k(this.y.q(0,"refraction"),"$isa2")
this.bC=H.k(this.y.q(0,"refractClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dQ=H.k(this.y.q(0,"refractTxt"),"$isar")
this.bD=H.k(this.y.q(0,"nullRefractTxt"),"$isP")
break
case C.h:this.dR=H.k(this.y.q(0,"refractTxt"),"$isas")
this.bD=H.k(this.y.q(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.bE=H.k(this.y.q(0,"alpha"),"$isa2")
switch(y){case C.c:break
case C.i:break
case C.f:this.dS=H.k(this.y.q(0,"alphaTxt"),"$isar")
this.bF=H.k(this.y.q(0,"nullAlphaTxt"),"$isP")
break
case C.h:this.dT=H.k(this.y.q(0,"alphaTxt"),"$isas")
this.bF=H.k(this.y.q(0,"nullAlphaTxt"),"$isP")
break}}this.cp=H.c([],[A.fv])
this.cq=H.c([],[A.fw])
this.cr=H.c([],[A.fx])
this.cs=H.c([],[A.fy])
this.ct=H.c([],[A.fz])
this.cu=H.c([],[A.fA])
if(a2.k2){y=a2.z
if(y>0){this.dU=H.e(this.y.q(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.cp;(x&&C.a).h(x,new A.fv(l,k,j))}}y=a2.Q
if(y>0){this.dV=H.e(this.y.q(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa2")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa2")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.cq;(x&&C.a).h(x,new A.fw(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dW=H.e(this.y.q(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa2")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa2")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa2")
x=this.cr;(x&&C.a).h(x,new A.fx(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dX=H.e(this.y.q(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isar")
x=this.cs;(x&&C.a).h(x,new A.fy(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dY=H.e(this.y.q(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdA")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa2")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isas")
x=this.ct;(x&&C.a).h(x,new A.fz(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dZ=H.e(this.y.q(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isN")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa2")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isar")
x=this.cu;(x&&C.a).h(x,new A.fA(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ah:function(a,b,c){b.a.uniform1i(b.d,1)},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j6:function(a,b){var z,y
z=a.ak
y=new A.j5(b,z)
y.eU(b,z)
y.eR(a,b)
return y}}},ja:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,ak,br",
hg:function(a){var z,y,x
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
hn:function(a){var z
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
hh:function(a){var z
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
hv:function(a){var z,y
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
hw:function(a){var z,y
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
hp:function(a){var z
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
hA:function(a){var z
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
az:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.an(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hk:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.az(a,z,"emission")
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
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hf:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.az(a,z,"ambient")
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
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hi:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.az(a,z,"diffuse")
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
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hl:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.az(a,z,"invDiffuse")
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
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
ht:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.az(a,z,"specular")
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
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
ho:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.f:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.h:z+="uniform samplerCube bumpTxt;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hr:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.az(a,z,"reflect")
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
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hs:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.az(a,z,"refract")
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
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hj:function(a){var z,y
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
hq:function(a){var z,y
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
hu:function(a){var z,y
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
hx:function(a){var z,y,x
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
hy:function(a){var z,y,x
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
hz:function(a){var z,y,x
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
hm:function(a){var z
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
i:function(a){return this.ak}},fv:{"^":"b;a,b,c"},fy:{"^":"b;a,b,c,d,e,f,r,x"},fw:{"^":"b;a,b,c,d,e,f,r"},fz:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fx:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fA:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f2:{"^":"d0;",
eU:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d5:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dN(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
h6:function(){var z,y,x,w,v,u
z=H.c([],[A.e7])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e7(y,v.name,u))}this.x=new A.hS(z)},
h8:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hT(v.type,v.size,v.name,u))}this.y=new A.ky(z)},
aM:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.P(z,y,b,c)
else return A.dz(z,y,b,a,c)},
ff:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dz(z,y,b,a,c)},
fg:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dz(z,y,b,a,c)},
bm:function(a,b){return new P.fP(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hT:function(a,b,c,d){switch(a){case 5120:return this.aM(b,c,d)
case 5121:return this.aM(b,c,d)
case 5122:return this.aM(b,c,d)
case 5123:return this.aM(b,c,d)
case 5124:return this.aM(b,c,d)
case 5125:return this.aM(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.kt(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.kw(this.a,this.r,c,d)
case 35667:return new A.ku(this.a,this.r,c,d)
case 35668:return new A.kv(this.a,this.r,c,d)
case 35669:return new A.kx(this.a,this.r,c,d)
case 35674:return new A.kA(this.a,this.r,c,d)
case 35675:return new A.dA(this.a,this.r,c,d)
case 35676:return new A.aT(this.a,this.r,c,d)
case 35678:return this.ff(b,c,d)
case 35680:return this.fg(b,c,d)
case 35670:throw H.a(this.bm("BOOL",c))
case 35671:throw H.a(this.bm("BOOL_VEC2",c))
case 35672:throw H.a(this.bm("BOOL_VEC3",c))
case 35673:throw H.a(this.bm("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cw:{"^":"b;a,b",
i:function(a){return this.b}},ag:{"^":"b;"},ky:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
i5:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.i5("\n")}},P:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},ku:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kv:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kx:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ks:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dz:function(a,b,c,d,e){var z=new A.ks(a,b,c,e)
z.f=d
z.e=P.iX(d,0,!1,P.n)
return z}}},a2:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kt:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},N:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kw:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kA:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dA:{"^":"ag;a,b,c,d",
am:function(a){var z=new Float32Array(H.by(H.v(a,"$isd",[P.p],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aT:{"^":"ag;a,b,c,d",
am:function(a){var z=new Float32Array(H.by(H.v(a,"$isd",[P.p],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ar:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},as:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dQ:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.an,P.p,P.p]})
z=F.ds()
F.bY(z,b,c,d,a,1,0,0,1)
F.bY(z,b,c,d,a,0,1,0,3)
F.bY(z,b,c,d,a,0,0,1,2)
F.bY(z,b,c,d,a,-1,0,0,0)
F.bY(z,b,c,d,a,0,-1,0,0)
F.bY(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cR:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bY:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.an,P.p,P.p]})
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
z.d=y}l=F.cR(y)
k=F.cR(z.b)
j=F.e_(d,e,new F.n0(z,F.cR(z.c),F.cR(z.d),k,l,c),b)
if(j!=null)a.b6(j)},
hq:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.ds()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.an])
v=z.a
u=new V.H(0,0,y)
u=u.w(0,Math.sqrt(u.G(u)))
C.a.h(w,v.hE(new V.bO(a,-1,-1,-1),new V.bb(1,1,1,1),new V.a1(0,0,d),new V.H(0,0,y),new V.a_(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.H(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cm(new V.bO(a,-1,-1,-1),null,new V.bb(n,l,m,1),new V.a1(r*p,q*p,d),new V.H(0,0,y),new V.a_(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hC(w)
return z},
dR:function(a,b,c,d,e,f){return F.nn(b,c,d,new F.nm(a,f),e)},
nn:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.e_(c,e,new F.np(d),null)
if(z==null)return
z.ar()
z.cb()
if(b)z.b6(F.hq(3,!1,!1,1,new F.nq(d),e))
if(a)z.b6(F.hq(1,!0,!1,-1,new F.nr(d),e))
return z},
o_:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.o0()
y=F.dQ(a,null,new F.o1(z,c),d)
y.cb()
return y},
hE:function(a,b,c,d){return F.hp(c,a,d,b,new F.o3())},
nI:function(a,b,c,d,e,f){return F.hp(d,a,e,b,new F.nJ(f,c))},
hp:function(a,b,c,d,e){var z=F.e_(a,b,new F.no(H.l(e,{func:1,ret:V.a1,args:[P.p]}),d,b,c),null)
if(z==null)return
z.ar()
z.cb()
return z},
e_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.an,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.ds()
y=H.c([],[F.an])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cm(null,null,new V.bb(u,0,0,1),null,null,new V.a_(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ck(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cm(null,null,new V.bb(o,n,m,1),null,null,new V.a_(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ck(d))}}z.d.hD(a+1,b+1,y)
return z},
n0:{"^":"m:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cB(z.b,b).cB(z.d.cB(z.c,b),c)
a.sa2(0,new V.a1(y.a,y.b,y.c))
a.seq(y.w(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdA(new V.bO(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nm:{"^":"m:27;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
np:{"^":"m:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa2(0,new V.a1(y,u,w))
u=new V.H(y,u,w)
a.seq(u.w(0,Math.sqrt(u.G(u))))
a.sdA(new V.bO(1-c,2+c,-1,-1))}},
nq:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
nr:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
o0:{"^":"m:27;",
$2:function(a,b){return 0}},
o1:{"^":"m:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.H(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.G(x))).k(0,this.b+z)
a.sa2(0,new V.a1(z.a,z.b,z.c))}},
o3:{"^":"m:25;",
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)}},
nJ:{"^":"m:25;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a1(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
no:{"^":"m:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e0(y.$1(z),x)
x=J.e0(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.H(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.G(x)))
u=new V.H(1,0,0)
y=v.aD(!v.v(0,u)?new V.H(0,0,1):u)
t=y.w(0,Math.sqrt(y.G(y)))
y=t.aD(v)
u=y.w(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa2(0,w.E(0,new V.a1(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aq:{"^":"b;0a,0b,0c,0d,0e",
aE:function(){if(!this.gb3()){C.a.J(this.a.a.d.b,this)
this.a.a.Y()}this.c4()
this.c5()
this.fW()},
c9:function(a){this.a=a
C.a.h(a.d.b,this)},
ca:function(a){this.b=a
C.a.h(a.d.c,this)},
h5:function(a){this.c=a
C.a.h(a.d.d,this)},
c4:function(){var z=this.a
if(z!=null){C.a.J(z.d.b,this)
this.a=null}},
c5:function(){var z=this.b
if(z!=null){C.a.J(z.d.c,this)
this.b=null}},
fW:function(){var z=this.c
if(z!=null){C.a.J(z.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
f8:function(){var z,y,x,w,v
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
if(v.e9())return
return v.w(0,Math.sqrt(v.G(v)))},
fb:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.G(z)))
z=w.S(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aD(z.w(0,Math.sqrt(z.G(z))))
return z.w(0,Math.sqrt(z.G(z)))},
cg:function(){if(this.d!=null)return!0
var z=this.f8()
if(z==null){z=this.fb()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
f7:function(){var z,y,x,w,v
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
if(v.e9())return
return v.w(0,Math.sqrt(v.G(v)))},
fa:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.H(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.S(0,u).k(0,l).E(0,u).S(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.G(z)))
z=k.aD(m)
z=z.w(0,Math.sqrt(z.G(z))).aD(k)
m=z.w(0,Math.sqrt(z.G(z)))}return m},
ce:function(){if(this.e!=null)return!0
var z=this.f7()
if(z==null){z=this.fa()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
b4:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.R(0)
y=this.e
if(y!=null)this.e=y.R(0)
this.a.a.Y()},
ghO:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y
if(this.gb3())return a+"disposed"
z=a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)+", "+C.b.ad(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.C("")},
t:{
bI:function(a,b,c){var z,y,x
z=new F.aq()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.c9(a)
z.ca(b)
z.h5(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
it:{"^":"b;"},
k4:{"^":"it;",
b5:function(a,b,c){var z,y
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
df:{"^":"b;0a,0b",
aE:function(){if(!this.gb3()){C.a.J(this.a.a.c.b,this)
this.a.a.Y()}this.c4()
this.c5()},
c9:function(a){this.a=a
C.a.h(a.c.b,this)},
ca:function(a){this.b=a
C.a.h(a.c.c,this)},
c4:function(){var z=this.a
if(z!=null){C.a.J(z.c.b,this)
this.a=null}},
c5:function(){var z=this.b
if(z!=null){C.a.J(z.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gb3())return a+"disposed"
return a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)},
N:function(){return this.C("")},
t:{
iO:function(a,b){var z,y,x
z=new F.df()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.c9(a)
z.ca(b)
C.a.h(z.a.a.c.b,z)
z.a.a.Y()
return z}}},
iP:{"^":"b;"},
kr:{"^":"iP;",
b5:function(a,b,c){var z,y
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
dp:{"^":"b;0a",
aE:function(){var z=this.a
if(z!=null){C.a.J(z.a.b.b,this)
this.a.a.Y()}this.fV()},
fV:function(){var z=this.a
if(z!=null){C.a.J(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ac(z.e),0)},
N:function(){return this.C("")}},
f3:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.U()
this.e=z}return z},
b6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hQ())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dp()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.H(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iO(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bI(p,o,m)}z=this.e
if(!(z==null))z.al(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.al(0)
return y},
il:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.y(z,0)])
for(z=[F.an];y.length!==0;){x=C.a.gi0(y)
C.a.iH(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.B)(y),++u){t=y[u]
if(t!=null&&a.b5(0,x,t)){C.a.h(w,t)
C.a.J(y,t)}}if(w.length>1)b.b6(w)}}this.a.A()
this.c.cI()
this.d.cI()
this.b.iI()
this.c.cJ(new F.kr())
this.d.cJ(new F.k4())
z=this.e
if(!(z==null))z.al(0)},
hG:function(a){this.il(new F.l0(),new F.jm())},
cb:function(){return this.hG(null)},
b4:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.b4()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.see(new V.H(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.H(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.R(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.H(null)}}}}z=this.e
if(!(z==null))z.al(0)},
hM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aX()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$bS().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
v=b.gcS(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ed])
for(r=0,q=0;q<w;++q){p=b.hI(q)
o=p.gcS(p)
C.a.p(s,q,new Z.ed(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].ig(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ee(new Z.fL(34962,j),s,b)
i.b=H.c([],[Z.cz])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cz(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cz(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cz(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.n(z,"\n")},
a8:function(a){var z=this.e
if(!(z==null))z.H(a)},
Y:function(){return this.a8(null)},
t:{
ds:function(){var z,y
z=new F.f3()
y=new F.kW(z)
y.b=!1
y.c=H.c([],[F.an])
z.a=y
y=new F.jZ(z)
y.b=H.c([],[F.dp])
z.b=y
y=new F.jY(z)
y.b=H.c([],[F.df])
z.c=y
y=new F.jX(z)
y.b=H.c([],[F.aq])
z.d=y
z.e=null
return z}}},
jX:{"^":"b;a,0b",
hC:function(a){var z,y,x,w,v,u
H.v(a,"$isd",[F.an],"$asd")
z=H.c([],[F.aq])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bI(x,v,u))}}return z},
hD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.an],"$asd")
z=H.c([],[F.aq])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.f(c,x)
r=c[x];++x
if(x>=s)return H.f(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.f(c,p)
o=c[p]
if(y<0||y>=s)return H.f(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bI(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bI(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cJ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b5(0,v,t)){v.aE()
break}}}}},
cI:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.ghO(x)
if(y)x.aE()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cg())x=!1
return x},
cf:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].ce())x=!1
return x},
b4:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b4()},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
jY:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cJ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b5(0,v,t)){v.aE()
break}}}}},
cI:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.R(x.a,x.b)
if(y)x.aE()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.n(z,"\n")},
N:function(){return this.C("")}},
jZ:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iI:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aE()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
an:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ck:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cm(this.cx,x,u,z,y,w,v,a,t)},
hQ:function(){return this.ck(null)},
sa2:function(a,b){var z
if(!J.R(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
see:function(a){var z
a=a.w(0,Math.sqrt(a.G(a)))
if(!J.R(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Y()}},
seq:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
sdA:function(a){var z
if(!J.R(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Y()}},
ig:function(a){var z,y
z=J.K(a)
if(z.v(a,$.$get$aX())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aV())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aY())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$aZ())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bS())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bw()))return H.c([this.ch],[P.p])
else if(z.v(a,$.$get$aU())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
cg:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.K(0,new F.l5(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
ce:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.K(0,new F.l4(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ad(J.ac(this.e),0))
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
C.a.h(z,V.T(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
t:{
cm:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.an()
y=new F.l3(z)
y.b=H.c([],[F.dp])
z.b=y
y=new F.l_(z)
x=[F.df]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kX(z)
x=[F.aq]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fI()
z.e=0
y=$.$get$aX()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aW().a)!==0?e:null
z.x=(x&$.$get$aV().a)!==0?b:null
z.y=(x&$.$get$aY().a)!==0?f:null
z.z=(x&$.$get$aZ().a)!==0?g:null
z.Q=(x&$.$get$fJ().a)!==0?c:null
z.ch=(x&$.$get$bw().a)!==0?i:0
z.cx=(x&$.$get$aU().a)!==0?a:null
return z}}},
l5:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
l4:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kW:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
hF:function(a,b,c,d,e,f,g,h,i){var z=F.cm(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hE:function(a,b,c,d,e,f){return this.hF(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cg()
return!0},
cf:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].ce()
return!0},
hN:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
kX:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.f(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.f(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aq]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kY(this,b))
C.a.K(this.d,new F.kZ(this,b))},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
kY:{"^":"m:5;a,b",
$1:function(a){H.e(a,"$isaq")
if(!J.R(a.a,this.a))this.b.$1(a)}},
kZ:{"^":"m:5;a,b",
$1:function(a){var z
H.e(a,"$isaq")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
l_:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
l1:{"^":"b;"},
l0:{"^":"l1;",
b5:function(a,b,c){return J.R(b.f,c.f)}},
l2:{"^":"b;"},
jm:{"^":"l2;",
b6:function(a){var z,y,x,w
H.v(a,"$isd",[F.an],"$asd")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.G(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].see(z)
return}},
l3:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",j7:{"^":"cI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.U()
this.dy=z}return z},
ag:[function(a){var z
H.e(a,"$isD")
z=this.dy
if(!(z==null))z.H(a)},function(){return this.ag(null)},"j3","$1","$0","gf2",0,2,1],
h_:[function(a){H.e(a,"$isD")
this.a=null
this.ag(a)},function(){return this.h_(null)},"jB","$1","$0","gfZ",0,2,1],
jd:[function(a,b){var z=V.ax
z=new D.cA(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ag(z)},"$2","gft",8,0,21],
je:[function(a,b){var z=V.ax
z=new D.cB(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ag(z)},"$2","gfu",8,0,21],
d2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a5(z.e.length+3,4)*4
x=C.e.a5(z.f.length+3,4)*4
w=C.e.a5(z.r.length+3,4)*4
v=C.e.a5(z.x.length+3,4)*4
u=C.e.a5(z.y.length+3,4)*4
t=C.e.a5(z.z.length+3,4)*4
s=C.e.a5(this.e.a.length+3,4)*4
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aX()
if(c){z=$.$get$aW()
a6=new Z.bv(a6.a|z.a)}if(b){z=$.$get$aV()
a6=new Z.bv(a6.a|z.a)}if(a){z=$.$get$aY()
a6=new Z.bv(a6.a|z.a)}if(a0){z=$.$get$aZ()
a6=new Z.bv(a6.a|z.a)}if(a2){z=$.$get$aU()
a6=new Z.bv(a6.a|z.a)}return new A.ja(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
V:function(a,b){H.v(a,"$isd",[T.dw],"$asd")
if(b!=null)if(!C.a.T(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var z,y,x,w,v,u,t
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.a=new V.a1(0,0,0)
y.b=new V.H(0,0,1)
y.c=new V.H(0,1,0)
y.d=new V.H(-1,0,0)
x=y.e
if(x!=null){w=x.aX(0,b,y)
if(w!=null){y.a=w.aW(y.a)
x=w.bc(y.b)
v=x.a
u=x.b
t=x.c
y.b=x.w(0,Math.sqrt(v*v+u*u+t*t))
t=w.bc(y.c)
u=t.a
v=t.b
x=t.c
y.c=t.w(0,Math.sqrt(u*u+v*v+x*x))
x=w.bc(y.d)
v=x.a
u=x.b
t=x.c
y.d=x.w(0,Math.sqrt(v*v+u*u+t*t))}}}},
iK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d2()
y=a.fr.j(0,z.ak)
if(y==null){y=A.j6(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bp(0,x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.br
z=b.e
if(!(z instanceof Z.ee)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ar()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cf()
t.a.cf()
t=t.e
if(!(t==null))t.al(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hN()
s=s.e
if(!(s==null))s.al(0)}q=b.d.hM(new Z.l6(a.a),v)
q.aQ($.$get$aX()).e=this.a.Q.c
if(z)q.aQ($.$get$aW()).e=this.a.cx.c
if(u)q.aQ($.$get$aV()).e=this.a.ch.c
if(w.rx)q.aQ($.$get$aY()).e=this.a.cy.c
if(t)q.aQ($.$get$aZ()).e=this.a.db.c
if(w.x1)q.aQ($.$get$aU()).e=this.a.dx.c
b.e=q}z=T.dw
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.hY()
if(w.fx){u=this.a
t=a.dx
t=t.gZ(t)
u=u.dy
u.toString
u.am(t.af(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gZ(t)
s=a.dx
s=t.k(0,s.gZ(s))
a.cx=s
t=s}u=u.fr
u.toString
u.am(t.af(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giE()
s=a.dx
s=t.k(0,s.gZ(s))
a.ch=s
t=s}u=u.fy
u.toString
u.am(t.af(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.am(t.af(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.am(t.af(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.am(C.w.af(t,!0))}if(w.as>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isax")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.by(H.v(s.af(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.f.d)
u=this.a
t=this.f.d
u.ah(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.f.e)
u=this.a
t=this.f.e
u.ab(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.r.d)
u=this.a
t=this.r.d
u.ah(u.y1,u.as,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.r.e)
u=this.a
t=this.r.e
u.ab(u.y2,u.as,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.ak
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.x.d)
u=this.a
t=this.x.d
u.ah(u.br,u.bs,t)
t=this.a
u=this.x.f
t=t.ak
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.dF,u.bs,t)
t=this.a
u=this.x.f
t=t.ak
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bt
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.V(p,this.y.d)
u=this.a
t=this.y.d
u.ah(u.dG,u.bu,t)
t=this.a
u=this.y.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.V(p,this.y.e)
u=this.a
t=this.y.e
u.ab(u.dH,u.bu,t)
t=this.a
u=this.y.f
t=t.bt
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bv
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bx
t.a.uniform1f(t.d,r)
break
case C.f:this.V(p,this.z.d)
u=this.a
t=this.z.d
u.ah(u.dI,u.bw,t)
t=this.a
u=this.z.f
t=t.bv
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bx
u.a.uniform1f(u.d,r)
break
case C.h:this.V(p,this.z.e)
u=this.a
t=this.z.e
u.ab(u.dJ,u.bw,t)
t=this.a
u=this.z.f
t=t.bv
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bx
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dU
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cp
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.bc(i.gcl(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gai(i)
g=h.c
r=f.gbI()
s=f.gbd()
f=f.gbn()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dV
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cq
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gcE(i)
r=h.b
g=s.gey(s)
f=s.gez(s)
s=s.geA(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aW(i.gcE(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gai(i)
f=h.d
g=s.gbI()
r=s.gbd()
s=s.gbn()
f.a.uniform3f(f.d,g,r,s)
s=i.gdv()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gdw()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gdz()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dW
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cr
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gcE(i)
r=h.b
g=s.gey(s)
f=s.gez(s)
s=s.geA(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcl(i).jK()
f=h.c
g=s.gcm(s)
r=s.gcn(s)
s=s.gco()
f.a.uniform3f(f.d,g,r,s)
s=l.aW(i.gcE(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gai(i)
r=h.e
g=s.gbI()
f=s.gbd()
s=s.gbn()
r.a.uniform3f(r.d,g,f,s)
s=i.gjH()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjF()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gdv()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gdw()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gdz()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cs
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gcM()
H.v(p,"$isd",s,"$asd")
if(!C.a.T(p,r)){r.sd9(p.length)
C.a.h(p,r)}r=i.gcl(i)
g=h.d
f=r.gcm(r)
e=r.gcn(r)
r=r.gco()
g.a.uniform3f(g.d,f,e,r)
r=i.gjR()
e=h.b
f=r.gcm(r)
g=r.gcn(r)
r=r.gco()
e.a.uniform3f(e.d,f,g,r)
r=i.gbJ(i)
g=h.c
f=r.gcm(r)
e=r.gcn(r)
r=r.gco()
g.a.uniform3f(g.d,f,e,r)
r=l.bc(i.gcl(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gai(i)
f=h.f
e=g.gbI()
r=g.gbd()
g=g.gbn()
f.a.uniform3f(f.d,e,r,g)
g=i.gcM()
r=g.gea(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gj6()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gd9())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.ct
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gcM()
H.v(p,"$isd",r,"$asd")
if(!C.a.T(p,g)){g.sd9(p.length)
C.a.h(p,g)}d=l.k(0,i.gZ(i))
g=i.gZ(i).aW(new V.a1(0,0,0))
f=h.b
e=g.gey(g)
c=g.gez(g)
g=g.geA(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aW(new V.a1(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.e8(0)
c=h.d
m=new Float32Array(H.by(H.v(new V.cF(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).af(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gai(i)
g=h.e
e=c.gbI()
f=c.gbd()
c=c.gbn()
g.a.uniform3f(g.d,e,f,c)
c=i.gcM()
g=c.gea(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gea(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjI(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gdv()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gdw()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gdz()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cu
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.r
H.v(p,"$isd",z,"$asd")
if(s!=null)if(!C.a.T(p,s)){s.a=p.length
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
s=l.aW(i.a)
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
case C.f:this.V(p,this.Q.d)
z=this.a
u=this.Q.d
z.ah(z.dK,z.by,u)
break
case C.h:this.V(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.dL,z.by,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gZ(u).e8(0)
a.Q=u}z=z.id
z.toString
z.am(u.af(0,!0))}if(w.dy){this.V(p,this.ch)
z=this.a
u=this.ch
z.ab(z.dM,z.dN,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bz
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.V(p,this.cx.d)
z=this.a
u=this.cx.d
z.ah(z.dO,z.bA,u)
u=this.a
z=this.cx.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.V(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.dP,z.bA,u)
u=this.a
z=this.cx.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bC
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bB
u.a.uniform1f(u.d,s)
break
case C.f:this.V(p,this.cy.d)
z=this.a
u=this.cy.d
z.ah(z.dQ,z.bD,u)
u=this.a
z=this.cy.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bB
z.a.uniform1f(z.d,s)
break
case C.h:this.V(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.dR,z.bD,u)
u=this.a
z=this.cy.f
u=u.bC
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bB
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bE
z.a.uniform1f(z.d,t)
break
case C.f:this.V(p,this.db.d)
z=this.a
t=this.db.d
z.ah(z.dS,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break
case C.h:this.V(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.dT,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b1(a)
z=b.e
z.b1(a)
z.aU(a)
z.j_(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.hW()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d2().ak},
t:{
eO:function(){var z,y,x
z=new O.j7()
y=O.d6(V.ax)
z.e=y
y.bf(z.gft(),z.gfu())
y=new O.bi(z,"emission")
y.c=C.c
y.f=new V.a6(0,0,0)
z.f=y
y=new O.bi(z,"ambient")
y.c=C.c
y.f=new V.a6(0,0,0)
z.r=y
y=new O.bi(z,"diffuse")
y.c=C.c
y.f=new V.a6(0,0,0)
z.x=y
y=new O.bi(z,"invDiffuse")
y.c=C.c
y.f=new V.a6(0,0,0)
z.y=y
y=new O.jc(z,"specular")
y.c=C.c
y.f=new V.a6(0,0,0)
y.ch=100
z.z=y
y=new O.j9(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bi(z,"reflect")
y.c=C.c
y.f=new V.a6(0,0,0)
z.cx=y
y=new O.jb(z,"refract")
y.c=C.c
y.f=new V.a6(0,0,0)
y.ch=1
z.cy=y
y=new O.j8(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.iN()
y.bQ(D.a7)
y.e=H.c([],[D.ig])
y.f=H.c([],[D.js])
y.r=H.c([],[D.k5])
y.x=H.c([],[D.kg])
y.y=H.c([],[D.kh])
y.z=H.c([],[D.cJ])
y.Q=null
y.ch=null
y.cR(y.gfs(),y.gfO(),y.gfQ())
z.dx=y
x=y.Q
if(x==null){x=D.U()
y.Q=x
y=x}else y=x
y.h(0,z.gfZ())
y=z.dx
x=y.ch
if(x==null){x=D.U()
y.ch=x
y=x}else y=x
y.h(0,z.gf2())
z.dy=null
return z}}},j8:{"^":"dj;0f,a,b,0c,0d,0e"},dj:{"^":"b;",
bk:["eO",function(){}]},j9:{"^":"dj;a,b,0c,0d,0e"},bi:{"^":"dj;0f,a,b,0c,0d,0e",
dh:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.O(this.b+".color",z,a,this,[V.a6])
y.b=!0
this.a.ag(y)}},
bk:["bP",function(){this.eO()
this.dh(new V.a6(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bk()
z=this.a
z.a=null
z.ag(null)}this.dh(b)}},jb:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
h4:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.ag(z)}},
bk:function(){this.bP()
this.h4(1)}},jc:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
c6:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.ag(z)}},
bk:function(){this.bP()
this.c6(100)}},cI:{"^":"b;"}}],["","",,T,{"^":"",dw:{"^":"d0;"},fc:{"^":"dw;"},kd:{"^":"fc;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.U()
this.y=z}return z},
b1:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}}},ke:{"^":"b;a,0b,0c,0d,0e",
ij:function(a,b,c,d,e){var z,y,x,w
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
w=new T.kd()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ae
W.a4(x,"load",H.l(new T.kf(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ii:function(a){return this.ij(a,!1,!1,!1,!1)},
h0:function(a,b,c){var z,y,x,w
b=V.dX(b,2)
z=V.dX(a.width,2)
y=V.dX(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d5(null,null)
x.width=z
x.height=y
w=H.e(C.l.eD(x,"2d"),"$iseh")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nl(w.getImageData(0,0,x.width,x.height))}}},kf:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h0(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a4.iT(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.hX()}++x.e}}}],["","",,V,{"^":"",bF:{"^":"b;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isaP:1},aP:{"^":"b;"},eN:{"^":"b;",
aS:["eN",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cT",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaP:1},az:{"^":"eN;0a",
aS:function(a,b){return!this.eN(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}},jG:{"^":"b;0a,0b",
aS:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bQ(this.a)
y=H.bQ(this.b)
return z+".."+y},
$isaP:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.F(a,0)
y=C.b.F(b,0)
x=new V.jG()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jV:{"^":"b;0a",
eT:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b5(0,0,[P.n,P.S])
for(y=new H.dh(a,a.gm(a),0,[H.ak(a,"z",0)]);y.D();)z.p(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.bp(0,b)},
i:function(a){var z=this.a
return P.cj(z.ga6(z),0,null)},
$isaP:1,
t:{
x:function(a){var z=new V.jV()
z.eT(a)
return z}}},f5:{"^":"b;a,b,0c,0d",
gim:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fj(this.a.l(0,b))
w.a=H.c([],[V.aP])
w.c=!1
C.a.h(this.c,w)
return w},
i_:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},fg:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dZ(this.b,"\n","\\n")
y=H.dZ(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fh:{"^":"b;a,b,0c",
aG:function(a,b,c){var z,y,x
H.v(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},km:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f5(this,b)
z.c=H.c([],[V.fj])
this.a.p(0,b,z)}return z},
O:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fh(this,a)
y=P.h
z.c=new H.b5(0,0,[y,y])
this.b.p(0,a,z)}return z},
eu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fg])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.i_(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cj(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.gim(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cj(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fg(o==null?p.b:o,q,t)}++t}}},
t:{
cK:function(){var z,y
z=new V.km()
y=P.h
z.a=new H.b5(0,0,[y,V.f5])
z.b=new H.b5(0,0,[y,V.fh])
return z}}},fj:{"^":"eN;b,0c,0a",
i:function(a){return this.b.b+": "+this.cT(0)}}}],["","",,X,{"^":"",eg:{"^":"b;",$isaR:1},iy:{"^":"f9;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.U()
this.x=z}return z}},jp:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.U()
this.f=z}return z},
aY:[function(a){var z
H.e(a,"$isD")
z=this.f
if(!(z==null))z.H(a)},function(){return this.aY(null)},"j4","$1","$0","gcV",0,2,1],
saT:function(a){var z,y
if(!J.R(this.b,a)){z=this.b
if(z!=null)z.gB().J(0,this.gcV())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gcV())
z=new D.O("mover",y,this.b,this,[U.al])
z.b=!0
this.aY(z)}},
$isaR:1,
$iseg:1},f9:{"^":"b;"}}],["","",,V,{"^":"",
nY:function(a){P.kl(C.N,new V.nZ(a))},
b2:{"^":"b;",
bg:function(a){this.b=new P.iB(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bd]])},
L:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bd]))
y=a.split("\n")
for(z=y.length,x=[W.bd],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.I(u)
s=this.b.fe(u,0,u.length)
r=s==null?u:s
C.M.eH(t,H.dZ(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gau(this.d),t)}},
ej:function(a,b){var z,y,x,w
H.v(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bq()
this.c=y}for(y=y.eu(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bH(y[w])}},
nZ:{"^":"m:53;a",
$1:function(a){H.e(a,"$isbs")
P.dY(C.d.es(this.a.gi6(),2)+" fps")}},
ib:{"^":"b2;a,0b,0c,0d",
bH:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break
case"Type":this.L(a.b,"#B11")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bq:function(){var z,y,x,w
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bF())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bF())
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.az()
w=[V.aP]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.O("Num")
x=z.l(0,"Float")
x.d=x.a.O("Num")
x=z.l(0,"Sym")
x.d=x.a.O("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.O("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.O("String")
x=z.l(0,"EndComment")
x.d=x.a.O("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.O("Whitespace")
x=z.l(0,"Id")
y=x.a.O("Id")
x.d=y
x=[P.h]
y.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iz:{"^":"b2;a,0b,0c,0d",
bH:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Preprocess":this.L(a.b,"#737")
break
case"Reserved":this.L(a.b,"#119")
break
case"Symbol":this.L(a.b,"#611")
break
case"Type":this.L(a.b,"#171")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bq:function(){var z,y,x,w
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bF())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.az()
w=[V.aP]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.O("Num")
y=z.l(0,"Float")
y.d=y.a.O("Num")
y=z.l(0,"Sym")
y.d=y.a.O("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.O("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.O("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.O("Whitespace")
y=z.l(0,"Id")
x=y.a.O("Id")
y.d=x
y=[P.h]
x.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iA:{"^":"b2;a,0b,0c,0d",
bH:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
this.L("=","#111")
break
case"Id":this.L(a.b,"#111")
break
case"Other":this.L(a.b,"#111")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break}},
bq:function(){var z,y,x
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bF())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
y=z.l(0,"Other").n(0,"Other")
x=new V.az()
x.a=H.c([],[V.aP])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.O("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.O("String")
y=z.l(0,"Id")
x=y.a.O("Id")
y.d=x
x.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.O("Attr")
x=z.l(0,"Other")
x.d=x.a.O("Other")
return z}},
jr:{"^":"b2;a,0b,0c,0d",
ej:function(a,b){H.v(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
this.L(C.a.n(b,"\n"),"#111")},
bH:function(a){},
bq:function(){return}},
jE:{"^":"b;a,b,0c",
dq:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fD().gcH().j(0,H.j(z))
if(y==null)if(d){c.$0()
this.dm(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e3(this.c).h(0,v)
t=W.iE("radio")
t.checked=x
t.name=z
z=W.ae
W.a4(t,"change",H.l(new V.jF(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e3(this.c).h(0,w.createElement("br"))},
b0:function(a,b,c){return this.dq(a,b,c,!1)},
dm:function(a){var z,y,x,w,v
z=P.fD()
y=P.h
x=P.iV(z.gcH(),y,y)
x.p(0,this.a,a)
w=z.eo(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.md([],[]).cN(""),"",v)}},
jF:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dm(this.d)}}},
k_:{"^":"b;0a,0b",
eV:function(a,b){var z,y,x,w,v,u,t
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
t=W.ae
W.a4(z,"scroll",H.l(new V.k2(x),{func:1,ret:-1,args:[t]}),!1,t)},
dt:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.h],"$asd")
this.h7()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eu(C.a.ic(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hC(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.co(C.B,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
eC:function(a){var z,y,x,w
z=new V.ib("dart")
z.bg("dart")
y=new V.iz("glsl")
y.bg("glsl")
x=new V.iA("html")
x.bg("html")
w=C.a.i1(H.c([z,y,x],[V.b2]),new V.k3(a))
if(w!=null)return w
z=new V.jr("plain")
z.bg("plain")
return z},
dr:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c3(w).a3(w,"+")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a3(w,"-")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eC(a0)
v.ej(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.co(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e5(null)
n.href="#"+H.j(r)
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.f(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.B)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.B)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gX(w);b.D();)h.appendChild(b.gM(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hB:function(a){var z,y,x,w,v,u,t
H.v(a,"$isd",[P.h],"$asd")
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
x=H.e(w.insertCell(-1),"$isdv").style
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
t=H.e(w.insertCell(-1),"$isdv")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
h7:function(){var z,y,x,w
if(this.b!=null)return
z=V.cK()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.az()
w=[V.aP]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
x=z.l(0,"Other").n(0,"Other")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.O("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.O("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.O("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.O("Link")
x=z.l(0,"Other")
x.d=x.a.O("Other")
this.b=z},
t:{
k0:function(a,b){var z=new V.k_()
z.eV(a,!0)
return z}}},
k2:{"^":"m:13;a",
$1:function(a){P.fe(C.q,new V.k1(this.a))}},
k1:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.ae(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k3:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb2").a===this.a}}}],["","",,L,{"^":"",
hy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.k0("Test 025",!0)
y=W.d5(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dt(H.c(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.hB(H.c(["shapes"],x))
z.dt(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kj(w,!0,!0,!0,!1)
u=U.d9(null)
u.h(0,U.c8(V.eR(0,0,-2.5)))
u.h(0,U.fG(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a6(1,1,1)
s=v.f.ii("../resources/Test.png")
r=new D.cJ()
r.z=0.6
r.Q=1
r.f=new V.a6(1,1,1)
r.z=1.0471975511965976
r.ch=1
r.cx=0
r.cy=0
r.a=new V.a1(0,0,0)
r.b=new V.H(0,0,1)
r.c=new V.H(0,1,0)
r.d=new V.H(-1,0,0)
q=r.e
r.e=u
u.gB().h(0,r.gc1())
p=new D.O("mover",q,r.e,r,[U.al])
p.b=!0
r.a7(p)
if(!r.f.v(0,t)){q=r.f
r.f=t
p=new D.O("color",q,t,r,[V.a6])
p.b=!0
r.a7(p)}p=r.r
if(p!==s){if(p!=null)p.gB().J(0,r.gc1())
q=r.r
r.r=s
s.gB().h(0,r.gc1())
s=new D.O("texture",q,r.r,r,[T.fc])
s.b=!0
r.a7(s)}s=r.z
if(!$.o.$2(s,0.5)){q=r.z
r.z=0.5
s=1/(Math.sqrt(2)*Math.tan(r.z))
r.x=s
r.y=s*r.Q
s=new D.O("fov",q,r.z,r,[P.p])
s.b=!0
r.a7(s)}s=r.Q
if(!$.o.$2(s,1)){q=r.Q
r.Q=1
s=r.x
if(typeof s!=="number")return s.k()
r.y=s
s=new D.O("ratio",q,1,r,[P.p])
s.b=!0
r.a7(s)}s=r.ch
if(!$.o.$2(s,0.5)){q=r.ch
r.ch=0.5
s=new D.O("attenuation0",q,0.5,r,[P.p])
s.b=!0
r.a7(s)}s=r.cx
if(!$.o.$2(s,0.05)){q=r.cx
r.cx=0.05
s=new D.O("attenuation1",q,0.05,r,[P.p])
s.b=!0
r.a7(s)}s=r.cy
if(!$.o.$2(s,0.05)){q=r.cy
r.cy=0.05
s=new D.O("attenuation2",q,0.05,r,[P.p])
s.b=!0
r.a7(s)}o=O.eO()
o.dx.h(0,r)
s=o.r
s.sai(0,new V.a6(0.05,0.05,0.05))
s=o.x
s.sai(0,new V.a6(0.7,0.7,0.7))
s=o.z
s.sai(0,new V.a6(0.3,0.3,0.3))
s=o.z
if(s.c===C.c){s.c=C.i
s.bP()
s.c6(100)
p=s.a
p.a=null
p.ag(null)}s.c6(100)
n=E.d8(null,!0,null,"",null,null)
n.sa9(0,F.hE(30,1,15,0.5))
m=E.d8(null,!0,null,"",null,null)
m.saT(U.c8(V.eQ(3,3,3,1)))
s=F.dQ(1,null,null,1)
s.b4()
m.sa9(0,s)
l=U.d9(null)
l.h(0,U.fG(!1,!1,v.r,!1,!1,!1,null,!1))
l.h(0,U.c8(V.eP(3.141592653589793)))
l.h(0,U.c8(V.eR(0,0,5)))
k=E.d8(null,!0,null,"",null,null)
s=U.d9(null)
s.h(0,U.c8(V.eQ(0.1,0.1,0.1,1)))
s.h(0,u)
k.saT(s)
k.sa9(0,F.dR(0,!1,!0,1,40,1))
s=O.eO()
s.f.sai(0,new V.a6(1,1,1))
k.sb9(s)
s=new M.ip()
p=O.d6(E.aO)
s.d=p
p.bf(s.gfw(),s.gfz())
s.e=null
s.f=null
s.r=null
s.x=null
j=new X.jp()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saT(null)
p=j.c
if(!$.o.$2(p,1.0471975511965976)){q=j.c
j.c=1.0471975511965976
p=new D.O("fov",q,1.0471975511965976,j,[P.p])
p.b=!0
j.aY(p)}p=j.d
if(!$.o.$2(p,0.1)){q=j.d
j.d=0.1
p=new D.O("near",q,0.1,j,[P.p])
p.b=!0
j.aY(p)}p=j.e
if(!$.o.$2(p,2000)){q=j.e
j.e=2000
p=new D.O("far",q,2000,j,[P.p])
p.b=!0
j.aY(p)}p=s.a
if(p!==j){if(p!=null)p.gB().J(0,s.gao())
q=s.a
s.a=j
j.gB().h(0,s.gao())
p=new D.O("camera",q,s.a,s,[X.eg])
p.b=!0
s.aK(p)}i=new X.iy()
p=new V.bb(0,0,0,1)
i.a=p
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
p=V.f0(0,0,1,1)
i.r=p
p=s.b
if(p!==i){if(p!=null)p.gB().J(0,s.gao())
q=s.b
s.b=i
i.gB().h(0,s.gao())
p=new D.O("target",q,s.b,s,[X.f9])
p.b=!0
s.aK(p)}s.sb9(null)
s.sb9(o)
s.d.h(0,n)
s.d.h(0,m)
s.d.h(0,k)
s.a.saT(l)
p=v.d
if(p!==s){if(p!=null)p.gB().J(0,v.gcU())
v.d=s
s.gB().h(0,v.gcU())
v.eX()}s=new V.jE("shapes",!0)
x=x.getElementById("shapes")
s.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
s.b0(0,"Cube",new L.nL(n))
s.b0(0,"Cylinder",new L.nM(n))
s.b0(0,"Cone",new L.nN(n))
s.b0(0,"Sphere",new L.nO(n))
s.dq(0,"Toroid",new L.nP(n),!0)
s.b0(0,"Knot",new L.nQ(n))
x=v.z
if(x==null){x=D.U()
v.z=x}s={func:1,ret:-1,args:[D.D]}
p=H.l(new L.nR(z,o),s)
h=x.b
if(h==null){s=H.c([],[s])
x.b=s
x=s}else x=h
C.a.h(x,p)
V.nY(v)},
nL:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.dQ(1,null,null,1))}},
nM:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.dR(1,!0,!0,1,40,1))}},
nN:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.dR(1,!0,!1,1,40,0))}},
nO:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.o_(6,null,1,6))}},
nP:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.hE(30,1,15,0.5))}},
nQ:{"^":"m:0;a",
$0:function(){this.a.sa9(0,F.nI(120,1,2,12,0.3,3))}},
nR:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isD")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dr("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dr("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eF.prototype
return J.eE.prototype}if(typeof a=="string")return J.cd.prototype
if(a==null)return J.eG.prototype
if(typeof a=="boolean")return J.iI.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ce.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.aK=function(a){if(typeof a=="string")return J.cd.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ce.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.c2=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ce.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.nw=function(a){if(typeof a=="number")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cl.prototype
return a}
J.nx=function(a){if(typeof a=="number")return J.cc.prototype
if(typeof a=="string")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cl.prototype
return a}
J.c3=function(a){if(typeof a=="string")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cl.prototype
return a}
J.aC=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ce.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)}
J.hF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nw(a).P(a,b)}
J.e0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nx(a).k(a,b)}
J.e1=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hv(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).j(a,b)}
J.cZ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hv(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c2(a).p(a,b,c)}
J.hG=function(a,b){return J.c3(a).F(a,b)}
J.hH=function(a,b,c){return J.aC(a).fX(a,b,c)}
J.hI=function(a,b,c,d){return J.aC(a).ds(a,b,c,d)}
J.hJ=function(a,b){return J.c3(a).W(a,b)}
J.d_=function(a,b,c){return J.aK(a).hP(a,b,c)}
J.cs=function(a,b){return J.c2(a).I(a,b)}
J.hK=function(a,b,c,d){return J.c2(a).aF(a,b,c,d)}
J.e2=function(a,b){return J.c2(a).K(a,b)}
J.hL=function(a){return J.aC(a).ghK(a)}
J.e3=function(a){return J.aC(a).gci(a)}
J.c5=function(a){return J.K(a).gU(a)}
J.b1=function(a){return J.c2(a).gX(a)}
J.ao=function(a){return J.aK(a).gm(a)}
J.hM=function(a){return J.aC(a).gcF(a)}
J.hN=function(a){return J.aC(a).giS(a)}
J.e4=function(a){return J.c2(a).iG(a)}
J.hO=function(a,b){return J.aC(a).iL(a,b)}
J.hP=function(a,b){return J.aC(a).sa1(a,b)}
J.hQ=function(a,b,c){return J.c3(a).u(a,b,c)}
J.hR=function(a){return J.c3(a).iZ(a)}
J.ac=function(a){return J.K(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cu.prototype
C.l=W.d4.prototype
C.M=W.bd.prototype
C.P=J.t.prototype
C.a=J.bh.prototype
C.Q=J.eE.prototype
C.e=J.eF.prototype
C.w=J.eG.prototype
C.d=J.cc.prototype
C.b=J.cd.prototype
C.X=J.ce.prototype
C.a2=H.dn.prototype
C.a3=W.jj.prototype
C.E=J.jq.prototype
C.a4=P.dr.prototype
C.F=W.kc.prototype
C.u=J.cl.prototype
C.G=W.bU.prototype
C.H=W.l8.prototype
C.J=new P.hW(!1)
C.I=new P.hV(C.J)
C.K=new P.jo()
C.L=new P.kV()
C.j=new P.lW()
C.c=new A.cw(0,"ColorSourceType.None")
C.i=new A.cw(1,"ColorSourceType.Solid")
C.f=new A.cw(2,"ColorSourceType.Texture2D")
C.h=new A.cw(3,"ColorSourceType.TextureCube")
C.q=new P.be(0)
C.N=new P.be(5e6)
C.O=new P.iC("element",!0,!1,!1,!1)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.aa([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.aa([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.aa([]),[P.h])
C.a_=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.i7(0,{},C.A,[P.h,P.h])
C.k=new P.kO(!1)
$.aE=0
$.bG=null
$.eb=null
$.dK=!1
$.ht=null
$.hm=null
$.hB=null
$.cU=null
$.cX=null
$.dU=null
$.bz=null
$.bZ=null
$.c_=null
$.dL=!1
$.Y=C.j
$.aN=null
$.d7=null
$.ex=null
$.ew=null
$.es=null
$.er=null
$.eq=null
$.ep=null
$.o=V.jd()
$.eX=null
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
I.$lazy(y,x,w)}})(["eo","$get$eo",function(){return H.hs("_$dart_dartClosure")},"dc","$get$dc",function(){return H.hs("_$dart_js")},"fk","$get$fk",function(){return H.aH(H.cL({
toString:function(){return"$receiver$"}}))},"fl","$get$fl",function(){return H.aH(H.cL({$method$:null,
toString:function(){return"$receiver$"}}))},"fm","$get$fm",function(){return H.aH(H.cL(null))},"fn","$get$fn",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aH(H.cL(void 0))},"fs","$get$fs",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fp","$get$fp",function(){return H.aH(H.fq(null))},"fo","$get$fo",function(){return H.aH(function(){try{null.$method$}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aH(H.fq(void 0))},"ft","$get$ft",function(){return H.aH(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return P.l9()},"c0","$get$c0",function(){return[]},"fH","$get$fH",function(){return P.kS()},"fO","$get$fO",function(){return H.jh(H.by(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hb","$get$hb",function(){return P.jL("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hi","$get$hi",function(){return P.n2()},"em","$get$em",function(){return{}},"fS","$get$fS",function(){return P.eK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dG","$get$dG",function(){return P.dg(P.h,P.ca)},"fK","$get$fK",function(){return Z.at(0)},"fI","$get$fI",function(){return Z.at(511)},"aX","$get$aX",function(){return Z.at(1)},"aW","$get$aW",function(){return Z.at(2)},"aV","$get$aV",function(){return Z.at(4)},"aY","$get$aY",function(){return Z.at(8)},"aZ","$get$aZ",function(){return Z.at(16)},"bS","$get$bS",function(){return Z.at(32)},"bT","$get$bT",function(){return Z.at(64)},"fJ","$get$fJ",function(){return Z.at(96)},"bw","$get$bw",function(){return Z.at(128)},"aU","$get$aU",function(){return Z.at(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.M,args:[F.aq]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.an,P.p,P.p]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.M,args:[D.D]},{func:1,ret:-1,args:[P.n,[P.i,E.aO]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[W.ae]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.S,args:[W.aG]},{func:1,ret:-1,args:[P.n,[P.i,U.al]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.n,[P.i,D.a7]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.n,[P.i,V.ax]]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.S,args:[W.G]},{func:1,ret:V.a1,args:[P.p]},{func:1,ret:W.G},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.S,args:[W.V,P.h,P.h,W.cn]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.M,args:[P.a5]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.S,args:[P.p,P.p]},{func:1,ret:P.Q,args:[P.n]},{func:1,ret:-1,args:[W.bU]},{func:1,ret:P.M,args:[P.h,,]},{func:1,ret:P.S,args:[[P.i,D.a7]]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.L,P.h,P.h],args:[[P.L,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b_,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.M,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[P.bs]},{func:1,ret:P.S,args:[V.b2]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.V,args:[W.G]}]
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
if(x==y)H.o2(d||a)
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
Isolate.aa=a.aa
Isolate.dS=a.dS
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
if(typeof dartMainRunner==="function")dartMainRunner(L.hy,[])
else L.hy([])})})()
//# sourceMappingURL=test.dart.js.map
