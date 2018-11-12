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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isl)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cU(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cV=function(){}
var dart=[["","",,H,{"^":"",lC:{"^":"a;a"}}],["","",,J,{"^":"",
E:function(a){return void 0},
d_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cY==null){H.kU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.ep("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cq()]
if(v!=null)return v
v=H.kZ(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$cq(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
l:{"^":"a;",
q:function(a,b){return a===b},
gL:function(a){return H.bf(a)},
i:["cj",function(a){return"Instance of '"+H.aM(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h7:{"^":"l;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isL:1},
h9:{"^":"l;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isC:1},
cr:{"^":"l;",
gL:function(a){return 0},
i:["cl",function(a){return String(a)}]},
hD:{"^":"cr;"},
bL:{"^":"cr;"},
bE:{"^":"cr;",
i:function(a){var z=a[$.$get$dm()]
if(z==null)return this.cl(a)
return"JavaScript function for "+H.f(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbB:1},
aK:{"^":"l;$ti",
h:function(a,b){H.w(b,H.u(a,0))
if(!!a.fixed$length)H.W(P.a7("add"))
a.push(b)},
ek:function(a,b){if(!!a.fixed$length)H.W(P.a7("removeAt"))
if(b<0||b>=a.length)throw H.c(P.bJ(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var z
if(!!a.fixed$length)H.W(P.a7("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.as(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.H(z,y,H.f(a[y]))
return z.join(b)},
dX:function(a){return this.l(a,"")},
dQ:function(a,b,c){var z,y,x
H.h(b,{func:1,ret:P.L,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.c(P.as(a))}throw H.c(H.bZ())},
dP:function(a,b){return this.dQ(a,b,null)},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
aI:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a2(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
gdO:function(a){if(a.length>0)return a[0]
throw H.c(H.bZ())},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.bZ())},
bI:function(a,b){var z,y
H.h(b,{func:1,ret:P.L,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.as(a))}return!1},
M:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.co(a,"[","]")},
gI:function(a){return new J.aq(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.bf(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.W(P.a7("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bR(b,"newLength",null))
if(b<0)throw H.c(P.a2(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.U(b)
H.w(c,H.u(a,0))
if(!!a.immutable$list)H.W(P.a7("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
a[b]=c},
$isi:1,
$isd:1,
n:{
h6:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a2(a,0,4294967295,"length",null))
return J.dy(new Array(a),b)},
dy:function(a,b){return J.ba(H.b(a,[b]))},
ba:function(a){H.bP(a)
a.fixed$length=Array
return a}}},
lB:{"^":"aK;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bC:{"^":"l;",
bP:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.a7(""+a+".floor()"))},
T:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.a7(""+a+".round()"))},
c3:function(a,b){var z,y
if(b>20)throw H.c(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.c(H.az(b))
return a*b},
cb:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
co:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bC(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.bC(a,b)},
bC:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.a7("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
aA:function(a,b){var z
if(a>0)z=this.dq(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dq:function(a,b){return b>31?0:a>>>b},
a6:function(a,b){if(typeof b!=="number")throw H.c(H.az(b))
return a<b},
$ist:1,
$isP:1},
dz:{"^":"bC;",$isB:1},
h8:{"^":"bC;"},
bD:{"^":"l;",
b3:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b<0)throw H.c(H.aA(a,b))
if(b>=a.length)H.W(H.aA(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.c(H.aA(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.A(b)
if(typeof b!=="string")throw H.c(P.bR(b,null,null))
return a+b},
cg:function(a,b,c){var z
if(c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aH:function(a,b){return this.cg(a,b,0)},
ak:function(a,b,c){H.U(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.bJ(b,null,null))
if(b>c)throw H.c(P.bJ(b,null,null))
if(c>a.length)throw H.c(P.bJ(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.ak(a,b,null)},
ey:function(a){return a.toLowerCase()},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
e9:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
a4:function(a,b){return this.e9(a,b," ")},
dD:function(a,b,c){if(c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
return H.f8(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdO:1,
$ise:1}}],["","",,H,{"^":"",
bZ:function(){return new P.cx("No element")},
h5:function(){return new P.cx("Too many elements")},
n:{"^":"iL;a",
gk:function(a){return this.a.length},
m:function(a,b){return C.b.b3(this.a,b)},
$aseq:function(){return[P.B]},
$asq:function(){return[P.B]},
$asi:function(){return[P.B]},
$asd:function(){return[P.B]}},
du:{"^":"i;"},
c0:{"^":"du;$ti",
gI:function(a){return new H.ct(this,this.gk(this),0,[H.aB(this,"c0",0)])},
bc:function(a,b){return this.ck(0,H.h(b,{func:1,ret:P.L,args:[H.aB(this,"c0",0)]}))}},
ct:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bO(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.as(z))
w=this.c
if(typeof x!=="number")return H.G(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
hm:{"^":"i;a,b,$ti",
gI:function(a){return new H.hn(J.aG(this.a),this.b,this.$ti)},
gk:function(a){return J.aH(this.a)},
w:function(a,b){return this.b.$1(J.ci(this.a,b))},
$asi:function(a,b){return[b]}},
hn:{"^":"cp;0a,b,c,$ti",
v:function(){var z=this.b
if(z.v()){this.a=this.c.$1(z.gD(z))
return!0}this.a=null
return!1},
gD:function(a){return this.a},
$ascp:function(a,b){return[b]}},
ho:{"^":"c0;a,b,$ti",
gk:function(a){return J.aH(this.a)},
w:function(a,b){return this.b.$1(J.ci(this.a,b))},
$asc0:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
cK:{"^":"i;a,b,$ti",
gI:function(a){return new H.j0(J.aG(this.a),this.b,this.$ti)}},
j0:{"^":"cp;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bX:{"^":"a;$ti"},
eq:{"^":"a;$ti"},
iL:{"^":"c_+eq;"}}],["","",,H,{"^":"",
kN:function(a){return init.types[H.U(a)]},
kX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.E(a).$isx},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.c(H.az(a))
return z},
bf:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aM:function(a){var z,y,x,w,v,u,t,s,r
z=J.E(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.E(a).$isbL){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.aa(w,0)===36)w=C.b.aJ(w,1)
r=H.cZ(H.bP(H.aC(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hN:function(a){var z,y,x,w
z=H.b([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.az(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aA(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.az(w))}return H.dR(z)},
dS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.az(x))
if(x<0)throw H.c(H.az(x))
if(x>65535)return H.hN(a)}return H.dR(a)},
cw:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aA(z,10))>>>0,56320|z&1023)}throw H.c(P.a2(a,0,1114111,null,null))},
a_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hM:function(a){return a.b?H.a_(a).getUTCFullYear()+0:H.a_(a).getFullYear()+0},
hK:function(a){return a.b?H.a_(a).getUTCMonth()+1:H.a_(a).getMonth()+1},
hG:function(a){return a.b?H.a_(a).getUTCDate()+0:H.a_(a).getDate()+0},
hH:function(a){return a.b?H.a_(a).getUTCHours()+0:H.a_(a).getHours()+0},
hJ:function(a){return a.b?H.a_(a).getUTCMinutes()+0:H.a_(a).getMinutes()+0},
hL:function(a){return a.b?H.a_(a).getUTCSeconds()+0:H.a_(a).getSeconds()+0},
hI:function(a){return a.b?H.a_(a).getUTCMilliseconds()+0:H.a_(a).getMilliseconds()+0},
G:function(a){throw H.c(H.az(a))},
j:function(a,b){if(a==null)J.aH(a)
throw H.c(H.aA(a,b))},
aA:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,"index",null)
z=H.U(J.aH(a))
if(!(b<0)){if(typeof z!=="number")return H.G(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bJ(b,"index",null)},
kI:function(a,b,c){if(a>c)return new P.c2(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c2(a,c,!0,b,"end","Invalid value")
return new P.aj(!0,b,"end",null)},
az:function(a){return new P.aj(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f9})
z.name=""}else z.toString=H.f9
return z},
f9:function(){return J.a4(this.dartException)},
W:function(a){throw H.c(a)},
z:function(a){throw H.c(P.as(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cs(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dM(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ee()
u=$.$get$ef()
t=$.$get$eg()
s=$.$get$eh()
r=$.$get$el()
q=$.$get$em()
p=$.$get$ej()
$.$get$ei()
o=$.$get$eo()
n=$.$get$en()
m=v.S(y)
if(m!=null)return z.$1(H.cs(H.A(y),m))
else{m=u.S(y)
if(m!=null){m.method="call"
return z.$1(H.cs(H.A(y),m))}else{m=t.S(y)
if(m==null){m=s.S(y)
if(m==null){m=r.S(y)
if(m==null){m=q.S(y)
if(m==null){m=p.S(y)
if(m==null){m=s.S(y)
if(m==null){m=o.S(y)
if(m==null){m=n.S(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dM(H.A(y),m))}}return z.$1(new H.iK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aj(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e0()
return a},
b_:function(a){var z
if(a==null)return new H.eK(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eK(a)},
kK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.H(0,a[y],a[x])}return b},
kW:function(a,b,c,d,e,f){H.k(a,"$isbB")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.Y("Unsupported number of arguments for wrapped closure"))},
aY:function(a,b){var z
H.U(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kW)
a.$identity=z
return z},
ft:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.E(d).$isd){z.$reflectionInfo=d
x=H.hR(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cj(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ae
if(typeof u!=="number")return u.J()
$.ae=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dh(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kN,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.db:H.ck
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dh(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fq:function(a,b,c,d){var z=H.ck
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fs(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fq(y,!w,z,b)
if(y===0){w=$.ae
if(typeof w!=="number")return w.J()
$.ae=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b3
if(v==null){v=H.bT("self")
$.b3=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
if(typeof w!=="number")return w.J()
$.ae=w+1
t+=w
w="return function("+t+"){return this."
v=$.b3
if(v==null){v=H.bT("self")
$.b3=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fr:function(a,b,c,d){var z,y
z=H.ck
y=H.db
switch(b?-1:a){case 0:throw H.c(H.i_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fs:function(a,b){var z,y,x,w,v,u,t,s
z=$.b3
if(z==null){z=H.bT("self")
$.b3=z}y=$.da
if(y==null){y=H.bT("receiver")
$.da=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fr(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ae
if(typeof y!=="number")return y.J()
$.ae=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ae
if(typeof y!=="number")return y.J()
$.ae=y+1
return new Function(z+y+"}")()},
cU:function(a,b,c,d,e,f,g){var z,y
z=J.ba(H.bP(b))
H.U(c)
y=!!J.E(d).$isd?J.ba(d):d
return H.ft(a,z,c,y,!!e,f,g)},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ai(a,"String"))},
l2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ai(a,"num"))},
cS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ai(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ai(a,"int"))},
f6:function(a,b){throw H.c(H.ai(a,H.A(b).substring(3)))},
l4:function(a,b){var z=J.bO(b)
throw H.c(H.fo(a,z.ak(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.E(a)[b])return a
H.f6(a,b)},
b0:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.E(a)[b]
else z=!0
if(z)return a
H.l4(a,b)},
bP:function(a){if(a==null)return a
if(!!J.E(a).$isd)return a
throw H.c(H.ai(a,"List"))},
kY:function(a,b){if(a==null)return a
if(!!J.E(a).$isd)return a
if(J.E(a)[b])return a
H.f6(a,b)},
f_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.U(z)]
else return a.$S()}return},
bN:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f_(J.E(a))
if(z==null)return!1
y=H.f2(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.cP)return a
$.cP=!0
try{if(H.bN(a,b))return a
z=H.bQ(b)
y=H.ai(a,z)
throw H.c(y)}finally{$.cP=!1}},
cW:function(a,b){if(a!=null&&!H.cT(a,b))H.W(H.ai(a,H.bQ(b)))
return a},
eV:function(a){var z
if(a instanceof H.m){z=H.f_(J.E(a))
if(z!=null)return H.bQ(z)
return"Closure"}return H.aM(a)},
l9:function(a){throw H.c(new P.fy(H.A(a)))},
f0:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aC:function(a){if(a==null)return
return a.$ti},
mw:function(a,b,c){return H.b1(a["$as"+H.f(c)],H.aC(b))},
bw:function(a,b,c,d){var z
H.A(c)
H.U(d)
z=H.b1(a["$as"+H.f(c)],H.aC(b))
return z==null?null:z[d]},
aB:function(a,b,c){var z
H.A(b)
H.U(c)
z=H.b1(a["$as"+H.f(b)],H.aC(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.U(b)
z=H.aC(a)
return z==null?null:z[b]},
bQ:function(a){var z=H.aE(a,null)
return z},
aE:function(a,b){var z,y
H.y(b,"$isd",[P.e],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cZ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.f(b[y])}if('func' in a)return H.ku(a,b)
if('futureOr' in a)return"FutureOr<"+H.aE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ku:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.y(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.b.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aE(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aE(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aE(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aE(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.A(z[l])
n=n+m+H.aE(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cZ:function(a,b,c){var z,y,x,w,v,u
H.y(c,"$isd",[P.e],"$asd")
if(a==null)return""
z=new P.c3("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aE(u,c)}v="<"+z.i(0)+">"
return v},
b1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bv:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aC(a)
y=J.E(a)
if(y[b]==null)return!1
return H.eY(H.b1(y[d],z),null,c,null)},
y:function(a,b,c,d){var z,y
H.A(b)
H.bP(c)
H.A(d)
if(a==null)return a
z=H.bv(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cZ(c,0,null)
throw H.c(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eY:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aa(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aa(a[y],b,c[y],d))return!1
return!0},
mu:function(a,b,c){return a.apply(b,H.b1(J.E(b)["$as"+H.f(c)],H.aC(b)))},
f3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="C"||a===-1||a===-2||H.f3(z)}return!1},
cT:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="C"||b===-1||b===-2||H.f3(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bN(a,b)}y=J.E(a).constructor
x=H.aC(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aa(y,null,b,null)
return z},
w:function(a,b){if(a!=null&&!H.cT(a,b))throw H.c(H.ai(a,H.bQ(b)))
return a},
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aa(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="C")return!0
if('func' in c)return H.f2(a,b,c,d)
if('func' in a)return c.builtin$cls==="bB"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aa("type" in a?a.type:null,b,x,d)
else if(H.aa(a,b,x,d))return!0
else{if(!('$is'+"b8" in y.prototype))return!1
w=y.prototype["$as"+"b8"]
v=H.b1(w,z?a.slice(1):null)
return H.aa(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bQ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eY(H.b1(r,z),b,u,d)},
f2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aa(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aa(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aa(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aa(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l1(m,b,l,d)},
l1:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aa(c[w],d,a[w],b))return!1}return!0},
mv:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
kZ:function(a){var z,y,x,w,v,u
z=H.A($.f1.$1(a))
y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.A($.eX.$2(a,z))
if(z!=null){y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cg(x)
$.cb[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cf[z]=x
return x}if(v==="-"){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f5(a,x)
if(v==="*")throw H.c(P.ep(z))
if(init.leafTags[z]===true){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f5(a,x)},
f5:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d_(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cg:function(a){return J.d_(a,!1,null,!!a.$isx)},
l0:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cg(z)
else return J.d_(z,c,null,null)},
kU:function(){if(!0===$.cY)return
$.cY=!0
H.kV()},
kV:function(){var z,y,x,w,v,u,t,s
$.cb=Object.create(null)
$.cf=Object.create(null)
H.kQ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f7.$1(v)
if(u!=null){t=H.l0(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kQ:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.aX(C.B,H.aX(C.G,H.aX(C.n,H.aX(C.n,H.aX(C.F,H.aX(C.C,H.aX(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f1=new H.kR(v)
$.eX=new H.kS(u)
$.f7=new H.kT(t)},
aX:function(a,b){return a(b)||b},
f8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
d1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hQ:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ba(z)
y=z[0]
x=z[1]
return new H.hQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
it:{"^":"a;a,b,c,d,e,f",
S:function(a){var z,y,x
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
ah:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ek:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hA:{"^":"Q;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dM:function(a,b){return new H.hA(a,b==null?null:b.method)}}},
hc:{"^":"Q;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
n:{
cs:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hc(a,y,z?null:b.receiver)}}},
iK:{"^":"Q;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lc:{"^":"m:16;a",
$1:function(a){if(!!J.E(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eK:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isad:1},
m:{"^":"a;",
i:function(a){return"Closure '"+H.aM(this).trim()+"'"},
gc8:function(){return this},
$isbB:1,
gc8:function(){return this}},
e6:{"^":"m;"},
ic:{"^":"e6;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cj:{"^":"e6;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.bf(this.a)
else y=typeof z!=="object"?J.aF(z):H.bf(z)
return(y^H.bf(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aM(z)+"'")},
n:{
ck:function(a){return a.a},
db:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.cj("self","target","receiver","name")
y=J.ba(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iu:{"^":"Q;a",
i:function(a){return this.a},
n:{
ai:function(a,b){return new H.iu("TypeError: "+H.f(P.bV(a))+": type '"+H.eV(a)+"' is not a subtype of type '"+b+"'")}}},
fn:{"^":"Q;a",
i:function(a){return this.a},
n:{
fo:function(a,b){return new H.fn("CastError: "+H.f(P.bV(a))+": type '"+H.eV(a)+"' is not a subtype of type '"+b+"'")}}},
hZ:{"^":"Q;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
n:{
i_:function(a){return new H.hZ(a)}}},
aL:{"^":"dG;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gR:function(a){return new H.dD(this,[H.u(this,0)])},
bM:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bs(y,b)}else return this.dU(b)},
dU:function(a){var z=this.d
if(z==null)return!1
return this.b4(this.aQ(z,J.aF(a)&0x3ffffff),a)>=0},
m:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ay(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ay(w,b)
x=y==null?null:y.b
return x}else return this.dV(b)},
dV:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aQ(z,J.aF(a)&0x3ffffff)
x=this.b4(y,a)
if(x<0)return
return y[x].b},
H:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aT()
this.b=z}this.bm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aT()
this.c=y}this.bm(y,b,c)}else{x=this.d
if(x==null){x=this.aT()
this.d=x}w=J.aF(b)&0x3ffffff
v=this.aQ(x,w)
if(v==null)this.aX(x,w,[this.aU(b,c)])
else{u=this.b4(v,b)
if(u>=0)v[u].b=c
else v.push(this.aU(b,c))}}},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.as(this))
z=z.c}},
bm:function(a,b,c){var z
H.w(b,H.u(this,0))
H.w(c,H.u(this,1))
z=this.ay(a,b)
if(z==null)this.aX(a,b,this.aU(b,c))
else z.b=c},
cP:function(){this.r=this.r+1&67108863},
aU:function(a,b){var z,y
z=new H.hf(H.w(a,H.u(this,0)),H.w(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cP()
return z},
b4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dH(this)},
ay:function(a,b){return a[b]},
aQ:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
cM:function(a,b){delete a[b]},
bs:function(a,b){return this.ay(a,b)!=null},
aT:function(){var z=Object.create(null)
this.aX(z,"<non-identifier-key>",z)
this.cM(z,"<non-identifier-key>")
return z},
$isdC:1},
hf:{"^":"a;a,b,0c,0d"},
dD:{"^":"du;a,$ti",
gk:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.hg(z,z.r,this.$ti)
y.c=z.e
return y}},
hg:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.as(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kR:{"^":"m:16;a",
$1:function(a){return this.a(a)}},
kS:{"^":"m:39;a",
$2:function(a,b){return this.a(a,b)}},
kT:{"^":"m:38;a",
$1:function(a){return this.a(H.A(a))}},
ha:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdO:1,
n:{
hb:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.fW("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kJ:function(a){return J.dy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cO:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aA(b,a))},
kt:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.kI(a,b,c))
return b},
hu:{"^":"l;","%":"DataView;ArrayBufferView;cv|eE|eF|ht|eG|eH|av"},
cv:{"^":"hu;",
gk:function(a){return a.length},
$isx:1,
$asx:I.cV},
ht:{"^":"eF;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
$asbX:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
av:{"^":"eH;",
$asbX:function(){return[P.B]},
$asq:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]},
$isd:1,
$asd:function(){return[P.B]}},
lK:{"^":"av;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lL:{"^":"av;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lM:{"^":"av;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lN:{"^":"av;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lO:{"^":"av;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lP:{"^":"av;",
gk:function(a){return a.length},
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hv:{"^":"av;",
gk:function(a){return a.length},
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
aI:function(a,b,c){return new Uint8Array(a.subarray(b,H.kt(b,c,a.length)))},
"%":";Uint8Array"},
eE:{"^":"cv+q;"},
eF:{"^":"eE+bX;"},
eG:{"^":"cv+q;"},
eH:{"^":"eG+bX;"}}],["","",,P,{"^":"",
j2:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aY(new P.j4(z),1)).observe(y,{childList:true})
return new P.j3(z,y,x)}else if(self.setImmediate!=null)return P.kC()
return P.kD()},
mh:[function(a){self.scheduleImmediate(H.aY(new P.j5(H.h(a,{func:1,ret:-1})),0))},"$1","kB",4,0,9],
mi:[function(a){self.setImmediate(H.aY(new P.j6(H.h(a,{func:1,ret:-1})),0))},"$1","kC",4,0,9],
mj:[function(a){P.cC(C.h,H.h(a,{func:1,ret:-1}))},"$1","kD",4,0,9],
cC:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.af(a.a,1000)
return P.k8(z<0?0:z,b)},
ea:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.aN]})
z=C.e.af(a.a,1000)
return P.k9(z<0?0:z,b)},
kx:function(a,b){if(H.bN(a,{func:1,args:[P.a,P.ad]}))return b.ei(a,null,P.a,P.ad)
if(H.bN(a,{func:1,args:[P.a]}))return H.h(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kw:function(){var z,y
for(;z=$.aW,z!=null;){$.bt=null
y=z.b
$.aW=y
if(y==null)$.bs=null
z.a.$0()}},
mt:[function(){$.cQ=!0
try{P.kw()}finally{$.bt=null
$.cQ=!1
if($.aW!=null)$.$get$cL().$1(P.eZ())}},"$0","eZ",0,0,1],
eU:function(a){var z=new P.ew(H.h(a,{func:1,ret:-1}))
if($.aW==null){$.bs=z
$.aW=z
if(!$.cQ)$.$get$cL().$1(P.eZ())}else{$.bs.b=z
$.bs=z}},
kA:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.aW
if(z==null){P.eU(a)
$.bt=$.bs
return}y=new P.ew(a)
x=$.bt
if(x==null){y.b=z
$.bt=y
$.aW=y}else{y.b=x.b
x.b=y
$.bt=y
if(y.b==null)$.bs=y}},
l5:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.J
if(C.d===y){P.ca(null,null,C.d,a)
return}y.toString
P.ca(null,null,y,H.h(y.b_(a),z))},
e9:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.J
if(y===C.d){y.toString
return P.cC(a,b)}return P.cC(a,H.h(y.b_(b),z))},
ip:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aN]}
H.h(b,z)
y=$.J
if(y===C.d){y.toString
return P.ea(a,b)}x=y.bJ(b,P.aN)
$.J.toString
return P.ea(a,H.h(x,z))},
c9:function(a,b,c,d,e){var z={}
z.a=d
P.kA(new P.ky(z,e))},
eS:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
eT:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kz:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
ca:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b_(d):c.dz(d,-1)
P.eU(d)},
j4:{"^":"m:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j3:{"^":"m:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j5:{"^":"m:0;a",
$0:function(){this.a.$0()}},
j6:{"^":"m:0;a",
$0:function(){this.a.$0()}},
eO:{"^":"a;a,0b,c",
cA:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aY(new P.kb(this,b),0),a)
else throw H.c(P.a7("`setTimeout()` not found."))},
cB:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aY(new P.ka(this,a,Date.now(),b),0),a)
else throw H.c(P.a7("Periodic timer."))},
$isaN:1,
n:{
k8:function(a,b){var z=new P.eO(!0,0)
z.cA(a,b)
return z},
k9:function(a,b){var z=new P.eO(!1,0)
z.cB(a,b)
return z}}},
kb:{"^":"m:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ka:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.co(w,x)}z.c=y
this.d.$1(z)}},
aV:{"^":"a;0a,b,c,d,e,$ti",
e0:function(a){if(this.c!==6)return!0
return this.b.b.bb(H.h(this.d,{func:1,ret:P.L,args:[P.a]}),a.a,P.L,P.a)},
dT:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bN(z,{func:1,args:[P.a,P.ad]}))return H.cW(w.eq(z,a.a,a.b,null,y,P.ad),x)
else return H.cW(w.bb(H.h(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ao:{"^":"a;bB:a<,b,0df:c<,$ti",
c1:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.d){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kx(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ao(0,$.J,[c])
w=b==null?1:3
this.bn(new P.aV(x,w,a,b,[z,c]))
return x},
ev:function(a,b){return this.c1(a,null,b)},
bn:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaV")
this.c=a}else{if(z===2){y=H.k(this.c,"$isao")
z=y.a
if(z<4){y.bn(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ca(null,null,z,H.h(new P.jl(this,a),{func:1,ret:-1}))}},
by:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaV")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isao")
y=u.a
if(y<4){u.by(a)
return}this.a=y
this.c=u.c}z.a=this.az(a)
y=this.b
y.toString
P.ca(null,null,y,H.h(new P.jq(z,this),{func:1,ret:-1}))}},
aW:function(){var z=H.k(this.c,"$isaV")
this.c=null
return this.az(z)},
az:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bq:function(a){var z,y,x,w
z=H.u(this,0)
H.cW(a,{futureOr:1,type:z})
y=this.$ti
x=H.bv(a,"$isb8",y,"$asb8")
if(x){z=H.bv(a,"$isao",y,null)
if(z)P.ez(a,this)
else P.jm(a,this)}else{w=this.aW()
H.w(a,z)
this.a=4
this.c=a
P.br(this,w)}},
aM:[function(a,b){var z
H.k(b,"$isad")
z=this.aW()
this.a=8
this.c=new P.a5(a,b)
P.br(this,z)},function(a){return this.aM(a,null)},"eC","$2","$1","gcH",4,2,30],
$isb8:1,
n:{
jm:function(a,b){var z,y,x
b.a=1
try{a.c1(new P.jn(b),new P.jo(b),null)}catch(x){z=H.a3(x)
y=H.b_(x)
P.l5(new P.jp(b,z,y))}},
ez:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isao")
if(z>=4){y=b.aW()
b.a=a.a
b.c=a.c
P.br(b,y)}else{y=H.k(b.c,"$isaV")
b.a=2
b.c=a
a.by(y)}},
br:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa5")
y=y.b
u=v.a
t=v.b
y.toString
P.c9(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.br(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa5")
y=y.b
u=r.a
t=r.b
y.toString
P.c9(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.jt(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.js(x,b,r).$0()}else if((y&2)!==0)new P.jr(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.E(y).$isb8){if(y.a>=4){n=H.k(t.c,"$isaV")
t.c=null
b=t.az(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ez(y,t)
return}}m=b.b
n=H.k(m.c,"$isaV")
m.c=null
b=m.az(n)
y=x.a
u=x.b
if(!y){H.w(u,H.u(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa5")
m.a=8
m.c=u}z.a=m
y=m}}}},
jl:{"^":"m:0;a,b",
$0:function(){P.br(this.a,this.b)}},
jq:{"^":"m:0;a,b",
$0:function(){P.br(this.b,this.a.a)}},
jn:{"^":"m:11;a",
$1:function(a){var z=this.a
z.a=0
z.bq(a)}},
jo:{"^":"m:28;a",
$2:function(a,b){this.a.aM(a,H.k(b,"$isad"))},
$1:function(a){return this.$2(a,null)}},
jp:{"^":"m:0;a,b,c",
$0:function(){this.a.aM(this.b,this.c)}},
jt:{"^":"m:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c_(H.h(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.b_(v)
if(this.d){w=H.k(this.a.a.c,"$isa5").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa5")
else u.b=new P.a5(y,x)
u.a=!0
return}if(!!J.E(z).$isb8){if(z instanceof P.ao&&z.gbB()>=4){if(z.gbB()===8){w=this.b
w.b=H.k(z.gdf(),"$isa5")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ev(new P.ju(t),null)
w.a=!1}}},
ju:{"^":"m:27;a",
$1:function(a){return this.a}},
js:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.w(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.bb(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.b_(t)
x=this.a
x.b=new P.a5(z,y)
x.a=!0}}},
jr:{"^":"m:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa5")
w=this.c
if(w.e0(z)&&w.e!=null){v=this.b
v.b=w.dT(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.b_(u)
w=H.k(this.a.a.c,"$isa5")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a5(y,x)
s.a=!0}}},
ew:{"^":"a;a,0b"},
cy:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.ao(0,$.J,[P.B])
z.a=0
this.e_(new P.ig(z,this),!0,new P.ih(z,y),y.gcH())
return y}},
ig:{"^":"m;a,b",
$1:function(a){H.w(a,H.aB(this.b,"cy",0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.aB(this.b,"cy",0)]}}},
ih:{"^":"m:0;a,b",
$0:function(){this.b.bq(this.a.a)}},
e3:{"^":"a;$ti"},
ie:{"^":"a;"},
aN:{"^":"a;"},
a5:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isQ:1},
ki:{"^":"a;",$ismg:1},
ky:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
jO:{"^":"ki;",
er:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.d===$.J){a.$0()
return}P.eS(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.b_(x)
P.c9(null,null,this,z,H.k(y,"$isad"))}},
es:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.d===$.J){a.$1(b)
return}P.eT(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.b_(x)
P.c9(null,null,this,z,H.k(y,"$isad"))}},
dz:function(a,b){return new P.jQ(this,H.h(a,{func:1,ret:b}),b)},
b_:function(a){return new P.jP(this,H.h(a,{func:1,ret:-1}))},
bJ:function(a,b){return new P.jR(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
c_:function(a,b){H.h(a,{func:1,ret:b})
if($.J===C.d)return a.$0()
return P.eS(null,null,this,a,b)},
bb:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.J===C.d)return a.$1(b)
return P.eT(null,null,this,a,b,c,d)},
eq:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.J===C.d)return a.$2(b,c)
return P.kz(null,null,this,a,b,c,d,e,f)},
ei:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
jQ:{"^":"m;a,b,c",
$0:function(){return this.a.c_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jP:{"^":"m:1;a,b",
$0:function(){return this.a.er(this.b)}},
jR:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.es(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hh:function(a,b,c){H.bP(a)
return H.y(H.kK(a,new H.aL(0,0,[b,c])),"$isdC",[b,c],"$asdC")},
dE:function(a,b){return new H.aL(0,0,[a,b])},
bG:function(a,b,c,d){return new P.jB(0,0,[d])},
h4:function(a,b,c){var z,y
if(P.cR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bu()
C.a.h(y,a)
try{P.kv(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.e4(b,H.kY(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
co:function(a,b,c){var z,y,x
if(P.cR(a))return b+"..."+c
z=new P.c3(b)
y=$.$get$bu()
C.a.h(y,a)
try{x=z
x.a=P.e4(x.gab(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gab()+c
y=z.gab()
return y.charCodeAt(0)==0?y:y},
cR:function(a){var z,y
for(z=0;y=$.$get$bu(),z<y.length;++z)if(a===y[z])return!0
return!1},
kv:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.f(z.gD(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.v()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.v();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dF:function(a,b){var z,y
z=P.bG(null,null,null,b)
for(y=J.aG(a);y.v();)z.h(0,H.w(y.gD(y),b))
return z},
dH:function(a){var z,y,x
z={}
if(P.cR(a))return"{...}"
y=new P.c3("")
try{C.a.h($.$get$bu(),a)
x=y
x.a=x.gab()+"{"
z.a=!0
J.fd(a,new P.hl(z,y))
z=y
z.a=z.gab()+"}"}finally{z=$.$get$bu()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gab()
return z.charCodeAt(0)==0?z:z},
jB:{"^":"jv;a,0b,0c,0d,0e,0f,r,$ti",
gI:function(a){var z=new P.eD(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$isc8")!=null}else{y=this.cI(b)
return y}},
cI:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.bw(z,a),a)>=0},
h:function(a,b){var z,y
H.w(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cN()
this.b=z}return this.bo(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cN()
this.c=y}return this.bo(y,b)}else return this.cC(0,b)},
cC:function(a,b){var z,y,x
H.w(b,H.u(this,0))
z=this.d
if(z==null){z=P.cN()
this.d=z}y=this.br(b)
x=z[y]
if(x==null)z[y]=[this.aL(b)]
else{if(this.aP(x,b)>=0)return!1
x.push(this.aL(b))}return!0},
G:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.d9(0,b)},
d9:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bw(z,b)
x=this.aP(y,b)
if(x<0)return!1
this.bD(y.splice(x,1)[0])
return!0},
bo:function(a,b){H.w(b,H.u(this,0))
if(H.k(a[b],"$isc8")!=null)return!1
a[b]=this.aL(b)
return!0},
bz:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isc8")
if(z==null)return!1
this.bD(z)
delete a[b]
return!0},
bp:function(){this.r=this.r+1&67108863},
aL:function(a){var z,y
z=new P.c8(H.w(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bp()
return z},
bD:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bp()},
br:function(a){return J.aF(a)&0x3ffffff},
bw:function(a,b){return a[this.br(b)]},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
n:{
cN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
c8:{"^":"a;a,0b,0c"},
eD:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.as(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.w(z.a,H.u(this,0))
this.c=z.b
return!0}}}},
jv:{"^":"i0;"},
c_:{"^":"jC;",$isi:1,$isd:1},
q:{"^":"a;$ti",
gI:function(a){return new H.ct(a,this.gk(a),0,[H.bw(this,a,"q",0)])},
w:function(a,b){return this.m(a,b)},
ex:function(a,b){var z,y,x
z=H.b([],[H.bw(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.G(x)
if(!(y<x))break
C.a.H(z,y,this.m(a,y));++y}return z},
ew:function(a){return this.ex(a,!0)},
i:function(a){return P.co(a,"[","]")}},
dG:{"^":"Z;"},
hl:{"^":"m:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
Z:{"^":"a;$ti",
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.bw(this,a,"Z",0),H.bw(this,a,"Z",1)]})
for(z=J.aG(this.gR(a));z.v();){y=z.gD(z)
b.$2(y,this.m(a,y))}},
gk:function(a){return J.aH(this.gR(a))},
i:function(a){return P.dH(a)},
$isR:1},
i2:{"^":"a;$ti",
Z:function(a,b){var z
for(z=J.aG(H.y(b,"$isi",this.$ti,"$asi"));z.v();)this.h(0,z.gD(z))},
i:function(a){return P.co(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d6("index"))
if(b<0)H.W(P.a2(b,0,null,"index",null))
for(z=new P.eD(this,this.r,this.$ti),z.c=this.e,y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
$isi:1},
i0:{"^":"i2;"},
jC:{"^":"a+q;"}}],["","",,P,{"^":"",cm:{"^":"a;$ti"},bU:{"^":"ie;$ti"},fN:{"^":"cm;",
$ascm:function(){return[P.e,[P.d,P.B]]}},h0:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},h_:{"^":"bU;a",
cJ:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.j(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.c3("")
if(w>b)v.a+=C.b.ak(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fh(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbU:function(){return[P.e,P.e]}},iO:{"^":"fN;a"},iP:{"^":"bU;",
dF:function(a,b,c){var z,y,x,w
z=a.length
P.dT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kg(0,0,x)
if(w.cO(a,b,z)!==z)w.bE(C.b.b3(a,z-1),0)
return C.L.aI(x,0,w.b)},
dE:function(a){return this.dF(a,0,null)},
$asbU:function(){return[P.e,[P.d,P.B]]}},kg:{"^":"a;a,b,c",
bE:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.j(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.j(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.j(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.j(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.j(z,y)
z[y]=128|a&63
return!1}},
cO:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.b3(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.aa(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bE(w,C.b.aa(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.j(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.j(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.j(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.j(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fP:function(a){var z=J.E(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.aM(a)+"'"},
hi:function(a,b,c,d){var z,y
H.w(b,d)
z=J.h6(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.H(z,y,b)
return H.y(z,"$isd",[d],"$asd")},
hj:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gI(a);x.v();)C.a.h(y,H.w(x.gD(x),c))
if(b)return y
return H.y(J.ba(y),"$isd",z,"$asd")},
cz:function(a,b,c){var z,y
z=P.B
H.y(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.y(a,"$isaK",[z],"$asaK")
y=a.length
c=P.dT(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a6()
z=c<y}else z=!0
return H.dS(z?C.a.aI(a,b,c):a)}return P.ii(a,b,c)},
ii:function(a,b,c){var z,y,x
H.y(a,"$isi",[P.B],"$asi")
z=J.aG(a)
for(y=0;y<b;++y)if(!z.v())throw H.c(P.a2(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gD(z))
return H.dS(x)},
hS:function(a,b,c){return new H.ha(a,H.hb(a,!1,!0,!1))},
eQ:function(a,b,c,d){var z,y,x,w,v,u
H.y(a,"$isd",[P.B],"$asd")
if(c===C.l){z=$.$get$eP().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.dE(H.w(b,H.aB(c,"cm",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cw(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fP(a)},
Y:function(a){return new P.ey(a)},
d0:function(a){H.l3(a)},
L:{"^":"a;"},
"+bool":0,
b5:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b5))return!1
return this.a===b.a&&this.b===b.b},
gL:function(a){var z=this.a
return(z^C.e.aA(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fA(H.hM(this))
y=P.bz(H.hK(this))
x=P.bz(H.hG(this))
w=P.bz(H.hH(this))
v=P.bz(H.hJ(this))
u=P.bz(H.hL(this))
t=P.fB(H.hI(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fA:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bz:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"P;"},
"+double":0,
aJ:{"^":"a;a",
p:function(a,b){return new P.aJ(C.e.T(this.a*b))},
a6:function(a,b){return C.e.a6(this.a,H.k(b,"$isaJ").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aJ))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.aJ(0-y).i(0)
x=z.$1(C.e.af(y,6e7)%60)
w=z.$1(C.e.af(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.e.af(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
n:{
dt:function(a,b,c,d,e,f){return new P.aJ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"m:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"m:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"a;"},
dN:{"^":"Q;",
i:function(a){return"Throw of null."}},
aj:{"^":"Q;a,b,c,d",
gaO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaN:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gaO()+y+x
if(!this.a)return w
v=this.gaN()
u=P.bV(this.b)
return w+v+": "+H.f(u)},
n:{
bR:function(a,b,c){return new P.aj(!0,a,b,c)},
d6:function(a){return new P.aj(!1,null,a,"Must not be null")}}},
c2:{"^":"aj;e,f,a,b,c,d",
gaO:function(){return"RangeError"},
gaN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
n:{
bJ:function(a,b,c){return new P.c2(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.c2(b,c,!0,a,d,"Invalid value")},
dT:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.G(a)
if(0<=a){if(typeof c!=="number")return H.G(c)
z=a>c}else z=!0
if(z)throw H.c(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.G(c)
z=b>c}else z=!0
if(z)throw H.c(P.a2(b,a,c,"end",f))
return b}return c}}},
h1:{"^":"aj;e,k:f>,a,b,c,d",
gaO:function(){return"RangeError"},
gaN:function(){if(J.fa(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
n:{
H:function(a,b,c,d,e){var z=H.U(e!=null?e:J.aH(b))
return new P.h1(b,z,!0,a,c,"Index out of range")}}},
iM:{"^":"Q;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
a7:function(a){return new P.iM(a)}}},
iJ:{"^":"Q;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
ep:function(a){return new P.iJ(a)}}},
cx:{"^":"Q;a",
i:function(a){return"Bad state: "+this.a},
n:{
e2:function(a){return new P.cx(a)}}},
fv:{"^":"Q;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bV(z))+"."},
n:{
as:function(a){return new P.fv(a)}}},
hB:{"^":"a;",
i:function(a){return"Out of Memory"},
$isQ:1},
e0:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isQ:1},
fy:{"^":"Q;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ey:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fW:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.ak(x,0,75)+"..."
return y+"\n"+x}},
bB:{"^":"a;"},
B:{"^":"P;"},
"+int":0,
i:{"^":"a;$ti",
bc:["ck",function(a,b){var z=H.aB(this,"i",0)
return new H.cK(this,H.h(b,{func:1,ret:P.L,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gI(this)
for(y=0;z.v();)++y
return y},
ga7:function(a){var z,y
z=this.gI(this)
if(!z.v())throw H.c(H.bZ())
y=z.gD(z)
if(z.v())throw H.c(H.h5())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d6("index"))
if(b<0)H.W(P.a2(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.v();){x=z.gD(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
i:function(a){return P.h4(this,"(",")")}},
cp:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
R:{"^":"a;$ti"},
C:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
P:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gL:function(a){return H.bf(this)},
i:function(a){return"Instance of '"+H.aM(this)+"'"},
toString:function(){return this.i(this)}},
ad:{"^":"a;"},
e:{"^":"a;",$isdO:1},
"+String":0,
c3:{"^":"a;ab:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e4:function(a,b,c){var z=J.aG(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gD(z))
while(z.v())}else{a+=H.f(z.gD(z))
for(;z.v();)a=a+c+H.f(z.gD(z))}return a}}}}],["","",,W,{"^":"",
d5:function(a){var z=document.createElement("a")
return z},
dg:function(a,b){var z=document.createElement("canvas")
return z},
fK:function(a,b,c){var z,y
z=document.body
y=(z&&C.m).U(z,a,b,c)
y.toString
z=W.v
z=new H.cK(new W.a9(y),H.h(new W.fL(),{func:1,ret:P.L,args:[z]}),[z])
return H.k(z.ga7(z),"$isK")},
fM:function(a){H.k(a,"$isX")
return"wheel"},
b6:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fg(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
c6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eC:function(a,b,c,d){var z,y
z=W.c6(W.c6(W.c6(W.c6(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eW:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.d)return a
return z.bJ(a,b)},
a6:{"^":"K;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ld:{"^":"l;0k:length=","%":"AccessibleNodeList"},
le:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lf:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
d8:{"^":"a6;",$isd8:1,"%":"HTMLBaseElement"},
fm:{"^":"l;","%":";Blob"},
bS:{"^":"a6;",$isbS:1,"%":"HTMLBodyElement"},
cl:{"^":"a6;",
bd:function(a,b,c){var z=a.getContext(b,P.kE(c,null))
return z},
$iscl:1,
"%":"HTMLCanvasElement"},
ll:{"^":"v;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ln:{"^":"fx;0k:length=","%":"CSSPerspective"},
b4:{"^":"l;",$isb4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lo:{"^":"ja;0k:length=",
ca:function(a,b){var z=a.getPropertyValue(this.cF(a,b))
return z==null?"":z},
cF:function(a,b){var z,y
z=$.$get$dk()
y=z[b]
if(typeof y==="string")return y
y=this.dr(a,b)
z[b]=y
return y},
dr:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fG()+b
if(z in a)return z
return b},
gb0:function(a){return a.bottom},
ga_:function(a){return a.height},
gah:function(a){return a.left},
gba:function(a){return a.right},
gav:function(a){return a.top},
ga0:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fw:{"^":"a;",
gah:function(a){return this.ca(a,"left")}},
dl:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fx:{"^":"l;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lp:{"^":"dl;0k:length=","%":"CSSTransformValue"},
lq:{"^":"dl;0k:length=","%":"CSSUnparsedValue"},
lr:{"^":"l;0k:length=","%":"DataTransferItemList"},
aI:{"^":"a6;",$isaI:1,"%":"HTMLDivElement"},
ls:{"^":"l;",
i:function(a){return String(a)},
"%":"DOMException"},
lt:{"^":"jc;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a0,P.P]]},
$asq:function(){return[[P.a0,P.P]]},
$isi:1,
$asi:function(){return[[P.a0,P.P]]},
$isd:1,
$asd:function(){return[[P.a0,P.P]]},
$asr:function(){return[[P.a0,P.P]]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"l;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga0(a))+" x "+H.f(this.ga_(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bv(b,"$isa0",[P.P],"$asa0")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gah(b)&&a.top===z.gav(b)&&this.ga0(a)===z.ga0(b)&&this.ga_(a)===z.ga_(b)},
gL:function(a){return W.eC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga0(a)&0x1FFFFFFF,this.ga_(a)&0x1FFFFFFF)},
gb0:function(a){return a.bottom},
ga_:function(a){return a.height},
gah:function(a){return a.left},
gba:function(a){return a.right},
gav:function(a){return a.top},
ga0:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.P]},
"%":";DOMRectReadOnly"},
lu:{"^":"je;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.e]},
$asq:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$isd:1,
$asd:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
lv:{"^":"l;0k:length=","%":"DOMTokenList"},
j9:{"^":"c_;bv:a<,b",
gk:function(a){return this.b.length},
m:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.k(z[b],"$isK")},
h:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var z=this.ew(this)
return new J.aq(z,z.length,0,[H.u(z,0)])},
$asq:function(){return[W.K]},
$asi:function(){return[W.K]},
$asd:function(){return[W.K]}},
K:{"^":"v;0eu:tagName=",
gdw:function(a){return new W.jf(a)},
gbK:function(a){return new W.j9(a,a.children)},
gbL:function(a){return P.hP(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.P)},
i:function(a){return a.localName},
U:["aK",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dw
if(z==null){z=H.b([],[W.ag])
y=new W.dL(z)
C.a.h(z,W.eA(null))
C.a.h(z,W.eL())
$.dw=y
d=y}else d=z
z=$.dv
if(z==null){z=new W.eR(d)
$.dv=z
c=z}else{z.a=d
c=z}}if($.ak==null){z=document
y=z.implementation.createHTMLDocument("")
$.ak=y
$.cn=y.createRange()
y=$.ak
y.toString
y=y.createElement("base")
H.k(y,"$isd8")
y.href=z.baseURI
$.ak.head.appendChild(y)}z=$.ak
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbS")}z=$.ak
if(!!this.$isbS)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.ak.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.J,a.tagName)){$.cn.selectNodeContents(x)
w=$.cn.createContextualFragment(b)}else{x.innerHTML=b
w=$.ak.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.ak.body
if(x==null?z!=null:x!==z)J.d4(x)
c.be(w)
document.adoptNode(w)
return w},function(a,b,c){return this.U(a,b,c,null)},"dG",null,null,"geU",5,5,null],
cf:function(a,b,c,d){a.textContent=null
a.appendChild(this.U(a,b,c,d))},
ce:function(a,b){return this.cf(a,b,null,null)},
$isK:1,
"%":";Element"},
fL:{"^":"m:14;",
$1:function(a){return!!J.E(H.k(a,"$isv")).$isK}},
a1:{"^":"l;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
X:{"^":"l;",
bG:["ci",function(a,b,c,d){H.h(c,{func:1,args:[W.a1]})
if(c!=null)this.cD(a,b,c,!1)}],
cD:function(a,b,c,d){return a.addEventListener(b,H.aY(H.h(c,{func:1,args:[W.a1]}),1),!1)},
$isX:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eI|eJ|eM|eN"},
b7:{"^":"fm;",$isb7:1,"%":"File"},
lw:{"^":"jk;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$asr:function(){return[W.b7]},
"%":"FileList"},
lx:{"^":"X;0k:length=","%":"FileWriter"},
ly:{"^":"a6;0k:length=","%":"HTMLFormElement"},
b9:{"^":"l;",$isb9:1,"%":"Gamepad"},
lz:{"^":"l;0k:length=","%":"History"},
lA:{"^":"jx;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$asr:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bb:{"^":"cD;",$isbb:1,"%":"KeyboardEvent"},
lE:{"^":"l;",
i:function(a){return String(a)},
"%":"Location"},
lF:{"^":"l;0k:length=","%":"MediaList"},
lG:{"^":"X;",
bG:function(a,b,c,d){H.h(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.ci(a,b,c,!1)},
"%":"MessagePort"},
lH:{"^":"jD;",
m:function(a,b){return P.ap(a.get(H.A(b)))},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.hq(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hq:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lI:{"^":"jE;",
m:function(a,b){return P.ap(a.get(H.A(b)))},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.hr(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hr:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"l;",$isbc:1,"%":"MimeType"},
lJ:{"^":"jG;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asr:function(){return[W.bc]},
"%":"MimeTypeArray"},
ab:{"^":"cD;",$isab:1,"%":"PointerEvent;DragEvent|MouseEvent"},
a9:{"^":"c_;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.e2("No elements"))
if(y>1)throw H.c(P.e2("More than one element"))
return z.firstChild},
Z:function(a,b){var z,y,x,w
H.y(b,"$isi",[W.v],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gI:function(a){var z=this.a.childNodes
return new W.dx(z,z.length,-1,[H.bw(C.M,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asq:function(){return[W.v]},
$asi:function(){return[W.v]},
$asd:function(){return[W.v]}},
v:{"^":"X;0b7:previousSibling=",
ej:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.cj(a):z},
$isv:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lQ:{"^":"l;",
eh:[function(a){return a.previousNode()},"$0","gb7",1,0,20],
"%":"NodeIterator"},
hw:{"^":"jI;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$asr:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
be:{"^":"l;0k:length=",$isbe:1,"%":"Plugin"},
lU:{"^":"jM;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.be]},
$asq:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asr:function(){return[W.be]},
"%":"PluginArray"},
lW:{"^":"jS;",
m:function(a,b){return P.ap(a.get(H.A(b)))},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.hY(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"RTCStatsReport"},
hY:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lY:{"^":"a6;0k:length=","%":"HTMLSelectElement"},
bg:{"^":"X;",$isbg:1,"%":"SourceBuffer"},
lZ:{"^":"eJ;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asr:function(){return[W.bg]},
"%":"SourceBufferList"},
bh:{"^":"l;",$isbh:1,"%":"SpeechGrammar"},
m_:{"^":"jY;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asr:function(){return[W.bh]},
"%":"SpeechGrammarList"},
bi:{"^":"l;0k:length=",$isbi:1,"%":"SpeechRecognitionResult"},
m1:{"^":"k0;",
m:function(a,b){return a.getItem(H.A(b))},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.id(z))
return z},
gk:function(a){return a.length},
$asZ:function(){return[P.e,P.e]},
$isR:1,
$asR:function(){return[P.e,P.e]},
"%":"Storage"},
id:{"^":"m:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"l;",$isbj:1,"%":"CSSStyleSheet|StyleSheet"},
ij:{"^":"a6;",
U:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=W.fK("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).Z(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
m3:{"^":"a6;",
U:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.r.U(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.ga7(z)
x.toString
z=new W.a9(x)
w=z.ga7(z)
y.toString
w.toString
new W.a9(y).Z(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
m4:{"^":"a6;",
U:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.r.U(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.ga7(z)
y.toString
x.toString
new W.a9(y).Z(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
e7:{"^":"a6;",$ise7:1,"%":"HTMLTemplateElement"},
bk:{"^":"X;",$isbk:1,"%":"TextTrack"},
bl:{"^":"X;",$isbl:1,"%":"TextTrackCue|VTTCue"},
m6:{"^":"k7;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asr:function(){return[W.bl]},
"%":"TextTrackCueList"},
m7:{"^":"eN;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asr:function(){return[W.bk]},
"%":"TextTrackList"},
m8:{"^":"l;0k:length=","%":"TimeRanges"},
bm:{"^":"l;",$isbm:1,"%":"Touch"},
aO:{"^":"cD;",$isaO:1,"%":"TouchEvent"},
m9:{"^":"kd;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asr:function(){return[W.bm]},
"%":"TouchList"},
ma:{"^":"l;0k:length=","%":"TrackDefaultList"},
mc:{"^":"l;",
eh:[function(a){return a.previousNode()},"$0","gb7",1,0,20],
"%":"TreeWalker"},
cD:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
me:{"^":"l;",
i:function(a){return String(a)},
"%":"URL"},
mf:{"^":"X;0k:length=","%":"VideoTrackList"},
bq:{"^":"ab;",
gdJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.a7("deltaY is not supported"))},
gdI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.a7("deltaX is not supported"))},
$isbq:1,
"%":"WheelEvent"},
j1:{"^":"X;",
de:function(a,b){return a.requestAnimationFrame(H.aY(H.h(b,{func:1,ret:-1,args:[P.P]}),1))},
cN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ex:{"^":"v;",$isex:1,"%":"Attr"},
mk:{"^":"kk;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b4]},
$asq:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$asr:function(){return[W.b4]},
"%":"CSSRuleList"},
ml:{"^":"fH;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bv(b,"$isa0",[P.P],"$asa0")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gah(b)&&a.top===z.gav(b)&&a.width===z.ga0(b)&&a.height===z.ga_(b)},
gL:function(a){return W.eC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga_:function(a){return a.height},
ga0:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mn:{"^":"km;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asr:function(){return[W.b9]},
"%":"GamepadList"},
mq:{"^":"ko;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$isi:1,
$asi:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$asr:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mr:{"^":"kq;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bi]},
$asq:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asr:function(){return[W.bi]},
"%":"SpeechRecognitionResultList"},
ms:{"^":"ks;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asr:function(){return[W.bj]},
"%":"StyleSheetList"},
j7:{"^":"dG;bv:a<",
E:function(a,b){var z,y,x,w,v
H.h(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gR(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gR:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.k(z[w],"$isex")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asZ:function(){return[P.e,P.e]},
$asR:function(){return[P.e,P.e]}},
jf:{"^":"j7;a",
m:function(a,b){return this.a.getAttribute(H.A(b))},
gk:function(a){return this.gR(this).length}},
jg:{"^":"cy;a,b,c,$ti",
e_:function(a,b,c,d){var z=H.u(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.T(this.a,this.b,a,!1,z)}},
mm:{"^":"jg;a,b,c,$ti"},
jh:{"^":"e3;a,b,c,d,e,$ti",
ds:function(){var z=this.d
if(z!=null&&this.a<=0)J.fc(this.b,this.c,z,!1)},
n:{
T:function(a,b,c,d,e){var z=c==null?null:W.eW(new W.ji(c),W.a1)
z=new W.jh(0,a,b,z,!1,[e])
z.ds()
return z}}},
ji:{"^":"m:6;a",
$1:function(a){return this.a.$1(H.k(a,"$isa1"))}},
bM:{"^":"a;a",
cw:function(a){var z,y
z=$.$get$cM()
if(z.a===0){for(y=0;y<262;++y)z.H(0,C.I[y],W.kO())
for(y=0;y<12;++y)z.H(0,C.j[y],W.kP())}},
ag:function(a){return $.$get$eB().M(0,W.b6(a))},
a3:function(a,b,c){var z,y,x
z=W.b6(a)
y=$.$get$cM()
x=y.m(0,H.f(z)+"::"+b)
if(x==null)x=y.m(0,"*::"+b)
if(x==null)return!1
return H.cS(x.$4(a,b,c,this))},
$isag:1,
n:{
eA:function(a){var z,y
z=W.d5(null)
y=window.location
z=new W.bM(new W.jT(z,y))
z.cw(a)
return z},
mo:[function(a,b,c,d){H.k(a,"$isK")
H.A(b)
H.A(c)
H.k(d,"$isbM")
return!0},"$4","kO",16,0,17],
mp:[function(a,b,c,d){var z,y,x,w,v
H.k(a,"$isK")
H.A(b)
H.A(c)
z=H.k(d,"$isbM").a
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
return z},"$4","kP",16,0,17]}},
r:{"^":"a;$ti",
gI:function(a){return new W.dx(a,this.gk(a),-1,[H.bw(this,a,"r",0)])}},
dL:{"^":"a;a",
ag:function(a){return C.a.bI(this.a,new W.hy(a))},
a3:function(a,b,c){return C.a.bI(this.a,new W.hx(a,b,c))},
$isag:1},
hy:{"^":"m:18;a",
$1:function(a){return H.k(a,"$isag").ag(this.a)}},
hx:{"^":"m:18;a,b,c",
$1:function(a){return H.k(a,"$isag").a3(this.a,this.b,this.c)}},
jU:{"^":"a;",
cz:function(a,b,c,d){var z,y,x
this.a.Z(0,c)
z=b.bc(0,new W.jV())
y=b.bc(0,new W.jW())
this.b.Z(0,z)
x=this.c
x.Z(0,C.K)
x.Z(0,y)},
ag:function(a){return this.a.M(0,W.b6(a))},
a3:["cn",function(a,b,c){var z,y
z=W.b6(a)
y=this.c
if(y.M(0,H.f(z)+"::"+b))return this.d.du(c)
else if(y.M(0,"*::"+b))return this.d.du(c)
else{y=this.b
if(y.M(0,H.f(z)+"::"+b))return!0
else if(y.M(0,"*::"+b))return!0
else if(y.M(0,H.f(z)+"::*"))return!0
else if(y.M(0,"*::*"))return!0}return!1}],
$isag:1},
jV:{"^":"m:19;",
$1:function(a){return!C.a.M(C.j,H.A(a))}},
jW:{"^":"m:19;",
$1:function(a){return C.a.M(C.j,H.A(a))}},
k4:{"^":"jU;e,a,b,c,d",
a3:function(a,b,c){if(this.cn(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.M(0,b)
return!1},
n:{
eL:function(){var z,y,x,w,v
z=P.e
y=P.dF(C.i,z)
x=H.u(C.i,0)
w=H.h(new W.k5(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.k4(y,P.bG(null,null,null,z),P.bG(null,null,null,z),P.bG(null,null,null,z),null)
y.cz(null,new H.ho(C.i,w,[x,z]),v,null)
return y}}},
k5:{"^":"m:23;",
$1:function(a){return"TEMPLATE::"+H.f(H.A(a))}},
k3:{"^":"a;",
ag:function(a){var z=J.E(a)
if(!!z.$isdY)return!1
z=!!z.$iscA
if(z&&W.b6(a)==="foreignObject")return!1
if(z)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.b.aH(b,"on"))return!1
return this.ag(a)},
$isag:1},
dx:{"^":"a;a,b,c,0d,$ti",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fb(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
ag:{"^":"a;"},
jT:{"^":"a;a,b",$ismd:1},
eR:{"^":"a;a",
be:function(a){new W.kh(this).$2(a,null)},
an:function(a,b){if(b==null)J.d4(a)
else b.removeChild(a)},
dh:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fe(a)
x=y.gbv().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.a4(a)}catch(t){H.a3(t)}try{u=W.b6(a)
this.dg(H.k(a,"$isK"),b,z,v,u,H.k(y,"$isR"),H.A(x))}catch(t){if(H.a3(t) instanceof P.aj)throw t
else{this.an(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dg:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.an(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ag(a)){this.an(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.an(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gR(f)
y=H.b(z.slice(0),[H.u(z,0)])
for(x=f.gR(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.j(y,x)
w=y[x]
if(!this.a.a3(a,J.fi(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.f(e)+" "+w+'="'+H.f(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.E(a).$ise7)this.be(a.content)},
$islR:1},
kh:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dh(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.an(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.ff(z)}catch(w){H.a3(w)
v=H.k(z,"$isv")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isv")}}},
ja:{"^":"l+fw;"},
jb:{"^":"l+q;"},
jc:{"^":"jb+r;"},
jd:{"^":"l+q;"},
je:{"^":"jd+r;"},
jj:{"^":"l+q;"},
jk:{"^":"jj+r;"},
jw:{"^":"l+q;"},
jx:{"^":"jw+r;"},
jD:{"^":"l+Z;"},
jE:{"^":"l+Z;"},
jF:{"^":"l+q;"},
jG:{"^":"jF+r;"},
jH:{"^":"l+q;"},
jI:{"^":"jH+r;"},
jL:{"^":"l+q;"},
jM:{"^":"jL+r;"},
jS:{"^":"l+Z;"},
eI:{"^":"X+q;"},
eJ:{"^":"eI+r;"},
jX:{"^":"l+q;"},
jY:{"^":"jX+r;"},
k0:{"^":"l+Z;"},
k6:{"^":"l+q;"},
k7:{"^":"k6+r;"},
eM:{"^":"X+q;"},
eN:{"^":"eM+r;"},
kc:{"^":"l+q;"},
kd:{"^":"kc+r;"},
kj:{"^":"l+q;"},
kk:{"^":"kj+r;"},
kl:{"^":"l+q;"},
km:{"^":"kl+r;"},
kn:{"^":"l+q;"},
ko:{"^":"kn+r;"},
kp:{"^":"l+q;"},
kq:{"^":"kp+r;"},
kr:{"^":"l+q;"},
ks:{"^":"kr+r;"}}],["","",,P,{"^":"",
ap:function(a){var z,y,x,w,v
if(a==null)return
z=P.dE(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.A(y[w])
z.H(0,v,a[v])}return z},
kE:function(a,b){var z={}
a.E(0,new P.kF(z))
return z},
ds:function(){var z=$.dr
if(z==null){z=J.ch(window.navigator.userAgent,"Opera",0)
$.dr=z}return z},
fG:function(){var z,y
z=$.dn
if(z!=null)return z
y=$.dp
if(y==null){y=J.ch(window.navigator.userAgent,"Firefox",0)
$.dp=y}if(y)z="-moz-"
else{y=$.dq
if(y==null){y=!P.ds()&&J.ch(window.navigator.userAgent,"Trident/",0)
$.dq=y}if(y)z="-ms-"
else z=P.ds()?"-o-":"-webkit-"}$.dn=z
return z},
kF:{"^":"m:12;a",
$2:function(a,b){this.a[a]=b}},
fT:{"^":"c_;a,b",
gaR:function(){var z,y,x
z=this.b
y=H.aB(z,"q",0)
x=W.K
return new H.hm(new H.cK(z,H.h(new P.fU(),{func:1,ret:P.L,args:[y]}),[y]),H.h(new P.fV(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aH(this.gaR().a)},
m:function(a,b){var z=this.gaR()
return z.b.$1(J.ci(z.a,b))},
gI:function(a){var z=P.hj(this.gaR(),!1,W.K)
return new J.aq(z,z.length,0,[H.u(z,0)])},
$asq:function(){return[W.K]},
$asi:function(){return[W.K]},
$asd:function(){return[W.K]}},
fU:{"^":"m:14;",
$1:function(a){return!!J.E(H.k(a,"$isv")).$isK}},
fV:{"^":"m:40;",
$1:function(a){return H.b0(H.k(a,"$isv"),"$isK")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jy:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jN:{"^":"a;$ti",
gba:function(a){var z=this.a
if(typeof z!=="number")return z.J()
return H.w(z+this.c,H.u(this,0))},
gb0:function(a){var z=this.b
if(typeof z!=="number")return z.J()
return H.w(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bv(b,"$isa0",[P.P],"$asa0")
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gah(b)
if(z==null?x==null:z===x){x=this.b
w=y.gav(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.J()
w=H.u(this,0)
if(H.w(z+this.c,w)===y.gba(b)){if(typeof x!=="number")return x.J()
z=H.w(x+this.d,w)===y.gb0(b)}else z=!1}else z=!1}else z=!1
return z},
gL:function(a){var z,y,x,w,v
z=this.a
y=J.aF(z)
x=this.b
w=J.aF(x)
if(typeof z!=="number")return z.J()
v=H.u(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.J()
v=H.w(x+this.d,v)
return P.jy(P.c7(P.c7(P.c7(P.c7(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a0:{"^":"jN;ah:a>,av:b>,a0:c>,a_:d>,$ti",n:{
hP:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a6()
if(c<0)z=-c*0
else z=c
H.w(z,e)
if(typeof d!=="number")return d.a6()
if(d<0)y=-d*0
else y=d
return new P.a0(a,b,z,H.w(y,e),[e])}}}}],["","",,P,{"^":"",bF:{"^":"l;",$isbF:1,"%":"SVGLength"},lD:{"^":"jA;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bF]},
$isi:1,
$asi:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$asr:function(){return[P.bF]},
"%":"SVGLengthList"},bI:{"^":"l;",$isbI:1,"%":"SVGNumber"},lS:{"^":"jK;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bI]},
$isi:1,
$asi:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asr:function(){return[P.bI]},
"%":"SVGNumberList"},lV:{"^":"l;0k:length=","%":"SVGPointList"},dY:{"^":"cA;",$isdY:1,"%":"SVGScriptElement"},m2:{"^":"k2;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.e]},
$isi:1,
$asi:function(){return[P.e]},
$isd:1,
$asd:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},cA:{"^":"K;",
gbK:function(a){return new P.fT(a,new W.a9(a))},
U:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ag])
C.a.h(z,W.eA(null))
C.a.h(z,W.eL())
C.a.h(z,new W.k3())
c=new W.eR(new W.dL(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.m).dG(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.ga7(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscA:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bK:{"^":"l;",$isbK:1,"%":"SVGTransform"},mb:{"^":"kf;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bK]},
$isi:1,
$asi:function(){return[P.bK]},
$isd:1,
$asd:function(){return[P.bK]},
$asr:function(){return[P.bK]},
"%":"SVGTransformList"},jz:{"^":"l+q;"},jA:{"^":"jz+r;"},jJ:{"^":"l+q;"},jK:{"^":"jJ+r;"},k1:{"^":"l+q;"},k2:{"^":"k1+r;"},ke:{"^":"l+q;"},kf:{"^":"ke+r;"}}],["","",,P,{"^":"",lg:{"^":"l;0k:length=","%":"AudioBuffer"},lh:{"^":"j8;",
m:function(a,b){return P.ap(a.get(H.A(b)))},
E:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new P.fk(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"AudioParamMap"},fk:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},li:{"^":"X;0k:length=","%":"AudioTrackList"},fl:{"^":"X;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lT:{"^":"fl;0k:length=","%":"OfflineAudioContext"},j8:{"^":"l+Z;"}}],["","",,P,{"^":"",dW:{"^":"l;",$isdW:1,"%":"WebGLRenderingContext"},iE:{"^":"l;",$isiE:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",m0:{"^":"k_;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.ap(a.item(b))},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[[P.R,,,]]},
$isi:1,
$asi:function(){return[[P.R,,,]]},
$isd:1,
$asd:function(){return[[P.R,,,]]},
$asr:function(){return[[P.R,,,]]},
"%":"SQLResultSetRowList"},jZ:{"^":"l+q;"},k_:{"^":"jZ+r;"}}],["","",,O,{"^":"",fu:{"^":"a;0a,0b,0c,0d,$ti",
cd:function(a,b,c){var z={func:1,ret:-1,args:[P.B,[P.i,H.u(this,0)]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.cd(a,null,b)},
d5:function(a){H.y(a,"$isi",this.$ti,"$asi")
return!0},
cQ:function(a,b){var z
H.y(b,"$isi",this.$ti,"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gI:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.u(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$isi:1,
n:{
di:function(a){var z=new O.fu([a])
z.a=H.b([],[a])
return z}}},cu:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
ct:function(a){var z=this.b
if(!(z==null))z.P(a)},
a8:function(){return this.ct(null)},
gar:function(a){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.dJ()},
bX:function(a){var z=this.a
if(a==null)C.a.h(z,V.dJ())
else C.a.h(z,a)
this.a8()},
b6:function(){var z=this.a
if(z.length>0){z.pop()
this.a8()}}}}],["","",,E,{"^":"",d9:{"^":"a;"},at:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0O:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbh:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().G(0,this.gbT())
y=this.c
if(y!=null)y.gC().h(0,this.gbT())
x=new D.M("shape",z,this.c,this,[F.e_])
x.b=!0
this.W(x)}},
sas:function(a){var z,y
if(!J.N(this.r,a)){z=this.r
if(z!=null)z.gC().G(0,this.gbS())
if(a!=null)a.gC().h(0,this.gbS())
this.r=a
y=new D.M("mover",z,a,this,[U.c1])
y.b=!0
this.W(y)}},
c5:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sc6(z.a+z.d*b.y)
z.sbV(0,z.b+z.e*b.y)
z.sbZ(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.au(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.p(0,V.au(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.p(0,V.au(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.aF(0)}u=z.x}else u=null
if(!J.N(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.bH])
s.b=!0
this.W(s)}for(z=this.y.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.v();)z.d.c5(0,b)},
aj:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gar(z))
else C.a.h(z.a,y.p(0,z.gar(z)))
z.a8()
a.bY(this.f)
z=a.dy
x=(z&&C.a).gaD(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.m(0,"Depth")
if(w==null){z=a.a
w=new A.fD(z,"Depth")
w.cr(z,"Depth")
y=$.fF
v=$.fE
w.c=y
w.d=v
w.e=w.bu(y,35633)
w.f=w.bu(w.d,35632)
y=z.createProgram()
w.r=y
z.attachShader(y,w.e)
z.attachShader(w.r,w.f)
z.linkProgram(w.r)
if(!H.cS(z.getProgramParameter(w.r,35714))){u=z.getProgramInfoLog(w.r)
z.deleteProgram(w.r)
H.W(P.Y("Failed to link shader: "+H.f(u)))}w.dl()
w.dn()
w.z=w.x.m(0,"posAttr")
w.Q=H.b0(w.y.m(0,"objClr"),"$iscG")
w.ch=H.b0(w.y.m(0,"fogClr"),"$iscG")
w.cx=H.b0(w.y.m(0,"fogStart"),"$iscE")
w.cy=H.b0(w.y.m(0,"fogStop"),"$iscE")
w.db=H.b0(w.y.m(0,"viewObjMat"),"$iscH")
w.dx=H.b0(w.y.m(0,"projMat"),"$iscH")
if(a.fr.bM(0,"Depth"))H.W(P.Y('Shader cache already contains a shader by the name "Depth".'))
a.fr.H(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.dd)){this.e=null
y=null}if(y==null){z=this.d.dA(new Z.j_(a.a),$.$get$an())
y=z.dM($.$get$an())
v=x.a
y.e=v.z.c
this.e=z
z=v}a.a.useProgram(z.r)
z.x.dL()
y=x.b
v=z.Q
v.toString
t=y.a
s=y.b
y=y.c
v.a.uniform3f(v.d,t,s,y)
y=x.c
s=z.ch
s.toString
t=y.a
v=y.b
y=y.c
s.a.uniform3f(s.d,t,v,y)
y=x.d
v=z.cx
v.a.uniform1f(v.d,y)
y=x.e
v=z.cy
v.a.uniform1f(v.d,y)
y=a.cy
y=y.gar(y)
v=z.dx
v.toString
v.bg(y.c2(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gar(y)
v=a.dx
v=y.p(0,v.gar(v))
a.cx=v
y=v}z=z.db
z.toString
z.bg(y.c2(0,!0))
y=this.e
y.aZ(a)
y.aj(a)
y.ez(a)
y=x.a
y.toString
a.a.useProgram(null)
y.x.dK()}for(z=this.y.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.v();)z.d.aj(a)
a.bW()
a.dx.b6()},
W:function(a){var z=this.z
if(!(z==null))z.P(a)},
V:function(){return this.W(null)},
e8:[function(a){H.k(a,"$isF")
this.e=null
this.W(a)},function(){return this.e8(null)},"eZ","$1","$0","gbT",0,2,2],
e7:[function(a){this.W(H.k(a,"$isF"))},function(){return this.e7(null)},"eY","$1","$0","gbS",0,2,2],
e5:[function(a){this.W(H.k(a,"$isF"))},function(){return this.e5(null)},"eW","$1","$0","gbR",0,2,2],
eV:[function(a,b){var z,y,x,w,v,u,t,s
H.y(b,"$isi",[E.at],"$asi")
for(z=b.length,y=this.gbR(),x={func:1,ret:-1,args:[D.F]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gO()==null){t=new D.bA()
t.d=0
u.sO(t)}t=u.gO()
t.toString
H.h(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.V()},"$2","ge4",8,0,7],
eX:[function(a,b){var z,y,x,w,v
H.y(b,"$isi",[E.at],"$asi")
for(z=b.length,y=this.gbR(),x=0;x<b.length;b.length===z||(0,H.z)(b),++x){w=b[x]
if(w!=null){if(w.gO()==null){v=new D.bA()
v.d=0
w.sO(v)}w.gO().G(0,y)}}this.V()},"$2","ge6",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdK:1},hT:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cp:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.b5(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cu()
y=[V.bH]
z.a=H.b([],y)
z.gC().h(0,new E.hV(this))
this.cy=z
z=new O.cu()
z.a=H.b([],y)
z.gC().h(0,new E.hW(this))
this.db=z
z=new O.cu()
z.a=H.b([],y)
z.gC().h(0,new E.hX(this))
this.dx=z
z=H.b([],[O.cB])
this.dy=z
C.a.h(z,null)
this.fr=new H.aL(0,0,[P.e,A.dZ])},
bY:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
bW:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hU:function(a,b){var z=new E.hT(a,b)
z.cp(a,b)
return z}}},hV:{"^":"m:5;a",
$1:function(a){var z
H.k(a,"$isF")
z=this.a
z.z=null
z.ch=null}},hW:{"^":"m:5;a",
$1:function(a){var z
H.k(a,"$isF")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hX:{"^":"m:5;a",
$1:function(a){var z
H.k(a,"$isF")
z=this.a
z.ch=null
z.cx=null}},il:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0O:x@,0y,0z,0Q,0ch,0cx,0cy",
cv:[function(a){var z
H.k(a,"$isF")
z=this.x
if(!(z==null))z.P(a)
this.eo()},function(){return this.cv(null)},"cu","$1","$0","gbk",0,2,2],
gdS:function(){var z,y,x
z=Date.now()
y=C.e.af(P.dt(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.b5(z,!1)
return x/y},
bA:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.G(z)
x=C.c.bP(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.c.bP(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e9(C.h,this.gen())}},
eo:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.h(new E.io(this),{func:1,ret:-1,args:[P.P]})
C.u.cN(z)
C.u.de(z,W.eW(y,P.P))}},"$0","gen",0,0,1],
em:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bA()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.b5(w,!1)
x.y=P.dt(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.a8()
w=x.db
C.a.sk(w.a,0)
w.a8()
w=x.dx
C.a.sk(w.a,0)
w.a8()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aj(this.e)}x=this.z
if(!(x==null))x.P(null)}catch(v){z=H.a3(v)
y=H.b_(v)
P.d0("Error: "+H.f(z))
P.d0("Stack: "+H.f(y))
throw H.c(z)}},
n:{
im:function(a,b,c,d,e){var z,y,x,w
z=J.E(a)
if(!!z.$iscl)return E.e8(a,!0,!0,!0,!1)
y=W.dg(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbK(a).h(0,y)
w=E.e8(y,!0,!0,!0,!1)
w.a=a
return w},
e8:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.il()
y=P.hh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
x=C.f.bd(a,"webgl",y)
x=H.k(x==null?C.f.bd(a,"experimental-webgl",y):x,"$isdW")
if(x==null)H.W(P.Y("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hU(x,a)
w=new T.ik(x)
w.b=H.U(x.getParameter(3379))
w.c=H.U(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iN(a)
v=new X.hd()
v.c=new X.bd(!1,!1,!1)
v.d=P.bG(null,null,null,P.B)
w.b=v
v=new X.hs(w)
v.f=0
v.r=new V.S(0,0)
v.x=new V.S(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hk(w)
v.r=0
v.x=new V.S(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.is(w)
v.e=0
v.f=new V.S(0,0)
v.r=new V.S(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e3,P.a]])
w.z=v
u=document
t=W.ab
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.T(u,"contextmenu",H.h(w.gcU(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.h(w.gcX(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.h(w.gcR(),q),!1,r))
v=w.z
p=W.bb
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.h(w.gcZ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.h(w.gcY(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.h(w.gd0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.h(w.gd2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.h(w.gd1(),s),!1,t))
p=w.z
o=W.bq;(p&&C.a).h(p,W.T(a,H.A(W.fM(a)),H.h(w.gd3(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.h(w.gcV(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.h(w.gcW(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.h(w.gd4(),q),!1,r))
r=w.z
q=W.aO
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.h(w.gd8(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.h(w.gd6(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.h(w.gd7(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.b5(Date.now(),!1)
z.cy=0
z.bA()
return z}}},io:{"^":"m:25;a",
$1:function(a){var z
H.l2(a)
z=this.a
if(z.ch){z.ch=!1
z.em()}}}}],["","",,Z,{"^":"",ev:{"^":"a;a,b",n:{
cJ:function(a,b,c){var z
H.y(c,"$isd",[P.B],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cO(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,z)}}},dc:{"^":"d9;a,b,c,d,e",
aZ:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.a3(y)
x=P.Y('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.f(z))
throw H.c(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},j_:{"^":"a;a",$islj:1},dd:{"^":"a;a,0b,c,d",
dM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aZ:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aZ(a)},
ez:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aj:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.j(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.e]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$ism5:1},bY:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aM(this.c)+"'")+"]"}},er:{"^":"a;a",
gbi:function(a){var z,y
z=this.a
y=(z&$.$get$an().a)!==0?3:0
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bo().a)!==0)y+=3
if((z&$.$get$bp().a)!==0)y+=4
if((z&$.$get$aU().a)!==0)++y
return(z&$.$get$aP().a)!==0?y+4:y},
dv:function(a){var z,y,x
z=$.$get$an()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eu()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.er))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.e])
y=this.a
if((y&$.$get$an().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
n:{
a8:function(a){return new Z.er(a)}}}}],["","",,D,{"^":"",fp:{"^":"a;"},bA:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.F]}
H.h(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
G:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[D.F]})
z=this.a
z=z==null?null:C.a.M(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).G(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.M(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).G(z,b)||y}return y},
P:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.F(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.E(y,new D.fQ(z))
y=this.b
if(!(y==null))C.a.E(y,new D.fR(z))
z=this.b
if(!(z==null))C.a.sk(z,0)
return!0},
ep:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.P(y)}}},
aF:function(a){return this.ep(a,!0,!1)},
n:{
al:function(){var z=new D.bA()
z.d=0
return z}}},fQ:{"^":"m:22;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.F]})
z=this.a.a
z.b
a.$1(z)}},fR:{"^":"m:22;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.F]})
z=this.a.a
z.b
a.$1(z)}},F:{"^":"a;a,0b"},h2:{"^":"F;c,d,a,0b,$ti"},h3:{"^":"F;c,d,a,0b,$ti"},M:{"^":"F;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",de:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
n:{"^":"lk<"}},dA:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},hd:{"^":"a;0a,0b,0c,0d",
ee:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ea:function(a){this.c=a.b
this.d.G(0,a.a)
return!1}},hk:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b5:function(a,b){this.r=a.a
return!1},
au:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cc()
if(typeof z!=="number")return z.c7()
this.r=(z&~y)>>>0
return!1},
at:function(a,b){return!1},
ef:function(a){return!1},
d_:function(a,b,c){return}},bd:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bd))return!1
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
return z+(this.c?"Shift+":"")}},hs:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b5:function(a,b){this.f=a.a
return!1},
au:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cc()
if(typeof z!=="number")return z.c7()
this.f=(z&~y)>>>0
return!1},
at:function(a,b){return!1},
eg:function(a,b){return!1}},hF:{"^":"F;"},ir:{"^":"hF;x,y,z,Q,ch,c,d,e,a,0b"},is:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bx:function(a,b){var z,y,x,w
H.y(a,"$isd",[V.S],"$asd")
z=new P.b5(Date.now(),!1)
y=a.length>0?a[0]:new V.S(0,0)
x=this.a.gdB()
w=new X.ir(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ed:function(a){var z
H.y(a,"$isd",[V.S],"$asd")
z=this.b
if(z==null)return!1
z.P(this.bx(a,!0))
return!0},
eb:function(a){var z
H.y(a,"$isd",[V.S],"$asd")
z=this.c
if(z==null)return!1
z.P(this.bx(a,!0))
return!0},
ec:function(a){H.y(a,"$isd",[V.S],"$asd")
return!1}},iN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gdB:function(){var z=this.a
return V.dV(0,0,(z&&C.f).gbL(z).c,C.f.gbL(z).d)},
bt:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dA(z,new X.bd(y,a.altKey,a.shiftKey))},
ae:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bd(y,a.altKey,a.shiftKey)},
aY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bd(y,a.altKey,a.shiftKey)},
a2:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.X()
v=z.top
if(typeof x!=="number")return x.X()
return new V.S(y-w,x-v)},
am:function(a){return new V.bn(a.movementX,a.movementY)},
aV:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.S])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.c.T(u.pageX)
C.c.T(u.pageY)
s=z.left
C.c.T(u.pageX)
C.a.h(y,new V.S(t-s,C.c.T(u.pageY)-z.top))}return y},
a1:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.de(z,new X.bd(y,a.altKey,a.shiftKey))},
aS:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.X()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.X()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
eJ:[function(a){this.f=!0},"$1","gcX",4,0,6],
eD:[function(a){this.f=!1},"$1","gcR",4,0,6],
eG:[function(a){H.k(a,"$isab")
if(this.f&&this.aS(a))a.preventDefault()},"$1","gcU",4,0,3],
eL:[function(a){var z
H.k(a,"$isbb")
if(!this.f)return
z=this.bt(a)
this.b.ee(z)},"$1","gcZ",4,0,21],
eK:[function(a){var z
H.k(a,"$isbb")
if(!this.f)return
z=this.bt(a)
this.b.ea(z)},"$1","gcY",4,0,21],
eM:[function(a){var z,y,x,w
H.k(a,"$isab")
z=this.a
z.focus()
this.f=!0
this.ae(a)
if(this.x){y=this.a1(a)
x=this.am(a)
if(this.d.b5(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a1(a)
w=this.a2(a)
if(this.c.b5(y,w))a.preventDefault()},"$1","gd0",4,0,3],
eO:[function(a){var z,y,x
H.k(a,"$isab")
this.ae(a)
z=this.a1(a)
if(this.x){y=this.am(a)
if(this.d.au(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.au(z,x))a.preventDefault()},"$1","gd2",4,0,3],
eI:[function(a){var z,y,x
H.k(a,"$isab")
if(!this.aS(a)){this.ae(a)
z=this.a1(a)
if(this.x){y=this.am(a)
if(this.d.au(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.au(z,x))a.preventDefault()}},"$1","gcW",4,0,3],
eN:[function(a){var z,y,x
H.k(a,"$isab")
this.ae(a)
z=this.a1(a)
if(this.x){y=this.am(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.at(z,x))a.preventDefault()},"$1","gd1",4,0,3],
eH:[function(a){var z,y,x
H.k(a,"$isab")
if(!this.aS(a)){this.ae(a)
z=this.a1(a)
if(this.x){y=this.am(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.at(z,x))a.preventDefault()}},"$1","gcV",4,0,3],
eP:[function(a){var z,y
H.k(a,"$isbq")
this.ae(a)
z=new V.bn((a&&C.t).gdI(a),C.t.gdJ(a)).K(0,180)
if(this.x){if(this.d.ef(z))a.preventDefault()
return}if(this.r)return
y=this.a2(a)
if(this.c.eg(z,y))a.preventDefault()},"$1","gd3",4,0,29],
eQ:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a1(this.y)
v=this.a2(this.y)
this.d.d_(w,v,x)}},"$1","gd4",4,0,6],
eT:[function(a){var z
H.k(a,"$isaO")
this.a.focus()
this.f=!0
this.aY(a)
z=this.aV(a)
if(this.e.ed(z))a.preventDefault()},"$1","gd8",4,0,10],
eR:[function(a){var z
H.k(a,"$isaO")
this.aY(a)
z=this.aV(a)
if(this.e.eb(z))a.preventDefault()},"$1","gd6",4,0,10],
eS:[function(a){var z
H.k(a,"$isaO")
this.aY(a)
z=this.aV(a)
if(this.e.ec(z))a.preventDefault()},"$1","gd7",4,0,10]}}],["","",,V,{"^":"",
lm:[function(a,b){if(typeof b!=="number")return b.X()
if(typeof a!=="number")return H.G(a)
return Math.abs(b-a)<=1e-9},"$2","hp",8,0,26],
d2:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.cb(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.b.a4("null",c)
return C.b.a4(C.c.c3($.p.$2(a,0)?0:a,b),c+b+1)},
cc:function(a,b,c){var z,y,x,w,v
H.y(a,"$isd",[P.t],"$asd")
z=H.b([],[P.e])
for(y=0,x=0;x<4;++x){w=V.D(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.j(z,v)
C.a.H(z,v,C.b.a4(z[v],y))}return z},
bx:{"^":"a;a,b,c",
p:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.bx(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bx))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
by:{"^":"a;a,b,c,d",
p:function(a,b){var z,y,x,w
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
return new V.by(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.by))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
bH:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c2:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isbH")
z=this.a
y=a7.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.G(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.G(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.G(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.p()
if(typeof s!=="number")return H.G(s)
r=a7.b
if(typeof r!=="number")return H.G(r)
q=a7.f
if(typeof q!=="number")return H.G(q)
p=a7.z
if(typeof p!=="number")return H.G(p)
o=a7.cy
if(typeof o!=="number")return H.G(o)
n=a7.c
if(typeof n!=="number")return H.G(n)
m=a7.r
if(typeof m!=="number")return H.G(m)
l=a7.Q
if(typeof l!=="number")return H.G(l)
k=a7.db
if(typeof k!=="number")return H.G(k)
j=a7.d
if(typeof j!=="number")return H.G(j)
i=a7.x
if(typeof i!=="number")return H.G(i)
h=a7.ch
if(typeof h!=="number")return H.G(h)
g=a7.dx
if(typeof g!=="number")return H.G(g)
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
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bH))return!1
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
i:function(a){return this.F()},
bQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.cc(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cc(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cc(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cc(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.j(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.j(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.j(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.j(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.j(y,1)
q=q+y[1]+", "
if(1>=t)return H.j(x,1)
q=q+x[1]+", "
if(1>=s)return H.j(w,1)
q=q+w[1]+", "
if(1>=r)return H.j(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.j(y,2)
u=u+y[2]+", "
if(2>=t)return H.j(x,2)
u=u+x[2]+", "
if(2>=s)return H.j(w,2)
u=u+w[2]+", "
if(2>=r)return H.j(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.j(y,3)
q=q+y[3]+", "
if(3>=t)return H.j(x,3)
q=q+x[3]+", "
if(3>=s)return H.j(w,3)
q=q+w[3]+", "
if(3>=r)return H.j(v,3)
return u+(q+v[3]+"]")},
F:function(){return this.bQ("",3,0)},
u:function(a){return this.bQ(a,3,0)},
n:{
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dJ:function(){return V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
S:{"^":"a;a,b",
p:function(a,b){return new V.S(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
aw:{"^":"a;a,b,c",
X:function(a,b){return new V.aw(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.aw(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
dU:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"},
n:{
dV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)}}},
bn:{"^":"a;a,b",
dY:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,15],
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.bn(z*b,y*b)},
K:function(a,b){var z,y
if($.p.$2(b,0))return new V.bn(0,0)
z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
return new V.bn(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bn))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
O:{"^":"a;a,b,c",
dY:[function(a){return Math.sqrt(this.N(this))},"$0","gk",1,0,15],
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ao:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.O(z*y-x*w,x*v-u*y,u*w-z*v)},
J:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
aG:function(a){return new V.O(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
K:function(a,b){if($.p.$2(b,0))return new V.O(0,0,0)
return new V.O(this.a/b,this.b/b,this.c/b)},
dW:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dj:{"^":"c1;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dj))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},c1:{"^":"fp;"},dX:{"^":"c1;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gC:function(){var z=this.y
if(z==null){z=D.al()
this.y=z}return z},
ad:function(a){var z=this.y
if(!(z==null))z.P(a)},
sc6:function(a){var z,y
a=V.d2(a,0,6.283185307179586)
z=this.a
if(!$.p.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.t])
z.b=!0
this.ad(z)}},
sbV:function(a,b){var z,y
b=V.d2(b,0,6.283185307179586)
z=this.b
if(!$.p.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.t])
z.b=!0
this.ad(z)}},
sbZ:function(a){var z,y
a=V.d2(a,0,6.283185307179586)
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.t])
z.b=!0
this.ad(z)}},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dX))return!1
z=this.a
y=b.a
if(!$.p.$2(z,y))return!1
z=this.b
y=b.b
if(!$.p.$2(z,y))return!1
z=this.c
y=b.c
if(!$.p.$2(z,y))return!1
z=this.d
y=b.d
if(!$.p.$2(z,y))return!1
z=this.e
y=b.e
if(!$.p.$2(z,y))return!1
z=this.f
y=b.f
if(!$.p.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a9:[function(a){var z
H.k(a,"$isF")
z=this.x
if(!(z==null))z.P(a)},function(){return this.a9(null)},"eA","$1","$0","gY",0,2,2],
eE:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.at
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.F]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gO()==null){s=new D.bA()
s.d=0
t.sO(s)}s=t.gO()
s.toString
H.h(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.h2(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gcS",8,0,7],
eF:[function(a,b){var z,y,x,w,v,u
z=E.at
H.y(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null){if(v.gO()==null){u=new D.bA()
u.d=0
v.sO(u)}v.gO().G(0,x)}}z=new D.h3(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gcT",8,0,7],
sc0:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gC().G(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gY())
z=new D.M("technique",y,this.c,this,[O.cB])
z.b=!0
this.a9(z)}},
gC:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bY(this.c)
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
if(typeof x!=="number")return H.G(x)
u=C.c.T(v.a*x)
if(typeof w!=="number")return H.G(w)
t=C.c.T(v.b*w)
s=C.c.T(v.c*x)
a.c=s
v=C.c.T(v.d*w)
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
n=V.au(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.bX(n)
y=$.dP
if(y==null){y=new V.O(0,0,-1)
m=y.K(0,Math.sqrt(y.N(y)))
y=new V.O(0,1,0).ao(m)
l=y.K(0,Math.sqrt(y.N(y)))
k=m.ao(l)
j=new V.O(0,0,0)
y=V.au(l.a,k.a,m.a,l.aG(0).N(j),l.b,k.b,m.b,k.aG(0).N(j),l.c,k.c,m.c,m.aG(0).N(j),0,0,0,1)
$.dP=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.p(0,i)}a.db.bX(i)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.v();)z.d.c5(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.v();)z.d.aj(a)
this.a.toString
a.cy.b6()
a.db.b6()
this.b.toString
a.bW()},
$islX:1}}],["","",,A,{"^":"",d7:{"^":"a;a,b,c"},fj:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dK:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fD:{"^":"dZ;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},dZ:{"^":"d9;",
cr:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bu:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.cS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.Y("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
dl:function(){var z,y,x,w,v,u
z=H.b([],[A.d7])
y=this.a
x=H.U(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.G(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.d7(y,v.name,u))}this.x=new A.fj(z)},
dn:function(){var z,y,x,w,v,u
z=H.b([],[A.V])
y=this.a
x=H.U(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.G(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.dH(v.type,v.size,v.name,u))}this.y=new A.iD(z)},
ac:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iw(z,y,b,c)
else return A.cF(z,y,b,a,c)},
cK:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iH(z,y,b,c)
else return A.cF(z,y,b,a,c)},
cL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iI(z,y,b,c)
else return A.cF(z,y,b,a,c)},
aB:function(a,b){return new P.ey(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
dH:function(a,b,c,d){switch(a){case 5120:return this.ac(b,c,d)
case 5121:return this.ac(b,c,d)
case 5122:return this.ac(b,c,d)
case 5123:return this.ac(b,c,d)
case 5124:return this.ac(b,c,d)
case 5125:return this.ac(b,c,d)
case 5126:return new A.cE(this.a,this.r,c,d)
case 35664:return new A.iy(this.a,this.r,c,d)
case 35665:return new A.cG(this.a,this.r,c,d)
case 35666:return new A.iB(this.a,this.r,c,d)
case 35667:return new A.iz(this.a,this.r,c,d)
case 35668:return new A.iA(this.a,this.r,c,d)
case 35669:return new A.iC(this.a,this.r,c,d)
case 35674:return new A.iF(this.a,this.r,c,d)
case 35675:return new A.iG(this.a,this.r,c,d)
case 35676:return new A.cH(this.a,this.r,c,d)
case 35678:return this.cK(b,c,d)
case 35680:return this.cL(b,c,d)
case 35670:throw H.c(this.aB("BOOL",c))
case 35671:throw H.c(this.aB("BOOL_VEC2",c))
case 35672:throw H.c(this.aB("BOOL_VEC3",c))
case 35673:throw H.c(this.aB("BOOL_VEC4",c))
default:throw H.c(P.Y("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},V:{"^":"a;"},iD:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.F()},
dR:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.dR("\n")}},iw:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},iz:{"^":"V;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},iA:{"^":"V;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},iC:{"^":"V;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},ix:{"^":"V;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
n:{
cF:function(a,b,c,d,e){var z=new A.ix(a,b,c,e)
z.f=d
z.e=P.hi(d,0,!1,P.B)
return z}}},cE:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},iy:{"^":"V;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},cG:{"^":"V;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},iB:{"^":"V;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},iF:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},iG:{"^":"V;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},cH:{"^":"V;a,b,c,d",
bg:function(a){var z=new Float32Array(H.cO(H.y(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},iH:{"^":"V;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},iI:{"^":"V;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
la:function(a,b,c,d){return F.kG(c,a,d,b,new F.lb())},
kG:function(a,b,c,d,e){var z,y
z=F.l8(a,b,new F.kH(H.h(e,{func:1,ret:V.aw,args:[P.t]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.d
z.d.b2()
z.a.b2()
y=z.e
if(!(y==null))y.aF(0)
z.e2(new F.iV(),new F.hz())
return z},
l8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ax,P.t,P.t]})
if(a<1)return
if(b<1)return
z=new F.e_()
y=new F.iQ(z)
y.b=!1
x=[F.ax]
y.c=H.b([],x)
z.a=y
y=new F.i5(z)
y.b=H.b([],[F.dQ])
z.b=y
y=new F.i4(z)
y.b=H.b([],[F.dB])
z.c=y
y=new F.i3(z)
y.b=H.b([],[F.af])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cI(null,null,new V.by(x,0,0,1),null,null,new V.S(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bN(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cI(null,null,new V.by(o,n,m,1),null,null,new V.S(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bN(d))}}z.d.dt(a+1,b+1,w)
return z},
lb:{"^":"m:32;",
$1:function(a){return new V.aw(Math.cos(a),Math.sin(a),0)}},
kH:{"^":"m:33;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d3(y.$1(z),x)
x=J.d3(y.$1(z+3.141592653589793/this.c),x).X(0,w)
x=new V.O(x.a,x.b,x.c)
v=x.K(0,Math.sqrt(x.N(x)))
u=new V.O(1,0,0)
y=v.ao(!v.q(0,u)?new V.O(0,0,1):u)
t=y.K(0,Math.sqrt(y.N(y)))
y=t.ao(v)
u=y.K(0,Math.sqrt(y.N(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.p(0,y*x)
x=t.p(0,r*x)
x=new V.aw(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.N(a.f,x)){a.f=x
y=a.a
if(y!=null)y.V()}}},
af:{"^":"a;0a,0b,0c,0d,0e",
ap:function(){if(!this.gbO()){C.a.G(this.a.a.d.b,this)
this.a.a.V()}this.da()
this.dc()
this.dd()},
di:function(a){this.a=a
C.a.h(a.d.b,this)},
dj:function(a){this.b=a
C.a.h(a.d.c,this)},
dk:function(a){this.c=a
C.a.h(a.d.d,this)},
da:function(){var z=this.a
if(z!=null){C.a.G(z.d.b,this)
this.a=null}},
dc:function(){var z=this.b
if(z!=null){C.a.G(z.d.c,this)
this.b=null}},
dd:function(){var z=this.c
if(z!=null){C.a.G(z.d.d,this)
this.c=null}},
gbO:function(){return this.a==null||this.b==null||this.c==null},
cE:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.O(0,0,0)
if(y!=null)v=v.J(0,y)
if(x!=null)v=v.J(0,x)
if(w!=null)v=v.J(0,w)
if(v.dW())return
return v.K(0,Math.sqrt(v.N(v)))},
cG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.X(0,y)
z=new V.O(z.a,z.b,z.c)
v=z.K(0,Math.sqrt(z.N(z)))
z=w.X(0,y)
z=new V.O(z.a,z.b,z.c)
z=v.ao(z.K(0,Math.sqrt(z.N(z))))
return z.K(0,Math.sqrt(z.N(z)))},
b1:function(){if(this.d!=null)return!0
var z=this.cE()
if(z==null){z=this.cG()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
gdC:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z,y
if(this.gbO())return a+"disposed"
z=a+C.b.a4(J.a4(this.a.e),0)+", "+C.b.a4(J.a4(this.b.e),0)+", "+C.b.a4(J.a4(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
F:function(){return this.u("")},
n:{
bW:function(a,b,c){var z,y,x
z=new F.af()
y=a.a
if(y==null)H.W(P.Y("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.W(P.Y("May not create a face with vertices attached to different shapes."))
z.di(a)
z.dj(b)
z.dk(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
fS:{"^":"a;"},
ib:{"^":"fS;",
aq:function(a,b,c){var z,y
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
dB:{"^":"a;"},
he:{"^":"a;"},
iv:{"^":"he;",
aq:function(a,b,c){var z,y
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
dQ:{"^":"a;"},
e_:{"^":"a;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.al()
this.e=z}return z},
e2:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.u(z,0)])
for(z=[F.ax];y.length!==0;){x=C.a.gdO(y)
C.a.ek(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.aq(0,x,t)){C.a.h(w,t)
C.a.G(y,t)}}if(w.length>1)b.e1(w)}}this.a.t()
this.c.b8()
this.d.b8()
this.b.el()
this.c.b9(new F.iv())
this.d.b9(new F.ib())
z=this.e
if(!(z==null))z.aF(0)},
dA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$an()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
v=b.gbi(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dc])
for(r=0,q=0;q<w;++q){p=b.dv(q)
o=p.gbi(p)
C.a.H(s,q,new Z.dc(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].dZ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.H(t,l,m[k]);++l}}r+=o}H.y(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cO(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dd(new Z.ev(34962,j),s,b)
i.b=H.b([],[Z.bY])
if(this.b.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.cJ(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bY(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.cJ(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bY(1,h.length,f))}if(this.d.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.cJ(y,34963,H.y(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bY(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.e])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.l(z,"\n")},
W:function(a){var z=this.e
if(!(z==null))z.P(a)},
V:function(){return this.W(null)}},
i3:{"^":"a;a,0b",
dt:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.y(c,"$isd",[F.ax],"$asd")
z=H.b([],[F.af])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.j(c,x)
r=c[x];++x
if(x>=s)return H.j(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.j(c,p)
o=c[p]
if(y<0||y>=s)return H.j(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bW(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bW(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bW(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bW(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
b9:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.j(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.m(0,w)
for(u=w-1;u>=0;--u){t=x.d.m(0,u)
if(a.aq(0,v,t)){v.ap()
break}}}}},
b8:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
x=y[z]
y=x.gdC(x)
if(y)x.ap()}},
b2:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].b1())x=!1
return x},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
i4:{"^":"a;a,0b",
gk:function(a){return this.b.length},
b9:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.j(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.m(0,w)
for(u=w-1;u>=0;--u){t=x.c.m(0,u)
if(a.aq(0,v,t)){v.ap()
break}}}}},
b8:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.ap()}},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.l(z,"\n")},
F:function(){return this.u("")}},
i5:{"^":"a;a,0b",
gk:function(a){return this.b.length},
el:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ap()}},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bN:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cI(this.cx,x,u,z,y,w,v,a,t)},
dZ:function(a){var z,y
z=J.E(a)
if(z.q(a,$.$get$an())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aR())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aQ())){z=H.b([0,0,1],[P.t])
return z}else if(z.q(a,$.$get$aS())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$aT())){z=H.b([0,0,0],[P.t])
return z}else if(z.q(a,$.$get$bo())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bp())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aU()))return H.b([this.ch],[P.t])
else if(z.q(a,$.$get$aP())){z=H.b([-1,-1,-1,-1],[P.t])
return z}else return H.b([],[P.t])},
b1:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.O(0,0,0)
this.d.E(0,new F.iZ(z))
z=z.a
this.r=z.K(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.aF(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z,y,x
z=H.b([],[P.e])
C.a.h(z,C.b.a4(J.a4(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.D(this.ch,3,0))
C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
F:function(){return this.u("")},
n:{
cI:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ax()
y=new F.iY(z)
y.b=H.b([],[F.dQ])
z.b=y
y=new F.iU(z)
x=[F.dB]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iR(z)
x=[F.af]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$es()
z.e=0
y=$.$get$an()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aR().a)!==0?e:null
z.x=(x&$.$get$aQ().a)!==0?b:null
z.y=(x&$.$get$aS().a)!==0?f:null
z.z=(x&$.$get$aT().a)!==0?g:null
z.Q=(x&$.$get$et().a)!==0?c:null
z.ch=(x&$.$get$aU().a)!==0?i:0
z.cx=(x&$.$get$aP().a)!==0?a:null
return z}}},
iZ:{"^":"m:8;a",
$1:function(a){var z,y
H.k(a,"$isaf")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.J(0,z)}}},
iQ:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.Y("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.V()
return!0},
gk:function(a){return this.c.length},
b2:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].b1()
return!0},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
this.t()
z=H.b([],[P.e])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
iR:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.j(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.j(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
E:function(a,b){H.h(b,{func:1,ret:-1,args:[F.af]})
C.a.E(this.b,b)
C.a.E(this.c,new F.iS(this,b))
C.a.E(this.d,new F.iT(this,b))},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
iS:{"^":"m:8;a,b",
$1:function(a){H.k(a,"$isaf")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iT:{"^":"m:8;a,b",
$1:function(a){var z
H.k(a,"$isaf")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iU:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
m:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.j(z,x)
return z[x]}else{if(b<0)return H.j(z,b)
return z[b]}},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
iW:{"^":"a;"},
iV:{"^":"iW;",
aq:function(a,b,c){return J.N(b.f,c.f)}},
iX:{"^":"a;"},
hz:{"^":"iX;",
e1:function(a){var z,y,x,w,v,u,t,s
H.y(a,"$isd",[F.ax],"$asd")
z=new V.O(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.O(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.K(0,Math.sqrt(z.N(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.K(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.P(null)}}}return}},
iY:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}}}],["","",,O,{"^":"",fC:{"^":"cB;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.al()
this.f=z}return z},
ax:function(a){var z=this.f
if(!(z==null))z.P(a)}},cB:{"^":"a;"}}],["","",,T,{"^":"",ik:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",b2:{"^":"a;",
ai:function(a,b){return!0},
i:function(a){return"all"},
$isam:1},am:{"^":"a;"},dI:{"^":"a;",
ai:["cm",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].ai(0,b))return!0
return!1}],
i:["bj",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isam:1},ac:{"^":"dI;0a",
ai:function(a,b){return!this.cm(0,b)},
i:function(a){return"!["+this.bj(0)+"]"}},hO:{"^":"a;0a,0b",
ai:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cw(this.a)
y=H.cw(this.b)
return z+".."+y},
$isam:1,
n:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.c(P.Y("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.aa(a,0)
y=C.b.aa(b,0)
x=new V.hO()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},i1:{"^":"a;0a",
cq:function(a){var z,y
if(a.a.length<=0)throw H.c(P.Y("May not create a SetMatcher with zero characters."))
z=new H.aL(0,0,[P.B,P.L])
for(y=new H.ct(a,a.gk(a),0,[H.aB(a,"q",0)]);y.v();)z.H(0,y.d,!0)
this.a=z},
ai:function(a,b){return this.a.bM(0,b)},
i:function(a){var z=this.a
return P.cz(new H.dD(z,[H.u(z,0)]),0,null)},
$isam:1,
n:{
o:function(a){var z=new V.i1()
z.cq(a)
return z}}},e1:{"^":"a;a,b,0c,0d",
ge3:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ed(this.a.j(0,b))
w.a=H.b([],[V.am])
w.c=!1
C.a.h(this.c,w)
return w},
dN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.ai(0,a))return w}return},
i:function(a){return this.b}},eb:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.d1(this.b,"\n","\\n")
y=H.d1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ec:{"^":"a;a,b,0c",
a5:function(a,b,c){var z,y,x
H.y(c,"$isd",[P.e],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.H(0,x,b)}},
i:function(a){return this.b}},iq:{"^":"a;0a,0b,0c",
j:function(a,b){var z=this.a.m(0,b)
if(z==null){z=new V.e1(this,b)
z.c=H.b([],[V.ed])
this.a.H(0,b,z)}return z},
B:function(a){var z,y
z=this.b.m(0,a)
if(z==null){z=new V.ec(this,a)
y=P.e
z.c=new H.aL(0,0,[y,y])
this.b.H(0,a,z)}return z},
c4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eb])
y=this.c
x=[P.B]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.aa(a,t)
r=y.dN(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cz(w,0,null)
throw H.c(P.Y("Untokenizable string [state: "+y.ge3(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cz(w,0,null)
p=y.d
o=p.c.m(0,q)
u=new V.eb(o==null?p.b:o,q,t)}++t}}},
n:{
c4:function(){var z,y
z=new V.iq()
y=P.e
z.a=new H.aL(0,0,[y,V.e1])
z.b=new H.aL(0,0,[y,V.ec])
return z}}},ed:{"^":"dI;b,0c,0a",
i:function(a){return this.b.b+": "+this.bj(0)}}}],["","",,X,{"^":"",df:{"^":"a;",$isdK:1},fX:{"^":"e5;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z}},hC:{"^":"a;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.al()
this.f=z}return z},
al:[function(a){var z
H.k(a,"$isF")
z=this.f
if(!(z==null))z.P(a)},function(){return this.al(null)},"eB","$1","$0","gbl",0,2,2],
sas:function(a){var z,y
if(!J.N(this.b,a)){z=this.b
if(z!=null)z.gC().G(0,this.gbl())
y=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gbl())
z=new D.M("mover",y,this.b,this,[U.c1])
z.b=!0
this.al(z)}},
$isdK:1,
$isdf:1},e5:{"^":"a;"}}],["","",,V,{"^":"",
l6:function(a){P.ip(C.y,new V.l7(a))},
ar:{"^":"a;",
aw:function(a){this.b=new P.h_(C.z)
this.c=null
this.d=H.b([],[[P.d,W.aI]])},
A:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aI]))
y=a.split("\n")
for(z=y.length,x=[W.aI],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.A(u)
s=this.b.cJ(u,0,u.length)
r=s==null?u:s
C.x.ce(t,H.d1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaD(this.d),t)}},
bU:function(a,b){var z,y,x,w
H.y(b,"$isd",[P.e],"$asd")
this.d=H.b([],[[P.d,W.aI]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.aC()
this.c=y}for(y=y.c4(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.aE(y[w])}},
l7:{"^":"m:35;a",
$1:function(a){H.k(a,"$isaN")
P.d0(C.c.c3(this.a.gdS(),2)+" fps")}},
fz:{"^":"ar;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Class":this.A(a.b,"#551")
break
case"Comment":this.A(a.b,"#777")
break
case"Id":this.A(a.b,"#111")
break
case"Num":this.A(a.b,"#191")
break
case"Reserved":this.A(a.b,"#119")
break
case"String":this.A(a.b,"#171")
break
case"Symbol":this.A(a.b,"#616")
break
case"Type":this.A(a.b,"#B11")
break
case"Whitespace":this.A(a.b,"#111")
break}},
aC:function(){var z,y,x,w
z=V.c4()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.o(new H.n("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.o(new H.n("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.o(new H.n("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.o(new H.n('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.o(new H.n('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.o(new H.n("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.o(new H.n('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b2())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.o(new H.n("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.o(new H.n("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.o(new H.n("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.o(new H.n("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b2())
x=z.j(0,"Start").l(0,"Slash")
y=V.o(new H.n("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.o(new H.n("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ac()
w=[V.am]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.o(new H.n("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.ac()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.o(new H.n("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.o(new H.n(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.o(new H.n(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.B("Num")
x=z.j(0,"Float")
x.d=x.a.B("Num")
x=z.j(0,"Sym")
x.d=x.a.B("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.B("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.B("String")
x=z.j(0,"EndComment")
x.d=x.a.B("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.B("Whitespace")
x=z.j(0,"Id")
y=x.a.B("Id")
x.d=y
x=[P.e]
y.a5(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a5(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a5(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
fY:{"^":"ar;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Builtin":this.A(a.b,"#411")
break
case"Comment":this.A(a.b,"#777")
break
case"Id":this.A(a.b,"#111")
break
case"Num":this.A(a.b,"#191")
break
case"Preprocess":this.A(a.b,"#737")
break
case"Reserved":this.A(a.b,"#119")
break
case"Symbol":this.A(a.b,"#611")
break
case"Type":this.A(a.b,"#171")
break
case"Whitespace":this.A(a.b,"#111")
break}},
aC:function(){var z,y,x,w
z=V.c4()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.o(new H.n("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.o(new H.n("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.o(new H.n("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.o(new H.n("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.o(new H.n("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.b2())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ac()
w=[V.am]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.o(new H.n("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.ac()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.o(new H.n(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.o(new H.n(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.B("Num")
y=z.j(0,"Float")
y.d=y.a.B("Num")
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.B("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.B("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.B("Whitespace")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
y=[P.e]
x.a5(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a5(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a5(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
fZ:{"^":"ar;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Attr":this.A(a.b,"#911")
this.A("=","#111")
break
case"Id":this.A(a.b,"#111")
break
case"Other":this.A(a.b,"#111")
break
case"Reserved":this.A(a.b,"#119")
break
case"String":this.A(a.b,"#171")
break
case"Symbol":this.A(a.b,"#616")
break}},
aC:function(){var z,y,x
z=V.c4()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.o(new H.n("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.o(new H.n("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.o(new H.n("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.o(new H.n('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.o(new H.n('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.o(new H.n("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.o(new H.n('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.b2())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.b2())
y=z.j(0,"Other").l(0,"Other")
x=new V.ac()
x.a=H.b([],[V.am])
C.a.h(y.a,x)
y=V.o(new H.n('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.B("String")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
x.a5(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
x=z.j(0,"Attr")
x.d=x.a.B("Attr")
x=z.j(0,"Other")
x.d=x.a.B("Other")
return z}},
hE:{"^":"ar;a,0b,0c,0d",
bU:function(a,b){H.y(b,"$isd",[P.e],"$asd")
this.d=H.b([],[[P.d,W.aI]])
this.A(C.a.l(b,"\n"),"#111")},
aE:function(a){},
aC:function(){return}},
i6:{"^":"a;0a,0b",
cs:function(a,b){var z,y,x,w,v,u,t
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
t=W.a1
W.T(z,"scroll",H.h(new V.i9(x),{func:1,ret:-1,args:[t]}),!1,t)},
bH:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.y(a,"$isd",[P.e],"$asd")
this.dm()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.c4(C.a.dX(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.f8(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.eQ(C.p,s,C.l,!1)
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
c9:function(a){var z,y,x,w
z=new V.fz("dart")
z.aw("dart")
y=new V.fY("glsl")
y.aw("glsl")
x=new V.fZ("html")
x.aw("html")
w=C.a.dP(H.b([z,y,x],[V.ar]),new V.ia(a))
if(w!=null)return w
z=new V.hE("plain")
z.aw("plain")
return z},
bF:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.y(a2,"$isd",[P.e],"$asd")
z=H.b([],[P.B])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.cX(w).aH(w,"+")){C.a.H(a2,x,C.b.aJ(w,1))
C.a.h(z,1)
y=!0}else if(C.b.aH(w,"-")){C.a.H(a2,x,C.b.aJ(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.c9(a0)
v.bU(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.eQ(C.p,a,C.l,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.d5(null)
n.href="#"+r
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
if(x>=z.length)return H.j(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gI(w);b.v();)h.appendChild(b.gD(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
dm:function(){var z,y,x,w
if(this.b!=null)return
z=V.c4()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ac()
w=[V.am]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.ac()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.o(new H.n("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.ac()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.o(new H.n("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.o(new H.n("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.o(new H.n("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.o(new H.n("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.ac()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.o(new H.n("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.ac()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.b2())
x=z.j(0,"Other").l(0,"Other")
y=new V.ac()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.B("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.B("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.B("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.B("Link")
x=z.j(0,"Other")
x.d=x.a.B("Other")
this.b=z},
n:{
i7:function(a,b){var z=new V.i6()
z.cs(a,!0)
return z}}},
i9:{"^":"m:36;a",
$1:function(a){P.e9(C.h,new V.i8(this.a))}},
i8:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.c.T(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
ia:{"^":"m:37;a",
$1:function(a){return H.k(a,"$isar").a===this.a}}}],["","",,Y,{"^":"",
f4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.i7("Test 001",!0)
y=W.dg(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.e]
z.bH(H.b(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."],x))
z.bH(H.b(["\xab[Back to Tests|../]"],x))
w=new E.at()
w.a=""
w.b=!0
x=E.at
v=O.di(x)
w.y=v
v.bf(w.ge4(),w.ge6())
w.z=null
w.Q=null
w.ch=null
w.cx=null
w.cy=null
w.db=null
w.dx=null
w.dy=null
w.fr=null
w.fx=null
w.sbh(0,null)
w.sas(null)
w.sbh(0,F.la(30,1,15,0.5))
v=new U.dX()
v.a=0
v.b=0
v.c=0
v.d=0
v.e=0
v.f=0
v.r=0
v.sc6(0)
v.sbV(0,0)
v.sbZ(0)
u=v.d
if(!$.p.$2(u,0.1)){t=v.d
v.d=0.1
u=new D.M("deltaYaw",t,0.1,v,[P.t])
u.b=!0
v.ad(u)}u=v.e
if(!$.p.$2(u,0.21)){t=v.e
v.e=0.21
u=new D.M("deltaPitch",t,0.21,v,[P.t])
u.b=!0
v.ad(u)}u=v.f
if(!$.p.$2(u,0.32)){t=v.f
v.f=0.32
u=new D.M("deltaRoll",t,0.32,v,[P.t])
u.b=!0
v.ad(u)}w.sas(v)
s=new O.fC()
s.d=1
s.e=10
r=new V.bx(1,1,1)
s.b=r
v=[V.bx]
u=new D.M("objectColor",null,r,s,v)
u.b=!0
s.ax(u)
r=new V.bx(0,0,0)
if(!J.N(s.c,r)){t=s.c
s.c=r
v=new D.M("fogColor",t,r,s,v)
v.b=!0
s.ax(v)}v=s.d
if(!$.p.$2(v,3)){t=s.d
s.d=3
v=new D.M("fogStart",t,3,s,[P.t])
v.b=!0
s.ax(v)}v=s.e
if(!$.p.$2(v,6)){t=s.e
s.e=6
v=new D.M("fogStop",t,6,s,[P.t])
v.b=!0
s.ax(v)}q=new M.fO()
x=O.di(x)
q.d=x
x.bf(q.gcS(),q.gcT())
q.e=null
q.f=null
q.r=null
q.x=null
p=new X.hC()
p.c=1.0471975511965976
p.d=0.1
p.e=2000
p.sas(null)
x=p.c
if(!$.p.$2(x,1.0471975511965976)){t=p.c
p.c=1.0471975511965976
x=new D.M("fov",t,1.0471975511965976,p,[P.t])
x.b=!0
p.al(x)}x=p.d
if(!$.p.$2(x,0.1)){t=p.d
p.d=0.1
x=new D.M("near",t,0.1,p,[P.t])
x.b=!0
p.al(x)}x=p.e
if(!$.p.$2(x,2000)){t=p.e
p.e=2000
x=new D.M("far",t,2000,p,[P.t])
x.b=!0
p.al(x)}x=q.a
if(x!==p){if(x!=null)x.gC().G(0,q.gY())
t=q.a
q.a=p
p.gC().h(0,q.gY())
x=new D.M("camera",t,q.a,q,[X.df])
x.b=!0
q.a9(x)}o=new X.fX()
x=new V.by(0,0,0,1)
o.a=x
o.b=!0
o.c=2000
o.d=!0
o.e=0
o.f=!1
x=V.dV(0,0,1,1)
o.r=x
x=q.b
if(x!==o){if(x!=null)x.gC().G(0,q.gY())
t=q.b
q.b=o
o.gC().h(0,q.gY())
x=new D.M("target",t,q.b,q,[X.e5])
x.b=!0
q.a9(x)}q.sc0(null)
x=q.d
v=H.u(x,0)
H.w(w,v)
v=[v]
if(x.d5(H.b([w],v))){u=x.a
n=u.length
C.a.h(u,w)
x.cQ(n,H.b([w],v))}q.sc0(s)
x=q.a
m=V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
v=new U.dj()
v.a=m
x.sas(v)
l=document.getElementById("testCanvas")
if(l==null)H.W(P.Y("Failed to find an element with the identifier, testCanvas."))
k=E.im(l,!0,!0,!0,!1)
x=k.d
if(x!==q){if(x!=null)x.gC().G(0,k.gbk())
k.d=q
q.gC().h(0,k.gbk())
k.cu()}x=k.z
if(x==null){x=D.al()
k.z=x}v={func:1,ret:-1,args:[D.F]}
u=H.h(new Y.l_(z,s),v)
j=x.b
if(j==null){v=H.b([],[v])
x.b=v
x=v}else x=j
C.a.h(x,u)
V.l6(k)},
l_:{"^":"m:5;a,b",
$1:function(a){var z,y,x,w
H.k(a,"$isF")
z=this.a
y=this.b
x=y.a
w=[P.e]
z.bF("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.bF("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.E=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dz.prototype
return J.h8.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.h9.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.bO=function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.cd=function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.kL=function(a){if(typeof a=="number")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bL.prototype
return a}
J.kM=function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bL.prototype
return a}
J.cX=function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bL.prototype
return a}
J.aZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bE.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.E(a).q(a,b)}
J.fa=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kL(a).a6(a,b)}
J.d3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kM(a).p(a,b)}
J.fb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bO(a).m(a,b)}
J.fc=function(a,b,c,d){return J.aZ(a).bG(a,b,c,d)}
J.ch=function(a,b,c){return J.bO(a).dD(a,b,c)}
J.ci=function(a,b){return J.cd(a).w(a,b)}
J.fd=function(a,b){return J.cd(a).E(a,b)}
J.fe=function(a){return J.aZ(a).gdw(a)}
J.aF=function(a){return J.E(a).gL(a)}
J.aG=function(a){return J.cd(a).gI(a)}
J.aH=function(a){return J.bO(a).gk(a)}
J.ff=function(a){return J.aZ(a).gb7(a)}
J.fg=function(a){return J.aZ(a).geu(a)}
J.d4=function(a){return J.cd(a).ej(a)}
J.fh=function(a,b,c){return J.cX(a).ak(a,b,c)}
J.fi=function(a){return J.cX(a).ey(a)}
J.a4=function(a){return J.E(a).i(a)}
I.aD=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.m=W.bS.prototype
C.f=W.cl.prototype
C.x=W.aI.prototype
C.A=J.l.prototype
C.a=J.aK.prototype
C.e=J.dz.prototype
C.c=J.bC.prototype
C.b=J.bD.prototype
C.H=J.bE.prototype
C.L=H.hv.prototype
C.M=W.hw.prototype
C.q=J.hD.prototype
C.r=W.ij.prototype
C.k=J.bL.prototype
C.t=W.bq.prototype
C.u=W.j1.prototype
C.v=new P.hB()
C.w=new P.iP()
C.d=new P.jO()
C.h=new P.aJ(0)
C.y=new P.aJ(5e6)
C.z=new P.h0("element",!0,!1,!1,!1)
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
C.I=H.b(I.aD(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.J=H.b(I.aD(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.K=H.b(I.aD([]),[P.e])
C.p=H.b(I.aD([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.i=H.b(I.aD(["bind","if","ref","repeat","syntax"]),[P.e])
C.j=H.b(I.aD(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.l=new P.iO(!1)
$.ae=0
$.b3=null
$.da=null
$.cP=!1
$.f1=null
$.eX=null
$.f7=null
$.cb=null
$.cf=null
$.cY=null
$.aW=null
$.bs=null
$.bt=null
$.cQ=!1
$.J=C.d
$.ak=null
$.cn=null
$.dw=null
$.dv=null
$.dr=null
$.dq=null
$.dp=null
$.dn=null
$.p=V.hp()
$.fF="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fE="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dP=null
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
I.$lazy(y,x,w)}})(["dm","$get$dm",function(){return H.f0("_$dart_dartClosure")},"cq","$get$cq",function(){return H.f0("_$dart_js")},"ee","$get$ee",function(){return H.ah(H.c5({
toString:function(){return"$receiver$"}}))},"ef","$get$ef",function(){return H.ah(H.c5({$method$:null,
toString:function(){return"$receiver$"}}))},"eg","$get$eg",function(){return H.ah(H.c5(null))},"eh","$get$eh",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"el","$get$el",function(){return H.ah(H.c5(void 0))},"em","$get$em",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ej","$get$ej",function(){return H.ah(H.ek(null))},"ei","$get$ei",function(){return H.ah(function(){try{null.$method$}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.ah(H.ek(void 0))},"en","$get$en",function(){return H.ah(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cL","$get$cL",function(){return P.j2()},"bu","$get$bu",function(){return[]},"eP","$get$eP",function(){return P.hS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dk","$get$dk",function(){return{}},"eB","$get$eB",function(){return P.dF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"cM","$get$cM",function(){return P.dE(P.e,P.bB)},"eu","$get$eu",function(){return Z.a8(0)},"es","$get$es",function(){return Z.a8(511)},"an","$get$an",function(){return Z.a8(1)},"aR","$get$aR",function(){return Z.a8(2)},"aQ","$get$aQ",function(){return Z.a8(4)},"aS","$get$aS",function(){return Z.a8(8)},"aT","$get$aT",function(){return Z.a8(16)},"bo","$get$bo",function(){return Z.a8(32)},"bp","$get$bp",function(){return Z.a8(64)},"et","$get$et",function(){return Z.a8(96)},"aU","$get$aU",function(){return Z.a8(128)},"aP","$get$aP",function(){return Z.a8(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,opt:[D.F]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.C,args:[D.F]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.B,[P.i,E.at]]},{func:1,ret:P.C,args:[F.af]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.e,args:[P.B]},{func:1,ret:P.L,args:[W.v]},{func:1,ret:P.t},{func:1,args:[,]},{func:1,ret:P.L,args:[W.K,P.e,P.e,W.bM]},{func:1,ret:P.L,args:[W.ag]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:W.v},{func:1,ret:-1,args:[W.bb]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.F]}]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.C,args:[P.P]},{func:1,ret:P.L,args:[P.t,P.t]},{func:1,ret:[P.ao,,],args:[,]},{func:1,ret:P.C,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[P.a],opt:[P.ad]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:V.aw,args:[P.t]},{func:1,ret:P.C,args:[F.ax,P.t,P.t]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:P.C,args:[P.aN]},{func:1,ret:P.C,args:[W.a1]},{func:1,ret:P.L,args:[V.ar]},{func:1,args:[P.e]},{func:1,args:[,P.e]},{func:1,ret:W.K,args:[W.v]}]
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
if(x==y)H.l9(d||a)
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
Isolate.aD=a.aD
Isolate.cV=a.cV
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.f4,[])
else Y.f4([])})})()
//# sourceMappingURL=test.dart.js.map
