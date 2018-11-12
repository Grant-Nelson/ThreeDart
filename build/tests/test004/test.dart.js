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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cX(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cY=function(){}
var dart=[["","",,H,{"^":"",lF:{"^":"a;a"}}],["","",,J,{"^":"",
F:function(a){return void 0},
d2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ch:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d0==null){H.kX()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.ev("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ct()]
if(v!=null)return v
v=H.l1(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$ct(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
l:{"^":"a;",
q:function(a,b){return a===b},
gL:function(a){return H.bi(a)},
i:["co",function(a){return"Instance of '"+H.aP(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ha:{"^":"l;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isL:1},
hc:{"^":"l;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isD:1},
cu:{"^":"l;",
gL:function(a){return 0},
i:["cq",function(a){return String(a)}]},
hG:{"^":"cu;"},
bO:{"^":"cu;"},
bH:{"^":"cu;",
i:function(a){var z=a[$.$get$dr()]
if(z==null)return this.cq(a)
return"JavaScript function for "+H.f(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbE:1},
aN:{"^":"l;$ti",
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.W(P.a9("add"))
a.push(b)},
er:function(a,b){if(!!a.fixed$length)H.W(P.a9("removeAt"))
if(b<0||b>=a.length)throw H.c(P.bM(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var z
if(!!a.fixed$length)H.W(P.a9("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.ax(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.H(z,y,H.f(a[y]))
return z.join(b)},
e3:function(a){return this.l(a,"")},
dX:function(a,b,c){var z,y,x
H.i(b,{func:1,ret:P.L,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.c(P.ax(a))}throw H.c(H.c1())},
dW:function(a,b){return this.dX(a,b,null)},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
aJ:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a2(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
gdV:function(a){if(a.length>0)return a[0]
throw H.c(H.c1())},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.c1())},
bJ:function(a,b){var z,y
H.i(b,{func:1,ret:P.L,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.ax(a))}return!1},
M:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cr(a,"[","]")},
gI:function(a){return new J.an(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.bi(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.W(P.a9("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bU(b,"newLength",null))
if(b<0)throw H.c(P.a2(b,0,null,"newLength",null))
a.length=b},
H:function(a,b,c){H.U(b)
H.x(c,H.u(a,0))
if(!!a.immutable$list)H.W(P.a9("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aD(a,b))
if(b>=a.length||b<0)throw H.c(H.aD(a,b))
a[b]=c},
$ish:1,
$isd:1,
n:{
h9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a2(a,0,4294967295,"length",null))
return J.dF(new Array(a),b)},
dF:function(a,b){return J.bd(H.b(a,[b]))},
bd:function(a){H.bS(a)
a.fixed$length=Array
return a}}},
lE:{"^":"aN;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
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
bF:{"^":"l;",
bT:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.a9(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.a9(""+a+".round()"))},
c8:function(a,b){var z,y
if(b>20)throw H.c(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.c(H.aC(b))
return a*b},
cg:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ct:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bD(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.bD(a,b)},
bD:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.a9("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
aA:function(a,b){var z
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
dz:function(a,b){return b>31?0:a>>>b},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.aC(b))
return a<b},
$ist:1,
$isP:1},
dG:{"^":"bF;",$isA:1},
hb:{"^":"bF;"},
bG:{"^":"l;",
b4:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aD(a,b))
if(b<0)throw H.c(H.aD(a,b))
if(b>=a.length)H.W(H.aD(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.c(H.aD(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.B(b)
if(typeof b!=="string")throw H.c(P.bU(b,null,null))
return a+b},
cm:function(a,b,c){var z
if(c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aI:function(a,b){return this.cm(a,b,0)},
ak:function(a,b,c){H.U(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.bM(b,null,null))
if(b>c)throw H.c(P.bM(b,null,null))
if(c>a.length)throw H.c(P.bM(c,null,null))
return a.substring(b,c)},
aK:function(a,b){return this.ak(a,b,null)},
eF:function(a){return a.toLowerCase()},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eg:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
a6:function(a,b){return this.eg(a,b," ")},
dK:function(a,b,c){if(c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
return H.fe(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdU:1,
$ise:1}}],["","",,H,{"^":"",
c1:function(){return new P.cA("No element")},
h8:function(){return new P.cA("Too many elements")},
n:{"^":"iO;a",
gk:function(a){return this.a.length},
m:function(a,b){return C.b.b4(this.a,b)},
$asew:function(){return[P.A]},
$asq:function(){return[P.A]},
$ash:function(){return[P.A]},
$asd:function(){return[P.A]}},
dy:{"^":"h;"},
c3:{"^":"dy;$ti",
gI:function(a){return new H.cw(this,this.gk(this),0,[H.ac(this,"c3",0)])},
bd:function(a,b){return this.cp(0,H.i(b,{func:1,ret:P.L,args:[H.ac(this,"c3",0)]}))}},
cw:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bR(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.ax(z))
w=this.c
if(typeof x!=="number")return H.G(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
hp:{"^":"h;a,b,$ti",
gI:function(a){return new H.hq(J.aI(this.a),this.b,this.$ti)},
gk:function(a){return J.aJ(this.a)},
w:function(a,b){return this.b.$1(J.cl(this.a,b))},
$ash:function(a,b){return[b]}},
hq:{"^":"cs;0a,b,c,$ti",
v:function(){var z=this.b
if(z.v()){this.a=this.c.$1(z.gD(z))
return!0}this.a=null
return!1},
gD:function(a){return this.a},
$ascs:function(a,b){return[b]}},
hr:{"^":"c3;a,b,$ti",
gk:function(a){return J.aJ(this.a)},
w:function(a,b){return this.b.$1(J.cl(this.a,b))},
$asc3:function(a,b){return[b]},
$ash:function(a,b){return[b]}},
cN:{"^":"h;a,b,$ti",
gI:function(a){return new H.j3(J.aI(this.a),this.b,this.$ti)}},
j3:{"^":"cs;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
c_:{"^":"a;$ti"},
ew:{"^":"a;$ti"},
iO:{"^":"c2+ew;"}}],["","",,H,{"^":"",
kQ:function(a){return init.types[H.U(a)]},
l_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.F(a).$isy},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.c(H.aC(a))
return z},
bi:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aP:function(a){var z,y,x,w,v,u,t,s,r
z=J.F(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.F(a).$isbO){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.ab(w,0)===36)w=C.b.aK(w,1)
r=H.d1(H.bS(H.aE(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dX:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hQ:function(a){var z,y,x,w
z=H.b([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.aC(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aA(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.aC(w))}return H.dX(z)},
dY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.aC(x))
if(x<0)throw H.c(H.aC(x))
if(x>65535)return H.hQ(a)}return H.dX(a)},
cz:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aA(z,10))>>>0,56320|z&1023)}throw H.c(P.a2(a,0,1114111,null,null))},
a_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){return a.b?H.a_(a).getUTCFullYear()+0:H.a_(a).getFullYear()+0},
hN:function(a){return a.b?H.a_(a).getUTCMonth()+1:H.a_(a).getMonth()+1},
hJ:function(a){return a.b?H.a_(a).getUTCDate()+0:H.a_(a).getDate()+0},
hK:function(a){return a.b?H.a_(a).getUTCHours()+0:H.a_(a).getHours()+0},
hM:function(a){return a.b?H.a_(a).getUTCMinutes()+0:H.a_(a).getMinutes()+0},
hO:function(a){return a.b?H.a_(a).getUTCSeconds()+0:H.a_(a).getSeconds()+0},
hL:function(a){return a.b?H.a_(a).getUTCMilliseconds()+0:H.a_(a).getMilliseconds()+0},
G:function(a){throw H.c(H.aC(a))},
j:function(a,b){if(a==null)J.aJ(a)
throw H.c(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=H.U(J.aJ(a))
if(!(b<0)){if(typeof z!=="number")return H.G(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.bM(b,"index",null)},
kL:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.am(!0,b,"end",null)},
aC:function(a){return new P.am(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ff})
z.name=""}else z.toString=H.ff
return z},
ff:function(){return J.a4(this.dartException)},
W:function(a){throw H.c(a)},
z:function(a){throw H.c(P.ax(a))},
a3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dS(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ek()
u=$.$get$el()
t=$.$get$em()
s=$.$get$en()
r=$.$get$er()
q=$.$get$es()
p=$.$get$ep()
$.$get$eo()
o=$.$get$eu()
n=$.$get$et()
m=v.T(y)
if(m!=null)return z.$1(H.cv(H.B(y),m))
else{m=u.T(y)
if(m!=null){m.method="call"
return z.$1(H.cv(H.B(y),m))}else{m=t.T(y)
if(m==null){m=s.T(y)
if(m==null){m=r.T(y)
if(m==null){m=q.T(y)
if(m==null){m=p.T(y)
if(m==null){m=s.T(y)
if(m==null){m=o.T(y)
if(m==null){m=n.T(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dS(H.B(y),m))}}return z.$1(new H.iN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e6()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e6()
return a},
b2:function(a){var z
if(a==null)return new H.eQ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eQ(a)},
kN:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.H(0,a[y],a[x])}return b},
kZ:function(a,b,c,d,e,f){H.k(a,"$isbE")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.Y("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var z
H.U(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kZ)
a.$identity=z
return z},
fz:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.F(d).$isd){z.$reflectionInfo=d
x=H.hU(z).r}else x=d
w=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ah
if(typeof u!=="number")return u.J()
$.ah=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dk(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kQ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.de:H.cn
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dk(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fw:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dk:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fy(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fw(y,!w,z,b)
if(y===0){w=$.ah
if(typeof w!=="number")return w.J()
$.ah=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.bW("self")
$.b6=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ah
if(typeof w!=="number")return w.J()
$.ah=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.bW("self")
$.b6=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fx:function(a,b,c,d){var z,y
z=H.cn
y=H.de
switch(b?-1:a){case 0:throw H.c(H.i2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fy:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.bW("self")
$.b6=z}y=$.dd
if(y==null){y=H.bW("receiver")
$.dd=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fx(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ah
if(typeof y!=="number")return y.J()
$.ah=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ah
if(typeof y!=="number")return y.J()
$.ah=y+1
return new Function(z+y+"}")()},
cX:function(a,b,c,d,e,f,g){var z,y
z=J.bd(H.bS(b))
H.U(c)
y=!!J.F(d).$isd?J.bd(d):d
return H.fz(a,z,c,y,!!e,f,g)},
B:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.al(a,"String"))},
l5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.al(a,"num"))},
cV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.al(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.al(a,"int"))},
fc:function(a,b){throw H.c(H.al(a,H.B(b).substring(3)))},
l7:function(a,b){var z=J.bR(b)
throw H.c(H.fu(a,z.ak(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.F(a)[b])return a
H.fc(a,b)},
b3:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.F(a)[b]
else z=!0
if(z)return a
H.l7(a,b)},
bS:function(a){if(a==null)return a
if(!!J.F(a).$isd)return a
throw H.c(H.al(a,"List"))},
l0:function(a,b){if(a==null)return a
if(!!J.F(a).$isd)return a
if(J.F(a)[b])return a
H.fc(a,b)},
f5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.U(z)]
else return a.$S()}return},
bQ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f5(J.F(a))
if(z==null)return!1
y=H.f8(z,null,b,null)
return y},
i:function(a,b){var z,y
if(a==null)return a
if($.cS)return a
$.cS=!0
try{if(H.bQ(a,b))return a
z=H.bT(b)
y=H.al(a,z)
throw H.c(y)}finally{$.cS=!1}},
cZ:function(a,b){if(a!=null&&!H.cW(a,b))H.W(H.al(a,H.bT(b)))
return a},
f0:function(a){var z
if(a instanceof H.m){z=H.f5(J.F(a))
if(z!=null)return H.bT(z)
return"Closure"}return H.aP(a)},
lc:function(a){throw H.c(new P.fD(H.B(a)))},
f6:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aE:function(a){if(a==null)return
return a.$ti},
mz:function(a,b,c){return H.b4(a["$as"+H.f(c)],H.aE(b))},
bz:function(a,b,c,d){var z
H.B(c)
H.U(d)
z=H.b4(a["$as"+H.f(c)],H.aE(b))
return z==null?null:z[d]},
ac:function(a,b,c){var z
H.B(b)
H.U(c)
z=H.b4(a["$as"+H.f(b)],H.aE(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.U(b)
z=H.aE(a)
return z==null?null:z[b]},
bT:function(a){var z=H.aG(a,null)
return z},
aG:function(a,b){var z,y
H.w(b,"$isd",[P.e],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d1(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.f(b[y])}if('func' in a)return H.kx(a,b)
if('futureOr' in a)return"FutureOr<"+H.aG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.w(b,"$isd",z,"$asd")
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
if(q!=null&&q!==P.a)t+=" extends "+H.aG(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aG(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aG(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aG(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kM(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.B(z[l])
n=n+m+H.aG(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d1:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.e],"$asd")
if(a==null)return""
z=new P.c6("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aG(u,c)}v="<"+z.i(0)+">"
return v},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
by:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aE(a)
y=J.F(a)
if(y[b]==null)return!1
return H.f3(H.b4(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.B(b)
H.bS(c)
H.B(d)
if(a==null)return a
z=H.by(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d1(c,0,null)
throw H.c(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f3:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ad(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ad(a[y],b,c[y],d))return!1
return!0},
mx:function(a,b,c){return a.apply(b,H.b4(J.F(b)["$as"+H.f(c)],H.aE(b)))},
f9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="D"||a===-1||a===-2||H.f9(z)}return!1},
cW:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="D"||b===-1||b===-2||H.f9(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bQ(a,b)}y=J.F(a).constructor
x=H.aE(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ad(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.cW(a,b))throw H.c(H.al(a,H.bT(b)))
return a},
ad:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ad(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.f8(a,b,c,d)
if('func' in a)return c.builtin$cls==="bE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ad("type" in a?a.type:null,b,x,d)
else if(H.ad(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b4(w,z?a.slice(1):null)
return H.ad(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bT(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f3(H.b4(r,z),b,u,d)},
f8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ad(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ad(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ad(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ad(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l4(m,b,l,d)},
l4:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ad(c[w],d,a[w],b))return!1}return!0},
my:function(a,b,c){Object.defineProperty(a,H.B(b),{value:c,enumerable:false,writable:true,configurable:true})},
l1:function(a){var z,y,x,w,v,u
z=H.B($.f7.$1(a))
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.B($.f2.$2(a,z))
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cj(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ci[z]=x
return x}if(v==="-"){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fb(a,x)
if(v==="*")throw H.c(P.ev(z))
if(init.leafTags[z]===true){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fb(a,x)},
fb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d2(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cj:function(a){return J.d2(a,!1,null,!!a.$isy)},
l3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cj(z)
else return J.d2(z,c,null,null)},
kX:function(){if(!0===$.d0)return
$.d0=!0
H.kY()},
kY:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.ci=Object.create(null)
H.kT()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fd.$1(v)
if(u!=null){t=H.l3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kT:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b_(C.B,H.b_(C.G,H.b_(C.n,H.b_(C.n,H.b_(C.F,H.b_(C.C,H.b_(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f7=new H.kU(v)
$.f2=new H.kV(u)
$.fd=new H.kW(t)},
b_:function(a,b){return a(b)||b},
fe:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
d4:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hT:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bd(z)
y=z[0]
x=z[1]
return new H.hT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iw:{"^":"a;a,b,c,d,e,f",
T:function(a){var z,y,x
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
ak:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iw(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hD:{"^":"Q;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dS:function(a,b){return new H.hD(a,b==null?null:b.method)}}},
hf:{"^":"Q;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
n:{
cv:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hf(a,y,z?null:b.receiver)}}},
iN:{"^":"Q;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lf:{"^":"m:16;a",
$1:function(a){if(!!J.F(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eQ:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isag:1},
m:{"^":"a;",
i:function(a){return"Closure '"+H.aP(this).trim()+"'"},
gcd:function(){return this},
$isbE:1,
gcd:function(){return this}},
ec:{"^":"m;"},
ig:{"^":"ec;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cm:{"^":"ec;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.bi(this.a)
else y=typeof z!=="object"?J.aH(z):H.bi(z)
return(y^H.bi(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aP(z)+"'")},
n:{
cn:function(a){return a.a},
de:function(a){return a.c},
bW:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.bd(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ix:{"^":"Q;a",
i:function(a){return this.a},
n:{
al:function(a,b){return new H.ix("TypeError: "+H.f(P.bY(a))+": type '"+H.f0(a)+"' is not a subtype of type '"+b+"'")}}},
ft:{"^":"Q;a",
i:function(a){return this.a},
n:{
fu:function(a,b){return new H.ft("CastError: "+H.f(P.bY(a))+": type '"+H.f0(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"Q;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
n:{
i2:function(a){return new H.i1(a)}}},
aO:{"^":"dN;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gR:function(a){return new H.dK(this,[H.u(this,0)])},
bN:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bt(y,b)}else return this.e0(b)},
e0:function(a){var z=this.d
if(z==null)return!1
return this.b5(this.aR(z,J.aH(a)&0x3ffffff),a)>=0},
m:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ax(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ax(w,b)
x=y==null?null:y.b
return x}else return this.e1(b)},
e1:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aR(z,J.aH(a)&0x3ffffff)
x=this.b5(y,a)
if(x<0)return
return y[x].b},
H:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aU()
this.b=z}this.bn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aU()
this.c=y}this.bn(y,b,c)}else{x=this.d
if(x==null){x=this.aU()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.aR(x,w)
if(v==null)this.aY(x,w,[this.aV(b,c)])
else{u=this.b5(v,b)
if(u>=0)v[u].b=c
else v.push(this.aV(b,c))}}},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.ax(this))
z=z.c}},
bn:function(a,b,c){var z
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
z=this.ax(a,b)
if(z==null)this.aY(a,b,this.aV(b,c))
else z.b=c},
cV:function(){this.r=this.r+1&67108863},
aV:function(a,b){var z,y
z=new H.hi(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cV()
return z},
b5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dO(this)},
ax:function(a,b){return a[b]},
aR:function(a,b){return a[b]},
aY:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
bt:function(a,b){return this.ax(a,b)!=null},
aU:function(){var z=Object.create(null)
this.aY(z,"<non-identifier-key>",z)
this.cS(z,"<non-identifier-key>")
return z},
$isdJ:1},
hi:{"^":"a;a,b,0c,0d"},
dK:{"^":"dy;a,$ti",
gk:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.hj(z,z.r,this.$ti)
y.c=z.e
return y}},
hj:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.ax(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kU:{"^":"m:16;a",
$1:function(a){return this.a(a)}},
kV:{"^":"m:40;a",
$2:function(a,b){return this.a(a,b)}},
kW:{"^":"m:39;a",
$1:function(a){return this.a(H.B(a))}},
hd:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdU:1,
n:{
he:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.h0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kM:function(a){return J.dF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cR:function(a){return a},
aB:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aD(b,a))},
kw:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.kL(a,b,c))
return b},
hx:{"^":"l;","%":"DataView;ArrayBufferView;cy|eK|eL|hw|eM|eN|ay"},
cy:{"^":"hx;",
gk:function(a){return a.length},
$isy:1,
$asy:I.cY},
hw:{"^":"eL;",
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
$asc_:function(){return[P.t]},
$asq:function(){return[P.t]},
$ish:1,
$ash:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
ay:{"^":"eN;",
$asc_:function(){return[P.A]},
$asq:function(){return[P.A]},
$ish:1,
$ash:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
lN:{"^":"ay;",
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lO:{"^":"ay;",
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lP:{"^":"ay;",
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lQ:{"^":"ay;",
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lR:{"^":"ay;",
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lS:{"^":"ay;",
gk:function(a){return a.length},
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hy:{"^":"ay;",
gk:function(a){return a.length},
m:function(a,b){H.aB(b,a,a.length)
return a[b]},
aJ:function(a,b,c){return new Uint8Array(a.subarray(b,H.kw(b,c,a.length)))},
"%":";Uint8Array"},
eK:{"^":"cy+q;"},
eL:{"^":"eK+c_;"},
eM:{"^":"cy+q;"},
eN:{"^":"eM+c_;"}}],["","",,P,{"^":"",
j5:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kE()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b0(new P.j7(z),1)).observe(y,{childList:true})
return new P.j6(z,y,x)}else if(self.setImmediate!=null)return P.kF()
return P.kG()},
mk:[function(a){self.scheduleImmediate(H.b0(new P.j8(H.i(a,{func:1,ret:-1})),0))},"$1","kE",4,0,10],
ml:[function(a){self.setImmediate(H.b0(new P.j9(H.i(a,{func:1,ret:-1})),0))},"$1","kF",4,0,10],
mm:[function(a){P.cF(C.h,H.i(a,{func:1,ret:-1}))},"$1","kG",4,0,10],
cF:function(a,b){var z
H.i(b,{func:1,ret:-1})
z=C.e.af(a.a,1000)
return P.kb(z<0?0:z,b)},
eg:function(a,b){var z
H.i(b,{func:1,ret:-1,args:[P.aQ]})
z=C.e.af(a.a,1000)
return P.kc(z<0?0:z,b)},
kA:function(a,b){if(H.bQ(a,{func:1,args:[P.a,P.ag]}))return b.ep(a,null,P.a,P.ag)
if(H.bQ(a,{func:1,args:[P.a]}))return H.i(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kz:function(){var z,y
for(;z=$.aZ,z!=null;){$.bw=null
y=z.b
$.aZ=y
if(y==null)$.bv=null
z.a.$0()}},
mw:[function(){$.cT=!0
try{P.kz()}finally{$.bw=null
$.cT=!1
if($.aZ!=null)$.$get$cO().$1(P.f4())}},"$0","f4",0,0,2],
f_:function(a){var z=new P.eC(H.i(a,{func:1,ret:-1}))
if($.aZ==null){$.bv=z
$.aZ=z
if(!$.cT)$.$get$cO().$1(P.f4())}else{$.bv.b=z
$.bv=z}},
kD:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aZ
if(z==null){P.f_(a)
$.bw=$.bv
return}y=new P.eC(a)
x=$.bw
if(x==null){y.b=z
$.bw=y
$.aZ=y}else{y.b=x.b
x.b=y
$.bw=y
if(y.b==null)$.bv=y}},
l8:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.J
if(C.d===y){P.cd(null,null,C.d,a)
return}y.toString
P.cd(null,null,y,H.i(y.b0(a),z))},
ef:function(a,b){var z,y
z={func:1,ret:-1}
H.i(b,z)
y=$.J
if(y===C.d){y.toString
return P.cF(a,b)}return P.cF(a,H.i(y.b0(b),z))},
is:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aQ]}
H.i(b,z)
y=$.J
if(y===C.d){y.toString
return P.eg(a,b)}x=y.bK(b,P.aQ)
$.J.toString
return P.eg(a,H.i(x,z))},
cc:function(a,b,c,d,e){var z={}
z.a=d
P.kD(new P.kB(z,e))},
eY:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
eZ:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kC:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
cd:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b0(d):c.dG(d,-1)
P.f_(d)},
j7:{"^":"m:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j6:{"^":"m:24;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j8:{"^":"m:0;a",
$0:function(){this.a.$0()}},
j9:{"^":"m:0;a",
$0:function(){this.a.$0()}},
eU:{"^":"a;a,0b,c",
cG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b0(new P.ke(this,b),0),a)
else throw H.c(P.a9("`setTimeout()` not found."))},
cH:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b0(new P.kd(this,a,Date.now(),b),0),a)
else throw H.c(P.a9("Periodic timer."))},
$isaQ:1,
n:{
kb:function(a,b){var z=new P.eU(!0,0)
z.cG(a,b)
return z},
kc:function(a,b){var z=new P.eU(!1,0)
z.cH(a,b)
return z}}},
ke:{"^":"m:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kd:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ct(w,x)}z.c=y
this.d.$1(z)}},
aY:{"^":"a;0a,b,c,d,e,$ti",
e7:function(a){if(this.c!==6)return!0
return this.b.b.bc(H.i(this.d,{func:1,ret:P.L,args:[P.a]}),a.a,P.L,P.a)},
e_:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bQ(z,{func:1,args:[P.a,P.ag]}))return H.cZ(w.ey(z,a.a,a.b,null,y,P.ag),x)
else return H.cZ(w.bc(H.i(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
au:{"^":"a;bC:a<,b,0dm:c<,$ti",
c6:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kA(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.au(0,$.J,[c])
w=b==null?1:3
this.bo(new P.aY(x,w,a,b,[z,c]))
return x},
eC:function(a,b){return this.c6(a,null,b)},
bo:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.k(this.c,"$isau")
z=y.a
if(z<4){y.bo(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cd(null,null,z,H.i(new P.jo(this,a),{func:1,ret:-1}))}},
bz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isau")
y=u.a
if(y<4){u.bz(a)
return}this.a=y
this.c=u.c}z.a=this.az(a)
y=this.b
y.toString
P.cd(null,null,y,H.i(new P.jt(z,this),{func:1,ret:-1}))}},
aX:function(){var z=H.k(this.c,"$isaY")
this.c=null
return this.az(z)},
az:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
br:function(a){var z,y,x,w
z=H.u(this,0)
H.cZ(a,{futureOr:1,type:z})
y=this.$ti
x=H.by(a,"$isbb",y,"$asbb")
if(x){z=H.by(a,"$isau",y,null)
if(z)P.eF(a,this)
else P.jp(a,this)}else{w=this.aX()
H.x(a,z)
this.a=4
this.c=a
P.bu(this,w)}},
aN:[function(a,b){var z
H.k(b,"$isag")
z=this.aX()
this.a=8
this.c=new P.a5(a,b)
P.bu(this,z)},function(a){return this.aN(a,null)},"eK","$2","$1","gcN",4,2,28],
$isbb:1,
n:{
jp:function(a,b){var z,y,x
b.a=1
try{a.c6(new P.jq(b),new P.jr(b),null)}catch(x){z=H.a3(x)
y=H.b2(x)
P.l8(new P.js(b,z,y))}},
eF:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isau")
if(z>=4){y=b.aX()
b.a=a.a
b.c=a.c
P.bu(b,y)}else{y=H.k(b.c,"$isaY")
b.a=2
b.c=a
a.bz(y)}},
bu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa5")
y=y.b
u=v.a
t=v.b
y.toString
P.cc(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bu(z.a,b)}y=z.a
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
P.cc(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.jw(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jv(x,b,r).$0()}else if((y&2)!==0)new P.ju(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.F(y).$isbb){if(y.a>=4){n=H.k(t.c,"$isaY")
t.c=null
b=t.az(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eF(y,t)
return}}m=b.b
n=H.k(m.c,"$isaY")
m.c=null
b=m.az(n)
y=x.a
u=x.b
if(!y){H.x(u,H.u(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa5")
m.a=8
m.c=u}z.a=m
y=m}}}},
jo:{"^":"m:0;a,b",
$0:function(){P.bu(this.a,this.b)}},
jt:{"^":"m:0;a,b",
$0:function(){P.bu(this.b,this.a.a)}},
jq:{"^":"m:11;a",
$1:function(a){var z=this.a
z.a=0
z.br(a)}},
jr:{"^":"m:35;a",
$2:function(a,b){this.a.aN(a,H.k(b,"$isag"))},
$1:function(a){return this.$2(a,null)}},
js:{"^":"m:0;a,b,c",
$0:function(){this.a.aN(this.b,this.c)}},
jw:{"^":"m:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c4(H.i(w.d,{func:1}),null)}catch(v){y=H.a3(v)
x=H.b2(v)
if(this.d){w=H.k(this.a.a.c,"$isa5").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa5")
else u.b=new P.a5(y,x)
u.a=!0
return}if(!!J.F(z).$isbb){if(z instanceof P.au&&z.gbC()>=4){if(z.gbC()===8){w=this.b
w.b=H.k(z.gdm(),"$isa5")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eC(new P.jx(t),null)
w.a=!1}}},
jx:{"^":"m:32;a",
$1:function(a){return this.a}},
jv:{"^":"m:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.x(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.bc(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a3(t)
y=H.b2(t)
x=this.a
x.b=new P.a5(z,y)
x.a=!0}}},
ju:{"^":"m:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa5")
w=this.c
if(w.e7(z)&&w.e!=null){v=this.b
v.b=w.e_(z)
v.a=!1}}catch(u){y=H.a3(u)
x=H.b2(u)
w=H.k(this.a.a.c,"$isa5")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a5(y,x)
s.a=!0}}},
eC:{"^":"a;a,0b"},
cB:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.au(0,$.J,[P.A])
z.a=0
this.e6(new P.ij(z,this),!0,new P.ik(z,y),y.gcN())
return y}},
ij:{"^":"m;a,b",
$1:function(a){H.x(a,H.ac(this.b,"cB",0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.ac(this.b,"cB",0)]}}},
ik:{"^":"m:0;a,b",
$0:function(){this.b.br(this.a.a)}},
e9:{"^":"a;$ti"},
ii:{"^":"a;"},
aQ:{"^":"a;"},
a5:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isQ:1},
kl:{"^":"a;",$ismj:1},
kB:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
jR:{"^":"kl;",
ez:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.J){a.$0()
return}P.eY(null,null,this,a,-1)}catch(x){z=H.a3(x)
y=H.b2(x)
P.cc(null,null,this,z,H.k(y,"$isag"))}},
eA:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.J){a.$1(b)
return}P.eZ(null,null,this,a,b,-1,c)}catch(x){z=H.a3(x)
y=H.b2(x)
P.cc(null,null,this,z,H.k(y,"$isag"))}},
dG:function(a,b){return new P.jT(this,H.i(a,{func:1,ret:b}),b)},
b0:function(a){return new P.jS(this,H.i(a,{func:1,ret:-1}))},
bK:function(a,b){return new P.jU(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
c4:function(a,b){H.i(a,{func:1,ret:b})
if($.J===C.d)return a.$0()
return P.eY(null,null,this,a,b)},
bc:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.J===C.d)return a.$1(b)
return P.eZ(null,null,this,a,b,c,d)},
ey:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.J===C.d)return a.$2(b,c)
return P.kC(null,null,this,a,b,c,d,e,f)},
ep:function(a,b,c,d){return H.i(a,{func:1,ret:b,args:[c,d]})}},
jT:{"^":"m;a,b,c",
$0:function(){return this.a.c4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jS:{"^":"m:2;a,b",
$0:function(){return this.a.ez(this.b)}},
jU:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.eA(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hk:function(a,b,c){H.bS(a)
return H.w(H.kN(a,new H.aO(0,0,[b,c])),"$isdJ",[b,c],"$asdJ")},
dL:function(a,b){return new H.aO(0,0,[a,b])},
bJ:function(a,b,c,d){return new P.jE(0,0,[d])},
h7:function(a,b,c){var z,y
if(P.cU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bx()
C.a.h(y,a)
try{P.ky(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.ea(b,H.l0(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cr:function(a,b,c){var z,y,x
if(P.cU(a))return b+"..."+c
z=new P.c6(b)
y=$.$get$bx()
C.a.h(y,a)
try{x=z
x.a=P.ea(x.gac(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gac()+c
y=z.gac()
return y.charCodeAt(0)==0?y:y},
cU:function(a){var z,y
for(z=0;y=$.$get$bx(),z<y.length;++z)if(a===y[z])return!0
return!1},
ky:function(a,b){var z,y,x,w,v,u,t,s,r,q
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
dM:function(a,b){var z,y
z=P.bJ(null,null,null,b)
for(y=J.aI(a);y.v();)z.h(0,H.x(y.gD(y),b))
return z},
dO:function(a){var z,y,x
z={}
if(P.cU(a))return"{...}"
y=new P.c6("")
try{C.a.h($.$get$bx(),a)
x=y
x.a=x.gac()+"{"
z.a=!0
J.fj(a,new P.ho(z,y))
z=y
z.a=z.gac()+"}"}finally{z=$.$get$bx()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gac()
return z.charCodeAt(0)==0?z:z},
jE:{"^":"jy;a,0b,0c,0d,0e,0f,r,$ti",
gI:function(a){var z=new P.eJ(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$iscb")!=null}else{y=this.cO(b)
return y}},
cO:function(a){var z=this.d
if(z==null)return!1
return this.aQ(this.bx(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cQ()
this.b=z}return this.bp(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cQ()
this.c=y}return this.bp(y,b)}else return this.cI(0,b)},
cI:function(a,b){var z,y,x
H.x(b,H.u(this,0))
z=this.d
if(z==null){z=P.cQ()
this.d=z}y=this.bs(b)
x=z[y]
if(x==null)z[y]=[this.aM(b)]
else{if(this.aQ(x,b)>=0)return!1
x.push(this.aM(b))}return!0},
G:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bA(this.c,b)
else return this.dh(0,b)},
dh:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bx(z,b)
x=this.aQ(y,b)
if(x<0)return!1
this.bE(y.splice(x,1)[0])
return!0},
bp:function(a,b){H.x(b,H.u(this,0))
if(H.k(a[b],"$iscb")!=null)return!1
a[b]=this.aM(b)
return!0},
bA:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscb")
if(z==null)return!1
this.bE(z)
delete a[b]
return!0},
bq:function(){this.r=this.r+1&67108863},
aM:function(a){var z,y
z=new P.cb(H.x(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bq()
return z},
bE:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bq()},
bs:function(a){return J.aH(a)&0x3ffffff},
bx:function(a,b){return a[this.bs(b)]},
aQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
n:{
cQ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cb:{"^":"a;a,0b,0c"},
eJ:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.ax(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.u(this,0))
this.c=z.b
return!0}}}},
jy:{"^":"i3;"},
c2:{"^":"jF;",$ish:1,$isd:1},
q:{"^":"a;$ti",
gI:function(a){return new H.cw(a,this.gk(a),0,[H.bz(this,a,"q",0)])},
w:function(a,b){return this.m(a,b)},
eE:function(a,b){var z,y,x
z=H.b([],[H.bz(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.G(x)
if(!(y<x))break
C.a.H(z,y,this.m(a,y));++y}return z},
eD:function(a){return this.eE(a,!0)},
i:function(a){return P.cr(a,"[","]")}},
dN:{"^":"Z;"},
ho:{"^":"m:13;a,b",
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
H.i(b,{func:1,ret:-1,args:[H.bz(this,a,"Z",0),H.bz(this,a,"Z",1)]})
for(z=J.aI(this.gR(a));z.v();){y=z.gD(z)
b.$2(y,this.m(a,y))}},
gk:function(a){return J.aJ(this.gR(a))},
i:function(a){return P.dO(a)},
$isR:1},
i5:{"^":"a;$ti",
a_:function(a,b){var z
for(z=J.aI(H.w(b,"$ish",this.$ti,"$ash"));z.v();)this.h(0,z.gD(z))},
i:function(a){return P.cr(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d9("index"))
if(b<0)H.W(P.a2(b,0,null,"index",null))
for(z=new P.eJ(this,this.r,this.$ti),z.c=this.e,y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
$ish:1},
i3:{"^":"i5;"},
jF:{"^":"a+q;"}}],["","",,P,{"^":"",cp:{"^":"a;$ti"},bX:{"^":"ii;$ti"},fS:{"^":"cp;",
$ascp:function(){return[P.e,[P.d,P.A]]}},h5:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},h4:{"^":"bX;a",
cP:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.c6("")
if(w>b)v.a+=C.b.ak(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fn(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbX:function(){return[P.e,P.e]}},iR:{"^":"fS;a"},iS:{"^":"bX;",
dM:function(a,b,c){var z,y,x,w
z=a.length
P.dZ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kj(0,0,x)
if(w.cU(a,b,z)!==z)w.bF(C.b.b4(a,z-1),0)
return C.L.aJ(x,0,w.b)},
dL:function(a){return this.dM(a,0,null)},
$asbX:function(){return[P.e,[P.d,P.A]]}},kj:{"^":"a;a,b,c",
bF:function(a,b){var z,y,x,w,v
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
cU:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.b4(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.ab(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bF(w,C.b.ab(a,u)))x=u}else if(w<=2047){v=this.b
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
fU:function(a){var z=J.F(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.aP(a)+"'"},
hl:function(a,b,c,d){var z,y
H.x(b,d)
z=J.h9(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.H(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hm:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gI(a);x.v();)C.a.h(y,H.x(x.gD(x),c))
if(b)return y
return H.w(J.bd(y),"$isd",z,"$asd")},
cC:function(a,b,c){var z,y
z=P.A
H.w(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.w(a,"$isaN",[z],"$asaN")
y=a.length
c=P.dZ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a2()
z=c<y}else z=!0
return H.dY(z?C.a.aJ(a,b,c):a)}return P.il(a,b,c)},
il:function(a,b,c){var z,y,x
H.w(a,"$ish",[P.A],"$ash")
z=J.aI(a)
for(y=0;y<b;++y)if(!z.v())throw H.c(P.a2(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gD(z))
return H.dY(x)},
hV:function(a,b,c){return new H.hd(a,H.he(a,!1,!0,!1))},
eW:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.A],"$asd")
if(c===C.l){z=$.$get$eV().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.dL(H.x(b,H.ac(c,"cp",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cz(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fU(a)},
Y:function(a){return new P.eE(a)},
d3:function(a){H.l6(a)},
L:{"^":"a;"},
"+bool":0,
b8:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a&&this.b===b.b},
gL:function(a){var z=this.a
return(z^C.e.aA(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fF(H.hP(this))
y=P.bC(H.hN(this))
x=P.bC(H.hJ(this))
w=P.bC(H.hK(this))
v=P.bC(H.hM(this))
u=P.bC(H.hO(this))
t=P.fG(H.hL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fF:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bC:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"P;"},
"+double":0,
aM:{"^":"a;a",
p:function(a,b){return new P.aM(C.e.U(this.a*b))},
a2:function(a,b){return C.e.a2(this.a,H.k(b,"$isaM").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aM))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fO()
y=this.a
if(y<0)return"-"+new P.aM(0-y).i(0)
x=z.$1(C.e.af(y,6e7)%60)
w=z.$1(C.e.af(y,1e6)%60)
v=new P.fN().$1(y%1e6)
return""+C.e.af(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
n:{
dx:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fN:{"^":"m:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fO:{"^":"m:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"a;"},
dT:{"^":"Q;",
i:function(a){return"Throw of null."}},
am:{"^":"Q;a,b,c,d",
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gaP()+y+x
if(!this.a)return w
v=this.gaO()
u=P.bY(this.b)
return w+v+": "+H.f(u)},
n:{
bU:function(a,b,c){return new P.am(!0,a,b,c)},
d9:function(a){return new P.am(!1,null,a,"Must not be null")}}},
c5:{"^":"am;e,f,a,b,c,d",
gaP:function(){return"RangeError"},
gaO:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
n:{
bM:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
dZ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.G(a)
if(0<=a){if(typeof c!=="number")return H.G(c)
z=a>c}else z=!0
if(z)throw H.c(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.G(c)
z=b>c}else z=!0
if(z)throw H.c(P.a2(b,a,c,"end",f))
return b}return c}}},
h6:{"^":"am;e,k:f>,a,b,c,d",
gaP:function(){return"RangeError"},
gaO:function(){if(J.fg(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
n:{
H:function(a,b,c,d,e){var z=H.U(e!=null?e:J.aJ(b))
return new P.h6(b,z,!0,a,c,"Index out of range")}}},
iP:{"^":"Q;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
a9:function(a){return new P.iP(a)}}},
iM:{"^":"Q;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
ev:function(a){return new P.iM(a)}}},
cA:{"^":"Q;a",
i:function(a){return"Bad state: "+this.a},
n:{
e8:function(a){return new P.cA(a)}}},
fA:{"^":"Q;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bY(z))+"."},
n:{
ax:function(a){return new P.fA(a)}}},
hE:{"^":"a;",
i:function(a){return"Out of Memory"},
$isQ:1},
e6:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isQ:1},
fD:{"^":"Q;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eE:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h0:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.ak(x,0,75)+"..."
return y+"\n"+x}},
bE:{"^":"a;"},
A:{"^":"P;"},
"+int":0,
h:{"^":"a;$ti",
bd:["cp",function(a,b){var z=H.ac(this,"h",0)
return new H.cN(this,H.i(b,{func:1,ret:P.L,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gI(this)
for(y=0;z.v();)++y
return y},
ga8:function(a){var z,y
z=this.gI(this)
if(!z.v())throw H.c(H.c1())
y=z.gD(z)
if(z.v())throw H.c(H.h8())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d9("index"))
if(b<0)H.W(P.a2(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.v();){x=z.gD(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
i:function(a){return P.h7(this,"(",")")}},
cs:{"^":"a;$ti"},
d:{"^":"a;$ti",$ish:1},
"+List":0,
R:{"^":"a;$ti"},
D:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
P:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gL:function(a){return H.bi(this)},
i:function(a){return"Instance of '"+H.aP(this)+"'"},
toString:function(){return this.i(this)}},
ag:{"^":"a;"},
e:{"^":"a;",$isdU:1},
"+String":0,
c6:{"^":"a;ac:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
ea:function(a,b,c){var z=J.aI(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gD(z))
while(z.v())}else{a+=H.f(z.gD(z))
for(;z.v();)a=a+c+H.f(z.gD(z))}return a}}}}],["","",,W,{"^":"",
d8:function(a){var z=document.createElement("a")
return z},
dj:function(a,b){var z=document.createElement("canvas")
return z},
fP:function(a,b,c){var z,y
z=document.body
y=(z&&C.m).V(z,a,b,c)
y.toString
z=W.v
z=new H.cN(new W.ab(y),H.i(new W.fQ(),{func:1,ret:P.L,args:[z]}),[z])
return H.k(z.ga8(z),"$isK")},
fR:function(a){H.k(a,"$isX")
return"wheel"},
b9:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fm(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a3(x)}return z},
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eI:function(a,b,c,d){var z,y
z=W.c9(W.c9(W.c9(W.c9(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f1:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.d)return a
return z.bK(a,b)},
a7:{"^":"K;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lg:{"^":"l;0k:length=","%":"AccessibleNodeList"},
lh:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
li:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
db:{"^":"a7;",$isdb:1,"%":"HTMLBaseElement"},
fs:{"^":"l;","%":";Blob"},
bV:{"^":"a7;",$isbV:1,"%":"HTMLBodyElement"},
co:{"^":"a7;",
be:function(a,b,c){var z=a.getContext(b,P.kH(c,null))
return z},
$isco:1,
"%":"HTMLCanvasElement"},
lo:{"^":"v;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lq:{"^":"fC;0k:length=","%":"CSSPerspective"},
b7:{"^":"l;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lr:{"^":"jd;0k:length=",
cf:function(a,b){var z=a.getPropertyValue(this.cL(a,b))
return z==null?"":z},
cL:function(a,b){var z,y
z=$.$get$dp()
y=z[b]
if(typeof y==="string")return y
y=this.dA(a,b)
z[b]=y
return y},
dA:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
gb1:function(a){return a.bottom},
ga0:function(a){return a.height},
gah:function(a){return a.left},
gbb:function(a){return a.right},
gav:function(a){return a.top},
ga1:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fB:{"^":"a;",
gah:function(a){return this.cf(a,"left")}},
dq:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fC:{"^":"l;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ls:{"^":"dq;0k:length=","%":"CSSTransformValue"},
lt:{"^":"dq;0k:length=","%":"CSSUnparsedValue"},
lu:{"^":"l;0k:length=","%":"DataTransferItemList"},
aL:{"^":"a7;",$isaL:1,"%":"HTMLDivElement"},
lv:{"^":"l;",
i:function(a){return String(a)},
"%":"DOMException"},
lw:{"^":"jf;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[[P.a0,P.P]]},
$asq:function(){return[[P.a0,P.P]]},
$ish:1,
$ash:function(){return[[P.a0,P.P]]},
$isd:1,
$asd:function(){return[[P.a0,P.P]]},
$asr:function(){return[[P.a0,P.P]]},
"%":"ClientRectList|DOMRectList"},
fM:{"^":"l;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga1(a))+" x "+H.f(this.ga0(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.by(b,"$isa0",[P.P],"$asa0")
if(!z)return!1
z=J.b1(b)
return a.left===z.gah(b)&&a.top===z.gav(b)&&this.ga1(a)===z.ga1(b)&&this.ga0(a)===z.ga0(b)},
gL:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga1(a)&0x1FFFFFFF,this.ga0(a)&0x1FFFFFFF)},
gb1:function(a){return a.bottom},
ga0:function(a){return a.height},
gah:function(a){return a.left},
gbb:function(a){return a.right},
gav:function(a){return a.top},
ga1:function(a){return a.width},
$isa0:1,
$asa0:function(){return[P.P]},
"%":";DOMRectReadOnly"},
lx:{"^":"jh;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[P.e]},
$asq:function(){return[P.e]},
$ish:1,
$ash:function(){return[P.e]},
$isd:1,
$asd:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"DOMStringList"},
ly:{"^":"l;0k:length=","%":"DOMTokenList"},
jc:{"^":"c2;bw:a<,b",
gk:function(a){return this.b.length},
m:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.k(z[b],"$isK")},
h:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var z=this.eD(this)
return new J.an(z,z.length,0,[H.u(z,0)])},
$asq:function(){return[W.K]},
$ash:function(){return[W.K]},
$asd:function(){return[W.K]}},
K:{"^":"v;0eB:tagName=",
gdF:function(a){return new W.ji(a)},
gbL:function(a){return new W.jc(a,a.children)},
gbM:function(a){return P.hS(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.P)},
i:function(a){return a.localName},
V:["aL",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dA
if(z==null){z=H.b([],[W.aj])
y=new W.dR(z)
C.a.h(z,W.eG(null))
C.a.h(z,W.eR())
$.dA=y
d=y}else d=z
z=$.dz
if(z==null){z=new W.eX(d)
$.dz=z
c=z}else{z.a=d
c=z}}if($.ao==null){z=document
y=z.implementation.createHTMLDocument("")
$.ao=y
$.cq=y.createRange()
y=$.ao
y.toString
y=y.createElement("base")
H.k(y,"$isdb")
y.href=z.baseURI
$.ao.head.appendChild(y)}z=$.ao
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbV")}z=$.ao
if(!!this.$isbV)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.ao.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.J,a.tagName)){$.cq.selectNodeContents(x)
w=$.cq.createContextualFragment(b)}else{x.innerHTML=b
w=$.ao.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.ao.body
if(x==null?z!=null:x!==z)J.d7(x)
c.bf(w)
document.adoptNode(w)
return w},function(a,b,c){return this.V(a,b,c,null)},"dN",null,null,"gf3",5,5,null],
cl:function(a,b,c,d){a.textContent=null
a.appendChild(this.V(a,b,c,d))},
ck:function(a,b){return this.cl(a,b,null,null)},
$isK:1,
"%":";Element"},
fQ:{"^":"m:15;",
$1:function(a){return!!J.F(H.k(a,"$isv")).$isK}},
a1:{"^":"l;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
X:{"^":"l;",
bH:["cn",function(a,b,c,d){H.i(c,{func:1,args:[W.a1]})
if(c!=null)this.cJ(a,b,c,!1)}],
cJ:function(a,b,c,d){return a.addEventListener(b,H.b0(H.i(c,{func:1,args:[W.a1]}),1),!1)},
$isX:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eO|eP|eS|eT"},
ba:{"^":"fs;",$isba:1,"%":"File"},
lz:{"^":"jn;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asr:function(){return[W.ba]},
"%":"FileList"},
lA:{"^":"X;0k:length=","%":"FileWriter"},
lB:{"^":"a7;0k:length=","%":"HTMLFormElement"},
bc:{"^":"l;",$isbc:1,"%":"Gamepad"},
lC:{"^":"l;0k:length=","%":"History"},
lD:{"^":"jA;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ish:1,
$ash:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$asr:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
be:{"^":"cG;",$isbe:1,"%":"KeyboardEvent"},
lH:{"^":"l;",
i:function(a){return String(a)},
"%":"Location"},
lI:{"^":"l;0k:length=","%":"MediaList"},
lJ:{"^":"X;",
bH:function(a,b,c,d){H.i(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.cn(a,b,c,!1)},
"%":"MessagePort"},
lK:{"^":"jG;",
m:function(a,b){return P.av(a.get(H.B(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.av(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.ht(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"MIDIInputMap"},
ht:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lL:{"^":"jH;",
m:function(a,b){return P.av(a.get(H.B(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.av(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.hu(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hu:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bf:{"^":"l;",$isbf:1,"%":"MimeType"},
lM:{"^":"jJ;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bf]},
$asq:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asr:function(){return[W.bf]},
"%":"MimeTypeArray"},
ae:{"^":"cG;",$isae:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ab:{"^":"c2;a",
ga8:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.e8("No elements"))
if(y>1)throw H.c(P.e8("More than one element"))
return z.firstChild},
a_:function(a,b){var z,y,x,w
H.w(b,"$ish",[W.v],"$ash")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gI:function(a){var z=this.a.childNodes
return new W.dB(z,z.length,-1,[H.bz(C.M,z,"r",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asq:function(){return[W.v]},
$ash:function(){return[W.v]},
$asd:function(){return[W.v]}},
v:{"^":"X;0b8:previousSibling=",
eq:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.co(a):z},
$isv:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lT:{"^":"l;",
eo:[function(a){return a.previousNode()},"$0","gb8",1,0,17],
"%":"NodeIterator"},
hz:{"^":"jL;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ish:1,
$ash:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$asr:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
bh:{"^":"l;0k:length=",$isbh:1,"%":"Plugin"},
lX:{"^":"jP;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asr:function(){return[W.bh]},
"%":"PluginArray"},
lZ:{"^":"jV;",
m:function(a,b){return P.av(a.get(H.B(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.av(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.i0(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"RTCStatsReport"},
i0:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m0:{"^":"a7;0k:length=","%":"HTMLSelectElement"},
bj:{"^":"X;",$isbj:1,"%":"SourceBuffer"},
m1:{"^":"eP;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asr:function(){return[W.bj]},
"%":"SourceBufferList"},
bk:{"^":"l;",$isbk:1,"%":"SpeechGrammar"},
m2:{"^":"k0;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$ish:1,
$ash:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asr:function(){return[W.bk]},
"%":"SpeechGrammarList"},
bl:{"^":"l;0k:length=",$isbl:1,"%":"SpeechRecognitionResult"},
m4:{"^":"k3;",
m:function(a,b){return a.getItem(H.B(b))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new W.ih(z))
return z},
gk:function(a){return a.length},
$asZ:function(){return[P.e,P.e]},
$isR:1,
$asR:function(){return[P.e,P.e]},
"%":"Storage"},
ih:{"^":"m:31;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"l;",$isbm:1,"%":"CSSStyleSheet|StyleSheet"},
im:{"^":"a7;",
V:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
z=W.fP("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ab(y).a_(0,new W.ab(z))
return y},
"%":"HTMLTableElement"},
m6:{"^":"a7;",
V:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.r.V(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga8(z)
x.toString
z=new W.ab(x)
w=z.ga8(z)
y.toString
w.toString
new W.ab(y).a_(0,new W.ab(w))
return y},
"%":"HTMLTableRowElement"},
m7:{"^":"a7;",
V:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.r.V(z.createElement("table"),b,c,d)
z.toString
z=new W.ab(z)
x=z.ga8(z)
y.toString
x.toString
new W.ab(y).a_(0,new W.ab(x))
return y},
"%":"HTMLTableSectionElement"},
ed:{"^":"a7;",$ised:1,"%":"HTMLTemplateElement"},
bn:{"^":"X;",$isbn:1,"%":"TextTrack"},
bo:{"^":"X;",$isbo:1,"%":"TextTrackCue|VTTCue"},
m9:{"^":"ka;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asr:function(){return[W.bo]},
"%":"TextTrackCueList"},
ma:{"^":"eT;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asr:function(){return[W.bn]},
"%":"TextTrackList"},
mb:{"^":"l;0k:length=","%":"TimeRanges"},
bp:{"^":"l;",$isbp:1,"%":"Touch"},
aR:{"^":"cG;",$isaR:1,"%":"TouchEvent"},
mc:{"^":"kg;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asr:function(){return[W.bp]},
"%":"TouchList"},
md:{"^":"l;0k:length=","%":"TrackDefaultList"},
mf:{"^":"l;",
eo:[function(a){return a.previousNode()},"$0","gb8",1,0,17],
"%":"TreeWalker"},
cG:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mh:{"^":"l;",
i:function(a){return String(a)},
"%":"URL"},
mi:{"^":"X;0k:length=","%":"VideoTrackList"},
bt:{"^":"ae;",
gdQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.a9("deltaY is not supported"))},
gdP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.a9("deltaX is not supported"))},
$isbt:1,
"%":"WheelEvent"},
j4:{"^":"X;",
dl:function(a,b){return a.requestAnimationFrame(H.b0(H.i(b,{func:1,ret:-1,args:[P.P]}),1))},
cT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eD:{"^":"v;",$iseD:1,"%":"Attr"},
mn:{"^":"kn;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$asr:function(){return[W.b7]},
"%":"CSSRuleList"},
mo:{"^":"fM;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.by(b,"$isa0",[P.P],"$asa0")
if(!z)return!1
z=J.b1(b)
return a.left===z.gah(b)&&a.top===z.gav(b)&&a.width===z.ga1(b)&&a.height===z.ga0(b)},
gL:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga0:function(a){return a.height},
ga1:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mq:{"^":"kp;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asr:function(){return[W.bc]},
"%":"GamepadList"},
mt:{"^":"kr;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.v]},
$asq:function(){return[W.v]},
$ish:1,
$ash:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$asr:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mu:{"^":"kt;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asr:function(){return[W.bl]},
"%":"SpeechRecognitionResultList"},
mv:{"^":"kv;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asr:function(){return[W.bm]},
"%":"StyleSheetList"},
ja:{"^":"dN;bw:a<",
E:function(a,b){var z,y,x,w,v
H.i(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gR(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gR:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.k(z[w],"$iseD")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asZ:function(){return[P.e,P.e]},
$asR:function(){return[P.e,P.e]}},
ji:{"^":"ja;a",
m:function(a,b){return this.a.getAttribute(H.B(b))},
gk:function(a){return this.gR(this).length}},
jj:{"^":"cB;a,b,c,$ti",
e6:function(a,b,c,d){var z=H.u(this,0)
H.i(a,{func:1,ret:-1,args:[z]})
H.i(c,{func:1,ret:-1})
return W.T(this.a,this.b,a,!1,z)}},
mp:{"^":"jj;a,b,c,$ti"},
jk:{"^":"e9;a,b,c,d,e,$ti",
dB:function(){var z=this.d
if(z!=null&&this.a<=0)J.fi(this.b,this.c,z,!1)},
n:{
T:function(a,b,c,d,e){var z=c==null?null:W.f1(new W.jl(c),W.a1)
z=new W.jk(0,a,b,z,!1,[e])
z.dB()
return z}}},
jl:{"^":"m:5;a",
$1:function(a){return this.a.$1(H.k(a,"$isa1"))}},
bP:{"^":"a;a",
cE:function(a){var z,y
z=$.$get$cP()
if(z.a===0){for(y=0;y<262;++y)z.H(0,C.I[y],W.kR())
for(y=0;y<12;++y)z.H(0,C.j[y],W.kS())}},
ag:function(a){return $.$get$eH().M(0,W.b9(a))},
a5:function(a,b,c){var z,y,x
z=W.b9(a)
y=$.$get$cP()
x=y.m(0,H.f(z)+"::"+b)
if(x==null)x=y.m(0,"*::"+b)
if(x==null)return!1
return H.cV(x.$4(a,b,c,this))},
$isaj:1,
n:{
eG:function(a){var z,y
z=W.d8(null)
y=window.location
z=new W.bP(new W.jW(z,y))
z.cE(a)
return z},
mr:[function(a,b,c,d){H.k(a,"$isK")
H.B(b)
H.B(c)
H.k(d,"$isbP")
return!0},"$4","kR",16,0,19],
ms:[function(a,b,c,d){var z,y,x,w,v
H.k(a,"$isK")
H.B(b)
H.B(c)
z=H.k(d,"$isbP").a
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
return z},"$4","kS",16,0,19]}},
r:{"^":"a;$ti",
gI:function(a){return new W.dB(a,this.gk(a),-1,[H.bz(this,a,"r",0)])}},
dR:{"^":"a;a",
ag:function(a){return C.a.bJ(this.a,new W.hB(a))},
a5:function(a,b,c){return C.a.bJ(this.a,new W.hA(a,b,c))},
$isaj:1},
hB:{"^":"m:20;a",
$1:function(a){return H.k(a,"$isaj").ag(this.a)}},
hA:{"^":"m:20;a,b,c",
$1:function(a){return H.k(a,"$isaj").a5(this.a,this.b,this.c)}},
jX:{"^":"a;",
cF:function(a,b,c,d){var z,y,x
this.a.a_(0,c)
z=b.bd(0,new W.jY())
y=b.bd(0,new W.jZ())
this.b.a_(0,z)
x=this.c
x.a_(0,C.K)
x.a_(0,y)},
ag:function(a){return this.a.M(0,W.b9(a))},
a5:["cs",function(a,b,c){var z,y
z=W.b9(a)
y=this.c
if(y.M(0,H.f(z)+"::"+b))return this.d.dD(c)
else if(y.M(0,"*::"+b))return this.d.dD(c)
else{y=this.b
if(y.M(0,H.f(z)+"::"+b))return!0
else if(y.M(0,"*::"+b))return!0
else if(y.M(0,H.f(z)+"::*"))return!0
else if(y.M(0,"*::*"))return!0}return!1}],
$isaj:1},
jY:{"^":"m:21;",
$1:function(a){return!C.a.M(C.j,H.B(a))}},
jZ:{"^":"m:21;",
$1:function(a){return C.a.M(C.j,H.B(a))}},
k7:{"^":"jX;e,a,b,c,d",
a5:function(a,b,c){if(this.cs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.M(0,b)
return!1},
n:{
eR:function(){var z,y,x,w,v
z=P.e
y=P.dM(C.i,z)
x=H.u(C.i,0)
w=H.i(new W.k8(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.k7(y,P.bJ(null,null,null,z),P.bJ(null,null,null,z),P.bJ(null,null,null,z),null)
y.cF(null,new H.hr(C.i,w,[x,z]),v,null)
return y}}},
k8:{"^":"m:30;",
$1:function(a){return"TEMPLATE::"+H.f(H.B(a))}},
k6:{"^":"a;",
ag:function(a){var z=J.F(a)
if(!!z.$ise3)return!1
z=!!z.$iscD
if(z&&W.b9(a)==="foreignObject")return!1
if(z)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.b.aI(b,"on"))return!1
return this.ag(a)},
$isaj:1},
dB:{"^":"a;a,b,c,0d,$ti",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fh(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
aj:{"^":"a;"},
jW:{"^":"a;a,b",$ismg:1},
eX:{"^":"a;a",
bf:function(a){new W.kk(this).$2(a,null)},
an:function(a,b){if(b==null)J.d7(a)
else b.removeChild(a)},
dq:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fk(a)
x=y.gbw().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a3(t)}v="element unprintable"
try{v=J.a4(a)}catch(t){H.a3(t)}try{u=W.b9(a)
this.dn(H.k(a,"$isK"),b,z,v,u,H.k(y,"$isR"),H.B(x))}catch(t){if(H.a3(t) instanceof P.am)throw t
else{this.an(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dn:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.an(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ag(a)){this.an(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a5(a,"is",g)){this.an(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gR(f)
y=H.b(z.slice(0),[H.u(z,0)])
for(x=f.gR(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.j(y,x)
w=y[x]
if(!this.a.a5(a,J.fo(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.f(e)+" "+w+'="'+H.f(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.F(a).$ised)this.bf(a.content)},
$islU:1},
kk:{"^":"m:41;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dq(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.an(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fl(z)}catch(w){H.a3(w)
v=H.k(z,"$isv")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isv")}}},
jd:{"^":"l+fB;"},
je:{"^":"l+q;"},
jf:{"^":"je+r;"},
jg:{"^":"l+q;"},
jh:{"^":"jg+r;"},
jm:{"^":"l+q;"},
jn:{"^":"jm+r;"},
jz:{"^":"l+q;"},
jA:{"^":"jz+r;"},
jG:{"^":"l+Z;"},
jH:{"^":"l+Z;"},
jI:{"^":"l+q;"},
jJ:{"^":"jI+r;"},
jK:{"^":"l+q;"},
jL:{"^":"jK+r;"},
jO:{"^":"l+q;"},
jP:{"^":"jO+r;"},
jV:{"^":"l+Z;"},
eO:{"^":"X+q;"},
eP:{"^":"eO+r;"},
k_:{"^":"l+q;"},
k0:{"^":"k_+r;"},
k3:{"^":"l+Z;"},
k9:{"^":"l+q;"},
ka:{"^":"k9+r;"},
eS:{"^":"X+q;"},
eT:{"^":"eS+r;"},
kf:{"^":"l+q;"},
kg:{"^":"kf+r;"},
km:{"^":"l+q;"},
kn:{"^":"km+r;"},
ko:{"^":"l+q;"},
kp:{"^":"ko+r;"},
kq:{"^":"l+q;"},
kr:{"^":"kq+r;"},
ks:{"^":"l+q;"},
kt:{"^":"ks+r;"},
ku:{"^":"l+q;"},
kv:{"^":"ku+r;"}}],["","",,P,{"^":"",
av:function(a){var z,y,x,w,v
if(a==null)return
z=P.dL(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.B(y[w])
z.H(0,v,a[v])}return z},
kH:function(a,b){var z={}
a.E(0,new P.kI(z))
return z},
dw:function(){var z=$.dv
if(z==null){z=J.ck(window.navigator.userAgent,"Opera",0)
$.dv=z}return z},
fL:function(){var z,y
z=$.ds
if(z!=null)return z
y=$.dt
if(y==null){y=J.ck(window.navigator.userAgent,"Firefox",0)
$.dt=y}if(y)z="-moz-"
else{y=$.du
if(y==null){y=!P.dw()&&J.ck(window.navigator.userAgent,"Trident/",0)
$.du=y}if(y)z="-ms-"
else z=P.dw()?"-o-":"-webkit-"}$.ds=z
return z},
kI:{"^":"m:13;a",
$2:function(a,b){this.a[a]=b}},
fY:{"^":"c2;a,b",
gaS:function(){var z,y,x
z=this.b
y=H.ac(z,"q",0)
x=W.K
return new H.hp(new H.cN(z,H.i(new P.fZ(),{func:1,ret:P.L,args:[y]}),[y]),H.i(new P.h_(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aJ(this.gaS().a)},
m:function(a,b){var z=this.gaS()
return z.b.$1(J.cl(z.a,b))},
gI:function(a){var z=P.hm(this.gaS(),!1,W.K)
return new J.an(z,z.length,0,[H.u(z,0)])},
$asq:function(){return[W.K]},
$ash:function(){return[W.K]},
$asd:function(){return[W.K]}},
fZ:{"^":"m:15;",
$1:function(a){return!!J.F(H.k(a,"$isv")).$isK}},
h_:{"^":"m:26;",
$1:function(a){return H.b3(H.k(a,"$isv"),"$isK")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jQ:{"^":"a;$ti",
gbb:function(a){var z=this.a
if(typeof z!=="number")return z.J()
return H.x(z+this.c,H.u(this,0))},
gb1:function(a){var z=this.b
if(typeof z!=="number")return z.J()
return H.x(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.by(b,"$isa0",[P.P],"$asa0")
if(!z)return!1
z=this.a
y=J.b1(b)
x=y.gah(b)
if(z==null?x==null:z===x){x=this.b
w=y.gav(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.J()
w=H.u(this,0)
if(H.x(z+this.c,w)===y.gbb(b)){if(typeof x!=="number")return x.J()
z=H.x(x+this.d,w)===y.gb1(b)}else z=!1}else z=!1}else z=!1
return z},
gL:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.J()
v=H.u(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.J()
v=H.x(x+this.d,v)
return P.jB(P.ca(P.ca(P.ca(P.ca(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a0:{"^":"jQ;ah:a>,av:b>,a1:c>,a0:d>,$ti",n:{
hS:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a2()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.a2()
if(d<0)y=-d*0
else y=d
return new P.a0(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",bI:{"^":"l;",$isbI:1,"%":"SVGLength"},lG:{"^":"jD;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bI]},
$ish:1,
$ash:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asr:function(){return[P.bI]},
"%":"SVGLengthList"},bL:{"^":"l;",$isbL:1,"%":"SVGNumber"},lV:{"^":"jN;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bL]},
$ish:1,
$ash:function(){return[P.bL]},
$isd:1,
$asd:function(){return[P.bL]},
$asr:function(){return[P.bL]},
"%":"SVGNumberList"},lY:{"^":"l;0k:length=","%":"SVGPointList"},e3:{"^":"cD;",$ise3:1,"%":"SVGScriptElement"},m5:{"^":"k5;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.e]},
$ish:1,
$ash:function(){return[P.e]},
$isd:1,
$asd:function(){return[P.e]},
$asr:function(){return[P.e]},
"%":"SVGStringList"},cD:{"^":"K;",
gbL:function(a){return new P.fY(a,new W.ab(a))},
V:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.aj])
C.a.h(z,W.eG(null))
C.a.h(z,W.eR())
C.a.h(z,new W.k6())
c=new W.eX(new W.dR(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.m).dN(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ab(w)
u=z.ga8(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscD:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bN:{"^":"l;",$isbN:1,"%":"SVGTransform"},me:{"^":"ki;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bN]},
$ish:1,
$ash:function(){return[P.bN]},
$isd:1,
$asd:function(){return[P.bN]},
$asr:function(){return[P.bN]},
"%":"SVGTransformList"},jC:{"^":"l+q;"},jD:{"^":"jC+r;"},jM:{"^":"l+q;"},jN:{"^":"jM+r;"},k4:{"^":"l+q;"},k5:{"^":"k4+r;"},kh:{"^":"l+q;"},ki:{"^":"kh+r;"}}],["","",,P,{"^":"",lj:{"^":"l;0k:length=","%":"AudioBuffer"},lk:{"^":"jb;",
m:function(a,b){return P.av(a.get(H.B(b)))},
E:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.av(y.value[1]))}},
gR:function(a){var z=H.b([],[P.e])
this.E(a,new P.fq(z))
return z},
gk:function(a){return a.size},
$asZ:function(){return[P.e,null]},
$isR:1,
$asR:function(){return[P.e,null]},
"%":"AudioParamMap"},fq:{"^":"m:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},ll:{"^":"X;0k:length=","%":"AudioTrackList"},fr:{"^":"X;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lW:{"^":"fr;0k:length=","%":"OfflineAudioContext"},jb:{"^":"l+Z;"}}],["","",,P,{"^":"",e1:{"^":"l;",$ise1:1,"%":"WebGLRenderingContext"},iH:{"^":"l;",$isiH:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",m3:{"^":"k2;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.av(a.item(b))},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[[P.R,,,]]},
$ish:1,
$ash:function(){return[[P.R,,,]]},
$isd:1,
$asd:function(){return[[P.R,,,]]},
$asr:function(){return[[P.R,,,]]},
"%":"SQLResultSetRowList"},k1:{"^":"l+q;"},k2:{"^":"k1+r;"}}],["","",,O,{"^":"",aK:{"^":"a;0a,0b,0c,0d,$ti",
bj:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cj:function(a,b,c){var z={func:1,ret:-1,args:[P.A,[P.h,H.ac(this,"aK",0)]]}
H.i(a,z)
H.i(c,z)
this.b=b
this.c=a
this.d=c},
aH:function(a,b){return this.cj(a,null,b)},
dc:function(a){H.w(a,"$ish",[H.ac(this,"aK",0)],"$ash")
return!0},
cA:function(a,b){var z
H.w(b,"$ish",[H.ac(this,"aK",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gI:function(a){var z=this.a
return new J.an(z,z.length,0,[H.u(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ac(this,"aK",0)
H.x(b,z)
z=[z]
if(this.dc(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cA(x,H.b([b],z))}},
$ish:1,
n:{
dl:function(a){var z=new O.aK([a])
z.bj(a)
return z}}},cx:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.a6()
this.b=z}return z},
cB:function(a){var z=this.b
if(!(z==null))z.O(a)},
a9:function(){return this.cB(null)},
gar:function(a){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.c4()},
c1:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.a9()},
b7:function(){var z=this.a
if(z.length>0){z.pop()
this.a9()}}}}],["","",,E,{"^":"",dc:{"^":"a;"},ap:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0P:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
ca:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aF(0,b,this):null
if(!J.M(y,this.x)){x=this.x
this.x=y
w=new D.N("matrix",x,y,this,[V.bK])
w.b=!0
this.X(w)}for(z=this.y.a,z=new J.an(z,z.length,0,[H.u(z,0)]);z.v();)z.d.ca(0,b)},
aj:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gar(z))
else C.a.h(z.a,y.p(0,z.gar(z)))
z.a9()
a.c2(this.f)
z=a.dy
x=(z&&C.a).gaD(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.m(0,"Depth")
if(w==null){z=a.a
w=new A.fI(z,"Depth")
w.cw(z,"Depth")
y=$.fK
v=$.fJ
w.c=y
w.d=v
w.e=w.bv(y,35633)
w.f=w.bv(w.d,35632)
y=z.createProgram()
w.r=y
z.attachShader(y,w.e)
z.attachShader(w.r,w.f)
z.linkProgram(w.r)
if(!H.cV(z.getProgramParameter(w.r,35714))){u=z.getProgramInfoLog(w.r)
z.deleteProgram(w.r)
H.W(P.Y("Failed to link shader: "+H.f(u)))}w.du()
w.dw()
w.z=w.x.m(0,"posAttr")
w.Q=H.b3(w.y.m(0,"objClr"),"$iscJ")
w.ch=H.b3(w.y.m(0,"fogClr"),"$iscJ")
w.cx=H.b3(w.y.m(0,"fogStart"),"$iscH")
w.cy=H.b3(w.y.m(0,"fogStop"),"$iscH")
w.db=H.b3(w.y.m(0,"viewObjMat"),"$iscK")
w.dx=H.b3(w.y.m(0,"projMat"),"$iscK")
if(a.fr.bN(0,"Depth"))H.W(P.Y('Shader cache already contains a shader by the name "Depth".'))
a.fr.H(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.dg)){this.e=null
y=null}if(y==null){z=this.d.dH(new Z.j2(a.a),$.$get$at())
y=z.dT($.$get$at())
v=x.a
y.e=v.z.c
this.e=z
z=v}a.a.useProgram(z.r)
z.x.dS()
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
v.bg(y.c7(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gar(y)
v=a.dx
v=y.p(0,v.gar(v))
a.cx=v
y=v}z=z.db
z.toString
z.bg(y.c7(0,!0))
y=this.e
y.b_(a)
y.aj(a)
y.eG(a)
y=x.a
y.toString
a.a.useProgram(null)
y.x.dR()}for(z=this.y.a,z=new J.an(z,z.length,0,[H.u(z,0)]);z.v();)z.d.aj(a)
a.c0()
a.dx.b7()},
gA:function(){var z=this.z
if(z==null){z=D.a6()
this.z=z}return z},
X:function(a){var z=this.z
if(!(z==null))z.O(a)},
W:function(){return this.X(null)},
ef:[function(a){H.k(a,"$isC")
this.e=null
this.X(a)},function(){return this.ef(null)},"f8","$1","$0","gbY",0,2,1],
ee:[function(a){this.X(H.k(a,"$isC"))},function(){return this.ee(null)},"f7","$1","$0","gbX",0,2,1],
ec:[function(a){this.X(H.k(a,"$isC"))},function(){return this.ec(null)},"f5","$1","$0","gbW",0,2,1],
f4:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$ish",[E.ap],"$ash")
for(z=b.length,y=this.gbW(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gP()==null){t=new D.bD()
t.d=0
u.sP(t)}t=u.gP()
t.toString
H.i(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.W()},"$2","geb",8,0,6],
f6:[function(a,b){var z,y,x,w,v
H.w(b,"$ish",[E.ap],"$ash")
for(z=b.length,y=this.gbW(),x=0;x<b.length;b.length===z||(0,H.z)(b),++x){w=b[x]
if(w!=null){if(w.gP()==null){v=new D.bD()
v.d=0
w.sP(v)}w.gP().G(0,y)}}this.W()},"$2","ged",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdQ:1,
n:{
aq:function(a,b,c,d,e,f){var z,y,x,w,v
z=new E.ap()
z.a=d
z.b=!0
y=O.dl(E.ap)
z.y=y
y.aH(z.geb(),z.ged())
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
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null)y.gA().G(0,z.gbY())
x=z.c
if(x!=null)x.gA().h(0,z.gbY())
w=new D.N("shape",y,z.c,z,[F.e5])
w.b=!0
z.X(w)}if(!J.M(z.r,c)){v=z.r
if(v!=null)v.gA().G(0,z.gbX())
c.gA().h(0,z.gbX())
z.r=c
w=new D.N("mover",v,c,z,[U.a8])
w.b=!0
z.X(w)}return z}}},hW:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cu:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.b8(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cx()
y=[V.bK]
z.a=H.b([],y)
z.gA().h(0,new E.hY(this))
this.cy=z
z=new O.cx()
z.a=H.b([],y)
z.gA().h(0,new E.hZ(this))
this.db=z
z=new O.cx()
z.a=H.b([],y)
z.gA().h(0,new E.i_(this))
this.dx=z
z=H.b([],[O.cE])
this.dy=z
C.a.h(z,null)
this.fr=new H.aO(0,0,[P.e,A.e4])},
c2:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
c0:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hX:function(a,b){var z=new E.hW(a,b)
z.cu(a,b)
return z}}},hY:{"^":"m:7;a",
$1:function(a){var z
H.k(a,"$isC")
z=this.a
z.z=null
z.ch=null}},hZ:{"^":"m:7;a",
$1:function(a){var z
H.k(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i_:{"^":"m:7;a",
$1:function(a){var z
H.k(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},ip:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0P:x@,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z},
cD:[function(a){var z
H.k(a,"$isC")
z=this.x
if(!(z==null))z.O(a)
this.ew()},function(){return this.cD(null)},"cC","$1","$0","gbk",0,2,1],
gdZ:function(){var z,y,x
z=Date.now()
y=C.e.af(P.dx(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.b8(z,!1)
return x/y},
bB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.G(z)
x=C.c.bT(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.c.bT(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ef(C.h,this.gev())}},
ew:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.i(new E.ir(this),{func:1,ret:-1,args:[P.P]})
C.u.cT(z)
C.u.dl(z,W.f1(y,P.P))}},"$0","gev",0,0,2],
eu:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.b8(w,!1)
x.y=P.dx(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.a9()
w=x.db
C.a.sk(w.a,0)
w.a9()
w=x.dx
C.a.sk(w.a,0)
w.a9()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aj(this.e)}x=this.z
if(!(x==null))x.O(null)}catch(v){z=H.a3(v)
y=H.b2(v)
P.d3("Error: "+H.f(z))
P.d3("Stack: "+H.f(y))
throw H.c(z)}},
n:{
iq:function(a,b,c,d,e){var z,y,x,w
z=J.F(a)
if(!!z.$isco)return E.ee(a,!0,!0,!0,!1)
y=W.dj(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbL(a).h(0,y)
w=E.ee(y,!0,!0,!0,!1)
w.a=a
return w},
ee:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ip()
y=P.hk(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
x=C.f.be(a,"webgl",y)
x=H.k(x==null?C.f.be(a,"experimental-webgl",y):x,"$ise1")
if(x==null)H.W(P.Y("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hX(x,a)
w=new T.io(x)
w.b=H.U(x.getParameter(3379))
w.c=H.U(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iQ(a)
v=new X.hg()
v.c=new X.bg(!1,!1,!1)
v.d=P.bJ(null,null,null,P.A)
w.b=v
v=new X.hv(w)
v.f=0
v.r=new V.S(0,0)
v.x=new V.S(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hn(w)
v.r=0
v.x=new V.S(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iv(w)
v.e=0
v.f=new V.S(0,0)
v.r=new V.S(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e9,P.a]])
w.z=v
u=document
t=W.ae
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.T(u,"contextmenu",H.i(w.gd_(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.i(w.gd2(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.i(w.gcX(),q),!1,r))
v=w.z
p=W.be
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.i(w.gd4(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.i(w.gd3(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.i(w.gd6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.i(w.gd8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.i(w.gd7(),s),!1,t))
p=w.z
o=W.bt;(p&&C.a).h(p,W.T(a,H.B(W.fR(a)),H.i(w.gd9(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.i(w.gd0(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.i(w.gd1(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.i(w.gda(),q),!1,r))
r=w.z
q=W.aR
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.i(w.gdg(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.i(w.gde(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.i(w.gdf(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.b8(Date.now(),!1)
z.cy=0
z.bB()
return z}}},ir:{"^":"m:25;a",
$1:function(a){var z
H.l5(a)
z=this.a
if(z.ch){z.ch=!1
z.eu()}}}}],["","",,Z,{"^":"",eB:{"^":"a;a,b",n:{
cM:function(a,b,c){var z
H.w(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cR(c)),35044)
a.bindBuffer(b,null)
return new Z.eB(b,z)}}},df:{"^":"dc;a,b,c,d,e",
b_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.a3(y)
x=P.Y('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.f(z))
throw H.c(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},j2:{"^":"a;a",$islm:1},dg:{"^":"a;a,0b,c,d",
dT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b_(a)},
eG:function(a){var z,y,x
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
$ism8:1},c0:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aP(this.c)+"'")+"]"}},ex:{"^":"a;a",
gbh:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=2
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$br().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=4
if((z&$.$get$aX().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
dE:function(a){var z,y,x
z=$.$get$at()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eA()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ex))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.e])
y=this.a
if((y&$.$get$at().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aW().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$br().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
n:{
aa:function(a){return new Z.ex(a)}}}}],["","",,D,{"^":"",fv:{"^":"a;"},bD:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.C]}
H.i(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
G:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[D.C]})
z=this.a
z=z==null?null:C.a.M(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).G(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.M(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).G(z,b)||y}return y},
O:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.C(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.E(y,new D.fV(z))
y=this.b
if(!(y==null))C.a.E(y,new D.fW(z))
z=this.b
if(!(z==null))C.a.sk(z,0)
return!0},
ex:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.O(y)}}},
au:function(a){return this.ex(a,!0,!1)},
n:{
a6:function(){var z=new D.bD()
z.d=0
return z}}},fV:{"^":"m:23;a",
$1:function(a){var z
H.i(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},fW:{"^":"m:23;a",
$1:function(a){var z
H.i(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"a;a,0b"},dD:{"^":"C;c,d,a,0b,$ti"},dE:{"^":"C;c,d,a,0b,$ti"},N:{"^":"C;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dh:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
n:{"^":"ln<"}},dH:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},hg:{"^":"a;0a,0b,0c,0d",
el:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
eh:function(a){this.c=a.b
this.d.G(0,a.a)
return!1}},hn:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b6:function(a,b){this.r=a.a
return!1},
at:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ci()
if(typeof z!=="number")return z.cc()
this.r=(z&~y)>>>0
return!1},
as:function(a,b){return!1},
em:function(a){return!1},
d5:function(a,b,c){return}},bg:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bg))return!1
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
return z+(this.c?"Shift+":"")}},hv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b6:function(a,b){this.f=a.a
return!1},
at:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ci()
if(typeof z!=="number")return z.cc()
this.f=(z&~y)>>>0
return!1},
as:function(a,b){return!1},
en:function(a,b){return!1}},hI:{"^":"C;"},iu:{"^":"hI;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
by:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.S],"$asd")
z=new P.b8(Date.now(),!1)
y=a.length>0?a[0]:new V.S(0,0)
x=this.a.gdI()
w=new X.iu(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ek:function(a){var z
H.w(a,"$isd",[V.S],"$asd")
z=this.b
if(z==null)return!1
z.O(this.by(a,!0))
return!0},
ei:function(a){var z
H.w(a,"$isd",[V.S],"$asd")
z=this.c
if(z==null)return!1
z.O(this.by(a,!0))
return!0},
ej:function(a){H.w(a,"$isd",[V.S],"$asd")
return!1}},iQ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gdI:function(){var z=this.a
return V.e0(0,0,(z&&C.f).gbM(z).c,C.f.gbM(z).d)},
bu:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dH(z,new X.bg(y,a.altKey,a.shiftKey))},
ae:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
aZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
a4:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=z.top
if(typeof x!=="number")return x.Y()
return new V.S(y-w,x-v)},
am:function(a){return new V.bq(a.movementX,a.movementY)},
aW:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.S])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.c.U(u.pageX)
C.c.U(u.pageY)
s=z.left
C.c.U(u.pageX)
C.a.h(y,new V.S(t-s,C.c.U(u.pageY)-z.top))}return y},
a3:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dh(z,new X.bg(y,a.altKey,a.shiftKey))},
aT:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.Y()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
eS:[function(a){this.f=!0},"$1","gd2",4,0,5],
eM:[function(a){this.f=!1},"$1","gcX",4,0,5],
eP:[function(a){H.k(a,"$isae")
if(this.f&&this.aT(a))a.preventDefault()},"$1","gd_",4,0,3],
eU:[function(a){var z
H.k(a,"$isbe")
if(!this.f)return
z=this.bu(a)
this.b.el(z)},"$1","gd4",4,0,22],
eT:[function(a){var z
H.k(a,"$isbe")
if(!this.f)return
z=this.bu(a)
this.b.eh(z)},"$1","gd3",4,0,22],
eV:[function(a){var z,y,x,w
H.k(a,"$isae")
z=this.a
z.focus()
this.f=!0
this.ae(a)
if(this.x){y=this.a3(a)
x=this.am(a)
if(this.d.b6(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a3(a)
w=this.a4(a)
if(this.c.b6(y,w))a.preventDefault()},"$1","gd6",4,0,3],
eX:[function(a){var z,y,x
H.k(a,"$isae")
this.ae(a)
z=this.a3(a)
if(this.x){y=this.am(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.at(z,x))a.preventDefault()},"$1","gd8",4,0,3],
eR:[function(a){var z,y,x
H.k(a,"$isae")
if(!this.aT(a)){this.ae(a)
z=this.a3(a)
if(this.x){y=this.am(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.at(z,x))a.preventDefault()}},"$1","gd1",4,0,3],
eW:[function(a){var z,y,x
H.k(a,"$isae")
this.ae(a)
z=this.a3(a)
if(this.x){y=this.am(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.as(z,x))a.preventDefault()},"$1","gd7",4,0,3],
eQ:[function(a){var z,y,x
H.k(a,"$isae")
if(!this.aT(a)){this.ae(a)
z=this.a3(a)
if(this.x){y=this.am(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.as(z,x))a.preventDefault()}},"$1","gd0",4,0,3],
eY:[function(a){var z,y
H.k(a,"$isbt")
this.ae(a)
z=new V.bq((a&&C.t).gdP(a),C.t.gdQ(a)).K(0,180)
if(this.x){if(this.d.em(z))a.preventDefault()
return}if(this.r)return
y=this.a4(a)
if(this.c.en(z,y))a.preventDefault()},"$1","gd9",4,0,29],
eZ:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a3(this.y)
v=this.a4(this.y)
this.d.d5(w,v,x)}},"$1","gda",4,0,5],
f2:[function(a){var z
H.k(a,"$isaR")
this.a.focus()
this.f=!0
this.aZ(a)
z=this.aW(a)
if(this.e.ek(z))a.preventDefault()},"$1","gdg",4,0,9],
f0:[function(a){var z
H.k(a,"$isaR")
this.aZ(a)
z=this.aW(a)
if(this.e.ei(z))a.preventDefault()},"$1","gde",4,0,9],
f1:[function(a){var z
H.k(a,"$isaR")
this.aZ(a)
z=this.aW(a)
if(this.e.ej(z))a.preventDefault()},"$1","gdf",4,0,9]}}],["","",,V,{"^":"",
lp:[function(a,b){if(typeof b!=="number")return b.Y()
if(typeof a!=="number")return H.G(a)
return Math.abs(b-a)<=1e-9},"$2","hs",8,0,27],
d5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.cg(a-b,z)
return(a<0?a+z:a)+b},
E:function(a,b,c){if(a==null)return C.b.a6("null",c)
return C.b.a6(C.c.c8($.p.$2(a,0)?0:a,b),c+b+1)},
cf:function(a,b,c){var z,y,x,w,v
H.w(a,"$isd",[P.t],"$asd")
z=H.b([],[P.e])
for(y=0,x=0;x<4;++x){w=V.E(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.j(z,v)
C.a.H(z,v,C.b.a6(z[v],y))}return z},
bA:{"^":"a;a,b,c",
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
return new V.bA(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bA))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}},
bB:{"^":"a;a,b,c,d",
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
return new V.bB(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bB))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
bK:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c7:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isbK")
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
return V.as(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bK))return!1
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
bU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.cf(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cf(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cf(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cf(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
u:function(a){return this.bU(a,3,0)},
F:function(){return this.bU("",3,0)},
n:{
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c4:function(){return V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
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
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}},
az:{"^":"a;a,b,c",
Y:function(a,b){return new V.az(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.az(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}},
e_:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"},
n:{
e0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e_(a,b,c,d)}}},
bq:{"^":"a;a,b",
e4:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,18],
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.bq(z*b,y*b)},
K:function(a,b){var z,y
if($.p.$2(b,0))return new V.bq(0,0)
z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
return new V.bq(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}},
O:{"^":"a;a,b,c",
e4:[function(a){return Math.sqrt(this.N(this))},"$0","gk",1,0,18],
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
e2:function(){if(!$.p.$2(0,this.a))return!1
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
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dm:{"^":"a8;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.a6()
this.b=z}return z},
aF:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dm))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")},
n:{
dn:function(a){var z=new U.dm()
z.a=a
return z}}},dC:{"^":"aK;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
S:[function(a){var z
H.k(a,"$isC")
z=this.e
if(!(z==null))z.O(a)},function(){return this.S(null)},"eH","$1","$0","gbl",0,2,1],
eL:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a8
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gbl(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gA()
s.toString
H.i(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.dD(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gcW",8,0,12],
f_:[function(a,b){var z,y,x,w,v
z=U.a8
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gbl(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null)v.gA().G(0,x)}z=new D.dE(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gdd",8,0,12],
aF:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a2()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.an(z,z.length,0,[H.u(z,0)]),x=null;z.v();){y=z.d
if(y!=null){w=y.aF(0,b,c)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.au(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a8]},
$asaK:function(){return[U.a8]},
$isa8:1},a8:{"^":"fv;"},e2:{"^":"a8;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.a6()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.O(a)},
scb:function(a){var z,y
a=V.d5(a,0,6.283185307179586)
z=this.a
if(!$.p.$2(z,a)){y=this.a
this.a=a
z=new D.N("yaw",y,a,this,[P.t])
z.b=!0
this.S(z)}},
sc_:function(a,b){var z,y
b=V.d5(b,0,6.283185307179586)
z=this.b
if(!$.p.$2(z,b)){y=this.b
this.b=b
z=new D.N("pitch",y,b,this,[P.t])
z.b=!0
this.S(z)}},
sc3:function(a){var z,y
a=V.d5(a,0,6.283185307179586)
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
z=new D.N("roll",y,a,this,[P.t])
z.b=!0
this.S(z)}},
sbR:function(a){var z,y
z=this.d
if(!$.p.$2(z,a)){y=this.d
this.d=a
z=new D.N("deltaYaw",y,a,this,[P.t])
z.b=!0
this.S(z)}},
sbP:function(a){var z,y
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=new D.N("deltaPitch",y,a,this,[P.t])
z.b=!0
this.S(z)}},
sbQ:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.N("deltaRoll",y,a,this,[P.t])
z.b=!0
this.S(z)}},
aF:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.scb(this.a+this.d*b.y)
this.sc_(0,this.b+this.e*b.y)
this.sc3(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
z=V.as(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1)
y=this.b
x=Math.cos(y)
w=Math.sin(y)
z=z.p(0,V.as(x,0,-w,0,0,1,0,0,w,0,x,0,0,0,0,1))
y=this.a
x=Math.cos(y)
w=Math.sin(y)
this.x=z.p(0,V.as(1,0,0,0,0,x,-w,0,0,w,x,0,0,0,0,1))
z=this.y
if(!(z==null))z.au(0)}return this.x},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
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
i:function(a){return"Rotater: ["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"], ["+V.E(this.d,3,0)+", "+V.E(this.e,3,0)+", "+V.E(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aa:[function(a){var z
H.k(a,"$isC")
z=this.x
if(!(z==null))z.O(a)},function(){return this.aa(null)},"eI","$1","$0","gZ",0,2,1],
eN:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.ap
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gZ(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gP()==null){s=new D.bD()
s.d=0
t.sP(s)}s=t.gP()
s.toString
H.i(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.dD(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gcY",8,0,6],
eO:[function(a,b){var z,y,x,w,v,u
z=E.ap
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gZ(),w=0;w<b.length;b.length===y||(0,H.z)(b),++w){v=b[w]
if(v!=null){if(v.gP()==null){u=new D.bD()
u.d=0
v.sP(u)}v.gP().G(0,x)}}z=new D.dE(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gcZ",8,0,6],
sc5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gA().G(0,this.gZ())
y=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gZ())
z=new D.N("technique",y,this.c,this,[O.cE])
z.b=!0
this.aa(z)}},
gA:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.c2(this.c)
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
u=C.c.U(v.a*x)
if(typeof w!=="number")return H.G(w)
t=C.c.U(v.b*w)
s=C.c.U(v.c*x)
a.c=s
v=C.c.U(v.d*w)
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
n=V.as(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.c1(n)
y=$.dV
if(y==null){y=new V.O(0,0,-1)
m=y.K(0,Math.sqrt(y.N(y)))
y=new V.O(0,1,0).ao(m)
l=y.K(0,Math.sqrt(y.N(y)))
k=m.ao(l)
j=new V.O(0,0,0)
y=V.as(l.a,k.a,m.a,l.aG(0).N(j),l.b,k.b,m.b,k.aG(0).N(j),l.c,k.c,m.c,m.aG(0).N(j),0,0,0,1)
$.dV=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.p(0,i)}a.db.c1(i)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.u(z,0)]);z.v();)z.d.ca(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.u(z,0)]);z.v();)z.d.aj(a)
this.a.toString
a.cy.b7()
a.db.b7()
this.b.toString
a.c0()},
$ism_:1}}],["","",,A,{"^":"",da:{"^":"a;a,b,c"},fp:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fI:{"^":"e4;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},e4:{"^":"dc;",
cw:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bv:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.cV(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.Y("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
du:function(){var z,y,x,w,v,u
z=H.b([],[A.da])
y=this.a
x=H.U(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.G(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.da(y,v.name,u))}this.x=new A.fp(z)},
dw:function(){var z,y,x,w,v,u
z=H.b([],[A.V])
y=this.a
x=H.U(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.G(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.dO(v.type,v.size,v.name,u))}this.y=new A.iG(z)},
ad:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iz(z,y,b,c)
else return A.cI(z,y,b,a,c)},
cQ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iK(z,y,b,c)
else return A.cI(z,y,b,a,c)},
cR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iL(z,y,b,c)
else return A.cI(z,y,b,a,c)},
aB:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
dO:function(a,b,c,d){switch(a){case 5120:return this.ad(b,c,d)
case 5121:return this.ad(b,c,d)
case 5122:return this.ad(b,c,d)
case 5123:return this.ad(b,c,d)
case 5124:return this.ad(b,c,d)
case 5125:return this.ad(b,c,d)
case 5126:return new A.cH(this.a,this.r,c,d)
case 35664:return new A.iB(this.a,this.r,c,d)
case 35665:return new A.cJ(this.a,this.r,c,d)
case 35666:return new A.iE(this.a,this.r,c,d)
case 35667:return new A.iC(this.a,this.r,c,d)
case 35668:return new A.iD(this.a,this.r,c,d)
case 35669:return new A.iF(this.a,this.r,c,d)
case 35674:return new A.iI(this.a,this.r,c,d)
case 35675:return new A.iJ(this.a,this.r,c,d)
case 35676:return new A.cK(this.a,this.r,c,d)
case 35678:return this.cQ(b,c,d)
case 35680:return this.cR(b,c,d)
case 35670:throw H.c(this.aB("BOOL",c))
case 35671:throw H.c(this.aB("BOOL_VEC2",c))
case 35672:throw H.c(this.aB("BOOL_VEC3",c))
case 35673:throw H.c(this.aB("BOOL_VEC4",c))
default:throw H.c(P.Y("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},V:{"^":"a;"},iG:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.F()},
dY:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.dY("\n")}},iz:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},iC:{"^":"V;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},iD:{"^":"V;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},iF:{"^":"V;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},iA:{"^":"V;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
n:{
cI:function(a,b,c,d,e){var z=new A.iA(a,b,c,e)
z.f=d
z.e=P.hl(d,0,!1,P.A)
return z}}},cH:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},iB:{"^":"V;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},cJ:{"^":"V;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},iE:{"^":"V;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},iI:{"^":"V;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},iJ:{"^":"V;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},cK:{"^":"V;a,b,c,d",
bg:function(a){var z=new Float32Array(H.cR(H.w(a,"$isd",[P.t],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},iK:{"^":"V;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},iL:{"^":"V;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
ld:function(a,b,c,d){return F.kJ(c,a,d,b,new F.le())},
kJ:function(a,b,c,d,e){var z,y
z=F.lb(a,b,new F.kK(H.i(e,{func:1,ret:V.az,args:[P.t]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.d
z.d.b3()
z.a.b3()
y=z.e
if(!(y==null))y.au(0)
z.e9(new F.iY(),new F.hC())
return z},
lb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,{func:1,ret:-1,args:[F.aA,P.t,P.t]})
if(a<1)return
if(b<1)return
z=new F.e5()
y=new F.iT(z)
y.b=!1
x=[F.aA]
y.c=H.b([],x)
z.a=y
y=new F.i8(z)
y.b=H.b([],[F.dW])
z.b=y
y=new F.i7(z)
y.b=H.b([],[F.dI])
z.c=y
y=new F.i6(z)
y.b=H.b([],[F.ai])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cL(null,null,new V.bB(x,0,0,1),null,null,new V.S(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bO(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cL(null,null,new V.bB(o,n,m,1),null,null,new V.S(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bO(d))}}z.d.dC(a+1,b+1,w)
return z},
le:{"^":"m:33;",
$1:function(a){return new V.az(Math.cos(a),Math.sin(a),0)}},
kK:{"^":"m:34;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d6(y.$1(z),x)
x=J.d6(y.$1(z+3.141592653589793/this.c),x).Y(0,w)
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
x=new V.az(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.M(a.f,x)){a.f=x
y=a.a
if(y!=null)y.W()}}},
ai:{"^":"a;0a,0b,0c,0d,0e",
ap:function(){if(!this.gbS()){C.a.G(this.a.a.d.b,this)
this.a.a.W()}this.di()
this.dj()
this.dk()},
dr:function(a){this.a=a
C.a.h(a.d.b,this)},
ds:function(a){this.b=a
C.a.h(a.d.c,this)},
dt:function(a){this.c=a
C.a.h(a.d.d,this)},
di:function(){var z=this.a
if(z!=null){C.a.G(z.d.b,this)
this.a=null}},
dj:function(){var z=this.b
if(z!=null){C.a.G(z.d.c,this)
this.b=null}},
dk:function(){var z=this.c
if(z!=null){C.a.G(z.d.d,this)
this.c=null}},
gbS:function(){return this.a==null||this.b==null||this.c==null},
cK:function(){var z,y,x,w,v
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
if(v.e2())return
return v.K(0,Math.sqrt(v.N(v)))},
cM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Y(0,y)
z=new V.O(z.a,z.b,z.c)
v=z.K(0,Math.sqrt(z.N(z)))
z=w.Y(0,y)
z=new V.O(z.a,z.b,z.c)
z=v.ao(z.K(0,Math.sqrt(z.N(z))))
return z.K(0,Math.sqrt(z.N(z)))},
b2:function(){if(this.d!=null)return!0
var z=this.cK()
if(z==null){z=this.cM()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
gdJ:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z,y
if(this.gbS())return a+"disposed"
z=a+C.b.a6(J.a4(this.a.e),0)+", "+C.b.a6(J.a4(this.b.e),0)+", "+C.b.a6(J.a4(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
F:function(){return this.u("")},
n:{
bZ:function(a,b,c){var z,y,x
z=new F.ai()
y=a.a
if(y==null)H.W(P.Y("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.W(P.Y("May not create a face with vertices attached to different shapes."))
z.dr(a)
z.ds(b)
z.dt(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
fX:{"^":"a;"},
ie:{"^":"fX;",
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
dI:{"^":"a;"},
hh:{"^":"a;"},
iy:{"^":"hh;",
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
dW:{"^":"a;"},
e5:{"^":"a;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
e9:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.u(z,0)])
for(z=[F.aA];y.length!==0;){x=C.a.gdV(y)
C.a.er(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.aq(0,x,t)){C.a.h(w,t)
C.a.G(y,t)}}if(w.length>1)b.e8(w)}}this.a.t()
this.c.b9()
this.d.b9()
this.b.es()
this.c.ba(new F.iy())
this.d.ba(new F.ie())
z=this.e
if(!(z==null))z.au(0)},
dH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gbh(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.df])
for(r=0,q=0;q<w;++q){p=b.dE(q)
o=p.gbh(p)
C.a.H(s,q,new Z.df(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].e5(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.H(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cR(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dg(new Z.eB(34962,j),s,b)
i.b=H.b([],[Z.c0])
if(this.b.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.cM(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c0(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.cM(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c0(1,h.length,f))}if(this.d.b.length!==0){x=P.A
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
C.a.h(h,g.e)}f=Z.cM(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c0(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.e])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.l(z,"\n")},
X:function(a){var z=this.e
if(!(z==null))z.O(a)},
W:function(){return this.X(null)}},
i6:{"^":"a;a,0b",
dC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.aA],"$asd")
z=H.b([],[F.ai])
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
C.a.h(z,F.bZ(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bZ(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bZ(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bZ(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
ba:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.j(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.m(0,w)
for(u=w-1;u>=0;--u){t=x.d.m(0,u)
if(a.aq(0,v,t)){v.ap()
break}}}}},
b9:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
x=y[z]
y=x.gdJ(x)
if(y)x.ap()}},
b3:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].b2())x=!1
return x},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
i7:{"^":"a;a,0b",
gk:function(a){return this.b.length},
ba:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.j(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.m(0,w)
for(u=w-1;u>=0;--u){t=x.c.m(0,u)
if(a.aq(0,v,t)){v.ap()
break}}}}},
b9:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.ap()}},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.l(z,"\n")},
F:function(){return this.u("")}},
i8:{"^":"a;a,0b",
gk:function(a){return this.b.length},
es:function(){var z,y
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
aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bO:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cL(this.cx,x,u,z,y,w,v,a,t)},
e5:function(a){var z,y
z=J.F(a)
if(z.q(a,$.$get$at())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aU())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aT())){z=H.b([0,0,1],[P.t])
return z}else if(z.q(a,$.$get$aV())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$aW())){z=H.b([0,0,0],[P.t])
return z}else if(z.q(a,$.$get$br())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bs())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aX()))return H.b([this.ch],[P.t])
else if(z.q(a,$.$get$aS())){z=H.b([-1,-1,-1,-1],[P.t])
return z}else return H.b([],[P.t])},
b2:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.O(0,0,0)
this.d.E(0,new F.j1(z))
z=z.a
this.r=z.K(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.au(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z,y,x
z=H.b([],[P.e])
C.a.h(z,C.b.a6(J.a4(this.e),0))
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
C.a.h(z,V.E(this.ch,3,0))
C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
F:function(){return this.u("")},
n:{
cL:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aA()
y=new F.j0(z)
y.b=H.b([],[F.dW])
z.b=y
y=new F.iX(z)
x=[F.dI]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iU(z)
x=[F.ai]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$ey()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aU().a)!==0?e:null
z.x=(x&$.$get$aT().a)!==0?b:null
z.y=(x&$.$get$aV().a)!==0?f:null
z.z=(x&$.$get$aW().a)!==0?g:null
z.Q=(x&$.$get$ez().a)!==0?c:null
z.ch=(x&$.$get$aX().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
j1:{"^":"m:8;a",
$1:function(a){var z,y
H.k(a,"$isai")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.J(0,z)}}},
iT:{"^":"a;a,0b,0c",
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
this.a.W()
return!0},
gk:function(a){return this.c.length},
b3:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].b2()
return!0},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
this.t()
z=H.b([],[P.e])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
iU:{"^":"a;a,0b,0c,0d",
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
E:function(a,b){H.i(b,{func:1,ret:-1,args:[F.ai]})
C.a.E(this.b,b)
C.a.E(this.c,new F.iV(this,b))
C.a.E(this.d,new F.iW(this,b))},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}},
iV:{"^":"m:8;a,b",
$1:function(a){H.k(a,"$isai")
if(!J.M(a.a,this.a))this.b.$1(a)}},
iW:{"^":"m:8;a,b",
$1:function(a){var z
H.k(a,"$isai")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
iX:{"^":"a;a,0b,0c",
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
iZ:{"^":"a;"},
iY:{"^":"iZ;",
aq:function(a,b,c){return J.M(b.f,c.f)}},
j_:{"^":"a;"},
hC:{"^":"j_;",
e8:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.aA],"$asd")
z=new V.O(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.O(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.K(0,Math.sqrt(z.N(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.K(0,Math.sqrt(u))
if(!J.M(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.O(null)}}}return}},
j0:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
F:function(){return this.u("")}}}],["","",,O,{"^":"",fH:{"^":"cE;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.a6()
this.f=z}return z},
ay:function(a){var z=this.f
if(!(z==null))z.O(a)}},cE:{"^":"a;"}}],["","",,T,{"^":"",io:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",b5:{"^":"a;",
ai:function(a,b){return!0},
i:function(a){return"all"},
$isar:1},ar:{"^":"a;"},dP:{"^":"a;",
ai:["cr",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].ai(0,b))return!0
return!1}],
i:["bi",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isar:1},af:{"^":"dP;0a",
ai:function(a,b){return!this.cr(0,b)},
i:function(a){return"!["+this.bi(0)+"]"}},hR:{"^":"a;0a,0b",
ai:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cz(this.a)
y=H.cz(this.b)
return z+".."+y},
$isar:1,
n:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.c(P.Y("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.ab(a,0)
y=C.b.ab(b,0)
x=new V.hR()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},i4:{"^":"a;0a",
cv:function(a){var z,y
if(a.a.length<=0)throw H.c(P.Y("May not create a SetMatcher with zero characters."))
z=new H.aO(0,0,[P.A,P.L])
for(y=new H.cw(a,a.gk(a),0,[H.ac(a,"q",0)]);y.v();)z.H(0,y.d,!0)
this.a=z},
ai:function(a,b){return this.a.bN(0,b)},
i:function(a){var z=this.a
return P.cC(new H.dK(z,[H.u(z,0)]),0,null)},
$isar:1,
n:{
o:function(a){var z=new V.i4()
z.cv(a)
return z}}},e7:{"^":"a;a,b,0c,0d",
gea:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ej(this.a.j(0,b))
w.a=H.b([],[V.ar])
w.c=!1
C.a.h(this.c,w)
return w},
dU:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.ai(0,a))return w}return},
i:function(a){return this.b}},eh:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.d4(this.b,"\n","\\n")
y=H.d4(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ei:{"^":"a;a,b,0c",
a7:function(a,b,c){var z,y,x
H.w(c,"$isd",[P.e],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.H(0,x,b)}},
i:function(a){return this.b}},it:{"^":"a;0a,0b,0c",
j:function(a,b){var z=this.a.m(0,b)
if(z==null){z=new V.e7(this,b)
z.c=H.b([],[V.ej])
this.a.H(0,b,z)}return z},
C:function(a){var z,y
z=this.b.m(0,a)
if(z==null){z=new V.ei(this,a)
y=P.e
z.c=new H.aO(0,0,[y,y])
this.b.H(0,a,z)}return z},
c9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eh])
y=this.c
x=[P.A]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.ab(a,t)
r=y.dU(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cC(w,0,null)
throw H.c(P.Y("Untokenizable string [state: "+y.gea(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cC(w,0,null)
p=y.d
o=p.c.m(0,q)
u=new V.eh(o==null?p.b:o,q,t)}++t}}},
n:{
c7:function(){var z,y
z=new V.it()
y=P.e
z.a=new H.aO(0,0,[y,V.e7])
z.b=new H.aO(0,0,[y,V.ei])
return z}}},ej:{"^":"dP;b,0c,0a",
i:function(a){return this.b.b+": "+this.bi(0)}}}],["","",,X,{"^":"",di:{"^":"a;",$isdQ:1},h1:{"^":"eb;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z}},hF:{"^":"a;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.a6()
this.f=z}return z},
al:[function(a){var z
H.k(a,"$isC")
z=this.f
if(!(z==null))z.O(a)},function(){return this.al(null)},"eJ","$1","$0","gbm",0,2,1],
sbV:function(a){var z,y
if(!J.M(this.b,a)){z=this.b
if(z!=null)z.gA().G(0,this.gbm())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gbm())
z=new D.N("mover",y,this.b,this,[U.a8])
z.b=!0
this.al(z)}},
$isdQ:1,
$isdi:1},eb:{"^":"a;"}}],["","",,V,{"^":"",
l9:function(a){P.is(C.y,new V.la(a))},
aw:{"^":"a;",
aw:function(a){this.b=new P.h4(C.z)
this.c=null
this.d=H.b([],[[P.d,W.aL]])},
B:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aL]))
y=a.split("\n")
for(z=y.length,x=[W.aL],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.B(u)
s=this.b.cP(u,0,u.length)
r=s==null?u:s
C.x.ck(t,H.d4(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaD(this.d),t)}},
bZ:function(a,b){var z,y,x,w
H.w(b,"$isd",[P.e],"$asd")
this.d=H.b([],[[P.d,W.aL]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.aC()
this.c=y}for(y=y.c9(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.aE(y[w])}},
la:{"^":"m:36;a",
$1:function(a){H.k(a,"$isaQ")
P.d3(C.c.c8(this.a.gdZ(),2)+" fps")}},
fE:{"^":"aw;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Class":this.B(a.b,"#551")
break
case"Comment":this.B(a.b,"#777")
break
case"Id":this.B(a.b,"#111")
break
case"Num":this.B(a.b,"#191")
break
case"Reserved":this.B(a.b,"#119")
break
case"String":this.B(a.b,"#171")
break
case"Symbol":this.B(a.b,"#616")
break
case"Type":this.B(a.b,"#B11")
break
case"Whitespace":this.B(a.b,"#111")
break}},
aC:function(){var z,y,x,w
z=V.c7()
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
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b5())
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
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b5())
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
x=new V.af()
w=[V.ar]
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
x=new V.af()
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
x.d=x.a.C("Num")
x=z.j(0,"Float")
x.d=x.a.C("Num")
x=z.j(0,"Sym")
x.d=x.a.C("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.C("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.C("String")
x=z.j(0,"EndComment")
x.d=x.a.C("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.C("Whitespace")
x=z.j(0,"Id")
y=x.a.C("Id")
x.d=y
x=[P.e]
y.a7(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a7(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a7(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
h2:{"^":"aw;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Builtin":this.B(a.b,"#411")
break
case"Comment":this.B(a.b,"#777")
break
case"Id":this.B(a.b,"#111")
break
case"Num":this.B(a.b,"#191")
break
case"Preprocess":this.B(a.b,"#737")
break
case"Reserved":this.B(a.b,"#119")
break
case"Symbol":this.B(a.b,"#611")
break
case"Type":this.B(a.b,"#171")
break
case"Whitespace":this.B(a.b,"#111")
break}},
aC:function(){var z,y,x,w
z=V.c7()
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
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.b5())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.af()
w=[V.ar]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.o(new H.n("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.af()
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
y.d=y.a.C("Num")
y=z.j(0,"Float")
y.d=y.a.C("Num")
y=z.j(0,"Sym")
y.d=y.a.C("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.C("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.C("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.C("Whitespace")
y=z.j(0,"Id")
x=y.a.C("Id")
y.d=x
y=[P.e]
x.a7(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a7(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a7(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
h3:{"^":"aw;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Attr":this.B(a.b,"#911")
this.B("=","#111")
break
case"Id":this.B(a.b,"#111")
break
case"Other":this.B(a.b,"#111")
break
case"Reserved":this.B(a.b,"#119")
break
case"String":this.B(a.b,"#171")
break
case"Symbol":this.B(a.b,"#616")
break}},
aC:function(){var z,y,x
z=V.c7()
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
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.b5())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.b5())
y=z.j(0,"Other").l(0,"Other")
x=new V.af()
x.a=H.b([],[V.ar])
C.a.h(y.a,x)
y=V.o(new H.n('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.C("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.C("String")
y=z.j(0,"Id")
x=y.a.C("Id")
y.d=x
x.a7(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
x=z.j(0,"Attr")
x.d=x.a.C("Attr")
x=z.j(0,"Other")
x.d=x.a.C("Other")
return z}},
hH:{"^":"aw;a,0b,0c,0d",
bZ:function(a,b){H.w(b,"$isd",[P.e],"$asd")
this.d=H.b([],[[P.d,W.aL]])
this.B(C.a.l(b,"\n"),"#111")},
aE:function(a){},
aC:function(){return}},
i9:{"^":"a;0a,0b",
cz:function(a,b){var z,y,x,w,v,u,t
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
W.T(z,"scroll",H.i(new V.ic(x),{func:1,ret:-1,args:[t]}),!1,t)},
bI:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.e],"$asd")
this.dv()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.c9(C.a.e3(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.fe(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.eW(C.p,s,C.l,!1)
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
ce:function(a){var z,y,x,w
z=new V.fE("dart")
z.aw("dart")
y=new V.h2("glsl")
y.aw("glsl")
x=new V.h3("html")
x.aw("html")
w=C.a.dW(H.b([z,y,x],[V.aw]),new V.id(a))
if(w!=null)return w
z=new V.hH("plain")
z.aw("plain")
return z},
bG:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a2,"$isd",[P.e],"$asd")
z=H.b([],[P.A])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.d_(w).aI(w,"+")){C.a.H(a2,x,C.b.aK(w,1))
C.a.h(z,1)
y=!0}else if(C.b.aI(w,"-")){C.a.H(a2,x,C.b.aK(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.ce(a0)
v.bZ(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.eW(C.p,a,C.l,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.d8(null)
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
dv:function(){var z,y,x,w
if(this.b!=null)return
z=V.c7()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.af()
w=[V.ar]
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
x=new V.af()
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
x=new V.af()
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
y=new V.af()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.o(new H.n("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.af()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.b5())
x=z.j(0,"Other").l(0,"Other")
y=new V.af()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.C("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.C("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.C("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.C("Link")
x=z.j(0,"Other")
x.d=x.a.C("Other")
this.b=z},
n:{
ia:function(a,b){var z=new V.i9()
z.cz(a,!0)
return z}}},
ic:{"^":"m:37;a",
$1:function(a){P.ef(C.h,new V.ib(this.a))}},
ib:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.c.U(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
id:{"^":"m:38;a",
$1:function(a){return H.k(a,"$isaw").a===this.a}}}],["","",,R,{"^":"",
fa:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.ia("Test 004",!0)
y=W.dj(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.e]
z.bI(H.b(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],x))
z.bI(H.b(["\xab[Back to Tests|../]"],x))
w=new U.e2()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.scb(0)
w.sc_(0,0)
w.sc3(0)
w.sbR(0.1)
w.sbP(0.21)
w.sbQ(0.32)
w.sbR(0.51)
w.sbP(0.71)
w.sbQ(0.92)
v=new U.dC()
v.bj(U.a8)
v.aH(v.gcW(),v.gdd())
v.e=null
v.f=V.c4()
v.r=0
v.h(0,U.dn(V.as(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
v.h(0,w)
u=F.ld(30,2,15,0.2)
t=E.aq(null,!0,v,"",u,null)
s=E.aq(null,!0,v,"",u,null)
s.y.h(0,t)
r=E.aq(null,!0,v,"",u,null)
r.y.h(0,s)
q=E.aq(null,!0,v,"",u,null)
q.y.h(0,r)
p=E.aq(null,!0,v,"",u,null)
p.y.h(0,q)
o=E.aq(null,!0,v,"",u,null)
o.y.h(0,p)
n=E.aq(null,!0,v,"",u,null)
n.y.h(0,o)
m=E.aq(null,!0,v,"",u,null)
m.y.h(0,n)
l=E.aq(null,!0,v,"",u,null)
l.y.h(0,m)
k=new O.fH()
k.d=1
k.e=10
j=new V.bA(1,1,1)
k.b=j
x=[V.bA]
i=new D.N("objectColor",null,j,k,x)
i.b=!0
k.ay(i)
j=new V.bA(0,0,0)
if(!J.M(k.c,j)){h=k.c
k.c=j
x=new D.N("fogColor",h,j,k,x)
x.b=!0
k.ay(x)}x=k.d
if(!$.p.$2(x,3)){h=k.d
k.d=3
x=new D.N("fogStart",h,3,k,[P.t])
x.b=!0
k.ay(x)}x=k.e
if(!$.p.$2(x,6)){h=k.e
k.e=6
x=new D.N("fogStop",h,6,k,[P.t])
x.b=!0
k.ay(x)}g=new M.fT()
x=O.dl(E.ap)
g.d=x
x.aH(g.gcY(),g.gcZ())
g.e=null
g.f=null
g.r=null
g.x=null
f=new X.hF()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sbV(null)
x=f.c
if(!$.p.$2(x,1.0471975511965976)){h=f.c
f.c=1.0471975511965976
x=new D.N("fov",h,1.0471975511965976,f,[P.t])
x.b=!0
f.al(x)}x=f.d
if(!$.p.$2(x,0.1)){h=f.d
f.d=0.1
x=new D.N("near",h,0.1,f,[P.t])
x.b=!0
f.al(x)}x=f.e
if(!$.p.$2(x,2000)){h=f.e
f.e=2000
x=new D.N("far",h,2000,f,[P.t])
x.b=!0
f.al(x)}x=g.a
if(x!==f){if(x!=null)x.gA().G(0,g.gZ())
h=g.a
g.a=f
f.gA().h(0,g.gZ())
x=new D.N("camera",h,g.a,g,[X.di])
x.b=!0
g.aa(x)}e=new X.h1()
x=new V.bB(0,0,0,1)
e.a=x
e.b=!0
e.c=2000
e.d=!0
e.e=0
e.f=!1
x=V.e0(0,0,1,1)
e.r=x
x=g.b
if(x!==e){if(x!=null)x.gA().G(0,g.gZ())
h=g.b
g.b=e
e.gA().h(0,g.gZ())
x=new D.N("target",h,g.b,g,[X.eb])
x.b=!0
g.aa(x)}g.sc5(null)
g.sc5(k)
g.d.h(0,l)
g.a.sbV(U.dn(V.as(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
d=document.getElementById("testCanvas")
if(d==null)H.W(P.Y("Failed to find an element with the identifier, testCanvas."))
c=E.iq(d,!0,!0,!0,!1)
x=c.d
if(x!==g){if(x!=null)x.gA().G(0,c.gbk())
c.d=g
g.gA().h(0,c.gbk())
c.cC()}x=c.z
if(x==null){x=D.a6()
c.z=x}i={func:1,ret:-1,args:[D.C]}
b=H.i(new R.l2(z,k),i)
a=x.b
if(a==null){i=H.b([],[i])
x.b=i
x=i}else x=a
C.a.h(x,b)
V.l9(c)},
l2:{"^":"m:7;a,b",
$1:function(a){var z,y,x,w
H.k(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.e]
z.bG("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.bG("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.F=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.hb.prototype}if(typeof a=="string")return J.bG.prototype
if(a==null)return J.hc.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.bR=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.cg=function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.kO=function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bO.prototype
return a}
J.kP=function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bO.prototype
return a}
J.d_=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bO.prototype
return a}
J.b1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.F(a).q(a,b)}
J.fg=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kO(a).a2(a,b)}
J.d6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kP(a).p(a,b)}
J.fh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bR(a).m(a,b)}
J.fi=function(a,b,c,d){return J.b1(a).bH(a,b,c,d)}
J.ck=function(a,b,c){return J.bR(a).dK(a,b,c)}
J.cl=function(a,b){return J.cg(a).w(a,b)}
J.fj=function(a,b){return J.cg(a).E(a,b)}
J.fk=function(a){return J.b1(a).gdF(a)}
J.aH=function(a){return J.F(a).gL(a)}
J.aI=function(a){return J.cg(a).gI(a)}
J.aJ=function(a){return J.bR(a).gk(a)}
J.fl=function(a){return J.b1(a).gb8(a)}
J.fm=function(a){return J.b1(a).geB(a)}
J.d7=function(a){return J.cg(a).eq(a)}
J.fn=function(a,b,c){return J.d_(a).ak(a,b,c)}
J.fo=function(a){return J.d_(a).eF(a)}
J.a4=function(a){return J.F(a).i(a)}
I.aF=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.m=W.bV.prototype
C.f=W.co.prototype
C.x=W.aL.prototype
C.A=J.l.prototype
C.a=J.aN.prototype
C.e=J.dG.prototype
C.c=J.bF.prototype
C.b=J.bG.prototype
C.H=J.bH.prototype
C.L=H.hy.prototype
C.M=W.hz.prototype
C.q=J.hG.prototype
C.r=W.im.prototype
C.k=J.bO.prototype
C.t=W.bt.prototype
C.u=W.j4.prototype
C.v=new P.hE()
C.w=new P.iS()
C.d=new P.jR()
C.h=new P.aM(0)
C.y=new P.aM(5e6)
C.z=new P.h5("element",!0,!1,!1,!1)
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
C.I=H.b(I.aF(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.J=H.b(I.aF(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.K=H.b(I.aF([]),[P.e])
C.p=H.b(I.aF([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.i=H.b(I.aF(["bind","if","ref","repeat","syntax"]),[P.e])
C.j=H.b(I.aF(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.l=new P.iR(!1)
$.ah=0
$.b6=null
$.dd=null
$.cS=!1
$.f7=null
$.f2=null
$.fd=null
$.ce=null
$.ci=null
$.d0=null
$.aZ=null
$.bv=null
$.bw=null
$.cT=!1
$.J=C.d
$.ao=null
$.cq=null
$.dA=null
$.dz=null
$.dv=null
$.du=null
$.dt=null
$.ds=null
$.p=V.hs()
$.fK="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fJ="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dV=null
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
I.$lazy(y,x,w)}})(["dr","$get$dr",function(){return H.f6("_$dart_dartClosure")},"ct","$get$ct",function(){return H.f6("_$dart_js")},"ek","$get$ek",function(){return H.ak(H.c8({
toString:function(){return"$receiver$"}}))},"el","$get$el",function(){return H.ak(H.c8({$method$:null,
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.ak(H.c8(null))},"en","$get$en",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"er","$get$er",function(){return H.ak(H.c8(void 0))},"es","$get$es",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.ak(H.eq(null))},"eo","$get$eo",function(){return H.ak(function(){try{null.$method$}catch(z){return z.message}}())},"eu","$get$eu",function(){return H.ak(H.eq(void 0))},"et","$get$et",function(){return H.ak(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cO","$get$cO",function(){return P.j5()},"bx","$get$bx",function(){return[]},"eV","$get$eV",function(){return P.hV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dp","$get$dp",function(){return{}},"eH","$get$eH",function(){return P.dM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"cP","$get$cP",function(){return P.dL(P.e,P.bE)},"eA","$get$eA",function(){return Z.aa(0)},"ey","$get$ey",function(){return Z.aa(511)},"at","$get$at",function(){return Z.aa(1)},"aU","$get$aU",function(){return Z.aa(2)},"aT","$get$aT",function(){return Z.aa(4)},"aV","$get$aV",function(){return Z.aa(8)},"aW","$get$aW",function(){return Z.aa(16)},"br","$get$br",function(){return Z.aa(32)},"bs","$get$bs",function(){return Z.aa(64)},"ez","$get$ez",function(){return Z.aa(96)},"aX","$get$aX",function(){return Z.aa(128)},"aS","$get$aS",function(){return Z.aa(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.A,[P.h,E.ap]]},{func:1,ret:P.D,args:[D.C]},{func:1,ret:P.D,args:[F.ai]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.A,[P.h,U.a8]]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.e,args:[P.A]},{func:1,ret:P.L,args:[W.v]},{func:1,args:[,]},{func:1,ret:W.v},{func:1,ret:P.t},{func:1,ret:P.L,args:[W.K,P.e,P.e,W.bP]},{func:1,ret:P.L,args:[W.aj]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.P]},{func:1,ret:W.K,args:[W.v]},{func:1,ret:P.L,args:[P.t,P.t]},{func:1,ret:-1,args:[P.a],opt:[P.ag]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:V.az,args:[P.t]},{func:1,ret:P.D,args:[F.aA,P.t,P.t]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:P.D,args:[P.aQ]},{func:1,ret:P.D,args:[W.a1]},{func:1,ret:P.L,args:[V.aw]},{func:1,args:[P.e]},{func:1,args:[,P.e]},{func:1,ret:-1,args:[W.v,W.v]}]
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
if(x==y)H.lc(d||a)
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
Isolate.aF=a.aF
Isolate.cY=a.cY
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
if(typeof dartMainRunner==="function")dartMainRunner(R.fa,[])
else R.fa([])})})()
//# sourceMappingURL=test.dart.js.map
