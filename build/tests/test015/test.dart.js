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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dY(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dZ=function(){}
var dart=[["","",,H,{"^":"",op:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e0==null){H.ny()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cm("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dj()]
if(v!=null)return v
v=H.nB(a)
if(v!=null)return v
if(typeof a=="function")return C.Y
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dj(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
q:{"^":"b;",
A:function(a,b){return a===b},
gX:function(a){return H.bT(a)},
i:["f1",function(a){return"Instance of '"+H.bm(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iJ:{"^":"q;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isU:1},
eI:{"^":"q;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isK:1},
dk:{"^":"q;",
gX:function(a){return 0},
i:["f3",function(a){return String(a)}]},
jm:{"^":"dk;"},
cM:{"^":"dk;"},
ci:{"^":"dk;",
i:function(a){var z=a[$.$get$eq()]
if(z==null)return this.f3(a)
return"JavaScript function for "+H.j(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isce:1},
bh:{"^":"q;$ti",
h:function(a,b){H.B(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.r(P.E("remove"))
for(z=0;z<a.length;++z)if(J.a4(a[z],b)){a.splice(z,1)
return!0}return!1},
ab:function(a,b){var z,y
H.t(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.E("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aG(a))}},
m:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.n(z,y,H.j(a[y]))
return z.join(b)},
im:function(a){return this.m(a,"")},
ic:function(a,b,c,d){var z,y,x
H.B(b,d)
H.l(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aG(a))}return y},
ia:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.U,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aG(a))}throw H.a(H.dh())},
i9:function(a,b){return this.ia(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
c4:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a5(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a5(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.dh())},
aH:function(a,b,c,d){var z
H.B(d,H.x(a,0))
if(!!a.immutable$list)H.r(P.E("fill range"))
P.aV(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.F(0,1))a[z]=d},
dZ:function(a,b){var z,y
H.l(b,{func:1,ret:P.U,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aG(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.a4(a[z],b))return!0
return!1},
i:function(a){return P.dg(a,"[","]")},
ga1:function(a){return new J.ay(a,a.length,0,[H.x(a,0)])},
gX:function(a){return H.bT(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cs(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aP(a,b))
if(b>=a.length||b<0)throw H.a(H.aP(a,b))
return a[b]},
n:function(a,b,c){H.G(b)
H.B(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aP(a,b))
if(b>=a.length||b<0)throw H.a(H.aP(a,b))
a[b]=c},
$isi:1,
$ise:1,
t:{
iI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cs(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a5(a,0,4294967295,"length",null))
return J.eF(new Array(a),b)},
eF:function(a,b){return J.bN(H.c(a,[b]))},
bN:function(a){H.c9(a)
a.fixed$length=Array
return a}}},
oo:{"^":"bh;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cB:{"^":"q;",
iZ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.E(""+a+".toInt()"))},
cM:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eO:function(a,b){var z,y
if(b>20)throw H.a(P.a5(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bp:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a0(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.E("Unexpected toString result: "+z))
x=J.aQ(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.p("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
bt:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dR(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dR(a,b)},
dR:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.dP(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ho:function(a,b){if(b<0)throw H.a(H.al(b))
return this.dP(a,b)},
dP:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.al(b))
return a<b},
$isD:1,
$isa6:1},
eH:{"^":"cB;",$isn:1},
eG:{"^":"cB;"},
cC:{"^":"q;",
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aP(a,b))
if(b<0)throw H.a(H.aP(a,b))
if(b>=a.length)H.r(H.aP(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.a(H.aP(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.cs(b,null,null))
return a+b},
b3:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.al(b))
c=P.aV(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.al(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ah:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.al(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.ah(a,b,0)},
v:function(a,b,c){H.G(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.al(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.cH(b,null,null))
if(b>c)throw H.a(P.cH(b,null,null))
if(c>a.length)throw H.a(P.cH(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.v(a,b,null)},
j1:function(a){return a.toLowerCase()},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.L)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iB:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
ak:function(a,b){return this.iB(a,b," ")},
eB:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eA:function(a,b){return this.eB(a,b,0)},
i_:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.hD(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseZ:1,
$isf:1}}],["","",,H,{"^":"",
cZ:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dh:function(){return new P.dB("No element")},
iH:function(){return new P.dB("Too many elements")},
v:{"^":"kG;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ascN:function(){return[P.n]},
$asy:function(){return[P.n]},
$asi:function(){return[P.n]},
$ase:function(){return[P.n]}},
ex:{"^":"i;"},
cE:{"^":"ex;$ti",
ga1:function(a){return new H.dp(this,this.gl(this),0,[H.ah(this,"cE",0)])},
d3:function(a,b){return this.f2(0,H.l(b,{func:1,ret:P.U,args:[H.ah(this,"cE",0)]}))}},
dp:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aQ(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aG(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
j0:{"^":"i;a,b,$ti",
ga1:function(a){return new H.j1(J.b4(this.a),this.b,this.$ti)},
gl:function(a){return J.ap(this.a)},
J:function(a,b){return this.b.$1(J.cr(this.a,b))},
$asi:function(a,b){return[b]}},
j1:{"^":"di;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asdi:function(a,b){return[b]}},
j2:{"^":"cE;a,b,$ti",
gl:function(a){return J.ap(this.a)},
J:function(a,b){return this.b.$1(J.cr(this.a,b))},
$ascE:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dN:{"^":"i;a,b,$ti",
ga1:function(a){return new H.l8(J.b4(this.a),this.b,this.$ti)}},
l8:{"^":"di;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
cz:{"^":"b;$ti"},
cN:{"^":"b;$ti",
n:function(a,b,c){H.G(b)
H.B(c,H.ah(this,"cN",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aH:function(a,b,c,d){H.B(d,H.ah(this,"cN",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kG:{"^":"cD+cN;"}}],["","",,H,{"^":"",
i7:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nr:function(a){return init.types[H.G(a)]},
hw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isJ},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.al(a))
return z},
bT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jx:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.G(w,u)|32)>x)return}return parseInt(a,b)},
bm:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.Q||!!J.L(a).$iscM){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.G(w,0)===36)w=C.b.at(w,1)
r=H.e1(H.c9(H.bb(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jp:function(){if(!!self.location)return self.location.href
return},
f1:function(a){var z,y,x,w,v
H.c9(a)
z=J.ap(a)
if(typeof z!=="number")return z.eW()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jy:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.al(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aV(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.al(w))}return H.f1(z)},
f2:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.al(x))
if(x<0)throw H.a(H.al(x))
if(x>65535)return H.jy(a)}return H.f1(a)},
jz:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eW()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bU:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aV(z,10))>>>0,56320|z&1023)}}throw H.a(P.a5(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jw:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
ju:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
jq:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
jr:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
jt:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
jv:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
js:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
o:function(a){throw H.a(H.al(a))},
h:function(a,b){if(a==null)J.ap(a)
throw H.a(H.aP(a,b))},
aP:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.G(J.ap(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cH(b,"index",null)},
nm:function(a,b,c){if(a>c)return new P.cG(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cG(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
al:function(a){return new P.aE(!0,a,null,null)},
nh:function(a){if(typeof a!=="number")throw H.a(H.al(a))
return a},
a:function(a){var z
if(a==null)a=new P.eY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hE})
z.name=""}else z.toString=H.hE
return z},
hE:function(){return J.ab(this.dartException)},
r:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aG(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nX(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dl(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eX(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fn()
u=$.$get$fo()
t=$.$get$fp()
s=$.$get$fq()
r=$.$get$fu()
q=$.$get$fv()
p=$.$get$fs()
$.$get$fr()
o=$.$get$fx()
n=$.$get$fw()
m=v.aj(y)
if(m!=null)return z.$1(H.dl(H.I(y),m))
else{m=u.aj(y)
if(m!=null){m.method="call"
return z.$1(H.dl(H.I(y),m))}else{m=t.aj(y)
if(m==null){m=s.aj(y)
if(m==null){m=r.aj(y)
if(m==null){m=q.aj(y)
if(m==null){m=p.aj(y)
if(m==null){m=s.aj(y)
if(m==null){m=o.aj(y)
if(m==null){m=n.aj(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eX(H.I(y),m))}}return z.$1(new H.kF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f8()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f8()
return a},
bE:function(a){var z
if(a==null)return new H.h2(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h2(a)},
np:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.n(0,a[y],a[x])}return b},
nA:function(a,b,c,d,e,f){H.d(a,"$isce")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.u("Unsupported number of arguments for wrapped closure"))},
bC:function(a,b){var z
H.G(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nA)
a.$identity=z
return z},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$ise){z.$reflectionInfo=d
x=H.jF(z).r}else x=d
w=e?Object.create(new H.k4().constructor.prototype):Object.create(new H.d5(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.F()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.el(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nr,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.eg:H.d6
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
i_:function(a,b,c,d){var z=H.d6
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
if(y===0){w=$.aF
if(typeof w!=="number")return w.F()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bI
if(v==null){v=H.cu("self")
$.bI=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.F()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bI
if(v==null){v=H.cu("self")
$.bI=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i0:function(a,b,c,d){var z,y
z=H.d6
y=H.eg
switch(b?-1:a){case 0:throw H.a(H.jP("Intercepted function with no arguments."))
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
z=$.bI
if(z==null){z=H.cu("self")
$.bI=z}y=$.ef
if(y==null){y=H.cu("receiver")
$.ef=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aF
if(typeof y!=="number")return y.F()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.F()
$.aF=y+1
return new Function(z+y+"}")()},
dY:function(a,b,c,d,e,f,g){var z,y
z=J.bN(H.c9(b))
H.G(c)
y=!!J.L(d).$ise?J.bN(d):d
return H.i2(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
nP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
dW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
hB:function(a,b){throw H.a(H.aB(a,H.I(b).substring(3)))},
nR:function(a,b){var z=J.aQ(b)
throw H.a(H.hZ(a,z.v(b,3,z.gl(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hB(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.nR(a,b)},
c9:function(a){if(a==null)return a
if(!!J.L(a).$ise)return a
throw H.a(H.aB(a,"List"))},
hy:function(a,b){if(a==null)return a
if(!!J.L(a).$ise)return a
if(J.L(a)[b])return a
H.hB(a,b)},
hs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.G(z)]
else return a.$S()}return},
cp:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hs(J.L(a))
if(z==null)return!1
y=H.hv(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dT)return a
$.dT=!0
try{if(H.cp(a,b))return a
z=H.cq(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dT=!1}},
e_:function(a,b){if(a!=null&&!H.dX(a,b))H.r(H.aB(a,H.cq(b)))
return a},
hn:function(a){var z
if(a instanceof H.m){z=H.hs(J.L(a))
if(z!=null)return H.cq(z)
return"Closure"}return H.bm(a)},
nW:function(a){throw H.a(new P.ic(H.I(a)))},
ht:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bb:function(a){if(a==null)return
return a.$ti},
ps:function(a,b,c){return H.bF(a["$as"+H.j(c)],H.bb(b))},
b3:function(a,b,c,d){var z
H.I(c)
H.G(d)
z=H.bF(a["$as"+H.j(c)],H.bb(b))
return z==null?null:z[d]},
ah:function(a,b,c){var z
H.I(b)
H.G(c)
z=H.bF(a["$as"+H.j(b)],H.bb(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.G(b)
z=H.bb(a)
return z==null?null:z[b]},
cq:function(a){var z=H.bc(a,null)
return z},
bc:function(a,b){var z,y
H.t(b,"$ise",[P.f],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e1(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.n7(a,b)
if('futureOr' in a)return"FutureOr<"+H.bc("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.t(b,"$ise",z,"$ase")
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
if(q!=null&&q!==P.b)t+=" extends "+H.bc(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bc(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bc(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bc(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.no(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.bc(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e1:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$ise",[P.f],"$ase")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bc(u,c)}v="<"+z.i(0)+">"
return v},
bF:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c5:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bb(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hq(H.bF(y[d],z),null,c,null)},
t:function(a,b,c,d){var z,y
H.I(b)
H.c9(c)
H.I(d)
if(a==null)return a
z=H.c5(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e1(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ax(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ax(a[y],b,c[y],d))return!1
return!0},
pq:function(a,b,c){return a.apply(b,H.bF(J.L(b)["$as"+H.j(c)],H.bb(b)))},
hx:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="K"||a===-1||a===-2||H.hx(z)}return!1},
dX:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="K"||b===-1||b===-2||H.hx(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dX(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cp(a,b)}y=J.L(a).constructor
x=H.bb(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ax(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.dX(a,b))throw H.a(H.aB(a,H.cq(b)))
return a},
ax:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="K")return!0
if('func' in c)return H.hv(a,b,c,d)
if('func' in a)return c.builtin$cls==="ce"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,x,d)
else if(H.ax(a,b,x,d))return!0
else{if(!('$is'+"bM" in y.prototype))return!1
w=y.prototype["$as"+"bM"]
v=H.bF(w,z?a.slice(1):null)
return H.ax(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cq(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hq(H.bF(r,z),b,u,d)},
hv:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nO(m,b,l,d)},
nO:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ax(c[w],d,a[w],b))return!1}return!0},
pr:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nB:function(a){var z,y,x,w,v,u
z=H.I($.hu.$1(a))
y=$.cX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d_[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hp.$2(a,z))
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
return u.i}if(v==="+")return H.hA(a,x)
if(v==="*")throw H.a(P.cm(z))
if(init.leafTags[z]===true){u=H.d0(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hA(a,x)},
hA:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e2(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d0:function(a){return J.e2(a,!1,null,!!a.$isJ)},
nN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d0(z)
else return J.e2(z,c,null,null)},
ny:function(){if(!0===$.e0)return
$.e0=!0
H.nz()},
nz:function(){var z,y,x,w,v,u,t,s
$.cX=Object.create(null)
$.d_=Object.create(null)
H.nu()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hC.$1(v)
if(u!=null){t=H.nN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nu:function(){var z,y,x,w,v,u,t
z=C.V()
z=H.bB(C.S,H.bB(C.X,H.bB(C.x,H.bB(C.x,H.bB(C.W,H.bB(C.T,H.bB(C.U(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hu=new H.nv(v)
$.hp=new H.nw(u)
$.hC=new H.nx(t)},
bB:function(a,b){return a(b)||b},
hD:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e5:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i6:{"^":"b;$ti",
i:function(a){return P.dq(this)},
n:function(a,b,c){H.B(b,H.x(this,0))
H.B(c,H.x(this,1))
return H.i7()},
$isN:1},
i8:{"^":"i6;a,b,c,$ti",
gl:function(a){return this.a},
bE:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bE(0,b))return
return this.dA(b)},
dA:function(a){return this.b[H.I(a)]},
H:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.l(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.B(this.dA(v),z))}}},
jE:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jF:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bN(z)
y=z[0]
x=z[1]
return new H.jE(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ks:{"^":"b;a,b,c,d,e,f",
aj:function(a){var z,y,x
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
aM:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ks(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ft:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jj:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eX:function(a,b){return new H.jj(a,b==null?null:b.method)}}},
iM:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
dl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iM(a,y,z?null:b.receiver)}}},
kF:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nX:{"^":"m:23;a",
$1:function(a){if(!!J.L(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h2:{"^":"b;a,0b",
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
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
geS:function(){return this},
$isce:1,
geS:function(){return this}},
fd:{"^":"m;"},
k4:{"^":"fd;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d5:{"^":"fd;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d5))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bT(this.a)
else y=typeof z!=="object"?J.ca(z):H.bT(z)
return(y^H.bT(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bm(z)+"'")},
t:{
d6:function(a){return a.a},
eg:function(a){return a.c},
cu:function(a){var z,y,x,w,v
z=new H.d5("self","target","receiver","name")
y=J.bN(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kt:{"^":"a8;a",
i:function(a){return this.a},
t:{
aB:function(a,b){return new H.kt("TypeError: "+H.j(P.cy(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"a8;a",
i:function(a){return this.a},
t:{
hZ:function(a,b){return new H.hY("CastError: "+H.j(P.cy(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
jO:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jP:function(a){return new H.jO(a)}}},
b9:{"^":"eQ;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gil:function(a){return this.a===0},
ga9:function(a){return new H.iR(this,[H.x(this,0)])},
bE:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.du(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.du(y,b)}else return this.ii(b)},
ii:function(a){var z=this.d
if(z==null)return!1
return this.cP(this.cd(z,this.cO(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bx(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bx(w,b)
x=y==null?null:y.b
return x}else return this.ij(b)},
ij:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cd(z,this.cO(a))
x=this.cP(y,a)
if(x<0)return
return y[x].b},
n:function(a,b,c){var z,y
H.B(b,H.x(this,0))
H.B(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cj()
this.b=z}this.dl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cj()
this.c=y}this.dl(y,b,c)}else this.ik(b,c)},
ik:function(a,b){var z,y,x,w
H.B(a,H.x(this,0))
H.B(b,H.x(this,1))
z=this.d
if(z==null){z=this.cj()
this.d=z}y=this.cO(a)
x=this.cd(z,y)
if(x==null)this.co(z,y,[this.ck(a,b)])
else{w=this.cP(x,a)
if(w>=0)x[w].b=b
else x.push(this.ck(a,b))}},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aG(this))
z=z.c}},
dl:function(a,b,c){var z
H.B(b,H.x(this,0))
H.B(c,H.x(this,1))
z=this.bx(a,b)
if(z==null)this.co(a,b,this.ck(b,c))
else z.b=c},
fG:function(){this.r=this.r+1&67108863},
ck:function(a,b){var z,y
z=new H.iQ(H.B(a,H.x(this,0)),H.B(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fG()
return z},
cO:function(a){return J.ca(a)&0x3ffffff},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a4(a[y].a,b))return y
return-1},
i:function(a){return P.dq(this)},
bx:function(a,b){return a[b]},
cd:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
fB:function(a,b){delete a[b]},
du:function(a,b){return this.bx(a,b)!=null},
cj:function(){var z=Object.create(null)
this.co(z,"<non-identifier-key>",z)
this.fB(z,"<non-identifier-key>")
return z},
$iseL:1},
iQ:{"^":"b;a,b,0c,0d"},
iR:{"^":"ex;a,$ti",
gl:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.iS(z,z.r,this.$ti)
y.c=z.e
return y}},
iS:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aG(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nv:{"^":"m:23;a",
$1:function(a){return this.a(a)}},
nw:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nx:{"^":"m:55;a",
$1:function(a){return this.a(H.I(a))}},
iK:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseZ:1,
$isjG:1,
t:{
iL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a2("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
no:function(a){return J.eF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){return a},
je:function(a){return new Int8Array(a)},
aO:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aP(b,a))},
n1:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nm(a,b,c))
return b},
eV:{"^":"q;",$iseV:1,"%":"ArrayBuffer"},
dv:{"^":"q;",$isdv:1,$isku:1,"%":"DataView;ArrayBufferView;du|fX|fY|jf|fZ|h_|ba"},
du:{"^":"dv;",
gl:function(a){return a.length},
$isJ:1,
$asJ:I.dZ},
jf:{"^":"fY;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
n:function(a,b,c){H.G(b)
H.nn(c)
H.aO(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.D]},
$asy:function(){return[P.D]},
$isi:1,
$asi:function(){return[P.D]},
$ise:1,
$ase:function(){return[P.D]},
"%":"Float32Array|Float64Array"},
ba:{"^":"h_;",
n:function(a,b,c){H.G(b)
H.G(c)
H.aO(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.n]},
$asy:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]}},
oy:{"^":"ba;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oz:{"^":"ba;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oA:{"^":"ba;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oB:{"^":"ba;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oC:{"^":"ba;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oD:{"^":"ba;",
gl:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dw:{"^":"ba;",
gl:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
c4:function(a,b,c){return new Uint8Array(a.subarray(b,H.n1(b,c,a.length)))},
$isdw:1,
$isT:1,
"%":";Uint8Array"},
fX:{"^":"du+y;"},
fY:{"^":"fX+cz;"},
fZ:{"^":"du+y;"},
h_:{"^":"fZ+cz;"}}],["","",,P,{"^":"",
la:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bC(new P.lc(z),1)).observe(y,{childList:true})
return new P.lb(z,y,x)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
pd:[function(a){self.scheduleImmediate(H.bC(new P.ld(H.l(a,{func:1,ret:-1})),0))},"$1","ne",4,0,12],
pe:[function(a){self.setImmediate(H.bC(new P.le(H.l(a,{func:1,ret:-1})),0))},"$1","nf",4,0,12],
pf:[function(a){P.dG(C.q,H.l(a,{func:1,ret:-1}))},"$1","ng",4,0,12],
dG:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a8(a.a,1000)
return P.mk(z<0?0:z,b)},
fi:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bt]})
z=C.f.a8(a.a,1000)
return P.ml(z<0?0:z,b)},
na:function(a,b){if(H.cp(a,{func:1,args:[P.b,P.aA]}))return b.iL(a,null,P.b,P.aA)
if(H.cp(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n9:function(){var z,y
for(;z=$.bA,z!=null;){$.c3=null
y=z.b
$.bA=y
if(y==null)$.c2=null
z.a.$0()}},
pp:[function(){$.dU=!0
try{P.n9()}finally{$.c3=null
$.dU=!1
if($.bA!=null)$.$get$dO().$1(P.hr())}},"$0","hr",0,0,3],
hm:function(a){var z=new P.fO(H.l(a,{func:1,ret:-1}))
if($.bA==null){$.c2=z
$.bA=z
if(!$.dU)$.$get$dO().$1(P.hr())}else{$.c2.b=z
$.c2=z}},
nd:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bA
if(z==null){P.hm(a)
$.c3=$.c2
return}y=new P.fO(a)
x=$.c3
if(x==null){y.b=z
$.c3=y
$.bA=y}else{y.b=x.b
x.b=y
$.c3=y
if(y.b==null)$.c2=y}},
nS:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cW(null,null,C.j,a)
return}y.toString
P.cW(null,null,y,H.l(y.ct(a),z))},
fh:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dG(a,b)}return P.dG(a,H.l(y.ct(b),z))},
kp:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bt]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fi(a,b)}x=y.e_(b,P.bt)
$.Y.toString
return P.fi(a,H.l(x,z))},
cV:function(a,b,c,d,e){var z={}
z.a=d
P.nd(new P.nb(z,e))},
hi:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
hj:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
nc:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cW:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ct(d):c.hX(d,-1)
P.hm(d)},
lc:{"^":"m:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lb:{"^":"m:50;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ld:{"^":"m:0;a",
$0:function(){this.a.$0()}},
le:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h7:{"^":"b;a,0b,c",
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bC(new P.mn(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fk:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bC(new P.mm(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbt:1,
t:{
mk:function(a,b){var z=new P.h7(!0,0)
z.fj(a,b)
return z},
ml:function(a,b){var z=new P.h7(!1,0)
z.fk(a,b)
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
if(w>(y+1)*x)y=C.f.f7(w,x)}z.c=y
this.d.$1(z)}},
by:{"^":"b;0a,b,c,d,e,$ti",
it:function(a){if(this.c!==6)return!0
return this.b.b.d1(H.l(this.d,{func:1,ret:P.U,args:[P.b]}),a.a,P.U,P.b)},
ih:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cp(z,{func:1,args:[P.b,P.aA]}))return H.e_(w.iS(z,a.a,a.b,null,y,P.aA),x)
else return H.e_(w.d1(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b1:{"^":"b;dQ:a<,b,0hh:c<,$ti",
eN:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.na(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b1(0,$.Y,[c])
w=b==null?1:3
this.dm(new P.by(x,w,a,b,[z,c]))
return x},
iY:function(a,b){return this.eN(a,null,b)},
dm:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isby")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb1")
z=y.a
if(z<4){y.dm(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cW(null,null,z,H.l(new P.lu(this,a),{func:1,ret:-1}))}},
dJ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isby")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb1")
y=u.a
if(y<4){u.dJ(a)
return}this.a=y
this.c=u.c}z.a=this.by(a)
y=this.b
y.toString
P.cW(null,null,y,H.l(new P.lz(z,this),{func:1,ret:-1}))}},
cm:function(){var z=H.d(this.c,"$isby")
this.c=null
return this.by(z)},
by:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dr:function(a){var z,y,x,w
z=H.x(this,0)
H.e_(a,{futureOr:1,type:z})
y=this.$ti
x=H.c5(a,"$isbM",y,"$asbM")
if(x){z=H.c5(a,"$isb1",y,null)
if(z)P.fS(a,this)
else P.lv(a,this)}else{w=this.cm()
H.B(a,z)
this.a=4
this.c=a
P.bZ(this,w)}},
c8:[function(a,b){var z
H.d(b,"$isaA")
z=this.cm()
this.a=8
this.c=new P.aq(a,b)
P.bZ(this,z)},function(a){return this.c8(a,null)},"j5","$2","$1","gfu",4,2,49],
$isbM:1,
t:{
lv:function(a,b){var z,y,x
b.a=1
try{a.eN(new P.lw(b),new P.lx(b),null)}catch(x){z=H.aa(x)
y=H.bE(x)
P.nS(new P.ly(b,z,y))}},
fS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb1")
if(z>=4){y=b.cm()
b.a=a.a
b.c=a.c
P.bZ(b,y)}else{y=H.d(b.c,"$isby")
b.a=2
b.c=a
a.dJ(y)}},
bZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isaq")
y=y.b
u=v.a
t=v.b
y.toString
P.cV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bZ(z.a,b)}y=z.a
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
if(p){H.d(r,"$isaq")
y=y.b
u=r.a
t=r.b
y.toString
P.cV(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lC(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lB(x,b,r).$0()}else if((y&2)!==0)new P.lA(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.L(y).$isbM){if(y.a>=4){n=H.d(t.c,"$isby")
t.c=null
b=t.by(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fS(y,t)
return}}m=b.b
n=H.d(m.c,"$isby")
m.c=null
b=m.by(n)
y=x.a
u=x.b
if(!y){H.B(u,H.x(m,0))
m.a=4
m.c=u}else{H.d(u,"$isaq")
m.a=8
m.c=u}z.a=m
y=m}}}},
lu:{"^":"m:0;a,b",
$0:function(){P.bZ(this.a,this.b)}},
lz:{"^":"m:0;a,b",
$0:function(){P.bZ(this.b,this.a.a)}},
lw:{"^":"m:16;a",
$1:function(a){var z=this.a
z.a=0
z.dr(a)}},
lx:{"^":"m:46;a",
$2:function(a,b){this.a.c8(a,H.d(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
ly:{"^":"m:0;a,b,c",
$0:function(){this.a.c8(this.b,this.c)}},
lC:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eL(H.l(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bE(v)
if(this.d){w=H.d(this.a.a.c,"$isaq").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isaq")
else u.b=new P.aq(y,x)
u.a=!0
return}if(!!J.L(z).$isbM){if(z instanceof P.b1&&z.gdQ()>=4){if(z.gdQ()===8){w=this.b
w.b=H.d(z.ghh(),"$isaq")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iY(new P.lD(t),null)
w.a=!1}}},
lD:{"^":"m:48;a",
$1:function(a){return this.a}},
lB:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.B(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.d1(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bE(t)
x=this.a
x.b=new P.aq(z,y)
x.a=!0}}},
lA:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isaq")
w=this.c
if(w.it(z)&&w.e!=null){v=this.b
v.b=w.ih(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bE(u)
w=H.d(this.a.a.c,"$isaq")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aq(y,x)
s.a=!0}}},
fO:{"^":"b;a,0b"},
dC:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.b1(0,$.Y,[P.n])
z.a=0
this.iq(new P.k7(z,this),!0,new P.k8(z,y),y.gfu())
return y}},
k7:{"^":"m;a,b",
$1:function(a){H.B(a,H.ah(this.b,"dC",0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.ah(this.b,"dC",0)]}}},
k8:{"^":"m:0;a,b",
$0:function(){this.b.dr(this.a.a)}},
fb:{"^":"b;$ti"},
k6:{"^":"b;"},
bt:{"^":"b;"},
aq:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa8:1},
mQ:{"^":"b;",$ispc:1},
nb:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lX:{"^":"mQ;",
iT:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hi(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bE(x)
P.cV(null,null,this,z,H.d(y,"$isaA"))}},
iU:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.hj(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bE(x)
P.cV(null,null,this,z,H.d(y,"$isaA"))}},
hX:function(a,b){return new P.lZ(this,H.l(a,{func:1,ret:b}),b)},
ct:function(a){return new P.lY(this,H.l(a,{func:1,ret:-1}))},
e_:function(a,b){return new P.m_(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eL:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hi(null,null,this,a,b)},
d1:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.Y===C.j)return a.$1(b)
return P.hj(null,null,this,a,b,c,d)},
iS:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.nc(null,null,this,a,b,c,d,e,f)},
iL:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lZ:{"^":"m;a,b,c",
$0:function(){return this.a.eL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lY:{"^":"m:3;a,b",
$0:function(){return this.a.iT(this.b)}},
m_:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iU(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iT:function(a,b,c,d,e){return new H.b9(0,0,[d,e])},
iU:function(a,b,c){H.c9(a)
return H.t(H.np(a,new H.b9(0,0,[b,c])),"$iseL",[b,c],"$aseL")},
dn:function(a,b){return new H.b9(0,0,[a,b])},
cj:function(a,b,c,d){return new P.lK(0,0,[d])},
iG:function(a,b,c){var z,y
if(P.dV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c4()
C.a.h(y,a)
try{P.n8(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.fc(b,H.hy(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dg:function(a,b,c){var z,y,x
if(P.dV(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c4()
C.a.h(y,a)
try{x=z
x.a=P.fc(x.gaQ(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaQ()+c
y=z.gaQ()
return y.charCodeAt(0)==0?y:y},
dV:function(a){var z,y
for(z=0;y=$.$get$c4(),z<y.length;++z)if(a===y[z])return!0
return!1},
n8:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.E();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eM:function(a,b,c){var z=P.iT(null,null,null,b,c)
a.H(0,new P.iV(z,b,c))
return z},
eN:function(a,b){var z,y
z=P.cj(null,null,null,b)
for(y=J.b4(a);y.E();)z.h(0,H.B(y.gM(y),b))
return z},
dq:function(a){var z,y,x
z={}
if(P.dV(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c4(),a)
x=y
x.a=x.gaQ()+"{"
z.a=!0
J.e7(a,new P.iZ(z,y))
z=y
z.a=z.gaQ()+"}"}finally{z=$.$get$c4()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaQ()
return z.charCodeAt(0)==0?z:z},
lK:{"^":"lE;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){var z=new P.fW(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscS")!=null}else{y=this.fv(b)
return y}},
fv:function(a){var z=this.d
if(z==null)return!1
return this.cb(this.dB(z,a),a)>=0},
h:function(a,b){var z,y
H.B(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dQ()
this.b=z}return this.dn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dQ()
this.c=y}return this.dn(y,b)}else return this.fm(0,b)},
fm:function(a,b){var z,y,x
H.B(b,H.x(this,0))
z=this.d
if(z==null){z=P.dQ()
this.d=z}y=this.ds(b)
x=z[y]
if(x==null)z[y]=[this.c7(b)]
else{if(this.cb(x,b)>=0)return!1
x.push(this.c7(b))}return!0},
U:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dK(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dK(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dB(z,b)
x=this.cb(y,b)
if(x<0)return!1
this.dS(y.splice(x,1)[0])
return!0},
dn:function(a,b){H.B(b,H.x(this,0))
if(H.d(a[b],"$iscS")!=null)return!1
a[b]=this.c7(b)
return!0},
dK:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscS")
if(z==null)return!1
this.dS(z)
delete a[b]
return!0},
dq:function(){this.r=this.r+1&67108863},
c7:function(a){var z,y
z=new P.cS(H.B(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dq()
return z},
dS:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dq()},
ds:function(a){return J.ca(a)&0x3ffffff},
dB:function(a,b){return a[this.ds(b)]},
cb:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a4(a[y].a,b))return y
return-1},
t:{
dQ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cS:{"^":"b;a,0b,0c"},
fW:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aG(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.x(this,0))
this.c=z.b
return!0}}}},
lE:{"^":"jQ;"},
iV:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))}},
cD:{"^":"lL;",$isi:1,$ise:1},
y:{"^":"b;$ti",
ga1:function(a){return new H.dp(a,this.gl(a),0,[H.b3(this,a,"y",0)])},
J:function(a,b){return this.j(a,b)},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b3(this,a,"y",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gl(a))throw H.a(P.aG(a))}},
j0:function(a,b){var z,y,x
z=H.c([],[H.b3(this,a,"y",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.n(z,y,this.j(a,y));++y}return z},
j_:function(a){return this.j0(a,!0)},
aH:function(a,b,c,d){var z
H.B(d,H.b3(this,a,"y",0))
P.aV(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.n(a,z,d)},
i:function(a){return P.dg(a,"[","]")}},
eQ:{"^":"ai;"},
iZ:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ai:{"^":"b;$ti",
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b3(this,a,"ai",0),H.b3(this,a,"ai",1)]})
for(z=J.b4(this.ga9(a));z.E();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.ap(this.ga9(a))},
i:function(a){return P.dq(a)},
$isN:1},
ms:{"^":"b;$ti",
n:function(a,b,c){H.B(b,H.x(this,0))
H.B(c,H.x(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
j_:{"^":"b;$ti",
j:function(a,b){return J.e6(this.a,b)},
n:function(a,b,c){J.d1(this.a,H.B(b,H.x(this,0)),H.B(c,H.x(this,1)))},
H:function(a,b){J.e7(this.a,H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gl:function(a){return J.ap(this.a)},
i:function(a){return J.ab(this.a)},
$isN:1},
fE:{"^":"mt;a,$ti"},
jS:{"^":"b;$ti",
ab:function(a,b){var z
for(z=J.b4(H.t(b,"$isi",this.$ti,"$asi"));z.E();)this.h(0,z.gM(z))},
i:function(a){return P.dg(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ea("index"))
if(b<0)H.r(P.a5(b,0,null,"index",null))
for(z=new P.fW(this,this.r,this.$ti),z.c=this.e,y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jQ:{"^":"jS;"},
lL:{"^":"b+y;"},
mt:{"^":"j_+ms;$ti"}}],["","",,P,{"^":"",hV:{"^":"cc;a",
iw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aV(c,d,b.length,null,null,null)
z=$.$get$fQ()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.G(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cZ(C.b.G(b,s))
o=H.cZ(C.b.G(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.v(b,x,y)
w.a+=H.bU(r)
x=s
continue}}throw H.a(P.a2("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.ed(b,u,d,v,t,k)
else{j=C.f.bt(k-1,4)+1
if(j===1)throw H.a(P.a2("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b3(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ed(b,u,d,v,t,i)
else{j=C.f.bt(i,4)
if(j===1)throw H.a(P.a2("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b3(b,d,d,j===2?"==":"=")}return b},
$ascc:function(){return[[P.e,P.n],P.f]},
t:{
ed:function(a,b,c,d,e,f){if(C.f.bt(f,4)!==0)throw H.a(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a2("Invalid base64 padding, more than two '=' characters",a,b))}}},hW:{"^":"b7;a",
$asb7:function(){return[[P.e,P.n],P.f]}},cc:{"^":"b;$ti"},b7:{"^":"k6;$ti"},ip:{"^":"cc;",
$ascc:function(){return[P.f,[P.e,P.n]]}},iC:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iB:{"^":"b7;a",
fw:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.an("")
if(w>b)v.a+=C.b.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hQ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb7:function(){return[P.f,P.f]}},kT:{"^":"ip;a",
gi7:function(){return C.M}},l_:{"^":"b7;",
be:function(a,b,c){var z,y,x,w
z=a.length
P.aV(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mO(0,0,x)
if(w.fD(a,b,z)!==z)w.dT(J.hJ(a,z-1),0)
return C.a3.c4(x,0,w.b)},
cB:function(a){return this.be(a,0,null)},
$asb7:function(){return[P.f,[P.e,P.n]]}},mO:{"^":"b;a,b,c",
dT:function(a,b){var z,y,x,w,v
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
fD:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dT(w,C.b.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kU:{"^":"b7;a",
be:function(a,b,c){var z,y,x,w,v
H.t(a,"$ise",[P.n],"$ase")
z=P.kV(!1,a,b,c)
if(z!=null)return z
y=J.ap(a)
P.aV(b,c,y,null,null,null)
x=new P.an("")
w=new P.mL(!1,x,!0,0,0,0)
w.be(a,b,y)
w.ib(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cB:function(a){return this.be(a,0,null)},
$asb7:function(){return[[P.e,P.n],P.f]},
t:{
kV:function(a,b,c,d){H.t(b,"$ise",[P.n],"$ase")
if(b instanceof Uint8Array)return P.kW(!1,b,c,d)
return},
kW:function(a,b,c,d){var z,y,x
z=$.$get$fI()
if(z==null)return
y=0===c
if(y&&!0)return P.dL(z,b)
x=b.length
d=P.aV(c,d,x,null,null,null)
if(y&&d===x)return P.dL(z,b)
return P.dL(z,b.subarray(c,d))},
dL:function(a,b){if(P.kY(b))return
return P.kZ(a,b)},
kZ:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aa(y)}return},
kY:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kX:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aa(y)}return}}},mL:{"^":"b;a,b,c,d,e,f",
ib:function(a,b,c){var z
H.t(b,"$ise",[P.n],"$ase")
if(this.e>0){z=P.a2("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
be:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.t(a,"$ise",[P.n],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mN(c)
v=new P.mM(this,b,c,a)
$label0$0:for(u=J.aQ(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.c0()
if((r&192)!==128){q=P.a2("Bad UTF-8 encoding 0x"+C.f.bp(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.z,q)
if(z<=C.z[q]){q=P.a2("Overlong encoding of 0x"+C.f.bp(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a2("Character outside valid Unicode range: 0x"+C.f.bp(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bU(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d8()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.a2("Negative UTF-8 code unit: -0x"+C.f.bp(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a2("Bad UTF-8 encoding 0x"+C.f.bp(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mN:{"^":"m:45;a",
$2:function(a,b){var z,y,x,w
H.t(a,"$ise",[P.n],"$ase")
z=this.a
for(y=J.aQ(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.c0()
if((w&127)!==w)return x-b}return z-b}},mM:{"^":"m:44;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ck(this.d,a,b)}}}],["","",,P,{"^":"",
c8:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.f]})
z=H.jx(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a2(a,null,null))},
ir:function(a){var z=J.L(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bm(a)+"'"},
iW:function(a,b,c,d){var z,y
H.B(b,d)
z=J.iI(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.n(z,y,b)
return H.t(z,"$ise",[d],"$ase")},
eO:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga1(a);x.E();)C.a.h(y,H.B(x.gM(x),c))
if(b)return y
return H.t(J.bN(y),"$ise",z,"$ase")},
ck:function(a,b,c){var z,y
z=P.n
H.t(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.t(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aV(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.f2(z?C.a.c4(a,b,c):a)}if(!!J.L(a).$isdw)return H.jz(a,b,P.aV(b,c,a.length,null,null,null))
return P.k9(a,b,c)},
k9:function(a,b,c){var z,y,x,w
H.t(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a5(b,0,J.ap(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a5(c,b,J.ap(a),null,null))
y=J.b4(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a5(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a5(c,b,x,null,null))
w.push(y.gM(y))}return H.f2(w)},
jH:function(a,b,c){return new H.iK(a,H.iL(a,!1,!0,!1))},
cO:function(){var z=H.jp()
if(z!=null)return P.kL(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ir(a)},
u:function(a){return new P.fR(a)},
iX:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.n(z,y,b.$1(y))
return z},
e4:function(a){H.nQ(a)},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.G(a,b+4)^58)*3|C.b.G(a,b)^100|C.b.G(a,b+1)^97|C.b.G(a,b+2)^116|C.b.G(a,b+3)^97)>>>0
if(y===0)return P.fF(b>0||c<c?C.b.v(a,b,c):a,5,null).geQ()
else if(y===32)return P.fF(C.b.v(a,z,c),0,null).geQ()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.n(w,0,0)
x=b-1
C.a.n(w,1,x)
C.a.n(w,2,x)
C.a.n(w,7,x)
C.a.n(w,3,b)
C.a.n(w,4,b)
C.a.n(w,5,c)
C.a.n(w,6,c)
if(P.hk(a,b,c,0,w)>=14)C.a.n(w,7,c)
v=w[1]
if(typeof v!=="number")return v.j2()
if(v>=b)if(P.hk(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.o(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ah(a,"..",s)))n=r>s+2&&C.b.ah(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ah(a,"file",b)){if(u<=b){if(!C.b.ah(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b3(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ah(a,"http",b)){if(x&&t+3===s&&C.b.ah(a,"80",t+1))if(b===0&&!0){a=C.b.b3(a,t,s,"")
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
else if(v===z&&C.b.ah(a,"https",b)){if(x&&t+4===s&&C.b.ah(a,"443",t+1))if(b===0&&!0){a=C.b.b3(a,t,s,"")
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
q-=b}return new P.m5(a,v,u,t,s,r,q,o)}return P.mu(a,b,c,v,u,t,s,r,q,o)},
fH:function(a,b){var z=P.f
return C.a.ic(H.c(a.split("&"),[z]),P.dn(z,z),new P.kO(b),[P.N,P.f,P.f])},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kK(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a0(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c8(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.d8()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c8(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.d8()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kM(a)
y=new P.kN(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a0(a,w)
if(s===58){if(w===b){++w
if(C.b.a0(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kJ(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.f.aV(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
n2:function(){var z,y,x,w,v
z=P.iX(22,new P.n4(),!0,P.T)
y=new P.n3(z)
x=new P.n5()
w=new P.n6()
v=H.d(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isT"),"]",5)
v=H.d(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isT"),"az",21)
v=H.d(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hk:function(a,b,c,d,e){var z,y,x,w,v
H.t(e,"$ise",[P.n],"$ase")
z=$.$get$hl()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.n(e,v>>>5,y)}return d},
U:{"^":"b;"},
"+bool":0,
as:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.f.aV(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ie(H.jw(this))
y=P.cd(H.ju(this))
x=P.cd(H.jq(this))
w=P.cd(H.jr(this))
v=P.cd(H.jt(this))
u=P.cd(H.jv(this))
t=P.ig(H.js(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
ie:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ig:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cd:function(a){if(a>=10)return""+a
return"0"+a}}},
D:{"^":"a6;"},
"+double":0,
bJ:{"^":"b;a",
P:function(a,b){return C.f.P(this.a,H.d(b,"$isbJ").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bJ))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ik()
y=this.a
if(y<0)return"-"+new P.bJ(0-y).i(0)
x=z.$1(C.f.a8(y,6e7)%60)
w=z.$1(C.f.a8(y,1e6)%60)
v=new P.ij().$1(y%1e6)
return""+C.f.a8(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
ew:function(a,b,c,d,e,f){return new P.bJ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ij:{"^":"m:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ik:{"^":"m:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eY:{"^":"a8;",
i:function(a){return"Throw of null."}},
aE:{"^":"a8;a,b,c,d",
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gca()+y+x
if(!this.a)return w
v=this.gc9()
u=P.cy(this.b)
return w+v+": "+H.j(u)},
t:{
cb:function(a){return new P.aE(!1,null,null,a)},
cs:function(a,b,c){return new P.aE(!0,a,b,c)},
ea:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
cG:{"^":"aE;e,f,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cH:function(a,b,c){return new P.cG(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a5(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a5(b,a,c,"end",f))
return b}return c}}},
iE:{"^":"aE;e,l:f>,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){if(J.hF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.G(e!=null?e:J.ap(b))
return new P.iE(b,z,!0,a,c,"Index out of range")}}},
kH:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kH(a)}}},
kE:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cm:function(a){return new P.kE(a)}}},
dB:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
t:{
fa:function(a){return new P.dB(a)}}},
i5:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cy(z))+"."},
t:{
aG:function(a){return new P.i5(a)}}},
jk:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
f8:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
ic:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fR:{"^":"b;a",
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
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a0(w,s)
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
return y+n+l+m+"\n"+C.b.p(" ",x-o+n.length)+"^\n"},
t:{
a2:function(a,b,c){return new P.ix(a,b,c)}}},
ce:{"^":"b;"},
n:{"^":"a6;"},
"+int":0,
i:{"^":"b;$ti",
d3:["f2",function(a,b){var z=H.ah(this,"i",0)
return new H.dN(this,H.l(b,{func:1,ret:P.U,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.ga1(this)
for(y=0;z.E();)++y
return y},
gaM:function(a){var z,y
z=this.ga1(this)
if(!z.E())throw H.a(H.dh())
y=z.gM(z)
if(z.E())throw H.a(H.iH())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ea("index"))
if(b<0)H.r(P.a5(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.E();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iG(this,"(",")")}},
di:{"^":"b;$ti"},
e:{"^":"b;$ti",$isi:1},
"+List":0,
N:{"^":"b;$ti"},
K:{"^":"b;",
gX:function(a){return P.b.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a6:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gX:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"b;"},
f:{"^":"b;",$iseZ:1},
"+String":0,
an:{"^":"b;aQ:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoX:1,
t:{
fc:function(a,b,c){var z=J.b4(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.E())}else{a+=H.j(z.gM(z))
for(;z.E();)a=a+c+H.j(z.gM(z))}return a}}},
kO:{"^":"m:43;a",
$2:function(a,b){var z,y,x,w
z=P.f
H.t(a,"$isN",[z,z],"$asN")
H.I(b)
y=J.aQ(b).eA(b,"=")
if(y===-1){if(b!=="")J.d1(a,P.dS(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.at(b,y+1)
z=this.a
J.d1(a,P.dS(x,0,x.length,z,!0),P.dS(w,0,w.length,z,!0))}return a}},
kK:{"^":"m:42;a",
$2:function(a,b){throw H.a(P.a2("Illegal IPv4 address, "+a,this.a,b))}},
kM:{"^":"m:40;a",
$2:function(a,b){throw H.a(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kN:{"^":"m:38;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c8(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cT:{"^":"b;c2:a<,b,c,d,eJ:e>,f,r,0x,0y,0z,0Q,0ch",
geR:function(){return this.b},
gcN:function(a){var z=this.c
if(z==null)return""
if(C.b.a6(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbV:function(a){var z=this.d
if(z==null)return P.h9(this.a)
return z},
gcZ:function(a){var z=this.f
return z==null?"":z},
gev:function(){var z=this.r
return z==null?"":z},
d0:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.t(h,"$isN",[P.f,null],"$asN")
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
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dR(g,0,0,h)
return new P.cT(i,j,c,f,d,g,this.r)},
d_:function(a,b){return this.d0(a,null,null,null,null,null,null,b,null,null)},
gbk:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.f
y=new P.fE(P.fH(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gew:function(){return this.c!=null},
gez:function(){return this.f!=null},
gex:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdK){y=this.a
x=b.gc2()
if(y==null?x==null:y===x)if(this.c!=null===b.gew()){y=this.b
x=b.geR()
if(y==null?x==null:y===x){y=this.gcN(this)
x=z.gcN(b)
if(y==null?x==null:y===x){y=this.gbV(this)
x=z.gbV(b)
if(y==null?x==null:y===x)if(this.e===z.geJ(b)){y=this.f
x=y==null
if(!x===b.gez()){if(x)y=""
if(y===z.gcZ(b)){z=this.r
y=z==null
if(!y===b.gex()){if(y)z=""
z=z===b.gev()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gX:function(a){var z=this.z
if(z==null){z=C.b.gX(this.i(0))
this.z=z}return z},
$isdK:1,
t:{
co:function(a,b,c,d){var z,y,x,w,v,u
H.t(a,"$ise",[P.n],"$ase")
if(c===C.k){z=$.$get$he().b
if(typeof b!=="string")H.r(H.al(b))
z=z.test(b)}else z=!1
if(z)return b
H.B(b,H.ah(c,"cc",0))
y=c.gi7().cB(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bU(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mF(a,b,d)
else{if(d===b)P.c_(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mG(a,z,e-1):""
x=P.mz(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mC(P.c8(C.b.v(a,w,g),new P.mv(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mA(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dR(a,h+1,i,null):null
return new P.cT(j,y,x,v,u,t,i<c?P.my(a,i+1,c):null)},
h9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c_:function(a,b,c){throw H.a(P.a2(c,a,b))},
mC:function(a,b){if(a!=null&&a===P.h9(b))return
return a},
mz:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.K()
z=c-1
if(C.b.a0(a,z)!==93)P.c_(a,b,"Missing end `]` to match `[` in host")
P.fG(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a0(a,y)===58){P.fG(a,b,c)
return"["+a+"]"}return P.mI(a,b,c)},
mI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a0(a,z)
if(v===37){u=P.hg(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c_(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a0(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ha(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mF:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hc(C.b.G(a,b)))P.c_(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c_(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.mw(y?a.toLowerCase():a)},
mw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mG:function(a,b,c){return P.c0(a,b,c,C.a0)},
mA:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c0(a,b,c,C.D):C.w.jH(d,new P.mB(),P.f).m(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a6(w,"/"))w="/"+w
return P.mH(w,e,f)},
mH:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a6(a,"/"))return P.mJ(a,!z||c)
return P.mK(a)},
dR:function(a,b,c,d){var z,y
z={}
H.t(d,"$isN",[P.f,null],"$asN")
if(a!=null){if(d!=null)throw H.a(P.cb("Both query and queryParameters specified"))
return P.c0(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.H(0,new P.mD(new P.mE(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
my:function(a,b,c){return P.c0(a,b,c,C.n)},
hg:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a0(a,b+1)
x=C.b.a0(a,z)
w=H.cZ(y)
v=H.cZ(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aV(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bU(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
ha:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.n(y,0,37)
C.a.n(y,1,C.b.G("0123456789ABCDEF",a>>>4))
C.a.n(y,2,C.b.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.f.ho(a,6*w)&63|x
C.a.n(y,v,37)
C.a.n(y,v+1,C.b.G("0123456789ABCDEF",u>>>4))
C.a.n(y,v+2,C.b.G("0123456789ABCDEF",u&15))
v+=3}}return P.ck(y,0,null)},
c0:function(a,b,c,d){var z=P.hf(a,b,c,H.t(d,"$ise",[P.n],"$ase"),!1)
return z==null?C.b.v(a,b,c):z},
hf:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.t(d,"$ise",[P.n],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a0(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hg(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c_(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a0(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ha(v)}}if(w==null)w=new P.an("")
w.a+=C.b.v(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hd:function(a){if(C.b.a6(a,"."))return!0
return C.b.eA(a,"/.")!==-1},
mK:function(a){var z,y,x,w,v,u,t
if(!P.hd(a))return a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.a4(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.m(z,"/")},
mJ:function(a,b){var z,y,x,w,v,u
if(!P.hd(a))return!b?P.hb(a):a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.n(z,0,P.hb(z[0]))}return C.a.m(z,"/")},
hb:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hc(J.hG(a,0)))for(y=1;y<z;++y){x=C.b.G(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.at(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mx:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cb("Invalid URL encoding"))}}return z},
dS:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c7(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.G(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.v(y.v(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.G(a,x)
if(w>127)throw H.a(P.cb("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cb("Truncated URI"))
C.a.h(u,P.mx(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.t(u,"$ise",[P.n],"$ase")
return new P.kU(!1).cB(u)},
hc:function(a){var z=a|32
return 97<=z&&z<=122}}},
mv:{"^":"m:22;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.a(P.a2("Invalid port",this.a,z+1))}},
mB:{"^":"m:28;",
$1:function(a){return P.co(C.a1,a,C.k,!1)}},
mE:{"^":"m:24;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.co(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.co(C.p,b,C.k,!0))}}},
mD:{"^":"m:36;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.b4(H.hy(b,"$isi")),y=this.a;z.E();)y.$2(a,H.I(z.gM(z)))}},
kI:{"^":"b;a,b,c",
geQ:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.eB(y,"?",z)
w=y.length
if(x>=0){v=P.c0(y,x+1,w,C.n)
w=x}else v=null
z=new P.lj(this,"data",null,null,null,P.c0(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fF:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a2("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a2("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.ah(a,"base64",t+1))throw H.a(P.a2("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.J.iw(0,a,s,y)
else{r=P.hf(a,s,y,C.n,!0)
if(r!=null)a=C.b.b3(a,s,y,r)}return new P.kI(a,z,c)}}},
n4:{"^":"m:34;",
$1:function(a){return new Uint8Array(96)}},
n3:{"^":"m:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hK(z,0,96,b)
return z}},
n5:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.G(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
n6:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.G(b,0),y=C.b.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
m5:{"^":"b;a,b,c,d,e,f,r,x,0y",
gew:function(){return this.c>0},
gey:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gez:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
gex:function(){return this.r<this.a.length},
gdD:function(){return this.b===4&&C.b.a6(this.a,"http")},
gdE:function(){return this.b===5&&C.b.a6(this.a,"https")},
gc2:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdD()){this.x="http"
z="http"}else if(this.gdE()){this.x="https"
z="https"}else if(z===4&&C.b.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geR:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcN:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbV:function(a){var z
if(this.gey()){z=this.d
if(typeof z!=="number")return z.F()
return P.c8(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdD())return 80
if(this.gdE())return 443
return 0},
geJ:function(a){return C.b.v(this.a,this.e,this.f)},
gcZ:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.v(this.a,z+1,y):""},
gev:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.at(y,z+1):""},
gbk:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.a2
z=P.f
return new P.fE(P.fH(this.gcZ(this),C.k),[z,z])},
d0:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.t(h,"$isN",[P.f,null],"$asN")
i=this.gc2()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gey()?this.gbV(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a6(d,"/"))d="/"+d
g=P.dR(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.at(y,x+1)
return new P.cT(i,j,c,f,d,g,b)},
d_:function(a,b){return this.d0(a,null,null,null,null,null,null,b,null,null)},
gX:function(a){var z=this.y
if(z==null){z=C.b.gX(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdK)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdK:1},
lj:{"^":"cT;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e9:function(a){var z=document.createElement("a")
return z},
d9:function(a,b){var z=document.createElement("canvas")
return z},
il:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).ao(z,a,b,c)
y.toString
z=W.H
z=new H.dN(new W.aw(y),H.l(new W.im(),{func:1,ret:P.U,args:[z]}),[z])
return H.d(z.gaM(z),"$isR")},
io:function(a){H.d(a,"$isae")
return"wheel"},
bK:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hN(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
df:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
iF:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseE")
try{J.hP(z,a)}catch(x){H.aa(x)}return z},
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fV:function(a,b,c,d){var z,y
z=W.cQ(W.cQ(W.cQ(W.cQ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ho:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.e_(a,b)},
a_:{"^":"R;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nZ:{"^":"q;0l:length=","%":"AccessibleNodeList"},
o_:{"^":"a_;0a5:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o0:{"^":"a_;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ee:{"^":"a_;",$isee:1,"%":"HTMLBaseElement"},
d4:{"^":"q;",$isd4:1,"%":";Blob"},
ct:{"^":"a_;",$isct:1,"%":"HTMLBodyElement"},
o6:{"^":"a_;0a5:type}","%":"HTMLButtonElement"},
d8:{"^":"a_;",
c1:function(a,b,c){if(c!=null)return a.getContext(b,P.ni(c,null))
return a.getContext(b)},
eU:function(a,b){return this.c1(a,b,null)},
$isd8:1,
"%":"HTMLCanvasElement"},
ej:{"^":"q;",$isej:1,"%":"CanvasRenderingContext2D"},
o8:{"^":"H;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oa:{"^":"ib;0l:length=","%":"CSSPerspective"},
bd:{"^":"q;",$isbd:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ob:{"^":"li;0l:length=",
eV:function(a,b){var z=a.getPropertyValue(this.fq(a,b))
return z==null?"":z},
fq:function(a,b){var z,y
z=$.$get$eo()
y=z[b]
if(typeof y==="string")return y
y=this.hp(a,b)
z[b]=y
return y},
hp:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ih()+b
if(z in a)return z
return b},
gcu:function(a){return a.bottom},
gaw:function(a){return a.height},
gb0:function(a){return a.left},
gbl:function(a){return a.right},
gbq:function(a){return a.top},
gay:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ia:{"^":"b;",
gb0:function(a){return this.eV(a,"left")}},
ep:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ib:{"^":"q;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oc:{"^":"ep;0l:length=","%":"CSSTransformValue"},
od:{"^":"ep;0l:length=","%":"CSSUnparsedValue"},
oe:{"^":"q;0l:length=","%":"DataTransferItemList"},
be:{"^":"a_;",$isbe:1,"%":"HTMLDivElement"},
of:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
og:{"^":"ll;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.t(c,"$isad",[P.a6],"$asad")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ad,P.a6]]},
$asy:function(){return[[P.ad,P.a6]]},
$isi:1,
$asi:function(){return[[P.ad,P.a6]]},
$ise:1,
$ase:function(){return[[P.ad,P.a6]]},
$asF:function(){return[[P.ad,P.a6]]},
"%":"ClientRectList|DOMRectList"},
ii:{"^":"q;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gay(a))+" x "+H.j(this.gaw(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.c5(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=J.aD(b)
return a.left===z.gb0(b)&&a.top===z.gbq(b)&&this.gay(a)===z.gay(b)&&this.gaw(a)===z.gaw(b)},
gX:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gay(a)&0x1FFFFFFF,this.gaw(a)&0x1FFFFFFF)},
gcu:function(a){return a.bottom},
gaw:function(a){return a.height},
gb0:function(a){return a.left},
gbl:function(a){return a.right},
gbq:function(a){return a.top},
gay:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a6]},
"%":";DOMRectReadOnly"},
oh:{"^":"ln;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.f]},
$asy:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asF:function(){return[P.f]},
"%":"DOMStringList"},
oi:{"^":"q;0l:length=","%":"DOMTokenList"},
lh:{"^":"cD;dz:a<,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.d(z[b],"$isR")},
n:function(a,b,c){var z
H.G(b)
H.d(c,"$isR")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.j_(this)
return new J.ay(z,z.length,0,[H.x(z,0)])},
aH:function(a,b,c,d){throw H.a(P.cm(null))},
$asy:function(){return[W.R]},
$asi:function(){return[W.R]},
$ase:function(){return[W.R]}},
R:{"^":"H;0iV:tagName=",
ghW:function(a){return new W.lo(a)},
gcA:function(a){return new W.lh(a,a.children)},
ge2:function(a){return P.jD(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a6)},
i:function(a){return a.localName},
ao:["c5",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ez
if(z==null){z=H.c([],[W.aK])
y=new W.eW(z)
C.a.h(z,W.fT(null))
C.a.h(z,W.h4())
$.ez=y
d=y}else d=z
z=$.ey
if(z==null){z=new W.hh(d)
$.ey=z
c=z}else{z.a=d
c=z}}if($.aR==null){z=document
y=z.implementation.createHTMLDocument("")
$.aR=y
$.dc=y.createRange()
y=$.aR
y.toString
y=y.createElement("base")
H.d(y,"$isee")
y.href=z.baseURI
$.aR.head.appendChild(y)}z=$.aR
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$isct")}z=$.aR
if(!!this.$isct)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aR.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a_,a.tagName)){$.dc.selectNodeContents(x)
w=$.dc.createContextualFragment(b)}else{x.innerHTML=b
w=$.aR.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aR.body
if(x==null?z!=null:x!==z)J.e8(x)
c.d9(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ao(a,b,c,null)},"i2",null,null,"gjF",5,5,null],
eZ:function(a,b,c,d){a.textContent=null
a.appendChild(this.ao(a,b,c,d))},
eY:function(a,b){return this.eZ(a,b,null,null)},
$isR:1,
"%":";Element"},
im:{"^":"m:26;",
$1:function(a){return!!J.L(H.d(a,"$isH")).$isR}},
oj:{"^":"a_;0a5:type}","%":"HTMLEmbedElement"},
ac:{"^":"q;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ae:{"^":"q;",
dW:["f0",function(a,b,c,d){H.l(c,{func:1,args:[W.ac]})
if(c!=null)this.fn(a,b,c,!1)}],
fn:function(a,b,c,d){return a.addEventListener(b,H.bC(H.l(c,{func:1,args:[W.ac]}),1),!1)},
$isae:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h0|h1|h5|h6"},
b8:{"^":"d4;",$isb8:1,"%":"File"},
eB:{"^":"lt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isb8")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b8]},
$asy:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$ise:1,
$ase:function(){return[W.b8]},
$iseB:1,
$asF:function(){return[W.b8]},
"%":"FileList"},
ok:{"^":"ae;0l:length=","%":"FileWriter"},
ol:{"^":"a_;0l:length=","%":"HTMLFormElement"},
bg:{"^":"q;",$isbg:1,"%":"Gamepad"},
om:{"^":"q;0l:length=","%":"History"},
on:{"^":"lG;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.H]},
$asy:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$ise:1,
$ase:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cf:{"^":"q;0e3:data=",$iscf:1,"%":"ImageData"},
de:{"^":"a_;",$isde:1,"%":"HTMLImageElement"},
eE:{"^":"a_;0a5:type}",$iseE:1,"%":"HTMLInputElement"},
bO:{"^":"dH;",$isbO:1,"%":"KeyboardEvent"},
or:{"^":"a_;0a5:type}","%":"HTMLLinkElement"},
os:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
ot:{"^":"q;0l:length=","%":"MediaList"},
ou:{"^":"ae;",
dW:function(a,b,c,d){H.l(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.f0(a,b,c,!1)},
"%":"MessagePort"},
ov:{"^":"lM;",
j:function(a,b){return P.b2(a.get(H.I(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
ga9:function(a){var z=H.c([],[P.f])
this.H(a,new W.jb(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"MIDIInputMap"},
jb:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ow:{"^":"lN;",
j:function(a,b){return P.b2(a.get(H.I(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
ga9:function(a){var z=H.c([],[P.f])
this.H(a,new W.jc(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
jc:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"q;",$isbk:1,"%":"MimeType"},
ox:{"^":"lP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbk")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asF:function(){return[W.bk]},
"%":"MimeTypeArray"},
af:{"^":"dH;",$isaf:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aw:{"^":"cD;a",
gaM:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.fa("No elements"))
if(y>1)throw H.a(P.fa("More than one element"))
return z.firstChild},
ab:function(a,b){var z,y,x,w
H.t(b,"$isi",[W.H],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
n:function(a,b,c){var z,y
H.G(b)
H.d(c,"$isH")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.eC(z,z.length,-1,[H.b3(C.a4,z,"F",0)])},
aH:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asy:function(){return[W.H]},
$asi:function(){return[W.H]},
$ase:function(){return[W.H]}},
H:{"^":"ae;0cX:previousSibling=",
iM:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iO:function(a,b){var z,y
try{z=a.parentNode
J.hH(z,b,a)}catch(y){H.aa(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.f1(a):z},
hd:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oE:{"^":"q;",
iJ:[function(a){return a.previousNode()},"$0","gcX",1,0,27],
"%":"NodeIterator"},
jg:{"^":"lR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.H]},
$asy:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$ise:1,
$ase:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
oH:{"^":"a_;0a5:type}","%":"HTMLOListElement"},
oI:{"^":"a_;0a5:type}","%":"HTMLObjectElement"},
bl:{"^":"q;0l:length=",$isbl:1,"%":"Plugin"},
oL:{"^":"lV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbl")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bl]},
$asy:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asF:function(){return[W.bl]},
"%":"PluginArray"},
oN:{"^":"q;0a5:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oO:{"^":"m0;",
j:function(a,b){return P.b2(a.get(H.I(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
ga9:function(a){var z=H.c([],[P.f])
this.H(a,new W.jN(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"RTCStatsReport"},
jN:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oP:{"^":"a_;0a5:type}","%":"HTMLScriptElement"},
oQ:{"^":"a_;0l:length=","%":"HTMLSelectElement"},
bn:{"^":"ae;",$isbn:1,"%":"SourceBuffer"},
oR:{"^":"h1;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asF:function(){return[W.bn]},
"%":"SourceBufferList"},
oS:{"^":"a_;0a5:type}","%":"HTMLSourceElement"},
bo:{"^":"q;",$isbo:1,"%":"SpeechGrammar"},
oT:{"^":"m7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbo")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asy:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asF:function(){return[W.bo]},
"%":"SpeechGrammarList"},
bp:{"^":"q;0l:length=",$isbp:1,"%":"SpeechRecognitionResult"},
oV:{"^":"ma;",
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,H.I(c))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga9:function(a){var z=H.c([],[P.f])
this.H(a,new W.k5(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.f,P.f]},
$isN:1,
$asN:function(){return[P.f,P.f]},
"%":"Storage"},
k5:{"^":"m:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oY:{"^":"a_;0a5:type}","%":"HTMLStyleElement"},
bq:{"^":"q;",$isbq:1,"%":"CSSStyleSheet|StyleSheet"},
dD:{"^":"a_;",$isdD:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ka:{"^":"a_;",
ao:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
z=W.il("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aw(y).ab(0,new W.aw(z))
return y},
"%":"HTMLTableElement"},
p_:{"^":"a_;",
ao:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.aw(z)
x=z.gaM(z)
x.toString
z=new W.aw(x)
w=z.gaM(z)
y.toString
w.toString
new W.aw(y).ab(0,new W.aw(w))
return y},
"%":"HTMLTableRowElement"},
p0:{"^":"a_;",
ao:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.aw(z)
x=z.gaM(z)
y.toString
x.toString
new W.aw(y).ab(0,new W.aw(x))
return y},
"%":"HTMLTableSectionElement"},
fe:{"^":"a_;",$isfe:1,"%":"HTMLTemplateElement"},
br:{"^":"ae;",$isbr:1,"%":"TextTrack"},
bs:{"^":"ae;",$isbs:1,"%":"TextTrackCue|VTTCue"},
p2:{"^":"mj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbs")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bs]},
$asy:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asF:function(){return[W.bs]},
"%":"TextTrackCueList"},
p3:{"^":"h6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asy:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asF:function(){return[W.br]},
"%":"TextTrackList"},
p4:{"^":"q;0l:length=","%":"TimeRanges"},
bu:{"^":"q;",$isbu:1,"%":"Touch"},
bv:{"^":"dH;",$isbv:1,"%":"TouchEvent"},
p5:{"^":"mp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbu")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bu]},
$asy:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asF:function(){return[W.bu]},
"%":"TouchList"},
p6:{"^":"q;0l:length=","%":"TrackDefaultList"},
p8:{"^":"q;",
iJ:[function(a){return a.previousNode()},"$0","gcX",1,0,27],
"%":"TreeWalker"},
dH:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pa:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
pb:{"^":"ae;0l:length=","%":"VideoTrackList"},
bY:{"^":"af;",
gi5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gi4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isbY:1,
"%":"WheelEvent"},
l9:{"^":"ae;",
he:function(a,b){return a.requestAnimationFrame(H.bC(H.l(b,{func:1,ret:-1,args:[P.a6]}),1))},
fC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fP:{"^":"H;",$isfP:1,"%":"Attr"},
pg:{"^":"mS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbd")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bd]},
$asy:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$ise:1,
$ase:function(){return[W.bd]},
$asF:function(){return[W.bd]},
"%":"CSSRuleList"},
ph:{"^":"ii;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.c5(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=J.aD(b)
return a.left===z.gb0(b)&&a.top===z.gbq(b)&&a.width===z.gay(b)&&a.height===z.gaw(b)},
gX:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaw:function(a){return a.height},
gay:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pj:{"^":"mU;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbg")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asF:function(){return[W.bg]},
"%":"GamepadList"},
pm:{"^":"mW;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.H]},
$asy:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$ise:1,
$ase:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pn:{"^":"mY;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asy:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$asF:function(){return[W.bp]},
"%":"SpeechRecognitionResultList"},
po:{"^":"n_;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.G(b)
H.d(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asy:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asF:function(){return[W.bq]},
"%":"StyleSheetList"},
lf:{"^":"eQ;dz:a<",
H:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.ga9(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga9:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.d(z[w],"$isfP")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asai:function(){return[P.f,P.f]},
$asN:function(){return[P.f,P.f]}},
lo:{"^":"lf;a",
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gl:function(a){return this.ga9(this).length}},
lp:{"^":"dC;a,b,c,$ti",
iq:function(a,b,c,d){var z=H.x(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
pi:{"^":"lp;a,b,c,$ti"},
lq:{"^":"fb;a,b,c,d,e,$ti",
ht:function(){var z=this.d
if(z!=null&&this.a<=0)J.hI(this.b,this.c,z,!1)},
t:{
a3:function(a,b,c,d,e){var z=c==null?null:W.ho(new W.lr(c),W.ac)
z=new W.lq(0,a,b,z,!1,[e])
z.ht()
return z}}},
lr:{"^":"m:11;a",
$1:function(a){return this.a.$1(H.d(a,"$isac"))}},
cn:{"^":"b;a",
ff:function(a){var z,y
z=$.$get$dP()
if(z.gil(z)){for(y=0;y<262;++y)z.n(0,C.Z[y],W.ns())
for(y=0;y<12;++y)z.n(0,C.t[y],W.nt())}},
aW:function(a){return $.$get$fU().W(0,W.bK(a))},
aE:function(a,b,c){var z,y,x
z=W.bK(a)
y=$.$get$dP()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dW(x.$4(a,b,c,this))},
$isaK:1,
t:{
fT:function(a){var z,y
z=W.e9(null)
y=window.location
z=new W.cn(new W.m1(z,y))
z.ff(a)
return z},
pk:[function(a,b,c,d){H.d(a,"$isR")
H.I(b)
H.I(c)
H.d(d,"$iscn")
return!0},"$4","ns",16,0,30],
pl:[function(a,b,c,d){var z,y,x,w,v
H.d(a,"$isR")
H.I(b)
H.I(c)
z=H.d(d,"$iscn").a
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
return z},"$4","nt",16,0,30]}},
F:{"^":"b;$ti",
ga1:function(a){return new W.eC(a,this.gl(a),-1,[H.b3(this,a,"F",0)])},
aH:function(a,b,c,d){H.B(d,H.b3(this,a,"F",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eW:{"^":"b;a",
aW:function(a){return C.a.dZ(this.a,new W.ji(a))},
aE:function(a,b,c){return C.a.dZ(this.a,new W.jh(a,b,c))},
$isaK:1},
ji:{"^":"m:31;a",
$1:function(a){return H.d(a,"$isaK").aW(this.a)}},
jh:{"^":"m:31;a,b,c",
$1:function(a){return H.d(a,"$isaK").aE(this.a,this.b,this.c)}},
m2:{"^":"b;",
fi:function(a,b,c,d){var z,y,x
this.a.ab(0,c)
z=b.d3(0,new W.m3())
y=b.d3(0,new W.m4())
this.b.ab(0,z)
x=this.c
x.ab(0,C.A)
x.ab(0,y)},
aW:function(a){return this.a.W(0,W.bK(a))},
aE:["f6",function(a,b,c){var z,y
z=W.bK(a)
y=this.c
if(y.W(0,H.j(z)+"::"+b))return this.d.hU(c)
else if(y.W(0,"*::"+b))return this.d.hU(c)
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
mg:{"^":"m2;e,a,b,c,d",
aE:function(a,b,c){if(this.f6(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1},
t:{
h4:function(){var z,y,x,w,v
z=P.f
y=P.eN(C.r,z)
x=H.x(C.r,0)
w=H.l(new W.mh(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mg(y,P.cj(null,null,null,z),P.cj(null,null,null,z),P.cj(null,null,null,z),null)
y.fi(null,new H.j2(C.r,w,[x,z]),v,null)
return y}}},
mh:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))}},
mf:{"^":"b;",
aW:function(a){var z=J.L(a)
if(!!z.$isf5)return!1
z=!!z.$iscI
if(z&&W.bK(a)==="foreignObject")return!1
if(z)return!0
return!1},
aE:function(a,b,c){if(b==="is"||C.b.a6(b,"on"))return!1
return this.aW(a)},
$isaK:1},
eC:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
aK:{"^":"b;"},
m1:{"^":"b;a,b",$isp9:1},
hh:{"^":"b;a",
d9:function(a){new W.mP(this).$2(a,null)},
ba:function(a,b){if(b==null)J.e8(a)
else b.removeChild(a)},
hj:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hL(a)
x=y.gdz().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.ab(a)}catch(t){H.aa(t)}try{u=W.bK(a)
this.hi(H.d(a,"$isR"),b,z,v,u,H.d(y,"$isN"),H.I(x))}catch(t){if(H.aa(t) instanceof P.aE)throw t
else{this.ba(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hi:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ba(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aW(a)){this.ba(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aE(a,"is",g)){this.ba(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga9(f)
y=H.c(z.slice(0),[H.x(z,0)])
for(x=f.ga9(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.aE(a,J.hR(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfe)this.d9(a.content)},
$isoF:1},
mP:{"^":"m:32;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hj(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ba(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hM(z)}catch(w){H.aa(w)
v=H.d(z,"$isH")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isH")}}},
li:{"^":"q+ia;"},
lk:{"^":"q+y;"},
ll:{"^":"lk+F;"},
lm:{"^":"q+y;"},
ln:{"^":"lm+F;"},
ls:{"^":"q+y;"},
lt:{"^":"ls+F;"},
lF:{"^":"q+y;"},
lG:{"^":"lF+F;"},
lM:{"^":"q+ai;"},
lN:{"^":"q+ai;"},
lO:{"^":"q+y;"},
lP:{"^":"lO+F;"},
lQ:{"^":"q+y;"},
lR:{"^":"lQ+F;"},
lU:{"^":"q+y;"},
lV:{"^":"lU+F;"},
m0:{"^":"q+ai;"},
h0:{"^":"ae+y;"},
h1:{"^":"h0+F;"},
m6:{"^":"q+y;"},
m7:{"^":"m6+F;"},
ma:{"^":"q+ai;"},
mi:{"^":"q+y;"},
mj:{"^":"mi+F;"},
h5:{"^":"ae+y;"},
h6:{"^":"h5+F;"},
mo:{"^":"q+y;"},
mp:{"^":"mo+F;"},
mR:{"^":"q+y;"},
mS:{"^":"mR+F;"},
mT:{"^":"q+y;"},
mU:{"^":"mT+F;"},
mV:{"^":"q+y;"},
mW:{"^":"mV+F;"},
mX:{"^":"q+y;"},
mY:{"^":"mX+F;"},
mZ:{"^":"q+y;"},
n_:{"^":"mZ+F;"}}],["","",,P,{"^":"",
nl:function(a){var z,y
z=J.L(a)
if(!!z.$iscf){y=z.ge3(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h8(a.data,a.height,a.width)},
nk:function(a){if(a instanceof P.h8)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var z,y,x,w,v
if(a==null)return
z=P.dn(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.I(y[w])
z.n(0,v,a[v])}return z},
ni:function(a,b){var z={}
a.H(0,new P.nj(z))
return z},
ev:function(){var z=$.eu
if(z==null){z=J.d2(window.navigator.userAgent,"Opera",0)
$.eu=z}return z},
ih:function(){var z,y
z=$.er
if(z!=null)return z
y=$.es
if(y==null){y=J.d2(window.navigator.userAgent,"Firefox",0)
$.es=y}if(y)z="-moz-"
else{y=$.et
if(y==null){y=!P.ev()&&J.d2(window.navigator.userAgent,"Trident/",0)
$.et=y}if(y)z="-ms-"
else z=P.ev()?"-o-":"-webkit-"}$.er=z
return z},
md:{"^":"b;",
es:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
c_:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isas)return new Date(a.a)
if(!!y.$isjG)throw H.a(P.cm("structured clone of RegExp"))
if(!!y.$isb8)return a
if(!!y.$isd4)return a
if(!!y.$iseB)return a
if(!!y.$iscf)return a
if(!!y.$iseV||!!y.$isdv)return a
if(!!y.$isN){x=this.es(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.n(w,x,v)
y.H(a,new P.me(z,this))
return z.a}if(!!y.$ise){x=this.es(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.i1(a,x)}throw H.a(P.cm("structured clone of other type"))},
i1:function(a,b){var z,y,x,w
z=J.aQ(a)
y=z.gl(a)
x=new Array(y)
C.a.n(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.n(x,w,this.c_(z.j(a,w)))
return x}},
me:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.c_(b)}},
h8:{"^":"b;e3:a>,b,c",$iscf:1},
nj:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
h3:{"^":"md;a,b"},
iu:{"^":"cD;a,b",
gb6:function(){var z,y,x
z=this.b
y=H.ah(z,"y",0)
x=W.R
return new H.j0(new H.dN(z,H.l(new P.iv(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.iw(),{func:1,ret:x,args:[y]}),[y,x])},
H:function(a,b){H.l(b,{func:1,ret:-1,args:[W.R]})
C.a.H(P.eO(this.gb6(),!1,W.R),b)},
n:function(a,b,c){var z
H.G(b)
H.d(c,"$isR")
z=this.gb6()
J.hO(z.b.$1(J.cr(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aH:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gl:function(a){return J.ap(this.gb6().a)},
j:function(a,b){var z=this.gb6()
return z.b.$1(J.cr(z.a,b))},
ga1:function(a){var z=P.eO(this.gb6(),!1,W.R)
return new J.ay(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.R]},
$asi:function(){return[W.R]},
$ase:function(){return[W.R]}},
iv:{"^":"m:26;",
$1:function(a){return!!J.L(H.d(a,"$isH")).$isR}},
iw:{"^":"m:57;",
$1:function(a){return H.k(H.d(a,"$isH"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lW:{"^":"b;$ti",
gbl:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.B(z+this.c,H.x(this,0))},
gcu:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.B(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c5(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=this.a
y=J.aD(b)
x=y.gb0(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbq(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.x(this,0)
if(H.B(z+this.c,w)===y.gbl(b)){if(typeof x!=="number")return x.F()
z=H.B(x+this.d,w)===y.gcu(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.ca(z)
x=this.b
w=J.ca(x)
if(typeof z!=="number")return z.F()
v=H.x(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.B(x+this.d,v)
return P.lH(P.cR(P.cR(P.cR(P.cR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"lW;b0:a>,bq:b>,ay:c>,aw:d>,$ti",t:{
jD:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"q;",$isbP:1,"%":"SVGLength"},oq:{"^":"lJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.G(b)
H.d(c,"$isbP")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$asF:function(){return[P.bP]},
"%":"SVGLengthList"},bR:{"^":"q;",$isbR:1,"%":"SVGNumber"},oG:{"^":"lT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.G(b)
H.d(c,"$isbR")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$asF:function(){return[P.bR]},
"%":"SVGNumberList"},oM:{"^":"q;0l:length=","%":"SVGPointList"},f5:{"^":"cI;0a5:type}",$isf5:1,"%":"SVGScriptElement"},oW:{"^":"mc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$ise:1,
$ase:function(){return[P.f]},
$asF:function(){return[P.f]},
"%":"SVGStringList"},oZ:{"^":"cI;0a5:type}","%":"SVGStyleElement"},cI:{"^":"R;",
gcA:function(a){return new P.iu(a,new W.aw(a))},
ao:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aK])
C.a.h(z,W.fT(null))
C.a.h(z,W.h4())
C.a.h(z,new W.mf())
c=new W.hh(new W.eW(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).i2(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aw(w)
u=z.gaM(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscI:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bV:{"^":"q;",$isbV:1,"%":"SVGTransform"},p7:{"^":"mr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.G(b)
H.d(c,"$isbV")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bV]},
$isi:1,
$asi:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$asF:function(){return[P.bV]},
"%":"SVGTransformList"},lI:{"^":"q+y;"},lJ:{"^":"lI+F;"},lS:{"^":"q+y;"},lT:{"^":"lS+F;"},mb:{"^":"q+y;"},mc:{"^":"mb+F;"},mq:{"^":"q+y;"},mr:{"^":"mq+F;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isku:1}}],["","",,P,{"^":"",o1:{"^":"q;0l:length=","%":"AudioBuffer"},ec:{"^":"ae;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},o2:{"^":"lg;",
j:function(a,b){return P.b2(a.get(H.I(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b2(y.value[1]))}},
ga9:function(a){var z=H.c([],[P.f])
this.H(a,new P.hT(z))
return z},
gl:function(a){return a.size},
n:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.f,null]},
$isN:1,
$asN:function(){return[P.f,null]},
"%":"AudioParamMap"},hT:{"^":"m:10;a",
$2:function(a,b){return C.a.h(this.a,a)}},hU:{"^":"ec;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},o3:{"^":"ae;0l:length=","%":"AudioTrackList"},hX:{"^":"ae;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},o4:{"^":"ec;0a5:type}","%":"BiquadFilterNode"},oJ:{"^":"hX;0l:length=","%":"OfflineAudioContext"},oK:{"^":"hU;0a5:type}","%":"Oscillator|OscillatorNode"},lg:{"^":"q+ai;"}}],["","",,P,{"^":"",dy:{"^":"q;",
iW:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscf)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nk(g))
return}if(!!z.$isde)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cb("Incorrect number or type of arguments"))},
eM:function(a,b,c,d,e,f,g){return this.iW(a,b,c,d,e,f,g,null,null,null)},
$isdy:1,
"%":"WebGLRenderingContext"},kb:{"^":"q;",$iskb:1,"%":"WebGLTexture"},kC:{"^":"q;",$iskC:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oU:{"^":"m9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b2(a.item(b))},
n:function(a,b,c){H.G(b)
H.d(c,"$isN")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[[P.N,,,]]},
$isi:1,
$asi:function(){return[[P.N,,,]]},
$ise:1,
$ase:function(){return[[P.N,,,]]},
$asF:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},m8:{"^":"q+y;"},m9:{"^":"m8+F;"}}],["","",,O,{"^":"",ar:{"^":"b;0a,0b,0c,0d,$ti",
bw:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
da:function(a,b,c){var z=H.ah(this,"ar",0)
H.l(b,{func:1,ret:P.U,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
b5:function(a,b){return this.da(a,null,b)},
dI:function(a){var z
H.t(a,"$isi",[H.ah(this,"ar",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
di:function(a,b){var z
H.t(b,"$isi",[H.ah(this,"ar",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.x(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ah(this,"ar",0)
H.B(b,z)
z=[z]
if(this.dI(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.di(x,H.c([b],z))}},
ab:function(a,b){var z,y
H.t(b,"$isi",[H.ah(this,"ar",0)],"$asi")
if(this.dI(b)){z=this.a
y=z.length
C.a.ab(z,b)
this.di(y,b)}},
$isi:1,
t:{
da:function(a){var z=new O.ar([a])
z.bw(a)
return z}}},ds:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
fc:function(a){var z=this.b
if(!(z==null))z.B(a)},
aN:function(){return this.fc(null)},
ga2:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.bj()},
bX:function(a){var z=this.a
if(a==null)C.a.h(z,V.bj())
else C.a.h(z,a)
this.aN()},
aJ:function(){var z=this.a
if(z.length>0){z.pop()
this.aN()}}}}],["","",,E,{"^":"",d3:{"^":"b;"},aS:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc3:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().U(0,this.geH())
y=this.c
if(y!=null)y.gu().h(0,this.geH())
x=new D.O("shape",z,this.c,this,[F.f6])
x.b=!0
this.b2(x)}},
as:function(a,b){var z
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.E();)z.d.as(0,b)},
af:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga2(z))
z.aN()
a.cY(this.f)
z=a.dy
y=(z&&C.a).gax(z)
if(y!=null&&this.d!=null)y.eK(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.E();)z.d.af(a)
a.cW()
a.dx.aJ()},
gu:function(){var z=this.z
if(z==null){z=D.M()
this.z=z}return z},
b2:function(a){var z=this.z
if(!(z==null))z.B(a)},
aa:function(){return this.b2(null)},
iA:[function(a){H.d(a,"$isA")
this.e=null
this.b2(a)},function(){return this.iA(null)},"jM","$1","$0","geH",0,2,1],
iy:[function(a){this.b2(H.d(a,"$isA"))},function(){return this.iy(null)},"jK","$1","$0","geG",0,2,1],
jJ:[function(a,b){var z,y,x,w,v,u,t,s
H.t(b,"$isi",[E.aS],"$asi")
for(z=b.length,y=this.geG(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.bf()
t.d=0
u.sa7(t)}t=u.ga7()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.aa()},"$2","gix",8,0,9],
jL:[function(a,b){var z,y,x,w,v
H.t(b,"$isi",[E.aS],"$asi")
for(z=b.length,y=this.geG(),x=0;x<b.length;b.length===z||(0,H.C)(b),++x){w=b[x]
if(w!=null){if(w.ga7()==null){v=new D.bf()
v.d=0
w.sa7(v)}w.ga7().U(0,y)}}this.aa()},"$2","giz",8,0,9],
$isaJ:1,
t:{
eA:function(a,b,c,d,e,f){var z,y
z=new E.aS()
z.a=d
z.b=!0
y=O.da(E.aS)
z.y=y
y.b5(z.gix(),z.giz())
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
z.sc3(0,e)
return z}}},jI:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f9:function(a,b){var z,y
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
z=new O.ds()
y=[V.aU]
z.a=H.c([],y)
z.gu().h(0,new E.jK(this))
this.cy=z
z=new O.ds()
z.a=H.c([],y)
z.gu().h(0,new E.jL(this))
this.db=z
z=new O.ds()
z.a=H.c([],y)
z.gu().h(0,new E.jM(this))
this.dx=z
z=H.c([],[O.cl])
this.dy=z
C.a.h(z,null)
this.fr=new H.b9(0,0,[P.f,A.dz])},
giK:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga2(z)
y=this.db
y=z.p(0,y.ga2(y))
this.z=y
z=y}return z},
cY:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
cW:function(){var z=this.dy
if(z.length>1)z.pop()},
dY:function(a){var z=a.b
if(z.length===0)throw H.a(P.u("May not cache a shader with no name."))
if(this.fr.bE(0,z))throw H.a(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.n(0,z,a)},
t:{
jJ:function(a,b){var z=new E.jI(a,b)
z.f9(a,b)
return z}}},jK:{"^":"m:8;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.ch=null}},jL:{"^":"m:8;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jM:{"^":"m:8;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},km:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
fe:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.B(a)
this.iQ()},function(){return this.fe(null)},"fd","$1","$0","gdj",0,2,1],
gig:function(){var z,y,x
z=Date.now()
y=C.f.a8(P.ew(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.as(z,!1)
return x/y},
dL:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.o(z)
x=C.i.cM(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.i.cM(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fh(C.q,this.giP())},
iQ:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.ko(this),{func:1,ret:-1,args:[P.a6]})
C.I.fC(z)
C.I.he(z,W.ho(y,P.a6))}},"$0","giP",0,0,3],
iN:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dL()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.as(w,!1)
x.y=P.ew(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aN()
w=x.db
C.a.sl(w.a,0)
w.aN()
w=x.dx
C.a.sl(w.a,0)
w.aN()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.af(this.e)}x=this.z
if(!(x==null))x.B(null)}catch(v){z=H.aa(v)
y=H.bE(v)
P.e4("Error: "+H.j(z))
P.e4("Stack: "+H.j(y))
throw H.a(z)}},
t:{
kn:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd8)return E.fg(a,!0,!0,!0,!1)
y=W.d9(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcA(a).h(0,y)
w=E.fg(y,!0,!0,!0,!1)
w.a=a
return w},
fg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.km()
y=P.iU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.l.c1(a,"webgl",y)
x=H.d(x==null?C.l.c1(a,"experimental-webgl",y):x,"$isdy")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jJ(x,a)
w=new T.kg(x)
w.b=H.G(x.getParameter(3379))
w.c=H.G(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kP(a)
v=new X.iN()
v.c=new X.aI(!1,!1,!1)
v.d=P.cj(null,null,null,P.n)
w.b=v
v=new X.jd(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iY(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kr(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fb,P.b]])
w.z=v
u=document
t=W.af
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.l(w.gfS(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.l(w.gfV(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.l(w.gfP(),q),!1,r))
v=w.z
p=W.bO
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.l(w.gfX(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.l(w.gfW(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.l(w.gh_(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.l(w.gh1(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.l(w.gh0(),s),!1,t))
p=w.z
o=W.bY;(p&&C.a).h(p,W.a3(a,H.I(W.io(a)),H.l(w.gh2(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.l(w.gfT(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.l(w.gfU(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.l(w.gh3(),q),!1,r))
r=w.z
q=W.bv
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.l(w.ghb(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.l(w.gh9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.l(w.gha(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.as(Date.now(),!1)
z.cy=0
z.dL()
return z}}},ko:{"^":"m:35;a",
$1:function(a){var z
H.nP(a)
z=this.a
if(z.ch){z.ch=!1
z.iN()}}}}],["","",,Z,{"^":"",fM:{"^":"b;a,b",t:{
dM:function(a,b,c){var z
H.t(c,"$ise",[P.n],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bz(c)),35044)
a.bindBuffer(b,null)
return new Z.fM(b,z)}}},eh:{"^":"d3;a,b,c,d,e",
a_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aa(y)
x=P.u('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},fN:{"^":"b;a",$iso5:1},d7:{"^":"b;a,0b,c,d",
aI:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a_(a)},
ar:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
af:function(a){var z,y,x,w,v
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
z=[P.f]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(y,", ")+"\nAttrs:   "+C.a.m(u,", ")},
$isp1:1},cA:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}},bw:{"^":"b;a",
gdd:function(a){var z,y
z=this.a
y=(z&$.$get$aC().a)!==0?3:0
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=3
if((z&$.$get$b_().a)!==0)y+=2
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$bW().a)!==0)y+=3
if((z&$.$get$bX().a)!==0)y+=4
if((z&$.$get$bx().a)!==0)++y
return(z&$.$get$aX().a)!==0?y+4:y},
hV:function(a){var z,y,x
z=$.$get$aC()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fL()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bw))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.f])
y=this.a
if((y&$.$get$aC().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b0().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bW().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bX().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.m(z,"|")},
t:{
av:function(a){return new Z.bw(a)}}}}],["","",,D,{"^":"",ek:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.A]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
U:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).U(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).U(z,b)||y}return y},
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.H(y,new D.is(z))
y=this.b
if(!(y==null))C.a.H(y,new D.it(z))
z=this.b
if(!(z==null))C.a.sl(z,0)
return!0},
e6:function(){return this.B(null)},
iR:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.B(y)}}},
aL:function(a){return this.iR(a,!0,!1)},
t:{
M:function(){var z=new D.bf()
z.d=0
return z}}},is:{"^":"m:25;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},it:{"^":"m:25;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"b;a,0b"},cg:{"^":"A;c,d,a,0b,$ti"},ch:{"^":"A;c,d,a,0b,$ti"},O:{"^":"A;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ei:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ei))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"o7<"}},eJ:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eJ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eK:{"^":"A;c,a,0b"},iN:{"^":"b;0a,0b,0c,0d",
iG:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eK(a,this)
y.b=!0
return z.B(y)},
iC:function(a){var z,y
this.c=a.b
this.d.U(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eK(a,this)
y.b=!0
return z.B(y)}},eP:{"^":"cF;x,y,c,d,e,a,0b"},iY:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aC:function(a,b){var z,y,x,w,v,u,t,s
z=new P.as(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaX()
s=new X.bQ(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cV:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.aC(a,b))
return!0},
bi:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eX()
if(typeof z!=="number")return z.c0()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.aC(a,b))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.aC(a,b))
return!0},
iH:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaX()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.p()
t=a.b
s=this.cy
if(typeof t!=="number")return t.p()
w=new X.dt(new V.a0(v*u,t*s),y,x,new P.as(w,!1),this)
w.b=!0
z.B(w)
return!0},
fZ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.as(Date.now(),!1)
y=this.f
x=new X.eP(c,a,this.a.gaX(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.Z(0,0)}},aI:{"^":"b;a,b,c",
A:function(a,b){var z,y
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
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bQ:{"^":"cF;x,y,z,Q,ch,c,d,e,a,0b"},jd:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cc:function(a,b,c){var z,y,x
z=new P.as(Date.now(),!1)
y=this.a.gaX()
x=new X.bQ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cV:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.cc(a,b,!0))
return!0},
bi:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eX()
if(typeof z!=="number")return z.c0()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.cc(a,b,!0))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.cc(a,b,!1))
return!0},
iI:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaX()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.p()
u=a.b
t=this.ch
if(typeof u!=="number")return u.p()
x=new X.dt(new V.a0(w*v,u*t),y,b,new P.as(x,!1),this)
x.b=!0
z.B(x)
return!0},
ge5:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
gbZ:function(){var z=this.c
if(z==null){z=D.M()
this.c=z}return z},
geF:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z}},dt:{"^":"cF;x,c,d,e,a,0b"},cF:{"^":"A;"},fl:{"^":"cF;x,y,z,Q,ch,c,d,e,a,0b"},kr:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aC:function(a,b){var z,y,x,w
H.t(a,"$ise",[V.Z],"$ase")
z=new P.as(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gaX()
w=new X.fl(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iF:function(a){var z
H.t(a,"$ise",[V.Z],"$ase")
z=this.b
if(z==null)return!1
z.B(this.aC(a,!0))
return!0},
iD:function(a){var z
H.t(a,"$ise",[V.Z],"$ase")
z=this.c
if(z==null)return!1
z.B(this.aC(a,!0))
return!0},
iE:function(a){var z
H.t(a,"$ise",[V.Z],"$ase")
z=this.d
if(z==null)return!1
z.B(this.aC(a,!1))
return!0}},kP:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaX:function(){var z=this.a
return V.f4(0,0,(z&&C.l).ge2(z).c,C.l.ge2(z).d)},
dv:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eJ(z,new X.aI(y,a.altKey,a.shiftKey))},
aU:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
cp:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
aD:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.Z(y-w,x-v)},
b9:function(a){return new V.a0(a.movementX,a.movementY)},
cl:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.i.aq(u.pageX)
C.i.aq(u.pageY)
s=z.left
C.i.aq(u.pageX)
C.a.h(y,new V.Z(t-s,C.i.aq(u.pageY)-z.top))}return y},
aA:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ei(z,new X.aI(y,a.altKey,a.shiftKey))},
ce:function(a){var z,y,x,w,v,u
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
jj:[function(a){this.f=!0},"$1","gfV",4,0,11],
jd:[function(a){this.f=!1},"$1","gfP",4,0,11],
jg:[function(a){H.d(a,"$isaf")
if(this.f&&this.ce(a))a.preventDefault()},"$1","gfS",4,0,4],
jl:[function(a){var z
H.d(a,"$isbO")
if(!this.f)return
z=this.dv(a)
if(this.b.iG(z))a.preventDefault()},"$1","gfX",4,0,21],
jk:[function(a){var z
H.d(a,"$isbO")
if(!this.f)return
z=this.dv(a)
if(this.b.iC(z))a.preventDefault()},"$1","gfW",4,0,21],
jn:[function(a){var z,y,x,w
H.d(a,"$isaf")
z=this.a
z.focus()
this.f=!0
this.aU(a)
if(this.x){y=this.aA(a)
x=this.b9(a)
if(this.d.cV(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aA(a)
w=this.aD(a)
if(this.c.cV(y,w))a.preventDefault()},"$1","gh_",4,0,4],
jp:[function(a){var z,y,x
H.d(a,"$isaf")
this.aU(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bi(z,x))a.preventDefault()},"$1","gh1",4,0,4],
ji:[function(a){var z,y,x
H.d(a,"$isaf")
if(!this.ce(a)){this.aU(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bi(z,x))a.preventDefault()}},"$1","gfU",4,0,4],
jo:[function(a){var z,y,x
H.d(a,"$isaf")
this.aU(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bh(z,x))a.preventDefault()},"$1","gh0",4,0,4],
jh:[function(a){var z,y,x
H.d(a,"$isaf")
if(!this.ce(a)){this.aU(a)
z=this.aA(a)
if(this.x){y=this.b9(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bh(z,x))a.preventDefault()}},"$1","gfT",4,0,4],
jq:[function(a){var z,y
H.d(a,"$isbY")
this.aU(a)
z=new V.a0((a&&C.H).gi4(a),C.H.gi5(a)).C(0,180)
if(this.x){if(this.d.iH(z))a.preventDefault()
return}if(this.r)return
y=this.aD(a)
if(this.c.iI(z,y))a.preventDefault()},"$1","gh2",4,0,39],
jr:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aA(this.y)
v=this.aD(this.y)
this.d.fZ(w,v,x)}},"$1","gh3",4,0,11],
jz:[function(a){var z
H.d(a,"$isbv")
this.a.focus()
this.f=!0
this.cp(a)
z=this.cl(a)
if(this.e.iF(z))a.preventDefault()},"$1","ghb",4,0,13],
jx:[function(a){var z
H.d(a,"$isbv")
this.cp(a)
z=this.cl(a)
if(this.e.iD(z))a.preventDefault()},"$1","gh9",4,0,13],
jy:[function(a){var z
H.d(a,"$isbv")
this.cp(a)
z=this.cl(a)
if(this.e.iE(z))a.preventDefault()},"$1","gha",4,0,13]}}],["","",,D,{"^":"",cx:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z},
aO:[function(a){var z
H.d(a,"$isA")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aO(null)},"j3","$1","$0","gfh",0,2,1],
$isa7:1,
$isaJ:1},a7:{"^":"b;",$isaJ:1},iO:{"^":"ar;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.M()
this.Q=z}return z},
aO:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fY:[function(a){var z
H.d(a,"$isA")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fY(null)},"jm","$1","$0","gdH",0,2,1],
js:[function(a){var z,y,x
H.t(a,"$isi",[D.a7],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.fg(x))return!1}return!0},"$1","gh4",4,0,41],
ja:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a7
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdH(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.d(b[u],"$isa7")
if(t instanceof D.cx)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bf()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cg(a,b,this,[z])
z.b=!0
this.aO(z)},"$2","gfM",8,0,20],
ju:[function(a,b){var z,y,x,w,v,u
z=D.a7
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdH(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=H.d(b[w],"$isa7")
if(v instanceof D.cx)C.a.U(this.e,v)
u=v.d
if(u==null){u=new D.bf()
u.d=0
v.d=u}u.U(0,x)}z=new D.ch(a,b,this,[z])
z.b=!0
this.aO(z)},"$2","gh6",8,0,20],
fg:function(a){var z=C.a.W(this.e,a)
return z},
$asi:function(){return[D.a7]},
$asar:function(){return[D.a7]}},jo:{"^":"b;",$isa7:1,$isaJ:1},k3:{"^":"b;",$isa7:1,$isaJ:1},kj:{"^":"b;",$isa7:1,$isaJ:1},kk:{"^":"b;",$isa7:1,$isaJ:1},kl:{"^":"b;",$isa7:1,$isaJ:1}}],["","",,V,{"^":"",
o9:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","ja",8,0,37],
nY:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bt(a-b,z)
return(a<0?a+z:a)+b},
V:function(a,b,c){if(a==null)return C.b.ak("null",c)
return C.b.ak(C.i.eO($.p.$2(a,0)?0:a,b),c+b+1)},
bD:function(a,b,c){var z,y,x,w,v,u
H.t(a,"$ise",[P.D],"$ase")
z=H.c([],[P.f])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.V(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.n(z,u,C.b.ak(z[u],x))}return z},
e3:function(a,b){return C.i.iZ(Math.pow(b,C.R.cM(Math.log(H.nh(a))/Math.log(b))))},
z:{"^":"b;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
b6:{"^":"b;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
eT:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.D])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eT))return!1
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
z=[P.D]
y=V.bD(H.c([this.a,this.d,this.r],z),3,0)
x=V.bD(H.c([this.b,this.e,this.x],z),3,0)
w=V.bD(H.c([this.c,this.f,this.y],z),3,0)
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
aU:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.D])
return z},
cQ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.p()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.p()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.p()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.p()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.p()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.bj()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.p()
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
if(typeof f!=="number")return f.p()
e=this.f
if(typeof e!=="number")return e.p()
d=this.r
if(typeof d!=="number")return d.p()
c=this.x
if(typeof c!=="number")return c.p()
b=this.y
if(typeof b!=="number")return b.p()
a=this.z
if(typeof a!=="number")return a.p()
a0=this.Q
if(typeof a0!=="number")return a0.p()
a1=this.ch
if(typeof a1!=="number")return a1.p()
a2=this.cx
if(typeof a2!=="number")return a2.p()
a3=this.cy
if(typeof a3!=="number")return a3.p()
a4=this.db
if(typeof a4!=="number")return a4.p()
a5=this.dx
if(typeof a5!=="number")return a5.p()
return V.aH(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
v=this.c
u=a.c
if(typeof v!=="number")return v.p()
t=this.e
if(typeof t!=="number")return t.p()
s=this.f
if(typeof s!=="number")return s.p()
r=this.r
if(typeof r!=="number")return r.p()
q=this.y
if(typeof q!=="number")return q.p()
p=this.z
if(typeof p!=="number")return p.p()
o=this.Q
if(typeof o!=="number")return o.p()
return new V.Q(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
br:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
v=this.c
u=a.c
if(typeof v!=="number")return v.p()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.p()
r=this.f
if(typeof r!=="number")return r.p()
q=this.r
if(typeof q!=="number")return q.p()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.p()
n=this.z
if(typeof n!=="number")return n.p()
m=this.Q
if(typeof m!=="number")return m.p()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.am(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aU))return!1
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
i:function(a){return this.N()},
eu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.D]
y=V.bD(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bD(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bD(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bD(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.eu("",3,0)},
D:function(a){return this.eu(a,3,0)},
t:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bj:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eU:function(a,b,c){var z,y,x,w,v
z=c.C(0,Math.sqrt(c.I(c)))
y=b.bf(z)
x=y.C(0,Math.sqrt(y.I(y)))
w=z.bf(x)
v=new V.Q(a.a,a.b,a.c)
return V.aH(x.a,w.a,z.a,x.S(0).I(v),x.b,w.b,z.b,w.S(0).I(v),x.c,w.c,z.c,z.S(0).I(v),0,0,0,1)}}},
Z:{"^":"b;a,b",
K:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
am:{"^":"b;a,b,c",
K:function(a,b){return new V.am(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}},
bS:{"^":"b;a,b,c,d",
A:function(a,b){var z
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
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}},
f3:{"^":"b;a,b,c,d",
gae:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f3))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"},
t:{
f4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f3(a,b,c,d)}}},
a0:{"^":"b;a,b",
io:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,19],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.a0(z*b,y*b)},
C:function(a,b){var z,y
if($.p.$2(b,0))return new V.a0(0,0)
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.a0(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}},
Q:{"^":"b;a,b,c",
io:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,19],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cR:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.Q(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
bf:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.Q(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.Q(-this.a,-this.b,-this.c)},
C:function(a,b){if($.p.$2(b,0))return new V.Q(0,0,0)
return new V.Q(this.a/b,this.b/b,this.c/b)},
eD:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i3:{"^":"ek;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c6:function(a){var z=V.nY(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.B(a)},
sd4:function(a,b){},
scS:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c6(z)}z=new D.O("maximumLocation",y,this.b,this,[P.D])
z.b=!0
this.T(z)}},
scU:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c6(z)}z=new D.O("minimumLocation",y,this.c,this,[P.D])
z.b=!0
this.T(z)}},
sad:function(a,b){var z,y
b=this.c6(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.O("location",y,b,this,[P.D])
z.b=!0
this.T(z)}},
scT:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.O("maximumVelocity",y,a,this,[P.D])
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
z=new D.O("velocity",x,a,this,[P.D])
z.b=!0
this.T(z)}},
scD:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.O("dampening",y,a,this,[P.D])
z.b=!0
this.T(z)}},
as:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sad(0,this.d+y*b)
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
return z}}},em:{"^":"aj;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
b4:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.em))return!1
return J.a4(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
t:{
en:function(a){var z=new U.em()
z.a=a
return z}}},eD:{"^":"ar;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
T:[function(a){var z
H.d(a,"$isA")
z=this.e
if(!(z==null))z.B(a)},function(){return this.T(null)},"am","$1","$0","gaP",0,2,1],
j9:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.aj
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaP(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfL",8,0,17],
jt:[function(a,b){var z,y,x,w,v
z=U.aj
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaP(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gu().U(0,x)}z=new D.ch(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gh5",8,0,17],
b4:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ay(z,z.length,0,[H.x(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.b4(0,b,c)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.bj():x
z=this.e
if(!(z==null))z.aL(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eD))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.a4(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.aj]},
$asar:function(){return[U.aj]},
$isaj:1},aj:{"^":"ek;"},kQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.M()
this.cy=z}return z},
T:[function(a){var z
H.d(a,"$isA")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.T(null)},"am","$1","$0","gaP",0,2,1],
bc:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge5().h(0,this.gcf())
this.a.c.geF().h(0,this.gcg())
this.a.c.gbZ().h(0,this.gci())
return!0},
fH:[function(a){H.d(a,"$isA")
if(!J.a4(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcf",4,0,2],
fI:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isbQ")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.a0(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.a0(y.a,y.b).p(0,2).C(0,z.gae())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.p()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.a0(x.a,x.b).p(0,2).C(0,z.gae())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sad(0,-v*u+t)
this.b.sV(0)
y=y.K(0,a.z)
this.Q=new V.a0(y.a,y.b).p(0,2).C(0,z.gae())}this.am()},"$1","gcg",4,0,2],
fJ:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.p()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.am()}},"$1","gci",4,0,2],
b4:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.ch=y
x=b.y
this.b.as(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaj:1},kR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.M()
this.fx=z}return z},
T:[function(a){var z
H.d(a,"$isA")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.T(null)},"am","$1","$0","gaP",0,2,1],
bc:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ge5().h(0,this.gcf())
this.a.c.geF().h(0,this.gcg())
this.a.c.gbZ().h(0,this.gci())
z=this.a.d
y=z.f
if(y==null){y=D.M()
z.f=y
z=y}else z=y
z.h(0,this.gfE())
z=this.a.d
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.gfF())
z=this.a.e
y=z.b
if(y==null){y=D.M()
z.b=y
z=y}else z=y
z.h(0,this.ghs())
z=this.a.e
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.ghr())
z=this.a.e
y=z.c
if(y==null){y=D.M()
z.c=y
z=y}else z=y
z.h(0,this.ghq())
return!0},
au:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.a0(z,y)},
fH:[function(a){a=H.k(H.d(a,"$isA"),"$isbQ")
if(!J.a4(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcf",4,0,2],
fI:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isbQ")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.a0(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.au(new V.a0(y.a,y.b).p(0,2).C(0,z.gae()))
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
x=y.K(0,a.y)
w=this.au(new V.a0(x.a,x.b).p(0,2).C(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sad(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sad(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.au(new V.a0(y.a,y.b).p(0,2).C(0,z.gae()))}this.am()},"$1","gcg",4,0,2],
fJ:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
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
this.am()}},"$1","gci",4,0,2],
j6:[function(a){if(H.k(H.d(a,"$isA"),"$iseP").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfE",4,0,2],
j7:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isbQ")
if(!J.a4(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.au(new V.a0(x.a,x.b).p(0,2).C(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sad(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sad(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.au(new V.a0(y.a,y.b).p(0,2).C(0,z.gae()))
this.am()},"$1","gfF",4,0,2],
jD:[function(a){H.d(a,"$isA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghs",4,0,2],
jC:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isfl")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.a0(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.au(new V.a0(y.a,y.b).p(0,2).C(0,z.gae()))
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
x=y.K(0,a.y)
w=this.au(new V.a0(x.a,x.b).p(0,2).C(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sad(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sad(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.au(new V.a0(y.a,y.b).p(0,2).C(0,z.gae()))}this.am()},"$1","ghr",4,0,2],
jB:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
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
this.am()}},"$1","ghq",4,0,2],
b4:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.as(0,x)
this.b.as(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aH(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.p(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaj:1},kS:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.M()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.B(a)},
bc:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.M()
z.e=y
z=y}else z=y
y=this.gfK()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.M()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
j8:[function(a){var z,y,x,w
H.d(a,"$isA")
if(!J.a4(this.b,this.a.b.c))return
H.k(a,"$isdt")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.p()
w=z+y*x
if(z!==w){this.d=w
z=new D.O("zoom",z,w,this,[P.D])
z.b=!0
this.T(z)}},"$1","gfK",4,0,2],
b4:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aH(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaj:1}}],["","",,M,{"^":"",i4:{"^":"ar;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a3:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dk","$1","$0","gZ",0,2,1],
jv:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aL
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gh7",8,0,15],
jw:[function(a,b){var z,y,x,w,v
z=M.aL
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gu().U(0,x)}z=new D.ch(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gh8",8,0,15],
af:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
if(!(y==null))y.af(a)}this.e=!1},
$asi:function(){return[M.aL]},
$asar:function(){return[M.aL]},
$isaL:1},i9:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a3:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dk","$1","$0","gZ",0,2,1],
sbd:function(a){var z,y
if(a==null)a=new X.iD()
z=this.a
if(z!==a){if(z!=null)z.gu().U(0,this.gZ())
y=this.a
this.a=a
a.gu().h(0,this.gZ())
z=new D.O("camera",y,this.a,this,[X.cv])
z.b=!0
this.a3(z)}},
sbm:function(a,b){var z,y
if(b==null)b=X.dd(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().U(0,this.gZ())
y=this.b
this.b=b
b.gu().h(0,this.gZ())
z=new D.O("target",y,this.b,this,[X.dE])
z.b=!0
this.a3(z)}},
sbn:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().U(0,this.gZ())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gZ())
z=new D.O("technique",y,this.c,this,[O.cl])
z.b=!0
this.a3(z)}},
af:function(a){a.cY(this.c)
this.b.a_(a)
this.a.a_(a)
this.d.as(0,a)
this.d.af(a)
this.a.ar(a)
this.b.toString
a.cW()},
$isaL:1},iq:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a3:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dk","$1","$0","gZ",0,2,1],
je:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aS
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.bf()
s.d=0
t.sa7(s)}s=t.ga7()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cg(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfQ",8,0,9],
jf:[function(a,b){var z,y,x,w,v,u
z=E.aS
H.t(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gZ(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null){if(v.ga7()==null){u=new D.bf()
u.d=0
v.sa7(u)}v.ga7().U(0,x)}}z=new D.ch(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfR",8,0,9],
sbd:function(a){var z,y
if(a==null)a=X.f_(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gu().U(0,this.gZ())
y=this.a
this.a=a
a.gu().h(0,this.gZ())
z=new D.O("camera",y,this.a,this,[X.cv])
z.b=!0
this.a3(z)}},
sbm:function(a,b){var z,y
if(b==null)b=X.dd(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().U(0,this.gZ())
y=this.b
this.b=b
b.gu().h(0,this.gZ())
z=new D.O("target",y,this.b,this,[X.dE])
z.b=!0
this.a3(z)}},
sbn:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().U(0,this.gZ())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gZ())
z=new D.O("technique",y,this.c,this,[O.cl])
z.b=!0
this.a3(z)}},
gu:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
af:function(a){var z
a.cY(this.c)
this.b.a_(a)
this.a.a_(a)
z=this.c
if(z!=null)z.as(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.E();)z.d.as(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.E();)z.d.af(a)
this.a.toString
a.cy.aJ()
a.db.aJ()
this.b.toString
a.cW()},
$isaL:1},aL:{"^":"b;"}}],["","",,A,{"^":"",eb:{"^":"b;a,b,c"},hS:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
e4:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eS:{"^":"dz;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0av,0ap,0bG,0e7,0bH,0bI,0e8,0e9,0bJ,0bK,0ea,0eb,0bL,0bM,0ec,0ed,0bN,0ee,0ef,0bO,0eg,0eh,0bP,0bQ,0bR,0ei,0ej,0bS,0bT,0ek,0el,0bU,0em,0cG,0en,0cH,0eo,0cI,0ep,0cJ,0eq,0cK,0er,0cL,a,b,0c,0d,0e,0f,0r,0x,0y",
f8:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.an("")
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
a1.hv(z)
a1.hC(z)
a1.hw(z)
a1.hK(z)
a1.hL(z)
a1.hE(z)
a1.hP(z)
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
z=new P.an("")
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
v.hz(z)
v.hu(z)
v.hx(z)
v.hA(z)
v.hI(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hG(z)
v.hH(z)}v.hD(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.f])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.m(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hy(z)
v.hF(z)
v.hJ(z)
v.hM(z)
v.hN(z)
v.hO(z)
v.hB(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.f])
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
n="vec4("+C.a.m(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eC(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaN")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaN")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaN")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaN")
if(a1.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdJ")
if(a1.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaN")
if(a1.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaN")
this.r1=H.c([],[A.aN])
y=a1.av
if(y>0){this.k4=H.d(this.y.q(0,"bendMatCount"),"$isS")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaN"))}}y=a1.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isau")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isS")
break
case C.e:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isao")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isS")
break}}y=a1.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isau")
this.av=H.k(this.y.q(0,"nullAmbientTxt"),"$isS")
break
case C.e:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isao")
this.av=H.k(this.y.q(0,"nullAmbientTxt"),"$isS")
break}}y=a1.c
if(y!==C.c){this.ap=H.k(this.y.q(0,"diffuseClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.bG=H.k(this.y.q(0,"diffuseTxt"),"$isau")
this.bH=H.k(this.y.q(0,"nullDiffuseTxt"),"$isS")
break
case C.e:this.e7=H.k(this.y.q(0,"diffuseTxt"),"$isao")
this.bH=H.k(this.y.q(0,"nullDiffuseTxt"),"$isS")
break}}y=a1.d
if(y!==C.c){this.bI=H.k(this.y.q(0,"invDiffuseClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.e8=H.k(this.y.q(0,"invDiffuseTxt"),"$isau")
this.bJ=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isS")
break
case C.e:this.e9=H.k(this.y.q(0,"invDiffuseTxt"),"$isao")
this.bJ=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isS")
break}}y=a1.e
if(y!==C.c){this.bM=H.k(this.y.q(0,"shininess"),"$isa1")
this.bK=H.k(this.y.q(0,"specularClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.ea=H.k(this.y.q(0,"specularTxt"),"$isau")
this.bL=H.k(this.y.q(0,"nullSpecularTxt"),"$isS")
break
case C.e:this.eb=H.k(this.y.q(0,"specularTxt"),"$isao")
this.bL=H.k(this.y.q(0,"nullSpecularTxt"),"$isS")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.d:this.ec=H.k(this.y.q(0,"bumpTxt"),"$isau")
this.bN=H.k(this.y.q(0,"nullBumpTxt"),"$isS")
break
case C.e:this.ed=H.k(this.y.q(0,"bumpTxt"),"$isao")
this.bN=H.k(this.y.q(0,"nullBumpTxt"),"$isS")
break}if(a1.dy){this.ee=H.k(this.y.q(0,"envSampler"),"$isao")
this.ef=H.k(this.y.q(0,"nullEnvTxt"),"$isS")
y=a1.r
if(y!==C.c){this.bO=H.k(this.y.q(0,"reflectClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.eg=H.k(this.y.q(0,"reflectTxt"),"$isau")
this.bP=H.k(this.y.q(0,"nullReflectTxt"),"$isS")
break
case C.e:this.eh=H.k(this.y.q(0,"reflectTxt"),"$isao")
this.bP=H.k(this.y.q(0,"nullReflectTxt"),"$isS")
break}}y=a1.x
if(y!==C.c){this.bQ=H.k(this.y.q(0,"refraction"),"$isa1")
this.bR=H.k(this.y.q(0,"refractClr"),"$isP")
switch(y){case C.c:break
case C.h:break
case C.d:this.ei=H.k(this.y.q(0,"refractTxt"),"$isau")
this.bS=H.k(this.y.q(0,"nullRefractTxt"),"$isS")
break
case C.e:this.ej=H.k(this.y.q(0,"refractTxt"),"$isao")
this.bS=H.k(this.y.q(0,"nullRefractTxt"),"$isS")
break}}}y=a1.y
if(y!==C.c){this.bT=H.k(this.y.q(0,"alpha"),"$isa1")
switch(y){case C.c:break
case C.h:break
case C.d:this.ek=H.k(this.y.q(0,"alphaTxt"),"$isau")
this.bU=H.k(this.y.q(0,"nullAlphaTxt"),"$isS")
break
case C.e:this.el=H.k(this.y.q(0,"alphaTxt"),"$isao")
this.bU=H.k(this.y.q(0,"nullAlphaTxt"),"$isS")
break}}this.cG=H.c([],[A.fy])
this.cH=H.c([],[A.fz])
this.cI=H.c([],[A.fA])
this.cJ=H.c([],[A.fB])
this.cK=H.c([],[A.fC])
this.cL=H.c([],[A.fD])
if(a1.k2){y=a1.z
if(y>0){this.em=H.d(this.y.q(0,"dirLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isP")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.cG;(x&&C.a).h(x,new A.fy(m,l,k))}}y=a1.Q
if(y>0){this.en=H.d(this.y.q(0,"pntLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isP")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isa1")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa1")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa1")
x=this.cH;(x&&C.a).h(x,new A.fz(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eo=H.d(this.y.q(0,"spotLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isP")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa1")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa1")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa1")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa1")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa1")
x=this.cI;(x&&C.a).h(x,new A.fA(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ep=H.d(this.y.q(0,"txtDirLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isP")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isS")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isau")
x=this.cJ;(x&&C.a).h(x,new A.fB(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eq=H.d(this.y.q(0,"txtPntLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isP")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdJ")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isS")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa1")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa1")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa1")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isao")
x=this.cK;(x&&C.a).h(x,new A.fC(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.er=H.d(this.y.q(0,"txtSpotLightCount"),"$isS")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isP")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isS")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isP")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa1")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa1")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa1")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa1")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa1")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isau")
x=this.cL;(x&&C.a).h(x,new A.fD(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
an:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.f_(c)
b.a.uniform1i(b.d,0)}},
ai:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.dc(c)
b.a.uniform1i(b.d,0)}},
t:{
j4:function(a,b){var z,y
z=a.ap
y=new A.eS(b,z)
y.dh(b,z)
y.f8(a,b)
return y}}},j7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,av,ap,bG",
hv:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.av+"];\n"
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
hC:function(a){var z
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
hw:function(a){var z
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
hK:function(a){var z,y
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
hL:function(a){var z,y
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
hE:function(a){var z
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
hP:function(a){var z
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
aB:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.at(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hz:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aB(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hu:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aB(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hx:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"diffuse")
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
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hA:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"invDiffuse")
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
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hI:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aB(a,z,"specular")
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
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hD:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.e:z+="uniform samplerCube bumpTxt;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hG:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aB(a,z,"reflect")
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
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hH:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aB(a,z,"refract")
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
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hy:function(a){var z,y
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
hF:function(a){var z,y
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
hJ:function(a){var z,y
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
hM:function(a){var z,y,x
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
hN:function(a){var z,y,x
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
hO:function(a){var z,y,x
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
hB:function(a){var z
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
i:function(a){return this.ap}},fy:{"^":"b;a,b,c"},fB:{"^":"b;a,b,c,d,e,f,r,x"},fz:{"^":"b;a,b,c,d,e,f,r"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fA:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dz:{"^":"d3;",
dh:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eC:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dw(b,35633)
this.f=this.dw(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dW(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.r(P.u("Failed to link shader: "+H.j(x)))}this.hl()
this.hn()},
a_:function(a){a.a.useProgram(this.r)
this.x.i6()},
dw:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dW(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.u("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hl:function(){var z,y,x,w,v,u
z=H.c([],[A.eb])
y=this.a
x=H.G(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.eb(y,v.name,u))}this.x=new A.hS(z)},
hn:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.G(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i3(v.type,v.size,v.name,u))}this.y=new A.kB(z)},
aR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.S(z,y,b,c)
else return A.dI(z,y,b,a,c)},
fz:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.au(z,y,b,c)
else return A.dI(z,y,b,a,c)},
fA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dI(z,y,b,a,c)},
bB:function(a,b){return new P.fR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
i3:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.a1(this.a,this.r,c,d)
case 35664:return new A.kw(this.a,this.r,c,d)
case 35665:return new A.P(this.a,this.r,c,d)
case 35666:return new A.kz(this.a,this.r,c,d)
case 35667:return new A.kx(this.a,this.r,c,d)
case 35668:return new A.ky(this.a,this.r,c,d)
case 35669:return new A.kA(this.a,this.r,c,d)
case 35674:return new A.kD(this.a,this.r,c,d)
case 35675:return new A.dJ(this.a,this.r,c,d)
case 35676:return new A.aN(this.a,this.r,c,d)
case 35678:return this.fz(b,c,d)
case 35680:return this.fA(b,c,d)
case 35670:throw H.a(this.bB("BOOL",c))
case 35671:throw H.a(this.bB("BOOL_VEC2",c))
case 35672:throw H.a(this.bB("BOOL_VEC3",c))
case 35673:throw H.a(this.bB("BOOL_VEC4",c))
default:throw H.a(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cw:{"^":"b;a,b",
i:function(a){return this.b}},f7:{"^":"dz;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ag:{"^":"b;"},kB:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
ie:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.ie("\n")}},S:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kx:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},ky:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kA:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kv:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dI:function(a,b,c,d,e){var z=new A.kv(a,b,c,e)
z.f=d
z.e=P.iW(d,0,!1,P.n)
return z}}},a1:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kw:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},P:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kz:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kD:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dJ:{"^":"ag;a,b,c,d",
al:function(a){var z=new Float32Array(H.bz(H.t(a,"$ise",[P.D],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aN:{"^":"ag;a,b,c,d",
al:function(a){var z=new Float32Array(H.bz(H.t(a,"$ise",[P.D],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},au:{"^":"ag;a,b,c,d",
f_:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ao:{"^":"ag;a,b,c,d",
dc:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cU:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c1:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.Q(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.Q(t+h,s+f,r+g)
z.b=q
p=new V.Q(t-h,s-f,r-g)
z.c=p
o=new V.Q(y-h,w-f,v-g)
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
j=F.nV(d,e,new F.n0(z,F.cU(z.c),F.cU(z.d),k,l,c),b)
if(j!=null)a.iu(j)},
nV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aW,P.D,P.D]})
if(a<1)return
if(b<1)return
z=F.dA()
y=H.c([],[F.aW])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cP(null,null,new V.b6(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cC(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cP(null,null,new V.b6(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cC(d))}}z.d.hS(a+1,b+1,y)
return z},
n0:{"^":"m:47;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cR(z.b,b).cR(z.d.cR(z.c,b),c)
z=new V.am(y.a,y.b,y.c)
if(!J.a4(a.f,z)){a.f=z
z=a.a
if(z!=null)z.aa()}a.siX(y.C(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.bS(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.a4(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.aa()}}},
at:{"^":"b;0a,0b,0c,0d,0e",
gcF:function(){return this.a==null||this.b==null||this.c==null},
fp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.Q(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eD())return
return v.C(0,Math.sqrt(v.I(v)))},
ft:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.Q(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.I(z)))
z=w.K(0,y)
z=new V.Q(z.a,z.b,z.c)
z=v.bf(z.C(0,Math.sqrt(z.I(z))))
return z.C(0,Math.sqrt(z.I(z)))},
cz:function(){if(this.d!=null)return!0
var z=this.fp()
if(z==null){z=this.ft()
if(z==null)return!1}this.d=z
this.a.a.aa()
return!0},
fo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.Q(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eD())return
return v.C(0,Math.sqrt(v.I(v)))},
fs:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.K(0,u)
z=new V.Q(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.K(0,u)
z=new V.am(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).K(0,x)
z=new V.Q(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.I(z)))
z=k.bf(m)
z=z.C(0,Math.sqrt(z.I(z))).bf(k)
m=z.C(0,Math.sqrt(z.I(z)))}return m},
cv:function(){if(this.e!=null)return!0
var z=this.fo()
if(z==null){z=this.fs()
if(z==null)return!1}this.e=z
this.a.a.aa()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z,y
if(this.gcF())return a+"disposed"
z=a+C.b.ak(J.ab(this.a.e),0)+", "+C.b.ak(J.ab(this.b.e),0)+", "+C.b.ak(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.D("")},
t:{
bL:function(a,b,c){var z,y,x
z=new F.at()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.aa()
return z}}},
dm:{"^":"b;0a,0b",
gcF:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){if(this.gcF())return a+"disposed"
return a+C.b.ak(J.ab(this.a.e),0)+", "+C.b.ak(J.ab(this.b.e),0)},
N:function(){return this.D("")},
t:{
iP:function(a,b){var z,y,x
z=new F.dm()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.aa()
return z}}},
dx:{"^":"b;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ak(J.ab(z.e),0)},
N:function(){return this.D("")}},
f6:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
iu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a4()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.i0())}this.a.a4()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dx()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.B(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a4()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iP(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a4()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bL(p,o,m)}z=this.e
if(!(z==null))z.aL(0)},
aF:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aF()||!1
if(!this.a.aF())y=!1
z=this.e
if(!(z==null))z.aL(0)
return y},
e0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aC()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$bW().a)!==0)++w
if((x&$.$get$bX().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
v=b.gdd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.D
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.eh])
for(r=0,q=0;q<w;++q){p=b.hV(q)
o=p.gdd(p)
C.a.n(s,q,new Z.eh(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].ip(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.n(t,l,m[k]);++l}}r+=o}H.t(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bz(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d7(new Z.fM(34962,j),s,b)
i.b=H.c([],[Z.cA])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a4()
C.a.h(h,g.e)}f=Z.dM(y,34963,H.t(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cA(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a4()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a4()
C.a.h(h,g.e)}f=Z.dM(y,34963,H.t(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cA(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a4()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.a4()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.a4()
C.a.h(h,g.e)}f=Z.dM(y,34963,H.t(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cA(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.m(z,"\n")},
b2:function(a){var z=this.e
if(!(z==null))z.B(a)},
aa:function(){return this.b2(null)},
t:{
dA:function(){var z,y
z=new F.f6()
y=new F.l0(z)
y.b=!1
y.c=H.c([],[F.aW])
z.a=y
y=new F.jV(z)
y.b=H.c([],[F.dx])
z.b=y
y=new F.jU(z)
y.b=H.c([],[F.dm])
z.c=y
y=new F.jT(z)
y.b=H.c([],[F.at])
z.d=y
z.e=null
return z}}},
jT:{"^":"b;a,0b",
hR:function(a){var z,y,x,w,v
H.t(a,"$ise",[F.aW],"$ase")
z=H.c([],[F.at])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bL(y,w,v))}return z},
hS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.t(c,"$ise",[F.aW],"$ase")
z=H.c([],[F.at])
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
C.a.h(z,F.bL(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bL(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bL(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bL(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
aF:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cz())x=!1
return x},
cw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cv())x=!1
return x},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
N:function(){return this.D("")}},
jU:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.m(z,"\n")},
N:function(){return this.D("")}},
jV:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
N:function(){return this.D("")}},
aW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cC:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cP(this.cx,x,u,z,y,w,v,a,t)},
i0:function(){return this.cC(null)},
siX:function(a){var z
if(!J.a4(this.z,a)){this.z=a
z=this.a
if(z!=null)z.aa()}},
ip:function(a){var z,y
z=J.L(a)
if(z.A(a,$.$get$aC())){z=this.f
y=[P.D]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aZ())){z=this.r
y=[P.D]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$aY())){z=this.x
y=[P.D]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b_())){z=this.y
y=[P.D]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.A(a,$.$get$b0())){z=this.z
y=[P.D]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bW())){z=this.Q
y=[P.D]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bX())){z=this.Q
y=[P.D]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.A(a,$.$get$bx()))return H.c([this.ch],[P.D])
else if(z.A(a,$.$get$aX())){z=this.cx
y=[P.D]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.D])},
cz:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.Q(0,0,0)
this.d.H(0,new F.l7(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.aa()
z=this.a.e
if(!(z==null))z.aL(0)}return!0},
cv:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.Q(0,0,0)
this.d.H(0,new F.l6(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.aa()
z=this.a.e
if(!(z==null))z.aL(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z,y,x
z=H.c([],[P.f])
C.a.h(z,C.b.ak(J.ab(this.e),0))
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
C.a.h(z,V.V(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.m(z,", ")
return a+"{"+x+"}"},
N:function(){return this.D("")},
t:{
cP:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aW()
y=new F.l5(z)
y.b=H.c([],[F.dx])
z.b=y
y=new F.l4(z)
x=[F.dm]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.l1(z)
x=[F.at]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fJ()
z.e=0
y=$.$get$aC()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aZ().a)!==0?e:null
z.x=(x&$.$get$aY().a)!==0?b:null
z.y=(x&$.$get$b_().a)!==0?f:null
z.z=(x&$.$get$b0().a)!==0?g:null
z.Q=(x&$.$get$fK().a)!==0?c:null
z.ch=(x&$.$get$bx().a)!==0?i:0
z.cx=(x&$.$get$aX().a)!==0?a:null
return z}}},
l7:{"^":"m:5;a",
$1:function(a){var z,y
H.d(a,"$isat")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
l6:{"^":"m:5;a",
$1:function(a){var z,y
H.d(a,"$isat")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
l0:{"^":"b;a,0b,0c",
a4:function(){var z,y,x,w
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
this.a.aa()
return!0},
hT:function(a,b,c,d,e,f,g,h,i){var z=F.cP(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bC:function(a,b,c,d,e,f){return this.hT(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aF:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cz()
return!0},
cw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cv()
return!0},
hY:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.a4(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
this.a4()
z=H.c([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
N:function(){return this.D("")}},
l1:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){H.l(b,{func:1,ret:-1,args:[F.at]})
C.a.H(this.b,b)
C.a.H(this.c,new F.l2(this,b))
C.a.H(this.d,new F.l3(this,b))},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
N:function(){return this.D("")}},
l2:{"^":"m:5;a,b",
$1:function(a){H.d(a,"$isat")
if(!J.a4(a.a,this.a))this.b.$1(a)}},
l3:{"^":"m:5;a,b",
$1:function(a){var z
H.d(a,"$isat")
z=this.a
if(!J.a4(a.a,z)&&!J.a4(a.b,z))this.b.$1(a)}},
l4:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
N:function(){return this.D("")}},
l5:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].D(a))
return C.a.m(z,"\n")},
N:function(){return this.D("")}}}],["","",,O,{"^":"",j3:{"^":"cl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.M()
this.dy=z}return z},
R:[function(a){var z
H.d(a,"$isA")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.R(null)},"dG","$1","$0","gaT",0,2,1],
hg:[function(a){H.d(a,"$isA")
this.a=null
this.R(a)},function(){return this.hg(null)},"jA","$1","$0","ghf",0,2,1],
jb:[function(a,b){var z=V.aU
z=new D.cg(a,H.t(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.R(z)},"$2","gfN",8,0,14],
jc:[function(a,b){var z=V.aU
z=new D.ch(a,H.t(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.R(z)},"$2","gfO",8,0,14],
dt:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a8(z.e.length+3,4)*4
x=C.f.a8(z.f.length+3,4)*4
w=C.f.a8(z.r.length+3,4)*4
v=C.f.a8(z.x.length+3,4)*4
u=C.f.a8(z.y.length+3,4)*4
t=C.f.a8(z.z.length+3,4)*4
s=C.f.a8(this.e.a.length+3,4)*4
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aC()
if(c){z=$.$get$aZ()
a6=new Z.bw(a6.a|z.a)}if(b){z=$.$get$aY()
a6=new Z.bw(a6.a|z.a)}if(a){z=$.$get$b_()
a6=new Z.bw(a6.a|z.a)}if(a0){z=$.$get$b0()
a6=new Z.bw(a6.a|z.a)}if(a2){z=$.$get$aX()
a6=new Z.bw(a6.a|z.a)}return new A.j7(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Y:function(a,b){H.t(a,"$ise",[T.cJ],"$ase")
if(b!=null)if(!C.a.W(a,b)){b.sbg(0,a.length)
C.a.h(a,b)}},
as:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.x(z,0)]);z.E();){y=z.d
x=new V.Q(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d2(x)}}},
eK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dt()
y=H.d(a.fr.j(0,z.ap),"$iseS")
if(y==null){y=A.j4(z,a.a)
a.dY(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bG
z=b.e
if(!(z instanceof Z.d7)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.aF()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cw()
u.a.cw()
u=u.e
if(!(u==null))u.aL(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.hY()
t=t.e
if(!(t==null))t.aL(0)}r=b.d.e0(new Z.fN(a.a),w)
r.aI($.$get$aC()).e=this.a.Q.c
if(z)r.aI($.$get$aZ()).e=this.a.cx.c
if(v)r.aI($.$get$aY()).e=this.a.ch.c
if(x.rx)r.aI($.$get$b_()).e=this.a.cy.c
if(u)r.aI($.$get$b0()).e=this.a.db.c
if(x.x1)r.aI($.$get$aX()).e=this.a.dx.c
b.e=r}z=T.cJ
q=H.c([],[z])
this.a.a_(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga2(u)
v=v.dy
v.toString
v.al(u.ag(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga2(u)
t=a.dx
t=u.p(0,t.ga2(t))
a.cx=t
u=t}v=v.fr
v.toString
v.al(u.ag(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giK()
t=a.dx
t=u.p(0,t.ga2(t))
a.ch=t
u=t}v=v.fy
v.toString
v.al(u.ag(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.al(u.ag(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.al(u.ag(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.al(C.w.ag(u,!0))}if(x.av>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.D],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.d(t,"$isaU")
u=u.r1
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bz(H.t(t.ag(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.h:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.Y(q,this.f.d)
v=this.a
u=this.f.d
v.an(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.f.e)
v=this.a
u=this.f.e
v.ai(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.h:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.Y(q,this.r.d)
v=this.a
u=this.r.d
v.an(v.y1,v.av,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.r.e)
v=this.a
u=this.r.e
v.ai(v.y2,v.av,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.h:v=this.a
u=this.x.f
v=v.ap
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.Y(q,this.x.d)
v=this.a
u=this.x.d
v.an(v.bG,v.bH,u)
u=this.a
v=this.x.f
u=u.ap
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.x.e)
v=this.a
u=this.x.e
v.ai(v.e7,v.bH,u)
u=this.a
v=this.x.f
u=u.ap
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bI
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.Y(q,this.y.d)
v=this.a
u=this.y.d
v.an(v.e8,v.bJ,u)
u=this.a
v=this.y.f
u=u.bI
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Y(q,this.y.e)
v=this.a
u=this.y.e
v.ai(v.e9,v.bJ,u)
u=this.a
v=this.y.f
u=u.bI
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bK
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bM
u.a.uniform1f(u.d,s)
break
case C.d:this.Y(q,this.z.d)
v=this.a
u=this.z.d
v.an(v.ea,v.bL,u)
u=this.a
v=this.z.f
u=u.bK
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bM
v.a.uniform1f(v.d,s)
break
case C.e:this.Y(q,this.z.e)
v=this.a
u=this.z.e
v.ai(v.eb,v.bL,u)
u=this.a
v=this.z.f
u=u.bK
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bM
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.em
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cG
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.d2(j.a)
s=t.a
h=t.b
g=t.c
g=t.C(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.en
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cH
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbj(j)
s=i.b
h=t.gd5(t)
g=t.gd6(t)
t=t.gd7(t)
s.a.uniform3f(s.d,h,g,t)
t=m.br(j.gbj(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gw(j)
g=i.d
h=t.gbY()
s=t.gbs()
t=t.gbD()
g.a.uniform3f(g.d,h,s,t)
t=j.gcq()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcr()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcs()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eo
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cI
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbj(j)
s=i.b
h=t.gd5(t)
g=t.gd6(t)
t=t.gd7(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcE(j).jI()
g=i.c
h=t.gaY(t)
s=t.gaZ(t)
t=t.gb_()
g.a.uniform3f(g.d,h,s,t)
t=m.br(j.gbj(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gw(j)
s=i.e
h=t.gbY()
g=t.gbs()
t=t.gbD()
s.a.uniform3f(s.d,h,g,t)
t=j.gjG()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjE()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcq()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcr()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcs()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ep
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
s=this.a.cJ
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbo()
H.t(q,"$ise",t,"$ase")
if(!C.a.W(q,s)){s.sbg(0,q.length)
C.a.h(q,s)}s=j.gcE(j)
h=i.d
g=s.gaY(s)
f=s.gaZ(s)
s=s.gb_()
h.a.uniform3f(h.d,g,f,s)
s=j.gbZ()
f=i.b
g=s.gaY(s)
h=s.gaZ(s)
s=s.gb_()
f.a.uniform3f(f.d,g,h,s)
s=j.gbl(j)
h=i.c
g=s.gaY(s)
f=s.gaZ(s)
s=s.gb_()
h.a.uniform3f(h.d,g,f,s)
s=m.d2(j.gcE(j))
f=s.a
g=s.b
h=s.c
h=s.C(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gw(j)
g=i.f
f=h.gbY()
s=h.gbs()
h=h.gbD()
g.a.uniform3f(g.d,f,s,h)
h=j.gbo()
s=h.geE(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdF()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gdC())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eq
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.y,u=v.length,t=[P.D],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
h=this.a.cK
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbo()
H.t(q,"$ise",s,"$ase")
if(!C.a.W(q,h)){h.sbg(0,q.length)
C.a.h(q,h)}e=m.p(0,j.ga2(j))
h=j.ga2(j).br(new V.am(0,0,0))
g=i.b
f=h.gd5(h)
d=h.gd6(h)
h=h.gd7(h)
g.a.uniform3f(g.d,f,d,h)
h=e.br(new V.am(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cQ(0)
d=i.d
n=new Float32Array(H.bz(H.t(new V.eT(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ag(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gw(j)
h=i.e
f=d.gbY()
g=d.gbs()
d=d.gbD()
h.a.uniform3f(h.d,f,g,d)
d=j.gbo()
h=d.geE(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdF()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gdC())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcq()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcr()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcs()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.er
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cL
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbo()
H.t(q,"$ise",z,"$ase")
if(!C.a.W(q,t)){t.sbg(0,q.length)
C.a.h(q,t)}t=j.gbj(j)
s=i.b
h=t.gd5(t)
g=t.gd6(t)
t=t.gd7(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcE(j)
g=i.c
h=t.gaY(t)
s=t.gaZ(t)
t=t.gb_()
g.a.uniform3f(g.d,h,s,t)
t=j.gbZ()
s=i.d
h=t.gaY(t)
g=t.gaZ(t)
t=t.gb_()
s.a.uniform3f(s.d,h,g,t)
t=j.gbl(j)
g=i.e
h=t.gaY(t)
s=t.gaZ(t)
t=t.gb_()
g.a.uniform3f(g.d,h,s,t)
t=m.br(j.gbj(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbo()
s=t.geE(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdF()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gdC())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gw(j)
s=i.y
h=t.gbY()
g=t.gbs()
t=t.gbD()
s.a.uniform3f(s.d,h,g,t)
t=j.gjN()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjO()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcq()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcr()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcs()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.d:this.Y(q,this.Q.d)
z=this.a
v=this.Q.d
z.an(z.ec,z.bN,v)
break
case C.e:this.Y(q,this.Q.e)
z=this.a
v=this.Q.e
z.ai(z.ed,z.bN,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga2(v).cQ(0)
a.Q=v}z=z.id
z.toString
z.al(v.ag(0,!0))}if(x.dy){this.Y(q,this.ch)
z=this.a
v=this.ch
z.ai(z.ee,z.ef,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bO
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.Y(q,this.cx.d)
z=this.a
v=this.cx.d
z.an(z.eg,z.bP,v)
v=this.a
z=this.cx.f
v=v.bO
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.Y(q,this.cx.e)
z=this.a
v=this.cx.e
z.ai(z.eh,z.bP,v)
v=this.a
z=this.cx.f
v=v.bO
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.bR
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bQ
v.a.uniform1f(v.d,t)
break
case C.d:this.Y(q,this.cy.d)
z=this.a
v=this.cy.d
z.an(z.ei,z.bS,v)
v=this.a
z=this.cy.f
v=v.bR
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bQ
z.a.uniform1f(z.d,t)
break
case C.e:this.Y(q,this.cy.e)
z=this.a
v=this.cy.e
z.ai(z.ej,z.bS,v)
v=this.a
z=this.cy.f
v=v.bR
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bQ
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.bT
z.a.uniform1f(z.d,u)
break
case C.d:this.Y(q,this.db.d)
z=this.a
u=this.db.d
z.an(z.ek,z.bU,u)
u=this.a
z=this.db.f
u=u.bT
u.a.uniform1f(u.d,z)
break
case C.e:this.Y(q,this.db.e)
z=this.a
u=this.db.e
z.ai(z.el,z.bU,u)
u=this.a
z=this.db.f
u=u.bT
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a_(a)
z=b.e
z.a_(a)
z.af(a)
z.ar(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].ar(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.e4()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dt().ap}},j5:{"^":"dr;0f,a,b,0c,0d,0e",
hk:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.O(this.b,y,a,this,[P.D])
z.b=!0
this.a.R(z)}},
b7:function(){this.df()
this.hk(1)}},dr:{"^":"b;",
R:[function(a){this.a.R(H.d(a,"$isA"))},function(){return this.R(null)},"dG","$1","$0","gaT",0,2,1],
b7:["df",function(){}],
b8:["f5",function(){}],
dN:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gu().U(0,this.gaT())
y=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gaT())
z=new D.O(this.b+".texture2D",y,this.d,this,[T.ff])
z.b=!0
this.a.R(z)}},
dO:function(a){},
hZ:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.R(null)}this.b7()
this.dN(null)
this.dO(null)
this.a.R(null)}},j6:{"^":"dr;a,b,0c,0d,0e"},bi:{"^":"dr;0f,a,b,0c,0d,0e",
cn:function(a){var z,y
if(!J.a4(this.f,a)){z=this.f
this.f=a
y=new D.O(this.b+".color",z,a,this,[V.z])
y.b=!0
this.a.R(y)}},
b7:["dg",function(){this.df()
this.cn(new V.z(0,0,0))}],
b8:["bu",function(){this.f5()
this.cn(new V.z(1,1,1))}],
sw:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.b8()
z=this.a
z.a=null
z.R(null)}this.cn(b)}},j8:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
bz:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".refraction",y,a,this,[P.D])
z.b=!0
this.a.R(z)}},
b7:function(){this.dg()
this.bz(1)},
b8:function(){this.bu()
this.bz(1)},
saG:function(a){var z
if(a<=0)this.hZ(0)
else if(this.c===C.c){this.c=C.h
this.bu()
this.bz(1)
z=this.a
z.a=null
z.R(null)}this.bz(a)}},j9:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
bA:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".shininess",y,a,this,[P.D])
z.b=!0
this.a.R(z)}},
b7:function(){this.dg()
this.bA(100)},
b8:function(){this.bu()
this.bA(100)}},k0:{"^":"cl;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
R:[function(a){var z
H.d(a,"$isA")
z=this.e
if(!(z==null))z.B(a)},function(){return this.R(null)},"dG","$1","$0","gaT",0,2,1],
eK:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.j(0,"Skybox"),"$isf7")
if(z==null){y=a.a
z=new A.f7(y,"Skybox")
z.dh(y,"Skybox")
z.eC(0,$.k2,$.k1)
z.z=z.x.j(0,"posAttr")
z.Q=H.k(z.y.j(0,"fov"),"$isa1")
z.ch=H.k(z.y.j(0,"ratio"),"$isa1")
z.cx=H.k(z.y.j(0,"boxClr"),"$isP")
z.cy=H.k(z.y.j(0,"boxTxt"),"$isao")
z.db=H.k(z.y.j(0,"viewMat"),"$isaN")
a.dY(z)}this.a=z}if(b.e==null){y=b.d.e0(new Z.fN(a.a),$.$get$aC())
y.aI($.$get$aC()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a_(a)}y=a.d
x=a.c
w=this.a
w.a_(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.dc(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga2(x).cQ(0)
w=w.db
w.toString
w.al(x.ag(0,!0))
y=b.e
if(y instanceof Z.d7){y.a_(a)
y.af(a)
y.ar(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.e4()
y=this.c
if(y!=null)y.ar(a)}},cl:{"^":"b;"}}],["","",,T,{"^":"",cJ:{"^":"d3;"},ff:{"^":"cJ;"},kf:{"^":"ff;0a,0b,0c,0d,0e,0f,0r,0x,0y",
sbg:function(a,b){this.a=b
return b},
gu:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z},
a_:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
ar:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},dF:{"^":"cJ;0a,0b,0c,0d,0e",
sbg:function(a,b){this.a=b
return b},
gu:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
a_:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
ar:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},kg:{"^":"b;a,0b,0c,0d,0e",
is:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.df(null,a,null)
w=new T.kf()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ac
W.a3(x,"load",H.l(new T.ki(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ir:function(a){return this.is(a,!1,!1,!1,!1)},
aS:function(a,b,c,d,e,f){var z,y
z=W.df(null,c,null);++this.d
y=W.ac
W.a3(z,"load",H.l(new T.kh(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dM:function(a,b,c){var z,y,x,w
b=V.e3(b,2)
z=V.e3(a.width,2)
y=V.e3(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d9(null,null)
x.width=z
x.height=y
w=H.d(C.l.eU(x,"2d"),"$isej")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nl(w.getImageData(0,0,x.width,x.height))}}},ki:{"^":"m:7;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dM(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.F.eM(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.e6()}++x.e}},kh:{"^":"m:7;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dM(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.F.eM(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.e6()}++z.e}}}],["","",,V,{"^":"",bH:{"^":"b;",
b1:function(a,b){return!0},
i:function(a){return"all"},
$isaT:1},aT:{"^":"b;"},eR:{"^":"b;",
b1:["f4",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].b1(0,b))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaT:1},az:{"^":"eR;0a",
b1:function(a,b){return!this.f4(0,b)},
i:function(a){return"!["+this.de(0)+"]"}},jC:{"^":"b;0a,0b",
b1:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bU(this.a)
y=H.bU(this.b)
return z+".."+y},
$isaT:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.G(a,0)
y=C.b.G(b,0)
x=new V.jC()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jR:{"^":"b;0a",
fa:function(a){var z,y
if(a.a.length<=0)throw H.a(P.u("May not create a SetMatcher with zero characters."))
z=new H.b9(0,0,[P.n,P.U])
for(y=new H.dp(a,a.gl(a),0,[H.ah(a,"y",0)]);y.E();)z.n(0,y.d,!0)
this.a=z},
b1:function(a,b){return this.a.bE(0,b)},
i:function(a){var z=this.a
return P.ck(z.ga9(z),0,null)},
$isaT:1,
t:{
w:function(a){var z=new V.jR()
z.fa(a)
return z}}},f9:{"^":"b;a,b,0c,0d",
giv:function(a){return this.b},
m:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fm(this.a.k(0,b))
w.a=H.c([],[V.aT])
w.c=!1
C.a.h(this.c,w)
return w},
i8:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.b1(0,a))return w}return},
i:function(a){return this.b}},fj:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e5(this.b,"\n","\\n")
y=H.e5(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fk:{"^":"b;a,b,0c",
aK:function(a,b,c){var z,y,x
H.t(c,"$ise",[P.f],"$ase")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.n(0,x,b)}},
i:function(a){return this.b}},kq:{"^":"b;0a,0b,0c",
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f9(this,b)
z.c=H.c([],[V.fm])
this.a.n(0,b,z)}return z},
O:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fk(this,a)
y=P.f
z.c=new H.b9(0,0,[y,y])
this.b.n(0,a,z)}return z},
eP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fj])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.G(a,t)
r=y.i8(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ck(w,0,null)
throw H.a(P.u("Untokenizable string [state: "+y.giv(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ck(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fj(o==null?p.b:o,q,t)}++t}}},
t:{
cK:function(){var z,y
z=new V.kq()
y=P.f
z.a=new H.b9(0,0,[y,V.f9])
z.b=new H.b9(0,0,[y,V.fk])
return z}}},fm:{"^":"eR;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",cv:{"^":"b;",$isaJ:1},iy:{"^":"dE;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
az:function(a){var z=this.x
if(!(z==null))z.B(a)},
se1:function(a,b){var z
if(this.b){this.b=!1
z=new D.O("clearColor",!0,!1,this,[P.U])
z.b=!0
this.az(z)}},
a_:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.i.aq(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.i.aq(w.b*x)
t=C.i.aq(w.c*y)
a.c=t
w=C.i.aq(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
t:{
dd:function(a,b,c,d,e,f,g){var z,y
z=new X.iy()
y=new V.b6(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.f4(0,0,1,1)
z.r=y
return z}}},iD:{"^":"b;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
a_:function(a){var z
a.cy.bX(V.bj())
z=V.bj()
a.db.bX(z)},
ar:function(a){a.cy.aJ()
a.db.aJ()},
$isaJ:1,
$iscv:1},jl:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
az:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.B(a)},function(){return this.az(null)},"j4","$1","$0","gfl",0,2,1],
a_:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aH(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bX(s)
z=$.f0
if(z==null){z=V.eU(new V.am(0,0,0),new V.Q(0,1,0),new V.Q(0,0,-1))
$.f0=z
r=z}else r=z
z=this.b
if(z!=null){q=z.b4(0,a,this)
if(q!=null)r=q.p(0,r)}a.db.bX(r)},
ar:function(a){a.cy.aJ()
a.db.aJ()},
$isaJ:1,
$iscv:1,
t:{
f_:function(a,b,c,d,e){var z,y,x
z=new X.jl()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gu().h(0,z.gfl())
x=new D.O("mover",y,z.b,z,[U.aj])
x.b=!0
z.az(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.O("fov",y,b,z,[P.D])
x.b=!0
z.az(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.O("near",y,d,z,[P.D])
x.b=!0
z.az(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.O("far",y,a,z,[P.D])
x.b=!0
z.az(x)}return z}}},dE:{"^":"b;"}}],["","",,V,{"^":"",
nT:function(a){P.kp(C.O,new V.nU(a))},
b5:{"^":"b;",
bv:function(a){this.b=new P.iB(C.P)
this.c=null
this.d=H.c([],[[P.e,W.be]])},
L:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.be]))
y=a.split("\n")
for(z=y.length,x=[W.be],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.I(u)
s=this.b.fw(u,0,u.length)
r=s==null?u:s
C.N.eY(t,H.e5(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gax(this.d),t)}},
eI:function(a,b){var z,y,x,w
H.t(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.be]])
z=C.a.m(b,"\n")
y=this.c
if(y==null){y=this.bF()
this.c=y}for(y=y.eP(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bW(y[w])}},
nU:{"^":"m:51;a",
$1:function(a){H.d(a,"$isbt")
P.e4(C.i.eO(this.a.gig(),2)+" fps")}},
id:{"^":"b5;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
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
bF:function(){var z,y,x,w
z=V.cK()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").m(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").m(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").m(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").m(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").m(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Sym")
y=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").m(0,"Sym")
x=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"OpenDoubleStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bH())
x=z.k(0,"Start").m(0,"OpenSingleStr")
y=V.w(new H.v("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").m(0,"EscSingleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").m(0,"OpenSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bH())
x=z.k(0,"Start").m(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").m(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").m(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").m(0,"Comment")
x=new V.az()
w=[V.aT]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").m(0,"MLComment")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").m(0,"MLCStar")
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").m(0,"MLComment")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").m(0,"EndComment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").m(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.O("Num")
x=z.k(0,"Float")
x.d=x.a.O("Num")
x=z.k(0,"Sym")
x.d=x.a.O("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.O("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.O("String")
x=z.k(0,"EndComment")
x.d=x.a.O("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.O("Whitespace")
x=z.k(0,"Id")
y=x.a.O("Id")
x.d=y
x=[P.f]
y.aK(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aK(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aK(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iz:{"^":"b5;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
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
bF:function(){var z,y,x,w
z=V.cK()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").m(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").m(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").m(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").m(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").m(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Sym")
y=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").m(0,"Sym")
x=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").m(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").m(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").m(0,"Sym").a,new V.bH())
x=z.k(0,"Comment").m(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").m(0,"Comment")
x=new V.az()
w=[V.aT]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").m(0,"Preprocess")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.v("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").m(0,"EndPreprocess")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").m(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.O("Num")
y=z.k(0,"Float")
y.d=y.a.O("Num")
y=z.k(0,"Sym")
y.d=y.a.O("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.O("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.O("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.O("Whitespace")
y=z.k(0,"Id")
x=y.a.O("Id")
y.d=x
y=[P.f]
x.aK(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aK(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aK(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iA:{"^":"b5;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
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
bF:function(){var z,y,x
z=V.cK()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").m(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").m(0,"Attr")
x=V.w(new H.v("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"Sym")
x=V.w(new H.v("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").m(0,"Sym")
y=V.w(new H.v("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").m(0,"OpenStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").m(0,"CloseStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").m(0,"EscStr")
x=V.w(new H.v("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").m(0,"OpenStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").m(0,"OpenStr").a,new V.bH())
C.a.h(z.k(0,"Start").m(0,"Other").a,new V.bH())
y=z.k(0,"Other").m(0,"Other")
x=new V.az()
x.a=H.c([],[V.aT])
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.O("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.O("String")
y=z.k(0,"Id")
x=y.a.O("Id")
y.d=x
x.aK(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.k(0,"Attr")
x.d=x.a.O("Attr")
x=z.k(0,"Other")
x.d=x.a.O("Other")
return z}},
jn:{"^":"b5;a,0b,0c,0d",
eI:function(a,b){H.t(b,"$ise",[P.f],"$ase")
this.d=H.c([],[[P.e,W.be]])
this.L(C.a.m(b,"\n"),"#111")},
bW:function(a){},
bF:function(){return}},
jA:{"^":"b;a,b,0c",
dU:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cO().gbk().j(0,H.j(z))
if(y==null)if(d){c.$0()
this.bb(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bG(this.c).h(0,v)
t=W.iF("radio")
t.checked=x
t.name=z
z=W.ac
W.a3(t,"change",H.l(new V.jB(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bG(this.c).h(0,w.createElement("br"))},
ac:function(a,b,c){return this.dU(a,b,c,!1)},
bb:function(a){var z,y,x,w,v
z=P.cO()
y=P.f
x=P.eM(z.gbk(),y,y)
x.n(0,this.a,a)
w=z.d_(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.h3([],[]).c_(""),"",v)}},
jB:{"^":"m:7;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.bb(this.d)}}},
jW:{"^":"b;0a,0b",
fb:function(a,b){var z,y,x,w,v,u,t
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
W.a3(z,"scroll",H.l(new V.jZ(x),{func:1,ret:-1,args:[t]}),!1,t)},
dX:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.t(a,"$ise",[P.f],"$ase")
this.hm()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eP(C.a.im(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(1>=r.length)return H.h(r,1)
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
eT:function(a){var z,y,x,w
z=new V.id("dart")
z.bv("dart")
y=new V.iz("glsl")
y.bv("glsl")
x=new V.iA("html")
x.bv("html")
w=C.a.i9(H.c([z,y,x],[V.b5]),new V.k_(a))
if(w!=null)return w
z=new V.jn("plain")
z.bv("plain")
return z},
dV:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.t(a2,"$ise",[P.f],"$ase")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c7(w).a6(w,"+")){C.a.n(a2,x,C.b.at(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a6(w,"-")){C.a.n(a2,x,C.b.at(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eT(a0)
v.eI(0,a2)
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
n=W.e9(null)
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
if(x>=z.length)return H.h(z,x)
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
for(b=C.a.ga1(w);b.E();)h.appendChild(b.gM(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hQ:function(a){var z,y,x,w,v,u,t
H.t(a,"$ise",[P.f],"$ase")
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
x=H.d(w.insertCell(-1),"$isdD").style
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
t=H.d(w.insertCell(-1),"$isdD")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hm:function(){var z,y,x,w
if(this.b!=null)return
z=V.cK()
z.c=z.k(0,"Start")
y=z.k(0,"Start").m(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").m(0,"Bold")
x=new V.az()
w=[V.aT]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").m(0,"BoldEnd")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"Italic")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").m(0,"Italic")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").m(0,"ItalicEnd")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"Code")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").m(0,"Code")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.v("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").m(0,"CodeEnd")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").m(0,"LinkHead")
x=V.w(new H.v("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").m(0,"LinkTail")
x=V.w(new H.v("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").m(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").m(0,"LinkHead")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").m(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").m(0,"LinkTail")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").m(0,"Other").a,new V.bH())
x=z.k(0,"Other").m(0,"Other")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.O("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.O("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.O("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.O("Link")
x=z.k(0,"Other")
x.d=x.a.O("Other")
this.b=z},
t:{
jX:function(a,b){var z=new V.jW()
z.fb(a,!0)
return z}}},
jZ:{"^":"m:7;a",
$1:function(a){P.fh(C.q,new V.jY(this.a))}},
jY:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.i.aq(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k_:{"^":"m:52;a",
$1:function(a){return H.d(a,"$isb5").a===this.a}},
kc:{"^":"b;a,b,0c,d",
ac:function(a,b,c){var z,y,x,w,v,u
z=W.df(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bG(this.c)
x=y.gl(y)
y=W.af
W.a3(z,"click",H.l(new V.ke(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bG(this.c).h(0,z)
J.bG(this.c).h(0,document.createElement("br"))
w=P.cO().gbk().j(0,H.j(this.a))
if(w==null){this.bb(x)
v=c}else{u=P.c8(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.ac(a,b,!1)},
bb:function(a){var z,y,x,w,v
z=P.cO()
y=P.f
x=P.eM(z.gbk(),y,y)
x.n(0,this.a,H.j(a))
w=z.d_(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.h3([],[]).c_(""),"",v)}},
ke:{"^":"m:53;a,b,c,d",
$1:function(a){var z,y
H.d(a,"$isaf")
z=this.a
y=J.bG(z.c)
y.H(y,new V.kd())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.bb(this.d)}},
kd:{"^":"m:54;",
$1:function(a){var z
H.d(a,"$isR")
if(!!J.L(a).$isde){z=a.style
z.border="solid 2px white"}}}}],["","",,B,{"^":"",
hz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.jX("Test 015",!0)
y=W.d9(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.f]
z.dX(H.c(["Test of Material Lighting shader with bump mapping, reflections, refractions."],x))
z.hQ(H.c(["bumpMaps","controls"],x))
z.dX(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kn(w,!0,!0,!0,!1)
u=X.dd(!0,!0,!1,null,2000,null,0)
u.se1(0,!1)
t=E.eA(null,!0,null,"",null,null)
s=F.dA()
F.c1(s,null,null,1,1,1,0,0,1)
F.c1(s,null,null,1,1,0,1,0,3)
F.c1(s,null,null,1,1,0,0,1,2)
F.c1(s,null,null,1,1,-1,0,0,0)
F.c1(s,null,null,1,1,0,-1,0,0)
F.c1(s,null,null,1,1,0,0,-1,3)
s.aF()
t.sc3(0,s)
r=v.f
q=r.a
p=q.createTexture()
q.bindTexture(34067,p)
q.texParameteri(34067,10242,10497)
q.texParameteri(34067,10243,10497)
q.texParameteri(34067,10241,9729)
q.texParameteri(34067,10240,9729)
q.bindTexture(34067,null)
o=new T.dF()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aS(o,p,"../resources/maskonaive/posx.jpg",34069,!1,!1)
r.aS(o,p,"../resources/maskonaive/negx.jpg",34070,!1,!1)
r.aS(o,p,"../resources/maskonaive/posy.jpg",34071,!1,!1)
r.aS(o,p,"../resources/maskonaive/negy.jpg",34072,!1,!1)
r.aS(o,p,"../resources/maskonaive/posz.jpg",34073,!1,!1)
r.aS(o,p,"../resources/maskonaive/negz.jpg",34074,!1,!1)
n=new O.j3()
r=O.da(V.aU)
n.e=r
r.b5(n.gfN(),n.gfO())
r=new O.bi(n,"emission")
r.c=C.c
r.f=new V.z(0,0,0)
n.f=r
r=new O.bi(n,"ambient")
r.c=C.c
r.f=new V.z(0,0,0)
n.r=r
r=new O.bi(n,"diffuse")
r.c=C.c
r.f=new V.z(0,0,0)
n.x=r
r=new O.bi(n,"invDiffuse")
r.c=C.c
r.f=new V.z(0,0,0)
n.y=r
r=new O.j9(n,"specular")
r.c=C.c
r.f=new V.z(0,0,0)
r.ch=100
n.z=r
r=new O.j6(n,"bump")
r.c=C.c
n.Q=r
n.ch=null
r=new O.bi(n,"reflect")
r.c=C.c
r.f=new V.z(0,0,0)
n.cx=r
r=new O.j8(n,"refract")
r.c=C.c
r.f=new V.z(0,0,0)
r.ch=1
n.cy=r
r=new O.j5(n,"alpha")
r.c=C.c
r.f=1
n.db=r
r=new D.iO()
r.bw(D.a7)
r.e=H.c([],[D.cx])
r.f=H.c([],[D.jo])
r.r=H.c([],[D.k3])
r.x=H.c([],[D.kj])
r.y=H.c([],[D.kk])
r.z=H.c([],[D.kl])
r.Q=null
r.ch=null
r.da(r.gfM(),r.gh4(),r.gh6())
n.dx=r
q=r.Q
if(q==null){q=D.M()
r.Q=q
r=q}else r=q
r.h(0,n.ghf())
r=n.dx
q=r.ch
if(q==null){q=D.M()
r.ch=q
r=q}else r=q
q=n.gaT()
r.h(0,q)
n.dy=null
r=n.dx
m=U.en(V.eU(new V.am(0,0,0),new V.Q(0,1,0),new V.Q(-1,-1,-1)))
l=new D.cx()
l.c=new V.z(1,1,1)
l.a=new V.Q(0,0,1)
k=l.b
l.b=m
m.gu().h(0,l.gfh())
m=new D.O("mover",k,l.b,l,[U.aj])
m.b=!0
l.aO(m)
j=new V.z(1,1,1)
if(!l.c.A(0,j)){k=l.c
l.c=j
m=new D.O("color",k,j,l,[V.z])
m.b=!0
l.aO(m)}r.h(0,l)
r=n.r
r.sw(0,new V.z(0.1,0.1,0.1))
r=n.x
r.sw(0,new V.z(0.1,0.1,0.1))
n.z.sw(0,new V.z(0,0,0))
r=n.z
if(r.c===C.c){r.c=C.h
r.bu()
r.bA(100)
m=r.a
m.a=null
m.R(null)}r.bA(10)
r=n.ch
if(r!==o){if(r!=null)r.gu().U(0,q)
k=n.ch
n.ch=o
o.gu().h(0,q)
r=new D.O("environment",k,n.ch,n,[T.dF])
r.b=!0
n.R(r)}n.cy.saG(0.6)
r=n.cy
r.sw(0,new V.z(0.2,0.3,1))
r=n.cx
r.sw(0,new V.z(0.6,0.6,0.6))
i=new U.eD()
i.bw(U.aj)
i.b5(i.gfL(),i.gh5())
i.e=null
i.f=V.bj()
i.r=0
r=v.r
q=new U.kR()
m=U.db()
m.sd4(0,!0)
m.scS(6.283185307179586)
m.scU(0)
m.sad(0,0)
m.scT(100)
m.sV(0)
m.scD(0.5)
q.b=m
l=q.gaP()
m.gu().h(0,l)
m=U.db()
m.sd4(0,!0)
m.scS(6.283185307179586)
m.scU(0)
m.sad(0,0)
m.scT(100)
m.sV(0)
m.scD(0.5)
q.c=m
m.gu().h(0,l)
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
h=new X.aI(!1,!1,!1)
k=q.d
q.d=h
m=[X.aI]
l=new D.O("modifiers",k,h,q,m)
l.b=!0
q.T(l)
l=q.f
if(l!==!1){q.f=!1
l=new D.O("invertX",l,!1,q,[P.U])
l.b=!0
q.T(l)}l=q.r
if(l!==!1){q.r=!1
l=new D.O("invertY",l,!1,q,[P.U])
l.b=!0
q.T(l)}q.bc(r)
i.h(0,q)
r=v.r
q=new U.kQ()
l=U.db()
l.sd4(0,!0)
l.scS(6.283185307179586)
l.scU(0)
l.sad(0,0)
l.scT(100)
l.sV(0)
l.scD(0.2)
q.b=l
l.gu().h(0,q.gaP())
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
h=new X.aI(!0,!1,!1)
k=q.c
q.c=h
l=new D.O("modifiers",k,h,q,m)
l.b=!0
q.T(l)
q.bc(r)
i.h(0,q)
r=v.r
q=new U.kS()
q.c=0.01
q.d=0
q.e=0
h=new X.aI(!1,!1,!1)
q.b=h
m=new D.O("modifiers",null,h,q,m)
m.b=!0
q.T(m)
q.bc(r)
i.h(0,q)
i.h(0,U.en(V.aH(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.f_(2000,1.0471975511965976,i,0.1,null)
f=new M.i9()
f.sbd(null)
f.sbm(0,null)
f.sbn(null)
r=E.eA(null,!0,null,"",null,null)
s=F.dA()
q=s.a
m=new V.Q(-1,-1,1)
m=m.C(0,Math.sqrt(m.I(m)))
e=q.bC(new V.bS(1,2,4,6),new V.b6(1,0,0,1),new V.am(-1,-1,0),new V.Z(0,1),m,null)
q=s.a
m=new V.Q(1,-1,1)
m=m.C(0,Math.sqrt(m.I(m)))
d=q.bC(new V.bS(0,3,4,6),new V.b6(0,0,1,1),new V.am(1,-1,0),new V.Z(1,1),m,null)
q=s.a
m=new V.Q(1,1,1)
m=m.C(0,Math.sqrt(m.I(m)))
c=q.bC(new V.bS(0,2,5,6),new V.b6(0,1,0,1),new V.am(1,1,0),new V.Z(1,0),m,null)
q=s.a
m=new V.Q(-1,1,1)
m=m.C(0,Math.sqrt(m.I(m)))
b=q.bC(new V.bS(0,2,4,7),new V.b6(1,1,0,1),new V.am(-1,1,0),new V.Z(0,0),m,null)
s.d.hR(H.c([e,d,c,b],[F.aW]))
s.aF()
r.sc3(0,s)
f.d=r
f.e=null
r=new O.k0()
r.b=1.0471975511965976
k=r.c
r.c=o
o.gu().h(0,r.gaT())
q=new D.O("boxTexture",k,r.c,r,[T.dF])
q.b=!0
r.R(q)
j=new V.z(1,1,1)
if(!J.a4(r.d,j)){k=r.d
r.d=j
q=new D.O("boxColor",k,j,r,[V.z])
q.b=!0
r.R(q)}r.e=null
f.sbn(r)
f.sbm(0,u)
f.sbd(g)
a=new M.iq()
r=O.da(E.aS)
a.d=r
r.b5(a.gfQ(),a.gfR())
a.e=null
a.f=null
a.r=null
a.x=null
a.sbd(null)
a.sbm(0,null)
a.sbn(null)
a.sbd(g)
a.sbn(n)
a.sbm(0,u)
a.d.h(0,t)
a.b.se1(0,!1)
r=M.aL
q=H.c([f,a],[r])
m=new M.i4()
m.bw(r)
m.e=!1
m.f=null
m.b5(m.gh7(),m.gh8())
m.ab(0,q)
r=v.d
if(r!==m){if(r!=null)r.gu().U(0,v.gdj())
v.d=m
m.gu().h(0,v.gdj())
v.fd()}r=new V.jA("controls",!0)
q=x.getElementById("controls")
r.c=q
if(q==null)H.r("Failed to find controls for RadioGroup")
r.dU(0,"Silver",new B.nC(n),!0)
r.ac(0,"Gold",new B.nD(n))
r.ac(0,"Glass",new B.nE(n))
r.ac(0,"Blue Glass",new B.nF(n))
r.ac(0,"Water Bubble",new B.nG(n))
r.ac(0,"No Reflection",new B.nH(n))
r.ac(0,"Pink Distort",new B.nI(n))
r.ac(0,"Cloak",new B.nJ(n))
r.ac(0,"White and Shiny",new B.nK(n))
r=new V.kc("bumpMaps",!0,new B.nL(n,v))
x=x.getElementById("bumpMaps")
r.c=x
if(x==null)H.r("Failed to find bumpMaps for Texture2DGroup")
r.ac(0,"../resources/BumpMap1.png",!0)
r.h(0,"../resources/BumpMap2.png")
r.h(0,"../resources/BumpMap3.png")
r.h(0,"../resources/BumpMap4.png")
r.h(0,"../resources/BumpMap5.png")
r.h(0,"../resources/ScrewBumpMap.png")
r.h(0,"../resources/CtrlPnlBumpMap.png")
x=v.z
if(x==null){x=D.M()
v.z=x}r={func:1,ret:-1,args:[D.A]}
q=H.l(new B.nM(z,n),r)
m=x.b
if(m==null){r=H.c([],[r])
x.b=r
x=r}else x=m
C.a.h(x,q)
V.nT(v)},
nC:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.z(0.2,0.2,0.2))
z.cy.sw(0,new V.z(0,0,0))
z=z.cx
z.sw(0,new V.z(1,1,1))}},
nD:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.11,0.11,0.1))
y=z.x
y.sw(0,new V.z(0.21,0.21,0.2))
z.cy.sw(0,new V.z(0,0,0))
z=z.cx
z.sw(0,new V.z(1,0.9,0.5))}},
nE:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.z(0.1,0.1,0.1))
z.cy.saG(0.4)
y=z.cy
y.sw(0,new V.z(0.6,0.6,0.6))
z=z.cx
z.sw(0,new V.z(0.4,0.4,0.4))}},
nF:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.z(0.1,0.1,0.1))
z.cy.saG(0.4)
y=z.cy
y.sw(0,new V.z(0.2,0.3,1))
z=z.cx
z.sw(0,new V.z(0.3,0.3,0.3))}},
nG:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.z(0.1,0.1,0.1))
z.cy.saG(0.6)
y=z.cy
y.sw(0,new V.z(0.8,0.8,0.8))
z=z.cx
z.sw(0,new V.z(0.2,0.2,0.2))}},
nH:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.z(0.1,0.1,0.1))
z.cy.saG(0.6)
y=z.cy
y.sw(0,new V.z(1,1,1))
z.cx.sw(0,new V.z(0,0,0))}},
nI:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.1,0.1,0.1))
y=z.x
y.sw(0,new V.z(0.1,0.1,0.1))
z.cy.saG(0.9)
y=z.cy
y.sw(0,new V.z(1,0.8,0.8))
z.cx.sw(0,new V.z(0,0,0))}},
nJ:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0,0,0))
y=z.x
y.sw(0,new V.z(0.1,0.1,0.1))
z.cy.saG(0.99)
y=z.cy
y.sw(0,new V.z(0.95,0.95,0.95))
z.cx.sw(0,new V.z(0,0,0))}},
nK:{"^":"m:0;a",
$0:function(){var z,y
z=this.a
y=z.r
y.sw(0,new V.z(0.3,0.3,0.3))
y=z.x
y.sw(0,new V.z(0.5,0.5,0.5))
z.cy.sw(0,new V.z(0,0,0))
z=z.cx
z.sw(0,new V.z(0.3,0.3,0.3))}},
nL:{"^":"m:22;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.ir(a)
x=z.c
if(x!==C.d){if(x===C.c)z.b8()
z.c=C.d
z.dO(null)
x=z.a
x.a=null
x.R(null)}z.dN(y)}},
nM:{"^":"m:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isA")
z=this.a
y=this.b
x=y.a
w=[P.f]
z.dV("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dV("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eH.prototype
return J.eG.prototype}if(typeof a=="string")return J.cC.prototype
if(a==null)return J.eI.prototype
if(typeof a=="boolean")return J.iJ.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.aQ=function(a){if(typeof a=="string")return J.cC.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.c6=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.nq=function(a){if(typeof a=="number")return J.cB.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cM.prototype
return a}
J.c7=function(a){if(typeof a=="string")return J.cC.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cM.prototype
return a}
J.aD=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
return a}if(a instanceof P.b)return a
return J.cY(a)}
J.a4=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).A(a,b)}
J.hF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nq(a).P(a,b)}
J.e6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aQ(a).j(a,b)}
J.d1=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hw(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c6(a).n(a,b,c)}
J.hG=function(a,b){return J.c7(a).G(a,b)}
J.hH=function(a,b,c){return J.aD(a).hd(a,b,c)}
J.hI=function(a,b,c,d){return J.aD(a).dW(a,b,c,d)}
J.hJ=function(a,b){return J.c7(a).a0(a,b)}
J.d2=function(a,b,c){return J.aQ(a).i_(a,b,c)}
J.cr=function(a,b){return J.c6(a).J(a,b)}
J.hK=function(a,b,c,d){return J.c6(a).aH(a,b,c,d)}
J.e7=function(a,b){return J.c6(a).H(a,b)}
J.hL=function(a){return J.aD(a).ghW(a)}
J.bG=function(a){return J.aD(a).gcA(a)}
J.ca=function(a){return J.L(a).gX(a)}
J.b4=function(a){return J.c6(a).ga1(a)}
J.ap=function(a){return J.aQ(a).gl(a)}
J.hM=function(a){return J.aD(a).gcX(a)}
J.hN=function(a){return J.aD(a).giV(a)}
J.e8=function(a){return J.c6(a).iM(a)}
J.hO=function(a,b){return J.aD(a).iO(a,b)}
J.hP=function(a,b){return J.aD(a).sa5(a,b)}
J.hQ=function(a,b,c){return J.c7(a).v(a,b,c)}
J.hR=function(a){return J.c7(a).j1(a)}
J.ab=function(a){return J.L(a).i(a)}
I.a9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.ct.prototype
C.l=W.d8.prototype
C.N=W.be.prototype
C.Q=J.q.prototype
C.a=J.bh.prototype
C.R=J.eG.prototype
C.f=J.eH.prototype
C.w=J.eI.prototype
C.i=J.cB.prototype
C.b=J.cC.prototype
C.Y=J.ci.prototype
C.a3=H.dw.prototype
C.a4=W.jg.prototype
C.E=J.jm.prototype
C.F=P.dy.prototype
C.G=W.ka.prototype
C.u=J.cM.prototype
C.H=W.bY.prototype
C.I=W.l9.prototype
C.K=new P.hW(!1)
C.J=new P.hV(C.K)
C.L=new P.jk()
C.M=new P.l_()
C.j=new P.lX()
C.c=new A.cw(0,"ColorSourceType.None")
C.h=new A.cw(1,"ColorSourceType.Solid")
C.d=new A.cw(2,"ColorSourceType.Texture2D")
C.e=new A.cw(3,"ColorSourceType.TextureCube")
C.q=new P.bJ(0)
C.O=new P.bJ(5e6)
C.P=new P.iC("element",!0,!1,!1,!1)
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
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

C.U=function(getTagFallback) {
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
C.V=function() {
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
C.W=function(hooks) {
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
C.X=function(hooks) {
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
C.z=H.c(I.a9([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.a9([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Z=H.c(I.a9(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.n=H.c(I.a9([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.a9([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a_=H.c(I.a9(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.A=H.c(I.a9([]),[P.f])
C.a0=H.c(I.a9([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.a9([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.a9([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.a9([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a1=H.c(I.a9([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.a9([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.a9(["bind","if","ref","repeat","syntax"]),[P.f])
C.t=H.c(I.a9(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a2=new H.i8(0,{},C.A,[P.f,P.f])
C.k=new P.kT(!1)
$.aF=0
$.bI=null
$.ef=null
$.dT=!1
$.hu=null
$.hp=null
$.hC=null
$.cX=null
$.d_=null
$.e0=null
$.bA=null
$.c2=null
$.c3=null
$.dU=!1
$.Y=C.j
$.aR=null
$.dc=null
$.ez=null
$.ey=null
$.eu=null
$.et=null
$.es=null
$.er=null
$.p=V.ja()
$.k2="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.k1="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f0=null
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
I.$lazy(y,x,w)}})(["eq","$get$eq",function(){return H.ht("_$dart_dartClosure")},"dj","$get$dj",function(){return H.ht("_$dart_js")},"fn","$get$fn",function(){return H.aM(H.cL({
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aM(H.cL({$method$:null,
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aM(H.cL(null))},"fq","$get$fq",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aM(H.cL(void 0))},"fv","$get$fv",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aM(H.ft(null))},"fr","$get$fr",function(){return H.aM(function(){try{null.$method$}catch(z){return z.message}}())},"fx","$get$fx",function(){return H.aM(H.ft(void 0))},"fw","$get$fw",function(){return H.aM(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dO","$get$dO",function(){return P.la()},"c4","$get$c4",function(){return[]},"fI","$get$fI",function(){return P.kX()},"fQ","$get$fQ",function(){return H.je(H.bz(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"he","$get$he",function(){return P.jH("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hl","$get$hl",function(){return P.n2()},"eo","$get$eo",function(){return{}},"fU","$get$fU",function(){return P.eN(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"dP","$get$dP",function(){return P.dn(P.f,P.ce)},"fL","$get$fL",function(){return Z.av(0)},"fJ","$get$fJ",function(){return Z.av(511)},"aC","$get$aC",function(){return Z.av(1)},"aZ","$get$aZ",function(){return Z.av(2)},"aY","$get$aY",function(){return Z.av(4)},"b_","$get$b_",function(){return Z.av(8)},"b0","$get$b0",function(){return Z.av(16)},"bW","$get$bW",function(){return Z.av(32)},"bX","$get$bX",function(){return Z.av(64)},"fK","$get$fK",function(){return Z.av(96)},"bx","$get$bx",function(){return Z.av(128)},"aX","$get$aX",function(){return Z.av(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.K},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.K,args:[F.at]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.K,args:[W.ac]},{func:1,ret:P.K,args:[D.A]},{func:1,ret:-1,args:[P.n,[P.i,E.aS]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.n,[P.i,V.aU]]},{func:1,ret:-1,args:[P.n,[P.i,M.aL]]},{func:1,ret:P.K,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,U.aj]]},{func:1,ret:P.f,args:[P.n]},{func:1,ret:P.D},{func:1,ret:-1,args:[P.n,[P.i,D.a7]]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:P.K,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.U,args:[W.H]},{func:1,ret:W.H},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.U,args:[P.f]},{func:1,ret:P.U,args:[W.R,P.f,P.f,W.cn]},{func:1,ret:P.U,args:[W.aK]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.T,args:[P.n]},{func:1,ret:P.K,args:[P.a6]},{func:1,ret:P.K,args:[P.f,,]},{func:1,ret:P.U,args:[P.D,P.D]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[W.bY]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:P.U,args:[[P.i,D.a7]]},{func:1,ret:-1,args:[P.f,P.n]},{func:1,ret:[P.N,P.f,P.f],args:[[P.N,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.n,args:[[P.e,P.n],P.n]},{func:1,ret:P.K,args:[,],opt:[,]},{func:1,ret:P.K,args:[F.aW,P.D,P.D]},{func:1,ret:[P.b1,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[P.bt]},{func:1,ret:P.U,args:[V.b5]},{func:1,ret:P.K,args:[W.af]},{func:1,ret:P.K,args:[W.R]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:W.R,args:[W.H]}]
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
if(x==y)H.nW(d||a)
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
Isolate.a9=a.a9
Isolate.dZ=a.dZ
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
if(typeof dartMainRunner==="function")dartMainRunner(B.hz,[])
else B.hz([])})})()
//# sourceMappingURL=test.dart.js.map
