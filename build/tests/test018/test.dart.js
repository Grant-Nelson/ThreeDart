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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isu)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dT(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dV=function(){}
var dart=[["","",,H,{"^":"",oD:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dX==null){H.nG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cn("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$df()]
if(v!=null)return v
v=H.nN(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$df(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
u:{"^":"b;",
w:function(a,b){return a===b},
gX:function(a){return H.bT(a)},
i:["eX",function(a){return"Instance of '"+H.bo(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iH:{"^":"u;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isV:1},
eI:{"^":"u;",
w:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isN:1},
dg:{"^":"u;",
gX:function(a){return 0},
i:["eZ",function(a){return String(a)}]},
jp:{"^":"dg;"},
co:{"^":"dg;"},
ci:{"^":"dg;",
i:function(a){var z=a[$.$get$eq()]
if(z==null)return this.eZ(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isce:1},
bk:{"^":"u;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.E("add"))
a.push(b)},
iY:function(a,b){if(!!a.fixed$length)H.q(P.E("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cl(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var z
if(!!a.fixed$length)H.q(P.E("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aR(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
iA:function(a){return this.n(a,"")},
it:function(a,b,c,d){var z,y,x
H.B(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aR(a))}return y},
ir:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.V,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aR(a))}throw H.a(H.cF())},
iq:function(a,b){return this.ir(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bY:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a5(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a5(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gip:function(a){if(a.length>0)return a[0]
throw H.a(H.cF())},
gav:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cF())},
aG:function(a,b,c,d){var z
H.B(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.E("fill range"))
P.aV(b,c,a.length,null,null,null)
for(z=b;z.R(0,c);z=z.B(0,1))a[z]=d},
dP:function(a,b){var z,y
H.l(b,{func:1,ret:P.V,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aR(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
i:function(a){return P.dd(a,"[","]")},
ga0:function(a){return new J.aG(a,a.length,0,[H.y(a,0)])},
gX:function(a){return H.bT(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cv(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aN(a,b))
if(b>=a.length||b<0)throw H.a(H.aN(a,b))
return a[b]},
p:function(a,b,c){H.G(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aN(a,b))
if(b>=a.length||b<0)throw H.a(H.aN(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a5(a,0,4294967295,"length",null))
return J.eF(new Array(a),b)},
eF:function(a,b){return J.bN(H.c(a,[b]))},
bN:function(a){H.c9(a)
a.fixed$length=Array
return a}}},
oC:{"^":"bk;$ti"},
aG:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cg:{"^":"u;",
jc:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.E(""+a+".toInt()"))},
cJ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eI:function(a,b){var z,y
if(b>20)throw H.a(P.a5(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bi:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.E("Unexpected toString result: "+z))
x=J.aO(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.aj(b))
return a*b},
bm:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dI(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dI(a,b)},
dI:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aR:function(a,b){var z
if(a>0)z=this.dG(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hu:function(a,b){if(b<0)throw H.a(H.aj(b))
return this.dG(a,b)},
dG:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.a(H.aj(b))
return a<b},
$ist:1,
$isa7:1},
eH:{"^":"cg;",$isn:1},
eG:{"^":"cg;"},
ch:{"^":"u;",
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aN(a,b))
if(b<0)throw H.a(H.aN(a,b))
if(b>=a.length)H.q(H.aN(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aN(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.cv(b,null,null))
return a+b},
b2:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aj(b))
c=P.aV(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.aj(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.aj(c))
if(typeof c!=="number")return c.R()
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){H.G(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.a(P.cl(b,null,null))
if(b>c)throw H.a(P.cl(b,null,null))
if(c>a.length)throw H.a(P.cl(c,null,null))
return a.substring(b,c)},
an:function(a,b){return this.v(a,b,null)},
je:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ad:function(a,b){return this.iM(a,b," ")},
eo:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
en:function(a,b){return this.eo(a,b,0)},
i8:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.hD(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseV:1,
$ish:1}}],["","",,H,{"^":"",
cZ:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cF:function(){return new P.dv("No element")},
iF:function(){return new P.dv("Too many elements")},
w:{"^":"kD;a",
gm:function(a){return this.a.length},
k:function(a,b){return C.b.a_(this.a,b)},
$ascP:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
ex:{"^":"i;"},
cH:{"^":"ex;$ti",
ga0:function(a){return new H.dk(this,this.gm(this),0,[H.ao(this,"cH",0)])},
d4:function(a,b){return this.eY(0,H.l(b,{func:1,ret:P.V,args:[H.ao(this,"cH",0)]}))}},
dk:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aO(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aR(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
j1:{"^":"i;a,b,$ti",
ga0:function(a){return new H.j2(J.b4(this.a),this.b,this.$ti)},
gm:function(a){return J.aq(this.a)},
J:function(a,b){return this.b.$1(J.cu(this.a,b))},
$asi:function(a,b){return[b]}},
j2:{"^":"de;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$asde:function(a,b){return[b]}},
j3:{"^":"cH;a,b,$ti",
gm:function(a){return J.aq(this.a)},
J:function(a,b){return this.b.$1(J.cu(this.a,b))},
$ascH:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dI:{"^":"i;a,b,$ti",
ga0:function(a){return new H.l8(J.b4(this.a),this.b,this.$ti)}},
l8:{"^":"de;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
cB:{"^":"b;$ti"},
cP:{"^":"b;$ti",
p:function(a,b,c){H.G(b)
H.B(c,H.ao(this,"cP",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aG:function(a,b,c,d){H.B(d,H.ao(this,"cP",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kD:{"^":"cG+cP;"}}],["","",,H,{"^":"",
i6:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nz:function(a){return init.types[H.G(a)]},
hv:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isK},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.aj(a))
return z},
bT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jA:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bo:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$isco){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.an(w,1)
r=H.dY(H.c9(H.bc(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
js:function(){if(!!self.location)return self.location.href
return},
eX:function(a){var z,y,x,w,v
H.c9(a)
z=J.aq(a)
if(typeof z!=="number")return z.eR()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jB:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.aj(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aR(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.aj(w))}return H.eX(z)},
eY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.aj(x))
if(x<0)throw H.a(H.aj(x))
if(x>65535)return H.jB(a)}return H.eX(a)},
jC:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eR()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bU:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aR(z,10))>>>0,56320|z&1023)}}throw H.a(P.a5(a,0,1114111,null,null))},
an:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jz:function(a){return a.b?H.an(a).getUTCFullYear()+0:H.an(a).getFullYear()+0},
jx:function(a){return a.b?H.an(a).getUTCMonth()+1:H.an(a).getMonth()+1},
jt:function(a){return a.b?H.an(a).getUTCDate()+0:H.an(a).getDate()+0},
ju:function(a){return a.b?H.an(a).getUTCHours()+0:H.an(a).getHours()+0},
jw:function(a){return a.b?H.an(a).getUTCMinutes()+0:H.an(a).getMinutes()+0},
jy:function(a){return a.b?H.an(a).getUTCSeconds()+0:H.an(a).getSeconds()+0},
jv:function(a){return a.b?H.an(a).getUTCMilliseconds()+0:H.an(a).getMilliseconds()+0},
o:function(a){throw H.a(H.aj(a))},
f:function(a,b){if(a==null)J.aq(a)
throw H.a(H.aN(a,b))},
aN:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.G(J.aq(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.X(b,a,"index",null,z)
return P.cl(b,"index",null)},
nt:function(a,b,c){if(a>c)return new P.cK(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cK(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
aj:function(a){return new P.aF(!0,a,null,null)},
ni:function(a){if(typeof a!=="number")throw H.a(H.aj(a))
return a},
a:function(a){var z
if(a==null)a=new P.eU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hE})
z.name=""}else z.toString=H.hE
return z},
hE:function(){return J.ac(this.dartException)},
q:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aR(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oa(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aR(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dh(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eT(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fj()
u=$.$get$fk()
t=$.$get$fl()
s=$.$get$fm()
r=$.$get$fq()
q=$.$get$fr()
p=$.$get$fo()
$.$get$fn()
o=$.$get$ft()
n=$.$get$fs()
m=v.ac(y)
if(m!=null)return z.$1(H.dh(H.I(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.dh(H.I(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eT(H.I(y),m))}}return z.$1(new H.kC(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f3()
return a},
bH:function(a){var z
if(a==null)return new H.h_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h_(a)},
nw:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nI:function(a,b,c,d,e,f){H.e(a,"$isce")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.r("Unsupported number of arguments for wrapped closure"))},
bF:function(a,b){var z
H.G(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nI)
a.$identity=z
return z},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.jI(z).r}else x=d
w=e?Object.create(new H.k5().constructor.prototype):Object.create(new H.d6(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aH
if(typeof u!=="number")return u.B()
$.aH=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.el(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nz,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ee:H.d7
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.el(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i_:function(a,b,c,d){var z=H.d7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
el:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i_(y,!w,z,b)
if(y===0){w=$.aH
if(typeof w!=="number")return w.B()
$.aH=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bK
if(v==null){v=H.cx("self")
$.bK=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aH
if(typeof w!=="number")return w.B()
$.aH=w+1
t+=w
w="return function("+t+"){return this."
v=$.bK
if(v==null){v=H.cx("self")
$.bK=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i0:function(a,b,c,d){var z,y
z=H.d7
y=H.ee
switch(b?-1:a){case 0:throw H.a(H.jS("Intercepted function with no arguments."))
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
z=$.bK
if(z==null){z=H.cx("self")
$.bK=z}y=$.ed
if(y==null){y=H.cx("receiver")
$.ed=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aH
if(typeof y!=="number")return y.B()
$.aH=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aH
if(typeof y!=="number")return y.B()
$.aH=y+1
return new Function(z+y+"}")()},
dT:function(a,b,c,d,e,f,g){var z,y
z=J.bN(H.c9(b))
H.G(c)
y=!!J.L(d).$isd?J.bN(d):d
return H.i2(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aD(a,"String"))},
nu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aD(a,"double"))},
o_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aD(a,"num"))},
dR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aD(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aD(a,"int"))},
hA:function(a,b){throw H.a(H.aD(a,H.I(b).substring(3)))},
o1:function(a,b){var z=J.aO(b)
throw H.a(H.hZ(a,z.v(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hA(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.o1(a,b)},
c9:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.a(H.aD(a,"List"))},
hx:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.hA(a,b)},
hr:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.G(z)]
else return a.$S()}return},
cr:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hr(J.L(a))
if(z==null)return!1
y=H.hu(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dO)return a
$.dO=!0
try{if(H.cr(a,b))return a
z=H.ct(b)
y=H.aD(a,z)
throw H.a(y)}finally{$.dO=!1}},
dW:function(a,b){if(a!=null&&!H.dS(a,b))H.q(H.aD(a,H.ct(b)))
return a},
hj:function(a){var z
if(a instanceof H.m){z=H.hr(J.L(a))
if(z!=null)return H.ct(z)
return"Closure"}return H.bo(a)},
o7:function(a){throw H.a(new P.ia(H.I(a)))},
hs:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bc:function(a){if(a==null)return
return a.$ti},
pH:function(a,b,c){return H.bI(a["$as"+H.j(c)],H.bc(b))},
bb:function(a,b,c,d){var z
H.I(c)
H.G(d)
z=H.bI(a["$as"+H.j(c)],H.bc(b))
return z==null?null:z[d]},
ao:function(a,b,c){var z
H.I(b)
H.G(c)
z=H.bI(a["$as"+H.j(b)],H.bc(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.G(b)
z=H.bc(a)
return z==null?null:z[b]},
ct:function(a){var z=H.bd(a,null)
return z},
bd:function(a,b){var z,y
H.v(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dY(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.n8(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bd(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bd(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bd(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bd(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nv(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.bd(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dY:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.ap("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bd(u,c)}v="<"+z.i(0)+">"
return v},
bI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c6:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bc(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hm(H.bI(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.I(b)
H.c9(c)
H.I(d)
if(a==null)return a
z=H.c6(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dY(c,0,null)
throw H.a(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ay(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ay(a[y],b,c[y],d))return!1
return!0},
pF:function(a,b,c){return a.apply(b,H.bI(J.L(b)["$as"+H.j(c)],H.bc(b)))},
hw:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="N"||a===-1||a===-2||H.hw(z)}return!1},
dS:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="N"||b===-1||b===-2||H.hw(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cr(a,b)}y=J.L(a).constructor
x=H.bc(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ay(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.dS(a,b))throw H.a(H.aD(a,H.ct(b)))
return a},
ay:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="N")return!0
if('func' in c)return H.hu(a,b,c,d)
if('func' in a)return c.builtin$cls==="ce"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,x,d)
else if(H.ay(a,b,x,d))return!0
else{if(!('$is'+"bM" in y.prototype))return!1
w=y.prototype["$as"+"bM"]
v=H.bI(w,z?a.slice(1):null)
return H.ay(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ct(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hm(H.bI(r,z),b,u,d)},
hu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ay(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ay(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ay(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nZ(m,b,l,d)},
nZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ay(c[w],d,a[w],b))return!1}return!0},
pG:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nN:function(a){var z,y,x,w,v,u
z=H.I($.ht.$1(a))
y=$.cX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hl.$2(a,z))
if(z!=null){y=$.cX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d0(x)
$.cX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d_[z]=x
return x}if(v==="-"){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hz(a,x)
if(v==="*")throw H.a(P.cn(z))
if(init.leafTags[z]===true){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hz(a,x)},
hz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d0:function(a){return J.dZ(a,!1,null,!!a.$isK)},
nY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d0(z)
else return J.dZ(z,c,null,null)},
nG:function(){if(!0===$.dX)return
$.dX=!0
H.nH()},
nH:function(){var z,y,x,w,v,u,t,s
$.cX=Object.create(null)
$.d_=Object.create(null)
H.nC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hB.$1(v)
if(u!=null){t=H.nY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nC:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bE(C.R,H.bE(C.W,H.bE(C.x,H.bE(C.x,H.bE(C.V,H.bE(C.S,H.bE(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ht=new H.nD(v)
$.hl=new H.nE(u)
$.hB=new H.nF(t)},
bE:function(a,b){return a(b)||b},
hD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i5:{"^":"b;$ti",
i:function(a){return P.dl(this)},
p:function(a,b,c){H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
return H.i6()},
$isM:1},
i7:{"^":"i5;a,b,c,$ti",
gm:function(a){return this.a},
by:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.by(0,b))return
return this.dw(b)},
dw:function(a){return this.b[H.I(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.B(this.dw(v),z))}}},
jH:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bN(z)
y=z[0]
x=z[1]
return new H.jH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
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
aL:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ko(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fp:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jm:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eT:function(a,b){return new H.jm(a,b==null?null:b.method)}}},
iK:{"^":"a9;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
dh:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iK(a,y,z?null:b.receiver)}}},
kC:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
oa:{"^":"m:19;a",
$1:function(a){if(!!J.L(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h_:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaC:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
geN:function(){return this},
$isce:1,
geN:function(){return this}},
f9:{"^":"m;"},
k5:{"^":"f9;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d6:{"^":"f9;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d6))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bT(this.a)
else y=typeof z!=="object"?J.ca(z):H.bT(z)
return(y^H.bT(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bo(z)+"'")},
t:{
d7:function(a){return a.a},
ee:function(a){return a.c},
cx:function(a){var z,y,x,w,v
z=new H.d6("self","target","receiver","name")
y=J.bN(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kp:{"^":"a9;a",
i:function(a){return this.a},
t:{
aD:function(a,b){return new H.kp("TypeError: "+H.j(P.cA(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"a9;a",
i:function(a){return this.a},
t:{
hZ:function(a,b){return new H.hY("CastError: "+H.j(P.cA(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
jR:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jS:function(a){return new H.jR(a)}}},
b9:{"^":"eO;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gcN:function(a){return this.a===0},
ga7:function(a){return new H.iQ(this,[H.y(this,0)])},
by:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.ds(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.ds(y,b)}else return this.ix(b)},
ix:function(a){var z=this.d
if(z==null)return!1
return this.cM(this.c7(z,this.cL(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.iy(b)},
iy:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c7(z,this.cL(a))
x=this.cM(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cc()
this.b=z}this.dj(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cc()
this.c=y}this.dj(y,b,c)}else this.iz(b,c)},
iz:function(a,b){var z,y,x,w
H.B(a,H.y(this,0))
H.B(b,H.y(this,1))
z=this.d
if(z==null){z=this.cc()
this.d=z}y=this.cL(a)
x=this.c7(z,y)
if(x==null)this.cj(z,y,[this.cd(a,b)])
else{w=this.cM(x,a)
if(w>=0)x[w].b=b
else x.push(this.cd(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aR(this))
z=z.c}},
dj:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.bq(a,b)
if(z==null)this.cj(a,b,this.cd(b,c))
else z.b=c},
fD:function(){this.r=this.r+1&67108863},
cd:function(a,b){var z,y
z=new H.iP(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fD()
return z},
cL:function(a){return J.ca(a)&0x3ffffff},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
i:function(a){return P.dl(this)},
bq:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
cj:function(a,b,c){a[b]=c},
fv:function(a,b){delete a[b]},
ds:function(a,b){return this.bq(a,b)!=null},
cc:function(){var z=Object.create(null)
this.cj(z,"<non-identifier-key>",z)
this.fv(z,"<non-identifier-key>")
return z},
$iseL:1},
iP:{"^":"b;a,b,0c,0d"},
iQ:{"^":"ex;a,$ti",
gm:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.iR(z,z.r,this.$ti)
y.c=z.e
return y}},
iR:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nD:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nE:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nF:{"^":"m:55;a",
$1:function(a){return this.a(H.I(a))}},
iI:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseV:1,
$isjJ:1,
t:{
iJ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a3("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nv:function(a){return J.eF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
o0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bC:function(a){return a},
jg:function(a){return new Int8Array(a)},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aN(b,a))},
n2:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nt(a,b,c))
return b},
eR:{"^":"u;",$iseR:1,"%":"ArrayBuffer"},
dr:{"^":"u;",$isdr:1,$iskq:1,"%":"DataView;ArrayBufferView;dq|fU|fV|jh|fW|fX|ba"},
dq:{"^":"dr;",
gm:function(a){return a.length},
$isK:1,
$asK:I.dV},
jh:{"^":"fV;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
p:function(a,b,c){H.G(b)
H.nu(c)
H.aM(b,a,a.length)
a[b]=c},
$ascB:function(){return[P.t]},
$asz:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
ba:{"^":"fX;",
p:function(a,b,c){H.G(b)
H.G(c)
H.aM(b,a,a.length)
a[b]=c},
$ascB:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oM:{"^":"ba;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oN:{"^":"ba;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oO:{"^":"ba;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oP:{"^":"ba;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oQ:{"^":"ba;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oR:{"^":"ba;",
gm:function(a){return a.length},
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
ds:{"^":"ba;",
gm:function(a){return a.length},
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
bY:function(a,b,c){return new Uint8Array(a.subarray(b,H.n2(b,c,a.length)))},
$isds:1,
$isU:1,
"%":";Uint8Array"},
fU:{"^":"dq+z;"},
fV:{"^":"fU+cB;"},
fW:{"^":"dq+z;"},
fX:{"^":"fW+cB;"}}],["","",,P,{"^":"",
la:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nf()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bF(new P.lc(z),1)).observe(y,{childList:true})
return new P.lb(z,y,x)}else if(self.setImmediate!=null)return P.ng()
return P.nh()},
ps:[function(a){self.scheduleImmediate(H.bF(new P.ld(H.l(a,{func:1,ret:-1})),0))},"$1","nf",4,0,12],
pt:[function(a){self.setImmediate(H.bF(new P.le(H.l(a,{func:1,ret:-1})),0))},"$1","ng",4,0,12],
pu:[function(a){P.dA(C.q,H.l(a,{func:1,ret:-1}))},"$1","nh",4,0,12],
dA:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a6(a.a,1000)
return P.ml(z<0?0:z,b)},
fe:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bv]})
z=C.f.a6(a.a,1000)
return P.mm(z<0?0:z,b)},
nb:function(a,b){if(H.cr(a,{func:1,args:[P.b,P.aC]}))return b.iW(a,null,P.b,P.aC)
if(H.cr(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
na:function(){var z,y
for(;z=$.bD,z!=null;){$.c4=null
y=z.b
$.bD=y
if(y==null)$.c3=null
z.a.$0()}},
pE:[function(){$.dP=!0
try{P.na()}finally{$.c4=null
$.dP=!1
if($.bD!=null)$.$get$dJ().$1(P.hn())}},"$0","hn",0,0,3],
hi:function(a){var z=new P.fL(H.l(a,{func:1,ret:-1}))
if($.bD==null){$.c3=z
$.bD=z
if(!$.dP)$.$get$dJ().$1(P.hn())}else{$.c3.b=z
$.c3=z}},
ne:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bD
if(z==null){P.hi(a)
$.c4=$.c3
return}y=new P.fL(a)
x=$.c4
if(x==null){y.b=z
$.c4=y
$.bD=y}else{y.b=x.b
x.b=y
$.c4=y
if(y.b==null)$.c3=y}},
o2:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.a_
if(C.j===y){P.cW(null,null,C.j,a)
return}y.toString
P.cW(null,null,y,H.l(y.cr(a),z))},
fd:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.dA(a,b)}return P.dA(a,H.l(y.cr(b),z))},
kl:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bv]}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.fe(a,b)}x=y.dR(b,P.bv)
$.a_.toString
return P.fe(a,H.l(x,z))},
cV:function(a,b,c,d,e){var z={}
z.a=d
P.ne(new P.nc(z,e))},
he:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.a_
if(y===c)return d.$0()
$.a_=c
z=y
try{y=d.$0()
return y}finally{$.a_=z}},
hf:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.a_
if(y===c)return d.$1(e)
$.a_=c
z=y
try{y=d.$1(e)
return y}finally{$.a_=z}},
nd:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.a_
if(y===c)return d.$2(e,f)
$.a_=c
z=y
try{y=d.$2(e,f)
return y}finally{$.a_=z}},
cW:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cr(d):c.i4(d,-1)
P.hi(d)},
lc:{"^":"m:30;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lb:{"^":"m:52;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ld:{"^":"m:0;a",
$0:function(){this.a.$0()}},
le:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h3:{"^":"b;a,0b,c",
fg:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bF(new P.mo(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fh:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bF(new P.mn(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbv:1,
t:{
ml:function(a,b){var z=new P.h3(!0,0)
z.fg(a,b)
return z},
mm:function(a,b){var z=new P.h3(!1,0)
z.fh(a,b)
return z}}},
mo:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mn:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.f1(w,x)}z.c=y
this.d.$1(z)}},
bB:{"^":"b;0a,b,c,d,e,$ti",
iE:function(a){if(this.c!==6)return!0
return this.b.b.d0(H.l(this.d,{func:1,ret:P.V,args:[P.b]}),a.a,P.V,P.b)},
iw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cr(z,{func:1,args:[P.b,P.aC]}))return H.dW(w.j5(z,a.a,a.b,null,y,P.aC),x)
else return H.dW(w.d0(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b2:{"^":"b;dH:a<,b,0hh:c<,$ti",
eH:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.a_
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nb(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b2(0,$.a_,[c])
w=b==null?1:3
this.dk(new P.bB(x,w,a,b,[z,c]))
return x},
jb:function(a,b){return this.eH(a,null,b)},
dk:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbB")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb2")
z=y.a
if(z<4){y.dk(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cW(null,null,z,H.l(new P.lu(this,a),{func:1,ret:-1}))}},
dD:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbB")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb2")
y=u.a
if(y<4){u.dD(a)
return}this.a=y
this.c=u.c}z.a=this.bt(a)
y=this.b
y.toString
P.cW(null,null,y,H.l(new P.lz(z,this),{func:1,ret:-1}))}},
cf:function(){var z=H.e(this.c,"$isbB")
this.c=null
return this.bt(z)},
bt:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dn:function(a){var z,y,x,w
z=H.y(this,0)
H.dW(a,{futureOr:1,type:z})
y=this.$ti
x=H.c6(a,"$isbM",y,"$asbM")
if(x){z=H.c6(a,"$isb2",y,null)
if(z)P.fP(a,this)
else P.lv(a,this)}else{w=this.cf()
H.B(a,z)
this.a=4
this.c=a
P.c_(this,w)}},
c2:[function(a,b){var z
H.e(b,"$isaC")
z=this.cf()
this.a=8
this.c=new P.ar(a,b)
P.c_(this,z)},function(a){return this.c2(a,null)},"jk","$2","$1","gfp",4,2,51],
$isbM:1,
t:{
lv:function(a,b){var z,y,x
b.a=1
try{a.eH(new P.lw(b),new P.lx(b),null)}catch(x){z=H.ab(x)
y=H.bH(x)
P.o2(new P.ly(b,z,y))}},
fP:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb2")
if(z>=4){y=b.cf()
b.a=a.a
b.c=a.c
P.c_(b,y)}else{y=H.e(b.c,"$isbB")
b.a=2
b.c=a
a.dD(y)}},
c_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isar")
y=y.b
u=v.a
t=v.b
y.toString
P.cV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c_(z.a,b)}y=z.a
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
if(p){H.e(r,"$isar")
y=y.b
u=r.a
t=r.b
y.toString
P.cV(null,null,y,u,t)
return}o=$.a_
if(o==null?q!=null:o!==q)$.a_=q
else o=null
y=b.c
if(y===8)new P.lC(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lB(x,b,r).$0()}else if((y&2)!==0)new P.lA(z,x,b).$0()
if(o!=null)$.a_=o
y=x.b
if(!!J.L(y).$isbM){if(y.a>=4){n=H.e(t.c,"$isbB")
t.c=null
b=t.bt(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fP(y,t)
return}}m=b.b
n=H.e(m.c,"$isbB")
m.c=null
b=m.bt(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isar")
m.a=8
m.c=u}z.a=m
y=m}}}},
lu:{"^":"m:0;a,b",
$0:function(){P.c_(this.a,this.b)}},
lz:{"^":"m:0;a,b",
$0:function(){P.c_(this.b,this.a.a)}},
lw:{"^":"m:30;a",
$1:function(a){var z=this.a
z.a=0
z.dn(a)}},
lx:{"^":"m:50;a",
$2:function(a,b){this.a.c2(a,H.e(b,"$isaC"))},
$1:function(a){return this.$2(a,null)}},
ly:{"^":"m:0;a,b,c",
$0:function(){this.a.c2(this.b,this.c)}},
lC:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eF(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bH(v)
if(this.d){w=H.e(this.a.a.c,"$isar").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isar")
else u.b=new P.ar(y,x)
u.a=!0
return}if(!!J.L(z).$isbM){if(z instanceof P.b2&&z.gdH()>=4){if(z.gdH()===8){w=this.b
w.b=H.e(z.ghh(),"$isar")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jb(new P.lD(t),null)
w.a=!1}}},
lD:{"^":"m:48;a",
$1:function(a){return this.a}},
lB:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.d0(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bH(t)
x=this.a
x.b=new P.ar(z,y)
x.a=!0}}},
lA:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isar")
w=this.c
if(w.iE(z)&&w.e!=null){v=this.b
v.b=w.iw(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bH(u)
w=H.e(this.a.a.c,"$isar")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ar(y,x)
s.a=!0}}},
fL:{"^":"b;a,0b"},
dw:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b2(0,$.a_,[P.n])
z.a=0
this.iC(new P.k8(z,this),!0,new P.k9(z,y),y.gfp())
return y}},
k8:{"^":"m;a,b",
$1:function(a){H.B(a,H.ao(this.b,"dw",0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.ao(this.b,"dw",0)]}}},
k9:{"^":"m:0;a,b",
$0:function(){this.b.dn(this.a.a)}},
f6:{"^":"b;$ti"},
k7:{"^":"b;"},
bv:{"^":"b;"},
ar:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa9:1},
mR:{"^":"b;",$ispr:1},
nc:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lX:{"^":"mR;",
j6:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.a_){a.$0()
return}P.he(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bH(x)
P.cV(null,null,this,z,H.e(y,"$isaC"))}},
j7:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.a_){a.$1(b)
return}P.hf(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bH(x)
P.cV(null,null,this,z,H.e(y,"$isaC"))}},
i4:function(a,b){return new P.lZ(this,H.l(a,{func:1,ret:b}),b)},
cr:function(a){return new P.lY(this,H.l(a,{func:1,ret:-1}))},
dR:function(a,b){return new P.m_(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eF:function(a,b){H.l(a,{func:1,ret:b})
if($.a_===C.j)return a.$0()
return P.he(null,null,this,a,b)},
d0:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a_===C.j)return a.$1(b)
return P.hf(null,null,this,a,b,c,d)},
j5:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a_===C.j)return a.$2(b,c)
return P.nd(null,null,this,a,b,c,d,e,f)},
iW:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lZ:{"^":"m;a,b,c",
$0:function(){return this.a.eF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lY:{"^":"m:3;a,b",
$0:function(){return this.a.j6(this.b)}},
m_:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.j7(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iS:function(a,b,c,d,e){return new H.b9(0,0,[d,e])},
iT:function(a,b,c){H.c9(a)
return H.v(H.nw(a,new H.b9(0,0,[b,c])),"$iseL",[b,c],"$aseL")},
dj:function(a,b){return new H.b9(0,0,[a,b])},
cj:function(a,b,c,d){return new P.lK(0,0,[d])},
iE:function(a,b,c){var z,y
if(P.dQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c5()
C.a.h(y,a)
try{P.n9(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f7(b,H.hx(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dd:function(a,b,c){var z,y,x
if(P.dQ(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$c5()
C.a.h(y,a)
try{x=z
x.a=P.f7(x.gaN(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaN()+c
y=z.gaN()
return y.charCodeAt(0)==0?y:y},
dQ:function(a){var z,y
for(z=0;y=$.$get$c5(),z<y.length;++z)if(a===y[z])return!0
return!1},
n9:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.j(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.H();t=s,s=r){r=z.gN(z);++x
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
iU:function(a,b,c){var z=P.iS(null,null,null,b,c)
a.K(0,new P.iV(z,b,c))
return z},
eM:function(a,b){var z,y
z=P.cj(null,null,null,b)
for(y=J.b4(a);y.H();)z.h(0,H.B(y.gN(y),b))
return z},
dl:function(a){var z,y,x
z={}
if(P.dQ(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$c5(),a)
x=y
x.a=x.gaN()+"{"
z.a=!0
J.e4(a,new P.j_(z,y))
z=y
z.a=z.gaN()+"}"}finally{z=$.$get$c5()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaN()
return z.charCodeAt(0)==0?z:z},
lK:{"^":"lE;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){var z=new P.fT(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscS")!=null}else{y=this.fq(b)
return y}},
fq:function(a){var z=this.d
if(z==null)return!1
return this.c5(this.dz(z,a),a)>=0},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dL()
this.b=z}return this.dl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dL()
this.c=y}return this.dl(y,b)}else return this.fi(0,b)},
fi:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.dL()
this.d=z}y=this.dq(b)
x=z[y]
if(x==null)z[y]=[this.c1(b)]
else{if(this.c5(x,b)>=0)return!1
x.push(this.c1(b))}return!0},
G:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dE(this.c,b)
else return this.h8(0,b)},
h8:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dz(z,b)
x=this.c5(y,b)
if(x<0)return!1
this.dJ(y.splice(x,1)[0])
return!0},
dl:function(a,b){H.B(b,H.y(this,0))
if(H.e(a[b],"$iscS")!=null)return!1
a[b]=this.c1(b)
return!0},
dE:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscS")
if(z==null)return!1
this.dJ(z)
delete a[b]
return!0},
dm:function(){this.r=this.r+1&67108863},
c1:function(a){var z,y
z=new P.cS(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dm()
return z},
dJ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dm()},
dq:function(a){return J.ca(a)&0x3ffffff},
dz:function(a,b){return a[this.dq(b)]},
c5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
t:{
dL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cS:{"^":"b;a,0b,0c"},
fT:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lE:{"^":"jT;"},
iV:{"^":"m:7;a,b,c",
$2:function(a,b){this.a.p(0,H.B(a,this.b),H.B(b,this.c))}},
cG:{"^":"lL;",$isi:1,$isd:1},
z:{"^":"b;$ti",
ga0:function(a){return new H.dk(a,this.gm(a),0,[H.bb(this,a,"z",0)])},
J:function(a,b){return this.k(a,b)},
jd:function(a,b){var z,y,x
z=H.c([],[H.bb(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.p(z,y,this.k(a,y));++y}return z},
d1:function(a){return this.jd(a,!0)},
aG:function(a,b,c,d){var z
H.B(d,H.bb(this,a,"z",0))
P.aV(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.dd(a,"[","]")}},
eO:{"^":"al;"},
j_:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
al:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bb(this,a,"al",0),H.bb(this,a,"al",1)]})
for(z=J.b4(this.ga7(a));z.H();){y=z.gN(z)
b.$2(y,this.k(a,y))}},
gm:function(a){return J.aq(this.ga7(a))},
i:function(a){return P.dl(a)},
$isM:1},
mt:{"^":"b;$ti",
p:function(a,b,c){H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
j0:{"^":"b;$ti",
k:function(a,b){return J.e3(this.a,b)},
p:function(a,b,c){J.d2(this.a,H.B(b,H.y(this,0)),H.B(c,H.y(this,1)))},
K:function(a,b){J.e4(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.aq(this.a)},
i:function(a){return J.ac(this.a)},
$isM:1},
fA:{"^":"mu;a,$ti"},
jV:{"^":"b;$ti",
ar:function(a,b){var z
for(z=J.b4(H.v(b,"$isi",this.$ti,"$asi"));z.H();)this.h(0,z.gN(z))},
i:function(a){return P.dd(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e8("index"))
if(b<0)H.q(P.a5(b,0,null,"index",null))
for(z=new P.fT(this,this.r,this.$ti),z.c=this.e,y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.X(b,this,"index",null,y))},
$isi:1},
jT:{"^":"jV;"},
lL:{"^":"b+z;"},
mu:{"^":"j0+mt;$ti"}}],["","",,P,{"^":"",hV:{"^":"cc;a",
iG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aV(c,d,b.length,null,null,null)
z=$.$get$fN()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cZ(C.b.I(b,s))
o=H.cZ(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
w.a+=C.b.v(b,x,y)
w.a+=H.bU(r)
x=s
continue}}throw H.a(P.a3("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.eb(b,u,d,v,t,k)
else{j=C.f.bm(k-1,4)+1
if(j===1)throw H.a(P.a3("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b2(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.eb(b,u,d,v,t,i)
else{j=C.f.bm(i,4)
if(j===1)throw H.a(P.a3("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b2(b,d,d,j===2?"==":"=")}return b},
$ascc:function(){return[[P.d,P.n],P.h]},
t:{
eb:function(a,b,c,d,e,f){if(C.f.bm(f,4)!==0)throw H.a(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a3("Invalid base64 padding, more than two '=' characters",a,b))}}},hW:{"^":"b6;a",
$asb6:function(){return[[P.d,P.n],P.h]}},cc:{"^":"b;$ti"},b6:{"^":"k7;$ti"},im:{"^":"cc;",
$ascc:function(){return[P.h,[P.d,P.n]]}},iB:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iA:{"^":"b6;a",
fs:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.ap("")
if(w>b)v.a+=C.b.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hQ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb6:function(){return[P.h,P.h]}},kQ:{"^":"im;a",
gik:function(){return C.L}},kX:{"^":"b6;",
ba:function(a,b,c){var z,y,x,w
z=a.length
P.aV(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mP(0,0,x)
if(w.fz(a,b,z)!==z)w.dL(J.hJ(a,z-1),0)
return C.a2.bY(x,0,w.b)},
cz:function(a){return this.ba(a,0,null)},
$asb6:function(){return[P.h,[P.d,P.n]]}},mP:{"^":"b;a,b,c",
dL:function(a,b){var z,y,x,w,v
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
fz:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dL(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kR:{"^":"b6;a",
ba:function(a,b,c){var z,y,x,w,v
H.v(a,"$isd",[P.n],"$asd")
z=P.kS(!1,a,b,c)
if(z!=null)return z
y=J.aq(a)
P.aV(b,c,y,null,null,null)
x=new P.ap("")
w=new P.mM(!1,x,!0,0,0,0)
w.ba(a,b,y)
w.is(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cz:function(a){return this.ba(a,0,null)},
$asb6:function(){return[[P.d,P.n],P.h]},
t:{
kS:function(a,b,c,d){H.v(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.kT(!1,b,c,d)
return},
kT:function(a,b,c,d){var z,y,x
z=$.$get$fF()
if(z==null)return
y=0===c
if(y&&!0)return P.dF(z,b)
x=b.length
d=P.aV(c,d,x,null,null,null)
if(y&&d===x)return P.dF(z,b)
return P.dF(z,b.subarray(c,d))},
dF:function(a,b){if(P.kV(b))return
return P.kW(a,b)},
kW:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kV:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kU:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mM:{"^":"b;a,b,c,d,e,f",
is:function(a,b,c){var z
H.v(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a3("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
ba:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mO(c)
v=new P.mN(this,b,c,a)
$label0$0:for(u=J.aO(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bV()
if((r&192)!==128){q=P.a3("Bad UTF-8 encoding 0x"+C.f.bi(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a3("Overlong encoding of 0x"+C.f.bi(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a3("Character outside valid Unicode range: 0x"+C.f.bi(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bU(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d9()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.a3("Negative UTF-8 code unit: -0x"+C.f.bi(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a3("Bad UTF-8 encoding 0x"+C.f.bi(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mO:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aO(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bV()
if((w&127)!==w)return x-b}return z-b}},mN:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cm(this.d,a,b)}}}],["","",,P,{"^":"",
cs:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jA(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a3(a,null,null))},
ip:function(a){var z=J.L(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bo(a)+"'"},
iW:function(a,b,c,d){var z,y
H.B(b,d)
z=J.iG(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
iX:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.H();)C.a.h(y,H.B(x.gN(x),c))
if(b)return y
return H.v(J.bN(y),"$isd",z,"$asd")},
cm:function(a,b,c){var z,y
z=P.n
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbk",[z],"$asbk")
y=a.length
c=P.aV(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.R()
z=c<y}else z=!0
return H.eY(z?C.a.bY(a,b,c):a)}if(!!J.L(a).$isds)return H.jC(a,b,P.aV(b,c,a.length,null,null,null))
return P.ka(a,b,c)},
ka:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a5(b,0,J.aq(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a5(c,b,J.aq(a),null,null))
y=J.b4(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a5(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gN(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a5(c,b,x,null,null))
w.push(y.gN(y))}return H.eY(w)},
jK:function(a,b,c){return new H.iI(a,H.iJ(a,!1,!0,!1))},
fC:function(){var z=H.js()
if(z!=null)return P.kI(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ip(a)},
r:function(a){return new P.fO(a)},
iY:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e0:function(a){H.o0(a)},
kI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fB(b>0||c<c?C.b.v(a,b,c):a,5,null).geK()
else if(y===32)return P.fB(C.b.v(a,z,c),0,null).geK()}x=new Array(8)
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
if(P.hg(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jg()
if(v>=b)if(P.hg(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.R()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.R()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.R()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b2(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.b2(a,t,s,"")
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
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.b2(a,t,s,"")
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
q-=b}return new P.m5(a,v,u,t,s,r,q,o)}return P.mv(a,b,c,v,u,t,s,r,q,o)},
fE:function(a,b){var z=P.h
return C.a.it(H.c(a.split("&"),[z]),P.dj(z,z),new P.kL(b),[P.M,P.h,P.h])},
kG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kH(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cs(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.d9()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cs(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.d9()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kJ(a)
y=new P.kK(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gav(x)
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
l+=2}else{i=C.f.aR(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n3:function(){var z,y,x,w,v
z=P.iY(22,new P.n5(),!0,P.U)
y=new P.n4(z)
x=new P.n6()
w=new P.n7()
v=H.e(y.$2(0,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isU")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isU")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isU"),"]",5)
v=H.e(y.$2(9,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isU")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isU"),"az",21)
v=H.e(y.$2(21,245),"$isU")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hg:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isd",[P.n],"$asd")
z=$.$get$hh()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
V:{"^":"b;"},
"+bool":0,
as:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.f.aR(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ic(H.jz(this))
y=P.cd(H.jx(this))
x=P.cd(H.jt(this))
w=P.cd(H.ju(this))
v=P.cd(H.jw(this))
u=P.cd(H.jy(this))
t=P.id(H.jv(this))
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
cd:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"a7;"},
"+double":0,
bg:{"^":"b;a",
j:function(a,b){return new P.bg(C.f.ae(this.a*b))},
R:function(a,b){return C.f.R(this.a,H.e(b,"$isbg").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bg))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ii()
y=this.a
if(y<0)return"-"+new P.bg(0-y).i(0)
x=z.$1(C.f.a6(y,6e7)%60)
w=z.$1(C.f.a6(y,1e6)%60)
v=new P.ih().$1(y%1e6)
return""+C.f.a6(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
ew:function(a,b,c,d,e,f){return new P.bg(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ih:{"^":"m:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ii:{"^":"m:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
eU:{"^":"a9;",
i:function(a){return"Throw of null."}},
aF:{"^":"a9;a,b,c,d",
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gc4()+y+x
if(!this.a)return w
v=this.gc3()
u=P.cA(this.b)
return w+v+": "+H.j(u)},
t:{
cb:function(a){return new P.aF(!1,null,null,a)},
cv:function(a,b,c){return new P.aF(!0,a,b,c)},
e8:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
cK:{"^":"aF;e,f,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cl:function(a,b,c){return new P.cK(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cK(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a5(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a5(b,a,c,"end",f))
return b}return c}}},
iC:{"^":"aF;e,m:f>,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){if(J.hF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
X:function(a,b,c,d,e){var z=H.G(e!=null?e:J.aq(b))
return new P.iC(b,z,!0,a,c,"Index out of range")}}},
kE:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kE(a)}}},
kB:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cn:function(a){return new P.kB(a)}}},
dv:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
t:{
f5:function(a){return new P.dv(a)}}},
i4:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cA(z))+"."},
t:{
aR:function(a){return new P.i4(a)}}},
jn:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
f3:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
ia:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fO:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iw:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
t:{
a3:function(a,b,c){return new P.iw(a,b,c)}}},
ce:{"^":"b;"},
n:{"^":"a7;"},
"+int":0,
i:{"^":"b;$ti",
d4:["eY",function(a,b){var z=H.ao(this,"i",0)
return new H.dI(this,H.l(b,{func:1,ret:P.V,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.ga0(this)
for(y=0;z.H();)++y
return y},
gaI:function(a){var z,y
z=this.ga0(this)
if(!z.H())throw H.a(H.cF())
y=z.gN(z)
if(z.H())throw H.a(H.iF())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e8("index"))
if(b<0)H.q(P.a5(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.H();){x=z.gN(z)
if(b===y)return x;++y}throw H.a(P.X(b,this,"index",null,y))},
i:function(a){return P.iE(this,"(",")")}},
de:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
M:{"^":"b;$ti"},
N:{"^":"b;",
gX:function(a){return P.b.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a7:{"^":"b;"},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
gX:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}},
aC:{"^":"b;"},
h:{"^":"b;",$iseV:1},
"+String":0,
ap:{"^":"b;aN:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispb:1,
t:{
f7:function(a,b,c){var z=J.b4(b)
if(!z.H())return a
if(c.length===0){do a+=H.j(z.gN(z))
while(z.H())}else{a+=H.j(z.gN(z))
for(;z.H();)a=a+c+H.j(z.gN(z))}return a}}},
kL:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.v(a,"$isM",[z,z],"$asM")
H.I(b)
y=J.aO(b).en(b,"=")
if(y===-1){if(b!=="")J.d2(a,P.dN(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.an(b,y+1)
z=this.a
J.d2(a,P.dN(x,0,x.length,z,!0),P.dN(w,0,w.length,z,!0))}return a}},
kH:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a3("Illegal IPv4 address, "+a,this.a,b))}},
kJ:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kK:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cs(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.R()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cT:{"^":"b;bX:a<,b,c,d,eA:e>,f,r,0x,0y,0z,0Q,0ch",
geL:function(){return this.b},
gcK:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbP:function(a){var z=this.d
if(z==null)return P.h5(this.a)
return z},
gcX:function(a){var z=this.f
return z==null?"":z},
gei:function(){var z=this.r
return z==null?"":z},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.h,null],"$asM")
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
g=P.dM(g,0,0,h)
return new P.cT(i,j,c,f,d,g,this.r)},
eE:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gcY:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fA(P.fE(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gej:function(){return this.c!=null},
gem:function(){return this.f!=null},
gek:function(){return this.r!=null},
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
w:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdE){y=this.a
x=b.gbX()
if(y==null?x==null:y===x)if(this.c!=null===b.gej()){y=this.b
x=b.geL()
if(y==null?x==null:y===x){y=this.gcK(this)
x=z.gcK(b)
if(y==null?x==null:y===x){y=this.gbP(this)
x=z.gbP(b)
if(y==null?x==null:y===x)if(this.e===z.geA(b)){y=this.f
x=y==null
if(!x===b.gem()){if(x)y=""
if(y===z.gcX(b)){z=this.r
y=z==null
if(!y===b.gek()){if(y)z=""
z=z===b.gei()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gX:function(a){var z=this.z
if(z==null){z=C.b.gX(this.i(0))
this.z=z}return z},
$isdE:1,
t:{
cq:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$ha().b
if(typeof b!=="string")H.q(H.aj(b))
z=z.test(b)}else z=!1
if(z)return b
H.B(b,H.ao(c,"cc",0))
y=c.gik().cz(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bU(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mv:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mG(a,b,d)
else{if(d===b)P.c0(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mH(a,z,e-1):""
x=P.mA(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mD(P.cs(C.b.v(a,w,g),new P.mw(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mB(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.R()
t=h<i?P.dM(a,h+1,i,null):null
return new P.cT(j,y,x,v,u,t,i<c?P.mz(a,i+1,c):null)},
h5:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c0:function(a,b,c){throw H.a(P.a3(c,a,b))},
mD:function(a,b){if(a!=null&&a===P.h5(b))return
return a},
mA:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.a_(a,z)!==93)P.c0(a,b,"Missing end `]` to match `[` in host")
P.fD(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fD(a,b,c)
return"["+a+"]"}return P.mJ(a,b,c)},
mJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.hc(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c0(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h6(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mG:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h8(C.b.I(a,b)))P.c0(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c0(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.mx(y?a.toLowerCase():a)},
mx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mH:function(a,b,c){return P.c1(a,b,c,C.a_)},
mB:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c1(a,b,c,C.D):C.w.jV(d,new P.mC(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.mI(w,e,f)},
mI:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.mK(a,!z||c)
return P.mL(a)},
dM:function(a,b,c,d){var z,y
z={}
H.v(d,"$isM",[P.h,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.cb("Both query and queryParameters specified"))
return P.c1(a,b,c,C.n)}if(d==null)return
y=new P.ap("")
z.a=""
d.K(0,new P.mE(new P.mF(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mz:function(a,b,c){return P.c1(a,b,c,C.n)},
hc:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.cZ(y)
v=H.cZ(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aR(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bU(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
h6:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.f.hu(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.cm(y,0,null)},
c1:function(a,b,c,d){var z=P.hb(a,b,c,H.v(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
hb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.R()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hc(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c0(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h6(v)}}if(w==null)w=new P.ap("")
w.a+=C.b.v(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.R()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h9:function(a){if(C.b.a3(a,"."))return!0
return C.b.en(a,"/.")!==-1},
mL:function(a){var z,y,x,w,v,u,t
if(!P.h9(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.J(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mK:function(a,b){var z,y,x,w,v,u
if(!P.h9(a))return!b?P.h7(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gav(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gav(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h7(z[0]))}return C.a.n(z,"/")},
h7:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h8(J.hG(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.an(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
my:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cb("Invalid URL encoding"))}}return z},
dN:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c8(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.w(y.v(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.cb("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cb("Truncated URI"))
C.a.h(u,P.my(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isd",[P.n],"$asd")
return new P.kR(!1).cz(u)},
h8:function(a){var z=a|32
return 97<=z&&z<=122}}},
mw:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.a3("Invalid port",this.a,z+1))}},
mC:{"^":"m:28;",
$1:function(a){return P.cq(C.a0,a,C.k,!1)}},
mF:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cq(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cq(C.p,b,C.k,!0))}}},
mE:{"^":"m:40;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.b4(H.hx(b,"$isi")),y=this.a;z.H();)y.$2(a,H.I(z.gN(z)))}},
kF:{"^":"b;a,b,c",
geK:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eo(y,"?",z)
w=y.length
if(x>=0){v=P.c1(y,x+1,w,C.n)
w=x}else v=null
z=new P.lj(this,"data",null,null,null,P.c1(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fB:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a3("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a3("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gav(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.a3("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iG(0,a,s,y)
else{r=P.hb(a,s,y,C.n,!0)
if(r!=null)a=C.b.b2(a,s,y,r)}return new P.kF(a,z,c)}}},
n5:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
n4:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hK(z,0,96,b)
return z}},
n6:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
n7:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m5:{"^":"b;a,b,c,d,e,f,r,x,0y",
gej:function(){return this.c>0},
gel:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gem:function(){var z=this.f
if(typeof z!=="number")return z.R()
return z<this.r},
gek:function(){return this.r<this.a.length},
gdA:function(){return this.b===4&&C.b.a3(this.a,"http")},
gdB:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbX:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdA()){this.x="http"
z="http"}else if(this.gdB()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geL:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcK:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbP:function(a){var z
if(this.gel()){z=this.d
if(typeof z!=="number")return z.B()
return P.cs(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdA())return 80
if(this.gdB())return 443
return 0},
geA:function(a){return C.b.v(this.a,this.e,this.f)},
gcX:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.R()
return z<y?C.b.v(this.a,z+1,y):""},
gei:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.an(y,z+1):""},
gcY:function(){var z=this.f
if(typeof z!=="number")return z.R()
if(z>=this.r)return C.a1
z=P.h
return new P.fA(P.fE(this.gcX(this),C.k),[z,z])},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isM",[P.h,null],"$asM")
i=this.gbX()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gel()?this.gbP(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dM(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.an(y,x+1)
return new P.cT(i,j,c,f,d,g,b)},
eE:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gX:function(a){var z=this.y
if(z==null){z=C.b.gX(this.a)
this.y=z}return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdE)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdE:1},
lj:{"^":"cT;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e7:function(a){var z=document.createElement("a")
return z},
d9:function(a,b){var z=document.createElement("canvas")
return z},
ij:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).aj(z,a,b,c)
y.toString
z=W.H
z=new H.dI(new W.ax(y),H.l(new W.ik(),{func:1,ret:P.V,args:[z]}),[z])
return H.e(z.gaI(z),"$isW")},
il:function(a){H.e(a,"$isaf")
return"wheel"},
bL:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iD:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseE")
try{J.hP(z,a)}catch(x){H.ab(x)}return z},
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fS:function(a,b,c,d){var z,y
z=W.cQ(W.cQ(W.cQ(W.cQ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hk:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.a_
if(z===C.j)return a
return z.dR(a,b)},
a1:{"^":"W;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
oc:{"^":"u;0m:length=","%":"AccessibleNodeList"},
od:{"^":"a1;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oe:{"^":"a1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ec:{"^":"a1;",$isec:1,"%":"HTMLBaseElement"},
d5:{"^":"u;",$isd5:1,"%":";Blob"},
cw:{"^":"a1;",$iscw:1,"%":"HTMLBodyElement"},
ok:{"^":"a1;0a2:type}","%":"HTMLButtonElement"},
d8:{"^":"a1;",
bW:function(a,b,c){if(c!=null)return a.getContext(b,P.nj(c,null))
return a.getContext(b)},
eP:function(a,b){return this.bW(a,b,null)},
$isd8:1,
"%":"HTMLCanvasElement"},
ej:{"^":"u;",$isej:1,"%":"CanvasRenderingContext2D"},
om:{"^":"H;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oo:{"^":"i9;0m:length=","%":"CSSPerspective"},
be:{"^":"u;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
op:{"^":"li;0m:length=",
eQ:function(a,b){var z=a.getPropertyValue(this.fm(a,b))
return z==null?"":z},
fm:function(a,b){var z,y
z=$.$get$eo()
y=z[b]
if(typeof y==="string")return y
y=this.hv(a,b)
z[b]=y
return y},
hv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ie()+b
if(z in a)return z
return b},
gcs:function(a){return a.bottom},
gau:function(a){return a.height},
gaY:function(a){return a.left},
gbg:function(a){return a.right},
gbj:function(a){return a.top},
gay:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i8:{"^":"b;",
gaY:function(a){return this.eQ(a,"left")}},
ep:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i9:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oq:{"^":"ep;0m:length=","%":"CSSTransformValue"},
or:{"^":"ep;0m:length=","%":"CSSUnparsedValue"},
os:{"^":"u;0m:length=","%":"DataTransferItemList"},
bf:{"^":"a1;",$isbf:1,"%":"HTMLDivElement"},
ot:{"^":"u;",
i:function(a){return String(a)},
"%":"DOMException"},
ou:{"^":"ll;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.v(c,"$isad",[P.a7],"$asad")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[[P.ad,P.a7]]},
$asz:function(){return[[P.ad,P.a7]]},
$isi:1,
$asi:function(){return[[P.ad,P.a7]]},
$isd:1,
$asd:function(){return[[P.ad,P.a7]]},
$asF:function(){return[[P.ad,P.a7]]},
"%":"ClientRectList|DOMRectList"},
ig:{"^":"u;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gay(a))+" x "+H.j(this.gau(a))},
w:function(a,b){var z
if(b==null)return!1
z=H.c6(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=J.aE(b)
return a.left===z.gaY(b)&&a.top===z.gbj(b)&&this.gay(a)===z.gay(b)&&this.gau(a)===z.gau(b)},
gX:function(a){return W.fS(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gay(a)&0x1FFFFFFF,this.gau(a)&0x1FFFFFFF)},
gcs:function(a){return a.bottom},
gau:function(a){return a.height},
gaY:function(a){return a.left},
gbg:function(a){return a.right},
gbj:function(a){return a.top},
gay:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a7]},
"%":";DOMRectReadOnly"},
ov:{"^":"ln;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[P.h]},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"DOMStringList"},
ow:{"^":"u;0m:length=","%":"DOMTokenList"},
lh:{"^":"cG;dv:a<,b",
gm:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isW")},
p:function(a,b,c){var z
H.G(b)
H.e(c,"$isW")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.d1(this)
return new J.aG(z,z.length,0,[H.y(z,0)])},
aG:function(a,b,c,d){throw H.a(P.cn(null))},
$asz:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
W:{"^":"H;0j8:tagName=",
gi3:function(a){return new W.lo(a)},
gcw:function(a){return new W.lh(a,a.children)},
gdT:function(a){return P.jG(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a7)},
i:function(a){return a.localName},
aj:["bZ",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ez
if(z==null){z=H.c([],[W.aK])
y=new W.eS(z)
C.a.h(z,W.fQ(null))
C.a.h(z,W.h0())
$.ez=y
d=y}else d=z
z=$.ey
if(z==null){z=new W.hd(d)
$.ey=z
c=z}else{z.a=d
c=z}}if($.aS==null){z=document
y=z.implementation.createHTMLDocument("")
$.aS=y
$.dc=y.createRange()
y=$.aS
y.toString
y=y.createElement("base")
H.e(y,"$isec")
y.href=z.baseURI
$.aS.head.appendChild(y)}z=$.aS
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscw")}z=$.aS
if(!!this.$iscw)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aS.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.Z,a.tagName)){$.dc.selectNodeContents(x)
w=$.dc.createContextualFragment(b)}else{x.innerHTML=b
w=$.aS.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aS.body
if(x==null?z!=null:x!==z)J.e6(x)
c.da(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aj(a,b,c,null)},"ib",null,null,"gjS",5,5,null],
eU:function(a,b,c,d){a.textContent=null
a.appendChild(this.aj(a,b,c,d))},
eT:function(a,b){return this.eU(a,b,null,null)},
$isW:1,
"%":";Element"},
ik:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isW}},
ox:{"^":"a1;0a2:type}","%":"HTMLEmbedElement"},
ae:{"^":"u;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"u;",
dN:["eW",function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(c!=null)this.fj(a,b,c,!1)}],
fj:function(a,b,c,d){return a.addEventListener(b,H.bF(H.l(c,{func:1,args:[W.ae]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fY|fZ|h1|h2"},
b8:{"^":"d5;",$isb8:1,"%":"File"},
eA:{"^":"lt;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isb8")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.b8]},
$asz:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$iseA:1,
$asF:function(){return[W.b8]},
"%":"FileList"},
oy:{"^":"af;0m:length=","%":"FileWriter"},
oz:{"^":"a1;0m:length=","%":"HTMLFormElement"},
bj:{"^":"u;",$isbj:1,"%":"Gamepad"},
oA:{"^":"u;0m:length=","%":"History"},
oB:{"^":"lG;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cf:{"^":"u;0dU:data=",$iscf:1,"%":"ImageData"},
eD:{"^":"a1;",$iseD:1,"%":"HTMLImageElement"},
eE:{"^":"a1;0a2:type}",$iseE:1,"%":"HTMLInputElement"},
bO:{"^":"dB;",$isbO:1,"%":"KeyboardEvent"},
oF:{"^":"a1;0a2:type}","%":"HTMLLinkElement"},
oG:{"^":"u;",
i:function(a){return String(a)},
"%":"Location"},
oH:{"^":"u;0m:length=","%":"MediaList"},
oI:{"^":"af;",
dN:function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.eW(a,b,c,!1)},
"%":"MessagePort"},
oJ:{"^":"lM;",
k:function(a,b){return P.b3(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.K(a,new W.jd(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asal:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIInputMap"},
jd:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oK:{"^":"lN;",
k:function(a,b){return P.b3(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.K(a,new W.je(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asal:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
je:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"u;",$isbm:1,"%":"MimeType"},
oL:{"^":"lP;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbm")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asF:function(){return[W.bm]},
"%":"MimeTypeArray"},
aA:{"^":"dB;",$isaA:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ax:{"^":"cG;a",
gaI:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f5("No elements"))
if(y>1)throw H.a(P.f5("More than one element"))
return z.firstChild},
ar:function(a,b){var z,y,x,w
H.v(b,"$isi",[W.H],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.G(b)
H.e(c,"$isH")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.eB(z,z.length,-1,[H.bb(C.a3,z,"F",0)])},
aG:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.H]},
$asi:function(){return[W.H]},
$asd:function(){return[W.H]}},
H:{"^":"af;0cW:previousSibling=",
iX:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j1:function(a,b){var z,y
try{z=a.parentNode
J.hH(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eX(a):z},
hb:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oS:{"^":"u;",
iU:[function(a){return a.previousNode()},"$0","gcW",1,0,26],
"%":"NodeIterator"},
ji:{"^":"lR;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
oV:{"^":"a1;0a2:type}","%":"HTMLOListElement"},
oW:{"^":"a1;0a2:type}","%":"HTMLObjectElement"},
bn:{"^":"u;0m:length=",$isbn:1,"%":"Plugin"},
oZ:{"^":"lV;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asF:function(){return[W.bn]},
"%":"PluginArray"},
p0:{"^":"u;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
p1:{"^":"m0;",
k:function(a,b){return P.b3(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.K(a,new W.jQ(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asal:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jQ:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p3:{"^":"a1;0a2:type}","%":"HTMLScriptElement"},
p4:{"^":"a1;0m:length=","%":"HTMLSelectElement"},
bp:{"^":"af;",$isbp:1,"%":"SourceBuffer"},
p5:{"^":"fZ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asF:function(){return[W.bp]},
"%":"SourceBufferList"},
p6:{"^":"a1;0a2:type}","%":"HTMLSourceElement"},
bq:{"^":"u;",$isbq:1,"%":"SpeechGrammar"},
p7:{"^":"m7;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asF:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"u;0m:length=",$isbr:1,"%":"SpeechRecognitionResult"},
p9:{"^":"ma;",
k:function(a,b){return a.getItem(H.I(b))},
p:function(a,b,c){a.setItem(b,H.I(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga7:function(a){var z=H.c([],[P.h])
this.K(a,new W.k6(z))
return z},
gm:function(a){return a.length},
$asal:function(){return[P.h,P.h]},
$isM:1,
$asM:function(){return[P.h,P.h]},
"%":"Storage"},
k6:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pc:{"^":"a1;0a2:type}","%":"HTMLStyleElement"},
bs:{"^":"u;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
dx:{"^":"a1;",$isdx:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kb:{"^":"a1;",
aj:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
z=W.ij("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ax(y).ar(0,new W.ax(z))
return y},
"%":"HTMLTableElement"},
pe:{"^":"a1;",
aj:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.ax(z)
x=z.gaI(z)
x.toString
z=new W.ax(x)
w=z.gaI(z)
y.toString
w.toString
new W.ax(y).ar(0,new W.ax(w))
return y},
"%":"HTMLTableRowElement"},
pf:{"^":"a1;",
aj:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.ax(z)
x=z.gaI(z)
y.toString
x.toString
new W.ax(y).ar(0,new W.ax(x))
return y},
"%":"HTMLTableSectionElement"},
fa:{"^":"a1;",$isfa:1,"%":"HTMLTemplateElement"},
bt:{"^":"af;",$isbt:1,"%":"TextTrack"},
bu:{"^":"af;",$isbu:1,"%":"TextTrackCue|VTTCue"},
ph:{"^":"mk;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbu")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bu]},
$asz:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asF:function(){return[W.bu]},
"%":"TextTrackCueList"},
pi:{"^":"h2;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asF:function(){return[W.bt]},
"%":"TextTrackList"},
pj:{"^":"u;0m:length=","%":"TimeRanges"},
bw:{"^":"u;",$isbw:1,"%":"Touch"},
bx:{"^":"dB;",$isbx:1,"%":"TouchEvent"},
pk:{"^":"mq;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbw")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bw]},
$asz:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asF:function(){return[W.bw]},
"%":"TouchList"},
pl:{"^":"u;0m:length=","%":"TrackDefaultList"},
pn:{"^":"u;",
iU:[function(a){return a.previousNode()},"$0","gcW",1,0,26],
"%":"TreeWalker"},
dB:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pp:{"^":"u;",
i:function(a){return String(a)},
"%":"URL"},
pq:{"^":"af;0m:length=","%":"VideoTrackList"},
bZ:{"^":"aA;",
gig:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gie:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isbZ:1,
"%":"WheelEvent"},
l9:{"^":"af;",
hd:function(a,b){return a.requestAnimationFrame(H.bF(H.l(b,{func:1,ret:-1,args:[P.a7]}),1))},
fw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fM:{"^":"H;",$isfM:1,"%":"Attr"},
pv:{"^":"mT;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbe")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.be]},
$asz:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asF:function(){return[W.be]},
"%":"CSSRuleList"},
pw:{"^":"ig;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var z
if(b==null)return!1
z=H.c6(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=J.aE(b)
return a.left===z.gaY(b)&&a.top===z.gbj(b)&&a.width===z.gay(b)&&a.height===z.gau(b)},
gX:function(a){return W.fS(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gau:function(a){return a.height},
gay:function(a){return a.width},
"%":"ClientRect|DOMRect"},
py:{"^":"mV;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbj")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asF:function(){return[W.bj]},
"%":"GamepadList"},
pB:{"^":"mX;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asz:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pC:{"^":"mZ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asF:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
pD:{"^":"n0;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbs")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bs]},
$asz:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asF:function(){return[W.bs]},
"%":"StyleSheetList"},
lf:{"^":"eO;dv:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga7(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga7:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfM")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asal:function(){return[P.h,P.h]},
$asM:function(){return[P.h,P.h]}},
lo:{"^":"lf;a",
k:function(a,b){return this.a.getAttribute(H.I(b))},
p:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gm:function(a){return this.ga7(this).length}},
lp:{"^":"dw;a,b,c,$ti",
iC:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a6(this.a,this.b,a,!1,z)}},
px:{"^":"lp;a,b,c,$ti"},
lq:{"^":"f6;a,b,c,d,e,$ti",
hz:function(){var z=this.d
if(z!=null&&this.a<=0)J.hI(this.b,this.c,z,!1)},
t:{
a6:function(a,b,c,d,e){var z=c==null?null:W.hk(new W.lr(c),W.ae)
z=new W.lq(0,a,b,z,!1,[e])
z.hz()
return z}}},
lr:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.e(a,"$isae"))}},
cp:{"^":"b;a",
fb:function(a){var z,y
z=$.$get$dK()
if(z.gcN(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nA())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nB())}},
aS:function(a){return $.$get$fR().W(0,W.bL(a))},
aD:function(a,b,c){var z,y,x
z=W.bL(a)
y=$.$get$dK()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dR(x.$4(a,b,c,this))},
$isaK:1,
t:{
fQ:function(a){var z,y
z=W.e7(null)
y=window.location
z=new W.cp(new W.m1(z,y))
z.fb(a)
return z},
pz:[function(a,b,c,d){H.e(a,"$isW")
H.I(b)
H.I(c)
H.e(d,"$iscp")
return!0},"$4","nA",16,0,31],
pA:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isW")
H.I(b)
H.I(c)
z=H.e(d,"$iscp").a
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
return z},"$4","nB",16,0,31]}},
F:{"^":"b;$ti",
ga0:function(a){return new W.eB(a,this.gm(a),-1,[H.bb(this,a,"F",0)])},
aG:function(a,b,c,d){H.B(d,H.bb(this,a,"F",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eS:{"^":"b;a",
aS:function(a){return C.a.dP(this.a,new W.jk(a))},
aD:function(a,b,c){return C.a.dP(this.a,new W.jj(a,b,c))},
$isaK:1},
jk:{"^":"m:16;a",
$1:function(a){return H.e(a,"$isaK").aS(this.a)}},
jj:{"^":"m:16;a,b,c",
$1:function(a){return H.e(a,"$isaK").aD(this.a,this.b,this.c)}},
m2:{"^":"b;",
fe:function(a,b,c,d){var z,y,x
this.a.ar(0,c)
z=b.d4(0,new W.m3())
y=b.d4(0,new W.m4())
this.b.ar(0,z)
x=this.c
x.ar(0,C.A)
x.ar(0,y)},
aS:function(a){return this.a.W(0,W.bL(a))},
aD:["f0",function(a,b,c){var z,y
z=W.bL(a)
y=this.c
if(y.W(0,H.j(z)+"::"+b))return this.d.i1(c)
else if(y.W(0,"*::"+b))return this.d.i1(c)
else{y=this.b
if(y.W(0,H.j(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.j(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isaK:1},
m3:{"^":"m:29;",
$1:function(a){return!C.a.W(C.t,H.I(a))}},
m4:{"^":"m:29;",
$1:function(a){return C.a.W(C.t,H.I(a))}},
mh:{"^":"m2;e,a,b,c,d",
aD:function(a,b,c){if(this.f0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1},
t:{
h0:function(){var z,y,x,w,v
z=P.h
y=P.eM(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mi(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mh(y,P.cj(null,null,null,z),P.cj(null,null,null,z),P.cj(null,null,null,z),null)
y.fe(null,new H.j3(C.r,w,[x,z]),v,null)
return y}}},
mi:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))}},
mg:{"^":"b;",
aS:function(a){var z=J.L(a)
if(!!z.$isf0)return!1
z=!!z.$iscM
if(z&&W.bL(a)==="foreignObject")return!1
if(z)return!0
return!1},
aD:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aS(a)},
$isaK:1},
eB:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e3(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
aK:{"^":"b;"},
m1:{"^":"b;a,b",$ispo:1},
hd:{"^":"b;a",
da:function(a){new W.mQ(this).$2(a,null)},
b8:function(a,b){if(b==null)J.e6(a)
else b.removeChild(a)},
hj:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hL(a)
x=y.gdv().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.ab(t)}try{u=W.bL(a)
this.hi(H.e(a,"$isW"),b,z,v,u,H.e(y,"$isM"),H.I(x))}catch(t){if(H.ab(t) instanceof P.aF)throw t
else{this.b8(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hi:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b8(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aS(a)){this.b8(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aD(a,"is",g)){this.b8(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga7(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga7(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aD(a,J.hR(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfa)this.da(a.content)},
$isoT:1},
mQ:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hj(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b8(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hM(z)}catch(w){H.ab(w)
v=H.e(z,"$isH")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isH")}}},
li:{"^":"u+i8;"},
lk:{"^":"u+z;"},
ll:{"^":"lk+F;"},
lm:{"^":"u+z;"},
ln:{"^":"lm+F;"},
ls:{"^":"u+z;"},
lt:{"^":"ls+F;"},
lF:{"^":"u+z;"},
lG:{"^":"lF+F;"},
lM:{"^":"u+al;"},
lN:{"^":"u+al;"},
lO:{"^":"u+z;"},
lP:{"^":"lO+F;"},
lQ:{"^":"u+z;"},
lR:{"^":"lQ+F;"},
lU:{"^":"u+z;"},
lV:{"^":"lU+F;"},
m0:{"^":"u+al;"},
fY:{"^":"af+z;"},
fZ:{"^":"fY+F;"},
m6:{"^":"u+z;"},
m7:{"^":"m6+F;"},
ma:{"^":"u+al;"},
mj:{"^":"u+z;"},
mk:{"^":"mj+F;"},
h1:{"^":"af+z;"},
h2:{"^":"h1+F;"},
mp:{"^":"u+z;"},
mq:{"^":"mp+F;"},
mS:{"^":"u+z;"},
mT:{"^":"mS+F;"},
mU:{"^":"u+z;"},
mV:{"^":"mU+F;"},
mW:{"^":"u+z;"},
mX:{"^":"mW+F;"},
mY:{"^":"u+z;"},
mZ:{"^":"mY+F;"},
n_:{"^":"u+z;"},
n0:{"^":"n_+F;"}}],["","",,P,{"^":"",
nm:function(a){var z,y
z=J.L(a)
if(!!z.$iscf){y=z.gdU(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h4(a.data,a.height,a.width)},
nl:function(a){if(a instanceof P.h4)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var z,y,x,w,v
if(a==null)return
z=P.dj(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.I(y[w])
z.p(0,v,a[v])}return z},
nj:function(a,b){var z={}
a.K(0,new P.nk(z))
return z},
ev:function(){var z=$.eu
if(z==null){z=J.d3(window.navigator.userAgent,"Opera",0)
$.eu=z}return z},
ie:function(){var z,y
z=$.er
if(z!=null)return z
y=$.es
if(y==null){y=J.d3(window.navigator.userAgent,"Firefox",0)
$.es=y}if(y)z="-moz-"
else{y=$.et
if(y==null){y=!P.ev()&&J.d3(window.navigator.userAgent,"Trident/",0)
$.et=y}if(y)z="-ms-"
else z=P.ev()?"-o-":"-webkit-"}$.er=z
return z},
md:{"^":"b;",
eg:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d3:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isas)return new Date(a.a)
if(!!y.$isjJ)throw H.a(P.cn("structured clone of RegExp"))
if(!!y.$isb8)return a
if(!!y.$isd5)return a
if(!!y.$iseA)return a
if(!!y.$iscf)return a
if(!!y.$iseR||!!y.$isdr)return a
if(!!y.$isM){x=this.eg(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.K(a,new P.mf(z,this))
return z.a}if(!!y.$isd){x=this.eg(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.ia(a,x)}throw H.a(P.cn("structured clone of other type"))},
ia:function(a,b){var z,y,x,w
z=J.aO(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.d3(z.k(a,w)))
return x}},
mf:{"^":"m:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.d3(b)}},
h4:{"^":"b;dU:a>,b,c",$iscf:1},
nk:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}},
me:{"^":"md;a,b"},
it:{"^":"cG;a,b",
gbs:function(){var z,y,x
z=this.b
y=H.ao(z,"z",0)
x=W.W
return new H.j1(new H.dI(z,H.l(new P.iu(),{func:1,ret:P.V,args:[y]}),[y]),H.l(new P.iv(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.G(b)
H.e(c,"$isW")
z=this.gbs()
J.hO(z.b.$1(J.cu(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aG:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gm:function(a){return J.aq(this.gbs().a)},
k:function(a,b){var z=this.gbs()
return z.b.$1(J.cu(z.a,b))},
ga0:function(a){var z=P.iX(this.gbs(),!1,W.W)
return new J.aG(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.W]},
$asi:function(){return[W.W]},
$asd:function(){return[W.W]}},
iu:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isW}},
iv:{"^":"m:57;",
$1:function(a){return H.k(H.e(a,"$isH"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lW:{"^":"b;$ti",
gbg:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.B(z+this.c,H.y(this,0))},
gcs:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.B(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c6(b,"$isad",[P.a7],"$asad")
if(!z)return!1
z=this.a
y=J.aE(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gbg(b)){if(typeof x!=="number")return x.B()
z=H.B(x+this.d,w)===y.gcs(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.ca(z)
x=this.b
w=J.ca(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.B(x+this.d,v)
return P.lH(P.cR(P.cR(P.cR(P.cR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"lW;aY:a>,bj:b>,ay:c>,au:d>,$ti",t:{
jG:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.R()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.R()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"u;",$isbP:1,"%":"SVGLength"},oE:{"^":"lJ;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.e(c,"$isbP")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$isd:1,
$asd:function(){return[P.bP]},
$asF:function(){return[P.bP]},
"%":"SVGLengthList"},bR:{"^":"u;",$isbR:1,"%":"SVGNumber"},oU:{"^":"lT;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.e(c,"$isbR")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$asF:function(){return[P.bR]},
"%":"SVGNumberList"},p_:{"^":"u;0m:length=","%":"SVGPointList"},f0:{"^":"cM;0a2:type}",$isf0:1,"%":"SVGScriptElement"},pa:{"^":"mc;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"SVGStringList"},pd:{"^":"cM;0a2:type}","%":"SVGStyleElement"},cM:{"^":"W;",
gcw:function(a){return new P.it(a,new W.ax(a))},
aj:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aK])
C.a.h(z,W.fQ(null))
C.a.h(z,W.h0())
C.a.h(z,new W.mg())
c=new W.hd(new W.eS(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).ib(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ax(w)
u=z.gaI(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscM:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bV:{"^":"u;",$isbV:1,"%":"SVGTransform"},pm:{"^":"ms;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.e(c,"$isbV")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[P.bV]},
$isi:1,
$asi:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$asF:function(){return[P.bV]},
"%":"SVGTransformList"},lI:{"^":"u+z;"},lJ:{"^":"lI+F;"},lS:{"^":"u+z;"},lT:{"^":"lS+F;"},mb:{"^":"u+z;"},mc:{"^":"mb+F;"},mr:{"^":"u+z;"},ms:{"^":"mr+F;"}}],["","",,P,{"^":"",U:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$iskq:1}}],["","",,P,{"^":"",of:{"^":"u;0m:length=","%":"AudioBuffer"},ea:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},og:{"^":"lg;",
k:function(a,b){return P.b3(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.K(a,new P.hT(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asal:function(){return[P.h,null]},
$isM:1,
$asM:function(){return[P.h,null]},
"%":"AudioParamMap"},hT:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hU:{"^":"ea;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oh:{"^":"af;0m:length=","%":"AudioTrackList"},hX:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oi:{"^":"ea;0a2:type}","%":"BiquadFilterNode"},oX:{"^":"hX;0m:length=","%":"OfflineAudioContext"},oY:{"^":"hU;0a2:type}","%":"Oscillator|OscillatorNode"},lg:{"^":"u+al;"}}],["","",,P,{"^":"",du:{"^":"u;",
ja:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscf)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nl(g))
return}if(!!z.$iseD)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cb("Incorrect number or type of arguments"))},
j9:function(a,b,c,d,e,f,g){return this.ja(a,b,c,d,e,f,g,null,null,null)},
$isdu:1,
"%":"WebGLRenderingContext"},kz:{"^":"u;",$iskz:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p8:{"^":"m9;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.X(b,a,null,null,null))
return P.b3(a.item(b))},
p:function(a,b,c){H.G(b)
H.e(c,"$isM")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asz:function(){return[[P.M,,,]]},
$isi:1,
$asi:function(){return[[P.M,,,]]},
$isd:1,
$asd:function(){return[[P.M,,,]]},
$asF:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},m8:{"^":"u+z;"},m9:{"^":"m8+F;"}}],["","",,O,{"^":"",aP:{"^":"b;0a,0b,0c,0d,$ti",
c_:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dc:function(a,b,c){var z=H.ao(this,"aP",0)
H.l(b,{func:1,ret:P.V,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bn:function(a,b){return this.dc(a,null,b)},
h1:function(a){var z
H.v(a,"$isi",[H.ao(this,"aP",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f7:function(a,b){var z
H.v(b,"$isi",[H.ao(this,"aP",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.aG(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ao(this,"aP",0)
H.B(b,z)
z=[z]
if(this.h1(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f7(x,H.c([b],z))}},
$isi:1,
t:{
da:function(a){var z=new O.aP([a])
z.c_(a)
return z}}},dn:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
f8:function(a){var z=this.b
if(!(z==null))z.E(a)},
aJ:function(){return this.f8(null)},
ga1:function(a){var z=this.a
if(z.length>0)return C.a.gav(z)
else return V.ck()},
eC:function(a){var z=this.a
if(a==null)C.a.h(z,V.ck())
else C.a.h(z,a)
this.aJ()},
cV:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",d4:{"^":"b;"},b7:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa8:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().G(0,this.gey())
y=this.c
if(y!=null)y.gC().h(0,this.gey())
x=new D.S("shape",z,this.c,this,[F.f2])
x.b=!0
this.al(x)}},
sbc:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gC().G(0,this.gex())
if(a!=null)a.gC().h(0,this.gex())
this.r=a
y=new D.S("mover",z,a,this,[U.am])
y.b=!0
this.al(y)}},
ax:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.b4(0,b,this):null
if(!J.J(y,this.x)){x=this.x
this.x=y
w=new D.S("matrix",x,y,this,[V.az])
w.b=!0
this.al(w)}for(z=this.y.a,z=new J.aG(z,z.length,0,[H.y(z,0)]);z.H();)z.d.ax(0,b)},
b1:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga1(z))
else C.a.h(z.a,y.j(0,z.ga1(z)))
z.aJ()
a.eD(this.f)
z=a.dy
x=(z&&C.a).gav(z)
if(x!=null&&this.d!=null)x.j0(a,this)
for(z=this.y.a,z=new J.aG(z,z.length,0,[H.y(z,0)]);z.H();)z.d.b1(a)
a.eB()
a.dx.cV()},
gC:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
al:function(a){var z=this.z
if(!(z==null))z.E(a)},
T:function(){return this.al(null)},
iL:[function(a){H.e(a,"$isD")
this.e=null
this.al(a)},function(){return this.iL(null)},"k0","$1","$0","gey",0,2,1],
iK:[function(a){this.al(H.e(a,"$isD"))},function(){return this.iK(null)},"k_","$1","$0","gex",0,2,1],
iI:[function(a){this.al(H.e(a,"$isD"))},function(){return this.iI(null)},"jY","$1","$0","gew",0,2,1],
jX:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[E.b7],"$asi")
for(z=b.length,y=this.gew(),x={func:1,ret:-1,args:[D.D]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bh()
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.T()},"$2","giH",8,0,11],
jZ:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[E.b7],"$asi")
for(z=b.length,y=this.gew(),x=0;x<b.length;b.length===z||(0,H.C)(b),++x){w=b[x]
if(w!=null){if(w.ga5()==null){v=new D.bh()
v.d=0
w.sa5(v)}w.ga5().G(0,y)}}this.T()},"$2","giJ",8,0,11],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaU:1},jL:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f3:function(a,b){var z,y
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
z=new O.dn()
y=[V.az]
z.a=H.c([],y)
z.gC().h(0,new E.jN(this))
this.cy=z
z=new O.dn()
z.a=H.c([],y)
z.gC().h(0,new E.jO(this))
this.db=z
z=new O.dn()
z.a=H.c([],y)
z.gC().h(0,new E.jP(this))
this.dx=z
z=H.c([],[O.dy])
this.dy=z
C.a.h(z,null)
this.fr=new H.b9(0,0,[P.h,A.f1])},
giV:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga1(z)
y=this.db
y=z.j(0,y.ga1(y))
this.z=y
z=y}return z},
eD:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gav(z):a;(z&&C.a).h(z,y)},
eB:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jM:function(a,b){var z=new E.jL(a,b)
z.f3(a,b)
return z}}},jN:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isD")
z=this.a
z.z=null
z.ch=null}},jO:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isD")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jP:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isD")
z=this.a
z.ch=null
z.cx=null}},ki:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
fa:[function(a){var z
H.e(a,"$isD")
z=this.x
if(!(z==null))z.E(a)
this.j3()},function(){return this.fa(null)},"f9","$1","$0","gdh",0,2,1],
giv:function(){var z,y,x
z=Date.now()
y=C.f.a6(P.ew(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.as(z,!1)
return x/y},
dF:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.o(z)
x=C.d.cJ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.cJ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fd(C.q,this.gj2())}},
j3:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kk(this),{func:1,ret:-1,args:[P.a7]})
C.H.fw(z)
C.H.hd(z,W.hk(y,P.a7))}},"$0","gj2",0,0,3],
j_:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dF()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.as(w,!1)
x.y=P.ew(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aJ()
w=x.db
C.a.sm(w.a,0)
w.aJ()
w=x.dx
C.a.sm(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b1(this.e)}x=this.z
if(!(x==null))x.E(null)}catch(v){z=H.ab(v)
y=H.bH(v)
P.e0("Error: "+H.j(z))
P.e0("Stack: "+H.j(y))
throw H.a(z)}},
t:{
kj:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd8)return E.fc(a,!0,!0,!0,!1)
y=W.d9(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcw(a).h(0,y)
w=E.fc(y,!0,!0,!0,!1)
w.a=a
return w},
fc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ki()
y=P.iT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.bW(a,"webgl",y)
x=H.e(x==null?C.l.bW(a,"experimental-webgl",y):x,"$isdu")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jM(x,a)
w=new T.kd(x)
w.b=H.G(x.getParameter(3379))
w.c=H.G(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kM(a)
v=new X.iL()
v.c=new X.aJ(!1,!1,!1)
v.d=P.cj(null,null,null,P.n)
w.b=v
v=new X.jf(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iZ(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kn(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.f6,P.b]])
w.z=v
u=document
t=W.aA
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a6(u,"contextmenu",H.l(w.gfP(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a6(a,"focus",H.l(w.gfS(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a6(a,"blur",H.l(w.gfM(),q),!1,r))
v=w.z
p=W.bO
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a6(u,"keyup",H.l(w.gfU(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a6(u,"keydown",H.l(w.gfT(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a6(a,"mousedown",H.l(w.gfX(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a6(a,"mouseup",H.l(w.gfZ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a6(a,"mousemove",H.l(w.gfY(),s),!1,t))
p=w.z
o=W.bZ;(p&&C.a).h(p,W.a6(a,H.I(W.il(a)),H.l(w.gh_(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a6(u,"mousemove",H.l(w.gfQ(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a6(u,"mouseup",H.l(w.gfR(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a6(u,"pointerlockchange",H.l(w.gh0(),q),!1,r))
r=w.z
q=W.bx
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a6(a,"touchstart",H.l(w.gh7(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a6(a,"touchend",H.l(w.gh5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a6(a,"touchmove",H.l(w.gh6(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.as(Date.now(),!1)
z.cy=0
z.dF()
return z}}},kk:{"^":"m:35;a",
$1:function(a){var z
H.o_(a)
z=this.a
if(z.ch){z.ch=!1
z.j_()}}}}],["","",,Z,{"^":"",fK:{"^":"b;a,b",t:{
dH:function(a,b,c){var z
H.v(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bC(c)),35044)
a.bindBuffer(b,null)
return new Z.fK(b,z)}}},ef:{"^":"d4;a,b,c,d,e",
cq:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.r('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},l7:{"^":"b;a",$isoj:1},eg:{"^":"b;a,0b,c,d",
aX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cq:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cq(a)},
jf:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b1:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$ispg:1},cC:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}},bz:{"^":"b;a",
gdd:function(a){var z,y
z=this.a
y=(z&$.$get$b_().a)!==0?3:0
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=3
if((z&$.$get$b0().a)!==0)y+=2
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$bX().a)!==0)y+=3
if((z&$.$get$bY().a)!==0)y+=4
if((z&$.$get$bA().a)!==0)++y
return(z&$.$get$aX().a)!==0?y+4:y},
i2:function(a){var z,y,x
z=$.$get$b_()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fJ()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bz))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$b_().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b1().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bX().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bY().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
aw:function(a){return new Z.bz(a)}}}}],["","",,D,{"^":"",ek:{"^":"b;"},bh:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.D]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
G:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.D]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).G(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).G(z,b)||y}return y},
E:function(a){var z,y,x,w
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
return!0}if(!x)C.a.K(y,new D.iq(z))
y=this.b
if(!(y==null))C.a.K(y,new D.ir(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
ii:function(){return this.E(null)},
j4:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
aw:function(a){return this.j4(a,!0,!1)},
t:{
Q:function(){var z=new D.bh()
z.d=0
return z}}},iq:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.D]})
z=this.a.a
z.b
a.$1(z)}},ir:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.D]})
z=this.a.a
z.b
a.$1(z)}},D:{"^":"b;a,0b"},cD:{"^":"D;c,d,a,0b,$ti"},cE:{"^":"D;c,d,a,0b,$ti"},S:{"^":"D;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",eh:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"ol<"}},eJ:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eJ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eK:{"^":"D;c,a,0b"},iL:{"^":"b;0a,0b,0c,0d",
iR:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eK(a,this)
y.b=!0
return z.E(y)},
iN:function(a){var z,y
this.c=a.b
this.d.G(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eK(a,this)
y.b=!0
return z.E(y)}},eN:{"^":"cJ;x,y,c,d,e,a,0b"},iZ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aB:function(a,b){var z,y,x,w,v,u,t,s
z=new P.as(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=y.B(0,new V.T(x*w,v*u))
u=this.a.gaT()
s=new X.bQ(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cU:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.aB(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eS()
if(typeof z!=="number")return z.bV()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.aB(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aB(a,b))
return!0},
iS:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaT()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.dp(new V.a2(v*u,t*s),y,x,new P.as(w,!1),this)
w.b=!0
z.E(w)
return!0},
fW:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.as(Date.now(),!1)
y=this.f
x=new X.eN(c,a,this.a.gaT(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.T(0,0)}},aJ:{"^":"b;a,b,c",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aJ))return!1
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
return z+(this.c?"Shift+":"")}},bQ:{"^":"cJ;x,y,z,Q,ch,c,d,e,a,0b"},jf:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c6:function(a,b,c){var z,y,x
z=new P.as(Date.now(),!1)
y=this.a.gaT()
x=new X.bQ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cU:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.c6(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eS()
if(typeof z!=="number")return z.bV()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.c6(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.c6(a,b,!1))
return!0},
iT:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaT()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.dp(new V.a2(w*v,u*t),y,b,new P.as(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdV:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbU:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gev:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},dp:{"^":"cJ;x,c,d,e,a,0b"},cJ:{"^":"D;"},fh:{"^":"cJ;x,y,z,Q,ch,c,d,e,a,0b"},kn:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aB:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.T],"$asd")
z=new P.as(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gaT()
w=new X.fh(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iQ:function(a){var z
H.v(a,"$isd",[V.T],"$asd")
z=this.b
if(z==null)return!1
z.E(this.aB(a,!0))
return!0},
iO:function(a){var z
H.v(a,"$isd",[V.T],"$asd")
z=this.c
if(z==null)return!1
z.E(this.aB(a,!0))
return!0},
iP:function(a){var z
H.v(a,"$isd",[V.T],"$asd")
z=this.d
if(z==null)return!1
z.E(this.aB(a,!1))
return!0}},kM:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaT:function(){var z=this.a
return V.f_(0,0,(z&&C.l).gdT(z).c,C.l.gdT(z).d)},
dt:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eJ(z,new X.aJ(y,a.altKey,a.shiftKey))},
aQ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aJ(y,a.altKey,a.shiftKey)},
ck:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aJ(y,a.altKey,a.shiftKey)},
aC:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.T(y-w,x-v)},
b7:function(a){return new V.a2(a.movementX,a.movementY)},
ce:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.d.ae(u.pageX)
C.d.ae(u.pageY)
s=z.left
C.d.ae(u.pageX)
C.a.h(y,new V.T(t-s,C.d.ae(u.pageY)-z.top))}return y},
az:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eh(z,new X.aJ(y,a.altKey,a.shiftKey))},
c8:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jy:[function(a){this.f=!0},"$1","gfS",4,0,9],
js:[function(a){this.f=!1},"$1","gfM",4,0,9],
jv:[function(a){H.e(a,"$isaA")
if(this.f&&this.c8(a))a.preventDefault()},"$1","gfP",4,0,4],
jA:[function(a){var z
H.e(a,"$isbO")
if(!this.f)return
z=this.dt(a)
if(this.b.iR(z))a.preventDefault()},"$1","gfU",4,0,22],
jz:[function(a){var z
H.e(a,"$isbO")
if(!this.f)return
z=this.dt(a)
if(this.b.iN(z))a.preventDefault()},"$1","gfT",4,0,22],
jC:[function(a){var z,y,x,w
H.e(a,"$isaA")
z=this.a
z.focus()
this.f=!0
this.aQ(a)
if(this.x){y=this.az(a)
x=this.b7(a)
if(this.d.cU(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.az(a)
w=this.aC(a)
if(this.c.cU(y,w))a.preventDefault()},"$1","gfX",4,0,4],
jE:[function(a){var z,y,x
H.e(a,"$isaA")
this.aQ(a)
z=this.az(a)
if(this.x){y=this.b7(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfZ",4,0,4],
jx:[function(a){var z,y,x
H.e(a,"$isaA")
if(!this.c8(a)){this.aQ(a)
z=this.az(a)
if(this.x){y=this.b7(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfR",4,0,4],
jD:[function(a){var z,y,x
H.e(a,"$isaA")
this.aQ(a)
z=this.az(a)
if(this.x){y=this.b7(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gfY",4,0,4],
jw:[function(a){var z,y,x
H.e(a,"$isaA")
if(!this.c8(a)){this.aQ(a)
z=this.az(a)
if(this.x){y=this.b7(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","gfQ",4,0,4],
jF:[function(a){var z,y
H.e(a,"$isbZ")
this.aQ(a)
z=new V.a2((a&&C.G).gie(a),C.G.gig(a)).u(0,180)
if(this.x){if(this.d.iS(z))a.preventDefault()
return}if(this.r)return
y=this.aC(a)
if(this.c.iT(z,y))a.preventDefault()},"$1","gh_",4,0,39],
jG:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.az(this.y)
v=this.aC(this.y)
this.d.fW(w,v,x)}},"$1","gh0",4,0,9],
jM:[function(a){var z
H.e(a,"$isbx")
this.a.focus()
this.f=!0
this.ck(a)
z=this.ce(a)
if(this.e.iQ(z))a.preventDefault()},"$1","gh7",4,0,15],
jK:[function(a){var z
H.e(a,"$isbx")
this.ck(a)
z=this.ce(a)
if(this.e.iO(z))a.preventDefault()},"$1","gh5",4,0,15],
jL:[function(a){var z
H.e(a,"$isbx")
this.ck(a)
z=this.ce(a)
if(this.e.iP(z))a.preventDefault()},"$1","gh6",4,0,15]}}],["","",,D,{"^":"",cz:{"^":"b;0a,0b,0c,0d",
gC:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z},
aK:[function(a){var z
H.e(a,"$isD")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aK(null)},"jh","$1","$0","gfd",0,2,1],
$isa8:1,
$isaU:1},a8:{"^":"b;",$isaU:1},iM:{"^":"aP;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gC:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fV:[function(a){var z
H.e(a,"$isD")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fV(null)},"jB","$1","$0","gdC",0,2,1],
jH:[function(a){var z,y,x
H.v(a,"$isi",[D.a8],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.fc(x))return!1}return!0},"$1","gh2",4,0,41],
jp:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a8
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdC(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa8")
if(t instanceof D.cz)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bh()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cD(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfJ",8,0,18],
jJ:[function(a,b){var z,y,x,w,v,u
z=D.a8
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdC(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=H.e(b[w],"$isa8")
if(v instanceof D.cz)C.a.G(this.e,v)
u=v.d
if(u==null){u=new D.bh()
u.d=0
v.d=u}u.G(0,x)}z=new D.cE(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gh4",8,0,18],
fc:function(a){var z=C.a.W(this.e,a)
return z},
$asi:function(){return[D.a8]},
$asaP:function(){return[D.a8]}},jr:{"^":"b;",$isa8:1,$isaU:1},k4:{"^":"b;",$isa8:1,$isaU:1},kf:{"^":"b;",$isa8:1,$isaU:1},kg:{"^":"b;",$isa8:1,$isaU:1},kh:{"^":"b;",$isa8:1,$isaU:1}}],["","",,V,{"^":"",
on:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","jc",8,0,37],
ob:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bm(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.d.eI($.p.$2(a,0)?0:a,b),c+b+1)},
bG:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.t],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.ad(z[u],x))}return z},
e_:function(a,b){return C.d.jc(Math.pow(b,C.Q.cJ(Math.log(H.ni(a))/Math.log(b))))},
ak:{"^":"b;a,b,c",
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
return new V.ak(z,y,x)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
aQ:{"^":"b;a,b,c,d",
d1:function(a){return H.c([this.a,this.b,this.c,this.d],[P.t])},
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
return new V.aQ(z,y,x,w)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
cI:{"^":"b;a,b,c,d,e,f,r,x,y",
af:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscI")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.d.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.d.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.d.j(t,s)
q=a5.b
p=C.d.j(z,q)
o=a5.e
n=C.d.j(w,o)
m=a5.x
l=C.d.j(t,m)
k=a5.c
z=C.d.j(z,k)
j=a5.f
w=C.d.j(w,j)
i=a5.y
t=C.d.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.d.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.d.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.d.j(d,s)
b=C.d.j(h,q)
a=C.d.j(f,o)
a0=C.d.j(d,m)
h=C.d.j(h,k)
f=C.d.j(f,j)
d=C.d.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.d.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.d.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cI(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cI))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.bG(H.c([this.a,this.d,this.r],z),3,0)
x=V.bG(H.c([this.b,this.e,this.x],z),3,0)
w=V.bG(H.c([this.c,this.f,this.y],z),3,0)
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
az:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
af:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
ep:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.ck()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaz")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.A(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bk:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.Y(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
w:function(a,b){var z
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
i:function(a){return this.O()},
eh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.bG(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bG(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bG(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bG(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
F:function(a){return this.eh(a,3,0)},
O:function(){return this.eh("",3,0)},
t:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ck:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eQ:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.D(c)))
y=b.aE(z)
x=y.u(0,Math.sqrt(y.D(y)))
w=z.aE(x)
v=new V.A(a.a,a.b,a.c)
return V.aI(x.a,w.a,z.a,x.S(0).D(v),x.b,w.b,z.b,w.S(0).D(v),x.c,w.c,z.c,z.S(0).D(v),0,0,0,1)}}},
T:{"^":"b;a,b",
B:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.T(this.a*b,this.b*b)},
u:function(a,b){if($.p.$2(b,0))return new V.T(0,0)
return new V.T(this.a/b,this.b/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
Y:{"^":"b;a,b,c",
B:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.p.$2(b,0))return new V.Y(0,0,0)
return new V.Y(this.a/b,this.b/b,this.c/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bS:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bS(this.a*b,this.b*b,this.c*b,this.d*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
eZ:{"^":"b;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eZ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
t:{
f_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eZ(a,b,c,d)}}},
a2:{"^":"b;a,b",
er:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,14],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a2(z*b,y*b)},
u:function(a,b){var z,y
if($.p.$2(b,0))return new V.a2(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.a2(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
A:{"^":"b;a,b,c",
er:[function(a){return Math.sqrt(this.D(this))},"$0","gm",1,0,14],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cO:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.A(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aE:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.A(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.A(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.p.$2(b,0))return new V.A(0,0,0)
return new V.A(this.a/b,this.b/b,this.c/b)},
eq:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
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
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bW:{"^":"b;a,b,c,d",
er:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
j:function(a,b){return new V.bW(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){if($.p.$2(b,0))return new V.bW(0,0,0,0)
return new V.bW(this.a/b,this.b/b,this.c/b,this.d/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bW))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}}}],["","",,U,{"^":"",i3:{"^":"ek;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c0:function(a){var z=V.ob(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
U:function(a){var z=this.y
if(!(z==null))z.E(a)},
sd5:function(a,b){},
scQ:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c0(z)}z=new D.S("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.U(z)}},
scS:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c0(z)}z=new D.S("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.U(z)}},
sZ:function(a,b){var z,y
b=this.c0(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.S("location",y,b,this,[P.t])
z.b=!0
this.U(z)}},
scR:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.S("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.U(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.S("velocity",x,a,this,[P.t])
z.b=!0
this.U(z)}},
scB:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.S("dampening",y,a,this,[P.t])
z.b=!0
this.U(z)}},
ax:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
t:{
db:function(){var z=new U.i3()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},em:{"^":"am;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
b4:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.em))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
t:{
en:function(a){var z=new U.em()
z.a=a
return z}}},eC:{"^":"aP;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
U:[function(a){var z
H.e(a,"$isD")
z=this.e
if(!(z==null))z.E(a)},function(){return this.U(null)},"ag","$1","$0","gaP",0,2,1],
jo:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.am
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaP(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gC()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cD(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gfI",8,0,32],
jI:[function(a,b){var z,y,x,w,v
z=U.am
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaP(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gC().G(0,x)}z=new D.cE(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gh3",8,0,32],
b4:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aG(z,z.length,0,[H.y(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.b4(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.ck():x
z=this.e
if(!(z==null))z.aw(0)}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eC))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.J(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.am]},
$asaP:function(){return[U.am]},
$isam:1},am:{"^":"ek;"},kN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
U:[function(a){var z
H.e(a,"$isD")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.U(null)},"ag","$1","$0","gaP",0,2,1],
b9:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdV().h(0,this.gc9())
this.a.c.gev().h(0,this.gca())
this.a.c.gbU().h(0,this.gcb())
return!0},
fE:[function(a){H.e(a,"$isD")
if(!J.J(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc9",4,0,2],
fF:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isbQ")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.a2(y.a,y.b).j(0,2).u(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.a2(x.a,x.b).j(0,2).u(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
this.b.sV(0)
y=y.L(0,a.z)
this.Q=new V.a2(y.a,y.b).j(0,2).u(0,z.ga9())}this.ag()},"$1","gca",4,0,2],
fG:[function(a){var z,y,x
H.e(a,"$isD")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.ag()}},"$1","gcb",4,0,2],
b4:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.ch=y
x=b.y
this.b.ax(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aI(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isam:1},kO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
U:[function(a){var z
H.e(a,"$isD")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.U(null)},"ag","$1","$0","gaP",0,2,1],
b9:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdV().h(0,this.gc9())
this.a.c.gev().h(0,this.gca())
this.a.c.gbU().h(0,this.gcb())
z=this.a.d
y=z.f
if(y==null){y=D.Q()
z.f=y
z=y}else z=y
z.h(0,this.gfB())
z=this.a.d
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.gfC())
z=this.a.e
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.ghy())
z=this.a.e
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.ghx())
z=this.a.e
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.ghw())
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.a2(z,y)},
fE:[function(a){a=H.k(H.e(a,"$isD"),"$isbQ")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc9",4,0,2],
fF:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isbQ")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ap(new V.a2(y.a,y.b).j(0,2).u(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ap(new V.a2(x.a,x.b).j(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.ap(new V.a2(y.a,y.b).j(0,2).u(0,z.ga9()))}this.ag()},"$1","gca",4,0,2],
fG:[function(a){var z,y,x
H.e(a,"$isD")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ag()}},"$1","gcb",4,0,2],
jl:[function(a){if(H.k(H.e(a,"$isD"),"$iseN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfB",4,0,2],
jm:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isbQ")
if(!J.J(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ap(new V.a2(x.a,x.b).j(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.ap(new V.a2(y.a,y.b).j(0,2).u(0,z.ga9()))
this.ag()},"$1","gfC",4,0,2],
jQ:[function(a){H.e(a,"$isD")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghy",4,0,2],
jP:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isD"),"$isfh")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ap(new V.a2(y.a,y.b).j(0,2).u(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ap(new V.a2(x.a,x.b).j(0,2).u(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.ap(new V.a2(y.a,y.b).j(0,2).u(0,z.ga9()))}this.ag()},"$1","ghx",4,0,2],
jO:[function(a){var z,y,x
H.e(a,"$isD")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ag()}},"$1","ghw",4,0,2],
b4:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.dy=y
x=b.y
this.c.ax(0,x)
this.b.ax(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aI(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isam:1},kP:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
U:function(a){var z=this.r
if(!(z==null))z.E(a)},
b9:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=this.gfH()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jn:[function(a){var z,y,x,w
H.e(a,"$isD")
if(!J.J(this.b,this.a.b.c))return
H.k(a,"$isdp")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.S("zoom",z,w,this,[P.t])
z.b=!0
this.U(z)}},"$1","gfH",4,0,2],
b4:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aI(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isam:1}}],["","",,M,{"^":"",io:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aL:[function(a){var z
H.e(a,"$isD")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aL(null)},"ji","$1","$0","gao",0,2,1],
jt:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.b7
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bh()
s.d=0
t.sa5(s)}s=t.ga5()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cD(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gfN",8,0,11],
ju:[function(a,b){var z,y,x,w,v,u
z=E.b7
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null){if(v.ga5()==null){u=new D.bh()
u.d=0
v.sa5(u)}v.ga5().G(0,x)}}z=new D.cE(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gfO",8,0,11],
seG:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gC().G(0,this.gao())
y=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gao())
z=new D.S("technique",y,this.c,this,[O.dy])
z.b=!0
this.aL(z)}},
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.eD(this.c)
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
u=C.d.ae(v.a*x)
if(typeof w!=="number")return H.o(w)
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
n=V.aI(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eC(n)
y=$.eW
if(y==null){y=V.eQ(new V.Y(0,0,0),new V.A(0,1,0),new V.A(0,0,-1))
$.eW=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.j(0,m)}a.db.eC(m)
z=this.c
if(z!=null)z.ax(0,a)
for(z=this.d.a,z=new J.aG(z,z.length,0,[H.y(z,0)]);z.H();)z.d.ax(0,a)
for(z=this.d.a,z=new J.aG(z,z.length,0,[H.y(z,0)]);z.H();)z.d.b1(a)
this.a.toString
a.cy.cV()
a.db.cV()
this.b.toString
a.eB()},
$isp2:1}}],["","",,A,{"^":"",e9:{"^":"b;a,b,c"},hS:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ij:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ih:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j6:{"^":"f1;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0at,0ak,0bA,0dW,0bB,0bC,0dX,0dY,0bD,0bE,0dZ,0e_,0bF,0bG,0e0,0e1,0bH,0e2,0e3,0bI,0e4,0e5,0bJ,0bK,0bL,0e6,0e7,0bM,0bN,0e8,0e9,0bO,0ea,0cD,0eb,0cE,0ec,0cF,0ed,0cG,0ee,0cH,0ef,0cI,a,b,0c,0d,0e,0f,0r,0x,0y",
f2:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.ap("")
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
a2.hB(z)
a2.hI(z)
a2.hC(z)
a2.hQ(z)
a2.hR(z)
a2.hK(z)
a2.hV(z)
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
z=new P.ap("")
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
x.hF(z)
x.hA(z)
x.hD(z)
x.hG(z)
x.hO(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hM(z)
x.hN(z)}x.hJ(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
x.hE(z)
x.hL(z)
x.hP(z)
x.hS(z)
x.hT(z)
x.hU(z)
x.hH(z)}r=z.a+="// === Main ===\n"
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
this.e=this.du(s,35633)
this.f=this.du(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dR(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.q(P.r("Failed to link shader: "+H.j(m)))}this.hr()
this.ht()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaW")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaW")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaW")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaW")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdD")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaW")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaW")
this.r1=H.c([],[A.aW])
y=a2.at
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isR")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaW"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isau")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isav")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isau")
this.at=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isav")
this.at=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a2.c
if(y!==C.c){this.ak=H.k(this.y.q(0,"diffuseClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.bA=H.k(this.y.q(0,"diffuseTxt"),"$isau")
this.bB=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.dW=H.k(this.y.q(0,"diffuseTxt"),"$isav")
this.bB=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a2.d
if(y!==C.c){this.bC=H.k(this.y.q(0,"invDiffuseClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.dX=H.k(this.y.q(0,"invDiffuseTxt"),"$isau")
this.bD=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.dY=H.k(this.y.q(0,"invDiffuseTxt"),"$isav")
this.bD=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a2.e
if(y!==C.c){this.bG=H.k(this.y.q(0,"shininess"),"$isa4")
this.bE=H.k(this.y.q(0,"specularClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.dZ=H.k(this.y.q(0,"specularTxt"),"$isau")
this.bF=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.e_=H.k(this.y.q(0,"specularTxt"),"$isav")
this.bF=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.e0=H.k(this.y.q(0,"bumpTxt"),"$isau")
this.bH=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.h:this.e1=H.k(this.y.q(0,"bumpTxt"),"$isav")
this.bH=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a2.dy){this.e2=H.k(this.y.q(0,"envSampler"),"$isav")
this.e3=H.k(this.y.q(0,"nullEnvTxt"),"$isR")
y=a2.r
if(y!==C.c){this.bI=H.k(this.y.q(0,"reflectClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.e4=H.k(this.y.q(0,"reflectTxt"),"$isau")
this.bJ=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.h:this.e5=H.k(this.y.q(0,"reflectTxt"),"$isav")
this.bJ=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a2.x
if(y!==C.c){this.bK=H.k(this.y.q(0,"refraction"),"$isa4")
this.bL=H.k(this.y.q(0,"refractClr"),"$isO")
switch(y){case C.c:break
case C.i:break
case C.e:this.e6=H.k(this.y.q(0,"refractTxt"),"$isau")
this.bM=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.h:this.e7=H.k(this.y.q(0,"refractTxt"),"$isav")
this.bM=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a2.y
if(y!==C.c){this.bN=H.k(this.y.q(0,"alpha"),"$isa4")
switch(y){case C.c:break
case C.i:break
case C.e:this.e8=H.k(this.y.q(0,"alphaTxt"),"$isau")
this.bO=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.e9=H.k(this.y.q(0,"alphaTxt"),"$isav")
this.bO=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.cD=H.c([],[A.fu])
this.cE=H.c([],[A.fv])
this.cF=H.c([],[A.fw])
this.cG=H.c([],[A.fx])
this.cH=H.c([],[A.fy])
this.cI=H.c([],[A.fz])
if(a2.k2){y=a2.z
if(y>0){this.ea=H.e(this.y.q(0,"dirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.cD;(x&&C.a).h(x,new A.fu(l,k,j))}}y=a2.Q
if(y>0){this.eb=H.e(this.y.q(0,"pntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa4")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa4")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa4")
x=this.cE;(x&&C.a).h(x,new A.fv(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.ec=H.e(this.y.q(0,"spotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa4")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa4")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa4")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa4")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa4")
x=this.cF;(x&&C.a).h(x,new A.fw(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.ed=H.e(this.y.q(0,"txtDirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isau")
x=this.cG;(x&&C.a).h(x,new A.fx(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.ee=H.e(this.y.q(0,"txtPntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdD")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa4")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa4")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa4")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isav")
x=this.cH;(x&&C.a).h(x,new A.fy(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.ef=H.e(this.y.q(0,"txtSpotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isO")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa4")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa4")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa4")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa4")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa4")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isau")
x=this.cI;(x&&C.a).h(x,new A.fz(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ah:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eV(c)
b.a.uniform1i(b.d,0)}},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j5:function(a,b){var z,y
z=a.ak
y=new A.j6(b,z)
y.f5(b,z)
y.f2(a,b)
return y}}},j9:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,at,ak,bA",
hB:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.at+"];\n"
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
hI:function(a){var z
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
hC:function(a){var z
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
hQ:function(a){var z,y
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
hR:function(a){var z,y
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
hK:function(a){var z
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
hV:function(a){var z
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
aA:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.an(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hF:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aA(a,z,"emission")
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hA:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aA(a,z,"ambient")
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hD:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aA(a,z,"diffuse")
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
hG:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aA(a,z,"invDiffuse")
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
hO:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aA(a,z,"specular")
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
hJ:function(a){var z,y
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
hM:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aA(a,z,"reflect")
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
hN:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aA(a,z,"refract")
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
hE:function(a){var z,y
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
hL:function(a){var z,y
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
hP:function(a){var z,y
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
hS:function(a){var z,y,x
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
hT:function(a){var z,y,x
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
hU:function(a){var z,y,x
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
hH:function(a){var z
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
i:function(a){return this.ak}},fu:{"^":"b;a,b,c"},fx:{"^":"b;a,b,c,d,e,f,r,x"},fv:{"^":"b;a,b,c,d,e,f,r"},fy:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fw:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fz:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f1:{"^":"d4;",
f5:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
du:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dR(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.r("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hr:function(){var z,y,x,w,v,u
z=H.c([],[A.e9])
y=this.a
x=H.G(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e9(y,v.name,u))}this.x=new A.hS(z)},
ht:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.G(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ic(v.type,v.size,v.name,u))}this.y=new A.ky(z)},
aO:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dC(z,y,b,a,c)},
ft:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.au(z,y,b,c)
else return A.dC(z,y,b,a,c)},
fu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.av(z,y,b,c)
else return A.dC(z,y,b,a,c)},
bu:function(a,b){return new P.fO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ic:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.a4(this.a,this.r,c,d)
case 35664:return new A.kt(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.kw(this.a,this.r,c,d)
case 35667:return new A.ku(this.a,this.r,c,d)
case 35668:return new A.kv(this.a,this.r,c,d)
case 35669:return new A.kx(this.a,this.r,c,d)
case 35674:return new A.kA(this.a,this.r,c,d)
case 35675:return new A.dD(this.a,this.r,c,d)
case 35676:return new A.aW(this.a,this.r,c,d)
case 35678:return this.ft(b,c,d)
case 35680:return this.fu(b,c,d)
case 35670:throw H.a(this.bu("BOOL",c))
case 35671:throw H.a(this.bu("BOOL_VEC2",c))
case 35672:throw H.a(this.bu("BOOL_VEC3",c))
case 35673:throw H.a(this.bu("BOOL_VEC4",c))
default:throw H.a(P.r("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cy:{"^":"b;a,b",
i:function(a){return this.b}},ag:{"^":"b;"},ky:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
iu:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.iu("\n")}},R:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},ku:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kv:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kx:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ks:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dC:function(a,b,c,d,e){var z=new A.ks(a,b,c,e)
z.f=d
z.e=P.iW(d,0,!1,P.n)
return z}}},a4:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kt:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},O:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kw:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kA:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dD:{"^":"ag;a,b,c,d",
am:function(a){var z=new Float32Array(H.bC(H.v(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aW:{"^":"ag;a,b,c,d",
am:function(a){var z=new Float32Array(H.bC(H.v(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},au:{"^":"ag;a,b,c,d",
eV:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},av:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dU:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
z=F.cL()
F.c2(z,b,c,d,a,1,0,0,1)
F.c2(z,b,c,d,a,0,1,0,3)
F.c2(z,b,c,d,a,0,0,1,2)
F.c2(z,b,c,d,a,-1,0,0,0)
F.c2(z,b,c,d,a,0,-1,0,0)
F.c2(z,b,c,d,a,0,0,-1,3)
z.ai()
return z},
cU:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c2:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
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
z.d=y}l=F.cU(y)
k=F.cU(z.b)
j=F.d1(d,e,new F.n1(z,F.cU(z.c),F.cU(z.d),k,l,c),b)
if(j!=null)a.b0(j)},
hq:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.t,args:[P.t]})
if(f<3)return
z=F.cL()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ah])
v=z.a
u=new V.A(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.hZ(new V.bS(a,-1,-1,-1),new V.aQ(1,1,1,1),new V.Y(0,0,d),new V.A(0,0,y),new V.T(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.A(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.by(new V.bS(a,-1,-1,-1),null,new V.aQ(n,l,m,1),new V.Y(r*p,q*p,d),new V.A(0,0,y),new V.T(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hX(w)
return z},
ho:function(a,b,c,d,e,f){return F.no(!0,c,d,new F.nn(a,f),e)},
no:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.d1(c,e,new F.nq(d),null)
if(z==null)return
z.ai()
z.bw()
if(b)z.b0(F.hq(3,!1,!1,1,new F.nr(d),e))
z.b0(F.hq(1,!0,!1,-1,new F.ns(d),e))
return z},
nL:function(a,b){var z=F.d1(a,b,new F.nM(),null)
z.d.bS()
z.ai()
z.bw()
return z},
ai:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.u(0,Math.sqrt(b.D(b)))
z=b.a
y=b.b
x=b.c
w=F.by(null,null,null,new V.Y(z,y,x),b,null,null,null,0)
v=a.il(w,new F.dG())
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
w.sas(0,new V.aQ(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sb3(new V.T(q,p<0?-p:p))
a.a.h(0,w)
return w},
a0:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bv(0,b,d,c)
else{z=F.ai(a,b.r.B(0,c.r).j(0,0.5))
y=F.ai(a,c.r.B(0,d.r).j(0,0.5))
x=F.ai(a,d.r.B(0,b.r).j(0,0.5))
w=e-1
F.a0(a,b,z,x,w)
F.a0(a,z,c,y,w)
F.a0(a,y,x,z,w)
F.a0(a,x,y,d,w)}},
hC:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.o5()
y=F.dU(a,null,new F.o6(z,c),d)
y.bw()
return y},
o8:function(a,b,c,d){return F.hp(c,a,d,b,new F.o9())},
nJ:function(a,b,c,d,e,f){return F.hp(d,a,e,b,new F.nK(f,c))},
hp:function(a,b,c,d,e){var z=F.d1(a,b,new F.np(H.l(e,{func:1,ret:V.Y,args:[P.t]}),d,b,c),null)
if(z==null)return
z.ai()
z.bw()
return z},
d1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ah,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cL()
y=H.c([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.by(null,null,new V.aQ(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cA(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.by(null,null,new V.aQ(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cA(d))}}z.d.hY(a+1,b+1,y)
return z},
n1:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cO(z.b,b).cO(z.d.cO(z.c,b),c)
a.sZ(0,new V.Y(y.a,y.b,y.c))
a.sbT(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sdQ(new V.bS(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nn:{"^":"m:25;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nq:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sZ(0,new V.Y(y,u,w))
u=new V.A(y,u,w)
a.sbT(u.u(0,Math.sqrt(u.D(u))))
a.sdQ(new V.bS(1-c,2+c,-1,-1))}},
nr:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
ns:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
nM:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.A(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.u(0,Math.sqrt(w.D(w)))
a.sZ(0,new V.Y(x.a,x.b,x.c))}},
o5:{"^":"m:25;",
$2:function(a,b){return 0}},
o6:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.A(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).j(0,this.b+z)
a.sZ(0,new V.Y(z.a,z.b,z.c))}},
o9:{"^":"m:21;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
nK:{"^":"m:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
np:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e2(y.$1(z),x)
x=J.e2(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.A(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.A(1,0,0)
y=v.aE(!v.w(0,u)?new V.A(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.aE(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sZ(0,w.B(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
at:{"^":"b;0a,0b,0c,0d,0e",
aF:function(){if(!this.gbb()){C.a.G(this.a.a.d.b,this)
this.a.a.T()}this.cg()
this.ci()
this.ha()},
cl:function(a){this.a=a
C.a.h(a.d.b,this)},
cm:function(a){this.b=a
C.a.h(a.d.c,this)},
hq:function(a){this.c=a
C.a.h(a.d.d,this)},
cg:function(){var z=this.a
if(z!=null){C.a.G(z.d.b,this)
this.a=null}},
ci:function(){var z=this.b
if(z!=null){C.a.G(z.d.c,this)
this.b=null}},
ha:function(){var z=this.c
if(z!=null){C.a.G(z.d.d,this)
this.c=null}},
gbb:function(){return this.a==null||this.b==null||this.c==null},
fl:function(){var z,y,x,w,v
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
if(v.eq())return
return v.u(0,Math.sqrt(v.D(v)))},
fo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.A(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.L(0,y)
z=new V.A(z.a,z.b,z.c)
z=v.aE(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
cv:function(){if(this.d!=null)return!0
var z=this.fl()
if(z==null){z=this.fo()
if(z==null)return!1}this.d=z
this.a.a.T()
return!0},
fk:function(){var z,y,x,w,v
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
if(v.eq())return
return v.u(0,Math.sqrt(v.D(v)))},
fn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.L(0,u)
z=new V.A(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.L(0,u).j(0,l).B(0,u).L(0,x)
z=new V.A(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.aE(m)
z=z.u(0,Math.sqrt(z.D(z))).aE(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
ct:function(){if(this.e!=null)return!0
var z=this.fk()
if(z==null){z=this.fn()
if(z==null)return!1}this.e=z
this.a.a.T()
return!0},
aM:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gi7:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var z,y
if(this.gbb())return a+"disposed"
z=a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)+", "+C.b.ad(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.F("")},
t:{
bi:function(a,b,c){var z,y,x
z=new F.at()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.cl(a)
z.cm(b)
z.hq(c)
C.a.h(z.a.a.d.b,z)
z.a.a.T()
return z}}},
is:{"^":"b;"},
k3:{"^":"is;",
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
di:{"^":"b;0a,0b",
aF:function(){if(!this.gbb()){C.a.G(this.a.a.c.b,this)
this.a.a.T()}this.cg()
this.ci()},
cl:function(a){this.a=a
C.a.h(a.c.b,this)},
cm:function(a){this.b=a
C.a.h(a.c.c,this)},
cg:function(){var z=this.a
if(z!=null){C.a.G(z.c.b,this)
this.a=null}},
ci:function(){var z=this.b
if(z!=null){C.a.G(z.c.c,this)
this.b=null}},
gbb:function(){return this.a==null||this.b==null},
aM:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){if(this.gbb())return a+"disposed"
return a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)},
O:function(){return this.F("")},
t:{
iN:function(a,b){var z,y,x
z=new F.di()
y=a.a
if(y==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.r("May not create a line with vertices attached to different shapes."))
z.cl(a)
z.cm(b)
C.a.h(z.a.a.c.b,z)
z.a.a.T()
return z}}},
iO:{"^":"b;"},
kr:{"^":"iO;",
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
dt:{"^":"b;0a",
aF:function(){var z=this.a
if(z!=null){C.a.G(z.a.b.b,this)
this.a.a.T()}this.h9()},
h9:function(){var z=this.a
if(z!=null){C.a.G(z.b.b,this)
this.a=null}},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ac(z.e),0)},
O:function(){return this.F("")}},
f2:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.i9())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dt()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iN(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bi(p,o,m)}z=this.e
if(!(z==null))z.aw(0)},
ai:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ai()||!1
if(!this.a.ai())y=!1
z=this.e
if(!(z==null))z.aw(0)
return y},
im:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.b_(0,a,w))return w}return},
il:function(a,b){return this.im(a,b,0)},
hc:function(a,b){var z,y,x,w,v,u
H.v(b,"$isd",[F.ah],"$asd")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.q(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.J(v,x)){w.aM(x,a)
v=w.a
if(v!=null){C.a.G(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.J(w.b,x)){w.aM(x,a)
v=w.b
if(v!=null){C.a.G(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.J(w.c,x)){w.aM(x,a)
v=w.c
if(v!=null){C.a.G(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.E(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null)H.q(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.J(v,x)){w.aM(x,a)
v=w.a
if(v!=null){C.a.G(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.J(w.b,x)){w.aM(x,a)
v=w.b
if(v!=null){C.a.G(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.E(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.q(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.J(v,x)){if(a.a==null)H.q(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.G(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.E(null)}}this.a.G(0,x)}},
eu:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.y(z,0)])
for(z=[F.ah];y.length!==0;){x=C.a.gip(y)
C.a.iY(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.C)(y),++u){t=y[u]
if(t!=null&&a.b_(0,x,t)){C.a.h(w,t)
C.a.G(y,t)}}if(w.length>1){s=b.b0(w)
if(s!=null){this.hc(s,w)
C.a.h(y,s)}}}}this.a.A()
this.c.bS()
this.d.bS()
this.b.iZ()
this.c.cZ(new F.kr())
this.d.cZ(new F.k3())
z=this.e
if(!(z==null))z.aw(0)},
i0:function(a){this.eu(new F.dG(),new F.jl())},
bw:function(){return this.i0(null)},
i5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$b_()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$bX().a)!==0)++w
if((x&$.$get$bY().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
v=b.gdd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ef])
for(r=0,q=0;q<w;++q){p=b.i2(q)
o=p.gdd(p)
C.a.p(s,q,new Z.ef(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].iB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bC(t)),35044)
y.bindBuffer(34962,null)
i=new Z.eg(new Z.fK(34962,j),s,b)
i.b=H.c([],[Z.cC])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cC(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cC(1,h.length,f))}if(this.d.b.length!==0){x=P.n
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
C.a.h(h,g.e)}f=Z.dH(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cC(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.n(z,"\n")},
al:function(a){var z=this.e
if(!(z==null))z.E(a)},
T:function(){return this.al(null)},
t:{
cL:function(){var z,y
z=new F.f2()
y=new F.kY(z)
y.b=!1
y.c=H.c([],[F.ah])
z.a=y
y=new F.jY(z)
y.b=H.c([],[F.dt])
z.b=y
y=new F.jX(z)
y.b=H.c([],[F.di])
z.c=y
y=new F.jW(z)
y.b=H.c([],[F.at])
z.d=y
z.e=null
return z}}},
jW:{"^":"b;a,0b",
bv:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bi(b,c,d)},
hX:function(a){var z,y,x,w,v,u
H.v(a,"$isd",[F.ah],"$asd")
z=H.c([],[F.at])
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
C.a.h(z,F.bi(x,v,u))}}return z},
hY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.ah],"$asd")
z=H.c([],[F.at])
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
gm:function(a){return this.b.length},
cZ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b_(0,v,t)){v.aF()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gi7(x)
if(y)x.aF()}},
ai:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cv())x=!1
return x},
cu:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].ct())x=!1
return x},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
O:function(){return this.F("")}},
jX:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cZ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b_(0,v,t)){v.aF()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.aF()}},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.n(z,"\n")},
O:function(){return this.F("")}},
jY:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iZ:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aF()}},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
O:function(){return this.F("")}},
ah:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cA:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.by(this.cx,x,u,z,y,w,v,a,t)},
i9:function(){return this.cA(null)},
gcN:function(a){var z
if(this.b.b.length===0){z=this.c
if(z.b.length===0&&z.c.length===0){z=this.d
z=z.b.length===0&&z.c.length===0&&z.d.length===0}else z=!1}else z=!1
return z},
sZ:function(a,b){var z
if(!J.J(this.f,b)){this.f=b
z=this.a
if(z!=null)z.T()}},
scT:function(a){var z
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.J(this.r,a)){this.r=a
z=this.a
if(z!=null)z.T()}},
sdS:function(a){var z
a=a==null?null:a.u(0,Math.sqrt(a.D(a)))
if(!J.J(this.x,a)){this.x=a
z=this.a
if(z!=null)z.T()}},
sb3:function(a){var z
if(!J.J(this.y,a)){this.y=a
z=this.a
if(z!=null)z.T()}},
sbT:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.T()}},
sas:function(a,b){var z
if(!J.J(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.T()}},
seM:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.T()}},
sdQ:function(a){var z
if(!J.J(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.T()}},
iB:function(a){var z,y
z=J.L(a)
if(z.w(a,$.$get$b_())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aZ())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aY())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b0())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.w(a,$.$get$b1())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bX())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bY())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.t])
else return z.d1(0)}else if(z.w(a,$.$get$bA()))return H.c([this.ch],[P.t])
else if(z.w(a,$.$get$aX())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
cv:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.A(0,0,0)
this.d.K(0,new F.l6(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.aw(0)}return!0},
ct:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.A(0,0,0)
this.d.K(0,new F.l5(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.aw(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var z,y,x
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
C.a.h(z,V.P(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
O:function(){return this.F("")},
t:{
by:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.l4(z)
y.b=H.c([],[F.dt])
z.b=y
y=new F.l2(z)
x=[F.di]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kZ(z)
x=[F.at]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fH()
z.e=0
y=$.$get$b_()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aZ().a)!==0?e:null
z.x=(x&$.$get$aY().a)!==0?b:null
z.y=(x&$.$get$b0().a)!==0?f:null
z.z=(x&$.$get$b1().a)!==0?g:null
z.Q=(x&$.$get$fI().a)!==0?c:null
z.ch=(x&$.$get$bA().a)!==0?i:0
z.cx=(x&$.$get$aX().a)!==0?a:null
return z}}},
l6:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isat")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
l5:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isat")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kY:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.T()
return!0},
i_:function(a,b,c,d,e,f,g,h,i){var z=F.by(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hZ:function(a,b,c,d,e,f){return this.i_(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
G:function(a,b){if(b==null)return!1
if(b.a!==this.a)return!1
if(!b.gcN(b))throw H.a(P.r("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
this.a.T()
this.b=!0
return!0},
ai:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cv()
return!0},
cu:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].ct()
return!0},
i6:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.J(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
O:function(){return this.F("")}},
kZ:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.at]})
C.a.K(this.b,b)
C.a.K(this.c,new F.l_(this,b))
C.a.K(this.d,new F.l0(this,b))},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
O:function(){return this.F("")}},
l_:{"^":"m:6;a,b",
$1:function(a){H.e(a,"$isat")
if(!J.J(a.a,this.a))this.b.$1(a)}},
l0:{"^":"m:6;a,b",
$1:function(a){var z
H.e(a,"$isat")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
l2:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
O:function(){return this.F("")}},
l3:{"^":"b;"},
dG:{"^":"l3;",
b_:function(a,b,c){return J.J(b.f,c.f)}},
fG:{"^":"b;"},
l1:{"^":"fG;",
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a,"$isd",[F.ah],"$asd")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.Y(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.A(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.A(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.T(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.A(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bW(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bW(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.by(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sZ(0,null)
else b.sZ(0,x.u(0,y))
if(w==null)b.scT(null)
else b.scT(w.u(0,Math.sqrt(w.D(w))))
if(v==null)b.sdS(null)
else b.sdS(v.u(0,Math.sqrt(v.D(v))))
if(s<=0||r==null)b.sb3(null)
else b.sb3(r.u(0,s))
if(q<=0||p==null)b.sbT(null)
else b.sbT(p.u(0,q))
if(u<=0||t==null)b.sas(0,null)
else{z=t.u(0,u)
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
b.sas(0,new V.aQ(f,e,d,z))}if(o<=0)b.seM(0,0)
else b.seM(0,n/o)
return b}},
jl:{"^":"fG;",
b0:function(a){var z,y,x,w
H.v(a,"$isd",[F.ah],"$asd")
z=new V.A(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.A(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)a[x].scT(z)
return}},
l4:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.O()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].F(a))
return C.a.n(z,"\n")},
O:function(){return this.F("")}}}],["","",,O,{"^":"",j4:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gC:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
a4:[function(a){var z
H.e(a,"$isD")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a4(null)},"ff","$1","$0","gbp",0,2,1],
hf:[function(a){H.e(a,"$isD")
this.a=null
this.a4(a)},function(){return this.hf(null)},"jN","$1","$0","ghe",0,2,1],
jq:[function(a,b){var z=V.az
z=new D.cD(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a4(z)},"$2","gfK",8,0,17],
jr:[function(a,b){var z=V.az
z=new D.cE(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a4(z)},"$2","gfL",8,0,17],
dr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a6(z.e.length+3,4)*4
x=C.f.a6(z.f.length+3,4)*4
w=C.f.a6(z.r.length+3,4)*4
v=C.f.a6(z.x.length+3,4)*4
u=C.f.a6(z.y.length+3,4)*4
t=C.f.a6(z.z.length+3,4)*4
s=C.f.a6(this.e.a.length+3,4)*4
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$b_()
if(c){z=$.$get$aZ()
a6=new Z.bz(a6.a|z.a)}if(b){z=$.$get$aY()
a6=new Z.bz(a6.a|z.a)}if(a){z=$.$get$b0()
a6=new Z.bz(a6.a|z.a)}if(a0){z=$.$get$b1()
a6=new Z.bz(a6.a|z.a)}if(a2){z=$.$get$aX()
a6=new Z.bz(a6.a|z.a)}return new A.j9(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Y:function(a,b){H.v(a,"$isd",[T.dz],"$asd")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aG(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
x=new V.A(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d2(x)}}},
j0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dr()
y=a.fr.k(0,z.ak)
if(y==null){y=A.j5(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.by(0,x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bA
z=b.e
if(!(z instanceof Z.eg)){b.e=null
z=null}if(z==null||!z.d.w(0,v)){z=w.r1
if(z)b.d.ai()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cu()
t.a.cu()
t=t.e
if(!(t==null))t.aw(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.i6()
s=s.e
if(!(s==null))s.aw(0)}q=b.d.i5(new Z.l7(a.a),v)
q.aX($.$get$b_()).e=this.a.Q.c
if(z)q.aX($.$get$aZ()).e=this.a.cx.c
if(u)q.aX($.$get$aY()).e=this.a.ch.c
if(w.rx)q.aX($.$get$b0()).e=this.a.cy.c
if(t)q.aX($.$get$b1()).e=this.a.db.c
if(w.x1)q.aX($.$get$aX()).e=this.a.dx.c
b.e=q}z=T.dz
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.ij()
if(w.fx){u=this.a
t=a.dx
t=t.ga1(t)
u=u.dy
u.toString
u.am(t.af(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga1(t)
s=a.dx
s=t.j(0,s.ga1(s))
a.cx=s
t=s}u=u.fr
u.toString
u.am(t.af(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giV()
s=a.dx
s=t.j(0,s.ga1(s))
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
u.am(C.w.af(t,!0))}if(w.at>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isaz")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.bC(H.v(s.af(0,!0),"$isd",u,"$asd")))
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
case C.e:this.Y(p,this.f.d)
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
case C.h:this.Y(p,this.f.e)
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
case C.e:this.Y(p,this.r.d)
u=this.a
t=this.r.d
u.ah(u.y1,u.at,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.r.e)
u=this.a
t=this.r.e
u.ab(u.y2,u.at,t)
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
case C.e:this.Y(p,this.x.d)
u=this.a
t=this.x.d
u.ah(u.bA,u.bB,t)
t=this.a
u=this.x.f
t=t.ak
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.dW,u.bB,t)
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
u=u.bC
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.Y(p,this.y.d)
u=this.a
t=this.y.d
u.ah(u.dX,u.bD,t)
t=this.a
u=this.y.f
t=t.bC
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.Y(p,this.y.e)
u=this.a
t=this.y.e
u.ab(u.dY,u.bD,t)
t=this.a
u=this.y.f
t=t.bC
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bE
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bG
t.a.uniform1f(t.d,r)
break
case C.e:this.Y(p,this.z.d)
u=this.a
t=this.z.d
u.ah(u.dZ,u.bF,t)
t=this.a
u=this.z.f
t=t.bE
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bG
u.a.uniform1f(u.d,r)
break
case C.h:this.Y(p,this.z.e)
u=this.a
t=this.z.e
u.ab(u.e_,u.bF,t)
t=this.a
u=this.z.f
t=t.bE
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bG
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ea
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cD
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.d2(i.a)
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.eb
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cE
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbf(i)
r=h.b
g=s.gd6(s)
f=s.gd7(s)
s=s.gd8(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bk(i.gbf(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gas(i)
f=h.d
g=s.gbR()
r=s.gbl()
s=s.gbx()
f.a.uniform3f(f.d,g,r,s)
s=i.gcn()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gco()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gcp()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.ec
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cF
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbf(i)
r=h.b
g=s.gd6(s)
f=s.gd7(s)
s=s.gd8(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcC(i).jW()
f=h.c
g=s.gaU(s)
r=s.gaV(s)
s=s.gaW()
f.a.uniform3f(f.d,g,r,s)
s=l.bk(i.gbf(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gas(i)
r=h.e
g=s.gbR()
f=s.gbl()
s=s.gbx()
r.a.uniform3f(r.d,g,f,s)
s=i.gjT()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjR()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcn()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gco()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcp()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.ed
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cG
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbh()
H.v(p,"$isd",s,"$asd")
if(!C.a.W(p,r)){r.sbr(p.length)
C.a.h(p,r)}r=i.gcC(i)
g=h.d
f=r.gaU(r)
e=r.gaV(r)
r=r.gaW()
g.a.uniform3f(g.d,f,e,r)
r=i.gbU()
e=h.b
f=r.gaU(r)
g=r.gaV(r)
r=r.gaW()
e.a.uniform3f(e.d,f,g,r)
r=i.gbg(i)
g=h.c
f=r.gaU(r)
e=r.gaV(r)
r=r.gaW()
g.a.uniform3f(g.d,f,e,r)
r=l.d2(i.gcC(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gas(i)
f=h.f
e=g.gbR()
r=g.gbl()
g=g.gbx()
f.a.uniform3f(f.d,e,r,g)
g=i.gbh()
r=g.gcP(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gfA()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbr())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.ee
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.cH
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbh()
H.v(p,"$isd",r,"$asd")
if(!C.a.W(p,g)){g.sbr(p.length)
C.a.h(p,g)}d=l.j(0,i.ga1(i))
g=i.ga1(i).bk(new V.Y(0,0,0))
f=h.b
e=g.gd6(g)
c=g.gd7(g)
g=g.gd8(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bk(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.ep(0)
c=h.d
m=new Float32Array(H.bC(H.v(new V.cI(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).af(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gas(i)
g=h.e
e=c.gbR()
f=c.gbl()
c=c.gbx()
g.a.uniform3f(g.d,e,f,c)
c=i.gbh()
g=c.gcP(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcP(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjU(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcn()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gco()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcp()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.ef
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga1(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cI
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbh()
H.v(p,"$isd",z,"$asd")
if(!C.a.W(p,s)){s.sbr(p.length)
C.a.h(p,s)}s=i.gbf(i)
r=h.b
g=s.gd6(s)
f=s.gd7(s)
s=s.gd8(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcC(i)
f=h.c
g=s.gaU(s)
r=s.gaV(s)
s=s.gaW()
f.a.uniform3f(f.d,g,r,s)
s=i.gbU()
r=h.d
g=s.gaU(s)
f=s.gaV(s)
s=s.gaW()
r.a.uniform3f(r.d,g,f,s)
s=i.gbg(i)
f=h.e
g=s.gaU(s)
r=s.gaV(s)
s=s.gaW()
f.a.uniform3f(f.d,g,r,s)
s=l.bk(i.gbf(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbh()
r=s.gcP(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gfA()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbr())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gas(i)
r=h.y
g=s.gbR()
f=s.gbl()
s=s.gbx()
r.a.uniform3f(r.d,g,f,s)
s=i.gk5()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gk6()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcn()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gco()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcp()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.Y(p,this.Q.d)
z=this.a
u=this.Q.d
z.ah(z.e0,z.bH,u)
break
case C.h:this.Y(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.e1,z.bH,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga1(u).ep(0)
a.Q=u}z=z.id
z.toString
z.am(u.af(0,!0))}if(w.dy){this.Y(p,this.ch)
z=this.a
u=this.ch
z.ab(z.e2,z.e3,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bI
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.Y(p,this.cx.d)
z=this.a
u=this.cx.d
z.ah(z.e4,z.bJ,u)
u=this.a
z=this.cx.f
u=u.bI
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.Y(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.e5,z.bJ,u)
u=this.a
z=this.cx.f
u=u.bI
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bL
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bK
u.a.uniform1f(u.d,s)
break
case C.e:this.Y(p,this.cy.d)
z=this.a
u=this.cy.d
z.ah(z.e6,z.bM,u)
u=this.a
z=this.cy.f
u=u.bL
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bK
z.a.uniform1f(z.d,s)
break
case C.h:this.Y(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.e7,z.bM,u)
u=this.a
z=this.cy.f
u=u.bL
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bK
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bN
z.a.uniform1f(z.d,t)
break
case C.e:this.Y(p,this.db.d)
z=this.a
t=this.db.d
z.ah(z.e8,z.bO,t)
t=this.a
z=this.db.f
t=t.bN
t.a.uniform1f(t.d,z)
break
case C.h:this.Y(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.e9,z.bO,t)
t=this.a
z=this.db.f
t=t.bN
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.cq(a)
z.b1(a)
z.jf(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.ih()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dr().ak}},j7:{"^":"dm;0f,a,b,0c,0d,0e",
hk:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.S(this.b,y,a,this,[P.t])
z.b=!0
this.a.a4(z)}},
b6:function(){this.df()
this.hk(1)}},dm:{"^":"b;",
a4:[function(a){this.a.a4(H.e(a,"$isD"))},function(){return this.a4(null)},"ff","$1","$0","gbp",0,2,1],
b6:["df",function(){}],
ho:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gC().G(0,this.gbp())
y=this.d
this.d=a
if(a!=null)a.gC().h(0,this.gbp())
z=new D.S(this.b+".texture2D",y,this.d,this,[T.fb])
z.b=!0
this.a.a4(z)}},
hp:function(a){},
sb3:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.b6()
this.c=C.e
this.hp(null)
z=this.a
z.a=null
z.a4(null)}this.ho(a)}},j8:{"^":"dm;a,b,0c,0d,0e"},bl:{"^":"dm;0f,a,b,0c,0d,0e",
hl:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.S(this.b+".color",z,a,this,[V.ak])
y.b=!0
this.a.a4(y)}},
b6:["dg",function(){this.df()
this.hl(new V.ak(1,1,1))}]},ja:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
hm:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.a4(z)}},
b6:function(){this.dg()
this.hm(1)}},jb:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
hn:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.a4(z)}},
b6:function(){this.dg()
this.hn(100)}},dy:{"^":"b;"}}],["","",,T,{"^":"",dz:{"^":"d4;"},fb:{"^":"dz;"},kc:{"^":"fb;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gC:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z}},kd:{"^":"b;a,0b,0c,0d,0e",
iD:function(a,b,c,d,e){var z,y,x,w
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
w=new T.kc()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ae
W.a6(x,"load",H.l(new T.ke(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
es:function(a){return this.iD(a,!1,!1,!1,!1)},
hg:function(a,b,c){var z,y,x,w
b=V.e_(b,2)
z=V.e_(a.width,2)
y=V.e_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d9(null,null)
x.width=z
x.height=y
w=H.e(C.l.eP(x,"2d"),"$isej")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nm(w.getImageData(0,0,x.width,x.height))}}},ke:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hg(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a4.j9(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ii()}++x.e}}}],["","",,V,{"^":"",bJ:{"^":"b;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isaT:1},aT:{"^":"b;"},eP:{"^":"b;",
aZ:["f_",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaT:1},aB:{"^":"eP;0a",
aZ:function(a,b){return!this.f_(0,b)},
i:function(a){return"!["+this.de(0)+"]"}},jF:{"^":"b;0a,0b",
aZ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bU(this.a)
y=H.bU(this.b)
return z+".."+y},
$isaT:1,
t:{
Z:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.I(a,0)
y=C.b.I(b,0)
x=new V.jF()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jU:{"^":"b;0a",
f4:function(a){var z,y
if(a.a.length<=0)throw H.a(P.r("May not create a SetMatcher with zero characters."))
z=new H.b9(0,0,[P.n,P.V])
for(y=new H.dk(a,a.gm(a),0,[H.ao(a,"z",0)]);y.H();)z.p(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.by(0,b)},
i:function(a){var z=this.a
return P.cm(z.ga7(z),0,null)},
$isaT:1,
t:{
x:function(a){var z=new V.jU()
z.f4(a)
return z}}},f4:{"^":"b;a,b,0c,0d",
giF:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fi(this.a.l(0,b))
w.a=H.c([],[V.aT])
w.c=!1
C.a.h(this.c,w)
return w},
io:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},ff:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e1(this.b,"\n","\\n")
y=H.e1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fg:{"^":"b;a,b,0c",
aH:function(a,b,c){var z,y,x
H.v(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},km:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f4(this,b)
z.c=H.c([],[V.fi])
this.a.p(0,b,z)}return z},
P:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.fg(this,a)
y=P.h
z.c=new H.b9(0,0,[y,y])
this.b.p(0,a,z)}return z},
eJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ff])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.io(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cm(w,0,null)
throw H.a(P.r("Untokenizable string [state: "+y.giF(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cm(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.ff(o==null?p.b:o,q,t)}++t}}},
t:{
cN:function(){var z,y
z=new V.km()
y=P.h
z.a=new H.b9(0,0,[y,V.f4])
z.b=new H.b9(0,0,[y,V.fg])
return z}}},fi:{"^":"eP;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",ei:{"^":"b;",$isaU:1},ix:{"^":"f8;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},jo:{"^":"b;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
b5:[function(a){var z
H.e(a,"$isD")
z=this.f
if(!(z==null))z.E(a)},function(){return this.b5(null)},"jj","$1","$0","gdi",0,2,1],
sbc:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gC().G(0,this.gdi())
y=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdi())
z=new D.S("mover",y,this.b,this,[U.am])
z.b=!0
this.b5(z)}},
$isaU:1,
$isei:1},f8:{"^":"b;"}}],["","",,V,{"^":"",
o3:function(a){P.kl(C.N,new V.o4(a))},
b5:{"^":"b;",
bo:function(a){this.b=new P.iA(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bf]])},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bf]))
y=a.split("\n")
for(z=y.length,x=[W.bf],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.I(u)
s=this.b.fs(u,0,u.length)
r=s==null?u:s
C.M.eT(t,H.e1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gav(this.d),t)}},
ez:function(a,b){var z,y,x,w
H.v(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bf]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bz()
this.c=y}for(y=y.eJ(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bQ(y[w])}},
o4:{"^":"m:53;a",
$1:function(a){H.e(a,"$isbv")
P.e0(C.d.eI(this.a.giv(),2)+" fps")}},
ib:{"^":"b5;a,0b,0c,0d",
bQ:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break
case"Type":this.M(a.b,"#B11")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bz:function(){var z,y,x,w
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Z("0","9")
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
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bJ())
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
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bJ())
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
x=new V.aB()
w=[V.aT]
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
x=new V.aB()
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
x.d=x.a.P("Num")
x=z.l(0,"Float")
x.d=x.a.P("Num")
x=z.l(0,"Sym")
x.d=x.a.P("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.P("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.P("String")
x=z.l(0,"EndComment")
x.d=x.a.P("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.P("Whitespace")
x=z.l(0,"Id")
y=x.a.P("Id")
x.d=y
x=[P.h]
y.aH(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aH(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aH(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iy:{"^":"b5;a,0b,0c,0d",
bQ:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Preprocess":this.M(a.b,"#737")
break
case"Reserved":this.M(a.b,"#119")
break
case"Symbol":this.M(a.b,"#611")
break
case"Type":this.M(a.b,"#171")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bz:function(){var z,y,x,w
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Z("0","9")
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
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bJ())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aB()
w=[V.aT]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aB()
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
y.d=y.a.P("Num")
y=z.l(0,"Float")
y.d=y.a.P("Num")
y=z.l(0,"Sym")
y.d=y.a.P("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.P("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.P("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.P("Whitespace")
y=z.l(0,"Id")
x=y.a.P("Id")
y.d=x
y=[P.h]
x.aH(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aH(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aH(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iz:{"^":"b5;a,0b,0c,0d",
bQ:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
this.M("=","#111")
break
case"Id":this.M(a.b,"#111")
break
case"Other":this.M(a.b,"#111")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break}},
bz:function(){var z,y,x
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
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
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bJ())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bJ())
y=z.l(0,"Other").n(0,"Other")
x=new V.aB()
x.a=H.c([],[V.aT])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.P("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.P("String")
y=z.l(0,"Id")
x=y.a.P("Id")
y.d=x
x.aH(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.P("Attr")
x=z.l(0,"Other")
x.d=x.a.P("Other")
return z}},
jq:{"^":"b5;a,0b,0c,0d",
ez:function(a,b){H.v(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bf]])
this.M(C.a.n(b,"\n"),"#111")},
bQ:function(a){},
bz:function(){return}},
jD:{"^":"b;a,b,0c",
bv:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fC().gcY().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.dK(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e5(this.c).h(0,v)
t=W.iD("radio")
t.checked=x
t.name=z
z=W.ae
W.a6(t,"change",H.l(new V.jE(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e5(this.c).h(0,w.createElement("br"))},
aq:function(a,b,c){return this.bv(a,b,c,!1)},
dK:function(a){var z,y,x,w,v
z=P.fC()
y=P.h
x=P.iU(z.gcY(),y,y)
x.p(0,this.a,a)
w=z.eE(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.me([],[]).d3(""),"",v)}},
jE:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dK(this.d)}}},
jZ:{"^":"b;0a,0b",
f6:function(a,b){var z,y,x,w,v,u,t
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
W.a6(z,"scroll",H.l(new V.k1(x),{func:1,ret:-1,args:[t]}),!1,t)},
dO:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.h],"$asd")
this.hs()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eJ(C.a.iA(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.hD(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cq(C.B,s,C.k,!1)
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
eO:function(a){var z,y,x,w
z=new V.ib("dart")
z.bo("dart")
y=new V.iy("glsl")
y.bo("glsl")
x=new V.iz("html")
x.bo("html")
w=C.a.iq(H.c([z,y,x],[V.b5]),new V.k2(a))
if(w!=null)return w
z=new V.jq("plain")
z.bo("plain")
return z},
dM:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c8(w).a3(w,"+")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a3(w,"-")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eO(a0)
v.ez(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cq(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e7(null)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.C)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.C)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.ga0(w);b.H();)h.appendChild(b.gN(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hW:function(a){var z,y,x,w,v,u,t
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
x=H.e(w.insertCell(-1),"$isdx").style
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
t=H.e(w.insertCell(-1),"$isdx")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hs:function(){var z,y,x,w
if(this.b!=null)return
z=V.cN()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aB()
w=[V.aT]
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
x=new V.aB()
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
x=new V.aB()
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
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bJ())
x=z.l(0,"Other").n(0,"Other")
y=new V.aB()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.P("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.P("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.P("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.P("Link")
x=z.l(0,"Other")
x.d=x.a.P("Other")
this.b=z},
t:{
k_:function(a,b){var z=new V.jZ()
z.f6(a,!0)
return z}}},
k1:{"^":"m:13;a",
$1:function(a){P.fd(C.q,new V.k0(this.a))}},
k0:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.ae(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k2:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb5").a===this.a}}}],["","",,M,{"^":"",
hy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.k_("Test 018",!0)
y=W.d9(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dO(H.c(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],x))
z.hW(H.c(["shapes"],x))
z.dO(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.kj(w,!0,!0,!0,!1)
u=new E.b7()
u.a=""
u.b=!0
t=E.b7
s=O.da(t)
u.y=s
s.bn(u.giH(),u.giJ())
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
u.sa8(0,null)
u.sbc(null)
u.sa8(0,F.hC(8,null,1,8))
s=new U.eC()
r=U.am
s.c_(r)
s.bn(s.gfI(),s.gh3())
s.e=null
s.f=V.ck()
s.r=0
q=v.r
p=new U.kO()
o=U.db()
o.sd5(0,!0)
o.scQ(6.283185307179586)
o.scS(0)
o.sZ(0,0)
o.scR(100)
o.sV(0)
o.scB(0.5)
p.b=o
n=p.gaP()
o.gC().h(0,n)
o=U.db()
o.sd5(0,!0)
o.scQ(6.283185307179586)
o.scS(0)
o.sZ(0,0)
o.scR(100)
o.sV(0)
o.scB(0.5)
p.c=o
o.gC().h(0,n)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
m=new X.aJ(!1,!1,!1)
l=p.d
p.d=m
o=[X.aJ]
n=new D.S("modifiers",l,m,p,o)
n.b=!0
p.U(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.S("invertX",n,!1,p,[P.V])
n.b=!0
p.U(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.S("invertY",n,!1,p,[P.V])
n.b=!0
p.U(n)}p.b9(q)
s.h(0,p)
q=v.r
p=new U.kN()
n=U.db()
n.sd5(0,!0)
n.scQ(6.283185307179586)
n.scS(0)
n.sZ(0,0)
n.scR(100)
n.sV(0)
n.scB(0.2)
p.b=n
n.gC().h(0,p.gaP())
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
m=new X.aJ(!0,!1,!1)
l=p.c
p.c=m
n=new D.S("modifiers",l,m,p,o)
n.b=!0
p.U(n)
p.b9(q)
s.h(0,p)
q=v.r
p=new U.kP()
p.c=0.01
p.d=0
p.e=0
m=new X.aJ(!1,!1,!1)
p.b=m
o=new D.S("modifiers",null,m,p,o)
o.b=!0
p.U(o)
p.b9(q)
s.h(0,p)
u.sbc(s)
k=v.f.es("../resources/Dirt.png")
j=v.f.es("../resources/Grass.png")
i=new O.j4()
s=O.da(V.az)
i.e=s
s.bn(i.gfK(),i.gfL())
s=new O.bl(i,"emission")
s.c=C.c
s.f=new V.ak(0,0,0)
i.f=s
s=new O.bl(i,"ambient")
s.c=C.c
s.f=new V.ak(0,0,0)
i.r=s
s=new O.bl(i,"diffuse")
s.c=C.c
s.f=new V.ak(0,0,0)
i.x=s
s=new O.bl(i,"invDiffuse")
s.c=C.c
s.f=new V.ak(0,0,0)
i.y=s
s=new O.jb(i,"specular")
s.c=C.c
s.f=new V.ak(0,0,0)
s.ch=100
i.z=s
s=new O.j8(i,"bump")
s.c=C.c
i.Q=s
i.ch=null
s=new O.bl(i,"reflect")
s.c=C.c
s.f=new V.ak(0,0,0)
i.cx=s
s=new O.ja(i,"refract")
s.c=C.c
s.f=new V.ak(0,0,0)
s.ch=1
i.cy=s
s=new O.j7(i,"alpha")
s.c=C.c
s.f=1
i.db=s
s=new D.iM()
s.c_(D.a8)
s.e=H.c([],[D.cz])
s.f=H.c([],[D.jr])
s.r=H.c([],[D.k4])
s.x=H.c([],[D.kf])
s.y=H.c([],[D.kg])
s.z=H.c([],[D.kh])
s.Q=null
s.ch=null
s.dc(s.gfJ(),s.gh2(),s.gh4())
i.dx=s
q=s.Q
if(q==null){q=D.Q()
s.Q=q
s=q}else s=q
s.h(0,i.ghe())
s=i.dx
q=s.ch
if(q==null){q=D.Q()
s.ch=q
s=q}else s=q
s.h(0,i.gbp())
i.dy=null
s=i.dx
q=U.en(V.eQ(new V.Y(0,0,0),new V.A(0,1,0),new V.A(-1,-1,-1)))
h=new V.ak(1,1,1)
p=new D.cz()
p.c=new V.ak(1,1,1)
p.a=new V.A(0,0,1)
l=p.b
p.b=q
q.gC().h(0,p.gfd())
r=new D.S("mover",l,p.b,p,[r])
r.b=!0
p.aK(r)
if(!p.c.w(0,h)){l=p.c
p.c=h
r=new D.S("color",l,h,p,[V.ak])
r.b=!0
p.aK(r)}s.h(0,p)
i.x.sb3(k)
i.y.sb3(j)
s=new M.io()
t=O.da(t)
s.d=t
t.bn(s.gfN(),s.gfO())
s.e=null
s.f=null
s.r=null
s.x=null
g=new X.jo()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.sbc(null)
t=g.c
if(!$.p.$2(t,1.0471975511965976)){l=g.c
g.c=1.0471975511965976
t=new D.S("fov",l,1.0471975511965976,g,[P.t])
t.b=!0
g.b5(t)}t=g.d
if(!$.p.$2(t,0.1)){l=g.d
g.d=0.1
t=new D.S("near",l,0.1,g,[P.t])
t.b=!0
g.b5(t)}t=g.e
if(!$.p.$2(t,2000)){l=g.e
g.e=2000
t=new D.S("far",l,2000,g,[P.t])
t.b=!0
g.b5(t)}t=s.a
if(t!==g){if(t!=null)t.gC().G(0,s.gao())
l=s.a
s.a=g
g.gC().h(0,s.gao())
t=new D.S("camera",l,s.a,s,[X.ei])
t.b=!0
s.aL(t)}f=new X.ix()
t=new V.aQ(0,0,0,1)
f.a=t
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
t=V.f_(0,0,1,1)
f.r=t
t=s.b
if(t!==f){if(t!=null)t.gC().G(0,s.gao())
l=s.b
s.b=f
f.gC().h(0,s.gao())
t=new D.S("target",l,s.b,s,[X.f8])
t.b=!0
s.aL(t)}s.seG(null)
s.seG(i)
s.d.h(0,u)
s.a.sbc(U.en(V.aI(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
t=v.d
if(t!==s){if(t!=null)t.gC().G(0,v.gdh())
v.d=s
s.gC().h(0,v.gdh())
v.f9()}t=new V.jD("shapes",!0)
x=x.getElementById("shapes")
t.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
t.aq(0,"Cube",new M.nO(u))
t.aq(0,"Cuboid",new M.nP(u))
t.aq(0,"Cylinder",new M.nQ(u))
t.aq(0,"Cone",new M.nR(u))
t.aq(0,"LatLonSphere",new M.nS(u))
t.aq(0,"IsoSphere",new M.nT(u))
t.bv(0,"Sphere",new M.nU(u),!0)
t.aq(0,"Toroid",new M.nV(u))
t.aq(0,"Knot",new M.nW(u))
x=v.z
if(x==null){x=D.Q()
v.z=x}t={func:1,ret:-1,args:[D.D]}
s=H.l(new M.nX(z,i),t)
r=x.b
if(r==null){t=H.c([],[t])
x.b=t
x=t}else x=r
C.a.h(x,s)
V.o3(v)},
nO:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dU(1,null,null,1))}},
nP:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dU(8,null,null,8))}},
nQ:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.ho(1,!0,!0,1,40,1))}},
nR:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.ho(1,!0,!1,1,40,0))}},
nS:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.nL(10,20))}},
nT:{"^":"m:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cL()
y=Math.sqrt(5)/2+0.5
x=F.ai(z,new V.A(-1,y,0))
w=F.ai(z,new V.A(1,y,0))
v=-y
u=F.ai(z,new V.A(-1,v,0))
t=F.ai(z,new V.A(1,v,0))
s=F.ai(z,new V.A(0,-1,v))
r=F.ai(z,new V.A(0,1,v))
q=F.ai(z,new V.A(0,-1,y))
p=F.ai(z,new V.A(0,1,y))
o=F.ai(z,new V.A(y,0,1))
n=F.ai(z,new V.A(y,0,-1))
m=F.ai(z,new V.A(v,0,1))
l=F.ai(z,new V.A(v,0,-1))
F.a0(z,x,l,r,2)
F.a0(z,x,r,w,2)
F.a0(z,x,w,p,2)
F.a0(z,x,p,m,2)
F.a0(z,x,m,l,2)
F.a0(z,w,r,n,2)
F.a0(z,r,l,s,2)
F.a0(z,l,m,u,2)
F.a0(z,m,p,q,2)
F.a0(z,p,w,o,2)
F.a0(z,t,n,s,2)
F.a0(z,t,s,u,2)
F.a0(z,t,u,q,2)
F.a0(z,t,q,o,2)
F.a0(z,t,o,n,2)
F.a0(z,s,n,r,2)
F.a0(z,u,s,l,2)
F.a0(z,q,u,m,2)
F.a0(z,o,q,p,2)
F.a0(z,n,o,w,2)
z.eu(new F.dG(),new F.l1())
this.a.sa8(0,z)}},
nU:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hC(6,null,1,6))}},
nV:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.o8(30,1,15,0.5))}},
nW:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.nJ(120,1,2,12,0.3,3))}},
nX:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isD")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dM("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dM("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eH.prototype
return J.eG.prototype}if(typeof a=="string")return J.ch.prototype
if(a==null)return J.eI.prototype
if(typeof a=="boolean")return J.iH.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.aO=function(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.c7=function(a){if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.nx=function(a){if(typeof a=="number")return J.cg.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.co.prototype
return a}
J.ny=function(a){if(typeof a=="number")return J.cg.prototype
if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.co.prototype
return a}
J.c8=function(a){if(typeof a=="string")return J.ch.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.co.prototype
return a}
J.aE=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).w(a,b)}
J.hF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nx(a).R(a,b)}
J.e2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ny(a).j(a,b)}
J.e3=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hv(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aO(a).k(a,b)}
J.d2=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hv(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c7(a).p(a,b,c)}
J.hG=function(a,b){return J.c8(a).I(a,b)}
J.hH=function(a,b,c){return J.aE(a).hb(a,b,c)}
J.hI=function(a,b,c,d){return J.aE(a).dN(a,b,c,d)}
J.hJ=function(a,b){return J.c8(a).a_(a,b)}
J.d3=function(a,b,c){return J.aO(a).i8(a,b,c)}
J.cu=function(a,b){return J.c7(a).J(a,b)}
J.hK=function(a,b,c,d){return J.c7(a).aG(a,b,c,d)}
J.e4=function(a,b){return J.c7(a).K(a,b)}
J.hL=function(a){return J.aE(a).gi3(a)}
J.e5=function(a){return J.aE(a).gcw(a)}
J.ca=function(a){return J.L(a).gX(a)}
J.b4=function(a){return J.c7(a).ga0(a)}
J.aq=function(a){return J.aO(a).gm(a)}
J.hM=function(a){return J.aE(a).gcW(a)}
J.hN=function(a){return J.aE(a).gj8(a)}
J.e6=function(a){return J.c7(a).iX(a)}
J.hO=function(a,b){return J.aE(a).j1(a,b)}
J.hP=function(a,b){return J.aE(a).sa2(a,b)}
J.hQ=function(a,b,c){return J.c8(a).v(a,b,c)}
J.hR=function(a){return J.c8(a).je(a)}
J.ac=function(a){return J.L(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cw.prototype
C.l=W.d8.prototype
C.M=W.bf.prototype
C.P=J.u.prototype
C.a=J.bk.prototype
C.Q=J.eG.prototype
C.f=J.eH.prototype
C.w=J.eI.prototype
C.d=J.cg.prototype
C.b=J.ch.prototype
C.X=J.ci.prototype
C.a2=H.ds.prototype
C.a3=W.ji.prototype
C.E=J.jp.prototype
C.a4=P.du.prototype
C.F=W.kb.prototype
C.u=J.co.prototype
C.G=W.bZ.prototype
C.H=W.l9.prototype
C.J=new P.hW(!1)
C.I=new P.hV(C.J)
C.K=new P.jn()
C.L=new P.kX()
C.j=new P.lX()
C.c=new A.cy(0,"ColorSourceType.None")
C.i=new A.cy(1,"ColorSourceType.Solid")
C.e=new A.cy(2,"ColorSourceType.Texture2D")
C.h=new A.cy(3,"ColorSourceType.TextureCube")
C.q=new P.bg(0)
C.N=new P.bg(5e6)
C.O=new P.iB("element",!0,!1,!1,!1)
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
C.k=new P.kQ(!1)
$.aH=0
$.bK=null
$.ed=null
$.dO=!1
$.ht=null
$.hl=null
$.hB=null
$.cX=null
$.d_=null
$.dX=null
$.bD=null
$.c3=null
$.c4=null
$.dP=!1
$.a_=C.j
$.aS=null
$.dc=null
$.ez=null
$.ey=null
$.eu=null
$.et=null
$.es=null
$.er=null
$.p=V.jc()
$.eW=null
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
I.$lazy(y,x,w)}})(["eq","$get$eq",function(){return H.hs("_$dart_dartClosure")},"df","$get$df",function(){return H.hs("_$dart_js")},"fj","$get$fj",function(){return H.aL(H.cO({
toString:function(){return"$receiver$"}}))},"fk","$get$fk",function(){return H.aL(H.cO({$method$:null,
toString:function(){return"$receiver$"}}))},"fl","$get$fl",function(){return H.aL(H.cO(null))},"fm","$get$fm",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fq","$get$fq",function(){return H.aL(H.cO(void 0))},"fr","$get$fr",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fo","$get$fo",function(){return H.aL(H.fp(null))},"fn","$get$fn",function(){return H.aL(function(){try{null.$method$}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aL(H.fp(void 0))},"fs","$get$fs",function(){return H.aL(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dJ","$get$dJ",function(){return P.la()},"c5","$get$c5",function(){return[]},"fF","$get$fF",function(){return P.kU()},"fN","$get$fN",function(){return H.jg(H.bC(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"ha","$get$ha",function(){return P.jK("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hh","$get$hh",function(){return P.n3()},"eo","$get$eo",function(){return{}},"fR","$get$fR",function(){return P.eM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dK","$get$dK",function(){return P.dj(P.h,P.ce)},"fJ","$get$fJ",function(){return Z.aw(0)},"fH","$get$fH",function(){return Z.aw(511)},"b_","$get$b_",function(){return Z.aw(1)},"aZ","$get$aZ",function(){return Z.aw(2)},"aY","$get$aY",function(){return Z.aw(4)},"b0","$get$b0",function(){return Z.aw(8)},"b1","$get$b1",function(){return Z.aw(16)},"bX","$get$bX",function(){return Z.aw(32)},"bY","$get$bY",function(){return Z.aw(64)},"fI","$get$fI",function(){return Z.aw(96)},"bA","$get$bA",function(){return Z.aw(128)},"aX","$get$aX",function(){return Z.aw(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.N,args:[F.ah,P.t,P.t]},{func:1,ret:P.N,args:[F.at]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.N,args:[D.D]},{func:1,ret:-1,args:[P.n,[P.i,E.b7]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.ae]},{func:1,ret:P.t},{func:1,ret:-1,args:[W.bx]},{func:1,ret:P.V,args:[W.aK]},{func:1,ret:-1,args:[P.n,[P.i,V.az]]},{func:1,ret:-1,args:[P.n,[P.i,D.a8]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:V.Y,args:[P.t]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.V,args:[W.H]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:W.H},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.V,args:[P.h]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.V,args:[W.W,P.h,P.h,W.cp]},{func:1,ret:-1,args:[P.n,[P.i,U.am]]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:P.N,args:[P.a7]},{func:1,ret:P.U,args:[,,]},{func:1,ret:P.V,args:[P.t,P.t]},{func:1,ret:P.U,args:[P.n]},{func:1,ret:-1,args:[W.bZ]},{func:1,ret:P.N,args:[P.h,,]},{func:1,ret:P.V,args:[[P.i,D.a8]]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.M,P.h,P.h],args:[[P.M,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b2,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.N,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aC]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.bv]},{func:1,ret:P.V,args:[V.b5]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.W,args:[W.H]}]
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
if(x==y)H.o7(d||a)
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
Isolate.dV=a.dV
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
if(typeof dartMainRunner==="function")dartMainRunner(M.hy,[])
else M.hy([])})})()
//# sourceMappingURL=test.dart.js.map
